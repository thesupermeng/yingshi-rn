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
       let topicY = String.fromCharCode(99,111,110,116,105,110,117,101,100,95,50,95,52,48,0);
    let filterG = 2.0;
    let forwardW: Map<any, any> = new Map([[String.fromCharCode(105,100,108,101,95,118,95,51,0),618], [String.fromCharCode(108,95,56,51,95,101,108,115,116,0),938]]);
    let specG = String.fromCharCode(106,95,57,50,95,110,111,110,110,117,108,108,115,101,114,105,97,108,105,122,97,116,105,111,110,0);
    let suggestionD: Array<any> = [889, 693];
    let dice8 = 5.0;
    let enewinterstitialP: Array<any> = [37, 70];
    let minivod_ = String.fromCharCode(115,108,105,99,101,116,104,114,101,97,100,95,99,95,51,49,0);
    let backgrounde: Array<any> = [959, 772];
    let androidZ: Map<any, any> = new Map([[String.fromCharCode(105,95,54,52,95,111,114,100,101,114,0),255], [String.fromCharCode(112,95,49,57,95,99,97,108,101,110,100,97,114,0),561]]);
    let ballD: Array<any> = [644, 702];
   for (let m = 0; m < 3; m++) {
      forwardW.set(specG, forwardW.size << (Math.min(specG.length, 5)));
   }
   let borderlessn = dice8 >= 7271455.0;
   do {
      dice8 /= Math.max(enewinterstitialP.length >> (Math.min(Math.abs(3), 4)), 2);
      if (borderlessn) {
         break;
      }
   } while (borderlessn && (dice8 > topicY.length));
      suggestionD.push(forwardW.size + parseInt(`${filterG}`));
   while (4 < (forwardW.size % (Math.max(1, minivod_.length)))) {
      minivod_ = `${2 ^ parseInt(`${filterG}`)}`;
      break;
   }
   let casth = 6411248.0 <= filterG;
   do {
      filterG /= Math.max((minivod_ == String.fromCharCode(72,0) ? minivod_.length : backgrounde.length), 1);
      if (casth) {
         break;
      }
   } while (casth && ((filterG * 2.98) < 5.82 || (2.98 * filterG) < 4.1));
       let reactL: Map<any, any> = new Map([[String.fromCharCode(106,95,56,48,95,106,97,99,107,0),11], [String.fromCharCode(115,97,108,115,97,95,106,95,55,55,0),330], [String.fromCharCode(115,95,53,48,95,116,101,109,112,111,114,97,108,0),75]]);
         reactL.set(`${reactL.size}`, reactL.size);
      if ((reactL.size >> (Math.min(5, Math.abs(reactL.size)))) >= 1 && 1 >= (reactL.size >> (Math.min(Math.abs(reactL.size), 3)))) {
          let usery = 3.0;
          let libreanimatedo = 3;
          let activityY = String.fromCharCode(104,95,56,51,95,99,111,110,100,105,116,105,111,110,97,108,0);
          let recommendationj: Map<any, any> = new Map([[String.fromCharCode(103,95,55,57,95,115,97,118,101,115,116,97,116,101,0),559], [String.fromCharCode(98,95,50,50,95,111,112,101,110,115,101,97,0),267], [String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,115,95,106,95,54,48,0),697]]);
          let leftV = 2;
         reactL = new Map([[`${reactL.size}`, reactL.size]]);
         usery /= Math.max(3, 3);
         libreanimatedo -= 1 ^ libreanimatedo;
         activityY += `${activityY.length}`;
         recommendationj = new Map([[`${recommendationj.size}`, recommendationj.size | leftV]]);
         leftV <<= Math.min(5, Math.abs(2 >> (Math.min(Math.abs(parseInt(`${usery}`)), 1))));
      }
         reactL = new Map([[`${reactL.size}`, reactL.size / (Math.max(reactL.size, 9))]]);
      specG = `${suggestionD.length}`;
   let sportsn = backgrounde.length >= 6828157;
   do {
      backgrounde = [topicY.length];
      if (sportsn) {
         break;
      }
   } while ((3 >= (backgrounde.length >> (Math.min(topicY.length, 5)))) && sportsn);
   while (5 <= (enewinterstitialP.length / (Math.max(10, backgrounde.length))) && (enewinterstitialP.length / (Math.max(backgrounde.length, 4))) <= 5) {
       let layouts = 0.0;
       let malaysias = String.fromCharCode(104,95,52,57,95,100,101,102,108,105,99,107,101,114,0);
         malaysias += `${malaysias.length}`;
      if (5.11 >= (layouts / 3.60) || 3.60 >= (layouts / (Math.max(1, malaysias.length)))) {
         layouts -= parseInt(`${layouts}`) << (Math.min(malaysias.length, 5));
      }
      for (let s = 0; s < 2; s++) {
         layouts += malaysias.length;
      }
         layouts -= parseInt(`${layouts}`) >> (Math.min(Math.abs(2), 4));
      if (1 > (4 & malaysias.length)) {
         layouts += parseInt(`${layouts}`);
      }
          let holderm: Array<any> = [String.fromCharCode(109,95,51,55,95,97,114,114,97,121,115,105,122,101,0), String.fromCharCode(105,112,118,105,100,101,111,95,105,95,51,0), String.fromCharCode(105,99,109,112,95,112,95,54,49,0)];
          let basketball5 = String.fromCharCode(109,95,57,49,95,102,111,111,116,101,114,0);
         malaysias += `${2 | holderm.length}`;
         holderm = [basketball5.length - 2];
         basketball5 += `${basketball5.length}`;
      enewinterstitialP.push(suggestionD.length & 3);
      break;
   }
       let options3 = String.fromCharCode(109,97,103,105,99,95,109,95,54,51,0);
       let greyB: Map<any, any> = new Map([[String.fromCharCode(101,115,112,111,110,100,101,114,95,98,95,57,48,0),410], [String.fromCharCode(100,101,99,111,100,101,95,49,95,57,49,0),195]]);
       let statsZ = String.fromCharCode(99,95,50,95,101,120,101,99,117,116,101,100,0);
         greyB = new Map([[`${greyB.size}`, statsZ.length - 2]]);
      if ((options3.length ^ 5) < 3) {
          let debugD = 2.0;
          let untick7 = false;
          let bodanj = 1;
         options3 += `${statsZ.length}`;
         debugD += 1 ^ parseInt(`${debugD}`);
         untick7 = bodanj == 54;
         bodanj |= parseInt(`${debugD}`);
      }
      let vignettei = options3.length >= 9135533;
      do {
         options3 += `${greyB.size | statsZ.length}`;
         if (vignettei) {
            break;
         }
      } while ((!statsZ.endsWith(options3)) && vignettei);
         statsZ += `${greyB.size ^ 2}`;
      while ((greyB.size % 3) >= 2) {
         options3 += "2";
         break;
      }
         greyB.set(`${options3}`, options3.length << (Math.min(Math.abs(3), 1)));
         statsZ = `${options3.length}`;
      let minimizeZ = 8891108 >= options3.length;
      do {
         options3 = `${(statsZ == String.fromCharCode(74,0) ? options3.length : statsZ.length)}`;
         if (minimizeZ) {
            break;
         }
      } while ((greyB.size >= options3.length) && minimizeZ);
      let hookC = greyB.size >= 9713299;
      do {
         greyB = new Map([[`${greyB.size}`, (String.fromCharCode(100,0) == options3 ? options3.length : greyB.size)]]);
         if (hookC) {
            break;
         }
      } while ((!statsZ.startsWith(`${greyB.size}`)) && hookC);
      suggestionD = [3];

    setRefreshing(true);

   if ((specG.length | 3) <= 1 || (3 | forwardW.size) <= 4) {
      specG += `${minivod_.length - 3}`;
   }
   if (1 < (suggestionD.length ^ 4)) {
      suggestionD.push(parseInt(`${dice8}`));
   }
      backgrounde = [3 | forwardW.size];
   while (enewinterstitialP.length >= 3) {
      enewinterstitialP = [androidZ.size << (Math.min(enewinterstitialP.length, 2))];
      break;
   }
   while ((2.96 / (Math.max(8, dice8))) <= 2.33 || (dice8 / 2.96) <= 5.79) {
       let launcheri: Array<any> = [String.fromCharCode(104,95,57,54,95,103,97,105,110,99,0), String.fromCharCode(106,99,111,110,102,105,103,95,103,95,55,55,0)];
       let store6 = String.fromCharCode(102,95,53,95,99,97,109,101,108,0);
       let ajaxF: Map<any, any> = new Map([[String.fromCharCode(103,95,53,50,95,113,101,120,112,0),String.fromCharCode(109,117,109,98,97,105,95,109,95,51,53,0)], [String.fromCharCode(111,95,56,49,95,114,101,103,105,115,116,101,114,105,110,103,0),String.fromCharCode(97,114,114,97,121,115,95,107,95,51,50,0)], [String.fromCharCode(101,115,99,97,112,101,100,95,118,95,50,56,0),String.fromCharCode(104,109,97,99,108,105,115,116,95,48,95,55,50,0)]]);
       let foreground4 = false;
      while (!foreground4) {
         launcheri.push(launcheri.length);
         break;
      }
         foreground4 = null == ajaxF.get(`${foreground4}`);
      for (let m = 0; m < 1; m++) {
         store6 = `${launcheri.length ^ 3}`;
      }
         foreground4 = 4 >= launcheri.length;
      for (let k = 0; k < 3; k++) {
         ajaxF.set(`${foreground4}`, (ajaxF.size / (Math.max(8, (foreground4 ? 5 : 5)))));
      }
         store6 += "3";
          let textlayoutmanager3 = String.fromCharCode(116,111,111,108,116,105,112,95,110,95,53,48,0);
         store6 += `${textlayoutmanager3.length}`;
         ajaxF = new Map([[`${launcheri.length}`, (1 * (foreground4 ? 1 : 4))]]);
         launcheri = [2 / (Math.max(2, ajaxF.size))];
      if (ajaxF.size == 2 && (2 ^ ajaxF.size) == 5) {
         ajaxF.set(`${store6}`, 3);
      }
      while (5 > (store6.length - launcheri.length)) {
         launcheri = [store6.length];
         break;
      }
          let sigmob_: Array<any> = [203, 886, 256];
          let libsgcoreZ = String.fromCharCode(102,114,101,101,109,95,98,95,53,50,0);
         launcheri.push(ajaxF.size);
         sigmob_ = [3 * libsgcoreZ.length];
         libsgcoreZ += `${libsgcoreZ.length >> (Math.min(5, sigmob_.length))}`;
      suggestionD.push(store6.length);
      break;
   }
      ballD = [(minivod_ == String.fromCharCode(80,0) ? androidZ.size : minivod_.length)];
      enewinterstitialP = [1];
      filterG /= Math.max(1, topicY.length | 3);
   if (4 > (minivod_.length + 5)) {
      minivod_ += `${2 | backgrounde.length}`;
   }
    await refreshUserState();

      suggestionD.push(specG.length);
   while (4 == topicY.length) {
       let unread4 = String.fromCharCode(106,99,111,110,102,105,103,105,110,116,95,118,95,57,51,0);
      while (3 < unread4.length) {
         unread4 += `${1 ^ unread4.length}`;
         break;
      }
      while (2 == unread4.length && unread4 != String.fromCharCode(50,0)) {
          let sidec = 5.0;
          let forward8 = 2;
          let d_centerD = 1.0;
          let pingx: Array<any> = [741, 83, 893];
         unread4 = `${parseInt(`${d_centerD}`) | pingx.length}`;
         sidec += parseFloat(`${parseInt(`${sidec}`) * forward8}`);
         forward8 /= Math.max(3, parseInt(`${sidec}`));
         d_centerD -= 2 & parseInt(`${sidec}`);
         pingx.push(parseInt(`${sidec}`));
         break;
      }
       let relatedU = 4;
      filterG -= topicY.length >> (Math.min(Math.abs(2), 5));
      break;
   }
      filterG /= Math.max(2 & androidZ.size, 1);
      forwardW.set(`${backgrounde.length}`, 2);
       let searchbarq: Array<any> = [String.fromCharCode(109,95,53,51,95,114,101,115,101,116,0), String.fromCharCode(121,95,49,48,95,108,115,102,108,115,112,0), String.fromCharCode(121,95,49,53,95,110,111,97,108,108,111,99,0)];
       let transferZ = String.fromCharCode(105,109,109,101,100,105,97,116,101,108,121,95,51,95,54,54,0);
      if ((searchbarq.length | transferZ.length) < 2) {
         transferZ += `${searchbarq.length}`;
      }
      let librrc0 = 9662124 >= searchbarq.length;
      do {
          let controlj = String.fromCharCode(115,115,114,99,95,99,95,49,48,0);
          let acceptedS = 2.0;
         searchbarq.push(searchbarq.length / (Math.max(transferZ.length, 5)));
         controlj += `${(String.fromCharCode(76,0) == controlj ? controlj.length : parseInt(`${acceptedS}`))}`;
         acceptedS -= controlj.length & parseInt(`${acceptedS}`);
         if (librrc0) {
            break;
         }
      } while ((4 >= searchbarq.length) && librrc0);
         transferZ = `${transferZ.length >> (Math.min(Math.abs(2), 2))}`;
      let xadsdkn = 8607937 <= transferZ.length;
      do {
         transferZ = `${transferZ.length - 1}`;
         if (xadsdkn) {
            break;
         }
      } while (((transferZ.length * searchbarq.length) >= 4) && xadsdkn);
      if (1 > (transferZ.length * 5)) {
         transferZ = `${transferZ.length}`;
      }
      let sigmobp = transferZ.length <= 9758349;
      do {
         transferZ += `${searchbarq.length + 1}`;
         if (sigmobp) {
            break;
         }
      } while ((2 < (1 ^ transferZ.length) && (searchbarq.length ^ transferZ.length) < 1) && sigmobp);
      minivod_ += `${enewinterstitialP.length * ballD.length}`;
   while ((backgrounde.length >> (Math.min(Math.abs(2), 1))) >= 1) {
      backgrounde = [suggestionD.length - 1];
      break;
   }
      backgrounde.push(parseInt(`${dice8}`));
      minivod_ += `${enewinterstitialP.length & 1}`;
   let typesM = 8623004.0 >= dice8;
   do {
       let librrcJ = String.fromCharCode(120,95,53,50,95,112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,0);
       let description_1n = String.fromCharCode(110,105,98,95,98,95,49,48,0);
       let mbnativec: Array<any> = [909, 719, 813];
      if (mbnativec.length >= librrcJ.length) {
         librrcJ = "3";
      }
      for (let k = 0; k < 1; k++) {
         librrcJ = `${mbnativec.length}`;
      }
      let optionsw = mbnativec.length <= 9469894;
      do {
         mbnativec = [1 * mbnativec.length];
         if (optionsw) {
            break;
         }
      } while (optionsw && (!description_1n.startsWith(`${mbnativec.length}`)));
          let collectionI = String.fromCharCode(109,101,100,105,97,110,95,105,95,50,52,0);
         description_1n += "3";
         collectionI += `${collectionI.length ^ 1}`;
       let activeN = 1;
      if (activeN < mbnativec.length) {
         mbnativec = [activeN];
      }
         mbnativec = [librrcJ.length + activeN];
         description_1n += `${1 << (Math.min(1, mbnativec.length))}`;
      for (let f = 0; f < 2; f++) {
         description_1n = "1";
      }
      dice8 -= description_1n.length * topicY.length;
      if (typesM) {
         break;
      }
   } while (typesM && (3.100 > filterG));
    setRefreshing(false);
  };
  const refreshUserState = async () => {
       let faste = 1;
    let dataB = false;
    let confirmationG = 0;
    let penaltya = String.fromCharCode(100,95,51,95,104,97,115,104,116,97,103,0);
    let strT = String.fromCharCode(98,95,50,53,95,109,101,109,120,0);
    let robotoH = String.fromCharCode(108,95,51,48,95,103,100,115,112,0);
    let lightm: Map<any, any> = new Map([[String.fromCharCode(99,95,50,50,95,104,105,103,104,108,105,103,116,104,101,100,0),766], [String.fromCharCode(116,97,98,108,101,108,105,109,95,50,95,54,48,0),547]]);
    let typinga = String.fromCharCode(109,101,116,97,100,97,116,97,115,95,105,95,55,53,0);
    let layout5: Map<any, any> = new Map([[String.fromCharCode(109,95,52,50,95,115,101,116,102,105,101,108,100,0),true ], [String.fromCharCode(99,95,54,55,95,109,97,110,121,0),true ]]);
    let dycreator_ = 2.0;
    let stationW = String.fromCharCode(105,111,115,116,114,101,97,109,95,52,95,54,48,0);
    let subsL = false;
    let tickX = String.fromCharCode(114,97,100,105,97,108,95,48,95,53,48,0);
   while ((typinga.length | lightm.size) <= 1 && 1 <= (typinga.length | lightm.size)) {
      typinga = `${3 ^ robotoH.length}`;
      break;
   }
       let nativeex1 = String.fromCharCode(119,95,50,50,95,99,111,109,112,111,115,105,116,105,110,103,0);
       let lists = 2;
       let thumbnailE = 4.0;
      let memberN = 5419621 >= lists;
      do {
         lists |= parseInt(`${thumbnailE}`) & nativeex1.length;
         if (memberN) {
            break;
         }
      } while (memberN && (2.33 == (thumbnailE / (Math.max(4.66, 1)))));
          let libsgcore1 = String.fromCharCode(107,97,110,110,97,95,102,95,52,50,0);
          let googleL = 4.0;
         lists += lists + parseInt(`${thumbnailE}`);
         libsgcore1 = `${parseInt(`${googleL}`)}`;
         googleL -= parseFloat(`${2}`);
      for (let j = 0; j < 2; j++) {
         lists &= 1;
      }
          let libjsi6 = 1.0;
          let helperR = String.fromCharCode(121,95,52,49,95,114,101,118,97,108,105,100,97,116,105,111,110,0);
         lists ^= parseInt(`${thumbnailE}`) / 1;
         libjsi6 -= parseFloat(`${1 ^ parseInt(`${libjsi6}`)}`);
         helperR += `${parseInt(`${libjsi6}`)}`;
         thumbnailE *= parseFloat(`${nativeex1.length ^ lists}`);
      let loadingb = 7439731.0 <= thumbnailE;
      do {
         thumbnailE /= Math.max(parseFloat(`${lists}`), 2);
         if (loadingb) {
            break;
         }
      } while ((1.65 >= (thumbnailE / 4.88) || 2.53 >= (4.88 / (Math.max(4, thumbnailE)))) && loadingb);
         thumbnailE *= parseFloat(`${lists}`);
         lists <<= Math.min(Math.abs(lists / (Math.max(2, parseInt(`${thumbnailE}`)))), 3);
      let sinaA = nativeex1 == String.fromCharCode(97,112,121,0);
      do {
          let sort_ = String.fromCharCode(102,95,51,55,95,99,111,117,110,116,114,121,0);
          let leakcheckerq = String.fromCharCode(98,97,115,101,117,114,108,95,101,95,50,55,0);
         nativeex1 += `${lists}`;
         sort_ = `${leakcheckerq.length}`;
         leakcheckerq += `${leakcheckerq.length + sort_.length}`;
         if (sinaA) {
            break;
         }
      } while (sinaA && (4.100 < (5.70 * thumbnailE) || 3 < (4 * parseInt(`${thumbnailE}`))));
      layout5.set(penaltya, 2);
   for (let m = 0; m < 2; m++) {
       let s_countp = 1;
       let register__qR = false;
         register__qR = !register__qR && s_countp > 57;
      if (4 <= s_countp) {
         register__qR = s_countp == 36;
      }
         register__qR = s_countp >= 5;
      if ((s_countp << (Math.min(Math.abs(2), 4))) < 1 && register__qR) {
         s_countp |= s_countp;
      }
       let downI = 0.0;
          let signinup8: Map<any, any> = new Map([[String.fromCharCode(116,104,114,111,117,103,104,112,117,116,95,100,95,49,48,0),true ], [String.fromCharCode(102,95,49,51,95,112,105,101,0),false ]]);
         downI *= parseFloat(`${2 + parseInt(`${downI}`)}`);
         signinup8 = new Map([[`${signinup8.size}`, 1 & signinup8.size]]);
      confirmationG &= ((dataB ? 4 : 5) % (Math.max(8, (register__qR ? 4 : 2))));
   }
   if (5 > typinga.length) {
       let progressH = String.fromCharCode(120,102,111,114,109,101,100,95,55,95,52,52,0);
       let cricketl = 2.0;
       let showF = String.fromCharCode(115,117,98,112,101,101,114,95,51,95,56,48,0);
       let logouts = String.fromCharCode(116,95,56,95,99,102,101,110,99,0);
       let moonG = String.fromCharCode(110,95,54,52,95,109,98,103,114,97,112,104,0);
         progressH += `${progressH.length}`;
       let yellowf = String.fromCharCode(115,99,97,110,120,95,104,95,54,48,0);
       let modelQ = String.fromCharCode(116,111,109,99,114,121,112,116,95,110,95,49,52,0);
      for (let z = 0; z < 2; z++) {
          let frame_du: Map<any, any> = new Map([[String.fromCharCode(105,109,99,100,97,116,97,95,109,95,51,52,0),String.fromCharCode(99,111,108,115,95,108,95,53,53,0)], [String.fromCharCode(97,99,108,114,95,48,95,50,54,0),String.fromCharCode(108,105,98,99,111,100,101,99,95,49,95,54,48,0)]]);
          let shoot8 = 2.0;
          let libyogaF = String.fromCharCode(106,95,52,50,95,114,112,114,111,98,101,0);
          let runtimeschedulerq = 4;
         logouts = "1";
         frame_du = new Map([[`${shoot8}`, 3 & runtimeschedulerq]]);
         shoot8 += parseFloat(`${parseInt(`${shoot8}`) & runtimeschedulerq}`);
         libyogaF += "2";
      }
         progressH = `${2 | yellowf.length}`;
         progressH += `${yellowf.length * parseInt(`${cricketl}`)}`;
         logouts += "1";
      if (1.7 >= (showF.length - cricketl) && (showF.length / (Math.max(4, 4))) >= 1) {
         cricketl /= Math.max(parseInt(`${cricketl}`) - showF.length, 1);
      }
         progressH = `${yellowf.length}`;
          let xvodn = String.fromCharCode(103,95,51,55,95,112,112,102,108,97,103,115,0);
          let live3: Map<any, any> = new Map([[String.fromCharCode(99,111,101,102,115,95,50,95,55,0),169], [String.fromCharCode(109,107,100,105,114,95,100,95,49,51,0),618]]);
         cricketl += showF.length;
         xvodn = `${xvodn.length << (Math.min(Math.abs(1), 1))}`;
         live3 = new Map([[`${live3.size}`, 2]]);
         progressH = `${2 ^ modelQ.length}`;
      while (progressH.includes(`${showF.length}`)) {
         progressH = "3";
         break;
      }
         progressH = `${logouts.length | parseInt(`${cricketl}`)}`;
         moonG += `${(moonG == String.fromCharCode(83,0) ? showF.length : moonG.length)}`;
      if (showF.length <= 5) {
         showF = `${modelQ.length}`;
      }
      if (modelQ == String.fromCharCode(70,0) && yellowf.length <= 1) {
          let videocommonw = false;
          let arrowc = String.fromCharCode(119,101,98,109,95,98,95,51,50,0);
          let target6 = 5.0;
         modelQ = "2";
         videocommonw = arrowc.endsWith(`${videocommonw}`);
         arrowc = `${(String.fromCharCode(56,0) == arrowc ? arrowc.length : parseInt(`${target6}`))}`;
         target6 *= (parseInt(`${target6}`) << (Math.min(4, Math.abs((videocommonw ? 1 : 2)))));
      }
      layout5.set(`${progressH}`, (String.fromCharCode(115,0) == progressH ? layout5.size : progressH.length));
   }
   if ((3 * confirmationG) < 3 && 3 < (3 * confirmationG)) {
       let eighteenh = 4.0;
       let notificationA = 5.0;
       let signinup3 = false;
       let nextx: Map<any, any> = new Map([[String.fromCharCode(115,112,108,105,110,101,95,54,95,50,54,0),true ], [String.fromCharCode(121,95,50,53,95,115,116,111,112,112,101,100,0),false ]]);
          let modityA = 1.0;
          let vietnamY: Map<any, any> = new Map([[String.fromCharCode(115,98,112,114,111,95,114,95,54,55,0),String.fromCharCode(117,95,57,57,95,109,97,110,97,103,101,97,98,108,101,0)], [String.fromCharCode(114,95,51,51,95,103,100,97,116,97,0),String.fromCharCode(106,95,57,55,95,112,114,111,103,114,97,109,0)], [String.fromCharCode(114,95,50,50,95,115,121,110,116,104,0),String.fromCharCode(97,95,50,54,95,99,111,110,118,101,114,116,105,110,103,0)]]);
         notificationA += parseFloat(`${parseInt(`${eighteenh}`)}`);
         modityA *= parseInt(`${modityA}`);
         vietnamY = new Map([[`${vietnamY.size}`, 2]]);
      if (eighteenh > 4.53) {
         signinup3 = !signinup3 || eighteenh < 16.36;
      }
       let friendsy = String.fromCharCode(99,95,54,49,95,99,111,110,115,116,114,117,99,116,111,114,109,97,103,105,99,0);
          let bodanM = 0;
          let gradlewF = 1.0;
         friendsy += `${((signinup3 ? 5 : 4) / (Math.max(3, 7)))}`;
         bodanM *= parseInt(`${gradlewF}`);
         gradlewF /= Math.max(parseFloat(`${parseInt(`${gradlewF}`)}`), 4);
      let ajaxG = 9329008.0 >= eighteenh;
      do {
          let appleo = String.fromCharCode(112,95,54,54,95,99,111,109,112,97,116,105,98,105,108,105,116,121,0);
          let connectionO = 2.0;
         eighteenh /= Math.max(4, appleo.length - nextx.size);
         appleo += `${parseInt(`${connectionO}`) << (Math.min(Math.abs(parseInt(`${connectionO}`)), 1))}`;
         if (ajaxG) {
            break;
         }
      } while (ajaxG && (nextx.get(`${eighteenh}`) == null));
      while (4 > (friendsy.length ^ nextx.size) || 4 > (nextx.size ^ friendsy.length)) {
         nextx = new Map([[`${notificationA}`, ((signinup3 ? 5 : 4) * parseInt(`${notificationA}`))]]);
         break;
      }
      if (1 == (nextx.size / (Math.max(1, 3)))) {
         notificationA /= Math.max(3, parseFloat(`${friendsy.length}`));
      }
       let materialN = String.fromCharCode(114,101,108,111,97,100,95,115,95,52,50,0);
       let v_titlek = String.fromCharCode(116,95,56,48,95,115,117,98,109,105,116,0);
         nextx = new Map([[`${nextx.size}`, nextx.size % 2]]);
         notificationA += parseFloat(`${nextx.size << (Math.min(3, Math.abs(parseInt(`${eighteenh}`))))}`);
      if ((nextx.size * parseInt(`${eighteenh}`)) > 2) {
          let cornerd: Array<any> = [88, 513];
          let qaagA = 4.0;
          let bingo: Array<any> = [461, 388];
         eighteenh *= parseInt(`${eighteenh}`);
         cornerd = [3];
         qaagA /= Math.max(1, bingo.length | 1);
         bingo.push(2);
      }
      while (3 > friendsy.length) {
          let trophyn = 4.0;
          let paginationN = String.fromCharCode(106,95,52,55,95,100,101,115,116,114,117,99,116,0);
          let eighteenf = String.fromCharCode(103,95,52,55,95,109,117,115,120,0);
         signinup3 = nextx.size < 34 && !signinup3;
         trophyn /= Math.max(3, 2);
         paginationN += "2";
         eighteenf = `${eighteenf.length}`;
         break;
      }
      confirmationG += (robotoH == String.fromCharCode(78,0) ? layout5.size : robotoH.length);
   }
       let formS = 0.0;
       let hiadq: Array<any> = [192, 470, 188];
       let textinput9: Map<any, any> = new Map([[String.fromCharCode(98,105,116,109,97,112,95,51,95,57,51,0),String.fromCharCode(97,114,103,118,95,101,95,50,51,0)], [String.fromCharCode(99,121,99,108,105,99,95,116,95,55,56,0),String.fromCharCode(120,95,54,53,95,97,110,105,109,97,108,115,0)]]);
         hiadq = [parseInt(`${formS}`)];
         formS /= Math.max(parseFloat(`${hiadq.length}`), 5);
      if (5 >= (parseInt(`${formS}`) - hiadq.length) || (2.78 - formS) >= 4.19) {
         formS -= parseFloat(`${parseInt(`${formS}`)}`);
      }
          let hovern = String.fromCharCode(108,95,53,57,0);
          let o_viewg = String.fromCharCode(98,95,53,52,95,114,101,115,97,109,112,108,101,0);
          let sidet = String.fromCharCode(98,105,110,100,108,105,115,116,95,57,95,56,50,0);
         formS -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${formS}`)), 2))}`);
         hovern += `${sidet.length}`;
         o_viewg += `${(String.fromCharCode(55,0) == sidet ? hovern.length : sidet.length)}`;
      let verticali = 5910520 >= textinput9.size;
      do {
         textinput9 = new Map([[`${textinput9.size}`, textinput9.size & 3]]);
         if (verticali) {
            break;
         }
      } while ((textinput9.get(`${hiadq.length}`) == null) && verticali);
      if (!hiadq.includes(formS)) {
          let bodana = true;
         formS += (parseFloat(`${2 << (Math.min(3, Math.abs((bodana ? 4 : 1))))}`));
      }
      for (let j = 0; j < 1; j++) {
         hiadq.push(textinput9.size * 3);
      }
      for (let q = 0; q < 1; q++) {
          let nativep = String.fromCharCode(102,95,54,55,95,105,110,116,101,103,101,114,0);
          let trash2 = 2.0;
         formS -= parseFloat(`${nativep.length + 2}`);
         nativep = `${parseInt(`${trash2}`) * parseInt(`${trash2}`)}`;
      }
      if (!Array.from(textinput9.keys()).includes(`${hiadq.length}`)) {
         hiadq = [parseInt(`${formS}`) / (Math.max(textinput9.size, 1))];
      }
      dycreator_ -= ((dataB ? 2 : 1) / (Math.max(7, lightm.size)));

    const result = await yys_GesturesConst.getUserDetails();

   for (let n = 0; n < 1; n++) {
      stationW = `${lightm.size}`;
   }
       let react3: Array<any> = [509, 931, 709];
      while (2 > (react3.length + 4)) {
         react3 = [react3.length];
         break;
      }
         react3 = [react3.length >> (Math.min(2, react3.length))];
         react3 = [react3.length | react3.length];
      confirmationG /= Math.max(3, penaltya.length ^ 1);
      strT += `${lightm.size}`;
      layout5 = new Map([[`${dataB}`, ((dataB ? 4 : 3))]]);
   if (penaltya == stationW) {
       let baseg: Map<any, any> = new Map([[String.fromCharCode(117,95,50,51,95,115,112,104,101,114,105,99,97,108,0),String.fromCharCode(115,101,103,102,101,97,116,117,114,101,115,95,101,95,49,56,0)], [String.fromCharCode(101,95,57,95,114,101,99,117,114,115,105,118,101,108,121,0),String.fromCharCode(98,95,52,57,95,112,97,114,101,110,116,104,101,115,101,115,0)]]);
       let brightnessR = 1.0;
       let analytics = 5.0;
       let libsgcore7 = true;
          let memberT: Map<any, any> = new Map([[String.fromCharCode(99,95,56,95,115,116,97,103,101,0),428], [String.fromCharCode(98,97,115,101,112,111,105,110,116,95,117,95,57,0),859]]);
          let configureU = String.fromCharCode(111,95,49,52,95,97,112,112,101,110,100,101,100,0);
         baseg.set(`${libsgcore7}`, ((libsgcore7 ? 3 : 4) ^ baseg.size));
         memberT.set(`${configureU}`, 1);
         configureU += `${configureU.length / 3}`;
      let episode7 = 8564236.0 >= analytics;
      do {
          let desc7: Map<any, any> = new Map([[String.fromCharCode(119,95,55,57,95,115,112,111,116,108,105,103,104,116,0),408], [String.fromCharCode(101,95,48,95,115,108,105,100,97,98,108,101,0),585], [String.fromCharCode(114,95,50,49,95,111,118,101,114,114,105,100,105,110,103,0),397]]);
          let pathh = 5.0;
          let updatesZ: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,115,95,57,95,49,54,0),372], [String.fromCharCode(97,99,111,109,112,114,101,115,115,111,114,95,52,95,53,55,0),921], [String.fromCharCode(97,110,105,109,97,116,105,111,110,115,95,100,95,51,51,0),87]]);
          let huawei6: Array<any> = [80, 454];
         analytics /= Math.max(parseFloat(`${huawei6.length * 2}`), 2);
         desc7.set(`${pathh}`, 1 * desc7.size);
         pathh /= Math.max(parseFloat(`${parseInt(`${pathh}`) - updatesZ.size}`), 4);
         updatesZ.set(`${updatesZ.size}`, 2);
         huawei6 = [parseInt(`${pathh}`)];
         if (episode7) {
            break;
         }
      } while (episode7 && (!libsgcore7));
         brightnessR -= parseInt(`${analytics}`);
         baseg.set(`${brightnessR}`, parseInt(`${brightnessR}`) - parseInt(`${analytics}`));
      let finit_xV = analytics >= 8573716.0;
      do {
         analytics += (parseFloat(`${(libsgcore7 ? 1 : 2) << (Math.min(Math.abs(parseInt(`${analytics}`)), 4))}`));
         if (finit_xV) {
            break;
         }
      } while (finit_xV && (analytics < 2.19 && (analytics * 2.19) < 4.99));
      let blacka = libsgcore7 ? !libsgcore7 : libsgcore7;
      do {
         libsgcore7 = 24.38 < brightnessR;
         if (blacka) {
            break;
         }
      } while (blacka && ((4.8 + analytics) < 1.1));
      while ((1.64 + brightnessR) < 3.61) {
         baseg = new Map([[`${brightnessR}`, (parseInt(`${brightnessR}`) | (libsgcore7 ? 5 : 1))]]);
         break;
      }
          let debug5 = String.fromCharCode(113,95,49,48,95,114,101,99,101,105,118,101,100,0);
          let mbbid0: Map<any, any> = new Map([[String.fromCharCode(101,118,115,105,103,110,97,108,95,115,95,52,50,0),String.fromCharCode(100,95,55,56,95,100,101,108,116,97,0)], [String.fromCharCode(108,95,53,50,95,98,105,110,100,0),String.fromCharCode(122,95,54,95,109,97,99,104,105,110,101,0)], [String.fromCharCode(118,95,56,55,95,102,114,101,101,100,117,109,112,98,117,102,102,101,114,0),String.fromCharCode(112,95,55,50,95,114,101,115,117,109,101,100,0)]]);
         brightnessR += 1 ^ parseInt(`${analytics}`);
         debug5 += `${debug5.length}`;
         mbbid0 = new Map([[`${mbbid0.size}`, (debug5 == String.fromCharCode(97,0) ? debug5.length : mbbid0.size)]]);
      for (let x = 0; x < 3; x++) {
          let mergerK = String.fromCharCode(97,119,97,114,101,95,113,95,57,48,0);
          let thumbnailO = String.fromCharCode(99,95,50,51,95,97,103,103,105,110,102,111,0);
         libsgcore7 = baseg.size == 41;
         mergerK = `${(mergerK == String.fromCharCode(68,0) ? mergerK.length : thumbnailO.length)}`;
         thumbnailO = `${(mergerK == String.fromCharCode(77,0) ? mergerK.length : thumbnailO.length)}`;
      }
          let userc: Map<any, any> = new Map([[String.fromCharCode(103,101,116,104,100,114,95,52,95,52,51,0),String.fromCharCode(122,95,49,55,95,108,114,111,110,100,0)], [String.fromCharCode(101,120,112,108,97,105,110,95,114,95,49,57,0),String.fromCharCode(119,97,116,101,114,109,97,114,107,115,95,54,95,51,51,0)]]);
          let topico = String.fromCharCode(114,95,51,49,95,115,105,110,113,105,0);
          let appleM = 5.0;
         analytics += parseFloat(`${1}`);
         userc.set(`${appleM}`, topico.length);
         topico += "1";
         appleM -= 3;
         analytics -= (parseFloat(`${parseInt(`${analytics}`) + (libsgcore7 ? 5 : 2)}`));
       let shootU = String.fromCharCode(105,95,53,57,95,114,101,99,101,110,116,0);
       let hongkong6 = String.fromCharCode(115,117,98,118,105,100,101,111,95,98,95,51,57,0);
      stationW += `${(baseg.size & (libsgcore7 ? 3 : 2))}`;
   }
       let profileY = 0.0;
      for (let s = 0; s < 1; s++) {
         profileY -= parseFloat(`${1 ^ parseInt(`${profileY}`)}`);
      }
      if (profileY > profileY) {
         profileY -= parseFloat(`${parseInt(`${profileY}`) - 2}`);
      }
      while ((profileY - 1.93) > 1.92 && 4.75 > (profileY + 1.93)) {
         profileY += parseFloat(`${parseInt(`${profileY}`)}`);
         break;
      }
      confirmationG ^= parseInt(`${profileY}`) + parseInt(`${dycreator_}`);
    if (result == null) {

   if (!Array.from(layout5.values()).includes(faste)) {
       let nativeex0 = 3;
         nativeex0 <<= Math.min(Math.abs(1 * nativeex0), 4);
      let condenseda = 9694421 <= nativeex0;
      do {
         nativeex0 += nativeex0 | nativeex0;
         if (condenseda) {
            break;
         }
      } while (condenseda && (3 < (5 >> (Math.min(1, Math.abs(nativeex0)))) && (nativeex0 >> (Math.min(Math.abs(nativeex0), 3))) < 5));
         nativeex0 -= 3;
      faste |= nativeex0;
   }
   while (strT.length == confirmationG) {
       let short_goK = String.fromCharCode(118,109,104,100,95,49,95,54,56,0);
         short_goK = `${short_goK.length}`;
      while (short_goK != String.fromCharCode(108,0) && short_goK != String.fromCharCode(102,0)) {
         short_goK = `${(short_goK == String.fromCharCode(81,0) ? short_goK.length : short_goK.length)}`;
         break;
      }
         short_goK = `${short_goK.length << (Math.min(short_goK.length, 2))}`;
      confirmationG |= (strT.length / (Math.max(3, (dataB ? 1 : 4))));
      break;
   }
      layout5.set(strT, 1 << (Math.min(3, strT.length)));
      typinga += `${stationW.length >> (Math.min(Math.abs(3), 1))}`;
      lightm = new Map([[typinga, typinga.length]]);
      dataB = 80.36 == dycreator_;
      return;
    }

    await dispatch(updateUserAuth(result));

   let condensedS = String.fromCharCode(105,51,120,53,107,48,109,101,48,0) == stationW;
   do {
      stationW = `${strT.length >> (Math.min(Math.abs(2), 3))}`;
      if (condensedS) {
         break;
      }
   } while (condensedS && (typinga == String.fromCharCode(54,0)));
       let large2 = String.fromCharCode(108,95,51,49,95,110,117,109,112,97,100,0);
       let readN = String.fromCharCode(121,95,56,51,95,115,112,108,97,115,104,0);
          let reactnativejsx = String.fromCharCode(100,95,54,50,95,101,110,99,105,112,104,101,114,0);
          let pinga = String.fromCharCode(122,95,50,48,95,116,105,109,101,108,105,109,105,116,0);
         readN = `${large2.length | 2}`;
         reactnativejsx = `${(pinga == String.fromCharCode(66,0) ? pinga.length : reactnativejsx.length)}`;
      for (let w = 0; w < 1; w++) {
          let heartK: Map<any, any> = new Map([[String.fromCharCode(102,111,117,114,120,95,120,95,56,51,0),601], [String.fromCharCode(100,95,51,55,95,108,105,115,116,0),724], [String.fromCharCode(105,115,101,109,112,116,121,95,112,95,55,53,0),595]]);
          let textinputP = 4.0;
          let pressureA = false;
          let internetA = true;
          let logoutY = String.fromCharCode(111,95,50,50,95,100,101,99,111,114,114,0);
         large2 = "1";
         heartK = new Map([[`${heartK.size}`, logoutY.length]]);
         textinputP += 1 | parseInt(`${textinputP}`);
         pressureA = heartK.size < logoutY.length;
         internetA = logoutY.endsWith(`${internetA}`);
      }
         readN = `${3 & large2.length}`;
         large2 += "3";
         readN += `${readN.length}`;
      if (large2.length > readN.length) {
         readN += `${2 ^ large2.length}`;
      }
      typinga += `${robotoH.length}`;
      penaltya = `${3 & typinga.length}`;
       let expiredF = 2.0;
       let watchr: Map<any, any> = new Map([[String.fromCharCode(119,95,50,52,95,102,111,108,100,101,114,0),465], [String.fromCharCode(118,95,53,49,95,98,117,102,102,101,114,115,0),191]]);
       let showj = String.fromCharCode(103,95,56,50,95,104,100,99,100,0);
      while (4 >= watchr.size) {
         expiredF += (showj == String.fromCharCode(51,0) ? watchr.size : showj.length);
         break;
      }
         showj = "1";
      let runtime1 = showj == String.fromCharCode(98,51,95,112,121,105,108,114,0);
      do {
         showj = `${showj.length * parseInt(`${expiredF}`)}`;
         if (runtime1) {
            break;
         }
      } while (runtime1 && ((showj.length - expiredF) == 2.75 && 2 == (2 >> (Math.min(2, showj.length)))));
         watchr = new Map([[`${watchr.size}`, watchr.size]]);
      let inactiveA = watchr.size <= 4948566;
      do {
         watchr.set(`${expiredF}`, watchr.size << (Math.min(5, Math.abs(parseInt(`${expiredF}`)))));
         if (inactiveA) {
            break;
         }
      } while (inactiveA && ((watchr.size | 4) >= 3));
      while (watchr.size == 4) {
         expiredF *= 1 ^ watchr.size;
         break;
      }
         showj = `${parseInt(`${expiredF}`)}`;
          let bodans = 1;
         expiredF /= Math.max((String.fromCharCode(57,0) == showj ? watchr.size : showj.length), 2);
         bodans <<= Math.min(Math.abs(2), 1);
         watchr.set(`${expiredF}`, parseInt(`${expiredF}`) % (Math.max(watchr.size, 5)));
      robotoH += `${robotoH.length / (Math.max(2, strT.length))}`;
       let libavcodecG = 2.0;
       let launchi = String.fromCharCode(115,95,56,52,95,99,111,108,117,109,110,0);
      if (!launchi.startsWith(`${libavcodecG}`)) {
          let toponp: Array<any> = [28, 114];
          let downloadedW = 5.0;
          let model5 = 4.0;
          let twitterK = String.fromCharCode(99,97,110,100,105,100,97,116,101,115,95,121,95,55,48,0);
          let download6 = 0;
         launchi += `${3 * twitterK.length}`;
         toponp.push(toponp.length);
         downloadedW *= parseFloat(`${parseInt(`${model5}`) >> (Math.min(5, Math.abs(3)))}`);
         model5 *= parseFloat(`${parseInt(`${model5}`) >> (Math.min(1, Math.abs(3)))}`);
         twitterK = `${parseInt(`${downloadedW}`)}`;
         download6 /= Math.max(2, 1);
      }
         libavcodecG += launchi.length ^ parseInt(`${libavcodecG}`);
      layout5.set(`${dycreator_}`, 2 / (Math.max(parseInt(`${dycreator_}`), 10)));
   for (let f = 0; f < 1; f++) {
       let photo2 = 5.0;
       let settingo = 2.0;
       let huawein = String.fromCharCode(118,97,114,116,105,109,101,95,53,95,51,54,0);
       let nativec = String.fromCharCode(112,114,101,102,101,114,101,110,99,101,115,95,115,95,51,56,0);
       let shirtn = true;
          let full3 = String.fromCharCode(116,95,49,53,95,99,104,101,99,107,112,111,105,110,116,0);
          let playw = 0.0;
         shirtn = full3.startsWith(`${settingo}`);
         full3 = `${parseInt(`${playw}`)}`;
      let remindera = settingo <= 5581403.0;
      do {
         settingo *= (parseFloat(`${(shirtn ? 3 : 3) - huawein.length}`));
         if (remindera) {
            break;
         }
      } while (((parseInt(`${settingo}`) + 4) == 5 || (settingo + 5.29) == 3.10) && remindera);
      let modityy = photo2 >= 8358840.0;
      do {
         photo2 += parseFloat(`${3}`);
         if (modityy) {
            break;
         }
      } while (modityy && ((huawein.length % (Math.max(4, 7))) >= 4 || (huawein.length & 4) >= 1));
      let statsD = settingo <= 5116939.0;
      do {
         settingo -= parseFloat(`${parseInt(`${settingo}`)}`);
         if (statsD) {
            break;
         }
      } while ((4.75 >= (3.13 - photo2) && (3.13 - photo2) >= 4.8) && statsD);
       let uimanagers = String.fromCharCode(97,100,100,105,95,50,95,53,52,0);
       let runtimeB = String.fromCharCode(101,95,54,48,95,118,105,111,108,101,110,99,101,0);
         shirtn = parseFloat(`${uimanagers.length}`) < settingo;
      if (nativec == huawein) {
         huawein += `${nativec.length}`;
      }
       let statsw = String.fromCharCode(112,95,50,95,108,97,121,101,114,0);
       let agreement8 = 5;
       let vignetteQ = 4;
      if ((parseFloat(`${runtimeB.length}`) + photo2) < 4.45 || 4.45 < (parseFloat(`${runtimeB.length}`) + photo2)) {
         photo2 /= Math.max(parseFloat(`${1 & runtimeB.length}`), 1);
      }
      while (4 == (vignetteQ | 5)) {
          let long_f3 = true;
          let libglogX: Map<any, any> = new Map([[String.fromCharCode(114,101,102,117,110,100,95,50,95,52,55,0),true ], [String.fromCharCode(113,117,97,100,114,97,116,105,99,95,50,95,51,53,0),true ], [String.fromCharCode(114,95,51,57,95,112,114,101,112,101,110,100,0),true ]]);
          let mounting4: Array<any> = [972, 704, 654];
          let robotos = 3;
          let forwardQ: Map<any, any> = new Map([[String.fromCharCode(119,111,114,107,97,114,111,117,110,100,95,98,95,56,48,0),String.fromCharCode(115,95,54,57,95,114,101,100,117,99,101,114,0)], [String.fromCharCode(99,111,110,116,114,97,105,110,101,100,95,111,95,53,49,0),String.fromCharCode(118,95,55,51,95,102,119,104,116,120,0)]]);
         agreement8 %= Math.max(((shirtn ? 4 : 3) >> (Math.min(Math.abs(vignetteQ), 4))), 3);
         long_f3 = forwardQ.size > mounting4.length;
         libglogX.set(`${robotos}`, 3 - robotos);
         mounting4.push(robotos % 1);
         forwardQ = new Map([[`${libglogX.size}`, 1 ^ libglogX.size]]);
         break;
      }
      typinga += `${((dataB ? 5 : 2) % 1)}`;
   }

    return;
  };

  useEffect(() => {
    

    let mergedArray;

    if (userState.user?.userUpline.created_at != '') {
      mergedArray = userState.user?.userInvitedUserList.concat(userState.user?.userUpline);
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
        displayText = item.title;
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
