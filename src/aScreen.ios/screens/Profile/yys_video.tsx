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
import ScreenContainer from '../../components/container/yys_executor_expand';
import { RootStackScreenProps } from '@type/yys_settings';
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native';

import TitleWithBackButtonHeader from '../../components/header/yys_anner_header';
import { Button, Dialog } from '@rneui/themed';
import ShowMoreButton from '../../components/button/yys_sound_button';
import NotificationModal from '../../components/modal/yys_graph';
import MoreArrow from '@static/images/toponLang.svg';
import ConfirmationModal from '../../components/modal/yys_shrink_reactnativejs';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/yys_frame';
import { clearStorageMemory } from '@redux/actions/yys_comment';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import { removeUserAuthState } from '@redux/actions/yys_gesture';
import { changeScreenAction } from '@redux/actions/yys_runtimescheduler';
import { yys_MintegralLibavdevice } from '@redux/yys_sport_shrink';

import { APP_NAME_CONST, APP_VERSION } from '@utility/yys_ajax_switch';
import { yys_Videocommon } from '@redux/reducers/yys_libavdevice';
import { yys_StatsForm } from '@utility/yys_context_muted';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { yys_HejiCricket } from '@redux/reducers/yys_privacy_round';
import { yys_RelatedTooltips } from '@models/yys_project_pagination';
export default ({ navigation }: RootStackScreenProps<'设置'>) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isVersionDialogOpen, setIsVersionDialogOpen] = useState(false);
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const [subtitle1, setSubtitle1] = useState('当前已是最新版本' + APP_VERSION);

  const settingsReducer: yys_Videocommon = useAppSelector(
    ({ settingsReducer }: yys_MintegralLibavdevice) => settingsReducer
  );

  const dispatch = useAppDispatch();

  const toggleLogoutDialog = () => {
       let filedE = false;
    let strv = true;
    let awayu: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,117,115,115,105,111,110,95,102,95,57,48,0),String.fromCharCode(115,95,53,51,95,110,117,109,115,0)], [String.fromCharCode(120,95,57,52,95,105,109,112,114,105,110,116,0),String.fromCharCode(115,95,49,95,98,114,97,99,107,101,116,0)]]);
    let annerd = String.fromCharCode(116,95,52,95,99,111,115,105,0);
    let entry0 = String.fromCharCode(109,95,51,56,95,118,109,97,102,0);
    let feedbackn: Map<any, any> = new Map([[String.fromCharCode(115,116,114,111,110,103,95,105,95,57,53,0),91], [String.fromCharCode(115,95,53,53,95,114,101,108,99,116,120,0),430]]);
    let changeA: Array<any> = [397, 77];
    let streaming0 = String.fromCharCode(100,97,116,97,99,101,110,116,101,114,115,95,116,95,55,48,0);
    let final_4H = String.fromCharCode(99,97,108,99,117,108,97,116,101,100,95,99,95,55,52,0);
    let cornerB = false;
    let crossq: Array<any> = [320, 106];
    let recommendationW = String.fromCharCode(117,95,56,50,95,97,100,114,109,0);
   while (entry0.includes(`${annerd.length}`)) {
      entry0 += `${((filedE ? 3 : 5))}`;
      break;
   }
      final_4H = `${awayu.size}`;
   for (let r = 0; r < 2; r++) {
      strv = annerd.length > entry0.length;
   }
       let libavdevicec = String.fromCharCode(108,95,57,50,95,103,97,112,108,101,115,115,0);
      let helpera = libavdevicec.length <= 5924968;
      do {
          let filterP: Array<any> = [918, 963, 506];
          let mappingk = 1;
          let animationsV = String.fromCharCode(114,101,116,114,97,110,115,109,105,115,115,105,111,110,95,109,95,57,52,0);
          let scorex = true;
          let screeno: Array<any> = [String.fromCharCode(116,95,50,48,95,105,110,116,101,114,112,111,108,0), String.fromCharCode(117,95,55,55,95,101,97,105,100,99,116,0), String.fromCharCode(102,97,99,101,95,53,95,51,49,0)];
         libavdevicec = `${libavdevicec.length}`;
         filterP.push(((scorex ? 4 : 1) - animationsV.length));
         mappingk ^= (filterP.length * (scorex ? 5 : 2));
         animationsV = `${(mappingk / (Math.max(6, (scorex ? 4 : 4))))}`;
         screeno = [(animationsV == String.fromCharCode(73,0) ? filterP.length : animationsV.length)];
         if (helpera) {
            break;
         }
      } while (helpera && (!libavdevicec.includes(libavdevicec)));
      while (2 >= libavdevicec.length) {
          let libruntimeexecutore = String.fromCharCode(103,95,57,50,95,116,114,117,101,104,100,0);
         libavdevicec = `${libavdevicec.length}`;
         libruntimeexecutore += `${2 * libruntimeexecutore.length}`;
         break;
      }
      let libreactnativejni9 = 9521921 >= libavdevicec.length;
      do {
          let pressureb = String.fromCharCode(100,101,112,114,101,99,105,97,116,101,100,104,95,116,95,54,56,0);
          let textX = 4.0;
          let gray_ = 4.0;
         libavdevicec += "3";
         pressureb = `${pressureb.length | 3}`;
         textX *= parseInt(`${textX}`) >> (Math.min(pressureb.length, 3));
         gray_ += 3;
         if (libreactnativejni9) {
            break;
         }
      } while (libreactnativejni9 && (libavdevicec.length < libavdevicec.length));
      feedbackn.set(entry0, entry0.length);
      annerd = "1";
      awayu = new Map([[streaming0, (String.fromCharCode(119,0) == streaming0 ? (filedE ? 4 : 2) : streaming0.length)]]);
      entry0 += "2";
      cornerB = annerd == String.fromCharCode(101,0);
   let gmailF = filedE ? !filedE : filedE;
   do {
       let handlerc: Array<any> = [743, 143, 260];
       let readO = String.fromCharCode(113,95,51,54,95,114,101,115,101,114,118,101,115,105,122,101,0);
       let photop = 3;
         handlerc.push(2);
         photop ^= (readO == String.fromCharCode(72,0) ? photop : readO.length);
      let pressured = 6011164 <= handlerc.length;
      do {
         handlerc = [handlerc.length];
         if (pressured) {
            break;
         }
      } while (pressured && (5 >= readO.length));
         photop /= Math.max(2, 4);
      let refresh2 = 6588798 <= handlerc.length;
      do {
         handlerc.push(2);
         if (refresh2) {
            break;
         }
      } while (refresh2 && ((handlerc.length / (Math.max(3, photop))) > 3 || (3 / (Math.max(6, handlerc.length))) > 3));
      for (let x = 0; x < 2; x++) {
         handlerc = [handlerc.length >> (Math.min(1, Math.abs(photop)))];
      }
         handlerc = [readO.length];
          let windw = String.fromCharCode(98,97,110,95,119,95,49,51,0);
          let langkeyA = String.fromCharCode(117,95,50,55,95,112,111,115,101,0);
          let foundj = 1.0;
         readO = `${(readO == String.fromCharCode(54,0) ? readO.length : parseInt(`${foundj}`))}`;
         windw += "1";
         langkeyA += `${2 & windw.length}`;
         foundj += langkeyA.length / 3;
         handlerc = [photop * readO.length];
      filedE = (((cornerB ? handlerc.length : 91) ^ handlerc.length) >= 91);
      if (gmailF) {
         break;
      }
   } while (gmailF && (streaming0.startsWith(`${filedE}`)));
      strv = ((final_4H.length & (!filedE ? 23 : final_4H.length)) == 23);
      entry0 = `${entry0.length * 2}`;
      cornerB = (final_4H.length << (Math.min(5, streaming0.length))) < 36;
   if (5 == (1 >> (Math.min(4, entry0.length))) && (entry0.length >> (Math.min(5, Math.abs(feedbackn.size)))) == 1) {
       let mountingt = 2;
       let temperatureW = String.fromCharCode(99,97,110,100,105,100,97,116,101,95,52,95,52,49,0);
       let mintegralj = String.fromCharCode(108,95,56,50,95,115,108,105,100,97,98,108,101,0);
       let analyticO = String.fromCharCode(122,95,52,53,95,109,100,116,97,0);
         analyticO = `${analyticO.length * 1}`;
         mountingt <<= Math.min(1, mintegralj.length);
      let libjsiu = String.fromCharCode(117,101,118,95,95,99,107,101,95,109,0) == analyticO;
      do {
         analyticO = `${mintegralj.length - analyticO.length}`;
         if (libjsiu) {
            break;
         }
      } while ((mintegralj != String.fromCharCode(66,0)) && libjsiu);
         mintegralj = `${mountingt >> (Math.min(temperatureW.length, 3))}`;
      if ((mountingt % 4) == 4 && 4 == (mountingt % (Math.max(mintegralj.length, 3)))) {
         mintegralj = `${mountingt | 3}`;
      }
         temperatureW += "2";
      while (temperatureW.length < 4) {
         analyticO = `${mintegralj.length << (Math.min(5, temperatureW.length))}`;
         break;
      }
         mountingt %= Math.max((String.fromCharCode(70,0) == mintegralj ? mintegralj.length : temperatureW.length), 3);
         temperatureW = `${temperatureW.length}`;
          let rounda = 0;
         temperatureW = `${mountingt & temperatureW.length}`;
         rounda -= rounda;
          let base5 = String.fromCharCode(114,95,57,52,95,100,101,112,111,115,105,116,0);
          let launchH: Map<any, any> = new Map([[String.fromCharCode(106,95,52,54,95,105,110,100,105,99,97,116,105,111,110,0),true ], [String.fromCharCode(115,116,114,105,107,101,116,104,114,111,117,103,104,95,122,95,49,49,0),true ], [String.fromCharCode(120,95,50,55,95,116,114,97,110,115,109,105,116,0),false ]]);
          let hejiY: Array<any> = [855, 134];
         analyticO += `${mountingt & mintegralj.length}`;
         base5 = `${launchH.size}`;
         launchH.set(`${hejiY.length}`, 2);
         hejiY.push(base5.length);
         mintegralj = "2";
      feedbackn.set(mintegralj, changeA.length + 1);
   }
      changeA.push(entry0.length);
   if (streaming0 == String.fromCharCode(114,0)) {
       let benefitz: Array<any> = [417, 624, 388];
      let megaphoneL = benefitz.length <= 6495856;
      do {
          let traminiA = 4;
          let short_bN = 0;
          let weibok = 1.0;
          let gemfilek = String.fromCharCode(119,95,53,49,95,97,108,97,110,103,117,97,103,101,0);
         benefitz = [2 ^ benefitz.length];
         traminiA |= 3;
         short_bN /= Math.max(3, 1);
         weibok /= Math.max(2 & short_bN, 1);
         gemfilek += "3";
         if (megaphoneL) {
            break;
         }
      } while ((2 <= (benefitz.length + benefitz.length)) && megaphoneL);
         benefitz = [1 | benefitz.length];
      for (let q = 0; q < 3; q++) {
          let fill6 = String.fromCharCode(98,95,55,50,95,116,97,107,101,111,117,116,0);
          let description_0y1 = 4;
          let telegramk = 0.0;
          let stationsu: Map<any, any> = new Map([[String.fromCharCode(109,101,116,104,111,100,115,95,119,95,53,48,0),223], [String.fromCharCode(113,95,57,54,95,119,105,110,100,111,119,105,110,103,0),642]]);
         benefitz = [2 ^ parseInt(`${telegramk}`)];
         fill6 = `${2 | stationsu.size}`;
         description_0y1 <<= Math.min(1, Math.abs(3));
         telegramk -= parseFloat(`${3}`);
         stationsu.set(`${description_0y1}`, 3 * fill6.length);
      }
      entry0 += `${streaming0.length}`;
   }
   if (5 <= (awayu.size - 3) && awayu.size <= 3) {
      filedE = annerd.length <= changeA.length;
   }
      cornerB = final_4H.length < feedbackn.size;
       let renewe: Map<any, any> = new Map([[String.fromCharCode(109,95,57,48,95,99,97,110,116,0),String.fromCharCode(99,95,56,57,95,109,101,116,97,108,0)], [String.fromCharCode(97,95,52,50,95,112,111,115,105,116,105,111,110,115,0),String.fromCharCode(99,111,108,108,101,99,116,101,100,95,119,95,55,52,0)]]);
       let klevinF: Array<any> = [361, 391];
         klevinF = [renewe.size >> (Math.min(Math.abs(3), 4))];
       let neonk = 2.0;
       let catalog4 = 1.0;
         renewe = new Map([[`${klevinF.length}`, parseInt(`${neonk}`)]]);
         neonk /= Math.max(1, parseFloat(`${klevinF.length}`));
      while ((2.43 / (Math.max(8, neonk))) >= 2.76 && 4.77 >= (2.43 - catalog4)) {
         neonk -= parseFloat(`${parseInt(`${neonk}`) ^ 2}`);
         break;
      }
      for (let o = 0; o < 2; o++) {
         renewe.set(`${klevinF.length}`, 2);
      }
      annerd = `${(3 - (cornerB ? 3 : 2))}`;
   for (let z = 0; z < 3; z++) {
      awayu.set(`${strv}`, ((cornerB ? 1 : 1) >> (Math.min(Math.abs((strv ? 1 : 3)), 5))));
   }
       let policy5 = true;
       let mimoU = String.fromCharCode(102,95,55,52,95,103,115,117,98,0);
       let xvod9 = 1.0;
         mimoU += `${(String.fromCharCode(75,0) == mimoU ? (policy5 ? 5 : 1) : mimoU.length)}`;
      for (let t = 0; t < 1; t++) {
         xvod9 /= Math.max(2, mimoU.length & parseInt(`${xvod9}`));
      }
         policy5 = 16 > mimoU.length;
       let floatingk = String.fromCharCode(100,114,97,103,103,97,98,108,101,95,103,95,54,49,0);
       let graphicsP = String.fromCharCode(116,95,49,48,48,95,115,104,97,114,105,110,103,0);
       let register_how: Array<any> = [552, 487];
       let countdownB: Array<any> = [String.fromCharCode(109,111,114,101,95,57,95,51,54,0), String.fromCharCode(105,95,53,52,95,117,108,97,119,0)];
      while ((xvod9 + mimoU.length) <= 4.76 || (xvod9 + mimoU.length) <= 4.76) {
          let updatesJ = 5.0;
         mimoU += `${(String.fromCharCode(71,0) == graphicsP ? (policy5 ? 3 : 3) : graphicsP.length)}`;
         updatesJ /= Math.max(parseFloat(`${parseInt(`${updatesJ}`) / (Math.max(parseInt(`${updatesJ}`), 9))}`), 2);
         break;
      }
       let countdownt = String.fromCharCode(105,110,108,105,110,101,95,99,95,57,52,0);
       let pressure_ = String.fromCharCode(121,95,53,51,95,104,97,100,97,109,97,114,100,0);
      for (let d = 0; d < 2; d++) {
         pressure_ = `${pressure_.length}`;
      }
      if (policy5) {
         graphicsP += `${(String.fromCharCode(74,0) == floatingk ? floatingk.length : parseInt(`${xvod9}`))}`;
      }
      cornerB = awayu.size > 12 && String.fromCharCode(51,0) == final_4H;

    setIsLogoutDialogOpen(!isLogoutDialogOpen);
  };

  const toggleVersionDialog = () => {
       let mimof: Map<any, any> = new Map([[String.fromCharCode(118,95,54,51,95,115,101,110,115,105,116,105,118,105,116,121,0),true ], [String.fromCharCode(99,95,49,53,95,115,108,105,99,101,99,111,110,116,101,120,116,0),true ]]);
    let showI = 2.0;
    let text1: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,95,118,95,55,55,0),162], [String.fromCharCode(115,117,98,102,105,108,101,95,49,95,51,50,0),138], [String.fromCharCode(108,95,50,54,95,100,105,109,101,110,115,105,116,111,110,115,0),878]]);
    let historyu = String.fromCharCode(104,95,49,49,95,117,110,115,101,110,116,0);
    let graphq = 2;
    let roundy = 1.0;
    let selectedS = String.fromCharCode(117,95,54,54,95,109,117,108,116,105,112,97,114,116,0);
    let collection1: Array<any> = [330, 170, 266];
    let configQ = 3.0;
    let penalty2 = 2.0;
    let libjsijniprofilerj = String.fromCharCode(100,105,115,99,117,115,115,105,111,110,95,103,95,49,56,0);
    let crownm = String.fromCharCode(115,117,98,115,121,115,116,101,109,95,122,95,53,48,0);
    let tempK = String.fromCharCode(109,95,51,51,95,112,114,101,100,101,99,111,100,101,0);
    let sansf = false;
   while (!selectedS.endsWith(`${mimof.size}`)) {
       let eighteenU = false;
       let corea = 3.0;
         corea /= Math.max(1, parseInt(`${corea}`) | 1);
          let playlistc = 0;
          let refreshe = String.fromCharCode(115,101,109,105,95,120,95,52,53,0);
          let blacki = String.fromCharCode(109,105,108,105,111,110,115,95,53,95,55,53,0);
         corea /= Math.max(blacki.length ^ parseInt(`${corea}`), 5);
         playlistc |= refreshe.length + 2;
         refreshe = `${playlistc << (Math.min(refreshe.length, 3))}`;
         blacki += `${playlistc + 1}`;
      while (5.18 <= (corea / 1.77) && !eighteenU) {
         eighteenU = !eighteenU;
         break;
      }
       let commentv: Array<any> = [37, 315];
         commentv.push((commentv.length << (Math.min(2, Math.abs((eighteenU ? 2 : 4))))));
      for (let s = 0; s < 1; s++) {
         eighteenU = !eighteenU;
      }
      mimof.set(`${showI}`, 1);
      break;
   }
       let subsx = 4.0;
         subsx *= parseInt(`${subsx}`);
      for (let c = 0; c < 1; c++) {
         subsx -= parseInt(`${subsx}`) % (Math.max(parseInt(`${subsx}`), 7));
      }
      while ((5.48 - subsx) >= 4.94 && 3.1 >= (5.48 - subsx)) {
          let privilege4: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,105,111,110,95,104,95,49,51,0),80], [String.fromCharCode(110,95,52,51,95,97,110,110,117,108,97,114,0),278], [String.fromCharCode(107,101,121,112,97,116,104,95,114,95,55,49,0),35]]);
         subsx /= Math.max(privilege4.size, 1);
         break;
      }
      historyu += `${parseInt(`${roundy}`) - text1.size}`;
       let goalk: Map<any, any> = new Map([[String.fromCharCode(114,95,52,55,95,115,117,99,99,101,115,115,102,117,108,108,121,0),362], [String.fromCharCode(116,102,120,100,95,56,95,55,51,0),686]]);
       let screenp: Array<any> = [String.fromCharCode(102,108,97,99,100,97,116,97,95,98,95,51,50,0), String.fromCharCode(115,117,98,109,105,116,116,101,100,95,109,95,57,56,0), String.fromCharCode(100,111,103,115,95,113,95,57,55,0)];
       let libloggera: Array<any> = [159, 959];
          let becomeC = String.fromCharCode(99,112,117,102,108,97,103,115,95,118,95,49,52,0);
          let penaltyw = 0.0;
         libloggera.push(libloggera.length ^ 2);
         becomeC += `${parseInt(`${penaltyw}`) | becomeC.length}`;
         penaltyw -= 2 + parseInt(`${penaltyw}`);
      while (libloggera.length == goalk.size) {
         goalk = new Map([[`${screenp.length}`, screenp.length]]);
         break;
      }
          let sheetI = false;
          let z_managerE = String.fromCharCode(105,95,50,57,95,115,117,98,115,99,114,105,98,97,98,108,101,0);
          let textlayoutmanagerF = String.fromCharCode(112,95,57,51,95,108,105,98,118,112,120,0);
         libloggera.push(libloggera.length);
         sheetI = z_managerE.length < 55;
         z_managerE = "1";
         textlayoutmanagerF += `${textlayoutmanagerF.length / 2}`;
       let changew = 4;
       let grayo = 5;
      while ((libloggera.length * 2) <= 3) {
         libloggera = [libloggera.length];
         break;
      }
          let darkW = String.fromCharCode(117,95,49,56,95,102,105,102,97,0);
          let pauseT: Map<any, any> = new Map([[String.fromCharCode(101,95,53,95,109,97,120,105,109,117,109,0),String.fromCharCode(105,110,118,105,116,101,100,95,107,95,53,56,0)], [String.fromCharCode(104,95,54,95,97,115,107,105,110,103,0),String.fromCharCode(111,115,116,97,114,95,103,95,55,55,0)]]);
          let with_dT: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,97,110,115,109,105,116,115,95,105,95,56,51,0),String.fromCharCode(101,120,99,108,117,115,105,111,110,115,95,53,95,55,52,0)], [String.fromCharCode(113,95,55,53,95,106,115,111,110,114,112,99,0),String.fromCharCode(118,95,51,53,95,115,116,97,114,116,117,112,0)]]);
         libloggera.push(1 << (Math.min(2, libloggera.length)));
         darkW += `${darkW.length / (Math.max(3, 10))}`;
         pauseT.set(`${darkW}`, (darkW == String.fromCharCode(118,0) ? darkW.length : pauseT.size));
         with_dT = new Map([[`${with_dT.size}`, 3 >> (Math.min(1, Math.abs(pauseT.size)))]]);
      let playercommonK = grayo >= 6735281;
      do {
         grayo ^= 3 - screenp.length;
         if (playercommonK) {
            break;
         }
      } while (playercommonK && (changew == 3));
         libloggera.push(3 >> (Math.min(5, Math.abs(changew))));
      for (let b = 0; b < 3; b++) {
          let sellu = false;
          let a_viewW = 3.0;
         libloggera = [1 + libloggera.length];
         sellu = a_viewW >= 98.84;
         a_viewW += 2 / (Math.max(2, parseInt(`${a_viewW}`)));
      }
      historyu += `${selectedS.length & parseInt(`${roundy}`)}`;
      graphq <<= Math.min(Math.abs((String.fromCharCode(90,0) == historyu ? historyu.length : graphq)), 5);
      penalty2 /= Math.max(2, parseInt(`${showI}`) & 2);
       let eactm = 4.0;
       let libavcodecq = 4.0;
       let with_swu = 1.0;
         with_swu /= Math.max(parseFloat(`${parseInt(`${eactm}`) - parseInt(`${with_swu}`)}`), 5);
         with_swu += parseFloat(`${parseInt(`${eactm}`)}`);
       let klevina: Map<any, any> = new Map([[String.fromCharCode(102,105,116,95,101,95,51,53,0),506], [String.fromCharCode(104,101,120,98,110,95,102,95,51,55,0),769]]);
      for (let y = 0; y < 1; y++) {
         klevina.set(`${eactm}`, parseInt(`${eactm}`) >> (Math.min(5, Math.abs(parseInt(`${with_swu}`)))));
      }
      while (4.4 > (eactm - with_swu) || (with_swu - 4.4) > 2.58) {
         eactm -= parseFloat(`${parseInt(`${eactm}`)}`);
         break;
      }
         with_swu *= parseFloat(`${parseInt(`${with_swu}`) << (Math.min(Math.abs(3), 3))}`);
      while (4.5 <= with_swu) {
          let storen = false;
         libavcodecq /= Math.max(5, (parseFloat(`${3 % (Math.max(10, (storen ? 3 : 5)))}`)));
         break;
      }
         libavcodecq /= Math.max(5, parseFloat(`${parseInt(`${eactm}`)}`));
          let libavformatu = 1.0;
          let config2: Array<any> = [String.fromCharCode(102,111,108,100,101,114,95,121,95,55,48,0), String.fromCharCode(108,111,111,112,95,56,95,54,56,0)];
         libavcodecq /= Math.max(3, parseFloat(`${parseInt(`${libavformatu}`)}`));
         libavformatu /= Math.max(4, parseFloat(`${config2.length + 1}`));
         config2 = [config2.length];
      historyu += `${2 - parseInt(`${showI}`)}`;
      historyu += `${historyu.length & parseInt(`${configQ}`)}`;
      showI /= Math.max(4, parseFloat(`${selectedS.length / (Math.max(3, 7))}`));
      penalty2 += selectedS.length;
   let assistI = 9804213.0 >= roundy;
   do {
      roundy -= mimof.size;
      if (assistI) {
         break;
      }
   } while (((mimof.size << (Math.min(Math.abs(3), 4))) < 3 || 1.85 < (roundy + 1.32)) && assistI);
      roundy -= parseInt(`${roundy}`) / (Math.max(10, parseInt(`${penalty2}`)));
   let o_centerT = 7441502.0 <= configQ;
   do {
       let traminit = String.fromCharCode(120,95,55,56,95,110,111,110,109,117,108,116,0);
       let othert = 2.0;
       let codegenx = false;
      for (let n = 0; n < 3; n++) {
         codegenx = 72.0 < othert || codegenx;
      }
      while (5.72 <= (othert * 1.46)) {
          let goal4: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,97,110,109,105,115,115,105,111,110,95,52,95,52,54,0),String.fromCharCode(108,111,97,100,115,95,111,95,50,54,0)], [String.fromCharCode(108,95,55,49,95,98,111,116,104,0),String.fromCharCode(101,120,101,99,117,116,97,98,108,101,95,111,95,53,49,0)]]);
          let filled4 = false;
          let promotionc = String.fromCharCode(111,95,56,52,95,116,114,97,110,115,112,97,114,101,110,99,121,0);
         othert /= Math.max(3, (parseFloat(`${1 * (codegenx ? 3 : 3)}`)));
         goal4 = new Map([[`${goal4.size}`, goal4.size % (Math.max(1, 10))]]);
         filled4 = (promotionc.length << (Math.min(2, Math.abs(goal4.size)))) < 56;
         promotionc += `${promotionc.length}`;
         break;
      }
      while (!codegenx) {
         othert += (parseFloat(`${(codegenx ? 5 : 3) * parseInt(`${othert}`)}`));
         break;
      }
      while (!codegenx) {
         codegenx = !codegenx;
         break;
      }
      for (let p = 0; p < 3; p++) {
          let classesA = 5.0;
          let brightnessV: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,100,95,110,95,50,57,0),632], [String.fromCharCode(106,95,51,51,95,100,101,112,97,114,116,109,101,110,116,0),561]]);
          let membershipy = 4;
          let temperatureY = 0;
          let mbbannerv: Array<any> = [513, 937, 463];
         traminit += `${traminit.length * brightnessV.size}`;
         classesA *= parseFloat(`${temperatureY}`);
         brightnessV = new Map([[`${classesA}`, parseInt(`${classesA}`) ^ membershipy]]);
         membershipy += parseInt(`${classesA}`) * mbbannerv.length;
         temperatureY /= Math.max(2, temperatureY / 2);
         mbbannerv.push(temperatureY & 3);
      }
         codegenx = !codegenx;
       let feedbackm = 0.0;
         codegenx = feedbackm < 52.77 || codegenx;
      for (let h = 0; h < 1; h++) {
         codegenx = othert > 23.0;
      }
      configQ *= parseFloat(`${parseInt(`${penalty2}`) / (Math.max(1, parseInt(`${configQ}`)))}`);
      if (o_centerT) {
         break;
      }
   } while ((2 > (collection1.length % 4) && 5 > (collection1.length - 4)) && o_centerT);
   if (Array.from(mimof.values()).includes(showI)) {
       let floaterJ = String.fromCharCode(115,95,55,54,95,114,101,109,111,116,101,108,121,0);
      for (let n = 0; n < 3; n++) {
         floaterJ = `${2 / (Math.max(6, floaterJ.length))}`;
      }
         floaterJ += `${floaterJ.length * 1}`;
       let viewsy = false;
       let inviteo = true;
      showI -= parseFloat(`${mimof.size}`);
   }
   for (let d = 0; d < 1; d++) {
      mimof.set(`${penalty2}`, mimof.size);
   }
   let listG = selectedS == String.fromCharCode(55,122,57,99,101,56,115,121,102,49,0);
   do {
      selectedS += `${(String.fromCharCode(49,0) == libjsijniprofilerj ? parseInt(`${penalty2}`) : libjsijniprofilerj.length)}`;
      if (listG) {
         break;
      }
   } while (listG && (crownm != selectedS));
      collection1.push(graphq / (Math.max(parseInt(`${roundy}`), 5)));
      collection1 = [2];
   let paginationE = mimof.size <= 9453415;
   do {
       let const_2F = 1;
      while (const_2F > 5) {
         const_2F ^= const_2F;
         break;
      }
      let default_ypG = const_2F >= 8887907;
      do {
          let gmailx = 2.0;
          let layoutG = String.fromCharCode(113,95,49,53,95,98,116,114,101,101,0);
          let analyticb: Array<any> = [715, 641, 262];
          let fastforwardt = 3;
          let sourceV = String.fromCharCode(100,101,109,97,110,100,95,111,95,53,52,0);
         const_2F *= parseInt(`${gmailx}`) + 1;
         gmailx += fastforwardt / (Math.max(analyticb.length, 10));
         layoutG = `${fastforwardt + analyticb.length}`;
         sourceV += "3";
         if (default_ypG) {
            break;
         }
      } while ((3 < (2 + const_2F)) && default_ypG);
      let fillI = 4935478 <= const_2F;
      do {
          let main_j6 = String.fromCharCode(119,95,52,55,95,98,111,116,116,108,101,110,101,99,107,0);
          let connectionL = String.fromCharCode(102,95,55,52,95,97,108,97,99,0);
          let active_ = false;
          let gradleR: Array<any> = [459, 938];
          let applicationR: Array<any> = [329, 502];
         const_2F ^= (main_j6 == String.fromCharCode(49,0) ? main_j6.length : gradleR.length);
         connectionL += `${applicationR.length}`;
         active_ = active_ || applicationR.length >= 13;
         gradleR = [((active_ ? 4 : 5))];
         if (fillI) {
            break;
         }
      } while (fillI && ((const_2F | 2) < 2 || (2 | const_2F) < 2));
      mimof.set(historyu, text1.size % (Math.max(historyu.length, 9)));
      if (paginationE) {
         break;
      }
   } while (paginationE && (Array.from(mimof.keys()).includes(`${configQ}`)));
   let libavdeviceF = libjsijniprofilerj.length >= 5195519;
   do {
       let videox = 3.0;
       let baseo = 5.0;
       let calendarx = 0;
       let optionsq = String.fromCharCode(108,105,98,101,118,101,110,116,95,110,95,54,49,0);
         optionsq += `${calendarx % (Math.max(optionsq.length, 3))}`;
      while ((2 | optionsq.length) == 5) {
         calendarx &= 3;
         break;
      }
      let short_q3 = 5548661.0 >= videox;
      do {
         videox *= parseFloat(`${1}`);
         if (short_q3) {
            break;
         }
      } while (((baseo * videox) >= 3.36) && short_q3);
         calendarx %= Math.max(2, optionsq.length);
      while ((optionsq.length + 3) < 2 || (calendarx + 3) < 5) {
         optionsq = `${calendarx << (Math.min(4, Math.abs(1)))}`;
         break;
      }
          let tickedk = String.fromCharCode(111,95,55,51,95,116,102,120,100,0);
         calendarx |= 2;
         tickedk += `${tickedk.length}`;
      while ((optionsq.length + 3) >= 5 && 1 >= (optionsq.length + 3)) {
         optionsq = `${optionsq.length << (Math.min(1, Math.abs(calendarx)))}`;
         break;
      }
      if (calendarx < 5) {
         baseo += parseFloat(`${parseInt(`${baseo}`) - calendarx}`);
      }
      for (let c = 0; c < 3; c++) {
          let material9 = 3;
          let libsentrya = String.fromCharCode(104,95,55,52,95,112,111,115,116,0);
          let uimanagerB: Array<any> = [641, 936];
          let footballS = String.fromCharCode(99,95,57,57,95,115,111,108,105,100,99,111,108,111,114,0);
         baseo /= Math.max(4, parseFloat(`${parseInt(`${baseo}`)}`));
         material9 >>= Math.min(3, Math.abs(uimanagerB.length - 1));
         libsentrya += `${uimanagerB.length}`;
         footballS = `${libsentrya.length & footballS.length}`;
      }
       let libjsijniprofilerf = String.fromCharCode(109,98,117,102,99,104,97,105,110,95,111,95,51,48,0);
      while ((5.52 * videox) == 4.38) {
         calendarx |= parseInt(`${baseo}`);
         break;
      }
      for (let x = 0; x < 1; x++) {
          let cornerN: Array<any> = [String.fromCharCode(108,95,49,95,102,111,114,101,103,114,111,117,110,100,0), String.fromCharCode(99,95,52,50,95,98,97,115,101,100,0), String.fromCharCode(97,95,51,56,95,99,112,112,108,105,110,116,0)];
          let belle = false;
          let executorI: Array<any> = [String.fromCharCode(110,95,53,54,95,115,110,97,112,115,104,111,116,0), String.fromCharCode(102,95,49,50,95,101,118,101,114,0), String.fromCharCode(105,95,56,48,95,112,97,117,115,101,0)];
          let pathH = false;
          let topicw = true;
         libjsijniprofilerf = `${2 * parseInt(`${videox}`)}`;
         cornerN.push((cornerN.length & (pathH ? 2 : 3)));
         belle = !topicw;
         executorI.push(1);
         pathH = cornerN.length >= 35;
      }
      libjsijniprofilerj = `${2 + parseInt(`${videox}`)}`;
      if (libavdeviceF) {
         break;
      }
   } while (libavdeviceF && (libjsijniprofilerj.length <= 3));
      text1.set(selectedS, (selectedS == String.fromCharCode(115,0) ? selectedS.length : tempK.length));
      crownm = `${libjsijniprofilerj.length | tempK.length}`;
   for (let t = 0; t < 2; t++) {
      text1 = new Map([[`${graphq}`, 1 * parseInt(`${showI}`)]]);
   }
   for (let v = 0; v < 2; v++) {
      penalty2 *= ((sansf ? 5 : 1) / (Math.max(parseInt(`${penalty2}`), 9)));
   }

    setIsVersionDialogOpen(!isVersionDialogOpen);
  };
  const toggleClearDialog = () => {
       let smallj: Array<any> = [396, 167, 19];
    let yingo = String.fromCharCode(113,95,53,56,0);
    let liveS = 5.0;
    let catalogg = 2;
    let text3 = String.fromCharCode(101,118,112,111,114,116,111,112,95,50,95,51,50,0);
    let classesD = String.fromCharCode(105,110,100,101,102,105,110,105,116,101,108,121,95,104,95,53,55,0);
    let androidr = true;
    let dycreatorp = 1.0;
    let coreQ = 1.0;
    let malaysiaR = String.fromCharCode(99,117,100,97,117,112,108,111,97,100,95,116,95,53,55,0);
    let dragi = String.fromCharCode(103,95,57,50,95,105,115,112,97,99,107,101,100,0);
    let productd = 4.0;
       let auto_5b = String.fromCharCode(117,95,49,55,95,102,116,118,102,111,108,100,101,114,99,108,111,115,101,100,0);
       let mbbannerh = false;
       let arrow6 = 1.0;
         auto_5b += `${((mbbannerh ? 4 : 2) & parseInt(`${arrow6}`))}`;
         arrow6 *= (1 - (mbbannerh ? 3 : 2));
         auto_5b += `${(parseInt(`${arrow6}`) | (mbbannerh ? 1 : 5))}`;
      let sigmobu = arrow6 >= 7553186.0;
      do {
         arrow6 /= Math.max(3, ((mbbannerh ? 1 : 4)));
         if (sigmobu) {
            break;
         }
      } while ((5.95 == (arrow6 * 3.25) || 5 == (parseInt(`${arrow6}`) * auto_5b.length)) && sigmobu);
      while (!auto_5b.includes(`${mbbannerh}`)) {
         mbbannerh = auto_5b.length > 51;
         break;
      }
         auto_5b += `${((mbbannerh ? 3 : 4))}`;
      let anythinkk = arrow6 <= 8452419.0;
      do {
         arrow6 -= parseInt(`${arrow6}`) % 3;
         if (anythinkk) {
            break;
         }
      } while ((auto_5b.startsWith(`${arrow6}`)) && anythinkk);
          let historyA = String.fromCharCode(107,95,50,56,95,115,105,116,101,109,97,112,0);
         arrow6 += (historyA == String.fromCharCode(75,0) ? parseInt(`${arrow6}`) : historyA.length);
      for (let k = 0; k < 2; k++) {
         mbbannerh = (((!mbbannerh ? auto_5b.length : 36) / (Math.max(auto_5b.length, 3))) <= 36);
      }
      text3 = `${(catalogg + (androidr ? 2 : 4))}`;
   for (let n = 0; n < 2; n++) {
      classesD += `${classesD.length}`;
   }
      catalogg ^= ((androidr ? 1 : 3) - smallj.length);
       let topicW = String.fromCharCode(98,117,99,107,101,116,95,103,95,49,0);
       let direct1 = String.fromCharCode(110,95,53,51,95,99,111,110,116,105,110,117,111,117,115,0);
       let libfbw = String.fromCharCode(115,116,97,116,105,111,110,97,114,105,116,121,95,121,95,50,53,0);
         libfbw += `${(String.fromCharCode(108,0) == topicW ? topicW.length : direct1.length)}`;
      if (topicW.length == direct1.length) {
         direct1 += `${2 * direct1.length}`;
      }
       let libsentryz = false;
      let nativemodulem = libsentryz ? !libsentryz : libsentryz;
      do {
          let userp = 1.0;
         libsentryz = (topicW.length >> (Math.min(4, direct1.length))) <= 76;
         userp += parseFloat(`${parseInt(`${userp}`) + parseInt(`${userp}`)}`);
         if (nativemodulem) {
            break;
         }
      } while ((direct1.length <= 2 || !libsentryz) && nativemodulem);
      for (let a = 0; a < 1; a++) {
         libfbw += `${(1 / (Math.max(8, (libsentryz ? 2 : 5))))}`;
      }
         libfbw = `${libfbw.length}`;
          let downloadert = 2.0;
         libsentryz = String.fromCharCode(53,0) == topicW;
         downloadert *= parseFloat(`${parseInt(`${downloadert}`) / (Math.max(10, parseInt(`${downloadert}`)))}`);
      for (let i = 0; i < 3; i++) {
          let hoverM = 0.0;
          let ping7: Array<any> = [749, 722];
          let chartF = true;
         direct1 += `${direct1.length - ping7.length}`;
         hoverM -= ((chartF ? 2 : 3) / (Math.max(3, parseInt(`${hoverM}`))));
         ping7.push((parseInt(`${hoverM}`) ^ (chartF ? 5 : 2)));
      }
         direct1 += `${((libsentryz ? 1 : 4))}`;
      yingo = `${yingo.length | 3}`;
      text3 += `${smallj.length}`;
      classesD += `${3 - parseInt(`${liveS}`)}`;
   for (let r = 0; r < 2; r++) {
      smallj = [2 % (Math.max(1, yingo.length))];
   }
      text3 = `${((androidr ? 2 : 3) >> (Math.min(Math.abs(parseInt(`${dycreatorp}`)), 4)))}`;
   if (classesD.length < yingo.length) {
      yingo += `${parseInt(`${liveS}`)}`;
   }
       let libavutil0 = String.fromCharCode(115,117,98,116,114,97,99,116,101,100,95,99,95,57,52,0);
       let reactS = String.fromCharCode(106,95,51,55,95,114,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0);
      while (2 == libavutil0.length) {
         libavutil0 += `${reactS.length ^ libavutil0.length}`;
         break;
      }
      let ewardedH = 9372189 <= reactS.length;
      do {
         reactS += `${reactS.length % 1}`;
         if (ewardedH) {
            break;
         }
      } while (ewardedH && (reactS.length == 2));
          let filterf: Map<any, any> = new Map([[String.fromCharCode(109,95,51,49,95,114,97,116,105,111,0),869], [String.fromCharCode(97,108,103,95,113,95,54,54,0),548]]);
         reactS = `${3 - filterf.size}`;
      let whiteq = String.fromCharCode(107,56,50,0) == reactS;
      do {
         reactS = `${reactS.length}`;
         if (whiteq) {
            break;
         }
      } while ((reactS.length == libavutil0.length) && whiteq);
          let placeholderQ = String.fromCharCode(103,101,110,101,114,97,116,101,100,95,98,95,51,0);
          let bingf = 2.0;
          let sendi = String.fromCharCode(118,97,114,109,97,115,107,95,101,95,52,50,0);
         libavutil0 = `${reactS.length / (Math.max(9, parseInt(`${bingf}`)))}`;
         placeholderQ += `${2 * placeholderQ.length}`;
         bingf *= placeholderQ.length * 2;
         sendi += `${3 << (Math.min(2, placeholderQ.length))}`;
      for (let v = 0; v < 1; v++) {
         libavutil0 += `${3 & reactS.length}`;
      }
      yingo = `${parseInt(`${dycreatorp}`) & smallj.length}`;
      yingo = `${parseInt(`${dycreatorp}`) & classesD.length}`;
      text3 = "3";
       let infoN = String.fromCharCode(109,97,120,105,109,117,109,95,119,95,54,0);
         infoN += `${infoN.length * infoN.length}`;
      for (let p = 0; p < 1; p++) {
         infoN += `${infoN.length + infoN.length}`;
      }
         infoN += `${1 + infoN.length}`;
      dycreatorp += (String.fromCharCode(66,0) == classesD ? parseInt(`${liveS}`) : classesD.length);
       let filterx = String.fromCharCode(99,112,117,105,110,102,111,95,108,95,53,53,0);
       let down8 = String.fromCharCode(102,95,57,52,95,109,105,110,109,97,120,0);
       let configD = 2;
      let blackb = filterx.length >= 8763758;
      do {
         filterx = `${configD - down8.length}`;
         if (blackb) {
            break;
         }
      } while ((!filterx.includes(`${configD}`)) && blackb);
         down8 = `${filterx.length % (Math.max(7, down8.length))}`;
          let directM = 2.0;
          let whiteu = String.fromCharCode(115,119,105,116,99,104,105,110,103,95,115,95,50,48,0);
         filterx += "2";
         directM -= parseFloat(`${3}`);
         whiteu += `${(whiteu == String.fromCharCode(85,0) ? whiteu.length : parseInt(`${directM}`))}`;
          let carouselI = 5.0;
         filterx += `${filterx.length}`;
         carouselI /= Math.max(3, parseInt(`${carouselI}`));
         down8 = `${down8.length ^ filterx.length}`;
          let mbsplash0 = 3.0;
          let episodei = 1.0;
          let package_5oS = false;
         down8 = `${2 / (Math.max(parseInt(`${episodei}`), 4))}`;
         mbsplash0 -= parseInt(`${mbsplash0}`) - 3;
         episodei += (parseFloat(`${(package_5oS ? 3 : 4) << (Math.min(Math.abs(parseInt(`${mbsplash0}`)), 1))}`));
         package_5oS = mbsplash0 <= 91.100;
      while (1 < (down8.length ^ configD) || 4 < (1 ^ down8.length)) {
         configD += down8.length | 2;
         break;
      }
       let episodek = String.fromCharCode(120,95,51,57,95,99,97,112,116,105,111,110,115,0);
      for (let h = 0; h < 1; h++) {
          let gemfileW = 5.0;
          let forwardU = 5.0;
         configD >>= Math.min(1, Math.abs(2 & configD));
         gemfileW += 3;
         forwardU /= Math.max(5, parseInt(`${gemfileW}`));
      }
      androidr = parseInt(`${dycreatorp}`) >= filterx.length;
   while (5.95 < (liveS - 1.41) && (text3.length % 1) < 2) {
      liveS += parseInt(`${dycreatorp}`) / 1;
      break;
   }
      text3 = `${2 & text3.length}`;
      liveS *= catalogg;
      liveS += 1 | parseInt(`${dycreatorp}`);

    setIsClearDialogOpen(!isClearDialogOpen);
  };
  const toggleRemoveAccountDialog = () => {
       let casting4 = false;
    let darkK = String.fromCharCode(103,97,109,97,95,113,95,54,51,0);
    let libfollyX = 3;
    let mbridge4 = String.fromCharCode(106,100,109,97,105,110,99,116,95,117,95,52,50,0);
    let specP = 5;
    let qaagR = String.fromCharCode(115,99,104,101,109,101,115,95,100,95,49,48,48,0);
    let lightO = String.fromCharCode(98,95,57,49,95,100,105,118,105,100,101,114,115,0);
    let yellowh = String.fromCharCode(112,97,114,109,115,95,57,95,52,57,0);
    let settingb = String.fromCharCode(103,114,97,100,102,117,110,95,111,95,52,54,0);
      yellowh += `${1 % (Math.max(4, darkK.length))}`;
   for (let e = 0; e < 1; e++) {
       let pinit_si = 4.0;
       let plashU = 2.0;
      let closeb = 9404637.0 <= plashU;
      do {
          let chaty: Array<any> = [555, 88, 969];
          let relatedu = 4.0;
          let eventS = 0;
         plashU /= Math.max(3, parseFloat(`${parseInt(`${plashU}`) % 2}`));
         chaty.push(chaty.length);
         relatedu *= parseFloat(`${parseInt(`${relatedu}`) / 1}`);
         eventS >>= Math.min(Math.abs(2 - chaty.length), 4);
         if (closeb) {
            break;
         }
      } while (closeb && (plashU >= 2.44));
      if (pinit_si > 5.42) {
         pinit_si += parseInt(`${pinit_si}`) & 2;
      }
         pinit_si /= Math.max(3, 3);
         plashU *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${pinit_si}`)), 5))}`);
         plashU /= Math.max(2, parseFloat(`${parseInt(`${pinit_si}`) & parseInt(`${plashU}`)}`));
      for (let t = 0; t < 3; t++) {
          let mapping4: Array<any> = [410, 955, 454];
          let about1 = 1.0;
          let trash_ = 3.0;
          let terms0: Array<any> = [String.fromCharCode(104,101,97,100,114,111,111,109,95,101,95,56,52,0), String.fromCharCode(121,117,118,95,106,95,51,57,0)];
          let clock9 = 4.0;
         pinit_si *= parseInt(`${about1}`);
         mapping4 = [parseInt(`${trash_}`)];
         trash_ /= Math.max(3, parseFloat(`${mapping4.length >> (Math.min(Math.abs(3), 2))}`));
         terms0 = [1 + parseInt(`${trash_}`)];
         clock9 -= terms0.length;
      }
      qaagR = `${yellowh.length}`;
   }
      settingb = `${mbridge4.length + lightO.length}`;
   if (yellowh.length <= 3) {
      yellowh += `${(String.fromCharCode(53,0) == darkK ? darkK.length : (casting4 ? 5 : 5))}`;
   }
      casting4 = lightO.length < 85;
   for (let n = 0; n < 3; n++) {
       let register_fkM = 1.0;
       let libturbomodulejsijnii = 4.0;
       let templateprocessor4 = String.fromCharCode(108,95,52,95,120,118,97,103,0);
       let sheetN = 5.0;
       let gdtadvl: Array<any> = [950, 679, 457];
      if (gdtadvl.length < 1) {
          let libcxxcomponentsa: Map<any, any> = new Map([[String.fromCharCode(115,116,114,114,101,115,101,116,95,53,95,56,53,0),79], [String.fromCharCode(97,114,109,118,116,101,95,110,95,56,52,0),653], [String.fromCharCode(103,115,109,100,101,99,95,57,95,52,48,0),892]]);
          let matchk: Array<any> = [String.fromCharCode(109,111,110,105,116,111,114,105,110,103,95,56,95,55,50,0), String.fromCharCode(116,95,53,50,95,114,101,112,0)];
          let redirect5 = String.fromCharCode(98,111,117,110,100,105,110,103,95,118,95,55,56,0);
         sheetN += parseFloat(`${3 | templateprocessor4.length}`);
         libcxxcomponentsa = new Map([[`${libcxxcomponentsa.size}`, 1]]);
         matchk.push(matchk.length ^ 2);
         redirect5 = `${matchk.length / (Math.max(3, libcxxcomponentsa.size))}`;
      }
      if (3 > (gdtadvl.length & 4) && (4 & templateprocessor4.length) > 1) {
         gdtadvl = [parseInt(`${libturbomodulejsijnii}`) * parseInt(`${sheetN}`)];
      }
         register_fkM *= 3 & parseInt(`${register_fkM}`);
       let attributedstringA = 3.0;
       let debugL = 1.0;
      if (debugL <= parseFloat(`${gdtadvl.length}`)) {
          let transferI = 5;
          let navigationC = false;
          let security6 = String.fromCharCode(99,111,109,109,97,110,100,115,95,115,95,57,49,0);
          let tickb = true;
          let readu = 3;
         debugL *= parseFloat(`${3 | parseInt(`${debugL}`)}`);
         transferI >>= Math.min(Math.abs(3), 2);
         navigationC = !navigationC;
         security6 = `${transferI}`;
         tickb = (readu / (Math.max(security6.length, 5))) >= 29;
         readu ^= transferI;
      }
         debugL -= parseFloat(`${3 * parseInt(`${register_fkM}`)}`);
          let whistleS: Array<any> = [521, 983, 126];
          let emojiy = true;
         register_fkM /= Math.max(gdtadvl.length, 5);
         whistleS.push(((emojiy ? 3 : 1) | whistleS.length));
         emojiy = whistleS.length > 76;
       let verticalm: Map<any, any> = new Map([[String.fromCharCode(97,95,54,53,95,117,105,110,116,108,101,0),true ], [String.fromCharCode(115,117,103,103,101,115,116,95,111,95,56,53,0),true ], [String.fromCharCode(112,95,57,52,95,112,97,103,0),true ]]);
         templateprocessor4 += `${2 & parseInt(`${attributedstringA}`)}`;
      for (let u = 0; u < 3; u++) {
         verticalm.set(`${attributedstringA}`, parseInt(`${attributedstringA}`) | templateprocessor4.length);
      }
         verticalm = new Map([[templateprocessor4, templateprocessor4.length]]);
         register_fkM -= templateprocessor4.length;
         attributedstringA -= parseFloat(`${parseInt(`${register_fkM}`)}`);
      while (1.49 == libturbomodulejsijnii) {
         libturbomodulejsijnii += gdtadvl.length;
         break;
      }
         templateprocessor4 += `${templateprocessor4.length}`;
      settingb = `${2 / (Math.max(10, darkK.length))}`;
   }
      lightO = `${(String.fromCharCode(99,0) == mbridge4 ? mbridge4.length : libfollyX)}`;
      libfollyX |= 3;
   while (4 < (mbridge4.length >> (Math.min(Math.abs(2), 3))) || (specP >> (Math.min(Math.abs(2), 3))) < 4) {
      specP >>= Math.min(yellowh.length, 2);
      break;
   }
   for (let o = 0; o < 3; o++) {
      darkK = `${specP}`;
   }
   let libpangleflippedI = specP <= 6823606;
   do {
      specP %= Math.max(3, lightO.length);
      if (libpangleflippedI) {
         break;
      }
   } while (libpangleflippedI && (5 >= qaagR.length));
      mbridge4 = `${darkK.length * yellowh.length}`;
   for (let s = 0; s < 2; s++) {
      lightO += "3";
   }
   if (1 == (3 >> (Math.min(1, Math.abs(specP)))) || 3 == (mbridge4.length >> (Math.min(3, Math.abs(specP))))) {
      specP += 3;
   }
      lightO += `${(2 % (Math.max(7, (casting4 ? 2 : 1))))}`;
   if (5 == mbridge4.length) {
      mbridge4 = `${libfollyX}`;
   }
      darkK += `${qaagR.length / (Math.max(3, 4))}`;
      libfollyX &= specP;
      darkK += `${((casting4 ? 2 : 2))}`;
      lightO = `${lightO.length}`;
   for (let k = 0; k < 2; k++) {
      yellowh = "1";
   }
       let statsh = 3.0;
         statsh += 3 & parseInt(`${statsh}`);
         statsh /= Math.max(1, parseInt(`${statsh}`) - 2);
         statsh /= Math.max(2 & parseInt(`${statsh}`), 4);
      specP -= parseInt(`${statsh}`) >> (Math.min(Math.abs(1), 3));
   let clockj = qaagR == String.fromCharCode(103,55,101,103,55,0);
   do {
      qaagR = `${qaagR.length & darkK.length}`;
      if (clockj) {
         break;
      }
   } while ((libfollyX < 4) && clockj);

    setIsRemoveDialogOpen(!isRemoveDialogOpen);
  }
  const onRemoveAccount = () => {
       let vignettel: Map<any, any> = new Map([[String.fromCharCode(117,95,56,54,95,105,110,116,101,114,97,99,116,111,114,0),412], [String.fromCharCode(99,95,53,48,95,110,101,116,105,115,114,0),808]]);
    let private_md1 = 4.0;
    let membershipm = 2.0;
    let largek = 0.0;
    let hook_ = String.fromCharCode(111,114,119,97,114,100,101,100,95,116,95,56,48,0);
    let moonc: Map<any, any> = new Map([[String.fromCharCode(122,95,50,95,108,108,97,117,100,100,115,112,0),false ], [String.fromCharCode(112,114,105,109,97,108,105,116,121,95,116,95,55,57,0),true ]]);
    let homeW: Map<any, any> = new Map([[String.fromCharCode(100,105,114,115,95,122,95,53,54,0),582], [String.fromCharCode(111,110,101,111,102,115,95,97,95,53,57,0),153], [String.fromCharCode(101,95,57,55,95,109,105,110,105,0),839]]);
    let interstitialk: Map<any, any> = new Map([[String.fromCharCode(112,105,99,107,101,114,115,95,122,95,54,51,0),499], [String.fromCharCode(114,95,52,51,95,104,117,102,102,121,117,118,0),376], [String.fromCharCode(107,101,99,99,97,107,95,120,95,52,53,0),302]]);
    let promotion0 = 4.0;
    let gesturesR = 0;
   if (!hook_.endsWith(`${promotion0}`)) {
       let episode3 = String.fromCharCode(119,95,54,55,95,119,117,110,100,101,102,0);
          let projectu = 3.0;
          let privacyQ = String.fromCharCode(114,97,116,105,111,110,97,108,95,122,95,53,50,0);
          let latnj = true;
         episode3 += `${episode3.length}`;
         projectu -= (privacyQ == String.fromCharCode(121,0) ? parseInt(`${projectu}`) : privacyQ.length);
         latnj = (privacyQ.length + parseInt(`${projectu}`)) >= 94;
       let vignettex = String.fromCharCode(101,95,55,52,95,103,110,111,0);
         vignettex += `${vignettex.length - 2}`;
      hook_ = `${1 | parseInt(`${membershipm}`)}`;
   }
      membershipm -= hook_.length;
       let filedQ = 3.0;
      if (4.7 > (1.2 * filedQ)) {
         filedQ /= Math.max(2 & parseInt(`${filedQ}`), 4);
      }
         filedQ *= 2 & parseInt(`${filedQ}`);
         filedQ += 2;
      hook_ = `${parseInt(`${membershipm}`) ^ 3}`;
   let statistics3 = 8680543.0 <= private_md1;
   do {
      private_md1 -= parseInt(`${largek}`) * gesturesR;
      if (statistics3) {
         break;
      }
   } while ((1 > (vignettel.size + parseInt(`${private_md1}`)) && (vignettel.size + 1) > 3) && statistics3);
      private_md1 /= Math.max(3, parseInt(`${membershipm}`));
      private_md1 *= 2 & vignettel.size;
      membershipm -= gesturesR / 2;
   let imagemanager8 = 7211198 >= gesturesR;
   do {
       let dangerP = String.fromCharCode(118,95,51,53,95,98,105,116,111,112,115,0);
       let sidex = String.fromCharCode(103,95,50,56,95,101,110,116,101,114,105,110,103,0);
         dangerP += "3";
          let adultj = 4;
         dangerP += `${dangerP.length}`;
         adultj |= adultj;
         dangerP += `${sidex.length}`;
          let matches2 = String.fromCharCode(99,111,117,110,116,100,111,119,110,95,114,95,51,57,0);
          let privilege6: Map<any, any> = new Map([[String.fromCharCode(99,95,57,56,95,115,112,105,110,110,101,114,0),969], [String.fromCharCode(109,95,52,95,114,101,112,114,101,115,101,110,116,115,0),656], [String.fromCharCode(104,95,49,57,95,109,99,111,114,101,0),684]]);
          let sort7 = 0;
         dangerP += `${sidex.length - 1}`;
         matches2 = `${matches2.length & 2}`;
         privilege6.set(`${sort7}`, 2 * privilege6.size);
         sort7 <<= Math.min(2, Math.abs(3 / (Math.max(10, sort7))));
      if (sidex.endsWith(`${dangerP.length}`)) {
         dangerP += `${(dangerP == String.fromCharCode(80,0) ? sidex.length : dangerP.length)}`;
      }
      if (3 == dangerP.length) {
          let libsentryT: Map<any, any> = new Map([[String.fromCharCode(97,115,115,117,109,101,95,102,95,49,55,0),String.fromCharCode(102,95,51,53,95,98,111,108,100,0)], [String.fromCharCode(105,95,52,54,95,99,97,99,104,101,102,108,117,115,104,0),String.fromCharCode(104,111,114,105,122,95,98,95,53,54,0)], [String.fromCharCode(113,95,51,49,95,118,97,114,109,97,115,107,0),String.fromCharCode(113,95,57,56,95,115,119,97,112,112,101,114,0)]]);
          let nativemoduleO = true;
          let giftM = 5.0;
          let statsF: Array<any> = [505, 562];
          let anythinkR = 0;
         dangerP += `${anythinkR}`;
         libsentryT.set(`${nativemoduleO}`, 3);
         giftM *= 1;
         statsF.push(1 | libsentryT.size);
         anythinkR ^= parseInt(`${giftM}`);
      }
      gesturesR += 3;
      if (imagemanager8) {
         break;
      }
   } while (imagemanager8 && (Array.from(vignettel.values()).includes(gesturesR)));
   for (let u = 0; u < 1; u++) {
      moonc.set(hook_, interstitialk.size);
   }
   if ((3 << (Math.min(2, Math.abs(interstitialk.size)))) > 4) {
      interstitialk = new Map([[hook_, 1]]);
   }
       let proxy6 = 4.0;
       let t_positionY = 3;
         t_positionY *= 1;
      let controlsk = t_positionY >= 9629961;
      do {
          let kickc = 2.0;
          let refresh8: Map<any, any> = new Map([[String.fromCharCode(120,112,114,118,95,104,95,54,56,0),String.fromCharCode(104,95,54,57,95,112,107,99,115,0)], [String.fromCharCode(117,95,55,53,95,112,111,115,101,0),String.fromCharCode(119,100,101,99,95,106,95,56,49,0)]]);
          let chinaw = String.fromCharCode(119,95,52,95,102,108,111,111,100,0);
         t_positionY += t_positionY % (Math.max(parseInt(`${kickc}`), 9));
         kickc /= Math.max(2, 1);
         refresh8.set(chinaw, 3 >> (Math.min(4, chinaw.length)));
         if (controlsk) {
            break;
         }
      } while (controlsk && (3 > (5 / (Math.max(1, t_positionY)))));
         t_positionY += 2 / (Math.max(parseInt(`${proxy6}`), 4));
          let styles = String.fromCharCode(102,109,97,100,100,95,116,95,49,50,0);
          let sourcew: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,114,95,118,95,56,56,0),String.fromCharCode(112,95,52,48,95,100,105,115,112,111,115,101,100,0)], [String.fromCharCode(97,95,52,57,95,110,105,108,115,0),String.fromCharCode(103,101,116,108,98,108,111,99,107,105,110,99,95,104,95,49,51,0)]]);
         t_positionY %= Math.max(2 >> (Math.min(Math.abs(t_positionY), 2)), 4);
         styles = "2";
         sourcew.set(`${styles}`, sourcew.size - styles.length);
      for (let x = 0; x < 1; x++) {
         proxy6 *= parseFloat(`${parseInt(`${proxy6}`)}`);
      }
      let libzeusI = 9478178.0 >= proxy6;
      do {
         proxy6 += parseFloat(`${t_positionY}`);
         if (libzeusI) {
            break;
         }
      } while (libzeusI && (2.64 == (4.88 - proxy6)));
      promotion0 += homeW.size & parseInt(`${proxy6}`);

    setTimeout(() => {

       let skipf = 1.0;
       let time_4dQ = String.fromCharCode(117,112,115,101,114,116,95,99,95,51,56,0);
       let temp0 = true;
      for (let e = 0; e < 2; e++) {
         time_4dQ = `${((temp0 ? 3 : 3))}`;
      }
      let langM = skipf <= 6936322.0;
      do {
         skipf /= Math.max(2, time_4dQ.length);
         if (langM) {
            break;
         }
      } while (langM && ((time_4dQ.length * parseInt(`${skipf}`)) <= 5 || (time_4dQ.length * 5) <= 2));
          let fadfdeebbbfdabbbabdadfaaddaax = false;
          let chinasameP: Array<any> = [948, 224, 267];
         time_4dQ += `${time_4dQ.length}`;
         fadfdeebbbfdabbbabdadfaaddaax = chinasameP.length >= 100 || fadfdeebbbfdabbbabdadfaaddaax;
         chinasameP.push(2);
         skipf *= time_4dQ.length & parseInt(`${skipf}`);
       let targetS = String.fromCharCode(103,117,116,116,101,114,95,55,95,53,51,0);
      for (let c = 0; c < 1; c++) {
         targetS += `${(String.fromCharCode(85,0) == targetS ? targetS.length : (temp0 ? 3 : 2))}`;
      }
         targetS = "1";
       let libglogq = String.fromCharCode(105,95,55,52,95,105,115,115,101,116,117,103,105,100,0);
       let whatsapp6 = String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,108,121,95,112,95,55,55,0);
       let collectionp = 3.0;
       let vignette8 = 2.0;
      hook_ += "2";
      homeW.set(`${membershipm}`, 2 * parseInt(`${membershipm}`));
   while (homeW.size <= 1) {
      homeW.set(`${promotion0}`, vignettel.size);
      break;
   }
      private_md1 += 1;
       let half5: Map<any, any> = new Map([[String.fromCharCode(115,116,97,114,95,50,95,57,53,0),264], [String.fromCharCode(106,95,49,52,95,115,99,104,101,109,101,0),773], [String.fromCharCode(99,111,100,101,98,111,111,107,95,98,95,57,55,0),657]]);
      let gesturesC = 5612264 >= half5.size;
      do {
          let latn8: Map<any, any> = new Map([[String.fromCharCode(119,95,53,54,95,115,117,112,101,114,0),true ], [String.fromCharCode(114,95,49,95,114,101,111,112,101,110,0),false ], [String.fromCharCode(118,95,54,56,95,110,101,119,101,115,116,0),true ]]);
         half5.set(`${latn8.size}`, half5.size * latn8.size);
         if (gesturesC) {
            break;
         }
      } while (gesturesC && (3 < (half5.size >> (Math.min(2, Math.abs(half5.size)))) || 1 < (3 >> (Math.min(2, Math.abs(half5.size))))));
      let helperB = half5.size <= 7132113;
      do {
         half5.set(`${half5.size}`, half5.size ^ 1);
         if (helperB) {
            break;
         }
      } while (helperB && ((half5.size - 5) <= 2 || (5 - half5.size) <= 3));
         half5.set(`${half5.size}`, 1);
      membershipm += interstitialk.size | parseInt(`${promotion0}`);
       let leftS: Map<any, any> = new Map([[String.fromCharCode(117,95,49,50,95,102,105,110,105,115,104,0),String.fromCharCode(111,99,116,112,111,105,110,116,95,121,95,52,54,0)], [String.fromCharCode(100,101,102,114,97,103,109,101,110,116,95,97,95,51,56,0),String.fromCharCode(116,95,55,48,95,115,116,115,99,0)], [String.fromCharCode(100,95,51,54,95,116,103,101,116,0),String.fromCharCode(115,112,101,99,115,95,111,95,56,50,0)]]);
      while (5 > (leftS.size / (Math.max(3, leftS.size))) && 3 > (leftS.size / (Math.max(5, 10)))) {
          let materialA = String.fromCharCode(107,95,57,50,95,98,117,102,102,101,114,115,105,110,107,0);
          let minimize6 = String.fromCharCode(108,111,116,116,105,101,107,101,121,112,97,116,104,95,116,95,50,0);
          let goal3 = true;
          let editz: Map<any, any> = new Map([[String.fromCharCode(120,95,50,52,95,101,110,116,114,111,112,121,109,111,100,101,100,97,116,97,0),622], [String.fromCharCode(107,95,52,50,95,115,110,97,112,115,104,111,116,115,0),808]]);
          let stylesE = 5;
         leftS.set(minimize6, (minimize6 == String.fromCharCode(83,0) ? leftS.size : minimize6.length));
         materialA = `${(editz.size ^ (goal3 ? 3 : 4))}`;
         goal3 = materialA.includes(`${goal3}`);
         editz.set(`${stylesE}`, 3);
         stylesE &= 2;
         break;
      }
         leftS = new Map([[`${leftS.size}`, leftS.size - leftS.size]]);
      if (leftS.size > leftS.size) {
          let next_ = String.fromCharCode(107,95,54,95,101,120,112,97,110,100,101,100,0);
          let cricket0 = true;
          let connectionK = false;
          let mountingS = String.fromCharCode(108,111,97,116,95,102,95,55,57,0);
         leftS = new Map([[`${cricket0}`, (mountingS == String.fromCharCode(55,0) ? mountingS.length : (cricket0 ? 1 : 2))]]);
         next_ += "3";
         connectionK = next_.length <= 5 || !connectionK;
      }
      homeW = new Map([[`${vignettel.size}`, parseInt(`${private_md1}`)]]);
   for (let f = 0; f < 2; f++) {
      largek += parseFloat(`${3}`);
   }
   if (2 >= hook_.length) {
       let videojsS = 1.0;
       let dice9 = String.fromCharCode(117,95,53,56,95,119,102,100,105,102,0);
         dice9 = `${1 - dice9.length}`;
      while (parseFloat(`${dice9.length}`) > videojsS) {
         dice9 = "3";
         break;
      }
          let verticalV: Map<any, any> = new Map([[String.fromCharCode(112,114,101,97,109,98,108,101,95,110,95,49,50,0),42], [String.fromCharCode(97,108,115,111,95,56,95,51,0),366], [String.fromCharCode(112,114,101,112,114,111,99,101,115,115,95,97,95,54,54,0),439]]);
         videojsS /= Math.max(parseFloat(`${dice9.length}`), 1);
         verticalV = new Map([[`${verticalV.size}`, verticalV.size]]);
      while (parseInt(`${videojsS}`) == dice9.length) {
         dice9 = `${dice9.length + parseInt(`${videojsS}`)}`;
         break;
      }
          let upgrade1 = String.fromCharCode(122,95,53,48,95,110,97,103,108,101,0);
          let w_titleq = String.fromCharCode(108,115,112,105,95,122,95,56,53,0);
          let string5 = String.fromCharCode(108,95,54,50,95,112,114,101,118,105,101,119,101,100,0);
         videojsS *= parseFloat(`${upgrade1.length}`);
         upgrade1 += `${2 / (Math.max(5, w_titleq.length))}`;
         w_titleq += `${(String.fromCharCode(116,0) == string5 ? w_titleq.length : string5.length)}`;
       let pageV = String.fromCharCode(121,95,54,53,95,114,97,110,115,105,116,105,111,110,0);
      hook_ += `${parseInt(`${private_md1}`)}`;
   }
       let read1 = true;
       let formY: Array<any> = [541, 482];
       let plusE: Map<any, any> = new Map([[String.fromCharCode(110,108,109,101,97,110,115,95,108,95,49,0),String.fromCharCode(116,101,109,112,111,114,97,108,95,117,95,57,56,0)], [String.fromCharCode(115,95,57,51,95,103,117,101,115,115,0),String.fromCharCode(102,95,54,57,95,114,101,97,100,108,110,0)], [String.fromCharCode(116,95,49,49,95,110,117,109,112,97,100,0),String.fromCharCode(99,117,114,116,97,105,110,115,95,110,95,52,52,0)]]);
      for (let b = 0; b < 2; b++) {
         plusE.set(`${read1}`, 3);
      }
         plusE = new Map([[`${plusE.size}`, 1 - plusE.size]]);
          let recommendationx = false;
          let ping3 = 3;
          let configurev = String.fromCharCode(112,114,111,112,115,95,106,95,57,54,0);
         read1 = recommendationx;
         ping3 *= 2 & ping3;
         configurev += `${ping3}`;
       let logom = 4.0;
       let shirtU = 1.0;
      while (read1 || 2.70 > (logom / 4.10)) {
         logom *= parseFloat(`${parseInt(`${shirtU}`)}`);
         break;
      }
         logom *= parseFloat(`${3 >> (Math.min(3, Math.abs(parseInt(`${logom}`))))}`);
         shirtU += parseFloat(`${formY.length >> (Math.min(Math.abs(2), 2))}`);
          let tailu = false;
          let uimanagerX = true;
          let teamf = String.fromCharCode(113,95,51,53,95,105,110,100,101,120,101,115,0);
         logom -= (parseFloat(`${String.fromCharCode(81,0) == teamf ? formY.length : teamf.length}`));
         tailu = (uimanagerX ? !tailu : !uimanagerX);
      let e_centerd = read1 ? !read1 : read1;
      do {
         read1 = 64 > plusE.size;
         if (e_centerd) {
            break;
         }
      } while ((plusE.size > 1 && (plusE.size - 1) > 2) && e_centerd);
      interstitialk.set(`${promotion0}`, parseInt(`${promotion0}`));
   for (let t = 0; t < 3; t++) {
      moonc = new Map([[`${homeW.size}`, homeW.size]]);
   }
      gesturesR /= Math.max(3, 1 << (Math.min(Math.abs(gesturesR), 3)));
      yys_StatsForm.showToast('我们将在3个工作日内处理您注销请求，请注意您的邮箱，在此期间您可以继续登录');
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

  
  
  
  const userState = useSelector<yys_HejiCricket>('userReducer');

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

          {yys_RelatedTooltips.isLogin(userState.user) &&
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
              {yys_RelatedTooltips.isLogin(userState.user) &&
                <ShowMoreButton text="注销账号" onPress={toggleRemoveAccountDialog} />
              }
            </View>
          </View>
        </View>
        {yys_RelatedTooltips.isLogin(userState.user) && (
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
