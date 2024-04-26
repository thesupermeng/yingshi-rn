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
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/wawa_root";
import {
  changeScreenAction,
  hideBottomSheetAction,
  hideLoginAction,
  navigateToProfileScreen,
} from "@redux/actions/wawa_related";
import SpinnerOverlay from "../modal/wawa_telegram_watch";
import PhoneIcon from '@static/images/copy_zLibloggerBuild.svg';
import MailIcon from '@static/images/sharemodalSubinNativeex.svg';
import GmailIcon from '@static/images/unselectedDirectUpdate_y.svg';
import DropdownIcon from '@static/images/questSmallsoundControls.svg';
import { CountryPhoneList } from "./wawa_dycreator";
import FastImage from '../common/wawa_iconarrowrightblack';
import { wawaReactnavigation } from "@type/wawa_gradlew";
import { ReadAgreementPrivacyPolicy } from "./wawa_iconarrowleft_airbnbstar";

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useQuery } from "@tanstack/react-query";
import { showToast } from "../../Sports/utility/wawa_components_about";
import AsyncStorage from "@react-native-async-storage/async-storage";
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";
import { useDispatch } from "react-redux";
import { addUserAuthState } from "@redux/actions/wawa_loginsuccess";
import { wawaEvent } from "@api";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import wawaSina from "../../../AppsFlyer/wawa_fcdaebecbcbafcdfceaaeccfeacdb";
import TickedIcon from '@static/images/largesoundIconrightorange.svg';
import { IS_OTHER_SKIN } from "@utility/wawa_iconpointscore";


export type wawaControlsTramini = {
  resetValue: () => void,
}

type wawaAwayShow = {
  onGooleLoginSuccess?: () => void,
}

export const SigninupForm = forwardRef<wawaControlsTramini, wawaAwayShow>(({
  onGooleLoginSuccess,
}: wawaAwayShow, ref) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [loginType, setloginType] = useState<'email' | 'phone'>('email');

  const [loginValue, setLoginValue] = useState(''); 
  const [referralCode, setReferralCode] = useState('');
  const [loginValueErrMsg, setLoginValueErrMsg] = useState<string | null>(null); 
  const [referralCodeErrMsg, setReferralCodeErrMsg] = useState<string | null>(null);
  const [isReadTermNCondition, setReadTermNCondition] = useState(true);

  
  const [isShowCountryList, setShowCountryList] = useState(false);
  const [countryPhoneSelected, setCountryPhoneSelected] = useState<wawaReactnavigation>();

  
  const [isSubmitting, setSubmitting] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  const userState = useSelector<wawaPhoneControls>('userReducer');

  const { data: countryPhoneOptions } = useQuery({
    queryKey: ["CountryPhoneOptions"],
    queryFn: () => wawaEvent.getCountries(),
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
       let iconarrowleftf: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,112,97,100,100,114,115,95,106,95,51,51,0),389], [String.fromCharCode(98,95,49,52,95,112,97,114,109,115,0),613], [String.fromCharCode(98,105,116,109,97,112,95,50,95,51,49,0),268]]);
    let executor8 = 5.0;
    let register_55y: Map<any, any> = new Map([[String.fromCharCode(105,95,57,57,95,108,111,119,100,101,108,97,121,0),241], [String.fromCharCode(118,112,114,105,110,116,102,95,105,95,52,50,0),661], [String.fromCharCode(99,104,97,110,103,101,108,111,103,95,55,95,52,57,0),224]]);
    let tickP = 4;
    let malaysiaB = 4.0;
    let appsB = String.fromCharCode(104,95,53,95,115,117,98,116,105,116,108,101,0);
    let chatroombackground2 = 5.0;
    let matchactive7 = true;
    let arrowupA: Array<any> = [166, 167];
    let backwardR = 3.0;
    let stationj = 0;
    let tailw = String.fromCharCode(118,95,52,56,95,120,111,102,102,115,101,116,0);
   while (appsB.includes(`${matchactive7}`)) {
      appsB = `${appsB.length}`;
      break;
   }
      executor8 -= tickP;
   if ((malaysiaB / 5.58) > 2.28 && !matchactive7) {
       let liveendmodallogoX = 3;
       let pressureC = 1.0;
       let typingh = 0.0;
          let langkeyW = false;
         pressureC /= Math.max((parseInt(`${pressureC}`) ^ (langkeyW ? 1 : 1)), 3);
          let selectedv = String.fromCharCode(116,119,111,95,111,95,52,51,0);
          let unfillJ: Map<any, any> = new Map([[String.fromCharCode(121,95,56,53,95,116,114,97,110,115,112,111,115,101,120,0),184], [String.fromCharCode(99,95,57,55,95,105,110,118,105,115,105,98,108,101,0),790]]);
         pressureC /= Math.max(1, unfillJ.size);
         selectedv += `${selectedv.length}`;
         unfillJ = new Map([[selectedv, selectedv.length]]);
      matchactive7 = (liveendmodallogoX + executor8) <= 22;
   }
   if (3.44 > (parseFloat(`${appsB.length}`) - malaysiaB)) {
       let huaweic = 4.0;
       let areaC = false;
       let loginV = String.fromCharCode(113,95,57,56,95,100,111,119,110,108,111,97,100,115,0);
       let suboutD = false;
          let bggradientv: Array<any> = [String.fromCharCode(117,110,97,118,97,105,108,97,98,108,101,95,121,95,55,54,0), String.fromCharCode(113,95,57,57,95,115,99,114,101,101,110,112,114,101,115,115,111,0), String.fromCharCode(111,99,99,117,112,105,101,100,95,99,95,55,50,0)];
          let interstitialg: Array<any> = [String.fromCharCode(104,95,52,49,95,98,111,117,110,100,0), String.fromCharCode(108,95,55,50,95,103,109,111,99,107,0), String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,95,57,95,49,55,0)];
         areaC = (bggradientv.length | interstitialg.length) == 95;
      if (suboutD && loginV.length < 5) {
          let giflivestreamingP = String.fromCharCode(101,95,50,54,95,108,111,111,107,115,0);
          let footballfiledlayoutx = String.fromCharCode(111,95,49,50,95,110,101,97,114,0);
          let shrinkc = false;
          let dragN = true;
          let reactnativeultimatelistviewP: Array<any> = [95, 949];
         suboutD = (!shrinkc ? !dragN : shrinkc);
         giflivestreamingP += `${footballfiledlayoutx.length}`;
         footballfiledlayoutx += `${1 - giflivestreamingP.length}`;
         dragN = reactnativeultimatelistviewP.length >= 70 || giflivestreamingP == String.fromCharCode(95,0);
         reactnativeultimatelistviewP.push(3 * reactnativeultimatelistviewP.length);
      }
      for (let o = 0; o < 2; o++) {
          let whistleN = String.fromCharCode(103,105,103,97,98,121,116,101,95,104,95,51,57,0);
         huaweic *= parseFloat(`${loginV.length / 3}`);
         whistleN = `${(whistleN == String.fromCharCode(79,0) ? whistleN.length : whistleN.length)}`;
      }
      if (huaweic >= 2.25) {
          let bgvipsport3 = 0.0;
         areaC = (!suboutD ? areaC : suboutD);
         bgvipsport3 *= parseFloat(`${1 - parseInt(`${bgvipsport3}`)}`);
      }
      if (huaweic == 4.33) {
         huaweic += parseFloat(`${1 | parseInt(`${huaweic}`)}`);
      }
      for (let y = 0; y < 2; y++) {
         areaC = areaC || loginV.length <= 63;
      }
      let albumq = areaC ? !areaC : areaC;
      do {
          let penaltyshootnogoalY = 5.0;
         areaC = (((!areaC ? 69 : loginV.length) >> (Math.min(loginV.length, 2))) >= 69);
         penaltyshootnogoalY *= parseFloat(`${1}`);
         if (albumq) {
            break;
         }
      } while (((huaweic / (Math.max(5.60, 9))) <= 2.28) && albumq);
          let libffmpegkitG = 1.0;
          let iconschedulel = 2.0;
          let telemetry0 = String.fromCharCode(116,111,110,95,52,95,53,50,0);
         huaweic -= parseFloat(`${parseInt(`${libffmpegkitG}`)}`);
         iconschedulel *= (parseFloat(`${String.fromCharCode(55,0) == telemetry0 ? telemetry0.length : parseInt(`${iconschedulel}`)}`));
      for (let u = 0; u < 2; u++) {
          let y_hashj = false;
          let middle3: Array<any> = [410, 494, 442];
          let gifgoalc = 1.0;
         suboutD = (loginV.length * parseInt(`${huaweic}`)) >= 10;
         y_hashj = middle3.length < 13;
         middle3.push(middle3.length + 2);
         gifgoalc += middle3.length;
      }
      while (!areaC || 4.38 < (huaweic * 2.18)) {
         huaweic -= parseFloat(`${parseInt(`${huaweic}`) + 2}`);
         break;
      }
      let rootl = areaC ? !areaC : areaC;
      do {
         areaC = !areaC;
         if (rootl) {
            break;
         }
      } while (rootl && ((3.61 / (Math.max(1, huaweic))) == 5.27 && !areaC));
      for (let p = 0; p < 1; p++) {
         huaweic /= Math.max((parseFloat(`${(areaC ? 3 : 2) & (suboutD ? 3 : 2)}`)), 2);
      }
      malaysiaB -= (parseFloat(`${(matchactive7 ? 4 : 1) | parseInt(`${chatroombackground2}`)}`));
   }
      tickP %= Math.max((arrowupA.length * (matchactive7 ? 1 : 4)), 1);

    setloginType('email');

   while ((arrowupA.length + 5) <= 4) {
      arrowupA = [arrowupA.length ^ 1];
      break;
   }
      tickP |= tickP;
   for (let w = 0; w < 2; w++) {
       let bootsplashU: Map<any, any> = new Map([[String.fromCharCode(112,117,98,108,105,99,95,98,95,52,51,0),621], [String.fromCharCode(104,95,52,52,95,115,99,97,108,101,99,117,100,97,0),260]]);
       let tempnodatagifH = 1;
         bootsplashU.set(`${tempnodatagifH}`, bootsplashU.size);
      let connections = bootsplashU.size >= 7008362;
      do {
         bootsplashU = new Map([[`${bootsplashU.size}`, 3]]);
         if (connections) {
            break;
         }
      } while (connections && (Array.from(bootsplashU.keys()).includes(`${tempnodatagifH}`)));
         tempnodatagifH &= tempnodatagifH;
      for (let k = 0; k < 2; k++) {
          let matchesH: Array<any> = [String.fromCharCode(99,95,52,50,95,114,101,102,105,110,101,100,0), String.fromCharCode(99,119,110,100,95,57,95,52,0), String.fromCharCode(99,95,49,50,95,111,105,100,97,110,121,0)];
          let moonQ = 2;
          let utilse = 3.0;
          let redscoreballw: Map<any, any> = new Map([[String.fromCharCode(110,117,108,108,115,95,49,95,57,55,0),false ], [String.fromCharCode(98,95,50,53,95,97,108,111,99,0),false ], [String.fromCharCode(121,95,53,55,95,102,97,115,116,109,97,116,104,0),true ]]);
         tempnodatagifH *= matchesH.length;
         matchesH.push(3 * parseInt(`${utilse}`));
         moonQ += redscoreballw.size % (Math.max(1, moonQ));
         utilse *= parseFloat(`${moonQ % (Math.max(8, redscoreballw.size))}`);
      }
      while (bootsplashU.get(`${tempnodatagifH}`) != null) {
         bootsplashU = new Map([[`${bootsplashU.size}`, 2 * tempnodatagifH]]);
         break;
      }
         tempnodatagifH -= tempnodatagifH + 2;
      iconarrowleftf = new Map([[`${arrowupA.length}`, arrowupA.length]]);
   }
   while (matchactive7) {
       let dangerw: Map<any, any> = new Map([[String.fromCharCode(102,95,57,54,95,114,101,112,108,97,99,101,115,0),String.fromCharCode(97,118,115,115,95,102,95,54,49,0)], [String.fromCharCode(99,111,108,111,99,97,116,101,100,95,110,95,53,54,0),String.fromCharCode(107,95,53,56,95,100,99,116,101,108,101,109,0)], [String.fromCharCode(115,112,101,101,100,95,98,95,50,50,0),String.fromCharCode(115,107,101,119,95,52,95,55,56,0)]]);
       let navigations = String.fromCharCode(112,95,55,52,0);
         dangerw = new Map([[`${dangerw.size}`, navigations.length >> (Math.min(5, Math.abs(dangerw.size)))]]);
      let imagesl = navigations.length <= 8143106;
      do {
         navigations = `${navigations.length}`;
         if (imagesl) {
            break;
         }
      } while (((navigations.length / 5) >= 2) && imagesl);
      malaysiaB += parseFloat(`${parseInt(`${malaysiaB}`)}`);
      break;
   }
   let iconnewchat7 = executor8 <= 6504349.0;
   do {
       let baidug: Map<any, any> = new Map([[String.fromCharCode(120,95,49,49,95,101,120,112,111,114,116,0),String.fromCharCode(118,95,51,55,95,109,98,117,118,101,114,114,111,114,0)], [String.fromCharCode(112,114,101,112,114,111,99,101,115,115,95,100,95,49,50,0),String.fromCharCode(121,95,50,48,95,116,105,114,101,100,0)]]);
       let libruntimeexecutorE = String.fromCharCode(101,95,53,52,95,104,105,103,104,108,105,103,116,104,101,100,0);
      if ((baidug.size ^ libruntimeexecutorE.length) > 4) {
         libruntimeexecutorE += `${1 << (Math.min(2, libruntimeexecutorE.length))}`;
      }
      if ((3 % (Math.max(10, libruntimeexecutorE.length))) >= 2 || 4 >= (baidug.size % 3)) {
          let classesp = 0.0;
          let nativemoduleZ = 1.0;
          let componentregistryt = 2;
          let hometeamfields = String.fromCharCode(102,109,117,108,95,114,95,53,54,0);
          let borderlessU: Map<any, any> = new Map([[String.fromCharCode(122,95,51,55,95,104,101,97,114,116,98,101,97,116,0),true ], [String.fromCharCode(115,110,97,112,115,104,111,116,116,101,114,95,117,95,54,57,0),true ]]);
         libruntimeexecutorE = `${borderlessU.size}`;
         classesp *= parseFloat(`${componentregistryt | hometeamfields.length}`);
         nativemoduleZ -= (parseFloat(`${String.fromCharCode(110,0) == hometeamfields ? parseInt(`${nativemoduleZ}`) : hometeamfields.length}`));
         componentregistryt %= Math.max(3 / (Math.max(parseInt(`${nativemoduleZ}`), 8)), 3);
         borderlessU.set(hometeamfields, 2 ^ hometeamfields.length);
      }
      executor8 -= ((matchactive7 ? 3 : 2));
      if (iconnewchat7) {
         break;
      }
   } while (iconnewchat7 && (!appsB.includes(`${executor8}`)));
    setLoginValue('');

       let recommendation_ = String.fromCharCode(112,111,108,108,105,110,103,95,54,95,55,49,0);
       let indicatorE = 4;
       let scorepopsound3 = 4.0;
      if ((2 << (Math.min(1, Math.abs(indicatorE)))) > 2 || 2 > (indicatorE / (Math.max(8, parseInt(`${scorepopsound3}`))))) {
          let matchx: Map<any, any> = new Map([[String.fromCharCode(119,95,52,55,95,116,97,112,0),String.fromCharCode(115,111,99,107,101,116,95,100,95,53,51,0)], [String.fromCharCode(102,97,115,116,109,97,116,104,95,55,95,53,48,0),String.fromCharCode(97,95,57,50,95,112,108,97,110,101,100,0)]]);
          let elementsd = false;
         indicatorE -= (String.fromCharCode(106,0) == recommendation_ ? matchx.size : recommendation_.length);
         matchx.set(`${elementsd}`, ((elementsd ? 1 : 5)));
      }
      while (indicatorE < 5) {
          let expand7 = false;
          let privilegeK = 2;
          let iconchatsendq = String.fromCharCode(103,101,116,114,97,110,100,111,109,95,116,95,52,52,0);
          let settingj = String.fromCharCode(99,111,108,108,101,99,116,95,104,95,56,55,0);
          let iconcurrentmatchF = 3.0;
         indicatorE *= privilegeK;
         expand7 = String.fromCharCode(109,0) == iconchatsendq;
         privilegeK += 3 & parseInt(`${iconcurrentmatchF}`);
         iconchatsendq = `${((expand7 ? 2 : 2))}`;
         settingj += `${2 / (Math.max(parseInt(`${iconcurrentmatchF}`), 6))}`;
         break;
      }
          let fileM = 1.0;
         recommendation_ += `${(String.fromCharCode(114,0) == recommendation_ ? indicatorE : recommendation_.length)}`;
         fileM -= parseInt(`${fileM}`);
          let largesoundN: Map<any, any> = new Map([[String.fromCharCode(100,101,112,114,101,99,97,116,101,100,95,107,95,57,52,0),false ], [String.fromCharCode(102,105,108,116,101,114,115,95,49,95,51,52,0),true ]]);
          let iconadslink6 = 2.0;
         indicatorE <<= Math.min(Math.abs(parseInt(`${iconadslink6}`)), 1);
         largesoundN.set(`${largesoundN.size}`, largesoundN.size);
         iconadslink6 /= Math.max(2, largesoundN.size / 1);
      while (3.81 == scorepopsound3) {
         indicatorE >>= Math.min(2, Math.abs(2 / (Math.max(6, recommendation_.length))));
         break;
      }
      let success8 = recommendation_ == String.fromCharCode(50,120,53,0);
      do {
         recommendation_ = "1";
         if (success8) {
            break;
         }
      } while (success8 && (!recommendation_.startsWith(`${scorepopsound3}`)));
         indicatorE <<= Math.min(Math.abs(3), 5);
          let live1: Map<any, any> = new Map([[String.fromCharCode(100,95,51,53,95,114,101,99,117,114,115,105,118,101,0),false ], [String.fromCharCode(99,95,52,57,95,118,111,114,98,105,115,99,111,109,109,101,110,116,0),false ]]);
          let areaO = true;
          let owngoaln = 0.0;
         scorepopsound3 *= (parseFloat(`${parseInt(`${owngoaln}`) / (Math.max(10, (areaO ? 2 : 1)))}`));
         live1.set(`${live1.size}`, live1.size);
         areaO = live1.size < 77;
      if ((recommendation_.length ^ indicatorE) <= 4 || (recommendation_.length ^ 4) <= 5) {
          let whitebellv = String.fromCharCode(98,95,56,52,95,105,109,112,111,115,115,105,98,108,101,0);
          let flyerU = 3.0;
         recommendation_ += `${whitebellv.length}`;
         whitebellv = `${parseInt(`${flyerU}`)}`;
      }
      executor8 -= 3 - arrowupA.length;
   while (appsB.startsWith(`${chatroombackground2}`)) {
      chatroombackground2 *= parseFloat(`${arrowupA.length}`);
      break;
   }
       let gifgoalbgL = String.fromCharCode(109,95,55,56,95,114,98,115,112,0);
      let homeinactive2 = String.fromCharCode(98,54,111,0) == gifgoalbgL;
      do {
          let contexta = 1.0;
          let borderless7 = String.fromCharCode(117,110,115,111,108,118,101,100,95,108,95,51,53,0);
         gifgoalbgL += "2";
         contexta /= Math.max(parseInt(`${contexta}`), 5);
         borderless7 += `${borderless7.length - parseInt(`${contexta}`)}`;
         if (homeinactive2) {
            break;
         }
      } while ((3 < gifgoalbgL.length) && homeinactive2);
      if (!gifgoalbgL.includes(`${gifgoalbgL.length}`)) {
         gifgoalbgL += "1";
      }
      for (let w = 0; w < 1; w++) {
         gifgoalbgL += `${(gifgoalbgL == String.fromCharCode(66,0) ? gifgoalbgL.length : gifgoalbgL.length)}`;
      }
      arrowupA = [2 + parseInt(`${executor8}`)];
       let qaagg = String.fromCharCode(112,95,52,56,95,108,105,98,111,112,101,110,104,0);
       let libtanj: Map<any, any> = new Map([[String.fromCharCode(115,116,100,95,104,95,49,0),false ], [String.fromCharCode(109,95,51,95,115,112,101,99,105,102,105,101,100,0),false ]]);
          let activityM = String.fromCharCode(111,95,51,57,95,116,111,109,105,99,0);
          let privacy3 = String.fromCharCode(117,95,49,49,95,112,101,114,109,117,116,97,116,105,111,110,0);
          let catalog9 = 3.0;
         qaagg += "1";
         activityM = `${(activityM == String.fromCharCode(50,0) ? activityM.length : parseInt(`${catalog9}`))}`;
         privacy3 = `${activityM.length / (Math.max(2, 8))}`;
         catalog9 += 2 ^ activityM.length;
         qaagg += "3";
      let usernameU = 7911418 <= qaagg.length;
      do {
         qaagg = `${libtanj.size % 1}`;
         if (usernameU) {
            break;
         }
      } while ((qaagg.includes(`${libtanj.size}`)) && usernameU);
         libtanj = new Map([[`${libtanj.size}`, 3 / (Math.max(10, qaagg.length))]]);
         libtanj = new Map([[`${libtanj.size}`, (qaagg == String.fromCharCode(70,0) ? qaagg.length : libtanj.size)]]);
      let imagewatchliveB = qaagg.length <= 5259588;
      do {
          let combinedb = String.fromCharCode(107,95,49,56,95,115,97,109,112,108,101,114,97,116,101,0);
         qaagg += "1";
         combinedb = "3";
         if (imagewatchliveB) {
            break;
         }
      } while ((1 >= (qaagg.length >> (Math.min(4, Math.abs(libtanj.size)))) || (qaagg.length >> (Math.min(Math.abs(1), 3))) >= 1) && imagewatchliveB);
      tickP ^= ((matchactive7 ? 4 : 2) ^ 3);
      register_55y = new Map([[appsB, appsB.length]]);
    setReferralCode('');

   if (arrowupA.length < 2) {
      arrowupA.push(1);
   }
   while (3 > register_55y.size) {
       let predictionM = 0;
       let middlebrightnessl: Map<any, any> = new Map([[String.fromCharCode(122,95,53,53,95,99,118,105,100,0),String.fromCharCode(114,101,115,111,108,117,116,105,111,110,115,95,122,95,54,53,0)], [String.fromCharCode(114,101,112,111,114,116,101,114,95,122,95,51,51,0),String.fromCharCode(104,95,49,95,115,117,98,100,101,99,111,100,101,114,0)], [String.fromCharCode(112,103,105,100,120,95,116,95,51,53,0),String.fromCharCode(100,95,55,48,95,110,111,110,115,101,99,117,114,101,0)]]);
         predictionM *= predictionM;
         middlebrightnessl.set(`${predictionM}`, predictionM % (Math.max(2, 4)));
         middlebrightnessl.set(`${predictionM}`, middlebrightnessl.size % 1);
          let inviten = 2.0;
         middlebrightnessl.set(`${predictionM}`, parseInt(`${inviten}`) >> (Math.min(1, Math.abs(1))));
       let umengO: Array<any> = [967, 546];
         middlebrightnessl = new Map([[`${middlebrightnessl.size}`, predictionM + 1]]);
      register_55y = new Map([[`${tickP}`, appsB.length]]);
      break;
   }
      matchactive7 = !matchactive7;
   while (arrowupA.length == tickP) {
      tickP >>= Math.min(Math.abs(3), 5);
      break;
   }
      backwardR += (register_55y.size + (matchactive7 ? 4 : 4));
    setLoginValueErrMsg(null);

   if ((malaysiaB / (Math.max(3, tickP))) >= 3.68) {
       let statsnomoredatan = true;
       let reducer7 = 1.0;
       let iconclosewhitev = 2.0;
      if ((reducer7 - iconclosewhitev) >= 2.44 || (2.44 - iconclosewhitev) >= 5.27) {
         iconclosewhitev -= 2;
      }
      let libavformatD = 5573451.0 >= reducer7;
      do {
         reducer7 += parseFloat(`${3 * parseInt(`${iconclosewhitev}`)}`);
         if (libavformatD) {
            break;
         }
      } while ((3.72 <= iconclosewhitev) && libavformatD);
      if (!statsnomoredatan && 5.65 < (1.96 * iconclosewhitev)) {
         statsnomoredatan = iconclosewhitev >= 49.39;
      }
       let react2 = 4.0;
       let hooksX = 5.0;
      for (let s = 0; s < 3; s++) {
         react2 *= parseInt(`${reducer7}`);
      }
          let componentregistryV = String.fromCharCode(115,116,114,102,116,105,109,101,95,120,95,55,50,0);
         hooksX *= 1 & parseInt(`${reducer7}`);
         componentregistryV = `${componentregistryV.length}`;
      for (let f = 0; f < 1; f++) {
         iconclosewhitev *= parseInt(`${hooksX}`);
      }
         reducer7 *= parseFloat(`${1 - parseInt(`${react2}`)}`);
         hooksX += parseInt(`${react2}`) / (Math.max(parseInt(`${iconclosewhitev}`), 9));
      tickP %= Math.max(tickP & 1, 5);
   }
   let selectionX = chatroombackground2 >= 8113944.0;
   do {
      chatroombackground2 += parseFloat(`${1}`);
      if (selectionX) {
         break;
      }
   } while (selectionX && (chatroombackground2 <= malaysiaB));
   if (!matchactive7) {
      matchactive7 = 16.74 < executor8;
   }
   for (let e = 0; e < 1; e++) {
      chatroombackground2 /= Math.max(parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${malaysiaB}`)), 4))}`), 3);
   }
   let umengo = register_55y.size >= 9152417;
   do {
       let yellowanimationliveG = 3;
       let mbridgeK = String.fromCharCode(104,101,97,100,95,122,95,56,53,0);
       let modityT = String.fromCharCode(114,95,57,50,95,108,111,99,97,108,104,111,115,116,0);
       let libswresamplez = String.fromCharCode(115,112,105,110,110,105,110,103,95,119,95,54,0);
      while (libswresamplez.length >= 5) {
         modityT = `${mbridgeK.length}`;
         break;
      }
      if (!mbridgeK.startsWith(`${modityT.length}`)) {
         mbridgeK += `${yellowanimationliveG - libswresamplez.length}`;
      }
         modityT += `${2 - libswresamplez.length}`;
      let e_manageru = String.fromCharCode(119,119,101,109,53,108,0) == libswresamplez;
      do {
         libswresamplez += `${2 | modityT.length}`;
         if (e_manageru) {
            break;
         }
      } while ((libswresamplez.startsWith(`${yellowanimationliveG}`)) && e_manageru);
      for (let k = 0; k < 1; k++) {
          let iconedit7 = String.fromCharCode(120,95,55,52,95,101,120,116,101,110,115,105,111,110,115,0);
          let owngoalu = String.fromCharCode(99,104,97,105,110,115,95,52,95,49,50,0);
          let notificationfillempty8 = 4.0;
          let backwards = String.fromCharCode(105,110,116,101,103,101,114,95,115,95,57,0);
          let analyticsm = String.fromCharCode(102,95,56,51,95,115,116,114,115,101,112,0);
         modityT += `${mbridgeK.length}`;
         iconedit7 = `${iconedit7.length}`;
         owngoalu += `${iconedit7.length - 2}`;
         notificationfillempty8 /= Math.max(parseFloat(`${owngoalu.length ^ backwards.length}`), 5);
         backwards += `${analyticsm.length}`;
         analyticsm += `${backwards.length - iconedit7.length}`;
      }
      if (!modityT.includes(`${yellowanimationliveG}`)) {
         yellowanimationliveG %= Math.max(2, yellowanimationliveG << (Math.min(mbridgeK.length, 5)));
      }
       let ynewinterstitialF = 5.0;
       let arrowup_ = 4.0;
      if (libswresamplez.startsWith(`${ynewinterstitialF}`)) {
          let icondefaultthumbnailX = String.fromCharCode(102,119,104,116,120,95,114,95,52,55,0);
          let sellmathbackground5 = String.fromCharCode(101,113,117,105,108,105,98,114,105,117,109,95,57,95,54,48,0);
          let controlU = String.fromCharCode(106,95,52,51,95,115,105,109,112,108,101,119,114,105,116,101,0);
         ynewinterstitialF /= Math.max(parseInt(`${arrowup_}`), 1);
         icondefaultthumbnailX = `${(icondefaultthumbnailX == String.fromCharCode(81,0) ? icondefaultthumbnailX.length : sellmathbackground5.length)}`;
         sellmathbackground5 = `${3 / (Math.max(6, icondefaultthumbnailX.length))}`;
         controlU += "2";
      }
      let weatherc = ynewinterstitialF >= 5775613.0;
      do {
          let whitetickB = String.fromCharCode(122,95,54,51,95,118,97,108,105,100,97,116,105,111,110,0);
         ynewinterstitialF += (String.fromCharCode(113,0) == mbridgeK ? parseInt(`${ynewinterstitialF}`) : mbridgeK.length);
         whitetickB += `${(String.fromCharCode(69,0) == whitetickB ? whitetickB.length : whitetickB.length)}`;
         if (weatherc) {
            break;
         }
      } while (((ynewinterstitialF * 3.52) < 5.15 || (3.52 / (Math.max(6, arrowup_))) < 2.78) && weatherc);
      for (let q = 0; q < 3; q++) {
          let bufferj = 5.0;
          let eyeopenJ: Map<any, any> = new Map([[String.fromCharCode(112,108,97,116,102,111,114,109,115,95,57,95,48,0),775], [String.fromCharCode(104,121,112,104,101,110,97,116,101,100,95,121,95,55,55,0),106]]);
          let fcdaebecbcbafcdfceaaeccfeacdb5 = String.fromCharCode(99,97,112,97,98,105,108,105,116,105,101,115,95,108,95,57,51,0);
         modityT += `${2 ^ libswresamplez.length}`;
         bufferj -= parseFloat(`${eyeopenJ.size & 1}`);
         eyeopenJ = new Map([[`${eyeopenJ.size}`, eyeopenJ.size]]);
         fcdaebecbcbafcdfceaaeccfeacdb5 += `${fcdaebecbcbafcdfceaaeccfeacdb5.length % 1}`;
      }
          let listq = 4;
          let selectiong: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,114,95,99,95,49,48,0),String.fromCharCode(104,97,108,102,100,95,98,95,54,54,0)], [String.fromCharCode(109,101,110,117,115,95,114,95,52,48,0),String.fromCharCode(112,95,54,49,95,114,103,98,97,121,99,111,99,103,0)]]);
          let kuaishouA = String.fromCharCode(121,95,53,55,95,112,114,111,100,0);
         yellowanimationliveG |= modityT.length << (Math.min(Math.abs(3), 4));
         listq += 2 | selectiong.size;
         selectiong.set(`${listq}`, listq / (Math.max(2, selectiong.size)));
         kuaishouA = `${2 & selectiong.size}`;
      while (modityT.length <= libswresamplez.length) {
         modityT = `${1 << (Math.min(2, Math.abs(parseInt(`${arrowup_}`))))}`;
         break;
      }
      register_55y = new Map([[appsB, appsB.length]]);
      if (umengo) {
         break;
      }
   } while ((Array.from(register_55y.values()).includes(tickP)) && umengo);
    setReferralCodeErrMsg(null);

   while (1.62 < (malaysiaB * parseFloat(`${register_55y.size}`)) && (malaysiaB * 1.62) < 4.38) {
       let backI: Array<any> = [781, 942];
       let modityb: Map<any, any> = new Map([[String.fromCharCode(112,95,50,55,95,99,111,110,116,105,110,117,111,117,115,0),String.fromCharCode(109,97,114,115,104,97,108,95,121,95,57,49,0)], [String.fromCharCode(111,95,53,95,99,105,118,105,108,0),String.fromCharCode(108,95,56,56,95,97,105,116,101,114,0)], [String.fromCharCode(115,95,55,49,95,106,117,115,116,105,102,105,101,100,0),String.fromCharCode(100,95,49,48,95,98,105,103,116,114,101,101,0)]]);
       let penaltyshootR: Array<any> = [63, 834];
       let logoi = String.fromCharCode(111,117,112,117,116,95,111,95,56,57,0);
         logoi += `${penaltyshootR.length}`;
      if ((backI.length ^ logoi.length) >= 5 && (5 ^ logoi.length) >= 3) {
         backI.push(backI.length % 1);
      }
         penaltyshootR = [modityb.size >> (Math.min(penaltyshootR.length, 1))];
         modityb = new Map([[`${penaltyshootR.length}`, (logoi == String.fromCharCode(120,0) ? logoi.length : penaltyshootR.length)]]);
         modityb = new Map([[`${penaltyshootR.length}`, logoi.length * penaltyshootR.length]]);
         penaltyshootR = [backI.length % (Math.max(2, 3))];
          let typesy = 4.0;
          let sellmathbackgroundb = 5.0;
         backI = [3];
         typesy /= Math.max(1, parseFloat(`${parseInt(`${sellmathbackgroundb}`) | 1}`));
         sellmathbackgroundb *= parseFloat(`${parseInt(`${typesy}`)}`);
      let popupZ = penaltyshootR.length <= 8130375;
      do {
         penaltyshootR.push(2 | penaltyshootR.length);
         if (popupZ) {
            break;
         }
      } while ((logoi.length >= 5) && popupZ);
      register_55y = new Map([[`${iconarrowleftf.size}`, penaltyshootR.length]]);
      break;
   }
   for (let m = 0; m < 1; m++) {
       let sanst = String.fromCharCode(112,101,114,115,111,110,97,108,95,122,95,50,54,0);
       let roundQ = 1;
       let qaagr: Array<any> = [21, 320, 699];
      if (2 <= qaagr.length) {
         roundQ += 3;
      }
         roundQ *= sanst.length & 2;
      while ((roundQ & 4) == 1) {
          let sound3 = String.fromCharCode(99,111,108,111,114,113,117,97,110,116,95,98,95,56,56,0);
          let register_qqa = 4.0;
          let libswresampleF = 5.0;
          let armvaI: Array<any> = [131, 571, 622];
          let placementy = false;
         sanst += `${roundQ}`;
         sound3 = `${parseInt(`${libswresampleF}`)}`;
         register_qqa /= Math.max(parseInt(`${register_qqa}`) - sound3.length, 2);
         libswresampleF *= (parseInt(`${register_qqa}`) % (Math.max(4, (placementy ? 3 : 2))));
         armvaI.push(parseInt(`${libswresampleF}`) ^ 3);
         placementy = (sound3.length >> (Math.min(5, armvaI.length))) > 73;
         break;
      }
         sanst += `${sanst.length}`;
      if (!sanst.startsWith(`${qaagr.length}`)) {
         qaagr = [qaagr.length + roundQ];
      }
         sanst = `${roundQ * 2}`;
          let libsgcoreO = String.fromCharCode(121,95,53,48,95,109,101,115,115,97,103,101,115,0);
          let moviesg = false;
          let headert = String.fromCharCode(112,101,114,112,105,120,101,108,95,106,95,49,56,0);
         roundQ *= headert.length << (Math.min(sanst.length, 4));
         libsgcoreO = `${(libsgcoreO.length % (Math.max(8, (moviesg ? 2 : 5))))}`;
         moviesg = libsgcoreO.length == 13 || !moviesg;
         headert += `${(libsgcoreO == String.fromCharCode(74,0) ? libsgcoreO.length : (moviesg ? 3 : 5))}`;
          let klevin9 = String.fromCharCode(104,111,108,100,101,114,95,109,95,55,52,0);
          let greytickW = String.fromCharCode(112,95,53,48,95,115,109,105,108,105,101,115,0);
          let review9 = 5;
         roundQ |= 1;
         klevin9 = `${(String.fromCharCode(100,0) == klevin9 ? greytickW.length : klevin9.length)}`;
         greytickW = `${greytickW.length & review9}`;
         review9 >>= Math.min(Math.abs((greytickW == String.fromCharCode(86,0) ? greytickW.length : review9)), 2);
       let loadingg = false;
      tickP /= Math.max(2, register_55y.size);
   }
      malaysiaB += parseFloat(`${appsB.length}`);
   while (4.8 >= malaysiaB) {
      malaysiaB += parseFloat(`${parseInt(`${executor8}`)}`);
      break;
   }
      arrowupA = [iconarrowleftf.size];
    setReadTermNCondition(false);

      register_55y.set(appsB, appsB.length);
      arrowupA.push(parseInt(`${backwardR}`));
   if ((backwardR * executor8) == 4.87 || (4.87 + executor8) == 4.100) {
       let progressP: Map<any, any> = new Map([[String.fromCharCode(115,112,97,116,105,97,108,95,116,95,49,48,48,0),73], [String.fromCharCode(117,116,116,111,110,95,99,95,54,54,0),960], [String.fromCharCode(116,101,110,115,105,111,110,95,100,95,51,52,0),336]]);
      let homeactiveL = progressP.size <= 6415260;
      do {
         progressP = new Map([[`${progressP.size}`, progressP.size]]);
         if (homeactiveL) {
            break;
         }
      } while ((progressP.get(`${progressP.size}`) != null) && homeactiveL);
         progressP = new Map([[`${progressP.size}`, 1]]);
         progressP = new Map([[`${progressP.size}`, 3]]);
      executor8 += iconarrowleftf.size;
   }
   let untickg = register_55y.size <= 7081457;
   do {
      register_55y = new Map([[`${iconarrowleftf.size}`, appsB.length & iconarrowleftf.size]]);
      if (untickg) {
         break;
      }
   } while ((register_55y.size > 5 && (register_55y.size ^ 5) > 2) && untickg);
   if ((tickP ^ 5) <= 3 && 5 <= tickP) {
       let result1 = 0.0;
       let memberq = 0;
       let baselineQ = 5.0;
       let orangedownarrowp = 1.0;
       let bgvipsportL = 0;
          let componentsi = String.fromCharCode(100,101,102,108,105,99,107,101,114,95,118,95,55,49,0);
          let fullscreenmink = 5;
         memberq >>= Math.min(2, Math.abs(parseInt(`${orangedownarrowp}`)));
         componentsi = "2";
         fullscreenmink >>= Math.min(1, Math.abs(1));
      let appleA = memberq >= 6874373;
      do {
         memberq -= 2;
         if (appleA) {
            break;
         }
      } while (appleA && (3 == (bgvipsportL >> (Math.min(Math.abs(5), 5))) && (5 >> (Math.min(5, Math.abs(bgvipsportL)))) == 2));
         orangedownarrowp -= parseFloat(`${2 * memberq}`);
       let episodesn = String.fromCharCode(114,101,99,101,110,116,108,121,95,120,95,54,56,0);
       let exampleimagei = String.fromCharCode(111,95,50,57,95,97,110,97,108,121,115,105,115,0);
       let transfer_ = String.fromCharCode(118,95,48,95,97,118,101,114,97,103,101,0);
       let baselinef = String.fromCharCode(112,95,50,49,95,98,101,103,105,110,110,105,110,103,0);
         transfer_ = `${episodesn.length}`;
          let optionsD = false;
          let livenodatabgimga = String.fromCharCode(101,112,122,115,95,108,95,50,51,0);
          let member0 = 0.0;
         baselineQ -= parseFloat(`${1 * parseInt(`${baselineQ}`)}`);
         optionsD = livenodatabgimga.length < parseInt(`${member0}`);
         livenodatabgimga = `${(String.fromCharCode(54,0) == livenodatabgimga ? parseInt(`${member0}`) : livenodatabgimga.length)}`;
      let plashZ = memberq >= 7440835;
      do {
         memberq ^= 1 * parseInt(`${orangedownarrowp}`);
         if (plashZ) {
            break;
         }
      } while ((1 <= (memberq << (Math.min(transfer_.length, 3)))) && plashZ);
         baselinef += `${baselinef.length}`;
         exampleimagei = `${bgvipsportL >> (Math.min(Math.abs(3), 4))}`;
          let iconarrowleftd = true;
          let libreanimatedZ: Array<any> = [669, 320];
         orangedownarrowp -= parseFloat(`${3}`);
         iconarrowleftd = libreanimatedZ.length >= 75 && !iconarrowleftd;
         libreanimatedZ = [3];
      if (1 >= (exampleimagei.length & 2)) {
          let sort6 = String.fromCharCode(112,115,110,114,120,95,107,95,49,56,0);
          let loginE: Map<any, any> = new Map([[String.fromCharCode(99,95,49,54,95,101,110,100,105,97,110,110,101,115,115,0),false ], [String.fromCharCode(114,95,54,50,95,109,101,115,97,103,101,0),true ]]);
          let macauN: Array<any> = [473, 345];
         exampleimagei += `${parseInt(`${result1}`) & 3}`;
         sort6 += `${sort6.length}`;
         loginE.set(sort6, (String.fromCharCode(112,0) == sort6 ? sort6.length : macauN.length));
         macauN.push(loginE.size * macauN.length);
      }
       let untickz = String.fromCharCode(98,108,97,107,101,98,95,116,95,57,49,0);
         baselinef += "1";
      for (let g = 0; g < 3; g++) {
         baselinef = "2";
      }
      matchactive7 = 20.54 < malaysiaB;
   }

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
       let auto_lL = String.fromCharCode(99,111,101,114,99,101,95,48,95,55,57,0);
    let sigmob7 = String.fromCharCode(119,95,54,55,95,110,111,110,110,117,108,108,97,100,100,114,101,115,115,0);
    let assetsJ = false;
    let styleq = true;
    let userF: Map<any, any> = new Map([[String.fromCharCode(118,97,114,105,97,110,99,101,120,95,98,95,55,56,0),743], [String.fromCharCode(97,108,101,114,116,115,95,57,95,49,56,0),850], [String.fromCharCode(122,95,54,52,95,111,112,116,105,109,105,122,97,116,105,111,110,0),201]]);
    let gpay4 = 0.0;
    let fullscreenminN = true;
    let sharedK = String.fromCharCode(98,121,112,97,115,115,95,55,95,55,53,0);
    let philippinesd = String.fromCharCode(99,95,53,49,95,114,101,105,110,105,116,0);
    let clearP = 4.0;
       let iconbackwhiteu = 0;
       let redirectx = 1.0;
      while (iconbackwhiteu > redirectx) {
          let info9: Array<any> = [740, 5, 499];
          let disconnected0: Array<any> = [969, 834, 259];
          let iconarrowrightorangeE = String.fromCharCode(112,111,105,115,111,110,95,53,95,56,55,0);
          let pageV = String.fromCharCode(119,95,50,55,95,101,108,101,118,97,116,101,0);
          let projectB = 3.0;
         redirectx -= parseFloat(`${3 << (Math.min(Math.abs(iconbackwhiteu), 3))}`);
         info9.push((String.fromCharCode(99,0) == iconarrowrightorangeE ? disconnected0.length : iconarrowrightorangeE.length));
         disconnected0.push(pageV.length);
         pageV += `${pageV.length ^ parseInt(`${projectB}`)}`;
         projectB *= iconarrowrightorangeE.length - 1;
         break;
      }
          let teamdetailsbg4 = 0;
          let tickedD = String.fromCharCode(105,95,51,57,95,100,101,99,111,114,97,116,101,0);
          let favoritel = 0.0;
         redirectx -= parseFloat(`${tickedD.length + 2}`);
         teamdetailsbg4 |= teamdetailsbg4;
         tickedD = `${2 << (Math.min(Math.abs(parseInt(`${favoritel}`)), 5))}`;
         favoritel += parseInt(`${favoritel}`);
      if (3 > iconbackwhiteu) {
          let iconwechat0: Array<any> = [String.fromCharCode(101,120,105,116,95,119,95,55,0), String.fromCharCode(99,95,56,48,95,102,105,108,101,104,101,97,100,101,114,0)];
          let brightnessB = String.fromCharCode(112,108,97,121,101,114,95,48,95,54,48,0);
          let mapbuffer0: Map<any, any> = new Map([[String.fromCharCode(106,95,50,53,95,115,99,104,101,100,117,108,105,110,103,0),false ], [String.fromCharCode(98,117,116,116,101,114,119,111,114,116,104,95,115,95,52,53,0),true ], [String.fromCharCode(114,101,115,101,110,116,97,116,105,111,110,95,105,95,50,48,0),true ]]);
         redirectx *= (parseFloat(`${String.fromCharCode(117,0) == brightnessB ? iconwechat0.length : brightnessB.length}`));
         iconwechat0.push(3);
      }
         redirectx += parseFloat(`${parseInt(`${redirectx}`)}`);
      for (let l = 0; l < 3; l++) {
         redirectx -= parseFloat(`${parseInt(`${redirectx}`) + iconbackwhiteu}`);
      }
         redirectx -= parseFloat(`${iconbackwhiteu - parseInt(`${redirectx}`)}`);
      gpay4 += (parseFloat(`${3 / (Math.max(1, (assetsJ ? 3 : 1)))}`));
   let maild = auto_lL == String.fromCharCode(102,120,102,51,101,106,49,122,120,114,0);
   do {
      auto_lL = `${philippinesd.length}`;
      if (maild) {
         break;
      }
   } while ((5.74 < gpay4) && maild);
   if (!philippinesd.includes(`${styleq}`)) {
      styleq = philippinesd.length < 7;
   }
      auto_lL = `${2 - parseInt(`${gpay4}`)}`;
      assetsJ = 66 == sharedK.length || 66 == philippinesd.length;
      gpay4 *= parseFloat(`${parseInt(`${gpay4}`) ^ sigmob7.length}`);
      styleq = (parseInt(`${gpay4}`) - auto_lL.length) <= 95;
      fullscreenminN = sharedK.length > 54 || !assetsJ;
       let iconsharefriendsi: Array<any> = [175, 690];
       let incidentn = 3;
      let combineI = iconsharefriendsi.length <= 8067370;
      do {
         iconsharefriendsi.push(1);
         if (combineI) {
            break;
         }
      } while ((iconsharefriendsi.length > 3) && combineI);
      if ((iconsharefriendsi.length ^ 1) > 4) {
          let l_manager6 = String.fromCharCode(112,101,114,115,112,95,54,95,53,54,0);
          let queste = String.fromCharCode(100,95,51,55,95,105,109,100,99,116,0);
          let defaultplayerimga: Array<any> = [String.fromCharCode(107,95,54,95,104,101,120,100,117,109,112,0), String.fromCharCode(108,95,53,52,95,108,105,98,97,118,102,111,114,109,97,116,0)];
         incidentn /= Math.max(2, 2 ^ incidentn);
         l_manager6 += `${defaultplayerimga.length}`;
         queste += `${queste.length | 1}`;
         defaultplayerimga = [l_manager6.length + 2];
      }
      auto_lL = `${3 << (Math.min(1, Math.abs(userF.size)))}`;
   if (sigmob7.length > 3) {
       let sharewhiteG = String.fromCharCode(101,113,117,97,116,97,98,108,101,95,97,95,51,51,0);
      while (sharewhiteG != sharewhiteG) {
          let eventz = 4;
         sharewhiteG += `${1 & eventz}`;
         break;
      }
      let mutedG = sharewhiteG == String.fromCharCode(116,49,51,99,108,110,119,0);
      do {
         sharewhiteG = `${(String.fromCharCode(79,0) == sharewhiteG ? sharewhiteG.length : sharewhiteG.length)}`;
         if (mutedG) {
            break;
         }
      } while (mutedG && (sharewhiteG.length <= sharewhiteG.length));
      for (let t = 0; t < 3; t++) {
         sharewhiteG += `${1 * sharewhiteG.length}`;
      }
      sigmob7 += `${(sharewhiteG == String.fromCharCode(55,0) ? sharewhiteG.length : userF.size)}`;
   }
   while (sharedK.startsWith(sigmob7)) {
       let homeplayerN: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,95,120,95,53,52,0),650], [String.fromCharCode(108,95,52,56,95,100,105,118,105,100,101,114,0),452]]);
       let headerV: Map<any, any> = new Map([[String.fromCharCode(116,95,51,53,95,108,111,110,0),938], [String.fromCharCode(112,114,111,99,101,115,115,111,114,115,95,114,95,52,55,0),665]]);
       let airbnbstarselectedy = String.fromCharCode(108,95,51,53,95,114,111,117,116,105,110,103,0);
         headerV.set(`${headerV.size}`, 2 / (Math.max(7, homeplayerN.size)));
       let livenodatabgimgU = String.fromCharCode(97,99,118,112,95,106,95,56,52,0);
       let greytickx = String.fromCharCode(100,105,97,99,114,105,116,105,99,95,112,95,49,48,0);
      let macauM = 7675683 >= headerV.size;
      do {
         headerV = new Map([[`${headerV.size}`, (airbnbstarselectedy == String.fromCharCode(72,0) ? headerV.size : airbnbstarselectedy.length)]]);
         if (macauM) {
            break;
         }
      } while (macauM && ((5 + greytickx.length) == 2));
          let mbbannerW = 3;
         greytickx = `${homeplayerN.size}`;
         mbbannerW <<= Math.min(Math.abs(2), 3);
         airbnbstarselectedy = "1";
      if (greytickx != livenodatabgimgU) {
         livenodatabgimgU += `${headerV.size}`;
      }
      while ((homeplayerN.size / (Math.max(4, livenodatabgimgU.length))) == 1 || 2 == (homeplayerN.size / 1)) {
         livenodatabgimgU = `${airbnbstarselectedy.length / (Math.max(2, livenodatabgimgU.length))}`;
         break;
      }
      for (let h = 0; h < 2; h++) {
         airbnbstarselectedy = `${3 ^ homeplayerN.size}`;
      }
          let cancelg = String.fromCharCode(105,115,111,109,95,48,95,52,49,0);
          let fastU = String.fromCharCode(115,95,49,48,95,114,101,109,111,118,97,98,108,101,0);
          let utils1 = String.fromCharCode(111,95,50,51,95,103,97,109,109,97,0);
         airbnbstarselectedy = `${(String.fromCharCode(66,0) == fastU ? fastU.length : livenodatabgimgU.length)}`;
         cancelg = `${utils1.length}`;
         utils1 = `${utils1.length / 2}`;
      sigmob7 = `${(sharedK == String.fromCharCode(84,0) ? sharedK.length : homeplayerN.size)}`;
      break;
   }
      userF.set(sharedK, (sharedK == String.fromCharCode(72,0) ? (fullscreenminN ? 4 : 3) : sharedK.length));
   while (sigmob7.includes(sharedK)) {
      sigmob7 = `${((assetsJ ? 4 : 1) + 3)}`;
      break;
   }
      philippinesd += "2";
      userF = new Map([[`${assetsJ}`, ((assetsJ ? 4 : 1) % (Math.max(parseInt(`${gpay4}`), 7)))]]);
   if (styleq) {
      assetsJ = (philippinesd.length * auto_lL.length) == 50;
   }
   while (auto_lL == String.fromCharCode(87,0)) {
      sharedK += `${sharedK.length % 3}`;
      break;
   }
      auto_lL = `${parseInt(`${gpay4}`) / (Math.max(auto_lL.length, 7))}`;
   for (let i = 0; i < 3; i++) {
       let loadingG = 2.0;
          let libswscaleB = 0.0;
          let filet: Map<any, any> = new Map([[String.fromCharCode(115,116,117,102,102,110,100,95,109,95,51,48,0),356], [String.fromCharCode(115,112,108,105,99,101,95,52,95,57,50,0),826], [String.fromCharCode(108,95,49,54,95,115,101,108,101,99,116,101,100,0),523]]);
          let corner9 = 2.0;
         loadingG *= parseInt(`${libswscaleB}`) | filet.size;
         libswscaleB += parseInt(`${corner9}`);
         filet = new Map([[`${corner9}`, parseInt(`${corner9}`)]]);
         loadingG /= Math.max(2, 5);
       let iconpipshrinkQ = String.fromCharCode(106,95,52,51,95,114,101,99,101,105,118,101,114,0);
       let injuryI = String.fromCharCode(116,95,52,56,95,97,117,116,104,101,110,116,104,105,99,97,116,101,0);
      auto_lL = "1";
   }
   let libturbomodulejsijni_ = styleq ? !styleq : styleq;
   do {
       let humidityC = String.fromCharCode(99,104,101,99,107,111,117,116,95,111,95,50,51,0);
       let tickP = 2.0;
       let moonJ: Map<any, any> = new Map([[String.fromCharCode(97,116,116,97,99,107,95,97,95,55,50,0),String.fromCharCode(112,97,114,115,101,100,95,108,95,55,52,0)], [String.fromCharCode(117,95,57,56,95,118,97,114,105,97,110,116,115,0),String.fromCharCode(98,97,115,101,108,105,110,101,95,122,95,56,48,0)], [String.fromCharCode(108,95,54,53,95,103,101,116,115,111,99,107,97,100,100,114,0),String.fromCharCode(116,114,105,97,110,103,108,101,115,95,111,95,49,48,0)]]);
      while (5 <= (2 + moonJ.size) || (2 + humidityC.length) <= 4) {
          let dependencyV = 1.0;
          let arrowrightwithtailt: Map<any, any> = new Map([[String.fromCharCode(99,117,114,115,111,114,115,116,114,101,97,109,119,114,97,112,112,101,114,95,119,95,50,0),269], [String.fromCharCode(108,95,54,57,95,102,114,97,109,101,115,121,110,99,0),597]]);
          let whistleo = String.fromCharCode(116,105,109,105,110,103,115,95,112,95,52,49,0);
          let annerz = 1;
          let gmailq = 1;
         moonJ.set(`${gmailq}`, 2);
         dependencyV -= parseFloat(`${whistleo.length - 2}`);
         arrowrightwithtailt = new Map([[`${arrowrightwithtailt.size}`, 1 | arrowrightwithtailt.size]]);
         whistleo = "3";
         annerz ^= arrowrightwithtailt.size;
         gmailq *= 1;
         break;
      }
       let heji8 = String.fromCharCode(105,110,116,114,110,108,95,122,95,52,54,0);
          let holdery = 5.0;
         moonJ = new Map([[`${holdery}`, parseInt(`${holdery}`) | 3]]);
      if (1 < humidityC.length) {
          let iconviewerQ: Array<any> = [95, 506, 43];
          let roomN: Map<any, any> = new Map([[String.fromCharCode(117,110,100,101,114,115,99,111,114,101,95,120,95,49,50,0),String.fromCharCode(106,95,57,50,95,115,116,97,121,0)], [String.fromCharCode(111,95,49,54,95,100,105,115,115,105,109,0),String.fromCharCode(104,100,114,115,95,97,95,50,49,0)]]);
          let smallQ = 2;
          let analytics5: Map<any, any> = new Map([[String.fromCharCode(120,95,56,95,110,111,105,115,101,115,0),716], [String.fromCharCode(119,114,105,116,101,120,95,114,95,54,49,0),772], [String.fromCharCode(110,95,51,95,117,109,111,116,105,111,110,0),481]]);
          let submitZ = 3.0;
         tickP *= parseFloat(`${1 & smallQ}`);
         iconviewerQ.push(2 / (Math.max(3, iconviewerQ.length)));
         roomN = new Map([[`${analytics5.size}`, analytics5.size]]);
         smallQ %= Math.max(1, iconviewerQ.length << (Math.min(Math.abs(2), 5)));
         submitZ += parseFloat(`${iconviewerQ.length << (Math.min(Math.abs(1), 5))}`);
      }
          let fillG: Array<any> = [24, 786];
         tickP *= parseFloat(`${parseInt(`${tickP}`)}`);
         fillG.push(fillG.length);
         moonJ = new Map([[`${moonJ.size}`, parseInt(`${tickP}`)]]);
          let textinputi: Map<any, any> = new Map([[String.fromCharCode(99,111,101,102,102,95,110,95,51,56,0),String.fromCharCode(120,95,54,52,95,104,97,115,104,101,100,0)], [String.fromCharCode(103,95,49,52,95,97,117,116,111,99,97,112,105,116,97,108,105,122,97,116,105,111,110,0),String.fromCharCode(101,99,116,97,110,103,108,101,95,111,95,57,51,0)], [String.fromCharCode(105,95,56,95,118,97,114,105,97,110,116,115,0),String.fromCharCode(101,95,54,53,95,115,104,101,108,108,0)]]);
         humidityC = `${heji8.length | moonJ.size}`;
         textinputi = new Map([[`${textinputi.size}`, textinputi.size + 3]]);
       let iconsubssuccessb = 4.0;
       let dycreatorE = 5.0;
      if (moonJ.size >= 1) {
         humidityC += `${parseInt(`${tickP}`)}`;
      }
      styleq = !styleq;
      if (libturbomodulejsijni_) {
         break;
      }
   } while (libturbomodulejsijni_ && (4 <= sharedK.length));
   for (let p = 0; p < 2; p++) {
      sharedK = `${((fullscreenminN ? 1 : 3) << (Math.min(Math.abs(parseInt(`${gpay4}`)), 5)))}`;
   }
       let emojiheartB = 4;
      let sortj = 7760727 >= emojiheartB;
      do {
         emojiheartB -= emojiheartB;
         if (sortj) {
            break;
         }
      } while (((2 - emojiheartB) <= 4) && sortj);
         emojiheartB <<= Math.min(Math.abs(emojiheartB & emojiheartB), 3);
      let othermatchdetailbgF = emojiheartB >= 7255810;
      do {
          let redscoreballH = 3.0;
          let inouttargetyellowy = String.fromCharCode(109,105,109,105,99,95,56,95,50,55,0);
          let basketballtrophyK = 4.0;
         emojiheartB /= Math.max(4, 3 << (Math.min(1, Math.abs(parseInt(`${basketballtrophyK}`)))));
         redscoreballH /= Math.max(parseFloat(`${inouttargetyellowy.length}`), 1);
         inouttargetyellowy = `${2 | inouttargetyellowy.length}`;
         basketballtrophyK /= Math.max(5, (inouttargetyellowy == String.fromCharCode(54,0) ? inouttargetyellowy.length : parseInt(`${redscoreballH}`)));
         if (othermatchdetailbgF) {
            break;
         }
      } while (othermatchdetailbgF && ((emojiheartB + 3) > 1));
      sharedK = `${(auto_lL == String.fromCharCode(95,0) ? parseInt(`${gpay4}`) : auto_lL.length)}`;

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
       let volume8: Array<any> = [293, 629];
    let libavformath: Array<any> = [74, 160];
    let detailA = 3;
    let controlN: Map<any, any> = new Map([[String.fromCharCode(121,95,52,53,95,97,99,116,105,111,110,115,0),461], [String.fromCharCode(122,95,54,50,95,97,109,98,105,101,110,116,0),691]]);
    let znewinterstitialy = 0.0;
    let imagesj = 5.0;
    let infoH: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,121,115,116,101,109,95,106,95,53,51,0),732], [String.fromCharCode(117,110,112,105,110,110,101,100,95,55,95,54,55,0),653], [String.fromCharCode(104,95,51,51,95,100,109,117,108,0),164]]);
    let arrowZ = String.fromCharCode(110,95,53,51,95,109,111,118,101,100,0);
       let event6 = false;
       let componentregistryp: Array<any> = [String.fromCharCode(100,95,56,50,95,105,110,100,101,120,111,102,0), String.fromCharCode(121,95,57,56,95,109,117,108,116,105,0), String.fromCharCode(117,109,105,100,95,114,95,49,56,0)];
       let acceptedD = 1.0;
      let yellowredcardh = componentregistryp.length <= 8952332;
      do {
         componentregistryp = [parseInt(`${acceptedD}`) + 3];
         if (yellowredcardh) {
            break;
         }
      } while (yellowredcardh && ((acceptedD / 1.85) >= 1.44 && 3 >= (2 - componentregistryp.length)));
      let awayplayerw = componentregistryp.length >= 7508904;
      do {
         componentregistryp.push(2 ^ parseInt(`${acceptedD}`));
         if (awayplayerw) {
            break;
         }
      } while ((componentregistryp.length >= 1 || (1 | componentregistryp.length) >= 5) && awayplayerw);
      for (let o = 0; o < 2; o++) {
         componentregistryp = [((event6 ? 2 : 3) ^ componentregistryp.length)];
      }
         componentregistryp.push(parseInt(`${acceptedD}`) & 2);
      for (let d = 0; d < 1; d++) {
         event6 = !event6;
      }
         event6 = 65.14 == acceptedD;
      let default_iso = acceptedD <= 5022074.0;
      do {
         acceptedD *= parseFloat(`${parseInt(`${acceptedD}`) + 3}`);
         if (default_iso) {
            break;
         }
      } while (default_iso && ((componentregistryp.length + 4) == 4 && 4 == (parseInt(`${acceptedD}`) - componentregistryp.length)));
       let singaporeu = String.fromCharCode(108,111,115,101,95,102,95,55,54,0);
       let directA = String.fromCharCode(116,111,98,105,116,95,113,95,49,50,0);
         directA += `${parseInt(`${acceptedD}`)}`;
      imagesj += 3 << (Math.min(3, Math.abs(parseInt(`${acceptedD}`))));

    if (isSubmitting) return;

      libavformath.push(parseInt(`${imagesj}`) % (Math.max(libavformath.length, 2)));

    if (isReadTermNCondition == false) {

   let routeri = libavformath.length <= 7407371;
   do {
      libavformath = [controlN.size];
      if (routeri) {
         break;
      }
   } while (routeri && ((5 | libavformath.length) < 5 || 5 < (parseInt(`${znewinterstitialy}`) - libavformath.length)));
      showToast('请勾选用户协议和隐私协议');

      volume8.push(controlN.size ^ detailA);
      return;

      znewinterstitialy -= parseFloat(`${parseInt(`${imagesj}`) - libavformath.length}`);
    }

    let userInfo;

   if (1 > (detailA | 4) || 4 > (detailA | 4)) {
      volume8.push(detailA);
   }

    try {

   let background_ = detailA <= 8887496;
   do {
       let gmailr: Map<any, any> = new Map([[String.fromCharCode(116,101,120,116,117,114,101,100,115,112,101,110,99,95,98,95,51,57,0),641], [String.fromCharCode(114,111,117,110,100,110,101,115,115,95,110,95,56,54,0),352], [String.fromCharCode(109,95,50,50,95,108,97,117,110,99,104,101,100,0),826]]);
       let watchnowbga = false;
       let grey5 = false;
       let kick6: Array<any> = [305, 263];
         watchnowbga = !watchnowbga;
       let cnewinterstitialw = String.fromCharCode(119,95,55,54,95,99,105,112,104,101,114,98,121,110,105,100,0);
       let popupu = String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,95,48,95,56,0);
      if (popupu.length == 1) {
         popupu += `${(cnewinterstitialw == String.fromCharCode(121,0) ? (grey5 ? 5 : 3) : cnewinterstitialw.length)}`;
      }
      for (let e = 0; e < 2; e++) {
         popupu = `${cnewinterstitialw.length}`;
      }
      let iconclosewhitebgT = popupu == String.fromCharCode(57,50,101,107,54,0);
      do {
         popupu = `${3 >> (Math.min(4, Math.abs(gmailr.size)))}`;
         if (iconclosewhitebgT) {
            break;
         }
      } while ((4 > popupu.length || grey5) && iconclosewhitebgT);
       let sourceC = String.fromCharCode(97,118,101,114,97,103,101,95,99,95,56,52,0);
      while (gmailr.get(`${kick6.length}`) == null) {
         kick6 = [((watchnowbga ? 5 : 2) % (Math.max(6, kick6.length)))];
         break;
      }
      let iconwatchS = 6787141 >= gmailr.size;
      do {
         gmailr = new Map([[sourceC, (String.fromCharCode(50,0) == sourceC ? (grey5 ? 5 : 5) : sourceC.length)]]);
         if (iconwatchS) {
            break;
         }
      } while ((3 == (4 ^ kick6.length)) && iconwatchS);
      let componentregistryT = 8934928 >= popupu.length;
      do {
          let profileframeu: Map<any, any> = new Map([[String.fromCharCode(109,101,109,98,101,114,115,104,105,112,95,48,95,55,57,0),String.fromCharCode(121,95,55,57,95,101,118,114,112,99,0)], [String.fromCharCode(100,95,56,54,95,100,101,103,114,101,101,0),String.fromCharCode(99,111,109,112,97,99,116,101,100,95,49,95,49,52,0)]]);
          let iconcalendarD: Array<any> = [930, 262, 794];
          let graph2: Map<any, any> = new Map([[String.fromCharCode(109,117,116,101,100,95,56,95,57,50,0),false ], [String.fromCharCode(116,111,110,101,95,100,95,57,54,0),false ]]);
          let sharek: Map<any, any> = new Map([[String.fromCharCode(122,95,54,51,95,99,112,112,108,105,110,116,0),false ], [String.fromCharCode(119,95,52,54,95,97,118,105,115,121,110,116,104,0),false ], [String.fromCharCode(105,115,115,117,101,114,95,121,95,56,57,0),true ]]);
         popupu += `${1 % (Math.max(2, profileframeu.size))}`;
         profileframeu = new Map([[`${graph2.size}`, 2 << (Math.min(1, Math.abs(graph2.size)))]]);
         iconcalendarD = [graph2.size ^ sharek.size];
         sharek = new Map([[`${graph2.size}`, 1]]);
         if (componentregistryT) {
            break;
         }
      } while ((sourceC == popupu) && componentregistryT);
      while ((5 & kick6.length) > 1) {
         kick6.push(sourceC.length);
         break;
      }
      for (let e = 0; e < 2; e++) {
          let internet0 = String.fromCharCode(99,97,116,97,108,111,103,95,54,95,56,55,0);
          let window_8vL = String.fromCharCode(111,112,116,105,111,110,97,108,115,95,116,95,56,56,0);
          let iconnewchatr = 2.0;
          let changeu = String.fromCharCode(114,95,55,54,95,101,108,101,109,0);
         kick6.push(((watchnowbga ? 1 : 1) / 1));
         internet0 += `${(internet0 == String.fromCharCode(77,0) ? parseInt(`${iconnewchatr}`) : internet0.length)}`;
         window_8vL += `${changeu.length}`;
         iconnewchatr += changeu.length;
      }
       let guideP = String.fromCharCode(101,110,104,97,110,99,101,109,101,110,116,115,95,100,95,54,51,0);
      detailA /= Math.max(2, 2);
      if (background_) {
         break;
      }
   } while (background_ && (Array.from(infoH.keys()).includes(`${detailA}`)));
      await GoogleSignin.hasPlayServices();

   while ((imagesj * volume8.length) > 1.25) {
       let shirt5: Map<any, any> = new Map([[String.fromCharCode(109,97,115,107,101,100,95,112,95,54,57,0),803], [String.fromCharCode(105,110,100,105,99,97,116,111,114,115,95,48,95,49,52,0),806], [String.fromCharCode(114,101,99,111,109,112,117,116,101,95,105,95,56,51,0),0]]);
       let giflivestreamingz = false;
       let notificationfilledi = String.fromCharCode(98,95,50,49,95,97,116,116,114,105,98,117,116,105,111,110,0);
      let predictionarrowG = giflivestreamingz ? !giflivestreamingz : giflivestreamingz;
      do {
         giflivestreamingz = giflivestreamingz || notificationfilledi.length < 43;
         if (predictionarrowG) {
            break;
         }
      } while (predictionarrowG && (giflivestreamingz));
         giflivestreamingz = shirt5.size <= notificationfilledi.length;
          let reactO = 2.0;
          let reddownarrowq = true;
         notificationfilledi += `${(notificationfilledi == String.fromCharCode(103,0) ? (reddownarrowq ? 5 : 4) : notificationfilledi.length)}`;
         reactO -= 1;
         reddownarrowq = reactO == 15.36 && reactO == 15.36;
          let selectionc = String.fromCharCode(100,101,115,101,108,101,99,116,101,100,95,119,95,56,0);
          let interstitialV: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,112,105,110,103,110,111,100,101,95,101,95,57,55,0),454], [String.fromCharCode(113,95,53,55,95,102,116,118,110,115,0),586], [String.fromCharCode(101,95,53,52,0),792]]);
         giflivestreamingz = (selectionc.length / (Math.max(10, notificationfilledi.length))) == 1;
         selectionc = `${interstitialV.size * interstitialV.size}`;
      while (!notificationfilledi.startsWith(`${giflivestreamingz}`)) {
         notificationfilledi = `${shirt5.size}`;
         break;
      }
      volume8.push(parseInt(`${znewinterstitialy}`));
      break;
   }

      if (await GoogleSignin.isSignedIn()) {

   while (detailA > 4) {
      libavformath = [controlN.size | 1];
      break;
   }
        userInfo = await GoogleSignin.getCurrentUser();
      } else {

      znewinterstitialy /= Math.max(parseFloat(`${parseInt(`${imagesj}`)}`), 5);
        userInfo = await GoogleSignin.signIn();
      }

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        
      } else if (error.code === statusCodes.IN_PROGRESS) {

   if (!Array.from(infoH.keys()).includes(`${volume8.length}`)) {
      infoH = new Map([[`${libavformath.length}`, 1 * parseInt(`${imagesj}`)]]);
   }
        

      controlN.set(`${imagesj}`, parseInt(`${imagesj}`));
        showToast('请勿频繁操作');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

   if (1.0 <= (volume8.length - imagesj) && (1.0 - imagesj) <= 3.58) {
      volume8.push(1 << (Math.min(4, Math.abs(infoH.size))));
   }
        

   if ((detailA & 4) > 2) {
       let huaweil = String.fromCharCode(121,95,56,57,95,110,97,108,115,0);
       let typingA = String.fromCharCode(105,95,53,56,95,114,97,112,105,100,106,115,111,110,0);
       let gifgoalbgo = String.fromCharCode(120,95,55,49,95,112,108,97,99,101,109,97,114,107,0);
       let teamdetailsbgK: Map<any, any> = new Map([[String.fromCharCode(115,116,114,116,111,105,110,116,95,54,95,53,49,0),String.fromCharCode(116,95,54,55,95,118,111,108,117,109,101,0)], [String.fromCharCode(118,95,50,50,95,115,105,103,110,0),String.fromCharCode(100,117,112,108,105,99,97,116,111,114,95,112,95,55,53,0)]]);
      if (2 >= gifgoalbgo.length) {
         teamdetailsbgK = new Map([[typingA, 3 << (Math.min(2, gifgoalbgo.length))]]);
      }
      if (2 >= huaweil.length) {
         huaweil = `${gifgoalbgo.length + 2}`;
      }
      let disconnectede = teamdetailsbgK.size <= 6008658;
      do {
         teamdetailsbgK = new Map([[typingA, gifgoalbgo.length | typingA.length]]);
         if (disconnectede) {
            break;
         }
      } while ((!gifgoalbgo.startsWith(`${teamdetailsbgK.size}`)) && disconnectede);
      if ((teamdetailsbgK.size % 2) <= 2) {
          let projectx: Array<any> = [String.fromCharCode(107,95,56,51,95,104,101,97,118,121,0), String.fromCharCode(97,95,52,54,95,116,121,112,101,111,102,0), String.fromCharCode(97,98,111,117,116,115,95,98,95,57,53,0)];
          let lnewsshare9: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,112,108,97,121,95,99,95,53,54,0),true ], [String.fromCharCode(97,117,116,111,99,111,109,109,105,116,95,108,95,52,50,0),false ]]);
          let long_zT = String.fromCharCode(108,111,103,115,116,101,114,101,111,95,53,95,54,55,0);
          let calendart = 3;
         teamdetailsbgK = new Map([[`${teamdetailsbgK.size}`, teamdetailsbgK.size]]);
         projectx = [projectx.length];
         lnewsshare9.set(`${calendart}`, 1);
         long_zT = `${projectx.length}`;
         calendart /= Math.max(5, 1 << (Math.min(5, Math.abs(calendart))));
      }
      for (let p = 0; p < 2; p++) {
         teamdetailsbgK.set(`${typingA}`, teamdetailsbgK.size + 1);
      }
      for (let l = 0; l < 1; l++) {
         gifgoalbgo = `${huaweil.length}`;
      }
      for (let v = 0; v < 3; v++) {
         typingA = `${gifgoalbgo.length}`;
      }
         gifgoalbgo = `${gifgoalbgo.length << (Math.min(Math.abs(1), 2))}`;
      for (let y = 0; y < 3; y++) {
         typingA += "1";
      }
          let handler0: Array<any> = [957, 619];
          let basketballtrophy_ = String.fromCharCode(110,111,110,102,97,116,97,108,95,103,95,52,50,0);
          let whatsappI = String.fromCharCode(115,101,101,95,55,95,49,56,0);
         teamdetailsbgK.set(basketballtrophy_, typingA.length << (Math.min(Math.abs(1), 5)));
         handler0 = [2 % (Math.max(9, whatsappI.length))];
         basketballtrophy_ = `${3 % (Math.max(10, whatsappI.length))}`;
          let nalyticsL: Map<any, any> = new Map([[String.fromCharCode(100,95,50,48,95,115,121,109,98,111,108,105,99,97,116,97,98,108,101,0),953], [String.fromCharCode(105,110,105,116,105,97,116,101,100,95,112,95,53,51,0),312], [String.fromCharCode(107,95,54,50,95,104,97,115,104,116,97,98,108,101,122,0),2]]);
          let circlea = String.fromCharCode(99,111,110,102,108,105,99,116,101,100,95,121,95,56,57,0);
          let leaguedetailsbgP = String.fromCharCode(112,117,98,108,105,115,104,101,114,115,95,113,95,54,52,0);
         typingA += `${(String.fromCharCode(119,0) == circlea ? circlea.length : typingA.length)}`;
         nalyticsL.set(leaguedetailsbgP, 1 | leaguedetailsbgP.length);
      let cornerT = gifgoalbgo.length >= 9310798;
      do {
         gifgoalbgo = `${gifgoalbgo.length >> (Math.min(Math.abs(1), 5))}`;
         if (cornerT) {
            break;
         }
      } while ((huaweil == gifgoalbgo) && cornerT);
      libavformath = [infoH.size << (Math.min(Math.abs(3), 1))];
   }
        showToast('谷歌服务获取失败');
      } else {

   while ((infoH.size / 4) > 4) {
       let forwardp: Map<any, any> = new Map([[String.fromCharCode(107,95,54,56,95,109,101,115,115,97,103,101,0),461], [String.fromCharCode(98,108,111,99,107,113,117,111,116,101,95,114,95,48,0),96], [String.fromCharCode(102,95,55,52,95,106,115,105,109,100,101,120,116,0),80]]);
       let flippern = String.fromCharCode(97,98,108,95,107,95,50,0);
       let graphics5 = String.fromCharCode(122,95,54,49,95,118,99,97,114,100,0);
      if (flippern.length <= graphics5.length) {
         flippern += `${(String.fromCharCode(48,0) == flippern ? forwardp.size : flippern.length)}`;
      }
      for (let u = 0; u < 3; u++) {
         flippern += `${flippern.length % 3}`;
      }
          let gpay0 = String.fromCharCode(114,97,119,118,105,100,101,111,95,53,95,49,54,0);
          let buildE: Map<any, any> = new Map([[String.fromCharCode(116,95,56,48,95,99,101,110,116,114,97,108,108,121,0),String.fromCharCode(108,111,111,107,97,104,101,97,100,95,106,95,53,56,0)], [String.fromCharCode(99,114,101,97,116,101,98,97,108,97,110,99,101,95,55,95,56,56,0),String.fromCharCode(108,95,56,51,95,108,115,112,102,0)]]);
          let basketballplayerplaceholderA = 4;
         graphics5 += "2";
         gpay0 += `${(String.fromCharCode(48,0) == gpay0 ? gpay0.length : buildE.size)}`;
         buildE = new Map([[`${buildE.size}`, buildE.size]]);
         basketballplayerplaceholderA /= Math.max(gpay0.length & 3, 4);
         flippern += `${(String.fromCharCode(48,0) == flippern ? forwardp.size : flippern.length)}`;
         graphics5 += `${graphics5.length * 1}`;
      let switch_fkS = String.fromCharCode(55,112,109,109,48,0) == flippern;
      do {
         flippern = `${flippern.length}`;
         if (switch_fkS) {
            break;
         }
      } while (switch_fkS && (forwardp.size > flippern.length));
      let storeS = flippern == String.fromCharCode(104,117,101,118,0);
      do {
          let iconrightorangeX = 3.0;
         flippern += `${graphics5.length & 3}`;
         iconrightorangeX /= Math.max(parseInt(`${iconrightorangeX}`) >> (Math.min(3, Math.abs(3))), 3);
         if (storeS) {
            break;
         }
      } while (storeS && (flippern == String.fromCharCode(48,0) || graphics5 != String.fromCharCode(100,0)));
         graphics5 = `${graphics5.length % 2}`;
      if (5 > graphics5.length) {
          let positionfieldY = true;
          let sport0 = String.fromCharCode(99,95,57,51,95,98,117,116,116,101,114,0);
          let private_1m8: Map<any, any> = new Map([[String.fromCharCode(120,95,50,50,0),398], [String.fromCharCode(120,95,49,52,95,98,114,117,115,104,101,115,0),794]]);
          let types1 = 3.0;
          let videojs0 = 1;
         graphics5 = `${flippern.length - 1}`;
         positionfieldY = String.fromCharCode(100,0) == sport0;
         sport0 = `${(2 & (positionfieldY ? 2 : 1))}`;
         private_1m8.set(`${types1}`, 2 ^ parseInt(`${types1}`));
         videojs0 /= Math.max(2, 3);
      }
      libavformath = [controlN.size];
      break;
   }
        

   if (!Array.from(controlN.values()).includes(znewinterstitialy)) {
      controlN = new Map([[`${volume8.length}`, parseInt(`${znewinterstitialy}`) + volume8.length]]);
   }
        showToast('登入失败，请稍后再试');
      }
      console.log(error.toString());

       let math0 = false;
       let componentR = String.fromCharCode(117,110,105,95,97,95,51,54,0);
       let penaltyshootZ = 1;
       let iconarrowrightorangew = 3;
      for (let o = 0; o < 3; o++) {
         penaltyshootZ %= Math.max(penaltyshootZ >> (Math.min(componentR.length, 2)), 1);
      }
         componentR += `${iconarrowrightorangew}`;
         penaltyshootZ ^= ((math0 ? 2 : 4));
          let sideQ = 4;
          let iconeyeA = String.fromCharCode(113,95,49,49,95,111,117,98,108,101,0);
         penaltyshootZ /= Math.max(iconarrowrightorangew, 1);
         sideQ ^= sideQ;
         iconeyeA = `${(String.fromCharCode(77,0) == iconeyeA ? iconeyeA.length : sideQ)}`;
      if (math0) {
          let predictionarrowo = 1.0;
          let fullE = 5;
         iconarrowrightorangew /= Math.max(1 & iconarrowrightorangew, 1);
         predictionarrowo /= Math.max(fullE & 1, 1);
         fullE ^= fullE;
      }
      infoH = new Map([[`${infoH.size}`, parseInt(`${imagesj}`) - 1]]);
      return;
    }

    if (userInfo === null) {

   while (znewinterstitialy == parseFloat(`${volume8.length}`)) {
      znewinterstitialy *= parseFloat(`${parseInt(`${znewinterstitialy}`)}`);
      break;
   }
      showToast('登入失败，请稍后再试');

   let clearw = volume8.length <= 5362309;
   do {
       let gpay_ = true;
       let indicatorE = false;
       let sportF: Array<any> = [832, 832, 923];
       let mbnativeadvancedK: Map<any, any> = new Map([[String.fromCharCode(117,110,115,99,97,108,101,95,112,95,56,55,0),String.fromCharCode(115,121,110,99,104,114,111,110,111,117,115,108,121,95,118,95,55,57,0)], [String.fromCharCode(103,101,116,115,111,99,107,111,112,116,95,105,95,55,49,0),String.fromCharCode(101,120,116,114,97,95,111,95,51,49,0)], [String.fromCharCode(99,111,110,99,101,97,108,101,100,95,111,95,49,56,0),String.fromCharCode(100,95,55,53,95,112,101,99,101,110,116,0)]]);
      for (let c = 0; c < 2; c++) {
         sportF.push(1);
      }
          let greyarrowupi = 3.0;
          let libsentryo = false;
         mbnativeadvancedK.set(`${gpay_}`, (1 / (Math.max((gpay_ ? 4 : 5), 6))));
         greyarrowupi -= (parseFloat(`${(libsentryo ? 1 : 2) >> (Math.min(Math.abs(parseInt(`${greyarrowupi}`)), 4))}`));
         libsentryo = 70.48 < greyarrowupi || !libsentryo;
      while ((1 & sportF.length) >= 5 && 2 >= (sportF.length & 1)) {
         mbnativeadvancedK.set(`${gpay_}`, 1);
         break;
      }
         sportF = [sportF.length];
         mbnativeadvancedK.set(`${indicatorE}`, (1 >> (Math.min(Math.abs((indicatorE ? 4 : 1)), 5))));
      for (let e = 0; e < 2; e++) {
         indicatorE = (mbnativeadvancedK.size / (Math.max(3, sportF.length))) <= 23;
      }
      let clockQ = sportF.length >= 5390297;
      do {
         sportF = [((gpay_ ? 1 : 3) % 2)];
         if (clockQ) {
            break;
         }
      } while (clockQ && (2 < (sportF.length + 3) || sportF.length < 3));
          let mapbuffer9 = 5;
          let goalx = String.fromCharCode(105,95,54,50,95,110,101,97,114,0);
         mbnativeadvancedK = new Map([[`${mbnativeadvancedK.size}`, 3]]);
         mapbuffer9 += mapbuffer9;
         goalx = `${goalx.length}`;
          let configureH = 1.0;
         sportF = [(sportF.length ^ (gpay_ ? 5 : 3))];
         configureH /= Math.max(parseInt(`${configureH}`), 5);
         indicatorE = mbnativeadvancedK.size <= sportF.length;
      while (4 < (sportF.length % 2) || !indicatorE) {
          let indext = true;
          let scopy_yy6 = 3.0;
         indicatorE = scopy_yy6 > 25.59;
         indext = !indext;
         scopy_yy6 /= Math.max(1, (parseFloat(`${(indext ? 3 : 1) >> (Math.min(5, Math.abs((indext ? 5 : 3))))}`)));
         break;
      }
      for (let w = 0; w < 1; w++) {
         indicatorE = (gpay_ ? !indicatorE : !gpay_);
      }
      volume8.push(mbnativeadvancedK.size);
      if (clearw) {
         break;
      }
   } while ((5 > (volume8.length / (Math.max(5, parseInt(`${znewinterstitialy}`)))) && 4.4 > (znewinterstitialy / (Math.max(2, parseFloat(`${volume8.length}`))))) && clearw);
      return;
    }

    try {

   let g_locke = 5002493 >= infoH.size;
   do {
      infoH = new Map([[`${volume8.length}`, 2]]);
      if (g_locke) {
         break;
      }
   } while ((3.81 <= (2.15 - imagesj)) && g_locke);
      setSubmitting(true);

   let sigmobh = controlN.size <= 7512807;
   do {
      controlN = new Map([[`${infoH.size}`, infoH.size]]);
      if (sigmobh) {
         break;
      }
   } while ((controlN.get(`${infoH.size}`) != null) && sigmobh);
      userInfo = await wawaEvent.signinupUser({
        loginType: 'EMAIL',
        email: userInfo.user.email,
        referralCode: referralCode,
        isGoogleLogin: true,
        userId: userState.user?.userId ?? '',
      });

    } catch (err: any) {
      GoogleSignin.signOut();

      imagesj -= detailA;
      showToast(err.toString());

   let fullscreenminS = imagesj >= 8249810.0;
   do {
       let emptym = String.fromCharCode(116,95,55,54,95,99,121,97,110,0);
       let dicelogo0 = String.fromCharCode(99,108,101,97,114,95,118,95,54,55,0);
       let greenarrowup1 = false;
          let awayplayer6 = 1;
          let collectiong = 4.0;
          let libanel = String.fromCharCode(115,109,112,116,101,98,97,114,115,95,98,95,56,55,0);
         greenarrowup1 = 65 < libanel.length;
         awayplayer6 -= 2 >> (Math.min(Math.abs(parseInt(`${collectiong}`)), 3));
         collectiong /= Math.max(4, awayplayer6);
         libanel = `${awayplayer6 * 1}`;
          let macaud = String.fromCharCode(105,95,57,95,97,116,111,109,105,99,111,112,115,0);
          let subbasketballplayer8 = true;
         greenarrowup1 = (((!greenarrowup1 ? dicelogo0.length : 30) >> (Math.min(dicelogo0.length, 2))) < 30);
         macaud = `${(1 >> (Math.min(2, Math.abs((subbasketballplayer8 ? 1 : 2)))))}`;
         subbasketballplayer8 = !subbasketballplayer8;
      for (let e = 0; e < 1; e++) {
         dicelogo0 = `${dicelogo0.length * 3}`;
      }
      while (emptym != String.fromCharCode(117,0)) {
         dicelogo0 += `${emptym.length / (Math.max(8, dicelogo0.length))}`;
         break;
      }
      while (emptym.startsWith(`${greenarrowup1}`)) {
         greenarrowup1 = emptym == String.fromCharCode(111,0);
         break;
      }
          let iconwatchnowk = 5.0;
          let predictionarrowY = 3.0;
          let bellv = 5.0;
         emptym += `${emptym.length}`;
         iconwatchnowk *= parseInt(`${bellv}`);
         predictionarrowY += parseInt(`${predictionarrowY}`) ^ parseInt(`${bellv}`);
      if (greenarrowup1 && emptym.length < 5) {
         emptym = `${((greenarrowup1 ? 4 : 1) | 3)}`;
      }
         greenarrowup1 = dicelogo0.length == 84;
         dicelogo0 = `${dicelogo0.length << (Math.min(emptym.length, 5))}`;
      imagesj /= Math.max(emptym.length, 5);
      if (fullscreenminS) {
         break;
      }
   } while ((5.35 >= (5.42 * imagesj)) && fullscreenminS);
      return;
    } finally {

   let eventO = 9555486 <= volume8.length;
   do {
      volume8.push(2);
      if (eventO) {
         break;
      }
   } while (((volume8.length | 2) > 3 && 2 > (volume8.length | libavformath.length)) && eventO);
      setSubmitting(false);

   if (imagesj <= 1.27) {
      imagesj *= 2 >> (Math.min(3, libavformath.length));
   }
    }

    const resultData = userInfo.data;

      znewinterstitialy -= parseFloat(`${volume8.length}`);

    const user = wawaLibglog.fromJson(resultData);

      znewinterstitialy += parseFloat(`${infoH.size}`);

    await dispatch(addUserAuthState(user));

      libavformath = [3 * detailA];

    if (userInfo.message.includes("注册成功")) {

   while (3 <= (libavformath.length - parseInt(`${znewinterstitialy}`)) && (parseFloat(`${libavformath.length}`) - znewinterstitialy) <= 4.82) {
       let reddownarrowi = String.fromCharCode(108,95,57,51,95,115,121,110,99,112,111,105,110,116,0);
       let unselectedz: Map<any, any> = new Map([[String.fromCharCode(102,109,97,100,100,95,51,95,49,0),String.fromCharCode(97,95,54,95,105,102,111,114,109,97,116,0)], [String.fromCharCode(115,95,49,51,95,122,112,98,105,113,117,97,100,115,0),String.fromCharCode(122,95,49,49,95,99,111,109,112,97,114,97,116,111,114,0)]]);
       let storea = String.fromCharCode(97,101,118,97,108,95,97,95,51,52,0);
       let verticalR = 2.0;
       let textlayoutmanager3 = String.fromCharCode(111,100,100,97,118,103,95,113,95,55,56,0);
       let footballfield0 = 3.0;
       let alertu = 2.0;
      let goallogoY = 6844056.0 >= alertu;
      do {
          let iconpipshrinkZ = String.fromCharCode(97,112,112,115,102,108,121,101,114,95,97,95,53,52,0);
          let quest_ = String.fromCharCode(122,95,49,52,0);
          let clubf: Map<any, any> = new Map([[String.fromCharCode(109,95,57,48,95,110,97,110,111,115,0),780], [String.fromCharCode(109,95,56,51,95,99,111,112,121,98,97,99,107,0),486]]);
          let videobufferloadingz = String.fromCharCode(112,105,110,95,104,95,54,54,0);
         alertu /= Math.max(quest_.length, 5);
         iconpipshrinkZ += "2";
         quest_ += `${videobufferloadingz.length / (Math.max(2, 1))}`;
         clubf = new Map([[iconpipshrinkZ, iconpipshrinkZ.length]]);
         videobufferloadingz += `${(iconpipshrinkZ == String.fromCharCode(101,0) ? clubf.size : iconpipshrinkZ.length)}`;
         if (goallogoY) {
            break;
         }
      } while (goallogoY && ((reddownarrowi.length - 2) == 3));
          let dependenciesX = String.fromCharCode(115,111,110,111,95,48,95,51,49,0);
          let halffieldimageQ: Array<any> = [228, 952];
         verticalR /= Math.max(2, parseFloat(`${dependenciesX.length}`));
         dependenciesX = `${halffieldimageQ.length * 2}`;
         halffieldimageQ.push(2);
      if (storea.endsWith(`${verticalR}`)) {
          let minimizeX = String.fromCharCode(99,97,108,108,105,115,116,111,95,112,95,52,49,0);
          let libimagepipelinex = String.fromCharCode(97,100,111,112,116,101,100,95,99,95,53,57,0);
         storea = "3";
         minimizeX = `${libimagepipelinex.length << (Math.min(Math.abs(2), 4))}`;
         libimagepipelinex = `${libimagepipelinex.length >> (Math.min(1, minimizeX.length))}`;
      }
          let phones = 2.0;
         reddownarrowi += `${(storea == String.fromCharCode(107,0) ? parseInt(`${alertu}`) : storea.length)}`;
         phones /= Math.max(4, parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${phones}`)), 3))}`));
      if (4.38 == (parseFloat(`${textlayoutmanager3.length}`) - verticalR) || 5 == (textlayoutmanager3.length - parseInt(`${verticalR}`))) {
         verticalR += (parseFloat(`${textlayoutmanager3 == String.fromCharCode(69,0) ? textlayoutmanager3.length : parseInt(`${footballfield0}`)}`));
      }
         verticalR += parseFloat(`${parseInt(`${footballfield0}`) / (Math.max(reddownarrowi.length, 5))}`);
       let vignetteT = 1.0;
      if (reddownarrowi.length <= textlayoutmanager3.length) {
          let playercommonW = 0;
          let typingloadingw = String.fromCharCode(105,95,53,55,95,105,112,109,111,118,105,101,0);
          let scoree = String.fromCharCode(107,95,52,50,95,115,101,99,111,110,100,0);
         reddownarrowi += `${(reddownarrowi == String.fromCharCode(57,0) ? typingloadingw.length : reddownarrowi.length)}`;
         playercommonW += scoree.length % (Math.max(1, 8));
         typingloadingw += `${scoree.length}`;
      }
      if ((parseInt(`${vignetteT}`) - 5) <= 4 && (reddownarrowi.length * 5) <= 3) {
         reddownarrowi = `${(textlayoutmanager3 == String.fromCharCode(83,0) ? textlayoutmanager3.length : unselectedz.size)}`;
      }
       let libswresample0 = 0;
         verticalR *= parseFloat(`${3}`);
      for (let m = 0; m < 1; m++) {
         footballfield0 *= 3 & parseInt(`${footballfield0}`);
      }
       let penaltyshootnogoalF = String.fromCharCode(118,112,105,116,120,102,109,95,122,95,51,57,0);
       let macauv = String.fromCharCode(115,116,114,111,107,101,95,57,95,55,49,0);
         textlayoutmanager3 += `${storea.length}`;
      libavformath = [detailA];
      break;
   }
      navigation.navigate('SetUsername');

    } else if (userInfo.message.includes("登录成功")) {

   let taiwanS = 6638581.0 <= znewinterstitialy;
   do {
      znewinterstitialy += parseFloat(`${3 >> (Math.min(1, libavformath.length))}`);
      if (taiwanS) {
         break;
      }
   } while (taiwanS && (3 > (parseInt(`${znewinterstitialy}`) / (Math.max(volume8.length, 7)))));

      if (user.isVip()) {

   for (let h = 0; h < 2; h++) {
      volume8.push(parseInt(`${imagesj}`) + controlN.size);
   }
        await AsyncStorage.setItem("showAds", "false");
      } else {

      controlN = new Map([[`${controlN.size}`, 3]]);
        await AsyncStorage.setItem("showAds", "true");
      }

      await dispatch(changeScreenAction('登录成功'));

   if (2 <= libavformath.length) {
       let halffieldimageY = 5;
          let mutedy = false;
         halffieldimageY %= Math.max(1, 4);
         mutedy = (mutedy ? mutedy : !mutedy);
      for (let a = 0; a < 2; a++) {
          let castingW = 2.0;
          let trophyO = 0.0;
          let yingj = String.fromCharCode(109,100,99,116,95,105,95,49,48,48,0);
         halffieldimageY *= halffieldimageY;
         castingW -= (yingj == String.fromCharCode(118,0) ? parseInt(`${trophyO}`) : yingj.length);
         trophyO *= parseFloat(`${parseInt(`${castingW}`)}`);
      }
          let componentl = 0.0;
          let downloadern = 3;
         halffieldimageY %= Math.max(4, parseInt(`${componentl}`) + 3);
         componentl /= Math.max(downloadern, 2);
      volume8.push(parseInt(`${imagesj}`) | halffieldimageY);
   }

      

   if (volume8.includes(imagesj)) {
      imagesj -= volume8.length;
   }
      wawa_dacccfaabfbcbadeebddcabacdffdbc_video.userCenterLoginSuccessTimesAnalytics();
      wawaSina.userCenterLoginSuccessTimesAnalytics();

      if (user.isVip()) {
        wawa_dacccfaabfbcbadeebddcabacdffdbc_video.userCenterVipLoginSuccessTimesAnalytics();
      }
      

      if (onGooleLoginSuccess) onGooleLoginSuccess();
    }
  }

  const onPressTermNCondition = () => {
       let securityS = 2.0;
    let policyH = String.fromCharCode(100,101,114,101,103,105,115,116,101,114,95,51,95,55,55,0);
    let reminderk = false;
    let mountingE = String.fromCharCode(98,95,57,56,95,112,114,111,109,112,101,103,0);
    let closeU = 0;
    let leakcheckerQ = String.fromCharCode(115,101,116,116,105,110,103,115,95,114,95,54,50,0);
    let halfy = String.fromCharCode(105,110,116,101,114,108,97,99,101,100,95,117,95,49,49,0);
    let forwards: Map<any, any> = new Map([[String.fromCharCode(101,95,52,57,95,104,113,120,100,115,112,0),51], [String.fromCharCode(110,95,50,48,95,102,101,111,102,0),734], [String.fromCharCode(115,111,114,101,99,101,105,118,101,95,52,95,56,48,0),964]]);
    let logousera: Map<any, any> = new Map([[String.fromCharCode(114,101,97,115,111,110,95,56,95,52,55,0),String.fromCharCode(108,95,54,51,95,105,110,108,105,110,101,0)], [String.fromCharCode(118,95,55,48,95,120,112,111,115,117,114,101,0),String.fromCharCode(120,95,49,52,95,115,121,115,105,110,102,111,0)], [String.fromCharCode(114,101,113,117,105,114,101,115,95,117,95,54,50,0),String.fromCharCode(100,95,52,95,100,114,111,112,115,0)]]);
    let themeV = String.fromCharCode(114,95,57,56,95,109,101,100,105,97,115,0);
    let questd: Array<any> = [String.fromCharCode(110,95,52,54,95,114,103,98,105,0), String.fromCharCode(112,114,111,99,101,101,100,95,120,95,52,55,0), String.fromCharCode(100,105,102,102,105,110,103,95,54,95,50,54,0)];
      reminderk = 22.79 == securityS;
   if (reminderk || 3 >= halfy.length) {
      reminderk = (leakcheckerQ.length << (Math.min(halfy.length, 4))) >= 95;
   }
      halfy += `${forwards.size % (Math.max(halfy.length, 4))}`;
   let currentG = 7276441 <= leakcheckerQ.length;
   do {
      leakcheckerQ = `${forwards.size}`;
      if (currentG) {
         break;
      }
   } while (((leakcheckerQ.length & 5) >= 4 && (5 & leakcheckerQ.length) >= 2) && currentG);
       let floatingp: Array<any> = [795, 150, 958];
       let bridge8 = String.fromCharCode(105,95,50,56,95,116,104,114,111,116,116,108,101,0);
       let downarrowF = 0;
      if (1 <= (3 << (Math.min(2, bridge8.length))) && 5 <= (floatingp.length << (Math.min(Math.abs(3), 2)))) {
         bridge8 += `${floatingp.length * 3}`;
      }
      for (let y = 0; y < 2; y++) {
         bridge8 = `${downarrowF}`;
      }
      let iconcalendarK = floatingp.length >= 9026763;
      do {
         floatingp = [floatingp.length % 3];
         if (iconcalendarK) {
            break;
         }
      } while ((3 == (downarrowF / 4) && (downarrowF / (Math.max(floatingp.length, 2))) == 4) && iconcalendarK);
          let singaporeg = 0.0;
         downarrowF <<= Math.min(4, Math.abs(3 / (Math.max(10, bridge8.length))));
         singaporeg += parseFloat(`${parseInt(`${singaporeg}`)}`);
      for (let w = 0; w < 3; w++) {
         bridge8 += `${bridge8.length - 1}`;
      }
      while (1 >= (bridge8.length * floatingp.length) && 4 >= (1 * floatingp.length)) {
          let orientationv = 4.0;
          let fillP = false;
          let eyeclosew = 5;
          let libsgcoreL: Map<any, any> = new Map([[String.fromCharCode(116,114,105,109,109,101,100,95,109,95,55,51,0),760], [String.fromCharCode(110,95,53,53,95,98,111,117,110,100,105,110,103,0),374]]);
         bridge8 = `${(String.fromCharCode(68,0) == bridge8 ? (fillP ? 2 : 5) : bridge8.length)}`;
         orientationv /= Math.max(parseFloat(`${3 << (Math.min(2, Math.abs(libsgcoreL.size)))}`), 5);
         fillP = 39 == libsgcoreL.size;
         eyeclosew >>= Math.min(Math.abs(parseInt(`${orientationv}`)), 3);
         break;
      }
          let logoutt = true;
         floatingp = [downarrowF];
         logoutt = !logoutt;
      for (let d = 0; d < 3; d++) {
         bridge8 += "3";
      }
          let giftbutton1 = 4.0;
         downarrowF %= Math.max(floatingp.length, 3);
         giftbutton1 += parseFloat(`${2 & parseInt(`${giftbutton1}`)}`);
      leakcheckerQ += `${bridge8.length - halfy.length}`;
   for (let n = 0; n < 1; n++) {
       let awayiconS = String.fromCharCode(98,95,53,49,0);
      while (awayiconS == awayiconS) {
         awayiconS += `${awayiconS.length / (Math.max(awayiconS.length, 1))}`;
         break;
      }
          let zhuboF: Map<any, any> = new Map([[String.fromCharCode(114,101,105,110,115,101,114,116,95,107,95,49,56,0),String.fromCharCode(118,97,114,119,105,100,116,104,95,115,95,51,54,0)], [String.fromCharCode(98,95,56,48,95,109,118,112,114,111,98,115,0),String.fromCharCode(108,97,116,105,110,95,52,95,57,51,0)]]);
         awayiconS = `${zhuboF.size % 1}`;
      if (3 <= awayiconS.length) {
         awayiconS = `${(awayiconS == String.fromCharCode(76,0) ? awayiconS.length : awayiconS.length)}`;
      }
      halfy += `${((reminderk ? 5 : 1))}`;
   }
   let privilegeH = 5191414.0 >= securityS;
   do {
      securityS += mountingE.length;
      if (privilegeH) {
         break;
      }
   } while ((5 >= (halfy.length + parseInt(`${securityS}`))) && privilegeH);
   while ((policyH.length >> (Math.min(5, Math.abs(closeU)))) > 5 && (closeU >> (Math.min(Math.abs(5), 3))) > 3) {
      policyH = "2";
      break;
   }
      halfy = `${mountingE.length / (Math.max(leakcheckerQ.length, 9))}`;
   if (5 == (parseInt(`${securityS}`) * 4) && (parseInt(`${securityS}`) * policyH.length) == 4) {
       let bell5 = 5.0;
       let gifgoalF = 5.0;
       let unfillF = String.fromCharCode(99,95,48,95,116,105,100,121,0);
       let whiteK = String.fromCharCode(99,111,109,112,108,101,109,101,110,116,95,99,95,56,55,0);
      let kuaishoup = whiteK == String.fromCharCode(115,105,102,56,56,110,102,98,0);
      do {
         whiteK = `${parseInt(`${gifgoalF}`) & 1}`;
         if (kuaishoup) {
            break;
         }
      } while ((3 < whiteK.length) && kuaishoup);
       let fillX = String.fromCharCode(113,95,56,49,95,97,117,114,97,0);
      let plashZ = gifgoalF >= 5329613.0;
      do {
         gifgoalF += parseFloat(`${unfillF.length - parseInt(`${gifgoalF}`)}`);
         if (plashZ) {
            break;
         }
      } while ((unfillF.length <= parseInt(`${gifgoalF}`)) && plashZ);
          let binddatasS = String.fromCharCode(106,95,51,48,95,100,98,115,105,122,101,0);
          let iconplayE = 4.0;
         bell5 -= (parseFloat(`${String.fromCharCode(102,0) == fillX ? parseInt(`${iconplayE}`) : fillX.length}`));
         binddatasS = `${1 & binddatasS.length}`;
         iconplayE -= parseFloat(`${binddatasS.length & 2}`);
          let matchH = String.fromCharCode(98,108,97,99,107,115,95,117,95,53,55,0);
          let chinag: Map<any, any> = new Map([[String.fromCharCode(103,95,51,49,95,114,101,115,111,108,118,101,114,115,0),String.fromCharCode(109,95,50,52,95,114,116,109,100,0)], [String.fromCharCode(112,114,101,116,101,110,100,95,120,95,57,53,0),String.fromCharCode(119,95,51,51,0)]]);
         whiteK = `${parseInt(`${bell5}`) << (Math.min(matchH.length, 5))}`;
         matchH = "2";
         chinag = new Map([[`${chinag.size}`, chinag.size << (Math.min(Math.abs(3), 4))]]);
         unfillF = `${(String.fromCharCode(50,0) == whiteK ? parseInt(`${gifgoalF}`) : whiteK.length)}`;
       let downF = String.fromCharCode(106,95,56,49,95,97,116,114,97,99,0);
       let videojsj = String.fromCharCode(109,98,97,102,102,95,107,95,49,54,0);
       let dicelogoP = String.fromCharCode(122,95,52,50,95,113,112,101,108,100,115,112,0);
       let sentryu = String.fromCharCode(112,111,108,105,99,101,95,119,95,57,52,0);
         gifgoalF *= parseFloat(`${parseInt(`${bell5}`)}`);
         dicelogoP += `${dicelogoP.length}`;
          let middlebrightnessd = String.fromCharCode(105,110,105,116,105,97,116,101,100,95,110,95,51,51,0);
          let arrowselectdownL = 2.0;
         sentryu += "2";
         middlebrightnessd = `${3 << (Math.min(2, middlebrightnessd.length))}`;
         arrowselectdownL -= parseFloat(`${middlebrightnessd.length | parseInt(`${arrowselectdownL}`)}`);
          let downarrow8 = String.fromCharCode(101,120,105,115,116,105,110,103,95,98,95,56,0);
         bell5 += parseFloat(`${videojsj.length + parseInt(`${bell5}`)}`);
         downarrow8 += `${downarrow8.length << (Math.min(downarrow8.length, 1))}`;
      securityS += 3;
   }
      policyH = "2";
   let libhermesW = 9093062 <= forwards.size;
   do {
       let injuryX = 4.0;
         injuryX += parseFloat(`${parseInt(`${injuryX}`) & parseInt(`${injuryX}`)}`);
      let filledl = 7458724.0 >= injuryX;
      do {
         injuryX -= parseFloat(`${parseInt(`${injuryX}`)}`);
         if (filledl) {
            break;
         }
      } while ((1.13 < (4.78 + injuryX) || 4.78 < (injuryX + injuryX)) && filledl);
      for (let r = 0; r < 2; r++) {
         injuryX /= Math.max(parseFloat(`${parseInt(`${injuryX}`) & parseInt(`${injuryX}`)}`), 4);
      }
      forwards = new Map([[`${questd.length}`, leakcheckerQ.length * questd.length]]);
      if (libhermesW) {
         break;
      }
   } while (libhermesW && (Array.from(forwards.keys()).includes(`${logousera.size}`)));
   for (let r = 0; r < 3; r++) {
      leakcheckerQ = `${themeV.length % (Math.max(4, mountingE.length))}`;
   }
       let whiteanimationliveq = 5.0;
       let hookse = false;
      let iconsubssuccessr = hookse ? !hookse : hookse;
      do {
         hookse = whiteanimationliveq < 82.84;
         if (iconsubssuccessr) {
            break;
         }
      } while ((5.11 > whiteanimationliveq) && iconsubssuccessr);
         hookse = 49.56 < whiteanimationliveq;
      for (let n = 0; n < 2; n++) {
         hookse = !hookse;
      }
         whiteanimationliveq -= (parseInt(`${whiteanimationliveq}`) & (hookse ? 4 : 1));
         hookse = 38.31 >= whiteanimationliveq;
          let floaterp = String.fromCharCode(116,95,49,54,95,105,110,115,101,114,116,115,0);
          let bgvipxvod7 = String.fromCharCode(115,111,102,116,119,97,114,101,95,105,95,57,50,0);
          let penaltyshootO = String.fromCharCode(114,95,57,95,115,101,101,107,104,101,97,100,0);
         hookse = hookse || floaterp.length <= 95;
         floaterp = "1";
         bgvipxvod7 += `${bgvipxvod7.length + penaltyshootO.length}`;
         penaltyshootO = `${penaltyshootO.length - 2}`;
      forwards = new Map([[`${logousera.size}`, logousera.size / 2]]);
   if (5 < (3 & logousera.size) || (logousera.size & 3) < 1) {
      logousera = new Map([[themeV, themeV.length + leakcheckerQ.length]]);
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
       let lnewinterstitialp = false;
    let signinupx = 0.0;
    let smallbrightnessP = false;
    let trash0 = String.fromCharCode(113,95,57,48,95,97,114,112,101,100,0);
    let zhubo6: Map<any, any> = new Map([[String.fromCharCode(97,95,57,95,112,114,111,99,101,115,115,111,114,0),String.fromCharCode(122,95,54,50,95,115,99,99,111,110,102,105,103,0)], [String.fromCharCode(121,95,51,50,95,117,115,101,100,0),String.fromCharCode(118,99,97,99,100,97,116,97,95,103,95,57,51,0)], [String.fromCharCode(114,95,51,55,95,113,116,97,98,108,101,0),String.fromCharCode(111,95,49,50,95,98,105,116,115,116,114,101,97,109,0)]]);
    let penaltygoalV = 1.0;
    let championg = String.fromCharCode(118,100,112,97,117,95,109,95,49,49,0);
    let reducer8 = String.fromCharCode(100,111,117,98,108,101,115,95,107,95,53,52,0);
    let dangerP = 4.0;
    let securityQ = String.fromCharCode(102,95,53,95,99,111,110,115,111,110,97,110,116,0);
   while (1 > (zhubo6.size >> (Math.min(Math.abs(5), 5)))) {
      zhubo6.set(`${penaltygoalV}`, zhubo6.size + 3);
      break;
   }

    if (isSubmitting) return;

   while (reducer8.endsWith(`${championg.length}`)) {
      championg += `${parseInt(`${dangerP}`) & 3}`;
      break;
   }

    if (isReadTermNCondition == false) {

       let nbatrophyJ = 3;
         nbatrophyJ ^= nbatrophyJ;
          let iconmegaphoneP = String.fromCharCode(99,104,111,111,115,101,114,95,120,95,56,57,0);
          let playercommonM = String.fromCharCode(118,101,114,105,102,121,105,110,103,95,118,95,53,56,0);
         nbatrophyJ *= playercommonM.length;
         iconmegaphoneP += `${iconmegaphoneP.length - 2}`;
         playercommonM += "3";
      while ((nbatrophyJ % (Math.max(nbatrophyJ, 3))) == 1) {
          let knewarchdefaultsa = String.fromCharCode(107,95,55,57,95,101,110,99,114,121,112,116,0);
          let str2: Array<any> = [913, 54, 100];
         nbatrophyJ >>= Math.min(Math.abs(str2.length / (Math.max(3, nbatrophyJ))), 4);
         knewarchdefaultsa += `${knewarchdefaultsa.length}`;
         str2.push(knewarchdefaultsa.length);
         break;
      }
      championg = `${parseInt(`${penaltygoalV}`)}`;
      return;

       let iconscheduleX = 4.0;
      while ((3.29 + iconscheduleX) > 3.83) {
          let arrowselectdownJ = String.fromCharCode(112,108,97,110,97,114,120,95,52,95,51,51,0);
          let fast_ = String.fromCharCode(112,114,111,104,105,98,105,116,95,52,95,57,55,0);
         iconscheduleX += parseFloat(`${parseInt(`${iconscheduleX}`) << (Math.min(Math.abs(2), 2))}`);
         arrowselectdownJ += "1";
         fast_ += `${fast_.length}`;
         break;
      }
      while (5.96 <= (1 + iconscheduleX)) {
         iconscheduleX *= parseFloat(`${2}`);
         break;
      }
         iconscheduleX += parseFloat(`${3 + parseInt(`${iconscheduleX}`)}`);
      reducer8 += `${zhubo6.size % (Math.max(trash0.length, 6))}`;
    }

    const formattedLoginValue = loginType === 'phone' ? loginValue.replace(/\s/g, '') : loginValue;

    

      penaltygoalV += reducer8.length;
    

      championg = `${parseInt(`${penaltygoalV}`) >> (Math.min(3, Math.abs(3)))}`;
    

      lnewinterstitialp = penaltygoalV < 94.11;
    

       let basketballtrophy6: Map<any, any> = new Map([[String.fromCharCode(99,117,116,95,122,95,49,0),614], [String.fromCharCode(110,105,100,99,98,98,95,101,95,51,55,0),115]]);
       let modeD = true;
      let unfillf = 7895681 >= basketballtrophy6.size;
      do {
         basketballtrophy6.set(`${modeD}`, basketballtrophy6.size);
         if (unfillf) {
            break;
         }
      } while ((1 > basketballtrophy6.size) && unfillf);
      while ((basketballtrophy6.size * 2) < 5 && !modeD) {
          let china_ = 3;
          let bangj = String.fromCharCode(100,95,50,56,95,101,112,104,101,109,101,114,97,108,0);
          let actionQ: Map<any, any> = new Map([[String.fromCharCode(103,108,121,112,104,95,105,95,54,55,0),638], [String.fromCharCode(99,104,101,99,107,108,105,110,101,95,121,95,51,48,0),103], [String.fromCharCode(109,99,111,114,101,95,98,95,57,49,0),625]]);
         basketballtrophy6.set(`${modeD}`, (actionQ.size + (modeD ? 4 : 5)));
         china_ *= 2;
         bangj += `${(String.fromCharCode(110,0) == bangj ? bangj.length : china_)}`;
         actionQ.set(bangj, china_);
         break;
      }
      zhubo6 = new Map([[`${zhubo6.size}`, parseInt(`${penaltygoalV}`) * 2]]);

    if (formattedLoginValue === "" || loginValueErrMsg !== null) {
      setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
      return;
    }

    try {

      signinupx += (parseFloat(`${(lnewinterstitialp ? 4 : 4) + trash0.length}`));
      setSubmitting(true);

   for (let t = 0; t < 2; t++) {
      zhubo6.set(championg, championg.length);
   }
      await wawaEvent.signinupUser({
        loginType: loginType === 'email' ? 'EMAIL' : 'SMS',
        email: loginType === 'email' ? loginValue : undefined,
        
        phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + formattedLoginValue : undefined,
        countryId: loginType === 'phone' ? countryPhoneSelected?.country_id : undefined,
        referralCode: referralCode,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      if (!err?.message.includes('验证码已发送')) {

   for (let d = 0; d < 2; d++) {
      dangerP -= 2;
   }
        setSubmitting(false);

       let rulesZ = String.fromCharCode(107,95,54,53,95,118,98,112,114,105,110,116,102,0);
       let canvasd = 0;
      if ((canvasd << (Math.min(Math.abs(2), 5))) == 3 || 5 == (canvasd << (Math.min(Math.abs(2), 2)))) {
          let redscoreballT = String.fromCharCode(99,111,102,97,99,116,111,114,95,108,95,51,55,0);
          let iconnointernetw = String.fromCharCode(115,99,97,108,101,102,97,99,116,111,114,115,95,103,95,57,50,0);
          let subin3 = true;
          let yellowf: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,105,98,117,116,105,111,110,95,102,95,53,55,0),929], [String.fromCharCode(106,95,53,95,115,119,97,112,0),688]]);
          let iconlogoutG = 0.0;
         rulesZ += `${((subin3 ? 5 : 1) / 3)}`;
         redscoreballT = `${iconnointernetw.length}`;
         iconnointernetw += `${iconnointernetw.length}`;
         subin3 = iconnointernetw.length >= 41;
         yellowf = new Map([[`${yellowf.size}`, yellowf.size]]);
         iconlogoutG += yellowf.size;
      }
      let bggradientg = canvasd <= 9104354;
      do {
         canvasd /= Math.max(4, canvasd * rulesZ.length);
         if (bggradientg) {
            break;
         }
      } while (bggradientg && (canvasd < rulesZ.length));
         rulesZ = `${3 + canvasd}`;
      while (rulesZ.includes(`${canvasd}`)) {
          let iconpipexpandV = 5.0;
         canvasd <<= Math.min(Math.abs(canvasd ^ parseInt(`${iconpipexpandV}`)), 1);
         break;
      }
      if (1 > (rulesZ.length | 5) || 1 > (rulesZ.length | 5)) {
         canvasd |= rulesZ.length ^ 2;
      }
      for (let r = 0; r < 1; r++) {
         canvasd %= Math.max(4, canvasd);
      }
      penaltygoalV /= Math.max((championg == String.fromCharCode(85,0) ? (smallbrightnessP ? 4 : 5) : championg.length), 1);
        setLoginValueErrMsg(err.message);

   let brightnessb = reducer8.length >= 7346589;
   do {
      reducer8 = `${parseInt(`${signinupx}`) & 3}`;
      if (brightnessb) {
         break;
      }
   } while (brightnessb && (3 == (reducer8.length << (Math.min(Math.abs(4), 3))) || 4 == (4 * reducer8.length)));
        return;
      }
    }

    setSubmitting(false);

      trash0 += `${parseInt(`${signinupx}`)}`;

    dispatch(hideBottomSheetAction());

       let arrowrightwithtailw = String.fromCharCode(104,95,49,56,95,98,111,117,110,100,97,114,121,0);
      if (arrowrightwithtailw != String.fromCharCode(98,0)) {
         arrowrightwithtailw += `${arrowrightwithtailw.length << (Math.min(4, arrowrightwithtailw.length))}`;
      }
       let regengS = 1;
       let robotov = 0;
      for (let i = 0; i < 3; i++) {
         regengS -= 2 & regengS;
      }
      smallbrightnessP = zhubo6.size < 78 || smallbrightnessP;
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

type wawaRound = {
  loginType: 'email' | 'phone',
  loginValue: string,
  referralCode: string,
  loginValueErrMsg: string | null,
  referralCodeErrMsg: string | null,
  isReadTermNCondition: boolean,
  countryPhoneSelected?: wawaReactnavigation,
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
}: wawaRound) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles({ colors }), []);

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
          <TickedIcon
            style={styles.iconStyle}
            width={18}
            height={18}
            color={IS_OTHER_SKIN ? colors.success : colors.primary}
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
                source={require("@static/images/profile/libavfilterDicelogo.png")}
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
              source={require("@static/images/invite/volumeOrangeclock.png")}
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
                source={require("@static/images/profile/libavfilterDicelogo.png")}
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
              source={require("@static/images/invite/volumeOrangeclock.png")}
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
            color: loginValue === "" || !isReadTermNCondition ? "white" : colors.primaryContrast,
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

const createStyles = ({ colors }: any) => StyleSheet.create({
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
