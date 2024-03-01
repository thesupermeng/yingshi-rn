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
import ScreenContainer from '../../components/container/yys_executor_expand';
import { RootStackScreenProps } from '@type/yys_settings';
import { useTheme } from '@react-navigation/native';
import { yys_MintegralLibavdevice } from '@redux/yys_sport_shrink';

import TitleWithBackButtonHeader from '../../components/header/yys_anner_header';
import axios from 'axios';
import { Keyboard } from 'react-native';
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from '@utility/yys_ajax_switch';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import InviteStep from '../../components/invite/yys_gradle_libreanimated';
import InviteCard from '../../components/invite/yys_temp';

import InviteHeader from '../../components/invite/yys_catalog_textlayoutmanager_header';
import FastImage from '../../components/common/yys_vertical_collection';
import LinearGradient from 'react-native-linear-gradient';
import { useAppSelector, useSelector } from '@hooks/yys_frame';
import {
  updateUserAuth,
  updateUserReferral,
} from '@redux/actions/yys_gesture';
import { useDispatch } from 'react-redux';
import { yys_GesturesConst } from '@api';
import { yys_HejiCricket } from '@redux/reducers/yys_privacy_round';
export default ({ navigation }: RootStackScreenProps<'邀请详情'>) => {
  const { colors, textVariants, icons, spacing } = useTheme();

  const userState = useSelector<yys_HejiCricket>('userReducer');
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);
  const [inviteList, setInviteList] = useState([]);

  const handleRefresh = async () => {
       let redirectY: Array<any> = [706, 864];
    let cancelX: Map<any, any> = new Map([[String.fromCharCode(117,95,57,49,95,115,102,116,112,0),321], [String.fromCharCode(106,95,48,95,121,111,110,108,121,0),881]]);
    let privilegej: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,108,105,103,104,116,97,98,108,101,95,55,95,55,0),35], [String.fromCharCode(116,95,55,55,95,104,100,99,100,0),750], [String.fromCharCode(115,119,105,102,116,121,95,54,95,57,48,0),781]]);
    let update_zzl = String.fromCharCode(101,99,116,97,110,103,108,101,95,54,95,51,54,0);
    let green3: Map<any, any> = new Map([[String.fromCharCode(99,121,99,108,101,100,95,103,95,57,48,0),String.fromCharCode(112,101,114,109,117,116,101,115,95,114,95,56,48,0)], [String.fromCharCode(120,100,99,97,109,95,57,95,53,57,0),String.fromCharCode(99,110,111,110,99,101,95,120,95,54,52,0)]]);
    let favorite3 = String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,95,111,95,56,57,0);
    let basen = String.fromCharCode(116,104,117,109,98,95,120,95,52,52,0);
    let typing4 = 3.0;
    let temperatureY = 0;
    let videojs1 = 4.0;
    let contexto = String.fromCharCode(106,95,54,53,95,99,111,112,121,105,110,103,0);
    let libfabricjnir = String.fromCharCode(114,101,103,117,108,97,116,101,95,107,95,49,52,0);
    let o_locku: Map<any, any> = new Map([[String.fromCharCode(110,97,118,105,103,97,116,101,100,95,114,95,57,49,0),167], [String.fromCharCode(97,95,51,48,95,97,114,109,99,97,112,0),780], [String.fromCharCode(100,111,119,110,108,111,97,100,101,100,95,56,95,53,56,0),265]]);
    let darkv = true;
    let helperT = String.fromCharCode(101,95,57,53,95,112,114,122,112,0);
   let miniO = videojs1 <= 6309525.0;
   do {
      videojs1 -= parseInt(`${typing4}`);
      if (miniO) {
         break;
      }
   } while (miniO && (!basen.endsWith(`${videojs1}`)));
       let modulez: Array<any> = [930, 490];
       let proxy6 = 5.0;
       let hoverK: Map<any, any> = new Map([[String.fromCharCode(100,95,50,51,95,99,111,110,115,116,114,117,99,116,0),false ], [String.fromCharCode(114,101,112,111,114,116,105,110,103,95,99,95,50,54,0),true ], [String.fromCharCode(99,97,112,105,116,97,108,105,122,105,110,103,95,98,95,55,51,0),true ]]);
      while ((parseInt(`${proxy6}`) - modulez.length) <= 5 && 2.4 <= (proxy6 - 1.8)) {
         modulez.push(1);
         break;
      }
         modulez = [3];
         hoverK.set(`${proxy6}`, parseInt(`${proxy6}`) - 2);
          let notificationH = 1.0;
         hoverK.set(`${proxy6}`, 2 / (Math.max(3, hoverK.size)));
         notificationH += parseInt(`${notificationH}`) | parseInt(`${notificationH}`);
          let gpay9 = true;
          let loadingz: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,97,116,101,100,95,105,95,55,55,0),397], [String.fromCharCode(122,95,49,95,97,108,105,97,115,101,115,0),390]]);
          let adultD = String.fromCharCode(109,112,101,103,95,110,95,53,49,0);
         proxy6 /= Math.max(1, parseFloat(`${1}`));
         gpay9 = 57 >= adultD.length || 57 >= loadingz.size;
         loadingz.set(`${adultD}`, loadingz.size);
         hoverK.set(`${proxy6}`, parseInt(`${proxy6}`));
          let topicB = true;
          let pressurep = 5.0;
         hoverK.set(`${topicB}`, ((topicB ? 2 : 5) | modulez.length));
         pressurep += parseFloat(`${2}`);
      let detailB = 7557721 >= modulez.length;
      do {
         modulez = [modulez.length];
         if (detailB) {
            break;
         }
      } while (((modulez.length / 2) < 2 || (modulez.length + parseInt(`${proxy6}`)) < 2) && detailB);
      while (Array.from(hoverK.values()).includes(proxy6)) {
          let h_centeri = 3;
          let mbjscommonc: Map<any, any> = new Map([[String.fromCharCode(121,95,52,50,95,117,110,109,97,110,97,103,101,100,0),false ], [String.fromCharCode(113,95,51,53,95,116,114,97,110,115,102,111,114,109,0),false ]]);
          let renewC = 5.0;
          let frame_g8 = String.fromCharCode(122,95,55,54,95,114,101,112,108,97,99,101,115,0);
          let star4: Array<any> = [724, 154, 684];
         proxy6 -= parseFloat(`${parseInt(`${renewC}`)}`);
         h_centeri <<= Math.min(2, Math.abs(mbjscommonc.size));
         mbjscommonc.set(frame_g8, star4.length);
         renewC += mbjscommonc.size * frame_g8.length;
         star4.push(star4.length * mbjscommonc.size);
         break;
      }
      cancelX = new Map([[`${cancelX.size}`, redirectY.length | cancelX.size]]);
       let placeholder3 = 5.0;
      for (let v = 0; v < 2; v++) {
         placeholder3 += parseInt(`${placeholder3}`);
      }
          let launcherH: Map<any, any> = new Map([[String.fromCharCode(109,95,57,56,95,114,101,118,101,114,98,0),false ], [String.fromCharCode(121,95,51,48,95,115,114,116,112,0),true ], [String.fromCharCode(115,116,97,121,95,117,95,50,49,0),false ]]);
          let libyogax = false;
         placeholder3 -= 2 & launcherH.size;
         launcherH.set(`${libyogax}`, ((libyogax ? 3 : 3) >> (Math.min(5, Math.abs((libyogax ? 1 : 3))))));
      if (4.84 <= placeholder3) {
          let panglev = String.fromCharCode(98,95,56,52,95,115,109,115,0);
          let bingp = true;
          let libffmpegkitZ = 3;
          let searchbarG = String.fromCharCode(97,116,111,109,115,95,115,95,53,48,0);
          let downloaderm = 2.0;
         placeholder3 /= Math.max(4, parseInt(`${placeholder3}`) | panglev.length);
         panglev += "3";
         bingp = !bingp;
         libffmpegkitZ <<= Math.min(parseInt(`${Math.abs(((bingp ? 3 : 5) << (Math.min(Math.abs(libffmpegkitZ), 2))))}`), 3);
         searchbarG = `${libffmpegkitZ % 3}`;
         downloaderm -= 1;
      }
      update_zzl += `${privilegej.size & 2}`;
      basen += `${1 * basen.length}`;
   let floaterm = 8923050.0 >= videojs1;
   do {
      videojs1 *= update_zzl.length;
      if (floaterm) {
         break;
      }
   } while ((2.62 < (basen.length / (Math.max(3, videojs1))) || (parseInt(`${videojs1}`) / (Math.max(basen.length, 7))) < 5) && floaterm);
   let indicatorf = 8806834 <= privilegej.size;
   do {
       let info_ = String.fromCharCode(112,95,49,95,116,104,97,119,101,100,0);
       let leftg = true;
      while (!leftg) {
         info_ = "2";
         break;
      }
          let activityX = 0.0;
          let pauseQ = String.fromCharCode(99,97,116,99,104,95,101,95,54,0);
         leftg = info_.startsWith(`${leftg}`);
         activityX /= Math.max(parseFloat(`${parseInt(`${activityX}`) % (Math.max(pauseQ.length, 6))}`), 1);
         pauseQ = `${parseInt(`${activityX}`) * 3}`;
         info_ = `${info_.length}`;
      for (let d = 0; d < 1; d++) {
         info_ = `${((leftg ? 1 : 2) - 3)}`;
      }
      let filed8 = leftg ? !leftg : leftg;
      do {
          let buttonR = 3.0;
          let with_0Z = 3;
          let unimplementedview3 = 2.0;
          let string2 = String.fromCharCode(112,101,114,105,111,100,115,95,116,95,54,51,0);
         leftg = string2 == String.fromCharCode(121,0);
         buttonR -= parseFloat(`${parseInt(`${buttonR}`) | 3}`);
         with_0Z %= Math.max(2, with_0Z);
         unimplementedview3 /= Math.max(3, with_0Z * 2);
         string2 = `${parseInt(`${unimplementedview3}`) & 3}`;
         if (filed8) {
            break;
         }
      } while ((info_.includes(`${leftg}`)) && filed8);
         leftg = info_.length <= 39;
      privilegej = new Map([[`${cancelX.size}`, cancelX.size + 3]]);
      if (indicatorf) {
         break;
      }
   } while (indicatorf && (privilegej.get(`${typing4}`) == null));
       let right8 = 0;
       let filledd = true;
       let acceptedS = 4.0;
         filledd = !filledd && acceptedS < 81.57;
          let tooltipsK = String.fromCharCode(113,95,49,95,115,105,103,105,108,108,0);
          let libturbomodulejsijnix: Map<any, any> = new Map([[String.fromCharCode(115,117,98,112,111,105,110,116,101,114,95,117,95,49,54,0),190], [String.fromCharCode(101,95,53,56,0),259]]);
         filledd = libturbomodulejsijnix.size == 39;
         tooltipsK += `${tooltipsK.length}`;
         libturbomodulejsijnix.set(tooltipsK, tooltipsK.length | tooltipsK.length);
      for (let r = 0; r < 2; r++) {
         right8 <<= Math.min(5, Math.abs(2 * right8));
      }
         filledd = filledd && 55.17 < acceptedS;
      if (2.38 <= (acceptedS / (Math.max(5.0, 1)))) {
         acceptedS /= Math.max(right8 - 2, 3);
      }
      videojs1 += cancelX.size & favorite3.length;
   for (let f = 0; f < 3; f++) {
      libfabricjnir = "2";
   }
      update_zzl = `${green3.size >> (Math.min(basen.length, 5))}`;
   let soundO = 8114112 <= contexto.length;
   do {
      contexto += `${temperatureY & 3}`;
      if (soundO) {
         break;
      }
   } while ((!contexto.endsWith(`${temperatureY}`)) && soundO);

    setRefreshing(true);

       let description_cpE: Map<any, any> = new Map([[String.fromCharCode(115,95,51,56,95,120,110,97,115,109,0),517], [String.fromCharCode(105,100,99,116,100,115,112,95,115,95,55,54,0),970], [String.fromCharCode(98,95,54,49,95,99,111,110,116,111,117,114,115,0),227]]);
       let uimanagern = 3.0;
      if (description_cpE.get(`${uimanagern}`) == null) {
          let schedulerI = 5.0;
          let libavcodecN = String.fromCharCode(103,95,51,51,95,117,110,99,111,110,115,117,109,101,100,0);
          let stationg = 1;
          let related6 = String.fromCharCode(102,99,116,108,95,57,95,50,48,0);
         uimanagern -= 1;
         schedulerI *= parseFloat(`${related6.length}`);
         libavcodecN += `${libavcodecN.length}`;
         stationg <<= Math.min(5, Math.abs(1));
         related6 = `${3 & libavcodecN.length}`;
      }
      for (let j = 0; j < 2; j++) {
          let eactd = 0;
          let xvods = 5;
          let usernameY = 5;
          let mintegralR = 2.0;
          let refreshL = 1.0;
         description_cpE = new Map([[`${xvods}`, 2 << (Math.min(5, Math.abs(usernameY)))]]);
         eactd /= Math.max(3 & eactd, 5);
         xvods /= Math.max(1 / (Math.max(parseInt(`${mintegralR}`), 7)), 5);
         usernameY &= eactd;
         mintegralR += parseFloat(`${parseInt(`${refreshL}`)}`);
         refreshL *= parseFloat(`${eactd}`);
      }
      if (description_cpE.get(`${uimanagern}`) == null) {
         uimanagern += parseInt(`${uimanagern}`);
      }
          let commenti = 1;
          let canvasP = 3.0;
          let typingB: Map<any, any> = new Map([[String.fromCharCode(105,115,119,114,105,116,101,97,98,108,101,95,119,95,57,57,0),String.fromCharCode(115,105,98,108,105,110,103,115,95,48,95,55,48,0)], [String.fromCharCode(115,104,97,100,111,119,95,113,95,50,56,0),String.fromCharCode(122,95,51,52,95,114,101,97,115,111,110,0)], [String.fromCharCode(118,95,55,53,95,120,118,105,100,105,100,99,116,0),String.fromCharCode(106,102,105,101,108,100,115,95,107,95,55,48,0)]]);
         uimanagern *= commenti;
         commenti &= 3;
         canvasP /= Math.max(parseFloat(`${typingB.size & parseInt(`${canvasP}`)}`), 5);
         typingB.set(`${canvasP}`, typingB.size);
       let default_doM: Map<any, any> = new Map([[String.fromCharCode(110,117,109,101,114,97,108,115,95,101,95,55,53,0),648], [String.fromCharCode(114,101,97,115,115,109,95,50,95,51,49,0),964]]);
       let home9: Map<any, any> = new Map([[String.fromCharCode(101,95,52,54,95,115,113,117,101,101,122,101,0),68], [String.fromCharCode(102,114,97,109,101,108,101,115,115,95,121,95,51,56,0),64], [String.fromCharCode(105,110,115,116,97,110,116,95,117,95,53,55,0),106]]);
         description_cpE.set(`${uimanagern}`, default_doM.size);
      typing4 += parseFloat(`${1}`);
   for (let u = 0; u < 2; u++) {
      libfabricjnir = `${redirectY.length >> (Math.min(libfabricjnir.length, 4))}`;
   }
       let macauV = false;
       let pingy: Map<any, any> = new Map([[String.fromCharCode(110,95,56,49,0),688], [String.fromCharCode(115,108,105,99,101,99,111,110,116,101,120,116,95,56,95,55,48,0),804]]);
          let minivodr: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,97,109,105,110,102,111,95,51,95,49,57,0),String.fromCharCode(97,99,104,105,101,118,101,100,95,109,95,57,56,0)], [String.fromCharCode(112,117,98,101,120,112,95,54,95,49,52,0),String.fromCharCode(114,97,119,118,105,100,101,111,95,50,95,51,51,0)], [String.fromCharCode(112,97,121,108,111,97,100,95,117,95,49,56,0),String.fromCharCode(100,101,115,99,101,110,116,95,57,95,50,54,0)]]);
          let starQ = String.fromCharCode(121,95,49,48,95,99,111,110,116,97,105,110,101,100,0);
         macauV = !macauV;
         minivodr.set(`${starQ}`, (starQ == String.fromCharCode(107,0) ? starQ.length : minivodr.size));
          let club6 = 5.0;
          let libreactA: Map<any, any> = new Map([[String.fromCharCode(119,105,100,116,104,115,95,53,95,56,56,0),266], [String.fromCharCode(101,95,56,53,95,113,115,111,114,116,0),586], [String.fromCharCode(98,105,114,116,104,95,101,95,51,56,0),23]]);
         pingy = new Map([[`${pingy.size}`, parseInt(`${club6}`) + 2]]);
         club6 += parseFloat(`${libreactA.size - libreactA.size}`);
      let anytimez = 6816393 >= pingy.size;
      do {
          let baseE = 5.0;
          let linkI = 4.0;
         pingy.set(`${linkI}`, parseInt(`${linkI}`) % 3);
         baseE *= parseFloat(`${parseInt(`${baseE}`)}`);
         if (anytimez) {
            break;
         }
      } while (anytimez && (4 > pingy.size));
         macauV = !macauV;
      while ((5 * pingy.size) < 4) {
         pingy = new Map([[`${pingy.size}`, pingy.size]]);
         break;
      }
      for (let m = 0; m < 2; m++) {
          let complete9 = 2;
         pingy = new Map([[`${pingy.size}`, complete9 / 2]]);
      }
      favorite3 += `${favorite3.length}`;
      o_locku.set(contexto, 1 % (Math.max(2, contexto.length)));
      cancelX.set(`${libfabricjnir}`, green3.size);
      typing4 += parseFloat(`${basen.length % (Math.max(2, 10))}`);
   if (parseInt(`${typing4}`) == green3.size) {
      green3.set(`${darkv}`, ((darkv ? 4 : 3)));
   }
       let combinedV = 3;
       let tickedO = String.fromCharCode(117,95,53,57,95,98,97,100,114,101,113,0);
         combinedV /= Math.max(2, 5);
      for (let x = 0; x < 3; x++) {
         combinedV >>= Math.min(5, Math.abs(1 % (Math.max(6, combinedV))));
      }
         combinedV *= (String.fromCharCode(119,0) == tickedO ? tickedO.length : combinedV);
       let stats9 = String.fromCharCode(116,114,105,101,115,95,111,95,49,48,0);
      if (tickedO.endsWith(`${stats9.length}`)) {
          let libfabricjnid: Map<any, any> = new Map([[String.fromCharCode(100,95,53,95,103,101,116,99,114,101,100,0),591], [String.fromCharCode(104,95,54,52,95,99,111,110,110,101,99,116,105,118,105,116,121,0),422]]);
          let pointS = 5;
          let anytime_ = String.fromCharCode(103,95,55,53,95,115,104,111,117,108,100,0);
         tickedO = "1";
         libfabricjnid.set(`${pointS}`, libfabricjnid.size * 3);
         pointS &= 3;
         anytime_ += "1";
      }
          let halfO = 1.0;
         tickedO += `${combinedV - parseInt(`${halfO}`)}`;
      temperatureY *= libfabricjnir.length << (Math.min(favorite3.length, 1));
   let countdown_ = String.fromCharCode(54,98,114,109,0) == contexto;
   do {
       let codegenv = 0;
       let codegen9 = 5;
       let thailandL = 1;
          let plashU = String.fromCharCode(113,95,52,52,95,109,111,110,111,99,104,114,111,109,101,0);
          let emojiv = 2.0;
          let navigationR = String.fromCharCode(105,99,101,99,97,115,116,95,122,95,57,56,0);
         thailandL /= Math.max(4, 2 & codegenv);
         plashU = `${parseInt(`${emojiv}`) & 1}`;
         emojiv -= parseFloat(`${navigationR.length}`);
         navigationR = `${2 * parseInt(`${emojiv}`)}`;
          let shrinkh = String.fromCharCode(122,95,53,57,95,99,97,98,97,99,0);
          let playX = true;
          let dialogP = 3;
         thailandL %= Math.max(5, 3);
         shrinkh = `${((playX ? 5 : 5) % (Math.max(1, 6)))}`;
         playX = !playX;
         dialogP -= dialogP;
      while ((codegen9 / (Math.max(5, 9))) > 3 && 2 > (codegen9 / 5)) {
         codegen9 ^= 2;
         break;
      }
         codegen9 /= Math.max(1, codegenv << (Math.min(Math.abs(thailandL), 2)));
          let libjsinspectorF = String.fromCharCode(113,99,111,109,95,106,95,56,54,0);
         thailandL >>= Math.min(4, Math.abs(1));
         libjsinspectorF = `${libjsinspectorF.length}`;
         thailandL /= Math.max(thailandL << (Math.min(Math.abs(codegen9), 5)), 1);
      if (3 <= (codegen9 + 3) || (3 + codegen9) <= 5) {
         codegen9 &= codegen9 - codegenv;
      }
      for (let b = 0; b < 3; b++) {
          let spinnerJ = 3.0;
          let singleZ = 0.0;
         codegenv /= Math.max(3, 1);
         spinnerJ *= parseFloat(`${parseInt(`${singleZ}`)}`);
      }
      while ((3 + codegenv) >= 4 || 1 >= (thailandL + 3)) {
         codegenv ^= 3;
         break;
      }
      contexto += `${green3.size - 2}`;
      if (countdown_) {
         break;
      }
   } while ((!contexto.endsWith(`${favorite3.length}`)) && countdown_);
   while ((cancelX.size << (Math.min(Math.abs(1), 5))) > 5 && (cancelX.size + parseInt(`${videojs1}`)) > 1) {
       let emptya = String.fromCharCode(110,117,108,108,112,97,99,107,101,116,95,52,95,54,53,0);
       let reward2 = false;
       let langY = String.fromCharCode(122,95,54,51,95,105,110,102,117,114,97,0);
       let animationsV = 2;
       let dialogm: Array<any> = [63, 801];
      for (let u = 0; u < 1; u++) {
         langY = `${dialogm.length}`;
      }
         emptya += `${(langY == String.fromCharCode(66,0) ? langY.length : emptya.length)}`;
      if (emptya.length > 4) {
         reward2 = (dialogm.length / (Math.max(4, animationsV))) > 86;
      }
         langY = `${(emptya.length & (reward2 ? 4 : 1))}`;
         animationsV >>= Math.min(Math.abs(2), 2);
          let adult6: Array<any> = [String.fromCharCode(114,112,122,97,95,115,95,51,0), String.fromCharCode(100,115,112,114,95,108,95,53,56,0), String.fromCharCode(109,97,120,95,108,95,53,57,0)];
         animationsV ^= 3;
         adult6.push(adult6.length);
      for (let a = 0; a < 2; a++) {
         langY = `${2 | dialogm.length}`;
      }
      for (let b = 0; b < 3; b++) {
         langY += `${langY.length}`;
      }
      if (3 < (dialogm.length >> (Math.min(Math.abs(4), 2)))) {
         emptya = `${dialogm.length}`;
      }
       let condensedm: Map<any, any> = new Map([[String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,95,55,95,56,51,0),true ], [String.fromCharCode(107,95,53,95,115,121,110,99,115,97,102,101,0),false ]]);
      while ((langY.length % (Math.max(3, 3))) < 2 && 3 < (3 % (Math.max(10, animationsV)))) {
         animationsV <<= Math.min(Math.abs(3), 2);
         break;
      }
          let dataI = String.fromCharCode(116,115,120,95,48,95,52,48,0);
          let stringsG: Map<any, any> = new Map([[String.fromCharCode(99,116,114,95,106,95,51,49,0),681], [String.fromCharCode(122,95,49,57,95,112,114,97,103,109,97,0),976], [String.fromCharCode(115,99,113,117,101,114,121,95,113,95,52,49,0),827]]);
          let contextr: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,114,109,97,112,95,101,95,54,57,0),false ], [String.fromCharCode(103,95,50,53,95,101,110,100,112,111,105,110,116,0),true ], [String.fromCharCode(97,95,57,52,95,115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,0),false ]]);
         condensedm.set(`${reward2}`, ((reward2 ? 2 : 1)));
         dataI += `${stringsG.size}`;
         stringsG.set(`${stringsG.size}`, contextr.size / 1);
         contextr = new Map([[`${stringsG.size}`, stringsG.size / (Math.max(3, 7))]]);
       let appsO = String.fromCharCode(107,95,52,53,95,117,110,114,101,97,100,0);
       let eactq = String.fromCharCode(103,95,55,54,0);
      let modelv = 8112515 <= appsO.length;
      do {
          let libfollyu = 5.0;
          let directs = true;
          let xadsdkx = String.fromCharCode(114,101,112,108,97,99,101,100,95,116,95,56,54,0);
          let fileN: Array<any> = [String.fromCharCode(106,95,55,52,95,114,105,103,104,116,0), String.fromCharCode(119,95,54,57,95,99,108,105,99,107,115,0)];
         appsO += `${xadsdkx.length}`;
         libfollyu /= Math.max(fileN.length, 2);
         directs = !directs;
         xadsdkx += `${parseInt(`${libfollyu}`) / 2}`;
         fileN.push(((directs ? 2 : 5) ^ 2));
         if (modelv) {
            break;
         }
      } while ((!appsO.startsWith(`${langY.length}`)) && modelv);
         appsO += `${eactq.length}`;
      videojs1 += 1 >> (Math.min(4, Math.abs(temperatureY)));
      break;
   }
    await refreshUserState();

   while (o_locku.size > 1) {
      temperatureY -= 1;
      break;
   }
       let xadsdk9 = String.fromCharCode(99,95,54,54,95,97,105,102,102,0);
      for (let c = 0; c < 2; c++) {
         xadsdk9 += "3";
      }
      for (let s = 0; s < 3; s++) {
         xadsdk9 += `${xadsdk9.length}`;
      }
      let dice2 = xadsdk9 == String.fromCharCode(107,113,101,48,122,119,0);
      do {
         xadsdk9 = `${(xadsdk9 == String.fromCharCode(104,0) ? xadsdk9.length : xadsdk9.length)}`;
         if (dice2) {
            break;
         }
      } while (dice2 && (4 >= xadsdk9.length));
      o_locku = new Map([[`${redirectY.length}`, 1 >> (Math.min(2, basen.length))]]);
      contexto = `${temperatureY & contexto.length}`;
   while (darkv || favorite3.length >= 3) {
      darkv = (parseInt(`${videojs1}`) / (Math.max(4, favorite3.length))) >= 49;
      break;
   }
      green3 = new Map([[basen, (String.fromCharCode(106,0) == libfabricjnir ? basen.length : libfabricjnir.length)]]);
       let mbbidO = true;
       let awayO = 0;
      let textinputW = mbbidO ? !mbbidO : mbbidO;
      do {
         mbbidO = !mbbidO;
         if (textinputW) {
            break;
         }
      } while (textinputW && ((awayO * 5) < 1));
       let full4 = 0.0;
      if (1 >= (awayO / 2)) {
         mbbidO = 29 >= awayO;
      }
      let libavcodecK = 8628232.0 <= full4;
      do {
          let cricketg: Map<any, any> = new Map([[String.fromCharCode(109,95,54,95,115,97,100,120,0),86], [String.fromCharCode(118,105,100,101,111,95,55,95,55,48,0),612], [String.fromCharCode(105,95,50,95,114,102,116,98,115,117,98,0),206]]);
         full4 -= awayO;
         cricketg.set(`${cricketg.size}`, 1);
         if (libavcodecK) {
            break;
         }
      } while ((!mbbidO && (5.66 / (Math.max(4, full4))) == 3.96) && libavcodecK);
       let g_imageK = String.fromCharCode(99,114,101,97,116,105,110,103,95,100,95,56,55,0);
         g_imageK = `${(parseInt(`${full4}`) | (mbbidO ? 3 : 4))}`;
      temperatureY ^= cancelX.size * 3;
   while ((green3.size + favorite3.length) <= 4 && 4 <= (favorite3.length + green3.size)) {
      green3 = new Map([[update_zzl, temperatureY % 3]]);
      break;
   }
       let cancel5: Map<any, any> = new Map([[String.fromCharCode(112,95,56,56,95,105,113,109,112,0),false ], [String.fromCharCode(105,95,54,56,95,114,101,113,117,105,114,101,109,101,110,116,115,0),false ]]);
       let matchesE = false;
       let verticall = 4;
      if (matchesE) {
         verticall /= Math.max(1, 2);
      }
      if (!matchesE) {
         matchesE = 99 > verticall;
      }
         matchesE = !matchesE;
      while (!matchesE) {
          let plashv = 2;
          let l_centerS = 0.0;
         cancel5.set(`${l_centerS}`, parseInt(`${l_centerS}`) >> (Math.min(Math.abs(3), 5)));
         plashv ^= 2;
         break;
      }
      for (let r = 0; r < 1; r++) {
         cancel5.set(`${matchesE}`, verticall);
      }
      redirectY.push(((darkv ? 3 : 1) % (Math.max(5, parseInt(`${typing4}`)))));
   let placeholderp = darkv ? !darkv : darkv;
   do {
       let sendr = String.fromCharCode(105,114,99,97,109,95,106,95,55,48,0);
      if (sendr.startsWith(`${sendr.length}`)) {
         sendr = "1";
      }
         sendr = "2";
          let main_rQ = 3.0;
          let usernamea = String.fromCharCode(114,101,99,111,114,100,95,52,95,50,52,0);
          let langQ = 3;
         sendr = `${langQ}`;
         main_rQ *= 2 * usernamea.length;
         usernamea += "2";
         langQ ^= parseInt(`${main_rQ}`) | 3;
      darkv = update_zzl.length >= privilegej.size;
      if (placeholderp) {
         break;
      }
   } while ((2 < (redirectY.length | 5) && !darkv) && placeholderp);
   let halft = darkv ? !darkv : darkv;
   do {
      darkv = 89 > update_zzl.length || 89 > green3.size;
      if (halft) {
         break;
      }
   } while ((darkv) && halft);
    setRefreshing(false);
  };
  const refreshUserState = async () => {
       let kuaishouf = 3;
    let downloaderD = String.fromCharCode(116,95,51,52,95,118,100,101,99,0);
    let adultZ: Array<any> = [976, 150, 724];
    let stept = 5.0;
    let emptyX = 2;
    let forwardx = String.fromCharCode(99,95,52,57,95,115,114,116,112,0);
    let basketbally = true;
    let greeng = 0;
    let moreG: Map<any, any> = new Map([[String.fromCharCode(107,102,114,109,95,53,95,52,56,0),false ], [String.fromCharCode(100,105,97,103,111,110,97,108,95,54,95,54,50,0),true ], [String.fromCharCode(114,116,114,101,101,95,52,95,56,0),false ]]);
    let pointA = String.fromCharCode(102,117,108,108,98,97,110,100,95,113,95,56,48,0);
    let clockX: Array<any> = [438, 349];
    let libmapbufferjniS = 3.0;
       let phonel: Array<any> = [664, 464, 385];
       let mbjscommoni = 5;
       let leftG = String.fromCharCode(108,95,55,51,95,114,101,99,101,105,118,101,0);
       let iconF = String.fromCharCode(114,105,115,101,95,118,95,55,52,0);
      if (2 <= (phonel.length | 4) || (4 | phonel.length) <= 2) {
         iconF = `${iconF.length}`;
      }
          let connectionl = false;
          let leftF = String.fromCharCode(97,95,51,50,95,99,111,111,108,100,111,119,110,0);
         phonel.push(1 - iconF.length);
         connectionl = leftF.length > 48;
         leftF = `${((connectionl ? 4 : 4) | leftF.length)}`;
      let guideu = leftG == String.fromCharCode(103,52,122,52,106,0);
      do {
         leftG = `${leftG.length / (Math.max(3, mbjscommoni))}`;
         if (guideu) {
            break;
         }
      } while (guideu && (!leftG.startsWith(`${mbjscommoni}`)));
      for (let b = 0; b < 2; b++) {
         phonel = [2];
      }
      let scoreE = 7069796 >= mbjscommoni;
      do {
          let shareg = 1.0;
          let control9 = String.fromCharCode(100,105,102,102,105,99,117,108,116,121,95,99,95,57,52,0);
         mbjscommoni >>= Math.min(5, iconF.length);
         shareg += parseFloat(`${control9.length * 2}`);
         control9 += `${control9.length + 2}`;
         if (scoreE) {
            break;
         }
      } while ((leftG.endsWith(`${mbjscommoni}`)) && scoreE);
          let sportsq: Array<any> = [307, 953, 60];
         phonel = [leftG.length << (Math.min(Math.abs(1), 3))];
         sportsq = [sportsq.length >> (Math.min(2, sportsq.length))];
         phonel = [2 << (Math.min(5, Math.abs(mbjscommoni)))];
      let filterT = String.fromCharCode(110,112,118,113,51,53,100,109,108,51,0) == leftG;
      do {
          let light5 = 4;
          let expiredv = 3;
         leftG += `${(String.fromCharCode(101,0) == leftG ? mbjscommoni : leftG.length)}`;
         light5 &= expiredv >> (Math.min(1, Math.abs(light5)));
         expiredv &= 1 >> (Math.min(2, Math.abs(expiredv)));
         if (filterT) {
            break;
         }
      } while ((2 == leftG.length) && filterT);
      stept /= Math.max(2, parseFloat(`${downloaderD.length}`));
      libmapbufferjniS += 1;
   while (2 == downloaderD.length) {
       let register_p6: Array<any> = [String.fromCharCode(107,101,121,112,97,116,104,115,95,56,95,52,50,0), String.fromCharCode(109,95,54,53,95,97,108,98,117,109,115,0)];
       let userJ = 4;
       let watchx = 4.0;
       let stationu = 0;
      let dragj = userJ >= 5077854;
      do {
          let resendt = String.fromCharCode(116,95,57,57,0);
          let usernamez = true;
          let s_viewA: Array<any> = [String.fromCharCode(112,97,114,101,110,116,104,101,115,101,115,95,106,95,50,54,0), String.fromCharCode(105,99,101,99,97,115,116,95,121,95,54,0), String.fromCharCode(121,95,49,50,95,102,105,103,117,114,101,0)];
          let assistq: Map<any, any> = new Map([[String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,101,111,95,118,95,54,56,0),155], [String.fromCharCode(109,95,52,95,97,114,103,98,0),932], [String.fromCharCode(115,101,112,97,114,97,116,101,115,95,112,95,53,54,0),437]]);
          let langI = String.fromCharCode(105,95,49,55,95,115,116,111,114,105,110,103,0);
         userJ -= 1;
         resendt += `${(langI.length & (usernamez ? 3 : 1))}`;
         usernamez = langI.length > 96;
         s_viewA.push(s_viewA.length % 2);
         assistq = new Map([[`${assistq.size}`, 3]]);
         if (dragj) {
            break;
         }
      } while ((5 == stationu) && dragj);
         stationu += stationu + userJ;
      while ((1 & register_p6.length) <= 3 || (register_p6.length & userJ) <= 1) {
         register_p6.push(parseInt(`${watchx}`));
         break;
      }
          let nativeexJ = String.fromCharCode(104,95,49,52,95,99,97,112,105,116,97,108,105,122,97,116,105,111,110,0);
          let configureG: Array<any> = [String.fromCharCode(117,95,52,95,113,117,111,116,97,0), String.fromCharCode(121,95,49,51,95,116,105,110,121,0)];
         watchx *= userJ;
         nativeexJ += "3";
         configureG = [3];
      for (let e = 0; e < 1; e++) {
         userJ += 1 + register_p6.length;
      }
         watchx -= userJ;
       let abidetecti = 1.0;
       let cricketl = 2.0;
      if (register_p6.length > userJ) {
          let libfbjniy = String.fromCharCode(113,95,56,56,95,112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,0);
          let leftZ = true;
         register_p6 = [3];
         libfbjniy += `${libfbjniy.length % (Math.max(2, 5))}`;
         leftZ = libfbjniy.length < 26;
      }
         userJ *= 1 & stationu;
      let animationsi = 7083150 >= userJ;
      do {
         userJ *= 1 ^ parseInt(`${abidetecti}`);
         if (animationsi) {
            break;
         }
      } while (animationsi && (stationu < userJ));
          let routerr: Map<any, any> = new Map([[String.fromCharCode(115,112,108,105,116,116,105,110,103,95,121,95,56,56,0),592], [String.fromCharCode(114,95,53,57,95,102,108,97,99,100,97,116,97,0),478], [String.fromCharCode(111,95,56,55,95,98,97,122,101,108,0),204]]);
          let fadfdeebbbfdabbbabdadfaaddaa0 = String.fromCharCode(108,95,54,55,95,98,97,115,105,99,0);
         register_p6 = [parseInt(`${cricketl}`) * userJ];
         routerr.set(fadfdeebbbfdabbbabdadfaaddaa0, fadfdeebbbfdabbbabdadfaaddaa0.length);
         abidetecti -= parseFloat(`${parseInt(`${watchx}`) + parseInt(`${abidetecti}`)}`);
      greeng |= clockX.length;
      break;
   }
   if (5 < (2 >> (Math.min(1, Math.abs(moreG.size)))) && 2 < (clockX.length >> (Math.min(Math.abs(moreG.size), 1)))) {
      clockX.push(parseInt(`${stept}`));
   }
      forwardx = `${pointA.length << (Math.min(Math.abs(2), 1))}`;
       let v_lockQ = 0.0;
       let helperi: Array<any> = [752, 721];
       let bodant = String.fromCharCode(115,121,109,111,100,100,95,120,95,54,56,0);
      while ((v_lockQ * 5.36) <= 5.3 || (v_lockQ * 5.36) <= 5.98) {
          let hook9 = true;
          let helperR: Array<any> = [String.fromCharCode(112,114,111,100,95,97,95,50,50,0), String.fromCharCode(115,105,102,102,95,107,95,51,0)];
         helperi = [2 & parseInt(`${v_lockQ}`)];
         hook9 = helperR.length <= 16;
         helperR.push(3);
         break;
      }
      let libturbomodulejsijniW = v_lockQ <= 6799294.0;
      do {
         v_lockQ -= (bodant == String.fromCharCode(50,0) ? parseInt(`${v_lockQ}`) : bodant.length);
         if (libturbomodulejsijniW) {
            break;
         }
      } while ((3.38 < v_lockQ) && libturbomodulejsijniW);
         bodant += "1";
      let libffmpegkitT = v_lockQ <= 6976767.0;
      do {
         v_lockQ -= parseInt(`${v_lockQ}`);
         if (libffmpegkitT) {
            break;
         }
      } while ((5.50 <= (v_lockQ / 4.58) && 2.68 <= (v_lockQ / (Math.max(4.58, 6)))) && libffmpegkitT);
         v_lockQ *= 2 ^ helperi.length;
       let malaysiaW = 0.0;
         bodant += `${bodant.length - 2}`;
      while (!bodant.includes(`${malaysiaW}`)) {
         bodant = `${bodant.length | helperi.length}`;
         break;
      }
         helperi.push(parseInt(`${v_lockQ}`));
      downloaderD = `${3 & parseInt(`${stept}`)}`;
   for (let v = 0; v < 1; v++) {
      pointA = `${clockX.length}`;
   }

    const result = await yys_GesturesConst.getUserDetails();

   while (5 >= pointA.length) {
      basketbally = downloaderD.length < 26;
      break;
   }
   for (let y = 0; y < 2; y++) {
      forwardx = "2";
   }
   while (3 < (forwardx.length << (Math.min(Math.abs(2), 2)))) {
      stept += parseFloat(`${1}`);
      break;
   }
   let formP = downloaderD == String.fromCharCode(48,115,117,114,113,114,117,0);
   do {
       let controlsl: Map<any, any> = new Map([[String.fromCharCode(104,95,55,56,95,100,116,111,114,0),true ], [String.fromCharCode(117,110,116,114,97,99,107,95,55,95,57,55,0),false ], [String.fromCharCode(112,95,50,57,95,97,121,98,114,105,0),false ]]);
       let runtimeg = 4;
       let policyt = String.fromCharCode(114,95,53,49,95,100,105,102,102,101,114,101,110,99,101,115,0);
       let connectionZ = String.fromCharCode(113,95,55,49,95,97,97,100,0);
          let searchn = String.fromCharCode(97,117,116,111,114,101,102,114,101,115,104,95,112,95,56,54,0);
          let eventB = String.fromCharCode(99,111,108,108,101,99,116,105,111,110,115,95,52,95,55,53,0);
         policyt = `${policyt.length}`;
         searchn += "3";
         eventB = `${eventB.length}`;
         policyt += `${(policyt == String.fromCharCode(90,0) ? policyt.length : connectionZ.length)}`;
      if (2 >= (runtimeg - connectionZ.length)) {
         runtimeg %= Math.max((connectionZ == String.fromCharCode(85,0) ? controlsl.size : connectionZ.length), 1);
      }
      let livej = controlsl.size >= 8307170;
      do {
         controlsl = new Map([[`${controlsl.size}`, 3 | controlsl.size]]);
         if (livej) {
            break;
         }
      } while ((3 == (2 ^ connectionZ.length)) && livej);
          let agreementK = 5.0;
          let hooksl = String.fromCharCode(109,105,100,116,111,110,101,115,95,56,95,53,51,0);
         controlsl = new Map([[policyt, 3 << (Math.min(4, Math.abs(parseInt(`${agreementK}`))))]]);
         agreementK /= Math.max(parseFloat(`${hooksl.length}`), 1);
         hooksl += `${hooksl.length << (Math.min(hooksl.length, 3))}`;
         runtimeg /= Math.max((String.fromCharCode(87,0) == policyt ? policyt.length : connectionZ.length), 4);
          let controlw = false;
          let actionsl = String.fromCharCode(114,111,117,116,105,110,101,115,95,101,95,50,50,0);
         controlsl = new Map([[`${controlsl.size}`, ((controlw ? 1 : 4) + controlsl.size)]]);
         controlw = actionsl.length > actionsl.length;
      while (connectionZ == policyt) {
          let imagemanageri = String.fromCharCode(105,95,51,50,95,100,115,112,114,0);
          let notificationP = false;
         policyt += `${imagemanageri.length}`;
         imagemanageri += `${((notificationP ? 1 : 3))}`;
         break;
      }
      let gesturesG = String.fromCharCode(49,113,119,95,56,121,119,0) == policyt;
      do {
         policyt = `${controlsl.size}`;
         if (gesturesG) {
            break;
         }
      } while ((policyt.length == 4) && gesturesG);
          let awayc = String.fromCharCode(100,111,117,98,108,101,115,115,116,114,95,122,95,55,52,0);
          let ewardedv = String.fromCharCode(116,101,114,109,105,110,97,116,101,95,57,95,57,55,0);
          let common4 = false;
         policyt += "1";
         awayc += `${ewardedv.length >> (Math.min(Math.abs(2), 5))}`;
         ewardedv += `${(ewardedv == String.fromCharCode(82,0) ? (common4 ? 3 : 1) : ewardedv.length)}`;
         common4 = awayc == ewardedv;
      for (let g = 0; g < 3; g++) {
          let awayQ = String.fromCharCode(117,95,49,52,95,111,97,101,112,0);
          let gdtadvE: Array<any> = [573, 681, 961];
         runtimeg |= (connectionZ == String.fromCharCode(114,0) ? connectionZ.length : awayQ.length);
         awayQ += `${gdtadvE.length}`;
         gdtadvE.push(gdtadvE.length * 1);
      }
         runtimeg <<= Math.min(policyt.length, 1);
      downloaderD += `${parseInt(`${libmapbufferjniS}`) ^ runtimeg}`;
      if (formP) {
         break;
      }
   } while (formP && (adultZ.length >= downloaderD.length));
      libmapbufferjniS += 1 | moreG.size;
   for (let v = 0; v < 1; v++) {
      emptyX += clockX.length * 2;
   }
   let matchZ = 8026355 <= greeng;
   do {
      greeng += 1 & pointA.length;
      if (matchZ) {
         break;
      }
   } while (matchZ && (1.35 == (1.90 * stept)));
    if (result == null) {

      clockX = [clockX.length];
   if (Array.from(moreG.values()).includes(clockX.length)) {
       let minivodr = String.fromCharCode(115,109,111,111,116,104,105,110,103,95,103,95,52,54,0);
       let assistC: Map<any, any> = new Map([[String.fromCharCode(99,108,111,115,101,99,98,95,112,95,55,53,0),false ], [String.fromCharCode(114,117,108,101,98,111,111,107,95,48,95,49,53,0),false ], [String.fromCharCode(104,117,101,95,117,95,57,48,0),true ]]);
       let eventX = String.fromCharCode(100,105,115,97,98,108,101,95,51,95,53,56,0);
       let foregroundI = 1.0;
       let ping5: Map<any, any> = new Map([[String.fromCharCode(104,95,52,50,95,99,111,100,101,114,115,0),356], [String.fromCharCode(114,101,115,105,122,101,95,120,95,50,50,0),369]]);
       let e_viewO: Map<any, any> = new Map([[String.fromCharCode(118,95,51,51,95,115,104,97,114,101,100,107,101,121,0),543], [String.fromCharCode(109,111,110,111,119,104,105,116,101,95,111,95,53,49,0),934]]);
          let circle6 = String.fromCharCode(100,95,55,49,95,101,110,99,114,121,112,116,105,111,110,0);
          let playercommonf = String.fromCharCode(112,114,105,109,101,95,118,95,57,57,0);
         minivodr += `${circle6.length}`;
         circle6 += `${playercommonf.length % 3}`;
         playercommonf = `${3 | playercommonf.length}`;
         assistC = new Map([[`${foregroundI}`, eventX.length]]);
         assistC = new Map([[`${assistC.size}`, ping5.size % 2]]);
      while ((4 >> (Math.min(3, Math.abs(ping5.size)))) == 1) {
         ping5.set(minivodr, eventX.length >> (Math.min(minivodr.length, 4)));
         break;
      }
      for (let c = 0; c < 1; c++) {
         e_viewO.set(`${e_viewO.size}`, 3);
      }
      for (let j = 0; j < 1; j++) {
         assistC = new Map([[`${e_viewO.size}`, 2 >> (Math.min(3, Math.abs(e_viewO.size)))]]);
      }
         e_viewO.set(`${foregroundI}`, eventX.length);
      while ((4 | minivodr.length) >= 4) {
         minivodr = `${e_viewO.size % (Math.max(ping5.size, 6))}`;
         break;
      }
       let xvod9 = 1.0;
       let coreH = String.fromCharCode(97,95,54,54,0);
         ping5 = new Map([[`${e_viewO.size}`, parseInt(`${foregroundI}`)]]);
      clockX.push(kuaishouf);
   }
       let faviconZ = false;
       let pnewarchdefaultsC: Array<any> = [856, 840];
       let mbridgeL = String.fromCharCode(117,95,53,52,95,102,105,120,117,112,0);
         mbridgeL += `${(pnewarchdefaultsC.length * (faviconZ ? 1 : 1))}`;
         pnewarchdefaultsC.push(1);
       let successi: Map<any, any> = new Map([[String.fromCharCode(116,95,51,54,95,109,98,117,118,101,114,114,111,114,0),185], [String.fromCharCode(110,95,55,54,95,109,99,108,109,115,0),410]]);
         mbridgeL += `${mbridgeL.length}`;
      for (let t = 0; t < 3; t++) {
         mbridgeL += `${((faviconZ ? 5 : 2) ^ 2)}`;
      }
       let baseZ: Array<any> = [244, 984];
       let serviceJ: Array<any> = [String.fromCharCode(118,95,54,55,95,100,101,99,111,100,101,114,116,104,114,101,97,100,105,110,103,0), String.fromCharCode(97,95,49,48,48,95,104,119,102,114,97,109,101,0), String.fromCharCode(113,95,56,48,95,101,110,117,109,101,114,97,116,101,100,0)];
      if (2 >= pnewarchdefaultsC.length) {
         faviconZ = mbridgeL.length < baseZ.length;
      }
      while (3 > (4 - serviceJ.length) && (serviceJ.length - 4) > 4) {
         baseZ = [mbridgeL.length];
         break;
      }
          let package_h3c = 5.0;
          let libimagepipelineD: Map<any, any> = new Map([[String.fromCharCode(107,95,55,56,95,118,100,101,98,117,103,0),964], [String.fromCharCode(111,112,97,113,117,101,95,56,95,57,56,0),298], [String.fromCharCode(119,95,51,52,95,99,104,101,99,107,105,110,0),301]]);
         mbridgeL = `${(2 / (Math.max(5, (faviconZ ? 1 : 5))))}`;
         package_h3c += parseFloat(`${1 << (Math.min(3, Math.abs(parseInt(`${package_h3c}`))))}`);
         libimagepipelineD.set(`${package_h3c}`, parseInt(`${package_h3c}`) * libimagepipelineD.size);
      libmapbufferjniS *= 3;
   let splashB = greeng >= 6308900;
   do {
      greeng -= clockX.length;
      if (splashB) {
         break;
      }
   } while ((4 == (greeng << (Math.min(Math.abs(3), 5))) && (3 << (Math.min(2, Math.abs(greeng)))) == 3) && splashB);
       let logoutz = true;
       let mounting3 = 4.0;
          let project0 = String.fromCharCode(118,105,111,108,101,110,99,101,95,121,95,54,52,0);
         logoutz = logoutz || 63.35 == mounting3;
         project0 = "1";
      for (let d = 0; d < 1; d++) {
         mounting3 += parseInt(`${mounting3}`) + 3;
      }
         mounting3 *= parseInt(`${mounting3}`) + 3;
      let trophyv = logoutz ? !logoutz : logoutz;
      do {
         logoutz = 79.14 == mounting3;
         if (trophyv) {
            break;
         }
      } while ((mounting3 <= 5.83) && trophyv);
          let ewardedq: Array<any> = [525, 304, 567];
          let unticku = true;
         mounting3 += ewardedq.length;
         logoutz = mounting3 < 94.87 || logoutz;
      kuaishouf %= Math.max(parseInt(`${mounting3}`), 4);
   for (let f = 0; f < 2; f++) {
      clockX.push(moreG.size);
   }
       let transferP: Map<any, any> = new Map([[String.fromCharCode(98,95,49,52,95,104,97,110,100,108,101,0),String.fromCharCode(111,95,56,48,95,97,99,116,111,114,0)], [String.fromCharCode(101,109,112,105,114,105,99,97,108,108,121,95,54,95,51,0),String.fromCharCode(122,105,103,122,97,103,95,57,95,54,53,0)], [String.fromCharCode(113,95,49,53,95,114,97,105,115,101,100,0),String.fromCharCode(114,100,109,117,108,116,95,57,95,55,53,0)]]);
      while (3 > (transferP.size | transferP.size) || 3 > (transferP.size | 3)) {
          let hongkong1 = 4;
          let launchi = 5;
          let armvaD = 5.0;
          let readb = String.fromCharCode(102,95,55,54,95,115,116,97,116,115,0);
         transferP = new Map([[`${transferP.size}`, hongkong1]]);
         hongkong1 >>= Math.min(Math.abs(3), 4);
         launchi %= Math.max(parseInt(`${armvaD}`), 3);
         armvaD /= Math.max(parseFloat(`${2}`), 5);
         readb += `${parseInt(`${armvaD}`) % (Math.max(readb.length, 8))}`;
         break;
      }
          let invite6 = 4.0;
         transferP = new Map([[`${transferP.size}`, parseInt(`${invite6}`) / (Math.max(transferP.size, 9))]]);
         transferP.set(`${transferP.size}`, transferP.size);
      adultZ = [adultZ.length];
      return;
    }

    await dispatch(updateUserAuth(result));

       let toponf = 4;
       let libreactperfloggerjniQ = false;
       let temperatureT = String.fromCharCode(99,95,54,49,95,97,114,109,118,116,101,0);
       let chinasameB = 0.0;
          let telemetryG = false;
          let mathQ: Array<any> = [793, 403, 127];
          let popupy = false;
         libreactperfloggerjniQ = popupy;
         telemetryG = telemetryG && mathQ.length <= 29;
         mathQ = [mathQ.length * 1];
          let mbnativeA = String.fromCharCode(98,111,111,116,95,117,95,55,48,0);
          let formE = String.fromCharCode(116,120,116,95,104,95,49,53,0);
         toponf *= formE.length;
         mbnativeA += `${mbnativeA.length}`;
         formE = "3";
          let lessM: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,105,99,97,116,101,95,55,95,49,48,0),949], [String.fromCharCode(101,95,49,54,95,101,118,105,99,101,0),355], [String.fromCharCode(97,117,116,111,102,111,99,117,115,105,110,103,95,97,95,56,48,0),281]]);
          let runtimek = 3.0;
          let handlero = 0;
         libreactperfloggerjniQ = temperatureT.length < lessM.size;
         lessM.set(`${handlero}`, 3);
         runtimek *= parseFloat(`${handlero + 1}`);
      let rightv = chinasameB >= 7328506.0;
      do {
         chinasameB *= (parseFloat(`${(libreactperfloggerjniQ ? 3 : 1) - toponf}`));
         if (rightv) {
            break;
         }
      } while (((2.28 + chinasameB) > 4.30 || (chinasameB + 2.28) > 5.67) && rightv);
      for (let a = 0; a < 3; a++) {
         temperatureT += `${(parseInt(`${chinasameB}`) - (libreactperfloggerjniQ ? 2 : 2))}`;
      }
         chinasameB += parseFloat(`${parseInt(`${chinasameB}`)}`);
          let executorr = true;
         temperatureT = `${toponf ^ 2}`;
         executorr = !executorr;
         temperatureT += "3";
      kuaishouf >>= Math.min(5, Math.abs(kuaishouf | parseInt(`${stept}`)));
       let mintegralA = 2.0;
       let buttonl = 2.0;
          let libcrashsdkz = String.fromCharCode(99,97,109,101,108,108,105,97,95,56,95,49,55,0);
          let closeC: Array<any> = [186, 782, 211];
          let mbbanner2 = String.fromCharCode(97,112,116,120,104,100,95,103,95,57,55,0);
         mintegralA -= parseFloat(`${mbbanner2.length}`);
         libcrashsdkz = `${libcrashsdkz.length}`;
         closeC = [(libcrashsdkz == String.fromCharCode(49,0) ? libcrashsdkz.length : closeC.length)];
         mbbanner2 += `${libcrashsdkz.length | 3}`;
      if (mintegralA >= 5.28) {
         buttonl += parseInt(`${mintegralA}`);
      }
      while (3.75 <= buttonl) {
          let questX = 4.0;
          let binddatasf: Map<any, any> = new Map([[String.fromCharCode(99,104,97,114,97,99,116,101,114,95,119,95,54,48,0),4], [String.fromCharCode(115,116,115,99,95,98,95,53,53,0),948], [String.fromCharCode(112,95,49,48,48,95,100,111,99,116,111,116,97,108,0),906]]);
          let schedulex: Map<any, any> = new Map([[String.fromCharCode(109,95,55,95,100,101,110,105,97,108,0),String.fromCharCode(106,95,55,95,110,111,110,101,109,112,116,121,0)], [String.fromCharCode(102,95,49,49,0),String.fromCharCode(115,95,52,55,95,101,118,105,99,116,0)]]);
          let submitu = 5;
         buttonl += parseInt(`${questX}`);
         questX /= Math.max(parseFloat(`${binddatasf.size * schedulex.size}`), 2);
         binddatasf = new Map([[`${schedulex.size}`, submitu]]);
         submitu *= schedulex.size;
         break;
      }
         mintegralA *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${buttonl}`)), 3))}`);
         mintegralA /= Math.max(4, parseFloat(`${parseInt(`${buttonl}`)}`));
      while (5.87 >= (1 / (Math.max(4, mintegralA)))) {
          let downloaderJ = true;
          let hoverD = 4.0;
         buttonl /= Math.max(1 & parseInt(`${hoverD}`), 4);
         downloaderJ = !downloaderJ || downloaderJ;
         hoverD *= (parseFloat(`${(downloaderJ ? 5 : 1) * 2}`));
         break;
      }
      basketbally = parseFloat(`${downloaderD.length}`) >= stept;
   while (!Array.from(moreG.keys()).includes(`${clockX.length}`)) {
      clockX.push(1 & forwardx.length);
      break;
   }
      emptyX *= moreG.size;
   let pagey = basketbally ? !basketbally : basketbally;
   do {
      basketbally = emptyX < 50;
      if (pagey) {
         break;
      }
   } while (pagey && (adultZ.length == 4));
      libmapbufferjniS /= Math.max(4, (3 | (basketbally ? 1 : 5)));
       let reacti = String.fromCharCode(121,95,51,53,95,99,111,109,109,111,110,0);
      for (let c = 0; c < 2; c++) {
          let forml: Map<any, any> = new Map([[String.fromCharCode(109,95,55,50,95,114,103,116,99,115,0),true ], [String.fromCharCode(114,97,100,102,95,115,95,49,55,0),false ], [String.fromCharCode(106,95,50,53,95,98,105,111,109,101,116,114,105,99,0),false ]]);
          let teamq = 5;
          let crownK = 3.0;
          let robotoc = 1.0;
          let configureL = String.fromCharCode(110,111,108,111,99,107,95,97,95,57,56,0);
         reacti += "1";
         forml.set(`${robotoc}`, 1 >> (Math.min(5, Math.abs(parseInt(`${robotoc}`)))));
         teamq <<= Math.min(1, Math.abs(forml.size - teamq));
         crownK += parseFloat(`${1 % (Math.max(8, parseInt(`${robotoc}`)))}`);
         configureL = `${teamq - parseInt(`${crownK}`)}`;
      }
         reacti = `${reacti.length}`;
          let popupyt = String.fromCharCode(116,101,108,95,99,95,54,57,0);
          let math0 = String.fromCharCode(99,111,109,112,111,115,105,116,105,111,110,95,115,95,51,49,0);
         reacti += `${3 ^ popupyt.length}`;
         popupyt = `${math0.length - 3}`;
         math0 += `${math0.length}`;
      stept /= Math.max(5, (parseFloat(`${(basketbally ? 2 : 3)}`)));

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
