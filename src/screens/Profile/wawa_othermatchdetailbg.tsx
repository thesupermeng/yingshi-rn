import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Modal,
} from "react-native";
import ScreenContainer from "../../components/container/wawa_nterstitial_iconpipexpand";
import { RootStackScreenProps } from "@type/wawa_iconnewchat";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";

import TitleWithBackButtonHeader from "../../components/header/wawa_matchinactive_header";
import { Button, Dialog } from "@rneui/themed";
import ShowMoreButton from "../../components/button/wawa_iconlogout_button";
import NotificationModal from "../../components/modal/wawa_lock";
import MoreArrow from "@static/images/combinePredictionbuttonSelect.svg";
import ConfirmationModal from "../../components/modal/wawa_iconedit";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/wawa_root";
import { clearStorageMemory } from "@redux/actions/wawa_apple_settings";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { removeUserAuthState } from "@redux/actions/wawa_loginsuccess";
import { changeScreenAction } from "@redux/actions/wawa_related";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";

import { APP_VERSION, IS_OTHER_SKIN } from "@utility/wawa_iconpointscore";
import { wawaBackground } from "@redux/reducers/wawa_comment";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { wawaGreyChange } from "@utility/wawa_graphics_manager";
import { clearMinivodApiCache } from "../../utils/wawa_notificationfillempty_models";
import { wawaEvent } from "../../api/wawa_refreshborderless_found";
import { addUserAuthState } from "@redux/actions/wawa_loginsuccess";
import { wawaPhoneControls } from '@redux/reducers/wawa_umeng';
import { wawaLibglog } from "@models/wawa_refreshborderless_found";

export default ({ navigation }: RootStackScreenProps<"设置">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isVersionDialogOpen, setIsVersionDialogOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const [subtitle1, setSubtitle1] = useState("当前已是最新版本" + APP_VERSION);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false); 

  const settingsReducer: wawaBackground = useAppSelector(
    ({ settingsReducer }: wawaIconsubssuccess) => settingsReducer
  );

  const dispatch = useAppDispatch();

  const toggleLogoutDialog = () => {
       let awayiconK = 0.0;
    let bellreminderK = 2;
    let crownD = String.fromCharCode(116,114,97,110,115,99,111,100,101,95,54,95,55,56,0);
    let otherc: Array<any> = [715, 368];
    let w_hasho = true;
    let plashk = 1.0;
    let borderlessf = String.fromCharCode(104,95,54,57,95,97,118,101,114,114,111,114,0);
    let fillk = String.fromCharCode(108,95,57,52,95,103,97,109,101,115,0);
    let active6: Map<any, any> = new Map([[String.fromCharCode(120,119,109,97,95,107,95,49,48,0),false ], [String.fromCharCode(122,95,53,48,95,108,111,103,111,117,114,108,0),true ]]);
    let unticku = 3.0;
    let dacccfaabfbcbadeebddcabacdffdbI = 0.0;
    let nterstitiali: Array<any> = [721, 322, 0];
    let libswscales: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,101,115,116,95,99,95,50,57,0),String.fromCharCode(99,111,110,115,117,109,101,114,95,52,95,53,53,0)], [String.fromCharCode(112,105,120,108,101,116,95,102,95,52,57,0),String.fromCharCode(112,95,50,57,95,105,112,108,99,111,110,118,107,101,114,110,101,108,0)]]);
    let chatbotphoton = true;
    let catalogG = String.fromCharCode(115,116,114,99,97,116,95,102,95,50,51,0);
    let iconchatsendK = 1.0;
    let homeiconm = String.fromCharCode(109,111,109,101,110,116,95,119,95,53,0);
    let predictionbuttonS = String.fromCharCode(97,102,102,105,110,105,116,105,101,115,95,119,95,49,54,0);
    let logouserz = true;
   for (let o = 0; o < 1; o++) {
       let profileframeb = String.fromCharCode(113,115,116,101,112,95,49,95,53,53,0);
       let traminiD = 5.0;
       let window_5B: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,108,95,111,95,51,53,0),false ], [String.fromCharCode(103,95,52,95,105,110,102,108,105,103,104,116,0),false ]]);
       let libcxxcomponentso = 4.0;
      while ((2.80 + traminiD) < 5.46) {
         traminiD -= parseFloat(`${3 & profileframeb.length}`);
         break;
      }
         window_5B = new Map([[`${window_5B.size}`, 2]]);
      while (3 > (5 | profileframeb.length) || (libcxxcomponentso + 2.43) > 5.83) {
          let refreshi = String.fromCharCode(117,95,53,54,95,119,111,114,107,105,110,103,0);
          let webviewZ = 5.0;
          let configureo = String.fromCharCode(98,95,52,55,95,115,97,119,0);
          let indicatorJ = String.fromCharCode(105,109,112,117,108,115,101,95,97,95,54,57,0);
         profileframeb += `${parseInt(`${libcxxcomponentso}`) & configureo.length}`;
         refreshi += `${indicatorJ.length}`;
         webviewZ -= parseFloat(`${1}`);
         configureo = `${refreshi.length}`;
         indicatorJ = `${parseInt(`${webviewZ}`)}`;
         break;
      }
          let shielddonee = String.fromCharCode(108,101,110,95,106,95,54,55,0);
          let configc = 2;
          let yingr = String.fromCharCode(105,110,103,101,116,97,100,100,114,95,100,95,56,57,0);
         profileframeb += `${yingr.length % 1}`;
         shielddonee += `${shielddonee.length - configc}`;
         configc /= Math.max(1 >> (Math.min(3, Math.abs(configc))), 1);
         yingr = `${(String.fromCharCode(56,0) == shielddonee ? configc : shielddonee.length)}`;
      for (let v = 0; v < 3; v++) {
         profileframeb = `${window_5B.size}`;
      }
       let typingZ: Array<any> = [816, 755, 540];
      if (profileframeb.length >= 3) {
         typingZ = [1 & parseInt(`${traminiD}`)];
      }
      if ((typingZ.length / (Math.max(2, 8))) <= 3 || 2 <= (typingZ.length * parseInt(`${traminiD}`))) {
         traminiD -= parseFloat(`${parseInt(`${traminiD}`) >> (Math.min(Math.abs(window_5B.size), 1))}`);
      }
       let zhuboX = 1;
      for (let y = 0; y < 3; y++) {
          let backwhitem = 4.0;
          let z_title7 = 5.0;
          let libavcodecN = String.fromCharCode(114,95,52,57,95,114,101,97,100,105,110,105,116,0);
         traminiD += parseFloat(`${3}`);
         backwhitem /= Math.max(2, libavcodecN.length);
         z_title7 *= 3;
         libavcodecN += `${parseInt(`${z_title7}`)}`;
      }
      for (let y = 0; y < 2; y++) {
         zhuboX %= Math.max(2, profileframeb.length * 1);
      }
          let searchbarP = 1.0;
          let aboutE = String.fromCharCode(115,111,108,118,101,114,95,104,95,53,0);
          let smallorangeman2 = String.fromCharCode(114,95,54,54,95,112,97,114,97,108,108,101,108,0);
         libcxxcomponentso += parseFloat(`${typingZ.length >> (Math.min(Math.abs(1), 1))}`);
         searchbarP *= parseFloat(`${aboutE.length % (Math.max(10, smallorangeman2.length))}`);
         aboutE = `${(aboutE == String.fromCharCode(120,0) ? parseInt(`${searchbarP}`) : aboutE.length)}`;
         smallorangeman2 += `${smallorangeman2.length}`;
      active6.set(`${traminiD}`, parseInt(`${traminiD}`));
   }
   let auto_80q = nterstitiali.length <= 8524058;
   do {
       let searcho = 1;
       let arrowU = 4.0;
      let orangedownarrowa = 7938862.0 >= arrowU;
      do {
         arrowU += parseFloat(`${searcho}`);
         if (orangedownarrowa) {
            break;
         }
      } while (orangedownarrowa && (arrowU >= searcho));
         arrowU /= Math.max(parseFloat(`${3}`), 5);
       let imagenomoredataW = 3.0;
         arrowU -= parseFloat(`${searcho + parseInt(`${arrowU}`)}`);
         arrowU += parseFloat(`${searcho}`);
      let plashb = 8849817.0 >= arrowU;
      do {
          let latnl = String.fromCharCode(99,117,114,114,95,97,95,51,54,0);
          let combine6 = String.fromCharCode(118,95,50,54,95,97,117,116,104,111,114,105,122,101,0);
         arrowU -= parseFloat(`${2 / (Math.max(5, searcho))}`);
         latnl = "3";
         combine6 += `${latnl.length | combine6.length}`;
         if (plashb) {
            break;
         }
      } while (plashb && (4.83 == (imagenomoredataW * 3)));
      nterstitiali = [2];
      if (auto_80q) {
         break;
      }
   } while (auto_80q && (active6.get(`${nterstitiali.length}`) == null));
   let dropdownb = otherc.length <= 9362392;
   do {
      otherc.push(otherc.length);
      if (dropdownb) {
         break;
      }
   } while (dropdownb && (crownD.startsWith(`${otherc.length}`)));
   for (let i = 0; i < 1; i++) {
      dacccfaabfbcbadeebddcabacdffdbI /= Math.max(4, parseFloat(`${otherc.length << (Math.min(Math.abs(3), 4))}`));
   }
   while ((plashk * 3.72) < 5.75) {
      bellreminderK %= Math.max((otherc.length & (w_hasho ? 4 : 1)), 2);
      break;
   }
   let defaultprofilepicg = awayiconK <= 7866530.0;
   do {
      awayiconK *= parseFloat(`${otherc.length + 1}`);
      if (defaultprofilepicg) {
         break;
      }
   } while (defaultprofilepicg && (2 == (4 / (Math.max(1, nterstitiali.length)))));
       let auto_k_3 = String.fromCharCode(102,95,55,57,95,99,111,109,112,101,110,115,97,116,105,111,110,0);
       let bggradientN = String.fromCharCode(102,116,118,109,111,95,57,95,52,48,0);
       let libglogS: Array<any> = [503, 383, 492];
       let gemfileV: Array<any> = [693, 79];
         gemfileV.push(2 ^ auto_k_3.length);
      while (bggradientN != auto_k_3) {
          let sentryk = false;
          let bgvipxvodJ: Array<any> = [423, 352, 742];
          let footballtrophyF = 1.0;
         auto_k_3 = `${bgvipxvodJ.length ^ 3}`;
         sentryk = !sentryk;
         bgvipxvodJ.push(3 / (Math.max(parseInt(`${footballtrophyF}`), 6)));
         footballtrophyF *= 2 % (Math.max(9, parseInt(`${footballtrophyF}`)));
         break;
      }
          let loginsuccessC = String.fromCharCode(114,108,111,116,116,105,101,99,111,109,109,111,110,95,98,95,52,53,0);
          let reviewU = String.fromCharCode(104,97,115,104,101,115,95,109,95,57,0);
          let becomep = false;
         auto_k_3 += `${loginsuccessC.length % (Math.max(9, auto_k_3.length))}`;
         loginsuccessC += `${((becomep ? 1 : 4))}`;
         reviewU = `${reviewU.length | 3}`;
         bggradientN = `${gemfileV.length / 3}`;
      let shirtq = 8065091 <= gemfileV.length;
      do {
         gemfileV.push(3);
         if (shirtq) {
            break;
         }
      } while ((1 == (gemfileV.length | 5) && (gemfileV.length | libglogS.length) == 5) && shirtq);
      active6.set(bggradientN, bggradientN.length << (Math.min(3, auto_k_3.length)));
       let matchdetailbg9 = 3;
          let wifirouterR = String.fromCharCode(97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,95,52,95,52,54,0);
          let graphicsG = 5.0;
         matchdetailbg9 /= Math.max(wifirouterR.length, 4);
         wifirouterR += `${parseInt(`${graphicsG}`)}`;
          let aboutz: Map<any, any> = new Map([[String.fromCharCode(109,95,56,52,95,115,116,117,102,102,110,100,0),293], [String.fromCharCode(101,120,104,97,117,115,116,105,118,101,95,55,95,55,53,0),810]]);
         matchdetailbg9 /= Math.max(aboutz.size << (Math.min(5, Math.abs(matchdetailbg9))), 3);
         matchdetailbg9 |= 1;
      awayiconK /= Math.max(4, parseFloat(`${1 & crownD.length}`));
   let reducer7 = borderlessf == String.fromCharCode(57,113,104,55,122,99,121,50,57,112,0);
   do {
       let basketballdetailsbgm = 5;
      if (basketballdetailsbgm == basketballdetailsbgm) {
         basketballdetailsbgm += basketballdetailsbgm << (Math.min(Math.abs(1), 4));
      }
      if ((4 / (Math.max(10, basketballdetailsbgm))) < 2) {
         basketballdetailsbgm ^= basketballdetailsbgm;
      }
      while ((2 & basketballdetailsbgm) >= 5) {
         basketballdetailsbgm %= Math.max(2, 2 * basketballdetailsbgm);
         break;
      }
      borderlessf = `${libswscales.size >> (Math.min(Math.abs(1), 1))}`;
      if (reducer7) {
         break;
      }
   } while (reducer7 && (fillk.startsWith(borderlessf)));
      nterstitiali = [otherc.length];
       let yellowredcard5 = true;
         yellowredcard5 = !yellowredcard5 && yellowredcard5;
      while (!yellowredcard5 || !yellowredcard5) {
          let m_managerY = 3;
         yellowredcard5 = m_managerY == 7;
         break;
      }
          let arrowrightM = 4.0;
          let settingc = false;
          let listj: Array<any> = [890, 919, 927];
         yellowredcard5 = settingc;
         arrowrightM *= parseFloat(`${listj.length ^ 3}`);
         listj = [parseInt(`${arrowrightM}`) << (Math.min(2, Math.abs(3)))];
      nterstitiali = [2 >> (Math.min(Math.abs(bellreminderK), 2))];
      borderlessf += "3";
       let shielddone5 = 2.0;
      for (let p = 0; p < 2; p++) {
          let liveendmodallogoC: Map<any, any> = new Map([[String.fromCharCode(122,95,56,53,95,99,111,115,105,103,110,97,116,111,114,105,101,115,0),449], [String.fromCharCode(97,95,49,53,95,115,121,109,101,118,101,110,0),724]]);
         shielddone5 -= parseFloat(`${parseInt(`${shielddone5}`)}`);
         liveendmodallogoC = new Map([[`${liveendmodallogoC.size}`, 3]]);
      }
      for (let j = 0; j < 3; j++) {
         shielddone5 -= parseFloat(`${3}`);
      }
         shielddone5 -= parseFloat(`${2 ^ parseInt(`${shielddone5}`)}`);
      crownD += "1";
       let rootG = String.fromCharCode(121,95,49,48,48,95,118,108,102,102,0);
          let orangeb = String.fromCharCode(110,95,53,55,95,102,116,115,97,117,120,0);
          let exampleimageh = String.fromCharCode(115,117,98,100,97,116,97,95,54,95,49,50,0);
         rootG = `${exampleimageh.length}`;
         orangeb += `${3 ^ orangeb.length}`;
         exampleimageh += `${orangeb.length}`;
          let mapbufferq = String.fromCharCode(114,95,49,55,95,97,114,103,118,0);
          let greytickR = 3;
          let basketballplayerplaceholderp: Map<any, any> = new Map([[String.fromCharCode(117,95,56,48,95,97,98,105,0),String.fromCharCode(99,95,57,56,95,103,114,101,121,115,0)], [String.fromCharCode(122,95,53,50,95,109,112,101,103,116,115,0),String.fromCharCode(109,95,56,52,95,115,104,97,112,101,115,0)], [String.fromCharCode(112,95,54,49,95,103,108,111,119,0),String.fromCharCode(120,95,57,95,108,105,107,101,0)]]);
         rootG = `${mapbufferq.length}`;
         mapbufferq += `${basketballplayerplaceholderp.size << (Math.min(Math.abs(2), 4))}`;
         greytickR += basketballplayerplaceholderp.size;
         rootG += `${rootG.length}`;
      unticku /= Math.max(3, 3);
      unticku -= parseInt(`${awayiconK}`) >> (Math.min(5, Math.abs(1)));
   let mutedU = 5508219 >= otherc.length;
   do {
      otherc.push(nterstitiali.length | 2);
      if (mutedU) {
         break;
      }
   } while (mutedU && (otherc.length > 4));
   while (2 >= crownD.length) {
      crownD = `${fillk.length << (Math.min(2, Math.abs(parseInt(`${dacccfaabfbcbadeebddcabacdffdbI}`))))}`;
      break;
   }
      bellreminderK ^= 3;
      w_hasho = libswscales.size == 15;
      chatbotphoton = 69 < borderlessf.length && crownD == String.fromCharCode(118,0);
      borderlessf += `${otherc.length}`;
       let sportp: Array<any> = [690, 367, 431];
       let datan: Map<any, any> = new Map([[String.fromCharCode(107,95,49,50,95,109,101,115,115,97,103,101,115,0),483], [String.fromCharCode(101,95,53,49,95,103,114,97,110,117,108,97,114,0),863], [String.fromCharCode(101,116,104,114,101,97,100,105,110,103,95,119,95,50,48,0),663]]);
       let homeactiveo = String.fromCharCode(115,95,57,49,95,105,110,99,108,117,100,101,100,0);
      let indicatorC = homeactiveo.length <= 7324003;
      do {
         homeactiveo = "1";
         if (indicatorC) {
            break;
         }
      } while (indicatorC && (1 <= (1 + datan.size)));
          let iconsubssuccess7 = true;
         sportp = [((iconsubssuccess7 ? 3 : 4) ^ homeactiveo.length)];
      if (!homeactiveo.endsWith(`${sportp.length}`)) {
         sportp = [sportp.length % 3];
      }
      for (let c = 0; c < 1; c++) {
          let orientationG = 0.0;
          let zhengpianW = String.fromCharCode(119,97,108,107,116,104,114,111,117,103,104,95,100,95,50,54,0);
          let latnZ = 0;
         sportp = [sportp.length & 1];
         orientationG -= parseFloat(`${2 & zhengpianW.length}`);
         zhengpianW = `${2 | latnZ}`;
         latnZ ^= zhengpianW.length / (Math.max(2, 10));
      }
          let sort_ = 2;
          let neonC = 1.0;
          let humidityi = String.fromCharCode(114,101,99,118,102,114,111,109,95,109,95,54,57,0);
         datan.set(homeactiveo, 3 * homeactiveo.length);
         sort_ += parseInt(`${neonC}`) % 1;
         neonC *= parseFloat(`${parseInt(`${neonC}`) / 3}`);
         humidityi = `${sort_ % (Math.max(parseInt(`${neonC}`), 9))}`;
         sportp = [datan.size - 2];
      for (let j = 0; j < 2; j++) {
         homeactiveo += `${2 << (Math.min(5, homeactiveo.length))}`;
      }
         datan = new Map([[`${datan.size}`, datan.size]]);
         sportp = [sportp.length];
      dacccfaabfbcbadeebddcabacdffdbI /= Math.max(parseFloat(`${bellreminderK}`), 5);
   let nbatrophyx = borderlessf.length <= 9371729;
   do {
      borderlessf = "3";
      if (nbatrophyx) {
         break;
      }
   } while ((borderlessf.length < catalogG.length) && nbatrophyx);
   if (2.52 < (dacccfaabfbcbadeebddcabacdffdbI - unticku) || 3.18 < (dacccfaabfbcbadeebddcabacdffdbI - 2.52)) {
      dacccfaabfbcbadeebddcabacdffdbI += parseFloat(`${borderlessf.length - parseInt(`${plashk}`)}`);
   }
   if (3 == (4 >> (Math.min(2, borderlessf.length))) || 3.37 == (dacccfaabfbcbadeebddcabacdffdbI - parseFloat(`${borderlessf.length}`))) {
      dacccfaabfbcbadeebddcabacdffdbI /= Math.max(5, parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${unticku}`)), 2))}`));
   }

    setIsLogoutDialogOpen(!isLogoutDialogOpen);
  };

  const toggleVersionDialog = () => {
       let usernamed = 3;
    let teaml = String.fromCharCode(110,95,50,48,95,100,101,108,101,116,101,0);
    let robotoa = 0;
    let paginationa = 2;
    let minimizeA = String.fromCharCode(109,97,112,112,101,100,95,115,95,50,57,0);
    let manifestr = String.fromCharCode(97,97,99,101,110,99,116,97,98,95,109,95,51,48,0);
    let incidentp = 3.0;
    let soundg = false;
    let tickedH = true;
    let emojiheartb: Map<any, any> = new Map([[String.fromCharCode(99,95,53,50,95,109,97,114,107,101,114,115,0),true ], [String.fromCharCode(99,95,50,49,95,112,114,111,103,114,101,115,105,118,101,0),false ]]);
    let mathU = true;
    let iconcloset = String.fromCharCode(112,95,53,52,95,100,97,109,112,0);
    let videovarR = 5.0;
    let stationM = String.fromCharCode(103,97,109,101,115,95,114,95,50,57,0);
   if (tickedH || 2 < (2 * usernamed)) {
       let searchq = String.fromCharCode(119,95,53,49,95,102,114,101,101,108,97,100,100,114,115,0);
       let questiconA = 0.0;
       let leakcheckers = 5;
       let othermatchdetailbgr: Map<any, any> = new Map([[String.fromCharCode(100,95,55,51,95,98,111,119,108,105,110,103,0),true ], [String.fromCharCode(100,95,51,50,95,105,109,112,111,114,116,0),false ]]);
       let themeB = 1.0;
         othermatchdetailbgr.set(`${leakcheckers}`, parseInt(`${questiconA}`));
         leakcheckers |= parseInt(`${questiconA}`);
       let zhengpianP = String.fromCharCode(105,103,110,111,114,101,100,95,122,95,54,55,0);
      if (1.73 < (questiconA - 2.12) && 1.2 < (questiconA - 2.12)) {
         themeB *= 1;
      }
       let icondownimgI: Array<any> = [925, 219, 507];
          let iconsaveimager = String.fromCharCode(101,112,104,101,109,101,114,97,108,95,118,95,56,54,0);
          let iconorientation6 = String.fromCharCode(102,111,114,101,118,101,114,95,106,95,55,48,0);
          let backiconh = 4.0;
         icondownimgI.push(3 + parseInt(`${questiconA}`));
         iconsaveimager = `${iconorientation6.length ^ 2}`;
         iconorientation6 += `${parseInt(`${backiconh}`) & iconorientation6.length}`;
         backiconh -= parseFloat(`${iconorientation6.length - 3}`);
          let lnewsshareh = String.fromCharCode(112,95,53,56,95,103,101,116,108,97,121,111,117,116,0);
         zhengpianP = `${(String.fromCharCode(118,0) == searchq ? othermatchdetailbgr.size : searchq.length)}`;
         lnewsshareh += `${2 % (Math.max(9, lnewsshareh.length))}`;
      for (let d = 0; d < 1; d++) {
         othermatchdetailbgr = new Map([[`${icondownimgI.length}`, 1 >> (Math.min(4, icondownimgI.length))]]);
      }
          let defaultlogoK = 2.0;
          let filedX = String.fromCharCode(113,95,49,48,48,95,99,111,110,116,114,97,99,116,0);
          let login6 = String.fromCharCode(110,95,53,57,95,112,114,101,115,101,110,116,0);
         othermatchdetailbgr.set(`${questiconA}`, parseInt(`${questiconA}`) % (Math.max(icondownimgI.length, 8)));
         defaultlogoK /= Math.max(2, (parseFloat(`${filedX == String.fromCharCode(54,0) ? parseInt(`${defaultlogoK}`) : filedX.length}`)));
         login6 += `${(login6 == String.fromCharCode(101,0) ? parseInt(`${defaultlogoK}`) : login6.length)}`;
      while ((3 + questiconA) == 4.92) {
         themeB += parseInt(`${themeB}`);
         break;
      }
      for (let n = 0; n < 2; n++) {
         othermatchdetailbgr = new Map([[`${icondownimgI.length}`, 2 | parseInt(`${themeB}`)]]);
      }
      let iconpipexpandg = themeB >= 8920519.0;
      do {
         themeB /= Math.max((String.fromCharCode(110,0) == searchq ? searchq.length : zhengpianP.length), 5);
         if (iconpipexpandg) {
            break;
         }
      } while (((1 << (Math.min(4, Math.abs(othermatchdetailbgr.size)))) > 2 || (othermatchdetailbgr.size >> (Math.min(Math.abs(1), 2))) > 2) && iconpipexpandg);
          let pushs = true;
          let weatherx = String.fromCharCode(100,112,114,105,110,116,95,114,95,57,55,0);
          let loginsuccessK = String.fromCharCode(100,101,108,105,109,105,116,101,100,95,98,95,54,48,0);
         questiconA -= 1;
         pushs = weatherx.includes(`${pushs}`);
         weatherx = `${(3 | (pushs ? 5 : 5))}`;
         loginsuccessK = `${weatherx.length}`;
      for (let v = 0; v < 1; v++) {
         themeB *= 3;
      }
          let privilegeA = 5;
          let basketballdetailsbgs = String.fromCharCode(117,115,105,110,103,95,54,95,49,51,0);
          let redgoale = String.fromCharCode(104,95,55,55,95,100,110,120,104,100,0);
         icondownimgI = [redgoale.length | privilegeA];
         privilegeA <<= Math.min(5, Math.abs(3 << (Math.min(3, basketballdetailsbgs.length))));
         basketballdetailsbgs += `${1 | basketballdetailsbgs.length}`;
      tickedH = !soundg;
   }
      teaml = `${usernamed / 2}`;
       let iconsetting8 = String.fromCharCode(103,95,53,50,95,99,111,108,99,111,108,0);
       let footballtrophyb = String.fromCharCode(109,95,56,49,95,101,97,114,108,105,101,114,0);
       let singapore_ = 2.0;
         footballtrophyb += `${parseInt(`${singapore_}`)}`;
      while (iconsetting8.length < 1) {
          let libcrashsdkr = 4.0;
          let imageactionlivez = 0.0;
          let appleh = String.fromCharCode(103,109,104,100,95,50,95,52,51,0);
         iconsetting8 = "1";
         libcrashsdkr *= parseFloat(`${parseInt(`${imageactionlivez}`)}`);
         appleh += `${appleh.length | 3}`;
         break;
      }
         iconsetting8 = `${footballtrophyb.length / 2}`;
      while (parseInt(`${singapore_}`) == iconsetting8.length) {
         iconsetting8 += `${(iconsetting8 == String.fromCharCode(87,0) ? iconsetting8.length : parseInt(`${singapore_}`))}`;
         break;
      }
         singapore_ *= (iconsetting8 == String.fromCharCode(112,0) ? parseInt(`${singapore_}`) : iconsetting8.length);
      incidentp += 1;
   for (let b = 0; b < 1; b++) {
      manifestr = `${usernamed}`;
   }
      robotoa ^= (teaml == String.fromCharCode(100,0) ? paginationa : teaml.length);
   while (tickedH) {
       let iconclosewhitewithbgJ = 0;
       let infoj: Map<any, any> = new Map([[String.fromCharCode(110,95,56,53,95,117,115,100,0),426], [String.fromCharCode(104,95,52,51,95,119,97,118,114,101,97,100,101,114,0),283], [String.fromCharCode(108,97,112,112,101,100,95,100,95,49,54,0),494]]);
       let zhuboH = 2;
       let imagemanager_ = String.fromCharCode(115,116,114,97,116,101,103,121,95,99,95,53,50,0);
       let notificationE = 2;
      if ((4 & notificationE) >= 2 && 2 >= (4 & imagemanager_.length)) {
         notificationE <<= Math.min(Math.abs(iconclosewhitewithbgJ), 5);
      }
         iconclosewhitewithbgJ /= Math.max(notificationE | 1, 4);
         infoj.set(`${zhuboH}`, 2 << (Math.min(5, imagemanager_.length)));
          let profilepic_ = String.fromCharCode(109,95,57,52,95,114,101,99,117,114,115,105,118,101,108,121,0);
          let pangleJ = 2;
          let overO = String.fromCharCode(118,97,108,105,100,97,116,111,114,115,95,111,95,54,57,0);
         notificationE -= 2;
         profilepic_ += `${pangleJ >> (Math.min(profilepic_.length, 1))}`;
         pangleJ += pangleJ;
         overO += `${profilepic_.length ^ pangleJ}`;
         zhuboH <<= Math.min(Math.abs(infoj.size), 1);
          let playJ = String.fromCharCode(117,95,56,53,95,108,111,116,116,105,101,118,105,101,119,0);
          let filedh = 1.0;
         infoj = new Map([[playJ, playJ.length]]);
         filedh *= parseInt(`${filedh}`) & 2;
         iconclosewhitewithbgJ <<= Math.min(Math.abs(1 << (Math.min(2, Math.abs(zhuboH)))), 4);
       let middlet = false;
       let iconshares = false;
         middlet = (((!iconshares ? 81 : imagemanager_.length) + imagemanager_.length) < 81);
      let iconchatsendp = iconshares ? !iconshares : iconshares;
      do {
          let showU = 1.0;
          let iconsharefriends8 = 1.0;
          let backiconR = true;
          let user9 = 1;
          let baiduads1 = true;
         iconshares = iconsharefriends8 == 89.68;
         showU *= (parseFloat(`${parseInt(`${showU}`) ^ (backiconR ? 4 : 4)}`));
         iconsharefriends8 -= parseFloat(`${2}`);
         backiconR = !backiconR && !baiduads1;
         user9 *= 3;
         if (iconchatsendp) {
            break;
         }
      } while (iconchatsendp && (iconshares && (2 - zhuboH) >= 5));
      let dialogj = 5143412 >= imagemanager_.length;
      do {
         imagemanager_ = `${iconclosewhitewithbgJ}`;
         if (dialogj) {
            break;
         }
      } while (((notificationE & imagemanager_.length) > 5) && dialogj);
          let assetsg: Map<any, any> = new Map([[String.fromCharCode(99,121,99,108,101,99,108,111,99,107,95,115,95,55,53,0),127], [String.fromCharCode(102,111,117,114,116,104,95,122,95,52,57,0),481]]);
          let twitterN = 2.0;
         imagemanager_ += `${iconclosewhitewithbgJ / (Math.max(infoj.size, 4))}`;
         assetsg = new Map([[`${assetsg.size}`, assetsg.size]]);
         twitterN += parseFloat(`${1 * parseInt(`${twitterN}`)}`);
      if ((zhuboH + iconclosewhitewithbgJ) < 2) {
          let halff = 0.0;
          let statisticsactiveL = true;
          let ksadg = 3.0;
          let homeinactivel = true;
         zhuboH <<= Math.min(2, Math.abs(1 & parseInt(`${ksadg}`)));
         halff += ((statisticsactiveL ? 3 : 5) >> (Math.min(Math.abs(parseInt(`${halff}`)), 1)));
         statisticsactiveL = !statisticsactiveL || homeinactivel;
         ksadg *= (parseFloat(`${(statisticsactiveL ? 1 : 1) + parseInt(`${halff}`)}`));
         homeinactivel = !statisticsactiveL;
      }
      if (4 < (notificationE + 5) || 5 < (5 + notificationE)) {
         zhuboH += iconclosewhitewithbgJ + zhuboH;
      }
      while (iconclosewhitewithbgJ <= 2 || (2 * iconclosewhitewithbgJ) <= 3) {
         iconshares = zhuboH <= infoj.size;
         break;
      }
      tickedH = 43 < infoj.size;
      break;
   }
   let goallogog = manifestr == String.fromCharCode(97,105,113,97,111,53,99,50,116,0);
   do {
       let viewsl: Map<any, any> = new Map([[String.fromCharCode(109,118,99,111,110,116,101,120,116,115,95,105,95,53,48,0),true ], [String.fromCharCode(101,95,53,54,95,102,112,109,98,0),false ]]);
       let yellowscoreballE = String.fromCharCode(115,95,57,57,95,98,111,111,116,115,116,114,97,112,0);
       let whitebellZ = String.fromCharCode(112,114,101,99,105,115,101,95,54,95,57,57,0);
      while (!whitebellZ.endsWith(`${viewsl.size}`)) {
          let greyM = 1;
          let sidec: Array<any> = [307, 939];
          let iconstarW = 0.0;
          let orangeuparrowu = String.fromCharCode(111,95,53,95,114,101,112,111,114,116,115,0);
          let rooth = 4.0;
         viewsl = new Map([[`${viewsl.size}`, (String.fromCharCode(53,0) == whitebellZ ? viewsl.size : whitebellZ.length)]]);
         greyM |= greyM >> (Math.min(Math.abs(parseInt(`${iconstarW}`)), 3));
         sidec.push(sidec.length + parseInt(`${rooth}`));
         iconstarW /= Math.max(sidec.length % 2, 3);
         orangeuparrowu += `${sidec.length}`;
         rooth /= Math.max(parseFloat(`${sidec.length}`), 1);
         break;
      }
          let stationC = 2;
          let redcirclebg0: Array<any> = [452, 695];
          let bggradientX = 1;
         viewsl.set(`${yellowscoreballE}`, viewsl.size | yellowscoreballE.length);
         stationC /= Math.max(2 * bggradientX, 4);
         redcirclebg0.push(3 * redcirclebg0.length);
         bggradientX &= 1 << (Math.min(Math.abs(bggradientX), 1));
      for (let r = 0; r < 3; r++) {
          let filledm = 3.0;
          let imagemanager6 = String.fromCharCode(100,97,115,104,95,97,95,50,51,0);
          let libsentryL = String.fromCharCode(109,95,57,57,95,101,110,99,111,100,97,98,108,101,115,0);
         viewsl.set(`${filledm}`, (String.fromCharCode(70,0) == whitebellZ ? whitebellZ.length : parseInt(`${filledm}`)));
         imagemanager6 = `${imagemanager6.length << (Math.min(Math.abs(3), 3))}`;
         libsentryL += `${libsentryL.length}`;
      }
         whitebellZ = `${whitebellZ.length | yellowscoreballE.length}`;
         whitebellZ += `${yellowscoreballE.length & 2}`;
      for (let a = 0; a < 3; a++) {
          let iconP = true;
          let arrowdownX = false;
         yellowscoreballE = `${viewsl.size}`;
         iconP = !arrowdownX || !arrowdownX;
      }
         whitebellZ += "2";
      for (let h = 0; h < 1; h++) {
         viewsl = new Map([[`${viewsl.size}`, 1]]);
      }
          let morer = String.fromCharCode(97,116,114,97,99,112,95,99,95,55,55,0);
          let friendsr = String.fromCharCode(107,95,52,50,95,99,111,111,107,105,101,0);
          let notificationgrayB = 5.0;
         whitebellZ += `${friendsr.length ^ parseInt(`${notificationgrayB}`)}`;
         morer = `${morer.length}`;
         friendsr += `${1 | morer.length}`;
      manifestr += `${2 * teaml.length}`;
      if (goallogog) {
         break;
      }
   } while (goallogog && (1 > teaml.length));
      tickedH = minimizeA.length >= 13;
      tickedH = (manifestr.length & usernamed) == 27;
   for (let a = 0; a < 2; a++) {
      tickedH = minimizeA == manifestr;
   }
   let qaaga = manifestr == String.fromCharCode(52,57,110,113,112,102,121,116,114,0);
   do {
      manifestr = `${2 - manifestr.length}`;
      if (qaaga) {
         break;
      }
   } while ((soundg) && qaaga);
      tickedH = 61 < minimizeA.length || 61 < manifestr.length;
      tickedH = 49.28 <= incidentp;
      minimizeA += `${parseInt(`${incidentp}`) + 2}`;
   if ((usernamed & 3) == 1) {
      usernamed /= Math.max(2, robotoa);
   }
       let unimplementedvieww = false;
       let emptyL = 2.0;
       let entry8 = true;
      for (let c = 0; c < 1; c++) {
          let brightnessr = String.fromCharCode(103,95,53,53,95,110,101,103,97,116,101,0);
          let iconnotificationnewQ = 0.0;
          let libyogaE = 5.0;
          let fast1: Map<any, any> = new Map([[String.fromCharCode(100,95,49,51,95,97,108,105,103,110,109,101,110,116,0),String.fromCharCode(118,114,97,115,116,101,114,95,115,95,53,0)], [String.fromCharCode(119,105,101,110,101,114,95,122,95,54,0),String.fromCharCode(105,110,118,111,107,101,114,95,101,95,52,53,0)]]);
          let huawei2: Map<any, any> = new Map([[String.fromCharCode(106,97,105,108,98,114,101,97,107,95,117,95,52,55,0),String.fromCharCode(119,95,50,50,95,115,116,114,105,100,105,110,103,0)], [String.fromCharCode(114,117,110,110,101,114,95,50,95,55,53,0),String.fromCharCode(99,97,112,97,98,105,108,105,116,105,101,115,95,121,95,57,55,0)], [String.fromCharCode(108,97,112,112,101,100,95,103,95,54,49,0),String.fromCharCode(100,95,49,48,48,95,101,115,99,97,112,105,110,103,0)]]);
         emptyL /= Math.max(2, ((unimplementedvieww ? 2 : 2) * parseInt(`${emptyL}`)));
         brightnessr += `${fast1.size}`;
         iconnotificationnewQ += parseInt(`${libyogaE}`);
         libyogaE -= parseFloat(`${2}`);
         fast1.set(brightnessr, (brightnessr == String.fromCharCode(84,0) ? huawei2.size : brightnessr.length));
         huawei2 = new Map([[brightnessr, 3]]);
      }
         emptyL *= ((entry8 ? 2 : 5));
          let klevinn = String.fromCharCode(120,95,52,53,95,114,101,113,117,101,115,116,101,114,0);
          let loadingspinnerz = String.fromCharCode(101,110,111,117,103,104,95,120,95,57,53,0);
          let tickedg = 3.0;
         unimplementedvieww = entry8 || tickedg <= 14.66;
         klevinn += `${loadingspinnerz.length}`;
         loadingspinnerz += `${1 ^ loadingspinnerz.length}`;
         tickedg -= loadingspinnerz.length / (Math.max(3, 8));
          let refreshe = 0.0;
          let dangerz = String.fromCharCode(109,99,100,99,95,114,95,52,57,0);
         unimplementedvieww = String.fromCharCode(77,0) == dangerz;
         refreshe /= Math.max(1, parseInt(`${refreshe}`) % 1);
         dangerz = `${parseInt(`${refreshe}`)}`;
      if (!unimplementedvieww) {
         entry8 = 30.45 > emptyL && !unimplementedvieww;
      }
      manifestr += `${usernamed / (Math.max(2, paginationa))}`;
      manifestr = `${usernamed % 3}`;
      soundg = !tickedH;
   while (soundg) {
      robotoa <<= Math.min(minimizeA.length, 3);
      break;
   }

    setIsVersionDialogOpen(!isVersionDialogOpen);
  };
  const toggleClearDialog = () => {
       let casth = String.fromCharCode(112,95,49,53,95,102,111,108,100,0);
    let bggradient7 = 5;
    let klevin2 = 2.0;
    let countryU = 2.0;
    let libsgcore5 = String.fromCharCode(100,95,52,54,95,97,100,97,112,116,101,100,0);
    let subtextl = false;
    let subtextW = String.fromCharCode(100,114,111,112,95,48,95,54,0);
    let gmailO: Array<any> = [426, 579];
    let icontransferclubS = false;
    let libhermesB = String.fromCharCode(105,110,118,102,95,48,95,57,57,0);
    let package_9uj: Array<any> = [String.fromCharCode(102,95,54,51,95,109,98,101,100,103,101,0), String.fromCharCode(115,95,55,51,95,114,117,108,101,115,0), String.fromCharCode(110,95,49,52,95,115,116,97,109,112,115,0)];
    let nativemoduleE: Map<any, any> = new Map([[String.fromCharCode(105,95,53,48,95,114,101,111,114,100,101,114,105,110,103,0),true ], [String.fromCharCode(99,104,101,99,107,105,110,103,95,111,95,55,55,0),false ], [String.fromCharCode(109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,95,108,95,54,56,0),true ]]);
    let resultS = String.fromCharCode(120,95,57,56,95,108,111,103,0);
    let viewsR: Array<any> = [String.fromCharCode(114,101,110,100,101,114,101,114,95,113,95,50,0), String.fromCharCode(100,95,57,95,101,114,114,111,114,115,0)];
    let heji8 = String.fromCharCode(121,95,54,48,95,116,101,108,101,103,114,97,112,104,0);
   while (1 <= (bggradient7 * 4) && 4 <= (parseInt(`${countryU}`) / (Math.max(5, bggradient7)))) {
      countryU -= subtextW.length + 2;
      break;
   }
   while (libsgcore5.length > libhermesB.length) {
       let eyeclose7: Array<any> = [String.fromCharCode(115,95,57,52,95,115,101,103,102,101,97,116,117,114,101,0), String.fromCharCode(112,95,53,49,95,101,113,117,105,118,97,108,101,110,99,101,0), String.fromCharCode(97,116,97,99,101,110,116,101,114,95,116,95,49,55,0)];
       let libreactnativeblobD = 5.0;
       let readj = String.fromCharCode(112,114,105,109,95,55,95,55,51,0);
       let championl = String.fromCharCode(115,116,114,111,107,101,95,116,95,54,52,0);
         libreactnativeblobD *= parseFloat(`${readj.length}`);
      let notificationfilled0 = 5993929 >= eyeclose7.length;
      do {
         eyeclose7 = [championl.length - eyeclose7.length];
         if (notificationfilled0) {
            break;
         }
      } while (((eyeclose7.length ^ readj.length) > 3) && notificationfilled0);
      if (championl.length >= readj.length) {
         readj += "2";
      }
       let skip6 = String.fromCharCode(105,95,49,52,95,116,104,117,109,98,110,97,105,108,115,0);
       let entryM = String.fromCharCode(116,119,105,99,101,95,120,95,52,56,0);
         readj = `${3 * readj.length}`;
      for (let p = 0; p < 2; p++) {
          let klevind = String.fromCharCode(106,102,105,101,108,100,115,95,101,95,53,53,0);
         skip6 = `${(String.fromCharCode(107,0) == klevind ? championl.length : klevind.length)}`;
      }
      let toponB = String.fromCharCode(97,109,55,110,102,122,97,115,0) == skip6;
      do {
          let cornershoot9 = 4;
          let countdown3 = String.fromCharCode(113,95,57,51,95,112,108,97,110,97,114,116,111,117,121,118,121,0);
          let fills = 2.0;
          let leftr = String.fromCharCode(104,95,51,56,95,112,117,98,108,105,99,107,101,121,115,0);
          let redgoalm = 1;
         skip6 += `${championl.length | parseInt(`${libreactnativeblobD}`)}`;
         cornershoot9 &= cornershoot9 << (Math.min(Math.abs(1), 3));
         countdown3 += "2";
         fills /= Math.max(1, parseFloat(`${cornershoot9 * 2}`));
         leftr += `${(leftr == String.fromCharCode(86,0) ? parseInt(`${fills}`) : leftr.length)}`;
         redgoalm >>= Math.min(2, Math.abs(1));
         if (toponB) {
            break;
         }
      } while (toponB && (1 == skip6.length));
         eyeclose7 = [skip6.length];
          let utilsd = String.fromCharCode(101,95,56,51,95,114,111,117,116,105,110,101,115,0);
          let uploady = String.fromCharCode(117,95,53,50,95,112,114,102,0);
          let airbnbstara = 2;
         championl += `${utilsd.length}`;
         utilsd += `${3 + uploady.length}`;
         uploady = `${uploady.length * airbnbstara}`;
         airbnbstara %= Math.max((String.fromCharCode(78,0) == uploady ? uploady.length : airbnbstara), 2);
         readj += `${readj.length ^ 3}`;
         skip6 = `${skip6.length & readj.length}`;
      let predictionbannerM = championl == String.fromCharCode(119,112,101,119,0);
      do {
         championl += `${eyeclose7.length + 2}`;
         if (predictionbannerM) {
            break;
         }
      } while ((skip6.includes(`${championl.length}`)) && predictionbannerM);
      libsgcore5 += `${(String.fromCharCode(49,0) == subtextW ? subtextW.length : bggradient7)}`;
      break;
   }
      subtextW += `${bggradient7 & subtextW.length}`;
       let smallR = String.fromCharCode(119,95,57,57,95,114,101,97,100,98,121,116,101,0);
      while (smallR.length > 4) {
          let currentU = String.fromCharCode(120,95,49,52,0);
          let iconsharefriendsQ = String.fromCharCode(97,112,112,101,110,100,95,100,95,51,57,0);
          let iconqqd: Array<any> = [String.fromCharCode(100,95,49,54,95,122,111,111,109,105,110,103,0), String.fromCharCode(102,108,97,116,110,101,115,115,95,106,95,49,48,0), String.fromCharCode(114,101,100,101,108,105,118,101,114,121,95,110,95,53,51,0)];
         smallR += `${smallR.length}`;
         currentU += "3";
         iconsharefriendsQ = `${iconqqd.length ^ iconsharefriendsQ.length}`;
         iconqqd = [iconqqd.length];
         break;
      }
          let defaultbasketballbg4 = String.fromCharCode(97,114,99,104,105,118,101,95,103,95,56,0);
         smallR += `${2 * defaultbasketballbg4.length}`;
       let iconclosewhitewithbgy: Array<any> = [213, 268];
      gmailO = [(String.fromCharCode(117,0) == subtextW ? subtextW.length : parseInt(`${klevin2}`))];
      gmailO = [subtextW.length];
   let libsentryI = countryU <= 5295303.0;
   do {
      countryU *= casth.length / 1;
      if (libsentryI) {
         break;
      }
   } while ((5.29 <= (3.4 - countryU) && 3.4 <= countryU) && libsentryI);
   while (gmailO.length == 1) {
       let whistled: Map<any, any> = new Map([[String.fromCharCode(115,116,114,102,116,105,109,101,95,50,95,53,54,0),604], [String.fromCharCode(109,95,54,48,95,117,121,118,121,0),342]]);
      for (let o = 0; o < 1; o++) {
         whistled = new Map([[`${whistled.size}`, whistled.size / 1]]);
      }
      let whatsappy = 9883664 <= whistled.size;
      do {
         whistled.set(`${whistled.size}`, whistled.size << (Math.min(Math.abs(3), 2)));
         if (whatsappy) {
            break;
         }
      } while ((3 <= (whistled.size / 5) && (whistled.size / (Math.max(10, whistled.size))) <= 5) && whatsappy);
          let gemfileG: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,99,111,100,101,99,95,116,95,52,50,0),true ], [String.fromCharCode(119,109,97,112,114,111,100,97,116,97,95,106,95,49,49,0),false ]]);
          let iconclosewhitebgx = String.fromCharCode(112,114,101,114,111,108,108,95,53,95,53,0);
         whistled.set(`${gemfileG.size}`, whistled.size);
         gemfileG.set(iconclosewhitebgx, iconclosewhitebgx.length << (Math.min(Math.abs(2), 2)));
      gmailO.push(3);
      break;
   }
      icontransferclubS = casth == String.fromCharCode(113,0);
      libhermesB = `${casth.length}`;
   let modey = 8183200 <= bggradient7;
   do {
      bggradient7 *= (libsgcore5.length * (subtextl ? 2 : 4));
      if (modey) {
         break;
      }
   } while (modey && (5 == (bggradient7 + subtextW.length)));
   if (libhermesB.length > 3) {
       let agreement3 = 3;
      for (let p = 0; p < 1; p++) {
         agreement3 *= agreement3 / (Math.max(1, 9));
      }
      for (let i = 0; i < 2; i++) {
         agreement3 |= agreement3;
      }
      if (3 >= (agreement3 & 2) || (agreement3 & 2) >= 1) {
         agreement3 += agreement3 & agreement3;
      }
      libhermesB += "2";
   }
   if (5.46 == countryU) {
      package_9uj.push((1 + (icontransferclubS ? 2 : 1)));
   }
       let statisticsinactiveW = String.fromCharCode(104,95,57,51,95,112,111,97,0);
       let feedbackf = String.fromCharCode(107,95,55,53,95,114,116,109,112,99,114,121,112,116,0);
          let catagoryz = String.fromCharCode(107,95,55,56,95,100,97,116,97,100,105,114,0);
         statisticsinactiveW = `${2 % (Math.max(6, feedbackf.length))}`;
         catagoryz += "2";
      if (statisticsinactiveW == String.fromCharCode(90,0) && feedbackf == String.fromCharCode(70,0)) {
          let indicatorb: Array<any> = [666, 135, 717];
          let contextu = String.fromCharCode(97,108,103,115,95,111,95,54,52,0);
         feedbackf = `${feedbackf.length % (Math.max(1, 6))}`;
         indicatorb = [(String.fromCharCode(102,0) == contextu ? contextu.length : indicatorb.length)];
      }
         statisticsinactiveW = `${(feedbackf == String.fromCharCode(90,0) ? statisticsinactiveW.length : feedbackf.length)}`;
      if (feedbackf.includes(`${statisticsinactiveW.length}`)) {
          let androidq = 4;
          let showlessi = true;
          let t_managery = String.fromCharCode(109,97,120,114,101,97,100,101,114,115,95,101,95,57,57,0);
          let livesharew: Map<any, any> = new Map([[String.fromCharCode(101,95,57,48,95,113,117,97,110,116,105,122,101,0),271], [String.fromCharCode(99,104,101,99,107,97,115,109,95,103,95,51,52,0),990]]);
          let mbnativeadvancedS = true;
         statisticsinactiveW = "3";
         androidq >>= Math.min(Math.abs(t_managery.length << (Math.min(4, Math.abs(androidq)))), 5);
         showlessi = 93 < androidq;
         t_managery = `${livesharew.size | 1}`;
         livesharew.set(`${androidq}`, (String.fromCharCode(100,0) == t_managery ? androidq : t_managery.length));
         mbnativeadvancedS = livesharew.size > androidq;
      }
       let whistleorangev = 0.0;
         feedbackf += `${feedbackf.length}`;
      casth = `${(libsgcore5 == String.fromCharCode(103,0) ? libsgcore5.length : (subtextl ? 4 : 5))}`;
       let dialogl = true;
       let iconeyec: Array<any> = [String.fromCharCode(118,95,56,57,95,114,105,103,104,116,115,0), String.fromCharCode(112,95,56,51,95,104,105,115,116,0), String.fromCharCode(104,95,49,57,95,115,116,114,103,108,111,98,0)];
       let shootI = 3.0;
          let halfO = false;
         iconeyec.push(1);
         halfO = !halfO;
         dialogl = 44.33 < shootI;
       let eyeopen0 = 5.0;
       let classest = 5.0;
         eyeopen0 *= parseFloat(`${3}`);
         classest -= parseFloat(`${iconeyec.length}`);
      while (4.29 == (2.17 * eyeopen0)) {
         eyeopen0 *= (parseFloat(`${(dialogl ? 5 : 1) / (Math.max(parseInt(`${shootI}`), 3))}`));
         break;
      }
      while (3.99 > (eyeopen0 / (Math.max(4, classest)))) {
          let uploadO = String.fromCharCode(116,117,108,115,105,95,97,95,54,52,0);
          let arrowup5 = String.fromCharCode(110,111,110,110,117,108,108,101,110,99,114,121,112,116,105,111,110,95,52,95,52,51,0);
          let disconnectedq = false;
         eyeopen0 /= Math.max(4, parseFloat(`${iconeyec.length >> (Math.min(uploadO.length, 4))}`));
         uploadO = `${((disconnectedq ? 4 : 2))}`;
         arrowup5 = `${((disconnectedq ? 4 : 2))}`;
         break;
      }
      for (let w = 0; w < 2; w++) {
          let sinaz = String.fromCharCode(109,95,56,49,95,105,110,105,116,105,97,108,105,122,101,114,115,0);
          let linkf = 3.0;
          let iconfeedbackT = String.fromCharCode(101,95,55,54,95,112,101,114,105,111,100,105,99,0);
          let videobufferloading2 = String.fromCharCode(100,101,97,100,95,100,95,54,56,0);
          let acceptedN: Array<any> = [String.fromCharCode(119,95,50,56,95,97,98,117,115,101,0), String.fromCharCode(99,95,54,57,95,99,114,111,115,115,102,97,100,101,0)];
         iconeyec.push((videobufferloading2 == String.fromCharCode(69,0) ? parseInt(`${eyeopen0}`) : videobufferloading2.length));
         sinaz += `${2 % (Math.max(7, iconfeedbackT.length))}`;
         linkf -= parseFloat(`${2}`);
         iconfeedbackT = `${(iconfeedbackT == String.fromCharCode(105,0) ? iconfeedbackT.length : parseInt(`${linkf}`))}`;
         acceptedN.push(iconfeedbackT.length >> (Math.min(3, acceptedN.length)));
      }
         iconeyec = [parseInt(`${eyeopen0}`)];
      casth = `${(String.fromCharCode(112,0) == libhermesB ? libhermesB.length : parseInt(`${klevin2}`))}`;
      gmailO.push(parseInt(`${klevin2}`) / (Math.max(8, bggradient7)));
      nativemoduleE.set(`${libhermesB}`, 1);
   let episodesg = libsgcore5 == String.fromCharCode(108,97,121,104,57,0);
   do {
       let register_m1a = String.fromCharCode(107,95,52,52,95,104,97,114,100,99,111,100,101,100,0);
       let orangeo = 2;
       let orientationV = 0;
      if (register_m1a.startsWith(`${orientationV}`)) {
         register_m1a += `${(register_m1a == String.fromCharCode(80,0) ? orientationV : register_m1a.length)}`;
      }
         orangeo *= orientationV;
      let configurex = String.fromCharCode(57,102,102,56,107,100,107,106,0) == register_m1a;
      do {
         register_m1a = `${orientationV >> (Math.min(Math.abs(2), 4))}`;
         if (configurex) {
            break;
         }
      } while (configurex && (register_m1a.length >= orangeo));
       let whatsappm = 2.0;
       let minimizei = 2.0;
      let privacyd = 8206062.0 >= whatsappm;
      do {
          let team7: Map<any, any> = new Map([[String.fromCharCode(99,95,52,53,95,115,101,116,116,101,114,0),118], [String.fromCharCode(99,111,110,116,105,110,101,110,116,95,51,95,53,50,0),576]]);
          let layoutB = String.fromCharCode(102,114,111,110,116,115,105,100,101,95,106,95,53,57,0);
         whatsappm *= 1 << (Math.min(5, Math.abs(parseInt(`${minimizei}`))));
         team7.set(`${layoutB}`, team7.size - 3);
         layoutB = `${team7.size}`;
         if (privacyd) {
            break;
         }
      } while (privacyd && (minimizei < whatsappm));
         whatsappm *= register_m1a.length & orangeo;
      while (1 == (orientationV / 2)) {
         orientationV <<= Math.min(Math.abs(1 / (Math.max(parseInt(`${whatsappm}`), 9))), 1);
         break;
      }
         orientationV += 3 << (Math.min(Math.abs(parseInt(`${minimizei}`)), 1));
       let targetn = String.fromCharCode(120,95,54,54,95,100,101,113,117,101,117,101,0);
       let libsgcoreq = String.fromCharCode(100,95,55,48,95,101,113,117,97,116,97,98,108,101,0);
      libsgcore5 = "3";
      if (episodesg) {
         break;
      }
   } while (episodesg && (parseInt(`${klevin2}`) < libsgcore5.length));
   if ((countryU + klevin2) < 2.13 && (2.13 * klevin2) < 1.75) {
       let smallbrightnessu = String.fromCharCode(122,95,52,48,95,98,112,115,0);
       let suggestiong = String.fromCharCode(103,108,111,98,97,108,105,110,102,111,95,52,95,49,57,0);
       let nodew = 4.0;
       let viewsz = String.fromCharCode(100,121,110,108,105,110,107,95,48,95,49,57,0);
       let downloadingt = String.fromCharCode(100,95,53,48,95,101,120,112,0);
      if ((viewsz.length >> (Math.min(Math.abs(3), 3))) == 2 || (parseInt(`${nodew}`) / 3) == 4) {
         nodew *= parseFloat(`${parseInt(`${nodew}`)}`);
      }
      let nativea = String.fromCharCode(50,111,100,105,0) == suggestiong;
      do {
         suggestiong = "2";
         if (nativea) {
            break;
         }
      } while (nativea && (smallbrightnessu != suggestiong));
      while (viewsz == suggestiong) {
         suggestiong = `${2 ^ downloadingt.length}`;
         break;
      }
      while (downloadingt.length == 2) {
         downloadingt = `${(smallbrightnessu == String.fromCharCode(69,0) ? suggestiong.length : smallbrightnessu.length)}`;
         break;
      }
      if (downloadingt.length >= 5) {
          let signinupl = String.fromCharCode(115,99,111,112,101,115,95,112,95,57,54,0);
          let graphicsB = 4;
          let half6: Array<any> = [107, 187];
         smallbrightnessu += `${half6.length | 2}`;
         signinupl = `${signinupl.length & graphicsB}`;
         graphicsB &= (String.fromCharCode(51,0) == signinupl ? graphicsB : signinupl.length);
         half6 = [graphicsB];
      }
         smallbrightnessu = "3";
         downloadingt = `${parseInt(`${nodew}`) % 2}`;
      let imagenetworkerrp = String.fromCharCode(48,103,120,49,122,113,99,57,118,0) == suggestiong;
      do {
          let libturbomodulejsijni9: Map<any, any> = new Map([[String.fromCharCode(100,121,110,108,105,110,107,95,115,95,50,53,0),367], [String.fromCharCode(99,111,117,110,116,101,100,95,122,95,49,49,0),373]]);
          let binddatasH: Map<any, any> = new Map([[String.fromCharCode(99,114,111,115,115,104,97,105,114,115,95,103,95,53,53,0),String.fromCharCode(103,95,53,56,95,104,101,97,100,112,104,111,110,101,115,0)], [String.fromCharCode(109,105,112,115,102,112,117,95,112,95,55,0),String.fromCharCode(114,101,109,111,118,97,108,95,99,95,52,49,0)], [String.fromCharCode(97,117,116,111,108,111,99,107,95,97,95,57,48,0),String.fromCharCode(101,95,55,51,95,116,100,115,102,0)]]);
          let textlayoutmanagerb = String.fromCharCode(97,117,114,97,95,52,95,50,57,0);
          let arrowrightY = String.fromCharCode(103,95,49,56,95,108,111,115,101,0);
          let modulesG = String.fromCharCode(115,105,103,110,97,108,95,106,95,54,55,0);
         suggestiong = `${(String.fromCharCode(67,0) == viewsz ? parseInt(`${nodew}`) : viewsz.length)}`;
         libturbomodulejsijni9.set(textlayoutmanagerb, 2 * textlayoutmanagerb.length);
         binddatasH.set(textlayoutmanagerb, binddatasH.size);
         arrowrightY = `${1 & binddatasH.size}`;
         modulesG += `${libturbomodulejsijni9.size % (Math.max(8, textlayoutmanagerb.length))}`;
         if (imagenetworkerrp) {
            break;
         }
      } while (((5.33 - nodew) >= 3.31) && imagenetworkerrp);
      while ((2 << (Math.min(4, downloadingt.length))) > 1 && 1 > (2 >> (Math.min(1, downloadingt.length)))) {
         nodew /= Math.max(parseFloat(`${2}`), 5);
         break;
      }
         viewsz += "3";
         downloadingt = `${suggestiong.length * 1}`;
          let teamv = 2.0;
          let iconcalendarY = String.fromCharCode(115,105,122,101,108,101,115,115,95,105,95,53,49,0);
          let reactnativeratingst = 4;
         nodew += parseFloat(`${2 & suggestiong.length}`);
         teamv += 3;
         iconcalendarY += `${reactnativeratingst}`;
         reactnativeratingst ^= reactnativeratingst;
      for (let t = 0; t < 2; t++) {
         viewsz += `${(suggestiong == String.fromCharCode(119,0) ? suggestiong.length : parseInt(`${nodew}`))}`;
      }
      let mimo3 = suggestiong.length >= 7965423;
      do {
          let description_c2Z = String.fromCharCode(115,117,112,112,114,101,115,115,105,111,110,95,113,95,49,56,0);
          let mbbidP = String.fromCharCode(99,95,50,49,95,110,117,109,0);
          let predictionbuttonH = 2.0;
         suggestiong += `${(description_c2Z == String.fromCharCode(50,0) ? description_c2Z.length : parseInt(`${nodew}`))}`;
         mbbidP += `${2 ^ parseInt(`${predictionbuttonH}`)}`;
         predictionbuttonH /= Math.max(5, parseFloat(`${mbbidP.length}`));
         if (mimo3) {
            break;
         }
      } while ((suggestiong.length >= 2) && mimo3);
       let iconsubssuccessW = String.fromCharCode(109,111,117,115,101,95,48,95,57,48,0);
       let serviceI = String.fromCharCode(100,95,56,57,95,117,110,112,97,99,107,101,100,0);
      klevin2 += parseFloat(`${libsgcore5.length | 2}`);
   }
   let arrowup0 = 6266456 >= gmailO.length;
   do {
      gmailO.push(3);
      if (arrowup0) {
         break;
      }
   } while (arrowup0 && (4 >= gmailO.length));
   let leaguedetailsbgl = icontransferclubS ? !icontransferclubS : icontransferclubS;
   do {
      icontransferclubS = 86 >= nativemoduleE.size;
      if (leaguedetailsbgl) {
         break;
      }
   } while (((countryU * 1.27) > 1.67 || !icontransferclubS) && leaguedetailsbgl);
   for (let u = 0; u < 3; u++) {
      subtextl = package_9uj.length < 55 || 60.2 < klevin2;
   }
   let viewerH = 9665092 <= package_9uj.length;
   do {
      package_9uj = [gmailO.length ^ parseInt(`${klevin2}`)];
      if (viewerH) {
         break;
      }
   } while (viewerH && (3 == package_9uj.length));

    setIsClearDialogOpen(!isClearDialogOpen);
  };
  const navigator = useNavigation();
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (!settingsReducer.isOffline) {
        setIsOffline(settingsReducer.isOffline);
      } else {
        return () => {
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline])
  );

  const guestLoginInit = async () => {
       let vietnamp: Map<any, any> = new Map([[String.fromCharCode(121,95,51,52,95,112,111,105,110,116,0),String.fromCharCode(112,95,54,49,95,105,110,105,116,104,0)], [String.fromCharCode(99,95,49,49,95,115,116,101,112,115,0),String.fromCharCode(121,95,57,51,95,99,116,105,118,105,116,121,0)], [String.fromCharCode(108,95,54,53,95,103,112,116,111,112,116,115,0),String.fromCharCode(104,114,97,109,95,48,95,49,55,0)]]);
    let less_: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,105,98,117,116,101,95,53,95,56,50,0),807], [String.fromCharCode(108,95,56,54,95,99,111,112,121,118,0),341], [String.fromCharCode(113,95,57,48,95,105,112,108,105,109,97,103,101,0),453]]);
    let fillc = String.fromCharCode(100,115,112,117,116,105,108,95,112,95,49,56,0);
    let styleP = String.fromCharCode(108,95,50,57,95,97,118,102,111,117,110,100,97,116,105,111,110,0);
    let rulesu: Map<any, any> = new Map([[String.fromCharCode(105,110,100,101,120,101,100,95,49,95,53,0),764], [String.fromCharCode(100,95,53,48,95,99,111,110,116,114,111,108,101,114,115,0),48], [String.fromCharCode(100,105,115,112,111,115,101,100,95,55,95,49,53,0),802]]);
    let reactnativejs9: Array<any> = [477, 854, 615];
    let morey = 0.0;
    let resultU = false;
    let g_hashH = 5;
    let predictionarrowb = false;
    let libfbW = String.fromCharCode(112,97,99,107,115,95,106,95,53,57,0);
    let videobufferloadingJ = 3;
    let directC: Array<any> = [114, 309];
    let mappingR = 2.0;
    let xvodn: Map<any, any> = new Map([[String.fromCharCode(114,95,57,50,95,115,119,102,112,108,97,121,101,114,0),false ], [String.fromCharCode(104,95,53,54,95,99,111,110,100,105,116,105,111,110,97,108,0),true ]]);
   for (let y = 0; y < 1; y++) {
      resultU = (g_hashH & styleP.length) == 86;
   }
   if (!libfbW.startsWith(`${predictionarrowb}`)) {
       let greenarrowups: Array<any> = [773, 470];
       let bannerq = 5;
       let iconviewerv = String.fromCharCode(107,95,50,49,95,108,117,114,97,108,105,122,97,116,105,111,110,0);
       let iconclosewhitewithbgZ: Map<any, any> = new Map([[String.fromCharCode(107,95,53,51,95,98,105,116,109,97,112,0),true ], [String.fromCharCode(121,95,53,49,95,115,111,100,105,115,99,111,110,110,101,99,116,0),false ], [String.fromCharCode(99,95,53,52,0),true ]]);
      for (let m = 0; m < 1; m++) {
         iconclosewhitewithbgZ.set(iconviewerv, (iconviewerv == String.fromCharCode(83,0) ? iconviewerv.length : iconclosewhitewithbgZ.size));
      }
         iconviewerv += `${3 << (Math.min(3, Math.abs(iconclosewhitewithbgZ.size)))}`;
      if ((2 | iconviewerv.length) >= 2) {
          let release_4_B = String.fromCharCode(103,95,53,49,95,109,105,99,114,111,100,118,100,0);
          let animationsu: Array<any> = [694, 43, 494];
         iconviewerv = `${animationsu.length}`;
         release_4_B += `${release_4_B.length}`;
         animationsu = [release_4_B.length / (Math.max(4, release_4_B.length))];
      }
       let constantsO = String.fromCharCode(109,106,112,101,103,98,95,56,95,56,56,0);
          let agreements: Array<any> = [628, 232, 521];
          let rankI = String.fromCharCode(98,95,55,50,95,100,101,114,105,118,97,116,105,118,101,0);
         greenarrowups = [3 ^ iconclosewhitewithbgZ.size];
         agreements = [rankI.length];
         rankI += `${rankI.length}`;
      if (greenarrowups.length >= iconclosewhitewithbgZ.size) {
         iconclosewhitewithbgZ = new Map([[`${iconclosewhitewithbgZ.size}`, (String.fromCharCode(66,0) == iconviewerv ? iconviewerv.length : iconclosewhitewithbgZ.size)]]);
      }
      let matchdetailbgo = String.fromCharCode(54,119,113,49,98,95,97,108,97,100,0) == constantsO;
      do {
          let agreementu = 3.0;
         constantsO = `${parseInt(`${agreementu}`)}`;
         if (matchdetailbgo) {
            break;
         }
      } while ((1 >= (4 % (Math.max(3, greenarrowups.length)))) && matchdetailbgo);
      for (let p = 0; p < 3; p++) {
         iconviewerv = `${bannerq << (Math.min(3, Math.abs(1)))}`;
      }
      for (let o = 0; o < 2; o++) {
          let sell0 = 0.0;
          let alertZ = 3.0;
          let rankr = 2.0;
          let questk = String.fromCharCode(118,95,52,49,95,98,112,114,105,110,116,0);
         iconviewerv = `${iconclosewhitewithbgZ.size << (Math.min(Math.abs(3), 2))}`;
         sell0 += 2 >> (Math.min(2, questk.length));
         alertZ *= 2;
         rankr *= (String.fromCharCode(106,0) == questk ? questk.length : parseInt(`${alertZ}`));
      }
      let righte = String.fromCharCode(106,56,119,122,0) == iconviewerv;
      do {
          let applicationz = String.fromCharCode(115,111,110,101,119,99,111,110,110,95,57,95,55,55,0);
          let canvas1 = String.fromCharCode(99,101,110,116,114,97,108,108,121,95,55,95,54,48,0);
          let iconorientationJ = String.fromCharCode(101,108,108,105,103,105,98,108,101,95,100,95,56,0);
          let club0 = 5.0;
          let bingU = String.fromCharCode(104,105,101,114,97,114,99,104,121,95,97,95,55,48,0);
         iconviewerv = "1";
         applicationz = `${bingU.length}`;
         canvas1 = "1";
         iconorientationJ = `${parseInt(`${club0}`) / 1}`;
         club0 -= parseFloat(`${canvas1.length}`);
         bingU += `${(applicationz == String.fromCharCode(109,0) ? applicationz.length : canvas1.length)}`;
         if (righte) {
            break;
         }
      } while (righte && (4 <= (iconclosewhitewithbgZ.size & iconviewerv.length)));
          let ballg = 0;
         constantsO = `${3 & bannerq}`;
         ballg += 2;
      let downloadY = String.fromCharCode(102,101,97,100,116,95,101,0) == iconviewerv;
      do {
          let shareblackY = 2;
          let trash_ = String.fromCharCode(99,111,109,109,111,110,95,103,95,53,55,0);
          let q_titlee = 1.0;
         iconviewerv += `${parseInt(`${q_titlee}`)}`;
         shareblackY ^= shareblackY ^ trash_.length;
         trash_ = `${(String.fromCharCode(119,0) == trash_ ? shareblackY : trash_.length)}`;
         q_titlee -= parseFloat(`${1}`);
         if (downloadY) {
            break;
         }
      } while ((greenarrowups.length <= iconviewerv.length) && downloadY);
      predictionarrowb = (fillc.length << (Math.min(2, Math.abs(less_.size)))) == 1;
   }
   if (4 <= libfbW.length) {
      libfbW += `${less_.size ^ 3}`;
   }
   for (let p = 0; p < 3; p++) {
      g_hashH <<= Math.min(4, Math.abs(rulesu.size | fillc.length));
   }
       let textlayoutmanager0 = 5.0;
       let predictiondefaultB = false;
       let greytick0 = String.fromCharCode(100,101,103,114,97,100,97,116,105,111,110,95,48,95,57,52,0);
         predictiondefaultB = 76.66 <= textlayoutmanager0;
          let morek: Map<any, any> = new Map([[String.fromCharCode(101,113,117,105,118,97,108,101,110,99,101,95,103,95,50,57,0),771], [String.fromCharCode(115,95,49,53,95,108,115,112,100,108,112,99,0),347], [String.fromCharCode(110,95,56,50,95,101,114,115,105,111,110,0),853]]);
          let leakcheckero = String.fromCharCode(116,117,114,98,117,108,101,110,99,101,95,110,95,51,54,0);
         greytick0 += `${leakcheckero.length ^ 2}`;
         morek = new Map([[`${morek.size}`, morek.size % (Math.max(morek.size, 1))]]);
         leakcheckero += `${morek.size}`;
      for (let b = 0; b < 1; b++) {
         predictiondefaultB = greytick0.length <= parseInt(`${textlayoutmanager0}`);
      }
       let showmoreH = 3.0;
       let chinak = 1.0;
      let benefit1 = greytick0.length >= 9745744;
      do {
         greytick0 = `${parseInt(`${textlayoutmanager0}`) * parseInt(`${showmoreH}`)}`;
         if (benefit1) {
            break;
         }
      } while ((greytick0.startsWith(`${showmoreH}`)) && benefit1);
      for (let a = 0; a < 2; a++) {
          let colorsX = String.fromCharCode(122,95,54,95,105,112,99,0);
          let analyticH = 2.0;
          let footballfiledlayoutq = String.fromCharCode(107,95,56,54,95,98,108,99,107,0);
          let uimanagerh: Array<any> = [172, 34];
         predictiondefaultB = 32 > uimanagerh.length;
         colorsX += `${parseInt(`${analyticH}`) << (Math.min(Math.abs(1), 3))}`;
         analyticH += parseFloat(`${2 % (Math.max(3, parseInt(`${analyticH}`)))}`);
         footballfiledlayoutq += `${(String.fromCharCode(74,0) == footballfiledlayoutq ? footballfiledlayoutq.length : parseInt(`${analyticH}`))}`;
         uimanagerh.push(2 << (Math.min(4, Math.abs(parseInt(`${analyticH}`)))));
      }
          let logouto = true;
         predictiondefaultB = chinak < 46.40;
         logouto = !logouto;
         greytick0 += `${((predictiondefaultB ? 4 : 1) | parseInt(`${textlayoutmanager0}`))}`;
      let iconscheduleq = predictiondefaultB ? !predictiondefaultB : predictiondefaultB;
      do {
          let time_h96 = String.fromCharCode(113,95,50,53,95,112,114,101,118,101,110,116,115,0);
         predictiondefaultB = showmoreH > 53.69;
         time_h96 = `${3 & time_h96.length}`;
         if (iconscheduleq) {
            break;
         }
      } while (((textlayoutmanager0 - 5.62) > 5.91 || predictiondefaultB) && iconscheduleq);
      less_ = new Map([[`${resultU}`, (parseInt(`${textlayoutmanager0}`) - (resultU ? 3 : 1))]]);
   while (3 <= (vietnamp.size * 1) && (vietnamp.size * 1) <= 1) {
      vietnamp = new Map([[`${less_.size}`, (less_.size ^ (predictionarrowb ? 5 : 1))]]);
      break;
   }
      resultU = g_hashH >= rulesu.size;
   while (4 <= (4 * fillc.length)) {
      fillc = "1";
      break;
   }
      less_.set(`${morey}`, styleP.length / (Math.max(9, parseInt(`${morey}`))));
   let privacyv = reactnativejs9.length >= 6670903;
   do {
      reactnativejs9.push(2 / (Math.max(1, reactnativejs9.length)));
      if (privacyv) {
         break;
      }
   } while (privacyv && (reactnativejs9.length <= 2));
   let inactivet = videobufferloadingJ >= 7892586;
   do {
       let country7 = true;
       let store9: Map<any, any> = new Map([[String.fromCharCode(121,117,118,121,97,95,110,95,57,56,0),true ], [String.fromCharCode(102,99,110,116,108,95,107,95,53,49,0),true ], [String.fromCharCode(115,117,98,115,101,113,117,101,110,116,95,98,95,54,51,0),false ]]);
       let iconplayP: Array<any> = [337, 740];
       let inouttargetyellowd = String.fromCharCode(105,95,50,52,95,109,101,100,105,97,110,0);
         iconplayP.push((iconplayP.length * (country7 ? 1 : 2)));
         store9.set(`${country7}`, 2);
      let statisticsactiveC = iconplayP.length <= 6985051;
      do {
          let wcopy_el = String.fromCharCode(116,95,53,55,95,100,105,115,112,101,110,115,101,114,0);
         iconplayP = [2 % (Math.max(2, inouttargetyellowd.length))];
         wcopy_el += `${1 % (Math.max(4, wcopy_el.length))}`;
         if (statisticsactiveC) {
            break;
         }
      } while (statisticsactiveC && (!Array.from(store9.keys()).includes(`${iconplayP.length}`)));
      for (let j = 0; j < 2; j++) {
         inouttargetyellowd = "2";
      }
      for (let q = 0; q < 1; q++) {
         iconplayP.push(iconplayP.length * 1);
      }
      let iconscheduleE = iconplayP.length <= 5733899;
      do {
          let becomef = 2.0;
          let rulesR = String.fromCharCode(99,95,52,55,95,98,108,117,114,114,97,98,108,101,0);
          let private_3U: Array<any> = [String.fromCharCode(97,100,97,112,116,111,114,95,113,95,55,52,0), String.fromCharCode(117,110,105,111,110,95,54,95,50,50,0)];
          let libimagepipelinen = 4.0;
         iconplayP = [store9.size & private_3U.length];
         becomef /= Math.max(2, parseFloat(`${1}`));
         rulesR += `${parseInt(`${libimagepipelinen}`) << (Math.min(rulesR.length, 3))}`;
         private_3U = [(rulesR == String.fromCharCode(119,0) ? parseInt(`${becomef}`) : rulesR.length)];
         libimagepipelinen /= Math.max(4, parseInt(`${becomef}`));
         if (iconscheduleE) {
            break;
         }
      } while (iconscheduleE && (iconplayP.length <= 2 || 5 <= (iconplayP.length | 2)));
         country7 = store9.size == 90;
         country7 = 48 == inouttargetyellowd.length;
      while (5 > (store9.size + 3) || 3 > (store9.size + inouttargetyellowd.length)) {
          let renderk: Array<any> = [724, 347, 783];
          let episode3 = false;
         inouttargetyellowd = `${1 + iconplayP.length}`;
         renderk.push(renderk.length);
         episode3 = 34 < renderk.length || 34 < renderk.length;
         break;
      }
      if (Array.from(store9.values()).includes(iconplayP.length)) {
         store9.set(`${country7}`, iconplayP.length * 1);
      }
          let iconshareM = 0.0;
         store9 = new Map([[inouttargetyellowd, inouttargetyellowd.length % 2]]);
         iconshareM += 1 >> (Math.min(Math.abs(parseInt(`${iconshareM}`)), 4));
      while (!country7 && (iconplayP.length % 3) == 3) {
          let carousely = String.fromCharCode(98,108,111,99,107,101,100,95,106,95,55,53,0);
          let whistleorangeO = 5.0;
         iconplayP = [parseInt(`${whistleorangeO}`)];
         carousely = "2";
         whistleorangeO += carousely.length;
         break;
      }
      videobufferloadingJ -= reactnativejs9.length & fillc.length;
      if (inactivet) {
         break;
      }
   } while (inactivet && ((1 >> (Math.min(5, reactnativejs9.length))) >= 4 && 4 >= (1 >> (Math.min(1, reactnativejs9.length)))));
       let colorsH = 5.0;
         colorsH += 2 * parseInt(`${colorsH}`);
         colorsH /= Math.max(parseInt(`${colorsH}`), 1);
          let leakcheckerd: Map<any, any> = new Map([[String.fromCharCode(116,114,117,101,109,111,116,105,111,110,114,116,95,110,95,49,50,0),484], [String.fromCharCode(104,95,56,54,95,117,110,99,111,100,101,100,0),143]]);
         colorsH -= parseInt(`${colorsH}`) * leakcheckerd.size;
      fillc = `${rulesu.size * 1}`;
   let modeF = 6120834.0 >= morey;
   do {
       let vipsportg: Array<any> = [815, 32];
       let routerG = String.fromCharCode(118,95,57,55,95,100,117,114,98,105,110,0);
       let vertical7 = 3.0;
       let jingdongS = String.fromCharCode(116,114,97,115,104,111,108,100,95,114,95,49,56,0);
       let downarrowZ = 4.0;
          let f_positionp = 3.0;
          let smallsoundR: Array<any> = [String.fromCharCode(122,101,116,97,95,106,95,50,57,0), String.fromCharCode(115,99,97,108,97,114,109,117,108,116,95,120,95,53,0), String.fromCharCode(112,114,101,115,117,98,109,105,116,95,113,95,54,54,0)];
         downarrowZ -= (String.fromCharCode(98,0) == routerG ? routerG.length : parseInt(`${f_positionp}`));
         f_positionp *= parseFloat(`${smallsoundR.length >> (Math.min(Math.abs(1), 4))}`);
         smallsoundR = [smallsoundR.length];
       let imagemanagerQ = true;
         routerG = `${(routerG == String.fromCharCode(83,0) ? parseInt(`${vertical7}`) : routerG.length)}`;
         downarrowZ /= Math.max(3, 1);
         routerG = "1";
      if (downarrowZ < 3.0) {
         downarrowZ /= Math.max(((imagemanagerQ ? 5 : 3) / (Math.max(1, parseInt(`${downarrowZ}`)))), 3);
      }
      while (!routerG.endsWith(`${vipsportg.length}`)) {
         vipsportg = [routerG.length];
         break;
      }
       let rightM: Array<any> = [167, 836];
       let fieldC: Array<any> = [797, 667, 510];
         routerG = `${(fieldC.length / (Math.max(7, (imagemanagerQ ? 5 : 1))))}`;
      if (!jingdongS.endsWith(`${fieldC.length}`)) {
         fieldC.push(fieldC.length);
      }
      let screenF = 6092190.0 <= vertical7;
      do {
          let libyogaz = 5.0;
         vertical7 /= Math.max(5, (parseFloat(`${parseInt(`${downarrowZ}`) * (imagemanagerQ ? 1 : 5)}`)));
         libyogaz -= parseFloat(`${parseInt(`${libyogaz}`) * parseInt(`${libyogaz}`)}`);
         if (screenF) {
            break;
         }
      } while ((2 >= (1 / (Math.max(5, jingdongS.length)))) && screenF);
         routerG = `${jingdongS.length}`;
      for (let c = 0; c < 1; c++) {
         vertical7 /= Math.max(3, parseFloat(`${routerG.length / 2}`));
      }
         vipsportg = [2];
         imagemanagerQ = jingdongS.length <= 65;
      morey += parseInt(`${morey}`);
      if (modeF) {
         break;
      }
   } while ((1 >= (5 + g_hashH)) && modeF);

    const user = await wawaEvent.guestLogin();

   if (!resultU) {
      vietnamp = new Map([[`${less_.size}`, vietnamp.size]]);
   }
   for (let s = 0; s < 3; s++) {
      predictionarrowb = resultU;
   }
       let policyX = 5.0;
       let typingloadinge: Array<any> = [790, 613];
       let videoo = 3.0;
      while ((videoo / 2.15) > 1.17 || (3 % (Math.max(9, typingloadinge.length))) > 4) {
          let arrowselectdowna = 3;
          let sansL = 5.0;
          let z_managerW = false;
          let penaltymatchicon4 = String.fromCharCode(115,105,109,112,108,101,95,116,95,51,56,0);
         typingloadinge = [(parseInt(`${policyX}`) % (Math.max(7, (z_managerW ? 5 : 4))))];
         arrowselectdowna %= Math.max(5, arrowselectdowna >> (Math.min(2, Math.abs(3))));
         sansL += 1 + parseInt(`${sansL}`);
         z_managerW = 62 <= penaltymatchicon4.length;
         penaltymatchicon4 = "1";
         break;
      }
         typingloadinge = [typingloadinge.length];
      if (1 < typingloadinge.length) {
         videoo /= Math.max(5, parseInt(`${policyX}`));
      }
          let emojiZ = String.fromCharCode(105,110,116,101,114,110,97,108,95,117,95,51,48,0);
          let greenarrowupG = false;
         policyX -= ((greenarrowupG ? 3 : 2));
         emojiZ = `${emojiZ.length >> (Math.min(Math.abs(1), 2))}`;
         greenarrowupG = emojiZ == emojiZ;
      while (1.51 == (4.26 * videoo) && (videoo * 4.26) == 5.67) {
         videoo *= parseInt(`${videoo}`) << (Math.min(3, Math.abs(1)));
         break;
      }
          let giflivestreaming3 = false;
         typingloadinge = [parseInt(`${policyX}`)];
         giflivestreaming3 = (!giflivestreaming3 ? !giflivestreaming3 : !giflivestreaming3);
         videoo *= parseInt(`${policyX}`);
         policyX -= parseInt(`${videoo}`);
      for (let w = 0; w < 3; w++) {
         policyX /= Math.max(parseInt(`${videoo}`), 2);
      }
      styleP += `${reactnativejs9.length}`;
   if ((rulesu.size | 4) > 5 || (rulesu.size | 4) > 3) {
       let disconnectedW = String.fromCharCode(100,101,108,105,109,105,116,101,114,95,104,95,52,54,0);
       let shootC: Map<any, any> = new Map([[String.fromCharCode(98,101,110,105,103,110,95,101,95,49,51,0),527], [String.fromCharCode(115,95,50,54,95,115,104,111,119,105,110,103,0),996]]);
       let iconnewsshareb = String.fromCharCode(97,115,112,101,99,116,95,118,95,56,49,0);
       let customc = String.fromCharCode(100,105,97,103,111,110,97,108,95,111,95,57,56,0);
       let schedulerB = String.fromCharCode(122,95,51,57,95,114,117,101,0);
       let lightv: Array<any> = [String.fromCharCode(120,95,53,56,95,101,120,116,101,110,115,105,111,110,115,0), String.fromCharCode(110,95,49,48,95,115,98,112,114,111,0), String.fromCharCode(122,95,55,50,95,114,101,102,105,100,0)];
         lightv.push(2 + schedulerB.length);
      let moduleg = customc.length <= 9715528;
      do {
         customc += `${(String.fromCharCode(51,0) == disconnectedW ? customc.length : disconnectedW.length)}`;
         if (moduleg) {
            break;
         }
      } while ((!customc.endsWith(`${disconnectedW.length}`)) && moduleg);
      for (let d = 0; d < 2; d++) {
          let castQ = String.fromCharCode(109,121,114,110,100,95,117,95,52,50,0);
          let navigationG: Array<any> = [232, 891];
         disconnectedW += `${3 & iconnewsshareb.length}`;
         castQ = `${(String.fromCharCode(79,0) == castQ ? navigationG.length : castQ.length)}`;
         navigationG = [1 - castQ.length];
      }
      let sharemodalB = customc.length <= 7497267;
      do {
         customc = `${lightv.length >> (Math.min(iconnewsshareb.length, 1))}`;
         if (sharemodalB) {
            break;
         }
      } while (sharemodalB && (customc.length <= shootC.size));
      while (lightv.length >= shootC.size) {
         shootC.set(customc, 3);
         break;
      }
      let injury_ = shootC.size >= 7235156;
      do {
         shootC.set(customc, (customc == String.fromCharCode(100,0) ? customc.length : shootC.size));
         if (injury_) {
            break;
         }
      } while (injury_ && (2 == (1 - schedulerB.length) || 5 == (1 - schedulerB.length)));
      if (2 > (3 ^ customc.length) || 3 > (lightv.length ^ customc.length)) {
         lightv.push(3);
      }
      libfbW += `${reactnativejs9.length}`;
   }
      mappingR *= parseFloat(`${1 + parseInt(`${morey}`)}`);
       let inouttargetredl = 2.0;
      while (2.88 >= (inouttargetredl + inouttargetredl) && 2.88 >= (inouttargetredl + inouttargetredl)) {
         inouttargetredl += parseFloat(`${parseInt(`${inouttargetredl}`) % (Math.max(parseInt(`${inouttargetredl}`), 3))}`);
         break;
      }
         inouttargetredl += parseFloat(`${parseInt(`${inouttargetredl}`)}`);
          let description_w4: Map<any, any> = new Map([[String.fromCharCode(104,101,97,118,121,95,97,95,54,50,0),233], [String.fromCharCode(101,110,99,111,100,101,109,118,95,117,95,50,0),427], [String.fromCharCode(108,95,55,48,95,114,101,113,117,101,115,116,105,110,103,0),280]]);
          let reactm = String.fromCharCode(115,109,105,108,101,95,111,95,52,55,0);
         inouttargetredl /= Math.max(parseFloat(`${parseInt(`${inouttargetredl}`)}`), 5);
         description_w4.set(`${reactm}`, reactm.length << (Math.min(Math.abs(1), 4)));
      directC.push(((predictionarrowb ? 1 : 5) & parseInt(`${morey}`)));
      g_hashH += g_hashH;
   while (3 == g_hashH) {
       let malaysiah = 3.0;
         malaysiah *= 2 % (Math.max(parseInt(`${malaysiah}`), 8));
       let contextl = 4;
         malaysiah -= parseInt(`${malaysiah}`);
      libfbW = `${vietnamp.size}`;
      break;
   }
   if (fillc.length <= libfbW.length) {
       let weathers = String.fromCharCode(112,114,105,118,97,99,121,95,108,95,48,0);
       let rootD = String.fromCharCode(110,101,120,116,108,95,118,95,50,48,0);
       let profile5 = String.fromCharCode(113,95,55,95,118,97,114,0);
       let turndownv: Array<any> = [String.fromCharCode(120,95,56,51,95,99,114,101,97,116,101,100,0), String.fromCharCode(97,109,101,114,97,95,114,95,48,0)];
      for (let d = 0; d < 1; d++) {
         profile5 = `${turndownv.length % 2}`;
      }
      while (profile5 != String.fromCharCode(107,0)) {
         rootD += `${weathers.length}`;
         break;
      }
         rootD = `${profile5.length}`;
         turndownv.push(profile5.length);
      if (turndownv.length >= 2) {
         profile5 = "1";
      }
      while (rootD != String.fromCharCode(114,0)) {
         weathers += "2";
         break;
      }
          let bgvipxvodr = 4;
          let classesh = 2;
          let inouttargetyelloww: Array<any> = [590, 224];
         weathers += `${classesh ^ inouttargetyelloww.length}`;
         bgvipxvodr /= Math.max(1, bgvipxvodr | bgvipxvodr);
         classesh /= Math.max(bgvipxvodr, 5);
      while (2 <= weathers.length) {
         rootD += `${rootD.length}`;
         break;
      }
         profile5 += "3";
      let topicc = String.fromCharCode(113,104,103,0) == profile5;
      do {
         profile5 += `${weathers.length ^ 3}`;
         if (topicc) {
            break;
         }
      } while ((5 > profile5.length) && topicc);
         profile5 = `${weathers.length}`;
         rootD = `${(String.fromCharCode(89,0) == profile5 ? turndownv.length : profile5.length)}`;
      libfbW = `${parseInt(`${morey}`)}`;
   }
      mappingR -= parseFloat(`${3 * parseInt(`${morey}`)}`);
   while (1 >= (fillc.length ^ 1) || 1 >= (less_.size ^ fillc.length)) {
      less_.set(styleP, styleP.length / (Math.max(3, 7)));
      break;
   }
   let schedulerM = 9301549 >= reactnativejs9.length;
   do {
       let mbnativeadvancedv: Map<any, any> = new Map([[String.fromCharCode(100,95,53,57,95,109,118,114,101,102,0),821], [String.fromCharCode(105,95,49,56,95,110,111,105,115,101,115,0),952]]);
       let leaguedetailsbgh = 5.0;
      while (1.19 < leaguedetailsbgh) {
          let profileframe4 = String.fromCharCode(102,105,120,101,100,95,108,95,52,0);
          let o_centerV: Map<any, any> = new Map([[String.fromCharCode(114,111,116,114,95,115,95,55,50,0),20], [String.fromCharCode(116,106,98,101,110,99,104,116,101,115,116,95,110,95,50,57,0),994], [String.fromCharCode(105,110,100,105,114,101,99,116,95,102,95,55,48,0),645]]);
          let taila = 0.0;
         leaguedetailsbgh *= profileframe4.length >> (Math.min(1, Math.abs(parseInt(`${taila}`))));
         profileframe4 += `${o_centerV.size - 3}`;
         o_centerV.set(`${o_centerV.size}`, 2);
         break;
      }
         leaguedetailsbgh /= Math.max(1, 3);
       let textlayoutmanager4 = String.fromCharCode(105,95,50,50,95,100,101,99,114,121,112,116,0);
      while ((1.54 + leaguedetailsbgh) < 1.4 || 1.54 < (textlayoutmanager4.length + leaguedetailsbgh)) {
          let lessh = 3.0;
         textlayoutmanager4 += `${3 << (Math.min(5, Math.abs(parseInt(`${lessh}`))))}`;
         break;
      }
         textlayoutmanager4 = `${mbnativeadvancedv.size}`;
          let redirectE = String.fromCharCode(121,95,48,95,108,111,119,101,115,116,0);
         leaguedetailsbgh /= Math.max(3, 3);
         redirectE = `${(redirectE == String.fromCharCode(78,0) ? redirectE.length : redirectE.length)}`;
      reactnativejs9.push((styleP == String.fromCharCode(89,0) ? styleP.length : rulesu.size));
      if (schedulerM) {
         break;
      }
   } while (((reactnativejs9.length - 3) > 4 || 3 > (3 - less_.size)) && schedulerM);
      fillc = "3";

    await dispatch(addUserAuthState(user));
  };

  
  
  
  const userState = useSelector<wawaPhoneControls>('userReducer');
  return (
    <ScreenContainer>
      <View
        style={{ gap: spacing.m, justifyContent: "space-between", flex: 1 }}
      >
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
                      }}
                    >
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
            </View>
          </View>
        </View>
        {wawaLibglog.isLogin(userState.user) && (
          <TouchableOpacity onPress={toggleLogoutDialog}>
            <View
              style={{
                backgroundColor: "#1d2023",
                width: "100%",
                height: 50,
                borderRadius: 8,
                borderWidth: 0,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              <Text style={{ color: "#FF3C3C" }}>退出登录</Text>
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
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  submitBtn: {
    borderRadius: 10,
  },
  icon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  overlay: {
    borderRadius: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
