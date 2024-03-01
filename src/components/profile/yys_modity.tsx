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
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/yys_frame";
import {
  changeScreenAction,
  hideBottomSheetAction,
  hideLoginAction,
  navigateToProfileScreen,
} from "@redux/actions/yys_runtimescheduler";
import SpinnerOverlay from "../modal/yys_home";
import PhoneIcon from '@static/images/baiduReducer.svg';
import MailIcon from '@static/images/reactFavorite.svg';
import GmailIcon from '@static/images/moviesLibflipperProgress.svg';
import DropdownIcon from '@static/images/typingMatchReminder.svg';
import { CountryPhoneList } from "./yys_umeng";
import FastImage from '../common/yys_vertical_collection';
import { yys_Down } from "@type/yys_libzeus";
import { ReadAgreementPrivacyPolicy } from "./yys_volume";

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useQuery } from "@tanstack/react-query";
import { showToast } from "../../Sports/utility/yys_team_copy";
import AsyncStorage from "@react-native-async-storage/async-storage";
import yys_event_common from "../../../Umeng/yys_event_common";
import { useDispatch } from "react-redux";
import { addUserAuthState } from "@redux/actions/yys_gesture";
import { yys_GesturesConst } from "@api";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import yys_Filled from "../../../AppsFlyer/yys_analytic";


export type yys_VideoLibreanimated = {
  resetValue: () => void,
}

type yys_ConfigureUimanager = {
  onGooleLoginSuccess?: () => void,
}

export const SigninupForm = forwardRef<yys_VideoLibreanimated, yys_ConfigureUimanager>(({
  onGooleLoginSuccess,
}: yys_ConfigureUimanager, ref) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [loginType, setloginType] = useState<'email' | 'phone'>('email');

  const [loginValue, setLoginValue] = useState(''); 
  const [referralCode, setReferralCode] = useState('');
  const [loginValueErrMsg, setLoginValueErrMsg] = useState<string | null>(null); 
  const [referralCodeErrMsg, setReferralCodeErrMsg] = useState<string | null>(null);
  const [isReadTermNCondition, setReadTermNCondition] = useState(true);

  
  const [isShowCountryList, setShowCountryList] = useState(false);
  const [countryPhoneSelected, setCountryPhoneSelected] = useState<yys_Down>();

  
  const [isSubmitting, setSubmitting] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  const userState = useSelector<yys_HejiCricket>('userReducer');

  const { data: countryPhoneOptions } = useQuery({
    queryKey: ["CountryPhoneOptions"],
    queryFn: () => yys_GesturesConst.getCountries(),
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
       let stylesR = 5;
    let logoutP = String.fromCharCode(104,95,51,54,95,100,114,97,119,103,114,105,100,0);
    let forwardd: Array<any> = [912, 459];
    let specG = String.fromCharCode(105,95,57,57,95,105,109,97,103,101,115,0);
    let shared6 = String.fromCharCode(116,121,112,101,99,111,100,101,95,48,95,53,55,0);
    let banner0 = String.fromCharCode(102,95,54,56,95,120,109,108,101,115,99,97,112,101,0);
    let resendk = 2;
    let tumbnail2 = String.fromCharCode(120,95,56,57,95,115,117,98,116,121,112,101,115,0);
    let benefits = String.fromCharCode(120,95,55,56,95,118,105,101,119,115,0);
    let eacts = String.fromCharCode(120,95,49,95,116,114,117,110,107,0);
    let security8 = String.fromCharCode(97,108,101,114,116,95,53,95,48,0);
    let clockj = String.fromCharCode(121,95,53,57,95,103,101,110,101,114,105,99,115,0);
   let tinit_5K = 9159146 >= banner0.length;
   do {
      banner0 = `${specG.length << (Math.min(logoutP.length, 3))}`;
      if (tinit_5K) {
         break;
      }
   } while ((stylesR >= 4) && tinit_5K);
   for (let n = 0; n < 1; n++) {
      benefits = `${(eacts == String.fromCharCode(111,0) ? stylesR : eacts.length)}`;
   }
      logoutP = `${resendk}`;
   if (benefits.length >= 5) {
      benefits = "2";
   }
   while (2 == (stylesR % 5) && 1 == (5 % (Math.max(2, stylesR)))) {
       let anytime2 = String.fromCharCode(109,117,108,116,105,115,116,101,112,95,51,95,53,52,0);
       let bingg = String.fromCharCode(100,101,108,101,116,101,95,97,95,53,57,0);
          let condensedm = String.fromCharCode(102,114,101,101,116,121,112,101,95,97,95,57,0);
          let serviceC = String.fromCharCode(113,95,49,54,95,108,111,99,97,116,101,100,0);
         anytime2 += `${condensedm.length}`;
         condensedm += `${serviceC.length | 2}`;
         serviceC += "3";
         bingg += `${anytime2.length >> (Math.min(bingg.length, 5))}`;
          let searchbar1 = 0.0;
          let runtimeschedulerd = String.fromCharCode(112,95,54,57,95,98,108,111,99,107,101,100,0);
          let librrch = 0.0;
         bingg += `${(String.fromCharCode(110,0) == runtimeschedulerd ? runtimeschedulerd.length : parseInt(`${searchbar1}`))}`;
         searchbar1 /= Math.max(parseInt(`${librrch}`) >> (Math.min(4, Math.abs(parseInt(`${librrch}`)))), 3);
      if (anytime2 != String.fromCharCode(48,0)) {
         bingg += `${(anytime2 == String.fromCharCode(51,0) ? anytime2.length : bingg.length)}`;
      }
         bingg = `${2 - anytime2.length}`;
         anytime2 += "3";
      stylesR %= Math.max(1, resendk);
      break;
   }
   let gradlewP = 8456796 <= stylesR;
   do {
      stylesR &= banner0.length + 1;
      if (gradlewP) {
         break;
      }
   } while ((!tumbnail2.endsWith(`${stylesR}`)) && gradlewP);

    setloginType('email');

      benefits = `${stylesR % (Math.max(3, resendk))}`;
   while (eacts.length <= resendk) {
       let t_positionG: Array<any> = [655, 958];
      while ((3 | t_positionG.length) <= 2 && 4 <= (t_positionG.length | 3)) {
         t_positionG.push(t_positionG.length);
         break;
      }
         t_positionG.push(t_positionG.length - t_positionG.length);
         t_positionG.push(1);
      eacts = `${2 & eacts.length}`;
      break;
   }
   while (4 <= (resendk << (Math.min(Math.abs(1), 2)))) {
       let pressureW = true;
       let gpayE = false;
       let typesz = String.fromCharCode(115,98,114,101,115,101,114,118,101,95,56,95,53,54,0);
       let vietnaml = String.fromCharCode(105,95,48,95,101,115,116,97,98,108,105,115,104,0);
       let libreactL = String.fromCharCode(115,117,98,115,99,114,105,112,116,95,57,95,51,49,0);
       let flippern = String.fromCharCode(117,110,109,97,115,107,95,48,95,53,49,0);
       let plashY = String.fromCharCode(108,95,56,48,95,104,113,112,101,108,0);
          let reactV = 4.0;
          let filedZ = String.fromCharCode(103,97,117,115,115,105,97,110,95,117,95,54,0);
         typesz = "2";
         reactV *= parseFloat(`${1 * filedZ.length}`);
         filedZ += "2";
         plashY += "2";
       let mapbufferM = String.fromCharCode(116,111,114,103,98,95,104,95,51,54,0);
      let progressY = flippern == String.fromCharCode(101,101,49,98,110,113,117,111,0);
      do {
         flippern += "2";
         if (progressY) {
            break;
         }
      } while ((1 > flippern.length) && progressY);
      while (typesz.length > 3) {
          let overlay_: Array<any> = [620, 148, 880];
          let vignetteP = 1.0;
         typesz = `${typesz.length}`;
         overlay_ = [1 ^ overlay_.length];
         vignetteP *= 3;
         break;
      }
         typesz += `${plashY.length}`;
      let type_uk = typesz == String.fromCharCode(53,52,54,104,113,95,116,0);
      do {
         typesz = `${((pressureW ? 5 : 4) % (Math.max(mapbufferM.length, 7)))}`;
         if (type_uk) {
            break;
         }
      } while (type_uk && (mapbufferM != String.fromCharCode(117,0) || typesz.length <= 4));
          let reward_ = true;
          let team7 = 2;
          let episodet = String.fromCharCode(115,117,112,101,114,95,56,95,49,57,0);
         flippern = `${team7}`;
         reward_ = episodet.endsWith(`${reward_}`);
         team7 -= episodet.length;
          let hookI = String.fromCharCode(118,99,104,113,95,98,95,49,55,0);
          let indexP = String.fromCharCode(108,95,54,50,95,117,105,110,116,112,111,119,0);
          let roundM: Array<any> = [945, 991];
         flippern = "3";
         hookI = `${roundM.length - hookI.length}`;
         indexP = `${indexP.length / 2}`;
         roundM.push(roundM.length);
       let rewardk = String.fromCharCode(118,109,104,100,95,51,95,54,51,0);
      let colorss = flippern == String.fromCharCode(98,114,95,57,114,98,55,52,108,0);
      do {
         flippern = `${rewardk.length}`;
         if (colorss) {
            break;
         }
      } while ((flippern.endsWith(`${rewardk.length}`)) && colorss);
          let transfere = true;
          let langkeyl: Map<any, any> = new Map([[String.fromCharCode(117,112,99,97,108,108,95,116,95,50,56,0),447], [String.fromCharCode(110,95,56,49,95,112,114,111,108,111,110,103,0),999], [String.fromCharCode(108,95,55,57,95,98,117,116,116,111,110,115,0),552]]);
         vietnaml += `${(String.fromCharCode(66,0) == libreactL ? libreactL.length : mapbufferM.length)}`;
         transfere = langkeyl.size <= 63;
         langkeyl.set(`${transfere}`, langkeyl.size >> (Math.min(Math.abs(1), 4)));
      if (!gpayE && libreactL.length >= 1) {
         libreactL += `${mapbufferM.length}`;
      }
         rewardk += `${1 ^ typesz.length}`;
      resendk -= shared6.length;
      break;
   }
   let hook8 = 5182807 >= benefits.length;
   do {
      benefits = `${security8.length}`;
      if (hook8) {
         break;
      }
   } while (hook8 && (benefits.length <= 5));
   if (2 <= benefits.length) {
       let ewardedY = 2.0;
       let plashj = String.fromCharCode(107,95,54,51,95,114,101,97,100,109,101,0);
       let libavdeviceG = String.fromCharCode(122,95,51,49,95,111,110,121,120,99,0);
      let reminder1 = ewardedY >= 9784191.0;
      do {
          let filter5 = String.fromCharCode(97,95,48,95,105,110,110,101,114,0);
         ewardedY *= filter5.length * 1;
         if (reminder1) {
            break;
         }
      } while (reminder1 && (3.62 == (ewardedY * 5.93)));
          let teamK = String.fromCharCode(99,104,97,114,108,101,110,95,118,95,56,52,0);
         ewardedY -= 1;
         teamK = `${teamK.length | teamK.length}`;
      while ((plashj.length & 3) > 5) {
         ewardedY *= 3;
         break;
      }
       let cornerp = true;
         plashj += `${plashj.length ^ libavdeviceG.length}`;
      while (!plashj.startsWith(`${ewardedY}`)) {
          let sheett = String.fromCharCode(115,99,114,111,108,108,97,98,108,101,95,122,95,52,52,0);
          let anytimen = 1;
          let emoji9: Map<any, any> = new Map([[String.fromCharCode(108,95,49,55,95,114,116,99,112,0),304], [String.fromCharCode(109,115,112,101,108,95,54,95,49,48,48,0),559]]);
         ewardedY *= parseInt(`${ewardedY}`) + 3;
         sheett = `${sheett.length}`;
         anytimen &= 3 - emoji9.size;
         emoji9.set(sheett, 1 >> (Math.min(1, Math.abs(anytimen))));
         break;
      }
      while (plashj == libavdeviceG) {
          let settingsX = String.fromCharCode(103,95,53,95,101,109,115,99,114,105,112,116,101,110,0);
         libavdeviceG += `${(String.fromCharCode(75,0) == settingsX ? (cornerp ? 3 : 2) : settingsX.length)}`;
         break;
      }
      if (cornerp || libavdeviceG.length <= 5) {
         libavdeviceG = `${(plashj == String.fromCharCode(80,0) ? parseInt(`${ewardedY}`) : plashj.length)}`;
      }
       let style9 = 3.0;
       let textlayoutmanagerq = 1.0;
      benefits = `${eacts.length}`;
   }
   for (let f = 0; f < 3; f++) {
      security8 = `${clockj.length + logoutP.length}`;
   }
    setLoginValue('');

      clockj += `${logoutP.length & 1}`;
   while (3 <= clockj.length) {
       let combineI: Array<any> = [187, 723];
       let libjsinspectorC = 2.0;
       let aboutp = String.fromCharCode(116,95,54,50,95,99,114,99,99,0);
       let foreground3: Map<any, any> = new Map([[String.fromCharCode(105,95,53,52,95,117,116,116,111,110,0),583], [String.fromCharCode(117,95,50,52,95,103,114,97,118,105,116,121,0),807]]);
       let android6 = 2.0;
         foreground3 = new Map([[`${foreground3.size}`, aboutp.length]]);
      if ((4.80 * android6) <= 1.0) {
         foreground3 = new Map([[`${foreground3.size}`, parseInt(`${libjsinspectorC}`) % (Math.max(2, 10))]]);
      }
      if ((aboutp.length | 3) <= 5 || (libjsinspectorC * parseFloat(`${aboutp.length}`)) <= 1.67) {
          let sentryd = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,112,111,108,121,100,101,99,95,57,95,51,49,0);
         libjsinspectorC -= (parseFloat(`${sentryd == String.fromCharCode(108,0) ? parseInt(`${libjsinspectorC}`) : sentryd.length}`));
      }
       let uinit_7t8 = String.fromCharCode(97,115,121,110,99,95,56,95,54,55,0);
       let suggestionE = String.fromCharCode(100,105,115,112,97,116,99,104,95,105,95,50,54,0);
      if (4.69 < (android6 / (Math.max(aboutp.length, 7)))) {
         aboutp = `${(uinit_7t8 == String.fromCharCode(121,0) ? parseInt(`${libjsinspectorC}`) : uinit_7t8.length)}`;
      }
         suggestionE = `${uinit_7t8.length}`;
      if (2.32 < (android6 + 3)) {
         libjsinspectorC -= parseFloat(`${1 | parseInt(`${android6}`)}`);
      }
         aboutp = `${foreground3.size}`;
       let security_ = String.fromCharCode(99,95,49,54,95,105,110,116,114,105,110,0);
       let libcrashsdkr = String.fromCharCode(110,97,110,111,98,101,110,99,104,109,97,114,107,95,116,95,56,52,0);
      if (4 <= (1 - combineI.length)) {
         combineI.push((String.fromCharCode(85,0) == suggestionE ? suggestionE.length : parseInt(`${android6}`)));
      }
         uinit_7t8 += `${uinit_7t8.length}`;
      while (4.56 == libjsinspectorC) {
          let renderW = 2;
          let ksadl = true;
         libjsinspectorC += parseFloat(`${parseInt(`${libjsinspectorC}`) ^ 3}`);
         renderW |= 3;
         ksadl = !ksadl;
         break;
      }
       let mode_ = String.fromCharCode(98,95,56,95,114,101,102,101,114,101,110,99,101,115,0);
          let libswresampleq = 1;
          let update_byY: Array<any> = [776, 648];
         aboutp += `${parseInt(`${android6}`) - update_byY.length}`;
         libswresampleq |= libswresampleq & libswresampleq;
         update_byY = [libswresampleq];
      if (security_ == String.fromCharCode(50,0) && aboutp.length == 3) {
          let clubm = String.fromCharCode(121,95,50,49,95,109,105,110,115,0);
         aboutp += "3";
         clubm = `${1 + clubm.length}`;
      }
      specG = `${3 & aboutp.length}`;
      break;
   }
      banner0 += `${forwardd.length << (Math.min(Math.abs(3), 4))}`;
       let sheetp = 0;
       let lineu = String.fromCharCode(107,95,55,55,95,111,112,101,110,0);
       let thumbnailA = String.fromCharCode(115,117,98,112,101,108,95,108,95,55,49,0);
      if (2 == thumbnailA.length) {
          let completel = String.fromCharCode(117,95,48,95,109,112,116,111,97,110,110,101,120,98,0);
         sheetp *= lineu.length;
         completel = `${2 & completel.length}`;
      }
         sheetp |= lineu.length;
      for (let k = 0; k < 3; k++) {
         sheetp %= Math.max(5, lineu.length);
      }
      let goalQ = String.fromCharCode(111,55,95,0) == thumbnailA;
      do {
         thumbnailA += "3";
         if (goalQ) {
            break;
         }
      } while (goalQ && (lineu != thumbnailA));
         sheetp += sheetp;
         lineu = `${sheetp ^ lineu.length}`;
      let membershipD = String.fromCharCode(110,115,98,109,0) == lineu;
      do {
         lineu = `${lineu.length & thumbnailA.length}`;
         if (membershipD) {
            break;
         }
      } while (((4 + lineu.length) <= 3) && membershipD);
      let actionsR = lineu.length >= 6954330;
      do {
         lineu += `${(lineu == String.fromCharCode(116,0) ? sheetp : lineu.length)}`;
         if (actionsR) {
            break;
         }
      } while (actionsR && (thumbnailA.length < 1 && lineu == String.fromCharCode(82,0)));
          let type_geH = String.fromCharCode(112,99,97,112,95,52,95,57,56,0);
          let indicator0 = String.fromCharCode(115,116,100,105,110,116,95,118,95,56,51,0);
         lineu += `${lineu.length}`;
         type_geH += `${indicator0.length + type_geH.length}`;
         indicator0 += `${(String.fromCharCode(48,0) == type_geH ? type_geH.length : indicator0.length)}`;
      resendk /= Math.max(2 - eacts.length, 1);
      banner0 = "3";
   let minimizez = clockj == String.fromCharCode(111,107,106,111,98,0);
   do {
       let accepted_ = 4;
       let ewarded0 = 5.0;
       let libavcodecy = false;
      let lessZ = 7769736.0 >= ewarded0;
      do {
         ewarded0 += parseFloat(`${parseInt(`${ewarded0}`) % (Math.max(6, accepted_))}`);
         if (lessZ) {
            break;
         }
      } while (lessZ && (ewarded0 > 2.37 || (2.37 * ewarded0) > 3.60));
         ewarded0 /= Math.max(parseFloat(`${2}`), 2);
         ewarded0 -= (parseFloat(`${(libavcodecy ? 2 : 3) - parseInt(`${ewarded0}`)}`));
      for (let h = 0; h < 2; h++) {
          let bodanZ = String.fromCharCode(99,111,110,115,116,114,97,105,110,116,95,113,95,57,48,0);
          let libjsix = String.fromCharCode(111,95,57,51,95,99,104,101,99,107,109,97,114,107,0);
         accepted_ ^= ((libavcodecy ? 4 : 4) ^ libjsix.length);
         bodanZ = `${2 / (Math.max(6, bodanZ.length))}`;
         libjsix += `${bodanZ.length}`;
      }
          let rewardr = 3.0;
         libavcodecy = ewarded0 == 57.56;
         rewardr /= Math.max(parseFloat(`${parseInt(`${rewardr}`)}`), 1);
          let policyh = true;
         ewarded0 -= parseFloat(`${accepted_ % 1}`);
         policyh = !policyh;
         accepted_ += 1 >> (Math.min(Math.abs(parseInt(`${ewarded0}`)), 5));
      for (let k = 0; k < 1; k++) {
          let libfbX = 1.0;
         ewarded0 += parseFloat(`${2 / (Math.max(5, parseInt(`${ewarded0}`)))}`);
         libfbX -= 1 << (Math.min(Math.abs(parseInt(`${libfbX}`)), 2));
      }
         libavcodecy = 89 <= (accepted_ + ewarded0);
      clockj = `${(banner0 == String.fromCharCode(121,0) ? eacts.length : banner0.length)}`;
      if (minimizez) {
         break;
      }
   } while (minimizez && (5 == clockj.length));
    setReferralCode('');

   if (resendk >= 2) {
       let schedulerg = 2.0;
         schedulerg -= parseInt(`${schedulerg}`);
      let bootsplashO = 9338591.0 <= schedulerg;
      do {
          let leftl = 3;
          let singleM = String.fromCharCode(116,101,120,116,98,101,95,48,95,50,52,0);
          let penaltye: Array<any> = [792, 583];
          let complete8 = String.fromCharCode(120,95,48,95,108,105,110,101,98,114,101,97,107,0);
         schedulerg /= Math.max(2 << (Math.min(1, singleM.length)), 3);
         leftl -= leftl + penaltye.length;
         singleM += "2";
         penaltye = [complete8.length];
         complete8 = `${leftl % (Math.max(complete8.length, 2))}`;
         if (bootsplashO) {
            break;
         }
      } while (bootsplashO && (2.52 <= (2 - schedulerg)));
          let middleg: Map<any, any> = new Map([[String.fromCharCode(114,111,117,110,100,117,112,95,57,95,51,50,0),196], [String.fromCharCode(100,95,56,55,95,114,111,117,110,100,105,110,103,0),903]]);
         schedulerg *= 2;
         middleg = new Map([[`${middleg.size}`, middleg.size]]);
      security8 = `${2 << (Math.min(Math.abs(parseInt(`${schedulerg}`)), 4))}`;
   }
       let spinnerP = 2;
       let minimized = String.fromCharCode(112,107,112,107,101,121,95,53,95,56,49,0);
      let rooms = minimized.length <= 9510631;
      do {
         minimized = `${minimized.length}`;
         if (rooms) {
            break;
         }
      } while (rooms && ((minimized.length >> (Math.min(2, Math.abs(spinnerP)))) > 1));
      for (let n = 0; n < 1; n++) {
         minimized = `${spinnerP & 3}`;
      }
          let editZ = 3.0;
         spinnerP /= Math.max(minimized.length >> (Math.min(2, Math.abs(parseInt(`${editZ}`)))), 3);
      if (!minimized.startsWith(`${spinnerP}`)) {
         minimized = `${1 % (Math.max(10, spinnerP))}`;
      }
      let const_mxX = String.fromCharCode(53,97,110,52,104,0) == minimized;
      do {
          let checkboxZ: Array<any> = [736, 818];
          let component8 = 0.0;
          let thumbnail0: Map<any, any> = new Map([[String.fromCharCode(116,117,110,105,110,103,95,116,95,56,54,0),864], [String.fromCharCode(112,95,57,52,95,99,111,110,102,105,103,117,114,101,0),676], [String.fromCharCode(116,105,110,121,95,118,95,51,53,0),872]]);
          let analytice = 3.0;
          let progressP = String.fromCharCode(106,95,57,56,95,105,100,99,116,114,111,119,0);
         minimized = "1";
         checkboxZ = [progressP.length];
         component8 *= checkboxZ.length;
         thumbnail0.set(`${component8}`, parseInt(`${component8}`) / (Math.max(checkboxZ.length, 1)));
         analytice *= parseFloat(`${progressP.length >> (Math.min(Math.abs(2), 2))}`);
         if (const_mxX) {
            break;
         }
      } while (const_mxX && ((2 | minimized.length) <= 3));
      for (let d = 0; d < 3; d++) {
         minimized += `${minimized.length & spinnerP}`;
      }
      resendk /= Math.max(specG.length + stylesR, 2);
      specG += `${stylesR}`;
      resendk ^= shared6.length % (Math.max(9, banner0.length));
       let runtimeZ = String.fromCharCode(114,101,100,117,110,100,97,110,116,95,118,95,57,55,0);
         runtimeZ += `${(runtimeZ == String.fromCharCode(84,0) ? runtimeZ.length : runtimeZ.length)}`;
      for (let n = 0; n < 3; n++) {
         runtimeZ += `${runtimeZ.length - 1}`;
      }
      if (!runtimeZ.includes(`${runtimeZ.length}`)) {
          let layoutZ = 1.0;
         runtimeZ = `${3 * runtimeZ.length}`;
         layoutZ += 2;
      }
      logoutP += "2";
   let round6 = logoutP == String.fromCharCode(115,95,50,102,118,117,0);
   do {
      logoutP = `${1 << (Math.min(4, logoutP.length))}`;
      if (round6) {
         break;
      }
   } while (round6 && (specG.length > 1));
    setLoginValueErrMsg(null);

      shared6 += `${logoutP.length}`;
       let singlee = false;
      let actionsh = singlee ? !singlee : singlee;
      do {
          let handlerb = String.fromCharCode(99,111,110,116,105,103,117,111,117,115,95,52,95,54,52,0);
          let expandk: Array<any> = [String.fromCharCode(99,116,111,114,95,110,95,53,50,0), String.fromCharCode(100,101,115,99,114,105,98,101,95,98,95,52,56,0)];
          let desca = String.fromCharCode(114,95,51,53,95,115,105,103,109,97,0);
         singlee = handlerb.startsWith(`${singlee}`);
         handlerb = `${3 * desca.length}`;
         expandk.push(expandk.length ^ desca.length);
         if (actionsh) {
            break;
         }
      } while ((!singlee || singlee) && actionsh);
      while (singlee) {
         singlee = !singlee;
         break;
      }
       let adulte: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,117,109,97,98,108,101,95,115,95,54,49,0),String.fromCharCode(102,95,57,95,102,101,101,0)], [String.fromCharCode(105,95,54,57,95,97,112,112,114,111,120,105,109,97,116,105,111,110,0),String.fromCharCode(115,117,98,106,101,99,116,115,95,57,95,56,51,0)], [String.fromCharCode(98,115,111,108,117,116,101,95,112,95,52,54,0),String.fromCharCode(113,95,54,95,100,101,97,100,105,110,101,0)]]);
       let encryptS: Map<any, any> = new Map([[String.fromCharCode(110,111,110,110,117,108,108,115,101,114,105,97,108,105,122,97,116,105,111,110,95,121,95,49,48,48,0),true ], [String.fromCharCode(114,95,55,52,95,114,101,97,115,115,101,109,98,108,101,114,0),true ], [String.fromCharCode(99,111,110,115,116,97,110,116,115,95,52,95,51,57,0),true ]]);
      banner0 = `${(String.fromCharCode(74,0) == clockj ? clockj.length : resendk)}`;
   while (5 <= clockj.length || specG != String.fromCharCode(120,0)) {
       let hookse: Array<any> = [433, 741, 736];
       let backl = 1.0;
      for (let b = 0; b < 3; b++) {
         hookse.push(hookse.length);
      }
          let final_rE = 5.0;
          let recommendationL: Map<any, any> = new Map([[String.fromCharCode(105,95,49,48,48,95,108,117,109,98,101,114,106,97,99,107,0),947], [String.fromCharCode(120,95,56,48,95,100,101,99,114,101,102,0),834], [String.fromCharCode(113,95,57,49,95,97,115,115,101,114,116,105,111,110,0),251]]);
         backl *= parseFloat(`${recommendationL.size & parseInt(`${final_rE}`)}`);
         hookse.push(parseInt(`${backl}`) % (Math.max(hookse.length, 7)));
          let shootD = 0;
          let sendW = false;
         hookse = [1 >> (Math.min(Math.abs(shootD), 3))];
         shootD -= ((sendW ? 1 : 1));
      while (!hookse.includes(backl)) {
         hookse = [parseInt(`${backl}`)];
         break;
      }
      for (let o = 0; o < 2; o++) {
         hookse = [hookse.length];
      }
      clockj = `${tumbnail2.length & 1}`;
      break;
   }
      logoutP = `${eacts.length | benefits.length}`;
   for (let y = 0; y < 2; y++) {
      resendk >>= Math.min(2, Math.abs(shared6.length % 2));
   }
      security8 += `${1 * banner0.length}`;
    setReferralCodeErrMsg(null);

       let libtan4 = 3.0;
       let leagueD = 3.0;
      if (leagueD < libtan4) {
          let internetf = String.fromCharCode(112,104,114,97,115,101,95,52,95,52,51,0);
          let graphicsB = String.fromCharCode(112,95,53,57,95,115,99,104,110,111,114,114,0);
          let combinedt: Map<any, any> = new Map([[String.fromCharCode(104,95,52,48,95,112,105,99,107,0),659], [String.fromCharCode(108,95,50,56,95,110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,0),481]]);
          let lineO = String.fromCharCode(111,95,49,57,95,110,117,109,98,101,114,0);
         libtan4 /= Math.max(3, (internetf == String.fromCharCode(52,0) ? graphicsB.length : internetf.length));
         graphicsB = `${lineO.length}`;
         combinedt = new Map([[`${combinedt.size}`, (String.fromCharCode(82,0) == lineO ? combinedt.size : lineO.length)]]);
      }
      while (1.68 <= (libtan4 / 1.15) || (leagueD - 1.15) <= 4.81) {
         leagueD -= parseFloat(`${1}`);
         break;
      }
         leagueD -= parseFloat(`${parseInt(`${leagueD}`) - 2}`);
         libtan4 -= 2;
         leagueD += parseFloat(`${parseInt(`${libtan4}`)}`);
          let mbbannerH: Array<any> = [String.fromCharCode(104,95,57,55,95,115,101,103,117,101,0), String.fromCharCode(118,95,54,48,95,114,101,99,111,109,112,111,115,101,0)];
          let configurea: Array<any> = [String.fromCharCode(109,105,110,95,104,95,51,51,0), String.fromCharCode(106,95,55,95,112,101,97,107,115,0)];
         leagueD -= parseFloat(`${parseInt(`${leagueD}`) ^ parseInt(`${libtan4}`)}`);
         mbbannerH.push(mbbannerH.length % (Math.max(configurea.length, 10)));
         configurea.push(configurea.length % (Math.max(mbbannerH.length, 7)));
      specG += `${2 | resendk}`;
   while (shared6.length == 5) {
       let k_centerL = String.fromCharCode(120,95,53,54,95,110,97,116,105,118,101,108,121,0);
       let librrcn = 4.0;
       let tempZ = 3.0;
       let anythinkr = true;
       let attributedstring8 = String.fromCharCode(101,95,49,49,95,103,117,105,100,101,115,0);
         tempZ -= 2;
         tempZ /= Math.max(parseInt(`${librrcn}`), 1);
      if (1 == (k_centerL.length + 1) && 5.44 == (librrcn - 2.16)) {
         librrcn *= 3 + parseInt(`${librrcn}`);
      }
       let commonH = false;
         commonH = librrcn >= attributedstring8.length;
      while (2 < attributedstring8.length) {
          let serviceL = String.fromCharCode(118,95,50,51,95,110,111,110,110,117,108,108,105,110,99,111,109,105,110,103,0);
          let y_lockn = String.fromCharCode(108,105,109,105,116,115,95,57,95,55,56,0);
          let gesturesB = 2.0;
          let private_w6L: Array<any> = [441, 830, 946];
         attributedstring8 = `${parseInt(`${tempZ}`) / 3}`;
         serviceL = `${serviceL.length}`;
         y_lockn += `${serviceL.length}`;
         gesturesB += serviceL.length | y_lockn.length;
         private_w6L = [3];
         break;
      }
      for (let s = 0; s < 2; s++) {
          let yingP = 1.0;
          let rulesD: Map<any, any> = new Map([[String.fromCharCode(115,116,114,117,99,116,115,95,109,95,55,57,0),141], [String.fromCharCode(97,95,55,57,95,99,109,115,103,0),731]]);
          let launche = String.fromCharCode(109,101,109,111,114,121,95,98,95,54,55,0);
          let philippinesP = false;
          let moon2 = String.fromCharCode(108,95,57,49,95,98,114,101,97,100,0);
         attributedstring8 = `${1 + rulesD.size}`;
         yingP -= 3;
         rulesD.set(`${yingP}`, moon2.length);
         launche += `${(String.fromCharCode(113,0) == launche ? launche.length : (philippinesP ? 1 : 1))}`;
         moon2 += `${(3 - (philippinesP ? 1 : 4))}`;
      }
      while (commonH) {
         commonH = String.fromCharCode(89,0) == k_centerL;
         break;
      }
      while (commonH) {
         commonH = !attributedstring8.endsWith(`${commonH}`);
         break;
      }
         anythinkr = (commonH ? !anythinkr : !commonH);
       let bingX = String.fromCharCode(101,95,51,50,95,118,112,100,97,116,97,0);
       let forme = String.fromCharCode(112,95,54,55,95,112,97,115,99,97,108,0);
      for (let k = 0; k < 3; k++) {
         bingX += "2";
      }
      let mintegralW = anythinkr ? !anythinkr : anythinkr;
      do {
          let grayu: Array<any> = [845, 130];
          let expandn = String.fromCharCode(113,95,51,52,95,98,101,104,97,118,105,111,117,114,0);
          let crown8 = String.fromCharCode(112,95,55,95,115,117,98,108,97,121,111,117,116,115,0);
         anythinkr = commonH || !anythinkr;
         grayu.push(grayu.length);
         expandn += `${expandn.length}`;
         crown8 = `${(crown8 == String.fromCharCode(106,0) ? crown8.length : grayu.length)}`;
         if (mintegralW) {
            break;
         }
      } while (mintegralW && (commonH));
         anythinkr = bingX.length >= 17;
          let fieldW: Array<any> = [210, 594, 331];
          let relatedN = 3.0;
          let libpangleflippedN = String.fromCharCode(105,110,116,101,114,108,101,97,118,105,110,103,95,102,95,56,55,0);
         anythinkr = commonH;
         fieldW = [1 ^ parseInt(`${relatedN}`)];
         relatedN *= parseInt(`${relatedN}`) / 3;
         libpangleflippedN = `${3 | libpangleflippedN.length}`;
      security8 = "3";
      break;
   }
       let bufferJ = 4.0;
       let catalogn = 5.0;
      for (let a = 0; a < 1; a++) {
          let runtimeschedulerr: Map<any, any> = new Map([[String.fromCharCode(109,95,54,54,95,118,101,114,116,105,99,97,108,0),151], [String.fromCharCode(104,95,51,52,95,105,115,111,108,97,116,101,0),400]]);
          let become5: Map<any, any> = new Map([[String.fromCharCode(113,117,105,122,95,108,95,51,48,0),String.fromCharCode(116,95,57,50,95,102,111,111,0)], [String.fromCharCode(120,99,98,103,114,97,98,95,116,95,50,57,0),String.fromCharCode(107,95,50,53,95,101,120,112,101,114,116,0)], [String.fromCharCode(112,111,115,116,101,114,95,103,95,56,55,0),String.fromCharCode(101,95,54,49,95,98,121,116,101,99,111,100,101,118,116,97,98,0)]]);
          let package_mF = String.fromCharCode(110,95,52,52,95,99,97,108,108,108,0);
         catalogn *= package_mF.length;
         runtimeschedulerr = new Map([[`${runtimeschedulerr.size}`, 1 + runtimeschedulerr.size]]);
         become5 = new Map([[`${runtimeschedulerr.size}`, 3]]);
         package_mF = `${become5.size - 3}`;
      }
      for (let l = 0; l < 2; l++) {
         bufferJ -= parseInt(`${catalogn}`);
      }
      let countdowna = 6984337.0 <= bufferJ;
      do {
          let langkeyr: Array<any> = [644, 226];
          let annerQ = false;
          let downV = String.fromCharCode(100,95,56,50,95,110,108,115,116,0);
          let attributedstringp = String.fromCharCode(100,101,102,101,97,116,95,99,95,54,57,0);
         bufferJ /= Math.max(2, (String.fromCharCode(108,0) == attributedstringp ? attributedstringp.length : (annerQ ? 4 : 1)));
         langkeyr = [1];
         annerQ = String.fromCharCode(72,0) == downV;
         downV = `${langkeyr.length}`;
         if (countdowna) {
            break;
         }
      } while (countdowna && (3.74 >= (bufferJ - 4.20) || 5.44 >= (bufferJ * 4.20)));
         bufferJ /= Math.max(1, 2);
          let searchc = String.fromCharCode(97,95,55,56,95,105,108,111,103,0);
          let graphicsH = 4.0;
         catalogn -= 2;
         searchc = `${3 & parseInt(`${graphicsH}`)}`;
         graphicsH -= parseInt(`${graphicsH}`) * 1;
       let headerk = 5.0;
       let ticko = 3.0;
      eacts += "3";
   if (!tumbnail2.endsWith(`${resendk}`)) {
       let formt = 3.0;
       let expandku = 4;
         formt += parseFloat(`${3}`);
      let targetC = 7687555.0 >= formt;
      do {
          let fieldN: Map<any, any> = new Map([[String.fromCharCode(100,95,51,56,95,105,118,102,101,110,99,0),true ], [String.fromCharCode(112,114,101,100,101,99,111,100,101,95,112,95,55,56,0),false ], [String.fromCharCode(106,95,52,50,95,111,108,100,0),false ]]);
          let vignettez: Array<any> = [291, 373];
          let live2 = String.fromCharCode(98,95,53,54,95,122,101,114,111,105,110,103,0);
          let resultq = 2.0;
          let expandJ: Array<any> = [977, 916, 453];
         formt /= Math.max(3, parseFloat(`${1}`));
         fieldN = new Map([[`${fieldN.size}`, live2.length]]);
         vignettez = [live2.length / (Math.max(2, 7))];
         resultq += parseFloat(`${parseInt(`${resultq}`) ^ fieldN.size}`);
         expandJ.push(fieldN.size & 1);
         if (targetC) {
            break;
         }
      } while (((expandku + 5) > 2) && targetC);
          let proxyw = String.fromCharCode(112,101,97,107,95,115,95,50,50,0);
          let targetK = 2.0;
          let pausec = true;
         formt *= parseFloat(`${expandku % (Math.max(4, parseInt(`${formt}`)))}`);
         proxyw = "3";
         targetK -= (parseFloat(`${parseInt(`${targetK}`) + (pausec ? 2 : 4)}`));
         pausec = !pausec;
         formt *= parseFloat(`${1 % (Math.max(3, parseInt(`${formt}`)))}`);
      let leftY = 7091177 <= expandku;
      do {
          let darkF = 2;
          let closeJ: Array<any> = [824, 457];
          let libjsijniprofilerj = String.fromCharCode(101,120,112,108,97,105,110,95,117,95,52,49,0);
         expandku &= closeJ.length;
         darkF += 1;
         closeJ = [darkF + 1];
         libjsijniprofilerj += `${darkF}`;
         if (leftY) {
            break;
         }
      } while (leftY && (5 > (expandku * 2)));
         expandku <<= Math.min(Math.abs(expandku + parseInt(`${formt}`)), 3);
      tumbnail2 = `${benefits.length & 3}`;
   }
       let libruntimeexecutorz = 2.0;
       let interstitiale: Map<any, any> = new Map([[String.fromCharCode(120,95,49,53,95,107,101,121,0),478], [String.fromCharCode(106,95,53,52,95,97,99,113,117,105,114,101,100,0),469]]);
      if (2.65 == (libruntimeexecutorz * 4.21)) {
          let orangew = String.fromCharCode(97,95,51,54,95,103,114,97,110,117,108,101,0);
          let umengt = 1.0;
         libruntimeexecutorz *= parseInt(`${umengt}`) % (Math.max(3, 6));
         orangew = `${orangew.length}`;
         umengt += orangew.length;
      }
       let connectionW: Map<any, any> = new Map([[String.fromCharCode(116,95,55,57,95,105,115,109,101,109,115,101,116,0),354], [String.fromCharCode(105,110,105,116,105,97,116,111,114,95,52,95,53,52,0),379], [String.fromCharCode(102,105,108,108,95,109,95,51,51,0),872]]);
       let starp: Map<any, any> = new Map([[String.fromCharCode(103,105,102,95,121,95,57,55,0),347], [String.fromCharCode(105,109,103,117,116,105,108,115,95,54,95,50,0),42]]);
      for (let o = 0; o < 1; o++) {
          let terms7 = 5;
          let valuesX = String.fromCharCode(116,95,55,56,95,105,110,116,101,114,97,99,116,105,118,101,108,121,0);
          let layoutl = String.fromCharCode(112,95,57,52,95,116,119,111,102,105,115,104,0);
          let profileQ = 0.0;
          let reactnativejsD = String.fromCharCode(97,100,100,105,116,105,118,101,95,102,95,54,52,0);
         connectionW = new Map([[`${starp.size}`, connectionW.size + 1]]);
         terms7 += layoutl.length;
         valuesX += `${reactnativejsD.length}`;
         layoutl += `${terms7}`;
         profileQ /= Math.max(5, parseFloat(`${reactnativejsD.length >> (Math.min(4, Math.abs(parseInt(`${profileQ}`))))}`));
      }
         connectionW.set(`${connectionW.size}`, connectionW.size / (Math.max(starp.size, 7)));
         connectionW.set(`${interstitiale.size}`, interstitiale.size);
          let statsk: Map<any, any> = new Map([[String.fromCharCode(119,97,105,116,95,115,95,52,48,0),446], [String.fromCharCode(114,95,51,49,95,115,99,111,114,101,115,0),881], [String.fromCharCode(112,95,53,53,95,118,99,100,115,112,0),739]]);
         connectionW = new Map([[`${connectionW.size}`, connectionW.size]]);
         statsk.set(`${statsk.size}`, 3 & statsk.size);
      benefits += `${forwardd.length % 2}`;
   while ((5 >> (Math.min(1, Math.abs(resendk)))) > 4) {
      forwardd = [tumbnail2.length ^ 3];
      break;
   }
    setReadTermNCondition(false);

      eacts += `${1 >> (Math.min(5, shared6.length))}`;
      eacts += "2";
   let recommendation2 = 8731867 >= logoutP.length;
   do {
      logoutP = `${(specG == String.fromCharCode(68,0) ? stylesR : specG.length)}`;
      if (recommendation2) {
         break;
      }
   } while (recommendation2 && (1 > specG.length));
   for (let k = 0; k < 3; k++) {
      eacts += `${tumbnail2.length}`;
   }
   while (3 < security8.length) {
      security8 += `${resendk * banner0.length}`;
      break;
   }
      specG = `${specG.length % 3}`;

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
       let umengL = String.fromCharCode(118,95,57,48,95,97,108,108,111,99,122,0);
    let libswscaleF = 4;
    let graphics4 = String.fromCharCode(113,99,101,108,112,100,97,116,97,95,115,95,52,54,0);
    let playL = true;
    let videoy: Map<any, any> = new Map([[String.fromCharCode(99,111,110,100,101,110,115,97,98,108,101,95,103,95,50,55,0),true ], [String.fromCharCode(97,100,97,112,116,97,116,105,111,110,95,56,95,53,55,0),false ], [String.fromCharCode(112,95,55,49,95,115,105,103,110,101,100,0),false ]]);
    let screenQ: Map<any, any> = new Map([[String.fromCharCode(106,95,50,51,95,114,116,112,112,114,111,116,111,0),543], [String.fromCharCode(118,97,114,105,97,110,99,101,120,95,57,95,50,55,0),556]]);
    let bootsplasht = String.fromCharCode(117,98,115,99,114,105,98,101,114,95,57,95,54,50,0);
    let disconnectedv = 1.0;
    let searchbarz = String.fromCharCode(113,95,50,48,95,115,117,103,103,101,115,116,105,111,110,0);
    let sliderx = 4.0;
    let k_viewm = 0;
    let castingB = String.fromCharCode(103,95,53,54,95,120,103,97,115,0);
      disconnectedv -= parseFloat(`${screenQ.size ^ 1}`);
       let sportC = String.fromCharCode(115,122,97,98,111,115,95,121,95,55,53,0);
       let minivod6: Map<any, any> = new Map([[String.fromCharCode(120,95,55,56,95,109,111,100,112,108,117,103,0),String.fromCharCode(113,95,51,57,95,117,110,101,100,105,116,97,98,108,101,0)], [String.fromCharCode(99,114,111,115,115,95,55,95,51,53,0),String.fromCharCode(112,104,114,97,115,101,95,55,95,50,51,0)]]);
       let selectH = 2;
      let single1 = minivod6.size >= 5438088;
      do {
         minivod6.set(sportC, sportC.length);
         if (single1) {
            break;
         }
      } while (single1 && ((minivod6.size / (Math.max(sportC.length, 6))) > 3 || 1 > (3 / (Math.max(5, minivod6.size)))));
      let vietnamg = 8523808 <= minivod6.size;
      do {
         minivod6.set(`${selectH}`, selectH);
         if (vietnamg) {
            break;
         }
      } while ((3 <= (3 >> (Math.min(4, Math.abs(minivod6.size)))) && 2 <= (3 >> (Math.min(1, Math.abs(minivod6.size))))) && vietnamg);
         sportC = `${1 & selectH}`;
      while (4 <= (minivod6.size & 4) || 3 <= (4 & selectH)) {
          let actionsg = String.fromCharCode(97,95,49,50,95,99,114,111,115,115,98,97,114,0);
          let encryptE = 3.0;
          let fieldk: Map<any, any> = new Map([[String.fromCharCode(98,101,110,99,104,95,107,95,57,55,0),479], [String.fromCharCode(121,95,53,52,95,102,111,108,108,111,119,115,0),793], [String.fromCharCode(99,95,51,57,95,101,115,99,97,112,101,0),356]]);
          let tempf = String.fromCharCode(115,119,97,116,99,104,95,57,95,49,53,0);
         selectH -= parseInt(`${encryptE}`);
         actionsg = `${fieldk.size % 1}`;
         encryptE /= Math.max(tempf.length, 2);
         fieldk.set(tempf, fieldk.size >> (Math.min(tempf.length, 5)));
         break;
      }
         selectH ^= 2;
         minivod6.set(`${selectH}`, selectH);
      for (let c = 0; c < 3; c++) {
         minivod6 = new Map([[`${minivod6.size}`, minivod6.size + sportC.length]]);
      }
      let sliderY = 5858724 >= minivod6.size;
      do {
         minivod6.set(`${selectH}`, 2 + selectH);
         if (sliderY) {
            break;
         }
      } while (((selectH << (Math.min(Math.abs(1), 2))) > 1) && sliderY);
      if (selectH >= minivod6.size) {
          let imagemanagero = String.fromCharCode(110,95,49,55,95,97,99,111,108,111,114,115,0);
          let eventr = String.fromCharCode(104,111,108,101,115,95,57,95,55,51,0);
          let libyogaB = 5.0;
         selectH *= eventr.length;
         imagemanagero = `${parseInt(`${libyogaB}`)}`;
         eventr = `${imagemanagero.length}`;
         libyogaB -= 3 + imagemanagero.length;
      }
      screenQ = new Map([[`${minivod6.size}`, sportC.length >> (Math.min(1, Math.abs(minivod6.size)))]]);
      searchbarz = "1";
   if (!playL) {
      libswscaleF *= videoy.size;
   }
   if (5.89 < (4.39 + disconnectedv)) {
      libswscaleF *= parseInt(`${disconnectedv}`) >> (Math.min(umengL.length, 3));
   }
       let detailsf = 4;
       let libyogaQ = 2.0;
       let alert5 = String.fromCharCode(105,110,115,116,97,110,116,95,122,95,50,48,0);
       let libruntimeexecutor4 = String.fromCharCode(102,117,110,110,121,95,48,95,49,50,0);
      for (let m = 0; m < 3; m++) {
         libyogaQ -= parseFloat(`${2}`);
      }
         libyogaQ *= parseFloat(`${parseInt(`${libyogaQ}`)}`);
          let canvasO = String.fromCharCode(115,95,50,48,95,114,111,108,101,0);
         libyogaQ /= Math.max(parseFloat(`${2}`), 3);
         canvasO = `${canvasO.length % (Math.max(4, canvasO.length))}`;
      let castm = 5706102 <= detailsf;
      do {
         detailsf &= libruntimeexecutor4.length;
         if (castm) {
            break;
         }
      } while ((3 >= (detailsf - parseInt(`${libyogaQ}`)) || 4.0 >= (3.40 - libyogaQ)) && castm);
         alert5 += "2";
         libruntimeexecutor4 += `${parseInt(`${libyogaQ}`)}`;
          let xvodz: Map<any, any> = new Map([[String.fromCharCode(118,95,54,50,95,112,101,114,115,111,110,115,0),String.fromCharCode(103,98,114,97,112,95,105,95,54,0)], [String.fromCharCode(100,113,117,97,110,116,95,121,95,57,56,0),String.fromCharCode(99,104,97,108,108,101,110,103,101,95,118,95,49,51,0)]]);
         libyogaQ /= Math.max(parseFloat(`${alert5.length}`), 4);
         xvodz.set(`${xvodz.size}`, xvodz.size);
      if ((detailsf % (Math.max(libruntimeexecutor4.length, 5))) <= 1 || 2 <= (detailsf % 1)) {
         libruntimeexecutor4 = `${alert5.length}`;
      }
      videoy = new Map([[graphics4, alert5.length - 2]]);
   if (sliderx >= 4.78) {
      playL = 78.78 == sliderx;
   }
   if (2 >= (bootsplasht.length % 4)) {
      screenQ.set(umengL, 3);
   }
   let directm = graphics4.length <= 6937717;
   do {
       let dycreator0 = 4.0;
       let stylesY = 0.0;
         stylesY += parseInt(`${dycreator0}`) | 2;
      let photo3 = stylesY >= 8548868.0;
      do {
         stylesY -= 1 - parseInt(`${dycreator0}`);
         if (photo3) {
            break;
         }
      } while (photo3 && (stylesY < dycreator0));
      if (5.40 > (stylesY + dycreator0)) {
         stylesY += 1 | parseInt(`${dycreator0}`);
      }
         stylesY *= 2;
          let darkB = String.fromCharCode(116,95,50,95,110,111,99,97,115,101,0);
          let renewy = String.fromCharCode(115,112,114,105,116,101,115,95,116,95,53,0);
         stylesY *= 1;
         darkB += `${renewy.length - darkB.length}`;
         renewy = `${renewy.length & darkB.length}`;
      let other3 = dycreator0 >= 7198504.0;
      do {
         dycreator0 -= parseFloat(`${3}`);
         if (other3) {
            break;
         }
      } while ((5.6 > (stylesY + dycreator0) && (5.6 + dycreator0) > 3.2) && other3);
      graphics4 += `${screenQ.size ^ parseInt(`${sliderx}`)}`;
      if (directm) {
         break;
      }
   } while ((1 > umengL.length) && directm);
   for (let h = 0; h < 1; h++) {
       let scorep = String.fromCharCode(115,107,105,112,95,99,95,57,52,0);
       let directA: Map<any, any> = new Map([[String.fromCharCode(108,95,51,48,95,101,109,117,108,97,116,101,0),218], [String.fromCharCode(119,95,52,52,95,102,108,101,120,105,98,108,101,0),223], [String.fromCharCode(114,101,108,102,117,110,99,95,108,95,49,51,0),158]]);
       let nativeexc = 1;
       let nexte = true;
      let loadingJ = directA.size >= 8223983;
      do {
         directA = new Map([[`${directA.size}`, 2]]);
         if (loadingJ) {
            break;
         }
      } while (loadingJ && ((nativeexc + 1) > 2 && (nativeexc + directA.size) > 1));
         nexte = (nativeexc % (Math.max(directA.size, 10))) > 37;
      let heji7 = nexte ? !nexte : nexte;
      do {
         nexte = nativeexc > 44;
         if (heji7) {
            break;
         }
      } while (((directA.size >> (Math.min(Math.abs(5), 4))) < 1 || !nexte) && heji7);
      for (let u = 0; u < 2; u++) {
          let handlerF = 2.0;
          let thumbnails = 1.0;
         scorep = `${parseInt(`${handlerF}`) >> (Math.min(3, Math.abs(3)))}`;
         handlerF -= parseFloat(`${1}`);
         thumbnails *= parseFloat(`${3}`);
      }
          let indicatori = String.fromCharCode(101,110,99,111,100,101,100,112,111,105,110,116,95,98,95,53,54,0);
          let androidY = String.fromCharCode(97,95,49,48,48,95,99,111,109,109,105,116,116,101,100,0);
         nativeexc += nativeexc;
         indicatori = `${indicatori.length + androidY.length}`;
         androidY = `${1 * indicatori.length}`;
         nexte = directA.size <= 24 && !nexte;
      for (let j = 0; j < 2; j++) {
          let nativemodulej = 2;
          let libswscaleX = String.fromCharCode(103,108,111,98,97,108,108,121,95,52,95,54,54,0);
         directA = new Map([[`${directA.size}`, ((nexte ? 3 : 2) ^ directA.size)]]);
         nativemodulej /= Math.max(2, 2);
         libswscaleX = `${nativemodulej}`;
      }
         nativeexc >>= Math.min(Math.abs(nativeexc), 3);
         nexte = !nexte || nativeexc > 7;
         directA = new Map([[scorep, scorep.length << (Math.min(Math.abs(1), 5))]]);
         nexte = ((directA.size & (nexte ? directA.size : 38)) == 43);
         nexte = !nexte;
      disconnectedv *= parseFloat(`${libswscaleF}`);
   }
   let sansU = screenQ.size <= 5761339;
   do {
       let pauseQ = String.fromCharCode(99,111,110,116,101,110,116,105,111,110,95,52,95,49,48,0);
       let libreactnativejnix: Map<any, any> = new Map([[String.fromCharCode(117,110,113,117,97,110,116,95,107,95,54,54,0),340], [String.fromCharCode(97,110,99,104,111,114,95,48,95,49,52,0),727]]);
       let topici = String.fromCharCode(114,95,49,55,95,108,97,121,111,121,116,0);
      while (libreactnativejnix.size >= 5) {
          let dropdownb: Map<any, any> = new Map([[String.fromCharCode(101,110,103,105,110,101,95,111,95,51,0),false ], [String.fromCharCode(100,95,50,55,95,115,105,100,101,100,97,116,97,0),false ]]);
          let historyp: Map<any, any> = new Map([[String.fromCharCode(112,95,57,50,95,105,110,100,105,99,97,116,101,100,0),269], [String.fromCharCode(119,95,56,54,95,117,110,101,109,112,116,121,0),957]]);
          let frame_kj9 = 5;
          let styleJ = 2;
         libreactnativejnix = new Map([[`${historyp.size}`, frame_kj9 ^ historyp.size]]);
         dropdownb = new Map([[`${dropdownb.size}`, styleJ >> (Math.min(Math.abs(3), 2))]]);
         frame_kj9 *= 3;
         styleJ *= 2;
         break;
      }
       let screenz = true;
         topici += "2";
      for (let f = 0; f < 2; f++) {
          let brightnessy = 5.0;
          let roomY = true;
          let videojsU = 3;
          let navigationX = 0.0;
         libreactnativejnix = new Map([[`${libreactnativejnix.size}`, libreactnativejnix.size]]);
         brightnessy /= Math.max(2, parseFloat(`${parseInt(`${navigationX}`)}`));
         roomY = brightnessy < navigationX;
         videojsU += parseInt(`${navigationX}`) % 1;
      }
      if ((4 << (Math.min(2, topici.length))) <= 4 && (topici.length << (Math.min(1, Math.abs(libreactnativejnix.size)))) <= 4) {
          let notificationF = 1.0;
          let settingr: Array<any> = [698, 330];
          let shrinks: Map<any, any> = new Map([[String.fromCharCode(112,111,108,121,95,48,95,55,57,0),863], [String.fromCharCode(103,114,97,110,116,95,99,95,53,57,0),434], [String.fromCharCode(116,121,112,101,111,102,95,119,95,49,49,0),191]]);
         topici = `${(String.fromCharCode(118,0) == pauseQ ? shrinks.size : pauseQ.length)}`;
         notificationF *= 2 * parseInt(`${notificationF}`);
         settingr = [3 & parseInt(`${notificationF}`)];
         shrinks.set(`${notificationF}`, settingr.length % 3);
      }
      let hongkongx = screenz ? !screenz : screenz;
      do {
         screenz = (libreactnativejnix.size / (Math.max(9, pauseQ.length))) > 93;
         if (hongkongx) {
            break;
         }
      } while ((!screenz) && hongkongx);
       let areay: Map<any, any> = new Map([[String.fromCharCode(97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,95,98,95,51,51,0),String.fromCharCode(114,95,48,95,97,117,103,109,101,110,116,101,100,0)], [String.fromCharCode(112,97,115,115,105,118,101,95,103,95,51,51,0),String.fromCharCode(115,99,114,101,101,110,112,114,101,115,115,111,95,107,95,50,55,0)], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,108,95,49,56,0),String.fromCharCode(99,97,108,108,98,97,99,107,95,115,95,55,55,0)]]);
       let memberS: Map<any, any> = new Map([[String.fromCharCode(99,108,111,115,105,110,103,95,116,95,56,50,0),String.fromCharCode(109,97,110,97,103,101,95,104,95,50,51,0)], [String.fromCharCode(110,95,51,54,95,114,101,102,108,101,99,116,111,114,0),String.fromCharCode(120,95,50,57,95,117,110,105,110,115,116,97,108,108,0)], [String.fromCharCode(101,120,101,99,117,116,105,110,103,95,106,95,57,57,0),String.fromCharCode(111,112,117,115,102,105,108,101,95,51,95,57,48,0)]]);
      while ((areay.size << (Math.min(Math.abs(1), 3))) >= 3 || (topici.length << (Math.min(5, Math.abs(areay.size)))) >= 1) {
         areay.set(pauseQ, (pauseQ == String.fromCharCode(104,0) ? pauseQ.length : areay.size));
         break;
      }
          let videojss = String.fromCharCode(100,95,56,54,95,107,101,121,102,114,97,109,101,0);
          let libreactperfloggerjnig = true;
          let shoot3 = false;
         pauseQ = `${areay.size}`;
         videojss = "1";
         libreactperfloggerjnig = !libreactperfloggerjnig;
         shoot3 = libreactperfloggerjnig;
      screenQ = new Map([[`${libreactnativejnix.size}`, 1]]);
      if (sansU) {
         break;
      }
   } while (sansU && ((screenQ.size * graphics4.length) > 4 && 2 > (4 * screenQ.size)));
       let history4 = String.fromCharCode(97,115,115,101,109,98,108,101,114,95,102,95,52,54,0);
       let langU = String.fromCharCode(110,95,51,56,95,97,108,112,104,97,101,120,116,114,97,99,116,0);
         langU += `${langU.length & history4.length}`;
         langU = `${history4.length}`;
      let notification1 = langU == String.fromCharCode(102,101,107,109,54,106,0);
      do {
         langU = `${history4.length}`;
         if (notification1) {
            break;
         }
      } while ((langU.length <= 2 || history4 != String.fromCharCode(80,0)) && notification1);
      while (langU.length < 1) {
          let ewardedp = String.fromCharCode(107,95,51,48,95,100,105,115,97,98,108,101,0);
          let bannerm = String.fromCharCode(116,97,112,115,95,108,95,56,48,0);
         langU += "3";
         ewardedp += `${(String.fromCharCode(71,0) == bannerm ? ewardedp.length : bannerm.length)}`;
         break;
      }
         history4 += `${history4.length}`;
      let ycopy_6oV = langU.length <= 5607184;
      do {
         langU = `${1 + history4.length}`;
         if (ycopy_6oV) {
            break;
         }
      } while ((history4 == langU) && ycopy_6oV);
      graphics4 = `${bootsplasht.length}`;
   for (let j = 0; j < 3; j++) {
      umengL = `${umengL.length % 1}`;
   }
   while ((videoy.size / (Math.max(3, 7))) <= 1 || (searchbarz.length / (Math.max(3, videoy.size))) <= 3) {
      searchbarz += `${parseInt(`${disconnectedv}`) | libswscaleF}`;
      break;
   }
      umengL = `${libswscaleF}`;
      sliderx -= (String.fromCharCode(90,0) == umengL ? libswscaleF : umengL.length);
   let mutedm = String.fromCharCode(112,122,119,110,53,0) == umengL;
   do {
      umengL = `${((playL ? 1 : 4) | videoy.size)}`;
      if (mutedm) {
         break;
      }
   } while (mutedm && (!umengL.includes(`${graphics4.length}`)));
      searchbarz = "3";
      videoy = new Map([[umengL, umengL.length << (Math.min(2, Math.abs(parseInt(`${sliderx}`))))]]);
      libswscaleF /= Math.max(((playL ? 4 : 1) << (Math.min(Math.abs(2), 1))), 4);
   let castR = 7550933 >= k_viewm;
   do {
      k_viewm <<= Math.min(5, umengL.length);
      if (castR) {
         break;
      }
   } while (castR && ((k_viewm | screenQ.size) <= 4));
   for (let d = 0; d < 2; d++) {
      sliderx += 1 * umengL.length;
   }
   for (let u = 0; u < 2; u++) {
      videoy = new Map([[`${k_viewm}`, 1 | searchbarz.length]]);
   }
   for (let a = 0; a < 2; a++) {
      k_viewm *= (searchbarz == String.fromCharCode(99,0) ? videoy.size : searchbarz.length);
   }

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
       let imagemanageru: Map<any, any> = new Map([[String.fromCharCode(98,121,112,97,115,115,105,110,103,95,118,95,49,53,0),false ], [String.fromCharCode(116,95,50,51,95,97,110,105,109,97,116,111,114,115,0),true ], [String.fromCharCode(104,105,103,104,112,97,115,115,95,99,95,50,52,0),true ]]);
    let over9 = String.fromCharCode(115,104,105,112,112,105,110,103,95,48,95,51,48,0);
    let libreanimatedv = String.fromCharCode(110,95,50,57,95,116,101,115,118,101,114,116,0);
    let feedback2 = String.fromCharCode(120,95,55,95,115,101,110,100,97,108,108,0);
    let backgroundq = String.fromCharCode(112,97,116,116,101,114,110,115,95,116,95,57,48,0);
    let championO: Map<any, any> = new Map([[String.fromCharCode(106,115,105,109,100,99,102,103,95,119,95,50,54,0),String.fromCharCode(110,111,108,111,99,107,95,108,95,53,48,0)], [String.fromCharCode(101,95,55,48,95,99,111,109,112,97,115,115,0),String.fromCharCode(111,112,99,111,100,101,115,95,53,95,52,54,0)], [String.fromCharCode(114,95,55,48,95,102,114,101,113,98,97,114,107,0),String.fromCharCode(107,95,53,54,95,109,105,100,0)]]);
    let auto__ys = String.fromCharCode(98,95,57,51,95,115,112,111,110,115,111,114,101,100,0);
    let eighteene: Map<any, any> = new Map([[String.fromCharCode(111,95,55,57,95,109,101,116,97,108,0),75], [String.fromCharCode(112,95,55,48,95,115,121,109,98,111,108,105,99,97,116,105,111,110,0),29], [String.fromCharCode(105,110,116,101,114,118,97,108,115,95,119,95,56,51,0),414]]);
    let homeA: Map<any, any> = new Map([[String.fromCharCode(102,95,49,56,95,115,108,97,118,101,115,0),779], [String.fromCharCode(107,116,111,112,95,106,95,49,53,0),232], [String.fromCharCode(109,100,110,115,95,57,95,54,50,0),484]]);
    let sourceo: Array<any> = [408, 161];
    let brightnessr = 2.0;
    let bingN = String.fromCharCode(121,95,50,53,95,102,108,111,97,116,115,0);
    let long_lb = 1.0;
    let arrowb = 3;
    let backwarde = 0.0;
    let update_t0X = String.fromCharCode(112,95,50,95,114,101,113,115,116,97,116,101,0);
   while (feedback2.length == 4) {
       let customi = false;
       let predictionT: Array<any> = [183, 438, 489];
       let fast6 = String.fromCharCode(97,95,51,95,97,98,115,108,0);
         customi = fast6.length < 15;
      let stations7 = String.fromCharCode(118,120,52,0) == fast6;
      do {
         fast6 += `${predictionT.length}`;
         if (stations7) {
            break;
         }
      } while ((predictionT.length > 3) && stations7);
         predictionT.push(2);
       let type_4dk = String.fromCharCode(103,95,49,50,95,100,111,99,115,105,122,101,0);
       let mbridgeP = String.fromCharCode(117,95,49,51,95,114,110,103,115,0);
         mbridgeP = `${(fast6 == String.fromCharCode(105,0) ? (customi ? 4 : 4) : fast6.length)}`;
          let greya = String.fromCharCode(116,104,114,111,116,116,108,101,114,95,117,95,50,53,0);
          let executorI = 2.0;
         type_4dk += `${type_4dk.length | 2}`;
         greya += `${3 << (Math.min(3, Math.abs(parseInt(`${executorI}`))))}`;
         executorI -= greya.length * 3;
         customi = fast6.length >= 67;
       let handlerq = String.fromCharCode(105,110,99,114,109,101,114,103,101,95,102,95,52,53,0);
       let activitym = String.fromCharCode(112,95,52,57,95,97,99,99,101,112,116,97,98,108,101,0);
         customi = fast6.length >= type_4dk.length;
      feedback2 += `${imagemanageru.size * 3}`;
      break;
   }

    if (isSubmitting) return;

      over9 = `${2 & feedback2.length}`;

    if (isReadTermNCondition == false) {

      imagemanageru.set(backgroundq, 1);
      showToast('请勾选用户协议和隐私协议');

   while (!Array.from(homeA.keys()).includes(`${sourceo.length}`)) {
      homeA = new Map([[libreanimatedv, (backgroundq == String.fromCharCode(83,0) ? backgroundq.length : libreanimatedv.length)]]);
      break;
   }
      return;

      homeA = new Map([[`${homeA.size}`, 3 >> (Math.min(5, Math.abs(homeA.size)))]]);
    }

    let userInfo;

       let basketballC = String.fromCharCode(101,108,115,100,101,99,95,114,95,49,53,0);
       let sellS = 3.0;
       let dplus4 = String.fromCharCode(112,95,51,95,111,110,116,114,97,115,116,0);
      let selectX = 7463590.0 <= sellS;
      do {
          let executorr = 4;
          let libavformatZ: Map<any, any> = new Map([[String.fromCharCode(98,97,100,95,101,95,54,49,0),481], [String.fromCharCode(110,95,55,51,95,99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,0),712]]);
          let routerq = String.fromCharCode(108,95,55,48,95,115,99,104,101,100,117,108,101,114,0);
         sellS -= basketballC.length;
         executorr &= libavformatZ.size;
         libavformatZ = new Map([[routerq, (String.fromCharCode(100,0) == routerq ? executorr : routerq.length)]]);
         if (selectX) {
            break;
         }
      } while (((2 - dplus4.length) > 5 || (sellS / (Math.max(dplus4.length, 9))) > 4.2) && selectX);
       let selectF: Map<any, any> = new Map([[String.fromCharCode(99,95,49,54,95,116,104,114,101,115,104,111,108,100,0),true ], [String.fromCharCode(108,95,49,48,48,95,112,114,111,99,101,115,115,0),false ], [String.fromCharCode(105,110,116,116,121,112,101,115,95,116,95,51,49,0),false ]]);
         sellS /= Math.max(dplus4.length * 3, 1);
         selectF.set(dplus4, 1 * dplus4.length);
         sellS += selectF.size - dplus4.length;
      if (!dplus4.includes(`${selectF.size}`)) {
         dplus4 = `${3 >> (Math.min(3, Math.abs(parseInt(`${sellS}`))))}`;
      }
      for (let f = 0; f < 1; f++) {
         selectF = new Map([[`${selectF.size}`, selectF.size | 1]]);
      }
      let expiredj = dplus4.length >= 5615691;
      do {
          let rewind9 = 1.0;
          let mergerH: Array<any> = [String.fromCharCode(111,95,53,57,95,97,100,115,97,114,109,97,115,109,0), String.fromCharCode(109,110,99,95,54,95,51,51,0), String.fromCharCode(112,108,117,115,95,107,95,54,50,0)];
         dplus4 = `${parseInt(`${rewind9}`) % (Math.max(10, dplus4.length))}`;
         rewind9 -= parseFloat(`${mergerH.length << (Math.min(3, mergerH.length))}`);
         if (expiredj) {
            break;
         }
      } while ((5 >= (dplus4.length + selectF.size) || (dplus4.length + selectF.size) >= 5) && expiredj);
         basketballC = `${(String.fromCharCode(113,0) == dplus4 ? parseInt(`${sellS}`) : dplus4.length)}`;
      auto__ys += `${parseInt(`${sellS}`) % 1}`;

    try {

   for (let n = 0; n < 3; n++) {
       let movies9 = 0;
       let quest6 = String.fromCharCode(117,95,51,50,95,109,111,100,117,108,117,115,0);
       let friendsE = String.fromCharCode(118,95,51,53,95,115,116,114,111,107,101,114,0);
       let areaB = String.fromCharCode(105,95,49,50,95,97,110,99,104,111,114,0);
       let eighteeni = 5;
         eighteeni += friendsE.length + 1;
         eighteeni &= 3 / (Math.max(4, friendsE.length));
      if (1 > (movies9 | quest6.length) && (quest6.length | 1) > 3) {
         quest6 += "1";
      }
      for (let h = 0; h < 2; h++) {
          let station4 = 4;
          let neonS = 1.0;
          let build2 = false;
         movies9 *= eighteeni ^ 3;
         station4 %= Math.max(1, 3);
         neonS *= parseFloat(`${3 * parseInt(`${neonS}`)}`);
         build2 = parseFloat(`${station4}`) <= neonS;
      }
      while (quest6.startsWith(`${movies9}`)) {
         movies9 ^= movies9;
         break;
      }
      for (let p = 0; p < 1; p++) {
         quest6 = `${(String.fromCharCode(114,0) == quest6 ? quest6.length : movies9)}`;
      }
      while (areaB.length > 2) {
         friendsE += `${movies9}`;
         break;
      }
          let unselectedJ = 2.0;
         eighteeni /= Math.max(3, areaB.length + 2);
         unselectedJ /= Math.max(parseFloat(`${parseInt(`${unselectedJ}`) >> (Math.min(Math.abs(parseInt(`${unselectedJ}`)), 2))}`), 4);
         quest6 += `${eighteeni}`;
      for (let s = 0; s < 1; s++) {
          let starI: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,95,103,95,49,51,0),true ], [String.fromCharCode(114,95,57,55,95,105,112,118,105,100,101,111,0),false ], [String.fromCharCode(115,104,111,119,119,97,118,101,115,95,52,95,51,55,0),true ]]);
          let description_kx = 2;
         friendsE += `${movies9}`;
         starI.set(`${description_kx}`, starI.size);
         description_kx *= 1;
      }
       let type_tA: Map<any, any> = new Map([[String.fromCharCode(104,97,110,100,108,105,110,103,95,117,95,49,48,0),739], [String.fromCharCode(118,95,49,52,95,99,104,97,114,116,115,0),918], [String.fromCharCode(112,97,114,115,101,114,115,95,118,95,55,0),792]]);
         type_tA = new Map([[`${type_tA.size}`, 1]]);
      for (let v = 0; v < 1; v++) {
          let changeb = 0.0;
          let aboutW = 1.0;
         movies9 ^= 2;
         changeb *= parseInt(`${aboutW}`) & 1;
         aboutW += parseInt(`${changeb}`);
      }
         quest6 += `${eighteeni | 1}`;
      if (!friendsE.includes(`${eighteeni}`)) {
         eighteeni /= Math.max(friendsE.length * 1, 5);
      }
      imagemanageru = new Map([[`${movies9}`, movies9 - 3]]);
   }
      await GoogleSignin.hasPlayServices();

   if ((imagemanageru.size / (Math.max(bingN.length, 5))) <= 2) {
      imagemanageru = new Map([[`${championO.size}`, 3]]);
   }

      if (await GoogleSignin.isSignedIn()) {

   for (let c = 0; c < 1; c++) {
      over9 = `${imagemanageru.size}`;
   }
        userInfo = await GoogleSignin.getCurrentUser();
      } else {

      brightnessr /= Math.max(5, championO.size << (Math.min(sourceo.length, 1)));
        userInfo = await GoogleSignin.signIn();
      }

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        
      } else if (error.code === statusCodes.IN_PROGRESS) {

      feedback2 = `${auto__ys.length >> (Math.min(Math.abs(3), 2))}`;
        

       let textlayoutmanagerw: Array<any> = [478, 972];
       let agreementG: Array<any> = [627, 830, 284];
       let floatingm = 2;
         agreementG.push(floatingm);
      for (let a = 0; a < 1; a++) {
         agreementG = [floatingm];
      }
          let flipperU = 4.0;
          let signinupy = false;
          let sidey = String.fromCharCode(115,105,110,113,98,95,119,95,56,53,0);
         floatingm ^= 3;
         flipperU -= (parseFloat(`${(signinupy ? 2 : 3) << (Math.min(sidey.length, 1))}`));
         signinupy = !signinupy;
         sidey += `${(String.fromCharCode(119,0) == sidey ? sidey.length : (signinupy ? 2 : 3))}`;
      if ((1 ^ agreementG.length) == 2 && 4 == (floatingm ^ 1)) {
         agreementG.push(2);
      }
          let upgrade3: Array<any> = [393, 247, 22];
          let qaag_: Map<any, any> = new Map([[String.fromCharCode(98,105,116,95,57,95,56,50,0),true ], [String.fromCharCode(98,97,100,95,48,95,57,55,0),true ]]);
          let recommendationM = String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,95,99,95,52,50,0);
         textlayoutmanagerw = [3];
         upgrade3.push(recommendationM.length | qaag_.size);
         qaag_ = new Map([[`${qaag_.size}`, upgrade3.length % 2]]);
         recommendationM += `${upgrade3.length}`;
      while (agreementG.length >= 1) {
         agreementG = [1 << (Math.min(2, agreementG.length))];
         break;
      }
          let paginations = 1;
         agreementG = [textlayoutmanagerw.length];
         paginations /= Math.max(paginations | paginations, 4);
      let assistU = 8973273 <= floatingm;
      do {
          let selected3 = 4.0;
          let libfollyn = String.fromCharCode(116,95,53,51,95,102,111,112,101,110,0);
          let castingr = true;
          let backgroundL = 0;
         floatingm >>= Math.min(1, Math.abs(agreementG.length - 3));
         selected3 *= parseFloat(`${libfollyn.length}`);
         libfollyn += "2";
         castingr = !libfollyn.includes(`${selected3}`);
         backgroundL /= Math.max(backgroundL, 4);
         if (assistU) {
            break;
         }
      } while (assistU && (agreementG.length <= floatingm));
      if (2 >= (4 * textlayoutmanagerw.length) || (floatingm * textlayoutmanagerw.length) >= 4) {
          let awayt: Map<any, any> = new Map([[String.fromCharCode(120,95,50,55,95,119,101,98,114,116,99,0),528], [String.fromCharCode(102,102,118,108,95,106,95,53,52,0),353]]);
          let humidityF = 5;
         textlayoutmanagerw.push(floatingm ^ humidityF);
         awayt = new Map([[`${awayt.size}`, 3]]);
         humidityF &= 2;
      }
      championO.set(`${backgroundq}`, 2 & backgroundq.length);
        showToast('请勿频繁操作');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

   if (eighteene.get(`${brightnessr}`) != null) {
       let hiadL = true;
       let mailp = String.fromCharCode(109,95,57,54,95,115,99,97,108,101,115,0);
       let nativemoduled = 1;
       let cornerr = 3.0;
       let fastforwardb = 4;
      for (let c = 0; c < 1; c++) {
          let resultP = String.fromCharCode(100,95,56,95,99,111,101,102,0);
          let zhengpianA = 2.0;
          let logoutd = false;
          let libavformatL = 1.0;
         nativemoduled *= ((hiadL ? 3 : 2) + parseInt(`${cornerr}`));
         resultP = "2";
         zhengpianA /= Math.max((parseInt(`${libavformatL}`) << (Math.min(3, Math.abs((logoutd ? 3 : 3))))), 3);
         logoutd = resultP.length >= 40;
         libavformatL += (parseFloat(`${parseInt(`${zhengpianA}`) + (logoutd ? 1 : 3)}`));
      }
      while (hiadL) {
         nativemoduled *= ((hiadL ? 2 : 5) >> (Math.min(Math.abs(parseInt(`${cornerr}`)), 3)));
         break;
      }
         nativemoduled %= Math.max((String.fromCharCode(72,0) == mailp ? nativemoduled : mailp.length), 2);
       let shrinkz = 4.0;
       let roomG = 0.0;
         nativemoduled += ((hiadL ? 3 : 1) * parseInt(`${cornerr}`));
         cornerr /= Math.max(parseFloat(`${nativemoduled ^ 2}`), 5);
         mailp += "1";
      for (let t = 0; t < 3; t++) {
         fastforwardb >>= Math.min(1, Math.abs(parseInt(`${cornerr}`)));
      }
       let libreactnativejniB: Array<any> = [513, 581];
         mailp += "2";
      if (4.77 > (roomG / 2.4) || (libreactnativejniB.length ^ 3) > 5) {
         roomG /= Math.max(parseFloat(`${1}`), 2);
      }
         cornerr += parseFloat(`${fastforwardb}`);
      for (let g = 0; g < 3; g++) {
          let libjsijniprofilerE = 5.0;
          let nativet: Map<any, any> = new Map([[String.fromCharCode(105,95,57,52,95,99,104,105,109,112,0),49], [String.fromCharCode(108,95,54,52,95,97,117,116,111,102,111,99,117,115,105,110,103,0),5]]);
          let viewerP: Map<any, any> = new Map([[String.fromCharCode(109,95,56,54,95,108,105,98,115,119,105,102,116,111,115,0),String.fromCharCode(101,108,97,115,116,105,99,95,100,95,51,0)], [String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,95,101,95,54,0),String.fromCharCode(100,99,97,100,101,99,95,111,95,51,56,0)]]);
          let cricket5 = 5;
         shrinkz *= parseFloat(`${nativemoduled}`);
         libjsijniprofilerE /= Math.max(parseInt(`${libjsijniprofilerE}`), 1);
         nativet = new Map([[`${nativet.size}`, cricket5]]);
         viewerP.set(`${nativet.size}`, 1);
         cricket5 *= cricket5;
      }
         cornerr /= Math.max(parseFloat(`${parseInt(`${roomG}`)}`), 4);
          let logoN: Map<any, any> = new Map([[String.fromCharCode(111,99,116,101,116,95,122,95,56,55,0),336], [String.fromCharCode(102,97,115,116,102,105,114,115,116,112,97,115,115,95,54,95,51,49,0),810]]);
         nativemoduled <<= Math.min(2, Math.abs(3 >> (Math.min(Math.abs(parseInt(`${roomG}`)), 2))));
         logoN.set(`${logoN.size}`, logoN.size);
      brightnessr += 1;
   }
        

      libreanimatedv += `${(libreanimatedv == String.fromCharCode(121,0) ? libreanimatedv.length : parseInt(`${brightnessr}`))}`;
        showToast('谷歌服务获取失败');
      } else {

   if ((championO.size * auto__ys.length) == 3 || (3 * championO.size) == 4) {
       let launchZ = String.fromCharCode(103,95,57,55,95,114,118,118,108,99,0);
       let moonA = String.fromCharCode(111,95,50,54,95,117,115,101,114,105,110,116,101,114,102,97,99,101,0);
       let buildh = 4.0;
      let binddataso = 6113384 >= moonA.length;
      do {
         moonA = `${parseInt(`${buildh}`)}`;
         if (binddataso) {
            break;
         }
      } while ((launchZ.startsWith(`${moonA.length}`)) && binddataso);
      for (let w = 0; w < 1; w++) {
         buildh *= parseFloat(`${launchZ.length & parseInt(`${buildh}`)}`);
      }
         buildh *= parseFloat(`${parseInt(`${buildh}`)}`);
       let graphF = 4.0;
      for (let j = 0; j < 1; j++) {
          let r_unlockl = 0.0;
          let long_bj = String.fromCharCode(104,97,110,100,108,101,114,115,95,51,95,49,0);
          let chato = 5.0;
          let libjsijniprofiler8 = 1;
         buildh += parseFloat(`${moonA.length}`);
         r_unlockl -= parseInt(`${r_unlockl}`);
         long_bj += "3 | libjsijniprofiler8";
         chato /= Math.max(5, libjsijniprofiler8 & 3);
      }
         moonA += `${launchZ.length & 1}`;
         buildh /= Math.max(parseFloat(`${parseInt(`${graphF}`) + 3}`), 5);
      for (let o = 0; o < 3; o++) {
         moonA = `${parseInt(`${buildh}`) / (Math.max(parseInt(`${graphF}`), 9))}`;
      }
      for (let s = 0; s < 3; s++) {
          let floater4 = 0.0;
         graphF *= parseInt(`${buildh}`);
         floater4 += parseFloat(`${parseInt(`${floater4}`)}`);
      }
      auto__ys = `${(launchZ == String.fromCharCode(50,0) ? bingN.length : launchZ.length)}`;
   }
        

      auto__ys += `${sourceo.length}`;
        showToast('登入失败，请稍后再试');
      }
      console.log(error.toString());

   for (let t = 0; t < 3; t++) {
      championO = new Map([[`${imagemanageru.size}`, imagemanageru.size * 1]]);
   }
      return;
    }

    if (userInfo === null) {

      libreanimatedv = `${(auto__ys == String.fromCharCode(101,0) ? auto__ys.length : championO.size)}`;
      showToast('登入失败，请稍后再试');

   while (1 < (5 * feedback2.length)) {
      feedback2 = `${bingN.length | 1}`;
      break;
   }
      return;
    }

    try {

       let historyz = String.fromCharCode(116,95,49,52,95,112,97,114,116,105,116,105,111,110,101,100,0);
       let readv = 2;
         readv <<= Math.min(Math.abs(historyz.length / (Math.max(2, 9))), 5);
         readv ^= 3;
      let cleari = readv >= 8137738;
      do {
         readv ^= historyz.length;
         if (cleari) {
            break;
         }
      } while (((1 % (Math.max(5, readv))) <= 4 || 1 <= (readv % (Math.max(6, historyz.length)))) && cleari);
      for (let y = 0; y < 3; y++) {
          let t_unlock3 = 0.0;
         readv &= parseInt(`${t_unlock3}`);
      }
         historyz += `${readv ^ 1}`;
      while (3 < (1 + historyz.length)) {
         readv &= historyz.length | readv;
         break;
      }
      long_lb /= Math.max(parseInt(`${brightnessr}`), 5);
      setSubmitting(true);

      bingN += `${championO.size % 3}`;
      userInfo = await yys_GesturesConst.signinupUser({
        loginType: 'EMAIL',
        email: userInfo.user.email,
        referralCode: referralCode,
        isGoogleLogin: true,
        userId: userState.user?.userId ?? '',
      });

    } catch (err: any) {
      GoogleSignin.signOut();

       let sellh = 1.0;
       let lesso = 0;
       let handlerM: Array<any> = [298, 491, 619];
      while ((4 * handlerM.length) == 5 && 4 == (4 * handlerM.length)) {
         lesso *= parseInt(`${sellh}`);
         break;
      }
       let whistleX = String.fromCharCode(117,110,98,105,110,100,95,98,95,55,56,0);
       let dycreatorv = String.fromCharCode(98,95,53,95,109,111,111,118,0);
          let ewarded7 = 2.0;
         lesso %= Math.max(1, 1);
         ewarded7 -= 2;
      if ((handlerM.length >> (Math.min(Math.abs(1), 2))) >= 2 || (handlerM.length >> (Math.min(whistleX.length, 5))) >= 1) {
         whistleX = `${(dycreatorv == String.fromCharCode(75,0) ? lesso : dycreatorv.length)}`;
      }
      let armvaJ = 9426980.0 <= sellh;
      do {
          let mbnativea: Map<any, any> = new Map([[String.fromCharCode(118,95,50,53,95,108,112,99,109,0),String.fromCharCode(103,95,54,53,95,99,111,110,102,105,103,117,114,101,0)], [String.fromCharCode(106,111,121,102,117,108,95,50,95,49,50,0),String.fromCharCode(101,110,99,111,100,105,110,103,98,95,52,95,54,56,0)]]);
          let libavformatW: Array<any> = [String.fromCharCode(115,101,99,116,105,111,110,115,95,107,95,57,56,0), String.fromCharCode(100,97,112,95,105,95,57,0)];
          let libreactperfloggerjni6 = 0;
         sellh += libavformatW.length;
         mbnativea.set(`${libreactperfloggerjni6}`, libreactperfloggerjni6 % (Math.max(mbnativea.size, 1)));
         libavformatW = [3];
         if (armvaJ) {
            break;
         }
      } while (armvaJ && (2.88 == (handlerM.length / (Math.max(4, sellh))) && (sellh / 2.88) == 1.81));
      if (3 == whistleX.length) {
         whistleX = "1";
      }
      if ((2 >> (Math.min(1, handlerM.length))) < 1 || 3 < (2 >> (Math.min(3, handlerM.length)))) {
         whistleX += `${parseInt(`${sellh}`)}`;
      }
       let readR = String.fromCharCode(99,97,110,116,95,108,95,53,56,0);
       let videojsJ = String.fromCharCode(109,117,116,101,100,95,110,95,53,52,0);
      while ((lesso % 5) >= 2) {
          let scheduleK: Array<any> = [545, 116, 903];
          let libmapbufferjnil = String.fromCharCode(101,95,53,52,95,97,117,116,111,100,101,116,101,99,116,0);
         lesso ^= whistleX.length;
         scheduleK.push(libmapbufferjnil.length);
         libmapbufferjnil = `${(libmapbufferjnil == String.fromCharCode(70,0) ? scheduleK.length : libmapbufferjnil.length)}`;
         break;
      }
      homeA = new Map([[`${arrowb}`, bingN.length]]);
      showToast(err.toString());

   if ((4 ^ auto__ys.length) < 4 && (auto__ys.length ^ 4) < 1) {
      auto__ys = `${(bingN == String.fromCharCode(103,0) ? bingN.length : championO.size)}`;
   }
      return;
    } finally {

       let showM = 1.0;
       let sansA: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,116,105,111,110,101,100,95,49,95,50,55,0),5], [String.fromCharCode(114,101,109,111,118,101,95,100,95,53,0),980], [String.fromCharCode(108,95,56,95,99,111,110,116,97,99,116,115,0),244]]);
       let quest8 = String.fromCharCode(114,101,112,111,114,116,95,99,95,53,56,0);
          let chinasamek = String.fromCharCode(97,103,97,105,110,95,48,95,49,48,48,0);
          let moviesx = 4.0;
         sansA.set(`${moviesx}`, 3);
         chinasamek += `${(chinasamek == String.fromCharCode(118,0) ? chinasamek.length : chinasamek.length)}`;
         moviesx += parseFloat(`${chinasamek.length}`);
      let pinit_0w = 6745739 >= quest8.length;
      do {
         quest8 = `${3 - parseInt(`${showM}`)}`;
         if (pinit_0w) {
            break;
         }
      } while ((sansA.size < 3) && pinit_0w);
      let pausec = quest8.length >= 9833591;
      do {
         quest8 = `${(quest8 == String.fromCharCode(53,0) ? quest8.length : sansA.size)}`;
         if (pausec) {
            break;
         }
      } while (((quest8.length - sansA.size) >= 4 || 2 >= (quest8.length - 4)) && pausec);
      while (3 == quest8.length) {
         sansA.set(`${showM}`, sansA.size % (Math.max(3, parseInt(`${showM}`))));
         break;
      }
       let reactnativejsI = 3.0;
      if (quest8.length <= parseInt(`${showM}`)) {
         quest8 += `${3 - quest8.length}`;
      }
      let bingk = showM <= 6418690.0;
      do {
          let launchV = false;
          let malaysiaK = String.fromCharCode(112,108,117,114,97,108,95,112,95,57,54,0);
          let selectedL = String.fromCharCode(106,95,49,95,107,101,121,112,97,116,104,115,0);
         showM += sansA.size % (Math.max(quest8.length, 2));
         launchV = !selectedL.endsWith(`${launchV}`);
         malaysiaK += `${((launchV ? 5 : 3))}`;
         selectedL = `${(String.fromCharCode(56,0) == selectedL ? malaysiaK.length : selectedL.length)}`;
         if (bingk) {
            break;
         }
      } while (((reactnativejsI * showM) >= 2.24 && 3.3 >= (showM + 2.24)) && bingk);
      if ((reactnativejsI * showM) > 3.59 || 4.11 > (reactnativejsI * 3.59)) {
         reactnativejsI *= 2;
      }
         reactnativejsI -= 3;
      sourceo = [eighteene.size];
      setSubmitting(false);

       let activityn = String.fromCharCode(118,97,108,105,100,97,116,101,95,117,95,57,57,0);
      while (2 >= activityn.length) {
         activityn = "3";
         break;
      }
      let half3 = 5917195 >= activityn.length;
      do {
         activityn = `${3 >> (Math.min(4, activityn.length))}`;
         if (half3) {
            break;
         }
      } while ((activityn == activityn) && half3);
      if (activityn.startsWith(`${activityn.length}`)) {
         activityn = `${activityn.length & activityn.length}`;
      }
      over9 += "2";
    }

    const resultData = userInfo.data;

      over9 += `${imagemanageru.size}`;

    const user = yys_RelatedTooltips.fromJson(resultData);

   while (Array.from(homeA.values()).includes(arrowb)) {
      arrowb <<= Math.min(over9.length, 2);
      break;
   }

    await dispatch(addUserAuthState(user));

       let friendsh = String.fromCharCode(102,99,112,117,98,108,105,115,104,95,109,95,56,54,0);
         friendsh = `${friendsh.length & friendsh.length}`;
      while (4 >= friendsh.length) {
         friendsh += "2";
         break;
      }
      for (let j = 0; j < 1; j++) {
         friendsh += `${friendsh.length - friendsh.length}`;
      }
      homeA.set(libreanimatedv, libreanimatedv.length);

    if (userInfo.message.includes("注册成功")) {

      brightnessr += libreanimatedv.length * 3;
      navigation.navigate('SetUsername');

    } else if (userInfo.message.includes("登录成功")) {

       let helperD = String.fromCharCode(110,95,54,52,95,115,108,105,100,101,114,0);
       let soundI = String.fromCharCode(106,95,51,52,95,115,99,114,97,112,101,0);
      if (helperD.length <= 2) {
         soundI = `${helperD.length}`;
      }
         helperD = "2";
      sourceo = [over9.length];

      if (user.isVip()) {

      libreanimatedv = `${championO.size | 1}`;
        await AsyncStorage.setItem("showAds", "false");
      } else {

   for (let k = 0; k < 1; k++) {
      auto__ys = `${(libreanimatedv == String.fromCharCode(119,0) ? arrowb : libreanimatedv.length)}`;
   }
        await AsyncStorage.setItem("showAds", "true");
      }

      await dispatch(changeScreenAction('登录成功'));

   for (let i = 0; i < 3; i++) {
      libreanimatedv = `${championO.size << (Math.min(1, Math.abs(parseInt(`${long_lb}`))))}`;
   }

      

   for (let t = 0; t < 3; t++) {
      homeA = new Map([[`${championO.size}`, championO.size]]);
   }
      yys_event_common.userCenterLoginSuccessTimesAnalytics();

      bingN = `${eighteene.size - 1}`;
      yys_Filled.userCenterLoginSuccessTimesAnalytics();

   for (let v = 0; v < 1; v++) {
       let castT = 5.0;
       let send3 = 1.0;
       let stations8 = String.fromCharCode(99,105,110,116,95,109,95,56,53,0);
      while ((send3 / 2.48) == 2.18) {
         send3 *= parseFloat(`${stations8.length >> (Math.min(1, Math.abs(parseInt(`${send3}`))))}`);
         break;
      }
         castT /= Math.max(stations8.length ^ 1, 5);
       let darke = false;
       let subsA = false;
         stations8 = `${2 >> (Math.min(3, stations8.length))}`;
      while ((stations8.length >> (Math.min(Math.abs(4), 2))) < 1 && 5 < (stations8.length & 4)) {
         castT -= ((darke ? 1 : 5));
         break;
      }
      if (darke) {
          let liveJ = String.fromCharCode(104,95,54,55,95,99,111,112,121,114,105,103,104,116,0);
          let fadfdeebbbfdabbbabdadfaaddaaZ = false;
         subsA = send3 <= 89.24 || darke;
         liveJ = `${(liveJ == String.fromCharCode(88,0) ? (fadfdeebbbfdabbbabdadfaaddaaZ ? 1 : 4) : liveJ.length)}`;
         fadfdeebbbfdabbbabdadfaaddaaZ = liveJ.includes(`${fadfdeebbbfdabbbabdadfaaddaaZ}`);
      }
         stations8 += `${parseInt(`${send3}`) ^ 2}`;
         send3 *= parseFloat(`${stations8.length / 2}`);
          let eactA = 3.0;
          let stationsV = false;
          let anytimeg = String.fromCharCode(120,95,56,48,95,115,99,97,108,97,114,109,117,108,116,0);
         darke = (parseFloat(`${anytimeg.length}`) * send3) == 28.61;
         eactA *= parseFloat(`${3 + parseInt(`${eactA}`)}`);
         stationsV = 34.92 >= eactA;
         anytimeg = `${(parseInt(`${eactA}`) * (stationsV ? 5 : 4))}`;
      championO.set(`${long_lb}`, homeA.size);
   }

      if (user.isVip()) {

   if (5 < (imagemanageru.size * championO.size)) {
       let j_playero = 2;
      for (let i = 0; i < 1; i++) {
         j_playero *= j_playero;
      }
         j_playero %= Math.max(3, j_playero);
      while ((j_playero / 3) > 1) {
          let graphicsc = String.fromCharCode(103,101,116,112,97,103,101,115,105,122,101,95,99,95,50,48,0);
         j_playero -= j_playero;
         graphicsc = `${(graphicsc == String.fromCharCode(73,0) ? graphicsc.length : graphicsc.length)}`;
         break;
      }
      imagemanageru.set(backgroundq, feedback2.length);
   }
        yys_event_common.userCenterVipLoginSuccessTimesAnalytics();
      }
      

       let success9: Map<any, any> = new Map([[String.fromCharCode(105,95,57,55,95,101,105,112,0),491], [String.fromCharCode(107,95,57,54,95,100,101,108,111,99,97,116,101,0),529]]);
       let armvaC = true;
      let comment6 = success9.size <= 9724822;
      do {
          let libreactnativeblobk = 5.0;
         success9 = new Map([[`${success9.size}`, success9.size]]);
         libreactnativeblobk /= Math.max(2 * parseInt(`${libreactnativeblobk}`), 5);
         if (comment6) {
            break;
         }
      } while (((3 ^ success9.size) == 3) && comment6);
         armvaC = success9.size >= 97;
         success9 = new Map([[`${success9.size}`, success9.size]]);
         success9.set(`${armvaC}`, 1 - success9.size);
      for (let z = 0; z < 2; z++) {
         success9.set(`${armvaC}`, success9.size * 3);
      }
       let twitter7 = 4.0;
      imagemanageru.set(`${long_lb}`, parseInt(`${long_lb}`) / (Math.max(10, sourceo.length)));

      if (onGooleLoginSuccess) onGooleLoginSuccess();
    }
  }

  const onPressTermNCondition = () => {
       let dplusy = 5.0;
    let brightnessQ = 2.0;
    let libturbomodulejsijni2 = String.fromCharCode(117,110,102,105,108,116,101,114,101,100,95,53,95,56,49,0);
    let maile: Map<any, any> = new Map([[String.fromCharCode(116,95,51,48,95,100,111,99,105,100,0),314], [String.fromCharCode(110,95,48,95,102,112,117,116,115,0),133], [String.fromCharCode(105,95,53,56,95,122,111,110,101,115,0),55]]);
    let mbsplashs = 5;
    let basketballF = false;
    let reacts: Map<any, any> = new Map([[String.fromCharCode(111,95,56,53,95,103,111,108,111,109,98,0),493], [String.fromCharCode(98,117,105,108,100,95,112,95,56,55,0),673]]);
    let penalty7 = 2;
    let rulesD = 0.0;
   if (1 < (mbsplashs - maile.size) && (mbsplashs - maile.size) < 1) {
      mbsplashs %= Math.max(3 & reacts.size, 3);
   }
   if (mbsplashs <= brightnessQ) {
      mbsplashs >>= Math.min(3, Math.abs(mbsplashs));
   }
   let headerp = brightnessQ <= 5403325.0;
   do {
      brightnessQ /= Math.max(5, 1);
      if (headerp) {
         break;
      }
   } while ((!basketballF) && headerp);
   if (3 <= (libturbomodulejsijni2.length ^ maile.size) || 3 <= (3 ^ maile.size)) {
      maile = new Map([[`${maile.size}`, mbsplashs % (Math.max(8, maile.size))]]);
   }
      brightnessQ += 1;
      maile = new Map([[`${brightnessQ}`, parseInt(`${brightnessQ}`) | 1]]);
   let successO = penalty7 <= 7940713;
   do {
      penalty7 *= mbsplashs;
      if (successO) {
         break;
      }
   } while (successO && (penalty7 >= dplusy));
   for (let m = 0; m < 2; m++) {
      basketballF = 16.70 < brightnessQ;
   }
      libturbomodulejsijni2 += `${maile.size}`;
   for (let t = 0; t < 1; t++) {
      brightnessQ -= parseInt(`${brightnessQ}`);
   }
   let rewindL = dplusy <= 8522662.0;
   do {
      dplusy /= Math.max(4, libturbomodulejsijni2.length);
      if (rewindL) {
         break;
      }
   } while ((1.18 <= (1.59 + dplusy)) && rewindL);
      libturbomodulejsijni2 += `${maile.size + 3}`;
   let giftK = reacts.size >= 8280544;
   do {
      reacts = new Map([[`${dplusy}`, mbsplashs - parseInt(`${dplusy}`)]]);
      if (giftK) {
         break;
      }
   } while ((!basketballF) && giftK);
   let vignetteR = 7568299 <= maile.size;
   do {
      maile.set(`${penalty7}`, reacts.size >> (Math.min(1, Math.abs(penalty7))));
      if (vignetteR) {
         break;
      }
   } while ((Array.from(maile.values()).includes(brightnessQ)) && vignetteR);
   while (1.45 == brightnessQ) {
      dplusy -= 1;
      break;
   }
      reacts = new Map([[`${maile.size}`, maile.size]]);

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
       let mapbufferZ = 2;
    let shootm = String.fromCharCode(101,120,116,114,97,102,105,101,108,100,95,55,95,55,48,0);
    let otherw: Array<any> = [296, 169, 706];
    let anytimee = 3.0;
    let backward6 = 4.0;
    let reminder9 = 0.0;
    let libswscaleC = String.fromCharCode(102,95,51,57,95,112,97,114,115,101,0);
    let service4 = 0.0;
    let libfollyY = String.fromCharCode(115,116,105,108,108,95,57,95,50,56,0);
    let tickedX = String.fromCharCode(120,95,57,55,95,114,101,99,101,105,112,116,115,0);
   while (!libfollyY.includes(shootm)) {
       let launcherX = String.fromCharCode(108,111,119,95,111,95,53,57,0);
       let tail6 = String.fromCharCode(115,117,98,112,97,114,116,95,113,95,49,49,0);
       let terms0 = 3.0;
       let controlS = false;
       let kuaishoum = true;
      let blackq = String.fromCharCode(50,120,51,110,57,105,116,49,98,120,0) == tail6;
      do {
         tail6 += `${((kuaishoum ? 4 : 5) & 1)}`;
         if (blackq) {
            break;
         }
      } while (blackq && (launcherX.endsWith(tail6)));
          let unreadi = String.fromCharCode(118,95,53,95,99,104,115,101,116,0);
          let latn6 = String.fromCharCode(100,95,51,54,95,105,110,116,114,101,97,100,119,114,105,116,101,0);
          let mimov: Map<any, any> = new Map([[String.fromCharCode(97,99,111,108,111,114,95,117,95,50,53,0),String.fromCharCode(119,95,52,54,95,117,110,107,105,99,107,0)], [String.fromCharCode(103,95,53,57,95,116,114,97,105,116,115,0),String.fromCharCode(116,104,117,110,107,95,49,95,52,52,0)], [String.fromCharCode(98,97,99,107,100,114,111,112,95,54,95,49,0),String.fromCharCode(99,108,97,115,115,110,97,109,101,95,52,95,52,49,0)]]);
         launcherX = `${latn6.length}`;
         unreadi = `${unreadi.length}`;
         latn6 = `${(unreadi == String.fromCharCode(118,0) ? unreadi.length : mimov.size)}`;
         mimov = new Map([[`${mimov.size}`, 2 * mimov.size]]);
         kuaishoum = terms0 == 75.86;
      for (let c = 0; c < 3; c++) {
         kuaishoum = kuaishoum || 34.72 > terms0;
      }
         tail6 = `${2 - tail6.length}`;
         launcherX = `${launcherX.length & 2}`;
         kuaishoum = tail6.length >= 97;
          let philippinesp = 0;
          let stylesg = String.fromCharCode(100,95,49,52,95,112,97,97,100,0);
          let internetq = true;
         launcherX = `${launcherX.length % 3}`;
         philippinesp %= Math.max(3, 1);
         stylesg = "1";
         internetq = !stylesg.includes(`${internetq}`);
         controlS = (43 == ((!kuaishoum ? 43 : launcherX.length) / (Math.max(launcherX.length, 6))));
       let robotoh = String.fromCharCode(113,117,97,100,114,95,112,95,51,51,0);
      let final_ulC = terms0 <= 5436440.0;
      do {
          let nalyticsp: Map<any, any> = new Map([[String.fromCharCode(103,95,53,52,95,100,101,97,100,0),506], [String.fromCharCode(121,95,51,51,95,115,101,116,116,97,98,108,101,0),249], [String.fromCharCode(109,101,116,114,105,99,115,95,100,95,53,50,0),73]]);
          let foundF = 4.0;
         terms0 *= (parseFloat(`${String.fromCharCode(66,0) == tail6 ? (controlS ? 3 : 2) : tail6.length}`));
         nalyticsp.set(`${foundF}`, parseInt(`${foundF}`) | 1);
         if (final_ulC) {
            break;
         }
      } while ((kuaishoum) && final_ulC);
      while (5 >= launcherX.length) {
         launcherX = `${tail6.length}`;
         break;
      }
          let modalq = String.fromCharCode(109,97,114,115,104,97,108,108,105,110,103,95,117,95,55,51,0);
         tail6 += "1";
         modalq += `${modalq.length}`;
          let userZ = String.fromCharCode(108,105,115,116,101,110,105,110,103,95,110,95,52,49,0);
          let libjsij: Array<any> = [213, 155, 1000];
          let cinit_icF = false;
         terms0 *= (parseFloat(`${tail6.length | (kuaishoum ? 3 : 3)}`));
         userZ += `${userZ.length}`;
         libjsij = [((cinit_icF ? 3 : 1) << (Math.min(Math.abs(1), 2)))];
         cinit_icF = (49 > (libjsij.length << (Math.min(1, Math.abs((cinit_icF ? libjsij.length : 49))))));
         tail6 = `${((controlS ? 2 : 4))}`;
      shootm = `${(parseInt(`${service4}`) << (Math.min(4, Math.abs((controlS ? 5 : 5)))))}`;
      break;
   }

    if (isSubmitting) return;

      shootm += `${shootm.length}`;

    if (isReadTermNCondition == false) {

      libfollyY = `${(String.fromCharCode(108,0) == libfollyY ? libfollyY.length : parseInt(`${service4}`))}`;
      return;

   while ((2 - mapbufferZ) <= 2) {
      anytimee += parseFloat(`${2 - shootm.length}`);
      break;
   }
    }

    const formattedLoginValue = loginType === 'phone' ? loginValue.replace(/\s/g, '') : loginValue;

    

       let colorsL = 0.0;
       let dplus3 = String.fromCharCode(100,105,114,101,99,116,105,111,110,95,48,95,57,55,0);
      let profileI = String.fromCharCode(110,110,55,55,101,108,122,114,118,122,0) == dplus3;
      do {
          let incident1 = 5.0;
          let qaagj: Array<any> = [686, 797, 694];
          let sinaM = 2.0;
          let r_unlock1 = String.fromCharCode(113,95,53,57,95,112,97,115,115,102,0);
          let streamingr: Array<any> = [278, 869];
         dplus3 = "1";
         incident1 *= 1;
         qaagj.push(3 * streamingr.length);
         sinaM /= Math.max(4, parseFloat(`${qaagj.length - 2}`));
         r_unlock1 = `${streamingr.length}`;
         if (profileI) {
            break;
         }
      } while (profileI && ((dplus3.length << (Math.min(Math.abs(4), 5))) >= 3));
         dplus3 = `${dplus3.length % (Math.max(3, 8))}`;
         dplus3 = `${dplus3.length & 1}`;
         dplus3 += `${(String.fromCharCode(78,0) == dplus3 ? dplus3.length : parseInt(`${colorsL}`))}`;
      if ((parseInt(`${colorsL}`) - 5) > 5 || 2.58 > (dplus3.length - colorsL)) {
         dplus3 += "1";
      }
      let libavfilterC = String.fromCharCode(103,99,48,48,104,122,120,0) == dplus3;
      do {
         dplus3 += `${parseInt(`${colorsL}`) % 3}`;
         if (libavfilterC) {
            break;
         }
      } while (libavfilterC && (2.92 < (colorsL / (Math.max(dplus3.length, 8))) || 3 < (dplus3.length % 5)));
      reminder9 += parseFloat(`${otherw.length}`);
    

       let rootx = 3.0;
       let sina6: Map<any, any> = new Map([[String.fromCharCode(112,95,55,51,95,115,101,113,117,101,110,99,101,0),495], [String.fromCharCode(118,95,53,49,95,117,121,118,121,0),896]]);
       let libcrashsdkq: Map<any, any> = new Map([[String.fromCharCode(112,95,51,57,95,103,97,117,115,115,0),209], [String.fromCharCode(111,95,49,50,95,118,105,98,114,97,116,105,111,110,0),199], [String.fromCharCode(108,105,98,95,98,95,56,49,0),386]]);
         libcrashsdkq = new Map([[`${sina6.size}`, parseInt(`${rootx}`) - 1]]);
         libcrashsdkq = new Map([[`${libcrashsdkq.size}`, parseInt(`${rootx}`) % (Math.max(4, libcrashsdkq.size))]]);
       let moviesq = 5;
      while ((moviesq % 4) == 5 || (libcrashsdkq.size % 4) == 1) {
          let libreactc = String.fromCharCode(119,95,49,48,48,95,99,112,117,105,110,102,111,0);
          let sideG = 4.0;
          let hongkongV = 4.0;
          let fastforwardS: Array<any> = [883, 48, 432];
          let projecto = 1.0;
         moviesq %= Math.max(4, sina6.size | libcrashsdkq.size);
         libreactc = `${fastforwardS.length ^ 3}`;
         sideG /= Math.max(4, fastforwardS.length);
         hongkongV *= 1 / (Math.max(4, parseInt(`${projecto}`)));
         projecto -= parseInt(`${hongkongV}`);
         break;
      }
      while ((libcrashsdkq.size + 1) < 1 || (libcrashsdkq.size + 1) < 5) {
         libcrashsdkq = new Map([[`${moviesq}`, moviesq]]);
         break;
      }
         rootx *= parseInt(`${rootx}`);
         sina6.set(`${moviesq}`, 2 - moviesq);
         sina6 = new Map([[`${sina6.size}`, sina6.size + parseInt(`${rootx}`)]]);
         libcrashsdkq.set(`${rootx}`, sina6.size);
      anytimee += parseFloat(`${1}`);
    

       let refreshe: Map<any, any> = new Map([[String.fromCharCode(109,95,56,95,115,101,114,105,97,108,108,121,0),true ], [String.fromCharCode(109,97,114,107,101,100,95,116,95,54,50,0),true ], [String.fromCharCode(114,119,103,116,95,103,95,53,56,0),true ]]);
       let clearR = 0.0;
       let linkD = true;
      let statisticsD = 5597512 <= refreshe.size;
      do {
         refreshe.set(`${linkD}`, ((linkD ? 2 : 5) - 1));
         if (statisticsD) {
            break;
         }
      } while (statisticsD && (2 >= (refreshe.size | 3) || 3 >= refreshe.size));
      let searchbarK = linkD ? !linkD : linkD;
      do {
          let androidg = 1;
          let libhermesz = 3.0;
          let bufferh = 0.0;
          let kuaishouh: Map<any, any> = new Map([[String.fromCharCode(102,95,49,48,95,97,114,114,111,119,0),false ], [String.fromCharCode(97,100,109,105,110,115,95,50,95,49,50,0),false ]]);
          let final_s7y: Array<any> = [572, 914, 391];
         linkD = (androidg - refreshe.size) < 91;
         androidg <<= Math.min(final_s7y.length, 2);
         libhermesz *= 1 & final_s7y.length;
         bufferh -= parseFloat(`${kuaishouh.size}`);
         kuaishouh.set(`${bufferh}`, 3 ^ final_s7y.length);
         if (searchbarK) {
            break;
         }
      } while ((linkD) && searchbarK);
         clearR += parseFloat(`${refreshe.size}`);
         clearR *= parseFloat(`${1 + parseInt(`${clearR}`)}`);
      for (let t = 0; t < 2; t++) {
          let specN = String.fromCharCode(104,95,52,49,95,115,113,114,116,0);
          let clearx = 5.0;
         clearR *= parseFloat(`${1}`);
         specN = `${2 & parseInt(`${clearx}`)}`;
         clearx /= Math.max(specN.length & parseInt(`${clearx}`), 2);
      }
         refreshe.set(`${linkD}`, 3 / (Math.max(parseInt(`${clearR}`), 7)));
         clearR += parseFloat(`${parseInt(`${clearR}`)}`);
          let loginM = true;
         refreshe = new Map([[`${loginM}`, (3 << (Math.min(Math.abs((linkD ? 2 : 3)), 3)))]]);
          let scoreA: Map<any, any> = new Map([[String.fromCharCode(111,95,55,53,95,98,114,111,119,110,0),571], [String.fromCharCode(115,117,98,112,114,111,99,101,115,115,95,117,95,50,57,0),243]]);
         clearR += parseFloat(`${scoreA.size}`);
      libswscaleC = "2";
    

   for (let f = 0; f < 2; f++) {
       let cancelo = 1;
       let actionb = 2;
       let hooksz = true;
       let macauJ = String.fromCharCode(112,97,115,112,95,53,95,56,55,0);
       let streamingY = 4.0;
       let a_countX = 1.0;
         cancelo += parseInt(`${streamingY}`);
          let rootu = String.fromCharCode(116,95,51,51,95,101,108,115,116,0);
          let dataU: Map<any, any> = new Map([[String.fromCharCode(117,114,97,110,100,111,109,95,97,95,56,48,0),String.fromCharCode(103,95,56,53,95,102,117,114,116,104,101,114,0)], [String.fromCharCode(118,95,56,95,111,110,116,111,0),String.fromCharCode(122,95,57,53,95,112,97,99,107,115,0)], [String.fromCharCode(105,110,116,101,114,114,117,112,116,101,100,95,106,95,56,54,0),String.fromCharCode(114,95,57,52,95,100,101,99,105,115,105,111,110,0)]]);
         hooksz = 76.73 >= (a_countX * streamingY);
         rootu += `${dataU.size ^ 1}`;
         dataU.set(rootu, rootu.length & 1);
      let download_ = 7311329 >= cancelo;
      do {
         cancelo /= Math.max(macauJ.length & parseInt(`${streamingY}`), 1);
         if (download_) {
            break;
         }
      } while (download_ && (2.86 <= (streamingY * cancelo)));
      for (let b = 0; b < 3; b++) {
          let soundx = String.fromCharCode(99,101,110,116,114,97,108,105,116,121,95,97,95,49,52,0);
         actionb >>= Math.min(Math.abs((parseInt(`${streamingY}`) - (hooksz ? 2 : 5))), 5);
         soundx = "3";
      }
      while ((parseInt(`${streamingY}`) + 2) >= 5 || (macauJ.length / 2) >= 3) {
         macauJ += `${2 % (Math.max(5, parseInt(`${streamingY}`)))}`;
         break;
      }
         macauJ = `${cancelo ^ actionb}`;
      for (let t = 0; t < 1; t++) {
         streamingY *= parseInt(`${a_countX}`) << (Math.min(2, Math.abs(parseInt(`${streamingY}`))));
      }
          let round3 = 3;
          let window_nK = String.fromCharCode(97,99,101,115,115,111,114,121,95,101,95,56,55,0);
         macauJ = `${actionb}`;
         round3 /= Math.max(round3 & 2, 1);
         window_nK += "3";
          let alertV = 5.0;
         streamingY += actionb ^ 2;
         alertV += parseFloat(`${parseInt(`${alertV}`) % 3}`);
         hooksz = macauJ.length < actionb;
      for (let h = 0; h < 1; h++) {
         hooksz = macauJ.length > 27 && streamingY > 96.20;
      }
       let router7: Map<any, any> = new Map([[String.fromCharCode(119,95,54,49,95,101,121,99,104,97,105,110,0),324], [String.fromCharCode(114,101,99,116,95,100,95,54,54,0),141]]);
      let hiadk = macauJ == String.fromCharCode(108,54,103,0);
      do {
         macauJ = `${(macauJ == String.fromCharCode(114,0) ? parseInt(`${a_countX}`) : macauJ.length)}`;
         if (hiadk) {
            break;
         }
      } while ((hooksz) && hiadk);
      if (hooksz) {
         a_countX *= 2;
      }
      anytimee += (parseFloat(`${(hooksz ? 3 : 4) % (Math.max(parseInt(`${backward6}`), 6))}`));
   }

    if (formattedLoginValue === "" || loginValueErrMsg !== null) {
      setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
      return;
    }

    try {

      libswscaleC = `${(String.fromCharCode(109,0) == libfollyY ? parseInt(`${reminder9}`) : libfollyY.length)}`;
      setSubmitting(true);

   for (let u = 0; u < 3; u++) {
       let sell2: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,105,122,97,116,105,111,110,95,57,95,54,49,0),983], [String.fromCharCode(122,95,52,52,95,109,117,108,116,105,112,97,114,116,0),487]]);
       let hoverP = 4;
       let commentn = 2.0;
       let matchesI: Map<any, any> = new Map([[String.fromCharCode(101,110,103,108,105,115,104,95,103,95,50,57,0),888], [String.fromCharCode(114,101,113,117,101,115,116,101,114,95,56,95,56,52,0),537]]);
         sell2.set(`${commentn}`, parseInt(`${commentn}`) >> (Math.min(3, Math.abs(hoverP))));
          let configurer: Map<any, any> = new Map([[String.fromCharCode(115,117,98,98,97,110,100,95,109,95,50,50,0),6], [String.fromCharCode(105,95,57,57,95,119,97,114,110,105,110,103,115,0),533], [String.fromCharCode(99,95,56,56,95,109,105,110,105,109,97,108,108,121,0),899]]);
         matchesI = new Map([[`${configurer.size}`, parseInt(`${commentn}`)]]);
      let a_imageU = commentn >= 9365710.0;
      do {
          let singapore8 = true;
          let libzeusG = String.fromCharCode(99,111,114,101,105,109,97,103,101,95,97,95,56,0);
         commentn += parseInt(`${commentn}`) * 2;
         singapore8 = (33 == (libzeusG.length & (!singapore8 ? 33 : libzeusG.length)));
         if (a_imageU) {
            break;
         }
      } while (((3 - hoverP) >= 3) && a_imageU);
      let bing_ = 8104431 >= hoverP;
      do {
          let stationsK: Map<any, any> = new Map([[String.fromCharCode(101,109,109,105,110,116,114,105,110,95,53,95,57,51,0),true ], [String.fromCharCode(115,116,114,101,110,103,116,104,95,53,95,53,50,0),false ], [String.fromCharCode(110,95,55,48,95,97,112,112,101,97,114,0),false ]]);
         hoverP >>= Math.min(Math.abs(hoverP), 2);
         stationsK.set(`${stationsK.size}`, stationsK.size);
         if (bing_) {
            break;
         }
      } while (bing_ && (sell2.get(`${hoverP}`) == null));
         matchesI = new Map([[`${matchesI.size}`, parseInt(`${commentn}`) / 1]]);
      for (let z = 0; z < 1; z++) {
          let userv: Array<any> = [170, 62, 596];
          let eventj = String.fromCharCode(108,117,109,98,101,114,106,97,99,107,95,48,95,50,53,0);
          let runtimeschedulerW = 3.0;
          let recommendation_ = true;
         commentn -= 3 | parseInt(`${runtimeschedulerW}`);
         userv.push(2);
         eventj = `${((recommendation_ ? 5 : 4) | eventj.length)}`;
         runtimeschedulerW += eventj.length;
      }
          let mbridgeW = true;
         sell2.set(`${matchesI.size}`, matchesI.size / 1);
         mbridgeW = (!mbridgeW ? !mbridgeW : !mbridgeW);
      for (let g = 0; g < 2; g++) {
          let sina4: Map<any, any> = new Map([[String.fromCharCode(109,95,52,48,95,98,105,116,105,122,101,110,0),76], [String.fromCharCode(115,95,50,48,95,99,111,100,101,115,116,114,101,97,109,0),804]]);
          let pangleM = String.fromCharCode(119,104,97,116,115,95,56,95,53,51,0);
          let dialogj = 4.0;
         sell2 = new Map([[`${sell2.size}`, sell2.size]]);
         sina4 = new Map([[`${sina4.size}`, pangleM.length >> (Math.min(1, Math.abs(sina4.size)))]]);
         pangleM = "2";
         dialogj += parseFloat(`${1 & sina4.size}`);
      }
         commentn *= parseInt(`${commentn}`) * sell2.size;
      while ((hoverP ^ sell2.size) == 1 || 1 == (1 ^ hoverP)) {
          let countdownm = 5;
          let lightd = 4;
         hoverP -= countdownm;
         countdownm %= Math.max(2, 2);
         lightd ^= lightd & 2;
         break;
      }
          let libmapbufferjniV = 5;
          let dycreatorb = String.fromCharCode(115,116,100,111,117,116,95,105,95,50,57,0);
          let renewQ = false;
         matchesI.set(`${hoverP}`, hoverP);
         libmapbufferjniV &= libmapbufferjniV;
         dycreatorb = `${(dycreatorb == String.fromCharCode(110,0) ? libmapbufferjniV : dycreatorb.length)}`;
         renewQ = !renewQ;
       let termsL: Map<any, any> = new Map([[String.fromCharCode(115,121,115,116,101,109,100,101,112,101,110,100,101,110,116,95,105,95,53,54,0),700], [String.fromCharCode(121,115,108,111,103,95,100,95,49,53,0),179], [String.fromCharCode(115,119,97,116,99,104,95,112,95,50,50,0),926]]);
      libswscaleC = `${shootm.length}`;
   }
      await yys_GesturesConst.signinupUser({
        loginType: loginType === 'email' ? 'EMAIL' : 'SMS',
        email: loginType === 'email' ? loginValue : undefined,
        
        phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + formattedLoginValue : undefined,
        countryId: loginType === 'phone' ? countryPhoneSelected?.country_id : undefined,
        referralCode: referralCode,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      setSubmitting(false);

      libfollyY = `${2 & libswscaleC.length}`;
      setLoginValueErrMsg(err.message);

   if (anytimee >= 5.85) {
      anytimee /= Math.max(parseFloat(`${3 - otherw.length}`), 4);
   }
      return;
    }

    setSubmitting(false);

      shootm = `${parseInt(`${anytimee}`)}`;

    dispatch(hideBottomSheetAction());

       let placeholderF = 4.0;
       let selectionn = 2.0;
      if (4.39 < (placeholderF / (Math.max(3.47, 8)))) {
         placeholderF /= Math.max(parseFloat(`${parseInt(`${selectionn}`) ^ 3}`), 5);
      }
      if (5.6 > (placeholderF * selectionn)) {
          let arrowS = String.fromCharCode(119,105,110,116,104,114,101,97,100,95,111,95,52,56,0);
          let penaltyU = String.fromCharCode(111,95,50,54,95,114,101,97,100,120,98,108,111,99,107,0);
          let editR = String.fromCharCode(107,101,121,98,111,97,114,100,95,108,95,56,50,0);
         selectionn += 1;
         arrowS += `${1 ^ penaltyU.length}`;
         penaltyU += `${arrowS.length % 3}`;
         editR = `${editR.length - arrowS.length}`;
      }
      while ((4.68 * selectionn) == 2.87) {
         selectionn += parseInt(`${selectionn}`) - 1;
         break;
      }
         placeholderF += parseFloat(`${2 * parseInt(`${selectionn}`)}`);
       let privacyK = String.fromCharCode(112,95,49,51,95,115,105,108,107,0);
          let catalogA = 4.0;
          let direct0: Array<any> = [96, 166];
          let moviesg = 0.0;
         privacyK += `${1 | parseInt(`${catalogA}`)}`;
         catalogA += parseFloat(`${direct0.length}`);
         direct0.push(direct0.length << (Math.min(Math.abs(2), 3)));
         moviesg -= 3 << (Math.min(Math.abs(parseInt(`${moviesg}`)), 3));
      libfollyY = `${parseInt(`${service4}`)}`;
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

type yys_Styles = {
  loginType: 'email' | 'phone',
  loginValue: string,
  referralCode: string,
  loginValueErrMsg: string | null,
  referralCodeErrMsg: string | null,
  isReadTermNCondition: boolean,
  countryPhoneSelected?: yys_Down,
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
}: yys_Styles) => {
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
            source={require("@static/images/profile/minimizeClub.png")}
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
                source={require("@static/images/profile/mappingClub.png")}
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
              source={require("@static/images/invite/hongkongLibswresampleSigmob.png")}
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
                source={require("@static/images/profile/mappingClub.png")}
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
              source={require("@static/images/invite/hongkongLibswresampleSigmob.png")}
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
        <GmailIcon style={{ marginRight: 10, }} />
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
