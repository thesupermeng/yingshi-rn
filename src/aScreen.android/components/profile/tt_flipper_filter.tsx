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
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/tt_spec_download";
import {
  changeScreenAction,
  hideBottomSheetAction,
  navigateToProfileScreen,
} from "@redux/actions/tt_copy_heji";
import SpinnerOverlay from "../modal/SpinnerOverlay";
import PhoneIcon from '@static/images/description_dSplashPrediction.svg';
import MailIcon from '@static/images/middleLineUnlock.svg';
import GmailIcon from '@static/images/castMapping.svg';
import DropdownIcon from '@static/images/dangerLauncherRecommendation.svg';
import { CountryPhoneList } from "./countryPhoneList";
import FastImage from '../common/customFastImage';
import { ttGradleTrash } from "@type/tt_line_borderless";
import { ReadAgreementPrivacyPolicy } from "./readAgreementPrivacyPolicy";

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useQuery } from "@tanstack/react-query";
import { API_DOMAIN } from "@utility/tt_trophy_cross";
import { ttGray } from "@utility/tt_selection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import tt_humidity_guide from "../../../../Umeng/tt_humidity_guide";
import { useDispatch } from "react-redux";
import { addUserAuthState } from "@redux/actions/tt_topon";
import { ttTramini } from "@api";
import { ttOrange } from "@redux/tt_updates_bottom";
import { ttFast } from "@models/tt_stations_right";
import { ttGoal } from "@redux/reducers/tt_selected";
import ttDownTick from "../../../../AppsFlyer/tt_fastforward";


export type ttCurrent = {
  resetValue: () => void,
}

type ttSmall = {
  onGooleLoginSuccess?: () => void,
}

export const SigninupForm = forwardRef<ttCurrent, ttSmall>(({
  onGooleLoginSuccess,
}: ttSmall, ref) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [loginType, setloginType] = useState<'email' | 'phone'>('email');

  const [loginValue, setLoginValue] = useState(''); 
  const [referralCode, setReferralCode] = useState('');
  const [loginValueErrMsg, setLoginValueErrMsg] = useState<string | null>(null); 
  const [referralCodeErrMsg, setReferralCodeErrMsg] = useState<string | null>(null);
  const [isReadTermNCondition, setReadTermNCondition] = useState(false);

  
  const [isShowCountryList, setShowCountryList] = useState(false);
  const [countryPhoneSelected, setCountryPhoneSelected] = useState<ttGradleTrash>();

  
  const [isSubmitting, setSubmitting] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  const userState = useSelector<ttGoal>('userReducer');

  const { data: countryPhoneOptions } = useQuery({
    queryKey: ["CountryPhoneOptions"],
    queryFn: () => ttTramini.getCountries(),
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
       let bootsplashf: Map<any, any> = new Map([[String.fromCharCode(104,117,102,102,121,117,118,95,112,95,51,57,0),String.fromCharCode(110,95,52,49,95,121,105,101,108,100,0)], [String.fromCharCode(116,95,56,52,95,100,99,113,117,97,110,116,0),String.fromCharCode(98,95,49,51,95,99,117,116,111,117,116,0)]]);
    let const_n1 = 5;
    let rulesM = 2;
    let actionr = 5.0;
    let n_titleP = true;
    let d_imageA = 5.0;
    let reminderE = String.fromCharCode(112,97,103,101,115,95,112,95,52,51,0);
    let malaysiaQ: Array<any> = [993, 463];
   for (let j = 0; j < 3; j++) {
      rulesM &= ((n_titleP ? 5 : 3) / (Math.max(1, rulesM)));
   }
       let utilsd = 2.0;
      while ((utilsd * utilsd) <= 5.98 || (utilsd * 5.98) <= 4.6) {
          let catagoryf = String.fromCharCode(119,95,49,48,95,101,98,117,108,97,115,0);
          let darkO = String.fromCharCode(104,95,52,51,95,119,101,105,0);
         utilsd -= darkO.length << (Math.min(1, catagoryf.length));
         break;
      }
       let storeI = 2;
       let vignetteK = 0;
      let showu = 5523843 >= vignetteK;
      do {
         vignetteK ^= 3 ^ parseInt(`${utilsd}`);
         if (showu) {
            break;
         }
      } while (showu && ((4.55 * utilsd) <= 2.74 && (vignetteK % (Math.max(1, 5))) <= 5));
      actionr -= parseFloat(`${2}`);
   while (2.75 > (rulesM / (Math.max(1, d_imageA)))) {
      rulesM /= Math.max(parseInt(`${d_imageA}`), 1);
      break;
   }
      n_titleP = const_n1 < bootsplashf.size;

    setloginType('email');

      const_n1 %= Math.max(2 & parseInt(`${d_imageA}`), 2);
   for (let q = 0; q < 3; q++) {
      d_imageA /= Math.max(4, (parseFloat(`${(n_titleP ? 3 : 3) >> (Math.min(Math.abs(parseInt(`${d_imageA}`)), 5))}`)));
   }
       let albuma = String.fromCharCode(100,105,102,102,101,114,101,110,99,101,115,95,54,95,51,55,0);
         albuma = `${albuma.length - 2}`;
         albuma += `${albuma.length}`;
      for (let k = 0; k < 1; k++) {
         albuma = `${albuma.length + 1}`;
      }
      n_titleP = !reminderE.endsWith(`${n_titleP}`);
      d_imageA /= Math.max(parseFloat(`${const_n1 << (Math.min(4, Math.abs(2)))}`), 2);
    setLoginValue('');

   let suggestion2 = rulesM <= 9593960;
   do {
       let signinup6: Array<any> = [375, 877];
       let sortU = false;
       let malaysiaf = 2.0;
         sortU = signinup6.length == 89;
       let downloadedI = String.fromCharCode(99,97,114,95,106,95,54,54,0);
       let vertical6 = String.fromCharCode(101,95,53,54,95,115,119,97,112,121,118,98,117,102,102,101,114,0);
         signinup6.push(signinup6.length % (Math.max(vertical6.length, 8)));
          let pingE = String.fromCharCode(106,112,101,103,116,114,97,110,95,108,95,52,56,0);
          let whistleH = 3;
          let profilet = 4.0;
         signinup6.push((String.fromCharCode(80,0) == vertical6 ? vertical6.length : parseInt(`${malaysiaf}`)));
         pingE += "1";
         whistleH /= Math.max(pingE.length, 3);
         profilet -= parseFloat(`${whistleH}`);
      for (let u = 0; u < 2; u++) {
         malaysiaf *= 3 - parseInt(`${malaysiaf}`);
      }
      if ((parseInt(`${malaysiaf}`) / (Math.max(1, signinup6.length))) > 2) {
         malaysiaf *= vertical6.length % (Math.max(6, downloadedI.length));
      }
         sortU = (7 < ((sortU ? downloadedI.length : 7) | downloadedI.length));
         malaysiaf *= parseInt(`${malaysiaf}`);
         signinup6.push(vertical6.length);
      rulesM %= Math.max(reminderE.length >> (Math.min(1, Math.abs(const_n1))), 2);
      if (suggestion2) {
         break;
      }
   } while (suggestion2 && ((actionr - 2.31) <= 4.96 || 3.24 <= (2.31 - actionr)));
   for (let h = 0; h < 3; h++) {
      const_n1 |= rulesM ^ 3;
   }
      n_titleP = 22.93 == actionr;
   while (2.61 == (d_imageA + 1)) {
      actionr -= parseFloat(`${1 >> (Math.min(1, Math.abs(rulesM)))}`);
      break;
   }
    setReferralCode('');

   while ((3 >> (Math.min(2, Math.abs(const_n1)))) >= 4) {
      const_n1 |= 3 >> (Math.min(Math.abs(parseInt(`${actionr}`)), 4));
      break;
   }
   for (let p = 0; p < 1; p++) {
      actionr -= parseFloat(`${1}`);
   }
       let shirtO = 0;
       let recommendationm = 2;
      while (shirtO >= recommendationm) {
         shirtO >>= Math.min(Math.abs(recommendationm), 2);
         break;
      }
         recommendationm <<= Math.min(2, Math.abs(shirtO));
         shirtO -= 1 & shirtO;
         recommendationm -= shirtO;
         recommendationm /= Math.max(shirtO | recommendationm, 2);
      while (3 > (shirtO ^ 4) && (4 ^ recommendationm) > 3) {
          let shirt7 = String.fromCharCode(100,95,55,57,95,114,101,100,114,97,119,0);
          let info_ = String.fromCharCode(108,95,56,57,95,100,101,114,105,118,0);
          let gradle4 = String.fromCharCode(105,110,116,101,114,114,117,112,116,95,97,95,53,51,0);
         shirtO /= Math.max(2, shirt7.length / (Math.max(3, 9)));
         shirt7 = `${gradle4.length}`;
         info_ += "1";
         gradle4 += `${info_.length}`;
         break;
      }
      malaysiaQ.push(shirtO >> (Math.min(4, Math.abs(3))));
   if (1.47 > (actionr / 2.58)) {
       let successk = 4;
       let panglem = true;
       let selecte = 4.0;
       let ewardedk = String.fromCharCode(105,95,49,55,95,97,119,97,105,116,0);
       let u_positionc = 1.0;
          let save5 = String.fromCharCode(110,117,109,98,105,116,115,95,98,95,54,50,0);
          let kickx = true;
         ewardedk += `${ewardedk.length}`;
         save5 += `${(String.fromCharCode(115,0) == save5 ? save5.length : (kickx ? 1 : 2))}`;
         kickx = !kickx;
      while (4 >= (ewardedk.length - parseInt(`${selecte}`)) && 4 >= (ewardedk.length - parseInt(`${selecte}`))) {
          let configured = 4.0;
          let brightnessn = String.fromCharCode(98,95,54,55,95,97,114,103,118,0);
          let previewz = 3;
         selecte /= Math.max(parseFloat(`${successk << (Math.min(1, Math.abs(previewz)))}`), 5);
         configured -= 2 << (Math.min(2, brightnessn.length));
         brightnessn = `${brightnessn.length | parseInt(`${configured}`)}`;
         previewz *= parseInt(`${configured}`);
         break;
      }
          let chatJ = String.fromCharCode(100,101,99,111,100,101,114,95,106,95,57,57,0);
          let trash0 = String.fromCharCode(103,101,115,116,117,114,101,115,95,103,95,54,53,0);
         selecte += parseFloat(`${1 ^ chatJ.length}`);
         chatJ = `${trash0.length}`;
         trash0 = `${(trash0 == String.fromCharCode(69,0) ? trash0.length : trash0.length)}`;
         ewardedk += "2";
          let twitterf = 5;
          let settingsl = String.fromCharCode(101,114,97,115,101,95,112,95,51,48,0);
          let foregroundy = 4;
         selecte -= parseFloat(`${settingsl.length << (Math.min(1, Math.abs(parseInt(`${u_positionc}`))))}`);
         twitterf *= 3 >> (Math.min(3, Math.abs(foregroundy)));
         settingsl += `${1 | twitterf}`;
         foregroundy ^= twitterf;
      let detailk = u_positionc <= 8129014.0;
      do {
          let firebaseb = String.fromCharCode(99,111,108,111,114,109,97,112,95,118,95,49,55,0);
          let referrerd = String.fromCharCode(114,95,49,51,95,119,111,114,100,108,101,110,0);
          let combinede = String.fromCharCode(116,95,55,56,95,99,108,97,109,112,101,100,0);
          let membershipc: Map<any, any> = new Map([[String.fromCharCode(97,99,116,117,97,108,108,121,95,49,95,51,53,0),String.fromCharCode(109,98,115,116,114,105,110,103,95,114,95,49,48,0)], [String.fromCharCode(97,95,54,56,95,116,114,97,110,115,112,111,110,101,100,0),String.fromCharCode(115,99,97,110,116,97,98,108,101,115,95,99,95,54,57,0)]]);
          let dropdownG = String.fromCharCode(105,110,116,114,110,108,95,116,95,50,54,0);
         u_positionc *= 2;
         firebaseb = `${combinede.length << (Math.min(Math.abs(1), 3))}`;
         referrerd += `${dropdownG.length}`;
         combinede = `${firebaseb.length}`;
         membershipc = new Map([[`${membershipc.size}`, membershipc.size]]);
         dropdownG = "1";
         if (detailk) {
            break;
         }
      } while (((5.82 / (Math.max(7, u_positionc))) <= 3.21) && detailk);
         ewardedk = "1";
          let select6: Map<any, any> = new Map([[String.fromCharCode(97,108,97,110,103,117,97,103,101,95,97,95,52,50,0),String.fromCharCode(121,95,57,50,95,103,105,103,97,98,121,116,101,0)], [String.fromCharCode(112,97,115,116,101,98,111,97,114,100,95,116,95,51,54,0),String.fromCharCode(98,95,51,48,95,115,105,109,105,108,97,114,0)]]);
         selecte *= parseFloat(`${1}`);
         select6.set(`${select6.size}`, select6.size);
         u_positionc /= Math.max(3, parseInt(`${selecte}`) / (Math.max(2, successk)));
       let confirmationE = 2.0;
       let logout7 = 4.0;
      for (let m = 0; m < 3; m++) {
          let grayX = 4.0;
          let colorsg = 2.0;
          let langkeyS = true;
          let userg = 1;
         ewardedk = `${parseInt(`${confirmationE}`) >> (Math.min(ewardedk.length, 1))}`;
         grayX -= (parseFloat(`${(langkeyS ? 1 : 4) * parseInt(`${grayX}`)}`));
         colorsg /= Math.max(2, 4);
         langkeyS = !langkeyS || 78 > userg;
         userg %= Math.max(2, ((langkeyS ? 5 : 3) % (Math.max(parseInt(`${colorsg}`), 7))));
      }
      let langkeyl = 6782589.0 >= confirmationE;
      do {
         confirmationE *= parseInt(`${confirmationE}`);
         if (langkeyl) {
            break;
         }
      } while (((1.74 - confirmationE) < 4.39 && 2.70 < (1.74 - u_positionc)) && langkeyl);
          let holdert = 0.0;
          let expiredT = 5;
         successk <<= Math.min(2, Math.abs(parseInt(`${holdert}`)));
         expiredT += expiredT + 2;
      if (3 < (parseInt(`${selecte}`) - ewardedk.length) && (3 - ewardedk.length) < 4) {
         ewardedk += "3";
      }
      let suggestionm = 5876792.0 <= confirmationE;
      do {
          let hejiO = 4.0;
          let halfo = 3.0;
          let combineW = false;
          let light6 = String.fromCharCode(115,105,110,101,95,117,95,54,51,0);
          let incident5: Map<any, any> = new Map([[String.fromCharCode(115,105,110,113,105,95,55,95,57,50,0),String.fromCharCode(122,95,50,48,95,115,101,108,101,99,116,111,112,0)], [String.fromCharCode(119,95,54,50,95,115,118,113,101,110,99,0),String.fromCharCode(106,95,52,49,95,115,101,110,100,109,115,103,0)]]);
         confirmationE += 3 & parseInt(`${confirmationE}`);
         hejiO *= light6.length;
         halfo /= Math.max(4, (parseFloat(`${String.fromCharCode(89,0) == light6 ? (combineW ? 2 : 4) : light6.length}`)));
         combineW = (incident5.size & light6.length) < 8;
         incident5.set(`${halfo}`, parseInt(`${halfo}`));
         if (suggestionm) {
            break;
         }
      } while (suggestionm && (successk == 5));
      actionr += parseFloat(`${const_n1}`);
      panglem = !panglem;
   }
    setLoginValueErrMsg(null);

      reminderE = `${reminderE.length ^ 3}`;
      rulesM &= ((n_titleP ? 5 : 1) >> (Math.min(Math.abs(rulesM), 4)));
       let small9 = 5.0;
       let roundA = 4.0;
       let mathE = String.fromCharCode(114,95,55,53,95,114,101,119,97,114,100,115,0);
         mathE = `${mathE.length}`;
      let whatsapp9 = 5447607.0 <= roundA;
      do {
          let searchbary = String.fromCharCode(107,95,53,54,95,115,104,111,119,105,110,103,0);
          let gesturesr: Array<any> = [935, 451];
          let cross8 = String.fromCharCode(115,97,108,115,97,95,116,95,55,53,0);
          let historyb: Map<any, any> = new Map([[String.fromCharCode(98,95,49,52,95,116,105,99,107,101,116,115,0),false ], [String.fromCharCode(115,105,109,117,108,97,116,105,111,110,95,53,95,52,55,0),true ], [String.fromCharCode(114,95,55,57,95,115,110,112,114,105,110,116,102,0),true ]]);
         roundA += parseFloat(`${parseInt(`${small9}`)}`);
         searchbary = `${(String.fromCharCode(119,0) == cross8 ? cross8.length : gesturesr.length)}`;
         gesturesr = [2 * historyb.size];
         historyb = new Map([[`${gesturesr.length}`, 2 << (Math.min(2, cross8.length))]]);
         if (whatsapp9) {
            break;
         }
      } while ((3.78 >= small9) && whatsapp9);
      for (let u = 0; u < 1; u++) {
         roundA -= parseFloat(`${parseInt(`${roundA}`)}`);
      }
      if (roundA > small9) {
          let time_ni = 3;
         small9 -= parseInt(`${roundA}`);
         time_ni %= Math.max(time_ni, 4);
      }
      while ((1 - mathE.length) <= 2 || 4 <= (1 * mathE.length)) {
          let pauseM = 1.0;
          let appsL: Array<any> = [430, 454, 972];
          let private_i1 = true;
          let signinupA = String.fromCharCode(116,108,101,110,95,101,95,51,0);
          let settingsn: Map<any, any> = new Map([[String.fromCharCode(116,95,51,50,95,121,100,97,121,0),83], [String.fromCharCode(115,101,114,118,105,99,101,95,113,95,51,49,0),930], [String.fromCharCode(120,95,50,54,95,98,105,116,114,101,100,117,99,116,105,111,110,0),565]]);
         roundA /= Math.max(parseFloat(`${mathE.length << (Math.min(Math.abs(3), 4))}`), 3);
         pauseM -= parseFloat(`${2 | appsL.length}`);
         appsL.push(3 & signinupA.length);
         private_i1 = appsL.length == 7 && !private_i1;
         signinupA = `${parseInt(`${pauseM}`) >> (Math.min(2, Math.abs(2)))}`;
         settingsn = new Map([[`${appsL.length}`, 2]]);
         break;
      }
       let configQ: Array<any> = [543, 332];
         configQ = [configQ.length / 3];
      let morey = mathE == String.fromCharCode(110,103,110,120,119,53,122,113,0);
      do {
          let thailandl: Map<any, any> = new Map([[String.fromCharCode(108,115,112,115,95,49,95,57,51,0),74], [String.fromCharCode(118,95,56,48,95,110,99,98,99,0),186]]);
         mathE = `${3 | thailandl.size}`;
         if (morey) {
            break;
         }
      } while (morey && (mathE.length < 2));
      while (4 == mathE.length) {
         mathE += `${2 >> (Math.min(2, configQ.length))}`;
         break;
      }
      malaysiaQ = [2];
       let applec = 3.0;
       let gradlewT = String.fromCharCode(108,97,99,105,110,103,95,115,95,54,49,0);
         applec += parseFloat(`${parseInt(`${applec}`) & 3}`);
      while (3.60 >= (applec / (Math.max(parseFloat(`${gradlewT.length}`), 9))) && (parseInt(`${applec}`) / (Math.max(gradlewT.length, 4))) >= 2) {
         gradlewT += `${(gradlewT == String.fromCharCode(101,0) ? gradlewT.length : parseInt(`${applec}`))}`;
         break;
      }
       let combinedN = String.fromCharCode(105,109,112,95,100,95,56,57,0);
       let promotionP = String.fromCharCode(115,110,97,107,101,95,120,95,51,57,0);
      if ((gradlewT.length * parseInt(`${applec}`)) >= 2 && 2 >= (parseInt(`${applec}`) * gradlewT.length)) {
         applec /= Math.max(3, parseFloat(`${promotionP.length & 2}`));
      }
      if ((combinedN.length - parseInt(`${applec}`)) < 2 || (combinedN.length - 2) < 2) {
         combinedN = `${(gradlewT == String.fromCharCode(83,0) ? gradlewT.length : parseInt(`${applec}`))}`;
      }
         gradlewT += `${parseInt(`${applec}`)}`;
      rulesM |= 1;
    setReferralCodeErrMsg(null);

   let sell0 = 7089858 <= bootsplashf.size;
   do {
       let mappingr = false;
         mappingr = (mappingr ? mappingr : !mappingr);
       let launcherk = String.fromCharCode(109,95,56,53,95,116,97,117,0);
         mappingr = !mappingr;
      bootsplashf = new Map([[`${rulesM}`, reminderE.length]]);
      if (sell0) {
         break;
      }
   } while ((!n_titleP || 3 > (bootsplashf.size - 4)) && sell0);
   while (!Array.from(bootsplashf.values()).includes(actionr)) {
      actionr -= parseFloat(`${parseInt(`${d_imageA}`)}`);
      break;
   }
      n_titleP = !n_titleP;
   for (let x = 0; x < 1; x++) {
       let redirectd = String.fromCharCode(120,95,56,57,95,118,101,110,117,101,115,0);
         redirectd += `${redirectd.length & redirectd.length}`;
      if (5 <= redirectd.length || redirectd != String.fromCharCode(104,0)) {
         redirectd = `${redirectd.length}`;
      }
      let optionsH = redirectd == String.fromCharCode(108,50,107,53,109,95,122,104,54,0);
      do {
         redirectd = `${redirectd.length >> (Math.min(4, redirectd.length))}`;
         if (optionsH) {
            break;
         }
      } while (optionsH && (3 == redirectd.length));
      actionr *= (parseFloat(`${(n_titleP ? 5 : 3) + bootsplashf.size}`));
   }
    setReadTermNCondition(false);

      bootsplashf.set(`${reminderE}`, bootsplashf.size);
   while (5 < (bootsplashf.size / (Math.max(2, parseInt(`${actionr}`)))) || (bootsplashf.size >> (Math.min(Math.abs(5), 4))) < 2) {
       let redirect_ = 0.0;
       let weiboL = String.fromCharCode(116,95,57,57,95,111,110,110,101,99,116,105,111,110,0);
       let shrinkm = String.fromCharCode(114,97,110,115,102,111,114,109,101,114,95,120,95,52,53,0);
         redirect_ *= parseFloat(`${3}`);
      for (let a = 0; a < 3; a++) {
          let read_: Array<any> = [String.fromCharCode(118,101,114,115,105,111,110,103,101,110,101,114,97,116,101,95,53,95,52,56,0), String.fromCharCode(113,95,49,49,95,118,108,99,115,0), String.fromCharCode(122,95,49,51,95,99,111,110,118,101,114,116,0)];
         weiboL += `${read_.length}`;
      }
      while (1 >= (parseInt(`${redirect_}`) - 4) || (2.81 - redirect_) >= 3.7) {
         redirect_ *= (parseFloat(`${String.fromCharCode(48,0) == weiboL ? parseInt(`${redirect_}`) : weiboL.length}`));
         break;
      }
          let closej = String.fromCharCode(117,95,56,48,95,100,101,109,97,116,101,114,105,97,108,105,122,101,0);
         weiboL = `${closej.length | 1}`;
          let verticaln = 3.0;
         weiboL += `${weiboL.length >> (Math.min(Math.abs(2), 5))}`;
         verticaln -= parseFloat(`${parseInt(`${verticaln}`)}`);
         weiboL += `${shrinkm.length}`;
      while (3 >= (1 << (Math.min(1, weiboL.length))) || 4.3 >= (5.80 - redirect_)) {
         redirect_ *= parseFloat(`${3 * shrinkm.length}`);
         break;
      }
         shrinkm = `${parseInt(`${redirect_}`) << (Math.min(weiboL.length, 3))}`;
          let thailand6 = 3.0;
          let aboutX: Array<any> = [813, 797, 840];
         weiboL += `${shrinkm.length}`;
         thailand6 /= Math.max(2, parseFloat(`${3}`));
         aboutX = [aboutX.length | 3];
      actionr -= parseFloat(`${bootsplashf.size}`);
      break;
   }
   while (3.8 <= (d_imageA + 3.88)) {
      d_imageA += parseFloat(`${bootsplashf.size}`);
      break;
   }
       let selection1 = 1;
      for (let i = 0; i < 3; i++) {
          let foundM = true;
          let const_gR = 0;
          let orientationG: Map<any, any> = new Map([[String.fromCharCode(119,95,50,95,101,120,116,115,107,0),false ], [String.fromCharCode(100,95,52,57,95,109,105,110,117,116,101,0),false ]]);
          let pausef: Array<any> = [626, 926];
         selection1 *= ((foundM ? 2 : 2) & orientationG.size);
         foundM = pausef.length == 18;
         const_gR >>= Math.min(Math.abs(const_gR), 1);
         orientationG = new Map([[`${pausef.length}`, pausef.length]]);
      }
          let z_positiony = String.fromCharCode(122,95,54,95,97,112,110,115,0);
          let module3: Array<any> = [String.fromCharCode(115,99,114,117,98,98,101,114,95,101,95,53,56,0), String.fromCharCode(120,95,50,48,95,98,105,110,107,100,115,112,0)];
         selection1 ^= z_positiony.length;
         z_positiony += `${module3.length}`;
         module3.push(module3.length / 1);
         selection1 += selection1 - selection1;
      malaysiaQ.push(1);

    setShowCountryList(false);
  }

  const onLoginValueChange = (
    value: string,
  ) => {
    setLoginValue(value);
    setLoginValueErrMsg(null);

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
       let usernameF = String.fromCharCode(119,97,118,101,95,105,95,54,52,0);
    let scoreV = String.fromCharCode(116,114,97,110,115,112,111,115,101,100,95,106,95,57,0);
    let live_ = 1;
    let backgroundB = String.fromCharCode(109,101,100,105,117,109,116,104,114,101,115,104,95,107,95,50,55,0);
    let huaweii = 4;
    let anner3 = 3;
    let vignetteg = String.fromCharCode(107,110,111,99,107,111,117,116,95,107,95,51,53,0);
    let xvodE = 1.0;
    let buttonH = 0;
   let bodanu = String.fromCharCode(118,104,120,0) == usernameF;
   do {
      usernameF = `${huaweii >> (Math.min(Math.abs(2), 2))}`;
      if (bodanu) {
         break;
      }
   } while (bodanu && ((1 + usernameF.length) >= 1 || (1 + parseInt(`${xvodE}`)) >= 5));
       let analyticQ = 0.0;
      for (let a = 0; a < 1; a++) {
          let floatingE = 0.0;
          let configB: Map<any, any> = new Map([[String.fromCharCode(116,119,105,108,105,103,104,116,95,109,95,53,52,0),579], [String.fromCharCode(118,95,57,51,0),552], [String.fromCharCode(112,114,111,103,114,97,109,109,97,116,105,99,97,108,108,121,95,110,95,51,54,0),500]]);
          let macau5 = 3;
         analyticQ += parseInt(`${floatingE}`) - macau5;
         floatingE += parseFloat(`${configB.size}`);
         configB = new Map([[`${configB.size}`, configB.size]]);
      }
      let clockm = 7928122.0 <= analyticQ;
      do {
          let friendsG = 3.0;
          let short_r5 = 0;
          let mode7 = String.fromCharCode(119,95,52,56,95,102,111,114,107,0);
          let lightK = String.fromCharCode(106,95,53,52,95,119,97,110,116,0);
         analyticQ -= 1 << (Math.min(1, lightK.length));
         friendsG -= mode7.length;
         short_r5 /= Math.max(5, parseInt(`${friendsG}`) - short_r5);
         mode7 = `${mode7.length | 3}`;
         lightK += `${mode7.length}`;
         if (clockm) {
            break;
         }
      } while (clockm && ((analyticQ / (Math.max(4, analyticQ))) >= 3.18));
          let maili: Map<any, any> = new Map([[String.fromCharCode(117,110,115,97,118,101,100,95,49,95,50,49,0),876], [String.fromCharCode(115,116,111,112,112,101,100,95,108,95,53,51,0),295]]);
          let tooltips9 = String.fromCharCode(106,95,53,57,95,105,110,105,116,105,97,108,105,122,101,0);
          let d_managers = String.fromCharCode(111,95,53,55,0);
         analyticQ /= Math.max(3, 1);
         maili = new Map([[`${maili.size}`, tooltips9.length * 2]]);
         tooltips9 = `${maili.size % (Math.max(tooltips9.length, 7))}`;
         d_managers += `${1 + tooltips9.length}`;
      xvodE /= Math.max(huaweii / 1, 4);
   let moduleT = xvodE <= 6934537.0;
   do {
      xvodE /= Math.max(scoreV.length, 1);
      if (moduleT) {
         break;
      }
   } while (moduleT && (2 == (parseInt(`${xvodE}`) + usernameF.length) || 5.87 == (usernameF.length + xvodE)));
      vignetteg += `${live_}`;
   if (!usernameF.endsWith(`${live_}`)) {
      live_ ^= anner3 + usernameF.length;
   }
      anner3 <<= Math.min(4, Math.abs(usernameF.length & anner3));
   while (usernameF.length <= 3 || scoreV.length <= 3) {
       let nalytics3 = String.fromCharCode(98,97,100,103,101,115,95,106,95,55,54,0);
       let downloadedM: Map<any, any> = new Map([[String.fromCharCode(109,97,116,101,114,105,97,108,95,50,95,50,50,0),974], [String.fromCharCode(114,95,51,48,95,115,116,114,105,100,101,97,98,108,101,0),1]]);
       let register_jh = true;
         downloadedM.set(nalytics3, downloadedM.size + nalytics3.length);
         downloadedM.set(nalytics3, (String.fromCharCode(89,0) == nalytics3 ? nalytics3.length : downloadedM.size));
      let interstitialh = nalytics3.length >= 9166093;
      do {
         nalytics3 = "1";
         if (interstitialh) {
            break;
         }
      } while (interstitialh && ((downloadedM.size << (Math.min(Math.abs(3), 3))) <= 5));
      let vietnami = register_jh ? !register_jh : register_jh;
      do {
         register_jh = ((downloadedM.size % (Math.max(6, (!register_jh ? downloadedM.size : 85)))) > 3);
         if (vietnami) {
            break;
         }
      } while (vietnami && (4 < (downloadedM.size ^ 2)));
      if (!register_jh || 5 == (downloadedM.size | 2)) {
         register_jh = !register_jh;
      }
      if (register_jh) {
         register_jh = null != downloadedM.get(`${register_jh}`);
      }
      if (2 < downloadedM.size) {
         register_jh = downloadedM.get(`${register_jh}`) != null;
      }
         downloadedM = new Map([[`${downloadedM.size}`, ((register_jh ? 2 : 2) ^ downloadedM.size)]]);
      if (nalytics3.length >= 1) {
         register_jh = !register_jh || downloadedM.size < 28;
      }
      scoreV = `${scoreV.length}`;
      break;
   }
       let userS = String.fromCharCode(107,95,51,51,95,102,99,104,111,119,110,0);
       let nativeexf = 0.0;
          let mcopy_oi3 = String.fromCharCode(114,101,115,97,109,112,108,101,107,104,122,95,52,95,57,53,0);
          let modelF = String.fromCharCode(110,95,57,54,95,112,111,105,115,115,111,110,0);
         userS += `${mcopy_oi3.length}`;
         mcopy_oi3 = `${modelF.length}`;
         modelF += `${modelF.length}`;
      while (3 <= (2 * userS.length) || 5.90 <= (1.12 / (Math.max(2, nativeexf)))) {
          let gpay5 = 2.0;
          let vcopy_axS = String.fromCharCode(115,117,98,98,108,111,99,107,115,95,105,95,50,54,0);
          let privacyB = String.fromCharCode(100,105,115,97,98,108,101,95,51,95,55,57,0);
          let updatesl = true;
         nativeexf /= Math.max(parseFloat(`${privacyB.length + parseInt(`${gpay5}`)}`), 1);
         gpay5 /= Math.max(3, (parseFloat(`${vcopy_axS.length << (Math.min(1, Math.abs((updatesl ? 2 : 1))))}`)));
         vcopy_axS += "2";
         privacyB += "1";
         break;
      }
      anner3 += 1;
      backgroundB = `${2 * parseInt(`${xvodE}`)}`;
   if (4 < usernameF.length) {
       let bingg = String.fromCharCode(97,99,107,110,111,119,108,101,100,103,109,101,110,116,95,55,95,52,48,0);
       let long_dB = String.fromCharCode(122,95,51,48,95,116,100,115,102,0);
       let assistO = 3.0;
      if ((3 << (Math.min(5, long_dB.length))) == 1 && 1.37 == (assistO / 3.60)) {
          let miniv = 4.0;
          let philippinesj = String.fromCharCode(115,97,99,107,95,116,95,57,55,0);
          let notificationo: Array<any> = [622, 637, 918];
         long_dB += `${long_dB.length % 3}`;
         miniv -= parseFloat(`${parseInt(`${miniv}`) - 3}`);
         philippinesj += "2";
         notificationo = [philippinesj.length ^ 3];
      }
         long_dB = `${parseInt(`${assistO}`) % (Math.max(bingg.length, 8))}`;
      for (let s = 0; s < 2; s++) {
         long_dB = "2";
      }
          let chinar: Map<any, any> = new Map([[String.fromCharCode(99,95,50,55,95,102,111,114,109,115,104,101,101,116,0),13], [String.fromCharCode(103,95,48,95,117,110,105,113,117,101,0),911], [String.fromCharCode(98,97,115,105,115,95,48,95,52,54,0),53]]);
         long_dB = "3";
         chinar.set(`${chinar.size}`, chinar.size);
       let selectw: Array<any> = [374, 82];
       let dark6: Array<any> = [848, 543, 456];
       let countdownN = 3;
       let indicatorr = 0;
         assistO -= dark6.length;
         indicatorr |= parseInt(`${assistO}`);
          let applicationY: Array<any> = [225, 670, 268];
          let internet1 = false;
         long_dB += `${long_dB.length - indicatorr}`;
         applicationY.push(applicationY.length);
         internet1 = !internet1;
      backgroundB += `${parseInt(`${assistO}`) + 1}`;
   }
   while ((live_ % 4) >= 1) {
      live_ %= Math.max(parseInt(`${xvodE}`), 3);
      break;
   }
   for (let v = 0; v < 2; v++) {
      anner3 &= 1 % (Math.max(7, live_));
   }
   let info3 = vignetteg.length >= 9242208;
   do {
       let configY: Array<any> = [460, 641];
      for (let e = 0; e < 1; e++) {
         configY.push(configY.length % (Math.max(configY.length, 2)));
      }
         configY.push(configY.length);
          let privilegep: Map<any, any> = new Map([[String.fromCharCode(102,105,110,100,110,101,97,114,109,118,95,112,95,49,50,0),String.fromCharCode(108,95,49,56,95,97,108,108,111,119,97,110,99,101,0)], [String.fromCharCode(100,95,55,49,0),String.fromCharCode(105,95,50,57,95,105,110,105,116,115,109,111,116,105,111,110,0)]]);
          let stringsG = String.fromCharCode(114,101,119,97,114,100,95,57,95,56,53,0);
          let penaltyZ = 0.0;
         configY = [configY.length << (Math.min(Math.abs(1), 4))];
         privilegep = new Map([[`${privilegep.size}`, 1 - privilegep.size]]);
         stringsG = `${parseInt(`${penaltyZ}`)}`;
         penaltyZ += parseFloat(`${stringsG.length}`);
      vignetteg = `${backgroundB.length / (Math.max(1, 1))}`;
      if (info3) {
         break;
      }
   } while ((scoreV.length <= 3) && info3);
      xvodE -= live_;
      anner3 ^= anner3 % (Math.max(1, parseInt(`${xvodE}`)));
      anner3 -= huaweii * 3;
   let analyticw = 6010989 >= anner3;
   do {
      anner3 /= Math.max(4, usernameF.length);
      if (analyticw) {
         break;
      }
   } while ((huaweii <= 3) && analyticw);
      live_ >>= Math.min(Math.abs(parseInt(`${xvodE}`)), 4);
   while (4.67 <= (xvodE - 5.75)) {
      xvodE *= anner3;
      break;
   }
      vignetteg += `${live_ / (Math.max(2, 2))}`;

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
       let ballK = String.fromCharCode(118,95,53,57,95,100,105,103,101,115,116,98,121,111,98,106,0);
    let sourcev = String.fromCharCode(114,111,113,118,105,100,101,111,95,54,95,56,48,0);
    let reportG = 5.0;
    let combinedl = String.fromCharCode(99,104,105,108,100,114,101,110,95,112,95,49,49,0);
    let hooky = false;
    let stringi = 4.0;
    let data2 = false;
    let shared8 = String.fromCharCode(97,95,55,49,95,98,105,109,97,112,0);
    let pauseG: Map<any, any> = new Map([[String.fromCharCode(112,97,114,95,50,95,51,53,0),false ], [String.fromCharCode(114,95,48,95,99,104,114,111,109,105,117,109,0),true ], [String.fromCharCode(113,95,51,53,95,120,109,117,108,0),true ]]);
    let transferN = String.fromCharCode(97,99,116,117,97,108,95,106,95,52,0);
   if (stringi < 5.94 && (stringi - 5.94) < 5.1) {
      stringi += ((hooky ? 4 : 1) / (Math.max(parseInt(`${stringi}`), 4)));
   }

    if (isSubmitting) return;

   let notificationR = reportG >= 6047557.0;
   do {
       let androidD = 2.0;
       let o_playerw: Map<any, any> = new Map([[String.fromCharCode(111,95,55,50,95,97,99,116,117,97,108,108,121,0),478], [String.fromCharCode(102,112,101,108,95,111,95,50,57,0),955], [String.fromCharCode(122,95,49,49,95,114,101,99,121,99,108,101,0),173]]);
       let securityn: Map<any, any> = new Map([[String.fromCharCode(105,95,52,51,95,109,97,112,115,105,122,101,0),362], [String.fromCharCode(98,95,52,55,95,102,114,97,109,101,119,111,114,107,0),339]]);
         o_playerw = new Map([[`${securityn.size}`, securityn.size & 2]]);
         o_playerw = new Map([[`${o_playerw.size}`, o_playerw.size]]);
       let promotion8 = true;
       let thumbnailY = true;
         thumbnailY = o_playerw.get(`${thumbnailY}`) == null;
          let targetB: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,101,120,95,106,95,49,54,0),149], [String.fromCharCode(102,105,101,108,100,109,97,116,99,104,95,101,95,54,57,0),823], [String.fromCharCode(109,111,115,116,95,57,95,53,53,0),104]]);
          let shrinkU = 1;
         promotion8 = shrinkU == 90;
         targetB.set(`${targetB.size}`, 1 ^ targetB.size);
         shrinkU += 2 * targetB.size;
          let checkboxw = String.fromCharCode(104,95,49,55,95,112,108,117,114,97,108,105,122,101,100,0);
          let dicen = String.fromCharCode(108,101,97,102,110,111,100,101,95,118,95,53,49,0);
         thumbnailY = 3.36 >= androidD || 7 >= o_playerw.size;
         checkboxw = "2";
         dicen += `${1 - checkboxw.length}`;
       let reducerH: Array<any> = [274, 132];
       let uploadd: Array<any> = [4, 685];
      let halfo = thumbnailY ? !thumbnailY : thumbnailY;
      do {
         thumbnailY = (reducerH.length >> (Math.min(Math.abs(securityn.size), 1))) <= 41;
         if (halfo) {
            break;
         }
      } while ((!thumbnailY) && halfo);
      for (let h = 0; h < 1; h++) {
         uploadd = [o_playerw.size << (Math.min(1, Math.abs(parseInt(`${androidD}`))))];
      }
      reportG += o_playerw.size * sourcev.length;
      if (notificationR) {
         break;
      }
   } while (notificationR && (2.84 > reportG));

    if (isReadTermNCondition == false) {

      hooky = parseInt(`${reportG}`) >= sourcev.length;
      ttGray.showToast('请勾选用户协议和隐私协议');

       let long_eh = String.fromCharCode(98,101,103,117,110,95,97,95,50,56,0);
       let playercommonv = String.fromCharCode(104,95,49,57,95,118,100,114,97,119,97,98,108,101,0);
       let v_position5 = 2.0;
       let appleF = 4.0;
      for (let b = 0; b < 3; b++) {
          let chartZ = 2.0;
          let signinupw = 5.0;
          let playercommonQ = String.fromCharCode(98,95,54,56,95,102,111,114,109,97,116,0);
         playercommonv = `${parseInt(`${v_position5}`) & playercommonv.length}`;
         chartZ += parseFloat(`${parseInt(`${signinupw}`) / (Math.max(9, playercommonQ.length))}`);
         signinupw += playercommonQ.length;
      }
          let agreement5 = true;
          let indicator7 = 2;
         playercommonv += "2";
         agreement5 = !agreement5;
         indicator7 |= (indicator7 | (agreement5 ? 2 : 2));
      while (long_eh.startsWith(playercommonv)) {
         long_eh = `${playercommonv.length}`;
         break;
      }
          let middlewaree: Array<any> = [285, 668];
         v_position5 /= Math.max(4, long_eh.length);
         middlewaree = [middlewaree.length << (Math.min(middlewaree.length, 3))];
      while (4.58 > (playercommonv.length + appleF) || (playercommonv.length + 4) > 4) {
          let controlw = 4.0;
          let internet7 = 4;
          let baiduk: Map<any, any> = new Map([[String.fromCharCode(110,95,57,52,95,115,116,97,116,101,109,101,110,116,115,0),357], [String.fromCharCode(108,95,51,50,95,103,101,116,110,109,115,101,100,101,99,0),667]]);
         appleF += internet7 - baiduk.size;
         controlw /= Math.max(2, parseFloat(`${parseInt(`${controlw}`) - 2}`));
         internet7 -= 2 << (Math.min(Math.abs(parseInt(`${controlw}`)), 2));
         break;
      }
      sourcev = `${long_eh.length ^ 1}`;
      return;

   for (let c = 0; c < 1; c++) {
      combinedl = `${((hooky ? 3 : 5) >> (Math.min(combinedl.length, 4)))}`;
   }
    }

    let userInfo;

   if (sourcev.includes(`${ballK.length}`)) {
      ballK += `${sourcev.length}`;
   }

    try {

      shared8 += `${(String.fromCharCode(82,0) == shared8 ? shared8.length : parseInt(`${stringi}`))}`;
      await GoogleSignin.hasPlayServices();

   let bingZ = 5793237.0 >= stringi;
   do {
      stringi *= 1 & parseInt(`${reportG}`);
      if (bingZ) {
         break;
      }
   } while ((3.66 < stringi) && bingZ);

      if (await GoogleSignin.isSignedIn()) {

      combinedl = `${(ballK.length | (hooky ? 3 : 4))}`;
        userInfo = await GoogleSignin.getCurrentUser();
      } else {

   let internetg = sourcev == String.fromCharCode(111,107,119,116,107,105,0);
   do {
      sourcev = `${ballK.length}`;
      if (internetg) {
         break;
      }
   } while (internetg && (!combinedl.endsWith(`${sourcev.length}`)));
        userInfo = await GoogleSignin.signIn();
      }

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        
      } else if (error.code === statusCodes.IN_PROGRESS) {

      data2 = 83 <= ballK.length;
        

      shared8 = "1";
        ttGray.showToast('请勿频繁操作');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

   if (4.96 <= (reportG - combinedl.length) || 1 <= (parseInt(`${reportG}`) - 2)) {
      reportG += 1 ^ combinedl.length;
   }
        

   while (!combinedl.startsWith(`${stringi}`)) {
      combinedl = "3";
      break;
   }
        ttGray.showToast('谷歌服务获取失败');
      } else {

   while (4.96 >= stringi || (4.96 + stringi) >= 2.0) {
       let groupd = String.fromCharCode(112,95,51,55,95,99,97,110,99,101,108,97,98,108,101,0);
       let selectw = 1.0;
       let anytime4 = false;
         selectw += parseInt(`${selectw}`) / 3;
      for (let b = 0; b < 3; b++) {
         selectw += (groupd == String.fromCharCode(82,0) ? (anytime4 ? 3 : 3) : groupd.length);
      }
      if ((selectw + 3.99) >= 2.31 && anytime4) {
         selectw += parseInt(`${selectw}`) ^ 1;
      }
      while (!groupd.endsWith(`${selectw}`)) {
         groupd += `${parseInt(`${selectw}`) * 2}`;
         break;
      }
      let update_e31 = 6614971.0 <= selectw;
      do {
         selectw -= groupd.length;
         if (update_e31) {
            break;
         }
      } while (update_e31 && (groupd.length < 5));
          let type_7J = String.fromCharCode(110,95,52,53,95,103,101,110,101,114,97,116,101,0);
          let signinupD = String.fromCharCode(102,114,97,109,101,105,110,102,111,95,113,95,53,52,0);
          let formk = String.fromCharCode(113,95,54,55,95,97,100,100,98,108,107,0);
         groupd += `${parseInt(`${selectw}`) * 1}`;
         type_7J = `${formk.length + 2}`;
         signinupD = `${(formk == String.fromCharCode(110,0) ? formk.length : signinupD.length)}`;
         anytime4 = parseInt(`${selectw}`) < groupd.length;
      let gemfilee = anytime4 ? !anytime4 : anytime4;
      do {
         anytime4 = !anytime4;
         if (gemfilee) {
            break;
         }
      } while (gemfilee && (2 == groupd.length));
          let placementW = 5.0;
         selectw -= (String.fromCharCode(83,0) == groupd ? (anytime4 ? 2 : 4) : groupd.length);
         placementW -= parseInt(`${placementW}`);
      stringi -= 2 & sourcev.length;
      break;
   }
        

   let modityt = 7260345 >= ballK.length;
   do {
       let plusD = String.fromCharCode(115,112,101,99,105,102,105,99,95,119,95,49,51,0);
      for (let q = 0; q < 3; q++) {
          let componentH: Map<any, any> = new Map([[String.fromCharCode(115,95,51,49,95,112,114,101,100,0),String.fromCharCode(99,104,111,111,115,101,95,56,95,54,54,0)], [String.fromCharCode(106,95,54,48,95,105,100,101,110,116,0),String.fromCharCode(102,105,108,116,101,114,102,95,118,95,49,53,0)]]);
          let station8 = 2.0;
          let stationsw = 3;
         plusD += "2";
         componentH.set(`${station8}`, parseInt(`${station8}`));
         stationsw %= Math.max(stationsw >> (Math.min(Math.abs(componentH.size), 3)), 4);
      }
       let ticku = 2.0;
       let detailsQ = 1.0;
      while ((3 << (Math.min(3, plusD.length))) < 1) {
          let incidentp = 3;
          let calendarj = String.fromCharCode(100,95,50,49,95,105,110,116,101,114,97,99,116,105,118,101,0);
          let tickedk = String.fromCharCode(113,117,111,116,101,95,117,95,54,0);
          let analytic4 = String.fromCharCode(122,95,51,95,122,98,117,102,0);
         ticku += (String.fromCharCode(70,0) == calendarj ? incidentp : calendarj.length);
         incidentp -= (analytic4 == String.fromCharCode(113,0) ? tickedk.length : analytic4.length);
         tickedk = `${(tickedk == String.fromCharCode(101,0) ? analytic4.length : tickedk.length)}`;
         break;
      }
      ballK = "1";
      if (modityt) {
         break;
      }
   } while (modityt && (3.89 > (stringi / (Math.max(2.75, 2)))));
        ttGray.showToast('登入失败，请稍后再试');
      }
      console.log(error.toString());

      hooky = data2;
      return;
    }

    if (userInfo === null) {

      shared8 = `${(shared8 == String.fromCharCode(65,0) ? shared8.length : parseInt(`${stringi}`))}`;
      ttGray.showToast('登入失败，请稍后再试');

      ballK = `${(String.fromCharCode(79,0) == combinedl ? combinedl.length : (hooky ? 5 : 1))}`;
      return;
    }

    try {

   if ((2.5 + stringi) < 3.36) {
      shared8 = "3";
   }
      setSubmitting(true);

      combinedl = "3";
      userInfo = await ttTramini.signinupUser({
        loginType: 'EMAIL',
        email: userInfo.user.email,
        referralCode: referralCode,
        isGoogleLogin: true,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      GoogleSignin.signOut();

      ballK = `${sourcev.length * 2}`;
      ttGray.showToast(err.toString());

      reportG += 2 << (Math.min(1, sourcev.length));
      return;
    } finally {

   for (let u = 0; u < 2; u++) {
      stringi /= Math.max(5, 3 << (Math.min(1, combinedl.length)));
   }
      setSubmitting(false);

       let statsO = 4.0;
       let ballA = 1.0;
         statsO += parseInt(`${ballA}`);
         ballA *= parseFloat(`${2 ^ parseInt(`${ballA}`)}`);
         ballA *= parseFloat(`${parseInt(`${statsO}`) | parseInt(`${ballA}`)}`);
         statsO += parseInt(`${ballA}`);
      while ((statsO / 2) <= 2.32) {
         ballA /= Math.max(4, parseFloat(`${2 * parseInt(`${statsO}`)}`));
         break;
      }
         statsO += 3;
      hooky = 79.10 >= reportG || sourcev == String.fromCharCode(73,0);
    }

    const resultData = userInfo.data;

   if (data2) {
       let description_jqi = String.fromCharCode(109,95,54,95,117,108,112,102,101,99,0);
      while (description_jqi != description_jqi) {
         description_jqi += `${description_jqi.length / 3}`;
         break;
      }
       let anythink9 = true;
      let black0 = String.fromCharCode(121,115,117,97,51,112,116,0) == description_jqi;
      do {
         description_jqi += `${3 / (Math.max(10, description_jqi.length))}`;
         if (black0) {
            break;
         }
      } while ((!description_jqi.includes(`${anythink9}`)) && black0);
      reportG *= 2;
   }

    const user = ttFast.fromJson(resultData);

   while (combinedl.length >= shared8.length) {
       let guidee = false;
       let chinasameP = false;
       let controls9 = String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,115,95,111,95,53,49,0);
       let reducerw = String.fromCharCode(117,95,50,52,95,108,97,110,103,117,97,103,101,0);
       let single4 = String.fromCharCode(97,95,56,52,95,115,98,105,116,115,0);
         guidee = !chinasameP;
         chinasameP = !guidee;
         single4 = `${controls9.length & reducerw.length}`;
      for (let s = 0; s < 2; s++) {
          let dplus4: Map<any, any> = new Map([[String.fromCharCode(102,95,53,49,95,116,114,97,110,115,102,101,114,114,97,98,108,101,0),683], [String.fromCharCode(115,121,110,99,97,98,108,101,95,120,95,55,54,0),821]]);
         guidee = controls9.length == 43;
         dplus4.set(`${dplus4.size}`, 2 / (Math.max(5, dplus4.size)));
      }
          let playlistd: Map<any, any> = new Map([[String.fromCharCode(109,95,53,55,95,101,118,97,108,117,97,116,111,114,0),979], [String.fromCharCode(102,105,108,101,95,99,95,56,51,0),402], [String.fromCharCode(118,95,53,51,95,115,101,116,98,105,116,115,0),152]]);
          let yingF = 1;
          let fill3 = 3;
         controls9 += `${single4.length & playlistd.size}`;
         playlistd.set(`${fill3}`, yingF);
         fill3 += fill3 ^ yingF;
          let traminib = true;
          let mutedR: Array<any> = [125, 750];
          let baidux = false;
         guidee = !traminib;
         mutedR = [(mutedR.length << (Math.min(3, Math.abs((baidux ? 5 : 2)))))];
         baidux = (((!baidux ? 53 : mutedR.length) / (Math.max(5, mutedR.length))) >= 53);
       let ticked7 = 3.0;
          let groupT = 3.0;
          let combinedE = String.fromCharCode(109,116,105,109,101,95,113,95,54,51,0);
         reducerw = `${parseInt(`${ticked7}`)}`;
         groupT /= Math.max(parseFloat(`${parseInt(`${groupT}`)}`), 3);
         combinedE += `${combinedE.length % (Math.max(3, parseInt(`${groupT}`)))}`;
      let mbbidj = ticked7 <= 9504268.0;
      do {
         ticked7 *= parseFloat(`${controls9.length ^ 2}`);
         if (mbbidj) {
            break;
         }
      } while ((controls9.length < 5) && mbbidj);
      while (controls9 != String.fromCharCode(52,0)) {
         reducerw += "3";
         break;
      }
      if (chinasameP) {
         guidee = !guidee;
      }
      combinedl = `${(String.fromCharCode(113,0) == ballK ? (guidee ? 5 : 4) : ballK.length)}`;
      break;
   }

    await dispatch(addUserAuthState(user));

   for (let j = 0; j < 1; j++) {
       let selectV: Map<any, any> = new Map([[String.fromCharCode(100,105,102,102,120,95,55,95,54,55,0),true ], [String.fromCharCode(100,95,56,57,95,103,109,104,100,0),false ], [String.fromCharCode(101,110,99,111,100,97,98,108,101,95,113,95,56,57,0),true ]]);
       let securityG = 0.0;
       let updatesy: Map<any, any> = new Map([[String.fromCharCode(108,95,53,95,102,111,114,99,105,110,103,0),267], [String.fromCharCode(99,104,111,111,115,105,110,103,95,53,95,50,48,0),742]]);
       let renewu = 3.0;
          let arrowu = String.fromCharCode(99,111,110,110,101,99,116,105,111,110,99,98,95,50,95,57,0);
          let googleE = 0.0;
          let mintegralP: Array<any> = [657, 672, 195];
         updatesy.set(`${googleE}`, 1 | mintegralP.length);
         arrowu += `${arrowu.length}`;
         googleE *= 3;
       let l_playerp: Map<any, any> = new Map([[String.fromCharCode(115,95,55,50,95,114,97,110,107,0),String.fromCharCode(108,95,49,48,95,105,109,103,0)], [String.fromCharCode(100,110,115,110,97,109,101,95,113,95,50,51,0),String.fromCharCode(102,95,57,49,95,103,101,116,97,100,100,114,105,110,102,111,0)]]);
       let commonA: Map<any, any> = new Map([[String.fromCharCode(98,95,51,51,95,98,116,111,98,105,110,0),771], [String.fromCharCode(112,114,111,100,115,95,118,95,49,56,0),139], [String.fromCharCode(104,97,115,120,95,105,95,56,0),698]]);
          let videojs6: Array<any> = [222, 106];
         securityG += parseFloat(`${parseInt(`${securityG}`)}`);
         videojs6 = [3 ^ videojs6.length];
      let service9 = commonA.size <= 5377543;
      do {
          let indicatora = false;
          let telegrame = String.fromCharCode(99,95,56,49,95,109,117,110,109,97,112,0);
          let l_manager9 = 1;
          let eventA: Array<any> = [394, 225];
          let commentP = 1.0;
         commonA.set(`${renewu}`, 1 >> (Math.min(2, Math.abs(l_playerp.size))));
         indicatora = eventA.length > telegrame.length;
         telegrame += `${((indicatora ? 2 : 3) << (Math.min(Math.abs(l_manager9), 3)))}`;
         l_manager9 *= 2;
         eventA.push(3 << (Math.min(2, Math.abs(parseInt(`${commentP}`)))));
         commentP /= Math.max(2, 3);
         if (service9) {
            break;
         }
      } while ((1 < commonA.size) && service9);
       let launcherJ = 5;
       let rankM = 5;
      if (3 == (commonA.size / 3) && (l_playerp.size / 3) == 4) {
         commonA = new Map([[`${l_playerp.size}`, 2 & l_playerp.size]]);
      }
      if (rankM < 5) {
         launcherJ -= l_playerp.size ^ parseInt(`${securityG}`);
      }
      if ((4.96 - securityG) >= 5.51 || 2 >= (l_playerp.size % (Math.max(3, 10)))) {
         securityG *= parseFloat(`${launcherJ}`);
      }
      for (let q = 0; q < 1; q++) {
          let manifestO = 3.0;
          let page5 = 1.0;
          let mathU: Array<any> = [915, 288, 775];
          let adultA: Array<any> = [String.fromCharCode(110,95,56,55,95,112,114,111,100,115,0), String.fromCharCode(97,108,97,109,111,102,105,114,101,95,51,95,50,53,0)];
          let appsr = 2.0;
         securityG += parseFloat(`${launcherJ ^ selectV.size}`);
         manifestO *= parseFloat(`${parseInt(`${page5}`)}`);
         page5 += parseInt(`${manifestO}`) - 1;
         mathU = [parseInt(`${manifestO}`)];
         adultA = [2];
         appsr /= Math.max(mathU.length ^ 1, 5);
      }
         securityG -= parseFloat(`${3}`);
       let anytimeV = 5.0;
       let privacy8 = 3.0;
         launcherJ |= 1;
      hooky = ballK.length > 29 && data2;
   }

    if (userInfo.message.includes("注册成功")) {

   if (reportG == shared8.length) {
       let step3 = 1.0;
       let actionF = 4;
       let close4 = 3.0;
       let readl = 1.0;
      while (3.72 > (readl + 2.52)) {
          let shoot6 = true;
          let episodesB = true;
          let navigationB = String.fromCharCode(98,117,109,112,95,120,95,49,55,0);
          let traminiU = 5;
          let mailD = false;
         readl *= parseFloat(`${2}`);
         shoot6 = (shoot6 ? !episodesB : shoot6);
         episodesB = traminiU > 96;
         navigationB += `${navigationB.length | 1}`;
         traminiU &= navigationB.length;
         mailD = !episodesB;
         break;
      }
      for (let u = 0; u < 2; u++) {
         actionF >>= Math.min(1, Math.abs(parseInt(`${close4}`) >> (Math.min(Math.abs(parseInt(`${readl}`)), 4))));
      }
      while (close4 > readl) {
         close4 -= parseFloat(`${3}`);
         break;
      }
          let langA = 0.0;
          let enewsZ = String.fromCharCode(113,95,57,55,95,101,113,117,101,115,116,0);
          let zhengpianT = String.fromCharCode(115,95,50,56,95,114,97,109,112,117,112,0);
         step3 /= Math.max(parseFloat(`${2 ^ parseInt(`${readl}`)}`), 4);
         langA /= Math.max(1, 1);
         enewsZ += `${(zhengpianT == String.fromCharCode(53,0) ? zhengpianT.length : parseInt(`${langA}`))}`;
          let updates5 = String.fromCharCode(118,101,114,105,102,121,105,110,103,95,112,95,57,53,0);
          let regengi = 1.0;
         readl += parseFloat(`${1}`);
         updates5 += `${(String.fromCharCode(71,0) == updates5 ? updates5.length : parseInt(`${regengi}`))}`;
         regengi *= 2 * parseInt(`${regengi}`);
          let filter7 = String.fromCharCode(99,95,51,57,95,114,101,115,99,104,101,100,117,108,101,0);
          let mbnativeadvancedk = 3.0;
         close4 /= Math.max(parseFloat(`${actionF * filter7.length}`), 4);
         filter7 += `${parseInt(`${mbnativeadvancedk}`) & parseInt(`${mbnativeadvancedk}`)}`;
         step3 *= parseFloat(`${3}`);
          let blacklistz = true;
         close4 += parseFloat(`${1}`);
         blacklistz = (blacklistz ? blacklistz : !blacklistz);
       let sentry3 = String.fromCharCode(106,95,55,53,95,103,97,109,109,97,102,105,108,116,101,114,0);
       let plusE = String.fromCharCode(118,109,100,97,117,100,105,111,95,49,95,57,48,0);
      if (sentry3.length > 3) {
         sentry3 = `${actionF}`;
      }
          let fastforwardm = 5;
         sentry3 = `${parseInt(`${close4}`)}`;
         fastforwardm %= Math.max(1 ^ fastforwardm, 5);
         step3 += parseFloat(`${3 * plusE.length}`);
      reportG /= Math.max(1, parseInt(`${readl}`) ^ 3);
   }
      navigation.navigate('SetUsername');

    } else if (userInfo.message.includes("登录成功")) {

   let sansK = pauseG.size <= 9744103;
   do {
      pauseG = new Map([[`${hooky}`, ((hooky ? 1 : 3) + ballK.length)]]);
      if (sansK) {
         break;
      }
   } while ((shared8.startsWith(`${pauseG.size}`)) && sansK);

      if (user.isVip()) {

      hooky = stringi > 4.53;
        await AsyncStorage.setItem("showAds", "false");
      } else {

      stringi *= sourcev.length;
        await AsyncStorage.setItem("showAds", "true");
      }

      await dispatch(changeScreenAction('登录成功'));

      shared8 += `${((data2 ? 2 : 3) | (hooky ? 3 : 3))}`;

      

   for (let d = 0; d < 2; d++) {
      ballK = `${2 << (Math.min(2, Math.abs(parseInt(`${reportG}`))))}`;
   }
      tt_humidity_guide.userCenterLoginSuccessTimesAnalytics();

       let clear9 = false;
          let textv = String.fromCharCode(117,95,52,56,95,97,99,116,105,118,97,116,105,111,110,115,0);
          let flyerj = 3.0;
          let h_imageB = String.fromCharCode(118,95,52,53,95,100,105,109,105,115,115,0);
         clear9 = textv.length == 35;
         textv += `${parseInt(`${flyerj}`) & 2}`;
         flyerj *= 3 << (Math.min(5, h_imageB.length));
         h_imageB += "2";
          let filledy = 1.0;
          let login8 = String.fromCharCode(121,95,57,48,95,115,101,108,101,99,116,0);
          let detailsh = String.fromCharCode(115,101,97,100,95,121,95,51,55,0);
         clear9 = !login8.includes(`${clear9}`);
         filledy -= 1 * detailsh.length;
         login8 = `${parseInt(`${filledy}`)}`;
         detailsh += `${(detailsh == String.fromCharCode(50,0) ? detailsh.length : parseInt(`${filledy}`))}`;
       let groupA: Array<any> = [946, 209];
      transferN = `${((clear9 ? 1 : 1) / (Math.max(pauseG.size, 1)))}`;
      ttDownTick.userCenterLoginSuccessTimesAnalytics();

   for (let t = 0; t < 2; t++) {
       let checkbox8 = String.fromCharCode(99,95,56,54,95,97,108,109,111,115,116,0);
       let commentG: Array<any> = [356, 500, 666];
         checkbox8 = `${commentG.length | 3}`;
         checkbox8 = `${checkbox8.length | 2}`;
      if (2 <= (checkbox8.length + commentG.length) && 3 <= (checkbox8.length + 2)) {
         commentG = [checkbox8.length >> (Math.min(Math.abs(1), 2))];
      }
         commentG.push(commentG.length % 2);
      while (checkbox8.endsWith(`${commentG.length}`)) {
          let episodej = 4;
          let downloade = String.fromCharCode(99,95,52,54,95,98,105,119,101,105,103,104,116,0);
          let popupo: Map<any, any> = new Map([[String.fromCharCode(101,112,111,108,108,95,48,95,49,55,0),710], [String.fromCharCode(111,95,53,56,95,105,100,101,110,116,0),79], [String.fromCharCode(118,95,55,56,95,117,110,116,114,97,99,107,0),689]]);
          let default_h_n = true;
         commentG.push(3);
         episodej += downloade.length - episodej;
         downloade = `${((default_h_n ? 3 : 5))}`;
         popupo.set(downloade, downloade.length / (Math.max(5, episodej)));
         default_h_n = null == popupo.get(`${episodej}`);
         break;
      }
      for (let j = 0; j < 3; j++) {
          let sinao = String.fromCharCode(120,95,51,53,95,118,97,99,117,117,109,0);
          let switch_d2 = String.fromCharCode(102,95,56,54,95,116,114,97,118,101,114,115,101,0);
          let z_viewI = 5.0;
          let suggestionf = 1.0;
         checkbox8 = `${(sinao == String.fromCharCode(116,0) ? sinao.length : checkbox8.length)}`;
         switch_d2 = "3";
         z_viewI /= Math.max(parseInt(`${suggestionf}`), 3);
         suggestionf += parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${z_viewI}`)), 1))}`);
      }
      reportG *= (sourcev == String.fromCharCode(57,0) ? sourcev.length : (hooky ? 3 : 2));
   }

      if (user.isVip()) {
        tt_humidity_guide.userCenterVipLoginSuccessTimesAnalytics();
      }
      

      if (onGooleLoginSuccess) onGooleLoginSuccess();
    }
  }

  const onPressTermNCondition = () => {
       let emptyd = String.fromCharCode(113,95,53,52,95,112,117,98,108,105,99,0);
    let inactiver = 3.0;
    let groupP = String.fromCharCode(114,95,56,53,95,112,114,101,100,105,99,116,111,114,0);
    let natived = 5;
    let subs1: Array<any> = [String.fromCharCode(118,105,100,101,111,104,100,114,95,112,95,56,49,0), String.fromCharCode(103,111,116,95,102,95,52,57,0), String.fromCharCode(107,102,119,114,105,116,101,95,53,95,49,56,0)];
    let turn8 = false;
    let feedbackZ: Map<any, any> = new Map([[String.fromCharCode(106,95,49,95,107,108,97,115,115,0),675], [String.fromCharCode(106,95,52,53,95,115,117,98,100,101,109,117,120,101,114,0),32], [String.fromCharCode(117,95,56,56,95,105,110,116,101,103,114,97,116,101,100,0),53]]);
    let selection2 = String.fromCharCode(108,101,118,105,110,115,111,110,95,103,95,49,48,0);
    let playI = 0.0;
    let corec = true;
    let apple_ = 1.0;
    let selectionk: Map<any, any> = new Map([[String.fromCharCode(117,95,54,50,95,102,116,118,109,110,111,100,101,0),826], [String.fromCharCode(104,113,120,100,115,112,95,118,95,54,52,0),154], [String.fromCharCode(99,111,110,118,95,97,95,57,57,0),461]]);
    let switch_zS: Array<any> = [752, 424, 377];
    let stepe = 3;
    let pathk = String.fromCharCode(107,95,50,49,95,116,111,107,101,110,115,0);
    let matchQ = 4.0;
   while (4 < (groupP.length - parseInt(`${inactiver}`)) && 4 < (parseInt(`${inactiver}`) - groupP.length)) {
      inactiver += parseFloat(`${natived + 3}`);
      break;
   }
      groupP = `${1 % (Math.max(3, parseInt(`${playI}`)))}`;
      feedbackZ = new Map([[emptyd, groupP.length]]);
      subs1.push(feedbackZ.size);
      apple_ += parseFloat(`${parseInt(`${inactiver}`)}`);
      playI += parseFloat(`${natived}`);
      inactiver += (parseFloat(`${parseInt(`${playI}`) >> (Math.min(3, Math.abs((corec ? 4 : 2))))}`));
       let moviesh = 1;
       let nativeI = 1.0;
         moviesh -= parseInt(`${nativeI}`) + 1;
      for (let g = 0; g < 2; g++) {
          let sigmobT = 2;
          let searchL: Array<any> = [624, 353, 640];
          let j_unlock1 = 3;
         nativeI += parseFloat(`${moviesh}`);
         sigmobT += sigmobT * 3;
         searchL = [searchL.length];
         j_unlock1 <<= Math.min(searchL.length, 4);
      }
      for (let v = 0; v < 3; v++) {
         moviesh ^= moviesh;
      }
          let singaporeL = String.fromCharCode(112,114,111,114,101,115,100,97,116,97,95,121,95,49,0);
          let transfer2 = 1.0;
          let gestureO = 4;
         nativeI -= parseFloat(`${moviesh}`);
         singaporeL += `${(String.fromCharCode(114,0) == singaporeL ? parseInt(`${transfer2}`) : singaporeL.length)}`;
         transfer2 += 1;
         gestureO *= 3;
         nativeI -= parseFloat(`${parseInt(`${nativeI}`)}`);
         moviesh %= Math.max(4, 1 + moviesh);
      groupP = `${parseInt(`${apple_}`) + 2}`;
   let mail5 = 7366775 >= feedbackZ.size;
   do {
      feedbackZ = new Map([[`${corec}`, (emptyd == String.fromCharCode(75,0) ? (corec ? 1 : 2) : emptyd.length)]]);
      if (mail5) {
         break;
      }
   } while (mail5 && (2 > (feedbackZ.size & subs1.length) || (2 & subs1.length) > 2));
       let smallg = String.fromCharCode(118,95,56,54,95,97,99,116,117,97,108,105,122,97,116,105,111,110,0);
       let flyerc = 4;
       let with_iT = 4.0;
      for (let t = 0; t < 3; t++) {
         flyerc >>= Math.min(3, smallg.length);
      }
      for (let t = 0; t < 2; t++) {
          let appleT: Map<any, any> = new Map([[String.fromCharCode(115,117,98,109,111,100,101,108,115,95,105,95,53,54,0),246], [String.fromCharCode(109,95,55,53,95,115,104,111,119,0),560]]);
          let modelo = String.fromCharCode(114,111,102,105,108,101,95,117,95,56,48,0);
          let tumbnailT = false;
          let sideD: Array<any> = [String.fromCharCode(105,110,99,114,95,52,95,49,54,0), String.fromCharCode(115,104,97,107,101,95,104,95,56,54,0)];
         flyerc *= 1 % (Math.max(flyerc, 1));
         appleT.set(modelo, modelo.length);
         tumbnailT = 7 <= modelo.length;
         sideD.push(((tumbnailT ? 3 : 1) % 2));
      }
      while (2 >= (flyerc * parseInt(`${with_iT}`)) && (with_iT * flyerc) >= 4.85) {
         flyerc >>= Math.min(1, Math.abs(flyerc & 1));
         break;
      }
      if ((5.63 / (Math.max(9, with_iT))) > 3.11) {
          let castM = String.fromCharCode(101,120,99,105,116,97,116,105,111,110,95,121,95,56,49,0);
          let backgroundf = false;
         smallg = `${2 ^ parseInt(`${with_iT}`)}`;
         castM = "2";
         backgroundf = castM.length == 20 || backgroundf;
      }
         flyerc >>= Math.min(5, Math.abs(3 << (Math.min(4, Math.abs(parseInt(`${with_iT}`))))));
      while (flyerc > with_iT) {
          let activityo = String.fromCharCode(100,95,51,55,95,114,97,115,116,101,114,0);
         flyerc += flyerc;
         activityo = `${activityo.length & 1}`;
         break;
      }
          let dataQ: Array<any> = [379, 509, 687];
          let signinupm = 4.0;
         flyerc *= dataQ.length * parseInt(`${signinupm}`);
      while ((flyerc / (Math.max(with_iT, 10))) >= 2.51) {
          let uploadK: Map<any, any> = new Map([[String.fromCharCode(104,109,97,99,95,103,95,55,49,0),570], [String.fromCharCode(97,117,116,104,111,114,105,122,101,95,54,95,53,48,0),851]]);
         flyerc |= 1;
         uploadK = new Map([[`${uploadK.size}`, uploadK.size]]);
         break;
      }
         flyerc += flyerc << (Math.min(Math.abs(1), 5));
      subs1.push(switch_zS.length);
       let sharen = 5.0;
       let styleM = String.fromCharCode(102,95,53,56,95,105,110,118,105,116,101,0);
       let forward9 = 1.0;
      for (let w = 0; w < 1; w++) {
          let shirtX: Map<any, any> = new Map([[String.fromCharCode(116,95,54,51,95,97,110,110,111,117,110,99,101,109,101,110,116,0),String.fromCharCode(112,114,111,102,114,101,115,115,95,110,95,50,55,0)], [String.fromCharCode(102,98,100,101,118,95,120,95,57,51,0),String.fromCharCode(115,97,116,117,114,97,116,101,95,54,95,57,48,0)], [String.fromCharCode(107,95,50,49,95,109,105,99,114,111,100,118,100,0),String.fromCharCode(109,95,54,95,100,101,99,105,112,104,101,114,0)]]);
          let leftO = String.fromCharCode(97,95,50,52,95,97,115,105,110,107,0);
         styleM += `${parseInt(`${forward9}`)}`;
         shirtX.set(`${leftO}`, leftO.length);
      }
      for (let k = 0; k < 1; k++) {
         sharen -= (String.fromCharCode(116,0) == styleM ? styleM.length : parseInt(`${sharen}`));
      }
      while (2.100 >= (sharen / 2.92)) {
          let x_lockG: Array<any> = [798, 674];
         sharen *= parseInt(`${forward9}`);
         x_lockG.push(x_lockG.length);
         break;
      }
      let injury_ = forward9 <= 6106946.0;
      do {
          let unreada = 4.0;
          let transferg: Array<any> = [57, 541, 143];
          let eactu = String.fromCharCode(119,95,57,52,95,112,105,116,99,104,102,105,108,116,101,114,0);
         forward9 -= eactu.length;
         unreada -= parseFloat(`${parseInt(`${unreada}`) + transferg.length}`);
         transferg = [1];
         eactu += `${transferg.length}`;
         if (injury_) {
            break;
         }
      } while (((sharen * forward9) >= 5.44 && (sharen * 5.44) >= 5.50) && injury_);
      let updates5 = forward9 <= 7710727.0;
      do {
          let frame_qvy = String.fromCharCode(115,116,114,105,100,101,98,95,50,95,49,55,0);
          let downd = 4;
          let b_lock4 = String.fromCharCode(99,95,49,50,95,102,114,101,113,0);
          let champion_ = String.fromCharCode(105,110,116,101,103,101,114,115,95,98,95,52,53,0);
          let gpayj: Map<any, any> = new Map([[String.fromCharCode(115,99,97,110,116,97,98,108,101,115,95,103,95,54,0),true ], [String.fromCharCode(104,95,50,49,95,116,114,101,101,119,114,105,116,101,114,0),true ], [String.fromCharCode(100,101,99,111,100,101,114,105,110,105,116,95,48,95,51,54,0),false ]]);
         forward9 /= Math.max(3, parseInt(`${forward9}`) % (Math.max(7, downd)));
         frame_qvy = `${(champion_ == String.fromCharCode(107,0) ? champion_.length : gpayj.size)}`;
         downd /= Math.max(1, gpayj.size & 3);
         b_lock4 = `${1 >> (Math.min(3, frame_qvy.length))}`;
         if (updates5) {
            break;
         }
      } while (updates5 && ((sharen - 2) > 4.93));
       let kuaishoux: Array<any> = [String.fromCharCode(97,95,55,49,95,97,114,116,105,102,97,99,116,115,0), String.fromCharCode(114,101,99,111,109,109,101,110,100,95,103,95,54,56,0), String.fromCharCode(121,99,98,99,114,95,51,95,52,49,0)];
       let applicationb: Array<any> = [568, 377];
         sharen *= 1;
         sharen -= parseInt(`${forward9}`) >> (Math.min(applicationb.length, 1));
          let settings0 = false;
         styleM += `${parseInt(`${sharen}`) ^ applicationb.length}`;
         settings0 = settings0 && !settings0;
      apple_ -= parseFloat(`${3}`);
   if (5.83 < (5.24 + inactiver) && corec) {
       let target2 = 3.0;
      while (target2 == 3.36) {
         target2 += parseFloat(`${parseInt(`${target2}`) * 1}`);
         break;
      }
      let shootJ = 7310816.0 <= target2;
      do {
         target2 /= Math.max(parseFloat(`${parseInt(`${target2}`) >> (Math.min(2, Math.abs(3)))}`), 4);
         if (shootJ) {
            break;
         }
      } while ((5.54 >= target2) && shootJ);
         target2 -= parseFloat(`${parseInt(`${target2}`)}`);
      corec = target2 <= playI;
   }
      inactiver -= parseFloat(`${groupP.length | 1}`);
      playI += (parseFloat(`${String.fromCharCode(77,0) == emptyd ? emptyd.length : selection2.length}`));
   let themej = subs1.length <= 6723366;
   do {
       let source8 = String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,95,106,95,50,50,0);
       let downloaded3 = 5;
      while ((downloaded3 << (Math.min(source8.length, 4))) > 1 && (source8.length << (Math.min(Math.abs(1), 3))) > 5) {
         source8 = `${source8.length & 2}`;
         break;
      }
      while (3 <= (downloaded3 % (Math.max(5, 5)))) {
          let zhubov = 4;
          let y_managere = String.fromCharCode(100,101,102,97,117,108,116,95,122,95,51,53,0);
          let crown2: Array<any> = [63, 194, 320];
          let spinnerV = 3.0;
         source8 = "2";
         zhubov &= 3 / (Math.max(4, y_managere.length));
         y_managere += `${crown2.length & y_managere.length}`;
         crown2 = [parseInt(`${spinnerV}`) + 1];
         spinnerV *= parseFloat(`${zhubov}`);
         break;
      }
      for (let t = 0; t < 3; t++) {
          let unselecteda = 2;
          let huawei2 = 1.0;
          let dangerX = false;
          let huaweix = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,95,55,95,49,51,0);
          let humidityM = 1.0;
         downloaded3 /= Math.max(((dangerX ? 5 : 4) - parseInt(`${humidityM}`)), 5);
         unselecteda |= unselecteda;
         huawei2 *= parseFloat(`${huaweix.length}`);
         dangerX = parseInt(`${huawei2}`) > huaweix.length;
         humidityM /= Math.max(2, 4);
      }
         downloaded3 += 1;
         source8 = `${2 % (Math.max(4, downloaded3))}`;
      for (let n = 0; n < 3; n++) {
         downloaded3 >>= Math.min(2, Math.abs(1));
      }
      subs1.push(1);
      if (themej) {
         break;
      }
   } while (themej && ((parseFloat(`${subs1.length}`) * apple_) < 1.99));
   while (corec) {
      corec = (switch_zS.length ^ selectionk.size) == 78;
      break;
   }
   if (3 == (selectionk.size | 5)) {
      selectionk.set(`${corec}`, ((corec ? 5 : 4) / 2));
   }
   let temperatureD = 9432855.0 >= playI;
   do {
      playI += (parseFloat(`${selection2 == String.fromCharCode(73,0) ? selection2.length : parseInt(`${apple_}`)}`));
      if (temperatureD) {
         break;
      }
   } while ((2.24 == (2.14 / (Math.max(4, playI))) || 3.12 == (apple_ / 2.14)) && temperatureD);
      natived *= 1;
   for (let h = 0; h < 3; h++) {
      selection2 = `${(String.fromCharCode(69,0) == pathk ? selectionk.size : pathk.length)}`;
   }
   if ((selection2.length << (Math.min(2, Math.abs(natived)))) == 2) {
      natived >>= Math.min(emptyd.length, 3);
   }
   for (let c = 0; c < 3; c++) {
      selection2 += "1";
   }
   for (let p = 0; p < 2; p++) {
      apple_ *= (parseFloat(`${pathk == String.fromCharCode(103,0) ? pathk.length : parseInt(`${apple_}`)}`));
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
       let switch_ci = 2;
    let networku = String.fromCharCode(106,95,53,57,95,97,100,97,112,116,97,116,105,111,110,115,101,116,0);
    let vietnam9 = String.fromCharCode(97,99,113,117,97,110,116,95,101,95,50,57,0);
    let contextR = String.fromCharCode(112,95,57,54,95,112,111,114,116,0);
    let heartp: Array<any> = [385, 790, 717];
    let d_countO = String.fromCharCode(112,114,111,98,101,114,95,99,95,54,50,0);
    let groupK = 4.0;
    let canvasb = 0.0;
    let grouph = false;
    let utilsK = String.fromCharCode(115,111,114,116,101,114,95,111,95,57,53,0);
    let register_xad = 5.0;
      vietnam9 = `${parseInt(`${canvasb}`) | 2}`;

    if (isSubmitting) return;

   while (networku != String.fromCharCode(101,0) && contextR != String.fromCharCode(80,0)) {
       let single1 = String.fromCharCode(113,95,56,53,95,99,108,97,110,103,0);
       let refreshh = false;
       let rewindT = 3.0;
       let overlaye: Map<any, any> = new Map([[String.fromCharCode(112,107,116,99,112,121,95,118,95,51,49,0),false ], [String.fromCharCode(106,95,52,95,115,101,103,116,114,101,101,0),true ], [String.fromCharCode(110,95,53,54,95,108,105,110,107,115,0),false ]]);
       let upload6 = String.fromCharCode(111,118,101,114,114,105,100,105,110,103,95,121,95,51,52,0);
      let stylej = refreshh ? !refreshh : refreshh;
      do {
          let sortF: Map<any, any> = new Map([[String.fromCharCode(118,95,49,49,95,109,101,116,97,108,0),String.fromCharCode(119,95,53,54,95,109,101,115,104,101,115,0)], [String.fromCharCode(117,110,116,114,117,115,116,101,100,95,56,95,56,54,0),String.fromCharCode(106,95,53,51,95,112,98,107,100,102,0)], [String.fromCharCode(115,105,109,117,108,97,116,105,111,110,95,98,95,57,0),String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,100,95,52,95,49,57,0)]]);
         refreshh = 68.14 <= rewindT;
         sortF = new Map([[`${sortF.size}`, sortF.size]]);
         if (stylej) {
            break;
         }
      } while ((!refreshh) && stylej);
      let basketball2 = 7939434 >= overlaye.size;
      do {
         overlaye = new Map([[`${refreshh}`, (single1 == String.fromCharCode(69,0) ? (refreshh ? 3 : 1) : single1.length)]]);
         if (basketball2) {
            break;
         }
      } while (basketball2 && ((overlaye.size / 2) <= 3 || !refreshh));
          let privacyT = 0;
         overlaye = new Map([[`${refreshh}`, (single1.length ^ (refreshh ? 2 : 3))]]);
         privacyT *= privacyT;
          let detailsn = 4;
          let activep: Map<any, any> = new Map([[String.fromCharCode(104,95,54,95,97,112,112,108,101,0),456], [String.fromCharCode(97,95,56,54,95,112,111,114,116,115,0),349], [String.fromCharCode(97,105,109,100,95,113,95,55,51,0),265]]);
         overlaye.set(`${upload6}`, upload6.length);
         detailsn ^= detailsn;
         activep = new Map([[`${activep.size}`, 1]]);
       let servicec = String.fromCharCode(112,114,101,112,97,114,105,110,103,95,104,95,57,53,0);
       let othert = String.fromCharCode(106,95,48,95,99,111,110,100,0);
          let sell3: Array<any> = [767, 535, 307];
          let favoriteH = false;
         refreshh = (58 == (single1.length ^ (!refreshh ? single1.length : 58)));
         sell3.push(sell3.length);
         favoriteH = !favoriteH;
      while (upload6.includes(`${rewindT}`)) {
         rewindT += ((refreshh ? 3 : 5) * 3);
         break;
      }
      while (rewindT <= othert.length) {
         rewindT += overlaye.size + parseInt(`${rewindT}`);
         break;
      }
      for (let l = 0; l < 3; l++) {
         single1 += `${overlaye.size ^ parseInt(`${rewindT}`)}`;
      }
          let a_centerW = String.fromCharCode(99,111,110,110,101,99,116,105,111,110,115,95,48,95,50,53,0);
          let window_dZ = String.fromCharCode(103,119,101,105,95,112,95,51,48,0);
         refreshh = a_centerW.length == 10;
         a_centerW = "1";
         window_dZ = "1";
         othert = `${(String.fromCharCode(105,0) == upload6 ? upload6.length : servicec.length)}`;
      networku += `${heartp.length}`;
      break;
   }

    if (isReadTermNCondition == false) {

   if (1.87 < groupK) {
      groupK *= 1;
   }
      return;

   for (let k = 0; k < 1; k++) {
       let iconC = String.fromCharCode(105,100,99,105,110,95,122,95,53,52,0);
       let rankI = String.fromCharCode(113,95,54,51,95,114,101,108,111,97,100,0);
       let largeN: Map<any, any> = new Map([[String.fromCharCode(106,100,109,97,105,110,99,116,95,50,95,54,56,0),false ], [String.fromCharCode(114,95,52,53,95,99,121,99,108,101,0),true ], [String.fromCharCode(99,111,114,110,101,114,95,53,95,56,56,0),false ]]);
         iconC += `${rankI.length}`;
          let shrink0 = 2;
          let i_countL = 4.0;
          let flyer7 = 4.0;
         iconC = "1";
         shrink0 += parseInt(`${flyer7}`);
         i_countL *= 2 / (Math.max(6, shrink0));
          let giftw = 1.0;
         largeN.set(iconC, largeN.size << (Math.min(iconC.length, 3)));
         giftw /= Math.max(parseFloat(`${parseInt(`${giftw}`)}`), 2);
          let package_1pl = String.fromCharCode(122,95,56,0);
          let gesturesn = 1.0;
          let footbally: Array<any> = [46, 70, 516];
         largeN = new Map([[package_1pl, package_1pl.length / 3]]);
         gesturesn += parseInt(`${gesturesn}`) - 3;
         footbally = [footbally.length];
      if (iconC.length < 1) {
         iconC += `${iconC.length - rankI.length}`;
      }
          let kleviny: Array<any> = [763, 310];
         iconC = `${kleviny.length * iconC.length}`;
       let roomm: Map<any, any> = new Map([[String.fromCharCode(112,95,55,51,95,102,97,110,116,111,109,0),String.fromCharCode(106,95,53,55,95,115,117,112,112,111,114,116,115,0)], [String.fromCharCode(112,114,115,99,116,112,95,114,95,51,56,0),String.fromCharCode(110,101,105,103,104,98,111,117,114,95,105,95,57,55,0)]]);
         largeN = new Map([[rankI, rankI.length]]);
         rankI = `${(String.fromCharCode(99,0) == rankI ? rankI.length : largeN.size)}`;
      contextR = `${rankI.length}`;
   }
    }

    const formattedLoginValue = loginType === 'phone' ? loginValue.replace(/\s/g, '') : loginValue;

    

       let crownU = 1.0;
       let promotion0 = 1;
       let sortw = 0.0;
         promotion0 /= Math.max(5, 2);
      if (4.17 < (crownU / (Math.max(4, 3)))) {
         sortw += parseFloat(`${1 >> (Math.min(Math.abs(promotion0), 3))}`);
      }
      for (let h = 0; h < 2; h++) {
         promotion0 *= promotion0 | 3;
      }
          let photoR = String.fromCharCode(119,95,57,52,95,99,111,99,111,115,100,120,0);
          let turn6 = false;
         promotion0 %= Math.max(3, photoR.length);
         photoR = `${(3 + (turn6 ? 1 : 2))}`;
         sortw *= parseFloat(`${parseInt(`${crownU}`) + 2}`);
      for (let h = 0; h < 2; h++) {
          let tick4 = 0.0;
          let v_player8 = String.fromCharCode(114,95,51,56,95,102,108,97,116,0);
          let reactX = String.fromCharCode(113,95,57,53,95,116,101,114,109,115,0);
          let aways = false;
          let middleE = String.fromCharCode(109,95,57,51,95,97,115,115,105,103,110,109,101,110,116,0);
         promotion0 >>= Math.min(2, parseInt(`${Math.abs(((aways ? 5 : 1) >> (Math.min(Math.abs(1), 4))))}`));
         tick4 *= middleE.length;
         v_player8 += `${(middleE == String.fromCharCode(65,0) ? v_player8.length : middleE.length)}`;
         reactX = `${middleE.length}`;
         aways = reactX == v_player8;
      }
      for (let t = 0; t < 3; t++) {
         sortw *= parseFloat(`${parseInt(`${crownU}`) / 1}`);
      }
      for (let v = 0; v < 3; v++) {
          let signinupU: Map<any, any> = new Map([[String.fromCharCode(99,109,97,99,95,97,95,54,48,0),907], [String.fromCharCode(118,95,56,50,95,97,118,99,99,0),469]]);
          let assist2 = 2;
          let contexti = String.fromCharCode(100,101,99,97,121,95,100,95,56,55,0);
          let libcrashsdkP = String.fromCharCode(99,95,51,51,95,105,115,109,101,109,115,101,116,0);
         sortw -= parseFloat(`${1 >> (Math.min(5, Math.abs(signinupU.size)))}`);
         signinupU.set(contexti, 1 % (Math.max(7, assist2)));
         assist2 >>= Math.min(1, Math.abs(3 / (Math.max(8, libcrashsdkP.length))));
         contexti += `${(String.fromCharCode(89,0) == libcrashsdkP ? contexti.length : libcrashsdkP.length)}`;
      }
         promotion0 >>= Math.min(Math.abs(parseInt(`${sortw}`) + 3), 5);
      vietnam9 = "3";
    

   let gesturesE = networku == String.fromCharCode(116,57,114,55,113,0);
   do {
      networku += `${1 + networku.length}`;
      if (gesturesE) {
         break;
      }
   } while ((3 > (3 >> (Math.min(3, networku.length)))) && gesturesE);
    

   for (let c = 0; c < 3; c++) {
       let viewerl = 2.0;
       let linkZ = String.fromCharCode(116,104,114,101,115,95,103,95,49,56,0);
         viewerl -= parseInt(`${viewerl}`) * linkZ.length;
      for (let r = 0; r < 2; r++) {
         viewerl *= parseInt(`${viewerl}`) >> (Math.min(linkZ.length, 5));
      }
         viewerl += (String.fromCharCode(49,0) == linkZ ? linkZ.length : parseInt(`${viewerl}`));
       let reportT = String.fromCharCode(114,117,110,110,101,114,95,49,95,52,54,0);
      while (linkZ.startsWith(`${viewerl}`)) {
         viewerl /= Math.max(4, 2);
         break;
      }
       let register_gw3 = String.fromCharCode(106,95,54,52,95,100,101,102,97,117,108,0);
       let reportw = String.fromCharCode(103,95,55,55,95,116,114,101,97,100,0);
      d_countO = `${heartp.length}`;
   }
    

      heartp = [vietnam9.length & switch_ci];

    if (formattedLoginValue === "" || loginValueErrMsg !== null) {
      setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
      return;
    }

    try {

      groupK += 1;
      setSubmitting(true);

      vietnam9 = "3";

      await ttTramini.signinupUser({
        loginType: loginType === 'email' ? 'EMAIL' : 'SMS',
        email: loginType === 'email' ? loginValue : undefined,
        
        phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + formattedLoginValue : undefined,
        countryId: loginType === 'phone' ? countryPhoneSelected?.country_id : undefined,
        referralCode: referralCode,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      setSubmitting(false);

      d_countO = `${(vietnam9.length << (Math.min(2, Math.abs((grouph ? 5 : 3)))))}`;
      setLoginValueErrMsg(err);

      grouph = (vietnam9.length + heartp.length) < 83;
      return;
    }

    setSubmitting(false);

      switch_ci /= Math.max(3 | networku.length, 3);

    dispatch(hideBottomSheetAction());

      groupK -= contextR.length / (Math.max(10, d_countO.length));
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

type ttHelperManager = {
  loginType: 'email' | 'phone',
  loginValue: string,
  referralCode: string,
  loginValueErrMsg: string | null,
  referralCodeErrMsg: string | null,
  isReadTermNCondition: boolean,
  countryPhoneSelected?: ttGradleTrash,
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
}: ttHelperManager) => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>「登录/注册」解锁更多精彩内容！</Text>
      <Text style={styles.subtitle}>登录后可管理您的账号，多端同步观看历史和收藏夹</Text>
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

        {/* <TouchableOpacity
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
          </TouchableOpacity> */}
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

              <DropdownIcon />
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
            source={require("@static/images/profile/cricket_tick.png")}
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
                source={require("@static/images/profile/matchesStringUpdate_ex.png")}
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
              source={require("@static/images/invite/newsSendSlider.png")}
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
                source={require("@static/images/profile/matchesStringUpdate_ex.png")}
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
              source={require("@static/images/invite/newsSendSlider.png")}
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
        }}
        onPressPrivacyPolicy={() => {
          dispatch(navigateToProfileScreen());
          navigation.navigate("隐私政策");
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
        <GmailIcon style={{ marginRight: 10, }} />
        <Text style={{
          flex: 1,
          textAlign: 'center',
          color: 'white',
          fontSize: 16,
        }}>
          继续使用 Google
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
