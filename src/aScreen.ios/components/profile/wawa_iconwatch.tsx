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
import { API_DOMAIN, IS_OTHER_SKIN } from "@utility/wawa_iconpointscore";
import { wawaNewarchdefaults } from "@utility/wawa_analytic_imagenomoredata";
import AsyncStorage from "@react-native-async-storage/async-storage";
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";
import { useDispatch } from "react-redux";
import { addUserAuthState } from "@redux/actions/wawa_loginsuccess";
import { wawaEvent } from "@api";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import wawaSina from "../../../../AppsFlyer/wawa_fcdaebecbcbafcdfceaaeccfeacdb";
import TickedIcon from '@static/images/largesoundIconrightorange.svg';


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
  const [isReadTermNCondition, setReadTermNCondition] = useState(false);

  
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
       let libhermes9 = String.fromCharCode(101,105,116,104,101,114,95,113,95,51,55,0);
    let bufferk = String.fromCharCode(105,113,109,102,95,120,95,51,52,0);
    let delegate_hO: Map<any, any> = new Map([[String.fromCharCode(108,95,49,95,97,117,100,105,98,105,108,105,116,121,0),String.fromCharCode(100,105,114,115,95,52,95,49,50,0)], [String.fromCharCode(112,105,100,95,110,95,57,51,0),String.fromCharCode(97,104,101,97,100,95,122,95,53,50,0)], [String.fromCharCode(122,95,52,49,95,116,101,120,116,117,114,101,100,0),String.fromCharCode(114,95,57,48,95,112,108,117,114,97,108,105,122,101,100,0)]]);
    let assets6 = 0;
    let pushR = String.fromCharCode(118,101,114,115,105,111,110,95,104,95,56,57,0);
    let rncorez = String.fromCharCode(114,95,57,51,95,117,116,118,105,100,101,111,100,115,112,0);
    let thumbnail_ = String.fromCharCode(115,116,111,112,95,49,95,55,52,0);
    let statisticsactiveG = String.fromCharCode(109,95,49,50,95,98,105,116,97,108,108,111,99,0);
    let anythinkG: Array<any> = [694, 276];
    let loadingspinnerB = String.fromCharCode(99,95,52,55,95,97,99,113,117,105,114,101,100,0);
    let arrowrightwithtailu = 5.0;
    let smallg = 4.0;
    let diceH = String.fromCharCode(114,116,112,119,95,102,95,51,55,0);
    let inewsshareH = String.fromCharCode(117,95,54,55,95,100,105,115,99,97,114,100,101,100,0);
    let halfb: Array<any> = [301, 695];
    let libflipperB = 1;
    let gpayN = String.fromCharCode(98,95,50,50,95,117,110,102,97,105,114,0);
   if (bufferk != thumbnail_) {
      thumbnail_ = `${1 | pushR.length}`;
   }
   while (smallg >= 2.58) {
      rncorez = `${parseInt(`${smallg}`)}`;
      break;
   }
      smallg *= parseInt(`${smallg}`) << (Math.min(Math.abs(2), 2));
       let appleb = String.fromCharCode(98,95,53,52,95,112,114,101,112,114,111,103,114,97,109,109,101,100,0);
       let relatedL: Array<any> = [828, 770];
      let cornershoot3 = 8156688 >= appleb.length;
      do {
          let team_ = String.fromCharCode(112,97,115,115,105,118,101,95,118,95,50,53,0);
         appleb = `${appleb.length - 1}`;
         team_ = `${team_.length}`;
         if (cornershoot3) {
            break;
         }
      } while (cornershoot3 && (3 > (appleb.length - relatedL.length)));
       let bdxadsdkD = 3;
       let predictionP = 2;
      while (appleb.startsWith(`${bdxadsdkD}`)) {
          let libjsijniprofilerA = String.fromCharCode(108,95,50,57,95,109,109,97,112,0);
          let hooksZ = String.fromCharCode(102,95,56,95,114,101,115,111,117,114,99,101,0);
          let penalty_ = 4.0;
          let abidetecto = String.fromCharCode(97,95,53,53,95,105,110,100,101,102,105,110,105,116,101,0);
          let lightU = 1;
         bdxadsdkD /= Math.max(relatedL.length, 3);
         libjsijniprofilerA = `${abidetecto.length / (Math.max(7, lightU))}`;
         hooksZ = `${parseInt(`${penalty_}`) | lightU}`;
         penalty_ *= (parseFloat(`${String.fromCharCode(86,0) == libjsijniprofilerA ? libjsijniprofilerA.length : lightU}`));
         abidetecto += `${hooksZ.length / (Math.max(3, 6))}`;
         break;
      }
         appleb += "1";
          let mappingE = String.fromCharCode(119,95,50,54,95,101,120,97,109,105,110,101,0);
          let subtextJ = 4;
          let chinasameC = String.fromCharCode(102,95,53,56,95,104,99,115,99,97,108,101,0);
         predictionP &= subtextJ;
         mappingE += `${chinasameC.length & mappingE.length}`;
         subtextJ <<= Math.min(Math.abs(3 & mappingE.length), 3);
         chinasameC = `${chinasameC.length}`;
      for (let s = 0; s < 1; s++) {
         appleb += `${relatedL.length}`;
      }
      thumbnail_ = "2 | assets6";
   while (4 >= pushR.length) {
      loadingspinnerB = `${1 - pushR.length}`;
      break;
   }
       let whitetick5 = String.fromCharCode(99,108,111,115,101,95,105,95,51,51,0);
       let abidetectN = String.fromCharCode(109,97,112,115,105,122,101,95,110,95,55,54,0);
      if (abidetectN == whitetick5) {
         whitetick5 += `${(String.fromCharCode(103,0) == abidetectN ? abidetectN.length : whitetick5.length)}`;
      }
      let defaultroombgA = abidetectN == String.fromCharCode(51,114,101,97,116,102,52,0);
      do {
         abidetectN += `${whitetick5.length >> (Math.min(5, abidetectN.length))}`;
         if (defaultroombgA) {
            break;
         }
      } while ((whitetick5.length >= abidetectN.length) && defaultroombgA);
      delegate_hO.set(`${arrowrightwithtailu}`, 1);

    setloginType('email');

       let nbatrophyS = true;
       let smallbrightnessA = String.fromCharCode(116,95,57,95,110,111,110,110,111,114,109,97,116,105,118,101,0);
       let chatA = String.fromCharCode(112,97,105,110,116,115,95,51,95,53,56,0);
      let mbsplashm = String.fromCharCode(104,102,48,53,50,54,102,0) == chatA;
      do {
         chatA += `${3 | smallbrightnessA.length}`;
         if (mbsplashm) {
            break;
         }
      } while ((4 >= chatA.length && smallbrightnessA != String.fromCharCode(118,0)) && mbsplashm);
          let darke = 1.0;
         nbatrophyS = 79 <= smallbrightnessA.length;
         darke += parseFloat(`${parseInt(`${darke}`) / (Math.max(2, parseInt(`${darke}`)))}`);
       let darkx: Array<any> = [204, 388, 445];
       let showS: Array<any> = [String.fromCharCode(99,111,97,108,101,115,99,101,95,48,95,57,50,0), String.fromCharCode(107,95,54,56,95,116,121,112,101,100,101,102,115,0)];
         smallbrightnessA += `${smallbrightnessA.length}`;
         smallbrightnessA += `${1 << (Math.min(5, darkx.length))}`;
      while (chatA.length > 2) {
         smallbrightnessA += `${(chatA == String.fromCharCode(102,0) ? darkx.length : chatA.length)}`;
         break;
      }
          let casting0 = 3.0;
         smallbrightnessA += `${parseInt(`${casting0}`) % 2}`;
      while (chatA == smallbrightnessA) {
          let statisticsinactive9 = 2;
          let whiteanimationlivev = String.fromCharCode(101,95,56,50,95,99,111,108,111,114,115,0);
          let videovarO: Array<any> = [609, 995];
          let confirmationt = String.fromCharCode(97,95,50,56,95,115,105,103,105,110,116,0);
          let huaweiz = String.fromCharCode(98,95,57,55,95,108,111,116,116,105,101,112,97,114,115,101,114,0);
         smallbrightnessA = `${chatA.length << (Math.min(Math.abs(1), 5))}`;
         statisticsinactive9 &= 3 << (Math.min(3, confirmationt.length));
         whiteanimationlivev = `${confirmationt.length}`;
         videovarO = [huaweiz.length];
         huaweiz += `${videovarO.length + 2}`;
         break;
      }
         smallbrightnessA = "2";
      loadingspinnerB += `${delegate_hO.size / (Math.max(rncorez.length, 3))}`;
       let resendO = 2.0;
       let directZ = String.fromCharCode(98,95,49,48,95,101,120,105,115,116,101,110,99,101,0);
       let iconfeedback4: Array<any> = [209, 749];
      for (let h = 0; h < 2; h++) {
          let y_animationw = 1.0;
          let iconarrowrightorange8 = String.fromCharCode(106,95,52,48,95,117,105,110,116,98,101,0);
          let owngoalV = String.fromCharCode(105,100,105,111,109,95,50,95,50,57,0);
         resendO /= Math.max(5, 3 - owngoalV.length);
         y_animationw *= parseFloat(`${parseInt(`${y_animationw}`)}`);
         iconarrowrightorange8 = `${parseInt(`${y_animationw}`) * iconarrowrightorange8.length}`;
         owngoalV = "1";
      }
         resendO += 1 / (Math.max(2, directZ.length));
      for (let i = 0; i < 3; i++) {
          let sourcev = String.fromCharCode(117,110,105,120,95,103,95,54,53,0);
          let whitebellt = 5.0;
          let singleD: Map<any, any> = new Map([[String.fromCharCode(98,114,101,97,107,95,51,95,50,57,0),String.fromCharCode(112,114,101,100,105,99,116,105,118,101,95,118,95,53,49,0)], [String.fromCharCode(100,95,56,57,95,97,117,103,109,101,110,116,0),String.fromCharCode(113,105,97,110,95,105,95,55,53,0)], [String.fromCharCode(105,110,116,101,114,114,117,112,116,105,98,108,101,95,108,95,56,52,0),String.fromCharCode(114,101,108,97,121,95,116,95,55,55,0)]]);
         iconfeedback4 = [3 * directZ.length];
         sourcev += "2";
         whitebellt -= sourcev.length;
         singleD = new Map([[`${singleD.size}`, singleD.size]]);
      }
      if (iconfeedback4.includes(resendO)) {
          let refreshG: Map<any, any> = new Map([[String.fromCharCode(113,95,57,55,95,120,99,104,103,0),false ], [String.fromCharCode(103,109,104,100,95,116,95,54,53,0),false ]]);
         resendO *= 1;
         refreshG = new Map([[`${refreshG.size}`, 3]]);
      }
         directZ = `${directZ.length}`;
      let topict = 8075894 >= iconfeedback4.length;
      do {
          let redgoalF = 5.0;
          let iconcalendarv = false;
         iconfeedback4.push(parseInt(`${resendO}`));
         redgoalF *= parseFloat(`${3 ^ parseInt(`${redgoalF}`)}`);
         iconcalendarv = !iconcalendarv;
         if (topict) {
            break;
         }
      } while ((2 < directZ.length) && topict);
      if (2.41 > (iconfeedback4.length / (Math.max(3, resendO))) || 2.73 > (resendO / (Math.max(2.41, 4)))) {
          let iconsettingj = String.fromCharCode(103,114,97,112,104,99,121,99,108,101,115,95,112,95,55,52,0);
         resendO += 3 << (Math.min(1, Math.abs(parseInt(`${resendO}`))));
         iconsettingj = `${iconsettingj.length | iconsettingj.length}`;
      }
      let skip5 = 8135015.0 >= resendO;
      do {
          let icondefaultthumbnailR = String.fromCharCode(112,95,53,54,95,115,104,111,114,116,0);
         resendO -= parseInt(`${resendO}`) - directZ.length;
         icondefaultthumbnailR += `${icondefaultthumbnailR.length * icondefaultthumbnailR.length}`;
         if (skip5) {
            break;
         }
      } while (skip5 && ((directZ.length | 1) > 3 || 5.85 > (directZ.length * resendO)));
         directZ += "3";
      libhermes9 = `${parseInt(`${resendO}`)}`;
       let flipperZ = 1.0;
      let iconnotificationnewh = 8643984.0 <= flipperZ;
      do {
         flipperZ *= parseInt(`${flipperZ}`) + 3;
         if (iconnotificationnewh) {
            break;
         }
      } while (iconnotificationnewh && (flipperZ > 3.78));
         flipperZ /= Math.max(parseInt(`${flipperZ}`) - parseInt(`${flipperZ}`), 4);
         flipperZ /= Math.max(5, parseInt(`${flipperZ}`) & parseInt(`${flipperZ}`));
      pushR = `${anythinkG.length - parseInt(`${arrowrightwithtailu}`)}`;
       let iconpipexpand_ = String.fromCharCode(99,111,115,116,115,95,110,95,51,48,0);
       let clubP = true;
      for (let j = 0; j < 3; j++) {
         iconpipexpand_ += `${(2 & (clubP ? 5 : 1))}`;
      }
       let bggradientS = String.fromCharCode(105,95,51,48,95,107,101,109,112,102,0);
       let renewx = 1.0;
       let promotion7 = 1.0;
      while (clubP || 5 < iconpipexpand_.length) {
         clubP = (3 >= ((!clubP ? 3 : iconpipexpand_.length) & iconpipexpand_.length));
         break;
      }
          let iconrightorangeu = 3.0;
          let backv = 1.0;
         bggradientS += `${parseInt(`${renewx}`)}`;
         iconrightorangeu *= parseFloat(`${parseInt(`${backv}`)}`);
         backv /= Math.max(parseInt(`${backv}`) * 3, 2);
      if (promotion7 == 1.71) {
         clubP = renewx <= 74.50 || clubP;
      }
      bufferk += `${((clubP ? 3 : 3) / 3)}`;
      statisticsactiveG += `${loadingspinnerB.length}`;
   if (!pushR.endsWith(`${anythinkG.length}`)) {
      pushR = `${3 * libhermes9.length}`;
   }
    setLoginValue('');

   while (bufferk != loadingspinnerB) {
      loadingspinnerB += `${(String.fromCharCode(113,0) == pushR ? assets6 : pushR.length)}`;
      break;
   }
       let livenodatabgimgw = 1.0;
         livenodatabgimgw /= Math.max(1, parseInt(`${livenodatabgimgw}`));
         livenodatabgimgw -= parseInt(`${livenodatabgimgw}`);
      for (let o = 0; o < 3; o++) {
         livenodatabgimgw -= parseInt(`${livenodatabgimgw}`) * parseInt(`${livenodatabgimgw}`);
      }
      statisticsactiveG += `${parseInt(`${livenodatabgimgw}`) / (Math.max(2, assets6))}`;
   for (let j = 0; j < 2; j++) {
       let gemfileJ: Map<any, any> = new Map([[String.fromCharCode(100,95,54,48,0),391], [String.fromCharCode(112,97,116,116,101,114,110,115,95,122,95,50,55,0),637], [String.fromCharCode(110,101,97,114,98,121,95,112,95,49,50,0),367]]);
       let largey: Array<any> = [String.fromCharCode(119,95,55,48,95,100,114,97,119,103,114,105,100,0), String.fromCharCode(97,95,53,52,95,118,112,100,97,116,97,0), String.fromCharCode(115,121,115,99,116,108,95,117,95,49,56,0)];
       let dplusx: Map<any, any> = new Map([[String.fromCharCode(110,95,56,48,95,117,110,119,114,97,112,0),false ], [String.fromCharCode(104,112,97,114,97,109,115,95,111,95,52,0),false ]]);
       let hometeamfieldj = String.fromCharCode(98,114,97,99,101,95,121,95,52,49,0);
       let favicons = true;
         hometeamfieldj += `${gemfileJ.size}`;
      if (2 > (2 | gemfileJ.size)) {
         gemfileJ.set(`${favicons}`, ((favicons ? 5 : 1) / (Math.max(largey.length, 9))));
      }
         hometeamfieldj = `${dplusx.size}`;
      while (hometeamfieldj.includes(`${favicons}`)) {
         hometeamfieldj = `${hometeamfieldj.length}`;
         break;
      }
         gemfileJ.set(`${favicons}`, ((favicons ? 2 : 1) ^ 3));
      let episodesI = 9897206 >= dplusx.size;
      do {
          let empty5 = String.fromCharCode(115,104,111,114,116,95,106,95,54,56,0);
          let flagQ = String.fromCharCode(105,95,50,50,95,98,97,99,107,115,112,97,99,101,0);
          let l_unlockp = String.fromCharCode(112,95,49,54,95,104,115,99,97,108,101,114,0);
          let benefitJ = true;
         dplusx.set(empty5, hometeamfieldj.length + 3);
         empty5 += `${l_unlockp.length}`;
         flagQ += `${l_unlockp.length}`;
         benefitJ = l_unlockp.length == flagQ.length;
         if (episodesI) {
            break;
         }
      } while ((1 < dplusx.size && 5 < (1 - dplusx.size)) && episodesI);
      let dplush = String.fromCharCode(108,49,101,116,116,120,0) == hometeamfieldj;
      do {
         hometeamfieldj += `${largey.length}`;
         if (dplush) {
            break;
         }
      } while (dplush && (hometeamfieldj.length > 3));
      let mimoa = largey.length >= 8181270;
      do {
          let subin3 = 0.0;
         largey = [2];
         subin3 += parseInt(`${subin3}`);
         if (mimoa) {
            break;
         }
      } while (mimoa && (!Array.from(dplusx.keys()).includes(`${largey.length}`)));
      for (let p = 0; p < 2; p++) {
          let searchr = 5;
         favicons = searchr < hometeamfieldj.length;
      }
       let delegate_l5y = true;
       let libavformatA = false;
      while (delegate_l5y) {
         delegate_l5y = largey.length <= gemfileJ.size;
         break;
      }
      for (let h = 0; h < 1; h++) {
          let xvode = false;
          let malaysia1: Array<any> = [String.fromCharCode(102,95,55,48,95,114,101,102,105,110,101,100,0), String.fromCharCode(118,97,114,105,97,110,99,101,115,95,55,95,51,48,0)];
         dplusx.set(hometeamfieldj, hometeamfieldj.length - 2);
         xvode = xvode || malaysia1.length > 51;
         malaysia1.push(malaysia1.length);
      }
       let whiteo = String.fromCharCode(99,111,109,112,97,114,101,114,115,95,111,95,57,51,0);
      for (let y = 0; y < 3; y++) {
         whiteo += `${dplusx.size << (Math.min(Math.abs(1), 1))}`;
      }
         delegate_l5y = (((favicons ? largey.length : 6) / (Math.max(9, largey.length))) == 6);
      pushR += `${assets6}`;
   }
      assets6 %= Math.max(3, bufferk.length << (Math.min(pushR.length, 3)));
   let homeiconM = statisticsactiveG == String.fromCharCode(111,105,119,100,114,57,56,122,113,0);
   do {
       let basketballplayerplaceholderY = 1.0;
      for (let u = 0; u < 2; u++) {
         basketballplayerplaceholderY += parseFloat(`${parseInt(`${basketballplayerplaceholderY}`) >> (Math.min(3, Math.abs(parseInt(`${basketballplayerplaceholderY}`))))}`);
      }
          let plusQ = 1;
          let binddatasl: Array<any> = [109, 76];
         basketballplayerplaceholderY += parseFloat(`${plusQ ^ binddatasl.length}`);
         basketballplayerplaceholderY *= parseFloat(`${parseInt(`${basketballplayerplaceholderY}`) - parseInt(`${basketballplayerplaceholderY}`)}`);
      statisticsactiveG += `${parseInt(`${smallg}`)}`;
      if (homeiconM) {
         break;
      }
   } while ((libhermes9 != String.fromCharCode(112,0) && statisticsactiveG == String.fromCharCode(104,0)) && homeiconM);
   while ((anythinkG.length + libhermes9.length) == 2 || 2 == (libhermes9.length + anythinkG.length)) {
      anythinkG.push(statisticsactiveG.length);
      break;
   }
    setReferralCode('');

      diceH += `${thumbnail_.length ^ 2}`;
   let cleard = loadingspinnerB.length >= 6313742;
   do {
       let matchE = 0.0;
       let profileu = 2.0;
       let referrern = true;
       let mathF = String.fromCharCode(100,105,103,101,115,116,115,95,55,95,55,0);
       let gifgoalbgK = 5;
          let eighteenY: Array<any> = [990, 373, 578];
          let hejib = true;
         gifgoalbgK *= ((referrern ? 5 : 2) % (Math.max(parseInt(`${profileu}`), 1)));
         eighteenY = [eighteenY.length << (Math.min(Math.abs(3), 5))];
         hejib = (84 > ((hejib ? 84 : eighteenY.length) + eighteenY.length));
      while (!mathF.endsWith(`${matchE}`)) {
         mathF = `${((referrern ? 4 : 2) - 2)}`;
         break;
      }
      if ((1 / (Math.max(2, profileu))) >= 4.69) {
         matchE *= 2 >> (Math.min(Math.abs(parseInt(`${matchE}`)), 5));
      }
      let bufferT = 5535152 >= mathF.length;
      do {
         mathF = `${((referrern ? 1 : 3) - mathF.length)}`;
         if (bufferT) {
            break;
         }
      } while ((3.23 <= (1.51 + profileu)) && bufferT);
      if (mathF.includes(`${gifgoalbgK}`)) {
         gifgoalbgK *= ((referrern ? 1 : 1));
      }
         mathF += `${parseInt(`${profileu}`) << (Math.min(4, Math.abs(3)))}`;
         mathF += `${parseInt(`${matchE}`) / 1}`;
          let whitetickg = String.fromCharCode(120,95,50,54,95,115,109,97,99,107,101,114,0);
          let volumee: Array<any> = [88, 673, 205];
         referrern = mathF.length >= 23;
         whitetickg = `${(whitetickg == String.fromCharCode(85,0) ? whitetickg.length : volumee.length)}`;
         volumee = [whitetickg.length];
      if ((5.72 * profileu) > 1.97 || 5.99 > (matchE * 5.72)) {
         matchE *= gifgoalbgK % (Math.max(mathF.length, 10));
      }
      if (1.84 == (matchE * profileu)) {
         matchE -= parseInt(`${profileu}`) << (Math.min(1, Math.abs(1)));
      }
         matchE *= mathF.length << (Math.min(Math.abs(2), 2));
      while (2 < (gifgoalbgK % (Math.max(2, 9)))) {
         mathF = `${gifgoalbgK}`;
         break;
      }
         referrern = profileu == 41.52 && 90 == mathF.length;
      let inouttargetyellowE = matchE <= 8963051.0;
      do {
          let baselineK = 4;
          let stepn = true;
          let streaming9 = 1;
          let awayplayerd = String.fromCharCode(105,95,53,53,95,101,110,99,111,100,101,105,110,116,114,97,0);
         matchE *= 2 - parseInt(`${matchE}`);
         baselineK >>= Math.min(5, Math.abs(streaming9));
         stepn = stepn || streaming9 == 46;
         awayplayerd += `${(String.fromCharCode(70,0) == awayplayerd ? baselineK : awayplayerd.length)}`;
         if (inouttargetyellowE) {
            break;
         }
      } while (inouttargetyellowE && (2 == (parseInt(`${matchE}`) - mathF.length) || 4.94 == (mathF.length - matchE)));
      if (4 > (gifgoalbgK * parseInt(`${matchE}`)) && (matchE * gifgoalbgK) > 2.20) {
          let download3 = 5.0;
          let yellowtored_ = String.fromCharCode(112,101,114,115,112,95,102,95,55,52,0);
         matchE *= 1;
         download3 /= Math.max(3, parseFloat(`${parseInt(`${download3}`) | yellowtored_.length}`));
         yellowtored_ += "2";
      }
      loadingspinnerB = `${(bufferk == String.fromCharCode(102,0) ? bufferk.length : parseInt(`${smallg}`))}`;
      if (cleard) {
         break;
      }
   } while ((loadingspinnerB.endsWith(`${anythinkG.length}`)) && cleard);
   while (4 == statisticsactiveG.length || thumbnail_.length == 4) {
      thumbnail_ += "1";
      break;
   }
   while (!loadingspinnerB.includes(diceH)) {
       let arrowupZ: Array<any> = [344, 722];
       let basketballdetailsbgH = 3.0;
         arrowupZ = [2 / (Math.max(2, parseInt(`${basketballdetailsbgH}`)))];
       let uimanagerw = String.fromCharCode(116,111,120,121,122,95,108,95,49,51,0);
       let about2 = String.fromCharCode(112,107,116,104,100,114,95,54,95,52,51,0);
         arrowupZ = [1];
         about2 += "2";
         about2 = "1";
      for (let u = 0; u < 3; u++) {
         basketballdetailsbgH *= parseFloat(`${uimanagerw.length}`);
      }
      loadingspinnerB += `${parseInt(`${smallg}`)}`;
      break;
   }
      arrowrightwithtailu *= (libhermes9 == String.fromCharCode(100,0) ? loadingspinnerB.length : libhermes9.length);
   for (let z = 0; z < 2; z++) {
       let statsnomoredataa = 3.0;
       let iconwatchnowS = String.fromCharCode(115,121,109,109,101,116,114,105,99,95,115,95,50,50,0);
       let yellowanimationlivec = String.fromCharCode(97,108,115,111,95,100,95,55,57,0);
         yellowanimationlivec += `${(String.fromCharCode(54,0) == iconwatchnowS ? parseInt(`${statsnomoredataa}`) : iconwatchnowS.length)}`;
      if ((iconwatchnowS.length * 5) == 2 || 2 == (5 * iconwatchnowS.length)) {
         statsnomoredataa -= (iconwatchnowS == String.fromCharCode(109,0) ? parseInt(`${statsnomoredataa}`) : iconwatchnowS.length);
      }
         iconwatchnowS = `${parseInt(`${statsnomoredataa}`) - iconwatchnowS.length}`;
      for (let p = 0; p < 3; p++) {
         statsnomoredataa += yellowanimationlivec.length;
      }
         iconwatchnowS += `${(yellowanimationlivec == String.fromCharCode(117,0) ? yellowanimationlivec.length : iconwatchnowS.length)}`;
      smallg -= 1;
   }
    setLoginValueErrMsg(null);

      diceH = "1";
   if (2 >= statisticsactiveG.length) {
      thumbnail_ += `${loadingspinnerB.length | 3}`;
   }
      anythinkG.push(3);
      anythinkG = [statisticsactiveG.length];
   let reminderg = String.fromCharCode(105,100,109,57,0) == rncorez;
   do {
      rncorez = `${delegate_hO.size}`;
      if (reminderg) {
         break;
      }
   } while (reminderg && (rncorez.length >= 2));
   let anytimev = String.fromCharCode(113,51,50,106,100,57,112,0) == statisticsactiveG;
   do {
      statisticsactiveG = "3";
      if (anytimev) {
         break;
      }
   } while (anytimev && ((4 << (Math.min(1, Math.abs(assets6)))) > 2 || 3 > (4 << (Math.min(5, statisticsactiveG.length)))));
    setReferralCodeErrMsg(null);

   for (let a = 0; a < 3; a++) {
       let tooltipsO = String.fromCharCode(109,112,106,112,101,103,95,105,95,53,52,0);
       let footballfiledlayoutZ = String.fromCharCode(109,95,55,55,95,109,97,107,101,0);
       let iconpipshrinkm = 4;
         iconpipshrinkm |= 3;
          let policyI = 2.0;
          let fieldg = String.fromCharCode(106,95,54,54,95,100,101,114,101,102,0);
          let short__q: Map<any, any> = new Map([[String.fromCharCode(101,95,51,51,95,117,110,99,104,97,110,103,101,100,0),688], [String.fromCharCode(103,95,56,49,95,105,110,100,101,112,101,110,100,101,110,99,101,0),449], [String.fromCharCode(111,112,99,111,100,101,115,95,112,95,52,53,0),623]]);
         footballfiledlayoutZ = `${parseInt(`${policyI}`)}`;
         policyI += parseFloat(`${fieldg.length | short__q.size}`);
         fieldg = `${fieldg.length / 2}`;
         short__q = new Map([[`${short__q.size}`, short__q.size - 1]]);
          let trophyR = 2.0;
          let airbnbstarselectedU = 4.0;
          let dacccfaabfbcbadeebddcabacdffdbw: Array<any> = [621, 965, 658];
         iconpipshrinkm |= tooltipsO.length;
         trophyR += parseFloat(`${dacccfaabfbcbadeebddcabacdffdbw.length}`);
         airbnbstarselectedU /= Math.max(parseInt(`${trophyR}`), 1);
         dacccfaabfbcbadeebddcabacdffdbw.push(dacccfaabfbcbadeebddcabacdffdbw.length & parseInt(`${airbnbstarselectedU}`));
          let mimoQ: Map<any, any> = new Map([[String.fromCharCode(114,95,57,56,95,99,108,111,115,101,0),true ], [String.fromCharCode(100,95,57,52,95,114,101,116,114,121,0),true ]]);
          let hometeamfield6: Array<any> = [471, 920];
         tooltipsO += `${tooltipsO.length ^ footballfiledlayoutZ.length}`;
         mimoQ.set(`${hometeamfield6.length}`, hometeamfield6.length >> (Math.min(5, Math.abs(mimoQ.size))));
          let delegate_0O: Map<any, any> = new Map([[String.fromCharCode(105,110,108,105,103,104,116,95,108,95,53,0),238], [String.fromCharCode(99,111,110,100,95,50,95,51,55,0),948]]);
         tooltipsO = `${tooltipsO.length}`;
         delegate_0O = new Map([[`${delegate_0O.size}`, 1]]);
      while (!footballfiledlayoutZ.includes(`${iconpipshrinkm}`)) {
          let share_ = String.fromCharCode(109,95,53,49,95,104,101,118,99,0);
          let runtimescheduler2: Array<any> = [122, 22, 185];
          let iconarrowleftA = String.fromCharCode(114,101,116,97,105,110,115,95,54,95,57,56,0);
          let topicM = 2;
          let arrowdownI = String.fromCharCode(100,95,55,50,95,100,111,119,110,119,97,114,100,0);
         footballfiledlayoutZ = `${iconpipshrinkm >> (Math.min(Math.abs(2), 1))}`;
         share_ = `${share_.length | 2}`;
         runtimescheduler2.push(share_.length);
         iconarrowleftA = `${3 - topicM}`;
         topicM <<= Math.min(Math.abs((iconarrowleftA == String.fromCharCode(74,0) ? iconarrowleftA.length : runtimescheduler2.length)), 1);
         arrowdownI += `${share_.length | runtimescheduler2.length}`;
         break;
      }
      let iconfeedbackC = tooltipsO == String.fromCharCode(55,107,103,104,102,98,101,110,0);
      do {
         tooltipsO += `${tooltipsO.length}`;
         if (iconfeedbackC) {
            break;
         }
      } while ((tooltipsO.length == footballfiledlayoutZ.length) && iconfeedbackC);
         iconpipshrinkm ^= footballfiledlayoutZ.length;
      let referrerm = tooltipsO.length >= 7076541;
      do {
         tooltipsO = "1";
         if (referrerm) {
            break;
         }
      } while (referrerm && (2 < (1 * tooltipsO.length) && (1 * tooltipsO.length) < 2));
      thumbnail_ += `${anythinkG.length}`;
   }
      thumbnail_ += "2";
   if (!libhermes9.startsWith(`${thumbnail_.length}`)) {
      thumbnail_ += `${parseInt(`${smallg}`) << (Math.min(4, Math.abs(parseInt(`${arrowrightwithtailu}`))))}`;
   }
      anythinkG = [parseInt(`${arrowrightwithtailu}`) >> (Math.min(thumbnail_.length, 4))];
   if (4 > delegate_hO.size) {
      delegate_hO.set(rncorez, (rncorez == String.fromCharCode(121,0) ? assets6 : rncorez.length));
   }
      anythinkG = [libhermes9.length + 1];
    setReadTermNCondition(false);

   if (diceH.length > libhermes9.length) {
      diceH = `${2 + loadingspinnerB.length}`;
   }
   for (let r = 0; r < 1; r++) {
       let iconclosewhitebgm = 2.0;
       let lang0 = String.fromCharCode(116,97,100,100,95,107,95,51,0);
      while (!lang0.includes(`${iconclosewhitebgm}`)) {
         iconclosewhitebgm += parseFloat(`${parseInt(`${iconclosewhitebgm}`) >> (Math.min(Math.abs(1), 3))}`);
         break;
      }
         iconclosewhitebgm /= Math.max(1, (parseFloat(`${String.fromCharCode(90,0) == lang0 ? parseInt(`${iconclosewhitebgm}`) : lang0.length}`)));
          let filea = 0.0;
         iconclosewhitebgm -= parseFloat(`${lang0.length >> (Math.min(4, Math.abs(parseInt(`${filea}`))))}`);
       let enewarchdefaults2 = 0.0;
       let rulesO: Map<any, any> = new Map([[String.fromCharCode(100,110,111,119,95,97,95,56,52,0),String.fromCharCode(99,104,101,99,107,97,115,109,95,116,95,53,0)], [String.fromCharCode(103,95,56,50,95,104,105,100,99,116,0),String.fromCharCode(121,95,54,48,95,99,104,117,110,107,0)], [String.fromCharCode(116,95,56,48,95,112,114,111,114,101,115,100,115,112,0),String.fromCharCode(112,95,52,54,95,109,105,115,109,97,116,99,104,0)]]);
         iconclosewhitebgm -= parseFloat(`${rulesO.size & 1}`);
      delegate_hO = new Map([[`${smallg}`, parseInt(`${smallg}`)]]);
   }
      statisticsactiveG += `${(String.fromCharCode(86,0) == bufferk ? parseInt(`${arrowrightwithtailu}`) : bufferk.length)}`;
       let homef = 3;
       let header6 = String.fromCharCode(117,95,52,48,95,114,101,115,111,108,117,116,105,111,110,115,0);
       let sourceC = true;
         homef *= 2 / (Math.max(homef, 10));
      for (let p = 0; p < 3; p++) {
         header6 = `${((sourceC ? 1 : 3) % (Math.max(header6.length, 9)))}`;
      }
         sourceC = header6.length >= 97;
      let teamM = 7130169 <= header6.length;
      do {
          let emptyO = String.fromCharCode(107,95,52,48,95,118,105,100,101,111,105,110,102,111,104,101,97,100,101,114,0);
          let libtanS: Array<any> = [266, 964, 943];
         header6 += `${((sourceC ? 2 : 2) >> (Math.min(Math.abs(2), 4)))}`;
         emptyO = `${emptyO.length}`;
         libtanS.push((emptyO == String.fromCharCode(48,0) ? emptyO.length : libtanS.length));
         if (teamM) {
            break;
         }
      } while ((header6.length == 5) && teamM);
          let mappingO = String.fromCharCode(104,95,49,48,48,0);
          let eyecloseh = 0.0;
          let arrowrightwithtailP: Map<any, any> = new Map([[String.fromCharCode(121,95,52,54,95,103,101,110,101,114,105,99,0),666], [String.fromCharCode(112,111,105,110,116,115,95,119,95,49,50,0),771], [String.fromCharCode(109,95,55,51,95,100,116,115,0),801]]);
         homef *= (parseInt(`${eyecloseh}`) / (Math.max(3, (sourceC ? 5 : 2))));
         mappingO += `${mappingO.length * 3}`;
         eyecloseh /= Math.max((String.fromCharCode(66,0) == mappingO ? arrowrightwithtailP.size : mappingO.length), 3);
         arrowrightwithtailP = new Map([[`${arrowrightwithtailP.size}`, (String.fromCharCode(66,0) == mappingO ? mappingO.length : arrowrightwithtailP.size)]]);
      smallg += statisticsactiveG.length;
   if (pushR.startsWith(`${arrowrightwithtailu}`)) {
      pushR += `${thumbnail_.length}`;
   }
   if (assets6 <= 2) {
      assets6 ^= parseInt(`${arrowrightwithtailu}`) * 3;
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
       let p_playerO: Map<any, any> = new Map([[String.fromCharCode(113,95,55,51,95,103,114,97,118,105,116,121,0),442], [String.fromCharCode(107,95,51,50,95,105,110,116,101,114,97,99,116,105,111,110,0),997], [String.fromCharCode(99,111,110,116,114,111,108,108,101,114,115,95,111,95,52,53,0),508]]);
    let encryptH: Map<any, any> = new Map([[String.fromCharCode(105,110,118,115,98,111,120,95,121,95,52,48,0),false ], [String.fromCharCode(118,105,115,105,116,111,114,95,50,95,49,48,48,0),true ], [String.fromCharCode(113,95,50,51,95,105,110,116,101,114,102,97,99,101,0),true ]]);
    let homeinactiveB = String.fromCharCode(112,95,53,54,95,118,97,108,117,101,0);
    let filea = false;
    let footballe: Array<any> = [939, 609];
    let grayG: Map<any, any> = new Map([[String.fromCharCode(101,95,55,54,95,115,100,112,0),27], [String.fromCharCode(101,95,49,48,48,95,109,97,114,107,117,112,0),261]]);
    let issubD = 5.0;
    let airbnbstarselectedI = String.fromCharCode(120,95,54,56,95,115,117,98,102,114,97,109,101,115,0);
    let unimplementedviewc = String.fromCharCode(115,116,114,100,117,112,95,56,95,56,53,0);
    let iconmore7 = 0.0;
    let watchnowbgO = false;
    let chatN = 3.0;
    let vertical8 = String.fromCharCode(114,101,97,112,95,98,95,49,49,0);
    let awayiconH: Map<any, any> = new Map([[String.fromCharCode(111,99,116,101,116,115,95,49,95,49,55,0),String.fromCharCode(107,101,121,119,111,114,100,115,95,118,95,54,54,0)], [String.fromCharCode(101,95,51,56,95,107,101,101,112,97,108,105,118,101,0),String.fromCharCode(120,95,56,51,95,101,120,112,111,110,101,110,116,0)]]);
    let filledG: Array<any> = [String.fromCharCode(120,95,50,50,95,100,101,114,105,118,101,0), String.fromCharCode(99,95,57,48,95,101,118,97,108,102,117,110,99,0), String.fromCharCode(116,95,55,49,95,101,105,103,104,116,115,118,120,0)];
    let hejiO = String.fromCharCode(102,95,56,53,95,104,105,103,104,98,105,116,115,0);
    let uploadC = 2.0;
   if ((1 / (Math.max(4, footballe.length))) >= 3 || (footballe.length / (Math.max(unimplementedviewc.length, 10))) >= 1) {
      footballe = [(2 | (filea ? 5 : 4))];
   }
       let giflivestreamingb = 1;
       let targeta = false;
       let subs2 = 2.0;
         targeta = giflivestreamingb > 62;
       let dropdownf: Array<any> = [751, 373];
       let anytimed: Array<any> = [645, 178];
         subs2 += giflivestreamingb ^ anytimed.length;
         subs2 *= ((targeta ? 4 : 2) - giflivestreamingb);
          let material_ = String.fromCharCode(108,101,101,119,97,121,95,51,95,57,57,0);
          let bdxadsdkV: Map<any, any> = new Map([[String.fromCharCode(114,95,53,51,95,118,111,116,101,0),171], [String.fromCharCode(107,95,54,95,115,117,112,101,114,0),208], [String.fromCharCode(109,97,105,110,102,117,110,99,95,50,95,54,49,0),90]]);
          let tailn = String.fromCharCode(115,109,105,108,101,95,100,95,53,50,0);
         targeta = subs2 == 45.17;
         material_ = `${(material_ == String.fromCharCode(106,0) ? material_.length : bdxadsdkV.size)}`;
         bdxadsdkV.set(tailn, bdxadsdkV.size);
         tailn += "1";
         subs2 += parseInt(`${subs2}`) & dropdownf.length;
          let malaysia7: Map<any, any> = new Map([[String.fromCharCode(101,95,51,52,95,114,101,113,117,101,115,116,105,110,103,0),568], [String.fromCharCode(115,117,98,109,105,116,95,114,95,55,0),660], [String.fromCharCode(100,101,99,97,121,95,51,95,55,57,0),132]]);
          let videojsd = String.fromCharCode(97,95,57,57,95,99,117,98,101,0);
         giflivestreamingb /= Math.max(anytimed.length, 5);
         malaysia7.set(`${videojsd}`, malaysia7.size);
         videojsd += `${malaysia7.size >> (Math.min(videojsd.length, 1))}`;
       let iconsubssuccesst: Array<any> = [385, 758, 871];
       let untickW: Array<any> = [431, 64];
         giflivestreamingb *= 2;
      footballe.push(airbnbstarselectedI.length ^ 1);
       let china4 = String.fromCharCode(106,95,54,49,95,115,116,97,116,101,115,0);
       let loginsuccessE = 4;
       let tempnodata6: Array<any> = [794, 584];
         china4 = `${china4.length + loginsuccessE}`;
      let whitesmalltick6 = 5251187 <= tempnodata6.length;
      do {
         tempnodata6 = [1 - china4.length];
         if (whitesmalltick6) {
            break;
         }
      } while ((tempnodata6.includes(loginsuccessE)) && whitesmalltick6);
       let gdtadvs = 5.0;
       let w_playerz = 5.0;
       let iconbellactiveq = true;
          let sellmathbackground2: Map<any, any> = new Map([[String.fromCharCode(117,95,51,53,95,108,105,98,99,111,100,101,99,0),String.fromCharCode(115,101,116,97,99,116,105,118,101,107,101,121,95,55,95,52,48,0)], [String.fromCharCode(115,116,97,109,112,95,109,95,50,50,0),String.fromCharCode(115,108,105,99,101,116,121,112,101,95,107,95,51,56,0)], [String.fromCharCode(121,95,51,49,95,100,101,105,110,116,0),String.fromCharCode(101,95,53,56,95,105,100,108,101,0)]]);
          let c_lockP = 0;
         gdtadvs -= tempnodata6.length % (Math.max(china4.length, 1));
         sellmathbackground2.set(`${c_lockP}`, 3);
         c_lockP ^= 1;
      homeinactiveB = `${grayG.size}`;
      unimplementedviewc = `${footballe.length & 3}`;
   if (airbnbstarselectedI.length <= unimplementedviewc.length) {
      unimplementedviewc += `${p_playerO.size * 1}`;
   }
   let handlerg = filea ? !filea : filea;
   do {
      filea = 68 == homeinactiveB.length;
      if (handlerg) {
         break;
      }
   } while (handlerg && (!homeinactiveB.includes(`${filea}`)));
   for (let e = 0; e < 2; e++) {
       let mathJ = true;
       let downloadedy: Array<any> = [367, 891, 93];
       let reactnativejso = String.fromCharCode(106,95,50,54,95,116,104,114,101,101,100,111,115,116,114,0);
         mathJ = reactnativejso.length < 73;
      if (downloadedy.length < 5 || 2 < (downloadedy.length * 5)) {
         mathJ = (((mathJ ? downloadedy.length : 77) % (Math.max(downloadedy.length, 1))) <= 77);
      }
      while (mathJ || reactnativejso.length >= 1) {
         reactnativejso += `${downloadedy.length - reactnativejso.length}`;
         break;
      }
      if (4 < downloadedy.length) {
          let iconbackwhiten = String.fromCharCode(100,97,116,101,95,106,95,55,0);
          let logouty = 1.0;
         downloadedy = [2];
         iconbackwhiten += `${parseInt(`${logouty}`)}`;
         logouty += parseFloat(`${1}`);
      }
         mathJ = downloadedy.length >= 78 && reactnativejso == String.fromCharCode(52,0);
          let sheetv: Array<any> = [String.fromCharCode(109,117,116,101,120,95,49,95,54,51,0), String.fromCharCode(108,95,54,53,95,111,108,100,0), String.fromCharCode(109,97,115,116,101,114,105,110,103,95,105,95,52,56,0)];
         downloadedy = [1 / (Math.max(8, downloadedy.length))];
         sheetv.push(1);
         downloadedy = [((mathJ ? 2 : 3) & 1)];
      let views3 = downloadedy.length <= 7792526;
      do {
         downloadedy = [downloadedy.length];
         if (views3) {
            break;
         }
      } while ((2 <= (reactnativejso.length ^ downloadedy.length)) && views3);
          let yellowvideoliveR = 5.0;
         downloadedy = [(String.fromCharCode(70,0) == reactnativejso ? reactnativejso.length : downloadedy.length)];
         yellowvideoliveR *= parseFloat(`${1}`);
      unimplementedviewc = `${((watchnowbgO ? 5 : 2))}`;
   }
   let libreactn = encryptH.size <= 5689502;
   do {
      encryptH = new Map([[`${iconmore7}`, parseInt(`${iconmore7}`)]]);
      if (libreactn) {
         break;
      }
   } while ((2 > (1 - grayG.size) && (1 - grayG.size) > 2) && libreactn);
      footballe.push((footballe.length | (watchnowbgO ? 2 : 5)));
   for (let m = 0; m < 1; m++) {
       let minivod7 = String.fromCharCode(110,97,108,115,95,108,95,51,50,0);
       let zhengpianW: Array<any> = [151, 729];
       let zinit_eV: Map<any, any> = new Map([[String.fromCharCode(98,101,110,99,104,115,95,112,95,53,55,0),52], [String.fromCharCode(113,95,54,55,95,109,97,112,112,101,100,0),270], [String.fromCharCode(115,112,101,101,99,104,95,102,95,53,51,0),904]]);
       let libavformatO: Map<any, any> = new Map([[String.fromCharCode(101,95,55,53,95,116,101,120,116,0),String.fromCharCode(102,95,55,48,95,108,117,97,0)], [String.fromCharCode(116,97,105,108,115,95,56,95,50,50,0),String.fromCharCode(113,117,97,110,116,105,122,101,114,115,95,102,95,50,52,0)]]);
       let scorepopsoundC = false;
      for (let x = 0; x < 2; x++) {
          let material6: Map<any, any> = new Map([[String.fromCharCode(98,114,101,97,107,115,95,100,95,49,53,0),String.fromCharCode(99,95,57,49,95,116,114,97,102,102,105,99,0)], [String.fromCharCode(115,101,114,118,105,99,101,115,95,48,95,50,0),String.fromCharCode(101,110,104,97,110,99,101,95,53,95,53,57,0)], [String.fromCharCode(105,95,53,53,0),String.fromCharCode(120,95,49,48,48,95,112,97,116,104,109,116,117,0)]]);
          let successA = String.fromCharCode(120,109,112,101,103,95,114,95,49,48,48,0);
         zinit_eV.set(`${zhengpianW.length}`, zhengpianW.length);
         material6.set(`${successA}`, successA.length);
      }
      while (libavformatO.get(`${zinit_eV.size}`) == null) {
         libavformatO = new Map([[`${zhengpianW.length}`, ((scorepopsoundC ? 2 : 2) << (Math.min(zhengpianW.length, 3)))]]);
         break;
      }
          let previewW = String.fromCharCode(104,111,110,101,121,95,52,95,54,55,0);
          let country1 = String.fromCharCode(113,117,97,100,115,95,121,95,50,50,0);
          let schedulerN = 0.0;
         libavformatO.set(previewW, minivod7.length);
         previewW += `${(String.fromCharCode(111,0) == country1 ? country1.length : parseInt(`${schedulerN}`))}`;
         schedulerN -= parseFloat(`${country1.length << (Math.min(Math.abs(3), 5))}`);
      while (libavformatO.get(`${zinit_eV.size}`) == null) {
         libavformatO.set(`${scorepopsoundC}`, 2);
         break;
      }
         scorepopsoundC = minivod7.length >= 62 || scorepopsoundC;
      while (minivod7.endsWith(`${scorepopsoundC}`)) {
         minivod7 = `${libavformatO.size >> (Math.min(Math.abs(3), 1))}`;
         break;
      }
          let long_sxr: Map<any, any> = new Map([[String.fromCharCode(105,95,50,49,95,115,104,111,119,0),String.fromCharCode(100,95,53,48,95,112,114,105,111,114,105,116,121,0)], [String.fromCharCode(112,114,105,118,107,101,121,95,107,95,54,0),String.fromCharCode(117,112,112,101,114,99,97,115,101,95,107,95,56,55,0)]]);
          let colorsM: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,101,116,101,100,95,120,95,57,55,0),String.fromCharCode(115,105,109,112,108,101,115,105,103,110,97,108,95,53,95,51,52,0)], [String.fromCharCode(112,108,116,101,95,115,95,49,49,0),String.fromCharCode(115,97,110,105,116,121,95,110,95,52,57,0)]]);
          let mergerg = 5.0;
         zinit_eV = new Map([[`${libavformatO.size}`, 1 ^ libavformatO.size]]);
         long_sxr.set(`${mergerg}`, colorsM.size >> (Math.min(2, Math.abs(parseInt(`${mergerg}`)))));
         colorsM.set(`${mergerg}`, 3 >> (Math.min(5, Math.abs(parseInt(`${mergerg}`)))));
       let chatroombackgroundH: Array<any> = [String.fromCharCode(103,95,57,57,95,114,115,104,105,102,116,0), String.fromCharCode(116,101,120,101,108,95,55,95,52,55,0), String.fromCharCode(118,95,50,51,95,114,111,119,115,107,105,112,0)];
         chatroombackgroundH.push(libavformatO.size % (Math.max(3, 9)));
         zhengpianW = [zinit_eV.size - 3];
         libavformatO = new Map([[`${zhengpianW.length}`, (String.fromCharCode(65,0) == minivod7 ? minivod7.length : zhengpianW.length)]]);
         chatroombackgroundH.push(chatroombackgroundH.length);
      if (5 == (4 >> (Math.min(3, minivod7.length)))) {
         chatroombackgroundH = [1];
      }
      for (let p = 0; p < 3; p++) {
         libavformatO.set(minivod7, zinit_eV.size);
      }
      while ((1 << (Math.min(1, Math.abs(zinit_eV.size)))) <= 1 && 1 <= (zhengpianW.length << (Math.min(Math.abs(zinit_eV.size), 2)))) {
         zhengpianW.push(minivod7.length % (Math.max(3, 7)));
         break;
      }
      encryptH = new Map([[`${zinit_eV.size}`, zinit_eV.size << (Math.min(zhengpianW.length, 1))]]);
   }
   let rocketY = homeinactiveB.length >= 4948857;
   do {
      homeinactiveB += `${((filea ? 1 : 2))}`;
      if (rocketY) {
         break;
      }
   } while (((p_playerO.size ^ 1) >= 3) && rocketY);
       let reducern: Map<any, any> = new Map([[String.fromCharCode(114,101,109,111,118,101,95,52,95,53,51,0),508], [String.fromCharCode(99,108,111,110,101,95,107,95,50,55,0),131], [String.fromCharCode(106,95,50,56,95,109,97,112,112,105,110,103,115,0),177]]);
       let gmailW = String.fromCharCode(122,95,49,48,48,0);
      while ((gmailW.length | reducern.size) > 3 || 3 > (reducern.size | gmailW.length)) {
         reducern = new Map([[`${reducern.size}`, reducern.size]]);
         break;
      }
         gmailW += `${(String.fromCharCode(70,0) == gmailW ? gmailW.length : reducern.size)}`;
         reducern = new Map([[`${reducern.size}`, gmailW.length * reducern.size]]);
          let predictionactiveG = 5;
         gmailW += `${reducern.size}`;
         predictionactiveG %= Math.max(1, 3);
      for (let z = 0; z < 3; z++) {
         reducern = new Map([[`${reducern.size}`, (String.fromCharCode(49,0) == gmailW ? gmailW.length : reducern.size)]]);
      }
          let floating7 = false;
          let liveendmodallogom = String.fromCharCode(105,110,115,116,97,108,108,95,55,95,56,57,0);
          let selecto = true;
         reducern.set(`${floating7}`, 3);
         liveendmodallogom = `${liveendmodallogom.length}`;
         selecto = liveendmodallogom.length == 45;
      filea = grayG.size <= 97 && 5.10 <= chatN;
   while ((5.25 + chatN) == 3.56) {
      chatN /= Math.max(3, (parseFloat(`${String.fromCharCode(95,0) == homeinactiveB ? homeinactiveB.length : encryptH.size}`)));
      break;
   }
      watchnowbgO = !watchnowbgO;
   let actionP = 7551729.0 <= iconmore7;
   do {
      iconmore7 += encryptH.size;
      if (actionP) {
         break;
      }
   } while ((Array.from(encryptH.keys()).includes(`${iconmore7}`)) && actionP);
      footballe = [parseInt(`${chatN}`)];
       let iconadslinkQ = String.fromCharCode(99,95,57,49,95,100,105,115,97,112,112,101,97,114,101,100,0);
         iconadslinkQ += "1";
         iconadslinkQ += `${iconadslinkQ.length}`;
      let club0 = iconadslinkQ.length <= 5501001;
      do {
          let grayGA = 1;
          let defaultteamR = String.fromCharCode(106,95,50,49,95,117,110,114,101,115,111,108,118,97,98,108,101,0);
          let controln = String.fromCharCode(99,111,108,108,97,116,105,110,103,95,49,95,57,56,0);
          let quest6: Map<any, any> = new Map([[String.fromCharCode(100,95,57,54,95,115,116,114,108,105,107,101,0),910], [String.fromCharCode(104,95,57,51,95,114,101,111,114,100,101,114,101,100,0),932]]);
         iconadslinkQ += `${grayGA | 3}`;
         grayGA <<= Math.min(4, Math.abs((String.fromCharCode(71,0) == defaultteamR ? controln.length : defaultteamR.length)));
         controln += `${2 + controln.length}`;
         quest6 = new Map([[`${quest6.size}`, quest6.size >> (Math.min(controln.length, 5))]]);
         if (club0) {
            break;
         }
      } while (club0 && (iconadslinkQ.length < iconadslinkQ.length));
      airbnbstarselectedI += `${2 << (Math.min(3, iconadslinkQ.length))}`;
   let linkQ = encryptH.size <= 8773627;
   do {
      encryptH.set(`${chatN}`, unimplementedviewc.length - 1);
      if (linkQ) {
         break;
      }
   } while (((encryptH.size % 4) < 2 && 4 < (homeinactiveB.length % (Math.max(1, encryptH.size)))) && linkQ);
   for (let v = 0; v < 2; v++) {
       let dragclosep = String.fromCharCode(105,95,57,54,95,115,117,98,115,101,113,117,101,110,99,101,0);
       let iconstar_ = 2.0;
       let exampleimageA = true;
       let ajax0 = 2.0;
         exampleimageA = !exampleimageA;
      while (!exampleimageA) {
         exampleimageA = !dragclosep.includes(`${exampleimageA}`);
         break;
      }
      for (let r = 0; r < 1; r++) {
         exampleimageA = 47.84 < iconstar_ && !exampleimageA;
      }
       let zoomI = String.fromCharCode(110,95,56,55,95,105,116,115,101,108,102,0);
       let notificationfilledw = String.fromCharCode(97,100,97,112,116,101,114,95,116,95,54,51,0);
         dragclosep += `${notificationfilledw.length}`;
          let listT = String.fromCharCode(117,95,54,52,95,97,114,114,97,121,0);
         exampleimageA = 9.62 <= ajax0;
         listT += "2";
       let typingP = String.fromCharCode(101,95,52,52,95,97,118,115,117,98,116,105,116,108,101,0);
      if (dragclosep.length >= 2) {
         zoomI += `${parseInt(`${ajax0}`)}`;
      }
      let g_countN = 8748327.0 >= ajax0;
      do {
         ajax0 *= 2;
         if (g_countN) {
            break;
         }
      } while ((ajax0 > zoomI.length) && g_countN);
      while (!exampleimageA || (iconstar_ - 1.72) > 5.58) {
         iconstar_ += parseFloat(`${1}`);
         break;
      }
       let profilek = String.fromCharCode(108,95,52,50,95,97,117,100,105,98,105,108,105,116,121,0);
       let formo = String.fromCharCode(116,105,109,101,115,116,97,109,112,95,109,95,57,56,0);
          let mapping8 = false;
          let shrink4 = String.fromCharCode(100,95,53,54,0);
          let arrowright_: Array<any> = [37, 491];
         exampleimageA = mapping8;
         shrink4 += `${1 << (Math.min(2, arrowright_.length))}`;
         arrowright_.push(3);
      iconmore7 *= parseInt(`${ajax0}`);
   }
      chatN += (parseFloat(`${String.fromCharCode(95,0) == airbnbstarselectedI ? airbnbstarselectedI.length : encryptH.size}`));
      issubD *= p_playerO.size << (Math.min(1, Math.abs(parseInt(`${issubD}`))));
      unimplementedviewc = `${parseInt(`${issubD}`) ^ 1}`;
       let brightnessO = String.fromCharCode(118,95,55,57,95,118,101,108,111,99,105,116,121,0);
       let abouta: Map<any, any> = new Map([[String.fromCharCode(112,95,52,49,95,98,114,97,110,99,104,0),228], [String.fromCharCode(112,114,111,98,105,110,103,95,49,95,50,49,0),986], [String.fromCharCode(119,95,55,53,95,109,98,101,100,116,108,115,0),882]]);
       let networkT = String.fromCharCode(116,95,51,56,95,97,110,110,101,120,98,0);
      for (let l = 0; l < 3; l++) {
         abouta = new Map([[`${abouta.size}`, abouta.size << (Math.min(Math.abs(1), 3))]]);
      }
      while (2 == (brightnessO.length + abouta.size)) {
         abouta = new Map([[brightnessO, networkT.length - brightnessO.length]]);
         break;
      }
          let appsx: Map<any, any> = new Map([[String.fromCharCode(111,95,50,52,95,115,105,108,101,110,116,108,121,0),true ], [String.fromCharCode(115,117,98,118,105,100,101,111,95,108,95,50,48,0),false ]]);
          let penaltymatchiconu = String.fromCharCode(121,95,57,57,95,99,104,101,99,107,101,100,0);
          let cataloga = 5.0;
         brightnessO += `${2 | brightnessO.length}`;
         appsx.set(`${cataloga}`, parseInt(`${cataloga}`));
         penaltymatchiconu += `${3 ^ appsx.size}`;
      for (let q = 0; q < 1; q++) {
         networkT = `${(String.fromCharCode(109,0) == brightnessO ? brightnessO.length : abouta.size)}`;
      }
          let iconlogoutQ = 5;
         abouta = new Map([[`${abouta.size}`, networkT.length]]);
         iconlogoutQ += 2;
      let clearY = networkT == String.fromCharCode(112,122,55,0);
      do {
         networkT += "3";
         if (clearY) {
            break;
         }
      } while (clearY && (abouta.size <= 3));
      let modelse = 5087712 >= abouta.size;
      do {
         abouta = new Map([[`${abouta.size}`, 1 | brightnessO.length]]);
         if (modelse) {
            break;
         }
      } while (modelse && ((abouta.size << (Math.min(brightnessO.length, 3))) > 2 && 4 > (2 << (Math.min(3, Math.abs(abouta.size))))));
      let librrcb = String.fromCharCode(121,115,106,106,107,122,102,110,118,110,0) == networkT;
      do {
         networkT = `${(String.fromCharCode(118,0) == brightnessO ? brightnessO.length : networkT.length)}`;
         if (librrcb) {
            break;
         }
      } while ((networkT.endsWith(`${abouta.size}`)) && librrcb);
         networkT = `${abouta.size}`;
      chatN += parseFloat(`${parseInt(`${iconmore7}`) * 3}`);

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
       let nativew = String.fromCharCode(113,95,57,57,95,97,114,99,0);
    let arrow2 = 2.0;
    let catalogI: Array<any> = [932, 22, 134];
    let pointp = String.fromCharCode(113,115,118,100,101,99,95,113,95,56,48,0);
    let whitek = 5;
    let inviten: Array<any> = [56, 85, 932];
    let handlera = String.fromCharCode(97,95,52,48,95,118,101,108,111,99,105,116,121,0);
    let serviceK = String.fromCharCode(110,97,109,101,115,95,99,95,56,48,0);
    let z_centerR = 5.0;
    let z_titleQ = String.fromCharCode(114,101,102,101,114,95,49,95,49,53,0);
    let logoutz: Array<any> = [959, 920];
    let flyerE = String.fromCharCode(100,105,115,116,114,97,99,116,105,111,110,95,103,95,53,56,0);
    let rewardvideoP = String.fromCharCode(99,95,55,50,95,103,114,101,101,100,121,0);
    let math4: Array<any> = [378, 721];
    let homem = 2.0;
   if ((pointp.length | catalogI.length) == 5 || (5 | pointp.length) == 2) {
      pointp += "1";
   }

    if (isSubmitting) return;

   while (serviceK.length == flyerE.length) {
       let clockP: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,108,97,99,101,100,95,48,95,52,0),423], [String.fromCharCode(100,105,115,97,98,108,101,114,95,111,95,49,50,0),185], [String.fromCharCode(120,99,98,103,114,97,98,95,51,95,55,53,0),982]]);
       let mbbidk: Array<any> = [837, 462];
       let placeholder8 = true;
       let modeK = 0;
       let crownz: Map<any, any> = new Map([[String.fromCharCode(117,95,56,57,95,100,105,118,112,111,119,109,0),50], [String.fromCharCode(112,105,110,99,104,105,110,103,95,97,95,56,52,0),541]]);
         modeK &= 3 % (Math.max(7, clockP.size));
       let libaneW = String.fromCharCode(101,95,50,56,95,100,101,116,101,99,116,99,108,111,115,101,0);
       let banner8 = String.fromCharCode(119,95,52,56,95,104,100,99,100,0);
       let brightnessz = 1.0;
       let indicatorU = 3.0;
       let uimanagery: Map<any, any> = new Map([[String.fromCharCode(122,95,51,52,95,101,121,101,115,0),true ], [String.fromCharCode(116,95,50,56,95,118,97,108,115,0),true ], [String.fromCharCode(111,95,50,52,95,104,97,114,109,111,110,105,99,0),false ]]);
       let redirectC: Map<any, any> = new Map([[String.fromCharCode(105,95,52,48,95,117,110,122,116,101,108,108,0),String.fromCharCode(115,105,110,113,102,95,98,95,49,48,48,0)], [String.fromCharCode(103,95,51,53,95,99,111,101,102,102,115,0),String.fromCharCode(111,95,57,57,95,100,117,109,112,101,114,0)], [String.fromCharCode(108,95,53,52,95,104,121,115,116,101,114,101,115,105,115,0),String.fromCharCode(116,104,114,101,101,115,116,97,116,101,95,102,95,53,55,0)]]);
      let whistleorange5 = banner8.length >= 5908858;
      do {
         banner8 = `${2 * banner8.length}`;
         if (whistleorange5) {
            break;
         }
      } while (((banner8.length % (Math.max(1, 5))) == 4) && whistleorange5);
       let release_bgF = String.fromCharCode(101,118,97,108,117,97,116,111,114,95,121,95,54,54,0);
      for (let n = 0; n < 3; n++) {
         brightnessz += 3;
      }
         redirectC.set(`${release_bgF}`, 3);
         modeK *= (mbbidk.length / (Math.max(2, (placeholder8 ? 5 : 5))));
          let rewindl: Array<any> = [181, 25, 722];
         modeK %= Math.max((clockP.size << (Math.min(1, Math.abs((placeholder8 ? 1 : 4))))), 2);
         rewindl.push(rewindl.length);
         crownz.set(banner8, (banner8 == String.fromCharCode(50,0) ? (placeholder8 ? 3 : 2) : banner8.length));
       let indicators = 5;
       let libcxxcomponents_ = 3;
          let gradlew = 5.0;
         placeholder8 = mbbidk.length <= 78;
         gradlew += parseInt(`${gradlew}`);
      for (let y = 0; y < 3; y++) {
         placeholder8 = (1 < (clockP.size << (Math.min(5, Math.abs((placeholder8 ? 1 : clockP.size))))));
      }
          let zoomh = String.fromCharCode(115,97,117,99,101,95,52,95,49,56,0);
          let rightV = 3;
          let trashg = true;
         mbbidk = [2];
         zoomh = "2";
         rightV &= zoomh.length;
         trashg = String.fromCharCode(105,0) == zoomh || 28 == rightV;
      serviceK += `${flyerE.length + 3}`;
      break;
   }

    if (isReadTermNCondition == false) {

      z_centerR -= parseFloat(`${3 + catalogI.length}`);
      wawaNewarchdefaults.showToast('请勾选用户协议和隐私协议');

      flyerE += "2";
      return;

   for (let c = 0; c < 2; c++) {
      inviten = [serviceK.length % 1];
   }
    }

    let userInfo;

   for (let b = 0; b < 3; b++) {
      logoutz.push(parseInt(`${z_centerR}`) % (Math.max(1, flyerE.length)));
   }

    try {

   if (5.92 <= (arrow2 / (Math.max(parseFloat(`${nativew.length}`), 9)))) {
      arrow2 += parseFloat(`${serviceK.length}`);
   }
      await GoogleSignin.hasPlayServices();

   for (let u = 0; u < 3; u++) {
      nativew += `${z_titleQ.length & parseInt(`${z_centerR}`)}`;
   }

      if (await GoogleSignin.isSignedIn()) {

      logoutz = [parseInt(`${z_centerR}`) & 2];
        userInfo = await GoogleSignin.getCurrentUser();
      } else {

       let pathE: Map<any, any> = new Map([[String.fromCharCode(117,110,98,111,117,110,100,95,116,95,56,51,0),409], [String.fromCharCode(102,95,57,50,95,115,97,109,112,108,101,100,0),199], [String.fromCharCode(121,95,55,95,118,99,101,110,99,0),741]]);
       let switch_0N: Array<any> = [405, 276];
          let statsnomoredatan: Array<any> = [442, 464, 615];
         pathE.set(`${switch_0N.length}`, statsnomoredatan.length);
          let positionfieldk = String.fromCharCode(111,95,49,51,95,107,101,121,98,111,97,114,100,0);
          let libreanimated5: Map<any, any> = new Map([[String.fromCharCode(116,95,55,95,112,105,110,0),744], [String.fromCharCode(104,95,48,95,98,97,99,107,105,110,103,0),992]]);
         pathE.set(positionfieldk, positionfieldk.length);
         libreanimated5.set(`${libreanimated5.size}`, libreanimated5.size);
         switch_0N.push(switch_0N.length & 1);
         switch_0N = [pathE.size];
       let upgraden = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,95,112,95,49,57,0);
         upgraden += `${switch_0N.length << (Math.min(3, Math.abs(pathE.size)))}`;
      flyerE += `${nativew.length / 3}`;
        userInfo = await GoogleSignin.signIn();
      }

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        
      } else if (error.code === statusCodes.IN_PROGRESS) {

   let iconsharefriendsk = whitek >= 8931179;
   do {
       let telemetryL = String.fromCharCode(120,95,55,48,95,115,119,105,116,99,104,101,100,0);
      for (let a = 0; a < 3; a++) {
          let benefitW: Array<any> = [94, 293];
          let actionsB = 4.0;
          let componentE = 0.0;
          let promotionu = String.fromCharCode(110,95,50,50,95,103,105,102,115,0);
         telemetryL = `${telemetryL.length / 2}`;
         benefitW = [parseInt(`${actionsB}`)];
         componentE -= parseFloat(`${3}`);
         promotionu = `${parseInt(`${componentE}`) * 2}`;
      }
      for (let e = 0; e < 1; e++) {
         telemetryL += `${telemetryL.length % 2}`;
      }
       let cross0 = String.fromCharCode(116,95,52,54,95,116,116,97,101,110,99,100,115,112,0);
      whitek ^= inviten.length;
      if (iconsharefriendsk) {
         break;
      }
   } while ((inviten.includes(whitek)) && iconsharefriendsk);
        

   let suggestionf = serviceK.length >= 5013636;
   do {
      serviceK += `${1 & inviten.length}`;
      if (suggestionf) {
         break;
      }
   } while ((!nativew.startsWith(serviceK)) && suggestionf);
        wawaNewarchdefaults.showToast('请勿频繁操作');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

   let bridgeQ = logoutz.length <= 5863747;
   do {
       let completeS: Map<any, any> = new Map([[String.fromCharCode(107,95,54,95,101,115,115,105,111,110,0),735], [String.fromCharCode(103,95,54,95,97,108,110,117,109,0),413], [String.fromCharCode(112,95,57,53,95,109,105,99,114,111,100,118,100,0),586]]);
         completeS.set(`${completeS.size}`, 2);
       let borderlessF = 3.0;
      let libane3 = 6534136 >= completeS.size;
      do {
          let ksad1 = 5.0;
          let basketballicon5: Map<any, any> = new Map([[String.fromCharCode(105,112,97,100,100,95,106,95,57,49,0),795], [String.fromCharCode(97,95,53,95,101,108,108,105,112,116,105,99,97,108,0),406], [String.fromCharCode(112,95,50,52,95,105,109,97,103,101,115,0),388]]);
         completeS.set(`${borderlessF}`, completeS.size);
         ksad1 += parseFloat(`${basketballicon5.size - 3}`);
         basketballicon5.set(`${ksad1}`, parseInt(`${ksad1}`) / 3);
         if (libane3) {
            break;
         }
      } while (libane3 && (4.47 == borderlessF));
      logoutz = [serviceK.length];
      if (bridgeQ) {
         break;
      }
   } while (bridgeQ && (1.42 > arrow2));
        

   if (flyerE.length >= inviten.length) {
      inviten = [1 * logoutz.length];
   }
        wawaNewarchdefaults.showToast('谷歌服务获取失败');
      } else {

      pointp = `${catalogI.length | 1}`;
        

       let listK = String.fromCharCode(105,95,57,51,95,109,98,105,110,116,114,97,0);
       let webviewG = String.fromCharCode(115,117,98,115,116,114,105,110,103,115,95,114,95,53,0);
         webviewG += `${3 / (Math.max(1, listK.length))}`;
      while (listK.length > webviewG.length) {
         listK = `${listK.length}`;
         break;
      }
          let pauseg = 3.0;
          let halffieldimagev = String.fromCharCode(100,116,115,109,95,54,95,57,50,0);
          let commentp = String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,95,98,95,51,54,0);
         webviewG = `${listK.length * 3}`;
         pauseg *= parseFloat(`${2}`);
         halffieldimagev = `${halffieldimagev.length / (Math.max(6, parseInt(`${pauseg}`)))}`;
         commentp += `${parseInt(`${pauseg}`) | 3}`;
      let source6 = webviewG.length >= 8361250;
      do {
          let controlsD = String.fromCharCode(102,95,56,52,95,114,101,97,100,105,110,105,116,0);
          let mathl = String.fromCharCode(105,110,116,102,114,95,54,95,53,50,0);
          let neony = String.fromCharCode(99,111,115,105,103,110,97,116,111,114,121,95,122,95,55,0);
          let libsentryn = true;
         webviewG += `${mathl.length / 2}`;
         controlsD = `${neony.length / 3}`;
         mathl = `${controlsD.length}`;
         neony = "1";
         libsentryn = neony == controlsD;
         if (source6) {
            break;
         }
      } while ((webviewG.includes(`${listK.length}`)) && source6);
      let basketballmatchdetailbgZ = webviewG.length <= 8544710;
      do {
          let rewardvideo7 = true;
          let action2 = 2.0;
          let subinp = String.fromCharCode(116,95,50,51,95,115,109,100,109,0);
          let hometeamfield8 = String.fromCharCode(99,97,116,97,112,117,108,116,95,117,95,57,49,0);
         webviewG = `${((rewardvideo7 ? 3 : 5))}`;
         rewardvideo7 = subinp.length <= 89;
         action2 += 2;
         subinp = `${hometeamfield8.length >> (Math.min(2, subinp.length))}`;
         hometeamfield8 = `${subinp.length}`;
         if (basketballmatchdetailbgZ) {
            break;
         }
      } while (basketballmatchdetailbgZ && (listK != String.fromCharCode(117,0)));
      while (listK.length > 3) {
         webviewG += `${listK.length | webviewG.length}`;
         break;
      }
      catalogI.push(inviten.length / (Math.max(3, 8)));
        wawaNewarchdefaults.showToast('登入失败，请稍后再试');
      }
      console.log(error.toString());

   while (2 > (catalogI.length << (Math.min(Math.abs(4), 1)))) {
      whitek += 3 / (Math.max(2, flyerE.length));
      break;
   }
      return;
    }

    if (userInfo === null) {

   let pointJ = z_titleQ == String.fromCharCode(119,109,56,0);
   do {
      z_titleQ += `${z_titleQ.length}`;
      if (pointJ) {
         break;
      }
   } while (pointJ && ((z_titleQ.length * parseInt(`${arrow2}`)) < 3));
      wawaNewarchdefaults.showToast('登入失败，请稍后再试');

      handlera = `${(serviceK == String.fromCharCode(102,0) ? serviceK.length : catalogI.length)}`;
      return;
    }

    try {

   let matchdetailbge = arrow2 >= 7738402.0;
   do {
       let whatsappb = 4.0;
       let sheetx = 3.0;
       let collection_ = 2.0;
         sheetx += parseFloat(`${parseInt(`${whatsappb}`)}`);
      if (1.93 >= (sheetx / (Math.max(4.96, 4)))) {
         sheetx -= parseFloat(`${1}`);
      }
         whatsappb *= parseFloat(`${parseInt(`${collection_}`)}`);
          let uploadF = String.fromCharCode(115,107,105,112,105,110,116,114,97,95,116,95,50,49,0);
         whatsappb *= parseFloat(`${3}`);
         uploadF = `${uploadF.length}`;
          let footballfiledlayoute = String.fromCharCode(115,116,97,98,108,101,95,122,95,57,54,0);
          let iconmegaphonea = 1.0;
         sheetx -= parseFloat(`${1 ^ parseInt(`${collection_}`)}`);
         footballfiledlayoute = "3";
         iconmegaphonea -= parseFloat(`${1 % (Math.max(4, footballfiledlayoute.length))}`);
      while ((sheetx * 5.87) < 2.93 || (collection_ * sheetx) < 5.87) {
          let windi: Array<any> = [304, 696, 800];
          let macauE = 0;
          let updatesd: Map<any, any> = new Map([[String.fromCharCode(112,117,116,115,95,120,95,56,57,0),709], [String.fromCharCode(97,100,100,114,115,95,120,95,50,48,0),216]]);
          let baselinex = 1;
         sheetx -= parseFloat(`${macauE}`);
         windi = [3 * baselinex];
         macauE -= baselinex;
         updatesd.set(`${baselinex}`, windi.length);
         break;
      }
          let halfz = String.fromCharCode(98,111,116,104,95,121,95,55,54,0);
         sheetx *= parseFloat(`${halfz.length}`);
         collection_ *= parseInt(`${sheetx}`);
          let emptyw = 4.0;
          let chinasame2: Array<any> = [String.fromCharCode(99,97,115,101,115,95,121,95,53,56,0), String.fromCharCode(115,101,99,115,95,117,95,56,0)];
          let statsu = String.fromCharCode(101,112,101,108,95,103,95,56,54,0);
         collection_ *= parseInt(`${emptyw}`) << (Math.min(5, Math.abs(3)));
         emptyw += statsu.length;
         chinasame2.push(chinasame2.length);
         statsu += `${chinasame2.length >> (Math.min(Math.abs(1), 1))}`;
      arrow2 -= parseFloat(`${3}`);
      if (matchdetailbge) {
         break;
      }
   } while ((handlera.endsWith(`${arrow2}`)) && matchdetailbge);
      setSubmitting(true);

       let iconclosewhitewithbg8 = 3;
       let icons = 3.0;
       let tail3: Map<any, any> = new Map([[String.fromCharCode(109,95,52,54,95,108,108,118,105,100,100,115,112,0),false ], [String.fromCharCode(114,116,112,112,114,111,116,111,95,99,95,56,51,0),true ]]);
       let bottomM = 0.0;
      while (3.14 == (bottomM - 5.59)) {
         iconclosewhitewithbg8 ^= parseInt(`${icons}`);
         break;
      }
          let fullscreenminb = 5.0;
          let settingR = true;
          let termsn = 3.0;
         bottomM -= parseFloat(`${parseInt(`${bottomM}`) ^ parseInt(`${termsn}`)}`);
         fullscreenminb += parseInt(`${fullscreenminb}`) | 3;
         settingR = fullscreenminb < 38.30;
         termsn += (parseFloat(`${parseInt(`${fullscreenminb}`) % (Math.max(10, (settingR ? 3 : 4)))}`));
          let stylesJ: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,111,115,101,95,99,95,51,49,0),642], [String.fromCharCode(103,101,116,112,97,100,100,114,115,95,120,95,53,49,0),348]]);
          let imagemanager6: Map<any, any> = new Map([[String.fromCharCode(111,95,49,52,95,108,111,117,100,115,112,101,97,107,101,114,0),190], [String.fromCharCode(98,108,97,99,107,115,95,120,95,52,55,0),78]]);
         tail3.set(`${icons}`, 1 + parseInt(`${bottomM}`));
         stylesJ = new Map([[`${stylesJ.size}`, stylesJ.size]]);
         imagemanager6 = new Map([[`${stylesJ.size}`, 3]]);
      if ((5.67 / (Math.max(4, bottomM))) < 2.54) {
         bottomM -= parseFloat(`${iconclosewhitewithbg8 + parseInt(`${bottomM}`)}`);
      }
      let pointn = icons <= 9431297.0;
      do {
          let nativeH = false;
          let static_2bb: Map<any, any> = new Map([[String.fromCharCode(100,97,118,100,95,111,95,51,57,0),String.fromCharCode(99,111,110,102,105,103,117,114,101,100,95,55,95,56,55,0)], [String.fromCharCode(118,95,53,55,95,105,100,99,116,100,115,112,0),String.fromCharCode(112,95,53,53,95,97,109,101,120,0)]]);
          let iconarrowrightorange4: Array<any> = [507, 745];
          let rightQ: Array<any> = [String.fromCharCode(117,116,99,95,117,95,57,51,0), String.fromCharCode(109,97,116,116,101,100,95,101,95,51,0)];
         icons *= parseFloat(`${parseInt(`${icons}`)}`);
         nativeH = iconarrowrightorange4.includes(nativeH);
         static_2bb = new Map([[`${static_2bb.size}`, ((nativeH ? 4 : 2) | static_2bb.size)]]);
         iconarrowrightorange4 = [iconarrowrightorange4.length];
         rightQ.push(3);
         if (pointn) {
            break;
         }
      } while ((Array.from(tail3.keys()).includes(`${icons}`)) && pointn);
         bottomM *= parseFloat(`${parseInt(`${icons}`)}`);
      for (let d = 0; d < 3; d++) {
         icons *= parseFloat(`${tail3.size}`);
      }
      if ((tail3.size / 2) < 1 || 2.30 < (parseFloat(`${tail3.size}`) / (Math.max(9, bottomM)))) {
          let redgoaln = String.fromCharCode(105,110,116,95,98,95,49,49,0);
          let node2 = false;
         tail3 = new Map([[`${node2}`, 3 & parseInt(`${bottomM}`)]]);
         redgoaln = "1";
         node2 = (redgoaln.length * redgoaln.length) <= 34;
      }
      handlera = `${1 ^ whitek}`;

      userInfo = await wawaEvent.signinupUser({
        loginType: 'EMAIL',
        email: userInfo.user.email,
        referralCode: referralCode,
        isGoogleLogin: true,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      GoogleSignin.signOut();

      z_titleQ += `${z_titleQ.length + pointp.length}`;
      wawaNewarchdefaults.showToast(err.toString());

      inviten.push(flyerE.length);
      return;
    } finally {

       let icondownimgE: Array<any> = [339, 47, 365];
          let inouttargetyellowN = true;
          let matchinactive8 = false;
          let screenr = String.fromCharCode(106,95,49,54,95,104,97,110,103,117,112,0);
         icondownimgE.push(icondownimgE.length - 1);
         inouttargetyellowN = screenr.startsWith(`${inouttargetyellowN}`);
         matchinactive8 = screenr.length >= 12;
      while (2 < (4 * icondownimgE.length)) {
          let twitterG = String.fromCharCode(104,95,56,95,99,104,111,105,99,101,115,0);
          let yellowscoreballj = String.fromCharCode(120,95,49,0);
          let roomf = String.fromCharCode(97,98,98,114,95,98,95,57,49,0);
         icondownimgE.push(1 ^ roomf.length);
         twitterG = `${1 << (Math.min(5, twitterG.length))}`;
         yellowscoreballj = `${3 * yellowscoreballj.length}`;
         roomf = `${twitterG.length / 3}`;
         break;
      }
      if (5 < (2 * icondownimgE.length) || (icondownimgE.length * icondownimgE.length) < 2) {
         icondownimgE = [icondownimgE.length];
      }
      whitek &= parseInt(`${arrow2}`);
      setSubmitting(false);

      pointp = `${pointp.length}`;
    }

    const resultData = userInfo.data;

      whitek += flyerE.length;

    const user = wawaLibglog.fromJson(resultData);

   for (let a = 0; a < 2; a++) {
      nativew += `${pointp.length}`;
   }

    await dispatch(addUserAuthState(user));

      z_centerR += parseFloat(`${whitek - 3}`);

    if (userInfo.message.includes("注册成功")) {

   while (serviceK.length > 2) {
      handlera += `${inviten.length}`;
      break;
   }
      navigation.navigate('SetUsername');

    } else if (userInfo.message.includes("登录成功")) {

      catalogI.push(2 | serviceK.length);

      if (user.isVip()) {

       let iconarrowrightblackv: Array<any> = [682, 838, 840];
       let frame_64 = false;
         frame_64 = iconarrowrightblackv.includes(frame_64);
      if (!frame_64) {
         frame_64 = frame_64 || iconarrowrightblackv.length <= 53;
      }
          let iconbellA = String.fromCharCode(103,104,97,115,104,95,108,95,56,50,0);
          let crownx = 1.0;
         iconarrowrightblackv.push(2 | iconbellA.length);
         iconbellA = "3";
         crownx += 3 - parseInt(`${crownx}`);
         iconarrowrightblackv.push(((frame_64 ? 5 : 4) ^ iconarrowrightblackv.length));
          let corex = false;
          let screenJ = String.fromCharCode(112,114,111,100,115,95,50,95,55,51,0);
         iconarrowrightblackv.push(screenJ.length);
         frame_64 = iconarrowrightblackv.length < 60;
      arrow2 += parseFloat(`${2}`);
        await AsyncStorage.setItem("showAds", "false");
      } else {

      pointp += `${handlera.length % 3}`;
        await AsyncStorage.setItem("showAds", "true");
      }

      await dispatch(changeScreenAction('登录成功'));

      logoutz.push(flyerE.length | z_titleQ.length);

      

      catalogI.push((pointp == String.fromCharCode(102,0) ? pointp.length : whitek));
      wawa_dacccfaabfbcbadeebddcabacdffdbc_video.userCenterLoginSuccessTimesAnalytics();

      serviceK += `${3 - nativew.length}`;
      wawaSina.userCenterLoginSuccessTimesAnalytics();

   let countdownu = 9176402 <= whitek;
   do {
      whitek *= whitek % (Math.max(3, 6));
      if (countdownu) {
         break;
      }
   } while (countdownu && ((5 * whitek) == 5 && 5 == (whitek * inviten.length)));

      if (user.isVip()) {

       let libfbu = 4;
       let videobufferloadingP = String.fromCharCode(106,95,50,56,95,117,108,116,105,0);
         libfbu *= 3;
         libfbu %= Math.max(4, videobufferloadingP.length - libfbu);
      for (let a = 0; a < 2; a++) {
          let p_title9 = 0.0;
         libfbu |= libfbu;
         p_title9 *= parseFloat(`${2}`);
      }
      for (let k = 0; k < 3; k++) {
         videobufferloadingP = `${videobufferloadingP.length}`;
      }
       let banner2 = String.fromCharCode(114,95,52,57,95,101,120,116,0);
       let humiditye = String.fromCharCode(114,95,55,50,95,109,97,120,0);
      if ((2 & libfbu) > 5) {
         libfbu -= 3;
      }
      flyerE = `${inviten.length >> (Math.min(serviceK.length, 2))}`;
        wawa_dacccfaabfbcbadeebddcabacdffdbc_video.userCenterVipLoginSuccessTimesAnalytics();
      }
      

       let libswresampleq: Array<any> = [624, 245];
       let iconscheduleE = String.fromCharCode(108,101,114,112,114,103,98,95,112,95,54,53,0);
       let lessa = 3.0;
      while (!libswresampleq.includes(lessa)) {
          let owngoalN = 1;
          let twitterN = String.fromCharCode(112,97,114,99,111,114,95,48,95,52,56,0);
          let tempnodataN = String.fromCharCode(112,95,49,53,95,112,114,105,109,105,116,105,118,101,0);
         lessa += parseFloat(`${iconscheduleE.length / (Math.max(9, twitterN.length))}`);
         owngoalN += owngoalN;
         twitterN += "1";
         tempnodataN += `${tempnodataN.length}`;
         break;
      }
      for (let h = 0; h < 3; h++) {
         iconscheduleE += "1";
      }
      if (2 <= (libswresampleq.length % (Math.max(4, 6))) || (libswresampleq.length - parseInt(`${lessa}`)) <= 4) {
         libswresampleq.push(1 | parseInt(`${lessa}`));
      }
      for (let w = 0; w < 1; w++) {
         iconscheduleE += `${iconscheduleE.length >> (Math.min(4, libswresampleq.length))}`;
      }
          let whatsappE = String.fromCharCode(112,97,99,107,101,116,115,95,55,95,56,57,0);
          let homeactiveF = String.fromCharCode(103,97,109,101,95,117,95,54,49,0);
          let backicone = true;
         iconscheduleE = `${3 & iconscheduleE.length}`;
         whatsappE += `${whatsappE.length}`;
         homeactiveF = `${2 ^ homeactiveF.length}`;
         backicone = (homeactiveF.length >> (Math.min(2, whatsappE.length))) >= 71;
       let pangleG = String.fromCharCode(118,95,57,50,95,100,101,99,111,100,101,0);
      for (let n = 0; n < 1; n++) {
          let greyarrowupg = 3;
          let runtimeschedulerv = false;
         iconscheduleE += `${parseInt(`${lessa}`) ^ 1}`;
         greyarrowupg &= 3;
         runtimeschedulerv = !runtimeschedulerv || greyarrowupg < 15;
      }
         pangleG += `${parseInt(`${lessa}`)}`;
      let huaweio = iconscheduleE == String.fromCharCode(57,103,106,122,48,113,100,0);
      do {
         iconscheduleE = `${iconscheduleE.length}`;
         if (huaweio) {
            break;
         }
      } while (huaweio && ((libswresampleq.length ^ 2) == 4 && (iconscheduleE.length ^ 2) == 1));
      z_titleQ += `${2 % (Math.max(4, parseInt(`${arrow2}`)))}`;

      if (onGooleLoginSuccess) onGooleLoginSuccess();
    }
  }

  const onPressTermNCondition = () => {
       let mbbannero = String.fromCharCode(105,95,55,53,0);
    let homeinactiveO: Map<any, any> = new Map([[String.fromCharCode(115,116,97,116,105,111,110,97,114,105,116,121,95,121,95,57,55,0),233], [String.fromCharCode(102,95,52,56,95,105,109,112,111,115,116,101,114,0),267]]);
    let libfbjniB = 4.0;
    let shootyesgoal0: Map<any, any> = new Map([[String.fromCharCode(103,95,57,54,0),false ], [String.fromCharCode(117,95,54,55,95,114,100,102,116,0),true ], [String.fromCharCode(105,95,57,54,95,116,111,107,101,110,116,120,0),true ]]);
    let defaultteamd: Map<any, any> = new Map([[String.fromCharCode(114,95,54,56,95,101,105,112,118,0),793], [String.fromCharCode(99,97,112,105,116,97,108,105,122,97,116,105,111,110,95,109,95,55,48,0),599], [String.fromCharCode(115,109,107,97,95,107,95,53,49,0),340]]);
    let macauw: Array<any> = [String.fromCharCode(100,101,99,114,101,102,95,115,95,57,50,0), String.fromCharCode(115,116,97,114,116,109,97,114,107,101,114,95,97,95,57,53,0)];
    let soundM = 0.0;
    let iconarrowright9 = true;
   let chartX = 8353066 <= shootyesgoal0.size;
   do {
       let clockj = 3;
       let loginsuccess_ = 1;
       let stationse = 0;
       let sideZ = false;
      if (stationse >= loginsuccess_) {
         stationse &= 3;
      }
      for (let x = 0; x < 2; x++) {
         stationse ^= loginsuccess_ % (Math.max(5, stationse));
      }
       let libcrashsdkp = String.fromCharCode(117,95,54,52,95,103,114,97,110,117,108,101,112,111,115,0);
       let iconnotificationnewH = String.fromCharCode(116,95,51,49,95,105,110,100,97,116,97,0);
          let store4 = 2.0;
          let loadingE = String.fromCharCode(104,119,100,111,119,110,108,111,97,100,95,100,95,55,49,0);
          let plus7: Map<any, any> = new Map([[String.fromCharCode(109,105,108,105,111,110,115,95,119,95,51,52,0),574], [String.fromCharCode(99,95,49,51,95,103,101,116,114,97,110,100,111,109,0),780], [String.fromCharCode(115,112,97,119,110,97,98,108,101,95,53,95,50,51,0),355]]);
         stationse |= 2;
         store4 *= (loadingE == String.fromCharCode(117,0) ? loadingE.length : plus7.size);
         plus7 = new Map([[`${plus7.size}`, 1]]);
      let goaln = String.fromCharCode(56,118,102,113,116,111,120,119,109,0) == iconnotificationnewH;
      do {
         iconnotificationnewH = `${(String.fromCharCode(88,0) == libcrashsdkp ? clockj : libcrashsdkp.length)}`;
         if (goaln) {
            break;
         }
      } while ((4 < clockj) && goaln);
          let stationsG = 1.0;
         stationse %= Math.max(4, libcrashsdkp.length);
         stationsG += parseFloat(`${3 + parseInt(`${stationsG}`)}`);
         stationse *= 3;
      if (!sideZ) {
         stationse ^= 2 * clockj;
      }
          let sportsO = String.fromCharCode(121,95,55,50,95,104,100,115,112,0);
          let nterstitialI = String.fromCharCode(109,95,50,48,95,104,108,115,112,108,97,121,108,105,115,116,0);
          let macaua = String.fromCharCode(107,95,54,49,95,109,117,108,116,120,0);
         loginsuccess_ -= (iconnotificationnewH == String.fromCharCode(117,0) ? iconnotificationnewH.length : nterstitialI.length);
         sportsO = "2";
         nterstitialI = `${macaua.length}`;
         macaua += `${sportsO.length}`;
      for (let b = 0; b < 1; b++) {
          let ksadu = String.fromCharCode(99,104,114,111,109,105,117,109,95,119,95,49,57,0);
          let utilsC = String.fromCharCode(110,101,119,108,121,95,100,95,49,48,0);
         clockj |= 3 + ksadu.length;
         ksadu += "2";
         utilsC = `${3 << (Math.min(5, utilsC.length))}`;
      }
      for (let r = 0; r < 1; r++) {
          let modules2 = 0.0;
          let whitetickw = String.fromCharCode(107,95,57,52,95,109,118,112,114,101,100,0);
         sideZ = libcrashsdkp.endsWith(`${stationse}`);
         modules2 += parseFloat(`${whitetickw.length / (Math.max(6, parseInt(`${modules2}`)))}`);
         whitetickw += `${parseInt(`${modules2}`) + 2}`;
      }
         iconnotificationnewH += `${loginsuccess_ & clockj}`;
      shootyesgoal0.set(`${sideZ}`, (parseInt(`${libfbjniB}`) + (sideZ ? 1 : 4)));
      if (chartX) {
         break;
      }
   } while (chartX && (Array.from(shootyesgoal0.keys()).includes(`${soundM}`)));
   while ((5.31 / (Math.max(6, libfbjniB))) > 4.99) {
      libfbjniB /= Math.max(2, parseFloat(`${2}`));
      break;
   }
   while (!Array.from(shootyesgoal0.values()).includes(macauw.length)) {
      shootyesgoal0 = new Map([[`${homeinactiveO.size}`, homeinactiveO.size - 2]]);
      break;
   }
      mbbannero = "1";
      mbbannero = "1";
   while (macauw.length <= 5) {
      macauw.push(1 % (Math.max(4, shootyesgoal0.size)));
      break;
   }
      shootyesgoal0 = new Map([[`${macauw.length}`, parseInt(`${soundM}`)]]);
      shootyesgoal0 = new Map([[`${macauw.length}`, mbbannero.length]]);
   let z_lockW = 7871571 <= shootyesgoal0.size;
   do {
      shootyesgoal0.set(mbbannero, 1);
      if (z_lockW) {
         break;
      }
   } while ((libfbjniB < 2.5) && z_lockW);
       let referreri = 0.0;
       let notificationfillemptyd = 1.0;
       let recommendationl = 0.0;
          let runtimeschedulerl = false;
         referreri -= 1 - parseInt(`${referreri}`);
         runtimeschedulerl = (runtimeschedulerl ? !runtimeschedulerl : runtimeschedulerl);
         notificationfillemptyd *= parseInt(`${recommendationl}`) & 2;
          let mbjscommonE: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,101,99,116,105,98,108,101,95,121,95,56,57,0),String.fromCharCode(105,95,52,50,95,106,111,105,110,116,0)], [String.fromCharCode(97,101,115,110,105,95,112,95,56,48,0),String.fromCharCode(108,95,52,49,95,100,105,97,108,111,103,117,101,115,0)], [String.fromCharCode(101,110,99,114,121,112,116,101,100,95,113,95,54,50,0),String.fromCharCode(111,112,116,97,114,103,95,108,95,52,53,0)]]);
          let target2: Map<any, any> = new Map([[String.fromCharCode(115,119,114,101,115,97,109,112,108,101,95,57,95,53,51,0),String.fromCharCode(119,95,53,51,95,118,105,116,97,108,105,107,108,105,122,101,0)], [String.fromCharCode(97,114,109,118,95,103,95,56,0),String.fromCharCode(115,115,108,95,101,95,51,52,0)], [String.fromCharCode(99,95,49,48,95,97,112,110,103,0),String.fromCharCode(118,95,56,49,95,107,98,112,115,0)]]);
          let iconbelly = String.fromCharCode(111,99,116,112,111,105,110,116,95,104,95,56,54,0);
         notificationfillemptyd += parseInt(`${recommendationl}`);
         mbjscommonE = new Map([[`${target2.size}`, target2.size]]);
         iconbelly = `${mbjscommonE.size & target2.size}`;
      while ((referreri / (Math.max(2, recommendationl))) == 3.96 || (recommendationl / 3.96) == 3.34) {
         referreri += parseInt(`${recommendationl}`);
         break;
      }
         referreri /= Math.max(2, 4);
         notificationfillemptyd -= 1;
         notificationfillemptyd /= Math.max(4, parseInt(`${recommendationl}`));
      while ((referreri / 5) == 1.28) {
         recommendationl += 2 / (Math.max(parseInt(`${referreri}`), 10));
         break;
      }
         recommendationl -= parseInt(`${referreri}`);
      defaultteamd = new Map([[`${notificationfillemptyd}`, parseInt(`${notificationfillemptyd}`)]]);
   let flagL = 6461869 <= mbbannero.length;
   do {
      mbbannero += "3";
      if (flagL) {
         break;
      }
   } while (flagL && (shootyesgoal0.size >= mbbannero.length));
       let libavformat5 = 5.0;
       let whitesmalltickF = 1.0;
       let handler9 = 3.0;
         handler9 /= Math.max(parseFloat(`${parseInt(`${whitesmalltickF}`)}`), 4);
      if (whitesmalltickF < handler9) {
         whitesmalltickF /= Math.max(4, parseFloat(`${parseInt(`${libavformat5}`)}`));
      }
         whitesmalltickF += parseFloat(`${parseInt(`${libavformat5}`) >> (Math.min(Math.abs(parseInt(`${handler9}`)), 3))}`);
      for (let w = 0; w < 3; w++) {
          let footballfiledlayout7 = String.fromCharCode(110,97,118,105,103,97,116,101,100,95,51,95,57,56,0);
          let ranky = 3.0;
          let basketballawayteamT: Array<any> = [523, 97, 760];
         whitesmalltickF *= parseFloat(`${basketballawayteamT.length & 3}`);
         footballfiledlayout7 += `${parseInt(`${ranky}`) | 1}`;
         ranky *= parseInt(`${ranky}`) % 2;
         basketballawayteamT.push(parseInt(`${ranky}`) >> (Math.min(footballfiledlayout7.length, 1)));
      }
       let black6 = 1.0;
       let temperaturen: Array<any> = [27, 803, 461];
          let drag1 = String.fromCharCode(102,109,116,115,95,121,95,54,54,0);
         temperaturen.push(parseInt(`${whitesmalltickF}`));
         drag1 = `${drag1.length}`;
      if (4.48 >= (handler9 + 5.68) && (handler9 + 5.68) >= 3.49) {
         handler9 *= parseFloat(`${1}`);
      }
          let matchdetailbgz = String.fromCharCode(100,95,54,50,95,114,105,102,102,0);
          let selection7 = 4;
          let predictionbuttonR = 3.0;
         whitesmalltickF += parseFloat(`${parseInt(`${black6}`)}`);
         matchdetailbgz = `${parseInt(`${predictionbuttonR}`)}`;
         selection7 <<= Math.min(5, Math.abs((String.fromCharCode(51,0) == matchdetailbgz ? matchdetailbgz.length : parseInt(`${predictionbuttonR}`))));
      shootyesgoal0.set(`${libfbjniB}`, 2);
      mbbannero = `${shootyesgoal0.size % (Math.max(2, 6))}`;
      macauw.push(macauw.length << (Math.min(Math.abs(3), 1)));
   for (let p = 0; p < 2; p++) {
      soundM += parseFloat(`${defaultteamd.size * shootyesgoal0.size}`);
   }
   for (let i = 0; i < 1; i++) {
       let libcxxcomponents3 = String.fromCharCode(122,95,49,51,95,118,111,116,101,0);
         libcxxcomponents3 = `${1 << (Math.min(4, libcxxcomponents3.length))}`;
         libcxxcomponents3 = `${2 * libcxxcomponents3.length}`;
      let backgroundv = libcxxcomponents3 == String.fromCharCode(57,98,98,101,112,50,104,95,0);
      do {
         libcxxcomponents3 = "1";
         if (backgroundv) {
            break;
         }
      } while ((libcxxcomponents3 == libcxxcomponents3) && backgroundv);
      mbbannero += `${shootyesgoal0.size | 1}`;
   }
   while (!iconarrowright9) {
      homeinactiveO = new Map([[`${macauw.length}`, mbbannero.length]]);
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
       let unfill5 = String.fromCharCode(101,95,57,54,95,112,105,116,99,104,102,105,108,116,101,114,0);
    let libzeusR = String.fromCharCode(97,115,99,111,110,102,95,121,95,54,56,0);
    let orangev: Map<any, any> = new Map([[String.fromCharCode(116,95,55,57,95,108,97,122,121,0),724], [String.fromCharCode(118,95,55,52,95,116,111,117,99,104,101,115,0),671], [String.fromCharCode(116,109,109,98,114,95,100,95,57,52,0),633]]);
    let whitebelln = 4;
    let trash_ = String.fromCharCode(100,95,49,51,95,102,105,108,116,101,114,103,114,97,112,104,0);
    let mountingE = String.fromCharCode(121,100,97,121,95,107,95,53,50,0);
    let nativemoduler = false;
    let statisticsactive7 = true;
    let final_sC = String.fromCharCode(109,95,52,54,95,101,108,115,100,101,99,0);
    let mintegralA = String.fromCharCode(103,95,56,95,108,97,118,117,0);
    let whistleX: Array<any> = [487, 203];
    let constantsY = false;
       let elementsN = 3.0;
       let eighteenv = 3.0;
       let rocket3 = String.fromCharCode(115,95,54,50,95,115,104,97,114,112,101,110,105,110,103,0);
      for (let b = 0; b < 2; b++) {
         eighteenv -= parseInt(`${elementsN}`);
      }
      for (let c = 0; c < 1; c++) {
          let unfilll = String.fromCharCode(99,114,108,100,112,95,103,95,57,50,0);
          let vnewsshareg = String.fromCharCode(106,95,51,48,95,113,112,101,108,100,115,112,0);
          let long__d = 2.0;
         eighteenv *= 2 * unfilll.length;
         unfilll = "3";
         vnewsshareg = "3";
         long__d /= Math.max(parseFloat(`${2 - parseInt(`${long__d}`)}`), 4);
      }
         elementsN *= 1 / (Math.max(1, rocket3.length));
      while (1.27 >= (elementsN * 2.52) || (rocket3.length % 5) >= 5) {
         rocket3 += `${parseInt(`${eighteenv}`)}`;
         break;
      }
         eighteenv -= rocket3.length;
      let interstitialv = 8913214.0 <= eighteenv;
      do {
         eighteenv -= 1 >> (Math.min(Math.abs(parseInt(`${eighteenv}`)), 3));
         if (interstitialv) {
            break;
         }
      } while (((4 * rocket3.length) <= 1 && 4 <= (parseInt(`${eighteenv}`) - rocket3.length)) && interstitialv);
      while (rocket3.length == eighteenv) {
         eighteenv -= 1 - parseInt(`${elementsN}`);
         break;
      }
       let pointN = 3.0;
       let fullscreenminA = 5.0;
         elementsN -= parseInt(`${pointN}`) & 2;
      statisticsactive7 = whistleX.length >= 24 && orangev.size >= 24;
      final_sC = `${mountingE.length * 1}`;

    if (isSubmitting) return;

      constantsY = !constantsY;
       let iconcalendar_ = String.fromCharCode(99,95,53,56,95,117,110,99,104,97,110,103,101,100,0);
         iconcalendar_ += `${iconcalendar_.length % 2}`;
      while (iconcalendar_ != iconcalendar_) {
          let mbridgec = 4;
          let videoI = String.fromCharCode(105,95,52,51,95,112,97,114,97,109,101,116,114,105,99,0);
          let upgrade0 = String.fromCharCode(110,95,52,0);
         iconcalendar_ += `${upgrade0.length >> (Math.min(videoI.length, 1))}`;
         mbridgec ^= mbridgec >> (Math.min(1, Math.abs(mbridgec)));
         videoI += `${mbridgec}`;
         break;
      }
          let halffieldimageT = String.fromCharCode(99,95,52,95,100,101,112,116,104,0);
          let refreshborderlessq = 4.0;
         iconcalendar_ = `${parseInt(`${refreshborderlessq}`) % 2}`;
         halffieldimageT += `${(halffieldimageT == String.fromCharCode(109,0) ? halffieldimageT.length : halffieldimageT.length)}`;
         refreshborderlessq -= 3 >> (Math.min(3, halffieldimageT.length));
      trash_ += `${mintegralA.length}`;

    if (isReadTermNCondition == false) {

      nativemoduler = 93 < whitebelln;
      unfill5 += `${mountingE.length}`;
      return;

      unfill5 += `${((constantsY ? 1 : 1) << (Math.min(Math.abs(2), 4)))}`;
   if (2 == (4 << (Math.min(4, Math.abs(whitebelln))))) {
      whitebelln ^= orangev.size;
   }
    }

    const formattedLoginValue = loginType === 'phone' ? loginValue.replace(/\s/g, '') : loginValue;

    

      orangev = new Map([[`${whistleX.length}`, whistleX.length / 2]]);
       let smallorangemanV = String.fromCharCode(114,101,110,111,114,109,95,119,95,55,49,0);
       let footballtrophyD = 0.0;
       let completeH = String.fromCharCode(112,95,56,55,95,99,111,110,118,101,114,116,101,114,0);
      while (completeH.includes(`${smallorangemanV.length}`)) {
         smallorangemanV += "2";
         break;
      }
      for (let w = 0; w < 3; w++) {
         smallorangemanV = `${3 - smallorangemanV.length}`;
      }
      if ((footballtrophyD - 2.71) < 3.5) {
         footballtrophyD *= completeH.length * parseInt(`${footballtrophyD}`);
      }
         footballtrophyD /= Math.max(2, 3);
         smallorangemanV = `${completeH.length ^ 1}`;
      for (let w = 0; w < 2; w++) {
         footballtrophyD /= Math.max(1, 5);
      }
      while ((completeH.length - parseInt(`${footballtrophyD}`)) == 5 && (1.57 - footballtrophyD) == 3.68) {
         completeH = `${(String.fromCharCode(117,0) == completeH ? completeH.length : parseInt(`${footballtrophyD}`))}`;
         break;
      }
      if (smallorangemanV != String.fromCharCode(79,0)) {
         completeH += `${smallorangemanV.length}`;
      }
         smallorangemanV += `${parseInt(`${footballtrophyD}`)}`;
      unfill5 += `${final_sC.length}`;
    

      constantsY = orangev.size < mountingE.length;
   if ((trash_.length << (Math.min(Math.abs(3), 4))) <= 3) {
      whitebelln /= Math.max(whistleX.length, 5);
   }
    

   let delegate_6y0 = 7454764 <= orangev.size;
   do {
       let iconstarH = 2.0;
       let containerZ = true;
       let greenv = 1.0;
      if (2.22 > iconstarH) {
          let iconarrowrightm = 0;
          let humidity2 = String.fromCharCode(121,95,56,52,95,115,117,98,115,99,114,105,112,116,0);
         containerZ = (parseFloat(`${humidity2.length}`) * iconstarH) == 47.30;
         iconarrowrightm &= iconarrowrightm;
         humidity2 = `${iconarrowrightm | 3}`;
      }
          let goallogop = String.fromCharCode(105,95,56,52,95,117,110,105,110,105,116,105,97,108,105,122,101,100,0);
          let iconwechatE = 5.0;
         containerZ = iconstarH <= 38.22;
         goallogop += `${goallogop.length}`;
         iconwechatE *= goallogop.length;
         containerZ = !containerZ;
      for (let u = 0; u < 3; u++) {
          let readQ = 2;
          let commonb = String.fromCharCode(97,117,116,111,108,111,99,107,95,104,95,51,53,0);
          let fcdaebecbcbafcdfceaaeccfeacdbb = false;
          let albumH = 5.0;
         greenv *= (commonb == String.fromCharCode(85,0) ? commonb.length : (fcdaebecbcbafcdfceaaeccfeacdbb ? 2 : 5));
         readQ -= parseInt(`${albumH}`);
         fcdaebecbcbafcdfceaaeccfeacdbb = (readQ + albumH) <= 15;
      }
       let membery = String.fromCharCode(115,116,97,116,101,115,95,114,95,54,52,0);
      for (let m = 0; m < 2; m++) {
          let topic4: Map<any, any> = new Map([[String.fromCharCode(109,95,50,53,95,105,110,102,111,108,100,101,114,0),false ], [String.fromCharCode(99,112,120,95,48,95,56,57,0),false ], [String.fromCharCode(107,95,53,49,95,114,101,99,116,105,102,121,0),false ]]);
          let largeh = String.fromCharCode(119,95,51,55,95,118,105,115,105,98,105,116,121,0);
         iconstarH -= parseFloat(`${parseInt(`${iconstarH}`) + 2}`);
         topic4.set(largeh, 1 & largeh.length);
      }
         containerZ = iconstarH < 71.50;
      if ((membery.length + 1) >= 5) {
         membery = `${parseInt(`${greenv}`)}`;
      }
          let libavfilterf = 2.0;
          let libimagepipeline1 = 3.0;
         greenv -= 3 << (Math.min(Math.abs(parseInt(`${iconstarH}`)), 4));
         libavfilterf *= parseInt(`${libimagepipeline1}`) >> (Math.min(Math.abs(parseInt(`${libavfilterf}`)), 2));
         libimagepipeline1 += parseInt(`${libavfilterf}`);
      orangev.set(`${greenv}`, parseInt(`${greenv}`) ^ 2);
      if (delegate_6y0) {
         break;
      }
   } while (delegate_6y0 && (1 == (2 ^ whitebelln)));
      whitebelln %= Math.max((mintegralA == String.fromCharCode(99,0) ? (statisticsactive7 ? 3 : 5) : mintegralA.length), 3);
    

   for (let s = 0; s < 3; s++) {
       let iconpipexpandi = String.fromCharCode(110,95,57,54,95,115,101,116,99,116,120,0);
          let iconscheduleK: Array<any> = [616, 443];
          let libyogaO: Array<any> = [141, 187, 651];
          let chinasamet: Array<any> = [283, 98, 81];
         iconpipexpandi = `${libyogaO.length}`;
         iconscheduleK.push(1);
         libyogaO = [chinasamet.length / 2];
         chinasamet.push(2 - iconscheduleK.length);
      while (iconpipexpandi != iconpipexpandi) {
         iconpipexpandi += "3";
         break;
      }
       let loginsuccessU: Array<any> = [474, 472];
      unfill5 = `${1 | orangev.size}`;
   }
   for (let q = 0; q < 2; q++) {
      whistleX.push(mintegralA.length);
   }

    if (formattedLoginValue === "" || loginValueErrMsg !== null) {
      setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
      return;
    }

    try {

   let cancelb = 5552773 <= whistleX.length;
   do {
      whistleX.push(orangev.size);
      if (cancelb) {
         break;
      }
   } while ((1 > (whistleX.length | 2)) && cancelb);
      constantsY = unfill5 == String.fromCharCode(70,0);
      setSubmitting(true);

   let librrcv = String.fromCharCode(48,52,57,55,106,0) == unfill5;
   do {
       let gdtadvH = String.fromCharCode(105,110,115,101,114,116,105,111,110,115,95,54,95,54,49,0);
       let baiduads5: Array<any> = [288, 541, 732];
       let iconarrowleftX = 4.0;
         gdtadvH = `${2 + baiduads5.length}`;
          let transferd = String.fromCharCode(101,95,57,50,95,105,110,116,101,114,105,116,101,109,0);
          let statisticsQ: Map<any, any> = new Map([[String.fromCharCode(108,95,51,54,95,115,105,110,100,101,120,0),209], [String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,95,116,95,49,54,0),481], [String.fromCharCode(97,95,49,55,95,112,97,114,99,111,114,0),855]]);
          let completeb = 1;
         baiduads5 = [statisticsQ.size << (Math.min(baiduads5.length, 1))];
         transferd = `${transferd.length | completeb}`;
         statisticsQ = new Map([[`${completeb}`, 2 ^ transferd.length]]);
          let whitevideolivey = String.fromCharCode(121,95,49,57,95,115,117,98,114,101,115,117,108,116,115,0);
          let predictionactivei = 3.0;
          let aboutT = true;
         baiduads5.push(3 ^ parseInt(`${predictionactivei}`));
         whitevideolivey = `${whitevideolivey.length}`;
         predictionactivei += whitevideolivey.length;
      if ((iconarrowleftX * 4.2) <= 4.75) {
         baiduads5 = [gdtadvH.length << (Math.min(Math.abs(1), 4))];
      }
         baiduads5.push((String.fromCharCode(113,0) == gdtadvH ? gdtadvH.length : baiduads5.length));
      unfill5 = `${unfill5.length}`;
      if (librrcv) {
         break;
      }
   } while ((5 < unfill5.length) && librrcv);
   let ballT = whistleX.length >= 9570744;
   do {
      whistleX = [1 << (Math.min(4, mintegralA.length))];
      if (ballT) {
         break;
      }
   } while (((mintegralA.length * 5) > 3) && ballT);

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

      whistleX = [((nativemoduler ? 4 : 2) + final_sC.length)];
       let othermatchdetailbgP = 0;
          let arrow3 = String.fromCharCode(103,95,48,95,117,110,99,111,110,102,105,114,109,101,100,0);
         othermatchdetailbgP |= arrow3.length;
      let favorited = 8054261 >= othermatchdetailbgP;
      do {
         othermatchdetailbgP -= othermatchdetailbgP >> (Math.min(Math.abs(othermatchdetailbgP), 4));
         if (favorited) {
            break;
         }
      } while ((1 > (othermatchdetailbgP - othermatchdetailbgP) || (1 - othermatchdetailbgP) > 1) && favorited);
      let inactive_ = othermatchdetailbgP <= 6661331;
      do {
          let defaultbasketballbgL = String.fromCharCode(118,112,120,101,110,99,95,52,95,50,48,0);
         othermatchdetailbgP /= Math.max(defaultbasketballbgL.length, 3);
         if (inactive_) {
            break;
         }
      } while (inactive_ && (1 <= (othermatchdetailbgP / (Math.max(7, othermatchdetailbgP)))));
      unfill5 = `${((statisticsactive7 ? 2 : 2) / (Math.max(1, othermatchdetailbgP)))}`;
        setSubmitting(false);

   for (let a = 0; a < 3; a++) {
      whitebelln *= unfill5.length << (Math.min(Math.abs(2), 1));
   }
   for (let q = 0; q < 3; q++) {
      unfill5 = "3";
   }
        setLoginValueErrMsg(err.message);

      libzeusR = `${(3 >> (Math.min(2, Math.abs((nativemoduler ? 5 : 5)))))}`;
      trash_ += "3";
        return;
      }
    }

    setSubmitting(false);

   if (!unfill5.startsWith(mintegralA)) {
       let libimagepipelinee = true;
       let sportI = 3.0;
       let detailsq = 3.0;
       let googleo: Array<any> = [113, 18, 632];
      for (let n = 0; n < 3; n++) {
         libimagepipelinee = 2 >= googleo.length;
      }
       let graphicsB = String.fromCharCode(97,95,51,48,95,101,120,99,108,117,100,105,110,103,0);
      while (1.1 == (detailsq * sportI) || 5.55 == (sportI * 1.1)) {
         detailsq -= parseInt(`${detailsq}`) * 1;
         break;
      }
         libimagepipelinee = graphicsB == String.fromCharCode(112,0);
       let clubV = String.fromCharCode(115,95,51,57,95,108,105,110,107,0);
       let modalw = String.fromCharCode(120,95,51,54,95,103,101,116,116,105,109,101,111,102,100,97,121,0);
      for (let h = 0; h < 3; h++) {
         graphicsB += `${1 | parseInt(`${detailsq}`)}`;
      }
         graphicsB = `${graphicsB.length << (Math.min(clubV.length, 4))}`;
      for (let r = 0; r < 2; r++) {
          let filterP = 2;
         clubV = `${parseInt(`${sportI}`)}`;
         filterP &= 1 ^ filterP;
      }
      mintegralA += `${trash_.length}`;
   }
   let viewsq = statisticsactive7 ? !statisticsactive7 : statisticsactive7;
   do {
       let helperG = String.fromCharCode(102,105,110,100,101,114,95,111,95,56,52,0);
       let progressc = String.fromCharCode(113,95,51,57,95,115,97,118,101,109,101,100,105,97,0);
          let foregroundh: Array<any> = [String.fromCharCode(114,101,99,116,97,110,103,117,108,97,114,95,52,95,54,52,0), String.fromCharCode(99,111,110,116,105,110,117,97,108,95,103,95,52,0)];
         helperG = `${(progressc == String.fromCharCode(101,0) ? foregroundh.length : progressc.length)}`;
         helperG = `${helperG.length}`;
      for (let e = 0; e < 1; e++) {
          let bodanP = true;
          let customI = String.fromCharCode(105,100,101,110,116,105,102,105,97,98,108,101,95,101,95,49,51,0);
          let buildd = String.fromCharCode(97,115,99,105,105,105,110,100,101,120,95,110,95,50,56,0);
         helperG = `${helperG.length ^ 2}`;
         bodanP = 82 == buildd.length;
         customI = `${(String.fromCharCode(70,0) == buildd ? buildd.length : customI.length)}`;
      }
      let libreanimatedN = progressc.length <= 9362134;
      do {
         progressc += `${helperG.length}`;
         if (libreanimatedN) {
            break;
         }
      } while (libreanimatedN && (helperG.startsWith(progressc)));
      while (progressc.length < 3) {
         helperG = `${3 >> (Math.min(1, progressc.length))}`;
         break;
      }
         progressc += `${helperG.length >> (Math.min(Math.abs(1), 5))}`;
      statisticsactive7 = (!constantsY ? !statisticsactive7 : constantsY);
      if (viewsq) {
         break;
      }
   } while (viewsq && (libzeusR.length == 5));

    dispatch(hideBottomSheetAction());

   let privatechatbga = 9044786 >= orangev.size;
   do {
       let matchO = 5.0;
         matchO /= Math.max(parseInt(`${matchO}`), 3);
         matchO += parseInt(`${matchO}`) & parseInt(`${matchO}`);
      while (3.21 <= matchO) {
          let minivodm = String.fromCharCode(111,95,52,54,95,117,110,105,113,117,101,100,0);
          let a_managerj = 1.0;
         matchO /= Math.max(3, 3);
         minivodm += `${1 / (Math.max(3, minivodm.length))}`;
         a_managerj -= minivodm.length % 3;
         break;
      }
      orangev = new Map([[`${statisticsactive7}`, mintegralA.length >> (Math.min(Math.abs(2), 3))]]);
      if (privatechatbga) {
         break;
      }
   } while (((2 * orangev.size) == 3) && privatechatbga);
   for (let d = 0; d < 1; d++) {
      whitebelln <<= Math.min(Math.abs(((constantsY ? 2 : 1))), 1);
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
