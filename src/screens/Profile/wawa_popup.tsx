import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
  RefreshControl,
} from 'react-native';
import ScreenContainer from '../../components/container/wawa_nterstitial_iconpipexpand';
import { RootStackScreenProps } from '@type/wawa_iconnewchat';
import { useTheme } from '@react-navigation/native';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';

import TitleWithBackButtonHeader from '../../components/header/wawa_matchinactive_header';
import axios from 'axios';
import { Keyboard } from 'react-native';
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from '@utility/wawa_iconpointscore';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import InviteStep from '../../components/invite/wawa_final';
import InviteCard from '../../components/invite/wawa_pangle_macau';

import InviteHeader from '../../components/invite/wawa_vipsport_header';
import FastImage from '../../components/common/wawa_iconarrowrightblack';
import LinearGradient from 'react-native-linear-gradient';
import { useAppSelector, useSelector } from '@hooks/wawa_root';
import {
  updateUserAuth,
  updateUserReferral,
} from '@redux/actions/wawa_loginsuccess';
import { useDispatch } from 'react-redux';
import { wawaEvent } from '@api';
import { wawaPhoneControls } from '@redux/reducers/wawa_umeng';
export default ({ navigation }: RootStackScreenProps<'邀请详情'>) => {
  const { colors, textVariants, icons, spacing } = useTheme();

  const userState = useSelector<wawaPhoneControls>('userReducer');
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);
  const [inviteList, setInviteList] = useState([]);

  const handleRefresh = async () => {
       let handler9: Array<any> = [925, 883, 420];
    let uploadb = String.fromCharCode(109,95,51,50,95,116,114,105,109,109,105,110,103,0);
    let whistle6 = String.fromCharCode(101,95,56,95,97,112,112,108,105,99,97,116,105,111,110,0);
    let defaultpredictionprofileO = 3;
    let reactnativejsZ = String.fromCharCode(120,95,52,95,97,117,116,104,101,110,116,105,99,97,116,101,0);
    let libjsic = String.fromCharCode(105,108,108,105,113,97,95,116,95,54,56,0);
    let about3 = 5.0;
    let fileV: Array<any> = [329, 495, 503];
    let iconbackwhiteB: Map<any, any> = new Map([[String.fromCharCode(107,95,56,52,95,109,109,99,111,115,0),704], [String.fromCharCode(115,109,111,111,116,104,101,100,95,53,95,49,49,0),847], [String.fromCharCode(115,104,111,114,116,101,110,95,110,95,51,54,0),91]]);
    let singaporey = String.fromCharCode(115,112,105,108,108,95,120,95,53,51,0);
    let goalD = 5;
    let bggradientb = String.fromCharCode(106,95,50,95,100,112,114,105,110,116,0);
    let auto_1R = 3.0;
   if (whistle6.endsWith(`${uploadb.length}`)) {
       let settingsS = 2.0;
       let bdxadsdkf = 1.0;
      for (let l = 0; l < 3; l++) {
          let modalN = String.fromCharCode(106,95,56,56,95,110,111,110,110,117,108,108,97,100,100,114,101,115,115,0);
          let datat: Array<any> = [880, 503, 668];
          let videocommonb = false;
          let iconpointscoree = String.fromCharCode(114,111,119,95,51,95,52,52,0);
         bdxadsdkf *= iconpointscoree.length % (Math.max(1, 5));
         modalN = "3";
         datat.push(modalN.length);
         videocommonb = datat.length == modalN.length;
         iconpointscoree += `${modalN.length}`;
      }
         bdxadsdkf -= 1;
      for (let n = 0; n < 1; n++) {
          let profileinactivef: Array<any> = [666, 998, 398];
          let blackT = String.fromCharCode(111,95,52,53,95,105,118,115,101,116,117,112,0);
          let sharewhiteI = 3.0;
          let thumbnailw: Map<any, any> = new Map([[String.fromCharCode(102,95,49,95,100,101,112,114,101,99,97,116,101,100,0),250], [String.fromCharCode(119,95,55,57,95,115,101,97,116,0),612], [String.fromCharCode(106,95,50,51,95,116,97,98,108,101,0),908]]);
          let sheetN: Map<any, any> = new Map([[String.fromCharCode(114,111,117,116,101,115,95,49,95,49,52,0),431], [String.fromCharCode(99,104,111,105,99,101,95,121,95,52,53,0),315], [String.fromCharCode(115,117,109,109,97,114,105,101,115,95,49,95,56,57,0),518]]);
         bdxadsdkf -= blackT.length | 1;
         profileinactivef = [thumbnailw.size];
         blackT = `${sheetN.size}`;
         sharewhiteI += parseFloat(`${3 * profileinactivef.length}`);
         thumbnailw.set(`${profileinactivef.length}`, sheetN.size);
      }
         settingsS += parseFloat(`${parseInt(`${bdxadsdkf}`)}`);
         bdxadsdkf -= parseInt(`${settingsS}`) + 2;
      while (1.89 > bdxadsdkf) {
         settingsS -= parseFloat(`${parseInt(`${bdxadsdkf}`)}`);
         break;
      }
      uploadb = `${iconbackwhiteB.size}`;
   }
   if (!fileV.includes(about3)) {
       let feedbackU = String.fromCharCode(118,97,114,105,97,116,105,111,110,95,114,95,56,52,0);
       let memberb = 4;
         memberb += 2 + memberb;
      let fcdaebecbcbafcdfceaaeccfeacdbV = 8009849 >= memberb;
      do {
         memberb |= (feedbackU == String.fromCharCode(100,0) ? feedbackU.length : memberb);
         if (fcdaebecbcbafcdfceaaeccfeacdbV) {
            break;
         }
      } while (((feedbackU.length - 3) == 5 && 1 == (3 - feedbackU.length)) && fcdaebecbcbafcdfceaaeccfeacdbV);
      for (let l = 0; l < 2; l++) {
         memberb &= 3;
      }
      while ((memberb * 2) >= 5) {
         memberb += (String.fromCharCode(121,0) == feedbackU ? feedbackU.length : memberb);
         break;
      }
          let networkd = String.fromCharCode(118,99,114,101,97,116,101,95,109,95,52,0);
         feedbackU += `${networkd.length}`;
      while (!feedbackU.startsWith(`${memberb}`)) {
         feedbackU = `${memberb}`;
         break;
      }
      fileV.push(handler9.length * 1);
   }
      libjsic += `${2 * handler9.length}`;
       let incidentE = String.fromCharCode(108,95,56,49,95,120,102,97,99,101,0);
       let nbatrophyT = false;
       let materiali = true;
          let goallogoO = false;
          let toponb = String.fromCharCode(112,95,51,54,95,115,116,99,98,0);
          let r_center_: Map<any, any> = new Map([[String.fromCharCode(114,95,52,56,95,101,120,112,114,101,115,115,105,111,110,115,0),178], [String.fromCharCode(106,95,54,95,97,99,114,111,115,115,0),998], [String.fromCharCode(108,95,53,48,95,119,97,114,110,105,110,103,115,0),228]]);
         incidentE += `${(incidentE == String.fromCharCode(66,0) ? incidentE.length : (goallogoO ? 3 : 2))}`;
         goallogoO = 3 > toponb.length;
         toponb += `${2 % (Math.max(2, toponb.length))}`;
         r_center_ = new Map([[`${r_center_.size}`, toponb.length]]);
      while (!nbatrophyT) {
         incidentE += `${((materiali ? 4 : 5) >> (Math.min(Math.abs((nbatrophyT ? 3 : 2)), 3)))}`;
         break;
      }
      uploadb += "3";
      handler9 = [3 & goalD];
   if (goalD > 4) {
      singaporey = "3";
   }
      handler9.push(reactnativejsZ.length % (Math.max(2, 8)));
   for (let d = 0; d < 3; d++) {
      fileV.push(defaultpredictionprofileO >> (Math.min(Math.abs(parseInt(`${about3}`)), 5)));
   }
   let arrowrightt = uploadb.length <= 4954512;
   do {
      uploadb += "3";
      if (arrowrightt) {
         break;
      }
   } while ((bggradientb == uploadb) && arrowrightt);
   let progressP = reactnativejsZ.length >= 8947827;
   do {
      reactnativejsZ += `${iconbackwhiteB.size}`;
      if (progressP) {
         break;
      }
   } while (progressP && (!reactnativejsZ.startsWith(`${iconbackwhiteB.size}`)));
      goalD <<= Math.min(2, fileV.length);
   while (reactnativejsZ.length > libjsic.length) {
      reactnativejsZ = `${reactnativejsZ.length}`;
      break;
   }

    setRefreshing(true);

      goalD /= Math.max(2 & defaultpredictionprofileO, 4);
      handler9 = [reactnativejsZ.length];
   let updatesf = uploadb == String.fromCharCode(57,95,50,50,54,0);
   do {
      uploadb = `${(singaporey == String.fromCharCode(72,0) ? goalD : singaporey.length)}`;
      if (updatesf) {
         break;
      }
   } while ((!uploadb.includes(`${iconbackwhiteB.size}`)) && updatesf);
   let regengP = 7653950 <= defaultpredictionprofileO;
   do {
      defaultpredictionprofileO -= iconbackwhiteB.size;
      if (regengP) {
         break;
      }
   } while (((singaporey.length * 4) > 4 && 3 > (4 * defaultpredictionprofileO)) && regengP);
   for (let v = 0; v < 1; v++) {
      handler9.push(uploadb.length ^ reactnativejsZ.length);
   }
      handler9 = [(singaporey == String.fromCharCode(70,0) ? defaultpredictionprofileO : singaporey.length)];
   let redgoala = libjsic.length >= 8495238;
   do {
      libjsic += `${2 | bggradientb.length}`;
      if (redgoala) {
         break;
      }
   } while (redgoala && (singaporey != libjsic));
      uploadb += `${reactnativejsZ.length & 2}`;
   let telemetry6 = libjsic.length >= 7682297;
   do {
       let footballfieldo = false;
       let hiadQ: Array<any> = [796, 600];
       let icondownimgu = String.fromCharCode(102,95,53,57,95,99,111,110,116,111,117,114,0);
         footballfieldo = hiadQ.includes(footballfieldo);
       let chatbotphotoL = 4.0;
       let giftI = String.fromCharCode(122,95,55,51,95,114,97,119,0);
       let scrollviewW = String.fromCharCode(102,105,116,116,101,100,95,48,95,55,55,0);
      if (hiadQ.length >= 1 || (1 & hiadQ.length) >= 5) {
          let privilegek = String.fromCharCode(111,115,99,105,108,108,111,115,99,111,112,101,95,52,95,54,48,0);
          let style2 = String.fromCharCode(99,111,110,110,101,99,116,101,100,95,108,95,51,49,0);
          let flyerE = 2.0;
          let hoverT = String.fromCharCode(117,108,116,105,95,108,95,52,57,0);
         hiadQ.push(((footballfieldo ? 4 : 3)));
         privilegek += `${privilegek.length}`;
         style2 = "3";
         flyerE += hoverT.length * 2;
         hoverT += "3";
      }
         icondownimgu = `${giftI.length}`;
      for (let z = 0; z < 3; z++) {
          let progress2 = true;
          let bellreminderI: Array<any> = [733, 736];
          let shirtU = String.fromCharCode(115,111,114,116,95,120,95,51,0);
          let iconshareG = false;
          let libavcodecg: Map<any, any> = new Map([[String.fromCharCode(121,95,53,52,95,101,110,106,105,110,0),545], [String.fromCharCode(112,115,104,95,118,95,50,51,0),456], [String.fromCharCode(121,95,54,48,95,111,110,101,0),16]]);
         giftI = `${((progress2 ? 1 : 2))}`;
         progress2 = (shirtU.length * bellreminderI.length) < 56;
         bellreminderI.push(shirtU.length);
         iconshareG = String.fromCharCode(80,0) == shirtU;
         libavcodecg = new Map([[`${bellreminderI.length}`, shirtU.length & 2]]);
      }
         footballfieldo = icondownimgu.length >= 95 && !footballfieldo;
         hiadQ.push(giftI.length | 3);
      for (let o = 0; o < 2; o++) {
         giftI = `${parseInt(`${chatbotphotoL}`)}`;
      }
      libjsic += `${defaultpredictionprofileO & 1}`;
      if (telemetry6) {
         break;
      }
   } while (telemetry6 && (bggradientb == String.fromCharCode(54,0) && 5 >= libjsic.length));
   while ((defaultpredictionprofileO / 3) > 2) {
      defaultpredictionprofileO |= 1 - defaultpredictionprofileO;
      break;
   }
   if (4.91 <= about3) {
      about3 *= whistle6.length >> (Math.min(Math.abs(2), 5));
   }
   while (5 <= libjsic.length) {
      uploadb += `${singaporey.length}`;
      break;
   }
    await refreshUserState();

      whistle6 = "1";
   if (1 >= (iconbackwhiteB.size & 5)) {
       let applicationm = 5.0;
       let indexD = 5;
       let nativemoduleU = String.fromCharCode(99,97,114,111,117,115,101,108,95,48,95,56,54,0);
       let a_animationE = 3;
       let dacccfaabfbcbadeebddcabacdffdbJ = 0.0;
         indexD *= nativemoduleU.length;
         dacccfaabfbcbadeebddcabacdffdbJ *= parseFloat(`${parseInt(`${applicationm}`) + 3}`);
      while (3.56 >= (2.9 * applicationm) && (a_animationE + 3) >= 1) {
         applicationm *= (parseFloat(`${String.fromCharCode(67,0) == nativemoduleU ? indexD : nativemoduleU.length}`));
         break;
      }
         indexD >>= Math.min(Math.abs(nativemoduleU.length ^ 2), 3);
      let humidity8 = applicationm <= 6131652.0;
      do {
         applicationm -= (parseFloat(`${String.fromCharCode(85,0) == nativemoduleU ? nativemoduleU.length : parseInt(`${dacccfaabfbcbadeebddcabacdffdbJ}`)}`));
         if (humidity8) {
            break;
         }
      } while ((4.33 > (5.0 * applicationm)) && humidity8);
         nativemoduleU += `${3 - a_animationE}`;
       let subsW = 1;
       let switch_o41 = 3;
          let iconchatsendL: Array<any> = [91, 567, 841];
         applicationm -= parseFloat(`${parseInt(`${dacccfaabfbcbadeebddcabacdffdbJ}`) >> (Math.min(4, Math.abs(a_animationE)))}`);
         iconchatsendL = [iconchatsendL.length];
      let bottomZ = a_animationE >= 8218663;
      do {
          let leakcheckerk = String.fromCharCode(109,97,115,115,95,48,95,49,49,0);
          let graph3 = String.fromCharCode(102,95,51,48,95,115,116,114,101,97,109,105,110,102,111,0);
          let shootnogoalz = String.fromCharCode(109,95,57,56,95,100,101,108,111,103,111,0);
          let pagex: Array<any> = [764, 894, 851];
         a_animationE <<= Math.min(Math.abs(subsW), 2);
         leakcheckerk += `${shootnogoalz.length * 1}`;
         graph3 += `${(String.fromCharCode(86,0) == graph3 ? pagex.length : graph3.length)}`;
         shootnogoalz += `${shootnogoalz.length << (Math.min(Math.abs(3), 1))}`;
         pagex = [pagex.length];
         if (bottomZ) {
            break;
         }
      } while ((a_animationE > applicationm) && bottomZ);
          let storew = String.fromCharCode(105,111,101,114,114,95,51,95,56,50,0);
         switch_o41 <<= Math.min(Math.abs(subsW), 3);
         storew = `${storew.length - storew.length}`;
       let livenodatabgimgP = true;
         a_animationE += nativemoduleU.length % 3;
      if (4 == (nativemoduleU.length << (Math.min(3, Math.abs(a_animationE)))) || (4 << (Math.min(4, Math.abs(a_animationE)))) == 4) {
         a_animationE >>= Math.min(Math.abs(2 ^ switch_o41), 3);
      }
         applicationm -= parseFloat(`${3}`);
      let tickede = switch_o41 >= 4950833;
      do {
         switch_o41 /= Math.max(a_animationE, 3);
         if (tickede) {
            break;
         }
      } while ((!livenodatabgimgP) && tickede);
      handler9 = [singaporey.length ^ reactnativejsZ.length];
   }
      libjsic += "1";
      defaultpredictionprofileO >>= Math.min(reactnativejsZ.length, 3);
      fileV.push(libjsic.length);
       let libpangleflippedJ = String.fromCharCode(114,95,55,48,95,99,111,100,101,115,116,114,101,97,109,0);
       let teamF: Array<any> = [873, 530];
       let smallsoundw = 2.0;
      if (smallsoundw > parseFloat(`${libpangleflippedJ.length}`)) {
          let notificationgrayn = 5.0;
          let imagenomoredataC: Array<any> = [688, 492, 645];
          let libflipperI = String.fromCharCode(119,111,114,107,95,104,95,49,48,48,0);
         libpangleflippedJ = "3";
         notificationgrayn /= Math.max(1, imagenomoredataC.length);
         imagenomoredataC.push((libflipperI == String.fromCharCode(53,0) ? parseInt(`${notificationgrayn}`) : libflipperI.length));
      }
      if (4.9 < (3.36 / (Math.max(4, smallsoundw)))) {
          let sharedd = String.fromCharCode(117,95,51,57,95,116,120,104,97,115,104,0);
         teamF = [1];
         sharedd = `${sharedd.length}`;
      }
      while ((smallsoundw / (Math.max(parseFloat(`${teamF.length}`), 3))) > 2.2 || 2 > (teamF.length % 1)) {
         smallsoundw -= parseFloat(`${parseInt(`${smallsoundw}`) | teamF.length}`);
         break;
      }
         smallsoundw *= parseFloat(`${teamF.length / 2}`);
         teamF.push(teamF.length);
         teamF = [teamF.length];
       let main_sV = 3.0;
       let statsnomoredataT = 3.0;
       let placeholderz = 2.0;
          let gestureE = false;
          let profileinactivez = String.fromCharCode(117,110,98,97,110,95,52,95,49,57,0);
          let mode1 = String.fromCharCode(101,110,100,97,95,99,95,54,52,0);
         teamF.push(libpangleflippedJ.length);
         gestureE = profileinactivez == mode1;
         profileinactivez += `${profileinactivez.length}`;
         mode1 = `${3 ^ mode1.length}`;
      handler9 = [3 ^ uploadb.length];
       let sharewhited = String.fromCharCode(100,95,50,48,95,114,112,122,97,0);
       let eighteenn = String.fromCharCode(122,108,105,98,95,103,95,57,55,0);
       let anytimed = String.fromCharCode(100,113,99,111,101,102,102,95,105,95,57,55,0);
       let starb = String.fromCharCode(100,101,118,101,108,111,112,109,101,110,116,95,122,95,50,54,0);
       let iconshareD = String.fromCharCode(114,95,50,57,0);
      for (let e = 0; e < 1; e++) {
         eighteenn = `${3 % (Math.max(3, starb.length))}`;
      }
      for (let z = 0; z < 3; z++) {
          let airbnbstarselectedX: Array<any> = [592, 992];
         sharewhited += `${(iconshareD == String.fromCharCode(65,0) ? iconshareD.length : sharewhited.length)}`;
         airbnbstarselectedX = [2];
      }
         anytimed = `${(String.fromCharCode(115,0) == anytimed ? anytimed.length : starb.length)}`;
         eighteenn += `${sharewhited.length / (Math.max(eighteenn.length, 8))}`;
      uploadb += "1";
       let iconarrowrightblackP = true;
       let grayO = String.fromCharCode(116,95,52,51,95,111,97,117,116,104,0);
      if (grayO.length > 4 && iconarrowrightblackP) {
         grayO = `${((iconarrowrightblackP ? 4 : 3) >> (Math.min(grayO.length, 2)))}`;
      }
          let homeloadingV = String.fromCharCode(110,95,48,95,113,117,97,110,116,105,122,101,114,115,0);
          let ajaxV = String.fromCharCode(109,101,100,105,97,110,95,56,95,49,48,48,0);
         grayO += `${(grayO == String.fromCharCode(56,0) ? (iconarrowrightblackP ? 3 : 4) : grayO.length)}`;
         homeloadingV = `${ajaxV.length % 1}`;
         ajaxV = `${3 % (Math.max(7, ajaxV.length))}`;
          let aboutt = String.fromCharCode(106,95,56,49,95,100,105,110,102,0);
          let gray9 = 5.0;
          let arrowupw = 2.0;
         iconarrowrightblackP = aboutt.startsWith(`${gray9}`);
         aboutt = `${parseInt(`${arrowupw}`) + parseInt(`${arrowupw}`)}`;
         gray9 += parseInt(`${arrowupw}`) & 1;
         iconarrowrightblackP = !iconarrowrightblackP;
          let neonW = String.fromCharCode(119,95,56,57,95,99,116,114,120,0);
         iconarrowrightblackP = grayO == neonW;
         iconarrowrightblackP = grayO.includes(`${iconarrowrightblackP}`);
      uploadb += `${grayO.length % (Math.max(3, whistle6.length))}`;
      libjsic = `${goalD}`;
      goalD |= 2;
       let selectc = String.fromCharCode(109,95,49,56,95,99,111,109,112,97,115,115,0);
       let shielddoneH = false;
      for (let d = 0; d < 3; d++) {
         selectc = `${selectc.length}`;
      }
          let homeplayer7 = true;
          let regeng4: Array<any> = [String.fromCharCode(112,95,54,56,95,99,111,110,99,104,0), String.fromCharCode(112,101,105,114,115,95,103,95,52,54,0)];
         selectc = `${regeng4.length | 1}`;
       let textM = false;
          let checkboxJ = String.fromCharCode(115,95,56,53,95,115,117,98,116,114,97,99,116,105,111,110,0);
          let appsB = 1.0;
          let projectF = String.fromCharCode(113,117,111,116,105,101,110,116,95,114,95,52,48,0);
         shielddoneH = selectc.includes(`${textM}`);
         checkboxJ = `${parseInt(`${appsB}`) << (Math.min(projectF.length, 5))}`;
         appsB -= parseFloat(`${1 ^ parseInt(`${appsB}`)}`);
         projectF = "2";
         shielddoneH = !shielddoneH;
      while (selectc.length == 4 || !shielddoneH) {
          let editG = 1;
          let trashV = false;
          let giftbuttonq = false;
          let unfillK = 0.0;
          let stylesM = 1;
         shielddoneH = !textM;
         editG /= Math.max(1, parseInt(`${unfillK}`) ^ 1);
         trashV = !giftbuttonq && 55.64 >= unfillK;
         giftbuttonq = stylesM < 93 || 92.67 < unfillK;
         stylesM *= 3;
         break;
      }
      bggradientb = "3";
   while (!singaporey.includes(`${bggradientb.length}`)) {
       let libaneQ = String.fromCharCode(99,97,110,116,95,119,95,49,57,0);
       let rewind1 = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,100,95,48,95,53,48,0);
       let blackG = 3;
         libaneQ += `${2 - rewind1.length}`;
       let readA = String.fromCharCode(105,110,105,116,105,97,108,108,121,95,111,95,51,50,0);
       let sourcer = String.fromCharCode(98,95,56,49,95,98,105,108,105,110,0);
         libaneQ += `${blackG >> (Math.min(rewind1.length, 5))}`;
         rewind1 = `${sourcer.length}`;
      for (let p = 0; p < 3; p++) {
          let applicationz: Array<any> = [858, 66, 462];
          let chinasameG = String.fromCharCode(118,101,114,115,105,111,110,103,101,110,101,114,97,116,101,95,102,95,53,56,0);
          let updatesL: Map<any, any> = new Map([[String.fromCharCode(117,115,101,114,110,97,109,101,95,120,95,53,50,0),String.fromCharCode(122,95,51,48,95,100,105,103,105,116,0)], [String.fromCharCode(100,95,51,56,95,114,101,105,109,112,111,114,116,0),String.fromCharCode(106,95,50,55,95,109,95,54,55,0)]]);
          let imagenomoredataV: Array<any> = [String.fromCharCode(115,97,109,112,108,101,95,118,95,50,49,0), String.fromCharCode(99,116,108,111,117,116,112,117,116,95,101,95,50,56,0), String.fromCharCode(113,95,56,95,99,120,100,97,116,97,0)];
         rewind1 += `${(String.fromCharCode(105,0) == sourcer ? sourcer.length : applicationz.length)}`;
         applicationz.push(2 - updatesL.size);
         chinasameG = `${chinasameG.length}`;
         updatesL = new Map([[`${updatesL.size}`, 3 ^ updatesL.size]]);
         imagenomoredataV = [chinasameG.length];
      }
       let assetsB = String.fromCharCode(111,95,51,50,95,118,109,97,102,0);
       let sendY = String.fromCharCode(100,105,115,99,111,118,101,114,95,98,95,51,51,0);
          let member5 = true;
         readA = `${assetsB.length}`;
         member5 = !member5;
         sendY = `${2 >> (Math.min(3, Math.abs(blackG)))}`;
      while (readA.length > 4) {
         readA += `${3 | rewind1.length}`;
         break;
      }
      bggradientb += `${uploadb.length - rewind1.length}`;
      break;
   }
    setRefreshing(false);
  };
  const refreshUserState = async () => {
       let libjsijniprofilerp = String.fromCharCode(117,95,55,51,95,103,101,110,101,114,97,116,101,0);
    let scorepopsoundj = 1.0;
    let launchert = 5.0;
    let statisticsinactive9 = 0;
    let sportsI = String.fromCharCode(118,95,56,48,95,100,105,115,112,111,115,101,100,0);
    let bingt = String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,115,95,111,95,49,57,0);
    let iconarrowrightC = 3.0;
    let znewarchdefaults1 = 0.0;
    let change6 = 4.0;
      statisticsinactive9 |= statisticsinactive9;
      sportsI += `${statisticsinactive9}`;
   while ((bingt.length + parseInt(`${scorepopsoundj}`)) >= 5) {
      scorepopsoundj *= (sportsI == String.fromCharCode(100,0) ? sportsI.length : parseInt(`${launchert}`));
      break;
   }
   while ((3.91 - launchert) > 1.69) {
       let megaphoneg: Map<any, any> = new Map([[String.fromCharCode(119,95,57,54,0),808], [String.fromCharCode(118,116,101,115,116,95,114,95,54,50,0),769]]);
       let profile8 = String.fromCharCode(115,104,105,102,116,115,95,116,95,50,0);
       let countryI = String.fromCharCode(116,95,51,51,95,112,111,108,121,115,116,97,114,0);
         megaphoneg = new Map([[profile8, countryI.length + profile8.length]]);
         megaphoneg.set(`${profile8}`, megaphoneg.size % 1);
          let elementsS: Array<any> = [String.fromCharCode(108,95,52,48,95,118,105,109,101,111,0), String.fromCharCode(120,95,56,95,110,101,97,114,101,115,116,0)];
          let disconnectedlogot = true;
         megaphoneg = new Map([[`${elementsS.length}`, elementsS.length]]);
         disconnectedlogot = (disconnectedlogot ? disconnectedlogot : disconnectedlogot);
          let assetsk = false;
         profile8 += "1";
         assetsk = !assetsk || !assetsk;
      if (profile8.length > 5) {
          let brightnessJ = String.fromCharCode(115,95,56,95,97,97,99,112,115,121,0);
         profile8 = "1";
         brightnessJ += `${brightnessJ.length << (Math.min(brightnessJ.length, 3))}`;
      }
         megaphoneg.set(`${countryI}`, (countryI == String.fromCharCode(100,0) ? megaphoneg.size : countryI.length));
      for (let c = 0; c < 3; c++) {
         megaphoneg.set(`${countryI}`, countryI.length >> (Math.min(Math.abs(2), 1)));
      }
      for (let o = 0; o < 2; o++) {
          let clubG: Map<any, any> = new Map([[String.fromCharCode(112,114,105,118,97,99,121,95,102,95,55,53,0),true ], [String.fromCharCode(103,95,50,55,0),false ]]);
          let rightN: Map<any, any> = new Map([[String.fromCharCode(105,95,52,54,95,115,104,105,101,108,100,0),false ], [String.fromCharCode(97,116,116,97,99,104,95,104,95,51,54,0),true ], [String.fromCharCode(111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,95,53,95,56,54,0),true ]]);
          let dplusP = String.fromCharCode(117,95,52,55,95,118,99,111,109,98,105,110,101,0);
         megaphoneg = new Map([[`${rightN.size}`, clubG.size - rightN.size]]);
         clubG.set(dplusP, dplusP.length);
      }
         profile8 = `${3 * profile8.length}`;
      launchert += parseInt(`${scorepopsoundj}`) | parseInt(`${launchert}`);
      break;
   }

    const result = await wawaEvent.getUserDetails();

      sportsI += "3";
      libjsijniprofilerp = `${1 >> (Math.min(Math.abs(parseInt(`${launchert}`)), 2))}`;
      libjsijniprofilerp = `${(String.fromCharCode(88,0) == bingt ? parseInt(`${scorepopsoundj}`) : bingt.length)}`;
   while ((parseInt(`${launchert}`) - bingt.length) >= 3 || 1.32 >= (launchert - 5.3)) {
       let tempnodatagifo: Array<any> = [617, 235];
       let basketballO = true;
       let downloader8 = String.fromCharCode(97,95,57,49,95,109,105,100,100,108,101,0);
         basketballO = !basketballO;
         basketballO = tempnodatagifo.includes(basketballO);
      for (let n = 0; n < 1; n++) {
         downloader8 = `${(3 ^ (basketballO ? 2 : 5))}`;
      }
         basketballO = (56 > (downloader8.length | (basketballO ? downloader8.length : 56)));
      let rewardvideoO = 7138249 <= downloader8.length;
      do {
         downloader8 += `${downloader8.length}`;
         if (rewardvideoO) {
            break;
         }
      } while ((5 == downloader8.length && !basketballO) && rewardvideoO);
         tempnodatagifo = [((basketballO ? 3 : 1) ^ 1)];
         downloader8 = `${tempnodatagifo.length / (Math.max(2, 8))}`;
         downloader8 += `${(tempnodatagifo.length << (Math.min(1, Math.abs((basketballO ? 3 : 4)))))}`;
      if (4 < downloader8.length) {
         downloader8 += `${tempnodatagifo.length % (Math.max(downloader8.length, 6))}`;
      }
      launchert += 3 * downloader8.length;
      break;
   }
    if (result == null) {

      iconarrowrightC *= parseFloat(`${2}`);
   let middleK = 9895506 <= statisticsinactive9;
   do {
       let register_o0e = 3.0;
       let iconpointscorep = String.fromCharCode(122,95,50,51,95,104,119,116,105,109,101,0);
       let ncopy_hyU = String.fromCharCode(102,95,50,53,95,117,112,100,97,116,101,0);
       let episode5 = String.fromCharCode(101,99,111,117,110,116,95,57,95,52,51,0);
      for (let g = 0; g < 3; g++) {
         ncopy_hyU += `${iconpointscorep.length + 3}`;
      }
      statisticsinactive9 *= parseInt(`${launchert}`) << (Math.min(2, Math.abs(2)));
      register_o0e *= parseInt(`${register_o0e}`) | 2;
      if (middleK) {
         break;
      }
   } while (middleK && (statisticsinactive9 <= 1));
   for (let o = 0; o < 2; o++) {
       let settingW = String.fromCharCode(103,95,49,55,95,121,117,118,112,116,111,121,117,121,0);
       let bangV = 2.0;
       let nextQ = String.fromCharCode(102,111,110,116,95,100,95,51,52,0);
       let largeB = String.fromCharCode(106,95,50,52,95,105,110,118,111,99,97,116,105,111,110,115,0);
         bangV /= Math.max(1, 1);
          let entryw = String.fromCharCode(105,110,118,105,116,101,114,95,118,95,56,54,0);
          let listb = 5.0;
         settingW += `${largeB.length + entryw.length}`;
         entryw += `${parseInt(`${listb}`)}`;
      let bingj = nextQ.length <= 8130244;
      do {
         nextQ = `${nextQ.length}`;
         if (bingj) {
            break;
         }
      } while (bingj && (4.31 <= (bangV + 1.24)));
       let arrowJ = String.fromCharCode(108,95,51,53,95,103,101,115,116,117,114,101,0);
         nextQ = `${largeB.length}`;
      let predictionbannersharedB = String.fromCharCode(121,113,54,118,100,51,100,107,48,0) == nextQ;
      do {
         nextQ = "3";
         if (predictionbannersharedB) {
            break;
         }
      } while (predictionbannersharedB && (1 < settingW.length));
      if (settingW.startsWith(`${largeB.length}`)) {
         largeB += `${largeB.length & nextQ.length}`;
      }
       let libfbjniE = String.fromCharCode(115,117,98,106,95,99,95,56,50,0);
       let m_animation6 = String.fromCharCode(120,95,50,48,95,104,97,114,109,111,110,105,99,0);
      for (let o = 0; o < 2; o++) {
         bangV *= 3 / (Math.max(10, largeB.length));
      }
      for (let c = 0; c < 3; c++) {
         arrowJ = `${largeB.length >> (Math.min(3, libfbjniE.length))}`;
      }
         nextQ += `${largeB.length}`;
         libfbjniE += "2";
      statisticsinactive9 &= parseInt(`${iconarrowrightC}`) / 1;
   }
       let wifirouterm = 3.0;
       let chatroombackgroundo: Array<any> = [497, 300, 869];
       let megaphoner = String.fromCharCode(101,114,99,95,109,95,49,48,0);
      for (let o = 0; o < 1; o++) {
         wifirouterm /= Math.max(5, megaphoner.length);
      }
      while ((wifirouterm / 2.62) > 4.93) {
         wifirouterm *= megaphoner.length;
         break;
      }
         megaphoner = `${megaphoner.length + chatroombackgroundo.length}`;
      for (let e = 0; e < 2; e++) {
         chatroombackgroundo.push(parseInt(`${wifirouterm}`));
      }
       let dataI = false;
       let homeiconm = false;
          let q_countg = String.fromCharCode(112,97,99,107,101,114,95,121,95,52,56,0);
         megaphoner += `${3 | parseInt(`${wifirouterm}`)}`;
         q_countg += `${3 >> (Math.min(1, q_countg.length))}`;
          let langX = false;
          let binit_uz1 = String.fromCharCode(112,114,111,99,101,115,115,111,114,115,95,98,95,50,56,0);
         megaphoner += `${1 / (Math.max(9, binit_uz1.length))}`;
         langX = (!langX ? !langX : !langX);
         binit_uz1 += "2";
      let libavutilH = megaphoner.length <= 7450849;
      do {
         megaphoner += `${1 | megaphoner.length}`;
         if (libavutilH) {
            break;
         }
      } while (libavutilH && ((1 / (Math.max(4, megaphoner.length))) <= 2 || (megaphoner.length % (Math.max(1, 6))) <= 5));
      if (1 == chatroombackgroundo.length) {
         dataI = (chatroombackgroundo.length & megaphoner.length) >= 3;
      }
      bingt += `${megaphoner.length}`;
      return;
    }

    await dispatch(updateUserAuth(result));

      iconarrowrightC += parseFloat(`${parseInt(`${znewarchdefaults1}`)}`);
   for (let r = 0; r < 2; r++) {
      sportsI += "3 & statisticsinactive9";
   }
   let projectx = 8063660.0 >= znewarchdefaults1;
   do {
      znewarchdefaults1 += (parseFloat(`${String.fromCharCode(55,0) == libjsijniprofilerp ? libjsijniprofilerp.length : parseInt(`${scorepopsoundj}`)}`));
      if (projectx) {
         break;
      }
   } while (projectx && (1.37 >= (scorepopsoundj + znewarchdefaults1)));
      scorepopsoundj *= bingt.length / 2;

    return;
  };

  useEffect(() => {
    

    let mergedArray;

    if (userState.user?.userUpline.created_at != '') {
      mergedArray = userState.user?.userInvitedUserList.concat(userState.user.userUpline);
    } else {
      mergedArray = userState.user.userInvitedUserList;
    }

    mergedArray.sort((a: any, b: any) => {
      let dateA: any;
      dateA = new Date(a.created_at);
      let dateB: any;

      dateB = new Date(b.created_at);
      return dateB - dateA;
    });

    mergedArray = mergedArray.map((item: any) => {
      let displayText = '';
      if (item.text) {
        displayText = item.text;
        item.invited_vip_reward_day = item.vip_reward_day;
      } else {
        displayText = item.title ;
      }

      return { ...item, displayText: displayText };
    });
    console.log('mergedArray');
    console.log(mergedArray);
    setInviteList(mergedArray);
  }, []);

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title="累计奖励明细" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        { }
        <LinearGradient
          colors={['#323638', '#1a1d20']} 
          locations={[0.1, 1]}
          start={{ x: 1, y: 0 }} 
          end={{ x: 0, y: 1 }} 
          style={{
            marginTop: 40,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 15,
            flexDirection: 'row', 
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: 120,
          }}>
          <View style={styles.container}>
            { }
            <Text style={styles.title}>{userState.user?.userTotalInvite}</Text>
            <Text style={styles.subTitle}>已邀请人数</Text>
          </View>

          <View style={styles.container}>
            { }
            <Text style={styles.title}>
              {userState.user?.userAccumulateRewardDay}
            </Text>
            <Text style={styles.subTitle}>累计获得天数</Text>
          </View>
        </LinearGradient>

        { }
        <View style={{ marginTop: 40, alignItems: 'center' }}>
          <Text
            style={{ ...textVariants.header, fontSize: 16, fontWeight: '700' }}>
            邀请记录
          </Text>

          {inviteList.length > 0 && (
            <View
              style={{
                marginTop: 20,
                marginBottom: 40,
                backgroundColor: '#1D2023',
                borderRadius: 15,
                overflow: 'hidden',
                width: '100%',
              }}>
              {inviteList.map(item => (
                <View
                  key={item.displayText}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                  }}>
                  <View style={{ flex: 1, paddingRight: 10 }}>
                    <Text
                      style={{ fontSize: 16, color: '#fff' }}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {item.displayText}
                    </Text>
                    <Text style={{ color: '#9c9c9c' }}>{item.created_at}</Text>
                  </View>

                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: colors.primary,
                        fontSize: 16,
                        flex: 1,
                      }}>
                      +{item.invited_vip_reward_day}天
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {inviteList.length == 0 && (
            <View
              style={{
                marginTop: 20,
                marginBottom: 40,
                backgroundColor: '#1D2023',
                borderRadius: 15,
                overflow: 'hidden',
                width: '100%',
              }}>
              <View
                style={{
                  flexDirection: 'row',

                  alignContent: 'center',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                }}>
                <View>
                  <Text style={{ color: '#fff' }}>暂时无邀请记录</Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  backgroundImage: {
    flex: 1, 
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 25,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '900',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#9C9C9C',
  },
});
