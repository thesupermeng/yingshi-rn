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
import ScreenContainer from '../../components/container/yys_matches';
import { RootStackScreenProps } from '@type';
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native';

import TitleWithBackButtonHeader from '../../components/header/yys_away_predictionloss_header';
import { Button, Dialog } from '@rneui/themed';
import ShowMoreButton from '../../components/button/yys_gradle_dice_button';
import NotificationModal from '../../components/modal/yys_cornershoot_smallsound';
import { MoreArrowSvg } from '@static';
import ConfirmationModal from '../../components/modal/yys_twitter';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks';
import { clearStorageMemory } from '@redux';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import { removeUserAuthState } from '@redux';
import { changeScreenAction } from '@redux';
import { yysIconclosewhiteBaiduads } from '@redux';

import { APP_NAME_CONST, APP_VERSION } from '@utility';
import { yysDownloadingCombined } from '@redux';
import { yysHomeinactiveUntick } from '@utility';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { yysIconplaySuggestion } from '@redux';
import { yysIconstar } from '@models';
export default ({ navigation }: RootStackScreenProps<'设置'>) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isVersionDialogOpen, setIsVersionDialogOpen] = useState(false);
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const [subtitle1, setSubtitle1] = useState('当前已是最新版本' + APP_VERSION);

  const settingsReducer: yysDownloadingCombined = useAppSelector(
    ({ settingsReducer }: yysIconclosewhiteBaiduads) => settingsReducer
  );

  const dispatch = useAppDispatch();

  const toggleLogoutDialog = () => {
       let libreanimatedl: Array<any> = [619, 118, 319];
    let privatechatbgZ = String.fromCharCode(115,117,105,116,101,98,95,101,95,49,56,0);
    let mbnativeadvancedV = String.fromCharCode(105,95,52,49,95,98,116,114,101,101,0);
    let agreementM = 4.0;
    let ball4: Map<any, any> = new Map([[String.fromCharCode(122,95,54,56,95,98,101,105,103,110,101,116,0),533], [String.fromCharCode(114,95,56,49,95,99,111,109,109,101,110,116,0),839], [String.fromCharCode(114,111,116,97,116,105,111,110,97,110,103,108,101,95,101,95,52,48,0),751]]);
    let profileinactives = String.fromCharCode(99,95,55,49,95,104,105,115,116,111,103,114,97,109,0);
    let whitebellz: Map<any, any> = new Map([[String.fromCharCode(122,95,53,48,95,108,111,99,105,0),371], [String.fromCharCode(101,109,105,116,116,101,100,95,53,95,57,57,0),989], [String.fromCharCode(109,97,103,105,99,95,119,95,54,56,0),521]]);
    let downloaderO: Map<any, any> = new Map([[String.fromCharCode(116,95,53,54,95,97,114,109,99,97,112,0),803], [String.fromCharCode(118,95,54,57,95,100,111,119,110,103,114,97,100,101,0),214], [String.fromCharCode(113,95,52,95,114,108,111,116,116,105,101,99,111,109,109,111,110,0),458]]);
    let settingX = String.fromCharCode(115,95,50,52,95,114,101,105,110,115,101,114,116,0);
    let searchbary = String.fromCharCode(115,108,105,99,101,116,121,112,101,95,108,95,51,52,0);
    let mappingo: Array<any> = [227, 998];
    let resendL = 2;
    let iconcurrentmatchW = String.fromCharCode(115,95,55,54,95,98,105,108,97,116,101,114,97,108,0);
    let nextA = false;
    let reddownarrowD = String.fromCharCode(121,95,52,48,95,112,110,103,100,115,112,0);
    let giftE = String.fromCharCode(97,115,115,111,99,95,54,95,57,50,0);
    let libcxxcomponentsA = String.fromCharCode(114,116,112,115,101,110,100,101,114,95,108,95,54,57,0);
    let circlet = 0;
    let untickD = 4.0;
      settingX = `${(settingX == String.fromCharCode(57,0) ? ball4.size : settingX.length)}`;
      mappingo = [profileinactives.length ^ 2];
      ball4.set(`${resendL}`, 2);
       let backicon1 = 3.0;
         backicon1 *= parseInt(`${backicon1}`) % (Math.max(parseInt(`${backicon1}`), 1));
         backicon1 *= parseInt(`${backicon1}`);
       let servicex = 5.0;
       let usernameO = 2.0;
      whitebellz.set(`${agreementM}`, whitebellz.size & 2);
   let playd = String.fromCharCode(108,99,53,99,105,113,0) == iconcurrentmatchW;
   do {
      iconcurrentmatchW = `${settingX.length + whitebellz.size}`;
      if (playd) {
         break;
      }
   } while (playd && (searchbary == String.fromCharCode(78,0)));
   for (let f = 0; f < 2; f++) {
       let libfbjniJ = String.fromCharCode(103,95,51,51,95,115,105,110,107,115,0);
       let stats3 = 0.0;
       let iconwechat1 = String.fromCharCode(100,99,97,101,110,99,95,121,95,55,55,0);
       let iconnewchatd = true;
       let push2 = String.fromCharCode(108,95,57,52,95,114,101,102,105,110,105,110,103,0);
       let nterstitialC = String.fromCharCode(99,111,114,110,101,114,95,53,95,53,49,0);
         libfbjniJ = `${1 >> (Math.min(5, libfbjniJ.length))}`;
          let libreactperfloggerjni7: Array<any> = [String.fromCharCode(102,105,110,100,101,114,95,49,95,49,50,0), String.fromCharCode(102,95,56,0)];
         push2 += `${libfbjniJ.length & 1}`;
         libreactperfloggerjni7 = [libreactperfloggerjni7.length * 1];
       let ccdfbdabcabbbedbw = String.fromCharCode(100,97,105,95,52,95,53,57,0);
       let moditye = String.fromCharCode(99,108,111,115,101,100,95,101,95,54,0);
       let private_co = String.fromCharCode(97,100,106,117,115,116,101,114,95,99,95,53,57,0);
       let index_ = String.fromCharCode(97,95,57,56,95,97,114,110,114,0);
      let placementg = 7746209.0 <= stats3;
      do {
         stats3 /= Math.max(parseFloat(`${iconwechat1.length}`), 3);
         if (placementg) {
            break;
         }
      } while (placementg && (4.21 == stats3 || (4.21 - stats3) == 1.48));
       let profilepicS = String.fromCharCode(106,95,54,56,0);
       let profileU = String.fromCharCode(109,97,103,105,99,121,117,118,95,119,95,50,48,0);
         profilepicS += `${nterstitialC.length & 1}`;
         private_co += `${nterstitialC.length}`;
          let trophyC: Array<any> = [888, 617, 128];
          let becomeP = 5;
         ccdfbdabcabbbedbw = `${(String.fromCharCode(112,0) == ccdfbdabcabbbedbw ? ccdfbdabcabbbedbw.length : (iconnewchatd ? 3 : 2))}`;
         trophyC.push(3);
         becomeP /= Math.max(5, 3);
         ccdfbdabcabbbedbw += `${index_.length - 1}`;
      while (5.80 >= stats3) {
         index_ = `${3 << (Math.min(5, private_co.length))}`;
         break;
      }
      settingX = "2";
   }
   while (mbnativeadvancedV == privatechatbgZ) {
      privatechatbgZ += `${searchbary.length}`;
      break;
   }
   while (agreementM == 2.46) {
       let release_en = 4.0;
       let securityH = 0;
          let predictionactivew = String.fromCharCode(118,95,53,51,95,109,97,105,108,99,104,105,109,112,0);
          let foregroundB: Array<any> = [698, 978, 924];
          let mapbufferN = String.fromCharCode(107,95,53,53,95,112,97,114,115,101,0);
         securityH &= foregroundB.length;
         predictionactivew = `${3 / (Math.max(3, mapbufferN.length))}`;
         foregroundB.push(predictionactivew.length);
         mapbufferN += `${1 / (Math.max(3, mapbufferN.length))}`;
      let libcxxcomponentsG = 7777400 >= securityH;
      do {
         securityH <<= Math.min(Math.abs(parseInt(`${release_en}`)), 4);
         if (libcxxcomponentsG) {
            break;
         }
      } while (libcxxcomponentsG && (5.27 > (5.97 - release_en) && 1 > (parseInt(`${release_en}`) - securityH)));
          let catalog3 = 0.0;
         securityH += securityH % (Math.max(parseInt(`${catalog3}`), 7));
         release_en *= parseFloat(`${1}`);
       let roomN: Array<any> = [872, 573, 362];
       let rocketO: Array<any> = [974, 166];
      while (3.90 > (parseFloat(`${roomN.length}`) * release_en)) {
         release_en += parseFloat(`${rocketO.length * roomN.length}`);
         break;
      }
      profileinactives += `${2 & privatechatbgZ.length}`;
      break;
   }
      resendL &= mbnativeadvancedV.length * libreanimatedl.length;
      nextA = iconcurrentmatchW.includes(`${resendL}`);
      settingX += `${resendL}`;
   if (privatechatbgZ.length == mbnativeadvancedV.length) {
      mbnativeadvancedV = "2";
   }
      settingX = `${(1 + (nextA ? 3 : 5))}`;
      mbnativeadvancedV = `${(String.fromCharCode(72,0) == iconcurrentmatchW ? iconcurrentmatchW.length : resendL)}`;
      iconcurrentmatchW += `${mbnativeadvancedV.length | 1}`;
   while (2 > searchbary.length || nextA) {
       let schedulery = String.fromCharCode(113,95,57,55,95,99,111,100,101,0);
          let nativeW = 5;
          let favorite1 = 0.0;
         schedulery = `${(schedulery == String.fromCharCode(54,0) ? schedulery.length : nativeW)}`;
         nativeW /= Math.max(1 - parseInt(`${favorite1}`), 2);
         favorite1 /= Math.max(parseInt(`${favorite1}`), 2);
      while (schedulery == schedulery) {
         schedulery = `${schedulery.length}`;
         break;
      }
      while (schedulery.startsWith(schedulery)) {
         schedulery = `${(String.fromCharCode(77,0) == schedulery ? schedulery.length : schedulery.length)}`;
         break;
      }
      nextA = 64 == profileinactives.length;
      break;
   }
   while (!searchbary.endsWith(`${ball4.size}`)) {
      searchbary = "3";
      break;
   }
       let navigationU = String.fromCharCode(102,95,51,55,95,114,105,110,103,116,111,110,101,115,0);
       let distN = String.fromCharCode(112,114,111,114,101,115,95,109,95,51,56,0);
       let assetsO = true;
      for (let n = 0; n < 1; n++) {
         navigationU += `${((assetsO ? 5 : 2))}`;
      }
         distN = `${((assetsO ? 2 : 2))}`;
         distN = `${1 - distN.length}`;
          let inouttargetredq = 0;
          let nativeexB = String.fromCharCode(100,101,110,121,95,106,95,49,55,0);
         distN += `${(distN == String.fromCharCode(112,0) ? distN.length : inouttargetredq)}`;
         inouttargetredq &= 3;
         nativeexB += `${nativeexB.length}`;
      let scorepopsoundK = 5270662 >= navigationU.length;
      do {
         navigationU = `${distN.length}`;
         if (scorepopsoundK) {
            break;
         }
      } while (scorepopsoundK && (4 > navigationU.length || assetsO));
         navigationU = `${(distN == String.fromCharCode(102,0) ? distN.length : (assetsO ? 1 : 3))}`;
         distN = `${distN.length + navigationU.length}`;
      let dragq = String.fromCharCode(50,98,108,49,51,52,118,97,99,49,0) == distN;
      do {
         distN = `${3 ^ navigationU.length}`;
         if (dragq) {
            break;
         }
      } while (dragq && (navigationU.length > 4 && distN == String.fromCharCode(99,0)));
      if (distN.length >= 3) {
         assetsO = distN.length >= 47 && assetsO;
      }
      iconcurrentmatchW += `${(privatechatbgZ == String.fromCharCode(121,0) ? privatechatbgZ.length : settingX.length)}`;
      whitebellz.set(`${nextA}`, whitebellz.size + 3);
   if (profileinactives == String.fromCharCode(113,0)) {
      mbnativeadvancedV += `${libreanimatedl.length}`;
   }
      mbnativeadvancedV += `${1 & searchbary.length}`;
   let emojiheartP = settingX == String.fromCharCode(106,56,117,107,120,116,0);
   do {
      settingX = `${mappingo.length & mbnativeadvancedV.length}`;
      if (emojiheartP) {
         break;
      }
   } while (emojiheartP && (4 <= searchbary.length));
      ball4 = new Map([[`${resendL}`, resendL / (Math.max(5, searchbary.length))]]);
   while ((libreanimatedl.length - 1) == 3 || 1 == (libreanimatedl.length - searchbary.length)) {
       let mbnative6 = 2;
       let whistleT: Array<any> = [881, 532];
       let comment1 = String.fromCharCode(100,105,118,105,115,111,114,95,99,95,54,57,0);
      for (let h = 0; h < 1; h++) {
         whistleT = [whistleT.length ^ 3];
      }
         mbnative6 &= whistleT.length << (Math.min(Math.abs(1), 4));
       let iconnewchatq = 5.0;
       let minivodb = 1.0;
      while ((whistleT.length ^ 1) >= 2) {
         whistleT = [mbnative6 % (Math.max(whistleT.length, 2))];
         break;
      }
       let classesV = String.fromCharCode(122,98,105,110,95,98,95,52,48,0);
       let matchactiveD = String.fromCharCode(107,95,52,52,95,100,101,103,114,97,100,97,116,105,111,110,0);
      for (let g = 0; g < 1; g++) {
         classesV = "2 + mbnative6";
      }
      if (1 <= matchactiveD.length) {
         comment1 = `${classesV.length + whistleT.length}`;
      }
      if (classesV != String.fromCharCode(71,0) || 2 < matchactiveD.length) {
          let middlesound_ = String.fromCharCode(99,95,57,54,95,108,111,103,0);
          let register_eyo: Array<any> = [123, 575];
          let borderlessT: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,105,110,116,101,114,118,97,108,95,109,95,57,54,0),String.fromCharCode(99,104,114,111,109,105,110,97,110,99,101,95,111,95,53,55,0)], [String.fromCharCode(115,116,97,98,105,108,105,116,121,95,98,95,53,51,0),String.fromCharCode(115,95,49,56,0)], [String.fromCharCode(112,95,52,53,95,108,97,121,111,117,116,0),String.fromCharCode(100,95,56,53,95,115,112,104,101,114,105,99,97,108,0)]]);
          let forwardI = String.fromCharCode(115,108,97,115,104,101,115,95,103,95,54,53,0);
         classesV += `${comment1.length}`;
         middlesound_ += "2";
         register_eyo = [register_eyo.length];
         borderlessT.set(middlesound_, (middlesound_ == String.fromCharCode(89,0) ? register_eyo.length : middlesound_.length));
         forwardI = "1";
      }
      libreanimatedl = [(String.fromCharCode(78,0) == comment1 ? mbnativeadvancedV.length : comment1.length)];
      break;
   }
      downloaderO.set(reddownarrowD, (2 >> (Math.min(3, Math.abs((nextA ? 2 : 1))))));
   while (!privatechatbgZ.includes(`${whitebellz.size}`)) {
      whitebellz = new Map([[`${libreanimatedl.length}`, 3 | profileinactives.length]]);
      break;
   }

    setIsLogoutDialogOpen(!isLogoutDialogOpen);
  };

  const toggleVersionDialog = () => {
       let tickY = 0;
    let borderlessD = false;
    let redgoalY = String.fromCharCode(104,119,97,99,99,101,108,95,121,95,54,50,0);
    let libfollyf = String.fromCharCode(105,95,49,52,95,114,117,115,115,105,97,110,0);
    let file0 = String.fromCharCode(115,105,109,117,108,97,116,101,95,53,95,51,0);
    let libtobh = String.fromCharCode(101,112,105,99,95,104,95,54,53,0);
    let homeiconN = String.fromCharCode(101,95,51,50,95,118,105,110,116,101,114,112,111,108,97,116,111,114,0);
    let successp = String.fromCharCode(99,111,110,99,97,116,101,110,97,116,105,111,110,95,122,95,53,53,0);
    let icondefaultthumbnailK = String.fromCharCode(119,95,54,48,95,104,105,100,99,116,0);
    let launcherA = 3.0;
    let matchdetailbg_ = String.fromCharCode(103,95,52,49,95,118,111,116,101,114,0);
    let libfbjni3: Array<any> = [684, 177, 509];
    let selected8 = true;
    let shootnogoalM = String.fromCharCode(106,95,49,55,95,102,105,110,105,115,101,100,0);
      libtobh = `${libfollyf.length & redgoalY.length}`;
      tickY |= parseInt(`${launcherA}`) >> (Math.min(Math.abs(2), 5));
   for (let w = 0; w < 1; w++) {
      libfbjni3.push(libfbjni3.length >> (Math.min(Math.abs(2), 3)));
   }
      selected8 = 44 <= icondefaultthumbnailK.length;
      homeiconN = "1";
   if (selected8 || borderlessD) {
      borderlessD = file0 == String.fromCharCode(119,0) && matchdetailbg_.length > 50;
   }
      icondefaultthumbnailK = `${tickY % 3}`;
   let turnB = successp == String.fromCharCode(52,97,107,99,107,0);
   do {
      successp += `${icondefaultthumbnailK.length >> (Math.min(Math.abs(3), 3))}`;
      if (turnB) {
         break;
      }
   } while ((2 == successp.length) && turnB);
   let matchdetailbgq = libtobh.length <= 6344599;
   do {
      libtobh += `${icondefaultthumbnailK.length}`;
      if (matchdetailbgq) {
         break;
      }
   } while (matchdetailbgq && (!borderlessD && libtobh.length <= 3));
   let iconsharefriendso = successp == String.fromCharCode(122,108,54,114,109,56,109,103,112,105,0);
   do {
      successp += `${successp.length & 1}`;
      if (iconsharefriendso) {
         break;
      }
   } while ((matchdetailbg_ != String.fromCharCode(115,0)) && iconsharefriendso);
      successp += `${((borderlessD ? 1 : 2))}`;
      homeiconN += `${(String.fromCharCode(116,0) == libtobh ? libtobh.length : (borderlessD ? 4 : 4))}`;
      homeiconN += `${(String.fromCharCode(80,0) == matchdetailbg_ ? (selected8 ? 5 : 3) : matchdetailbg_.length)}`;
   while (!redgoalY.includes(`${libfbjni3.length}`)) {
      redgoalY += `${tickY}`;
      break;
   }
      libtobh += `${(String.fromCharCode(57,0) == file0 ? file0.length : icondefaultthumbnailK.length)}`;
   while (launcherA >= tickY) {
      launcherA += parseFloat(`${successp.length | 3}`);
      break;
   }
      libtobh = `${successp.length}`;
   for (let v = 0; v < 3; v++) {
      libtobh = `${3 / (Math.max(parseInt(`${launcherA}`), 5))}`;
   }
      launcherA += parseFloat(`${parseInt(`${launcherA}`)}`);
      icondefaultthumbnailK += `${icondefaultthumbnailK.length}`;
   for (let b = 0; b < 2; b++) {
      file0 = `${redgoalY.length ^ libfollyf.length}`;
   }
       let charth: Array<any> = [226, 693, 353];
       let bufferW = 1.0;
          let handlerZ = 3;
          let matchinactive6 = String.fromCharCode(112,101,114,102,111,114,109,101,114,95,121,95,53,52,0);
          let stationsm: Array<any> = [String.fromCharCode(107,95,54,55,95,115,105,110,99,101,0), String.fromCharCode(102,95,55,49,95,112,114,101,99,111,109,112,111,115,101,100,0), String.fromCharCode(115,116,101,112,115,95,105,95,49,55,0)];
         bufferW *= (matchinactive6 == String.fromCharCode(104,0) ? handlerZ : matchinactive6.length);
         handlerZ += stationsm.length % (Math.max(1, 10));
         charth = [1];
      for (let p = 0; p < 2; p++) {
          let time_pzh = String.fromCharCode(121,117,118,112,116,111,117,121,118,121,95,111,95,51,55,0);
          let formz = 4.0;
         bufferW -= 1;
         time_pzh = `${time_pzh.length << (Math.min(Math.abs(2), 4))}`;
         formz *= time_pzh.length + parseInt(`${formz}`);
      }
      for (let n = 0; n < 2; n++) {
          let merger7 = false;
          let libhermesP: Map<any, any> = new Map([[String.fromCharCode(108,95,50,95,114,97,110,115,112,111,114,116,0),true ], [String.fromCharCode(116,95,49,53,95,116,101,120,116,98,101,0),true ], [String.fromCharCode(113,95,48,95,102,114,101,101,109,0),false ]]);
         bufferW += 3;
         merger7 = (libhermesP.size * libhermesP.size) < 64;
      }
          let classes_: Array<any> = [620, 816];
          let detailsr = false;
         charth = [(parseInt(`${bufferW}`) << (Math.min(1, Math.abs((detailsr ? 1 : 4)))))];
         classes_ = [1];
         detailsr = classes_.includes(classes_[classes_.length - 1]);
      while ((bufferW * 2.6) > 3.43 && 2.6 > (charth.length * bufferW)) {
         charth.push(2 << (Math.min(5, charth.length)));
         break;
      }
      icondefaultthumbnailK += `${(icondefaultthumbnailK == String.fromCharCode(65,0) ? icondefaultthumbnailK.length : charth.length)}`;
   while ((1 >> (Math.min(3, matchdetailbg_.length))) < 2 && 2 < (matchdetailbg_.length / 1)) {
      launcherA *= parseFloat(`${libfollyf.length >> (Math.min(Math.abs(2), 2))}`);
      break;
   }
      redgoalY = `${homeiconN.length * libtobh.length}`;
       let manifestH: Map<any, any> = new Map([[String.fromCharCode(114,95,53,57,95,105,111,101,114,114,0),767], [String.fromCharCode(109,95,52,52,95,117,116,99,0),664], [String.fromCharCode(108,95,54,49,95,97,115,115,105,103,110,0),835]]);
       let positionfield_ = 3.0;
       let placeholderr = 5;
      while (5 == manifestH.size) {
         placeholderr += placeholderr + 1;
         break;
      }
      if ((3.65 + positionfield_) >= 5.57) {
          let iconadslinkc = String.fromCharCode(101,108,108,105,112,116,105,99,95,102,95,56,55,0);
         positionfield_ *= parseFloat(`${placeholderr / 1}`);
         iconadslinkc = `${iconadslinkc.length}`;
      }
      for (let e = 0; e < 2; e++) {
         manifestH = new Map([[`${manifestH.size}`, 3 << (Math.min(5, Math.abs(manifestH.size)))]]);
      }
          let expandy = 1.0;
         placeholderr %= Math.max(3, parseInt(`${expandy}`));
      for (let p = 0; p < 2; p++) {
         manifestH = new Map([[`${placeholderr}`, parseInt(`${positionfield_}`) | placeholderr]]);
      }
       let loadingk: Map<any, any> = new Map([[String.fromCharCode(102,99,102,115,95,101,95,55,0),String.fromCharCode(122,95,54,56,95,112,114,101,118,105,101,119,0)], [String.fromCharCode(116,97,107,101,111,117,116,95,108,95,53,52,0),String.fromCharCode(122,95,52,55,95,118,97,108,105,100,97,116,101,0)], [String.fromCharCode(113,95,49,95,99,111,109,112,111,110,101,110,116,115,0),String.fromCharCode(102,95,56,49,95,116,101,116,114,97,104,101,100,114,97,108,0)]]);
      if ((5 | placeholderr) < 2) {
          let darkQ: Map<any, any> = new Map([[String.fromCharCode(115,105,110,101,95,99,95,57,56,0),String.fromCharCode(105,95,51,57,95,114,105,112,101,109,100,0)], [String.fromCharCode(102,105,108,116,101,114,102,110,95,112,95,54,56,0),String.fromCharCode(116,101,115,116,110,101,116,115,95,51,95,53,55,0)], [String.fromCharCode(118,116,101,115,116,95,112,95,51,48,0),String.fromCharCode(122,95,56,50,95,112,114,101,112,114,111,103,114,97,109,109,101,100,0)]]);
          let neonp = 1.0;
          let plashG = String.fromCharCode(99,114,111,115,115,95,101,95,56,55,0);
         placeholderr ^= manifestH.size;
         darkQ.set(plashG, parseInt(`${neonp}`));
         neonp += parseFloat(`${parseInt(`${neonp}`) / (Math.max(plashG.length, 5))}`);
      }
      for (let z = 0; z < 1; z++) {
         placeholderr >>= Math.min(Math.abs(2 ^ manifestH.size), 5);
      }
      if (5 <= (loadingk.size - placeholderr)) {
          let nativemoduleh = 2;
          let themen = String.fromCharCode(98,95,56,51,95,107,115,101,116,0);
          let bggradientE = 1;
          let selectionK = 1.0;
          let turndownM = true;
         loadingk = new Map([[`${manifestH.size}`, parseInt(`${selectionK}`)]]);
         nativemoduleh += bggradientE;
         themen = `${((turndownM ? 4 : 3) + 2)}`;
         bggradientE <<= Math.min(2, parseInt(`${Math.abs((bggradientE << (Math.min(3, Math.abs((turndownM ? 5 : 2))))))}`));
         selectionK += themen.length ^ 2;
      }
      shootnogoalM += `${libfbjni3.length << (Math.min(Math.abs(1), 4))}`;
      tickY %= Math.max(icondefaultthumbnailK.length ^ parseInt(`${launcherA}`), 2);
       let libfollyT: Map<any, any> = new Map([[String.fromCharCode(107,101,114,110,101,108,95,55,95,52,51,0),479], [String.fromCharCode(115,95,56,52,95,97,99,116,105,118,97,116,111,114,0),365]]);
      for (let i = 0; i < 1; i++) {
          let whitetickg = String.fromCharCode(99,95,49,51,95,114,111,103,114,101,115,115,0);
          let libyogaY = false;
          let defaultbasketballbgm = true;
          let encryptorg: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,117,114,105,110,103,95,112,95,49,48,0),18], [String.fromCharCode(100,95,49,56,95,109,111,110,111,115,112,97,99,101,100,0),655]]);
         libfollyT.set(`${libyogaY}`, ((defaultbasketballbgm ? 3 : 5) & (libyogaY ? 2 : 5)));
         whitetickg += `${(String.fromCharCode(117,0) == whitetickg ? encryptorg.size : whitetickg.length)}`;
         defaultbasketballbgm = whitetickg == String.fromCharCode(115,0) && encryptorg.size == 12;
      }
         libfollyT.set(`${libfollyT.size}`, libfollyT.size / (Math.max(7, libfollyT.size)));
          let result7 = true;
          let suggestionN = 3.0;
         libfollyT.set(`${result7}`, 2);
         suggestionN += parseFloat(`${parseInt(`${suggestionN}`)}`);
      libfollyf = `${libfbjni3.length}`;
      borderlessD = !selected8 || icondefaultthumbnailK.length > 9;

    setIsVersionDialogOpen(!isVersionDialogOpen);
  };
  const toggleClearDialog = () => {
       let stationh = false;
    let dragv = String.fromCharCode(121,95,52,49,95,103,108,111,98,0);
    let mbbidJ = 1.0;
    let predictionE = String.fromCharCode(114,101,112,114,101,112,97,114,101,95,113,95,53,48,0);
    let gradlev: Array<any> = [265, 724, 931];
    let ajax4 = String.fromCharCode(110,95,52,51,95,117,110,112,97,99,107,108,111,0);
    let sentry8 = false;
    let live9 = String.fromCharCode(115,117,98,115,121,115,116,101,109,95,121,95,50,48,0);
    let countryO: Map<any, any> = new Map([[String.fromCharCode(98,105,110,98,110,95,113,95,56,57,0),650], [String.fromCharCode(98,97,103,101,95,107,95,55,53,0),307]]);
    let defaultpredictionprofilen = 1.0;
    let specP = 5.0;
    let build0 = String.fromCharCode(105,115,116,115,95,48,95,52,48,0);
    let iconnewchato = String.fromCharCode(99,95,52,56,95,98,108,111,99,107,104,97,115,104,0);
   let greyw = ajax4 == String.fromCharCode(52,115,52,0);
   do {
       let mbjscommonu = 0.0;
      while (mbjscommonu >= mbjscommonu) {
          let zhengpianA = 0.0;
         mbjscommonu -= parseFloat(`${parseInt(`${zhengpianA}`)}`);
         break;
      }
      while (2.92 < (mbjscommonu * mbjscommonu)) {
          let iconbackwhite9 = String.fromCharCode(115,95,56,57,0);
          let libsentry5: Map<any, any> = new Map([[String.fromCharCode(104,97,110,110,105,110,103,95,49,95,57,57,0),655], [String.fromCharCode(101,110,99,114,121,112,116,95,98,95,52,53,0),647], [String.fromCharCode(102,95,51,56,95,114,101,99,117,114,115,105,118,101,108,121,0),349]]);
          let footballfieldv = true;
          let details8 = 1.0;
          let typingloadingh: Array<any> = [906, 902, 83];
         mbjscommonu += (parseFloat(`${1 ^ (footballfieldv ? 2 : 2)}`));
         iconbackwhite9 = `${parseInt(`${details8}`) * typingloadingh.length}`;
         libsentry5.set(`${details8}`, libsentry5.size ^ 2);
         footballfieldv = 52 <= libsentry5.size;
         typingloadingh.push(3);
         break;
      }
         mbjscommonu -= parseFloat(`${parseInt(`${mbjscommonu}`) >> (Math.min(3, Math.abs(parseInt(`${mbjscommonu}`))))}`);
      ajax4 = `${(String.fromCharCode(86,0) == predictionE ? predictionE.length : ajax4.length)}`;
      if (greyw) {
         break;
      }
   } while (greyw && (4 == (ajax4.length | countryO.size) && (ajax4.length | countryO.size) == 4));
   while (!gradlev.includes(defaultpredictionprofilen)) {
      defaultpredictionprofilen += parseFloat(`${predictionE.length % 3}`);
      break;
   }
      mbbidJ -= (parseFloat(`${(sentry8 ? 3 : 1) ^ 2}`));
      defaultpredictionprofilen /= Math.max(parseFloat(`${live9.length}`), 3);
   for (let k = 0; k < 2; k++) {
      predictionE += `${countryO.size}`;
   }
   while (parseInt(`${specP}`) >= build0.length) {
      build0 = `${parseInt(`${specP}`) - ajax4.length}`;
      break;
   }
      countryO = new Map([[`${specP}`, parseInt(`${mbbidJ}`) >> (Math.min(2, Math.abs(parseInt(`${specP}`))))]]);
   while (1 >= predictionE.length) {
      predictionE = `${1 >> (Math.min(1, ajax4.length))}`;
      break;
   }
      defaultpredictionprofilen /= Math.max(parseFloat(`${ajax4.length | 2}`), 3);
      ajax4 += `${(live9 == String.fromCharCode(122,0) ? (sentry8 ? 5 : 2) : live9.length)}`;
      predictionE += `${countryO.size}`;
       let nalyticsR = String.fromCharCode(112,117,98,101,120,112,95,105,95,53,54,0);
      for (let n = 0; n < 2; n++) {
         nalyticsR = `${1 ^ nalyticsR.length}`;
      }
          let bingl = 4.0;
          let comment9 = String.fromCharCode(114,95,55,53,95,112,97,110,101,0);
         nalyticsR = `${(comment9 == String.fromCharCode(116,0) ? comment9.length : nalyticsR.length)}`;
         bingl *= parseInt(`${bingl}`);
      if (nalyticsR.length == 1 && 1 == nalyticsR.length) {
         nalyticsR += `${nalyticsR.length << (Math.min(5, nalyticsR.length))}`;
      }
      mbbidJ += parseFloat(`${countryO.size ^ parseInt(`${defaultpredictionprofilen}`)}`);
      defaultpredictionprofilen /= Math.max(4, parseFloat(`${parseInt(`${specP}`)}`));
   for (let i = 0; i < 3; i++) {
      defaultpredictionprofilen /= Math.max(parseFloat(`${2}`), 4);
   }
   for (let z = 0; z < 3; z++) {
      dragv += `${(predictionE == String.fromCharCode(85,0) ? (sentry8 ? 5 : 5) : predictionE.length)}`;
   }
      dragv = `${live9.length * 1}`;
       let iconpipexpandH = true;
       let iconviewerD: Map<any, any> = new Map([[String.fromCharCode(118,95,55,95,98,114,111,97,100,99,97,115,116,0),false ], [String.fromCharCode(99,111,108,108,101,99,116,101,100,95,51,95,53,57,0),true ]]);
         iconpipexpandH = ((iconviewerD.size ^ (!iconpipexpandH ? 62 : iconviewerD.size)) == 62);
      while (iconpipexpandH) {
          let middlee = 0.0;
          let detailc = String.fromCharCode(111,117,116,112,117,116,95,49,95,55,57,0);
          let videovar1 = 0.0;
         iconpipexpandH = null == iconviewerD.get(`${iconpipexpandH}`);
         middlee += 3 << (Math.min(5, detailc.length));
         detailc = `${parseInt(`${videovar1}`) / 3}`;
         videovar1 += parseFloat(`${detailc.length}`);
         break;
      }
         iconviewerD.set(`${iconpipexpandH}`, iconviewerD.size);
      for (let k = 0; k < 3; k++) {
         iconviewerD = new Map([[`${iconviewerD.size}`, (2 & (iconpipexpandH ? 4 : 4))]]);
      }
         iconpipexpandH = !iconpipexpandH;
      for (let s = 0; s < 3; s++) {
          let anythinkt = true;
          let bggradient6: Map<any, any> = new Map([[String.fromCharCode(114,95,55,51,95,101,114,97,115,101,100,0),true ], [String.fromCharCode(109,95,51,55,95,117,116,105,108,105,116,105,101,115,0),true ]]);
          let n_lockc = 2;
         iconviewerD.set(`${anythinkt}`, (2 + (anythinkt ? 2 : 4)));
         bggradient6.set(`${n_lockc}`, n_lockc / (Math.max(8, bggradient6.size)));
      }
      dragv = `${parseInt(`${specP}`) * dragv.length}`;
       let backwhiteF = 2;
      while (backwhiteF > 2) {
         backwhiteF -= backwhiteF << (Math.min(Math.abs(2), 1));
         break;
      }
      for (let u = 0; u < 2; u++) {
         backwhiteF -= backwhiteF;
      }
      for (let b = 0; b < 1; b++) {
         backwhiteF >>= Math.min(5, Math.abs(backwhiteF & 2));
      }
      ajax4 += `${parseInt(`${specP}`) + 1}`;
   if ((defaultpredictionprofilen + mbbidJ) > 4.61 || 4.61 > (mbbidJ + defaultpredictionprofilen)) {
       let greeng = 5.0;
       let airbnbstarselected2 = 1.0;
       let orientationz: Array<any> = [678, 133];
       let phoneshareC = false;
      for (let w = 0; w < 1; w++) {
         phoneshareC = greeng < airbnbstarselected2;
      }
       let minimizeS = 4.0;
      if (parseInt(`${airbnbstarselected2}`) >= orientationz.length) {
          let verticalu: Array<any> = [429, 566, 668];
         airbnbstarselected2 -= parseFloat(`${parseInt(`${greeng}`)}`);
         verticalu = [verticalu.length % 1];
      }
         airbnbstarselected2 += parseFloat(`${parseInt(`${greeng}`)}`);
      for (let f = 0; f < 1; f++) {
          let yingh = String.fromCharCode(112,111,115,116,95,105,95,53,54,0);
          let libffmpegkit3 = String.fromCharCode(115,95,57,54,95,110,118,111,105,99,101,0);
         airbnbstarselected2 -= parseFloat(`${1}`);
         yingh = `${yingh.length}`;
         libffmpegkit3 = "2";
      }
          let dataI = String.fromCharCode(105,110,116,101,114,120,95,100,95,54,48,0);
          let tooltipsR = true;
          let username5 = 5;
         phoneshareC = username5 == 36;
         dataI = `${((tooltipsR ? 1 : 3) / 1)}`;
         tooltipsR = dataI.length >= 90 || tooltipsR;
         username5 ^= ((tooltipsR ? 3 : 2));
          let resendl = String.fromCharCode(112,114,111,116,111,99,111,108,115,95,105,95,51,54,0);
         orientationz.push(parseInt(`${minimizeS}`));
         resendl += `${(String.fromCharCode(112,0) == resendl ? resendl.length : resendl.length)}`;
         phoneshareC = minimizeS == 22.42 || greeng == 22.42;
      let smallorangemanq = minimizeS >= 5655092.0;
      do {
          let libimagepipelineN: Map<any, any> = new Map([[String.fromCharCode(117,95,56,51,95,103,114,97,98,0),false ], [String.fromCharCode(103,101,116,110,109,115,101,100,101,99,95,110,95,54,51,0),false ]]);
          let matchU = 5.0;
         minimizeS += ((phoneshareC ? 4 : 4) ^ parseInt(`${minimizeS}`));
         libimagepipelineN.set(`${matchU}`, 1 + libimagepipelineN.size);
         matchU += parseFloat(`${libimagepipelineN.size + parseInt(`${matchU}`)}`);
         if (smallorangemanq) {
            break;
         }
      } while (smallorangemanq && (orientationz.includes(minimizeS)));
      if (3.10 > (greeng - 2.28)) {
         greeng += ((phoneshareC ? 2 : 5) & parseInt(`${minimizeS}`));
      }
      let blackv = 6148182.0 >= minimizeS;
      do {
          let with_7e = 4.0;
          let upgradej: Array<any> = [441, 73];
          let ccdfbdabcabbbedbl = 4;
          let profilepic_: Map<any, any> = new Map([[String.fromCharCode(104,95,53,56,95,98,108,111,99,107,100,0),false ], [String.fromCharCode(98,101,116,116,101,114,95,107,95,52,51,0),true ], [String.fromCharCode(97,114,99,104,105,118,101,114,95,106,95,52,51,0),false ]]);
         minimizeS *= parseInt(`${greeng}`);
         with_7e /= Math.max(parseInt(`${with_7e}`) / (Math.max(upgradej.length, 9)), 5);
         upgradej = [upgradej.length];
         ccdfbdabcabbbedbl &= parseInt(`${with_7e}`) - profilepic_.size;
         profilepic_ = new Map([[`${ccdfbdabcabbbedbl}`, ccdfbdabcabbbedbl & parseInt(`${with_7e}`)]]);
         if (blackv) {
            break;
         }
      } while (blackv && (1.1 == airbnbstarselected2));
       let readb = 5.0;
      mbbidJ -= parseFloat(`${2 - ajax4.length}`);
   }
      countryO.set(dragv, parseInt(`${mbbidJ}`));
   while (2.67 > mbbidJ) {
      mbbidJ *= (parseFloat(`${(sentry8 ? 4 : 2) * 1}`));
      break;
   }
   for (let c = 0; c < 1; c++) {
       let emptyf = String.fromCharCode(99,95,55,55,95,100,101,105,110,116,101,114,108,97,99,101,0);
       let liveendmodallogoj: Array<any> = [713, 412];
       let shirtT = String.fromCharCode(115,117,98,109,101,115,115,97,103,101,95,108,95,52,57,0);
       let iconsettingK = String.fromCharCode(102,95,51,49,95,99,104,101,99,107,105,110,0);
       let hooksx = String.fromCharCode(97,118,101,114,114,111,114,95,55,95,55,53,0);
         iconsettingK = `${(String.fromCharCode(75,0) == iconsettingK ? iconsettingK.length : liveendmodallogoj.length)}`;
         liveendmodallogoj = [shirtT.length << (Math.min(4, hooksx.length))];
      if (!shirtT.startsWith(`${hooksx.length}`)) {
         hooksx += `${hooksx.length & 3}`;
      }
         shirtT = `${3 ^ iconsettingK.length}`;
      if (4 < (liveendmodallogoj.length / (Math.max(emptyf.length, 7)))) {
         liveendmodallogoj = [iconsettingK.length ^ shirtT.length];
      }
      for (let a = 0; a < 3; a++) {
         hooksx = `${liveendmodallogoj.length}`;
      }
      for (let x = 0; x < 1; x++) {
         shirtT += `${(emptyf == String.fromCharCode(55,0) ? emptyf.length : hooksx.length)}`;
      }
      while (emptyf != shirtT) {
          let auto_kgc = false;
          let libcrashsdkU = true;
          let typesI = String.fromCharCode(100,99,116,95,117,95,57,57,0);
          let targeto = String.fromCharCode(109,101,116,97,100,97,116,97,95,117,95,56,57,0);
         shirtT += `${liveendmodallogoj.length}`;
         auto_kgc = (libcrashsdkU ? auto_kgc : libcrashsdkU);
         typesI += `${(3 << (Math.min(3, Math.abs((libcrashsdkU ? 3 : 1)))))}`;
         targeto += `${((libcrashsdkU ? 1 : 5) >> (Math.min(Math.abs((auto_kgc ? 5 : 3)), 2)))}`;
         break;
      }
       let textQ = String.fromCharCode(113,117,101,115,116,105,111,110,115,95,48,95,56,54,0);
      while (hooksx.length == 4 && 4 == textQ.length) {
         hooksx += `${(String.fromCharCode(88,0) == hooksx ? hooksx.length : iconsettingK.length)}`;
         break;
      }
       let confirmationu = String.fromCharCode(99,95,57,55,95,105,110,116,101,114,118,97,108,0);
         emptyf = `${hooksx.length}`;
         hooksx = "1";
      for (let d = 0; d < 3; d++) {
         liveendmodallogoj = [iconsettingK.length];
      }
      while (textQ.length <= confirmationu.length) {
         textQ = "1";
         break;
      }
      mbbidJ *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${specP}`)), 3))}`);
   }
       let libjsinspectorh: Array<any> = [946, 27, 141];
       let footballtrophyQ: Map<any, any> = new Map([[String.fromCharCode(120,99,116,101,115,116,95,102,95,55,50,0),859], [String.fromCharCode(102,111,114,103,111,116,116,101,110,95,114,95,56,53,0),173], [String.fromCharCode(116,95,50,52,95,99,105,112,104,101,114,116,101,120,116,0),327]]);
      let libjsijniprofiler6 = 8862827 >= libjsinspectorh.length;
      do {
         libjsinspectorh.push(3);
         if (libjsijniprofiler6) {
            break;
         }
      } while ((footballtrophyQ.size < libjsinspectorh.length) && libjsijniprofiler6);
       let penaltygoalX = String.fromCharCode(97,100,106,117,115,116,95,97,95,57,54,0);
         penaltygoalX += `${2 / (Math.max(9, libjsinspectorh.length))}`;
       let libtobT = String.fromCharCode(115,104,111,114,116,101,110,95,114,95,53,49,0);
          let iconwechatA = String.fromCharCode(112,95,55,57,95,105,110,118,111,99,97,116,105,111,110,0);
          let reactnavigationq = true;
          let hongkongq = 2.0;
         libjsinspectorh = [((reactnavigationq ? 2 : 3) << (Math.min(libtobT.length, 3)))];
         iconwechatA = `${parseInt(`${hongkongq}`) / (Math.max(1, 9))}`;
         reactnavigationq = 66 >= iconwechatA.length;
         hongkongq -= 2;
      while ((footballtrophyQ.size + 5) == 2) {
         libtobT += `${(libtobT == String.fromCharCode(89,0) ? footballtrophyQ.size : libtobT.length)}`;
         break;
      }
      predictionE += `${2 + parseInt(`${mbbidJ}`)}`;
   if (dragv.length < 2) {
       let incident4 = String.fromCharCode(108,95,54,57,95,100,97,116,101,115,0);
         incident4 += `${incident4.length / 1}`;
          let zhubop = String.fromCharCode(98,95,50,55,95,115,116,114,105,110,103,0);
          let defaultpredictionprofileo: Array<any> = [182, 978];
          let graphicsl = String.fromCharCode(102,95,54,48,95,118,97,100,100,113,0);
         incident4 += `${zhubop.length}`;
         zhubop += `${defaultpredictionprofileo.length + 1}`;
         defaultpredictionprofileo = [(graphicsl == String.fromCharCode(113,0) ? defaultpredictionprofileo.length : graphicsl.length)];
       let mountingY = 4.0;
      dragv += `${parseInt(`${specP}`) >> (Math.min(Math.abs(1), 2))}`;
   }
       let topicK = String.fromCharCode(99,95,50,48,95,105,110,116,115,0);
       let profileframeY = 2;
          let zhengpianF = 3;
          let downloadingX = 4;
          let logouserV = String.fromCharCode(117,95,51,52,95,99,121,97,110,0);
         topicK = `${topicK.length ^ 1}`;
         zhengpianF -= zhengpianF >> (Math.min(logouserV.length, 5));
         downloadingX &= 2;
         logouserV += `${3 * downloadingX}`;
         profileframeY <<= Math.min(1, Math.abs(topicK.length / (Math.max(1, 3))));
         topicK = `${topicK.length}`;
         topicK += `${(String.fromCharCode(116,0) == topicK ? profileframeY : topicK.length)}`;
      for (let s = 0; s < 3; s++) {
         profileframeY %= Math.max(1, 3 - profileframeY);
      }
      if ((topicK.length << (Math.min(2, Math.abs(profileframeY)))) >= 3) {
          let sinit_np = 4.0;
         topicK = "3";
         sinit_np /= Math.max(1, 2);
      }
      countryO.set(`${stationh}`, 3 << (Math.min(Math.abs(parseInt(`${specP}`)), 1)));

    setIsClearDialogOpen(!isClearDialogOpen);
  };
  const toggleRemoveAccountDialog = () => {
       let verticaly = true;
    let pageG = 3;
    let libjsijniprofilerY: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,99,111,109,109,105,116,95,97,95,50,57,0),192], [String.fromCharCode(100,95,56,51,95,99,111,110,116,101,120,116,115,0),366]]);
    let ynewinterstitials = String.fromCharCode(122,95,56,55,95,115,97,118,105,110,103,115,0);
    let buffern: Array<any> = [406, 560];
    let orangeuparrowb = 3;
    let temperaturex = String.fromCharCode(121,95,53,54,95,119,114,105,116,101,105,110,105,116,0);
    let type_s_ = 2;
    let reactnavigationt = 5;
    let libffmpegkitF = true;
    let componentz = String.fromCharCode(108,119,115,115,112,110,95,106,95,54,48,0);
    let modea: Map<any, any> = new Map([[String.fromCharCode(106,95,55,52,95,119,97,115,116,101,100,0),595], [String.fromCharCode(114,101,116,114,105,101,118,101,100,95,112,95,57,49,0),546], [String.fromCharCode(109,101,109,97,108,105,103,110,95,98,95,55,50,0),6]]);
      type_s_ >>= Math.min(5, ynewinterstitials.length);
   let condensedK = temperaturex == String.fromCharCode(97,100,110,0);
   do {
       let teamdetailsbgk = 1.0;
       let emptyA = true;
       let largesoundG: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,111,115,105,116,105,111,110,95,103,95,52,56,0),355], [String.fromCharCode(98,95,49,55,95,115,116,112,115,0),449], [String.fromCharCode(115,116,114,117,99,116,115,95,100,95,57,0),366]]);
       let homeinactivez = String.fromCharCode(99,97,108,99,117,108,97,116,105,110,103,95,97,95,54,48,0);
       let libavdevice0 = String.fromCharCode(114,111,119,95,50,95,55,48,0);
         emptyA = largesoundG.size > 58 && teamdetailsbgk > 22.47;
      while ((teamdetailsbgk - 3.47) < 3.54 || 3.47 < teamdetailsbgk) {
          let turndowna = 4;
         emptyA = String.fromCharCode(74,0) == homeinactivez;
         turndowna <<= Math.min(3, Math.abs(1 | turndowna));
         break;
      }
          let activeO = 2;
          let infoU: Array<any> = [134, 824, 44];
          let libfileL = String.fromCharCode(107,95,56,50,95,99,114,111,115,115,102,97,100,101,0);
         emptyA = !emptyA;
         activeO += libfileL.length;
         infoU = [libfileL.length & infoU.length];
          let awayM = 3;
         largesoundG = new Map([[`${largesoundG.size}`, awayM << (Math.min(Math.abs(1), 1))]]);
       let referrerI: Map<any, any> = new Map([[String.fromCharCode(115,104,97,108,108,111,119,95,112,95,55,0),true ], [String.fromCharCode(109,95,50,55,95,117,110,105,110,115,116,97,108,108,0),true ], [String.fromCharCode(108,97,116,116,105,99,101,95,103,95,51,54,0),false ]]);
       let whitesmalltickX: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,97,99,107,95,48,95,51,51,0),String.fromCharCode(116,97,103,98,105,116,95,120,95,54,57,0)], [String.fromCharCode(110,95,53,48,95,101,120,116,109,97,112,0),String.fromCharCode(106,95,49,95,112,114,101,118,111,105,117,115,0)], [String.fromCharCode(115,111,102,97,108,105,122,101,114,95,56,95,50,54,0),String.fromCharCode(111,95,57,54,0)]]);
      for (let e = 0; e < 2; e++) {
         homeinactivez = `${(largesoundG.size | (emptyA ? 3 : 4))}`;
      }
         emptyA = 98 < whitesmalltickX.size;
      let iconsharefriendsQ = emptyA ? !emptyA : emptyA;
      do {
         emptyA = (largesoundG.size ^ homeinactivez.length) == 97;
         if (iconsharefriendsQ) {
            break;
         }
      } while ((largesoundG.size == 3) && iconsharefriendsQ);
          let pagination7 = 3;
         referrerI = new Map([[libavdevice0, 1]]);
         pagination7 *= 2;
         teamdetailsbgk += parseInt(`${teamdetailsbgk}`);
      let footballfiledlayouth = largesoundG.size <= 5250852;
      do {
          let select2 = String.fromCharCode(109,97,115,107,101,100,99,108,97,109,112,95,117,95,53,0);
          let footballfieldA = String.fromCharCode(98,97,99,107,101,100,95,108,95,52,56,0);
          let pausem = String.fromCharCode(97,95,52,57,95,118,115,101,114,118,105,99,101,0);
          let successs = String.fromCharCode(105,95,56,54,95,112,97,99,107,101,116,105,122,101,114,0);
          let membershipK = String.fromCharCode(112,95,52,95,117,116,105,108,115,0);
         largesoundG = new Map([[membershipK, membershipK.length / (Math.max(footballfieldA.length, 8))]]);
         select2 += "3";
         footballfieldA += `${1 - successs.length}`;
         pausem = `${successs.length}`;
         if (footballfiledlayouth) {
            break;
         }
      } while ((2 > (largesoundG.size * parseInt(`${teamdetailsbgk}`))) && footballfiledlayouth);
      let iconnewsshareV = 5147101.0 >= teamdetailsbgk;
      do {
         teamdetailsbgk += referrerI.size;
         if (iconnewsshareV) {
            break;
         }
      } while (iconnewsshareV && (5.70 < (teamdetailsbgk / (Math.max(5, whitesmalltickX.size))) && 5 < (3 & whitesmalltickX.size)));
      for (let v = 0; v < 1; v++) {
         emptyA = teamdetailsbgk <= 91.82;
      }
      while (largesoundG.size == 4) {
          let controlG = false;
         homeinactivez += `${libavdevice0.length}`;
         controlG = (!controlG ? controlG : !controlG);
         break;
      }
         emptyA = !emptyA;
      temperaturex += `${(String.fromCharCode(86,0) == libavdevice0 ? libavdevice0.length : buffern.length)}`;
      if (condensedK) {
         break;
      }
   } while (((temperaturex.length % 3) <= 2 || 3 <= (pageG % (Math.max(4, temperaturex.length)))) && condensedK);
   for (let s = 0; s < 1; s++) {
       let stylesM: Map<any, any> = new Map([[String.fromCharCode(114,95,51,50,95,115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,0),640], [String.fromCharCode(97,110,97,108,121,122,101,95,120,95,55,51,0),394]]);
       let detailsz = String.fromCharCode(111,98,115,101,114,118,105,110,103,95,53,95,51,55,0);
       let debug4: Map<any, any> = new Map([[String.fromCharCode(119,95,55,55,95,116,97,98,108,101,103,101,110,0),152], [String.fromCharCode(103,114,111,119,105,110,103,95,116,95,55,50,0),875]]);
       let iconwatchnowJ = String.fromCharCode(117,95,50,53,95,99,104,115,99,97,108,101,0);
       let gpayo = 3.0;
      let iconstarl = String.fromCharCode(102,102,115,121,97,109,120,100,0) == detailsz;
      do {
          let refreshborderlessj = String.fromCharCode(99,95,57,51,95,109,101,97,110,0);
         detailsz += `${detailsz.length - 2}`;
         refreshborderlessj = `${refreshborderlessj.length}`;
         if (iconstarl) {
            break;
         }
      } while ((2 > (1 ^ detailsz.length) && (1 - parseInt(`${gpayo}`)) > 4) && iconstarl);
       let detailn: Array<any> = [767, 9, 29];
       let iconrightorangea: Array<any> = [String.fromCharCode(102,114,97,109,101,114,95,106,95,53,48,0), String.fromCharCode(100,95,55,50,95,99,111,118,101,114,0)];
         gpayo -= parseFloat(`${2 ^ stylesM.size}`);
         gpayo /= Math.max((parseFloat(`${String.fromCharCode(118,0) == detailsz ? detailsz.length : stylesM.size}`)), 3);
      let filledJ = iconwatchnowJ == String.fromCharCode(117,110,113,112,107,52,112,0);
      do {
          let plusK: Array<any> = [586, 723];
          let libreactperfloggerjnia = String.fromCharCode(97,95,53,50,95,114,101,97,115,115,101,109,98,108,121,0);
          let textlayoutmanageru = String.fromCharCode(105,100,101,109,112,111,116,101,110,99,121,95,119,95,53,51,0);
          let arrowdownC = String.fromCharCode(104,97,110,100,108,101,95,51,95,50,48,0);
         iconwatchnowJ += `${debug4.size}`;
         plusK.push(libreactperfloggerjnia.length);
         libreactperfloggerjnia = `${plusK.length}`;
         textlayoutmanageru = `${plusK.length}`;
         arrowdownC += `${arrowdownC.length}`;
         if (filledJ) {
            break;
         }
      } while (((iconrightorangea.length % (Math.max(iconwatchnowJ.length, 8))) > 1 || (iconrightorangea.length % (Math.max(1, 6))) > 3) && filledJ);
      let rooma = stylesM.size <= 5254191;
      do {
         stylesM = new Map([[`${debug4.size}`, 1]]);
         if (rooma) {
            break;
         }
      } while ((5 > (stylesM.size << (Math.min(Math.abs(3), 4))) || (stylesM.size << (Math.min(Math.abs(3), 1))) > 1) && rooma);
       let middleD = 5;
      let logouserb = detailsz == String.fromCharCode(109,101,48,53,98,51,116,49,57,0);
      do {
          let policyZ = String.fromCharCode(115,95,50,95,120,98,105,110,0);
          let orientation2 = 5.0;
          let anytime0: Map<any, any> = new Map([[String.fromCharCode(113,95,55,52,95,99,111,110,115,111,108,101,0),603], [String.fromCharCode(117,95,53,55,95,101,110,115,117,114,101,100,0),790], [String.fromCharCode(109,95,56,48,95,115,116,97,99,107,115,0),909]]);
         detailsz = `${parseInt(`${orientation2}`)}`;
         policyZ += `${anytime0.size & policyZ.length}`;
         orientation2 *= parseFloat(`${anytime0.size | policyZ.length}`);
         if (logouserb) {
            break;
         }
      } while ((!detailsz.startsWith(`${middleD}`)) && logouserb);
      if (middleD > 1) {
         detailsz = `${middleD / (Math.max(iconrightorangea.length, 9))}`;
      }
      let stepc = 8382648 <= iconrightorangea.length;
      do {
         iconrightorangea.push((detailsz == String.fromCharCode(50,0) ? detailsz.length : stylesM.size));
         if (stepc) {
            break;
         }
      } while (stepc && (Array.from(stylesM.keys()).includes(`${iconrightorangea.length}`)));
       let jnewinterstitial2 = 4.0;
       let submitg = 4.0;
       let livenodatabgimg0 = String.fromCharCode(98,95,55,56,95,112,114,101,105,110,105,116,0);
       let favorite2 = String.fromCharCode(106,95,55,48,95,109,105,108,108,105,115,0);
      let modityd = String.fromCharCode(53,114,48,99,95,104,50,56,114,103,0) == favorite2;
      do {
          let source0 = 3.0;
         favorite2 = `${stylesM.size / (Math.max(4, iconrightorangea.length))}`;
         source0 *= parseFloat(`${parseInt(`${source0}`)}`);
         if (modityd) {
            break;
         }
      } while (modityd && (!favorite2.includes(`${stylesM.size}`)));
          let chat7: Array<any> = [842, 544, 927];
          let nodeZ = true;
         gpayo /= Math.max(parseFloat(`${favorite2.length}`), 2);
         chat7 = [(3 ^ (nodeZ ? 3 : 3))];
         nodeZ = chat7.length < 76;
      for (let u = 0; u < 3; u++) {
         stylesM.set(`${jnewinterstitial2}`, parseInt(`${jnewinterstitial2}`) / 3);
      }
      ynewinterstitials += "1";
   }
   let floatern = 5019766 <= orangeuparrowb;
   do {
       let profilepicZ: Map<any, any> = new Map([[String.fromCharCode(99,95,50,54,95,119,100,108,102,99,110,0),3], [String.fromCharCode(99,111,109,112,108,105,99,97,116,105,111,110,95,120,95,57,49,0),798]]);
       let basketballicon5: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,111,110,95,109,95,57,0),160], [String.fromCharCode(98,95,54,48,95,105,110,116,102,105,0),825], [String.fromCharCode(112,114,101,112,97,114,105,110,103,95,108,95,57,0),469]]);
         basketballicon5.set(`${profilepicZ.size}`, profilepicZ.size & basketballicon5.size);
      let runtimen = profilepicZ.size >= 6333679;
      do {
         profilepicZ.set(`${profilepicZ.size}`, 3);
         if (runtimen) {
            break;
         }
      } while (runtimen && (profilepicZ.size <= 4));
      let telegramh = basketballicon5.size <= 6160461;
      do {
          let distq = true;
          let settingsO = String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,95,110,95,52,48,0);
          let defaultroombg5: Map<any, any> = new Map([[String.fromCharCode(107,95,51,52,95,99,111,110,102,105,100,101,110,116,105,97,108,0),String.fromCharCode(98,117,116,116,101,114,102,108,105,101,115,95,121,95,49,57,0)], [String.fromCharCode(115,116,97,103,101,95,55,95,56,48,0),String.fromCharCode(115,105,108,101,110,116,108,121,95,107,95,52,50,0)]]);
         basketballicon5.set(`${basketballicon5.size}`, basketballicon5.size);
         distq = defaultroombg5.size <= settingsO.length;
         settingsO += `${settingsO.length & 2}`;
         defaultroombg5.set(`${settingsO}`, settingsO.length);
         if (telegramh) {
            break;
         }
      } while (telegramh && (3 >= (basketballicon5.size % (Math.max(3, 10)))));
      let sentryu = 8184789 <= basketballicon5.size;
      do {
         basketballicon5.set(`${profilepicZ.size}`, basketballicon5.size * profilepicZ.size);
         if (sentryu) {
            break;
         }
      } while (sentryu && ((basketballicon5.size * profilepicZ.size) >= 2));
      while (Array.from(profilepicZ.values()).includes(basketballicon5.size)) {
         profilepicZ = new Map([[`${profilepicZ.size}`, 3]]);
         break;
      }
      while (profilepicZ.get(`${basketballicon5.size}`) != null) {
         profilepicZ = new Map([[`${basketballicon5.size}`, profilepicZ.size]]);
         break;
      }
      orangeuparrowb >>= Math.min(Math.abs(libjsijniprofilerY.size), 1);
      if (floatern) {
         break;
      }
   } while (floatern && ((1 / (Math.max(4, orangeuparrowb))) >= 5));
   while (4 > (5 << (Math.min(2, Math.abs(type_s_)))) && 2 > (5 << (Math.min(1, buffern.length)))) {
      buffern = [1];
      break;
   }
       let iconshareW = String.fromCharCode(113,95,55,57,95,114,101,103,105,115,116,114,97,116,105,111,110,0);
      let statisticsactivew = iconshareW.length <= 6276852;
      do {
          let sharewhitex = String.fromCharCode(103,95,53,49,95,100,97,121,115,0);
          let shareJ = String.fromCharCode(121,95,54,57,95,116,101,109,112,108,97,116,101,0);
          let catalogJ: Map<any, any> = new Map([[String.fromCharCode(103,97,109,117,116,95,119,95,49,48,0),true ], [String.fromCharCode(101,95,49,56,95,109,97,115,107,101,100,0),true ]]);
          let shootR = 1.0;
         iconshareW += `${1 - shareJ.length}`;
         sharewhitex += `${sharewhitex.length | 3}`;
         shareJ = `${parseInt(`${shootR}`) % (Math.max(catalogJ.size, 2))}`;
         catalogJ.set(`${shootR}`, 2);
         if (statisticsactivew) {
            break;
         }
      } while (statisticsactivew && (iconshareW.length <= 4));
         iconshareW = `${iconshareW.length ^ 2}`;
          let actions6 = String.fromCharCode(98,117,102,102,101,114,113,117,101,117,101,95,102,95,56,56,0);
          let defaultroombgd = 3.0;
          let librrcN = 5;
         iconshareW = `${actions6.length ^ iconshareW.length}`;
         actions6 = `${2 ^ librrcN}`;
         defaultroombgd /= Math.max(librrcN, 5);
      orangeuparrowb /= Math.max(1, temperaturex.length);
       let placementO = String.fromCharCode(102,114,105,99,116,105,111,110,95,120,95,51,0);
       let selectionl = String.fromCharCode(116,95,57,50,95,108,111,99,107,101,100,0);
      for (let s = 0; s < 2; s++) {
         placementO += `${3 + selectionl.length}`;
      }
      for (let n = 0; n < 3; n++) {
          let tooltipsY = 2.0;
          let turndownb: Array<any> = [371, 860];
          let libavdevicel = String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,116,105,111,110,95,97,95,49,53,0);
          let default__s = 3.0;
         selectionl += `${(String.fromCharCode(118,0) == selectionl ? parseInt(`${tooltipsY}`) : selectionl.length)}`;
         tooltipsY *= libavdevicel.length;
         turndownb.push(2);
         libavdevicel = `${parseInt(`${default__s}`) + 3}`;
         default__s /= Math.max(parseFloat(`${2}`), 5);
      }
          let libmapbufferjni5 = 5;
          let unselectedd = 5.0;
         selectionl = `${libmapbufferjni5 % (Math.max(8, placementO.length))}`;
         libmapbufferjni5 |= 1;
         unselectedd -= parseInt(`${unselectedd}`);
       let hongkong5 = 3;
      let drag1 = selectionl.length >= 7309487;
      do {
         selectionl = `${hongkong5}`;
         if (drag1) {
            break;
         }
      } while (drag1 && (placementO != String.fromCharCode(79,0)));
         placementO = "2";
      libjsijniprofilerY.set(`${pageG}`, 1);
      componentz = `${temperaturex.length}`;
   for (let s = 0; s < 2; s++) {
       let pangleA = 5;
       let imagemanagerJ: Array<any> = [651, 910];
       let detail7 = String.fromCharCode(110,95,51,52,95,109,97,116,114,105,99,101,115,0);
       let handlerb = String.fromCharCode(119,114,97,112,100,101,116,101,99,116,95,52,95,56,51,0);
       let mbjscommonQ = String.fromCharCode(102,105,110,105,115,104,95,115,95,51,56,0);
         imagemanagerJ = [1 * pangleA];
          let iconcalendaro = false;
          let libreactM = 3;
         imagemanagerJ = [pangleA << (Math.min(imagemanagerJ.length, 1))];
         iconcalendaro = 41 > libreactM;
         libreactM &= ((iconcalendaro ? 5 : 5) + libreactM);
      if (mbjscommonQ.length < 5) {
         imagemanagerJ.push(1 * mbjscommonQ.length);
      }
      for (let r = 0; r < 3; r++) {
          let playD = String.fromCharCode(122,95,53,57,95,108,97,98,101,108,110,115,0);
         detail7 += "1";
         playD += `${playD.length}`;
      }
         imagemanagerJ = [handlerb.length ^ detail7.length];
      for (let p = 0; p < 1; p++) {
         mbjscommonQ += `${mbjscommonQ.length}`;
      }
          let tailx = String.fromCharCode(114,101,100,117,99,101,100,95,52,95,49,51,0);
          let handlers: Array<any> = [156, 422];
         pangleA /= Math.max(1, 2);
         tailx = "3";
         handlers = [tailx.length / 1];
         imagemanagerJ.push(detail7.length);
      for (let v = 0; v < 3; v++) {
          let pressurey = String.fromCharCode(119,95,54,50,95,101,120,108,117,100,101,100,0);
          let greenarrowupu = 2.0;
          let defaultlogo3 = 5.0;
          let singaporet = String.fromCharCode(99,97,112,116,117,114,101,100,95,50,95,49,53,0);
          let photoo = 3.0;
         imagemanagerJ.push(handlerb.length ^ 3);
         pressurey = `${parseInt(`${photoo}`) * 3}`;
         greenarrowupu /= Math.max(2, parseFloat(`${2}`));
         defaultlogo3 /= Math.max(4, parseFloat(`${singaporet.length}`));
         singaporet += `${parseInt(`${defaultlogo3}`) * 2}`;
         photoo *= 2;
      }
      for (let e = 0; e < 3; e++) {
         detail7 = `${mbjscommonQ.length % (Math.max(1, handlerb.length))}`;
      }
       let humidity2 = 0.0;
         mbjscommonQ += `${detail7.length ^ handlerb.length}`;
         handlerb = `${parseInt(`${humidity2}`) | 2}`;
          let castingQ: Array<any> = [String.fromCharCode(105,95,56,53,95,115,105,103,105,110,116,0), String.fromCharCode(115,95,50,95,105,115,99,111,118,101,114,0)];
          let x_countb: Array<any> = [650, 297, 522];
         humidity2 *= parseFloat(`${handlerb.length}`);
         castingQ.push(castingQ.length ^ 1);
         x_countb = [castingQ.length ^ x_countb.length];
         humidity2 *= parseFloat(`${handlerb.length}`);
      componentz = `${type_s_ / (Math.max(reactnavigationt, 7))}`;
   }
   let colorse = libffmpegkitF ? !libffmpegkitF : libffmpegkitF;
   do {
      libffmpegkitF = (!libffmpegkitF ? !verticaly : !libffmpegkitF);
      if (colorse) {
         break;
      }
   } while ((!componentz.includes(`${libffmpegkitF}`)) && colorse);
       let activityo = true;
       let internet9 = String.fromCharCode(104,95,50,56,0);
       let iconpointscore4 = 5;
         activityo = String.fromCharCode(80,0) == internet9 && iconpointscore4 >= 62;
         internet9 += `${internet9.length | iconpointscore4}`;
      let filedP = 9106867 >= iconpointscore4;
      do {
         iconpointscore4 -= internet9.length ^ 3;
         if (filedP) {
            break;
         }
      } while ((!activityo) && filedP);
       let whitebellI = String.fromCharCode(118,95,55,95,109,97,107,101,99,121,103,119,105,110,112,107,103,0);
      while (whitebellI.length == iconpointscore4) {
         whitebellI += `${internet9.length / (Math.max(1, whitebellI.length))}`;
         break;
      }
      for (let w = 0; w < 2; w++) {
         iconpointscore4 %= Math.max(3, 3);
      }
       let inviteI = 5.0;
       let downloadingF = 1.0;
          let eighteen9 = String.fromCharCode(102,111,114,119,97,114,100,105,110,103,95,106,95,55,56,0);
          let commonr = 5.0;
         downloadingF -= (parseFloat(`${String.fromCharCode(86,0) == internet9 ? whitebellI.length : internet9.length}`));
         eighteen9 = `${parseInt(`${commonr}`) & 1}`;
         commonr += 3 << (Math.min(2, Math.abs(parseInt(`${commonr}`))));
      while (3 >= iconpointscore4) {
         iconpointscore4 /= Math.max(1 ^ whitebellI.length, 5);
         break;
      }
      verticaly = componentz.includes(`${activityo}`);
       let owngoalp = 1.0;
          let clearK: Array<any> = [593, 354];
          let subbasketballplayerU: Array<any> = [String.fromCharCode(109,95,57,55,95,112,97,103,101,108,105,115,116,0), String.fromCharCode(117,110,105,109,112,108,101,109,101,110,116,101,100,95,52,95,51,56,0)];
          let armvaW = 3.0;
         owngoalp *= 3 + subbasketballplayerU.length;
         clearK.push(clearK.length % (Math.max(3, 10)));
         subbasketballplayerU = [3 & clearK.length];
         armvaW += parseFloat(`${parseInt(`${armvaW}`) * 1}`);
      if ((owngoalp + 3.56) >= 1.18) {
         owngoalp -= 3 >> (Math.min(Math.abs(parseInt(`${owngoalp}`)), 4));
      }
         owngoalp *= parseInt(`${owngoalp}`) + parseInt(`${owngoalp}`);
      libjsijniprofilerY.set(`${libffmpegkitF}`, ((verticaly ? 2 : 4)));
       let routerw = true;
       let paginatione = 0;
          let selectedx = String.fromCharCode(105,110,104,105,98,105,116,95,102,95,49,53,0);
          let entryE = 2.0;
         routerw = selectedx == String.fromCharCode(114,0);
         selectedx = `${parseInt(`${entryE}`) + 3}`;
         entryE -= parseInt(`${entryE}`);
       let telemetryC = String.fromCharCode(112,114,111,109,112,116,95,113,95,52,48,0);
      let playliste = 5791378 >= telemetryC.length;
      do {
          let trophyQ = String.fromCharCode(99,111,110,118,115,97,109,112,95,109,95,53,51,0);
         telemetryC += `${(telemetryC == String.fromCharCode(84,0) ? trophyQ.length : telemetryC.length)}`;
         if (playliste) {
            break;
         }
      } while (playliste && ((2 ^ paginatione) >= 4));
      for (let y = 0; y < 1; y++) {
          let membero = true;
          let helperW = String.fromCharCode(114,95,51,56,95,105,110,115,112,101,99,116,97,98,108,101,0);
          let codegeng = false;
         paginatione %= Math.max(helperW.length, 3);
         membero = (!codegeng ? !membero : codegeng);
         helperW = "2";
      }
         routerw = paginatione <= 82;
       let iconscheduleW = 4;
       let questiconm = 2;
      type_s_ %= Math.max(((libffmpegkitF ? 1 : 5)), 4);
      reactnavigationt |= temperaturex.length % 1;
       let unselected3: Map<any, any> = new Map([[String.fromCharCode(110,95,50,51,95,98,111,108,100,0),65], [String.fromCharCode(100,95,50,50,95,99,101,114,116,105,102,105,99,97,116,101,115,0),847], [String.fromCharCode(112,95,51,54,95,98,105,116,118,101,99,0),568]]);
       let orientationZ = 4;
       let elementsg: Map<any, any> = new Map([[String.fromCharCode(115,100,97,108,108,111,99,120,95,57,95,56,56,0),false ], [String.fromCharCode(100,95,56,55,95,118,99,114,101,97,116,101,0),false ]]);
      while (4 < unselected3.size) {
         unselected3.set(`${orientationZ}`, 2 + orientationZ);
         break;
      }
      while ((unselected3.size ^ 5) <= 4 && 3 <= (elementsg.size ^ 5)) {
          let turno: Map<any, any> = new Map([[String.fromCharCode(109,111,109,101,110,116,97,114,121,95,101,95,51,54,0),438], [String.fromCharCode(115,115,101,116,95,54,95,56,57,0),114], [String.fromCharCode(114,111,117,110,100,117,112,95,110,95,51,49,0),644]]);
          let adultq = 5;
          let mbnativeadvancedR = String.fromCharCode(112,117,98,108,105,99,105,116,121,95,118,95,48,0);
          let shielddonev = String.fromCharCode(98,105,110,115,95,109,95,56,54,0);
         unselected3 = new Map([[mbnativeadvancedR, mbnativeadvancedR.length]]);
         turno = new Map([[`${turno.size}`, adultq - turno.size]]);
         adultq %= Math.max(shielddonev.length << (Math.min(3, Math.abs(turno.size))), 1);
         shielddonev += `${turno.size / (Math.max(7, shielddonev.length))}`;
         break;
      }
         orientationZ |= 1 & orientationZ;
      for (let c = 0; c < 1; c++) {
         orientationZ >>= Math.min(Math.abs(elementsg.size >> (Math.min(Math.abs(3), 2))), 5);
      }
          let megaphoneK = String.fromCharCode(120,95,57,48,95,112,97,115,115,102,0);
         elementsg.set(`${unselected3.size}`, elementsg.size);
         megaphoneK = "1";
      for (let m = 0; m < 1; m++) {
         elementsg = new Map([[`${elementsg.size}`, unselected3.size >> (Math.min(Math.abs(elementsg.size), 1))]]);
      }
       let libjsinspectors = String.fromCharCode(108,95,53,51,95,114,101,113,117,101,115,116,0);
          let weatherc = String.fromCharCode(117,95,51,50,95,116,111,114,101,100,0);
          let iconviewer0 = false;
         orientationZ |= unselected3.size;
         weatherc += `${((iconviewer0 ? 2 : 2) | 2)}`;
         iconviewer0 = !iconviewer0;
         orientationZ *= 1;
      ynewinterstitials = `${(temperaturex == String.fromCharCode(81,0) ? temperaturex.length : componentz.length)}`;
   let tempnodatagifj = libffmpegkitF ? !libffmpegkitF : libffmpegkitF;
   do {
      libffmpegkitF = type_s_ > 48;
      if (tempnodatagifj) {
         break;
      }
   } while ((3 == componentz.length) && tempnodatagifj);
       let transfere = true;
       let baseV: Array<any> = [String.fromCharCode(100,95,55,48,95,108,111,111,107,97,115,105,100,101,0), String.fromCharCode(120,95,53,53,95,108,111,97,100,0)];
       let soundG = 0;
         transfere = (baseV.length & soundG) == 45;
      let otherq = 8538439 >= soundG;
      do {
         soundG %= Math.max(soundG % 2, 3);
         if (otherq) {
            break;
         }
      } while (otherq && (1 < (soundG ^ 3)));
      if (!transfere) {
         transfere = (soundG / (Math.max(7, baseV.length))) < 100;
      }
         soundG &= soundG;
          let catalogA: Array<any> = [226, 309];
          let textinputK = 3.0;
         baseV.push(baseV.length + soundG);
         catalogA = [parseInt(`${textinputK}`)];
         textinputK *= parseFloat(`${1}`);
         baseV.push(baseV.length);
          let mbnativeQ = String.fromCharCode(108,95,55,50,95,97,109,114,119,98,100,101,99,0);
          let attributedstringf = 3.0;
         transfere = baseV.includes(transfere);
         mbnativeQ = `${mbnativeQ.length | 2}`;
         attributedstringf *= parseFloat(`${mbnativeQ.length}`);
      let pausei = soundG <= 5474732;
      do {
         soundG += baseV.length | 3;
         if (pausei) {
            break;
         }
      } while ((soundG == 1) && pausei);
         transfere = transfere || baseV.length <= 18;
      temperaturex = `${2 % (Math.max(3, type_s_))}`;
   while (1 <= componentz.length || !verticaly) {
       let ainit_hd8 = 4.0;
       let update_xr = String.fromCharCode(97,114,103,95,51,95,51,57,0);
       let selected0: Map<any, any> = new Map([[String.fromCharCode(120,99,101,112,116,105,111,110,95,107,95,52,55,0),408], [String.fromCharCode(104,105,115,116,111,114,105,101,115,95,49,95,57,50,0),774]]);
          let saveb = String.fromCharCode(105,110,116,101,114,110,97,108,95,107,95,56,52,0);
         update_xr = "2";
         saveb += `${saveb.length}`;
          let privacym = String.fromCharCode(98,111,110,106,111,117,114,95,49,95,57,48,0);
          let commons = String.fromCharCode(114,111,117,116,101,114,95,104,95,55,52,0);
          let readi: Map<any, any> = new Map([[String.fromCharCode(99,101,114,116,105,102,105,99,97,116,101,115,95,120,95,53,49,0),false ], [String.fromCharCode(120,95,53,54,95,114,111,98,105,110,0),false ], [String.fromCharCode(118,95,54,54,95,108,101,97,102,0),true ]]);
         update_xr = `${3 >> (Math.min(1, Math.abs(readi.size)))}`;
         privacym = `${commons.length / 3}`;
         commons += `${commons.length}`;
         readi.set(commons, 2);
         selected0.set(update_xr, selected0.size);
      let flipper8 = ainit_hd8 <= 6447125.0;
      do {
          let arrowrightl = 5.0;
          let const_mf = false;
          let greyarrowupC: Array<any> = [149, 704, 75];
         ainit_hd8 *= parseFloat(`${update_xr.length}`);
         arrowrightl /= Math.max(1, parseFloat(`${2 - greyarrowupC.length}`));
         const_mf = !const_mf;
         greyarrowupC.push(1 + greyarrowupC.length);
         if (flipper8) {
            break;
         }
      } while (flipper8 && (Array.from(selected0.values()).includes(ainit_hd8)));
      while (selected0.get(`${ainit_hd8}`) == null) {
          let tickedM = 2.0;
          let libapminsightbh: Map<any, any> = new Map([[String.fromCharCode(99,95,52,50,95,118,105,115,105,98,105,108,105,116,105,116,101,115,0),804], [String.fromCharCode(121,95,51,52,95,103,110,114,101,0),200]]);
         selected0.set(`${tickedM}`, parseInt(`${tickedM}`) / (Math.max(selected0.size, 8)));
         libapminsightbh = new Map([[`${libapminsightbh.size}`, libapminsightbh.size << (Math.min(5, Math.abs(libapminsightbh.size)))]]);
         break;
      }
      while (update_xr.endsWith(`${selected0.size}`)) {
         update_xr += `${selected0.size * 2}`;
         break;
      }
       let baseP = String.fromCharCode(109,95,57,54,95,121,115,108,111,103,0);
      for (let a = 0; a < 3; a++) {
          let bgvipxvodi: Map<any, any> = new Map([[String.fromCharCode(122,95,49,53,95,115,117,98,115,116,97,116,101,0),String.fromCharCode(101,114,97,115,101,95,121,95,55,57,0)], [String.fromCharCode(100,105,115,116,114,105,98,117,116,101,100,95,114,95,56,56,0),String.fromCharCode(111,95,53,48,95,101,110,116,101,114,101,100,0)], [String.fromCharCode(117,95,56,57,95,114,101,115,101,116,117,112,0),String.fromCharCode(100,95,49,49,95,113,115,118,115,99,97,108,101,0)]]);
          let gesturez: Array<any> = [10, 88];
         selected0 = new Map([[`${bgvipxvodi.size}`, baseP.length]]);
         bgvipxvodi = new Map([[`${gesturez.length}`, gesturez.length]]);
      }
         selected0 = new Map([[`${selected0.size}`, selected0.size >> (Math.min(baseP.length, 1))]]);
      verticaly = ynewinterstitials.length <= 18;
      break;
   }
   for (let i = 0; i < 3; i++) {
      verticaly = pageG <= 23;
   }
      type_s_ <<= Math.min(5, Math.abs(reactnavigationt & 3));
   for (let w = 0; w < 2; w++) {
       let largeX = 4.0;
       let templateprocessorT = true;
       let profilepic_ = true;
       let modelsv = true;
      if (!templateprocessorT) {
          let kickX = false;
          let forward5 = false;
          let relatedg = String.fromCharCode(105,95,57,56,95,100,99,115,99,116,112,0);
          let weatherq = 0.0;
         templateprocessorT = relatedg.length <= 94;
         kickX = 88.61 >= weatherq && kickX;
         forward5 = weatherq >= 30.8;
         relatedg += `${parseInt(`${weatherq}`) + 1}`;
      }
          let libffmpegkitA = 3.0;
          let basketballiconM: Array<any> = [341, 903];
          let material8 = String.fromCharCode(99,111,109,109,105,116,116,101,114,95,108,95,50,48,0);
         templateprocessorT = (libffmpegkitA / (Math.max(basketballiconM.length, 3))) < 42.85;
         libffmpegkitA *= 1;
         basketballiconM = [3];
      if (profilepic_ || templateprocessorT) {
         templateprocessorT = (!templateprocessorT ? profilepic_ : templateprocessorT);
      }
          let libturbomodulejsijnio = String.fromCharCode(116,114,101,97,100,95,57,95,54,57,0);
          let airbnbstarselectedj: Map<any, any> = new Map([[String.fromCharCode(109,95,51,57,95,116,104,101,109,101,100,0),String.fromCharCode(113,95,56,55,95,99,97,98,97,99,0)], [String.fromCharCode(117,95,51,57,95,114,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0),String.fromCharCode(119,95,53,50,0)], [String.fromCharCode(114,101,97,100,111,110,108,121,95,111,95,56,0),String.fromCharCode(97,118,118,115,95,97,95,49,56,0)]]);
         profilepic_ = libturbomodulejsijnio.startsWith(`${modelsv}`);
         libturbomodulejsijnio += `${airbnbstarselectedj.size / 1}`;
         airbnbstarselectedj.set(`${airbnbstarselectedj.size}`, airbnbstarselectedj.size);
       let overI = String.fromCharCode(99,95,55,48,95,103,101,111,116,97,103,115,0);
      libjsijniprofilerY = new Map([[`${verticaly}`, (String.fromCharCode(82,0) == componentz ? (verticaly ? 5 : 3) : componentz.length)]]);
      largeX *= parseFloat(`${3 * parseInt(`${largeX}`)}`);
   }
      libjsijniprofilerY.set(`${verticaly}`, ((verticaly ? 1 : 3)));
      buffern.push(((verticaly ? 5 : 1)));
   while (pageG == 2 && 1 == (pageG & 2)) {
       let componentregistryJ = String.fromCharCode(117,110,114,101,99,111,103,110,105,122,101,100,95,97,95,57,48,0);
       let videoy = String.fromCharCode(115,101,103,109,97,112,95,110,95,49,48,48,0);
       let shareblack4 = 3.0;
      let subsd = String.fromCharCode(52,101,117,110,111,101,112,118,104,0) == videoy;
      do {
          let kuaishouH = String.fromCharCode(115,95,51,48,95,119,101,98,118,105,101,119,0);
          let untickv = true;
          let package_ln = String.fromCharCode(101,103,97,99,121,95,104,95,55,51,0);
          let manifestl = false;
         videoy = `${componentregistryJ.length % 2}`;
         kuaishouH = `${((untickv ? 2 : 2) + 2)}`;
         untickv = 11 == kuaishouH.length && package_ln == String.fromCharCode(115,0);
         package_ln += `${((untickv ? 2 : 1))}`;
         manifestl = kuaishouH.endsWith(`${untickv}`);
         if (subsd) {
            break;
         }
      } while (subsd && (3.83 == shareblack4));
         shareblack4 += componentregistryJ.length;
      let armvaY = componentregistryJ.length >= 8952908;
      do {
          let iconwechatr = true;
          let show3: Map<any, any> = new Map([[String.fromCharCode(104,95,54,95,105,110,116,114,112,0),986], [String.fromCharCode(100,95,51,54,95,99,108,101,97,114,101,100,0),449], [String.fromCharCode(105,95,56,57,95,102,99,102,115,0),441]]);
          let icontransferclubK = false;
          let react_: Map<any, any> = new Map([[String.fromCharCode(115,109,97,108,108,101,115,116,95,54,95,51,55,0),true ], [String.fromCharCode(98,105,114,116,104,100,97,121,95,101,95,57,54,0),false ], [String.fromCharCode(114,101,112,95,51,95,55,56,0),true ]]);
         componentregistryJ += "2";
         iconwechatr = react_.size < 23;
         show3 = new Map([[`${react_.size}`, ((icontransferclubK ? 5 : 4) & 3)]]);
         icontransferclubK = ((show3.size | (!icontransferclubK ? 21 : show3.size)) > 21);
         if (armvaY) {
            break;
         }
      } while ((3 > videoy.length) && armvaY);
         videoy += `${videoy.length}`;
      let basketballdetailsbg9 = shareblack4 >= 8102415.0;
      do {
         shareblack4 -= parseInt(`${shareblack4}`) ^ componentregistryJ.length;
         if (basketballdetailsbg9) {
            break;
         }
      } while (((2.23 + shareblack4) < 4.65 && 4 < (2 ^ componentregistryJ.length)) && basketballdetailsbg9);
      if (videoy.includes(`${shareblack4}`)) {
          let hometeamfield4 = 0;
          let subs9: Map<any, any> = new Map([[String.fromCharCode(116,101,108,95,49,95,51,0),781], [String.fromCharCode(102,111,117,114,105,101,114,95,106,95,54,56,0),197], [String.fromCharCode(97,114,99,104,101,116,121,112,101,95,102,95,54,51,0),117]]);
          let profileactivev = String.fromCharCode(120,95,57,54,95,107,101,121,115,0);
          let plusC = 2.0;
          let filterx = true;
         videoy += "1";
         hometeamfield4 -= hometeamfield4;
         subs9 = new Map([[`${subs9.size}`, 3]]);
         profileactivev = "2";
         plusC += subs9.size;
         filterx = (parseInt(`${plusC}`) * profileactivev.length) == 50;
      }
         componentregistryJ += `${componentregistryJ.length}`;
         shareblack4 -= parseInt(`${shareblack4}`);
         videoy = `${(videoy == String.fromCharCode(98,0) ? videoy.length : parseInt(`${shareblack4}`))}`;
      verticaly = String.fromCharCode(107,0) == temperaturex;
      break;
   }

    setIsRemoveDialogOpen(!isRemoveDialogOpen);
  }
  const onRemoveAccount = () => {
       let networkG = true;
    let awayteamfieldB = 5.0;
    let result2: Map<any, any> = new Map([[String.fromCharCode(104,112,101,108,95,100,95,54,53,0),true ], [String.fromCharCode(120,95,54,49,95,112,97,115,112,0),false ]]);
    let flipperW = false;
    let reducerb = 5.0;
    let hook8: Array<any> = [105, 255, 238];
    let catalogj = String.fromCharCode(104,95,54,54,95,109,98,99,115,0);
    let middlebrightnesse = String.fromCharCode(114,95,52,56,95,99,111,109,112,108,101,116,101,0);
    let china0: Map<any, any> = new Map([[String.fromCharCode(99,100,97,116,101,95,119,95,56,55,0),471], [String.fromCharCode(103,101,111,109,95,113,95,55,51,0),334], [String.fromCharCode(100,101,115,99,114,95,117,95,54,54,0),5]]);
    let becomep = 0.0;
      reducerb -= result2.size;
      flipperW = !networkG;
       let matchinactiveT: Map<any, any> = new Map([[String.fromCharCode(112,103,105,100,120,95,118,95,54,49,0),String.fromCharCode(112,95,56,53,95,108,105,110,109,97,116,104,0)], [String.fromCharCode(112,95,51,51,95,112,108,97,121,98,97,99,107,0),String.fromCharCode(103,95,57,49,95,100,114,97,103,103,105,110,103,0)], [String.fromCharCode(111,95,56,52,95,116,97,112,101,115,0),String.fromCharCode(115,101,110,100,95,98,95,56,55,0)]]);
       let eactI: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,105,111,117,115,108,121,95,104,95,50,53,0),true ], [String.fromCharCode(115,105,103,105,100,95,119,95,51,56,0),true ], [String.fromCharCode(106,115,116,121,112,101,95,118,95,53,0),false ]]);
      if ((matchinactiveT.size >> (Math.min(Math.abs(eactI.size), 1))) < 1) {
          let layoutv = 0.0;
         eactI.set(`${layoutv}`, 2 >> (Math.min(3, Math.abs(parseInt(`${layoutv}`)))));
      }
      while (5 == (4 * matchinactiveT.size) && 5 == (4 * eactI.size)) {
          let transfer1 = String.fromCharCode(116,101,120,116,117,114,101,100,115,112,101,110,99,95,99,95,56,52,0);
          let sansC = String.fromCharCode(115,117,114,102,97,99,101,115,95,101,95,49,55,0);
          let castingn = String.fromCharCode(101,110,100,101,100,95,118,95,55,48,0);
          let private_qt = String.fromCharCode(100,105,115,115,105,109,95,99,95,50,0);
          let iconcurrentmatch7: Map<any, any> = new Map([[String.fromCharCode(115,117,103,103,101,115,116,101,100,95,54,95,50,54,0),String.fromCharCode(119,95,54,95,112,97,114,116,105,99,105,112,97,116,105,110,103,0)], [String.fromCharCode(102,95,49,95,109,105,100,101,113,117,97,108,105,122,101,114,0),String.fromCharCode(107,95,53,55,95,115,113,108,105,116,101,112,97,103,101,114,0)]]);
         matchinactiveT = new Map([[`${eactI.size}`, sansC.length ^ eactI.size]]);
         transfer1 += `${(String.fromCharCode(99,0) == castingn ? castingn.length : iconcurrentmatch7.size)}`;
         sansC = `${1 >> (Math.min(1, Math.abs(iconcurrentmatch7.size)))}`;
         private_qt = `${transfer1.length >> (Math.min(Math.abs(3), 2))}`;
         break;
      }
          let redgoalW = 3.0;
         eactI = new Map([[`${eactI.size}`, 1 - eactI.size]]);
         redgoalW /= Math.max(parseFloat(`${parseInt(`${redgoalW}`) / (Math.max(4, parseInt(`${redgoalW}`)))}`), 4);
      let libruntimeexecutorL = 7847721 >= eactI.size;
      do {
         eactI = new Map([[`${matchinactiveT.size}`, eactI.size]]);
         if (libruntimeexecutorL) {
            break;
         }
      } while (((3 - matchinactiveT.size) <= 3) && libruntimeexecutorL);
       let gpayQ = String.fromCharCode(108,95,52,54,95,104,121,112,104,101,110,97,116,101,100,0);
       let viewsp = String.fromCharCode(113,95,50,49,95,112,101,114,109,117,116,97,116,105,111,110,0);
         eactI.set(viewsp, (String.fromCharCode(107,0) == viewsp ? eactI.size : viewsp.length));
      awayteamfieldB -= parseFloat(`${parseInt(`${awayteamfieldB}`)}`);
   while (networkG) {
      hook8.push((String.fromCharCode(102,0) == middlebrightnesse ? china0.size : middlebrightnesse.length));
      break;
   }
       let with_lb5 = String.fromCharCode(100,105,115,112,97,116,99,104,101,114,95,101,95,56,56,0);
         with_lb5 = `${3 % (Math.max(10, with_lb5.length))}`;
         with_lb5 += `${with_lb5.length * 1}`;
         with_lb5 = `${(with_lb5 == String.fromCharCode(77,0) ? with_lb5.length : with_lb5.length)}`;
      china0 = new Map([[`${china0.size}`, 3 + middlebrightnesse.length]]);
      flipperW = result2.size <= 15;
      flipperW = china0.size <= 77;
      reducerb += 3;
      awayteamfieldB += parseFloat(`${parseInt(`${awayteamfieldB}`)}`);
   for (let v = 0; v < 1; v++) {
       let abidetectW = String.fromCharCode(107,95,50,54,95,101,97,115,101,0);
       let m_centerh = true;
       let chatbotphotoF = true;
       let readY = String.fromCharCode(105,95,53,48,95,98,97,114,114,105,101,114,0);
       let basketballmatchdetailbgR = 3;
       let activityj = false;
       let edit0 = true;
          let nativei = true;
         chatbotphotoF = basketballmatchdetailbgR > 82;
         nativei = !nativei;
      while (4 >= readY.length || !activityj) {
         readY += "2";
         break;
      }
          let telemetrye = 2.0;
          let trophyQ = String.fromCharCode(104,95,56,57,95,99,111,108,108,101,99,116,105,111,110,115,0);
         readY = "3";
         telemetrye += parseInt(`${telemetrye}`);
         trophyQ = `${(trophyQ == String.fromCharCode(67,0) ? trophyQ.length : parseInt(`${telemetrye}`))}`;
          let shootnogoalT: Map<any, any> = new Map([[String.fromCharCode(103,95,50,55,95,114,97,116,101,99,116,114,108,0),705], [String.fromCharCode(110,101,97,114,98,121,95,108,95,56,48,0),197]]);
         m_centerh = (61 >= ((!chatbotphotoF ? 61 : readY.length) / (Math.max(readY.length, 5))));
         shootnogoalT = new Map([[`${shootnogoalT.size}`, 1]]);
          let readB: Array<any> = [596, 604];
         m_centerh = String.fromCharCode(103,0) == readY;
         readB.push(readB.length);
      for (let s = 0; s < 3; s++) {
         edit0 = chatbotphotoF;
      }
         abidetectW = `${((edit0 ? 5 : 4) - (m_centerh ? 5 : 4))}`;
       let tempnodatagifG = 3.0;
      let ecopy_osl = activityj ? !activityj : activityj;
      do {
          let step8 = String.fromCharCode(107,95,53,55,95,103,114,111,117,112,0);
         activityj = chatbotphotoF;
         step8 += `${step8.length | 2}`;
         if (ecopy_osl) {
            break;
         }
      } while (ecopy_osl && (activityj));
          let icontransferclubm = true;
         readY += `${((icontransferclubm ? 2 : 5))}`;
         chatbotphotoF = (((edit0 ? abidetectW.length : 51) % (Math.max(abidetectW.length, 6))) > 51);
          let stations2 = 5;
          let viewerF: Array<any> = [895, 684, 511];
          let telemetryB = 3.0;
         readY += `${basketballmatchdetailbgR / (Math.max(1, readY.length))}`;
         stations2 |= 2 + parseInt(`${telemetryB}`);
         viewerF.push(3);
         telemetryB -= parseFloat(`${3 / (Math.max(6, parseInt(`${telemetryB}`)))}`);
         m_centerh = !edit0;
      while (m_centerh) {
          let iconeditP: Map<any, any> = new Map([[String.fromCharCode(102,97,105,108,117,114,101,95,106,95,51,51,0),245], [String.fromCharCode(98,97,99,107,108,105,103,104,116,95,112,95,55,48,0),238], [String.fromCharCode(106,95,54,56,95,97,116,116,114,97,99,116,111,114,0),36]]);
          let favorited: Array<any> = [790, 443, 791];
         m_centerh = basketballmatchdetailbgR > 32;
         iconeditP.set(`${favorited.length}`, 3);
         favorited = [3 & iconeditP.size];
         break;
      }
      flipperW = middlebrightnesse.length == 55;
   }

    setTimeout(() => {

       let iconplayU = String.fromCharCode(120,95,53,54,95,97,117,116,111,112,108,97,121,0);
       let gpayJ = String.fromCharCode(102,99,102,115,95,50,95,53,48,0);
         gpayJ += `${(String.fromCharCode(54,0) == gpayJ ? gpayJ.length : iconplayU.length)}`;
      let iconsharefriendsc = String.fromCharCode(109,48,100,104,56,108,55,0) == gpayJ;
      do {
         gpayJ += "1";
         if (iconsharefriendsc) {
            break;
         }
      } while (iconsharefriendsc && (!gpayJ.startsWith(iconplayU)));
      for (let a = 0; a < 2; a++) {
         gpayJ += `${iconplayU.length}`;
      }
      while (gpayJ.length == iconplayU.length) {
         gpayJ = `${iconplayU.length}`;
         break;
      }
      let largeN = iconplayU.length <= 7438462;
      do {
          let prediction0 = 1.0;
         iconplayU = `${1 | gpayJ.length}`;
         prediction0 += parseInt(`${prediction0}`) | 1;
         if (largeN) {
            break;
         }
      } while ((gpayJ.length == 5) && largeN);
      while (iconplayU.length > gpayJ.length) {
         gpayJ = `${iconplayU.length}`;
         break;
      }
      reducerb += iconplayU.length ^ parseInt(`${becomep}`);
      networkG = becomep > 100.30;
   let kuaishouQ = china0.size <= 8469695;
   do {
       let iconsetting_ = String.fromCharCode(117,95,48,95,97,110,110,111,116,97,116,101,0);
      if (iconsetting_ == iconsetting_) {
          let friendsS = String.fromCharCode(99,95,53,49,95,112,114,101,99,97,108,99,0);
          let countdownt: Map<any, any> = new Map([[String.fromCharCode(120,99,101,112,116,105,111,110,95,109,95,54,51,0),String.fromCharCode(118,97,114,105,97,98,108,101,95,102,95,55,50,0)], [String.fromCharCode(98,117,105,108,100,99,111,110,102,95,103,95,53,52,0),String.fromCharCode(99,95,56,50,95,106,112,101,103,0)], [String.fromCharCode(118,95,51,57,95,116,116,97,100,115,112,0),String.fromCharCode(115,104,97,114,101,115,95,55,95,52,55,0)]]);
          let eventz: Array<any> = [445, 53, 318];
          let disconnectedlogod = String.fromCharCode(116,114,101,108,108,105,115,95,52,95,53,0);
         iconsetting_ = `${eventz.length}`;
         friendsS = `${disconnectedlogod.length ^ 3}`;
         countdownt = new Map([[`${countdownt.size}`, disconnectedlogod.length + 1]]);
         eventz = [countdownt.size / 1];
      }
         iconsetting_ = `${iconsetting_.length >> (Math.min(3, iconsetting_.length))}`;
       let short_n84: Array<any> = [988, 965, 990];
      china0 = new Map([[`${result2.size}`, result2.size]]);
      if (kuaishouQ) {
         break;
      }
   } while ((!catalogj.includes(`${china0.size}`)) && kuaishouQ);
       let progressM = 0.0;
       let gifgoalbgI = String.fromCharCode(101,95,51,49,0);
       let loginsuccessw = 2.0;
          let bgvipsport8: Array<any> = [540, 254];
          let rockets: Array<any> = [644, 111, 143];
         loginsuccessw -= parseFloat(`${parseInt(`${progressM}`) - rockets.length}`);
         bgvipsport8.push(bgvipsport8.length % 2);
         rockets = [1];
      if (3.27 <= (parseFloat(`${gifgoalbgI.length}`) / (Math.max(3, loginsuccessw)))) {
         gifgoalbgI = "2";
      }
         gifgoalbgI += `${2 | parseInt(`${progressM}`)}`;
         gifgoalbgI = `${3 & gifgoalbgI.length}`;
       let statisticsinactives = 2.0;
      hook8.push(parseInt(`${becomep}`));
      networkG = (result2.size ^ middlebrightnesse.length) < 61;
       let reducer2: Array<any> = [385, 695, 964];
       let skipm: Array<any> = [836, 294];
      for (let r = 0; r < 3; r++) {
          let megaphoneL = String.fromCharCode(108,95,56,49,95,115,101,99,0);
          let iconarrowrightorange4 = false;
          let baseE = 0;
          let moonA: Array<any> = [26, 89, 722];
         skipm.push((megaphoneL == String.fromCharCode(100,0) ? megaphoneL.length : moonA.length));
         iconarrowrightorange4 = 83 > baseE;
         baseE &= 2;
         moonA = [((iconarrowrightorange4 ? 3 : 3) ^ baseE)];
      }
         reducer2.push(1 & skipm.length);
         skipm.push(skipm.length - reducer2.length);
         reducer2.push(2);
      for (let e = 0; e < 3; e++) {
         skipm.push(skipm.length);
      }
      while (5 <= reducer2.length) {
          let refreshborderlessx = String.fromCharCode(116,114,117,110,99,97,116,101,100,95,105,95,49,53,0);
          let iconclosewhitewithbg0 = 5.0;
          let adulty: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,115,95,53,95,48,0),String.fromCharCode(101,120,116,101,110,100,101,101,95,50,95,57,52,0)], [String.fromCharCode(113,95,56,49,95,118,111,114,98,105,115,100,115,112,0),String.fromCharCode(120,95,55,95,97,109,102,101,110,99,0)], [String.fromCharCode(108,111,110,103,101,114,95,101,95,50,51,0),String.fromCharCode(103,108,111,98,97,108,115,95,51,95,55,55,0)]]);
         skipm.push(reducer2.length);
         refreshborderlessx += `${refreshborderlessx.length ^ 3}`;
         iconclosewhitewithbg0 /= Math.max(adulty.size, 3);
         adulty = new Map([[`${adulty.size}`, adulty.size % (Math.max(1, parseInt(`${iconclosewhitewithbg0}`)))]]);
         break;
      }
      result2 = new Map([[`${reducer2.length}`, catalogj.length]]);
   while (!networkG) {
      reducerb *= result2.size;
      break;
   }
   while (hook8.length >= catalogj.length) {
       let libnmsD: Array<any> = [11, 236];
         libnmsD.push(2);
      for (let w = 0; w < 2; w++) {
          let qaagD = String.fromCharCode(116,95,57,55,95,103,119,101,105,0);
          let iconscheduler = String.fromCharCode(107,95,56,52,95,97,101,115,116,97,98,0);
          let matches2 = String.fromCharCode(99,95,53,57,95,102,105,120,116,117,114,101,0);
          let roundW = String.fromCharCode(103,97,108,108,101,114,121,95,98,95,51,52,0);
         libnmsD.push(roundW.length);
         qaagD = `${(matches2 == String.fromCharCode(113,0) ? qaagD.length : matches2.length)}`;
         iconscheduler += `${iconscheduler.length >> (Math.min(4, matches2.length))}`;
         roundW += `${iconscheduler.length}`;
      }
      if ((1 << (Math.min(4, libnmsD.length))) == 4) {
         libnmsD.push(libnmsD.length);
      }
      hook8 = [3];
      break;
   }
       let icondownimgK = false;
       let gpayH = String.fromCharCode(115,116,114,104,97,115,104,95,56,95,50,56,0);
       let videon = 3.0;
         videon *= parseFloat(`${gpayH.length * 2}`);
      if (videon < 4.67) {
         videon += (parseFloat(`${2 << (Math.min(2, Math.abs((icondownimgK ? 5 : 5))))}`));
      }
          let reducer7 = true;
          let inouttargetredX = 2.0;
         gpayH = `${1 + parseInt(`${videon}`)}`;
         reducer7 = 67.49 < inouttargetredX && reducer7;
         inouttargetredX /= Math.max(2, (parseFloat(`${parseInt(`${inouttargetredX}`) ^ (reducer7 ? 3 : 5)}`)));
         icondownimgK = !icondownimgK || videon == 53.31;
      let internetJ = videon >= 5955555.0;
      do {
         videon += parseFloat(`${parseInt(`${videon}`) ^ 1}`);
         if (internetJ) {
            break;
         }
      } while ((5 >= gpayH.length) && internetJ);
      while (icondownimgK && gpayH.length <= 5) {
         gpayH = `${1 / (Math.max(7, parseInt(`${videon}`)))}`;
         break;
      }
      if (gpayH.length < 3 && !icondownimgK) {
         icondownimgK = gpayH.includes(`${icondownimgK}`);
      }
          let benefitP = String.fromCharCode(102,111,114,119,97,114,100,105,110,103,95,112,95,50,56,0);
         gpayH += `${(benefitP == String.fromCharCode(71,0) ? benefitP.length : (icondownimgK ? 1 : 5))}`;
         videon -= parseFloat(`${3}`);
      reducerb *= (parseInt(`${reducerb}`) ^ (flipperW ? 5 : 3));
      hook8.push(china0.size - 3);
      yysHomeinactiveUntick.showToast('我们将在3个工作日内处理您注销请求，请注意您的邮箱，在此期间您可以继续登录');
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

  
  
  
  const userState = useSelector<yysIconplaySuggestion>('userReducer');

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
          />

          {yysIconstar.isLogin(userState.user) &&
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
                    <MoreArrowSvg
                      width={icons.sizes.l}
                      height={icons.sizes.l}
                      color={colors.muted}
                    />
                  </View>
                }
              />
              {yysIconstar.isLogin(userState.user) &&
                <ShowMoreButton text="注销账号" onPress={toggleRemoveAccountDialog} />
              }
            </View>
          </View>
        </View>
        {yysIconstar.isLogin(userState.user) && (
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
