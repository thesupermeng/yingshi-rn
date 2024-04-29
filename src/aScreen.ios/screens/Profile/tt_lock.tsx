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
import ScreenContainer from '../../components/container/tt_backward';
import { RootStackScreenProps } from '@type/tt_temperature';
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native';

import TitleWithBackButtonHeader from '../../components/header/tt_typing_tail_header';
import { Button, Dialog } from '@rneui/themed';
import ShowMoreButton from '../../components/button/tt_hongkong_button';
import NotificationModal from '../../components/modal/tt_countdown';
import MoreArrow from '@static/images/privilegeQuestCountry.svg';
import ConfirmationModal from '../../components/modal/tt_styles';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/tt_spec_download';
import { clearStorageMemory } from '@redux/actions/tt_checkbox';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import { addUserAuthState, removeUserAuthState } from '@redux/actions/tt_topon';
import { changeScreenAction } from '@redux/actions/tt_copy_heji';
import { ttOrange } from '@redux/tt_updates_bottom';

import { APP_NAME_CONST, APP_VERSION, IS_OTHER_SKIN } from '@utility/tt_trophy_cross';
import { ttBaiduNewinterstitial } from '@redux/reducers/tt_center';
import { ttGray } from '@utility/tt_selection';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { ttGoal } from '@redux/reducers/tt_selected';
import { ttFast } from '@models/tt_stations_right';
import { ttTramini } from '../../../api/tt_stations_right';
import { clearMinivodApiCache } from '../../../utils/tt_firebase_less';
export default ({ navigation }: RootStackScreenProps<'设置'>) => {
  const { colors, textVariants, icons, spacing, dark } = useTheme();
  const [isVersionDialogOpen, setIsVersionDialogOpen] = useState(false);
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const [subtitle1, setSubtitle1] = useState('当前已是最新版本' + APP_VERSION);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
    ({ settingsReducer }: ttOrange) => settingsReducer
  );

  const dispatch = useAppDispatch();

  const toggleLogoutDialog = () => {
       let overM = 4.0;
    let memberr: Array<any> = [839, 993];
    let tickedc = false;
    let traminiJ: Array<any> = [953, 595, 38];
    let umeng1 = String.fromCharCode(110,111,110,108,105,110,101,97,114,0);
    let photoy = String.fromCharCode(115,95,54,52,95,115,104,101,108,108,0);
    let backc = false;
    let mbridgeJ = 5;
    let debugp = 4.0;
    let bannerc = 5;
    let darkR: Array<any> = [337, 264];
    let gradley = 1;
   for (let z = 0; z < 2; z++) {
      overM /= Math.max(3, parseFloat(`${traminiJ.length}`));
   }
      bannerc *= memberr.length;
      bannerc -= mbridgeJ;
   for (let a = 0; a < 3; a++) {
       let analytic8 = String.fromCharCode(101,97,115,105,110,103,0);
      if (analytic8 == analytic8) {
          let configs = String.fromCharCode(100,105,114,97,99,0);
          let roomQ = 5.0;
          let navigationy = String.fromCharCode(99,101,114,116,105,102,105,99,97,116,101,115,0);
         analytic8 += "3";
         configs = `${parseInt(`${roomQ}`) << (Math.min(navigationy.length, 2))}`;
         roomQ /= Math.max(3, parseFloat(`${navigationy.length}`));
      }
       let datac = String.fromCharCode(102,97,116,97,108,0);
       let questf = 3;
       let debugs = 1;
      tickedc = debugp == umeng1.length;
   }
   let disconnectedH = 6050389.0 <= overM;
   do {
      overM += parseFloat(`${photoy.length % (Math.max(1, umeng1.length))}`);
      if (disconnectedH) {
         break;
      }
   } while ((5.2 < (overM * parseFloat(`${mbridgeJ}`)) || 5 < (2 | mbridgeJ)) && disconnectedH);
   while (5 < (4 | photoy.length)) {
      photoy += `${memberr.length}`;
      break;
   }
      mbridgeJ &= umeng1.length;
       let typingI = 0.0;
          let mbridgeL: Map<any, any> = new Map([[String.fromCharCode(111,103,103,112,97,99,107,0),699], [String.fromCharCode(114,116,99,95,55,95,56,0),291]]);
          let eighteen9 = 5.0;
         typingI *= parseFloat(`${parseInt(`${eighteen9}`)}`);
         mbridgeL.set(`${mbridgeL.size}`, 2);
      for (let b = 0; b < 2; b++) {
         typingI /= Math.max(parseFloat(`${2}`), 5);
      }
         typingI -= parseFloat(`${parseInt(`${typingI}`)}`);
      traminiJ.push(mbridgeJ);
      photoy = `${photoy.length}`;
       let bannerK = true;
       let traminir = 5.0;
       let episodeP = 5.0;
          let filledZ: Map<any, any> = new Map([[String.fromCharCode(101,108,108,105,103,105,98,108,101,0),51], [String.fromCharCode(110,111,114,109,97,108,105,122,101,100,0),627]]);
         bannerK = episodeP > traminir;
         filledZ = new Map([[`${filledZ.size}`, 3 << (Math.min(2, Math.abs(filledZ.size)))]]);
         bannerK = 63.95 >= traminir;
       let router2 = true;
      while (1.58 >= (episodeP - traminir)) {
         episodeP += 2;
         break;
      }
         router2 = !router2;
      if (5.95 <= episodeP) {
          let bootsplashR = 0.0;
          let backP = 0;
          let sortz = String.fromCharCode(112,114,101,99,101,110,99,101,0);
          let short__d = String.fromCharCode(100,99,116,115,117,98,95,49,95,56,56,0);
         episodeP /= Math.max(2, backP);
         bootsplashR /= Math.max(1 ^ sortz.length, 4);
         backP <<= Math.min(Math.abs((String.fromCharCode(89,0) == short__d ? short__d.length : sortz.length)), 1);
      }
          let borderlessJ = String.fromCharCode(98,111,111,115,116,101,100,0);
         episodeP *= borderlessJ.length >> (Math.min(Math.abs(2), 1));
      for (let o = 0; o < 3; o++) {
         episodeP += ((router2 ? 2 : 5) - parseInt(`${episodeP}`));
      }
      while (!router2 && !bannerK) {
         bannerK = bannerK && episodeP >= 59.23;
         break;
      }
      bannerc <<= Math.min(Math.abs(((tickedc ? 4 : 2) + 2)), 4);
      umeng1 += `${(bannerc ^ (tickedc ? 5 : 5))}`;
   while (1 <= (4 - bannerc)) {
       let phoneI = String.fromCharCode(101,120,108,117,100,101,100,0);
       let with_wy7 = true;
      if (!phoneI.startsWith(`${with_wy7}`)) {
         with_wy7 = phoneI.length > 20 && !with_wy7;
      }
      for (let h = 0; h < 3; h++) {
          let goalc: Map<any, any> = new Map([[String.fromCharCode(109,97,114,107,0),244], [String.fromCharCode(117,110,101,100,105,116,97,98,108,101,0),369]]);
         with_wy7 = with_wy7 && goalc.size < 57;
      }
      if (phoneI.endsWith(`${with_wy7}`)) {
         phoneI += "3";
      }
      for (let w = 0; w < 3; w++) {
          let sansO = String.fromCharCode(115,112,101,101,120,0);
          let private_bS: Array<any> = [452, 639, 482];
          let foundf = true;
         with_wy7 = (((with_wy7 ? 2 : phoneI.length) * phoneI.length) >= 2);
         sansO += `${private_bS.length}`;
         private_bS = [((foundf ? 5 : 2) % (Math.max(2, 9)))];
         foundf = (((foundf ? private_bS.length : 84) << (Math.min(private_bS.length, 1))) <= 84);
      }
      if (!phoneI.includes(`${with_wy7}`)) {
         phoneI += `${phoneI.length % (Math.max(2, 7))}`;
      }
          let fastforwardm = String.fromCharCode(100,101,116,97,105,108,101,100,0);
         with_wy7 = phoneI.length >= 71 && with_wy7;
         fastforwardm = `${(fastforwardm == String.fromCharCode(49,0) ? fastforwardm.length : fastforwardm.length)}`;
      debugp /= Math.max(4, parseInt(`${overM}`));
      break;
   }
      traminiJ = [1 << (Math.min(1, umeng1.length))];
      umeng1 += `${photoy.length >> (Math.min(Math.abs(2), 1))}`;
      bannerc += bannerc & 3;
   for (let o = 0; o < 1; o++) {
      bannerc &= traminiJ.length << (Math.min(Math.abs(3), 1));
   }
      bannerc |= parseInt(`${overM}`) >> (Math.min(3, Math.abs(1)));
       let yellowI = String.fromCharCode(98,105,110,111,109,105,97,108,0);
       let pressures = String.fromCharCode(99,97,114,114,121,0);
       let carouselx = String.fromCharCode(108,97,122,105,108,121,0);
         carouselx = `${pressures.length}`;
         pressures = `${pressures.length}`;
         carouselx = `${pressures.length}`;
       let overlay_ = String.fromCharCode(112,114,105,110,99,105,112,97,108,0);
       let selectionY = String.fromCharCode(122,95,51,51,95,101,101,112,0);
       let rulesV: Map<any, any> = new Map([[String.fromCharCode(117,116,118,105,100,101,111,0),String.fromCharCode(117,95,54,49,0)], [String.fromCharCode(112,95,49,56,95,109,111,100,98,0),String.fromCharCode(116,101,108,108,0)]]);
       let mbnativeadvanced5: Map<any, any> = new Map([[String.fromCharCode(98,114,97,110,100,115,95,102,95,52,55,0),209], [String.fromCharCode(112,97,114,105,116,121,0),959], [String.fromCharCode(97,114,101,116,104,101,114,101,0),480]]);
      for (let s = 0; s < 1; s++) {
         rulesV = new Map([[`${rulesV.size}`, selectionY.length * 3]]);
      }
          let shirtn: Map<any, any> = new Map([[String.fromCharCode(120,95,53,50,95,108,105,98,112,104,111,110,101,110,117,109,98,101,114,0),81], [String.fromCharCode(103,115,116,114,105,110,103,0),578]]);
         pressures += `${carouselx.length / 3}`;
         shirtn.set(`${shirtn.size}`, shirtn.size & 2);
          let areaj = String.fromCharCode(100,95,49,56,95,99,111,110,116,0);
          let blackn = 0.0;
          let closew: Map<any, any> = new Map([[String.fromCharCode(115,97,100,100,0),36], [String.fromCharCode(117,110,119,114,97,112,112,101,100,0),300], [String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,0),611]]);
         pressures += `${pressures.length}`;
         areaj = `${closew.size}`;
         blackn *= closew.size & parseInt(`${blackn}`);
       let friendsY: Array<any> = [121, 646, 163];
       let umengA: Array<any> = [String.fromCharCode(110,105,115,116,112,0), String.fromCharCode(97,95,49,55,0), String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,0)];
      memberr.push(umeng1.length);
      yellowI = `${(String.fromCharCode(106,0) == yellowI ? yellowI.length : yellowI.length)}`;
       let countdowna = String.fromCharCode(101,110,113,117,101,117,101,100,0);
       let tnewse = String.fromCharCode(100,105,102,102,0);
       let productg = String.fromCharCode(98,97,99,107,105,110,103,0);
      while (countdowna != String.fromCharCode(77,0) && productg != String.fromCharCode(74,0)) {
         productg = `${productg.length}`;
         break;
      }
         tnewse = `${3 + tnewse.length}`;
      while (1 == tnewse.length) {
         countdowna += `${(String.fromCharCode(48,0) == countdowna ? countdowna.length : productg.length)}`;
         break;
      }
      if (1 == countdowna.length) {
          let icon0 = String.fromCharCode(118,95,50,56,0);
          let modulev = 4;
          let settingsI = 2.0;
          let selectk = String.fromCharCode(97,98,117,102,102,101,114,115,105,110,107,0);
          let floatingQ = String.fromCharCode(97,98,115,116,0);
         tnewse += "1";
         icon0 = "2";
         modulev &= parseInt(`${settingsI}`);
         settingsI /= Math.max(parseFloat(`${3}`), 4);
         selectk += `${(icon0 == String.fromCharCode(111,0) ? modulev : icon0.length)}`;
         floatingQ += `${(String.fromCharCode(51,0) == selectk ? selectk.length : modulev)}`;
      }
      let calendark = productg == String.fromCharCode(121,107,115,55,117,54,101,114,51,0);
      do {
         productg = `${productg.length >> (Math.min(Math.abs(2), 4))}`;
         if (calendark) {
            break;
         }
      } while (calendark && (tnewse.length == 4));
       let temperatureo = 2;
         tnewse += "3";
          let editd = 3;
          let internetB = String.fromCharCode(99,111,108,108,97,116,105,111,110,0);
          let dark_ = true;
         countdowna = `${temperatureo}`;
         editd -= (internetB == String.fromCharCode(116,0) ? internetB.length : (dark_ ? 4 : 3));
         dark_ = internetB == String.fromCharCode(109,0) && editd <= 22;
          let regengW = String.fromCharCode(109,101,115,115,97,103,101,115,0);
          let pageJ = String.fromCharCode(99,117,98,105,99,0);
          let changeY = String.fromCharCode(102,105,102,97,0);
         tnewse += `${regengW.length}`;
         regengW = `${changeY.length ^ pageJ.length}`;
         pageJ = `${pageJ.length}`;
         changeY = `${changeY.length}`;
      mbridgeJ -= 2;
   while (4.54 == (5.88 + debugp) && 5.29 == (5.88 + debugp)) {
      traminiJ = [3];
      break;
   }
   while ((2.66 - debugp) <= 2.57) {
       let moreO = 0;
       let privilegeE = String.fromCharCode(110,111,100,101,115,0);
      let bridged = moreO >= 7848337;
      do {
         moreO += moreO;
         if (bridged) {
            break;
         }
      } while ((privilegeE.length < moreO) && bridged);
      let updatesL = moreO >= 7651640;
      do {
          let toponQ = String.fromCharCode(112,114,101,115,101,110,116,97,98,108,101,0);
          let gestures = true;
         moreO &= (privilegeE == String.fromCharCode(71,0) ? moreO : privilegeE.length);
         toponQ = "3";
         gestures = toponQ.length <= 51;
         if (updatesL) {
            break;
         }
      } while (updatesL && ((4 / (Math.max(1, moreO))) > 2 || (4 / (Math.max(5, privilegeE.length))) > 4));
      while ((privilegeE.length | moreO) == 4 || (4 | privilegeE.length) == 2) {
         privilegeE += `${(privilegeE == String.fromCharCode(89,0) ? privilegeE.length : moreO)}`;
         break;
      }
      for (let w = 0; w < 3; w++) {
         moreO ^= privilegeE.length % 3;
      }
         privilegeE = `${moreO + 1}`;
      for (let u = 0; u < 1; u++) {
         privilegeE = `${privilegeE.length}`;
      }
      backc = moreO >= 37 && debugp >= 63.87;
      break;
   }

    setIsLogoutDialogOpen(!isLogoutDialogOpen);
  };

  const toggleVersionDialog = () => {
       let wind1 = String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,0);
    let orientationz = false;
    let listJ: Map<any, any> = new Map([[String.fromCharCode(101,116,104,111,100,95,114,95,49,0),String.fromCharCode(121,95,55,95,109,101,116,97,100,97,116,97,0)], [String.fromCharCode(100,111,117,98,108,101,115,115,116,114,0),String.fromCharCode(97,115,115,101,114,116,0)], [String.fromCharCode(117,112,115,104,105,102,116,95,122,95,54,57,0),String.fromCharCode(108,111,99,97,108,104,111,115,116,0)]]);
    let themeC = false;
    let mintegral5: Map<any, any> = new Map([[String.fromCharCode(119,95,48,95,110,105,98,0),true ], [String.fromCharCode(101,114,108,101,0),true ], [String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,0),true ]]);
    let groupL: Map<any, any> = new Map([[String.fromCharCode(100,101,115,99,0),false ], [String.fromCharCode(112,112,102,108,97,103,115,0),true ]]);
    let a_unlockd = false;
    let iconn = String.fromCharCode(109,105,120,105,110,103,0);
    let reducer1 = String.fromCharCode(103,101,116,112,101,101,114,97,100,100,114,0);
    let aboutZ: Array<any> = [616, 178, 702];
   if (4 < (mintegral5.size >> (Math.min(Math.abs(2), 1))) && 2 < mintegral5.size) {
       let modulei = String.fromCharCode(115,101,110,100,116,111,0);
       let overlayw = false;
       let debugo = 4;
       let volumeU = 3.0;
       let otherX = 3;
       let plust = String.fromCharCode(97,110,110,111,116,97,116,105,111,110,0);
       let spinnerp = String.fromCharCode(115,117,98,116,108,101,0);
         spinnerp += `${otherX}`;
      while ((volumeU * 2.74) >= 5.56) {
          let kuaishouk = String.fromCharCode(97,97,99,101,110,99,0);
          let gemfileq = String.fromCharCode(100,101,110,115,101,0);
          let championp = String.fromCharCode(118,109,100,97,117,100,105,111,95,50,95,55,51,0);
          let becomem = 3;
          let sporty: Array<any> = [664, 883, 150];
         volumeU -= parseFloat(`${1 & modulei.length}`);
         kuaishouk += `${gemfileq.length}`;
         gemfileq += `${championp.length}`;
         championp = "2";
         becomem |= sporty.length % (Math.max(championp.length, 8));
         sporty = [becomem >> (Math.min(Math.abs(2), 5))];
         break;
      }
       let injury6: Map<any, any> = new Map([[String.fromCharCode(115,116,114,110,115,116,114,0),393], [String.fromCharCode(108,95,56,53,95,114,101,108,102,117,110,99,0),206]]);
       let theme0: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,105,100,101,114,0),true ], [String.fromCharCode(116,114,120,116,0),false ]]);
         otherX >>= Math.min(4, Math.abs(parseInt(`${volumeU}`)));
      for (let w = 0; w < 3; w++) {
         spinnerp = `${injury6.size * spinnerp.length}`;
      }
          let carouselD = true;
         spinnerp = `${injury6.size - debugo}`;
         carouselD = !carouselD;
       let downs = 4.0;
      let matchesY = 7990619 >= theme0.size;
      do {
          let traminiN = String.fromCharCode(104,97,100,97,109,97,114,100,120,0);
         theme0.set(modulei, otherX | modulei.length);
         traminiN += `${(String.fromCharCode(114,0) == traminiN ? traminiN.length : traminiN.length)}`;
         if (matchesY) {
            break;
         }
      } while (matchesY && (5 == spinnerp.length));
         theme0.set(`${downs}`, 3);
          let predictionE = true;
         modulei += `${plust.length}`;
         predictionE = !predictionE;
         downs *= 3 + otherX;
      while (volumeU < otherX) {
         otherX *= modulei.length << (Math.min(Math.abs(3), 4));
         break;
      }
          let holderb = String.fromCharCode(112,114,111,99,101,101,100,95,57,95,57,49,0);
          let selection4 = String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,0);
         injury6.set(`${volumeU}`, holderb.length);
         holderb = `${selection4.length}`;
         selection4 += "3";
          let bottomi = String.fromCharCode(109,97,120,100,98,115,95,50,95,51,51,0);
          let umengw = String.fromCharCode(97,116,111,109,105,99,115,0);
         downs *= parseInt(`${volumeU}`);
         bottomi += `${umengw.length - 3}`;
         umengw += `${umengw.length * bottomi.length}`;
      mintegral5.set(`${volumeU}`, 3 / (Math.max(5, parseInt(`${volumeU}`))));
   }
   while (!wind1.endsWith(`${a_unlockd}`)) {
      wind1 = `${1 - wind1.length}`;
      break;
   }
   if (5 < (groupL.size - 4)) {
      a_unlockd = (69 > (wind1.length * (!orientationz ? 69 : wind1.length)));
   }
   if (!themeC && (mintegral5.size * 1) == 1) {
       let agreementK = 4;
       let chinasameE = 3.0;
       let roomY = 4.0;
      for (let q = 0; q < 2; q++) {
         agreementK *= 3 * agreementK;
      }
      if (agreementK > roomY) {
         roomY -= agreementK;
      }
      for (let f = 0; f < 1; f++) {
         agreementK %= Math.max(5, 2);
      }
         chinasameE -= parseInt(`${roomY}`) ^ 3;
          let toponB = String.fromCharCode(111,95,55,48,95,119,114,106,112,103,99,111,109,0);
          let canvaso = 1;
          let bootsplashl = String.fromCharCode(120,95,54,52,0);
         chinasameE += 2 | parseInt(`${roomY}`);
         toponB += "2";
         canvaso ^= (bootsplashl == String.fromCharCode(82,0) ? bootsplashl.length : canvaso);
      if (3.91 > (roomY * 4.11)) {
         agreementK %= Math.max(parseInt(`${chinasameE}`) & agreementK, 3);
      }
         roomY += parseInt(`${roomY}`);
      let giftT = 9617614 >= agreementK;
      do {
         agreementK |= parseInt(`${chinasameE}`);
         if (giftT) {
            break;
         }
      } while ((5.22 >= (roomY + 3.80) || 4 >= (2 * agreementK)) && giftT);
         chinasameE /= Math.max(parseInt(`${roomY}`), 3);
      themeC = (wind1.length | mintegral5.size) <= 81;
   }
      listJ.set(`${listJ.size}`, 3);
   let turni = themeC ? !themeC : themeC;
   do {
      themeC = !wind1.includes(`${orientationz}`);
      if (turni) {
         break;
      }
   } while (((1 & mintegral5.size) >= 2 && themeC) && turni);
       let taiwan3: Map<any, any> = new Map([[String.fromCharCode(114,101,99,105,100,0),42], [String.fromCharCode(99,104,97,112,116,101,114,0),621], [String.fromCharCode(111,114,105,103,0),570]]);
      while (!Array.from(taiwan3.values()).includes(taiwan3.size)) {
          let catagorym = 0.0;
          let blackU = true;
          let bodanc = String.fromCharCode(109,115,101,120,0);
          let topick = String.fromCharCode(113,95,50,52,95,115,105,103,110,0);
          let auto_1r = String.fromCharCode(110,116,101,114,110,97,108,0);
         taiwan3.set(`${blackU}`, taiwan3.size);
         catagorym -= 1 ^ auto_1r.length;
         bodanc = `${parseInt(`${catagorym}`) / (Math.max(10, bodanc.length))}`;
         topick += `${bodanc.length}`;
         auto_1r += `${auto_1r.length >> (Math.min(topick.length, 4))}`;
         break;
      }
      for (let y = 0; y < 1; y++) {
         taiwan3 = new Map([[`${taiwan3.size}`, taiwan3.size]]);
      }
         taiwan3 = new Map([[`${taiwan3.size}`, 3]]);
      mintegral5 = new Map([[iconn, iconn.length]]);
      listJ = new Map([[`${groupL.size}`, groupL.size % 1]]);
      listJ = new Map([[`${listJ.size}`, 2 | wind1.length]]);
       let modityU: Array<any> = [String.fromCharCode(103,95,53,52,95,114,101,97,108,108,111,99,97,116,101,0), String.fromCharCode(105,110,118,101,114,115,101,100,0)];
       let emptyV = String.fromCharCode(99,115,114,105,100,0);
       let stationsB = 4;
      for (let u = 0; u < 3; u++) {
         stationsB &= 2 * emptyV.length;
      }
         modityU.push(emptyV.length * 1);
       let weibo5: Array<any> = [String.fromCharCode(116,105,100,121,0), String.fromCharCode(106,95,52,49,95,116,97,112,101,115,0), String.fromCharCode(115,119,97,112,0)];
          let link2 = 5.0;
         stationsB -= emptyV.length;
         link2 /= Math.max(parseInt(`${link2}`), 4);
      if ((modityU.length * 5) < 4 && 5 < (5 * stationsB)) {
         modityU.push(stationsB);
      }
      for (let t = 0; t < 1; t++) {
          let gradleC = String.fromCharCode(121,95,54,95,98,117,102,102,101,114,115,114,99,0);
         stationsB >>= Math.min(Math.abs(weibo5.length | 3), 1);
         gradleC += `${gradleC.length * 1}`;
      }
      let groupD = modityU.length >= 8382491;
      do {
         modityU.push(3);
         if (groupD) {
            break;
         }
      } while (groupD && (3 > (emptyV.length ^ modityU.length) || 3 > (modityU.length ^ emptyV.length)));
      for (let x = 0; x < 3; x++) {
          let brightnessx = false;
          let carouselY: Array<any> = [724, 279, 725];
          let catagoryl = String.fromCharCode(117,115,101,115,0);
          let configureN = String.fromCharCode(97,103,103,114,101,103,97,116,101,0);
          let mappings: Array<any> = [206, 914, 413];
         stationsB /= Math.max(3, ((brightnessx ? 3 : 3) * 2));
         brightnessx = catagoryl.length == configureN.length;
         carouselY = [(configureN == String.fromCharCode(49,0) ? configureN.length : carouselY.length)];
         catagoryl += `${3 << (Math.min(3, catagoryl.length))}`;
         mappings = [(configureN == String.fromCharCode(108,0) ? configureN.length : mappings.length)];
      }
      if (modityU.length < 3) {
         modityU.push(2 ^ modityU.length);
      }
      iconn = `${listJ.size % (Math.max(2, 4))}`;
   while (listJ.size <= 5) {
       let vietnamY = String.fromCharCode(112,95,54,56,95,114,101,99,111,109,112,117,116,101,0);
       let borderless6: Map<any, any> = new Map([[String.fromCharCode(99,97,110,111,110,105,99,97,108,105,122,101,100,0),String.fromCharCode(105,109,101,110,115,105,111,110,0)], [String.fromCharCode(105,110,105,116,105,97,108,0),String.fromCharCode(102,111,114,109,97,116,115,0)]]);
       let yellowy = String.fromCharCode(109,97,116,114,105,120,105,110,103,0);
       let apps8 = 1.0;
      let targetQ = 5614134.0 <= apps8;
      do {
         apps8 /= Math.max(4, yellowy.length | borderless6.size);
         if (targetQ) {
            break;
         }
      } while (targetQ && ((yellowy.length - apps8) < 4.58));
          let statsh = String.fromCharCode(114,103,98,114,103,98,0);
         borderless6 = new Map([[statsh, statsh.length]]);
      let aboutY = 8968996.0 <= apps8;
      do {
         apps8 /= Math.max(5, 1);
         if (aboutY) {
            break;
         }
      } while ((yellowy.length > apps8) && aboutY);
      if ((apps8 - 4.38) > 2.63) {
         apps8 *= 2;
      }
          let sortv = 2.0;
          let zoomZ = String.fromCharCode(100,97,116,97,98,108,111,99,107,0);
         borderless6.set(`${apps8}`, parseInt(`${apps8}`) << (Math.min(5, Math.abs(1))));
         sortv += zoomZ.length;
         zoomZ = `${parseInt(`${sortv}`) | 2}`;
      while (3 < (yellowy.length >> (Math.min(Math.abs(5), 2)))) {
         apps8 -= 3;
         break;
      }
       let groupl = String.fromCharCode(100,117,112,115,0);
       let shootV = String.fromCharCode(117,110,114,101,108,105,97,98,108,101,95,115,95,54,57,0);
       let watchU = String.fromCharCode(97,116,97,98,97,115,101,0);
          let infol = String.fromCharCode(98,97,110,100,115,95,110,95,57,56,0);
          let acceptedp: Map<any, any> = new Map([[String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,0),String.fromCharCode(108,111,116,116,105,101,118,105,101,119,0)], [String.fromCharCode(101,118,98,117,102,102,101,114,0),String.fromCharCode(107,105,99,107,101,114,0)], [String.fromCharCode(118,108,98,117,102,0),String.fromCharCode(97,118,103,95,108,95,56,52,0)]]);
          let fastforwardv = 5.0;
         shootV += `${parseInt(`${fastforwardv}`) - vietnamY.length}`;
         infol += `${2 & infol.length}`;
         acceptedp = new Map([[`${acceptedp.size}`, acceptedp.size]]);
         fastforwardv += (parseFloat(`${infol == String.fromCharCode(75,0) ? acceptedp.size : infol.length}`));
         groupl += `${shootV.length / (Math.max(2, 7))}`;
          let x_titleI = String.fromCharCode(115,101,103,109,101,110,116,97,116,105,111,110,0);
          let philippinesZ = 5.0;
         shootV = "3";
         x_titleI = `${parseInt(`${philippinesZ}`) - 3}`;
         philippinesZ += x_titleI.length * 3;
      while ((5.26 * apps8) < 5.19 && 5 < (parseInt(`${apps8}`) * yellowy.length)) {
         yellowy = `${3 + vietnamY.length}`;
         break;
      }
      a_unlockd = !a_unlockd;
      break;
   }
   let teamK = groupL.size >= 7997284;
   do {
      groupL.set(`${a_unlockd}`, ((a_unlockd ? 3 : 1)));
      if (teamK) {
         break;
      }
   } while ((groupL.size < 3) && teamK);
   if (mintegral5.size <= 1) {
      mintegral5 = new Map([[iconn, (wind1 == String.fromCharCode(120,0) ? iconn.length : wind1.length)]]);
   }
       let recommendationR = String.fromCharCode(115,117,98,115,97,109,112,108,101,0);
       let mappingh = 3;
      if (5 > (3 * recommendationR.length)) {
         mappingh &= mappingh & recommendationR.length;
      }
      let catalogr = mappingh <= 5253008;
      do {
         mappingh &= (recommendationR == String.fromCharCode(89,0) ? mappingh : recommendationR.length);
         if (catalogr) {
            break;
         }
      } while (catalogr && (recommendationR.endsWith(`${mappingh}`)));
      let holderk = recommendationR.length >= 6252214;
      do {
         recommendationR += `${(String.fromCharCode(98,0) == recommendationR ? mappingh : recommendationR.length)}`;
         if (holderk) {
            break;
         }
      } while (holderk && (5 <= (recommendationR.length - mappingh)));
      let leaguez = mappingh <= 7856930;
      do {
          let watchA = String.fromCharCode(99,111,110,115,116,114,117,99,116,111,114,95,100,95,56,0);
          let benefitC = String.fromCharCode(117,110,122,116,101,108,108,0);
          let dplusg: Map<any, any> = new Map([[String.fromCharCode(97,100,109,105,110,115,0),722], [String.fromCharCode(108,115,102,108,115,112,100,0),394]]);
          let k_playerA = String.fromCharCode(103,97,116,101,0);
         mappingh *= k_playerA.length >> (Math.min(watchA.length, 5));
         watchA = `${dplusg.size | 3}`;
         benefitC = `${benefitC.length & dplusg.size}`;
         k_playerA = `${(String.fromCharCode(116,0) == benefitC ? dplusg.size : benefitC.length)}`;
         if (leaguez) {
            break;
         }
      } while (leaguez && (2 < (5 / (Math.max(5, recommendationR.length)))));
      while ((mappingh / (Math.max(recommendationR.length, 8))) < 5 || (mappingh / (Math.max(5, 10))) < 1) {
          let yellown: Array<any> = [225, 970, 380];
          let shrinkY = String.fromCharCode(111,98,106,110,105,100,0);
          let goalB = 1;
          let stationL: Map<any, any> = new Map([[String.fromCharCode(103,97,105,110,99,0),76], [String.fromCharCode(113,95,55,50,95,112,114,117,110,101,0),205], [String.fromCharCode(109,107,118,109,117,120,101,114,116,121,112,101,115,0),402]]);
          let photoi = false;
         mappingh += stationL.size % 3;
         yellown = [goalB / (Math.max(7, shrinkY.length))];
         shrinkY += `${2 ^ goalB}`;
         stationL.set(shrinkY, 3);
         photoi = goalB == shrinkY.length;
         break;
      }
      for (let g = 0; g < 1; g++) {
         mappingh <<= Math.min(Math.abs(mappingh + 2), 2);
      }
      a_unlockd = (!themeC ? a_unlockd : !themeC);
   for (let h = 0; h < 2; h++) {
       let plashM = 5.0;
       let logoX = 4.0;
       let searchbaru = 1.0;
       let backwardD = String.fromCharCode(104,95,53,56,95,97,117,116,104,111,114,105,122,101,0);
      let search0 = logoX <= 5147704.0;
      do {
         logoX *= (String.fromCharCode(67,0) == backwardD ? parseInt(`${searchbaru}`) : backwardD.length);
         if (search0) {
            break;
         }
      } while (((backwardD.length ^ 5) == 3 || (5.85 - logoX) == 3.26) && search0);
      let successT = searchbaru <= 6614748.0;
      do {
          let temperatureE = String.fromCharCode(101,102,102,101,99,116,105,118,101,0);
         searchbaru -= (String.fromCharCode(77,0) == temperatureE ? temperatureE.length : parseInt(`${searchbaru}`));
         if (successT) {
            break;
         }
      } while (successT && (searchbaru == 1.19));
          let notificationC = String.fromCharCode(107,108,97,121,116,110,95,54,95,49,50,0);
         backwardD = `${parseInt(`${searchbaru}`) >> (Math.min(4, Math.abs(3)))}`;
         notificationC += "3";
      let typingH = 7836936.0 >= searchbaru;
      do {
         searchbaru += (String.fromCharCode(54,0) == backwardD ? parseInt(`${searchbaru}`) : backwardD.length);
         if (typingH) {
            break;
         }
      } while ((logoX == searchbaru) && typingH);
      if (searchbaru == 4.46) {
         searchbaru /= Math.max(1, (String.fromCharCode(84,0) == backwardD ? parseInt(`${searchbaru}`) : backwardD.length));
      }
      while (5.3 >= (logoX + 2.54) || 4.45 >= (plashM + 2.54)) {
         logoX *= parseInt(`${logoX}`) / 1;
         break;
      }
      for (let p = 0; p < 3; p++) {
         logoX /= Math.max(parseInt(`${plashM}`), 3);
      }
      for (let l = 0; l < 2; l++) {
         searchbaru -= backwardD.length;
      }
          let collectionX = String.fromCharCode(97,95,54,54,95,101,115,116,105,109,97,116,101,100,0);
          let rewardu = String.fromCharCode(121,95,49,53,95,119,105,116,104,105,110,0);
         plashM += parseFloat(`${collectionX.length}`);
         collectionX += `${rewardu.length % 3}`;
         rewardu += `${1 ^ rewardu.length}`;
      let umengZ = 8797501 <= backwardD.length;
      do {
         backwardD += "1";
         if (umengZ) {
            break;
         }
      } while (umengZ && (backwardD.startsWith(`${searchbaru}`)));
         searchbaru -= parseInt(`${plashM}`);
      let pressurep = 8302440.0 <= logoX;
      do {
         logoX *= 1;
         if (pressurep) {
            break;
         }
      } while (pressurep && ((3.56 * logoX) > 2.67 && (3.56 * logoX) > 1.32));
      mintegral5 = new Map([[`${listJ.size}`, (String.fromCharCode(100,0) == iconn ? listJ.size : iconn.length)]]);
   }
   let casta = themeC ? !themeC : themeC;
   do {
      themeC = listJ.size == 97;
      if (casta) {
         break;
      }
   } while (casta && (!themeC));
   if (!themeC) {
       let matchf = 0.0;
          let photo3: Array<any> = [518, 944, 623];
          let bottomm = 1.0;
          let helper_ = 2.0;
         matchf -= parseInt(`${bottomm}`) >> (Math.min(1, Math.abs(1)));
         photo3 = [photo3.length % 1];
         bottomm += photo3.length;
         helper_ -= parseInt(`${helper_}`) & photo3.length;
      let androidg = matchf >= 6479089.0;
      do {
         matchf *= 2 + parseInt(`${matchf}`);
         if (androidg) {
            break;
         }
      } while (androidg && (3.57 <= (4.60 * matchf) || (matchf - 4.60) <= 1.31));
      let loadingb = 8488994.0 <= matchf;
      do {
         matchf *= parseInt(`${matchf}`);
         if (loadingb) {
            break;
         }
      } while ((2.51 <= matchf) && loadingb);
      groupL = new Map([[`${groupL.size}`, iconn.length]]);
   }
      aboutZ = [(String.fromCharCode(104,0) == wind1 ? (themeC ? 2 : 3) : wind1.length)];

    setIsVersionDialogOpen(!isVersionDialogOpen);
  };
  const toggleClearDialog = () => {
       let formt = true;
    let headerp: Array<any> = [String.fromCharCode(104,115,116,114,105,110,103,0), String.fromCharCode(115,119,105,102,116,99,0), String.fromCharCode(109,101,109,97,108,105,103,110,0)];
    let inviteU = String.fromCharCode(108,111,99,97,108,0);
    let taiwan6 = String.fromCharCode(99,119,110,100,0);
    let logov = String.fromCharCode(117,110,99,111,110,115,117,109,101,100,0);
    let hejip = 4.0;
    let znewinterstitialw = true;
    let launcherk = String.fromCharCode(120,95,55,49,95,98,117,108,107,0);
    let temps = 5;
    let eventc = false;
    let baidup: Array<any> = [679, 228, 434];
    let playercommonm = 1.0;
    let combine7 = true;
    let buttonZ: Map<any, any> = new Map([[String.fromCharCode(111,95,52,51,95,115,116,114,102,117,110,99,0),String.fromCharCode(99,111,114,101,115,95,98,95,50,49,0)], [String.fromCharCode(115,112,97,110,115,0),String.fromCharCode(111,110,121,120,0)]]);
    let basketballG = 2;
      hejip += parseFloat(`${temps}`);
   while (5 < (inviteU.length / (Math.max(2, 5))) && (inviteU.length % 2) < 4) {
      hejip /= Math.max(parseFloat(`${temps / (Math.max(parseInt(`${hejip}`), 8))}`), 5);
      break;
   }
      headerp = [((formt ? 3 : 3) << (Math.min(Math.abs(parseInt(`${hejip}`)), 3)))];
   let anythinkK = 8466244 >= headerp.length;
   do {
       let gesturesz = String.fromCharCode(122,101,114,111,98,108,111,98,0);
       let eighteen_ = String.fromCharCode(109,105,110,105,109,105,122,101,0);
       let ajaxU: Map<any, any> = new Map([[String.fromCharCode(97,114,98,105,116,101,114,0),363], [String.fromCharCode(109,117,108,116,105,112,108,121,105,110,103,95,105,95,54,51,0),429]]);
         ajaxU.set(`${eighteen_}`, (eighteen_ == String.fromCharCode(81,0) ? eighteen_.length : ajaxU.size));
      while (3 > ajaxU.size) {
         ajaxU.set(`${eighteen_}`, eighteen_.length / 2);
         break;
      }
      for (let n = 0; n < 2; n++) {
         eighteen_ += `${eighteen_.length & ajaxU.size}`;
      }
      let reporta = 8150862 >= ajaxU.size;
      do {
         ajaxU = new Map([[`${ajaxU.size}`, eighteen_.length - ajaxU.size]]);
         if (reporta) {
            break;
         }
      } while ((1 > (5 | gesturesz.length) || 2 > (5 | gesturesz.length)) && reporta);
         gesturesz += `${ajaxU.size - 2}`;
       let specP = String.fromCharCode(118,99,111,109,98,105,110,101,0);
       let fieldO = String.fromCharCode(102,95,57,49,95,102,116,97,98,0);
      for (let q = 0; q < 3; q++) {
         gesturesz += `${specP.length * 3}`;
      }
         specP += `${eighteen_.length}`;
       let condensed6: Map<any, any> = new Map([[String.fromCharCode(104,95,50,52,95,97,114,116,105,99,108,101,115,0),String.fromCharCode(100,109,117,108,0)], [String.fromCharCode(116,104,101,110,97,98,108,101,0),String.fromCharCode(112,105,99,116,111,114,95,114,95,56,53,0)], [String.fromCharCode(116,98,108,101,110,100,0),String.fromCharCode(101,108,98,103,95,102,95,50,55,0)]]);
      headerp.push(((formt ? 3 : 4) % (Math.max(parseInt(`${hejip}`), 8))));
      if (anythinkK) {
         break;
      }
   } while (((launcherk.length >> (Math.min(Math.abs(1), 4))) >= 5) && anythinkK);
   for (let f = 0; f < 1; f++) {
      znewinterstitialw = 59.24 == playercommonm;
   }
   if (!eventc) {
       let sharet: Array<any> = [645, 308];
       let xvodN = String.fromCharCode(108,111,103,116,97,110,0);
      for (let d = 0; d < 1; d++) {
         sharet.push(sharet.length % 1);
      }
      while (3 >= (xvodN.length | sharet.length)) {
         xvodN = `${(xvodN == String.fromCharCode(52,0) ? xvodN.length : sharet.length)}`;
         break;
      }
      eventc = (sharet.length ^ taiwan6.length) > 87;
   }
       let bridged = 5;
         bridged -= bridged << (Math.min(Math.abs(1), 1));
         bridged <<= Math.min(2, Math.abs(1 << (Math.min(5, Math.abs(bridged)))));
          let currentA = true;
          let rewardvideoF = String.fromCharCode(100,99,115,116,114,0);
         bridged -= rewardvideoF.length;
         currentA = !currentA;
         rewardvideoF = `${((currentA ? 1 : 2))}`;
      eventc = bridged <= 40 && baidup.length <= 40;
      eventc = (!znewinterstitialw ? !eventc : znewinterstitialw);
   let scopy_jd6 = String.fromCharCode(99,111,118,49,112,0) == inviteU;
   do {
      inviteU = `${taiwan6.length}`;
      if (scopy_jd6) {
         break;
      }
   } while ((taiwan6.length == 5) && scopy_jd6);
       let humidity2 = String.fromCharCode(118,115,101,114,118,105,99,101,0);
      if (4 <= humidity2.length) {
         humidity2 = `${humidity2.length}`;
      }
         humidity2 = `${humidity2.length - humidity2.length}`;
      while (humidity2 != String.fromCharCode(117,0) && humidity2 == String.fromCharCode(51,0)) {
         humidity2 += `${(humidity2 == String.fromCharCode(110,0) ? humidity2.length : humidity2.length)}`;
         break;
      }
      inviteU = `${headerp.length}`;
       let recommendation4 = false;
       let networkX = true;
      if (networkX) {
         recommendation4 = !networkX;
      }
          let sentry7 = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,0);
          let package_ky0: Array<any> = [800, 771, 527];
         recommendation4 = !recommendation4;
         sentry7 = `${(sentry7 == String.fromCharCode(115,0) ? package_ky0.length : sentry7.length)}`;
         package_ky0.push(sentry7.length | package_ky0.length);
      let indicatorF = recommendation4 ? !recommendation4 : recommendation4;
      do {
          let materialy = 0.0;
         recommendation4 = !recommendation4;
         materialy /= Math.max(parseInt(`${materialy}`) ^ parseInt(`${materialy}`), 2);
         if (indicatorF) {
            break;
         }
      } while ((networkX) && indicatorF);
      while (networkX) {
          let transferI = 1.0;
          let filedZ = 2;
          let buttonD = String.fromCharCode(100,101,99,111,100,101,114,0);
          let dicey = 5;
         networkX = !recommendation4;
         transferI -= 2 ^ parseInt(`${transferI}`);
         filedZ /= Math.max(2, parseInt(`${transferI}`));
         buttonD += `${buttonD.length}`;
         dicey *= 1 - filedZ;
         break;
      }
         networkX = (recommendation4 ? networkX : !recommendation4);
       let disconnectedL = true;
       let resulto = false;
      baidup.push(2 >> (Math.min(Math.abs(parseInt(`${hejip}`)), 4)));
   for (let v = 0; v < 2; v++) {
      logov = "1";
   }
      launcherk += "2";
      eventc = 30 <= temps;
      playercommonm += parseFloat(`${launcherk.length ^ 2}`);
   if (znewinterstitialw) {
      baidup = [taiwan6.length >> (Math.min(Math.abs(1), 2))];
   }
      hejip /= Math.max(4, parseFloat(`${1 % (Math.max(temps, 1))}`));
   while (!inviteU.includes(`${hejip}`)) {
      hejip /= Math.max(parseFloat(`${3}`), 1);
      break;
   }
      znewinterstitialw = hejip > 13.15;
      formt = (((formt ? 79 : taiwan6.length) & taiwan6.length) == 79);
       let ball0: Map<any, any> = new Map([[String.fromCharCode(112,114,111,116,111,0),String.fromCharCode(105,112,111,100,0)], [String.fromCharCode(115,101,97,108,0),String.fromCharCode(98,108,117,114,114,101,100,0)], [String.fromCharCode(120,95,52,48,0),String.fromCharCode(109,97,110,97,103,101,109,101,110,116,0)]]);
         ball0 = new Map([[`${ball0.size}`, 1 % (Math.max(2, ball0.size))]]);
          let bootsplashh = 3.0;
          let middlewarey = 3.0;
         ball0 = new Map([[`${ball0.size}`, 2]]);
         bootsplashh *= parseFloat(`${parseInt(`${middlewarey}`)}`);
         middlewarey += parseInt(`${bootsplashh}`);
         ball0.set(`${ball0.size}`, ball0.size);
      logov += `${parseInt(`${hejip}`) / 1}`;
       let result4 = false;
       let chat7 = String.fromCharCode(119,95,54,56,95,102,116,118,100,111,99,0);
       let halfY = String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,0);
       let entryL = String.fromCharCode(119,104,105,99,104,0);
       let overlayn = String.fromCharCode(112,95,55,55,95,99,111,110,110,101,99,116,105,111,110,115,0);
          let sentryP = 4;
          let mbbidP = String.fromCharCode(115,111,108,105,115,116,101,110,0);
          let usernamer: Map<any, any> = new Map([[String.fromCharCode(113,117,105,110,116,0),324], [String.fromCharCode(105,110,118,111,108,118,101,100,0),504], [String.fromCharCode(105,109,105,116,97,116,101,0),656]]);
         halfY = `${sentryP}`;
         sentryP -= mbbidP.length;
         mbbidP += "2";
         usernamer.set(mbbidP, usernamer.size);
      buttonZ = new Map([[taiwan6, 1]]);
      result4 = (result4 ? result4 : !result4);
      baidup.push(parseInt(`${playercommonm}`) & 2);
      buttonZ = new Map([[`${playercommonm}`, (parseInt(`${playercommonm}`) & (combine7 ? 1 : 1))]]);
       let plashl = String.fromCharCode(97,99,118,112,0);
      if (plashl.length <= plashl.length) {
         plashl = `${plashl.length}`;
      }
         plashl = `${plashl.length % (Math.max(plashl.length, 4))}`;
      let stationV = 9658744 >= plashl.length;
      do {
         plashl += `${plashl.length % (Math.max(3, 2))}`;
         if (stationV) {
            break;
         }
      } while (stationV && (4 < plashl.length));
      temps %= Math.max(baidup.length, 3);
      znewinterstitialw = taiwan6.length >= 19 || 48.47 >= hejip;
   while (!inviteU.startsWith(`${hejip}`)) {
       let minil = false;
       let moduleJ = String.fromCharCode(112,105,120,102,109,116,115,0);
       let banner_: Array<any> = [344, 121, 486];
       let statisticsr = String.fromCharCode(97,99,116,97,98,0);
          let phonev: Map<any, any> = new Map([[String.fromCharCode(105,110,116,105,95,114,95,51,48,0),false ], [String.fromCharCode(120,118,105,100,105,100,99,116,0),false ]]);
          let productH = String.fromCharCode(99,111,110,112,111,110,101,110,116,115,0);
         minil = (81 > ((!minil ? 81 : moduleJ.length) + moduleJ.length));
         phonev = new Map([[`${phonev.size}`, productH.length]]);
         productH = `${phonev.size}`;
      for (let u = 0; u < 3; u++) {
         minil = moduleJ == String.fromCharCode(88,0);
      }
      if ((moduleJ.length ^ 4) >= 5 || (4 ^ moduleJ.length) >= 5) {
          let const_zB = 0;
          let rewardvideo0: Map<any, any> = new Map([[String.fromCharCode(112,114,101,105,118,111,117,115,0),176], [String.fromCharCode(108,97,98,101,108,115,95,100,95,52,0),409]]);
          let brightnessF = String.fromCharCode(99,111,110,102,105,103,117,114,101,100,0);
         banner_.push(statisticsr.length);
         const_zB *= 2 | const_zB;
         rewardvideo0.set(`${const_zB}`, const_zB);
         brightnessF = `${1 - brightnessF.length}`;
      }
      let homeR = minil ? !minil : minil;
      do {
          let fielda = 3.0;
          let orientation9 = false;
          let utils0 = true;
         minil = !orientation9;
         fielda += parseFloat(`${1 % (Math.max(parseInt(`${fielda}`), 7))}`);
         utils0 = !utils0;
         if (homeR) {
            break;
         }
      } while ((banner_.length >= 5) && homeR);
      while (banner_.length >= 3) {
          let circle7 = 4.0;
          let clubr = String.fromCharCode(103,108,111,98,97,108,115,0);
         banner_.push(parseInt(`${circle7}`));
         circle7 += parseFloat(`${clubr.length % (Math.max(clubr.length, 8))}`);
         break;
      }
      let rewarda = moduleJ == String.fromCharCode(52,102,108,54,122,115,116,100,0);
      do {
         moduleJ = `${2 | moduleJ.length}`;
         if (rewarda) {
            break;
         }
      } while ((5 < (2 - banner_.length)) && rewarda);
       let t_playerg: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,108,108,121,0),737], [String.fromCharCode(113,117,101,117,101,0),311]]);
       let indexB: Map<any, any> = new Map([[String.fromCharCode(99,97,114,116,0),158], [String.fromCharCode(105,110,116,101,114,110,95,54,95,53,49,0),839]]);
      if (!statisticsr.endsWith(`${t_playerg.size}`)) {
         statisticsr += `${t_playerg.size}`;
      }
      let yellowq = moduleJ.length <= 5076003;
      do {
         moduleJ += `${indexB.size}`;
         if (yellowq) {
            break;
         }
      } while (yellowq && (moduleJ.includes(`${minil}`)));
          let episodesp: Map<any, any> = new Map([[String.fromCharCode(99,111,114,110,101,114,0),true ], [String.fromCharCode(97,114,99,104,105,118,105,110,103,95,106,95,55,53,0),true ], [String.fromCharCode(110,95,50,49,95,112,114,111,100,117,99,116,105,111,110,0),false ]]);
          let annerS = 2.0;
         moduleJ = "2";
         episodesp = new Map([[`${episodesp.size}`, episodesp.size]]);
         annerS -= parseInt(`${annerS}`) | episodesp.size;
       let tooltips3: Map<any, any> = new Map([[String.fromCharCode(99,95,57,56,95,105,110,99,114,0),428], [String.fromCharCode(110,97,108,115,0),111], [String.fromCharCode(100,95,56,56,0),582]]);
       let turn0: Map<any, any> = new Map([[String.fromCharCode(115,101,110,100,105,110,103,95,107,95,49,57,0),418], [String.fromCharCode(111,102,102,101,114,0),111], [String.fromCharCode(101,120,116,101,110,100,105,110,103,0),799]]);
         tooltips3 = new Map([[`${minil}`, 2]]);
      hejip -= parseFloat(`${2 / (Math.max(10, parseInt(`${hejip}`)))}`);
      break;
   }
      hejip /= Math.max(1, (parseFloat(`${(combine7 ? 4 : 3)}`)));

    setIsClearDialogOpen(!isClearDialogOpen);
  };
  const toggleRemoveAccountDialog = () => {
       let klevinv: Map<any, any> = new Map([[String.fromCharCode(119,97,118,101,108,101,116,0),783], [String.fromCharCode(118,102,105,108,116,101,114,0),895]]);
    let next8 = 1;
    let favoriteE: Map<any, any> = new Map([[String.fromCharCode(104,97,115,120,0),769], [String.fromCharCode(103,97,116,104,101,114,105,110,103,0),229]]);
    let pagec = String.fromCharCode(101,95,53,56,0);
    let sport2 = 4;
    let mimoH = 3.0;
    let stringsZ = true;
    let liver = 5.0;
   let shootN = mimoH <= 6149213.0;
   do {
      mimoH *= pagec.length % 1;
      if (shootN) {
         break;
      }
   } while (shootN && (mimoH > 4.74));
      next8 += favoriteE.size - 2;
      stringsZ = String.fromCharCode(95,0) == pagec && favoriteE.size <= 77;
      klevinv = new Map([[`${klevinv.size}`, favoriteE.size]]);
   let hoverg = sport2 <= 6407802;
   do {
       let sina5 = String.fromCharCode(121,113,117,97,110,116,0);
       let floaterc = String.fromCharCode(117,115,101,100,0);
       let fastP = 4.0;
      if (sina5.includes(floaterc)) {
         floaterc = `${parseInt(`${fastP}`) * 3}`;
      }
         sina5 = `${parseInt(`${fastP}`) | 2}`;
      while (1.45 >= fastP) {
         fastP /= Math.max(parseFloat(`${parseInt(`${fastP}`)}`), 5);
         break;
      }
         floaterc += `${(sina5 == String.fromCharCode(90,0) ? floaterc.length : sina5.length)}`;
         sina5 = `${floaterc.length - sina5.length}`;
         floaterc = `${1 % (Math.max(9, sina5.length))}`;
         sina5 = `${parseInt(`${fastP}`) ^ floaterc.length}`;
      while (sina5.length < floaterc.length) {
          let sans4: Map<any, any> = new Map([[String.fromCharCode(116,114,101,101,99,111,100,101,114,0),false ], [String.fromCharCode(99,95,55,95,119,101,105,103,104,116,120,0),true ]]);
         sina5 = `${2 - sina5.length}`;
         sans4.set(`${sans4.size}`, 3 * sans4.size);
         break;
      }
         floaterc += `${floaterc.length * parseInt(`${fastP}`)}`;
      sport2 += next8 * 3;
      if (hoverg) {
         break;
      }
   } while (hoverg && (sport2 <= mimoH));
      mimoH *= favoriteE.size * 3;
       let configure_ = String.fromCharCode(102,111,114,103,111,116,116,101,110,0);
       let mbridgeO: Array<any> = [String.fromCharCode(115,104,111,116,0), String.fromCharCode(98,117,105,108,116,105,110,0), String.fromCharCode(109,117,108,97,100,100,95,105,95,57,51,0)];
       let injuryV = 3.0;
          let half7: Map<any, any> = new Map([[String.fromCharCode(116,101,108,101,103,114,97,109,0),811], [String.fromCharCode(103,95,50,49,95,99,117,114,115,111,114,115,116,114,101,97,109,119,114,97,112,112,101,114,0),877]]);
          let promotiono = 2.0;
          let videojst = 4;
         configure_ = `${parseInt(`${injuryV}`)}`;
         half7 = new Map([[`${half7.size}`, 3]]);
         promotiono -= parseFloat(`${half7.size}`);
         videojst *= parseInt(`${promotiono}`) + videojst;
      let thumbnaill = 5099612 <= mbridgeO.length;
      do {
          let selectionv = false;
          let searchbara = 5.0;
          let foregroundb: Array<any> = [908, 537];
         mbridgeO.push(3);
         selectionv = 50.4 == searchbara || selectionv;
         searchbara *= (parseFloat(`${(selectionv ? 3 : 4) % (Math.max(6, parseInt(`${searchbara}`)))}`));
         foregroundb = [((selectionv ? 2 : 2) % (Math.max(parseInt(`${searchbara}`), 8)))];
         if (thumbnaill) {
            break;
         }
      } while (thumbnaill && (2 > (5 - mbridgeO.length) || (injuryV / 3.35) > 4.31));
      for (let l = 0; l < 1; l++) {
          let combineI = 3.0;
          let collectionq: Array<any> = [839, 314];
         mbridgeO = [3];
         combineI *= parseInt(`${combineI}`);
         collectionq = [3];
      }
       let infoo = 4;
       let photoE = 3;
          let dplusk = String.fromCharCode(115,112,101,108,108,95,111,95,49,48,0);
          let iconH = String.fromCharCode(105,99,111,110,0);
          let mbsplashh = false;
         injuryV += parseFloat(`${iconH.length << (Math.min(Math.abs(3), 1))}`);
         dplusk += "1";
         iconH += `${(String.fromCharCode(112,0) == dplusk ? dplusk.length : (mbsplashh ? 2 : 4))}`;
      for (let q = 0; q < 3; q++) {
         infoo %= Math.max(4, infoo + configure_.length);
      }
       let firebaseG = false;
         firebaseG = String.fromCharCode(83,0) == configure_;
         mbridgeO.push(parseInt(`${injuryV}`));
      pagec += `${sport2 / (Math.max(3, parseInt(`${injuryV}`)))}`;
      klevinv = new Map([[`${mimoH}`, 1 + parseInt(`${mimoH}`)]]);
      mimoH /= Math.max(parseInt(`${mimoH}`) ^ klevinv.size, 1);
       let android7 = String.fromCharCode(102,111,108,108,111,119,0);
       let gpay8: Array<any> = [String.fromCharCode(114,101,97,99,116,95,112,95,57,55,0), String.fromCharCode(101,97,115,121,0)];
       let main_x0 = String.fromCharCode(100,95,57,57,95,99,111,108,111,114,115,112,97,99,101,0);
      let taiwanT = String.fromCharCode(101,101,115,56,0) == main_x0;
      do {
         main_x0 += `${(String.fromCharCode(117,0) == android7 ? main_x0.length : android7.length)}`;
         if (taiwanT) {
            break;
         }
      } while ((gpay8.length > 2) && taiwanT);
       let condensedN = true;
       let context3 = true;
       let footballT = 4.0;
      while (5 == (gpay8.length & 5)) {
         gpay8.push(3 - parseInt(`${footballT}`));
         break;
      }
      for (let m = 0; m < 1; m++) {
          let referrerf = 1;
          let moviesu = false;
         main_x0 += `${((context3 ? 1 : 2) >> (Math.min(Math.abs(parseInt(`${footballT}`)), 3)))}`;
         referrerf |= 2;
         moviesu = !moviesu;
      }
         main_x0 += `${android7.length}`;
         context3 = (context3 ? condensedN : context3);
      if (2.6 >= (footballT + 3.10)) {
          let reactnativejsW = 3.0;
          let pressureu = String.fromCharCode(105,95,50,50,95,115,116,100,101,114,114,0);
          let page3 = 5.0;
         footballT += main_x0.length << (Math.min(Math.abs(2), 3));
         reactnativejsW -= (parseFloat(`${String.fromCharCode(97,0) == pressureu ? pressureu.length : parseInt(`${reactnativejsW}`)}`));
         page3 -= parseInt(`${page3}`);
      }
         android7 += `${main_x0.length ^ 2}`;
      klevinv = new Map([[`${favoriteE.size}`, favoriteE.size]]);
       let stationk = true;
       let whatsappT: Map<any, any> = new Map([[String.fromCharCode(118,109,97,116,114,105,120,0),529], [String.fromCharCode(100,101,110,105,97,108,0),227], [String.fromCharCode(118,101,110,117,101,115,95,114,95,54,55,0),960]]);
       let plashG: Map<any, any> = new Map([[String.fromCharCode(112,95,51,56,95,106,99,111,108,115,97,109,112,0),154], [String.fromCharCode(105,110,102,111,0),233]]);
         stationk = plashG.size == 86;
      while (stationk) {
          let inactiveM = 4.0;
          let mintegraln = String.fromCharCode(113,95,51,50,95,112,97,110,111,114,97,109,97,0);
          let sharedP = String.fromCharCode(118,101,114,121,0);
          let anythinkm: Array<any> = [712, 298];
         stationk = mintegraln == String.fromCharCode(49,0);
         inactiveM *= anythinkm.length;
         mintegraln += "1";
         sharedP += "3";
         anythinkm.push(parseInt(`${inactiveM}`));
         break;
      }
      pagec += `${pagec.length ^ 3}`;
      klevinv.set(`${mimoH}`, parseInt(`${mimoH}`) % (Math.max(2, 5)));
      pagec = `${klevinv.size}`;
   while (stringsZ && 5.19 == (3.8 + mimoH)) {
      stringsZ = klevinv.get(`${next8}`) != null;
      break;
   }
      pagec = `${parseInt(`${liver}`) >> (Math.min(1, Math.abs(1)))}`;
       let minie = true;
       let l_titleo = String.fromCharCode(101,120,99,101,101,100,115,0);
       let projectf = 4.0;
      for (let i = 0; i < 2; i++) {
          let indicatorc = String.fromCharCode(111,115,116,97,114,0);
         projectf += parseInt(`${projectf}`);
         indicatorc = `${(String.fromCharCode(105,0) == indicatorc ? indicatorc.length : indicatorc.length)}`;
      }
          let indicatoro = false;
         l_titleo = `${l_titleo.length * parseInt(`${projectf}`)}`;
         indicatoro = indicatoro || !indicatoro;
         l_titleo += `${3 | parseInt(`${projectf}`)}`;
          let project1 = 0.0;
          let overt = String.fromCharCode(98,117,102,114,101,102,0);
         l_titleo = `${parseInt(`${projectf}`)}`;
         project1 *= parseFloat(`${overt.length}`);
         overt = `${parseInt(`${project1}`) << (Math.min(Math.abs(3), 5))}`;
         l_titleo = `${((minie ? 3 : 4) % (Math.max(parseInt(`${projectf}`), 10)))}`;
      for (let v = 0; v < 1; v++) {
         minie = !minie;
      }
      while (projectf == 3.59) {
          let thailandd = String.fromCharCode(109,97,120,98,105,116,114,97,116,101,95,110,95,50,52,0);
          let manifestM = String.fromCharCode(112,108,97,105,110,0);
         minie = minie && l_titleo.length < 66;
         thailandd = `${(String.fromCharCode(78,0) == thailandd ? manifestM.length : thailandd.length)}`;
         manifestM = `${thailandd.length}`;
         break;
      }
      while (minie) {
         l_titleo = `${l_titleo.length}`;
         break;
      }
      let package_kH = l_titleo.length >= 9597229;
      do {
          let pressurei = String.fromCharCode(115,105,100,120,0);
         l_titleo = `${pressurei.length}`;
         if (package_kH) {
            break;
         }
      } while (package_kH && (4.16 == projectf));
      liver -= parseFloat(`${klevinv.size}`);
      klevinv = new Map([[`${favoriteE.size}`, sport2]]);

    setIsRemoveDialogOpen(!isRemoveDialogOpen);
  }
  const onRemoveAccount = () => {
       let less4: Array<any> = [821, 171];
    let launch_ = 5.0;
    let fastforwardU = String.fromCharCode(118,95,49,55,95,115,116,114,111,107,101,115,0);
    let combined0 = false;
    let textk = String.fromCharCode(101,120,105,115,116,0);
    let goal6 = 2.0;
    let skipn: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,104,114,111,110,105,115,101,100,0),554], [String.fromCharCode(110,95,54,49,95,114,101,118,105,111,117,115,0),485], [String.fromCharCode(119,101,98,0),223]]);
    let megaphonei = 2.0;
    let muted_: Array<any> = [303, 846];
    let soundm = String.fromCharCode(105,112,118,95,114,95,54,51,0);
    let goalS: Array<any> = [947, 974, 986];
    let application7: Map<any, any> = new Map([[String.fromCharCode(106,95,56,50,95,108,101,110,103,116,104,115,0),499], [String.fromCharCode(116,111,120,121,122,0),366], [String.fromCharCode(113,117,105,99,107,0),37]]);
      less4.push(2 * parseInt(`${launch_}`));
   for (let q = 0; q < 2; q++) {
      launch_ /= Math.max(5, 1);
   }
   for (let q = 0; q < 1; q++) {
      launch_ += parseInt(`${goal6}`) >> (Math.min(Math.abs(1), 5));
   }
       let borderlessE = false;
       let redirectg: Map<any, any> = new Map([[String.fromCharCode(109,95,49,53,95,99,111,112,121,109,0),true ], [String.fromCharCode(117,95,50,54,95,112,117,98,108,105,99,0),true ], [String.fromCharCode(115,99,111,114,101,0),true ]]);
       let foregroundr = 3;
      while (Array.from(redirectg.values()).includes(foregroundr)) {
         foregroundr <<= Math.min(Math.abs(2), 4);
         break;
      }
      if ((4 >> (Math.min(2, Math.abs(foregroundr)))) <= 5 && 1 <= (foregroundr >> (Math.min(Math.abs(4), 1)))) {
          let interstitialY = 5;
          let expandk = 3;
          let private_cs = 0.0;
          let scoreh = String.fromCharCode(104,105,115,116,111,114,121,0);
          let incidentn = 5.0;
         redirectg.set(`${borderlessE}`, foregroundr);
         interstitialY &= 3;
         expandk >>= Math.min(Math.abs(expandk % (Math.max(parseInt(`${private_cs}`), 5))), 1);
         private_cs += parseFloat(`${parseInt(`${private_cs}`) % (Math.max(parseInt(`${incidentn}`), 6))}`);
         scoreh += `${3 ^ expandk}`;
         incidentn *= parseFloat(`${interstitialY - 3}`);
      }
       let humiditya: Array<any> = [String.fromCharCode(117,98,108,105,99,0), String.fromCharCode(108,111,116,116,105,101,112,97,114,115,101,114,0)];
       let less3: Array<any> = [865, 492, 488];
         redirectg.set(`${foregroundr}`, redirectg.size);
      for (let j = 0; j < 3; j++) {
         redirectg = new Map([[`${less3.length}`, less3.length]]);
      }
         less3.push(2 * humiditya.length);
         redirectg = new Map([[`${less3.length}`, less3.length]]);
       let emojiP = 3;
       let popupu = 4;
      while (foregroundr < 2 && (2 - foregroundr) < 5) {
         borderlessE = (less3.length % (Math.max(8, emojiP))) == 95;
         break;
      }
      skipn.set(`${launch_}`, redirectg.size);
      textk += `${3 ^ muted_.length}`;
      fastforwardU += "1";
       let awaya = 5;
       let accepteda: Map<any, any> = new Map([[String.fromCharCode(117,110,115,112,101,99,105,102,105,101,100,0),true ], [String.fromCharCode(111,95,55,56,95,109,97,110,105,102,101,115,116,0),false ]]);
         awaya >>= Math.min(Math.abs(accepteda.size - 2), 3);
      if (!Array.from(accepteda.values()).includes(awaya)) {
         awaya <<= Math.min(1, Math.abs(2 / (Math.max(7, awaya))));
      }
          let crownp = String.fromCharCode(98,105,110,116,101,120,116,0);
         awaya %= Math.max(3, accepteda.size << (Math.min(Math.abs(3), 5)));
         crownp += `${crownp.length + 2}`;
      let modalf = accepteda.size <= 6560309;
      do {
         accepteda.set(`${awaya}`, awaya / (Math.max(accepteda.size, 8)));
         if (modalf) {
            break;
         }
      } while (modalf && ((4 + awaya) == 5));
         accepteda = new Map([[`${accepteda.size}`, accepteda.size]]);
         accepteda = new Map([[`${accepteda.size}`, 1]]);
      textk = `${awaya}`;
       let sheetZ = String.fromCharCode(103,114,111,117,112,115,0);
       let colorsK = false;
      if (!colorsK) {
         sheetZ += `${2 & sheetZ.length}`;
      }
         colorsK = ((sheetZ.length + (!colorsK ? sheetZ.length : 65)) == 65);
      while (3 == sheetZ.length || !colorsK) {
          let kuaishouB = String.fromCharCode(114,95,53,57,95,98,105,110,111,109,105,97,108,0);
          let predictionA: Array<any> = [523, 969];
          let forwardj = true;
         colorsK = kuaishouB.includes(`${colorsK}`);
         kuaishouB += `${((forwardj ? 5 : 5) / (Math.max(10, predictionA.length)))}`;
         predictionA = [predictionA.length - 1];
         break;
      }
      let baidul = colorsK ? !colorsK : colorsK;
      do {
         colorsK = sheetZ.length == 63;
         if (baidul) {
            break;
         }
      } while (baidul && (!sheetZ.endsWith(`${colorsK}`)));
      while (!sheetZ.includes(`${colorsK}`)) {
          let orange0 = String.fromCharCode(110,95,57,49,95,115,105,109,112,108,101,114,101,97,100,0);
         sheetZ += `${1 - sheetZ.length}`;
         orange0 = `${orange0.length}`;
         break;
      }
         sheetZ = `${3 % (Math.max(8, sheetZ.length))}`;
      combined0 = launch_ <= 19.1;
      textk = `${2 << (Math.min(4, muted_.length))}`;
      combined0 = skipn.size < 22 && 40.74 < megaphonei;
       let suggestionK = false;
       let largeK = 4.0;
         suggestionK = !suggestionK;
         largeK += ((suggestionK ? 2 : 2) ^ parseInt(`${largeK}`));
      let materialO = 6909218.0 >= largeK;
      do {
         largeK -= (parseInt(`${largeK}`) & (suggestionK ? 5 : 3));
         if (materialO) {
            break;
         }
      } while (materialO && (!suggestionK && 3.9 == (largeK / 2.31)));
      for (let g = 0; g < 2; g++) {
         suggestionK = !suggestionK;
      }
       let serviceG: Map<any, any> = new Map([[String.fromCharCode(114,101,97,115,111,110,115,0),157], [String.fromCharCode(115,101,108,101,99,116,105,111,110,115,95,101,95,54,51,0),500], [String.fromCharCode(113,95,51,95,114,105,118,97,116,101,0),430]]);
      let downloading5 = suggestionK ? !suggestionK : suggestionK;
      do {
         suggestionK = 40.9 > largeK;
         if (downloading5) {
            break;
         }
      } while (downloading5 && ((2 << (Math.min(4, Math.abs(serviceG.size)))) >= 5));
      combined0 = launch_ >= 22.9;

    setTimeout(() => {

   if (launch_ < 3.16) {
       let submitx = String.fromCharCode(97,115,115,105,103,110,109,101,110,116,95,119,95,53,56,0);
       let filled9: Array<any> = [String.fromCharCode(97,117,116,111,109,97,116,105,99,0), String.fromCharCode(118,109,97,102,109,111,116,105,111,110,0), String.fromCharCode(99,104,97,105,110,101,100,0)];
       let modityL = true;
       let pressurea = String.fromCharCode(104,97,110,100,101,114,0);
       let basketballV = String.fromCharCode(118,95,53,95,105,109,112,114,101,115,115,105,111,110,115,0);
         modityL = ((pressurea.length << (Math.min(1, Math.abs((modityL ? 1 : pressurea.length))))) >= 1);
      while ((2 / (Math.max(10, filled9.length))) <= 3 || 2 <= (filled9.length / (Math.max(submitx.length, 3)))) {
         filled9 = [filled9.length];
         break;
      }
      let selectedx = modityL ? !modityL : modityL;
      do {
         modityL = basketballV.length > 42 && !modityL;
         if (selectedx) {
            break;
         }
      } while (selectedx && (pressurea.startsWith(`${modityL}`)));
          let fieldn = true;
          let away1: Map<any, any> = new Map([[String.fromCharCode(105,110,116,108,101,0),String.fromCharCode(99,95,55,54,95,108,109,108,109,0)], [String.fromCharCode(119,97,105,116,101,114,0),String.fromCharCode(114,101,105,110,105,116,0)], [String.fromCharCode(115,121,115,116,101,109,100,101,112,101,110,100,101,110,116,0),String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,115,0)]]);
          let upgrades = String.fromCharCode(114,101,115,117,108,116,105,110,103,95,100,95,57,51,0);
         basketballV += `${away1.size}`;
         fieldn = upgrades.length <= 67 || fieldn;
         away1 = new Map([[`${fieldn}`, (2 | (fieldn ? 3 : 3))]]);
         upgrades += `${(upgrades == String.fromCharCode(52,0) ? upgrades.length : (fieldn ? 5 : 4))}`;
      let downj = pressurea == String.fromCharCode(119,104,117,48,103,115,108,105,0);
      do {
         pressurea = "1";
         if (downj) {
            break;
         }
      } while (downj && (pressurea.includes(submitx)));
          let confirmation1: Map<any, any> = new Map([[String.fromCharCode(115,112,114,101,97,100,0),537], [String.fromCharCode(111,102,102,105,99,105,97,108,0),743], [String.fromCharCode(98,108,117,101,0),185]]);
          let calendary = String.fromCharCode(97,95,52,52,95,106,112,101,103,116,114,97,110,0);
         pressurea = `${confirmation1.size}`;
         confirmation1.set(calendary, calendary.length);
      if (submitx.length <= filled9.length) {
         submitx += `${submitx.length}`;
      }
          let u_positiong = false;
          let build6 = String.fromCharCode(114,101,111,114,100,101,114,97,98,108,101,0);
         modityL = (!u_positiong ? modityL : !u_positiong);
         build6 = `${build6.length}`;
         filled9 = [basketballV.length];
          let related4: Map<any, any> = new Map([[String.fromCharCode(98,97,115,101,112,111,105,110,116,0),true ], [String.fromCharCode(114,111,103,114,101,115,115,0),false ], [String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,95,101,95,55,51,0),true ]]);
          let goalU = true;
         basketballV += `${related4.size}`;
      if (basketballV.length <= 2) {
          let customW = String.fromCharCode(97,95,53,54,95,97,114,98,105,116,101,114,0);
          let mode7 = String.fromCharCode(114,101,109,117,120,95,110,95,51,57,0);
          let showP = 2.0;
          let configm = 0.0;
          let subsI = String.fromCharCode(110,111,110,102,97,116,97,108,95,54,95,51,57,0);
         submitx += `${customW.length << (Math.min(3, subsI.length))}`;
         customW = `${2 & parseInt(`${showP}`)}`;
         mode7 += `${parseInt(`${showP}`) + 1}`;
         configm /= Math.max(4, parseInt(`${configm}`));
         subsI += `${(String.fromCharCode(118,0) == mode7 ? mode7.length : parseInt(`${showP}`))}`;
      }
          let floaterp = 4.0;
         submitx = `${(submitx == String.fromCharCode(99,0) ? filled9.length : submitx.length)}`;
         floaterp += parseInt(`${floaterp}`);
          let catalogE = 1.0;
          let libcrashsdk8 = String.fromCharCode(115,105,103,110,97,108,105,110,103,0);
          let analytics0 = String.fromCharCode(99,114,101,100,105,98,105,108,105,116,121,0);
         submitx = `${submitx.length / (Math.max(6, pressurea.length))}`;
         catalogE /= Math.max(3, parseFloat(`${libcrashsdk8.length - analytics0.length}`));
         libcrashsdk8 = `${parseInt(`${catalogE}`)}`;
         analytics0 = `${libcrashsdk8.length << (Math.min(Math.abs(1), 2))}`;
      for (let z = 0; z < 2; z++) {
         submitx += `${(basketballV == String.fromCharCode(122,0) ? filled9.length : basketballV.length)}`;
      }
      for (let q = 0; q < 3; q++) {
         pressurea = "2";
      }
      goal6 *= 1 / (Math.max(parseInt(`${megaphonei}`), 2));
   }
      textk += `${(1 | (combined0 ? 3 : 4))}`;
   if (2.36 >= (launch_ / 1.10)) {
      combined0 = (megaphonei + launch_) > 6.73;
   }
   if (2 > soundm.length || 2 > fastforwardU.length) {
       let navigationn = false;
      let kuaishouz = navigationn ? !navigationn : navigationn;
      do {
          let wind3 = 4;
          let xvod0 = String.fromCharCode(99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,0);
          let fullx = 5.0;
         navigationn = navigationn || xvod0.length <= 51;
         wind3 <<= Math.min(1, Math.abs(3 | parseInt(`${fullx}`)));
         xvod0 = "3";
         fullx -= 2;
         if (kuaishouz) {
            break;
         }
      } while ((navigationn) && kuaishouz);
          let hongkongw = 0;
         navigationn = !navigationn;
         hongkongw |= 2 / (Math.max(2, hongkongw));
      if (!navigationn) {
         navigationn = !navigationn;
      }
      fastforwardU = `${parseInt(`${launch_}`)}`;
   }
       let analyticsQ = 0;
       let orangez = String.fromCharCode(105,110,115,101,114,116,101,100,95,97,95,55,0);
       let tumbnaild = String.fromCharCode(114,95,52,52,95,109,97,110,97,103,101,114,0);
      let switch_as = 8179809 >= analyticsQ;
      do {
          let controlU = 5.0;
          let delegate_t9R: Array<any> = [578, 354, 148];
          let renewW = String.fromCharCode(109,117,115,105,99,95,121,95,56,54,0);
          let downloaderD = String.fromCharCode(100,114,111,112,112,101,100,95,51,95,55,55,0);
          let overY = String.fromCharCode(108,105,98,115,104,105,110,101,0);
         analyticsQ *= orangez.length / 1;
         controlU -= parseFloat(`${1 << (Math.min(2, delegate_t9R.length))}`);
         delegate_t9R.push(delegate_t9R.length);
         renewW += `${overY.length & 1}`;
         downloaderD = "3";
         overY = `${renewW.length}`;
         if (switch_as) {
            break;
         }
      } while (((5 | orangez.length) == 1) && switch_as);
      let countdownW = String.fromCharCode(105,114,95,57,56,104,101,103,49,49,0) == orangez;
      do {
          let lcopy_h7 = String.fromCharCode(97,95,51,57,95,105,115,101,120,112,108,97,105,110,0);
         orangez += `${analyticsQ}`;
         lcopy_h7 = `${(String.fromCharCode(101,0) == lcopy_h7 ? lcopy_h7.length : lcopy_h7.length)}`;
         if (countdownW) {
            break;
         }
      } while ((!orangez.endsWith(tumbnaild)) && countdownW);
         analyticsQ %= Math.max(1, analyticsQ ^ orangez.length);
      while (orangez.length == 2) {
         orangez = `${analyticsQ}`;
         break;
      }
      let const_agj = orangez == String.fromCharCode(122,121,116,110,0);
      do {
          let rankU = String.fromCharCode(111,116,104,101,114,110,97,109,101,95,54,95,57,56,0);
         orangez += `${analyticsQ}`;
         rankU = `${1 & rankU.length}`;
         if (const_agj) {
            break;
         }
      } while ((tumbnaild != orangez) && const_agj);
      let sharedB = analyticsQ >= 7221500;
      do {
          let incidentL = String.fromCharCode(114,116,114,101,101,110,111,100,101,0);
         analyticsQ ^= (String.fromCharCode(49,0) == incidentL ? tumbnaild.length : incidentL.length);
         if (sharedB) {
            break;
         }
      } while ((3 < (analyticsQ & 2) && 4 < (2 & analyticsQ)) && sharedB);
      for (let x = 0; x < 1; x++) {
         orangez += `${(orangez == String.fromCharCode(76,0) ? orangez.length : analyticsQ)}`;
      }
      for (let h = 0; h < 2; h++) {
         analyticsQ <<= Math.min(1, Math.abs((String.fromCharCode(104,0) == tumbnaild ? tumbnaild.length : orangez.length)));
      }
      while (orangez.endsWith(`${analyticsQ}`)) {
         analyticsQ /= Math.max(1 * analyticsQ, 2);
         break;
      }
      combined0 = soundm.length == 36 || !combined0;
      fastforwardU += `${fastforwardU.length >> (Math.min(5, Math.abs(parseInt(`${launch_}`))))}`;
      less4.push(muted_.length);
   if ((4 ^ less4.length) == 1) {
      less4 = [muted_.length];
   }
   if (1 <= (less4.length % (Math.max(3, 5))) && less4.length <= 3) {
       let detail0 = String.fromCharCode(100,105,105,110,95,118,95,55,53,0);
       let grayN = 2.0;
         grayN -= parseFloat(`${3 * parseInt(`${grayN}`)}`);
      if (grayN > parseFloat(`${detail0.length}`)) {
         detail0 += `${(detail0 == String.fromCharCode(75,0) ? parseInt(`${grayN}`) : detail0.length)}`;
      }
      for (let f = 0; f < 3; f++) {
          let commone = String.fromCharCode(107,95,56,51,95,114,103,98,97,121,99,111,99,103,0);
          let lessy = 0.0;
         detail0 += "1";
         commone = "3";
         lessy += commone.length;
      }
         detail0 = `${(detail0 == String.fromCharCode(107,0) ? parseInt(`${grayN}`) : detail0.length)}`;
      if (!detail0.startsWith(`${grayN}`)) {
          let smallp = true;
          let referreri = 1.0;
         detail0 += `${detail0.length}`;
         smallp = referreri < 94.95;
         referreri *= parseInt(`${referreri}`) | 1;
      }
         grayN *= parseFloat(`${1 & detail0.length}`);
      less4.push(1);
   }
      megaphonei += parseFloat(`${2 ^ textk.length}`);
       let lessM = 0;
         lessM &= 1;
         lessM /= Math.max(5, lessM + lessM);
       let submitc = 3.0;
      combined0 = textk.length < fastforwardU.length;
      ttGray.showToast('我们将在3个工作日内处理您注销请求，请注意您的邮箱，在此期间您可以继续登录');
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
       let searchz: Array<any> = [998, 348, 981];
    let whiteL = false;
    let subsL = String.fromCharCode(103,114,101,121,115,95,113,95,54,57,0);
    let orientationM = true;
    let areaK = 3;
    let confirmationM = 2.0;
    let predictionh = 2.0;
    let mbnativeT = 3.0;
    let topicE = 3.0;
      areaK >>= Math.min(Math.abs((parseInt(`${mbnativeT}`) | (orientationM ? 4 : 3))), 5);
   for (let c = 0; c < 3; c++) {
      areaK += parseInt(`${mbnativeT}`);
   }
   let apple3 = 8158593.0 >= topicE;
   do {
      topicE /= Math.max(parseFloat(`${parseInt(`${confirmationM}`)}`), 3);
      if (apple3) {
         break;
      }
   } while (apple3 && (1.5 == predictionh));
       let viewsw: Map<any, any> = new Map([[String.fromCharCode(115,114,99,0),860], [String.fromCharCode(115,95,54,51,95,100,110,120,104,100,101,110,99,0),441], [String.fromCharCode(99,104,101,99,107,105,110,95,55,95,56,57,0),177]]);
       let main_y6: Array<any> = [String.fromCharCode(101,114,114,111,114,115,0), String.fromCharCode(102,114,101,101,100,117,109,112,98,117,102,102,101,114,0)];
       let darkX = String.fromCharCode(108,95,52,53,95,102,105,110,100,110,101,97,114,109,118,0);
       let checkbox8 = 2;
      let tumbnailt = 9213409 >= viewsw.size;
      do {
         viewsw = new Map([[`${main_y6.length}`, darkX.length]]);
         if (tumbnailt) {
            break;
         }
      } while ((darkX.includes(`${viewsw.size}`)) && tumbnailt);
         main_y6.push(checkbox8 * 2);
       let hooks = String.fromCharCode(115,111,99,107,101,116,0);
          let sharei: Map<any, any> = new Map([[String.fromCharCode(117,110,104,97,110,100,108,101,100,0),395], [String.fromCharCode(97,100,105,100,0),626]]);
          let mbnativeadvancedX = String.fromCharCode(108,95,52,56,95,109,115,105,122,101,0);
         darkX += `${main_y6.length / 3}`;
         sharei.set(mbnativeadvancedX, sharei.size);
         mbnativeadvancedX = `${mbnativeadvancedX.length + sharei.size}`;
         checkbox8 <<= Math.min(darkX.length, 3);
      for (let k = 0; k < 2; k++) {
          let dialogD = String.fromCharCode(111,95,57,53,95,108,111,103,102,110,0);
          let package_7mo = false;
          let footballF: Map<any, any> = new Map([[String.fromCharCode(114,101,118,97,108,105,100,97,116,101,100,0),true ], [String.fromCharCode(122,95,55,56,95,99,104,101,99,107,101,114,0),true ], [String.fromCharCode(116,95,54,55,95,115,116,114,105,110,103,98,117,102,102,101,114,0),true ]]);
          let gesturer = 2.0;
          let photoa = 2.0;
         hooks = `${2 >> (Math.min(1, hooks.length))}`;
         dialogD = `${parseInt(`${photoa}`) ^ 2}`;
         package_7mo = 55.2 > photoa && 55.2 > gesturer;
         footballF.set(`${package_7mo}`, ((package_7mo ? 3 : 3) / (Math.max(parseInt(`${gesturer}`), 5))));
      }
         checkbox8 /= Math.max(4, 1);
      while ((darkX.length % 3) > 1 && (main_y6.length % 3) > 3) {
         darkX = "1";
         break;
      }
      predictionh -= (parseFloat(`${(whiteL ? 2 : 1) ^ darkX.length}`));
   for (let d = 0; d < 2; d++) {
       let backgroundT = 0.0;
       let feedback2 = 0.0;
         backgroundT += parseFloat(`${1}`);
          let eactg: Array<any> = [String.fromCharCode(116,111,111,108,0), String.fromCharCode(98,117,109,112,0)];
          let fullX = 2.0;
          let libcrashsdkA = true;
         feedback2 /= Math.max(parseFloat(`${parseInt(`${fullX}`)}`), 5);
         eactg.push(eactg.length);
         libcrashsdkA = eactg.includes(libcrashsdkA);
         feedback2 -= parseFloat(`${parseInt(`${backgroundT}`)}`);
      if ((1.96 - backgroundT) > 3.98 && 4.62 > (1.96 + backgroundT)) {
         backgroundT *= parseFloat(`${parseInt(`${backgroundT}`) * 2}`);
      }
          let turn5 = false;
          let confirmationF = false;
         feedback2 += parseFloat(`${parseInt(`${feedback2}`) << (Math.min(2, Math.abs(3)))}`);
         turn5 = (!turn5 ? confirmationF : !turn5);
         confirmationF = !turn5;
      let plusW = 7439041.0 >= feedback2;
      do {
          let filterp = String.fromCharCode(105,110,105,116,97,108,105,122,101,95,99,95,50,48,0);
          let modalR: Map<any, any> = new Map([[String.fromCharCode(101,95,49,48,48,0),995], [String.fromCharCode(114,95,54,56,95,101,99,116,97,110,103,108,101,0),848], [String.fromCharCode(110,97,116,105,111,110,97,108,105,116,121,0),697]]);
          let handleru = String.fromCharCode(120,100,97,105,0);
         feedback2 *= parseFloat(`${parseInt(`${backgroundT}`)}`);
         filterp = "2";
         modalR.set(handleru, handleru.length - modalR.size);
         if (plusW) {
            break;
         }
      } while (plusW && (5.52 <= (feedback2 + backgroundT) || (5.52 - feedback2) <= 5.56));
      confirmationM /= Math.max(2, 2 << (Math.min(Math.abs(parseInt(`${feedback2}`)), 4)));
   }
       let analyticE = String.fromCharCode(97,102,102,105,110,105,116,121,0);
       let checkboxt = 5;
      for (let x = 0; x < 1; x++) {
          let b_managerI = 2;
          let eventK = String.fromCharCode(115,117,98,0);
          let transferV = 5.0;
          let currentS = 0.0;
         checkboxt <<= Math.min(Math.abs(2 ^ b_managerI), 2);
         b_managerI %= Math.max(5, eventK.length);
         eventK += `${eventK.length + 3}`;
         transferV += parseFloat(`${eventK.length}`);
         currentS /= Math.max(4, 3 % (Math.max(parseInt(`${currentS}`), 10)));
      }
       let sheet5 = String.fromCharCode(115,101,103,0);
       let roboto2 = String.fromCharCode(98,97,110,100,105,110,103,0);
      while (!roboto2.includes(`${checkboxt}`)) {
         roboto2 = `${roboto2.length << (Math.min(2, Math.abs(checkboxt)))}`;
         break;
      }
         sheet5 += `${roboto2.length}`;
      if (2 <= (analyticE.length << (Math.min(2, Math.abs(checkboxt)))) || (2 << (Math.min(1, analyticE.length))) <= 5) {
          let login_ = String.fromCharCode(115,116,97,110,100,97,114,100,105,122,101,0);
          let register_a2r = true;
          let floaterr = String.fromCharCode(101,115,116,105,109,97,116,105,111,110,0);
          let streaming6 = String.fromCharCode(117,110,113,117,97,110,116,105,122,101,0);
          let skipB = String.fromCharCode(112,111,115,116,101,114,0);
         analyticE += `${skipB.length / (Math.max(8, streaming6.length))}`;
         login_ += `${(login_ == String.fromCharCode(119,0) ? login_.length : (register_a2r ? 3 : 1))}`;
         register_a2r = 98 > login_.length;
         floaterr += `${((register_a2r ? 4 : 5))}`;
         streaming6 += `${floaterr.length - 3}`;
         skipB = "2";
      }
      while (3 <= (2 ^ sheet5.length) && (checkboxt ^ 2) <= 3) {
          let homeH = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,0);
          let mintegrald: Map<any, any> = new Map([[String.fromCharCode(118,100,101,99,0),String.fromCharCode(100,121,110,108,105,110,107,0)], [String.fromCharCode(104,95,54,55,95,112,114,111,99,99,101,115,115,0),String.fromCharCode(99,97,99,104,101,102,108,117,115,104,95,103,95,54,51,0)], [String.fromCharCode(105,110,116,101,114,112,111,108,97,116,97,98,108,101,95,103,95,49,57,0),String.fromCharCode(105,112,97,100,0)]]);
          let modelsj = 4.0;
          let livek = 3.0;
          let sportsA = 0;
         checkboxt <<= Math.min(2, Math.abs(2 | roboto2.length));
         homeH = "1";
         mintegrald = new Map([[`${mintegrald.size}`, mintegrald.size]]);
         modelsj -= 1;
         livek += parseInt(`${modelsj}`);
         sportsA += parseInt(`${livek}`);
         break;
      }
      subsL += `${subsL.length >> (Math.min(3, Math.abs(parseInt(`${confirmationM}`))))}`;
   let action6 = subsL == String.fromCharCode(57,51,109,105,115,0);
   do {
      subsL += `${(parseInt(`${predictionh}`) << (Math.min(1, Math.abs((orientationM ? 3 : 2)))))}`;
      if (action6) {
         break;
      }
   } while ((3 < subsL.length) && action6);
       let teamP = 2.0;
       let appleQ = true;
       let shrinku = true;
      if (shrinku && !appleQ) {
          let servicel = String.fromCharCode(100,105,118,105,100,101,100,0);
          let colorsg: Array<any> = [157, 463];
          let sharedI = 3.0;
         appleQ = !appleQ;
         servicel = `${colorsg.length >> (Math.min(Math.abs(2), 2))}`;
         colorsg = [2 & parseInt(`${sharedI}`)];
         sharedI /= Math.max(parseFloat(`${servicel.length | 1}`), 4);
      }
      if ((3.69 + teamP) < 5.80) {
         appleQ = appleQ && !shrinku;
      }
          let reactI = 4.0;
          let fieldS: Map<any, any> = new Map([[String.fromCharCode(114,95,53,95,97,108,108,111,119,0),String.fromCharCode(105,110,116,101,114,99,101,112,116,111,114,0)], [String.fromCharCode(108,111,99,97,108,105,116,121,0),String.fromCharCode(101,120,116,114,97,95,54,95,55,0)], [String.fromCharCode(101,118,105,99,101,0),String.fromCharCode(116,104,97,116,0)]]);
         appleQ = shrinku && 12.86 < teamP;
         reactI *= fieldS.size;
         fieldS.set(`${reactI}`, fieldS.size - parseInt(`${reactI}`));
          let bannerX: Map<any, any> = new Map([[String.fromCharCode(102,112,117,116,115,0),82], [String.fromCharCode(109,101,97,115,117,114,101,100,0),124], [String.fromCharCode(114,101,102,99,111,117,110,116,101,114,95,97,95,50,53,0),202]]);
         teamP *= bannerX.size;
      while ((teamP - 4.92) < 3.90 && teamP < 4.92) {
          let temperatureY: Array<any> = [793, 470];
         shrinku = (39 >= (temperatureY.length | (!appleQ ? 39 : temperatureY.length)));
         break;
      }
      for (let x = 0; x < 1; x++) {
          let transfern: Map<any, any> = new Map([[String.fromCharCode(110,97,110,112,97,95,49,95,54,0),601], [String.fromCharCode(116,101,115,116,101,114,0),145], [String.fromCharCode(97,110,97,103,108,121,112,104,0),972]]);
          let shirt3 = String.fromCharCode(115,104,117,116,116,105,110,103,0);
          let upgraden = String.fromCharCode(118,115,99,97,108,101,0);
          let topic1: Array<any> = [545, 813, 383];
         teamP += shirt3.length / (Math.max(2, 9));
         transfern = new Map([[`${transfern.size}`, 2]]);
         shirt3 = "1";
         upgraden = `${transfern.size % (Math.max(3, 8))}`;
         topic1 = [topic1.length & upgraden.length];
      }
          let benefitV: Map<any, any> = new Map([[String.fromCharCode(115,104,97,108,108,0),String.fromCharCode(110,95,51,56,95,114,101,113,117,101,115,116,115,0)], [String.fromCharCode(97,98,103,114,95,106,95,52,49,0),String.fromCharCode(109,117,120,101,114,0)], [String.fromCharCode(112,102,114,97,109,101,0),String.fromCharCode(108,97,121,111,121,116,0)]]);
          let roomF = String.fromCharCode(112,111,115,116,99,111,100,101,0);
          let backa = String.fromCharCode(98,108,101,110,100,109,111,100,101,95,111,95,51,50,0);
         appleQ = (((appleQ ? 89 : roomF.length) * roomF.length) <= 89);
         benefitV = new Map([[`${benefitV.size}`, (backa == String.fromCharCode(82,0) ? benefitV.size : backa.length)]]);
          let dialogL = String.fromCharCode(105,95,56,49,95,115,115,116,104,114,101,115,104,0);
          let stringsG = String.fromCharCode(120,99,116,101,115,116,0);
         teamP *= stringsG.length;
         dialogL += `${dialogL.length ^ 1}`;
         stringsG += `${dialogL.length + 2}`;
      for (let b = 0; b < 2; b++) {
         shrinku = !shrinku;
      }
      mbnativeT += parseFloat(`${2}`);
      areaK -= 3;
      topicE /= Math.max(1, (parseFloat(`${(whiteL ? 2 : 2) << (Math.min(Math.abs(parseInt(`${predictionh}`)), 5))}`)));

    const user = await ttTramini.guestLogin();

      whiteL = 53.98 <= topicE && whiteL;
       let emojiW = String.fromCharCode(118,97,108,105,100,97,116,105,111,110,95,107,95,49,51,0);
       let related9 = 4.0;
       let profilem = 2.0;
          let stringsw: Array<any> = [855, 635];
         related9 *= emojiW.length + 1;
         stringsw = [stringsw.length % (Math.max(10, stringsw.length))];
         profilem -= 3 + parseInt(`${profilem}`);
      let circlen = 5525545.0 <= profilem;
      do {
         profilem /= Math.max(4, 2 / (Math.max(parseInt(`${profilem}`), 1)));
         if (circlen) {
            break;
         }
      } while (circlen && (3.30 <= (profilem - 3.51)));
         related9 += parseInt(`${related9}`) + 1;
       let renewG = 5;
       let debugk = 5;
      let singaporeT = related9 <= 6197586.0;
      do {
          let android3 = String.fromCharCode(113,122,98,105,110,0);
          let footbally: Map<any, any> = new Map([[String.fromCharCode(97,99,99,114,117,101,0),false ], [String.fromCharCode(114,97,110,100,0),true ]]);
          let descS = true;
          let reactnativejst = false;
         related9 *= emojiW.length * 2;
         android3 = "2";
         footbally = new Map([[`${footbally.size}`, footbally.size]]);
         descS = !descS;
         reactnativejst = footbally.get(`${descS}`) == null;
         if (singaporeT) {
            break;
         }
      } while (((3.16 - related9) >= 3.39) && singaporeT);
      if (1.78 == (profilem / (Math.max(5.51, 7))) || 5.51 == (profilem / (Math.max(4, debugk)))) {
         profilem *= 1 * emojiW.length;
      }
      for (let q = 0; q < 3; q++) {
         debugk += 1 & emojiW.length;
      }
      let yingU = 8131095.0 <= profilem;
      do {
         profilem -= parseInt(`${profilem}`) | 1;
         if (yingU) {
            break;
         }
      } while (yingU && (3.82 <= profilem));
      predictionh -= (parseFloat(`${searchz.length + (whiteL ? 5 : 1)}`));
      searchz.push((parseInt(`${topicE}`) - (whiteL ? 3 : 1)));
   while ((4 & subsL.length) == 2 && 5 == (subsL.length & 4)) {
      subsL += "2";
      break;
   }
   let type_s3Y = subsL == String.fromCharCode(102,116,49,48,114,115,112,53,117,0);
   do {
      subsL += `${((whiteL ? 1 : 2) % (Math.max(parseInt(`${predictionh}`), 5)))}`;
      if (type_s3Y) {
         break;
      }
   } while (type_s3Y && (subsL.length <= parseInt(`${predictionh}`)));
       let white7: Map<any, any> = new Map([[String.fromCharCode(115,108,111,112,0),970], [String.fromCharCode(100,101,102,97,117,108,116,115,0),521], [String.fromCharCode(115,101,99,117,114,101,0),363]]);
         white7.set(`${white7.size}`, 1);
      for (let y = 0; y < 2; y++) {
         white7.set(`${white7.size}`, white7.size % (Math.max(7, white7.size)));
      }
         white7.set(`${white7.size}`, white7.size * 2);
      searchz = [searchz.length * parseInt(`${mbnativeT}`)];
   for (let c = 0; c < 3; c++) {
       let entryH = String.fromCharCode(112,114,101,115,101,110,99,101,115,0);
       let shareF = false;
       let albums = true;
         entryH = `${((albums ? 3 : 5) % (Math.max((shareF ? 1 : 4), 10)))}`;
      while (entryH.length <= 3) {
         entryH = `${(entryH.length % (Math.max(1, (shareF ? 4 : 5))))}`;
         break;
      }
      areaK &= parseInt(`${mbnativeT}`) % (Math.max(5, parseInt(`${predictionh}`)));
   }
       let modeC = String.fromCharCode(115,104,114,117,110,107,0);
      while (!modeC.includes(modeC)) {
          let mailL: Map<any, any> = new Map([[String.fromCharCode(101,120,112,108,97,105,110,0),true ], [String.fromCharCode(109,101,109,98,101,114,115,0),false ]]);
          let completeE = String.fromCharCode(109,97,110,105,112,117,108,97,116,101,0);
          let ying4: Map<any, any> = new Map([[String.fromCharCode(98,97,115,101,110,97,109,101,0),true ], [String.fromCharCode(102,105,108,108,101,114,0),true ]]);
         modeC = "1";
         mailL = new Map([[`${ying4.size}`, ying4.size >> (Math.min(Math.abs(2), 3))]]);
         completeE = `${mailL.size << (Math.min(Math.abs(3), 5))}`;
         break;
      }
         modeC += `${modeC.length ^ 2}`;
      if (2 > modeC.length || modeC.length > 2) {
         modeC += `${modeC.length}`;
      }
      subsL = `${(parseInt(`${mbnativeT}`) * (orientationM ? 3 : 4))}`;
      orientationM = orientationM && searchz.length < 2;
       let loadingN = 5;
         loadingN &= 3;
         loadingN |= 3 >> (Math.min(3, Math.abs(loadingN)));
      if ((loadingN << (Math.min(Math.abs(loadingN), 2))) <= 2) {
         loadingN &= loadingN << (Math.min(Math.abs(1), 1));
      }
      confirmationM -= ((whiteL ? 2 : 3) - parseInt(`${confirmationM}`));

    await dispatch(addUserAuthState(user));
  };

  const userState = useSelector<ttGoal>('userReducer');

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

          {ttFast.isLogin(userState.user) &&
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
              {ttFast.isLogin(userState.user) &&
                <ShowMoreButton text="注销账号" onPress={toggleRemoveAccountDialog} />
              }
            </View>
          </View>
        </View>
        {ttFast.isLogin(userState.user) && (
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
