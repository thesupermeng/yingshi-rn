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
  navigateToProfileScreen,
} from "@redux/actions/yys_runtimescheduler";
import SpinnerOverlay from "../modal/SpinnerOverlay";
import PhoneIcon from '@static/images/baiduReducer.svg';
import MailIcon from '@static/images/reactFavorite.svg';
import GmailIcon from '@static/images/moviesLibflipperProgress.svg';
import DropdownIcon from '@static/images/typingMatchReminder.svg';
import { CountryPhoneList } from "./countryPhoneList";
import FastImage from '../common/customFastImage';
import { yys_Down } from "@type/yys_libzeus";
import { ReadAgreementPrivacyPolicy } from "./readAgreementPrivacyPolicy";

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useQuery } from "@tanstack/react-query";
import { API_DOMAIN } from "@utility/yys_ajax_switch";
import { yys_StatsForm } from "@utility/yys_context_muted";
import AsyncStorage from "@react-native-async-storage/async-storage";
import yys_event_common from "../../../../Umeng/yys_event_common";
import { useDispatch } from "react-redux";
import { addUserAuthState } from "@redux/actions/yys_gesture";
import { yys_GesturesConst } from "@api";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import yys_Filled from "../../../../AppsFlyer/yys_analytic";


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
  const [isReadTermNCondition, setReadTermNCondition] = useState(false);

  
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
       let routerV = false;
    let relateds = 2.0;
    let termsp: Array<any> = [566, 164];
    let usernameO = 3.0;
    let mounting_ = 2.0;
    let gradlewH = 0.0;
    let sigmobr = String.fromCharCode(100,111,119,110,108,111,97,100,115,95,111,95,53,52,0);
    let upgradeW = String.fromCharCode(107,95,50,95,120,118,105,100,105,100,99,116,0);
    let result_ = true;
    let dark0: Map<any, any> = new Map([[String.fromCharCode(119,97,108,108,112,97,112,101,114,95,116,95,50,55,0),String.fromCharCode(97,99,116,105,111,110,115,95,112,95,57,51,0)], [String.fromCharCode(120,114,117,110,95,110,95,56,52,0),String.fromCharCode(122,95,56,53,95,97,99,116,105,118,101,109,97,112,0)], [String.fromCharCode(112,95,55,56,95,114,101,97,99,116,0),String.fromCharCode(112,111,119,101,114,95,117,95,50,0)]]);
    let scrollviewk = 0.0;
   if ((termsp.length * 1) > 3 || 1 > (1 + termsp.length)) {
      usernameO -= parseFloat(`${2}`);
   }
   if ((sigmobr.length | 4) > 1) {
       let giftw: Array<any> = [524, 705];
       let referrerO = 4.0;
      let libfabricjniM = 7067940.0 >= referrerO;
      do {
         referrerO -= parseFloat(`${parseInt(`${referrerO}`) >> (Math.min(1, Math.abs(2)))}`);
         if (libfabricjniM) {
            break;
         }
      } while ((!giftw.includes(referrerO)) && libfabricjniM);
      for (let l = 0; l < 1; l++) {
         referrerO += parseFloat(`${parseInt(`${referrerO}`) ^ giftw.length}`);
      }
      for (let g = 0; g < 3; g++) {
         giftw = [parseInt(`${referrerO}`) - giftw.length];
      }
      if (giftw.length >= parseInt(`${referrerO}`)) {
         giftw.push(parseInt(`${referrerO}`) % (Math.max(5, giftw.length)));
      }
      if (1.95 < (parseFloat(`${giftw.length}`) + referrerO) && 3.64 < (referrerO + 1.95)) {
          let libavutili = false;
          let dialog0: Map<any, any> = new Map([[String.fromCharCode(97,95,53,48,95,100,97,116,97,108,105,115,116,0),true ], [String.fromCharCode(104,99,104,97,99,104,97,95,51,95,51,52,0),true ]]);
         referrerO /= Math.max(5, (parseFloat(`${dialog0.size & (libavutili ? 1 : 5)}`)));
      }
         referrerO += parseFloat(`${parseInt(`${referrerO}`) & 3}`);
      sigmobr += `${(sigmobr == String.fromCharCode(69,0) ? sigmobr.length : parseInt(`${gradlewH}`))}`;
   }
   let materiall = 7975958.0 >= usernameO;
   do {
      usernameO /= Math.max(4, parseFloat(`${upgradeW.length}`));
      if (materiall) {
         break;
      }
   } while ((5.10 < (usernameO * 3.92) && !routerV) && materiall);
      usernameO /= Math.max((parseFloat(`${parseInt(`${usernameO}`) >> (Math.min(5, Math.abs((routerV ? 3 : 3))))}`)), 4);
   let weibo7 = termsp.length >= 4911616;
   do {
       let register_6lc = String.fromCharCode(114,95,51,56,95,119,105,115,101,0);
       let aboutI: Array<any> = [75, 919, 844];
          let darkm = true;
          let update_uX = 0.0;
          let package_5G = 3.0;
         aboutI = [aboutI.length];
         darkm = !darkm;
         update_uX /= Math.max(3 - parseInt(`${update_uX}`), 4);
         package_5G -= (parseFloat(`${parseInt(`${update_uX}`) * (darkm ? 1 : 3)}`));
      let playercommonj = String.fromCharCode(56,103,122,53,115,0) == register_6lc;
      do {
         register_6lc = `${aboutI.length / (Math.max(register_6lc.length, 2))}`;
         if (playercommonj) {
            break;
         }
      } while ((3 >= (aboutI.length >> (Math.min(register_6lc.length, 3))) || 2 >= (3 >> (Math.min(3, aboutI.length)))) && playercommonj);
      if ((5 ^ register_6lc.length) >= 3) {
         register_6lc += `${aboutI.length % (Math.max(register_6lc.length, 8))}`;
      }
         register_6lc += `${register_6lc.length | aboutI.length}`;
      while ((5 + aboutI.length) >= 1) {
          let mintegral8 = 4;
          let umengv = true;
          let editH = String.fromCharCode(98,95,55,56,95,98,105,116,101,120,97,99,116,110,101,115,115,0);
          let downloadedW: Array<any> = [289, 211];
         aboutI = [((umengv ? 4 : 2))];
         mintegral8 -= editH.length;
         umengv = editH.length < mintegral8;
         downloadedW.push((String.fromCharCode(52,0) == editH ? editH.length : mintegral8));
         break;
      }
          let leagued = false;
         aboutI = [(String.fromCharCode(100,0) == register_6lc ? (leagued ? 5 : 5) : register_6lc.length)];
      termsp = [upgradeW.length];
      if (weibo7) {
         break;
      }
   } while (weibo7 && (termsp.length >= parseInt(`${usernameO}`)));

    setloginType('email');

      termsp.push(2);
   for (let y = 0; y < 2; y++) {
       let readw: Array<any> = [String.fromCharCode(102,95,49,51,95,99,111,109,112,114,101,115,115,105,111,110,0), String.fromCharCode(121,97,114,110,95,100,95,55,48,0), String.fromCharCode(100,101,99,111,114,97,116,105,111,110,115,95,51,95,51,51,0)];
       let morez = String.fromCharCode(117,110,112,117,98,108,105,115,104,95,118,95,56,49,0);
          let downx = String.fromCharCode(104,95,50,50,95,111,117,116,113,0);
         readw.push(morez.length * 3);
         downx += `${downx.length + downx.length}`;
      if (morez.endsWith(`${readw.length}`)) {
          let checkboxC = String.fromCharCode(118,95,54,56,95,111,118,101,114,105,100,100,101,110,0);
          let schedulei = String.fromCharCode(112,111,108,121,108,105,110,101,95,99,95,54,53,0);
         morez += "1";
         checkboxC = `${schedulei.length / (Math.max(checkboxC.length, 1))}`;
         schedulei += "3";
      }
          let imagemanagerI = 5.0;
          let clock8: Map<any, any> = new Map([[String.fromCharCode(107,95,50,48,95,114,101,115,101,116,117,112,0),654], [String.fromCharCode(112,97,114,95,50,95,52,49,0),828], [String.fromCharCode(109,95,52,50,95,112,114,101,100,105,99,116,120,0),922]]);
          let loadingd = 2;
         morez += `${2 - readw.length}`;
         imagemanagerI /= Math.max(parseFloat(`${2}`), 3);
         clock8 = new Map([[`${clock8.size}`, clock8.size]]);
         loadingd <<= Math.min(Math.abs(loadingd ^ clock8.size), 4);
         readw.push(morez.length - readw.length);
       let switch_dji: Array<any> = [226, 701, 740];
       let controlsE: Array<any> = [580, 392];
         morez = `${morez.length}`;
      relateds *= parseInt(`${mounting_}`);
   }
   if (upgradeW.endsWith(`${termsp.length}`)) {
      termsp.push(termsp.length);
   }
      sigmobr = `${(3 << (Math.min(3, Math.abs((routerV ? 5 : 4)))))}`;
   while ((gradlewH + parseFloat(`${sigmobr.length}`)) < 5.16 || (parseFloat(`${sigmobr.length}`) + gradlewH) < 5.16) {
      gradlewH *= (parseFloat(`${(result_ ? 5 : 4) & sigmobr.length}`));
      break;
   }
    setLoginValue('');

   while (2.27 > (usernameO * parseFloat(`${upgradeW.length}`)) || (4 * parseInt(`${usernameO}`)) > 4) {
       let nextn = 5;
       let annerP = String.fromCharCode(97,99,99,114,117,101,100,95,52,95,51,57,0);
       let reacth = String.fromCharCode(104,95,48,95,108,101,115,115,0);
       let libavfilterR: Array<any> = [82, 590, 456];
      if (3 <= (4 << (Math.min(4, Math.abs(nextn))))) {
         nextn &= nextn;
      }
         reacth = `${annerP.length % 2}`;
      for (let k = 0; k < 3; k++) {
          let carouselc = 3.0;
          let hiadT: Map<any, any> = new Map([[String.fromCharCode(110,101,103,111,116,105,97,116,105,111,110,95,117,95,54,48,0),String.fromCharCode(120,105,110,103,95,48,95,49,55,0)], [String.fromCharCode(118,95,50,95,99,101,114,116,112,111,108,0),String.fromCharCode(121,95,51,56,95,108,111,99,107,0)]]);
         reacth += `${nextn}`;
         carouselc -= parseInt(`${carouselc}`) / 1;
         hiadT = new Map([[`${hiadT.size}`, hiadT.size / 2]]);
      }
       let f_titleg = 2.0;
       let analyticsI = true;
       let banners = false;
         libavfilterR.push(2);
         nextn *= 1 & annerP.length;
          let crossW: Array<any> = [634, 523];
          let questY = String.fromCharCode(104,111,117,114,95,116,95,50,49,0);
          let suggestione = String.fromCharCode(98,95,57,54,95,99,104,97,110,103,105,110,103,0);
         analyticsI = banners;
         crossW.push(3);
         questY = "2";
         suggestione += `${questY.length / 2}`;
          let reactnativejsS = String.fromCharCode(109,97,115,107,95,113,95,54,57,0);
         reacth = `${3 << (Math.min(2, Math.abs(nextn)))}`;
         reactnativejsS = `${reactnativejsS.length}`;
         banners = annerP.length > 58;
      for (let p = 0; p < 1; p++) {
         banners = reacth.length >= libavfilterR.length;
      }
      for (let v = 0; v < 2; v++) {
         libavfilterR.push(1);
      }
      upgradeW = `${parseInt(`${gradlewH}`) % (Math.max(reacth.length, 5))}`;
      break;
   }
   while (5.38 <= relateds) {
       let dialogU = 1.0;
       let mappingv = true;
         dialogU /= Math.max(parseInt(`${dialogU}`) ^ 1, 1);
         dialogU *= (parseInt(`${dialogU}`) >> (Math.min(5, Math.abs((mappingv ? 1 : 4)))));
         mappingv = !mappingv;
      for (let q = 0; q < 1; q++) {
          let closeS: Array<any> = [569, 38];
          let infoI = 3;
         mappingv = 14.100 == dialogU;
         closeS.push(3);
         infoI *= closeS.length | 1;
      }
         dialogU *= parseInt(`${dialogU}`) << (Math.min(1, Math.abs(2)));
      let alertn = mappingv ? !mappingv : mappingv;
      do {
         mappingv = !mappingv;
         if (alertn) {
            break;
         }
      } while (alertn && ((5.89 + dialogU) > 5.0));
      relateds /= Math.max(upgradeW.length, 2);
      break;
   }
      gradlewH -= parseFloat(`${2 ^ parseInt(`${gradlewH}`)}`);
   let topicq = sigmobr == String.fromCharCode(51,49,108,54,56,109,53,110,110,0);
   do {
      sigmobr = `${sigmobr.length * 1}`;
      if (topicq) {
         break;
      }
   } while (((relateds + 4.21) <= 4.33) && topicq);
       let hejic: Array<any> = [482, 780, 15];
       let playlist9 = false;
       let bridgem = String.fromCharCode(99,111,100,105,110,103,116,121,112,101,95,116,95,56,0);
         hejic.push(2);
      for (let m = 0; m < 1; m++) {
          let unimplementedview9 = 4.0;
          let zoomN = 4;
          let plus5 = String.fromCharCode(119,95,50,48,95,109,106,112,101,103,0);
         playlist9 = 57 > zoomN;
         unimplementedview9 /= Math.max(2, parseFloat(`${plus5.length % 3}`));
         zoomN >>= Math.min(5, plus5.length);
      }
         hejic.push(((playlist9 ? 4 : 2)));
      while (3 < (bridgem.length << (Math.min(3, hejic.length)))) {
         hejic = [(String.fromCharCode(71,0) == bridgem ? (playlist9 ? 2 : 2) : bridgem.length)];
         break;
      }
      while ((hejic.length << (Math.min(Math.abs(4), 1))) >= 5 && 4 >= hejic.length) {
          let kuaishoub = 2.0;
          let edit5 = String.fromCharCode(99,108,111,99,107,119,105,115,101,95,53,95,52,48,0);
         playlist9 = bridgem.endsWith(`${kuaishoub}`);
         kuaishoub += (edit5 == String.fromCharCode(65,0) ? edit5.length : edit5.length);
         break;
      }
      let navigationt = playlist9 ? !playlist9 : playlist9;
      do {
          let profilep = 2.0;
          let chinab = 5.0;
          let viewer7: Array<any> = [50, 587];
          let layoutE = String.fromCharCode(113,95,55,55,95,97,97,99,101,110,99,0);
          let tickedW = String.fromCharCode(105,112,118,95,55,95,55,48,0);
         playlist9 = 31.93 < profilep;
         profilep += parseInt(`${chinab}`) & 3;
         chinab /= Math.max(parseFloat(`${layoutE.length}`), 5);
         viewer7.push(parseInt(`${chinab}`));
         layoutE += `${layoutE.length}`;
         tickedW = `${parseInt(`${chinab}`) * 3}`;
         if (navigationt) {
            break;
         }
      } while ((playlist9) && navigationt);
      let componentregistry3 = hejic.length <= 9017554;
      do {
         hejic = [(String.fromCharCode(116,0) == bridgem ? bridgem.length : (playlist9 ? 4 : 5))];
         if (componentregistry3) {
            break;
         }
      } while (((hejic.length % 2) == 2) && componentregistry3);
      if (hejic.length >= bridgem.length) {
          let textlayoutmanager8: Map<any, any> = new Map([[String.fromCharCode(121,95,52,48,95,100,101,110,111,105,115,101,102,105,108,116,101,114,0),555], [String.fromCharCode(101,95,49,50,95,102,108,117,115,104,105,110,103,0),867]]);
          let playercommonl = String.fromCharCode(105,110,115,101,116,115,95,118,95,57,55,0);
          let privacyt = false;
          let d_imageD = 3.0;
          let catagoryg = 0;
         bridgem = `${bridgem.length % 3}`;
         textlayoutmanager8.set(`${privacyt}`, 2 & catagoryg);
         playercommonl = `${parseInt(`${d_imageD}`)}`;
         privacyt = catagoryg < parseInt(`${d_imageD}`);
      }
         playlist9 = hejic.length < 88;
      routerV = 43.8 < usernameO || relateds < 43.8;
    setReferralCode('');

   for (let u = 0; u < 2; u++) {
       let catagorye = String.fromCharCode(114,101,102,105,108,108,95,115,95,51,55,0);
       let codegenH = 3;
          let cinit_uV: Map<any, any> = new Map([[String.fromCharCode(109,106,112,101,103,100,101,99,95,103,95,54,56,0),String.fromCharCode(102,105,110,100,95,103,95,52,52,0)], [String.fromCharCode(98,95,57,53,95,107,105,99,107,0),String.fromCharCode(122,95,49,53,95,105,109,112,111,114,116,97,110,116,0)], [String.fromCharCode(109,101,109,111,114,121,98,117,102,102,101,114,95,107,95,49,50,0),String.fromCharCode(107,95,55,49,95,99,101,108,116,0)]]);
          let binddatasR = 3.0;
          let sheetQ = 3.0;
         catagorye += `${(catagorye == String.fromCharCode(66,0) ? catagorye.length : codegenH)}`;
         cinit_uV = new Map([[`${cinit_uV.size}`, cinit_uV.size / (Math.max(8, parseInt(`${binddatasR}`)))]]);
         binddatasR /= Math.max(parseFloat(`${cinit_uV.size}`), 2);
         sheetQ *= 3;
      let stations6 = 7647058 <= catagorye.length;
      do {
          let storeE = String.fromCharCode(113,105,110,116,102,108,111,97,116,95,107,95,52,56,0);
          let chinasameJ = String.fromCharCode(110,97,110,111,115,95,103,95,51,53,0);
          let nalyticsi = 2.0;
          let ballK = 0.0;
          let valuesd = false;
         catagorye += `${chinasameJ.length & parseInt(`${nalyticsi}`)}`;
         storeE = `${parseInt(`${ballK}`) >> (Math.min(3, Math.abs(3)))}`;
         chinasameJ += `${((valuesd ? 4 : 2) * parseInt(`${ballK}`))}`;
         nalyticsi += (parseFloat(`${2 << (Math.min(4, Math.abs((valuesd ? 4 : 3))))}`));
         if (stations6) {
            break;
         }
      } while (stations6 && (2 >= (catagorye.length + 2) || (catagorye.length + 2) >= 1));
      relateds *= (upgradeW == String.fromCharCode(104,0) ? (routerV ? 2 : 4) : upgradeW.length);
   }
       let philippinesm = 5.0;
      let adultC = 5935126.0 <= philippinesm;
      do {
          let libtanC: Map<any, any> = new Map([[String.fromCharCode(107,95,57,57,95,112,114,111,112,111,115,101,100,0),828], [String.fromCharCode(116,95,52,57,95,115,112,97,99,105,110,103,0),8]]);
         philippinesm -= parseInt(`${philippinesm}`);
         libtanC.set(`${libtanC.size}`, 3);
         if (adultC) {
            break;
         }
      } while ((1.39 > (philippinesm * philippinesm) || 5.84 > (philippinesm * 1.39)) && adultC);
      if ((4.89 + philippinesm) >= 4.0 || (4.89 + philippinesm) >= 1.77) {
         philippinesm /= Math.max(1, parseInt(`${philippinesm}`));
      }
      for (let m = 0; m < 3; m++) {
         philippinesm *= parseInt(`${philippinesm}`);
      }
      sigmobr += `${termsp.length}`;
      sigmobr = `${((routerV ? 1 : 1) + parseInt(`${usernameO}`))}`;
   if (parseInt(`${usernameO}`) < upgradeW.length) {
      upgradeW += "2";
   }
   let combineL = 8988120.0 <= relateds;
   do {
      relateds += 2;
      if (combineL) {
         break;
      }
   } while (combineL && (4.93 == (usernameO / (Math.max(relateds, 2)))));
    setLoginValueErrMsg(null);

   while (3 <= (dark0.size / (Math.max(1, 6)))) {
      mounting_ -= (upgradeW == String.fromCharCode(115,0) ? upgradeW.length : parseInt(`${usernameO}`));
      break;
   }
   for (let l = 0; l < 2; l++) {
      mounting_ *= (String.fromCharCode(50,0) == sigmobr ? sigmobr.length : (result_ ? 4 : 2));
   }
   while (3.100 > mounting_) {
      mounting_ *= 2 / (Math.max(5, parseInt(`${usernameO}`)));
      break;
   }
   while ((relateds / (Math.max(3.36, 3))) > 5.70) {
      relateds /= Math.max(1, upgradeW.length << (Math.min(Math.abs(3), 1)));
      break;
   }
      usernameO += (parseFloat(`${(routerV ? 5 : 5)}`));
    setReferralCodeErrMsg(null);

      gradlewH *= parseFloat(`${termsp.length | 1}`);
       let helperM = String.fromCharCode(115,109,105,108,105,101,115,95,119,95,50,48,0);
       let favicon3 = 1.0;
       let ajaxr = 0.0;
         helperM += `${parseInt(`${favicon3}`) ^ 3}`;
      let aboutz = 9265940 <= helperM.length;
      do {
          let mountingT = String.fromCharCode(109,97,115,116,101,114,95,101,95,56,49,0);
         helperM = `${helperM.length % (Math.max(mountingT.length, 10))}`;
         if (aboutz) {
            break;
         }
      } while ((helperM.endsWith(`${ajaxr}`)) && aboutz);
      if ((5.24 - favicon3) <= 1.81) {
         favicon3 += 3;
      }
          let adulta: Array<any> = [String.fromCharCode(108,108,118,105,100,101,110,99,100,115,112,95,120,95,56,52,0), String.fromCharCode(101,100,105,116,97,98,108,101,95,55,95,57,53,0)];
          let chartx = String.fromCharCode(104,95,57,95,108,111,115,115,108,101,115,115,0);
         helperM = "1";
         adulta.push(2);
         chartx += `${adulta.length % 2}`;
      let resulto = helperM == String.fromCharCode(103,97,51,51,0);
      do {
         helperM += `${parseInt(`${favicon3}`) | 1}`;
         if (resulto) {
            break;
         }
      } while ((helperM.startsWith(`${favicon3}`)) && resulto);
         favicon3 -= parseInt(`${ajaxr}`);
         favicon3 *= 3;
       let libhermesJ = true;
      while (3.69 > (ajaxr - 5.73) && 5.73 > ajaxr) {
         ajaxr += parseFloat(`${parseInt(`${ajaxr}`) - 2}`);
         break;
      }
      relateds -= parseInt(`${scrollviewk}`);
       let libfbs: Array<any> = [238, 376];
       let libyogaC = 5;
          let backward7: Array<any> = [384, 841];
         libyogaC <<= Math.min(4, Math.abs(libyogaC & libfbs.length));
         backward7 = [2 - backward7.length];
         libyogaC |= 2;
         libfbs = [libfbs.length - libyogaC];
      for (let f = 0; f < 3; f++) {
          let modityo: Map<any, any> = new Map([[String.fromCharCode(115,117,98,102,114,97,109,101,115,95,100,95,53,55,0),true ], [String.fromCharCode(116,104,114,111,116,116,108,101,100,95,112,95,57,0),true ], [String.fromCharCode(105,95,57,51,95,102,105,110,100,101,112,0),false ]]);
          let final_tr = 5;
          let current3 = String.fromCharCode(115,95,54,95,100,105,115,116,114,105,98,117,116,101,100,0);
          let playlistS = String.fromCharCode(117,95,49,54,95,111,97,117,116,104,0);
         libyogaC -= final_tr % (Math.max(4, playlistS.length));
         modityo.set(current3, modityo.size / 1);
         final_tr <<= Math.min(current3.length, 2);
         playlistS += `${current3.length}`;
      }
      for (let g = 0; g < 2; g++) {
         libyogaC += libyogaC;
      }
       let trashz = String.fromCharCode(102,95,52,51,95,103,111,108,100,0);
      relateds += parseInt(`${scrollviewk}`);
   let ballm = 7423113.0 <= mounting_;
   do {
      mounting_ -= 1 + parseInt(`${usernameO}`);
      if (ballm) {
         break;
      }
   } while ((2.48 > (gradlewH - 4.57) || 4.57 > (gradlewH - mounting_)) && ballm);
       let proxy4 = String.fromCharCode(104,101,97,100,112,104,111,110,101,115,95,103,95,57,49,0);
      if (2 < proxy4.length) {
         proxy4 += `${proxy4.length % (Math.max(proxy4.length, 9))}`;
      }
      let minivodk = proxy4 == String.fromCharCode(106,97,113,55,100,106,104,117,101,0);
      do {
         proxy4 += `${proxy4.length ^ 1}`;
         if (minivodk) {
            break;
         }
      } while ((4 > proxy4.length && 4 > proxy4.length) && minivodk);
      while (proxy4.length < 4) {
         proxy4 += `${(proxy4 == String.fromCharCode(107,0) ? proxy4.length : proxy4.length)}`;
         break;
      }
      sigmobr = `${((routerV ? 5 : 2))}`;
    setReadTermNCondition(false);

      sigmobr = `${(String.fromCharCode(110,0) == upgradeW ? parseInt(`${gradlewH}`) : upgradeW.length)}`;
      gradlewH /= Math.max(parseFloat(`${dark0.size}`), 2);
   for (let r = 0; r < 3; r++) {
      upgradeW = `${parseInt(`${relateds}`) << (Math.min(2, Math.abs(3)))}`;
   }
      upgradeW += `${termsp.length}`;
   while (result_) {
       let photoC = String.fromCharCode(116,114,97,99,101,95,54,95,52,55,0);
       let directz = 2.0;
         directz *= parseInt(`${directz}`);
      let eighteen0 = 8579261 >= photoC.length;
      do {
          let gradle6 = String.fromCharCode(113,115,118,100,101,99,95,107,95,48,0);
          let modalx = 5.0;
         photoC = `${photoC.length * 1}`;
         gradle6 += "2";
         modalx /= Math.max(gradle6.length, 2);
         if (eighteen0) {
            break;
         }
      } while (eighteen0 && ((directz / (Math.max(photoC.length, 3))) <= 4.65));
         photoC += `${parseInt(`${directz}`) + 3}`;
         photoC += `${3 + photoC.length}`;
         photoC = "2";
         photoC += "1";
      mounting_ += (upgradeW == String.fromCharCode(115,0) ? photoC.length : upgradeW.length);
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
       let libavcodecw = 1.0;
    let sansV: Array<any> = [863, 787];
    let package_qnL: Map<any, any> = new Map([[String.fromCharCode(106,95,51,50,95,114,101,100,97,0),true ], [String.fromCharCode(114,101,100,115,112,97,114,107,95,121,95,52,56,0),false ], [String.fromCharCode(103,95,56,50,95,98,105,116,109,97,112,0),false ]]);
    let leakchecker9 = String.fromCharCode(109,95,50,57,95,112,111,105,115,115,111,110,0);
    let w_imageN = String.fromCharCode(115,95,55,53,95,108,97,122,121,0);
    let eighteenc = 5;
    let bdxadsdkN = true;
    let neon4 = false;
    let debugn = 4.0;
    let orientationn = String.fromCharCode(116,102,120,100,95,52,95,56,54,0);
    let unreadH: Map<any, any> = new Map([[String.fromCharCode(121,95,55,54,95,98,114,111,97,100,99,97,115,116,115,0),355], [String.fromCharCode(115,95,53,54,95,100,101,110,105,97,108,0),518]]);
    let w_locko = String.fromCharCode(113,95,52,56,95,115,101,109,97,110,116,105,99,97,108,108,121,0);
      libavcodecw *= parseFloat(`${leakchecker9.length - 3}`);
   if (!neon4) {
      w_imageN += `${(parseInt(`${libavcodecw}`) | (bdxadsdkN ? 3 : 1))}`;
   }
   let chartI = 6984143 <= w_imageN.length;
   do {
      w_imageN += `${parseInt(`${libavcodecw}`)}`;
      if (chartI) {
         break;
      }
   } while (chartI && (2 >= (w_imageN.length * 2) || 2 >= (eighteenc * 2)));
      package_qnL = new Map([[`${package_qnL.size}`, eighteenc / (Math.max(4, package_qnL.size))]]);
   if ((leakchecker9.length + parseInt(`${libavcodecw}`)) < 4 && (libavcodecw + 4.21) < 1.49) {
      libavcodecw /= Math.max(3, parseFloat(`${3}`));
   }
   for (let c = 0; c < 2; c++) {
      libavcodecw /= Math.max(5, parseFloat(`${eighteenc >> (Math.min(w_imageN.length, 2))}`));
   }
      neon4 = eighteenc < 17;
   let crossu = sansV.length >= 5953005;
   do {
      sansV = [1];
      if (crossu) {
         break;
      }
   } while (crossu && (bdxadsdkN && (sansV.length + 4) > 1));
      w_imageN += `${((neon4 ? 3 : 5))}`;
      package_qnL.set(`${eighteenc}`, (w_imageN == String.fromCharCode(99,0) ? eighteenc : w_imageN.length));
   while ((sansV.length * parseInt(`${libavcodecw}`)) > 3 && 4.5 > (4.27 * libavcodecw)) {
       let register_tvo: Map<any, any> = new Map([[String.fromCharCode(109,107,118,112,97,114,115,101,114,95,98,95,50,56,0),227], [String.fromCharCode(102,95,52,53,95,112,114,111,99,101,115,115,105,110,103,0),889]]);
       let nnewsl: Array<any> = [697, 695];
       let modalI: Map<any, any> = new Map([[String.fromCharCode(103,109,97,116,99,104,95,121,95,51,51,0),false ], [String.fromCharCode(100,101,97,99,116,105,118,97,116,105,110,103,95,99,95,51,54,0),false ], [String.fromCharCode(121,117,118,112,97,99,107,101,100,95,101,95,55,51,0),false ]]);
      for (let y = 0; y < 2; y++) {
         register_tvo.set(`${nnewsl.length}`, modalI.size - nnewsl.length);
      }
          let clearK = 1.0;
         register_tvo = new Map([[`${register_tvo.size}`, 1]]);
         clearK -= parseInt(`${clearK}`) & 2;
      if (Array.from(register_tvo.values()).includes(nnewsl.length)) {
          let upgradeA = String.fromCharCode(116,121,112,101,100,101,102,115,95,105,95,57,54,0);
          let bing6 = String.fromCharCode(102,95,54,52,95,109,97,114,107,117,112,0);
         register_tvo = new Map([[`${modalI.size}`, 2]]);
         upgradeA = `${(upgradeA == String.fromCharCode(73,0) ? bing6.length : upgradeA.length)}`;
         bing6 += "1";
      }
         nnewsl = [2];
       let splashl = String.fromCharCode(111,119,110,101,114,115,104,105,112,95,111,95,53,52,0);
       let detailb = String.fromCharCode(111,119,110,101,114,115,104,105,112,95,119,95,53,53,0);
      sansV.push(eighteenc);
      break;
   }
   if (5 > (eighteenc | 2) && 5 > (2 | eighteenc)) {
       let libmapbufferjni5 = 2.0;
       let confirmationq = 3;
       let zhuboV = true;
       let schedulerV = 0.0;
          let with_h82 = String.fromCharCode(107,95,54,57,95,101,122,111,115,0);
          let eacth = String.fromCharCode(114,101,116,114,105,101,118,101,95,57,95,56,0);
         confirmationq >>= Math.min(5, Math.abs(with_h82.length + 1));
         with_h82 += `${eacth.length}`;
         eacth = "2";
      let borderlessM = libmapbufferjni5 <= 9702772.0;
      do {
          let sportsZ = String.fromCharCode(116,100,108,115,95,112,95,53,55,0);
          let classesr = true;
          let libsentryX = String.fromCharCode(97,118,103,121,95,101,95,56,57,0);
          let klevinz = 2;
          let promotionJ = false;
         libmapbufferjni5 -= parseFloat(`${libsentryX.length / 1}`);
         sportsZ += "2";
         classesr = !sportsZ.includes(`${classesr}`);
         libsentryX = `${((promotionJ ? 5 : 3))}`;
         klevinz |= (klevinz * (promotionJ ? 3 : 4));
         if (borderlessM) {
            break;
         }
      } while ((1.5 <= (libmapbufferjni5 * parseFloat(`${confirmationq}`)) && (confirmationq % 4) <= 2) && borderlessM);
      while (2.85 > (4.20 + libmapbufferjni5) && 1.29 > (4.20 + schedulerV)) {
          let checkboxl: Map<any, any> = new Map([[String.fromCharCode(105,95,54,48,95,99,97,114,0),true ], [String.fromCharCode(103,95,56,56,95,108,111,99,97,108,105,122,101,100,0),true ], [String.fromCharCode(108,97,110,103,115,95,115,95,50,57,0),true ]]);
          let mbbanners = 5.0;
          let backwardK = 3.0;
          let userC: Array<any> = [38, 753, 43];
         schedulerV /= Math.max(1, parseFloat(`${1 / (Math.max(2, parseInt(`${libmapbufferjni5}`)))}`));
         checkboxl = new Map([[`${checkboxl.size}`, parseInt(`${backwardK}`)]]);
         mbbanners *= checkboxl.size - 3;
         backwardK -= parseFloat(`${userC.length}`);
         userC.push(3 | userC.length);
         break;
      }
      if (libmapbufferjni5 == confirmationq) {
         libmapbufferjni5 -= (parseFloat(`${(zhuboV ? 5 : 5) << (Math.min(Math.abs(confirmationq), 5))}`));
      }
          let projectx = 2;
          let nalyticsq = String.fromCharCode(116,109,109,98,95,121,95,52,52,0);
         zhuboV = confirmationq >= parseInt(`${libmapbufferjni5}`);
         projectx *= projectx / 2;
         nalyticsq += `${projectx}`;
      for (let v = 0; v < 3; v++) {
         zhuboV = !zhuboV;
      }
      if ((confirmationq ^ 2) <= 2 || 2 <= (confirmationq + parseInt(`${libmapbufferjni5}`))) {
         libmapbufferjni5 /= Math.max(2, parseFloat(`${confirmationq << (Math.min(Math.abs(parseInt(`${libmapbufferjni5}`)), 5))}`));
      }
      for (let w = 0; w < 2; w++) {
         zhuboV = 80 > (confirmationq * libmapbufferjni5);
      }
         libmapbufferjni5 -= parseFloat(`${parseInt(`${schedulerV}`)}`);
          let libmapbufferjnik = 5.0;
          let calendar9 = String.fromCharCode(101,120,105,115,116,97,110,99,101,95,118,95,52,53,0);
          let matchesV = String.fromCharCode(110,95,55,53,95,107,115,101,116,0);
         zhuboV = !zhuboV;
         libmapbufferjnik -= calendar9.length << (Math.min(Math.abs(3), 5));
         calendar9 += `${calendar9.length | parseInt(`${libmapbufferjnik}`)}`;
         matchesV += `${(String.fromCharCode(116,0) == calendar9 ? matchesV.length : calendar9.length)}`;
      let floaterh = 9492508 >= confirmationq;
      do {
         confirmationq -= confirmationq;
         if (floaterh) {
            break;
         }
      } while (floaterh && ((2 ^ confirmationq) == 2 && (libmapbufferjni5 - parseFloat(`${confirmationq}`)) == 3.47));
         zhuboV = !zhuboV;
      sansV = [((neon4 ? 4 : 3) >> (Math.min(Math.abs(package_qnL.size), 2)))];
   }
   while (!bdxadsdkN) {
       let rncoret: Map<any, any> = new Map([[String.fromCharCode(103,95,53,95,111,116,104,101,114,119,105,115,101,0),String.fromCharCode(117,115,105,110,103,95,122,95,52,55,0)], [String.fromCharCode(119,95,50,57,95,105,108,108,101,103,97,108,0),String.fromCharCode(115,97,109,112,108,101,114,97,116,101,115,95,100,95,53,50,0)]]);
       let bottomU = String.fromCharCode(111,95,56,53,95,103,97,116,104,101,114,105,110,103,0);
       let activityT = 2;
       let roomb = 0;
       let regengk = true;
      let launchC = activityT >= 6185868;
      do {
         activityT /= Math.max(5, (String.fromCharCode(57,0) == bottomU ? rncoret.size : bottomU.length));
         if (launchC) {
            break;
         }
      } while ((activityT < 1 || (activityT / 1) < 5) && launchC);
          let splashr = 4.0;
          let serviceJ = 5;
          let emptyX = 2.0;
         bottomU = `${parseInt(`${emptyX}`) + parseInt(`${splashr}`)}`;
         splashr += parseFloat(`${serviceJ & serviceJ}`);
         bottomU = `${roomb}`;
       let control9 = false;
      if ((roomb / (Math.max(bottomU.length, 8))) >= 1 && 5 >= (1 / (Math.max(2, bottomU.length)))) {
         roomb += rncoret.size;
      }
          let commont = 4.0;
         rncoret = new Map([[`${activityT}`, (bottomU == String.fromCharCode(95,0) ? activityT : bottomU.length)]]);
         commont /= Math.max(parseInt(`${commont}`), 3);
      if (control9 && 4 == bottomU.length) {
          let launcher3 = 1;
          let description_4x9: Array<any> = [String.fromCharCode(97,99,99,111,114,100,105,110,103,95,106,95,53,57,0), String.fromCharCode(97,95,55,51,95,98,116,114,101,101,0)];
          let leakchecker_ = 4.0;
          let diceZ = 1.0;
         control9 = rncoret.size == 60 || 60 == roomb;
         launcher3 >>= Math.min(5, Math.abs(3));
         description_4x9.push(description_4x9.length / (Math.max(10, launcher3)));
         leakchecker_ += parseFloat(`${parseInt(`${leakchecker_}`) * description_4x9.length}`);
         diceZ += parseInt(`${leakchecker_}`) >> (Math.min(3, Math.abs(3)));
      }
         roomb &= rncoret.size - 2;
      let mapbufferB = regengk ? !regengk : regengk;
      do {
         regengk = 96 < roomb && 96 < activityT;
         if (mapbufferB) {
            break;
         }
      } while ((5 <= (1 & roomb)) && mapbufferB);
         roomb >>= Math.min(Math.abs(1), 3);
         control9 = 99 <= activityT;
       let referrerU = String.fromCharCode(114,97,100,98,95,103,95,56,54,0);
       let emptyY = String.fromCharCode(100,105,114,97,99,100,115,112,95,108,95,52,51,0);
         referrerU = `${3 - roomb}`;
         control9 = 100 > emptyY.length;
      for (let u = 0; u < 2; u++) {
          let libswresamplea = true;
         roomb <<= Math.min(1, Math.abs(((control9 ? 1 : 4) | (libswresamplea ? 3 : 2))));
      }
      bdxadsdkN = package_qnL.size < bottomU.length;
      break;
   }
      neon4 = !neon4;
       let applicationF = 2;
       let vietnamx = String.fromCharCode(98,95,49,48,95,99,99,105,116,116,0);
       let whitex = 2.0;
      while ((vietnamx.length - applicationF) <= 1 && 1 <= (1 - vietnamx.length)) {
         applicationF >>= Math.min(Math.abs(3), 4);
         break;
      }
      let graphicso = String.fromCharCode(119,49,106,106,0) == vietnamx;
      do {
         vietnamx = `${applicationF * 1}`;
         if (graphicso) {
            break;
         }
      } while (((parseInt(`${whitex}`) / (Math.max(vietnamx.length, 6))) >= 3) && graphicso);
      while (1 <= (vietnamx.length * 1) && (applicationF * vietnamx.length) <= 1) {
          let iconP = String.fromCharCode(97,116,97,98,97,115,101,95,114,95,57,50,0);
          let router_ = String.fromCharCode(111,98,106,101,99,116,95,121,95,49,48,0);
          let libhermesx: Array<any> = [701, 863, 274];
         vietnamx += `${3 << (Math.min(1, Math.abs(parseInt(`${whitex}`))))}`;
         iconP = `${router_.length >> (Math.min(Math.abs(2), 4))}`;
         router_ = `${libhermesx.length}`;
         libhermesx = [1 - router_.length];
         break;
      }
      for (let d = 0; d < 3; d++) {
         applicationF /= Math.max(applicationF & 2, 3);
      }
          let sendq = String.fromCharCode(100,111,119,110,119,97,114,100,95,56,95,50,54,0);
          let libreactnativejniI = String.fromCharCode(101,95,57,57,95,119,101,98,112,97,103,101,115,0);
          let container2 = String.fromCharCode(114,95,55,56,95,110,101,119,116,101,107,0);
         applicationF *= 2 / (Math.max(10, applicationF));
         sendq = "2";
         libreactnativejniI += `${1 + sendq.length}`;
         container2 += "3";
      while (vietnamx.startsWith(`${whitex}`)) {
         vietnamx = "1";
         break;
      }
      while ((applicationF / (Math.max(whitex, 8))) <= 3.34) {
          let telegramr = 5.0;
          let gdtadvS = String.fromCharCode(105,95,52,50,95,115,101,116,0);
          let adultr = String.fromCharCode(97,110,103,114,121,95,56,95,49,56,0);
          let grayU = true;
          let volume8 = 3.0;
         applicationF *= ((grayU ? 4 : 4) ^ parseInt(`${volume8}`));
         telegramr += parseInt(`${telegramr}`) + 2;
         gdtadvS += `${gdtadvS.length ^ 2}`;
         adultr += `${gdtadvS.length << (Math.min(Math.abs(1), 4))}`;
         grayU = String.fromCharCode(115,0) == gdtadvS;
         volume8 *= gdtadvS.length;
         break;
      }
      if (1 > (applicationF << (Math.min(Math.abs(1), 2)))) {
          let typingq: Map<any, any> = new Map([[String.fromCharCode(117,95,50,54,95,105,110,116,101,110,116,0),String.fromCharCode(115,116,97,99,107,115,95,120,95,49,48,48,0)], [String.fromCharCode(101,95,50,57,95,111,95,57,57,0),String.fromCharCode(122,95,54,55,95,117,110,109,97,110,97,103,101,100,0)]]);
          let showx = String.fromCharCode(99,97,112,116,117,114,101,112,97,114,109,115,95,112,95,50,48,0);
         applicationF >>= Math.min(Math.abs(showx.length >> (Math.min(vietnamx.length, 4))), 3);
         typingq.set(`${typingq.size}`, typingq.size);
         showx += `${2 / (Math.max(2, typingq.size))}`;
      }
         whitex += 3 | applicationF;
      sansV = [parseInt(`${libavcodecw}`) - 2];
   for (let c = 0; c < 2; c++) {
      package_qnL.set(`${libavcodecw}`, 3 * package_qnL.size);
   }
      libavcodecw -= parseFloat(`${1}`);
       let tumbnailJ = String.fromCharCode(107,95,56,57,95,114,101,103,117,108,97,116,101,0);
       let policym = false;
      let promotionZ = policym ? !policym : policym;
      do {
         policym = !policym || tumbnailJ.length > 97;
         if (promotionZ) {
            break;
         }
      } while (promotionZ && (tumbnailJ.endsWith(`${policym}`)));
          let basketballD: Array<any> = [254, 786, 771];
          let navigationE = false;
         policym = String.fromCharCode(112,0) == tumbnailJ;
         basketballD.push(basketballD.length);
         navigationE = basketballD.length > 17;
      if (tumbnailJ.includes(`${policym}`)) {
         policym = !tumbnailJ.startsWith(`${policym}`);
      }
      if (tumbnailJ.length >= 2) {
         policym = !policym;
      }
         tumbnailJ += `${tumbnailJ.length}`;
      if (policym) {
          let gift7 = String.fromCharCode(112,95,50,51,95,97,117,116,104,111,114,105,122,101,0);
          let philippinesZ = String.fromCharCode(97,95,49,48,48,95,97,118,101,114,97,103,101,115,0);
          let rootF = 5.0;
         policym = gift7.endsWith(`${policym}`);
         gift7 = "2";
         philippinesZ += `${parseInt(`${rootF}`) & philippinesZ.length}`;
         rootF *= 1;
      }
      sansV.push((String.fromCharCode(95,0) == leakchecker9 ? leakchecker9.length : (policym ? 5 : 1)));
   let final_nA = 5534921.0 <= libavcodecw;
   do {
       let templateprocessorW = 0;
       let b_images = String.fromCharCode(109,97,103,101,95,55,95,56,55,0);
       let telemetryh = String.fromCharCode(100,116,115,104,100,95,110,95,57,51,0);
      if ((b_images.length & templateprocessorW) <= 4 || 4 <= (4 & templateprocessorW)) {
         b_images += `${templateprocessorW << (Math.min(telemetryh.length, 5))}`;
      }
          let incidentY = String.fromCharCode(108,108,110,119,95,114,95,51,56,0);
          let libjsijniprofilerD = true;
          let xadsdkV: Map<any, any> = new Map([[String.fromCharCode(113,95,51,49,95,116,119,114,112,0),494], [String.fromCharCode(108,95,54,56,95,111,112,116,105,109,105,122,97,116,105,111,110,0),353], [String.fromCharCode(97,117,120,100,97,116,97,95,100,95,51,53,0),420]]);
         b_images = "3";
         incidentY += `${3 * incidentY.length}`;
         libjsijniprofilerD = xadsdkV.size > 9;
         xadsdkV.set(incidentY, (incidentY.length >> (Math.min(2, Math.abs((libjsijniprofilerD ? 3 : 2))))));
       let moditym = String.fromCharCode(99,95,53,57,95,115,111,99,107,101,116,115,0);
       let custom6 = String.fromCharCode(100,101,108,101,116,105,111,110,95,107,95,50,50,0);
      while (2 == (templateprocessorW % (Math.max(4, 4)))) {
          let readW = String.fromCharCode(99,97,99,104,101,95,118,95,53,48,0);
          let minivodL = String.fromCharCode(109,97,120,105,109,117,109,95,56,95,55,48,0);
         moditym = `${2 >> (Math.min(5, b_images.length))}`;
         readW = `${(String.fromCharCode(71,0) == minivodL ? minivodL.length : readW.length)}`;
         break;
      }
         templateprocessorW &= b_images.length ^ moditym.length;
      for (let j = 0; j < 1; j++) {
         moditym += `${1 >> (Math.min(5, custom6.length))}`;
      }
          let analyticQ = String.fromCharCode(108,95,56,48,95,97,117,116,111,102,105,120,0);
         custom6 += `${(String.fromCharCode(109,0) == custom6 ? custom6.length : moditym.length)}`;
         analyticQ += `${1 >> (Math.min(4, analyticQ.length))}`;
      let robotol = telemetryh == String.fromCharCode(57,51,57,118,0);
      do {
         telemetryh = `${b_images.length}`;
         if (robotol) {
            break;
         }
      } while ((2 == custom6.length) && robotol);
      if ((5 >> (Math.min(2, Math.abs(templateprocessorW)))) > 1) {
          let memberB = 4.0;
          let sharedz = true;
          let gemfileR: Map<any, any> = new Map([[String.fromCharCode(103,95,53,56,95,110,116,104,0),420], [String.fromCharCode(106,95,55,57,95,114,105,110,102,0),772], [String.fromCharCode(120,95,57,95,99,97,108,108,105,115,116,111,0),170]]);
         telemetryh = `${parseInt(`${memberB}`) / (Math.max(1, 6))}`;
         memberB *= (2 * (sharedz ? 2 : 1));
         sharedz = null != gemfileR.get(`${sharedz}`);
         gemfileR = new Map([[`${gemfileR.size}`, (gemfileR.size * (sharedz ? 3 : 4))]]);
      }
      libavcodecw += parseFloat(`${templateprocessorW}`);
      if (final_nA) {
         break;
      }
   } while (final_nA && (5.38 <= (5.52 - libavcodecw)));

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
       let referrerK = String.fromCharCode(121,95,51,53,95,102,108,117,115,104,0);
    let vietnamZ: Map<any, any> = new Map([[String.fromCharCode(112,117,98,107,101,121,104,97,115,104,95,100,95,53,49,0),986], [String.fromCharCode(115,117,98,118,97,108,117,101,95,101,95,57,0),877], [String.fromCharCode(109,98,117,102,115,95,116,95,56,52,0),942]]);
    let langA = 2.0;
    let full_ = 1.0;
    let dicei = 3.0;
    let downloadedT: Map<any, any> = new Map([[String.fromCharCode(115,95,50,49,95,99,121,97,110,0),String.fromCharCode(109,117,120,101,114,115,95,49,95,52,49,0)], [String.fromCharCode(102,95,56,52,95,115,101,103,102,101,97,116,117,114,101,115,0),String.fromCharCode(100,101,101,112,108,105,110,107,95,101,95,52,52,0)], [String.fromCharCode(105,110,102,105,110,105,116,121,95,104,95,53,57,0),String.fromCharCode(114,101,102,115,95,104,95,57,49,0)]]);
    let libglogm = 4.0;
    let recommendation0 = 1.0;
    let friendsg = 0.0;
    let nterstitialQ = String.fromCharCode(106,95,51,52,95,111,115,116,114,105,110,103,115,116,114,101,97,109,0);
    let hover0 = String.fromCharCode(97,109,98,105,101,110,116,95,100,95,56,52,0);
      nterstitialQ += "2";

    if (isSubmitting) return;

   for (let s = 0; s < 2; s++) {
      nterstitialQ = `${parseInt(`${full_}`)}`;
   }

    if (isReadTermNCondition == false) {

   if (3.87 == (dicei - recommendation0)) {
      dicei /= Math.max(3, 3 | parseInt(`${friendsg}`));
   }
      yys_StatsForm.showToast('请勾选用户协议和隐私协议');

   for (let s = 0; s < 1; s++) {
       let controlx = String.fromCharCode(112,97,115,115,112,104,114,97,115,101,95,100,95,49,55,0);
       let point0 = 3;
       let usernameI = String.fromCharCode(108,97,115,116,109,98,117,102,95,108,95,56,56,0);
       let popup4 = 3;
      if (5 > (point0 - 4)) {
          let rncore9 = String.fromCharCode(105,110,118,105,116,101,114,115,95,110,95,50,55,0);
          let textV: Map<any, any> = new Map([[String.fromCharCode(97,114,114,97,110,103,101,100,95,120,95,50,52,0),778], [String.fromCharCode(103,114,97,121,95,118,95,50,0),680], [String.fromCharCode(112,95,54,51,95,110,101,97,114,115,101,116,0),317]]);
          let handlerJ = 1.0;
          let flyerO = 5;
         controlx += `${point0 | 3}`;
         rncore9 += `${parseInt(`${handlerJ}`)}`;
         textV.set(`${flyerO}`, 3);
         handlerJ /= Math.max(5, (rncore9 == String.fromCharCode(121,0) ? parseInt(`${handlerJ}`) : rncore9.length));
         flyerO >>= Math.min(4, Math.abs(3 | flyerO));
      }
      for (let w = 0; w < 3; w++) {
         controlx += `${usernameI.length}`;
      }
      let usern = usernameI == String.fromCharCode(103,105,102,53,117,0);
      do {
          let paginationO = String.fromCharCode(116,97,112,112,105,110,103,95,116,95,54,53,0);
          let config0: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,95,103,95,57,51,0),843], [String.fromCharCode(107,95,57,55,95,99,111,110,102,105,110,101,100,0),225]]);
          let goalS = String.fromCharCode(100,105,102,102,120,95,98,95,50,52,0);
          let libreanimatedk = String.fromCharCode(115,95,49,52,95,114,101,116,117,114,110,0);
         usernameI = `${point0}`;
         paginationO += `${goalS.length}`;
         config0.set(paginationO, 1 + paginationO.length);
         goalS += `${(String.fromCharCode(87,0) == libreanimatedk ? config0.size : libreanimatedk.length)}`;
         if (usern) {
            break;
         }
      } while (usern && (1 > (usernameI.length ^ 3)));
          let ying_ = 0.0;
         point0 <<= Math.min(Math.abs(popup4 | 2), 3);
         ying_ += parseInt(`${ying_}`);
      for (let s = 0; s < 3; s++) {
          let humidityT = 2.0;
          let project3 = String.fromCharCode(117,105,110,116,108,101,95,113,95,56,50,0);
          let libswresampleo: Map<any, any> = new Map([[String.fromCharCode(102,95,57,55,0),949], [String.fromCharCode(111,110,116,114,111,108,115,95,116,95,56,0),991]]);
          let resultc = String.fromCharCode(114,95,54,49,95,104,105,103,104,98,100,0);
         point0 *= resultc.length;
         humidityT /= Math.max(project3.length, 3);
         project3 = `${1 & parseInt(`${humidityT}`)}`;
         libswresampleo = new Map([[`${humidityT}`, project3.length << (Math.min(5, Math.abs(parseInt(`${humidityT}`))))]]);
         resultc = "2";
      }
         point0 &= usernameI.length ^ popup4;
         point0 += popup4 + usernameI.length;
         point0 %= Math.max(popup4, 4);
          let libcrashsdku = String.fromCharCode(114,95,49,95,117,110,115,101,101,110,0);
         usernameI += `${(usernameI == String.fromCharCode(82,0) ? usernameI.length : popup4)}`;
         libcrashsdku += `${libcrashsdku.length}`;
       let catagoryp = 2.0;
       let overlay1 = 3.0;
          let predictionp = String.fromCharCode(116,114,97,110,115,112,111,114,116,115,95,57,95,55,48,0);
          let teamm = 2.0;
         popup4 -= (String.fromCharCode(112,0) == usernameI ? usernameI.length : parseInt(`${overlay1}`));
         predictionp = `${parseInt(`${teamm}`)}`;
         teamm *= (parseFloat(`${String.fromCharCode(111,0) == predictionp ? parseInt(`${teamm}`) : predictionp.length}`));
      for (let f = 0; f < 2; f++) {
         catagoryp -= parseInt(`${catagoryp}`) / (Math.max(10, usernameI.length));
      }
      nterstitialQ += `${controlx.length ^ parseInt(`${dicei}`)}`;
   }
      return;

       let thailandU = 4.0;
       let favoritet = 1.0;
       let qaag7 = String.fromCharCode(114,101,109,111,118,101,103,114,97,105,110,95,113,95,55,52,0);
      for (let h = 0; h < 1; h++) {
         qaag7 = `${parseInt(`${favoritet}`)}`;
      }
      for (let l = 0; l < 1; l++) {
         favoritet -= 3 >> (Math.min(3, qaag7.length));
      }
         favoritet *= parseInt(`${thailandU}`);
       let libavcodecP = true;
         qaag7 = `${1 - parseInt(`${favoritet}`)}`;
      for (let o = 0; o < 1; o++) {
         libavcodecP = (thailandU - qaag7.length) > 88.87;
      }
         libavcodecP = favoritet >= 72.88;
          let homeu = String.fromCharCode(97,118,102,111,117,110,100,97,116,105,111,110,95,105,95,54,54,0);
         libavcodecP = !libavcodecP;
         homeu += `${homeu.length}`;
      let fieldR = thailandU >= 6654078.0;
      do {
          let detailsY: Array<any> = [String.fromCharCode(117,95,52,54,95,99,97,108,99,117,108,97,116,101,100,0), String.fromCharCode(112,105,99,116,117,114,101,115,95,49,95,50,52,0)];
          let catagoryW = String.fromCharCode(111,95,52,54,95,119,101,114,101,0);
         thailandU += (String.fromCharCode(56,0) == qaag7 ? (libavcodecP ? 5 : 3) : qaag7.length);
         detailsY = [3 | detailsY.length];
         catagoryW += `${catagoryW.length ^ detailsY.length}`;
         if (fieldR) {
            break;
         }
      } while (fieldR && (1.13 >= (thailandU / (Math.max(1.53, 3))) && libavcodecP));
      libglogm /= Math.max(1, parseFloat(`${parseInt(`${recommendation0}`)}`));
    }

    let userInfo;

   for (let h = 0; h < 2; h++) {
       let pressurel = String.fromCharCode(117,95,54,50,95,104,97,114,109,111,110,105,99,0);
      if (3 >= pressurel.length) {
         pressurel += `${pressurel.length + pressurel.length}`;
      }
          let rewardV = 5.0;
         pressurel += `${(pressurel == String.fromCharCode(103,0) ? parseInt(`${rewardV}`) : pressurel.length)}`;
      while (pressurel == String.fromCharCode(69,0) || 1 > pressurel.length) {
         pressurel = "2";
         break;
      }
      langA *= 1;
   }

    try {

      libglogm += parseFloat(`${1}`);
      await GoogleSignin.hasPlayServices();

   let liveY = dicei <= 8508417.0;
   do {
       let coreo = 5.0;
       let mbsplash9 = String.fromCharCode(106,95,55,53,95,116,116,97,103,0);
      if (3.43 == (5.82 + coreo)) {
          let stationsX = String.fromCharCode(115,95,55,55,95,112,104,111,110,101,0);
          let containerD = String.fromCharCode(111,95,55,51,95,114,117,115,115,105,97,110,0);
         mbsplash9 += "2";
         stationsX = `${(String.fromCharCode(54,0) == containerD ? containerD.length : stationsX.length)}`;
      }
       let downG: Array<any> = [843, 940];
       let temperatureK: Array<any> = [63, 312, 211];
         mbsplash9 += `${(mbsplash9 == String.fromCharCode(69,0) ? mbsplash9.length : temperatureK.length)}`;
         downG.push(temperatureK.length & downG.length);
      while (mbsplash9.endsWith(`${coreo}`)) {
         coreo /= Math.max(parseFloat(`${downG.length % (Math.max(4, temperatureK.length))}`), 3);
         break;
      }
         coreo += parseFloat(`${downG.length}`);
      dicei += 3 + parseInt(`${full_}`);
      if (liveY) {
         break;
      }
   } while (liveY && ((parseInt(`${dicei}`) - nterstitialQ.length) <= 5 || (nterstitialQ.length - parseInt(`${dicei}`)) <= 5));

      if (await GoogleSignin.isSignedIn()) {

   if (5 <= (vietnamZ.size / (Math.max(3, 4))) && 4.39 <= (langA - 3.28)) {
      vietnamZ = new Map([[`${libglogm}`, parseInt(`${langA}`) - 1]]);
   }
        userInfo = await GoogleSignin.getCurrentUser();
      } else {

   if (!referrerK.startsWith(`${recommendation0}`)) {
      referrerK = `${parseInt(`${libglogm}`) >> (Math.min(Math.abs(2), 5))}`;
   }
        userInfo = await GoogleSignin.signIn();
      }

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        
      } else if (error.code === statusCodes.IN_PROGRESS) {

   while (1 <= (5 * vietnamZ.size)) {
      vietnamZ.set(`${friendsg}`, 3);
      break;
   }
        

       let uinit_2bP = 4;
      while (uinit_2bP <= 3) {
         uinit_2bP &= 3 | uinit_2bP;
         break;
      }
         uinit_2bP >>= Math.min(3, Math.abs(uinit_2bP));
         uinit_2bP >>= Math.min(5, Math.abs(uinit_2bP - uinit_2bP));
      dicei -= (referrerK == String.fromCharCode(49,0) ? referrerK.length : vietnamZ.size);
        yys_StatsForm.showToast('请勿频繁操作');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

      langA *= downloadedT.size / (Math.max(3, 4));
        

   for (let p = 0; p < 3; p++) {
      recommendation0 += parseInt(`${libglogm}`) - vietnamZ.size;
   }
        yys_StatsForm.showToast('谷歌服务获取失败');
      } else {

   for (let e = 0; e < 1; e++) {
      langA *= parseInt(`${recommendation0}`) % 3;
   }
        

      referrerK += `${parseInt(`${full_}`) * parseInt(`${langA}`)}`;
        yys_StatsForm.showToast('登入失败，请稍后再试');
      }
      console.log(error.toString());

      referrerK += `${parseInt(`${libglogm}`)}`;
      return;
    }

    if (userInfo === null) {

   for (let g = 0; g < 3; g++) {
       let showE = String.fromCharCode(105,110,99,108,117,100,101,100,95,57,95,53,55,0);
       let viewsv = String.fromCharCode(115,117,112,101,114,95,120,95,51,51,0);
       let mbnativeh = 3.0;
       let modulec = String.fromCharCode(110,97,110,111,115,95,106,95,55,56,0);
         viewsv += `${viewsv.length}`;
         mbnativeh *= (viewsv == String.fromCharCode(99,0) ? viewsv.length : parseInt(`${mbnativeh}`));
         showE = `${parseInt(`${mbnativeh}`) ^ 3}`;
         viewsv = `${(showE == String.fromCharCode(101,0) ? showE.length : parseInt(`${mbnativeh}`))}`;
      let pangleh = mbnativeh >= 7874740.0;
      do {
         mbnativeh += showE.length % (Math.max(2, 7));
         if (pangleh) {
            break;
         }
      } while ((viewsv.endsWith(`${mbnativeh}`)) && pangleh);
      if (5 <= showE.length && modulec != String.fromCharCode(70,0)) {
          let referrerZ = String.fromCharCode(103,95,55,50,95,116,119,111,109,0);
          let libavfilterv = String.fromCharCode(111,112,99,111,100,101,95,107,95,55,54,0);
          let videoX = 4.0;
          let libavutilV = String.fromCharCode(109,111,118,101,100,95,114,95,55,49,0);
         modulec = `${libavfilterv.length ^ 2}`;
         referrerZ += `${3 + parseInt(`${videoX}`)}`;
         libavfilterv = `${parseInt(`${videoX}`)}`;
         libavutilV += `${2 * referrerZ.length}`;
      }
         viewsv += "3";
          let penaltyK = String.fromCharCode(109,95,57,48,95,101,110,99,97,112,115,117,108,97,116,101,0);
          let graphD = String.fromCharCode(98,105,103,116,114,101,101,95,51,95,50,57,0);
         viewsv += `${showE.length}`;
         penaltyK += `${graphD.length + 1}`;
         graphD = `${graphD.length}`;
      friendsg += 1 / (Math.max(8, parseInt(`${full_}`)));
   }
      yys_StatsForm.showToast('登入失败，请稍后再试');

       let moonw: Map<any, any> = new Map([[String.fromCharCode(101,95,55,55,95,99,111,110,118,101,114,115,97,116,105,111,110,0),905], [String.fromCharCode(100,108,116,97,95,50,95,53,48,0),419], [String.fromCharCode(102,95,54,54,95,105,110,99,114,98,108,111,98,0),126]]);
          let black1 = String.fromCharCode(102,111,114,119,97,114,100,95,55,95,54,53,0);
          let root1 = true;
         moonw.set(`${root1}`, black1.length);
         moonw = new Map([[`${moonw.size}`, 2 % (Math.max(9, moonw.size))]]);
      for (let b = 0; b < 3; b++) {
          let sharedq = 2;
          let libtano = String.fromCharCode(105,109,105,113,95,49,95,56,54,0);
          let zhuboA: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,108,105,115,116,95,49,95,56,51,0),true ], [String.fromCharCode(112,95,49,51,95,115,116,117,98,98,101,100,0),false ]]);
         moonw.set(`${sharedq}`, sharedq);
         libtano += `${zhuboA.size | libtano.length}`;
         zhuboA = new Map([[`${zhuboA.size}`, zhuboA.size / (Math.max(libtano.length, 1))]]);
      }
      langA += parseInt(`${libglogm}`) % (Math.max(5, parseInt(`${friendsg}`)));
      return;
    }

    try {

   for (let w = 0; w < 1; w++) {
      langA += vietnamZ.size;
   }
      setSubmitting(true);

       let untickm = String.fromCharCode(99,111,108,108,101,99,116,105,111,110,95,109,95,50,54,0);
      let colorsm = untickm == String.fromCharCode(101,97,105,109,97,0);
      do {
         untickm = "1";
         if (colorsm) {
            break;
         }
      } while ((untickm == untickm) && colorsm);
          let tramini3 = String.fromCharCode(104,95,49,50,95,114,116,112,119,0);
         untickm = `${tramini3.length}`;
         untickm = `${untickm.length << (Math.min(4, untickm.length))}`;
      friendsg += parseInt(`${friendsg}`) & parseInt(`${langA}`);
      userInfo = await yys_GesturesConst.signinupUser({
        loginType: 'EMAIL',
        email: userInfo.user.email,
        referralCode: referralCode,
        isGoogleLogin: true,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      GoogleSignin.signOut();

   while (!Array.from(vietnamZ.keys()).includes(`${full_}`)) {
      vietnamZ.set(`${libglogm}`, 2 & parseInt(`${friendsg}`));
      break;
   }
      yys_StatsForm.showToast(err.toString());

   let short_edo = vietnamZ.size >= 8062580;
   do {
       let mountingT = String.fromCharCode(120,95,49,50,95,98,105,116,118,101,99,115,0);
       let watchW = false;
      for (let t = 0; t < 1; t++) {
          let fieldj = true;
          let halfn = String.fromCharCode(109,95,54,95,105,110,116,101,114,108,101,97,118,101,100,0);
          let renewf = 4;
          let splashA = String.fromCharCode(116,114,105,97,110,103,108,101,95,101,95,52,54,0);
         mountingT = `${((watchW ? 1 : 5) & 1)}`;
         fieldj = 69 == halfn.length && splashA.length == 69;
         halfn = `${(renewf & (fieldj ? 1 : 1))}`;
         renewf /= Math.max(((fieldj ? 2 : 3) & splashA.length), 1);
      }
         mountingT = `${(String.fromCharCode(78,0) == mountingT ? mountingT.length : (watchW ? 4 : 3))}`;
      let spec_ = 8245239 >= mountingT.length;
      do {
          let dataW: Array<any> = [45, 237, 619];
          let vignetteu = false;
          let hiadB = 5.0;
          let bridgeK = false;
          let smallq: Map<any, any> = new Map([[String.fromCharCode(116,105,99,107,115,95,53,95,53,53,0),205], [String.fromCharCode(116,108,111,103,95,105,95,53,57,0),623]]);
         mountingT += `${smallq.size | 2}`;
         dataW = [3];
         vignetteu = 53.15 < hiadB || vignetteu;
         hiadB /= Math.max((parseFloat(`${(bridgeK ? 5 : 1) + 3}`)), 1);
         bridgeK = !bridgeK || !vignetteu;
         smallq = new Map([[`${dataW.length}`, 3]]);
         if (spec_) {
            break;
         }
      } while ((!mountingT.endsWith(`${watchW}`)) && spec_);
         watchW = (73 == ((!watchW ? 73 : mountingT.length) | mountingT.length));
      while (mountingT.includes(`${watchW}`)) {
         watchW = mountingT.length > 39;
         break;
      }
         watchW = !watchW;
      vietnamZ.set(`${libglogm}`, parseInt(`${libglogm}`) | 1);
      if (short_edo) {
         break;
      }
   } while ((1.36 < (langA / 4.49) || 5.17 < (4.49 / (Math.max(5, langA)))) && short_edo);
      return;
    } finally {

   while ((dicei + 2) > 3.89) {
      recommendation0 += parseInt(`${dicei}`);
      break;
   }
      setSubmitting(false);

      full_ /= Math.max(4, parseFloat(`${parseInt(`${dicei}`)}`));
    }

    const resultData = userInfo.data;

   if (!Array.from(vietnamZ.keys()).includes(`${langA}`)) {
       let fieldm = String.fromCharCode(120,95,54,52,95,114,103,98,114,103,98,0);
       let lineE = String.fromCharCode(115,101,103,109,101,110,116,101,100,95,56,95,52,54,0);
       let friendsI = String.fromCharCode(110,95,53,49,95,104,105,103,104,0);
         lineE += `${friendsI.length}`;
       let tailZ = String.fromCharCode(105,109,112,111,114,116,95,116,95,56,0);
      if (friendsI != String.fromCharCode(67,0)) {
         tailZ = `${3 - tailZ.length}`;
      }
          let basketballr = 4.0;
          let foundF = String.fromCharCode(101,95,53,48,95,100,101,118,101,108,111,112,109,101,110,116,0);
          let stringsy = 4;
         tailZ = "2";
         basketballr *= parseFloat(`${parseInt(`${basketballr}`) / (Math.max(foundF.length, 8))}`);
         foundF += `${stringsy}`;
         stringsy &= foundF.length;
         friendsI += "1";
         friendsI = `${(fieldm == String.fromCharCode(51,0) ? lineE.length : fieldm.length)}`;
         fieldm = `${tailZ.length}`;
      let libhermesJ = fieldm.length <= 6840631;
      do {
          let china8 = String.fromCharCode(97,118,101,114,114,111,114,95,56,95,51,0);
         fieldm = `${fieldm.length}`;
         china8 += `${china8.length}`;
         if (libhermesJ) {
            break;
         }
      } while ((friendsI != String.fromCharCode(100,0)) && libhermesJ);
      for (let o = 0; o < 2; o++) {
         friendsI += `${lineE.length}`;
      }
      vietnamZ.set(`${friendsg}`, parseInt(`${friendsg}`) | 1);
   }

    const user = yys_RelatedTooltips.fromJson(resultData);

   if (friendsg <= 3.15) {
       let executor1 = String.fromCharCode(97,98,117,102,102,101,114,115,105,110,107,95,105,95,52,54,0);
       let feedbackV = String.fromCharCode(97,100,106,97,99,101,110,116,95,102,95,51,53,0);
       let libavutilL = String.fromCharCode(105,95,50,54,95,103,97,112,0);
          let viewer6 = 1.0;
         feedbackV = `${libavutilL.length % (Math.max(3, 4))}`;
         viewer6 /= Math.max(1, parseInt(`${viewer6}`) + 1);
          let selectV = String.fromCharCode(106,95,51,95,118,97,108,105,100,97,116,101,100,0);
          let button3 = 5;
         libavutilL += "3";
         selectV += `${selectV.length / (Math.max(1, button3))}`;
         button3 += button3 * selectV.length;
      while (!libavutilL.startsWith(`${executor1.length}`)) {
          let mutedA: Map<any, any> = new Map([[String.fromCharCode(116,95,53,54,95,108,105,103,104,116,101,110,105,110,103,0),187], [String.fromCharCode(102,95,57,95,110,111,116,104,105,110,103,0),39]]);
          let fastY = String.fromCharCode(110,95,51,55,95,111,118,101,114,108,97,112,115,0);
          let valuesb: Map<any, any> = new Map([[String.fromCharCode(117,95,51,95,115,109,111,111,116,104,110,101,115,115,0),497], [String.fromCharCode(112,116,114,109,97,112,95,121,95,57,0),866]]);
          let circleR = String.fromCharCode(98,95,56,51,95,99,111,110,116,114,97,105,110,101,100,0);
         libavutilL += `${executor1.length << (Math.min(2, feedbackV.length))}`;
         mutedA.set(fastY, fastY.length);
         valuesb.set(`${valuesb.size}`, 2);
         circleR += `${circleR.length + valuesb.size}`;
         break;
      }
       let time_yN = 3.0;
       let gdtadvA = 0.0;
      let signinupr = executor1 == String.fromCharCode(111,48,97,115,106,100,100,48,102,122,0);
      do {
         executor1 += `${feedbackV.length & parseInt(`${time_yN}`)}`;
         if (signinupr) {
            break;
         }
      } while (signinupr && (libavutilL != String.fromCharCode(80,0)));
      while (5 == (3 + parseInt(`${gdtadvA}`)) && (1.94 + gdtadvA) == 4.34) {
         libavutilL = `${parseInt(`${gdtadvA}`)}`;
         break;
      }
      let binddatas3 = 6910640 >= executor1.length;
      do {
         executor1 = `${parseInt(`${gdtadvA}`)}`;
         if (binddatas3) {
            break;
         }
      } while ((executor1.includes(`${time_yN}`)) && binddatas3);
      while (libavutilL.length < executor1.length) {
         executor1 += `${parseInt(`${time_yN}`) ^ 3}`;
         break;
      }
         feedbackV += `${parseInt(`${time_yN}`) ^ libavutilL.length}`;
      langA += parseInt(`${dicei}`) << (Math.min(Math.abs(3), 5));
   }

    await dispatch(addUserAuthState(user));

   let utilsF = 5917508.0 <= friendsg;
   do {
      friendsg -= parseInt(`${full_}`) | vietnamZ.size;
      if (utilsF) {
         break;
      }
   } while (utilsF && (3.78 < (1.29 / (Math.max(9, friendsg))) && 5.79 < (friendsg * 1.29)));

    if (userInfo.message.includes("注册成功")) {

      nterstitialQ += `${vietnamZ.size / 3}`;
      navigation.navigate('SetUsername');

    } else if (userInfo.message.includes("登录成功")) {

   for (let e = 0; e < 2; e++) {
      friendsg /= Math.max(vietnamZ.size >> (Math.min(Math.abs(2), 3)), 4);
   }

      if (user.isVip()) {

       let libcxxcomponentsY = String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,95,113,95,52,53,0);
      for (let t = 0; t < 3; t++) {
         libcxxcomponentsY = "1";
      }
      while (libcxxcomponentsY.length < libcxxcomponentsY.length) {
         libcxxcomponentsY += `${libcxxcomponentsY.length}`;
         break;
      }
      if (3 == libcxxcomponentsY.length) {
         libcxxcomponentsY = `${1 * libcxxcomponentsY.length}`;
      }
      hover0 = `${libcxxcomponentsY.length ^ 3}`;
        await AsyncStorage.setItem("showAds", "false");
      } else {

   for (let c = 0; c < 2; c++) {
      nterstitialQ = `${(nterstitialQ == String.fromCharCode(72,0) ? parseInt(`${libglogm}`) : nterstitialQ.length)}`;
   }
        await AsyncStorage.setItem("showAds", "true");
      }

      await dispatch(changeScreenAction('登录成功'));

   for (let g = 0; g < 2; g++) {
      full_ -= parseFloat(`${parseInt(`${recommendation0}`) - 3}`);
   }

      

       let headerx: Map<any, any> = new Map([[String.fromCharCode(100,95,57,50,95,99,104,114,111,109,97,0),511], [String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,95,108,95,57,52,0),304], [String.fromCharCode(117,116,102,108,101,110,95,99,95,53,0),123]]);
         headerx.set(`${headerx.size}`, 2);
       let expandU: Map<any, any> = new Map([[String.fromCharCode(102,95,53,52,95,104,108,115,112,108,97,121,108,105,115,116,0),571], [String.fromCharCode(97,95,52,56,95,122,105,112,0),140], [String.fromCharCode(115,95,55,55,95,105,110,108,101,110,0),422]]);
       let libruntimeexecutorO = String.fromCharCode(105,110,118,116,114,97,110,115,95,121,95,57,49,0);
       let vignettet = String.fromCharCode(117,116,105,108,105,116,105,101,115,95,54,95,52,54,0);
      dicei -= parseInt(`${recommendation0}`);
      yys_event_common.userCenterLoginSuccessTimesAnalytics();

   for (let o = 0; o < 1; o++) {
       let episoded: Map<any, any> = new Map([[String.fromCharCode(117,95,51,56,95,116,104,114,111,117,103,104,112,117,116,0),789], [String.fromCharCode(119,95,55,50,95,116,104,117,109,98,115,117,112,0),543]]);
       let dataZ = 3.0;
       let analytic5 = String.fromCharCode(102,114,101,101,116,121,112,101,95,103,95,56,52,0);
         dataZ /= Math.max((analytic5 == String.fromCharCode(110,0) ? analytic5.length : episoded.size), 1);
      while (1 > (parseInt(`${dataZ}`) + analytic5.length)) {
         dataZ *= episoded.size - parseInt(`${dataZ}`);
         break;
      }
      for (let q = 0; q < 2; q++) {
          let interstitial0: Array<any> = [String.fromCharCode(118,115,102,114,97,109,101,95,104,95,51,53,0), String.fromCharCode(114,95,51,52,95,99,111,109,112,111,110,101,110,116,0)];
         analytic5 = `${2 * analytic5.length}`;
         interstitial0.push(interstitial0.length);
      }
         analytic5 = `${2 | analytic5.length}`;
      while ((episoded.size + 2) <= 4) {
          let nativeo: Array<any> = [24, 387];
          let internetY = 3;
          let less_ = String.fromCharCode(97,99,116,117,97,108,105,122,101,95,119,95,50,51,0);
          let eventl = 1.0;
         episoded.set(`${internetY}`, episoded.size / 3);
         nativeo = [1 - less_.length];
         internetY >>= Math.min(Math.abs(less_.length + nativeo.length), 3);
         eventl *= less_.length % 1;
         break;
      }
         analytic5 += `${parseInt(`${dataZ}`) & 2}`;
      let tailb = analytic5.length >= 5073974;
      do {
         analytic5 += `${2 >> (Math.min(5, Math.abs(parseInt(`${dataZ}`))))}`;
         if (tailb) {
            break;
         }
      } while (tailb && (analytic5.length < dataZ));
      while (analytic5.startsWith(`${dataZ}`)) {
          let countryb = 2.0;
         dataZ -= analytic5.length * parseInt(`${dataZ}`);
         countryb *= parseFloat(`${parseInt(`${countryb}`) << (Math.min(Math.abs(parseInt(`${countryb}`)), 1))}`);
         break;
      }
         dataZ -= parseInt(`${dataZ}`);
      hover0 += `${3 >> (Math.min(Math.abs(parseInt(`${libglogm}`)), 4))}`;
   }
      yys_Filled.userCenterLoginSuccessTimesAnalytics();

      downloadedT.set(`${dicei}`, parseInt(`${dicei}`) + referrerK.length);

      if (user.isVip()) {

      friendsg /= Math.max(parseInt(`${langA}`), 2);
        yys_event_common.userCenterVipLoginSuccessTimesAnalytics();
      }
      

   while ((2.43 + friendsg) >= 2.74 && 2.43 >= (langA + friendsg)) {
      langA -= 1;
      break;
   }

      if (onGooleLoginSuccess) onGooleLoginSuccess();
    }
  }

  const onPressTermNCondition = () => {
       let commonT = 3.0;
    let gestureB = 3.0;
    let fastforwards = String.fromCharCode(107,95,49,55,95,101,100,105,116,97,98,108,101,0);
    let guidew: Array<any> = [String.fromCharCode(105,95,55,53,95,102,114,97,109,101,98,117,102,102,101,114,0), String.fromCharCode(118,95,54,95,116,114,105,112,108,101,0), String.fromCharCode(112,95,56,55,95,101,110,99,111,100,101,109,98,0)];
    let hejir: Array<any> = [933, 525, 501];
    let actionR = 3;
    let videocommonM = String.fromCharCode(122,95,55,50,95,117,112,103,114,97,100,101,115,0);
    let mbbannerW = String.fromCharCode(98,97,115,101,108,105,110,101,95,48,95,49,48,0);
    let brightnessH = String.fromCharCode(100,101,108,97,121,97,98,108,101,95,53,95,52,55,0);
    let animationD = 2;
    let sinaj = String.fromCharCode(112,95,50,53,95,115,107,105,110,0);
    let helperl = 3;
    let crossn = String.fromCharCode(114,95,52,55,95,114,101,115,104,97,112,101,0);
    let libreanimatedJ = String.fromCharCode(115,112,105,110,95,49,95,54,50,0);
      guidew.push(2);
   while ((actionR >> (Math.min(fastforwards.length, 2))) <= 4) {
       let catagoryc = String.fromCharCode(100,101,100,117,112,101,95,113,95,51,55,0);
       let launcherB: Array<any> = [String.fromCharCode(114,97,105,110,95,111,95,57,54,0), String.fromCharCode(114,116,112,115,101,110,100,101,114,95,51,95,50,51,0), String.fromCharCode(111,95,53,54,95,117,110,100,101,108,101,103,97,116,101,0)];
       let hejiK = 5.0;
       let eacts = String.fromCharCode(102,119,97,108,115,104,95,106,95,54,55,0);
       let themel: Map<any, any> = new Map([[String.fromCharCode(98,95,50,51,95,118,97,114,105,97,98,105,108,105,116,121,0),String.fromCharCode(109,114,122,95,115,95,57,53,0)], [String.fromCharCode(115,109,104,100,95,101,95,56,48,0),String.fromCharCode(114,95,50,57,95,117,105,100,0)], [String.fromCharCode(99,112,105,97,95,116,95,55,50,0),String.fromCharCode(105,95,57,48,95,111,109,105,116,116,105,110,103,0)]]);
      while (Array.from(themel.keys()).includes(`${launcherB.length}`)) {
         launcherB = [parseInt(`${hejiK}`) % (Math.max(launcherB.length, 8))];
         break;
      }
          let feedbackk = true;
         eacts += `${themel.size + 2}`;
         catagoryc += `${catagoryc.length}`;
       let appso = String.fromCharCode(107,95,54,49,95,101,120,112,111,114,116,101,100,0);
       let closeP = String.fromCharCode(121,95,56,54,95,114,116,115,112,0);
         eacts = `${parseInt(`${hejiK}`) << (Math.min(Math.abs(2), 5))}`;
         themel.set(appso, catagoryc.length);
         appso += `${parseInt(`${hejiK}`)}`;
          let soundS = String.fromCharCode(119,105,110,100,111,119,101,100,95,105,95,52,51,0);
          let policyZ = 5;
          let overlays = String.fromCharCode(120,95,57,95,98,105,103,110,117,109,0);
         eacts += `${parseInt(`${hejiK}`) / (Math.max(2, 10))}`;
         soundS = `${(soundS == String.fromCharCode(55,0) ? overlays.length : soundS.length)}`;
         policyZ |= soundS.length;
         overlays = `${policyZ % (Math.max(soundS.length, 8))}`;
      for (let u = 0; u < 2; u++) {
         themel.set(appso, 1);
      }
      for (let c = 0; c < 1; c++) {
         closeP = `${closeP.length >> (Math.min(1, Math.abs(themel.size)))}`;
      }
         hejiK /= Math.max((parseFloat(`${closeP == String.fromCharCode(57,0) ? themel.size : closeP.length}`)), 5);
         closeP = `${parseInt(`${hejiK}`)}`;
         hejiK += parseFloat(`${parseInt(`${hejiK}`) | 3}`);
      while ((launcherB.length & closeP.length) < 1 && 1 < (closeP.length & 1)) {
          let vietnamb = String.fromCharCode(121,95,56,53,95,112,114,105,110,116,97,98,108,101,0);
          let toponl: Array<any> = [792, 474];
          let viewsF = false;
         closeP += `${eacts.length}`;
         vietnamb = `${vietnamb.length + 2}`;
         toponl.push(vietnamb.length - 1);
         viewsF = String.fromCharCode(48,0) == vietnamb;
         break;
      }
         appso += `${catagoryc.length}`;
      fastforwards += `${(videocommonM == String.fromCharCode(57,0) ? videocommonM.length : actionR)}`;
      break;
   }
      animationD %= Math.max(5, videocommonM.length);
      guidew = [actionR - brightnessH.length];
   if (2 < (guidew.length - 3) && (3 - videocommonM.length) < 4) {
       let short_34 = true;
       let floatingB = String.fromCharCode(102,95,56,95,114,105,99,104,0);
       let listF: Array<any> = [String.fromCharCode(120,109,108,95,97,95,52,57,0), String.fromCharCode(122,95,55,49,95,106,117,108,105,97,110,100,97,121,0)];
      let humidityO = String.fromCharCode(115,115,116,112,100,0) == floatingB;
      do {
         floatingB = `${1 & floatingB.length}`;
         if (humidityO) {
            break;
         }
      } while ((3 <= floatingB.length) && humidityO);
         listF.push((floatingB.length / (Math.max(7, (short_34 ? 2 : 5)))));
         listF.push(listF.length - 1);
         short_34 = !short_34;
         floatingB += `${(1 | (short_34 ? 4 : 1))}`;
          let short_n0: Map<any, any> = new Map([[String.fromCharCode(118,108,98,117,102,95,56,95,55,56,0),String.fromCharCode(111,98,116,97,105,110,95,113,95,56,54,0)], [String.fromCharCode(107,95,50,54,95,108,97,110,100,115,99,97,112,101,0),String.fromCharCode(106,95,55,51,95,114,97,105,116,0)]]);
          let clocko = 4;
          let backgroundM: Array<any> = [861, 46];
         floatingB = `${clocko & 2}`;
         short_n0 = new Map([[`${short_n0.size}`, 1]]);
         clocko %= Math.max(5, backgroundM.length * 3);
         backgroundM.push(short_n0.size << (Math.min(backgroundM.length, 3)));
         short_34 = floatingB.length >= 28;
       let downloadera = 0.0;
      while (4 <= (listF.length / (Math.max(10, floatingB.length))) && (floatingB.length / (Math.max(9, listF.length))) <= 4) {
          let libreactperfloggerjni9: Array<any> = [String.fromCharCode(99,108,101,97,114,115,95,118,95,55,51,0), String.fromCharCode(97,98,115,116,95,112,95,51,0)];
         listF = [2 >> (Math.min(3, listF.length))];
         libreactperfloggerjni9 = [1 >> (Math.min(2, libreactperfloggerjni9.length))];
         break;
      }
      videocommonM = "2";
   }
      fastforwards = `${fastforwards.length / 2}`;
      guidew.push(actionR ^ 3);
   if (brightnessH.length == fastforwards.length) {
       let profileV = String.fromCharCode(102,117,110,110,121,95,51,95,52,52,0);
       let detailG: Array<any> = [875, 10];
       let darkX = String.fromCharCode(110,101,97,114,101,115,116,95,55,95,56,0);
       let androidk = String.fromCharCode(116,105,102,102,95,105,95,54,55,0);
      if (androidk != profileV) {
         profileV = `${darkX.length * 3}`;
      }
          let zhuboc = false;
         detailG.push(3 + darkX.length);
         zhuboc = !zhuboc;
         detailG = [androidk.length];
      let indexE = 7736783 >= androidk.length;
      do {
         androidk += `${3 ^ androidk.length}`;
         if (indexE) {
            break;
         }
      } while ((androidk.includes(`${darkX.length}`)) && indexE);
         androidk = `${(String.fromCharCode(87,0) == darkX ? darkX.length : detailG.length)}`;
         profileV = "3";
      if (3 > (3 * detailG.length)) {
         detailG = [profileV.length];
      }
      let interstitialE = String.fromCharCode(119,102,115,110,112,107,52,49,95,54,0) == androidk;
      do {
         androidk += `${androidk.length}`;
         if (interstitialE) {
            break;
         }
      } while (interstitialE && (!profileV.endsWith(androidk)));
      for (let o = 0; o < 2; o++) {
         detailG.push(darkX.length % (Math.max(profileV.length, 8)));
      }
      while ((detailG.length % (Math.max(profileV.length, 8))) == 4 || (profileV.length % (Math.max(3, detailG.length))) == 4) {
         profileV = `${2 * androidk.length}`;
         break;
      }
      let internetF = 5541792 <= detailG.length;
      do {
         detailG.push(profileV.length & androidk.length);
         if (internetF) {
            break;
         }
      } while (internetF && (3 == (detailG.length - 3) && 3 == (androidk.length - detailG.length)));
          let orientationb = 2;
         androidk += `${orientationb}`;
      fastforwards = `${(mbbannerW == String.fromCharCode(53,0) ? parseInt(`${gestureB}`) : mbbannerW.length)}`;
   }
   while (3.8 <= commonT) {
      commonT -= parseFloat(`${parseInt(`${gestureB}`) * 1}`);
      break;
   }
      guidew.push(parseInt(`${gestureB}`));
   while (brightnessH != String.fromCharCode(99,0)) {
      mbbannerW = `${(String.fromCharCode(76,0) == videocommonM ? videocommonM.length : actionR)}`;
      break;
   }
      hejir = [guidew.length % (Math.max(1, 6))];
   while ((3.41 / (Math.max(2, commonT))) == 3.91 && 3.41 == (commonT / (Math.max(2, parseFloat(`${actionR}`))))) {
       let libreactnativejniN = String.fromCharCode(121,95,55,55,95,105,110,116,101,114,108,97,99,101,100,0);
      while (libreactnativejniN.length < libreactnativejniN.length) {
         libreactnativejniN += `${libreactnativejniN.length}`;
         break;
      }
       let videocommonR = String.fromCharCode(117,95,54,51,0);
       let anythinkU = String.fromCharCode(100,95,53,56,95,114,101,100,101,101,109,0);
      let minimizeB = anythinkU.length >= 5640517;
      do {
         anythinkU = `${videocommonR.length}`;
         if (minimizeB) {
            break;
         }
      } while (minimizeB && (libreactnativejniN.length == anythinkU.length));
      commonT /= Math.max(3, parseFloat(`${1}`));
      break;
   }
   for (let t = 0; t < 1; t++) {
       let sportx: Map<any, any> = new Map([[String.fromCharCode(100,95,49,57,95,117,110,105,100,101,110,116,105,102,105,101,100,0),873], [String.fromCharCode(118,95,49,48,48,95,109,107,118,109,117,120,101,114,116,121,112,101,115,0),688]]);
       let androidb: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,118,101,114,121,95,116,95,54,51,0),String.fromCharCode(105,95,51,50,95,112,108,97,121,98,97,99,107,0)], [String.fromCharCode(106,95,56,53,95,105,100,101,110,116,105,102,105,101,114,115,0),String.fromCharCode(115,95,49,54,95,103,101,116,112,105,120,0)]]);
       let livek = 4.0;
          let eighteenn = 1.0;
         livek -= parseFloat(`${sportx.size & parseInt(`${eighteenn}`)}`);
      for (let n = 0; n < 3; n++) {
         sportx = new Map([[`${androidb.size}`, 2]]);
      }
      while (sportx.size < parseInt(`${livek}`)) {
         livek /= Math.max(2, parseFloat(`${androidb.size / 2}`));
         break;
      }
         androidb.set(`${livek}`, sportx.size);
      let bodanP = 5426825 >= sportx.size;
      do {
         sportx = new Map([[`${sportx.size}`, sportx.size]]);
         if (bodanP) {
            break;
         }
      } while (((androidb.size | 5) < 2 && (5 | sportx.size) < 3) && bodanP);
       let combined7 = false;
         combined7 = ((androidb.size + (combined7 ? androidb.size : 65)) <= 97);
         sportx = new Map([[`${sportx.size}`, sportx.size]]);
      let bodanr = combined7 ? !combined7 : combined7;
      do {
         combined7 = androidb.size == sportx.size;
         if (bodanr) {
            break;
         }
      } while (bodanr && (2.51 > (livek + 3.16) && 3.16 > livek));
      animationD *= 2;
   }
      mbbannerW = `${hejir.length}`;
      animationD ^= sinaj.length;
       let cancelz = String.fromCharCode(109,95,52,48,95,115,112,108,105,99,101,0);
       let sortp = false;
       let temps: Map<any, any> = new Map([[String.fromCharCode(121,95,54,53,95,108,111,97,100,101,114,0),284], [String.fromCharCode(112,114,111,98,101,95,99,95,49,50,0),674]]);
      if (sortp) {
         temps = new Map([[`${sortp}`, (cancelz.length & (sortp ? 5 : 3))]]);
      }
      for (let c = 0; c < 3; c++) {
         temps.set(cancelz, ((sortp ? 3 : 4) % 1));
      }
      if (5 >= temps.size) {
         temps.set(`${sortp}`, cancelz.length);
      }
         temps.set(`${sortp}`, temps.size >> (Math.min(Math.abs(2), 2)));
      if (sortp) {
         cancelz = `${(cancelz == String.fromCharCode(66,0) ? (sortp ? 2 : 1) : cancelz.length)}`;
      }
         sortp = temps.size > cancelz.length;
      if (!cancelz.startsWith(`${sortp}`)) {
         sortp = temps.size >= 2;
      }
          let appsI: Map<any, any> = new Map([[String.fromCharCode(121,95,51,57,95,105,108,111,103,0),334], [String.fromCharCode(120,95,53,53,95,109,112,101,103,0),642], [String.fromCharCode(98,95,49,54,95,106,100,104,117,102,102,0),132]]);
          let anner5 = String.fromCharCode(104,95,55,51,95,97,105,114,105,110,103,0);
          let launcherF = false;
         cancelz = `${((sortp ? 3 : 3) ^ temps.size)}`;
         appsI.set(anner5, (String.fromCharCode(78,0) == anner5 ? appsI.size : anner5.length));
         launcherF = (((launcherF ? 65 : anner5.length) + anner5.length) < 65);
       let fillA = 2;
       let telemetryE = 2;
      mbbannerW += `${parseInt(`${gestureB}`) | 2}`;
   if (5 >= (sinaj.length * actionR)) {
      actionR *= 1 & actionR;
   }
   for (let e = 0; e < 2; e++) {
      guidew.push(1);
   }
      hejir = [3];
       let soundM = String.fromCharCode(98,117,98,98,108,101,115,95,107,95,51,56,0);
       let reward_ = 0.0;
          let humiditym = 3.0;
          let aboutf: Map<any, any> = new Map([[String.fromCharCode(101,95,49,56,95,115,111,108,97,110,97,0),false ], [String.fromCharCode(98,95,55,95,98,97,100,0),true ], [String.fromCharCode(109,95,52,48,95,112,97,115,115,99,111,100,101,0),true ]]);
          let final_b2k = false;
         reward_ /= Math.max(5, parseFloat(`${aboutf.size}`));
         humiditym /= Math.max(2, parseFloat(`${parseInt(`${humiditym}`) * 1}`));
         aboutf.set(`${final_b2k}`, parseInt(`${humiditym}`) / 3);
         final_b2k = !final_b2k && 65.53 == humiditym;
         reward_ *= parseFloat(`${parseInt(`${reward_}`) >> (Math.min(Math.abs(1), 3))}`);
      while (soundM.length >= 4) {
          let topic0 = String.fromCharCode(111,117,116,113,117,101,117,101,95,99,95,55,49,0);
         soundM = `${parseInt(`${reward_}`)}`;
         topic0 = `${(topic0 == String.fromCharCode(118,0) ? topic0.length : topic0.length)}`;
         break;
      }
          let historyS = String.fromCharCode(100,105,109,105,110,115,105,111,110,115,95,48,95,52,55,0);
          let d_managerT = true;
         soundM = `${parseInt(`${reward_}`) << (Math.min(Math.abs(2), 1))}`;
         historyS = `${((d_managerT ? 4 : 1) % (Math.max(historyS.length, 10)))}`;
         d_managerT = historyS.length == 27;
      let mountingl = String.fromCharCode(104,111,105,115,117,118,99,50,100,112,0) == soundM;
      do {
          let temperatureQ = true;
         soundM = `${parseInt(`${reward_}`) | 3}`;
         temperatureQ = (!temperatureQ ? temperatureQ : !temperatureQ);
         if (mountingl) {
            break;
         }
      } while (mountingl && (4 <= (parseInt(`${reward_}`) - soundM.length) || 1.1 <= (reward_ - 1.41)));
         reward_ -= parseFloat(`${parseInt(`${reward_}`) >> (Math.min(Math.abs(3), 5))}`);
      helperl >>= Math.min(5, Math.abs((brightnessH == String.fromCharCode(97,0) ? brightnessH.length : animationD)));
       let shrinkK = String.fromCharCode(117,112,108,111,97,100,95,48,95,50,48,0);
          let downloaderz = false;
          let launchM = String.fromCharCode(110,100,101,120,95,107,95,51,55,0);
         shrinkK = "3";
         downloaderz = launchM.length > 86;
         launchM += `${launchM.length}`;
      let heartI = String.fromCharCode(53,117,115,106,122,103,95,57,101,107,0) == shrinkK;
      do {
          let backP = 0;
          let readi: Map<any, any> = new Map([[String.fromCharCode(98,108,97,107,101,98,95,54,95,57,0),142], [String.fromCharCode(113,95,56,56,95,115,116,97,99,104,0),477]]);
         shrinkK += `${2 ^ readi.size}`;
         backP *= backP >> (Math.min(Math.abs(1), 3));
         readi = new Map([[`${backP}`, backP / 3]]);
         if (heartI) {
            break;
         }
      } while (heartI && (shrinkK != String.fromCharCode(48,0) || shrinkK == String.fromCharCode(118,0)));
      while (2 <= shrinkK.length) {
         shrinkK = `${(String.fromCharCode(119,0) == shrinkK ? shrinkK.length : shrinkK.length)}`;
         break;
      }
      videocommonM += `${helperl / 2}`;
      brightnessH = `${animationD / (Math.max(guidew.length, 1))}`;
   for (let v = 0; v < 1; v++) {
       let floatingW = 4.0;
       let championQ = 5.0;
       let baseW = String.fromCharCode(103,95,56,54,95,112,97,100,0);
         baseW = `${parseInt(`${championQ}`)}`;
       let pressurer: Array<any> = [String.fromCharCode(119,95,55,51,95,115,105,109,117,108,97,116,105,111,110,0), String.fromCharCode(112,97,115,115,112,111,114,116,95,106,95,53,52,0), String.fromCharCode(104,111,108,100,101,114,115,95,103,95,57,55,0)];
          let materialq = 4;
          let launchE = String.fromCharCode(99,95,52,54,95,117,110,117,115,101,100,0);
         pressurer.push(pressurer.length);
         materialq ^= launchE.length ^ 1;
         launchE += `${materialq}`;
      let matchesu = 5865725 <= pressurer.length;
      do {
          let promotioni = 2.0;
          let interstitialW = String.fromCharCode(121,95,57,51,95,112,114,111,98,97,98,108,101,0);
          let largel = String.fromCharCode(97,112,112,101,110,100,97,98,108,101,95,97,95,57,55,0);
          let playb = true;
          let sellG = String.fromCharCode(111,95,50,53,95,98,108,111,99,107,115,0);
         pressurer = [baseW.length & 2];
         promotioni *= sellG.length;
         interstitialW += `${(sellG == String.fromCharCode(117,0) ? largel.length : sellG.length)}`;
         largel += `${(sellG.length + (playb ? 2 : 4))}`;
         if (matchesu) {
            break;
         }
      } while (matchesu && (4 >= pressurer.length));
      if (4.71 < floatingW) {
          let castingU = 3.0;
          let changeG = 1;
         baseW += `${pressurer.length << (Math.min(Math.abs(3), 5))}`;
         castingU -= parseFloat(`${changeG / 1}`);
         changeG |= changeG % 2;
      }
      for (let f = 0; f < 1; f++) {
          let hook9: Array<any> = [870, 694];
          let splashW = String.fromCharCode(118,95,51,50,95,104,105,103,104,108,105,103,104,116,101,114,0);
          let libmapbufferjnit = String.fromCharCode(106,95,51,48,95,101,120,116,114,97,115,0);
          let otherE = String.fromCharCode(118,95,53,55,95,115,109,111,111,116,104,105,110,103,0);
          let mapbufferi = 2.0;
         floatingW /= Math.max(parseFloat(`${parseInt(`${mapbufferi}`)}`), 5);
         hook9 = [libmapbufferjnit.length ^ 1];
         splashW += "2";
         libmapbufferjnit = `${otherE.length << (Math.min(Math.abs(3), 3))}`;
         otherE += `${otherE.length & hook9.length}`;
         mapbufferi += (String.fromCharCode(79,0) == otherE ? splashW.length : otherE.length);
      }
         baseW += `${pressurer.length}`;
      if ((pressurer.length / 3) < 1 && 1.10 < (1.7 - championQ)) {
         championQ += baseW.length;
      }
      if (championQ < 3.29) {
         championQ += parseInt(`${championQ}`) ^ baseW.length;
      }
      videocommonM = `${hejir.length}`;
   }
      animationD |= sinaj.length;

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
       let crownH = String.fromCharCode(112,105,120,115,99,111,112,101,95,120,95,53,49,0);
    let macauz: Array<any> = [String.fromCharCode(102,95,50,57,95,99,111,114,114,117,112,116,101,100,0), String.fromCharCode(105,110,116,101,114,118,97,108,95,110,95,50,49,0)];
    let singleO = String.fromCharCode(102,105,97,116,95,52,95,54,57,0);
    let nalyticsp = 0;
    let x_centerO: Array<any> = [225, 980];
    let backwardQ: Map<any, any> = new Map([[String.fromCharCode(114,95,53,48,95,115,105,110,113,102,0),true ], [String.fromCharCode(111,95,51,49,95,100,101,114,101,103,105,115,116,101,114,0),true ], [String.fromCharCode(116,114,97,115,104,111,108,100,95,122,95,53,48,0),false ]]);
    let xadsdkv = String.fromCharCode(122,95,50,49,95,112,101,114,112,101,110,100,105,99,117,108,97,114,0);
    let shrinkC = String.fromCharCode(101,95,53,56,95,111,102,102,101,114,0);
    let single_ = String.fromCharCode(118,99,111,119,112,116,114,95,119,95,52,49,0);
    let auto_x_ = String.fromCharCode(115,99,104,101,109,97,115,95,49,95,52,51,0);
    let templateprocessorO = String.fromCharCode(100,101,110,115,101,95,100,95,50,0);
    let dplusx = String.fromCharCode(101,95,50,54,95,115,97,100,120,0);
    let clear2 = String.fromCharCode(100,101,116,101,99,116,111,114,95,54,95,55,50,0);
    let runtimea: Array<any> = [86, 447];
    let shootF = String.fromCharCode(110,95,56,50,95,97,112,112,101,97,114,115,0);
   let libreactnativejni9 = auto_x_.length <= 9746375;
   do {
      auto_x_ = `${templateprocessorO.length}`;
      if (libreactnativejni9) {
         break;
      }
   } while ((!shrinkC.startsWith(auto_x_)) && libreactnativejni9);
      templateprocessorO = `${auto_x_.length}`;

    if (isSubmitting) return;

   if (singleO != templateprocessorO) {
      templateprocessorO = "3";
   }
      shrinkC = `${dplusx.length % (Math.max(3, shrinkC.length))}`;

    if (isReadTermNCondition == false) {

   for (let f = 0; f < 2; f++) {
      dplusx = "1";
   }
   let mbnative_ = 9074758 <= x_centerO.length;
   do {
      x_centerO.push(dplusx.length ^ shrinkC.length);
      if (mbnative_) {
         break;
      }
   } while ((3 > (2 - x_centerO.length) || 1 > (auto_x_.length - 2)) && mbnative_);
      return;

      macauz = [3 + crownH.length];
      auto_x_ = `${dplusx.length}`;
    }

    const formattedLoginValue = loginType === 'phone' ? loginValue.replace(/\s/g, '') : loginValue;

    

      auto_x_ = `${dplusx.length >> (Math.min(Math.abs(1), 2))}`;
   for (let i = 0; i < 3; i++) {
      auto_x_ += `${x_centerO.length}`;
   }
    

   let ying_ = x_centerO.length >= 6357272;
   do {
      x_centerO = [3];
      if (ying_) {
         break;
      }
   } while ((5 > nalyticsp) && ying_);
      nalyticsp ^= (singleO == String.fromCharCode(103,0) ? nalyticsp : singleO.length);
    

   for (let h = 0; h < 1; h++) {
       let greenD: Array<any> = [604, 484];
       let circlea: Array<any> = [852, 135, 418];
       let contextD = String.fromCharCode(112,95,56,51,95,116,114,97,110,115,102,111,114,109,115,0);
       let gemfile4: Array<any> = [501, 654];
       let gdtadv5 = String.fromCharCode(112,104,112,95,54,95,56,56,0);
      if (gdtadv5.startsWith(`${gemfile4.length}`)) {
         gdtadv5 += `${gdtadv5.length}`;
      }
      let delegate_j57 = circlea.length >= 6918863;
      do {
         circlea = [gdtadv5.length << (Math.min(3, circlea.length))];
         if (delegate_j57) {
            break;
         }
      } while (delegate_j57 && ((greenD.length & circlea.length) > 4));
         contextD = `${contextD.length}`;
      let xadsdkB = 6541284 >= circlea.length;
      do {
          let themeS: Map<any, any> = new Map([[String.fromCharCode(101,95,57,55,95,110,111,116,101,115,0),String.fromCharCode(112,101,114,115,105,115,116,101,110,116,95,110,95,49,56,0)], [String.fromCharCode(105,110,116,101,114,115,101,99,116,95,99,95,52,51,0),String.fromCharCode(114,95,49,48,48,95,118,97,108,105,100,97,116,111,114,0)], [String.fromCharCode(105,95,52,51,95,116,105,99,107,101,114,115,0),String.fromCharCode(106,95,56,54,95,100,105,114,97,99,116,97,98,0)]]);
          let libavcodecW = 5.0;
          let statisticsE = 2.0;
          let encryptO: Array<any> = [80, 876];
          let libzeusU = false;
         circlea.push(encryptO.length >> (Math.min(1, Math.abs(parseInt(`${statisticsE}`)))));
         themeS = new Map([[`${themeS.size}`, parseInt(`${libavcodecW}`)]]);
         libavcodecW -= (parseFloat(`${themeS.size / (Math.max(10, (libzeusU ? 5 : 5)))}`));
         statisticsE -= parseFloat(`${parseInt(`${libavcodecW}`) / 1}`);
         encryptO.push(themeS.size);
         libzeusU = (themeS.size + parseInt(`${libavcodecW}`)) <= 4;
         if (xadsdkB) {
            break;
         }
      } while ((1 >= (contextD.length << (Math.min(Math.abs(1), 4))) && 4 >= (1 << (Math.min(3, contextD.length)))) && xadsdkB);
      if (circlea.length <= 5) {
         circlea.push(contextD.length << (Math.min(Math.abs(1), 3)));
      }
          let mbjscommonE = String.fromCharCode(98,105,116,108,105,110,101,99,104,117,110,107,121,95,102,95,52,53,0);
          let selli: Array<any> = [40, 834, 154];
         gemfile4 = [(mbjscommonE == String.fromCharCode(115,0) ? selli.length : mbjscommonE.length)];
          let thailandM: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,112,114,111,99,95,110,95,53,53,0),String.fromCharCode(100,101,97,108,108,111,99,97,116,101,95,115,95,52,57,0)], [String.fromCharCode(99,95,53,52,95,101,115,99,97,112,101,0),String.fromCharCode(115,119,105,99,104,95,98,95,54,53,0)]]);
         circlea.push(circlea.length % (Math.max(contextD.length, 6)));
         thailandM.set(`${thailandM.size}`, thailandM.size % (Math.max(thailandM.size, 8)));
         contextD = `${contextD.length - gemfile4.length}`;
         contextD = `${gemfile4.length - 1}`;
      while (3 == (5 * greenD.length) && 5 == (contextD.length * greenD.length)) {
          let play5: Map<any, any> = new Map([[String.fromCharCode(106,95,50,51,95,115,97,102,101,0),false ], [String.fromCharCode(121,114,121,105,95,100,95,50,55,0),true ], [String.fromCharCode(99,95,51,55,95,100,101,116,97,99,104,0),false ]]);
         contextD = "3";
         play5.set(`${play5.size}`, play5.size % (Math.max(9, play5.size)));
         break;
      }
      while (1 >= (gdtadv5.length ^ 5)) {
          let libcrashsdk9 = String.fromCharCode(113,95,55,51,95,108,105,107,101,0);
          let textinputm: Array<any> = [17, 245, 174];
          let mountingT = 4.0;
          let bannerl = true;
         greenD = [1 - circlea.length];
         libcrashsdk9 = "3";
         textinputm = [parseInt(`${mountingT}`) + 3];
         mountingT += (parseFloat(`${parseInt(`${mountingT}`) & (bannerl ? 1 : 3)}`));
         break;
      }
       let googlef: Array<any> = [951, 667];
       let telemetryy = String.fromCharCode(101,115,99,97,112,101,95,113,95,51,55,0);
      let signinupz = greenD.length <= 7493549;
      do {
         greenD = [gemfile4.length + circlea.length];
         if (signinupz) {
            break;
         }
      } while (((greenD.length - circlea.length) < 4) && signinupz);
      while (4 <= (telemetryy.length ^ 4)) {
          let stringsg = String.fromCharCode(120,95,49,51,95,111,110,101,111,102,115,0);
          let whiteX = String.fromCharCode(116,95,56,95,114,101,106,111,105,110,0);
          let indexb = 5.0;
          let libcxxcomponentsA = 1.0;
         telemetryy += `${(String.fromCharCode(55,0) == telemetryy ? telemetryy.length : greenD.length)}`;
         stringsg = `${(whiteX == String.fromCharCode(84,0) ? whiteX.length : stringsg.length)}`;
         indexb += parseFloat(`${3}`);
         libcxxcomponentsA -= parseFloat(`${whiteX.length}`);
         break;
      }
      x_centerO = [xadsdkv.length];
   }
       let signinup4 = false;
       let libavfilterR = String.fromCharCode(109,95,49,95,117,112,100,97,116,101,0);
         signinup4 = !signinup4;
         signinup4 = !libavfilterR.includes(`${signinup4}`);
      let nativemoduleQ = signinup4 ? !signinup4 : signinup4;
      do {
         signinup4 = libavfilterR.length == 27 || signinup4;
         if (nativemoduleQ) {
            break;
         }
      } while ((libavfilterR.length == 3) && nativemoduleQ);
       let codegenr = String.fromCharCode(111,95,54,48,95,114,101,99,111,109,98,105,110,101,0);
          let backgroundk = String.fromCharCode(103,95,57,51,95,105,109,112,111,114,116,101,100,0);
         libavfilterR = `${((signinup4 ? 3 : 1) | 1)}`;
         backgroundk = `${backgroundk.length}`;
          let debugs = String.fromCharCode(111,95,55,52,95,99,97,108,108,98,97,99,107,115,0);
         codegenr = `${codegenr.length >> (Math.min(debugs.length, 3))}`;
      dplusx = `${(singleO == String.fromCharCode(70,0) ? macauz.length : singleO.length)}`;
    

   if (5 >= (crownH.length ^ 5)) {
      x_centerO.push(1 - single_.length);
   }
       let sheetM: Map<any, any> = new Map([[String.fromCharCode(116,111,107,101,95,104,95,56,49,0),787], [String.fromCharCode(114,95,52,51,95,110,100,101,102,0),668], [String.fromCharCode(120,95,56,95,97,98,111,118,101,0),449]]);
       let hookI: Array<any> = [String.fromCharCode(98,95,50,50,95,98,121,114,121,0), String.fromCharCode(112,95,53,50,95,103,114,97,100,105,101,110,116,0), String.fromCharCode(108,105,98,111,112,117,115,95,105,95,52,51,0)];
      while (3 == (2 + hookI.length) || (2 + hookI.length) == 3) {
          let unimplementedviewf = String.fromCharCode(99,111,109,112,97,114,101,112,111,119,95,98,95,50,55,0);
          let moduleW: Array<any> = [String.fromCharCode(98,97,99,107,103,114,111,117,110,100,95,51,95,56,50,0), String.fromCharCode(102,99,102,115,95,97,95,51,57,0), String.fromCharCode(120,95,55,52,95,99,111,110,102,105,103,117,114,97,116,105,111,110,115,0)];
          let carousel5 = true;
         sheetM.set(`${hookI.length}`, hookI.length);
         unimplementedviewf += `${moduleW.length}`;
         moduleW.push(unimplementedviewf.length << (Math.min(Math.abs(1), 3)));
         carousel5 = moduleW.length >= 57;
         break;
      }
      if (sheetM.get(`${hookI.length}`) == null) {
         sheetM = new Map([[`${sheetM.size}`, hookI.length << (Math.min(1, Math.abs(sheetM.size)))]]);
      }
      for (let l = 0; l < 3; l++) {
         hookI.push(3 << (Math.min(5, hookI.length)));
      }
       let overlayD = String.fromCharCode(104,119,99,111,110,116,101,120,116,95,122,95,52,0);
         overlayD = `${3 | hookI.length}`;
      for (let v = 0; v < 2; v++) {
          let blackn = 5.0;
          let robotof = String.fromCharCode(116,114,97,102,102,105,99,95,56,95,53,48,0);
          let otherI: Array<any> = [657, 559];
          let vignetteb = String.fromCharCode(99,95,49,49,95,116,104,101,109,101,0);
          let optionsN: Map<any, any> = new Map([[String.fromCharCode(115,107,97,100,95,57,95,53,57,0),600], [String.fromCharCode(114,101,103,105,115,116,101,114,115,95,106,95,51,52,0),174]]);
         hookI = [otherI.length * 1];
         blackn -= (parseFloat(`${String.fromCharCode(51,0) == vignetteb ? vignetteb.length : parseInt(`${blackn}`)}`));
         robotof = `${(vignetteb == String.fromCharCode(98,0) ? vignetteb.length : optionsN.size)}`;
         otherI.push(optionsN.size);
      }
      templateprocessorO = `${auto_x_.length ^ hookI.length}`;

    if (formattedLoginValue === "" || loginValueErrMsg !== null) {
      setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
      return;
    }

    try {

      shrinkC = `${x_centerO.length}`;
   for (let x = 0; x < 1; x++) {
      singleO = `${shrinkC.length | xadsdkv.length}`;
   }
      setSubmitting(true);

   if (4 == xadsdkv.length) {
       let roboto1 = 5.0;
          let libmapbufferjnio = String.fromCharCode(111,95,56,51,95,112,97,114,101,110,116,0);
         roboto1 /= Math.max(4, (String.fromCharCode(84,0) == libmapbufferjnio ? libmapbufferjnio.length : parseInt(`${roboto1}`)));
       let privilegeX: Array<any> = [878, 969];
         privilegeX = [parseInt(`${roboto1}`)];
      single_ = "2";
   }
   let downo = single_ == String.fromCharCode(114,101,114,101,113,0);
   do {
       let checkboxG = 3;
       let agreementQ: Array<any> = [476, 481, 685];
          let moonC = String.fromCharCode(100,111,109,97,105,110,95,100,95,50,51,0);
          let path_ = String.fromCharCode(100,95,56,95,108,111,111,112,0);
         checkboxG >>= Math.min(Math.abs(1), 5);
         moonC = `${3 | path_.length}`;
         path_ += `${moonC.length % 2}`;
      let floatingD = 6493176 <= agreementQ.length;
      do {
         agreementQ.push(3);
         if (floatingD) {
            break;
         }
      } while (floatingD && (agreementQ.includes(checkboxG)));
         agreementQ.push(checkboxG);
      for (let e = 0; e < 3; e++) {
         agreementQ.push(agreementQ.length);
      }
      while ((checkboxG << (Math.min(agreementQ.length, 5))) < 4 && (agreementQ.length << (Math.min(2, Math.abs(checkboxG)))) < 4) {
          let descX: Map<any, any> = new Map([[String.fromCharCode(113,95,49,54,95,101,103,114,101,115,115,0),305], [String.fromCharCode(103,101,116,108,98,108,111,99,107,105,110,99,95,100,95,55,56,0),404]]);
         agreementQ.push(agreementQ.length | 1);
         descX = new Map([[`${descX.size}`, descX.size * 3]]);
         break;
      }
         checkboxG /= Math.max(agreementQ.length / 2, 5);
      single_ += `${agreementQ.length / 1}`;
      if (downo) {
         break;
      }
   } while (downo && (single_.length < templateprocessorO.length));

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

       let fasth = String.fromCharCode(116,105,109,101,95,107,95,52,56,0);
       let inactiveV = String.fromCharCode(116,112,101,108,100,115,112,95,114,95,56,50,0);
      for (let p = 0; p < 1; p++) {
         fasth += "2";
      }
       let strO = 0.0;
       let mbridgeN = 3.0;
      for (let p = 0; p < 3; p++) {
         mbridgeN -= parseFloat(`${inactiveV.length}`);
      }
      let appsY = 7264104.0 <= strO;
      do {
         strO += parseFloat(`${inactiveV.length >> (Math.min(4, fasth.length))}`);
         if (appsY) {
            break;
         }
      } while (((strO / 3.83) == 3.29) && appsY);
      while (3.40 >= (1.55 - strO)) {
         strO -= parseFloat(`${2}`);
         break;
      }
          let mimos: Map<any, any> = new Map([[String.fromCharCode(119,105,110,100,111,119,115,95,98,95,56,52,0),188], [String.fromCharCode(110,98,112,112,95,57,95,52,50,0),556], [String.fromCharCode(100,101,108,105,118,101,114,101,100,95,56,95,55,51,0),435]]);
          let neony = true;
          let imagemanageru = String.fromCharCode(112,100,102,95,122,95,50,56,0);
         inactiveV = "3";
         mimos.set(imagemanageru, 2);
         neony = imagemanageru == String.fromCharCode(117,0);
      nalyticsp ^= (crownH == String.fromCharCode(81,0) ? nalyticsp : crownH.length);
   if (4 == crownH.length) {
      xadsdkv += `${(shrinkC == String.fromCharCode(89,0) ? auto_x_.length : shrinkC.length)}`;
   }
      setLoginValueErrMsg(err);

   let headerY = 6570734 <= macauz.length;
   do {
      macauz.push(nalyticsp);
      if (headerY) {
         break;
      }
   } while ((2 > (macauz.length % (Math.max(10, xadsdkv.length)))) && headerY);
   if (singleO.length <= xadsdkv.length) {
      singleO += `${shrinkC.length & auto_x_.length}`;
   }
      return;
    }

    setSubmitting(false);

       let injuryY = 3.0;
       let gesturesD = String.fromCharCode(114,97,109,112,117,112,95,106,95,54,48,0);
      while ((parseInt(`${injuryY}`) - gesturesD.length) < 2 || (injuryY - 5.92) < 3.37) {
         gesturesD = `${gesturesD.length}`;
         break;
      }
      let progressx = injuryY <= 8741635.0;
      do {
         injuryY -= 1;
         if (progressx) {
            break;
         }
      } while (progressx && (injuryY < 4.25));
          let pinit_g2n = 1.0;
         gesturesD = `${parseInt(`${injuryY}`) - 2}`;
         pinit_g2n += parseInt(`${pinit_g2n}`) | parseInt(`${pinit_g2n}`);
         injuryY += 2 ^ parseInt(`${injuryY}`);
      while ((gesturesD.length - 1) < 5) {
         gesturesD = `${(gesturesD == String.fromCharCode(121,0) ? parseInt(`${injuryY}`) : gesturesD.length)}`;
         break;
      }
         gesturesD = `${gesturesD.length}`;
      templateprocessorO = `${crownH.length}`;
       let guider: Map<any, any> = new Map([[String.fromCharCode(104,111,116,95,118,95,51,57,0),572], [String.fromCharCode(98,108,111,99,107,115,95,102,95,56,0),717], [String.fromCharCode(122,95,57,52,95,100,101,115,116,0),992]]);
       let libtanu: Map<any, any> = new Map([[String.fromCharCode(101,97,115,101,95,105,95,56,51,0),824], [String.fromCharCode(103,97,109,97,95,53,95,57,0),120], [String.fromCharCode(122,95,53,57,95,97,100,100,105,116,105,118,101,0),941]]);
       let qaagN = String.fromCharCode(102,95,55,53,95,114,118,100,115,112,0);
      while ((4 >> (Math.min(1, qaagN.length))) == 5 && (4 >> (Math.min(5, qaagN.length))) == 1) {
         libtanu = new Map([[`${libtanu.size}`, libtanu.size | 3]]);
         break;
      }
         libtanu = new Map([[`${guider.size}`, guider.size - libtanu.size]]);
         libtanu = new Map([[`${guider.size}`, qaagN.length]]);
      for (let e = 0; e < 3; e++) {
         guider = new Map([[`${libtanu.size}`, qaagN.length]]);
      }
      for (let j = 0; j < 1; j++) {
         libtanu.set(`${libtanu.size}`, libtanu.size);
      }
      if (libtanu.size >= 4) {
         libtanu.set(`${guider.size}`, libtanu.size % 1);
      }
      let malaysial = 6257290 >= qaagN.length;
      do {
         qaagN += `${3 & libtanu.size}`;
         if (malaysial) {
            break;
         }
      } while (malaysial && (3 < (qaagN.length / 4) || (qaagN.length / (Math.max(4, 3))) < 2));
      let areag = qaagN == String.fromCharCode(116,117,112,50,49,0);
      do {
         qaagN = `${libtanu.size | qaagN.length}`;
         if (areag) {
            break;
         }
      } while (areag && (5 == (4 ^ libtanu.size) && 1 == (4 ^ libtanu.size)));
       let pageD = false;
       let rewindZ = true;
      backwardQ.set(`${crownH}`, crownH.length / 3);

    dispatch(hideBottomSheetAction());

   for (let p = 0; p < 2; p++) {
       let turnn = String.fromCharCode(113,95,50,56,95,99,111,101,102,102,115,112,0);
       let clockV = 1;
       let fileX = 1.0;
       let textG = 0;
       let klevinz = 1;
         textG ^= 3 % (Math.max(textG, 7));
       let untickU = String.fromCharCode(120,95,50,51,95,116,114,117,101,109,111,116,105,111,110,100,97,116,97,0);
         turnn = `${textG * 1}`;
       let splash3 = String.fromCharCode(100,120,116,111,114,121,95,101,95,50,49,0);
          let philippineso: Map<any, any> = new Map([[String.fromCharCode(108,111,103,102,110,95,52,95,53,0),575], [String.fromCharCode(108,95,54,48,95,117,110,108,111,97,100,0),830], [String.fromCharCode(106,95,49,52,95,109,111,117,116,104,0),219]]);
          let notificationc: Array<any> = [921, 607];
          let abidetectq = String.fromCharCode(100,95,51,57,95,106,112,101,103,116,114,97,110,0);
         textG &= notificationc.length / (Math.max(3, 9));
         philippineso = new Map([[`${philippineso.size}`, (abidetectq == String.fromCharCode(108,0) ? abidetectq.length : philippineso.size)]]);
         notificationc = [(String.fromCharCode(55,0) == abidetectq ? abidetectq.length : philippineso.size)];
      if (untickU.length == splash3.length) {
         splash3 = `${parseInt(`${fileX}`)}`;
      }
          let libsentryV = true;
          let mutedb = String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,56,95,54,53,0);
          let videojsG = String.fromCharCode(98,114,101,97,107,95,98,95,56,49,0);
         untickU = `${klevinz * untickU.length}`;
         libsentryV = !libsentryV;
         mutedb += `${mutedb.length}`;
         videojsG += `${((libsentryV ? 2 : 2) << (Math.min(Math.abs(1), 3)))}`;
         untickU = `${clockV}`;
      let stringsj = String.fromCharCode(53,102,111,122,106,0) == untickU;
      do {
         untickU += `${parseInt(`${fileX}`) ^ 3}`;
         if (stringsj) {
            break;
         }
      } while ((!turnn.includes(untickU)) && stringsj);
      if (1.35 >= (4.20 * fileX)) {
         fileX -= textG & 3;
      }
      let moreW = 6452722 >= klevinz;
      do {
         klevinz /= Math.max(2, 1);
         if (moreW) {
            break;
         }
      } while (moreW && ((splash3.length % 1) >= 1));
         splash3 = `${untickU.length}`;
      for (let t = 0; t < 2; t++) {
         turnn = `${untickU.length}`;
      }
      while (2 <= (clockV ^ turnn.length)) {
         turnn += `${parseInt(`${fileX}`)}`;
         break;
      }
      if (5 >= (klevinz % (Math.max(textG, 7))) && 5 >= (klevinz % 5)) {
         textG /= Math.max(clockV / (Math.max(untickU.length, 5)), 4);
      }
      macauz = [2 << (Math.min(4, Math.abs(backwardQ.size)))];
   }
   let floating2 = shrinkC == String.fromCharCode(49,100,97,101,119,100,116,0);
   do {
      shrinkC += `${2 - x_centerO.length}`;
      if (floating2) {
         break;
      }
   } while ((!single_.includes(shrinkC)) && floating2);
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
