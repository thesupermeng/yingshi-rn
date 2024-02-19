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
  navigateToProfileScreen,
} from "@redux";
import SpinnerOverlay from "../modal/yys_catalog_edit";
import { PhoneSvg, MailSvg, GmailSvg, DropdownSvg, } from '@static';

import { CountryPhoneList } from "./yys_questicon_connection";
import FastImage from '../common/yys_alert_backwhite';
import { yysPlayPenaltygoal } from "@type";
import { ReadAgreementPrivacyPolicy } from "./yys_sans";

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useQuery } from "@tanstack/react-query";
import { API_DOMAIN } from "@utility";
import { yysHomeinactiveUntick } from "@utility";
import AsyncStorage from "@react-native-async-storage/async-storage";
import yys_giftbutton_footballtrophy from "../../../../Umeng/yys_giftbutton_footballtrophy";
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
  const [isReadTermNCondition, setReadTermNCondition] = useState(false);

  
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
       let lessC = 5.0;
    let whatsappi = false;
    let loadingspinner5 = String.fromCharCode(121,95,53,55,95,115,110,97,109,101,0);
    let p_unlock_ = String.fromCharCode(110,95,52,49,95,101,110,99,114,121,112,116,105,111,110,0);
    let package_y4j = String.fromCharCode(98,95,50,52,95,104,97,108,102,100,0);
    let baidue = String.fromCharCode(97,114,103,118,95,121,95,52,55,0);
    let nativeexL = 3;
    let link6 = 5;
    let textlayoutmanagerC: Array<any> = [683, 590, 149];
    let shoot2 = 1.0;
    let philippinesJ = String.fromCharCode(112,114,111,100,117,99,116,115,95,103,95,51,54,0);
   for (let d = 0; d < 1; d++) {
      p_unlock_ = `${nativeexL}`;
   }
      link6 ^= link6;
       let basketballtrophyQ = String.fromCharCode(107,95,52,51,95,114,101,109,101,109,98,101,114,0);
       let whitetickK: Map<any, any> = new Map([[String.fromCharCode(99,114,97,115,104,101,100,95,100,95,54,50,0),String.fromCharCode(112,95,51,55,95,109,105,108,108,105,115,101,99,111,110,100,115,0)], [String.fromCharCode(97,112,112,114,111,118,97,108,95,118,95,57,52,0),String.fromCharCode(109,111,100,105,102,105,101,114,115,95,98,95,49,48,0)]]);
       let homeloadingf = String.fromCharCode(108,95,52,57,95,117,116,118,105,100,101,111,0);
       let downloader7 = 3.0;
         basketballtrophyQ += "3";
          let loginsuccessI = String.fromCharCode(112,114,111,118,105,100,101,95,118,95,52,52,0);
         homeloadingf += `${(homeloadingf == String.fromCharCode(76,0) ? homeloadingf.length : parseInt(`${downloader7}`))}`;
         loginsuccessI += `${loginsuccessI.length}`;
       let loadingspinnery = String.fromCharCode(100,97,114,107,95,118,95,57,53,0);
       let libjsinspector0 = String.fromCharCode(113,95,56,57,95,100,97,116,97,100,105,114,0);
       let dice8: Array<any> = [String.fromCharCode(105,95,55,95,98,115,111,110,0), String.fromCharCode(100,95,55,56,95,110,115,101,103,109,101,110,116,115,0)];
       let f_hashW: Array<any> = [27, 965];
      loadingspinner5 = `${baidue.length & 3}`;
      whitetickK.set(`${whitetickK.size}`, whitetickK.size);
      lessC += 2 ^ nativeexL;
   while (3 < loadingspinner5.length) {
       let hovero = 4;
       let actionse = 5;
       let statisticsactivea = 4;
          let shootyesgoal0 = String.fromCharCode(116,115,99,99,100,97,116,97,95,111,95,49,56,0);
          let showmoreG = true;
          let floaterM = true;
         actionse ^= shootyesgoal0.length | 2;
         shootyesgoal0 = `${((floaterM ? 5 : 3))}`;
         showmoreG = !floaterM || !floaterM;
       let mbjscommonk = String.fromCharCode(97,99,111,109,112,114,101,115,115,111,114,95,111,95,56,49,0);
       let airbnbstarq = String.fromCharCode(102,105,114,101,95,50,95,57,53,0);
      let custom6 = actionse <= 9341365;
      do {
         actionse >>= Math.min(Math.abs(hovero), 3);
         if (custom6) {
            break;
         }
      } while ((1 > (5 * hovero) && (hovero * 5) > 2) && custom6);
      for (let s = 0; s < 1; s++) {
         statisticsactivea <<= Math.min(Math.abs(hovero), 2);
      }
       let playlist0 = String.fromCharCode(108,95,49,95,109,121,114,110,100,0);
       let sharewhitel = String.fromCharCode(121,95,53,49,95,103,108,111,98,0);
      while ((statisticsactivea ^ 5) == 3 && 1 == (5 ^ statisticsactivea)) {
          let popuph = String.fromCharCode(115,116,97,99,104,95,97,95,51,52,0);
          let langkeyu = 1;
          let sharedP = String.fromCharCode(115,105,102,102,95,117,95,55,51,0);
          let countryO = String.fromCharCode(116,101,108,101,103,114,97,95,104,95,55,57,0);
         hovero >>= Math.min(4, sharedP.length);
         popuph = `${(String.fromCharCode(53,0) == countryO ? langkeyu : countryO.length)}`;
         langkeyu ^= popuph.length;
         sharedP += `${popuph.length}`;
         break;
      }
      let volumeW = airbnbstarq == String.fromCharCode(52,100,53,0);
      do {
          let imagenetworkerrY = String.fromCharCode(120,95,57,51,95,111,114,103,97,110,105,122,97,116,105,111,110,0);
         airbnbstarq = `${actionse % 1}`;
         imagenetworkerrY += `${imagenetworkerrY.length | 3}`;
         if (volumeW) {
            break;
         }
      } while ((1 < airbnbstarq.length) && volumeW);
          let themeC = 0;
          let viewsp: Map<any, any> = new Map([[String.fromCharCode(107,95,52,54,95,109,101,116,97,100,97,116,97,0),String.fromCharCode(113,95,51,50,95,97,118,97,116,97,114,115,0)], [String.fromCharCode(97,114,116,105,102,97,99,116,115,95,101,95,55,54,0),String.fromCharCode(119,95,50,53,95,97,115,115,101,109,98,108,121,0)], [String.fromCharCode(109,95,57,57,95,97,114,109,118,0),String.fromCharCode(115,117,98,109,105,116,95,97,95,51,55,0)]]);
         sharewhitel = `${themeC}`;
         viewsp = new Map([[`${viewsp.size}`, 2]]);
         actionse /= Math.max(4, sharewhitel.length ^ actionse);
      loadingspinner5 += `${parseInt(`${shoot2}`)}`;
      break;
   }
      package_y4j += `${baidue.length}`;

    setloginType('email');

   while ((nativeexL & 2) == 2) {
      lessC += textlayoutmanagerC.length * link6;
      break;
   }
      link6 |= (String.fromCharCode(78,0) == loadingspinner5 ? parseInt(`${shoot2}`) : loadingspinner5.length);
   if (!p_unlock_.includes(`${shoot2}`)) {
       let moditye: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,108,101,109,101,110,116,105,110,103,95,54,95,53,0),849], [String.fromCharCode(112,97,114,115,101,117,116,105,108,115,95,97,95,56,54,0),158]]);
      if (3 < (moditye.size % (Math.max(3, moditye.size)))) {
         moditye.set(`${moditye.size}`, 3);
      }
      let runtimeI = 5949162 <= moditye.size;
      do {
         moditye = new Map([[`${moditye.size}`, 1]]);
         if (runtimeI) {
            break;
         }
      } while (runtimeI && (moditye.get(`${moditye.size}`) == null));
         moditye = new Map([[`${moditye.size}`, moditye.size * moditye.size]]);
      shoot2 *= parseFloat(`${loadingspinner5.length * 2}`);
   }
      package_y4j = `${loadingspinner5.length}`;
       let roundO = String.fromCharCode(97,95,52,55,95,112,114,105,109,97,114,105,101,115,0);
       let gradlewJ = String.fromCharCode(99,95,50,48,95,97,99,99,101,110,116,0);
       let defaultlogoe = 0.0;
         gradlewJ = `${parseInt(`${defaultlogoe}`)}`;
       let untickA: Map<any, any> = new Map([[String.fromCharCode(112,95,49,54,95,103,97,109,109,97,0),950], [String.fromCharCode(98,108,97,107,101,115,95,50,95,56,54,0),791]]);
      for (let n = 0; n < 2; n++) {
         untickA = new Map([[`${defaultlogoe}`, 1 % (Math.max(8, roundO.length))]]);
      }
       let vipsportP = true;
         vipsportP = !vipsportP;
      while ((gradlewJ.length - 5) == 4 && (3.73 + defaultlogoe) == 3.45) {
          let suboutm: Array<any> = [String.fromCharCode(116,114,97,110,115,109,105,115,115,105,111,110,95,56,95,51,50,0), String.fromCharCode(109,105,120,105,110,95,56,95,51,48,0)];
         defaultlogoe *= parseFloat(`${2}`);
         suboutm = [2];
         break;
      }
          let react_ = 2;
         untickA = new Map([[`${defaultlogoe}`, parseInt(`${defaultlogoe}`) << (Math.min(Math.abs(3), 5))]]);
         react_ &= react_;
       let iconarrowleftN = String.fromCharCode(115,104,97,100,101,114,115,95,110,95,53,52,0);
       let clockW = String.fromCharCode(102,95,49,56,95,112,97,114,97,0);
         vipsportP = gradlewJ.length == 98;
      baidue += "3";
   for (let j = 0; j < 3; j++) {
      nativeexL += baidue.length;
   }
    setLoginValue('');

       let shoot8 = 3.0;
       let productR = 2;
       let wifirouterl: Map<any, any> = new Map([[String.fromCharCode(106,95,49,49,95,115,116,111,114,97,98,108,101,0),65], [String.fromCharCode(121,98,114,105,95,97,95,53,57,0),437], [String.fromCharCode(106,95,53,54,95,109,105,110,116,0),67]]);
      while (wifirouterl.get(`${productR}`) == null) {
          let buttonM = 4.0;
          let areaF = 5;
         wifirouterl.set(`${areaF}`, areaF / (Math.max(parseInt(`${buttonM}`), 4)));
         break;
      }
      let fill0 = wifirouterl.size <= 7376384;
      do {
         wifirouterl.set(`${shoot8}`, productR >> (Math.min(1, Math.abs(3))));
         if (fill0) {
            break;
         }
      } while (fill0 && (!Array.from(wifirouterl.values()).includes(productR)));
      let usernameC = 5738798 >= productR;
      do {
         productR >>= Math.min(Math.abs(parseInt(`${shoot8}`) % 1), 2);
         if (usernameC) {
            break;
         }
      } while ((wifirouterl.size >= productR) && usernameC);
          let textinputy = 5.0;
          let redirectZ = 5.0;
          let yellowcirclebgS = 5;
         productR -= 3;
         textinputy += yellowcirclebgS;
         redirectZ *= parseFloat(`${2 * parseInt(`${redirectZ}`)}`);
         yellowcirclebgS *= 2 ^ parseInt(`${textinputy}`);
         wifirouterl.set(`${shoot8}`, 3);
      if (2 <= (2 + wifirouterl.size) || 4.24 <= (shoot8 * 1.78)) {
         wifirouterl.set(`${productR}`, wifirouterl.size % 1);
      }
      while (!Array.from(wifirouterl.values()).includes(productR)) {
         productR %= Math.max(5, parseInt(`${shoot8}`) - productR);
         break;
      }
      while ((productR / (Math.max(10, shoot8))) == 3.20) {
         shoot8 -= productR / 2;
         break;
      }
      let airbnbstar5 = 7440686 <= productR;
      do {
         productR ^= 3;
         if (airbnbstar5) {
            break;
         }
      } while (airbnbstar5 && ((3.18 + shoot8) >= 2.73));
      package_y4j += `${(String.fromCharCode(95,0) == p_unlock_ ? p_unlock_.length : wifirouterl.size)}`;
   for (let q = 0; q < 2; q++) {
      lessC /= Math.max(5, (p_unlock_ == String.fromCharCode(50,0) ? p_unlock_.length : parseInt(`${shoot2}`)));
   }
      baidue = `${link6}`;
      package_y4j += `${parseInt(`${shoot2}`)}`;
      shoot2 -= parseFloat(`${link6 & 1}`);
      whatsappi = package_y4j.length > p_unlock_.length;
    setReferralCode('');

   let homeactiveI = whatsappi ? !whatsappi : whatsappi;
   do {
       let iconfeedback0 = String.fromCharCode(118,95,55,51,95,117,116,102,0);
       let orangeticku = String.fromCharCode(118,95,57,56,95,99,111,110,115,116,114,97,105,110,116,0);
       let appsn = String.fromCharCode(97,95,57,54,95,100,111,109,97,105,110,115,0);
      if (1 <= appsn.length) {
         iconfeedback0 += `${2 + appsn.length}`;
      }
         iconfeedback0 += `${3 - appsn.length}`;
      whatsappi = (iconfeedback0.length >> (Math.min(1, textlayoutmanagerC.length))) > 43;
      if (homeactiveI) {
         break;
      }
   } while (homeactiveI && (whatsappi));
   let defaultfootballbgV = textlayoutmanagerC.length <= 8852504;
   do {
      textlayoutmanagerC = [link6];
      if (defaultfootballbgV) {
         break;
      }
   } while ((textlayoutmanagerC.length == 2 || (textlayoutmanagerC.length ^ 2) == 3) && defaultfootballbgV);
       let inviteH = String.fromCharCode(112,95,50,56,95,97,110,97,108,121,115,105,115,0);
      if (inviteH != inviteH) {
         inviteH += `${2 - inviteH.length}`;
      }
       let hejiA = 5.0;
       let fastforward8 = 2.0;
         fastforward8 /= Math.max(2, 3);
      p_unlock_ = `${((whatsappi ? 3 : 3) % (Math.max(parseInt(`${lessC}`), 6)))}`;
      package_y4j = `${3 / (Math.max(1, p_unlock_.length))}`;
      loadingspinner5 += "2";
       let stringn = 2.0;
       let bridges: Array<any> = [899, 358, 768];
       let graphF = 2.0;
      let teamdetailsbgv = 7801054.0 <= graphF;
      do {
         graphF *= parseFloat(`${bridges.length / (Math.max(1, 7))}`);
         if (teamdetailsbgv) {
            break;
         }
      } while ((1 == bridges.length) && teamdetailsbgv);
      if ((4.46 * graphF) == 5.4 || 2 == (3 * bridges.length)) {
         bridges = [bridges.length];
      }
          let serviceB: Array<any> = [447, 740];
         graphF -= parseFloat(`${serviceB.length}`);
      let privatechatbgJ = stringn <= 8955247.0;
      do {
          let elementsT: Map<any, any> = new Map([[String.fromCharCode(105,110,118,97,108,105,100,95,120,95,52,50,0),String.fromCharCode(115,99,97,108,97,98,105,108,105,116,121,95,53,95,51,0)], [String.fromCharCode(109,95,56,51,95,97,112,115,0),String.fromCharCode(104,95,51,48,0)], [String.fromCharCode(100,95,57,53,95,105,110,115,116,97,108,108,101,100,0),String.fromCharCode(97,115,121,110,99,95,48,95,56,48,0)]]);
         stringn += parseFloat(`${parseInt(`${graphF}`)}`);
         elementsT.set(`${elementsT.size}`, elementsT.size);
         if (privatechatbgJ) {
            break;
         }
      } while (privatechatbgJ && ((graphF - stringn) == 4.34 && 1.84 == (4.34 - graphF)));
      let sharemodal4 = graphF >= 8610671.0;
      do {
         graphF -= parseFloat(`${1}`);
         if (sharemodal4) {
            break;
         }
      } while (sharemodal4 && (bridges.length == 1));
      for (let o = 0; o < 1; o++) {
         graphF *= parseFloat(`${2 + bridges.length}`);
      }
         bridges.push(parseInt(`${graphF}`));
      if ((stringn - 4) == 4.82) {
         graphF /= Math.max(parseFloat(`${parseInt(`${stringn}`)}`), 2);
      }
         graphF += parseFloat(`${parseInt(`${stringn}`)}`);
      whatsappi = package_y4j.length > loadingspinner5.length;
    setLoginValueErrMsg(null);

   for (let r = 0; r < 2; r++) {
       let iconrightorangev = String.fromCharCode(98,95,53,95,101,110,117,109,0);
          let mintegralZ = false;
          let hooksp = String.fromCharCode(105,110,116,101,110,116,95,53,95,55,49,0);
          let yingH: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,100,102,114,97,109,101,95,108,95,55,57,0),595], [String.fromCharCode(120,95,56,53,95,98,114,97,99,101,0),379]]);
         iconrightorangev += "3";
         mintegralZ = hooksp == String.fromCharCode(72,0);
         hooksp += `${((mintegralZ ? 4 : 4) << (Math.min(hooksp.length, 1)))}`;
         yingH = new Map([[hooksp, (hooksp == String.fromCharCode(76,0) ? hooksp.length : (mintegralZ ? 5 : 4))]]);
       let libapminsightah = String.fromCharCode(118,95,56,52,95,111,112,116,105,109,105,122,101,0);
         iconrightorangev += `${(String.fromCharCode(115,0) == iconrightorangev ? iconrightorangev.length : libapminsightah.length)}`;
      p_unlock_ = `${parseInt(`${shoot2}`) - textlayoutmanagerC.length}`;
   }
   for (let f = 0; f < 1; f++) {
       let sellk = 4.0;
       let launchX = String.fromCharCode(109,105,110,105,109,97,108,108,121,95,55,95,53,50,0);
       let defaultfootballbgT = String.fromCharCode(102,95,49,48,48,95,110,100,111,116,115,0);
         launchX = `${launchX.length}`;
         sellk *= parseInt(`${sellk}`);
      for (let x = 0; x < 3; x++) {
         launchX = `${defaultfootballbgT.length >> (Math.min(3, launchX.length))}`;
      }
       let unselectedD = String.fromCharCode(116,95,52,50,95,99,111,111,114,100,105,110,97,116,101,115,0);
      let vipsporti = sellk <= 8798214.0;
      do {
         sellk += (launchX == String.fromCharCode(72,0) ? unselectedD.length : launchX.length);
         if (vipsporti) {
            break;
         }
      } while (vipsporti && (!defaultfootballbgT.endsWith(`${sellk}`)));
       let collectionM = String.fromCharCode(120,95,51,57,95,105,110,116,101,114,112,111,108,97,116,101,100,0);
         unselectedD += `${collectionM.length}`;
          let spinnerz = String.fromCharCode(118,95,51,56,95,114,97,100,105,120,0);
          let foreground_ = true;
         launchX += `${spinnerz.length}`;
         spinnerz += `${((foreground_ ? 1 : 1))}`;
      while (1 <= (1 | launchX.length)) {
         launchX = "3";
         break;
      }
      shoot2 /= Math.max(3, parseFloat(`${nativeexL}`));
   }
   while (package_y4j.length >= 4) {
      loadingspinner5 = `${loadingspinner5.length}`;
      break;
   }
       let icondefaultthumbnailT = String.fromCharCode(115,108,105,100,101,95,107,95,54,0);
       let h_managerJ = String.fromCharCode(122,95,56,95,107,98,112,115,0);
       let overlayi = String.fromCharCode(101,118,101,114,121,98,111,100,121,95,113,95,50,48,0);
      let dycreatorS = icondefaultthumbnailT.length >= 8840794;
      do {
         icondefaultthumbnailT = `${1 * h_managerJ.length}`;
         if (dycreatorS) {
            break;
         }
      } while (dycreatorS && (icondefaultthumbnailT == String.fromCharCode(113,0) && 1 <= h_managerJ.length));
       let countdowns = 0.0;
       let selectionb = 1.0;
         h_managerJ = `${parseInt(`${countdowns}`)}`;
         overlayi = `${parseInt(`${selectionb}`) & 1}`;
         h_managerJ += `${h_managerJ.length & 2}`;
       let leftc = 5.0;
       let iconwechatn = 4.0;
         icondefaultthumbnailT = `${overlayi.length}`;
         countdowns += parseInt(`${selectionb}`) - parseInt(`${countdowns}`);
          let predictionbannersharedo = 3;
          let styles2 = 3;
          let downloaderN = 5.0;
         selectionb += (String.fromCharCode(82,0) == icondefaultthumbnailT ? icondefaultthumbnailT.length : parseInt(`${leftc}`));
         predictionbannersharedo += predictionbannersharedo - styles2;
         styles2 *= predictionbannersharedo;
         downloaderN *= 2;
      p_unlock_ = `${loadingspinner5.length}`;
       let descJ = String.fromCharCode(111,95,55,56,95,112,105,120,101,108,117,116,105,108,115,0);
         descJ += `${2 & descJ.length}`;
         descJ += `${descJ.length << (Math.min(1, descJ.length))}`;
      let matchdetailbg3 = 6835542 >= descJ.length;
      do {
         descJ += `${descJ.length}`;
         if (matchdetailbg3) {
            break;
         }
      } while (matchdetailbg3 && (3 == descJ.length));
      whatsappi = p_unlock_.length <= 62;
   for (let m = 0; m < 2; m++) {
      shoot2 += parseFloat(`${link6 + baidue.length}`);
   }
    setReferralCodeErrMsg(null);

   let issubw = 7950264 >= nativeexL;
   do {
      nativeexL += ((whatsappi ? 1 : 1) << (Math.min(textlayoutmanagerC.length, 3)));
      if (issubw) {
         break;
      }
   } while ((baidue.length > 4) && issubw);
   let details9 = whatsappi ? !whatsappi : whatsappi;
   do {
      whatsappi = p_unlock_.length < 30;
      if (details9) {
         break;
      }
   } while ((whatsappi && package_y4j.length < 4) && details9);
   if ((lessC / (Math.max(4.62, 2))) == 3.51 && 3 == (parseInt(`${lessC}`) / 5)) {
       let redirectC = 5.0;
       let umengl = 5.0;
       let plashD = 0.0;
       let black5 = String.fromCharCode(99,104,97,114,97,99,116,101,114,115,95,110,95,55,52,0);
       let typinge = String.fromCharCode(105,95,50,54,95,109,105,110,117,115,0);
          let ccdfbdabcabbbedbV = 3.0;
          let stepR = String.fromCharCode(106,95,50,56,95,104,97,108,102,0);
          let unreadu = String.fromCharCode(97,95,57,57,95,116,105,109,101,105,110,102,111,114,99,101,0);
         plashD /= Math.max(1, parseFloat(`${parseInt(`${redirectC}`) ^ 3}`));
         ccdfbdabcabbbedbV /= Math.max(4, parseFloat(`${parseInt(`${ccdfbdabcabbbedbV}`)}`));
         stepR = `${(String.fromCharCode(101,0) == stepR ? stepR.length : unreadu.length)}`;
         unreadu = `${2 + unreadu.length}`;
       let assistK = true;
       let components6 = false;
          let configure5: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,105,101,110,116,95,121,95,50,50,0),false ], [String.fromCharCode(97,95,51,49,95,102,111,117,110,100,0),true ]]);
          let bellq: Array<any> = [594, 659];
         components6 = ((bellq.length - (!assistK ? bellq.length : 32)) < 32);
         configure5.set(`${configure5.size}`, configure5.size);
         typinge = `${(parseInt(`${redirectC}`) & (assistK ? 4 : 5))}`;
         plashD /= Math.max(3, (parseFloat(`${1 / (Math.max((assistK ? 3 : 4), 3))}`)));
      let sentry7 = black5.length <= 8662296;
      do {
          let orangeV = true;
          let manifest5 = 3.0;
         black5 += `${(String.fromCharCode(71,0) == typinge ? parseInt(`${redirectC}`) : typinge.length)}`;
         orangeV = !orangeV || 45.3 <= manifest5;
         manifest5 -= (parseFloat(`${(orangeV ? 3 : 2) + parseInt(`${manifest5}`)}`));
         if (sentry7) {
            break;
         }
      } while ((2.41 < (redirectC * black5.length) || (black5.length * redirectC) < 2.41) && sentry7);
         plashD -= (parseFloat(`${typinge == String.fromCharCode(88,0) ? parseInt(`${plashD}`) : typinge.length}`));
       let telemetryh: Array<any> = [868, 972];
         typinge = `${parseInt(`${plashD}`) % (Math.max(1, typinge.length))}`;
         telemetryh.push(2 + parseInt(`${redirectC}`));
      for (let w = 0; w < 3; w++) {
         assistK = black5.length <= 51;
      }
      let libloggerI = typinge == String.fromCharCode(120,110,101,49,57,0);
      do {
         typinge += `${(typinge == String.fromCharCode(111,0) ? typinge.length : (assistK ? 1 : 3))}`;
         if (libloggerI) {
            break;
         }
      } while (libloggerI && (typinge.length <= 5));
         black5 = `${parseInt(`${redirectC}`) - 2}`;
         plashD /= Math.max((parseFloat(`${String.fromCharCode(100,0) == typinge ? parseInt(`${redirectC}`) : typinge.length}`)), 3);
      for (let f = 0; f < 1; f++) {
         typinge += `${telemetryh.length | parseInt(`${plashD}`)}`;
      }
      package_y4j += `${(parseInt(`${redirectC}`) ^ (whatsappi ? 3 : 2))}`;
      umengl += parseFloat(`${3}`);
   }
       let homeloadingo = String.fromCharCode(104,95,57,56,95,105,104,116,120,0);
      if (homeloadingo.endsWith(homeloadingo)) {
         homeloadingo += `${homeloadingo.length}`;
      }
      if (!homeloadingo.includes(`${homeloadingo.length}`)) {
         homeloadingo = `${homeloadingo.length}`;
      }
      for (let l = 0; l < 1; l++) {
         homeloadingo += `${homeloadingo.length / (Math.max(homeloadingo.length, 9))}`;
      }
      package_y4j += `${loadingspinner5.length}`;
       let temperatureQ = String.fromCharCode(107,95,55,48,95,109,116,97,102,0);
          let libglogf = String.fromCharCode(100,101,110,105,101,100,95,113,95,52,57,0);
         temperatureQ += `${2 * temperatureQ.length}`;
         libglogf += "1";
         temperatureQ = "3";
         temperatureQ += `${(temperatureQ == String.fromCharCode(83,0) ? temperatureQ.length : temperatureQ.length)}`;
      link6 <<= Math.min(Math.abs(2), 3);
   let yellowR = String.fromCharCode(108,118,57,100,109,98,51,0) == baidue;
   do {
      baidue += `${(nativeexL >> (Math.min(2, Math.abs((whatsappi ? 4 : 1)))))}`;
      if (yellowR) {
         break;
      }
   } while ((baidue.length < 3) && yellowR);
    setReadTermNCondition(false);

   while (4 > p_unlock_.length) {
      p_unlock_ = `${link6 >> (Math.min(textlayoutmanagerC.length, 5))}`;
      break;
   }
   let privilegeM = 9235439 <= textlayoutmanagerC.length;
   do {
      textlayoutmanagerC = [1];
      if (privilegeM) {
         break;
      }
   } while ((!whatsappi && 1 == (textlayoutmanagerC.length % 2)) && privilegeM);
      shoot2 /= Math.max(1, (parseFloat(`${textlayoutmanagerC.length * (whatsappi ? 5 : 1)}`)));
   if (3 >= p_unlock_.length || !whatsappi) {
       let reactZ = 0.0;
       let codee = 4;
       let grayr = 3.0;
         codee <<= Math.min(3, Math.abs(2));
      if ((codee / 1) > 3) {
         grayr /= Math.max(parseInt(`${grayr}`), 5);
      }
      if (2.45 <= (grayr / 2.21) && 4.45 <= (2.21 / (Math.max(6, grayr)))) {
         reactZ /= Math.max(codee / (Math.max(6, parseInt(`${grayr}`))), 1);
      }
         codee <<= Math.min(Math.abs(parseInt(`${grayr}`)), 4);
         reactZ -= parseInt(`${grayr}`) ^ codee;
      for (let y = 0; y < 1; y++) {
          let liveshare6 = String.fromCharCode(103,108,111,98,97,108,116,101,109,95,51,95,56,0);
          let mini_ = 5.0;
          let mailV = String.fromCharCode(101,95,49,53,95,103,101,116,111,112,116,0);
          let tickedQ = String.fromCharCode(116,104,114,101,97,100,115,97,102,101,95,52,95,56,55,0);
         codee ^= 3;
         liveshare6 = `${liveshare6.length ^ 1}`;
         mini_ -= parseFloat(`${mailV.length & liveshare6.length}`);
         mailV += `${tickedQ.length * 2}`;
         tickedQ += `${liveshare6.length}`;
      }
      if (2.19 == (reactZ * codee) || 2.19 == (reactZ * codee)) {
          let renewr = 2;
          let reactnativeratings6 = String.fromCharCode(102,114,97,103,109,101,110,116,95,110,95,54,56,0);
         codee *= 1;
         renewr |= reactnativeratings6.length;
         reactnativeratings6 += `${renewr}`;
      }
         codee /= Math.max(parseInt(`${reactZ}`), 1);
      if (3 == (3 & codee)) {
          let iconbellactiveI = true;
          let iconQ = String.fromCharCode(103,114,97,112,104,105,99,115,95,107,95,56,55,0);
         codee <<= Math.min(Math.abs(parseInt(`${reactZ}`)), 3);
         iconbellactiveI = !iconQ.endsWith(`${iconbellactiveI}`);
         iconQ += `${((iconbellactiveI ? 2 : 4))}`;
      }
      p_unlock_ = `${nativeexL}`;
   }
   if ((3.9 * lessC) < 1.74) {
      whatsappi = (parseInt(`${lessC}`) + loadingspinner5.length) >= 11;
   }
   while (5 < (textlayoutmanagerC.length + baidue.length) && (baidue.length + textlayoutmanagerC.length) < 5) {
      textlayoutmanagerC.push(baidue.length);
      break;
   }

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
       let libruntimeexecutorG = 0;
    let sinas = 3.0;
    let typingloadingQ = 2.0;
    let selectionc = String.fromCharCode(109,101,116,97,115,111,117,110,100,95,114,95,54,52,0);
    let largesoundq: Array<any> = [96, 246];
    let dragR = 5;
    let weiboc = 3.0;
    let rootb = 0.0;
    let filled7 = String.fromCharCode(104,95,49,52,95,100,117,112,115,111,114,116,0);
    let commonI: Map<any, any> = new Map([[String.fromCharCode(101,115,99,97,112,105,110,103,95,57,95,51,55,0),429], [String.fromCharCode(106,95,55,51,95,101,113,117,105,108,105,98,114,105,117,109,0),676], [String.fromCharCode(115,101,101,107,105,110,103,95,119,95,53,52,0),533]]);
    let stepc = 1.0;
    let iconcloser: Array<any> = [334, 666];
    let indexH = String.fromCharCode(97,115,115,101,109,98,108,101,95,118,95,50,55,0);
    let analyticsl = String.fromCharCode(112,105,99,116,95,104,95,54,57,0);
    let predictionarrowM = 0.0;
   if (!largesoundq.includes(stepc)) {
      stepc += parseInt(`${typingloadingQ}`);
   }
      sinas += parseInt(`${weiboc}`) % 3;
   for (let s = 0; s < 3; s++) {
       let baidu6 = String.fromCharCode(113,122,98,105,110,95,55,95,57,0);
       let sharedl: Map<any, any> = new Map([[String.fromCharCode(116,101,109,112,111,95,116,95,49,49,0),740], [String.fromCharCode(117,95,57,49,95,99,111,112,121,118,0),940], [String.fromCharCode(107,95,49,56,95,108,111,99,97,108,105,122,97,116,105,111,110,0),712]]);
       let buildp: Map<any, any> = new Map([[String.fromCharCode(98,95,50,95,109,101,97,110,0),505], [String.fromCharCode(103,95,53,56,95,115,101,103,105,100,0),675], [String.fromCharCode(101,110,111,117,103,104,95,50,95,50,50,0),150]]);
       let switch_e6A = String.fromCharCode(111,95,57,55,95,105,109,112,108,0);
       let downloadedX = String.fromCharCode(111,95,57,56,95,97,115,104,105,110,103,0);
         downloadedX += `${downloadedX.length}`;
         baidu6 = `${baidu6.length}`;
      while ((baidu6.length >> (Math.min(Math.abs(4), 5))) > 1) {
         baidu6 += `${sharedl.size << (Math.min(2, Math.abs(buildp.size)))}`;
         break;
      }
         switch_e6A = `${2 + downloadedX.length}`;
         downloadedX += `${baidu6.length % 3}`;
         downloadedX = `${switch_e6A.length & downloadedX.length}`;
      if (2 <= (sharedl.size / 2)) {
         sharedl.set(switch_e6A, sharedl.size);
      }
         switch_e6A += "2";
         sharedl = new Map([[downloadedX, downloadedX.length]]);
          let brightnessu = String.fromCharCode(115,119,105,112,101,95,110,95,54,56,0);
          let inouttargetredV = 1.0;
          let zhubo7 = String.fromCharCode(118,95,51,56,95,119,101,105,0);
         buildp = new Map([[`${sharedl.size}`, sharedl.size]]);
         brightnessu = `${brightnessu.length ^ parseInt(`${inouttargetredV}`)}`;
         inouttargetredV *= parseFloat(`${parseInt(`${inouttargetredV}`) << (Math.min(zhubo7.length, 1))}`);
         zhubo7 = "2";
         downloadedX += `${buildp.size}`;
      for (let d = 0; d < 2; d++) {
         buildp = new Map([[downloadedX, switch_e6A.length]]);
      }
         downloadedX = `${(baidu6 == String.fromCharCode(110,0) ? baidu6.length : sharedl.size)}`;
      if (2 > (4 >> (Math.min(2, Math.abs(sharedl.size))))) {
         sharedl.set(`${baidu6}`, 3);
      }
         buildp = new Map([[`${sharedl.size}`, sharedl.size]]);
      typingloadingQ /= Math.max(2, commonI.size);
   }
      selectionc += `${selectionc.length}`;
   let kuaishoug = 7604677.0 <= stepc;
   do {
      stepc += 3;
      if (kuaishoug) {
         break;
      }
   } while (((5.96 - stepc) > 5.0) && kuaishoug);
   if (2 < (libruntimeexecutorG % (Math.max(iconcloser.length, 7)))) {
       let logoutE: Array<any> = [250, 529, 973];
      if ((5 * logoutE.length) < 3) {
          let showlessb: Map<any, any> = new Map([[String.fromCharCode(114,111,120,121,95,97,95,50,53,0),391], [String.fromCharCode(115,95,50,51,95,104,101,97,100,115,0),30], [String.fromCharCode(118,95,56,49,95,105,108,108,105,113,97,0),830]]);
          let hoverZ = String.fromCharCode(105,95,52,49,95,117,110,107,101,121,101,100,0);
          let left0 = true;
          let libfbjnip = String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,95,52,95,53,0);
         logoutE = [1 * showlessb.size];
         showlessb.set(hoverZ, hoverZ.length & libfbjnip.length);
         left0 = 96 > hoverZ.length;
         libfbjnip = `${hoverZ.length}`;
      }
      for (let x = 0; x < 3; x++) {
         logoutE = [2 * logoutE.length];
      }
         logoutE = [3 - logoutE.length];
      iconcloser = [parseInt(`${sinas}`)];
   }
   if (filled7.length == sinas) {
       let predictionlossS = true;
         predictionlossS = (predictionlossS ? !predictionlossS : predictionlossS);
      for (let z = 0; z < 3; z++) {
         predictionlossS = !predictionlossS;
      }
       let fastforwardK: Array<any> = [796, 851];
      sinas -= parseInt(`${stepc}`) / 1;
   }
   if (2.63 == stepc) {
      sinas -= (indexH == String.fromCharCode(88,0) ? dragR : indexH.length);
   }
   while (!selectionc.includes(`${commonI.size}`)) {
      selectionc += `${filled7.length * 1}`;
      break;
   }
      indexH = `${dragR}`;
   if (rootb < 1.40) {
       let iconstarX: Map<any, any> = new Map([[String.fromCharCode(99,114,111,112,95,51,95,56,52,0),120], [String.fromCharCode(119,95,56,54,95,100,97,116,101,115,0),566]]);
       let thumbnailW = String.fromCharCode(104,95,57,56,95,115,105,110,113,102,0);
       let libcrashsdkk = 4.0;
         thumbnailW = `${thumbnailW.length}`;
       let whitebellk = String.fromCharCode(120,109,108,95,109,95,50,52,0);
       let orange2 = String.fromCharCode(109,95,51,48,95,115,117,98,120,0);
         thumbnailW += "1";
      if (iconstarX.get(`${libcrashsdkk}`) == null) {
         libcrashsdkk += 3;
      }
         iconstarX.set(thumbnailW, 2);
          let reactnavigationm = 0;
          let chatroombackgroundS: Map<any, any> = new Map([[String.fromCharCode(114,95,49,48,48,95,110,112,112,116,114,97,110,115,112,111,115,101,0),632], [String.fromCharCode(122,95,51,49,95,100,99,116,0),119], [String.fromCharCode(114,97,110,103,101,99,111,100,101,114,95,119,95,54,55,0),97]]);
         thumbnailW += `${(String.fromCharCode(48,0) == orange2 ? orange2.length : whitebellk.length)}`;
         reactnavigationm >>= Math.min(5, Math.abs(chatroombackgroundS.size));
         chatroombackgroundS = new Map([[`${chatroombackgroundS.size}`, 2]]);
      for (let p = 0; p < 1; p++) {
         orange2 = `${whitebellk.length % (Math.max(2, parseInt(`${libcrashsdkk}`)))}`;
      }
       let placementm = true;
       let placeholderf = false;
         whitebellk = `${(String.fromCharCode(103,0) == whitebellk ? whitebellk.length : (placeholderf ? 3 : 3))}`;
      iconcloser = [(String.fromCharCode(98,0) == selectionc ? selectionc.length : largesoundq.length)];
   }
      typingloadingQ -= (filled7 == String.fromCharCode(97,0) ? parseInt(`${weiboc}`) : filled7.length);
   for (let s = 0; s < 2; s++) {
      typingloadingQ /= Math.max(2, 1);
   }
   while (!analyticsl.includes(`${filled7.length}`)) {
      analyticsl = `${selectionc.length}`;
      break;
   }
      dragR ^= (filled7 == String.fromCharCode(99,0) ? filled7.length : parseInt(`${weiboc}`));
   while (analyticsl.includes(`${sinas}`)) {
      analyticsl = `${analyticsl.length}`;
      break;
   }
   for (let a = 0; a < 2; a++) {
       let matchesT = 4.0;
       let loginc: Array<any> = [String.fromCharCode(102,95,55,56,95,115,112,101,101,100,117,112,0), String.fromCharCode(103,95,57,49,95,99,111,100,101,99,112,114,105,118,0)];
         loginc = [loginc.length | parseInt(`${matchesT}`)];
      for (let q = 0; q < 2; q++) {
         loginc = [parseInt(`${matchesT}`) + 3];
      }
          let runtimeschedulerr = String.fromCharCode(116,104,105,114,100,95,56,95,55,52,0);
          let vignette9 = String.fromCharCode(117,95,54,54,95,117,99,104,97,114,0);
          let suggestionG = String.fromCharCode(115,117,98,115,101,103,109,101,110,116,95,100,95,56,50,0);
         loginc.push(2 + loginc.length);
         runtimeschedulerr += `${suggestionG.length}`;
         vignette9 = `${vignette9.length}`;
         suggestionG = `${(vignette9 == String.fromCharCode(76,0) ? vignette9.length : suggestionG.length)}`;
       let iconlogoutZ: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,119,97,110,99,101,95,114,95,56,52,0),String.fromCharCode(105,95,52,53,95,105,110,100,101,110,116,97,116,105,111,110,0)], [String.fromCharCode(115,116,101,108,108,97,114,95,102,95,56,0),String.fromCharCode(113,117,97,110,116,115,95,106,95,53,53,0)]]);
      if ((matchesT + 4.23) == 1.70 || 5.9 == (matchesT + 4.23)) {
         loginc = [iconlogoutZ.size];
      }
      if (!Array.from(iconlogoutZ.keys()).includes(`${matchesT}`)) {
         iconlogoutZ = new Map([[`${iconlogoutZ.size}`, iconlogoutZ.size % 2]]);
      }
      indexH = "3";
   }
       let diceQ = String.fromCharCode(99,111,109,109,105,116,116,101,114,95,117,95,53,49,0);
         diceQ = `${diceQ.length}`;
      for (let v = 0; v < 2; v++) {
         diceQ += `${(String.fromCharCode(51,0) == diceQ ? diceQ.length : diceQ.length)}`;
      }
      if (!diceQ.includes(diceQ)) {
         diceQ += `${diceQ.length >> (Math.min(Math.abs(1), 2))}`;
      }
      sinas += dragR - selectionc.length;
   let iconrefreshz = commonI.size <= 5221088;
   do {
      commonI.set(`${stepc}`, dragR ^ parseInt(`${stepc}`));
      if (iconrefreshz) {
         break;
      }
   } while (iconrefreshz && (!Array.from(commonI.values()).includes(iconcloser.length)));
   if (1 > (indexH.length << (Math.min(Math.abs(5), 4)))) {
       let backward4 = String.fromCharCode(117,95,52,52,95,116,101,97,109,115,0);
       let benefitD = 0;
      let iconfeedbackx = benefitD >= 8274840;
      do {
         benefitD -= 2 & backward4.length;
         if (iconfeedbackx) {
            break;
         }
      } while (((5 & backward4.length) == 5) && iconfeedbackx);
         backward4 += `${backward4.length}`;
       let termsq = String.fromCharCode(112,95,57,52,95,99,97,110,99,101,108,108,101,114,0);
       let assetsb: Array<any> = [503, 51, 898];
          let friendsE = String.fromCharCode(98,95,55,57,95,116,97,117,0);
          let chinasameJ = String.fromCharCode(110,95,57,50,95,102,108,111,119,0);
         assetsb = [benefitD];
         friendsE += `${(chinasameJ == String.fromCharCode(115,0) ? chinasameJ.length : friendsE.length)}`;
      if (4 < (termsq.length | 1) && 1 < (assetsb.length | termsq.length)) {
         termsq = `${assetsb.length}`;
      }
      dragR *= (String.fromCharCode(54,0) == filled7 ? filled7.length : parseInt(`${weiboc}`));
   }
      selectionc += `${2 - parseInt(`${sinas}`)}`;
   while (4.47 >= (2.39 + weiboc) && (commonI.size ^ 3) >= 2) {
       let homeplayeri = 2.0;
       let brightnessY = String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,95,106,95,57,50,0);
       let securityS = 3.0;
       let bottomP: Array<any> = [142, 621];
         homeplayeri /= Math.max(parseInt(`${homeplayeri}`), 2);
      let icondefaultthumbnailm = brightnessY == String.fromCharCode(55,102,51,0);
      do {
          let componentregistry8: Map<any, any> = new Map([[String.fromCharCode(97,102,102,101,99,116,95,54,95,49,48,0),String.fromCharCode(118,95,50,54,95,118,105,98,114,97,110,99,101,0)], [String.fromCharCode(117,112,103,114,97,100,101,100,95,113,95,53,51,0),String.fromCharCode(109,112,101,103,100,97,116,97,95,113,95,56,48,0)]]);
          let friends4 = 1;
          let watchnowbgh: Map<any, any> = new Map([[String.fromCharCode(112,95,52,55,95,98,95,56,48,0),113], [String.fromCharCode(97,108,108,111,119,101,100,95,56,95,56,50,0),513]]);
         brightnessY = `${parseInt(`${homeplayeri}`) * brightnessY.length}`;
         componentregistry8 = new Map([[`${watchnowbgh.size}`, 3 & watchnowbgh.size]]);
         friends4 %= Math.max(componentregistry8.size * watchnowbgh.size, 3);
         if (icondefaultthumbnailm) {
            break;
         }
      } while (icondefaultthumbnailm && ((brightnessY.length + parseInt(`${securityS}`)) <= 2));
         brightnessY = `${bottomP.length - 1}`;
          let matha: Array<any> = [633, 453, 138];
         securityS /= Math.max(parseFloat(`${brightnessY.length}`), 3);
         matha.push(matha.length & matha.length);
         securityS /= Math.max(parseFloat(`${brightnessY.length >> (Math.min(5, bottomP.length))}`), 2);
         bottomP.push(parseInt(`${securityS}`));
         securityS *= parseFloat(`${parseInt(`${homeplayeri}`) + bottomP.length}`);
      while ((5 / (Math.max(10, securityS))) == 2.58) {
         homeplayeri -= (String.fromCharCode(72,0) == brightnessY ? brightnessY.length : parseInt(`${homeplayeri}`));
         break;
      }
      while (parseFloat(`${bottomP.length}`) > securityS) {
          let readD = 3;
         bottomP.push(parseInt(`${homeplayeri}`));
         readD /= Math.max(2, readD);
         break;
      }
      while (5.79 <= (3.79 / (Math.max(2, securityS)))) {
          let ewardedh = String.fromCharCode(119,95,53,50,95,111,103,103,108,101,0);
         brightnessY = `${(String.fromCharCode(106,0) == ewardedh ? parseInt(`${homeplayeri}`) : ewardedh.length)}`;
         break;
      }
       let anythinkC = String.fromCharCode(100,101,99,105,115,105,111,110,95,57,95,57,53,0);
       let libimagepipelineE = String.fromCharCode(102,95,56,52,95,101,121,101,0);
      weiboc += parseInt(`${homeplayeri}`);
      break;
   }
       let logoutB: Array<any> = [String.fromCharCode(101,110,113,117,101,117,101,100,95,56,95,52,53,0), String.fromCharCode(100,105,102,102,101,114,101,110,116,95,55,95,55,57,0), String.fromCharCode(109,101,115,115,97,103,105,110,103,95,120,95,52,52,0)];
       let libjsinspectorE = 0;
      let humidityY = 9848059 >= libjsinspectorE;
      do {
          let arrowdownQ: Array<any> = [716, 181, 661];
         libjsinspectorE <<= Math.min(3, Math.abs(3 | libjsinspectorE));
         arrowdownQ = [arrowdownQ.length / 3];
         if (humidityY) {
            break;
         }
      } while (humidityY && ((libjsinspectorE >> (Math.min(Math.abs(1), 4))) == 4 && (libjsinspectorE >> (Math.min(Math.abs(1), 3))) == 4));
         libjsinspectorE &= 1;
      let text6 = libjsinspectorE <= 7815143;
      do {
         libjsinspectorE *= 1;
         if (text6) {
            break;
         }
      } while (text6 && (5 <= libjsinspectorE));
      if ((libjsinspectorE | logoutB.length) <= 4) {
          let basketballmatchdetailbg2 = String.fromCharCode(119,114,105,116,101,95,108,95,51,0);
          let canvasd = 5;
          let redgoalM = true;
          let xnewsN: Map<any, any> = new Map([[String.fromCharCode(97,108,97,98,97,115,116,101,114,95,115,95,52,51,0),true ], [String.fromCharCode(101,95,52,54,95,101,110,117,109,101,114,97,116,111,114,0),false ]]);
          let eighteen8: Array<any> = [533, 665];
         logoutB = [logoutB.length % (Math.max(basketballmatchdetailbg2.length, 10))];
         basketballmatchdetailbg2 = `${(canvasd * (redgoalM ? 3 : 3))}`;
         canvasd ^= xnewsN.size;
         xnewsN = new Map([[`${redgoalM}`, 2 << (Math.min(Math.abs(canvasd), 3))]]);
         eighteen8 = [xnewsN.size << (Math.min(Math.abs(1), 1))];
      }
      if ((libjsinspectorE - 3) < 1) {
          let rulesW = true;
         logoutB = [2];
         rulesW = !rulesW;
      }
         logoutB.push(logoutB.length);
      dragR %= Math.max(selectionc.length | libruntimeexecutorG, 4);
      libruntimeexecutorG <<= Math.min(Math.abs(libruntimeexecutorG / 2), 2);
   for (let h = 0; h < 3; h++) {
       let cornerb = 5;
       let relatedW = String.fromCharCode(102,105,108,101,112,97,116,104,95,55,95,49,49,0);
       let splash8 = String.fromCharCode(97,112,112,108,105,101,100,95,98,95,56,51,0);
          let template_ugK: Array<any> = [698, 687];
          let auto_gf = 2;
          let china6: Array<any> = [String.fromCharCode(97,95,50,49,95,104,97,112,116,105,99,0), String.fromCharCode(112,117,116,98,105,116,98,117,102,102,101,114,95,99,95,54,56,0)];
         splash8 += `${splash8.length + cornerb}`;
         template_ugK = [china6.length];
         auto_gf ^= china6.length;
      while (1 > (cornerb >> (Math.min(relatedW.length, 3))) && (relatedW.length >> (Math.min(3, Math.abs(cornerb)))) > 1) {
         relatedW = `${3 & cornerb}`;
         break;
      }
      let iconnewchatz = relatedW.length >= 9582765;
      do {
         relatedW += `${cornerb | relatedW.length}`;
         if (iconnewchatz) {
            break;
         }
      } while (iconnewchatz && (splash8 == String.fromCharCode(78,0)));
      while (relatedW == splash8) {
          let update_7zE = 4;
          let twitterO = String.fromCharCode(109,95,50,95,99,111,108,111,114,115,112,97,99,101,0);
          let benefitT: Map<any, any> = new Map([[String.fromCharCode(103,95,50,50,95,117,110,99,97,99,104,101,100,0),String.fromCharCode(114,95,57,54,95,102,105,108,116,101,114,102,0)], [String.fromCharCode(98,101,104,97,118,105,111,114,95,50,95,53,54,0),String.fromCharCode(116,119,111,119,97,121,95,57,95,54,57,0)], [String.fromCharCode(103,95,55,50,95,115,109,105,108,105,101,115,0),String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,95,111,95,50,50,0)]]);
          let binge = String.fromCharCode(97,95,52,54,95,102,97,116,101,0);
         splash8 += `${update_7zE}`;
         update_7zE %= Math.max(1, benefitT.size - 2);
         twitterO = `${twitterO.length}`;
         benefitT.set(binge, (String.fromCharCode(66,0) == binge ? binge.length : benefitT.size));
         break;
      }
         relatedW += `${splash8.length >> (Math.min(relatedW.length, 1))}`;
          let handlerU = String.fromCharCode(119,109,97,112,114,111,100,97,116,97,95,107,95,56,53,0);
          let submitC = 0.0;
         relatedW += `${(handlerU == String.fromCharCode(87,0) ? handlerU.length : parseInt(`${submitC}`))}`;
      for (let n = 0; n < 2; n++) {
          let gradlewj = String.fromCharCode(115,101,113,117,101,110,99,101,95,113,95,51,53,0);
          let backwhitee = false;
          let description_fuj = 4.0;
          let root3 = 3.0;
         relatedW += `${gradlewj.length * parseInt(`${description_fuj}`)}`;
         gradlewj = `${2 / (Math.max(4, parseInt(`${root3}`)))}`;
         backwhitee = root3 > 80.0;
         description_fuj *= parseFloat(`${parseInt(`${root3}`) | 3}`);
      }
         cornerb *= (splash8 == String.fromCharCode(113,0) ? relatedW.length : splash8.length);
       let baselineu = String.fromCharCode(121,95,55,52,95,109,118,115,101,116,0);
       let favoriter = String.fromCharCode(118,95,52,54,95,112,101,101,114,99,111,110,110,101,99,116,105,111,110,0);
      typingloadingQ *= 3;
   }
      libruntimeexecutorG -= libruntimeexecutorG * parseInt(`${typingloadingQ}`);
   if (sinas == 3.24) {
       let nalyticsK = 0;
         nalyticsK /= Math.max(4, 2);
      let libreactnativeblob5 = 9363893 <= nalyticsK;
      do {
         nalyticsK /= Math.max(5, nalyticsK);
         if (libreactnativeblob5) {
            break;
         }
      } while ((nalyticsK > 2) && libreactnativeblob5);
       let tail6 = String.fromCharCode(115,119,105,102,116,95,119,95,53,49,0);
      sinas -= libruntimeexecutorG ^ 1;
   }
   let executorz = 5015938.0 >= stepc;
   do {
       let gestures = 0.0;
       let updatesF = String.fromCharCode(114,97,110,100,111,109,105,122,101,95,116,95,52,57,0);
       let soundT = 3;
       let a_viewL: Array<any> = [195, 432, 233];
       let release_tn2: Map<any, any> = new Map([[String.fromCharCode(100,105,115,97,98,108,101,114,95,55,95,57,53,0),true ], [String.fromCharCode(108,95,52,50,95,102,105,114,115,116,112,97,115,115,0),true ], [String.fromCharCode(103,95,52,50,95,99,111,109,112,108,101,109,101,110,116,0),false ]]);
          let favoriteZ: Array<any> = [String.fromCharCode(97,95,52,52,95,101,116,119,111,114,107,0), String.fromCharCode(118,98,114,117,115,104,95,55,95,57,55,0)];
         soundT <<= Math.min(1, Math.abs(soundT >> (Math.min(1, Math.abs(3)))));
         favoriteZ.push(favoriteZ.length);
      let predictionlossl = 7977589.0 >= gestures;
      do {
         gestures *= (parseFloat(`${String.fromCharCode(83,0) == updatesF ? updatesF.length : soundT}`));
         if (predictionlossl) {
            break;
         }
      } while ((a_viewL.includes(gestures)) && predictionlossl);
      while ((1 / (Math.max(4, a_viewL.length))) >= 1 && 1 >= (a_viewL.length / (Math.max(10, soundT)))) {
         a_viewL = [3];
         break;
      }
          let middlev = String.fromCharCode(101,95,51,54,95,114,101,97,115,115,101,109,98,108,121,0);
          let iconchatsendl = 1;
         soundT %= Math.max(a_viewL.length | parseInt(`${gestures}`), 5);
         middlev += `${middlev.length * iconchatsendl}`;
         iconchatsendl /= Math.max(2, iconchatsendl);
         updatesF = `${updatesF.length}`;
      while (release_tn2.size > a_viewL.length) {
         release_tn2 = new Map([[updatesF, updatesF.length]]);
         break;
      }
         release_tn2 = new Map([[`${gestures}`, parseInt(`${gestures}`)]]);
         gestures *= parseFloat(`${a_viewL.length / 1}`);
      for (let p = 0; p < 1; p++) {
          let moviesj = false;
          let infoA = 0.0;
         updatesF = `${3 % (Math.max(7, parseInt(`${infoA}`)))}`;
         moviesj = !moviesj;
         infoA *= (parseFloat(`${(moviesj ? 5 : 3)}`));
      }
      if (4 > (release_tn2.size ^ 2) || 3 > (release_tn2.size ^ 2)) {
          let mbjscommonw = true;
          let weiboE = String.fromCharCode(100,97,116,97,98,97,115,101,115,95,56,95,56,51,0);
          let iconpointscoreM = 0;
         release_tn2.set(`${gestures}`, 1);
         mbjscommonw = (weiboE.length % (Math.max(7, iconpointscoreM))) > 36;
         weiboE += `${iconpointscoreM ^ weiboE.length}`;
      }
      let screen9 = gestures >= 5066065.0;
      do {
         gestures /= Math.max(3, parseFloat(`${soundT}`));
         if (screen9) {
            break;
         }
      } while (screen9 && (3.25 >= (gestures + 5.79) && 5 >= (5 >> (Math.min(5, Math.abs(soundT))))));
      if (1 >= (2 + a_viewL.length) || (2 + a_viewL.length) >= 1) {
         a_viewL.push(parseInt(`${gestures}`) | 2);
      }
      if ((a_viewL.length + parseInt(`${gestures}`)) < 5 && (a_viewL.length / 5) < 2) {
          let informationv = 3.0;
          let zoomy = 5.0;
          let iconwatchq = 3;
          let episodey = String.fromCharCode(97,95,51,53,95,101,120,112,105,114,101,115,0);
          let iconstarw = String.fromCharCode(118,95,51,54,95,113,112,98,105,116,115,0);
         a_viewL = [1];
         informationv -= 2;
         zoomy *= parseFloat(`${1}`);
         iconwatchq >>= Math.min(1, Math.abs(parseInt(`${informationv}`) << (Math.min(3, Math.abs(3)))));
         episodey = `${1 / (Math.max(9, parseInt(`${informationv}`)))}`;
         iconstarw += `${iconstarw.length}`;
      }
         release_tn2.set(`${soundT}`, release_tn2.size);
      if (Array.from(release_tn2.keys()).includes(`${a_viewL.length}`)) {
         release_tn2 = new Map([[`${a_viewL.length}`, 3]]);
      }
      stepc *= analyticsl.length & libruntimeexecutorG;
      if (executorz) {
         break;
      }
   } while (executorz && (!selectionc.endsWith(`${stepc}`)));

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
       let iconmegaphonen: Array<any> = [949, 934, 480];
    let cancelq = 0.0;
    let verticalD = 5.0;
    let constants7 = 3.0;
    let reactnativeratingsl = String.fromCharCode(118,112,108,97,121,101,114,95,104,95,56,56,0);
    let defaultpredictionprofileD = String.fromCharCode(113,95,50,48,95,101,120,101,99,117,116,111,114,0);
    let basketballawayteamL: Array<any> = [293, 969];
    let mbnatives = 5;
    let basketballplayerplaceholderu: Array<any> = [555, 49, 561];
    let libcrashsdkx = String.fromCharCode(105,103,110,97,108,95,116,95,51,48,0);
    let iconpipexpandF = 2;
    let playercommone = 3.0;
    let bangc = String.fromCharCode(99,105,114,99,108,101,95,113,95,57,52,0);
    let halffieldimageJ = 2;
       let rightX = String.fromCharCode(108,95,52,53,95,97,115,115,111,99,105,97,116,101,0);
       let iconschedule0: Map<any, any> = new Map([[String.fromCharCode(119,104,97,116,95,105,95,52,48,0),236], [String.fromCharCode(102,111,108,108,111,119,115,95,105,95,56,53,0),638], [String.fromCharCode(107,95,53,54,95,110,101,116,101,114,114,110,111,0),569]]);
         rightX += "2";
      while (4 > (rightX.length << (Math.min(3, Math.abs(iconschedule0.size)))) && 2 > (rightX.length << (Math.min(Math.abs(4), 4)))) {
          let relatedh = false;
          let baseZ: Map<any, any> = new Map([[String.fromCharCode(117,95,50,54,95,112,111,108,121,0),false ], [String.fromCharCode(108,105,98,115,119,105,102,116,95,111,95,51,53,0),false ], [String.fromCharCode(97,99,116,105,118,97,116,111,114,95,56,95,53,48,0),true ]]);
          let vcopy_aos = String.fromCharCode(113,95,54,51,95,117,110,111,114,100,101,114,101,100,0);
          let cancelg: Array<any> = [String.fromCharCode(104,95,57,56,95,111,118,101,114,117,115,101,0), String.fromCharCode(112,95,51,54,95,97,110,105,109,97,108,115,0), String.fromCharCode(114,116,112,100,101,99,95,108,95,51,52,0)];
         rightX = "2";
         relatedh = (vcopy_aos.length + baseZ.size) > 20;
         baseZ = new Map([[`${baseZ.size}`, baseZ.size * cancelg.length]]);
         vcopy_aos = "3";
         cancelg = [cancelg.length >> (Math.min(2, Math.abs(baseZ.size)))];
         break;
      }
         rightX = "3";
      if (3 == (iconschedule0.size ^ 1)) {
          let giftbuttonq = 0.0;
          let bootsplashM = String.fromCharCode(102,102,118,108,95,107,95,55,49,0);
         rightX = `${bootsplashM.length & 3}`;
         giftbuttonq *= parseFloat(`${parseInt(`${giftbuttonq}`) ^ 3}`);
         bootsplashM += `${1 * parseInt(`${giftbuttonq}`)}`;
      }
      let emojiH = 9361618 <= rightX.length;
      do {
         rightX = `${iconschedule0.size & 3}`;
         if (emojiH) {
            break;
         }
      } while ((2 == iconschedule0.size) && emojiH);
         rightX += "1";
      reactnativeratingsl = `${basketballplayerplaceholderu.length}`;

    if (isSubmitting) return;

   for (let k = 0; k < 3; k++) {
      verticalD /= Math.max(5, parseInt(`${cancelq}`));
   }

    if (isReadTermNCondition == false) {

   let rightc = constants7 >= 6882787.0;
   do {
      constants7 *= parseFloat(`${basketballawayteamL.length}`);
      if (rightc) {
         break;
      }
   } while (((constants7 / (Math.max(9, parseFloat(`${reactnativeratingsl.length}`)))) == 2.61 && 4.80 == (constants7 / (Math.max(2.61, 5)))) && rightc);
      yysHomeinactiveUntick.showToast('请勾选用户协议和隐私协议');

   let penaltygoal1 = 9030858 >= basketballawayteamL.length;
   do {
      basketballawayteamL = [1 | reactnativeratingsl.length];
      if (penaltygoal1) {
         break;
      }
   } while (penaltygoal1 && (4 < (basketballawayteamL.length - basketballplayerplaceholderu.length)));
      return;

      reactnativeratingsl = "1";
    }

    let userInfo;

      iconpipexpandF |= 3;

    try {

   for (let f = 0; f < 3; f++) {
      constants7 *= parseFloat(`${1}`);
   }
      await GoogleSignin.hasPlayServices();

      constants7 -= parseFloat(`${mbnatives}`);

      if (await GoogleSignin.isSignedIn()) {

   while ((basketballplayerplaceholderu.length * basketballawayteamL.length) > 3 && (basketballplayerplaceholderu.length * basketballawayteamL.length) > 3) {
       let attributedstring7 = String.fromCharCode(117,95,54,48,95,118,97,114,119,105,100,116,104,0);
       let logoutK: Map<any, any> = new Map([[String.fromCharCode(105,109,109,101,100,105,97,116,101,115,105,103,110,97,108,95,104,95,50,57,0),true ], [String.fromCharCode(102,95,53,55,95,97,118,102,114,97,109,101,0),false ]]);
       let redgoalt = 1.0;
       let storeE: Array<any> = [827, 187];
       let episodeT = 1.0;
      if (!Array.from(logoutK.keys()).includes(`${storeE.length}`)) {
         logoutK = new Map([[`${storeE.length}`, parseInt(`${episodeT}`)]]);
      }
      let libapminsightab = episodeT >= 8759135.0;
      do {
         episodeT -= parseFloat(`${logoutK.size}`);
         if (libapminsightab) {
            break;
         }
      } while ((2.22 >= (redgoalt / (Math.max(9, episodeT)))) && libapminsightab);
          let libapminsightb4 = false;
         episodeT += parseFloat(`${parseInt(`${episodeT}`) - 3}`);
         libapminsightb4 = (libapminsightb4 ? libapminsightb4 : !libapminsightb4);
         redgoalt *= parseInt(`${redgoalt}`);
       let detailsQ: Array<any> = [String.fromCharCode(98,95,49,53,95,105,110,99,111,114,114,101,99,116,0), String.fromCharCode(121,95,57,48,95,103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,0)];
       let sharemodalC: Array<any> = [String.fromCharCode(109,105,103,114,97,116,105,110,103,95,111,95,49,55,0), String.fromCharCode(98,95,55,56,95,112,107,101,121,0)];
         detailsQ = [parseInt(`${episodeT}`) | logoutK.size];
       let googled = 5.0;
       let connectionu = 0.0;
          let awayiconn = String.fromCharCode(98,109,111,100,101,95,122,95,55,0);
          let anythinkR = false;
         redgoalt -= storeE.length;
         awayiconn += `${(String.fromCharCode(76,0) == awayiconn ? awayiconn.length : (anythinkR ? 2 : 3))}`;
         anythinkR = awayiconn.includes(`${anythinkR}`);
      let prediction4 = 5444011 >= logoutK.size;
      do {
         logoutK.set(`${episodeT}`, storeE.length % 1);
         if (prediction4) {
            break;
         }
      } while (prediction4 && (logoutK.get(`${detailsQ.length}`) == null));
      if (4.88 > (redgoalt * 5.39) && (redgoalt * 5.39) > 4.10) {
         sharemodalC.push(storeE.length % 3);
      }
         attributedstring7 += `${3 / (Math.max(parseInt(`${episodeT}`), 7))}`;
         googled /= Math.max(5, parseFloat(`${parseInt(`${redgoalt}`) % (Math.max(detailsQ.length, 3))}`));
          let zoomW = 4.0;
          let giftbutton4: Array<any> = [993, 554, 326];
          let thumbnail9 = String.fromCharCode(122,111,111,109,105,110,103,95,111,95,54,0);
         episodeT *= parseFloat(`${3 & logoutK.size}`);
         zoomW /= Math.max(3, parseFloat(`${2}`));
         giftbutton4 = [1];
         thumbnail9 = `${(String.fromCharCode(65,0) == thumbnail9 ? thumbnail9.length : giftbutton4.length)}`;
      let sidec = googled <= 6535032.0;
      do {
         googled += parseFloat(`${sharemodalC.length << (Math.min(Math.abs(2), 5))}`);
         if (sidec) {
            break;
         }
      } while ((3.100 >= (connectionu * googled) || (googled * 3.100) >= 2.70) && sidec);
      for (let a = 0; a < 1; a++) {
         attributedstring7 = `${(attributedstring7 == String.fromCharCode(90,0) ? sharemodalC.length : attributedstring7.length)}`;
      }
      basketballawayteamL = [parseInt(`${cancelq}`) % 1];
      break;
   }
        userInfo = await GoogleSignin.getCurrentUser();
      } else {

      playercommone += parseFloat(`${mbnatives}`);
        userInfo = await GoogleSignin.signIn();
      }

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        
      } else if (error.code === statusCodes.IN_PROGRESS) {

      cancelq /= Math.max(parseFloat(`${1 ^ mbnatives}`), 3);
        

       let faviconw: Array<any> = [String.fromCharCode(104,95,54,57,95,108,105,107,101,108,121,0), String.fromCharCode(101,95,48,95,102,105,102,111,115,0), String.fromCharCode(101,120,116,101,110,115,105,98,105,108,105,116,121,95,103,95,54,55,0)];
      let anytimeY = 6951509 >= faviconw.length;
      do {
          let profileactiveO = String.fromCharCode(99,111,109,112,97,99,116,95,103,95,52,48,0);
          let injury3 = 0.0;
          let tickeds = String.fromCharCode(115,95,50,57,95,120,116,101,97,0);
          let matchV = String.fromCharCode(98,117,102,114,101,102,95,120,95,50,53,0);
         faviconw = [(String.fromCharCode(119,0) == matchV ? profileactiveO.length : matchV.length)];
         profileactiveO += `${tickeds.length}`;
         injury3 += parseFloat(`${tickeds.length}`);
         if (anytimeY) {
            break;
         }
      } while ((faviconw.length <= 4) && anytimeY);
      while (!faviconw.includes(faviconw.length)) {
         faviconw.push(2);
         break;
      }
      let private_08 = 5917766 <= faviconw.length;
      do {
         faviconw = [faviconw.length / (Math.max(7, faviconw.length))];
         if (private_08) {
            break;
         }
      } while (((faviconw.length - faviconw.length) > 4 && (faviconw.length - faviconw.length) > 4) && private_08);
      playercommone /= Math.max(2, parseFloat(`${faviconw.length + defaultpredictionprofileD.length}`));
        yysHomeinactiveUntick.showToast('请勿频繁操作');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

      verticalD *= basketballawayteamL.length;
        

      playercommone += parseFloat(`${1}`);
        yysHomeinactiveUntick.showToast('谷歌服务获取失败');
      } else {

   let store0 = reactnativeratingsl == String.fromCharCode(53,116,111,57,107,109,0);
   do {
       let applicationa: Array<any> = [String.fromCharCode(107,95,53,56,95,100,101,100,117,112,101,0), String.fromCharCode(113,117,97,100,114,97,116,105,99,95,56,95,52,57,0), String.fromCharCode(114,101,116,117,114,110,95,99,95,51,48,0)];
       let modelsM = String.fromCharCode(115,105,108,107,95,118,95,49,48,48,0);
       let arrowright6 = String.fromCharCode(104,95,49,52,95,114,101,119,105,110,100,0);
       let singlej = String.fromCharCode(110,95,51,51,95,100,117,112,108,105,99,97,116,101,0);
       let predictionarrows = 1.0;
      while (arrowright6.length >= modelsM.length) {
          let matchactiveC = String.fromCharCode(117,95,52,53,95,104,97,110,110,101,108,0);
          let flipper5 = 2.0;
         modelsM += "1";
         matchactiveC += `${3 >> (Math.min(4, matchactiveC.length))}`;
         flipper5 /= Math.max(3 & matchactiveC.length, 5);
         break;
      }
      if (arrowright6.length == 1) {
         arrowright6 += `${modelsM.length / 3}`;
      }
         predictionarrows += parseFloat(`${arrowright6.length}`);
          let iconarrowrightwhiteI = true;
          let iconsettingG: Map<any, any> = new Map([[String.fromCharCode(102,114,97,110,100,95,56,95,49,53,0),true ], [String.fromCharCode(116,104,101,116,97,95,57,95,57,52,0),true ], [String.fromCharCode(104,95,51,51,95,102,114,111,110,116,0),false ]]);
          let chatroombackgroundI = 0.0;
         singlej += `${singlej.length}`;
         iconarrowrightwhiteI = !iconarrowrightwhiteI;
         iconsettingG = new Map([[`${iconsettingG.size}`, iconsettingG.size >> (Math.min(4, Math.abs(parseInt(`${chatroombackgroundI}`))))]]);
         chatroombackgroundI /= Math.max(2, parseInt(`${chatroombackgroundI}`) << (Math.min(Math.abs(1), 4)));
         predictionarrows += (parseFloat(`${String.fromCharCode(57,0) == arrowright6 ? parseInt(`${predictionarrows}`) : arrowright6.length}`));
      for (let d = 0; d < 2; d++) {
         arrowright6 = `${arrowright6.length}`;
      }
         arrowright6 = `${(String.fromCharCode(101,0) == modelsM ? applicationa.length : modelsM.length)}`;
      for (let f = 0; f < 1; f++) {
         singlej = "2";
      }
      for (let v = 0; v < 1; v++) {
          let routerX = String.fromCharCode(107,95,52,51,95,105,110,116,101,103,114,105,116,121,0);
          let button6 = true;
          let iconarrowrightwhitev = String.fromCharCode(99,104,117,110,107,115,95,49,95,51,48,0);
         predictionarrows *= (parseFloat(`${2 - (button6 ? 1 : 5)}`));
         routerX = `${iconarrowrightwhitev.length & routerX.length}`;
         button6 = iconarrowrightwhitev == routerX;
      }
      while ((applicationa.length & singlej.length) >= 4) {
         singlej = `${arrowright6.length | 1}`;
         break;
      }
         modelsM = `${modelsM.length | arrowright6.length}`;
         applicationa.push((singlej == String.fromCharCode(117,0) ? modelsM.length : singlej.length));
      let greyz = 6990616 >= applicationa.length;
      do {
         applicationa = [modelsM.length & 3];
         if (greyz) {
            break;
         }
      } while (greyz && (1 < (applicationa.length & 1) && (modelsM.length & 1) < 5));
      for (let v = 0; v < 3; v++) {
          let iconviewergif_ = 2.0;
          let downloaded4: Map<any, any> = new Map([[String.fromCharCode(122,95,51,48,95,103,97,109,109,97,102,105,108,116,101,114,0),String.fromCharCode(104,105,103,104,95,102,95,56,51,0)], [String.fromCharCode(120,95,52,53,95,99,102,115,116,114,101,97,109,0),String.fromCharCode(114,111,98,117,115,116,95,103,95,52,54,0)], [String.fromCharCode(108,97,112,112,101,100,95,54,95,49,53,0),String.fromCharCode(108,111,111,112,115,95,122,95,57,49,0)]]);
          let predictionloss_ = 2.0;
          let icondownimgx = String.fromCharCode(117,114,105,95,102,95,52,51,0);
         modelsM += `${(arrowright6 == String.fromCharCode(105,0) ? downloaded4.size : arrowright6.length)}`;
         iconviewergif_ /= Math.max(icondownimgx.length, 5);
         downloaded4.set(`${iconviewergif_}`, parseInt(`${iconviewergif_}`) + 2);
         predictionloss_ /= Math.max(parseFloat(`${parseInt(`${iconviewergif_}`) | parseInt(`${predictionloss_}`)}`), 4);
         icondownimgx += "2";
      }
         modelsM += "1";
      reactnativeratingsl += `${applicationa.length}`;
      if (store0) {
         break;
      }
   } while (((constants7 - 1.64) == 5.92 || (parseInt(`${constants7}`) - reactnativeratingsl.length) == 3) && store0);
        

   for (let c = 0; c < 2; c++) {
       let episodex = String.fromCharCode(101,95,53,51,95,99,111,110,103,101,115,116,105,111,110,0);
         episodex = `${episodex.length - episodex.length}`;
         episodex = `${episodex.length}`;
       let taiwanu: Map<any, any> = new Map([[String.fromCharCode(97,118,101,114,97,103,101,95,104,95,55,55,0),63], [String.fromCharCode(112,114,97,103,109,97,95,116,95,52,52,0),843], [String.fromCharCode(100,97,109,112,95,105,95,49,0),615]]);
       let gifgoalbgw: Map<any, any> = new Map([[String.fromCharCode(117,95,49,48,95,101,115,116,114,111,121,0),742], [String.fromCharCode(99,95,57,52,95,105,99,109,112,0),582], [String.fromCharCode(98,95,54,48,95,115,117,98,114,101,115,117,108,116,115,0),652]]);
      constants7 /= Math.max(parseFloat(`${basketballplayerplaceholderu.length}`), 1);
   }
        yysHomeinactiveUntick.showToast('登入失败，请稍后再试');
      }
      console.log(error.toString());

   for (let u = 0; u < 3; u++) {
      defaultpredictionprofileD += `${iconpipexpandF}`;
   }
      return;
    }

    if (userInfo === null) {

   if (1 < mbnatives) {
      mbnatives <<= Math.min(1, Math.abs(2 - parseInt(`${verticalD}`)));
   }
      yysHomeinactiveUntick.showToast('登入失败，请稍后再试');

       let lightX = true;
      for (let a = 0; a < 1; a++) {
         lightX = lightX && !lightX;
      }
      if (lightX || !lightX) {
          let iconmoreA = String.fromCharCode(117,110,98,111,110,100,101,100,95,57,95,55,57,0);
          let untick0 = true;
          let tailD = String.fromCharCode(105,95,49,48,95,105,110,110,101,114,0);
          let refreshborderlessk = String.fromCharCode(114,115,104,105,102,116,95,105,95,51,0);
         lightX = (iconmoreA.length * refreshborderlessk.length) <= 65;
         iconmoreA += `${(tailD == String.fromCharCode(117,0) ? (untick0 ? 3 : 2) : tailD.length)}`;
         untick0 = !untick0;
         refreshborderlessk += `${tailD.length}`;
      }
      for (let a = 0; a < 3; a++) {
         lightX = (lightX ? !lightX : !lightX);
      }
      playercommone -= parseFloat(`${parseInt(`${cancelq}`)}`);
      return;
    }

    try {

   for (let h = 0; h < 2; h++) {
       let nodeA = 5;
      while ((3 + nodeA) == 4 || (nodeA + 3) == 4) {
          let largesoundz = true;
          let owngoalb = 1.0;
          let condensede = String.fromCharCode(102,97,100,101,95,111,95,54,53,0);
         nodeA >>= Math.min(Math.abs(parseInt(`${owngoalb}`)), 3);
         largesoundz = condensede.length > 13 || !largesoundz;
         owngoalb += (parseFloat(`${condensede.length >> (Math.min(1, Math.abs((largesoundz ? 2 : 4))))}`));
         break;
      }
         nodeA -= nodeA;
      for (let c = 0; c < 2; c++) {
         nodeA *= 1;
      }
      libcrashsdkx += `${parseInt(`${playercommone}`)}`;
   }
      setSubmitting(true);

       let closen: Array<any> = [String.fromCharCode(110,95,49,95,109,116,105,109,101,0), String.fromCharCode(114,95,54,48,95,103,111,116,0)];
       let libswresampleG: Array<any> = [24, 728, 849];
          let mountingl = 0.0;
         libswresampleG.push(3);
         mountingl /= Math.max(parseFloat(`${3}`), 2);
         libswresampleG.push(libswresampleG.length);
      while (!libswresampleG.includes(closen.length)) {
         closen = [closen.length];
         break;
      }
      let binddatas5 = 8665222 <= closen.length;
      do {
          let executorq = true;
          let kickF = 2.0;
         closen = [(libswresampleG.length & (executorq ? 3 : 2))];
         executorq = kickF == 87.85;
         kickF -= parseFloat(`${parseInt(`${kickF}`) % 2}`);
         if (binddatas5) {
            break;
         }
      } while ((3 <= libswresampleG.length) && binddatas5);
       let feedbackQ = 3;
       let penaltyshootT = 4;
      let privacy2 = feedbackQ >= 8549050;
      do {
          let lessQ = 1.0;
          let moviesg = 4.0;
         feedbackQ |= libswresampleG.length;
         lessQ /= Math.max(3, parseInt(`${lessQ}`) | 3);
         moviesg /= Math.max(parseInt(`${lessQ}`), 4);
         if (privacy2) {
            break;
         }
      } while (((closen.length + feedbackQ) >= 2) && privacy2);
      constants7 *= parseFloat(`${2}`);

      userInfo = await yysHomeloading.signinupUser({
        loginType: 'EMAIL',
        email: userInfo.user.email,
        referralCode: referralCode,
        isGoogleLogin: true,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      GoogleSignin.signOut();

   while (5.26 < (cancelq / (Math.max(parseFloat(`${iconmegaphonen.length}`), 1)))) {
      iconmegaphonen.push(parseInt(`${cancelq}`));
      break;
   }
      yysHomeinactiveUntick.showToast(err.toString());

   while (4.24 > (parseFloat(`${reactnativeratingsl.length}`) + constants7) && (parseInt(`${constants7}`) + reactnativeratingsl.length) > 2) {
      constants7 -= parseFloat(`${3 | mbnatives}`);
      break;
   }
      return;
    } finally {

      cancelq *= parseFloat(`${3}`);
      setSubmitting(false);

      mbnatives -= iconpipexpandF;
    }

    const resultData = userInfo.data;

       let crossq = 5.0;
       let imagenomoredataO: Array<any> = [658, 292, 364];
       let customw = 5.0;
       let stationF = 2.0;
       let statsf: Map<any, any> = new Map([[String.fromCharCode(102,95,52,54,95,97,98,108,0),541], [String.fromCharCode(119,95,57,95,100,105,100,0),165], [String.fromCharCode(108,95,56,48,95,99,104,97,110,103,101,99,111,117,110,116,101,114,0),628]]);
      for (let x = 0; x < 1; x++) {
         statsf.set(`${stationF}`, statsf.size / 1);
      }
         customw -= parseFloat(`${parseInt(`${crossq}`)}`);
         stationF /= Math.max(parseFloat(`${1 | parseInt(`${stationF}`)}`), 2);
      if ((customw + 3.81) < 1.65 || (stationF - 3.81) < 5.60) {
         customw -= parseFloat(`${parseInt(`${customw}`)}`);
      }
      verticalD += 1;
      crossq += parseFloat(`${imagenomoredataO.length}`);
      imagenomoredataO = [imagenomoredataO.length];

    const user = yysIconstar.fromJson(resultData);

       let orangedownarrowu = 2.0;
       let matchdetailbgL = 5.0;
         orangedownarrowu += parseInt(`${matchdetailbgL}`);
         matchdetailbgL /= Math.max(parseInt(`${orangedownarrowu}`), 5);
      for (let e = 0; e < 2; e++) {
         matchdetailbgL -= parseInt(`${orangedownarrowu}`) >> (Math.min(Math.abs(parseInt(`${matchdetailbgL}`)), 5));
      }
         orangedownarrowu /= Math.max(parseInt(`${orangedownarrowu}`) | 1, 1);
         orangedownarrowu *= 3 * parseInt(`${orangedownarrowu}`);
         matchdetailbgL *= parseInt(`${orangedownarrowu}`);
      libcrashsdkx += `${parseInt(`${playercommone}`) & 3}`;

    await dispatch(addUserAuthState(user));

   let libturbomodulejsijniU = 8001473 <= basketballawayteamL.length;
   do {
      basketballawayteamL.push(1 + libcrashsdkx.length);
      if (libturbomodulejsijniU) {
         break;
      }
   } while ((4 <= basketballawayteamL.length) && libturbomodulejsijniU);

    if (userInfo.message.includes("注册成功")) {

      mbnatives <<= Math.min(5, Math.abs(iconpipexpandF));
      navigation.navigate('SetUsername');

    } else if (userInfo.message.includes("登录成功")) {

   for (let q = 0; q < 3; q++) {
      iconpipexpandF &= bangc.length;
   }

      if (user.isVip()) {

   let questiconM = constants7 >= 8761974.0;
   do {
      constants7 *= parseFloat(`${iconpipexpandF}`);
      if (questiconM) {
         break;
      }
   } while (questiconM && ((parseInt(`${constants7}`) - defaultpredictionprofileD.length) < 2 || (parseFloat(`${defaultpredictionprofileD.length}`) - constants7) < 5.77));
        await AsyncStorage.setItem("showAds", "false");
      } else {

   let klevinY = playercommone <= 4989030.0;
   do {
       let acceptedi: Array<any> = [387, 804];
       let yellowanimationlived = 2;
       let condensedW = String.fromCharCode(105,95,50,55,0);
       let orangeuparrowd = String.fromCharCode(109,117,116,117,97,108,95,115,95,53,52,0);
       let singleY = String.fromCharCode(118,95,56,55,95,101,110,99,111,100,101,100,0);
         singleY += `${acceptedi.length | 3}`;
      while (orangeuparrowd.length < acceptedi.length) {
         orangeuparrowd = `${singleY.length}`;
         break;
      }
          let chartD: Map<any, any> = new Map([[String.fromCharCode(98,95,56,56,95,100,101,101,112,101,114,0),true ], [String.fromCharCode(104,97,115,104,100,101,115,116,114,111,121,95,113,95,53,54,0),true ]]);
         acceptedi = [(orangeuparrowd == String.fromCharCode(85,0) ? orangeuparrowd.length : yellowanimationlived)];
         chartD = new Map([[`${chartD.size}`, chartD.size - chartD.size]]);
      while ((yellowanimationlived / (Math.max(2, 8))) <= 5) {
         yellowanimationlived -= orangeuparrowd.length % 3;
         break;
      }
      while (!acceptedi.includes(yellowanimationlived)) {
         acceptedi = [2];
         break;
      }
      while ((1 * yellowanimationlived) < 3) {
         orangeuparrowd = `${acceptedi.length}`;
         break;
      }
          let playa = 5.0;
          let stylesx: Map<any, any> = new Map([[String.fromCharCode(115,116,114,114,101,115,101,116,95,99,95,49,49,0),513], [String.fromCharCode(118,95,57,53,95,98,105,108,97,116,101,114,97,108,0),224]]);
          let clockv = 3.0;
         singleY += `${yellowanimationlived * parseInt(`${clockv}`)}`;
         playa /= Math.max(5, stylesx.size ^ parseInt(`${playa}`));
         stylesx = new Map([[`${stylesx.size}`, stylesx.size - parseInt(`${playa}`)]]);
         clockv += stylesx.size;
      while (1 >= (yellowanimationlived | 4) && 3 >= (yellowanimationlived | 4)) {
         acceptedi.push((String.fromCharCode(119,0) == condensedW ? condensedW.length : yellowanimationlived));
         break;
      }
      if (singleY.length < condensedW.length) {
         singleY = `${yellowanimationlived >> (Math.min(Math.abs(1), 3))}`;
      }
      let robotoL = String.fromCharCode(116,111,99,98,107,100,106,0) == condensedW;
      do {
         condensedW = `${acceptedi.length}`;
         if (robotoL) {
            break;
         }
      } while ((4 <= (condensedW.length / (Math.max(4, 6))) && (condensedW.length / 4) <= 4) && robotoL);
         singleY += `${condensedW.length}`;
         yellowanimationlived >>= Math.min(4, Math.abs(yellowanimationlived));
      if (3 >= (yellowanimationlived / 1) && 1 >= (singleY.length / (Math.max(1, yellowanimationlived)))) {
          let libapminsightaq = String.fromCharCode(120,95,52,54,95,109,117,114,109,117,114,0);
          let typingloading_ = 2.0;
         singleY += `${parseInt(`${typingloading_}`)}`;
         libapminsightaq += "2";
         typingloading_ *= parseFloat(`${libapminsightaq.length}`);
      }
      if ((1 >> (Math.min(2, condensedW.length))) == 4) {
         condensedW = `${yellowanimationlived}`;
      }
          let iconuserU = 3.0;
         orangeuparrowd = `${(orangeuparrowd == String.fromCharCode(105,0) ? orangeuparrowd.length : acceptedi.length)}`;
         iconuserU -= 1 | parseInt(`${iconuserU}`);
      playercommone -= parseFloat(`${parseInt(`${constants7}`) / (Math.max(defaultpredictionprofileD.length, 7))}`);
      if (klevinY) {
         break;
      }
   } while ((5.75 > (constants7 * playercommone)) && klevinY);
        await AsyncStorage.setItem("showAds", "true");
      }

      await dispatch(changeScreenAction('登录成功'));

       let backwhiteE = 5.0;
       let playlistY = 5.0;
      while (2.70 <= (4.73 / (Math.max(3, backwhiteE)))) {
         backwhiteE += parseInt(`${playlistY}`) / 2;
         break;
      }
      for (let n = 0; n < 3; n++) {
          let sellmathbackground_ = 2.0;
          let langkey9: Map<any, any> = new Map([[String.fromCharCode(100,95,55,55,95,109,97,115,107,113,0),String.fromCharCode(104,95,50,95,112,111,114,116,115,0)], [String.fromCharCode(116,95,54,53,95,98,97,99,107,114,111,117,110,100,0),String.fromCharCode(102,114,97,103,109,101,110,116,115,95,48,95,52,48,0)], [String.fromCharCode(103,95,51,51,95,118,114,101,112,0),String.fromCharCode(116,95,49,49,95,114,101,117,112,108,111,97,100,101,100,0)]]);
          let manifestE = 5;
         backwhiteE /= Math.max(4, parseInt(`${sellmathbackground_}`));
         sellmathbackground_ /= Math.max(5, parseFloat(`${manifestE >> (Math.min(Math.abs(1), 3))}`));
         langkey9.set(`${manifestE}`, manifestE << (Math.min(Math.abs(langkey9.size), 2)));
      }
         backwhiteE += 3 % (Math.max(4, parseInt(`${playlistY}`)));
       let manifestV = false;
       let pauseU = true;
         playlistY *= parseInt(`${backwhiteE}`) | parseInt(`${playlistY}`);
         playlistY -= 2 / (Math.max(parseInt(`${playlistY}`), 4));
      iconpipexpandF %= Math.max(2, parseInt(`${verticalD}`) / (Math.max(2, parseInt(`${backwhiteE}`))));

      

   while (!bangc.includes(`${defaultpredictionprofileD.length}`)) {
       let update_7l: Array<any> = [805, 468, 406];
      for (let s = 0; s < 3; s++) {
         update_7l.push(1);
      }
      if (5 >= (update_7l.length / 4) || 2 >= (update_7l.length / 4)) {
         update_7l.push(update_7l.length);
      }
       let predictionlossi = 5.0;
       let iconcloseI = 4.0;
      bangc = `${libcrashsdkx.length | parseInt(`${verticalD}`)}`;
      break;
   }
      yys_giftbutton_footballtrophy.userCenterLoginSuccessTimesAnalytics();

       let statisticsU = 3.0;
       let member_ = 2.0;
          let renewF = false;
          let iconclosewhitewithbgF = String.fromCharCode(99,117,114,116,97,105,110,95,118,95,54,53,0);
         member_ *= (parseFloat(`${parseInt(`${member_}`) & (renewF ? 3 : 3)}`));
         renewF = iconclosewhitewithbgF.length == iconclosewhitewithbgF.length;
          let hookC = 1.0;
          let ewardedS = 4;
          let expand7 = 4.0;
         member_ += parseFloat(`${parseInt(`${member_}`) ^ 2}`);
         hookC += parseInt(`${hookC}`);
         ewardedS ^= 2 * parseInt(`${expand7}`);
         expand7 *= 2 - parseInt(`${hookC}`);
      if (5.41 >= member_) {
         member_ -= parseFloat(`${parseInt(`${statisticsU}`)}`);
      }
         member_ *= parseFloat(`${parseInt(`${statisticsU}`)}`);
          let searchy: Map<any, any> = new Map([[String.fromCharCode(109,95,53,57,95,109,101,114,103,101,97,98,108,101,0),102], [String.fromCharCode(122,95,57,50,95,105,110,103,114,101,115,115,0),183]]);
          let manifest8 = String.fromCharCode(110,95,51,53,95,112,114,111,118,105,100,105,110,103,0);
          let libcxxcomponents4 = 2;
         statisticsU += (parseFloat(`${manifest8 == String.fromCharCode(53,0) ? manifest8.length : parseInt(`${statisticsU}`)}`));
         searchy = new Map([[`${searchy.size}`, 1 & libcxxcomponents4]]);
         libcxxcomponents4 -= searchy.size << (Math.min(Math.abs(1), 4));
      if (2.76 == member_) {
          let armvaB = 0;
          let light4 = String.fromCharCode(114,101,101,108,95,101,95,49,52,0);
          let episodes8 = 3;
          let mbridgeR = String.fromCharCode(115,101,99,115,95,116,95,55,56,0);
         member_ += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${statisticsU}`)), 1))}`);
         armvaB += episodes8 & mbridgeR.length;
         light4 += `${armvaB >> (Math.min(Math.abs(2), 2))}`;
         episodes8 ^= 1 & armvaB;
         mbridgeR += "2 | episodes8";
      }
      constants7 += parseFloat(`${bangc.length & mbnatives}`);

      if (user.isVip()) {

   while ((playercommone * 1.27) >= 5.95 && 1.53 >= (1.27 + playercommone)) {
       let robotol = 1.0;
       let singapored = true;
       let downloaderw = 4;
       let playercommonE = String.fromCharCode(109,95,57,48,95,100,105,115,99,111,110,110,101,99,116,0);
         robotol -= parseFloat(`${1 + downloaderw}`);
      for (let t = 0; t < 1; t++) {
          let suggestionD: Map<any, any> = new Map([[String.fromCharCode(119,95,55,54,95,112,97,115,115,0),false ], [String.fromCharCode(99,104,97,110,103,105,110,103,95,102,95,51,0),false ], [String.fromCharCode(98,111,114,105,110,103,115,115,108,95,54,95,51,0),false ]]);
          let libtob1 = String.fromCharCode(121,95,54,52,95,100,121,108,105,98,115,0);
          let libmapbufferjnie = 4;
          let catagoryE = String.fromCharCode(104,97,112,116,105,99,95,110,95,51,52,0);
          let libswscalex = 5;
         singapored = downloaderw == 39 && !singapored;
         suggestionD = new Map([[catagoryE, catagoryE.length ^ libswscalex]]);
         libtob1 += `${libtob1.length}`;
         libmapbufferjnie >>= Math.min(4, Math.abs(suggestionD.size));
         libswscalex ^= 2 - catagoryE.length;
      }
      if (playercommonE.includes(`${singapored}`)) {
         playercommonE = `${downloaderw * parseInt(`${robotol}`)}`;
      }
      if (2 > (4 ^ playercommonE.length)) {
          let statisticsz = 1.0;
          let eighteenq = String.fromCharCode(115,105,103,105,100,95,112,95,52,51,0);
          let yellowtoredf = false;
          let buffer1 = false;
         playercommonE += `${(parseInt(`${statisticsz}`) << (Math.min(1, Math.abs((buffer1 ? 4 : 2)))))}`;
         statisticsz += (2 * (yellowtoredf ? 4 : 5));
         eighteenq = `${((yellowtoredf ? 1 : 3) / (Math.max(eighteenq.length, 5)))}`;
         buffer1 = eighteenq.endsWith(`${yellowtoredf}`);
      }
      if (playercommonE.length < 1 && singapored) {
         playercommonE += "3";
      }
      for (let m = 0; m < 1; m++) {
         downloaderw >>= Math.min(Math.abs((String.fromCharCode(104,0) == playercommonE ? playercommonE.length : parseInt(`${robotol}`))), 3);
      }
       let phone3 = true;
       let flippery = false;
       let unticku = 0.0;
      if (downloaderw < 4 || 2 < (4 ^ downloaderw)) {
         downloaderw ^= ((phone3 ? 1 : 2) % (Math.max(6, parseInt(`${robotol}`))));
      }
      while (!phone3 || 1 <= playercommonE.length) {
         playercommonE += `${((singapored ? 4 : 5) % (Math.max(7, downloaderw)))}`;
         break;
      }
         unticku /= Math.max(3, playercommonE.length | 1);
      let sharemodalA = phone3 ? !phone3 : phone3;
      do {
          let membershipa: Array<any> = [426, 308, 126];
          let forwardM = String.fromCharCode(122,95,54,95,98,97,107,101,100,0);
         phone3 = singapored || !flippery;
         membershipa = [forwardM.length / 2];
         forwardM = `${3 ^ membershipa.length}`;
         if (sharemodalA) {
            break;
         }
      } while (sharemodalA && (!phone3));
      playercommone += parseFloat(`${playercommonE.length & parseInt(`${robotol}`)}`);
      break;
   }
        yys_giftbutton_footballtrophy.userCenterVipLoginSuccessTimesAnalytics();
      }
      

      reactnativeratingsl += `${libcrashsdkx.length}`;

      if (onGooleLoginSuccess) onGooleLoginSuccess();
    }
  }

  const onPressTermNCondition = () => {
       let statsnomoredataO = String.fromCharCode(109,95,53,49,95,116,111,115,115,0);
    let optionsN = true;
    let basketballawayteamY = 3.0;
    let actionX = 5.0;
    let playlistm = 2;
    let agreement8: Array<any> = [393, 132];
    let libsentry7: Array<any> = [56, 356, 127];
    let sellmathbackgroundA: Map<any, any> = new Map([[String.fromCharCode(113,95,57,57,95,115,105,122,101,0),101], [String.fromCharCode(116,121,112,101,115,95,121,95,54,52,0),548], [String.fromCharCode(100,111,99,95,48,95,50,55,0),439]]);
    let middle_ = String.fromCharCode(115,104,111,117,121,97,99,104,111,95,99,95,56,50,0);
    let greytickE = String.fromCharCode(98,108,99,107,95,97,95,54,50,0);
    let libglogc = false;
    let screenR: Array<any> = [535, 51, 410];
    let bang5: Array<any> = [220, 172];
       let libreanimatedE = String.fromCharCode(106,95,56,55,95,109,111,116,105,111,110,0);
       let orangeq = 1;
       let unimplementedviewe = String.fromCharCode(115,104,97,100,101,114,95,111,95,52,49,0);
      let inviteq = String.fromCharCode(57,57,108,116,95,108,105,107,49,0) == unimplementedviewe;
      do {
         unimplementedviewe += "3";
         if (inviteq) {
            break;
         }
      } while ((5 == (orangeq % (Math.max(5, 10))) && (unimplementedviewe.length % 5) == 4) && inviteq);
       let iconarrowleftd = String.fromCharCode(103,95,51,48,95,115,117,98,112,97,99,107,101,116,0);
      let mbnativeY = libreanimatedE.length <= 7239138;
      do {
          let smallorangemanV = true;
         libreanimatedE = `${1 << (Math.min(4, libreanimatedE.length))}`;
         smallorangemanV = !smallorangemanV;
         if (mbnativeY) {
            break;
         }
      } while (mbnativeY && (iconarrowleftd != libreanimatedE));
          let alertk = String.fromCharCode(109,105,100,100,108,101,95,120,95,54,48,0);
          let arrowupo = String.fromCharCode(101,120,115,121,95,105,95,54,53,0);
          let dangerf = true;
         unimplementedviewe = `${unimplementedviewe.length ^ libreanimatedE.length}`;
         alertk += `${1 % (Math.max(5, alertk.length))}`;
         arrowupo += `${(String.fromCharCode(68,0) == arrowupo ? (dangerf ? 5 : 2) : arrowupo.length)}`;
      let matchN = unimplementedviewe.length <= 6991189;
      do {
          let combineds = String.fromCharCode(98,114,117,116,101,102,111,114,99,101,95,119,95,53,50,0);
          let carouselt = 5.0;
          let shielddone5 = String.fromCharCode(113,95,55,54,95,101,120,112,101,99,116,101,100,0);
          let countdownQ = 5.0;
          let iconbelln = String.fromCharCode(111,95,50,95,109,111,100,105,102,121,0);
         unimplementedviewe = `${combineds.length}`;
         combineds = `${3 % (Math.max(6, parseInt(`${countdownQ}`)))}`;
         carouselt /= Math.max(shielddone5.length - 2, 4);
         shielddone5 += `${parseInt(`${carouselt}`)}`;
         countdownQ += parseInt(`${countdownQ}`);
         iconbelln = `${parseInt(`${carouselt}`)}`;
         if (matchN) {
            break;
         }
      } while (matchN && (iconarrowleftd != String.fromCharCode(112,0)));
         orangeq ^= 2;
      if ((orangeq | libreanimatedE.length) <= 1 && (orangeq | libreanimatedE.length) <= 1) {
         orangeq |= orangeq;
      }
          let turndowna = 1;
         iconarrowleftd += `${libreanimatedE.length}`;
         turndowna /= Math.max(1, turndowna);
      for (let c = 0; c < 2; c++) {
         libreanimatedE += `${orangeq}`;
      }
      statsnomoredataO = `${sellmathbackgroundA.size & unimplementedviewe.length}`;
       let bggradient0 = 4.0;
       let screen8 = String.fromCharCode(110,111,97,108,108,111,99,95,122,95,50,51,0);
       let overs = 1.0;
         bggradient0 -= 1;
      let defaultlogoS = 7255741.0 >= bggradient0;
      do {
          let renewJ = 4;
         bggradient0 *= 2 << (Math.min(3, Math.abs(parseInt(`${overs}`))));
         renewJ <<= Math.min(2, Math.abs(renewJ % 1));
         if (defaultlogoS) {
            break;
         }
      } while (defaultlogoS && (1 >= (screen8.length + 4) || (2.82 / (Math.max(7, bggradient0))) >= 3.99));
          let rewardvideoa: Array<any> = [699, 769, 493];
          let baiduadsO = String.fromCharCode(99,95,54,52,95,104,97,108,108,0);
         screen8 += "3";
         rewardvideoa.push((baiduadsO == String.fromCharCode(108,0) ? baiduadsO.length : rewardvideoa.length));
      while ((screen8.length << (Math.min(Math.abs(2), 1))) == 2 || 2 == (screen8.length / 2)) {
         overs *= parseInt(`${bggradient0}`) << (Math.min(5, Math.abs(3)));
         break;
      }
      if (3.79 >= (1.24 - overs)) {
          let rootF = String.fromCharCode(112,95,52,57,95,111,119,110,108,111,97,100,0);
          let greenarrowupV = 2.0;
         screen8 += `${2 << (Math.min(5, rootF.length))}`;
         rootF = `${parseInt(`${greenarrowupV}`)}`;
      }
      for (let d = 0; d < 3; d++) {
         bggradient0 += 3;
      }
          let iconclosewhitewithbgt = String.fromCharCode(97,114,101,116,104,101,114,101,95,111,95,54,0);
          let crownR = true;
         overs -= parseInt(`${overs}`) ^ 1;
         iconclosewhitewithbgt = "2";
         crownR = crownR || iconclosewhitewithbgt.length == 84;
      if (overs <= 5.38) {
          let playercommonc = true;
          let progressb = 1.0;
          let whistleorangeA = String.fromCharCode(100,111,119,110,115,97,109,112,108,101,95,99,95,50,52,0);
          let awayU = String.fromCharCode(99,117,116,101,115,116,95,112,95,51,56,0);
          let footballfieldK = 4;
         overs -= footballfieldK << (Math.min(whistleorangeA.length, 1));
         playercommonc = progressb < 40.0;
         progressb *= 3 / (Math.max(parseInt(`${progressb}`), 6));
         whistleorangeA += `${parseInt(`${progressb}`) | 1}`;
         awayU += `${parseInt(`${progressb}`) / 3}`;
         footballfieldK &= 2 - awayU.length;
      }
         bggradient0 += parseInt(`${overs}`);
      libglogc = screen8 == String.fromCharCode(99,0);
      greytickE += `${agreement8.length}`;
   for (let k = 0; k < 2; k++) {
      actionX *= greytickE.length;
   }
   while (3.30 > (actionX / 3)) {
      basketballawayteamY += agreement8.length * 3;
      break;
   }
      greytickE = "1";
      optionsN = (libsentry7.length * basketballawayteamY) < 70.66;
   let turnr = String.fromCharCode(107,95,49,100,103,109,52,49,114,99,0) == statsnomoredataO;
   do {
      statsnomoredataO = `${middle_.length << (Math.min(Math.abs(2), 3))}`;
      if (turnr) {
         break;
      }
   } while ((3.3 <= (basketballawayteamY - statsnomoredataO.length) && 3 <= (statsnomoredataO.length / 4)) && turnr);
      basketballawayteamY += playlistm;
   if (1 > (parseInt(`${basketballawayteamY}`) + greytickE.length)) {
      basketballawayteamY += (libsentry7.length + (optionsN ? 3 : 5));
   }
   if (2 <= (greytickE.length << (Math.min(Math.abs(2), 5))) || 5 <= (greytickE.length << (Math.min(Math.abs(2), 2)))) {
       let ballg = 1.0;
       let q_viewL = 4.0;
       let defaultplayerimgV = true;
       let giftM = 2.0;
          let favoriteI = 2.0;
         defaultplayerimgV = ballg > 78.71;
         favoriteI /= Math.max(parseInt(`${favoriteI}`) >> (Math.min(2, Math.abs(3))), 3);
      while (5.37 == (ballg / (Math.max(3.46, 5)))) {
          let fileD = 1;
          let iconpipshrinkr = 3;
          let macauk = 4.0;
          let questiconX: Array<any> = [String.fromCharCode(104,105,103,104,108,105,103,116,101,100,95,57,95,50,53,0), String.fromCharCode(114,111,117,116,105,110,115,95,110,95,53,50,0)];
         ballg += parseFloat(`${2}`);
         fileD /= Math.max(fileD - 1, 4);
         iconpipshrinkr >>= Math.min(questiconX.length, 4);
         macauk /= Math.max(4, parseFloat(`${1}`));
         questiconX.push(parseInt(`${macauk}`) << (Math.min(questiconX.length, 5)));
         break;
      }
          let bellU = String.fromCharCode(115,95,55,48,95,115,117,114,102,97,99,101,0);
          let libavcodec6: Map<any, any> = new Map([[String.fromCharCode(109,115,103,115,109,100,101,99,95,118,95,55,51,0),486], [String.fromCharCode(100,95,53,50,95,112,97,99,107,97,103,101,0),660]]);
          let libnmsj = String.fromCharCode(108,95,54,52,95,108,105,99,101,110,115,101,115,0);
         defaultplayerimgV = 93.17 < giftM || ballg < 93.17;
         bellU = "1";
         libavcodec6.set(libnmsj, libnmsj.length);
      while (4.34 <= ballg) {
         q_viewL += 2 * parseInt(`${q_viewL}`);
         break;
      }
      let defaultlogoH = 7302708.0 >= ballg;
      do {
          let greys: Array<any> = [207, 959, 601];
         ballg /= Math.max(3, parseFloat(`${parseInt(`${giftM}`) % 2}`));
         greys.push(greys.length ^ greys.length);
         if (defaultlogoH) {
            break;
         }
      } while ((q_viewL < ballg) && defaultlogoH);
          let stringsc = String.fromCharCode(114,101,99,111,103,110,105,122,101,95,112,95,54,50,0);
          let station6 = false;
          let customR = String.fromCharCode(108,95,54,53,95,115,112,101,108,108,0);
         defaultplayerimgV = q_viewL > 46.86;
         stringsc += `${customR.length % 1}`;
         station6 = customR.length == 21;
      for (let p = 0; p < 2; p++) {
          let gemfile2 = String.fromCharCode(98,95,51,57,95,117,99,109,112,0);
          let basketballiconv: Map<any, any> = new Map([[String.fromCharCode(115,117,98,108,97,121,111,117,116,115,95,53,95,55,48,0),String.fromCharCode(120,95,55,95,112,114,111,112,101,114,0)], [String.fromCharCode(116,111,100,97,121,115,95,57,95,56,0),String.fromCharCode(110,95,56,50,95,116,114,105,108,105,110,101,97,114,0)]]);
          let dropdownb = false;
          let yellowcirclebgn: Array<any> = [212, 621, 665];
         q_viewL -= ((defaultplayerimgV ? 5 : 2) + yellowcirclebgn.length);
         gemfile2 = `${(2 + (dropdownb ? 3 : 5))}`;
         basketballiconv = new Map([[`${basketballiconv.size}`, 3]]);
         dropdownb = basketballiconv.size == 100 && String.fromCharCode(49,0) == gemfile2;
         yellowcirclebgn = [1 / (Math.max(4, gemfile2.length))];
      }
      let unimplementedviewI = 5503794.0 <= ballg;
      do {
         ballg += parseFloat(`${3 * parseInt(`${giftM}`)}`);
         if (unimplementedviewI) {
            break;
         }
      } while ((2.74 == giftM) && unimplementedviewI);
      while (1.58 >= (ballg * 5.82)) {
          let scoreZ = String.fromCharCode(117,95,57,50,95,102,105,108,116,101,114,103,114,97,112,104,0);
          let runtimer = String.fromCharCode(97,114,99,104,105,118,101,95,54,95,57,50,0);
          let agreementy = 4;
          let libavformaty = 3.0;
          let shootnogoal3 = 3.0;
         ballg /= Math.max(4, parseFloat(`${3 - parseInt(`${ballg}`)}`));
         scoreZ += `${1 ^ parseInt(`${shootnogoal3}`)}`;
         runtimer = `${parseInt(`${libavformaty}`)}`;
         agreementy /= Math.max(parseInt(`${libavformaty}`), 1);
         shootnogoal3 -= scoreZ.length + 2;
         break;
      }
          let libreactnativeblob_ = String.fromCharCode(112,95,57,49,95,116,105,116,108,101,115,0);
          let analytics5 = String.fromCharCode(116,95,48,95,116,114,97,105,108,0);
         ballg *= parseFloat(`${1 % (Math.max(6, parseInt(`${ballg}`)))}`);
         libreactnativeblob_ = `${analytics5.length}`;
         analytics5 += `${analytics5.length}`;
      let match0 = 8395529.0 >= ballg;
      do {
         ballg += (parseFloat(`${parseInt(`${giftM}`) + (defaultplayerimgV ? 3 : 3)}`));
         if (match0) {
            break;
         }
      } while (match0 && (defaultplayerimgV));
       let libreanimatedf: Array<any> = [String.fromCharCode(114,97,119,118,105,100,101,111,95,104,95,54,55,0), String.fromCharCode(115,104,111,119,95,53,95,54,56,0)];
       let buildP: Array<any> = [851, 109, 52];
      agreement8 = [((optionsN ? 2 : 1) >> (Math.min(greytickE.length, 2)))];
   }
   for (let y = 0; y < 2; y++) {
      libglogc = actionX < 11.95;
   }
      basketballawayteamY /= Math.max(statsnomoredataO.length, 5);
   for (let y = 0; y < 1; y++) {
      middle_ = `${statsnomoredataO.length}`;
   }
   let vnewsshareQ = actionX <= 5688932.0;
   do {
      actionX += 3 - agreement8.length;
      if (vnewsshareQ) {
         break;
      }
   } while (vnewsshareQ && (1 == (agreement8.length % (Math.max(2, 6))) && (2 * agreement8.length) == 3));
       let constantsv = 0;
      for (let k = 0; k < 3; k++) {
         constantsv /= Math.max(constantsv, 1);
      }
         constantsv /= Math.max(2, 3);
      let kuaishou5 = constantsv <= 6018108;
      do {
         constantsv <<= Math.min(Math.abs(constantsv), 5);
         if (kuaishou5) {
            break;
         }
      } while ((4 >= (constantsv % 1)) && kuaishou5);
      agreement8.push(2);
      screenR = [3];
      actionX -= screenR.length >> (Math.min(libsentry7.length, 4));
      playlistm -= libsentry7.length - greytickE.length;
   let rncorej = middle_.length <= 6217005;
   do {
      middle_ += `${statsnomoredataO.length}`;
      if (rncorej) {
         break;
      }
   } while (rncorej && (!middle_.includes(`${actionX}`)));
   for (let p = 0; p < 1; p++) {
      basketballawayteamY += 3 - parseInt(`${actionX}`);
   }
      optionsN = 17.5 > (actionX - basketballawayteamY);
       let bggradientE = false;
       let moviesQ = 0.0;
          let productT = 0.0;
          let iconadslinkp = 5;
          let iconstarp = 3;
         bggradientE = bggradientE && 83.37 > productT;
         productT += parseFloat(`${iconadslinkp / (Math.max(2, iconstarp))}`);
         iconadslinkp -= iconstarp & iconadslinkp;
      for (let l = 0; l < 2; l++) {
         bggradientE = moviesQ <= 91.35 || !bggradientE;
      }
      while (bggradientE) {
         bggradientE = !bggradientE;
         break;
      }
         bggradientE = !bggradientE || 100.61 > moviesQ;
         moviesQ -= (parseInt(`${moviesQ}`) >> (Math.min(1, Math.abs((bggradientE ? 4 : 3)))));
      let notificationfillemptyT = bggradientE ? !bggradientE : bggradientE;
      do {
         bggradientE = 87.95 > moviesQ;
         if (notificationfillemptyT) {
            break;
         }
      } while (((moviesQ + 1.60) > 4.69 && 1.60 > moviesQ) && notificationfillemptyT);
      agreement8 = [parseInt(`${moviesQ}`) / 3];
   while (statsnomoredataO.endsWith(`${screenR.length}`)) {
      screenR.push(2);
      break;
   }
   if ((agreement8.length ^ screenR.length) == 1) {
      screenR.push(statsnomoredataO.length);
   }
      playlistm /= Math.max(3, 1 * greytickE.length);

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
       let libmapbufferjniK = 0.0;
    let arrowrightn = String.fromCharCode(118,95,53,48,95,100,105,115,97,112,112,101,97,114,105,110,103,0);
    let iconarrowrightoranget = String.fromCharCode(103,95,52,51,95,100,101,102,97,117,108,116,115,0);
    let history_ = true;
    let unselectedC = String.fromCharCode(109,95,57,57,95,111,114,105,103,0);
    let dragI: Map<any, any> = new Map([[String.fromCharCode(104,95,51,95,112,114,111,120,121,0),867], [String.fromCharCode(100,101,99,98,110,95,117,95,53,0),342]]);
    let matchactivei = String.fromCharCode(120,95,50,56,95,111,110,101,112,97,115,115,0);
    let nativek = true;
    let readz: Map<any, any> = new Map([[String.fromCharCode(99,95,52,52,95,114,101,99,111,110,115,116,114,117,99,116,0),String.fromCharCode(108,95,55,49,95,120,103,97,115,0)], [String.fromCharCode(114,97,108,102,95,50,95,49,56,0),String.fromCharCode(122,95,49,52,95,97,116,116,114,105,98,117,116,101,115,0)]]);
    let nalyticss = 1.0;
    let smallsoundu: Map<any, any> = new Map([[String.fromCharCode(110,95,51,48,95,111,118,101,114,118,105,101,119,0),164], [String.fromCharCode(100,95,49,51,95,118,102,105,108,116,101,114,0),286], [String.fromCharCode(102,95,57,53,95,115,117,98,112,101,108,0),310]]);
    let taiwanU = 5.0;
    let heji7 = 3.0;
    let basketballplayerplaceholder5 = false;
    let fullscreenminU = String.fromCharCode(105,100,97,115,115,101,116,115,95,118,95,54,48,0);
    let arrowselectdownL: Array<any> = [241, 761];
    let binddatasK = String.fromCharCode(114,101,113,117,101,115,116,95,104,95,51,54,0);
    let holderU = String.fromCharCode(102,105,114,115,116,112,97,115,115,95,102,95,56,50,0);
   let dataZ = nalyticss >= 5404520.0;
   do {
       let weatherQ = 4;
       let iconwatchnowS = 3.0;
      for (let h = 0; h < 3; h++) {
         weatherQ += weatherQ << (Math.min(1, Math.abs(2)));
      }
      while ((weatherQ - parseInt(`${iconwatchnowS}`)) < 2 || 3.98 < (2.78 - iconwatchnowS)) {
         iconwatchnowS *= weatherQ % 2;
         break;
      }
       let libfb6 = String.fromCharCode(100,101,102,114,97,103,109,101,110,116,95,122,95,54,51,0);
       let defaultroombgv = String.fromCharCode(100,105,102,102,95,54,95,52,52,0);
      while (weatherQ == defaultroombgv.length) {
          let bufferh: Map<any, any> = new Map([[String.fromCharCode(121,95,55,57,95,105,115,116,111,103,114,97,109,0),576], [String.fromCharCode(109,100,105,97,95,108,95,53,56,0),267]]);
          let ocopy_zL = 3.0;
          let notificationfillemptyK = 1.0;
          let libimagepipelineo = String.fromCharCode(121,95,50,52,95,102,117,122,122,101,114,0);
          let roundX = true;
         weatherQ ^= parseInt(`${iconwatchnowS}`) / (Math.max(1, 10));
         bufferh = new Map([[libimagepipelineo, parseInt(`${ocopy_zL}`) / 2]]);
         ocopy_zL *= parseFloat(`${bufferh.size}`);
         notificationfillemptyK *= 3 * parseInt(`${ocopy_zL}`);
         libimagepipelineo += `${2 >> (Math.min(1, Math.abs(parseInt(`${notificationfillemptyK}`))))}`;
         roundX = notificationfillemptyK > 55.89;
         break;
      }
      while (5 >= (weatherQ / 2) && (iconwatchnowS * weatherQ) >= 5.61) {
          let darkW = 2.0;
          let zhuboF = String.fromCharCode(100,114,97,119,117,116,105,108,115,95,108,95,54,56,0);
         weatherQ <<= Math.min(2, Math.abs(weatherQ));
         darkW -= parseFloat(`${zhuboF.length & 3}`);
         zhuboF += `${(String.fromCharCode(102,0) == zhuboF ? parseInt(`${darkW}`) : zhuboF.length)}`;
         break;
      }
          let smallbrightnessj = false;
         iconwatchnowS /= Math.max(parseInt(`${iconwatchnowS}`) / 3, 2);
         smallbrightnessj = (smallbrightnessj ? !smallbrightnessj : !smallbrightnessj);
      nalyticss *= parseInt(`${nalyticss}`) & 2;
      if (dataZ) {
         break;
      }
   } while (dataZ && (1.52 > (nalyticss / 2.78)));

    if (isSubmitting) return;

      matchactivei = `${2 & readz.size}`;

    if (isReadTermNCondition == false) {

      unselectedC += `${smallsoundu.size ^ parseInt(`${nalyticss}`)}`;
      return;

   while ((1 ^ smallsoundu.size) == 1) {
       let libtobK = 3.0;
       let mini_ = String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,116,105,111,110,95,51,95,51,51,0);
       let yellowanimationlive7 = 0.0;
       let cornershoota = String.fromCharCode(117,95,54,57,95,108,105,118,101,115,116,114,101,97,109,0);
         cornershoota = `${(mini_ == String.fromCharCode(72,0) ? mini_.length : parseInt(`${yellowanimationlive7}`))}`;
      while ((parseFloat(`${cornershoota.length}`) / (Math.max(2, yellowanimationlive7))) >= 1.88) {
         cornershoota = `${parseInt(`${libtobK}`) >> (Math.min(Math.abs(1), 2))}`;
         break;
      }
      if ((yellowanimationlive7 * 5.0) <= 2.21) {
          let sharemodalF = String.fromCharCode(109,117,108,116,105,112,108,101,114,95,50,95,50,48,0);
         yellowanimationlive7 += parseFloat(`${3}`);
         sharemodalF += `${sharemodalF.length & 1}`;
      }
      let sharewhiteQ = 6157071 <= cornershoota.length;
      do {
          let interneta = true;
          let shielddoneC: Map<any, any> = new Map([[String.fromCharCode(116,95,48,95,105,100,99,116,120,100,99,0),14], [String.fromCharCode(99,101,114,116,112,111,108,95,105,95,49,48,48,0),718], [String.fromCharCode(109,112,101,103,116,115,95,115,95,53,50,0),632]]);
          let textinputW: Map<any, any> = new Map([[String.fromCharCode(98,105,111,109,101,116,114,121,95,106,95,56,50,0),true ], [String.fromCharCode(104,95,51,57,95,115,111,100,105,115,99,111,110,110,101,99,116,0),false ]]);
          let transferP = false;
          let profileinactiveD = true;
         cornershoota = `${((interneta ? 3 : 3) - parseInt(`${libtobK}`))}`;
         interneta = textinputW.size == 23 && !profileinactiveD;
         shielddoneC = new Map([[`${shielddoneC.size}`, shielddoneC.size - 3]]);
         textinputW = new Map([[`${transferP}`, ((transferP ? 1 : 4) % (Math.max((profileinactiveD ? 1 : 2), 10)))]]);
         if (sharewhiteQ) {
            break;
         }
      } while (sharewhiteQ && (parseFloat(`${cornershoota.length}`) < libtobK));
         yellowanimationlive7 *= parseFloat(`${2 - parseInt(`${libtobK}`)}`);
      for (let m = 0; m < 2; m++) {
         yellowanimationlive7 -= parseFloat(`${2}`);
      }
          let tempnodatagif9 = 2;
          let redcirclebgp: Array<any> = [340, 638];
         mini_ = `${parseInt(`${libtobK}`) & tempnodatagif9}`;
         tempnodatagif9 -= redcirclebgp.length / (Math.max(4, redcirclebgp.length));
       let layoutm = 0.0;
      for (let v = 0; v < 3; v++) {
          let background8 = String.fromCharCode(112,95,57,55,95,109,105,103,104,116,0);
          let showmorew: Map<any, any> = new Map([[String.fromCharCode(99,104,111,111,115,101,114,95,109,95,56,51,0),452], [String.fromCharCode(121,95,50,50,95,100,105,97,108,108,105,110,103,0),595], [String.fromCharCode(108,111,111,112,102,105,108,116,101,114,95,120,95,57,54,0),611]]);
         cornershoota += `${parseInt(`${layoutm}`) ^ cornershoota.length}`;
         background8 = `${showmorew.size}`;
         showmorew = new Map([[`${showmorew.size}`, showmorew.size << (Math.min(Math.abs(3), 5))]]);
      }
      let malaysiaf = 8260318 <= mini_.length;
      do {
         mini_ = `${cornershoota.length >> (Math.min(2, Math.abs(parseInt(`${layoutm}`))))}`;
         if (malaysiaf) {
            break;
         }
      } while (malaysiaf && (cornershoota != String.fromCharCode(85,0)));
      for (let l = 0; l < 3; l++) {
          let belle = 4.0;
          let phone_ = false;
          let imagenomoredataT = false;
          let volumed = String.fromCharCode(105,95,54,54,95,115,121,115,108,111,103,0);
         libtobK += (parseFloat(`${(imagenomoredataT ? 3 : 2) & 2}`));
         belle *= parseFloat(`${parseInt(`${belle}`) * volumed.length}`);
         phone_ = parseFloat(`${volumed.length}`) == belle;
         imagenomoredataT = 14.58 >= belle;
      }
          let ccdfbdabcabbbedbG = 5.0;
          let fullQ: Map<any, any> = new Map([[String.fromCharCode(102,105,120,116,117,114,101,115,95,53,95,57,0),58], [String.fromCharCode(122,95,51,50,95,104,111,109,101,0),911]]);
          let penaltygoalN = String.fromCharCode(103,95,51,49,95,98,97,99,107,115,105,100,101,0);
         mini_ += "2";
         ccdfbdabcabbbedbG /= Math.max(4, 3 / (Math.max(6, parseInt(`${ccdfbdabcabbbedbG}`))));
         fullQ.set(penaltygoalN, 1 + fullQ.size);
         penaltygoalN += `${fullQ.size}`;
      history_ = 79 >= mini_.length;
      break;
   }
    }

    const formattedLoginValue = loginType === 'phone' ? loginValue.replace(/\s/g, '') : loginValue;

    

   while ((readz.size * 1) >= 2 && 2.100 >= (2.93 / (Math.max(3, nalyticss)))) {
      readz.set(arrowrightn, ((history_ ? 3 : 3) / (Math.max(arrowrightn.length, 2))));
      break;
   }
    

   let iconbellm = String.fromCharCode(95,116,109,97,57,118,98,48,0) == matchactivei;
   do {
      matchactivei += `${((nativek ? 1 : 1) ^ parseInt(`${taiwanU}`))}`;
      if (iconbellm) {
         break;
      }
   } while (iconbellm && (unselectedC != matchactivei));
    

      nalyticss *= 2;
    

   if (1.50 > taiwanU) {
       let defaultplayerimgm = String.fromCharCode(99,111,110,116,105,110,117,101,115,95,104,95,55,50,0);
       let predictionbannersharedC = String.fromCharCode(112,114,105,110,116,97,98,108,101,95,111,95,54,53,0);
       let profileactiveM = 3;
       let fieldY = 2;
      for (let a = 0; a < 1; a++) {
         predictionbannersharedC = `${fieldY}`;
      }
      let closes = 6011138 <= predictionbannersharedC.length;
      do {
          let handler2: Map<any, any> = new Map([[String.fromCharCode(116,95,57,50,0),921], [String.fromCharCode(119,95,56,57,95,115,116,97,114,114,101,100,0),852], [String.fromCharCode(102,95,54,51,95,109,115,112,101,108,0),937]]);
          let flipperz = String.fromCharCode(97,95,51,53,95,115,101,110,99,0);
          let flagS: Map<any, any> = new Map([[String.fromCharCode(105,100,115,95,107,95,51,52,0),false ], [String.fromCharCode(112,105,110,95,116,95,50,56,0),true ]]);
          let orangeclockE = String.fromCharCode(119,105,112,101,95,112,95,53,56,0);
         predictionbannersharedC = `${orangeclockE.length}`;
         handler2 = new Map([[`${handler2.size}`, 1 >> (Math.min(4, flipperz.length))]]);
         flipperz = `${flagS.size % (Math.max(handler2.size, 9))}`;
         flagS = new Map([[`${flagS.size}`, 1]]);
         orangeclockE += `${flagS.size * handler2.size}`;
         if (closes) {
            break;
         }
      } while (((5 << (Math.min(2, Math.abs(profileactiveM)))) >= 1) && closes);
         predictionbannersharedC += `${predictionbannersharedC.length}`;
          let bannern = 5.0;
          let cancelj = String.fromCharCode(97,121,117,118,108,101,95,54,95,52,49,0);
          let dataB = 0.0;
         predictionbannersharedC += `${fieldY & predictionbannersharedC.length}`;
         bannern /= Math.max(2, parseFloat(`${3}`));
         cancelj = `${parseInt(`${dataB}`)}`;
         profileactiveM &= profileactiveM >> (Math.min(defaultplayerimgm.length, 4));
          let loadingL = String.fromCharCode(113,116,115,95,101,95,57,53,0);
          let subsr = String.fromCharCode(108,95,51,95,97,110,97,108,121,115,105,115,0);
         profileactiveM += (String.fromCharCode(66,0) == loadingL ? loadingL.length : defaultplayerimgm.length);
         subsr = `${subsr.length}`;
         fieldY &= profileactiveM;
         predictionbannersharedC = "2";
          let nativeexr: Array<any> = [193, 117, 274];
          let renewT = 1.0;
          let predictionarrowz = true;
         predictionbannersharedC = `${predictionbannersharedC.length | 3}`;
         nativeexr.push(2);
         renewT -= parseFloat(`${1 - parseInt(`${renewT}`)}`);
         predictionarrowz = nativeexr.includes(renewT);
      let reward9 = profileactiveM <= 6112089;
      do {
          let textlayoutmanagerx = String.fromCharCode(122,95,49,53,95,100,105,114,101,99,116,105,111,110,115,0);
          let libavcodecD = String.fromCharCode(115,101,116,116,105,109,101,111,117,116,95,113,95,55,56,0);
         profileactiveM *= 1 << (Math.min(5, Math.abs(fieldY)));
         textlayoutmanagerx = `${3 / (Math.max(10, textlayoutmanagerx.length))}`;
         libavcodecD = `${1 | libavcodecD.length}`;
         if (reward9) {
            break;
         }
      } while (reward9 && (5 >= (profileactiveM >> (Math.min(predictionbannersharedC.length, 1)))));
      let humidityE = String.fromCharCode(115,48,101,118,109,0) == predictionbannersharedC;
      do {
         predictionbannersharedC += "3";
         if (humidityE) {
            break;
         }
      } while (humidityE && (1 == predictionbannersharedC.length));
          let caste: Map<any, any> = new Map([[String.fromCharCode(110,95,50,51,95,114,101,112,114,101,115,101,110,116,97,98,108,101,0),false ], [String.fromCharCode(119,105,115,101,95,99,95,51,53,0),false ]]);
          let popup9 = String.fromCharCode(120,95,53,50,95,115,104,97,100,105,110,103,0);
          let telegraml = String.fromCharCode(112,95,56,50,95,101,120,116,114,97,99,116,105,111,110,0);
         fieldY |= (predictionbannersharedC == String.fromCharCode(69,0) ? fieldY : predictionbannersharedC.length);
         caste = new Map([[popup9, 2]]);
         popup9 = `${popup9.length}`;
         telegraml += `${popup9.length}`;
      taiwanU -= fieldY - 1;
   }

    if (formattedLoginValue === "" || loginValueErrMsg !== null) {
      setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
      return;
    }

    try {

   let privacyJ = readz.size <= 8259803;
   do {
       let code5 = String.fromCharCode(118,115,105,110,107,95,48,95,57,53,0);
       let eactU = 0.0;
       let fileS = 3.0;
       let bingZ = 2.0;
         fileS += code5.length;
      if (3 <= code5.length) {
          let mintegralw = String.fromCharCode(98,95,55,54,95,105,100,101,110,116,105,99,97,108,0);
          let iconwatchH = String.fromCharCode(122,95,57,54,95,97,117,116,111,103,101,110,0);
          let launchv = String.fromCharCode(109,95,49,48,95,97,114,99,104,105,116,101,99,116,117,114,101,0);
         bingZ += parseFloat(`${2}`);
         mintegralw += `${launchv.length}`;
         iconwatchH = `${(mintegralw == String.fromCharCode(67,0) ? mintegralw.length : iconwatchH.length)}`;
         launchv = `${launchv.length}`;
      }
         eactU /= Math.max(4, 3);
         code5 += `${(code5 == String.fromCharCode(122,0) ? parseInt(`${eactU}`) : code5.length)}`;
         fileS /= Math.max(2, parseInt(`${eactU}`));
         fileS /= Math.max(code5.length * 1, 4);
      if (5.52 > (4.46 - fileS)) {
          let iconadslinkv: Array<any> = [String.fromCharCode(106,95,52,51,95,112,117,116,115,116,114,0), String.fromCharCode(119,95,54,57,95,114,101,102,111,99,117,115,0), String.fromCharCode(122,95,55,50,95,114,101,112,101,97,116,105,110,103,0)];
          let iconbellactiveW = 0.0;
          let castO = String.fromCharCode(122,95,49,50,95,118,97,114,105,97,98,105,108,105,116,121,0);
          let attributedstringF = 4;
         fileS *= iconadslinkv.length;
         iconadslinkv = [attributedstringF];
         iconbellactiveW *= castO.length | attributedstringF;
         castO += `${castO.length}`;
      }
         fileS /= Math.max(parseInt(`${bingZ}`) & 1, 4);
      for (let t = 0; t < 2; t++) {
          let thumbnailN = String.fromCharCode(100,95,55,57,95,112,97,114,115,101,114,115,0);
          let subinC = 3.0;
          let pointn: Array<any> = [161, 311];
         code5 += `${pointn.length + 3}`;
         thumbnailN += `${(String.fromCharCode(112,0) == thumbnailN ? thumbnailN.length : parseInt(`${subinC}`))}`;
         subinC += parseFloat(`${thumbnailN.length << (Math.min(1, Math.abs(parseInt(`${subinC}`))))}`);
         pointn.push(3 << (Math.min(5, thumbnailN.length)));
      }
      if (3.89 == (2.23 + bingZ) && 1.81 == (2.23 + eactU)) {
         eactU /= Math.max(1, parseInt(`${fileS}`));
      }
      let screeno = eactU >= 6354362.0;
      do {
          let listI = 4.0;
          let nalyticsV = String.fromCharCode(119,95,54,52,95,100,101,105,110,116,0);
          let philippineso = false;
         eactU *= parseInt(`${fileS}`) | 3;
         listI *= parseFloat(`${nalyticsV.length}`);
         nalyticsV += "2";
         philippineso = (((philippineso ? 14 : nalyticsV.length) << (Math.min(nalyticsV.length, 5))) == 14);
         if (screeno) {
            break;
         }
      } while (((eactU / 5.73) <= 2.82 && 4.80 <= (5.73 + eactU)) && screeno);
      for (let p = 0; p < 2; p++) {
         code5 = `${parseInt(`${fileS}`) | 2}`;
      }
      readz = new Map([[`${libmapbufferjniK}`, 3 % (Math.max(parseInt(`${libmapbufferjniK}`), 10))]]);
      if (privacyJ) {
         break;
      }
   } while (privacyJ && (!arrowrightn.endsWith(`${readz.size}`)));
      setSubmitting(true);

   let giftbuttonx = 6401435 <= dragI.size;
   do {
       let issubM = 5;
       let orangetickV: Map<any, any> = new Map([[String.fromCharCode(118,95,56,54,95,102,114,111,109,98,105,110,100,0),41], [String.fromCharCode(105,110,99,114,109,101,114,103,101,95,107,95,57,52,0),433], [String.fromCharCode(99,97,118,115,105,100,99,116,95,55,95,56,48,0),180]]);
       let searchP = String.fromCharCode(107,95,52,55,95,116,101,109,112,110,97,109,101,0);
       let volume1 = String.fromCharCode(120,95,55,50,95,114,105,110,103,105,110,103,0);
       let phoneshareM = 4;
          let homeloadingv: Map<any, any> = new Map([[String.fromCharCode(114,95,55,95,100,117,109,0),false ], [String.fromCharCode(114,101,107,101,121,95,114,95,54,53,0),false ]]);
          let layoutN = String.fromCharCode(102,114,97,110,100,111,109,95,102,95,52,0);
          let playercommonm = false;
         searchP += `${volume1.length << (Math.min(5, Math.abs(orangetickV.size)))}`;
         homeloadingv = new Map([[layoutN, layoutN.length]]);
         playercommonm = homeloadingv.get(`${playercommonm}`) == null;
      let sharemodalZ = 8972653 <= orangetickV.size;
      do {
          let smallsoundh: Map<any, any> = new Map([[String.fromCharCode(117,110,105,113,117,101,100,95,110,95,50,57,0),510], [String.fromCharCode(121,95,48,95,101,118,97,108,0),322]]);
          let halffieldimageZ = false;
          let l_image6 = String.fromCharCode(101,95,55,51,95,116,111,112,0);
         orangetickV.set(`${issubM}`, issubM * l_image6.length);
         smallsoundh = new Map([[`${smallsoundh.size}`, smallsoundh.size + 2]]);
         halffieldimageZ = !halffieldimageZ;
         l_image6 += `${smallsoundh.size}`;
         if (sharemodalZ) {
            break;
         }
      } while (sharemodalZ && (volume1.endsWith(`${orangetickV.size}`)));
         volume1 = `${volume1.length}`;
         issubM *= issubM;
         searchP = `${1 % (Math.max(6, issubM))}`;
          let middleE = String.fromCharCode(111,95,53,95,97,100,100,105,110,103,0);
          let largebrightness9 = 2.0;
         searchP = `${1 >> (Math.min(3, Math.abs(phoneshareM)))}`;
         middleE = `${(middleE == String.fromCharCode(116,0) ? middleE.length : parseInt(`${largebrightness9}`))}`;
         largebrightness9 += parseFloat(`${middleE.length >> (Math.min(Math.abs(3), 3))}`);
      let private_wuJ = phoneshareM >= 5130532;
      do {
         phoneshareM <<= Math.min(5, Math.abs(1 * searchP.length));
         if (private_wuJ) {
            break;
         }
      } while ((volume1.includes(`${phoneshareM}`)) && private_wuJ);
      if (4 >= (phoneshareM % (Math.max(orangetickV.size, 4))) || 4 >= (phoneshareM % (Math.max(orangetickV.size, 10)))) {
         orangetickV = new Map([[`${orangetickV.size}`, phoneshareM / (Math.max(orangetickV.size, 6))]]);
      }
      let iconstarT = issubM <= 6007756;
      do {
         issubM &= 1 ^ volume1.length;
         if (iconstarT) {
            break;
         }
      } while (iconstarT && ((issubM * 3) >= 2 && 4 >= (volume1.length * 3)));
      while (orangetickV.size < 3) {
          let runtimeL = String.fromCharCode(97,100,100,111,112,95,50,95,55,57,0);
          let foundg: Map<any, any> = new Map([[String.fromCharCode(114,95,57,95,112,114,101,102,101,116,99,104,0),174], [String.fromCharCode(101,109,115,99,114,105,112,116,101,110,95,48,95,50,49,0),848], [String.fromCharCode(109,95,57,53,95,111,108,100,110,101,119,0),311]]);
          let context5 = String.fromCharCode(110,95,55,52,95,97,99,113,117,105,114,101,100,0);
         orangetickV.set(`${volume1}`, foundg.size >> (Math.min(volume1.length, 2)));
         runtimeL += `${(runtimeL == String.fromCharCode(116,0) ? context5.length : runtimeL.length)}`;
         foundg = new Map([[runtimeL, runtimeL.length - context5.length]]);
         break;
      }
          let circleV = false;
          let defaultroombg6 = 1.0;
          let dialogj = 5.0;
         orangetickV.set(`${circleV}`, ((circleV ? 4 : 3) | phoneshareM));
         defaultroombg6 *= parseFloat(`${parseInt(`${dialogj}`)}`);
      while ((5 % (Math.max(6, phoneshareM))) > 3 && (volume1.length % 5) > 1) {
         phoneshareM *= phoneshareM;
         break;
      }
         issubM /= Math.max(5, orangetickV.size / 1);
      let headerT = 6087628 <= phoneshareM;
      do {
         phoneshareM |= 3;
         if (headerT) {
            break;
         }
      } while (((volume1.length * phoneshareM) >= 2) && headerT);
      let icondefaultthumbnailY = String.fromCharCode(95,108,99,55,115,114,119,0) == searchP;
      do {
         searchP += `${orangetickV.size - searchP.length}`;
         if (icondefaultthumbnailY) {
            break;
         }
      } while (icondefaultthumbnailY && (searchP.length == 4 || 4 == volume1.length));
      dragI.set(`${iconarrowrightoranget}`, 2);
      if (giftbuttonx) {
         break;
      }
   } while (giftbuttonx && (2 > (3 << (Math.min(3, unselectedC.length))) && (dragI.size << (Math.min(Math.abs(3), 3))) > 2));

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

      history_ = readz.get(`${nativek}`) == null;
      setLoginValueErrMsg(err);

      dragI.set(arrowrightn, (arrowrightn == String.fromCharCode(97,0) ? parseInt(`${nalyticss}`) : arrowrightn.length));
      return;
    }

    setSubmitting(false);

   for (let k = 0; k < 1; k++) {
      nativek = smallsoundu.size >= 51 || arrowrightn == String.fromCharCode(68,0);
   }

    dispatch(hideBottomSheetAction());

   if ((matchactivei.length - parseInt(`${libmapbufferjniK}`)) > 5 && (parseInt(`${libmapbufferjniK}`) - matchactivei.length) > 5) {
      libmapbufferjniK -= parseInt(`${taiwanU}`);
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
            source={require("../../../../static/images/profile/updatesDisconnected.png")}
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
                source={require("../../../../static/images/profile/statisticsinactiveYellowscoreball.png")}
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
              source={require("../../../../static/images/invite/libreactIconeye.png")}
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
                source={require("../../../../static/images/profile/statisticsinactiveYellowscoreball.png")}
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
              source={require("../../../../static/images/invite/libreactIconeye.png")}
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
