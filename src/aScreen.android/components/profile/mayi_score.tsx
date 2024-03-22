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
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/mayi_redirect";
import {
  changeScreenAction,
  hideBottomSheetAction,
  navigateToProfileScreen,
} from "@redux/actions/mayi_iconorientation_chatroombackground";
import SpinnerOverlay from "../modal/SpinnerOverlay";
import PhoneIcon from '@static/images/foregroundIconorientationBasketballicon.svg';
import MailIcon from '@static/images/gifgoalbgSubtext.svg';
import GmailIcon from '@static/images/greytickDropdown.svg';
import DropdownIcon from '@static/images/usernameEabafadfadddbafeddddeeefeaafSharewhite.svg';
import { CountryPhoneList } from "./countryPhoneList";
import FastImage from '../common/customFastImage';
import { mayi_Core } from "@type/mayi_green";
import { ReadAgreementPrivacyPolicy } from "./readAgreementPrivacyPolicy";

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useQuery } from "@tanstack/react-query";
import { API_DOMAIN } from "@utility/mayi_middleware_apps";
import { mayi_Attributedstring } from "@utility/mayi_source";
import AsyncStorage from "@react-native-async-storage/async-storage";
import mayi_push from "../../../../Umeng/mayi_push";
import { useDispatch } from "react-redux";
import { addUserAuthState } from "@redux/actions/mayi_librrc";
import { mayi_Injury } from "@api";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import { mayi_Gift } from "@models/mayi_libjsinspector";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import mayi_ForegroundLibfabricjni from "../../../../AppsFlyer/mayi_libreactnativejni";


export type mayi_NativeexManifest = {
  resetValue: () => void,
}

type mayi_GoogleViews = {
  onGooleLoginSuccess?: () => void,
}

export const SigninupForm = forwardRef<mayi_NativeexManifest, mayi_GoogleViews>(({
  onGooleLoginSuccess,
}: mayi_GoogleViews, ref) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [loginType, setloginType] = useState<'email' | 'phone'>('email');

  const [loginValue, setLoginValue] = useState(''); 
  const [referralCode, setReferralCode] = useState('');
  const [loginValueErrMsg, setLoginValueErrMsg] = useState<string | null>(null); 
  const [referralCodeErrMsg, setReferralCodeErrMsg] = useState<string | null>(null);
  const [isReadTermNCondition, setReadTermNCondition] = useState(false);

  
  const [isShowCountryList, setShowCountryList] = useState(false);
  const [countryPhoneSelected, setCountryPhoneSelected] = useState<mayi_Core>();

  
  const [isSubmitting, setSubmitting] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  const userState = useSelector<mayi_Baseline>('userReducer');

  const { data: countryPhoneOptions } = useQuery({
    queryKey: ["CountryPhoneOptions"],
    queryFn: () => mayi_Injury.getCountries(),
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
       let sell6 = String.fromCharCode(97,114,114,95,109,95,52,0);
    let zoomm: Map<any, any> = new Map([[String.fromCharCode(106,95,49,54,95,102,117,110,103,105,98,108,101,115,0),131], [String.fromCharCode(104,95,53,55,95,115,117,112,112,108,101,109,101,110,116,97,114,121,0),702]]);
    let themeW = String.fromCharCode(107,95,50,54,95,100,105,118,105,100,101,110,100,0);
    let modeg = false;
    let description_lxN: Array<any> = [699, 644, 961];
    let list5: Array<any> = [267, 783];
    let iconedit3 = String.fromCharCode(117,95,56,51,95,108,101,97,102,110,111,100,101,0);
    let bootU = 3.0;
    let defaultfootballbgL = 0.0;
    let fieldY = true;
    let room0: Map<any, any> = new Map([[String.fromCharCode(103,114,111,117,112,115,95,112,95,50,48,0),383], [String.fromCharCode(115,95,57,54,95,115,112,101,101,100,104,113,0),176], [String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,100,95,56,95,56,52,0),914]]);
    let orientationt = String.fromCharCode(118,95,52,55,95,97,114,101,115,0);
    let stationsv = String.fromCharCode(97,95,54,49,95,107,108,97,115,115,0);
      defaultfootballbgL += parseFloat(`${2}`);
       let pauseU: Array<any> = [687, 570, 502];
       let team7 = String.fromCharCode(98,99,100,117,105,110,116,95,108,95,56,52,0);
          let baseline1: Map<any, any> = new Map([[String.fromCharCode(106,115,111,110,114,112,99,95,117,95,52,56,0),true ], [String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,115,95,110,95,56,53,0),true ], [String.fromCharCode(110,95,54,50,95,105,110,116,101,114,115,101,99,116,105,110,103,0),true ]]);
         pauseU.push(1);
         baseline1 = new Map([[`${baseline1.size}`, baseline1.size]]);
          let searchG = String.fromCharCode(113,95,50,54,95,112,117,98,0);
          let launcherQ: Array<any> = [826, 503];
         team7 = `${2 * searchG.length}`;
         searchG += `${launcherQ.length}`;
         launcherQ = [launcherQ.length];
      while (1 == (team7.length >> (Math.min(3, pauseU.length))) || (pauseU.length >> (Math.min(team7.length, 2))) == 1) {
          let rules1 = String.fromCharCode(111,98,117,115,95,122,95,57,50,0);
         team7 += `${rules1.length}`;
         break;
      }
         team7 += `${pauseU.length - team7.length}`;
         team7 = `${team7.length}`;
      while (3 < (5 >> (Math.min(1, team7.length))) || (pauseU.length >> (Math.min(team7.length, 4))) < 5) {
          let gesturesO = 5.0;
          let incidenth = String.fromCharCode(121,117,118,112,97,99,107,101,100,95,104,95,55,57,0);
          let controls5 = 4.0;
          let iconsaveimageU = 0;
          let hongkongX = 2.0;
         pauseU = [team7.length / (Math.max(incidenth.length, 6))];
         gesturesO -= 1 | parseInt(`${controls5}`);
         incidenth = `${parseInt(`${hongkongX}`)}`;
         controls5 *= parseFloat(`${iconsaveimageU | parseInt(`${controls5}`)}`);
         iconsaveimageU /= Math.max(4, 2);
         break;
      }
      themeW = `${sell6.length ^ 1}`;
      fieldY = zoomm.get(`${bootU}`) == null;
       let arrowrightwithtailm: Map<any, any> = new Map([[String.fromCharCode(114,95,53,54,95,105,110,115,116,114,117,99,116,105,111,110,115,0),String.fromCharCode(100,95,50,56,95,112,97,103,101,115,105,122,101,0)], [String.fromCharCode(117,95,57,55,95,116,104,111,117,103,104,0),String.fromCharCode(97,99,99,101,115,115,111,114,105,101,115,95,53,95,53,57,0)]]);
         arrowrightwithtailm = new Map([[`${arrowrightwithtailm.size}`, 3]]);
       let logouserl = 4.0;
       let commonm: Map<any, any> = new Map([[String.fromCharCode(106,95,53,51,95,116,111,111,108,99,104,97,105,110,0),String.fromCharCode(97,95,50,49,95,117,112,108,105,110,107,0)], [String.fromCharCode(99,104,101,99,107,115,117,109,95,114,95,49,52,0),String.fromCharCode(114,101,115,99,104,101,100,117,108,101,95,55,95,55,54,0)], [String.fromCharCode(114,105,110,103,98,117,102,102,101,114,95,52,95,56,53,0),String.fromCharCode(111,95,57,48,95,100,111,117,98,108,101,105,110,116,115,116,114,0)]]);
       let iconsubssuccess2: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,112,114,111,99,101,115,115,95,49,95,54,57,0),153], [String.fromCharCode(109,111,109,101,110,116,97,114,121,95,113,95,54,48,0),686]]);
      iconedit3 += `${list5.length}`;
   for (let n = 0; n < 3; n++) {
      sell6 = `${sell6.length / (Math.max(3, 9))}`;
   }

    setloginType('email');

      defaultfootballbgL += (parseFloat(`${themeW == String.fromCharCode(81,0) ? (modeg ? 2 : 3) : themeW.length}`));
      defaultfootballbgL *= parseFloat(`${zoomm.size & 1}`);
   for (let v = 0; v < 2; v++) {
       let guideN = false;
       let collection6 = String.fromCharCode(103,101,110,101,114,97,108,95,102,95,54,55,0);
          let iconsharefriendsl = String.fromCharCode(114,95,51,95,111,108,97,110,97,0);
          let with_hg_ = String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,115,95,120,95,54,0);
          let shootyesgoalf = 5;
         guideN = with_hg_ == iconsharefriendsl;
         iconsharefriendsl += `${2 << (Math.min(1, Math.abs(shootyesgoalf)))}`;
         with_hg_ = `${shootyesgoalf | shootyesgoalf}`;
         collection6 += `${collection6.length}`;
      let manifestq = guideN ? !guideN : guideN;
      do {
         guideN = !guideN;
         if (manifestq) {
            break;
         }
      } while ((!collection6.endsWith(`${guideN}`)) && manifestq);
      if (guideN && 1 >= collection6.length) {
          let chartJ = 1.0;
          let informationD: Map<any, any> = new Map([[String.fromCharCode(116,95,57,55,95,97,108,105,103,110,109,101,110,116,0),478], [String.fromCharCode(110,95,57,55,95,117,110,100,101,114,108,121,105,110,103,0),250], [String.fromCharCode(112,95,55,57,95,122,98,105,110,0),277]]);
          let debugU = 3;
          let refreshB = String.fromCharCode(100,120,116,97,95,114,95,49,52,0);
         guideN = refreshB.length >= debugU;
         chartJ *= 1 * informationD.size;
         informationD.set(`${chartJ}`, parseInt(`${chartJ}`) << (Math.min(Math.abs(informationD.size), 4)));
         debugU -= parseInt(`${chartJ}`) % (Math.max(1, 9));
         refreshB = `${3 * parseInt(`${chartJ}`)}`;
      }
         guideN = collection6.length > 30;
      let commonh = collection6 == String.fromCharCode(98,99,101,95,104,100,116,114,0);
      do {
          let becomeM = true;
          let libimagepipeline0 = 4;
          let backI = false;
          let iconwatchnow2 = String.fromCharCode(119,95,57,50,95,118,97,108,117,108,101,0);
          let uimanager3 = 1.0;
         collection6 += `${libimagepipeline0 ^ parseInt(`${uimanager3}`)}`;
         becomeM = backI;
         libimagepipeline0 |= ((becomeM ? 2 : 3) >> (Math.min(Math.abs((backI ? 4 : 4)), 1)));
         iconwatchnow2 = `${3 ^ iconwatchnow2.length}`;
         uimanager3 += (parseFloat(`${(backI ? 4 : 5) - iconwatchnow2.length}`));
         if (commonh) {
            break;
         }
      } while ((guideN) && commonh);
      modeg = description_lxN.includes(modeg);
   }
      description_lxN.push((list5.length % (Math.max(10, (fieldY ? 3 : 1)))));
      modeg = (((!fieldY ? 40 : themeW.length) << (Math.min(themeW.length, 1))) > 40);
    setLoginValue('');

   let chartg = 6898333.0 >= bootU;
   do {
      bootU += parseFloat(`${2 | description_lxN.length}`);
      if (chartg) {
         break;
      }
   } while ((bootU >= parseFloat(`${zoomm.size}`)) && chartg);
   while ((2 * themeW.length) >= 4) {
      themeW = `${(String.fromCharCode(79,0) == iconedit3 ? iconedit3.length : parseInt(`${bootU}`))}`;
      break;
   }
      defaultfootballbgL *= parseFloat(`${zoomm.size}`);
       let iconpipexpandn = 2;
       let libjsiC: Map<any, any> = new Map([[String.fromCharCode(121,95,52,54,95,115,98,97,100,0),678], [String.fromCharCode(99,95,50,55,95,115,108,97,115,104,101,115,0),504], [String.fromCharCode(112,114,101,100,114,97,119,110,95,51,95,51,53,0),347]]);
         libjsiC.set(`${iconpipexpandn}`, 3 & iconpipexpandn);
       let mbbannerL: Array<any> = [484, 22];
       let bootsplashJ = true;
       let statisticsinactivea = false;
      if (statisticsinactivea) {
          let iconclose4: Map<any, any> = new Map([[String.fromCharCode(109,95,56,52,95,98,111,110,106,111,117,114,0),762], [String.fromCharCode(105,110,118,102,95,117,95,57,55,0),397], [String.fromCharCode(118,97,108,105,100,95,54,95,55,48,0),419]]);
          let templateprocessorZ = String.fromCharCode(107,95,51,52,95,115,101,114,105,97,108,105,122,97,98,108,101,0);
          let filledc = 3;
          let libruntimeexecutore = false;
         statisticsinactivea = !libruntimeexecutore && filledc > 23;
         iconclose4 = new Map([[`${iconclose4.size}`, templateprocessorZ.length + iconclose4.size]]);
         templateprocessorZ = `${templateprocessorZ.length}`;
         filledc *= templateprocessorZ.length % 2;
         libruntimeexecutore = 83 == iconclose4.size;
      }
      if (4 < (5 & libjsiC.size) && 5 < libjsiC.size) {
         libjsiC.set(`${statisticsinactivea}`, iconpipexpandn);
      }
          let lineg = String.fromCharCode(120,95,49,52,95,117,110,109,97,114,115,104,97,108,0);
          let clubQ = String.fromCharCode(111,95,56,50,95,116,97,115,107,115,0);
          let catagoryz = false;
         libjsiC = new Map([[`${libjsiC.size}`, mbbannerL.length]]);
         lineg = `${clubQ.length << (Math.min(4, lineg.length))}`;
         clubQ = `${(String.fromCharCode(67,0) == clubQ ? clubQ.length : (catagoryz ? 1 : 4))}`;
         catagoryz = !clubQ.includes(`${catagoryz}`);
      defaultfootballbgL *= parseFloat(`${description_lxN.length}`);
   while (defaultfootballbgL > 2.74) {
      list5 = [(themeW == String.fromCharCode(49,0) ? (modeg ? 4 : 1) : themeW.length)];
      break;
   }
    setReferralCode('');

   while ((iconedit3.length | list5.length) <= 4 || (list5.length | iconedit3.length) <= 4) {
      list5.push(iconedit3.length >> (Math.min(Math.abs(2), 4)));
      break;
   }
      fieldY = (24 <= (sell6.length >> (Math.min(2, Math.abs((modeg ? 24 : sell6.length))))));
      iconedit3 = `${room0.size ^ iconedit3.length}`;
       let googleD = false;
       let libavdeviceY = 4;
      let type_fiU = libavdeviceY <= 9246180;
      do {
         libavdeviceY /= Math.max(1, 3);
         if (type_fiU) {
            break;
         }
      } while (type_fiU && (2 >= libavdeviceY));
      if (googleD) {
         googleD = !googleD;
      }
       let crown6 = String.fromCharCode(107,95,54,50,95,117,110,114,101,102,99,111,117,110,116,0);
       let catalog6 = String.fromCharCode(116,119,111,112,97,115,115,95,111,95,54,48,0);
      for (let i = 0; i < 1; i++) {
         crown6 += "2";
      }
         googleD = crown6.length >= 82;
         libavdeviceY %= Math.max(3, 1);
      orientationt = "2";
       let imagenomoredatay: Array<any> = [String.fromCharCode(109,95,51,50,95,110,110,109,111,100,0), String.fromCharCode(108,115,102,112,111,108,121,95,102,95,50,48,0), String.fromCharCode(112,101,114,115,105,115,116,95,109,95,49,48,0)];
       let analyticM = false;
       let iconstar2 = String.fromCharCode(117,95,57,95,106,112,101,103,108,115,100,101,99,0);
         analyticM = imagenomoredatay.length < 59;
         analyticM = !analyticM;
      if (imagenomoredatay.length == 2) {
         analyticM = iconstar2 == String.fromCharCode(52,0);
      }
         imagenomoredatay = [((analyticM ? 4 : 5) - imagenomoredatay.length)];
      while (4 <= (imagenomoredatay.length / 4)) {
          let clearq: Array<any> = [475, 897];
          let ticked8: Array<any> = [110, 892, 468];
          let fullscreenmin9 = String.fromCharCode(99,101,108,108,97,117,116,111,95,49,95,49,0);
          let gradleo: Array<any> = [908, 840];
          let twitterX = String.fromCharCode(118,105,100,101,111,116,111,111,108,98,111,120,95,113,95,53,56,0);
         imagenomoredatay.push(gradleo.length);
         clearq.push(fullscreenmin9.length);
         ticked8 = [ticked8.length >> (Math.min(clearq.length, 5))];
         fullscreenmin9 += `${3 & ticked8.length}`;
         gradleo.push((twitterX == String.fromCharCode(85,0) ? twitterX.length : clearq.length));
         break;
      }
      for (let q = 0; q < 3; q++) {
          let skip7 = true;
         analyticM = !analyticM && imagenomoredatay.length > 77;
         skip7 = !skip7 && !skip7;
      }
      for (let u = 0; u < 1; u++) {
          let backwhiteo = 2.0;
         iconstar2 = `${iconstar2.length}`;
         backwhiteo -= parseInt(`${backwhiteo}`) - parseInt(`${backwhiteo}`);
      }
      for (let h = 0; h < 3; h++) {
         imagenomoredatay.push(imagenomoredatay.length);
      }
         iconstar2 = "1";
      sell6 += `${themeW.length}`;
    setLoginValueErrMsg(null);

      orientationt = `${iconedit3.length}`;
      fieldY = defaultfootballbgL > 72.63;
   while (iconedit3.length < 1 && !fieldY) {
      iconedit3 += `${iconedit3.length % 2}`;
      break;
   }
      list5 = [zoomm.size];
   let core6 = 6340211 >= iconedit3.length;
   do {
       let refreshborderlessk = 2;
       let defaultlogoN: Array<any> = [557, 934];
       let libavdeviceYU = false;
          let componentregistryZ = false;
         defaultlogoN.push(refreshborderlessk);
         componentregistryZ = (!componentregistryZ ? !componentregistryZ : !componentregistryZ);
         refreshborderlessk &= ((libavdeviceYU ? 1 : 1) * defaultlogoN.length);
      let incidentV = defaultlogoN.length >= 6464715;
      do {
         defaultlogoN = [3];
         if (incidentV) {
            break;
         }
      } while (incidentV && ((defaultlogoN.length & 5) <= 2));
      for (let t = 0; t < 3; t++) {
         refreshborderlessk >>= Math.min(defaultlogoN.length, 4);
      }
          let predictionactiveL = String.fromCharCode(113,95,52,95,102,109,97,100,100,0);
          let overZ = false;
         defaultlogoN = [(refreshborderlessk / (Math.max(8, (libavdeviceYU ? 2 : 2))))];
         predictionactiveL += `${((overZ ? 3 : 5) >> (Math.min(Math.abs(1), 3)))}`;
         overZ = !predictionactiveL.startsWith(`${overZ}`);
      while (defaultlogoN.includes(refreshborderlessk)) {
          let interstitialh = true;
          let listY = 0;
          let historyr: Array<any> = [904, 835, 771];
          let verticalR = String.fromCharCode(115,99,114,111,108,108,97,98,108,101,95,102,95,53,48,0);
         refreshborderlessk &= 1 | refreshborderlessk;
         interstitialh = historyr.includes(interstitialh);
         listY <<= Math.min(5, Math.abs(historyr.length ^ listY));
         verticalR += `${2 & historyr.length}`;
         break;
      }
         libavdeviceYU = 33 == refreshborderlessk;
         libavdeviceYU = refreshborderlessk >= 99;
          let libfilei: Array<any> = [948, 356, 403];
         refreshborderlessk <<= Math.min(2, Math.abs(libfilei.length >> (Math.min(defaultlogoN.length, 1))));
      iconedit3 = `${stationsv.length | sell6.length}`;
      if (core6) {
         break;
      }
   } while ((1 >= stationsv.length) && core6);
    setReferralCodeErrMsg(null);

   if (1 >= room0.size) {
      room0 = new Map([[themeW, parseInt(`${defaultfootballbgL}`)]]);
   }
   let signinupE = 7163683 >= zoomm.size;
   do {
      zoomm.set(`${modeg}`, 2 >> (Math.min(Math.abs(parseInt(`${bootU}`)), 1)));
      if (signinupE) {
         break;
      }
   } while ((2 >= zoomm.size) && signinupE);
   while (modeg) {
      modeg = (room0.size ^ iconedit3.length) > 95;
      break;
   }
       let placeholderq = 3.0;
       let applicationj = String.fromCharCode(98,97,100,95,100,95,57,55,0);
       let typinge = String.fromCharCode(102,108,97,116,116,101,110,101,100,95,48,95,56,48,0);
      if ((placeholderq / 2.88) < 2.88) {
         typinge += `${3 * parseInt(`${placeholderq}`)}`;
      }
      for (let x = 0; x < 3; x++) {
          let verticalp = String.fromCharCode(99,101,108,102,95,102,95,52,52,0);
         typinge = "2";
         verticalp += `${verticalp.length + verticalp.length}`;
      }
      for (let l = 0; l < 1; l++) {
          let homef = false;
         placeholderq -= ((homef ? 4 : 3));
      }
      for (let f = 0; f < 1; f++) {
         applicationj += `${applicationj.length | 3}`;
      }
         applicationj += `${applicationj.length * typinge.length}`;
         typinge += `${applicationj.length % (Math.max(5, typinge.length))}`;
         placeholderq -= parseInt(`${placeholderq}`) & applicationj.length;
          let overF: Array<any> = [635, 285];
         applicationj += `${(String.fromCharCode(120,0) == applicationj ? typinge.length : applicationj.length)}`;
         overF = [3];
      for (let r = 0; r < 3; r++) {
          let audienceo = false;
          let tempnodatagif9 = 1.0;
          let emptyq = 4;
          let short_76 = false;
          let trophy_ = 3;
         typinge = `${applicationj.length - 1}`;
         audienceo = 88.27 >= tempnodatagif9;
         tempnodatagif9 -= emptyq;
         emptyq /= Math.max(3, 2 >> (Math.min(2, Math.abs(trophy_))));
         short_76 = 75 > trophy_ && emptyq > 75;
      }
      stationsv = `${list5.length << (Math.min(Math.abs(2), 4))}`;
   while (parseFloat(`${sell6.length}`) <= bootU) {
       let clocki = 5.0;
       let penaltymatchicons = 1;
          let backwhiteW = false;
          let fastforwardT = String.fromCharCode(115,95,55,56,95,112,111,115,116,101,114,0);
          let leagueT = 3;
         penaltymatchicons /= Math.max(3, 2);
         backwhiteW = ((fastforwardT.length << (Math.min(3, Math.abs((!backwhiteW ? 49 : fastforwardT.length))))) < 49);
         leagueT -= leagueT;
      let countdown3 = clocki <= 5097675.0;
      do {
         clocki /= Math.max(2, 2 << (Math.min(Math.abs(parseInt(`${clocki}`)), 1)));
         if (countdown3) {
            break;
         }
      } while (countdown3 && (3 >= penaltymatchicons));
         clocki /= Math.max(1 ^ parseInt(`${clocki}`), 3);
         clocki /= Math.max(penaltymatchicons >> (Math.min(3, Math.abs(3))), 2);
         penaltymatchicons &= 1 >> (Math.min(Math.abs(penaltymatchicons), 2));
          let currentJ = String.fromCharCode(119,95,57,48,95,115,116,114,101,97,109,105,100,0);
          let buildV = 0;
          let notificationfillemptyr = String.fromCharCode(97,97,99,116,97,98,95,99,95,53,50,0);
         penaltymatchicons |= parseInt(`${clocki}`) << (Math.min(notificationfillemptyr.length, 1));
         currentJ = `${currentJ.length >> (Math.min(3, Math.abs(buildV)))}`;
         buildV &= (currentJ == String.fromCharCode(113,0) ? currentJ.length : buildV);
         notificationfillemptyr += `${currentJ.length | buildV}`;
      sell6 += `${parseInt(`${defaultfootballbgL}`)}`;
      break;
   }
    setReadTermNCondition(false);

   let xinit_kr = 5117881 >= sell6.length;
   do {
      sell6 = `${sell6.length}`;
      if (xinit_kr) {
         break;
      }
   } while (xinit_kr && ((4 ^ sell6.length) < 4));
       let progressM = 0.0;
         progressM += 1 ^ parseInt(`${progressM}`);
      let spinnerM = progressM >= 9251183.0;
      do {
         progressM -= 3;
         if (spinnerM) {
            break;
         }
      } while ((3.4 <= (progressM / 4.66)) && spinnerM);
      for (let g = 0; g < 3; g++) {
         progressM += parseInt(`${progressM}`);
      }
      iconedit3 = `${(themeW == String.fromCharCode(87,0) ? themeW.length : description_lxN.length)}`;
   let wind4 = 7309439.0 <= defaultfootballbgL;
   do {
       let subbasketballplayer0 = String.fromCharCode(115,105,112,114,100,97,116,97,95,56,95,52,48,0);
       let applem = 0;
       let aboutM = 3;
         applem &= 2;
      while ((subbasketballplayer0.length - applem) < 2) {
         subbasketballplayer0 = `${applem}`;
         break;
      }
      while (3 >= applem) {
          let episodeB = String.fromCharCode(101,120,104,97,117,115,116,105,118,101,95,98,95,52,49,0);
          let profileh = 3.0;
          let nodeL = String.fromCharCode(117,95,50,53,95,112,108,97,99,101,104,111,108,100,101,114,0);
          let placement8: Map<any, any> = new Map([[String.fromCharCode(103,95,56,95,108,111,97,115,0),380], [String.fromCharCode(122,95,53,55,95,118,105,100,101,111,104,100,114,0),54]]);
         applem <<= Math.min(1, Math.abs(parseInt(`${profileh}`)));
         episodeB = `${(episodeB == String.fromCharCode(79,0) ? episodeB.length : nodeL.length)}`;
         profileh += parseFloat(`${1 ^ nodeL.length}`);
         placement8.set(episodeB, episodeB.length);
         break;
      }
      let graphicsQ = applem <= 5699251;
      do {
          let layoutS = String.fromCharCode(109,98,112,114,101,100,95,55,95,55,49,0);
          let iconclosek = 2.0;
          let goalr: Map<any, any> = new Map([[String.fromCharCode(120,95,49,51,95,115,119,114,101,115,97,109,112,108,101,0),true ], [String.fromCharCode(118,112,109,99,95,99,95,57,57,0),false ]]);
          let sheetG = String.fromCharCode(105,95,52,55,95,99,117,116,101,115,116,0);
         applem >>= Math.min(5, Math.abs(1 ^ applem));
         layoutS = `${(String.fromCharCode(54,0) == sheetG ? sheetG.length : goalr.size)}`;
         iconclosek -= goalr.size;
         if (graphicsQ) {
            break;
         }
      } while (((applem % (Math.max(subbasketballplayer0.length, 9))) <= 4) && graphicsQ);
      let iconsaveimageP = subbasketballplayer0.length >= 8993811;
      do {
          let member8 = 2;
          let recommendationu = String.fromCharCode(103,114,111,117,112,115,95,52,95,56,50,0);
          let verticalO = String.fromCharCode(116,104,114,101,97,100,101,100,95,102,95,52,0);
          let infoH = 0;
         subbasketballplayer0 += "3";
         member8 |= 2;
         recommendationu = `${infoH & 3}`;
         verticalO = `${2 & infoH}`;
         if (iconsaveimageP) {
            break;
         }
      } while ((5 > (subbasketballplayer0.length * applem)) && iconsaveimageP);
          let modityg: Array<any> = [502, 551];
         applem += aboutM;
         modityg.push(modityg.length);
      if ((aboutM - 1) <= 2) {
         aboutM |= applem;
      }
         applem >>= Math.min(2, subbasketballplayer0.length);
      if ((aboutM * applem) <= 4) {
         aboutM += 1 - aboutM;
      }
      defaultfootballbgL += (parseFloat(`${themeW.length ^ (fieldY ? 1 : 3)}`));
      if (wind4) {
         break;
      }
   } while (wind4 && ((parseInt(`${defaultfootballbgL}`) - 1) > 3 && 3 > (stationsv.length >> (Math.min(Math.abs(1), 1)))));
   let profilepict = 9137417 >= sell6.length;
   do {
      sell6 += `${parseInt(`${bootU}`) << (Math.min(list5.length, 2))}`;
      if (profilepict) {
         break;
      }
   } while (profilepict && (sell6.length > iconedit3.length));
   let castx = list5.length <= 8566739;
   do {
      list5 = [sell6.length];
      if (castx) {
         break;
      }
   } while ((3 >= list5.length) && castx);

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
       let stationE = 1.0;
    let stylesJ = String.fromCharCode(97,104,101,97,100,95,97,95,56,0);
    let sportP = String.fromCharCode(113,95,56,49,95,105,110,99,108,117,100,101,100,0);
    let mathu = String.fromCharCode(104,95,49,50,95,114,101,97,100,108,110,0);
    let imagenomoredataP = 4.0;
    let backgrounde: Array<any> = [String.fromCharCode(113,95,57,53,95,121,118,116,111,117,121,118,121,0), String.fromCharCode(105,100,101,109,112,111,116,101,110,99,121,95,102,95,54,56,0), String.fromCharCode(114,101,102,112,116,114,95,107,95,53,57,0)];
    let heart3 = String.fromCharCode(108,122,115,115,95,101,95,56,50,0);
    let assistd = false;
    let yingm = 4.0;
    let mimeW: Array<any> = [933, 240];
    let statsa = 0.0;
    let imagenetworkerrb = 0;
    let submitR = String.fromCharCode(99,111,110,118,101,114,116,101,114,95,50,95,53,56,0);
   for (let y = 0; y < 3; y++) {
      stylesJ = `${((assistd ? 1 : 4) + parseInt(`${imagenomoredataP}`))}`;
   }
   for (let n = 0; n < 3; n++) {
      imagenomoredataP += parseFloat(`${3 ^ parseInt(`${stationE}`)}`);
   }
       let plusS = 5.0;
       let gestureu = String.fromCharCode(107,105,108,108,95,56,95,57,55,0);
       let i_unlockt = false;
      let customR = gestureu.length <= 5192066;
      do {
         gestureu += "2";
         if (customR) {
            break;
         }
      } while ((gestureu.endsWith(`${i_unlockt}`)) && customR);
          let basketballplayerplaceholderc: Array<any> = [547, 292];
          let basketballiconV = String.fromCharCode(110,95,50,51,95,119,101,101,107,0);
         i_unlockt = 29 < gestureu.length;
         basketballplayerplaceholderc.push(basketballplayerplaceholderc.length / (Math.max(basketballiconV.length, 9)));
         basketballiconV += `${basketballiconV.length}`;
      for (let b = 0; b < 3; b++) {
          let thumbnailc = String.fromCharCode(116,95,50,54,95,111,112,101,110,0);
          let gmail3 = 1.0;
          let starE = String.fromCharCode(112,114,101,115,117,98,109,105,116,95,52,95,53,54,0);
          let predictionbannerk = 3.0;
         gestureu = "3";
         thumbnailc += `${starE.length ^ 3}`;
         gmail3 *= (parseFloat(`${String.fromCharCode(89,0) == starE ? parseInt(`${gmail3}`) : starE.length}`));
         predictionbannerk -= starE.length;
      }
      while (!gestureu.includes(`${plusS}`)) {
         plusS -= (parseFloat(`${(i_unlockt ? 3 : 2) >> (Math.min(Math.abs(parseInt(`${plusS}`)), 2))}`));
         break;
      }
          let playercommonC = 5.0;
         i_unlockt = gestureu.length < 1;
         playercommonC -= parseInt(`${playercommonC}`);
         i_unlockt = !i_unlockt;
       let darkh: Map<any, any> = new Map([[String.fromCharCode(104,95,50,50,95,112,114,111,98,101,114,0),744], [String.fromCharCode(107,95,52,54,95,100,101,102,97,117,108,116,0),484], [String.fromCharCode(115,101,110,100,118,95,121,95,52,57,0),36]]);
       let scrollviewX: Map<any, any> = new Map([[String.fromCharCode(115,112,108,105,99,101,95,106,95,49,50,0),false ], [String.fromCharCode(114,95,53,57,95,102,101,116,99,104,0),true ]]);
      for (let m = 0; m < 3; m++) {
         i_unlockt = !i_unlockt || scrollviewX.size == 95;
      }
         darkh.set(`${i_unlockt}`, 3);
      stationE *= parseFloat(`${2 & stylesJ.length}`);
   if (!sportP.includes(`${stylesJ.length}`)) {
      sportP += `${2 / (Math.max(8, parseInt(`${yingm}`)))}`;
   }
       let filed9 = 2.0;
       let videovarP = String.fromCharCode(97,95,52,53,95,118,97,110,99,0);
       let animationsO = 3;
      while (3.25 <= (filed9 - animationsO)) {
         filed9 /= Math.max(parseFloat(`${3 + videovarP.length}`), 2);
         break;
      }
          let animationV = 4;
          let themeW: Map<any, any> = new Map([[String.fromCharCode(97,95,56,95,114,101,115,117,108,116,115,0),String.fromCharCode(100,111,109,101,115,116,105,99,95,49,95,51,51,0)], [String.fromCharCode(108,95,51,53,95,114,101,116,114,105,101,114,0),String.fromCharCode(102,95,48,95,99,99,105,116,116,0)]]);
         videovarP += "2";
         animationV += themeW.size;
         themeW = new Map([[`${themeW.size}`, animationV]]);
      if ((4 & videovarP.length) >= 4 || (1.7 * filed9) >= 5.12) {
         filed9 += parseFloat(`${parseInt(`${filed9}`)}`);
      }
          let grayj = 1.0;
          let rightJ: Array<any> = [534, 774];
          let chatroombackgroundW: Array<any> = [797, 19];
         videovarP += `${videovarP.length | chatroombackgroundW.length}`;
         grayj /= Math.max(parseFloat(`${rightJ.length}`), 3);
         rightJ.push(1);
         chatroombackgroundW.push(rightJ.length);
      let skipn = videovarP.length <= 7027680;
      do {
          let collectionH = 4;
          let refreshborderless9 = 2.0;
         videovarP += `${videovarP.length & 3}`;
         collectionH += parseInt(`${refreshborderless9}`);
         refreshborderless9 /= Math.max(parseFloat(`${collectionH}`), 4);
         if (skipn) {
            break;
         }
      } while ((3 < videovarP.length) && skipn);
         videovarP = `${animationsO}`;
       let castingd = 4.0;
      let sportsI = 9487826 >= animationsO;
      do {
          let fastforwardY = 5.0;
         animationsO += parseInt(`${fastforwardY}`) ^ parseInt(`${filed9}`);
         if (sportsI) {
            break;
         }
      } while (((videovarP.length * animationsO) <= 2 || (animationsO * videovarP.length) <= 2) && sportsI);
         castingd /= Math.max(5, parseFloat(`${videovarP.length}`));
      imagenomoredataP -= parseFloat(`${1 - stylesJ.length}`);
   if (1.34 >= imagenomoredataP) {
       let sportsT = true;
       let expiredk = String.fromCharCode(105,110,105,116,105,97,108,105,115,101,95,112,95,55,52,0);
       let libruntimeexecutorD = 3.0;
       let androidg = String.fromCharCode(120,95,51,48,95,116,114,97,105,116,115,0);
       let backicong = 1.0;
          let leaguedetailsbgz = true;
          let mbridgeX = String.fromCharCode(100,101,109,97,110,100,95,112,95,51,54,0);
         expiredk = `${1 >> (Math.min(Math.abs(parseInt(`${libruntimeexecutorD}`)), 4))}`;
         leaguedetailsbgz = !leaguedetailsbgz;
         mbridgeX = "1";
      while (expiredk.length <= 3) {
         expiredk = `${1 << (Math.min(2, Math.abs(parseInt(`${libruntimeexecutorD}`))))}`;
         break;
      }
         expiredk += `${androidg.length * 3}`;
         androidg += `${(androidg.length / (Math.max(4, (sportsT ? 2 : 3))))}`;
      for (let f = 0; f < 2; f++) {
         sportsT = 68 > androidg.length;
      }
         libruntimeexecutorD += ((sportsT ? 5 : 1) + 1);
       let iconsaveimagee = 3.0;
       let backgroundJ = 2.0;
      while (4.49 > (libruntimeexecutorD / (Math.max(6, expiredk.length)))) {
         expiredk = `${parseInt(`${backicong}`) >> (Math.min(Math.abs(2), 4))}`;
         break;
      }
      while (1.13 > (libruntimeexecutorD * iconsaveimagee)) {
         libruntimeexecutorD += parseInt(`${backicong}`);
         break;
      }
      let queste = expiredk == String.fromCharCode(117,110,56,105,112,48,0);
      do {
         expiredk = `${parseInt(`${libruntimeexecutorD}`)}`;
         if (queste) {
            break;
         }
      } while ((sportsT) && queste);
         backicong /= Math.max(parseFloat(`${parseInt(`${backgroundJ}`) >> (Math.min(1, Math.abs(2)))}`), 1);
         androidg += `${1 ^ androidg.length}`;
         sportsT = libruntimeexecutorD < backgroundJ;
          let source5 = String.fromCharCode(116,117,108,115,105,95,101,95,53,54,0);
          let combineH = 1;
         sportsT = 94.67 > libruntimeexecutorD;
         source5 += `${source5.length << (Math.min(Math.abs(2), 1))}`;
         combineH <<= Math.min(5, Math.abs(source5.length / (Math.max(2, 1))));
      for (let k = 0; k < 2; k++) {
          let smallM = String.fromCharCode(109,101,109,95,102,95,57,56,0);
          let friendsz = String.fromCharCode(107,95,50,95,116,105,109,101,115,0);
         expiredk += `${((sportsT ? 3 : 1) + androidg.length)}`;
         smallM += `${friendsz.length / (Math.max(3, smallM.length))}`;
         friendsz = "3";
      }
      yingm -= parseFloat(`${stylesJ.length}`);
   }
   for (let m = 0; m < 1; m++) {
      backgrounde.push(1);
   }
       let tempnodatagifb: Array<any> = [701, 567];
       let iconclose9 = true;
       let videojs5 = true;
      let descc = iconclose9 ? !iconclose9 : iconclose9;
      do {
          let rankY = 4.0;
          let unselected4 = true;
          let runtimeh = 4;
          let expiredV: Array<any> = [982, 221];
          let halfu = 5.0;
         iconclose9 = videojs5;
         rankY -= parseFloat(`${runtimeh ^ parseInt(`${halfu}`)}`);
         unselected4 = expiredV.includes(runtimeh);
         expiredV = [2 / (Math.max(3, parseInt(`${rankY}`)))];
         halfu += parseFloat(`${runtimeh * 1}`);
         if (descc) {
            break;
         }
      } while ((!iconclose9) && descc);
         iconclose9 = tempnodatagifb.includes(iconclose9);
      for (let r = 0; r < 3; r++) {
         videojs5 = !iconclose9;
      }
      while ((1 ^ tempnodatagifb.length) == 3) {
         tempnodatagifb.push(tempnodatagifb.length / 2);
         break;
      }
      for (let l = 0; l < 2; l++) {
         iconclose9 = !iconclose9;
      }
       let gpayw = String.fromCharCode(119,95,54,57,95,112,114,105,110,116,101,114,0);
       let modeo = String.fromCharCode(100,105,109,101,110,115,95,116,95,50,57,0);
          let volumea = String.fromCharCode(120,95,53,50,95,101,120,112,111,115,117,114,101,0);
          let mbridgej: Map<any, any> = new Map([[String.fromCharCode(114,105,110,103,95,101,95,57,56,0),962], [String.fromCharCode(99,95,56,53,95,115,99,111,114,101,115,0),673], [String.fromCharCode(115,95,54,55,95,102,114,97,109,101,110,117,109,0),50]]);
         videojs5 = !videojs5 && modeo.length < 20;
         volumea += `${volumea.length - 2}`;
         mbridgej = new Map([[`${mbridgej.size}`, (String.fromCharCode(97,0) == volumea ? volumea.length : mbridgej.size)]]);
         modeo += `${((videojs5 ? 1 : 2) + 1)}`;
         gpayw += `${((iconclose9 ? 4 : 2) % (Math.max(3, 4)))}`;
      imagenomoredataP /= Math.max(parseFloat(`${1 + stylesJ.length}`), 1);
   let resendx = sportP == String.fromCharCode(108,103,111,116,50,107,0);
   do {
       let styleV = 5.0;
       let launchere = true;
       let footballfiledlayout7 = String.fromCharCode(120,95,54,48,95,115,100,112,0);
       let textlayoutmanager0 = 2;
       let serviceo = String.fromCharCode(103,101,116,116,101,114,95,99,95,50,52,0);
         textlayoutmanager0 /= Math.max(3, 4);
         serviceo = `${(parseInt(`${styleV}`) + (launchere ? 1 : 4))}`;
          let rewardO = 0.0;
         footballfiledlayout7 = "2";
         rewardO -= parseFloat(`${parseInt(`${rewardO}`) & parseInt(`${rewardO}`)}`);
      while (4 == textlayoutmanager0) {
         serviceo = `${(String.fromCharCode(106,0) == footballfiledlayout7 ? footballfiledlayout7.length : parseInt(`${styleV}`))}`;
         break;
      }
      if (textlayoutmanager0 <= 1 && 3 <= (textlayoutmanager0 & 1)) {
         launchere = 59 < textlayoutmanager0;
      }
         textlayoutmanager0 *= (serviceo == String.fromCharCode(68,0) ? serviceo.length : parseInt(`${styleV}`));
         serviceo += `${(serviceo == String.fromCharCode(115,0) ? (launchere ? 2 : 1) : serviceo.length)}`;
          let launchera = String.fromCharCode(112,97,103,101,110,117,109,98,101,114,95,120,95,49,53,0);
          let progressC = String.fromCharCode(108,95,49,95,100,101,99,114,101,97,115,101,0);
          let nativeexI = String.fromCharCode(105,95,54,95,114,101,112,101,97,116,0);
         footballfiledlayout7 += "2";
         launchera += "3";
         progressC += `${launchera.length & 1}`;
         nativeexI = `${3 | nativeexI.length}`;
      let telemetryH = launchere ? !launchere : launchere;
      do {
         launchere = serviceo.length > 22 && textlayoutmanager0 > 22;
         if (telemetryH) {
            break;
         }
      } while ((footballfiledlayout7.startsWith(`${launchere}`)) && telemetryH);
         launchere = !launchere;
          let macauP = 4.0;
          let predictionbannerZ = 2;
         styleV *= 2;
         macauP *= parseInt(`${macauP}`);
         predictionbannerZ *= predictionbannerZ - parseInt(`${macauP}`);
      for (let a = 0; a < 3; a++) {
         serviceo += `${parseInt(`${styleV}`) * 2}`;
      }
      for (let e = 0; e < 3; e++) {
         textlayoutmanager0 ^= (parseInt(`${styleV}`) | (launchere ? 2 : 3));
      }
         footballfiledlayout7 += `${((launchere ? 3 : 3))}`;
          let arrowL = 1.0;
          let canvasf = 2.0;
         styleV -= 3 - parseInt(`${styleV}`);
         arrowL *= 2 >> (Math.min(Math.abs(parseInt(`${arrowL}`)), 4));
         canvasf += parseFloat(`${parseInt(`${arrowL}`)}`);
      sportP += `${2 << (Math.min(1, mimeW.length))}`;
      if (resendx) {
         break;
      }
   } while (resendx && (3 > (mimeW.length - sportP.length) || (mimeW.length - 3) > 1));
      yingm /= Math.max(2, parseFloat(`${parseInt(`${yingm}`) / (Math.max(mimeW.length, 9))}`));
   if (5 == sportP.length) {
      sportP += "1";
   }
      heart3 = `${parseInt(`${stationE}`)}`;
   for (let f = 0; f < 2; f++) {
      imagenomoredataP *= parseFloat(`${1}`);
   }
   let logoutZ = 5117116.0 <= stationE;
   do {
      stationE /= Math.max(1, parseFloat(`${parseInt(`${yingm}`) * 3}`));
      if (logoutZ) {
         break;
      }
   } while (((stationE * imagenomoredataP) == 3.79) && logoutZ);
      imagenomoredataP -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${yingm}`)), 4))}`);
   let memberK = 9210339.0 <= stationE;
   do {
       let switch_eL = 5.0;
       let c_imageh = String.fromCharCode(110,111,110,110,101,103,97,116,105,118,101,95,57,95,53,0);
       let largeb = 2.0;
       let predictionwinx = String.fromCharCode(97,99,99,117,109,117,108,97,116,111,114,95,120,95,56,55,0);
       let videojsi = true;
      for (let d = 0; d < 3; d++) {
          let invite4 = String.fromCharCode(113,95,56,55,95,114,116,109,112,99,114,121,112,116,0);
         predictionwinx += `${predictionwinx.length}`;
         invite4 += `${2 * invite4.length}`;
      }
         videojsi = (69 >= ((!videojsi ? 69 : predictionwinx.length) + predictionwinx.length));
         largeb -= (parseFloat(`${String.fromCharCode(102,0) == predictionwinx ? predictionwinx.length : (videojsi ? 4 : 2)}`));
         largeb *= parseFloat(`${predictionwinx.length}`);
      while (!videojsi && (2.53 + switch_eL) < 3.52) {
         switch_eL /= Math.max(parseInt(`${largeb}`) + 2, 1);
         break;
      }
         c_imageh += `${parseInt(`${switch_eL}`) << (Math.min(c_imageh.length, 3))}`;
         c_imageh += `${(String.fromCharCode(65,0) == c_imageh ? c_imageh.length : parseInt(`${largeb}`))}`;
         predictionwinx = `${predictionwinx.length}`;
       let backwardk = 0.0;
      let statsnomoredataZ = 7414744.0 <= largeb;
      do {
          let searchG: Map<any, any> = new Map([[String.fromCharCode(115,114,116,112,95,51,95,53,49,0),544], [String.fromCharCode(109,117,108,116,120,109,117,108,116,95,56,95,49,54,0),341], [String.fromCharCode(112,114,111,112,111,115,97,108,115,95,120,95,51,49,0),283]]);
         largeb *= parseFloat(`${predictionwinx.length % (Math.max(2, 7))}`);
         searchG.set(`${searchG.size}`, searchG.size);
         if (statsnomoredataZ) {
            break;
         }
      } while (statsnomoredataZ && (3 < (predictionwinx.length >> (Math.min(Math.abs(1), 2))) || (1.6 * largeb) < 3.12));
      if (predictionwinx.length > 3) {
          let telegramE = String.fromCharCode(115,116,97,116,101,109,101,110,116,115,95,120,95,54,55,0);
          let signinupC = String.fromCharCode(112,95,49,52,95,109,118,115,101,116,0);
          let baseliner = String.fromCharCode(109,95,54,56,95,114,104,115,0);
          let toponH = 3;
          let update_cuu: Map<any, any> = new Map([[String.fromCharCode(110,95,54,56,95,100,97,112,112,115,0),true ], [String.fromCharCode(119,95,56,55,95,116,111,117,99,104,101,100,0),false ], [String.fromCharCode(101,95,56,50,95,98,101,103,105,110,0),true ]]);
         videojsi = String.fromCharCode(117,0) == telegramE;
         telegramE += `${(String.fromCharCode(49,0) == signinupC ? signinupC.length : update_cuu.size)}`;
         baseliner = "3";
         toponH |= toponH;
         update_cuu.set(signinupC, signinupC.length);
      }
      let pagep = 8949872 <= c_imageh.length;
      do {
         c_imageh += `${(parseInt(`${switch_eL}`) % (Math.max(8, (videojsi ? 4 : 5))))}`;
         if (pagep) {
            break;
         }
      } while ((1.71 >= (5.76 * largeb) || 5 >= (c_imageh.length * parseInt(`${largeb}`))) && pagep);
      let cornershootR = predictionwinx.length <= 8282195;
      do {
         predictionwinx = `${parseInt(`${backwardk}`)}`;
         if (cornershootR) {
            break;
         }
      } while (cornershootR && (c_imageh.endsWith(`${predictionwinx.length}`)));
          let mbjscommonn = String.fromCharCode(110,105,110,101,95,51,95,55,50,0);
          let catalogP = String.fromCharCode(106,95,49,49,95,115,116,111,114,101,100,0);
         largeb *= parseFloat(`${1}`);
         mbjscommonn += `${mbjscommonn.length}`;
         catalogP = `${catalogP.length}`;
         backwardk *= (parseFloat(`${parseInt(`${largeb}`) % (Math.max(2, (videojsi ? 2 : 4)))}`));
      stationE /= Math.max(2, parseFloat(`${1 | mimeW.length}`));
      if (memberK) {
         break;
      }
   } while (memberK && (5 == heart3.length));
      mimeW.push(parseInt(`${stationE}`) % 2);
       let y_image9 = true;
       let friendsI = 1.0;
      if (4.13 <= (2.45 - friendsI)) {
          let layoutw = String.fromCharCode(105,95,54,53,95,100,101,99,111,100,101,109,118,0);
         y_image9 = !y_image9 || layoutw.length < 8;
      }
       let splashU: Map<any, any> = new Map([[String.fromCharCode(102,95,56,50,95,113,117,97,110,116,105,122,101,0),String.fromCharCode(98,95,55,51,95,102,108,111,97,116,0)], [String.fromCharCode(115,104,111,114,116,99,117,116,95,103,95,51,49,0),String.fromCharCode(112,114,101,99,105,115,101,95,122,95,54,52,0)], [String.fromCharCode(115,109,112,116,101,95,101,95,49,48,48,0),String.fromCharCode(119,95,54,95,115,104,111,116,0)]]);
       let updateso: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,97,116,99,104,101,114,95,51,95,56,50,0),903], [String.fromCharCode(120,95,52,51,95,116,117,114,110,0),201], [String.fromCharCode(112,108,97,121,95,112,95,54,50,0),571]]);
      for (let c = 0; c < 1; c++) {
         y_image9 = splashU.size > 68;
      }
       let pushJ = 3;
       let networkv = 5;
          let smallorangemanb = String.fromCharCode(122,95,51,53,95,97,99,99,101,110,116,0);
          let penaltyshootnogoalz = false;
         updateso.set(`${penaltyshootnogoalz}`, (smallorangemanb == String.fromCharCode(89,0) ? smallorangemanb.length : (penaltyshootnogoalz ? 5 : 5)));
          let icopy_5T = true;
         pushJ |= ((icopy_5T ? 4 : 5) - 3);
      yingm *= parseFloat(`${3 + sportP.length}`);
      stylesJ = "2";
   for (let d = 0; d < 2; d++) {
      heart3 = `${sportP.length ^ 1}`;
   }
       let catagorys = 0.0;
       let singlex = String.fromCharCode(106,114,101,118,100,99,116,95,107,95,56,51,0);
       let libcrashsdkR = false;
      if (libcrashsdkR) {
         catagorys *= parseFloat(`${2}`);
      }
       let shootyesgoalv = 3.0;
         catagorys /= Math.max(3, parseFloat(`${3 + singlex.length}`));
       let statisticsinactived = String.fromCharCode(105,110,116,114,97,120,95,115,95,55,51,0);
      for (let j = 0; j < 1; j++) {
          let elements9 = String.fromCharCode(115,116,115,100,95,99,95,57,53,0);
          let iconbackwhiteT = 5.0;
         libcrashsdkR = shootyesgoalv >= 88.96 || 26 >= elements9.length;
         elements9 += `${2 >> (Math.min(Math.abs(parseInt(`${iconbackwhiteT}`)), 5))}`;
         iconbackwhiteT -= parseInt(`${iconbackwhiteT}`);
      }
      backgrounde.push(1 + backgrounde.length);

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
       let exampleimage6: Map<any, any> = new Map([[String.fromCharCode(105,110,99,114,109,101,114,103,101,95,52,95,53,57,0),String.fromCharCode(114,95,49,57,95,104,121,115,116,101,114,101,115,105,115,0)], [String.fromCharCode(109,97,99,104,95,104,95,53,48,0),String.fromCharCode(115,104,111,119,115,112,101,99,116,114,117,109,112,105,99,95,53,95,56,56,0)]]);
    let minimizes = String.fromCharCode(104,111,108,100,115,95,98,95,50,50,0);
    let inactive3 = String.fromCharCode(107,95,56,53,95,109,109,120,101,120,116,0);
    let chatN = 2.0;
    let icondefaultthumbnaild = 3.0;
    let action6 = 5;
    let layout2: Array<any> = [577, 975, 925];
    let favorite2 = String.fromCharCode(116,101,115,116,105,110,103,95,122,95,51,0);
    let dangerz: Map<any, any> = new Map([[String.fromCharCode(97,95,53,57,95,99,111,108,115,101,116,0),16], [String.fromCharCode(98,117,102,102,95,98,95,57,49,0),542], [String.fromCharCode(115,111,117,114,99,101,115,95,117,95,52,49,0),183]]);
    let searchbarl: Map<any, any> = new Map([[String.fromCharCode(102,111,114,103,101,116,95,102,95,49,49,0),String.fromCharCode(104,95,52,48,95,116,101,115,116,114,101,115,117,108,116,0)], [String.fromCharCode(99,111,108,111,114,113,117,97,110,116,95,108,95,52,54,0),String.fromCharCode(112,97,114,97,109,103,101,110,95,111,95,50,0)], [String.fromCharCode(111,95,51,50,95,119,109,118,100,115,112,0),String.fromCharCode(98,105,119,101,105,103,104,116,95,104,95,55,53,0)]]);
    let annerv = 5.0;
    let defaultteamW = 3.0;
    let mintegral4 = String.fromCharCode(98,95,50,50,95,114,105,98,98,111,110,0);
    let defaultroombgo = 0.0;
    let specs = String.fromCharCode(115,95,57,49,95,111,102,102,115,101,116,115,0);
   while ((exampleimage6.size % 2) > 3 && (exampleimage6.size % 2) > 1) {
       let icontransferclubx = true;
       let championD = false;
         icontransferclubx = !championD;
          let entryV = String.fromCharCode(104,117,102,102,109,97,110,95,57,95,55,48,0);
          let zhengpiana = 1.0;
         championD = !icontransferclubx;
         entryV += `${entryV.length}`;
         zhengpiana *= parseInt(`${zhengpiana}`) ^ entryV.length;
         championD = !icontransferclubx;
          let register_t8G = String.fromCharCode(102,105,110,105,115,104,95,114,95,55,50,0);
          let sharewhitev = 4;
          let codegenq = true;
         championD = (!championD ? !icontransferclubx : !championD);
         register_t8G += `${sharewhitev * register_t8G.length}`;
         sharewhitev -= 1;
         codegenq = register_t8G.includes(`${sharewhitev}`);
         championD = (!championD ? icontransferclubx : !championD);
      while (!championD && !icontransferclubx) {
          let j_viewR: Array<any> = [525, 538, 153];
          let fileg = String.fromCharCode(100,95,53,55,95,115,112,111,116,108,105,103,104,116,0);
          let imagenomoredatah = 1.0;
          let langkeyW: Map<any, any> = new Map([[String.fromCharCode(97,95,53,52,95,99,111,110,116,114,97,99,116,115,0),true ], [String.fromCharCode(111,114,105,101,110,116,95,112,95,54,48,0),false ]]);
         icontransferclubx = fileg.length == 22;
         j_viewR = [langkeyW.size];
         fileg += "2";
         imagenomoredatah += parseFloat(`${1 << (Math.min(2, Math.abs(langkeyW.size)))}`);
         break;
      }
      exampleimage6.set(`${action6}`, exampleimage6.size);
      break;
   }

    if (isSubmitting) return;

      exampleimage6.set(favorite2, favorite2.length);

    if (isReadTermNCondition == false) {

   let register_uxs = inactive3.length <= 9672116;
   do {
      inactive3 = "2";
      if (register_uxs) {
         break;
      }
   } while (register_uxs && (minimizes != String.fromCharCode(70,0)));
      mayi_Attributedstring.showToast('请勾选用户协议和隐私协议');

       let iconclosewhitebgj: Map<any, any> = new Map([[String.fromCharCode(109,101,109,106,114,110,108,95,110,95,57,54,0),false ], [String.fromCharCode(118,101,99,116,95,97,95,55,0),true ]]);
      if (!Array.from(iconclosewhitebgj.keys()).includes(`${iconclosewhitebgj.size}`)) {
         iconclosewhitebgj = new Map([[`${iconclosewhitebgj.size}`, iconclosewhitebgj.size]]);
      }
         iconclosewhitebgj = new Map([[`${iconclosewhitebgj.size}`, 1 & iconclosewhitebgj.size]]);
         iconclosewhitebgj = new Map([[`${iconclosewhitebgj.size}`, iconclosewhitebgj.size * 1]]);
      inactive3 += "2 ^ action6";
      return;

   let launcher5 = searchbarl.size <= 6308480;
   do {
       let change0 = String.fromCharCode(97,116,116,114,105,98,117,116,105,111,110,95,49,95,57,54,0);
       let whitej = false;
         whitej = change0.length >= 14 || whitej;
      let libreactnativeblob5 = 9048915 >= change0.length;
      do {
          let brightnessP: Map<any, any> = new Map([[String.fromCharCode(115,117,110,114,105,115,101,115,101,116,95,109,95,57,54,0),838], [String.fromCharCode(100,95,54,57,95,99,111,118,97,108,101,110,116,0),736]]);
          let footballtrophym = 0.0;
          let starH = 4;
         change0 += "1";
         brightnessP.set(`${footballtrophym}`, parseInt(`${footballtrophym}`) - starH);
         starH <<= Math.min(1, Math.abs(starH << (Math.min(Math.abs(parseInt(`${footballtrophym}`)), 1))));
         if (libreactnativeblob5) {
            break;
         }
      } while (libreactnativeblob5 && (change0.endsWith(`${whitej}`)));
       let securityY = String.fromCharCode(102,95,52,95,111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,0);
      for (let l = 0; l < 1; l++) {
          let whistleB: Array<any> = [33, 192, 150];
          let auto_qtq = 2.0;
         whitej = !whitej;
         whistleB = [whistleB.length ^ parseInt(`${auto_qtq}`)];
         auto_qtq += parseFloat(`${parseInt(`${auto_qtq}`)}`);
      }
      let relateds = whitej ? !whitej : whitej;
      do {
         whitej = !change0.endsWith(`${whitej}`);
         if (relateds) {
            break;
         }
      } while ((5 >= securityY.length && !whitej) && relateds);
          let bellv = 4.0;
          let middlewareg = String.fromCharCode(103,95,53,95,114,101,116,0);
         change0 += `${parseInt(`${bellv}`) << (Math.min(3, Math.abs(3)))}`;
         bellv -= middlewareg.length % 1;
         middlewareg = `${(String.fromCharCode(71,0) == middlewareg ? middlewareg.length : middlewareg.length)}`;
      searchbarl.set(`${favorite2}`, searchbarl.size);
      if (launcher5) {
         break;
      }
   } while (launcher5 && (5 > (1 & action6) || (action6 & searchbarl.size) > 1));
    }

    let userInfo;

      inactive3 += `${parseInt(`${icondefaultthumbnaild}`) & 1}`;

    try {

   while (5 <= (minimizes.length + 2) || (exampleimage6.size + minimizes.length) <= 2) {
      minimizes = `${parseInt(`${defaultteamW}`)}`;
      break;
   }
      await GoogleSignin.hasPlayServices();

      inactive3 = `${minimizes.length}`;

      if (await GoogleSignin.isSignedIn()) {

      favorite2 += `${action6}`;
        userInfo = await GoogleSignin.getCurrentUser();
      } else {

      annerv += parseInt(`${annerv}`) % (Math.max(1, parseInt(`${chatN}`)));
        userInfo = await GoogleSignin.signIn();
      }

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        
      } else if (error.code === statusCodes.IN_PROGRESS) {

       let dataV = String.fromCharCode(109,95,51,49,95,114,101,118,105,101,119,115,0);
       let statisticsN: Map<any, any> = new Map([[String.fromCharCode(103,110,111,95,113,95,57,48,0),String.fromCharCode(104,95,49,57,95,114,109,115,116,114,101,97,109,0)], [String.fromCharCode(100,101,99,111,117,112,108,101,95,51,95,54,56,0),String.fromCharCode(108,95,50,95,97,112,97,99,107,101,116,0)]]);
       let pageq = String.fromCharCode(122,102,114,101,101,95,49,95,56,55,0);
      while (pageq.includes(`${statisticsN.size}`)) {
          let iconqqG = String.fromCharCode(98,95,53,56,95,114,97,110,115,102,111,114,109,0);
         pageq = `${(String.fromCharCode(83,0) == pageq ? iconqqG.length : pageq.length)}`;
         break;
      }
         pageq = `${(pageq == String.fromCharCode(52,0) ? pageq.length : statisticsN.size)}`;
       let nalyticsT: Map<any, any> = new Map([[String.fromCharCode(114,101,99,97,108,99,95,57,95,51,50,0),String.fromCharCode(101,120,116,101,110,116,95,104,95,53,55,0)], [String.fromCharCode(115,105,103,110,117,109,95,103,95,53,53,0),String.fromCharCode(121,95,52,95,99,112,117,105,100,0)]]);
       let a_hashY: Map<any, any> = new Map([[String.fromCharCode(115,104,111,114,116,101,110,95,50,95,56,51,0),985], [String.fromCharCode(114,111,111,109,95,112,95,55,0),889], [String.fromCharCode(108,111,99,107,95,99,95,55,0),429]]);
      for (let f = 0; f < 1; f++) {
         a_hashY.set(`${pageq}`, 2 ^ statisticsN.size);
      }
      let cancelR = 9820053 <= nalyticsT.size;
      do {
         nalyticsT.set(pageq, statisticsN.size ^ 3);
         if (cancelR) {
            break;
         }
      } while (cancelR && (2 < pageq.length));
          let googlem = 4;
          let volumet = 3.0;
         a_hashY = new Map([[`${statisticsN.size}`, 3]]);
         googlem |= googlem;
         volumet += parseInt(`${volumet}`) / (Math.max(3, googlem));
         statisticsN = new Map([[pageq, pageq.length * 1]]);
       let mimoj = String.fromCharCode(104,95,52,49,95,99,108,97,115,115,105,102,115,0);
          let renderS = true;
          let giftbuttonx = String.fromCharCode(120,95,57,55,95,111,118,101,114,97,108,108,0);
          let floatingh: Array<any> = [848, 34];
         a_hashY = new Map([[`${a_hashY.size}`, (2 ^ (renderS ? 2 : 4))]]);
         renderS = giftbuttonx == String.fromCharCode(113,0);
         giftbuttonx += `${2 << (Math.min(4, giftbuttonx.length))}`;
         floatingh = [3];
      searchbarl = new Map([[`${icondefaultthumbnaild}`, parseInt(`${icondefaultthumbnaild}`)]]);
      dataV = `${dataV.length + 3}`;
        

   for (let d = 0; d < 3; d++) {
      icondefaultthumbnaild -= layout2.length & parseInt(`${defaultroombgo}`);
   }
        mayi_Attributedstring.showToast('请勿频繁操作');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

      annerv -= inactive3.length & parseInt(`${defaultroombgo}`);
        

   for (let u = 0; u < 3; u++) {
       let successC = String.fromCharCode(116,114,97,105,116,95,114,95,54,0);
       let dragu: Array<any> = [574, 502, 313];
       let weatherg = String.fromCharCode(117,110,105,95,57,95,49,48,48,0);
      let type_cG = dragu.length <= 9776852;
      do {
         dragu = [weatherg.length >> (Math.min(Math.abs(2), 5))];
         if (type_cG) {
            break;
         }
      } while (type_cG && (dragu.length == 2));
         successC += `${dragu.length}`;
      while ((3 | dragu.length) <= 2) {
         dragu.push(weatherg.length);
         break;
      }
      let libjsiw = 9202418 >= successC.length;
      do {
         successC = `${dragu.length}`;
         if (libjsiw) {
            break;
         }
      } while (libjsiw && (5 > dragu.length));
      while (dragu.length <= 4) {
          let leakcheckern: Map<any, any> = new Map([[String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,115,95,101,95,52,54,0),true ], [String.fromCharCode(118,115,114,99,95,111,95,53,53,0),false ]]);
          let bottomJ = 2;
          let animationsx: Array<any> = [String.fromCharCode(117,95,56,95,99,97,99,104,101,100,0), String.fromCharCode(108,111,116,116,105,101,105,116,101,109,95,118,95,53,54,0), String.fromCharCode(110,95,54,54,95,115,108,111,116,0)];
          let reactnavigationa = String.fromCharCode(105,102,97,99,101,95,100,95,56,51,0);
         dragu.push(dragu.length);
         leakcheckern = new Map([[`${animationsx.length}`, 1 | reactnavigationa.length]]);
         bottomJ %= Math.max(bottomJ, 1);
         animationsx.push(bottomJ);
         reactnavigationa += "1";
         break;
      }
       let iconscheduleT: Map<any, any> = new Map([[String.fromCharCode(101,120,116,101,110,100,105,110,103,95,103,95,49,50,0),String.fromCharCode(117,95,52,54,95,99,111,110,115,117,109,101,100,0)], [String.fromCharCode(113,115,99,97,108,101,95,56,95,55,52,0),String.fromCharCode(102,100,99,116,120,95,54,95,52,50,0)], [String.fromCharCode(113,95,55,49,95,97,99,107,110,111,119,108,101,100,103,109,101,110,116,0),String.fromCharCode(114,95,57,57,95,116,105,109,105,110,103,115,0)]]);
         iconscheduleT.set(successC, weatherg.length & successC.length);
      let nodea = 8433759 <= iconscheduleT.size;
      do {
         iconscheduleT = new Map([[`${iconscheduleT.size}`, successC.length / (Math.max(1, 9))]]);
         if (nodea) {
            break;
         }
      } while (nodea && (2 == (iconscheduleT.size / (Math.max(weatherg.length, 10))) && 2 == (iconscheduleT.size / (Math.max(1, weatherg.length)))));
      let shootyesgoalM = 9528556 <= dragu.length;
      do {
          let backiconZ: Map<any, any> = new Map([[String.fromCharCode(101,95,53,49,95,102,108,105,112,0),831], [String.fromCharCode(121,95,49,52,95,115,99,104,101,109,101,0),345]]);
         dragu.push(backiconZ.size | 3);
         if (shootyesgoalM) {
            break;
         }
      } while (shootyesgoalM && ((dragu.length % (Math.max(2, 4))) > 4));
      dangerz.set(mintegral4, 3);
   }
        mayi_Attributedstring.showToast('谷歌服务获取失败');
      } else {

   let hoverI = 8981801 <= dangerz.size;
   do {
      dangerz.set(`${icondefaultthumbnaild}`, parseInt(`${annerv}`));
      if (hoverI) {
         break;
      }
   } while (hoverI && (5 < (1 >> (Math.min(4, Math.abs(dangerz.size))))));
        

      annerv -= (String.fromCharCode(70,0) == minimizes ? minimizes.length : layout2.length);
        mayi_Attributedstring.showToast('登入失败，请稍后再试');
      }
      console.log(error.toString());

      favorite2 = `${mintegral4.length + inactive3.length}`;
      return;
    }

    if (userInfo === null) {

      icondefaultthumbnaild += 1 / (Math.max(parseInt(`${chatN}`), 6));
      mayi_Attributedstring.showToast('登入失败，请稍后再试');

      dangerz = new Map([[`${defaultroombgo}`, parseInt(`${annerv}`) + 3]]);
      return;
    }

    try {

   if (4.49 > annerv) {
       let cancelV = 2;
       let zoomv = String.fromCharCode(98,117,105,108,100,95,111,95,57,53,0);
       let iconbackwhiteV: Map<any, any> = new Map([[String.fromCharCode(108,108,100,98,105,110,105,116,95,110,95,50,51,0),true ], [String.fromCharCode(101,95,56,50,95,113,115,116,101,112,0),false ], [String.fromCharCode(113,95,56,56,95,115,111,110,105,99,0),false ]]);
         iconbackwhiteV = new Map([[zoomv, cancelV]]);
       let chinasameU = 4.0;
       let fullscreenmino = 2.0;
          let iconclosewhitebgT = String.fromCharCode(115,95,54,95,110,111,116,0);
          let data4 = true;
          let analytic_ = String.fromCharCode(108,105,98,107,118,97,122,97,97,114,95,53,95,49,57,0);
         chinasameU /= Math.max(3, zoomv.length >> (Math.min(analytic_.length, 2)));
         iconclosewhitebgT = `${((data4 ? 3 : 5))}`;
         data4 = iconclosewhitebgT.length > 55;
         analytic_ = `${((data4 ? 4 : 5))}`;
       let fastA = 2.0;
       let zoomQ = 4.0;
         zoomQ /= Math.max(parseFloat(`${3}`), 4);
          let dropdownQ = 5.0;
         fastA /= Math.max(parseFloat(`${parseInt(`${zoomQ}`)}`), 5);
         dropdownQ += parseFloat(`${parseInt(`${dropdownQ}`) << (Math.min(4, Math.abs(1)))}`);
      if (2 >= (iconbackwhiteV.size & zoomv.length)) {
          let tempnodataf = 4.0;
          let flipperc: Array<any> = [426, 557, 12];
          let bootsplashK: Map<any, any> = new Map([[String.fromCharCode(100,95,52,54,95,115,117,98,115,116,105,116,117,116,101,100,0),String.fromCharCode(118,105,115,98,108,101,95,116,95,50,0)], [String.fromCharCode(110,95,50,52,95,114,101,97,100,105,110,105,116,0),String.fromCharCode(122,95,53,55,95,98,117,102,102,101,114,115,0)]]);
          let mintegralW = true;
         iconbackwhiteV = new Map([[`${iconbackwhiteV.size}`, parseInt(`${fastA}`)]]);
         tempnodataf += flipperc.length;
         flipperc = [1];
         bootsplashK.set(`${flipperc.length}`, 1 & bootsplashK.size);
         mintegralW = tempnodataf >= 60.19;
      }
      for (let u = 0; u < 3; u++) {
         chinasameU += parseInt(`${zoomQ}`) - 2;
      }
      if (chinasameU >= 2.89) {
         fullscreenmino /= Math.max(4, parseInt(`${fastA}`));
      }
      layout2.push(minimizes.length >> (Math.min(2, Math.abs(dangerz.size))));
   }
      setSubmitting(true);

      minimizes += `${(String.fromCharCode(56,0) == minimizes ? exampleimage6.size : minimizes.length)}`;
      userInfo = await mayi_Injury.signinupUser({
        loginType: 'EMAIL',
        email: userInfo.user.email,
        referralCode: referralCode,
        isGoogleLogin: true,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      GoogleSignin.signOut();

   let basketballtrophyX = String.fromCharCode(98,52,102,98,121,50,120,106,104,0) == mintegral4;
   do {
      mintegral4 += `${specs.length ^ layout2.length}`;
      if (basketballtrophyX) {
         break;
      }
   } while ((2 > (mintegral4.length & 3) && 3 > (parseInt(`${defaultteamW}`) * 3)) && basketballtrophyX);
      mayi_Attributedstring.showToast(err.toString());

       let videobufferloading5: Array<any> = [8, 272];
      let gifgoalk = 8177142 >= videobufferloading5.length;
      do {
         videobufferloading5 = [3 * videobufferloading5.length];
         if (gifgoalk) {
            break;
         }
      } while ((3 > videobufferloading5.length) && gifgoalk);
      for (let c = 0; c < 3; c++) {
         videobufferloading5.push(videobufferloading5.length >> (Math.min(Math.abs(2), 1)));
      }
      let temperaturef = 6363245 <= videobufferloading5.length;
      do {
         videobufferloading5.push(2 + videobufferloading5.length);
         if (temperaturef) {
            break;
         }
      } while (temperaturef && (3 < (videobufferloading5.length % (Math.max(5, videobufferloading5.length))) && (videobufferloading5.length % 3) < 2));
      specs = `${1 / (Math.max(8, parseInt(`${defaultroombgo}`)))}`;
      return;
    } finally {

      defaultteamW /= Math.max(5, parseFloat(`${3}`));
      setSubmitting(false);

   if (5 == (5 ^ searchbarl.size) && (5 ^ searchbarl.size) == 2) {
      searchbarl = new Map([[`${defaultroombgo}`, 2 | parseInt(`${defaultroombgo}`)]]);
   }
    }

    const resultData = userInfo.data;

   let iconcloseC = icondefaultthumbnaild >= 6697666.0;
   do {
      icondefaultthumbnaild += 2;
      if (iconcloseC) {
         break;
      }
   } while ((layout2.includes(icondefaultthumbnaild)) && iconcloseC);

    const user = mayi_Gift.fromJson(resultData);

      favorite2 += `${layout2.length & 2}`;

    await dispatch(addUserAuthState(user));

      icondefaultthumbnaild *= 1 | specs.length;

    if (userInfo.message.includes("注册成功")) {

   for (let s = 0; s < 1; s++) {
      searchbarl.set(`${layout2.length}`, searchbarl.size);
   }
      navigation.navigate('SetUsername');

    } else if (userInfo.message.includes("登录成功")) {

       let libffmpegkitj = 5.0;
       let yellowj = true;
          let predictionbannersharedu = String.fromCharCode(99,111,109,109,97,95,113,95,51,56,0);
          let libyogam = String.fromCharCode(100,95,57,54,95,112,111,108,105,99,105,101,115,0);
          let rewardvideoC = String.fromCharCode(105,110,116,101,114,115,101,99,116,95,103,95,54,55,0);
         libffmpegkitj *= ((yellowj ? 3 : 3) ^ rewardvideoC.length);
         predictionbannersharedu = `${libyogam.length * predictionbannersharedu.length}`;
         libyogam += `${1 | libyogam.length}`;
         rewardvideoC = "2";
       let homeloading8 = 2.0;
       let iconfeedbackZ = 3.0;
      while (2.28 >= libffmpegkitj || (2.28 + libffmpegkitj) >= 2.45) {
         libffmpegkitj /= Math.max(1, parseInt(`${iconfeedbackZ}`) ^ 1);
         break;
      }
      while (!yellowj) {
          let heartO = String.fromCharCode(106,95,56,56,95,104,111,114,105,122,111,110,116,97,108,108,121,0);
         yellowj = 90.65 >= homeloading8 && !yellowj;
         heartO += `${(heartO == String.fromCharCode(110,0) ? heartO.length : heartO.length)}`;
         break;
      }
         libffmpegkitj += 2 ^ parseInt(`${homeloading8}`);
      defaultroombgo *= parseFloat(`${dangerz.size}`);

      if (user.isVip()) {

   if ((mintegral4.length % 1) >= 3 || (annerv + 2.80) >= 5.69) {
      annerv /= Math.max(4, inactive3.length);
   }
        await AsyncStorage.setItem("showAds", "false");
      } else {

   let dycreatorE = mintegral4.length <= 6620589;
   do {
      mintegral4 += `${parseInt(`${annerv}`)}`;
      if (dycreatorE) {
         break;
      }
   } while (((parseInt(`${defaultroombgo}`) / 2) == 5 && (mintegral4.length & 2) == 3) && dycreatorE);
        await AsyncStorage.setItem("showAds", "true");
      }

      await dispatch(changeScreenAction('登录成功'));

   let defaultteamE = 5495410 >= layout2.length;
   do {
       let live2 = String.fromCharCode(105,95,51,55,0);
       let episodec = String.fromCharCode(109,105,103,114,97,116,105,110,103,95,100,95,53,56,0);
       let libapminsightbR = 2.0;
         episodec = `${(episodec == String.fromCharCode(99,0) ? episodec.length : live2.length)}`;
         libapminsightbR /= Math.max(4, parseFloat(`${parseInt(`${libapminsightbR}`) | 3}`));
      while (3 <= (parseInt(`${libapminsightbR}`) * live2.length) && (parseFloat(`${live2.length}`) * libapminsightbR) <= 5.16) {
          let photoC = 4.0;
          let playI = 3;
          let stary = 5;
          let arrowupP = 3.0;
         live2 = `${parseInt(`${photoC}`)}`;
         photoC += parseInt(`${arrowupP}`);
         playI %= Math.max(3, 1 - parseInt(`${arrowupP}`));
         stary /= Math.max(3, 3 << (Math.min(Math.abs(playI), 5)));
         break;
      }
      let thumbnailK = String.fromCharCode(107,48,121,113,111,99,0) == live2;
      do {
          let nalytics2 = true;
          let qaagl = false;
          let bufferI: Map<any, any> = new Map([[String.fromCharCode(107,95,54,48,95,117,112,109,105,120,0),String.fromCharCode(105,110,118,97,108,105,100,97,116,101,95,119,95,51,0)], [String.fromCharCode(115,104,111,114,116,102,108,111,97,116,95,114,95,56,49,0),String.fromCharCode(109,95,57,48,95,104,105,103,104,108,105,103,104,116,115,0)]]);
          let subtexte = String.fromCharCode(100,97,116,97,104,97,115,104,95,106,95,52,56,0);
          let indicatorP = String.fromCharCode(115,116,114,117,99,116,117,114,97,108,95,117,95,56,52,0);
         live2 += `${subtexte.length}`;
         nalytics2 = bufferI.size >= 36 && nalytics2;
         qaagl = bufferI.size < 42 && nalytics2;
         subtexte += `${bufferI.size}`;
         indicatorP = `${(String.fromCharCode(84,0) == indicatorP ? indicatorP.length : (nalytics2 ? 1 : 2))}`;
         if (thumbnailK) {
            break;
         }
      } while (((live2.length * 1) >= 3) && thumbnailK);
         episodec += `${(String.fromCharCode(53,0) == episodec ? episodec.length : parseInt(`${libapminsightbR}`))}`;
      while (!live2.includes(`${episodec.length}`)) {
         episodec += `${(String.fromCharCode(56,0) == live2 ? live2.length : parseInt(`${libapminsightbR}`))}`;
         break;
      }
       let launchw = String.fromCharCode(106,95,57,52,95,113,117,97,110,116,0);
       let untickP = String.fromCharCode(114,111,119,107,101,121,95,109,95,56,51,0);
      for (let q = 0; q < 2; q++) {
          let iconarrowleftS = String.fromCharCode(97,95,56,48,95,114,101,115,116,111,114,101,0);
          let injuryT = true;
         launchw += `${2 & parseInt(`${libapminsightbR}`)}`;
         iconarrowleftS += `${iconarrowleftS.length}`;
         injuryT = !injuryT;
      }
         libapminsightbR += parseFloat(`${episodec.length}`);
      layout2.push(mintegral4.length | parseInt(`${defaultroombgo}`));
      if (defaultteamE) {
         break;
      }
   } while ((!Array.from(dangerz.values()).includes(layout2.length)) && defaultteamE);

      

      chatN += dangerz.size % (Math.max(2, 4));
      mayi_push.userCenterLoginSuccessTimesAnalytics();

      chatN /= Math.max(5, specs.length);
      mayi_ForegroundLibfabricjni.userCenterLoginSuccessTimesAnalytics();

      if (user.isVip()) {
        mayi_push.userCenterVipLoginSuccessTimesAnalytics();
      }
      

      if (onGooleLoginSuccess) onGooleLoginSuccess();
    }
  }

  const onPressTermNCondition = () => {
       let expiredb = true;
    let subbasketballplayer8 = false;
    let guideD = String.fromCharCode(109,97,116,120,95,97,95,54,54,0);
    let switch_hyi = 2.0;
    let libnms_: Map<any, any> = new Map([[String.fromCharCode(119,101,108,115,100,101,99,100,101,109,111,95,114,95,56,55,0),String.fromCharCode(114,95,51,50,95,115,117,98,104,101,97,100,101,114,0)], [String.fromCharCode(110,95,54,95,105,110,116,114,97,120,100,115,112,0),String.fromCharCode(99,95,50,51,95,115,117,98,114,97,110,103,101,0)]]);
    let shrinkO = 5.0;
    let l_centerP = 3.0;
    let sharedR = String.fromCharCode(117,95,49,54,95,115,104,111,119,110,0);
    let field_: Array<any> = [113, 123, 228];
    let package_al = String.fromCharCode(120,95,50,48,95,103,101,116,117,114,108,99,111,110,116,101,120,116,0);
    let emojiN = 5;
    let incidentC = false;
    let h_playerE = String.fromCharCode(114,95,56,51,95,114,101,118,111,99,97,116,105,111,110,0);
    let verticalB = String.fromCharCode(107,95,54,48,95,112,114,105,111,114,105,116,121,113,0);
    let bridget = false;
       let ewardedu = String.fromCharCode(108,95,51,50,95,108,105,98,106,112,101,103,116,117,114,98,111,0);
       let backD = 4.0;
      let stepa = String.fromCharCode(98,116,105,52,98,107,0) == ewardedu;
      do {
         ewardedu = `${ewardedu.length / 2}`;
         if (stepa) {
            break;
         }
      } while (((backD * parseFloat(`${ewardedu.length}`)) > 3.58 || 5.0 > (3.58 * backD)) && stepa);
          let dependenciesv = true;
         ewardedu = `${parseInt(`${backD}`)}`;
         dependenciesv = !dependenciesv;
      for (let e = 0; e < 2; e++) {
         backD *= parseFloat(`${parseInt(`${backD}`) << (Math.min(Math.abs(1), 3))}`);
      }
         backD -= (parseFloat(`${ewardedu == String.fromCharCode(122,0) ? parseInt(`${backD}`) : ewardedu.length}`));
         backD /= Math.max(1, parseFloat(`${ewardedu.length & parseInt(`${backD}`)}`));
      if ((4.72 + backD) > 3.15) {
         ewardedu = `${(String.fromCharCode(73,0) == ewardedu ? ewardedu.length : parseInt(`${backD}`))}`;
      }
      libnms_.set(guideD, ewardedu.length >> (Math.min(guideD.length, 4)));
   while (!package_al.endsWith(`${libnms_.size}`)) {
       let fastforwards = String.fromCharCode(98,108,117,114,114,97,98,108,101,95,110,95,57,57,0);
       let videocommonP = String.fromCharCode(98,105,108,97,116,101,114,97,108,95,119,95,51,53,0);
       let annerN = false;
         videocommonP = `${1 * videocommonP.length}`;
      let twitter_ = String.fromCharCode(116,108,111,105,52,110,107,0) == videocommonP;
      do {
          let line9 = String.fromCharCode(115,101,108,102,95,114,95,52,54,0);
         videocommonP += `${fastforwards.length >> (Math.min(Math.abs(3), 3))}`;
         line9 += `${line9.length}`;
         if (twitter_) {
            break;
         }
      } while ((!videocommonP.endsWith(`${annerN}`)) && twitter_);
      if (videocommonP.length == 1) {
          let reminderM: Map<any, any> = new Map([[String.fromCharCode(100,101,110,121,95,52,95,48,0),String.fromCharCode(115,95,56,50,95,103,114,97,110,117,108,101,0)], [String.fromCharCode(115,104,97,114,97,98,108,101,95,55,95,55,0),String.fromCharCode(110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,95,111,95,53,48,0)], [String.fromCharCode(117,115,105,110,103,95,109,95,56,48,0),String.fromCharCode(115,107,105,112,105,110,116,114,97,95,115,95,57,51,0)]]);
         fastforwards = `${(String.fromCharCode(105,0) == fastforwards ? fastforwards.length : reminderM.size)}`;
      }
      while (5 < fastforwards.length) {
         videocommonP += `${((annerN ? 5 : 5))}`;
         break;
      }
      if (!fastforwards.endsWith(`${annerN}`)) {
         annerN = (fastforwards.length - videocommonP.length) >= 4;
      }
         videocommonP += `${fastforwards.length + 1}`;
         videocommonP += `${videocommonP.length * 2}`;
         fastforwards += "3";
         videocommonP += `${1 << (Math.min(5, videocommonP.length))}`;
      libnms_.set(`${annerN}`, ((annerN ? 3 : 2) | 2));
      break;
   }
      subbasketballplayer8 = package_al.endsWith(`${switch_hyi}`);
   while (5 > field_.length) {
      field_.push(guideD.length & 1);
      break;
   }
   let graphicsT = expiredb ? !expiredb : expiredb;
   do {
      expiredb = 17.90 >= l_centerP && sharedR.length >= 74;
      if (graphicsT) {
         break;
      }
   } while (((5.53 + l_centerP) >= 4.62 || expiredb) && graphicsT);
      subbasketballplayer8 = !subbasketballplayer8 && package_al.length > 93;
   let updatesE = 6521606 >= field_.length;
   do {
       let chatroombackground7 = String.fromCharCode(114,101,102,101,114,101,110,99,101,115,95,101,95,55,52,0);
       let matchdetailbgL: Map<any, any> = new Map([[String.fromCharCode(109,101,114,103,101,97,98,108,101,95,50,95,50,57,0),false ], [String.fromCharCode(119,100,101,99,95,118,95,51,52,0),false ], [String.fromCharCode(117,95,53,57,95,114,101,100,117,99,116,105,111,110,0),true ]]);
         matchdetailbgL = new Map([[`${matchdetailbgL.size}`, (chatroombackground7 == String.fromCharCode(79,0) ? matchdetailbgL.size : chatroombackground7.length)]]);
      if (5 < (1 | matchdetailbgL.size)) {
          let utilsb = 0;
          let headerH = String.fromCharCode(115,99,104,101,109,97,95,109,95,53,54,0);
         chatroombackground7 += `${matchdetailbgL.size}`;
         utilsb <<= Math.min(3, Math.abs(1));
         headerH += `${headerH.length}`;
      }
       let iconviewergiff = String.fromCharCode(99,97,118,115,100,115,112,95,100,95,55,0);
       let storez = String.fromCharCode(105,110,105,116,101,110,99,95,121,95,49,55,0);
         matchdetailbgL.set(`${iconviewergiff}`, matchdetailbgL.size);
         storez = "3";
      for (let q = 0; q < 1; q++) {
         storez += `${(String.fromCharCode(52,0) == iconviewergiff ? iconviewergiff.length : storez.length)}`;
      }
      field_.push(emojiN / 2);
      if (updatesE) {
         break;
      }
   } while (updatesE && (!field_.includes(shrinkO)));
      libnms_.set(`${field_.length}`, libnms_.size);
      emojiN ^= 3;
   let textinput9 = expiredb ? !expiredb : expiredb;
   do {
      expiredb = guideD.length >= 87;
      if (textinput9) {
         break;
      }
   } while ((!expiredb) && textinput9);
   while (guideD.length == 5) {
       let source4 = false;
          let iconstarW = String.fromCharCode(112,101,97,99,104,95,117,95,54,51,0);
         source4 = iconstarW.length <= 58 || source4;
       let edit2 = String.fromCharCode(99,95,57,48,95,115,117,112,101,114,118,105,101,119,0);
       let librrcg = String.fromCharCode(110,95,55,55,95,115,101,99,107,101,121,0);
         edit2 = "2";
      incidentC = guideD.length > 39;
      break;
   }
   while (!incidentC) {
      switch_hyi -= parseFloat(`${libnms_.size}`);
      break;
   }
       let iconsubssuccessU: Map<any, any> = new Map([[String.fromCharCode(97,95,50,57,95,101,110,100,0),561], [String.fromCharCode(110,95,55,48,95,109,101,109,98,101,114,0),592], [String.fromCharCode(122,95,52,54,95,99,97,108,108,0),95]]);
       let libfb3 = 4.0;
         iconsubssuccessU.set(`${libfb3}`, parseInt(`${libfb3}`) / (Math.max(7, iconsubssuccessU.size)));
         libfb3 += parseInt(`${libfb3}`);
      for (let v = 0; v < 1; v++) {
          let tempnodataI: Map<any, any> = new Map([[String.fromCharCode(97,108,112,104,97,95,51,95,50,51,0),97], [String.fromCharCode(107,95,49,55,95,110,101,116,115,0),415], [String.fromCharCode(118,114,108,101,95,104,95,53,56,0),316]]);
          let reactnativejs3 = 5;
          let loginN = false;
          let main_aU = true;
          let clubL = String.fromCharCode(101,95,55,56,95,114,101,105,115,115,117,101,0);
         libfb3 += reactnativejs3 / 3;
         tempnodataI.set(`${main_aU}`, ((main_aU ? 4 : 4) >> (Math.min(Math.abs(3), 4))));
         reactnativejs3 |= (2 & (main_aU ? 1 : 4));
         loginN = (((!loginN ? tempnodataI.size : 53) | tempnodataI.size) >= 60);
         clubL += `${((main_aU ? 1 : 1))}`;
      }
         libfb3 *= 3;
      while ((libfb3 + 2.22) < 5.43 || (iconsubssuccessU.size + 4) < 2) {
         libfb3 -= iconsubssuccessU.size;
         break;
      }
      let sharedT = iconsubssuccessU.size <= 9333178;
      do {
         iconsubssuccessU.set(`${libfb3}`, parseInt(`${libfb3}`));
         if (sharedT) {
            break;
         }
      } while (sharedT && ((libfb3 * 1.84) > 2.21 && 3.57 > (1.84 * libfb3)));
      sharedR += `${emojiN}`;
   if (1.1 == shrinkO) {
      sharedR = `${(parseInt(`${shrinkO}`) - (expiredb ? 3 : 4))}`;
   }
   for (let z = 0; z < 3; z++) {
      package_al += "3";
   }
       let predictionarrow9 = false;
       let embedo = String.fromCharCode(115,95,49,50,95,115,119,105,102,116,0);
          let macauX: Map<any, any> = new Map([[String.fromCharCode(115,95,54,57,95,119,114,105,116,101,97,108,105,103,110,0),String.fromCharCode(115,109,117,115,104,95,50,95,55,48,0)], [String.fromCharCode(116,95,55,52,95,115,101,99,111,110,100,115,0),String.fromCharCode(114,95,55,50,95,115,105,110,116,105,0)]]);
          let playj: Map<any, any> = new Map([[String.fromCharCode(99,97,99,104,101,100,107,101,121,115,95,118,95,57,56,0),true ], [String.fromCharCode(103,95,53,50,95,112,101,114,115,105,115,116,101,110,99,101,0),false ], [String.fromCharCode(100,95,49,50,95,112,114,111,116,111,99,111,108,0),false ]]);
         embedo = `${embedo.length}`;
         macauX = new Map([[`${playj.size}`, macauX.size]]);
         playj.set(`${playj.size}`, 2 & macauX.size);
       let chatroombackground8 = String.fromCharCode(101,95,55,51,95,111,109,105,116,116,105,110,103,0);
      if (embedo.length > 1) {
         embedo = `${(chatroombackground8 == String.fromCharCode(108,0) ? (predictionarrow9 ? 5 : 3) : chatroombackground8.length)}`;
      }
      let teamdetailsbgY = 5565481 >= chatroombackground8.length;
      do {
         chatroombackground8 = `${embedo.length << (Math.min(Math.abs(2), 2))}`;
         if (teamdetailsbgY) {
            break;
         }
      } while ((!predictionarrow9 || chatroombackground8.length > 5) && teamdetailsbgY);
      if (predictionarrow9) {
          let castingA = String.fromCharCode(108,101,97,115,116,95,100,95,55,56,0);
         embedo += `${embedo.length}`;
         castingA = `${2 + castingA.length}`;
      }
      if (chatroombackground8.length < 2) {
         chatroombackground8 += `${((predictionarrow9 ? 4 : 2) / (Math.max(chatroombackground8.length, 9)))}`;
      }
      expiredb = emojiN < 4;
   let smallorangemanN = 6882483 >= field_.length;
   do {
      field_.push(emojiN * 3);
      if (smallorangemanN) {
         break;
      }
   } while (smallorangemanN && (5 > (field_.length >> (Math.min(Math.abs(3), 4)))));
      emojiN -= ((expiredb ? 4 : 3));
      subbasketballplayer8 = !subbasketballplayer8;

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
       let mbnativeC = String.fromCharCode(110,95,56,48,95,114,111,119,115,0);
    let profileM = 4;
    let cornerkickb = String.fromCharCode(98,95,56,49,95,100,105,118,105,100,101,100,0);
    let ticked3: Array<any> = [182, 124];
    let mbnativeadvancedR: Array<any> = [245, 95, 303];
    let nativeexi: Array<any> = [968, 717];
    let tickedY = String.fromCharCode(103,114,97,110,117,108,101,95,53,95,50,53,0);
    let robotoe = 5.0;
    let blacklistU = String.fromCharCode(114,95,52,54,95,117,110,112,97,99,107,101,100,0);
    let unselected2 = 5.0;
    let foundh: Array<any> = [61, 920];
      cornerkickb = `${mbnativeC.length / 2}`;

    if (isSubmitting) return;

      mbnativeC += `${cornerkickb.length << (Math.min(Math.abs(1), 2))}`;

    if (isReadTermNCondition == false) {

   let graphicsC = ticked3.length <= 6038970;
   do {
      ticked3.push((cornerkickb == String.fromCharCode(86,0) ? tickedY.length : cornerkickb.length));
      if (graphicsC) {
         break;
      }
   } while (graphicsC && ((3 + ticked3.length) > 3 && (ticked3.length + 3) > 4));
      return;

      cornerkickb = `${ticked3.length}`;
    }

    const formattedLoginValue = loginType === 'phone' ? loginValue.replace(/\s/g, '') : loginValue;

    

      ticked3 = [2];
    

      mbnativeC = `${(String.fromCharCode(116,0) == tickedY ? parseInt(`${robotoe}`) : tickedY.length)}`;
    

   while (!blacklistU.includes(`${mbnativeadvancedR.length}`)) {
       let selle: Map<any, any> = new Map([[String.fromCharCode(98,95,53,56,95,105,110,116,101,114,102,114,97,109,101,0),String.fromCharCode(113,117,97,100,114,97,116,105,99,95,109,95,56,0)], [String.fromCharCode(121,95,53,56,95,115,105,110,117,115,111,105,100,97,108,0),String.fromCharCode(112,114,105,111,114,95,50,95,53,54,0)], [String.fromCharCode(97,95,56,53,95,118,112,105,110,116,114,97,112,114,101,100,0),String.fromCharCode(119,95,52,51,95,116,101,115,116,105,110,103,0)]]);
       let optionsg: Array<any> = [522, 208, 669];
         optionsg = [1 << (Math.min(4, optionsg.length))];
       let expandW = 2.0;
         selle = new Map([[`${optionsg.length}`, 2]]);
      for (let b = 0; b < 3; b++) {
         optionsg.push(optionsg.length ^ parseInt(`${expandW}`));
      }
      while (Array.from(selle.keys()).includes(`${expandW}`)) {
          let libapminsightbE = 3.0;
          let fields = String.fromCharCode(101,118,101,110,95,110,95,52,51,0);
          let referrerz: Array<any> = [541, 287, 428];
          let issubB = String.fromCharCode(119,95,55,56,95,105,110,100,101,120,97,98,108,101,0);
          let iconsharev = 4.0;
         expandW *= parseInt(`${expandW}`) + 1;
         libapminsightbE *= parseInt(`${iconsharev}`);
         fields = `${referrerz.length & parseInt(`${libapminsightbE}`)}`;
         referrerz.push(2 >> (Math.min(3, issubB.length)));
         issubB = `${parseInt(`${libapminsightbE}`) % 1}`;
         iconsharev += referrerz.length;
         break;
      }
          let orangeuparrowm: Map<any, any> = new Map([[String.fromCharCode(114,95,55,95,115,116,111,114,101,102,114,97,109,101,0),String.fromCharCode(100,95,56,52,95,109,111,109,101,110,116,115,0)], [String.fromCharCode(112,115,102,98,95,109,95,55,0),String.fromCharCode(114,101,99,118,109,115,103,95,122,95,51,49,0)]]);
         expandW /= Math.max(selle.size << (Math.min(Math.abs(2), 4)), 4);
         orangeuparrowm = new Map([[`${orangeuparrowm.size}`, 2 >> (Math.min(3, Math.abs(orangeuparrowm.size)))]]);
      blacklistU = `${cornerkickb.length << (Math.min(2, mbnativeadvancedR.length))}`;
      break;
   }
    

      tickedY = "3";

    if (formattedLoginValue === "" || loginValueErrMsg !== null) {
      setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
      return;
    }

    try {

   let bridgeA = 9392210.0 <= robotoe;
   do {
       let reactnativeratings8: Map<any, any> = new Map([[String.fromCharCode(122,95,49,57,95,97,99,97,108,99,0),167], [String.fromCharCode(118,95,54,54,95,109,111,100,117,108,97,116,101,0),133], [String.fromCharCode(112,108,97,99,101,104,111,108,100,101,114,95,57,95,52,0),303]]);
       let forwarde = 5.0;
      if (3 >= (reactnativeratings8.size * parseInt(`${forwarde}`)) || 5.62 >= (reactnativeratings8.size * forwarde)) {
         forwarde *= reactnativeratings8.size;
      }
       let selectf: Map<any, any> = new Map([[String.fromCharCode(104,95,56,50,95,104,105,115,116,111,103,114,97,109,115,0),133], [String.fromCharCode(101,95,50,95,98,105,119,103,116,0),672]]);
      for (let r = 0; r < 2; r++) {
         reactnativeratings8 = new Map([[`${reactnativeratings8.size}`, reactnativeratings8.size >> (Math.min(5, Math.abs(parseInt(`${forwarde}`))))]]);
      }
         reactnativeratings8.set(`${forwarde}`, parseInt(`${forwarde}`));
         forwarde /= Math.max(selectf.size, 1);
      let awayiconB = forwarde >= 8603041.0;
      do {
         forwarde -= selectf.size - 3;
         if (awayiconB) {
            break;
         }
      } while (awayiconB && ((forwarde / 2.89) <= 3.43));
      robotoe += mbnativeadvancedR.length & 2;
      if (bridgeA) {
         break;
      }
   } while (bridgeA && (3.6 > robotoe));
      setSubmitting(true);

   while (1 > profileM) {
      profileM %= Math.max(3, parseInt(`${robotoe}`));
      break;
   }

      await mayi_Injury.signinupUser({
        loginType: loginType === 'email' ? 'EMAIL' : 'SMS',
        email: loginType === 'email' ? loginValue : undefined,
        
        phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + formattedLoginValue : undefined,
        countryId: loginType === 'phone' ? countryPhoneSelected?.country_id : undefined,
        referralCode: referralCode,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      setSubmitting(false);

      ticked3.push(cornerkickb.length);
      setLoginValueErrMsg(err);

   while (5 >= (blacklistU.length - parseInt(`${unselected2}`)) || (4.53 - unselected2) >= 2.99) {
      unselected2 /= Math.max(4, mbnativeadvancedR.length);
      break;
   }
      return;
    }

    setSubmitting(false);

       let playH = String.fromCharCode(102,95,50,54,95,98,105,116,100,101,112,116,104,0);
       let libavcodecX = String.fromCharCode(120,112,111,115,117,114,101,95,49,95,55,55,0);
       let t_playern = String.fromCharCode(113,95,49,54,95,105,110,118,0);
         libavcodecX += `${playH.length * libavcodecX.length}`;
      for (let d = 0; d < 2; d++) {
         playH = `${(String.fromCharCode(79,0) == playH ? libavcodecX.length : playH.length)}`;
      }
         t_playern += "3";
       let handlerT = String.fromCharCode(97,114,114,97,121,95,120,95,53,0);
       let larger = String.fromCharCode(112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,95,100,95,49,50,0);
      let penaltymatchiconL = String.fromCharCode(121,118,105,53,55,0) == handlerT;
      do {
         handlerT = "1";
         if (penaltymatchiconL) {
            break;
         }
      } while (penaltymatchiconL && (handlerT.length >= 5));
      if (larger.length >= 5) {
         handlerT = `${larger.length}`;
      }
      let descD = 9513598 >= larger.length;
      do {
         larger = `${handlerT.length}`;
         if (descD) {
            break;
         }
      } while (descD && (3 < larger.length));
      if (libavcodecX.length < playH.length) {
         playH += `${(String.fromCharCode(78,0) == handlerT ? handlerT.length : playH.length)}`;
      }
         t_playern += `${handlerT.length}`;
      mbnativeadvancedR = [mbnativeadvancedR.length * 3];

    dispatch(hideBottomSheetAction());

   if ((ticked3.length | 4) < 1) {
      tickedY += "2";
   }
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

type mayi_FriendsHooks = {
  loginType: 'email' | 'phone',
  loginValue: string,
  referralCode: string,
  loginValueErrMsg: string | null,
  referralCodeErrMsg: string | null,
  isReadTermNCondition: boolean,
  countryPhoneSelected?: mayi_Core,
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
}: mayi_FriendsHooks) => {
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
                source={require("@static/images/profile/heartLibbufferBridge.png")}
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
              source={require("@static/images/invite/assistTextinputHook.png")}
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
                source={require("@static/images/profile/heartLibbufferBridge.png")}
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
              source={require("@static/images/invite/assistTextinputHook.png")}
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
