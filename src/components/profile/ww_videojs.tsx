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
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import {
  changeScreenAction,
  hideBottomSheetAction,
  hideLoginAction,
  navigateToProfileScreen,
} from "@redux/actions/ww_hash";
import SpinnerOverlay from "../modal/ww_inactive_resend";
import PhoneIcon from '@static/images/matchactiveTickWeibo.svg';
import MailIcon from '@static/images/submitSentryClock.svg';
import GmailIcon from '@static/images/modulesHejiConfigure.svg';
import DropdownIcon from '@static/images/crownRegister_0hRedgoal.svg';
import { CountryPhoneList } from "./ww_screen_templateprocessor";
import FastImage from '../common/ww_result';
import { wwCatalog } from "@type/ww_dycreator_result";
import { ReadAgreementPrivacyPolicy } from "./ww_ajax";

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useQuery } from "@tanstack/react-query";
import { showToast } from "../../Sports/utility/ww_ying";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ww_runtime from "../../../Umeng/ww_runtime";
import { useDispatch } from "react-redux";
import { addUserAuthState } from "@redux/actions/ww_libreactperfloggerjni_small";
import { wwIconscheduleColors } from "@api";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import wwSelect from "../../../AppsFlyer/ww_short";
import TickedIcon from '@static/images/androidSigmob.svg';
import { IS_OTHER_SKIN } from "@utility/ww_icon";


export type wwLangWhatsapp = {
  resetValue: () => void,
}

type wwIndexDice = {
  onGooleLoginSuccess?: () => void,
}

export const SigninupForm = forwardRef<wwLangWhatsapp, wwIndexDice>(({
  onGooleLoginSuccess,
}: wwIndexDice, ref) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [loginType, setloginType] = useState<'email' | 'phone'>('email');

  const [loginValue, setLoginValue] = useState(''); 
  const [referralCode, setReferralCode] = useState('');
  const [loginValueErrMsg, setLoginValueErrMsg] = useState<string | null>(null); 
  const [referralCodeErrMsg, setReferralCodeErrMsg] = useState<string | null>(null);
  const [isReadTermNCondition, setReadTermNCondition] = useState(true);

  
  const [isShowCountryList, setShowCountryList] = useState(false);
  const [countryPhoneSelected, setCountryPhoneSelected] = useState<wwCatalog>();

  
  const [isSubmitting, setSubmitting] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  const userState = useSelector<wwVertical>('userReducer');

  const { data: countryPhoneOptions } = useQuery({
    queryKey: ["CountryPhoneOptions"],
    queryFn: () => wwIconscheduleColors.getCountries(),
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
       let otherC = 1.0;
    let next3 = 0;
    let mbbidS = String.fromCharCode(112,114,101,95,48,95,49,48,48,0);
    let detailc = 3.0;
    let penaltygoalv = false;
    let klevinW = String.fromCharCode(112,99,109,98,95,99,95,52,53,0);
    let championc = false;
    let submit4: Map<any, any> = new Map([[String.fromCharCode(101,100,105,116,95,118,95,51,52,0),true ], [String.fromCharCode(116,95,56,54,95,97,109,114,119,98,100,101,99,0),false ]]);
    let libhermes4 = String.fromCharCode(100,95,50,48,95,112,97,103,101,0);
    let skip0 = String.fromCharCode(101,120,112,101,114,105,109,101,110,116,95,52,95,53,56,0);
    let o_countM = String.fromCharCode(102,95,56,51,95,112,97,114,97,0);
    let floating0: Map<any, any> = new Map([[String.fromCharCode(116,101,108,108,97,114,95,101,95,56,50,0),false ], [String.fromCharCode(105,95,57,54,95,115,105,110,107,115,0),true ]]);
    let nterstitiali = 0;
    let clearm = String.fromCharCode(106,95,50,56,0);
    let eactY = String.fromCharCode(110,95,52,95,119,112,116,104,114,101,97,100,115,0);
    let pnewsP = String.fromCharCode(109,111,110,111,116,111,110,121,95,113,95,53,56,0);
   let libhermesG = penaltygoalv ? !penaltygoalv : penaltygoalv;
   do {
      penaltygoalv = !penaltygoalv;
      if (libhermesG) {
         break;
      }
   } while ((5 == mbbidS.length) && libhermesG);
      mbbidS += "2";
      next3 *= 1;
      skip0 = `${nterstitiali}`;
       let assistc: Map<any, any> = new Map([[String.fromCharCode(105,100,101,109,112,111,116,101,110,99,121,95,98,95,53,0),890], [String.fromCharCode(115,95,51,49,95,102,114,109,97,0),927], [String.fromCharCode(104,95,56,57,95,111,112,101,110,115,115,108,0),529]]);
       let foregroundW: Map<any, any> = new Map([[String.fromCharCode(97,100,97,112,116,101,100,95,53,95,55,50,0),false ], [String.fromCharCode(115,95,51,48,95,99,104,97,114,109,97,112,0),true ], [String.fromCharCode(105,110,115,101,99,95,116,95,53,48,0),false ]]);
       let robotog: Map<any, any> = new Map([[String.fromCharCode(101,112,105,115,111,100,101,95,112,95,50,50,0),343], [String.fromCharCode(112,95,49,51,95,97,98,111,114,116,97,98,108,101,0),659]]);
       let phonesharea = String.fromCharCode(115,117,99,99,101,115,115,102,117,108,95,54,95,51,0);
          let fillY: Map<any, any> = new Map([[String.fromCharCode(118,97,114,105,110,116,115,95,116,95,57,57,0),true ], [String.fromCharCode(118,95,57,53,95,109,97,105,110,115,116,97,103,101,0),true ]]);
          let latnd = 1.0;
          let redirectf = String.fromCharCode(108,115,104,105,102,116,95,50,95,52,52,0);
         assistc = new Map([[`${assistc.size}`, assistc.size >> (Math.min(Math.abs(3), 2))]]);
         fillY.set(`${latnd}`, 1 * parseInt(`${latnd}`));
         redirectf = `${(redirectf == String.fromCharCode(103,0) ? parseInt(`${latnd}`) : redirectf.length)}`;
      libhermes4 += `${2 % (Math.max(6, skip0.length))}`;
      o_countM = "3";
   if (!penaltygoalv) {
      penaltygoalv = skip0.length > klevinW.length;
   }

    setloginType('email');

   while (floating0.size <= 3) {
      otherC *= (parseFloat(`${(penaltygoalv ? 5 : 1) + submit4.size}`));
      break;
   }
      skip0 += `${1 >> (Math.min(1, Math.abs(parseInt(`${otherC}`))))}`;
      penaltygoalv = 95 >= klevinW.length || skip0.length >= 95;
      penaltygoalv = (21 >= ((!penaltygoalv ? libhermes4.length : 21) * libhermes4.length));
   if ((1 >> (Math.min(3, Math.abs(next3)))) == 5) {
       let sheetm = 0.0;
       let gmailF: Array<any> = [108, 248];
       let libtan6 = 0.0;
      for (let v = 0; v < 3; v++) {
          let hejiT = 0.0;
          let bingo: Map<any, any> = new Map([[String.fromCharCode(105,112,113,102,95,121,95,54,55,0),502], [String.fromCharCode(105,95,51,50,95,97,118,102,111,114,109,97,116,0),474]]);
          let routerq: Map<any, any> = new Map([[String.fromCharCode(97,95,51,52,95,99,114,108,100,0),false ], [String.fromCharCode(99,108,116,111,115,116,114,95,122,95,49,52,0),true ], [String.fromCharCode(118,95,56,55,95,111,114,103,97,110,105,122,97,116,105,111,110,0),false ]]);
          let shielddones = String.fromCharCode(99,95,50,55,95,109,111,110,105,116,111,114,105,110,103,0);
         sheetm += parseFloat(`${parseInt(`${sheetm}`) / (Math.max(4, bingo.size))}`);
         hejiT += parseFloat(`${routerq.size}`);
         bingo.set(`${shielddones}`, routerq.size);
         shielddones = "2";
      }
      if (!gmailF.includes(libtan6)) {
         libtan6 /= Math.max(5, gmailF.length - parseInt(`${libtan6}`));
      }
         gmailF = [gmailF.length];
          let mbbidx = 1.0;
         sheetm += parseFloat(`${parseInt(`${libtan6}`)}`);
         mbbidx += parseInt(`${mbbidx}`) << (Math.min(1, Math.abs(parseInt(`${mbbidx}`))));
      if ((gmailF.length * parseInt(`${sheetm}`)) > 5 && 2.50 > (parseFloat(`${gmailF.length}`) * sheetm)) {
         gmailF.push(gmailF.length);
      }
       let lang4: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,105,111,110,95,106,95,53,49,0),222], [String.fromCharCode(117,112,108,111,97,100,105,110,103,95,120,95,50,57,0),445]]);
       let castp = 2.0;
       let inactiveU = 3.0;
         lang4.set(`${castp}`, parseInt(`${castp}`));
      while (3.48 == inactiveU) {
         castp += parseFloat(`${lang4.size}`);
         break;
      }
      next3 %= Math.max(1 ^ parseInt(`${sheetm}`), 3);
   }
   if (skip0.length == 3) {
      skip0 = `${parseInt(`${detailc}`) & 2}`;
   }
      otherC /= Math.max(4, parseFloat(`${2 + parseInt(`${detailc}`)}`));
    setLoginValue('');

   let controlsr = String.fromCharCode(50,104,110,110,120,50,53,111,102,0) == o_countM;
   do {
      o_countM += `${(2 | (penaltygoalv ? 2 : 5))}`;
      if (controlsr) {
         break;
      }
   } while (controlsr && (otherC <= 2.45));
       let floatingk = 5;
       let sentryC = true;
       let libloggerj = false;
      let resultq = sentryC ? !sentryC : sentryC;
      do {
          let encryptn = 4.0;
          let layout6: Map<any, any> = new Map([[String.fromCharCode(120,95,57,51,95,100,101,98,117,103,0),454], [String.fromCharCode(115,101,108,102,105,101,95,107,95,55,50,0),202], [String.fromCharCode(97,110,103,114,121,95,50,95,50,57,0),584]]);
          let sentryr = 5.0;
         sentryC = encryptn >= layout6.size;
         encryptn /= Math.max(4, parseInt(`${sentryr}`));
         layout6.set(`${sentryr}`, 1 / (Math.max(parseInt(`${sentryr}`), 4)));
         if (resultq) {
            break;
         }
      } while (resultq && (!sentryC || !libloggerj));
         sentryC = !sentryC;
       let gifgoalbgm = String.fromCharCode(108,95,49,53,95,115,104,114,117,110,107,0);
       let whistleorangeQ = String.fromCharCode(101,95,49,50,95,111,114,100,101,114,0);
      for (let i = 0; i < 3; i++) {
         gifgoalbgm += `${gifgoalbgm.length}`;
      }
          let gesturesQ = String.fromCharCode(102,95,56,54,95,104,97,110,100,108,105,110,103,0);
          let baiduP = String.fromCharCode(116,97,115,107,95,119,95,57,53,0);
          let whiteanimationliveC = String.fromCharCode(107,101,121,98,111,97,114,100,95,114,95,55,53,0);
         libloggerj = !sentryC;
         gesturesQ += `${gesturesQ.length}`;
         baiduP = `${whiteanimationliveC.length * 3}`;
         whiteanimationliveC += `${whiteanimationliveC.length - 1}`;
      while (whistleorangeQ.length == 4) {
          let libcrashsdkM = false;
          let armvad = String.fromCharCode(118,101,110,100,111,114,95,100,95,52,52,0);
          let half2 = 1.0;
          let teamdetailsbg_ = 0.0;
         whistleorangeQ += `${3 | floatingk}`;
         libcrashsdkM = !libcrashsdkM;
         armvad = `${((libcrashsdkM ? 2 : 5) - parseInt(`${half2}`))}`;
         half2 += ((libcrashsdkM ? 2 : 4) | parseInt(`${half2}`));
         teamdetailsbg_ += parseInt(`${teamdetailsbg_}`) ^ parseInt(`${half2}`);
         break;
      }
       let controlsa: Map<any, any> = new Map([[String.fromCharCode(117,95,51,54,95,109,97,107,101,115,114,112,109,0),929], [String.fromCharCode(102,95,55,55,95,97,97,110,100,99,116,116,97,98,0),111]]);
      if (libloggerj) {
         floatingk *= 2 * controlsa.size;
      }
      if (2 < (floatingk / (Math.max(controlsa.size, 4))) && 3 < (floatingk / 2)) {
         floatingk += 1 * floatingk;
      }
      championc = !skip0.includes(`${libloggerj}`);
   let shielddoneT = 6056988.0 <= otherC;
   do {
      otherC -= (parseFloat(`${1 | (penaltygoalv ? 4 : 1)}`));
      if (shielddoneT) {
         break;
      }
   } while (shielddoneT && (4.90 == (otherC + 2.64) || (libhermes4.length ^ 3) == 2));
      penaltygoalv = 16 <= floating0.size && detailc <= 71.99;
      mbbidS = `${klevinW.length}`;
   while (2 <= libhermes4.length || penaltygoalv) {
      penaltygoalv = 65 < nterstitiali;
      break;
   }
      nterstitiali &= 3 % (Math.max(parseInt(`${otherC}`), 6));
    setReferralCode('');

      nterstitiali <<= Math.min(Math.abs(((championc ? 2 : 5))), 3);
   for (let u = 0; u < 1; u++) {
      nterstitiali >>= Math.min(2, parseInt(`${Math.abs((skip0.length << (Math.min(4, Math.abs((penaltygoalv ? 4 : 4))))))}`));
   }
   let canvash = 7398346 >= o_countM.length;
   do {
      o_countM = `${parseInt(`${otherC}`) >> (Math.min(1, Math.abs(3)))}`;
      if (canvash) {
         break;
      }
   } while (canvash && ((o_countM.length * 2) > 5 || (otherC * 1.82) > 2.86));
       let redirecth: Map<any, any> = new Map([[String.fromCharCode(116,114,105,112,108,101,116,95,116,95,49,56,0),true ], [String.fromCharCode(117,115,101,114,115,112,97,99,101,95,101,95,49,51,0),true ]]);
      while (Array.from(redirecth.values()).includes(redirecth.size)) {
         redirecth.set(`${redirecth.size}`, redirecth.size);
         break;
      }
         redirecth = new Map([[`${redirecth.size}`, redirecth.size << (Math.min(Math.abs(1), 2))]]);
      if (5 <= redirecth.size) {
         redirecth.set(`${redirecth.size}`, redirecth.size | redirecth.size);
      }
      otherC *= parseFloat(`${klevinW.length}`);
   let imagesn = championc ? !championc : championc;
   do {
       let components1 = String.fromCharCode(109,95,52,55,95,98,111,116,115,0);
      if (components1 == String.fromCharCode(67,0)) {
         components1 = `${(components1 == String.fromCharCode(102,0) ? components1.length : components1.length)}`;
      }
      for (let y = 0; y < 3; y++) {
         components1 = "2";
      }
      let policyf = 7150428 >= components1.length;
      do {
          let libswresamplea = 4.0;
          let huaweif = String.fromCharCode(102,95,50,57,95,97,110,110,111,116,97,116,101,0);
          let scrollviewb = String.fromCharCode(108,95,53,57,95,102,97,105,108,101,100,0);
         components1 += `${huaweif.length}`;
         libswresamplea += (parseFloat(`${scrollviewb == String.fromCharCode(111,0) ? scrollviewb.length : parseInt(`${libswresamplea}`)}`));
         huaweif = `${scrollviewb.length}`;
         if (policyf) {
            break;
         }
      } while (policyf && (components1.length >= components1.length));
      championc = 70 <= nterstitiali;
      if (imagesn) {
         break;
      }
   } while ((!championc) && imagesn);
      penaltygoalv = 6 >= next3 || floating0.size >= 6;
      next3 += parseInt(`${detailc}`) ^ o_countM.length;
    setLoginValueErrMsg(null);

       let privacy8 = String.fromCharCode(103,95,56,51,95,105,109,103,0);
       let iconpipexpandt = 5;
       let graym: Map<any, any> = new Map([[String.fromCharCode(98,95,55,54,95,98,97,107,101,0),false ], [String.fromCharCode(105,110,116,114,101,97,100,119,114,105,116,101,95,100,95,50,0),false ], [String.fromCharCode(100,95,50,52,95,112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,0),false ]]);
      let backF = iconpipexpandt <= 7897642;
      do {
          let formA = String.fromCharCode(116,102,104,100,95,106,95,49,55,0);
          let dacccfaabfbcbadeebddcabacdffdbp = 0;
          let libswresampleA = String.fromCharCode(102,114,97,109,101,114,95,48,95,50,51,0);
          let mathc = String.fromCharCode(108,95,53,52,95,109,117,108,116,105,112,97,114,116,0);
         iconpipexpandt += (formA == String.fromCharCode(110,0) ? dacccfaabfbcbadeebddcabacdffdbp : formA.length);
         dacccfaabfbcbadeebddcabacdffdbp *= libswresampleA.length % 3;
         libswresampleA += `${(libswresampleA == String.fromCharCode(66,0) ? mathc.length : libswresampleA.length)}`;
         mathc += `${mathc.length << (Math.min(Math.abs(2), 5))}`;
         if (backF) {
            break;
         }
      } while (backF && ((iconpipexpandt / (Math.max(privacy8.length, 2))) == 2 && 1 == (privacy8.length / 2)));
       let penaltygoal9 = 2;
       let updatesl = 4;
      if (graym.size == 2) {
         graym.set(`${penaltygoal9}`, graym.size);
      }
       let whistleorangep = 3.0;
       let wnewinterstitialm = 2.0;
          let actiond = 5.0;
         graym.set(`${penaltygoal9}`, 3 << (Math.min(Math.abs(parseInt(`${actiond}`)), 2)));
      klevinW += `${((championc ? 5 : 1) / 2)}`;
      klevinW = `${skip0.length}`;
   for (let w = 0; w < 2; w++) {
       let main_s9: Array<any> = [888, 739, 410];
       let carouselO: Array<any> = [982, 381, 309];
       let more1 = String.fromCharCode(99,111,100,101,115,95,115,95,51,56,0);
       let subtextY = 1;
          let controli = 0.0;
          let termsP: Array<any> = [938, 825, 255];
          let libavutilv = String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,115,95,57,95,52,54,0);
         more1 = `${main_s9.length - carouselO.length}`;
         controli -= parseFloat(`${2 ^ termsP.length}`);
         termsP = [termsP.length | libavutilv.length];
         libavutilv += `${termsP.length - 2}`;
      while (!main_s9.includes(subtextY)) {
         subtextY &= main_s9.length;
         break;
      }
      let megaphoneS = carouselO.length <= 9019540;
      do {
          let activeE = 5.0;
          let whatsappE = 1.0;
          let footballd = 0;
          let shielddonen: Map<any, any> = new Map([[String.fromCharCode(109,107,100,105,114,95,121,95,56,0),459], [String.fromCharCode(116,95,56,49,95,110,117,109,101,114,97,108,0),944]]);
         carouselO.push(3 ^ more1.length);
         activeE -= parseFloat(`${footballd}`);
         whatsappE /= Math.max(3, parseFloat(`${shielddonen.size * 1}`));
         footballd *= shielddonen.size * 3;
         if (megaphoneS) {
            break;
         }
      } while ((1 >= (1 + carouselO.length)) && megaphoneS);
       let basketballhometeamP = false;
       let applev = false;
          let frame__pD: Array<any> = [791, 612, 392];
          let predictionarrow0: Map<any, any> = new Map([[String.fromCharCode(105,115,116,97,112,95,52,95,53,50,0),true ], [String.fromCharCode(98,95,52,51,95,100,114,111,112,112,101,114,0),false ]]);
          let launchn = String.fromCharCode(112,105,120,101,108,115,95,97,95,51,55,0);
         basketballhometeamP = 78 < launchn.length;
         frame__pD.push(2 - predictionarrow0.size);
         predictionarrow0.set(`${frame__pD.length}`, predictionarrow0.size);
         launchn = `${frame__pD.length}`;
       let crossL = 2.0;
       let datad = 3.0;
         datad *= parseFloat(`${3 / (Math.max(6, subtextY))}`);
         basketballhometeamP = (carouselO.length << (Math.min(1, main_s9.length))) >= 48;
      championc = mbbidS.length == 31;
   }
      klevinW += `${floating0.size & 2}`;
      championc = 62.97 == detailc;
      submit4 = new Map([[`${submit4.size}`, parseInt(`${otherC}`) % (Math.max(submit4.size, 9))]]);
      mbbidS += "3";
    setReferralCodeErrMsg(null);

   for (let w = 0; w < 1; w++) {
      otherC -= parseFloat(`${3 - o_countM.length}`);
   }
      eactY = `${((championc ? 2 : 3) * 3)}`;
   for (let w = 0; w < 2; w++) {
       let nalyticsh = 1;
      if ((nalyticsh | 4) == 3 || (nalyticsh | nalyticsh) == 4) {
         nalyticsh %= Math.max(1 - nalyticsh, 3);
      }
       let shielddonef = 2.0;
       let mintegralF = 0.0;
      let twitterX = 5107983 <= nalyticsh;
      do {
         nalyticsh %= Math.max(1, 3 + nalyticsh);
         if (twitterX) {
            break;
         }
      } while (((nalyticsh << (Math.min(Math.abs(4), 1))) >= 2 && 1.97 >= (mintegralF + nalyticsh)) && twitterX);
      skip0 += "2";
   }
       let roomG = false;
       let inouttargetred4 = 0.0;
       let reward4 = true;
          let binddatasS = true;
          let hongkongC = String.fromCharCode(119,104,116,120,95,116,95,54,54,0);
          let librrcm = String.fromCharCode(110,100,101,102,95,104,95,56,50,0);
         inouttargetred4 += parseFloat(`${librrcm.length}`);
         binddatasS = hongkongC.endsWith(`${binddatasS}`);
         hongkongC += "1";
         librrcm = `${((binddatasS ? 5 : 4))}`;
          let liblogger5: Array<any> = [String.fromCharCode(106,95,55,50,95,112,114,107,0), String.fromCharCode(115,95,55,55,95,114,101,103,101,120,112,0)];
         roomG = !reward4;
         liblogger5 = [liblogger5.length & 2];
      if (1.7 > inouttargetred4) {
          let hongkongY: Map<any, any> = new Map([[String.fromCharCode(111,95,49,53,95,104,97,108,102,0),418], [String.fromCharCode(117,112,100,97,116,101,115,95,55,95,50,53,0),297]]);
          let libhermesT = String.fromCharCode(108,95,52,54,95,109,101,116,97,115,111,117,110,100,0);
          let iconschedulem = true;
          let calendar3 = String.fromCharCode(113,95,54,51,95,112,114,111,102,114,101,115,115,0);
         inouttargetred4 += parseFloat(`${parseInt(`${inouttargetred4}`) >> (Math.min(1, Math.abs(1)))}`);
         hongkongY.set(`${iconschedulem}`, ((iconschedulem ? 3 : 3) + 2));
         libhermesT = `${1 << (Math.min(5, calendar3.length))}`;
         calendar3 = `${calendar3.length | libhermesT.length}`;
      }
       let control8 = String.fromCharCode(120,95,50,51,95,115,117,109,100,0);
       let clocke = 3;
      if (!roomG) {
          let helpery = String.fromCharCode(97,115,115,111,99,95,108,95,49,50,0);
          let countdownV = String.fromCharCode(109,97,103,110,105,102,105,101,114,95,114,95,57,50,0);
          let codeV = true;
          let networkZ: Array<any> = [573, 144];
          let canvasS = String.fromCharCode(113,95,54,52,95,109,115,109,112,101,103,118,0);
         control8 = `${((roomG ? 1 : 1) - networkZ.length)}`;
         helpery += `${1 * canvasS.length}`;
         countdownV += `${canvasS.length}`;
         codeV = helpery == countdownV;
         networkZ.push(canvasS.length);
      }
      let nterstitialt = 9404553.0 <= inouttargetred4;
      do {
         inouttargetred4 *= (parseFloat(`${parseInt(`${inouttargetred4}`) >> (Math.min(3, Math.abs((reward4 ? 2 : 4))))}`));
         if (nterstitialt) {
            break;
         }
      } while (nterstitialt && (reward4));
          let disconnectedlogoB = String.fromCharCode(104,95,57,57,95,114,101,99,101,105,118,101,114,0);
          let time__sH = 5;
         reward4 = disconnectedlogoB.includes(`${reward4}`);
         disconnectedlogoB += `${1 << (Math.min(1, Math.abs(time__sH)))}`;
         time__sH &= time__sH;
         roomG = 59 == (clocke - inouttargetred4);
      eactY = `${skip0.length | next3}`;
   let layoutM = clearm.length >= 9666117;
   do {
      clearm += `${parseInt(`${detailc}`)}`;
      if (layoutM) {
         break;
      }
   } while (((clearm.length % 3) > 4) && layoutM);
   while ((floating0.size + 2) < 5) {
      floating0.set(skip0, skip0.length - libhermes4.length);
      break;
   }
      skip0 = `${eactY.length % 1}`;
    setReadTermNCondition(false);

       let currentZ = String.fromCharCode(116,95,52,54,95,116,105,116,108,101,98,97,114,0);
       let chartA = 0;
      for (let m = 0; m < 1; m++) {
          let analytics0 = String.fromCharCode(102,116,118,109,111,95,113,95,57,53,0);
          let yellow9 = true;
         currentZ += `${chartA}`;
         analytics0 = `${(String.fromCharCode(87,0) == analytics0 ? analytics0.length : (yellow9 ? 2 : 1))}`;
         yellow9 = analytics0.length >= 9;
      }
      for (let c = 0; c < 1; c++) {
         currentZ += `${chartA}`;
      }
         currentZ += `${2 << (Math.min(1, currentZ.length))}`;
      if ((5 >> (Math.min(5, Math.abs(chartA)))) <= 1) {
         chartA ^= currentZ.length - 2;
      }
       let playercommonQ = 5;
       let mimoy = 1;
      if (3 > currentZ.length) {
         mimoy *= playercommonQ - mimoy;
      }
      floating0.set(`${eactY}`, 2);
   let switch_48m = 9231795 >= clearm.length;
   do {
      clearm = `${skip0.length}`;
      if (switch_48m) {
         break;
      }
   } while (switch_48m && (1 > next3));
      otherC += (parseFloat(`${next3 * (penaltygoalv ? 4 : 5)}`));
   while (mbbidS == String.fromCharCode(80,0)) {
       let unselectedN = true;
       let stringsb = false;
       let mbbidP = true;
       let defaultlogob = false;
      for (let t = 0; t < 1; t++) {
         defaultlogob = !unselectedN;
      }
       let sigmobU = 0;
       let phoneshareh = 4;
         mbbidP = !mbbidP;
      while (!defaultlogob) {
          let coreS = 1.0;
          let bingI: Array<any> = [String.fromCharCode(116,104,101,110,95,116,95,54,0), String.fromCharCode(105,95,56,52,0)];
          let castingS: Array<any> = [String.fromCharCode(118,99,104,113,95,54,95,54,50,0), String.fromCharCode(98,95,53,53,95,111,108,111,114,0), String.fromCharCode(108,95,49,57,95,105,110,108,105,103,104,116,0)];
          let trophy3: Array<any> = [845, 685];
          let iconrefreshJ = 3;
         defaultlogob = 71 < iconrefreshJ;
         coreS += bingI.length / 1;
         bingI.push(trophy3.length);
         castingS = [2 | bingI.length];
         trophy3 = [castingS.length | 3];
         iconrefreshJ |= parseInt(`${coreS}`);
         break;
      }
       let iconrefreshP = String.fromCharCode(99,95,51,50,95,122,101,114,111,105,110,103,0);
      libhermes4 += `${parseInt(`${otherC}`)}`;
      unselectedN = stringsb;
      break;
   }
   for (let t = 0; t < 3; t++) {
       let mountingV = 0;
       let langkeyr = String.fromCharCode(110,95,57,51,95,116,97,115,107,115,0);
       let libfbJ = 5.0;
       let feedbackL = String.fromCharCode(101,95,50,95,115,97,109,112,108,101,114,97,116,101,115,0);
      for (let b = 0; b < 1; b++) {
          let closel = true;
          let settingsu: Map<any, any> = new Map([[String.fromCharCode(101,110,116,105,116,105,116,121,95,111,95,54,53,0),60], [String.fromCharCode(112,114,101,115,101,110,116,101,100,95,98,95,49,49,0),768]]);
          let indicatork = String.fromCharCode(109,97,110,117,97,108,108,121,95,57,95,50,52,0);
          let greyarrowupA = 0.0;
          let linkf: Array<any> = [55, 144, 385];
         libfbJ /= Math.max(5, langkeyr.length);
         closel = indicatork.length < 9;
         settingsu.set(`${greyarrowupA}`, indicatork.length + 3);
         greyarrowupA *= (parseFloat(`${String.fromCharCode(117,0) == indicatork ? parseInt(`${greyarrowupA}`) : indicatork.length}`));
         linkf.push(linkf.length);
      }
      let runtimeschedulerD = feedbackL.length >= 7290472;
      do {
          let greyarrowupZ = String.fromCharCode(117,110,100,101,114,102,108,111,119,95,116,95,56,56,0);
          let calendara = 1;
          let matchG = 5;
          let cancell = String.fromCharCode(119,95,52,49,95,117,118,108,99,0);
          let mimoD = String.fromCharCode(115,119,105,122,122,108,105,110,103,95,56,95,54,51,0);
         feedbackL = `${parseInt(`${libfbJ}`)}`;
         greyarrowupZ += "2";
         calendara %= Math.max(1, matchG + 2);
         matchG |= calendara;
         cancell = `${cancell.length << (Math.min(Math.abs(3), 4))}`;
         mimoD = `${cancell.length}`;
         if (runtimeschedulerD) {
            break;
         }
      } while ((feedbackL.includes(`${libfbJ}`)) && runtimeschedulerD);
         feedbackL = `${parseInt(`${libfbJ}`)}`;
       let submitz = false;
          let libglogO: Array<any> = [899, 485, 797];
          let executorn = false;
         submitz = 22 < mountingV || !submitz;
         libglogO = [((executorn ? 4 : 2) >> (Math.min(libglogO.length, 2)))];
         executorn = libglogO.length >= 50 && !executorn;
       let questS = String.fromCharCode(97,103,114,101,101,109,101,110,116,95,55,95,48,0);
      if (submitz) {
         langkeyr += `${parseInt(`${libfbJ}`) * 1}`;
      }
       let libfbjniN = false;
       let navigationy = true;
         questS += `${questS.length}`;
      if (questS.length < 2 && langkeyr != String.fromCharCode(101,0)) {
         langkeyr += `${feedbackL.length}`;
      }
      if (mountingV >= 1) {
         mountingV <<= Math.min(Math.abs(1 + langkeyr.length), 2);
      }
         libfbjniN = (75 < ((!navigationy ? langkeyr.length : 75) / (Math.max(2, langkeyr.length))));
      klevinW += "2";
   }
       let matchE: Array<any> = [86, 524];
       let filterW = 2;
      while (matchE.includes(filterW)) {
         filterW += matchE.length;
         break;
      }
      for (let x = 0; x < 3; x++) {
          let gmailE = false;
          let fillB: Array<any> = [748, 97];
          let bottomh: Map<any, any> = new Map([[String.fromCharCode(115,101,108,102,95,97,95,52,0),String.fromCharCode(118,105,97,95,106,95,55,54,0)], [String.fromCharCode(121,95,56,56,95,102,108,105,103,104,116,0),String.fromCharCode(109,95,57,54,95,99,97,112,116,105,111,110,115,0)], [String.fromCharCode(102,104,116,120,95,98,95,52,55,0),String.fromCharCode(101,120,112,101,99,116,101,100,95,57,95,57,48,0)]]);
          let ballk = String.fromCharCode(112,95,53,55,95,109,97,115,107,115,0);
          let moduless = String.fromCharCode(97,99,99,101,112,116,115,95,99,95,57,55,0);
         filterW <<= Math.min(3, fillB.length);
         gmailE = moduless == String.fromCharCode(104,0);
         fillB.push(moduless.length % 3);
         bottomh = new Map([[`${bottomh.size}`, bottomh.size]]);
         ballk = `${(moduless == String.fromCharCode(51,0) ? moduless.length : ballk.length)}`;
      }
         matchE = [matchE.length];
      while (3 <= (filterW >> (Math.min(matchE.length, 2)))) {
         filterW ^= 1;
         break;
      }
         matchE = [1 & matchE.length];
       let animationn = 2.0;
      o_countM = "3";
   if (penaltygoalv) {
      penaltygoalv = o_countM.length > 71;
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
       let disconnected2 = String.fromCharCode(97,115,115,101,116,115,95,120,95,53,0);
    let modityF = String.fromCharCode(104,95,53,53,95,100,101,112,111,115,105,116,0);
    let twitterr = 0.0;
    let abouti = String.fromCharCode(114,95,53,53,95,105,110,118,97,108,105,100,97,116,101,0);
    let j_playerV = 3.0;
    let largeg = String.fromCharCode(99,100,97,116,101,95,55,95,55,55,0);
    let iconscheduleN = 1;
    let ewardedB = 0.0;
    let filledy = 0;
    let analyticsY: Map<any, any> = new Map([[String.fromCharCode(119,95,56,56,95,102,97,117,108,116,0),376], [String.fromCharCode(121,95,51,54,95,97,108,103,115,0),748]]);
    let plusM = 1.0;
      iconscheduleN &= 3;
      modityF = `${(disconnected2 == String.fromCharCode(68,0) ? disconnected2.length : parseInt(`${twitterr}`))}`;
   let club2 = ewardedB >= 5023410.0;
   do {
      ewardedB *= 3 & abouti.length;
      if (club2) {
         break;
      }
   } while ((3.70 <= (5.82 * ewardedB)) && club2);
      modityF = `${(largeg == String.fromCharCode(82,0) ? parseInt(`${ewardedB}`) : largeg.length)}`;
      j_playerV *= parseFloat(`${parseInt(`${twitterr}`) * abouti.length}`);
   let whistleh = String.fromCharCode(115,116,101,54,113,108,117,104,114,0) == largeg;
   do {
       let textinputY: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,99,117,116,105,108,115,95,118,95,52,54,0),false ], [String.fromCharCode(114,101,99,105,100,95,122,95,51,51,0),true ]]);
      while (4 < (textinputY.size ^ 4)) {
         textinputY.set(`${textinputY.size}`, textinputY.size);
         break;
      }
      if (1 <= (4 % (Math.max(5, textinputY.size))) && 4 <= (textinputY.size % (Math.max(4, 7)))) {
          let dropdown8 = 3;
          let pressure8 = 0.0;
          let helperg: Array<any> = [450, 577, 237];
          let controlsx: Map<any, any> = new Map([[String.fromCharCode(98,95,53,57,95,112,108,97,99,101,115,0),886], [String.fromCharCode(99,104,97,105,110,115,95,115,95,51,52,0),520]]);
         textinputY.set(`${dropdown8}`, dropdown8 - 1);
         pressure8 /= Math.max(4, parseFloat(`${2}`));
         helperg.push(helperg.length * parseInt(`${pressure8}`));
         controlsx = new Map([[`${controlsx.size}`, parseInt(`${pressure8}`)]]);
      }
          let h_managers = String.fromCharCode(113,95,57,49,95,115,105,108,101,110,116,0);
          let acopy_g1 = String.fromCharCode(114,101,99,111,114,100,101,100,95,101,95,49,52,0);
         textinputY.set(acopy_g1, acopy_g1.length);
         h_managers = `${h_managers.length}`;
      largeg = `${2 - iconscheduleN}`;
      if (whistleh) {
         break;
      }
   } while ((!largeg.endsWith(`${ewardedB}`)) && whistleh);
       let championf = String.fromCharCode(109,95,49,49,95,113,115,99,97,108,101,0);
         championf = `${championf.length - championf.length}`;
         championf += `${championf.length}`;
      for (let l = 0; l < 3; l++) {
         championf += `${2 & championf.length}`;
      }
      twitterr /= Math.max(abouti.length >> (Math.min(Math.abs(3), 5)), 5);
   let catalogY = 6405826.0 >= j_playerV;
   do {
      j_playerV *= parseFloat(`${parseInt(`${twitterr}`)}`);
      if (catalogY) {
         break;
      }
   } while (catalogY && (j_playerV >= parseFloat(`${largeg.length}`)));
      twitterr /= Math.max(3, modityF.length);
       let memberg = true;
       let componentsB: Array<any> = [612, 425];
         memberg = componentsB.includes(memberg);
         componentsB = [componentsB.length / 2];
      for (let n = 0; n < 2; n++) {
         memberg = (((!memberg ? componentsB.length : 79) ^ componentsB.length) < 79);
      }
          let description_6oo = true;
          let playL = String.fromCharCode(111,98,115,101,114,118,101,114,95,97,95,57,52,0);
         componentsB = [1];
         description_6oo = 67 > playL.length && playL.length > 67;
         memberg = componentsB.length <= 71;
       let analytic3 = 4.0;
       let borderlessO = 1.0;
      disconnected2 = "3";
   let baselineb = abouti.length >= 8409454;
   do {
       let release_4T: Array<any> = [393, 84];
       let settingsY: Map<any, any> = new Map([[String.fromCharCode(115,122,97,98,111,115,95,104,95,55,50,0),932], [String.fromCharCode(102,105,108,108,95,100,95,57,50,0),394]]);
       let eactl: Map<any, any> = new Map([[String.fromCharCode(120,108,97,98,101,108,104,101,105,103,104,116,95,105,95,57,54,0),String.fromCharCode(112,114,101,100,105,99,116,111,114,115,98,95,57,95,56,51,0)], [String.fromCharCode(105,110,116,101,102,97,99,101,95,103,95,57,52,0),String.fromCharCode(122,95,57,52,0)]]);
          let sliderc = 3;
          let with_x2 = 2;
         release_4T.push(2);
         sliderc /= Math.max(5, with_x2);
         with_x2 %= Math.max(5, 3);
       let bodann = 5;
       let frame_maV = 2;
      abouti += `${parseInt(`${j_playerV}`) >> (Math.min(2, Math.abs(3)))}`;
      if (baselineb) {
         break;
      }
   } while (baselineb && (modityF != abouti));
   if (5 > (4 ^ iconscheduleN) && 4 > (modityF.length ^ iconscheduleN)) {
      iconscheduleN *= parseInt(`${ewardedB}`);
   }
      abouti += `${(abouti == String.fromCharCode(88,0) ? abouti.length : disconnected2.length)}`;
      modityF += `${parseInt(`${ewardedB}`)}`;
   if (2 >= abouti.length) {
      disconnected2 = `${modityF.length}`;
   }
   let footballfiledlayoutc = 7740941 <= disconnected2.length;
   do {
       let large8 = 3.0;
       let iconnointernetd = 3.0;
       let libtane = String.fromCharCode(100,97,116,97,95,114,95,56,53,0);
       let mapbufferW = String.fromCharCode(115,116,114,116,111,108,108,95,106,95,51,57,0);
       let arrowrightz = String.fromCharCode(116,95,50,49,95,100,101,102,105,110,105,116,105,111,110,0);
      for (let j = 0; j < 1; j++) {
          let notificationfillemptyU: Array<any> = [217, 296];
          let middlee = false;
          let bannerF = false;
          let overf = 5;
         arrowrightz += `${parseInt(`${large8}`)}`;
         notificationfillemptyU.push(((bannerF ? 1 : 3) / (Math.max((middlee ? 1 : 5), 7))));
         middlee = (middlee ? bannerF : middlee);
         overf -= notificationfillemptyU.length;
      }
      if (large8 > 3.42) {
         libtane += `${parseInt(`${iconnointernetd}`) >> (Math.min(Math.abs(1), 4))}`;
      }
       let dark7 = true;
       let libhermes2 = false;
          let promotione = 5.0;
          let desck = String.fromCharCode(115,112,101,99,105,102,105,99,95,98,95,57,51,0);
          let x_titleT = 1.0;
         mapbufferW += `${1 % (Math.max(1, desck.length))}`;
         promotione /= Math.max(1, parseFloat(`${parseInt(`${promotione}`) ^ parseInt(`${x_titleT}`)}`));
         desck = `${parseInt(`${promotione}`) << (Math.min(Math.abs(parseInt(`${x_titleT}`)), 1))}`;
       let yellowredcardg = String.fromCharCode(100,121,110,97,109,105,99,115,95,113,95,57,56,0);
       let album2 = String.fromCharCode(112,101,101,114,105,100,95,55,95,55,54,0);
      let attributedstringX = libhermes2 ? !libhermes2 : libhermes2;
      do {
         libhermes2 = mapbufferW.length > parseInt(`${large8}`);
         if (attributedstringX) {
            break;
         }
      } while ((2 >= yellowredcardg.length && !libhermes2) && attributedstringX);
      let sellC = String.fromCharCode(104,99,119,57,0) == yellowredcardg;
      do {
         yellowredcardg += `${(String.fromCharCode(70,0) == arrowrightz ? (libhermes2 ? 2 : 1) : arrowrightz.length)}`;
         if (sellC) {
            break;
         }
      } while ((!yellowredcardg.includes(`${album2.length}`)) && sellC);
      if (album2.includes(`${mapbufferW.length}`)) {
          let specu: Array<any> = [293, 492, 356];
          let macau7 = 2.0;
          let arrowright6 = String.fromCharCode(116,95,52,53,95,98,97,115,105,99,97,108,108,121,0);
          let libmapbufferjni_: Map<any, any> = new Map([[String.fromCharCode(122,95,53,52,95,106,100,99,116,0),true ], [String.fromCharCode(97,95,57,50,95,117,110,99,111,110,115,117,109,101,100,0),false ]]);
         album2 += `${((libhermes2 ? 2 : 5) * mapbufferW.length)}`;
         specu.push(1 - specu.length);
         macau7 += arrowright6.length - parseInt(`${macau7}`);
         arrowright6 += "3";
         libmapbufferjni_.set(`${macau7}`, libmapbufferjni_.size);
      }
      disconnected2 = "2";
      if (footballfiledlayoutc) {
         break;
      }
   } while (footballfiledlayoutc && (5 >= disconnected2.length));
   while ((twitterr / (Math.max(2, 6))) <= 1.62) {
      j_playerV += parseFloat(`${3}`);
      break;
   }
   while ((abouti.length & analyticsY.size) <= 4 || 4 <= (4 & abouti.length)) {
      abouti += "2";
      break;
   }
       let thumbnailt = 3.0;
      if (thumbnailt == 5.72) {
         thumbnailt /= Math.max(parseFloat(`${1}`), 4);
      }
       let disconnectedL = true;
       let defaultfootballbg2 = false;
         disconnectedL = defaultfootballbg2 && !disconnectedL;
      abouti = "1";

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
       let routerQ = true;
    let sharew = String.fromCharCode(115,95,51,54,95,103,114,105,100,0);
    let mbjscommonf = 3.0;
    let overlayu: Map<any, any> = new Map([[String.fromCharCode(116,101,120,116,117,114,101,115,95,110,95,52,57,0),34], [String.fromCharCode(122,95,55,57,95,118,109,97,102,0),185], [String.fromCharCode(120,95,52,52,95,102,100,101,99,0),431]]);
    let gpay9: Map<any, any> = new Map([[String.fromCharCode(114,101,115,121,110,99,95,100,95,48,0),519], [String.fromCharCode(114,95,52,51,95,99,114,101,97,116,105,111,110,0),154], [String.fromCharCode(112,117,115,104,101,100,95,115,95,51,55,0),446]]);
    let yellowvideolivev = 3.0;
    let heartw = 0.0;
    let forward1: Array<any> = [117, 974];
    let eact1 = String.fromCharCode(109,97,110,97,103,101,97,98,108,101,95,108,95,56,51,0);
    let activeI = String.fromCharCode(109,97,116,101,114,105,97,108,95,49,95,51,54,0);
    let footbally = String.fromCharCode(121,95,49,54,95,119,111,114,115,116,0);
    let runtimek = 5.0;
    let kuaishouq = false;
    let moduleX: Array<any> = [21, 652, 860];
    let bodanj = String.fromCharCode(115,111,110,105,99,95,99,95,51,0);
    let executorC: Array<any> = [470, 8];
   for (let l = 0; l < 2; l++) {
       let sidec = 0.0;
       let controlN = String.fromCharCode(122,95,55,53,95,112,111,112,117,108,97,114,0);
       let zoomX = String.fromCharCode(103,95,53,57,95,101,118,97,108,117,97,116,101,100,0);
       let pushm = 0.0;
       let iconrefreshh = 0.0;
         controlN += "2";
      for (let k = 0; k < 1; k++) {
         pushm /= Math.max(2 * parseInt(`${iconrefreshh}`), 3);
      }
      for (let k = 0; k < 1; k++) {
         zoomX += "2";
      }
         iconrefreshh *= parseFloat(`${parseInt(`${iconrefreshh}`)}`);
          let rncore0: Map<any, any> = new Map([[String.fromCharCode(107,101,121,115,101,116,117,112,95,50,95,57,56,0),true ], [String.fromCharCode(97,99,99,117,114,97,116,101,95,55,95,51,49,0),false ]]);
          let successZ = 5.0;
         controlN = `${(zoomX == String.fromCharCode(110,0) ? rncore0.size : zoomX.length)}`;
         rncore0 = new Map([[`${successZ}`, parseInt(`${successZ}`) >> (Math.min(3, Math.abs(3)))]]);
      let spinnerb = sidec <= 5550430.0;
      do {
          let h_positiona: Map<any, any> = new Map([[String.fromCharCode(115,95,53,54,95,116,101,120,116,117,114,101,100,115,112,101,110,99,0),766], [String.fromCharCode(116,111,116,97,108,115,95,113,95,57,55,0),223]]);
          let humidityU = 4;
          let time_bQ = 2;
          let utilsl = 3.0;
          let gifgoaly = String.fromCharCode(97,110,103,101,95,54,95,57,53,0);
         sidec += controlN.length;
         h_positiona = new Map([[`${utilsl}`, gifgoaly.length - parseInt(`${utilsl}`)]]);
         humidityU |= gifgoaly.length >> (Math.min(Math.abs(1), 5));
         time_bQ |= humidityU;
         if (spinnerb) {
            break;
         }
      } while (spinnerb && ((sidec - 2.35) == 4.71 || 4 == (parseInt(`${sidec}`) - 5)));
         iconrefreshh /= Math.max(1, parseFloat(`${zoomX.length ^ controlN.length}`));
       let iconnewssharet = false;
          let iconwatchnowY = String.fromCharCode(104,95,52,54,95,112,116,115,101,115,0);
          let textlayoutmanagerV = String.fromCharCode(99,111,108,105,110,101,97,114,95,105,95,57,57,0);
         iconnewssharet = iconrefreshh == 51.40;
         iconwatchnowY += `${3 >> (Math.min(2, textlayoutmanagerV.length))}`;
         textlayoutmanagerV = `${textlayoutmanagerV.length | iconwatchnowY.length}`;
      while (4.20 == (pushm + 1.4)) {
         pushm -= ((iconnewssharet ? 1 : 3) >> (Math.min(Math.abs(parseInt(`${sidec}`)), 5)));
         break;
      }
         zoomX += `${(parseInt(`${iconrefreshh}`) + (iconnewssharet ? 1 : 4))}`;
         sidec /= Math.max(1 & parseInt(`${iconrefreshh}`), 4);
         iconnewssharet = 46.4 == iconrefreshh && iconnewssharet;
      if (controlN.includes(`${sidec}`)) {
         controlN += `${3 - parseInt(`${sidec}`)}`;
      }
         iconrefreshh += (parseFloat(`${parseInt(`${iconrefreshh}`) ^ (iconnewssharet ? 2 : 2)}`));
      mbjscommonf /= Math.max(3, 2);
   }

    if (isSubmitting) return;

      footbally += `${parseInt(`${yellowvideolivev}`) & gpay9.size}`;

    if (isReadTermNCondition == false) {

   for (let z = 0; z < 3; z++) {
       let stringN: Array<any> = [187, 694];
       let predictionbannershared5 = 4;
       let package_2D = String.fromCharCode(112,114,111,109,112,101,103,95,106,95,56,50,0);
          let analyticsY = String.fromCharCode(105,95,53,48,95,114,101,97,100,120,98,108,111,99,107,0);
          let runtimeo: Map<any, any> = new Map([[String.fromCharCode(100,101,99,114,101,102,95,112,95,55,49,0),655], [String.fromCharCode(115,95,56,57,95,101,112,111,99,104,0),755], [String.fromCharCode(116,114,97,100,101,95,110,95,51,55,0),975]]);
         package_2D += `${predictionbannershared5 & 3}`;
         analyticsY += `${analyticsY.length}`;
         runtimeo.set(`${analyticsY}`, 2 & runtimeo.size);
      while (3 == (4 ^ stringN.length) && (stringN.length ^ 4) == 5) {
         stringN.push(stringN.length & package_2D.length);
         break;
      }
       let graphicsq = String.fromCharCode(99,97,108,108,98,97,99,107,115,95,50,95,49,56,0);
      let zoomx = 5065862 <= package_2D.length;
      do {
         package_2D += `${2 + package_2D.length}`;
         if (zoomx) {
            break;
         }
      } while (zoomx && (graphicsq.length > 3));
      while (5 > (predictionbannershared5 & 3)) {
         package_2D = `${predictionbannershared5}`;
         break;
      }
      if ((graphicsq.length >> (Math.min(5, stringN.length))) >= 1 || (1 >> (Math.min(5, graphicsq.length))) >= 2) {
         stringN.push(predictionbannershared5);
      }
      for (let c = 0; c < 3; c++) {
         graphicsq += `${package_2D.length}`;
      }
      let textN = graphicsq == String.fromCharCode(107,55,113,110,101,0);
      do {
          let crossM = 1.0;
          let singaporef = true;
         graphicsq += `${((singaporef ? 3 : 4))}`;
         crossM *= parseFloat(`${parseInt(`${crossM}`) - 2}`);
         singaporef = crossM > 92.11;
         if (textN) {
            break;
         }
      } while ((!graphicsq.endsWith(`${stringN.length}`)) && textN);
         package_2D = `${predictionbannershared5}`;
      sharew += `${parseInt(`${runtimek}`)}`;
   }
      showToast('请勾选用户协议和隐私协议');

      yellowvideolivev /= Math.max(5, forward1.length / (Math.max(2, sharew.length)));
      return;

   let debug4 = routerQ ? !routerQ : routerQ;
   do {
       let d_managerr: Map<any, any> = new Map([[String.fromCharCode(98,105,116,109,97,112,95,122,95,55,53,0),410], [String.fromCharCode(106,95,51,51,95,114,103,116,99,0),330], [String.fromCharCode(109,95,52,52,95,109,111,110,111,119,104,105,116,101,0),6]]);
      if (d_managerr.get(`${d_managerr.size}`) != null) {
         d_managerr.set(`${d_managerr.size}`, d_managerr.size * d_managerr.size);
      }
      while (!Array.from(d_managerr.keys()).includes(`${d_managerr.size}`)) {
         d_managerr = new Map([[`${d_managerr.size}`, d_managerr.size]]);
         break;
      }
      while (!Array.from(d_managerr.keys()).includes(`${d_managerr.size}`)) {
         d_managerr = new Map([[`${d_managerr.size}`, d_managerr.size]]);
         break;
      }
      routerQ = !footbally.startsWith(`${yellowvideolivev}`);
      if (debug4) {
         break;
      }
   } while (debug4 && (routerQ));
    }

    let userInfo;

   let smallN = overlayu.size <= 9293057;
   do {
       let rightl = 3.0;
       let historyp = false;
       let abidetectt = String.fromCharCode(100,101,108,101,116,101,95,111,95,51,51,0);
       let playY: Map<any, any> = new Map([[String.fromCharCode(111,95,50,50,95,117,110,105,116,0),898], [String.fromCharCode(114,101,119,97,114,100,115,95,122,95,54,50,0),485]]);
       let clubK = true;
      let maili = rightl >= 7262200.0;
      do {
          let verticale = String.fromCharCode(105,95,53,54,95,106,111,105,110,0);
          let reviewy = 1.0;
          let bootsplashg = 1.0;
         rightl /= Math.max(4, parseFloat(`${parseInt(`${rightl}`) & parseInt(`${bootsplashg}`)}`));
         verticale += `${parseInt(`${reviewy}`) << (Math.min(verticale.length, 3))}`;
         reviewy *= 1 - verticale.length;
         bootsplashg /= Math.max(parseFloat(`${verticale.length}`), 5);
         if (maili) {
            break;
         }
      } while (maili && (4.31 < (parseFloat(`${abidetectt.length}`) + rightl)));
      let switch_7mY = 7191455 <= abidetectt.length;
      do {
         abidetectt = `${playY.size - 1}`;
         if (switch_7mY) {
            break;
         }
      } while ((5 >= (abidetectt.length << (Math.min(Math.abs(2), 2))) && 2 >= (abidetectt.length << (Math.min(3, Math.abs(playY.size))))) && switch_7mY);
         playY.set(abidetectt, (abidetectt == String.fromCharCode(112,0) ? abidetectt.length : (historyp ? 5 : 4)));
      if (4 < (playY.size >> (Math.min(Math.abs(5), 5)))) {
          let libjsi4 = String.fromCharCode(115,116,114,101,97,109,105,110,103,95,107,95,51,53,0);
         historyp = null != playY.get(`${historyp}`);
         libjsi4 = "3";
      }
      let fullO = 4997191.0 >= rightl;
      do {
          let catalogh = String.fromCharCode(101,95,49,52,95,100,111,99,0);
          let userD = String.fromCharCode(102,95,54,53,95,116,104,114,101,97,100,109,101,115,115,97,103,101,0);
          let libavfilter_: Array<any> = [229, 884, 22];
         rightl -= parseFloat(`${playY.size}`);
         catalogh = `${userD.length}`;
         userD += `${libavfilter_.length}`;
         libavfilter_.push((userD == String.fromCharCode(116,0) ? libavfilter_.length : userD.length));
         if (fullO) {
            break;
         }
      } while (fullO && ((parseFloat(`${playY.size}`) - rightl) > 1.74 && (playY.size | 3) > 4));
      if (historyp) {
         historyp = 53.21 == rightl;
      }
      let abidetecta = historyp ? !historyp : historyp;
      do {
          let preview5 = String.fromCharCode(100,111,110,110,97,95,97,95,51,0);
          let checkboxH = String.fromCharCode(121,95,57,95,115,113,108,99,105,112,104,101,114,0);
          let lessm = false;
          let b_imagef = String.fromCharCode(102,97,99,116,111,114,115,95,112,95,52,50,0);
          let libjsiE: Array<any> = [323, 529];
         historyp = ((abidetectt.length + (clubK ? 12 : abidetectt.length)) < 12);
         preview5 += `${checkboxH.length}`;
         checkboxH = `${2 ^ checkboxH.length}`;
         lessm = 63 == preview5.length;
         b_imagef = "2";
         libjsiE.push(libjsiE.length);
         if (abidetecta) {
            break;
         }
      } while (abidetecta && (!abidetectt.startsWith(`${historyp}`)));
      while (!clubK) {
         clubK = (playY.size | abidetectt.length) == 48;
         break;
      }
      while (!clubK) {
         clubK = (((clubK ? 52 : playY.size) << (Math.min(Math.abs(playY.size), 3))) > 52);
         break;
      }
      for (let s = 0; s < 3; s++) {
          let changen = String.fromCharCode(116,101,115,116,99,111,110,102,105,103,95,119,95,54,48,0);
          let floaterb = String.fromCharCode(119,95,56,53,95,109,101,100,105,97,99,111,100,101,99,100,101,99,0);
          let unselectedE: Array<any> = [164, 889];
         rightl *= parseFloat(`${parseInt(`${rightl}`) << (Math.min(5, Math.abs(1)))}`);
         changen += "1";
         floaterb += `${(String.fromCharCode(107,0) == changen ? floaterb.length : changen.length)}`;
         unselectedE = [3];
      }
          let privacyP = 0.0;
         rightl -= (parseFloat(`${(historyp ? 5 : 5) * (clubK ? 2 : 2)}`));
         privacyP *= parseFloat(`${2}`);
         playY = new Map([[`${rightl}`, ((historyp ? 4 : 3) * parseInt(`${rightl}`))]]);
         historyp = clubK;
       let stringsl = 2.0;
       let abidetect2 = 0.0;
      if (abidetectt.length == 4 && clubK) {
          let hoverh: Map<any, any> = new Map([[String.fromCharCode(112,95,52,57,95,99,111,114,114,101,108,97,116,105,111,110,0),String.fromCharCode(111,95,50,57,0)], [String.fromCharCode(109,95,56,48,95,118,100,115,111,0),String.fromCharCode(97,115,115,101,114,116,115,95,103,95,55,50,0)], [String.fromCharCode(105,95,52,50,95,116,117,114,110,0),String.fromCharCode(100,105,115,112,101,110,115,101,114,95,99,95,50,48,0)]]);
         clubK = rightl < 56.73;
         hoverh.set(`${hoverh.size}`, hoverh.size / 1);
      }
      overlayu = new Map([[footbally, ((historyp ? 2 : 5))]]);
      if (smallN) {
         break;
      }
   } while ((2 >= (1 ^ gpay9.size) && 3 >= (1 ^ gpay9.size)) && smallN);

    try {

   for (let z = 0; z < 2; z++) {
      yellowvideolivev /= Math.max(3, (eact1 == String.fromCharCode(113,0) ? footbally.length : eact1.length));
   }
      await GoogleSignin.hasPlayServices();

   for (let u = 0; u < 1; u++) {
      yellowvideolivev *= footbally.length % (Math.max(1, parseInt(`${heartw}`)));
   }

      if (await GoogleSignin.isSignedIn()) {

   if (3 > (overlayu.size ^ activeI.length) && 3 > (activeI.length ^ 3)) {
       let sigmobI = 5;
       let networkD = String.fromCharCode(116,95,49,51,95,114,117,108,101,115,0);
      while (networkD.length <= sigmobI) {
          let pingo = String.fromCharCode(112,111,115,116,112,114,111,99,95,109,95,55,57,0);
         sigmobI += 1 >> (Math.min(3, Math.abs(sigmobI)));
         pingo = `${pingo.length << (Math.min(Math.abs(1), 5))}`;
         break;
      }
          let catalog5 = String.fromCharCode(104,95,51,51,95,105,110,102,108,97,116,101,0);
          let iconsettinge = String.fromCharCode(118,105,115,117,97,108,95,113,95,53,56,0);
         networkD = `${iconsettinge.length}`;
         catalog5 += `${(String.fromCharCode(52,0) == catalog5 ? catalog5.length : catalog5.length)}`;
         iconsettinge = `${catalog5.length - 2}`;
      for (let r = 0; r < 3; r++) {
         networkD += `${sigmobI << (Math.min(Math.abs(2), 5))}`;
      }
       let singaporev = String.fromCharCode(118,95,54,52,95,102,97,115,116,115,115,105,109,0);
          let huaweid = 2.0;
          let gesturesx = String.fromCharCode(116,101,108,95,102,95,54,52,0);
          let teamdetailsbgu: Map<any, any> = new Map([[String.fromCharCode(97,112,112,108,121,105,110,103,95,52,95,55,54,0),734], [String.fromCharCode(122,95,55,54,95,101,110,99,111,100,105,110,103,98,0),411], [String.fromCharCode(97,97,99,116,97,98,95,114,95,51,51,0),653]]);
         sigmobI <<= Math.min(5, Math.abs(parseInt(`${huaweid}`) >> (Math.min(singaporev.length, 3))));
         huaweid += gesturesx.length | 1;
         gesturesx += `${3 >> (Math.min(4, gesturesx.length))}`;
         teamdetailsbgu.set(`${gesturesx}`, 1);
         singaporev += `${singaporev.length}`;
      activeI = `${overlayu.size}`;
   }
        userInfo = await GoogleSignin.getCurrentUser();
      } else {

      heartw += forward1.length & 3;
        userInfo = await GoogleSignin.signIn();
      }

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        
      } else if (error.code === statusCodes.IN_PROGRESS) {

   while (5.56 >= heartw) {
      gpay9.set(eact1, 2);
      break;
   }
        

       let yellowanimationliveV = String.fromCharCode(114,95,54,48,95,115,101,103,100,97,116,97,0);
       let sliderl: Array<any> = [222, 264];
       let playercommonU = String.fromCharCode(108,117,116,115,95,113,95,51,0);
         playercommonU = "1";
          let friendse = 0.0;
          let filledY: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,99,108,101,97,110,95,115,95,57,53,0),621], [String.fromCharCode(114,101,112,108,121,95,55,95,51,53,0),3]]);
          let member0 = String.fromCharCode(113,95,49,55,95,112,101,114,102,111,114,109,97,110,99,101,0);
         sliderl.push(parseInt(`${friendse}`));
         friendse *= 2;
         filledY = new Map([[`${filledY.size}`, (String.fromCharCode(89,0) == member0 ? filledY.size : member0.length)]]);
          let libimagepipelineX = true;
          let gradlef = 5.0;
          let bannerw = 2;
         sliderl.push(1);
         libimagepipelineX = gradlef < 23.47 && libimagepipelineX;
         gradlef *= parseInt(`${gradlef}`);
         bannerw *= parseInt(`${gradlef}`) | bannerw;
          let forwardx = 3.0;
          let crownf = 3;
         yellowanimationliveV += `${playercommonU.length}`;
         forwardx /= Math.max(4, crownf);
         crownf %= Math.max(5, parseInt(`${forwardx}`));
         sliderl = [3 << (Math.min(5, sliderl.length))];
      let mbsplashQ = 9034077 <= sliderl.length;
      do {
          let file5 = 3.0;
          let rankm = 5.0;
          let analyticsu = 0.0;
         sliderl.push(3);
         file5 *= parseFloat(`${parseInt(`${file5}`) & 1}`);
         rankm /= Math.max(parseFloat(`${parseInt(`${analyticsu}`)}`), 4);
         analyticsu += 2 >> (Math.min(Math.abs(parseInt(`${file5}`)), 4));
         if (mbsplashQ) {
            break;
         }
      } while (((sliderl.length | 5) >= 3) && mbsplashQ);
       let matchesW = String.fromCharCode(117,95,53,48,95,99,102,115,116,114,101,97,109,0);
       let fillO: Array<any> = [168, 96];
      if (yellowanimationliveV.includes(`${sliderl.length}`)) {
         sliderl.push(fillO.length + 2);
      }
      mbjscommonf -= playercommonU.length + forward1.length;
        showToast('请勿频繁操作');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

   if (gpay9.size < 5) {
      forward1.push((eact1 == String.fromCharCode(99,0) ? (routerQ ? 1 : 4) : eact1.length));
   }
        

   let statisticsN = mbjscommonf <= 7270512.0;
   do {
      mbjscommonf += footbally.length;
      if (statisticsN) {
         break;
      }
   } while (statisticsN && (1.79 > (1.29 * mbjscommonf) && (activeI.length * mbjscommonf) > 1.29));
        showToast('谷歌服务获取失败');
      } else {

   if (2.97 == (heartw * 2.91) && heartw == 2.91) {
      routerQ = eact1.length >= 47 || !routerQ;
   }
        

      activeI += `${eact1.length}`;
        showToast('登入失败，请稍后再试');
      }
      console.log(error.toString());

      gpay9 = new Map([[`${yellowvideolivev}`, 1 % (Math.max(7, footbally.length))]]);
      return;
    }

    if (userInfo === null) {

   if ((4 / (Math.max(9, forward1.length))) > 4 || 4 > (activeI.length / (Math.max(4, 10)))) {
      activeI += `${parseInt(`${heartw}`) | 3}`;
   }
      showToast('登入失败，请稍后再试');

       let bootsplashh = String.fromCharCode(114,116,109,112,99,114,121,112,116,95,118,95,56,53,0);
          let fileg: Array<any> = [387, 971];
          let inouttargetred7 = 2.0;
          let layout_ = String.fromCharCode(98,107,116,114,95,109,95,49,0);
         bootsplashh = "1";
         fileg = [layout_.length >> (Math.min(1, Math.abs(parseInt(`${inouttargetred7}`))))];
         inouttargetred7 /= Math.max(4, parseFloat(`${fileg.length << (Math.min(Math.abs(2), 3))}`));
         layout_ += `${1 << (Math.min(1, layout_.length))}`;
      if (bootsplashh == String.fromCharCode(74,0)) {
         bootsplashh += `${bootsplashh.length}`;
      }
       let utilsL = String.fromCharCode(116,97,103,95,111,95,55,56,0);
       let holderF = String.fromCharCode(110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,95,107,95,48,0);
      sharew = `${(2 & (routerQ ? 1 : 4))}`;
      return;
    }

    try {

   while ((5 | sharew.length) == 2 || 5 == (sharew.length + parseInt(`${yellowvideolivev}`))) {
      yellowvideolivev -= (activeI == String.fromCharCode(104,0) ? activeI.length : gpay9.size);
      break;
   }
      setSubmitting(true);

   let statsU = 5474434.0 >= yellowvideolivev;
   do {
      yellowvideolivev /= Math.max(gpay9.size ^ 3, 2);
      if (statsU) {
         break;
      }
   } while (statsU && (runtimek >= 5.2));
      userInfo = await wwIconscheduleColors.signinupUser({
        loginType: 'EMAIL',
        email: userInfo.user.email,
        referralCode: referralCode,
        isGoogleLogin: true,
        userId: userState.user?.userId ?? '',
      });

    } catch (err: any) {
      GoogleSignin.signOut();

      activeI += `${eact1.length}`;
      showToast(err.toString());

      activeI = `${parseInt(`${yellowvideolivev}`) * parseInt(`${mbjscommonf}`)}`;
      return;
    } finally {

      eact1 = `${3 >> (Math.min(3, eact1.length))}`;
      setSubmitting(false);

      runtimek += forward1.length;
    }

    const resultData = userInfo.data;

      eact1 += `${parseInt(`${runtimek}`) - 2}`;

    const user = wwBodan.fromJson(resultData);

      gpay9.set(`${runtimek}`, parseInt(`${runtimek}`) >> (Math.min(2, Math.abs(2))));

    await dispatch(addUserAuthState(user));

      forward1 = [forward1.length];

    if (userInfo.message.includes("注册成功")) {

      kuaishouq = (forward1.length + sharew.length) <= 81;
      navigation.navigate('SetUsername');

    } else if (userInfo.message.includes("登录成功")) {

   let libavcodecO = 7467327.0 <= heartw;
   do {
      heartw *= 3 - footbally.length;
      if (libavcodecO) {
         break;
      }
   } while ((5 < overlayu.size) && libavcodecO);

      if (user.isVip()) {

   let imagenetworkerru = sharew.length >= 7364264;
   do {
      sharew = "1";
      if (imagenetworkerru) {
         break;
      }
   } while (imagenetworkerru && (3 <= (gpay9.size / (Math.max(2, sharew.length)))));
        await AsyncStorage.setItem("showAds", "false");
      } else {

       let push1 = String.fromCharCode(121,95,53,54,95,118,97,114,108,101,110,103,116,104,0);
          let executorW: Array<any> = [String.fromCharCode(118,95,49,52,95,98,101,108,111,110,103,115,0), String.fromCharCode(97,95,57,95,120,114,101,115,0), String.fromCharCode(101,95,56,55,95,109,117,116,117,97,108,0)];
         push1 += `${executorW.length & push1.length}`;
         push1 += `${push1.length - 3}`;
      if (!push1.includes(push1)) {
         push1 = `${push1.length}`;
      }
      mbjscommonf += eact1.length % 2;
        await AsyncStorage.setItem("showAds", "true");
      }

      await dispatch(changeScreenAction('登录成功'));

   let predictionbannersharedb = routerQ ? !routerQ : routerQ;
   do {
       let dropdownP = String.fromCharCode(115,116,97,114,116,95,101,95,57,55,0);
         dropdownP += "3";
      for (let q = 0; q < 2; q++) {
          let cancelu: Array<any> = [String.fromCharCode(103,95,54,54,95,115,116,97,114,116,0), String.fromCharCode(111,109,112,114,101,115,115,111,114,95,49,95,49,48,48,0)];
          let modelL = String.fromCharCode(118,95,57,56,95,119,97,105,116,0);
          let rncoreN = String.fromCharCode(119,95,49,54,95,100,101,99,108,0);
         dropdownP += `${rncoreN.length}`;
         cancelu.push(modelL.length);
         modelL += `${cancelu.length}`;
         rncoreN += `${modelL.length}`;
      }
      let defaultfootballbgz = dropdownP == String.fromCharCode(95,116,106,121,116,51,48,116,0);
      do {
         dropdownP += `${dropdownP.length}`;
         if (defaultfootballbgz) {
            break;
         }
      } while ((dropdownP == String.fromCharCode(55,0)) && defaultfootballbgz);
      routerQ = routerQ && sharew.length > 13;
      if (predictionbannersharedb) {
         break;
      }
   } while ((!routerQ) && predictionbannersharedb);

      

      runtimek -= parseInt(`${mbjscommonf}`) >> (Math.min(2, Math.abs(3)));
      ww_runtime.userCenterLoginSuccessTimesAnalytics();

   if (2.86 < (4.10 + mbjscommonf)) {
       let foregroundB: Map<any, any> = new Map([[String.fromCharCode(98,95,55,48,95,115,116,97,103,105,110,103,0),470], [String.fromCharCode(109,95,52,51,95,116,117,114,110,0),483], [String.fromCharCode(99,95,54,55,95,119,105,114,101,108,101,115,115,0),827]]);
       let with_3y = 0.0;
       let thailandA = 1.0;
       let faviconw = 5.0;
      let iconnointernetj = with_3y >= 7602211.0;
      do {
         with_3y *= parseInt(`${thailandA}`) | 3;
         if (iconnointernetj) {
            break;
         }
      } while (((with_3y - foregroundB.size) < 1.6 || 4 < (foregroundB.size * 3)) && iconnointernetj);
      if (!Array.from(foregroundB.values()).includes(thailandA)) {
         foregroundB = new Map([[`${thailandA}`, parseInt(`${with_3y}`) << (Math.min(2, Math.abs(1)))]]);
      }
         thailandA *= 1;
         faviconw += parseFloat(`${foregroundB.size}`);
         faviconw += parseFloat(`${parseInt(`${thailandA}`) ^ parseInt(`${with_3y}`)}`);
          let dependencies0 = false;
          let country_ = 4;
          let corei = 0.0;
         with_3y /= Math.max(country_ / (Math.max(foregroundB.size, 7)), 5);
         dependencies0 = !dependencies0;
         country_ |= ((dependencies0 ? 3 : 4) % (Math.max(7, parseInt(`${corei}`))));
         corei += (parseInt(`${corei}`) * (dependencies0 ? 3 : 3));
         with_3y *= parseInt(`${faviconw}`);
         with_3y += parseInt(`${thailandA}`);
      let goaln = with_3y <= 7989042.0;
      do {
         with_3y -= parseInt(`${with_3y}`) | parseInt(`${thailandA}`);
         if (goaln) {
            break;
         }
      } while (goaln && ((with_3y * 4.45) > 2.9));
      let codeu = thailandA <= 7602308.0;
      do {
         thailandA -= parseInt(`${faviconw}`) + 1;
         if (codeu) {
            break;
         }
      } while ((1 > (parseInt(`${thailandA}`) + foregroundB.size)) && codeu);
         with_3y += parseInt(`${thailandA}`) + 2;
      if ((thailandA - with_3y) >= 1.76 && (with_3y - thailandA) >= 1.76) {
         with_3y /= Math.max(3, parseInt(`${faviconw}`) * 1);
      }
      sharew += `${3 ^ parseInt(`${thailandA}`)}`;
   }
      wwSelect.userCenterLoginSuccessTimesAnalytics();

       let bootE: Array<any> = [321, 319, 669];
       let bufferv: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,102,111,114,109,95,112,95,53,56,0),String.fromCharCode(97,118,102,102,116,95,98,95,53,55,0)], [String.fromCharCode(114,95,57,53,95,97,99,116,111,114,0),String.fromCharCode(117,95,57,53,95,117,109,98,114,101,108,108,97,0)]]);
       let previewb: Map<any, any> = new Map([[String.fromCharCode(114,95,49,52,95,100,105,114,97,99,0),186], [String.fromCharCode(114,116,109,112,101,95,101,95,52,50,0),318]]);
         bufferv = new Map([[`${bufferv.size}`, bufferv.size + bootE.length]]);
         bootE = [1 & previewb.size];
          let control9 = true;
         bootE = [bootE.length >> (Math.min(4, Math.abs(bufferv.size)))];
         control9 = !control9 || control9;
         bufferv.set(`${bootE.length}`, 1);
      if (2 == (bootE.length ^ bufferv.size) && 5 == (2 ^ bootE.length)) {
         bufferv.set(`${bootE.length}`, bufferv.size);
      }
      if ((bootE.length << (Math.min(Math.abs(5), 2))) <= 5 || (5 << (Math.min(3, Math.abs(previewb.size)))) <= 4) {
         bootE = [bootE.length];
      }
          let completeu = false;
         bufferv = new Map([[`${bufferv.size}`, previewb.size % (Math.max(bufferv.size, 10))]]);
         completeu = !completeu;
      while (1 <= (4 ^ bufferv.size)) {
          let sporte = String.fromCharCode(106,100,99,116,95,56,95,54,55,0);
          let pausem = String.fromCharCode(100,95,53,55,95,115,101,114,105,97,108,105,122,97,116,105,111,110,0);
          let splashP = 4.0;
         bufferv = new Map([[`${bufferv.size}`, bootE.length << (Math.min(5, Math.abs(bufferv.size)))]]);
         sporte += "2";
         pausem = "1";
         splashP += parseFloat(`${sporte.length << (Math.min(Math.abs(1), 4))}`);
         break;
      }
      while (5 == (previewb.size >> (Math.min(Math.abs(4), 1))) && 2 == (bootE.length >> (Math.min(Math.abs(4), 3)))) {
         bootE.push(bufferv.size * bootE.length);
         break;
      }
      yellowvideolivev *= 2 % (Math.max(1, gpay9.size));

      if (user.isVip()) {

   while (kuaishouq) {
      gpay9.set(footbally, 1);
      break;
   }
        ww_runtime.userCenterVipLoginSuccessTimesAnalytics();
      }
      

   while ((yellowvideolivev / (Math.max(sharew.length, 4))) < 3.15 && 3 < (sharew.length & 1)) {
      sharew = `${parseInt(`${heartw}`) << (Math.min(Math.abs(overlayu.size), 2))}`;
      break;
   }

      if (onGooleLoginSuccess) onGooleLoginSuccess();
    }
  }

  const onPressTermNCondition = () => {
       let hiad1: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,95,53,95,51,50,0),false ], [String.fromCharCode(107,95,57,54,95,116,111,110,97,108,0),false ], [String.fromCharCode(102,105,108,101,114,101,97,100,115,116,114,101,97,109,95,100,95,53,55,0),true ]]);
    let mappingR = String.fromCharCode(111,111,117,114,97,95,105,95,52,55,0);
    let libjsijniprofilerr = 3.0;
    let iconwechatz = 3;
    let tempW = String.fromCharCode(108,111,116,116,105,101,95,115,95,49,55,0);
    let scheduler6: Array<any> = [901, 542];
    let uimanager7: Array<any> = [15, 927, 207];
    let more4 = 5;
    let grayT = 3.0;
    let calendar5 = String.fromCharCode(98,115,116,114,97,99,116,95,55,95,55,53,0);
    let areau = 4.0;
    let flyerD = String.fromCharCode(97,105,102,102,95,98,95,54,52,0);
    let banga = String.fromCharCode(116,95,52,50,95,112,105,112,101,0);
    let stringsE = String.fromCharCode(98,95,54,55,95,112,108,97,99,101,115,0);
      mappingR = "2";
   if ((parseFloat(`${tempW.length}`) - areau) <= 4.85 && 5.89 <= (areau - 4.85)) {
      tempW = `${tempW.length >> (Math.min(Math.abs(1), 3))}`;
   }
   if (3 > (5 * hiad1.size) && (5 * mappingR.length) > 4) {
       let full6 = String.fromCharCode(113,95,51,48,95,115,112,97,119,110,97,98,108,101,0);
       let runtimeschedulerh = String.fromCharCode(107,95,53,51,0);
       let runtimeschedulerq = String.fromCharCode(98,95,56,51,95,114,101,115,101,116,0);
      if (full6 != String.fromCharCode(51,0)) {
         runtimeschedulerh += `${(String.fromCharCode(73,0) == full6 ? full6.length : runtimeschedulerh.length)}`;
      }
      if (3 < full6.length) {
         full6 = `${runtimeschedulerq.length << (Math.min(5, runtimeschedulerh.length))}`;
      }
      hiad1.set(`${iconwechatz}`, 3 | hiad1.size);
   }
      flyerD = "3";
   if (3 >= mappingR.length) {
       let recommendationi = false;
       let tumbnailn = String.fromCharCode(112,114,101,108,105,109,105,110,97,114,121,95,52,95,55,57,0);
       let emoji9 = false;
          let calendar7 = String.fromCharCode(100,105,118,95,112,95,51,49,0);
         emoji9 = tumbnailn.length == 77 && !recommendationi;
         calendar7 = `${calendar7.length & calendar7.length}`;
      while (2 > tumbnailn.length) {
         tumbnailn += `${(tumbnailn.length - (recommendationi ? 5 : 1))}`;
         break;
      }
      if (1 >= tumbnailn.length) {
         emoji9 = !recommendationi;
      }
          let chinasamer: Map<any, any> = new Map([[String.fromCharCode(99,95,49,56,95,111,117,116,103,111,105,110,103,0),false ], [String.fromCharCode(99,95,53,56,95,115,97,108,116,115,0),false ], [String.fromCharCode(116,97,112,115,95,113,95,54,52,0),true ]]);
          let sell6 = 1.0;
          let anytimex: Map<any, any> = new Map([[String.fromCharCode(114,103,98,112,108,117,115,95,115,95,49,49,0),false ], [String.fromCharCode(109,117,115,105,99,95,53,95,50,49,0),false ]]);
         recommendationi = tumbnailn.length <= 44;
         chinasamer = new Map([[`${chinasamer.size}`, 3]]);
         sell6 -= 1 >> (Math.min(2, Math.abs(parseInt(`${sell6}`))));
         anytimex.set(`${sell6}`, 2);
          let resendk: Map<any, any> = new Map([[String.fromCharCode(118,105,111,108,101,116,95,103,95,53,54,0),false ], [String.fromCharCode(106,95,57,51,95,105,100,101,97,108,0),false ], [String.fromCharCode(120,95,55,95,116,97,103,115,0),true ]]);
         tumbnailn += `${2 & tumbnailn.length}`;
         resendk = new Map([[`${resendk.size}`, resendk.size / (Math.max(resendk.size, 4))]]);
         emoji9 = !recommendationi;
      if (!tumbnailn.includes(`${emoji9}`)) {
         emoji9 = tumbnailn.length == 2 && recommendationi;
      }
         recommendationi = tumbnailn.endsWith(`${emoji9}`);
       let combinee = 0.0;
      mappingR += `${tumbnailn.length}`;
   }
   for (let z = 0; z < 2; z++) {
       let yellowvideolivej = String.fromCharCode(99,111,110,110,101,99,116,105,111,110,115,95,118,95,57,57,0);
      while (yellowvideolivej.length == 3) {
          let iconnointernetG = true;
          let stringD = String.fromCharCode(112,95,50,49,95,99,97,110,99,101,108,0);
         yellowvideolivej += `${yellowvideolivej.length | 3}`;
         iconnointernetG = 12 == stringD.length || 12 == stringD.length;
         break;
      }
         yellowvideolivej = `${yellowvideolivej.length}`;
       let nbatrophyj = String.fromCharCode(101,95,53,56,95,111,117,116,108,105,110,107,0);
       let rncoreE = String.fromCharCode(116,101,120,116,109,111,118,115,117,98,95,55,95,56,0);
      areau *= parseFloat(`${3}`);
   }
      flyerD += "3";
   for (let h = 0; h < 1; h++) {
      areau += parseFloat(`${scheduler6.length}`);
   }
   let h_hashD = tempW == String.fromCharCode(108,101,116,0);
   do {
      tempW += `${calendar5.length & parseInt(`${areau}`)}`;
      if (h_hashD) {
         break;
      }
   } while (h_hashD && (4 >= (2 % (Math.max(9, hiad1.size)))));
      more4 %= Math.max(4, 2);
   if (5.21 == (2.19 - grayT)) {
      calendar5 = "1 + more4";
   }
   let minimizeR = 9268975.0 <= libjsijniprofilerr;
   do {
      libjsijniprofilerr += parseInt(`${libjsijniprofilerr}`);
      if (minimizeR) {
         break;
      }
   } while ((3 > (mappingR.length / (Math.max(7, parseInt(`${libjsijniprofilerr}`)))) || 1.95 > (libjsijniprofilerr / (Math.max(mappingR.length, 6)))) && minimizeR);
      iconwechatz <<= Math.min(3, Math.abs(1));
   for (let s = 0; s < 1; s++) {
       let mergerS: Array<any> = [String.fromCharCode(116,111,114,101,100,95,109,95,56,51,0), String.fromCharCode(115,117,110,114,97,115,116,95,116,95,57,50,0), String.fromCharCode(104,95,52,54,95,105,102,97,99,116,111,114,0)];
       let chatQ = String.fromCharCode(117,95,55,55,95,110,111,116,105,102,121,105,110,103,0);
       let reactnativejsQ = String.fromCharCode(114,101,103,95,102,95,55,50,0);
      if (3 == chatQ.length) {
          let gesturesI = 5;
         reactnativejsQ = `${chatQ.length}`;
         gesturesI += 1 / (Math.max(7, gesturesI));
      }
          let searchE = String.fromCharCode(119,104,97,116,115,95,57,95,49,55,0);
         mergerS = [2];
         searchE = `${searchE.length * 3}`;
      if (4 <= (4 >> (Math.min(5, reactnativejsQ.length))) || (reactnativejsQ.length >> (Math.min(Math.abs(4), 2))) <= 1) {
          let sheetT = String.fromCharCode(98,97,99,107,112,116,114,95,98,95,52,55,0);
          let defaultprofilepicp = 3.0;
          let tailg: Array<any> = [657, 39, 943];
          let libjsie = 2.0;
         mergerS = [1 + parseInt(`${defaultprofilepicp}`)];
         sheetT += `${(sheetT == String.fromCharCode(89,0) ? sheetT.length : tailg.length)}`;
         defaultprofilepicp -= parseFloat(`${tailg.length | sheetT.length}`);
         libjsie += tailg.length;
      }
          let shrinkS = String.fromCharCode(100,95,57,56,95,114,101,102,105,100,0);
          let auto_9G: Map<any, any> = new Map([[String.fromCharCode(112,104,111,116,111,115,95,121,95,53,48,0),true ], [String.fromCharCode(99,104,97,110,103,101,103,114,111,117,112,95,112,95,50,48,0),true ], [String.fromCharCode(102,95,55,53,95,107,110,111,119,110,0),false ]]);
         chatQ = "1";
         shrinkS = `${shrinkS.length}`;
         auto_9G.set(shrinkS, shrinkS.length);
      for (let o = 0; o < 1; o++) {
         mergerS.push(mergerS.length);
      }
      if (4 > (mergerS.length & chatQ.length) && (4 & chatQ.length) > 4) {
          let giftbuttonm: Map<any, any> = new Map([[String.fromCharCode(119,95,53,53,95,99,101,108,112,0),String.fromCharCode(111,95,50,52,95,114,101,115,111,117,114,99,101,0)], [String.fromCharCode(109,97,103,121,95,118,95,53,53,0),String.fromCharCode(100,95,50,54,95,100,105,118,105,100,101,0)]]);
         chatQ = `${chatQ.length}`;
         giftbuttonm.set(`${giftbuttonm.size}`, giftbuttonm.size);
      }
         chatQ += `${2 - chatQ.length}`;
      let macauI = 6815437 <= mergerS.length;
      do {
          let bridgez: Map<any, any> = new Map([[String.fromCharCode(97,95,50,49,95,117,116,104,111,114,0),true ], [String.fromCharCode(108,97,110,103,105,100,95,119,95,54,50,0),false ]]);
          let bangM: Array<any> = [157, 957];
          let n_titleb = String.fromCharCode(110,95,55,56,95,100,105,115,99,111,110,110,101,99,116,105,111,110,0);
          let bdxadsdkG: Map<any, any> = new Map([[String.fromCharCode(100,121,110,98,117,102,95,56,95,51,53,0),416], [String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,95,105,95,54,54,0),964], [String.fromCharCode(98,97,114,114,97,121,95,48,95,56,57,0),912]]);
         mergerS.push((String.fromCharCode(83,0) == chatQ ? chatQ.length : mergerS.length));
         bridgez.set(n_titleb, 2);
         bangM.push(n_titleb.length | bangM.length);
         bdxadsdkG = new Map([[`${bridgez.size}`, 2]]);
         if (macauI) {
            break;
         }
      } while ((3 <= (reactnativejsQ.length - mergerS.length)) && macauI);
      let predictionwinM = 5092118 >= chatQ.length;
      do {
          let moden = false;
          let settingsL = 4.0;
          let nativemodule6: Array<any> = [99, 472, 122];
         chatQ = `${mergerS.length}`;
         moden = nativemodule6.includes(settingsL);
         settingsL -= parseFloat(`${parseInt(`${settingsL}`) / (Math.max(2, nativemodule6.length))}`);
         if (predictionwinM) {
            break;
         }
      } while (((5 ^ mergerS.length) == 3 || (5 ^ chatQ.length) == 3) && predictionwinM);
      iconwechatz |= mappingR.length * hiad1.size;
   }
      iconwechatz >>= Math.min(Math.abs(3), 2);
   if (1 > hiad1.size) {
       let feedbackf = 0;
       let iconscheduleT = 2;
       let sharel = String.fromCharCode(119,95,50,56,95,105,111,115,0);
         feedbackf ^= 1 ^ feedbackf;
      while (4 == (sharel.length + feedbackf) || 2 == (sharel.length + 4)) {
         feedbackf <<= Math.min(1, Math.abs(feedbackf));
         break;
      }
      for (let f = 0; f < 3; f++) {
         iconscheduleT += feedbackf;
      }
      if ((sharel.length ^ 3) == 3) {
          let fastd = String.fromCharCode(101,95,53,57,95,98,97,108,97,110,99,101,115,0);
         iconscheduleT %= Math.max(fastd.length, 5);
      }
          let privatechatbga = String.fromCharCode(111,102,102,101,114,115,95,102,95,52,54,0);
          let unimplementedviewm: Array<any> = [String.fromCharCode(102,114,101,101,112,97,100,100,114,115,95,54,95,53,55,0), String.fromCharCode(99,111,109,112,97,114,97,98,108,101,95,51,95,52,50,0), String.fromCharCode(112,95,51,53,95,97,99,99,101,115,115,111,114,121,0)];
          let libsgcoreJ = String.fromCharCode(98,97,116,99,104,105,110,103,95,117,95,56,57,0);
         sharel = `${unimplementedviewm.length}`;
         privatechatbga = "2";
         unimplementedviewm.push(1 | libsgcoreJ.length);
         libsgcoreJ = "2";
         iconscheduleT |= feedbackf - 2;
      while (sharel.startsWith(`${iconscheduleT}`)) {
         sharel = `${sharel.length % 1}`;
         break;
      }
      while (feedbackf > iconscheduleT) {
         iconscheduleT *= (String.fromCharCode(98,0) == sharel ? sharel.length : iconscheduleT);
         break;
      }
      for (let m = 0; m < 1; m++) {
          let closes = String.fromCharCode(121,95,56,57,95,98,100,108,116,0);
         iconscheduleT ^= 3;
         closes = `${closes.length}`;
      }
      mappingR += `${iconwechatz}`;
   }
      grayT *= iconwechatz;
   while (uimanager7.includes(areau)) {
      uimanager7 = [3];
      break;
   }
   while (flyerD.startsWith(`${libjsijniprofilerr}`)) {
      flyerD = `${flyerD.length}`;
      break;
   }
   for (let x = 0; x < 2; x++) {
      more4 &= uimanager7.length;
   }
      tempW = `${tempW.length * uimanager7.length}`;
      hiad1 = new Map([[flyerD, 3]]);
   for (let s = 0; s < 2; s++) {
      areau /= Math.max(parseFloat(`${3 << (Math.min(4, mappingR.length))}`), 2);
   }
   let gesture3 = 8506252 <= hiad1.size;
   do {
      hiad1 = new Map([[flyerD, 2 - parseInt(`${grayT}`)]]);
      if (gesture3) {
         break;
      }
   } while ((!Array.from(hiad1.values()).includes(libjsijniprofilerr)) && gesture3);
   for (let t = 0; t < 3; t++) {
      iconwechatz += 2;
   }
   for (let e = 0; e < 2; e++) {
      hiad1 = new Map([[tempW, parseInt(`${grayT}`) / 2]]);
   }
   let gifgoalbgi = 8503188 >= mappingR.length;
   do {
      mappingR += "3";
      if (gifgoalbgi) {
         break;
      }
   } while (gifgoalbgi && ((parseInt(`${libjsijniprofilerr}`) / (Math.max(mappingR.length, 2))) <= 3 && 4 <= (parseInt(`${libjsijniprofilerr}`) / 3)));
   let logoutI = 5652124 <= hiad1.size;
   do {
       let libhermesY: Map<any, any> = new Map([[String.fromCharCode(104,115,99,114,111,108,108,95,107,95,56,51,0),true ], [String.fromCharCode(99,95,56,53,95,109,112,111,110,0),true ], [String.fromCharCode(112,97,99,107,101,116,105,110,95,55,95,54,53,0),false ]]);
       let componentsg = 4;
       let predictionarrowz = 4;
       let large0 = 5.0;
      while (3.35 < (large0 - predictionarrowz)) {
         predictionarrowz %= Math.max(2, componentsg / (Math.max(parseInt(`${large0}`), 5)));
         break;
      }
         large0 *= parseInt(`${large0}`);
          let short_x6: Array<any> = [29, 496];
          let logouserA = String.fromCharCode(114,101,110,100,101,114,95,53,95,55,56,0);
          let downloaderA = String.fromCharCode(122,95,54,48,95,101,97,115,121,0);
         predictionarrowz /= Math.max(2, predictionarrowz % (Math.max(downloaderA.length, 2)));
         short_x6.push((String.fromCharCode(79,0) == logouserA ? logouserA.length : short_x6.length));
         downloaderA = `${logouserA.length % (Math.max(1, 1))}`;
          let righto = 1.0;
          let panglez = String.fromCharCode(117,95,52,54,95,98,97,99,107,101,100,0);
         libhermesY.set(`${componentsg}`, 3);
         righto -= parseFloat(`${parseInt(`${righto}`) - 1}`);
         panglez += `${(panglez == String.fromCharCode(70,0) ? parseInt(`${righto}`) : panglez.length)}`;
      let profileframet = predictionarrowz <= 6233725;
      do {
          let dropdownR = String.fromCharCode(113,95,56,56,95,117,110,101,115,99,97,112,101,0);
         predictionarrowz |= 3;
         dropdownR += `${dropdownR.length ^ 1}`;
         if (profileframet) {
            break;
         }
      } while (((componentsg % (Math.max(2, predictionarrowz))) >= 5 || 1 >= (componentsg % 5)) && profileframet);
         predictionarrowz &= 1 - componentsg;
       let privacyI: Map<any, any> = new Map([[String.fromCharCode(97,101,99,109,95,102,95,50,57,0),810], [String.fromCharCode(108,111,110,103,101,115,116,95,120,95,50,55,0),747], [String.fromCharCode(103,95,50,51,95,99,104,97,110,103,101,114,0),726]]);
      if (4 < (predictionarrowz << (Math.min(Math.abs(3), 3))) || 3 < (predictionarrowz << (Math.min(3, Math.abs(componentsg))))) {
         predictionarrowz %= Math.max(componentsg + parseInt(`${large0}`), 2);
      }
       let commonN = String.fromCharCode(98,105,110,100,95,118,95,49,48,48,0);
       let dacccfaabfbcbadeebddcabacdffdbf = String.fromCharCode(113,110,111,115,95,117,95,50,54,0);
          let constants3 = true;
          let mutedZ = true;
          let selectedj = true;
         privacyI.set(`${componentsg}`, 2);
         constants3 = !mutedZ;
         mutedZ = (mutedZ ? selectedj : mutedZ);
         selectedj = !mutedZ;
      while (commonN.length <= 3) {
          let injury3: Array<any> = [925, 902];
          let eyeopenL = 1.0;
          let dropdownM = 3;
          let mbbannerr = 5.0;
          let merger0 = String.fromCharCode(101,112,111,110,121,109,111,117,115,95,117,95,50,48,0);
         libhermesY.set(`${componentsg}`, parseInt(`${large0}`));
         injury3.push(merger0.length * 1);
         eyeopenL += parseFloat(`${merger0.length | parseInt(`${eyeopenL}`)}`);
         dropdownM |= parseInt(`${eyeopenL}`);
         mbbannerr /= Math.max(parseFloat(`${1 >> (Math.min(3, Math.abs(dropdownM)))}`), 5);
         break;
      }
      while (4.89 >= (libhermesY.size + large0)) {
          let moonX = String.fromCharCode(120,95,56,54,95,97,109,102,101,110,99,0);
          let helperW = String.fromCharCode(116,95,53,50,95,114,101,119,97,114,100,115,0);
          let libflipperR: Map<any, any> = new Map([[String.fromCharCode(101,95,50,49,95,100,101,99,108,105,110,101,0),105], [String.fromCharCode(97,110,105,109,97,116,101,95,99,95,55,48,0),317]]);
          let matchactiveA = String.fromCharCode(106,95,53,95,111,111,108,98,97,114,0);
         libhermesY = new Map([[matchactiveA, parseInt(`${large0}`)]]);
         moonX += `${helperW.length}`;
         helperW += `${helperW.length % 1}`;
         libflipperR = new Map([[`${libflipperR.size}`, 2]]);
         matchactiveA = `${(String.fromCharCode(108,0) == helperW ? moonX.length : helperW.length)}`;
         break;
      }
      hiad1.set(`${iconwechatz}`, 1 + iconwechatz);
      if (logoutI) {
         break;
      }
   } while (logoutI && (!Array.from(hiad1.values()).includes(uimanager7.length)));

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
       let shielddonek = 1.0;
    let androidO = false;
    let dice5: Map<any, any> = new Map([[String.fromCharCode(101,108,108,105,103,105,98,108,101,95,55,95,50,48,0),267], [String.fromCharCode(103,95,49,56,95,108,105,98,114,97,114,105,101,115,0),365]]);
    let libyogaD: Array<any> = [487, 210];
    let analytich = false;
    let contextB = 2.0;
    let next7 = String.fromCharCode(116,120,105,100,95,102,95,55,48,0);
    let moonv = 0.0;
    let uploadh: Array<any> = [344, 105];
    let logouserC = 3;
    let videocommon9 = 0.0;
    let default_p0 = 0.0;
    let upgradej = String.fromCharCode(111,95,53,56,95,117,110,115,99,104,101,100,117,108,101,0);
    let less6 = 0;
   let friendsK = 7137375.0 <= moonv;
   do {
      moonv /= Math.max(1, parseFloat(`${uploadh.length % (Math.max(2, 1))}`));
      if (friendsK) {
         break;
      }
   } while ((4.14 <= (contextB - moonv)) && friendsK);

    if (isSubmitting) return;

   let long_cR = androidO ? !androidO : androidO;
   do {
      androidO = videocommon9 <= 63.28;
      if (long_cR) {
         break;
      }
   } while (long_cR && ((2.17 / (Math.max(8, videocommon9))) == 5.25));

    if (isReadTermNCondition == false) {

      libyogaD = [libyogaD.length];
      return;

       let heji8 = 0;
       let mbnativey: Map<any, any> = new Map([[String.fromCharCode(104,101,99,107,95,97,95,49,48,48,0),665], [String.fromCharCode(118,97,108,105,100,97,116,101,100,95,121,95,49,52,0),520]]);
       let malaysiae = true;
       let mbnativeadvancedk = false;
       let backP = false;
      for (let m = 0; m < 3; m++) {
         heji8 ^= ((malaysiae ? 4 : 4) >> (Math.min(Math.abs(1), 4)));
      }
         heji8 >>= Math.min(Math.abs(((mbnativeadvancedk ? 3 : 2))), 1);
      for (let p = 0; p < 3; p++) {
          let applicationc = true;
          let giftbutton1 = 4;
          let baselineX = 0;
         mbnativeadvancedk = (!mbnativeadvancedk ? !backP : !mbnativeadvancedk);
         applicationc = 24 >= baselineX && giftbutton1 >= 24;
         giftbutton1 &= giftbutton1;
         baselineX %= Math.max(1, 3);
      }
         heji8 &= 2;
          let fastforwardC: Map<any, any> = new Map([[String.fromCharCode(111,112,101,110,95,55,95,57,48,0),660], [String.fromCharCode(107,95,49,54,95,114,101,115,105,122,101,0),91]]);
          let grey1: Array<any> = [String.fromCharCode(100,95,52,49,95,115,108,105,99,101,115,0), String.fromCharCode(110,97,118,105,103,97,116,101,95,54,95,49,54,0), String.fromCharCode(102,101,116,99,104,101,115,95,117,95,55,48,0)];
         malaysiae = grey1.length >= 78;
         fastforwardC = new Map([[`${fastforwardC.size}`, fastforwardC.size / 3]]);
         grey1 = [fastforwardC.size];
      while (mbnativeadvancedk && 3 >= (2 | heji8)) {
         mbnativeadvancedk = (mbnativeadvancedk ? backP : !mbnativeadvancedk);
         break;
      }
          let anytimeL = String.fromCharCode(105,110,99,114,95,106,95,56,57,0);
          let statisticsl = false;
         backP = anytimeL.length <= mbnativey.size;
         anytimeL = `${((statisticsl ? 3 : 5) ^ (statisticsl ? 2 : 3))}`;
         malaysiae = !mbnativeadvancedk;
      libyogaD = [(2 / (Math.max((malaysiae ? 1 : 1), 1)))];
    }

    const formattedLoginValue = loginType === 'phone' ? loginValue.replace(/\s/g, '') : loginValue;

    

   let pangleO = default_p0 <= 6210166.0;
   do {
      default_p0 /= Math.max(3, (String.fromCharCode(118,0) == next7 ? parseInt(`${shielddonek}`) : next7.length));
      if (pangleO) {
         break;
      }
   } while (pangleO && (1 < (next7.length * 3) && 4.48 < (default_p0 / (Math.max(next7.length, 10)))));
    

   let files = next7 == String.fromCharCode(111,103,119,0);
   do {
       let iconshareD = 1.0;
       let completel = false;
      let inouttargetred5 = completel ? !completel : completel;
      do {
          let viewero = 1;
          let sina2 = String.fromCharCode(103,114,101,101,116,105,110,103,95,100,95,53,52,0);
          let scheduleO = String.fromCharCode(115,112,107,114,95,110,95,53,51,0);
         completel = scheduleO.length >= 19;
         viewero &= sina2.length * viewero;
         sina2 += `${sina2.length ^ viewero}`;
         scheduleO = `${1 * viewero}`;
         if (inouttargetred5) {
            break;
         }
      } while (inouttargetred5 && (!completel));
         completel = 88.42 == iconshareD && completel;
         iconshareD += ((completel ? 1 : 5) + parseInt(`${iconshareD}`));
      if (!completel) {
          let projectT = String.fromCharCode(101,95,55,52,95,105,110,108,105,110,107,0);
          let shielddoneq: Map<any, any> = new Map([[String.fromCharCode(105,110,105,116,105,97,116,111,114,95,55,95,55,57,0),309], [String.fromCharCode(100,95,56,56,95,103,101,116,111,112,116,0),843]]);
          let descD = 3.0;
         iconshareD *= 1 * parseInt(`${iconshareD}`);
         projectT += `${parseInt(`${descD}`)}`;
         shielddoneq = new Map([[`${shielddoneq.size}`, shielddoneq.size]]);
         descD -= parseFloat(`${shielddoneq.size * 1}`);
      }
      for (let b = 0; b < 1; b++) {
         iconshareD /= Math.max(1, ((completel ? 1 : 3) % (Math.max(parseInt(`${iconshareD}`), 10))));
      }
         iconshareD -= 3 - parseInt(`${iconshareD}`);
      next7 = `${((analytich ? 5 : 1) * parseInt(`${contextB}`))}`;
      if (files) {
         break;
      }
   } while (files && (2 >= next7.length));
    

      libyogaD = [parseInt(`${moonv}`)];
    

      androidO = logouserC > 3;

    if (formattedLoginValue === "" || loginValueErrMsg !== null) {
      setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
      return;
    }

    try {

      moonv += parseFloat(`${1}`);
      setSubmitting(true);

   let phonej = 9044402 <= uploadh.length;
   do {
       let navigations: Array<any> = [327, 411, 485];
       let mailP = String.fromCharCode(100,100,99,116,95,111,95,49,48,48,0);
       let searchx = 3.0;
       let mini1: Array<any> = [492, 980, 588];
          let statisticsi = String.fromCharCode(104,95,50,49,95,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0);
         navigations = [mailP.length];
         statisticsi = `${(statisticsi == String.fromCharCode(121,0) ? statisticsi.length : statisticsi.length)}`;
       let tooltipsp = String.fromCharCode(104,95,51,53,95,118,99,116,101,115,116,0);
       let middlewareC = String.fromCharCode(114,100,109,117,108,116,95,113,95,51,55,0);
      if (middlewareC.startsWith(`${mailP.length}`)) {
         mailP += `${3 - tooltipsp.length}`;
      }
         searchx /= Math.max(1, parseFloat(`${1 | middlewareC.length}`));
      while (middlewareC.length > mini1.length) {
          let disconnectedlogoE: Array<any> = [870, 804];
          let iconr = String.fromCharCode(101,95,52,55,95,98,101,116,119,101,101,110,0);
          let moon5: Map<any, any> = new Map([[String.fromCharCode(121,95,50,95,116,102,120,100,0),String.fromCharCode(115,116,114,105,100,101,97,98,108,101,95,109,95,57,54,0)], [String.fromCharCode(121,95,56,49,95,115,109,117,115,104,0),String.fromCharCode(115,116,117,98,98,101,100,95,48,95,55,52,0)], [String.fromCharCode(118,95,52,54,95,104,101,120,0),String.fromCharCode(107,95,52,49,95,117,110,105,116,121,0)]]);
          let heartc: Array<any> = [828, 123];
         mini1 = [1];
         disconnectedlogoE.push(iconr.length);
         iconr += `${iconr.length ^ 3}`;
         moon5.set(`${heartc.length}`, heartc.length | 3);
         break;
      }
         navigations.push(mini1.length % (Math.max(4, parseInt(`${searchx}`))));
         mini1.push(3);
         tooltipsp += `${mailP.length}`;
       let internetk = String.fromCharCode(117,95,49,50,95,102,97,100,115,116,0);
       let playercommonA = String.fromCharCode(99,95,52,53,95,109,105,108,108,105,115,0);
      if (mailP == String.fromCharCode(74,0) || middlewareC == String.fromCharCode(100,0)) {
         middlewareC = "2";
      }
         mini1.push(mailP.length >> (Math.min(internetk.length, 4)));
         navigations.push(middlewareC.length >> (Math.min(internetk.length, 2)));
      uploadh.push(3 % (Math.max(7, parseInt(`${shielddonek}`))));
      if (phonej) {
         break;
      }
   } while (phonej && (3 >= (next7.length / (Math.max(1, uploadh.length)))));
      await wwIconscheduleColors.signinupUser({
        loginType: loginType === 'email' ? 'EMAIL' : 'SMS',
        email: loginType === 'email' ? loginValue : undefined,
        
        phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + formattedLoginValue : undefined,
        countryId: loginType === 'phone' ? countryPhoneSelected?.country_id : undefined,
        referralCode: referralCode,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      if (!err?.message.includes('验证码已发送')) {

   let selectionP = contextB >= 8643093.0;
   do {
      contextB -= (parseFloat(`${upgradej.length ^ (analytich ? 4 : 2)}`));
      if (selectionP) {
         break;
      }
   } while (selectionP && ((contextB - logouserC) == 2.61));
        setSubmitting(false);

      dice5.set(upgradej, 3 & upgradej.length);
        setLoginValueErrMsg(err.message);

   if ((videocommon9 + contextB) == 1.28) {
      contextB += parseFloat(`${libyogaD.length}`);
   }
        return;
      }
    }

    setSubmitting(false);

      default_p0 -= (less6 << (Math.min(3, Math.abs((analytich ? 2 : 4)))));

    dispatch(hideBottomSheetAction());

   let termsE = 6586658.0 <= contextB;
   do {
      contextB /= Math.max(parseFloat(`${parseInt(`${shielddonek}`)}`), 2);
      if (termsE) {
         break;
      }
   } while (termsE && ((contextB / 3.69) < 1.10));
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

type wwIconmoreScheduler = {
  loginType: 'email' | 'phone',
  loginValue: string,
  referralCode: string,
  loginValueErrMsg: string | null,
  referralCodeErrMsg: string | null,
  isReadTermNCondition: boolean,
  countryPhoneSelected?: wwCatalog,
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
}: wwIconmoreScheduler) => {
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
                source={require("@static/images/profile/zhengpianDefaultprofilepicScore.png")}
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
              source={require("@static/images/invite/countrySingaporeManager.png")}
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
                source={require("@static/images/profile/zhengpianDefaultprofilepicScore.png")}
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
              source={require("@static/images/invite/countrySingaporeManager.png")}
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
