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
import ScreenContainer from "../../components/container/yys_matches";
import { RootStackScreenProps } from "@type";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";

import TitleWithBackButtonHeader from "../../components/header/yys_away_predictionloss_header";
import { Button, Dialog } from "@rneui/themed";
import ShowMoreButton from "../../components/button/yys_gradle_dice_button";
import NotificationModal from "../../components/modal/yys_cornershoot_smallsound";
import { MoreArrowSvg } from "@static";
import ConfirmationModal from "../../components/modal/yys_twitter";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks";
import { clearStorageMemory } from "@redux";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { removeUserAuthState } from "@redux";
import { changeScreenAction } from "@redux";
import { yysIconclosewhiteBaiduads } from "@redux";

import { APP_VERSION } from "@utility";
import { yysDownloadingCombined } from "@redux";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { yysConfig } from "@utility";
import { clearMinivodApiCache } from "../../utils/yys_nativemodule_mbnativeadvanced";
import { yysHomeloading } from "../../api/yys_embed";
import { addUserAuthState } from "@redux";
import { yysIconplaySuggestion } from '@redux';
import { yysIconstar } from "@models";

export default ({ navigation }: RootStackScreenProps<"设置">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isVersionDialogOpen, setIsVersionDialogOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const [subtitle1, setSubtitle1] = useState("当前已是最新版本" + APP_VERSION);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false); 

  const settingsReducer: yysDownloadingCombined = useAppSelector(
    ({ settingsReducer }: yysIconclosewhiteBaiduads) => settingsReducer
  );

  const dispatch = useAppDispatch();

  const toggleLogoutDialog = () => {
       let ballr = 3.0;
    let rewardO: Map<any, any> = new Map([[String.fromCharCode(102,105,108,101,115,121,115,116,101,109,0),862], [String.fromCharCode(118,105,115,117,97,108,105,122,97,116,105,111,110,0),307]]);
    let gesturesn = false;
    let shoot2: Array<any> = [191, 47, 463];
    let smallsoundQ = 5.0;
    let largeV = 3.0;
    let actionsi = 3.0;
    let mimoz: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,108,105,103,116,104,101,100,0),false ], [String.fromCharCode(115,105,103,110,101,100,0),false ]]);
    let circle7 = 5.0;
    let redirectK: Map<any, any> = new Map([[String.fromCharCode(97,108,108,0),true ], [String.fromCharCode(102,117,108,102,105,108,108,101,100,0),false ]]);
    let pushw = 3;
    let libreactnativeblobv: Map<any, any> = new Map([[String.fromCharCode(115,121,109,98,111,108,105,99,97,116,101,0),215], [String.fromCharCode(119,120,109,109,116,101,115,116,0),896]]);
    let sports2 = false;
   while (5.91 <= (3.64 * ballr) || 1 <= (shoot2.length * parseInt(`${ballr}`))) {
       let dragO = 5.0;
       let smallbrightnessT = String.fromCharCode(114,101,115,105,103,110,115,0);
       let fastforwardW = 2;
       let megaphoneM = 4;
       let dataD = 2;
      let leaguedetailsbgo = 8098978.0 <= dragO;
      do {
         dragO += parseFloat(`${parseInt(`${dragO}`) / 1}`);
         if (leaguedetailsbgo) {
            break;
         }
      } while ((1.55 > dragO) && leaguedetailsbgo);
      while ((smallbrightnessT.length ^ dataD) < 2 || 2 < (2 ^ dataD)) {
         dataD -= megaphoneM;
         break;
      }
      if (4.34 >= dragO) {
         fastforwardW <<= Math.min(Math.abs(1 ^ fastforwardW), 1);
      }
          let default_kjw = true;
          let commentA = 5.0;
          let sportd = 4.0;
         dataD %= Math.max(4, (fastforwardW << (Math.min(4, Math.abs((default_kjw ? 2 : 1))))));
         default_kjw = (sportd * commentA) < 40.20;
         commentA -= parseFloat(`${parseInt(`${sportd}`) ^ parseInt(`${commentA}`)}`);
         megaphoneM >>= Math.min(Math.abs(parseInt(`${dragO}`)), 2);
         dragO += parseFloat(`${2}`);
          let libruntimeexecutorM: Map<any, any> = new Map([[String.fromCharCode(121,98,121,114,0),String.fromCharCode(99,111,117,110,116,100,111,119,110,0)], [String.fromCharCode(100,101,115,107,116,111,112,0),String.fromCharCode(97,117,116,104,111,114,105,122,97,116,105,111,110,115,0)]]);
         dataD %= Math.max(libruntimeexecutorM.size - dataD, 4);
      if ((smallbrightnessT.length - parseInt(`${dragO}`)) >= 4 && 4.1 >= (dragO - parseFloat(`${smallbrightnessT.length}`))) {
         dragO *= parseFloat(`${parseInt(`${dragO}`) / (Math.max(10, dataD))}`);
      }
      if ((fastforwardW * megaphoneM) < 4) {
         fastforwardW -= (smallbrightnessT == String.fromCharCode(97,0) ? smallbrightnessT.length : parseInt(`${dragO}`));
      }
      while (megaphoneM == fastforwardW) {
          let shirtz = String.fromCharCode(97,102,102,105,110,101,0);
          let videojsa: Array<any> = [873, 568, 766];
          let kuaishoun = true;
          let sharemodalH: Array<any> = [768, 758];
          let twitterd = String.fromCharCode(117,112,99,111,109,105,110,103,0);
         fastforwardW %= Math.max(3, sharemodalH.length << (Math.min(Math.abs(1), 3)));
         shirtz += "2";
         videojsa = [((kuaishoun ? 4 : 3) % 2)];
         sharemodalH = [1 | twitterd.length];
         twitterd = `${((kuaishoun ? 5 : 5) - 1)}`;
         break;
      }
      if (1 > (megaphoneM * fastforwardW) && (megaphoneM * 1) > 3) {
         megaphoneM |= parseInt(`${dragO}`);
      }
          let constantsj: Array<any> = [430, 727];
         dataD ^= fastforwardW;
         constantsj.push(constantsj.length);
      for (let h = 0; h < 2; h++) {
         dragO *= parseFloat(`${fastforwardW << (Math.min(smallbrightnessT.length, 4))}`);
      }
      while (dragO < fastforwardW) {
         dragO *= parseFloat(`${smallbrightnessT.length | 3}`);
         break;
      }
      let klevinZ = fastforwardW >= 6980612;
      do {
         fastforwardW += fastforwardW + 1;
         if (klevinZ) {
            break;
         }
      } while ((dataD <= fastforwardW) && klevinZ);
      shoot2.push((megaphoneM * (gesturesn ? 3 : 4)));
      break;
   }
   let goalm = mimoz.size >= 6595948;
   do {
      mimoz.set(`${pushw}`, 2 | mimoz.size);
      if (goalm) {
         break;
      }
   } while (goalm && (1.76 < (circle7 * 4.23) && (mimoz.size ^ 1) < 2));
   if (4.73 == (circle7 - parseFloat(`${rewardO.size}`))) {
      circle7 *= parseFloat(`${pushw | 2}`);
   }
      pushw <<= Math.min(5, Math.abs(parseInt(`${ballr}`) | 3));
   while (2.62 == (circle7 / 4.90) && (largeV / (Math.max(circle7, 2))) == 4.90) {
      circle7 -= parseFloat(`${redirectK.size & pushw}`);
      break;
   }
   for (let l = 0; l < 3; l++) {
       let countdowna = 2;
      if ((4 - countdowna) < 3) {
         countdowna *= countdowna * 3;
      }
      while ((2 * countdowna) >= 5 || (countdowna * 2) >= 2) {
          let sliderD: Array<any> = [984, 7, 675];
          let defaultprofilepicq = 2;
         countdowna ^= sliderD.length / 1;
         sliderD = [defaultprofilepicq];
         break;
      }
         countdowna /= Math.max(5, 2);
      smallsoundQ *= parseInt(`${circle7}`) ^ rewardO.size;
   }
   if (5.87 > (3.76 * ballr) && 3.76 > (ballr + actionsi)) {
      ballr /= Math.max(mimoz.size | parseInt(`${actionsi}`), 4);
   }
   let bottomN = 6794606.0 >= circle7;
   do {
      circle7 -= parseFloat(`${parseInt(`${largeV}`) | 2}`);
      if (bottomN) {
         break;
      }
   } while ((1.82 <= (circle7 + actionsi) && 1.82 <= (actionsi + circle7)) && bottomN);
   let iconbellactiveD = 7001144 <= shoot2.length;
   do {
      shoot2.push(pushw);
      if (iconbellactiveD) {
         break;
      }
   } while (((shoot2.length + 2) > 1 && 2 > (shoot2.length + mimoz.size)) && iconbellactiveD);
       let iconrefreshW = 2.0;
       let auto_iN = 1.0;
       let bannerR = String.fromCharCode(114,116,99,115,116,97,116,115,0);
      for (let r = 0; r < 2; r++) {
         auto_iN *= (String.fromCharCode(118,0) == bannerR ? parseInt(`${auto_iN}`) : bannerR.length);
      }
          let penaltygoalO = 2.0;
          let sportR: Map<any, any> = new Map([[String.fromCharCode(112,114,111,109,112,101,103,0),false ], [String.fromCharCode(99,111,117,110,116,113,117,97,110,116,0),true ], [String.fromCharCode(119,105,108,108,0),false ]]);
          let promotionf = 4.0;
         auto_iN *= parseInt(`${promotionf}`) & 1;
         penaltygoalO /= Math.max(2, parseFloat(`${1}`));
         sportR.set(`${penaltygoalO}`, sportR.size);
         promotionf -= sportR.size / 2;
         auto_iN -= parseInt(`${auto_iN}`);
       let downloadedQ: Map<any, any> = new Map([[String.fromCharCode(115,113,114,116,110,101,103,0),338], [String.fromCharCode(117,118,97,114,105,110,116,0),264]]);
      if (2 < (downloadedQ.size / (Math.max(4, parseInt(`${auto_iN}`)))) && (auto_iN / 3.36) < 2.40) {
         downloadedQ.set(`${auto_iN}`, parseInt(`${auto_iN}`) / (Math.max(downloadedQ.size, 3)));
      }
       let cornershootG = 3.0;
       let morej = 1.0;
      while ((bannerR.length << (Math.min(Math.abs(1), 2))) > 1 && (1 << (Math.min(5, Math.abs(downloadedQ.size)))) > 2) {
         downloadedQ.set(`${auto_iN}`, 2 << (Math.min(3, Math.abs(parseInt(`${auto_iN}`)))));
         break;
      }
      if (5.71 == (cornershootG / (Math.max(6, auto_iN)))) {
          let bodani = 2.0;
          let interstitial8 = true;
         cornershootG *= bannerR.length & parseInt(`${bodani}`);
         bodani *= parseFloat(`${3}`);
      }
      let sharewhitey = downloadedQ.size >= 6961270;
      do {
         downloadedQ.set(`${auto_iN}`, parseInt(`${auto_iN}`));
         if (sharewhitey) {
            break;
         }
      } while ((3.46 > (2.11 - cornershootG) && 2 > (downloadedQ.size * 2)) && sharewhitey);
      circle7 *= parseFloat(`${3}`);
      iconrefreshW /= Math.max(2, parseFloat(`${1 ^ parseInt(`${iconrefreshW}`)}`));
       let predictionbannerS: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,97,110,116,0),671], [String.fromCharCode(100,105,115,109,105,115,115,97,108,0),47], [String.fromCharCode(114,105,99,104,0),798]]);
         predictionbannerS = new Map([[`${predictionbannerS.size}`, 1]]);
      for (let o = 0; o < 1; o++) {
          let termst = String.fromCharCode(109,101,109,98,101,114,115,104,105,112,0);
          let tailD = String.fromCharCode(100,97,121,115,0);
          let floatern = String.fromCharCode(104,97,115,104,107,101,121,0);
          let becomeJ = String.fromCharCode(114,101,97,99,116,105,111,110,115,0);
          let javao: Map<any, any> = new Map([[String.fromCharCode(108,97,110,99,122,111,115,0),811], [String.fromCharCode(115,104,101,101,114,118,105,100,101,111,100,97,116,97,0),455]]);
         predictionbannerS = new Map([[floatern, floatern.length]]);
         termst = `${tailD.length << (Math.min(Math.abs(1), 3))}`;
         tailD = `${tailD.length % (Math.max(3, 1))}`;
         becomeJ = `${termst.length}`;
         javao.set(`${termst}`, 2);
      }
         predictionbannerS = new Map([[`${predictionbannerS.size}`, predictionbannerS.size]]);
      gesturesn = redirectK.size > smallsoundQ;
   if (redirectK.get(`${circle7}`) != null) {
      redirectK = new Map([[`${pushw}`, parseInt(`${smallsoundQ}`) << (Math.min(1, Math.abs(pushw)))]]);
   }
      smallsoundQ *= 2 + parseInt(`${actionsi}`);
      pushw %= Math.max((3 >> (Math.min(1, Math.abs((gesturesn ? 3 : 4))))), 3);
      ballr -= shoot2.length;
   if ((pushw ^ mimoz.size) >= 2 || 2 >= (2 ^ pushw)) {
      mimoz.set(`${largeV}`, ((gesturesn ? 4 : 3) & parseInt(`${largeV}`)));
   }
   while (5.8 < (largeV * 5)) {
      actionsi *= 3 | redirectK.size;
      break;
   }
      largeV += pushw;
      circle7 += (parseFloat(`${parseInt(`${actionsi}`) | (gesturesn ? 3 : 5)}`));
      redirectK = new Map([[`${rewardO.size}`, 2]]);
      pushw *= parseInt(`${ballr}`);
   if (actionsi < circle7) {
       let catalogs = String.fromCharCode(105,109,112,111,114,116,101,100,0);
       let logoutC = true;
       let update_xa = String.fromCharCode(99,111,110,102,105,103,117,114,101,114,0);
         update_xa += "2";
      for (let n = 0; n < 3; n++) {
          let selectionw = 3;
          let linkm = String.fromCharCode(98,101,99,97,109,101,0);
          let codeJ = false;
          let frame_wtC: Array<any> = [459, 801];
          let dependency3 = 5.0;
         logoutC = 67 > selectionw;
         selectionw &= ((codeJ ? 5 : 2) / (Math.max(frame_wtC.length, 1)));
         linkm = `${linkm.length}`;
         codeJ = linkm.startsWith(`${dependency3}`);
         frame_wtC = [2 | parseInt(`${dependency3}`)];
      }
      for (let i = 0; i < 1; i++) {
         catalogs = `${catalogs.length}`;
      }
      while (!logoutC) {
         logoutC = (10 <= ((logoutC ? update_xa.length : 10) & update_xa.length));
         break;
      }
      while (4 <= catalogs.length) {
         catalogs = `${(update_xa == String.fromCharCode(66,0) ? update_xa.length : (logoutC ? 4 : 4))}`;
         break;
      }
          let iconfeedbackj: Map<any, any> = new Map([[String.fromCharCode(119,105,110,100,105,110,103,0),508], [String.fromCharCode(108,111,99,97,108,116,105,109,101,0),837]]);
          let iconpointscoreZ = 0.0;
         update_xa += `${update_xa.length}`;
         iconfeedbackj = new Map([[`${iconfeedbackj.size}`, parseInt(`${iconpointscoreZ}`)]]);
         iconpointscoreZ -= iconfeedbackj.size - parseInt(`${iconpointscoreZ}`);
       let dragcloseI = true;
       let awayicon2 = false;
      while (catalogs.length < 4) {
         update_xa = `${update_xa.length % 2}`;
         break;
      }
         catalogs += "2";
      actionsi *= 3 + shoot2.length;
   }
   while ((4.90 / (Math.max(6, ballr))) < 4.41 && 4.90 < (largeV * ballr)) {
      ballr += shoot2.length;
      break;
   }
   let gradlewD = largeV <= 5692567.0;
   do {
      largeV += 2 >> (Math.min(Math.abs(parseInt(`${largeV}`)), 2));
      if (gradlewD) {
         break;
      }
   } while ((!shoot2.includes(largeV)) && gradlewD);
   while (3 >= (pushw * mimoz.size) || (pushw * 3) >= 4) {
      pushw -= 2 - parseInt(`${actionsi}`);
      break;
   }
   for (let o = 0; o < 2; o++) {
       let downarrow8 = true;
       let network7 = 4;
       let redcirclebgW = String.fromCharCode(102,97,99,101,115,0);
      for (let e = 0; e < 2; e++) {
         network7 >>= Math.min(Math.abs(network7 + 1), 1);
      }
          let footballfield2 = String.fromCharCode(112,105,110,110,101,114,0);
          let yellowscoreballo = false;
          let leakcheckerM = String.fromCharCode(115,101,113,117,101,110,99,101,0);
         downarrow8 = !downarrow8;
         footballfield2 += `${(2 << (Math.min(2, Math.abs((yellowscoreballo ? 4 : 1)))))}`;
         yellowscoreballo = yellowscoreballo && leakcheckerM.length > 59;
         leakcheckerM = `${((yellowscoreballo ? 3 : 3) - 2)}`;
      for (let w = 0; w < 2; w++) {
          let gpayc = 1;
         network7 ^= 2;
         gpayc -= gpayc;
      }
      for (let h = 0; h < 3; h++) {
          let executork = 4;
          let iconsaveimage7 = 5.0;
          let tickedo: Array<any> = [32, 548, 187];
          let owngoal1 = String.fromCharCode(119,101,108,115,100,101,99,100,101,109,111,0);
         redcirclebgW += `${(String.fromCharCode(112,0) == redcirclebgW ? redcirclebgW.length : parseInt(`${iconsaveimage7}`))}`;
         executork ^= tickedo.length + executork;
         iconsaveimage7 += parseFloat(`${tickedo.length % 1}`);
         owngoal1 += `${executork}`;
      }
      let inactiveI = 8544494 >= network7;
      do {
         network7 ^= 3;
         if (inactiveI) {
            break;
         }
      } while ((3 < (redcirclebgW.length - network7)) && inactiveI);
         redcirclebgW = `${(redcirclebgW == String.fromCharCode(121,0) ? network7 : redcirclebgW.length)}`;
      if (network7 < 4) {
         network7 /= Math.max(3 * network7, 4);
      }
         downarrow8 = redcirclebgW.startsWith(`${network7}`);
      while (5 < redcirclebgW.length) {
         redcirclebgW += `${((downarrow8 ? 3 : 4))}`;
         break;
      }
      mimoz.set(`${gesturesn}`, 1);
   }

    setIsLogoutDialogOpen(!isLogoutDialogOpen);
  };

  const toggleVersionDialog = () => {
       let iconeditW = String.fromCharCode(111,112,117,115,0);
    let controlsE: Array<any> = [775, 844, 993];
    let countryG: Map<any, any> = new Map([[String.fromCharCode(102,116,118,110,115,0),String.fromCharCode(114,111,119,115,107,105,112,0)], [String.fromCharCode(97,105,110,116,95,118,95,52,55,0),String.fromCharCode(114,97,110,103,101,99,111,100,101,114,0)]]);
    let j_countG = String.fromCharCode(103,97,117,115,115,105,97,110,105,105,114,100,0);
    let reactnativeratings3 = String.fromCharCode(102,97,115,116,116,101,115,116,0);
    let googled = 1;
    let gifgoalu = String.fromCharCode(105,103,110,111,114,101,115,0);
    let nativej = 4.0;
    let minivodg = 2;
    let fieldw = String.fromCharCode(100,101,102,115,0);
   while (gifgoalu == String.fromCharCode(109,0)) {
      j_countG += "1";
      break;
   }
      iconeditW = "1";
   let stationr = countryG.size <= 5385428;
   do {
      countryG.set(j_countG, parseInt(`${nativej}`) ^ j_countG.length);
      if (stationr) {
         break;
      }
   } while ((3.100 == nativej) && stationr);
      countryG.set(reactnativeratings3, (reactnativeratings3 == String.fromCharCode(51,0) ? controlsE.length : reactnativeratings3.length));
      minivodg &= (String.fromCharCode(121,0) == iconeditW ? iconeditW.length : reactnativeratings3.length);
   for (let w = 0; w < 2; w++) {
      j_countG = `${parseInt(`${nativej}`) >> (Math.min(2, Math.abs(1)))}`;
   }
   if (gifgoalu != iconeditW) {
      iconeditW = `${iconeditW.length ^ 3}`;
   }
      minivodg += gifgoalu.length - 1;
   for (let t = 0; t < 1; t++) {
      controlsE.push(minivodg & 3);
   }
   if ((3 * j_countG.length) == 5) {
      j_countG += `${controlsE.length - 2}`;
   }
      countryG.set(reactnativeratings3, gifgoalu.length);
   while (5 >= (3 | reactnativeratings3.length)) {
      googled *= 2 - controlsE.length;
      break;
   }
      minivodg -= 3;
      minivodg <<= Math.min(Math.abs(1), 1);
   let questicone = fieldw.length >= 9714139;
   do {
      fieldw = "1";
      if (questicone) {
         break;
      }
   } while (questicone && ((fieldw.length >> (Math.min(Math.abs(4), 4))) >= 5));
      iconeditW = "2";
       let shirtM = String.fromCharCode(114,103,98,121,117,118,0);
          let encryptorZ = String.fromCharCode(104,111,109,101,0);
          let dycreator0: Map<any, any> = new Map([[String.fromCharCode(98,108,117,101,0),false ], [String.fromCharCode(115,117,98,105,116,101,109,115,0),true ], [String.fromCharCode(112,95,52,51,95,115,111,108,118,101,0),false ]]);
          let encryptorS: Map<any, any> = new Map([[String.fromCharCode(112,97,105,114,105,110,103,115,0),String.fromCharCode(105,100,97,115,115,101,116,115,0)], [String.fromCharCode(117,95,51,54,95,102,111,117,114,115,113,117,97,114,101,0),String.fromCharCode(101,118,105,99,116,105,111,110,0)], [String.fromCharCode(101,95,50,52,95,99,111,108,111,114,109,97,116,114,105,120,0),String.fromCharCode(105,110,116,101,110,116,95,54,95,53,56,0)]]);
         shirtM += `${shirtM.length}`;
         encryptorZ += `${encryptorZ.length}`;
         dycreator0.set(`${encryptorZ}`, encryptorZ.length);
         encryptorS.set(`${encryptorS.size}`, encryptorS.size);
         shirtM += `${3 << (Math.min(3, shirtM.length))}`;
         shirtM = `${shirtM.length}`;
      minivodg %= Math.max(3, gifgoalu.length * 1);
      countryG.set(fieldw, fieldw.length);
   if (j_countG.length <= 1) {
      j_countG += `${minivodg}`;
   }
   while (j_countG.endsWith(`${nativej}`)) {
      j_countG += `${reactnativeratings3.length % (Math.max(iconeditW.length, 3))}`;
      break;
   }
      iconeditW += `${reactnativeratings3.length}`;
   while (1 == (fieldw.length / 4) || (minivodg / 4) == 2) {
       let mbjscommonE = String.fromCharCode(114,101,99,118,0);
       let awayteamfieldh = 1.0;
       let abidetect8 = String.fromCharCode(102,114,97,109,101,115,105,122,101,0);
         mbjscommonE = `${parseInt(`${awayteamfieldh}`)}`;
         abidetect8 = `${parseInt(`${awayteamfieldh}`) * mbjscommonE.length}`;
         awayteamfieldh += parseInt(`${awayteamfieldh}`);
         abidetect8 += "1";
          let bridgef = String.fromCharCode(100,105,114,97,99,0);
          let footballfieldj: Map<any, any> = new Map([[String.fromCharCode(100,101,97,99,116,105,118,97,116,105,110,103,0),680], [String.fromCharCode(99,111,110,116,105,110,117,101,0),386], [String.fromCharCode(100,101,108,101,103,97,116,101,115,0),166]]);
          let nativemoduler: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,114,97,99,116,105,111,110,0),536], [String.fromCharCode(100,117,114,98,105,110,0),912]]);
         awayteamfieldh /= Math.max(5, (String.fromCharCode(75,0) == mbjscommonE ? mbjscommonE.length : parseInt(`${awayteamfieldh}`)));
         bridgef = `${nativemoduler.size & 2}`;
         footballfieldj = new Map([[`${nativemoduler.size}`, 2]]);
      while ((2.27 - awayteamfieldh) <= 2.43) {
          let benefitw = String.fromCharCode(109,97,103,105,99,121,117,118,0);
          let iconedit0 = 1.0;
         awayteamfieldh /= Math.max(1, parseInt(`${iconedit0}`) | 2);
         benefitw += `${benefitw.length}`;
         iconedit0 *= parseFloat(`${benefitw.length / (Math.max(5, benefitw.length))}`);
         break;
      }
         awayteamfieldh /= Math.max(1, (abidetect8 == String.fromCharCode(117,0) ? parseInt(`${awayteamfieldh}`) : abidetect8.length));
      while ((mbjscommonE.length - awayteamfieldh) < 5.91) {
          let uimanagerK = String.fromCharCode(118,95,51,50,95,118,115,121,110,99,0);
          let libavdeviceT = String.fromCharCode(99,104,117,110,107,115,0);
          let redcirclebg4 = String.fromCharCode(102,105,108,108,0);
          let homeloadingy = false;
         awayteamfieldh -= libavdeviceT.length;
         uimanagerK = `${redcirclebg4.length}`;
         libavdeviceT = `${uimanagerK.length}`;
         redcirclebg4 += `${uimanagerK.length}`;
         homeloadingy = uimanagerK.length <= 53 || redcirclebg4.length <= 53;
         break;
      }
         abidetect8 = `${(String.fromCharCode(122,0) == abidetect8 ? abidetect8.length : parseInt(`${awayteamfieldh}`))}`;
      fieldw = `${1 & controlsE.length}`;
      break;
   }

    setIsVersionDialogOpen(!isVersionDialogOpen);
  };
  const toggleClearDialog = () => {
       let whitetickQ = false;
    let orangeuparrowL = false;
    let catagoryL: Array<any> = [505, 392];
    let plusr: Array<any> = [String.fromCharCode(102,109,97,100,100,0), String.fromCharCode(98,97,115,105,99,0)];
    let controlsO = String.fromCharCode(101,115,116,105,109,97,116,101,115,0);
    let anytimeW = String.fromCharCode(97,98,111,117,116,115,0);
    let benefitG = 1.0;
    let mbnativeadvancedc = 3;
    let actionE: Array<any> = [String.fromCharCode(103,101,116,110,97,109,101,105,110,102,111,0), String.fromCharCode(119,114,106,112,103,99,111,109,0)];
    let penaltyshootf = false;
      actionE.push(3);
       let singaporel = true;
       let weatherV = 3.0;
       let actionsG = 2.0;
       let subtexte: Map<any, any> = new Map([[String.fromCharCode(118,105,118,111,0),311], [String.fromCharCode(103,114,97,110,116,0),419], [String.fromCharCode(116,119,105,100,100,108,101,115,0),617]]);
       let vnewsj: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,114,114,95,118,95,51,54,0),true ], [String.fromCharCode(109,117,108,116,105,99,111,100,101,99,0),false ], [String.fromCharCode(109,97,107,101,99,121,103,119,105,110,112,107,103,0),true ]]);
         subtexte.set(`${weatherV}`, vnewsj.size);
          let wifirouterp = true;
          let default_7Q = String.fromCharCode(116,119,105,116,116,101,114,0);
          let codel = 1.0;
         vnewsj.set(`${singaporel}`, ((singaporel ? 3 : 4) / (Math.max(parseInt(`${codel}`), 4))));
         wifirouterp = default_7Q.length == 42 || !wifirouterp;
         default_7Q += `${(String.fromCharCode(97,0) == default_7Q ? default_7Q.length : (wifirouterp ? 5 : 5))}`;
         codel += 1 + default_7Q.length;
         vnewsj.set(`${singaporel}`, (parseInt(`${actionsG}`) >> (Math.min(3, Math.abs((singaporel ? 5 : 5))))));
          let securityf: Array<any> = [297, 374, 945];
         subtexte = new Map([[`${subtexte.size}`, subtexte.size % (Math.max(3, 10))]]);
         securityf.push(securityf.length + 2);
       let megaphoneA = String.fromCharCode(116,97,108,107,0);
      let thailand3 = singaporel ? !singaporel : singaporel;
      do {
          let gradlewA: Map<any, any> = new Map([[String.fromCharCode(116,114,117,116,104,0),String.fromCharCode(102,114,97,109,101,0)], [String.fromCharCode(99,101,108,108,115,0),String.fromCharCode(115,119,105,116,99,104,101,114,0)]]);
         singaporel = 9 == gradlewA.size || String.fromCharCode(116,0) == megaphoneA;
         if (thailand3) {
            break;
         }
      } while (thailand3 && (2.10 < (weatherV / 1.51)));
          let twitterj = String.fromCharCode(115,119,97,112,121,118,98,117,102,102,101,114,95,103,95,51,49,0);
          let encryptor9 = String.fromCharCode(112,111,115,116,115,99,97,108,101,0);
          let loginsuccessm = String.fromCharCode(118,100,114,97,119,97,98,108,101,0);
         subtexte.set(`${megaphoneA}`, 2 | subtexte.size);
         twitterj += `${loginsuccessm.length}`;
         encryptor9 = "3";
         loginsuccessm += `${twitterj.length}`;
      while ((actionsG + 2.66) < 4.57) {
         actionsG *= parseFloat(`${parseInt(`${actionsG}`) & 2}`);
         break;
      }
      mbnativeadvancedc += parseInt(`${weatherV}`) / 2;
      anytimeW += `${((orangeuparrowL ? 4 : 3) ^ 3)}`;
   for (let h = 0; h < 1; h++) {
       let floaterT = 2.0;
       let background0 = String.fromCharCode(118,98,112,114,105,110,116,102,0);
       let pageL = 5.0;
       let nativemoduleU = false;
      let holder7 = String.fromCharCode(114,105,112,118,99,0) == background0;
      do {
         background0 = `${(background0 == String.fromCharCode(68,0) ? parseInt(`${pageL}`) : background0.length)}`;
         if (holder7) {
            break;
         }
      } while (holder7 && (background0.length > 4 || !nativemoduleU));
      if (3.81 > pageL) {
         background0 += `${parseInt(`${pageL}`) << (Math.min(2, Math.abs(3)))}`;
      }
      if (!background0.endsWith(`${nativemoduleU}`)) {
         nativemoduleU = !background0.endsWith(`${pageL}`);
      }
      if (nativemoduleU) {
          let xvodS = String.fromCharCode(99,108,117,98,0);
          let halffieldimageI: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,114,101,112,108,97,99,101,0),String.fromCharCode(99,111,110,116,97,99,116,0)], [String.fromCharCode(101,95,56,52,95,98,117,103,115,0),String.fromCharCode(113,95,56,55,95,121,101,97,114,0)]]);
          let iconmoreN = 3.0;
          let detailZ: Map<any, any> = new Map([[String.fromCharCode(115,107,101,119,101,100,0),172], [String.fromCharCode(115,101,99,0),70]]);
          let libmapbufferjnis = false;
         pageL -= parseInt(`${floaterT}`);
         xvodS += `${parseInt(`${iconmoreN}`) ^ 2}`;
         halffieldimageI = new Map([[`${detailZ.size}`, (String.fromCharCode(99,0) == xvodS ? xvodS.length : detailZ.size)]]);
         iconmoreN -= (parseFloat(`${xvodS.length & (libmapbufferjnis ? 3 : 5)}`));
         libmapbufferjnis = xvodS.startsWith(`${libmapbufferjnis}`);
      }
      let pushF = nativemoduleU ? !nativemoduleU : nativemoduleU;
      do {
         nativemoduleU = background0.length < 86;
         if (pushF) {
            break;
         }
      } while ((pageL == 5.90 && 5.21 == (pageL / (Math.max(5.90, 7)))) && pushF);
         nativemoduleU = (floaterT / (Math.max(pageL, 8))) >= 46.76;
          let iconmegaphoneg = 3;
          let icondefaultthumbnailp = String.fromCharCode(105,111,115,117,114,102,97,99,101,0);
          let gifgoale = String.fromCharCode(98,105,111,109,101,116,114,121,0);
         pageL *= parseInt(`${pageL}`);
         iconmegaphoneg += 1 - icondefaultthumbnailp.length;
         icondefaultthumbnailp += `${(icondefaultthumbnailp == String.fromCharCode(122,0) ? icondefaultthumbnailp.length : gifgoale.length)}`;
         gifgoale = `${icondefaultthumbnailp.length}`;
      while ((4 << (Math.min(5, background0.length))) <= 5 && (4 << (Math.min(5, background0.length))) <= 4) {
          let footballfieldp = false;
          let predictionwin1 = 2.0;
         floaterT *= (parseFloat(`${background0 == String.fromCharCode(57,0) ? background0.length : parseInt(`${pageL}`)}`));
         footballfieldp = !footballfieldp;
         predictionwin1 -= (parseFloat(`${parseInt(`${predictionwin1}`) << (Math.min(2, Math.abs((footballfieldp ? 2 : 3))))}`));
         break;
      }
         floaterT += parseFloat(`${background0.length}`);
      while ((pageL / 5.57) <= 1.71 && !nativemoduleU) {
         pageL /= Math.max(3, parseInt(`${pageL}`));
         break;
      }
          let kickr = String.fromCharCode(101,122,105,101,114,95,114,95,49,55,0);
          let graphicsZ: Map<any, any> = new Map([[String.fromCharCode(97,115,105,115,0),String.fromCharCode(98,117,102,102,101,114,113,117,101,117,101,0)], [String.fromCharCode(112,114,105,110,99,105,112,97,108,0),String.fromCharCode(105,109,105,116,97,116,101,0)], [String.fromCharCode(115,101,99,107,101,121,0),String.fromCharCode(119,95,55,52,95,115,101,110,100,109,115,103,0)]]);
          let inouttargetyellowU = String.fromCharCode(109,100,97,121,0);
         floaterT *= parseFloat(`${inouttargetyellowU.length * 2}`);
         kickr += `${2 ^ kickr.length}`;
         graphicsZ.set(`${kickr}`, (kickr == String.fromCharCode(98,0) ? kickr.length : graphicsZ.size));
         inouttargetyellowU += `${kickr.length}`;
       let binddatasx: Map<any, any> = new Map([[String.fromCharCode(108,105,107,101,108,121,0),String.fromCharCode(98,101,103,105,110,110,105,110,103,0)], [String.fromCharCode(98,105,116,115,0),String.fromCharCode(100,105,115,99,111,110,110,101,99,116,105,111,110,0)]]);
      plusr.push(mbnativeadvancedc / (Math.max(3, anytimeW.length)));
   }
   for (let f = 0; f < 3; f++) {
       let assetsc = 1.0;
       let iconclosewhitew = 1.0;
       let template_1mw = 5;
       let filedh = 3.0;
       let thailandL = String.fromCharCode(103,101,116,98,105,116,0);
      for (let s = 0; s < 3; s++) {
         iconclosewhitew *= parseInt(`${filedh}`);
      }
      while ((5 | template_1mw) == 3) {
          let video8 = true;
          let episodesx: Array<any> = [886, 875];
          let baiduadsz = 0.0;
          let iconbackwhite_ = String.fromCharCode(102,95,52,49,95,112,105,112,101,108,105,110,101,0);
          let user7: Array<any> = [971, 199];
         filedh *= parseFloat(`${3}`);
         video8 = iconbackwhite_.includes(`${video8}`);
         episodesx.push(user7.length / (Math.max(9, iconbackwhite_.length)));
         baiduadsz += user7.length / (Math.max(iconbackwhite_.length, 7));
         break;
      }
      let default_jc = 9460649.0 <= filedh;
      do {
          let tempnodataN = String.fromCharCode(116,104,101,110,0);
          let h_center4 = 1.0;
          let mbridgeR = String.fromCharCode(103,97,116,101,100,0);
         filedh += parseFloat(`${mbridgeR.length * parseInt(`${iconclosewhitew}`)}`);
         tempnodataN += `${(String.fromCharCode(98,0) == tempnodataN ? parseInt(`${h_center4}`) : tempnodataN.length)}`;
         h_center4 -= tempnodataN.length / 2;
         mbridgeR += `${parseInt(`${h_center4}`) - tempnodataN.length}`;
         if (default_jc) {
            break;
         }
      } while (((filedh * 1.60) > 2.45) && default_jc);
      while (filedh > 1.61) {
         filedh += parseFloat(`${template_1mw}`);
         break;
      }
      while (5.69 >= filedh) {
         assetsc += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${iconclosewhitew}`)), 1))}`);
         break;
      }
      let o_countS = filedh <= 7292696.0;
      do {
         filedh -= parseFloat(`${thailandL.length - 1}`);
         if (o_countS) {
            break;
         }
      } while ((1.65 >= (1 + assetsc)) && o_countS);
      if ((assetsc - iconclosewhitew) == 2.69) {
         iconclosewhitew /= Math.max(4, 1);
      }
      if ((parseInt(`${assetsc}`) + template_1mw) >= 4 || 1 >= (4 | template_1mw)) {
         assetsc *= parseFloat(`${parseInt(`${filedh}`)}`);
      }
      while (3.28 <= (iconclosewhitew - filedh) || 3.28 <= (iconclosewhitew - filedh)) {
         filedh -= parseFloat(`${parseInt(`${filedh}`) | 1}`);
         break;
      }
      while ((iconclosewhitew - 2.66) == 3.75) {
         iconclosewhitew *= template_1mw | parseInt(`${iconclosewhitew}`);
         break;
      }
      if (4.72 >= (5.97 - iconclosewhitew) || (4 % (Math.max(1, template_1mw))) >= 1) {
         template_1mw &= template_1mw;
      }
       let suboutR = 4.0;
       let bottom4 = 5.0;
       let liblogger0 = String.fromCharCode(121,117,121,116,111,121,118,0);
      for (let g = 0; g < 2; g++) {
         template_1mw >>= Math.min(5, Math.abs(parseInt(`${iconclosewhitew}`) ^ 3));
      }
      let bottomN = suboutR <= 8239823.0;
      do {
          let yellowscoreballT = 2.0;
          let homeactiveh = 1.0;
         suboutR *= parseFloat(`${parseInt(`${yellowscoreballT}`)}`);
         yellowscoreballT += parseFloat(`${parseInt(`${homeactiveh}`)}`);
         if (bottomN) {
            break;
         }
      } while ((3.4 == (1 - assetsc)) && bottomN);
      mbnativeadvancedc ^= 3 ^ parseInt(`${filedh}`);
   }
      anytimeW = `${parseInt(`${benefitG}`)}`;
   while (actionE.length >= 4 && 5 >= (actionE.length | 4)) {
      actionE.push(mbnativeadvancedc);
      break;
   }
      mbnativeadvancedc *= 1;
      benefitG -= parseInt(`${benefitG}`);
   while (!whitetickQ) {
       let nodef = true;
       let java_ = 4.0;
       let data6: Map<any, any> = new Map([[String.fromCharCode(102,111,114,119,97,114,100,101,114,0),false ], [String.fromCharCode(115,95,49,48,48,95,100,109,105,120,0),true ]]);
          let penaltyshootnogoalm = 4;
          let champion2 = 5.0;
          let flipperv = 0.0;
         nodef = !nodef && flipperv >= 41.27;
         penaltyshootnogoalm *= penaltyshootnogoalm;
         champion2 -= parseFloat(`${parseInt(`${champion2}`) % 1}`);
         flipperv /= Math.max(4, parseInt(`${champion2}`) | 1);
      let libffmpegkit_ = nodef ? !nodef : nodef;
      do {
          let pagination9 = 0.0;
          let match_ = String.fromCharCode(108,100,105,115,116,0);
         nodef = !match_.endsWith(`${java_}`);
         pagination9 /= Math.max(1, parseInt(`${pagination9}`) >> (Math.min(3, Math.abs(1))));
         match_ = `${parseInt(`${pagination9}`)}`;
         if (libffmpegkit_) {
            break;
         }
      } while (libffmpegkit_ && (!nodef));
         data6.set(`${java_}`, 1 / (Math.max(6, parseInt(`${java_}`))));
      while ((1 ^ data6.size) == 3 && 1 == data6.size) {
          let styleK = String.fromCharCode(103,100,112,114,95,102,95,52,50,0);
         data6.set(`${java_}`, data6.size);
         styleK = `${(String.fromCharCode(69,0) == styleK ? styleK.length : styleK.length)}`;
         break;
      }
      while (data6.get(`${java_}`) != null) {
          let middlebrightness9 = String.fromCharCode(102,95,48,95,112,117,114,101,0);
          let kickq = false;
          let chatbotphotod = 3;
          let lessH = 3.0;
          let libhermesE = String.fromCharCode(98,105,119,101,105,103,104,116,0);
         data6.set(`${lessH}`, parseInt(`${java_}`) + 3);
         middlebrightness9 = `${chatbotphotod + 1}`;
         kickq = middlebrightness9.length > 89;
         chatbotphotod /= Math.max(2, 3);
         lessH /= Math.max(parseFloat(`${chatbotphotod}`), 1);
         libhermesE += `${(libhermesE == String.fromCharCode(71,0) ? (kickq ? 5 : 3) : libhermesE.length)}`;
         break;
      }
      orangeuparrowL = (mbnativeadvancedc % (Math.max(anytimeW.length, 3))) == 36;
      break;
   }
      catagoryL = [2];
   while (1 >= (4 | actionE.length) && orangeuparrowL) {
       let baidu4 = String.fromCharCode(108,105,115,116,101,110,101,114,0);
       let targetE = 5.0;
       let mounting_ = String.fromCharCode(100,110,115,108,97,98,101,108,0);
       let configureX: Map<any, any> = new Map([[String.fromCharCode(114,103,98,120,105,0),584], [String.fromCharCode(114,101,115,101,110,100,0),836]]);
          let redgoaly = 5.0;
          let iconpipexpandw: Map<any, any> = new Map([[String.fromCharCode(100,101,116,97,99,104,0),String.fromCharCode(99,104,97,110,110,101,108,0)], [String.fromCharCode(104,97,100,95,101,95,55,57,0),String.fromCharCode(112,114,111,112,111,115,97,108,115,0)]]);
         configureX = new Map([[`${configureX.size}`, configureX.size ^ parseInt(`${redgoaly}`)]]);
         redgoaly += parseFloat(`${iconpipexpandw.size}`);
         iconpipexpandw = new Map([[`${iconpipexpandw.size}`, 1]]);
         configureX = new Map([[`${configureX.size}`, (String.fromCharCode(89,0) == mounting_ ? configureX.size : mounting_.length)]]);
      while ((mounting_.length * 5) < 2) {
          let styleC = 3;
          let encrypt0 = 5.0;
          let emojiheartA: Map<any, any> = new Map([[String.fromCharCode(116,115,97,110,0),324], [String.fromCharCode(115,101,99,116,105,110,115,0),120]]);
          let time_1U = 5;
         mounting_ += `${configureX.size}`;
         styleC <<= Math.min(3, Math.abs(3 + parseInt(`${encrypt0}`)));
         encrypt0 *= styleC;
         emojiheartA.set(`${encrypt0}`, emojiheartA.size ^ 1);
         time_1U <<= Math.min(3, Math.abs(styleC % 1));
         break;
      }
       let encryptH = false;
       let backh = false;
      if (baidu4.length <= 5 || backh) {
         baidu4 = "1";
      }
      while (backh) {
         backh = mounting_.includes(`${encryptH}`);
         break;
      }
       let topica = true;
       let loginsuccessX = true;
          let debugy = 2;
          let assist9 = String.fromCharCode(101,114,114,110,111,0);
          let volumer = 0.0;
         targetE *= parseFloat(`${2 - mounting_.length}`);
         debugy &= 1 | parseInt(`${volumer}`);
         assist9 += "1";
         volumer -= parseFloat(`${2 << (Math.min(4, Math.abs(parseInt(`${volumer}`))))}`);
      actionE = [(String.fromCharCode(114,0) == baidu4 ? baidu4.length : parseInt(`${benefitG}`))];
      break;
   }
      anytimeW += `${controlsO.length}`;
       let libglogV = true;
       let playL = String.fromCharCode(109,97,112,112,97,98,108,101,0);
      let stationv = libglogV ? !libglogV : libglogV;
      do {
         libglogV = playL.includes(`${libglogV}`);
         if (stationv) {
            break;
         }
      } while (stationv && (3 == playL.length && !libglogV));
         libglogV = !libglogV;
      controlsO = `${anytimeW.length & parseInt(`${benefitG}`)}`;
   for (let g = 0; g < 2; g++) {
       let sliderE = String.fromCharCode(102,99,102,115,0);
       let annerM = String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,0);
       let roundQ = String.fromCharCode(114,101,116,97,105,110,115,0);
       let thumbnailo = true;
       let bggradientH = String.fromCharCode(115,121,110,99,115,97,102,101,0);
         sliderE = `${(String.fromCharCode(114,0) == roundQ ? roundQ.length : (thumbnailo ? 5 : 4))}`;
         bggradientH = `${sliderE.length % (Math.max(2, 5))}`;
         annerM += "1";
       let mbjscommony = 5.0;
         bggradientH += "2";
         bggradientH += "2";
          let commonp: Map<any, any> = new Map([[String.fromCharCode(112,95,52,53,95,115,104,111,114,116,99,117,116,115,0),String.fromCharCode(115,105,109,117,108,97,116,105,111,110,0)], [String.fromCharCode(116,99,109,105,0),String.fromCharCode(115,121,109,98,111,108,115,0)]]);
         bggradientH += `${parseInt(`${mbjscommony}`)}`;
         commonp.set(`${commonp.size}`, commonp.size >> (Math.min(Math.abs(3), 1)));
          let filez = 2.0;
          let libhermesH = 5;
         thumbnailo = bggradientH.endsWith(`${thumbnailo}`);
         filez *= parseInt(`${filez}`);
         libhermesH *= parseInt(`${filez}`) + 1;
         sliderE = `${((thumbnailo ? 3 : 4) * annerM.length)}`;
         roundQ += `${(3 * (thumbnailo ? 4 : 4))}`;
          let megaphone_ = false;
          let type_gzE = 1.0;
         roundQ += `${((megaphone_ ? 2 : 4) >> (Math.min(Math.abs(parseInt(`${mbjscommony}`)), 1)))}`;
         megaphone_ = 19.20 == type_gzE;
         type_gzE *= parseFloat(`${parseInt(`${type_gzE}`)}`);
      if (sliderE.length > 4) {
         annerM = `${3 << (Math.min(3, annerM.length))}`;
      }
      if (5.69 < (mbjscommony - parseFloat(`${roundQ.length}`))) {
         roundQ += `${(String.fromCharCode(78,0) == annerM ? annerM.length : (thumbnailo ? 4 : 4))}`;
      }
       let transferw = 1.0;
       let unreadL = 3.0;
         unreadL *= parseInt(`${unreadL}`);
      controlsO = `${catagoryL.length ^ controlsO.length}`;
   }
       let gifgoalO: Array<any> = [136, 489, 599];
       let mimo0 = true;
       let completeC = String.fromCharCode(116,114,97,99,107,0);
      let libfba = mimo0 ? !mimo0 : mimo0;
      do {
         mimo0 = 15 == gifgoalO.length || 15 == completeC.length;
         if (libfba) {
            break;
         }
      } while ((3 <= (gifgoalO.length | 1)) && libfba);
          let selectionW = String.fromCharCode(101,121,99,104,97,105,110,0);
          let type_cdB = String.fromCharCode(108,111,99,105,0);
         completeC = `${2 << (Math.min(5, gifgoalO.length))}`;
         selectionW += `${1 ^ selectionW.length}`;
         type_cdB += `${type_cdB.length * 3}`;
      let classesx = completeC.length <= 8010431;
      do {
          let iconqqb = 1.0;
         completeC = `${1 - gifgoalO.length}`;
         iconqqb *= parseInt(`${iconqqb}`) * parseInt(`${iconqqb}`);
         if (classesx) {
            break;
         }
      } while ((completeC.startsWith(`${mimo0}`)) && classesx);
      while (2 > completeC.length && mimo0) {
         completeC += `${gifgoalO.length * 1}`;
         break;
      }
          let mergera = false;
          let shootd = String.fromCharCode(111,112,116,115,95,98,95,54,51,0);
         mimo0 = gifgoalO.length > 49;
         mergera = (69 > (shootd.length & (mergera ? shootd.length : 69)));
         mimo0 = ((completeC.length ^ (mimo0 ? 66 : completeC.length)) <= 66);
         mimo0 = !mimo0;
         gifgoalO.push(((mimo0 ? 5 : 3) ^ 2));
         mimo0 = completeC.includes(`${mimo0}`);
      anytimeW += `${((whitetickQ ? 5 : 3) - (orangeuparrowL ? 2 : 3))}`;
   for (let x = 0; x < 2; x++) {
      orangeuparrowL = catagoryL.includes(benefitG);
   }
   for (let h = 0; h < 3; h++) {
      orangeuparrowL = 10 < catagoryL.length && plusr.length < 10;
   }
      catagoryL = [plusr.length >> (Math.min(Math.abs(2), 3))];
       let libnms0 = String.fromCharCode(115,111,108,105,100,99,111,108,111,114,0);
       let greenarrowupl = String.fromCharCode(119,95,54,95,115,105,103,110,105,102,105,99,97,110,116,0);
      if (libnms0.includes(`${greenarrowupl.length}`)) {
          let source7 = 0.0;
          let owngoalO = 2.0;
          let configB = String.fromCharCode(100,97,97,108,97,0);
          let iconmegaphoneC = false;
         greenarrowupl += `${(String.fromCharCode(86,0) == libnms0 ? greenarrowupl.length : libnms0.length)}`;
         source7 /= Math.max(4, parseFloat(`${parseInt(`${owngoalO}`)}`));
         owngoalO -= 1;
         configB = `${configB.length << (Math.min(5, Math.abs(parseInt(`${source7}`))))}`;
         iconmegaphoneC = (source7 - owngoalO) == 53.41;
      }
      while (libnms0.length == greenarrowupl.length) {
         libnms0 += "2";
         break;
      }
      for (let e = 0; e < 1; e++) {
         libnms0 += `${libnms0.length & greenarrowupl.length}`;
      }
         greenarrowupl = "3";
      for (let v = 0; v < 2; v++) {
          let pathm = 2.0;
         greenarrowupl = `${parseInt(`${pathm}`) % (Math.max(libnms0.length, 9))}`;
      }
      for (let u = 0; u < 3; u++) {
         greenarrowupl += `${libnms0.length}`;
      }
      controlsO += `${((orangeuparrowL ? 5 : 1))}`;
   let singaporeF = 5206893 >= plusr.length;
   do {
      plusr.push((1 ^ (whitetickQ ? 5 : 5)));
      if (singaporeF) {
         break;
      }
   } while ((!actionE.includes(plusr.length)) && singaporeF);

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
       let icon_: Map<any, any> = new Map([[String.fromCharCode(101,110,97,98,108,101,100,0),549], [String.fromCharCode(99,95,50,95,105,110,116,101,114,97,99,116,105,111,110,115,0),127], [String.fromCharCode(116,95,55,57,95,118,105,118,111,0),679]]);
    let predictionbannershared8: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,105,114,101,115,0),548], [String.fromCharCode(102,108,116,117,105,110,116,0),298], [String.fromCharCode(104,105,115,116,111,103,114,97,109,95,118,95,55,50,0),800]]);
    let description_6M = false;
    let b_positiont = 3.0;
    let mountingw = true;
    let subbasketballplayerq = String.fromCharCode(119,114,111,110,103,0);
    let lessL: Array<any> = [830, 782];
    let custom6: Map<any, any> = new Map([[String.fromCharCode(116,109,112,108,0),898], [String.fromCharCode(115,109,112,116,101,104,100,98,97,114,115,0),244], [String.fromCharCode(99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,0),667]]);
    let long_11Q = true;
    let tooltipsZ: Array<any> = [String.fromCharCode(104,97,118,101,101,118,101,110,116,115,0), String.fromCharCode(103,101,110,101,114,97,116,105,111,110,0)];
    let qaagu = 0;
    let rocket0 = 2;
    let gestureC: Map<any, any> = new Map([[String.fromCharCode(115,119,97,112,112,101,114,0),String.fromCharCode(115,105,109,105,108,97,114,105,116,121,0)], [String.fromCharCode(116,114,117,101,0),String.fromCharCode(97,115,110,116,0)], [String.fromCharCode(106,95,52,51,95,115,101,114,105,97,108,105,115,101,100,0),String.fromCharCode(109,101,97,110,0)]]);
    let condensedJ: Map<any, any> = new Map([[String.fromCharCode(97,95,52,49,95,105,116,108,101,0),511], [String.fromCharCode(118,111,114,100,105,112,108,111,109,0),863]]);
   while (predictionbannershared8.get(`${tooltipsZ.length}`) == null) {
      tooltipsZ = [((mountingw ? 1 : 1) ^ 1)];
      break;
   }
   let reducere = description_6M ? !description_6M : description_6M;
   do {
       let iconcloseY = String.fromCharCode(105,115,119,104,105,116,101,115,112,97,99,101,0);
      while (iconcloseY.length >= 4) {
         iconcloseY += "2";
         break;
      }
      while (iconcloseY != String.fromCharCode(111,0) || iconcloseY.length > 1) {
         iconcloseY += `${iconcloseY.length & iconcloseY.length}`;
         break;
      }
         iconcloseY = `${iconcloseY.length % 3}`;
      description_6M = custom6.get(`${long_11Q}`) == null;
      if (reducere) {
         break;
      }
   } while ((!description_6M || (2 + icon_.size) <= 3) && reducere);
      tooltipsZ.push(1 + tooltipsZ.length);
      description_6M = !description_6M && long_11Q;
   for (let h = 0; h < 2; h++) {
       let fullscreenmin0 = false;
       let leakcheckerM = 1.0;
       let cornershooth = String.fromCharCode(111,102,102,101,114,101,100,0);
       let trophyb = false;
      while (leakcheckerM < 3.81) {
          let x_positionj = String.fromCharCode(121,117,121,118,116,111,121,117,118,0);
          let episodesl: Array<any> = [627, 516, 408];
         fullscreenmin0 = x_positionj.startsWith(`${trophyb}`);
         x_positionj = `${episodesl.length | episodesl.length}`;
         break;
      }
         leakcheckerM += (parseFloat(`${(fullscreenmin0 ? 3 : 3) << (Math.min(Math.abs(parseInt(`${leakcheckerM}`)), 4))}`));
      if (fullscreenmin0) {
          let gifgoalbgA = String.fromCharCode(98,97,115,101,112,111,105,110,116,0);
          let bangl = String.fromCharCode(98,117,102,101,114,0);
          let componentr = String.fromCharCode(112,114,111,103,114,101,115,115,0);
          let update_e4N: Array<any> = [807, 308];
         fullscreenmin0 = componentr.length <= 78;
         gifgoalbgA += "1";
         bangl = `${gifgoalbgA.length}`;
         componentr = `${bangl.length ^ 3}`;
         update_e4N.push(gifgoalbgA.length >> (Math.min(Math.abs(1), 2)));
      }
          let lighta = String.fromCharCode(114,101,119,114,105,116,101,0);
          let championJ = String.fromCharCode(98,117,102,102,101,114,101,118,101,110,116,0);
          let iconclosewhitebgR = String.fromCharCode(108,111,99,97,108,105,122,97,98,108,101,0);
         trophyb = iconclosewhitebgR.length >= 24 && lighta.length >= 24;
         lighta = `${(championJ == String.fromCharCode(95,0) ? championJ.length : championJ.length)}`;
      while (trophyb && fullscreenmin0) {
          let checkboxs = String.fromCharCode(105,100,101,116,0);
          let iconadslinki = String.fromCharCode(97,99,113,117,105,114,101,0);
         trophyb = iconadslinki == String.fromCharCode(112,0);
         checkboxs += `${checkboxs.length}`;
         iconadslinki += `${checkboxs.length}`;
         break;
      }
      while (2.71 >= leakcheckerM) {
          let awayiconQ: Array<any> = [448, 520];
          let moviesJ = String.fromCharCode(99,121,99,108,105,99,0);
          let tempnodatagif7: Array<any> = [586, 526, 398];
          let grays = 4.0;
          let nativemoduleS: Map<any, any> = new Map([[String.fromCharCode(109,111,110,107,101,121,115,97,117,100,105,111,0),608], [String.fromCharCode(106,101,114,114,111,114,0),52], [String.fromCharCode(109,106,112,101,103,106,112,101,103,0),78]]);
         fullscreenmin0 = (tempnodatagif7.length >> (Math.min(Math.abs(nativemoduleS.size), 1))) <= 4;
         awayiconQ.push(moviesJ.length);
         moviesJ = `${parseInt(`${grays}`)}`;
         tempnodatagif7.push((moviesJ == String.fromCharCode(97,0) ? parseInt(`${grays}`) : moviesJ.length));
         nativemoduleS.set(moviesJ, 2 - awayiconQ.length);
         break;
      }
          let libswresampleJ = String.fromCharCode(101,110,116,105,114,101,0);
          let mode5 = String.fromCharCode(98,117,108,108,101,116,0);
          let ticked4 = 1.0;
         fullscreenmin0 = leakcheckerM == 80.77 || trophyb;
         libswresampleJ = "1";
         mode5 = `${libswresampleJ.length - mode5.length}`;
         ticked4 *= (parseFloat(`${String.fromCharCode(84,0) == libswresampleJ ? parseInt(`${ticked4}`) : libswresampleJ.length}`));
         leakcheckerM /= Math.max(4, parseFloat(`${3 + cornershooth.length}`));
         leakcheckerM -= (parseFloat(`${cornershooth.length | (fullscreenmin0 ? 1 : 4)}`));
          let largeZ = true;
          let green8 = String.fromCharCode(99,111,110,102,0);
         cornershooth = `${((largeZ ? 2 : 2) & green8.length)}`;
         leakcheckerM -= (parseFloat(`${(trophyb ? 4 : 4) & 3}`));
      for (let o = 0; o < 2; o++) {
         fullscreenmin0 = (((!trophyb ? cornershooth.length : 85) << (Math.min(cornershooth.length, 5))) <= 85);
      }
      predictionbannershared8.set(`${fullscreenmin0}`, 1);
   }
   for (let k = 0; k < 2; k++) {
       let iconviewergife = 2;
       let libfabricjniB = 3;
      let hongkongs = iconviewergife >= 9358055;
      do {
         iconviewergife >>= Math.min(Math.abs(libfabricjniB), 4);
         if (hongkongs) {
            break;
         }
      } while (hongkongs && ((libfabricjniB / 5) > 5 && (iconviewergife / (Math.max(6, libfabricjniB))) > 5));
         libfabricjniB %= Math.max(4, iconviewergife);
      predictionbannershared8 = new Map([[`${custom6.size}`, rocket0]]);
   }
      rocket0 -= 1;
   while (2 >= (subbasketballplayerq.length | rocket0) && 2 >= (rocket0 | 2)) {
      subbasketballplayerq += `${tooltipsZ.length * predictionbannershared8.size}`;
      break;
   }
       let kuaishou_ = 4.0;
       let overlayU: Map<any, any> = new Map([[String.fromCharCode(117,110,115,99,104,101,100,117,108,101,95,108,95,50,55,0),String.fromCharCode(114,111,117,110,100,105,110,103,95,106,95,51,0)], [String.fromCharCode(111,112,116,103,114,111,117,112,0),String.fromCharCode(114,117,110,115,0)]]);
       let bgvipxvodb = 0.0;
      for (let s = 0; s < 1; s++) {
          let back9 = String.fromCharCode(117,110,119,114,105,116,97,98,108,101,0);
          let refreshO = 4;
          let backiconI = false;
          let nterstitialT = String.fromCharCode(109,107,118,114,101,97,100,101,114,0);
         overlayU = new Map([[back9, back9.length]]);
         refreshO %= Math.max(4, refreshO);
         backiconI = nterstitialT.length < 100;
         nterstitialT = `${nterstitialT.length}`;
      }
      for (let b = 0; b < 2; b++) {
          let dataA = 2.0;
          let orangea = String.fromCharCode(105,109,108,116,0);
         bgvipxvodb /= Math.max(3, parseFloat(`${parseInt(`${dataA}`)}`));
         dataA /= Math.max(parseFloat(`${1 - orangea.length}`), 2);
         orangea += "2";
      }
      if (kuaishou_ == 4.83) {
          let mbbidS = false;
          let appleg = String.fromCharCode(100,101,99,111,109,112,114,101,115,115,101,100,0);
         overlayU.set(`${bgvipxvodb}`, 1);
         mbbidS = !mbbidS;
         appleg = `${(3 ^ (mbbidS ? 4 : 1))}`;
      }
      for (let r = 0; r < 1; r++) {
          let penaltyshootnogoalF = 2.0;
          let iconfeedbackP = false;
          let nterstitial6 = String.fromCharCode(115,105,120,116,97,112,0);
         overlayU = new Map([[`${overlayU.size}`, overlayU.size % 3]]);
         penaltyshootnogoalF *= 2 ^ nterstitial6.length;
         iconfeedbackP = nterstitial6.length >= 96;
      }
      for (let d = 0; d < 3; d++) {
         overlayU = new Map([[`${overlayU.size}`, parseInt(`${bgvipxvodb}`) * overlayU.size]]);
      }
          let traminic = String.fromCharCode(104,121,115,99,97,108,101,0);
          let tempR = String.fromCharCode(111,117,116,103,111,105,110,103,0);
          let iconarrowleftY = String.fromCharCode(99,108,105,112,98,111,97,114,100,0);
         kuaishou_ += parseFloat(`${tempR.length + parseInt(`${kuaishou_}`)}`);
         traminic += `${traminic.length - iconarrowleftY.length}`;
         tempR = `${iconarrowleftY.length ^ 2}`;
         bgvipxvodb /= Math.max(3, parseFloat(`${overlayU.size}`));
      for (let j = 0; j < 1; j++) {
         bgvipxvodb *= parseFloat(`${parseInt(`${bgvipxvodb}`)}`);
      }
          let questiconZ = String.fromCharCode(105,110,116,101,114,112,0);
          let rightr: Array<any> = [867, 334];
          let trophyd: Map<any, any> = new Map([[String.fromCharCode(99,112,117,102,108,97,103,115,95,51,95,51,57,0),957], [String.fromCharCode(113,117,105,99,107,95,110,95,53,48,0),700]]);
         overlayU = new Map([[`${trophyd.size}`, 3 >> (Math.min(1, Math.abs(parseInt(`${kuaishou_}`))))]]);
         questiconZ += `${questiconZ.length / (Math.max(1, 9))}`;
         rightr = [1 % (Math.max(2, questiconZ.length))];
         trophyd = new Map([[`${rightr.length}`, rightr.length]]);
      predictionbannershared8 = new Map([[`${custom6.size}`, custom6.size]]);
      custom6 = new Map([[`${rocket0}`, ((description_6M ? 5 : 4) & rocket0)]]);
      long_11Q = subbasketballplayerq.length <= lessL.length;
      rocket0 *= qaagu / (Math.max(parseInt(`${b_positiont}`), 4));
      description_6M = !description_6M;

    const user = await yysHomeloading.guestLogin();

   for (let c = 0; c < 1; c++) {
      description_6M = icon_.size >= 33;
   }
      subbasketballplayerq += `${(1 << (Math.min(Math.abs((description_6M ? 4 : 4)), 1)))}`;
      long_11Q = 14.95 == b_positiont;
      tooltipsZ.push(custom6.size);
   while (!long_11Q) {
       let eyecloses = 3;
       let telegramH: Array<any> = [918, 260, 610];
       let zhengpiand = 5;
       let subinw = String.fromCharCode(115,112,100,105,102,0);
       let orangeuparrowi = 4.0;
       let defaultplayerimg_ = 4.0;
       let libjsijniprofilerz = 2.0;
      let minivodt = 6936587.0 <= orangeuparrowi;
      do {
         orangeuparrowi += parseFloat(`${parseInt(`${orangeuparrowi}`) << (Math.min(telegramH.length, 3))}`);
         if (minivodt) {
            break;
         }
      } while (minivodt && (parseInt(`${orangeuparrowi}`) >= subinw.length));
      if ((2.50 * libjsijniprofilerz) == 1.72) {
          let shrunkT = String.fromCharCode(102,117,114,116,104,101,114,0);
          let currenta = String.fromCharCode(98,98,111,120,0);
          let matchesq = 0;
         libjsijniprofilerz *= 3 ^ eyecloses;
         shrunkT = `${(String.fromCharCode(55,0) == shrunkT ? shrunkT.length : currenta.length)}`;
         currenta = `${(String.fromCharCode(56,0) == currenta ? shrunkT.length : currenta.length)}`;
         matchesq %= Math.max(currenta.length, 2);
      }
         telegramH.push(zhengpiand >> (Math.min(2, Math.abs(1))));
      for (let v = 0; v < 3; v++) {
         zhengpiand += 3 * parseInt(`${orangeuparrowi}`);
      }
         subinw += `${1 ^ eyecloses}`;
       let whistleorangeb: Map<any, any> = new Map([[String.fromCharCode(116,111,111,108,98,97,114,0),204], [String.fromCharCode(114,101,99,117,114,115,101,0),796], [String.fromCharCode(102,114,101,105,114,0),731]]);
      if (subinw.startsWith(`${defaultplayerimg_}`)) {
         defaultplayerimg_ /= Math.max(whistleorangeb.size, 5);
      }
      for (let n = 0; n < 3; n++) {
         eyecloses <<= Math.min(1, Math.abs(2));
      }
         whistleorangeb = new Map([[`${whistleorangeb.size}`, zhengpiand]]);
         zhengpiand /= Math.max(5, 3);
       let reducerz = String.fromCharCode(112,97,115,115,95,113,95,51,51,0);
         zhengpiand |= eyecloses / 3;
         libjsijniprofilerz -= parseInt(`${defaultplayerimg_}`);
         zhengpiand ^= telegramH.length;
      long_11Q = 5.47 == b_positiont || 67 == subinw.length;
      break;
   }
      description_6M = lessL.length <= qaagu;
      description_6M = (lessL.length - subbasketballplayerq.length) > 8;
      lessL = [qaagu & 1];
      mountingw = 88 < custom6.size && rocket0 < 88;
   for (let s = 0; s < 2; s++) {
      description_6M = (22 < ((!long_11Q ? 22 : tooltipsZ.length) / (Math.max(tooltipsZ.length, 7))));
   }
       let lightag: Map<any, any> = new Map([[String.fromCharCode(108,101,116,115,0),133], [String.fromCharCode(115,121,109,98,111,108,105,122,101,0),95]]);
       let pushN: Map<any, any> = new Map([[String.fromCharCode(101,100,105,116,97,98,108,101,0),56], [String.fromCharCode(105,100,101,110,116,105,102,105,101,100,0),974], [String.fromCharCode(109,97,116,99,104,101,115,0),667]]);
      if ((1 - pushN.size) > 4 && (pushN.size - 1) > 4) {
         lightag.set(`${lightag.size}`, 3);
      }
      let yellowredcardy = 8015854 <= lightag.size;
      do {
         lightag = new Map([[`${lightag.size}`, lightag.size]]);
         if (yellowredcardy) {
            break;
         }
      } while ((4 >= (lightag.size * pushN.size) && (4 * pushN.size) >= 1) && yellowredcardy);
      rocket0 /= Math.max(parseInt(`${b_positiont}`) % (Math.max(icon_.size, 3)), 1);
   while (icon_.get(`${gestureC.size}`) == null) {
      icon_.set(`${qaagu}`, tooltipsZ.length);
      break;
   }
   let libavcodecw = 7454446 <= icon_.size;
   do {
      icon_ = new Map([[`${custom6.size}`, predictionbannershared8.size / 2]]);
      if (libavcodecw) {
         break;
      }
   } while (libavcodecw && (!Array.from(icon_.keys()).includes(`${rocket0}`)));

    await dispatch(addUserAuthState(user));
  };

  
  
  
  const userState = useSelector<yysIconplaySuggestion>('userReducer');
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
                    <MoreArrowSvg
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
        {yysIconstar.isLogin(userState.user) && (
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
