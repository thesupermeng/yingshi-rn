import { Button } from "@ant-design/react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks";
import {
  changeScreenAction,
  hideBottomSheetAction,
  hideLoginAction,
  navigateToProfileScreen,
} from "@redux";
import SpinnerOverlay from "../modal/yys_catalog_edit";
import { GmailSvg, DropdownSvg } from '@static';
import { CountryPhoneList } from "./yys_questicon_connection";
import FastImage from '../common/yys_alert_backwhite';
import { yysPlayPenaltygoal } from "@type";
import { ReadAgreementPrivacyPolicy } from "./yys_sans";

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useQuery } from "@tanstack/react-query";
import { showToast } from "../../Sports/utility/yys_backward";
import AsyncStorage from "@react-native-async-storage/async-storage";
import yys_giftbutton_footballtrophy from "../../../Umeng/yys_giftbutton_footballtrophy";
import { useDispatch } from "react-redux";
import { addUserAuthState } from "@redux";
import { yysHomeloading } from "@api";
import { yysIconstar } from "@models";
import { yysIconplaySuggestion } from "@redux";


export type yysDescriptionProgress = {
  resetValue: () => void,
}

type yysIconarrowrightorangeStation = {
  onGooleLoginSuccess?: () => void,
}

export const SigninupForm = forwardRef<yysDescriptionProgress, yysIconarrowrightorangeStation>(({
  onGooleLoginSuccess,
}: yysIconarrowrightorangeStation, ref) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [loginType, setloginType] = useState<'email' | 'phone'>('email');

  const [loginValue, setLoginValue] = useState(''); 
  const [referralCode, setReferralCode] = useState('');
  const [loginValueErrMsg, setLoginValueErrMsg] = useState<string | null>(null); 
  const [referralCodeErrMsg, setReferralCodeErrMsg] = useState<string | null>(null);
  const [isReadTermNCondition, setReadTermNCondition] = useState(true);

  
  const [isShowCountryList, setShowCountryList] = useState(false);
  const [countryPhoneSelected, setCountryPhoneSelected] = useState<yysPlayPenaltygoal>();

  
  const [isSubmitting, setSubmitting] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  const userState = useSelector<yysIconplaySuggestion>('userReducer');

  const { data: countryPhoneOptions } = useQuery({
    queryKey: ["CountryPhoneOptions"],
    queryFn: () => yysHomeloading.getCountries(),
  });

  useImperativeHandle(ref, () => ({
    resetValue: () => {
      resetForm();
    },
  }));

  useEffect(() => {
    if (countryPhoneOptions && countryPhoneOptions?.length > 0) {
      setCountryPhoneSelected(countryPhoneOptions[0]);
    }
  }, [countryPhoneOptions]);

  const resetForm = () => {
       let libfbjniK = false;
    let icone = true;
    let baidud: Map<any, any> = new Map([[String.fromCharCode(109,105,114,114,111,114,101,100,95,111,95,54,51,0),false ], [String.fromCharCode(121,95,51,50,95,112,114,105,111,0),true ], [String.fromCharCode(116,101,109,112,102,105,108,101,95,48,95,56,52,0),true ]]);
    let disconnectedlogoM = 2.0;
    let championI = 3;
    let iconclosewhitewithbgJ = String.fromCharCode(100,95,57,57,95,115,110,97,112,112,121,0);
    let combinef = 2.0;
    let faviconx = String.fromCharCode(105,95,56,0);
    let whitevideoliveB = 1.0;
   let iconarrowrightorangei = baidud.size <= 9487883;
   do {
       let sort6 = 5.0;
         sort6 *= parseFloat(`${parseInt(`${sort6}`) & 1}`);
      for (let o = 0; o < 2; o++) {
         sort6 /= Math.max(1, parseFloat(`${parseInt(`${sort6}`)}`));
      }
          let overc = String.fromCharCode(122,95,56,57,95,109,111,109,101,110,116,117,109,0);
          let iconnewchatl: Array<any> = [606, 608, 199];
         sort6 -= parseFloat(`${2}`);
         overc = "3";
         iconnewchatl.push((overc == String.fromCharCode(50,0) ? overc.length : iconnewchatl.length));
      baidud = new Map([[faviconx, faviconx.length | 2]]);
      if (iconarrowrightorangei) {
         break;
      }
   } while (iconarrowrightorangei && (baidud.size >= parseInt(`${whitevideoliveB}`)));
   for (let d = 0; d < 1; d++) {
      icone = String.fromCharCode(57,0) == iconclosewhitewithbgJ;
   }
   if (1.92 < (combinef / 1.94) || 1.94 < combinef) {
      icone = iconclosewhitewithbgJ.length == 5;
   }
      combinef /= Math.max(((icone ? 2 : 2) - parseInt(`${disconnectedlogoM}`)), 5);
   if (4 < (1 | championI) || !icone) {
      championI *= 3;
   }

    setloginType('email');

   for (let x = 0; x < 2; x++) {
      whitevideoliveB *= iconclosewhitewithbgJ.length & parseInt(`${disconnectedlogoM}`);
   }
   while (faviconx.endsWith(`${baidud.size}`)) {
      baidud = new Map([[`${disconnectedlogoM}`, ((icone ? 3 : 3) % (Math.max(parseInt(`${disconnectedlogoM}`), 1)))]]);
      break;
   }
       let iconpointscoreH = String.fromCharCode(115,95,56,51,95,115,121,109,101,118,101,110,0);
       let viewerJ = 3;
       let valuesJ = 3;
       let reminderC: Array<any> = [189, 426, 48];
       let cornerm = String.fromCharCode(114,97,116,105,111,110,97,108,95,104,95,54,48,0);
       let mbjscommont = String.fromCharCode(106,95,50,57,95,97,115,110,0);
      libfbjniK = disconnectedlogoM <= 93.24;
      iconpointscoreH = `${iconpointscoreH.length >> (Math.min(Math.abs(3), 1))}`;
   let fieldN = 7639381 >= baidud.size;
   do {
      baidud = new Map([[`${icone}`, 3 % (Math.max(6, parseInt(`${whitevideoliveB}`)))]]);
      if (fieldN) {
         break;
      }
   } while (fieldN && (championI == 5));
       let dropdownt = 5.0;
       let description_91 = 3.0;
          let statisticsactiveM: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,99,101,110,116,101,114,95,97,95,49,54,0),795], [String.fromCharCode(122,95,49,56,95,103,101,116,99,114,101,100,0),835]]);
         description_91 /= Math.max(parseInt(`${dropdownt}`), 2);
         statisticsactiveM = new Map([[`${statisticsactiveM.size}`, statisticsactiveM.size * statisticsactiveM.size]]);
         dropdownt += parseFloat(`${parseInt(`${description_91}`) << (Math.min(Math.abs(parseInt(`${dropdownt}`)), 3))}`);
          let danger1 = 1.0;
          let movies4 = 5;
         dropdownt += parseFloat(`${3}`);
         danger1 /= Math.max(5, parseFloat(`${movies4 * 3}`));
         movies4 /= Math.max(1, movies4 / 3);
         dropdownt /= Math.max(1, parseFloat(`${parseInt(`${description_91}`)}`));
      while ((3 / (Math.max(7, dropdownt))) == 2.53) {
         description_91 += parseInt(`${description_91}`) * 2;
         break;
      }
         dropdownt /= Math.max(parseFloat(`${parseInt(`${description_91}`)}`), 5);
      baidud.set(iconclosewhitewithbgJ, iconclosewhitewithbgJ.length - 2);
    setLoginValue('');

   let awayR = icone ? !icone : icone;
   do {
      icone = !libfbjniK;
      if (awayR) {
         break;
      }
   } while ((!icone) && awayR);
   for (let r = 0; r < 2; r++) {
      championI %= Math.max(5, parseInt(`${combinef}`));
   }
       let customu = String.fromCharCode(102,112,115,95,116,95,57,54,0);
       let iconlogoutO = 1;
      while (5 == iconlogoutO) {
          let reactnavigationL = true;
          let kuaishouv = false;
          let carouselN = 5;
          let penaltyshootnogoalN = 4;
          let libfiler: Array<any> = [String.fromCharCode(99,111,110,116,114,97,115,116,95,103,95,51,49,0), String.fromCharCode(115,117,112,101,114,120,115,97,105,95,57,95,54,51,0), String.fromCharCode(103,95,54,51,95,116,114,105,97,110,103,108,101,115,0)];
         customu += `${penaltyshootnogoalN | libfiler.length}`;
         reactnavigationL = !kuaishouv || 69 > carouselN;
         kuaishouv = !kuaishouv;
         carouselN >>= Math.min(2, Math.abs(carouselN));
         penaltyshootnogoalN *= 2 >> (Math.min(Math.abs(carouselN), 3));
         libfiler.push((carouselN / (Math.max(2, (reactnavigationL ? 1 : 2)))));
         break;
      }
       let details3 = 5.0;
       let predictionbuttonw = 2.0;
      for (let o = 0; o < 2; o++) {
          let libreactnativejnik: Array<any> = [868, 666];
          let moreI = String.fromCharCode(108,95,54,50,95,112,116,114,109,97,112,0);
          let bufferZ = String.fromCharCode(103,101,116,116,105,110,103,95,106,95,53,53,0);
         predictionbuttonw *= parseInt(`${predictionbuttonw}`) | bufferZ.length;
         libreactnativejnik.push(moreI.length & 3);
         moreI += `${(String.fromCharCode(76,0) == moreI ? moreI.length : libreactnativejnik.length)}`;
         bufferZ += `${libreactnativejnik.length}`;
      }
      for (let v = 0; v < 2; v++) {
          let fill7 = 0;
          let fileo = String.fromCharCode(100,95,50,51,95,109,112,101,103,97,117,100,105,111,100,115,112,0);
          let macauq: Map<any, any> = new Map([[String.fromCharCode(112,114,105,110,116,95,97,95,49,56,0),747], [String.fromCharCode(98,111,111,115,116,95,100,95,49,53,0),254]]);
          let playlistf = String.fromCharCode(119,114,105,116,101,120,95,119,95,57,51,0);
         iconlogoutO >>= Math.min(Math.abs(parseInt(`${details3}`)), 4);
         fill7 %= Math.max(macauq.size / 3, 2);
         fileo += `${fill7}`;
         macauq.set(playlistf, fill7);
         playlistf += `${3 + fileo.length}`;
      }
      while (1 > iconlogoutO) {
         iconlogoutO -= 1;
         break;
      }
       let bellreminderg = String.fromCharCode(112,114,105,109,101,95,108,95,49,51,0);
       let changeL = String.fromCharCode(112,114,111,103,114,101,115,105,118,101,95,50,95,54,50,0);
      championI *= 2;
   for (let r = 0; r < 2; r++) {
      iconclosewhitewithbgJ = `${((icone ? 3 : 4) | baidud.size)}`;
   }
       let iconnewchatn = true;
       let notification9: Array<any> = [String.fromCharCode(112,95,53,52,95,115,104,105,102,116,101,100,0), String.fromCharCode(107,105,99,107,101,114,95,99,95,56,48,0), String.fromCharCode(100,95,54,51,95,100,97,117,100,0)];
      for (let u = 0; u < 2; u++) {
         notification9.push(((iconnewchatn ? 4 : 4) << (Math.min(Math.abs(2), 4))));
      }
          let imageactionliveV: Array<any> = [340, 926];
          let dialogG = String.fromCharCode(104,95,49,51,95,98,97,116,99,104,0);
         notification9.push((dialogG == String.fromCharCode(69,0) ? dialogG.length : imageactionliveV.length));
      championI >>= Math.min(3, Math.abs(1 + iconclosewhitewithbgJ.length));
    setReferralCode('');

      baidud.set(`${libfbjniK}`, ((libfbjniK ? 3 : 2) * 3));
   if (1.37 > (whitevideoliveB - 2.96)) {
       let basketballH = String.fromCharCode(105,100,99,116,120,108,108,109,95,101,95,57,53,0);
       let subin5 = String.fromCharCode(102,95,56,50,95,98,97,114,0);
       let homeloading4: Array<any> = [String.fromCharCode(106,95,56,95,104,111,108,100,101,114,0), String.fromCharCode(115,112,101,97,107,101,114,95,53,95,55,51,0), String.fromCharCode(100,105,114,97,99,100,115,112,95,108,95,54,50,0)];
         basketballH += `${1 | subin5.length}`;
          let tailS = false;
          let reminder1 = true;
          let moony = String.fromCharCode(103,95,56,57,95,115,116,111,114,121,98,111,97,114,100,0);
         subin5 = `${homeloading4.length + basketballH.length}`;
         tailS = moony.length < 31;
         reminder1 = !tailS;
         moony += `${((reminder1 ? 4 : 1) ^ 3)}`;
      while (4 >= (4 ^ subin5.length) && 2 >= (4 ^ homeloading4.length)) {
          let gesturesK = 3.0;
         homeloading4 = [basketballH.length];
         gesturesK /= Math.max(2, parseInt(`${gesturesK}`) ^ 1);
         break;
      }
         subin5 += `${basketballH.length}`;
      if ((1 >> (Math.min(3, homeloading4.length))) == 3 || (1 >> (Math.min(5, homeloading4.length))) == 4) {
          let privacyA: Array<any> = [214, 385];
          let whitevideolivey = 0;
          let nativemoduleX = String.fromCharCode(102,95,53,54,95,99,97,110,99,101,108,0);
          let libffmpegkit9 = String.fromCharCode(116,119,111,109,95,52,95,52,54,0);
         homeloading4.push(privacyA.length);
         privacyA = [2 >> (Math.min(1, nativemoduleX.length))];
         whitevideolivey -= nativemoduleX.length;
         libffmpegkit9 += `${(String.fromCharCode(87,0) == libffmpegkit9 ? libffmpegkit9.length : whitevideolivey)}`;
      }
       let bnewinterstitialp: Array<any> = [829, 367];
       let filleda: Array<any> = [267, 745];
         subin5 = `${filleda.length}`;
         filleda = [2];
         subin5 += "2";
      baidud = new Map([[`${disconnectedlogoM}`, 3 / (Math.max(8, parseInt(`${disconnectedlogoM}`)))]]);
   }
      faviconx += `${baidud.size << (Math.min(Math.abs(1), 1))}`;
   for (let m = 0; m < 2; m++) {
      disconnectedlogoM *= parseInt(`${combinef}`) / (Math.max(1, 5));
   }
   if ((combinef - baidud.size) <= 4.46) {
       let nalyticsr: Map<any, any> = new Map([[String.fromCharCode(99,111,108,99,111,108,95,99,95,51,54,0),882], [String.fromCharCode(105,95,57,57,95,115,97,109,101,113,0),702], [String.fromCharCode(109,95,49,48,95,115,119,105,116,99,104,0),52]]);
       let stepf = String.fromCharCode(99,97,114,100,105,110,97,108,105,116,121,95,54,95,53,52,0);
      let iconqqU = 6602093 >= nalyticsr.size;
      do {
         nalyticsr.set(stepf, 2);
         if (iconqqU) {
            break;
         }
      } while (iconqqU && ((2 | nalyticsr.size) >= 5));
         nalyticsr.set(`${stepf}`, nalyticsr.size / (Math.max(3, 10)));
       let q_center0: Map<any, any> = new Map([[String.fromCharCode(116,105,108,101,115,95,110,95,55,55,0),939], [String.fromCharCode(98,95,54,57,95,101,110,99,111,100,101,100,0),867]]);
       let pressure6: Map<any, any> = new Map([[String.fromCharCode(108,95,52,53,95,115,109,111,111,116,104,101,100,0),21], [String.fromCharCode(118,95,51,48,95,97,110,115,119,101,114,0),480], [String.fromCharCode(113,117,97,100,114,97,116,105,99,95,55,95,54,57,0),560]]);
          let connectionT = 1;
         nalyticsr = new Map([[`${pressure6.size}`, (stepf == String.fromCharCode(111,0) ? pressure6.size : stepf.length)]]);
         connectionT &= connectionT % (Math.max(4, connectionT));
      for (let u = 0; u < 1; u++) {
         q_center0 = new Map([[`${pressure6.size}`, nalyticsr.size]]);
      }
      let button6 = pressure6.size >= 4993404;
      do {
         pressure6 = new Map([[`${nalyticsr.size}`, nalyticsr.size]]);
         if (button6) {
            break;
         }
      } while (button6 && ((pressure6.size % (Math.max(stepf.length, 5))) <= 4 || 1 <= (4 % (Math.max(6, pressure6.size)))));
      combinef -= parseInt(`${whitevideoliveB}`) ^ 1;
   }
    setLoginValueErrMsg(null);

   let images7 = iconclosewhitewithbgJ.length <= 7165433;
   do {
      iconclosewhitewithbgJ = `${parseInt(`${whitevideoliveB}`)}`;
      if (images7) {
         break;
      }
   } while (images7 && ((disconnectedlogoM / (Math.max(1, iconclosewhitewithbgJ.length))) < 1.9));
       let iconsettingn = 1.0;
       let basketballawayteamp = 3;
       let dplus4 = false;
      if (4.22 < (iconsettingn + 3.14) && iconsettingn < 3.14) {
          let hejiX = String.fromCharCode(116,101,109,112,111,95,114,95,49,49,0);
         iconsettingn /= Math.max(1, parseFloat(`${hejiX.length}`));
      }
       let basketballmatchdetailbg6 = 0.0;
       let notificationfilledZ = String.fromCharCode(99,111,108,108,105,100,105,110,103,95,106,95,57,52,0);
       let soundS = String.fromCharCode(118,95,57,51,95,110,105,109,97,116,101,100,0);
         notificationfilledZ += `${(notificationfilledZ == String.fromCharCode(81,0) ? parseInt(`${basketballmatchdetailbg6}`) : notificationfilledZ.length)}`;
         notificationfilledZ = `${((dplus4 ? 3 : 1) & basketballawayteamp)}`;
      while (notificationfilledZ.endsWith(`${iconsettingn}`)) {
         notificationfilledZ = "3";
         break;
      }
         basketballmatchdetailbg6 -= 3;
       let uimanager9 = 0.0;
       let dycreatord = String.fromCharCode(116,101,108,101,103,114,97,95,101,95,51,0);
      combinef -= (3 + (icone ? 3 : 5));
       let videojsY = 2;
       let penaltymatchiconx: Array<any> = [992, 317];
       let fast1 = false;
         penaltymatchiconx.push(3);
      let arrowupm = 8024200 <= penaltymatchiconx.length;
      do {
         penaltymatchiconx.push(((fast1 ? 2 : 5) ^ penaltymatchiconx.length));
         if (arrowupm) {
            break;
         }
      } while (arrowupm && (3 > penaltymatchiconx.length && 3 > (penaltymatchiconx.length << (Math.min(Math.abs(3), 2)))));
          let homeplayerr = String.fromCharCode(105,110,100,101,111,100,97,116,97,95,116,95,55,53,0);
          let gradlek: Array<any> = [81, 307, 685];
          let penaltymatchicon2 = String.fromCharCode(109,101,97,115,117,114,101,109,101,110,116,95,119,95,53,53,0);
         penaltymatchiconx.push(gradlek.length % (Math.max(3, 1)));
         homeplayerr = `${homeplayerr.length}`;
         gradlek.push((String.fromCharCode(49,0) == homeplayerr ? penaltymatchicon2.length : homeplayerr.length));
         penaltymatchicon2 += "1";
      let encryptorR = fast1 ? !fast1 : fast1;
      do {
          let matchdetailbgI = String.fromCharCode(119,111,114,107,108,111,97,100,95,117,95,50,53,0);
          let footballtrophyE = false;
          let subbasketballplayero = String.fromCharCode(102,105,108,116,101,114,105,110,103,95,50,95,51,49,0);
          let latnC = String.fromCharCode(105,95,57,95,98,116,110,0);
         fast1 = matchdetailbgI == String.fromCharCode(48,0);
         matchdetailbgI += `${subbasketballplayero.length * 3}`;
         footballtrophyE = !footballtrophyE;
         subbasketballplayero = `${subbasketballplayero.length}`;
         latnC = "1";
         if (encryptorR) {
            break;
         }
      } while (encryptorR && (fast1));
      let bottomw = 5542149 >= penaltymatchiconx.length;
      do {
          let recommendationY: Map<any, any> = new Map([[String.fromCharCode(105,95,51,52,95,114,101,108,99,116,120,0),427], [String.fromCharCode(110,95,55,49,95,107,101,121,118,97,108,0),831]]);
          let link2 = String.fromCharCode(122,95,51,57,95,115,112,105,110,110,105,110,103,0);
          let iconqqK: Array<any> = [151, 208];
          let unreadw = 5.0;
          let guidef = String.fromCharCode(100,95,49,49,95,114,101,113,117,101,115,116,97,98,108,101,0);
         penaltymatchiconx.push(2 >> (Math.min(3, penaltymatchiconx.length)));
         recommendationY.set(guidef, 2);
         link2 += `${guidef.length % (Math.max(2, recommendationY.size))}`;
         iconqqK.push(recommendationY.size + 1);
         unreadw /= Math.max(1, iconqqK.length % (Math.max(link2.length, 9)));
         if (bottomw) {
            break;
         }
      } while ((penaltymatchiconx.length <= 5 && 2 <= (5 ^ penaltymatchiconx.length)) && bottomw);
          let codegenT: Map<any, any> = new Map([[String.fromCharCode(115,95,55,48,95,99,113,117,101,117,101,0),564], [String.fromCharCode(113,95,49,55,0),323], [String.fromCharCode(100,95,50,95,97,108,103,0),48]]);
         videojsY |= penaltymatchiconx.length;
         codegenT.set(`${codegenT.size}`, codegenT.size);
         fast1 = 3 == videojsY || penaltymatchiconx.length == 3;
      for (let z = 0; z < 1; z++) {
          let inouttargetredw = false;
          let iconmore7 = 0.0;
          let whitevideolive4: Array<any> = [755, 602, 288];
         videojsY += videojsY + parseInt(`${iconmore7}`);
         inouttargetredw = !inouttargetredw || whitevideolive4.length == 76;
         iconmore7 -= parseFloat(`${whitevideolive4.length % 1}`);
      }
          let playlist3 = true;
         penaltymatchiconx = [3];
         playlist3 = playlist3 && !playlist3;
      libfbjniK = (disconnectedlogoM + faviconx.length) == 46.51;
      championI <<= Math.min(Math.abs(parseInt(`${whitevideoliveB}`)), 3);
      whitevideoliveB += baidud.size;
    setReferralCodeErrMsg(null);

      disconnectedlogoM -= 3 & parseInt(`${whitevideoliveB}`);
      iconclosewhitewithbgJ += `${iconclosewhitewithbgJ.length}`;
   while (1 == iconclosewhitewithbgJ.length && libfbjniK) {
      libfbjniK = baidud.size <= 56 && String.fromCharCode(102,0) == iconclosewhitewithbgJ;
      break;
   }
   if (5 >= (championI ^ 1)) {
       let iconpipshrinkL = 4.0;
       let lineF: Array<any> = [446, 386, 865];
       let eighteenv: Map<any, any> = new Map([[String.fromCharCode(100,101,108,105,109,105,116,101,114,95,110,95,51,56,0),967], [String.fromCharCode(110,111,100,101,95,122,95,55,49,0),544]]);
      for (let d = 0; d < 3; d++) {
         eighteenv.set(`${iconpipshrinkL}`, lineF.length / 2);
      }
      while (3 <= (parseInt(`${iconpipshrinkL}`) * lineF.length) && (iconpipshrinkL * 2.76) <= 1.86) {
          let eyeopen2 = String.fromCharCode(98,95,57,51,95,101,108,108,105,112,116,105,99,0);
         iconpipshrinkL *= parseFloat(`${lineF.length}`);
         eyeopen2 = `${eyeopen2.length + eyeopen2.length}`;
         break;
      }
      for (let u = 0; u < 3; u++) {
          let activityD = 0.0;
         eighteenv.set(`${activityD}`, parseInt(`${activityD}`) | 1);
      }
      while (2.40 >= (iconpipshrinkL - 2.79)) {
          let anytimeF = 2;
          let template_wT: Array<any> = [378, 29, 479];
          let auto_ein = String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,115,95,108,95,56,50,0);
          let resulto: Array<any> = [430, 540];
          let entrys = String.fromCharCode(115,107,105,112,105,110,116,114,97,95,108,95,51,50,0);
         iconpipshrinkL *= parseFloat(`${resulto.length}`);
         anytimeF %= Math.max(2, entrys.length - auto_ein.length);
         template_wT.push(entrys.length);
         auto_ein = `${anytimeF}`;
         resulto.push(2 + auto_ein.length);
         break;
      }
      if ((3 ^ eighteenv.size) == 3 && (eighteenv.size >> (Math.min(Math.abs(3), 1))) == 4) {
          let trasho = String.fromCharCode(118,95,57,51,95,110,101,105,103,104,98,111,114,105,110,103,0);
          let projectk: Array<any> = [50, 865, 620];
          let nextG: Array<any> = [501, 691, 610];
          let currentY = 5;
          let filter6 = 1.0;
         eighteenv = new Map([[`${eighteenv.size}`, 1 - eighteenv.size]]);
         trasho = `${2 % (Math.max(2, trasho.length))}`;
         projectk = [nextG.length / 2];
         nextG = [3];
         currentY += 3;
         filter6 *= parseFloat(`${nextG.length}`);
      }
      let combinedZ = 5114557 >= eighteenv.size;
      do {
          let detailc = String.fromCharCode(115,101,103,109,101,110,116,101,100,95,107,95,57,55,0);
          let buttonL = 2.0;
         eighteenv = new Map([[`${eighteenv.size}`, eighteenv.size | detailc.length]]);
         detailc = `${parseInt(`${buttonL}`) & parseInt(`${buttonL}`)}`;
         if (combinedZ) {
            break;
         }
      } while (combinedZ && (5 >= (lineF.length * 5) && (5 * eighteenv.size) >= 5));
          let predictionbannerO = String.fromCharCode(116,95,49,95,114,118,100,97,116,97,0);
         lineF.push(eighteenv.size >> (Math.min(Math.abs(3), 4)));
         predictionbannerO += `${1 & predictionbannerO.length}`;
         iconpipshrinkL /= Math.max(parseFloat(`${2 << (Math.min(3, lineF.length))}`), 3);
       let topon5: Array<any> = [668, 888];
      championI %= Math.max(1, 5);
   }
      baidud.set(`${championI}`, championI);
    setReadTermNCondition(false);

   let plashb = 7381346 <= baidud.size;
   do {
      baidud = new Map([[`${icone}`, parseInt(`${combinef}`) << (Math.min(3, Math.abs(1)))]]);
      if (plashb) {
         break;
      }
   } while (((baidud.size / (Math.max(5, 7))) == 2 && (championI / (Math.max(5, 9))) == 5) && plashb);
   for (let w = 0; w < 1; w++) {
       let scheduleC = 3.0;
       let toponO = String.fromCharCode(108,95,56,55,95,101,114,97,115,101,114,0);
       let themeW: Array<any> = [19, 159];
         themeW.push(3);
         themeW.push(themeW.length << (Math.min(toponO.length, 3)));
       let libjsinspectorF = false;
      if (3 >= toponO.length && !libjsinspectorF) {
          let teamL = 0;
         toponO = "1";
         teamL -= 2 % (Math.max(5, teamL));
      }
      while ((scheduleC * 5.53) <= 5.63 && (toponO.length >> (Math.min(Math.abs(4), 5))) <= 5) {
          let playlistm = 3;
          let selectW: Map<any, any> = new Map([[String.fromCharCode(99,95,56,51,95,114,101,97,114,114,97,110,103,101,0),691], [String.fromCharCode(98,95,49,50,95,110,97,118,105,103,97,116,101,0),148], [String.fromCharCode(115,95,49,48,95,100,99,116,101,108,101,109,0),779]]);
          let icontransferclubL = 0.0;
         scheduleC *= parseFloat(`${selectW.size ^ 1}`);
         playlistm <<= Math.min(Math.abs(3 + playlistm), 2);
         selectW = new Map([[`${playlistm}`, playlistm * parseInt(`${icontransferclubL}`)]]);
         icontransferclubL *= parseFloat(`${2}`);
         break;
      }
      while ((4 | toponO.length) > 5) {
         scheduleC -= parseFloat(`${parseInt(`${scheduleC}`)}`);
         break;
      }
          let predictionbannerN: Array<any> = [358, 668];
         themeW.push(themeW.length);
         predictionbannerN.push(predictionbannerN.length);
          let shrunkB = String.fromCharCode(115,116,105,102,102,110,101,115,115,95,54,95,53,50,0);
          let yingL: Array<any> = [760, 247];
          let libcxxcomponentso = true;
         themeW.push(yingL.length - 2);
         shrunkB += `${shrunkB.length / 3}`;
         yingL.push(shrunkB.length);
      for (let b = 0; b < 1; b++) {
          let arrowselectdowno = String.fromCharCode(122,95,51,55,95,111,110,101,0);
          let refreshJ = 4.0;
          let inouttargetred0 = String.fromCharCode(122,95,49,57,95,117,115,105,110,103,0);
          let alertS = false;
          let regengb = 4.0;
         toponO += `${parseInt(`${regengb}`)}`;
         arrowselectdowno = `${inouttargetred0.length}`;
         refreshJ *= parseFloat(`${inouttargetred0.length}`);
         alertS = arrowselectdowno.startsWith(`${refreshJ}`);
      }
      whitevideoliveB *= 3 + parseInt(`${whitevideoliveB}`);
   }
   while (2.32 == (5.70 - combinef)) {
      combinef /= Math.max(1, 3);
      break;
   }
   while ((disconnectedlogoM * 5.12) >= 3.59 && (3 + faviconx.length) >= 2) {
      faviconx = `${1 ^ faviconx.length}`;
      break;
   }
   let awayplayert = combinef >= 6326382.0;
   do {
      combinef += parseInt(`${disconnectedlogoM}`) - 1;
      if (awayplayert) {
         break;
      }
   } while (awayplayert && (whitevideoliveB <= 2.26));

    setShowCountryList(false);
  }

  const onLoginValueChange = (
    value: string,
  ) => {
    setLoginValue(value);
    setLoginValueErrMsg(null);

    if (loginType === 'phone') {
      
      const formattedValue = value.replace(/\D/g, '');

      let formattedPhoneNumber = '';
      for (let i = 0; i < formattedValue.length; i++) {
        formattedPhoneNumber += formattedValue[i];
        if (i === 2 && formattedValue.length > 3) {
          formattedPhoneNumber += ' ';
        } else if (i === 5 && formattedValue.length > 6) {
          formattedPhoneNumber += ' ';
        }
      }

      
      setLoginValue(formattedPhoneNumber);
      setLoginValueErrMsg(null);
    }

    if (value === '') return;

    if (loginType === 'email' && !isEmailValid(value)) {
      setLoginValueErrMsg('邮件格式错误');
    } else if (loginType === 'phone' && !isPhoneValid(value)) {
      setLoginValueErrMsg('手机号码格式错误');
    }
  };

  const onReferralCodeChange = (
    value: string,
  ) => {
    setReferralCode(value);
    setReferralCodeErrMsg(null);
  };

  const onPressCountryDropdown = () => {
       let iconviewerE = String.fromCharCode(115,95,54,95,101,113,117,97,108,0);
    let iconcalendark = String.fromCharCode(100,95,50,56,95,100,99,97,97,100,112,99,109,0);
    let footballr = 2.0;
    let zhuboe = String.fromCharCode(117,105,111,116,111,109,98,117,102,95,118,95,55,53,0);
    let greytickn = 4.0;
    let targetC = String.fromCharCode(109,100,110,115,95,98,95,56,56,0);
    let penaltygoalH = 0;
    let eyeopeng = String.fromCharCode(117,95,56,57,95,114,101,115,116,111,114,97,116,105,111,110,0);
    let iconwechatc = String.fromCharCode(102,95,49,48,48,95,116,97,103,98,105,116,0);
       let libswscaleH: Map<any, any> = new Map([[String.fromCharCode(105,110,118,105,116,97,116,105,111,110,95,99,95,52,57,0),String.fromCharCode(98,114,101,97,100,95,51,95,57,48,0)], [String.fromCharCode(102,95,50,54,95,98,117,116,116,111,110,115,0),String.fromCharCode(118,97,110,99,95,104,95,52,56,0)]]);
       let hongkongw = 2.0;
       let iconstar1 = true;
      if (3.72 > (libswscaleH.size * hongkongw)) {
         hongkongw -= parseInt(`${hongkongw}`) | 3;
      }
         iconstar1 = !iconstar1;
         libswscaleH.set(`${hongkongw}`, 1);
      let homeactiveT = libswscaleH.size <= 7678248;
      do {
         libswscaleH.set(`${iconstar1}`, libswscaleH.size - 1);
         if (homeactiveT) {
            break;
         }
      } while ((5 == libswscaleH.size && (5 - libswscaleH.size) == 3) && homeactiveT);
      let footballfiledlayoutQ = 6792443 <= libswscaleH.size;
      do {
          let modeT: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,112,116,115,95,103,95,53,51,0),938], [String.fromCharCode(111,95,56,56,95,115,117,98,100,101,109,117,120,101,114,0),307]]);
          let disconnectedlogoL = String.fromCharCode(109,109,105,117,116,105,108,115,95,102,95,49,53,0);
          let circleM = 3;
         libswscaleH = new Map([[`${libswscaleH.size}`, modeT.size]]);
         modeT = new Map([[`${circleM}`, 3]]);
         disconnectedlogoL += `${circleM + 2}`;
         if (footballfiledlayoutQ) {
            break;
         }
      } while (footballfiledlayoutQ && (3 < libswscaleH.size && 3 < (libswscaleH.size - 3)));
      if ((libswscaleH.size - 2) == 1 && libswscaleH.size == 2) {
         iconstar1 = 24 <= libswscaleH.size && 96.52 <= hongkongw;
      }
          let predictionR = 0;
          let arrowrightc: Array<any> = [237, 441];
         hongkongw -= (arrowrightc.length - (iconstar1 ? 3 : 2));
         predictionR += predictionR + predictionR;
         arrowrightc.push(2 << (Math.min(3, Math.abs(predictionR))));
          let cancelL = 2;
          let auto_4k4 = String.fromCharCode(100,95,57,51,95,114,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0);
          let floatingr = false;
         iconstar1 = 48 > cancelL && !iconstar1;
         cancelL /= Math.max(((floatingr ? 2 : 5) * 3), 3);
         auto_4k4 += `${((floatingr ? 1 : 5) >> (Math.min(Math.abs(3), 2)))}`;
         libswscaleH = new Map([[`${libswscaleH.size}`, parseInt(`${hongkongw}`)]]);
      targetC += `${libswscaleH.size % 3}`;
   for (let g = 0; g < 1; g++) {
       let icontransferclubQ = 1;
       let showmorei = 5.0;
         showmorei *= parseFloat(`${parseInt(`${showmorei}`)}`);
      while (3.57 <= (4.98 - showmorei) || (icontransferclubQ >> (Math.min(Math.abs(5), 3))) <= 4) {
         icontransferclubQ -= 1 / (Math.max(icontransferclubQ, 10));
         break;
      }
         showmorei += parseFloat(`${2 - parseInt(`${showmorei}`)}`);
         icontransferclubQ <<= Math.min(4, Math.abs(parseInt(`${showmorei}`)));
         showmorei -= parseFloat(`${2 % (Math.max(parseInt(`${showmorei}`), 9))}`);
      for (let e = 0; e < 1; e++) {
          let referrerN: Map<any, any> = new Map([[String.fromCharCode(111,95,49,50,95,115,99,97,110,110,105,110,103,0),459], [String.fromCharCode(114,95,54,56,95,115,104,111,119,105,110,103,0),446]]);
          let orangeA = String.fromCharCode(109,95,51,50,95,99,111,109,112,108,101,116,101,0);
          let basketballawayteamE = true;
          let refreshborderlessR = 2;
          let iconqqb: Array<any> = [704, 193];
         icontransferclubQ >>= Math.min(4, Math.abs(referrerN.size / 3));
         referrerN.set(orangeA, ((basketballawayteamE ? 2 : 2)));
         orangeA = `${(1 << (Math.min(4, Math.abs((basketballawayteamE ? 2 : 5)))))}`;
         refreshborderlessR >>= Math.min(4, iconqqb.length);
         iconqqb = [(3 - (basketballawayteamE ? 3 : 3))];
      }
      greytickn /= Math.max(4, 1 - zhuboe.length);
   }
      targetC = `${targetC.length}`;
   while ((penaltygoalH / (Math.max(iconcalendark.length, 8))) >= 4) {
       let arrowrighte = 4.0;
         arrowrighte *= parseInt(`${arrowrighte}`) % (Math.max(4, parseInt(`${arrowrighte}`)));
         arrowrighte -= parseInt(`${arrowrighte}`) >> (Math.min(1, Math.abs(3)));
      while ((3.51 / (Math.max(6, arrowrighte))) > 5.55 && (arrowrighte + 3.51) > 2.37) {
         arrowrighte *= 1;
         break;
      }
      iconcalendark = `${penaltygoalH}`;
      break;
   }
       let rulesz = String.fromCharCode(108,95,49,48,95,118,97,108,105,100,0);
       let leftY = String.fromCharCode(104,95,49,50,95,111,108,100,110,101,119,0);
      while (leftY != rulesz) {
         rulesz += "2";
         break;
      }
         leftY = `${rulesz.length << (Math.min(Math.abs(3), 3))}`;
         rulesz = "1";
          let homeicon7 = String.fromCharCode(115,99,97,110,95,97,95,56,57,0);
          let libfileW = String.fromCharCode(112,95,57,57,95,112,97,99,107,101,116,115,0);
         leftY += "3";
         homeicon7 += `${2 - libfileW.length}`;
         libfileW = "3";
         rulesz += `${leftY.length + 3}`;
      if (3 <= leftY.length && rulesz == String.fromCharCode(110,0)) {
          let vignetteR = String.fromCharCode(101,114,112,105,99,95,56,95,51,54,0);
          let reactnativeratingso = 3;
          let awayplayerL = false;
         rulesz += `${3 ^ leftY.length}`;
         vignetteR += `${2 + vignetteR.length}`;
         reactnativeratingso *= 3;
      }
      iconviewerE += `${(rulesz == String.fromCharCode(79,0) ? eyeopeng.length : rulesz.length)}`;
      footballr -= parseFloat(`${1 << (Math.min(3, zhuboe.length))}`);
   if ((4 ^ zhuboe.length) <= 3) {
       let xvodp = String.fromCharCode(111,95,52,48,95,100,120,116,97,0);
       let formT: Array<any> = [806, 307];
       let chatbotphotor = false;
       let bottom6 = 2.0;
      for (let o = 0; o < 3; o++) {
         bottom6 /= Math.max((xvodp == String.fromCharCode(113,0) ? xvodp.length : formT.length), 1);
      }
         bottom6 -= parseInt(`${bottom6}`);
          let typesh = 4.0;
          let greyI = 3.0;
         chatbotphotor = (formT.length - parseInt(`${typesh}`)) >= 68;
         typesh -= parseInt(`${greyI}`) >> (Math.min(Math.abs(parseInt(`${greyI}`)), 1));
      for (let z = 0; z < 2; z++) {
         formT.push(parseInt(`${bottom6}`) / (Math.max(formT.length, 5)));
      }
      for (let q = 0; q < 3; q++) {
         chatbotphotor = !chatbotphotor && 18.88 == bottom6;
      }
         formT = [3];
      if (2 >= (formT.length & 3) && 4 >= (3 & formT.length)) {
          let neone: Map<any, any> = new Map([[String.fromCharCode(122,95,57,53,95,116,101,108,101,103,114,97,109,0),74], [String.fromCharCode(116,105,99,107,101,114,115,95,118,95,51,52,0),53]]);
         formT.push(3);
         neone.set(`${neone.size}`, neone.size);
      }
      if ((3 | formT.length) <= 3 && 3 <= formT.length) {
         formT = [formT.length * xvodp.length];
      }
      let inouttargetyellow7 = 6387348.0 >= bottom6;
      do {
          let with_p8e: Array<any> = [604, 64, 45];
          let humidityu = 4.0;
          let assetsF = 1.0;
         bottom6 += parseInt(`${assetsF}`);
         with_p8e = [3];
         humidityu *= 1 * with_p8e.length;
         assetsF += 3 ^ parseInt(`${humidityu}`);
         if (inouttargetyellow7) {
            break;
         }
      } while ((parseInt(`${bottom6}`) < xvodp.length) && inouttargetyellow7);
         formT.push(3 | formT.length);
         xvodp += "1";
      for (let x = 0; x < 1; x++) {
          let auto_iF = String.fromCharCode(115,95,51,51,95,97,114,97,98,105,99,0);
          let libfbD = 2;
          let logins = true;
         formT.push(libfbD + 1);
         auto_iF += `${((logins ? 2 : 5) | auto_iF.length)}`;
         libfbD += (String.fromCharCode(48,0) == auto_iF ? (logins ? 3 : 1) : auto_iF.length);
      }
      zhuboe += "1";
   }
       let selectedB = String.fromCharCode(114,101,97,100,109,101,95,53,95,56,49,0);
         selectedB = `${(String.fromCharCode(53,0) == selectedB ? selectedB.length : selectedB.length)}`;
      if (selectedB == String.fromCharCode(115,0)) {
         selectedB += `${selectedB.length}`;
      }
          let iconsaveimagey = String.fromCharCode(100,99,97,109,97,116,104,95,112,95,55,50,0);
         selectedB = `${(iconsaveimagey == String.fromCharCode(107,0) ? selectedB.length : iconsaveimagey.length)}`;
      targetC = `${penaltygoalH * iconcalendark.length}`;
      greytickn += 1;
   let reactd = 6436539.0 <= greytickn;
   do {
      greytickn += 2;
      if (reactd) {
         break;
      }
   } while (reactd && ((2.78 + greytickn) > 3.43 && (2.78 + greytickn) > 4.42));
   let circler = targetC.length <= 8748878;
   do {
      targetC += `${2 + eyeopeng.length}`;
      if (circler) {
         break;
      }
   } while (circler && (iconcalendark != targetC));
   let dycreatorZ = iconviewerE == String.fromCharCode(95,100,108,102,0);
   do {
      iconviewerE += "3";
      if (dycreatorZ) {
         break;
      }
   } while (dycreatorZ && (!eyeopeng.endsWith(`${iconviewerE.length}`)));
   while ((1 % (Math.max(8, eyeopeng.length))) < 1 && (eyeopeng.length - parseInt(`${greytickn}`)) < 1) {
      greytickn *= 3;
      break;
   }
      greytickn += parseInt(`${footballr}`);
   for (let y = 0; y < 1; y++) {
      targetC = "3";
   }
      iconcalendark = "3";
      penaltygoalH -= zhuboe.length;
   while (zhuboe.startsWith(targetC)) {
      targetC += `${1 * zhuboe.length}`;
      break;
   }
      eyeopeng = `${iconviewerE.length}`;
   let yellowredcardb = footballr <= 5246706.0;
   do {
      footballr *= parseFloat(`${2 * penaltygoalH}`);
      if (yellowredcardb) {
         break;
      }
   } while (((4 | iconviewerE.length) >= 2 || (parseInt(`${footballr}`) / (Math.max(4, 3))) >= 5) && yellowredcardb);

    setShowCountryList(!isShowCountryList);
  }

  const onSelectCountryPhone = (data: any) => {
    setCountryPhoneSelected(data);
    setShowCountryList(false);
  }

  const onChangeloginType = (type: 'email' | 'phone') => {
    setloginType(type);
    setLoginValue('');
    setLoginValueErrMsg(null);
  }

  const onPressGoogleLogin = async () => {
       let wifiroutery = 1;
    let greenU = 2.0;
    let iconrightorangeZ = 3;
    let predictiondefaulte = false;
    let mergerc: Array<any> = [633, 710];
    let vietnamB = 2.0;
    let infox = 2.0;
    let flagU = false;
    let settingi = String.fromCharCode(119,95,57,95,101,118,101,110,116,0);
    let assistv = String.fromCharCode(113,117,97,110,116,95,57,95,49,53,0);
    let reminderl = 5.0;
    let shielddoneu = 5;
    let grayw = 2;
    let internetq = String.fromCharCode(118,110,101,103,113,95,105,95,53,51,0);
    let eactW = String.fromCharCode(110,95,55,52,95,105,110,116,101,114,112,111,108,97,116,101,102,0);
      flagU = !flagU;

    if (isSubmitting) return;

      mergerc = [wifiroutery ^ 2];

    if (isReadTermNCondition == false) {

      iconrightorangeZ %= Math.max(3, 2);
      showToast('请勾选用户协议和隐私协议');

      infox += 3 / (Math.max(9, wifiroutery));
      return;

   if (wifiroutery == 1) {
      wifiroutery ^= (parseInt(`${greenU}`) | (predictiondefaulte ? 5 : 3));
   }
    }

    let userInfo;

   for (let y = 0; y < 1; y++) {
      settingi = "2";
   }

    try {

      wifiroutery >>= Math.min(Math.abs(wifiroutery), 3);
      await GoogleSignin.hasPlayServices();

      wifiroutery += settingi.length;

      if (await GoogleSignin.isSignedIn()) {

   let backiconmaskh = 7395990.0 <= vietnamB;
   do {
      vietnamB *= 3;
      if (backiconmaskh) {
         break;
      }
   } while (backiconmaskh && (2 < iconrightorangeZ));
        userInfo = await GoogleSignin.getCurrentUser();
      } else {

   while ((grayw << (Math.min(Math.abs(3), 4))) > 3) {
      grayw %= Math.max(2, (String.fromCharCode(76,0) == assistv ? shielddoneu : assistv.length));
      break;
   }
        userInfo = await GoogleSignin.signIn();
      }

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        
      } else if (error.code === statusCodes.IN_PROGRESS) {

   if (4.23 <= (5.29 * infox)) {
      flagU = shielddoneu >= assistv.length;
   }
        

   if (1 == (1 * mergerc.length) && flagU) {
       let predictionwinm = 1.0;
       let clockY = false;
       let awayicont: Array<any> = [84, 931];
       let ping4 = 0;
      while (1.67 <= (predictionwinm * 3.89)) {
          let inouttargetyellow3 = 2;
          let matchdetailbgE = 2.0;
          let dragh = String.fromCharCode(105,110,116,101,114,95,116,95,51,52,0);
         clockY = !clockY;
         inouttargetyellow3 &= 2;
         matchdetailbgE += 2;
         dragh = "3";
         break;
      }
         predictionwinm /= Math.max(4, parseFloat(`${1}`));
      let matchdetailbgc = 6495381.0 >= predictionwinm;
      do {
         predictionwinm *= parseFloat(`${awayicont.length >> (Math.min(1, Math.abs(parseInt(`${predictionwinm}`))))}`);
         if (matchdetailbgc) {
            break;
         }
      } while (matchdetailbgc && (4.17 >= (predictionwinm / (Math.max(parseFloat(`${awayicont.length}`), 4))) || (1 + awayicont.length) >= 2));
          let defaultpredictionprofile_ = String.fromCharCode(99,114,111,112,112,105,110,103,95,116,95,49,53,0);
          let orangeuparrowh: Map<any, any> = new Map([[String.fromCharCode(102,95,50,49,95,97,117,100,105,111,100,97,116,97,0),213], [String.fromCharCode(115,105,103,110,97,116,117,114,101,95,102,95,57,50,0),61], [String.fromCharCode(99,95,54,56,95,110,117,109,98,105,116,115,0),431]]);
         ping4 -= 3;
         defaultpredictionprofile_ = `${defaultpredictionprofile_.length}`;
         orangeuparrowh = new Map([[`${orangeuparrowh.size}`, orangeuparrowh.size]]);
          let iconshareN = String.fromCharCode(109,101,109,117,116,105,108,95,105,95,57,53,0);
          let showlessd: Map<any, any> = new Map([[String.fromCharCode(108,95,57,95,107,105,108,108,0),874], [String.fromCharCode(115,117,112,101,114,98,108,111,99,107,115,95,50,95,53,56,0),829], [String.fromCharCode(121,95,53,57,95,116,111,116,97,108,108,121,0),704]]);
          let constantsk = String.fromCharCode(98,95,51,53,95,116,116,97,99,104,109,101,110,116,0);
         predictionwinm /= Math.max((parseFloat(`${String.fromCharCode(84,0) == constantsk ? constantsk.length : showlessd.size}`)), 4);
         iconshareN = `${iconshareN.length + 1}`;
         showlessd.set(iconshareN, iconshareN.length);
       let grayx = String.fromCharCode(114,101,115,117,108,117,116,105,111,110,95,57,95,54,53,0);
       let logok = String.fromCharCode(119,95,53,48,95,97,98,108,101,0);
      for (let v = 0; v < 2; v++) {
          let bridgeI: Array<any> = [String.fromCharCode(121,95,56,95,108,117,109,98,101,114,106,97,99,107,0), String.fromCharCode(111,95,48,0), String.fromCharCode(115,95,49,95,102,111,110,116,0)];
          let sideH: Map<any, any> = new Map([[String.fromCharCode(98,111,111,116,115,116,114,97,112,95,54,95,53,51,0),false ], [String.fromCharCode(98,95,49,50,95,97,102,102,105,110,105,116,121,0),false ], [String.fromCharCode(104,95,53,57,95,103,101,116,110,109,115,101,100,101,99,0),true ]]);
          let informationR = String.fromCharCode(108,95,49,51,95,109,105,112,115,100,115,112,0);
         awayicont = [1];
         bridgeI.push(informationR.length);
         sideH = new Map([[`${sideH.size}`, 1 & informationR.length]]);
      }
      for (let i = 0; i < 2; i++) {
          let a_lockp = String.fromCharCode(119,95,48,0);
          let libimagepipeline0 = 2.0;
          let lnews8 = 3.0;
          let codegenQ: Map<any, any> = new Map([[String.fromCharCode(112,111,108,108,101,114,95,98,95,57,53,0),772], [String.fromCharCode(113,95,50,51,95,99,114,101,97,116,105,111,110,0),896]]);
         ping4 += 3;
         a_lockp += `${a_lockp.length % 2}`;
         libimagepipeline0 += a_lockp.length - 3;
         lnews8 *= parseInt(`${lnews8}`) % 3;
         codegenQ.set(`${libimagepipeline0}`, 1 | a_lockp.length);
      }
      for (let r = 0; r < 1; r++) {
         predictionwinm += parseFloat(`${3}`);
      }
      while (1 <= (5 + ping4) && (ping4 % 5) <= 5) {
         ping4 -= (parseInt(`${predictionwinm}`) ^ (clockY ? 2 : 5));
         break;
      }
         predictionwinm += (parseFloat(`${(clockY ? 1 : 1) % (Math.max(parseInt(`${predictionwinm}`), 6))}`));
      let iconnointernetn = grayx.length >= 6126575;
      do {
         grayx = `${3 - awayicont.length}`;
         if (iconnointernetn) {
            break;
         }
      } while ((!clockY) && iconnointernetn);
      mergerc = [settingi.length & awayicont.length];
   }
        showToast('请勿频繁操作');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

       let whiteanimationlive0 = String.fromCharCode(99,111,112,121,95,57,95,56,56,0);
       let saveG = String.fromCharCode(120,95,49,52,95,118,115,121,110,99,0);
       let statisticsinactivev = 2.0;
         saveG = `${parseInt(`${statisticsinactivev}`) & 2}`;
      let predictionbuttoni = String.fromCharCode(107,54,55,0) == saveG;
      do {
         saveG = "3";
         if (predictionbuttoni) {
            break;
         }
      } while (predictionbuttoni && (whiteanimationlive0 != saveG));
      for (let t = 0; t < 1; t++) {
         saveG = "1";
      }
         saveG = `${saveG.length}`;
      while (2 <= saveG.length) {
          let rewardvideo3 = String.fromCharCode(121,95,51,57,0);
          let completeO = 1.0;
          let matchS: Map<any, any> = new Map([[String.fromCharCode(119,104,105,116,101,108,105,115,116,101,100,95,111,95,52,54,0),653], [String.fromCharCode(100,101,115,99,114,105,112,116,111,114,115,95,122,95,57,53,0),855]]);
          let forwardv = 2.0;
          let overt = true;
         whiteanimationlive0 += `${2 & saveG.length}`;
         rewardvideo3 = "2";
         completeO *= (rewardvideo3 == String.fromCharCode(105,0) ? rewardvideo3.length : matchS.size);
         matchS = new Map([[`${matchS.size}`, (String.fromCharCode(98,0) == rewardvideo3 ? rewardvideo3.length : matchS.size)]]);
         forwardv -= (parseFloat(`${parseInt(`${completeO}`) >> (Math.min(2, Math.abs((overt ? 4 : 5))))}`));
         overt = rewardvideo3.length >= 1;
         break;
      }
       let iconclosewhites: Array<any> = [475, 217];
      for (let e = 0; e < 2; e++) {
          let tooltipsi = 0.0;
          let loginC = 3;
          let basketballJ = String.fromCharCode(116,101,109,112,102,105,108,101,95,121,95,51,48,0);
          let iconbackwhite6 = String.fromCharCode(103,95,53,52,95,99,111,112,121,114,105,103,104,116,0);
         statisticsinactivev -= parseFloat(`${parseInt(`${statisticsinactivev}`)}`);
         tooltipsi /= Math.max(parseFloat(`${3}`), 2);
         loginC ^= parseInt(`${tooltipsi}`) + 1;
         basketballJ = `${2 % (Math.max(loginC, 5))}`;
         iconbackwhite6 += `${loginC * 1}`;
      }
       let c_hash3: Map<any, any> = new Map([[String.fromCharCode(116,97,103,97,118,114,95,112,95,57,52,0),true ], [String.fromCharCode(107,95,54,52,95,97,114,103,118,0),false ], [String.fromCharCode(108,95,50,48,95,105,109,112,117,108,115,101,0),true ]]);
         c_hash3.set(`${statisticsinactivev}`, parseInt(`${statisticsinactivev}`));
      flagU = !flagU;
        

   let home9 = flagU ? !flagU : flagU;
   do {
      flagU = !predictiondefaulte;
      if (home9) {
         break;
      }
   } while (home9 && (!flagU && 3 == settingi.length));
        showToast('谷歌服务获取失败');
      } else {

   for (let s = 0; s < 2; s++) {
      assistv = `${mergerc.length / 3}`;
   }
        

   let profilepicp = wifiroutery >= 8892182;
   do {
       let libavfilter6 = 0.0;
       let carousel9 = 4;
      for (let p = 0; p < 3; p++) {
          let relatedX: Map<any, any> = new Map([[String.fromCharCode(108,95,49,48,95,118,120,119,111,114,107,115,0),false ], [String.fromCharCode(115,95,57,95,102,105,108,101,115,0),true ]]);
          let slidere = 3.0;
          let constantst = String.fromCharCode(117,95,54,48,95,97,99,102,102,0);
          let gmailG = String.fromCharCode(102,114,111,110,116,95,118,95,53,49,0);
          let logouser5: Array<any> = [String.fromCharCode(117,117,105,100,95,121,95,55,54,0), String.fromCharCode(100,101,103,114,101,101,115,95,101,95,52,51,0), String.fromCharCode(111,110,99,101,95,122,95,49,52,0)];
         carousel9 >>= Math.min(2, Math.abs(carousel9 - 1));
         relatedX.set(constantst, constantst.length);
         slidere *= parseFloat(`${gmailG.length | 3}`);
         gmailG = `${2 ^ relatedX.size}`;
         logouser5 = [1];
      }
      if ((1 + carousel9) <= 2 || (libavfilter6 + 2.22) <= 3.30) {
         libavfilter6 += 2;
      }
         carousel9 ^= carousel9 % (Math.max(parseInt(`${libavfilter6}`), 8));
      while (2 < (carousel9 + 2)) {
         carousel9 /= Math.max(1, 3 * carousel9);
         break;
      }
          let gmailu = String.fromCharCode(112,108,111,116,116,101,114,95,98,95,55,57,0);
          let sourceO: Map<any, any> = new Map([[String.fromCharCode(104,95,57,50,95,102,105,108,108,105,110,0),true ], [String.fromCharCode(113,95,54,50,95,99,111,109,112,97,116,105,98,108,101,0),false ], [String.fromCharCode(99,95,57,48,95,116,97,114,103,97,0),true ]]);
         carousel9 ^= 2 << (Math.min(1, gmailu.length));
         gmailu = `${sourceO.size >> (Math.min(4, Math.abs(sourceO.size)))}`;
      while (5.72 > (carousel9 / (Math.max(9, libavfilter6))) && (carousel9 / (Math.max(parseInt(`${libavfilter6}`), 1))) > 2) {
          let icontransferclubG = String.fromCharCode(102,95,57,48,95,109,105,110,117,116,101,0);
         carousel9 += parseInt(`${libavfilter6}`);
         icontransferclubG += `${icontransferclubG.length & icontransferclubG.length}`;
         break;
      }
      wifiroutery -= wifiroutery | parseInt(`${vietnamB}`);
      if (profilepicp) {
         break;
      }
   } while (profilepicp && (wifiroutery > vietnamB));
        showToast('登入失败，请稍后再试');
      }
      console.log(error.toString());

   if (!predictiondefaulte) {
      assistv += `${shielddoneu}`;
   }
      return;
    }

    if (userInfo === null) {

      flagU = settingi == String.fromCharCode(75,0);
      showToast('登入失败，请稍后再试');

   if ((reminderl - parseFloat(`${assistv.length}`)) < 5.82 || 4 < (2 | assistv.length)) {
      reminderl -= parseFloat(`${grayw >> (Math.min(Math.abs(parseInt(`${infox}`)), 3))}`);
   }
      return;
    }

    try {

   while (flagU) {
      flagU = 10.96 < greenU && wifiroutery < 35;
      break;
   }
      setSubmitting(true);

      greenU += parseFloat(`${1 % (Math.max(7, parseInt(`${infox}`)))}`);
      userInfo = await yysHomeloading.signinupUser({
        loginType: 'EMAIL',
        email: userInfo.user.email,
        referralCode: referralCode,
        isGoogleLogin: true,
        userId: userState.user?.userId ?? '',
      });

    } catch (err: any) {
      GoogleSignin.signOut();

      assistv += `${parseInt(`${greenU}`)}`;
      showToast(err.toString());

      greenU *= parseFloat(`${parseInt(`${infox}`) % 1}`);
      return;
    } finally {

   if (2.73 <= (vietnamB / 4.51)) {
       let showmorez = String.fromCharCode(106,95,48,95,105,108,108,101,103,97,108,0);
       let animationd = 5;
       let resendz = 4.0;
       let thumbnailc = 3.0;
       let humidityl = false;
      let imageactionliveq = 5111531.0 >= thumbnailc;
      do {
          let othermatchdetailbgT = String.fromCharCode(109,115,101,120,95,107,95,51,56,0);
          let window_p43 = 4.0;
          let iconsubssuccessJ = false;
         thumbnailc /= Math.max(4, othermatchdetailbgT.length);
         othermatchdetailbgT = `${(parseInt(`${window_p43}`) * (iconsubssuccessJ ? 3 : 5))}`;
         window_p43 /= Math.max(3, parseFloat(`${2 - parseInt(`${window_p43}`)}`));
         iconsubssuccessJ = iconsubssuccessJ && 20.67 < window_p43;
         if (imageactionliveq) {
            break;
         }
      } while ((showmorez.endsWith(`${thumbnailc}`)) && imageactionliveq);
       let philippines1 = 2;
       let libfollyg = 4;
         humidityl = philippines1 > animationd;
         philippines1 |= libfollyg >> (Math.min(Math.abs(3), 1));
      while ((animationd >> (Math.min(Math.abs(1), 5))) <= 1 && 1 <= (animationd * parseInt(`${resendz}`))) {
          let redgoalN = 4;
         resendz -= parseFloat(`${animationd}`);
         redgoalN *= redgoalN;
         break;
      }
         philippines1 -= libfollyg;
          let b_view0 = 4;
         animationd -= (String.fromCharCode(95,0) == showmorez ? parseInt(`${thumbnailc}`) : showmorez.length);
         b_view0 &= 3;
         resendz *= parseFloat(`${philippines1}`);
      let vietnamF = 6582466.0 <= thumbnailc;
      do {
         thumbnailc /= Math.max(1, ((humidityl ? 1 : 3)));
         if (vietnamF) {
            break;
         }
      } while ((thumbnailc <= resendz) && vietnamF);
         showmorez += `${libfollyg % (Math.max(3, animationd))}`;
         thumbnailc /= Math.max(philippines1, 4);
         resendz -= parseFloat(`${philippines1 - parseInt(`${thumbnailc}`)}`);
      while (thumbnailc < resendz) {
         resendz += parseFloat(`${2}`);
         break;
      }
      for (let l = 0; l < 1; l++) {
         libfollyg &= parseInt(`${resendz}`);
      }
      let graphicsj = 8935845 >= showmorez.length;
      do {
         showmorez += "3";
         if (graphicsj) {
            break;
         }
      } while (graphicsj && (!showmorez.startsWith(`${libfollyg}`)));
      flagU = (infox + shielddoneu) <= 29;
   }
      setSubmitting(false);

       let data7 = String.fromCharCode(112,95,56,55,95,114,111,98,111,108,101,99,116,114,105,99,0);
      for (let n = 0; n < 2; n++) {
         data7 = `${(data7 == String.fromCharCode(48,0) ? data7.length : data7.length)}`;
      }
      while (data7.includes(`${data7.length}`)) {
          let runtimeschedulerA: Map<any, any> = new Map([[String.fromCharCode(106,95,55,51,95,97,102,116,101,114,108,105,102,101,0),47], [String.fromCharCode(114,101,97,100,102,117,108,108,95,122,95,51,55,0),294]]);
          let materialJ = true;
         data7 += `${((materialJ ? 4 : 1) >> (Math.min(Math.abs(3), 2)))}`;
         runtimeschedulerA = new Map([[`${runtimeschedulerA.size}`, 3]]);
         materialJ = runtimeschedulerA.size > 46 && runtimeschedulerA.size > 46;
         break;
      }
      for (let y = 0; y < 3; y++) {
          let smallorangemanL = 0.0;
          let homeiconG = String.fromCharCode(116,114,97,110,115,112,111,115,101,100,95,97,95,54,57,0);
          let save5 = String.fromCharCode(108,105,110,107,105,110,103,95,105,95,56,0);
          let trashx = String.fromCharCode(115,95,55,48,95,105,110,105,116,105,97,108,108,121,0);
         data7 = `${parseInt(`${smallorangemanL}`)}`;
         smallorangemanL *= parseFloat(`${trashx.length}`);
         homeiconG += `${(String.fromCharCode(83,0) == trashx ? trashx.length : homeiconG.length)}`;
         save5 = `${homeiconG.length}`;
      }
      assistv = `${parseInt(`${reminderl}`)}`;
    }

    const resultData = userInfo.data;

      shielddoneu *= 1 / (Math.max(10, parseInt(`${reminderl}`)));

    const user = yysIconstar.fromJson(resultData);

   if ((parseInt(`${greenU}`) - settingi.length) >= 5) {
      settingi = `${parseInt(`${reminderl}`)}`;
   }

    await dispatch(addUserAuthState(user));

      iconrightorangeZ += iconrightorangeZ;

    if (userInfo.message.includes("注册成功")) {

       let hooksE = 4.0;
       let static_rV: Map<any, any> = new Map([[String.fromCharCode(120,99,111,114,114,95,54,95,50,48,0),194], [String.fromCharCode(105,110,116,101,114,110,101,116,95,100,95,53,56,0),154]]);
       let emojihearth = 1;
         static_rV.set(`${emojihearth}`, emojihearth);
      let privilegef = 7502093 <= static_rV.size;
      do {
         static_rV = new Map([[`${emojihearth}`, emojihearth]]);
         if (privilegef) {
            break;
         }
      } while (privilegef && (Array.from(static_rV.keys()).includes(`${emojihearth}`)));
         emojihearth &= emojihearth << (Math.min(Math.abs(parseInt(`${hooksE}`)), 5));
      for (let s = 0; s < 2; s++) {
          let livel = String.fromCharCode(110,95,49,53,95,108,105,107,101,108,121,0);
          let brightnessg = false;
          let whistlec = String.fromCharCode(115,95,52,52,95,105,110,116,120,120,0);
          let completei: Map<any, any> = new Map([[String.fromCharCode(118,95,52,57,95,98,110,99,98,98,0),434], [String.fromCharCode(120,95,53,53,95,115,111,117,114,99,101,99,108,105,112,0),204], [String.fromCharCode(105,95,52,56,95,108,111,110,103,110,111,105,115,101,0),701]]);
         hooksE += static_rV.size;
         livel = `${((brightnessg ? 2 : 4))}`;
         brightnessg = whistlec.length == 14;
         whistlec = `${((brightnessg ? 5 : 3))}`;
         completei.set(`${brightnessg}`, ((brightnessg ? 2 : 5) | completei.size));
      }
      let filledj = 5405357 >= emojihearth;
      do {
         emojihearth |= static_rV.size;
         if (filledj) {
            break;
         }
      } while (((static_rV.size % (Math.max(3, 3))) > 3 && 1 > (emojihearth % 3)) && filledj);
         hooksE /= Math.max(5, static_rV.size | 3);
         hooksE += parseInt(`${hooksE}`) | static_rV.size;
         hooksE += 1 + parseInt(`${hooksE}`);
      for (let z = 0; z < 3; z++) {
         static_rV.set(`${hooksE}`, 3);
      }
      mergerc.push(iconrightorangeZ >> (Math.min(Math.abs(parseInt(`${infox}`)), 2)));
      navigation.navigate('SetUsername');

    } else if (userInfo.message.includes("登录成功")) {

   let playlist7 = predictiondefaulte ? !predictiondefaulte : predictiondefaulte;
   do {
       let matchdetailbgK = String.fromCharCode(116,114,97,110,115,108,97,116,111,110,95,56,95,55,48,0);
       let baseT = 2;
          let singapore8 = String.fromCharCode(111,95,56,56,95,115,117,112,112,111,114,116,97,98,108,101,0);
         matchdetailbgK += "1";
         singapore8 = `${singapore8.length % (Math.max(1, 2))}`;
         matchdetailbgK += `${baseT}`;
      if (5 >= (baseT & 5)) {
         baseT *= (matchdetailbgK == String.fromCharCode(90,0) ? baseT : matchdetailbgK.length);
      }
      while (baseT >= matchdetailbgK.length) {
          let basketballiconS: Array<any> = [361, 467];
          let sort1 = String.fromCharCode(105,110,100,105,99,116,111,114,95,98,95,54,51,0);
          let imagenetworkerrS = String.fromCharCode(117,118,109,118,95,53,95,57,51,0);
          let gifgoalW = 4;
         matchdetailbgK = `${imagenetworkerrS.length / (Math.max(sort1.length, 7))}`;
         basketballiconS.push(basketballiconS.length);
         sort1 = `${2 + gifgoalW}`;
         imagenetworkerrS += `${basketballiconS.length & 2}`;
         gifgoalW &= basketballiconS.length + 2;
         break;
      }
      while (matchdetailbgK.startsWith(`${baseT}`)) {
         baseT >>= Math.min(5, Math.abs(baseT | 3));
         break;
      }
      let progressA = 6687340 <= baseT;
      do {
          let rncore9: Map<any, any> = new Map([[String.fromCharCode(105,95,52,53,0),696], [String.fromCharCode(111,95,57,54,95,99,97,116,0),128]]);
          let iconarrowrightorangeF: Map<any, any> = new Map([[String.fromCharCode(97,95,50,56,0),String.fromCharCode(119,95,57,54,95,98,105,116,109,97,112,0)], [String.fromCharCode(104,95,50,51,95,104,101,97,114,116,98,101,97,116,0),String.fromCharCode(115,101,97,108,101,100,95,52,95,57,54,0)], [String.fromCharCode(116,109,105,120,95,113,95,51,51,0),String.fromCharCode(97,95,57,55,95,98,101,99,97,117,115,101,0)]]);
          let statisticsinactiveR = 1.0;
          let iconwatchnow_ = String.fromCharCode(114,101,97,116,116,97,99,104,95,110,95,52,0);
         baseT *= baseT;
         rncore9 = new Map([[`${rncore9.size}`, 1]]);
         iconarrowrightorangeF = new Map([[`${iconarrowrightorangeF.size}`, 1 * iconarrowrightorangeF.size]]);
         statisticsinactiveR /= Math.max(1, parseFloat(`${iconarrowrightorangeF.size >> (Math.min(4, Math.abs(rncore9.size)))}`));
         iconwatchnow_ = `${iconarrowrightorangeF.size}`;
         if (progressA) {
            break;
         }
      } while (progressA && (3 == (4 - baseT) || 4 == (4 - matchdetailbgK.length)));
      predictiondefaulte = assistv.length > 52 || reminderl > 89.61;
      if (playlist7) {
         break;
      }
   } while ((flagU) && playlist7);

      if (user.isVip()) {

   let smallorangemanB = greenU <= 7281187.0;
   do {
       let topony = 4;
       let bannerb: Array<any> = [248, 576, 571];
       let assistS = String.fromCharCode(99,111,97,108,101,115,99,101,95,116,95,55,49,0);
          let liveshareC = false;
          let quest5 = String.fromCharCode(112,117,116,98,121,116,101,95,109,95,56,54,0);
         topony |= 3 * quest5.length;
         liveshareC = liveshareC || !liveshareC;
         quest5 += `${((liveshareC ? 4 : 1))}`;
       let grayF: Map<any, any> = new Map([[String.fromCharCode(101,95,56,54,95,97,100,109,105,110,101,100,0),642], [String.fromCharCode(115,95,49,53,95,103,97,116,105,110,103,0),20]]);
       let libtobT: Map<any, any> = new Map([[String.fromCharCode(109,118,115,101,116,95,113,95,54,50,0),518], [String.fromCharCode(116,95,52,57,95,101,120,116,101,114,110,0),216], [String.fromCharCode(99,111,114,114,101,99,116,95,117,95,50,48,0),159]]);
      if ((5 & bannerb.length) > 1 || (topony & bannerb.length) > 5) {
         topony %= Math.max(2, topony);
      }
         topony %= Math.max(1, assistS.length % 2);
         bannerb = [grayF.size | 3];
      while (grayF.get(`${topony}`) == null) {
          let iconcurrentmatchk = String.fromCharCode(102,105,110,105,115,104,101,100,95,111,95,50,52,0);
          let countryP = 5;
          let predictionactivec = String.fromCharCode(98,95,54,53,95,99,111,118,97,114,105,97,110,99,101,0);
          let iconnewsshareO = String.fromCharCode(113,95,52,95,97,115,115,111,99,108,105,115,116,0);
         grayF.set(`${assistS}`, (assistS == String.fromCharCode(110,0) ? assistS.length : grayF.size));
         iconcurrentmatchk = `${countryP}`;
         countryP <<= Math.min(Math.abs(1 >> (Math.min(1, Math.abs(countryP)))), 3);
         predictionactivec = `${countryP % 1}`;
         iconnewsshareO = `${countryP / (Math.max(iconcurrentmatchk.length, 2))}`;
         break;
      }
         grayF.set(`${topony}`, 1);
      while ((libtobT.size + 3) > 1) {
          let floating5 = String.fromCharCode(108,95,49,54,95,114,111,116,97,116,105,111,110,97,110,103,108,101,0);
          let baseline3 = String.fromCharCode(97,95,54,48,95,116,114,97,110,115,99,101,105,118,101,114,0);
          let predictionbannersharedu = String.fromCharCode(120,95,55,52,95,111,110,121,120,100,0);
          let baselineX = 4.0;
         assistS = `${baseline3.length}`;
         floating5 = `${floating5.length & predictionbannersharedu.length}`;
         baseline3 = `${parseInt(`${baselineX}`) / (Math.max(floating5.length, 3))}`;
         predictionbannersharedu = `${(String.fromCharCode(56,0) == floating5 ? parseInt(`${baselineX}`) : floating5.length)}`;
         break;
      }
         bannerb.push(2);
      greenU /= Math.max(2, parseFloat(`${1}`));
      if (smallorangemanB) {
         break;
      }
   } while (((2.96 - greenU) == 4.88) && smallorangemanB);
        await AsyncStorage.setItem("showAds", "false");
      } else {

   while (settingi.endsWith(`${assistv.length}`)) {
      assistv += `${parseInt(`${reminderl}`)}`;
      break;
   }
        await AsyncStorage.setItem("showAds", "true");
      }

      await dispatch(changeScreenAction('登录成功'));

      vietnamB += ((predictiondefaulte ? 4 : 4));

      

      internetq = "2";
      yys_giftbutton_footballtrophy.userCenterLoginSuccessTimesAnalytics();

   while (greenU < parseFloat(`${settingi.length}`)) {
      greenU *= parseFloat(`${3 & settingi.length}`);
      break;
   }

      if (user.isVip()) {

      wifiroutery &= parseInt(`${infox}`) + 2;
        yys_giftbutton_footballtrophy.userCenterVipLoginSuccessTimesAnalytics();
      }
      

   while (assistv.length <= settingi.length) {
      settingi += `${1 << (Math.min(1, Math.abs(wifiroutery)))}`;
      break;
   }

      if (onGooleLoginSuccess) onGooleLoginSuccess();
    }
  }

  const onPressTermNCondition = () => {
       let login6 = 2.0;
    let changeA = false;
    let project5 = String.fromCharCode(99,111,110,102,108,105,99,116,105,110,103,95,118,95,52,53,0);
    let libturbomodulejsijniP = 3.0;
    let holderp = true;
    let bootsplashk = false;
    let nodeC = 2.0;
    let libavutil0: Array<any> = [String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,115,95,118,95,57,50,0), String.fromCharCode(99,95,54,53,95,114,101,99,101,105,112,116,115,0), String.fromCharCode(119,95,51,49,95,104,97,115,104,101,114,0)];
    let stationsM = 5.0;
    let yellowredcardc: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,115,116,101,114,95,104,95,51,52,0),363], [String.fromCharCode(122,95,51,49,95,97,99,107,100,114,111,112,0),603], [String.fromCharCode(103,95,52,50,95,105,110,99,114,101,109,101,110,116,0),164]]);
    let yellowvideolivey = 2;
    let routerm = String.fromCharCode(115,95,55,53,95,115,117,98,102,105,108,101,0);
    let baselineT: Map<any, any> = new Map([[String.fromCharCode(120,95,53,49,95,100,110,115,110,97,109,101,0),165], [String.fromCharCode(113,117,101,115,116,105,111,110,115,95,99,95,53,57,0),307], [String.fromCharCode(112,95,49,51,95,100,101,102,105,110,101,100,0),892]]);
    let infoM = 1;
   let iconplayb = login6 >= 5459347.0;
   do {
       let thailandX = false;
       let moviesD = false;
       let footballX: Array<any> = [33, 233];
       let telegramm = String.fromCharCode(113,95,56,55,95,105,110,116,101,110,116,115,0);
         telegramm = `${(2 - (thailandX ? 5 : 1))}`;
         telegramm += `${footballX.length}`;
      while (2 > footballX.length) {
         moviesD = (telegramm.length * footballX.length) >= 55;
         break;
      }
       let latnF = 0;
      let predictiondefault4 = thailandX ? !thailandX : thailandX;
      do {
         thailandX = latnF >= 76 || !thailandX;
         if (predictiondefault4) {
            break;
         }
      } while (predictiondefault4 && (1 <= (latnF << (Math.min(Math.abs(3), 5))) || 3 <= latnF));
      let arrowrightwithtailW = footballX.length >= 8361195;
      do {
         footballX.push(latnF % (Math.max(5, footballX.length)));
         if (arrowrightwithtailW) {
            break;
         }
      } while ((4 > footballX.length) && arrowrightwithtailW);
          let whitetick8 = String.fromCharCode(99,108,105,101,110,116,95,49,95,57,57,0);
          let watchS: Map<any, any> = new Map([[String.fromCharCode(119,95,50,95,107,102,114,109,0),836], [String.fromCharCode(113,95,57,50,95,101,110,99,108,111,115,105,110,103,0),622], [String.fromCharCode(122,95,55,54,95,99,104,97,108,108,101,110,103,101,0),65]]);
         telegramm = `${((moviesD ? 3 : 3))}`;
         whitetick8 += `${watchS.size + whitetick8.length}`;
         watchS.set(whitetick8, 1 + whitetick8.length);
      while (footballX.length == 1 || 5 == (1 ^ footballX.length)) {
         thailandX = String.fromCharCode(105,0) == telegramm;
         break;
      }
          let list5 = String.fromCharCode(115,117,98,112,111,105,110,116,101,114,95,110,95,50,51,0);
          let fastY: Array<any> = [235, 620];
          let shirtU = 4.0;
         moviesD = ((fastY.length * (!moviesD ? fastY.length : 87)) > 87);
         list5 += "2";
         shirtU -= 3 * parseInt(`${shirtU}`);
          let iconviewerh: Map<any, any> = new Map([[String.fromCharCode(116,97,107,101,111,118,101,114,95,106,95,55,48,0),false ], [String.fromCharCode(122,95,56,52,95,101,108,98,103,0),true ], [String.fromCharCode(105,114,114,101,108,101,118,97,110,116,95,54,95,51,53,0),true ]]);
         thailandX = footballX.length <= 6;
         iconviewerh = new Map([[`${iconviewerh.size}`, iconviewerh.size]]);
          let themeT = 3.0;
         moviesD = latnF > footballX.length;
         themeT *= parseFloat(`${2}`);
      while (thailandX) {
          let iconeditb = String.fromCharCode(105,109,105,116,97,116,101,95,108,95,54,57,0);
          let t_positionC = String.fromCharCode(117,95,56,56,95,98,111,111,107,109,97,114,107,115,0);
          let loadingG = String.fromCharCode(100,105,97,109,111,110,100,95,122,95,52,55,0);
         latnF ^= footballX.length ^ 3;
         iconeditb += `${(String.fromCharCode(102,0) == iconeditb ? t_positionC.length : iconeditb.length)}`;
         t_positionC += `${t_positionC.length / 2}`;
         loadingG += `${t_positionC.length}`;
         break;
      }
      login6 *= (parseFloat(`${(holderp ? 2 : 2) ^ yellowvideolivey}`));
      if (iconplayb) {
         break;
      }
   } while ((changeA) && iconplayb);
   let finit_jT = 9157836 >= yellowvideolivey;
   do {
       let nativez = String.fromCharCode(112,95,50,49,95,114,101,112,111,0);
       let basketballdetailsbgA: Array<any> = [928, 213, 575];
       let const_13R = false;
          let iconmegaphoneg = String.fromCharCode(121,95,55,53,95,115,99,111,112,101,105,100,0);
          let resultt = 5;
         basketballdetailsbgA = [(iconmegaphoneg == String.fromCharCode(89,0) ? (const_13R ? 5 : 3) : iconmegaphoneg.length)];
         resultt -= resultt;
      if (const_13R) {
         const_13R = basketballdetailsbgA.length == 38;
      }
      if (3 < (4 >> (Math.min(1, basketballdetailsbgA.length))) || (nativez.length >> (Math.min(1, basketballdetailsbgA.length))) < 4) {
         nativez += `${nativez.length * 2}`;
      }
      let imageactionliveI = 9532861 >= basketballdetailsbgA.length;
      do {
         basketballdetailsbgA.push(3);
         if (imageactionliveI) {
            break;
         }
      } while (imageactionliveI && (nativez.endsWith(`${basketballdetailsbgA.length}`)));
      for (let k = 0; k < 2; k++) {
         basketballdetailsbgA.push(basketballdetailsbgA.length);
      }
         basketballdetailsbgA = [(basketballdetailsbgA.length * (const_13R ? 5 : 4))];
      for (let u = 0; u < 3; u++) {
         basketballdetailsbgA = [nativez.length];
      }
      while ((basketballdetailsbgA.length ^ 3) <= 3) {
          let profilepicM = String.fromCharCode(115,104,105,112,112,105,110,103,95,52,95,50,49,0);
          let suggestionW: Map<any, any> = new Map([[String.fromCharCode(104,97,114,100,99,111,100,101,100,95,105,95,56,51,0),672], [String.fromCharCode(109,112,101,103,118,105,100,101,111,100,115,112,95,106,95,55,49,0),310], [String.fromCharCode(115,101,99,115,95,56,95,55,56,0),997]]);
         const_13R = 9 < suggestionW.size;
         profilepicM += `${profilepicM.length >> (Math.min(Math.abs(1), 3))}`;
         suggestionW.set(profilepicM, profilepicM.length % 3);
         break;
      }
       let v_hashb = String.fromCharCode(97,95,54,57,95,109,97,112,0);
      yellowvideolivey *= basketballdetailsbgA.length;
      if (finit_jT) {
         break;
      }
   } while (finit_jT && (4.10 >= stationsM));
   if (bootsplashk || 4 > routerm.length) {
      bootsplashk = 44.81 <= login6;
   }
   for (let c = 0; c < 3; c++) {
       let userq = String.fromCharCode(109,95,55,55,95,97,98,111,117,116,0);
       let reducerJ = 4.0;
       let middlesoundk = String.fromCharCode(100,95,49,55,95,112,101,114,112,105,120,101,108,0);
         userq = `${1 + middlesoundk.length}`;
      while (4 > (middlesoundk.length & 2) && (parseInt(`${reducerJ}`) / (Math.max(7, middlesoundk.length))) > 2) {
         middlesoundk = `${middlesoundk.length * 3}`;
         break;
      }
      for (let e = 0; e < 1; e++) {
         userq += `${parseInt(`${reducerJ}`) & 3}`;
      }
       let eventH = String.fromCharCode(109,98,103,114,97,112,104,95,51,95,56,0);
       let aboutu = String.fromCharCode(100,95,50,48,95,102,105,108,101,119,114,105,116,101,115,116,114,101,97,109,0);
      while (5.34 > (aboutu.length + reducerJ) && 5.34 > (aboutu.length + reducerJ)) {
          let backgroundI: Map<any, any> = new Map([[String.fromCharCode(98,114,97,99,107,101,116,95,105,95,54,54,0),true ], [String.fromCharCode(97,99,101,115,115,111,114,121,95,48,95,54,48,0),true ], [String.fromCharCode(119,95,49,50,95,116,111,110,97,108,0),false ]]);
         aboutu += `${eventH.length % 3}`;
         backgroundI.set(`${backgroundI.size}`, backgroundI.size);
         break;
      }
         middlesoundk += `${userq.length}`;
         eventH += `${eventH.length / (Math.max(1, 3))}`;
          let suggestion6 = 1.0;
         middlesoundk = "2";
         suggestion6 *= parseFloat(`${parseInt(`${suggestion6}`) % 1}`);
         aboutu += `${parseInt(`${reducerJ}`) * 3}`;
      holderp = routerm.endsWith(`${bootsplashk}`);
   }
   if ((5.41 + stationsM) > 5.14 && (stationsM + 5.41) > 4.60) {
      libavutil0 = [((holderp ? 2 : 5) % (Math.max(parseInt(`${libturbomodulejsijniP}`), 10)))];
   }
   if (yellowredcardc.size < 3) {
      bootsplashk = String.fromCharCode(78,0) == routerm;
   }
   let arrows = 8662657.0 <= libturbomodulejsijniP;
   do {
      libturbomodulejsijniP *= (parseFloat(`${(changeA ? 4 : 3) | parseInt(`${login6}`)}`));
      if (arrows) {
         break;
      }
   } while ((stationsM < 4.40) && arrows);
   let sportV = 9764791.0 <= nodeC;
   do {
      nodeC *= parseInt(`${login6}`) + 2;
      if (sportV) {
         break;
      }
   } while (sportV && (4.15 <= (nodeC + login6) || 4.15 <= (nodeC + login6)));
      libavutil0 = [2 - libavutil0.length];
   let dnewinterstitialS = changeA ? !changeA : changeA;
   do {
       let iconsaveimageb: Array<any> = [406, 744];
       let profileH = String.fromCharCode(118,95,50,50,95,117,118,118,101,114,116,105,99,97,108,0);
       let icondefaultthumbnailg: Map<any, any> = new Map([[String.fromCharCode(105,95,56,49,95,116,110,112,117,116,0),414], [String.fromCharCode(98,95,55,52,95,97,115,105,110,107,0),761]]);
          let launcherh = 2;
         profileH = `${icondefaultthumbnailg.size + 2}`;
         launcherh /= Math.max(2, launcherh & 1);
      for (let j = 0; j < 2; j++) {
         iconsaveimageb = [iconsaveimageb.length ^ profileH.length];
      }
         icondefaultthumbnailg.set(profileH, iconsaveimageb.length);
      if (profileH.startsWith(`${icondefaultthumbnailg.size}`)) {
         icondefaultthumbnailg.set(profileH, 1 & iconsaveimageb.length);
      }
      if ((icondefaultthumbnailg.size & profileH.length) > 3 && (3 & profileH.length) > 1) {
          let libreactperfloggerjniu = String.fromCharCode(108,95,49,57,95,117,105,110,116,98,101,0);
          let libavutilT: Array<any> = [195, 121];
          let livenodatabgimgY = String.fromCharCode(113,115,99,97,108,101,95,111,95,57,55,0);
          let libreactnativejnih = String.fromCharCode(109,115,101,112,115,110,114,95,53,95,55,54,0);
         icondefaultthumbnailg.set(profileH, 2);
         libreactperfloggerjniu = `${libavutilT.length}`;
         libavutilT = [libreactnativejnih.length - 2];
         livenodatabgimgY = `${3 ^ libavutilT.length}`;
         libreactnativejnih = `${livenodatabgimgY.length}`;
      }
      for (let z = 0; z < 2; z++) {
         profileH = `${icondefaultthumbnailg.size & 1}`;
      }
      while (1 <= (iconsaveimageb.length / (Math.max(icondefaultthumbnailg.size, 7))) && (iconsaveimageb.length / (Math.max(1, 9))) <= 4) {
          let langkeyc = 3.0;
          let bottomy = 2.0;
          let libimagepipelineF = String.fromCharCode(108,115,119,115,117,116,105,108,115,95,106,95,54,54,0);
          let backwardA: Map<any, any> = new Map([[String.fromCharCode(110,95,51,49,0),980], [String.fromCharCode(108,95,53,57,95,109,97,110,97,103,101,0),550], [String.fromCharCode(118,112,111,105,110,116,95,104,95,52,0),921]]);
         icondefaultthumbnailg = new Map([[`${backwardA.size}`, icondefaultthumbnailg.size]]);
         langkeyc += parseFloat(`${1}`);
         bottomy /= Math.max(2 / (Math.max(parseInt(`${langkeyc}`), 2)), 1);
         libimagepipelineF += "3";
         backwardA.set(libimagepipelineF, libimagepipelineF.length);
         break;
      }
      while (profileH.length <= 1) {
         iconsaveimageb = [3 * profileH.length];
         break;
      }
      let whitevideoliveH = 8565455 <= iconsaveimageb.length;
      do {
         iconsaveimageb.push(profileH.length >> (Math.min(1, iconsaveimageb.length)));
         if (whitevideoliveH) {
            break;
         }
      } while (((iconsaveimageb.length % 4) >= 5) && whitevideoliveH);
      changeA = 73 <= libavutil0.length;
      if (dnewinterstitialS) {
         break;
      }
   } while (dnewinterstitialS && (changeA));
       let untickz = String.fromCharCode(118,95,50,49,95,115,117,98,118,105,100,101,111,0);
         untickz += `${(untickz == String.fromCharCode(121,0) ? untickz.length : untickz.length)}`;
      if (untickz == String.fromCharCode(86,0)) {
         untickz += `${untickz.length}`;
      }
         untickz = `${untickz.length}`;
      holderp = !holderp;
   for (let i = 0; i < 3; i++) {
      routerm = `${1 * yellowvideolivey}`;
   }
      routerm = `${((holderp ? 2 : 2) / (Math.max(parseInt(`${login6}`), 6)))}`;
   let libyoga9 = String.fromCharCode(119,51,105,100,119,102,108,102,48,0) == project5;
   do {
      project5 = `${(parseInt(`${login6}`) / (Math.max(5, (changeA ? 1 : 2))))}`;
      if (libyoga9) {
         break;
      }
   } while (libyoga9 && (project5.startsWith(`${bootsplashk}`)));
   if (!holderp) {
      changeA = String.fromCharCode(52,0) == project5;
   }
   while (Array.from(yellowredcardc.values()).includes(libturbomodulejsijniP)) {
      yellowredcardc.set(`${stationsM}`, yellowvideolivey % 2);
      break;
   }
   for (let n = 0; n < 1; n++) {
       let redcirclebgf = String.fromCharCode(99,111,110,116,114,111,108,108,101,114,115,95,112,95,57,50,0);
       let rules6: Map<any, any> = new Map([[String.fromCharCode(97,98,115,116,114,97,99,116,95,112,95,57,57,0),842], [String.fromCharCode(98,101,103,105,110,95,107,95,54,50,0),588]]);
       let relatedZ = true;
          let anythinkT: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,112,97,114,101,110,116,95,106,95,54,55,0),String.fromCharCode(98,101,110,99,104,115,95,51,95,50,57,0)], [String.fromCharCode(116,121,111,101,95,114,95,55,48,0),String.fromCharCode(103,95,55,48,95,116,101,115,116,105,110,103,0)], [String.fromCharCode(105,115,115,117,101,100,95,98,95,51,53,0),String.fromCharCode(117,97,100,100,95,103,95,56,51,0)]]);
          let iconnewsshareu = String.fromCharCode(100,95,53,48,95,116,104,114,101,97,100,105,110,103,0);
          let settingD = 4.0;
         redcirclebgf += "1";
         anythinkT = new Map([[`${anythinkT.size}`, parseInt(`${settingD}`) | anythinkT.size]]);
         iconnewsshareu += "3";
         settingD -= 1;
          let constantsd: Map<any, any> = new Map([[String.fromCharCode(104,95,49,54,95,101,120,112,111,114,116,0),true ], [String.fromCharCode(97,95,56,57,95,115,105,110,103,117,108,97,114,0),true ]]);
          let auto_4uy = String.fromCharCode(105,109,112,111,114,116,101,100,95,118,95,55,48,0);
         rules6 = new Map([[`${constantsd.size}`, (String.fromCharCode(66,0) == redcirclebgf ? redcirclebgf.length : constantsd.size)]]);
         auto_4uy = `${3 >> (Math.min(5, auto_4uy.length))}`;
         rules6.set(redcirclebgf, rules6.size);
       let modityr = 1.0;
          let entrya = String.fromCharCode(110,95,51,53,95,116,108,101,110,0);
          let videovar7 = 0.0;
         redcirclebgf += `${entrya.length}`;
         entrya += `${1 + parseInt(`${videovar7}`)}`;
         videovar7 -= parseFloat(`${parseInt(`${videovar7}`)}`);
      for (let j = 0; j < 2; j++) {
         rules6.set(`${relatedZ}`, parseInt(`${modityr}`) / 3);
      }
         rules6.set(`${modityr}`, 2);
         relatedZ = redcirclebgf.length >= 46 || modityr >= 19.49;
      while (3 > (redcirclebgf.length << (Math.min(Math.abs(2), 3))) || (rules6.size << (Math.min(redcirclebgf.length, 4))) > 2) {
         redcirclebgf += "3";
         break;
      }
      stationsM /= Math.max(1, ((relatedZ ? 1 : 2) * redcirclebgf.length));
   }
      libturbomodulejsijniP -= parseFloat(`${2}`);
   let awayplayeri = bootsplashk ? !bootsplashk : bootsplashk;
   do {
       let unread3 = String.fromCharCode(102,105,102,111,95,97,95,53,50,0);
       let privatechatbg0 = String.fromCharCode(122,95,56,53,95,105,109,112,111,114,116,115,0);
       let whitesmalltickO = 1;
       let airbnbstarselectedE = String.fromCharCode(115,95,52,52,95,112,108,97,110,97,114,116,111,117,121,118,121,0);
       let handlerX = true;
          let package_50e = 0;
         airbnbstarselectedE = "1";
         package_50e &= 2 + package_50e;
          let libreactnativejni1 = true;
         whitesmalltickO *= (airbnbstarselectedE == String.fromCharCode(57,0) ? (libreactnativejni1 ? 2 : 4) : airbnbstarselectedE.length);
       let iconmoreC = 0;
       let giftE = 5;
          let iconsaveimageG = String.fromCharCode(116,116,97,99,104,109,101,110,116,95,110,95,51,49,0);
          let untickd = false;
          let scorepopsoundZ = 3;
         unread3 += `${giftE}`;
         iconsaveimageG = `${((untickd ? 5 : 1) >> (Math.min(Math.abs(1), 4)))}`;
         untickd = iconsaveimageG.includes(`${untickd}`);
         scorepopsoundZ += (iconsaveimageG == String.fromCharCode(98,0) ? iconsaveimageG.length : (untickd ? 5 : 4));
      let exampleimage8 = privatechatbg0 == String.fromCharCode(103,48,54,120,0);
      do {
          let tickedI = String.fromCharCode(105,115,111,112,101,110,113,117,111,116,101,95,101,95,51,0);
          let libmapbufferjnih = 5;
          let applicationR = String.fromCharCode(119,95,52,48,95,97,118,112,114,105,118,0);
          let servicef = String.fromCharCode(120,95,55,55,95,115,101,113,110,111,0);
         privatechatbg0 += `${servicef.length & 3}`;
         tickedI += `${1 * libmapbufferjnih}`;
         libmapbufferjnih *= (applicationR == String.fromCharCode(80,0) ? applicationR.length : libmapbufferjnih);
         servicef = `${(String.fromCharCode(107,0) == applicationR ? libmapbufferjnih : applicationR.length)}`;
         if (exampleimage8) {
            break;
         }
      } while (exampleimage8 && (unread3 == privatechatbg0));
         giftE *= airbnbstarselectedE.length;
      if ((3 / (Math.max(10, iconmoreC))) >= 2) {
         iconmoreC &= giftE;
      }
         handlerX = !handlerX && 51 <= giftE;
       let inviteC = false;
          let libjsijniprofilerz = String.fromCharCode(115,117,98,109,105,116,116,101,100,95,112,95,50,48,0);
          let containert: Array<any> = [468, 446, 75];
          let bottoma = String.fromCharCode(110,105,103,104,116,95,53,95,49,57,0);
         iconmoreC ^= 1;
         libjsijniprofilerz += `${containert.length % (Math.max(bottoma.length, 5))}`;
         containert.push(2);
         bottoma = `${(String.fromCharCode(57,0) == libjsijniprofilerz ? containert.length : libjsijniprofilerz.length)}`;
         giftE ^= 1;
         inviteC = privatechatbg0.startsWith(`${whitesmalltickO}`);
      for (let r = 0; r < 2; r++) {
         whitesmalltickO <<= Math.min(2, Math.abs((String.fromCharCode(121,0) == privatechatbg0 ? (handlerX ? 2 : 3) : privatechatbg0.length)));
      }
      for (let n = 0; n < 2; n++) {
         giftE *= airbnbstarselectedE.length;
      }
         iconmoreC &= 2 << (Math.min(Math.abs(whitesmalltickO), 2));
      bootsplashk = !changeA;
      if (awayplayeri) {
         break;
      }
   } while ((holderp && !bootsplashk) && awayplayeri);
      holderp = 66.54 == stationsM;
       let iconpointscored = String.fromCharCode(105,110,116,101,103,114,97,116,101,100,95,119,95,51,54,0);
       let vietnamY = String.fromCharCode(112,114,111,98,108,101,109,95,104,95,57,56,0);
       let components8 = 0.0;
          let airbnbstarselectedd = true;
          let assistL: Map<any, any> = new Map([[String.fromCharCode(105,111,115,117,114,102,97,99,101,95,117,95,50,48,0),957], [String.fromCharCode(105,103,110,97,108,95,107,95,51,55,0),12]]);
          let statisticsB: Map<any, any> = new Map([[String.fromCharCode(109,95,50,95,113,109,98,108,0),false ], [String.fromCharCode(116,95,57,49,95,108,111,99,0),true ]]);
         vietnamY = `${vietnamY.length}`;
         airbnbstarselectedd = 60 > statisticsB.size;
         assistL = new Map([[`${statisticsB.size}`, ((airbnbstarselectedd ? 2 : 1) * statisticsB.size)]]);
      for (let y = 0; y < 3; y++) {
         vietnamY += `${vietnamY.length * 3}`;
      }
      if (vietnamY.length <= 4) {
         vietnamY = `${iconpointscored.length}`;
      }
       let condensedy = String.fromCharCode(116,95,54,53,95,116,99,102,105,108,101,0);
       let darkG = String.fromCharCode(119,95,52,49,95,99,111,109,112,97,114,0);
         vietnamY += `${iconpointscored.length}`;
      while (condensedy.length < 1) {
         condensedy += `${darkG.length}`;
         break;
      }
      for (let i = 0; i < 2; i++) {
         darkG += `${condensedy.length}`;
      }
          let libjsinspectork = String.fromCharCode(119,95,54,54,95,103,117,105,100,101,0);
          let unimplementedviewm = 4.0;
         components8 *= (parseFloat(`${String.fromCharCode(105,0) == condensedy ? condensedy.length : parseInt(`${unimplementedviewm}`)}`));
         libjsinspectork += `${libjsinspectork.length}`;
         unimplementedviewm -= parseFloat(`${libjsinspectork.length}`);
          let carousell = true;
         iconpointscored = `${(1 << (Math.min(3, Math.abs((carousell ? 5 : 4)))))}`;
      project5 = `${parseInt(`${nodeC}`)}`;
   for (let y = 0; y < 1; y++) {
      changeA = login6 >= 46.81;
   }
   if (changeA) {
      routerm += `${routerm.length}`;
   }
      holderp = bootsplashk && libavutil0.length >= 55;
   for (let h = 0; h < 2; h++) {
      routerm += `${parseInt(`${login6}`)}`;
   }

    setReadTermNCondition(!isReadTermNCondition);
  };

  const isEmailValid = (value: string) => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(value)) {
      return false;
    }

    return true;
  }

  const isPhoneValid = (value: string) => {
    if (!/^[0-9]{7,12}$/.test(value.replace(RegExp(' ', 'g'), ''))) {
      return false;
    }

    return true;
  }

  const onSubmit = async () => {
       let iconsaveimage_: Map<any, any> = new Map([[String.fromCharCode(99,95,54,55,95,99,114,97,115,104,108,121,116,105,99,115,0),622], [String.fromCharCode(98,97,111,98,97,98,95,114,95,49,0),475]]);
    let launchx = String.fromCharCode(118,95,56,54,95,100,101,97,99,116,0);
    let windl = true;
    let megaphoneF = 1.0;
    let arrowselectdownP = 1.0;
    let f_lockt: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,97,108,108,101,100,95,117,95,54,53,0),false ], [String.fromCharCode(109,111,118,101,110,99,99,101,110,99,95,57,95,49,55,0),true ], [String.fromCharCode(106,95,51,54,95,116,104,114,101,97,100,103,114,111,117,112,0),false ]]);
    let launch6: Array<any> = [898, 543, 752];
    let confirmation7 = 3.0;
    let showlessQ = String.fromCharCode(115,98,114,101,115,101,114,118,101,95,113,95,50,51,0);
    let largebrightnessA = String.fromCharCode(102,95,51,52,95,105,108,101,97,118,101,0);
    let adultr = 1;
    let indexW = String.fromCharCode(104,95,49,51,95,115,101,103,109,101,110,116,0);
       let whitesmalltickk = String.fromCharCode(101,110,101,114,103,121,95,114,95,57,48,0);
          let iconsettingL = String.fromCharCode(105,95,54,52,95,109,101,115,115,115,97,103,101,0);
          let iconlogoutq = 0;
          let tooltipsM: Array<any> = [240, 143];
         whitesmalltickk = `${1 | whitesmalltickk.length}`;
         iconsettingL = `${3 >> (Math.min(4, Math.abs(iconlogoutq)))}`;
         iconlogoutq <<= Math.min(Math.abs(3 >> (Math.min(2, iconsettingL.length))), 2);
         tooltipsM = [tooltipsM.length];
         whitesmalltickk += `${whitesmalltickk.length}`;
      while (whitesmalltickk == String.fromCharCode(103,0)) {
          let fieldE = String.fromCharCode(99,95,55,50,95,97,109,114,119,98,0);
          let dragp = 5;
         whitesmalltickk = `${(String.fromCharCode(88,0) == whitesmalltickk ? whitesmalltickk.length : dragp)}`;
         fieldE += `${fieldE.length}`;
         dragp += fieldE.length;
         break;
      }
      launch6 = [iconsaveimage_.size / 1];

    if (isSubmitting) return;

       let libcrashsdkn = 1.0;
       let faviconE = String.fromCharCode(108,97,110,103,117,97,103,101,115,95,116,95,55,51,0);
          let libimagepipelineK = true;
         libcrashsdkn += parseInt(`${libcrashsdkn}`) & 3;
         libimagepipelineK = (!libimagepipelineK ? libimagepipelineK : libimagepipelineK);
         faviconE = `${2 * parseInt(`${libcrashsdkn}`)}`;
         libcrashsdkn += faviconE.length * 1;
         libcrashsdkn *= 3 | parseInt(`${libcrashsdkn}`);
      let pingM = faviconE.length <= 9128648;
      do {
          let bodanA = String.fromCharCode(112,114,102,95,114,95,51,52,0);
          let twitterA = String.fromCharCode(100,105,109,101,110,115,105,116,111,110,115,95,112,95,55,53,0);
          let dangerb = 1.0;
          let largesoundM = 1;
         faviconE = `${(bodanA == String.fromCharCode(113,0) ? bodanA.length : parseInt(`${libcrashsdkn}`))}`;
         twitterA += `${parseInt(`${dangerb}`) << (Math.min(Math.abs(2), 3))}`;
         dangerb -= parseFloat(`${parseInt(`${dangerb}`)}`);
         largesoundM += twitterA.length >> (Math.min(Math.abs(2), 2));
         if (pingM) {
            break;
         }
      } while (pingM && ((libcrashsdkn - faviconE.length) >= 4.21 && 3.84 >= (libcrashsdkn - 4.21)));
      if (3.89 < (3.90 - libcrashsdkn)) {
          let tumbnaile = 5.0;
          let videovarF: Array<any> = [269, 63];
         libcrashsdkn -= 3 / (Math.max(parseInt(`${tumbnaile}`), 9));
         tumbnaile += parseFloat(`${2 ^ videovarF.length}`);
         videovarF.push(2);
      }
      showlessQ += `${launchx.length + 1}`;

    if (isReadTermNCondition == false) {

       let mored = 3.0;
       let fullscreenmaxN: Map<any, any> = new Map([[String.fromCharCode(114,111,117,116,105,110,115,95,57,95,54,0),true ], [String.fromCharCode(114,101,97,108,116,105,109,101,95,105,95,55,53,0),true ]]);
       let configk = String.fromCharCode(111,95,55,57,95,99,98,112,104,105,0);
         configk = `${configk.length}`;
      for (let l = 0; l < 1; l++) {
          let benefitY = String.fromCharCode(121,95,51,54,95,117,110,109,97,110,97,103,101,100,0);
          let greenc: Array<any> = [524, 193, 622];
          let footballfiledlayoutj = 3.0;
         fullscreenmaxN = new Map([[`${greenc.length}`, (String.fromCharCode(71,0) == benefitY ? greenc.length : benefitY.length)]]);
      }
      while (1 <= (fullscreenmaxN.size - parseInt(`${mored}`))) {
         fullscreenmaxN.set(configk, fullscreenmaxN.size - 2);
         break;
      }
          let progressa = 0;
          let lessW = 5;
         mored *= parseFloat(`${parseInt(`${mored}`)}`);
         progressa |= 3;
         lessW >>= Math.min(Math.abs(progressa), 3);
         configk += `${configk.length}`;
          let delegate_iT = 2;
          let componentregistryI = 3.0;
          let skipJ: Array<any> = [594, 179];
         fullscreenmaxN = new Map([[`${fullscreenmaxN.size}`, 1]]);
         delegate_iT %= Math.max(3 / (Math.max(1, parseInt(`${componentregistryI}`))), 2);
         componentregistryI *= parseFloat(`${3}`);
         skipJ = [1 + delegate_iT];
      for (let n = 0; n < 1; n++) {
         configk = "1";
      }
         mored *= parseFloat(`${fullscreenmaxN.size}`);
      for (let r = 0; r < 2; r++) {
         fullscreenmaxN = new Map([[`${mored}`, parseInt(`${mored}`)]]);
      }
      windl = (((windl ? 91 : showlessQ.length) / (Math.max(showlessQ.length, 5))) <= 91);
      return;

   while (5 > (launch6.length << (Math.min(Math.abs(1), 2)))) {
       let mbnativeadvanced3 = String.fromCharCode(118,105,101,119,95,110,95,52,48,0);
         mbnativeadvanced3 = `${(String.fromCharCode(72,0) == mbnativeadvanced3 ? mbnativeadvanced3.length : mbnativeadvanced3.length)}`;
      let langkeyn = mbnativeadvanced3.length >= 8687526;
      do {
         mbnativeadvanced3 = `${mbnativeadvanced3.length}`;
         if (langkeyn) {
            break;
         }
      } while ((mbnativeadvanced3.length <= 5) && langkeyn);
      while (!mbnativeadvanced3.includes(mbnativeadvanced3)) {
         mbnativeadvanced3 += `${mbnativeadvanced3.length * mbnativeadvanced3.length}`;
         break;
      }
      launch6.push(3);
      break;
   }
    }

    const formattedLoginValue = loginType === 'phone' ? loginValue.replace(/\s/g, '') : loginValue;

    

   for (let t = 0; t < 3; t++) {
      iconsaveimage_.set(launchx, (launchx == String.fromCharCode(116,0) ? showlessQ.length : launchx.length));
   }
    

   let paginationM = 8982427.0 >= megaphoneF;
   do {
      megaphoneF -= parseInt(`${confirmation7}`) % (Math.max(showlessQ.length, 1));
      if (paginationM) {
         break;
      }
   } while (paginationM && (1.69 > (megaphoneF * 4.1) || 5.27 > (4.1 * megaphoneF)));
    

      launch6.push(f_lockt.size);
    

      windl = launch6.length > 48;

    if (formattedLoginValue === "" || loginValueErrMsg !== null) {
      setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
      return;
    }

    try {

   while (3.24 == (arrowselectdownP + parseFloat(`${iconsaveimage_.size}`))) {
      arrowselectdownP -= parseFloat(`${2 * launchx.length}`);
      break;
   }
      setSubmitting(true);

   while (f_lockt.size < megaphoneF) {
       let light_: Map<any, any> = new Map([[String.fromCharCode(115,117,98,98,108,111,99,107,115,95,50,95,53,57,0),true ], [String.fromCharCode(114,101,97,116,116,97,99,104,95,117,95,56,0),true ]]);
       let headeri: Array<any> = [846, 564, 597];
       let sportsd: Map<any, any> = new Map([[String.fromCharCode(100,101,115,116,114,117,99,116,111,114,95,108,95,49,48,0),true ], [String.fromCharCode(116,95,55,56,95,97,99,97,108,99,0),true ], [String.fromCharCode(115,101,97,108,95,97,95,50,0),false ]]);
       let applicationt: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,118,105,101,119,95,57,95,55,51,0),419], [String.fromCharCode(114,101,103,105,115,116,101,114,105,110,103,95,98,95,49,48,48,0),342], [String.fromCharCode(114,95,49,51,95,112,116,114,109,97,112,0),600]]);
         applicationt = new Map([[`${applicationt.size}`, 2 << (Math.min(2, Math.abs(applicationt.size)))]]);
       let videovarD: Array<any> = [972, 875];
       let showmoreq: Array<any> = [String.fromCharCode(100,105,115,97,112,112,101,97,114,95,109,95,52,50,0), String.fromCharCode(111,118,101,114,115,99,114,111,108,108,105,110,103,95,103,95,57,56,0)];
      for (let o = 0; o < 3; o++) {
         headeri = [showmoreq.length ^ 2];
      }
         light_.set(`${headeri.length}`, light_.size);
      let searchl = applicationt.size <= 8178139;
      do {
          let footballfiledlayoutV = String.fromCharCode(112,111,105,110,116,101,114,95,57,95,56,53,0);
          let tickk = String.fromCharCode(101,95,49,56,95,97,103,103,114,101,103,97,116,101,0);
         applicationt = new Map([[`${sportsd.size}`, footballfiledlayoutV.length]]);
         footballfiledlayoutV += `${tickk.length}`;
         tickk += `${tickk.length}`;
         if (searchl) {
            break;
         }
      } while (searchl && (1 >= (4 << (Math.min(1, Math.abs(applicationt.size))))));
         applicationt.set(`${applicationt.size}`, 2 ^ applicationt.size);
      for (let n = 0; n < 3; n++) {
          let suggestiong: Map<any, any> = new Map([[String.fromCharCode(101,113,117,105,108,105,98,114,105,117,109,95,117,95,50,56,0),String.fromCharCode(116,98,108,104,100,114,95,102,95,49,56,0)], [String.fromCharCode(114,116,109,112,101,95,49,95,55,52,0),String.fromCharCode(114,111,111,116,115,95,112,95,56,49,0)], [String.fromCharCode(100,95,56,55,95,108,97,109,112,0),String.fromCharCode(115,101,97,114,99,104,98,97,114,95,121,95,49,55,0)]]);
          let corner3 = true;
          let whitevideoliveZ = 4;
         applicationt = new Map([[`${applicationt.size}`, whitevideoliveZ]]);
         suggestiong.set(`${corner3}`, 1);
         whitevideoliveZ /= Math.max(((corner3 ? 5 : 4) % (Math.max(suggestiong.size, 1))), 1);
      }
      for (let w = 0; w < 2; w++) {
         applicationt = new Map([[`${sportsd.size}`, sportsd.size]]);
      }
          let defaultlogoI = 2.0;
          let traminia = String.fromCharCode(116,95,51,53,0);
         light_.set(traminia, 2);
         defaultlogoI /= Math.max(1 ^ parseInt(`${defaultlogoI}`), 2);
         traminia += `${1 % (Math.max(parseInt(`${defaultlogoI}`), 1))}`;
       let updatesj = String.fromCharCode(116,95,52,56,95,111,115,116,114,105,110,103,115,116,114,101,97,109,0);
      while (1 == (sportsd.size >> (Math.min(Math.abs(2), 4)))) {
         headeri = [2];
         break;
      }
      let libapminsightae = updatesj == String.fromCharCode(114,48,52,56,55,117,0);
      do {
          let libmapbufferjniP = String.fromCharCode(109,97,116,114,105,120,101,110,99,95,102,95,57,55,0);
          let humidityO = 5;
          let smallorangemani = String.fromCharCode(114,101,97,99,116,95,106,95,51,49,0);
         updatesj += `${applicationt.size * libmapbufferjniP.length}`;
         libmapbufferjniP = "1";
         humidityO ^= humidityO % 3;
         smallorangemani = `${(smallorangemani == String.fromCharCode(72,0) ? smallorangemani.length : humidityO)}`;
         if (libapminsightae) {
            break;
         }
      } while ((updatesj.length > 1) && libapminsightae);
      f_lockt.set(`${windl}`, ((windl ? 2 : 2) >> (Math.min(headeri.length, 2))));
      break;
   }
      await yysHomeloading.signinupUser({
        loginType: loginType === 'email' ? 'EMAIL' : 'SMS',
        email: loginType === 'email' ? loginValue : undefined,
        
        phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + formattedLoginValue : undefined,
        countryId: loginType === 'phone' ? countryPhoneSelected?.country_id : undefined,
        referralCode: referralCode,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      setSubmitting(false);

   for (let s = 0; s < 1; s++) {
       let found_ = 2;
       let umengl: Array<any> = [991, 476];
       let libnmsx = 0;
       let renderX = String.fromCharCode(110,95,55,49,95,108,116,97,98,108,101,0);
         umengl = [2];
         umengl.push(libnmsx | 1);
       let mailC = 4.0;
       let sided = 2.0;
      while (5 >= (renderX.length ^ umengl.length)) {
         renderX += `${parseInt(`${sided}`)}`;
         break;
      }
      for (let m = 0; m < 3; m++) {
         renderX += "2";
      }
      while (3.63 > (mailC / 3.97)) {
         renderX += `${renderX.length}`;
         break;
      }
       let assistd = false;
       let suggestiona = true;
      let largesoundQ = String.fromCharCode(53,55,49,56,110,106,0) == renderX;
      do {
         renderX += `${umengl.length / 2}`;
         if (largesoundQ) {
            break;
         }
      } while (largesoundQ && ((found_ / (Math.max(4, 5))) > 4 || 4 > (found_ / 4)));
      let handlerP = suggestiona ? !suggestiona : suggestiona;
      do {
          let iconbellactiveq = String.fromCharCode(112,95,49,48,95,112,114,101,102,105,120,101,100,0);
          let confirmationu = false;
          let dependencies1 = String.fromCharCode(100,95,55,50,95,108,117,116,114,103,98,0);
          let filedk = 3.0;
         suggestiona = 1 >= found_;
         iconbellactiveq += `${((confirmationu ? 1 : 2))}`;
         confirmationu = filedk > 18.45 || confirmationu;
         dependencies1 += `${iconbellactiveq.length}`;
         filedk -= (parseFloat(`${(confirmationu ? 3 : 1)}`));
         if (handlerP) {
            break;
         }
      } while ((!suggestiona) && handlerP);
      while (!renderX.includes(`${suggestiona}`)) {
         suggestiona = !suggestiona;
         break;
      }
      if ((sided / (Math.max(5.6, 5))) <= 4.81 && (sided / (Math.max(5.6, 8))) <= 3.24) {
          let valuesg = true;
          let circle5 = String.fromCharCode(116,101,97,114,100,111,119,110,95,108,95,49,53,0);
          let gifgoalbgu: Map<any, any> = new Map([[String.fromCharCode(114,95,55,56,95,115,116,114,111,110,103,0),545], [String.fromCharCode(117,95,54,55,95,99,104,97,110,110,101,108,0),120]]);
          let anytimem = String.fromCharCode(114,117,98,98,101,114,95,106,95,50,0);
         renderX += `${parseInt(`${mailC}`) & parseInt(`${sided}`)}`;
         valuesg = !valuesg;
         circle5 += `${gifgoalbgu.size * 1}`;
         gifgoalbgu.set(`${valuesg}`, ((valuesg ? 2 : 5) % (Math.max(gifgoalbgu.size, 7))));
         anytimem += "1";
      }
      for (let j = 0; j < 2; j++) {
         suggestiona = renderX.startsWith(`${libnmsx}`);
      }
      megaphoneF += umengl.length;
   }
      setLoginValueErrMsg(err.message);

       let listw = String.fromCharCode(100,114,97,119,103,114,105,100,95,121,95,50,56,0);
         listw += `${listw.length}`;
      for (let u = 0; u < 2; u++) {
         listw = "2";
      }
      if (5 >= listw.length && listw != String.fromCharCode(111,0)) {
          let iconqql = 3.0;
          let whitebelld = false;
         listw += `${((whitebelld ? 4 : 1) + 2)}`;
         iconqql -= parseFloat(`${parseInt(`${iconqql}`) | parseInt(`${iconqql}`)}`);
         whitebelld = iconqql >= iconqql;
      }
      showlessQ += `${((windl ? 4 : 5) * parseInt(`${megaphoneF}`))}`;
      return;
    }

    setSubmitting(false);

   if ((2 % (Math.max(6, iconsaveimage_.size))) >= 5 || (2.15 - arrowselectdownP) >= 3.47) {
       let subs2 = true;
       let disconnectedx = String.fromCharCode(100,99,116,99,111,101,102,95,101,95,50,48,0);
       let helperx: Map<any, any> = new Map([[String.fromCharCode(120,95,54,50,95,97,100,100,0),true ], [String.fromCharCode(102,102,118,108,95,102,95,57,52,0),true ], [String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,115,95,55,95,53,49,0),true ]]);
       let baiduadsX = 2.0;
       let fullscreenmaxv = 5;
      while (disconnectedx.length == 1) {
          let canvasZ = String.fromCharCode(98,97,99,107,103,114,117,110,100,95,110,95,54,57,0);
          let iconbellU: Array<any> = [320, 355];
          let libreactnativeblobO = String.fromCharCode(101,109,105,116,116,101,114,95,112,95,55,56,0);
         disconnectedx += `${iconbellU.length}`;
         canvasZ += `${canvasZ.length}`;
         iconbellU = [canvasZ.length << (Math.min(5, libreactnativeblobO.length))];
         libreactnativeblobO = `${1 - libreactnativeblobO.length}`;
         break;
      }
         subs2 = 39 < (baiduadsX / (Math.max(9, fullscreenmaxv)));
      for (let i = 0; i < 1; i++) {
         helperx = new Map([[`${helperx.size}`, disconnectedx.length - 2]]);
      }
         subs2 = disconnectedx.length == fullscreenmaxv;
      while (helperx.size == 2) {
         subs2 = subs2 && baiduadsX >= 79.4;
         break;
      }
      while (5 == (fullscreenmaxv / (Math.max(parseInt(`${baiduadsX}`), 2))) && 5 == (fullscreenmaxv / (Math.max(parseInt(`${baiduadsX}`), 3)))) {
         baiduadsX -= helperx.size << (Math.min(Math.abs(2), 2));
         break;
      }
         disconnectedx = `${disconnectedx.length}`;
      if (!subs2 || 3 >= (4 << (Math.min(5, Math.abs(fullscreenmaxv))))) {
         subs2 = baiduadsX == 3.58 && 11 == fullscreenmaxv;
      }
      if (!subs2) {
         subs2 = null == helperx.get(`${subs2}`);
      }
         helperx.set(disconnectedx, helperx.size - 1);
      if (3 <= (helperx.size | fullscreenmaxv) && 3 <= (helperx.size | fullscreenmaxv)) {
         fullscreenmaxv /= Math.max(5, parseInt(`${baiduadsX}`));
      }
         baiduadsX -= helperx.size;
          let defaultlogo0 = true;
         baiduadsX -= ((defaultlogo0 ? 4 : 3) % (Math.max(parseInt(`${baiduadsX}`), 5)));
       let langC = String.fromCharCode(116,111,112,115,95,122,95,49,48,48,0);
      for (let r = 0; r < 1; r++) {
         fullscreenmaxv &= parseInt(`${baiduadsX}`);
      }
      arrowselectdownP += parseFloat(`${helperx.size ^ launchx.length}`);
   }

    dispatch(hideBottomSheetAction());

       let libapminsightbn = 5.0;
         libapminsightbn -= parseFloat(`${parseInt(`${libapminsightbn}`) - 1}`);
         libapminsightbn /= Math.max(parseFloat(`${parseInt(`${libapminsightbn}`) * 3}`), 2);
       let template_pj = 2.0;
       let iconclosex = 5.0;
      iconsaveimage_.set(`${arrowselectdownP}`, parseInt(`${arrowselectdownP}`) / 3);
    navigation.navigate("OTP", {
      email: loginType === 'email' ? loginValue : undefined,
      phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + loginValue : undefined,
      countryId: loginType === 'phone' ? countryPhoneSelected?.country_id : undefined,
      referralCode: referralCode,
    });
  }

  return (
    <View style={{ height: "100%" }}>
      <SpinnerOverlay visible={isSubmitting} />

      {!isShowCountryList &&
        <View onLayout={(e) => {
          if (containerHeight === 0) setContainerHeight(e.nativeEvent.layout.height);
        }}>
          <LoginCard
            loginType={loginType}
            loginValue={loginValue}
            referralCode={referralCode}
            loginValueErrMsg={loginValueErrMsg}
            referralCodeErrMsg={referralCodeErrMsg}
            isReadTermNCondition={isReadTermNCondition}
            countryPhoneSelected={countryPhoneSelected}
            onLoginValueChange={onLoginValueChange}
            onReferralCodeChange={onReferralCodeChange}
            onPressTermNCondition={onPressTermNCondition}
            onChangeloginType={onChangeloginType}
            onPressGoogleLogin={onPressGoogleLogin}
            onPressCountryDropdown={onPressCountryDropdown}
            onSubmit={onSubmit}
          />
        </View>
      }

      {isShowCountryList && countryPhoneOptions && countryPhoneOptions.length > 0 &&
        <CountryPhoneList
          data={countryPhoneOptions}
          dataSelected={countryPhoneSelected}
          onSelectCountryPhone={onSelectCountryPhone}
        />
      }
    </View>
  );
});

type yysOrangeclockMatchinactive = {
  loginType: 'email' | 'phone',
  loginValue: string,
  referralCode: string,
  loginValueErrMsg: string | null,
  referralCodeErrMsg: string | null,
  isReadTermNCondition: boolean,
  countryPhoneSelected?: yysPlayPenaltygoal,
  onLoginValueChange: (value: string) => void,
  onReferralCodeChange: (value: string) => void,
  onPressTermNCondition: () => void,
  onChangeloginType: (type: 'email' | 'phone') => void,
  onPressGoogleLogin: () => void,
  onPressCountryDropdown: () => void,
  onSubmit: () => void,
}

const LoginCard = ({
  loginType,
  loginValue,
  referralCode,
  loginValueErrMsg,
  referralCodeErrMsg,
  isReadTermNCondition,
  countryPhoneSelected,
  onLoginValueChange,
  onReferralCodeChange,
  onPressTermNCondition,
  onChangeloginType,
  onPressGoogleLogin,
  onPressCountryDropdown,
  onSubmit,
}: yysOrangeclockMatchinactive) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>「登录/注册」解锁更多精彩内容！</Text>
      {/* <Text style={styles.subtitle}>登录后可管理您的账号，多端同步观看历史和收藏夹</Text> */}
      { }
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tabItemContainer}
          onPress={() => onChangeloginType('email')}
        >
          <Text style={[loginType === 'email' ? styles.tabItemFocusText : styles.tabItemUnfocusText]}>电邮地址</Text>
          {loginType === 'email' &&
            <View
              style={{
                width: 30,
                height: 4,
                borderRadius: 20,
                backgroundColor: colors.primary,
              }}
            />
          }
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItemContainer}
          onPress={() => onChangeloginType('phone')}
        >
          <Text style={[loginType === 'phone' ? styles.tabItemFocusText : styles.tabItemUnfocusText]}>手机号码</Text>
          {loginType === 'phone' &&
            <View
              style={{
                width: 30,
                height: 4,
                borderRadius: 20,
                backgroundColor: colors.primary,
              }}
            />
          }
        </TouchableOpacity>
      </View>
      <View style={styles.textinputContainer}>
        { }
        {loginType === 'email' && <>
          <TextInput
            autoCapitalize="none"
            style={[
              styles.textInpoutCommonStyle,
              loginValue === ""
                ? styles.defaultTextInputStyle
                : loginValueErrMsg === null 
                  ? styles.correctTextInputStyle
                  : styles.invalidTextInputStyle,
            ]}
            value={loginValue}
            onChangeText={(value) => {
              onLoginValueChange(value);
            }}
            placeholder="输入邮箱账号"
            placeholderTextColor="#B6B6B6"
          />
        </>}

        {loginType === 'phone' &&
          <View style={styles.countryPhoneInputContainer}>
            <TouchableOpacity
              onPress={onPressCountryDropdown}
              style={styles.phoneCodeDropdown}
            >
              {countryPhoneSelected &&
                <FastImage
                  source={{
                    uri: countryPhoneSelected?.country_flag
                  }}
                  style={styles.countryFlag}
                />
              }

              <DropdownSvg />
            </TouchableOpacity>

            <Text style={{
              position: 'absolute',
              color: 'white',
              left: 94,
              zIndex: 100,
            }}>
              +{countryPhoneSelected?.country_phonecode}
            </Text>

            <TextInput
              keyboardType="numeric"
              autoCapitalize="none"
              style={[
                styles.textInpoutCommonStyle,
                loginValue === ""
                  ? styles.defaultTextInputStyle
                  : loginValueErrMsg === null 
                    ? styles.correctTextInputStyle
                    : styles.invalidTextInputStyle,
                {
                  paddingLeft: 60
                }
              ]}
              value={loginValue}
              onChangeText={(value) => {
                onLoginValueChange(value);
              }}
              placeholder="请输入手机号"
              placeholderTextColor="#B6B6B6"
            />
          </View>
        }

        {((loginValue !== "" && loginValueErrMsg === null) || (loginValueErrMsg && loginValueErrMsg?.includes("稍后"))) && (
          <Image
            style={styles.iconStyle}
            source={require("../../../static/images/profile/updatesDisconnected.png")}
          />
        )}

        {loginValue !== '' &&
          loginValueErrMsg !== null &&
          !loginValueErrMsg.includes("稍后") && (
            <TouchableWithoutFeedback
              onPress={() => {
                onLoginValueChange('');
              }}
            >
              <Image
                style={styles.iconStyle}
                source={require("../../../static/images/profile/statisticsinactiveYellowscoreball.png")}
              />
            </TouchableWithoutFeedback>
          )
        }

        {loginValueErrMsg !== null && loginValueErrMsg !== '' && (
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 10,
              paddingRight: 20,
            }}
          >
            <Image
              style={{
                height: 20,
                width: 20,
                marginRight: 5,
              }}
              source={require("../../../static/images/invite/libreactIconeye.png")}
            />

            <Text style={styles.danger}>{loginValueErrMsg}</Text>
          </View>
        )}
      </View>

      { }
      <View style={styles.textinputContainer}>
        <TextInput
          autoCapitalize="none"
          style={[
            styles.textInpoutCommonStyle,
            referralCode === ''
              ? styles.defaultTextInputStyle
              : referralCodeErrMsg === null
                ? styles.correctTextInputStyle
                : styles.invalidTextInputStyle,
          ]}
          value={referralCode}
          onChangeText={(value) => {
            onReferralCodeChange(value);
          }}
          placeholder='邀请码 (选填)'
          placeholderTextColor='#B6B6B6'
        />

        {referralCode !== '' &&
          referralCodeErrMsg !== null && (
            <TouchableWithoutFeedback
              onPress={() => {
                onReferralCodeChange('');
              }}
            >
              <Image
                style={styles.iconStyle}
                source={require("../../../static/images/profile/statisticsinactiveYellowscoreball.png")}
              />
            </TouchableWithoutFeedback>
          )}

        {referralCodeErrMsg !== null && referralCodeErrMsg !== '' && (
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 10,
              paddingRight: 20,
            }}
          >
            <Image
              style={{
                height: 20,
                width: 20,
                marginRight: 5,
              }}
              source={require("../../../static/images/invite/libreactIconeye.png")}
            />

            <Text style={styles.danger}>{referralCodeErrMsg} </Text>
          </View>
        )}
      </View>

      { }
      <Button
        type="primary"
        disabled={loginValue === '' || loginValueErrMsg !== null || !isReadTermNCondition}
        style={[
          styles.continueButtonStyle,
          loginValue === "" || !isReadTermNCondition ? styles.btnInactive : styles.btnActive,
        ]}
        activeStyle={[
          styles.continueButtonStyle,
          loginValue === "" || !isReadTermNCondition ? styles.btnInactive : styles.btnActive,
        ]}
        onPress={onSubmit}
      >
        <Text
          style={{
            
            fontWeight: "600",
            fontSize: 14,
            letterSpacing: 0.2,
            color: loginValue === "" || !isReadTermNCondition ? "white" : "#000",
          }}
        >
          登入
        </Text>
      </Button>

      <Text style={{ fontSize: 12, color: "#9c9c9c", marginVertical: 10, }}>
        如果未注册，登入后将自动为您创建账号。
      </Text>

      <ReadAgreementPrivacyPolicy
        isReadChecked={isReadTermNCondition}
        onPress={onPressTermNCondition}
        onPressUserAgreement={() => {
          dispatch(navigateToProfileScreen());
          navigation.navigate("用户协议");
          dispatch(hideLoginAction());
        }}
        onPressPrivacyPolicy={() => {
          dispatch(navigateToProfileScreen());
          navigation.navigate("隐私政策");
          dispatch(hideLoginAction());

        }}
      />

      { }
      <TouchableOpacity
        onPress={onPressGoogleLogin}
        style={{
          backgroundColor: '#1D2023',
          padding: 8,
          paddingHorizontal: 20,
          borderRadius: 8,
          marginRight: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <GmailSvg style={{ marginRight: 10, }} />
        <Text style={{
          flex: 1,
          textAlign: 'center',
          color: 'white',
          fontSize: 16,
        }}>
          使用Google账号登录
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textinputContainer: {
    marginTop: 15,
    marginBottom: 10,
    justifyContent: 'center',
  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  tabItemContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  tabItemFocusText: {
    color: 'white',
    paddingBottom: 10,
  },
  tabItemUnfocusText: {
    color: '#9c9c9c',
    paddingBottom: 10,
  },
  countryPhoneInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
  },
  phoneCodeDropdown: {
    borderRadius: 8,
    backgroundColor: "#1d2023",
    marginRight: 16,
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
  },
  countryFlag: {
    width: 24,
    aspectRatio: 1,
    borderRadius: 100,
    marginRight: 10,
  },
  textInpoutCommonStyle: {
    paddingLeft: 10,
    height: 42,
    borderRadius: 8,
    fontSize: 14,
    flex: 1,
  },
  defaultTextInputStyle: { backgroundColor: "#1d2023", color: 'white' },
  correctTextInputStyle: { backgroundColor: "#1d2023", color: "#fff" },
  invalidTextInputStyle: {
    backgroundColor: "#311818",
    borderWidth: 1,
    borderColor: "#FF1010",
    color: "#FF1010",
  },
  iconStyle: {
    height: 18,
    width: 18,
    position: "absolute",
    right: 10,
    top: 12,
  },
  continueButtonStyle: {
    width: "100%",
    height: 42,
    marginTop: 20,
    marginLeft: "-0.5%",
    borderWidth: 0,
  },
  card: {
    height: "85%",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "transparent",
    paddingBottom: 30,
  },
  title: {
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    paddingBottom: 20,
  },
  subtitle: {
    fontWeight: "400",
    color: "#9c9c9c",
    textAlign: "center",
    paddingBottom: 25,
  },
  btnActive: {
    backgroundColor: "#FAC33D",
    color: "#000",
  },
  btnInactive: {
    
    backgroundColor: "#1d2023",
  },
  danger: {
    fontWeight: "400",
    fontSize: 14,
    textAlign: "left",
    color: "#FF3434",
  },
});
