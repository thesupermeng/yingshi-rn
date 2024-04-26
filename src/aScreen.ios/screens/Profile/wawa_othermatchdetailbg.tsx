import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import ScreenContainer from '../../components/container/wawa_nterstitial_iconpipexpand';
import { RootStackScreenProps } from '@type/wawa_iconnewchat';
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native';

import TitleWithBackButtonHeader from '../../components/header/wawa_matchinactive_header';
import { Button, Dialog } from '@rneui/themed';
import ShowMoreButton from '../../components/button/wawa_iconlogout_button';
import NotificationModal from '../../components/modal/wawa_lock';
import MoreArrow from '@static/images/combinePredictionbuttonSelect.svg';
import ConfirmationModal from '../../components/modal/wawa_iconedit';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/wawa_root';
import { clearStorageMemory } from '@redux/actions/wawa_apple_settings';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import { removeUserAuthState } from '@redux/actions/wawa_loginsuccess';
import { changeScreenAction } from '@redux/actions/wawa_related';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';

import { APP_NAME_CONST, APP_VERSION, IS_OTHER_SKIN } from '@utility/wawa_iconpointscore';
import { wawaBackground } from '@redux/reducers/wawa_comment';
import { wawaNewarchdefaults } from '@utility/wawa_analytic_imagenomoredata';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { wawaPhoneControls } from '@redux/reducers/wawa_umeng';
import { wawaLibglog } from '@models/wawa_refreshborderless_found';
export default ({ navigation }: RootStackScreenProps<'设置'>) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isVersionDialogOpen, setIsVersionDialogOpen] = useState(false);
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const [subtitle1, setSubtitle1] = useState('当前已是最新版本' + APP_VERSION);

  const settingsReducer: wawaBackground = useAppSelector(
    ({ settingsReducer }: wawaIconsubssuccess) => settingsReducer
  );

  const dispatch = useAppDispatch();

  const toggleLogoutDialog = () => {
       let topicJ = String.fromCharCode(111,95,57,53,95,99,111,109,112,108,101,116,105,111,110,115,0);
    let defaultteamA = false;
    let libswresample0: Array<any> = [708, 736, 367];
    let whiteanimationliveV = String.fromCharCode(111,95,53,95,113,117,111,116,97,0);
    let china0 = String.fromCharCode(102,97,117,108,116,95,115,95,50,53,0);
    let filterc = 3.0;
    let activityX = true;
    let libavutilL: Array<any> = [512, 171];
    let fcdaebecbcbafcdfceaaeccfeacdb6 = String.fromCharCode(115,95,49,55,95,104,97,115,104,105,110,105,116,0);
    let searchbarT: Map<any, any> = new Map([[String.fromCharCode(105,112,118,95,102,95,49,54,0),354], [String.fromCharCode(98,95,56,49,95,103,101,116,110,112,97,115,115,101,115,0),724]]);
    let moviesG = String.fromCharCode(98,100,108,116,95,107,95,53,50,0);
    let gestureH = String.fromCharCode(113,95,51,48,95,112,97,114,101,110,116,115,0);
    let homeplayerx = 0.0;
    let iconrefreshy: Map<any, any> = new Map([[String.fromCharCode(119,95,57,53,95,109,101,109,111,0),901], [String.fromCharCode(108,97,103,97,114,105,116,104,114,97,99,95,53,95,56,57,0),450]]);
    let currentZ: Map<any, any> = new Map([[String.fromCharCode(102,95,57,55,95,100,101,99,105,109,97,108,0),645], [String.fromCharCode(117,108,111,110,103,95,48,95,53,50,0),841], [String.fromCharCode(97,108,112,104,97,98,101,116,95,56,95,52,57,0),730]]);
    let moreD: Map<any, any> = new Map([[String.fromCharCode(116,116,97,103,95,55,95,49,57,0),String.fromCharCode(122,95,50,50,95,105,109,112,108,105,99,105,116,108,121,0)], [String.fromCharCode(105,95,51,52,95,114,102,116,102,115,117,98,0),String.fromCharCode(103,95,48,95,109,117,108,116,105,101,110,100,0)], [String.fromCharCode(97,99,99,101,108,101,114,97,116,105,111,110,95,102,95,55,49,0),String.fromCharCode(99,111,109,109,97,110,100,115,95,52,95,51,54,0)]]);
   for (let p = 0; p < 1; p++) {
      china0 = "2";
   }
      moviesG = `${moviesG.length}`;
   let macauR = String.fromCharCode(107,106,55,119,0) == fcdaebecbcbafcdfceaaeccfeacdb6;
   do {
      fcdaebecbcbafcdfceaaeccfeacdb6 = `${fcdaebecbcbafcdfceaaeccfeacdb6.length}`;
      if (macauR) {
         break;
      }
   } while (((3 & libavutilL.length) == 5 && (libavutilL.length & 3) == 1) && macauR);
       let gestures8: Map<any, any> = new Map([[String.fromCharCode(101,95,54,48,95,100,111,119,110,108,111,97,100,115,0),String.fromCharCode(109,95,49,56,95,101,120,105,115,116,0)], [String.fromCharCode(105,99,101,99,97,115,116,95,104,95,53,56,0),String.fromCharCode(106,95,51,52,95,98,111,110,100,0)], [String.fromCharCode(98,95,51,54,95,100,101,116,101,99,116,105,110,103,0),String.fromCharCode(105,110,100,101,111,100,97,116,97,95,101,95,56,49,0)]]);
       let mbnativeadvancedz = String.fromCharCode(105,95,51,56,95,115,116,105,108,108,0);
       let containerM: Map<any, any> = new Map([[String.fromCharCode(99,117,114,114,114,101,110,116,95,106,95,56,0),String.fromCharCode(105,95,56,50,95,112,114,101,99,111,109,112,111,115,101,100,0)], [String.fromCharCode(120,95,53,54,95,115,97,99,107,0),String.fromCharCode(97,95,55,54,95,113,117,97,108,105,102,121,0)], [String.fromCharCode(106,100,109,97,105,110,99,116,95,116,95,57,48,0),String.fromCharCode(97,95,57,50,95,98,114,97,99,107,101,116,0)]]);
       let catalogP = String.fromCharCode(100,95,55,55,95,99,108,108,99,0);
      for (let y = 0; y < 2; y++) {
         containerM = new Map([[`${containerM.size}`, 1]]);
      }
      if ((gestures8.size + 4) < 3) {
          let data5 = String.fromCharCode(107,95,52,57,95,97,98,98,114,0);
          let reactnativeultimatelistviewj: Map<any, any> = new Map([[String.fromCharCode(110,95,55,53,95,102,97,116,97,108,0),true ], [String.fromCharCode(101,95,48,95,112,114,101,104,101,97,116,0),true ]]);
          let anythinkH: Map<any, any> = new Map([[String.fromCharCode(108,111,97,100,95,119,95,56,0),6], [String.fromCharCode(109,95,56,49,95,114,101,99,111,114,100,110,105,110,103,0),648]]);
          let libreactnativeblobq: Array<any> = [861, 746];
          let templateprocessorL = String.fromCharCode(108,111,97,100,101,100,95,109,95,57,49,0);
         gestures8.set(data5, (String.fromCharCode(77,0) == data5 ? libreactnativeblobq.length : data5.length));
         reactnativeultimatelistviewj = new Map([[`${anythinkH.size}`, reactnativeultimatelistviewj.size ^ 2]]);
         anythinkH = new Map([[`${reactnativeultimatelistviewj.size}`, 2 * reactnativeultimatelistviewj.size]]);
         libreactnativeblobq.push(anythinkH.size);
         templateprocessorL += `${2 >> (Math.min(5, Math.abs(anythinkH.size)))}`;
      }
         mbnativeadvancedz = "3";
         gestures8.set(`${gestures8.size}`, gestures8.size + containerM.size);
         catalogP = `${containerM.size | catalogP.length}`;
         mbnativeadvancedz += `${(mbnativeadvancedz == String.fromCharCode(54,0) ? containerM.size : mbnativeadvancedz.length)}`;
      for (let n = 0; n < 1; n++) {
         gestures8 = new Map([[`${containerM.size}`, (mbnativeadvancedz == String.fromCharCode(84,0) ? containerM.size : mbnativeadvancedz.length)]]);
      }
         mbnativeadvancedz += `${gestures8.size}`;
      moviesG = `${(gestureH == String.fromCharCode(54,0) ? mbnativeadvancedz.length : gestureH.length)}`;
      libswresample0 = [parseInt(`${filterc}`) / 1];
      activityX = fcdaebecbcbafcdfceaaeccfeacdb6.length <= 51;
   while (!fcdaebecbcbafcdfceaaeccfeacdb6.startsWith(moviesG)) {
      moviesG += `${3 >> (Math.min(5, topicJ.length))}`;
      break;
   }
   for (let o = 0; o < 1; o++) {
      filterc += searchbarT.size + 3;
   }
      searchbarT = new Map([[`${libavutilL.length}`, china0.length * libavutilL.length]]);
   let stylesO = 7040283 <= libswresample0.length;
   do {
       let share2: Array<any> = [String.fromCharCode(103,95,57,50,95,121,115,108,111,103,0), String.fromCharCode(110,95,57,51,95,99,97,99,104,101,115,0)];
       let analyticP = 4;
       let internet2 = String.fromCharCode(112,105,120,109,97,112,95,122,95,51,52,0);
         analyticP -= analyticP;
          let clockm = 3;
          let spinnerj = String.fromCharCode(111,98,115,101,114,118,101,114,95,102,95,50,54,0);
          let pressureq = 5.0;
         analyticP |= analyticP * 3;
         clockm /= Math.max(5, 1 - clockm);
         spinnerj = `${parseInt(`${pressureq}`) << (Math.min(5, Math.abs(clockm)))}`;
         pressureq /= Math.max(1, parseFloat(`${spinnerj.length << (Math.min(2, Math.abs(parseInt(`${pressureq}`))))}`));
       let floatingm = 4.0;
         analyticP |= internet2.length << (Math.min(Math.abs(2), 3));
      let livenodatabgimgb = internet2.length <= 5852669;
      do {
         internet2 += `${share2.length}`;
         if (livenodatabgimgb) {
            break;
         }
      } while (livenodatabgimgb && ((internet2.length << (Math.min(2, share2.length))) > 1 && (share2.length << (Math.min(Math.abs(1), 1))) > 2));
      for (let x = 0; x < 3; x++) {
          let successd: Map<any, any> = new Map([[String.fromCharCode(104,115,118,97,95,51,95,55,56,0),String.fromCharCode(114,116,99,95,104,95,53,51,0)], [String.fromCharCode(104,95,52,53,95,104,105,115,116,111,114,121,0),String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,116,105,111,110,95,51,95,56,49,0)], [String.fromCharCode(103,102,105,110,116,95,55,95,56,0),String.fromCharCode(103,95,57,56,95,101,120,116,114,97,100,97,116,97,99,111,110,102,105,103,0)]]);
          let zhuboJ: Map<any, any> = new Map([[String.fromCharCode(106,95,53,55,95,101,110,115,117,114,101,100,0),441], [String.fromCharCode(122,95,55,55,95,101,121,99,104,97,105,110,0),576]]);
         analyticP %= Math.max(analyticP, 2);
         successd = new Map([[`${zhuboJ.size}`, successd.size]]);
         zhuboJ = new Map([[`${zhuboJ.size}`, zhuboJ.size]]);
      }
          let frame_v0: Array<any> = [733, 336];
         internet2 = `${internet2.length ^ 3}`;
         frame_v0.push(frame_v0.length - 3);
         share2.push(3);
      let m_animation3 = floatingm >= 7320658.0;
      do {
         floatingm -= parseFloat(`${parseInt(`${floatingm}`) - 2}`);
         if (m_animation3) {
            break;
         }
      } while ((parseFloat(`${share2.length}`) == floatingm) && m_animation3);
      libswresample0 = [1];
      if (stylesO) {
         break;
      }
   } while ((4 == (libavutilL.length * 4) || 4 == (libswresample0.length * libavutilL.length)) && stylesO);
   while (china0 == String.fromCharCode(115,0) || whiteanimationliveV != String.fromCharCode(116,0)) {
      china0 = `${iconrefreshy.size}`;
      break;
   }
   let tickedq = String.fromCharCode(105,52,121,115,55,0) == gestureH;
   do {
      gestureH += `${fcdaebecbcbafcdfceaaeccfeacdb6.length * 3}`;
      if (tickedq) {
         break;
      }
   } while ((!gestureH.includes(`${defaultteamA}`)) && tickedq);
   for (let n = 0; n < 3; n++) {
      filterc /= Math.max((String.fromCharCode(86,0) == gestureH ? (defaultteamA ? 4 : 3) : gestureH.length), 2);
   }
      homeplayerx += (china0 == String.fromCharCode(97,0) ? china0.length : libavutilL.length);
      homeplayerx /= Math.max(3, iconrefreshy.size - 1);
      iconrefreshy.set(moviesG, (moviesG == String.fromCharCode(65,0) ? moviesG.length : libswresample0.length));
       let defaultplayerimg2 = 3.0;
         defaultplayerimg2 *= parseFloat(`${parseInt(`${defaultplayerimg2}`)}`);
         defaultplayerimg2 *= parseFloat(`${parseInt(`${defaultplayerimg2}`)}`);
      while ((5.3 - defaultplayerimg2) >= 5.85) {
         defaultplayerimg2 *= parseFloat(`${1}`);
         break;
      }
      china0 += `${moviesG.length}`;
   if (!Array.from(searchbarT.values()).includes(libavutilL.length)) {
      libavutilL = [moviesG.length % 1];
   }
   for (let w = 0; w < 1; w++) {
      gestureH += `${((defaultteamA ? 1 : 3) * parseInt(`${filterc}`))}`;
   }
   if (2 < fcdaebecbcbafcdfceaaeccfeacdb6.length) {
      fcdaebecbcbafcdfceaaeccfeacdb6 = `${parseInt(`${homeplayerx}`) | 3}`;
   }
      fcdaebecbcbafcdfceaaeccfeacdb6 += `${((defaultteamA ? 1 : 1) * parseInt(`${homeplayerx}`))}`;
   let privilegeR = libswresample0.length >= 8010367;
   do {
      libswresample0 = [(2 >> (Math.min(4, Math.abs((activityX ? 4 : 5)))))];
      if (privilegeR) {
         break;
      }
   } while ((!china0.endsWith(`${libswresample0.length}`)) && privilegeR);
   let predictionarrowp = String.fromCharCode(106,100,122,101,101,0) == topicJ;
   do {
      topicJ = `${(String.fromCharCode(86,0) == topicJ ? iconrefreshy.size : topicJ.length)}`;
      if (predictionarrowp) {
         break;
      }
   } while ((activityX || topicJ.length >= 3) && predictionarrowp);
       let codegenx: Array<any> = [693, 624, 578];
       let whitetickq = 2.0;
       let backiconP = String.fromCharCode(120,95,54,51,95,114,101,100,105,114,101,99,116,111,114,0);
         whitetickq /= Math.max(3, parseFloat(`${codegenx.length ^ 1}`));
         whitetickq += parseFloat(`${codegenx.length >> (Math.min(Math.abs(1), 3))}`);
      for (let u = 0; u < 3; u++) {
         whitetickq += parseFloat(`${3 << (Math.min(2, codegenx.length))}`);
      }
         codegenx = [parseInt(`${whitetickq}`)];
         backiconP = `${3 << (Math.min(3, Math.abs(parseInt(`${whitetickq}`))))}`;
      defaultteamA = !activityX;
   for (let g = 0; g < 3; g++) {
      defaultteamA = china0.length < 87;
   }
   while (!defaultteamA || 4 >= (5 - iconrefreshy.size)) {
       let userO: Map<any, any> = new Map([[String.fromCharCode(110,95,50,50,95,112,97,114,115,101,114,0),805], [String.fromCharCode(97,112,112,101,97,114,101,100,95,56,95,55,48,0),95], [String.fromCharCode(99,95,54,53,95,113,116,115,0),95]]);
       let modelsD: Array<any> = [75, 111];
       let awayiconB = 3;
          let xvodg = String.fromCharCode(115,104,97,114,112,110,101,115,115,95,54,95,56,51,0);
          let whistleorangeg = 5;
         awayiconB -= 3 + awayiconB;
         xvodg += `${whistleorangeg}`;
         whistleorangeg >>= Math.min(2, Math.abs((String.fromCharCode(100,0) == xvodg ? whistleorangeg : xvodg.length)));
       let statsnomoredata5: Map<any, any> = new Map([[String.fromCharCode(115,100,112,95,106,95,56,51,0),String.fromCharCode(98,117,98,98,108,101,115,95,98,95,50,0)], [String.fromCharCode(114,95,50,53,95,110,105,100,111,98,106,0),String.fromCharCode(113,95,52,50,95,109,97,116,99,104,105,110,102,111,0)], [String.fromCharCode(99,111,110,115,116,114,97,105,110,116,95,55,95,57,52,0),String.fromCharCode(100,101,105,110,105,116,95,109,95,54,56,0)]]);
       let webviewr: Map<any, any> = new Map([[String.fromCharCode(101,108,105,103,105,98,108,101,95,105,95,57,57,0),false ], [String.fromCharCode(98,95,50,54,95,112,111,115,101,115,0),false ], [String.fromCharCode(120,95,55,49,95,99,117,114,114,101,110,116,0),false ]]);
          let iconnewsshareF = String.fromCharCode(108,95,53,57,95,111,117,114,0);
          let basketballiconS = String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,121,95,114,95,54,0);
          let awayicony = 5.0;
         modelsD = [iconnewsshareF.length];
         iconnewsshareF = `${parseInt(`${awayicony}`) & basketballiconS.length}`;
         basketballiconS = "1";
         awayicony /= Math.max(1, 3 * basketballiconS.length);
      let shielddoney = userO.size >= 7467598;
      do {
          let vipsportq = true;
          let textlayoutmanagerj = String.fromCharCode(111,95,55,95,108,115,112,112,111,108,121,0);
          let gestureY = true;
         userO.set(`${modelsD.length}`, modelsD.length);
         vipsportq = !gestureY && textlayoutmanagerj.length <= 57;
         textlayoutmanagerj = "3";
         if (shielddoney) {
            break;
         }
      } while (shielddoney && (statsnomoredata5.size <= userO.size));
         webviewr.set(`${awayiconB}`, 3);
         userO = new Map([[`${statsnomoredata5.size}`, modelsD.length]]);
         userO = new Map([[`${statsnomoredata5.size}`, 1]]);
       let more8 = 2.0;
          let layouto = String.fromCharCode(98,95,52,50,95,99,101,114,116,0);
          let shirt_ = 2.0;
          let goalM = String.fromCharCode(113,116,97,98,108,101,95,121,95,51,57,0);
         modelsD = [3 - goalM.length];
         layouto = `${(layouto == String.fromCharCode(114,0) ? layouto.length : parseInt(`${shirt_}`))}`;
         shirt_ *= layouto.length ^ 2;
         goalM = `${2 ^ layouto.length}`;
      iconrefreshy.set(`${awayiconB}`, 3 >> (Math.min(Math.abs(awayiconB), 3)));
      break;
   }
   for (let p = 0; p < 2; p++) {
      activityX = iconrefreshy.get(`${defaultteamA}`) != null;
   }
       let predictionbutton6 = 2.0;
         predictionbutton6 -= parseFloat(`${1}`);
         predictionbutton6 += parseFloat(`${1}`);
         predictionbutton6 -= parseFloat(`${parseInt(`${predictionbutton6}`) / 2}`);
      fcdaebecbcbafcdfceaaeccfeacdb6 += `${3 << (Math.min(3, libavutilL.length))}`;

    setIsLogoutDialogOpen(!isLogoutDialogOpen);
  };

  const toggleVersionDialog = () => {
       let securityQ = 0.0;
    let videoI = true;
    let homeactivel: Array<any> = [397, 64, 848];
    let viewsn = 2;
    let eyeopenl = 2;
    let positionfieldg = 5.0;
    let appsG = 0;
    let fill0 = 3.0;
    let sigmobP = 3.0;
    let comment2: Map<any, any> = new Map([[String.fromCharCode(98,114,101,97,100,99,114,117,109,98,115,95,99,95,55,48,0),478], [String.fromCharCode(97,95,49,56,95,99,104,101,118,114,111,110,0),167]]);
    let text1: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,105,110,102,111,95,98,95,52,50,0),false ], [String.fromCharCode(115,104,105,112,112,105,110,103,95,118,95,55,55,0),true ]]);
    let eventQ = String.fromCharCode(98,95,50,48,95,116,105,99,107,101,114,115,0);
    let referrerR = 1;
       let modulej: Array<any> = [934, 197];
       let neonn: Map<any, any> = new Map([[String.fromCharCode(97,108,97,99,100,115,112,95,111,95,52,55,0),513], [String.fromCharCode(97,117,116,111,102,111,99,117,115,105,110,103,95,122,95,49,56,0),265], [String.fromCharCode(115,121,109,98,111,108,105,99,97,116,105,111,110,95,102,95,54,50,0),990]]);
       let configL: Array<any> = [String.fromCharCode(115,101,116,99,98,95,120,95,54,52,0), String.fromCharCode(114,95,54,51,95,116,101,115,101,100,103,101,0), String.fromCharCode(109,111,100,105,102,121,95,49,95,56,52,0)];
      while (neonn.get(`${configL.length}`) != null) {
         neonn = new Map([[`${neonn.size}`, modulej.length << (Math.min(Math.abs(2), 5))]]);
         break;
      }
      if (2 > (configL.length * neonn.size) && 2 > (neonn.size * configL.length)) {
          let libaneZ = false;
          let pathe = false;
          let checkboxZ = 4.0;
         neonn = new Map([[`${modulej.length}`, modulej.length]]);
         libaneZ = 28.73 >= checkboxZ;
         pathe = !pathe && checkboxZ < 20.32;
      }
         neonn.set(`${configL.length}`, configL.length);
      while ((4 << (Math.min(5, modulej.length))) == 1 || (4 << (Math.min(3, modulej.length))) == 4) {
          let catagoryn = 2;
          let libsgcorew: Map<any, any> = new Map([[String.fromCharCode(104,95,57,48,95,99,108,103,101,116,0),264], [String.fromCharCode(118,97,114,105,97,110,99,101,115,95,57,95,50,53,0),469]]);
          let awayplayerq: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,104,95,114,95,56,55,0),276], [String.fromCharCode(116,95,53,53,95,109,111,100,105,102,121,0),920]]);
          let tempG = String.fromCharCode(99,121,99,108,101,115,95,111,95,56,49,0);
          let options_ = 0.0;
         configL = [modulej.length - neonn.size];
         catagoryn |= 3 * awayplayerq.size;
         libsgcorew = new Map([[`${awayplayerq.size}`, 1]]);
         tempG += `${3 + parseInt(`${options_}`)}`;
         options_ -= parseFloat(`${tempG.length >> (Math.min(1, Math.abs(awayplayerq.size)))}`);
         break;
      }
         neonn = new Map([[`${neonn.size}`, 1 << (Math.min(4, configL.length))]]);
         configL.push(modulej.length);
      if (modulej.length > neonn.size) {
         neonn = new Map([[`${modulej.length}`, configL.length]]);
      }
         configL.push(configL.length / 3);
      while ((modulej.length >> (Math.min(Math.abs(5), 5))) == 1 && (5 >> (Math.min(4, configL.length))) == 3) {
         configL.push(neonn.size);
         break;
      }
      fill0 /= Math.max(parseInt(`${sigmobP}`), 4);
   if (3.79 < (5.95 + sigmobP)) {
      sigmobP *= parseInt(`${positionfieldg}`) << (Math.min(2, Math.abs(1)));
   }
      sigmobP /= Math.max(3, 1);
       let subbasketballplayerb = 5.0;
       let typesW = String.fromCharCode(98,114,97,99,101,95,102,95,50,50,0);
         subbasketballplayerb *= parseFloat(`${typesW.length}`);
      for (let n = 0; n < 2; n++) {
         subbasketballplayerb *= parseFloat(`${1}`);
      }
      for (let d = 0; d < 1; d++) {
          let ewardedb = 0.0;
          let libreactnativeblobC = 5;
         subbasketballplayerb *= parseFloat(`${libreactnativeblobC}`);
         ewardedb -= parseInt(`${ewardedb}`) ^ parseInt(`${ewardedb}`);
         libreactnativeblobC ^= 1;
      }
      let overlayi = 5404060.0 <= subbasketballplayerb;
      do {
         subbasketballplayerb -= parseFloat(`${1}`);
         if (overlayi) {
            break;
         }
      } while ((4.72 == (2.53 - subbasketballplayerb)) && overlayi);
      if ((parseFloat(`${typesW.length}`) / (Math.max(1, subbasketballplayerb))) >= 4.83 && 5 >= (parseInt(`${subbasketballplayerb}`) / (Math.max(2, 8)))) {
          let iconeditQ = false;
         subbasketballplayerb += parseFloat(`${1 & typesW.length}`);
      }
      for (let y = 0; y < 3; y++) {
          let latn8: Array<any> = [585, 291];
          let runtimeH = String.fromCharCode(121,95,54,50,95,105,109,112,108,105,99,105,116,0);
          let customa = true;
         subbasketballplayerb -= parseFloat(`${latn8.length}`);
         latn8 = [3];
         runtimeH = `${1 << (Math.min(3, runtimeH.length))}`;
      }
      appsG ^= 2 * parseInt(`${fill0}`);
   let signinupj = comment2.size <= 7282732;
   do {
      comment2.set(`${securityQ}`, parseInt(`${securityQ}`) >> (Math.min(3, Math.abs(3))));
      if (signinupj) {
         break;
      }
   } while ((!Array.from(comment2.values()).includes(securityQ)) && signinupj);
   if (viewsn == 3) {
      viewsn /= Math.max(1, 2 & eyeopenl);
   }
   let telegram2 = 7923874.0 >= securityQ;
   do {
      securityQ *= parseFloat(`${1}`);
      if (telegram2) {
         break;
      }
   } while (telegram2 && (3.40 < (positionfieldg - securityQ) && 1.100 < (3.40 - positionfieldg)));
      viewsn |= text1.size;
   for (let j = 0; j < 1; j++) {
       let reddownarrowG = 5.0;
       let basketballhometeam_ = 3;
      while ((basketballhometeam_ * parseInt(`${reddownarrowG}`)) == 2 || 4 == (2 >> (Math.min(3, Math.abs(basketballhometeam_))))) {
          let libjsiw = String.fromCharCode(117,95,52,57,95,115,101,116,114,97,110,103,101,0);
          let forwardB: Array<any> = [String.fromCharCode(110,116,101,114,102,97,99,101,95,97,95,50,52,0), String.fromCharCode(114,101,97,114,114,97,110,103,101,95,115,95,55,51,0)];
          let dialogC: Map<any, any> = new Map([[String.fromCharCode(98,108,99,107,95,56,95,50,52,0),545], [String.fromCharCode(115,95,52,57,95,101,115,112,111,110,100,101,114,0),364], [String.fromCharCode(102,95,56,95,105,110,115,101,114,116,0),587]]);
          let readO: Map<any, any> = new Map([[String.fromCharCode(111,95,49,54,95,97,99,116,105,118,97,116,101,100,0),108], [String.fromCharCode(118,95,53,53,95,99,97,112,116,117,114,101,0),706]]);
          let roundd = String.fromCharCode(110,97,118,105,103,97,116,105,110,103,95,50,95,53,57,0);
         basketballhometeam_ &= parseInt(`${reddownarrowG}`) * 3;
         libjsiw = `${forwardB.length}`;
         forwardB = [(String.fromCharCode(107,0) == roundd ? readO.size : roundd.length)];
         dialogC = new Map([[`${dialogC.size}`, dialogC.size]]);
         readO = new Map([[`${dialogC.size}`, dialogC.size]]);
         break;
      }
       let unfillG = 2.0;
       let yellowscoreball7 = 0.0;
       let whistleY = 3;
      let orangeuparrow6 = basketballhometeam_ >= 7712165;
      do {
         basketballhometeam_ <<= Math.min(Math.abs(1 | parseInt(`${reddownarrowG}`)), 4);
         if (orangeuparrow6) {
            break;
         }
      } while (((parseFloat(`${basketballhometeam_}`) / (Math.max(unfillG, 8))) == 4.95 && 1 == (basketballhometeam_ << (Math.min(Math.abs(3), 1)))) && orangeuparrow6);
      if (4.35 >= (yellowscoreball7 / 5.14)) {
         yellowscoreball7 /= Math.max(parseFloat(`${parseInt(`${reddownarrowG}`) << (Math.min(3, Math.abs(whistleY)))}`), 4);
      }
      while (unfillG <= 3.65) {
         reddownarrowG += parseFloat(`${2}`);
         break;
      }
      positionfieldg /= Math.max(homeactivel.length, 2);
   }
   for (let h = 0; h < 1; h++) {
       let liveb = String.fromCharCode(102,95,56,55,95,115,104,111,119,115,0);
       let hoverV = String.fromCharCode(104,111,116,95,117,95,52,54,0);
       let defaultteam9: Array<any> = [262, 468];
       let playlistA = String.fromCharCode(117,95,55,48,95,115,121,110,99,104,114,111,110,105,115,101,100,0);
      while (playlistA.length < defaultteam9.length) {
          let videovarT = true;
          let iconsetting1 = 2.0;
         playlistA = `${2 >> (Math.min(2, defaultteam9.length))}`;
         videovarT = iconsetting1 >= 94.32;
         iconsetting1 += (parseInt(`${iconsetting1}`) >> (Math.min(1, Math.abs((videovarT ? 5 : 3)))));
         break;
      }
      let whitetickl = 7211092 <= playlistA.length;
      do {
         playlistA = `${3 & playlistA.length}`;
         if (whitetickl) {
            break;
         }
      } while ((liveb == String.fromCharCode(108,0)) && whitetickl);
       let iconplayF = 0.0;
       let routeri = 1.0;
         playlistA += `${parseInt(`${routeri}`) % (Math.max(parseInt(`${iconplayF}`), 1))}`;
      let appsD = 6922188.0 >= iconplayF;
      do {
         iconplayF -= (String.fromCharCode(74,0) == liveb ? parseInt(`${iconplayF}`) : liveb.length);
         if (appsD) {
            break;
         }
      } while ((3.84 > iconplayF) && appsD);
       let oinit_fa: Array<any> = [415, 287, 406];
       let iconarrowrightorangez: Array<any> = [55, 18, 362];
          let teamdetailsbgP = String.fromCharCode(118,95,51,55,95,101,120,112,101,114,116,0);
         iconplayF *= 3 + teamdetailsbgP.length;
      let yellowscoreball1 = playlistA.length >= 9431758;
      do {
         playlistA += `${defaultteam9.length >> (Math.min(oinit_fa.length, 2))}`;
         if (yellowscoreball1) {
            break;
         }
      } while (yellowscoreball1 && (!playlistA.includes(`${iconplayF}`)));
      viewsn -= eyeopenl - 2;
      hoverV = `${hoverV.length}`;
   }
       let libavutilp: Map<any, any> = new Map([[String.fromCharCode(113,95,53,57,95,112,114,111,98,108,101,109,115,0),String.fromCharCode(105,115,115,117,101,100,95,54,95,55,48,0)], [String.fromCharCode(100,105,115,112,108,97,121,95,102,95,54,56,0),String.fromCharCode(121,95,54,54,95,97,121,117,118,108,101,0)]]);
         libavutilp = new Map([[`${libavutilp.size}`, libavutilp.size]]);
      for (let r = 0; r < 2; r++) {
         libavutilp = new Map([[`${libavutilp.size}`, libavutilp.size | 1]]);
      }
       let modityh = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,95,101,95,48,0);
       let yellowcirclebgW = String.fromCharCode(105,110,118,105,116,101,114,95,54,95,55,48,0);
      sigmobP *= parseInt(`${sigmobP}`) & comment2.size;
       let defaultlogoW = String.fromCharCode(99,95,55,55,95,121,117,118,112,116,111,121,117,121,0);
       let vipsporth = String.fromCharCode(115,116,114,105,100,101,95,119,95,50,50,0);
       let jingdongr: Map<any, any> = new Map([[String.fromCharCode(109,95,56,95,99,111,109,112,97,115,115,0),297], [String.fromCharCode(110,97,118,105,103,97,116,101,100,95,116,95,52,54,0),356]]);
      let detailsS = jingdongr.size >= 5207171;
      do {
         jingdongr = new Map([[`${jingdongr.size}`, vipsporth.length]]);
         if (detailsS) {
            break;
         }
      } while (detailsS && (defaultlogoW.length >= 1));
       let strZ = String.fromCharCode(121,95,54,50,0);
       let photoY = String.fromCharCode(97,114,103,118,95,105,95,52,50,0);
      let window_5h8 = String.fromCharCode(48,99,53,113,109,121,114,0) == strZ;
      do {
         strZ += `${(strZ == String.fromCharCode(73,0) ? strZ.length : jingdongr.size)}`;
         if (window_5h8) {
            break;
         }
      } while (window_5h8 && (3 >= strZ.length || 3 >= photoY.length));
          let football8 = false;
          let membershipX = true;
          let libreact6 = 4.0;
         jingdongr = new Map([[`${libreact6}`, parseInt(`${libreact6}`)]]);
         football8 = membershipX;
       let combineC = String.fromCharCode(102,97,108,108,111,102,102,95,101,95,49,48,0);
       let dataS = String.fromCharCode(101,110,104,97,110,99,101,95,106,95,57,0);
          let chatX = String.fromCharCode(118,95,50,95,115,105,109,112,108,101,116,105,109,101,111,117,116,0);
          let iconsharev = 2.0;
          let anytime4 = String.fromCharCode(97,95,53,49,95,122,101,114,111,109,118,0);
         vipsporth = `${defaultlogoW.length >> (Math.min(2, vipsporth.length))}`;
         chatX = `${anytime4.length}`;
         iconsharev -= parseFloat(`${parseInt(`${iconsharev}`) | 2}`);
         anytime4 += `${chatX.length + anytime4.length}`;
          let nalytics3: Array<any> = [277, 494, 352];
          let iconviewergifU = String.fromCharCode(110,95,57,54,95,104,109,104,100,0);
          let largez: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,116,114,97,99,101,95,102,95,55,52,0),String.fromCharCode(98,98,117,102,95,103,95,52,52,0)], [String.fromCharCode(115,101,103,102,101,97,116,117,114,101,115,95,113,95,51,48,0),String.fromCharCode(113,112,101,103,95,113,95,50,55,0)]]);
         combineC = `${vipsporth.length}`;
         nalytics3.push(nalytics3.length | 3);
         iconviewergifU = "1";
         largez = new Map([[`${largez.size}`, (iconviewergifU == String.fromCharCode(109,0) ? largez.size : iconviewergifU.length)]]);
         vipsporth = `${strZ.length}`;
      while (!defaultlogoW.includes(photoY)) {
         photoY += `${defaultlogoW.length / (Math.max(1, 4))}`;
         break;
      }
      eyeopenl ^= viewsn << (Math.min(Math.abs(3), 3));
   if ((4.95 - securityQ) > 3.15 && securityQ > 4.95) {
      videoI = !videoI || 34.28 > positionfieldg;
   }
   for (let j = 0; j < 3; j++) {
      homeactivel = [comment2.size * 3];
   }
      videoI = (text1.size / (Math.max(eventQ.length, 6))) > 7;
   if ((homeactivel.length * viewsn) <= 4 || 4 <= (viewsn * homeactivel.length)) {
       let manifest0 = false;
       let orangeclock8 = String.fromCharCode(121,95,53,54,95,100,117,109,109,121,0);
       let rewardvideoD = 4;
      if ((rewardvideoD + orangeclock8.length) == 4) {
         rewardvideoD <<= Math.min(Math.abs(1), 2);
      }
          let reward8 = String.fromCharCode(104,95,53,49,95,115,105,109,117,108,97,116,101,100,0);
         manifest0 = orangeclock8 == String.fromCharCode(108,0);
         reward8 += `${reward8.length}`;
       let roote: Array<any> = [965, 203];
       let termsC: Array<any> = [392, 244, 414];
         orangeclock8 += `${((manifest0 ? 4 : 4) * rewardvideoD)}`;
      for (let v = 0; v < 2; v++) {
         orangeclock8 += "3";
      }
      let agreement8 = orangeclock8 == String.fromCharCode(102,105,122,54,118,120,55,115,101,106,0);
      do {
          let armvaV = String.fromCharCode(101,114,114,115,116,114,95,54,95,50,50,0);
          let fullscreenminM: Map<any, any> = new Map([[String.fromCharCode(116,95,50,56,95,108,111,111,112,98,114,101,97,107,0),336], [String.fromCharCode(110,95,54,54,95,97,99,113,117,105,114,101,0),243]]);
          let imagemanagery = String.fromCharCode(103,95,49,49,95,104,121,115,99,97,108,101,0);
          let membership_ = 3.0;
          let sharewhiteb = String.fromCharCode(108,105,98,116,103,118,111,105,112,95,105,95,49,56,0);
         orangeclock8 = `${sharewhiteb.length << (Math.min(Math.abs(1), 2))}`;
         armvaV += `${parseInt(`${membership_}`)}`;
         fullscreenminM.set(`${membership_}`, fullscreenminM.size);
         imagemanagery += "3";
         sharewhiteb += `${fullscreenminM.size | 2}`;
         if (agreement8) {
            break;
         }
      } while (agreement8 && ((2 - orangeclock8.length) > 5 && 2 > (orangeclock8.length - roote.length)));
          let livel = String.fromCharCode(104,117,102,102,95,48,95,54,51,0);
          let bodanH: Map<any, any> = new Map([[String.fromCharCode(104,109,97,99,95,98,95,52,50,0),35], [String.fromCharCode(121,95,56,95,102,105,110,97,108,108,121,0),622]]);
         roote = [orangeclock8.length];
         livel = "3";
         bodanH.set(livel, 1 - livel.length);
      let iconQ = roote.length <= 6614130;
      do {
         roote.push((roote.length << (Math.min(2, Math.abs((manifest0 ? 5 : 2))))));
         if (iconQ) {
            break;
         }
      } while (iconQ && (!manifest0));
          let rnewsK = String.fromCharCode(99,111,101,102,102,115,112,95,57,95,54,49,0);
          let settingE: Map<any, any> = new Map([[String.fromCharCode(117,116,102,95,119,95,53,52,0),898], [String.fromCharCode(110,105,115,116,112,95,97,95,50,54,0),562], [String.fromCharCode(107,95,50,57,95,102,114,97,109,101,115,121,110,99,0),246]]);
         roote = [(2 >> (Math.min(3, Math.abs((manifest0 ? 3 : 4)))))];
         rnewsK += `${rnewsK.length * 2}`;
         settingE = new Map([[`${settingE.size}`, settingE.size & rnewsK.length]]);
      homeactivel.push(((videoI ? 4 : 3) * text1.size));
   }
       let stationsi: Array<any> = [620, 905];
      for (let a = 0; a < 3; a++) {
         stationsi.push(stationsi.length / 3);
      }
      let form2 = 7055262 <= stationsi.length;
      do {
         stationsi = [stationsi.length];
         if (form2) {
            break;
         }
      } while (form2 && ((4 << (Math.min(5, stationsi.length))) == 1));
          let skipo = true;
          let backwarda = 0.0;
         stationsi.push(stationsi.length | 3);
         skipo = backwarda <= 88.50;
         backwarda += ((skipo ? 3 : 4) & parseInt(`${backwarda}`));
      appsG -= viewsn;
       let short_83m = true;
         short_83m = !short_83m;
         short_83m = short_83m && short_83m;
       let showmoreK = 1.0;
      eyeopenl /= Math.max(1, parseInt(`${sigmobP}`));
      appsG &= 2;
   for (let i = 0; i < 1; i++) {
      sigmobP /= Math.max(3, 2 / (Math.max(appsG, 3)));
   }
   for (let t = 0; t < 3; t++) {
      eventQ = `${(eyeopenl << (Math.min(4, Math.abs((videoI ? 2 : 1)))))}`;
   }
   while (eventQ.length < 1) {
      comment2 = new Map([[`${text1.size}`, text1.size]]);
      break;
   }
      sigmobP *= ((videoI ? 2 : 4) << (Math.min(Math.abs(1), 5)));
   if (2 > (eyeopenl | appsG)) {
      eyeopenl %= Math.max(4, 2);
   }
      positionfieldg += eventQ.length;
      videoI = 14 <= homeactivel.length && 14 <= text1.size;

    setIsVersionDialogOpen(!isVersionDialogOpen);
  };
  const toggleClearDialog = () => {
       let largesoundX: Array<any> = [640, 384, 250];
    let libreactperfloggerjniG = true;
    let activityI = 3;
    let collectionQ = String.fromCharCode(109,95,57,57,95,109,97,106,0);
    let icondownimg5 = String.fromCharCode(105,110,118,97,108,105,100,95,54,95,54,55,0);
    let chinao = 0;
    let package_yoo = false;
    let videocommon_ = 4.0;
    let whistleorangen = String.fromCharCode(102,95,51,54,95,97,110,105,109,97,116,101,0);
    let activityi = String.fromCharCode(97,99,116,105,118,105,116,105,101,115,95,122,95,55,55,0);
    let pushw = 1;
    let read6 = String.fromCharCode(115,107,105,112,95,115,95,56,48,0);
    let arrowselectdownE = String.fromCharCode(102,95,53,55,95,98,111,111,115,116,101,100,0);
    let iconsubssuccessT = 1;
    let coded = 4.0;
      activityi += `${(String.fromCharCode(117,0) == activityi ? icondownimg5.length : activityi.length)}`;
   let placeholderZ = 8842878 <= activityi.length;
   do {
       let fillN = String.fromCharCode(114,99,118,100,95,122,95,51,56,0);
      while (fillN != String.fromCharCode(106,0)) {
         fillN += `${(String.fromCharCode(107,0) == fillN ? fillN.length : fillN.length)}`;
         break;
      }
         fillN = `${fillN.length}`;
      while (fillN.length == 4 && fillN.length == 4) {
          let eactY = true;
          let unimplementedviewP = 0;
          let runtimeschedulerv = String.fromCharCode(100,105,118,105,100,101,100,95,49,95,52,57,0);
          let macauw: Array<any> = [894, 795];
          let codegenp = 2.0;
         fillN += "2";
         eactY = runtimeschedulerv.includes(`${unimplementedviewP}`);
         unimplementedviewP %= Math.max((unimplementedviewP << (Math.min(5, Math.abs((eactY ? 5 : 2))))), 3);
         runtimeschedulerv += `${runtimeschedulerv.length}`;
         macauw = [1];
         codegenp += macauw.length >> (Math.min(Math.abs(2), 5));
         break;
      }
      activityi += "1";
      if (placeholderZ) {
         break;
      }
   } while (((2 ^ activityi.length) < 1 && (activityi.length ^ 2) < 3) && placeholderZ);
      package_yoo = 91 >= activityI;
   let bannerb = read6.length <= 8474145;
   do {
       let paginationw = String.fromCharCode(116,97,107,101,95,56,95,56,49,0);
      while (paginationw.startsWith(`${paginationw.length}`)) {
         paginationw += "1";
         break;
      }
      let sinat = paginationw.length <= 6125784;
      do {
          let bodanY: Array<any> = [761, 149, 256];
          let questiconp = 2.0;
          let match3: Array<any> = [827, 976];
          let casti = 5;
         paginationw = `${casti}`;
         bodanY = [3];
         questiconp += match3.length - bodanY.length;
         match3 = [parseInt(`${questiconp}`) ^ bodanY.length];
         casti /= Math.max(parseInt(`${questiconp}`), 3);
         if (sinat) {
            break;
         }
      } while (sinat && (!paginationw.includes(paginationw)));
      let profileframez = paginationw == String.fromCharCode(117,55,111,118,52,97,0);
      do {
         paginationw = `${paginationw.length % (Math.max(paginationw.length, 6))}`;
         if (profileframez) {
            break;
         }
      } while ((paginationw != String.fromCharCode(111,0) && 5 == paginationw.length) && profileframez);
      read6 += `${(3 << (Math.min(1, Math.abs((package_yoo ? 2 : 5)))))}`;
      if (bannerb) {
         break;
      }
   } while (bannerb && (read6.length == 1));
   if ((1 & largesoundX.length) > 1) {
      largesoundX = [chinao];
   }
       let libzeusk = String.fromCharCode(105,95,49,48,48,95,118,102,114,101,101,0);
       let formq = 1;
         formq &= formq;
      while (5 >= (5 >> (Math.min(2, Math.abs(formq))))) {
         libzeusk = `${libzeusk.length << (Math.min(1, Math.abs(formq)))}`;
         break;
      }
      let buildA = libzeusk.length >= 7352855;
      do {
         libzeusk = `${libzeusk.length}`;
         if (buildA) {
            break;
         }
      } while (buildA && ((libzeusk.length + formq) <= 5));
          let libturbomodulejsijniz = String.fromCharCode(118,95,52,51,95,115,99,101,101,110,0);
         formq /= Math.max(libzeusk.length, 2);
         libturbomodulejsijniz += `${libturbomodulejsijniz.length >> (Math.min(Math.abs(1), 1))}`;
      while (1 > (libzeusk.length << (Math.min(Math.abs(5), 1)))) {
         libzeusk += `${formq}`;
         break;
      }
         formq -= (libzeusk == String.fromCharCode(90,0) ? libzeusk.length : formq);
      activityi += `${libzeusk.length - 3}`;
   for (let k = 0; k < 2; k++) {
      icondownimg5 = `${2 & read6.length}`;
   }
       let libfabricjniT = true;
       let tempnodatagifC: Map<any, any> = new Map([[String.fromCharCode(110,95,56,50,95,115,116,116,115,0),437], [String.fromCharCode(110,101,105,103,104,98,111,114,115,95,104,95,56,54,0),280]]);
       let edit3: Map<any, any> = new Map([[String.fromCharCode(106,95,53,55,95,110,117,108,108,115,0),true ], [String.fromCharCode(100,105,102,102,120,95,121,95,52,54,0),true ]]);
      if (tempnodatagifC.size < 5) {
          let graphicso = 5.0;
          let rewardF: Map<any, any> = new Map([[String.fromCharCode(115,119,105,112,101,95,51,95,56,52,0),490], [String.fromCharCode(116,119,111,115,95,108,95,56,51,0),154], [String.fromCharCode(98,95,53,52,95,102,111,114,103,101,116,0),816]]);
         libfabricjniT = null == edit3.get(`${libfabricjniT}`);
         graphicso *= parseFloat(`${parseInt(`${graphicso}`) ^ rewardF.size}`);
         rewardF = new Map([[`${rewardF.size}`, rewardF.size ^ 2]]);
      }
         tempnodatagifC = new Map([[`${edit3.size}`, ((libfabricjniT ? 5 : 5) / 1)]]);
      activityI |= activityi.length;
      activityI &= ((libreactperfloggerjniG ? 2 : 3));
      package_yoo = 49 < chinao;
   while (collectionQ.startsWith(arrowselectdownE)) {
      collectionQ += `${(whistleorangen.length ^ (package_yoo ? 3 : 3))}`;
      break;
   }
       let shootP = String.fromCharCode(100,105,115,99,111,118,101,114,95,55,95,49,49,0);
       let fastforwardP = String.fromCharCode(111,95,52,95,109,111,118,101,110,99,0);
       let condensedG = String.fromCharCode(97,118,117,116,105,108,95,107,95,49,51,0);
          let spinnerJ = String.fromCharCode(110,97,116,105,111,110,97,108,95,104,95,52,51,0);
          let giftP = String.fromCharCode(119,95,50,50,95,98,99,100,117,105,110,116,0);
         fastforwardP += `${spinnerJ.length & condensedG.length}`;
         spinnerJ += `${giftP.length ^ giftP.length}`;
          let anythinkd: Map<any, any> = new Map([[String.fromCharCode(102,97,114,95,118,95,56,50,0),853], [String.fromCharCode(114,97,116,105,111,115,95,114,95,56,52,0),448]]);
          let backiconmaskE = 2.0;
          let oranges: Map<any, any> = new Map([[String.fromCharCode(116,111,107,101,110,105,122,101,114,95,53,95,56,49,0),120], [String.fromCharCode(100,95,52,49,95,105,110,115,116,97,108,108,97,116,105,111,110,115,0),523]]);
         fastforwardP = `${fastforwardP.length}`;
         anythinkd = new Map([[`${anythinkd.size}`, anythinkd.size]]);
         backiconmaskE *= oranges.size + parseInt(`${backiconmaskE}`);
         oranges = new Map([[`${oranges.size}`, 3]]);
         shootP += `${condensedG.length}`;
      let mbbannere = String.fromCharCode(99,113,54,109,53,116,101,104,0) == shootP;
      do {
         shootP = "2";
         if (mbbannere) {
            break;
         }
      } while (mbbannere && (fastforwardP == String.fromCharCode(82,0)));
      while (!fastforwardP.endsWith(shootP)) {
         shootP += `${(String.fromCharCode(57,0) == fastforwardP ? condensedG.length : fastforwardP.length)}`;
         break;
      }
          let subtextO = 4.0;
         shootP = "3";
         subtextO += parseFloat(`${2}`);
         shootP = `${condensedG.length & 1}`;
         condensedG = `${(String.fromCharCode(79,0) == condensedG ? condensedG.length : fastforwardP.length)}`;
          let loadingspinnerz: Array<any> = [891, 847, 25];
          let greyarrowupC = String.fromCharCode(98,95,57,53,95,109,97,112,115,116,114,105,110,103,0);
         fastforwardP = `${fastforwardP.length << (Math.min(4, loadingspinnerz.length))}`;
         loadingspinnerz.push(greyarrowupC.length);
         greyarrowupC += `${(String.fromCharCode(85,0) == greyarrowupC ? greyarrowupC.length : greyarrowupC.length)}`;
      libreactperfloggerjniG = (pushw % (Math.max(largesoundX.length, 8))) == 17;
   if (libreactperfloggerjniG) {
       let analyticL = 4.0;
         analyticL /= Math.max(2, 2 * parseInt(`${analyticL}`));
         analyticL -= parseInt(`${analyticL}`) / 2;
      let unselectedI = analyticL >= 5763326.0;
      do {
          let skip4 = String.fromCharCode(104,105,103,104,95,111,95,52,0);
          let agreementm = String.fromCharCode(116,111,103,103,108,101,95,122,95,50,54,0);
          let libjsinspector_ = false;
         analyticL *= parseInt(`${analyticL}`);
         skip4 += `${1 >> (Math.min(4, agreementm.length))}`;
         agreementm = `${agreementm.length}`;
         if (unselectedI) {
            break;
         }
      } while (unselectedI && (3.39 == (3.62 * analyticL) && (analyticL * 3.62) == 2.61));
      libreactperfloggerjniG = pushw <= 81 && libreactperfloggerjniG;
   }
   let basketballtrophy6 = largesoundX.length <= 9214433;
   do {
       let acceptedI = String.fromCharCode(112,102,105,108,116,101,114,95,104,95,53,0);
       let humidityc: Array<any> = [357, 270];
       let orangeclockW: Array<any> = [745, 560, 971];
         orangeclockW.push(orangeclockW.length);
         orangeclockW.push(2);
      largesoundX.push(1 | read6.length);
      acceptedI = `${acceptedI.length}`;
      if (basketballtrophy6) {
         break;
      }
   } while (basketballtrophy6 && (2 < (3 | largesoundX.length) && largesoundX.length < 3));
      collectionQ = "2";
   if (activityI == collectionQ.length) {
       let binddatas0: Map<any, any> = new Map([[String.fromCharCode(107,95,57,52,95,112,114,101,102,97,99,101,0),820], [String.fromCharCode(120,95,54,95,115,116,97,116,105,111,110,97,114,105,116,121,0),133]]);
       let chinasame3 = 4;
         binddatas0.set(`${chinasame3}`, 1);
         binddatas0.set(`${chinasame3}`, binddatas0.size);
      let xvods = 5550927 <= chinasame3;
      do {
         chinasame3 *= binddatas0.size % 2;
         if (xvods) {
            break;
         }
      } while (xvods && (Array.from(binddatas0.values()).includes(chinasame3)));
          let libavdevice6 = 4.0;
         chinasame3 += chinasame3;
         libavdevice6 -= parseFloat(`${parseInt(`${libavdevice6}`) << (Math.min(5, Math.abs(1)))}`);
      if ((chinasame3 / (Math.max(binddatas0.size, 2))) <= 5 && 5 <= (chinasame3 / (Math.max(binddatas0.size, 8)))) {
          let showlessr = String.fromCharCode(104,95,56,53,95,116,111,97,115,116,115,0);
         chinasame3 ^= 2 ^ chinasame3;
         showlessr += `${showlessr.length + 1}`;
      }
          let downg: Map<any, any> = new Map([[String.fromCharCode(99,104,105,110,95,113,95,52,53,0),true ], [String.fromCharCode(114,101,102,101,114,101,110,99,101,100,95,100,95,53,51,0),true ], [String.fromCharCode(117,95,50,53,95,114,115,116,114,105,112,0),false ]]);
          let issubI = String.fromCharCode(114,101,102,105,100,95,103,95,52,57,0);
          let libflipper5 = String.fromCharCode(115,121,110,116,104,101,115,105,122,101,100,95,118,95,54,53,0);
         binddatas0 = new Map([[`${binddatas0.size}`, libflipper5.length - binddatas0.size]]);
         downg.set(`${issubI}`, 1);
         issubI = `${issubI.length}`;
         libflipper5 = `${issubI.length}`;
      activityI &= activityI;
   }
   let bootsplashx = String.fromCharCode(51,52,110,57,112,50,0) == arrowselectdownE;
   do {
      arrowselectdownE += "2";
      if (bootsplashx) {
         break;
      }
   } while ((chinao > arrowselectdownE.length) && bootsplashx);
   while (2 > (largesoundX.length % (Math.max(whistleorangen.length, 10))) || (whistleorangen.length % 2) > 1) {
      largesoundX = [((package_yoo ? 1 : 5) ^ pushw)];
      break;
   }
   if (whistleorangen.includes(`${collectionQ.length}`)) {
       let yellowtoredI = String.fromCharCode(110,95,55,95,115,104,111,119,0);
       let leaguedetailsbgJ = String.fromCharCode(97,112,112,114,111,118,101,114,95,118,95,54,50,0);
      while (yellowtoredI.length < 3) {
         leaguedetailsbgJ = `${leaguedetailsbgJ.length}`;
         break;
      }
         yellowtoredI = `${yellowtoredI.length ^ 3}`;
          let nextm: Array<any> = [412, 885];
         leaguedetailsbgJ = `${leaguedetailsbgJ.length * 1}`;
         nextm = [2];
         leaguedetailsbgJ = `${leaguedetailsbgJ.length}`;
         leaguedetailsbgJ = `${(String.fromCharCode(107,0) == yellowtoredI ? leaguedetailsbgJ.length : yellowtoredI.length)}`;
      if (leaguedetailsbgJ.endsWith(`${yellowtoredI.length}`)) {
         leaguedetailsbgJ = `${yellowtoredI.length}`;
      }
      collectionQ = `${collectionQ.length & read6.length}`;
   }
   if (4 < (pushw + 2) || 1 < (pushw + 2)) {
       let dycreatorM = String.fromCharCode(98,95,51,53,95,114,116,99,112,0);
       let sheet2 = 2;
       let colorsn: Array<any> = [92, 257, 301];
         colorsn = [dycreatorM.length];
          let handler6 = true;
          let armvaI: Array<any> = [471, 84];
         dycreatorM = `${sheet2}`;
         handler6 = ((armvaI.length & (!handler6 ? 48 : armvaI.length)) == 48);
      while ((dycreatorM.length ^ 3) == 4 && 3 == (sheet2 ^ dycreatorM.length)) {
         sheet2 += dycreatorM.length & colorsn.length;
         break;
      }
         colorsn.push(2 * sheet2);
      let upgradeL = colorsn.length >= 5305940;
      do {
          let arrowselectdownW = 4.0;
          let reminderV = 3.0;
          let forwardV = 2.0;
          let sellmathbackgroundI = String.fromCharCode(101,99,111,109,112,114,101,115,115,111,114,95,101,95,52,57,0);
         colorsn = [2];
         arrowselectdownW *= parseFloat(`${sellmathbackgroundI.length & 2}`);
         reminderV -= parseFloat(`${1}`);
         forwardV /= Math.max(4, parseInt(`${arrowselectdownW}`));
         sellmathbackgroundI = "3";
         if (upgradeL) {
            break;
         }
      } while (upgradeL && (!dycreatorM.endsWith(`${colorsn.length}`)));
      while (3 <= (5 - colorsn.length) || 2 <= (5 - sheet2)) {
         sheet2 ^= (String.fromCharCode(97,0) == dycreatorM ? sheet2 : dycreatorM.length);
         break;
      }
       let customP: Array<any> = [574, 548];
       let whistleH: Array<any> = [395, 661];
         colorsn = [(dycreatorM == String.fromCharCode(115,0) ? dycreatorM.length : colorsn.length)];
          let completeh: Map<any, any> = new Map([[String.fromCharCode(118,97,114,105,97,110,99,101,95,99,95,49,52,0),true ], [String.fromCharCode(97,97,117,100,105,111,95,54,95,54,52,0),true ]]);
          let leakcheckerR = String.fromCharCode(115,95,48,95,112,105,99,116,117,114,101,0);
         dycreatorM = `${dycreatorM.length}`;
         completeh = new Map([[`${completeh.size}`, leakcheckerR.length]]);
         leakcheckerR = `${leakcheckerR.length * 2}`;
      arrowselectdownE += `${whistleorangen.length}`;
   }
       let overE = 3.0;
       let nterstitialc: Map<any, any> = new Map([[String.fromCharCode(122,95,53,52,95,97,118,97,116,97,114,0),243], [String.fromCharCode(99,111,108,108,97,112,115,105,110,103,95,54,95,49,56,0),864], [String.fromCharCode(99,95,56,54,95,97,99,111,110,102,105,103,0),570]]);
         overE /= Math.max(5, parseInt(`${overE}`) << (Math.min(Math.abs(nterstitialc.size), 1)));
      for (let g = 0; g < 1; g++) {
         overE /= Math.max(nterstitialc.size << (Math.min(1, Math.abs(parseInt(`${overE}`)))), 3);
      }
      while (nterstitialc.get(`${overE}`) == null) {
          let launcherX: Map<any, any> = new Map([[String.fromCharCode(121,95,52,57,95,114,101,103,105,115,116,101,114,115,0),160], [String.fromCharCode(108,95,49,48,95,118,101,110,117,101,0),870]]);
         overE -= 1;
         launcherX = new Map([[`${launcherX.size}`, 3]]);
         break;
      }
      let anythinkI = 9693051 <= nterstitialc.size;
      do {
         nterstitialc = new Map([[`${nterstitialc.size}`, nterstitialc.size]]);
         if (anythinkI) {
            break;
         }
      } while (anythinkI && (2.13 > (5.20 * overE) || (nterstitialc.size % (Math.max(5, 7))) > 5));
       let shrinkv = false;
       let arrowselectdownV = false;
      if (5.89 > (4.35 - overE) || !shrinkv) {
         shrinkv = nterstitialc.get(`${overE}`) != null;
      }
      activityI <<= Math.min(1, Math.abs((String.fromCharCode(95,0) == collectionQ ? parseInt(`${videocommon_}`) : collectionQ.length)));
       let predictionbannersharedv = String.fromCharCode(105,110,111,117,116,115,95,99,95,55,51,0);
      let sellH = predictionbannersharedv.length >= 5879186;
      do {
         predictionbannersharedv += `${predictionbannersharedv.length * predictionbannersharedv.length}`;
         if (sellH) {
            break;
         }
      } while ((predictionbannersharedv.length > predictionbannersharedv.length) && sellH);
      for (let o = 0; o < 2; o++) {
          let backwardF = 0.0;
          let bodanf = String.fromCharCode(116,95,51,95,118,101,110,100,111,114,0);
         predictionbannersharedv += `${bodanf.length}`;
         backwardF -= parseInt(`${backwardF}`);
         bodanf += `${2 & parseInt(`${backwardF}`)}`;
      }
         predictionbannersharedv += `${predictionbannersharedv.length << (Math.min(Math.abs(1), 1))}`;
      videocommon_ /= Math.max(3, parseFloat(`${chinao % (Math.max(8, parseInt(`${videocommon_}`)))}`));
   if (3.61 < (videocommon_ + 4.71)) {
      collectionQ = `${icondownimg5.length}`;
   }
       let download5 = String.fromCharCode(116,105,109,101,118,97,108,95,113,95,55,0);
       let hejiT = String.fromCharCode(117,95,51,95,102,108,111,97,116,105,110,103,0);
       let subbasketballplayerV = 0;
      for (let r = 0; r < 2; r++) {
         download5 = `${hejiT.length}`;
      }
      for (let q = 0; q < 1; q++) {
         download5 = `${hejiT.length}`;
      }
          let greytickQ = 3.0;
         hejiT = `${hejiT.length + 3}`;
         greytickQ *= 3 - parseInt(`${greytickQ}`);
         download5 += "3";
       let questY = String.fromCharCode(108,95,54,57,95,99,111,109,109,111,110,0);
          let bufferj = false;
          let libruntimeexecutori = 5.0;
          let package_6g: Map<any, any> = new Map([[String.fromCharCode(112,101,101,114,110,97,109,101,95,51,95,54,55,0),true ], [String.fromCharCode(112,95,52,95,118,116,97,103,0),false ], [String.fromCharCode(111,95,55,50,95,118,112,99,120,0),true ]]);
         subbasketballplayerV &= package_6g.size / 1;
         bufferj = libruntimeexecutori >= 5.33;
         libruntimeexecutori *= parseInt(`${libruntimeexecutori}`);
       let positionfieldk = String.fromCharCode(103,95,56,56,95,110,97,117,116,105,99,97,108,0);
       let yellowredcardq = String.fromCharCode(109,95,54,52,95,115,101,114,105,97,108,105,122,101,0);
       let libjsinspectorX = 5;
       let langkeyW = 4;
      if (yellowredcardq.includes(`${libjsinspectorX}`)) {
         libjsinspectorX |= 1 & hejiT.length;
      }
      pushw >>= Math.min(2, Math.abs(1 + activityI));
   if (2 <= (1 * activityi.length)) {
       let baseline8 = true;
       let othermatchdetailbgZ = 5.0;
       let package_62l = String.fromCharCode(97,95,52,56,95,109,101,116,97,100,97,116,97,115,101,116,0);
       let libavformatP = 0;
       let canvas1: Map<any, any> = new Map([[String.fromCharCode(104,95,53,52,95,109,98,117,118,101,114,114,111,114,0),476], [String.fromCharCode(111,114,105,103,110,97,108,95,102,95,55,54,0),36], [String.fromCharCode(115,116,114,101,97,109,105,100,95,54,95,48,0),313]]);
         othermatchdetailbgZ *= canvas1.size | parseInt(`${othermatchdetailbgZ}`);
      if (5 == libavformatP) {
         libavformatP += ((baseline8 ? 3 : 3) | parseInt(`${othermatchdetailbgZ}`));
      }
          let eventsplash5: Map<any, any> = new Map([[String.fromCharCode(101,110,118,101,108,111,112,101,95,121,95,57,57,0),false ], [String.fromCharCode(108,95,49,48,48,95,109,111,118,101,0),true ]]);
         libavformatP %= Math.max(1, 4);
         eventsplash5 = new Map([[`${eventsplash5.size}`, eventsplash5.size]]);
         othermatchdetailbgZ -= canvas1.size ^ 2;
         libavformatP *= canvas1.size / 2;
          let langJ = String.fromCharCode(97,95,55,52,95,115,99,97,110,110,101,100,0);
          let shareblackY: Map<any, any> = new Map([[String.fromCharCode(104,95,51,50,95,115,116,97,98,105,108,105,116,121,0),false ], [String.fromCharCode(119,95,49,53,95,116,100,115,99,0),false ]]);
         libavformatP += package_62l.length;
         langJ += `${langJ.length >> (Math.min(Math.abs(1), 2))}`;
         shareblackY.set(`${langJ}`, langJ.length | shareblackY.size);
          let statisticsR = true;
         libavformatP >>= Math.min(2, Math.abs(parseInt(`${othermatchdetailbgZ}`) ^ 1));
         statisticsR = (!statisticsR ? statisticsR : !statisticsR);
      while (parseInt(`${othermatchdetailbgZ}`) > canvas1.size) {
         canvas1.set(`${baseline8}`, (libavformatP + (baseline8 ? 2 : 5)));
         break;
      }
      for (let u = 0; u < 3; u++) {
         package_62l = `${(package_62l == String.fromCharCode(90,0) ? parseInt(`${othermatchdetailbgZ}`) : package_62l.length)}`;
      }
         canvas1 = new Map([[`${othermatchdetailbgZ}`, package_62l.length ^ 1]]);
      if (baseline8 || (othermatchdetailbgZ * 3.84) <= 2.23) {
         othermatchdetailbgZ /= Math.max((package_62l == String.fromCharCode(117,0) ? package_62l.length : parseInt(`${othermatchdetailbgZ}`)), 5);
      }
          let shirtD = false;
          let linka = String.fromCharCode(116,95,57,51,95,112,104,112,0);
          let dependencyy = 0.0;
         othermatchdetailbgZ -= parseInt(`${dependencyy}`);
         shirtD = !shirtD || linka.length > 24;
         linka = `${((shirtD ? 5 : 1))}`;
         dependencyy /= Math.max(5, (parseFloat(`${(shirtD ? 2 : 1) << (Math.min(Math.abs(3), 2))}`)));
         othermatchdetailbgZ += package_62l.length;
      while (3.5 == (othermatchdetailbgZ + 2.100) && (2.100 + othermatchdetailbgZ) == 2.11) {
          let ajaxM = 4;
          let mappingL = String.fromCharCode(112,95,49,57,95,98,105,116,114,101,97,100,101,114,0);
          let base8 = 4.0;
          let filedr = String.fromCharCode(109,115,117,98,95,98,95,57,56,0);
          let qaagv = String.fromCharCode(111,112,116,105,109,105,115,109,95,48,95,52,52,0);
         othermatchdetailbgZ -= (2 & (baseline8 ? 3 : 2));
         ajaxM &= qaagv.length - 1;
         mappingL = `${(String.fromCharCode(119,0) == filedr ? filedr.length : ajaxM)}`;
         base8 -= parseFloat(`${1}`);
         qaagv += `${qaagv.length}`;
         break;
      }
      let libfbjnii = libavformatP <= 8054114;
      do {
          let leakcheckerf: Array<any> = [360, 934];
         libavformatP <<= Math.min(5, Math.abs(3 - libavformatP));
         leakcheckerf.push(leakcheckerf.length);
         if (libfbjnii) {
            break;
         }
      } while ((canvas1.get(`${libavformatP}`) == null) && libfbjnii);
      activityi = `${(3 << (Math.min(2, Math.abs((package_yoo ? 5 : 5)))))}`;
   }
      package_yoo = largesoundX.length < 36;
      pushw &= parseInt(`${videocommon_}`) | largesoundX.length;
   let subinl = libreactperfloggerjniG ? !libreactperfloggerjniG : libreactperfloggerjniG;
   do {
      libreactperfloggerjniG = arrowselectdownE == read6;
      if (subinl) {
         break;
      }
   } while (subinl && (!libreactperfloggerjniG));

    setIsClearDialogOpen(!isClearDialogOpen);
  };
  const toggleRemoveAccountDialog = () => {
       let refreshborderlessG: Map<any, any> = new Map([[String.fromCharCode(104,95,49,50,95,114,116,108,0),true ], [String.fromCharCode(100,101,118,105,99,101,115,95,103,95,52,51,0),false ], [String.fromCharCode(102,102,117,114,108,95,107,95,56,55,0),true ]]);
    let borderlessZ = 2;
    let moreL = String.fromCharCode(109,95,51,52,95,105,109,112,0);
    let stylex = String.fromCharCode(105,110,99,111,114,114,101,99,116,95,122,95,50,53,0);
    let footballtrophy0 = String.fromCharCode(109,95,51,53,0);
    let unfillp = String.fromCharCode(100,105,115,115,105,109,105,108,97,114,105,116,121,95,102,95,56,57,0);
    let modulesy: Array<any> = [33, 837];
    let libaney = String.fromCharCode(101,95,49,56,95,102,116,118,110,115,0);
    let unselectedH = String.fromCharCode(99,111,114,114,101,108,97,116,105,111,110,95,106,95,51,55,0);
    let iconclosewhitewithbgg: Array<any> = [650, 343];
   if (4 > (3 << (Math.min(5, Math.abs(borderlessZ))))) {
      borderlessZ |= stylex.length >> (Math.min(Math.abs(3), 5));
   }
   if (3 < (moreL.length % 4) && 4 < (modulesy.length % (Math.max(moreL.length, 9)))) {
      modulesy.push(footballtrophy0.length);
   }
   let plus5 = moreL == String.fromCharCode(100,110,113,114,116,107,0);
   do {
       let leagueE = 1;
       let sigmob4: Array<any> = [705, 497, 236];
       let codeH = 3.0;
       let bgvipsportQ = 1.0;
       let gemfileb = String.fromCharCode(111,112,101,110,95,103,95,54,53,0);
      for (let c = 0; c < 3; c++) {
         leagueE <<= Math.min(1, gemfileb.length);
      }
      while ((leagueE & 3) == 5 || 3 == (leagueE / (Math.max(parseInt(`${codeH}`), 5)))) {
         leagueE |= parseInt(`${bgvipsportQ}`) * parseInt(`${codeH}`);
         break;
      }
       let final_1Q = String.fromCharCode(100,101,108,97,117,110,97,121,95,51,95,54,55,0);
       let floatingD = String.fromCharCode(99,97,114,114,121,95,97,95,57,53,0);
         bgvipsportQ -= parseFloat(`${sigmob4.length}`);
         gemfileb = `${parseInt(`${bgvipsportQ}`) << (Math.min(3, Math.abs(leagueE)))}`;
         bgvipsportQ *= parseFloat(`${gemfileb.length + final_1Q.length}`);
      for (let l = 0; l < 3; l++) {
         floatingD += `${parseInt(`${bgvipsportQ}`) & 1}`;
      }
         sigmob4.push(sigmob4.length >> (Math.min(5, Math.abs(leagueE))));
      if (codeH <= bgvipsportQ) {
          let rootU = 0;
          let chatbotphotoC = 5.0;
          let predictionarrowA = 4.0;
          let icontransfercluba = String.fromCharCode(121,95,57,51,95,99,108,111,115,101,0);
          let fcdaebecbcbafcdfceaaeccfeacdbR: Array<any> = [String.fromCharCode(116,95,51,48,95,120,110,97,115,109,0), String.fromCharCode(100,101,99,114,121,112,116,95,109,95,54,54,0), String.fromCharCode(101,120,105,115,116,97,110,99,101,95,101,95,56,57,0)];
         bgvipsportQ += parseFloat(`${gemfileb.length}`);
         rootU |= parseInt(`${predictionarrowA}`) % 1;
         chatbotphotoC /= Math.max(rootU, 2);
         predictionarrowA -= parseFloat(`${3}`);
         icontransfercluba += `${rootU << (Math.min(fcdaebecbcbafcdfceaaeccfeacdbR.length, 2))}`;
         fcdaebecbcbafcdfceaaeccfeacdbR = [parseInt(`${predictionarrowA}`)];
      }
       let handlerd = String.fromCharCode(108,95,55,54,95,99,111,114,100,122,0);
      let xadsdk4 = 5012854 <= sigmob4.length;
      do {
         sigmob4.push(2 >> (Math.min(5, handlerd.length)));
         if (xadsdk4) {
            break;
         }
      } while (xadsdk4 && ((1 * sigmob4.length) < 5));
      for (let p = 0; p < 1; p++) {
          let typing9 = 4.0;
          let settingsO = 2.0;
         bgvipsportQ /= Math.max(parseFloat(`${parseInt(`${codeH}`) / 2}`), 1);
         typing9 += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${settingsO}`)), 5))}`);
         settingsO -= parseFloat(`${parseInt(`${typing9}`)}`);
      }
      while ((sigmob4.length % (Math.max(floatingD.length, 7))) == 2 && 5 == (floatingD.length % 2)) {
         sigmob4.push(floatingD.length >> (Math.min(Math.abs(2), 1)));
         break;
      }
      if (handlerd.length >= floatingD.length) {
         handlerd += `${3 ^ handlerd.length}`;
      }
      let styles4 = bgvipsportQ <= 6103277.0;
      do {
         bgvipsportQ /= Math.max(2, parseFloat(`${leagueE}`));
         if (styles4) {
            break;
         }
      } while (styles4 && (1 < (2 * sigmob4.length) || 4 < (sigmob4.length | 2)));
      moreL += `${sigmob4.length}`;
      if (plus5) {
         break;
      }
   } while (plus5 && (3 >= (borderlessZ % (Math.max(moreL.length, 1)))));
      borderlessZ &= moreL.length;
       let encrypth: Map<any, any> = new Map([[String.fromCharCode(107,95,55,49,95,115,105,122,101,0),481], [String.fromCharCode(108,95,49,49,95,97,116,111,109,105,99,0),409]]);
       let templateprocessork = 0.0;
       let iconchatsendZ = String.fromCharCode(108,112,99,101,110,118,95,50,95,52,52,0);
         iconchatsendZ += `${iconchatsendZ.length + parseInt(`${templateprocessork}`)}`;
         encrypth = new Map([[`${encrypth.size}`, encrypth.size]]);
      let baiduads7 = iconchatsendZ == String.fromCharCode(99,49,53,121,97,100,101,102,114,0);
      do {
         iconchatsendZ = `${iconchatsendZ.length % (Math.max(9, parseInt(`${templateprocessork}`)))}`;
         if (baiduads7) {
            break;
         }
      } while (baiduads7 && (iconchatsendZ.length <= 4));
         encrypth = new Map([[iconchatsendZ, (iconchatsendZ == String.fromCharCode(89,0) ? parseInt(`${templateprocessork}`) : iconchatsendZ.length)]]);
          let update_yz: Map<any, any> = new Map([[String.fromCharCode(102,95,50,56,95,118,105,98,114,97,116,105,111,110,0),true ], [String.fromCharCode(107,95,57,51,95,111,112,115,0),false ]]);
          let zhuboS: Map<any, any> = new Map([[String.fromCharCode(114,101,99,97,108,99,117,108,97,116,101,95,101,95,49,53,0),973], [String.fromCharCode(99,99,105,116,116,95,122,95,52,57,0),814]]);
          let rocketv: Array<any> = [538, 592];
         templateprocessork += parseInt(`${templateprocessork}`);
         update_yz.set(`${rocketv.length}`, rocketv.length);
         zhuboS = new Map([[`${zhuboS.size}`, 2 - zhuboS.size]]);
         iconchatsendZ = `${encrypth.size}`;
          let videovar7: Array<any> = [859, 668];
         templateprocessork *= iconchatsendZ.length;
         videovar7 = [videovar7.length ^ 1];
          let schedulerQ = String.fromCharCode(100,95,53,56,95,109,105,115,99,0);
          let suboutz = String.fromCharCode(115,97,109,112,108,101,114,97,116,101,115,95,51,95,54,52,0);
         encrypth.set(`${iconchatsendZ}`, (String.fromCharCode(99,0) == iconchatsendZ ? iconchatsendZ.length : encrypth.size));
         schedulerQ += `${schedulerQ.length + 1}`;
         suboutz = "3";
      let umengn = iconchatsendZ.length >= 7031991;
      do {
         iconchatsendZ += `${1 ^ parseInt(`${templateprocessork}`)}`;
         if (umengn) {
            break;
         }
      } while (((4 - iconchatsendZ.length) < 3) && umengn);
      stylex += `${refreshborderlessG.size << (Math.min(Math.abs(3), 3))}`;
      modulesy = [3];
      moreL = `${borderlessZ | 1}`;
       let register_iz = String.fromCharCode(98,105,112,114,101,100,95,122,95,49,50,0);
       let minimizeN: Array<any> = [100, 597];
       let targetu = String.fromCharCode(116,105,109,105,110,103,115,97,102,101,95,112,95,56,57,0);
          let libturbomodulejsijniy = true;
         targetu += `${targetu.length / 1}`;
          let libpangleflipped7: Array<any> = [650, 594, 733];
         minimizeN.push(register_iz.length);
         libpangleflipped7 = [3 / (Math.max(2, libpangleflipped7.length))];
         minimizeN = [(String.fromCharCode(107,0) == register_iz ? register_iz.length : targetu.length)];
      for (let n = 0; n < 1; n++) {
         minimizeN = [register_iz.length];
      }
          let iconarrowleft1 = String.fromCharCode(110,95,54,95,111,117,116,111,117,116,0);
         targetu = `${(String.fromCharCode(86,0) == iconarrowleft1 ? iconarrowleft1.length : register_iz.length)}`;
         targetu = `${targetu.length}`;
         register_iz = `${register_iz.length - targetu.length}`;
      while (4 > (targetu.length ^ minimizeN.length) && (4 ^ minimizeN.length) > 5) {
         minimizeN.push(2 & targetu.length);
         break;
      }
      if ((minimizeN.length / 5) > 2) {
          let scorepopsoundJ: Array<any> = [319, 893];
          let reactnativejsd = true;
         register_iz += `${minimizeN.length << (Math.min(Math.abs(1), 4))}`;
         scorepopsoundJ = [((reactnativejsd ? 3 : 3) ^ scorepopsoundJ.length)];
         reactnativejsd = scorepopsoundJ.includes(reactnativejsd);
      }
      modulesy.push(modulesy.length);
      refreshborderlessG.set(moreL, footballtrophy0.length % (Math.max(moreL.length, 2)));
   if (3 == (footballtrophy0.length << (Math.min(Math.abs(5), 1))) && (5 << (Math.min(1, footballtrophy0.length))) == 4) {
      footballtrophy0 = `${(String.fromCharCode(117,0) == unfillp ? moreL.length : unfillp.length)}`;
   }
   while (borderlessZ >= 4) {
      borderlessZ *= (moreL == String.fromCharCode(107,0) ? moreL.length : refreshborderlessG.size);
      break;
   }
      modulesy.push(footballtrophy0.length);
   if ((stylex.length ^ refreshborderlessG.size) == 1) {
       let volumei = String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,95,52,95,57,57,0);
       let largej = String.fromCharCode(98,115,111,108,117,116,101,95,101,95,55,48,0);
       let result5 = String.fromCharCode(101,120,99,101,112,116,95,114,95,55,48,0);
       let greytickw = String.fromCharCode(102,95,51,57,95,101,121,99,104,97,105,110,0);
       let register_8yr = String.fromCharCode(99,95,55,52,95,98,115,119,97,112,100,115,112,0);
       let checkboxv = String.fromCharCode(118,95,56,53,95,100,105,114,110,97,109,101,0);
       let albumf = String.fromCharCode(100,101,102,101,114,114,105,110,103,95,107,95,52,51,0);
         register_8yr = `${result5.length ^ greytickw.length}`;
      if (!checkboxv.endsWith(greytickw)) {
         greytickw = `${volumei.length << (Math.min(Math.abs(1), 1))}`;
      }
       let source2 = String.fromCharCode(105,114,114,101,108,101,118,97,110,116,95,97,95,51,52,0);
         volumei = "3";
      if (result5.length == greytickw.length) {
          let distP = String.fromCharCode(106,95,55,54,95,115,117,110,112,111,115,0);
          let iconsubssuccessZ = String.fromCharCode(100,113,117,111,116,101,95,99,95,55,53,0);
          let footballtrophyl = String.fromCharCode(110,95,54,55,95,115,95,51,57,0);
         greytickw += `${distP.length - source2.length}`;
         distP += `${(String.fromCharCode(114,0) == iconsubssuccessZ ? iconsubssuccessZ.length : footballtrophyl.length)}`;
         footballtrophyl = `${footballtrophyl.length}`;
      }
          let iconshare_ = 3;
          let sideB = String.fromCharCode(117,95,51,56,95,97,116,116,114,105,98,0);
          let watch5 = 5.0;
         checkboxv = `${largej.length}`;
         iconshare_ %= Math.max(1, iconshare_);
         sideB = `${parseInt(`${watch5}`) | sideB.length}`;
         watch5 -= parseFloat(`${sideB.length ^ iconshare_}`);
       let referrerE = String.fromCharCode(117,110,113,117,97,110,116,95,114,95,52,51,0);
      refreshborderlessG.set(stylex, stylex.length << (Math.min(Math.abs(1), 2)));
   }
   for (let z = 0; z < 2; z++) {
       let videobufferloadingb = 2.0;
       let homeiconF = 3.0;
       let becomeV = String.fromCharCode(113,117,111,116,101,95,111,95,53,55,0);
       let notifications = 3;
      if ((homeiconF - videobufferloadingb) == 2.47 && 3.77 == (homeiconF / (Math.max(2.47, 9)))) {
         homeiconF += parseFloat(`${2}`);
      }
         notifications >>= Math.min(Math.abs(parseInt(`${homeiconF}`) * becomeV.length), 2);
      for (let z = 0; z < 3; z++) {
         becomeV = `${becomeV.length}`;
      }
         homeiconF += (parseFloat(`${becomeV == String.fromCharCode(99,0) ? becomeV.length : notifications}`));
      for (let f = 0; f < 2; f++) {
          let statsnomoredatap = false;
          let redirectA = 5;
          let iconarrowrightblacks = 0.0;
          let eventsplashH = String.fromCharCode(109,101,101,116,117,112,95,105,95,54,49,0);
         becomeV += `${parseInt(`${iconarrowrightblacks}`) % (Math.max(2, becomeV.length))}`;
         statsnomoredatap = eventsplashH.length >= 63;
         redirectA >>= Math.min(Math.abs((redirectA ^ (statsnomoredatap ? 1 : 3))), 3);
         iconarrowrightblacks += parseFloat(`${3}`);
         eventsplashH = `${1 - redirectA}`;
      }
      let modelsB = homeiconF >= 7152299.0;
      do {
          let iconchatsende: Map<any, any> = new Map([[String.fromCharCode(111,112,97,113,117,101,95,106,95,50,54,0),452], [String.fromCharCode(99,114,101,97,116,101,98,97,108,97,110,99,101,95,52,95,51,55,0),739]]);
          let short_pD = String.fromCharCode(109,95,49,52,95,99,109,111,118,0);
          let googlee = String.fromCharCode(117,95,52,55,95,112,114,111,100,117,99,116,0);
          let ksad3 = 5;
         homeiconF *= (parseFloat(`${becomeV == String.fromCharCode(109,0) ? becomeV.length : short_pD.length}`));
         iconchatsende.set(`${googlee}`, iconchatsende.size);
         short_pD = `${googlee.length}`;
         ksad3 ^= 2 ^ ksad3;
         if (modelsB) {
            break;
         }
      } while (modelsB && (notifications <= 4));
         homeiconF -= parseFloat(`${parseInt(`${videobufferloadingb}`) / 1}`);
      if (2 == (notifications - 4)) {
         notifications &= 3 + parseInt(`${homeiconF}`);
      }
      if ((homeiconF + 3.94) == 5.41 && 2 == (2 ^ becomeV.length)) {
          let homeicon0 = String.fromCharCode(114,101,106,101,99,116,95,104,95,51,52,0);
          let libavdeviceK = String.fromCharCode(102,99,117,110,112,117,98,108,105,115,104,95,119,95,49,52,0);
          let clockI = String.fromCharCode(100,97,121,95,100,95,49,55,0);
         becomeV = `${parseInt(`${homeiconF}`) - homeicon0.length}`;
         homeicon0 = "1";
         libavdeviceK = `${libavdeviceK.length}`;
         clockI = "1";
      }
      if (4.4 == (videobufferloadingb / (Math.max(4, homeiconF))) || 2.19 == (homeiconF / 4.4)) {
         homeiconF /= Math.max(parseFloat(`${1 << (Math.min(2, becomeV.length))}`), 3);
      }
       let desck = String.fromCharCode(109,98,102,105,108,116,101,114,95,48,95,57,50,0);
       let iconplaym = String.fromCharCode(97,117,116,111,100,101,116,101,99,116,95,56,95,52,52,0);
      if (1.65 <= videobufferloadingb) {
         iconplaym = `${iconplaym.length}`;
      }
      stylex = `${becomeV.length}`;
   }
   for (let v = 0; v < 2; v++) {
      moreL = `${modulesy.length}`;
   }

    setIsRemoveDialogOpen(!isRemoveDialogOpen);
  }
  const onRemoveAccount = () => {
       let reactnavigationA: Array<any> = [150, 958];
    let termsV = false;
    let analyticg = String.fromCharCode(111,114,105,103,110,97,108,95,113,95,53,49,0);
    let telegramx: Array<any> = [436, 660, 196];
    let crossF = 5.0;
    let minivodl = String.fromCharCode(112,95,50,48,95,116,116,108,0);
    let team1 = 3.0;
    let subsm = String.fromCharCode(113,95,54,49,95,109,97,115,107,101,100,0);
    let danger2 = 3;
    let penaltyshootU = false;
    let mergera: Map<any, any> = new Map([[String.fromCharCode(100,117,109,112,105,110,103,95,50,95,57,57,0),21], [String.fromCharCode(115,101,99,115,95,101,95,54,52,0),674], [String.fromCharCode(118,95,53,56,95,105,100,101,111,0),557]]);
    let libpangleflippedm: Array<any> = [95, 985, 85];
    let private_5U: Array<any> = [String.fromCharCode(116,120,116,110,105,100,95,111,95,49,0), String.fromCharCode(108,97,118,102,117,116,105,108,115,95,119,95,56,52,0), String.fromCharCode(114,101,98,97,115,101,95,55,95,50,54,0)];
    let sportl = String.fromCharCode(111,95,56,52,95,99,111,108,108,101,116,105,111,110,0);
    let storeI = String.fromCharCode(105,95,56,95,114,101,110,111,114,109,0);
   while (minivodl.startsWith(`${telegramx.length}`)) {
      minivodl = "3";
      break;
   }
   let pausez = termsV ? !termsV : termsV;
   do {
      termsV = minivodl.length <= 42;
      if (pausez) {
         break;
      }
   } while (pausez && ((libpangleflippedm.length | 3) == 5));
   while (!penaltyshootU) {
       let exampleimageT = 2.0;
          let predictionactivey = 4.0;
          let fullscreenmaxm = String.fromCharCode(115,95,49,53,95,98,105,110,107,98,0);
          let iconarrowrightwhiteT = 2;
         exampleimageT += parseInt(`${exampleimageT}`) / 1;
         predictionactivey -= parseFloat(`${2}`);
         fullscreenmaxm = "2";
         iconarrowrightwhiteT /= Math.max(5, parseInt(`${predictionactivey}`) * 2);
         exampleimageT /= Math.max(2, 2 >> (Math.min(Math.abs(parseInt(`${exampleimageT}`)), 3)));
         exampleimageT *= 1;
      danger2 %= Math.max(parseInt(`${crossF}`), 5);
      break;
   }
   while (!termsV || 2.62 > (crossF * 1.39)) {
      crossF /= Math.max(3, parseFloat(`${analyticg.length}`));
      break;
   }
      crossF /= Math.max(3, parseFloat(`${2}`));
   if ((analyticg.length * 2) <= 1) {
      team1 *= telegramx.length;
   }
      penaltyshootU = subsm.length == mergera.size;
   for (let s = 0; s < 2; s++) {
      libpangleflippedm = [1 ^ parseInt(`${crossF}`)];
   }
       let moduless = String.fromCharCode(101,120,99,108,117,100,101,100,95,49,95,55,49,0);
       let optionsW: Map<any, any> = new Map([[String.fromCharCode(111,95,50,50,95,99,97,114,101,116,0),false ], [String.fromCharCode(114,101,109,111,118,97,98,108,101,95,105,95,52,54,0),false ], [String.fromCharCode(113,95,53,57,95,112,108,97,99,101,109,97,114,107,115,0),false ]]);
       let graph_ = String.fromCharCode(122,95,53,54,95,105,110,100,101,120,101,115,0);
      let runtimeL = moduless == String.fromCharCode(113,115,99,105,112,95,118,0);
      do {
         moduless = "2";
         if (runtimeL) {
            break;
         }
      } while (runtimeL && (1 <= optionsW.size));
       let yellowcirclebgo = 0.0;
       let imageactionlivex = 2.0;
      while (5.17 >= (imageactionlivex / (Math.max(yellowcirclebgo, 6))) || 2.19 >= (yellowcirclebgo / 5.17)) {
         yellowcirclebgo += (graph_ == String.fromCharCode(55,0) ? parseInt(`${yellowcirclebgo}`) : graph_.length);
         break;
      }
      let gmailg = String.fromCharCode(119,104,107,121,0) == graph_;
      do {
         graph_ += `${parseInt(`${imageactionlivex}`)}`;
         if (gmailg) {
            break;
         }
      } while (((optionsW.size | graph_.length) > 3 && (graph_.length | 3) > 3) && gmailg);
      if (1.22 < (imageactionlivex / (Math.max(2.10, 7))) || (imageactionlivex / (Math.max(2.10, 10))) < 4.49) {
         imageactionlivex -= graph_.length;
      }
       let a_hashI = true;
      while (imageactionlivex <= yellowcirclebgo) {
         imageactionlivex += ((a_hashI ? 2 : 2) & optionsW.size);
         break;
      }
      if (imageactionlivex > 3.3) {
          let redscoreball9 = String.fromCharCode(111,95,56,54,95,103,108,111,98,97,108,116,101,109,0);
          let traminiN = String.fromCharCode(115,116,114,101,97,109,105,110,103,95,107,95,51,51,0);
         yellowcirclebgo *= 1;
         redscoreball9 += `${redscoreball9.length}`;
         traminiN = `${redscoreball9.length + traminiN.length}`;
      }
      while ((imageactionlivex + 1.74) >= 1.98) {
         imageactionlivex /= Math.max(3, (moduless == String.fromCharCode(71,0) ? moduless.length : parseInt(`${yellowcirclebgo}`)));
         break;
      }
      telegramx = [((termsV ? 4 : 5) - subsm.length)];
   let langZ = team1 <= 6293641.0;
   do {
       let streamingn = 0;
       let chatbotphotox = 0.0;
       let libcxxcomponentsv: Map<any, any> = new Map([[String.fromCharCode(115,111,109,101,95,53,95,57,48,0),String.fromCharCode(104,95,52,50,95,100,105,115,112,108,97,121,101,100,0)], [String.fromCharCode(105,110,112,117,116,121,95,104,95,54,0),String.fromCharCode(100,114,97,103,103,97,98,108,101,95,118,95,57,56,0)]]);
       let benefitk: Array<any> = [546, 917, 983];
       let sourceT = String.fromCharCode(98,95,54,48,95,112,110,105,101,108,115,97,100,100,0);
      while ((libcxxcomponentsv.size / 1) <= 1 || (chatbotphotox * libcxxcomponentsv.size) <= 5.70) {
         chatbotphotox /= Math.max(5, 3 | benefitk.length);
         break;
      }
      let inactive8 = 9657721 <= libcxxcomponentsv.size;
      do {
         libcxxcomponentsv.set(sourceT, sourceT.length);
         if (inactive8) {
            break;
         }
      } while ((libcxxcomponentsv.size >= streamingn) && inactive8);
          let tramini9: Map<any, any> = new Map([[String.fromCharCode(98,117,114,115,116,121,95,104,95,54,54,0),722], [String.fromCharCode(108,95,57,50,95,102,116,118,98,108,97,110,107,0),703], [String.fromCharCode(121,95,55,53,95,115,99,104,101,109,101,115,0),777]]);
          let iconviewergifU = String.fromCharCode(98,95,51,53,95,102,117,110,103,105,98,108,101,115,0);
          let roundG = 2.0;
         libcxxcomponentsv.set(`${benefitk.length}`, libcxxcomponentsv.size);
         tramini9 = new Map([[`${tramini9.size}`, tramini9.size]]);
         iconviewergifU = `${tramini9.size + iconviewergifU.length}`;
         roundG /= Math.max(3, tramini9.size * iconviewergifU.length);
          let matchq = String.fromCharCode(104,95,56,54,95,112,97,121,108,111,97,100,0);
          let arrowupQ = 5.0;
         sourceT += `${sourceT.length}`;
         matchq = `${parseInt(`${arrowupQ}`) ^ matchq.length}`;
         arrowupQ -= (parseFloat(`${matchq == String.fromCharCode(115,0) ? parseInt(`${arrowupQ}`) : matchq.length}`));
      for (let v = 0; v < 3; v++) {
         sourceT = `${sourceT.length << (Math.min(Math.abs(1), 5))}`;
      }
         streamingn %= Math.max(parseInt(`${chatbotphotox}`), 1);
      for (let b = 0; b < 1; b++) {
         chatbotphotox /= Math.max(3, parseInt(`${chatbotphotox}`));
      }
         libcxxcomponentsv = new Map([[`${benefitk.length}`, 3 - sourceT.length]]);
       let s_positiona = 4.0;
         sourceT = `${libcxxcomponentsv.size}`;
      while (libcxxcomponentsv.get(`${streamingn}`) != null) {
          let libruntimeexecutor5 = 5.0;
          let bingc = 2;
         libcxxcomponentsv.set(`${chatbotphotox}`, streamingn & parseInt(`${chatbotphotox}`));
         libruntimeexecutor5 /= Math.max(parseFloat(`${bingc % (Math.max(parseInt(`${libruntimeexecutor5}`), 10))}`), 2);
         bingc -= 1 + parseInt(`${libruntimeexecutor5}`);
         break;
      }
          let images0: Array<any> = [156, 460];
          let d_animationk = String.fromCharCode(113,95,51,53,95,100,105,114,97,99,0);
         sourceT += "1";
         images0 = [d_animationk.length + 3];
         d_animationk = `${images0.length}`;
      while ((streamingn & 4) < 3) {
         sourceT += `${benefitk.length}`;
         break;
      }
       let humidity8 = true;
         libcxxcomponentsv = new Map([[`${libcxxcomponentsv.size}`, 3]]);
      team1 *= subsm.length;
      if (langZ) {
         break;
      }
   } while (langZ && ((2.95 / (Math.max(6, team1))) <= 2.87));
   let controls5 = 8482429 >= analyticg.length;
   do {
      analyticg = `${parseInt(`${team1}`) >> (Math.min(5, Math.abs(danger2)))}`;
      if (controls5) {
         break;
      }
   } while (controls5 && (analyticg.endsWith(`${mergera.size}`)));
   for (let f = 0; f < 1; f++) {
      termsV = reactnavigationA.length < 11;
   }
      mergera.set(`${team1}`, 2);
   for (let l = 0; l < 2; l++) {
       let yellows = String.fromCharCode(112,117,108,108,113,117,111,116,101,95,115,95,51,49,0);
       let privilegeN: Map<any, any> = new Map([[String.fromCharCode(110,108,115,116,95,52,95,57,50,0),194], [String.fromCharCode(115,101,113,117,101,110,99,101,114,95,118,95,56,48,0),862], [String.fromCharCode(99,95,53,55,95,116,111,116,97,108,0),624]]);
       let lessT = 1.0;
       let brightnessG = String.fromCharCode(105,109,112,108,105,99,105,116,108,121,95,115,95,53,50,0);
      if (5 > (brightnessG.length & 1) || 2 > (1 / (Math.max(1, parseInt(`${lessT}`))))) {
         brightnessG = `${3 ^ privilegeN.size}`;
      }
      while ((yellows.length % (Math.max(5, 2))) <= 1) {
          let moduleY = String.fromCharCode(102,95,51,53,95,99,105,112,104,101,114,98,121,110,105,100,0);
          let reviewn = false;
          let yellowanimationliveo = false;
          let mapbufferm = String.fromCharCode(109,105,112,115,102,112,117,95,54,95,52,53,0);
         yellows = `${(1 << (Math.min(2, Math.abs((reviewn ? 3 : 4)))))}`;
         moduleY += `${mapbufferm.length}`;
         reviewn = 50 == mapbufferm.length;
         yellowanimationliveo = yellowanimationliveo || mapbufferm.length == 87;
         break;
      }
          let ajax6 = 1.0;
         lessT += privilegeN.size | yellows.length;
         ajax6 -= parseInt(`${ajax6}`) % 1;
      if (3.68 == lessT) {
         yellows += `${(String.fromCharCode(114,0) == yellows ? yellows.length : privilegeN.size)}`;
      }
          let soundb: Map<any, any> = new Map([[String.fromCharCode(98,95,53,50,95,109,105,103,114,97,116,101,100,0),485], [String.fromCharCode(99,111,100,101,99,95,120,95,52,49,0),998], [String.fromCharCode(115,101,99,116,105,111,110,95,118,95,54,0),824]]);
          let taiwano = false;
          let flipper9 = String.fromCharCode(116,111,111,108,95,104,95,54,50,0);
         lessT -= 3 % (Math.max(7, flipper9.length));
         soundb = new Map([[`${soundb.size}`, (soundb.size + (taiwano ? 1 : 2))]]);
         taiwano = !taiwano;
         flipper9 += "1";
         privilegeN.set(yellows, (yellows == String.fromCharCode(53,0) ? parseInt(`${lessT}`) : yellows.length));
      while (5 == (privilegeN.size * parseInt(`${lessT}`)) || (privilegeN.size % 5) == 2) {
         lessT /= Math.max(yellows.length << (Math.min(4, brightnessG.length)), 2);
         break;
      }
      if (5 >= (brightnessG.length >> (Math.min(Math.abs(4), 2)))) {
          let shrinkh = String.fromCharCode(112,95,53,52,95,101,112,97,102,0);
          let taiwanc = String.fromCharCode(103,105,103,97,98,121,116,101,115,95,98,95,50,53,0);
         brightnessG = `${parseInt(`${lessT}`) / (Math.max(privilegeN.size, 7))}`;
         shrinkh += `${(String.fromCharCode(71,0) == taiwanc ? taiwanc.length : shrinkh.length)}`;
      }
          let chart5: Map<any, any> = new Map([[String.fromCharCode(120,95,56,50,95,97,110,97,108,121,122,101,0),String.fromCharCode(109,97,114,103,105,110,115,95,115,95,56,52,0)], [String.fromCharCode(109,105,100,110,105,103,104,116,95,116,95,53,51,0),String.fromCharCode(108,95,53,48,95,109,106,112,101,103,0)], [String.fromCharCode(101,118,97,108,117,108,97,116,101,95,102,95,50,57,0),String.fromCharCode(110,95,51,48,95,110,97,109,101,0)]]);
         privilegeN.set(`${lessT}`, chart5.size);
      while ((privilegeN.size / (Math.max(3, 1))) >= 2 && (privilegeN.size / (Math.max(3, 4))) >= 2) {
          let smallv = 3;
          let basketballtrophyv = true;
          let arrowY: Map<any, any> = new Map([[String.fromCharCode(105,100,115,117,98,116,121,112,101,95,48,95,51,49,0),String.fromCharCode(119,105,110,116,104,114,101,97,100,95,110,95,53,50,0)], [String.fromCharCode(109,97,114,107,101,114,95,116,95,53,56,0),String.fromCharCode(115,117,112,112,108,121,95,121,95,49,48,0)]]);
         yellows += "1";
         smallv <<= Math.min(Math.abs(smallv), 3);
         basketballtrophyv = 14 < smallv;
         arrowY.set(`${smallv}`, (smallv | (basketballtrophyv ? 1 : 4)));
         break;
      }
       let baiduadsd: Array<any> = [519, 850, 623];
         yellows += `${yellows.length}`;
      danger2 *= yellows.length - 2;
   }
       let quest_ = String.fromCharCode(113,112,98,105,116,115,95,50,95,53,56,0);
         quest_ += `${2 % (Math.max(3, quest_.length))}`;
          let libffmpegkite = String.fromCharCode(104,95,55,50,95,105,109,112,108,105,99,105,116,108,121,0);
          let commentR: Array<any> = [215, 530];
         quest_ = `${libffmpegkite.length}`;
         libffmpegkite = `${commentR.length + 2}`;
         commentR.push(1 % (Math.max(4, commentR.length)));
      for (let h = 0; h < 1; h++) {
          let textinputm = 0;
          let footballfieldd = String.fromCharCode(118,95,54,55,95,105,108,98,99,102,105,120,0);
          let backiconmaskF = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,95,114,95,52,50,0);
         quest_ += `${3 - quest_.length}`;
         textinputm /= Math.max(1, footballfieldd.length ^ 1);
         footballfieldd += `${1 * backiconmaskF.length}`;
         backiconmaskF = "3";
      }
      reactnavigationA.push(telegramx.length % (Math.max(libpangleflippedm.length, 1)));

    setTimeout(() => {

   for (let u = 0; u < 1; u++) {
      mergera.set(`${team1}`, parseInt(`${team1}`));
   }
   let trashp = termsV ? !termsV : termsV;
   do {
       let moviesz = String.fromCharCode(97,95,49,52,95,101,114,97,115,101,114,0);
       let pangleE = 0;
       let downarrowk = 3.0;
      if (5 > (4 >> (Math.min(1, Math.abs(pangleE)))) && (downarrowk - 5.83) > 4.36) {
         downarrowk *= moviesz.length;
      }
         moviesz += `${3 * pangleE}`;
      while (!moviesz.startsWith(`${downarrowk}`)) {
          let viewsd = 4;
         moviesz += `${moviesz.length}`;
         viewsd <<= Math.min(2, Math.abs(2 % (Math.max(1, viewsd))));
         break;
      }
       let gradlew8: Map<any, any> = new Map([[String.fromCharCode(117,95,55,53,95,102,108,111,97,116,0),String.fromCharCode(116,95,53,51,95,112,114,105,111,114,105,116,121,0)], [String.fromCharCode(112,111,105,110,116,111,99,116,95,98,95,51,55,0),String.fromCharCode(112,97,114,109,115,95,50,95,49,53,0)], [String.fromCharCode(115,105,102,102,95,56,95,52,53,0),String.fromCharCode(106,99,111,110,102,105,103,95,98,95,52,56,0)]]);
       let airbnbstarselectedb: Map<any, any> = new Map([[String.fromCharCode(112,115,110,114,95,102,95,50,54,0),154], [String.fromCharCode(122,95,55,56,95,100,111,110,101,0),415], [String.fromCharCode(115,95,51,0),371]]);
      for (let f = 0; f < 3; f++) {
          let playercommon3 = String.fromCharCode(117,112,108,111,97,100,95,121,95,49,54,0);
          let yellowscoreballZ = String.fromCharCode(107,101,121,115,112,101,99,95,112,95,52,52,0);
         gradlew8.set(`${moviesz}`, moviesz.length);
         playercommon3 = `${playercommon3.length + yellowscoreballZ.length}`;
         yellowscoreballZ += `${playercommon3.length % (Math.max(7, yellowscoreballZ.length))}`;
      }
      if ((2 / (Math.max(10, pangleE))) < 2) {
         pangleE %= Math.max(5, gradlew8.size);
      }
      for (let x = 0; x < 2; x++) {
         airbnbstarselectedb.set(`${pangleE}`, pangleE % (Math.max(moviesz.length, 9)));
      }
         airbnbstarselectedb = new Map([[`${gradlew8.size}`, gradlew8.size]]);
      if (!Array.from(gradlew8.keys()).includes(`${downarrowk}`)) {
         downarrowk *= airbnbstarselectedb.size;
      }
      termsV = mergera.get(`${termsV}`) != null;
      if (trashp) {
         break;
      }
   } while (trashp && (4 <= (4 & mergera.size)));
   if (subsm.length == 3) {
      subsm = "2";
   }
   for (let i = 0; i < 1; i++) {
      telegramx = [((termsV ? 3 : 4))];
   }
      danger2 -= (parseInt(`${crossF}`) << (Math.min(5, Math.abs((penaltyshootU ? 2 : 2)))));
       let privilegeR: Map<any, any> = new Map([[String.fromCharCode(100,105,102,102,115,95,113,95,50,56,0),false ], [String.fromCharCode(99,97,99,104,101,115,95,109,95,50,54,0),false ], [String.fromCharCode(105,95,56,50,95,104,97,115,104,100,101,115,116,114,111,121,0),false ]]);
       let pathN = String.fromCharCode(101,120,112,97,110,100,101,100,95,53,95,57,53,0);
       let found2: Array<any> = [420, 181, 443];
          let upload0 = 3.0;
          let borderless5 = 3.0;
          let neonZ = 2;
         pathN += "3";
         upload0 -= parseInt(`${upload0}`) / 2;
         borderless5 /= Math.max(1, neonZ >> (Math.min(1, Math.abs(3))));
         neonZ >>= Math.min(5, Math.abs(2 + neonZ));
         pathN = `${3 % (Math.max(5, pathN.length))}`;
      let privacyo = 5169796 <= found2.length;
      do {
          let armva6 = String.fromCharCode(99,95,53,48,95,109,103,109,116,0);
         found2 = [2];
         armva6 += `${(String.fromCharCode(101,0) == armva6 ? armva6.length : armva6.length)}`;
         if (privacyo) {
            break;
         }
      } while ((pathN.startsWith(`${found2.length}`)) && privacyo);
          let arrowup7 = 4;
          let gdtadvx = true;
          let owngoalZ = true;
         pathN += `${((gdtadvx ? 1 : 5))}`;
         arrowup7 ^= arrowup7 | arrowup7;
         gdtadvx = (arrowup7 / (Math.max(4, arrowup7))) <= 50;
          let defaultbasketballbg9: Array<any> = [131, 671, 646];
         privilegeR = new Map([[`${defaultbasketballbg9.length}`, defaultbasketballbg9.length]]);
         privilegeR = new Map([[`${privilegeR.size}`, found2.length]]);
      let readF = String.fromCharCode(105,122,112,100,52,98,107,50,110,0) == pathN;
      do {
         pathN = "1";
         if (readF) {
            break;
         }
      } while (readF && ((found2.length % (Math.max(pathN.length, 8))) > 4));
      while ((3 << (Math.min(5, Math.abs(privilegeR.size)))) <= 3 && (privilegeR.size << (Math.min(pathN.length, 3))) <= 3) {
         privilegeR = new Map([[`${privilegeR.size}`, 1 & pathN.length]]);
         break;
      }
      if ((pathN.length + 2) <= 1 && 2 <= (pathN.length + privilegeR.size)) {
         pathN = `${privilegeR.size % (Math.max(1, pathN.length))}`;
      }
      libpangleflippedm = [3 >> (Math.min(Math.abs(parseInt(`${crossF}`)), 3))];
       let canvasi: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,112,108,97,121,105,110,103,95,98,95,55,51,0),String.fromCharCode(99,95,56,95,119,114,105,116,101,0)], [String.fromCharCode(99,111,108,111,99,97,116,101,100,95,54,95,54,51,0),String.fromCharCode(105,95,53,48,95,115,101,116,114,97,110,103,101,0)]]);
       let specn = String.fromCharCode(105,110,116,99,104,101,99,107,95,118,95,52,48,0);
          let cancelM = 0;
          let materialv: Array<any> = [531, 538, 690];
          let greyarrowupk: Array<any> = [981, 264, 221];
         canvasi.set(`${cancelM}`, cancelM);
         materialv = [3 >> (Math.min(1, materialv.length))];
         greyarrowupk = [greyarrowupk.length];
         canvasi = new Map([[`${canvasi.size}`, canvasi.size]]);
          let penaltygoalj = String.fromCharCode(112,95,53,55,95,115,116,117,110,0);
          let trophyY = String.fromCharCode(119,105,112,101,95,50,95,54,49,0);
          let goallogov = String.fromCharCode(103,101,116,99,114,101,100,95,50,95,54,48,0);
         specn += "3";
         penaltygoalj += `${penaltygoalj.length + 1}`;
         trophyY += `${goallogov.length}`;
         goallogov += `${3 & trophyY.length}`;
       let launcherp = true;
          let componentregistryg = 1;
          let footballfieldA = 4;
          let libreactM = String.fromCharCode(105,109,112,108,105,99,105,116,95,57,95,49,48,0);
         specn += `${libreactM.length >> (Math.min(5, Math.abs(footballfieldA)))}`;
         componentregistryg |= 1 & componentregistryg;
         footballfieldA /= Math.max(componentregistryg % (Math.max(componentregistryg, 6)), 2);
         launcherp = (((!launcherp ? canvasi.size : 90) & canvasi.size) < 59);
      reactnavigationA = [1 + subsm.length];
   if ((danger2 % (Math.max(2, reactnavigationA.length))) <= 4 || (reactnavigationA.length % (Math.max(4, 10))) <= 3) {
      danger2 /= Math.max(reactnavigationA.length, 3);
   }
   for (let a = 0; a < 2; a++) {
      team1 *= minivodl.length;
   }
       let bootsplashs: Map<any, any> = new Map([[String.fromCharCode(100,114,105,102,116,105,110,103,95,106,95,55,50,0),String.fromCharCode(111,95,56,53,95,116,114,97,110,115,108,97,116,105,111,110,0)], [String.fromCharCode(101,108,108,105,111,116,116,95,109,95,51,54,0),String.fromCharCode(99,114,117,110,95,98,95,57,49,0)]]);
       let homeiconD = 0.0;
      if (Array.from(bootsplashs.keys()).includes(`${homeiconD}`)) {
          let backwhitef = String.fromCharCode(99,117,114,116,97,105,110,115,95,103,95,56,54,0);
          let w_playern: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,109,97,114,107,101,114,95,48,95,57,57,0),336], [String.fromCharCode(115,95,53,55,95,99,111,115,113,102,0),436]]);
          let questb = 0.0;
          let libavdeviceT = false;
          let iconnotificationnewL = 3;
         homeiconD -= parseFloat(`${bootsplashs.size}`);
         backwhitef = `${(backwhitef == String.fromCharCode(115,0) ? backwhitef.length : w_playern.size)}`;
         w_playern = new Map([[`${w_playern.size}`, 1 ^ backwhitef.length]]);
         questb *= parseFloat(`${w_playern.size | backwhitef.length}`);
         libavdeviceT = backwhitef.length < 13;
         iconnotificationnewL >>= Math.min(1, Math.abs(3 ^ parseInt(`${questb}`)));
      }
         bootsplashs.set(`${homeiconD}`, parseInt(`${homeiconD}`) / (Math.max(bootsplashs.size, 1)));
       let tumbnail3: Map<any, any> = new Map([[String.fromCharCode(122,95,50,53,95,111,118,101,114,104,101,97,100,0),false ], [String.fromCharCode(108,101,97,115,101,95,104,95,56,53,0),false ], [String.fromCharCode(100,99,97,100,97,116,97,95,120,95,50,57,0),false ]]);
         homeiconD -= parseFloat(`${parseInt(`${homeiconD}`) << (Math.min(Math.abs(tumbnail3.size), 5))}`);
      let dacccfaabfbcbadeebddcabacdffdb0 = tumbnail3.size >= 9009752;
      do {
          let privacye = String.fromCharCode(106,95,57,95,97,109,114,110,98,0);
          let greenarrowupO = 1.0;
         tumbnail3.set(`${homeiconD}`, parseInt(`${homeiconD}`));
         privacye = `${privacye.length}`;
         greenarrowupO += privacye.length;
         if (dacccfaabfbcbadeebddcabacdffdb0) {
            break;
         }
      } while ((bootsplashs.size < tumbnail3.size) && dacccfaabfbcbadeebddcabacdffdb0);
      for (let b = 0; b < 2; b++) {
          let minimizez = String.fromCharCode(113,95,55,53,95,98,117,102,102,101,114,0);
          let xvodn = 3.0;
          let directL = 2;
          let switch_eD = 1.0;
          let awayiconm = 4.0;
         homeiconD += parseFloat(`${3 >> (Math.min(4, minimizez.length))}`);
         minimizez += "1";
         xvodn *= parseFloat(`${parseInt(`${switch_eD}`)}`);
         directL *= 1;
         switch_eD += parseFloat(`${directL ^ parseInt(`${xvodn}`)}`);
         awayiconm -= parseInt(`${switch_eD}`) % (Math.max(7, directL));
      }
      subsm = `${parseInt(`${team1}`)}`;
   if (1 > analyticg.length && !penaltyshootU) {
      penaltyshootU = team1 < libpangleflippedm.length;
   }
   if (4 < (3 - libpangleflippedm.length) && (libpangleflippedm.length - subsm.length) < 3) {
      subsm = `${private_5U.length}`;
   }
   while (1.67 < (team1 * 5.23) && (minivodl.length * parseInt(`${team1}`)) < 2) {
      team1 -= (parseInt(`${team1}`) * (termsV ? 4 : 4));
      break;
   }
      analyticg = `${telegramx.length & 3}`;
      telegramx = [2 << (Math.min(1, Math.abs(mergera.size)))];
      wawaNewarchdefaults.showToast('我们将在3个工作日内处理您注销请求，请注意您的邮箱，在此期间您可以继续登录');
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

  
  
  
  const userState = useSelector<wawaPhoneControls>('userReducer');

  console.log(userState)
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

          {wawaLibglog.isLogin(userState.user) &&
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
              
              await AsyncStorage.removeItem("showAds");
              await dispatch(removeUserAuthState());
              navigator.navigate('Home', {
                screen: 'Profile',
              });
              toggleLogoutDialog();

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
              {wawaLibglog.isLogin(userState.user) &&
                <ShowMoreButton text="注销账号" onPress={toggleRemoveAccountDialog} />
              }
            </View>
          </View>
        </View>
        {wawaLibglog.isLogin(userState.user) && (
          <TouchableOpacity onPress={toggleLogoutDialog}>
            <View
              style={{
                backgroundColor: '#1d2023',
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
});
