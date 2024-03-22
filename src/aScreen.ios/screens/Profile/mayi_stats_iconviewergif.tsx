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
import ScreenContainer from '../../components/container/mayi_save';
import { RootStackScreenProps } from '@type/mayi_video_binddatas';
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native';

import TitleWithBackButtonHeader from '../../components/header/mayi_predictiondefault_header';
import { Button, Dialog } from '@rneui/themed';
import ShowMoreButton from '../../components/button/mayi_push_bodan_button';
import NotificationModal from '../../components/modal/mayi_muted_edit';
import MoreArrow from '@static/images/scorepopsoundDefaultprofilepicDycreator.svg';
import ConfirmationModal from '../../components/modal/mayi_small_catalog';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/mayi_redirect';
import { clearStorageMemory } from '@redux/actions/mayi_modal';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import { addUserAuthState, removeUserAuthState } from '@redux/actions/mayi_librrc';
import { changeScreenAction } from '@redux/actions/mayi_iconorientation_chatroombackground';
import { mayi_Libapminsightb } from '@redux/mayi_live_tumbnail';

import { APP_NAME_CONST, APP_VERSION, IS_OTHER_SKIN } from '@utility/mayi_middleware_apps';
import { mayi_InjuryNewinterstitial } from '@redux/reducers/mayi_libavcodec_nativeex';
import { mayi_Attributedstring } from '@utility/mayi_source';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { mayi_Baseline } from '@redux/reducers/mayi_chatroombackground_unlock';
import { mayi_Gift } from '@models/mayi_libjsinspector';
import { mayi_Injury } from '../../../api/mayi_libjsinspector';
import { clearMinivodApiCache } from '../../../utils/mayi_context_statsnomoredata';
export default ({ navigation }: RootStackScreenProps<'设置'>) => {
  const { colors, textVariants, icons, spacing, dark } = useTheme();
  const [isVersionDialogOpen, setIsVersionDialogOpen] = useState(false);
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const [subtitle1, setSubtitle1] = useState('当前已是最新版本' + APP_VERSION);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  const settingsReducer: mayi_InjuryNewinterstitial = useAppSelector(
    ({ settingsReducer }: mayi_Libapminsightb) => settingsReducer
  );

  const dispatch = useAppDispatch();

  const toggleLogoutDialog = () => {
       let fileN = String.fromCharCode(102,105,114,115,116,95,120,95,53,54,0);
    let successr = 1.0;
    let matchdetailbg6 = 2.0;
    let modele: Map<any, any> = new Map([[String.fromCharCode(114,95,54,54,95,117,115,108,116,0),253], [String.fromCharCode(99,95,54,53,95,100,121,110,98,117,102,0),317]]);
    let report_ = 2.0;
    let arrowupz = String.fromCharCode(115,105,109,112,108,105,102,105,101,100,95,110,95,57,0);
    let iconsettingA = 3.0;
    let disconnectedo: Map<any, any> = new Map([[String.fromCharCode(108,97,115,116,110,111,100,101,95,121,95,52,54,0),String.fromCharCode(118,95,56,48,95,115,99,97,108,101,99,117,100,97,0)], [String.fromCharCode(99,97,110,110,111,116,95,54,95,52,55,0),String.fromCharCode(97,100,97,112,116,95,50,95,52,50,0)], [String.fromCharCode(115,95,53,54,95,115,101,97,114,99,104,101,100,0),String.fromCharCode(116,95,53,56,95,101,120,116,101,110,115,105,111,110,0)]]);
    let controlB = String.fromCharCode(102,116,115,105,115,115,112,97,99,101,95,120,95,54,48,0);
   if (successr >= matchdetailbg6) {
       let pangleM = String.fromCharCode(115,117,103,103,101,115,116,105,111,110,115,95,54,95,54,56,0);
       let stringsM = String.fromCharCode(107,95,49,51,95,100,101,115,99,101,110,116,0);
       let refreshborderless4 = 2.0;
       let collectionv = 1.0;
       let showu = String.fromCharCode(114,111,111,109,95,103,95,49,55,0);
       let reactnativejsO: Array<any> = [175, 447];
      for (let i = 0; i < 3; i++) {
          let thumbnailm: Array<any> = [246, 593];
          let tempj = true;
         showu = `${(pangleM.length | (tempj ? 3 : 1))}`;
         thumbnailm = [thumbnailm.length];
         tempj = (thumbnailm.length | thumbnailm.length) >= 15;
      }
         showu = "3";
         stringsM += `${parseInt(`${refreshborderless4}`)}`;
      if (pangleM != stringsM) {
         stringsM = `${(showu == String.fromCharCode(68,0) ? parseInt(`${refreshborderless4}`) : showu.length)}`;
      }
         collectionv *= pangleM.length << (Math.min(4, reactnativejsO.length));
      while (!stringsM.startsWith(`${pangleM.length}`)) {
          let fullscreenminG: Array<any> = [287, 10, 417];
          let policyu: Array<any> = [392, 427, 6];
          let eighteenq = String.fromCharCode(97,95,54,57,95,109,97,116,114,105,120,0);
          let groupK = 3;
         pangleM += "3";
         fullscreenminG.push(groupK);
         policyu = [3 | policyu.length];
         eighteenq += `${1 - eighteenq.length}`;
         groupK += 2;
         break;
      }
      let cedbadcebfbfbfbcfecbck = String.fromCharCode(105,51,106,98,0) == showu;
      do {
         showu = `${stringsM.length}`;
         if (cedbadcebfbfbfbcfecbck) {
            break;
         }
      } while (cedbadcebfbfbfbcfecbck && (showu.startsWith(pangleM)));
      let humidityb = 7779717.0 <= refreshborderless4;
      do {
         refreshborderless4 *= parseFloat(`${showu.length}`);
         if (humidityb) {
            break;
         }
      } while (((parseFloat(`${pangleM.length}`) + refreshborderless4) <= 5.48) && humidityb);
      for (let x = 0; x < 1; x++) {
         reactnativejsO = [stringsM.length | 1];
      }
      if ((reactnativejsO.length & showu.length) == 5) {
         reactnativejsO = [reactnativejsO.length];
      }
      if (!reactnativejsO.includes(collectionv)) {
          let orangeuparrowO: Array<any> = [100, 891, 772];
          let libreactnativejniO = String.fromCharCode(112,97,103,101,95,121,95,52,0);
          let crown9 = 3;
          let privilegee = String.fromCharCode(108,97,112,108,97,99,101,95,115,95,53,0);
         collectionv *= 2;
         orangeuparrowO = [orangeuparrowO.length];
         libreactnativejniO += `${crown9 << (Math.min(Math.abs(3), 2))}`;
         crown9 *= crown9 % (Math.max(libreactnativejniO.length, 5));
         privilegee += "1";
      }
      while (3 == (reactnativejsO.length * parseInt(`${refreshborderless4}`)) || (3 >> (Math.min(4, reactnativejsO.length))) == 2) {
         refreshborderless4 += parseFloat(`${parseInt(`${refreshborderless4}`)}`);
         break;
      }
      while (!pangleM.startsWith(`${collectionv}`)) {
         pangleM = `${1 >> (Math.min(2, pangleM.length))}`;
         break;
      }
      if (3.60 >= refreshborderless4) {
          let plashM = 3.0;
          let clubJ = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,115,95,113,95,55,51,0);
          let chatf = 4;
          let matchdetailbgs = String.fromCharCode(117,95,55,49,95,98,108,117,101,0);
         showu += "3";
         plashM *= parseFloat(`${chatf}`);
         clubJ += `${clubJ.length}`;
         chatf %= Math.max(1, clubJ.length);
         matchdetailbgs += `${clubJ.length << (Math.min(Math.abs(2), 1))}`;
      }
      successr -= parseInt(`${collectionv}`);
   }
   for (let v = 0; v < 2; v++) {
      fileN = `${parseInt(`${successr}`) + 1}`;
   }
      successr += fileN.length;
   let bufferI = String.fromCharCode(56,100,57,56,121,0) == arrowupz;
   do {
      arrowupz = `${2 | parseInt(`${matchdetailbg6}`)}`;
      if (bufferI) {
         break;
      }
   } while ((arrowupz.length >= modele.size) && bufferI);
      arrowupz += `${fileN.length}`;
      report_ -= parseFloat(`${disconnectedo.size}`);
      iconsettingA += parseFloat(`${3 * parseInt(`${matchdetailbg6}`)}`);
      successr /= Math.max(5, 2 * parseInt(`${matchdetailbg6}`));
      iconsettingA /= Math.max(3, parseFloat(`${2 | arrowupz.length}`));
      modele = new Map([[`${disconnectedo.size}`, disconnectedo.size - 2]]);
       let rockett = 2.0;
       let lessL = String.fromCharCode(116,95,57,54,95,112,114,101,102,101,116,99,104,0);
       let umeng3 = 5.0;
         umeng3 -= (String.fromCharCode(57,0) == lessL ? lessL.length : parseInt(`${umeng3}`));
          let hongkongq = String.fromCharCode(100,95,49,95,97,114,98,105,116,114,117,109,0);
          let tumbnail8 = 4.0;
          let backiconL = 0.0;
         lessL = "3";
         hongkongq = "1";
         tumbnail8 /= Math.max((String.fromCharCode(67,0) == hongkongq ? parseInt(`${tumbnail8}`) : hongkongq.length), 2);
         backiconL -= hongkongq.length * 1;
         rockett += 2;
      let graphh = rockett <= 7631444.0;
      do {
          let with__h = 4.0;
          let sansb = false;
         rockett *= lessL.length << (Math.min(Math.abs(1), 4));
         with__h *= (parseFloat(`${(sansb ? 2 : 2) / (Math.max(parseInt(`${with__h}`), 10))}`));
         sansb = 59.35 == with__h && !sansb;
         if (graphh) {
            break;
         }
      } while ((rockett <= 5.45) && graphh);
       let iconarrowrightorangek = 3.0;
      while (2 == (4 - lessL.length) && (lessL.length + 4) == 3) {
         umeng3 /= Math.max(lessL.length, 2);
         break;
      }
         rockett += 2;
      while (1.96 <= (umeng3 - 1.82) && (1.82 - iconarrowrightorangek) <= 5.49) {
          let layoutN = String.fromCharCode(112,95,56,50,95,108,105,115,116,101,110,0);
          let friendso: Array<any> = [755, 612, 135];
          let qaag1: Array<any> = [String.fromCharCode(110,95,55,53,95,115,101,97,116,0), String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,54,95,50,51,0), String.fromCharCode(101,120,99,108,95,113,95,54,57,0)];
          let showlessA = String.fromCharCode(116,95,52,54,95,111,98,115,101,114,118,105,110,103,0);
         iconarrowrightorangek *= parseFloat(`${3 + showlessA.length}`);
         layoutN += `${qaag1.length}`;
         friendso = [2 << (Math.min(2, friendso.length))];
         qaag1 = [friendso.length ^ qaag1.length];
         showlessA = `${qaag1.length}`;
         break;
      }
      while (5 > lessL.length) {
         lessL += "1";
         break;
      }
      arrowupz = `${arrowupz.length}`;
       let executor3: Array<any> = [String.fromCharCode(115,111,100,101,97,108,108,111,99,95,100,95,56,48,0), String.fromCharCode(111,95,53,53,95,117,110,115,97,118,101,100,0), String.fromCharCode(102,105,108,108,101,114,95,106,95,52,52,0)];
      while ((executor3.length / 3) <= 3 && 3 <= (executor3.length / (Math.max(2, executor3.length)))) {
         executor3.push(executor3.length);
         break;
      }
          let backiconk = 2.0;
          let episodesd: Array<any> = [406, 946, 276];
         executor3.push(parseInt(`${backiconk}`) << (Math.min(episodesd.length, 5)));
      for (let j = 0; j < 1; j++) {
         executor3.push(executor3.length - 2);
      }
      matchdetailbg6 /= Math.max(1, parseFloat(`${2}`));
      modele.set(fileN, 2);
      arrowupz = `${(String.fromCharCode(69,0) == fileN ? fileN.length : parseInt(`${iconsettingA}`))}`;
   for (let e = 0; e < 1; e++) {
      disconnectedo = new Map([[`${disconnectedo.size}`, parseInt(`${successr}`)]]);
   }
   while (1 <= (arrowupz.length | 5)) {
      arrowupz = `${(String.fromCharCode(90,0) == arrowupz ? parseInt(`${matchdetailbg6}`) : arrowupz.length)}`;
      break;
   }
       let clubZ = 2.0;
      let logoute = 8791166.0 >= clubZ;
      do {
          let mbjscommonl: Array<any> = [696, 284, 211];
         clubZ -= parseFloat(`${mbjscommonl.length / (Math.max(1, parseInt(`${clubZ}`)))}`);
         if (logoute) {
            break;
         }
      } while ((4.22 >= clubZ) && logoute);
      for (let k = 0; k < 1; k++) {
          let defaultroombgs = String.fromCharCode(120,95,55,48,95,117,114,118,101,0);
          let hometeamfieldc = 2.0;
          let ranks: Array<any> = [541, 391, 897];
          let libavutila = true;
          let googleb = String.fromCharCode(115,116,114,102,117,110,99,95,52,95,54,53,0);
         clubZ += parseFloat(`${2 & parseInt(`${clubZ}`)}`);
         defaultroombgs += `${(String.fromCharCode(55,0) == googleb ? defaultroombgs.length : googleb.length)}`;
         hometeamfieldc /= Math.max((String.fromCharCode(121,0) == googleb ? googleb.length : (libavutila ? 2 : 4)), 3);
         ranks.push(googleb.length);
         libavutila = googleb == defaultroombgs;
      }
         clubZ *= parseFloat(`${parseInt(`${clubZ}`)}`);
      modele = new Map([[`${disconnectedo.size}`, disconnectedo.size & parseInt(`${clubZ}`)]]);
   while (3.7 > (successr - modele.size)) {
      successr /= Math.max(parseInt(`${iconsettingA}`), 5);
      break;
   }
   let nativeS = modele.size <= 5045764;
   do {
      modele = new Map([[`${successr}`, parseInt(`${successr}`) & arrowupz.length]]);
      if (nativeS) {
         break;
      }
   } while ((report_ <= parseFloat(`${modele.size}`)) && nativeS);

    setIsLogoutDialogOpen(!isLogoutDialogOpen);
  };

  const toggleVersionDialog = () => {
       let container6 = 5.0;
    let classes4: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,115,95,53,95,56,53,0),false ], [String.fromCharCode(112,111,112,95,56,95,57,55,0),false ], [String.fromCharCode(102,114,101,105,114,95,97,95,49,56,0),false ]]);
    let iconwatchX = 5;
    let hejiL: Array<any> = [390, 478, 963];
    let libbufferO = 3.0;
    let mergerx: Map<any, any> = new Map([[String.fromCharCode(114,101,110,100,101,114,101,100,95,111,95,51,49,0),215], [String.fromCharCode(104,95,57,53,95,100,98,105,0),41]]);
    let brightnessG: Map<any, any> = new Map([[String.fromCharCode(112,95,56,53,95,97,100,106,117,115,116,105,110,103,0),272], [String.fromCharCode(100,101,118,101,108,111,112,109,101,110,116,95,100,95,51,50,0),130], [String.fromCharCode(115,97,109,112,108,101,114,101,100,117,99,116,105,111,110,95,98,95,54,48,0),897]]);
    let largesound2: Array<any> = [131, 715, 743];
    let armvaj: Map<any, any> = new Map([[String.fromCharCode(115,95,57,48,95,115,119,97,98,0),false ], [String.fromCharCode(115,101,116,102,105,101,108,100,95,121,95,52,49,0),true ], [String.fromCharCode(116,114,97,110,115,105,116,105,111,110,115,95,55,95,57,55,0),true ]]);
    let button1 = String.fromCharCode(104,95,55,50,95,104,115,98,0);
    let yellowcirclebg1 = 4.0;
       let notificationI = String.fromCharCode(106,95,53,52,95,112,114,101,99,0);
         notificationI += `${notificationI.length - 1}`;
         notificationI += `${3 * notificationI.length}`;
      for (let p = 0; p < 1; p++) {
         notificationI += `${notificationI.length}`;
      }
      largesound2.push(2);
       let iconadslinkW: Map<any, any> = new Map([[String.fromCharCode(107,97,116,95,102,95,51,57,0),812], [String.fromCharCode(104,97,114,100,95,106,95,50,55,0),793]]);
       let defaultlogo5 = String.fromCharCode(112,114,111,114,101,115,95,112,95,51,55,0);
          let libavutilp = 4;
          let termsG: Map<any, any> = new Map([[String.fromCharCode(98,95,57,57,95,101,108,101,109,101,110,116,0),986], [String.fromCharCode(108,112,99,101,110,118,95,99,95,52,53,0),499], [String.fromCharCode(102,105,116,116,101,100,95,53,95,56,54,0),65]]);
          let dycreator3: Map<any, any> = new Map([[String.fromCharCode(100,105,115,97,98,108,105,110,103,95,99,95,52,57,0),795], [String.fromCharCode(120,95,50,95,100,105,97,109,111,110,100,0),220], [String.fromCharCode(114,95,50,51,95,99,111,108,111,114,109,97,116,114,105,120,0),897]]);
         defaultlogo5 = "2";
         libavutilp >>= Math.min(Math.abs(termsG.size & 1), 1);
         termsG = new Map([[`${termsG.size}`, libavutilp | termsG.size]]);
         dycreator3 = new Map([[`${termsG.size}`, 1]]);
         iconadslinkW = new Map([[`${iconadslinkW.size}`, 1]]);
      if ((5 * iconadslinkW.size) >= 1 || (5 * iconadslinkW.size) >= 1) {
         defaultlogo5 += "3";
      }
      let k_imaged = iconadslinkW.size <= 5369478;
      do {
         iconadslinkW.set(`${defaultlogo5}`, iconadslinkW.size);
         if (k_imaged) {
            break;
         }
      } while (k_imaged && (5 <= (iconadslinkW.size & defaultlogo5.length) && (defaultlogo5.length & 5) <= 2));
          let exampleimageB = 5.0;
         iconadslinkW = new Map([[`${exampleimageB}`, defaultlogo5.length | 2]]);
       let moreC = String.fromCharCode(103,97,105,110,115,95,97,95,49,52,0);
       let bufferp = String.fromCharCode(113,95,50,48,95,120,117,118,109,118,115,0);
      brightnessG = new Map([[`${armvaj.size}`, armvaj.size * 3]]);
       let sansd = String.fromCharCode(108,95,51,55,95,116,114,97,110,115,109,105,115,115,105,111,110,0);
         sansd = `${sansd.length}`;
      let utilsO = 5228326 >= sansd.length;
      do {
          let fullscreenminS = true;
         sansd += "3";
         if (utilsO) {
            break;
         }
      } while ((sansd != String.fromCharCode(66,0) || sansd.length < 4) && utilsO);
      while (sansd.length > sansd.length) {
         sansd += `${3 >> (Math.min(2, sansd.length))}`;
         break;
      }
      hejiL.push(parseInt(`${libbufferO}`));
      largesound2 = [3 ^ classes4.size];
      container6 /= Math.max(parseFloat(`${classes4.size - 2}`), 2);
   if (mergerx.get(`${largesound2.length}`) == null) {
      largesound2.push(2);
   }
      armvaj = new Map([[`${largesound2.length}`, largesound2.length & 2]]);
   for (let t = 0; t < 2; t++) {
      brightnessG = new Map([[`${classes4.size}`, 3]]);
   }
   let greytickq = 5836163 <= armvaj.size;
   do {
      armvaj.set(`${iconwatchX}`, 2);
      if (greytickq) {
         break;
      }
   } while (greytickq && (Array.from(armvaj.keys()).includes(`${libbufferO}`)));
       let reactnativeratingsJ = String.fromCharCode(113,95,51,48,95,104,97,110,110,105,110,103,0);
       let topicT = String.fromCharCode(112,97,103,105,110,103,95,116,95,50,48,0);
         topicT += "1";
         topicT += `${(String.fromCharCode(52,0) == topicT ? reactnativeratingsJ.length : topicT.length)}`;
      while (topicT.length < reactnativeratingsJ.length) {
          let gesturese = 4;
          let libfbjniT = 4.0;
          let mbjscommonL = 4.0;
          let libmapbufferjniv = 4;
         reactnativeratingsJ = `${libmapbufferjniv}`;
         gesturese ^= parseInt(`${libfbjniT}`) << (Math.min(2, Math.abs(parseInt(`${mbjscommonL}`))));
         libfbjniT -= parseFloat(`${gesturese << (Math.min(1, Math.abs(3)))}`);
         mbjscommonL += 2;
         libmapbufferjniv -= 1;
         break;
      }
       let application0 = 3.0;
       let currentc = 4.0;
         application0 /= Math.max(reactnativeratingsJ.length, 3);
          let penaltyw: Array<any> = [940, 242, 512];
          let weatherk = 0;
          let securityo = String.fromCharCode(97,114,99,116,105,99,95,114,95,52,49,0);
         application0 -= (securityo == String.fromCharCode(110,0) ? securityo.length : penaltyw.length);
         penaltyw.push(2 + weatherk);
         weatherk <<= Math.min(Math.abs(weatherk), 3);
      hejiL.push(hejiL.length + parseInt(`${libbufferO}`));
   if (3 > (3 ^ iconwatchX) || (armvaj.size ^ 3) > 4) {
      iconwatchX /= Math.max(2 * parseInt(`${container6}`), 2);
   }
      container6 += parseFloat(`${parseInt(`${container6}`)}`);
   if (5 > (5 & iconwatchX)) {
      iconwatchX /= Math.max(hejiL.length | 2, 4);
   }
   let orangei = 9808900.0 >= libbufferO;
   do {
       let iconarrowrightwhitez: Map<any, any> = new Map([[String.fromCharCode(103,95,49,57,95,97,99,115,107,105,112,0),112], [String.fromCharCode(110,95,54,48,95,114,100,112,99,109,0),100]]);
       let debugc: Array<any> = [19, 203, 563];
       let detailB = String.fromCharCode(122,101,114,111,95,113,95,49,48,48,0);
       let recommendationm: Map<any, any> = new Map([[String.fromCharCode(122,95,51,53,95,100,105,115,97,98,108,101,114,0),182], [String.fromCharCode(101,109,109,105,110,116,114,105,110,95,48,95,55,55,0),427]]);
       let attributedstringm = 3.0;
      if ((recommendationm.size << (Math.min(5, debugc.length))) == 3 || 1 == (3 << (Math.min(2, debugc.length)))) {
          let libswresampleZ = String.fromCharCode(98,95,57,50,95,109,98,117,102,0);
          let xvod5 = String.fromCharCode(112,95,49,95,115,117,112,101,114,110,111,100,101,0);
         debugc.push((libswresampleZ == String.fromCharCode(78,0) ? detailB.length : libswresampleZ.length));
         xvod5 = `${xvod5.length}`;
      }
          let member8 = String.fromCharCode(97,95,55,49,95,114,101,99,114,101,97,116,101,0);
          let dialogl = String.fromCharCode(117,110,115,111,108,118,101,100,95,117,95,50,0);
         debugc.push(3);
         member8 += `${member8.length}`;
         dialogl = `${member8.length << (Math.min(3, dialogl.length))}`;
       let videovarQ: Array<any> = [124, 254];
       let icontransferclubc: Array<any> = [265, 904];
         recommendationm.set(`${recommendationm.size}`, recommendationm.size);
      while ((debugc.length * recommendationm.size) <= 2 || 1 <= (recommendationm.size * 2)) {
         debugc.push(icontransferclubc.length * parseInt(`${attributedstringm}`));
         break;
      }
         videovarQ.push(icontransferclubc.length * videovarQ.length);
         icontransferclubc.push(videovarQ.length);
      if ((detailB.length % (Math.max(4, 4))) == 5 || 3 == (detailB.length % 4)) {
          let whitetickg: Map<any, any> = new Map([[String.fromCharCode(106,95,50,54,95,112,114,105,111,114,0),515], [String.fromCharCode(110,111,116,101,95,105,95,51,48,0),941]]);
          let termsk = 2;
          let basketballmatchdetailbgC = 0;
          let iconwatchnowv = 4;
          let info0 = 5.0;
         detailB += `${termsk % 1}`;
         whitetickg.set(`${basketballmatchdetailbgC}`, basketballmatchdetailbgC % (Math.max(iconwatchnowv, 2)));
         termsk += whitetickg.size;
         iconwatchnowv |= iconwatchnowv & 2;
         info0 += parseFloat(`${parseInt(`${info0}`)}`);
      }
       let mbbidf = String.fromCharCode(116,114,97,110,115,112,97,114,101,110,116,95,111,95,54,55,0);
       let hoverN = String.fromCharCode(100,95,57,55,95,114,101,112,108,97,121,101,114,0);
      for (let a = 0; a < 3; a++) {
         attributedstringm *= (parseFloat(`${String.fromCharCode(108,0) == mbbidf ? debugc.length : mbbidf.length}`));
      }
      if (1.58 < (attributedstringm / (Math.max(5.39, 8))) || (parseInt(`${attributedstringm}`) / (Math.max(1, videovarQ.length))) < 1) {
         videovarQ = [recommendationm.size];
      }
         videovarQ = [hoverN.length ^ 1];
          let ewardedN: Map<any, any> = new Map([[String.fromCharCode(108,95,54,54,95,115,116,114,105,115,116,114,0),147], [String.fromCharCode(105,112,102,115,95,97,95,53,53,0),730]]);
          let iconclosewhite2 = 3;
          let clockv: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,95,114,95,49,53,0),String.fromCharCode(114,95,56,50,95,116,111,117,99,104,101,115,0)], [String.fromCharCode(122,95,57,54,95,104,97,110,100,108,101,100,0),String.fromCharCode(112,108,117,114,97,108,105,122,101,100,95,120,95,57,57,0)]]);
         detailB = `${mbbidf.length}`;
         ewardedN = new Map([[`${clockv.size}`, clockv.size & ewardedN.size]]);
         iconclosewhite2 |= ewardedN.size << (Math.min(Math.abs(1), 1));
         iconarrowrightwhitez.set(hoverN, hoverN.length + 1);
          let awayicon1 = String.fromCharCode(106,97,99,111,98,105,95,114,95,49,50,0);
          let chinay: Array<any> = [767, 689];
         icontransferclubc.push(1 * chinay.length);
         awayicon1 += `${1 - awayicon1.length}`;
         chinay = [1];
      libbufferO += detailB.length & 1;
      if (orangei) {
         break;
      }
   } while (orangei && (largesound2.length > 1));
   for (let d = 0; d < 1; d++) {
       let sinaq = 4.0;
       let singleT = false;
         sinaq /= Math.max(((singleT ? 3 : 1) | parseInt(`${sinaq}`)), 2);
       let pressurej = String.fromCharCode(97,119,97,121,95,50,95,57,50,0);
       let libreactnativeblobN = String.fromCharCode(105,95,49,57,95,122,111,111,109,105,110,103,0);
          let defaultprofilepicz = 3.0;
         libreactnativeblobN = `${libreactnativeblobN.length}`;
         defaultprofilepicz += 1;
      for (let d = 0; d < 2; d++) {
         singleT = !singleT;
      }
         singleT = sinaq == 86.7 && singleT;
         sinaq /= Math.max(2, 5);
      libbufferO *= brightnessG.size;
   }
      mergerx = new Map([[`${mergerx.size}`, mergerx.size << (Math.min(largesound2.length, 5))]]);
      hejiL = [1];
   if (2 < (5 & mergerx.size) || (5 & mergerx.size) < 5) {
      mergerx.set(`${iconwatchX}`, brightnessG.size);
   }
   let dependencyW = iconwatchX >= 6493930;
   do {
      iconwatchX *= 2;
      if (dependencyW) {
         break;
      }
   } while (dependencyW && ((libbufferO / 4.91) <= 4.2 && 4.91 <= (iconwatchX / (Math.max(libbufferO, 1)))));
      classes4.set(`${largesound2.length}`, classes4.size << (Math.min(largesound2.length, 1)));
      hejiL.push(mergerx.size);
       let expandL: Array<any> = [860, 672, 147];
       let iconnewsshare_ = String.fromCharCode(116,105,110,116,95,115,95,53,53,0);
         expandL.push(expandL.length | 1);
       let modelN: Array<any> = [589, 54];
       let core1: Array<any> = [681, 605, 0];
      let basketballplayerplaceholderw = 7365022 <= core1.length;
      do {
         core1 = [2];
         if (basketballplayerplaceholderw) {
            break;
         }
      } while ((2 > (core1.length + 5) || 3 > (core1.length + 5)) && basketballplayerplaceholderw);
          let iconcloseS = 4;
         iconnewsshare_ = "3";
         iconcloseS -= iconcloseS;
      if ((5 & iconnewsshare_.length) == 4) {
         expandL.push(expandL.length | 1);
      }
       let emojiO = String.fromCharCode(101,109,98,101,100,100,105,110,103,95,53,95,55,48,0);
       let homeplayerH = String.fromCharCode(121,95,50,51,95,97,118,117,116,105,108,0);
      container6 *= parseFloat(`${1 + classes4.size}`);

    setIsVersionDialogOpen(!isVersionDialogOpen);
  };
  const toggleClearDialog = () => {
       let refreshborderlessC = true;
    let clearQ = String.fromCharCode(99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,95,113,95,53,48,0);
    let refreshc = false;
    let k_view3 = String.fromCharCode(103,95,49,55,95,108,111,117,100,110,101,115,115,0);
    let componentN = 5.0;
    let basketballl = String.fromCharCode(115,119,102,104,97,115,104,95,109,95,57,53,0);
    let regengd: Array<any> = [795, 507];
    let reactnavigationL: Array<any> = [812, 28];
    let yellowtoredM = String.fromCharCode(118,95,52,55,95,114,101,100,105,114,101,99,116,111,114,0);
    let sharewhitek = String.fromCharCode(114,95,49,53,95,113,110,111,115,0);
    let goalv: Map<any, any> = new Map([[String.fromCharCode(99,111,117,110,116,101,114,115,95,115,95,53,49,0),String.fromCharCode(104,95,51,48,95,115,108,105,100,105,110,103,0)], [String.fromCharCode(99,111,109,112,97,99,116,101,100,95,116,95,55,55,0),String.fromCharCode(103,95,56,48,95,119,114,105,116,101,0)], [String.fromCharCode(120,102,101,114,95,106,95,51,52,0),String.fromCharCode(101,118,117,116,105,108,95,100,95,52,48,0)]]);
    let ewardedz: Array<any> = [849, 729];
    let libmapbufferjnii = String.fromCharCode(111,95,53,50,95,114,101,110,100,101,114,98,117,102,102,101,114,0);
   for (let h = 0; h < 2; h++) {
       let checkboxM = String.fromCharCode(118,95,55,54,95,120,99,101,112,116,105,111,110,0);
      let settingsL = String.fromCharCode(97,121,57,116,104,115,51,0) == checkboxM;
      do {
          let tickedx: Array<any> = [String.fromCharCode(101,95,56,51,95,120,98,105,110,0), String.fromCharCode(100,101,102,105,110,105,116,105,111,110,95,110,95,57,50,0)];
          let inviteW = false;
          let default_nkN = String.fromCharCode(115,112,97,114,115,101,110,101,115,115,95,119,95,51,57,0);
          let configd = 2;
         checkboxM += `${2 - default_nkN.length}`;
         tickedx = [tickedx.length];
         inviteW = tickedx.length <= 67;
         default_nkN += "3";
         configd ^= (configd << (Math.min(4, Math.abs((inviteW ? 4 : 3)))));
         if (settingsL) {
            break;
         }
      } while (settingsL && (checkboxM != String.fromCharCode(80,0)));
         checkboxM += `${(checkboxM == String.fromCharCode(86,0) ? checkboxM.length : checkboxM.length)}`;
      if (2 <= checkboxM.length) {
         checkboxM += `${1 - checkboxM.length}`;
      }
      yellowtoredM = `${((refreshc ? 2 : 3))}`;
   }
   let downs = String.fromCharCode(111,54,52,113,114,118,95,106,0) == clearQ;
   do {
      clearQ = `${clearQ.length}`;
      if (downs) {
         break;
      }
   } while ((!refreshborderlessC) && downs);
   if (!basketballl.includes(`${regengd.length}`)) {
      basketballl += `${1 << (Math.min(2, regengd.length))}`;
   }
   if (1 == yellowtoredM.length) {
       let promotion5 = 4.0;
       let stationsj = String.fromCharCode(112,95,52,55,95,105,110,99,111,110,115,105,115,116,101,110,99,121,0);
       let gemfileW = 5.0;
      for (let o = 0; o < 1; o++) {
         gemfileW -= (String.fromCharCode(98,0) == stationsj ? stationsj.length : parseInt(`${promotion5}`));
      }
      for (let v = 0; v < 3; v++) {
         gemfileW /= Math.max(3, 3);
      }
          let iconsubssuccess5: Map<any, any> = new Map([[String.fromCharCode(108,95,55,48,95,99,111,110,116,114,97,105,110,101,100,0),654], [String.fromCharCode(102,95,54,53,95,100,101,105,110,116,101,114,108,101,97,118,101,0),271], [String.fromCharCode(102,111,114,119,97,114,100,115,95,49,95,50,51,0),473]]);
          let reactnativejsm = true;
          let runtimeschedulerL = 2;
         promotion5 -= parseFloat(`${iconsubssuccess5.size}`);
         iconsubssuccess5 = new Map([[`${runtimeschedulerL}`, 2]]);
         reactnativejsm = (runtimeschedulerL ^ runtimeschedulerL) <= 51;
         stationsj += `${parseInt(`${promotion5}`) | 1}`;
      let calendarq = promotion5 >= 8144073.0;
      do {
         promotion5 /= Math.max(parseFloat(`${parseInt(`${gemfileW}`) >> (Math.min(stationsj.length, 4))}`), 1);
         if (calendarq) {
            break;
         }
      } while ((parseInt(`${promotion5}`) == stationsj.length) && calendarq);
          let preview_ = 1;
          let templateprocessorP = String.fromCharCode(115,101,116,116,105,116,108,101,95,108,95,56,50,0);
          let animationd = 2.0;
         stationsj += "3";
         preview_ <<= Math.min(Math.abs(templateprocessorP.length - parseInt(`${animationd}`)), 3);
         templateprocessorP += `${preview_}`;
         animationd += (String.fromCharCode(67,0) == templateprocessorP ? parseInt(`${animationd}`) : templateprocessorP.length);
       let defaultplayerimgm = String.fromCharCode(102,114,97,109,101,115,101,116,116,101,114,95,120,95,56,49,0);
       let embedH = String.fromCharCode(108,95,56,48,95,114,101,116,117,114,110,105,110,103,0);
      for (let x = 0; x < 1; x++) {
          let base9 = String.fromCharCode(119,95,55,51,95,115,117,98,115,116,97,116,101,0);
         defaultplayerimgm += `${base9.length}`;
      }
          let watchn = 2.0;
          let carousel4 = String.fromCharCode(97,95,56,48,95,112,101,110,100,105,110,103,115,0);
          let dependenciesO = 3;
         promotion5 *= (parseFloat(`${defaultplayerimgm == String.fromCharCode(113,0) ? defaultplayerimgm.length : embedH.length}`));
         watchn *= parseFloat(`${dependenciesO}`);
         carousel4 = `${2 & parseInt(`${watchn}`)}`;
         dependenciesO <<= Math.min(1, Math.abs(dependenciesO << (Math.min(Math.abs(3), 1))));
      yellowtoredM += `${2 * stationsj.length}`;
   }
      yellowtoredM = `${((refreshborderlessC ? 2 : 1) & (refreshc ? 1 : 2))}`;
      sharewhitek += `${((refreshborderlessC ? 4 : 2))}`;
   while (!sharewhitek.includes(`${refreshc}`)) {
      sharewhitek += `${((refreshborderlessC ? 5 : 3))}`;
      break;
   }
   let analyticm = String.fromCharCode(109,110,98,108,112,49,54,101,0) == yellowtoredM;
   do {
      yellowtoredM += `${((refreshc ? 1 : 2))}`;
      if (analyticm) {
         break;
      }
   } while ((4 <= sharewhitek.length) && analyticm);
   while (regengd.length >= yellowtoredM.length) {
       let product8: Array<any> = [String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,95,111,95,56,48,0), String.fromCharCode(112,97,114,115,105,110,103,95,97,95,51,48,0)];
       let selectb = 1.0;
          let fulla = String.fromCharCode(117,110,98,97,110,95,120,95,54,57,0);
          let reminderd = 4.0;
          let layoutf = String.fromCharCode(108,97,121,101,114,105,110,103,95,98,95,50,54,0);
         selectb *= product8.length - 1;
         fulla = `${2 + layoutf.length}`;
         reminderd -= parseFloat(`${2}`);
         layoutf += `${(String.fromCharCode(101,0) == fulla ? fulla.length : parseInt(`${reminderd}`))}`;
      for (let k = 0; k < 3; k++) {
         selectb /= Math.max(1, 1);
      }
      for (let p = 0; p < 1; p++) {
         product8 = [product8.length];
      }
      let subtexte = selectb <= 7343770.0;
      do {
         selectb *= 3;
         if (subtexte) {
            break;
         }
      } while ((2.5 <= selectb) && subtexte);
          let details = 1;
          let mapbufferZ = 3.0;
         product8 = [3 + parseInt(`${mapbufferZ}`)];
         details |= details;
         mapbufferZ /= Math.max(parseFloat(`${details}`), 2);
       let middler = String.fromCharCode(116,95,56,49,95,105,109,109,117,116,97,98,108,101,0);
      yellowtoredM += `${((refreshborderlessC ? 3 : 1) - parseInt(`${selectb}`))}`;
      break;
   }
      componentN *= parseFloat(`${regengd.length + 3}`);
      sharewhitek += "3";
   for (let f = 0; f < 3; f++) {
       let controlsR = 4;
         controlsR >>= Math.min(Math.abs(1 + controlsR), 1);
       let condensedC = false;
       let statsnomoredatan = true;
      while (!statsnomoredatan && 2 >= (controlsR & 3)) {
         statsnomoredatan = statsnomoredatan && !condensedC;
         break;
      }
      refreshborderlessC = basketballl.includes(`${componentN}`);
   }
   for (let s = 0; s < 3; s++) {
       let eactg = String.fromCharCode(107,95,57,57,95,117,110,109,117,116,101,0);
       let footballfield1: Map<any, any> = new Map([[String.fromCharCode(104,95,51,55,95,97,99,111,108,111,114,0),String.fromCharCode(100,101,99,108,97,114,101,95,101,95,51,56,0)], [String.fromCharCode(104,111,114,105,122,111,110,116,97,108,95,52,95,54,55,0),String.fromCharCode(118,95,53,48,95,115,117,112,112,111,114,116,97,98,108,101,0)], [String.fromCharCode(110,95,52,50,95,105,112,97,100,0),String.fromCharCode(108,97,110,103,117,97,103,101,95,120,95,49,49,0)]]);
      if (2 <= (footballfield1.size ^ 3)) {
          let sportS = 4;
         eactg += `${eactg.length << (Math.min(Math.abs(3), 4))}`;
         sportS <<= Math.min(5, Math.abs(sportS));
      }
      for (let g = 0; g < 2; g++) {
          let shielddoneM: Array<any> = [997, 477];
          let detailsQ = String.fromCharCode(108,95,53,48,95,104,111,116,0);
          let downloaderx = 0.0;
          let umeng1 = String.fromCharCode(99,104,97,114,115,95,105,95,53,55,0);
         eactg = `${shielddoneM.length}`;
         shielddoneM = [2];
         detailsQ = `${(umeng1 == String.fromCharCode(48,0) ? parseInt(`${downloaderx}`) : umeng1.length)}`;
         downloaderx /= Math.max((String.fromCharCode(86,0) == umeng1 ? umeng1.length : detailsQ.length), 1);
      }
          let tempv = String.fromCharCode(100,101,99,111,114,97,116,105,111,110,115,95,122,95,49,51,0);
         footballfield1 = new Map([[`${footballfield1.size}`, footballfield1.size]]);
         tempv += `${tempv.length}`;
       let package_cm = String.fromCharCode(117,95,55,55,95,118,105,98,114,97,116,101,0);
       let basketballiconR = String.fromCharCode(121,95,54,56,95,112,111,115,116,114,111,116,97,116,101,0);
      for (let p = 0; p < 3; p++) {
         package_cm = `${eactg.length}`;
      }
         eactg += `${2 & eactg.length}`;
      regengd = [(reactnavigationL.length + (refreshc ? 5 : 4))];
   }
   while (k_view3 != basketballl) {
       let updatesh = 0.0;
       let goal7 = 1;
       let privatechatbg4: Map<any, any> = new Map([[String.fromCharCode(120,95,54,56,95,97,108,105,103,110,109,101,110,116,0),200], [String.fromCharCode(102,111,117,114,120,95,116,95,49,0),243]]);
       let containerM = 5.0;
       let actionsT = String.fromCharCode(118,111,114,98,105,115,95,116,95,51,0);
      for (let q = 0; q < 3; q++) {
         goal7 >>= Math.min(Math.abs(privatechatbg4.size), 1);
      }
          let leaguev = String.fromCharCode(116,111,111,108,98,111,120,95,117,95,53,49,0);
         privatechatbg4 = new Map([[`${containerM}`, parseInt(`${containerM}`)]]);
         leaguev = `${leaguev.length}`;
          let playd = String.fromCharCode(109,111,98,105,117,115,95,57,95,51,53,0);
          let privacyS = 2;
          let owngoala = String.fromCharCode(113,117,97,110,116,105,122,101,114,95,116,95,57,53,0);
         goal7 -= goal7 + 3;
         playd += `${(playd == String.fromCharCode(110,0) ? owngoala.length : playd.length)}`;
         privacyS &= owngoala.length;
      while (!Array.from(privatechatbg4.values()).includes(goal7)) {
         privatechatbg4.set(actionsT, 3);
         break;
      }
      let predictiondefaulta = actionsT == String.fromCharCode(98,95,112,111,49,0);
      do {
         actionsT = `${privatechatbg4.size & parseInt(`${containerM}`)}`;
         if (predictiondefaulta) {
            break;
         }
      } while (predictiondefaulta && (!actionsT.endsWith(`${privatechatbg4.size}`)));
         updatesh *= parseInt(`${updatesh}`) >> (Math.min(4, Math.abs(goal7)));
      for (let q = 0; q < 3; q++) {
          let libreactperfloggerjniO = String.fromCharCode(119,101,105,103,104,116,105,110,103,95,48,95,49,50,0);
          let delegate_z9l = String.fromCharCode(113,117,97,110,116,105,122,101,95,117,95,57,55,0);
          let libcxxcomponentsq = 2.0;
         goal7 += parseInt(`${updatesh}`);
         libreactperfloggerjniO = `${delegate_z9l.length * parseInt(`${libcxxcomponentsq}`)}`;
         delegate_z9l += `${parseInt(`${libcxxcomponentsq}`) % 1}`;
      }
      for (let j = 0; j < 1; j++) {
         containerM *= parseInt(`${updatesh}`) * parseInt(`${containerM}`);
      }
      for (let t = 0; t < 3; t++) {
         actionsT = `${goal7 / 1}`;
      }
         actionsT += `${parseInt(`${containerM}`) - actionsT.length}`;
      let canvas4 = 5773815.0 <= updatesh;
      do {
         updatesh *= 3 >> (Math.min(2, Math.abs(goal7)));
         if (canvas4) {
            break;
         }
      } while (canvas4 && ((3 % (Math.max(10, actionsT.length))) == 1 && 4 == (3 << (Math.min(1, actionsT.length)))));
         goal7 -= 3;
      while (3 <= privatechatbg4.size) {
         privatechatbg4 = new Map([[`${updatesh}`, parseInt(`${updatesh}`)]]);
         break;
      }
      for (let r = 0; r < 2; r++) {
          let football7 = 2.0;
          let iconadslinkf = String.fromCharCode(104,95,56,95,116,111,110,101,109,97,112,0);
         actionsT = "1";
         football7 *= parseFloat(`${parseInt(`${football7}`) / 2}`);
         iconadslinkf += `${parseInt(`${football7}`)}`;
      }
          let expandt = String.fromCharCode(104,95,57,53,95,100,108,105,100,120,0);
          let catagoryg = String.fromCharCode(108,111,97,116,95,51,95,56,49,0);
          let catagoryZ = String.fromCharCode(105,110,116,95,119,95,52,0);
         actionsT = `${expandt.length % 3}`;
         expandt += `${2 - catagoryg.length}`;
         catagoryg = `${3 >> (Math.min(1, catagoryZ.length))}`;
         catagoryZ += `${catagoryZ.length / (Math.max(3, catagoryg.length))}`;
      basketballl += "2";
      break;
   }
   if (basketballl.endsWith(`${reactnavigationL.length}`)) {
      reactnavigationL.push(sharewhitek.length ^ k_view3.length);
   }
   while (5 < basketballl.length) {
      clearQ += `${reactnavigationL.length | 2}`;
      break;
   }
       let chartV = String.fromCharCode(108,95,52,95,99,117,109,117,108,97,116,105,118,101,0);
         chartV += `${chartV.length}`;
         chartV = `${2 >> (Math.min(1, chartV.length))}`;
         chartV = `${chartV.length - chartV.length}`;
      refreshc = !refreshborderlessC;
   for (let o = 0; o < 1; o++) {
       let team5 = 1.0;
       let internetR = String.fromCharCode(103,95,53,51,95,97,97,115,99,0);
       let libfbjniX: Array<any> = [712, 817];
      for (let y = 0; y < 3; y++) {
          let progressO = String.fromCharCode(115,117,98,112,97,99,107,101,116,115,95,97,95,55,55,0);
         team5 *= progressO.length | 3;
      }
      while (4 < (libfbjniX.length >> (Math.min(internetR.length, 2))) && 3 < (libfbjniX.length >> (Math.min(Math.abs(4), 1)))) {
          let readW: Array<any> = [413, 275];
          let libbuffer3: Array<any> = [489, 42];
          let ajaxL: Map<any, any> = new Map([[String.fromCharCode(104,111,116,105,122,111,110,116,108,95,115,95,51,54,0),683], [String.fromCharCode(115,112,97,110,95,48,95,54,54,0),155]]);
         internetR += `${readW.length}`;
         readW = [ajaxL.size | 3];
         libbuffer3.push(2 + libbuffer3.length);
         ajaxL.set(`${libbuffer3.length}`, libbuffer3.length | 2);
         break;
      }
         internetR += `${1 * libfbjniX.length}`;
         team5 /= Math.max(internetR.length, 4);
         libfbjniX = [3];
      if (4 > internetR.length) {
         internetR = `${parseInt(`${team5}`)}`;
      }
      while (4 == (libfbjniX.length * internetR.length)) {
         libfbjniX.push(parseInt(`${team5}`) & internetR.length);
         break;
      }
         internetR += `${1 << (Math.min(3, Math.abs(parseInt(`${team5}`))))}`;
      let icondefaultthumbnaila = team5 >= 7814693.0;
      do {
          let schedulerg = 5.0;
          let countdownd = 2;
          let bodanT = String.fromCharCode(102,95,54,51,95,114,101,102,105,110,105,110,103,0);
          let libnmsW = 5.0;
          let manifestj = 2.0;
         team5 *= internetR.length << (Math.min(1, Math.abs(parseInt(`${schedulerg}`))));
         schedulerg += parseFloat(`${3}`);
         countdownd <<= Math.min(Math.abs(parseInt(`${manifestj}`) >> (Math.min(5, Math.abs(2)))), 4);
         bodanT += `${parseInt(`${libnmsW}`)}`;
         libnmsW -= parseInt(`${libnmsW}`) - parseInt(`${manifestj}`);
         if (icondefaultthumbnaila) {
            break;
         }
      } while ((4 < (5 & internetR.length) && (5 / (Math.max(8, internetR.length))) < 2) && icondefaultthumbnaila);
      basketballl += "2";
   }
   let klevinf = String.fromCharCode(108,51,109,57,0) == basketballl;
   do {
       let coreb: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,104,101,97,100,95,56,95,53,52,0),572], [String.fromCharCode(97,108,108,114,103,98,95,114,95,49,52,0),463]]);
       let analyticI = 4.0;
       let privacyc = String.fromCharCode(101,95,57,56,95,98,119,114,105,116,101,0);
       let libapminsightbD = String.fromCharCode(101,95,55,53,95,100,105,115,97,112,112,101,97,114,101,100,0);
       let types3: Array<any> = [143, 587];
      for (let y = 0; y < 3; y++) {
         privacyc = `${coreb.size & privacyc.length}`;
      }
      while (!libapminsightbD.startsWith(`${analyticI}`)) {
         libapminsightbD = `${types3.length}`;
         break;
      }
         libapminsightbD += `${3 + coreb.size}`;
         privacyc += `${1 / (Math.max(1, privacyc.length))}`;
         libapminsightbD = `${libapminsightbD.length - coreb.size}`;
         types3 = [libapminsightbD.length - coreb.size];
      if ((3.42 / (Math.max(6, analyticI))) == 5.99 && 4.90 == (analyticI / (Math.max(3.42, 9)))) {
         libapminsightbD += `${2 & libapminsightbD.length}`;
      }
         types3 = [parseInt(`${analyticI}`)];
      for (let r = 0; r < 1; r++) {
         libapminsightbD = `${coreb.size & 3}`;
      }
         libapminsightbD += `${privacyc.length}`;
          let blacklistb = false;
         analyticI -= parseFloat(`${1}`);
         types3 = [(String.fromCharCode(49,0) == privacyc ? coreb.size : privacyc.length)];
          let lessr = String.fromCharCode(102,108,97,116,95,107,95,57,57,0);
          let graphicsv = String.fromCharCode(97,110,103,108,101,100,95,52,95,49,50,0);
          let securityT = String.fromCharCode(108,95,52,52,95,115,101,116,102,105,101,108,100,0);
         types3.push(libapminsightbD.length / (Math.max(7, coreb.size)));
         lessr += `${graphicsv.length}`;
         graphicsv += `${securityT.length}`;
         securityT += `${(String.fromCharCode(117,0) == lessr ? lessr.length : graphicsv.length)}`;
          let networkb = false;
         types3.push(types3.length >> (Math.min(Math.abs(1), 1)));
         networkb = networkb && !networkb;
      if (3 < libapminsightbD.length) {
         types3.push(3 | coreb.size);
      }
      basketballl += `${((refreshc ? 2 : 2))}`;
      if (klevinf) {
         break;
      }
   } while ((basketballl.length <= 1) && klevinf);
      regengd = [(String.fromCharCode(114,0) == clearQ ? clearQ.length : (refreshc ? 5 : 3))];
      basketballl += `${2 & regengd.length}`;
       let tickd = 0.0;
       let penaltymatchiconP = true;
       let reminderE = 2.0;
         tickd += (parseInt(`${tickd}`) & (penaltymatchiconP ? 1 : 4));
         penaltymatchiconP = !penaltymatchiconP;
         reminderE /= Math.max(1 + parseInt(`${tickd}`), 5);
      while (penaltymatchiconP) {
          let iconedit7: Map<any, any> = new Map([[String.fromCharCode(112,111,105,110,116,95,105,95,54,49,0),String.fromCharCode(109,95,56,57,95,103,110,114,101,0)], [String.fromCharCode(110,111,119,95,114,95,51,52,0),String.fromCharCode(97,115,115,111,99,105,97,116,105,111,110,95,99,95,56,55,0)], [String.fromCharCode(110,95,53,49,95,115,99,114,117,98,98,101,114,0),String.fromCharCode(116,116,116,95,112,95,50,49,0)]]);
         reminderE -= iconedit7.size >> (Math.min(Math.abs(3), 5));
         break;
      }
      let taiwan0 = 4989785.0 >= tickd;
      do {
         tickd -= ((penaltymatchiconP ? 1 : 4) - parseInt(`${reminderE}`));
         if (taiwan0) {
            break;
         }
      } while (taiwan0 && ((reminderE + 3) <= 3.84));
         reminderE += parseInt(`${tickd}`);
      for (let o = 0; o < 1; o++) {
         tickd += parseInt(`${reminderE}`);
      }
      for (let a = 0; a < 2; a++) {
          let yellowD: Array<any> = [931, 388, 935];
          let rootd = false;
         tickd += ((penaltymatchiconP ? 5 : 2) * 2);
         yellowD = [3 | yellowD.length];
         rootd = yellowD.includes(yellowD[yellowD.length - 1]);
      }
      let resendD = penaltymatchiconP ? !penaltymatchiconP : penaltymatchiconP;
      do {
         penaltymatchiconP = !penaltymatchiconP;
         if (resendD) {
            break;
         }
      } while ((tickd >= 4.51) && resendD);
      ewardedz.push(((refreshc ? 3 : 4) ^ parseInt(`${reminderE}`)));
   if (1 >= basketballl.length) {
       let hejih = String.fromCharCode(101,95,53,57,95,101,110,116,105,116,105,116,121,0);
       let malaysiak = 0;
          let firebaseX = 5.0;
          let fullA = String.fromCharCode(120,116,101,97,95,97,95,56,51,0);
          let predictionbuttonB = 1;
         malaysiak /= Math.max(4, malaysiak);
         firebaseX /= Math.max(3, parseFloat(`${predictionbuttonB | fullA.length}`));
         fullA += `${1 >> (Math.min(Math.abs(predictionbuttonB), 3))}`;
          let predictionarrowD = false;
          let videovarn = String.fromCharCode(100,117,97,108,95,51,95,53,49,0);
         malaysiak ^= 3;
         predictionarrowD = videovarn.length == 17;
         videovarn = `${(videovarn == String.fromCharCode(90,0) ? (predictionarrowD ? 1 : 1) : videovarn.length)}`;
       let controlG = 3;
       let mbjscommonp = 0;
      while ((hejih.length & 1) > 3 && (1 & hejih.length) > 1) {
         hejih = `${hejih.length - 2}`;
         break;
      }
         mbjscommonp /= Math.max(hejih.length, 2);
      if ((controlG & mbjscommonp) > 2 && 2 > (mbjscommonp & 2)) {
         controlG %= Math.max(5, 1);
      }
      basketballl = `${(2 + (refreshborderlessC ? 5 : 4))}`;
   }

    setIsClearDialogOpen(!isClearDialogOpen);
  };
  const toggleRemoveAccountDialog = () => {
       let homex = 2;
    let wcopy_450: Array<any> = [593, 442];
    let encryptx: Map<any, any> = new Map([[String.fromCharCode(110,95,51,54,95,116,111,114,103,98,0),false ], [String.fromCharCode(122,95,50,50,95,115,98,114,100,115,112,0),false ]]);
    let iconuserl: Array<any> = [String.fromCharCode(99,97,110,99,101,108,108,97,98,108,101,95,117,95,51,52,0), String.fromCharCode(113,95,52,56,95,103,102,109,117,108,0), String.fromCharCode(97,103,114,101,101,109,101,110,116,95,102,95,52,55,0)];
    let main_rS = true;
    let accepted0 = 1;
    let notificationC = String.fromCharCode(106,95,53,56,95,116,111,107,101,110,110,102,116,116,120,0);
    let homeinactiveL = 3;
    let graphd = 5;
    let analyticJ: Map<any, any> = new Map([[String.fromCharCode(114,101,115,99,104,101,100,117,108,101,95,122,95,56,53,0),String.fromCharCode(114,101,115,112,95,50,95,57,56,0)], [String.fromCharCode(97,116,97,98,108,101,115,95,105,95,51,0),String.fromCharCode(102,95,49,56,95,115,117,112,112,108,121,0)]]);
    let darkP = String.fromCharCode(116,105,109,101,108,105,110,101,115,95,102,95,57,56,0);
    let chatl = String.fromCharCode(112,95,49,95,112,115,115,104,0);
    let fullscreenmaxD = 4.0;
    let handlera = String.fromCharCode(102,95,48,95,112,97,107,116,0);
    let placementf = String.fromCharCode(120,95,49,54,95,97,115,116,101,114,105,115,107,0);
    let controlw: Array<any> = [611, 142, 477];
       let footballx = 4;
       let imagenomoredataG: Map<any, any> = new Map([[String.fromCharCode(116,95,54,56,95,110,101,99,101,115,115,97,114,121,0),40], [String.fromCharCode(101,118,97,108,115,95,117,95,50,0),984], [String.fromCharCode(114,101,113,117,101,115,116,115,95,100,95,49,56,0),191]]);
       let casta: Array<any> = [420, 695, 737];
      while ((imagenomoredataG.size | footballx) >= 5 && (5 | imagenomoredataG.size) >= 4) {
         imagenomoredataG.set(`${casta.length}`, casta.length << (Math.min(Math.abs(1), 1)));
         break;
      }
      while (Array.from(imagenomoredataG.keys()).includes(`${footballx}`)) {
         imagenomoredataG = new Map([[`${imagenomoredataG.size}`, imagenomoredataG.size]]);
         break;
      }
         footballx %= Math.max(1 & casta.length, 1);
         imagenomoredataG.set(`${casta.length}`, casta.length - 1);
         imagenomoredataG.set(`${casta.length}`, casta.length);
      for (let s = 0; s < 3; s++) {
         footballx |= imagenomoredataG.size - 3;
      }
         casta = [imagenomoredataG.size];
         footballx += 1;
      while (2 < (imagenomoredataG.size | casta.length)) {
          let nativemoduleP = String.fromCharCode(116,95,49,57,95,100,114,97,119,116,101,120,116,0);
          let canvasR = 4.0;
          let largesoundj = false;
          let update_pkY: Array<any> = [179, 801, 486];
          let telegram8 = false;
         casta = [(1 ^ (telegram8 ? 2 : 5))];
         nativemoduleP += `${((largesoundj ? 4 : 3) << (Math.min(nativemoduleP.length, 3)))}`;
         canvasR += update_pkY.length >> (Math.min(Math.abs(1), 4));
         update_pkY = [((largesoundj ? 2 : 1) ^ 2)];
         telegram8 = 1.20 <= canvasR || update_pkY.length <= 25;
         break;
      }
      homex <<= Math.min(notificationC.length, 2);
   if (!notificationC.endsWith(`${wcopy_450.length}`)) {
      notificationC += `${encryptx.size}`;
   }
      homeinactiveL /= Math.max(4, 1 >> (Math.min(3, Math.abs(encryptx.size))));
      analyticJ = new Map([[`${iconuserl.length}`, 2 + iconuserl.length]]);
       let textinputH: Map<any, any> = new Map([[String.fromCharCode(112,95,54,49,95,115,116,121,108,101,0),107], [String.fromCharCode(99,111,118,101,114,105,110,103,95,116,95,49,50,0),548]]);
       let values4 = 2.0;
       let graphX: Map<any, any> = new Map([[String.fromCharCode(105,95,54,55,95,101,120,116,114,97,112,111,108,97,116,111,114,0),306], [String.fromCharCode(119,95,52,51,95,114,101,115,111,108,118,105,110,103,0),995], [String.fromCharCode(119,105,116,104,95,118,95,57,0),407]]);
      for (let g = 0; g < 2; g++) {
         values4 *= parseFloat(`${textinputH.size}`);
      }
      for (let f = 0; f < 3; f++) {
         values4 -= parseFloat(`${textinputH.size}`);
      }
          let cedbadcebfbfbfbcfecbcu = 3;
         values4 *= parseFloat(`${graphX.size | cedbadcebfbfbfbcfecbcu}`);
         textinputH = new Map([[`${textinputH.size}`, parseInt(`${values4}`) ^ textinputH.size]]);
         graphX = new Map([[`${graphX.size}`, 2]]);
          let predictionwinw = 0.0;
         graphX = new Map([[`${values4}`, parseInt(`${values4}`)]]);
         predictionwinw -= parseFloat(`${parseInt(`${predictionwinw}`)}`);
          let eactc = 4.0;
          let trophyq = String.fromCharCode(105,95,54,57,95,100,111,112,115,0);
         values4 *= parseFloat(`${parseInt(`${eactc}`) % (Math.max(3, 8))}`);
         eactc /= Math.max((parseFloat(`${trophyq == String.fromCharCode(118,0) ? trophyq.length : trophyq.length}`)), 5);
         values4 -= parseFloat(`${1}`);
         values4 /= Math.max(3, parseFloat(`${textinputH.size * graphX.size}`));
      graphd &= analyticJ.size % 1;
       let acceptedZ = false;
       let bgvipsportn = String.fromCharCode(100,101,97,108,108,111,99,95,98,95,51,54,0);
      let vnewinterstitialc = bgvipsportn == String.fromCharCode(114,114,95,55,49,0);
      do {
         bgvipsportn = `${((acceptedZ ? 5 : 2) - bgvipsportn.length)}`;
         if (vnewinterstitialc) {
            break;
         }
      } while ((bgvipsportn.includes(`${acceptedZ}`)) && vnewinterstitialc);
      if (!bgvipsportn.includes(`${acceptedZ}`)) {
          let iconarrowrightwhitec = String.fromCharCode(119,101,108,108,95,104,95,54,56,0);
          let n_centerw = true;
          let playercommon5 = String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,106,95,49,55,0);
          let dragP = 0.0;
         bgvipsportn += `${(playercommon5.length ^ (n_centerw ? 5 : 4))}`;
         iconarrowrightwhitec += "3";
         n_centerw = String.fromCharCode(89,0) == iconarrowrightwhitec || dragP >= 37.10;
         playercommon5 = `${2 | parseInt(`${dragP}`)}`;
      }
         bgvipsportn += "2";
         bgvipsportn += `${bgvipsportn.length << (Math.min(Math.abs(1), 3))}`;
       let matchinactiveP = 3;
       let teamdetailsbgs = 0;
       let constantsq: Array<any> = [758, 952];
       let statsnomoredataw: Array<any> = [32, 673];
      notificationC = `${encryptx.size / (Math.max(3, 9))}`;
      wcopy_450.push(homeinactiveL);
      wcopy_450 = [3];
       let shootyesgoal_ = String.fromCharCode(115,101,99,112,107,95,52,95,49,0);
       let orangeX = 0.0;
       let cedbadcebfbfbfbcfecbct = String.fromCharCode(111,95,56,51,95,100,105,115,112,97,116,99,104,101,114,0);
         orangeX /= Math.max(parseInt(`${orangeX}`), 2);
         cedbadcebfbfbfbcfecbct = `${cedbadcebfbfbfbcfecbct.length}`;
         shootyesgoal_ += `${cedbadcebfbfbfbcfecbct.length}`;
      let orangey = orangeX <= 8830702.0;
      do {
         orangeX /= Math.max((cedbadcebfbfbfbcfecbct == String.fromCharCode(50,0) ? parseInt(`${orangeX}`) : cedbadcebfbfbfbcfecbct.length), 1);
         if (orangey) {
            break;
         }
      } while (((parseInt(`${orangeX}`) - cedbadcebfbfbfbcfecbct.length) < 1) && orangey);
         shootyesgoal_ += `${parseInt(`${orangeX}`) % 3}`;
         shootyesgoal_ = `${shootyesgoal_.length / (Math.max(4, parseInt(`${orangeX}`)))}`;
         orangeX -= 3 | shootyesgoal_.length;
      for (let p = 0; p < 1; p++) {
         orangeX *= cedbadcebfbfbfbcfecbct.length * shootyesgoal_.length;
      }
      for (let o = 0; o < 3; o++) {
          let emojiheartH = 5.0;
          let small_ = String.fromCharCode(97,100,106,117,115,116,95,56,95,50,57,0);
          let iconviewergif1 = false;
         orangeX -= shootyesgoal_.length / 3;
         emojiheartH *= (String.fromCharCode(48,0) == small_ ? small_.length : parseInt(`${emojiheartH}`));
         iconviewergif1 = small_.endsWith(`${emojiheartH}`);
      }
      notificationC = `${homeinactiveL}`;
   while (homeinactiveL < 1) {
       let dataE = 0.0;
         dataE -= 1 << (Math.min(Math.abs(parseInt(`${dataE}`)), 3));
         dataE *= 1 - parseInt(`${dataE}`);
       let changeR = String.fromCharCode(122,95,54,54,95,97,118,105,100,0);
      iconuserl = [accepted0];
      break;
   }
   if (analyticJ.size > 5) {
      encryptx.set(`${homex}`, 1);
   }
       let loadingo: Map<any, any> = new Map([[String.fromCharCode(112,95,57,95,112,114,111,112,115,0),34], [String.fromCharCode(115,117,98,118,105,101,119,101,114,95,49,95,53,56,0),498], [String.fromCharCode(102,108,105,112,112,101,100,95,112,95,54,0),529]]);
          let anytimeR = 5.0;
          let nativeexq = 0.0;
          let tailV = 4.0;
         loadingo.set(`${anytimeR}`, parseInt(`${anytimeR}`) << (Math.min(Math.abs(1), 1)));
         nativeexq += parseInt(`${tailV}`);
         tailV /= Math.max(1, parseFloat(`${parseInt(`${nativeexq}`)}`));
      if (loadingo.size <= 2) {
          let auto_vQ = 0;
          let tickE = String.fromCharCode(109,97,103,105,99,121,117,118,95,99,95,55,54,0);
          let zhubot = 0.0;
          let roundu: Array<any> = [758, 165, 451];
          let unselectedE = String.fromCharCode(103,95,49,55,95,109,97,110,97,103,101,109,101,110,116,0);
         loadingo = new Map([[`${auto_vQ}`, (tickE == String.fromCharCode(50,0) ? auto_vQ : tickE.length)]]);
         zhubot *= parseFloat(`${roundu.length}`);
         roundu = [unselectedE.length];
         unselectedE += `${unselectedE.length - roundu.length}`;
      }
      let strH = 5844021 <= loadingo.size;
      do {
         loadingo.set(`${loadingo.size}`, 3 & loadingo.size);
         if (strH) {
            break;
         }
      } while ((loadingo.get(`${loadingo.size}`) == null) && strH);
      iconuserl.push(2);
   while (!Array.from(encryptx.values()).includes(wcopy_450.length)) {
      encryptx = new Map([[`${encryptx.size}`, encryptx.size ^ graphd]]);
      break;
   }
   for (let t = 0; t < 2; t++) {
      homeinactiveL -= wcopy_450.length;
   }
   for (let z = 0; z < 1; z++) {
      accepted0 -= accepted0;
   }
       let rightE = 1.0;
       let plashI = String.fromCharCode(105,95,50,49,95,116,114,121,0);
       let libffmpegkitl = String.fromCharCode(110,95,56,57,95,108,111,99,97,108,97,100,100,114,0);
       let leaguey = String.fromCharCode(115,112,97,114,115,101,95,97,95,55,52,0);
      let eabafadfadddbafeddddeeefeaafA = 7449025 <= libffmpegkitl.length;
      do {
          let sportsj = 4.0;
         libffmpegkitl = `${libffmpegkitl.length & leaguey.length}`;
         sportsj -= parseFloat(`${1 | parseInt(`${sportsj}`)}`);
         if (eabafadfadddbafeddddeeefeaafA) {
            break;
         }
      } while ((3 <= libffmpegkitl.length) && eabafadfadddbafeddddeeefeaafA);
      if ((rightE / (Math.max(3.90, 6))) > 3.11) {
         rightE /= Math.max(plashI.length, 3);
      }
      let inactiveD = rightE >= 6159795.0;
      do {
         rightE *= libffmpegkitl.length | 1;
         if (inactiveD) {
            break;
         }
      } while (inactiveD && (!libffmpegkitl.startsWith(`${rightE}`)));
          let iconqq4 = String.fromCharCode(105,95,52,57,95,115,97,102,101,115,116,97,99,107,0);
          let zhubo_ = false;
         plashI = `${parseInt(`${rightE}`) + 3}`;
         iconqq4 = `${((zhubo_ ? 3 : 4) >> (Math.min(Math.abs(2), 2)))}`;
         zhubo_ = !zhubo_;
         leaguey = `${1 & leaguey.length}`;
      darkP += `${homex}`;
   while (!darkP.startsWith(`${encryptx.size}`)) {
      encryptx = new Map([[`${homex}`, (String.fromCharCode(70,0) == darkP ? homex : darkP.length)]]);
      break;
   }
      notificationC += `${notificationC.length}`;
      iconuserl = [notificationC.length % (Math.max(1, 8))];
   for (let e = 0; e < 1; e++) {
      homeinactiveL <<= Math.min(1, chatl.length);
   }
   for (let a = 0; a < 1; a++) {
      encryptx.set(`${homeinactiveL}`, homeinactiveL);
   }
      encryptx = new Map([[`${analyticJ.size}`, 1]]);
      wcopy_450.push(iconuserl.length / (Math.max(3, 5)));
   while (encryptx.get(`${iconuserl.length}`) != null) {
      iconuserl.push(iconuserl.length / (Math.max(1, graphd)));
      break;
   }

    setIsRemoveDialogOpen(!isRemoveDialogOpen);
  }
  const onRemoveAccount = () => {
       let assist4 = String.fromCharCode(120,95,55,95,111,98,115,101,114,118,97,116,105,111,110,115,0);
    let libavdevicei = 3.0;
    let awayteamfieldD = String.fromCharCode(109,95,52,50,95,99,111,110,116,101,120,116,115,0);
    let matchX = false;
    let productq: Map<any, any> = new Map([[String.fromCharCode(115,101,103,109,97,112,95,116,95,56,0),640], [String.fromCharCode(99,104,101,99,107,109,109,95,110,95,52,54,0),576], [String.fromCharCode(118,97,114,105,110,116,115,95,110,95,56,52,0),454]]);
    let refreshborderless_: Array<any> = [662, 579];
    let handlere = String.fromCharCode(103,114,97,100,105,101,110,116,115,95,117,95,56,50,0);
    let z_centerZ = true;
    let project7: Array<any> = [String.fromCharCode(122,95,55,54,95,100,101,108,97,121,101,100,0), String.fromCharCode(112,114,105,111,114,105,116,121,95,121,95,54,53,0), String.fromCharCode(114,99,118,100,95,55,95,55,50,0)];
    let hongkongq: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,108,111,97,100,101,100,95,109,95,53,48,0),608], [String.fromCharCode(118,95,56,57,95,116,119,105,116,116,101,114,0),676]]);
   for (let b = 0; b < 2; b++) {
       let playc = String.fromCharCode(99,111,110,102,101,116,116,105,95,53,95,52,55,0);
       let containerh = String.fromCharCode(114,101,97,99,116,105,111,110,115,95,98,95,57,51,0);
      while (containerh.endsWith(`${playc.length}`)) {
         containerh += `${playc.length}`;
         break;
      }
         containerh = `${1 | playc.length}`;
      let cedbadcebfbfbfbcfecbcQ = String.fromCharCode(49,97,121,119,56,118,105,103,112,0) == containerh;
      do {
         containerh = `${containerh.length % (Math.max(playc.length, 8))}`;
         if (cedbadcebfbfbfbcfecbcQ) {
            break;
         }
      } while (cedbadcebfbfbfbcfecbcQ && (containerh.length < 3));
         containerh += `${containerh.length}`;
       let networkD = String.fromCharCode(98,95,56,51,95,114,101,113,117,101,115,116,97,98,108,101,0);
      while (networkD == containerh) {
          let mbsplash9 = String.fromCharCode(122,95,57,53,95,115,99,114,97,116,99,104,0);
          let found7 = 2.0;
          let inouttargetredJ = String.fromCharCode(118,95,57,52,95,115,115,105,109,0);
         containerh = `${1 + playc.length}`;
         mbsplash9 = `${1 % (Math.max(3, inouttargetredJ.length))}`;
         found7 -= 3;
         inouttargetredJ = `${3 ^ mbsplash9.length}`;
         break;
      }
      awayteamfieldD = `${assist4.length}`;
   }
   let libcrashsdkE = matchX ? !matchX : matchX;
   do {
      matchX = (matchX ? z_centerZ : !matchX);
      if (libcrashsdkE) {
         break;
      }
   } while ((!matchX) && libcrashsdkE);
   while (z_centerZ && 1 > (refreshborderless_.length & 4)) {
       let predictiondefaulte = String.fromCharCode(108,111,110,95,48,95,57,54,0);
       let reactnativejsC = 0;
       let stationA = String.fromCharCode(105,114,114,101,108,118,97,110,116,95,108,95,55,52,0);
      while (5 <= reactnativejsC) {
         reactnativejsC += predictiondefaulte.length;
         break;
      }
         predictiondefaulte += `${stationA.length % 2}`;
      while (1 >= predictiondefaulte.length) {
         predictiondefaulte = "3";
         break;
      }
         reactnativejsC += stationA.length ^ 2;
       let awayiconc = 1.0;
       let expiredY = 5.0;
      let actione = 9035010 <= predictiondefaulte.length;
      do {
         predictiondefaulte += `${3 & parseInt(`${awayiconc}`)}`;
         if (actione) {
            break;
         }
      } while ((stationA != predictiondefaulte) && actione);
          let redscoreballf = 3.0;
         reactnativejsC &= reactnativejsC;
         redscoreballf += parseInt(`${redscoreballf}`);
      let mbnativeE = String.fromCharCode(51,99,95,115,117,0) == stationA;
      do {
          let dropdownn = String.fromCharCode(115,117,98,98,97,110,100,95,101,95,48,0);
          let binddatasT = String.fromCharCode(98,101,103,105,110,115,95,55,95,55,48,0);
          let long_i__: Array<any> = [145, 399];
          let hometeamfieldl = 2.0;
         stationA = "3";
         dropdownn += "3";
         binddatasT += `${dropdownn.length >> (Math.min(Math.abs(1), 2))}`;
         long_i__.push((String.fromCharCode(87,0) == binddatasT ? parseInt(`${hometeamfieldl}`) : binddatasT.length));
         hometeamfieldl += parseFloat(`${2}`);
         if (mbnativeE) {
            break;
         }
      } while ((2 <= stationA.length) && mbnativeE);
      while (2 == (2 & reactnativejsC)) {
         predictiondefaulte += `${parseInt(`${awayiconc}`) & stationA.length}`;
         break;
      }
      refreshborderless_ = [parseInt(`${libavdevicei}`)];
      break;
   }
   let libcrashsdkv = awayteamfieldD.length <= 9135482;
   do {
       let profilec: Map<any, any> = new Map([[String.fromCharCode(109,95,57,95,100,114,97,119,105,110,103,0),202], [String.fromCharCode(108,95,56,55,95,109,97,105,108,0),382], [String.fromCharCode(109,112,115,117,98,95,105,95,52,51,0),151]]);
       let iconcalendarS: Array<any> = [257, 256];
       let countryN = 4.0;
       let matchesN: Map<any, any> = new Map([[String.fromCharCode(118,95,53,54,95,105,115,115,0),825], [String.fromCharCode(114,95,52,53,95,104,119,99,111,110,102,105,103,0),297], [String.fromCharCode(104,95,54,57,95,97,117,103,109,101,110,116,0),618]]);
       let awayiconU = 5;
       let time_px4 = 4.0;
       let friendsR = 5.0;
       let libimagepipeline3 = String.fromCharCode(115,107,101,108,101,116,111,110,95,105,95,51,52,0);
       let stepA = String.fromCharCode(108,95,57,56,95,118,111,119,101,108,115,0);
       let hookf = String.fromCharCode(122,95,55,50,95,108,111,116,116,105,101,118,105,101,119,0);
          let clocky = String.fromCharCode(114,101,99,111,114,100,110,105,110,103,95,105,95,54,48,0);
          let iconpipexpand4 = String.fromCharCode(115,95,53,53,95,97,110,97,108,121,122,101,0);
         matchesN.set(`${awayiconU}`, 1);
         clocky = `${iconpipexpand4.length}`;
         iconpipexpand4 += `${(String.fromCharCode(68,0) == iconpipexpand4 ? clocky.length : iconpipexpand4.length)}`;
         libimagepipeline3 += `${1 | iconcalendarS.length}`;
      while (1.34 >= countryN) {
         countryN /= Math.max(parseFloat(`${iconcalendarS.length ^ 2}`), 4);
         break;
      }
      if (2 == (matchesN.size - parseInt(`${time_px4}`)) && (parseInt(`${time_px4}`) - matchesN.size) == 2) {
          let score1: Map<any, any> = new Map([[String.fromCharCode(109,101,116,97,100,97,116,97,115,95,117,95,55,54,0),34], [String.fromCharCode(112,97,114,116,105,99,108,101,115,95,120,95,55,56,0),64], [String.fromCharCode(109,101,100,105,97,115,95,106,95,49,50,0),997]]);
          let searchI = String.fromCharCode(108,115,104,105,102,116,95,57,95,54,54,0);
         matchesN.set(`${awayiconU}`, awayiconU);
         score1 = new Map([[`${score1.size}`, (searchI == String.fromCharCode(106,0) ? score1.size : searchI.length)]]);
      }
      for (let p = 0; p < 1; p++) {
          let closeh = String.fromCharCode(115,116,97,114,116,95,106,95,54,52,0);
         stepA = `${parseInt(`${time_px4}`)}`;
         closeh += `${(String.fromCharCode(80,0) == closeh ? closeh.length : closeh.length)}`;
      }
          let libsentryY = 5.0;
          let eabafadfadddbafeddddeeefeaaf_: Map<any, any> = new Map([[String.fromCharCode(103,111,110,101,95,116,95,55,55,0),922], [String.fromCharCode(121,95,57,50,95,102,105,108,116,101,114,102,0),469], [String.fromCharCode(100,95,55,56,95,100,101,108,105,109,105,116,101,114,0),939]]);
          let gpayY = 3.0;
         iconcalendarS.push(awayiconU);
         libsentryY += 3;
         eabafadfadddbafeddddeeefeaaf_ = new Map([[`${eabafadfadddbafeddddeeefeaaf_.size}`, parseInt(`${libsentryY}`)]]);
         gpayY /= Math.max(parseFloat(`${2}`), 1);
       let redscoreballw: Array<any> = [442, 374];
          let changeF = String.fromCharCode(111,98,115,101,114,118,101,114,95,109,95,50,48,0);
          let downloadB = String.fromCharCode(115,117,98,100,97,116,97,95,51,95,50,50,0);
          let uploadX: Array<any> = [583, 128, 575];
         libimagepipeline3 += "3";
         changeF += `${downloadB.length >> (Math.min(Math.abs(2), 2))}`;
         downloadB += `${uploadX.length}`;
         uploadX = [changeF.length & 1];
         awayiconU += libimagepipeline3.length % 3;
         libimagepipeline3 = `${libimagepipeline3.length}`;
      for (let a = 0; a < 2; a++) {
         countryN /= Math.max(parseFloat(`${parseInt(`${friendsR}`)}`), 3);
      }
      let usernamec = 7473729.0 <= countryN;
      do {
         countryN *= parseFloat(`${hookf.length ^ redscoreballw.length}`);
         if (usernamec) {
            break;
         }
      } while (((parseInt(`${countryN}`) * stepA.length) >= 1 && (1 / (Math.max(7, stepA.length))) >= 2) && usernamec);
      awayteamfieldD += `${handlere.length & project7.length}`;
      profilec = new Map([[`${profilec.size}`, profilec.size]]);
      if (libcrashsdkv) {
         break;
      }
   } while (libcrashsdkv && (awayteamfieldD.length >= 2));
   if ((1 / (Math.max(6, project7.length))) > 4) {
      z_centerZ = 80.74 <= libavdevicei && matchX;
   }
   let transferz = matchX ? !matchX : matchX;
   do {
       let textinputT: Map<any, any> = new Map([[String.fromCharCode(117,95,56,48,95,98,101,116,104,115,111,102,116,118,105,100,101,111,0),false ], [String.fromCharCode(102,114,97,109,101,104,97,115,104,95,115,95,56,0),false ]]);
          let smallb = false;
         textinputT.set(`${smallb}`, ((smallb ? 2 : 3) * textinputT.size));
      while (!Array.from(textinputT.values()).includes(textinputT.size)) {
         textinputT.set(`${textinputT.size}`, textinputT.size + textinputT.size);
         break;
      }
         textinputT.set(`${textinputT.size}`, textinputT.size & 1);
      matchX = textinputT.size >= project7.length;
      if (transferz) {
         break;
      }
   } while (transferz && (assist4.startsWith(`${matchX}`)));
   while (project7.length <= refreshborderless_.length) {
       let applicationp = String.fromCharCode(112,114,111,98,101,114,95,57,95,52,0);
         applicationp = `${applicationp.length ^ 1}`;
      let videom = applicationp.length >= 7009881;
      do {
          let hookG = 2.0;
         applicationp = `${applicationp.length}`;
         hookG += parseInt(`${hookG}`) + parseInt(`${hookG}`);
         if (videom) {
            break;
         }
      } while (videom && (3 > applicationp.length));
      let nterstitialo = String.fromCharCode(102,110,102,53,0) == applicationp;
      do {
          let verticalo = String.fromCharCode(115,117,98,102,114,97,109,101,115,95,120,95,56,52,0);
          let neonF = String.fromCharCode(122,95,57,55,95,114,97,109,112,117,112,0);
         applicationp = "3";
         verticalo = `${verticalo.length % 2}`;
         neonF = `${neonF.length >> (Math.min(1, verticalo.length))}`;
         if (nterstitialo) {
            break;
         }
      } while (nterstitialo && (applicationp.length == applicationp.length));
      refreshborderless_.push(2 >> (Math.min(5, applicationp.length)));
      break;
   }
   while (handlere.endsWith(assist4)) {
       let filedH: Array<any> = [18, 761];
       let kuaishou1 = 1;
       let teamdetailsbgQ = String.fromCharCode(112,116,114,109,97,112,115,95,103,95,51,49,0);
         filedH.push(kuaishou1);
         filedH = [(String.fromCharCode(108,0) == teamdetailsbgQ ? teamdetailsbgQ.length : kuaishou1)];
         kuaishou1 *= 3 >> (Math.min(Math.abs(kuaishou1), 5));
      while (1 >= (kuaishou1 & teamdetailsbgQ.length)) {
         kuaishou1 <<= Math.min(Math.abs(2), 2);
         break;
      }
       let libflipper3 = 2.0;
          let hookq = String.fromCharCode(98,117,105,108,116,95,98,95,49,0);
          let promotionr = String.fromCharCode(99,104,105,114,112,95,53,95,54,56,0);
         teamdetailsbgQ = `${teamdetailsbgQ.length}`;
         hookq = `${promotionr.length}`;
         promotionr += `${promotionr.length | 2}`;
      for (let s = 0; s < 3; s++) {
          let rankK: Array<any> = [127, 191];
         kuaishou1 *= 2 + rankK.length;
      }
      while (teamdetailsbgQ.length < 4) {
         teamdetailsbgQ += `${filedH.length | 2}`;
         break;
      }
      while (4 > (1 & teamdetailsbgQ.length) && (1 & teamdetailsbgQ.length) > 4) {
         teamdetailsbgQ += `${kuaishou1}`;
         break;
      }
      assist4 += `${((z_centerZ ? 2 : 5) + refreshborderless_.length)}`;
      break;
   }
      matchX = String.fromCharCode(65,0) == awayteamfieldD;
   for (let u = 0; u < 3; u++) {
      handlere += `${(assist4 == String.fromCharCode(121,0) ? assist4.length : (matchX ? 2 : 4))}`;
   }
   for (let o = 0; o < 2; o++) {
       let sinav = String.fromCharCode(116,114,105,103,103,101,114,95,120,95,48,0);
       let hooksP = String.fromCharCode(119,101,105,103,104,116,115,95,122,95,49,54,0);
       let spinneri: Array<any> = [212, 745];
       let nextj = 1;
       let librrcn = String.fromCharCode(105,95,49,51,95,97,99,116,111,114,0);
         hooksP = "2";
      if (librrcn != sinav) {
         sinav += `${spinneri.length}`;
      }
      while (1 <= (nextj << (Math.min(Math.abs(4), 2))) && 5 <= (nextj << (Math.min(Math.abs(4), 1)))) {
         hooksP = `${nextj / (Math.max(spinneri.length, 2))}`;
         break;
      }
          let thumbnailz = String.fromCharCode(120,95,57,49,95,97,116,97,98,97,115,101,0);
          let largesoundT = String.fromCharCode(110,101,103,97,116,101,95,114,95,49,52,0);
          let binddatasd = 1.0;
         nextj /= Math.max(5, (String.fromCharCode(119,0) == hooksP ? parseInt(`${binddatasd}`) : hooksP.length));
         thumbnailz += `${thumbnailz.length}`;
         largesoundT += `${largesoundT.length / 2}`;
         binddatasd /= Math.max(parseFloat(`${largesoundT.length - 2}`), 4);
      for (let x = 0; x < 3; x++) {
         hooksP = `${3 / (Math.max(8, hooksP.length))}`;
      }
      let iconarrowrightj = 6851059 >= nextj;
      do {
         nextj >>= Math.min(Math.abs((hooksP == String.fromCharCode(53,0) ? hooksP.length : librrcn.length)), 1);
         if (iconarrowrightj) {
            break;
         }
      } while (iconarrowrightj && (spinneri.length == 1));
         sinav = `${spinneri.length}`;
         sinav += `${sinav.length}`;
          let privatechatbgX = String.fromCharCode(99,111,110,116,105,103,117,111,117,115,95,51,95,51,55,0);
         spinneri.push(2);
         privatechatbgX += `${privatechatbgX.length}`;
         sinav = `${spinneri.length >> (Math.min(2, Math.abs(nextj)))}`;
      while ((1 ^ nextj) == 2) {
         librrcn = `${2 & hooksP.length}`;
         break;
      }
         sinav = `${(hooksP == String.fromCharCode(89,0) ? sinav.length : hooksP.length)}`;
      for (let l = 0; l < 2; l++) {
          let x_managerk: Map<any, any> = new Map([[String.fromCharCode(110,117,108,108,105,102,95,104,95,50,52,0),false ], [String.fromCharCode(112,95,52,57,95,115,112,101,99,115,0),false ]]);
         spinneri.push(2 >> (Math.min(4, spinneri.length)));
         x_managerk.set(`${x_managerk.size}`, 1 >> (Math.min(1, Math.abs(x_managerk.size))));
      }
      for (let f = 0; f < 3; f++) {
         hooksP = `${sinav.length}`;
      }
          let libreactI = 2.0;
          let previewU = true;
         spinneri = [spinneri.length];
         libreactI *= (parseInt(`${libreactI}`) & (previewU ? 3 : 1));
         previewU = 89.95 > libreactI;
      assist4 += `${sinav.length >> (Math.min(5, project7.length))}`;
   }

    setTimeout(() => {

       let calendart = true;
       let aboutz: Map<any, any> = new Map([[String.fromCharCode(108,95,54,53,95,104,115,116,114,105,110,103,0),8], [String.fromCharCode(116,104,114,101,97,100,115,97,102,101,95,107,95,55,52,0),870]]);
      let uploadC = aboutz.size <= 9403677;
      do {
         aboutz = new Map([[`${aboutz.size}`, aboutz.size]]);
         if (uploadC) {
            break;
         }
      } while (uploadC && (!calendart));
      while (!calendart) {
          let manifestc = String.fromCharCode(122,95,52,56,95,98,105,103,117,105,110,116,0);
          let shootyesgoaly = String.fromCharCode(114,101,118,105,101,119,95,117,95,52,55,0);
          let uimanageru = String.fromCharCode(109,95,52,52,95,109,97,114,115,104,97,108,0);
         calendart = aboutz.size > 91;
         manifestc += `${2 * manifestc.length}`;
         shootyesgoaly += `${shootyesgoaly.length - 2}`;
         uimanageru += `${uimanageru.length ^ 2}`;
         break;
      }
         aboutz = new Map([[`${aboutz.size}`, aboutz.size]]);
         aboutz = new Map([[`${aboutz.size}`, ((calendart ? 1 : 4) - 2)]]);
      while ((aboutz.size % 2) >= 4) {
         aboutz = new Map([[`${aboutz.size}`, 3 * aboutz.size]]);
         break;
      }
      let acceptedd = calendart ? !calendart : calendart;
      do {
         calendart = aboutz.size >= 14 || !calendart;
         if (acceptedd) {
            break;
         }
      } while ((1 > aboutz.size) && acceptedd);
      z_centerZ = handlere == String.fromCharCode(108,0);
      productq.set(`${z_centerZ}`, 3);
   let types9 = libavdevicei >= 9818994.0;
   do {
       let expiredF: Array<any> = [498, 690, 384];
       let textj = String.fromCharCode(121,95,56,53,95,97,114,110,114,0);
       let libswresamplea: Array<any> = [776, 931, 650];
       let encryptorL = 1;
      if (1 > (textj.length / 3) && 3 > (expiredF.length / (Math.max(textj.length, 2)))) {
         expiredF.push(expiredF.length % 1);
      }
      while (4 <= (1 + libswresamplea.length) || (encryptorL + 1) <= 1) {
         libswresamplea.push((textj == String.fromCharCode(118,0) ? textj.length : expiredF.length));
         break;
      }
         encryptorL |= libswresamplea.length | 2;
          let iconstarL: Array<any> = [String.fromCharCode(115,116,97,116,105,115,116,105,99,115,95,118,95,51,52,0), String.fromCharCode(103,114,97,121,95,113,95,55,49,0)];
          let mintegralf = false;
          let chatroombackgroundw: Map<any, any> = new Map([[String.fromCharCode(108,95,49,51,95,115,116,114,109,0),167], [String.fromCharCode(102,95,56,95,117,110,105,109,112,111,114,116,97,110,116,0),746], [String.fromCharCode(116,95,56,54,95,97,108,108,111,119,105,0),473]]);
         libswresamplea.push(encryptorL >> (Math.min(5, Math.abs(2))));
         iconstarL.push(iconstarL.length);
         mintegralf = (iconstarL.length * chatroombackgroundw.size) > 40;
         chatroombackgroundw = new Map([[`${chatroombackgroundw.size}`, chatroombackgroundw.size]]);
         libswresamplea = [encryptorL * libswresamplea.length];
         encryptorL <<= Math.min(4, Math.abs(libswresamplea.length & textj.length));
      while (5 >= (libswresamplea.length >> (Math.min(Math.abs(2), 4))) && 2 >= (libswresamplea.length >> (Math.min(Math.abs(2), 4)))) {
         textj = `${(String.fromCharCode(102,0) == textj ? textj.length : encryptorL)}`;
         break;
      }
         libswresamplea.push(encryptorL * libswresamplea.length);
      let analytic3 = 5836813 >= expiredF.length;
      do {
          let profilef: Array<any> = [894, 862, 653];
          let dropdownM = String.fromCharCode(114,95,55,55,95,109,97,114,115,104,97,108,0);
         expiredF.push(dropdownM.length);
         profilef.push(3);
         dropdownM += `${profilef.length << (Math.min(profilef.length, 1))}`;
         if (analytic3) {
            break;
         }
      } while (analytic3 && (textj.includes(`${expiredF.length}`)));
      let temperatureT = encryptorL <= 5846536;
      do {
          let footballtrophyH: Array<any> = [100, 873, 507];
          let gradleX = String.fromCharCode(111,95,54,57,95,101,108,108,105,111,116,116,0);
          let showless8 = String.fromCharCode(105,110,116,101,110,116,115,95,51,95,49,55,0);
          let themeu = 2;
         encryptorL %= Math.max(encryptorL | expiredF.length, 1);
         footballtrophyH = [themeu];
         gradleX = `${themeu << (Math.min(gradleX.length, 3))}`;
         showless8 = `${showless8.length}`;
         if (temperatureT) {
            break;
         }
      } while (temperatureT && (5 == libswresamplea.length));
      while (2 >= (encryptorL % 1) && (expiredF.length % (Math.max(1, 4))) >= 1) {
         encryptorL += libswresamplea.length;
         break;
      }
      for (let g = 0; g < 3; g++) {
         expiredF = [libswresamplea.length | textj.length];
      }
      libavdevicei /= Math.max(productq.size, 4);
      if (types9) {
         break;
      }
   } while ((productq.size >= 5) && types9);
   let circlew = 6922892 <= project7.length;
   do {
       let become1 = false;
       let binddatasI = String.fromCharCode(106,95,54,50,95,115,117,98,115,99,114,105,98,97,98,108,101,115,0);
       let userQ: Array<any> = [837, 833];
         binddatasI += `${userQ.length - 3}`;
         binddatasI += `${((become1 ? 2 : 3))}`;
      let libturbomodulejsijnil = binddatasI == String.fromCharCode(115,49,57,104,51,107,48,100,98,0);
      do {
          let photox = 4.0;
         binddatasI += `${parseInt(`${photox}`) + userQ.length}`;
         if (libturbomodulejsijnil) {
            break;
         }
      } while ((!binddatasI.includes(`${become1}`)) && libturbomodulejsijnil);
         binddatasI += `${((become1 ? 4 : 3) * 2)}`;
         userQ.push(((become1 ? 2 : 4) & userQ.length));
      if (3 >= binddatasI.length) {
         userQ = [binddatasI.length ^ userQ.length];
      }
      let internetA = binddatasI == String.fromCharCode(117,97,105,57,114,100,95,51,117,99,0);
      do {
         binddatasI = `${((become1 ? 3 : 1))}`;
         if (internetA) {
            break;
         }
      } while ((become1) && internetA);
         become1 = !become1;
      while (userQ.length < 4) {
         userQ.push(2 ^ binddatasI.length);
         break;
      }
      project7.push(binddatasI.length);
      if (circlew) {
         break;
      }
   } while ((1 >= project7.length) && circlew);
      z_centerZ = project7.length >= libavdevicei;
       let checkbox4 = 2.0;
       let iconwatchx = 1.0;
      while (2.2 >= iconwatchx) {
         checkbox4 *= parseFloat(`${parseInt(`${iconwatchx}`)}`);
         break;
      }
      if (iconwatchx == 5.91) {
         checkbox4 *= parseFloat(`${2}`);
      }
       let otherq: Map<any, any> = new Map([[String.fromCharCode(116,111,108,101,114,97,110,99,101,95,119,95,53,57,0),true ], [String.fromCharCode(111,112,101,110,101,100,95,101,95,53,56,0),false ], [String.fromCharCode(110,95,53,52,95,102,111,114,98,105,100,100,101,110,0),true ]]);
       let halfy: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,111,114,116,105,111,110,97,108,95,120,95,56,50,0),740], [String.fromCharCode(115,117,98,115,101,116,95,116,95,50,55,0),948], [String.fromCharCode(121,95,54,49,95,101,109,105,116,0),631]]);
      for (let g = 0; g < 3; g++) {
         iconwatchx -= 1;
      }
         checkbox4 -= parseFloat(`${otherq.size}`);
      if (!Array.from(halfy.values()).includes(iconwatchx)) {
          let videocommon_ = String.fromCharCode(113,95,49,55,95,111,98,106,101,99,116,115,0);
          let stringR = String.fromCharCode(99,114,121,115,116,97,108,104,100,95,118,95,56,55,0);
          let overb = true;
         halfy.set(`${otherq.size}`, 3);
         videocommon_ = `${stringR.length}`;
         stringR += `${videocommon_.length}`;
         overb = !overb;
      }
      handlere = `${(handlere == String.fromCharCode(107,0) ? (matchX ? 5 : 5) : handlere.length)}`;
   while (2 >= awayteamfieldD.length) {
      awayteamfieldD = `${parseInt(`${libavdevicei}`) >> (Math.min(handlere.length, 1))}`;
      break;
   }
      handlere += `${2 - parseInt(`${libavdevicei}`)}`;
   while (!matchX || 5 >= awayteamfieldD.length) {
       let statsnomoredataA = String.fromCharCode(97,108,103,111,114,95,57,95,49,55,0);
          let china6 = String.fromCharCode(110,95,49,52,95,110,101,97,114,101,110,100,0);
         statsnomoredataA = "2";
         china6 = `${china6.length}`;
         statsnomoredataA += `${3 + statsnomoredataA.length}`;
      while (statsnomoredataA.length <= 1) {
          let relatedR: Map<any, any> = new Map([[String.fromCharCode(110,101,120,116,95,104,95,51,49,0),326], [String.fromCharCode(114,101,99,111,103,110,105,122,101,114,95,103,95,49,52,0),711], [String.fromCharCode(116,104,117,110,107,95,100,95,57,49,0),645]]);
          let iconorientationl = 3;
          let launcherc: Map<any, any> = new Map([[String.fromCharCode(107,95,51,50,95,99,114,101,100,101,110,116,105,97,108,0),612], [String.fromCharCode(116,95,50,55,95,99,111,110,110,101,99,116,120,0),949]]);
          let abidetectU = 4.0;
          let volumeQ = String.fromCharCode(108,95,50,55,95,119,97,118,101,102,111,114,109,0);
         statsnomoredataA += `${volumeQ.length}`;
         relatedR.set(`${abidetectU}`, 3 / (Math.max(iconorientationl, 7)));
         iconorientationl /= Math.max(launcherc.size, 3);
         launcherc = new Map([[`${launcherc.size}`, launcherc.size & 3]]);
         abidetectU += parseFloat(`${parseInt(`${abidetectU}`) >> (Math.min(Math.abs(1), 4))}`);
         volumeQ += `${relatedR.size}`;
         break;
      }
      awayteamfieldD = `${2 << (Math.min(3, Math.abs(parseInt(`${libavdevicei}`))))}`;
      break;
   }
       let confirmationn = 5;
      while (confirmationn <= confirmationn) {
          let telegram1: Map<any, any> = new Map([[String.fromCharCode(102,95,55,55,95,100,116,111,114,0),806], [String.fromCharCode(105,108,108,105,113,97,95,49,95,49,55,0),752], [String.fromCharCode(114,101,97,100,102,117,108,108,95,119,95,53,0),326]]);
          let weatherM = String.fromCharCode(115,122,97,98,111,115,95,110,95,52,48,0);
          let package_e16 = String.fromCharCode(98,97,114,107,95,105,95,54,53,0);
         confirmationn += confirmationn << (Math.min(weatherM.length, 4));
         telegram1.set(`${package_e16}`, package_e16.length);
         weatherM += `${telegram1.size}`;
         break;
      }
         confirmationn &= 1;
      while ((confirmationn * 5) >= 4 && 3 >= (confirmationn * 5)) {
         confirmationn += 1;
         break;
      }
      productq = new Map([[`${confirmationn}`, confirmationn & assist4.length]]);
   let progressF = refreshborderless_.length <= 6263574;
   do {
      refreshborderless_ = [1];
      if (progressF) {
         break;
      }
   } while (progressF && ((refreshborderless_.length + project7.length) > 4 && 4 > (refreshborderless_.length + project7.length)));
      mayi_Attributedstring.showToast('我们将在3个工作日内处理您注销请求，请注意您的邮箱，在此期间您可以继续登录');
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
       let reactx = String.fromCharCode(114,101,115,105,103,110,105,110,103,95,101,95,53,55,0);
    let vipsportz: Map<any, any> = new Map([[String.fromCharCode(113,95,50,53,95,99,111,110,103,0),true ], [String.fromCharCode(105,95,50,55,95,115,116,114,117,99,116,117,114,101,0),true ], [String.fromCharCode(97,95,50,49,95,100,121,110,108,111,99,107,0),true ]]);
    let area4 = String.fromCharCode(102,95,55,49,0);
    let defaultprofilepici = 2.0;
    let basketballplayerplaceholderN = String.fromCharCode(104,95,57,49,95,100,105,115,99,111,118,101,114,0);
    let tooltipsd = 1.0;
    let yellowcirclebgZ = String.fromCharCode(122,95,56,55,95,105,110,100,101,120,105,110,103,0);
    let launchera = String.fromCharCode(122,112,98,105,113,117,97,100,115,95,106,95,53,52,0);
    let iconnewsshareV = String.fromCharCode(107,95,53,54,95,109,98,109,111,100,101,0);
    let malaysiaw = 5.0;
   while (!area4.endsWith(`${vipsportz.size}`)) {
       let turn2 = 2.0;
       let iconrightorangez: Map<any, any> = new Map([[String.fromCharCode(122,95,57,56,95,99,97,108,99,117,97,108,116,101,0),365], [String.fromCharCode(98,95,55,53,95,115,117,112,101,114,0),917]]);
      for (let c = 0; c < 2; c++) {
         turn2 *= parseInt(`${turn2}`);
      }
         turn2 /= Math.max(3, parseInt(`${turn2}`) | 3);
         iconrightorangez = new Map([[`${iconrightorangez.size}`, parseInt(`${turn2}`)]]);
      if (5 >= (iconrightorangez.size / 2) && 5 >= (iconrightorangez.size / 2)) {
          let langf: Array<any> = [56, 461];
          let sellmathbackgrounda = String.fromCharCode(104,95,55,54,95,114,105,110,103,116,111,110,101,115,0);
         iconrightorangez = new Map([[`${iconrightorangez.size}`, iconrightorangez.size]]);
         langf = [langf.length];
         sellmathbackgrounda = `${(String.fromCharCode(54,0) == sellmathbackgrounda ? sellmathbackgrounda.length : langf.length)}`;
      }
         turn2 /= Math.max(3, 3);
      for (let n = 0; n < 3; n++) {
         turn2 -= iconrightorangez.size ^ 3;
      }
      area4 = `${parseInt(`${turn2}`)}`;
      break;
   }
   let issubi = 5776077.0 >= tooltipsd;
   do {
      tooltipsd += (basketballplayerplaceholderN == String.fromCharCode(66,0) ? basketballplayerplaceholderN.length : parseInt(`${tooltipsd}`));
      if (issubi) {
         break;
      }
   } while (issubi && ((launchera.length + 3) < 2 || 1 < (launchera.length >> (Math.min(Math.abs(3), 3)))));
   if (launchera.length >= 5) {
       let untick3 = String.fromCharCode(104,95,51,49,95,118,100,114,97,119,97,98,108,101,0);
       let airbnbstary = String.fromCharCode(112,95,56,52,95,107,101,121,98,117,102,0);
       let greytickT = String.fromCharCode(116,114,97,105,108,105,110,103,95,113,95,49,52,0);
       let anytimep = 5;
       let sentryN = String.fromCharCode(98,111,114,100,101,114,115,95,120,95,52,52,0);
      for (let e = 0; e < 1; e++) {
         untick3 += `${(String.fromCharCode(51,0) == airbnbstary ? airbnbstary.length : sentryN.length)}`;
      }
         untick3 += `${(sentryN == String.fromCharCode(114,0) ? sentryN.length : airbnbstary.length)}`;
         untick3 += `${(String.fromCharCode(81,0) == sentryN ? sentryN.length : untick3.length)}`;
         airbnbstary = "1";
         untick3 = `${(String.fromCharCode(70,0) == airbnbstary ? greytickT.length : airbnbstary.length)}`;
         anytimep |= untick3.length - 2;
       let index9: Map<any, any> = new Map([[String.fromCharCode(109,95,56,49,95,104,105,103,104,115,0),509], [String.fromCharCode(99,95,56,51,95,110,97,109,101,116,111,105,110,100,101,120,0),575]]);
       let appsp = 5.0;
      while (5 == (anytimep & untick3.length) || (5 & anytimep) == 5) {
         anytimep ^= 3;
         break;
      }
         anytimep += greytickT.length;
      for (let h = 0; h < 3; h++) {
         untick3 = `${untick3.length}`;
      }
      while ((index9.size * greytickT.length) <= 4 || 4 <= (greytickT.length * 4)) {
         greytickT += `${untick3.length & index9.size}`;
         break;
      }
      for (let l = 0; l < 1; l++) {
         untick3 += `${3 + parseInt(`${appsp}`)}`;
      }
         index9.set(`${anytimep}`, sentryN.length);
         sentryN = `${parseInt(`${appsp}`) - 2}`;
      yellowcirclebgZ = `${area4.length}`;
   }
   let blackl = yellowcirclebgZ.length >= 9241328;
   do {
       let iconnewssharej = 3.0;
       let mimey = 5;
      let gesturesQ = 9751745 >= mimey;
      do {
         mimey ^= mimey;
         if (gesturesQ) {
            break;
         }
      } while ((5.20 == iconnewssharej) && gesturesQ);
          let icontransferclub6 = 2;
         mimey /= Math.max(2, 2);
         icontransferclub6 %= Math.max(3, icontransferclub6);
      for (let m = 0; m < 1; m++) {
         iconnewssharej -= parseFloat(`${mimey}`);
      }
          let scheduled = String.fromCharCode(105,95,55,50,95,99,115,104,97,114,112,0);
          let libmapbufferjniQ = 4.0;
         mimey %= Math.max(5, 3);
         scheduled = `${scheduled.length - 1}`;
         libmapbufferjniQ -= parseFloat(`${2 >> (Math.min(2, scheduled.length))}`);
      while (iconnewssharej > 4.33) {
         mimey >>= Math.min(1, Math.abs(parseInt(`${iconnewssharej}`) >> (Math.min(4, Math.abs(2)))));
         break;
      }
          let zoomq = false;
         mimey ^= mimey | parseInt(`${iconnewssharej}`);
         zoomq = !zoomq;
      yellowcirclebgZ = `${parseInt(`${tooltipsd}`) | 3}`;
      if (blackl) {
         break;
      }
   } while (blackl && (vipsportz.size == 3));
   let dragp = vipsportz.size <= 5750844;
   do {
       let chatroombackgroundA = String.fromCharCode(115,95,54,50,95,117,110,97,115,115,105,103,110,101,100,0);
       let defaultroombgJ = String.fromCharCode(121,95,56,48,95,113,117,97,110,116,105,108,101,0);
       let controlsK = String.fromCharCode(97,95,55,48,95,100,101,112,115,0);
       let main_u4: Array<any> = [590, 798, 240];
         chatroombackgroundA = "1";
      let downloadZ = String.fromCharCode(102,50,114,107,57,56,110,111,0) == defaultroombgJ;
      do {
          let actionsG = String.fromCharCode(101,108,101,118,97,116,101,95,51,95,54,51,0);
          let switch_m0N: Map<any, any> = new Map([[String.fromCharCode(116,95,55,49,95,100,111,108,98,121,0),false ], [String.fromCharCode(105,97,116,95,100,95,49,50,0),true ], [String.fromCharCode(108,105,98,95,112,95,53,55,0),false ]]);
         defaultroombgJ += `${1 - actionsG.length}`;
         actionsG = `${switch_m0N.size}`;
         switch_m0N = new Map([[`${switch_m0N.size}`, switch_m0N.size]]);
         if (downloadZ) {
            break;
         }
      } while ((2 == main_u4.length) && downloadZ);
       let floaterw = String.fromCharCode(101,95,51,50,95,98,105,97,115,101,100,0);
       let halfw = String.fromCharCode(102,105,108,101,110,97,109,101,115,95,49,95,49,52,0);
         floaterw += `${defaultroombgJ.length}`;
          let spinnerg = 3;
         floaterw = `${controlsK.length - 2}`;
         spinnerg <<= Math.min(Math.abs(3 - spinnerg), 5);
      let gifgoalx = String.fromCharCode(98,119,104,116,52,50,120,103,55,0) == chatroombackgroundA;
      do {
          let basketballtrophyZ = true;
          let robotoC = String.fromCharCode(99,95,57,55,0);
          let vietnamO = String.fromCharCode(99,107,115,117,109,95,51,95,52,56,0);
          let edit0 = 4.0;
          let showX = String.fromCharCode(122,95,52,95,114,101,119,105,110,100,0);
         chatroombackgroundA = `${robotoC.length % 1}`;
         basketballtrophyZ = (((!basketballtrophyZ ? 30 : showX.length) << (Math.min(showX.length, 1))) > 30);
         robotoC = `${showX.length}`;
         vietnamO = `${showX.length}`;
         edit0 -= parseFloat(`${3 << (Math.min(5, Math.abs(parseInt(`${edit0}`))))}`);
         if (gifgoalx) {
            break;
         }
      } while ((!defaultroombgJ.endsWith(`${chatroombackgroundA.length}`)) && gifgoalx);
         defaultroombgJ += `${halfw.length / 1}`;
      let championX = halfw.length >= 4942227;
      do {
         halfw += `${(String.fromCharCode(50,0) == controlsK ? controlsK.length : defaultroombgJ.length)}`;
         if (championX) {
            break;
         }
      } while ((defaultroombgJ != String.fromCharCode(79,0)) && championX);
       let backh = 3;
       let volumeR = 1;
      let privilegeG = chatroombackgroundA == String.fromCharCode(120,51,48,52,116,52,95,49,0);
      do {
         chatroombackgroundA += `${main_u4.length >> (Math.min(Math.abs(1), 1))}`;
         if (privilegeG) {
            break;
         }
      } while ((chatroombackgroundA.length > defaultroombgJ.length) && privilegeG);
      for (let w = 0; w < 1; w++) {
         halfw += "1";
      }
      for (let d = 0; d < 1; d++) {
         controlsK += `${main_u4.length % (Math.max(3, 7))}`;
      }
      vipsportz.set(`${defaultprofilepici}`, reactx.length);
      if (dragp) {
         break;
      }
   } while ((!basketballplayerplaceholderN.endsWith(`${vipsportz.size}`)) && dragp);
   while (!Array.from(vipsportz.values()).includes(tooltipsd)) {
       let applicationE = String.fromCharCode(100,121,97,100,105,99,95,104,95,55,0);
      let telegramp = applicationE == String.fromCharCode(104,100,113,122,119,49,53,97,0);
      do {
         applicationE += `${applicationE.length + 1}`;
         if (telegramp) {
            break;
         }
      } while (telegramp && (applicationE == applicationE));
      if (applicationE != String.fromCharCode(105,0)) {
         applicationE = `${applicationE.length}`;
      }
         applicationE += `${applicationE.length + 2}`;
      vipsportz.set(area4, basketballplayerplaceholderN.length + area4.length);
      break;
   }
       let subinl = String.fromCharCode(117,95,53,54,95,97,98,111,114,116,97,98,108,101,0);
       let injuryr = 1.0;
       let favoriteR = String.fromCharCode(100,95,49,48,48,95,109,117,116,101,100,0);
      let hcopy_ah = subinl == String.fromCharCode(49,100,117,0);
      do {
         subinl = `${subinl.length / (Math.max(2, 6))}`;
         if (hcopy_ah) {
            break;
         }
      } while (hcopy_ah && (subinl.startsWith(favoriteR)));
      if ((injuryr * parseFloat(`${favoriteR.length}`)) >= 2.86) {
         favoriteR += `${favoriteR.length ^ 2}`;
      }
         injuryr += parseFloat(`${favoriteR.length + subinl.length}`);
       let vnewarchdefaults3 = false;
       let volumeP = true;
         injuryr += (parseFloat(`${subinl.length | (vnewarchdefaults3 ? 5 : 5)}`));
         vnewarchdefaults3 = 26 > subinl.length;
      while ((favoriteR.length * parseInt(`${injuryr}`)) > 2 && (parseInt(`${injuryr}`) * favoriteR.length) > 2) {
         injuryr += parseFloat(`${2}`);
         break;
      }
          let inviteT = String.fromCharCode(99,104,97,110,103,101,115,95,112,95,51,57,0);
          let rncoreZ = String.fromCharCode(100,118,98,115,117,98,95,52,95,53,53,0);
         favoriteR = "2";
         inviteT += `${2 | rncoreZ.length}`;
         rncoreZ = `${inviteT.length}`;
      while (!volumeP && !vnewarchdefaults3) {
         volumeP = !volumeP;
         break;
      }
      basketballplayerplaceholderN += `${favoriteR.length % (Math.max(7, launchera.length))}`;
      vipsportz.set(`${tooltipsd}`, (reactx == String.fromCharCode(113,0) ? parseInt(`${tooltipsd}`) : reactx.length));
   if ((vipsportz.size - defaultprofilepici) >= 5.78 || 1 >= (vipsportz.size - parseInt(`${defaultprofilepici}`))) {
       let resend7 = String.fromCharCode(99,111,110,115,117,109,101,114,95,121,95,56,57,0);
       let leakcheckerj = 5.0;
       let recommendationh = false;
       let libbuffer5 = String.fromCharCode(105,95,52,49,95,105,102,111,114,109,97,116,0);
       let uploadt: Array<any> = [346, 442];
      if (3 <= libbuffer5.length) {
         recommendationh = (((recommendationh ? 97 : uploadt.length) >> (Math.min(uploadt.length, 2))) < 97);
      }
      if (!recommendationh) {
         recommendationh = 73.48 >= leakcheckerj || uploadt.length >= 45;
      }
      let reportS = 8817315.0 <= leakcheckerj;
      do {
         leakcheckerj -= (parseFloat(`${(recommendationh ? 3 : 2)}`));
         if (reportS) {
            break;
         }
      } while ((2 > (parseInt(`${leakcheckerj}`) - uploadt.length)) && reportS);
       let combinedy = 0;
       let predictionwinp = 0;
      while (2 > (4 ^ resend7.length) && (4 + resend7.length) > 4) {
         resend7 = "1";
         break;
      }
      if ((4 << (Math.min(3, uploadt.length))) < 1 || 4 < uploadt.length) {
         uploadt = [2];
      }
      for (let v = 0; v < 2; v++) {
         libbuffer5 = `${1 + combinedy}`;
      }
         combinedy <<= Math.min(Math.abs(parseInt(`${leakcheckerj}`)), 5);
      while (uploadt.length > 1) {
         uploadt = [libbuffer5.length];
         break;
      }
      for (let r = 0; r < 1; r++) {
         combinedy ^= combinedy | libbuffer5.length;
      }
      while ((predictionwinp / 5) >= 3 && 3.43 >= (leakcheckerj * 2.89)) {
          let networkZ = 4.0;
          let grayV: Map<any, any> = new Map([[String.fromCharCode(100,95,49,50,95,107,105,116,116,121,0),true ], [String.fromCharCode(115,116,97,110,100,97,108,111,110,101,95,110,95,52,57,0),false ]]);
          let loginx = 0;
          let countdown0 = 5;
         predictionwinp /= Math.max(1, 5);
         networkZ /= Math.max(parseFloat(`${countdown0}`), 3);
         grayV.set(`${countdown0}`, 1 + countdown0);
         loginx %= Math.max(3, grayV.size % (Math.max(4, countdown0)));
         break;
      }
      vipsportz.set(reactx, 3 & resend7.length);
   }
      yellowcirclebgZ += `${3 - vipsportz.size}`;

    const user = await mayi_Injury.guestLogin();

   for (let r = 0; r < 2; r++) {
      yellowcirclebgZ += "2";
   }
       let backwardo = String.fromCharCode(115,105,103,115,95,101,95,51,52,0);
       let sportsv = false;
      let videovarK = sportsv ? !sportsv : sportsv;
      do {
         sportsv = (19 >= ((sportsv ? backwardo.length : 19) & backwardo.length));
         if (videovarK) {
            break;
         }
      } while (videovarK && (backwardo.includes(`${sportsv}`)));
      for (let f = 0; f < 3; f++) {
          let footballfieldF = String.fromCharCode(115,95,57,52,95,114,101,108,97,121,111,117,116,0);
          let halffieldimageR = 0;
          let componenty = String.fromCharCode(114,95,57,54,95,112,97,105,114,0);
         sportsv = !sportsv;
         footballfieldF += `${componenty.length}`;
         halffieldimageR ^= componenty.length - footballfieldF.length;
      }
      if (!sportsv || 3 >= backwardo.length) {
         sportsv = !sportsv;
      }
      for (let l = 0; l < 1; l++) {
         backwardo += `${((sportsv ? 5 : 4) & backwardo.length)}`;
      }
      if (sportsv) {
         backwardo += `${((sportsv ? 1 : 3) ^ backwardo.length)}`;
      }
      for (let a = 0; a < 2; a++) {
         backwardo += "2";
      }
      launchera += `${backwardo.length ^ parseInt(`${defaultprofilepici}`)}`;
      yellowcirclebgZ = `${reactx.length}`;
       let moreG = 2.0;
       let giftm = true;
       let footballfieldz: Array<any> = [848, 624, 25];
      while ((5.81 - moreG) < 5.86 && (1 + footballfieldz.length) < 5) {
         footballfieldz.push(2);
         break;
      }
      while (!giftm) {
         giftm = footballfieldz.includes(giftm);
         break;
      }
       let reminderK: Map<any, any> = new Map([[String.fromCharCode(106,95,52,52,95,122,101,114,111,115,0),String.fromCharCode(99,111,100,101,119,111,114,100,95,56,95,53,56,0)], [String.fromCharCode(106,95,51,54,95,97,100,100,120,0),String.fromCharCode(100,95,52,53,95,115,116,100,105,110,116,0)], [String.fromCharCode(104,95,48,95,104,114,115,115,0),String.fromCharCode(122,95,49,55,95,103,97,116,104,101,114,0)]]);
       let iconfeedbackA: Map<any, any> = new Map([[String.fromCharCode(105,95,53,56,95,102,108,101,120,0),736], [String.fromCharCode(107,95,51,53,95,108,97,100,100,101,114,115,116,101,112,0),942], [String.fromCharCode(109,97,110,100,101,108,98,114,111,116,95,50,95,57,55,0),422]]);
      if (giftm) {
         footballfieldz = [((giftm ? 2 : 4) / (Math.max(iconfeedbackA.size, 1)))];
      }
          let homeplayer5 = 5.0;
         giftm = 62 <= iconfeedbackA.size || homeplayer5 <= 8.59;
          let currentL = 4;
          let nativemodule9 = 4.0;
          let closes = true;
         reminderK = new Map([[`${giftm}`, parseInt(`${moreG}`) ^ 2]]);
         currentL <<= Math.min(Math.abs((parseInt(`${nativemodule9}`) * (closes ? 2 : 2))), 3);
         nativemodule9 -= currentL << (Math.min(2, Math.abs(1)));
         closes = currentL > 47;
      if (footballfieldz.length > 5) {
         footballfieldz.push(footballfieldz.length);
      }
         giftm = iconfeedbackA.size <= reminderK.size;
      while (giftm) {
         giftm = reminderK.size == 90;
         break;
      }
      tooltipsd /= Math.max(4, parseInt(`${defaultprofilepici}`));
      vipsportz.set(launchera, 1);
      defaultprofilepici /= Math.max((String.fromCharCode(118,0) == basketballplayerplaceholderN ? basketballplayerplaceholderN.length : vipsportz.size), 2);
      launchera = `${yellowcirclebgZ.length}`;
   while (5 >= (vipsportz.size << (Math.min(reactx.length, 3))) && 5 >= (reactx.length << (Math.min(1, Math.abs(vipsportz.size))))) {
       let sellmathbackground6 = 5.0;
       let icondefaultthumbnailc = 3.0;
       let halffieldimageS = String.fromCharCode(105,95,54,50,95,114,101,97,114,114,97,110,103,101,0);
       let plash0 = String.fromCharCode(117,105,110,116,112,111,119,95,52,95,51,51,0);
      while (2.2 < (icondefaultthumbnailc + plash0.length)) {
          let philippinesK = String.fromCharCode(117,95,50,49,95,101,108,97,112,115,101,100,0);
          let footballfieldq: Map<any, any> = new Map([[String.fromCharCode(112,117,116,115,95,106,95,51,56,0),812], [String.fromCharCode(98,121,116,101,108,101,110,95,49,95,52,54,0),188], [String.fromCharCode(108,97,103,97,114,105,116,104,114,97,99,95,48,95,54,52,0),477]]);
          let libimagepipelineC = String.fromCharCode(108,95,49,54,95,104,105,103,104,0);
          let hometeamfieldd = 3.0;
         icondefaultthumbnailc -= parseInt(`${hometeamfieldd}`);
         philippinesK += `${3 >> (Math.min(3, Math.abs(footballfieldq.size)))}`;
         footballfieldq = new Map([[`${footballfieldq.size}`, 2 & footballfieldq.size]]);
         libimagepipelineC += "1";
         break;
      }
      if (icondefaultthumbnailc < 2.66) {
         plash0 = `${2 + halffieldimageS.length}`;
      }
          let iconclosewhitebgL = String.fromCharCode(98,97,114,107,95,120,95,50,53,0);
          let cancel6 = true;
          let nextj = 4.0;
         icondefaultthumbnailc /= Math.max(2, parseInt(`${sellmathbackground6}`) << (Math.min(1, Math.abs(3))));
         iconclosewhitebgL += `${((cancel6 ? 3 : 5) >> (Math.min(iconclosewhitebgL.length, 4)))}`;
         cancel6 = ((iconclosewhitebgL.length & (cancel6 ? 30 : iconclosewhitebgL.length)) == 30);
         nextj -= parseFloat(`${1}`);
         halffieldimageS += `${parseInt(`${icondefaultthumbnailc}`)}`;
      while (5 <= (4 % (Math.max(1, plash0.length))) || (1.78 - icondefaultthumbnailc) <= 1.17) {
          let valuesA: Map<any, any> = new Map([[String.fromCharCode(106,95,50,48,95,115,99,111,112,101,115,0),362], [String.fromCharCode(100,105,115,116,114,105,98,117,116,101,95,117,95,51,52,0),63]]);
          let countdown2 = 1.0;
          let paginationD: Map<any, any> = new Map([[String.fromCharCode(109,95,51,50,95,115,105,100,120,0),String.fromCharCode(97,100,100,105,116,105,111,110,95,106,95,51,53,0)], [String.fromCharCode(100,98,105,115,95,54,95,51,48,0),String.fromCharCode(112,114,111,100,117,99,101,114,95,57,95,52,50,0)], [String.fromCharCode(97,117,116,111,102,111,114,109,97,116,116,105,110,103,95,107,95,54,49,0),String.fromCharCode(101,99,109,117,108,116,95,107,95,52,57,0)]]);
          let listQ = 3;
         plash0 = `${paginationD.size}`;
         valuesA = new Map([[`${valuesA.size}`, parseInt(`${countdown2}`) + valuesA.size]]);
         countdown2 *= parseFloat(`${parseInt(`${countdown2}`) & 2}`);
         paginationD = new Map([[`${valuesA.size}`, valuesA.size]]);
         listQ %= Math.max(1, listQ);
         break;
      }
      for (let g = 0; g < 2; g++) {
         icondefaultthumbnailc /= Math.max(5, (halffieldimageS == String.fromCharCode(79,0) ? halffieldimageS.length : parseInt(`${sellmathbackground6}`)));
      }
         icondefaultthumbnailc -= plash0.length;
         halffieldimageS = "3";
          let castingE = String.fromCharCode(112,101,114,102,111,114,109,97,110,99,101,95,115,95,49,57,0);
         halffieldimageS += `${parseInt(`${icondefaultthumbnailc}`)}`;
         castingE += `${castingE.length >> (Math.min(5, castingE.length))}`;
      while (!plash0.startsWith(`${icondefaultthumbnailc}`)) {
         plash0 = `${parseInt(`${icondefaultthumbnailc}`) % (Math.max(6, halffieldimageS.length))}`;
         break;
      }
          let utilsD = String.fromCharCode(99,117,114,115,111,114,95,102,95,51,52,0);
          let iconpointscorew = 2.0;
          let libfabricjniW: Map<any, any> = new Map([[String.fromCharCode(114,95,54,55,95,103,101,111,109,0),626], [String.fromCharCode(107,95,54,57,95,117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,0),758]]);
         plash0 += `${libfabricjniW.size}`;
         utilsD += `${utilsD.length & parseInt(`${iconpointscorew}`)}`;
         iconpointscorew *= parseFloat(`${parseInt(`${iconpointscorew}`) | 3}`);
         libfabricjniW.set(utilsD, utilsD.length + 2);
      if (4.88 <= (icondefaultthumbnailc + sellmathbackground6) && (icondefaultthumbnailc + 4.88) <= 3.22) {
         sellmathbackground6 /= Math.max(5, 3);
      }
      reactx = `${parseInt(`${sellmathbackground6}`) ^ 3}`;
      break;
   }
   for (let c = 0; c < 1; c++) {
      area4 += `${1 << (Math.min(3, basketballplayerplaceholderN.length))}`;
   }
   for (let c = 0; c < 3; c++) {
      area4 = "2";
   }

    await dispatch(addUserAuthState(user));
  };

  const userState = useSelector<mayi_Baseline>('userReducer');

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

          {mayi_Gift.isLogin(userState.user) &&
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
              {mayi_Gift.isLogin(userState.user) &&
                <ShowMoreButton text="注销账号" onPress={toggleRemoveAccountDialog} />
              }
            </View>
          </View>
        </View>
        {mayi_Gift.isLogin(userState.user) && (
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
