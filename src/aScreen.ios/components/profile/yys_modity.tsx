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
import SpinnerOverlay from "../modal/yys_home";
import PhoneIcon from '@static/images/baiduReducer.svg';
import MailIcon from '@static/images/reactFavorite.svg';
import GmailIcon from '@static/images/moviesLibflipperProgress.svg';
import DropdownIcon from '@static/images/typingMatchReminder.svg';
import { CountryPhoneList } from "./yys_umeng";
import FastImage from '../common/yys_vertical_collection';
import { yys_Down } from "@type/yys_libzeus";
import { ReadAgreementPrivacyPolicy } from "./yys_volume";

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
      let libfabricjniy: Array<any> = [String.fromCharCode(99, 111, 117, 110, 116, 95, 51, 95, 52, 54, 0), String.fromCharCode(108, 95, 50, 57, 95, 99, 97, 112, 97, 99, 105, 116, 121, 0)];
      let overlayI = String.fromCharCode(114, 111, 98, 117, 115, 116, 95, 49, 95, 54, 49, 0);
      let black5 = String.fromCharCode(100, 111, 115, 100, 97, 116, 101, 95, 101, 95, 54, 57, 0);
      let libyogab = String.fromCharCode(119, 95, 52, 53, 95, 115, 104, 97, 107, 105, 110, 103, 0);
      let spinnerC = true;
      let moonU = String.fromCharCode(115, 95, 50, 49, 95, 98, 101, 99, 111, 109, 101, 0);
      let networkr = String.fromCharCode(97, 105, 110, 116, 95, 115, 95, 55, 54, 0);
      let calendari = String.fromCharCode(112, 110, 103, 95, 122, 95, 56, 0);
      let sportsg = String.fromCharCode(101, 95, 56, 54, 95, 103, 114, 97, 121, 114, 103, 98, 0);
      let nativemodule8 = false;
      let mbridgeD: Array<any> = [182, 24];
      for (let j = 0; j < 2; j++) {
         networkr = `${(String.fromCharCode(55, 0) == libyogab ? overlayI.length : libyogab.length)}`;
      }
      if (moonU == String.fromCharCode(79, 0) || 2 <= overlayI.length) {
         let projectr: Array<any> = [757, 313, 34];
         let placementW = String.fromCharCode(117, 95, 57, 55, 95, 105, 110, 116, 101, 114, 108, 97, 99, 101, 100, 0);
         let emptyw: Map<any, any> = new Map([[String.fromCharCode(119, 95, 53, 55, 95, 115, 111, 102, 114, 101, 101, 0), 601], [String.fromCharCode(109, 95, 50, 55, 95, 102, 105, 114, 115, 116, 108, 121, 0), 287], [String.fromCharCode(97, 108, 103, 111, 114, 95, 110, 95, 49, 49, 0), 267]]);
         let smallW = true;
         let fullG = 3;
         let holderb = 7793057 <= fullG;
         do {
            fullG *= (String.fromCharCode(54, 0) == placementW ? projectr.length : placementW.length);
            if (holderb) {
               break;
            }
         } while (holderb && (smallW));
         let searchS = fullG <= 8416177;
         do {
            let zhubok = String.fromCharCode(120, 95, 54, 53, 95, 118, 97, 108, 105, 100, 97, 116, 105, 110, 103, 0);
            let uimanagerl = true;
            let containerN: Map<any, any> = new Map([[String.fromCharCode(116, 95, 55, 52, 0), false], [String.fromCharCode(114, 101, 112, 117, 98, 108, 105, 115, 104, 95, 100, 95, 54, 55, 0), true], [String.fromCharCode(112, 97, 114, 101, 110, 116, 97, 103, 101, 95, 117, 95, 55, 54, 0), false]]);
            fullG += fullG ^ 1;
            zhubok += `${((uimanagerl ? 2 : 4) >> (Math.min(zhubok.length, 5)))}`;
            uimanagerl = uimanagerl && containerN.size >= 70;
            containerN = new Map([[`${uimanagerl}`, zhubok.length]]);
            if (searchS) {
               break;
            }
         } while (searchS && (!smallW && (2 - fullG) <= 1));
         let recommendationf = emptyw.size >= 8488271;
         do {
            emptyw.set(`${smallW}`, fullG);
            if (recommendationf) {
               break;
            }
         } while (recommendationf && (1 == (emptyw.size * 4) || 4 == (emptyw.size * fullG)));
         if (2 >= (fullG * 4) || smallW) {
            smallW = emptyw.size < 36;
         }
         let sellP = 3;
         let blacky = 2.0;
         let f_centerh: Map<any, any> = new Map([[String.fromCharCode(121, 95, 50, 54, 95, 97, 97, 102, 99, 0), 493], [String.fromCharCode(103, 114, 97, 99, 101, 95, 97, 95, 52, 56, 0), 571]]);
         projectr.push(projectr.length ^ 2);
         sellP >>= Math.min(Math.abs(3 ^ sellP), 4);
         blacky += f_centerh.size ^ 3;
         f_centerh.set(`${blacky}`, sellP);
         let pageQ = fullG >= 9144222;
         do {
            fullG %= Math.max(5, (3 + (smallW ? 5 : 1)));
            if (pageQ) {
               break;
            }
         } while (pageQ && (smallW));
         projectr.push(projectr.length);
         for (let b = 0; b < 2; b++) {
            placementW = `${((smallW ? 2 : 3) / (Math.max(projectr.length, 7)))}`;
         }
         if (1 == (projectr.length << (Math.min(5, Math.abs(fullG)))) || (fullG << (Math.min(Math.abs(1), 2))) == 1) {
            projectr = [3 + fullG];
         }
         let langkeyX = placementW.length >= 6389962;
         do {
            placementW = `${projectr.length}`;
            if (langkeyX) {
               break;
            }
         } while (langkeyX && (4 < placementW.length && smallW));
         let themeU = 5448463 >= fullG;
         do {
            let privilegeX = true;
            let manifestR = String.fromCharCode(118, 105, 101, 119, 101, 114, 95, 117, 95, 52, 55, 0);
            fullG |= 3;
            privilegeX = privilegeX && manifestR.length >= 26;
            manifestR += `${(manifestR == String.fromCharCode(111, 0) ? (privilegeX ? 4 : 4) : manifestR.length)}`;
            if (themeU) {
               break;
            }
         } while (themeU && ((fullG - placementW.length) < 2));
         placementW += "1";
         emptyw.set(`${smallW}`, (3 ^ (smallW ? 3 : 5)));
         let robotom = smallW ? !smallW : smallW;
         do {
            smallW = projectr.length <= 41;
            if (robotom) {
               break;
            }
         } while (robotom && (placementW.length <= 5 && smallW));
         let formq = smallW ? !smallW : smallW;
         do {
            let catagory7 = false;
            let fieldC = String.fromCharCode(100, 101, 118, 101, 108, 111, 112, 101, 114, 95, 116, 95, 50, 52, 0);
            smallW = projectr.length <= 4;
            catagory7 = (((catagory7 ? fieldC.length : 33) >> (Math.min(fieldC.length, 2))) >= 33);
            if (formq) {
               break;
            }
         } while ((2 >= (fullG % 3)) && formq);
         overlayI += `${libyogab.length | 1}`;
      }
      libfabricjniy = [((spinnerC ? 3 : 2) / 3)];
      let navigationC = true;
      let modeF = 4.0;
      let countryY: Array<any> = [String.fromCharCode(113, 95, 51, 52, 95, 97, 110, 97, 108, 121, 115, 105, 115, 0), String.fromCharCode(101, 95, 56, 53, 95, 115, 117, 98, 116, 114, 97, 99, 116, 0)];
      countryY = [parseInt(`${modeF}`)];
      let skipG = 9069251.0 <= modeF;
      do {
         modeF *= parseInt(`${modeF}`) | 3;
         if (skipG) {
            break;
         }
      } while ((navigationC && (modeF / (Math.max(5.71, 6))) < 4.44) && skipG);
      modeF *= (parseInt(`${modeF}`) / (Math.max(4, (navigationC ? 1 : 2))));
      while (navigationC) {
         modeF *= 3;
         break;
      }
      modeF /= Math.max(countryY.length, 1);
      navigationC = (parseInt(`${modeF}`) + countryY.length) < 90;
      let trashR = modeF <= 9317750.0;
      do {
         modeF += countryY.length - 2;
         if (trashR) {
            break;
         }
      } while (trashR && ((4.50 - modeF) >= 2.49));
      for (let s = 0; s < 2; s++) {
         let controlB = true;
         let halfq = String.fromCharCode(109, 95, 51, 57, 95, 97, 108, 108, 111, 99, 97, 116, 111, 114, 115, 0);
         let ballD = String.fromCharCode(106, 95, 57, 57, 95, 104, 111, 114, 105, 103, 0);
         let traminiB: Map<any, any> = new Map([[String.fromCharCode(114, 95, 50, 57, 95, 112, 97, 110, 101, 108, 115, 0), 61], [String.fromCharCode(108, 111, 110, 103, 116, 101, 114, 109, 95, 118, 95, 57, 57, 0), 624]]);
         modeF += ballD.length;
         controlB = !controlB;
         halfq += `${halfq.length}`;
         ballD += `${(1 + (controlB ? 4 : 5))}`;
         traminiB = new Map([[halfq, ((controlB ? 2 : 5) & 1)]]);
      }
      while ((countryY.length / (Math.max(6, modeF))) < 3.4 && 3.97 < (modeF / 3.4)) {
         let gesturej = String.fromCharCode(118, 101, 110, 99, 95, 105, 95, 56, 50, 0);
         let sorte = String.fromCharCode(99, 95, 57, 56, 95, 103, 111, 112, 115, 0);
         let activityS = 0.0;
         modeF -= 2 + sorte.length;
         gesturej = `${gesturej.length | 1}`;
         sorte = `${parseInt(`${activityS}`)}`;
         activityS /= Math.max(1, 3 & parseInt(`${activityS}`));
         break;
      }
      libfabricjniy = [2];

      setloginType('email');

      libyogab = `${overlayI.length ^ 3}`;
      let halfv = 9041003 >= black5.length;
      do {
         black5 += `${calendari.length | 1}`;
         if (halfv) {
            break;
         }
      } while ((!black5.endsWith(`${overlayI.length}`)) && halfv);
      black5 += `${libyogab.length}`;
      if (black5 != String.fromCharCode(76, 0)) {
         let analytic1 = 3.0;
         let libavcodecg = String.fromCharCode(120, 95, 53, 54, 95, 98, 97, 107, 101, 0);
         while (2.93 == (2.87 / (Math.max(6, analytic1)))) {
            let stepW = String.fromCharCode(117, 95, 50, 53, 95, 101, 113, 117, 97, 108, 0);
            let referrert = 4;
            libavcodecg = `${libavcodecg.length}`;
            stepW = `${referrert % (Math.max(5, stepW.length))}`;
            referrert /= Math.max(1, stepW.length + 3);
            break;
         }
         if ((1 + libavcodecg.length) > 3 || 1 > (libavcodecg.length * parseInt(`${analytic1}`))) {
            let fieldP = true;
            let string2 = String.fromCharCode(110, 95, 49, 54, 95, 97, 119, 97, 121, 0);
            let buildC: Array<any> = [730, 949, 422];
            let crownQ = false;
            let spinnerd = 5;
            analytic1 -= ((crownQ ? 5 : 1) / (Math.max(parseInt(`${analytic1}`), 2)));
            fieldP = !fieldP || 29 > spinnerd;
            string2 = `${((fieldP ? 1 : 3) % (Math.max(buildC.length, 2)))}`;
            buildC.push(((fieldP ? 4 : 1)));
            crownQ = spinnerd == 88 && buildC.length == 88;
         }
         let sentry3 = String.fromCharCode(105, 110, 116, 101, 114, 120, 121, 95, 114, 95, 56, 54, 0);
         analytic1 -= (String.fromCharCode(84, 0) == libavcodecg ? parseInt(`${analytic1}`) : libavcodecg.length);
         sentry3 = `${(sentry3 == String.fromCharCode(75, 0) ? sentry3.length : sentry3.length)}`;
         let texti: Array<any> = [884, 775];
         let latnb: Array<any> = [712, 744];
         analytic1 *= 1;
         if (libavcodecg.length == 4) {
            libavcodecg += `${latnb.length * 2}`;
         }
         libyogab += `${((spinnerC ? 4 : 3))}`;
      }
      setLoginValue('');

      overlayI = `${black5.length ^ 1}`;
      sportsg += "3";
      libfabricjniy = [libfabricjniy.length ^ moonU.length];
      let nativeex9 = String.fromCharCode(112, 114, 97, 101, 108, 114, 48, 52, 50, 116, 0) == calendari;
      do {
         let next4 = true;
         let reactZ = String.fromCharCode(121, 95, 55, 53, 95, 111, 114, 105, 0);
         let detailU = 5.0;
         let filledx = String.fromCharCode(106, 95, 56, 55, 95, 101, 120, 116, 101, 114, 105, 111, 114, 0);
         let acceptedl = 7746875 <= filledx.length;
         do {
            filledx = `${parseInt(`${detailU}`) - 2}`;
            if (acceptedl) {
               break;
            }
         } while (acceptedl && (next4));
         reactZ += `${(parseInt(`${detailU}`) | (next4 ? 1 : 5))}`;
         for (let s = 0; s < 1; s++) {
            filledx += `${(parseInt(`${detailU}`) + (next4 ? 1 : 3))}`;
         }
         let active2: Map<any, any> = new Map([[String.fromCharCode(101, 95, 55, 51, 95, 117, 105, 100, 0), 30], [String.fromCharCode(102, 95, 51, 57, 95, 99, 97, 108, 108, 111, 117, 116, 0), 853]]);
         let baidum: Map<any, any> = new Map([[String.fromCharCode(97, 112, 109, 116, 101, 115, 116, 95, 108, 95, 55, 54, 0), String.fromCharCode(112, 108, 117, 103, 105, 110, 95, 52, 95, 49, 53, 0)], [String.fromCharCode(108, 111, 110, 103, 109, 117, 108, 97, 119, 95, 57, 95, 52, 57, 0), String.fromCharCode(122, 95, 55, 48, 95, 116, 101, 120, 116, 117, 114, 101, 100, 0)], [String.fromCharCode(108, 95, 51, 55, 95, 112, 101, 114, 109, 117, 116, 101, 0), String.fromCharCode(110, 101, 118, 101, 114, 95, 121, 95, 52, 51, 0)]]);
         baidum = new Map([[`${active2.size}`, ((next4 ? 1 : 1) * active2.size)]]);
         filledx += "3";
         detailU *= active2.size & 3;
         if (detailU >= baidum.size) {
            let private_fq = 2.0;
            let c_players = String.fromCharCode(107, 95, 55, 95, 117, 110, 115, 101, 108, 101, 99, 116, 101, 100, 0);
            baidum.set(reactZ, (String.fromCharCode(99, 0) == reactZ ? reactZ.length : filledx.length));
            private_fq += parseFloat(`${2 + c_players.length}`);
            c_players = `${2 | c_players.length}`;
         }
         let renewo = 8626356 <= baidum.size;
         do {
            let ballt = String.fromCharCode(116, 105, 112, 115, 95, 103, 95, 51, 56, 0);
            baidum.set(ballt, ((next4 ? 2 : 1)));
            if (renewo) {
               break;
            }
         } while (renewo && (2 == (baidum.size | reactZ.length)));
         let sportP = 3.0;
         let emptyd: Map<any, any> = new Map([[String.fromCharCode(103, 95, 51, 54, 95, 104, 117, 110, 103, 0), 883], [String.fromCharCode(114, 95, 50, 50, 95, 116, 116, 97, 103, 0), 310]]);
         filledx = `${((next4 ? 1 : 3) << (Math.min(Math.abs(active2.size), 4)))}`;
         sportP -= emptyd.size;
         emptyd = new Map([[`${emptyd.size}`, 3 / (Math.max(2, parseInt(`${sportP}`)))]]);
         for (let v = 0; v < 1; v++) {
            reactZ = "3";
         }
         let sellT = true;
         let infos = false;
         calendari = `${2 >> (Math.min(3, networkr.length))}`;
         if (nativeex9) {
            break;
         }
      } while ((black5.startsWith(calendari)) && nativeex9);
      setReferralCode('');

      moonU += `${3 >> (Math.min(3, libyogab.length))}`;
      for (let y = 0; y < 1; y++) {
         libyogab += `${black5.length - 2}`;
      }
      let pathv = 9632738 >= networkr.length;
      do {
         networkr += `${moonU.length}`;
         if (pathv) {
            break;
         }
      } while ((!networkr.endsWith(moonU)) && pathv);
      while (overlayI.length <= 2 || spinnerC) {
         overlayI = `${((spinnerC ? 2 : 2))}`;
         break;
      }
      setLoginValueErrMsg(null);

      while (calendari.length <= 4) {
         spinnerC = libfabricjniy.includes(spinnerC);
         break;
      }
      let referrerR = 4.0;
      let zhuboK = String.fromCharCode(98, 95, 54, 53, 95, 97, 100, 100, 114, 101, 115, 115, 0);
      let confirmationz = String.fromCharCode(114, 95, 52, 55, 95, 103, 105, 118, 101, 110, 0);
      if (5.100 >= referrerR) {
         let applicationQ = false;
         let gesturesx = false;
         let libloggerY = 1;
         let bannerK = true;
         confirmationz = `${(confirmationz.length | (gesturesx ? 5 : 4))}`;
         applicationQ = !applicationQ;
         gesturesx = (!bannerK ? !applicationQ : !bannerK);
         libloggerY *= 1;
      }
      let librrc2 = 5583698.0 <= referrerR;
      do {
         referrerR /= Math.max(2, 3);
         if (librrc2) {
            break;
         }
      } while (librrc2 && (4 >= (zhuboK.length & 4)));
      confirmationz = `${(String.fromCharCode(113, 0) == confirmationz ? confirmationz.length : parseInt(`${referrerR}`))}`;
      if (confirmationz.length >= zhuboK.length) {
         zhuboK += `${zhuboK.length | confirmationz.length}`;
      }
      if (parseInt(`${referrerR}`) <= zhuboK.length) {
         referrerR += parseInt(`${referrerR}`) % (Math.max(3, 3));
      }
      for (let p = 0; p < 3; p++) {
         zhuboK = `${confirmationz.length}`;
      }
      for (let y = 0; y < 3; y++) {
         let updatesN = String.fromCharCode(120, 95, 57, 49, 95, 101, 115, 115, 101, 110, 99, 101, 0);
         let alertC = 5.0;
         zhuboK += `${confirmationz.length}`;
         updatesN = `${parseInt(`${alertC}`) * 1}`;
         alertC += parseInt(`${alertC}`);
      }
      while (3 >= zhuboK.length) {
         zhuboK += `${confirmationz.length}`;
         break;
      }
      if (1 < zhuboK.length) {
         let colorsL = String.fromCharCode(117, 95, 50, 51, 95, 100, 120, 116, 97, 0);
         let giftJ = String.fromCharCode(97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 95, 103, 95, 55, 57, 0);
         let skipw = String.fromCharCode(121, 95, 50, 56, 95, 101, 110, 99, 111, 100, 101, 100, 115, 116, 114, 101, 97, 109, 0);
         let with_wM = String.fromCharCode(117, 95, 50, 50, 95, 99, 108, 97, 115, 104, 101, 100, 0);
         zhuboK += `${2 - giftJ.length}`;
         colorsL = `${(with_wM == String.fromCharCode(105, 0) ? with_wM.length : skipw.length)}`;
         giftJ = `${colorsL.length}`;
         skipw = "1";
      }
      libfabricjniy = [(confirmationz == String.fromCharCode(56, 0) ? confirmationz.length : libfabricjniy.length)];
      while (sportsg == String.fromCharCode(73, 0)) {
         let filledB: Map<any, any> = new Map([[String.fromCharCode(106, 95, 49, 54, 95, 105, 110, 116, 101, 103, 101, 114, 105, 102, 121, 0), String.fromCharCode(97, 98, 115, 95, 106, 95, 56, 53, 0)], [String.fromCharCode(117, 110, 99, 111, 109, 112, 114, 101, 115, 115, 95, 112, 95, 48, 0), String.fromCharCode(101, 114, 97, 115, 101, 100, 95, 108, 95, 51, 53, 0)]]);
         let clearw = 5.0;
         let appsW = 1.0;
         let castingE = 1;
         let armvaa: Array<any> = [901, 936];
         let emojin = 2.0;
         let custom9 = String.fromCharCode(105, 95, 57, 57, 95, 115, 117, 98, 115, 116, 114, 101, 97, 109, 0);
         appsW /= Math.max(1, parseInt(`${clearw}`) % (Math.max(9, custom9.length)));
         emojin *= parseFloat(`${parseInt(`${emojin}`)}`);
         custom9 = `${parseInt(`${emojin}`)}`;
         let datar = 1.0;
         let libavcodecP = String.fromCharCode(115, 95, 49, 54, 95, 98, 103, 109, 99, 0);
         appsW *= filledB.size >> (Math.min(Math.abs(3), 3));
         datar += parseFloat(`${parseInt(`${datar}`) + libavcodecP.length}`);
         libavcodecP = "1";
         armvaa = [parseInt(`${clearw}`) | 2];
         castingE |= parseInt(`${clearw}`) - 3;
         let suggestionW = String.fromCharCode(110, 95, 57, 49, 95, 97, 99, 116, 105, 118, 97, 116, 105, 111, 110, 115, 0);
         let friends6 = String.fromCharCode(105, 95, 53, 57, 95, 115, 118, 113, 101, 110, 99, 0);
         let suggestionb: Map<any, any> = new Map([[String.fromCharCode(107, 95, 48, 95, 99, 111, 110, 102, 105, 103, 117, 114, 101, 0), 598], [String.fromCharCode(114, 101, 109, 111, 118, 101, 95, 118, 95, 53, 53, 0), 542], [String.fromCharCode(114, 101, 97, 100, 99, 98, 95, 113, 95, 49, 53, 0), 415]]);
         filledB.set(`${clearw}`, parseInt(`${clearw}`));
         suggestionW = `${1 / (Math.max(2, suggestionb.size))}`;
         friends6 = `${suggestionb.size}`;
         clearw /= Math.max(parseFloat(`${armvaa.length + 1}`), 3);
         let unreadS = clearw >= 7081999.0;
         do {
            clearw += parseFloat(`${2}`);
            if (unreadS) {
               break;
            }
         } while (((appsW - 4.64) < 4.36 && (clearw / 4.64) < 3.98) && unreadS);
         if (armvaa.length > 5) {
            armvaa = [2];
         }
         for (let n = 0; n < 1; n++) {
            let play5 = 3.0;
            let incidentD = 3;
            clearw -= parseFloat(`${parseInt(`${appsW}`)}`);
            play5 *= incidentD;
            incidentD >>= Math.min(Math.abs(incidentD | 1), 3);
         }
         filledB.set(`${appsW}`, 3 + filledB.size);
         castingE >>= Math.min(Math.abs(castingE), 5);
         moonU += `${black5.length ^ overlayI.length}`;
         break;
      }
      let clearg = String.fromCharCode(109, 105, 100, 116, 111, 110, 101, 115, 95, 114, 95, 49, 52, 0);
      let play4 = false;
      if (2 <= clearg.length && !play4) {
         let commentr: Array<any> = [1, 336];
         play4 = (((play4 ? commentr.length : 38) / (Math.max(8, commentr.length))) > 38);
      }
      let libfbK = String.fromCharCode(113, 95, 54, 55, 95, 117, 114, 108, 115, 0);
      let textlayoutmanagerQ = String.fromCharCode(114, 95, 51, 55, 95, 111, 112, 116, 105, 109, 105, 122, 101, 114, 0);
      let main_bc = play4 ? !play4 : play4;
      do {
         play4 = clearg == libfbK;
         if (main_bc) {
            break;
         }
      } while ((3 >= libfbK.length) && main_bc);
      play4 = 45 == textlayoutmanagerQ.length && libfbK.length == 45;
      let materialD = String.fromCharCode(116, 121, 112, 101, 115, 116, 114, 95, 110, 95, 49, 53, 0);
      let loadingl = String.fromCharCode(117, 95, 56, 95, 99, 111, 109, 109, 97, 0);
      let assistX = String.fromCharCode(109, 95, 50, 51, 95, 116, 101, 109, 112, 108, 97, 116, 101, 0);
      libfbK = `${textlayoutmanagerQ.length ^ clearg.length}`;
      materialD = "1";
      loadingl = `${2 + assistX.length}`;
      assistX = `${(String.fromCharCode(98, 0) == materialD ? assistX.length : materialD.length)}`;
      let fill_ = String.fromCharCode(119, 97, 118, 101, 95, 105, 95, 52, 48, 0);
      let refreshd = String.fromCharCode(115, 95, 53, 95, 104, 101, 120, 99, 104, 97, 114, 105, 110, 116, 0);
      calendari += `${2 + moonU.length}`;
      setReferralCodeErrMsg(null);

      networkr = "2";
      moonU = `${calendari.length >> (Math.min(1, sportsg.length))}`;
      let humidityW = 0.0;
      let starF = 1;
      while (humidityW > starF) {
         starF /= Math.max(parseInt(`${humidityW}`) & starF, 1);
         break;
      }
      starF ^= starF ^ 1;
      while (5.38 >= (5.80 * humidityW) && (5.80 * humidityW) >= 5.83) {
         humidityW /= Math.max(2 - parseInt(`${humidityW}`), 2);
         break;
      }
      humidityW /= Math.max(2, 2 << (Math.min(Math.abs(parseInt(`${humidityW}`)), 3)));
      while (1.85 < (humidityW + 3.35)) {
         let layoutk = String.fromCharCode(97, 115, 115, 101, 109, 98, 108, 101, 100, 95, 107, 95, 54, 56, 0);
         starF &= 3;
         layoutk += `${layoutk.length}`;
         break;
      }
      humidityW -= 1 + parseInt(`${humidityW}`);
      black5 = `${((nativemodule8 ? 5 : 4) / (Math.max(starF, 1)))}`;
      let c_titleJ = 7071337 <= overlayI.length;
      do {
         overlayI += `${((nativemodule8 ? 1 : 5) & moonU.length)}`;
         if (c_titleJ) {
            break;
         }
      } while ((1 <= (overlayI.length - libfabricjniy.length)) && c_titleJ);
      setReadTermNCondition(false);

      for (let t = 0; t < 3; t++) {
         overlayI += "3";
      }
      libfabricjniy = [((nativemodule8 ? 4 : 3))];
      spinnerC = (5 == ((!nativemodule8 ? sportsg.length : 5) ^ sportsg.length));
      let selectionB: Map<any, any> = new Map([[String.fromCharCode(97, 95, 50, 52, 95, 114, 101, 102, 105, 108, 108, 0), String.fromCharCode(101, 95, 54, 57, 0)], [String.fromCharCode(112, 97, 99, 107, 105, 110, 103, 95, 98, 95, 53, 48, 0), String.fromCharCode(111, 95, 50, 54, 95, 99, 111, 109, 98, 105, 110, 101, 0)]]);
      let bodant = String.fromCharCode(102, 95, 56, 52, 95, 103, 101, 116, 97, 115, 115, 111, 99, 105, 100, 0);
      let scorez: Array<any> = [468, 11, 710];
      selectionB = new Map([[`${scorez.length}`, bodant.length >> (Math.min(3, scorez.length))]]);
      scorez = [bodant.length | 3];
      while (3 == (scorez.length >> (Math.min(Math.abs(selectionB.size), 5))) || 5 == (selectionB.size >> (Math.min(Math.abs(3), 3)))) {
         let manifestB = 0;
         let frame_4Z = String.fromCharCode(103, 105, 103, 97, 98, 121, 116, 101, 95, 106, 95, 55, 54, 0);
         let switch_lO = String.fromCharCode(98, 100, 115, 95, 48, 95, 51, 51, 0);
         scorez = [manifestB - frame_4Z.length];
         manifestB >>= Math.min(3, switch_lO.length);
         frame_4Z = `${switch_lO.length * switch_lO.length}`;
         break;
      }
      scorez.push(3);
      for (let o = 0; o < 1; o++) {
         bodant = `${3 / (Math.max(4, selectionB.size))}`;
      }
      let cancelg = 1.0;
      let downc = 0.0;
      let chinasame4 = String.fromCharCode(97, 118, 102, 109, 116, 95, 116, 95, 52, 55, 0);
      selectionB = new Map([[`${selectionB.size}`, 2 & parseInt(`${cancelg}`)]]);
      chinasame4 = "2";
      let vignetteZ = String.fromCharCode(108, 95, 51, 51, 95, 97, 100, 106, 117, 115, 116, 0);
      let unreadE = String.fromCharCode(114, 95, 49, 50, 95, 99, 109, 112, 97, 100, 100, 114, 0);
      let settingsF = String.fromCharCode(112, 97, 114, 109, 115, 95, 116, 95, 55, 53, 0);
      black5 = `${selectionB.size - 2}`;

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
      let downk = String.fromCharCode(113, 95, 51, 52, 95, 121, 113, 117, 97, 110, 116, 0);
      let tumbnailV = 3;
      let animationsi = String.fromCharCode(110, 117, 108, 108, 112, 97, 99, 107, 101, 116, 95, 122, 95, 54, 0);
      let direct_ = String.fromCharCode(101, 95, 50, 52, 95, 115, 104, 111, 119, 105, 110, 103, 0);
      let container2 = false;
      let redirectx = 2;
      let long_07g = 3.0;
      let description_x8 = 1.0;
      let network6 = false;
      let private_jjp: Array<any> = [891, 623, 927];
      let pings = 5.0;
      let greyQ: Map<any, any> = new Map([[String.fromCharCode(112, 114, 111, 112, 111, 114, 116, 105, 111, 110, 97, 108, 95, 51, 95, 57, 48, 0), String.fromCharCode(97, 99, 107, 117, 112, 95, 103, 95, 50, 57, 0)], [String.fromCharCode(102, 115, 121, 110, 99, 95, 110, 95, 51, 53, 0), String.fromCharCode(122, 95, 54, 95, 112, 105, 99, 107, 109, 111, 100, 101, 0)]]);
      let hoverm = String.fromCharCode(103, 95, 54, 50, 95, 107, 105, 110, 103, 0);
      let bodan7 = String.fromCharCode(111, 95, 57, 50, 95, 106, 99, 109, 97, 115, 116, 101, 114, 0);
      let cricketZ: Array<any> = [String.fromCharCode(116, 95, 50, 48, 95, 113, 117, 97, 100, 0), String.fromCharCode(99, 95, 56, 52, 95, 115, 118, 97, 103, 0), String.fromCharCode(112, 95, 55, 49, 95, 116, 105, 116, 108, 101, 98, 97, 114, 0)];
      let libturbomodulejsijni_ = true;
      private_jjp = [((container2 ? 2 : 1) >> (Math.min(Math.abs(tumbnailV), 2)))];
      if (1 >= (tumbnailV & 3)) {
         animationsi = `${tumbnailV - downk.length}`;
      }
      for (let j = 0; j < 2; j++) {
         tumbnailV &= animationsi.length;
      }
      let dark4 = 7328501 <= redirectx;
      do {
         redirectx += redirectx;
         if (dark4) {
            break;
         }
      } while (((parseInt(`${long_07g}`) * redirectx) < 5 && (long_07g * 3.64) < 3.35) && dark4);
      greyQ.set(`${container2}`, ((network6 ? 4 : 4)));
      container2 = String.fromCharCode(75, 0) == downk;
      let dicer = long_07g >= 6215032.0;
      do {
         long_07g -= parseFloat(`${greyQ.size + parseInt(`${description_x8}`)}`);
         if (dicer) {
            break;
         }
      } while (((long_07g / 1.91) > 3.33) && dicer);
      let infoQ = String.fromCharCode(119, 95, 51, 95, 103, 112, 111, 115, 116, 102, 105, 108, 116, 101, 114, 0);
      let layouty = String.fromCharCode(99, 111, 109, 98, 95, 122, 95, 51, 51, 0);
      infoQ = `${layouty.length % (Math.max(2, 2))}`;
      infoQ = `${1 * infoQ.length}`;
      let libsgcoreZ = infoQ.length <= 5206144;
      do {
         infoQ += `${infoQ.length}`;
         if (libsgcoreZ) {
            break;
         }
      } while ((infoQ == infoQ) && libsgcoreZ);
      downk = `${hoverm.length}`;
      downk = `${parseInt(`${long_07g}`)}`;
      direct_ = `${(String.fromCharCode(87, 0) == downk ? downk.length : tumbnailV)}`;
      while (3.66 == (pings * bodan7.length)) {
         let libavutilR = 1;
         let final_3I = String.fromCharCode(114, 95, 53, 55, 95, 115, 104, 105, 109, 109, 101, 114, 105, 110, 103, 0);
         let kuaishouv = 4;
         let graphics4: Map<any, any> = new Map([[String.fromCharCode(116, 95, 55, 54, 95, 112, 111, 108, 121, 109, 101, 115, 104, 0), 276], [String.fromCharCode(111, 102, 102, 101, 114, 115, 95, 101, 95, 51, 0), 720]]);
         final_3I += `${kuaishouv}`;
         kuaishouv -= 1;
         graphics4 = new Map([[`${graphics4.size}`, 2 + graphics4.size]]);
         let kickg = 0.0;
         let blackt = 5.0;
         kickg *= parseFloat(`${final_3I.length * 3}`);
         while (1 < (libavutilR % (Math.max(1, final_3I.length))) || (final_3I.length % (Math.max(1, 2))) < 3) {
            final_3I = `${parseInt(`${blackt}`) | 3}`;
            break;
         }
         blackt -= parseFloat(`${parseInt(`${kickg}`) & final_3I.length}`);
         let modaly: Map<any, any> = new Map([[String.fromCharCode(105, 95, 57, 54, 95, 114, 111, 108, 108, 0), 848], [String.fromCharCode(106, 95, 51, 54, 95, 100, 111, 119, 110, 109, 105, 120, 0), 714]]);
         bodan7 = "2";
         break;
      }
      if (hoverm != bodan7) {
         let sportst = String.fromCharCode(108, 95, 55, 56, 95, 117, 110, 97, 118, 97, 105, 98, 108, 101, 0);
         let pointP = false;
         let settingA = false;
         sportst = `${((pointP ? 3 : 3) >> (Math.min(Math.abs((settingA ? 3 : 1)), 2)))}`;
         sportst += `${(sportst == String.fromCharCode(55, 0) ? (pointP ? 2 : 3) : sportst.length)}`;
         sportst = "3";
         while (sportst.startsWith(`${pointP}`)) {
            let crownO: Map<any, any> = new Map([[String.fromCharCode(109, 101, 109, 100, 98, 95, 117, 95, 53, 53, 0), 688], [String.fromCharCode(97, 95, 56, 52, 95, 111, 112, 101, 110, 115, 115, 108, 118, 0), 69], [String.fromCharCode(115, 105, 110, 107, 95, 115, 95, 52, 54, 0), 365]]);
            pointP = 37 == sportst.length || crownO.size == 37;
            break;
         }
         let closex = pointP ? !pointP : pointP;
         do {
            pointP = sportst.endsWith(`${pointP}`);
            if (closex) {
               break;
            }
         } while ((!pointP && 2 >= sportst.length) && closex);
         if (pointP) {
            sportst += `${(String.fromCharCode(51, 0) == sportst ? sportst.length : (pointP ? 5 : 3))}`;
         }
         bodan7 += "2";
      }
      description_x8 *= direct_.length;
      let temperaturet = network6 ? !network6 : network6;
      do {
         network6 = downk.length > animationsi.length;
         if (temperaturet) {
            break;
         }
      } while (temperaturet && (network6));
      let tooltipse = String.fromCharCode(108, 117, 113, 52, 99, 98, 97, 111, 53, 0) == bodan7;
      do {
         let qaagX = 0.0;
         let singleq = 4;
         singleq -= parseInt(`${qaagX}`);
         singleq += 1 + singleq;
         for (let h = 0; h < 3; h++) {
            singleq -= singleq;
         }
         if (3 == (1 + singleq) || 3.66 == (5.53 * qaagX)) {
            singleq &= singleq & parseInt(`${qaagX}`);
         }
         for (let k = 0; k < 1; k++) {
            let linkP = String.fromCharCode(99, 97, 110, 100, 105, 100, 97, 116, 101, 95, 100, 95, 55, 49, 0);
            let reactnativejsj = 1.0;
            qaagX /= Math.max(5, 1);
            linkP = `${linkP.length}`;
            reactnativejsj /= Math.max(1, parseInt(`${reactnativejsj}`));
         }
         for (let b = 0; b < 3; b++) {
            singleq += parseInt(`${qaagX}`) - singleq;
         }
         bodan7 = `${animationsi.length - downk.length}`;
         if (tooltipse) {
            break;
         }
      } while (tooltipse && (!bodan7.endsWith(`${pings}`)));
      redirectx <<= Math.min(4, parseInt(`${Math.abs((parseInt(`${pings}`) / (Math.max(4, (network6 ? 5 : 3)))))}`));
      for (let c = 0; c < 2; c++) {
         let libavfilterY: Map<any, any> = new Map([[String.fromCharCode(99, 95, 54, 56, 95, 117, 117, 105, 100, 117, 115, 109, 116, 0), String.fromCharCode(119, 95, 52, 95, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 0)], [String.fromCharCode(105, 115, 115, 117, 105, 110, 103, 95, 104, 95, 52, 0), String.fromCharCode(98, 97, 99, 107, 100, 114, 111, 112, 95, 50, 95, 57, 55, 0)]]);
         let optionsQ = 1;
         let libcxxcomponents2 = 1;
         while (5 == (optionsQ - 2) || 2 == (libavfilterY.size - 2)) {
            let roundL = String.fromCharCode(107, 95, 49, 53, 95, 105, 112, 99, 0);
            let dragi = 2;
            libavfilterY = new Map([[`${libavfilterY.size}`, 2 | libavfilterY.size]]);
            roundL = `${roundL.length & 3}`;
            dragi -= 2;
            break;
         }
         libcxxcomponents2 |= libcxxcomponents2 % 3;
         optionsQ |= 3;
         let scoreU = optionsQ <= 7266317;
         do {
            optionsQ <<= Math.min(Math.abs(optionsQ ^ 2), 5);
            if (scoreU) {
               break;
            }
         } while (scoreU && (optionsQ >= libcxxcomponents2));
         let incidentL = String.fromCharCode(121, 95, 50, 53, 95, 102, 97, 117, 99, 101, 116, 115, 0);
         let borderlessC = String.fromCharCode(109, 95, 54, 53, 95, 98, 117, 102, 102, 101, 114, 115, 114, 99, 0);
         libcxxcomponents2 /= Math.max(libcxxcomponents2, 5);
         incidentL = `${borderlessC.length * incidentL.length}`;
         borderlessC = `${3 % (Math.max(2, borderlessC.length))}`;
         let libfbF = libavfilterY.size <= 7041731;
         do {
            libavfilterY.set(`${libcxxcomponents2}`, libcxxcomponents2 % (Math.max(3, optionsQ)));
            if (libfbF) {
               break;
            }
         } while ((Array.from(libavfilterY.values()).includes(libcxxcomponents2)) && libfbF);
         if (!Array.from(libavfilterY.keys()).includes(`${optionsQ}`)) {
            libavfilterY.set(`${optionsQ}`, libavfilterY.size & optionsQ);
         }
         while ((4 << (Math.min(1, Math.abs(optionsQ)))) >= 2) {
            optionsQ *= libavfilterY.size % (Math.max(1, 1));
            break;
         }
         libavfilterY.set(`${optionsQ}`, optionsQ * libavfilterY.size);
         pings *= hoverm.length & 1;
      }
      while (1 > bodan7.length) {
         bodan7 += `${bodan7.length >> (Math.min(Math.abs(2), 2))}`;
         break;
      }
      if (hoverm.length < private_jjp.length) {
         let membershipG = 2;
         let liveA: Map<any, any> = new Map([[String.fromCharCode(101, 95, 54, 56, 95, 104, 101, 97, 114, 116, 0), String.fromCharCode(117, 116, 120, 111, 95, 99, 95, 49, 54, 0)], [String.fromCharCode(109, 117, 108, 116, 105, 112, 108, 105, 101, 100, 95, 103, 95, 56, 0), String.fromCharCode(113, 117, 97, 110, 116, 105, 116, 121, 95, 97, 95, 51, 55, 0)], [String.fromCharCode(97, 95, 51, 55, 95, 105, 116, 117, 110, 101, 115, 0), String.fromCharCode(97, 95, 49, 48, 48, 95, 108, 111, 110, 103, 98, 105, 103, 0)]]);
         membershipG |= membershipG & liveA.size;
         let football5 = 3.0;
         let stepn = 5.0;
         let libavformatB = String.fromCharCode(114, 95, 55, 51, 95, 100, 101, 99, 114, 101, 97, 115, 101, 0);
         membershipG ^= parseInt(`${stepn}`);
         football5 *= parseFloat(`${libavformatB.length % 3}`);
         stepn -= parseFloat(`${libavformatB.length}`);
         if (1 >= (liveA.size ^ membershipG)) {
            membershipG >>= Math.min(Math.abs(membershipG), 1);
         }
         let manifestB: Array<any> = [212, 71, 71];
         let whatsapps = 9759242 <= liveA.size;
         do {
            liveA.set(`${manifestB.length}`, liveA.size | manifestB.length);
            if (whatsapps) {
               break;
            }
         } while (whatsapps && (Array.from(liveA.keys()).includes(`${manifestB.length}`)));
         let moviesj: Array<any> = [103, 313];
         let policyS: Array<any> = [377, 134];
         private_jjp = [1];
      }
      container2 = !container2 || private_jjp.length <= 88;
      for (let g = 0; g < 3; g++) {
         direct_ = `${bodan7.length}`;
      }
      let rncoreT = String.fromCharCode(118, 109, 97, 116, 114, 105, 120, 95, 119, 95, 55, 50, 0);
      let baiduN: Array<any> = [681, 810];
      let grapha = 1.0;
      if ((parseInt(`${grapha}`) * baiduN.length) == 2 && 1.54 == (parseFloat(`${baiduN.length}`) * grapha)) {
         let nativemoduleW = String.fromCharCode(100, 101, 115, 101, 108, 101, 99, 116, 101, 100, 95, 117, 95, 50, 57, 0);
         let unselectedG: Array<any> = [296, 765, 304];
         let membershipV = String.fromCharCode(105, 95, 54, 56, 95, 117, 110, 115, 97, 118, 101, 0);
         grapha += parseFloat(`${3 * baiduN.length}`);
         nativemoduleW = `${membershipV.length % 3}`;
         unselectedG = [1 & membershipV.length];
      }
      grapha /= Math.max(1, parseFloat(`${baiduN.length}`));
      grapha += parseFloat(`${parseInt(`${grapha}`) >> (Math.min(baiduN.length, 3))}`);
      let room2 = String.fromCharCode(102, 115, 105, 122, 101, 95, 122, 95, 56, 0);
      let libjsiI = 2;
      let questE = 4.0;
      baiduN.push(libjsiI % (Math.max(parseInt(`${grapha}`), 2)));
      room2 = `${1 + parseInt(`${questE}`)}`;
      libjsiI <<= Math.min(Math.abs(1 << (Math.min(2, Math.abs(parseInt(`${questE}`))))), 3);
      let memberp = rncoreT == String.fromCharCode(115, 116, 111, 54, 52, 97, 100, 0);
      do {
         rncoreT += `${baiduN.length / 3}`;
         if (memberp) {
            break;
         }
      } while (memberp && (2 >= rncoreT.length));
      if ((grapha - parseFloat(`${rncoreT.length}`)) < 5.10 || 3 < (parseInt(`${grapha}`) - rncoreT.length)) {
         let gpay8: Map<any, any> = new Map([[String.fromCharCode(112, 111, 108, 113, 97, 95, 122, 95, 54, 51, 0), 206], [String.fromCharCode(99, 119, 114, 115, 105, 95, 120, 95, 51, 55, 0), 926]]);
         let send5: Map<any, any> = new Map([[String.fromCharCode(97, 95, 55, 51, 95, 109, 109, 97, 112, 0), String.fromCharCode(114, 95, 51, 95, 114, 101, 115, 112, 111, 110, 115, 101, 115, 0)], [String.fromCharCode(122, 95, 53, 48, 95, 98, 114, 105, 110, 103, 0), String.fromCharCode(103, 95, 53, 53, 95, 116, 114, 110, 115, 0)]]);
         let bellG: Array<any> = [String.fromCharCode(110, 95, 49, 48, 95, 115, 101, 109, 105, 98, 111, 108, 100, 0), String.fromCharCode(113, 95, 50, 95, 106, 112, 101, 103, 108, 115, 100, 101, 99, 0)];
         grapha -= parseFloat(`${1}`);
         gpay8.set(`${bellG.length}`, send5.size);
         send5 = new Map([[`${gpay8.size}`, 3]]);
         bellG.push(send5.size * 2);
      }
      let anner_ = true;
      let linkr = true;
      grapha /= Math.max(parseFloat(`${3 / (Math.max(7, baiduN.length))}`), 4);
      anner_ = !anner_;
      downk = `${private_jjp.length}`;
      let main_yd = direct_ == String.fromCharCode(112, 50, 110, 0);
      do {
         direct_ = `${1 ^ downk.length}`;
         if (main_yd) {
            break;
         }
      } while (((direct_.length % (Math.max(2, 1))) >= 3) && main_yd);
      tumbnailV |= redirectx & greyQ.size;
      while ((5 >> (Math.min(2, private_jjp.length))) < 5 && (private_jjp.length >> (Math.min(Math.abs(5), 1))) < 5) {
         redirectx ^= 2;
         break;
      }

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
      let librrce = String.fromCharCode(97, 95, 51, 48, 95, 118, 109, 100, 118, 105, 100, 101, 111, 0);
      let aboutK = 2.0;
      let short_e3 = String.fromCharCode(106, 112, 101, 103, 116, 114, 97, 110, 95, 118, 95, 50, 56, 0);
      let mergerB: Array<any> = [859, 731];
      let private_bW = String.fromCharCode(117, 95, 49, 0);
      let sportq = String.fromCharCode(99, 108, 101, 97, 114, 115, 95, 102, 95, 55, 50, 0);
      let navigationa = String.fromCharCode(97, 115, 111, 99, 105, 100, 95, 111, 95, 56, 57, 0);
      librrce = `${(sportq == String.fromCharCode(88, 0) ? sportq.length : private_bW.length)}`;

      if (isSubmitting) return;

      aboutK *= parseFloat(`${3 - navigationa.length}`);

      if (isReadTermNCondition == false) {

         mergerB.push(1);
         yys_StatsForm.showToast('请勾选用户协议和隐私协议');

         while (parseInt(`${aboutK}`) < librrce.length) {
            aboutK *= parseFloat(`${mergerB.length % 2}`);
            break;
         }
         return;

         let floaterk = aboutK >= 8056580.0;
         do {
            aboutK /= Math.max((parseFloat(`${short_e3 == String.fromCharCode(74, 0) ? mergerB.length : short_e3.length}`)), 2);
            if (floaterk) {
               break;
            }
         } while (floaterk && ((5 >> (Math.min(4, navigationa.length))) >= 3));
      }

      let userInfo;

      for (let j = 0; j < 1; j++) {
         navigationa = "1";
      }

      try {

         short_e3 = `${mergerB.length}`;
         await GoogleSignin.hasPlayServices();

         for (let b = 0; b < 2; b++) {
            let type_ft: Map<any, any> = new Map([[String.fromCharCode(98, 95, 56, 48, 95, 112, 97, 114, 116, 105, 99, 105, 112, 97, 116, 105, 111, 110, 0), String.fromCharCode(98, 105, 116, 111, 112, 115, 95, 52, 95, 50, 55, 0)], [String.fromCharCode(115, 95, 50, 49, 95, 115, 97, 118, 101, 115, 116, 97, 116, 101, 0), String.fromCharCode(115, 95, 52, 52, 95, 99, 111, 110, 110, 101, 99, 116, 0)]]);
            let untickf = String.fromCharCode(101, 110, 101, 114, 103, 121, 95, 48, 95, 57, 53, 0);
            let gdtadvT: Array<any> = [String.fromCharCode(105, 110, 116, 101, 114, 97, 116, 105, 111, 110, 95, 54, 95, 57, 0), String.fromCharCode(105, 95, 54, 48, 95, 103, 97, 109, 117, 116, 0)];
            let related_ = 0;
            let goalf = 2.0;
            untickf = `${related_}`;
            gdtadvT.push(gdtadvT.length * 1);
            related_ |= gdtadvT.length + 3;
            goalf += 2;
            let hookz = 4;
            untickf += `${hookz}`;
            let clearv = String.fromCharCode(105, 57, 57, 120, 53, 122, 120, 107, 52, 55, 0) == untickf;
            do {
               let config1 = 4.0;
               let splashn = 0;
               let anner1 = false;
               let castE = 3;
               let chinasameR = 2;
               untickf = "2";
               config1 -= parseFloat(`${parseInt(`${config1}`)}`);
               splashn <<= Math.min(Math.abs(castE), 2);
               anner1 = 22 == chinasameR;
               chinasameR ^= parseInt(`${config1}`);
               if (clearv) {
                  break;
               }
            } while (clearv && (2 <= (type_ft.size & 4) || (untickf.length & 4) <= 3));
            for (let x = 0; x < 3; x++) {
               let langkeyP = 0.0;
               let relatedY = 0.0;
               let countryJ = String.fromCharCode(120, 102, 111, 114, 109, 101, 100, 95, 118, 95, 49, 53, 0);
               type_ft = new Map([[`${langkeyP}`, 1 % (Math.max(6, parseInt(`${langkeyP}`)))]]);
               relatedY /= Math.max(parseFloat(`${1}`), 3);
               countryJ += `${parseInt(`${relatedY}`)}`;
            }
            let borderlessw = 1.0;
            let reactI = 3.0;
            navigationa = `${sportq.length ^ short_e3.length}`;
         }

         if (await GoogleSignin.isSignedIn()) {

            let umengu = 3.0;
            let fastu = false;
            let emojis: Array<any> = [112, 429, 623];
            umengu *= parseFloat(`${parseInt(`${umengu}`) & 2}`);
            fastu = emojis.length > 48 || fastu;
            emojis.push((emojis.length * (fastu ? 5 : 2)));
            while ((umengu + 2.92) < 4.17) {
               let graym: Array<any> = [String.fromCharCode(110, 95, 53, 55, 95, 99, 111, 109, 109, 105, 116, 0), String.fromCharCode(100, 100, 115, 116, 95, 119, 95, 49, 50, 0)];
               let helper2: Array<any> = [377, 553];
               let libavformatS = String.fromCharCode(99, 111, 101, 102, 102, 115, 95, 109, 95, 49, 48, 48, 0);
               let taili = String.fromCharCode(110, 100, 101, 102, 95, 121, 95, 56, 51, 0);
               umengu /= Math.max(parseFloat(`${parseInt(`${umengu}`) + 1}`), 3);
               graym = [graym.length];
               helper2.push(1);
               libavformatS = `${libavformatS.length | helper2.length}`;
               taili += `${libavformatS.length}`;
               break;
            }
            let chinao: Map<any, any> = new Map([[String.fromCharCode(99, 108, 111, 117, 100, 95, 108, 95, 55, 57, 0), true], [String.fromCharCode(109, 115, 118, 105, 100, 101, 111, 95, 49, 95, 51, 55, 0), false], [String.fromCharCode(106, 114, 101, 102, 95, 55, 95, 54, 57, 0), false]]);
            let umengr = 4;
            let searchbars = true;
            umengu /= Math.max(parseFloat(`${parseInt(`${umengu}`) % (Math.max(chinao.size, 7))}`), 5);
            chinao.set(`${searchbars}`, 3 % (Math.max(10, umengr)));
            umengr %= Math.max(umengr % 2, 1);
            searchbars = !searchbars;
            aboutK += parseFloat(`${mergerB.length / 3}`);
            userInfo = await GoogleSignin.getCurrentUser();
         } else {

            aboutK += parseFloat(`${2}`);
            userInfo = await GoogleSignin.signIn();
         }

      } catch (error: any) {
         if (error.code === statusCodes.SIGN_IN_CANCELLED) {

         } else if (error.code === statusCodes.IN_PROGRESS) {

            while ((4 | mergerB.length) >= 4) {
               navigationa += `${(short_e3 == String.fromCharCode(112, 0) ? short_e3.length : sportq.length)}`;
               break;
            }


            if (!short_e3.startsWith(sportq)) {
               short_e3 += `${librrce.length - 3}`;
            }
            yys_StatsForm.showToast('请勿频繁操作');
         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

            let reactS = 6637968 <= short_e3.length;
            do {
               let gesture0: Array<any> = [810, 148];
               let ticki = 1;
               let humidityY = String.fromCharCode(121, 95, 55, 53, 95, 111, 112, 101, 114, 97, 116, 111, 114, 115, 0);
               let philippinesW = 4.0;
               let gpaye = String.fromCharCode(107, 95, 57, 51, 95, 118, 100, 97, 116, 97, 0);
               let resultf: Map<any, any> = new Map([[String.fromCharCode(120, 95, 54, 49, 95, 98, 114, 101, 97, 100, 99, 114, 117, 109, 98, 115, 0), 653], [String.fromCharCode(121, 95, 56, 54, 95, 115, 104, 111, 117, 121, 97, 99, 104, 111, 0), 269], [String.fromCharCode(112, 114, 111, 100, 117, 99, 101, 114, 95, 114, 95, 54, 49, 0), 874]]);
               let componentx: Array<any> = [882, 920, 277];
               philippinesW -= parseFloat(`${gesture0.length}`);
               gpaye = `${gpaye.length - 3}`;
               resultf = new Map([[`${resultf.size}`, 2 | resultf.size]]);
               componentx = [(gpaye == String.fromCharCode(81, 0) ? gpaye.length : resultf.size)];
               let libavfilter0 = 7426108 <= ticki;
               do {
                  ticki |= humidityY.length;
                  if (libavfilter0) {
                     break;
                  }
               } while ((4 > gesture0.length) && libavfilter0);
               ticki &= 2;
               ticki += 1;
               let unimplementedviews = 8317536 <= humidityY.length;
               do {
                  let statsZ = 3.0;
                  let screenA = 0;
                  humidityY += "1";
                  statsZ -= parseFloat(`${parseInt(`${statsZ}`) | screenA}`);
                  screenA /= Math.max(screenA, 2);
                  if (unimplementedviews) {
                     break;
                  }
               } while (unimplementedviews && (2 == (humidityY.length % (Math.max(4, 2))) || (ticki % 4) == 5));
               let topons = true;
               let final_lea = gesture0.length <= 5082245;
               do {
                  gesture0.push((humidityY.length | (topons ? 1 : 2)));
                  if (final_lea) {
                     break;
                  }
               } while (final_lea && ((parseFloat(`${gesture0.length}`) + philippinesW) >= 1.4 || 3 >= (1 + gesture0.length)));
               if (3 <= gesture0.length) {
                  ticki %= Math.max(1 + ticki, 2);
               }
               let time_yu: Array<any> = [String.fromCharCode(116, 95, 54, 51, 95, 116, 104, 117, 109, 98, 115, 117, 112, 0), String.fromCharCode(111, 95, 49, 48, 48, 95, 120, 109, 108, 115, 0)];
               humidityY += `${time_yu.length}`;
               gesture0 = [parseInt(`${philippinesW}`) - 3];
               let schedulerE = String.fromCharCode(100, 95, 57, 49, 95, 98, 105, 116, 115, 116, 114, 0);
               gesture0 = [schedulerE.length * 1];
               if ((ticki % (Math.max(2, gesture0.length))) >= 1) {
                  gesture0 = [humidityY.length << (Math.min(3, Math.abs(ticki)))];
               }
               short_e3 += `${1 & short_e3.length}`;
               if (reactS) {
                  break;
               }
            } while (reactS && (!short_e3.startsWith(`${librrce.length}`)));


            aboutK += parseFloat(`${short_e3.length}`);
            yys_StatsForm.showToast('谷歌服务获取失败');
         } else {

            let libfabricjni2 = String.fromCharCode(102, 97, 99, 101, 98, 111, 111, 107, 95, 121, 95, 53, 51, 0);
            let auto_aw = 1.0;
            auto_aw /= Math.max(2, parseFloat(`${1}`));
            let danger4 = String.fromCharCode(108, 97, 114, 103, 101, 115, 116, 95, 112, 95, 51, 52, 0);
            let pointo = String.fromCharCode(104, 97, 115, 104, 100, 101, 115, 116, 114, 111, 121, 95, 113, 95, 53, 48, 0);
            auto_aw /= Math.max(parseFloat(`${3 / (Math.max(8, pointo.length))}`), 2);
            danger4 = `${2 & danger4.length}`;
            pointo = `${danger4.length}`;
            auto_aw *= (parseFloat(`${String.fromCharCode(108, 0) == libfabricjni2 ? libfabricjni2.length : parseInt(`${auto_aw}`)}`));
            let canvas1 = 1.0;
            if (4.71 > (canvas1 + auto_aw) || 1.41 > (canvas1 + 4.71)) {
               let alerth: Array<any> = [395, 573];
               let grayT = String.fromCharCode(99, 111, 109, 109, 105, 116, 116, 101, 114, 95, 54, 95, 55, 57, 0);
               canvas1 -= libfabricjni2.length ^ grayT.length;
               alerth.push(alerth.length / (Math.max(8, alerth.length)));
               grayT += `${alerth.length}`;
            }
            let saveY: Array<any> = [348, 734];
            let anytimej: Array<any> = [519, 326];
            aboutK += parseFloat(`${librrce.length}`);


            sportq = `${3 ^ librrce.length}`;
            yys_StatsForm.showToast('登入失败，请稍后再试');
         }
         console.log(error.toString());

         let memberK = 5.0;
         let ball2: Array<any> = [694, 984, 905];
         while (!ball2.includes(memberK)) {
            memberK -= ball2.length;
            break;
         }
         memberK *= 3 - parseInt(`${memberK}`);
         let main_eR = 3.0;
         let sendT = ball2.length >= 8804154;
         do {
            ball2 = [parseInt(`${main_eR}`) * parseInt(`${memberK}`)];
            if (sendT) {
               break;
            }
         } while ((ball2.length < parseInt(`${memberK}`)) && sendT);
         for (let a = 0; a < 1; a++) {
            let uimanagerU = 3.0;
            main_eR *= parseFloat(`${2}`);
            uimanagerU += parseInt(`${uimanagerU}`) + parseInt(`${uimanagerU}`);
         }
         if ((ball2.length / (Math.max(9, parseInt(`${main_eR}`)))) < 3 || 1 < (3 * ball2.length)) {
            let profileQ: Array<any> = [139, 688, 327];
            let resendd: Map<any, any> = new Map([[String.fromCharCode(100, 101, 108, 105, 109, 105, 116, 101, 114, 115, 95, 103, 95, 50, 50, 0), 709], [String.fromCharCode(101, 95, 52, 57, 95, 114, 101, 99, 111, 118, 101, 114, 0), 252]]);
            let backgroundI: Map<any, any> = new Map([[String.fromCharCode(119, 95, 55, 51, 95, 116, 101, 115, 116, 99, 111, 110, 102, 105, 103, 0), 221], [String.fromCharCode(102, 97, 115, 116, 101, 115, 116, 95, 109, 95, 55, 53, 0), 654]]);
            let proxyM = false;
            let flipper2 = String.fromCharCode(112, 95, 49, 50, 95, 112, 114, 111, 99, 99, 101, 115, 115, 0);
            ball2.push(2 & ball2.length);
            profileQ = [3];
            resendd.set(flipper2, profileQ.length);
            backgroundI.set(`${profileQ.length}`, resendd.size);
            proxyM = 36 < resendd.size;
            flipper2 = `${(2 * (proxyM ? 5 : 2))}`;
         }
         navigationa += `${mergerB.length & parseInt(`${memberK}`)}`;
         return;
      }

      if (userInfo === null) {

         short_e3 = `${short_e3.length >> (Math.min(Math.abs(1), 3))}`;
         yys_StatsForm.showToast('登入失败，请稍后再试');

         navigationa = "3";
         return;
      }

      try {

         for (let x = 0; x < 1; x++) {
            private_bW += `${short_e3.length | 2}`;
         }
         setSubmitting(true);

         librrce = `${parseInt(`${aboutK}`) % (Math.max(9, mergerB.length))}`;

         userInfo = await yys_GesturesConst.signinupUser({
            loginType: 'EMAIL',
            email: userInfo.user.email,
            referralCode: referralCode,
            isGoogleLogin: true,
            userId: userState.user?.userId ?? '',
         });
      } catch (err: any) {
         GoogleSignin.signOut();

         let overu = String.fromCharCode(53, 114, 106, 104, 52, 0) == short_e3;
         do {
            short_e3 = `${librrce.length}`;
            if (overu) {
               break;
            }
         } while (overu && (short_e3.includes(sportq)));
         yys_StatsForm.showToast(err.toString());

         aboutK /= Math.max(parseFloat(`${1 ^ navigationa.length}`), 5);
         return;
      } finally {

         while (!navigationa.includes(`${private_bW.length}`)) {
            let uimanagerH = 5.0;
            let photoZ = String.fromCharCode(98, 101, 103, 105, 110, 110, 105, 110, 103, 95, 106, 95, 50, 49, 0);
            let dataN: Map<any, any> = new Map([[String.fromCharCode(110, 95, 55, 55, 95, 102, 105, 108, 108, 101, 100, 0), 398], [String.fromCharCode(104, 111, 108, 108, 111, 119, 95, 117, 95, 53, 55, 0), 937]]);
            let sentryN = String.fromCharCode(115, 116, 97, 114, 116, 99, 111, 100, 101, 95, 121, 95, 57, 57, 0);
            uimanagerH /= Math.max(4, parseFloat(`${parseInt(`${uimanagerH}`)}`));
            photoZ += `${sentryN.length & 3}`;
            dataN.set(`${sentryN}`, (String.fromCharCode(68, 0) == sentryN ? sentryN.length : dataN.size));
            uimanagerH *= parseFloat(`${1 | parseInt(`${uimanagerH}`)}`);
            let roundz = 5621170.0 <= uimanagerH;
            do {
               uimanagerH /= Math.max(parseFloat(`${parseInt(`${uimanagerH}`) * 1}`), 4);
               if (roundz) {
                  break;
               }
            } while (roundz && ((uimanagerH / 5) == 4.26));
            navigationa += `${(navigationa == String.fromCharCode(50, 0) ? navigationa.length : librrce.length)}`;
            break;
         }
         setSubmitting(false);

         let mathn = false;
         let gestureu = String.fromCharCode(114, 101, 99, 111, 110, 115, 116, 114, 117, 99, 116, 95, 112, 95, 53, 49, 0);
         let schedulern = false;
         let rewindw = String.fromCharCode(122, 95, 57, 57, 95, 111, 102, 102, 101, 116, 0);
         let classesL = String.fromCharCode(114, 95, 50, 49, 95, 104, 111, 109, 101, 0);
         mathn = !mathn;
         schedulern = rewindw.length >= 10;
         rewindw += `${rewindw.length >> (Math.min(Math.abs(1), 3))}`;
         classesL += "3";
         gestureu += `${gestureu.length >> (Math.min(Math.abs(1), 2))}`;
         let guide1 = mathn ? !mathn : mathn;
         do {
            mathn = !mathn;
            if (guide1) {
               break;
            }
         } while (guide1 && (mathn && gestureu.length > 3));
         mathn = gestureu.length > 74;
         gestureu = `${(2 & (mathn ? 3 : 4))}`;
         let mailT = mathn ? !mathn : mathn;
         do {
            mathn = (((!mathn ? gestureu.length : 4) & gestureu.length) == 4);
            if (mailT) {
               break;
            }
         } while ((!gestureu.startsWith(`${mathn}`)) && mailT);
         aboutK /= Math.max(parseFloat(`${mergerB.length}`), 3);
      }

      const resultData = userInfo.data;

      short_e3 += `${short_e3.length + private_bW.length}`;

      const user = yys_RelatedTooltips.fromJson(resultData);

      while (private_bW == String.fromCharCode(102, 0)) {
         let banner3 = String.fromCharCode(98, 101, 116, 104, 115, 111, 102, 116, 118, 105, 100, 101, 111, 95, 102, 95, 54, 0);
         let securityj = String.fromCharCode(112, 114, 115, 99, 116, 112, 95, 102, 95, 55, 57, 0);
         let g_managerA = securityj.length <= 7582491;
         do {
            securityj += `${banner3.length}`;
            if (g_managerA) {
               break;
            }
         } while (g_managerA && (securityj.length == 5));
         while (banner3.length >= securityj.length) {
            let controle = String.fromCharCode(112, 101, 114, 115, 105, 115, 116, 101, 110, 99, 101, 95, 98, 95, 54, 55, 0);
            let connectionC: Map<any, any> = new Map([[String.fromCharCode(111, 95, 52, 51, 95, 115, 117, 109, 109, 97, 114, 105, 101, 115, 0), String.fromCharCode(112, 95, 56, 51, 95, 116, 121, 112, 101, 100, 0)], [String.fromCharCode(101, 120, 112, 108, 111, 114, 101, 114, 95, 99, 95, 54, 0), String.fromCharCode(107, 109, 118, 99, 95, 53, 95, 57, 49, 0)], [String.fromCharCode(112, 108, 97, 121, 112, 97, 117, 115, 101, 95, 57, 95, 49, 51, 0), String.fromCharCode(112, 95, 52, 55, 95, 117, 110, 105, 102, 111, 114, 109, 115, 0)]]);
            let overT: Map<any, any> = new Map([[String.fromCharCode(106, 117, 109, 112, 95, 97, 95, 51, 0), 667], [String.fromCharCode(118, 115, 105, 110, 107, 95, 119, 95, 50, 51, 0), 478]]);
            let actiont: Array<any> = [530, 730, 156];
            let morev = 1;
            banner3 = `${controle.length}`;
            controle = `${1 / (Math.max(2, actiont.length))}`;
            connectionC.set(`${morev}`, 3);
            overT.set(`${overT.size}`, overT.size << (Math.min(Math.abs(3), 4)));
            actiont = [1];
            morev &= 1 ^ overT.size;
            break;
         }
         if (securityj.length <= banner3.length) {
            let foundX: Map<any, any> = new Map([[String.fromCharCode(111, 110, 101, 111, 102, 95, 98, 95, 52, 54, 0), String.fromCharCode(121, 95, 50, 54, 95, 99, 104, 97, 110, 103, 101, 99, 111, 117, 110, 116, 101, 114, 0)], [String.fromCharCode(99, 95, 51, 48, 95, 108, 105, 98, 114, 115, 118, 103, 0), String.fromCharCode(113, 115, 99, 97, 108, 101, 113, 112, 95, 117, 95, 52, 54, 0)]]);
            let auto_fO = true;
            let rewardA = 0;
            banner3 = `${2 / (Math.max(7, securityj.length))}`;
            foundX.set(`${auto_fO}`, ((auto_fO ? 2 : 2) - foundX.size));
            rewardA ^= rewardA;
         }
         for (let p = 0; p < 3; p++) {
            banner3 = `${(securityj == String.fromCharCode(87, 0) ? securityj.length : banner3.length)}`;
         }
         let skipK = String.fromCharCode(108, 95, 53, 57, 95, 114, 101, 99, 101, 110, 116, 101, 114, 0);
         let fastl = String.fromCharCode(101, 120, 112, 97, 110, 100, 97, 98, 108, 101, 95, 57, 95, 50, 48, 0);
         banner3 = `${skipK.length | 2}`;
         sportq = `${banner3.length}`;
         break;
      }

      await dispatch(addUserAuthState(user));

      if (private_bW.length <= mergerB.length) {
         mergerB = [navigationa.length];
      }

      if (userInfo.message.includes("注册成功")) {

         let mbnativeo = short_e3 == String.fromCharCode(50, 106, 110, 50, 122, 53, 0);
         do {
            short_e3 = `${mergerB.length}`;
            if (mbnativeo) {
               break;
            }
         } while ((3.14 <= (parseFloat(`${short_e3.length}`) * aboutK)) && mbnativeo);
         navigation.navigate('SetUsername');

      } else if (userInfo.message.includes("登录成功")) {

         let index3 = 5.0;
         let inactiveA = String.fromCharCode(109, 97, 107, 101, 115, 114, 112, 109, 95, 103, 95, 50, 48, 0);
         let libmapbufferjniu = 4.0;
         inactiveA = `${parseInt(`${libmapbufferjniu}`) * 3}`;
         inactiveA = `${inactiveA.length}`;
         let settingsH = String.fromCharCode(108, 95, 56, 51, 95, 118, 98, 112, 114, 105, 110, 116, 102, 0);
         while (inactiveA.length < parseInt(`${libmapbufferjniu}`)) {
            let bannerH = 1.0;
            let kuaishoud = 1.0;
            libmapbufferjniu -= (String.fromCharCode(88, 0) == settingsH ? settingsH.length : inactiveA.length);
            bannerH -= parseInt(`${kuaishoud}`);
            break;
         }
         index3 *= parseFloat(`${2}`);
         for (let l = 0; l < 3; l++) {
            let private_39O = String.fromCharCode(101, 95, 49, 56, 95, 116, 114, 101, 101, 99, 111, 100, 101, 114, 0);
            let phone4 = 4.0;
            let cancela = 0;
            index3 += parseFloat(`${inactiveA.length}`);
            private_39O = `${private_39O.length / 1}`;
            phone4 /= Math.max(1, parseFloat(`${private_39O.length - 1}`));
            cancela >>= Math.min(Math.abs(parseInt(`${phone4}`)), 5);
         }
         let morevI: Map<any, any> = new Map([[String.fromCharCode(116, 101, 109, 112, 108, 97, 116, 101, 95, 118, 95, 52, 51, 0), false], [String.fromCharCode(115, 97, 103, 97, 95, 119, 95, 54, 48, 0), false], [String.fromCharCode(118, 112, 105, 110, 116, 114, 97, 112, 114, 101, 100, 95, 103, 95, 51, 48, 0), true]]);
         let modeQ = false;
         inactiveA += `${3 - inactiveA.length}`;
         morevI = new Map([[`${morevI.size}`, ((modeQ ? 5 : 3) + 3)]]);
         modeQ = (15 >= ((modeQ ? 15 : morevI.size) % (Math.max(morevI.size, 9))));
         let libloggerc = 2.0;
         let expand0 = 1;
         let libzeusL = String.fromCharCode(114, 101, 99, 111, 110, 95, 49, 95, 55, 0);
         inactiveA += "3";
         expand0 |= libzeusL.length << (Math.min(5, Math.abs(expand0)));
         libzeusL = `${3 >> (Math.min(2, Math.abs(expand0)))}`;
         sportq = `${sportq.length - 2}`;

         if (user.isVip()) {

            librrce += `${private_bW.length << (Math.min(Math.abs(1), 2))}`;
            await AsyncStorage.setItem("showAds", "false");
         } else {

            if (3 == (private_bW.length | 4) || 2 == (4 | mergerB.length)) {
               let mapbufferj = String.fromCharCode(110, 95, 54, 48, 95, 99, 117, 98, 101, 100, 0);
               let ajaxI: Array<any> = [900, 592, 997];
               let contextK = 0.0;
               let inactived = String.fromCharCode(98, 95, 54, 51, 95, 116, 114, 101, 101, 0);
               let hooka = String.fromCharCode(97, 118, 103, 120, 95, 111, 95, 56, 52, 0);
               let dialogr = String.fromCharCode(110, 101, 105, 103, 104, 98, 111, 114, 95, 111, 95, 50, 53, 0);
               let edity: Array<any> = [514, 943, 223];
               contextK -= (inactived == String.fromCharCode(115, 0) ? edity.length : inactived.length);
               hooka = `${dialogr.length % 3}`;
               dialogr += `${1 | dialogr.length}`;
               edity.push(dialogr.length - 2);
               for (let b = 0; b < 1; b++) {
                  let stringi: Array<any> = [955, 370, 427];
                  let matches2 = 3.0;
                  let details3 = String.fromCharCode(109, 95, 51, 53, 95, 101, 118, 101, 114, 121, 119, 104, 101, 114, 101, 0);
                  let const_n5n: Map<any, any> = new Map([[String.fromCharCode(113, 95, 51, 95, 109, 105, 100, 105, 0), true], [String.fromCharCode(114, 101, 115, 105, 122, 105, 110, 103, 95, 114, 95, 50, 50, 0), true]]);
                  let success0: Map<any, any> = new Map([[String.fromCharCode(117, 95, 50, 95, 114, 103, 98, 116, 111, 0), String.fromCharCode(117, 95, 53, 50, 95, 101, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 0)], [String.fromCharCode(101, 120, 116, 95, 103, 95, 49, 53, 0), String.fromCharCode(99, 112, 108, 120, 95, 103, 95, 55, 50, 0)]]);
                  contextK /= Math.max(2, parseInt(`${contextK}`) + const_n5n.size);
                  stringi.push(1);
                  matches2 *= parseFloat(`${success0.size}`);
                  details3 = `${details3.length << (Math.min(Math.abs(1), 1))}`;
                  const_n5n.set(details3, stringi.length);
                  success0.set(details3, 2 * details3.length);
               }
               while (inactived.length == contextK) {
                  contextK *= parseInt(`${contextK}`);
                  break;
               }
               inactived = "3";
               while (ajaxI.length <= 4) {
                  let armvad = false;
                  let pagei = String.fromCharCode(104, 97, 108, 102, 102, 108, 111, 97, 116, 95, 107, 95, 53, 52, 0);
                  inactived = `${ajaxI.length * mapbufferj.length}`;
                  armvad = !armvad;
                  pagei += `${(pagei.length * (armvad ? 1 : 2))}`;
                  break;
               }
               let linkP = String.fromCharCode(118, 100, 98, 101, 95, 50, 95, 53, 55, 0);
               let videocommonj = 0;
               let photot = 4;
               ajaxI.push(photot >> (Math.min(Math.abs(3), 3)));
               linkP = `${3 & linkP.length}`;
               videocommonj >>= Math.min(5, Math.abs(videocommonj + 2));
               photot >>= Math.min(2, Math.abs(videocommonj % 1));
               let styleP = inactived.length <= 5167770;
               do {
                  let utils9 = 4.0;
                  let componenta = 5.0;
                  let filed5 = 0.0;
                  let main_gY = 4;
                  inactived = `${parseInt(`${contextK}`)}`;
                  utils9 += 3;
                  componenta += parseFloat(`${parseInt(`${filed5}`)}`);
                  filed5 += parseFloat(`${main_gY + 2}`);
                  main_gY |= 1;
                  if (styleP) {
                     break;
                  }
               } while ((3 >= (ajaxI.length >> (Math.min(inactived.length, 3)))) && styleP);
               mapbufferj = `${parseInt(`${contextK}`)}`;
               ajaxI.push(2);
               for (let s = 0; s < 2; s++) {
                  ajaxI = [2 - parseInt(`${contextK}`)];
               }
               inactived += `${ajaxI.length << (Math.min(Math.abs(2), 3))}`;
               for (let i = 0; i < 1; i++) {
                  ajaxI = [inactived.length];
               }
               private_bW += "3";
            }
            await AsyncStorage.setItem("showAds", "true");
         }

         await dispatch(changeScreenAction('登录成功'));

         let klevinY = String.fromCharCode(50, 49, 50, 97, 48, 0) == librrce;
         do {
            librrce = "3";
            if (klevinY) {
               break;
            }
         } while (klevinY && (librrce.length < navigationa.length));


         yys_event_common.userCenterLoginSuccessTimesAnalytics();
         yys_Filled.userCenterLoginSuccessTimesAnalytics();

         if (user.isVip()) {
            yys_event_common.userCenterVipLoginSuccessTimesAnalytics();
         }


         if (onGooleLoginSuccess) onGooleLoginSuccess();
      }
   }

   const onPressTermNCondition = () => {
      let fields = String.fromCharCode(110, 95, 52, 57, 95, 109, 105, 110, 117, 116, 101, 115, 0);
      let selection4 = 2;
      let form5 = String.fromCharCode(112, 101, 114, 105, 111, 100, 105, 99, 97, 108, 108, 121, 95, 112, 95, 49, 50, 0);
      let viewerp = 3.0;
      let textinputn = String.fromCharCode(110, 95, 57, 52, 95, 97, 116, 114, 97, 99, 0);
      let googlex = String.fromCharCode(101, 95, 57, 49, 95, 104, 97, 108, 100, 99, 108, 117, 116, 115, 114, 99, 0);
      let nalyticsh = String.fromCharCode(97, 118, 105, 100, 95, 115, 95, 57, 53, 0);
      let zoomy = 2.0;
      let filledO = 3.0;
      let pathy = String.fromCharCode(115, 95, 49, 57, 95, 119, 101, 120, 112, 97, 110, 100, 0);
      let nalyticsw = String.fromCharCode(121, 95, 54, 48, 95, 110, 111, 116, 105, 102, 105, 99, 97, 116, 105, 111, 110, 115, 0);
      let dialogM: Array<any> = [String.fromCharCode(105, 110, 105, 116, 104, 95, 113, 95, 49, 56, 0), String.fromCharCode(99, 105, 110, 101, 112, 97, 107, 95, 99, 95, 50, 54, 0), String.fromCharCode(99, 95, 54, 51, 95, 103, 101, 116, 98, 121, 116, 101, 0)];
      let typingJ = 5;
      let delegate_c82 = false;
      let collectionk = String.fromCharCode(54, 117, 56, 119, 100, 116, 0) == form5;
      do {
         form5 += `${textinputn.length}`;
         if (collectionk) {
            break;
         }
      } while ((pathy == String.fromCharCode(54, 0)) && collectionk);
      form5 += `${fields.length << (Math.min(Math.abs(2), 5))}`;
      for (let f = 0; f < 1; f++) {
         let libcrashsdk6: Map<any, any> = new Map([[String.fromCharCode(107, 95, 56, 95, 119, 115, 118, 113, 97, 0), 830], [String.fromCharCode(119, 95, 57, 48, 95, 102, 105, 118, 101, 0), 416]]);
         let footballn = String.fromCharCode(116, 114, 97, 110, 115, 97, 99, 116, 105, 111, 110, 115, 95, 54, 95, 49, 52, 0);
         libcrashsdk6 = new Map([[`${libcrashsdk6.size}`, footballn.length]]);
         let libjsiS = 3.0;
         let libglogL = true;
         libcrashsdk6 = new Map([[`${libglogL}`, 1 - parseInt(`${libjsiS}`)]]);
         let eactO = String.fromCharCode(104, 114, 116, 102, 95, 102, 95, 49, 49, 0);
         let pointG = String.fromCharCode(115, 95, 48, 95, 101, 118, 97, 108, 102, 117, 110, 99, 0);
         textinputn = `${libcrashsdk6.size + googlex.length}`;
      }
      let savev = String.fromCharCode(97, 100, 100, 107, 101, 121, 95, 111, 95, 50, 0);
      for (let p = 0; p < 1; p++) {
         let page1: Array<any> = [575, 789, 297];
         let applicationC: Map<any, any> = new Map([[String.fromCharCode(103, 95, 57, 53, 95, 112, 111, 108, 121, 115, 116, 97, 114, 0), 10], [String.fromCharCode(117, 95, 55, 53, 95, 106, 115, 105, 109, 100, 101, 120, 116, 0), 396]]);
         savev = `${page1.length / (Math.max(3, 5))}`;
         page1 = [applicationC.size];
         applicationC.set(`${applicationC.size}`, 2 + applicationC.size);
      }
      savev += `${1 >> (Math.min(3, savev.length))}`;
      for (let y = 0; y < 1; y++) {
         savev = "2";
      }
      nalyticsh += `${selection4}`;
      textinputn = `${(googlex == String.fromCharCode(112, 0) ? pathy.length : googlex.length)}`;
      form5 = `${textinputn.length << (Math.min(fields.length, 1))}`;
      filledO *= 2 << (Math.min(5, pathy.length));
      for (let w = 0; w < 1; w++) {
         pathy += "1";
      }
      if (parseInt(`${filledO}`) >= textinputn.length) {
         filledO += 3 % (Math.max(parseInt(`${viewerp}`), 9));
      }
      while (1 >= textinputn.length) {
         let google1 = false;
         let signinupw = String.fromCharCode(120, 95, 56, 48, 95, 118, 101, 114, 105, 102, 121, 105, 110, 103, 0);
         let componentz = String.fromCharCode(112, 95, 49, 49, 95, 99, 108, 111, 115, 101, 99, 98, 0);
         let downd: Map<any, any> = new Map([[String.fromCharCode(106, 95, 56, 57, 0), 32], [String.fromCharCode(122, 95, 51, 56, 95, 102, 108, 111, 111, 114, 115, 0), 622]]);
         let savet = 3.0;
         let dark2 = 5;
         componentz = `${(String.fromCharCode(79, 0) == signinupw ? (google1 ? 2 : 5) : signinupw.length)}`;
         downd.set(`${dark2}`, downd.size / (Math.max(4, dark2)));
         savet *= parseFloat(`${downd.size}`);
         componentz += `${componentz.length << (Math.min(Math.abs(2), 1))}`;
         google1 = 73 >= signinupw.length && 73 >= componentz.length;
         componentz = `${((google1 ? 2 : 3))}`;
         signinupw += `${(signinupw == String.fromCharCode(51, 0) ? (google1 ? 4 : 2) : signinupw.length)}`;
         let football1: Map<any, any> = new Map([[String.fromCharCode(117, 95, 55, 48, 95, 105, 110, 100, 101, 120, 105, 110, 103, 0), 407], [String.fromCharCode(114, 101, 112, 108, 105, 99, 97, 116, 101, 95, 100, 95, 53, 51, 0), 690], [String.fromCharCode(115, 116, 97, 116, 105, 115, 116, 105, 99, 115, 95, 49, 95, 56, 49, 0), 858]]);
         let modityD = 0;
         let stationsu = String.fromCharCode(99, 102, 102, 116, 102, 95, 48, 95, 55, 54, 0);
         google1 = modityD <= 18 && String.fromCharCode(80, 0) == signinupw;
         football1 = new Map([[`${football1.size}`, stationsu.length | football1.size]]);
         modityD &= stationsu.length;
         let countdowns: Map<any, any> = new Map([[String.fromCharCode(116, 114, 97, 110, 115, 102, 111, 114, 109, 101, 114, 115, 95, 49, 95, 57, 52, 0), 848], [String.fromCharCode(121, 95, 55, 53, 95, 116, 111, 112, 105, 99, 115, 0), 99], [String.fromCharCode(109, 101, 115, 97, 103, 101, 115, 95, 97, 95, 57, 54, 0), 705]]);
         if (signinupw != String.fromCharCode(83, 0) || componentz == String.fromCharCode(115, 0)) {
            componentz += `${countdowns.size}`;
         }
         let friendsn = 3.0;
         viewerp /= Math.max(1, 3 + signinupw.length);
         break;
      }
      let materials: Array<any> = [884, 504, 256];
      let loadingn = String.fromCharCode(107, 95, 48, 95, 109, 111, 100, 105, 102, 121, 0);
      let clockG = String.fromCharCode(105, 108, 98, 99, 102, 105, 120, 95, 110, 95, 51, 57, 0);
      while (3 > clockG.length) {
         clockG += `${materials.length}`;
         break;
      }
      loadingn += `${clockG.length << (Math.min(5, materials.length))}`;
      let viewsZ = 2.0;
      let playercommonM = 4.0;
      clockG += "1";
      viewsZ *= parseFloat(`${clockG.length}`);
      let friendsc = 0;
      let loadinge = 5;
      let mintegralW = 5.0;
      let footballp = 0.0;
      let refreshI = String.fromCharCode(111, 95, 56, 56, 95, 99, 108, 111, 115, 101, 100, 0);
      friendsc %= Math.max(3, 3);
      refreshI = `${refreshI.length & refreshI.length}`;
      while ((3 >> (Math.min(3, Math.abs(loadinge)))) <= 3) {
         loadinge -= parseInt(`${viewsZ}`);
         break;
      }
      viewerp /= Math.max(1, 1 - selection4);
      pathy = `${googlex.length | parseInt(`${zoomy}`)}`;
      let searchh = String.fromCharCode(103, 53, 51, 120, 0) == nalyticsh;
      do {
         nalyticsh = `${1 + form5.length}`;
         if (searchh) {
            break;
         }
      } while (searchh && (4 == nalyticsh.length));
      for (let d = 0; d < 3; d++) {
         fields = `${(String.fromCharCode(78, 0) == textinputn ? textinputn.length : nalyticsh.length)}`;
      }
      googlex += `${googlex.length}`;
      if (form5 == String.fromCharCode(100, 0)) {
         googlex = "3";
      }
      let codegenb = 5.0;
      let tempK = String.fromCharCode(114, 101, 115, 105, 103, 110, 115, 95, 114, 95, 54, 55, 0);
      let libglogt: Array<any> = [479, 483, 420];
      let videocommonl = 4.0;
      let minivodV = true;
      tempK = `${2 / (Math.max(10, libglogt.length))}`;
      videocommonl -= parseFloat(`${3 ^ parseInt(`${videocommonl}`)}`);
      minivodV = 63.89 <= videocommonl;
      let comment3 = true;
      let sportR = String.fromCharCode(98, 95, 52, 53, 95, 112, 101, 114, 109, 117, 116, 101, 115, 0);
      let minivodl = String.fromCharCode(102, 111, 117, 114, 120, 95, 118, 95, 50, 50, 0);
      tempK += `${3 & minivodl.length}`;
      comment3 = (sportR.length ^ sportR.length) > 11;
      libglogt.push(parseInt(`${codegenb}`));
      tempK += `${libglogt.length}`;
      codegenb *= parseFloat(`${libglogt.length / (Math.max(tempK.length, 8))}`);
      while (5.45 == (parseFloat(`${tempK.length}`) * codegenb) && 3 == (parseInt(`${codegenb}`) * 3)) {
         codegenb *= parseFloat(`${2}`);
         break;
      }
      for (let b = 0; b < 1; b++) {
         tempK += "3";
      }
      libglogt = [2];
      for (let t = 0; t < 1; t++) {
         libglogt = [1 * parseInt(`${codegenb}`)];
      }
      nalyticsw = `${1 - tempK.length}`;
      textinputn += `${nalyticsh.length % (Math.max(3, 3))}`;
      let e_lock4 = String.fromCharCode(108, 50, 114, 0) == textinputn;
      do {
         textinputn = `${3 & parseInt(`${zoomy}`)}`;
         if (e_lock4) {
            break;
         }
      } while (e_lock4 && ((textinputn.length << (Math.min(Math.abs(1), 3))) > 1 || 5 > (1 << (Math.min(5, Math.abs(selection4))))));
      viewerp -= textinputn.length;
      while (viewerp >= 1.53) {
         let infon = 0.0;
         let yellowt = 5.0;
         let home7 = String.fromCharCode(116, 95, 57, 51, 95, 106, 115, 111, 110, 114, 112, 99, 0);
         let gradle5 = String.fromCharCode(99, 111, 110, 100, 95, 50, 95, 56, 54, 0);
         if (4.11 < (infon / (Math.max(gradle5.length, 7)))) {
            infon /= Math.max(5, parseInt(`${yellowt}`) - gradle5.length);
         }
         gradle5 = "1";
         gradle5 = `${home7.length * 1}`;
         yellowt *= parseFloat(`${gradle5.length}`);
         infon *= 1 << (Math.min(Math.abs(parseInt(`${infon}`)), 3));
         viewerp += nalyticsw.length;
         break;
      }
      fields += "1";
      nalyticsh = `${(googlex == String.fromCharCode(107, 0) ? parseInt(`${filledO}`) : googlex.length)}`;

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
      let volumet: Array<any> = [831, 762, 703];
      let notificationZ = 0;
      let selectedY = true;
      let leakcheckerF = 2.0;
      let combinedM: Array<any> = [String.fromCharCode(120, 95, 54, 52, 95, 112, 97, 114, 97, 109, 101, 116, 114, 105, 99, 0), String.fromCharCode(101, 95, 56, 95, 105, 122, 101, 114, 111, 0)];
      let viewsW: Array<any> = [477, 774, 909];
      let libreactnativejni0 = 0.0;
      volumet.push(2 - parseInt(`${libreactnativejni0}`));

      if (isSubmitting) return;

      for (let w = 0; w < 2; w++) {
         leakcheckerF -= 2 & parseInt(`${leakcheckerF}`);
      }

      if (isReadTermNCondition == false) {

         for (let v = 0; v < 3; v++) {
            viewsW = [parseInt(`${libreactnativejni0}`)];
         }
         return;

         let turng = 3;
         let manifestV: Map<any, any> = new Map([[String.fromCharCode(117, 110, 107, 105, 99, 107, 95, 105, 95, 52, 52, 0), 953], [String.fromCharCode(115, 111, 114, 101, 99, 101, 105, 118, 101, 95, 112, 95, 52, 49, 0), 245]]);
         let hejiK = String.fromCharCode(99, 111, 109, 112, 97, 114, 97, 98, 108, 101, 95, 56, 95, 48, 0);
         while ((4 | turng) == 5) {
            let thailandZ: Array<any> = [632, 981, 124];
            let package_0F = 5.0;
            let giftG = 5;
            let skipD = 3.0;
            manifestV.set(`${skipD}`, giftG % (Math.max(parseInt(`${skipD}`), 1)));
            thailandZ = [thailandZ.length];
            package_0F /= Math.max(parseInt(`${package_0F}`), 3);
            giftG ^= parseInt(`${package_0F}`) | 2;
            break;
         }
         if (manifestV.size > hejiK.length) {
            manifestV = new Map([[`${manifestV.size}`, turng ^ 1]]);
         }
         manifestV = new Map([[`${manifestV.size}`, 3]]);
         let sentryH = 5603142 <= manifestV.size;
         do {
            manifestV = new Map([[`${turng}`, hejiK.length | 3]]);
            if (sentryH) {
               break;
            }
         } while (sentryH && (manifestV.get(`${turng}`) == null));
         let gemfileA = String.fromCharCode(108, 111, 119, 98, 100, 95, 54, 95, 55, 48, 0);
         let selectedV: Map<any, any> = new Map([[String.fromCharCode(97, 116, 114, 97, 99, 95, 114, 95, 49, 54, 0), true], [String.fromCharCode(101, 110, 117, 109, 101, 114, 97, 116, 101, 95, 57, 95, 57, 56, 0), false]]);
         manifestV = new Map([[`${selectedV.size}`, 3 - turng]]);
         gemfileA += `${gemfileA.length ^ 1}`;
         selectedV.set(gemfileA, 3 % (Math.max(7, gemfileA.length)));
         for (let u = 0; u < 1; u++) {
            let bell6: Array<any> = [300, 838];
            manifestV = new Map([[`${manifestV.size}`, manifestV.size * bell6.length]]);
         }
         let armvaa = 4.0;
         let controlsB = 4.0;
         let singapore8 = String.fromCharCode(104, 95, 54, 95, 109, 117, 108, 116, 105, 112, 97, 114, 116, 0);
         let twitterV = 4;
         let acopy_qk = 2.0;
         turng *= singapore8.length;
         singapore8 += `${parseInt(`${acopy_qk}`)}`;
         twitterV += twitterV + parseInt(`${acopy_qk}`);
         manifestV = new Map([[`${manifestV.size}`, manifestV.size]]);
         leakcheckerF += notificationZ >> (Math.min(Math.abs(turng), 4));
      }

      const formattedLoginValue = loginType === 'phone' ? loginValue.replace(/\s/g, '') : loginValue;



      for (let l = 0; l < 1; l++) {
         viewsW.push(3);
      }


      let applei = 8693203 <= volumet.length;
      do {
         volumet.push(parseInt(`${leakcheckerF}`) * combinedM.length);
         if (applei) {
            break;
         }
      } while ((5 < (notificationZ << (Math.min(Math.abs(1), 4))) || (notificationZ << (Math.min(Math.abs(1), 1))) < 2) && applei);


      notificationZ |= volumet.length;


      if ((volumet.length + 1) < 5) {
         let themev: Array<any> = [947, 166];
         let traminiC = String.fromCharCode(120, 95, 49, 56, 95, 116, 101, 115, 116, 115, 0);
         let watchG = 0;
         let resendH = 0;
         traminiC = `${resendH - 2}`;
         let anner0 = resendH >= 5751450;
         do {
            resendH |= watchG;
            if (anner0) {
               break;
            }
         } while (((watchG % (Math.max(4, 5))) == 5 || (watchG % (Math.max(resendH, 7))) == 4) && anner0);
         let register_iY = true;
         let leakcheckerw = true;
         if (watchG <= 1) {
            watchG += (1 * (register_iY ? 1 : 5));
         }
         let baseU = true;
         let watchs = 4;
         let carouselF = 4.0;
         resendH |= watchG / (Math.max(2, 3));
         baseU = watchs < parseInt(`${carouselF}`);
         watchs += watchs;
         carouselF += parseFloat(`${parseInt(`${carouselF}`) * 3}`);
         watchG |= traminiC.length / 3;
         let entryg = String.fromCharCode(97, 97, 99, 101, 110, 99, 100, 115, 112, 95, 103, 95, 53, 52, 0);
         let photoY = String.fromCharCode(118, 95, 51, 50, 95, 101, 120, 99, 108, 117, 100, 101, 0);
         register_iY = leakcheckerw || 96 == watchG;
         entryg = "1";
         photoY += "1";
         traminiC = "2";
         for (let f = 0; f < 1; f++) {
            let stringsl: Array<any> = [145, 330];
            traminiC += `${traminiC.length}`;
            stringsl = [stringsl.length * 3];
         }
         let side9 = watchG >= 8864481;
         do {
            watchG /= Math.max(resendH % 1, 2);
            if (side9) {
               break;
            }
         } while (((resendH % (Math.max(4, 1))) >= 1 && (watchG % 4) >= 5) && side9);
         let commona = register_iY ? !register_iY : register_iY;
         do {
            register_iY = !traminiC.startsWith(`${register_iY}`);
            if (commona) {
               break;
            }
         } while (commona && (1 > (watchG & 3) || watchG > 3));
         if (traminiC.includes(`${register_iY}`)) {
            traminiC += `${resendH + 2}`;
         }
         volumet.push(traminiC.length);
         themev = [themev.length % 1];
      }

      if (formattedLoginValue === "" || loginValueErrMsg !== null) {
         setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
         return;
      }

      try {

         let expiredg = selectedY ? !selectedY : selectedY;
         do {
            selectedY = libreactnativejni0 <= 18.86;
            if (expiredg) {
               break;
            }
         } while (expiredg && (!selectedY));
         setSubmitting(true);

         let ksadg = volumet.length >= 6187472;
         do {
            volumet = [notificationZ];
            if (ksadg) {
               break;
            }
         } while (((4 / (Math.max(5, volumet.length))) <= 5) && ksadg);

         await yys_GesturesConst.signinupUser({
            loginType: loginType === 'email' ? 'EMAIL' : 'SMS',
            email: loginType === 'email' ? loginValue : undefined,

            phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + formattedLoginValue : undefined,
            countryId: loginType === 'phone' ? countryPhoneSelected?.country_id : undefined,
            referralCode: referralCode,
            userId: userState.user?.userId ?? '',
         });
      } catch (err: any) {
         if (!err?.message.includes('验证码已发送')) {
            setSubmitting(false);

            if (selectedY) {
               selectedY = !selectedY;
            }
            setLoginValueErrMsg(err.message);

            volumet.push(1);
            return;
         }
      }

      setSubmitting(false);

      viewsW.push(volumet.length ^ parseInt(`${libreactnativejni0}`));

      dispatch(hideBottomSheetAction());

      let twitterG = 5444904 <= notificationZ;
      do {
         notificationZ *= combinedM.length;
         if (twitterG) {
            break;
         }
      } while (twitterG && ((notificationZ * 3) > 4));
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
   console.log('loginValue: ', loginValue)
   console.log('loginValueErrMsg: ', loginValueErrMsg)
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
         {/* <TouchableOpacity
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
