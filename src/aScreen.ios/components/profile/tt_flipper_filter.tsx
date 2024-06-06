import { Button } from "@ant-design/react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from "react";
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
import SpinnerOverlay from "../modal/tt_mode_core";
import PhoneIcon from '@static/images/description_dSplashPrediction.svg';
import MailIcon from '@static/images/middleLineUnlock.svg';
import GmailIcon from '@static/images/castMapping.svg';
import DropdownIcon from '@static/images/dangerLauncherRecommendation.svg';
import { CountryPhoneList } from "./tt_episode";
import FastImage from '../common/tt_connection';
import { ttGradleTrash } from "@type/tt_line_borderless";
import { ReadAgreementPrivacyPolicy } from "./tt_core";

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useQuery } from "@tanstack/react-query";
import { API_DOMAIN, IS_OTHER_SKIN } from "@utility/tt_trophy_cross";
import { ttGray } from "@utility/tt_selection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import tt_humidity_guide from "../../../../Umeng/tt_humidity_guide";
import { useDispatch } from "react-redux";
import { addUserAuthState } from "@redux/actions/tt_topon";
import { ttTramini } from "@api";
import { ttFast } from "@models/tt_stations_right";
import { ttGoal } from "@redux/reducers/tt_selected";
import ttDownTick from "../../../../AppsFlyer/tt_fastforward";
import TickedIcon from '@static/images/indicatorCast.svg';


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
       let settingE = true;
    let playlist6 = 1;
    let showE: Array<any> = [315, 323];
    let questt: Array<any> = [203, 950];
    let predictiong: Array<any> = [742, 753, 873];
    let dplus8 = String.fromCharCode(116,114,101,101,116,111,107,95,116,95,53,55,0);
    let stationX = 5.0;
    let tickedo = false;
    let holderV = String.fromCharCode(103,95,50,51,95,114,111,116,114,0);
    let mailz = 5;
    let stringsb = String.fromCharCode(114,101,116,117,114,110,95,52,95,56,50,0);
    let analyticy = 0;
    let stats0 = 5.0;
    let emojiz = 4;
    let giftV = String.fromCharCode(115,95,53,50,95,105,115,100,105,97,99,114,105,116,105,99,0);
   for (let p = 0; p < 2; p++) {
      tickedo = dplus8.includes(`${stationX}`);
   }
      settingE = String.fromCharCode(73,0) == dplus8 && questt.length <= 71;
      dplus8 += `${3 ^ predictiong.length}`;
   if ((stringsb.length * mailz) < 5) {
      stringsb = `${playlist6}`;
   }
      predictiong.push(predictiong.length * analyticy);
      playlist6 *= mailz;

    setloginType('email');

   while ((showE.length * analyticy) <= 3) {
       let descn = 2.0;
       let type_mn = 0;
       let volumei: Array<any> = [755, 902];
       let nextu = false;
         volumei = [((nextu ? 5 : 1) & parseInt(`${descn}`))];
         nextu = descn > 67.5;
      for (let p = 0; p < 1; p++) {
         volumei.push(parseInt(`${descn}`) & 1);
      }
       let moony = String.fromCharCode(98,95,50,56,95,97,117,116,111,114,101,102,114,101,115,104,0);
         type_mn %= Math.max(3, 1 << (Math.min(Math.abs(type_mn), 5)));
       let rewards = false;
       let middlewareu = true;
      while ((type_mn - 5) >= 4 || type_mn >= 5) {
          let watchq = true;
          let soundX = String.fromCharCode(105,95,55,57,95,115,116,97,99,107,116,114,97,99,101,0);
          let eighteenc: Array<any> = [950, 804, 435];
         rewards = !rewards || 83 >= type_mn;
         watchq = (45 <= (eighteenc.length % (Math.max(9, (watchq ? eighteenc.length : 45)))));
         soundX += `${1 & eighteenc.length}`;
         break;
      }
         rewards = (!rewards ? middlewareu : rewards);
      while (2 == (1 ^ volumei.length) && (type_mn ^ 1) == 1) {
         volumei.push((2 >> (Math.min(Math.abs((middlewareu ? 4 : 5)), 3))));
         break;
      }
          let gestureJ: Map<any, any> = new Map([[String.fromCharCode(107,95,57,95,115,116,117,102,102,105,110,103,0),String.fromCharCode(97,100,106,117,115,116,105,110,103,95,99,95,51,51,0)], [String.fromCharCode(102,111,114,109,115,104,101,101,116,95,48,95,49,48,0),String.fromCharCode(103,115,109,100,101,99,95,114,95,57,57,0)], [String.fromCharCode(110,95,52,55,95,118,97,99,97,110,116,0),String.fromCharCode(117,110,104,105,103,104,108,105,103,104,116,95,49,95,54,51,0)]]);
          let network4 = String.fromCharCode(114,95,53,49,95,115,117,98,115,101,113,117,101,110,99,101,0);
         descn /= Math.max(3, (parseFloat(`${network4.length << (Math.min(5, Math.abs((rewards ? 2 : 3))))}`)));
         gestureJ = new Map([[`${gestureJ.size}`, 1]]);
         network4 += "2";
          let i_imageB = 5;
          let logoutG = 0.0;
         volumei = [volumei.length];
         i_imageB += 1;
         logoutG *= i_imageB >> (Math.min(Math.abs(parseInt(`${logoutG}`)), 3));
      let launchY = middlewareu ? !middlewareu : middlewareu;
      do {
         middlewareu = ((moony.length >> (Math.min(4, Math.abs((nextu ? 7 : moony.length))))) == 7);
         if (launchY) {
            break;
         }
      } while ((1.56 >= (descn / 2.65) && !middlewareu) && launchY);
      analyticy <<= Math.min(Math.abs(type_mn), 3);
      break;
   }
      dplus8 = "1";
       let androidK = 3.0;
         androidK /= Math.max(parseInt(`${androidK}`) % (Math.max(parseInt(`${androidK}`), 7)), 1);
      for (let j = 0; j < 3; j++) {
         androidK -= parseInt(`${androidK}`) & parseInt(`${androidK}`);
      }
         androidK /= Math.max(parseInt(`${androidK}`), 2);
      dplus8 += `${questt.length % (Math.max(stringsb.length, 9))}`;
      tickedo = 55 >= showE.length;
   for (let p = 0; p < 1; p++) {
      dplus8 += "1";
   }
   for (let w = 0; w < 3; w++) {
       let live8 = String.fromCharCode(115,101,116,100,97,114,95,55,95,51,49,0);
       let gestures5 = String.fromCharCode(115,95,51,50,95,105,115,115,0);
       let feedbackA = String.fromCharCode(119,95,50,95,116,119,101,97,107,115,0);
         gestures5 = `${(String.fromCharCode(55,0) == feedbackA ? live8.length : feedbackA.length)}`;
      if (feedbackA != live8) {
         live8 += `${(live8 == String.fromCharCode(119,0) ? gestures5.length : live8.length)}`;
      }
      if (gestures5 == live8) {
         live8 = `${feedbackA.length % (Math.max(2, live8.length))}`;
      }
      while (feedbackA == String.fromCharCode(72,0)) {
         live8 = `${3 ^ gestures5.length}`;
         break;
      }
          let checkbox4 = String.fromCharCode(99,97,108,108,98,97,99,107,115,95,97,95,57,56,0);
          let redirectL = String.fromCharCode(101,114,114,111,114,99,98,95,118,95,55,48,0);
          let fileds: Map<any, any> = new Map([[String.fromCharCode(114,103,98,97,95,102,95,56,52,0),672], [String.fromCharCode(107,95,57,95,116,114,117,101,115,112,101,101,99,104,0),112], [String.fromCharCode(104,95,53,52,95,115,108,105,100,101,0),636]]);
         feedbackA = `${1 + redirectL.length}`;
         checkbox4 += `${3 >> (Math.min(3, checkbox4.length))}`;
         redirectL += "2";
         fileds.set(checkbox4, (checkbox4 == String.fromCharCode(51,0) ? fileds.size : checkbox4.length));
      if (gestures5.length > live8.length) {
          let robotof = 2.0;
          let forwardg = 2;
         live8 = "3";
         robotof *= parseInt(`${robotof}`) >> (Math.min(1, Math.abs(2)));
         forwardg |= forwardg & 1;
      }
          let h_positiong = 2.0;
          let videot = true;
         gestures5 = `${gestures5.length % 1}`;
         h_positiong /= Math.max((parseFloat(`${(videot ? 3 : 2) << (Math.min(Math.abs(parseInt(`${h_positiong}`)), 2))}`)), 4);
         videot = h_positiong > 92.10 && videot;
      if (live8.length <= 3) {
         live8 = `${1 - gestures5.length}`;
      }
      while (feedbackA == gestures5) {
          let incidentR: Map<any, any> = new Map([[String.fromCharCode(115,116,97,107,105,110,103,95,55,95,51,50,0),false ], [String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,118,95,52,49,0),false ], [String.fromCharCode(105,119,104,116,120,95,122,95,54,48,0),true ]]);
          let animationO: Array<any> = [507, 629];
          let selectionU = String.fromCharCode(103,95,57,57,95,100,105,116,97,110,99,101,0);
         gestures5 = `${feedbackA.length}`;
         incidentR.set(`${animationO.length}`, 3 | animationO.length);
         selectionU += `${1 & selectionU.length}`;
         break;
      }
      stats0 /= Math.max(4, feedbackA.length / (Math.max(2, 3)));
   }
    setLoginValue('');

       let termsA = String.fromCharCode(121,95,54,55,95,107,109,101,97,110,115,0);
      while (termsA.startsWith(`${termsA.length}`)) {
         termsA = `${(termsA == String.fromCharCode(110,0) ? termsA.length : termsA.length)}`;
         break;
      }
       let inactivee = String.fromCharCode(114,101,115,112,101,99,116,105,110,103,95,100,95,57,56,0);
       let point4 = String.fromCharCode(101,108,101,109,101,110,116,115,95,98,95,57,52,0);
       let delegate_uo = true;
       let config1 = false;
      settingE = 72 >= holderV.length && stats0 >= 61.30;
   while (2 > (showE.length % 2) && (showE.length % (Math.max(questt.length, 9))) > 2) {
       let libcrashsdkb = 4;
       let f_unlockL: Array<any> = [String.fromCharCode(107,95,57,57,95,121,111,110,108,121,0), String.fromCharCode(99,95,48,95,109,105,114,114,111,114,105,110,103,0), String.fromCharCode(122,95,57,95,111,105,100,0)];
         f_unlockL.push(3);
       let langp = 0.0;
      if (2 < (libcrashsdkb + 2) && (libcrashsdkb + 2) < 5) {
         f_unlockL.push(parseInt(`${langp}`) + libcrashsdkb);
      }
         langp *= 3 / (Math.max(9, parseInt(`${langp}`)));
         langp -= 3 / (Math.max(8, libcrashsdkb));
          let subsa = 3;
         f_unlockL = [parseInt(`${langp}`)];
         subsa |= subsa;
      showE = [3 >> (Math.min(5, Math.abs(libcrashsdkb)))];
      break;
   }
       let showh = String.fromCharCode(99,111,110,118,101,114,115,97,116,105,111,110,95,110,95,51,51,0);
      for (let k = 0; k < 3; k++) {
          let listl: Array<any> = [250, 339, 89];
         showh = `${showh.length | 1}`;
         listl.push(listl.length >> (Math.min(5, listl.length)));
      }
         showh += `${showh.length | 2}`;
      for (let s = 0; s < 2; s++) {
         showh += `${showh.length + showh.length}`;
      }
      playlist6 -= playlist6 * showE.length;
       let searchbarp = 2.0;
       let mappingF = 2;
       let oranged = String.fromCharCode(116,97,103,98,105,116,95,116,95,49,0);
         oranged += "1";
         searchbarp *= parseFloat(`${oranged.length ^ 2}`);
         oranged = "1";
      while (4 == oranged.length) {
         oranged += `${mappingF / (Math.max(6, oranged.length))}`;
         break;
      }
      for (let d = 0; d < 3; d++) {
          let membershipY = String.fromCharCode(97,110,99,104,111,114,95,53,95,54,50,0);
          let changeI: Array<any> = [803, 890];
          let utilsM = 3.0;
          let i_managerX = 4;
         oranged = `${(String.fromCharCode(76,0) == membershipY ? membershipY.length : parseInt(`${searchbarp}`))}`;
         changeI = [changeI.length];
         utilsM /= Math.max(4, parseFloat(`${parseInt(`${utilsM}`) | 2}`));
         i_managerX |= changeI.length;
      }
      for (let u = 0; u < 3; u++) {
         oranged += `${mappingF}`;
      }
          let shirtX = String.fromCharCode(122,95,56,95,115,114,116,99,112,0);
          let configured = String.fromCharCode(118,97,114,105,97,110,116,95,110,95,57,51,0);
         mappingF <<= Math.min(shirtX.length, 3);
         shirtX = `${configured.length}`;
         configured = `${configured.length}`;
       let tempx = 2;
          let materialJ = 0;
          let controll = 1.0;
          let muteds = String.fromCharCode(103,95,54,52,95,101,120,116,114,97,115,0);
         tempx %= Math.max((String.fromCharCode(68,0) == muteds ? parseInt(`${searchbarp}`) : muteds.length), 4);
         materialJ |= 1 >> (Math.min(Math.abs(materialJ), 2));
         controll /= Math.max(5, parseInt(`${controll}`));
      holderV = `${parseInt(`${stats0}`) * 2}`;
   let combined7 = stringsb == String.fromCharCode(119,98,49,115,108,103,0);
   do {
       let saveQ = String.fromCharCode(115,95,53,55,95,99,97,109,112,97,105,103,110,0);
       let videoI = 3.0;
       let loadingV = 4.0;
      while (videoI < 1.81) {
         videoI /= Math.max(3, parseFloat(`${parseInt(`${videoI}`) << (Math.min(Math.abs(3), 3))}`));
         break;
      }
      let dropdownL = loadingV <= 9520617.0;
      do {
         loadingV += saveQ.length << (Math.min(Math.abs(1), 5));
         if (dropdownL) {
            break;
         }
      } while ((5.3 <= (loadingV * videoI)) && dropdownL);
          let plusR = 4.0;
         saveQ += `${parseInt(`${plusR}`) % 2}`;
          let short_j9t = String.fromCharCode(112,95,49,54,95,119,104,116,120,0);
          let gesturest = 0;
         saveQ = `${(saveQ == String.fromCharCode(67,0) ? parseInt(`${loadingV}`) : saveQ.length)}`;
         short_j9t = `${short_j9t.length | 3}`;
         gesturest <<= Math.min(short_j9t.length, 1);
         videoI /= Math.max(parseFloat(`${3}`), 4);
          let changey = 5.0;
          let updatesw = true;
          let k_titlet = String.fromCharCode(104,95,57,57,95,119,105,110,100,105,110,103,0);
         videoI /= Math.max(parseFloat(`${parseInt(`${changey}`)}`), 2);
         updatesw = !updatesw && k_titlet.length > 15;
         k_titlet += `${((updatesw ? 1 : 1))}`;
      while (videoI < 5.33) {
         loadingV /= Math.max(saveQ.length >> (Math.min(Math.abs(1), 1)), 3);
         break;
      }
         videoI -= parseFloat(`${parseInt(`${loadingV}`) * 1}`);
      let photoS = 9184053.0 >= videoI;
      do {
         videoI /= Math.max(parseFloat(`${saveQ.length}`), 5);
         if (photoS) {
            break;
         }
      } while ((1.16 == (1.47 * videoI) && 1.14 == (loadingV - 1.47)) && photoS);
      stringsb += "3";
      if (combined7) {
         break;
      }
   } while (combined7 && (!stringsb.includes(`${predictiong.length}`)));
      playlist6 |= ((tickedo ? 1 : 2) >> (Math.min(Math.abs(mailz), 3)));
    setReferralCode('');

      questt = [(mailz >> (Math.min(4, Math.abs((tickedo ? 4 : 1)))))];
       let pathE = true;
       let flyerW = true;
         flyerW = !pathE;
      for (let p = 0; p < 2; p++) {
         pathE = (flyerW ? pathE : flyerW);
      }
         pathE = !flyerW;
         flyerW = pathE;
      for (let y = 0; y < 1; y++) {
          let resendh = String.fromCharCode(102,105,108,116,101,114,103,114,97,112,104,95,48,95,50,54,0);
          let holderK = String.fromCharCode(103,95,54,50,95,115,117,114,102,97,99,101,0);
          let controlsl = 4.0;
         pathE = !flyerW;
         resendh += `${parseInt(`${controlsl}`)}`;
         holderK += "3";
         controlsl /= Math.max(2, parseFloat(`${parseInt(`${controlsl}`) >> (Math.min(resendh.length, 1))}`));
      }
      let mimo8 = pathE ? !pathE : pathE;
      do {
         pathE = flyerW;
         if (mimo8) {
            break;
         }
      } while (mimo8 && (!flyerW));
      tickedo = !tickedo;
   while (!tickedo) {
       let mappingm = String.fromCharCode(109,95,51,52,95,98,111,110,106,111,117,114,0);
       let savet = String.fromCharCode(116,104,101,116,97,95,99,95,56,48,0);
       let statisticsN = String.fromCharCode(98,97,122,101,108,95,98,95,55,48,0);
       let renewK = true;
       let descA: Array<any> = [String.fromCharCode(117,110,98,111,110,100,95,115,95,56,53,0), String.fromCharCode(100,102,99,116,95,120,95,55,48,0), String.fromCharCode(97,100,115,103,97,115,95,104,95,55,55,0)];
         savet += `${mappingm.length << (Math.min(Math.abs(1), 1))}`;
          let animation7 = true;
          let searchbari: Array<any> = [534, 198, 9];
         descA.push(((renewK ? 1 : 3) | 2));
         animation7 = searchbari.length <= 26;
         searchbari.push(((animation7 ? 1 : 1) | searchbari.length));
         mappingm += `${2 ^ mappingm.length}`;
         statisticsN = `${((renewK ? 1 : 1) % (Math.max(savet.length, 4)))}`;
         savet = `${((renewK ? 3 : 1))}`;
      if (!renewK) {
         renewK = statisticsN.length > 42 || savet.length > 42;
      }
         statisticsN += "2";
      for (let q = 0; q < 3; q++) {
         descA = [descA.length];
      }
      if (savet.length < 1) {
         renewK = savet == String.fromCharCode(74,0) && mappingm.length < 5;
      }
         savet += `${1 - mappingm.length}`;
       let selectionK = String.fromCharCode(120,95,51,51,95,112,114,101,115,117,109,101,0);
       let tempw = String.fromCharCode(113,95,53,48,95,114,117,98,121,0);
          let detailZ = 5;
          let playE = String.fromCharCode(103,95,57,51,95,112,115,121,109,111,100,101,108,0);
         selectionK = "3";
         detailZ |= detailZ ^ 2;
         playE = `${playE.length}`;
      let main_xG = renewK ? !renewK : renewK;
      do {
         renewK = selectionK == tempw;
         if (main_xG) {
            break;
         }
      } while ((2 <= (descA.length + 4)) && main_xG);
          let confirmationY: Array<any> = [35, 357, 445];
         tempw += `${descA.length}`;
         confirmationY.push(1);
         renewK = !renewK;
      tickedo = (playlist6 % (Math.max(statisticsN.length, 5))) < 44;
      break;
   }
      questt = [playlist6];
      stringsb += `${mailz}`;
      predictiong = [parseInt(`${stationX}`) * 1];
    setLoginValueErrMsg(null);

   while ((dplus8.length - 4) > 5) {
       let completex = String.fromCharCode(103,101,116,112,105,120,95,116,95,53,55,0);
       let models5 = 2.0;
       let temperature4 = String.fromCharCode(120,102,97,99,101,95,106,95,49,0);
       let controlsV = String.fromCharCode(110,111,109,101,109,95,120,95,55,52,0);
       let playercommon0 = String.fromCharCode(110,109,104,100,95,117,95,52,48,0);
      let whatsappU = 6792322 <= completex.length;
      do {
         completex = "3";
         if (whatsappU) {
            break;
         }
      } while ((temperature4.length > 2) && whatsappU);
      for (let i = 0; i < 3; i++) {
          let rewardO = String.fromCharCode(101,114,97,115,101,100,95,48,95,53,51,0);
          let settingsC = 0;
          let floating7 = 3;
          let zhubo1: Array<any> = [String.fromCharCode(107,95,54,52,95,115,105,100,101,100,97,116,97,0), String.fromCharCode(102,95,52,54,95,107,101,121,100,105,114,0), String.fromCharCode(109,101,114,103,101,95,53,95,48,0)];
          let expiredE = String.fromCharCode(105,95,52,56,95,100,114,97,119,103,114,105,100,0);
         models5 /= Math.max(parseFloat(`${controlsV.length | 3}`), 3);
         rewardO += `${3 - zhubo1.length}`;
         settingsC -= 2;
         floating7 <<= Math.min(Math.abs((expiredE == String.fromCharCode(95,0) ? expiredE.length : floating7)), 5);
         zhubo1.push(expiredE.length | 2);
      }
          let bottom5: Map<any, any> = new Map([[String.fromCharCode(113,95,51,95,112,97,114,97,108,108,101,108,0),366], [String.fromCharCode(117,95,53,52,95,115,105,122,101,0),598]]);
          let nextP = String.fromCharCode(108,95,49,53,95,104,109,97,99,105,100,0);
         models5 /= Math.max(parseFloat(`${2}`), 3);
         bottom5 = new Map([[`${bottom5.size}`, nextP.length]]);
         nextP = `${(nextP == String.fromCharCode(66,0) ? bottom5.size : nextP.length)}`;
         models5 *= parseFloat(`${completex.length / 3}`);
      for (let m = 0; m < 1; m++) {
          let greyC = String.fromCharCode(103,95,53,55,95,112,117,116,98,105,116,98,117,102,102,101,114,0);
          let star7: Array<any> = [312, 113, 596];
          let dangerz = 2;
          let weiboB = 0.0;
         playercommon0 += `${dangerz % (Math.max(parseInt(`${weiboB}`), 3))}`;
         greyC = `${1 / (Math.max(5, greyC.length))}`;
         star7 = [(greyC == String.fromCharCode(80,0) ? star7.length : greyC.length)];
         dangerz >>= Math.min(greyC.length, 5);
         weiboB /= Math.max(3, 1);
      }
          let forwardV = false;
          let brightnessR = 2;
          let logor: Array<any> = [319, 464, 605];
         completex = `${(playercommon0 == String.fromCharCode(69,0) ? temperature4.length : playercommon0.length)}`;
         forwardV = logor.length > brightnessR;
         brightnessR *= ((forwardV ? 1 : 1) & 3);
         logor.push(1);
         controlsV = `${2 >> (Math.min(4, completex.length))}`;
      for (let q = 0; q < 2; q++) {
         playercommon0 += "2";
      }
      let minivodI = playercommon0 == String.fromCharCode(49,112,99,118,99,114,119,0);
      do {
         playercommon0 += `${3 & parseInt(`${models5}`)}`;
         if (minivodI) {
            break;
         }
      } while ((4 >= playercommon0.length) && minivodI);
      for (let s = 0; s < 3; s++) {
          let indexQ: Map<any, any> = new Map([[String.fromCharCode(101,95,51,56,95,115,101,99,117,114,101,100,0),470], [String.fromCharCode(116,95,57,49,95,98,97,99,107,100,114,111,112,0),242]]);
          let reducerZ = String.fromCharCode(102,95,55,48,95,110,101,116,101,113,0);
          let backwardD = false;
         playercommon0 += `${completex.length & reducerZ.length}`;
         indexQ.set(`${backwardD}`, 3);
         reducerZ += "3";
      }
         controlsV = `${playercommon0.length % (Math.max(2, parseInt(`${models5}`)))}`;
      for (let z = 0; z < 1; z++) {
         completex = `${(String.fromCharCode(81,0) == playercommon0 ? controlsV.length : playercommon0.length)}`;
      }
      for (let y = 0; y < 3; y++) {
         playercommon0 += `${2 | playercommon0.length}`;
      }
      for (let c = 0; c < 2; c++) {
         completex = `${temperature4.length}`;
      }
         temperature4 = "2";
      stationX *= parseFloat(`${parseInt(`${stationX}`) | 2}`);
      break;
   }
       let commentz = String.fromCharCode(113,117,97,110,116,105,116,121,95,53,95,55,0);
       let backw = 2.0;
          let androidS = false;
          let benefitt = String.fromCharCode(108,95,52,52,95,115,116,101,114,101,111,0);
          let logoutd: Map<any, any> = new Map([[String.fromCharCode(101,116,97,95,97,95,49,52,0),301], [String.fromCharCode(104,95,55,51,95,115,119,105,116,99,104,101,114,0),489]]);
         commentz += `${3 | parseInt(`${backw}`)}`;
         androidS = !androidS;
         benefitt += `${logoutd.size}`;
         logoutd = new Map([[`${logoutd.size}`, (3 | (androidS ? 5 : 4))]]);
         commentz = `${parseInt(`${backw}`) * 2}`;
      while ((backw * 4.59) <= 1.41 && 4.59 <= (backw * parseFloat(`${commentz.length}`))) {
         commentz = `${(commentz == String.fromCharCode(78,0) ? parseInt(`${backw}`) : commentz.length)}`;
         break;
      }
         commentz += `${(String.fromCharCode(104,0) == commentz ? commentz.length : parseInt(`${backw}`))}`;
       let updates9 = String.fromCharCode(106,95,57,53,95,108,97,118,102,105,0);
       let data6 = String.fromCharCode(114,118,100,97,116,97,95,54,95,55,55,0);
      for (let p = 0; p < 3; p++) {
          let playlistS = String.fromCharCode(109,95,55,51,95,115,116,114,97,116,101,103,105,101,115,0);
          let carouselq = String.fromCharCode(112,95,53,56,95,114,101,112,114,111,99,101,115,115,0);
          let historyY = String.fromCharCode(113,117,111,116,105,101,110,116,95,114,95,57,48,0);
          let greyb: Array<any> = [31, 911];
          let logoD: Array<any> = [379, 696];
         updates9 += `${historyY.length << (Math.min(Math.abs(2), 3))}`;
         playlistS += `${playlistS.length - greyb.length}`;
         carouselq = `${greyb.length % (Math.max(9, logoD.length))}`;
         historyY += `${greyb.length / (Math.max(logoD.length, 6))}`;
      }
      playlist6 += 1 << (Math.min(Math.abs(parseInt(`${backw}`)), 1));
      showE.push(analyticy);
      tickedo = predictiong.length <= 56;
   for (let s = 0; s < 1; s++) {
      stationX -= parseFloat(`${parseInt(`${stationX}`)}`);
   }
      stationX += parseFloat(`${3}`);
    setReferralCodeErrMsg(null);

      dplus8 = `${(holderV == String.fromCharCode(66,0) ? holderV.length : analyticy)}`;
      playlist6 %= Math.max(questt.length << (Math.min(2, Math.abs(analyticy))), 1);
   for (let z = 0; z < 3; z++) {
      stats0 /= Math.max(3 & parseInt(`${stats0}`), 3);
   }
      stats0 -= parseInt(`${stats0}`) >> (Math.min(4, Math.abs(3)));
      predictiong = [3];
   let tooltipsP = dplus8 == String.fromCharCode(116,95,120,114,111,118,55,101,111,114,0);
   do {
      dplus8 += "2";
      if (tooltipsP) {
         break;
      }
   } while (tooltipsP && (holderV.length < 4));
    setReadTermNCondition(false);

      predictiong.push(1 - parseInt(`${stats0}`));
       let rnewinterstitialR = 3.0;
       let settingsg = String.fromCharCode(112,95,50,57,95,118,105,116,99,0);
      for (let a = 0; a < 3; a++) {
         settingsg += `${(String.fromCharCode(77,0) == settingsg ? parseInt(`${rnewinterstitialR}`) : settingsg.length)}`;
      }
      let userk = settingsg == String.fromCharCode(111,55,101,106,103,118,111,100,110,0);
      do {
          let mappings = false;
          let debugv = 0.0;
          let sorta = 0.0;
          let sentryE = String.fromCharCode(107,95,55,49,95,114,101,110,100,105,116,105,111,110,115,0);
          let button5 = 1.0;
         settingsg += `${parseInt(`${button5}`)}`;
         mappings = mappings || 66.97 > debugv;
         debugv /= Math.max((parseFloat(`${String.fromCharCode(50,0) == sentryE ? (mappings ? 4 : 5) : sentryE.length}`)), 4);
         sorta *= (String.fromCharCode(57,0) == sentryE ? sentryE.length : parseInt(`${sorta}`));
         button5 += ((mappings ? 3 : 3) * parseInt(`${debugv}`));
         if (userk) {
            break;
         }
      } while ((1 > (settingsg.length >> (Math.min(Math.abs(4), 1)))) && userk);
      while (!settingsg.startsWith(`${rnewinterstitialR}`)) {
          let subsR = 2.0;
          let clockf = 0;
          let gemfilef = 2.0;
          let firebaseM = String.fromCharCode(107,95,52,54,95,114,116,109,112,99,114,121,112,116,0);
          let soundv: Array<any> = [914, 528];
         settingsg = `${clockf * 3}`;
         subsR -= parseFloat(`${3 % (Math.max(parseInt(`${gemfilef}`), 6))}`);
         clockf /= Math.max(3, 1);
         gemfilef -= parseFloat(`${1}`);
         firebaseM = `${soundv.length % 2}`;
         soundv.push(parseInt(`${gemfilef}`));
         break;
      }
         rnewinterstitialR *= parseFloat(`${settingsg.length}`);
          let questa = String.fromCharCode(100,95,54,51,95,114,101,118,111,99,97,116,105,111,110,0);
         settingsg += `${2 + parseInt(`${rnewinterstitialR}`)}`;
         questa = `${questa.length}`;
          let suggestiono = String.fromCharCode(117,95,55,50,95,101,120,116,101,110,115,105,98,108,101,0);
          let policyd: Array<any> = [String.fromCharCode(112,114,111,109,112,101,103,95,116,95,49,51,0), String.fromCharCode(112,114,105,110,116,111,117,116,95,118,95,50,49,0), String.fromCharCode(110,111,110,100,99,95,108,95,52,54,0)];
          let manifest1 = 4;
         rnewinterstitialR *= (parseFloat(`${suggestiono == String.fromCharCode(109,0) ? manifest1 : suggestiono.length}`));
         policyd = [policyd.length];
      tickedo = !settingE || 84.45 == rnewinterstitialR;
   for (let r = 0; r < 1; r++) {
      analyticy *= 3;
   }
      tickedo = !tickedo;
   let expandp = settingE ? !settingE : settingE;
   do {
       let borderless3: Map<any, any> = new Map([[String.fromCharCode(111,115,109,111,115,95,117,95,56,53,0),false ], [String.fromCharCode(100,102,115,116,95,52,95,55,50,0),true ]]);
       let movies3 = String.fromCharCode(99,95,55,49,95,97,99,111,108,111,114,0);
      while ((4 ^ borderless3.size) >= 5 || (movies3.length ^ 4) >= 3) {
          let langkeyh = 1;
          let action9 = String.fromCharCode(122,95,56,95,97,117,116,104,111,114,105,122,101,0);
         movies3 += `${2 >> (Math.min(4, movies3.length))}`;
         langkeyh >>= Math.min(action9.length, 4);
         action9 += `${action9.length ^ langkeyh}`;
         break;
      }
      let rulesU = 7737542 >= borderless3.size;
      do {
         borderless3.set(movies3, 1 * borderless3.size);
         if (rulesU) {
            break;
         }
      } while (((movies3.length & 2) > 4 || (2 & borderless3.size) > 2) && rulesU);
         borderless3 = new Map([[`${borderless3.size}`, 2]]);
         movies3 = `${movies3.length % (Math.max(4, borderless3.size))}`;
      let mbridge7 = movies3.length >= 6091000;
      do {
         movies3 = `${(String.fromCharCode(86,0) == movies3 ? movies3.length : borderless3.size)}`;
         if (mbridge7) {
            break;
         }
      } while (mbridge7 && (movies3.startsWith(`${borderless3.size}`)));
          let zhengpianf: Map<any, any> = new Map([[String.fromCharCode(98,97,110,100,119,105,100,116,104,95,55,95,57,49,0),false ], [String.fromCharCode(117,115,105,110,103,95,110,95,55,55,0),true ]]);
         borderless3.set(`${movies3}`, 2);
         zhengpianf.set(`${zhengpianf.size}`, 1 * zhengpianf.size);
      settingE = 10 < analyticy && !settingE;
      if (expandp) {
         break;
      }
   } while ((1 >= questt.length) && expandp);
   let renewq = 7743353 >= mailz;
   do {
      mailz %= Math.max((showE.length * (settingE ? 1 : 5)), 4);
      if (renewq) {
         break;
      }
   } while (((mailz << (Math.min(Math.abs(3), 2))) < 1) && renewq);

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
       let internetS = String.fromCharCode(110,99,114,121,112,116,105,111,110,95,53,95,57,50,0);
    let nalyticsx = 4.0;
    let rankO = false;
    let whistleH = 5.0;
    let trashB = 5.0;
    let referrerF = true;
    let pagew = String.fromCharCode(117,110,117,115,101,100,95,111,95,50,50,0);
    let placeholderC = 4;
    let uploado = 2.0;
    let thumbnailI = String.fromCharCode(109,100,97,121,95,111,95,56,52,0);
    let typingI = 0.0;
    let controlL = true;
    let middleW = true;
   for (let w = 0; w < 1; w++) {
      referrerF = 16.70 < typingI && thumbnailI.length < 25;
   }
      internetS = `${((referrerF ? 2 : 2) % (Math.max(2, pagew.length)))}`;
   while (2.47 >= (4.14 * whistleH) || rankO) {
      whistleH *= parseFloat(`${parseInt(`${uploado}`) + 2}`);
      break;
   }
      internetS += `${parseInt(`${typingI}`)}`;
       let privilegeu = 0.0;
         privilegeu /= Math.max(parseInt(`${privilegeu}`) / (Math.max(1, parseInt(`${privilegeu}`))), 1);
          let thumbnaild: Array<any> = [990, 62, 243];
          let package_9F: Array<any> = [String.fromCharCode(119,95,54,56,95,109,111,100,101,109,0), String.fromCharCode(117,110,117,115,101,100,95,98,95,54,50,0), String.fromCharCode(119,97,108,95,122,95,56,49,0)];
          let containerg: Map<any, any> = new Map([[String.fromCharCode(100,110,111,119,95,54,95,51,55,0),11], [String.fromCharCode(109,107,118,112,97,114,115,101,114,95,49,95,49,0),752], [String.fromCharCode(117,105,100,115,95,51,95,52,55,0),157]]);
         privilegeu += thumbnaild.length;
         thumbnaild = [2];
         package_9F.push(2);
         containerg.set(`${package_9F.length}`, containerg.size * 3);
      let megaphoneU = privilegeu <= 9033463.0;
      do {
          let materialy = String.fromCharCode(118,95,49,51,95,102,105,116,116,105,110,103,0);
          let videojsx = String.fromCharCode(102,102,112,108,97,121,95,120,95,53,49,0);
          let redirectu = 0;
          let update_wrW = 5.0;
          let bodant = true;
         privilegeu *= 1;
         materialy = `${(videojsx.length | (bodant ? 4 : 2))}`;
         videojsx += "3";
         redirectu *= materialy.length;
         update_wrW /= Math.max((parseFloat(`${(bodant ? 2 : 1) | parseInt(`${update_wrW}`)}`)), 3);
         if (megaphoneU) {
            break;
         }
      } while (megaphoneU && (4.11 == (privilegeu - 5.11) || (privilegeu - 5.11) == 5.15));
      internetS = "3";
      nalyticsx += parseInt(`${trashB}`) % 1;
   let mbjscommonW = 6995861.0 <= uploado;
   do {
       let loadingX = 5;
          let constantsc = 5.0;
          let overlayQ = String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,105,110,103,95,97,95,54,49,0);
          let catalog0 = false;
         loadingX %= Math.max(1, 1 / (Math.max(loadingX, 10)));
         constantsc /= Math.max(parseInt(`${constantsc}`) - overlayQ.length, 5);
         overlayQ += `${3 << (Math.min(Math.abs(parseInt(`${constantsc}`)), 3))}`;
         catalog0 = 3 <= overlayQ.length && 54.43 <= constantsc;
      let actionsy = loadingX <= 9324221;
      do {
          let episodes7 = 0.0;
          let policy0 = String.fromCharCode(106,95,56,56,0);
          let policyy = true;
          let watchu: Array<any> = [633, 495, 374];
          let policyX = String.fromCharCode(114,95,55,53,95,114,119,110,100,0);
         loadingX <<= Math.min(Math.abs(1), 4);
         episodes7 -= (parseFloat(`${policy0 == String.fromCharCode(72,0) ? (policyy ? 1 : 3) : policy0.length}`));
         policyy = !policyy;
         watchu.push((policy0 == String.fromCharCode(114,0) ? parseInt(`${episodes7}`) : policy0.length));
         policyX += `${(parseInt(`${episodes7}`) - (policyy ? 2 : 5))}`;
         if (actionsy) {
            break;
         }
      } while ((loadingX <= loadingX) && actionsy);
      for (let h = 0; h < 3; h++) {
         loadingX *= loadingX + 2;
      }
      uploado += parseFloat(`${parseInt(`${trashB}`)}`);
      if (mbjscommonW) {
         break;
      }
   } while (mbjscommonW && ((placeholderC - uploado) <= 1.5));
   for (let p = 0; p < 1; p++) {
      thumbnailI = `${(3 | (rankO ? 1 : 5))}`;
   }
   while ((4.13 - uploado) == 1.75) {
      controlL = !pagew.startsWith(`${typingI}`);
      break;
   }
      referrerF = String.fromCharCode(100,0) == thumbnailI;
   if (thumbnailI.length == 5) {
      uploado -= parseFloat(`${parseInt(`${nalyticsx}`) & 3}`);
   }
   for (let p = 0; p < 1; p++) {
      internetS = `${parseInt(`${typingI}`) & parseInt(`${whistleH}`)}`;
   }
       let storeB = String.fromCharCode(110,95,49,56,95,116,101,120,116,108,101,0);
       let membershipe = false;
       let data0 = String.fromCharCode(99,95,54,48,95,112,114,111,98,115,0);
      for (let s = 0; s < 3; s++) {
         membershipe = !data0.startsWith(`${membershipe}`);
      }
      let streamingm = data0.length >= 5247783;
      do {
         data0 = `${((membershipe ? 4 : 2))}`;
         if (streamingm) {
            break;
         }
      } while (streamingm && (!membershipe));
         membershipe = storeB.length == data0.length;
      let stringp = membershipe ? !membershipe : membershipe;
      do {
         membershipe = storeB.length > 82 || !membershipe;
         if (stringp) {
            break;
         }
      } while ((!membershipe) && stringp);
      for (let l = 0; l < 1; l++) {
         data0 += `${3 >> (Math.min(4, storeB.length))}`;
      }
         storeB += `${data0.length}`;
      for (let s = 0; s < 2; s++) {
          let mutedH = 3.0;
          let schedulen = 5.0;
          let listM = String.fromCharCode(114,101,97,100,98,121,116,101,95,97,95,52,48,0);
          let temperaturep = 2.0;
          let dialog9 = 1.0;
         membershipe = storeB.length < 41;
         mutedH *= 1 & parseInt(`${temperaturep}`);
         schedulen /= Math.max(4, parseInt(`${schedulen}`) ^ parseInt(`${dialog9}`));
         listM = `${parseInt(`${schedulen}`) * 2}`;
         temperaturep /= Math.max(2, parseInt(`${schedulen}`) * 1);
         dialog9 -= parseFloat(`${parseInt(`${temperaturep}`)}`);
      }
      let temperature_ = storeB == String.fromCharCode(106,100,49,56,114,102,0);
      do {
          let fillx = String.fromCharCode(116,120,116,111,98,106,95,119,95,53,48,0);
          let playercommon3 = 5.0;
          let sound0: Array<any> = [3, 399, 912];
         storeB = `${parseInt(`${playercommon3}`) - 2}`;
         fillx = `${fillx.length}`;
         playercommon3 /= Math.max(3, parseFloat(`${sound0.length | 3}`));
         sound0.push(2 & sound0.length);
         if (temperature_) {
            break;
         }
      } while (temperature_ && (storeB.length > 4 && membershipe));
      if (data0.length <= 5) {
          let turnj = 2.0;
         membershipe = data0.length <= 82;
         turnj *= parseFloat(`${parseInt(`${turnj}`)}`);
      }
      referrerF = !controlL;
       let singaporeo = String.fromCharCode(98,108,111,99,107,100,115,112,95,98,95,52,53,0);
       let traminiM = String.fromCharCode(117,110,109,105,120,95,113,95,54,53,0);
      while (traminiM.startsWith(singaporeo)) {
         traminiM = `${(String.fromCharCode(85,0) == traminiM ? singaporeo.length : traminiM.length)}`;
         break;
      }
      for (let n = 0; n < 1; n++) {
         singaporeo = `${traminiM.length}`;
      }
         singaporeo += `${traminiM.length}`;
         singaporeo += `${traminiM.length}`;
         singaporeo += `${singaporeo.length + 2}`;
      while (5 > singaporeo.length) {
          let chat7 = String.fromCharCode(112,117,116,98,105,116,98,117,102,102,101,114,95,52,95,56,57,0);
          let xvodn = String.fromCharCode(113,95,55,55,95,101,97,105,100,99,116,0);
         singaporeo += `${3 % (Math.max(1, traminiM.length))}`;
         chat7 += `${chat7.length}`;
         xvodn = `${1 % (Math.max(9, chat7.length))}`;
         break;
      }
      rankO = 3.30 < typingI;
      rankO = thumbnailI.length <= 39;
       let footballl: Array<any> = [String.fromCharCode(115,95,57,50,95,100,101,110,115,101,0), String.fromCharCode(114,101,100,118,95,51,95,53,53,0), String.fromCharCode(114,116,99,100,95,120,95,57,56,0)];
       let usero = 2;
       let refreshP = 2.0;
      if (2 > footballl.length) {
          let videoY: Array<any> = [45, 915];
          let stepE = 4;
          let bnewsW: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,101,113,117,101,110,116,95,104,95,55,55,0),861], [String.fromCharCode(104,95,57,54,95,100,101,99,111,100,101,0),567]]);
          let libcrashsdkw = String.fromCharCode(113,95,49,49,95,101,110,100,115,0);
         footballl.push(1);
         videoY = [3];
         stepE -= libcrashsdkw.length << (Math.min(Math.abs(3), 3));
         bnewsW = new Map([[`${videoY.length}`, stepE + 3]]);
         libcrashsdkw = `${3 & stepE}`;
      }
      for (let i = 0; i < 3; i++) {
         usero |= parseInt(`${refreshP}`);
      }
      if (3 > usero) {
         usero *= usero ^ 1;
      }
         refreshP -= parseFloat(`${footballl.length % (Math.max(4, parseInt(`${refreshP}`)))}`);
      let tumbnailT = 6153453.0 <= refreshP;
      do {
         refreshP *= parseFloat(`${parseInt(`${refreshP}`)}`);
         if (tumbnailT) {
            break;
         }
      } while (tumbnailT && (3 >= (1 ^ usero)));
          let r_lockJ = false;
          let phoneK = String.fromCharCode(97,118,100,101,118,105,99,101,114,101,115,95,121,95,55,52,0);
         usero -= 3;
         r_lockJ = !r_lockJ;
         phoneK += `${(phoneK == String.fromCharCode(102,0) ? (r_lockJ ? 1 : 1) : phoneK.length)}`;
      while ((usero * refreshP) <= 3.100) {
         usero /= Math.max(5, footballl.length);
         break;
      }
      while ((4 << (Math.min(3, Math.abs(usero)))) > 2 || 5.48 > (parseFloat(`${usero}`) + refreshP)) {
         usero -= parseInt(`${refreshP}`);
         break;
      }
      while (4 >= (parseInt(`${refreshP}`) * footballl.length)) {
         footballl.push(usero);
         break;
      }
      pagew += `${((controlL ? 5 : 2))}`;
   while (1.58 == typingI) {
      nalyticsx /= Math.max(placeholderC, 1);
      break;
   }
       let bufferp = 2.0;
       let modity5 = String.fromCharCode(100,95,48,95,99,104,97,110,103,101,99,111,117,110,116,101,114,0);
         modity5 = `${modity5.length}`;
      for (let u = 0; u < 3; u++) {
          let package_wh = String.fromCharCode(118,105,116,99,95,101,95,50,57,0);
          let activec = String.fromCharCode(106,95,56,55,95,99,111,109,112,97,99,116,0);
          let hoverP = 1.0;
         bufferp -= 2 & parseInt(`${bufferp}`);
         package_wh += `${parseInt(`${hoverP}`)}`;
         activec = `${package_wh.length / (Math.max(3, 7))}`;
         hoverP -= activec.length / 1;
      }
         modity5 += `${(String.fromCharCode(50,0) == modity5 ? modity5.length : parseInt(`${bufferp}`))}`;
         modity5 += "2";
      while (1.87 > (4.57 / (Math.max(5, bufferp)))) {
          let actions4 = false;
          let stylesU = String.fromCharCode(117,95,55,57,95,118,100,112,97,117,0);
         modity5 = `${stylesU.length}`;
         actions4 = !actions4;
         stylesU += "2";
         break;
      }
       let transferC = String.fromCharCode(120,95,55,55,95,105,110,104,105,98,105,116,0);
      pagew += `${parseInt(`${uploado}`) / (Math.max(4, parseInt(`${trashB}`)))}`;
   while (pagew.endsWith(`${rankO}`)) {
      rankO = !referrerF;
      break;
   }
   let catagoryi = trashB <= 6940820.0;
   do {
      trashB -= parseFloat(`${2}`);
      if (catagoryi) {
         break;
      }
   } while ((controlL) && catagoryi);
   while ((2.7 + trashB) >= 2.63 || 2.7 >= (trashB + parseFloat(`${internetS.length}`))) {
      trashB -= parseFloat(`${2 - placeholderC}`);
      break;
   }
       let nalyticst = String.fromCharCode(119,95,57,55,95,115,121,110,99,112,111,105,110,116,0);
         nalyticst += "2";
         nalyticst += "1";
         nalyticst += `${nalyticst.length % (Math.max(1, 1))}`;
      pagew = `${pagew.length}`;
       let rank5 = String.fromCharCode(109,97,107,101,116,97,114,98,97,108,108,95,102,95,55,55,0);
       let morez = String.fromCharCode(99,95,56,56,95,113,117,97,100,114,97,116,105,99,0);
       let plash4: Array<any> = [930, 357, 396];
         morez = "3";
       let chinasameS = false;
      while (morez == rank5) {
         rank5 += `${((chinasameS ? 2 : 3) ^ 1)}`;
         break;
      }
         plash4.push(2);
      let gmailI = chinasameS ? !chinasameS : chinasameS;
      do {
         chinasameS = (32 >= ((!chinasameS ? rank5.length : 32) & rank5.length));
         if (gmailI) {
            break;
         }
      } while ((!chinasameS || (4 << (Math.min(5, plash4.length))) >= 5) && gmailI);
      for (let p = 0; p < 3; p++) {
         morez += `${morez.length ^ 2}`;
      }
          let downloadV = String.fromCharCode(109,105,100,100,108,101,95,50,95,56,53,0);
         morez = `${2 / (Math.max(1, morez.length))}`;
         downloadV = `${3 >> (Math.min(3, downloadV.length))}`;
      if (rank5 != String.fromCharCode(117,0)) {
         morez = `${rank5.length}`;
      }
          let membershipX: Array<any> = [690, 242];
          let moonW = 2;
         rank5 += `${membershipX.length}`;
         membershipX = [2 ^ moonW];
         moonW %= Math.max(4, 1);
      pagew = `${3 + plash4.length}`;
       let a_view2 = 2;
       let rewardQ: Array<any> = [String.fromCharCode(122,95,54,57,95,101,120,116,114,97,99,116,101,100,0), String.fromCharCode(110,97,110,112,97,95,54,95,57,0)];
         rewardQ.push(rewardQ.length | 3);
       let bottomI: Array<any> = [104, 487];
      if (rewardQ.includes(a_view2)) {
         a_view2 <<= Math.min(Math.abs(2 % (Math.max(8, bottomI.length))), 3);
      }
       let circleT = true;
       let currentP = false;
       let trophyl = String.fromCharCode(99,95,50,49,95,98,105,103,117,105,110,116,0);
      for (let w = 0; w < 3; w++) {
          let index7 = false;
          let backwardj = 4.0;
          let fullF = String.fromCharCode(120,95,54,50,95,112,101,114,99,101,112,116,117,97,108,0);
          let index_ = true;
          let grayF = String.fromCharCode(97,114,114,97,121,95,101,95,51,48,0);
         currentP = (!circleT ? !currentP : circleT);
         index7 = !grayF.endsWith(`${index_}`);
         backwardj /= Math.max(1, grayF.length << (Math.min(2, fullF.length)));
         fullF += `${2 - fullF.length}`;
         index_ = !index7;
      }
      placeholderC ^= parseInt(`${nalyticsx}`) >> (Math.min(2, Math.abs(3)));

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
       let actionsH: Array<any> = [String.fromCharCode(112,97,110,101,108,115,95,118,95,55,52,0), String.fromCharCode(104,97,110,100,115,95,109,95,49,52,0), String.fromCharCode(109,95,50,50,95,100,101,112,114,101,99,105,97,116,101,100,104,0)];
    let albumM: Map<any, any> = new Map([[String.fromCharCode(112,101,114,115,105,115,116,97,98,108,101,95,116,95,56,56,0),937], [String.fromCharCode(115,105,103,110,97,108,115,95,108,95,57,55,0),377], [String.fromCharCode(114,103,98,97,98,101,95,107,95,51,50,0),606]]);
    let playlistQ: Array<any> = [921, 879];
    let gemfilev = false;
    let streamingE = true;
    let hookg = String.fromCharCode(106,95,55,56,95,103,111,112,115,0);
    let sigmoby = String.fromCharCode(119,95,49,48,48,95,115,101,112,97,114,97,116,111,114,0);
    let product2 = String.fromCharCode(112,97,99,107,97,103,101,115,95,103,95,52,53,0);
    let hooksv = String.fromCharCode(99,110,116,95,101,95,50,48,0);
   while (!gemfilev) {
      gemfilev = actionsH.length == 93;
      break;
   }

    if (isSubmitting) return;

   for (let y = 0; y < 1; y++) {
       let termsY = String.fromCharCode(110,95,56,56,95,116,101,115,118,101,114,116,0);
       let connectiont = String.fromCharCode(115,95,54,53,95,100,111,110,97,116,105,111,110,0);
       let incident7: Array<any> = [String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,95,98,95,57,49,0), String.fromCharCode(99,95,55,57,95,97,115,115,101,114,116,0)];
      for (let q = 0; q < 1; q++) {
         connectiont = `${(String.fromCharCode(100,0) == termsY ? connectiont.length : termsY.length)}`;
      }
      let phone5 = String.fromCharCode(57,113,116,112,102,52,119,48,113,0) == connectiont;
      do {
         connectiont += `${1 * connectiont.length}`;
         if (phone5) {
            break;
         }
      } while ((5 <= (incident7.length ^ connectiont.length) && 4 <= (5 ^ incident7.length)) && phone5);
         connectiont += `${termsY.length}`;
       let loginy: Map<any, any> = new Map([[String.fromCharCode(100,102,115,116,95,117,95,55,51,0),String.fromCharCode(108,105,98,115,119,105,102,116,95,120,95,53,49,0)], [String.fromCharCode(111,118,101,114,117,115,101,95,111,95,55,50,0),String.fromCharCode(105,116,117,110,101,115,95,110,95,55,0)]]);
       let benefitn = 1.0;
       let grayc = 5.0;
         benefitn *= parseFloat(`${parseInt(`${grayc}`) << (Math.min(4, Math.abs(1)))}`);
      let stylesv = incident7.length >= 9000433;
      do {
         incident7.push(parseInt(`${grayc}`));
         if (stylesv) {
            break;
         }
      } while ((1.87 <= (grayc * 4.74) && (parseInt(`${grayc}`) * incident7.length) <= 5) && stylesv);
       let analyticsz = 1.0;
       let appsC = 3.0;
      if (incident7.includes(benefitn)) {
         incident7 = [parseInt(`${benefitn}`) ^ loginy.size];
      }
      product2 += "3";
   }

    if (isReadTermNCondition == false) {

   for (let j = 0; j < 3; j++) {
      streamingE = !streamingE;
   }
      ttGray.showToast('请勾选用户协议和隐私协议');

   for (let q = 0; q < 1; q++) {
      product2 += `${(playlistQ.length * (streamingE ? 3 : 5))}`;
   }
      return;

       let stylesc = String.fromCharCode(121,95,54,52,95,109,111,100,110,112,102,0);
       let stations9: Map<any, any> = new Map([[String.fromCharCode(117,95,54,95,109,112,101,103,97,117,100,105,111,0),52], [String.fromCharCode(120,95,50,51,95,116,121,112,0),740]]);
       let thumbnailL = String.fromCharCode(115,101,103,109,101,110,116,101,100,95,102,95,53,53,0);
          let readL = String.fromCharCode(98,114,105,100,103,101,100,95,107,95,50,56,0);
         stations9 = new Map([[`${stations9.size}`, thumbnailL.length]]);
         readL = `${2 | readL.length}`;
      for (let g = 0; g < 2; g++) {
         stations9 = new Map([[`${stations9.size}`, (thumbnailL == String.fromCharCode(98,0) ? thumbnailL.length : stations9.size)]]);
      }
         thumbnailL = `${stations9.size % 3}`;
         stations9.set(thumbnailL, thumbnailL.length + 3);
      let mbnativeadvancedG = String.fromCharCode(113,106,57,100,110,54,57,114,49,112,0) == stylesc;
      do {
         stylesc += "1";
         if (mbnativeadvancedG) {
            break;
         }
      } while (((stylesc.length % (Math.max(5, stations9.size))) > 4 || (stations9.size % 4) > 5) && mbnativeadvancedG);
      for (let p = 0; p < 3; p++) {
         stations9.set(stylesc, (stylesc == String.fromCharCode(101,0) ? stylesc.length : stations9.size));
      }
          let clocku = String.fromCharCode(103,95,52,53,95,100,101,102,97,117,108,116,115,0);
          let constantsa = String.fromCharCode(117,115,101,114,99,116,120,95,112,95,57,0);
          let green5 = String.fromCharCode(98,95,57,49,95,115,115,114,99,0);
         stations9.set(thumbnailL, clocku.length ^ 2);
         clocku = `${3 >> (Math.min(4, green5.length))}`;
         constantsa += `${(String.fromCharCode(85,0) == green5 ? green5.length : constantsa.length)}`;
      if (stations9.size >= 2) {
          let viewerZ = 1;
         thumbnailL = `${viewerZ << (Math.min(Math.abs(3), 2))}`;
      }
      while (!stylesc.startsWith(`${stations9.size}`)) {
         stations9 = new Map([[stylesc, stylesc.length * thumbnailL.length]]);
         break;
      }
      albumM.set(`${thumbnailL}`, albumM.size);
    }

    let userInfo;

   while (!hooksv.startsWith(`${streamingE}`)) {
       let dropdownW = String.fromCharCode(116,105,116,108,101,98,97,114,95,103,95,57,57,0);
       let u_playerw = 1.0;
       let injuryx: Map<any, any> = new Map([[String.fromCharCode(116,114,117,101,109,111,116,105,111,110,114,116,95,53,95,56,57,0),String.fromCharCode(110,101,105,103,104,98,111,117,114,115,95,115,95,52,55,0)], [String.fromCharCode(114,101,111,112,101,110,95,121,95,55,50,0),String.fromCharCode(106,95,50,48,95,99,111,110,118,101,114,116,101,100,0)], [String.fromCharCode(103,97,109,97,95,122,95,49,0),String.fromCharCode(121,101,116,95,114,95,52,51,0)]]);
       let manifestp = 5.0;
       let ewarded2: Array<any> = [487, 950];
      while (1.81 < (parseFloat(`${dropdownW.length}`) + u_playerw) && 4 < (dropdownW.length + parseInt(`${u_playerw}`))) {
         u_playerw -= parseFloat(`${parseInt(`${manifestp}`)}`);
         break;
      }
      while ((dropdownW.length * injuryx.size) == 3 && 3 == (injuryx.size * dropdownW.length)) {
          let sort8 = String.fromCharCode(101,95,56,52,95,106,99,111,110,102,105,103,105,110,116,0);
          let goalA = String.fromCharCode(122,95,57,48,95,117,115,101,114,110,97,109,101,0);
          let subsJ: Map<any, any> = new Map([[String.fromCharCode(106,95,50,95,101,97,114,108,105,101,115,116,0),false ], [String.fromCharCode(116,101,120,116,108,101,95,50,95,53,50,0),false ], [String.fromCharCode(99,111,99,111,97,95,49,95,50,55,0),false ]]);
          let navigationt = String.fromCharCode(112,95,50,48,95,109,111,111,118,0);
          let untickm = String.fromCharCode(113,95,54,56,95,113,115,118,100,101,105,110,116,0);
         dropdownW = "3";
         sort8 = `${(untickm == String.fromCharCode(109,0) ? goalA.length : untickm.length)}`;
         goalA = `${goalA.length >> (Math.min(sort8.length, 4))}`;
         subsJ.set(goalA, navigationt.length + 3);
         navigationt = "3";
         break;
      }
      for (let s = 0; s < 3; s++) {
          let clube = String.fromCharCode(97,99,104,101,95,97,95,50,51,0);
         manifestp /= Math.max(parseFloat(`${injuryx.size ^ 3}`), 2);
         clube = `${clube.length}`;
      }
       let fullM = 5;
       let pangleT = 2;
      while ((4.30 - u_playerw) == 1.13 && (4 % (Math.max(10, dropdownW.length))) == 5) {
         dropdownW += `${pangleT % 1}`;
         break;
      }
      for (let m = 0; m < 2; m++) {
         ewarded2 = [parseInt(`${manifestp}`)];
      }
       let schedule3 = true;
       let projectf = false;
      for (let w = 0; w < 1; w++) {
          let progressy = String.fromCharCode(97,95,56,54,95,115,109,105,109,101,0);
          let eighteenm: Map<any, any> = new Map([[String.fromCharCode(99,95,53,55,95,116,105,109,101,108,105,110,101,0),false ], [String.fromCharCode(100,111,101,115,95,54,95,51,55,0),true ], [String.fromCharCode(107,95,49,95,111,115,116,104,114,101,97,100,115,0),false ]]);
          let core6: Map<any, any> = new Map([[String.fromCharCode(110,116,115,99,95,52,95,57,54,0),354], [String.fromCharCode(111,95,50,53,95,105,109,101,114,0),704]]);
          let sharec = 0;
          let incident4 = false;
         pangleT ^= 3;
         progressy = `${2 << (Math.min(2, progressy.length))}`;
         eighteenm.set(`${incident4}`, ((incident4 ? 4 : 4) >> (Math.min(progressy.length, 2))));
         core6 = new Map([[`${eighteenm.size}`, sharec]]);
         sharec <<= Math.min(Math.abs(1), 3);
      }
          let favoriteN = String.fromCharCode(113,95,56,52,95,105,115,111,0);
          let chatn = 2;
          let scheduleo = String.fromCharCode(118,101,108,111,99,105,116,121,95,102,95,49,50,0);
         projectf = !dropdownW.includes(`${u_playerw}`);
         favoriteN += `${chatn}`;
         chatn *= chatn + favoriteN.length;
         scheduleo = `${scheduleo.length % (Math.max(favoriteN.length, 6))}`;
      for (let w = 0; w < 2; w++) {
          let basketballH = 0.0;
          let s_countC = String.fromCharCode(112,117,116,115,95,53,95,51,57,0);
         pangleT |= parseInt(`${manifestp}`);
         basketballH /= Math.max(1 - s_countC.length, 3);
         s_countC = `${s_countC.length}`;
      }
         pangleT <<= Math.min(1, Math.abs(2));
      while (4.62 == (u_playerw - 1.83)) {
          let empty1 = String.fromCharCode(104,95,49,48,95,100,101,115,99,0);
          let updatesb = String.fromCharCode(107,95,57,57,95,112,114,101,100,105,99,116,105,111,110,0);
          let dialogq: Array<any> = [String.fromCharCode(98,95,49,52,95,103,114,111,117,112,0), String.fromCharCode(106,97,105,108,98,114,101,97,107,95,121,95,52,57,0), String.fromCharCode(98,97,116,99,104,101,115,95,50,95,49,56,0)];
          let termsd = String.fromCharCode(108,95,54,0);
         u_playerw /= Math.max(5, parseFloat(`${1}`));
         empty1 = `${dialogq.length | termsd.length}`;
         updatesb = `${(String.fromCharCode(56,0) == empty1 ? updatesb.length : empty1.length)}`;
         dialogq = [empty1.length << (Math.min(Math.abs(2), 2))];
         termsd += "3";
         break;
      }
          let securityI = 3.0;
         ewarded2 = [1];
         securityI /= Math.max(5, parseFloat(`${parseInt(`${securityI}`)}`));
      while ((ewarded2.length ^ 1) == 5) {
         ewarded2 = [fullM];
         break;
      }
      for (let j = 0; j < 2; j++) {
         ewarded2.push(1 / (Math.max(2, fullM)));
      }
      hooksv += "1";
      break;
   }

    try {

   let mapping9 = actionsH.length <= 8030737;
   do {
       let mintegralU = 0.0;
       let chartl = String.fromCharCode(109,97,114,115,104,97,108,95,118,95,49,54,0);
       let hooksw = String.fromCharCode(99,95,57,48,95,119,97,108,0);
       let sideZ: Array<any> = [String.fromCharCode(97,108,112,105,110,101,95,122,95,55,56,0), String.fromCharCode(103,95,52,49,95,115,97,110,115,0), String.fromCharCode(119,95,57,55,95,118,111,116,101,115,0)];
      let stari = String.fromCharCode(95,116,111,104,0) == chartl;
      do {
         chartl = `${(String.fromCharCode(81,0) == chartl ? chartl.length : parseInt(`${mintegralU}`))}`;
         if (stari) {
            break;
         }
      } while (stari && ((chartl.length % 4) < 2 && (chartl.length % 4) < 1));
      if (hooksw.length < parseInt(`${mintegralU}`)) {
         mintegralU -= parseFloat(`${chartl.length + 1}`);
      }
      for (let r = 0; r < 3; r++) {
          let zhengpian2 = String.fromCharCode(109,111,115,116,95,113,95,55,50,0);
          let areaU = 5.0;
         mintegralU *= parseFloat(`${chartl.length}`);
         zhengpian2 = "2";
         areaU += 3 >> (Math.min(4, Math.abs(parseInt(`${areaU}`))));
      }
         hooksw = `${sideZ.length % (Math.max(chartl.length, 9))}`;
          let notification3 = 2.0;
          let downloadedR = true;
         chartl = `${chartl.length}`;
         notification3 -= (parseInt(`${notification3}`) + (downloadedR ? 5 : 1));
         downloadedR = 84.95 == notification3 && !downloadedR;
      if (!hooksw.startsWith(`${sideZ.length}`)) {
         sideZ.push(hooksw.length / (Math.max(chartl.length, 7)));
      }
       let fastN = String.fromCharCode(99,117,114,115,111,114,95,112,95,52,55,0);
         fastN += `${sideZ.length + hooksw.length}`;
      while (fastN.length > 3) {
         fastN = "2";
         break;
      }
      while (5 == chartl.length) {
         chartl = `${fastN.length >> (Math.min(Math.abs(1), 1))}`;
         break;
      }
         chartl += "2";
          let projectP = String.fromCharCode(97,100,115,95,48,95,54,51,0);
         chartl += `${1 - sideZ.length}`;
         projectP = `${projectP.length & projectP.length}`;
      actionsH.push(parseInt(`${mintegralU}`) >> (Math.min(3, Math.abs(2))));
      if (mapping9) {
         break;
      }
   } while (mapping9 && ((actionsH.length & hookg.length) >= 4 || 4 >= (hookg.length & actionsH.length)));
      await GoogleSignin.hasPlayServices();

   while (3 == hooksv.length) {
      hooksv += `${hooksv.length}`;
      break;
   }

      if (await GoogleSignin.isSignedIn()) {

   while (!gemfilev) {
       let footballC = String.fromCharCode(104,101,97,100,95,99,95,50,0);
       let activitym = String.fromCharCode(112,104,111,110,101,115,95,97,95,52,51,0);
       let sigmobK = true;
         footballC = `${3 ^ activitym.length}`;
      let optionsJ = 6189266 <= activitym.length;
      do {
         activitym += `${(String.fromCharCode(110,0) == footballC ? footballC.length : activitym.length)}`;
         if (optionsJ) {
            break;
         }
      } while (optionsJ && (activitym.endsWith(`${sigmobK}`)));
       let nextb = String.fromCharCode(115,98,117,118,95,117,95,54,54,0);
      let controlsU = nextb.length >= 7180742;
      do {
         nextb += `${1 << (Math.min(5, footballC.length))}`;
         if (controlsU) {
            break;
         }
      } while (controlsU && (sigmobK || 3 <= nextb.length));
      while (activitym.length <= 5) {
         sigmobK = activitym.length < footballC.length;
         break;
      }
      let shirtH = 9744823 >= activitym.length;
      do {
         activitym += "2";
         if (shirtH) {
            break;
         }
      } while ((activitym.length <= 4 || sigmobK) && shirtH);
         footballC += `${(String.fromCharCode(106,0) == nextb ? nextb.length : (sigmobK ? 5 : 5))}`;
         footballC = `${footballC.length}`;
         sigmobK = nextb.length <= 3;
      hookg += `${(1 - (gemfilev ? 4 : 5))}`;
      break;
   }
        userInfo = await GoogleSignin.getCurrentUser();
      } else {

      sigmoby += `${product2.length}`;
        userInfo = await GoogleSignin.signIn();
      }

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        
      } else if (error.code === statusCodes.IN_PROGRESS) {

      gemfilev = !gemfilev;
        

   while (hookg.length > 5 || !streamingE) {
      streamingE = hookg.length > actionsH.length;
      break;
   }
        ttGray.showToast('请勿频繁操作');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

   while (3 >= albumM.size) {
      hooksv += `${albumM.size}`;
      break;
   }
        

   let libcrashsdk_ = String.fromCharCode(100,56,101,53,114,0) == hookg;
   do {
      hookg = "1";
      if (libcrashsdk_) {
         break;
      }
   } while (libcrashsdk_ && (!streamingE));
        ttGray.showToast('谷歌服务获取失败');
      } else {

      hooksv += `${(String.fromCharCode(67,0) == hookg ? hookg.length : sigmoby.length)}`;
        

   let malaysiaD = playlistQ.length <= 8192445;
   do {
      playlistQ = [3];
      if (malaysiaD) {
         break;
      }
   } while (malaysiaD && (4 <= playlistQ.length));
        ttGray.showToast('登入失败，请稍后再试');
      }
      console.log(error.toString());

       let shirti = 4.0;
       let networkR = false;
         shirti -= ((networkR ? 5 : 1) ^ parseInt(`${shirti}`));
          let mimoO: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,105,116,105,111,110,101,100,95,109,95,52,57,0),242], [String.fromCharCode(101,95,50,52,95,98,114,117,116,101,102,111,114,99,101,0),530], [String.fromCharCode(99,95,54,49,95,112,97,110,101,108,115,0),470]]);
          let lineO = 4.0;
         shirti -= parseInt(`${lineO}`) ^ 2;
         mimoO = new Map([[`${mimoO.size}`, mimoO.size % 1]]);
         lineO += parseFloat(`${1}`);
      while (!networkR || 2.68 <= (3.84 + shirti)) {
         networkR = shirti <= 22.6 && !networkR;
         break;
      }
      for (let b = 0; b < 3; b++) {
         shirti /= Math.max(5, 3 % (Math.max(parseInt(`${shirti}`), 5)));
      }
      if (networkR) {
         shirti -= (parseInt(`${shirti}`) << (Math.min(3, Math.abs((networkR ? 5 : 2)))));
      }
         shirti -= parseInt(`${shirti}`) & 1;
      sigmoby = `${actionsH.length}`;
      return;
    }

    if (userInfo === null) {

      actionsH.push((1 ^ (streamingE ? 1 : 5)));
      ttGray.showToast('登入失败，请稍后再试');

   let complete8 = sigmoby == String.fromCharCode(110,116,110,120,54,115,0);
   do {
       let pcopy_vF = String.fromCharCode(109,98,117,102,95,100,95,55,0);
       let flyerO = String.fromCharCode(98,97,110,110,101,114,95,55,95,49,50,0);
       let goalf = String.fromCharCode(97,118,97,105,108,97,98,108,101,95,114,95,55,52,0);
       let appsS = 5;
         flyerO += `${appsS}`;
         appsS /= Math.max(2, 4);
      for (let u = 0; u < 1; u++) {
         flyerO = `${pcopy_vF.length * 3}`;
      }
         pcopy_vF = `${pcopy_vF.length & flyerO.length}`;
          let t_positionR: Array<any> = [688, 326, 960];
          let holderJ: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,112,111,114,116,115,95,112,95,57,48,0),885], [String.fromCharCode(98,105,103,110,117,109,95,116,95,50,0),568], [String.fromCharCode(116,95,50,55,95,112,97,114,116,105,99,108,101,115,0),356]]);
          let change0 = false;
         goalf += `${flyerO.length}`;
         t_positionR.push(t_positionR.length);
         holderJ = new Map([[`${holderJ.size}`, 2]]);
         change0 = 22 < holderJ.size;
          let filedw = 5;
          let crownJ = 5.0;
         goalf += `${filedw << (Math.min(Math.abs(3), 3))}`;
         filedw <<= Math.min(3, Math.abs(1 - parseInt(`${crownJ}`)));
         crownJ /= Math.max(1, parseFloat(`${parseInt(`${crownJ}`) * parseInt(`${crownJ}`)}`));
          let c_playerz: Array<any> = [559, 36, 662];
          let blacklisto = 0;
         goalf = `${c_playerz.length}`;
         c_playerz.push(blacklisto);
         goalf = `${goalf.length % (Math.max(flyerO.length, 4))}`;
      let fullH = pcopy_vF == String.fromCharCode(49,116,53,0);
      do {
         pcopy_vF = `${flyerO.length}`;
         if (fullH) {
            break;
         }
      } while ((pcopy_vF == String.fromCharCode(50,0) || flyerO != String.fromCharCode(71,0)) && fullH);
         pcopy_vF += `${goalf.length}`;
         pcopy_vF += `${goalf.length >> (Math.min(3, Math.abs(appsS)))}`;
         goalf = `${2 & pcopy_vF.length}`;
      sigmoby += "2";
      if (complete8) {
         break;
      }
   } while (complete8 && (4 < (sigmoby.length - 2) && (2 - playlistQ.length) < 3));
      return;
    }

    try {

       let moreB = String.fromCharCode(114,101,110,100,105,116,105,111,110,95,117,95,51,51,0);
       let bingt = String.fromCharCode(107,95,53,56,95,116,114,97,110,115,112,111,115,101,120,0);
       let countryB = String.fromCharCode(113,95,49,52,95,97,115,115,101,109,98,108,101,100,0);
         bingt = `${(String.fromCharCode(87,0) == countryB ? countryB.length : moreB.length)}`;
          let snewsL: Array<any> = [720, 395];
          let detailsO = String.fromCharCode(101,95,50,50,95,119,105,108,108,0);
          let downloadedR_ = 0;
         moreB += `${1 * moreB.length}`;
         snewsL = [3 - detailsO.length];
         detailsO += `${downloadedR_}`;
         downloadedR_ |= detailsO.length * 3;
         bingt = `${countryB.length - 3}`;
      for (let p = 0; p < 3; p++) {
          let header5 = 1;
         bingt = `${bingt.length}`;
         header5 *= header5 + header5;
      }
      while (countryB != String.fromCharCode(57,0)) {
         bingt = `${moreB.length ^ bingt.length}`;
         break;
      }
      while (countryB.length < 4) {
          let grayF = 0;
         countryB = `${bingt.length ^ 2}`;
         grayF -= grayF | 1;
         break;
      }
          let switch_b_u = String.fromCharCode(102,114,97,112,115,95,105,95,54,54,0);
          let signinupD: Array<any> = [968, 296, 894];
          let manifest2 = String.fromCharCode(101,95,53,95,114,118,118,108,99,0);
         bingt = `${bingt.length ^ signinupD.length}`;
         switch_b_u = `${manifest2.length & 3}`;
         signinupD = [3];
         manifest2 += `${(String.fromCharCode(85,0) == switch_b_u ? switch_b_u.length : manifest2.length)}`;
         moreB = `${2 & moreB.length}`;
      while (countryB.length >= 4) {
          let moreb = 5.0;
          let country0 = 1.0;
          let condensedE = 2.0;
         countryB += `${1 | moreB.length}`;
         moreb -= parseFloat(`${parseInt(`${condensedE}`)}`);
         country0 += 2;
         break;
      }
      gemfilev = playlistQ.length >= 55;
      setSubmitting(true);

       let appsW = String.fromCharCode(100,117,112,115,111,114,116,95,119,95,52,57,0);
       let forward3 = String.fromCharCode(111,95,53,48,95,114,97,110,103,101,99,111,100,101,114,0);
       let gpayk: Array<any> = [782, 936, 406];
         gpayk.push(forward3.length + 1);
      let targetx = 7408486 >= forward3.length;
      do {
         forward3 = `${1 | forward3.length}`;
         if (targetx) {
            break;
         }
      } while (targetx && (forward3.endsWith(`${gpayk.length}`)));
      if (appsW != String.fromCharCode(77,0) || forward3.length < 1) {
          let switch_o5s: Array<any> = [596, 543, 153];
          let league9 = String.fromCharCode(119,95,56,55,95,102,102,97,116,0);
         appsW += `${forward3.length}`;
         switch_o5s.push(3);
         league9 += `${2 / (Math.max(4, league9.length))}`;
      }
         gpayk = [1 ^ forward3.length];
         gpayk.push(2 >> (Math.min(5, gpayk.length)));
          let register_4V = String.fromCharCode(112,114,101,118,105,101,119,95,110,95,50,48,0);
         forward3 = `${(appsW == String.fromCharCode(69,0) ? appsW.length : gpayk.length)}`;
         register_4V += `${register_4V.length}`;
         appsW = `${(String.fromCharCode(90,0) == appsW ? forward3.length : appsW.length)}`;
      while (forward3 == appsW) {
         appsW = `${(String.fromCharCode(82,0) == appsW ? appsW.length : forward3.length)}`;
         break;
      }
          let pingB = 4.0;
         gpayk = [(appsW == String.fromCharCode(110,0) ? parseInt(`${pingB}`) : appsW.length)];
      product2 = `${2 & actionsH.length}`;

      userInfo = await ttTramini.signinupUser({
        loginType: 'EMAIL',
        email: userInfo.user.email,
        referralCode: referralCode,
        isGoogleLogin: true,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      GoogleSignin.signOut();

      playlistQ.push(3);
      ttGray.showToast(err.toString());

      hookg = `${actionsH.length}`;
      return;
    } finally {

   if (1 >= sigmoby.length) {
      sigmoby = "2";
   }
      setSubmitting(false);

      sigmoby += `${(sigmoby == String.fromCharCode(72,0) ? sigmoby.length : product2.length)}`;
    }

    const resultData = userInfo.data;

   if (!sigmoby.endsWith(`${hooksv.length}`)) {
      hooksv += `${3 * albumM.size}`;
   }

    const user = ttFast.fromJson(resultData);

       let emojiS = 2.0;
       let footballe: Map<any, any> = new Map([[String.fromCharCode(104,95,50,95,115,101,103,105,100,0),String.fromCharCode(101,97,114,108,105,101,115,116,95,114,95,48,0)], [String.fromCharCode(106,95,53,54,95,115,98,108,111,103,0),String.fromCharCode(114,95,51,53,95,99,97,108,108,111,117,116,0)], [String.fromCharCode(105,95,55,56,95,97,100,97,112,116,101,100,0),String.fromCharCode(113,95,53,57,95,105,110,116,101,103,114,97,108,0)]]);
          let toponz = true;
         footballe = new Map([[`${footballe.size}`, 1]]);
         toponz = (toponz ? toponz : toponz);
      let hejio = footballe.size <= 6513172;
      do {
         footballe.set(`${emojiS}`, footballe.size / 2);
         if (hejio) {
            break;
         }
      } while (hejio && ((parseInt(`${emojiS}`) * footballe.size) >= 1 && (1 & footballe.size) >= 2));
      for (let a = 0; a < 3; a++) {
         footballe.set(`${emojiS}`, footballe.size);
      }
         footballe = new Map([[`${footballe.size}`, 2]]);
      for (let q = 0; q < 3; q++) {
         emojiS /= Math.max(1, 1);
      }
       let notificationY = 2.0;
      hooksv = `${product2.length - sigmoby.length}`;

    await dispatch(addUserAuthState(user));

   while (!sigmoby.includes(`${albumM.size}`)) {
      albumM = new Map([[`${gemfilev}`, 2]]);
      break;
   }

    if (userInfo.message.includes("注册成功")) {

      product2 += `${3 << (Math.min(5, sigmoby.length))}`;
      navigation.navigate('SetUsername');

    } else if (userInfo.message.includes("登录成功")) {

       let shared5: Map<any, any> = new Map([[String.fromCharCode(109,95,51,56,95,99,97,108,99,117,108,97,116,101,100,0),461], [String.fromCharCode(115,109,107,97,95,116,95,57,55,0),817], [String.fromCharCode(97,95,49,53,95,105,110,102,111,0),234]]);
         shared5.set(`${shared5.size}`, 2 & shared5.size);
       let configQ = 3;
       let helperm = 3;
         configQ *= 2 + helperm;
      playlistQ.push(1);

      if (user.isVip()) {

   for (let l = 0; l < 1; l++) {
      actionsH.push(3);
   }
        await AsyncStorage.setItem("showAds", "false");
      } else {

   while ((albumM.size / (Math.max(9, hooksv.length))) < 5) {
      albumM.set(hookg, 3);
      break;
   }
        await AsyncStorage.setItem("showAds", "true");
      }

      await dispatch(changeScreenAction('登录成功'));

      sigmoby += `${product2.length}`;

      

   for (let p = 0; p < 1; p++) {
      sigmoby += `${(hooksv == String.fromCharCode(100,0) ? (gemfilev ? 1 : 5) : hooksv.length)}`;
   }
      tt_humidity_guide.userCenterLoginSuccessTimesAnalytics();

   while (Array.from(albumM.values()).includes(playlistQ.length)) {
      playlistQ = [product2.length];
      break;
   }
      ttDownTick.userCenterLoginSuccessTimesAnalytics();

      product2 += `${((streamingE ? 2 : 3))}`;

      if (user.isVip()) {

       let projectS = String.fromCharCode(112,111,115,115,105,98,108,101,95,104,95,56,48,0);
         projectS += `${projectS.length % (Math.max(1, projectS.length))}`;
          let middlewareR: Map<any, any> = new Map([[String.fromCharCode(107,95,55,54,95,112,117,98,105,99,0),387], [String.fromCharCode(99,95,53,53,95,101,110,106,105,110,0),701]]);
         projectS = `${projectS.length}`;
         middlewareR = new Map([[`${middlewareR.size}`, 3]]);
      if (!projectS.includes(projectS)) {
         projectS += `${projectS.length % (Math.max(1, 8))}`;
      }
      playlistQ.push(albumM.size | 2);
        tt_humidity_guide.userCenterVipLoginSuccessTimesAnalytics();
      }
      

      if (onGooleLoginSuccess) onGooleLoginSuccess();
    }
  }

  const onPressTermNCondition = () => {
       let floatingb = 2.0;
    let downloading_ = String.fromCharCode(115,101,114,105,97,108,105,122,101,114,95,115,95,54,53,0);
    let crowni: Map<any, any> = new Map([[String.fromCharCode(101,118,97,108,117,97,116,105,111,110,95,111,95,57,49,0),String.fromCharCode(103,115,117,98,95,119,95,53,53,0)], [String.fromCharCode(114,101,116,114,105,101,118,105,110,103,95,104,95,50,54,0),String.fromCharCode(107,95,56,49,0)], [String.fromCharCode(104,95,55,49,95,112,97,115,115,99,111,100,101,0),String.fromCharCode(115,95,49,48,48,95,115,119,105,116,99,104,98,97,115,101,0)]]);
    let countryw: Array<any> = [String.fromCharCode(117,95,52,54,95,102,109,116,115,0), String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,95,113,95,55,57,0), String.fromCharCode(99,105,114,99,108,101,95,99,95,49,53,0)];
    let dangerR = false;
    let productJ = true;
    let regengd = false;
    let pagination5: Array<any> = [701, 545, 667];
    let area4 = true;
    let mbjscommonP: Map<any, any> = new Map([[String.fromCharCode(97,108,108,101,116,95,117,95,55,48,0),false ], [String.fromCharCode(118,95,54,55,95,112,105,99,107,109,111,100,101,0),false ], [String.fromCharCode(98,95,53,55,95,105,103,110,112,111,115,116,0),false ]]);
    let const_8M = 5;
    let zhengpian_ = String.fromCharCode(120,95,57,52,95,115,111,99,107,0);
       let hovera = String.fromCharCode(111,95,55,56,95,115,121,110,111,110,121,109,115,0);
       let club7: Array<any> = [String.fromCharCode(99,104,97,110,103,101,99,111,117,110,116,101,114,95,116,95,53,55,0), String.fromCharCode(114,97,105,115,101,100,95,118,95,55,55,0), String.fromCharCode(104,95,57,53,95,100,117,109,112,105,110,103,0)];
       let modulex = true;
      if (hovera.length > 1) {
         hovera += `${2 * club7.length}`;
      }
         hovera = `${((modulex ? 2 : 4) + club7.length)}`;
      for (let f = 0; f < 1; f++) {
         club7 = [3 & club7.length];
      }
      if (1 == club7.length) {
         modulex = !modulex;
      }
         hovera += `${hovera.length}`;
      while (!modulex || hovera.length <= 4) {
          let suggestionL = String.fromCharCode(105,95,51,57,95,105,110,101,116,0);
          let serviceC = 5.0;
          let blackC = String.fromCharCode(110,95,56,55,95,111,100,109,108,0);
          let frame_ztr = false;
         hovera = `${(String.fromCharCode(106,0) == blackC ? blackC.length : (frame_ztr ? 1 : 4))}`;
         suggestionL = `${(suggestionL == String.fromCharCode(71,0) ? parseInt(`${serviceC}`) : suggestionL.length)}`;
         serviceC -= 2 >> (Math.min(1, suggestionL.length));
         frame_ztr = suggestionL == String.fromCharCode(97,0) && 94.34 < serviceC;
         break;
      }
      while ((3 + club7.length) < 2 && 3 < (3 + hovera.length)) {
         hovera = `${hovera.length ^ 1}`;
         break;
      }
      let descZ = club7.length >= 7996525;
      do {
         club7 = [((modulex ? 3 : 1) ^ club7.length)];
         if (descZ) {
            break;
         }
      } while ((2 < (club7.length ^ 3)) && descZ);
         club7.push(hovera.length ^ 3);
      pagination5.push((2 ^ (regengd ? 1 : 5)));
      productJ = mbjscommonP.size <= 50;
   if (regengd || area4) {
       let phoneC = String.fromCharCode(116,111,107,101,110,115,95,55,95,51,55,0);
       let filedH = 2;
       let customx = String.fromCharCode(113,95,53,48,95,99,111,110,115,116,97,110,116,115,0);
       let guideJ = 0.0;
       let roomm = true;
          let side2 = 5.0;
          let chatp = String.fromCharCode(117,95,49,48,48,95,116,114,120,116,0);
          let private_br = String.fromCharCode(112,95,57,53,95,115,110,111,119,0);
         guideJ += parseFloat(`${parseInt(`${guideJ}`) | 3}`);
         side2 /= Math.max(1, 3 * chatp.length);
         chatp = `${parseInt(`${side2}`) >> (Math.min(Math.abs(3), 3))}`;
         private_br = `${chatp.length & 2}`;
         filedH += filedH - 2;
          let mappingt = 4;
          let relateda = 1.0;
         filedH -= (mappingt & (roomm ? 1 : 1));
         mappingt &= parseInt(`${relateda}`);
      while (customx.endsWith(`${roomm}`)) {
         customx = `${2 - customx.length}`;
         break;
      }
      while ((3.32 + guideJ) < 1.37 && (guideJ + parseFloat(`${customx.length}`)) < 3.32) {
         guideJ += (parseFloat(`${phoneC == String.fromCharCode(81,0) ? customx.length : phoneC.length}`));
         break;
      }
         phoneC += "2";
      while (1 > (3 >> (Math.min(2, Math.abs(filedH))))) {
         phoneC = `${((roomm ? 5 : 1) + parseInt(`${guideJ}`))}`;
         break;
      }
      if (2 <= (phoneC.length * 4)) {
         guideJ *= parseFloat(`${1}`);
      }
      while (!phoneC.startsWith(`${roomm}`)) {
         phoneC += `${(String.fromCharCode(53,0) == phoneC ? phoneC.length : parseInt(`${guideJ}`))}`;
         break;
      }
         filedH >>= Math.min(Math.abs((filedH ^ (roomm ? 3 : 1))), 5);
          let area4k = String.fromCharCode(100,114,111,112,115,95,105,95,49,0);
          let promotionO = 1.0;
         guideJ -= parseFloat(`${1 % (Math.max(parseInt(`${guideJ}`), 3))}`);
         area4k = `${parseInt(`${promotionO}`)}`;
         promotionO /= Math.max(1, 3);
         guideJ += parseFloat(`${2 >> (Math.min(4, Math.abs(parseInt(`${guideJ}`))))}`);
          let anythinkY = String.fromCharCode(104,95,56,48,95,112,97,103,101,99,111,117,110,116,0);
         roomm = filedH <= 48;
         anythinkY += `${(anythinkY == String.fromCharCode(53,0) ? anythinkY.length : anythinkY.length)}`;
      if (2.44 > (4.42 + guideJ)) {
         guideJ -= (parseFloat(`${phoneC == String.fromCharCode(51,0) ? phoneC.length : (roomm ? 1 : 3)}`));
      }
         phoneC += `${filedH - 1}`;
      regengd = !dangerR;
   }
   if (!productJ) {
       let headerF = String.fromCharCode(112,114,111,103,114,97,109,95,48,95,52,52,0);
      let modala = String.fromCharCode(112,115,112,48,116,121,0) == headerF;
      do {
         headerF += `${headerF.length % 2}`;
         if (modala) {
            break;
         }
      } while (modala && (headerF != headerF));
      let lessp = String.fromCharCode(50,97,51,0) == headerF;
      do {
         headerF += `${headerF.length}`;
         if (lessp) {
            break;
         }
      } while ((!headerF.endsWith(headerF)) && lessp);
       let launchZ = String.fromCharCode(107,105,99,107,101,100,95,121,95,53,57,0);
      productJ = (85 >= ((dangerR ? mbjscommonP.size : 22) % (Math.max(5, mbjscommonP.size))));
   }
   for (let n = 0; n < 1; n++) {
      countryw = [((dangerR ? 2 : 3) + 3)];
   }
       let modity1 = String.fromCharCode(114,95,50,54,95,99,111,108,108,101,99,116,101,100,0);
         modity1 += `${modity1.length}`;
      if (!modity1.endsWith(modity1)) {
          let taily = false;
          let filedy: Map<any, any> = new Map([[String.fromCharCode(99,109,111,118,95,112,95,56,57,0),244], [String.fromCharCode(112,97,99,107,101,116,111,117,116,95,122,95,54,48,0),883]]);
          let minimizek = false;
         modity1 += `${((taily ? 5 : 4) + (minimizek ? 1 : 2))}`;
         taily = 57 > filedy.size && filedy.size > 57;
      }
         modity1 += `${modity1.length}`;
      area4 = downloading_ == String.fromCharCode(108,0);
      crowni.set(`${countryw.length}`, countryw.length & crowni.size);
   while (regengd) {
      pagination5.push((2 ^ (area4 ? 5 : 1)));
      break;
   }
       let sharek = true;
         sharek = !sharek;
       let mbridges = 3.0;
      let launchery = sharek ? !sharek : sharek;
      do {
         sharek = mbridges <= 31.12;
         if (launchery) {
            break;
         }
      } while (launchery && (mbridges == 5.72));
      productJ = (sharek ? !area4 : sharek);
      dangerR = 11 <= mbjscommonP.size;
   let textD = 5668410 >= pagination5.length;
   do {
      pagination5.push(crowni.size / 2);
      if (textD) {
         break;
      }
   } while ((!downloading_.includes(`${pagination5.length}`)) && textD);
   let historyg = 5297679 >= mbjscommonP.size;
   do {
      mbjscommonP.set(`${productJ}`, ((dangerR ? 5 : 3)));
      if (historyg) {
         break;
      }
   } while ((4.9 < (mbjscommonP.size + floatingb)) && historyg);
      regengd = !dangerR;
      mbjscommonP.set(`${area4}`, ((regengd ? 4 : 5)));
       let networkB = 2.0;
       let termsj = String.fromCharCode(101,95,53,95,102,97,107,101,0);
         networkB *= termsj.length;
          let gesturesP = String.fromCharCode(116,104,97,110,95,114,95,49,50,0);
          let emojik = String.fromCharCode(99,111,108,117,109,110,108,105,115,116,95,103,95,57,55,0);
         termsj += `${parseInt(`${networkB}`)}`;
         gesturesP = `${emojik.length}`;
         emojik = "2";
      if ((termsj.length - 1) < 4) {
         termsj += `${parseInt(`${networkB}`) / 1}`;
      }
         networkB += parseInt(`${networkB}`);
      for (let k = 0; k < 2; k++) {
          let faviconu = 0.0;
         networkB /= Math.max(5, termsj.length);
         faviconu /= Math.max(1, parseFloat(`${parseInt(`${faviconu}`)}`));
      }
         termsj = `${(termsj == String.fromCharCode(68,0) ? parseInt(`${networkB}`) : termsj.length)}`;
      floatingb -= 3;
      pagination5.push(3);
      area4 = (85 >= ((!regengd ? 85 : crowni.size) & crowni.size));
      downloading_ = `${mbjscommonP.size << (Math.min(pagination5.length, 5))}`;
   if (3.95 > (floatingb + 1.81) && floatingb > 1.81) {
      floatingb /= Math.max(((dangerR ? 5 : 3) % (Math.max(1, 5))), 5);
   }
   while (5 <= (3 | crowni.size) && !dangerR) {
      dangerR = downloading_.length <= 1 && 1 <= countryw.length;
      break;
   }
   while ((crowni.size << (Math.min(Math.abs(5), 3))) >= 4) {
       let whiteW = 2.0;
       let thailandQ = true;
       let stepv = true;
       let stringsQ = 0;
      let routerp = thailandQ ? !thailandQ : thailandQ;
      do {
         thailandQ = !thailandQ;
         if (routerp) {
            break;
         }
      } while ((1.25 > whiteW) && routerp);
          let turnj = false;
          let debugR = String.fromCharCode(104,95,53,55,95,114,97,110,103,101,0);
          let commony = String.fromCharCode(112,111,115,116,97,108,95,108,95,54,56,0);
         stringsQ >>= Math.min(2, Math.abs(2));
         turnj = (debugR.length | commony.length) < 95;
         debugR = `${commony.length & 3}`;
          let filledO = String.fromCharCode(122,95,54,95,99,102,116,98,115,117,98,0);
          let configureU: Map<any, any> = new Map([[String.fromCharCode(99,95,56,52,95,108,111,99,107,110,101,115,115,0),205], [String.fromCharCode(122,95,55,55,95,99,117,114,114,0),587], [String.fromCharCode(114,111,117,116,105,110,115,95,107,95,50,49,0),759]]);
         thailandQ = stepv || whiteW < 24.87;
         filledO += `${(String.fromCharCode(116,0) == filledO ? configureU.size : filledO.length)}`;
         configureU.set(filledO, filledO.length);
      if (stepv && !thailandQ) {
         stepv = whiteW >= 14.49;
      }
      for (let n = 0; n < 1; n++) {
         thailandQ = stepv;
      }
          let schedulea: Map<any, any> = new Map([[String.fromCharCode(112,114,105,110,116,101,114,95,108,95,56,0),564], [String.fromCharCode(112,101,114,115,111,110,115,95,109,95,49,56,0),58]]);
          let entryi = 3.0;
         thailandQ = 70 >= stringsQ;
         schedulea.set(`${entryi}`, 2 - parseInt(`${entryi}`));
       let next7 = 4.0;
      for (let q = 0; q < 2; q++) {
         next7 *= stringsQ;
      }
       let indexx = 3;
       let zoomm = 2;
      if (5.96 > whiteW && 2.66 > (whiteW / 5.96)) {
         whiteW *= (parseFloat(`${(stepv ? 2 : 5) * stringsQ}`));
      }
      if (stringsQ >= 4 && 5 >= (4 & stringsQ)) {
         stringsQ %= Math.max(1, 3);
      }
      crowni = new Map([[`${countryw.length}`, (countryw.length * (regengd ? 1 : 3))]]);
      break;
   }
       let entryO = 2.0;
       let combineF: Map<any, any> = new Map([[String.fromCharCode(115,104,117,116,100,111,119,110,95,121,95,51,49,0),String.fromCharCode(119,95,52,95,102,108,97,116,116,101,110,101,100,0)], [String.fromCharCode(99,95,49,57,95,104,97,115,104,107,101,121,0),String.fromCharCode(116,95,55,52,95,99,97,110,111,110,105,99,97,108,105,122,101,100,0)]]);
       let edito = String.fromCharCode(104,95,51,48,95,97,114,116,105,102,97,99,116,0);
      while (1 > (edito.length & 2) || 2 > (parseInt(`${entryO}`) / (Math.max(edito.length, 4)))) {
         entryO *= parseFloat(`${parseInt(`${entryO}`)}`);
         break;
      }
      let rankA = combineF.size <= 5997682;
      do {
          let turn9 = 2.0;
          let clearX = 0.0;
          let z_title5 = String.fromCharCode(121,117,118,95,114,95,57,56,0);
          let greenp = String.fromCharCode(98,95,49,50,95,97,117,116,111,114,101,102,114,101,115,104,0);
         combineF = new Map([[z_title5, 3]]);
         turn9 -= parseFloat(`${greenp.length}`);
         clearX /= Math.max(4, parseInt(`${turn9}`));
         z_title5 += `${parseInt(`${clearX}`) % (Math.max(1, 1))}`;
         greenp = `${parseInt(`${clearX}`) ^ 2}`;
         if (rankA) {
            break;
         }
      } while (rankA && (edito.length == combineF.size));
       let rewindv: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,95,54,95,49,55,0),332], [String.fromCharCode(112,95,54,54,95,100,101,115,99,112,114,105,112,116,105,111,110,0),526], [String.fromCharCode(118,95,54,49,95,99,111,108,111,117,114,0),207]]);
       let resendS: Map<any, any> = new Map([[String.fromCharCode(119,95,53,95,99,101,108,116,0),694], [String.fromCharCode(115,101,116,115,95,103,95,53,49,0),8], [String.fromCharCode(102,95,49,50,95,119,97,115,0),287]]);
      while (1 >= (edito.length / (Math.max(5, combineF.size))) && 4 >= (edito.length / (Math.max(1, 2)))) {
         edito = `${(edito == String.fromCharCode(71,0) ? edito.length : rewindv.size)}`;
         break;
      }
      while (Array.from(rewindv.values()).includes(resendS.size)) {
         rewindv = new Map([[`${combineF.size}`, combineF.size / (Math.max(2, 8))]]);
         break;
      }
      while ((1 << (Math.min(3, Math.abs(resendS.size)))) > 1 || (combineF.size << (Math.min(Math.abs(1), 1))) > 1) {
         resendS.set(edito, parseInt(`${entryO}`) + edito.length);
         break;
      }
       let away5 = 3;
       let downloaderr = 5;
         rewindv.set(`${resendS.size}`, resendS.size);
      let previewm = entryO <= 9675484.0;
      do {
         entryO *= parseFloat(`${parseInt(`${entryO}`)}`);
         if (previewm) {
            break;
         }
      } while (previewm && (away5 < entryO));
      pagination5 = [edito.length];
   let anytimez = productJ ? !productJ : productJ;
   do {
      productJ = crowni.size == countryw.length;
      if (anytimez) {
         break;
      }
   } while (anytimez && (5.51 <= floatingb));

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
       let carouselt = false;
    let animationx = false;
    let fieldz = true;
    let shareda = String.fromCharCode(108,95,55,53,95,112,108,97,110,97,114,116,111,117,121,118,121,0);
    let injuryE = String.fromCharCode(113,117,101,114,105,101,115,95,102,95,49,49,0);
    let streamingj = 4.0;
    let greenf = String.fromCharCode(119,111,114,107,101,114,95,121,95,54,53,0);
    let episodej = String.fromCharCode(98,105,116,115,116,114,105,110,103,95,110,95,55,56,0);
    let layoutC: Map<any, any> = new Map([[String.fromCharCode(110,97,109,101,115,95,98,95,55,51,0),608], [String.fromCharCode(110,97,110,111,115,101,99,111,110,100,115,95,117,95,56,56,0),788], [String.fromCharCode(99,95,56,52,95,97,112,112,101,110,100,105,110,103,0),1]]);
    let countryS = 1.0;
    let projectt = String.fromCharCode(104,105,103,104,112,111,114,116,95,116,95,55,52,0);
    let typesG = String.fromCharCode(97,109,98,105,101,110,116,95,113,95,54,56,0);
    let photoU = true;
      countryS *= parseFloat(`${projectt.length ^ parseInt(`${countryS}`)}`);
      greenf += "1";

    if (isSubmitting) return;

   let inewsO = injuryE == String.fromCharCode(121,106,113,118,108,113,121,0);
   do {
      injuryE = `${episodej.length << (Math.min(2, projectt.length))}`;
      if (inewsO) {
         break;
      }
   } while (inewsO && (2 < episodej.length));
      injuryE = `${episodej.length}`;

    if (isReadTermNCondition == false) {

   for (let e = 0; e < 3; e++) {
      animationx = injuryE.endsWith(`${carouselt}`);
   }
      countryS *= parseFloat(`${1 - shareda.length}`);
      return;

   if (5 == (greenf.length & 4)) {
      greenf += `${(shareda == String.fromCharCode(120,0) ? parseInt(`${streamingj}`) : shareda.length)}`;
   }
      animationx = !fieldz || streamingj == 80.44;
    }

    const formattedLoginValue = loginType === 'phone' ? loginValue.replace(/\s/g, '') : loginValue;

    

      shareda = `${injuryE.length}`;
      layoutC.set(episodej, (String.fromCharCode(73,0) == episodej ? episodej.length : parseInt(`${streamingj}`)));
    

   let gestures8 = animationx ? !animationx : animationx;
   do {
      animationx = episodej.includes(`${fieldz}`);
      if (gestures8) {
         break;
      }
   } while (gestures8 && (!animationx));
      injuryE = `${2 / (Math.max(2, projectt.length))}`;
    

       let thailand3: Array<any> = [296, 602, 941];
       let canvasY = 5.0;
       let clock_ = 0;
          let zhuboi = 5.0;
          let connectionW = String.fromCharCode(98,95,56,53,95,100,101,99,105,115,105,111,110,0);
         clock_ |= 3 | parseInt(`${zhuboi}`);
         zhuboi -= parseFloat(`${connectionW.length / 3}`);
         connectionW += "3";
      for (let o = 0; o < 2; o++) {
          let thumbnail4 = 5.0;
          let overlayw = String.fromCharCode(116,111,116,97,108,108,121,95,112,95,51,52,0);
          let mappingG = 3.0;
         thailand3.push(overlayw.length);
         thumbnail4 += parseInt(`${mappingG}`);
         overlayw = `${parseInt(`${mappingG}`) / 1}`;
      }
      let favoriteF = 8505122.0 <= canvasY;
      do {
         canvasY /= Math.max(1, 1 ^ thailand3.length);
         if (favoriteF) {
            break;
         }
      } while (favoriteF && ((thailand3.length | 5) >= 1 && (canvasY / 5.96) >= 2.86));
         clock_ *= 3 + clock_;
         canvasY *= parseInt(`${canvasY}`);
      let launch4 = canvasY >= 7497651.0;
      do {
         canvasY /= Math.max(clock_ & 3, 1);
         if (launch4) {
            break;
         }
      } while ((thailand3.length == 2) && launch4);
      for (let w = 0; w < 1; w++) {
          let hongkongi = String.fromCharCode(110,95,53,54,95,112,101,114,115,105,115,116,101,100,0);
          let dycreator4: Array<any> = [233, 664, 738];
         thailand3 = [parseInt(`${canvasY}`)];
         hongkongi = `${dycreator4.length * hongkongi.length}`;
         dycreator4.push(dycreator4.length);
      }
       let statistics7 = 5;
       let default_vF = 0;
      let zhubo3 = 7552152.0 <= canvasY;
      do {
         canvasY /= Math.max(3, 1 | default_vF);
         if (zhubo3) {
            break;
         }
      } while ((1.36 > (canvasY - 5.74)) && zhubo3);
      layoutC = new Map([[`${animationx}`, ((animationx ? 1 : 1) | injuryE.length)]]);
       let countryc: Array<any> = [114, 45];
      while (!countryc.includes(countryc.length)) {
         countryc.push(countryc.length);
         break;
      }
      while (1 > (countryc.length | countryc.length) && (countryc.length | countryc.length) > 1) {
         countryc = [1 ^ countryc.length];
         break;
      }
          let zhengpianc = true;
          let mintegralD = 0.0;
          let editb: Array<any> = [963, 581, 571];
         countryc = [editb.length];
         zhengpianc = !zhengpianc;
         mintegralD /= Math.max((parseFloat(`${(zhengpianc ? 5 : 4) & parseInt(`${mintegralD}`)}`)), 2);
         editb.push(parseInt(`${mintegralD}`) / 3);
      episodej += `${1 & parseInt(`${countryS}`)}`;
    

   while (3 <= (layoutC.size ^ 2) || 2 <= (projectt.length ^ layoutC.size)) {
       let iconx = false;
       let dycreatorI = 1.0;
      if (iconx) {
         dycreatorI *= parseInt(`${dycreatorI}`) >> (Math.min(3, Math.abs(2)));
      }
          let diceX: Map<any, any> = new Map([[String.fromCharCode(119,95,50,51,95,103,101,116,0),false ], [String.fromCharCode(115,101,97,108,101,100,95,55,95,57,49,0),false ]]);
          let sheetD = 1.0;
         dycreatorI *= 2;
         diceX.set(`${sheetD}`, parseInt(`${sheetD}`) + 3);
      if (!iconx) {
         iconx = !iconx;
      }
          let lightb = String.fromCharCode(112,111,115,116,101,114,95,99,95,50,50,0);
          let securityl = 1.0;
          let huaweie: Array<any> = [941, 28];
         dycreatorI /= Math.max(4, ((iconx ? 1 : 2)));
         lightb = "1";
         securityl *= 2;
         huaweie = [parseInt(`${securityl}`) | 1];
          let sentrya = String.fromCharCode(114,95,53,52,0);
          let successn = String.fromCharCode(119,105,110,100,111,119,115,95,118,95,57,48,0);
         dycreatorI += 1;
         sentrya += `${3 + successn.length}`;
         successn += `${sentrya.length * 3}`;
      if (2.10 >= dycreatorI) {
         dycreatorI /= Math.max(((iconx ? 4 : 4) % (Math.max(2, parseInt(`${dycreatorI}`)))), 3);
      }
      layoutC.set(`${iconx}`, 2 % (Math.max(6, parseInt(`${countryS}`))));
      break;
   }
   for (let v = 0; v < 3; v++) {
      layoutC = new Map([[injuryE, injuryE.length]]);
   }

    if (formattedLoginValue === "" || loginValueErrMsg !== null) {
      setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
      return;
    }

    try {

       let condenseds = String.fromCharCode(112,117,109,112,95,112,95,56,56,0);
       let sideC = false;
         sideC = !condenseds.includes(`${sideC}`);
       let linkQ = 2.0;
      for (let n = 0; n < 1; n++) {
         sideC = condenseds == String.fromCharCode(119,0);
      }
         linkQ *= parseFloat(`${condenseds.length}`);
      let modelsu = sideC ? !sideC : sideC;
      do {
          let clock9 = true;
          let combinedc = String.fromCharCode(110,95,52,51,95,114,117,108,101,98,111,111,107,0);
         sideC = combinedc.length < 55;
         clock9 = !clock9 && !clock9;
         combinedc = `${((clock9 ? 2 : 3) >> (Math.min(2, Math.abs(3))))}`;
         if (modelsu) {
            break;
         }
      } while (((3.46 + linkQ) == 3.17) && modelsu);
         linkQ += parseFloat(`${condenseds.length}`);
      fieldz = (13 >= (projectt.length - (sideC ? 13 : projectt.length)));
   if (shareda.length <= projectt.length) {
      shareda += `${(1 - (animationx ? 5 : 3))}`;
   }
      setSubmitting(true);

      countryS += parseFloat(`${episodej.length | 1}`);
   let clockX = 6133884 >= typesG.length;
   do {
       let fieldV = String.fromCharCode(110,117,109,115,95,57,95,52,53,0);
       let orientationu = String.fromCharCode(110,101,101,100,95,117,95,55,0);
         fieldV = `${1 * fieldV.length}`;
         fieldV = `${fieldV.length << (Math.min(orientationu.length, 5))}`;
         orientationu = `${3 * fieldV.length}`;
       let huaweiV: Array<any> = [638, 76, 813];
       let lesso: Array<any> = [String.fromCharCode(116,95,52,52,95,101,120,112,101,114,105,109,101,110,116,97,108,0), String.fromCharCode(103,95,54,54,95,112,114,101,100,0)];
      let kickJ = orientationu == String.fromCharCode(116,112,51,114,113,120,121,0);
      do {
          let verticald = String.fromCharCode(102,95,50,56,0);
          let inviteb = 5;
          let z_imageX = 0.0;
          let watch5 = 5.0;
         orientationu += `${(fieldV == String.fromCharCode(81,0) ? fieldV.length : orientationu.length)}`;
         verticald = `${parseInt(`${z_imageX}`)}`;
         inviteb /= Math.max(1, verticald.length);
         z_imageX += parseFloat(`${2 - verticald.length}`);
         watch5 /= Math.max(parseInt(`${z_imageX}`), 3);
         if (kickJ) {
            break;
         }
      } while (((orientationu.length % (Math.max(2, lesso.length))) <= 2 && (orientationu.length % (Math.max(4, lesso.length))) <= 2) && kickJ);
      if (orientationu.length == 2) {
         huaweiV = [3 << (Math.min(3, huaweiV.length))];
      }
      typesG += `${fieldV.length}`;
      if (clockX) {
         break;
      }
   } while ((projectt == typesG) && clockX);

      await ttTramini.signinupUser({
        loginType: loginType === 'email' ? 'EMAIL' : 'SMS',
        email: loginType === 'email' ? loginValue : undefined,
        
        phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + formattedLoginValue : undefined,
        countryId: loginType === 'phone' ? countryPhoneSelected?.country_id : undefined,
        referralCode: referralCode,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      if (!err?.message.includes('验证码已发送')) {

   while (!greenf.endsWith(`${typesG.length}`)) {
      greenf = `${layoutC.size}`;
      break;
   }
      injuryE = `${shareda.length}`;
        setSubmitting(false);

   for (let m = 0; m < 1; m++) {
      countryS /= Math.max(parseFloat(`${projectt.length}`), 1);
   }
   for (let r = 0; r < 3; r++) {
      streamingj -= parseFloat(`${greenf.length}`);
   }
        setLoginValueErrMsg(err.message);

      episodej = `${typesG.length | shareda.length}`;
   let datat = 6205248 <= shareda.length;
   do {
      shareda += `${((animationx ? 4 : 2) & (fieldz ? 3 : 5))}`;
      if (datat) {
         break;
      }
   } while (datat && (5 < shareda.length));
        return;
      }
    }

    setSubmitting(false);

      streamingj += parseFloat(`${parseInt(`${countryS}`) << (Math.min(4, Math.abs(2)))}`);
       let taiwank = 0;
      while ((2 / (Math.max(1, taiwank))) < 3) {
         taiwank -= 2;
         break;
      }
      if (5 >= (5 ^ taiwank) || (5 ^ taiwank) >= 2) {
          let crownU: Map<any, any> = new Map([[String.fromCharCode(119,95,50,51,95,102,108,111,97,116,115,0),true ], [String.fromCharCode(115,101,116,115,97,114,95,53,95,48,0),false ], [String.fromCharCode(114,95,57,56,95,109,115,103,115,0),true ]]);
          let trophyb: Map<any, any> = new Map([[String.fromCharCode(120,95,53,50,0),67], [String.fromCharCode(122,95,55,49,95,98,110,100,101,99,0),732], [String.fromCharCode(109,95,56,57,95,109,98,115,101,103,109,101,110,116,97,116,105,111,110,0),155]]);
          let reactm = String.fromCharCode(97,120,112,95,116,95,51,55,0);
         taiwank -= reactm.length;
         crownU = new Map([[`${crownU.size}`, crownU.size / (Math.max(3, 8))]]);
         trophyb = new Map([[`${crownU.size}`, crownU.size << (Math.min(2, Math.abs(trophyb.size)))]]);
         reactm = `${trophyb.size * crownU.size}`;
      }
      while (2 >= (taiwank % (Math.max(6, taiwank))) || (taiwank % (Math.max(taiwank, 8))) >= 2) {
         taiwank >>= Math.min(5, Math.abs(1 + taiwank));
         break;
      }
      greenf += "1";

    dispatch(hideBottomSheetAction());

      projectt += `${injuryE.length}`;
      carouselt = greenf.length <= 22;
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
  const { colors, dark } = useTheme();
  const styles = useMemo(() => createStyles({ colors, dark }), [colors, dark]);

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>「登录/注册」解锁更多精彩内容！</Text>
      {/* <Text style={styles.subtitle}>登录后可管理您的账号，多端同步观看历史和收藏夹</Text> */}
      { }
      <View style={styles.tabContainer}>
        <TouchableOpacity activeOpacity={0.85}
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

        {/* <TouchableOpacity activeOpacity={0.85}
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
            <TouchableOpacity activeOpacity={0.85}
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
          <TickedIcon
            style={styles.iconStyle}
            width={18}
            height={18}
            color={colors.success}
            fill={'white'}
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
            color: loginValue === "" || !isReadTermNCondition ? ("white") : 'white',
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
      {/* <TouchableOpacity activeOpacity={0.85}
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
      </TouchableOpacity> */}
    </View>
  );
};

const createStyles = ({ colors, dark }: any) => StyleSheet.create({
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
    color: colors.text,
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
  defaultTextInputStyle: {
    color: colors.text,
    backgroundColor: dark ? "#1d2023" : '#D9D9D9',
  },
  correctTextInputStyle: {
    color: colors.text,
    backgroundColor: dark ? "#1d2023" : '#D9D9D9',
  },
  invalidTextInputStyle: {
    backgroundColor: dark ? "#1d2023" : '#D9D9D9',
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
    color: colors.text,
    paddingBottom: 20,
  },
  subtitle: {
    fontWeight: "400",
    color: colors.text,
    textAlign: "center",
    paddingBottom: 25,
  },
  btnActive: {
    backgroundColor: colors.primary,
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
