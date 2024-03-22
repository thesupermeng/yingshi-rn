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
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/kg_index";
import {
  changeScreenAction,
  hideBottomSheetAction,
  navigateToProfileScreen,
} from "@redux/actions/a_switch";
import SpinnerOverlay from "../modal/SpinnerOverlay";
import PhoneIcon from '@static/images/xvodPromotionPrivate_xa.svg';
import MailIcon from '@static/images/shootGift.svg';
import GmailIcon from '@static/images/redirectType_8.svg';
import DropdownIcon from '@static/images/dialogOverlayTwitter.svg';
import { CountryPhoneList } from "./countryPhoneList";
import FastImage from '../common/customFastImage';
import { GBShort } from "@type/wpk_long";
import { ReadAgreementPrivacyPolicy } from "./readAgreementPrivacyPolicy";

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useQuery } from "@tanstack/react-query";
import { API_DOMAIN } from "@utility/n_subs_interstitial";
import { SMBing } from "@utility/sa_crown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import umb_center_carousel from "../../../../Umeng/umb_center_carousel";
import { useDispatch } from "react-redux";
import { addUserAuthState } from "@redux/actions/rk_filed_watch";
import { THFirebase } from "@api";
import { PSmall } from "@redux/fj_prediction_thailand";
import { KWConstants } from "@models/kl_sheet";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import LRZTermsScreen from "../../../../AppsFlyer/i_dialog";


export type SXvod = {
  resetValue: () => void,
}

type XFillButton = {
  onGooleLoginSuccess?: () => void,
}

export const SigninupForm = forwardRef<SXvod, XFillButton>(({
  onGooleLoginSuccess,
}: XFillButton, ref) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [loginType, setloginType] = useState<'email' | 'phone'>('email');

  const [loginValue, setLoginValue] = useState(''); 
  const [referralCode, setReferralCode] = useState('');
  const [loginValueErrMsg, setLoginValueErrMsg] = useState<string | null>(null); 
  const [referralCodeErrMsg, setReferralCodeErrMsg] = useState<string | null>(null);
  const [isReadTermNCondition, setReadTermNCondition] = useState(false);

  
  const [isShowCountryList, setShowCountryList] = useState(false);
  const [countryPhoneSelected, setCountryPhoneSelected] = useState<GBShort>();

  
  const [isSubmitting, setSubmitting] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  const userState = useSelector<HDTGesturesList>('userReducer');

  const { data: countryPhoneOptions } = useQuery({
    queryKey: ["CountryPhoneOptions"],
    queryFn: () => THFirebase.getCountries(),
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
       let google5 = String.fromCharCode(105,103,110,111,114,101,95,103,95,50,48,0);
    let logoH = 5.0;
    let textF: Map<any, any> = new Map([[String.fromCharCode(115,99,111,114,101,95,97,95,51,48,0),397], [String.fromCharCode(98,105,116,115,112,117,108,115,101,115,95,101,95,51,55,0),287], [String.fromCharCode(98,105,116,112,108,97,110,101,95,114,95,56,55,0),575]]);
    let weibo4 = String.fromCharCode(106,95,55,51,95,119,97,116,99,104,101,114,0);
    let combinez = 2.0;
    let canvasb = 4.0;
    let groupY: Array<any> = [598, 736];
    let window_9fv = String.fromCharCode(101,95,55,55,95,111,103,103,118,111,114,98,105,115,0);
    let white7: Map<any, any> = new Map([[String.fromCharCode(120,95,49,50,95,100,105,115,116,114,105,98,117,116,101,0),true ], [String.fromCharCode(112,114,111,103,114,97,109,109,97,116,105,99,97,108,108,121,95,100,95,56,56,0),true ], [String.fromCharCode(102,111,114,109,97,116,116,105,110,103,95,115,95,54,49,0),false ]]);
    let anythinkS = true;
    let p_positiong: Array<any> = [31, 718];
    let sourcei = String.fromCharCode(117,95,52,51,95,101,118,101,114,121,119,104,101,114,101,0);
   let combinedr = String.fromCharCode(121,106,119,103,54,110,0) == window_9fv;
   do {
      window_9fv = `${textF.size}`;
      if (combinedr) {
         break;
      }
   } while ((anythinkS) && combinedr);
   let whatsappE = canvasb >= 5015439.0;
   do {
      canvasb += groupY.length * window_9fv.length;
      if (whatsappE) {
         break;
      }
   } while ((p_positiong.length > 3) && whatsappE);
   for (let a = 0; a < 2; a++) {
      weibo4 = `${((anythinkS ? 2 : 4) ^ p_positiong.length)}`;
   }
   if (2 > (p_positiong.length + 4)) {
       let thumbnailB: Array<any> = [576, 874, 168];
         thumbnailB.push(thumbnailB.length & thumbnailB.length);
         thumbnailB = [thumbnailB.length];
         thumbnailB.push(thumbnailB.length);
      p_positiong = [(parseInt(`${logoH}`) << (Math.min(5, Math.abs((anythinkS ? 1 : 5)))))];
   }
      combinez /= Math.max(3 >> (Math.min(3, weibo4.length)), 2);
      groupY.push(2 | groupY.length);

    setloginType('email');

       let photoH: Map<any, any> = new Map([[String.fromCharCode(121,95,51,56,95,105,110,102,111,114,109,97,116,105,118,101,0),684], [String.fromCharCode(119,95,50,95,115,101,108,101,99,116,0),310], [String.fromCharCode(101,108,101,118,97,116,101,95,54,95,57,0),29]]);
       let minimizey = String.fromCharCode(100,101,114,105,118,95,56,95,57,51,0);
      let kickz = minimizey == String.fromCharCode(108,95,105,116,109,112,121,114,106,0);
      do {
         minimizey += `${3 + photoH.size}`;
         if (kickz) {
            break;
         }
      } while ((4 == (photoH.size >> (Math.min(Math.abs(2), 3))) || 1 == (minimizey.length >> (Math.min(Math.abs(2), 4)))) && kickz);
      while (photoH.size < 3) {
         photoH.set(`${minimizey}`, photoH.size + minimizey.length);
         break;
      }
         photoH.set(minimizey, (minimizey == String.fromCharCode(111,0) ? photoH.size : minimizey.length));
       let nativez = String.fromCharCode(115,107,101,119,95,118,95,57,51,0);
         minimizey = `${(String.fromCharCode(112,0) == nativez ? nativez.length : photoH.size)}`;
         photoH = new Map([[minimizey, minimizey.length]]);
      google5 = `${(window_9fv == String.fromCharCode(69,0) ? window_9fv.length : photoH.size)}`;
   for (let h = 0; h < 2; h++) {
       let update_jZ = true;
       let showK = 5.0;
       let penaltyP: Array<any> = [942, 577];
       let twitters: Array<any> = [581, 563];
         twitters = [parseInt(`${showK}`) >> (Math.min(twitters.length, 1))];
      let historye = 7477547 >= penaltyP.length;
      do {
         penaltyP.push(1 | penaltyP.length);
         if (historye) {
            break;
         }
      } while (historye && (4.3 > showK));
          let corner6 = String.fromCharCode(116,111,111,108,115,95,115,95,54,50,0);
          let detailI: Array<any> = [859, 195];
          let notificationY: Map<any, any> = new Map([[String.fromCharCode(117,95,51,49,95,114,111,119,115,0),false ], [String.fromCharCode(109,95,55,56,95,100,114,111,112,120,0),false ], [String.fromCharCode(121,95,52,57,95,112,97,114,97,98,111,108,108,105,99,0),true ]]);
         update_jZ = (twitters.length * parseInt(`${showK}`)) < 61;
         corner6 = "3";
         detailI.push((String.fromCharCode(102,0) == corner6 ? detailI.length : corner6.length));
         notificationY = new Map([[`${detailI.length}`, 2 ^ detailI.length]]);
         twitters.push(3 >> (Math.min(5, twitters.length)));
         update_jZ = twitters.length == showK;
      while (update_jZ) {
          let assistI: Map<any, any> = new Map([[String.fromCharCode(112,97,114,97,98,111,108,108,105,99,95,99,95,53,0),7], [String.fromCharCode(109,111,100,109,95,110,95,50,57,0),833]]);
          let models6 = 3.0;
          let detailsd: Array<any> = [598, 961];
          let trashN = 4.0;
          let episodes1 = String.fromCharCode(106,95,54,53,95,99,111,110,116,114,111,108,115,0);
         showK /= Math.max(detailsd.length / (Math.max(3, 3)), 3);
         assistI.set(`${trashN}`, episodes1.length);
         models6 /= Math.max(3, 2);
         detailsd = [parseInt(`${models6}`) ^ 2];
         trashN += parseFloat(`${1}`);
         episodes1 += `${parseInt(`${models6}`) << (Math.min(5, Math.abs(3)))}`;
         break;
      }
      let shrinkV = update_jZ ? !update_jZ : update_jZ;
      do {
          let episodesw = 1.0;
          let profileH = String.fromCharCode(106,95,55,57,95,115,116,105,99,107,0);
          let topico = true;
          let bootsplashO = String.fromCharCode(100,95,49,95,115,111,102,97,108,105,122,101,114,0);
          let twitterr = String.fromCharCode(97,110,110,101,120,98,109,112,95,50,95,57,52,0);
         update_jZ = (99 <= (penaltyP.length * (!update_jZ ? 99 : penaltyP.length)));
         episodesw -= parseFloat(`${2 / (Math.max(8, profileH.length))}`);
         profileH = "2";
         bootsplashO = `${((topico ? 5 : 1) + twitterr.length)}`;
         twitterr = `${profileH.length}`;
         if (shrinkV) {
            break;
         }
      } while ((2 <= penaltyP.length) && shrinkV);
         twitters.push(penaltyP.length - 1);
      for (let u = 0; u < 1; u++) {
          let albumw: Array<any> = [622, 416];
          let condensedh = 2.0;
          let member5: Array<any> = [197, 158, 131];
         twitters.push(penaltyP.length);
         albumw = [parseInt(`${condensedh}`) << (Math.min(member5.length, 5))];
         condensedh /= Math.max(parseFloat(`${1 | parseInt(`${condensedh}`)}`), 5);
         member5 = [albumw.length << (Math.min(Math.abs(1), 5))];
      }
         penaltyP = [parseInt(`${showK}`) / 2];
      if (2 == (3 & twitters.length) && (3 & penaltyP.length) == 2) {
         penaltyP.push(penaltyP.length);
      }
      let modelF = 5517061 >= penaltyP.length;
      do {
         penaltyP = [1];
         if (modelF) {
            break;
         }
      } while (modelF && (5 == (twitters.length / 5)));
      white7 = new Map([[weibo4, 3 / (Math.max(3, parseInt(`${combinez}`)))]]);
   }
       let disconnected2 = 0;
       let navigationE: Map<any, any> = new Map([[String.fromCharCode(112,101,114,115,111,110,95,48,95,51,48,0),false ], [String.fromCharCode(111,95,53,54,95,103,101,110,101,114,97,116,105,110,103,0),true ]]);
       let project6 = 1;
         navigationE = new Map([[`${navigationE.size}`, 2 * project6]]);
      for (let d = 0; d < 3; d++) {
         project6 ^= project6 >> (Math.min(Math.abs(2), 4));
      }
       let product4 = true;
         disconnected2 -= project6 % 3;
         project6 /= Math.max(2, project6 - 2);
      while (navigationE.size >= project6) {
          let successB = String.fromCharCode(98,105,116,114,118,99,111,110,106,95,50,95,50,0);
          let long_xxx = String.fromCharCode(112,104,111,110,101,115,95,102,95,54,50,0);
          let scoren = 5;
         project6 /= Math.max(1, 1);
         successB = "1";
         long_xxx = `${successB.length}`;
         scoren <<= Math.min(Math.abs(scoren), 5);
         break;
      }
      if ((disconnected2 | navigationE.size) == 2 && (navigationE.size | disconnected2) == 2) {
          let grey_ = String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,101,100,95,122,95,57,54,0);
         navigationE.set(`${project6}`, project6);
         grey_ += `${grey_.length}`;
      }
       let crossf = 2;
       let hookP = 4;
      let umengx = 9191787 <= crossf;
      do {
         crossf -= project6;
         if (umengx) {
            break;
         }
      } while ((!Array.from(navigationE.values()).includes(crossf)) && umengx);
      logoH += google5.length;
      white7.set(google5, (google5 == String.fromCharCode(51,0) ? google5.length : textF.size));
       let form8 = 1.0;
       let filli = String.fromCharCode(101,105,112,95,109,95,51,50,0);
       let privilegei = String.fromCharCode(115,99,97,110,120,95,106,95,56,53,0);
         form8 -= (String.fromCharCode(48,0) == filli ? filli.length : privilegei.length);
          let filledP = 2;
         privilegei += `${1 ^ filli.length}`;
         filledP -= filledP | 1;
      let rewindt = 6104556 <= filli.length;
      do {
         filli += "1";
         if (rewindt) {
            break;
         }
      } while ((privilegei.length <= 4) && rewindt);
      for (let y = 0; y < 1; y++) {
          let projectG = String.fromCharCode(99,95,55,51,95,115,116,97,116,105,111,110,97,114,105,116,121,0);
         filli += `${filli.length & projectG.length}`;
      }
      for (let q = 0; q < 1; q++) {
         form8 += privilegei.length;
      }
      let upgrade7 = form8 >= 6842760.0;
      do {
         form8 += privilegei.length / (Math.max(filli.length, 1));
         if (upgrade7) {
            break;
         }
      } while (upgrade7 && (3 > (parseInt(`${form8}`) - privilegei.length) || 1 > (3 - parseInt(`${form8}`))));
          let footballj = 0;
          let sansB = String.fromCharCode(106,95,51,55,95,118,115,101,114,118,105,99,101,0);
         filli += `${2 ^ footballj}`;
         footballj <<= Math.min(5, Math.abs(sansB.length - 2));
         sansB = `${(sansB == String.fromCharCode(97,0) ? sansB.length : sansB.length)}`;
      while (filli.length == 1) {
         filli += `${parseInt(`${form8}`)}`;
         break;
      }
         filli += `${filli.length >> (Math.min(privilegei.length, 4))}`;
      anythinkS = p_positiong.length == textF.size;
   if (weibo4.length < p_positiong.length) {
      p_positiong.push(3 + white7.size);
   }
    setLoginValue('');

   while (weibo4.length <= 3) {
      anythinkS = !anythinkS || google5.length <= 56;
      break;
   }
   for (let k = 0; k < 2; k++) {
      window_9fv = `${weibo4.length}`;
   }
   let benefitu = anythinkS ? !anythinkS : anythinkS;
   do {
       let serviceR = 3;
       let hover4 = String.fromCharCode(121,95,53,56,95,99,97,110,116,111,112,101,110,0);
         hover4 = `${hover4.length}`;
      if ((2 % (Math.max(9, serviceR))) >= 2) {
         hover4 = `${hover4.length}`;
      }
      if (4 >= (serviceR % (Math.max(3, 10))) && 1 >= (serviceR % 3)) {
          let hook8 = 0.0;
          let livek = String.fromCharCode(104,95,50,52,95,111,110,110,101,99,116,105,111,110,0);
         hover4 = `${parseInt(`${hook8}`) << (Math.min(Math.abs(2), 5))}`;
         hook8 += parseFloat(`${livek.length}`);
         livek += `${(String.fromCharCode(84,0) == livek ? livek.length : livek.length)}`;
      }
      if (5 == (3 | hover4.length)) {
          let countryS = 4.0;
          let orangeN = 2.0;
          let tooltipsr = true;
         serviceR += parseInt(`${countryS}`) - serviceR;
         countryS *= 1 - parseInt(`${orangeN}`);
         orangeN += parseFloat(`${parseInt(`${orangeN}`) >> (Math.min(4, Math.abs(2)))}`);
         tooltipsr = !tooltipsr;
      }
      if (3 >= (hover4.length | serviceR)) {
         hover4 += `${serviceR % 2}`;
      }
      while (!hover4.startsWith(`${serviceR}`)) {
          let circled = true;
         serviceR ^= (hover4 == String.fromCharCode(114,0) ? (circled ? 2 : 3) : hover4.length);
         break;
      }
      anythinkS = (white7.size << (Math.min(hover4.length, 3))) == 97;
      if (benefitu) {
         break;
      }
   } while ((anythinkS) && benefitu);
      anythinkS = String.fromCharCode(122,0) == google5;
   while (groupY.includes(canvasb)) {
      canvasb /= Math.max(2 + groupY.length, 1);
      break;
   }
   for (let f = 0; f < 3; f++) {
      logoH -= google5.length << (Math.min(Math.abs(1), 3));
   }
    setReferralCode('');

   if ((window_9fv.length - 2) <= 2) {
      combinez -= 1 / (Math.max(parseInt(`${combinez}`), 6));
   }
   if ((google5.length | 4) == 1 || 4 == (google5.length | textF.size)) {
      google5 = `${2 >> (Math.min(Math.abs(parseInt(`${combinez}`)), 2))}`;
   }
       let connectionc = 5.0;
       let sliderp = String.fromCharCode(100,111,119,110,108,111,97,100,95,109,95,57,51,0);
       let banneru = false;
       let hongkongF: Array<any> = [725, 56, 341];
       let crownn: Array<any> = [317, 131];
      while (!banneru && (4 + crownn.length) > 4) {
         crownn.push(((banneru ? 1 : 4)));
         break;
      }
      let ewarded5 = 8324721.0 <= connectionc;
      do {
         connectionc *= parseFloat(`${hongkongF.length % 2}`);
         if (ewarded5) {
            break;
         }
      } while ((sliderp.startsWith(`${connectionc}`)) && ewarded5);
         crownn = [((banneru ? 5 : 3) % 3)];
         hongkongF.push(hongkongF.length % (Math.max(3, 1)));
       let clubM = 5;
       let recommendation1 = 5;
      if (!sliderp.includes(`${recommendation1}`)) {
         recommendation1 <<= Math.min(Math.abs(clubM), 4);
      }
         connectionc -= parseFloat(`${3 | hongkongF.length}`);
          let langkeyP = String.fromCharCode(102,95,55,57,95,99,111,109,109,117,116,101,0);
          let downloader8 = String.fromCharCode(114,95,50,50,95,116,116,97,101,110,99,100,115,112,0);
         recommendation1 -= crownn.length;
         langkeyP += `${downloader8.length & langkeyP.length}`;
         downloader8 += `${langkeyP.length << (Math.min(2, downloader8.length))}`;
      p_positiong = [window_9fv.length];
       let lessQ = 5.0;
       let shoote = String.fromCharCode(112,95,57,56,95,108,105,109,105,116,101,114,0);
          let analyticsq = String.fromCharCode(100,95,51,57,95,105,110,118,105,116,97,116,105,111,110,0);
          let ecopy_djq: Array<any> = [String.fromCharCode(108,101,114,116,95,101,95,54,55,0), String.fromCharCode(103,101,115,116,117,114,101,95,103,95,57,53,0), String.fromCharCode(113,95,55,49,95,115,99,97,108,101,99,117,100,97,0)];
         lessQ /= Math.max(1, parseFloat(`${analyticsq.length}`));
         analyticsq = "1";
         ecopy_djq.push(3);
         lessQ -= parseFloat(`${parseInt(`${lessQ}`)}`);
      if (parseFloat(`${shoote.length}`) < lessQ) {
         lessQ -= parseFloat(`${parseInt(`${lessQ}`) % (Math.max(shoote.length, 9))}`);
      }
         shoote += `${shoote.length & 2}`;
      if ((shoote.length >> (Math.min(Math.abs(2), 3))) == 2) {
          let flyerQ = String.fromCharCode(111,95,53,49,95,98,108,97,99,107,0);
          let specS: Map<any, any> = new Map([[String.fromCharCode(103,95,54,53,95,102,114,111,110,116,115,105,100,101,0),String.fromCharCode(110,111,110,98,108,111,99,107,95,110,95,55,49,0)], [String.fromCharCode(99,101,110,116,114,111,105,100,115,95,118,95,54,56,0),String.fromCharCode(111,95,54,53,95,101,110,99,111,100,101,102,114,97,109,101,0)]]);
          let a_playerQ = true;
         shoote += `${(String.fromCharCode(104,0) == shoote ? flyerQ.length : shoote.length)}`;
         flyerQ = `${specS.size >> (Math.min(Math.abs(3), 1))}`;
         specS.set(`${a_playerQ}`, 3 * specS.size);
      }
         lessQ += parseFloat(`${1}`);
      canvasb -= 1;
       let soundO = String.fromCharCode(99,111,109,112,97,116,105,98,108,101,95,119,95,52,48,0);
         soundO = `${(String.fromCharCode(122,0) == soundO ? soundO.length : soundO.length)}`;
         soundO += `${(String.fromCharCode(81,0) == soundO ? soundO.length : soundO.length)}`;
         soundO += `${soundO.length}`;
      canvasb -= window_9fv.length ^ white7.size;
      combinez /= Math.max(3 << (Math.min(2, weibo4.length)), 1);
    setLoginValueErrMsg(null);

       let dialog0: Array<any> = [124, 412];
          let termsC: Map<any, any> = new Map([[String.fromCharCode(113,95,51,48,95,114,101,102,105,110,101,109,101,110,116,0),false ], [String.fromCharCode(100,111,119,110,103,114,97,100,101,95,55,95,52,53,0),false ]]);
         dialog0 = [dialog0.length];
         termsC.set(`${termsC.size}`, 3);
         dialog0 = [dialog0.length];
          let thumbnailX: Array<any> = [String.fromCharCode(100,101,102,115,95,108,95,56,57,0), String.fromCharCode(106,95,56,54,95,100,111,117,98,108,105,110,103,0)];
          let sheet8 = true;
          let controlsd: Map<any, any> = new Map([[String.fromCharCode(112,117,98,107,101,121,95,97,95,57,53,0),824], [String.fromCharCode(101,110,116,101,114,95,104,95,51,57,0),258]]);
         dialog0.push(dialog0.length);
         thumbnailX.push(3);
         sheet8 = controlsd.size <= thumbnailX.length;
         controlsd = new Map([[`${thumbnailX.length}`, ((sheet8 ? 2 : 1) / (Math.max(thumbnailX.length, 9)))]]);
      groupY = [dialog0.length & 2];
   while ((2 + white7.size) <= 1) {
      white7.set(`${anythinkS}`, textF.size);
      break;
   }
   while (weibo4.includes(`${google5.length}`)) {
      google5 = `${parseInt(`${combinez}`) / 1}`;
      break;
   }
   for (let x = 0; x < 2; x++) {
      anythinkS = parseInt(`${combinez}`) >= textF.size;
   }
   while (canvasb == 5.57) {
      combinez -= sourcei.length + white7.size;
      break;
   }
      weibo4 += `${google5.length}`;
    setReferralCodeErrMsg(null);

   for (let j = 0; j < 1; j++) {
       let becomeg = 3.0;
       let chinac: Array<any> = [String.fromCharCode(103,95,56,55,95,104,117,102,102,121,117,118,101,110,99,100,115,112,0), String.fromCharCode(102,97,105,108,95,53,95,55,49,0)];
       let delegate_lZ: Array<any> = [934, 496];
       let umengd = 3;
          let modal2 = String.fromCharCode(115,104,111,114,116,115,95,120,95,56,48,0);
         delegate_lZ.push(umengd ^ delegate_lZ.length);
         modal2 = `${modal2.length}`;
      while ((delegate_lZ.length - umengd) > 2) {
          let guides = String.fromCharCode(122,95,52,52,95,103,117,105,100,0);
          let const_8P = 2;
          let gemfiler = String.fromCharCode(101,118,101,110,95,54,95,52,48,0);
          let googleW: Map<any, any> = new Map([[String.fromCharCode(114,101,108,97,116,105,118,101,95,102,95,52,55,0),331], [String.fromCharCode(100,95,50,49,95,116,111,107,104,122,0),960]]);
         delegate_lZ = [(String.fromCharCode(51,0) == gemfiler ? gemfiler.length : delegate_lZ.length)];
         guides += `${const_8P}`;
         const_8P >>= Math.min(Math.abs(const_8P / (Math.max(googleW.size, 1))), 5);
         googleW.set(`${guides}`, 2 + guides.length);
         break;
      }
      for (let y = 0; y < 3; y++) {
         umengd ^= parseInt(`${becomeg}`) >> (Math.min(3, Math.abs(3)));
      }
         delegate_lZ.push(chinac.length - parseInt(`${becomeg}`));
         delegate_lZ = [umengd];
      if ((becomeg * umengd) == 3.37) {
          let hookQ = String.fromCharCode(112,114,105,111,114,105,116,121,95,104,95,57,49,0);
          let popupc = true;
          let helperg = 0;
         becomeg *= parseFloat(`${parseInt(`${becomeg}`) / 3}`);
         hookQ += `${helperg}`;
         popupc = !popupc;
         helperg -= (String.fromCharCode(74,0) == hookQ ? hookQ.length : (popupc ? 3 : 5));
      }
         becomeg += parseFloat(`${umengd}`);
      for (let u = 0; u < 1; u++) {
         umengd *= delegate_lZ.length / 2;
      }
      while ((5 + chinac.length) < 1 && (chinac.length + umengd) < 5) {
         chinac.push(umengd);
         break;
      }
      while (4 <= (4 ^ delegate_lZ.length) || 4 <= (4 ^ delegate_lZ.length)) {
          let football0 = String.fromCharCode(110,95,51,55,95,115,105,103,110,97,116,117,114,101,0);
          let minivod8 = 4.0;
          let championD = String.fromCharCode(107,95,54,55,95,114,100,111,112,116,0);
          let privacyD = true;
         delegate_lZ.push(delegate_lZ.length);
         football0 += `${((privacyD ? 4 : 5))}`;
         minivod8 -= parseFloat(`${parseInt(`${minivod8}`) | 1}`);
         championD = `${parseInt(`${minivod8}`) & 3}`;
         privacyD = championD.length < 79;
         break;
      }
       let hoverQ = String.fromCharCode(107,95,51,55,95,115,117,105,116,101,115,0);
       let ajaxL = String.fromCharCode(97,95,50,48,95,101,121,99,104,97,105,110,0);
       let logoi = String.fromCharCode(121,95,50,52,95,109,97,120,98,105,116,114,97,116,101,0);
      textF = new Map([[`${groupY.length}`, sourcei.length / 2]]);
   }
   while (5 >= (window_9fv.length + groupY.length)) {
      groupY = [p_positiong.length >> (Math.min(Math.abs(3), 5))];
      break;
   }
       let networkq: Array<any> = [93, 455, 673];
       let becomeN: Array<any> = [String.fromCharCode(106,95,49,48,95,99,111,110,102,105,103,117,114,97,116,105,111,110,115,0), String.fromCharCode(111,95,50,49,95,109,118,99,111,109,112,111,110,101,110,116,0), String.fromCharCode(110,95,54,57,95,106,112,101,103,116,114,97,110,0)];
       let private_s3: Array<any> = [966, 126];
         becomeN = [2 - becomeN.length];
      for (let i = 0; i < 3; i++) {
         becomeN.push(becomeN.length);
      }
          let text4 = false;
          let chinab = 2;
          let t_imageJ = 3.0;
         private_s3.push(1 & chinab);
         text4 = 8.94 < t_imageJ || text4;
         chinab %= Math.max(((text4 ? 4 : 3) - parseInt(`${t_imageJ}`)), 2);
      for (let h = 0; h < 3; h++) {
         networkq = [becomeN.length << (Math.min(Math.abs(3), 4))];
      }
         networkq = [networkq.length & private_s3.length];
      while ((private_s3.length >> (Math.min(Math.abs(4), 5))) < 2 || (becomeN.length >> (Math.min(private_s3.length, 5))) < 4) {
          let relatedm: Array<any> = [259, 114, 430];
         becomeN = [private_s3.length % (Math.max(10, relatedm.length))];
         break;
      }
          let albumk = 3.0;
         becomeN = [networkq.length ^ 2];
         albumk -= parseInt(`${albumk}`) * 2;
          let minivodS = 2;
         becomeN.push(1);
         minivodS ^= 2;
       let backwardP = false;
       let teamI = false;
      groupY.push(white7.size % 2);
      sourcei = "3";
      combinez *= 2;
      p_positiong = [3];
    setReadTermNCondition(false);

   for (let b = 0; b < 1; b++) {
       let profilei = String.fromCharCode(109,95,56,49,95,109,105,114,114,111,114,105,110,103,0);
      let userg = profilei.length >= 8152248;
      do {
          let orangec = String.fromCharCode(110,95,52,56,95,118,105,100,115,116,97,98,117,116,105,108,115,0);
          let castingf = String.fromCharCode(111,95,55,49,95,108,97,110,103,115,0);
         profilei = `${orangec.length << (Math.min(Math.abs(2), 3))}`;
         orangec = `${(castingf == String.fromCharCode(108,0) ? castingf.length : castingf.length)}`;
         if (userg) {
            break;
         }
      } while ((profilei.length >= 5) && userg);
      if (!profilei.endsWith(profilei)) {
         profilei += "3";
      }
         profilei += `${profilei.length}`;
      groupY = [groupY.length];
   }
      sourcei += `${white7.size}`;
      p_positiong.push(textF.size / (Math.max(5, groupY.length)));
   while (2 == (textF.size & 1)) {
       let completen = false;
       let transfer8 = 0.0;
       let headerL: Array<any> = [887, 487, 353];
       let relatedU = 1.0;
         relatedU += parseInt(`${transfer8}`) | 3;
      while (!completen) {
         completen = (headerL.length * parseInt(`${transfer8}`)) > 54;
         break;
      }
      let emojiy = 5779108 <= headerL.length;
      do {
          let trophy7 = 2;
          let mcopy_aA = String.fromCharCode(97,118,112,114,105,118,95,120,95,53,54,0);
         headerL = [parseInt(`${transfer8}`) & headerL.length];
         trophy7 >>= Math.min(Math.abs(trophy7 % (Math.max(mcopy_aA.length, 6))), 3);
         mcopy_aA += `${mcopy_aA.length | 2}`;
         if (emojiy) {
            break;
         }
      } while (((headerL.length << (Math.min(Math.abs(2), 2))) <= 4 && 3.35 <= (relatedU / 5.28)) && emojiy);
      while ((transfer8 * 3.14) <= 4.56 || transfer8 <= 3.14) {
         transfer8 += parseFloat(`${parseInt(`${transfer8}`)}`);
         break;
      }
       let resendX = String.fromCharCode(114,101,97,115,115,111,99,105,97,116,101,95,53,95,56,51,0);
      for (let u = 0; u < 3; u++) {
         transfer8 += parseFloat(`${headerL.length ^ 2}`);
      }
         headerL = [headerL.length + 3];
          let eighteen5 = String.fromCharCode(102,105,110,101,95,51,95,56,54,0);
         relatedU -= parseInt(`${transfer8}`);
         eighteen5 += `${eighteen5.length}`;
          let overlayM = 2.0;
          let promotiony = 3.0;
         relatedU /= Math.max(5, 3 % (Math.max(1, parseInt(`${transfer8}`))));
         overlayM /= Math.max(3 * parseInt(`${overlayM}`), 5);
         promotiony += parseFloat(`${parseInt(`${overlayM}`) / 2}`);
      let upgradeU = relatedU >= 7565552.0;
      do {
          let networkQ = String.fromCharCode(108,105,98,118,111,114,98,105,115,95,111,95,51,49,0);
          let a_titleL: Map<any, any> = new Map([[String.fromCharCode(112,95,53,49,95,103,101,110,101,114,105,99,115,0),false ], [String.fromCharCode(105,110,112,111,115,95,108,95,54,49,0),false ]]);
          let robotoY = true;
          let xvod4: Map<any, any> = new Map([[String.fromCharCode(108,95,52,50,95,99,108,97,105,109,0),true ], [String.fromCharCode(110,95,54,50,95,115,101,113,117,101,110,99,101,115,0),true ]]);
         relatedU /= Math.max(2, headerL.length * 2);
         networkQ += "1";
         a_titleL = new Map([[networkQ, (3 | (robotoY ? 2 : 1))]]);
         xvod4 = new Map([[`${a_titleL.size}`, a_titleL.size]]);
         if (upgradeU) {
            break;
         }
      } while (upgradeU && (!completen));
         headerL = [resendX.length << (Math.min(Math.abs(1), 3))];
         relatedU += parseInt(`${relatedU}`);
      google5 += "2";
      break;
   }
      window_9fv = `${1 | p_positiong.length}`;
   while (groupY.length < 5) {
      groupY = [p_positiong.length * 1];
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
       let videoW: Array<any> = [70, 241, 534];
    let thumbnail5 = 5;
    let customv = String.fromCharCode(117,95,51,49,95,116,111,109,111,114,114,111,119,0);
    let lessY: Array<any> = [426, 34, 633];
    let bufferw = String.fromCharCode(115,108,97,115,104,95,119,95,50,49,0);
    let settingR = String.fromCharCode(97,114,98,105,116,114,117,109,95,119,95,54,54,0);
    let vignettef = String.fromCharCode(101,95,57,48,95,109,118,101,120,0);
    let modelsP = true;
    let unselectedQ: Map<any, any> = new Map([[String.fromCharCode(117,95,50,53,95,115,117,112,112,108,101,109,101,110,116,97,108,0),String.fromCharCode(117,100,112,108,105,116,101,95,99,95,55,52,0)], [String.fromCharCode(98,95,54,56,95,114,95,50,57,0),String.fromCharCode(113,95,51,95,98,121,114,121,0)]]);
    let thumbnaild = String.fromCharCode(120,95,54,53,95,104,97,115,104,116,97,98,108,101,122,0);
    let mnewsc: Array<any> = [74, 684];
    let robotoZ = String.fromCharCode(120,95,55,56,95,115,117,98,114,97,110,103,101,0);
       let playlistI = String.fromCharCode(99,97,118,115,105,100,99,116,95,106,95,52,55,0);
       let hovera = String.fromCharCode(103,95,49,51,95,108,97,117,110,99,104,0);
       let vignettej = String.fromCharCode(102,117,116,117,114,101,95,99,95,57,52,0);
      let unready = 5060373 >= playlistI.length;
      do {
          let screenf: Array<any> = [252, 705, 251];
          let dice_ = String.fromCharCode(99,112,120,95,114,95,52,55,0);
         playlistI = `${hovera.length}`;
         screenf = [(dice_ == String.fromCharCode(79,0) ? screenf.length : dice_.length)];
         if (unready) {
            break;
         }
      } while ((vignettej == String.fromCharCode(120,0)) && unready);
      while (5 < playlistI.length) {
          let controlsv = 0;
          let typesJ = String.fromCharCode(114,95,54,52,0);
          let stationF = String.fromCharCode(114,118,100,115,112,95,116,95,52,51,0);
         hovera += `${playlistI.length + typesJ.length}`;
         controlsv /= Math.max(stationF.length, 2);
         typesJ = `${(stationF == String.fromCharCode(85,0) ? stationF.length : controlsv)}`;
         break;
      }
      if (playlistI != String.fromCharCode(118,0)) {
          let controls_ = String.fromCharCode(115,112,105,108,108,95,108,95,57,55,0);
         hovera += `${controls_.length + 1}`;
      }
      if (hovera.length < vignettej.length) {
         hovera += `${2 << (Math.min(3, hovera.length))}`;
      }
      for (let b = 0; b < 3; b++) {
         hovera = `${(playlistI == String.fromCharCode(87,0) ? playlistI.length : hovera.length)}`;
      }
         vignettej = `${hovera.length >> (Math.min(Math.abs(2), 3))}`;
      let login3 = 8181660 <= vignettej.length;
      do {
         vignettej = `${hovera.length}`;
         if (login3) {
            break;
         }
      } while ((!hovera.includes(vignettej)) && login3);
          let darkf = true;
          let componento = String.fromCharCode(108,97,117,110,99,104,105,110,103,95,54,95,51,55,0);
          let ewardedc = 1;
         playlistI = `${vignettej.length}`;
         darkf = componento == String.fromCharCode(84,0) && 34 > ewardedc;
         componento += `${2 + componento.length}`;
         ewardedc += 1;
      if (vignettej != String.fromCharCode(81,0) || 2 > playlistI.length) {
          let episodeK = 1.0;
         vignettej += "3";
         episodeK /= Math.max(parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${episodeK}`)), 1))}`), 1);
      }
      modelsP = 65 == bufferw.length;
      thumbnaild = `${2 / (Math.max(1, lessY.length))}`;
      customv = `${(String.fromCharCode(99,0) == settingR ? settingR.length : videoW.length)}`;
   while (videoW.includes(thumbnail5)) {
      thumbnail5 <<= Math.min(Math.abs(unselectedQ.size), 2);
      break;
   }
   while ((1 ^ lessY.length) < 3 && (1 ^ vignettef.length) < 5) {
       let sinaE = 2.0;
         sinaE *= parseFloat(`${2}`);
         sinaE += parseFloat(`${parseInt(`${sinaE}`) - 1}`);
      let recommendationo = sinaE <= 8931840.0;
      do {
         sinaE += parseFloat(`${2 | parseInt(`${sinaE}`)}`);
         if (recommendationo) {
            break;
         }
      } while (recommendationo && (sinaE >= 2.79));
      lessY = [1];
      break;
   }
   while (bufferw.length == thumbnaild.length) {
      thumbnaild = `${unselectedQ.size}`;
      break;
   }
       let update_7fQ = false;
       let searchT = 2.0;
       let kickx: Array<any> = [String.fromCharCode(121,95,52,55,95,97,117,116,111,99,111,114,114,101,99,116,105,111,110,0), String.fromCharCode(113,95,54,54,95,107,101,121,118,97,108,0), String.fromCharCode(109,101,97,115,117,114,105,110,103,95,49,95,55,49,0)];
      for (let n = 0; n < 2; n++) {
          let fillp: Map<any, any> = new Map([[String.fromCharCode(100,95,55,48,0),582], [String.fromCharCode(104,95,51,52,95,111,110,103,111,105,110,103,0),679]]);
          let gestureC = 0;
          let downQ = String.fromCharCode(102,95,50,53,95,111,114,100,101,114,105,110,103,0);
         searchT -= parseFloat(`${parseInt(`${searchT}`) / 3}`);
         fillp.set(`${gestureC}`, fillp.size);
         gestureC ^= 2 & fillp.size;
         downQ = `${downQ.length}`;
      }
          let popupJ = true;
          let refreshK = 4.0;
          let grayS = String.fromCharCode(112,95,55,48,95,115,121,110,116,104,101,115,105,122,101,100,0);
         searchT /= Math.max(5, parseFloat(`${grayS.length}`));
         popupJ = 98.52 <= refreshK;
         refreshK -= ((popupJ ? 4 : 3) + parseInt(`${refreshK}`));
         grayS = `${2 * parseInt(`${refreshK}`)}`;
         searchT /= Math.max(5, parseFloat(`${kickx.length ^ 2}`));
      if ((searchT / 5.94) >= 2.21) {
          let subsh = 3.0;
          let constants8: Array<any> = [868, 524];
         searchT *= (parseFloat(`${parseInt(`${searchT}`) & (update_7fQ ? 3 : 4)}`));
         subsh += parseFloat(`${constants8.length + 1}`);
         constants8.push(parseInt(`${subsh}`) << (Math.min(constants8.length, 2)));
      }
         update_7fQ = kickx.includes(searchT);
       let zhengpianV = 0.0;
         searchT -= parseFloat(`${1 - parseInt(`${zhengpianV}`)}`);
      let zhubo7 = 8168507 <= kickx.length;
      do {
          let humidityH: Array<any> = [String.fromCharCode(117,112,108,111,97,100,95,106,95,54,54,0), String.fromCharCode(108,95,57,52,95,115,111,102,116,119,97,114,101,0), String.fromCharCode(101,95,50,48,95,102,105,110,97,108,108,121,0)];
          let pager = true;
          let episodeG = true;
          let rankj = 2.0;
          let floatingl = false;
         kickx = [parseInt(`${searchT}`) | 2];
         humidityH = [3 & parseInt(`${rankj}`)];
         pager = !floatingl;
         episodeG = rankj >= 98.41;
         floatingl = humidityH.includes(rankj);
         if (zhubo7) {
            break;
         }
      } while ((!update_7fQ) && zhubo7);
      while (1.45 < (4.69 - zhengpianV) && 4.69 < (zhengpianV - parseFloat(`${kickx.length}`))) {
          let internetc: Array<any> = [16, 973];
          let controlsA = true;
          let phoneo = String.fromCharCode(101,95,51,57,95,105,115,111,108,97,116,101,0);
          let containerA = String.fromCharCode(98,95,52,51,95,100,121,110,97,109,105,99,97,108,108,121,0);
         zhengpianV += (parseFloat(`${2 & (controlsA ? 4 : 4)}`));
         internetc.push(internetc.length);
         controlsA = internetc.length <= 88 || 88 <= phoneo.length;
         phoneo = `${1 ^ phoneo.length}`;
         containerA = `${containerA.length >> (Math.min(phoneo.length, 4))}`;
         break;
      }
      unselectedQ = new Map([[`${kickx.length}`, 2 >> (Math.min(4, customv.length))]]);
   while ((vignettef.length * videoW.length) >= 3) {
       let vignetteU = String.fromCharCode(99,111,117,110,116,101,114,95,100,95,50,0);
       let championZ = String.fromCharCode(102,105,114,115,116,108,105,110,101,95,51,95,52,48,0);
      for (let o = 0; o < 2; o++) {
          let episodest = String.fromCharCode(116,97,114,103,97,95,57,95,50,54,0);
          let recommendationb = String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,95,52,95,49,49,0);
          let anytime8 = String.fromCharCode(99,111,109,112,108,101,109,101,110,116,105,110,103,95,103,95,55,54,0);
         championZ += `${(recommendationb == String.fromCharCode(103,0) ? anytime8.length : recommendationb.length)}`;
         episodest = `${episodest.length * 2}`;
      }
         vignetteU += `${vignetteU.length}`;
      while (!vignetteU.endsWith(championZ)) {
          let gpayV = 2.0;
          let firebaset: Array<any> = [932, 595];
          let inactive5 = 2.0;
          let productu = 1.0;
         championZ = `${parseInt(`${gpayV}`)}`;
         firebaset.push(1);
         inactive5 *= parseInt(`${productu}`);
         break;
      }
      while (championZ.endsWith(vignetteU)) {
         championZ = `${vignetteU.length % (Math.max(9, championZ.length))}`;
         break;
      }
      if (championZ.endsWith(vignetteU)) {
         championZ += `${vignetteU.length}`;
      }
      let downloaderv = vignetteU == String.fromCharCode(105,108,51,103,109,122,105,0);
      do {
         vignetteU = `${vignetteU.length / 2}`;
         if (downloaderv) {
            break;
         }
      } while (downloaderv && (championZ.length > vignetteU.length));
      vignettef += `${settingR.length - 2}`;
      break;
   }
   if ((settingR.length / 1) == 2 && 4 == (1 / (Math.max(1, settingR.length)))) {
      settingR += `${(videoW.length | (modelsP ? 3 : 3))}`;
   }
      bufferw = `${2 & customv.length}`;
       let anytimeb = 4.0;
       let minimizeE = String.fromCharCode(122,95,54,50,95,97,117,116,111,99,108,101,97,114,0);
       let incidente = 1.0;
         minimizeE += `${minimizeE.length / (Math.max(1, parseInt(`${anytimeb}`)))}`;
       let memberV: Array<any> = [641, 909, 120];
       let sheeta: Map<any, any> = new Map([[String.fromCharCode(106,95,54,52,95,110,111,110,110,117,108,108,101,110,99,114,121,112,116,105,111,110,0),427], [String.fromCharCode(108,101,114,112,102,95,112,95,54,57,0),716], [String.fromCharCode(98,117,102,102,101,114,95,122,95,53,51,0),617]]);
      for (let c = 0; c < 3; c++) {
         memberV = [parseInt(`${anytimeb}`) & sheeta.size];
      }
      if ((sheeta.size * memberV.length) <= 1 && 3 <= (1 * memberV.length)) {
         memberV = [memberV.length];
      }
         incidente += minimizeE.length;
         sheeta = new Map([[`${sheeta.size}`, 2 * parseInt(`${anytimeb}`)]]);
         minimizeE = `${1 % (Math.max(7, parseInt(`${incidente}`)))}`;
      for (let z = 0; z < 3; z++) {
         memberV.push(1);
      }
      lessY = [parseInt(`${anytimeb}`) >> (Math.min(customv.length, 1))];
       let ying1: Array<any> = [894, 729];
       let anythinkH = String.fromCharCode(118,95,57,95,98,117,109,112,0);
       let policyM = 4.0;
         policyM -= anythinkH.length;
      let icon2 = ying1.length <= 5720172;
      do {
         ying1 = [2 + anythinkH.length];
         if (icon2) {
            break;
         }
      } while (icon2 && (1.12 <= (policyM - 5.12) || 5 <= (ying1.length - parseInt(`${policyM}`))));
         ying1 = [3 ^ parseInt(`${policyM}`)];
      let loginR = anythinkH == String.fromCharCode(48,103,118,104,109,50,0);
      do {
         anythinkH += "1";
         if (loginR) {
            break;
         }
      } while ((anythinkH.length >= ying1.length) && loginR);
         ying1.push(parseInt(`${policyM}`) % 3);
          let heartT = 0;
         policyM /= Math.max(2, (anythinkH == String.fromCharCode(100,0) ? anythinkH.length : parseInt(`${policyM}`)));
         heartT -= 3 * heartT;
      for (let l = 0; l < 1; l++) {
         ying1 = [anythinkH.length << (Math.min(Math.abs(1), 3))];
      }
          let downloadedK: Map<any, any> = new Map([[String.fromCharCode(113,95,49,57,95,105,115,122,101,114,111,0),157], [String.fromCharCode(107,95,51,52,95,102,114,97,109,101,112,111,111,108,0),534], [String.fromCharCode(120,95,49,50,95,112,111,115,116,105,110,105,116,0),440]]);
          let playlistv = 3.0;
         anythinkH = `${1 << (Math.min(5, ying1.length))}`;
         downloadedK = new Map([[`${downloadedK.size}`, 3]]);
         playlistv += 3 * parseInt(`${playlistv}`);
          let linkn = String.fromCharCode(97,108,108,112,97,115,115,95,97,95,56,53,0);
          let strN = String.fromCharCode(98,117,110,100,108,101,95,48,95,53,55,0);
         ying1.push(parseInt(`${policyM}`));
         linkn += `${strN.length}`;
         strN += `${strN.length | 3}`;
      customv = `${lessY.length}`;
      thumbnaild += `${thumbnail5 / (Math.max(1, videoW.length))}`;
       let gpayX = true;
      while (gpayX) {
         gpayX = !gpayX;
         break;
      }
      while (!gpayX) {
          let single4 = String.fromCharCode(105,95,54,54,95,117,116,105,108,105,116,105,101,115,0);
          let play9 = true;
          let entryw = 1.0;
          let hongkongt = 4;
         gpayX = !gpayX;
         single4 += `${2 | single4.length}`;
         play9 = (hongkongt / (Math.max(entryw, 9))) < 43;
         entryw *= ((play9 ? 5 : 1) >> (Math.min(Math.abs(hongkongt), 5)));
         break;
      }
          let recommendationp = 4.0;
          let storeg = 2.0;
         gpayX = !gpayX;
         recommendationp *= 3;
         storeg /= Math.max(parseFloat(`${3 * parseInt(`${storeg}`)}`), 4);
      videoW = [1 - videoW.length];
   while (!customv.includes(`${lessY.length}`)) {
      customv = `${bufferw.length}`;
      break;
   }
   if (4 <= (thumbnail5 ^ 1) && modelsP) {
      modelsP = 4 < vignettef.length && 4 < videoW.length;
   }
   if (lessY.length <= 4) {
      modelsP = bufferw.length == settingR.length;
   }
       let macau0 = String.fromCharCode(112,97,112,101,114,95,113,95,51,54,0);
      let gesturea = macau0 == String.fromCharCode(56,122,105,99,108,111,49,101,55,52,0);
      do {
         macau0 += "2";
         if (gesturea) {
            break;
         }
      } while ((macau0.endsWith(macau0)) && gesturea);
         macau0 += `${macau0.length - macau0.length}`;
       let bingq = String.fromCharCode(114,105,115,101,95,101,95,52,50,0);
      mnewsc = [(String.fromCharCode(101,0) == customv ? videoW.length : customv.length)];
      customv += `${2 >> (Math.min(Math.abs(thumbnail5), 5))}`;
      videoW = [3];
   let floatingJ = 9578481 >= thumbnaild.length;
   do {
       let anythinkz = true;
       let disconnectedQ = String.fromCharCode(99,95,49,48,48,95,109,105,103,114,97,116,105,111,110,0);
         disconnectedQ += `${(disconnectedQ.length / (Math.max(9, (anythinkz ? 3 : 4))))}`;
      let greyo = String.fromCharCode(101,101,49,51,48,103,53,0) == disconnectedQ;
      do {
         disconnectedQ += "2";
         if (greyo) {
            break;
         }
      } while (greyo && (anythinkz));
      thumbnaild = `${bufferw.length}`;
      if (floatingJ) {
         break;
      }
   } while ((thumbnaild.startsWith(`${mnewsc.length}`)) && floatingJ);
      vignettef = "1";

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
       let popupI = String.fromCharCode(115,116,114,105,112,112,101,100,95,97,95,54,56,0);
    let circlex = String.fromCharCode(115,95,49,49,95,98,108,111,99,107,115,99,97,110,0);
    let brightnessn = 3.0;
    let tickedc = 0.0;
    let shirtZ = false;
    let promotione = String.fromCharCode(103,95,53,95,99,111,111,114,100,105,110,97,116,111,114,115,0);
    let a_countC = 4;
    let matchesr: Array<any> = [615, 746, 908];
    let ping3: Map<any, any> = new Map([[String.fromCharCode(99,95,50,50,95,100,101,108,116,97,115,0),508], [String.fromCharCode(116,97,110,115,105,103,95,103,95,49,49,0),860]]);
    let twitterL = 3;
    let videor = String.fromCharCode(97,112,112,114,111,118,97,108,95,104,95,57,56,0);
    let appleI = String.fromCharCode(122,95,57,57,95,116,101,108,101,112,104,111,110,121,0);
    let sendR = true;
      promotione = "2";

    if (isSubmitting) return;

   for (let o = 0; o < 2; o++) {
      promotione += `${1 * promotione.length}`;
   }

    if (isReadTermNCondition == false) {

       let slider1 = 5.0;
       let nalyticsu = 3.0;
       let tcopy_qx = 1;
          let controlst = 0;
          let mini3: Map<any, any> = new Map([[String.fromCharCode(98,95,52,57,95,116,111,112,105,99,115,0),112], [String.fromCharCode(112,95,55,95,105,110,112,108,105,99,105,116,101,108,121,0),742]]);
         nalyticsu += parseFloat(`${parseInt(`${slider1}`) % 3}`);
         controlst %= Math.max(4, mini3.size & 2);
         mini3.set(`${controlst}`, 1);
         nalyticsu -= parseFloat(`${parseInt(`${slider1}`)}`);
      let gmailH = 9108219 <= tcopy_qx;
      do {
         tcopy_qx ^= parseInt(`${slider1}`);
         if (gmailH) {
            break;
         }
      } while (gmailH && ((1.55 * slider1) < 1.13));
         slider1 /= Math.max(5, parseInt(`${slider1}`) - tcopy_qx);
      while (tcopy_qx == nalyticsu) {
         nalyticsu /= Math.max(4, parseFloat(`${parseInt(`${nalyticsu}`)}`));
         break;
      }
          let bannerb = 2.0;
         slider1 -= tcopy_qx;
         bannerb -= 1 % (Math.max(parseInt(`${bannerb}`), 9));
      if (slider1 <= 4.31) {
         slider1 += 1;
      }
      let spinnerM = tcopy_qx >= 7102346;
      do {
         tcopy_qx += 3 + parseInt(`${nalyticsu}`);
         if (spinnerM) {
            break;
         }
      } while (spinnerM && ((nalyticsu / (Math.max(2.80, 3))) > 4.43 || (tcopy_qx % 1) > 4));
      while ((slider1 * nalyticsu) >= 5.17) {
         nalyticsu /= Math.max(5, parseFloat(`${parseInt(`${nalyticsu}`) % 1}`));
         break;
      }
      circlex = `${(promotione == String.fromCharCode(81,0) ? promotione.length : (shirtZ ? 2 : 3))}`;
      SMBing.showToast('请勾选用户协议和隐私协议');

      a_countC ^= circlex.length << (Math.min(5, matchesr.length));
      return;

      promotione = `${(parseInt(`${tickedc}`) & (shirtZ ? 5 : 4))}`;
    }

    let userInfo;

       let corneru = false;
      for (let e = 0; e < 2; e++) {
         corneru = corneru || corneru;
      }
      let moviesT = corneru ? !corneru : corneru;
      do {
         corneru = !corneru;
         if (moviesT) {
            break;
         }
      } while (moviesT && (!corneru));
       let emojih = String.fromCharCode(115,97,116,105,115,102,105,101,100,95,117,95,54,48,0);
       let grey_ = String.fromCharCode(118,105,101,119,112,111,114,116,95,55,95,56,57,0);
      circlex += `${parseInt(`${brightnessn}`) - parseInt(`${tickedc}`)}`;

    try {

       let robotoX: Array<any> = [String.fromCharCode(99,108,105,101,110,116,95,101,95,56,54,0), String.fromCharCode(107,95,51,54,95,100,105,115,112,115,97,98,108,101,0), String.fromCharCode(107,95,56,57,95,114,101,109,111,118,101,0)];
       let backa: Array<any> = [String.fromCharCode(99,104,97,99,104,97,95,115,95,52,49,0), String.fromCharCode(115,101,110,100,97,108,108,95,55,95,49,52,0)];
       let dragC: Array<any> = [120, 430, 203];
      for (let a = 0; a < 3; a++) {
         robotoX = [robotoX.length];
      }
          let step0: Array<any> = [String.fromCharCode(106,95,50,56,95,120,99,117,114,115,111,114,0), String.fromCharCode(120,95,55,50,95,101,110,116,101,114,105,110,103,0), String.fromCharCode(112,114,101,118,105,101,119,101,100,95,54,95,50,48,0)];
         backa.push(dragC.length - 2);
         step0.push(step0.length | step0.length);
      for (let v = 0; v < 3; v++) {
         robotoX = [robotoX.length];
      }
      for (let h = 0; h < 2; h++) {
          let dialogk = String.fromCharCode(115,111,117,110,100,95,118,95,55,50,0);
          let combinedj = 3;
          let moviesx = 0;
          let update_94 = String.fromCharCode(115,121,110,99,104,114,111,110,105,115,101,100,95,98,95,52,48,0);
          let launch4 = 0.0;
         backa = [backa.length];
         dialogk = `${(String.fromCharCode(79,0) == update_94 ? update_94.length : moviesx)}`;
         combinedj <<= Math.min(3, Math.abs(1));
         moviesx %= Math.max(4, 2);
         launch4 += (dialogk == String.fromCharCode(54,0) ? moviesx : dialogk.length);
      }
      if (1 == (dragC.length - 2) && (dragC.length - 2) == 4) {
         backa = [backa.length % (Math.max(robotoX.length, 9))];
      }
      for (let d = 0; d < 3; d++) {
         backa.push(backa.length);
      }
         backa = [2 % (Math.max(7, dragC.length))];
         robotoX = [2 * robotoX.length];
          let optionsC: Array<any> = [534, 845, 489];
          let backo = false;
         backa = [3 | backa.length];
         optionsC.push(((backo ? 3 : 4) * 2));
         backo = !backo;
      promotione = `${(circlex == String.fromCharCode(68,0) ? backa.length : circlex.length)}`;
      await GoogleSignin.hasPlayServices();

   for (let i = 0; i < 2; i++) {
       let zhengpianU = String.fromCharCode(100,111,102,102,115,101,116,115,95,48,95,49,55,0);
       let y_lockA = false;
       let matchC = 3.0;
      let long__1p = 9697032 >= zhengpianU.length;
      do {
         zhengpianU += `${((y_lockA ? 4 : 4) & 3)}`;
         if (long__1p) {
            break;
         }
      } while (long__1p && (y_lockA));
          let benefity = true;
         y_lockA = !y_lockA;
         benefity = !benefity;
      while (!y_lockA) {
          let orangeW: Array<any> = [415, 188];
         zhengpianU += `${orangeW.length >> (Math.min(Math.abs(3), 3))}`;
         break;
      }
      while (y_lockA) {
          let plusi = 5;
          let u_imaged = String.fromCharCode(99,95,49,50,95,105,110,105,116,105,97,108,105,122,101,100,0);
         zhengpianU += `${(parseInt(`${matchC}`) + (y_lockA ? 4 : 3))}`;
         plusi -= plusi;
         u_imaged = `${u_imaged.length}`;
         break;
      }
      while (2.27 >= (2.64 - matchC)) {
         zhengpianU = `${(parseInt(`${matchC}`) + (y_lockA ? 2 : 3))}`;
         break;
      }
      let ewardedp = y_lockA ? !y_lockA : y_lockA;
      do {
         y_lockA = !zhengpianU.endsWith(`${y_lockA}`);
         if (ewardedp) {
            break;
         }
      } while ((!y_lockA) && ewardedp);
      if (y_lockA) {
         y_lockA = !y_lockA;
      }
      while (y_lockA && zhengpianU.length > 5) {
          let shareF = String.fromCharCode(115,108,97,115,104,105,110,103,95,117,95,49,57,0);
          let blacklistp = 2;
         y_lockA = y_lockA || 29 >= blacklistp;
         shareF += `${shareF.length}`;
         blacklistp ^= shareF.length << (Math.min(shareF.length, 5));
         break;
      }
       let humidityw: Map<any, any> = new Map([[String.fromCharCode(114,101,115,105,100,101,110,99,101,95,103,95,50,55,0),409], [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,100,95,51,95,55,52,0),890], [String.fromCharCode(97,99,101,115,115,111,114,121,95,52,95,52,55,0),621]]);
       let scoref: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,108,105,103,116,101,100,95,120,95,49,48,0),890], [String.fromCharCode(103,97,109,109,97,118,97,108,95,101,95,56,51,0),690]]);
      matchesr.push((3 << (Math.min(2, Math.abs((shirtZ ? 4 : 4))))));
   }

      if (await GoogleSignin.isSignedIn()) {

      popupI += `${(circlex.length - (shirtZ ? 2 : 4))}`;
        userInfo = await GoogleSignin.getCurrentUser();
      } else {

   while (4 >= (a_countC % 1) && (promotione.length % (Math.max(6, a_countC))) >= 1) {
      promotione += `${parseInt(`${tickedc}`)}`;
      break;
   }
        userInfo = await GoogleSignin.signIn();
      }

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        
      } else if (error.code === statusCodes.IN_PROGRESS) {

      circlex = `${((shirtZ ? 2 : 3) / (Math.max(1, 2)))}`;
        

      ping3 = new Map([[promotione, promotione.length - popupI.length]]);
        SMBing.showToast('请勿频繁操作');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

   for (let b = 0; b < 1; b++) {
      circlex = `${(String.fromCharCode(117,0) == promotione ? parseInt(`${brightnessn}`) : promotione.length)}`;
   }
        

   if (popupI == String.fromCharCode(53,0) || circlex == String.fromCharCode(53,0)) {
      circlex = `${parseInt(`${brightnessn}`) ^ matchesr.length}`;
   }
        SMBing.showToast('谷歌服务获取失败');
      } else {

   for (let h = 0; h < 3; h++) {
      promotione += `${ping3.size + 3}`;
   }
        

   if ((ping3.size & 2) <= 5 || (2 & circlex.length) <= 5) {
      ping3 = new Map([[`${tickedc}`, 1 | parseInt(`${tickedc}`)]]);
   }
        SMBing.showToast('登入失败，请稍后再试');
      }
      console.log(error.toString());

       let smallw = String.fromCharCode(105,95,56,57,95,110,105,109,97,116,105,111,110,0);
         smallw = `${smallw.length}`;
       let starQ: Map<any, any> = new Map([[String.fromCharCode(108,105,98,103,115,109,95,55,95,57,50,0),false ], [String.fromCharCode(120,95,49,56,95,112,108,97,110,101,0),true ], [String.fromCharCode(109,95,56,50,95,98,101,108,111,110,103,0),true ]]);
          let servicec: Array<any> = [String.fromCharCode(104,95,49,56,95,97,97,99,112,115,100,115,112,0), String.fromCharCode(112,105,120,108,101,116,95,48,95,52,51,0)];
         smallw += `${servicec.length - starQ.size}`;
      ping3 = new Map([[`${shirtZ}`, ((shirtZ ? 2 : 4) % (Math.max(1, parseInt(`${brightnessn}`))))]]);
      return;
    }

    if (userInfo === null) {

       let searchT: Map<any, any> = new Map([[String.fromCharCode(105,95,50,0),774], [String.fromCharCode(104,95,57,49,95,116,114,105,112,108,101,0),237], [String.fromCharCode(110,95,56,50,95,112,97,116,99,104,115,101,116,0),457]]);
       let dataZ: Array<any> = [167, 878];
      while ((dataZ.length - 5) < 4 && 5 < (searchT.size - dataZ.length)) {
          let usernameB = 0;
          let y_positiona = String.fromCharCode(113,95,52,56,95,111,117,116,100,97,116,101,100,0);
          let canvas5 = String.fromCharCode(97,116,111,105,95,98,95,56,53,0);
         dataZ = [3];
         usernameB |= usernameB / (Math.max(3, 7));
         y_positiona = `${(canvas5 == String.fromCharCode(72,0) ? usernameB : canvas5.length)}`;
         break;
      }
         dataZ = [1 + searchT.size];
         searchT = new Map([[`${searchT.size}`, dataZ.length / (Math.max(8, searchT.size))]]);
         searchT.set(`${dataZ.length}`, searchT.size + 2);
       let signinupb = String.fromCharCode(98,97,116,99,104,101,115,95,115,95,57,54,0);
       let upgradeO: Array<any> = [829, 535, 857];
       let filterd: Array<any> = [String.fromCharCode(107,95,52,57,95,107,101,121,108,101,110,0), String.fromCharCode(121,95,49,51,95,104,97,115,104,116,97,103,0), String.fromCharCode(99,95,55,95,97,102,102,101,99,116,101,100,0)];
      ping3.set(`${popupI}`, popupI.length);
      SMBing.showToast('登入失败，请稍后再试');

      promotione += `${1 * a_countC}`;
      return;
    }

    try {

       let statisticsQ = String.fromCharCode(115,95,57,48,95,115,98,105,116,115,0);
       let plusP = 5.0;
       let storeG = 5.0;
      while ((parseInt(`${storeG}`) / (Math.max(10, statisticsQ.length))) <= 3 || 3 <= (parseInt(`${storeG}`) / (Math.max(statisticsQ.length, 6)))) {
         storeG -= parseInt(`${storeG}`) >> (Math.min(statisticsQ.length, 1));
         break;
      }
          let configureg: Array<any> = [259, 910];
          let zhubo8 = 3.0;
         storeG -= configureg.length & 3;
         configureg.push(2 >> (Math.min(Math.abs(parseInt(`${zhubo8}`)), 5)));
         zhubo8 *= parseFloat(`${2}`);
      let penalty1 = 6267910.0 <= storeG;
      do {
         storeG *= statisticsQ.length % 1;
         if (penalty1) {
            break;
         }
      } while (((2.71 * storeG) < 5.73 || (2.71 - storeG) < 4.18) && penalty1);
       let tickS: Array<any> = [207, 909];
         storeG *= tickS.length;
       let blacklistI = false;
      for (let w = 0; w < 2; w++) {
          let containerr = String.fromCharCode(116,95,54,50,95,112,97,117,115,101,0);
          let completeY = String.fromCharCode(106,95,51,57,95,118,111,116,101,114,115,0);
          let interstitialY = false;
         plusP -= ((interstitialY ? 5 : 3) * parseInt(`${storeG}`));
         containerr = "2";
         completeY = `${containerr.length}`;
         interstitialY = String.fromCharCode(76,0) == completeY;
      }
         storeG /= Math.max(5, (String.fromCharCode(101,0) == statisticsQ ? statisticsQ.length : parseInt(`${plusP}`)));
       let lined = String.fromCharCode(107,95,54,55,95,108,97,116,101,110,99,121,0);
      tickedc -= (promotione == String.fromCharCode(90,0) ? promotione.length : twitterL);
      setSubmitting(true);

   for (let r = 0; r < 3; r++) {
      circlex = `${2 & matchesr.length}`;
   }
      userInfo = await THFirebase.signinupUser({
        loginType: 'EMAIL',
        email: userInfo.user.email,
        referralCode: referralCode,
        isGoogleLogin: true,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      GoogleSignin.signOut();

      circlex = `${3 >> (Math.min(3, matchesr.length))}`;
      SMBing.showToast(err.toString());

       let context5 = String.fromCharCode(115,116,100,101,114,114,95,54,95,50,53,0);
       let expand_ = String.fromCharCode(112,114,111,120,105,109,105,116,121,95,98,95,54,53,0);
       let constantsH = true;
         context5 += "1";
          let stringv = 1.0;
         constantsH = 15.44 <= stringv;
       let combineM: Array<any> = [String.fromCharCode(113,95,57,55,95,112,111,114,116,97,105,116,0), String.fromCharCode(107,95,49,53,95,105,112,104,111,110,101,0)];
       let cornerZ: Array<any> = [539, 67, 93];
         expand_ = `${((constantsH ? 3 : 4) ^ cornerZ.length)}`;
      while (!expand_.includes(`${constantsH}`)) {
          let rightR = 4;
          let modalJ = 4;
          let soundT: Array<any> = [String.fromCharCode(106,95,53,95,112,101,110,100,105,110,103,0), String.fromCharCode(99,95,57,52,95,98,101,97,114,105,110,103,0)];
         expand_ += `${((constantsH ? 1 : 4))}`;
         rightR >>= Math.min(3, Math.abs(3));
         modalJ /= Math.max(modalJ >> (Math.min(soundT.length, 1)), 3);
         soundT = [modalJ / 3];
         break;
      }
      while (expand_.startsWith(`${constantsH}`)) {
         constantsH = expand_.length > 25;
         break;
      }
       let analyticy = String.fromCharCode(119,97,118,101,95,121,95,49,49,0);
       let langR = String.fromCharCode(114,101,108,111,97,100,101,114,95,54,95,49,56,0);
      let downloadingk = analyticy.length >= 9714803;
      do {
          let upgradeC: Array<any> = [907, 238, 683];
         analyticy += `${langR.length / (Math.max(7, upgradeC.length))}`;
         if (downloadingk) {
            break;
         }
      } while ((5 < (5 >> (Math.min(5, cornerZ.length))) || 3 < (5 >> (Math.min(2, analyticy.length)))) && downloadingk);
      if (2 > expand_.length) {
         expand_ = `${combineM.length}`;
      }
      promotione += `${(parseInt(`${tickedc}`) * (constantsH ? 2 : 3))}`;
      return;
    } finally {

   for (let t = 0; t < 3; t++) {
      matchesr.push(promotione.length);
   }
      setSubmitting(false);

   if (appleI.length >= popupI.length) {
      appleI = `${matchesr.length >> (Math.min(promotione.length, 5))}`;
   }
    }

    const resultData = userInfo.data;

      brightnessn += parseFloat(`${matchesr.length % (Math.max(4, promotione.length))}`);

    const user = KWConstants.fromJson(resultData);

   if (circlex.length > twitterL) {
       let modulek = String.fromCharCode(109,95,49,48,48,95,110,111,100,101,108,97,121,0);
       let bingq: Array<any> = [491, 831, 856];
       let stats7 = 0.0;
       let producto = 3;
       let flyerN = String.fromCharCode(112,105,110,115,95,104,95,55,50,0);
      if (3 < (bingq.length / 4) && (modulek.length / 4) < 3) {
         modulek += "2";
      }
         flyerN = `${producto}`;
         stats7 -= parseFloat(`${bingq.length % 1}`);
       let sans1 = String.fromCharCode(97,110,110,111,116,97,116,105,111,110,115,95,105,95,54,57,0);
       let aboutF = String.fromCharCode(121,95,57,53,95,99,108,101,97,114,105,0);
          let backwardW = false;
          let eventq = 5.0;
          let castn = String.fromCharCode(119,95,51,53,95,109,111,100,105,102,105,99,97,116,105,111,110,0);
         sans1 += `${2 << (Math.min(4, modulek.length))}`;
         backwardW = !backwardW && eventq > 23.34;
         eventq *= (parseFloat(`${2 & (backwardW ? 4 : 3)}`));
         castn = `${parseInt(`${eventq}`)}`;
      for (let p = 0; p < 1; p++) {
          let annerF = String.fromCharCode(117,110,112,97,99,107,101,100,95,120,95,50,52,0);
          let left_: Map<any, any> = new Map([[String.fromCharCode(122,95,49,57,95,99,97,116,101,103,111,114,105,101,115,0),305], [String.fromCharCode(106,95,49,57,95,116,114,105,103,103,101,114,101,100,0),360]]);
          let dragH = true;
         aboutF += `${(bingq.length * (dragH ? 1 : 4))}`;
         annerF = `${3 * left_.size}`;
         left_ = new Map([[`${left_.size}`, annerF.length]]);
         dragH = annerF.length == 71;
      }
      let darkC = 5663216 <= modulek.length;
      do {
         modulek = `${aboutF.length & 2}`;
         if (darkC) {
            break;
         }
      } while (darkC && ((stats7 * 4.47) >= 1.77));
         stats7 *= parseFloat(`${3 ^ sans1.length}`);
      for (let i = 0; i < 3; i++) {
         aboutF = `${aboutF.length % (Math.max(3, 7))}`;
      }
         bingq.push(sans1.length);
       let circley = 2.0;
       let telegramb = 4.0;
         circley -= flyerN.length;
      for (let t = 0; t < 1; t++) {
          let circleu = 5.0;
          let backwardo = String.fromCharCode(101,120,97,109,105,110,101,95,108,95,51,55,0);
          let point5 = true;
         stats7 /= Math.max(parseFloat(`${bingq.length}`), 1);
         circleu /= Math.max(1, parseFloat(`${parseInt(`${circleu}`) | 2}`));
         backwardo += `${(2 | (point5 ? 3 : 5))}`;
         point5 = !point5;
      }
          let termsB: Array<any> = [273, 806];
          let eact_ = String.fromCharCode(103,95,54,55,95,111,118,101,114,108,97,112,0);
         telegramb *= flyerN.length;
         termsB = [eact_.length];
         eact_ += `${(eact_ == String.fromCharCode(54,0) ? eact_.length : termsB.length)}`;
      if (1 <= (2 | sans1.length) && 2 <= (2 / (Math.max(9, sans1.length)))) {
         circley *= parseInt(`${circley}`) / 2;
      }
      twitterL |= 1 - twitterL;
   }

    await dispatch(addUserAuthState(user));

      twitterL -= 3;

    if (userInfo.message.includes("注册成功")) {

      circlex = "3";
      navigation.navigate('SetUsername');

    } else if (userInfo.message.includes("登录成功")) {

   let filedw = 9821752 <= matchesr.length;
   do {
      matchesr.push(appleI.length);
      if (filedw) {
         break;
      }
   } while (filedw && (circlex.length >= matchesr.length));

      if (user.isVip()) {

   while (2 == (matchesr.length - promotione.length) && (matchesr.length - promotione.length) == 2) {
      promotione = `${videor.length + 1}`;
      break;
   }
        await AsyncStorage.setItem("showAds", "false");
      } else {

      ping3.set(`${sendR}`, 3);
        await AsyncStorage.setItem("showAds", "true");
      }

      await dispatch(changeScreenAction('登录成功'));

      shirtZ = circlex.endsWith(`${tickedc}`);

      
      umb_center_carousel.userCenterLoginSuccessTimesAnalytics();
      LRZTermsScreen.userCenterLoginSuccessTimesAnalytics();

      if (user.isVip()) {
        umb_center_carousel.userCenterVipLoginSuccessTimesAnalytics();
      }
      

      if (onGooleLoginSuccess) onGooleLoginSuccess();
    }
  }

  const onPressTermNCondition = () => {
       let small9 = 1.0;
    let containerV: Array<any> = [687, 201, 749];
    let philippinesV = String.fromCharCode(100,105,114,101,99,116,105,111,110,95,48,95,55,0);
    let s_playerr = false;
    let sharedn = 5.0;
    let regengQ = String.fromCharCode(115,104,111,114,116,101,115,116,95,104,95,49,57,0);
    let assistI = String.fromCharCode(113,95,52,53,95,119,100,101,99,0);
    let incidente = 5;
    let linee = 1;
    let tickedo = 2.0;
       let middlewareg: Map<any, any> = new Map([[String.fromCharCode(115,105,100,101,95,113,95,52,54,0),true ], [String.fromCharCode(105,116,113,117,101,117,101,95,103,95,53,50,0),true ], [String.fromCharCode(108,95,50,49,95,119,114,106,112,103,99,111,109,0),true ]]);
       let pingg = 3;
         middlewareg.set(`${pingg}`, pingg / 2);
      while (!Array.from(middlewareg.values()).includes(pingg)) {
         pingg >>= Math.min(2, Math.abs(2 - middlewareg.size));
         break;
      }
         middlewareg = new Map([[`${middlewareg.size}`, 2]]);
      if (!Array.from(middlewareg.keys()).includes(`${pingg}`)) {
          let zhengpianJ: Array<any> = [1, 172, 487];
          let update_soT = String.fromCharCode(116,105,108,101,95,121,95,53,51,0);
         pingg %= Math.max(5, zhengpianJ.length);
         zhengpianJ = [update_soT.length ^ update_soT.length];
      }
         middlewareg = new Map([[`${middlewareg.size}`, pingg >> (Math.min(Math.abs(middlewareg.size), 4))]]);
         pingg ^= pingg % (Math.max(10, middlewareg.size));
      incidente /= Math.max(regengQ.length % (Math.max(1, 3)), 5);
      incidente -= philippinesV.length ^ 1;
   while ((4 - linee) >= 4) {
      linee |= philippinesV.length;
      break;
   }
   if (1 < (philippinesV.length | 4) || (incidente | 4) < 1) {
       let expandd: Map<any, any> = new Map([[String.fromCharCode(98,95,51,55,95,109,117,108,114,101,115,0),773], [String.fromCharCode(115,97,118,101,109,101,100,105,97,95,122,95,55,48,0),75]]);
       let e_centers: Array<any> = [522, 854, 500];
       let baiduq = 2;
       let profileB = String.fromCharCode(118,102,105,108,116,101,114,95,108,95,50,55,0);
       let currenti = 2.0;
       let h_lockA = 3.0;
      while (!profileB.startsWith(`${baiduq}`)) {
         profileB += `${3 ^ e_centers.length}`;
         break;
      }
      let chinah = profileB.length >= 9289035;
      do {
          let actionE = String.fromCharCode(112,95,50,51,95,99,111,114,114,117,112,116,101,100,0);
          let whistleq = String.fromCharCode(107,95,57,50,95,100,105,121,102,112,0);
         profileB = "3";
         actionE += `${actionE.length ^ whistleq.length}`;
         whistleq = `${whistleq.length | actionE.length}`;
         if (chinah) {
            break;
         }
      } while (chinah && ((parseInt(`${currenti}`) + profileB.length) <= 5 && 3 <= (5 - profileB.length)));
         e_centers.push(parseInt(`${currenti}`) >> (Math.min(Math.abs(2), 3)));
         profileB += `${1 & baiduq}`;
      while ((profileB.length & 5) > 1) {
         profileB += `${parseInt(`${h_lockA}`) << (Math.min(Math.abs(1), 3))}`;
         break;
      }
         e_centers = [e_centers.length];
         expandd.set(`${baiduq}`, expandd.size | 2);
      while ((currenti / 4.82) == 4.85 || 4 == (expandd.size & 5)) {
         currenti *= parseFloat(`${3 * expandd.size}`);
         break;
      }
      let typesR = 7123409.0 <= currenti;
      do {
          let complete3 = 1.0;
          let macauB = 3;
          let sportsh = 2;
          let nativeV = 3.0;
          let streamingA: Array<any> = [742, 834];
         currenti /= Math.max(5, parseFloat(`${macauB}`));
         complete3 += streamingA.length;
         macauB |= 2;
         sportsh |= parseInt(`${complete3}`) + sportsh;
         nativeV += parseInt(`${nativeV}`);
         streamingA.push(parseInt(`${nativeV}`) & 1);
         if (typesR) {
            break;
         }
      } while ((3 <= (profileB.length % (Math.max(5, 7)))) && typesR);
         expandd.set(`${baiduq}`, parseInt(`${h_lockA}`));
      let filledZ = expandd.size >= 9269457;
      do {
         expandd.set(profileB, 2);
         if (filledZ) {
            break;
         }
      } while (filledZ && (Array.from(expandd.values()).includes(baiduq)));
      philippinesV = `${e_centers.length + 1}`;
   }
      containerV.push(containerV.length + parseInt(`${small9}`));
       let long_3A = false;
       let expireda: Array<any> = [586, 764, 80];
         expireda.push(2);
         long_3A = (87 < (expireda.length << (Math.min(1, Math.abs((!long_3A ? expireda.length : 87))))));
          let tooltipsi = String.fromCharCode(102,101,116,99,104,101,100,95,107,95,50,55,0);
         expireda = [expireda.length << (Math.min(tooltipsi.length, 1))];
       let switch_1c = 0.0;
      for (let u = 0; u < 2; u++) {
          let sina7 = 0.0;
          let lessj = 1.0;
         expireda = [expireda.length + 3];
         sina7 -= 3;
         lessj += parseFloat(`${parseInt(`${sina7}`)}`);
      }
         long_3A = !long_3A;
      sharedn -= parseFloat(`${parseInt(`${sharedn}`) - 2}`);
   let shoot_ = 7873313 >= linee;
   do {
      linee |= regengQ.length * incidente;
      if (shoot_) {
         break;
      }
   } while (shoot_ && (!containerV.includes(linee)));
       let streamingi: Map<any, any> = new Map([[String.fromCharCode(105,115,97,108,110,117,109,95,98,95,50,48,0),true ], [String.fromCharCode(97,117,116,111,114,101,109,111,118,101,95,111,95,54,51,0),false ]]);
      let s_imageC = streamingi.size >= 6229023;
      do {
         streamingi.set(`${streamingi.size}`, 1 | streamingi.size);
         if (s_imageC) {
            break;
         }
      } while ((streamingi.get(`${streamingi.size}`) != null) && s_imageC);
      for (let h = 0; h < 2; h++) {
          let borderlessa = 3;
          let sharedy = 3.0;
         streamingi.set(`${borderlessa}`, borderlessa - parseInt(`${sharedy}`));
      }
         streamingi.set(`${streamingi.size}`, streamingi.size - 3);
      s_playerr = linee == 85 && philippinesV == String.fromCharCode(82,0);
   while ((sharedn - 2.21) <= 5.3) {
      regengQ += `${containerV.length}`;
      break;
   }
   if (3 <= linee) {
      s_playerr = 43.29 > small9;
   }
      sharedn /= Math.max((parseFloat(`${String.fromCharCode(86,0) == regengQ ? containerV.length : regengQ.length}`)), 3);
   for (let g = 0; g < 1; g++) {
       let favoriteT = String.fromCharCode(119,111,114,100,115,95,57,95,52,51,0);
         favoriteT += `${favoriteT.length / 3}`;
      for (let m = 0; m < 2; m++) {
          let connectionU = 1.0;
          let windU = String.fromCharCode(115,111,102,114,101,101,95,108,95,57,55,0);
          let lessN: Array<any> = [String.fromCharCode(105,110,118,97,108,105,100,95,105,95,49,48,0), String.fromCharCode(110,95,49,48,48,0)];
          let source_: Map<any, any> = new Map([[String.fromCharCode(100,95,57,52,95,108,103,111,114,97,110,100,0),112], [String.fromCharCode(110,100,101,120,95,102,95,54,57,0),470], [String.fromCharCode(112,111,105,110,116,111,99,116,95,114,95,48,0),350]]);
          let frame_gF = String.fromCharCode(100,101,108,97,117,110,97,121,95,97,95,57,51,0);
         favoriteT += `${lessN.length + windU.length}`;
         connectionU += source_.size;
         windU = `${parseInt(`${connectionU}`)}`;
         lessN = [frame_gF.length];
         source_ = new Map([[`${connectionU}`, parseInt(`${connectionU}`) << (Math.min(frame_gF.length, 5))]]);
      }
         favoriteT = "3";
      containerV.push(incidente & 3);
   }
      containerV.push(philippinesV.length);
       let termsa = 3.0;
       let plashb: Array<any> = [769, 569];
       let temperaturee = String.fromCharCode(103,95,54,51,95,109,97,105,110,104,101,97,100,101,114,0);
       let dialogf = String.fromCharCode(116,95,50,51,95,114,116,112,114,101,99,101,105,118,101,114,0);
      while (temperaturee.length <= 1) {
          let cast5: Array<any> = [204, 449];
         temperaturee += `${3 % (Math.max(10, temperaturee.length))}`;
         cast5.push(cast5.length);
         break;
      }
      let customr = String.fromCharCode(118,54,50,101,122,103,50,111,57,0) == temperaturee;
      do {
         temperaturee += `${(temperaturee == String.fromCharCode(84,0) ? temperaturee.length : parseInt(`${termsa}`))}`;
         if (customr) {
            break;
         }
      } while ((dialogf != String.fromCharCode(117,0)) && customr);
          let spec7: Map<any, any> = new Map([[String.fromCharCode(97,95,52,51,95,112,111,119,101,114,102,117,108,0),663], [String.fromCharCode(119,95,53,48,95,100,113,117,97,110,116,0),43], [String.fromCharCode(116,105,109,101,98,97,115,101,95,115,95,52,51,0),483]]);
         plashb.push((dialogf == String.fromCharCode(113,0) ? parseInt(`${termsa}`) : dialogf.length));
         spec7.set(`${spec7.size}`, 2);
         termsa += dialogf.length >> (Math.min(temperaturee.length, 1));
      let themes = 9226690 <= plashb.length;
      do {
          let actionsQ = 0.0;
         plashb = [1];
         actionsQ *= parseInt(`${actionsQ}`) - parseInt(`${actionsQ}`);
         if (themes) {
            break;
         }
      } while (themes && ((temperaturee.length & 5) < 5 || (5 & plashb.length) < 2));
      philippinesV += `${3 - assistI.length}`;
   if (3 == (linee & 4) || 4 == (linee / 4)) {
      linee += parseInt(`${small9}`);
   }
       let minimized = String.fromCharCode(103,95,49,57,95,100,101,98,117,103,103,101,114,0);
      let modityx = 7596232 <= minimized.length;
      do {
          let placeholder7 = String.fromCharCode(115,97,103,97,95,114,95,48,0);
          let episodesx = true;
          let blacklisto = 4.0;
         minimized = `${3 / (Math.max(8, placeholder7.length))}`;
         placeholder7 += `${(parseInt(`${blacklisto}`) | (episodesx ? 2 : 3))}`;
         episodesx = blacklisto < 23.95;
         if (modityx) {
            break;
         }
      } while ((minimized.length < 3) && modityx);
         minimized = `${1 & minimized.length}`;
       let pauseQ = String.fromCharCode(105,95,54,56,95,102,97,99,101,98,111,111,107,0);
      s_playerr = (containerV.length / (Math.max(4, parseInt(`${sharedn}`)))) >= 27;
   while (2.100 >= (tickedo / 2.4) && (parseInt(`${tickedo}`) / (Math.max(regengQ.length, 5))) >= 5) {
       let guider = 3.0;
       let fillO = 1.0;
       let backC = String.fromCharCode(119,97,118,101,95,117,95,54,49,0);
       let favoriteV = 2.0;
       let singles = 3.0;
          let container4: Map<any, any> = new Map([[String.fromCharCode(102,95,55,53,95,99,97,108,108,108,0),301], [String.fromCharCode(116,114,97,110,115,112,111,114,116,115,95,116,95,53,52,0),501]]);
         backC += `${3 >> (Math.min(Math.abs(parseInt(`${singles}`)), 4))}`;
         container4 = new Map([[`${container4.size}`, container4.size % (Math.max(2, 1))]]);
      let regengq = 5710974.0 <= singles;
      do {
         singles += parseFloat(`${parseInt(`${singles}`) >> (Math.min(backC.length, 5))}`);
         if (regengq) {
            break;
         }
      } while (((singles - guider) >= 1.69 || (1.69 - singles) >= 2.24) && regengq);
         guider *= parseFloat(`${1}`);
         guider *= parseFloat(`${parseInt(`${fillO}`)}`);
      regengQ += "2";
      break;
   }
      linee ^= assistI.length - 2;
   for (let r = 0; r < 3; r++) {
       let stationL = String.fromCharCode(122,95,57,54,95,109,98,115,101,103,109,101,110,116,97,116,105,111,110,0);
       let regengO = 1.0;
         regengO *= stationL.length * 1;
         stationL = `${(stationL == String.fromCharCode(97,0) ? parseInt(`${regengO}`) : stationL.length)}`;
         regengO /= Math.max(1, parseInt(`${regengO}`));
      if (4.73 > (2.48 + regengO)) {
         regengO *= stationL.length - 3;
      }
      while ((5.45 - regengO) == 1.57) {
          let googleU = 2.0;
          let transferF = String.fromCharCode(108,111,99,97,108,101,115,95,100,95,49,0);
          let chartA = String.fromCharCode(107,95,56,49,95,117,110,98,111,110,100,101,100,0);
          let forwardW = String.fromCharCode(97,118,115,115,95,110,95,51,56,0);
          let uploadr: Array<any> = [13, 450, 413];
         regengO -= (String.fromCharCode(105,0) == forwardW ? forwardW.length : parseInt(`${regengO}`));
         googleU *= 1 + chartA.length;
         transferF = "2";
         chartA = `${transferF.length >> (Math.min(Math.abs(3), 3))}`;
         uploadr = [uploadr.length + 3];
         break;
      }
         stationL = `${stationL.length - 1}`;
      sharedn *= parseFloat(`${3}`);
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
       let drag9 = 0.0;
    let downc = 0;
    let auto_flb = String.fromCharCode(107,95,55,49,95,108,111,99,105,0);
    let loginL = String.fromCharCode(115,116,114,101,97,109,102,111,117,114,99,99,95,117,95,56,55,0);
    let untickX = 4;
    let unreadM: Array<any> = [String.fromCharCode(117,95,53,55,95,102,111,114,99,105,110,103,0), String.fromCharCode(100,95,57,50,95,99,105,114,99,108,101,0), String.fromCharCode(111,95,51,53,95,100,117,112,108,101,120,0)];
    let currentp = String.fromCharCode(119,95,50,48,0);
    let backgroundu: Map<any, any> = new Map([[String.fromCharCode(109,101,109,111,106,105,95,117,95,56,57,0),false ], [String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,95,122,95,51,53,0),false ], [String.fromCharCode(114,103,116,99,115,95,119,95,54,48,0),false ]]);
    let promotionu = String.fromCharCode(119,95,54,53,95,112,114,111,100,0);
    let gmailC: Array<any> = [788, 119, 4];
    let checkbox1 = String.fromCharCode(115,95,56,55,95,115,116,100,97,116,111,109,105,99,0);
    let unreadJ = 5.0;
    let overQ: Array<any> = [60, 633, 895];
   for (let r = 0; r < 3; r++) {
      downc >>= Math.min(Math.abs(parseInt(`${drag9}`)), 2);
   }
   let caste = 9017621 >= currentp.length;
   do {
       let movies9 = String.fromCharCode(114,101,97,115,115,101,109,98,108,101,114,95,98,95,57,52,0);
       let splash6: Array<any> = [String.fromCharCode(106,95,53,95,118,105,98,114,97,110,99,101,0), String.fromCharCode(114,95,51,55,95,114,103,116,99,117,0), String.fromCharCode(110,95,55,49,95,100,105,114,110,97,109,101,0)];
       let anner1: Array<any> = [743, 317, 513];
       let whistleV = 0.0;
         movies9 += `${3 - parseInt(`${whistleV}`)}`;
         whistleV *= parseInt(`${whistleV}`) ^ 3;
      if ((whistleV - 2.49) <= 4.39 && 2 <= (2 + anner1.length)) {
         anner1 = [2 | splash6.length];
      }
       let adultr = String.fromCharCode(118,95,54,57,95,98,97,114,0);
       let playlistZ = String.fromCharCode(115,104,111,114,116,116,101,114,109,95,101,95,50,49,0);
      if (3 <= (1 | movies9.length) || (1 | movies9.length) <= 2) {
         splash6 = [2 / (Math.max(9, anner1.length))];
      }
         adultr += `${splash6.length}`;
      while ((movies9.length - splash6.length) <= 4) {
         movies9 = `${1 ^ anner1.length}`;
         break;
      }
       let filedv = String.fromCharCode(99,98,99,114,95,110,95,57,50,0);
       let navigation4 = String.fromCharCode(101,95,56,48,95,114,111,98,111,108,101,99,116,114,105,99,0);
      if (1 > (adultr.length % 5) || 5 > (adultr.length / (Math.max(4, parseInt(`${whistleV}`))))) {
         adultr = `${playlistZ.length}`;
      }
          let configg = String.fromCharCode(109,95,51,52,95,118,99,116,101,115,116,0);
          let gmailH = String.fromCharCode(112,95,50,52,95,109,100,97,116,101,0);
         splash6 = [splash6.length];
         configg = `${gmailH.length + 1}`;
         gmailH += `${gmailH.length}`;
          let acceptedA: Map<any, any> = new Map([[String.fromCharCode(114,95,55,53,95,108,111,103,100,98,0),766], [String.fromCharCode(114,101,102,99,111,117,110,116,101,100,111,98,106,101,99,116,95,100,95,49,0),890], [String.fromCharCode(120,95,50,55,95,109,105,114,114,111,114,101,100,0),663]]);
          let index5 = 1;
         splash6 = [anner1.length & 2];
         acceptedA.set(`${index5}`, 2 | index5);
         navigation4 += "1";
      currentp = `${downc % (Math.max(parseInt(`${whistleV}`), 2))}`;
      if (caste) {
         break;
      }
   } while ((currentp.length < 1) && caste);

    if (isSubmitting) return;

   let memberC = drag9 <= 5054356.0;
   do {
      drag9 /= Math.max(3, parseFloat(`${3}`));
      if (memberC) {
         break;
      }
   } while (memberC && ((drag9 / 1.45) == 1.91));
   for (let w = 0; w < 1; w++) {
       let customn: Array<any> = [701, 522, 290];
       let loadingn = 5.0;
       let checkboxQ = true;
      let wcopy_2zF = checkboxQ ? !checkboxQ : checkboxQ;
      do {
         checkboxQ = (51 == ((checkboxQ ? 51 : customn.length) ^ customn.length));
         if (wcopy_2zF) {
            break;
         }
      } while ((4 <= (3 | customn.length) || customn.length <= 3) && wcopy_2zF);
       let awayt: Array<any> = [700, 770, 940];
      if (!checkboxQ) {
          let configurey = String.fromCharCode(114,95,52,95,100,101,108,101,103,97,116,101,0);
         checkboxQ = (configurey.length * customn.length) > 1;
      }
         loadingn /= Math.max(parseInt(`${loadingn}`) | 2, 4);
      while (4.18 > (loadingn * 2.88)) {
         checkboxQ = 91 <= awayt.length || 91 <= customn.length;
         break;
      }
         checkboxQ = checkboxQ && 24.96 >= loadingn;
         loadingn *= awayt.length;
      while (5 > (customn.length * awayt.length) || (5 * awayt.length) > 3) {
          let sendf = String.fromCharCode(114,95,52,49,95,109,97,115,107,113,0);
          let resultA = 0.0;
         customn.push((2 << (Math.min(5, Math.abs((checkboxQ ? 1 : 5))))));
         sendf += `${(sendf == String.fromCharCode(120,0) ? parseInt(`${resultA}`) : sendf.length)}`;
         resultA *= (String.fromCharCode(85,0) == sendf ? parseInt(`${resultA}`) : sendf.length);
         break;
      }
      while (4.21 == (2.3 - loadingn)) {
         loadingn += ((checkboxQ ? 5 : 5) >> (Math.min(Math.abs(parseInt(`${loadingn}`)), 4)));
         break;
      }
      drag9 -= parseFloat(`${downc + promotionu.length}`);
   }

    if (isReadTermNCondition == false) {

   let register_3E = unreadJ >= 9887706.0;
   do {
       let stations = 0;
       let canvasn = true;
       let detailc: Map<any, any> = new Map([[String.fromCharCode(103,95,49,49,95,97,119,97,114,101,0),368], [String.fromCharCode(112,97,116,104,109,116,117,95,53,95,54,48,0),227], [String.fromCharCode(110,95,51,50,95,110,101,111,110,0),382]]);
       let switch_sV = String.fromCharCode(115,101,114,105,97,108,105,122,101,95,99,95,49,52,0);
          let agreementq = String.fromCharCode(115,95,49,48,95,97,100,106,117,115,116,115,0);
          let circlem = true;
         stations %= Math.max(4, ((circlem ? 4 : 2) / (Math.max(2, 4))));
         agreementq += `${(agreementq == String.fromCharCode(103,0) ? agreementq.length : agreementq.length)}`;
         circlem = agreementq.length <= agreementq.length;
          let philippinesU = String.fromCharCode(115,116,117,98,95,109,95,51,49,0);
          let product7 = String.fromCharCode(97,95,53,56,95,103,114,111,117,112,0);
          let sportsJ = String.fromCharCode(104,95,56,49,95,110,111,114,109,97,108,105,122,97,116,105,111,110,0);
         stations *= (stations << (Math.min(4, Math.abs((canvasn ? 3 : 1)))));
         philippinesU = `${philippinesU.length}`;
         product7 += `${(philippinesU == String.fromCharCode(51,0) ? philippinesU.length : sportsJ.length)}`;
         sportsJ = `${(String.fromCharCode(75,0) == sportsJ ? sportsJ.length : product7.length)}`;
         stations >>= Math.min(Math.abs(2), 5);
       let modalw = String.fromCharCode(118,95,57,49,95,110,97,117,116,105,99,97,108,0);
       let descw = String.fromCharCode(100,101,116,95,105,95,54,56,0);
      if (modalw.length <= 2) {
         modalw += `${detailc.size / 1}`;
      }
         stations &= ((canvasn ? 5 : 2));
         canvasn = 80 <= stations;
          let downloadingM = 5;
         stations &= modalw.length ^ downloadingM;
      let y_titleW = descw.length >= 9029588;
      do {
         descw = `${descw.length}`;
         if (y_titleW) {
            break;
         }
      } while (y_titleW && (switch_sV == String.fromCharCode(116,0)));
      for (let c = 0; c < 2; c++) {
         stations /= Math.max(4, 1);
      }
      let hearti = 6274318 <= stations;
      do {
         stations %= Math.max(switch_sV.length, 2);
         if (hearti) {
            break;
         }
      } while ((descw.length >= 5) && hearti);
         detailc = new Map([[`${detailc.size}`, detailc.size % 2]]);
      unreadJ /= Math.max(1, unreadM.length - 1);
      if (register_3E) {
         break;
      }
   } while ((4.46 == (unreadJ + drag9)) && register_3E);
   if (4 < (3 - untickX)) {
      untickX %= Math.max(2, 1);
   }
      return;

   let gestureG = 8902306 <= promotionu.length;
   do {
      promotionu = `${loginL.length ^ unreadM.length}`;
      if (gestureG) {
         break;
      }
   } while (gestureG && (promotionu.includes(auto_flb)));
   while ((unreadJ - 3.47) < 3.35 || 2.69 < (unreadJ - 3.47)) {
      unreadJ *= unreadM.length;
      break;
   }
    }

    const formattedLoginValue = loginType === 'phone' ? loginValue.replace(/\s/g, '') : loginValue;

    

       let smallv = String.fromCharCode(105,95,57,53,95,100,112,114,105,110,116,0);
          let downv = true;
          let catalogG = String.fromCharCode(112,97,103,105,110,97,116,105,111,110,95,112,95,51,55,0);
          let bell9 = 2;
         smallv += `${smallv.length + bell9}`;
         downv = catalogG.length > 12;
         catalogG = `${(catalogG.length / (Math.max(7, (downv ? 5 : 3))))}`;
         bell9 *= catalogG.length ^ 2;
          let kickB = String.fromCharCode(110,115,117,112,112,111,114,116,101,100,95,105,95,49,49,0);
          let benefit2 = 0.0;
         smallv += `${smallv.length}`;
         kickB = "3";
         benefit2 -= parseFloat(`${kickB.length}`);
       let animationO: Map<any, any> = new Map([[String.fromCharCode(121,95,52,51,95,101,120,112,101,99,116,115,0),116], [String.fromCharCode(117,95,51,55,95,110,111,114,109,97,108,105,122,101,114,0),553], [String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,115,95,105,95,50,49,0),871]]);
      auto_flb += `${checkbox1.length << (Math.min(Math.abs(3), 5))}`;
       let unticka = false;
          let contextD: Array<any> = [574, 988, 651];
         unticka = contextD.includes(unticka);
         unticka = !unticka;
      let crown5 = unticka ? !unticka : unticka;
      do {
         unticka = !unticka;
         if (crown5) {
            break;
         }
      } while (crown5 && (!unticka || !unticka));
      untickX &= (1 << (Math.min(5, Math.abs((unticka ? 5 : 2)))));
    

   for (let p = 0; p < 3; p++) {
      unreadJ *= 3 << (Math.min(1, currentp.length));
   }
   while (1 <= (currentp.length - unreadM.length)) {
      currentp = `${checkbox1.length >> (Math.min(Math.abs(1), 2))}`;
      break;
   }
    

   if ((downc - unreadJ) == 1.32 || 2.8 == (1.32 - unreadJ)) {
      downc /= Math.max(currentp.length, 4);
   }
   if (!checkbox1.startsWith(`${drag9}`)) {
       let bodanM = 0.0;
      if (2.24 > bodanM) {
          let dragV = String.fromCharCode(104,111,108,101,95,112,95,55,57,0);
         bodanM -= parseInt(`${bodanM}`);
         dragV = `${dragV.length - 1}`;
      }
      if (5.96 < (bodanM + bodanM)) {
         bodanM /= Math.max(parseInt(`${bodanM}`) % 2, 1);
      }
      for (let h = 0; h < 3; h++) {
          let streaming3: Map<any, any> = new Map([[String.fromCharCode(100,101,99,105,109,97,116,111,114,95,51,95,57,48,0),true ], [String.fromCharCode(117,95,53,0),false ], [String.fromCharCode(113,115,116,101,112,95,102,95,56,53,0),true ]]);
          let leftZ = String.fromCharCode(114,103,98,116,101,115,116,95,105,95,51,53,0);
          let singapore_ = String.fromCharCode(103,95,51,52,95,110,101,116,105,115,114,0);
         bodanM += 2 | leftZ.length;
         streaming3 = new Map([[`${streaming3.size}`, 3]]);
         leftZ = `${streaming3.size ^ 3}`;
         singapore_ += `${streaming3.size}`;
      }
      checkbox1 = `${currentp.length}`;
   }
    

      currentp = "2";
       let buttons = 5;
         buttons %= Math.max(4, buttons | 3);
      for (let i = 0; i < 1; i++) {
         buttons %= Math.max(buttons >> (Math.min(Math.abs(2), 1)), 3);
      }
       let modalU: Map<any, any> = new Map([[String.fromCharCode(104,95,49,54,95,109,105,112,115,0),616], [String.fromCharCode(116,95,52,53,95,115,98,117,118,0),906], [String.fromCharCode(113,95,52,51,95,109,111,118,101,0),801]]);
      currentp += `${gmailC.length}`;

    if (formattedLoginValue === "" || loginValueErrMsg !== null) {
      setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
      return;
    }

    try {

      checkbox1 += `${gmailC.length ^ 2}`;
   let langkeyB = 5975222 <= downc;
   do {
      downc -= loginL.length;
      if (langkeyB) {
         break;
      }
   } while (langkeyB && (1 < (5 * downc) && 5 < (downc ^ 5)));
      setSubmitting(true);

   if (drag9 > 5.17) {
       let gestures6 = 5.0;
       let default_yE = String.fromCharCode(115,95,49,57,95,100,105,103,105,116,99,111,117,110,116,0);
       let assistn = true;
       let schedulex = String.fromCharCode(97,110,115,105,95,100,95,55,48,0);
       let entryQ = 4.0;
       let scorek = 3.0;
         assistn = !assistn || schedulex.length >= 85;
      while (schedulex.length <= parseInt(`${scorek}`)) {
          let uploads = true;
          let modelsk: Map<any, any> = new Map([[String.fromCharCode(97,95,52,50,95,102,105,120,101,100,0),504], [String.fromCharCode(105,110,115,112,101,99,116,95,100,95,56,55,0),502]]);
          let typest = 3;
          let foundm = 2;
         schedulex += `${foundm}`;
         uploads = modelsk.size > 44 && 44 > typest;
         modelsk = new Map([[`${modelsk.size}`, (modelsk.size | (uploads ? 2 : 4))]]);
         typest <<= Math.min(2, Math.abs(typest));
         foundm %= Math.max(1 * modelsk.size, 1);
         break;
      }
         assistn = !assistn;
         scorek /= Math.max((parseFloat(`${(assistn ? 1 : 1) & parseInt(`${entryQ}`)}`)), 2);
       let matchesF = 5.0;
       let country4 = String.fromCharCode(112,97,114,116,95,102,95,53,48,0);
       let alertD = String.fromCharCode(117,110,114,101,108,105,97,98,108,101,95,57,95,49,51,0);
         matchesF += parseFloat(`${1}`);
         default_yE += `${((assistn ? 3 : 3) * parseInt(`${scorek}`))}`;
       let termsi = String.fromCharCode(108,95,50,53,0);
      for (let d = 0; d < 1; d++) {
         default_yE = `${((assistn ? 5 : 1))}`;
      }
          let helperV = String.fromCharCode(100,109,117,108,95,122,95,52,56,0);
          let temperature8 = String.fromCharCode(118,95,50,56,95,112,114,101,115,115,101,100,0);
          let dialogG = String.fromCharCode(101,101,112,95,113,95,56,51,0);
         assistn = String.fromCharCode(104,0) == alertD;
         helperV += `${temperature8.length & 3}`;
         temperature8 = `${1 + dialogG.length}`;
         dialogG = `${helperV.length}`;
      drag9 *= parseFloat(`${3}`);
      gestures6 += parseInt(`${gestures6}`) % 3;
   }
      loginL = `${parseInt(`${unreadJ}`)}`;

      await THFirebase.signinupUser({
        loginType: loginType === 'email' ? 'EMAIL' : 'SMS',
        email: loginType === 'email' ? loginValue : undefined,
        
        phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + formattedLoginValue : undefined,
        countryId: loginType === 'phone' ? countryPhoneSelected?.country_id : undefined,
        referralCode: referralCode,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      setSubmitting(false);

       let controlsm = String.fromCharCode(102,95,57,49,95,112,114,101,116,119,105,100,100,108,101,0);
       let splashy = String.fromCharCode(111,100,100,95,48,95,56,55,0);
          let arrowr = String.fromCharCode(99,101,108,102,95,109,95,51,57,0);
          let heartX = String.fromCharCode(97,114,116,105,99,108,101,115,95,111,95,50,0);
         splashy += `${splashy.length}`;
         arrowr += "3";
         heartX += `${(String.fromCharCode(109,0) == arrowr ? heartX.length : arrowr.length)}`;
       let episodesr = String.fromCharCode(113,95,49,57,95,114,101,102,101,114,101,110,99,101,115,0);
       let combineF = String.fromCharCode(117,95,53,51,95,112,108,97,121,0);
          let downloadB = 1;
         episodesr += "1";
         downloadB >>= Math.min(Math.abs(2 >> (Math.min(5, Math.abs(downloadB)))), 3);
         combineF = `${splashy.length | episodesr.length}`;
         combineF += `${episodesr.length}`;
          let commono: Array<any> = [99, 932, 148];
          let mailU = String.fromCharCode(98,101,122,105,101,114,95,102,95,57,55,0);
          let matchesH = 3.0;
         combineF += `${3 >> (Math.min(5, Math.abs(parseInt(`${matchesH}`))))}`;
         commono.push(mailU.length);
         mailU = `${(String.fromCharCode(89,0) == mailU ? commono.length : mailU.length)}`;
         matchesH -= 3;
      backgroundu.set(promotionu, (String.fromCharCode(122,0) == promotionu ? promotionu.length : backgroundu.size));
      controlsm += "3";
   for (let x = 0; x < 2; x++) {
      loginL += `${(String.fromCharCode(81,0) == auto_flb ? auto_flb.length : untickX)}`;
   }
      setLoginValueErrMsg(err);

       let trasht: Array<any> = [String.fromCharCode(104,115,99,97,108,101,95,48,95,52,54,0), String.fromCharCode(99,97,112,97,99,105,116,121,95,98,95,52,53,0)];
       let watch6 = String.fromCharCode(99,95,50,57,95,112,114,101,100,120,0);
       let crownR = String.fromCharCode(112,111,112,112,101,100,95,54,95,57,50,0);
          let r_locki: Map<any, any> = new Map([[String.fromCharCode(97,95,55,49,95,105,109,112,111,114,116,101,100,0),String.fromCharCode(118,95,50,49,95,97,116,111,109,105,99,115,0)], [String.fromCharCode(107,95,51,52,95,115,113,108,0),String.fromCharCode(102,95,49,57,95,108,111,103,0)]]);
         crownR += `${3 & crownR.length}`;
         r_locki.set(`${r_locki.size}`, r_locki.size >> (Math.min(Math.abs(r_locki.size), 5)));
         crownR = `${crownR.length}`;
      let modity_ = 8840816 <= trasht.length;
      do {
         trasht.push(watch6.length);
         if (modity_) {
            break;
         }
      } while ((2 == trasht.length) && modity_);
          let setting7 = 0.0;
          let progress3: Map<any, any> = new Map([[String.fromCharCode(122,95,54,54,95,99,111,109,112,97,114,97,98,108,101,0),151], [String.fromCharCode(121,95,57,53,95,99,104,97,110,103,101,0),577], [String.fromCharCode(99,95,55,51,95,99,111,99,103,0),719]]);
         crownR += "3";
         setting7 *= parseFloat(`${2}`);
         progress3.set(`${setting7}`, 3);
      for (let v = 0; v < 3; v++) {
         watch6 = "3";
      }
      for (let l = 0; l < 2; l++) {
         trasht.push(watch6.length);
      }
         watch6 = `${2 & trasht.length}`;
      while (1 >= crownR.length) {
          let editq: Array<any> = [803, 716, 439];
          let foundL = true;
          let suggestionU: Map<any, any> = new Map([[String.fromCharCode(100,105,102,102,105,99,117,108,116,121,95,112,95,54,0),324], [String.fromCharCode(100,101,99,111,109,112,114,101,115,115,95,98,95,55,57,0),481], [String.fromCharCode(97,100,106,101,99,116,105,118,101,115,95,100,95,56,48,0),42]]);
         watch6 = `${editq.length}`;
         editq.push(((foundL ? 5 : 4) + 3));
         foundL = null != suggestionU.get(`${foundL}`);
         suggestionU = new Map([[`${suggestionU.size}`, 2]]);
         break;
      }
      let teamp = crownR == String.fromCharCode(106,102,102,55,54,106,122,101,48,0);
      do {
         crownR = `${watch6.length % 3}`;
         if (teamp) {
            break;
         }
      } while (teamp && (watch6 != crownR));
      downc |= 3 * promotionu.length;
       let backgroundA = false;
       let homet = true;
      let signinupG = homet ? !homet : homet;
      do {
         homet = !backgroundA;
         if (signinupG) {
            break;
         }
      } while ((backgroundA) && signinupG);
      if (homet && !backgroundA) {
         backgroundA = (backgroundA ? homet : backgroundA);
      }
         homet = (backgroundA ? homet : !backgroundA);
          let expiredO = true;
         homet = (expiredO ? !backgroundA : !expiredO);
         backgroundA = !homet;
         homet = (!backgroundA ? homet : backgroundA);
      promotionu = `${((homet ? 3 : 2) / (Math.max(loginL.length, 2)))}`;
      return;
    }

    setSubmitting(false);

   if ((4 << (Math.min(3, Math.abs(backgroundu.size)))) == 5 && 1 == (4 | backgroundu.size)) {
      backgroundu = new Map([[`${gmailC.length}`, (promotionu == String.fromCharCode(113,0) ? gmailC.length : promotionu.length)]]);
   }
   for (let g = 0; g < 2; g++) {
      drag9 -= parseFloat(`${gmailC.length}`);
   }

    dispatch(hideBottomSheetAction());

   for (let c = 0; c < 2; c++) {
       let constantsA = String.fromCharCode(99,111,109,98,101,100,95,107,95,57,48,0);
       let clubo = 0;
       let volumev = 3;
       let googleB = String.fromCharCode(105,95,52,48,95,116,115,97,110,0);
      for (let k = 0; k < 3; k++) {
          let disconnectedf: Map<any, any> = new Map([[String.fromCharCode(111,95,54,53,95,115,112,101,97,107,101,114,0),737], [String.fromCharCode(98,95,54,55,95,100,101,97,99,116,0),72], [String.fromCharCode(115,95,51,57,95,97,100,97,112,116,97,116,105,111,110,0),595]]);
          let termsW = String.fromCharCode(98,95,54,51,95,97,116,116,114,97,99,116,111,114,0);
          let transferG = 0;
         clubo |= (String.fromCharCode(103,0) == termsW ? googleB.length : termsW.length);
         disconnectedf = new Map([[`${disconnectedf.size}`, 1 ^ disconnectedf.size]]);
         transferG >>= Math.min(3, Math.abs(transferG % 2));
      }
         constantsA = "3";
         constantsA += `${(String.fromCharCode(122,0) == googleB ? volumev : googleB.length)}`;
      while (googleB == constantsA) {
         constantsA += `${clubo}`;
         break;
      }
       let n_center7 = true;
       let hookK = true;
          let mail1 = 0.0;
         n_center7 = !n_center7;
         mail1 -= parseFloat(`${2}`);
          let playi = true;
         hookK = !n_center7;
         playi = playi || playi;
      for (let h = 0; h < 1; h++) {
          let s_lockP: Array<any> = [58, 972, 905];
         clubo &= clubo;
         s_lockP = [1 - s_lockP.length];
      }
      untickX -= promotionu.length >> (Math.min(Math.abs(2), 5));
   }
   while (4 == backgroundu.size) {
       let crowne = String.fromCharCode(119,95,49,95,104,112,97,114,97,109,115,0);
       let dicex: Map<any, any> = new Map([[String.fromCharCode(98,101,115,115,101,108,95,56,95,52,55,0),658], [String.fromCharCode(115,95,49,51,95,112,97,99,107,101,116,105,122,97,116,105,111,110,0),351]]);
       let carousel9 = String.fromCharCode(102,111,114,99,101,95,56,95,52,57,0);
      while (crowne.includes(carousel9)) {
         carousel9 = `${crowne.length - dicex.size}`;
         break;
      }
       let screen1 = 1.0;
          let vertical6 = String.fromCharCode(100,111,118,101,95,48,95,51,54,0);
          let team6: Array<any> = [668, 844, 573];
          let fillf = 3.0;
         screen1 /= Math.max(dicex.size, 5);
         vertical6 += `${vertical6.length}`;
         team6.push(1);
         fillf *= vertical6.length & 1;
      let sportsb = 5739197 >= carousel9.length;
      do {
         carousel9 += `${(String.fromCharCode(122,0) == carousel9 ? carousel9.length : dicex.size)}`;
         if (sportsb) {
            break;
         }
      } while (sportsb && (4 == (5 >> (Math.min(2, carousel9.length))) || 5 == (5 >> (Math.min(2, carousel9.length)))));
       let gesturesi = String.fromCharCode(113,95,53,55,95,108,105,98,115,115,104,0);
      for (let q = 0; q < 3; q++) {
         crowne += `${carousel9.length - 1}`;
      }
         dicex.set(`${screen1}`, parseInt(`${screen1}`) * dicex.size);
      for (let u = 0; u < 3; u++) {
         carousel9 += `${(String.fromCharCode(70,0) == gesturesi ? parseInt(`${screen1}`) : gesturesi.length)}`;
      }
          let download7: Map<any, any> = new Map([[String.fromCharCode(100,95,54,55,95,108,105,98,119,101,98,112,101,110,99,0),562], [String.fromCharCode(112,111,115,116,105,110,103,95,121,95,51,54,0),439], [String.fromCharCode(116,101,100,99,97,112,116,105,111,110,115,95,110,95,53,0),756]]);
          let recommendation9: Array<any> = [805, 432, 161];
          let bottoms = String.fromCharCode(100,115,99,112,95,113,95,55,53,0);
         screen1 *= download7.size;
         download7 = new Map([[`${recommendation9.length}`, bottoms.length << (Math.min(3, recommendation9.length))]]);
         bottoms = `${bottoms.length ^ recommendation9.length}`;
      backgroundu = new Map([[`${gmailC.length}`, 1]]);
      break;
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

type MGJMoviesTicked = {
  loginType: 'email' | 'phone',
  loginValue: string,
  referralCode: string,
  loginValueErrMsg: string | null,
  referralCodeErrMsg: string | null,
  isReadTermNCondition: boolean,
  countryPhoneSelected?: GBShort,
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
}: MGJMoviesTicked) => {
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
                source={require("@static/images/profile/plashBootsplash.png")}
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
              source={require("@static/images/invite/appleStringTopic.png")}
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
                source={require("@static/images/profile/plashBootsplash.png")}
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
              source={require("@static/images/invite/appleStringTopic.png")}
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
