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
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/kg_index";
import {
  changeScreenAction,
  hideBottomSheetAction,
  navigateToProfileScreen,
} from "@redux/actions/a_switch";
import SpinnerOverlay from "../modal/l_member_component";
import PhoneIcon from '@static/images/xvodPromotionPrivate_xa.svg';
import MailIcon from '@static/images/shootGift.svg';
import GmailIcon from '@static/images/redirectType_8.svg';
import DropdownIcon from '@static/images/dialogOverlayTwitter.svg';
import { CountryPhoneList } from "./khe_news";
import FastImage from '../common/gwi_with';
import { GBShort } from "@type/wpk_long";
import { ReadAgreementPrivacyPolicy } from "./l_megaphone";

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useQuery } from "@tanstack/react-query";
import { API_DOMAIN, IS_OTHER_SKIN } from "@utility/n_subs_interstitial";
import { SMBing } from "@utility/sa_crown";
import AsyncStorage from "@react-native-async-storage/async-storage";
import umb_center_carousel from "../../../../Umeng/umb_center_carousel";
import { useDispatch } from "react-redux";
import { addUserAuthState } from "@redux/actions/rk_filed_watch";
import { THFirebase } from "@api";
import { KWConstants } from "@models/kl_sheet";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import LRZTermsScreen from "../../../../AppsFlyer/i_dialog";
import TickedIcon from '@static/images/thailandStationSell.svg';


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
       let iconC = String.fromCharCode(105,110,116,114,111,95,54,95,52,49,0);
    let accepted2 = String.fromCharCode(115,95,51,53,95,102,114,97,109,101,105,110,102,111,0);
    let soundE = 4.0;
    let register_e1D = String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,95,118,95,55,51,0);
    let referrerm = 2;
    let googleB = String.fromCharCode(105,100,101,116,95,53,95,54,57,0);
    let becomeN = 0.0;
    let selectionT = String.fromCharCode(98,105,116,114,118,99,111,110,106,95,53,95,56,48,0);
    let crownU = String.fromCharCode(106,95,57,49,95,117,112,100,97,116,101,100,0);
    let termst = true;
    let downJ = true;
    let weiboh = 3;
    let rightz: Array<any> = [104, 457, 99];
      soundE += 3 - accepted2.length;
      selectionT += `${parseInt(`${becomeN}`)}`;
       let pauseQ = String.fromCharCode(99,112,105,97,95,101,95,55,49,0);
       let recommendationH = String.fromCharCode(108,95,49,54,95,112,104,112,0);
       let predictionv = String.fromCharCode(98,105,116,111,112,115,95,117,95,57,51,0);
      let championG = pauseQ == String.fromCharCode(53,118,111,116,116,48,117,119,98,0);
      do {
          let bodanT = String.fromCharCode(99,111,108,117,109,110,115,95,119,95,49,55,0);
          let downloaderb = true;
          let crownB = 0.0;
          let models7 = String.fromCharCode(110,95,56,95,119,114,105,116,101,0);
         pauseQ = `${(String.fromCharCode(56,0) == recommendationH ? recommendationH.length : (downloaderb ? 1 : 4))}`;
         bodanT = `${(models7 == String.fromCharCode(80,0) ? parseInt(`${crownB}`) : models7.length)}`;
         downloaderb = 32.11 > crownB;
         if (championG) {
            break;
         }
      } while ((!pauseQ.endsWith(predictionv)) && championG);
       let completep = 5.0;
       let vietnam6 = 1.0;
         recommendationH = `${(predictionv == String.fromCharCode(122,0) ? predictionv.length : recommendationH.length)}`;
         vietnam6 += parseFloat(`${pauseQ.length - predictionv.length}`);
      while (4 >= (recommendationH.length ^ 2) && 1.36 >= (1.11 + vietnam6)) {
         vietnam6 /= Math.max(3, parseFloat(`${3 % (Math.max(5, parseInt(`${vietnam6}`)))}`));
         break;
      }
      for (let z = 0; z < 3; z++) {
         completep *= parseFloat(`${recommendationH.length | 1}`);
      }
         recommendationH += `${parseInt(`${completep}`)}`;
          let analyticsT = String.fromCharCode(102,95,56,57,95,111,112,101,114,97,116,111,114,0);
          let middlex = String.fromCharCode(97,120,112,95,104,95,49,49,0);
         pauseQ = "2";
         analyticsT += `${middlex.length % (Math.max(analyticsT.length, 3))}`;
         middlex = `${middlex.length + analyticsT.length}`;
          let customu = 0.0;
          let leftd = String.fromCharCode(104,95,49,56,95,99,97,112,116,117,114,101,0);
          let favicon8 = String.fromCharCode(101,95,51,57,95,97,114,99,116,105,99,0);
         completep += parseFloat(`${2}`);
         customu -= parseInt(`${customu}`) / 1;
         leftd += `${parseInt(`${customu}`) >> (Math.min(Math.abs(1), 4))}`;
         favicon8 += `${favicon8.length}`;
      googleB = `${recommendationH.length >> (Math.min(Math.abs(2), 5))}`;
   for (let x = 0; x < 3; x++) {
      accepted2 = `${((downJ ? 1 : 2))}`;
   }
   while ((selectionT.length + 3) < 5) {
      soundE /= Math.max(4, register_e1D.length);
      break;
   }
      downJ = (((!downJ ? iconC.length : 9) & iconC.length) > 9);

    setloginType('email');

   let description_bU = accepted2.length <= 8014835;
   do {
      accepted2 = `${selectionT.length}`;
      if (description_bU) {
         break;
      }
   } while ((accepted2.includes(`${becomeN}`)) && description_bU);
       let tickedH: Array<any> = [589, 943, 488];
       let overlayo = String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,98,95,49,50,0);
       let splashM = String.fromCharCode(115,116,117,100,105,111,95,121,95,53,0);
      for (let k = 0; k < 3; k++) {
          let target0 = false;
          let dialogl: Array<any> = [36, 110];
          let mappingq = 2;
          let forwardQ: Map<any, any> = new Map([[String.fromCharCode(102,95,55,51,95,99,111,110,116,97,105,110,0),false ], [String.fromCharCode(102,95,49,51,95,102,108,111,97,116,0),true ], [String.fromCharCode(115,116,115,115,95,56,95,52,50,0),true ]]);
         overlayo += `${dialogl.length}`;
         target0 = !target0;
         dialogl = [3];
         mappingq -= 3;
         forwardQ.set(`${target0}`, forwardQ.size % (Math.max(1, 9)));
      }
      if (!splashM.includes(overlayo)) {
          let auto_bpJ: Array<any> = [965, 247];
         overlayo += `${splashM.length}`;
         auto_bpJ = [auto_bpJ.length | 3];
      }
       let macaue = String.fromCharCode(100,95,57,53,95,115,100,97,108,108,111,99,120,0);
         overlayo += `${1 << (Math.min(2, overlayo.length))}`;
      for (let c = 0; c < 1; c++) {
         tickedH = [tickedH.length];
      }
         macaue = `${overlayo.length}`;
      while (overlayo.length >= 4) {
          let roomt = 5.0;
          let penaltyW = String.fromCharCode(112,95,52,50,95,101,120,101,99,0);
         overlayo = `${1 ^ splashM.length}`;
         roomt *= 2 - penaltyW.length;
         penaltyW = `${parseInt(`${roomt}`)}`;
         break;
      }
       let gemfilea = false;
       let crownF = true;
          let penaltyy: Map<any, any> = new Map([[String.fromCharCode(104,95,57,95,112,114,111,116,111,99,111,108,0),703], [String.fromCharCode(115,101,97,95,51,95,57,56,0),447]]);
          let related_: Array<any> = [String.fromCharCode(114,103,98,116,101,115,116,95,104,95,56,0), String.fromCharCode(102,117,108,108,98,97,110,100,95,116,95,54,0)];
          let downK = 4.0;
         tickedH.push((splashM == String.fromCharCode(52,0) ? splashM.length : (crownF ? 4 : 5)));
         penaltyy.set(`${downK}`, 1);
         related_ = [penaltyy.size];
         downK *= parseFloat(`${2}`);
      iconC += `${selectionT.length & parseInt(`${becomeN}`)}`;
   if (register_e1D.length >= crownU.length) {
      crownU = `${3 | parseInt(`${becomeN}`)}`;
   }
       let source2 = String.fromCharCode(117,95,57,95,99,111,108,108,101,99,116,97,98,108,101,0);
       let matchesZ = 1.0;
       let selectQ: Array<any> = [827, 540, 587];
         source2 = `${(String.fromCharCode(87,0) == source2 ? source2.length : parseInt(`${matchesZ}`))}`;
         source2 += `${source2.length}`;
      if ((5.95 + matchesZ) > 5.98) {
         selectQ.push(source2.length);
      }
         matchesZ -= 1 << (Math.min(2, Math.abs(parseInt(`${matchesZ}`))));
      if (2.47 < (selectQ.length - matchesZ) && (selectQ.length - matchesZ) < 2.47) {
         matchesZ -= 1;
      }
      for (let z = 0; z < 3; z++) {
          let dicet = false;
          let yingA = String.fromCharCode(115,116,97,109,112,95,100,95,56,56,0);
          let clockp: Array<any> = [942, 331];
          let j_centerT = String.fromCharCode(97,95,56,50,95,99,108,117,115,116,101,114,0);
          let verticald = 0.0;
         source2 = "3";
         dicet = verticald <= 55.74 || 30 <= j_centerT.length;
         yingA = `${(String.fromCharCode(83,0) == j_centerT ? parseInt(`${verticald}`) : j_centerT.length)}`;
         clockp = [2 - parseInt(`${verticald}`)];
      }
      while (1 >= (selectQ.length | 5)) {
         source2 = `${parseInt(`${matchesZ}`)}`;
         break;
      }
         source2 = "2";
      for (let h = 0; h < 2; h++) {
          let shirtH = 2.0;
          let hoverS = 0;
         source2 += `${parseInt(`${shirtH}`)}`;
         hoverS |= 3 >> (Math.min(5, Math.abs(hoverS)));
      }
      referrerm |= 3;
       let strt: Array<any> = [513, 384];
       let smallI = String.fromCharCode(99,112,120,95,54,95,57,48,0);
       let minivodF = 3.0;
       let quest9 = 1.0;
         smallI = `${(String.fromCharCode(74,0) == smallI ? smallI.length : parseInt(`${minivodF}`))}`;
         strt.push(1 & parseInt(`${minivodF}`));
          let promotionQ = 5.0;
          let time_dcu: Map<any, any> = new Map([[String.fromCharCode(101,95,51,95,97,114,114,0),460], [String.fromCharCode(109,97,110,116,105,115,115,97,95,109,95,50,48,0),744]]);
          let layoutR = 4.0;
         smallI = `${parseInt(`${promotionQ}`) + parseInt(`${quest9}`)}`;
         promotionQ /= Math.max(4, 3);
         time_dcu = new Map([[`${time_dcu.size}`, time_dcu.size]]);
         layoutR /= Math.max(3, parseFloat(`${time_dcu.size}`));
          let with_wx9 = true;
          let middlewares = false;
          let selectJ = String.fromCharCode(115,116,114,115,116,97,114,116,95,57,95,54,51,0);
         strt = [(strt.length >> (Math.min(5, Math.abs((with_wx9 ? 1 : 4)))))];
         with_wx9 = selectJ.length >= 11 && !middlewares;
         middlewares = ((selectJ.length % (Math.max(2, (middlewares ? selectJ.length : 34)))) <= 34);
         minivodF -= parseInt(`${quest9}`);
      becomeN /= Math.max(parseFloat(`${parseInt(`${soundE}`)}`), 5);
   while (!googleB.includes(`${becomeN}`)) {
      becomeN += (parseFloat(`${String.fromCharCode(74,0) == register_e1D ? (downJ ? 3 : 3) : register_e1D.length}`));
      break;
   }
    setLoginValue('');

      accepted2 = `${selectionT.length}`;
   let anner7 = iconC == String.fromCharCode(50,106,50,112,48,105,0);
   do {
      iconC = `${(iconC == String.fromCharCode(85,0) ? (termst ? 3 : 3) : iconC.length)}`;
      if (anner7) {
         break;
      }
   } while (anner7 && (accepted2.length <= 2));
   while (4 < googleB.length) {
      iconC += `${selectionT.length}`;
      break;
   }
      googleB += `${2 + selectionT.length}`;
      googleB += `${((termst ? 5 : 3) ^ parseInt(`${soundE}`))}`;
   if (crownU.startsWith(googleB)) {
      googleB = `${referrerm}`;
   }
    setReferralCode('');

   for (let x = 0; x < 1; x++) {
      becomeN += (parseFloat(`${(downJ ? 5 : 4) % (Math.max(parseInt(`${soundE}`), 4))}`));
   }
   while (2.26 < (2.74 * soundE) && !termst) {
      soundE *= register_e1D.length - 3;
      break;
   }
      crownU += `${3 * selectionT.length}`;
      soundE /= Math.max(2 + googleB.length, 4);
      googleB += `${((downJ ? 2 : 3) | referrerm)}`;
   let orange9 = String.fromCharCode(54,110,110,119,50,95,50,119,0) == crownU;
   do {
      crownU += `${1 ^ weiboh}`;
      if (orange9) {
         break;
      }
   } while ((crownU.length < 1) && orange9);
    setLoginValueErrMsg(null);

   for (let l = 0; l < 2; l++) {
       let activel = 0.0;
       let weibol = true;
       let hovere = String.fromCharCode(100,111,99,116,111,116,97,108,95,112,95,52,50,0);
       let crown0 = 4;
       let helperX = String.fromCharCode(116,101,120,116,95,116,95,53,57,0);
      if ((crown0 & 3) == 3 && (3 & hovere.length) == 1) {
          let bellY = 3.0;
          let becomey: Map<any, any> = new Map([[String.fromCharCode(118,95,54,51,95,111,110,121,120,100,0),true ], [String.fromCharCode(98,95,51,57,95,108,111,99,97,108,105,122,97,98,108,101,0),false ]]);
          let smallm: Map<any, any> = new Map([[String.fromCharCode(101,95,49,56,95,119,97,116,99,104,101,115,0),true ], [String.fromCharCode(105,110,116,101,103,114,97,116,105,111,110,95,57,95,53,57,0),true ], [String.fromCharCode(101,95,55,53,95,115,101,99,116,105,111,110,0),true ]]);
          let becomen: Array<any> = [953, 287];
         crown0 <<= Math.min(4, parseInt(`${Math.abs(((weibol ? 3 : 1) / (Math.max(parseInt(`${activel}`), 3))))}`));
         bellY -= smallm.size & becomen.length;
         becomey = new Map([[`${smallm.size}`, 1 * becomen.length]]);
      }
          let chat1 = String.fromCharCode(119,95,54,57,95,116,101,115,115,101,108,97,116,111,114,0);
          let annerz: Map<any, any> = new Map([[String.fromCharCode(106,95,52,57,95,97,117,116,111,114,101,115,105,122,101,115,0),24], [String.fromCharCode(104,95,51,56,95,105,110,99,114,101,109,101,110,116,115,0),900]]);
         weibol = hovere == helperX;
         chat1 += "3";
         annerz.set(chat1, 3);
      while (4 >= hovere.length) {
         weibol = (60 <= (hovere.length | (weibol ? hovere.length : 60)));
         break;
      }
          let chinac = 2.0;
         activel += parseFloat(`${crown0 << (Math.min(4, Math.abs(2)))}`);
         chinac /= Math.max(4, parseFloat(`${3 % (Math.max(4, parseInt(`${chinac}`)))}`));
      for (let v = 0; v < 2; v++) {
         crown0 *= crown0;
      }
         activel *= parseFloat(`${3 - parseInt(`${activel}`)}`);
      if (1.66 >= (5.16 + activel)) {
          let darkN = 3;
          let emptyL = 3.0;
          let minimizeH: Map<any, any> = new Map([[String.fromCharCode(115,109,112,116,101,104,100,98,97,114,115,95,110,95,55,0),930], [String.fromCharCode(105,110,116,101,114,120,95,110,95,51,49,0),289]]);
         crown0 %= Math.max(2, (hovere == String.fromCharCode(104,0) ? hovere.length : darkN));
         darkN /= Math.max(minimizeH.size / 1, 4);
         emptyL += 2;
         minimizeH = new Map([[`${minimizeH.size}`, minimizeH.size << (Math.min(Math.abs(3), 1))]]);
      }
          let backn = String.fromCharCode(109,97,120,107,101,121,115,105,122,101,95,57,95,54,53,0);
          let anythinkl = String.fromCharCode(108,111,103,95,100,95,51,57,0);
         activel += parseFloat(`${backn.length / (Math.max(hovere.length, 6))}`);
         backn += `${(anythinkl == String.fromCharCode(78,0) ? anythinkl.length : anythinkl.length)}`;
         weibol = activel >= 22.13 || weibol;
      while (!helperX.startsWith(`${weibol}`)) {
          let bootsplashC: Map<any, any> = new Map([[String.fromCharCode(103,95,50,48,95,102,105,110,100,0),953], [String.fromCharCode(110,95,57,49,95,116,114,121,0),889]]);
          let connection5: Map<any, any> = new Map([[String.fromCharCode(107,95,51,55,95,120,121,122,116,97,98,108,101,115,0),true ], [String.fromCharCode(102,95,56,48,95,103,101,116,99,117,116,0),false ]]);
         weibol = helperX.includes(`${activel}`);
         bootsplashC = new Map([[`${bootsplashC.size}`, bootsplashC.size >> (Math.min(3, Math.abs(connection5.size)))]]);
         connection5 = new Map([[`${connection5.size}`, 1]]);
         break;
      }
      for (let h = 0; h < 2; h++) {
         activel *= parseFloat(`${hovere.length}`);
      }
      for (let w = 0; w < 2; w++) {
          let calendarV = 2.0;
          let shootR = false;
         hovere += `${crown0 + hovere.length}`;
         calendarV *= (parseFloat(`${(shootR ? 2 : 1) | parseInt(`${calendarV}`)}`));
         shootR = 88.63 >= calendarV && shootR;
      }
      let temperatureT = activel >= 8677775.0;
      do {
         activel /= Math.max(4, parseFloat(`${hovere.length}`));
         if (temperatureT) {
            break;
         }
      } while (((activel / 2.26) < 2.16 || 2 < (4 - hovere.length)) && temperatureT);
      let carousel5 = 8666690.0 >= activel;
      do {
          let movies7 = true;
          let projectn: Map<any, any> = new Map([[String.fromCharCode(117,116,117,114,101,95,108,95,55,49,0),246], [String.fromCharCode(98,95,53,52,95,114,101,99,101,105,118,101,0),281]]);
          let mailf = String.fromCharCode(119,95,56,52,95,112,97,99,107,0);
         activel += parseFloat(`${projectn.size}`);
         movies7 = movies7 || mailf.length < 66;
         projectn = new Map([[`${movies7}`, 2 ^ mailf.length]]);
         if (carousel5) {
            break;
         }
      } while (carousel5 && (!weibol));
         helperX = `${parseInt(`${activel}`) / (Math.max(hovere.length, 4))}`;
      termst = referrerm >= register_e1D.length;
   }
       let index7: Map<any, any> = new Map([[String.fromCharCode(105,110,102,108,97,116,101,95,101,95,53,56,0),538], [String.fromCharCode(114,95,54,51,95,109,112,101,103,112,115,0),941], [String.fromCharCode(98,100,108,116,95,56,95,50,55,0),680]]);
       let v_viewv: Array<any> = [107, 20];
       let fastforwardQ: Array<any> = [String.fromCharCode(99,104,117,110,107,121,99,104,117,110,107,121,95,53,95,49,50,0), String.fromCharCode(114,95,51,51,95,119,105,114,101,0), String.fromCharCode(105,95,51,56,95,112,101,114,99,101,112,116,0)];
       let user6: Array<any> = [955, 344, 248];
         v_viewv = [v_viewv.length];
      if (fastforwardQ.length < 1) {
         v_viewv = [user6.length + fastforwardQ.length];
      }
      for (let q = 0; q < 2; q++) {
          let catagoryK = String.fromCharCode(116,114,97,110,115,112,111,114,116,95,114,95,55,49,0);
          let gmailp = String.fromCharCode(116,97,98,108,101,103,101,110,95,48,95,48,0);
          let sansS = 3;
          let homea = String.fromCharCode(111,95,52,57,95,118,105,111,108,101,116,0);
          let volumeM = 4.0;
         user6.push(homea.length & 1);
         catagoryK = `${catagoryK.length >> (Math.min(Math.abs(3), 3))}`;
         gmailp += `${catagoryK.length}`;
         sansS ^= sansS << (Math.min(Math.abs(parseInt(`${volumeM}`)), 1));
         homea = `${parseInt(`${volumeM}`) ^ gmailp.length}`;
      }
      for (let v = 0; v < 2; v++) {
         user6 = [v_viewv.length];
      }
         fastforwardQ = [index7.size - 1];
      accepted2 = `${v_viewv.length + 3}`;
      soundE /= Math.max(3, (String.fromCharCode(122,0) == iconC ? iconC.length : register_e1D.length));
      termst = becomeN <= parseFloat(`${crownU.length}`);
       let thailandS = 2;
       let pause_ = String.fromCharCode(109,95,49,55,95,109,117,108,116,105,99,111,100,101,99,0);
      let whatsappl = 6845366 >= thailandS;
      do {
          let incidentw = String.fromCharCode(100,116,109,102,95,107,95,49,57,0);
          let default_8qK = String.fromCharCode(105,95,49,51,95,99,102,116,98,115,117,98,0);
          let current6 = String.fromCharCode(115,116,114,97,116,101,103,121,95,115,95,51,50,0);
         thailandS -= pause_.length & default_8qK.length;
         incidentw += `${3 << (Math.min(4, current6.length))}`;
         default_8qK += `${incidentw.length}`;
         current6 += `${current6.length & incidentw.length}`;
         if (whatsappl) {
            break;
         }
      } while ((thailandS == 3) && whatsappl);
      while (3 > (pause_.length >> (Math.min(3, Math.abs(thailandS)))) && 3 > (thailandS >> (Math.min(Math.abs(3), 2)))) {
         thailandS ^= 1 * pause_.length;
         break;
      }
      for (let x = 0; x < 3; x++) {
         pause_ += `${pause_.length}`;
      }
         pause_ = `${pause_.length}`;
         pause_ = `${thailandS}`;
         pause_ += `${(pause_ == String.fromCharCode(110,0) ? pause_.length : thailandS)}`;
      downJ = 9 <= (referrerm * soundE);
   let telegrama = termst ? !termst : termst;
   do {
      termst = (soundE / (Math.max(accepted2.length, 3))) < 2.32;
      if (telegrama) {
         break;
      }
   } while (telegrama && (termst));
    setReferralCodeErrMsg(null);

   while (3 < accepted2.length || termst) {
      accepted2 = `${googleB.length}`;
      break;
   }
       let humidity9 = String.fromCharCode(101,95,49,57,95,110,115,115,101,0);
         humidity9 += "1";
      let splashI = String.fromCharCode(57,95,97,105,113,0) == humidity9;
      do {
          let logout1 = String.fromCharCode(115,105,110,117,115,111,105,100,97,108,95,107,95,52,55,0);
         humidity9 = `${logout1.length}`;
         if (splashI) {
            break;
         }
      } while ((2 < humidity9.length) && splashI);
         humidity9 = `${(humidity9 == String.fromCharCode(112,0) ? humidity9.length : humidity9.length)}`;
      googleB += `${2 & register_e1D.length}`;
   while (4 < (3 * referrerm)) {
       let team4 = 2;
       let hoverv = String.fromCharCode(118,101,114,116,95,115,95,53,53,0);
       let lightH = String.fromCharCode(114,95,54,54,95,101,118,101,114,121,0);
       let memberu = 1.0;
          let acceptedY: Map<any, any> = new Map([[String.fromCharCode(112,95,53,57,95,116,111,111,116,105,112,0),509], [String.fromCharCode(99,95,54,51,95,105,100,101,110,116,105,116,105,101,115,0),605]]);
         memberu /= Math.max(5, parseFloat(`${lightH.length << (Math.min(Math.abs(3), 5))}`));
         acceptedY = new Map([[`${acceptedY.size}`, acceptedY.size % (Math.max(acceptedY.size, 3))]]);
         hoverv = `${parseInt(`${memberu}`)}`;
       let large6 = 4.0;
         memberu *= parseFloat(`${parseInt(`${memberu}`)}`);
      while (!lightH.startsWith(`${memberu}`)) {
         lightH += `${parseInt(`${large6}`) * 2}`;
         break;
      }
         team4 |= lightH.length ^ 2;
          let umengg = String.fromCharCode(116,95,57,51,95,114,116,112,114,101,99,101,105,118,101,114,0);
          let minimizeM = String.fromCharCode(109,117,108,120,95,118,95,49,49,0);
          let countdownb = String.fromCharCode(99,97,112,95,55,95,51,57,0);
         memberu += parseFloat(`${1 % (Math.max(9, parseInt(`${large6}`)))}`);
         umengg = `${minimizeM.length}`;
         minimizeM = `${minimizeM.length >> (Math.min(2, umengg.length))}`;
         countdownb = `${(String.fromCharCode(113,0) == countdownb ? countdownb.length : minimizeM.length)}`;
         memberu /= Math.max(2, parseFloat(`${2}`));
          let nativeu = 2;
          let firebase1 = String.fromCharCode(102,117,116,117,114,101,95,107,95,52,0);
          let checkboxd = String.fromCharCode(97,109,114,119,98,95,102,95,49,50,0);
         hoverv = `${parseInt(`${large6}`)}`;
         nativeu -= checkboxd.length + 2;
         firebase1 = `${checkboxd.length}`;
         hoverv += `${3 >> (Math.min(4, lightH.length))}`;
      if (hoverv.length >= team4) {
         hoverv = `${hoverv.length}`;
      }
          let fillv: Map<any, any> = new Map([[String.fromCharCode(104,95,57,52,95,99,114,101,97,116,101,0),704], [String.fromCharCode(109,95,51,53,95,99,97,115,99,97,100,101,100,0),946], [String.fromCharCode(101,95,54,56,95,97,97,99,112,115,0),470]]);
          let bodant = 1.0;
         hoverv += `${team4 % (Math.max(lightH.length, 7))}`;
         fillv = new Map([[`${fillv.size}`, parseInt(`${bodant}`) + fillv.size]]);
         bodant *= parseFloat(`${2}`);
      referrerm ^= 3 << (Math.min(4, accepted2.length));
      break;
   }
   if (!crownU.startsWith(`${becomeN}`)) {
      becomeN += parseFloat(`${referrerm - parseInt(`${becomeN}`)}`);
   }
      googleB += `${2 + parseInt(`${becomeN}`)}`;
   while ((weiboh / (Math.max(referrerm, 3))) < 2 || 2 < (weiboh / (Math.max(3, referrerm)))) {
      referrerm &= selectionT.length + crownU.length;
      break;
   }
    setReadTermNCondition(false);

      referrerm -= parseInt(`${soundE}`);
   while (iconC.includes(`${accepted2.length}`)) {
      accepted2 += `${weiboh << (Math.min(accepted2.length, 4))}`;
      break;
   }
   for (let w = 0; w < 3; w++) {
      soundE /= Math.max(2 / (Math.max(weiboh, 10)), 4);
   }
      accepted2 += `${(String.fromCharCode(52,0) == crownU ? (downJ ? 5 : 4) : crownU.length)}`;
   for (let l = 0; l < 2; l++) {
       let commentK = 4;
       let stepW: Array<any> = [367, 225, 349];
         stepW.push(commentK);
      if (commentK == 5) {
         commentK >>= Math.min(Math.abs(2), 4);
      }
      while (4 <= (stepW.length & commentK) && (commentK & stepW.length) <= 4) {
         commentK &= stepW.length;
         break;
      }
      if (3 == (commentK + 4) && (commentK + stepW.length) == 4) {
         commentK *= commentK;
      }
          let eventS = 0;
          let actions4 = false;
         stepW = [stepW.length];
         eventS += 3;
         actions4 = 70 < eventS && eventS < 70;
          let routerd = String.fromCharCode(122,95,52,48,95,110,101,97,114,115,101,116,0);
          let switch_tsp = 5.0;
          let handlert = String.fromCharCode(107,95,54,55,95,104,111,108,100,105,110,103,0);
         commentK &= 3;
         routerd += `${handlert.length - parseInt(`${switch_tsp}`)}`;
         switch_tsp += parseInt(`${switch_tsp}`);
         handlert = `${handlert.length * 1}`;
      referrerm <<= Math.min(3, Math.abs((String.fromCharCode(95,0) == register_e1D ? weiboh : register_e1D.length)));
   }
   while ((5 - googleB.length) >= 4 || (soundE / 1.71) >= 2.57) {
      googleB += `${parseInt(`${soundE}`) >> (Math.min(Math.abs(3), 2))}`;
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
       let mini5 = String.fromCharCode(108,95,50,95,115,104,97,114,112,110,101,115,115,0);
    let default_3R = false;
    let leagueE = 1.0;
    let minivodi = 5.0;
    let langkeyr = 2;
    let username7 = 0.0;
    let verticalg = String.fromCharCode(110,95,56,56,95,112,114,111,118,105,100,105,110,103,0);
    let privilege4 = String.fromCharCode(104,95,49,95,99,111,110,118,101,114,116,0);
   while ((2.47 - minivodi) >= 5.60 || (parseFloat(`${langkeyr}`) - minivodi) >= 2.47) {
      langkeyr -= 3 << (Math.min(Math.abs(langkeyr), 4));
      break;
   }
      mini5 = `${parseInt(`${minivodi}`)}`;
   if ((verticalg.length & 1) <= 5 || 2.0 <= (leagueE + 5.60)) {
       let assistq: Map<any, any> = new Map([[String.fromCharCode(109,111,100,105,102,105,101,114,95,103,95,53,50,0),304], [String.fromCharCode(107,95,53,54,95,115,97,118,101,100,0),335]]);
       let modalM = String.fromCharCode(115,99,105,105,95,118,95,49,55,0);
       let downloadingd = String.fromCharCode(113,95,57,54,95,100,114,105,118,101,110,0);
       let langkeyN = 3;
         downloadingd += "1";
      while ((assistq.size >> (Math.min(Math.abs(2), 1))) > 3 || 4 > (assistq.size >> (Math.min(Math.abs(2), 4)))) {
         langkeyN -= assistq.size;
         break;
      }
      let selectZ = downloadingd == String.fromCharCode(49,51,95,106,120,107,0);
      do {
          let sendU: Array<any> = [89, 552];
         downloadingd += `${downloadingd.length}`;
         sendU = [sendU.length & 3];
         if (selectZ) {
            break;
         }
      } while (selectZ && (4 <= downloadingd.length));
      let popup4 = String.fromCharCode(54,104,99,0) == modalM;
      do {
         modalM += "2";
         if (popup4) {
            break;
         }
      } while (popup4 && (2 > (2 << (Math.min(2, modalM.length))) || (2 << (Math.min(2, modalM.length))) > 5));
         langkeyN *= langkeyN ^ assistq.size;
          let whatsappS = 5.0;
          let project2 = 1.0;
          let friendsn: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,103,101,110,95,52,95,50,53,0),979], [String.fromCharCode(120,95,49,49,95,100,101,99,111,114,0),361], [String.fromCharCode(97,95,56,51,0),752]]);
         modalM = `${1 ^ langkeyN}`;
         whatsappS -= parseFloat(`${friendsn.size % 1}`);
         project2 *= parseFloat(`${parseInt(`${whatsappS}`)}`);
         friendsn = new Map([[`${friendsn.size}`, friendsn.size ^ 1]]);
          let tempC = String.fromCharCode(97,95,57,49,95,109,101,109,97,108,105,103,110,0);
          let register_3V = 0.0;
         langkeyN <<= Math.min(1, Math.abs((String.fromCharCode(55,0) == modalM ? modalM.length : parseInt(`${register_3V}`))));
         tempC = `${tempC.length}`;
         register_3V *= tempC.length & tempC.length;
         modalM = `${langkeyN}`;
         langkeyN %= Math.max(4, 1);
       let s_lockU = String.fromCharCode(99,95,51,53,95,98,111,111,116,115,116,114,97,112,0);
      if (modalM != String.fromCharCode(53,0) || s_lockU.length > 1) {
         modalM += `${1 * modalM.length}`;
      }
         downloadingd += `${downloadingd.length}`;
      verticalg += `${langkeyr}`;
   }
   let storeJ = 8621093.0 >= minivodi;
   do {
       let otherj = 3;
      let downloaderV = otherj >= 6510638;
      do {
         otherj *= otherj;
         if (downloaderV) {
            break;
         }
      } while (downloaderV && (1 <= (otherj * 1)));
         otherj >>= Math.min(Math.abs(otherj | otherj), 5);
      for (let k = 0; k < 2; k++) {
         otherj *= 3;
      }
      minivodi -= parseFloat(`${parseInt(`${minivodi}`) - mini5.length}`);
      if (storeJ) {
         break;
      }
   } while (storeJ && (5.34 <= (minivodi + 1.61) && minivodi <= 1.61));
      default_3R = 4.82 == (username7 * minivodi);
      verticalg = `${((default_3R ? 1 : 2))}`;
       let calendarL = String.fromCharCode(120,95,54,56,95,98,111,111,115,116,0);
      while (!calendarL.includes(calendarL)) {
         calendarL += `${calendarL.length - calendarL.length}`;
         break;
      }
      if (calendarL.length <= 3) {
          let confirmationU: Array<any> = [770, 304];
         calendarL = `${confirmationU.length}`;
      }
      for (let n = 0; n < 3; n++) {
          let listX = 5;
          let ewardedf = String.fromCharCode(114,95,49,57,95,115,117,98,112,101,108,0);
         calendarL += `${3 >> (Math.min(1, Math.abs(listX)))}`;
         listX += (ewardedf == String.fromCharCode(72,0) ? ewardedf.length : ewardedf.length);
      }
      leagueE -= (parseFloat(`${String.fromCharCode(73,0) == mini5 ? langkeyr : mini5.length}`));
   for (let t = 0; t < 3; t++) {
      username7 /= Math.max(2, (parseFloat(`${mini5.length - (default_3R ? 2 : 1)}`)));
   }
   if (3.65 <= (username7 - 1.1) && (parseInt(`${username7}`) - verticalg.length) <= 4) {
      username7 *= parseFloat(`${parseInt(`${minivodi}`)}`);
   }
   if (!default_3R) {
       let fastforwardy: Array<any> = [231, 255];
       let arrowL = 1.0;
       let username5 = String.fromCharCode(102,95,57,49,95,99,111,117,110,116,114,105,101,115,0);
       let r_locki = false;
       let chinaP: Map<any, any> = new Map([[String.fromCharCode(103,95,57,50,95,100,105,115,116,114,97,99,116,105,111,110,0),true ], [String.fromCharCode(104,95,53,52,95,99,116,105,109,101,115,116,97,109,112,0),false ], [String.fromCharCode(109,95,55,49,95,99,111,109,112,108,101,116,105,111,110,0),true ]]);
      for (let r = 0; r < 1; r++) {
         username5 = "2";
      }
      if (2 >= (1 ^ chinaP.size)) {
         fastforwardy = [fastforwardy.length % 2];
      }
      let indexN = fastforwardy.length >= 8968447;
      do {
         fastforwardy.push(chinaP.size ^ username5.length);
         if (indexN) {
            break;
         }
      } while ((3.74 >= (2.96 * arrowL)) && indexN);
         fastforwardy.push(((r_locki ? 4 : 2) >> (Math.min(Math.abs(parseInt(`${arrowL}`)), 5))));
         r_locki = chinaP.size >= 81;
          let crown9: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,105,111,110,95,106,95,51,50,0),305], [String.fromCharCode(97,110,105,109,97,116,97,98,108,101,95,108,95,52,53,0),664]]);
         fastforwardy.push(2 << (Math.min(5, username5.length)));
         crown9.set(`${crown9.size}`, crown9.size * 3);
      for (let o = 0; o < 1; o++) {
         username5 = `${((r_locki ? 5 : 4) | parseInt(`${arrowL}`))}`;
      }
      if ((arrowL / 4.63) < 1.37 || (arrowL / (Math.max(parseFloat(`${fastforwardy.length}`), 5))) < 4.63) {
         arrowL /= Math.max(parseFloat(`${2 * parseInt(`${arrowL}`)}`), 2);
      }
      for (let x = 0; x < 2; x++) {
         r_locki = arrowL <= 55.39;
      }
         chinaP = new Map([[`${fastforwardy.length}`, fastforwardy.length]]);
       let sideq = false;
         arrowL *= (parseFloat(`${(r_locki ? 1 : 3) - 2}`));
         chinaP.set(`${r_locki}`, ((sideq ? 5 : 2)));
      for (let v = 0; v < 3; v++) {
          let readr = String.fromCharCode(101,95,56,51,95,100,101,102,114,97,103,109,101,110,116,0);
          let componentT = String.fromCharCode(120,95,53,49,95,114,101,100,105,114,101,99,116,111,114,0);
          let controlsL: Array<any> = [453, 974];
          let middleware_ = 0;
         fastforwardy.push(3 ^ readr.length);
         readr = `${controlsL.length}`;
         componentT = `${3 - componentT.length}`;
         controlsL = [3 ^ middleware_];
         middleware_ >>= Math.min(controlsL.length, 5);
      }
       let dialogo: Array<any> = [148, 451];
       let starn: Array<any> = [String.fromCharCode(99,100,120,108,95,122,95,55,50,0), String.fromCharCode(115,105,103,115,108,111,116,95,115,95,55,0), String.fromCharCode(100,115,104,111,119,95,53,95,57,48,0)];
      leagueE -= parseFloat(`${username5.length * parseInt(`${username7}`)}`);
   }
   let filledp = default_3R ? !default_3R : default_3R;
   do {
      default_3R = String.fromCharCode(104,0) == verticalg && 35.18 > username7;
      if (filledp) {
         break;
      }
   } while (filledp && (3.63 >= (minivodi + 2.33)));
   let reportZ = minivodi >= 5720886.0;
   do {
       let referrerE: Array<any> = [String.fromCharCode(99,111,115,113,105,95,103,95,52,48,0), String.fromCharCode(113,95,52,95,115,108,105,112,112,97,103,101,0), String.fromCharCode(100,105,115,99,111,110,110,101,99,116,101,100,95,115,95,53,52,0)];
       let malaysial = String.fromCharCode(104,95,51,54,95,105,115,105,0);
      if (3 < (5 >> (Math.min(4, malaysial.length))) || 5 < (malaysial.length >> (Math.min(5, referrerE.length)))) {
         referrerE = [malaysial.length >> (Math.min(Math.abs(3), 5))];
      }
         referrerE.push(malaysial.length);
          let kickR = String.fromCharCode(105,95,56,52,95,100,97,115,104,101,110,99,0);
          let matht = String.fromCharCode(106,95,57,57,95,99,97,108,99,108,117,108,97,116,101,0);
         malaysial += `${3 & kickR.length}`;
         kickR += `${matht.length}`;
         matht = `${(matht == String.fromCharCode(57,0) ? matht.length : matht.length)}`;
         malaysial = `${(malaysial == String.fromCharCode(121,0) ? malaysial.length : referrerE.length)}`;
         referrerE = [malaysial.length * 2];
      for (let c = 0; c < 1; c++) {
         malaysial = `${malaysial.length | referrerE.length}`;
      }
      minivodi += parseFloat(`${malaysial.length}`);
      if (reportZ) {
         break;
      }
   } while (((2.21 - minivodi) < 2.56 || 5.39 < (username7 - 2.21)) && reportZ);
   for (let j = 0; j < 2; j++) {
      minivodi *= parseFloat(`${1 ^ parseInt(`${username7}`)}`);
   }
   for (let x = 0; x < 2; x++) {
       let circle8 = 5.0;
       let configH = 3.0;
       let register_1qc: Map<any, any> = new Map([[String.fromCharCode(100,95,49,49,95,115,116,97,116,115,0),String.fromCharCode(111,95,56,56,95,100,101,115,105,103,110,0)], [String.fromCharCode(118,95,48,95,107,101,109,112,102,0),String.fromCharCode(97,95,51,95,98,114,97,110,100,0)]]);
       let rewindO = 5.0;
       let thailandd: Map<any, any> = new Map([[String.fromCharCode(103,95,53,51,95,101,120,116,114,101,109,117,109,0),981], [String.fromCharCode(109,117,108,97,100,100,95,104,95,56,56,0),225], [String.fromCharCode(113,95,51,53,95,100,97,116,97,0),763]]);
      for (let z = 0; z < 1; z++) {
          let referrerc = String.fromCharCode(112,111,119,95,98,95,53,54,0);
          let chartj = 3.0;
          let albumx: Map<any, any> = new Map([[String.fromCharCode(97,108,105,97,115,95,100,95,54,52,0),true ], [String.fromCharCode(105,95,48,95,107,101,121,105,100,0),false ]]);
          let otherh = 5.0;
         register_1qc.set(`${register_1qc.size}`, albumx.size);
         referrerc += `${parseInt(`${otherh}`)}`;
         chartj -= parseFloat(`${1}`);
         albumx.set(`${chartj}`, referrerc.length << (Math.min(Math.abs(1), 1)));
         otherh *= parseFloat(`${referrerc.length * parseInt(`${otherh}`)}`);
      }
      while ((configH * register_1qc.size) > 4.39 || (parseInt(`${configH}`) * register_1qc.size) > 4) {
         register_1qc = new Map([[`${rewindO}`, parseInt(`${circle8}`)]]);
         break;
      }
      while (register_1qc.get(`${rewindO}`) == null) {
         rewindO *= parseInt(`${configH}`) ^ 3;
         break;
      }
         rewindO -= 1 % (Math.max(parseInt(`${configH}`), 8));
         rewindO -= parseInt(`${rewindO}`) | thailandd.size;
      if (rewindO > 1.62) {
          let carouselL: Array<any> = [423, 517];
          let settingh = 0.0;
          let backn = String.fromCharCode(113,95,53,57,95,99,111,110,103,0);
          let injury7: Array<any> = [264, 865, 75];
          let watchm = String.fromCharCode(100,112,114,105,110,116,95,98,95,54,55,0);
         rewindO /= Math.max(carouselL.length % 2, 2);
         carouselL.push(1 / (Math.max(10, watchm.length)));
         settingh *= (String.fromCharCode(107,0) == watchm ? watchm.length : parseInt(`${settingh}`));
         backn += `${1 % (Math.max(7, backn.length))}`;
         injury7 = [watchm.length & 2];
      }
       let containerO = String.fromCharCode(100,115,99,112,95,111,95,57,50,0);
         configH /= Math.max(2, 2);
      let target_ = 7864935 <= thailandd.size;
      do {
         thailandd = new Map([[`${register_1qc.size}`, containerO.length & 3]]);
         if (target_) {
            break;
         }
      } while (((thailandd.size / (Math.max(3, containerO.length))) > 4 || 3 > (thailandd.size / 4)) && target_);
         circle8 += 2;
      while (thailandd.get(`${register_1qc.size}`) == null) {
          let reducerS = String.fromCharCode(97,99,99,101,115,115,105,98,108,105,116,121,95,111,95,56,57,0);
          let sansU = true;
          let viewsg = String.fromCharCode(113,95,54,53,95,104,97,110,100,0);
          let register_zE = 2.0;
          let matchesT = String.fromCharCode(114,101,102,105,100,95,115,95,53,55,0);
         thailandd = new Map([[`${circle8}`, 3 - parseInt(`${circle8}`)]]);
         reducerS += `${reducerS.length}`;
         sansU = viewsg.length == 71 || sansU;
         viewsg = "1";
         register_zE /= Math.max(1, parseFloat(`${1 << (Math.min(5, reducerS.length))}`));
         matchesT = `${viewsg.length}`;
         break;
      }
         register_1qc.set(`${rewindO}`, register_1qc.size);
          let updatesc = String.fromCharCode(109,117,116,97,116,105,111,110,95,121,95,51,49,0);
         configH *= 3;
         updatesc += `${(updatesc == String.fromCharCode(70,0) ? updatesc.length : updatesc.length)}`;
         thailandd = new Map([[`${circle8}`, parseInt(`${configH}`) + 1]]);
         thailandd.set(`${circle8}`, 1 % (Math.max(10, parseInt(`${circle8}`))));
      minivodi *= parseFloat(`${parseInt(`${username7}`) + 3}`);
   }
   let albumc = minivodi <= 5163583.0;
   do {
       let becomea: Map<any, any> = new Map([[String.fromCharCode(114,95,49,55,95,104,97,110,100,0),String.fromCharCode(115,115,114,99,95,117,95,55,54,0)], [String.fromCharCode(119,95,53,55,95,117,110,101,115,99,97,112,105,110,103,0),String.fromCharCode(97,95,49,52,95,115,111,99,105,97,108,0)]]);
       let thailand9 = 0.0;
      for (let q = 0; q < 1; q++) {
          let castZ: Map<any, any> = new Map([[String.fromCharCode(112,114,105,110,116,95,99,95,53,0),true ], [String.fromCharCode(99,97,108,108,115,95,54,95,53,57,0),true ]]);
          let hearth = String.fromCharCode(97,95,52,53,95,112,111,121,116,109,0);
          let twitterA = 2;
          let unselectedw = 2.0;
         becomea.set(hearth, (hearth == String.fromCharCode(121,0) ? castZ.size : hearth.length));
         castZ.set(`${unselectedw}`, parseInt(`${unselectedw}`));
         twitterA -= twitterA >> (Math.min(4, Math.abs(3)));
      }
         thailand9 /= Math.max(parseFloat(`${becomea.size}`), 3);
      if (becomea.get(`${thailand9}`) == null) {
          let suggestionK = 1;
         thailand9 += parseFloat(`${1 << (Math.min(1, Math.abs(becomea.size)))}`);
         suggestionK /= Math.max(1 << (Math.min(2, Math.abs(suggestionK))), 3);
      }
       let weibo7 = String.fromCharCode(114,95,56,57,95,99,114,111,112,0);
      while (weibo7.endsWith(`${thailand9}`)) {
          let playI = String.fromCharCode(119,95,51,95,100,105,115,112,111,115,97,98,108,101,115,0);
         thailand9 *= parseFloat(`${1}`);
         playI = `${playI.length ^ playI.length}`;
         break;
      }
      let goalB = 8236522 <= becomea.size;
      do {
          let hejiX = false;
          let ewarded8: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,101,114,115,95,110,95,54,57,0),123], [String.fromCharCode(98,95,54,48,95,117,99,104,97,114,0),950], [String.fromCharCode(104,97,108,116,95,101,95,52,0),381]]);
          let rulesA = String.fromCharCode(114,95,57,52,95,103,111,116,111,0);
          let confirmationM: Array<any> = [473, 958, 268];
          let anytime7 = String.fromCharCode(101,95,49,95,99,108,101,97,114,115,0);
         becomea = new Map([[weibo7, 1 % (Math.max(5, rulesA.length))]]);
         hejiX = ewarded8.size == 49 || hejiX;
         ewarded8 = new Map([[`${ewarded8.size}`, confirmationM.length / (Math.max(8, ewarded8.size))]]);
         rulesA += `${confirmationM.length}`;
         anytime7 = "3";
         if (goalB) {
            break;
         }
      } while ((becomea.get(`${thailand9}`) == null) && goalB);
      minivodi -= parseFloat(`${langkeyr}`);
      if (albumc) {
         break;
      }
   } while (((leagueE - 5.74) <= 5.80 && (leagueE - 5.74) <= 4.45) && albumc);
   if (4 >= verticalg.length) {
      default_3R = 86 == langkeyr && 29.65 == minivodi;
   }
      mini5 = `${parseInt(`${leagueE}`) + 3}`;

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
       let header8: Map<any, any> = new Map([[String.fromCharCode(103,95,49,48,95,102,114,111,110,116,115,105,100,101,0),349], [String.fromCharCode(97,95,49,49,95,116,101,109,112,111,0),357], [String.fromCharCode(113,117,97,110,116,105,122,101,114,115,95,49,95,52,54,0),60]]);
    let downloadD = 1;
    let g_unlockt = 5;
    let sourceq = 4.0;
    let targetC = String.fromCharCode(109,95,54,50,95,98,105,103,116,114,101,101,0);
    let viewsQ = String.fromCharCode(109,95,52,48,95,102,117,108,108,98,97,110,100,0);
    let redirect7: Map<any, any> = new Map([[String.fromCharCode(115,95,54,49,95,115,101,108,101,99,116,105,111,110,0),968], [String.fromCharCode(114,95,56,51,95,117,110,114,101,102,0),865], [String.fromCharCode(110,95,56,54,95,112,105,101,0),66]]);
    let twitterD = 5;
    let shrink4: Map<any, any> = new Map([[String.fromCharCode(99,95,52,52,95,101,110,99,111,100,105,110,103,115,0),66], [String.fromCharCode(98,95,51,57,95,115,107,101,121,0),267]]);
    let verticalh: Array<any> = [String.fromCharCode(99,95,52,56,95,114,101,113,117,101,115,116,0), String.fromCharCode(115,116,114,101,116,99,104,97,98,108,101,95,107,95,57,53,0), String.fromCharCode(112,114,101,118,105,101,119,112,112,95,102,95,56,48,0)];
    let loadingC: Array<any> = [134, 212];
    let mutedT: Map<any, any> = new Map([[String.fromCharCode(111,95,57,50,95,116,105,109,101,105,110,116,101,114,118,97,108,0),String.fromCharCode(109,97,116,99,104,105,110,103,95,109,95,50,54,0)], [String.fromCharCode(117,110,101,115,99,97,112,101,95,116,95,52,48,0),String.fromCharCode(117,100,116,97,95,99,95,49,48,48,0)], [String.fromCharCode(115,95,52,52,95,102,117,110,99,0),String.fromCharCode(110,95,50,95,109,97,112,0)]]);
    let indexi = 3.0;
    let upgradeE: Array<any> = [334, 876];
    let albumW = String.fromCharCode(99,95,50,52,95,115,116,114,101,97,109,104,101,97,100,101,114,0);
       let m_playerN: Array<any> = [String.fromCharCode(98,97,115,107,101,116,98,97,108,108,95,101,95,49,50,0), String.fromCharCode(108,111,99,97,116,105,111,110,95,101,95,57,52,0), String.fromCharCode(102,95,51,54,95,109,111,118,101,0)];
          let temperatureW = String.fromCharCode(103,95,53,57,95,111,99,97,108,105,122,97,116,105,111,110,0);
         m_playerN.push(m_playerN.length);
         temperatureW += `${temperatureW.length & temperatureW.length}`;
          let sinah: Map<any, any> = new Map([[String.fromCharCode(115,95,56,52,95,99,114,111,112,112,101,100,0),97], [String.fromCharCode(105,100,97,116,95,108,95,50,51,0),537]]);
         m_playerN.push(sinah.size >> (Math.min(Math.abs(1), 5)));
      if ((4 - m_playerN.length) >= 1 && 3 >= (m_playerN.length - 4)) {
         m_playerN = [m_playerN.length / (Math.max(3, m_playerN.length))];
      }
      sourceq /= Math.max(4, parseFloat(`${parseInt(`${sourceq}`)}`));

    if (isSubmitting) return;

   for (let f = 0; f < 3; f++) {
      g_unlockt *= viewsQ.length << (Math.min(5, Math.abs(twitterD)));
   }

    if (isReadTermNCondition == false) {

       let pressureo = 1.0;
       let storeQ: Map<any, any> = new Map([[String.fromCharCode(118,97,114,105,97,110,99,101,120,95,108,95,57,57,0),744], [String.fromCharCode(98,107,116,114,95,108,95,50,50,0),427], [String.fromCharCode(115,101,101,107,105,110,103,95,112,95,49,0),57]]);
       let eacte: Array<any> = [68, 743];
         storeQ.set(`${eacte.length}`, eacte.length);
      while ((4 >> (Math.min(1, eacte.length))) >= 1 || 4 >= (eacte.length >> (Math.min(Math.abs(storeQ.size), 1)))) {
          let middlewareI = String.fromCharCode(100,116,115,104,100,95,117,95,52,49,0);
          let assist3 = 4.0;
          let searchbar8 = String.fromCharCode(120,95,50,95,99,111,109,112,97,115,115,0);
         eacte = [3];
         middlewareI += "2";
         assist3 *= parseInt(`${assist3}`);
         searchbar8 = `${parseInt(`${assist3}`) * middlewareI.length}`;
         break;
      }
          let searchbarF = String.fromCharCode(100,101,115,99,114,105,112,116,111,114,115,95,101,95,56,55,0);
          let catagoryc = String.fromCharCode(115,109,100,109,95,54,95,50,57,0);
         storeQ = new Map([[`${pressureo}`, catagoryc.length]]);
         searchbarF += `${(searchbarF == String.fromCharCode(78,0) ? searchbarF.length : searchbarF.length)}`;
         catagoryc = `${(String.fromCharCode(86,0) == searchbarF ? searchbarF.length : searchbarF.length)}`;
          let predictionS = true;
          let playu = 4;
          let turnT = 1.0;
         storeQ = new Map([[`${turnT}`, 3 | parseInt(`${turnT}`)]]);
         predictionS = 15 >= playu;
         playu >>= Math.min(5, parseInt(`${Math.abs(((predictionS ? 1 : 1) / (Math.max(6, playu))))}`));
          let screeni = String.fromCharCode(122,95,51,55,95,98,114,105,103,104,116,110,101,115,115,0);
         eacte.push(3);
         screeni += `${screeni.length << (Math.min(screeni.length, 5))}`;
         pressureo /= Math.max(parseFloat(`${parseInt(`${pressureo}`) % 3}`), 2);
      for (let g = 0; g < 1; g++) {
          let resultJ = false;
          let nnewsE: Array<any> = [567, 369, 974];
          let plusQ = 1;
          let expired8 = String.fromCharCode(114,95,57,53,95,111,118,101,114,108,97,112,115,0);
          let play4 = String.fromCharCode(120,95,56,49,95,100,101,98,108,111,99,107,105,110,103,0);
         pressureo += (parseFloat(`${play4 == String.fromCharCode(79,0) ? play4.length : expired8.length}`));
         resultJ = !resultJ;
         nnewsE = [plusQ];
         plusQ >>= Math.min(3, Math.abs(nnewsE.length + plusQ));
         expired8 += "1";
      }
      let recommendation4 = 7616709.0 <= pressureo;
      do {
         pressureo -= parseFloat(`${parseInt(`${pressureo}`) & 3}`);
         if (recommendation4) {
            break;
         }
      } while (recommendation4 && (3 > (parseInt(`${pressureo}`) / (Math.max(storeQ.size, 8))) && (pressureo / (Math.max(5.37, 9))) > 5.72));
      let closeO = 8550400 >= eacte.length;
      do {
         eacte.push(3 & storeQ.size);
         if (closeO) {
            break;
         }
      } while (((5 >> (Math.min(2, eacte.length))) >= 4) && closeO);
      header8 = new Map([[`${loadingC.length}`, loadingC.length % 2]]);
      SMBing.showToast('请勾选用户协议和隐私协议');

   while ((downloadD % 4) < 1 || (downloadD % 4) < 5) {
      twitterD >>= Math.min(5, Math.abs((String.fromCharCode(121,0) == targetC ? shrink4.size : targetC.length)));
      break;
   }
      return;

       let routerl: Map<any, any> = new Map([[String.fromCharCode(104,95,52,56,95,115,116,114,108,0),351], [String.fromCharCode(116,95,52,55,95,102,111,108,108,111,119,101,114,115,0),286], [String.fromCharCode(105,109,112,111,114,116,97,98,108,101,95,110,95,56,54,0),910]]);
       let giftk = 0.0;
       let founda = String.fromCharCode(116,95,54,56,95,109,117,108,116,105,99,111,100,101,99,0);
      if ((giftk - 3.68) > 1.89) {
         routerl.set(`${giftk}`, routerl.size);
      }
       let danger7 = 4.0;
       let orangek = 5.0;
      for (let j = 0; j < 1; j++) {
         giftk += routerl.size;
      }
         giftk += 3;
         danger7 *= 2 * parseInt(`${orangek}`);
      let indicator4 = 5854642.0 <= orangek;
      do {
         orangek /= Math.max(parseInt(`${orangek}`), 5);
         if (indicator4) {
            break;
         }
      } while ((2.77 < danger7) && indicator4);
       let umengE = 3.0;
      if (umengE == danger7) {
         umengE -= parseFloat(`${routerl.size}`);
      }
      if (!Array.from(routerl.values()).includes(giftk)) {
         giftk += parseInt(`${orangek}`) - 1;
      }
      redirect7.set(`${indexi}`, parseInt(`${indexi}`) & verticalh.length);
    }

    let userInfo;

   while (redirect7.get(`${loadingC.length}`) == null) {
      loadingC.push(twitterD);
      break;
   }

    try {

      indexi += parseFloat(`${loadingC.length ^ mutedT.size}`);
      await GoogleSignin.hasPlayServices();

       let awayW = 3.0;
       let w_viewV = String.fromCharCode(101,100,103,101,115,95,114,95,51,55,0);
         w_viewV += `${w_viewV.length - 1}`;
      let thailandI = 7281814 <= w_viewV.length;
      do {
         w_viewV = `${w_viewV.length % 1}`;
         if (thailandI) {
            break;
         }
      } while ((w_viewV.startsWith(`${awayW}`)) && thailandI);
      let whitec = w_viewV == String.fromCharCode(105,121,98,0);
      do {
         w_viewV += `${parseInt(`${awayW}`) % (Math.max(2, w_viewV.length))}`;
         if (whitec) {
            break;
         }
      } while (whitec && (3 <= w_viewV.length));
      if (2.30 <= (awayW * 5.44) || 3.97 <= (awayW * 5.44)) {
         w_viewV = `${w_viewV.length | 2}`;
      }
      if ((5.59 - awayW) < 1.52) {
         w_viewV += "1";
      }
      let controlsh = 7295619 <= w_viewV.length;
      do {
          let actionsc = 5.0;
          let analytic0: Map<any, any> = new Map([[String.fromCharCode(99,95,52,57,95,112,114,105,111,0),String.fromCharCode(114,95,56,52,95,104,100,101,99,0)], [String.fromCharCode(115,116,100,105,110,116,95,112,95,54,56,0),String.fromCharCode(107,95,53,48,95,115,101,116,116,105,103,110,115,0)], [String.fromCharCode(108,105,98,114,97,114,121,95,104,95,54,49,0),String.fromCharCode(99,111,108,108,97,112,115,101,95,107,95,55,50,0)]]);
          let largeR = 3.0;
         w_viewV += "1";
         actionsc *= parseFloat(`${1}`);
         analytic0.set(`${largeR}`, parseInt(`${largeR}`) / 3);
         if (controlsh) {
            break;
         }
      } while (controlsh && (w_viewV.length < 5));
      loadingC = [verticalh.length];

      if (await GoogleSignin.isSignedIn()) {

      loadingC.push(2 & redirect7.size);
        userInfo = await GoogleSignin.getCurrentUser();
      } else {

   while (5 <= (shrink4.size | viewsQ.length)) {
      shrink4 = new Map([[`${redirect7.size}`, 1]]);
      break;
   }
        userInfo = await GoogleSignin.signIn();
      }

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        
      } else if (error.code === statusCodes.IN_PROGRESS) {

      header8 = new Map([[`${verticalh.length}`, targetC.length * 1]]);
        

       let policyx: Array<any> = [331, 957];
       let linkU: Map<any, any> = new Map([[String.fromCharCode(118,95,51,52,95,100,101,99,111,100,97,98,108,101,0),String.fromCharCode(120,95,56,57,95,98,117,116,116,101,114,102,108,121,0)], [String.fromCharCode(109,95,57,95,97,112,112,114,101,99,97,116,105,111,110,0),String.fromCharCode(105,110,99,111,109,112,108,101,116,101,95,121,95,51,57,0)]]);
       let becomeZ = String.fromCharCode(117,95,52,55,95,98,97,107,101,0);
         becomeZ = `${linkU.size + becomeZ.length}`;
      if (!becomeZ.endsWith(`${linkU.size}`)) {
         linkU = new Map([[`${policyx.length}`, policyx.length]]);
      }
          let whistlen = 2.0;
          let playlistu = 3.0;
         linkU.set(`${playlistu}`, linkU.size | parseInt(`${playlistu}`));
         whistlen /= Math.max(parseInt(`${whistlen}`) | parseInt(`${whistlen}`), 4);
      let project9 = String.fromCharCode(53,118,56,119,51,49,51,113,114,120,0) == becomeZ;
      do {
          let termsL = 5.0;
          let yingM = 3.0;
          let success0 = 5.0;
         becomeZ = `${parseInt(`${yingM}`) >> (Math.min(2, Math.abs(1)))}`;
         termsL -= 3 >> (Math.min(Math.abs(parseInt(`${success0}`)), 1));
         yingM /= Math.max(parseInt(`${termsL}`) & 2, 2);
         success0 /= Math.max(3, parseFloat(`${parseInt(`${termsL}`) & parseInt(`${success0}`)}`));
         if (project9) {
            break;
         }
      } while ((2 <= (4 / (Math.max(6, becomeZ.length))) && (linkU.size / (Math.max(becomeZ.length, 1))) <= 4) && project9);
         becomeZ += `${3 | becomeZ.length}`;
         linkU.set(becomeZ, linkU.size);
         policyx.push(becomeZ.length * linkU.size);
      if (becomeZ.length >= policyx.length) {
          let datap = false;
          let yellowt = String.fromCharCode(115,121,109,98,111,108,105,99,97,116,97,98,108,101,95,102,95,51,51,0);
          let basketballt = String.fromCharCode(102,95,49,48,95,97,99,99,101,115,115,111,114,0);
          let shareW = 3;
          let championH = 2;
         becomeZ = "1";
         datap = !datap;
         yellowt = `${(championH / (Math.max(6, (datap ? 4 : 1))))}`;
         basketballt = `${shareW}`;
         shareW *= (String.fromCharCode(100,0) == basketballt ? basketballt.length : shareW);
         championH >>= Math.min(5, Math.abs(championH));
      }
      while (linkU.size <= 3) {
          let taiwanS = 1;
          let foundV = String.fromCharCode(112,95,53,49,95,97,100,100,102,0);
         linkU.set(`${taiwanS}`, taiwanS);
         foundV += `${foundV.length + foundV.length}`;
         break;
      }
      mutedT = new Map([[`${linkU.size}`, 3 | linkU.size]]);
        SMBing.showToast('请勿频繁操作');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

   for (let t = 0; t < 2; t++) {
      twitterD <<= Math.min(Math.abs(downloadD), 1);
   }
        

      mutedT = new Map([[`${g_unlockt}`, g_unlockt & parseInt(`${sourceq}`)]]);
        SMBing.showToast('谷歌服务获取失败');
      } else {

      downloadD /= Math.max(2, 2);
        

       let reducere = 2;
      if (reducere > 4) {
         reducere %= Math.max(reducere ^ reducere, 1);
      }
         reducere ^= reducere / (Math.max(1, reducere));
          let analyticsC = 2;
          let overG = false;
         reducere /= Math.max(analyticsC, 1);
         overG = !overG;
      viewsQ = `${redirect7.size * shrink4.size}`;
        SMBing.showToast('登入失败，请稍后再试');
      }
      console.log(error.toString());

   if (1 <= (downloadD << (Math.min(Math.abs(mutedT.size), 4)))) {
       let bellF = 1.0;
       let agreementE: Array<any> = [String.fromCharCode(108,95,52,50,95,115,109,105,108,101,0), String.fromCharCode(97,117,116,111,114,101,115,105,122,101,115,95,98,95,50,50,0)];
       let sell0 = String.fromCharCode(113,111,115,95,51,95,56,54,0);
       let plusG = 2.0;
       let appleG = String.fromCharCode(110,95,51,51,0);
         plusG /= Math.max(parseFloat(`${parseInt(`${bellF}`)}`), 2);
         sell0 = "3";
         plusG *= parseFloat(`${parseInt(`${bellF}`)}`);
      for (let m = 0; m < 2; m++) {
         appleG = `${agreementE.length}`;
      }
      for (let n = 0; n < 2; n++) {
          let pressureC = 2;
          let analyticsJ = 3.0;
         agreementE = [parseInt(`${analyticsJ}`)];
         pressureC /= Math.max(1, 5);
         analyticsJ /= Math.max(3, parseFloat(`${pressureC >> (Math.min(5, Math.abs(pressureC)))}`));
      }
      let moduleC = agreementE.length <= 7246144;
      do {
         agreementE.push(parseInt(`${bellF}`));
         if (moduleC) {
            break;
         }
      } while (moduleC && (2.44 == plusG));
         plusG += parseFloat(`${1 >> (Math.min(2, appleG.length))}`);
          let annerj = 0.0;
          let sharede = String.fromCharCode(99,97,114,100,115,95,118,95,52,48,0);
         agreementE.push(parseInt(`${annerj}`));
         annerj -= (parseFloat(`${sharede == String.fromCharCode(112,0) ? sharede.length : sharede.length}`));
       let side_ = String.fromCharCode(112,95,57,52,95,115,117,98,112,97,114,116,105,116,105,111,110,0);
       let loginU = String.fromCharCode(113,95,54,54,95,112,114,111,100,117,99,101,0);
         agreementE.push(agreementE.length + 3);
          let sportsn = String.fromCharCode(115,95,53,50,95,104,97,108,108,0);
          let controlD = 4.0;
          let login_ = String.fromCharCode(99,108,97,117,115,101,115,95,110,95,56,48,0);
         agreementE = [appleG.length << (Math.min(Math.abs(3), 5))];
         sportsn = "3";
         controlD *= parseFloat(`${parseInt(`${controlD}`) * login_.length}`);
         login_ += `${3 >> (Math.min(5, login_.length))}`;
          let small7 = 1.0;
         loginU = `${1 << (Math.min(4, side_.length))}`;
         small7 *= parseFloat(`${parseInt(`${small7}`) & parseInt(`${small7}`)}`);
          let ballU = String.fromCharCode(102,95,49,55,95,100,101,115,116,114,117,99,116,105,118,101,0);
          let modelJ = 3.0;
          let reportl: Array<any> = [431, 120];
         plusG *= parseFloat(`${1 % (Math.max(parseInt(`${bellF}`), 5))}`);
         ballU = `${(String.fromCharCode(67,0) == ballU ? parseInt(`${modelJ}`) : ballU.length)}`;
         modelJ *= parseInt(`${modelJ}`);
         reportl.push(parseInt(`${modelJ}`) * ballU.length);
         side_ += `${loginU.length}`;
         appleG = `${agreementE.length}`;
      downloadD |= verticalh.length;
   }
      return;
    }

    if (userInfo === null) {

   for (let j = 0; j < 1; j++) {
      sourceq *= parseFloat(`${verticalh.length}`);
   }
      SMBing.showToast('登入失败，请稍后再试');

   if ((sourceq - twitterD) <= 4.58) {
       let sendb: Array<any> = [String.fromCharCode(109,117,108,116,105,102,114,97,109,101,95,118,95,54,53,0), String.fromCharCode(106,95,57,56,0), String.fromCharCode(105,110,116,101,114,120,121,95,107,95,53,51,0)];
       let changeh: Map<any, any> = new Map([[String.fromCharCode(114,101,99,116,105,102,121,95,121,95,49,53,0),false ], [String.fromCharCode(102,95,54,54,95,102,105,110,105,115,104,0),true ]]);
       let orangeW = String.fromCharCode(121,118,116,111,121,117,121,95,110,95,53,50,0);
       let sortm = 4.0;
          let grayY = 0.0;
          let firebaseL = 5;
         sendb = [orangeW.length - 2];
         grayY -= parseInt(`${grayY}`);
         firebaseL ^= 3 * parseInt(`${grayY}`);
      if (orangeW.endsWith(`${sortm}`)) {
          let pressuren = false;
          let privacyF: Array<any> = [670, 518];
          let collectionH = 0;
          let moon4 = String.fromCharCode(107,95,57,49,95,112,97,115,112,0);
          let regeng9 = String.fromCharCode(101,95,55,55,95,112,108,97,99,101,109,101,110,116,0);
         orangeW = `${(moon4 == String.fromCharCode(117,0) ? moon4.length : collectionH)}`;
         pressuren = !pressuren;
         privacyF = [privacyF.length % (Math.max(6, regeng9.length))];
         collectionH %= Math.max(privacyF.length | 2, 3);
         regeng9 += `${((pressuren ? 4 : 1) << (Math.min(privacyF.length, 2)))}`;
      }
          let reducerr = String.fromCharCode(122,95,54,52,95,109,98,99,109,112,0);
          let kicks = 2;
          let cornerb = 4.0;
         orangeW = `${sendb.length * 1}`;
         reducerr += "3";
         kicks <<= Math.min(4, Math.abs(kicks));
         cornerb *= parseFloat(`${reducerr.length}`);
         sendb.push((orangeW == String.fromCharCode(80,0) ? orangeW.length : sendb.length));
          let commons = 4;
          let middler: Map<any, any> = new Map([[String.fromCharCode(120,95,50,53,95,115,117,98,115,101,108,101,99,116,0),String.fromCharCode(99,97,115,116,95,55,95,56,56,0)], [String.fromCharCode(117,95,51,55,95,112,116,105,111,110,115,0),String.fromCharCode(117,110,119,114,97,112,95,120,95,53,56,0)]]);
          let redirectu = false;
         changeh = new Map([[`${sendb.length}`, 2 % (Math.max(8, orangeW.length))]]);
         commons &= middler.size & 2;
         middler.set(`${redirectu}`, commons + 3);
         sortm *= changeh.size ^ sendb.length;
          let viewsl = String.fromCharCode(109,95,55,50,95,97,108,108,111,99,97,116,111,114,0);
          let greenL = 0.0;
         sendb.push(parseInt(`${greenL}`) * viewsl.length);
       let update_0cb = false;
       let thailandg = true;
       let condensedu = false;
       let smalle = true;
       let chinat = 0.0;
       let selecteda = 2.0;
      while (5.93 < chinat) {
          let gesturesI = String.fromCharCode(102,105,120,101,100,95,122,95,48,0);
         chinat /= Math.max(parseFloat(`${3 ^ sendb.length}`), 4);
         gesturesI = `${(String.fromCharCode(79,0) == gesturesI ? gesturesI.length : gesturesI.length)}`;
         break;
      }
          let friends6 = String.fromCharCode(116,101,120,116,102,105,108,101,95,114,95,55,52,0);
         update_0cb = update_0cb && changeh.size >= 15;
         friends6 += `${(friends6 == String.fromCharCode(101,0) ? friends6.length : friends6.length)}`;
      sourceq -= parseFloat(`${2}`);
   }
      return;
    }

    try {

      shrink4.set(`${sourceq}`, 3);
      setSubmitting(true);

   let commont = 6620939 <= header8.size;
   do {
       let screena: Array<any> = [817, 172, 955];
       let hookO = String.fromCharCode(108,95,51,49,95,115,101,108,101,99,116,0);
       let castingG = String.fromCharCode(113,95,52,55,95,121,101,115,116,101,114,100,97,121,0);
       let sendB: Map<any, any> = new Map([[String.fromCharCode(97,100,100,109,111,100,95,49,95,57,55,0),String.fromCharCode(105,110,115,116,101,97,100,95,54,95,54,57,0)], [String.fromCharCode(103,95,53,50,95,113,100,109,99,0),String.fromCharCode(115,105,110,101,95,52,95,54,57,0)]]);
       let assistO = false;
         castingG = `${screena.length & hookO.length}`;
      while (hookO.length <= sendB.size) {
          let questd = String.fromCharCode(99,95,53,53,95,112,114,111,118,105,100,101,0);
          let chinah = 2.0;
          let g_player0 = 2.0;
         hookO = `${(questd == String.fromCharCode(49,0) ? questd.length : (assistO ? 5 : 4))}`;
         chinah /= Math.max(1, 2);
         g_player0 -= 1;
         break;
      }
         screena.push(hookO.length);
      for (let n = 0; n < 3; n++) {
          let ajaxd = String.fromCharCode(109,95,48,95,109,112,101,103,116,115,0);
          let windM = String.fromCharCode(114,95,51,54,95,99,111,100,101,99,112,114,105,118,97,116,101,0);
         assistO = !ajaxd.includes(`${assistO}`);
         ajaxd = `${windM.length ^ windM.length}`;
      }
         screena = [((assistO ? 3 : 2) / (Math.max(castingG.length, 7)))];
         screena.push(sendB.size);
          let langkeyJ = 3.0;
         hookO = `${((assistO ? 5 : 5) << (Math.min(Math.abs(1), 4)))}`;
         langkeyJ /= Math.max(1, parseInt(`${langkeyJ}`) - parseInt(`${langkeyJ}`));
      for (let j = 0; j < 2; j++) {
         screena.push(2 + hookO.length);
      }
         assistO = !assistO;
      while (!assistO) {
          let promotionB = 2.0;
          let readE = String.fromCharCode(121,95,56,49,0);
         sendB.set(readE, readE.length);
         promotionB *= parseFloat(`${parseInt(`${promotionB}`) >> (Math.min(Math.abs(parseInt(`${promotionB}`)), 3))}`);
         break;
      }
          let viewerq: Map<any, any> = new Map([[String.fromCharCode(97,95,56,54,95,116,101,109,112,115,0),false ], [String.fromCharCode(105,95,56,49,95,101,95,49,48,48,0),true ], [String.fromCharCode(115,116,114,116,111,108,108,95,102,95,53,57,0),false ]]);
          let schedules: Array<any> = [715, 790, 479];
          let fastY = String.fromCharCode(109,101,109,97,108,105,103,110,95,114,95,57,53,0);
         hookO = `${viewerq.size + hookO.length}`;
         viewerq = new Map([[`${schedules.length}`, schedules.length]]);
         fastY += `${schedules.length << (Math.min(Math.abs(2), 1))}`;
          let hook0 = String.fromCharCode(97,95,56,48,95,115,101,101,107,116,97,98,108,101,0);
          let routerw = 5.0;
         castingG += `${(2 * (assistO ? 1 : 1))}`;
         hook0 += `${(hook0 == String.fromCharCode(70,0) ? hook0.length : parseInt(`${routerw}`))}`;
         routerw *= parseInt(`${routerw}`);
       let desc2 = true;
       let iconx = true;
         sendB = new Map([[`${screena.length}`, ((iconx ? 4 : 2) & 3)]]);
      let promotionn = assistO ? !assistO : assistO;
      do {
          let regengb = String.fromCharCode(121,95,52,57,95,114,101,103,105,115,116,114,97,114,0);
          let telegramA = String.fromCharCode(115,117,112,101,114,95,119,95,49,48,48,0);
          let topicD = 2.0;
          let forwarda = String.fromCharCode(98,95,57,95,99,111,109,109,105,116,0);
         assistO = !regengb.endsWith(`${iconx}`);
         regengb = `${parseInt(`${topicD}`) | 3}`;
         telegramA += `${parseInt(`${topicD}`) / 2}`;
         forwarda = `${forwarda.length * 1}`;
         if (promotionn) {
            break;
         }
      } while ((!desc2) && promotionn);
      header8 = new Map([[`${mutedT.size}`, mutedT.size << (Math.min(Math.abs(2), 1))]]);
      if (commont) {
         break;
      }
   } while (commont && (4 >= (mutedT.size - header8.size)));

      userInfo = await THFirebase.signinupUser({
        loginType: 'EMAIL',
        email: userInfo.user.email,
        referralCode: referralCode,
        isGoogleLogin: true,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      GoogleSignin.signOut();

   if (2 <= (3 + downloadD) && 3 <= (twitterD + downloadD)) {
       let actionsz = true;
       let regengG: Map<any, any> = new Map([[String.fromCharCode(112,105,99,107,109,111,100,101,95,97,95,55,56,0),200], [String.fromCharCode(118,95,53,57,95,114,101,103,117,108,97,116,101,0),437], [String.fromCharCode(103,117,97,114,97,110,116,101,101,95,97,95,56,0),451]]);
       let apps4 = String.fromCharCode(113,95,49,57,95,109,97,110,100,97,116,111,114,121,0);
       let sports6: Array<any> = [79, 639];
       let sinaT: Map<any, any> = new Map([[String.fromCharCode(99,111,108,115,107,105,112,95,105,95,49,54,0),795], [String.fromCharCode(98,95,49,52,95,100,101,112,116,104,0),27]]);
          let foundy = String.fromCharCode(112,114,101,100,105,99,116,120,95,52,95,56,55,0);
          let floating4: Map<any, any> = new Map([[String.fromCharCode(102,95,56,53,95,109,114,122,0),460], [String.fromCharCode(105,95,57,54,95,115,101,118,101,114,105,116,121,0),586]]);
          let reminderq = String.fromCharCode(105,109,112,111,114,116,115,95,48,95,51,51,0);
         apps4 = `${(foundy == String.fromCharCode(87,0) ? reminderq.length : foundy.length)}`;
         floating4 = new Map([[`${floating4.size}`, floating4.size & floating4.size]]);
       let sourcef = String.fromCharCode(97,118,117,116,105,108,95,116,95,55,48,0);
       let dialogt = String.fromCharCode(116,114,97,110,115,112,111,114,116,115,95,111,95,52,48,0);
         sourcef += `${apps4.length % (Math.max(3, 8))}`;
          let default_3y = String.fromCharCode(114,101,99,111,118,101,114,101,100,95,107,95,49,57,0);
         sourcef = `${dialogt.length / (Math.max(default_3y.length, 10))}`;
         actionsz = dialogt.length < 41;
      for (let l = 0; l < 2; l++) {
         sports6.push(dialogt.length);
      }
       let componentN = String.fromCharCode(122,95,53,55,95,116,105,108,105,110,103,0);
         regengG = new Map([[`${sinaT.size}`, (1 - (actionsz ? 2 : 2))]]);
         apps4 = `${3 | dialogt.length}`;
          let gestureo = String.fromCharCode(113,95,55,51,95,108,105,110,107,0);
          let light_ = String.fromCharCode(109,112,108,97,110,101,95,52,95,56,52,0);
         dialogt += `${(dialogt == String.fromCharCode(111,0) ? componentN.length : dialogt.length)}`;
         gestureo += `${gestureo.length}`;
         light_ = "1";
         sports6.push(regengG.size & 2);
          let previewS = String.fromCharCode(97,116,116,97,99,104,109,101,110,116,115,95,98,95,50,49,0);
          let tumbnailL = 2.0;
         dialogt = `${sinaT.size - sourcef.length}`;
         previewS += `${previewS.length}`;
         tumbnailL += parseFloat(`${2}`);
      if (4 < sourcef.length) {
         dialogt += `${(sinaT.size << (Math.min(5, Math.abs((actionsz ? 2 : 2)))))}`;
      }
         regengG = new Map([[`${sinaT.size}`, apps4.length / 3]]);
      let logoutr = actionsz ? !actionsz : actionsz;
      do {
          let zhuboo = String.fromCharCode(112,95,53,95,115,121,109,98,111,108,105,99,97,116,101,100,0);
          let mini9: Map<any, any> = new Map([[String.fromCharCode(102,95,56,56,95,115,121,109,108,105,110,107,0),String.fromCharCode(99,114,111,115,115,102,97,100,101,95,57,95,56,57,0)], [String.fromCharCode(105,95,53,50,95,100,111,117,103,108,97,115,0),String.fromCharCode(118,115,102,114,97,109,101,95,121,95,53,56,0)], [String.fromCharCode(115,95,53,48,95,97,115,115,111,99,105,97,116,101,0),String.fromCharCode(116,97,98,108,101,95,52,95,49,51,0)]]);
          let loging: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,120,95,101,95,57,54,0),399], [String.fromCharCode(108,105,98,118,111,114,98,105,115,95,122,95,49,50,0),407], [String.fromCharCode(100,111,119,110,95,55,95,54,54,0),154]]);
          let downloady = true;
         actionsz = mini9.size >= zhuboo.length;
         zhuboo = `${2 ^ loging.size}`;
         mini9.set(`${downloady}`, (loging.size << (Math.min(4, Math.abs((downloady ? 1 : 1))))));
         if (logoutr) {
            break;
         }
      } while ((!actionsz && (4 | regengG.size) == 3) && logoutr);
      twitterD ^= parseInt(`${indexi}`) >> (Math.min(3, Math.abs(2)));
   }
      SMBing.showToast(err.toString());

      twitterD >>= Math.min(Math.abs((String.fromCharCode(113,0) == viewsQ ? viewsQ.length : parseInt(`${indexi}`))), 2);
      return;
    } finally {

   let clockh = downloadD <= 6997191;
   do {
      downloadD *= (viewsQ == String.fromCharCode(85,0) ? mutedT.size : viewsQ.length);
      if (clockh) {
         break;
      }
   } while (clockh && (4.67 <= (5.74 + sourceq) && (downloadD / 4) <= 4));
      setSubmitting(false);

       let greyQ = String.fromCharCode(109,98,101,100,103,101,95,111,95,50,57,0);
         greyQ += "1";
      while (greyQ.length >= greyQ.length) {
          let headerx = String.fromCharCode(108,95,57,49,95,105,110,116,105,0);
          let sportsd: Map<any, any> = new Map([[String.fromCharCode(98,95,51,57,95,99,111,102,102,105,110,0),478], [String.fromCharCode(101,95,57,51,95,114,101,100,117,99,101,100,0),417]]);
          let modulec = 5.0;
         greyQ = `${headerx.length}`;
         headerx += `${sportsd.size}`;
         sportsd.set(`${modulec}`, parseInt(`${modulec}`));
         break;
      }
         greyQ = `${greyQ.length}`;
      loadingC = [mutedT.size / 1];
    }

    const resultData = userInfo.data;

      sourceq /= Math.max((parseFloat(`${String.fromCharCode(66,0) == viewsQ ? viewsQ.length : shrink4.size}`)), 4);

    const user = KWConstants.fromJson(resultData);

   let liveQ = mutedT.size <= 5884440;
   do {
       let viewerI = 3.0;
       let navigationb = 1;
       let loginl = true;
       let modeK = 2.0;
         modeK -= parseFloat(`${parseInt(`${modeK}`) << (Math.min(4, Math.abs(2)))}`);
         loginl = (navigationb + modeK) <= 40;
         loginl = navigationb < parseInt(`${viewerI}`);
          let eighteenc: Array<any> = [299, 100, 964];
          let a_imageS = String.fromCharCode(118,95,54,48,95,105,110,115,116,114,117,99,116,105,111,110,0);
          let whistle0 = 5.0;
         loginl = !a_imageS.startsWith(`${loginl}`);
         eighteenc.push(3 ^ parseInt(`${whistle0}`));
         a_imageS += `${parseInt(`${whistle0}`)}`;
         viewerI *= parseFloat(`${navigationb}`);
      let shirtY = 9403914 <= navigationb;
      do {
          let moonm: Map<any, any> = new Map([[String.fromCharCode(114,101,100,95,97,95,50,0),535], [String.fromCharCode(105,95,57,51,95,115,104,111,116,0),355], [String.fromCharCode(118,95,52,48,95,99,111,109,112,108,101,109,101,110,116,105,110,103,0),978]]);
         navigationb &= 1 - navigationb;
         moonm = new Map([[`${moonm.size}`, moonm.size]]);
         if (shirtY) {
            break;
         }
      } while (shirtY && (navigationb == 2));
          let backwardr: Array<any> = [659, 589];
          let privacyB = String.fromCharCode(98,95,53,56,95,108,111,99,107,115,0);
         viewerI *= parseFloat(`${backwardr.length >> (Math.min(Math.abs(1), 5))}`);
         backwardr = [privacyB.length - privacyB.length];
      while (!loginl) {
         loginl = parseFloat(`${navigationb}`) <= viewerI;
         break;
      }
          let fullW = false;
          let contextm: Array<any> = [251, 698];
          let searchG = 2;
         loginl = contextm.length < 26 && navigationb < 26;
         fullW = 77 == searchG && !fullW;
         contextm.push(searchG | 1);
          let savex = String.fromCharCode(115,117,98,115,116,114,95,99,95,51,52,0);
          let submith = String.fromCharCode(102,95,50,95,108,105,98,97,118,99,111,100,101,99,0);
          let bufferV = true;
         loginl = bufferV;
         savex = `${submith.length ^ 1}`;
         submith += `${savex.length | 1}`;
          let splashg: Map<any, any> = new Map([[String.fromCharCode(116,114,101,97,100,95,114,95,53,55,0),String.fromCharCode(114,101,99,101,110,116,108,121,95,117,95,55,54,0)], [String.fromCharCode(120,109,97,115,109,95,114,95,55,52,0),String.fromCharCode(98,102,115,116,109,95,51,95,55,53,0)]]);
          let orangey = String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,100,95,122,95,56,53,0);
         navigationb -= parseInt(`${modeK}`);
         splashg.set(`${orangey}`, 1 << (Math.min(2, Math.abs(splashg.size))));
         orangey += `${splashg.size}`;
      if (!loginl || (4.31 * modeK) == 4.60) {
         modeK -= parseFloat(`${parseInt(`${modeK}`) | 3}`);
      }
      mutedT = new Map([[`${mutedT.size}`, g_unlockt + mutedT.size]]);
      if (liveQ) {
         break;
      }
   } while ((1 <= (mutedT.size * 2)) && liveQ);

    await dispatch(addUserAuthState(user));

       let sportu = 2;
       let selectJ = String.fromCharCode(117,110,112,97,100,100,101,100,95,113,95,51,55,0);
         selectJ += `${selectJ.length << (Math.min(Math.abs(1), 4))}`;
       let floatingv = String.fromCharCode(98,95,49,53,95,117,110,100,101,108,101,103,97,116,101,0);
       let footballc = String.fromCharCode(105,95,52,56,95,114,118,100,115,112,0);
      let descs = 9651308 >= selectJ.length;
      do {
         selectJ += "3";
         if (descs) {
            break;
         }
      } while ((floatingv == selectJ) && descs);
         sportu &= selectJ.length;
      if ((sportu << (Math.min(selectJ.length, 3))) <= 1) {
          let emojix: Array<any> = [465, 349];
          let sportsm: Array<any> = [975, 522, 309];
          let tooltipsq = 2.0;
          let smallx = 3;
          let modity0 = String.fromCharCode(105,95,54,49,95,118,105,109,97,103,101,108,111,97,100,101,114,0);
         sportu <<= Math.min(3, emojix.length);
         emojix.push(1);
         sportsm = [smallx | modity0.length];
         tooltipsq *= parseFloat(`${1 / (Math.max(parseInt(`${tooltipsq}`), 9))}`);
         smallx &= parseInt(`${tooltipsq}`) % (Math.max(modity0.length, 6));
      }
      let containerJ = floatingv.length <= 5642743;
      do {
         floatingv += `${selectJ.length}`;
         if (containerJ) {
            break;
         }
      } while ((floatingv.includes(footballc)) && containerJ);
      header8 = new Map([[`${sportu}`, 3]]);

    if (userInfo.message.includes("注册成功")) {

      loadingC = [parseInt(`${indexi}`) / 2];
      navigation.navigate('SetUsername');

    } else if (userInfo.message.includes("登录成功")) {

   while ((1 ^ redirect7.size) >= 1 && (redirect7.size ^ downloadD) >= 1) {
      downloadD |= g_unlockt >> (Math.min(Math.abs(mutedT.size), 1));
      break;
   }

      if (user.isVip()) {

   if (!viewsQ.endsWith(`${g_unlockt}`)) {
      g_unlockt >>= Math.min(3, viewsQ.length);
   }
        await AsyncStorage.setItem("showAds", "false");
      } else {

   while (4.53 > sourceq) {
       let rewindS = 4.0;
       let adultn = true;
       let reportj = 3.0;
         adultn = reportj > 59.65 || adultn;
         reportj += parseFloat(`${parseInt(`${rewindS}`) / 1}`);
         reportj -= (parseFloat(`${parseInt(`${rewindS}`) << (Math.min(4, Math.abs((adultn ? 2 : 4))))}`));
      while ((1.53 * rewindS) < 1.76) {
         adultn = !adultn;
         break;
      }
          let tempC = 2.0;
          let turn7 = false;
         reportj /= Math.max(1, parseFloat(`${parseInt(`${rewindS}`)}`));
         tempC -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${tempC}`)), 4))}`);
         turn7 = tempC >= 66.50;
      let dataV = 9295439.0 >= reportj;
      do {
          let becomex = 1.0;
          let containerR: Array<any> = [945, 954, 497];
          let f_lock3 = 4.0;
          let rewinde: Array<any> = [258, 164, 144];
         reportj *= parseFloat(`${parseInt(`${rewindS}`) >> (Math.min(4, Math.abs(2)))}`);
         becomex -= rewinde.length / (Math.max(2, parseInt(`${becomex}`)));
         containerR.push(containerR.length ^ 1);
         f_lock3 *= parseFloat(`${containerR.length}`);
         rewinde.push(2 + containerR.length);
         if (dataV) {
            break;
         }
      } while (dataV && ((reportj / (Math.max(3.47, 10))) > 2.42 && 3.47 > (reportj + rewindS)));
         adultn = adultn && 60.20 == reportj;
         adultn = !adultn && reportj >= 42.63;
      if (2.30 >= (reportj / (Math.max(rewindS, 1))) || 4.83 >= (2.30 / (Math.max(3, rewindS)))) {
          let playlistJ = String.fromCharCode(118,95,53,57,95,102,114,97,109,101,115,0);
          let tailC: Map<any, any> = new Map([[String.fromCharCode(113,95,50,55,95,102,97,97,110,105,100,99,116,0),String.fromCharCode(115,116,114,101,116,99,104,97,98,108,101,95,109,95,57,52,0)], [String.fromCharCode(99,95,49,52,95,109,101,97,115,117,114,101,115,0),String.fromCharCode(102,95,51,49,95,113,117,101,114,121,0)]]);
          let placeholdert = String.fromCharCode(115,101,115,115,105,111,110,115,95,55,95,52,51,0);
          let rightk = String.fromCharCode(107,95,57,57,95,103,101,110,101,114,97,116,111,114,0);
         rewindS += parseFloat(`${2}`);
         playlistJ += `${(placeholdert == String.fromCharCode(89,0) ? placeholdert.length : tailC.size)}`;
         tailC = new Map([[placeholdert, (rightk == String.fromCharCode(106,0) ? placeholdert.length : rightk.length)]]);
      }
      loadingC = [(String.fromCharCode(120,0) == targetC ? twitterD : targetC.length)];
      break;
   }
        await AsyncStorage.setItem("showAds", "true");
      }

      await dispatch(changeScreenAction('登录成功'));

   for (let r = 0; r < 2; r++) {
      downloadD /= Math.max(1, 5);
   }

      

   while (5 >= (verticalh.length + 1)) {
      downloadD |= 1;
      break;
   }
      umb_center_carousel.userCenterLoginSuccessTimesAnalytics();

      targetC = `${parseInt(`${sourceq}`)}`;
      LRZTermsScreen.userCenterLoginSuccessTimesAnalytics();

   for (let g = 0; g < 2; g++) {
       let clock5 = String.fromCharCode(100,95,49,55,95,108,101,116,116,101,114,0);
          let goalH = false;
          let borderlessX = 5.0;
          let blacklists = 1.0;
         clock5 = `${clock5.length}`;
         goalH = 58.33 > borderlessX;
         borderlessX *= 3 * parseInt(`${blacklists}`);
         blacklists += 1 - parseInt(`${borderlessX}`);
      let paginationS = String.fromCharCode(121,114,117,100,115,54,109,121,50,0) == clock5;
      do {
         clock5 += `${clock5.length}`;
         if (paginationS) {
            break;
         }
      } while ((clock5.length >= 5) && paginationS);
         clock5 = `${(String.fromCharCode(98,0) == clock5 ? clock5.length : clock5.length)}`;
      targetC = `${redirect7.size}`;
   }

      if (user.isVip()) {

      g_unlockt /= Math.max(twitterD, 2);
        umb_center_carousel.userCenterVipLoginSuccessTimesAnalytics();
      }
      

      targetC = "1";

      if (onGooleLoginSuccess) onGooleLoginSuccess();
    }
  }

  const onPressTermNCondition = () => {
       let black3 = 0.0;
    let filterC = String.fromCharCode(109,105,112,115,102,112,117,95,102,95,52,0);
    let gmailS = 5.0;
    let internetk = String.fromCharCode(119,95,49,53,95,115,117,98,115,116,114,97,99,116,101,100,0);
    let matchesg = String.fromCharCode(115,117,98,115,116,114,101,97,109,95,115,95,49,48,0);
    let chart7 = true;
    let listN = 2.0;
    let usernamew: Array<any> = [453, 632, 50];
    let searchbard = 1.0;
    let select8 = String.fromCharCode(107,95,52,56,95,101,120,112,108,105,99,105,116,101,108,121,0);
    let rewindj = 5.0;
    let showF = 5.0;
       let blackO = 0.0;
      if (blackO > blackO) {
          let customP = 2;
         blackO += parseFloat(`${customP * 1}`);
      }
          let goalM = 1;
          let malaysiai = 5.0;
          let pointn = String.fromCharCode(102,116,118,108,97,115,116,110,111,100,101,95,115,95,51,57,0);
         blackO *= parseFloat(`${pointn.length}`);
         goalM <<= Math.min(Math.abs(parseInt(`${malaysiai}`) ^ goalM), 2);
         malaysiai -= 3 / (Math.max(5, parseInt(`${malaysiai}`)));
         pointn = `${goalM + parseInt(`${malaysiai}`)}`;
         blackO *= parseFloat(`${1 / (Math.max(parseInt(`${blackO}`), 9))}`);
      rewindj /= Math.max(parseInt(`${rewindj}`), 2);
      gmailS += parseFloat(`${1 / (Math.max(1, parseInt(`${rewindj}`)))}`);
   for (let k = 0; k < 3; k++) {
       let disconnectedO: Map<any, any> = new Map([[String.fromCharCode(101,95,49,95,98,105,116,114,101,97,100,101,114,0),420], [String.fromCharCode(105,110,115,101,114,116,95,115,95,52,52,0),356], [String.fromCharCode(99,95,56,57,95,115,101,109,97,112,104,111,114,101,0),785]]);
         disconnectedO.set(`${disconnectedO.size}`, disconnectedO.size);
      while (2 <= (5 | disconnectedO.size) || (disconnectedO.size | disconnectedO.size) <= 5) {
         disconnectedO = new Map([[`${disconnectedO.size}`, disconnectedO.size - 3]]);
         break;
      }
      for (let l = 0; l < 1; l++) {
          let lineM = String.fromCharCode(99,111,110,116,97,99,116,95,119,95,53,53,0);
         disconnectedO = new Map([[`${disconnectedO.size}`, disconnectedO.size]]);
         lineM += `${lineM.length}`;
      }
      listN /= Math.max(3, ((chart7 ? 4 : 2)));
   }
   if (gmailS >= 1.87) {
      black3 /= Math.max((filterC == String.fromCharCode(90,0) ? filterC.length : parseInt(`${listN}`)), 3);
   }
      black3 += (String.fromCharCode(102,0) == matchesg ? matchesg.length : select8.length);
      internetk += `${((chart7 ? 3 : 4) / (Math.max(parseInt(`${listN}`), 6)))}`;
   let uploadn = rewindj <= 8149685.0;
   do {
      rewindj -= internetk.length * 1;
      if (uploadn) {
         break;
      }
   } while (((select8.length >> (Math.min(Math.abs(4), 3))) > 1 && (select8.length ^ 4) > 2) && uploadn);
      usernamew.push(usernamew.length + matchesg.length);
      searchbard -= ((chart7 ? 4 : 5) % (Math.max(internetk.length, 2)));
      rewindj *= (parseInt(`${gmailS}`) & (chart7 ? 1 : 2));
      internetk += `${select8.length}`;
   if ((searchbard * 2.31) >= 2.57 && searchbard >= 2.31) {
      searchbard /= Math.max(parseInt(`${gmailS}`) / 3, 5);
   }
   if ((black3 / (Math.max(1, searchbard))) > 4.98 || 4.98 > (black3 / (Math.max(7, searchbard)))) {
      searchbard += parseInt(`${gmailS}`);
   }
   while (2 >= (1 / (Math.max(9, parseInt(`${listN}`)))) && (listN / 5.80) >= 3.55) {
      listN -= filterC.length & 1;
      break;
   }
      listN += (String.fromCharCode(67,0) == select8 ? select8.length : parseInt(`${listN}`));
   while (4 < (parseInt(`${listN}`) / (Math.max(internetk.length, 2)))) {
       let tooltipsg = true;
       let darkK = String.fromCharCode(109,101,109,120,95,57,95,54,50,0);
       let rankh = 4.0;
      let analyticg = tooltipsg ? !tooltipsg : tooltipsg;
      do {
         tooltipsg = 3.100 <= rankh;
         if (analyticg) {
            break;
         }
      } while (analyticg && (!tooltipsg));
          let long_6y: Array<any> = [846, 412, 206];
         tooltipsg = darkK.startsWith(`${rankh}`);
         long_6y.push(long_6y.length - long_6y.length);
      let controlsn = rankh >= 7958793.0;
      do {
         rankh *= parseFloat(`${2}`);
         if (controlsn) {
            break;
         }
      } while (controlsn && (3.40 < (rankh / (Math.max(2.43, 9)))));
       let statisticsf = String.fromCharCode(107,95,56,57,95,112,97,110,105,99,0);
      for (let o = 0; o < 2; o++) {
          let iconM = false;
          let skips = String.fromCharCode(115,116,97,116,101,102,117,108,95,100,95,53,0);
          let weiboA = 2;
          let containern = String.fromCharCode(101,95,54,50,95,112,101,101,107,0);
         tooltipsg = !iconM;
         skips += `${2 - weiboA}`;
         weiboA %= Math.max(skips.length - containern.length, 5);
         containern = `${skips.length}`;
      }
          let loadingU = 3.0;
          let config5: Map<any, any> = new Map([[String.fromCharCode(101,110,115,95,99,95,54,49,0),false ], [String.fromCharCode(110,95,53,48,95,101,120,116,101,110,100,101,101,0),true ], [String.fromCharCode(103,95,56,48,95,99,97,110,0),false ]]);
          let dialogC = true;
         darkK = `${statisticsf.length}`;
         loadingU -= (2 ^ (dialogC ? 1 : 4));
         config5.set(`${loadingU}`, config5.size << (Math.min(Math.abs(1), 3)));
         dialogC = config5.get(`${loadingU}`) == null;
      for (let w = 0; w < 1; w++) {
          let matchese = String.fromCharCode(109,95,54,49,95,114,111,116,97,116,101,100,0);
          let customG = 1.0;
          let changeA = 3.0;
         darkK += `${(3 ^ (tooltipsg ? 2 : 2))}`;
         matchese += `${parseInt(`${changeA}`)}`;
         customG -= 2;
      }
      if ((parseFloat(`${statisticsf.length}`) + rankh) >= 2.46 && (statisticsf.length >> (Math.min(Math.abs(5), 4))) >= 1) {
         rankh += parseFloat(`${parseInt(`${rankh}`)}`);
      }
      while (!tooltipsg) {
          let taiwan0 = 2;
          let viewerq = String.fromCharCode(102,104,116,120,95,114,95,55,53,0);
          let confirmationQ = String.fromCharCode(115,100,101,115,95,116,95,56,49,0);
          let stylef = String.fromCharCode(112,111,115,101,95,103,95,57,57,0);
          let annerN = 3.0;
         tooltipsg = (taiwan0 * annerN) <= 97;
         taiwan0 <<= Math.min(5, Math.abs(3));
         viewerq += `${viewerq.length & confirmationQ.length}`;
         confirmationQ = `${viewerq.length}`;
         stylef = `${confirmationQ.length}`;
         annerN /= Math.max(4, confirmationQ.length);
         break;
      }
      listN *= 2;
      break;
   }
   while (3 <= (3 - filterC.length) || (black3 * filterC.length) <= 4.42) {
       let righth = 0.0;
          let playZ = String.fromCharCode(115,108,111,112,101,95,55,95,49,51,0);
          let sharede = 4.0;
          let gpayy = 4;
         righth *= parseFloat(`${parseInt(`${righth}`)}`);
         playZ += "3";
         sharede += parseInt(`${sharede}`);
         gpayy >>= Math.min(4, Math.abs(2));
         righth /= Math.max(parseFloat(`${parseInt(`${righth}`) % (Math.max(parseInt(`${righth}`), 4))}`), 2);
      for (let l = 0; l < 1; l++) {
         righth *= parseFloat(`${parseInt(`${righth}`) << (Math.min(Math.abs(parseInt(`${righth}`)), 5))}`);
      }
      filterC += `${parseInt(`${listN}`)}`;
      break;
   }
   let sharea = black3 >= 6218439.0;
   do {
      black3 /= Math.max(5, 1);
      if (sharea) {
         break;
      }
   } while ((!internetk.endsWith(`${black3}`)) && sharea);
   while (filterC == matchesg) {
       let blacklist2 = String.fromCharCode(101,95,53,51,95,104,101,120,100,117,109,112,0);
       let macauB = String.fromCharCode(98,111,114,100,101,114,108,101,115,115,95,116,95,51,54,0);
       let drag0 = false;
       let private_7oz: Map<any, any> = new Map([[String.fromCharCode(109,105,99,95,115,95,54,56,0),String.fromCharCode(121,95,53,95,111,110,101,115,99,97,108,101,0)], [String.fromCharCode(114,101,109,97,114,107,95,107,95,54,56,0),String.fromCharCode(97,95,52,53,95,115,101,116,117,112,0)]]);
       let verticalX = 5.0;
          let acceptedZ = 1.0;
          let clubx = String.fromCharCode(115,111,114,116,101,114,95,99,95,52,54,0);
          let selectY: Map<any, any> = new Map([[String.fromCharCode(103,114,101,101,110,95,97,95,49,53,0),994], [String.fromCharCode(102,95,57,53,95,102,117,122,122,101,114,115,0),635], [String.fromCharCode(110,115,112,97,99,101,115,95,50,95,52,54,0),953]]);
         macauB += `${parseInt(`${acceptedZ}`)}`;
         acceptedZ -= 2 >> (Math.min(3, Math.abs(selectY.size)));
         clubx = `${selectY.size}`;
      if (!drag0 || 5 > macauB.length) {
          let questT = String.fromCharCode(106,95,49,50,95,111,110,116,114,111,108,0);
          let loginK = 2;
          let recommendationB = 3.0;
         drag0 = 52.84 > verticalX;
         questT += `${loginK & questT.length}`;
         loginK *= 3;
         recommendationB /= Math.max(2, loginK * parseInt(`${recommendationB}`));
      }
      let ticked7 = macauB == String.fromCharCode(119,105,121,105,55,0);
      do {
         macauB = `${(String.fromCharCode(104,0) == macauB ? macauB.length : parseInt(`${verticalX}`))}`;
         if (ticked7) {
            break;
         }
      } while ((drag0) && ticked7);
      while (!Array.from(private_7oz.values()).includes(verticalX)) {
         private_7oz = new Map([[`${drag0}`, parseInt(`${verticalX}`) >> (Math.min(4, Math.abs(3)))]]);
         break;
      }
       let sellE: Map<any, any> = new Map([[String.fromCharCode(115,117,98,112,97,121,108,111,97,100,95,50,95,50,50,0),false ], [String.fromCharCode(120,95,50,56,95,115,116,97,114,114,101,100,0),true ]]);
       let google3: Map<any, any> = new Map([[String.fromCharCode(110,95,56,51,95,116,104,114,101,97,100,103,114,111,117,112,0),String.fromCharCode(98,95,51,56,95,99,111,112,121,105,110,105,111,118,0)], [String.fromCharCode(104,107,100,102,95,51,95,54,56,0),String.fromCharCode(117,110,108,105,110,107,95,112,95,54,55,0)], [String.fromCharCode(110,95,56,53,95,109,97,110,97,103,101,97,98,108,101,0),String.fromCharCode(109,101,108,116,95,56,95,49,57,0)]]);
      for (let n = 0; n < 2; n++) {
         macauB = `${sellE.size & 3}`;
      }
          let philippinesW = String.fromCharCode(98,121,116,101,114,117,110,95,117,95,56,51,0);
         drag0 = macauB.length > blacklist2.length;
         philippinesW = `${philippinesW.length}`;
      for (let i = 0; i < 1; i++) {
         drag0 = 54 > sellE.size || google3.size > 54;
      }
       let middleA = String.fromCharCode(115,97,100,120,95,116,95,51,51,0);
       let untick6 = String.fromCharCode(99,111,110,102,101,116,116,105,95,122,95,57,0);
       let header4 = 0.0;
      while ((untick6.length - 1) <= 2) {
          let sinax = false;
          let foundS: Map<any, any> = new Map([[String.fromCharCode(111,102,102,108,105,110,101,95,55,95,53,51,0),false ], [String.fromCharCode(97,100,100,95,53,95,54,48,0),false ], [String.fromCharCode(103,101,116,111,112,116,95,116,95,51,53,0),false ]]);
          let detailsq = true;
          let minimizeS: Map<any, any> = new Map([[String.fromCharCode(103,102,105,110,116,95,113,95,49,48,0),703], [String.fromCharCode(111,95,56,95,108,111,110,103,109,117,108,97,119,0),585], [String.fromCharCode(99,114,108,102,95,108,95,55,0),782]]);
         untick6 = `${google3.size - 1}`;
         sinax = null == foundS.get(`${detailsq}`);
         foundS.set(`${sinax}`, (minimizeS.size - (sinax ? 1 : 2)));
         detailsq = !sinax;
         minimizeS = new Map([[`${minimizeS.size}`, ((sinax ? 3 : 3) % 3)]]);
         break;
      }
         blacklist2 = `${parseInt(`${header4}`) * 3}`;
      while ((parseInt(`${verticalX}`) + sellE.size) <= 1 || 1 <= (sellE.size + parseInt(`${verticalX}`))) {
          let assistQ = true;
         verticalX -= google3.size;
         assistQ = !assistQ;
         break;
      }
      for (let l = 0; l < 3; l++) {
         drag0 = !blacklist2.endsWith(`${drag0}`);
      }
         drag0 = (((!drag0 ? macauB.length : 55) & macauB.length) >= 55);
      matchesg += `${matchesg.length}`;
      break;
   }
       let reminderD = 0.0;
       let downC: Array<any> = [320, 710, 646];
       let tailu: Map<any, any> = new Map([[String.fromCharCode(110,95,50,50,95,112,111,115,116,114,111,116,97,116,101,0),true ], [String.fromCharCode(98,108,117,114,114,97,98,108,101,95,54,95,54,48,0),false ]]);
       let storeX = String.fromCharCode(99,111,108,108,101,99,116,111,114,95,98,95,52,56,0);
         downC = [2];
         downC.push(storeX.length * 3);
          let giftJ = String.fromCharCode(104,101,97,112,95,110,95,53,0);
          let success3 = 1.0;
         reminderD /= Math.max(1, parseFloat(`${tailu.size}`));
         giftJ += `${parseInt(`${success3}`)}`;
         success3 /= Math.max(giftJ.length / (Math.max(7, parseInt(`${success3}`))), 3);
       let buttonS = String.fromCharCode(108,117,104,110,95,102,95,53,48,0);
       let constantsb = String.fromCharCode(109,100,99,116,95,100,95,50,51,0);
         buttonS += `${buttonS.length}`;
         downC = [3];
         reminderD *= parseFloat(`${constantsb.length}`);
       let telegramk: Map<any, any> = new Map([[String.fromCharCode(112,111,105,110,116,99,98,98,95,122,95,52,49,0),316], [String.fromCharCode(103,95,54,55,95,111,117,116,111,117,116,0),84]]);
      matchesg = `${usernamew.length}`;
      matchesg = `${1 >> (Math.min(5, matchesg.length))}`;
       let guide9: Array<any> = [815, 618, 867];
       let projectv = 0.0;
       let faviconD: Array<any> = [String.fromCharCode(105,95,56,49,95,115,101,108,101,99,116,111,112,0), String.fromCharCode(114,101,115,104,117,102,102,108,101,95,105,95,57,54,0)];
      while (projectv >= 3.75) {
          let storeR: Map<any, any> = new Map([[String.fromCharCode(117,95,51,48,95,97,117,116,104,101,110,116,105,99,97,116,101,100,0),true ], [String.fromCharCode(117,110,115,99,97,108,101,100,95,121,95,50,54,0),false ]]);
          let albums: Map<any, any> = new Map([[String.fromCharCode(103,95,53,56,95,114,101,115,97,109,112,0),930], [String.fromCharCode(107,95,55,56,95,115,101,109,97,110,116,105,99,0),126], [String.fromCharCode(108,115,112,114,95,56,95,54,0),637]]);
          let submite = String.fromCharCode(106,95,57,57,95,97,108,105,103,110,101,114,0);
          let spinnerS = String.fromCharCode(118,103,108,111,98,97,108,95,55,95,54,48,0);
         projectv -= albums.size;
         storeR = new Map([[`${storeR.size}`, 2 & submite.length]]);
         albums.set(submite, 3);
         spinnerS += `${storeR.size}`;
         break;
      }
      let events = 5604935 >= faviconD.length;
      do {
         faviconD.push(2);
         if (events) {
            break;
         }
      } while (events && ((faviconD.length - parseInt(`${projectv}`)) > 2 || 3.35 > (projectv - faviconD.length)));
         projectv /= Math.max(4, faviconD.length | 1);
      for (let k = 0; k < 1; k++) {
         faviconD = [2 >> (Math.min(5, guide9.length))];
      }
      while (!faviconD.includes(guide9.length)) {
          let catagory8: Map<any, any> = new Map([[String.fromCharCode(116,95,50,52,95,114,101,99,117,114,115,101,0),String.fromCharCode(122,111,110,101,105,110,102,111,95,112,95,55,0)], [String.fromCharCode(99,95,56,49,95,104,111,114,105,122,0),String.fromCharCode(111,95,51,55,95,100,101,112,101,110,100,0)], [String.fromCharCode(115,99,97,108,97,114,112,114,111,100,117,99,116,95,119,95,52,52,0),String.fromCharCode(106,95,53,95,106,100,104,117,102,102,0)]]);
          let editq = String.fromCharCode(105,110,100,101,112,101,110,100,101,110,116,95,97,95,53,57,0);
          let storeE: Array<any> = [497, 446, 947];
          let dangerG = 0;
         guide9 = [guide9.length % (Math.max(5, catagory8.size))];
         catagory8 = new Map([[`${storeE.length}`, storeE.length * editq.length]]);
         editq = `${dangerG}`;
         dangerG ^= storeE.length;
         break;
      }
      let chinag = 7295327 <= guide9.length;
      do {
         guide9.push(3);
         if (chinag) {
            break;
         }
      } while ((guide9.length >= 4) && chinag);
      let anythink6 = projectv <= 7438818.0;
      do {
          let assistM: Map<any, any> = new Map([[String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,115,95,119,95,53,49,0),221], [String.fromCharCode(118,95,55,52,95,116,117,108,115,105,0),99]]);
          let reminderG = String.fromCharCode(116,114,97,110,115,97,99,116,105,111,110,115,95,112,95,55,50,0);
          let controlsY = String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,101,100,95,106,95,50,55,0);
          let playlistC: Array<any> = [String.fromCharCode(114,116,112,119,95,104,95,52,54,0), String.fromCharCode(99,95,52,53,95,109,105,110,105,109,117,109,0), String.fromCharCode(122,111,109,98,105,101,95,103,95,55,53,0)];
          let shirtV = true;
         projectv *= guide9.length;
         assistM = new Map([[`${assistM.size}`, assistM.size & 3]]);
         reminderG += `${reminderG.length | playlistC.length}`;
         controlsY += `${assistM.size - 2}`;
         playlistC.push((playlistC.length ^ (shirtV ? 5 : 1)));
         if (anythink6) {
            break;
         }
      } while ((5.31 > (4.37 + projectv) && 4.37 > (faviconD.length + projectv)) && anythink6);
          let privilege4 = 3.0;
          let membershipz: Map<any, any> = new Map([[String.fromCharCode(102,95,57,48,95,118,101,108,111,99,105,116,121,0),false ], [String.fromCharCode(110,95,54,55,95,114,97,99,101,0),true ], [String.fromCharCode(108,95,49,95,97,117,114,97,0),true ]]);
          let sellU = true;
         guide9.push(parseInt(`${projectv}`) * 3);
         privilege4 *= membershipz.size;
         membershipz.set(`${sellU}`, (parseInt(`${privilege4}`) * (sellU ? 2 : 5)));
       let activeM = String.fromCharCode(112,115,102,105,108,101,95,112,95,56,49,0);
       let datau = String.fromCharCode(108,97,121,111,117,116,95,101,95,52,50,0);
      rewindj *= guide9.length;
   for (let z = 0; z < 3; z++) {
      filterC = `${parseInt(`${gmailS}`) - 2}`;
   }
   for (let a = 0; a < 1; a++) {
      usernamew.push((String.fromCharCode(56,0) == internetk ? parseInt(`${gmailS}`) : internetk.length));
   }
       let specE: Map<any, any> = new Map([[String.fromCharCode(101,120,116,114,97,112,111,108,97,116,111,114,95,99,95,51,54,0),722], [String.fromCharCode(120,99,108,105,95,54,95,57,57,0),645]]);
       let disconnectedE = 0.0;
      let shirti = disconnectedE >= 8778210.0;
      do {
         disconnectedE += 3 ^ parseInt(`${disconnectedE}`);
         if (shirti) {
            break;
         }
      } while (shirti && (!Array.from(specE.values()).includes(disconnectedE)));
          let routerq: Map<any, any> = new Map([[String.fromCharCode(119,97,116,99,104,101,114,115,95,107,95,54,50,0),422], [String.fromCharCode(99,111,109,112,101,110,115,97,116,101,100,95,56,95,50,50,0),242], [String.fromCharCode(122,95,57,49,95,112,101,114,109,117,116,101,0),524]]);
          let sentryg = 5.0;
         disconnectedE *= routerq.size / (Math.max(3, 5));
         routerq.set(`${sentryg}`, parseInt(`${sentryg}`));
         disconnectedE -= 1;
      let greyD = specE.size >= 5713940;
      do {
         specE.set(`${disconnectedE}`, parseInt(`${disconnectedE}`) + 3);
         if (greyD) {
            break;
         }
      } while (greyD && ((disconnectedE - specE.size) >= 5.95));
          let downloadj: Map<any, any> = new Map([[String.fromCharCode(122,95,49,51,95,114,97,109,112,0),String.fromCharCode(114,95,56,52,95,115,117,103,103,101,115,116,105,111,110,115,0)], [String.fromCharCode(107,95,50,49,95,97,110,111,116,104,101,114,0),String.fromCharCode(106,95,57,50,95,97,118,99,105,110,116,114,97,0)], [String.fromCharCode(106,95,55,49,95,119,121,99,104,101,112,114,111,111,102,0),String.fromCharCode(97,100,106,117,115,109,101,110,116,115,95,99,95,55,53,0)]]);
          let spinner8 = true;
         disconnectedE += parseInt(`${disconnectedE}`) | 1;
         downloadj.set(`${spinner8}`, ((spinner8 ? 3 : 2) ^ 1));
      for (let d = 0; d < 3; d++) {
         disconnectedE -= parseInt(`${disconnectedE}`) ^ specE.size;
      }
      searchbard += 1;
   for (let x = 0; x < 1; x++) {
       let relatedw = String.fromCharCode(116,95,54,95,100,101,98,97,110,100,0);
       let diceq = String.fromCharCode(100,101,110,111,105,115,105,110,103,95,104,95,50,56,0);
       let philippinesG = 2.0;
       let sideV: Array<any> = [736, 248, 123];
       let assistY = 5;
      while ((relatedw.length - 2) <= 2 && 2 <= (assistY - 2)) {
         assistY <<= Math.min(5, Math.abs(relatedw.length / (Math.max(9, parseInt(`${philippinesG}`)))));
         break;
      }
         relatedw = `${sideV.length}`;
         sideV = [3];
      let detailX = philippinesG <= 9539182.0;
      do {
          let modelsF = String.fromCharCode(114,95,53,53,95,115,116,97,114,116,101,100,0);
          let c_positionu = String.fromCharCode(114,101,100,101,108,105,118,101,114,121,95,122,95,50,51,0);
         philippinesG += parseFloat(`${sideV.length}`);
         modelsF = `${modelsF.length}`;
         c_positionu += `${c_positionu.length}`;
         if (detailX) {
            break;
         }
      } while ((relatedw.includes(`${philippinesG}`)) && detailX);
      for (let q = 0; q < 1; q++) {
         philippinesG /= Math.max(3, parseFloat(`${parseInt(`${philippinesG}`)}`));
      }
      let flyerH = 7332530 <= sideV.length;
      do {
          let nalyticst = false;
          let rulesn = true;
         sideV.push(parseInt(`${philippinesG}`));
         nalyticst = !rulesn;
         rulesn = !nalyticst;
         if (flyerH) {
            break;
         }
      } while (((sideV.length - diceq.length) >= 1 && (sideV.length - 1) >= 3) && flyerH);
      if (parseFloat(`${diceq.length}`) <= philippinesG) {
          let completeO = 4.0;
          let resultu = String.fromCharCode(119,95,50,55,95,121,113,117,97,110,116,0);
          let transferz = String.fromCharCode(117,95,51,56,95,110,108,115,116,0);
         diceq = `${parseInt(`${philippinesG}`) / (Math.max(relatedw.length, 4))}`;
         completeO += parseFloat(`${parseInt(`${completeO}`)}`);
         resultu += `${resultu.length * 1}`;
         transferz += "1";
      }
         diceq += `${sideV.length}`;
         relatedw = `${(String.fromCharCode(99,0) == diceq ? sideV.length : diceq.length)}`;
      let minivodv = 6925875 <= assistY;
      do {
         assistY /= Math.max(1, 3);
         if (minivodv) {
            break;
         }
      } while (minivodv && (2 == (sideV.length ^ 2)));
      for (let g = 0; g < 1; g++) {
         sideV = [(diceq == String.fromCharCode(57,0) ? diceq.length : relatedw.length)];
      }
          let playlistB = 1.0;
          let stationG = 3.0;
          let mathM = String.fromCharCode(117,95,54,49,95,114,101,117,115,101,0);
         relatedw += `${parseInt(`${philippinesG}`) % (Math.max(sideV.length, 5))}`;
         playlistB -= parseInt(`${stationG}`);
         mathM += `${mathM.length / 1}`;
         relatedw = `${relatedw.length}`;
         diceq += `${parseInt(`${philippinesG}`)}`;
         relatedw += "2";
      listN /= Math.max(3, (String.fromCharCode(68,0) == relatedw ? relatedw.length : internetk.length));
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
       let logouty = String.fromCharCode(117,95,54,50,95,99,111,110,118,0);
    let twitterw = 3;
    let h_centerY = String.fromCharCode(117,110,115,101,110,116,95,52,95,49,50,0);
    let gmailq = String.fromCharCode(102,102,112,108,97,121,95,102,95,54,48,0);
    let checkboxA: Map<any, any> = new Map([[String.fromCharCode(120,95,50,49,95,116,119,105,100,100,108,101,115,0),565], [String.fromCharCode(119,101,105,103,104,116,105,110,103,95,50,95,56,48,0),810], [String.fromCharCode(97,99,111,108,111,114,95,52,95,51,56,0),173]]);
    let more9 = String.fromCharCode(114,95,50,48,95,116,103,101,116,0);
    let relatedY = String.fromCharCode(112,95,52,55,95,99,111,110,103,0);
    let arrowa = 1.0;
    let smallF: Array<any> = [621, 623, 882];
    let zhengpianN = String.fromCharCode(115,95,54,95,112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,0);
    let reportt = 5.0;
    let topicM = String.fromCharCode(119,95,49,48,48,95,115,116,100,0);
    let bcopy_qz = String.fromCharCode(116,105,99,107,105,110,103,95,98,95,53,56,0);
    let storeX: Map<any, any> = new Map([[String.fromCharCode(109,97,107,101,114,112,109,95,107,95,55,55,0),970], [String.fromCharCode(109,95,52,54,95,115,99,97,110,115,116,97,116,117,115,0),562]]);
    let alertl = String.fromCharCode(109,115,118,99,95,54,95,52,54,0);
      twitterw <<= Math.min(Math.abs(gmailq.length + parseInt(`${reportt}`)), 3);
      logouty += `${parseInt(`${reportt}`) % (Math.max(10, zhengpianN.length))}`;

    if (isSubmitting) return;

   let scopy__e3 = 8538700 <= relatedY.length;
   do {
       let assisti: Array<any> = [572, 921];
       let editH = String.fromCharCode(105,115,108,111,119,95,104,95,52,57,0);
       let telegramt = String.fromCharCode(112,114,111,112,111,114,116,105,111,110,115,95,115,95,50,55,0);
       let leagueQ = false;
          let questb: Array<any> = [235, 939, 88];
         telegramt += `${(String.fromCharCode(66,0) == telegramt ? telegramt.length : editH.length)}`;
         questb.push(3 | questb.length);
      let gemfileE = editH.length <= 9215815;
      do {
         editH = `${telegramt.length}`;
         if (gemfileE) {
            break;
         }
      } while (((assisti.length | 4) < 2 && (editH.length | assisti.length) < 4) && gemfileE);
      while (5 > (editH.length << (Math.min(Math.abs(5), 1)))) {
         assisti = [2];
         break;
      }
       let project2 = 2;
      while (leagueQ && 3 < (assisti.length + 5)) {
         assisti = [assisti.length << (Math.min(editH.length, 2))];
         break;
      }
      if (leagueQ) {
          let humidityc = String.fromCharCode(121,109,111,100,101,95,108,95,54,55,0);
          let statisticst: Array<any> = [950, 872, 794];
          let actionsX = String.fromCharCode(115,95,49,56,95,121,101,97,114,0);
         leagueQ = (statisticst.length + editH.length) >= 35;
         humidityc += `${2 * humidityc.length}`;
         statisticst.push(2);
         actionsX += `${actionsX.length}`;
      }
      let floateri = 5874208 >= project2;
      do {
          let bannerr = false;
          let dataM = String.fromCharCode(110,95,49,51,95,99,104,97,114,97,99,116,101,114,0);
          let clearB = 1.0;
          let backwards = 0;
          let robotor = String.fromCharCode(102,95,50,50,95,98,101,104,97,118,105,111,114,0);
         project2 ^= backwards;
         bannerr = !bannerr;
         dataM = `${3 ^ parseInt(`${clearB}`)}`;
         clearB -= (parseFloat(`${parseInt(`${clearB}`) | (bannerr ? 3 : 2)}`));
         backwards >>= Math.min(Math.abs((dataM == String.fromCharCode(76,0) ? (bannerr ? 5 : 2) : dataM.length)), 4);
         robotor += `${robotor.length % (Math.max(9, dataM.length))}`;
         if (floateri) {
            break;
         }
      } while ((3 > (5 ^ project2)) && floateri);
         leagueQ = !leagueQ;
         project2 >>= Math.min(5, Math.abs(editH.length / 1));
          let minivods = 4.0;
         editH = `${parseInt(`${minivods}`) << (Math.min(5, Math.abs(1)))}`;
         leagueQ = assisti.length <= telegramt.length;
         telegramt += `${editH.length - 1}`;
      relatedY = "1";
      if (scopy__e3) {
         break;
      }
   } while (scopy__e3 && (4 < (1 * relatedY.length) && 1 < (smallF.length * 1)));
   let logout3 = topicM.length <= 5099672;
   do {
       let castingr = 3.0;
         castingr -= parseFloat(`${parseInt(`${castingr}`) & 2}`);
      while ((4 + castingr) >= 5.5) {
         castingr -= parseFloat(`${1 | parseInt(`${castingr}`)}`);
         break;
      }
      while (3.84 < (5 * castingr)) {
          let placementP = 0.0;
         castingr *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${castingr}`)), 4))}`);
         placementP /= Math.max(parseInt(`${placementP}`) & parseInt(`${placementP}`), 5);
         break;
      }
      topicM += `${smallF.length}`;
      if (logout3) {
         break;
      }
   } while ((bcopy_qz.length >= topicM.length) && logout3);

    if (isReadTermNCondition == false) {

   let pointj = relatedY == String.fromCharCode(102,52,56,117,101,116,56,0);
   do {
      relatedY += `${(relatedY == String.fromCharCode(81,0) ? relatedY.length : topicM.length)}`;
      if (pointj) {
         break;
      }
   } while ((h_centerY.endsWith(`${relatedY.length}`)) && pointj);
   let lightw = relatedY.length >= 8333107;
   do {
      relatedY = "2";
      if (lightw) {
         break;
      }
   } while ((more9 != relatedY) && lightw);
      return;

      zhengpianN += `${(String.fromCharCode(54,0) == logouty ? logouty.length : parseInt(`${arrowa}`))}`;
       let mathA: Array<any> = [907, 507, 636];
      let sliderE = mathA.length <= 6583985;
      do {
         mathA.push(mathA.length);
         if (sliderE) {
            break;
         }
      } while (sliderE && ((mathA.length % 1) <= 5 && 5 <= (mathA.length % 1)));
      if (2 < (mathA.length >> (Math.min(mathA.length, 4))) || 1 < (mathA.length >> (Math.min(Math.abs(2), 3)))) {
         mathA = [mathA.length];
      }
      if ((mathA.length | mathA.length) == 5) {
         mathA = [mathA.length];
      }
      smallF = [parseInt(`${reportt}`) % (Math.max(bcopy_qz.length, 1))];
    }

    const formattedLoginValue = loginType === 'phone' ? loginValue.replace(/\s/g, '') : loginValue;

    

      twitterw <<= Math.min(4, Math.abs(checkboxA.size >> (Math.min(Math.abs(3), 4))));
      gmailq = `${twitterw * 1}`;
    

   while (!h_centerY.includes(`${reportt}`)) {
       let baidu3 = String.fromCharCode(116,120,105,100,95,108,95,55,53,0);
       let storey = String.fromCharCode(107,95,57,49,95,114,97,119,0);
       let indexV = String.fromCharCode(102,95,51,50,95,114,101,110,116,97,108,0);
       let watcht = 0;
       let pointO = String.fromCharCode(115,95,53,52,95,99,108,111,115,101,115,116,0);
       let greyp: Map<any, any> = new Map([[String.fromCharCode(112,101,114,102,111,114,109,95,107,95,56,52,0),743], [String.fromCharCode(114,97,99,105,110,103,95,104,95,57,54,0),599]]);
       let untick2: Map<any, any> = new Map([[String.fromCharCode(112,117,98,108,105,115,104,97,98,108,101,95,54,95,57,48,0),535], [String.fromCharCode(115,95,57,50,95,116,104,101,0),860], [String.fromCharCode(105,109,105,116,97,116,101,95,57,95,53,57,0),606]]);
      while (baidu3.length >= 3) {
          let cornerU = true;
          let temp2: Map<any, any> = new Map([[String.fromCharCode(109,95,52,53,95,115,98,119,97,105,116,0),String.fromCharCode(110,95,50,51,95,118,97,114,105,110,102,111,0)], [String.fromCharCode(106,95,55,95,119,114,97,112,112,101,100,0),String.fromCharCode(101,118,114,99,95,109,95,49,49,0)]]);
          let rankK = String.fromCharCode(114,95,56,57,95,109,101,114,103,101,100,0);
          let footballs = 5;
         baidu3 = `${(pointO == String.fromCharCode(78,0) ? pointO.length : untick2.size)}`;
         cornerU = rankK.endsWith(`${footballs}`);
         temp2.set(`${footballs}`, 2);
         rankK += `${footballs ^ 2}`;
         break;
      }
         baidu3 = "1";
          let statsb = String.fromCharCode(113,95,56,54,95,103,101,116,0);
          let taiwanm = 5;
         storey = `${(pointO == String.fromCharCode(85,0) ? storey.length : pointO.length)}`;
         statsb = `${taiwanm / 3}`;
         taiwanm &= taiwanm * 2;
          let becomei = 0.0;
          let routerk = false;
          let whatsappz = true;
         storey += `${(1 % (Math.max(7, (routerk ? 3 : 4))))}`;
         becomei /= Math.max(parseFloat(`${parseInt(`${becomei}`)}`), 4);
         routerk = (becomei * becomei) <= 93.24;
         greyp.set(pointO, pointO.length);
      let friendsx = String.fromCharCode(116,112,56,48,100,48,52,57,98,51,0) == baidu3;
      do {
         baidu3 += `${greyp.size >> (Math.min(indexV.length, 2))}`;
         if (friendsx) {
            break;
         }
      } while (friendsx && (!baidu3.startsWith(`${watcht}`)));
         untick2 = new Map([[`${greyp.size}`, baidu3.length & 1]]);
      for (let e = 0; e < 3; e++) {
         pointO += "2";
      }
      for (let r = 0; r < 2; r++) {
         indexV += `${greyp.size}`;
      }
          let telegramT = String.fromCharCode(114,95,49,52,95,98,117,99,107,101,116,115,0);
         baidu3 += `${telegramT.length}`;
      reportt /= Math.max(parseFloat(`${parseInt(`${reportt}`) + zhengpianN.length}`), 3);
      break;
   }
       let transferA = 4;
       let loadingG = 5;
          let notificationm: Map<any, any> = new Map([[String.fromCharCode(97,102,102,101,99,116,95,117,95,53,52,0),false ], [String.fromCharCode(98,95,54,54,95,102,114,97,109,101,119,111,114,107,0),true ]]);
          let desc1 = 0.0;
          let sourceB: Map<any, any> = new Map([[String.fromCharCode(101,115,99,97,112,101,95,117,95,54,57,0),String.fromCharCode(97,100,100,105,116,105,111,110,115,95,114,95,57,57,0)], [String.fromCharCode(112,95,50,57,95,112,105,112,101,0),String.fromCharCode(112,97,97,100,95,55,95,55,52,0)]]);
         loadingG -= parseInt(`${desc1}`);
         notificationm.set(`${notificationm.size}`, sourceB.size * notificationm.size);
         desc1 /= Math.max(parseFloat(`${3 ^ sourceB.size}`), 1);
         transferA >>= Math.min(2, Math.abs(1 - loadingG));
       let sharedK = String.fromCharCode(102,101,116,99,104,101,114,95,50,95,51,51,0);
      let becomeiu = 9453623 >= loadingG;
      do {
         loadingG += sharedK.length | transferA;
         if (becomeiu) {
            break;
         }
      } while (becomeiu && ((transferA + loadingG) < 5 && (5 + loadingG) < 4));
      while ((loadingG % 3) > 4) {
         sharedK = `${1 ^ loadingG}`;
         break;
      }
      let suggestione = 5930831 <= loadingG;
      do {
          let home4 = String.fromCharCode(110,95,57,55,95,112,101,110,99,105,108,0);
          let commentX = 3;
          let umeng8: Array<any> = [143, 248];
         loadingG /= Math.max(transferA, 1);
         home4 += `${commentX - umeng8.length}`;
         commentX <<= Math.min(umeng8.length, 2);
         if (suggestione) {
            break;
         }
      } while (suggestione && ((loadingG | 5) < 1));
      reportt /= Math.max(parseFloat(`${2}`), 5);
    

   for (let o = 0; o < 1; o++) {
      bcopy_qz = "1";
   }
   if (2 >= (h_centerY.length - twitterw)) {
      twitterw <<= Math.min(2, Math.abs(more9.length << (Math.min(topicM.length, 2))));
   }
    

       let searchd = 5.0;
         searchd *= parseInt(`${searchd}`);
       let connections = String.fromCharCode(112,97,116,116,101,114,110,95,98,95,53,53,0);
       let resend_ = String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,115,95,55,95,57,48,0);
         connections = `${parseInt(`${searchd}`)}`;
      zhengpianN += `${logouty.length}`;
      arrowa /= Math.max((parseFloat(`${String.fromCharCode(98,0) == relatedY ? topicM.length : relatedY.length}`)), 3);

    if (formattedLoginValue === "" || loginValueErrMsg !== null) {
      setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
      return;
    }

    try {

   if ((4.55 / (Math.max(5, reportt))) < 5.97 || 1.84 < (arrowa / 4.55)) {
      reportt += parseFloat(`${relatedY.length ^ parseInt(`${arrowa}`)}`);
   }
      zhengpianN += `${parseInt(`${arrowa}`)}`;
      setSubmitting(true);

      arrowa /= Math.max((parseFloat(`${String.fromCharCode(106,0) == topicM ? topicM.length : checkboxA.size}`)), 2);
      reportt -= parseFloat(`${topicM.length}`);

      await THFirebase.signinupUser({
        loginType: loginType === 'email' ? 'EMAIL' : 'SMS',
        email: loginType === 'email' ? loginValue : undefined,
        
        phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + formattedLoginValue : undefined,
        countryId: loginType === 'phone' ? countryPhoneSelected?.country_id : undefined,
        referralCode: referralCode,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      if (!err?.message.includes('验证码已发送')) {

      gmailq += `${(h_centerY == String.fromCharCode(78,0) ? h_centerY.length : bcopy_qz.length)}`;
   if (relatedY == String.fromCharCode(111,0)) {
      logouty += `${(String.fromCharCode(68,0) == gmailq ? smallF.length : gmailq.length)}`;
   }
        setSubmitting(false);

   for (let y = 0; y < 2; y++) {
      arrowa += (parseFloat(`${String.fromCharCode(120,0) == h_centerY ? twitterw : h_centerY.length}`));
   }
      more9 += `${parseInt(`${arrowa}`)}`;
        setLoginValueErrMsg(err.message);

      twitterw *= 1;
   for (let t = 0; t < 1; t++) {
      gmailq += `${more9.length}`;
   }
        return;
      }
    }

    setSubmitting(false);

      gmailq += `${3 & zhengpianN.length}`;
   if (1 >= (checkboxA.size % 1)) {
      checkboxA.set(`${arrowa}`, parseInt(`${arrowa}`) % 1);
   }

    dispatch(hideBottomSheetAction());

   while (1 > more9.length) {
       let relatedW = String.fromCharCode(100,120,116,121,95,121,95,55,51,0);
       let storep = 5.0;
       let moono = 1;
       let infoT = 0.0;
       let darkj = String.fromCharCode(111,95,54,51,95,118,116,114,107,0);
          let sellU = 1.0;
         infoT /= Math.max(parseFloat(`${2 - parseInt(`${storep}`)}`), 2);
         sellU += parseInt(`${sellU}`);
      let selecti = 6990216 >= darkj.length;
      do {
          let sportsi: Array<any> = [118, 366];
          let miniR: Array<any> = [720, 356, 51];
          let bootsplasht = 1.0;
         darkj = `${3 & miniR.length}`;
         sportsi.push(3);
         miniR = [2 / (Math.max(9, parseInt(`${bootsplasht}`)))];
         bootsplasht *= parseFloat(`${parseInt(`${bootsplasht}`) - 1}`);
         if (selecti) {
            break;
         }
      } while (((parseInt(`${infoT}`) + darkj.length) > 5 || (3.64 + infoT) > 2.57) && selecti);
          let tailW = String.fromCharCode(97,95,50,49,95,114,103,98,116,101,115,116,0);
         darkj = `${parseInt(`${infoT}`) ^ relatedW.length}`;
         tailW += `${1 >> (Math.min(3, tailW.length))}`;
       let bingp = 4;
       let whatsappD = 3;
         storep += moono;
      for (let c = 0; c < 1; c++) {
         relatedW = `${darkj.length & 1}`;
      }
         infoT /= Math.max((parseFloat(`${String.fromCharCode(121,0) == darkj ? darkj.length : whatsappD}`)), 2);
      let gesture4 = relatedW.length <= 7069588;
      do {
         relatedW += `${parseInt(`${infoT}`) / (Math.max(2, moono))}`;
         if (gesture4) {
            break;
         }
      } while (gesture4 && (4 == (relatedW.length % 2)));
         moono >>= Math.min(Math.abs(1 - bingp), 4);
      while ((3 | bingp) > 3) {
          let umengY = String.fromCharCode(112,101,114,112,105,120,101,108,95,112,95,53,49,0);
          let w_playery: Map<any, any> = new Map([[String.fromCharCode(116,119,105,108,105,103,104,116,95,114,95,50,48,0),true ], [String.fromCharCode(103,95,50,49,95,116,102,117,101,108,0),false ]]);
          let fast_ = 3.0;
         moono %= Math.max(2, 5);
         umengY = `${parseInt(`${fast_}`) % 2}`;
         w_playery.set(umengY, umengY.length >> (Math.min(4, Math.abs(w_playery.size))));
         fast_ += parseFloat(`${w_playery.size << (Math.min(2, Math.abs(parseInt(`${fast_}`))))}`);
         break;
      }
         darkj += `${2 * whatsappD}`;
      let hejiT = relatedW.length >= 8093353;
      do {
         relatedW = `${relatedW.length}`;
         if (hejiT) {
            break;
         }
      } while ((darkj.length >= 5) && hejiT);
      if (moono == infoT) {
         infoT -= parseFloat(`${parseInt(`${storep}`) >> (Math.min(relatedW.length, 5))}`);
      }
          let shrinkF: Array<any> = [String.fromCharCode(105,95,55,49,95,115,104,97,100,101,114,0), String.fromCharCode(100,109,97,99,95,51,95,53,50,0)];
         whatsappD -= shrinkF.length & whatsappD;
          let malaysiaa = 4.0;
         infoT -= parseFloat(`${darkj.length}`);
         malaysiaa /= Math.max(parseFloat(`${2 % (Math.max(parseInt(`${malaysiaa}`), 3))}`), 4);
      more9 = `${2 | twitterw}`;
      break;
   }
   for (let h = 0; h < 1; h++) {
      smallF = [checkboxA.size];
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
      <TouchableOpacity activeOpacity={0.85}
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
