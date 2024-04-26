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
import ScreenContainer from '../../components/container/ww_collection';
import { RootStackScreenProps } from '@type/ww_tempnodatagif_description';
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native';

import TitleWithBackButtonHeader from '../../components/header/ww_react_predictionwin_header';
import { Button, Dialog } from '@rneui/themed';
import ShowMoreButton from '../../components/button/ww_libjsijniprofiler_button';
import NotificationModal from '../../components/modal/ww_countdown_ksad';
import MoreArrow from '@static/images/libcxxcomponentsPrivilege.svg';
import ConfirmationModal from '../../components/modal/ww_upgrade';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/ww_catagory_neon';
import { clearStorageMemory } from '@redux/actions/ww_dialog';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import { removeUserAuthState } from '@redux/actions/ww_libreactperfloggerjni_small';
import { changeScreenAction } from '@redux/actions/ww_hash';
import { wwEighteenShirt } from '@redux/ww_small';

import { APP_NAME_CONST, APP_VERSION, IS_OTHER_SKIN } from '@utility/ww_icon';
import { wwShielddoneAlbum } from '@redux/reducers/ww_detail_mbsplash';
import { wwLaunchRound } from '@utility/ww_star';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { wwVertical } from '@redux/reducers/ww_related_kuaishou';
import { wwBodan } from '@models/ww_liveendmodallogo_awayteamfield';
export default ({ navigation }: RootStackScreenProps<'设置'>) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isVersionDialogOpen, setIsVersionDialogOpen] = useState(false);
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const [subtitle1, setSubtitle1] = useState('当前已是最新版本' + APP_VERSION);

  const settingsReducer: wwShielddoneAlbum = useAppSelector(
    ({ settingsReducer }: wwEighteenShirt) => settingsReducer
  );

  const dispatch = useAppDispatch();

  const toggleLogoutDialog = () => {
       let specd: Array<any> = [968, 749, 722];
    let klevinR = 3.0;
    let fastforwardm = true;
    let values6 = 2.0;
    let libfollyh = 2.0;
    let gmailn = String.fromCharCode(108,95,52,48,95,100,101,115,105,103,110,0);
    let lang6 = 1;
    let username_ = String.fromCharCode(111,116,104,95,50,95,51,0);
    let dplusx = String.fromCharCode(109,95,52,52,95,109,99,111,109,112,0);
    let emptyn = false;
    let humidityr = String.fromCharCode(104,115,99,97,108,101,95,100,95,50,54,0);
      specd.push(parseInt(`${klevinR}`));
   while (5 <= (specd.length * parseInt(`${klevinR}`)) && 5 <= (parseInt(`${klevinR}`) * specd.length)) {
       let animationsf = String.fromCharCode(104,95,55,57,95,112,97,110,0);
       let username4 = String.fromCharCode(122,95,52,51,95,100,120,110,100,99,0);
       let debugo = String.fromCharCode(114,101,113,117,101,115,116,95,48,95,55,50,0);
      if (animationsf.length <= 4) {
         animationsf = `${(animationsf == String.fromCharCode(76,0) ? animationsf.length : debugo.length)}`;
      }
         debugo = `${1 << (Math.min(3, username4.length))}`;
         debugo = `${animationsf.length}`;
         username4 = `${2 * username4.length}`;
      if (!debugo.startsWith(username4)) {
         username4 += `${animationsf.length}`;
      }
       let uimanagerV = String.fromCharCode(118,105,100,101,111,116,111,111,108,98,111,120,95,51,95,57,53,0);
      let leagueS = 7181252 >= uimanagerV.length;
      do {
         uimanagerV = `${3 & username4.length}`;
         if (leagueS) {
            break;
         }
      } while (leagueS && (!debugo.endsWith(uimanagerV)));
      let quest0 = username4 == String.fromCharCode(52,48,50,49,100,100,111,119,98,111,0);
      do {
         username4 = `${1 ^ uimanagerV.length}`;
         if (quest0) {
            break;
         }
      } while (quest0 && (!debugo.includes(username4)));
         debugo = `${animationsf.length}`;
      klevinR -= ((emptyn ? 1 : 1));
      break;
   }
   while (4 < dplusx.length) {
      dplusx += `${((fastforwardm ? 5 : 3) * parseInt(`${libfollyh}`))}`;
      break;
   }
       let qaagQ = 0.0;
       let infoE = String.fromCharCode(110,95,54,54,95,115,115,101,100,105,102,102,0);
         qaagQ += infoE.length | 1;
         infoE = `${infoE.length}`;
         qaagQ *= (String.fromCharCode(97,0) == infoE ? parseInt(`${qaagQ}`) : infoE.length);
      for (let c = 0; c < 3; c++) {
         infoE = `${parseInt(`${qaagQ}`)}`;
      }
      for (let k = 0; k < 3; k++) {
         qaagQ /= Math.max(parseInt(`${qaagQ}`) >> (Math.min(infoE.length, 1)), 3);
      }
         qaagQ /= Math.max(3 + parseInt(`${qaagQ}`), 2);
      emptyn = values6 >= gmailn.length;
   while (gmailn == String.fromCharCode(101,0)) {
      humidityr += `${parseInt(`${klevinR}`)}`;
      break;
   }
      username_ += `${3 >> (Math.min(4, gmailn.length))}`;
      libfollyh *= parseFloat(`${humidityr.length}`);
       let ksadi: Map<any, any> = new Map([[String.fromCharCode(115,104,97,108,108,111,119,95,106,95,49,57,0),33], [String.fromCharCode(117,95,57,95,118,112,97,116,104,0),885]]);
       let bridgec: Array<any> = [493, 164];
       let eventsplash3 = String.fromCharCode(100,99,116,120,95,55,95,54,53,0);
          let largee: Map<any, any> = new Map([[String.fromCharCode(122,95,53,50,95,108,111,97,100,120,0),267], [String.fromCharCode(99,111,108,108,101,99,116,111,114,95,116,95,48,0),756], [String.fromCharCode(112,97,114,109,115,95,56,95,50,52,0),702]]);
          let sigmob6: Array<any> = [String.fromCharCode(110,95,55,51,95,116,97,115,107,115,0), String.fromCharCode(103,95,49,48,48,95,109,97,116,105,99,0), String.fromCharCode(97,95,52,50,95,97,116,97,98,97,115,101,0)];
         eventsplash3 += `${bridgec.length}`;
         largee.set(`${sigmob6.length}`, 1 - largee.size);
         sigmob6 = [2 * sigmob6.length];
         eventsplash3 = `${bridgec.length * eventsplash3.length}`;
      let headerR = eventsplash3.length <= 7029663;
      do {
          let rewardvideo0 = 5;
         eventsplash3 = `${(String.fromCharCode(109,0) == eventsplash3 ? ksadi.size : eventsplash3.length)}`;
         rewardvideo0 += rewardvideo0 * 2;
         if (headerR) {
            break;
         }
      } while (((bridgec.length ^ 4) > 4) && headerR);
      while (eventsplash3.includes(`${ksadi.size}`)) {
         eventsplash3 += `${ksadi.size / (Math.max(2, 2))}`;
         break;
      }
         ksadi = new Map([[`${ksadi.size}`, ksadi.size]]);
          let photoX = String.fromCharCode(115,116,97,114,116,117,112,95,100,95,57,0);
         bridgec = [1 / (Math.max(10, bridgec.length))];
         photoX += `${3 - photoX.length}`;
          let mbjscommonG = 2.0;
          let diceu: Array<any> = [204, 32, 51];
         ksadi = new Map([[`${diceu.length}`, eventsplash3.length]]);
         mbjscommonG *= 3;
         diceu = [2];
      let bingl = eventsplash3.length >= 5056153;
      do {
          let sportsz = 5;
          let iconuserR = 1.0;
          let main_y8 = String.fromCharCode(103,108,111,98,97,108,115,95,98,95,53,54,0);
          let closek = String.fromCharCode(102,105,110,103,101,114,115,95,121,95,51,54,0);
          let neons = String.fromCharCode(101,115,115,101,110,116,105,97,108,95,49,95,50,56,0);
         eventsplash3 += `${3 % (Math.max(9, eventsplash3.length))}`;
         sportsz /= Math.max(parseInt(`${iconuserR}`) / 2, 2);
         iconuserR += neons.length;
         main_y8 += "1";
         closek = "2";
         neons += `${(String.fromCharCode(49,0) == closek ? closek.length : neons.length)}`;
         if (bingl) {
            break;
         }
      } while ((3 >= (eventsplash3.length ^ 3)) && bingl);
      for (let p = 0; p < 2; p++) {
         ksadi = new Map([[`${ksadi.size}`, 1]]);
      }
      emptyn = 81 <= specd.length;
      gmailn += `${(dplusx == String.fromCharCode(86,0) ? parseInt(`${values6}`) : dplusx.length)}`;
   for (let b = 0; b < 3; b++) {
      klevinR -= parseInt(`${libfollyh}`) * 1;
   }
       let progressu = 5.0;
       let overlayt: Array<any> = [628, 228];
      let whiteL = 7815701 >= overlayt.length;
      do {
         overlayt.push(overlayt.length * parseInt(`${progressu}`));
         if (whiteL) {
            break;
         }
      } while (whiteL && (1.26 >= (progressu * 3.21) || 3.21 >= (progressu * overlayt.length)));
         progressu /= Math.max(1, 2 + parseInt(`${progressu}`));
          let middlebrightnesss = false;
          let middlewareC = String.fromCharCode(112,101,114,112,105,120,101,108,95,104,95,56,48,0);
          let libreactperfloggerjniM = false;
         progressu /= Math.max(3, overlayt.length ^ 1);
         middlebrightnesss = middlewareC.length >= 33 && !libreactperfloggerjniM;
         middlewareC = `${1 - middlewareC.length}`;
      if (3 < (parseInt(`${progressu}`) * overlayt.length) || (progressu * 3.65) < 4.77) {
         overlayt.push(parseInt(`${progressu}`));
      }
      if (5 > (overlayt.length + 1)) {
         progressu += overlayt.length;
      }
         overlayt.push(overlayt.length);
      gmailn = `${lang6}`;
   let review1 = 5901127 >= username_.length;
   do {
      username_ += `${1 | parseInt(`${libfollyh}`)}`;
      if (review1) {
         break;
      }
   } while (review1 && (humidityr != String.fromCharCode(66,0)));
      gmailn += `${3 & parseInt(`${libfollyh}`)}`;
   let episodess = fastforwardm ? !fastforwardm : fastforwardm;
   do {
       let collectionu = true;
       let signinupo = String.fromCharCode(121,117,108,101,95,114,95,50,51,0);
       let suggestion7 = String.fromCharCode(99,109,115,103,115,95,118,95,51,49,0);
       let arrowrightI = String.fromCharCode(110,97,116,105,111,110,97,108,95,55,95,54,50,0);
       let predictionbannersharedO: Map<any, any> = new Map([[String.fromCharCode(117,95,55,48,95,101,120,112,114,101,115,115,0),true ], [String.fromCharCode(99,111,110,102,101,116,116,105,95,120,95,53,57,0),true ]]);
       let dplusb: Map<any, any> = new Map([[String.fromCharCode(115,117,114,102,97,99,101,115,95,52,95,56,56,0),true ], [String.fromCharCode(97,114,99,104,95,48,95,51,0),false ]]);
      while (2 > arrowrightI.length && suggestion7 != String.fromCharCode(84,0)) {
         suggestion7 += `${predictionbannersharedO.size}`;
         break;
      }
       let package_xU = 1;
      for (let c = 0; c < 3; c++) {
          let plashy = true;
          let arrowupR = 4.0;
          let libreactperfloggerjniR = 0.0;
         dplusb.set(`${package_xU}`, package_xU);
         plashy = !plashy;
         arrowupR -= parseInt(`${libreactperfloggerjniR}`);
         libreactperfloggerjniR += ((plashy ? 5 : 5) | parseInt(`${arrowupR}`));
      }
       let middlewareO = 4.0;
          let flagp = String.fromCharCode(110,105,99,101,95,116,95,57,57,0);
         collectionu = (suggestion7.length | arrowrightI.length) <= 82;
         flagp += `${flagp.length | 1}`;
      while (signinupo.includes(`${dplusb.size}`)) {
          let black2 = String.fromCharCode(110,95,53,53,95,111,118,101,114,119,114,105,116,101,0);
          let sendj = true;
          let eventu = 0.0;
         signinupo = `${arrowrightI.length ^ black2.length}`;
         black2 += `${2 | parseInt(`${eventu}`)}`;
         sendj = !sendj;
         eventu -= parseInt(`${eventu}`) << (Math.min(3, Math.abs(2)));
         break;
      }
      while ((4 - predictionbannersharedO.size) <= 5 && 4 <= (predictionbannersharedO.size - dplusb.size)) {
         dplusb.set(signinupo, signinupo.length % 3);
         break;
      }
      fastforwardm = gmailn.length >= 9;
      if (episodess) {
         break;
      }
   } while ((4 >= (1 % (Math.max(5, specd.length))) || specd.length >= 1) && episodess);
   let anytime6 = dplusx == String.fromCharCode(104,119,102,116,108,121,108,106,0);
   do {
      dplusx += `${dplusx.length - specd.length}`;
      if (anytime6) {
         break;
      }
   } while (anytime6 && (dplusx.length < 3));
   for (let l = 0; l < 3; l++) {
      dplusx += "2";
   }
   for (let b = 0; b < 1; b++) {
       let predictionarrowX: Map<any, any> = new Map([[String.fromCharCode(105,110,118,111,107,101,95,111,95,56,54,0),428], [String.fromCharCode(122,95,49,50,95,100,111,119,110,119,97,114,100,0),883], [String.fromCharCode(98,112,115,95,56,95,55,53,0),911]]);
       let historyV = String.fromCharCode(116,105,108,101,95,110,95,49,51,0);
       let watchnowbgw = String.fromCharCode(98,101,104,97,118,105,111,114,115,95,103,95,55,50,0);
      if (predictionarrowX.size >= watchnowbgw.length) {
         watchnowbgw = "2";
      }
      for (let u = 0; u < 1; u++) {
         historyV = `${(String.fromCharCode(73,0) == historyV ? historyV.length : predictionarrowX.size)}`;
      }
          let styleE = String.fromCharCode(97,103,97,105,110,115,116,95,50,95,57,54,0);
          let coreH: Map<any, any> = new Map([[String.fromCharCode(114,95,55,55,95,115,116,97,116,105,111,110,97,114,105,116,121,0),282], [String.fromCharCode(115,101,113,110,111,95,51,95,50,55,0),695]]);
         watchnowbgw += "1";
         styleE += `${3 << (Math.min(1, styleE.length))}`;
         coreH = new Map([[`${coreH.size}`, 3]]);
         predictionarrowX = new Map([[`${predictionarrowX.size}`, predictionarrowX.size]]);
       let tickP: Map<any, any> = new Map([[String.fromCharCode(106,95,57,48,95,109,109,105,117,116,105,108,115,0),775], [String.fromCharCode(122,95,49,55,95,101,110,116,105,116,105,116,121,0),396]]);
       let analytic5: Map<any, any> = new Map([[String.fromCharCode(103,95,52,51,95,115,107,105,112,115,0),false ], [String.fromCharCode(117,95,53,50,95,109,98,117,118,0),true ], [String.fromCharCode(120,95,52,50,95,100,120,116,121,0),true ]]);
          let skipy = String.fromCharCode(103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,95,102,95,54,49,0);
         tickP.set(historyV, tickP.size);
         skipy = `${(String.fromCharCode(74,0) == skipy ? skipy.length : skipy.length)}`;
          let emojiH = true;
          let miniq: Array<any> = [63, 837];
          let orientationA: Array<any> = [429, 728];
         tickP = new Map([[historyV, (watchnowbgw == String.fromCharCode(111,0) ? watchnowbgw.length : historyV.length)]]);
         emojiH = (7 >= (miniq.length | (emojiH ? 7 : miniq.length)));
         orientationA.push(1 * miniq.length);
      for (let b = 0; b < 3; b++) {
          let mathp = String.fromCharCode(112,95,50,53,95,100,121,110,98,117,102,0);
          let footballA = true;
          let oranget = false;
          let updatesP = 2.0;
         historyV = `${3 >> (Math.min(1, Math.abs(tickP.size)))}`;
         mathp += `${(parseInt(`${updatesP}`) + (footballA ? 3 : 5))}`;
         footballA = mathp.startsWith(`${updatesP}`);
         oranget = mathp.length < 54;
      }
         analytic5 = new Map([[`${predictionarrowX.size}`, predictionarrowX.size]]);
      username_ = `${3 + specd.length}`;
   }
   if (3.17 <= (values6 * username_.length) && 5 <= (parseInt(`${values6}`) * username_.length)) {
      username_ = `${3 & gmailn.length}`;
   }
   while ((5 >> (Math.min(4, humidityr.length))) > 2 || (klevinR + humidityr.length) > 3.4) {
      humidityr += `${humidityr.length}`;
      break;
   }
       let iconeditM: Array<any> = [236, 829, 342];
      for (let l = 0; l < 3; l++) {
         iconeditM = [iconeditM.length];
      }
      for (let i = 0; i < 2; i++) {
         iconeditM.push(iconeditM.length + 2);
      }
          let zoomG = String.fromCharCode(115,101,114,105,97,108,108,121,95,111,95,51,55,0);
          let selections = 2.0;
         iconeditM.push(parseInt(`${selections}`) % (Math.max(10, iconeditM.length)));
         zoomG = `${zoomG.length / 3}`;
         selections /= Math.max(2, parseFloat(`${zoomG.length ^ 3}`));
      lang6 += 1;
      dplusx = `${3 & parseInt(`${klevinR}`)}`;
   while (5 > (lang6 ^ 5)) {
       let arrowrightK = String.fromCharCode(109,106,112,101,103,100,101,99,95,115,95,52,49,0);
       let targetG = String.fromCharCode(113,95,57,56,95,100,105,118,105,100,101,114,115,0);
       let bdxadsdkH = String.fromCharCode(99,111,109,112,105,116,97,98,108,101,95,57,95,53,49,0);
       let commentW = true;
       let blackR = String.fromCharCode(114,102,102,116,102,95,100,95,52,51,0);
      for (let o = 0; o < 3; o++) {
         arrowrightK = `${1 >> (Math.min(2, targetG.length))}`;
      }
         bdxadsdkH += "2";
         blackR += `${(targetG == String.fromCharCode(86,0) ? (commentW ? 4 : 2) : targetG.length)}`;
      for (let r = 0; r < 1; r++) {
         blackR += `${2 & arrowrightK.length}`;
      }
      for (let t = 0; t < 3; t++) {
          let area3 = String.fromCharCode(109,95,50,57,95,116,111,103,103,108,101,100,0);
          let sharel = 0;
          let annerW = String.fromCharCode(107,95,49,49,95,105,110,105,116,105,97,116,101,0);
          let chatH: Array<any> = [835, 234, 0];
          let merger3 = false;
         blackR = `${((merger3 ? 1 : 4) % (Math.max(area3.length, 4)))}`;
         area3 += `${annerW.length}`;
         sharel += 3 << (Math.min(1, chatH.length));
         annerW = `${annerW.length}`;
         chatH.push(3 + annerW.length);
         merger3 = sharel > chatH.length;
      }
      for (let q = 0; q < 2; q++) {
         targetG += `${bdxadsdkH.length}`;
      }
      if (1 > bdxadsdkH.length) {
         blackR = `${((commentW ? 3 : 2) & 3)}`;
      }
         blackR += `${targetG.length / (Math.max(1, 3))}`;
      let libreactD = arrowrightK.length >= 6276343;
      do {
          let mbbidZ = String.fromCharCode(100,95,53,56,95,97,99,101,115,115,111,114,121,0);
          let mountingi = String.fromCharCode(99,95,50,49,95,98,107,116,114,0);
          let index4 = 0.0;
          let loadingW = 5;
         arrowrightK = `${blackR.length}`;
         mbbidZ += `${loadingW / (Math.max(mbbidZ.length, 2))}`;
         mountingi += `${mountingi.length}`;
         index4 *= mbbidZ.length << (Math.min(2, Math.abs(parseInt(`${index4}`))));
         loadingW += mbbidZ.length / 3;
         if (libreactD) {
            break;
         }
      } while ((!arrowrightK.endsWith(`${commentW}`)) && libreactD);
      if (blackR.length == 4) {
         commentW = !blackR.startsWith(`${commentW}`);
      }
      let imagemanagerT = 5515217 <= targetG.length;
      do {
         targetG += `${(3 & (commentW ? 4 : 3))}`;
         if (imagemanagerT) {
            break;
         }
      } while ((4 >= targetG.length && arrowrightK.length >= 4) && imagemanagerT);
         bdxadsdkH += `${arrowrightK.length << (Math.min(3, targetG.length))}`;
          let pingp = 2.0;
          let libavcodecN = 0;
          let headert = true;
         blackR = `${libavcodecN}`;
         pingp /= Math.max(parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${pingp}`)), 3))}`), 5);
         libavcodecN ^= parseInt(`${pingp}`) + 3;
         headert = headert && 88.100 <= pingp;
      if (blackR.length < arrowrightK.length) {
         blackR = `${((commentW ? 4 : 4))}`;
      }
      for (let k = 0; k < 2; k++) {
         arrowrightK = `${1 ^ arrowrightK.length}`;
      }
      values6 *= 2 % (Math.max(parseInt(`${values6}`), 4));
      break;
   }
      emptyn = klevinR <= username_.length;
      values6 *= lang6;
       let backwardb: Array<any> = [745, 598, 233];
       let wind_ = String.fromCharCode(112,111,115,116,114,111,116,97,116,101,95,104,95,53,55,0);
       let uimanagerD = 5.0;
      if (1 < (wind_.length * backwardb.length) && (wind_.length * 1) < 3) {
         backwardb = [(wind_ == String.fromCharCode(118,0) ? wind_.length : parseInt(`${uimanagerD}`))];
      }
       let plust: Map<any, any> = new Map([[String.fromCharCode(121,95,56,56,95,99,111,110,102,105,114,109,101,100,0),397], [String.fromCharCode(99,95,54,53,95,103,98,114,97,112,0),670], [String.fromCharCode(103,114,97,110,112,111,115,95,118,95,54,56,0),111]]);
      while ((wind_.length << (Math.min(Math.abs(1), 1))) > 1) {
         wind_ = "1";
         break;
      }
      let libjsi8 = 7726119 <= plust.size;
      do {
         plust = new Map([[wind_, wind_.length]]);
         if (libjsi8) {
            break;
         }
      } while (libjsi8 && ((plust.size / (Math.max(wind_.length, 2))) > 4 && (plust.size / 4) > 5));
         wind_ += `${wind_.length}`;
       let trashv = true;
       let settingE = false;
         settingE = !settingE && wind_.length == 48;
         plust = new Map([[`${backwardb.length}`, 2 ^ backwardb.length]]);
      let orangeclocks = 6311963.0 >= uimanagerD;
      do {
         uimanagerD *= (plust.size & (settingE ? 5 : 2));
         if (orangeclocks) {
            break;
         }
      } while ((uimanagerD >= 2.89) && orangeclocks);
      emptyn = wind_.length == 52;
   if (!fastforwardm) {
      gmailn += "2";
   }

    setIsLogoutDialogOpen(!isLogoutDialogOpen);
  };

  const toggleVersionDialog = () => {
       let gradlewz = String.fromCharCode(104,115,99,97,108,101,114,95,118,95,57,52,0);
    let footballfiledlayoutJ: Map<any, any> = new Map([[String.fromCharCode(105,95,57,0),false ], [String.fromCharCode(116,95,55,52,95,109,97,110,105,102,101,115,116,0),true ], [String.fromCharCode(107,95,56,50,95,112,117,116,99,0),true ]]);
    let updatesf = 5;
    let layoutP = 1.0;
    let iconstary: Array<any> = [814, 496, 505];
    let header8 = 2;
    let iconmorem = String.fromCharCode(112,95,57,57,95,97,112,99,109,0);
    let matchH = 2.0;
    let resultP = String.fromCharCode(115,112,108,97,115,104,95,52,95,51,56,0);
    let country0 = String.fromCharCode(115,116,114,102,117,110,99,95,114,95,53,48,0);
    let listz: Map<any, any> = new Map([[String.fromCharCode(115,101,108,101,99,116,105,118,101,108,121,95,122,95,53,50,0),String.fromCharCode(109,95,55,55,95,119,101,108,115,101,110,99,100,101,109,111,0)], [String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,95,117,95,57,56,0),String.fromCharCode(119,95,57,55,95,100,97,114,119,105,110,0)]]);
    let iconbackwhiteN = 5.0;
    let iconedit6 = String.fromCharCode(99,111,110,116,97,105,110,101,114,95,112,95,57,48,0);
   for (let z = 0; z < 2; z++) {
       let exampleimageJ = String.fromCharCode(105,110,102,111,114,109,97,116,105,118,101,95,98,95,52,53,0);
       let reactnativeultimatelistviewJ = String.fromCharCode(118,95,55,54,95,114,101,115,101,116,98,117,102,0);
       let privilege9 = 3.0;
      while (reactnativeultimatelistviewJ.length < exampleimageJ.length) {
         exampleimageJ = `${reactnativeultimatelistviewJ.length / 1}`;
         break;
      }
      while (reactnativeultimatelistviewJ.startsWith(`${privilege9}`)) {
          let down3: Map<any, any> = new Map([[String.fromCharCode(122,95,57,57,95,114,101,119,114,105,116,101,114,0),203], [String.fromCharCode(113,95,56,95,101,120,116,114,97,99,116,0),67], [String.fromCharCode(102,117,116,101,120,95,111,95,51,52,0),338]]);
          let condensedD = true;
          let rankf: Array<any> = [472, 668];
          let attributedstring5 = false;
          let manifestp = 0;
         reactnativeultimatelistviewJ += `${down3.size}`;
         down3 = new Map([[`${rankf.length}`, manifestp ^ 3]]);
         condensedD = manifestp >= rankf.length;
         attributedstring5 = !condensedD || rankf.length < 92;
         break;
      }
          let vietname = String.fromCharCode(100,111,119,110,108,105,110,107,95,118,95,55,49,0);
         reactnativeultimatelistviewJ = `${parseInt(`${privilege9}`)}`;
         vietname = `${vietname.length}`;
         privilege9 *= parseFloat(`${parseInt(`${privilege9}`)}`);
      if (reactnativeultimatelistviewJ.length <= 2) {
          let iconk: Map<any, any> = new Map([[String.fromCharCode(114,97,116,105,111,115,95,54,95,52,48,0),String.fromCharCode(120,95,53,48,95,97,114,110,114,0)], [String.fromCharCode(98,95,57,95,117,110,105,113,117,101,0),String.fromCharCode(102,114,111,109,102,101,95,98,95,55,50,0)]]);
          let libhermesA = 5;
          let handler4 = String.fromCharCode(100,101,99,111,114,97,116,105,111,110,95,104,95,50,57,0);
         privilege9 -= parseFloat(`${3}`);
         iconk.set(`${libhermesA}`, 1);
         libhermesA += (handler4 == String.fromCharCode(88,0) ? handler4.length : libhermesA);
      }
          let taiwanE: Array<any> = [357, 835];
          let logouserc = false;
          let watch_: Map<any, any> = new Map([[String.fromCharCode(105,95,53,57,95,118,97,108,105,100,97,116,97,98,108,101,0),815], [String.fromCharCode(107,95,52,51,95,114,111,98,117,115,116,0),673], [String.fromCharCode(114,101,115,101,114,118,101,95,53,95,57,0),762]]);
         privilege9 *= parseFloat(`${3 | taiwanE.length}`);
         taiwanE = [watch_.size / 2];
         logouserc = !logouserc;
         watch_.set(`${logouserc}`, 3);
      if (!exampleimageJ.includes(`${privilege9}`)) {
         exampleimageJ = "1";
      }
      while (1.6 == (privilege9 / 3.4)) {
         reactnativeultimatelistviewJ = "2";
         break;
      }
      for (let g = 0; g < 2; g++) {
          let detailsc = false;
          let react8 = String.fromCharCode(107,95,54,51,95,115,117,102,102,105,120,0);
          let orangel = String.fromCharCode(110,97,118,105,103,97,116,101,95,98,95,52,50,0);
          let placeholdern = 4.0;
         reactnativeultimatelistviewJ += `${orangel.length ^ 2}`;
         detailsc = (react8.length - parseInt(`${placeholdern}`)) >= 35;
         react8 += `${1 | react8.length}`;
         orangel += "3";
         placeholdern += parseFloat(`${parseInt(`${placeholdern}`)}`);
      }
      country0 += `${(resultP == String.fromCharCode(98,0) ? resultP.length : country0.length)}`;
   }
   if (resultP.includes(`${listz.size}`)) {
      resultP += `${iconmorem.length + updatesf}`;
   }
   while (footballfiledlayoutJ.get(`${matchH}`) != null) {
       let z_hashY = 4.0;
       let suggestionI = 2.0;
       let movies0 = String.fromCharCode(106,95,49,56,95,116,104,97,119,0);
      let modityK = 6086892.0 >= suggestionI;
      do {
         suggestionI -= movies0.length ^ 1;
         if (modityK) {
            break;
         }
      } while (modityK && ((1 - movies0.length) < 2 && (movies0.length >> (Math.min(Math.abs(1), 2))) < 4));
         z_hashY *= parseFloat(`${parseInt(`${suggestionI}`)}`);
      if ((4.11 - z_hashY) >= 3.29 && 5 >= (1 - parseInt(`${z_hashY}`))) {
         z_hashY += parseFloat(`${parseInt(`${suggestionI}`)}`);
      }
         suggestionI /= Math.max((movies0 == String.fromCharCode(57,0) ? movies0.length : parseInt(`${suggestionI}`)), 1);
         z_hashY += parseFloat(`${1 / (Math.max(parseInt(`${z_hashY}`), 2))}`);
       let bodanh: Map<any, any> = new Map([[String.fromCharCode(111,95,51,50,95,101,110,99,114,121,112,116,0),155], [String.fromCharCode(99,95,52,95,99,117,114,118,101,115,0),945]]);
       let rncoreJ: Map<any, any> = new Map([[String.fromCharCode(99,95,54,51,95,109,105,100,116,111,110,101,115,0),948], [String.fromCharCode(101,97,105,100,99,116,95,50,95,52,49,0),732], [String.fromCharCode(112,101,114,95,116,95,54,54,0),950]]);
          let product2: Array<any> = [String.fromCharCode(118,95,52,48,95,99,111,110,102,105,103,117,114,101,0), String.fromCharCode(99,114,101,97,116,111,114,115,95,112,95,50,52,0), String.fromCharCode(107,95,53,55,95,99,111,110,100,105,116,105,111,110,115,0)];
          let libswscaleg = 5.0;
         suggestionI /= Math.max(bodanh.size, 2);
         product2 = [2];
         libswscaleg /= Math.max(product2.length & 2, 1);
      while (rncoreJ.get(`${suggestionI}`) != null) {
         rncoreJ = new Map([[`${rncoreJ.size}`, rncoreJ.size]]);
         break;
      }
          let clubY = true;
          let securitye: Map<any, any> = new Map([[String.fromCharCode(106,95,55,55,95,115,121,110,99,109,97,114,107,101,114,0),233], [String.fromCharCode(99,95,50,53,95,99,108,97,112,0),396], [String.fromCharCode(115,95,48,95,97,110,100,0),963]]);
         bodanh.set(`${suggestionI}`, parseInt(`${suggestionI}`));
         clubY = (8 > ((clubY ? securitye.size : 84) % (Math.max(securitye.size, 8))));
      matchH *= listz.size;
      break;
   }
      listz.set(gradlewz, (gradlewz == String.fromCharCode(106,0) ? gradlewz.length : parseInt(`${layoutP}`)));
   let colorsB = 8139559 >= resultP.length;
   do {
      resultP += "1";
      if (colorsB) {
         break;
      }
   } while (colorsB && (header8 == resultP.length));
      matchH *= iconmorem.length;
      gradlewz += `${resultP.length}`;
      listz = new Map([[`${footballfiledlayoutJ.size}`, footballfiledlayoutJ.size % (Math.max(2, 7))]]);
   if (2.87 == (iconbackwhiteN + 5.49)) {
      iconbackwhiteN -= iconmorem.length * 3;
   }
   for (let l = 0; l < 1; l++) {
      iconstary.push(3);
   }
      header8 %= Math.max(5, listz.size);
   for (let v = 0; v < 2; v++) {
       let root9 = String.fromCharCode(101,95,49,55,95,103,117,116,115,0);
       let yellowg: Array<any> = [750, 833];
       let logo9: Array<any> = [442, 25];
       let hiadc: Map<any, any> = new Map([[String.fromCharCode(99,97,108,99,108,117,108,97,116,101,95,106,95,49,51,0),228], [String.fromCharCode(106,95,49,49,95,115,101,97,108,0),836], [String.fromCharCode(112,95,55,48,95,97,99,102,102,0),298]]);
          let configurex = 5.0;
          let downarrowX = String.fromCharCode(111,95,55,50,95,118,115,105,110,107,0);
         hiadc = new Map([[`${logo9.length}`, (String.fromCharCode(112,0) == downarrowX ? downarrowX.length : logo9.length)]]);
         configurex -= 3 ^ parseInt(`${configurex}`);
      for (let d = 0; d < 1; d++) {
         hiadc.set(root9, root9.length ^ 1);
      }
      if (root9.endsWith(`${logo9.length}`)) {
         logo9.push(1 & logo9.length);
      }
         root9 += `${2 & hiadc.size}`;
      if (1 == (yellowg.length % (Math.max(root9.length, 4)))) {
          let iconnewsshareT: Array<any> = [295, 325, 717];
          let bdxadsdkG = String.fromCharCode(116,114,117,101,104,100,95,97,95,53,50,0);
          let private_lw = String.fromCharCode(119,114,105,116,101,95,101,95,49,51,0);
         yellowg.push(3 + iconnewsshareT.length);
         iconnewsshareT = [private_lw.length / 1];
         bdxadsdkG += "2";
         private_lw = `${bdxadsdkG.length >> (Math.min(private_lw.length, 3))}`;
      }
          let mountingN = String.fromCharCode(119,95,55,51,95,109,101,109,111,114,121,98,97,114,114,105,101,114,0);
          let watchnowbgO = true;
          let linkV = String.fromCharCode(107,95,53,95,101,110,116,114,121,0);
         yellowg.push(root9.length);
         mountingN = `${((watchnowbgO ? 4 : 2) - 1)}`;
         watchnowbgO = !watchnowbgO;
         linkV += `${(linkV.length * (watchnowbgO ? 2 : 5))}`;
      let stringN = yellowg.length <= 5264828;
      do {
          let nativeexH = 1.0;
         yellowg = [yellowg.length / 3];
         nativeexH -= parseInt(`${nativeexH}`);
         if (stringN) {
            break;
         }
      } while (stringN && ((yellowg.length | root9.length) < 3 || 3 < (yellowg.length | root9.length)));
          let details8 = String.fromCharCode(102,95,52,48,95,117,112,108,111,97,100,115,0);
         root9 += `${logo9.length}`;
         details8 = `${details8.length}`;
      while (3 <= (5 | logo9.length)) {
         logo9.push(root9.length - logo9.length);
         break;
      }
      let specZ = root9.length >= 7992048;
      do {
          let basketballhometeamG = String.fromCharCode(110,95,49,48,48,95,108,108,97,117,100,100,115,112,0);
          let questiconI = true;
          let z_imageE = String.fromCharCode(105,95,55,50,95,101,120,99,108,117,100,101,100,0);
         root9 += `${z_imageE.length}`;
         basketballhometeamG += `${((questiconI ? 1 : 5) & 1)}`;
         questiconI = basketballhometeamG.length == 4;
         z_imageE = `${((questiconI ? 4 : 2) * 2)}`;
         if (specZ) {
            break;
         }
      } while ((3 < (4 | root9.length) || 5 < (root9.length | 4)) && specZ);
          let viewsL = String.fromCharCode(102,95,57,48,95,99,111,100,101,99,115,117,98,98,108,111,99,107,0);
          let gradleV: Array<any> = [String.fromCharCode(101,95,55,95,103,114,97,118,105,116,121,0), String.fromCharCode(97,108,108,121,117,118,95,106,95,49,52,0)];
          let gesturesf = 2.0;
         yellowg = [root9.length];
         viewsL = "2";
         gradleV = [parseInt(`${gesturesf}`)];
         gesturesf *= gradleV.length | parseInt(`${gesturesf}`);
      if ((root9.length / 3) < 1) {
         root9 = `${yellowg.length}`;
      }
      matchH *= 2;
   }
   if (1 == footballfiledlayoutJ.size) {
       let expiredx = 1.0;
       let humidityP = String.fromCharCode(116,95,57,54,95,114,101,115,105,122,97,98,108,101,0);
       let tooltipsX = 5.0;
       let debug0 = 3.0;
       let skipU = String.fromCharCode(102,105,100,99,116,95,48,95,53,0);
      while (humidityP.endsWith(`${debug0}`)) {
          let long_r9 = String.fromCharCode(107,101,121,119,111,114,100,95,102,95,53,51,0);
         humidityP = `${parseInt(`${expiredx}`)}`;
         long_r9 += "1";
         break;
      }
      for (let u = 0; u < 1; u++) {
          let filledF = String.fromCharCode(117,95,50,49,95,101,110,99,111,100,101,114,115,0);
          let livenodatabgimgt = String.fromCharCode(100,95,49,49,95,119,97,110,116,0);
          let final_8mV = 2.0;
          let libjsinspectorq: Map<any, any> = new Map([[String.fromCharCode(121,95,54,51,95,118,105,101,119,115,0),String.fromCharCode(118,95,51,51,95,97,116,116,105,98,117,116,101,115,0)], [String.fromCharCode(112,102,114,97,109,101,95,121,95,55,55,0),String.fromCharCode(100,95,50,95,102,116,115,121,121,0)], [String.fromCharCode(105,104,100,114,95,121,95,49,50,0),String.fromCharCode(97,117,116,111,114,101,115,105,122,101,115,95,116,95,53,49,0)]]);
         skipU += "1";
         filledF += `${parseInt(`${final_8mV}`)}`;
         livenodatabgimgt += `${1 & livenodatabgimgt.length}`;
         final_8mV += parseFloat(`${livenodatabgimgt.length | filledF.length}`);
         libjsinspectorq.set(`${filledF}`, libjsinspectorq.size % (Math.max(4, filledF.length)));
      }
         humidityP = `${skipU.length}`;
      while (expiredx == 5.21) {
         expiredx /= Math.max(2, parseFloat(`${parseInt(`${tooltipsX}`)}`));
         break;
      }
      while ((1.32 + debug0) == 2.54 && 2.80 == (1.32 + debug0)) {
          let g_titles: Map<any, any> = new Map([[String.fromCharCode(106,95,55,50,0),519], [String.fromCharCode(115,95,56,54,95,108,105,99,101,110,115,101,0),46]]);
          let recommendationD = 4.0;
          let dragR = String.fromCharCode(114,97,110,103,101,95,119,95,50,51,0);
          let libcrashsdkn = 5;
          let libavdeviceS = 2.0;
         debug0 -= parseInt(`${tooltipsX}`) ^ 1;
         g_titles = new Map([[`${g_titles.size}`, (dragR == String.fromCharCode(108,0) ? g_titles.size : dragR.length)]]);
         recommendationD -= 2;
         libcrashsdkn >>= Math.min(Math.abs(1 | parseInt(`${libavdeviceS}`)), 5);
         libavdeviceS *= g_titles.size;
         break;
      }
      while (3 > (parseInt(`${tooltipsX}`) / (Math.max(9, humidityP.length))) || (tooltipsX / (Math.max(3, parseFloat(`${humidityP.length}`)))) > 2.20) {
         humidityP = `${(humidityP == String.fromCharCode(49,0) ? parseInt(`${tooltipsX}`) : humidityP.length)}`;
         break;
      }
         humidityP += `${parseInt(`${tooltipsX}`) ^ 1}`;
      for (let a = 0; a < 3; a++) {
         skipU += `${3 | skipU.length}`;
      }
          let bufferZ = 0;
          let slidern = String.fromCharCode(99,95,53,52,95,109,105,99,114,111,112,104,111,110,101,0);
         humidityP = "1";
         bufferZ |= 1;
         slidern += `${slidern.length}`;
       let profileH = 4.0;
          let loginsuccesss = 3.0;
          let unimplementedviewS = true;
          let iconmorew: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,120,95,55,95,52,49,0),865], [String.fromCharCode(102,95,57,55,95,116,119,105,108,105,103,104,116,0),713], [String.fromCharCode(115,117,112,112,111,114,116,97,98,108,101,95,112,95,52,53,0),631]]);
         humidityP = `${(skipU == String.fromCharCode(111,0) ? skipU.length : iconmorew.size)}`;
         loginsuccesss /= Math.max((parseInt(`${loginsuccesss}`) ^ (unimplementedviewS ? 5 : 3)), 1);
         unimplementedviewS = loginsuccesss < 10.10 && !unimplementedviewS;
         iconmorew = new Map([[`${loginsuccesss}`, ((unimplementedviewS ? 4 : 5) / (Math.max(parseInt(`${loginsuccesss}`), 7)))]]);
       let login7: Array<any> = [322, 138, 409];
       let benefitV: Array<any> = [848, 339, 215];
       let libreanimatedK = String.fromCharCode(118,99,97,99,100,97,116,97,95,116,95,49,52,0);
          let package_kcV = String.fromCharCode(98,95,52,50,95,114,111,116,97,116,105,111,110,0);
          let push0 = String.fromCharCode(111,95,51,95,109,120,112,101,103,0);
         profileH *= parseFloat(`${parseInt(`${tooltipsX}`)}`);
         package_kcV += `${3 - package_kcV.length}`;
         push0 += `${push0.length}`;
      while (2.86 <= (profileH - 2.20) || 4.95 <= (2.20 * profileH)) {
         profileH *= parseFloat(`${2}`);
         break;
      }
      footballfiledlayoutJ = new Map([[resultP, 3 - resultP.length]]);
   }
   for (let z = 0; z < 3; z++) {
      listz.set(`${matchH}`, 2);
   }
   while (iconmorem == String.fromCharCode(106,0)) {
       let selectX = 5;
         selectX &= selectX + 2;
          let matchactiveq = String.fromCharCode(99,104,101,99,107,95,105,95,54,55,0);
          let hookse = String.fromCharCode(97,114,109,118,95,100,95,55,55,0);
         selectX |= selectX ^ hookse.length;
         matchactiveq += `${3 << (Math.min(4, matchactiveq.length))}`;
         hookse = `${matchactiveq.length}`;
          let private_8J = String.fromCharCode(115,119,105,122,122,108,105,110,103,95,98,95,51,55,0);
         selectX /= Math.max(selectX | 2, 5);
         private_8J = `${private_8J.length % (Math.max(3, 7))}`;
      resultP = `${footballfiledlayoutJ.size}`;
      break;
   }
   for (let d = 0; d < 1; d++) {
       let texto: Array<any> = [601, 948];
       let animations = 5.0;
         texto = [texto.length];
      for (let n = 0; n < 3; n++) {
          let animationL = 5;
          let huaweic = 5;
          let kuaishouJ = 4.0;
          let encryptL = 1.0;
         texto = [3 | parseInt(`${animations}`)];
         animationL >>= Math.min(3, Math.abs(2 * parseInt(`${encryptL}`)));
         huaweic /= Math.max(3, animationL + parseInt(`${kuaishouJ}`));
         kuaishouJ += parseFloat(`${huaweic}`);
         encryptL -= parseFloat(`${animationL}`);
      }
      if (5.65 >= animations) {
          let adultO = true;
          let libjsinspector0 = 2.0;
          let google1: Array<any> = [263, 422, 78];
          let eventJ = 3.0;
          let sideM = String.fromCharCode(102,95,52,52,95,116,111,100,112,0);
         animations += parseFloat(`${texto.length}`);
         adultO = (eventJ * libjsinspector0) > 89.22;
         libjsinspector0 += parseFloat(`${parseInt(`${libjsinspector0}`)}`);
         google1.push(parseInt(`${libjsinspector0}`));
         eventJ *= parseFloat(`${sideM.length | 1}`);
         sideM = `${3 % (Math.max(6, parseInt(`${eventJ}`)))}`;
      }
         animations -= parseFloat(`${1}`);
         animations += parseFloat(`${1}`);
      let logon = 5414268 >= texto.length;
      do {
         texto.push(parseInt(`${animations}`));
         if (logon) {
            break;
         }
      } while ((5.64 == animations) && logon);
      iconstary.push(texto.length | iconmorem.length);
   }
      iconbackwhiteN -= gradlewz.length;
      gradlewz = `${header8}`;
   for (let c = 0; c < 2; c++) {
       let productZ = String.fromCharCode(114,95,53,57,95,108,97,121,111,121,116,0);
       let details3 = String.fromCharCode(116,97,103,103,105,110,103,95,122,95,50,49,0);
       let upgradeV = String.fromCharCode(109,115,103,115,109,100,101,99,95,107,95,55,57,0);
       let trasht: Map<any, any> = new Map([[String.fromCharCode(108,95,56,95,115,111,102,114,101,101,0),String.fromCharCode(109,101,110,116,105,111,110,115,95,49,95,53,56,0)], [String.fromCharCode(112,114,101,99,104,101,99,107,111,117,116,95,103,95,57,53,0),String.fromCharCode(109,95,51,52,95,97,110,105,109,97,116,101,0)], [String.fromCharCode(115,119,105,99,104,95,120,95,57,48,0),String.fromCharCode(120,95,51,95,108,111,111,115,101,0)]]);
         upgradeV = `${upgradeV.length}`;
      for (let a = 0; a < 3; a++) {
         productZ = `${trasht.size / (Math.max(details3.length, 4))}`;
      }
         productZ += `${productZ.length ^ 2}`;
         details3 += `${(details3 == String.fromCharCode(71,0) ? productZ.length : details3.length)}`;
      if (upgradeV != details3) {
         details3 += `${details3.length}`;
      }
          let flyerK = true;
          let bggradientd = false;
         productZ += `${(details3 == String.fromCharCode(52,0) ? details3.length : (flyerK ? 4 : 1))}`;
         flyerK = (!bggradientd ? !bggradientd : bggradientd);
      if (5 == (1 * details3.length)) {
          let heartK: Array<any> = [637, 4, 14];
          let linkC = 5.0;
         details3 += `${trasht.size}`;
         heartK.push(2);
         linkC *= parseFloat(`${3 / (Math.max(7, parseInt(`${linkC}`)))}`);
      }
      let episodesv = 7114674 <= upgradeV.length;
      do {
         upgradeV += `${details3.length + upgradeV.length}`;
         if (episodesv) {
            break;
         }
      } while ((4 == productZ.length) && episodesv);
      while ((upgradeV.length & trasht.size) < 2 && 2 < (trasht.size & upgradeV.length)) {
         upgradeV = `${2 * upgradeV.length}`;
         break;
      }
      while (upgradeV.length > 5) {
         upgradeV += `${details3.length % 1}`;
         break;
      }
      while (2 >= productZ.length) {
         details3 += `${productZ.length + details3.length}`;
         break;
      }
         trasht.set(`${upgradeV}`, trasht.size / (Math.max(2, 5)));
      footballfiledlayoutJ.set(`${layoutP}`, 3 ^ updatesf);
   }
   for (let l = 0; l < 1; l++) {
      matchH -= parseInt(`${iconbackwhiteN}`) - 2;
   }
       let detailg: Array<any> = [428, 734, 913];
       let apple4: Array<any> = [242, 634];
      let neonS = 9824454 >= apple4.length;
      do {
         apple4 = [apple4.length];
         if (neonS) {
            break;
         }
      } while (neonS && (1 >= detailg.length));
      if (2 <= (apple4.length | 5)) {
         apple4 = [detailg.length / 3];
      }
         detailg.push(detailg.length % (Math.max(1, 6)));
      let mbridgep = 6428574 >= detailg.length;
      do {
         detailg.push(apple4.length << (Math.min(4, detailg.length)));
         if (mbridgep) {
            break;
         }
      } while (mbridgep && (apple4.includes(detailg.length)));
      let defaultlogoS = detailg.length >= 9235221;
      do {
         detailg = [1 | detailg.length];
         if (defaultlogoS) {
            break;
         }
      } while (defaultlogoS && (3 < (apple4.length & 1)));
         detailg.push(apple4.length ^ 1);
      iconstary = [iconmorem.length];
   for (let u = 0; u < 2; u++) {
      listz.set(gradlewz, 1);
   }
       let nativeexm = 4;
       let weatherV = String.fromCharCode(117,95,55,51,95,98,105,103,103,101,115,116,0);
       let shootyesgoalZ = String.fromCharCode(99,101,110,99,95,53,95,55,55,0);
      let diceQ = shootyesgoalZ == String.fromCharCode(97,56,98,120,120,121,0);
      do {
         shootyesgoalZ += `${(shootyesgoalZ == String.fromCharCode(115,0) ? weatherV.length : shootyesgoalZ.length)}`;
         if (diceQ) {
            break;
         }
      } while (diceQ && (shootyesgoalZ == String.fromCharCode(102,0) && weatherV == String.fromCharCode(111,0)));
      for (let g = 0; g < 1; g++) {
          let search0 = false;
         weatherV = `${(String.fromCharCode(116,0) == weatherV ? shootyesgoalZ.length : weatherV.length)}`;
         search0 = !search0;
      }
         nativeexm &= shootyesgoalZ.length;
      if (nativeexm == shootyesgoalZ.length) {
          let megaphonex = String.fromCharCode(115,121,115,114,97,110,100,95,121,95,57,55,0);
          let armvaZ = String.fromCharCode(116,114,117,110,99,112,97,115,115,101,115,95,112,95,50,54,0);
          let ajax4 = 1.0;
          let emptyB = false;
          let regengv = 1;
         nativeexm &= nativeexm;
         megaphonex += `${megaphonex.length}`;
         armvaZ += `${parseInt(`${ajax4}`) >> (Math.min(2, Math.abs(3)))}`;
         ajax4 += parseFloat(`${1}`);
         emptyB = armvaZ.includes(`${ajax4}`);
         regengv <<= Math.min(4, parseInt(`${Math.abs((regengv / (Math.max(10, (emptyB ? 5 : 4)))))}`));
      }
         shootyesgoalZ = "2";
         nativeexm ^= 1 >> (Math.min(5, weatherV.length));
         nativeexm += shootyesgoalZ.length >> (Math.min(Math.abs(3), 5));
       let videoo = 3.0;
      for (let i = 0; i < 1; i++) {
         weatherV += `${(String.fromCharCode(86,0) == shootyesgoalZ ? shootyesgoalZ.length : parseInt(`${videoo}`))}`;
      }
      matchH += resultP.length | 1;
       let bannerw = 3.0;
       let combineZ = 2.0;
       let feedbackZ = 4.0;
      for (let n = 0; n < 1; n++) {
         bannerw *= parseFloat(`${parseInt(`${feedbackZ}`) - parseInt(`${bannerw}`)}`);
      }
      let subs3 = feedbackZ >= 7297112.0;
      do {
         feedbackZ += parseInt(`${combineZ}`) << (Math.min(4, Math.abs(1)));
         if (subs3) {
            break;
         }
      } while ((4.66 <= (bannerw / 4)) && subs3);
      while ((combineZ * bannerw) == 1.12) {
          let layouts = 2.0;
          let ksadv: Array<any> = [689, 168, 604];
          let baiduJ = String.fromCharCode(102,111,114,109,115,104,101,101,116,95,117,95,57,54,0);
         bannerw /= Math.max(4, parseFloat(`${parseInt(`${layouts}`) / 3}`));
         layouts *= baiduJ.length;
         ksadv.push(ksadv.length);
         baiduJ += `${ksadv.length}`;
         break;
      }
          let indicatoro = 4;
         combineZ -= 1 / (Math.max(6, indicatoro));
       let iconsaveimageb: Array<any> = [797, 825, 354];
       let i_centern: Array<any> = [String.fromCharCode(102,97,100,101,111,117,116,95,112,95,56,55,0), String.fromCharCode(100,118,98,115,117,98,95,113,95,55,51,0)];
         iconsaveimageb = [parseInt(`${combineZ}`) & i_centern.length];
      while ((4 << (Math.min(1, i_centern.length))) == 5 && (4 ^ i_centern.length) == 3) {
          let pausev = true;
          let flyerf = 0;
          let countryc = String.fromCharCode(108,95,56,57,95,112,114,101,99,104,101,99,107,111,117,116,0);
          let profileh = String.fromCharCode(115,121,110,116,104,101,115,105,122,101,114,95,106,95,54,52,0);
          let gmailT = 3;
         i_centern = [flyerf % (Math.max(10, countryc.length))];
         pausev = profileh.length < gmailT;
         flyerf ^= 2;
         countryc += `${3 << (Math.min(3, profileh.length))}`;
         gmailT %= Math.max(gmailT % 3, 2);
         break;
      }
      for (let l = 0; l < 2; l++) {
         bannerw *= parseFloat(`${i_centern.length - 1}`);
      }
          let penaltygoalK = 5.0;
          let leftH = 3.0;
          let currentb: Array<any> = [149, 890, 298];
         combineZ *= 1;
         penaltygoalK *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${penaltygoalK}`)), 1))}`);
         leftH -= 1;
         currentb.push(2 >> (Math.min(Math.abs(parseInt(`${penaltygoalK}`)), 4)));
      header8 %= Math.max(updatesf % 3, 1);
      listz.set(`${header8}`, header8);

    setIsVersionDialogOpen(!isVersionDialogOpen);
  };
  const toggleClearDialog = () => {
       let drag3 = String.fromCharCode(117,95,53,57,95,117,117,105,100,117,115,109,116,0);
    let settingY = String.fromCharCode(109,118,99,111,110,116,101,120,116,115,95,97,95,57,56,0);
    let i_title6: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,114,97,116,111,114,95,114,95,56,51,0),String.fromCharCode(108,97,115,114,95,116,95,51,50,0)], [String.fromCharCode(102,95,51,57,95,109,112,116,111,97,110,110,101,120,98,0),String.fromCharCode(109,105,99,95,111,95,53,53,0)], [String.fromCharCode(109,95,49,57,95,112,105,110,110,101,100,0),String.fromCharCode(113,95,53,48,95,110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,0)]]);
    let goaly = String.fromCharCode(108,115,112,102,95,121,95,51,53,0);
    let arear = String.fromCharCode(116,101,115,116,114,97,110,115,95,51,95,51,50,0);
    let reactnativejsx = String.fromCharCode(118,95,57,54,95,115,101,108,101,99,116,0);
    let canvasc = 2.0;
    let greenx = String.fromCharCode(101,95,55,51,0);
    let indexE: Map<any, any> = new Map([[String.fromCharCode(100,101,114,101,103,105,115,116,101,114,95,57,95,57,55,0),String.fromCharCode(99,95,54,53,95,102,111,114,109,97,110,116,0)], [String.fromCharCode(104,97,115,104,116,97,103,95,111,95,56,53,0),String.fromCharCode(108,95,51,51,95,97,117,116,111,100,101,116,101,99,116,0)]]);
    let thailandX = false;
    let volume6: Array<any> = [520, 801, 15];
    let foundl = 3;
   for (let q = 0; q < 3; q++) {
      indexE = new Map([[`${indexE.size}`, settingY.length - indexE.size]]);
   }
   while ((reactnativejsx.length % 1) > 1 && 4 > (1 | reactnativejsx.length)) {
      canvasc /= Math.max(3, (parseFloat(`${goaly == String.fromCharCode(70,0) ? settingY.length : goaly.length}`)));
      break;
   }
      i_title6.set(arear, arear.length);
   for (let i = 0; i < 2; i++) {
      greenx = "3";
   }
       let bgvipxvodG = 4.0;
         bgvipxvodG *= parseFloat(`${parseInt(`${bgvipxvodG}`)}`);
      if (3.71 > (bgvipxvodG + bgvipxvodG) && (bgvipxvodG + 3.71) > 4.63) {
          let downloaderS = 0.0;
          let moviesB = String.fromCharCode(107,95,51,95,118,105,115,105,98,105,108,105,116,105,116,101,115,0);
          let valuesB = String.fromCharCode(112,95,55,54,95,109,101,109,0);
         bgvipxvodG -= parseFloat(`${parseInt(`${bgvipxvodG}`) << (Math.min(moviesB.length, 2))}`);
         downloaderS /= Math.max((valuesB == String.fromCharCode(69,0) ? parseInt(`${downloaderS}`) : valuesB.length), 5);
         moviesB = `${(valuesB == String.fromCharCode(90,0) ? parseInt(`${downloaderS}`) : valuesB.length)}`;
      }
       let brightness9 = String.fromCharCode(115,95,55,49,95,98,108,111,99,107,115,99,97,110,0);
      drag3 += `${indexE.size | i_title6.size}`;
       let heartg = String.fromCharCode(101,95,57,57,95,100,105,115,115,105,109,0);
       let backgroundk = String.fromCharCode(98,99,104,101,99,107,95,103,95,49,51,0);
         backgroundk = `${1 << (Math.min(2, heartg.length))}`;
         backgroundk += `${heartg.length}`;
          let h_hashz = true;
          let libreactnativejniN: Map<any, any> = new Map([[String.fromCharCode(111,95,52,54,95,115,117,98,106,0),951], [String.fromCharCode(119,95,50,53,95,116,111,110,0),533], [String.fromCharCode(114,111,116,111,95,108,95,51,48,0),254]]);
          let applicationx = String.fromCharCode(103,108,111,98,97,108,115,95,122,95,49,48,48,0);
         backgroundk += "2";
         h_hashz = applicationx == String.fromCharCode(77,0);
         libreactnativejniN = new Map([[`${libreactnativejniN.size}`, (libreactnativejniN.size >> (Math.min(4, Math.abs((h_hashz ? 4 : 3)))))]]);
         applicationx += `${libreactnativejniN.size}`;
       let gifte = 5.0;
         backgroundk = `${heartg.length * 1}`;
      while (heartg != backgroundk) {
         backgroundk += "3";
         break;
      }
      greenx += "2";
      settingY = "1";
      canvasc /= Math.max(parseFloat(`${goaly.length + arear.length}`), 3);
      reactnativejsx = `${(3 & (thailandX ? 2 : 4))}`;
   while ((indexE.size / (Math.max(drag3.length, 6))) > 3) {
       let formK = 3;
          let components8 = String.fromCharCode(105,115,116,111,103,114,97,109,95,114,95,56,54,0);
          let librrcL: Map<any, any> = new Map([[String.fromCharCode(115,117,98,99,111,101,102,115,95,120,95,49,0),453], [String.fromCharCode(101,120,116,101,114,110,97,108,108,121,95,53,95,50,50,0),638]]);
         formK /= Math.max(3, formK + librrcL.size);
         components8 = `${(components8 == String.fromCharCode(78,0) ? components8.length : components8.length)}`;
         librrcL.set(components8, components8.length * 1);
      for (let b = 0; b < 3; b++) {
          let shootv: Array<any> = [747, 251, 59];
          let side9: Map<any, any> = new Map([[String.fromCharCode(106,95,51,54,95,119,97,115,116,101,100,0),false ], [String.fromCharCode(115,109,105,108,101,95,111,95,52,53,0),false ]]);
          let heji1 = String.fromCharCode(122,95,56,57,95,97,100,103,114,111,117,112,0);
          let currentx: Array<any> = [575, 998, 806];
         formK /= Math.max((String.fromCharCode(65,0) == heji1 ? heji1.length : currentx.length), 3);
         shootv = [2];
         side9.set(`${shootv.length}`, shootv.length + side9.size);
         currentx = [side9.size | shootv.length];
      }
      while (4 < formK) {
         formK *= 3 * formK;
         break;
      }
      indexE.set(`${thailandX}`, 1 | i_title6.size);
      break;
   }
   for (let z = 0; z < 2; z++) {
      goaly = `${greenx.length}`;
   }
   while (thailandX) {
      goaly += `${goaly.length}`;
      break;
   }
      arear = `${parseInt(`${canvasc}`)}`;
   if (2 > settingY.length) {
       let manifestC = String.fromCharCode(108,105,98,120,118,105,100,95,101,95,49,51,0);
       let points = false;
       let plashL = String.fromCharCode(113,95,52,51,95,115,117,98,102,114,97,109,101,115,0);
          let predictionactiveX: Map<any, any> = new Map([[String.fromCharCode(116,101,120,116,97,116,116,114,95,118,95,53,56,0),String.fromCharCode(110,95,51,54,95,114,101,115,111,108,118,101,114,115,0)], [String.fromCharCode(99,95,57,95,116,98,108,101,110,100,0),String.fromCharCode(97,100,109,105,110,101,100,95,98,95,52,53,0)]]);
          let nativemoduleL = 3.0;
         manifestC = `${predictionactiveX.size / 3}`;
         predictionactiveX = new Map([[`${nativemoduleL}`, parseInt(`${nativemoduleL}`) / 2]]);
       let short_f8H = true;
      for (let c = 0; c < 3; c++) {
         plashL += `${2 - manifestC.length}`;
      }
      while (!plashL.startsWith(`${short_f8H}`)) {
         short_f8H = plashL.length >= 41;
         break;
      }
      if (!manifestC.startsWith(`${plashL.length}`)) {
         manifestC += "1";
      }
          let controln: Array<any> = [String.fromCharCode(97,95,57,53,95,114,102,112,115,0), String.fromCharCode(105,95,56,48,95,99,114,101,97,116,105,111,110,0), String.fromCharCode(99,95,51,95,115,116,97,114,0)];
          let inactiveQ = 3.0;
          let orangee = false;
         short_f8H = !orangee && short_f8H;
         controln.push(controln.length - 3);
         inactiveQ -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${inactiveQ}`)), 2))}`);
         orangee = 20.48 == inactiveQ;
          let redgoala = String.fromCharCode(114,101,103,105,115,116,101,114,101,114,95,51,95,51,56,0);
          let tumbnailv = 3;
          let filterx: Array<any> = [533, 58];
         manifestC += `${tumbnailv}`;
         redgoala += "2";
         tumbnailv <<= Math.min(Math.abs((String.fromCharCode(83,0) == redgoala ? filterx.length : redgoala.length)), 3);
         filterx = [redgoala.length ^ filterx.length];
         points = (89 > ((points ? 89 : plashL.length) ^ plashL.length));
      if (1 < plashL.length && !short_f8H) {
          let notificationfillemptyM: Map<any, any> = new Map([[String.fromCharCode(97,95,54,53,0),String.fromCharCode(100,101,113,117,97,110,116,105,122,101,95,117,95,57,54,0)], [String.fromCharCode(106,95,57,54,95,114,103,98,116,101,115,116,0),String.fromCharCode(99,95,55,51,95,97,118,111,105,100,0)], [String.fromCharCode(116,104,114,111,117,103,104,112,117,116,95,56,95,50,48,0),String.fromCharCode(102,108,101,120,105,98,108,101,95,116,95,53,51,0)]]);
          let singlez: Map<any, any> = new Map([[String.fromCharCode(115,119,105,102,116,121,95,111,95,54,50,0),759], [String.fromCharCode(121,95,56,95,110,97,109,101,115,101,114,118,101,114,115,0),725], [String.fromCharCode(118,114,97,115,116,101,114,95,97,95,52,57,0),147]]);
          let whistleorangew: Array<any> = [572, 706];
         plashL += "1";
         notificationfillemptyM = new Map([[`${singlez.size}`, 1]]);
         singlez = new Map([[`${notificationfillemptyM.size}`, whistleorangew.length]]);
         whistleorangew = [notificationfillemptyM.size];
      }
      goaly += `${(String.fromCharCode(108,0) == reactnativejsx ? parseInt(`${canvasc}`) : reactnativejsx.length)}`;
   }
       let headerj = 2.0;
       let iconplayY = String.fromCharCode(119,95,56,51,95,112,105,110,115,0);
      while (5 == iconplayY.length) {
          let ewardedl = 3;
          let popupg = 4.0;
          let emptyX = String.fromCharCode(119,95,54,57,95,100,101,112,115,0);
          let libfbjniE = String.fromCharCode(122,95,53,95,118,105,111,108,101,116,0);
         iconplayY += `${parseInt(`${headerj}`)}`;
         ewardedl >>= Math.min(libfbjniE.length, 3);
         popupg -= ewardedl ^ parseInt(`${popupg}`);
         emptyX = `${emptyX.length % (Math.max(6, libfbjniE.length))}`;
         break;
      }
      if (1 > (iconplayY.length % 4)) {
          let mbjscommonq: Map<any, any> = new Map([[String.fromCharCode(102,95,55,54,0),700], [String.fromCharCode(122,95,51,54,95,100,98,115,105,122,101,0),323]]);
          let shielddoneS = true;
         headerj += parseFloat(`${iconplayY.length}`);
         mbjscommonq.set(`${mbjscommonq.size}`, mbjscommonq.size | mbjscommonq.size);
         shielddoneS = mbjscommonq.size < mbjscommonq.size;
      }
      let tail3 = iconplayY == String.fromCharCode(122,52,55,51,0);
      do {
          let redgoalR = String.fromCharCode(116,95,56,52,95,112,114,122,112,0);
          let cancelt = 2.0;
         iconplayY = `${iconplayY.length * parseInt(`${cancelt}`)}`;
         redgoalR = `${redgoalR.length}`;
         cancelt *= (parseFloat(`${String.fromCharCode(87,0) == redgoalR ? redgoalR.length : redgoalR.length}`));
         if (tail3) {
            break;
         }
      } while ((parseInt(`${headerj}`) > iconplayY.length) && tail3);
       let disconnectedy = 0;
      while (2 >= iconplayY.length) {
          let policy6 = String.fromCharCode(99,111,108,117,109,110,95,120,95,57,50,0);
          let privatechatbg1 = String.fromCharCode(121,95,50,95,108,105,98,109,0);
          let baseI: Array<any> = [889, 534, 627];
          let close0 = 4.0;
         iconplayY = `${parseInt(`${close0}`)}`;
         policy6 += `${policy6.length}`;
         privatechatbg1 = `${privatechatbg1.length + 1}`;
         baseI = [(String.fromCharCode(90,0) == policy6 ? policy6.length : baseI.length)];
         close0 /= Math.max(2, 3);
         break;
      }
         headerj += (parseFloat(`${iconplayY == String.fromCharCode(120,0) ? iconplayY.length : parseInt(`${headerj}`)}`));
      i_title6.set(`${thailandX}`, ((thailandX ? 4 : 2) - parseInt(`${headerj}`)));
      goaly = `${((thailandX ? 3 : 2) | 2)}`;
      volume6.push(volume6.length);
   if (thailandX) {
      goaly = `${drag3.length % (Math.max(reactnativejsx.length, 10))}`;
   }
   for (let t = 0; t < 3; t++) {
      greenx = `${settingY.length + 2}`;
   }
   for (let s = 0; s < 1; s++) {
       let greytickC = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,95,114,95,52,52,0);
       let iconuser8 = 4.0;
       let bannern = String.fromCharCode(109,101,109,98,101,114,115,104,105,112,95,107,95,49,48,0);
       let libreactperfloggerjnii = 1.0;
       let unimplementedviewV = 5.0;
       let user4: Map<any, any> = new Map([[String.fromCharCode(111,102,102,101,114,101,100,95,102,95,56,53,0),319], [String.fromCharCode(103,95,57,48,95,104,121,112,104,101,110,97,116,101,100,0),291], [String.fromCharCode(121,95,50,53,95,119,104,105,116,101,98,108,97,99,107,108,105,115,116,115,0),342]]);
      for (let x = 0; x < 3; x++) {
         libreactperfloggerjnii *= 2;
      }
         greytickC = `${parseInt(`${iconuser8}`)}`;
          let suggestionl = String.fromCharCode(98,95,54,50,95,115,97,119,0);
          let promotionf: Array<any> = [454, 247];
          let singler = String.fromCharCode(114,101,110,100,101,114,98,117,102,102,101,114,95,103,95,57,52,0);
         user4.set(`${bannern}`, 2);
         suggestionl += `${suggestionl.length / (Math.max(2, 3))}`;
         promotionf.push(promotionf.length / (Math.max(9, singler.length)));
         singler += "1";
      for (let e = 0; e < 2; e++) {
          let long_1tu: Map<any, any> = new Map([[String.fromCharCode(99,117,114,118,101,95,50,95,50,53,0),false ], [String.fromCharCode(111,95,49,51,95,115,97,118,101,112,111,105,110,116,0),true ]]);
          let crossT = String.fromCharCode(116,95,53,54,95,105,110,99,114,0);
          let mapbufferp: Map<any, any> = new Map([[String.fromCharCode(117,110,112,97,99,107,95,100,95,57,53,0),666], [String.fromCharCode(97,95,50,51,95,98,105,110,116,101,120,116,0),595], [String.fromCharCode(115,95,54,57,95,102,114,97,103,109,101,110,116,0),178]]);
         greytickC = `${2 >> (Math.min(4, Math.abs(long_1tu.size)))}`;
         long_1tu.set(crossT, mapbufferp.size % (Math.max(3, crossT.length)));
         mapbufferp.set(crossT, 2);
      }
         unimplementedviewV -= parseInt(`${unimplementedviewV}`) >> (Math.min(Math.abs(2), 3));
      let becomeP = user4.size <= 6929246;
      do {
         user4.set(`${unimplementedviewV}`, user4.size >> (Math.min(Math.abs(2), 4)));
         if (becomeP) {
            break;
         }
      } while (becomeP && (5.45 > (unimplementedviewV + 3.53)));
      let application6 = greytickC == String.fromCharCode(122,99,116,53,120,117,50,107,104,114,0);
      do {
         greytickC = `${parseInt(`${unimplementedviewV}`) >> (Math.min(4, Math.abs(1)))}`;
         if (application6) {
            break;
         }
      } while (application6 && (4 >= (user4.size ^ greytickC.length) && (4 ^ user4.size) >= 1));
          let expandA: Array<any> = [900, 176];
          let huaweir = String.fromCharCode(114,101,118,101,114,115,101,100,95,102,95,57,53,0);
          let attributedstringf: Map<any, any> = new Map([[String.fromCharCode(110,95,57,56,95,99,111,108,120,0),String.fromCharCode(112,97,105,110,116,95,49,95,51,49,0)], [String.fromCharCode(108,105,107,101,108,121,95,105,95,51,57,0),String.fromCharCode(99,95,57,52,95,97,121,98,114,0)]]);
         unimplementedviewV -= attributedstringf.size;
         expandA = [(String.fromCharCode(69,0) == huaweir ? expandA.length : huaweir.length)];
         attributedstringf = new Map([[`${expandA.length}`, expandA.length]]);
          let graph2: Map<any, any> = new Map([[String.fromCharCode(107,95,54,52,95,116,111,107,101,110,105,122,101,114,0),String.fromCharCode(101,95,57,95,114,101,97,100,0)], [String.fromCharCode(108,95,55,51,95,109,111,100,117,108,101,0),String.fromCharCode(109,97,116,104,95,55,95,50,49,0)], [String.fromCharCode(97,95,53,55,95,112,97,117,115,101,100,0),String.fromCharCode(98,97,116,99,104,95,114,95,54,55,0)]]);
          let type_6ze: Array<any> = [String.fromCharCode(114,97,109,112,95,100,95,53,57,0), String.fromCharCode(109,97,116,99,104,101,100,95,56,95,56,50,0), String.fromCharCode(103,95,51,52,95,108,115,112,112,111,108,121,102,0)];
         iconuser8 -= greytickC.length;
         graph2 = new Map([[`${graph2.size}`, type_6ze.length / (Math.max(2, 7))]]);
         type_6ze = [graph2.size];
      if (1.20 <= (5 - libreactperfloggerjnii)) {
          let libruntimeexecutorj: Array<any> = [String.fromCharCode(112,95,57,53,95,103,101,116,114,97,110,100,111,109,0), String.fromCharCode(108,111,111,112,98,114,101,97,107,95,109,95,54,52,0), String.fromCharCode(115,99,104,101,100,117,108,101,100,95,112,95,56,57,0)];
          let diceK = false;
          let detailsG = true;
         iconuser8 *= (String.fromCharCode(100,0) == bannern ? bannern.length : parseInt(`${libreactperfloggerjnii}`));
         libruntimeexecutorj = [(2 ^ (detailsG ? 3 : 5))];
         diceK = (!detailsG ? diceK : !detailsG);
      }
      let textlayoutmanagerX = greytickC == String.fromCharCode(54,114,112,99,117,104,112,0);
      do {
          let animation0 = true;
          let recommendationk = String.fromCharCode(115,117,98,116,97,115,107,95,112,95,54,56,0);
          let actionsR = String.fromCharCode(121,95,52,54,95,109,103,109,116,0);
         greytickC = `${greytickC.length}`;
         animation0 = recommendationk.length <= 59;
         recommendationk += `${(actionsR.length & (animation0 ? 2 : 5))}`;
         actionsR += `${1 >> (Math.min(2, recommendationk.length))}`;
         if (textlayoutmanagerX) {
            break;
         }
      } while (textlayoutmanagerX && (5.39 > unimplementedviewV));
      if (1.56 == iconuser8) {
         iconuser8 -= 2;
      }
      for (let b = 0; b < 2; b++) {
          let bootn = String.fromCharCode(97,99,107,95,114,95,51,57,0);
         unimplementedviewV -= (bootn == String.fromCharCode(102,0) ? bootn.length : user4.size);
      }
       let regeng0 = 3.0;
       let dice3 = 4.0;
      goaly += `${(arear == String.fromCharCode(113,0) ? arear.length : reactnativejsx.length)}`;
   }
       let largeY = String.fromCharCode(110,95,54,49,95,109,115,117,98,0);
       let cancel8 = String.fromCharCode(114,101,118,101,114,98,95,50,95,57,48,0);
       let smallf: Array<any> = [String.fromCharCode(116,95,51,95,115,116,114,101,101,116,0), String.fromCharCode(115,95,56,51,95,99,111,110,118,101,114,115,105,111,110,115,0), String.fromCharCode(101,114,97,115,101,95,101,95,56,54,0)];
      let largebrightnessj = smallf.length >= 8820419;
      do {
          let bridgel = String.fromCharCode(114,101,99,104,101,99,107,95,120,95,50,50,0);
          let circleJ = 2.0;
          let twittera = String.fromCharCode(114,95,57,48,95,99,111,108,108,97,112,115,101,0);
          let awayn: Map<any, any> = new Map([[String.fromCharCode(113,95,49,57,95,112,111,105,110,116,101,114,0),924], [String.fromCharCode(97,99,99,101,115,115,111,114,121,95,103,95,56,56,0),707], [String.fromCharCode(98,95,52,56,95,97,112,112,114,101,99,105,97,116,101,100,104,0),355]]);
          let foundo: Array<any> = [731, 482, 27];
         smallf.push(bridgel.length);
         bridgel += `${awayn.size % (Math.max(twittera.length, 9))}`;
         circleJ -= parseFloat(`${1 | twittera.length}`);
         awayn = new Map([[`${foundo.length}`, foundo.length | 1]]);
         if (largebrightnessj) {
            break;
         }
      } while (largebrightnessj && (2 < (5 >> (Math.min(5, smallf.length))) || 5 < (cancel8.length >> (Math.min(5, smallf.length)))));
       let iconsharea = 1.0;
       let filterK = 5.0;
      let sell2 = iconsharea <= 8711138.0;
      do {
         iconsharea -= 3 % (Math.max(5, cancel8.length));
         if (sell2) {
            break;
         }
      } while (sell2 && ((largeY.length | 3) > 2 || (4.49 / (Math.max(3, iconsharea))) > 4.63));
      let vignette8 = cancel8 == String.fromCharCode(121,98,113,0);
      do {
         cancel8 += `${parseInt(`${iconsharea}`) >> (Math.min(4, Math.abs(3)))}`;
         if (vignette8) {
            break;
         }
      } while (vignette8 && (largeY != String.fromCharCode(83,0)));
      while (filterK > 2.53) {
         iconsharea -= parseInt(`${iconsharea}`);
         break;
      }
      if (cancel8.endsWith(`${filterK}`)) {
         cancel8 += `${parseInt(`${iconsharea}`) >> (Math.min(Math.abs(parseInt(`${filterK}`)), 4))}`;
      }
      for (let n = 0; n < 3; n++) {
         filterK += 2;
      }
          let slider6 = true;
          let libfollyt: Map<any, any> = new Map([[String.fromCharCode(115,111,117,114,99,101,95,107,95,56,51,0),false ], [String.fromCharCode(100,95,49,56,95,118,105,115,105,98,108,101,0),false ], [String.fromCharCode(101,110,99,114,121,112,116,95,102,95,49,48,48,0),true ]]);
         largeY += `${smallf.length}`;
         slider6 = (48 >= ((slider6 ? 48 : libfollyt.size) * libfollyt.size));
         smallf.push(largeY.length);
      greenx += `${settingY.length}`;

    setIsClearDialogOpen(!isClearDialogOpen);
  };
  const toggleRemoveAccountDialog = () => {
       let basketballhometeam9 = 3;
    let watchq = String.fromCharCode(114,97,110,100,111,109,110,101,115,115,95,116,95,54,50,0);
    let filedR = String.fromCharCode(98,95,56,48,95,100,105,115,97,98,108,101,114,0);
    let middlewareL: Array<any> = [519, 175];
    let hongkong9 = String.fromCharCode(113,95,49,95,99,97,116,99,104,0);
    let hooks7 = 2;
    let runtimeschedulere = 2;
   let listR = runtimeschedulere >= 5247543;
   do {
       let reado: Array<any> = [777, 696];
       let libreactK = 5;
       let favoritey = String.fromCharCode(111,116,104,95,121,95,56,48,0);
      if (!favoritey.startsWith(`${libreactK}`)) {
         favoritey += "3";
      }
      let profileA = 5229982 >= libreactK;
      do {
         libreactK += libreactK;
         if (profileA) {
            break;
         }
      } while (profileA && (favoritey.startsWith(`${libreactK}`)));
       let kuaishouq = String.fromCharCode(99,95,50,56,95,115,105,122,101,98,105,116,114,97,116,101,0);
      for (let v = 0; v < 2; v++) {
         libreactK += favoritey.length;
      }
      if (favoritey.startsWith(`${libreactK}`)) {
         libreactK += 2;
      }
      let ewardedD = 5646001 <= favoritey.length;
      do {
         favoritey = "1";
         if (ewardedD) {
            break;
         }
      } while ((2 == (favoritey.length | 4)) && ewardedD);
          let acceptedW = String.fromCharCode(105,100,102,97,95,117,95,50,0);
          let boot4 = 1.0;
         reado = [2];
         acceptedW = `${2 & parseInt(`${boot4}`)}`;
         boot4 /= Math.max(parseFloat(`${parseInt(`${boot4}`) ^ acceptedW.length}`), 5);
       let disconnectedlogoD = 0;
      let linkC = String.fromCharCode(113,103,56,102,0) == kuaishouq;
      do {
          let libavutil0: Map<any, any> = new Map([[String.fromCharCode(102,95,57,54,95,102,105,110,103,101,114,115,0),String.fromCharCode(120,95,51,50,95,112,97,105,110,116,105,110,103,0)], [String.fromCharCode(112,111,115,116,98,111,120,95,98,95,57,52,0),String.fromCharCode(109,105,120,95,109,95,56,48,0)], [String.fromCharCode(98,101,115,115,101,108,95,50,95,53,53,0),String.fromCharCode(102,117,110,103,105,98,108,101,115,95,118,95,53,51,0)]]);
          let predictionarrowU = 0.0;
         kuaishouq += `${favoritey.length}`;
         libavutil0 = new Map([[`${libavutil0.size}`, libavutil0.size + 3]]);
         predictionarrowU *= 2;
         if (linkC) {
            break;
         }
      } while (linkC && (3 < kuaishouq.length || favoritey != String.fromCharCode(66,0)));
      runtimeschedulere /= Math.max(5, runtimeschedulere / (Math.max(2, 9)));
      if (listR) {
         break;
      }
   } while (listR && (4 >= (runtimeschedulere + 2) && 5 >= (2 + filedR.length)));
      runtimeschedulere <<= Math.min(5, Math.abs(2));
   let sharemodalu = runtimeschedulere <= 7758608;
   do {
      runtimeschedulere <<= Math.min(4, Math.abs((String.fromCharCode(67,0) == filedR ? watchq.length : filedR.length)));
      if (sharemodalu) {
         break;
      }
   } while (sharemodalu && (filedR.length >= runtimeschedulere));
       let redirects = String.fromCharCode(115,101,114,105,102,95,118,95,49,56,0);
       let incidentq = 2.0;
      for (let c = 0; c < 1; c++) {
         incidentq -= redirects.length * parseInt(`${incidentq}`);
      }
          let referrer5 = String.fromCharCode(97,95,57,56,95,117,108,112,105,110,102,111,0);
          let serviceK = 0.0;
          let paginationX = 4;
         redirects += `${parseInt(`${incidentq}`)}`;
         referrer5 += "3";
         serviceK += parseFloat(`${parseInt(`${serviceK}`) / (Math.max(2, paginationX))}`);
         paginationX ^= paginationX ^ referrer5.length;
      if (2.73 < (4.42 / (Math.max(8, incidentq)))) {
         incidentq *= parseInt(`${incidentq}`) >> (Math.min(Math.abs(2), 3));
      }
          let filterR = 3.0;
          let macaul = String.fromCharCode(97,112,105,99,95,103,95,49,55,0);
          let grayx = 0.0;
         redirects = `${parseInt(`${grayx}`)}`;
         filterR /= Math.max(macaul.length, 3);
         macaul = `${(macaul == String.fromCharCode(107,0) ? macaul.length : parseInt(`${filterR}`))}`;
      for (let r = 0; r < 1; r++) {
         redirects += `${redirects.length}`;
      }
         incidentq *= redirects.length | 2;
      watchq = `${redirects.length * parseInt(`${incidentq}`)}`;
   let static_vU = 8135471 >= hooks7;
   do {
      hooks7 >>= Math.min(Math.abs(3), 3);
      if (static_vU) {
         break;
      }
   } while (static_vU && (5 > hongkong9.length));
   if (3 <= (1 & hooks7) || (1 & hongkong9.length) <= 2) {
       let klevinT: Map<any, any> = new Map([[String.fromCharCode(122,95,55,56,95,117,105,111,116,111,109,98,117,102,0),String.fromCharCode(115,116,111,112,95,117,95,56,0)], [String.fromCharCode(109,111,100,105,102,121,95,119,95,53,55,0),String.fromCharCode(100,111,119,110,108,111,97,100,95,108,95,53,52,0)]]);
       let minimizes = false;
       let materialJ = true;
      while (!minimizes || materialJ) {
          let appsX: Array<any> = [781, 352];
         materialJ = appsX.length < 79;
         break;
      }
         klevinT = new Map([[`${klevinT.size}`, klevinT.size ^ 1]]);
      hongkong9 = `${(watchq == String.fromCharCode(121,0) ? watchq.length : runtimeschedulere)}`;
   }
       let tempnodatagifA: Map<any, any> = new Map([[String.fromCharCode(106,95,50,48,95,112,99,98,105,110,102,111,0),867], [String.fromCharCode(114,95,53,53,95,114,101,109,111,118,101,0),65], [String.fromCharCode(105,110,102,105,110,105,116,101,95,104,95,56,0),838]]);
      while ((tempnodatagifA.size + 1) >= 4 || 5 >= (tempnodatagifA.size + 1)) {
         tempnodatagifA = new Map([[`${tempnodatagifA.size}`, tempnodatagifA.size | tempnodatagifA.size]]);
         break;
      }
      while (Array.from(tempnodatagifA.keys()).includes(`${tempnodatagifA.size}`)) {
         tempnodatagifA = new Map([[`${tempnodatagifA.size}`, 3 << (Math.min(4, Math.abs(tempnodatagifA.size)))]]);
         break;
      }
       let libruntimeexecutorn = 2.0;
      hooks7 *= 1;
       let feedbackZ: Map<any, any> = new Map([[String.fromCharCode(112,95,51,57,95,97,108,112,97,0),310], [String.fromCharCode(121,95,54,50,95,112,114,111,98,105,110,103,0),949]]);
         feedbackZ.set(`${feedbackZ.size}`, feedbackZ.size);
       let bottomI = 3.0;
         feedbackZ = new Map([[`${feedbackZ.size}`, feedbackZ.size & parseInt(`${bottomI}`)]]);
      middlewareL.push(basketballhometeam9 / (Math.max(feedbackZ.size, 10)));
       let sentry5: Array<any> = [168, 823, 259];
       let disconnectedG: Array<any> = [592, 389, 10];
       let neonw = 4.0;
         neonw /= Math.max(1, sentry5.length & disconnectedG.length);
      let textk = 6145591 <= disconnectedG.length;
      do {
         disconnectedG.push(disconnectedG.length % 2);
         if (textk) {
            break;
         }
      } while ((disconnectedG.length == sentry5.length) && textk);
         disconnectedG.push(sentry5.length);
      if (disconnectedG.length == 3) {
         neonw *= 3 ^ sentry5.length;
      }
         neonw += 3 - disconnectedG.length;
          let mbbidP = false;
         neonw += parseInt(`${neonw}`) << (Math.min(1, Math.abs(2)));
         mbbidP = (mbbidP ? !mbbidP : !mbbidP);
         disconnectedG.push(1 | sentry5.length);
         neonw += disconnectedG.length >> (Math.min(sentry5.length, 2));
          let roundz: Array<any> = [String.fromCharCode(108,105,98,111,112,101,110,106,112,101,103,95,114,95,52,49,0), String.fromCharCode(109,95,52,53,95,112,114,101,115,101,110,116,97,116,105,111,110,0), String.fromCharCode(100,119,97,114,102,95,101,95,55,48,0)];
          let rncoret = String.fromCharCode(101,121,99,104,97,105,110,95,52,95,57,53,0);
          let iconsaveimageH = true;
         disconnectedG.push(((iconsaveimageH ? 4 : 5) >> (Math.min(disconnectedG.length, 2))));
         roundz = [2];
         rncoret = `${2 + roundz.length}`;
         iconsaveimageH = String.fromCharCode(111,0) == rncoret && roundz.length == 84;
      hongkong9 += `${runtimeschedulere ^ 2}`;
   let bgvipxvodt = basketballhometeam9 <= 7468779;
   do {
      basketballhometeam9 %= Math.max(3, filedR.length);
      if (bgvipxvodt) {
         break;
      }
   } while (bgvipxvodt && (hongkong9.endsWith(`${basketballhometeam9}`)));
   let descP = filedR.length <= 6238769;
   do {
      filedR += `${3 >> (Math.min(5, Math.abs(runtimeschedulere)))}`;
      if (descP) {
         break;
      }
   } while (descP && (hooks7 > filedR.length));
   while (2 >= filedR.length) {
      watchq += `${hooks7}`;
      break;
   }
      watchq = `${(watchq == String.fromCharCode(74,0) ? watchq.length : hooks7)}`;
      filedR = "3";
   let reactnavigationW = 6193019 >= filedR.length;
   do {
      filedR = `${runtimeschedulere}`;
      if (reactnavigationW) {
         break;
      }
   } while (reactnavigationW && (4 < (middlewareL.length % (Math.max(5, filedR.length)))));
      middlewareL = [filedR.length - 3];
   while (2 == (1 | filedR.length) && 2 == (runtimeschedulere | 1)) {
       let greyarrowupn = String.fromCharCode(97,95,55,53,95,119,101,98,114,116,99,0);
       let reminder9 = false;
       let libreact9 = 3.0;
      if (reminder9 || (3.2 / (Math.max(3, libreact9))) < 1.65) {
         libreact9 /= Math.max((parseFloat(`${(reminder9 ? 2 : 3) << (Math.min(Math.abs(parseInt(`${libreact9}`)), 4))}`)), 2);
      }
         greyarrowupn = "1";
          let questiconJ = String.fromCharCode(102,95,54,48,95,109,117,108,116,105,112,108,121,0);
          let bridgek = 2.0;
          let singleA: Array<any> = [527, 404, 388];
         greyarrowupn += `${2 ^ questiconJ.length}`;
         questiconJ = `${3 << (Math.min(2, singleA.length))}`;
         bridgek += parseFloat(`${parseInt(`${bridgek}`) << (Math.min(4, Math.abs(2)))}`);
         singleA = [singleA.length];
      while (!greyarrowupn.startsWith(`${reminder9}`)) {
         reminder9 = greyarrowupn.length >= 61;
         break;
      }
         libreact9 *= parseFloat(`${greyarrowupn.length}`);
      runtimeschedulere &= (String.fromCharCode(51,0) == greyarrowupn ? middlewareL.length : greyarrowupn.length);
      break;
   }
       let profileinactivea = String.fromCharCode(102,95,55,52,95,104,105,110,116,101,100,0);
       let googleB = String.fromCharCode(116,95,55,53,0);
       let placeholder5 = String.fromCharCode(108,111,110,103,101,114,95,121,95,56,54,0);
          let countdownx = true;
          let eighteen3: Map<any, any> = new Map([[String.fromCharCode(117,115,101,114,99,116,120,95,109,95,55,48,0),414], [String.fromCharCode(101,120,116,101,114,105,111,114,95,112,95,57,53,0),7], [String.fromCharCode(109,95,52,95,99,108,111,115,101,115,111,99,107,101,116,0),119]]);
          let yingq = 3.0;
         googleB += `${eighteen3.size >> (Math.min(profileinactivea.length, 1))}`;
         countdownx = 81.21 <= yingq;
         eighteen3.set(`${yingq}`, 3 * parseInt(`${yingq}`));
          let orangeclocki = String.fromCharCode(97,95,49,55,95,98,97,116,99,104,105,110,103,0);
         googleB = `${placeholder5.length * 2}`;
         orangeclocki = `${orangeclocki.length + 1}`;
      if (!googleB.startsWith(`${profileinactivea.length}`)) {
          let playlistJ = String.fromCharCode(97,117,116,111,100,101,116,101,99,116,111,114,95,50,95,55,53,0);
          let rank7 = String.fromCharCode(112,114,111,120,105,101,115,95,57,95,55,51,0);
          let renderg = String.fromCharCode(116,95,49,57,95,101,110,97,98,108,101,0);
         profileinactivea = "3";
         playlistJ = `${renderg.length & rank7.length}`;
         rank7 += `${playlistJ.length}`;
         renderg += `${1 >> (Math.min(5, renderg.length))}`;
      }
         googleB = "2";
      for (let w = 0; w < 2; w++) {
         profileinactivea += `${(profileinactivea == String.fromCharCode(50,0) ? profileinactivea.length : placeholder5.length)}`;
      }
         googleB = `${profileinactivea.length ^ googleB.length}`;
      let webviewJ = googleB.length >= 9706079;
      do {
         googleB = `${googleB.length}`;
         if (webviewJ) {
            break;
         }
      } while ((!profileinactivea.endsWith(googleB)) && webviewJ);
          let privatechatbgt = String.fromCharCode(98,95,49,53,95,115,105,122,101,115,0);
          let libyogay = String.fromCharCode(115,113,114,116,110,101,103,95,99,95,50,50,0);
         googleB = `${1 - placeholder5.length}`;
         privatechatbgt += `${privatechatbgt.length}`;
         libyogay = `${2 - privatechatbgt.length}`;
       let g_lockx: Map<any, any> = new Map([[String.fromCharCode(112,97,103,101,99,111,117,110,116,95,112,95,54,54,0),true ], [String.fromCharCode(100,95,50,57,95,106,111,105,110,101,100,0),false ], [String.fromCharCode(101,95,56,50,95,112,114,117,110,105,110,103,0),false ]]);
       let subbasketballplayero: Map<any, any> = new Map([[String.fromCharCode(110,119,105,115,101,95,109,95,50,55,0),951], [String.fromCharCode(110,95,49,57,95,99,111,110,110,101,99,116,101,100,0),129], [String.fromCharCode(100,101,116,101,114,109,105,110,101,95,57,95,57,54,0),915]]);
      hooks7 ^= profileinactivea.length;

    setIsRemoveDialogOpen(!isRemoveDialogOpen);
  }
  const onRemoveAccount = () => {
       let unselectedl: Array<any> = [388, 140];
    let vipsportU = String.fromCharCode(116,105,109,101,100,95,49,95,49,52,0);
    let navigationT = String.fromCharCode(106,95,51,56,95,114,101,112,0);
    let shrinkB: Map<any, any> = new Map([[String.fromCharCode(116,95,56,50,95,104,111,109,101,0),45], [String.fromCharCode(107,95,55,50,95,116,111,112,0),261]]);
    let pagei = String.fromCharCode(113,95,54,53,95,115,121,110,111,110,121,109,0);
    let subtextP = 0;
    let google9 = 0.0;
    let a_hashy: Map<any, any> = new Map([[String.fromCharCode(101,95,54,95,100,105,103,101,115,116,115,0),207], [String.fromCharCode(98,95,48,95,99,104,101,99,107,111,117,116,0),431], [String.fromCharCode(109,101,116,97,108,95,117,95,52,57,0),380]]);
    let vignetteQ = String.fromCharCode(109,95,57,95,97,99,99,101,115,115,105,98,105,108,105,116,121,0);
    let w_centere = 3.0;
    let ccopy_1g = String.fromCharCode(105,110,116,101,114,99,101,112,116,111,114,95,97,95,52,52,0);
    let moonh: Array<any> = [483, 618];
       let mbnativeadvancedE = String.fromCharCode(103,97,108,108,101,114,121,95,56,95,56,50,0);
       let themeZ = String.fromCharCode(109,95,50,95,116,114,117,115,116,0);
         mbnativeadvancedE = `${themeZ.length}`;
          let awayteamfieldI = false;
         themeZ = `${1 & themeZ.length}`;
         awayteamfieldI = !awayteamfieldI && !awayteamfieldI;
      google9 += parseFloat(`${parseInt(`${w_centere}`)}`);
   for (let c = 0; c < 1; c++) {
      a_hashy = new Map([[`${subtextP}`, 1 / (Math.max(10, navigationT.length))]]);
   }
   for (let z = 0; z < 2; z++) {
      pagei += `${vipsportU.length}`;
   }
      shrinkB = new Map([[`${unselectedl.length}`, unselectedl.length & 3]]);
   let largeK = 8204767 >= navigationT.length;
   do {
      navigationT += "3";
      if (largeK) {
         break;
      }
   } while (largeK && (navigationT.length == 5));
   for (let b = 0; b < 2; b++) {
      navigationT += `${3 - shrinkB.size}`;
   }
      navigationT = `${vipsportU.length}`;
   if (3 >= (vipsportU.length / (Math.max(4, 1))) && 1 >= (vipsportU.length / 4)) {
      unselectedl = [(String.fromCharCode(119,0) == vignetteQ ? vignetteQ.length : a_hashy.size)];
   }
   while (1 == (5 * navigationT.length) && (a_hashy.size * navigationT.length) == 5) {
      a_hashy = new Map([[`${a_hashy.size}`, a_hashy.size & vignetteQ.length]]);
      break;
   }
      w_centere *= ccopy_1g.length;
   let inactiveB = a_hashy.size >= 6398103;
   do {
      a_hashy.set(pagei, navigationT.length & pagei.length);
      if (inactiveB) {
         break;
      }
   } while (inactiveB && ((a_hashy.size + vignetteQ.length) <= 2 || (vignetteQ.length + a_hashy.size) <= 2));
      subtextP -= 2;

    setTimeout(() => {

       let tempnodatagifh = String.fromCharCode(98,95,53,51,95,115,116,97,109,112,115,0);
         tempnodatagifh += `${tempnodatagifh.length}`;
      if (tempnodatagifh == String.fromCharCode(71,0)) {
         tempnodatagifh = `${tempnodatagifh.length}`;
      }
         tempnodatagifh = `${(String.fromCharCode(55,0) == tempnodatagifh ? tempnodatagifh.length : tempnodatagifh.length)}`;
      a_hashy = new Map([[`${a_hashy.size}`, parseInt(`${w_centere}`) ^ 3]]);
      vipsportU += `${parseInt(`${w_centere}`) << (Math.min(unselectedl.length, 5))}`;
   for (let u = 0; u < 1; u++) {
      vipsportU = `${a_hashy.size}`;
   }
   if (ccopy_1g == String.fromCharCode(101,0)) {
       let formk = true;
       let sound_ = 5.0;
       let membership1 = 4.0;
       let default_hwp = String.fromCharCode(97,95,50,54,95,118,99,111,109,98,105,110,101,0);
       let cast_ = 4.0;
      if (4.53 > (membership1 - 2.16) || 5 > (2 & default_hwp.length)) {
         membership1 /= Math.max(4, parseInt(`${cast_}`));
      }
      for (let o = 0; o < 2; o++) {
          let anytimeN = String.fromCharCode(98,95,53,53,95,102,105,114,101,100,0);
          let cnewsE = String.fromCharCode(104,97,114,100,101,110,101,100,95,100,95,50,53,0);
         formk = anytimeN.length < default_hwp.length;
         anytimeN += `${cnewsE.length}`;
         cnewsE += `${cnewsE.length}`;
      }
       let bridge2 = String.fromCharCode(105,110,102,111,114,109,97,116,105,118,101,95,55,95,51,51,0);
         default_hwp = `${default_hwp.length >> (Math.min(Math.abs(2), 1))}`;
       let canvasJ = String.fromCharCode(105,95,49,49,95,107,98,112,115,0);
      while (4.16 <= sound_) {
         sound_ -= 3 & parseInt(`${membership1}`);
         break;
      }
      if (2.89 <= (cast_ + membership1) || 2.89 <= (cast_ + membership1)) {
         cast_ /= Math.max(parseFloat(`${bridge2.length}`), 4);
      }
       let defaultplayerimgl = 4;
       let dependencye = 5;
      let headerM = default_hwp.length <= 9562985;
      do {
         default_hwp += `${1 - parseInt(`${membership1}`)}`;
         if (headerM) {
            break;
         }
      } while (headerM && (2.24 <= (sound_ + default_hwp.length)));
       let topic4 = String.fromCharCode(115,95,52,54,95,115,101,108,101,99,116,0);
         formk = membership1 >= 41.84 && formk;
      let libsgcorea = 7284756.0 <= cast_;
      do {
         cast_ -= parseFloat(`${parseInt(`${membership1}`) % 1}`);
         if (libsgcorea) {
            break;
         }
      } while (libsgcorea && ((3 * sound_) == 5.30));
       let applev = 3.0;
       let imagesf = 2.0;
         topic4 = `${3 | default_hwp.length}`;
         applev /= Math.max(4, parseFloat(`${topic4.length}`));
      vipsportU = "3";
   }
   let yingL = String.fromCharCode(97,121,100,102,107,122,113,0) == navigationT;
   do {
      navigationT += `${3 / (Math.max(6, parseInt(`${google9}`)))}`;
      if (yingL) {
         break;
      }
   } while (yingL && (2 < navigationT.length));
   for (let l = 0; l < 3; l++) {
      subtextP *= a_hashy.size;
   }
      navigationT += `${subtextP % 1}`;
   for (let k = 0; k < 3; k++) {
       let iconuserd: Map<any, any> = new Map([[String.fromCharCode(101,109,105,116,116,101,100,95,106,95,55,51,0),true ], [String.fromCharCode(115,104,97,114,100,95,97,95,50,56,0),true ]]);
       let apps6 = String.fromCharCode(121,95,53,54,95,102,111,114,105,0);
       let selectedb = 3.0;
       let libcxxcomponentsH = String.fromCharCode(121,111,103,97,95,104,95,52,55,0);
       let redgoale = String.fromCharCode(115,95,56,57,95,97,98,115,116,0);
      if (3 > (apps6.length % 5) && 5 > (iconuserd.size % (Math.max(apps6.length, 1)))) {
         iconuserd.set(apps6, 3 * iconuserd.size);
      }
      let loadingB = apps6 == String.fromCharCode(110,120,99,0);
      do {
          let grayx = String.fromCharCode(115,95,52,52,95,109,117,108,116,105,99,111,100,101,99,0);
          let profilee = String.fromCharCode(97,117,116,111,103,101,110,95,48,95,49,48,48,0);
          let iconclosewhitebgU = String.fromCharCode(112,95,52,57,95,115,116,97,109,112,0);
          let sigmobt = 3.0;
         apps6 = `${parseInt(`${sigmobt}`) ^ libcxxcomponentsH.length}`;
         grayx = `${grayx.length}`;
         profilee += `${iconclosewhitebgU.length}`;
         iconclosewhitebgU += `${profilee.length}`;
         sigmobt *= 3;
         if (loadingB) {
            break;
         }
      } while ((!apps6.endsWith(`${iconuserd.size}`)) && loadingB);
         iconuserd.set(`${selectedb}`, parseInt(`${selectedb}`) - 3);
      while (apps6 != libcxxcomponentsH) {
         libcxxcomponentsH += `${redgoale.length}`;
         break;
      }
      for (let s = 0; s < 1; s++) {
         apps6 = `${redgoale.length >> (Math.min(libcxxcomponentsH.length, 1))}`;
      }
      let coder = String.fromCharCode(103,56,103,111,0) == libcxxcomponentsH;
      do {
         libcxxcomponentsH += `${iconuserd.size}`;
         if (coder) {
            break;
         }
      } while (coder && (3 == libcxxcomponentsH.length));
      if (!redgoale.startsWith(`${selectedb}`)) {
         selectedb += apps6.length - libcxxcomponentsH.length;
      }
         iconuserd = new Map([[`${selectedb}`, redgoale.length - 2]]);
         redgoale += `${2 << (Math.min(4, Math.abs(parseInt(`${selectedb}`))))}`;
         selectedb /= Math.max(1, 1);
      if ((libcxxcomponentsH.length * selectedb) <= 5.88 && (2 & libcxxcomponentsH.length) <= 1) {
          let libfbD = String.fromCharCode(115,112,104,101,114,105,99,97,108,95,117,95,54,52,0);
          let libaneZ = 5;
          let bodanD = 3;
          let referreru = String.fromCharCode(103,101,116,116,101,114,95,53,95,52,56,0);
          let lineD: Map<any, any> = new Map([[String.fromCharCode(109,95,51,49,95,99,97,114,100,104,111,108,100,101,114,0),375], [String.fromCharCode(109,97,116,114,105,120,105,110,103,95,102,95,51,53,0),101]]);
         selectedb += apps6.length / (Math.max(2, 7));
         libfbD = `${lineD.size}`;
         libaneZ |= 1 ^ referreru.length;
         bodanD |= libaneZ;
         referreru += `${libaneZ % 1}`;
         lineD = new Map([[`${lineD.size}`, lineD.size / (Math.max(2, 3))]]);
      }
      if (apps6 != String.fromCharCode(110,0)) {
          let anythinkP: Array<any> = [568, 860, 511];
          let resend0 = 5.0;
          let orientationM = 3.0;
         libcxxcomponentsH = `${3 + parseInt(`${selectedb}`)}`;
         anythinkP = [parseInt(`${orientationM}`)];
         resend0 /= Math.max(1, parseFloat(`${parseInt(`${orientationM}`)}`));
      }
      while (4 <= (apps6.length + parseInt(`${selectedb}`)) || 2 <= (apps6.length | 4)) {
          let middlebrightness8: Map<any, any> = new Map([[String.fromCharCode(115,111,108,105,100,105,116,121,95,118,95,50,53,0),String.fromCharCode(115,95,55,49,95,97,100,100,105,110,103,0)], [String.fromCharCode(112,111,108,121,103,111,110,95,97,95,53,52,0),String.fromCharCode(103,95,50,52,95,100,105,102,102,101,114,0)], [String.fromCharCode(109,95,51,55,95,99,97,108,99,117,108,97,116,101,0),String.fromCharCode(101,95,56,55,95,97,97,99,101,110,99,100,115,112,0)]]);
          let malaysiax = String.fromCharCode(114,97,100,97,114,95,115,95,57,49,0);
          let macaux = 2;
         apps6 = `${middlebrightness8.size}`;
         middlebrightness8 = new Map([[malaysiax, malaysiax.length]]);
         macaux |= (String.fromCharCode(75,0) == malaysiax ? malaysiax.length : macaux);
         break;
      }
       let libfollyu = String.fromCharCode(109,97,106,111,114,95,53,95,57,52,0);
       let bodanF = String.fromCharCode(114,101,99,111,100,101,95,114,95,49,55,0);
      shrinkB.set(`${subtextP}`, 3 + iconuserd.size);
   }
      vignetteQ = `${parseInt(`${w_centere}`)}`;
      google9 /= Math.max(4, parseFloat(`${3}`));
      moonh = [1 % (Math.max(parseInt(`${google9}`), 2))];
      ccopy_1g = `${subtextP * 2}`;
      wwLaunchRound.showToast('我们将在3个工作日内处理您注销请求，请注意您的邮箱，在此期间您可以继续登录');
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

  
  
  
  const userState = useSelector<wwVertical>('userReducer');

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

          {wwBodan.isLogin(userState.user) &&
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
              {wwBodan.isLogin(userState.user) &&
                <ShowMoreButton text="注销账号" onPress={toggleRemoveAccountDialog} />
              }
            </View>
          </View>
        </View>
        {wwBodan.isLogin(userState.user) && (
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
