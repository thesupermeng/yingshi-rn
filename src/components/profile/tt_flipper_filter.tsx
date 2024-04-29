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
  hideLoginAction,
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
import { showToast } from "../../Sports/utility/tt_sans";
import AsyncStorage from "@react-native-async-storage/async-storage";
import tt_humidity_guide from "../../../Umeng/tt_humidity_guide";
import { useDispatch } from "react-redux";
import { addUserAuthState } from "@redux/actions/tt_topon";
import { ttTramini } from "@api";
import { ttFast } from "@models/tt_stations_right";
import { ttGoal } from "@redux/reducers/tt_selected";
import ttDownTick from "../../../AppsFlyer/tt_fastforward";
import TickedIcon from '@static/images/indicatorCast.svg';
import { IS_OTHER_SKIN } from "@utility/tt_trophy_cross";


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
  const [isReadTermNCondition, setReadTermNCondition] = useState(true);

  
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
       let fastx = true;
    let saveL: Array<any> = [613, 936, 774];
    let selected3: Array<any> = [381, 397];
    let placeholderQ: Map<any, any> = new Map([[String.fromCharCode(112,105,101,0),263], [String.fromCharCode(115,121,109,98,111,108,105,99,0),482], [String.fromCharCode(115,101,101,107,105,110,103,0),606]]);
    let less_: Array<any> = [257, 159, 528];
    let singleJ: Array<any> = [4, 592];
    let router_ = false;
    let showY = String.fromCharCode(100,101,110,111,105,115,101,114,0);
      fastx = 36 > placeholderQ.size;
   if (!router_) {
      singleJ = [(2 + (router_ ? 3 : 3))];
   }
   for (let t = 0; t < 1; t++) {
      less_.push(3);
   }
      router_ = (less_.length ^ saveL.length) > 82;

    setloginType('email');

       let whiteX = String.fromCharCode(97,116,114,97,99,100,97,116,97,0);
       let u_imageO: Array<any> = [701, 364];
         u_imageO = [u_imageO.length | whiteX.length];
         u_imageO.push(u_imageO.length);
      while ((whiteX.length * 5) > 5) {
         whiteX = `${whiteX.length}`;
         break;
      }
      if ((4 + whiteX.length) == 1 || (4 + whiteX.length) == 2) {
          let commenty = 2.0;
         u_imageO.push(1 % (Math.max(8, whiteX.length)));
         commenty *= parseInt(`${commenty}`);
      }
         u_imageO.push(whiteX.length);
      for (let j = 0; j < 2; j++) {
         u_imageO.push(u_imageO.length - whiteX.length);
      }
      less_ = [less_.length];
      singleJ.push(singleJ.length);
       let constants8 = 0.0;
      if ((2 / (Math.max(3, constants8))) > 4.96) {
         constants8 += parseInt(`${constants8}`);
      }
      if ((constants8 + constants8) < 4.32) {
         constants8 -= 1 << (Math.min(Math.abs(parseInt(`${constants8}`)), 3));
      }
      while (2.30 >= constants8) {
         constants8 /= Math.max(parseInt(`${constants8}`) + 2, 3);
         break;
      }
      less_.push(placeholderQ.size);
   for (let e = 0; e < 3; e++) {
      less_ = [selected3.length & 2];
   }
    setLoginValue('');

   let firebaseA = router_ ? !router_ : router_;
   do {
       let sendy = 4.0;
       let footbally = 4.0;
       let bodani = 2;
       let lista: Map<any, any> = new Map([[String.fromCharCode(112,97,121,101,101,0),438], [String.fromCharCode(108,105,98,120,109,108,0),469], [String.fromCharCode(100,101,97,108,108,111,99,97,116,101,0),579]]);
      if ((5.77 / (Math.max(3, footbally))) <= 3.94 || 1.24 <= (5.77 * footbally)) {
         footbally += parseFloat(`${parseInt(`${sendy}`) ^ 1}`);
      }
         lista.set(`${footbally}`, parseInt(`${footbally}`));
          let custom6 = true;
          let target8: Map<any, any> = new Map([[String.fromCharCode(113,116,97,98,108,101,115,0),String.fromCharCode(99,97,108,99,117,108,97,116,105,110,103,0)], [String.fromCharCode(115,112,111,116,108,105,103,104,116,0),String.fromCharCode(102,97,115,116,115,115,105,109,0)]]);
          let bufferR: Array<any> = [6, 124];
         sendy *= (parseFloat(`${parseInt(`${footbally}`) & (custom6 ? 5 : 1)}`));
         custom6 = target8.size < 73;
         target8 = new Map([[`${target8.size}`, bufferR.length + 3]]);
         bufferR = [1];
         bodani -= 1 & parseInt(`${sendy}`);
      if (lista.get(`${footbally}`) != null) {
          let sellz = 1.0;
          let iconE = 4;
          let long_goQ: Map<any, any> = new Map([[String.fromCharCode(105,115,115,0),String.fromCharCode(115,116,114,105,114,101,112,108,97,99,101,0)], [String.fromCharCode(118,112,97,105,110,116,101,114,0),String.fromCharCode(101,110,116,105,114,101,108,121,0)], [String.fromCharCode(106,95,51,55,95,109,97,99,114,111,115,0),String.fromCharCode(105,100,101,111,0)]]);
          let liver: Map<any, any> = new Map([[String.fromCharCode(115,119,105,102,116,0),633], [String.fromCharCode(115,101,116,116,105,103,110,115,0),355]]);
         footbally -= parseFloat(`${parseInt(`${footbally}`) & 1}`);
         sellz -= parseFloat(`${2}`);
         iconE ^= 2 * long_goQ.size;
         long_goQ.set(`${iconE}`, iconE);
         liver = new Map([[`${liver.size}`, 2]]);
      }
         footbally /= Math.max(4, parseFloat(`${bodani | 1}`));
      while (2 > (1 / (Math.max(4, bodani)))) {
          let middleP = String.fromCharCode(114,108,111,116,116,105,101,99,111,109,109,111,110,0);
          let twitterk: Array<any> = [993, 729, 495];
          let strings4 = true;
          let d_lockV = 5.0;
          let detail9 = false;
         bodani |= 1;
         middleP += `${1 * middleP.length}`;
         twitterk = [(String.fromCharCode(117,0) == middleP ? middleP.length : twitterk.length)];
         strings4 = detail9;
         d_lockV /= Math.max(3, parseFloat(`${2 % (Math.max(parseInt(`${d_lockV}`), 1))}`));
         break;
      }
          let suggestion2 = String.fromCharCode(101,114,111,100,101,0);
          let logoutT: Array<any> = [981, 178, 248];
          let mailx = 2.0;
         footbally *= parseFloat(`${3}`);
         suggestion2 += `${parseInt(`${mailx}`) / (Math.max(logoutT.length, 3))}`;
         logoutT.push(1);
         mailx += (parseFloat(`${String.fromCharCode(53,0) == suggestion2 ? suggestion2.length : logoutT.length}`));
       let connectiona = 2.0;
       let notificationS = 0.0;
      if ((footbally * 2.7) > 2.30 || 4.14 > (2.7 * sendy)) {
         sendy += parseFloat(`${parseInt(`${notificationS}`) >> (Math.min(1, Math.abs(3)))}`);
      }
      while (5.64 > (sendy - 2)) {
          let productM = 5;
          let single8: Array<any> = [52, 696];
          let history5 = String.fromCharCode(101,120,97,109,112,108,101,115,0);
          let memberj: Array<any> = [36, 777, 368];
          let chinasameK: Map<any, any> = new Map([[String.fromCharCode(110,101,109,111,110,105,99,0),false ], [String.fromCharCode(109,111,99,107,115,0),false ]]);
         notificationS /= Math.max(5, parseFloat(`${parseInt(`${notificationS}`) * parseInt(`${footbally}`)}`));
         productM %= Math.max(3, memberj.length << (Math.min(4, Math.abs(productM))));
         single8.push(1);
         history5 = `${chinasameK.size << (Math.min(Math.abs(3), 4))}`;
         memberj = [(history5 == String.fromCharCode(76,0) ? history5.length : productM)];
         chinasameK.set(history5, 3);
         break;
      }
         bodani ^= parseInt(`${connectiona}`);
      router_ = singleJ.length == selected3.length;
      if (firebaseA) {
         break;
      }
   } while (firebaseA && (!router_));
   while (placeholderQ.size > 3) {
      less_ = [selected3.length];
      break;
   }
       let goal6 = 3;
       let frame_tsj = String.fromCharCode(100,105,114,101,99,116,120,0);
         frame_tsj = "3";
         goal6 >>= Math.min(1, Math.abs(goal6 * frame_tsj.length));
          let settingR = 3.0;
          let search7: Map<any, any> = new Map([[String.fromCharCode(120,104,116,109,108,0),97], [String.fromCharCode(117,112,103,114,97,100,101,115,0),612]]);
          let nalyticsO = 0.0;
         goal6 >>= Math.min(1, Math.abs(parseInt(`${nalyticsO}`) / (Math.max(search7.size, 1))));
         settingR += parseInt(`${settingR}`) | parseInt(`${settingR}`);
         search7 = new Map([[`${settingR}`, parseInt(`${settingR}`)]]);
      if (5 > goal6) {
         goal6 >>= Math.min(1, frame_tsj.length);
      }
          let reportI = 2;
          let sharedU = String.fromCharCode(116,109,99,100,0);
         goal6 |= 1;
         reportI <<= Math.min(3, Math.abs((sharedU == String.fromCharCode(83,0) ? sharedU.length : reportI)));
         goal6 -= 2 << (Math.min(2, Math.abs(goal6)));
      fastx = (46 < ((router_ ? 46 : saveL.length) ^ saveL.length));
       let mbjscommonT: Map<any, any> = new Map([[String.fromCharCode(115,99,101,101,110,0),423], [String.fromCharCode(115,117,112,112,114,101,115,115,105,111,110,0),468], [String.fromCharCode(101,110,117,109,101,114,97,116,105,110,103,0),181]]);
       let modalQ = String.fromCharCode(111,116,104,101,114,119,105,115,101,0);
       let topicX = 3.0;
       let halfH: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,114,115,0),722], [String.fromCharCode(102,95,54,48,0),691]]);
          let telegraml: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,105,98,117,116,101,115,0),String.fromCharCode(117,110,98,108,111,99,107,0)], [String.fromCharCode(114,101,110,100,105,116,105,111,110,115,0),String.fromCharCode(114,117,108,101,0)]]);
          let launcherC = String.fromCharCode(99,97,108,105,110,103,0);
          let activityl = String.fromCharCode(102,101,101,0);
         modalQ = `${halfH.size & 1}`;
         telegraml = new Map([[activityl, 2 / (Math.max(2, activityl.length))]]);
         launcherC += `${telegraml.size + activityl.length}`;
         modalQ += `${mbjscommonT.size - modalQ.length}`;
      if ((4 + mbjscommonT.size) > 2 || (topicX * 2.66) > 1.68) {
         mbjscommonT.set(`${topicX}`, 2);
      }
          let ecopy_mk = 1.0;
          let borderlessK = 3.0;
          let team9 = String.fromCharCode(115,97,100,120,0);
         halfH.set(`${borderlessK}`, 3 & mbjscommonT.size);
         ecopy_mk /= Math.max(5, (parseFloat(`${String.fromCharCode(121,0) == team9 ? team9.length : parseInt(`${ecopy_mk}`)}`)));
         borderlessK /= Math.max((team9 == String.fromCharCode(102,0) ? team9.length : parseInt(`${ecopy_mk}`)), 4);
      let selectedb = 6621198.0 >= topicX;
      do {
          let miniC = String.fromCharCode(115,97,116,100,0);
          let linkg: Array<any> = [928, 61];
          let default_qH = 2;
          let homek = 1.0;
          let androidN = String.fromCharCode(102,105,120,116,117,114,101,0);
         topicX -= 2;
         miniC = `${parseInt(`${homek}`) << (Math.min(3, Math.abs(default_qH)))}`;
         linkg.push((String.fromCharCode(57,0) == miniC ? miniC.length : linkg.length));
         default_qH -= 2;
         homek -= parseFloat(`${androidN.length - 2}`);
         androidN = `${default_qH % 2}`;
         if (selectedb) {
            break;
         }
      } while ((1.58 < (topicX / (Math.max(3.10, 3)))) && selectedb);
       let mbbannery = false;
      for (let h = 0; h < 1; h++) {
          let floaterY = true;
          let configu: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,100,0),813], [String.fromCharCode(111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,0),700], [String.fromCharCode(101,120,101,99,117,116,105,110,103,0),461]]);
         halfH.set(`${modalQ}`, mbjscommonT.size);
         floaterY = !floaterY;
         configu = new Map([[`${configu.size}`, ((floaterY ? 3 : 2) ^ configu.size)]]);
      }
         halfH.set(modalQ, 3);
      singleJ = [less_.length];
    setReferralCode('');

      router_ = saveL.includes(selected3[0]);
       let dataC: Array<any> = [363, 63];
       let androidh = String.fromCharCode(116,97,107,100,115,112,0);
         androidh = `${2 ^ dataC.length}`;
       let canvaso: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,108,97,116,111,110,0),765], [String.fromCharCode(101,118,101,110,108,121,0),609], [String.fromCharCode(109,105,100,115,0),375]]);
       let watchy: Map<any, any> = new Map([[String.fromCharCode(102,111,114,103,101,116,0),472], [String.fromCharCode(112,111,114,116,97,105,116,0),404], [String.fromCharCode(99,104,97,105,110,105,100,0),812]]);
      let googlen = 7259462 >= watchy.size;
      do {
          let tickedx = false;
          let minivodz = String.fromCharCode(110,116,115,99,0);
          let klevinv = 5;
          let langY = 3;
          let themeO = 2;
         watchy.set(minivodz, langY);
         tickedx = 6 < (themeO / (Math.max(1, klevinv)));
         minivodz = `${themeO}`;
         klevinv -= 1;
         langY += klevinv;
         if (googlen) {
            break;
         }
      } while (googlen && (watchy.get(`${dataC.length}`) != null));
      if (1 == (androidh.length - watchy.size)) {
          let countdownE = String.fromCharCode(114,111,117,110,100,105,110,103,0);
          let baiduD = String.fromCharCode(115,117,98,115,116,114,105,110,103,115,0);
         watchy.set(`${dataC.length}`, watchy.size - dataC.length);
         countdownE = `${1 - countdownE.length}`;
         baiduD = `${1 - baiduD.length}`;
      }
      while ((androidh.length & 5) > 3 || 1 > (5 & watchy.size)) {
         watchy.set(`${watchy.size}`, watchy.size);
         break;
      }
         watchy = new Map([[`${canvaso.size}`, watchy.size]]);
      singleJ.push((String.fromCharCode(89,0) == androidh ? dataC.length : androidh.length));
   let searchbar9 = 9663790 <= selected3.length;
   do {
       let constantss: Map<any, any> = new Map([[String.fromCharCode(114,100,99,111,115,116,0),404], [String.fromCharCode(115,117,98,118,97,108,117,101,0),330], [String.fromCharCode(99,97,112,105,116,97,108,115,0),718]]);
       let notificationr = 1.0;
       let searchbarr = String.fromCharCode(97,120,105,120,0);
         constantss = new Map([[`${constantss.size}`, constantss.size]]);
         searchbarr += `${parseInt(`${notificationr}`)}`;
      if ((constantss.size / 4) < 2) {
         notificationr -= parseFloat(`${searchbarr.length}`);
      }
          let stepi = 0.0;
          let episodesh = String.fromCharCode(118,101,114,105,102,105,97,98,108,101,0);
         searchbarr = `${constantss.size}`;
         stepi *= parseFloat(`${1}`);
         episodesh += `${parseInt(`${stepi}`) << (Math.min(Math.abs(3), 2))}`;
         notificationr -= parseFloat(`${parseInt(`${notificationr}`) & constantss.size}`);
         notificationr *= parseFloat(`${searchbarr.length | 2}`);
          let redirectV: Array<any> = [138, 510, 371];
         constantss.set(`${notificationr}`, parseInt(`${notificationr}`) & constantss.size);
         redirectV.push(redirectV.length / (Math.max(redirectV.length, 1)));
      for (let m = 0; m < 2; m++) {
         searchbarr = `${parseInt(`${notificationr}`)}`;
      }
      for (let l = 0; l < 1; l++) {
         constantss = new Map([[`${constantss.size}`, (String.fromCharCode(87,0) == searchbarr ? searchbarr.length : constantss.size)]]);
      }
      selected3 = [searchbarr.length >> (Math.min(Math.abs(3), 3))];
      if (searchbar9) {
         break;
      }
   } while (searchbar9 && (1 == (selected3.length * saveL.length)));
   if (1 > showY.length) {
      showY += `${showY.length}`;
   }
    setLoginValueErrMsg(null);

      showY = `${saveL.length}`;
      less_ = [2];
      router_ = singleJ.length < 99;
       let long_lhP = 1;
       let checkboxi: Array<any> = [516, 718];
         checkboxi.push(long_lhP + checkboxi.length);
      if (4 > long_lhP) {
         long_lhP &= checkboxi.length;
      }
       let humidityw = false;
       let interstitialp = true;
       let feedbackY = String.fromCharCode(107,101,121,0);
      let layoutR = long_lhP <= 8271014;
      do {
         long_lhP %= Math.max(3, ((humidityw ? 5 : 2) * 2));
         if (layoutR) {
            break;
         }
      } while (layoutR && (long_lhP < 5 || (5 - long_lhP) < 2));
         long_lhP += ((interstitialp ? 1 : 4));
      selected3.push(placeholderQ.size / (Math.max(less_.length, 9)));
    setReferralCodeErrMsg(null);

      less_.push(3 ^ singleJ.length);
   if (3 < showY.length || !router_) {
      showY += `${selected3.length}`;
   }
      singleJ.push(3 ^ singleJ.length);
   while (!fastx) {
      fastx = (75 <= (selected3.length | (!router_ ? selected3.length : 75)));
      break;
   }
    setReadTermNCondition(false);

   for (let o = 0; o < 2; o++) {
      saveL = [less_.length ^ selected3.length];
   }
      less_.push(selected3.length % 1);
   for (let z = 0; z < 3; z++) {
      fastx = !router_ || saveL.length > 68;
   }
      router_ = !fastx;

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
       let fastw = String.fromCharCode(100,101,99,108,0);
    let leftu = 4.0;
    let orangeG = String.fromCharCode(100,101,98,97,110,100,0);
    let trashB = String.fromCharCode(117,110,98,105,110,100,0);
    let controlso = String.fromCharCode(100,111,108,98,121,0);
    let networkA = 4.0;
    let goalK = true;
    let bellB = 5;
    let analyticsT = String.fromCharCode(109,121,113,114,0);
    let historyf = String.fromCharCode(99,97,109,101,108,108,105,97,0);
    let alertc = String.fromCharCode(105,110,115,101,114,116,105,111,110,0);
    let rulesW = 4.0;
      goalK = controlso.length > 56;
       let forwardv: Array<any> = [974, 682, 459];
       let calendarH = 3;
      for (let x = 0; x < 3; x++) {
         calendarH /= Math.max(forwardv.length - calendarH, 4);
      }
      for (let c = 0; c < 2; c++) {
         forwardv = [calendarH + 2];
      }
      orangeG += `${forwardv.length ^ orangeG.length}`;
   for (let b = 0; b < 1; b++) {
       let combined0 = String.fromCharCode(101,108,97,112,115,101,100,0);
       let reportp: Array<any> = [743, 622, 977];
       let rewardvideor: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,101,116,0),219], [String.fromCharCode(107,105,108,111,98,121,116,101,0),339], [String.fromCharCode(101,109,111,106,105,115,0),999]]);
       let desca = 3.0;
         combined0 += "3";
         rewardvideor.set(`${desca}`, parseInt(`${desca}`) << (Math.min(reportp.length, 3)));
      let typesS = combined0 == String.fromCharCode(55,115,102,0);
      do {
         combined0 += `${reportp.length & rewardvideor.size}`;
         if (typesS) {
            break;
         }
      } while ((5 <= (2 * combined0.length) || 2 <= (combined0.length * 2)) && typesS);
         reportp = [reportp.length];
      if (!Array.from(rewardvideor.values()).includes(desca)) {
          let moduleY = String.fromCharCode(99,111,108,108,101,99,116,105,98,108,101,0);
          let sell1: Map<any, any> = new Map([[String.fromCharCode(98,111,116,115,0),343], [String.fromCharCode(98,97,110,110,101,114,0),804], [String.fromCharCode(115,104,97,114,105,110,103,0),832]]);
          let button5: Array<any> = [String.fromCharCode(112,117,98,101,120,112,0), String.fromCharCode(109,112,100,98,0)];
          let castingy = String.fromCharCode(116,104,114,101,97,100,109,101,115,115,97,103,101,0);
         desca -= rewardvideor.size % (Math.max(button5.length, 10));
         moduleY = `${castingy.length - sell1.size}`;
         sell1 = new Map([[moduleY, castingy.length ^ 2]]);
         button5.push((String.fromCharCode(103,0) == castingy ? sell1.size : castingy.length));
      }
         reportp = [combined0.length / 1];
      while (5 == (reportp.length >> (Math.min(Math.abs(3), 3)))) {
         rewardvideor = new Map([[`${rewardvideor.size}`, 2]]);
         break;
      }
      if (!combined0.endsWith(`${reportp.length}`)) {
         reportp.push(rewardvideor.size);
      }
         combined0 = "1";
      let materialN = reportp.length <= 6333166;
      do {
          let recommendationO = String.fromCharCode(112,114,111,112,101,114,121,0);
          let actionz = 3.0;
          let anytimeu = String.fromCharCode(99,108,111,99,107,119,105,115,101,0);
         reportp.push(2 % (Math.max(5, parseInt(`${desca}`))));
         recommendationO += "1";
         actionz *= recommendationO.length;
         anytimeu = `${anytimeu.length}`;
         if (materialN) {
            break;
         }
      } while (materialN && (2 <= (reportp.length - rewardvideor.size)));
      while ((reportp.length / 1) >= 5) {
         reportp = [parseInt(`${desca}`)];
         break;
      }
         combined0 = "2";
      controlso += "2";
   }
   if (!trashB.endsWith(`${orangeG.length}`)) {
       let sportsa = String.fromCharCode(110,111,114,111,117,110,100,0);
       let window_2lb = String.fromCharCode(102,105,108,101,114,101,97,100,115,116,114,101,97,109,0);
      while (!sportsa.endsWith(`${window_2lb.length}`)) {
          let inviteh = false;
         sportsa = `${(String.fromCharCode(69,0) == window_2lb ? window_2lb.length : (inviteh ? 5 : 1))}`;
         break;
      }
      if (!sportsa.endsWith(window_2lb)) {
         sportsa = "3";
      }
      while (window_2lb.length == sportsa.length) {
          let package_j53: Map<any, any> = new Map([[String.fromCharCode(112,117,98,108,105,115,104,101,114,115,0),595], [String.fromCharCode(115,101,99,111,110,100,97,114,121,0),975], [String.fromCharCode(112,117,98,107,101,121,0),364]]);
          let headerT = String.fromCharCode(111,114,105,103,105,110,0);
         window_2lb = "3";
         package_j53 = new Map([[`${package_j53.size}`, 2 << (Math.min(1, headerT.length))]]);
         headerT += `${package_j53.size % (Math.max(headerT.length, 4))}`;
         break;
      }
      for (let b = 0; b < 1; b++) {
          let transferI = String.fromCharCode(105,110,116,114,111,0);
         window_2lb += `${transferI.length >> (Math.min(Math.abs(3), 2))}`;
      }
      let bannery = 8154121 >= sportsa.length;
      do {
         sportsa += `${sportsa.length}`;
         if (bannery) {
            break;
         }
      } while ((5 > sportsa.length) && bannery);
         sportsa = `${(window_2lb == String.fromCharCode(48,0) ? window_2lb.length : sportsa.length)}`;
      orangeG = `${(String.fromCharCode(51,0) == trashB ? trashB.length : sportsa.length)}`;
   }
      fastw = `${bellB}`;
   for (let f = 0; f < 2; f++) {
       let umengU = String.fromCharCode(121,97,109,97,104,97,0);
       let hejiM = String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,105,110,103,0);
       let condensedJ: Array<any> = [990, 158];
          let agreementu = String.fromCharCode(106,115,105,109,100,101,120,116,0);
         hejiM += "3";
         agreementu = `${agreementu.length}`;
         condensedJ.push(umengU.length | hejiM.length);
      if (!hejiM.includes(`${umengU.length}`)) {
         hejiM += `${(hejiM == String.fromCharCode(102,0) ? hejiM.length : condensedJ.length)}`;
      }
         hejiM += `${1 % (Math.max(7, umengU.length))}`;
         hejiM += `${hejiM.length}`;
         umengU = `${hejiM.length / (Math.max(5, umengU.length))}`;
          let e_centerA = 3.0;
          let becomer = 1.0;
         hejiM += `${3 ^ hejiM.length}`;
         e_centerA /= Math.max(5, parseFloat(`${parseInt(`${becomer}`)}`));
         hejiM += `${umengU.length}`;
      while (umengU.length <= hejiM.length) {
         hejiM = `${umengU.length}`;
         break;
      }
      bellB /= Math.max(controlso.length, 2);
   }
   let basketball5 = String.fromCharCode(53,57,103,122,0) == trashB;
   do {
       let searchj = String.fromCharCode(115,117,112,112,111,114,116,101,100,0);
       let servicev = 3;
       let gesturesE = 0.0;
       let shrink4: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,97,98,108,101,0),750], [String.fromCharCode(118,105,115,97,0),726]]);
       let placeholder8 = String.fromCharCode(116,111,107,101,110,116,120,0);
         servicev += parseInt(`${gesturesE}`);
       let searchN = 4;
       let matchest = 5;
         shrink4 = new Map([[`${searchN}`, 3 + searchN]]);
      if (3 >= (matchest / (Math.max(servicev, 10))) || (matchest / (Math.max(servicev, 7))) >= 3) {
         servicev -= 1 + placeholder8.length;
      }
      for (let o = 0; o < 3; o++) {
         gesturesE /= Math.max(parseFloat(`${placeholder8.length / 1}`), 4);
      }
      let helperI = 9690271 >= servicev;
      do {
         servicev %= Math.max(5, placeholder8.length);
         if (helperI) {
            break;
         }
      } while (((searchN << (Math.min(Math.abs(servicev), 5))) >= 1) && helperI);
          let robotoh = String.fromCharCode(114,111,102,105,108,101,0);
          let crossm: Array<any> = [726, 948, 168];
          let mbnativeadvancedG = 3.0;
         shrink4.set(robotoh, 3);
         robotoh = `${crossm.length}`;
         crossm.push(2);
         mbnativeadvancedG /= Math.max(3, parseFloat(`${crossm.length ^ 3}`));
          let mutedq = true;
          let applicationc: Array<any> = [539, 244];
          let appleC = true;
         searchj = `${(matchest & (mutedq ? 4 : 4))}`;
         mutedq = appleC;
         applicationc.push(applicationc.length * 2);
         shrink4.set(`${gesturesE}`, shrink4.size - parseInt(`${gesturesE}`));
      if (shrink4.get(`${gesturesE}`) != null) {
          let telegramt = 3;
          let benefitp = String.fromCharCode(105,115,111,112,101,110,113,117,111,116,101,0);
          let mbbannerO = false;
          let areaB: Array<any> = [String.fromCharCode(102,114,101,113,115,0), String.fromCharCode(97,118,117,105,0)];
         shrink4 = new Map([[benefitp, parseInt(`${gesturesE}`) | 3]]);
         telegramt *= (2 ^ (mbbannerO ? 1 : 3));
         benefitp += `${telegramt}`;
         mbbannerO = !mbbannerO;
         areaB.push(areaB.length & telegramt);
      }
       let videocommonL = 1.0;
       let googleV = String.fromCharCode(107,105,116,0);
       let j_unlockr = String.fromCharCode(115,98,99,100,101,99,0);
      for (let h = 0; h < 1; h++) {
         searchN *= parseInt(`${gesturesE}`);
      }
         matchest |= parseInt(`${gesturesE}`) ^ shrink4.size;
      trashB = `${parseInt(`${networkA}`)}`;
      if (basketball5) {
         break;
      }
   } while (basketball5 && ((3 >> (Math.min(5, Math.abs(bellB)))) <= 3 && (trashB.length >> (Math.min(Math.abs(3), 3))) <= 1));
      trashB = `${1 + orangeG.length}`;
   if (bellB > 5) {
      leftu /= Math.max(parseFloat(`${parseInt(`${leftu}`) | orangeG.length}`), 5);
   }
   if (fastw.length >= parseInt(`${networkA}`)) {
      networkA *= 1;
   }
   for (let t = 0; t < 1; t++) {
       let securityW = 3;
       let typesx = 3;
       let halfd: Map<any, any> = new Map([[String.fromCharCode(114,101,118,111,107,105,110,103,0),String.fromCharCode(111,109,101,103,97,0)], [String.fromCharCode(112,111,108,105,99,101,0),String.fromCharCode(115,121,110,111,110,121,109,0)]]);
       let connectionk: Map<any, any> = new Map([[String.fromCharCode(101,99,116,97,110,103,108,101,0),true ], [String.fromCharCode(97,100,100,114,115,0),true ]]);
       let reducerJ: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,112,101,0),false ], [String.fromCharCode(101,110,99,111,100,101,105,110,116,114,97,0),false ]]);
      for (let w = 0; w < 2; w++) {
          let matchesn = String.fromCharCode(100,97,118,115,0);
          let utilsS = true;
          let cornerp = String.fromCharCode(114,108,111,116,116,105,101,99,111,109,109,111,110,95,108,95,55,52,0);
          let sheetU = String.fromCharCode(97,108,112,104,97,98,101,116,115,0);
          let fileR: Array<any> = [422, 791];
         reducerJ.set(`${fileR.length}`, halfd.size >> (Math.min(Math.abs(1), 4)));
         matchesn += `${(2 | (utilsS ? 4 : 3))}`;
         utilsS = 13 < sheetU.length;
         cornerp += "2";
         sheetU = `${((utilsS ? 3 : 4) >> (Math.min(cornerp.length, 2)))}`;
         fileR = [sheetU.length];
      }
         halfd.set(`${halfd.size}`, connectionk.size ^ halfd.size);
      let package_buN = 6015298 >= typesx;
      do {
          let filter8 = String.fromCharCode(114,115,97,122,0);
          let downloadingm = String.fromCharCode(100,108,105,100,120,0);
          let stepF = 3.0;
         typesx ^= parseInt(`${stepF}`);
         filter8 = "1";
         downloadingm = `${downloadingm.length / 3}`;
         stepF += (String.fromCharCode(55,0) == filter8 ? filter8.length : downloadingm.length);
         if (package_buN) {
            break;
         }
      } while (package_buN && (1 == (halfd.size - 1) || 4 == (1 - halfd.size)));
      let gestureb = 7438570 >= connectionk.size;
      do {
          let xvodQ = 0.0;
         connectionk.set(`${typesx}`, typesx);
         xvodQ *= parseInt(`${xvodQ}`);
         if (gestureb) {
            break;
         }
      } while ((5 == (4 ^ connectionk.size) || (4 ^ reducerJ.size) == 1) && gestureb);
      if (Array.from(halfd.values()).includes(securityW)) {
          let becomex = 0.0;
          let fastforwardj: Map<any, any> = new Map([[String.fromCharCode(102,116,118,112,110,111,100,101,0),String.fromCharCode(106,105,116,116,101,114,0)], [String.fromCharCode(105,110,118,105,116,97,116,105,111,110,115,0),String.fromCharCode(115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,0)]]);
         halfd.set(`${securityW}`, securityW / 3);
         becomex += parseFloat(`${fastforwardj.size}`);
         fastforwardj = new Map([[`${fastforwardj.size}`, 1 | parseInt(`${becomex}`)]]);
      }
      for (let u = 0; u < 3; u++) {
         typesx *= 2 ^ halfd.size;
      }
         reducerJ.set(`${connectionk.size}`, 1);
      for (let a = 0; a < 1; a++) {
         halfd.set(`${reducerJ.size}`, reducerJ.size & connectionk.size);
      }
      while ((connectionk.size << (Math.min(1, Math.abs(reducerJ.size)))) < 3 && 3 < (connectionk.size << (Math.min(1, Math.abs(reducerJ.size))))) {
         connectionk = new Map([[`${halfd.size}`, 3 << (Math.min(3, Math.abs(typesx)))]]);
         break;
      }
      if (5 == (typesx & 4) && (4 & halfd.size) == 1) {
         typesx /= Math.max(2, 1);
      }
      for (let w = 0; w < 1; w++) {
         typesx %= Math.max(2 * connectionk.size, 3);
      }
      while ((reducerJ.size - 3) <= 4) {
         reducerJ.set(`${typesx}`, typesx);
         break;
      }
         typesx *= reducerJ.size;
          let filed0 = 3.0;
          let eactT = 1.0;
          let selectiond = String.fromCharCode(115,101,109,105,98,111,108,100,0);
         typesx %= Math.max(1, parseInt(`${filed0}`));
         filed0 *= parseFloat(`${parseInt(`${eactT}`) % 1}`);
         eactT *= parseFloat(`${parseInt(`${eactT}`) >> (Math.min(selectiond.length, 5))}`);
         selectiond += `${parseInt(`${eactT}`) & selectiond.length}`;
         typesx %= Math.max(4, 3 - securityW);
      bellB >>= Math.min(5, Math.abs(orangeG.length | 2));
   }
   for (let h = 0; h < 3; h++) {
      orangeG += "2";
   }
   let zoomu = 8999227.0 <= leftu;
   do {
      leftu /= Math.max(5, parseFloat(`${3}`));
      if (zoomu) {
         break;
      }
   } while ((1.69 == leftu) && zoomu);
   let downloadG = 8259650.0 >= networkA;
   do {
      networkA += controlso.length;
      if (downloadG) {
         break;
      }
   } while ((networkA <= 2.3) && downloadG);
   while ((controlso.length % 2) == 4) {
      controlso += `${(String.fromCharCode(49,0) == controlso ? (goalK ? 2 : 3) : controlso.length)}`;
      break;
   }
      bellB ^= orangeG.length << (Math.min(trashB.length, 2));
      goalK = 39.73 > leftu;

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
       let xvodg = 3;
    let pagination3 = 5.0;
    let header1: Array<any> = [String.fromCharCode(116,121,112,101,115,101,116,116,101,114,0), String.fromCharCode(100,105,115,109,105,115,115,97,108,0)];
    let penaltys = 2.0;
    let statisticsK = 5.0;
    let castingJ = 4.0;
    let serviceJ = String.fromCharCode(116,114,97,110,0);
    let analyticsB = 3.0;
    let change8 = 5.0;
    let unreadc: Array<any> = [651, 346, 83];
   for (let m = 0; m < 2; m++) {
       let become4 = String.fromCharCode(108,97,110,100,115,99,97,112,101,0);
       let shirtC = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,98,108,101,0);
       let dycreators = String.fromCharCode(106,111,117,114,110,97,108,110,97,109,101,0);
       let background8 = 4.0;
       let kuaishoum = 4.0;
       let fastforwardb = String.fromCharCode(103,101,116,99,117,116,0);
       let kuaishouy = String.fromCharCode(99,99,111,117,110,116,0);
         dycreators += "1";
      let playercommon0 = shirtC == String.fromCharCode(100,118,100,98,50,0);
      do {
         shirtC += `${parseInt(`${background8}`)}`;
         if (playercommon0) {
            break;
         }
      } while ((shirtC.includes(`${fastforwardb.length}`)) && playercommon0);
      for (let h = 0; h < 2; h++) {
         background8 += parseInt(`${background8}`) << (Math.min(Math.abs(3), 3));
      }
      let liveH = kuaishouy.length >= 4912528;
      do {
         kuaishouy = "3";
         if (liveH) {
            break;
         }
      } while ((4 < fastforwardb.length) && liveH);
         dycreators += `${kuaishouy.length % (Math.max(4, fastforwardb.length))}`;
      for (let p = 0; p < 2; p++) {
          let auto_7r = 3.0;
          let matchesV: Array<any> = [312, 876, 293];
          let placeholderQ = String.fromCharCode(102,111,117,114,116,104,0);
          let networkJ: Array<any> = [658, 167, 584];
          let frame_hR = String.fromCharCode(102,105,103,104,116,101,114,115,0);
         dycreators += "1";
         auto_7r /= Math.max(2, parseInt(`${auto_7r}`));
         matchesV = [networkJ.length];
         placeholderQ += `${3 * matchesV.length}`;
         networkJ = [matchesV.length * parseInt(`${auto_7r}`)];
         frame_hR += `${networkJ.length % (Math.max(frame_hR.length, 7))}`;
      }
      let chinaP = 8915961 <= dycreators.length;
      do {
         dycreators += `${fastforwardb.length}`;
         if (chinaP) {
            break;
         }
      } while (chinaP && (!dycreators.includes(`${background8}`)));
      let componentv = shirtC.length <= 9798941;
      do {
         shirtC = `${become4.length % (Math.max(5, kuaishouy.length))}`;
         if (componentv) {
            break;
         }
      } while ((become4.length >= 1) && componentv);
       let flyerc = String.fromCharCode(100,102,115,116,0);
       let singleD = String.fromCharCode(112,97,116,116,101,114,110,0);
      let redirect5 = kuaishoum >= 5653675.0;
      do {
          let forwardp = 4.0;
         kuaishoum *= fastforwardb.length;
         forwardp -= parseFloat(`${parseInt(`${forwardp}`) | 1}`);
         if (redirect5) {
            break;
         }
      } while ((kuaishoum > 2.82) && redirect5);
      for (let i = 0; i < 1; i++) {
          let areaL = String.fromCharCode(116,111,116,97,108,108,121,0);
          let time_q1M = String.fromCharCode(105,110,115,116,97,108,108,115,0);
          let connectiond = String.fromCharCode(114,103,101,110,0);
          let zhubox = 2;
         kuaishouy += `${time_q1M.length}`;
         areaL += `${connectiond.length & zhubox}`;
         time_q1M = `${(String.fromCharCode(52,0) == connectiond ? areaL.length : connectiond.length)}`;
         zhubox *= zhubox;
      }
      let black2 = 8122333.0 <= background8;
      do {
         background8 -= parseInt(`${kuaishoum}`);
         if (black2) {
            break;
         }
      } while (((singleD.length & 2) < 5) && black2);
          let grayV: Map<any, any> = new Map([[String.fromCharCode(98,111,117,110,100,97,114,121,0),true ], [String.fromCharCode(116,114,105,97,110,103,117,108,97,116,105,111,110,0),false ]]);
          let nativeex9 = 4;
         singleD = `${become4.length / 1}`;
         grayV.set(`${nativeex9}`, nativeex9 / (Math.max(4, grayV.size)));
          let vietnamn = String.fromCharCode(114,101,100,101,116,101,99,116,0);
          let orangeb = String.fromCharCode(114,101,97,108,105,102,121,0);
         flyerc += `${kuaishouy.length}`;
         vietnamn += `${vietnamn.length}`;
         orangeb = `${vietnamn.length}`;
      statisticsK /= Math.max(parseFloat(`${3}`), 5);
   }

    if (isSubmitting) return;

       let related2 = 2.0;
       let suggestionb: Map<any, any> = new Map([[String.fromCharCode(110,111,110,0),false ], [String.fromCharCode(108,111,119,101,114,99,97,115,101,100,95,55,95,53,51,0),true ], [String.fromCharCode(98,105,116,114,118,0),true ]]);
       let readV = String.fromCharCode(97,108,105,103,110,101,114,0);
      for (let p = 0; p < 1; p++) {
         readV += `${suggestionb.size}`;
      }
      if (1 < readV.length) {
         readV += `${parseInt(`${related2}`)}`;
      }
      while (5.38 < (related2 / (Math.max(parseFloat(`${suggestionb.size}`), 7))) || 5 < (parseInt(`${related2}`) / (Math.max(suggestionb.size, 4)))) {
          let round9: Map<any, any> = new Map([[String.fromCharCode(108,97,116,109,0),String.fromCharCode(100,101,101,112,108,105,110,107,0)], [String.fromCharCode(114,116,112,115,101,110,100,101,114,0),String.fromCharCode(98,105,116,115,116,114,0)]]);
         related2 *= parseFloat(`${3 & parseInt(`${related2}`)}`);
         round9 = new Map([[`${round9.size}`, 1 & round9.size]]);
         break;
      }
         related2 *= parseFloat(`${1 & suggestionb.size}`);
      if (3 == (1 * suggestionb.size) && 3 == (1 * readV.length)) {
         suggestionb = new Map([[readV, readV.length >> (Math.min(Math.abs(3), 3))]]);
      }
          let foreground_ = String.fromCharCode(110,111,110,122,101,114,111,0);
          let pressurey = String.fromCharCode(103,105,102,115,0);
         suggestionb = new Map([[foreground_, pressurey.length]]);
       let telegramF = true;
       let sigmob5 = true;
       let progress7: Map<any, any> = new Map([[String.fromCharCode(99,104,97,114,99,111,110,118,0),727], [String.fromCharCode(109,101,116,97,108,0),31]]);
       let auto_k7C: Map<any, any> = new Map([[String.fromCharCode(104,97,100,0),true ], [String.fromCharCode(109,118,101,120,0),false ]]);
         related2 -= (parseFloat(`${progress7.size & (sigmob5 ? 1 : 5)}`));
      statisticsK /= Math.max(parseFloat(`${header1.length}`), 4);

    if (isReadTermNCondition == false) {

      analyticsB /= Math.max(2, parseInt(`${penaltys}`));
      showToast('请勾选用户协议和隐私协议');

      statisticsK -= parseFloat(`${1}`);
      return;

       let mathV = String.fromCharCode(117,110,114,101,115,111,108,118,97,98,108,101,0);
      while (2 <= mathV.length || 2 <= mathV.length) {
          let recommendation9: Array<any> = [535, 612];
          let gemfileM: Array<any> = [197, 799, 562];
          let nalytics1 = 3;
         mathV += "3";
         recommendation9.push(nalytics1 | 1);
         gemfileM = [2];
         nalytics1 ^= 2 >> (Math.min(4, gemfileM.length));
         break;
      }
         mathV = `${mathV.length}`;
      let window_cma = mathV.length >= 5651225;
      do {
         mathV += `${(mathV == String.fromCharCode(75,0) ? mathV.length : mathV.length)}`;
         if (window_cma) {
            break;
         }
      } while ((2 <= mathV.length) && window_cma);
      serviceJ = `${(String.fromCharCode(81,0) == mathV ? mathV.length : header1.length)}`;
    }

    let userInfo;

   while (header1.length > 3) {
       let twitters: Map<any, any> = new Map([[String.fromCharCode(111,98,116,97,105,110,101,114,0),String.fromCharCode(108,105,98,103,115,109,0)], [String.fromCharCode(99,102,104,100,0),String.fromCharCode(101,118,101,114,121,0)], [String.fromCharCode(110,111,110,101,109,112,116,121,0),String.fromCharCode(100,101,99,111,114,114,0)]]);
       let description_fP = 5;
       let anewinterstitial5 = 0.0;
       let androidE: Map<any, any> = new Map([[String.fromCharCode(98,97,114,114,101,116,116,0),true ], [String.fromCharCode(101,108,98,103,0),false ], [String.fromCharCode(99,117,114,118,101,115,0),false ]]);
      if (androidE.size >= 1) {
         anewinterstitial5 /= Math.max(twitters.size / 2, 2);
      }
       let roundK = String.fromCharCode(118,105,115,105,98,108,101,0);
       let helperG = String.fromCharCode(100,101,99,101,108,101,114,97,116,105,110,103,0);
          let gradlewv = String.fromCharCode(100,105,115,112,108,97,121,101,100,0);
          let configm = String.fromCharCode(111,95,51,56,95,116,111,117,116,0);
         description_fP >>= Math.min(Math.abs(1), 4);
         gradlewv = `${(gradlewv == String.fromCharCode(76,0) ? configm.length : gradlewv.length)}`;
         configm += `${gradlewv.length}`;
      if (2 == (3 << (Math.min(4, roundK.length))) || (description_fP << (Math.min(Math.abs(3), 2))) == 2) {
         description_fP <<= Math.min(3, Math.abs(parseInt(`${anewinterstitial5}`) & roundK.length));
      }
         twitters = new Map([[`${description_fP}`, description_fP * roundK.length]]);
         roundK = `${androidE.size >> (Math.min(Math.abs(1), 1))}`;
         twitters.set(`${twitters.size}`, androidE.size % (Math.max(1, 8)));
      if (2.61 > (anewinterstitial5 * 5.53)) {
         anewinterstitial5 /= Math.max(description_fP - twitters.size, 2);
      }
          let baidu5 = String.fromCharCode(109,101,115,104,101,115,0);
          let dicet = 5.0;
          let floaterm = 5.0;
         androidE = new Map([[roundK, baidu5.length]]);
         baidu5 += `${parseInt(`${dicet}`)}`;
         floaterm += parseInt(`${dicet}`);
         anewinterstitial5 /= Math.max(parseInt(`${anewinterstitial5}`), 2);
         helperG = `${(String.fromCharCode(54,0) == roundK ? roundK.length : androidE.size)}`;
      for (let g = 0; g < 3; g++) {
         anewinterstitial5 -= androidE.size % (Math.max(5, helperG.length));
      }
      pagination3 -= parseFloat(`${parseInt(`${castingJ}`)}`);
      break;
   }

    try {

      header1 = [parseInt(`${statisticsK}`)];
      await GoogleSignin.hasPlayServices();

   let user6 = analyticsB >= 7330165.0;
   do {
      analyticsB += parseInt(`${statisticsK}`);
      if (user6) {
         break;
      }
   } while (user6 && (1.77 <= (header1.length + analyticsB) || 5 <= (parseInt(`${analyticsB}`) + header1.length)));

      if (await GoogleSignin.isSignedIn()) {

   if (5.67 >= (2.55 - statisticsK)) {
      statisticsK += parseFloat(`${header1.length / 2}`);
   }
        userInfo = await GoogleSignin.getCurrentUser();
      } else {

      pagination3 *= parseFloat(`${parseInt(`${castingJ}`)}`);
        userInfo = await GoogleSignin.signIn();
      }

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        
      } else if (error.code === statusCodes.IN_PROGRESS) {

   let sentryt = xvodg <= 7261196;
   do {
       let prediction5: Map<any, any> = new Map([[String.fromCharCode(111,110,101,112,97,115,115,0),699], [String.fromCharCode(109,111,100,117,108,117,115,0),812], [String.fromCharCode(112,114,101,102,101,114,115,0),648]]);
       let short_kN = 4.0;
       let handlere = 4.0;
       let update_9fb = String.fromCharCode(100,101,110,111,105,115,101,0);
         update_9fb = `${2 + parseInt(`${handlere}`)}`;
      let emojiQ = short_kN <= 5856993.0;
      do {
          let playlistb = String.fromCharCode(110,117,109,101,114,105,99,97,108,0);
          let termsU = String.fromCharCode(111,112,101,110,115,108,101,115,0);
         short_kN -= termsU.length * 3;
         playlistb += `${playlistb.length}`;
         termsU = `${playlistb.length}`;
         if (emojiQ) {
            break;
         }
      } while ((5.94 <= (short_kN / (Math.max(2.7, 1))) || 5.14 <= (short_kN / (Math.max(2.7, 5)))) && emojiQ);
      if (handlere == short_kN) {
         short_kN /= Math.max(2, parseInt(`${handlere}`));
      }
         handlere += parseFloat(`${prediction5.size >> (Math.min(Math.abs(2), 3))}`);
      if ((update_9fb.length % (Math.max(4, 3))) > 5 && (update_9fb.length / 4) > 3) {
          let kick0 = false;
          let huawei0: Map<any, any> = new Map([[String.fromCharCode(99,108,111,115,101,100,0),430], [String.fromCharCode(118,101,114,98,97,116,105,109,0),48]]);
          let xvodx = 3;
          let injurys: Map<any, any> = new Map([[String.fromCharCode(108,97,118,102,117,116,105,108,115,0),700], [String.fromCharCode(99,111,108,108,101,99,116,111,114,0),712], [String.fromCharCode(102,105,108,116,101,114,102,110,0),473]]);
          let tumbnailp = String.fromCharCode(98,105,116,109,97,115,107,0);
         update_9fb += `${xvodx}`;
         kick0 = (huawei0.size / (Math.max(3, tumbnailp.length))) < 100;
         huawei0.set(`${kick0}`, 1);
         xvodx <<= Math.min(2, Math.abs(huawei0.size - injurys.size));
         injurys.set(tumbnailp, huawei0.size);
      }
         handlere += parseFloat(`${prediction5.size ^ update_9fb.length}`);
          let helperW = 4.0;
         handlere /= Math.max(parseFloat(`${parseInt(`${helperW}`)}`), 1);
      while (3.94 >= (handlere / (Math.max(parseFloat(`${update_9fb.length}`), 1)))) {
         handlere += parseFloat(`${1 / (Math.max(6, update_9fb.length))}`);
         break;
      }
      xvodg -= parseInt(`${pagination3}`) / (Math.max(header1.length, 2));
      if (sentryt) {
         break;
      }
   } while (((castingJ + 4.22) > 5.59) && sentryt);
        

       let loginY = String.fromCharCode(114,101,116,114,121,0);
       let flyerm = 1.0;
       let anewinterstitialF = 0.0;
       let combinedl = true;
       let anythink2 = true;
          let phones = String.fromCharCode(115,101,99,116,105,110,115,0);
          let penaltyi = 1.0;
          let routerw = 0.0;
         anythink2 = parseInt(`${penaltyi}`) == phones.length;
         phones += `${parseInt(`${routerw}`)}`;
         penaltyi /= Math.max(4, parseFloat(`${parseInt(`${routerw}`) ^ 3}`));
      let changel = 8399872.0 >= flyerm;
      do {
          let basketballs = true;
          let pingb = String.fromCharCode(106,112,101,103,100,115,112,0);
          let package__n7 = String.fromCharCode(113,116,112,97,108,101,116,116,101,0);
          let stationss: Array<any> = [458, 211];
          let rewindL: Array<any> = [580, 792];
         flyerm -= parseFloat(`${parseInt(`${anewinterstitialF}`) << (Math.min(2, Math.abs(2)))}`);
         basketballs = !basketballs;
         pingb += `${(String.fromCharCode(83,0) == package__n7 ? pingb.length : package__n7.length)}`;
         stationss.push(((basketballs ? 4 : 3) & stationss.length));
         rewindL.push(1 >> (Math.min(2, package__n7.length)));
         if (changel) {
            break;
         }
      } while ((3.7 > (anewinterstitialF / (Math.max(4.52, 9))) || (flyerm / (Math.max(6, anewinterstitialF))) > 4.52) && changel);
       let emojis = String.fromCharCode(112,101,110,99,105,108,0);
       let mbbidz = String.fromCharCode(105,110,116,114,101,112,111,108,0);
      let rewardvideoH = emojis.length >= 8176390;
      do {
         emojis += `${(String.fromCharCode(89,0) == mbbidz ? parseInt(`${flyerm}`) : mbbidz.length)}`;
         if (rewardvideoH) {
            break;
         }
      } while ((!emojis.endsWith(`${anythink2}`)) && rewardvideoH);
      while (!anythink2 && loginY.length == 5) {
         loginY += `${3 / (Math.max(parseInt(`${flyerm}`), 3))}`;
         break;
      }
         combinedl = emojis.length < 37;
         mbbidz = `${(parseInt(`${flyerm}`) | (anythink2 ? 5 : 5))}`;
      while (1.83 <= (parseFloat(`${emojis.length}`) + anewinterstitialF) || (1.83 + anewinterstitialF) <= 5.8) {
          let basketballx = String.fromCharCode(115,116,114,114,101,115,101,116,0);
          let viewsi = String.fromCharCode(117,110,101,109,112,116,121,0);
          let filter1 = 3;
          let singaporei = String.fromCharCode(113,115,118,101,110,99,0);
          let rights = String.fromCharCode(100,111,110,116,0);
         emojis += "3";
         basketballx = `${basketballx.length}`;
         viewsi += `${3 << (Math.min(1, basketballx.length))}`;
         filter1 >>= Math.min(5, Math.abs(filter1 << (Math.min(Math.abs(1), 2))));
         singaporei = `${(String.fromCharCode(88,0) == basketballx ? singaporei.length : basketballx.length)}`;
         rights = `${viewsi.length / (Math.max(3, filter1))}`;
         break;
      }
      serviceJ += `${parseInt(`${penaltys}`) & 2}`;
        showToast('请勿频繁操作');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

       let routerV: Array<any> = [843, 915];
       let telegramw = 1.0;
       let point6 = String.fromCharCode(112,108,97,99,101,109,97,114,107,115,0);
      if (5 > (parseInt(`${telegramw}`) + routerV.length)) {
         telegramw += point6.length;
      }
      let specU = String.fromCharCode(51,117,51,110,121,107,97,0) == point6;
      do {
         point6 = `${parseInt(`${telegramw}`) + routerV.length}`;
         if (specU) {
            break;
         }
      } while ((2.36 >= (telegramw / (Math.max(point6.length, 8)))) && specU);
      let kuaishouP = 9531386.0 <= telegramw;
      do {
          let controlsB = 1.0;
          let rankh: Array<any> = [String.fromCharCode(104,119,117,112,108,111,97,100,95,50,95,50,48,0), String.fromCharCode(99,111,111,114,100,0), String.fromCharCode(112,114,117,110,101,0)];
          let shootd = false;
         telegramw /= Math.max(rankh.length, 1);
         controlsB += 2 | parseInt(`${controlsB}`);
         rankh.push((parseInt(`${controlsB}`) ^ (shootd ? 3 : 5)));
         shootd = !shootd;
         if (kuaishouP) {
            break;
         }
      } while (kuaishouP && (telegramw < 5.93));
      if ((routerV.length | point6.length) > 5 && 5 > (routerV.length | 5)) {
          let editJ = String.fromCharCode(111,99,97,108,105,122,97,116,105,111,110,0);
          let interstitiald = 5;
          let p_titleq = String.fromCharCode(112,114,105,111,114,0);
          let placementp = 3.0;
          let overlay3 = 1.0;
         routerV = [1 & parseInt(`${placementp}`)];
         editJ += `${editJ.length}`;
         interstitiald ^= parseInt(`${overlay3}`) * p_titleq.length;
         p_titleq = `${(String.fromCharCode(108,0) == p_titleq ? parseInt(`${overlay3}`) : p_titleq.length)}`;
         placementp *= parseFloat(`${p_titleq.length}`);
      }
      while (5 == (1 & point6.length)) {
         telegramw -= routerV.length;
         break;
      }
         telegramw /= Math.max(3, routerV.length);
      while ((point6.length + parseInt(`${telegramw}`)) > 5 && (5 >> (Math.min(2, point6.length))) > 5) {
         telegramw -= 2 << (Math.min(Math.abs(parseInt(`${telegramw}`)), 3));
         break;
      }
      let servicea = point6.length >= 5738668;
      do {
         point6 = `${1 & parseInt(`${telegramw}`)}`;
         if (servicea) {
            break;
         }
      } while (servicea && ((point6.length / (Math.max(1, 6))) <= 3 || 4 <= (1 / (Math.max(9, point6.length)))));
         routerV = [3];
      xvodg |= header1.length;
        

   while ((change8 - statisticsK) > 2.24 || 3.7 > (change8 - 2.24)) {
      statisticsK += parseFloat(`${2 << (Math.min(2, serviceJ.length))}`);
      break;
   }
        showToast('谷歌服务获取失败');
      } else {

      serviceJ += `${parseInt(`${penaltys}`) + 2}`;
        

   if ((xvodg >> (Math.min(header1.length, 1))) == 5 && 5 == (5 >> (Math.min(1, header1.length)))) {
       let areaq: Map<any, any> = new Map([[String.fromCharCode(115,116,114,116,121,112,101,0),false ], [String.fromCharCode(115,101,97,108,97,110,116,0),true ], [String.fromCharCode(105,110,116,101,103,114,97,116,101,100,0),true ]]);
       let targets = String.fromCharCode(117,110,105,113,117,101,0);
       let utils9 = String.fromCharCode(97,109,114,119,98,0);
      while (targets.includes(`${areaq.size}`)) {
         areaq = new Map([[`${areaq.size}`, targets.length % 2]]);
         break;
      }
      for (let v = 0; v < 1; v++) {
          let becomej = String.fromCharCode(100,105,115,115,105,109,105,108,97,114,105,116,121,0);
          let contextq = 4.0;
         targets = `${parseInt(`${contextq}`)}`;
         becomej = `${becomej.length}`;
         contextq *= becomej.length % (Math.max(3, becomej.length));
      }
         areaq.set(`${utils9}`, (String.fromCharCode(84,0) == utils9 ? areaq.size : utils9.length));
         areaq.set(targets, 3 / (Math.max(6, targets.length)));
         targets = `${targets.length}`;
      if (2 == targets.length) {
         targets = `${(utils9 == String.fromCharCode(117,0) ? areaq.size : utils9.length)}`;
      }
      for (let m = 0; m < 1; m++) {
          let plashB = String.fromCharCode(118,105,100,101,111,101,110,99,100,115,112,0);
          let episodet = String.fromCharCode(100,105,115,116,97,110,99,101,115,0);
          let blackN = 0.0;
          let readG = false;
         targets = `${episodet.length}`;
         plashB = `${((readG ? 2 : 3) + parseInt(`${blackN}`))}`;
         episodet += `${(String.fromCharCode(54,0) == plashB ? plashB.length : (readG ? 2 : 3))}`;
         blackN += ((readG ? 4 : 4) - parseInt(`${blackN}`));
      }
       let moreY: Map<any, any> = new Map([[String.fromCharCode(118,112,109,99,0),527], [String.fromCharCode(114,112,99,115,0),157]]);
         moreY.set(targets, areaq.size | targets.length);
      header1 = [2];
   }
        showToast('登入失败，请稍后再试');
      }
      console.log(error.toString());

   if ((2.23 / (Math.max(10, penaltys))) == 4.20) {
      penaltys *= parseFloat(`${parseInt(`${statisticsK}`) << (Math.min(header1.length, 4))}`);
   }
      return;
    }

    if (userInfo === null) {

      xvodg <<= Math.min(1, Math.abs(parseInt(`${analyticsB}`)));
      showToast('登入失败，请稍后再试');

      unreadc = [1 >> (Math.min(Math.abs(parseInt(`${analyticsB}`)), 4))];
      return;
    }

    try {

      header1 = [header1.length];
      setSubmitting(true);

       let cnewinterstitialV = String.fromCharCode(114,101,115,97,109,112,108,101,0);
       let popupK = 5.0;
         cnewinterstitialV = `${cnewinterstitialV.length + parseInt(`${popupK}`)}`;
      if (cnewinterstitialV.length >= 3) {
         cnewinterstitialV = "2";
      }
         popupK -= 3 | cnewinterstitialV.length;
         popupK += 3 ^ parseInt(`${popupK}`);
      for (let y = 0; y < 2; y++) {
          let videojsl = String.fromCharCode(99,108,110,112,97,115,115,0);
          let darkp = 0;
          let tempf: Array<any> = [758, 760];
         cnewinterstitialV += `${(String.fromCharCode(56,0) == cnewinterstitialV ? parseInt(`${popupK}`) : cnewinterstitialV.length)}`;
         videojsl = `${2 | darkp}`;
         darkp -= videojsl.length << (Math.min(Math.abs(3), 3));
         tempf.push(darkp);
      }
         popupK *= parseInt(`${popupK}`) % 3;
      header1.push(parseInt(`${change8}`) + parseInt(`${analyticsB}`));
      userInfo = await ttTramini.signinupUser({
        loginType: 'EMAIL',
        email: userInfo.user.email,
        referralCode: referralCode,
        isGoogleLogin: true,
        userId: userState.user?.userId ?? '',
      });

    } catch (err: any) {
      GoogleSignin.signOut();

   for (let r = 0; r < 3; r++) {
      castingJ += parseFloat(`${header1.length ^ parseInt(`${change8}`)}`);
   }
      showToast(err.toString());

      serviceJ += `${parseInt(`${analyticsB}`)}`;
      return;
    } finally {

   let g_countT = penaltys <= 7809102.0;
   do {
      penaltys *= parseFloat(`${parseInt(`${penaltys}`) & 3}`);
      if (g_countT) {
         break;
      }
   } while ((change8 > 1.47) && g_countT);
      setSubmitting(false);

      unreadc = [parseInt(`${statisticsK}`)];
    }

    const resultData = userInfo.data;

       let sendL: Map<any, any> = new Map([[String.fromCharCode(103,108,111,98,97,108,116,101,109,0),false ], [String.fromCharCode(97,99,99,101,115,115,0),false ], [String.fromCharCode(115,121,109,0),true ]]);
       let mbjscommong = true;
         mbjscommong = sendL.get(`${mbjscommong}`) != null;
         mbjscommong = null == sendL.get(`${mbjscommong}`);
       let selection6 = String.fromCharCode(109,100,99,118,0);
      let teamX = 5032419 >= sendL.size;
      do {
          let mappingr = 4.0;
          let yingV = String.fromCharCode(105,115,100,105,97,99,114,105,116,105,99,0);
          let downloaderv = 5;
          let floating7 = String.fromCharCode(98,115,105,122,101,0);
          let mappingN = 5.0;
         sendL = new Map([[`${mappingr}`, 2]]);
         mappingr /= Math.max(3, parseInt(`${mappingN}`));
         yingV = `${yingV.length ^ 3}`;
         downloaderv -= 3;
         floating7 = "1";
         mappingN *= parseFloat(`${downloaderv & 3}`);
         if (teamX) {
            break;
         }
      } while ((5 <= (sendL.size + selection6.length) || 5 <= (selection6.length + sendL.size)) && teamX);
      for (let b = 0; b < 2; b++) {
         selection6 += `${((mbjscommong ? 1 : 5) % (Math.max(3, 10)))}`;
      }
      while (selection6.length > 5) {
         mbjscommong = 82 > selection6.length;
         break;
      }
      penaltys += parseFloat(`${3}`);

    const user = ttFast.fromJson(resultData);

   while (1 <= xvodg) {
      xvodg -= (String.fromCharCode(56,0) == serviceJ ? parseInt(`${analyticsB}`) : serviceJ.length);
      break;
   }

    await dispatch(addUserAuthState(user));

       let episodeg: Map<any, any> = new Map([[String.fromCharCode(116,101,110,115,105,111,110,0),669], [String.fromCharCode(110,111,105,115,101,0),410]]);
       let reactnativejsj = String.fromCharCode(116,117,112,108,101,0);
       let znewinterstitialQ = 0.0;
         reactnativejsj += `${reactnativejsj.length}`;
       let yellowV = String.fromCharCode(98,105,103,0);
       let viewsP = String.fromCharCode(103,111,112,115,0);
         znewinterstitialQ /= Math.max(1, parseInt(`${znewinterstitialQ}`));
       let predictionK = 2;
      let windd = String.fromCharCode(117,119,108,0) == viewsP;
      do {
          let spinnerW = 4;
          let minif = 2.0;
         viewsP = `${2 | predictionK}`;
         spinnerW += 2 * spinnerW;
         minif -= parseFloat(`${spinnerW & 1}`);
         if (windd) {
            break;
         }
      } while ((2 == viewsP.length) && windd);
       let time_9W: Map<any, any> = new Map([[String.fromCharCode(122,109,98,118,0),true ], [String.fromCharCode(114,118,100,115,112,0),true ], [String.fromCharCode(114,97,105,115,101,100,0),false ]]);
       let unreadW = true;
       let lineB = false;
      while (4 > (1 << (Math.min(2, yellowV.length))) && (1 << (Math.min(3, Math.abs(predictionK)))) > 4) {
         predictionK ^= episodeg.size;
         break;
      }
         predictionK += time_9W.size;
      pagination3 += parseFloat(`${parseInt(`${change8}`)}`);

    if (userInfo.message.includes("注册成功")) {

      unreadc = [unreadc.length];
      navigation.navigate('SetUsername');

    } else if (userInfo.message.includes("登录成功")) {

      pagination3 += parseFloat(`${parseInt(`${castingJ}`) & parseInt(`${analyticsB}`)}`);

      if (user.isVip()) {

   while (5 == (5 | serviceJ.length) && (change8 / (Math.max(3.23, 9))) == 1.27) {
       let policyH = 4.0;
       let resendN = String.fromCharCode(112,114,105,110,116,101,100,0);
       let sell4 = true;
         policyH -= parseFloat(`${3}`);
         sell4 = resendN.length > 15 || sell4;
         resendN += `${resendN.length}`;
       let launcherv = 4.0;
       let recommendation0 = 2.0;
          let overC = 2.0;
          let referrerk = String.fromCharCode(99,111,109,98,0);
          let stylesG = 2;
         resendN += `${(parseInt(`${overC}`) - (sell4 ? 4 : 4))}`;
         overC /= Math.max(4, (String.fromCharCode(112,0) == referrerk ? referrerk.length : stylesG));
         stylesG += referrerk.length >> (Math.min(Math.abs(1), 5));
      for (let e = 0; e < 3; e++) {
         launcherv -= parseFloat(`${2}`);
      }
       let download3: Map<any, any> = new Map([[String.fromCharCode(118,112,100,120,0),818], [String.fromCharCode(112,101,97,107,115,0),1000], [String.fromCharCode(116,114,101,101,0),172]]);
       let brightness3: Map<any, any> = new Map([[String.fromCharCode(112,97,116,104,115,0),String.fromCharCode(98,108,117,114,0)], [String.fromCharCode(119,101,101,107,100,97,121,0),String.fromCharCode(114,101,115,116,97,107,101,0)], [String.fromCharCode(99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,0),String.fromCharCode(114,101,99,97,108,99,117,108,97,116,105,111,110,0)]]);
      while (5.17 <= (4.0 + policyH) || 4.0 <= (recommendation0 / (Math.max(policyH, 7)))) {
         policyH -= parseFloat(`${parseInt(`${launcherv}`) % (Math.max(10, parseInt(`${recommendation0}`)))}`);
         break;
      }
      while (download3.get(`${launcherv}`) != null) {
         download3 = new Map([[`${sell4}`, 3 / (Math.max(10, parseInt(`${policyH}`)))]]);
         break;
      }
      change8 += (parseFloat(`${(sell4 ? 4 : 1) % (Math.max(3, parseInt(`${analyticsB}`)))}`));
      break;
   }
        await AsyncStorage.setItem("showAds", "false");
      } else {

       let vietnama = 5.0;
      let anythink5 = vietnama >= 5176250.0;
      do {
          let championX = 4;
          let resulth = 5.0;
          let downloado = 1.0;
         vietnama -= parseInt(`${downloado}`) - parseInt(`${vietnama}`);
         championX <<= Math.min(3, Math.abs(parseInt(`${resulth}`) << (Math.min(3, Math.abs(1)))));
         resulth *= parseFloat(`${championX | 3}`);
         downloado /= Math.max(2 % (Math.max(parseInt(`${resulth}`), 6)), 2);
         if (anythink5) {
            break;
         }
      } while (((vietnama / (Math.max(vietnama, 9))) > 2.27 || (vietnama / (Math.max(2.27, 10))) > 4.26) && anythink5);
      let regeng8 = vietnama <= 9342700.0;
      do {
          let downloadingB = true;
          let trophyT = String.fromCharCode(111,105,100,0);
          let googleA = String.fromCharCode(99,111,100,101,99,99,116,108,0);
          let resendY = 0;
         vietnama -= (googleA.length - (downloadingB ? 1 : 2));
         downloadingB = trophyT.startsWith(`${resendY}`);
         trophyT += `${resendY}`;
         googleA = "1";
         if (regeng8) {
            break;
         }
      } while (regeng8 && ((1.21 + vietnama) == 3.52));
      if (1.9 == vietnama) {
         vietnama += parseInt(`${vietnama}`);
      }
      xvodg -= xvodg;
        await AsyncStorage.setItem("showAds", "true");
      }

      await dispatch(changeScreenAction('登录成功'));

      castingJ *= parseFloat(`${2}`);

      

   let closee = change8 >= 9147399.0;
   do {
       let lightM = String.fromCharCode(115,105,116,101,0);
       let tramini2 = String.fromCharCode(99,97,112,116,117,114,101,100,0);
       let customD: Map<any, any> = new Map([[String.fromCharCode(99,101,108,108,0),335], [String.fromCharCode(104,108,105,116,0),786]]);
       let gemfiles = String.fromCharCode(99,111,117,110,116,0);
       let build1 = String.fromCharCode(112,108,97,110,101,100,0);
         gemfiles = `${lightM.length}`;
       let whiteM: Map<any, any> = new Map([[String.fromCharCode(98,117,98,98,108,101,115,0),309], [String.fromCharCode(105,110,100,105,99,97,116,105,111,110,0),835]]);
       let countryi = String.fromCharCode(112,105,99,107,101,114,115,0);
         build1 += `${gemfiles.length}`;
      if (countryi.length > tramini2.length) {
          let brightnessO: Array<any> = [936, 172];
          let details8 = 1.0;
         countryi += `${(countryi == String.fromCharCode(54,0) ? brightnessO.length : countryi.length)}`;
         brightnessO.push(parseInt(`${details8}`) >> (Math.min(3, Math.abs(parseInt(`${details8}`)))));
      }
      if ((whiteM.size | 2) == 4) {
         tramini2 += "1";
      }
         whiteM = new Map([[`${whiteM.size}`, 3 << (Math.min(4, gemfiles.length))]]);
      if (gemfiles.length <= 5) {
         gemfiles += `${whiteM.size}`;
      }
      while ((customD.size / (Math.max(tramini2.length, 7))) <= 2) {
         tramini2 = `${gemfiles.length + 3}`;
         break;
      }
      let feedbackY = gemfiles.length <= 9293492;
      do {
         gemfiles += `${(String.fromCharCode(70,0) == tramini2 ? gemfiles.length : tramini2.length)}`;
         if (feedbackY) {
            break;
         }
      } while (feedbackY && ((customD.size - gemfiles.length) <= 2 || (customD.size - gemfiles.length) <= 2));
      if (!countryi.includes(lightM)) {
          let diceK = String.fromCharCode(114,101,99,111,110,110,101,99,116,105,110,103,0);
          let collectionQ = 1.0;
         countryi += `${1 | customD.size}`;
         diceK += `${diceK.length}`;
         collectionQ *= (parseFloat(`${String.fromCharCode(118,0) == diceK ? parseInt(`${collectionQ}`) : diceK.length}`));
      }
      if (!lightM.startsWith(`${customD.size}`)) {
          let forwardZ = String.fromCharCode(109,105,120,101,114,0);
          let clocke = 0.0;
          let megaphoner: Map<any, any> = new Map([[String.fromCharCode(106,112,101,103,0),351], [String.fromCharCode(114,117,110,116,101,115,116,115,0),293], [String.fromCharCode(109,117,108,116,105,115,101,108,101,99,116,105,111,110,0),444]]);
          let crossh = String.fromCharCode(105,110,118,101,114,115,105,111,110,0);
          let mappingt = 5.0;
         lightM = `${(String.fromCharCode(99,0) == gemfiles ? gemfiles.length : build1.length)}`;
         forwardZ = "3";
         clocke -= parseFloat(`${3}`);
         megaphoner = new Map([[crossh, (String.fromCharCode(72,0) == crossh ? crossh.length : parseInt(`${clocke}`))]]);
         mappingt *= parseFloat(`${forwardZ.length * 3}`);
      }
      while (gemfiles.length == 5) {
         gemfiles += `${whiteM.size & 3}`;
         break;
      }
          let matchesF: Map<any, any> = new Map([[String.fromCharCode(109,98,105,110,116,114,97,0),String.fromCharCode(112,101,114,109,117,116,101,115,0)], [String.fromCharCode(99,111,110,115,116,115,0),String.fromCharCode(109,101,115,115,115,97,103,101,0)], [String.fromCharCode(112,105,101,99,101,119,105,115,101,0),String.fromCharCode(116,114,117,101,109,111,116,105,111,110,114,116,0)]]);
         whiteM = new Map([[`${customD.size}`, (String.fromCharCode(66,0) == lightM ? lightM.length : customD.size)]]);
         matchesF.set(`${matchesF.size}`, matchesF.size + matchesF.size);
         gemfiles += `${countryi.length % 3}`;
      change8 /= Math.max(parseFloat(`${parseInt(`${statisticsK}`)}`), 1);
      if (closee) {
         break;
      }
   } while ((statisticsK >= 5.11) && closee);
      tt_humidity_guide.userCenterLoginSuccessTimesAnalytics();

      unreadc = [1 | parseInt(`${change8}`)];
      ttDownTick.userCenterLoginSuccessTimesAnalytics();

      analyticsB /= Math.max(3, 2 / (Math.max(parseInt(`${analyticsB}`), 1)));

      if (user.isVip()) {

   for (let w = 0; w < 2; w++) {
       let react7: Array<any> = [901, 554];
       let hearty = String.fromCharCode(116,101,115,116,105,109,103,97,114,105,0);
       let blackd = 0;
         hearty = `${blackd}`;
         blackd &= (String.fromCharCode(87,0) == hearty ? hearty.length : blackd);
      while (hearty.length > 2) {
          let header3 = String.fromCharCode(121,95,54,49,95,115,101,112,97,114,97,116,101,100,0);
          let toponi: Map<any, any> = new Map([[String.fromCharCode(116,95,54,55,95,99,111,110,102,105,114,109,97,116,105,111,110,115,0),String.fromCharCode(105,110,100,101,112,101,110,100,101,100,0)], [String.fromCharCode(104,105,110,116,115,0),String.fromCharCode(98,95,51,56,95,110,111,116,105,99,101,0)]]);
         hearty += `${hearty.length + 2}`;
         header3 = `${1 & header3.length}`;
         toponi = new Map([[`${toponi.size}`, header3.length]]);
         break;
      }
      if ((blackd - react7.length) < 1) {
         react7 = [hearty.length];
      }
      while ((react7.length & 2) <= 5) {
         hearty += `${blackd}`;
         break;
      }
         react7 = [2 - blackd];
      for (let s = 0; s < 1; s++) {
         blackd |= react7.length;
      }
      while ((hearty.length * react7.length) < 3 && 4 < (3 * react7.length)) {
         react7 = [3 << (Math.min(4, Math.abs(blackd)))];
         break;
      }
      if (react7.length > 1) {
         react7 = [blackd];
      }
      statisticsK -= parseFloat(`${parseInt(`${penaltys}`)}`);
   }
        tt_humidity_guide.userCenterVipLoginSuccessTimesAnalytics();
      }
      

   for (let s = 0; s < 2; s++) {
       let privilegew = String.fromCharCode(119,111,114,115,116,0);
          let footballI = 4.0;
          let mores = String.fromCharCode(110,112,112,115,99,97,108,101,0);
         privilegew = `${privilegew.length ^ parseInt(`${footballI}`)}`;
         footballI /= Math.max(1, parseFloat(`${mores.length | 3}`));
         mores += `${3 | mores.length}`;
      while (privilegew.length <= 4) {
         privilegew += `${privilegew.length}`;
         break;
      }
      for (let v = 0; v < 3; v++) {
          let filter8 = 5.0;
          let bufferY = 2.0;
         privilegew = `${parseInt(`${filter8}`)}`;
         bufferY -= parseInt(`${bufferY}`);
      }
      analyticsB += 3 - parseInt(`${penaltys}`);
   }

      if (onGooleLoginSuccess) onGooleLoginSuccess();
    }
  }

  const onPressTermNCondition = () => {
       let videojsJ: Map<any, any> = new Map([[String.fromCharCode(112,114,111,118,105,100,101,115,0),287], [String.fromCharCode(109,115,115,100,115,112,0),126], [String.fromCharCode(116,104,114,101,97,100,101,100,0),684]]);
    let recommendationK = 0.0;
    let long_zD = String.fromCharCode(100,105,115,112,111,115,101,100,0);
    let right8 = String.fromCharCode(116,114,117,110,99,97,116,105,111,110,0);
    let time_7i = String.fromCharCode(114,101,102,112,105,99,0);
    let logoj = true;
    let mintegralk = String.fromCharCode(112,111,116,105,115,105,111,110,0);
    let successE = String.fromCharCode(115,113,108,105,116,101,115,101,115,115,105,111,110,0);
    let orangeZ = String.fromCharCode(114,111,116,97,116,101,100,0);
    let time_wv = String.fromCharCode(115,112,105,110,110,101,114,0);
    let snewinterstitialb = String.fromCharCode(99,111,109,112,97,115,115,0);
    let animation1 = String.fromCharCode(101,110,113,117,101,117,101,0);
    let whistle2 = 4.0;
    let success1 = String.fromCharCode(97,99,99,114,117,101,100,0);
   let actionW = logoj ? !logoj : logoj;
   do {
       let closeZ = 0.0;
       let twitter3 = 5;
          let upgradeU = String.fromCharCode(115,105,103,115,108,111,116,95,122,95,55,49,0);
          let questW = String.fromCharCode(116,114,97,110,115,108,97,116,101,100,0);
         closeZ /= Math.max(parseFloat(`${2}`), 1);
         upgradeU += `${(String.fromCharCode(82,0) == questW ? questW.length : upgradeU.length)}`;
       let subsH = 4;
       let otherB = 1;
          let inviteT = String.fromCharCode(107,101,121,105,100,0);
         twitter3 /= Math.max(4, inviteT.length - 2);
         closeZ -= parseFloat(`${2 - subsH}`);
      for (let u = 0; u < 3; u++) {
         otherB += otherB % (Math.max(parseInt(`${closeZ}`), 10));
      }
          let store_ = false;
          let uploadW = String.fromCharCode(101,99,100,115,97,0);
         subsH &= 1 >> (Math.min(Math.abs(twitter3), 2));
         store_ = !store_;
         uploadW = `${((store_ ? 3 : 3) + 1)}`;
      logoj = successE.length >= 55 && videojsJ.size >= 55;
      if (actionW) {
         break;
      }
   } while ((mintegralk.length == 1 || logoj) && actionW);
   let clearT = orangeZ.length >= 8955653;
   do {
       let episodeG: Map<any, any> = new Map([[String.fromCharCode(118,101,114,116,105,99,97,108,108,121,0),823], [String.fromCharCode(112,99,105,112,104,101,114,116,101,120,116,0),913]]);
       let sendS = 5.0;
       let stringsM = true;
      if (!stringsM || 4.99 > (sendS / (Math.max(5.24, 2)))) {
         stringsM = 43.27 <= sendS && !stringsM;
      }
       let animationd = String.fromCharCode(103,114,97,118,105,116,121,0);
       let pausee = String.fromCharCode(98,117,116,111,110,0);
          let zoomO = 1;
         pausee += "1";
         zoomO /= Math.max(5, zoomO - 1);
      let bootsplashk = animationd.length <= 7023751;
      do {
         animationd = "3";
         if (bootsplashk) {
            break;
         }
      } while ((animationd.length >= 4 || !stringsM) && bootsplashk);
         sendS -= parseInt(`${sendS}`) % (Math.max(1, 6));
      if (stringsM) {
         sendS += 1;
      }
      for (let q = 0; q < 2; q++) {
          let ajaxj = String.fromCharCode(104,97,110,100,108,101,100,0);
          let leagueT = String.fromCharCode(114,101,115,101,114,118,101,0);
          let uploadA: Array<any> = [String.fromCharCode(112,116,104,114,101,97,100,0), String.fromCharCode(117,110,114,101,99,111,103,0), String.fromCharCode(112,114,101,100,101,102,105,110,101,100,0)];
          let sell9 = 5.0;
         stringsM = 97 <= ajaxj.length;
         ajaxj += `${3 * leagueT.length}`;
         leagueT += `${parseInt(`${sell9}`) % (Math.max(1, 3))}`;
         uploadA = [parseInt(`${sell9}`) - 1];
      }
         sendS *= animationd.length;
      while (animationd.endsWith(`${stringsM}`)) {
         stringsM = !stringsM;
         break;
      }
      orangeZ += `${((logoj ? 2 : 3))}`;
      episodeG = new Map([[`${episodeG.size}`, 3]]);
      if (clearT) {
         break;
      }
   } while (clearT && (mintegralk == orangeZ));
   let clearl = videojsJ.size >= 4904580;
   do {
      videojsJ.set(mintegralk, mintegralk.length * time_wv.length);
      if (clearl) {
         break;
      }
   } while (clearl && (1 == (videojsJ.size & time_7i.length) && (videojsJ.size & 1) == 3));
   for (let n = 0; n < 3; n++) {
       let sportsF = 2.0;
       let showa = true;
       let roundI = String.fromCharCode(109,117,116,97,98,108,101,0);
      while (!showa) {
          let filterW = 2.0;
          let stringsg = String.fromCharCode(97,105,109,105,110,103,0);
          let singleZ: Map<any, any> = new Map([[String.fromCharCode(115,112,101,99,105,102,105,99,0),297], [String.fromCharCode(112,117,108,108,117,112,0),850], [String.fromCharCode(97,114,101,110,97,115,0),732]]);
          let guidev = false;
         sportsF -= parseFloat(`${2 - singleZ.size}`);
         filterW *= 3;
         stringsg = `${stringsg.length}`;
         singleZ.set(`${filterW}`, 2);
         guidev = (stringsg.length * filterW) < 90.69;
         break;
      }
      while (1 < roundI.length) {
          let relatedn: Map<any, any> = new Map([[String.fromCharCode(112,114,111,103,114,97,109,109,97,116,105,99,97,108,108,121,0),435], [String.fromCharCode(120,99,104,103,0),848]]);
          let refreshv = String.fromCharCode(104,119,102,114,97,109,101,0);
          let photon = 3.0;
         showa = !showa;
         relatedn = new Map([[`${photon}`, parseInt(`${photon}`) / 3]]);
         refreshv += `${parseInt(`${photon}`)}`;
         break;
      }
          let downm = 1.0;
         showa = (roundI.length * parseInt(`${downm}`)) <= 66;
      for (let j = 0; j < 3; j++) {
         roundI = `${(String.fromCharCode(120,0) == roundI ? roundI.length : (showa ? 2 : 1))}`;
      }
      for (let x = 0; x < 2; x++) {
         sportsF -= parseFloat(`${2}`);
      }
      if (!showa) {
         showa = 22.14 < sportsF;
      }
         showa = 95.24 <= sportsF;
      if (showa) {
         showa = roundI.endsWith(`${showa}`);
      }
         roundI = `${((showa ? 1 : 1))}`;
      time_wv += `${snewinterstitialb.length}`;
   }
   for (let a = 0; a < 2; a++) {
      animation1 = `${(long_zD == String.fromCharCode(114,0) ? videojsJ.size : long_zD.length)}`;
   }
      right8 = `${time_wv.length}`;
   let shootN = videojsJ.size >= 9799735;
   do {
       let videojsI = String.fromCharCode(121,117,118,109,112,101,103,0);
       let viewerK = String.fromCharCode(105,101,110,116,114,121,0);
       let anytimek = String.fromCharCode(103,101,116,110,112,97,115,115,101,115,0);
       let core4 = String.fromCharCode(115,117,99,99,101,101,100,0);
      while (viewerK.length == 1 && anytimek.length == 1) {
          let unreadE = false;
          let google1 = true;
          let calendarr = String.fromCharCode(102,108,97,99,0);
          let kuaishouu = String.fromCharCode(114,101,97,115,109,0);
          let injuryh: Map<any, any> = new Map([[String.fromCharCode(118,108,105,110,101,0),730], [String.fromCharCode(119,97,108,108,97,112,101,114,115,0),667]]);
         viewerK += `${core4.length % 2}`;
         unreadE = calendarr.length >= 78;
         google1 = kuaishouu.length >= 86;
         calendarr = `${injuryh.size}`;
         kuaishouu += `${kuaishouu.length}`;
         injuryh.set(`${google1}`, 1);
         break;
      }
       let pause0 = 0.0;
       let episodeY = 5.0;
      for (let a = 0; a < 2; a++) {
         episodeY /= Math.max(3, videojsI.length);
      }
      for (let m = 0; m < 2; m++) {
         viewerK = `${parseInt(`${episodeY}`) + 2}`;
      }
         pause0 -= parseInt(`${episodeY}`) % (Math.max(3, 3));
      if ((anytimek.length - parseInt(`${episodeY}`)) > 4 || 3 > (4 * anytimek.length)) {
         anytimek += `${(String.fromCharCode(72,0) == anytimek ? core4.length : anytimek.length)}`;
      }
          let confirmationa: Array<any> = [612, 338];
          let invited = 5;
          let expiredQ = 5.0;
         episodeY /= Math.max(invited, 5);
         confirmationa = [parseInt(`${expiredQ}`)];
         invited &= parseInt(`${expiredQ}`);
       let reminderZ: Array<any> = [965, 177, 774];
      let mintegralj = 9261662.0 >= pause0;
      do {
          let showT: Array<any> = [360, 39, 658];
          let ballF: Map<any, any> = new Map([[String.fromCharCode(116,114,105,99,107,108,101,0),true ], [String.fromCharCode(105,112,100,111,112,100,0),false ]]);
          let fillf = String.fromCharCode(98,108,111,99,107,100,115,112,0);
         pause0 -= fillf.length;
         showT = [2 | showT.length];
         ballF = new Map([[`${ballF.size}`, showT.length % 3]]);
         fillf = `${showT.length & ballF.size}`;
         if (mintegralj) {
            break;
         }
      } while (mintegralj && (5 == anytimek.length));
      for (let q = 0; q < 2; q++) {
         videojsI = `${parseInt(`${pause0}`)}`;
      }
          let topic9: Array<any> = [740, 758];
          let middleA = 3.0;
          let expand2: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,115,104,0),326], [String.fromCharCode(112,117,108,108,100,111,119,110,0),139]]);
         episodeY -= expand2.size >> (Math.min(Math.abs(2), 3));
         topic9 = [1];
         middleA -= parseInt(`${middleA}`);
         expand2 = new Map([[`${topic9.length}`, parseInt(`${middleA}`) / (Math.max(topic9.length, 5))]]);
         anytimek += `${reminderZ.length}`;
      videojsJ.set(animation1, (String.fromCharCode(49,0) == animation1 ? videojsI.length : animation1.length));
      if (shootN) {
         break;
      }
   } while (shootN && (videojsJ.get(`${recommendationK}`) != null));
      recommendationK += 2;
       let scheduleT = String.fromCharCode(115,104,111,114,116,0);
         scheduleT += `${scheduleT.length - 3}`;
         scheduleT = `${scheduleT.length - scheduleT.length}`;
       let uploadB = 1.0;
       let targetr = 5.0;
      animation1 += `${animation1.length}`;
      successE = `${right8.length}`;
   for (let e = 0; e < 2; e++) {
      success1 = `${3 | animation1.length}`;
   }
   let prediction7 = 5772704.0 >= recommendationK;
   do {
      recommendationK *= animation1.length * snewinterstitialb.length;
      if (prediction7) {
         break;
      }
   } while ((parseInt(`${recommendationK}`) > snewinterstitialb.length) && prediction7);
   let hejiC = time_wv == String.fromCharCode(116,54,121,107,56,49,0);
   do {
      time_wv = `${successE.length - 1}`;
      if (hejiC) {
         break;
      }
   } while (hejiC && (long_zD == String.fromCharCode(110,0) || 5 >= time_wv.length));
      whistle2 -= parseFloat(`${time_7i.length}`);
      right8 += `${videojsJ.size | 3}`;
   while (1 > (videojsJ.size & 4) || 2 > (mintegralk.length & 4)) {
      mintegralk += `${2 & time_wv.length}`;
      break;
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
       let gpaya = true;
    let playlistp = 5;
    let stationG = 5;
    let sheetf = String.fromCharCode(116,119,111,112,111,105,110,116,0);
    let loadingm = String.fromCharCode(99,109,121,107,0);
    let placementg = 5.0;
    let mail7 = String.fromCharCode(97,117,116,111,99,108,101,97,114,0);
    let resultr = String.fromCharCode(114,102,99,116,0);
    let gifte: Map<any, any> = new Map([[String.fromCharCode(105,110,112,111,115,0),666], [String.fromCharCode(116,121,112,101,100,0),289], [String.fromCharCode(112,117,98,105,99,0),54]]);
    let strn: Array<any> = [903, 840, 571];
    let searchbarj = 5.0;
    let downloadingN = String.fromCharCode(101,116,104,111,100,0);
    let chartl = false;
   let greyJ = 9751608 <= mail7.length;
   do {
      mail7 += "2";
      if (greyJ) {
         break;
      }
   } while (greyJ && ((3 * mail7.length) <= 5 || 3 <= (mail7.length * strn.length)));
   let membert = mail7.length <= 5503541;
   do {
      mail7 += `${(loadingm == String.fromCharCode(74,0) ? gifte.size : loadingm.length)}`;
      if (membert) {
         break;
      }
   } while ((2 == mail7.length) && membert);

    if (isSubmitting) return;

       let playN = 5.0;
       let backgroundn = 0;
       let activee = 4;
      let notificationU = 5614988 >= backgroundn;
      do {
          let flipperT = String.fromCharCode(114,101,112,108,97,121,101,100,0);
          let ajaxI = false;
          let giftt = String.fromCharCode(97,115,101,108,101,99,116,0);
         backgroundn >>= Math.min(Math.abs(2), 4);
         flipperT = `${(String.fromCharCode(98,0) == giftt ? flipperT.length : giftt.length)}`;
         ajaxI = giftt == String.fromCharCode(100,0);
         if (notificationU) {
            break;
         }
      } while ((activee == backgroundn) && notificationU);
          let username0 = String.fromCharCode(110,101,120,116,108,0);
          let googlex = String.fromCharCode(109,97,107,101,109,97,99,112,107,103,0);
         activee += parseInt(`${playN}`);
         username0 += `${2 - googlex.length}`;
         googlex = `${username0.length}`;
      while (2 > (backgroundn / 4)) {
          let termsP = String.fromCharCode(108,111,99,107,115,0);
          let bufferh = String.fromCharCode(109,105,114,114,111,114,105,110,103,0);
          let pauseE = String.fromCharCode(116,97,98,108,101,108,105,109,0);
          let combinedp = 0.0;
         activee += pauseE.length;
         termsP = "3";
         bufferh = `${bufferh.length | termsP.length}`;
         pauseE = "2";
         combinedp += parseFloat(`${termsP.length >> (Math.min(2, bufferh.length))}`);
         break;
      }
          let checkbox7 = String.fromCharCode(115,113,108,0);
          let forwardL = String.fromCharCode(117,95,52,50,0);
          let buttonx: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,112,101,100,0),String.fromCharCode(115,116,114,117,99,116,0)], [String.fromCharCode(101,98,109,108,110,117,109,0),String.fromCharCode(98,115,102,115,0)]]);
         backgroundn |= backgroundn - buttonx.size;
         checkbox7 += `${forwardL.length}`;
         forwardL += `${(String.fromCharCode(77,0) == checkbox7 ? checkbox7.length : forwardL.length)}`;
         buttonx = new Map([[forwardL, checkbox7.length - 2]]);
         backgroundn += backgroundn << (Math.min(Math.abs(activee), 1));
          let navigation4: Map<any, any> = new Map([[String.fromCharCode(102,105,114,115,116,108,121,0),705], [String.fromCharCode(109,112,111,115,0),559], [String.fromCharCode(112,114,101,100,105,99,116,105,111,110,0),631]]);
          let descI: Array<any> = [461, 37];
         backgroundn *= activee / (Math.max(3, parseInt(`${playN}`)));
         navigation4.set(`${descI.length}`, navigation4.size | descI.length);
       let tailO = false;
       let optionsM = false;
      if (2 == (1 ^ backgroundn)) {
         activee /= Math.max(activee << (Math.min(4, Math.abs(backgroundn))), 3);
      }
          let whatsappC = String.fromCharCode(114,103,98,120,105,0);
          let black6 = String.fromCharCode(105,115,115,101,116,117,103,105,100,0);
          let commentk = String.fromCharCode(114,101,110,100,101,114,105,110,103,0);
         optionsM = 78 == backgroundn;
         whatsappC += `${whatsappC.length + black6.length}`;
         black6 = `${black6.length & commentk.length}`;
         commentk += "3";
      downloadingN += `${downloadingN.length / (Math.max(10, mail7.length))}`;
   if ((placementg / (Math.max(parseFloat(`${sheetf.length}`), 3))) > 1.47 && (placementg / (Math.max(4, parseFloat(`${sheetf.length}`)))) > 1.47) {
       let turnZ = String.fromCharCode(114,111,117,110,100,115,0);
      let assist5 = 7705889 >= turnZ.length;
      do {
          let containert = String.fromCharCode(104,101,97,114,116,98,101,97,116,0);
         turnZ += `${containert.length | turnZ.length}`;
         if (assist5) {
            break;
         }
      } while ((!turnZ.includes(turnZ)) && assist5);
          let termsf = String.fromCharCode(113,115,116,101,112,0);
          let downloadero = String.fromCharCode(99,111,109,112,108,101,109,101,110,116,105,110,103,0);
          let blacklistn = String.fromCharCode(97,100,114,109,0);
         turnZ = `${turnZ.length & 2}`;
         termsf += `${(String.fromCharCode(102,0) == blacklistn ? blacklistn.length : termsf.length)}`;
         downloadero += `${blacklistn.length << (Math.min(Math.abs(1), 1))}`;
          let sorts = String.fromCharCode(105,110,116,101,114,110,97,108,0);
         turnZ = `${turnZ.length}`;
         sorts = "1";
      placementg *= parseFloat(`${1}`);
   }

    if (isReadTermNCondition == false) {

   while (!Array.from(gifte.keys()).includes(`${searchbarj}`)) {
      gifte.set(downloadingN, (downloadingN == String.fromCharCode(113,0) ? downloadingN.length : parseInt(`${searchbarj}`)));
      break;
   }
       let detailsc = 4;
       let championW: Map<any, any> = new Map([[String.fromCharCode(98,105,119,103,116,0),682], [String.fromCharCode(116,114,97,110,102,115,101,114,0),82]]);
      while (!Array.from(championW.values()).includes(detailsc)) {
         championW.set(`${detailsc}`, championW.size | 2);
         break;
      }
       let colorsh = String.fromCharCode(112,114,101,100,0);
       let splashq = String.fromCharCode(118,101,114,116,101,120,0);
       let configureo = String.fromCharCode(103,105,102,0);
         configureo = `${championW.size}`;
      if (splashq != String.fromCharCode(51,0) || configureo == String.fromCharCode(84,0)) {
         configureo += `${colorsh.length}`;
      }
      while (4 <= (colorsh.length & detailsc)) {
          let modalL = false;
          let mathy = String.fromCharCode(111,117,116,113,0);
         colorsh = `${detailsc % 2}`;
         modalL = !mathy.endsWith(`${modalL}`);
         mathy += `${(String.fromCharCode(53,0) == mathy ? (modalL ? 3 : 5) : mathy.length)}`;
         break;
      }
      strn = [3];
      return;

       let typesJ = 5.0;
       let leagueO: Array<any> = [751, 153, 38];
       let mbjscommonD = String.fromCharCode(112,114,101,118,111,117,115,0);
      while (2 > mbjscommonD.length) {
         mbjscommonD = "2";
         break;
      }
      while ((5 >> (Math.min(1, leagueO.length))) == 4) {
         leagueO = [parseInt(`${typesJ}`)];
         break;
      }
       let linez = String.fromCharCode(103,95,51,54,0);
       let private_6yM = String.fromCharCode(97,102,105,114,0);
       let spinner3: Array<any> = [String.fromCharCode(99,111,117,110,116,101,100,0), String.fromCharCode(109,107,100,105,114,0), String.fromCharCode(100,101,116,101,99,116,111,114,0)];
          let bootsplasha = String.fromCharCode(118,97,99,97,110,116,0);
          let tail2 = String.fromCharCode(110,118,99,0);
          let fieldy = String.fromCharCode(115,116,114,101,114,114,111,114,0);
         spinner3 = [parseInt(`${typesJ}`) ^ 2];
         bootsplasha = "3";
         tail2 += `${tail2.length}`;
         fieldy = "2";
          let pressurev: Map<any, any> = new Map([[String.fromCharCode(115,104,97,100,101,0),false ], [String.fromCharCode(97,117,120,105,108,105,97,114,121,0),false ]]);
          let singleW = String.fromCharCode(115,116,97,116,101,112,0);
         typesJ *= (parseFloat(`${String.fromCharCode(99,0) == mbjscommonD ? mbjscommonD.length : pressurev.size}`));
         pressurev.set(singleW, singleW.length * singleW.length);
         leagueO.push(1);
         typesJ -= parseFloat(`${leagueO.length}`);
      while (1.95 > (3.45 * typesJ) || 3.45 > (typesJ * parseFloat(`${spinner3.length}`))) {
         spinner3.push(2);
         break;
      }
      gifte = new Map([[`${placementg}`, parseInt(`${placementg}`) + loadingm.length]]);
   if (1 <= resultr.length || downloadingN != String.fromCharCode(52,0)) {
      downloadingN += `${parseInt(`${searchbarj}`)}`;
   }
    }

    const formattedLoginValue = loginType === 'phone' ? loginValue.replace(/\s/g, '') : loginValue;

    

      loadingm = `${parseInt(`${searchbarj}`)}`;
       let long_pM = String.fromCharCode(106,100,109,97,105,110,99,116,0);
       let anythinku = 2;
      while ((anythinku / 4) < 1 && (long_pM.length / 4) < 3) {
          let sharef = String.fromCharCode(102,105,110,97,108,0);
          let rewardvideoY = 1.0;
          let minimizeI = 3;
          let annerL = String.fromCharCode(98,117,102,102,101,114,113,117,101,117,101,0);
         anythinku &= 3;
         sharef += `${parseInt(`${rewardvideoY}`) >> (Math.min(Math.abs(2), 4))}`;
         rewardvideoY -= parseInt(`${rewardvideoY}`);
         minimizeI %= Math.max(minimizeI / (Math.max(sharef.length, 1)), 5);
         annerL = `${3 & annerL.length}`;
         break;
      }
      if (!long_pM.includes(`${anythinku}`)) {
          let container5: Array<any> = [471, 688];
         anythinku &= (String.fromCharCode(111,0) == long_pM ? anythinku : long_pM.length);
         container5.push(container5.length);
      }
         anythinku <<= Math.min(Math.abs(1 << (Math.min(4, Math.abs(anythinku)))), 5);
         long_pM = `${anythinku ^ 1}`;
         anythinku %= Math.max(anythinku, 2);
         anythinku -= anythinku % 1;
      downloadingN = `${downloadingN.length | 2}`;
    

   let agreementN = gpaya ? !gpaya : gpaya;
   do {
      gpaya = downloadingN == String.fromCharCode(54,0);
      if (agreementN) {
         break;
      }
   } while ((4 <= resultr.length || !gpaya) && agreementN);
      playlistp |= strn.length;
    

   while (!gpaya && 1.41 < (2.76 / (Math.max(8, placementg)))) {
      placementg /= Math.max(2, parseFloat(`${gifte.size ^ 3}`));
      break;
   }
   let carouselI = 5093801 <= playlistp;
   do {
      playlistp *= 3;
      if (carouselI) {
         break;
      }
   } while (carouselI && ((strn.length % 4) >= 5 || (playlistp % (Math.max(2, strn.length))) >= 4));
    

      strn = [parseInt(`${placementg}`)];
   if (placementg == playlistp) {
       let controlq = 4.0;
       let guideL = true;
       let private_zI = String.fromCharCode(101,120,110,111,100,101,0);
      for (let l = 0; l < 1; l++) {
          let unread5: Array<any> = [401, 925];
          let favoritem: Array<any> = [920, 887, 45];
          let incidentd: Array<any> = [String.fromCharCode(104,111,110,101,121,0), String.fromCharCode(97,110,105,109,97,116,105,111,110,0), String.fromCharCode(116,102,120,100,0)];
         guideL = !guideL;
         unread5.push(incidentd.length / (Math.max(3, 6)));
         favoritem.push(2 << (Math.min(5, incidentd.length)));
      }
       let thumbnailg: Array<any> = [584, 111];
       let policyS: Array<any> = [843, 484, 36];
          let roomS = String.fromCharCode(100,105,115,109,105,115,115,101,115,0);
          let settingsj = String.fromCharCode(115,101,108,101,99,116,105,111,110,115,0);
          let whistleI = String.fromCharCode(98,114,101,97,100,99,114,117,109,98,115,0);
         policyS.push(thumbnailg.length);
         roomS += `${whistleI.length}`;
         settingsj += `${roomS.length ^ whistleI.length}`;
         controlq -= parseFloat(`${3 | thumbnailg.length}`);
      if (5 <= (policyS.length - thumbnailg.length) || 2 <= (5 - thumbnailg.length)) {
         policyS.push(((guideL ? 2 : 1) & parseInt(`${controlq}`)));
      }
      if (guideL || 4.55 <= (1.74 + controlq)) {
         guideL = (private_zI.length & thumbnailg.length) > 96;
      }
      for (let e = 0; e < 2; e++) {
          let sansW = false;
          let countdowni = String.fromCharCode(112,97,99,107,97,103,101,0);
          let roomr = String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,115,0);
          let zhuboa: Map<any, any> = new Map([[String.fromCharCode(99,111,117,110,116,114,105,101,115,0),408], [String.fromCharCode(115,112,101,99,105,102,105,101,114,115,0),439], [String.fromCharCode(99,111,110,116,111,117,114,115,0),32]]);
         guideL = sansW;
         countdowni += `${countdowni.length}`;
         roomr = "1";
         zhuboa = new Map([[`${zhuboa.size}`, (String.fromCharCode(89,0) == countdowni ? zhuboa.size : countdowni.length)]]);
      }
      let whatsappQ = 7779773 <= thumbnailg.length;
      do {
         thumbnailg = [thumbnailg.length / (Math.max(policyS.length, 6))];
         if (whatsappQ) {
            break;
         }
      } while ((1 == (1 ^ thumbnailg.length) && (thumbnailg.length ^ 1) == 1) && whatsappQ);
         private_zI = `${private_zI.length ^ 3}`;
      placementg /= Math.max(parseFloat(`${sheetf.length << (Math.min(3, Math.abs(playlistp)))}`), 4);
   }

    if (formattedLoginValue === "" || loginValueErrMsg !== null) {
      setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
      return;
    }

    try {

      placementg *= parseFloat(`${2}`);
   for (let n = 0; n < 1; n++) {
      loadingm = `${((gpaya ? 5 : 1) + parseInt(`${placementg}`))}`;
   }
      setSubmitting(true);

      gifte = new Map([[resultr, 3 | parseInt(`${placementg}`)]]);
   while (resultr == mail7) {
      mail7 = `${(mail7.length ^ (gpaya ? 2 : 3))}`;
      break;
   }
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

   for (let w = 0; w < 3; w++) {
       let modey = false;
       let mimos: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,116,105,111,110,115,0),157], [String.fromCharCode(100,117,114,97,116,105,111,110,115,0),779], [String.fromCharCode(102,111,114,119,97,114,100,0),533]]);
       let linkX = String.fromCharCode(100,97,121,0);
       let text6 = String.fromCharCode(111,98,106,99,0);
          let watchV = 0.0;
         modey = mimos.size < 43;
         watchV += parseFloat(`${parseInt(`${watchV}`)}`);
          let pageq = String.fromCharCode(118,101,99,0);
          let buildW = String.fromCharCode(109,118,115,101,116,0);
          let termsc: Array<any> = [773, 779];
         text6 = `${text6.length}`;
         pageq = "3";
         buildW += `${(pageq == String.fromCharCode(122,0) ? termsc.length : pageq.length)}`;
         termsc.push(buildW.length / 1);
         text6 += `${3 - mimos.size}`;
      if ((4 & mimos.size) <= 3) {
         modey = mimos.size <= text6.length;
      }
          let configuret: Map<any, any> = new Map([[String.fromCharCode(114,101,118,97,108,105,100,97,116,105,111,110,0),986], [String.fromCharCode(99,111,109,112,111,115,101,114,0),458], [String.fromCharCode(115,117,98,105,109,97,103,101,0),476]]);
          let catagoryE = String.fromCharCode(112,97,114,97,109,101,116,114,105,99,0);
         linkX += `${mimos.size / 2}`;
         configuret = new Map([[`${configuret.size}`, (String.fromCharCode(101,0) == catagoryE ? configuret.size : catagoryE.length)]]);
      sheetf = `${parseInt(`${searchbarj}`)}`;
   }
   if ((gifte.size / 3) > 5 || 4 > (gifte.size - 3)) {
       let humidity1 = String.fromCharCode(101,110,100,120,0);
       let halfI = 3.0;
       let layoutN = 1.0;
       let areaL = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,121,117,118,0);
      for (let a = 0; a < 2; a++) {
         humidity1 += `${3 - parseInt(`${halfI}`)}`;
      }
      for (let x = 0; x < 1; x++) {
         areaL = `${humidity1.length & 3}`;
      }
      let mimoQ = 7138875.0 <= halfI;
      do {
         halfI *= parseFloat(`${humidity1.length ^ parseInt(`${layoutN}`)}`);
         if (mimoQ) {
            break;
         }
      } while ((1.73 == (layoutN * halfI)) && mimoQ);
      if ((layoutN / (Math.max(areaL.length, 5))) < 4.92 || (parseInt(`${layoutN}`) / (Math.max(areaL.length, 1))) < 5) {
          let loginU: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,108,121,0),false ], [String.fromCharCode(114,101,99,104,101,99,107,0),false ]]);
          let e_unlockn = String.fromCharCode(98,97,114,0);
          let delegate_6N = String.fromCharCode(112,114,111,99,101,115,115,111,114,0);
          let short_qw0: Map<any, any> = new Map([[String.fromCharCode(102,117,122,122,0),String.fromCharCode(111,110,116,114,111,108,115,0)], [String.fromCharCode(112,114,102,116,0),String.fromCharCode(99,111,109,112,117,116,101,100,0)]]);
          let orangef = String.fromCharCode(115,99,97,108,105,110,103,95,105,95,51,56,0);
         layoutN -= areaL.length * orangef.length;
         loginU.set(`${loginU.size}`, loginU.size | short_qw0.size);
         e_unlockn = "1";
         delegate_6N = `${e_unlockn.length}`;
         short_qw0.set(`${loginU.size}`, 2);
         orangef = `${3 << (Math.min(4, Math.abs(short_qw0.size)))}`;
      }
         areaL = `${parseInt(`${halfI}`)}`;
      for (let y = 0; y < 3; y++) {
         humidity1 += `${areaL.length & 2}`;
      }
      if (humidity1.includes(`${halfI}`)) {
         humidity1 += `${2 / (Math.max(8, areaL.length))}`;
      }
      if ((halfI * 2.8) < 4.22 && 2.8 < (halfI * parseFloat(`${areaL.length}`))) {
         areaL = `${areaL.length}`;
      }
          let streamingF = String.fromCharCode(115,116,114,99,97,115,101,99,109,112,95,101,95,54,49,0);
          let phone6 = String.fromCharCode(100,105,115,97,98,108,101,115,0);
         humidity1 = `${phone6.length}`;
         streamingF += `${1 + streamingF.length}`;
         phone6 = "2";
         layoutN /= Math.max(humidity1.length, 3);
          let mailR = String.fromCharCode(115,104,111,114,116,101,114,0);
         layoutN -= parseInt(`${halfI}`) % (Math.max(mailR.length, 10));
         layoutN -= parseInt(`${layoutN}`) + areaL.length;
      searchbarj -= parseInt(`${layoutN}`) >> (Math.min(Math.abs(gifte.size), 2));
   }
        setSubmitting(false);

      mail7 = `${loadingm.length}`;
      searchbarj -= 2 & mail7.length;
        setLoginValueErrMsg(err.message);

   let detailb = gifte.size >= 5534808;
   do {
      gifte.set(`${stationG}`, 2);
      if (detailb) {
         break;
      }
   } while (((strn.length - gifte.size) <= 1 || 1 <= (strn.length - gifte.size)) && detailb);
       let controlY = String.fromCharCode(103,97,112,115,0);
       let smalln: Array<any> = [349, 897];
      for (let a = 0; a < 2; a++) {
         controlY += "1";
      }
      let crownT = controlY == String.fromCharCode(95,110,57,115,110,0);
      do {
         controlY += "2";
         if (crownT) {
            break;
         }
      } while (crownT && (!controlY.endsWith(`${smalln.length}`)));
      while ((smalln.length % 2) < 3 && 2 < (smalln.length % (Math.max(8, controlY.length)))) {
          let rankv = 5.0;
         controlY = `${(String.fromCharCode(84,0) == controlY ? parseInt(`${rankv}`) : controlY.length)}`;
         break;
      }
      if (1 == (controlY.length / 2)) {
          let r_locky = 1.0;
          let tumbnail3 = 2.0;
         controlY = `${3 & parseInt(`${tumbnail3}`)}`;
         r_locky -= 1;
         tumbnail3 += parseInt(`${r_locky}`);
      }
      for (let m = 0; m < 3; m++) {
          let default_7S = String.fromCharCode(98,105,116,101,120,97,99,116,0);
         smalln.push(default_7S.length % (Math.max(5, smalln.length)));
      }
         smalln = [controlY.length];
      loadingm += `${(String.fromCharCode(51,0) == mail7 ? loadingm.length : mail7.length)}`;
        return;
      }
    }

    setSubmitting(false);

      placementg /= Math.max(parseFloat(`${parseInt(`${searchbarj}`) - 3}`), 3);
   for (let p = 0; p < 1; p++) {
       let assist7 = String.fromCharCode(99,104,101,99,107,115,0);
       let basketballA = String.fromCharCode(113,95,49,57,0);
       let catagory6 = String.fromCharCode(115,111,99,114,101,97,116,101,0);
       let logoutM = String.fromCharCode(122,101,114,111,105,110,103,0);
          let historyc = 5.0;
          let router2 = String.fromCharCode(110,111,116,105,102,121,0);
         catagory6 = `${catagory6.length}`;
         historyc *= router2.length;
         router2 = `${1 - parseInt(`${historyc}`)}`;
         basketballA += `${basketballA.length}`;
       let expiredm = 5.0;
       let langkeyp = 2.0;
         assist7 += `${(String.fromCharCode(104,0) == assist7 ? parseInt(`${langkeyp}`) : assist7.length)}`;
      let volumea = catagory6 == String.fromCharCode(119,97,99,50,101,0);
      do {
          let half0: Array<any> = [43, 748, 762];
         catagory6 = `${1 << (Math.min(5, logoutM.length))}`;
         half0.push(3 & half0.length);
         if (volumea) {
            break;
         }
      } while ((basketballA.includes(catagory6)) && volumea);
         basketballA = "1";
         basketballA = `${2 % (Math.max(3, catagory6.length))}`;
      if (logoutM == String.fromCharCode(107,0)) {
          let singaporeZ = String.fromCharCode(100,101,110,111,105,115,101,102,105,108,116,101,114,0);
          let homeg: Array<any> = [424, 965];
         basketballA = `${logoutM.length & 3}`;
         singaporeZ += "2";
         homeg = [3];
      }
         langkeyp *= 1 + basketballA.length;
      while (!assist7.endsWith(catagory6)) {
          let fastp = false;
          let collectionT = false;
          let combinedA = 0.0;
          let tooltips5: Map<any, any> = new Map([[String.fromCharCode(119,116,118,102,105,108,101,0),String.fromCharCode(114,101,97,99,104,0)], [String.fromCharCode(119,117,110,100,101,102,0),String.fromCharCode(108,105,99,101,110,115,101,115,95,114,95,49,50,0)], [String.fromCharCode(110,97,116,117,114,97,108,0),String.fromCharCode(101,120,112,105,114,101,115,0)]]);
          let whistleK = 0;
         assist7 += "3";
         fastp = whistleK < 64;
         collectionT = collectionT || !fastp;
         combinedA *= whistleK;
         tooltips5.set(`${combinedA}`, parseInt(`${combinedA}`) ^ 1);
         break;
      }
      if (logoutM.length <= basketballA.length) {
         logoutM = `${assist7.length}`;
      }
          let networkG = 4.0;
          let moduleJ: Array<any> = [945, 25];
          let watchb = 4.0;
         expiredm /= Math.max(4, 1);
         networkG += parseFloat(`${2}`);
         moduleJ.push(moduleJ.length);
         watchb -= 2;
      resultr += `${(assist7 == String.fromCharCode(120,0) ? (gpaya ? 2 : 1) : assist7.length)}`;
   }

    dispatch(hideBottomSheetAction());

   if ((gifte.size * 4) == 5 && 4 == (stationG * gifte.size)) {
      stationG /= Math.max(5, resultr.length);
   }
      loadingm += `${1 / (Math.max(1, parseInt(`${placementg}`)))}`;
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
            color: loginValue === "" || !isReadTermNCondition ? "white" : 'white',
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
