import { Divider } from "@rneui/base";
import { ReactNode, useCallback, useEffect, useState } from "react";
import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { Switch } from "react-native-switch";
import WatchAnytimeVipModal from "../modal/yys_models";
import EighteenPlusOverlay from "../modal/yys_checkbox_init";
import CountdownIndicator from "../button/yys_benefit";
import AdultModeCountdownIndicator from "./yys_champion";
import AdultModeSwitch from "./yys_libreactnativeblob_chart";
import { screenModel } from "@type/yys_service_setting";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/yys_frame";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import {
  acceptOverEighteen,
  disableAdultMode,
  enableAdultMode,
  enableWatchAnytimeAdultMode,
  hideAdultModeDisclaimer,
  hideAdultModeVip,
  hideAdultVipPrivilegeMiniVideoAction,
  incrementAdultVideoWatchTime,
  showAdultVipPrivilegeMiniVideoAction,
} from "@redux/actions/yys_runtimescheduler";
import { UMENG_CHANNEL } from "@utility/yys_ajax_switch";
import { AdultVipPrivilegeOverlay } from "../modal/yys_kick";
import { VipPrivilegeFloatingIndicator } from "./yys_close_link";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
interface yys_ConfigureUimanager { }

const eighteenPlusControls = ({ }: yys_ConfigureUimanager) => {
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );
  const userState = useSelector<yys_HejiCricket>('userReducer');
  const {
    adultModeVipShow,
    adultModeDisclaimerShow,
    adultMode,
    watchAnytimeAdultMode,
    isOverEighteenAccepted,
    showAdultVipPrivilegeMiniVideo
  } = screenState;
  const dispatch = useAppDispatch();
  const isVip = yys_RelatedTooltips.isVip(userState.user);

  
  
  
  
  
  
  
  //   return () => clearInterval(interval)
  
  console.log(Platform.OS)

  const handleAccept = useCallback(() => {
       let goalu = String.fromCharCode(104,95,53,51,95,100,111,119,110,108,111,97,100,97,98,108,101,0);
    let stylesV = 2;
    let complete1 = 1;
    let appsE = 1.0;
    let default_eK = 3.0;
    let topicC = String.fromCharCode(121,95,53,95,105,104,100,114,0);
    let libsgcoreG = 0;
    let ksadf = 2.0;
    let circler = false;
    let proxyh = 2.0;
    let unreada = String.fromCharCode(112,115,101,117,100,111,95,48,95,52,56,0);
    let bodanP = String.fromCharCode(110,111,116,99,104,95,52,95,49,56,0);
    let calendarm = 5.0;
    let sortx: Map<any, any> = new Map([[String.fromCharCode(99,104,101,118,114,111,110,95,121,95,51,52,0),981], [String.fromCharCode(97,118,114,101,115,97,109,112,108,101,114,101,115,95,99,95,56,51,0),43]]);
    let blackx = String.fromCharCode(105,110,99,114,101,109,101,110,116,115,95,118,95,49,56,0);
   while (default_eK < 1.38 || (default_eK / 1.38) < 5.3) {
      circler = parseFloat(`${complete1}`) >= appsE;
      break;
   }
      stylesV -= parseInt(`${proxyh}`);
   let armvar = topicC == String.fromCharCode(110,51,107,100,100,99,112,105,109,110,0);
   do {
      topicC = `${complete1}`;
      if (armvar) {
         break;
      }
   } while ((goalu == topicC) && armvar);
      circler = 27 <= goalu.length;
   while (2 >= goalu.length) {
      goalu = `${topicC.length}`;
      break;
   }
   while (1.94 == (stylesV - proxyh) && (1.94 - proxyh) == 1.43) {
       let mimo3: Array<any> = [593, 138];
          let customL = true;
         mimo3 = [3];
      while (3 == (mimo3.length << (Math.min(1, mimo3.length)))) {
         mimo3.push(3 | mimo3.length);
         break;
      }
      let aboutP = 7875809 <= mimo3.length;
      do {
         mimo3 = [mimo3.length + mimo3.length];
         if (aboutP) {
            break;
         }
      } while (aboutP && (mimo3.includes(mimo3.length)));
      stylesV ^= parseInt(`${appsE}`) / 3;
      break;
   }
      complete1 *= stylesV;

    console.debug("accepted 18+");

   if ((1.54 / (Math.max(8, ksadf))) >= 2.31 || (1.54 / (Math.max(9, ksadf))) >= 2.71) {
      proxyh /= Math.max(2, stylesV);
   }
      unreada = `${stylesV}`;
      default_eK -= parseFloat(`${topicC.length | 1}`);
      goalu += `${2 / (Math.max(3, libsgcoreG))}`;
      stylesV %= Math.max(3 % (Math.max(4, bodanP.length)), 2);
      libsgcoreG |= 1;
       let contextq = String.fromCharCode(99,111,112,121,105,110,103,95,104,95,54,52,0);
       let configuree: Array<any> = [948, 252];
       let componentregistryx = true;
         configuree.push(configuree.length ^ contextq.length);
         componentregistryx = String.fromCharCode(72,0) == contextq;
      while (3 <= configuree.length) {
          let fillD = false;
          let libglogf = 3;
         componentregistryx = (3 > ((!fillD ? 3 : contextq.length) >> (Math.min(contextq.length, 1))));
         fillD = libglogf < libglogf;
         break;
      }
          let schedulet = String.fromCharCode(117,110,115,111,114,116,101,100,95,98,95,56,48,0);
         componentregistryx = configuree.length <= 73 && componentregistryx;
         schedulet = `${schedulet.length}`;
         configuree = [(contextq == String.fromCharCode(103,0) ? contextq.length : configuree.length)];
      for (let d = 0; d < 3; d++) {
         contextq = `${(String.fromCharCode(106,0) == contextq ? configuree.length : contextq.length)}`;
      }
          let detailsP: Map<any, any> = new Map([[String.fromCharCode(100,95,56,56,95,109,112,115,117,98,0),143], [String.fromCharCode(110,95,53,55,95,99,111,100,101,99,114,97,119,0),6], [String.fromCharCode(108,111,97,100,101,100,95,56,95,49,48,0),614]]);
          let mbnativeK: Array<any> = [912, 637, 474];
         configuree = [contextq.length << (Math.min(Math.abs(3), 5))];
         detailsP.set(`${mbnativeK.length}`, detailsP.size ^ 3);
         mbnativeK.push(detailsP.size);
      let watcho = 7172125 >= configuree.length;
      do {
          let area5 = false;
         configuree = [((componentregistryx ? 3 : 1) | 2)];
         area5 = !area5;
         if (watcho) {
            break;
         }
      } while ((5 > (configuree.length / 1) || configuree.length > 1) && watcho);
         configuree.push(configuree.length);
      libsgcoreG *= 2 ^ topicC.length;
    dispatch(enableAdultMode());

      default_eK -= parseFloat(`${3 - parseInt(`${appsE}`)}`);
   while (circler) {
      circler = default_eK > 56.10;
      break;
   }
   if (2.86 < default_eK) {
      ksadf /= Math.max(2, complete1);
   }
      topicC += `${bodanP.length}`;
   while (calendarm >= bodanP.length) {
      calendarm *= parseInt(`${appsE}`);
      break;
   }
   if (5.50 < (appsE + default_eK)) {
      appsE /= Math.max(parseFloat(`${unreada.length | 3}`), 1);
   }
      topicC += "1";
    dispatch(acceptOverEighteen());

   while ((stylesV >> (Math.min(bodanP.length, 3))) < 2 || 1 < (2 >> (Math.min(5, bodanP.length)))) {
       let libavcodecr = String.fromCharCode(98,105,116,114,97,116,101,115,95,49,95,55,51,0);
       let mountingE = 4.0;
       let dragE = String.fromCharCode(115,117,98,105,109,97,103,101,95,51,95,54,56,0);
       let sansH = String.fromCharCode(108,95,57,50,95,112,111,115,105,116,105,111,110,0);
         sansH += `${parseInt(`${mountingE}`) << (Math.min(libavcodecr.length, 3))}`;
      for (let r = 0; r < 2; r++) {
         dragE = "2";
      }
      if (2 >= dragE.length) {
         sansH += `${dragE.length % (Math.max(sansH.length, 10))}`;
      }
      for (let z = 0; z < 2; z++) {
         libavcodecr = `${sansH.length & parseInt(`${mountingE}`)}`;
      }
          let pause_ = String.fromCharCode(120,95,52,52,95,117,112,108,111,97,100,0);
         dragE = `${(libavcodecr == String.fromCharCode(107,0) ? libavcodecr.length : parseInt(`${mountingE}`))}`;
         pause_ = `${2 + pause_.length}`;
      stylesV %= Math.max(1, bodanP.length | 3);
      break;
   }
      stylesV += bodanP.length | 2;
   for (let z = 0; z < 1; z++) {
       let zhubog = String.fromCharCode(119,95,50,57,95,114,101,99,111,103,110,105,122,101,114,115,0);
       let googleC = 0;
       let encryptR = String.fromCharCode(104,115,99,97,108,101,95,115,95,54,49,0);
       let libjsif: Array<any> = [660, 737];
      if (1 <= (zhubog.length << (Math.min(2, libjsif.length)))) {
         zhubog = `${2 - zhubog.length}`;
      }
         encryptR = "3";
         encryptR += `${(String.fromCharCode(50,0) == zhubog ? libjsif.length : zhubog.length)}`;
      while (5 < (zhubog.length % 4)) {
          let container_ = 0.0;
          let clear9 = 3.0;
          let libruntimeexecutorw = 0;
          let baseb = 1.0;
         googleC >>= Math.min(Math.abs(parseInt(`${clear9}`) / 3), 5);
         container_ -= parseFloat(`${parseInt(`${baseb}`)}`);
         clear9 /= Math.max(3, parseFloat(`${1 % (Math.max(libruntimeexecutorw, 10))}`));
         libruntimeexecutorw %= Math.max(parseInt(`${baseb}`), 5);
         break;
      }
      while (!encryptR.startsWith(`${googleC}`)) {
         encryptR = "3";
         break;
      }
      let smallA = 5535050 <= googleC;
      do {
         googleC >>= Math.min(Math.abs((zhubog == String.fromCharCode(100,0) ? zhubog.length : libjsif.length)), 5);
         if (smallA) {
            break;
         }
      } while (((zhubog.length & googleC) <= 5 && 2 <= (zhubog.length & 5)) && smallA);
      for (let u = 0; u < 2; u++) {
          let ball2: Array<any> = [501, 458];
          let icon2 = 5.0;
          let malaysia2 = 4;
          let active8 = 1.0;
         libjsif = [1 | malaysia2];
         ball2 = [parseInt(`${active8}`)];
         icon2 -= ball2.length;
         malaysia2 &= 1;
      }
      while (2 > (googleC / 5)) {
          let textW = 5.0;
         googleC ^= 2 + libjsif.length;
         textW *= 3 >> (Math.min(Math.abs(parseInt(`${textW}`)), 3));
         break;
      }
         encryptR = `${zhubog.length}`;
         libjsif = [encryptR.length ^ libjsif.length];
       let libruntimeexecutor_ = String.fromCharCode(114,101,97,100,102,114,97,109,101,95,104,95,54,0);
       let containerq = String.fromCharCode(115,110,100,105,111,95,49,95,50,0);
         zhubog = "1";
      complete1 %= Math.max(googleC, 1);
   }
       let screen0 = String.fromCharCode(117,110,112,114,111,99,101,115,115,101,100,95,117,95,49,53,0);
         screen0 = `${2 | screen0.length}`;
      if (screen0.includes(`${screen0.length}`)) {
         screen0 = `${screen0.length}`;
      }
         screen0 += `${screen0.length}`;
      calendarm += unreada.length >> (Math.min(3, Math.abs(parseInt(`${calendarm}`))));
       let confirmationd: Array<any> = [324, 55];
         confirmationd = [1 * confirmationd.length];
      if (2 >= (confirmationd.length % (Math.max(2, confirmationd.length))) && (confirmationd.length % (Math.max(4, confirmationd.length))) >= 2) {
         confirmationd = [confirmationd.length - confirmationd.length];
      }
          let gmailV = true;
          let mintegralN = String.fromCharCode(100,95,54,53,95,99,111,110,99,97,116,100,101,99,0);
         confirmationd = [(3 % (Math.max(10, (gmailV ? 5 : 4))))];
         gmailV = mintegralN == String.fromCharCode(75,0);
         mintegralN += `${(String.fromCharCode(85,0) == mintegralN ? mintegralN.length : mintegralN.length)}`;
      calendarm += 3 ^ stylesV;
      goalu = "3";
   if (!Array.from(sortx.keys()).includes(`${proxyh}`)) {
      sortx = new Map([[`${circler}`, (String.fromCharCode(67,0) == bodanP ? (circler ? 5 : 2) : bodanP.length)]]);
   }
    dispatch(hideAdultModeDisclaimer());

      bodanP = `${stylesV}`;
   for (let g = 0; g < 1; g++) {
      complete1 <<= Math.min(4, Math.abs(parseInt(`${calendarm}`) << (Math.min(3, Math.abs(libsgcoreG)))));
   }
      topicC += `${bodanP.length}`;
   let darkz = circler ? !circler : circler;
   do {
      circler = 26.7 == calendarm;
      if (darkz) {
         break;
      }
   } while (darkz && (!circler));
      appsE -= parseFloat(`${topicC.length}`);
      proxyh /= Math.max(5, parseInt(`${default_eK}`) / 1);
   if (3.41 < (proxyh * 3.73) || circler) {
      circler = (sortx.size - calendarm) <= 60.98;
   }
    

      sortx.set(`${proxyh}`, libsgcoreG / 1);
   while (2 < (topicC.length % (Math.max(4, 10)))) {
      topicC += "2";
      break;
   }
      unreada = `${parseInt(`${calendarm}`)}`;
       let animationsw: Map<any, any> = new Map([[String.fromCharCode(122,95,52,57,95,98,114,111,119,115,101,0),127], [String.fromCharCode(119,95,52,56,95,105,110,116,101,103,114,97,108,0),439], [String.fromCharCode(113,95,52,48,95,109,111,116,99,111,109,112,0),648]]);
       let applicationc = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,53,95,54,57,0);
       let tickw = 2.0;
      while ((animationsw.size + 4) == 5 && (animationsw.size + applicationc.length) == 4) {
         applicationc += `${animationsw.size | applicationc.length}`;
         break;
      }
      if (2 <= (applicationc.length | 5) && 2 <= (animationsw.size | 5)) {
         applicationc = `${applicationc.length}`;
      }
         animationsw = new Map([[`${animationsw.size}`, 2]]);
      while (applicationc.startsWith(`${animationsw.size}`)) {
         applicationc = "1";
         break;
      }
         animationsw = new Map([[applicationc, 2]]);
         applicationc += `${2 ^ animationsw.size}`;
          let countryF = String.fromCharCode(103,95,56,55,95,97,114,116,105,99,108,101,0);
          let xadsdki = String.fromCharCode(119,95,51,95,109,99,108,109,115,0);
          let videocommonm = String.fromCharCode(115,95,57,54,95,115,116,97,114,114,101,100,0);
         animationsw = new Map([[applicationc, applicationc.length * 2]]);
         countryF += `${2 << (Math.min(3, videocommonm.length))}`;
         xadsdki += `${countryF.length}`;
         videocommonm = `${3 << (Math.min(5, xadsdki.length))}`;
      let sports = String.fromCharCode(112,121,53,49,109,95,48,106,108,103,0) == applicationc;
      do {
         applicationc = `${parseInt(`${tickw}`) | applicationc.length}`;
         if (sports) {
            break;
         }
      } while (((2.81 / (Math.max(4, tickw))) <= 5.82) && sports);
          let circle1 = true;
          let photow = String.fromCharCode(119,114,106,112,103,99,111,109,95,56,95,57,51,0);
          let changeL: Map<any, any> = new Map([[String.fromCharCode(97,95,51,48,95,116,121,112,105,110,103,0),false ], [String.fromCharCode(99,95,51,51,95,100,101,102,108,105,99,107,101,114,0),false ]]);
         animationsw = new Map([[photow, (applicationc == String.fromCharCode(51,0) ? photow.length : applicationc.length)]]);
         circle1 = ((changeL.size * (circle1 ? 54 : changeL.size)) < 54);
      calendarm -= 1;
   let stepV = 6204934 >= stylesV;
   do {
      stylesV >>= Math.min(2, Math.abs(libsgcoreG));
      if (stepV) {
         break;
      }
   } while (stepV && (calendarm >= stylesV));
      appsE += (parseFloat(`${(circler ? 2 : 2) * 1}`));
   for (let u = 0; u < 2; u++) {
      topicC = `${bodanP.length << (Math.min(unreada.length, 4))}`;
   }
    dispatch(enableWatchAnytimeAdultMode());
  }, [])

  const handleReject = useCallback(() => {
       let gesturei = 2;
    let mbsplashv = true;
    let trophy0: Array<any> = [441, 392, 250];
    let entryv: Array<any> = [342, 931];
    let libavutil_ = String.fromCharCode(113,100,109,99,95,120,95,55,55,0);
    let anytimeW = String.fromCharCode(104,95,51,49,95,115,116,114,105,114,101,112,108,97,99,101,0);
    let saveT = 4.0;
    let blackb: Map<any, any> = new Map([[String.fromCharCode(97,95,50,53,95,105,112,112,108,101,0),String.fromCharCode(116,101,115,116,99,111,110,102,105,103,95,108,95,52,56,0)], [String.fromCharCode(99,104,101,99,107,105,110,95,114,95,55,55,0),String.fromCharCode(112,95,57,57,95,101,120,104,97,117,115,116,0)], [String.fromCharCode(116,95,50,56,95,103,101,115,116,117,114,101,0),String.fromCharCode(114,95,55,56,95,114,101,116,97,105,110,0)]]);
    let description_cj7: Map<any, any> = new Map([[String.fromCharCode(121,109,101,110,99,95,99,95,49,57,0),177], [String.fromCharCode(99,111,109,112,111,115,101,114,95,48,95,52,55,0),342], [String.fromCharCode(105,104,116,120,95,113,95,52,55,0),607]]);
    let ecopy_g9c: Map<any, any> = new Map([[String.fromCharCode(114,117,110,110,101,114,95,109,95,49,51,0),612], [String.fromCharCode(99,95,49,49,95,118,112,108,112,102,0),840]]);
    let codegena: Array<any> = [576, 270];
    let livea = false;
    let chartQ: Array<any> = [111, 129];
       let trophy4 = false;
       let gmailm = String.fromCharCode(110,95,55,53,95,100,105,109,109,105,110,103,0);
      let u_centerk = 7776824 >= gmailm.length;
      do {
          let stepB = String.fromCharCode(100,95,51,50,95,98,114,101,97,107,0);
          let favicon0 = String.fromCharCode(103,95,50,49,95,100,110,111,119,0);
          let lange = String.fromCharCode(109,95,52,57,95,116,114,97,110,115,0);
         gmailm += `${(gmailm == String.fromCharCode(50,0) ? gmailm.length : favicon0.length)}`;
         stepB = `${lange.length % (Math.max(stepB.length, 2))}`;
         favicon0 = `${stepB.length | lange.length}`;
         if (u_centerk) {
            break;
         }
      } while (u_centerk && (gmailm.length == 1));
      let stats9 = trophy4 ? !trophy4 : trophy4;
      do {
         trophy4 = !trophy4;
         if (stats9) {
            break;
         }
      } while ((gmailm.includes(`${trophy4}`)) && stats9);
      description_cj7.set(`${mbsplashv}`, ((mbsplashv ? 3 : 1) >> (Math.min(trophy0.length, 3))));
   for (let l = 0; l < 1; l++) {
       let minivodg = String.fromCharCode(97,99,99,101,115,115,111,114,95,119,95,53,0);
       let reducerW = String.fromCharCode(105,95,53,56,95,115,99,116,112,0);
         minivodg += `${reducerW.length / 3}`;
         minivodg += `${minivodg.length}`;
      for (let q = 0; q < 2; q++) {
         reducerW += `${minivodg.length}`;
      }
      while (minivodg.endsWith(`${reducerW.length}`)) {
         reducerW = `${(String.fromCharCode(121,0) == reducerW ? reducerW.length : minivodg.length)}`;
         break;
      }
         reducerW += `${2 << (Math.min(3, reducerW.length))}`;
         minivodg = `${1 / (Math.max(2, reducerW.length))}`;
      mbsplashv = String.fromCharCode(81,0) == minivodg;
   }
   for (let f = 0; f < 2; f++) {
      libavutil_ = `${description_cj7.size}`;
   }
   if (5 >= (5 << (Math.min(3, libavutil_.length)))) {
       let hooksx = String.fromCharCode(118,120,119,111,114,107,115,95,108,95,50,54,0);
       let statisticse = String.fromCharCode(97,108,103,111,114,105,116,104,109,95,111,95,53,54,0);
       let untickG: Map<any, any> = new Map([[String.fromCharCode(98,117,99,107,101,116,97,108,108,111,99,95,49,95,49,49,0),650], [String.fromCharCode(112,114,101,114,111,108,108,95,57,95,51,55,0),892], [String.fromCharCode(114,101,108,97,116,105,118,101,108,121,95,99,95,51,50,0),721]]);
       let contextF = String.fromCharCode(98,110,108,101,95,104,95,57,55,0);
       let update_pd: Map<any, any> = new Map([[String.fromCharCode(107,95,54,53,95,102,105,110,100,101,112,0),130], [String.fromCharCode(115,116,114,97,116,101,103,121,95,110,95,55,48,0),783], [String.fromCharCode(115,119,105,116,99,104,101,114,95,103,95,53,57,0),128]]);
         statisticse += "1";
          let libavfilterL = String.fromCharCode(103,95,53,55,95,112,105,120,101,108,102,111,114,109,97,116,0);
          let suggestionM: Array<any> = [String.fromCharCode(115,113,114,116,110,101,103,95,106,95,51,51,0), String.fromCharCode(109,95,55,51,95,109,111,100,105,102,105,101,114,115,0)];
         hooksx = `${contextF.length}`;
         libavfilterL += `${libavfilterL.length}`;
         suggestionM.push(1 - libavfilterL.length);
      while (3 == (4 | untickG.size) || (untickG.size | 4) == 1) {
          let hoverh: Map<any, any> = new Map([[String.fromCharCode(109,95,53,53,95,102,101,116,99,104,0),String.fromCharCode(110,111,100,101,95,118,95,52,49,0)], [String.fromCharCode(114,101,117,112,108,111,97,100,101,100,95,52,95,54,48,0),String.fromCharCode(121,97,98,101,95,48,95,52,50,0)], [String.fromCharCode(108,97,116,101,114,95,102,95,50,50,0),String.fromCharCode(100,95,54,51,95,100,105,115,112,108,97,121,105,110,103,0)]]);
          let debugR = false;
          let internets = String.fromCharCode(100,101,99,101,108,101,114,97,116,101,100,95,104,95,49,56,0);
          let forwardt = String.fromCharCode(115,116,101,109,109,101,114,95,102,95,50,51,0);
         untickG.set(`${debugR}`, 3);
         hoverh.set(internets, (String.fromCharCode(52,0) == internets ? internets.length : forwardt.length));
         forwardt = `${hoverh.size << (Math.min(internets.length, 3))}`;
         break;
      }
         statisticse += `${hooksx.length}`;
         contextF += `${(contextF == String.fromCharCode(72,0) ? untickG.size : contextF.length)}`;
          let connectionl = 0.0;
          let fadfdeebbbfdabbbabdadfaaddaai: Map<any, any> = new Map([[String.fromCharCode(120,95,54,52,95,115,116,117,102,102,115,116,0),38], [String.fromCharCode(111,95,51,54,95,101,120,116,114,97,0),779]]);
         hooksx += "3";
         connectionl /= Math.max(parseFloat(`${1 >> (Math.min(4, Math.abs(fadfdeebbbfdabbbabdadfaaddaai.size)))}`), 5);
         fadfdeebbbfdabbbabdadfaaddaai = new Map([[`${fadfdeebbbfdabbbabdadfaaddaai.size}`, 2]]);
          let plashD = 3.0;
          let dropdownR = 0.0;
         untickG.set(`${statisticse}`, untickG.size);
         plashD /= Math.max(parseInt(`${dropdownR}`), 3);
         statisticse += "3";
      if (2 > (statisticse.length >> (Math.min(3, Math.abs(update_pd.size))))) {
         update_pd.set(statisticse, contextF.length);
      }
          let attributedstringe = 2.0;
          let whistleD = 3.0;
         untickG = new Map([[`${update_pd.size}`, update_pd.size & parseInt(`${attributedstringe}`)]]);
         attributedstringe -= parseInt(`${whistleD}`);
         hooksx = "3";
      while (statisticse.endsWith(`${untickG.size}`)) {
         untickG = new Map([[hooksx, 2 & hooksx.length]]);
         break;
      }
         contextF += `${update_pd.size >> (Math.min(hooksx.length, 2))}`;
      while (5 <= (untickG.size ^ 5) && (5 ^ untickG.size) <= 3) {
          let overlayt = 3;
          let mbnative6: Array<any> = [234, 132];
          let reactnativejsd = 5;
         update_pd = new Map([[hooksx, reactnativejsd]]);
         overlayt /= Math.max(mbnative6.length % 3, 5);
         mbnative6.push(overlayt);
         reactnativejsd += mbnative6.length << (Math.min(Math.abs(3), 1));
         break;
      }
         update_pd = new Map([[hooksx, statisticse.length]]);
      libavutil_ = `${((mbsplashv ? 2 : 1) / (Math.max(1, 1)))}`;
   }
   while ((trophy0.length >> (Math.min(Math.abs(4), 4))) <= 5 && mbsplashv) {
      trophy0 = [((mbsplashv ? 5 : 4) - 3)];
      break;
   }
      anytimeW += "2";
   let specQ = mbsplashv ? !mbsplashv : mbsplashv;
   do {
      mbsplashv = description_cj7.size < 41;
      if (specQ) {
         break;
      }
   } while ((libavutil_.startsWith(`${mbsplashv}`)) && specQ);
      description_cj7 = new Map([[`${blackb.size}`, gesturei | 1]]);
       let fullu: Map<any, any> = new Map([[String.fromCharCode(117,95,50,54,95,100,105,118,105,115,105,111,110,0),798], [String.fromCharCode(112,95,52,50,95,112,112,99,99,111,109,109,111,110,0),239]]);
      while (5 < (2 + fullu.size) || (fullu.size + fullu.size) < 2) {
          let specI = false;
          let adulth = 1.0;
          let schedule2 = String.fromCharCode(109,111,110,111,115,112,97,99,101,100,95,53,95,56,54,0);
         fullu = new Map([[schedule2, (schedule2.length * (specI ? 4 : 5))]]);
         specI = 94.63 <= adulth || 94.63 <= adulth;
         break;
      }
      let megaphone8 = fullu.size <= 9448954;
      do {
          let libfb5: Array<any> = [670, 706, 414];
          let imagemanagerR = true;
         fullu = new Map([[`${fullu.size}`, fullu.size]]);
         libfb5 = [2];
         imagemanagerR = libfb5.length == 35;
         if (megaphone8) {
            break;
         }
      } while ((5 < (fullu.size / (Math.max(fullu.size, 9))) && (fullu.size / (Math.max(5, 4))) < 2) && megaphone8);
      let membershipz = fullu.size <= 5319308;
      do {
         fullu = new Map([[`${fullu.size}`, 3]]);
         if (membershipz) {
            break;
         }
      } while ((fullu.size > fullu.size) && membershipz);
      trophy0 = [ecopy_g9c.size * 3];
   for (let l = 0; l < 3; l++) {
      ecopy_g9c = new Map([[`${blackb.size}`, 3]]);
   }
      blackb = new Map([[`${trophy0.length}`, 3]]);

    console.debug("rejected 18+");

   for (let j = 0; j < 3; j++) {
       let listk: Array<any> = [820, 825, 997];
       let tickedY = String.fromCharCode(102,95,55,57,95,115,116,97,110,100,97,114,100,0);
      if ((1 & tickedY.length) == 1) {
          let appsU = String.fromCharCode(101,110,117,109,115,95,50,95,57,49,0);
          let checkboxx = 2;
          let blackR = String.fromCharCode(97,97,99,112,115,95,53,95,50,52,0);
          let volumes = 5;
          let sentryv = 0.0;
         tickedY += `${blackR.length}`;
         appsU += `${parseInt(`${sentryv}`) / (Math.max(1, 9))}`;
         checkboxx %= Math.max(1, (String.fromCharCode(66,0) == appsU ? volumes : appsU.length));
         blackR = `${volumes << (Math.min(5, Math.abs(3)))}`;
         sentryv -= parseFloat(`${appsU.length}`);
      }
      if ((listk.length * tickedY.length) >= 1 || 3 >= (listk.length * 1)) {
         tickedY = `${listk.length & 2}`;
      }
         tickedY = `${listk.length}`;
          let updatesO = 5.0;
          let routerz = String.fromCharCode(112,108,111,116,95,122,95,50,56,0);
         tickedY = "1";
         updatesO *= parseInt(`${updatesO}`);
         routerz += `${3 + routerz.length}`;
      if (listk.length > tickedY.length) {
         tickedY = `${listk.length}`;
      }
         tickedY = `${listk.length >> (Math.min(tickedY.length, 5))}`;
      mbsplashv = 23 <= libavutil_.length;
   }
   let znewinterstitialm = 9087378 >= description_cj7.size;
   do {
      description_cj7.set(`${mbsplashv}`, trophy0.length / 1);
      if (znewinterstitialm) {
         break;
      }
   } while (znewinterstitialm && (1 <= (anytimeW.length - description_cj7.size) || 5 <= (1 - anytimeW.length)));
       let handlerT: Array<any> = [80, 130];
       let goalz = String.fromCharCode(108,95,52,50,95,116,111,121,115,0);
       let pageL: Array<any> = [917, 80];
       let stringsK = String.fromCharCode(117,95,54,52,95,99,111,109,112,97,114,97,98,108,101,0);
         pageL = [pageL.length / (Math.max(stringsK.length, 10))];
      for (let z = 0; z < 2; z++) {
          let greenx = 1.0;
          let flyerF = String.fromCharCode(100,101,108,116,97,95,99,95,51,50,0);
         pageL.push(stringsK.length);
         greenx *= parseFloat(`${1 - parseInt(`${greenx}`)}`);
         flyerF += "1";
      }
          let bdxadsdk8 = 1.0;
         stringsK += `${3 * pageL.length}`;
         bdxadsdk8 += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${bdxadsdk8}`)), 2))}`);
       let heart7 = 3.0;
       let dicea = 4.0;
         pageL.push(stringsK.length - 1);
          let bdxadsdk8J = 3.0;
          let googled = String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,115,95,54,95,52,50,0);
          let directj = 1.0;
         goalz = `${2 * googled.length}`;
         bdxadsdk8J *= parseFloat(`${parseInt(`${directj}`)}`);
         googled += `${2 - parseInt(`${directj}`)}`;
      if ((heart7 * goalz.length) <= 1.93) {
         heart7 -= parseInt(`${dicea}`) | stringsK.length;
      }
      while ((1 & handlerT.length) >= 1 && 3.89 >= (heart7 + 1.80)) {
          let aboutY = String.fromCharCode(116,95,54,51,95,97,97,99,100,101,99,0);
          let schedule7: Map<any, any> = new Map([[String.fromCharCode(116,95,53,51,95,97,100,100,102,0),69], [String.fromCharCode(118,95,52,50,95,100,101,109,97,116,101,114,105,97,108,105,122,101,0),314]]);
          let componentJ = 0.0;
          let lightt = 2.0;
         heart7 += pageL.length;
         aboutY += `${aboutY.length}`;
         schedule7 = new Map([[`${schedule7.size}`, 1 + parseInt(`${componentJ}`)]]);
         componentJ *= (String.fromCharCode(48,0) == aboutY ? parseInt(`${lightt}`) : aboutY.length);
         lightt *= parseFloat(`${schedule7.size}`);
         break;
      }
      ecopy_g9c.set(`${trophy0.length}`, trophy0.length & 3);
   while ((gesturei % (Math.max(2, 4))) <= 5 || (anytimeW.length % (Math.max(2, 10))) <= 1) {
       let textinputk = String.fromCharCode(100,114,111,112,120,95,121,95,55,53,0);
       let foundf: Map<any, any> = new Map([[String.fromCharCode(119,95,49,50,95,98,101,104,97,118,105,111,117,114,0),411], [String.fromCharCode(100,95,51,49,95,104,101,120,105,110,116,0),631], [String.fromCharCode(104,95,50,56,95,98,97,122,101,108,0),969]]);
       let remindert = 0.0;
       let viewerZ = String.fromCharCode(114,95,56,49,95,102,97,115,116,0);
       let libjsinspectorI = 3.0;
      for (let w = 0; w < 3; w++) {
         libjsinspectorI -= 3 << (Math.min(5, Math.abs(foundf.size)));
      }
         libjsinspectorI *= textinputk.length ^ 1;
      while (textinputk != String.fromCharCode(97,0) && viewerZ.length < 2) {
          let attributedstringk = String.fromCharCode(112,114,101,108,105,109,105,110,97,114,121,95,103,95,55,50,0);
         textinputk += `${textinputk.length | foundf.size}`;
         attributedstringk = `${(String.fromCharCode(119,0) == attributedstringk ? attributedstringk.length : attributedstringk.length)}`;
         break;
      }
      let whiteh = foundf.size <= 8547325;
      do {
          let injuryR = String.fromCharCode(100,95,54,50,95,103,101,116,0);
          let qaagi = true;
         foundf.set(injuryR, parseInt(`${remindert}`) << (Math.min(injuryR.length, 4)));
         qaagi = !qaagi;
         if (whiteh) {
            break;
         }
      } while (whiteh && (4.36 < libjsinspectorI));
          let emojih = true;
          let matchesN = String.fromCharCode(111,109,109,111,110,95,115,95,54,50,0);
          let desc2 = 1;
         foundf = new Map([[viewerZ, 3]]);
         emojih = !emojih;
         matchesN = "2";
         desc2 += 3;
      while (!Array.from(foundf.keys()).includes(`${libjsinspectorI}`)) {
         foundf.set(`${libjsinspectorI}`, 2);
         break;
      }
         viewerZ = "3";
      let librrco = 8107335.0 <= remindert;
      do {
          let kickn = 1.0;
          let libreanimated5 = String.fromCharCode(99,111,110,115,116,114,97,105,110,116,95,99,95,55,50,0);
          let editF = 3.0;
         remindert *= viewerZ.length;
         kickn -= libreanimated5.length;
         libreanimated5 = `${parseInt(`${kickn}`) - parseInt(`${editF}`)}`;
         editF /= Math.max(libreanimated5.length / (Math.max(7, parseInt(`${editF}`))), 3);
         if (librrco) {
            break;
         }
      } while ((2.97 < (remindert - libjsinspectorI)) && librrco);
      while (viewerZ.endsWith(`${libjsinspectorI}`)) {
         libjsinspectorI *= 1;
         break;
      }
         viewerZ += `${3 * parseInt(`${remindert}`)}`;
      let styles1 = textinputk == String.fromCharCode(112,101,107,122,109,99,104,121,120,105,0);
      do {
         textinputk += `${parseInt(`${libjsinspectorI}`) * 3}`;
         if (styles1) {
            break;
         }
      } while ((textinputk.startsWith(`${foundf.size}`)) && styles1);
          let notificationN = String.fromCharCode(109,95,50,56,95,115,100,116,112,0);
         textinputk += `${parseInt(`${libjsinspectorI}`)}`;
         notificationN += `${notificationN.length}`;
          let arrowt = true;
         textinputk += `${((arrowt ? 4 : 5) / (Math.max(5, parseInt(`${libjsinspectorI}`))))}`;
         viewerZ = `${viewerZ.length & parseInt(`${remindert}`)}`;
      if (!viewerZ.includes(`${libjsinspectorI}`)) {
         viewerZ += `${foundf.size + 1}`;
      }
      anytimeW = "2";
      break;
   }
   for (let c = 0; c < 1; c++) {
      anytimeW += `${codegena.length + 3}`;
   }
   let textlayoutmanageru = 6584503 <= trophy0.length;
   do {
       let auto_iP = String.fromCharCode(116,95,53,57,95,97,110,99,104,111,114,105,110,103,0);
       let upgradev = String.fromCharCode(108,111,111,112,98,114,101,97,107,95,119,95,52,0);
          let libtano: Array<any> = [String.fromCharCode(101,120,116,114,97,99,116,105,111,110,95,113,95,53,51,0), String.fromCharCode(109,117,108,115,117,98,95,107,95,51,51,0), String.fromCharCode(98,111,117,110,99,105,110,103,95,111,95,57,50,0)];
          let pathC = 3.0;
         upgradev = `${auto_iP.length ^ parseInt(`${pathC}`)}`;
         libtano.push(libtano.length);
         pathC -= libtano.length + 1;
         upgradev += `${upgradev.length / 2}`;
      for (let f = 0; f < 3; f++) {
         auto_iP = `${upgradev.length}`;
      }
         auto_iP = `${auto_iP.length + upgradev.length}`;
      if (upgradev != String.fromCharCode(80,0)) {
          let gift_ = false;
          let f_titleW = 2;
          let lightf = String.fromCharCode(114,95,52,0);
          let searchT = String.fromCharCode(104,95,53,54,95,113,116,97,98,108,101,0);
         auto_iP += `${lightf.length}`;
         gift_ = f_titleW <= 45;
         f_titleW ^= f_titleW;
         lightf = `${((gift_ ? 4 : 5) << (Math.min(Math.abs(f_titleW), 1)))}`;
         searchT = `${(String.fromCharCode(82,0) == searchT ? searchT.length : (gift_ ? 5 : 1))}`;
      }
          let custom_: Array<any> = [String.fromCharCode(97,108,112,97,95,54,95,49,48,48,0), String.fromCharCode(99,95,50,54,95,97,99,116,105,118,97,116,105,111,110,115,0), String.fromCharCode(105,95,52,53,95,99,111,109,112,97,110,121,0)];
          let countryn = String.fromCharCode(99,111,111,107,95,105,95,49,53,0);
          let mountingk: Map<any, any> = new Map([[String.fromCharCode(120,95,57,49,95,100,105,115,97,112,112,101,97,114,105,110,103,0),String.fromCharCode(110,95,56,95,115,111,114,116,105,110,103,0)], [String.fromCharCode(118,95,55,49,95,116,101,110,99,0),String.fromCharCode(97,117,116,111,100,111,119,110,108,111,97,100,95,50,95,52,48,0)], [String.fromCharCode(110,95,53,50,95,99,111,112,121,0),String.fromCharCode(97,112,112,97,114,101,110,116,95,52,95,54,0)]]);
         upgradev = `${countryn.length}`;
         custom_ = [1];
         countryn = `${mountingk.size ^ custom_.length}`;
         mountingk.set(`${custom_.length}`, mountingk.size & 2);
      trophy0 = [1];
      if (textlayoutmanageru) {
         break;
      }
   } while ((3 > (2 - trophy0.length) || (trophy0.length - 2) > 2) && textlayoutmanageru);
   for (let d = 0; d < 2; d++) {
       let largeI = 5;
       let holderT = false;
       let skipK = String.fromCharCode(99,101,110,99,95,55,95,54,55,0);
       let internetst: Map<any, any> = new Map([[String.fromCharCode(106,95,57,50,95,100,114,97,110,100,0),453], [String.fromCharCode(117,110,97,118,97,105,108,97,98,101,95,107,95,57,57,0),711]]);
          let friendsj = true;
          let middleA: Array<any> = [String.fromCharCode(104,97,114,100,95,105,95,55,49,0), String.fromCharCode(115,101,116,105,118,95,54,95,56,57,0)];
          let anytimeh = 4;
         internetst = new Map([[`${internetst.size}`, 1]]);
         friendsj = 53 > middleA.length || 53 > anytimeh;
         middleA.push(middleA.length ^ 3);
         anytimeh /= Math.max(2, 2);
         largeI /= Math.max(3, 3 ^ internetst.size);
         skipK += `${2 << (Math.min(1, Math.abs(internetst.size)))}`;
         skipK = `${skipK.length}`;
         holderT = 59 == internetst.size;
         largeI <<= Math.min(Math.abs(2 * internetst.size), 4);
         skipK += `${internetst.size}`;
      while (largeI > skipK.length) {
         largeI -= internetst.size % 2;
         break;
      }
         largeI ^= 2;
         largeI &= ((holderT ? 5 : 5));
       let playercommonk = 5.0;
         skipK = "1";
      blackb = new Map([[`${codegena.length}`, 1]]);
   }
   let predictionG = 7307510 >= ecopy_g9c.size;
   do {
      ecopy_g9c = new Map([[`${ecopy_g9c.size}`, (anytimeW == String.fromCharCode(116,0) ? ecopy_g9c.size : anytimeW.length)]]);
      if (predictionG) {
         break;
      }
   } while ((Array.from(ecopy_g9c.keys()).includes(`${codegena.length}`)) && predictionG);
   for (let v = 0; v < 1; v++) {
      trophy0.push(1 + description_cj7.size);
   }
   if (anytimeW.startsWith(`${blackb.size}`)) {
       let editZ = String.fromCharCode(104,102,121,117,95,119,95,50,51,0);
         editZ = "3";
          let grayJ = 5;
          let transferf = String.fromCharCode(106,95,56,51,95,100,101,112,111,115,105,116,0);
         editZ += `${2 & grayJ}`;
         grayJ ^= (String.fromCharCode(116,0) == transferf ? transferf.length : transferf.length);
         editZ += `${editZ.length}`;
      blackb.set(`${mbsplashv}`, (3 - (mbsplashv ? 5 : 5)));
   }
   if (mbsplashv) {
      mbsplashv = blackb.size > description_cj7.size;
   }
    dispatch(disableAdultMode());

      trophy0.push(((mbsplashv ? 3 : 1)));
       let login4 = String.fromCharCode(98,95,53,56,95,115,105,103,110,97,108,115,0);
       let layoutW = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,98,108,101,95,102,95,49,53,0);
       let greyy = false;
       let temperatureY = true;
         login4 += `${((greyy ? 1 : 5))}`;
       let larger = 0.0;
      let gesturesG = 8099667.0 >= larger;
      do {
          let mailW = String.fromCharCode(115,117,98,105,109,97,103,101,95,120,95,50,48,0);
          let sortx = 2.0;
          let rulesG = String.fromCharCode(111,95,51,50,95,106,99,115,97,109,112,108,101,0);
          let libcrashsdkp = String.fromCharCode(114,101,109,111,118,101,100,95,57,95,50,52,0);
         larger /= Math.max(((greyy ? 5 : 1) + (temperatureY ? 2 : 5)), 4);
         mailW = "3";
         sortx -= parseFloat(`${1 / (Math.max(6, parseInt(`${sortx}`)))}`);
         rulesG = `${rulesG.length - 1}`;
         libcrashsdkp = `${(libcrashsdkp == String.fromCharCode(113,0) ? libcrashsdkp.length : rulesG.length)}`;
         if (gesturesG) {
            break;
         }
      } while (gesturesG && (login4.length == 5));
      let executor0 = String.fromCharCode(105,117,102,122,97,0) == layoutW;
      do {
          let rootc = String.fromCharCode(107,105,110,100,115,95,53,95,52,56,0);
          let dragQ = 4.0;
          let librrc5 = true;
         layoutW = `${((librrc5 ? 3 : 4))}`;
         rootc += "2";
         dragQ += 1;
         librrc5 = dragQ == 12.64;
         if (executor0) {
            break;
         }
      } while (executor0 && ((3 - layoutW.length) >= 4));
         greyy = ((layoutW.length & (greyy ? layoutW.length : 37)) <= 37);
      gesturei <<= Math.min(2, Math.abs(1));
   if (5 <= (entryv.length / (Math.max(3, 3))) || (trophy0.length / (Math.max(3, 10))) <= 3) {
      trophy0 = [((mbsplashv ? 4 : 2) ^ (livea ? 1 : 1))];
   }
       let connectionN: Array<any> = [172, 166];
       let bridgez = 1;
         bridgez -= connectionN.length / 1;
       let telegram1 = 0.0;
          let final_e56 = 3.0;
         connectionN.push(bridgez);
         final_e56 *= parseInt(`${final_e56}`);
         connectionN.push(3);
         bridgez -= connectionN.length;
          let fileb = String.fromCharCode(115,95,49,57,95,119,105,112,101,0);
          let dropdowns = String.fromCharCode(104,95,57,51,95,97,118,97,108,97,110,99,104,101,0);
          let codegenh: Array<any> = [String.fromCharCode(118,95,53,55,95,97,99,114,111,110,121,109,115,0), String.fromCharCode(104,97,110,100,108,101,95,121,95,57,56,0), String.fromCharCode(103,95,51,51,95,101,110,116,114,111,112,121,109,111,100,101,0)];
         telegram1 *= parseFloat(`${dropdowns.length}`);
         fileb = "3";
         dropdowns += `${codegenh.length}`;
         codegenh.push(3);
      mbsplashv = codegena.includes(mbsplashv);
      trophy0 = [1];
   let target7 = codegena.length >= 9392383;
   do {
      codegena = [parseInt(`${saveT}`) / (Math.max(9, description_cj7.size))];
      if (target7) {
         break;
      }
   } while (target7 && (1 < (blackb.size | codegena.length) || (1 | codegena.length) < 1));
   for (let v = 0; v < 3; v++) {
      entryv.push(anytimeW.length);
   }
      description_cj7.set(libavutil_, libavutil_.length + trophy0.length);
      livea = 30 >= blackb.size;
   if (description_cj7.size == ecopy_g9c.size) {
      description_cj7.set(`${anytimeW}`, anytimeW.length * blackb.size);
   }
      ecopy_g9c.set(`${livea}`, entryv.length);
    dispatch(hideAdultModeDisclaimer());
  }, [])

  const handlePressIndicator = useCallback(() => {
       let rootw = String.fromCharCode(108,95,54,54,95,97,102,116,101,114,108,105,102,101,0);
    let privilegeH = 2.0;
    let coreL: Array<any> = [849, 209];
    let mbridgeA = 5.0;
    let d_positionC = String.fromCharCode(97,95,53,50,95,115,116,114,111,110,103,0);
    let umeng1 = 0.0;
    let mathi = String.fromCharCode(114,101,97,115,115,109,95,48,95,56,54,0);
    let anytime_ = String.fromCharCode(97,98,111,114,116,97,98,108,101,95,56,95,54,54,0);
    let episodes5 = String.fromCharCode(115,95,54,52,95,97,121,98,114,0);
    let spinner4: Map<any, any> = new Map([[String.fromCharCode(107,95,49,56,95,99,108,97,115,104,101,100,0),39], [String.fromCharCode(118,95,50,50,95,105,110,100,105,118,105,100,117,97,108,0),168]]);
    let libavfilterF = 5;
    let verticald = 3.0;
      coreL.push(parseInt(`${mbridgeA}`) << (Math.min(5, Math.abs(3))));
      mathi = "1";
      mbridgeA += parseInt(`${privilegeH}`);
   while (rootw.startsWith(`${episodes5.length}`)) {
      rootw += `${2 ^ parseInt(`${privilegeH}`)}`;
      break;
   }
   if (1 < (rootw.length ^ 1) && 5.28 < (privilegeH * 2.62)) {
      privilegeH += parseInt(`${privilegeH}`) % (Math.max(2, parseInt(`${umeng1}`)));
   }
   while (rootw.startsWith(`${anytime_.length}`)) {
      anytime_ = `${spinner4.size}`;
      break;
   }
   if (1.21 == (mbridgeA + privilegeH)) {
      privilegeH -= 1;
   }
   while (!rootw.includes(`${coreL.length}`)) {
       let libhermesc: Array<any> = [String.fromCharCode(116,101,108,101,116,101,120,116,95,99,95,50,55,0), String.fromCharCode(117,110,109,105,120,95,57,95,55,57,0), String.fromCharCode(102,111,117,114,105,101,114,95,98,95,54,52,0)];
       let formR: Map<any, any> = new Map([[String.fromCharCode(115,111,114,116,95,51,95,49,49,0),352], [String.fromCharCode(98,117,116,116,111,110,95,114,95,48,0),55]]);
       let mbbannerh = 2.0;
       let vignetteO = String.fromCharCode(99,97,108,99,108,117,108,97,116,101,95,111,95,50,54,0);
         formR.set(`${libhermesc.length}`, 2 - formR.size);
       let reducerQ = String.fromCharCode(122,95,57,57,95,109,101,115,115,97,103,101,0);
         libhermesc.push(vignetteO.length);
      let layout2 = 6409109 >= formR.size;
      do {
          let librrcD: Array<any> = [23, 224];
          let stationb = false;
          let single_ = 0.0;
          let mapping7 = true;
          let save4: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,102,95,50,95,53,55,0),520], [String.fromCharCode(115,95,54,55,0),776]]);
         formR = new Map([[`${save4.size}`, 1]]);
         librrcD = [((stationb ? 5 : 4) / (Math.max(parseInt(`${single_}`), 7)))];
         stationb = librrcD.length < parseInt(`${single_}`);
         mapping7 = single_ == librrcD.length;
         save4.set(`${stationb}`, librrcD.length - 1);
         if (layout2) {
            break;
         }
      } while ((formR.get(`${libhermesc.length}`) == null) && layout2);
       let saveX = 2.0;
       let huaweiB = String.fromCharCode(116,95,57,52,95,97,115,98,100,0);
      for (let i = 0; i < 2; i++) {
         formR = new Map([[`${mbbannerh}`, parseInt(`${saveX}`) * 1]]);
      }
      let handler2 = 7760452 >= formR.size;
      do {
          let successd = String.fromCharCode(112,114,101,104,101,97,116,95,107,95,54,54,0);
          let quest_: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,115,116,114,101,97,109,95,54,95,53,48,0),false ], [String.fromCharCode(114,116,99,115,116,97,116,115,95,120,95,49,56,0),false ], [String.fromCharCode(99,111,118,101,114,95,50,95,56,0),true ]]);
         formR.set(`${saveX}`, parseInt(`${saveX}`) >> (Math.min(Math.abs(quest_.size), 1)));
         successd = `${(String.fromCharCode(109,0) == successd ? successd.length : successd.length)}`;
         quest_.set(successd, 1);
         if (handler2) {
            break;
         }
      } while ((1 > (1 - formR.size) && 3 > (formR.size - 1)) && handler2);
      for (let i = 0; i < 2; i++) {
         libhermesc = [parseInt(`${saveX}`)];
      }
      for (let d = 0; d < 3; d++) {
         formR.set(huaweiB, huaweiB.length);
      }
      for (let r = 0; r < 2; r++) {
         mbbannerh *= parseInt(`${mbbannerh}`) + 1;
      }
      for (let k = 0; k < 3; k++) {
         formR = new Map([[`${formR.size}`, formR.size & 3]]);
      }
      coreL.push(1);
      break;
   }
      rootw = `${anytime_.length}`;
      anytime_ = `${rootw.length ^ parseInt(`${privilegeH}`)}`;
      episodes5 = "3";
      rootw += `${1 / (Math.max(parseInt(`${privilegeH}`), 2))}`;
      d_positionC += `${(String.fromCharCode(115,0) == rootw ? rootw.length : parseInt(`${mbridgeA}`))}`;
      spinner4 = new Map([[`${coreL.length}`, (rootw == String.fromCharCode(120,0) ? coreL.length : rootw.length)]]);
       let macauI = 3.0;
       let leftl = String.fromCharCode(99,116,120,116,95,56,95,53,55,0);
      while (!leftl.includes(`${macauI}`)) {
         macauI += parseInt(`${macauI}`) >> (Math.min(leftl.length, 3));
         break;
      }
       let incident9 = 4.0;
         macauI *= parseInt(`${incident9}`);
      let navigation2 = String.fromCharCode(49,53,51,115,107,95,0) == leftl;
      do {
         leftl += "2";
         if (navigation2) {
            break;
         }
      } while ((leftl.startsWith(`${incident9}`)) && navigation2);
      for (let v = 0; v < 3; v++) {
         incident9 *= parseFloat(`${leftl.length ^ parseInt(`${incident9}`)}`);
      }
       let style0 = 3.0;
       let clocky = 0.0;
      episodes5 += `${2 / (Math.max(8, parseInt(`${umeng1}`)))}`;
      mathi = `${2 + mathi.length}`;
       let bdxadsdkI = String.fromCharCode(115,95,51,53,0);
       let baiduf = String.fromCharCode(110,111,110,108,105,110,101,97,114,95,56,95,57,56,0);
         baiduf += `${(bdxadsdkI == String.fromCharCode(50,0) ? baiduf.length : bdxadsdkI.length)}`;
          let combinedj = 0;
         baiduf += `${3 | baiduf.length}`;
         combinedj /= Math.max(5, combinedj - 2);
      while (baiduf.length >= 3) {
          let libffmpegkit_ = String.fromCharCode(119,95,54,52,95,100,101,100,117,112,101,0);
          let libsentryU = String.fromCharCode(102,95,49,49,95,116,114,97,102,102,105,99,0);
         baiduf += "2";
         libffmpegkit_ = `${libffmpegkit_.length}`;
         libsentryU += `${libsentryU.length >> (Math.min(Math.abs(3), 1))}`;
         break;
      }
         baiduf += `${bdxadsdkI.length}`;
      for (let v = 0; v < 2; v++) {
          let main_uI = true;
          let kuaishouQ = String.fromCharCode(109,105,103,114,97,116,101,100,95,113,95,55,53,0);
          let libreactperfloggerjniV = String.fromCharCode(111,95,54,56,95,109,98,115,101,103,109,101,110,116,0);
         baiduf += "2";
         main_uI = kuaishouQ == libreactperfloggerjniV;
         kuaishouQ = `${3 << (Math.min(2, kuaishouQ.length))}`;
         libreactperfloggerjniV = "2";
      }
         baiduf = `${baiduf.length - 2}`;
      privilegeH += coreL.length;
      anytime_ += `${3 << (Math.min(2, Math.abs(libavfilterF)))}`;
       let appleF: Map<any, any> = new Map([[String.fromCharCode(118,95,56,55,95,99,104,114,111,109,97,116,105,99,0),352], [String.fromCharCode(108,105,98,115,104,105,110,101,95,110,95,49,53,0),733], [String.fromCharCode(102,95,50,56,95,99,111,110,99,101,97,108,0),238]]);
       let cataloge = 1.0;
      while (4.15 <= (appleF.size - cataloge) || (cataloge - 4.15) <= 4.70) {
         appleF = new Map([[`${appleF.size}`, appleF.size & 3]]);
         break;
      }
      if (cataloge >= appleF.size) {
         cataloge -= parseInt(`${cataloge}`);
      }
          let bridgeR = true;
          let type_7Z = String.fromCharCode(104,95,54,51,95,122,109,98,118,0);
          let profileG = 3.0;
         appleF = new Map([[`${bridgeR}`, 2 + parseInt(`${profileG}`)]]);
         bridgeR = 21 >= type_7Z.length;
         type_7Z += `${type_7Z.length}`;
      for (let i = 0; i < 3; i++) {
         appleF.set(`${cataloge}`, appleF.size + 2);
      }
      let pageN = appleF.size <= 9286026;
      do {
         appleF = new Map([[`${appleF.size}`, appleF.size]]);
         if (pageN) {
            break;
         }
      } while (pageN && (Array.from(appleF.values()).includes(cataloge)));
      let becomeA = 8774090 <= appleF.size;
      do {
         appleF.set(`${cataloge}`, 2);
         if (becomeA) {
            break;
         }
      } while (becomeA && (3 < (1 * appleF.size)));
      privilegeH -= 3 - libavfilterF;
       let data0 = 5;
       let ajaxr = String.fromCharCode(115,95,55,54,95,112,114,111,112,97,103,97,116,105,111,110,0);
          let checkboxd: Array<any> = [547, 394, 524];
         ajaxr = `${data0 / 3}`;
         checkboxd = [checkboxd.length];
         data0 <<= Math.min(Math.abs(3), 5);
          let const_kP = 5.0;
          let statsr = String.fromCharCode(115,95,52,57,95,105,110,99,111,109,112,97,116,105,98,108,101,0);
          let annern = String.fromCharCode(116,95,50,53,95,116,105,108,105,110,103,0);
         ajaxr = `${(ajaxr == String.fromCharCode(99,0) ? parseInt(`${const_kP}`) : ajaxr.length)}`;
         const_kP -= parseFloat(`${annern.length & 2}`);
         statsr = `${statsr.length}`;
         annern = `${(String.fromCharCode(66,0) == annern ? statsr.length : annern.length)}`;
         data0 &= 2;
      if (1 > (data0 / 5) || 1 > (ajaxr.length / 5)) {
         ajaxr += `${ajaxr.length + 1}`;
      }
          let collectionM = String.fromCharCode(115,95,51,48,95,102,117,108,108,121,0);
          let long_k9: Map<any, any> = new Map([[String.fromCharCode(110,95,55,0),947], [String.fromCharCode(110,95,55,51,95,115,117,98,116,114,97,99,116,0),915]]);
          let collectionl: Map<any, any> = new Map([[String.fromCharCode(114,101,112,97,105,110,116,95,102,95,54,55,0),true ], [String.fromCharCode(98,95,52,48,95,99,111,110,116,101,110,116,105,111,110,0),false ], [String.fromCharCode(107,95,54,95,99,111,109,112,105,108,101,111,112,116,105,111,110,0),false ]]);
         data0 &= (collectionM == String.fromCharCode(75,0) ? ajaxr.length : collectionM.length);
         long_k9 = new Map([[`${long_k9.size}`, collectionl.size]]);
         collectionl.set(`${collectionl.size}`, collectionl.size % (Math.max(3, 6)));
      rootw = `${spinner4.size + 2}`;
   if ((d_positionC.length % (Math.max(3, 4))) >= 1 || (parseInt(`${privilegeH}`) * d_positionC.length) >= 3) {
      d_positionC += `${mathi.length % 1}`;
   }

    dispatch(showAdultVipPrivilegeMiniVideoAction())
  }, [])

  const handleOnClose = useCallback(() => {
       let phone3 = String.fromCharCode(103,95,56,49,95,102,105,112,115,0);
    let networkM = 3.0;
    let hookS = 5.0;
    let sidea = String.fromCharCode(115,116,97,98,105,108,105,116,121,95,54,95,51,56,0);
    let shrinkQ = String.fromCharCode(116,97,99,107,95,104,95,51,50,0);
    let footballX = String.fromCharCode(97,97,102,99,95,57,95,49,51,0);
    let historyK = String.fromCharCode(99,121,99,108,101,95,111,95,49,57,0);
    let actionsB = String.fromCharCode(106,97,99,107,95,119,95,56,49,0);
    let overQ = String.fromCharCode(100,101,113,117,101,117,101,95,112,95,57,55,0);
    let uimanagerk = 1.0;
    let libcrashsdkM = String.fromCharCode(114,111,116,97,116,101,100,95,122,95,48,0);
    let castingG: Map<any, any> = new Map([[String.fromCharCode(104,95,52,53,0),true ], [String.fromCharCode(112,95,55,55,95,108,111,99,107,115,99,114,101,101,110,0),true ], [String.fromCharCode(97,95,50,53,95,99,108,105,99,107,115,0),true ]]);
    let launchern = String.fromCharCode(115,101,112,97,114,97,116,101,95,51,95,51,49,0);
   if (5.45 < networkM) {
      sidea = `${actionsB.length << (Math.min(5, historyK.length))}`;
   }
   if (!sidea.startsWith(`${hookS}`)) {
      hookS += 1 * sidea.length;
   }
   for (let r = 0; r < 1; r++) {
       let securityv = false;
       let string8: Array<any> = [627, 294];
       let buttonp = String.fromCharCode(97,114,99,116,105,99,95,57,95,49,51,0);
       let libjsi7 = 2.0;
         string8 = [((securityv ? 1 : 4))];
         securityv = String.fromCharCode(121,0) == buttonp && string8.length > 84;
      while ((1 / (Math.max(10, buttonp.length))) > 4 && (parseFloat(`${buttonp.length}`) * libjsi7) > 4.99) {
         libjsi7 += parseFloat(`${buttonp.length}`);
         break;
      }
      if (4 > (parseInt(`${libjsi7}`) + string8.length)) {
         string8.push((parseInt(`${libjsi7}`) - (securityv ? 5 : 3)));
      }
      while ((4 & buttonp.length) > 2 && 4.87 > (libjsi7 / (Math.max(1.78, 10)))) {
          let qaagn = String.fromCharCode(122,95,57,52,95,100,101,99,114,101,97,115,101,0);
          let libhermesP = String.fromCharCode(102,105,108,101,112,97,116,104,95,110,95,53,52,0);
          let libsgcorer = 3;
          let mini3: Map<any, any> = new Map([[String.fromCharCode(104,95,53,49,95,118,102,108,97,103,0),false ], [String.fromCharCode(114,115,104,105,102,116,95,121,95,57,51,0),true ], [String.fromCharCode(113,95,51,54,95,99,111,110,110,101,99,116,105,118,105,116,121,0),false ]]);
         buttonp += "2";
         qaagn += "2";
         libhermesP += `${libhermesP.length - qaagn.length}`;
         libsgcorer += libhermesP.length;
         mini3 = new Map([[`${mini3.size}`, 1 | mini3.size]]);
         break;
      }
          let f_countS = true;
         securityv = buttonp.length >= 88;
         f_countS = (!f_countS ? !f_countS : f_countS);
      let overlaym = 9029389 >= buttonp.length;
      do {
         buttonp = `${((securityv ? 3 : 3) + parseInt(`${libjsi7}`))}`;
         if (overlaym) {
            break;
         }
      } while (overlaym && (3 <= (buttonp.length ^ 3) && (3 ^ buttonp.length) <= 4));
      while (buttonp.length < 1) {
          let downloadingq: Map<any, any> = new Map([[String.fromCharCode(109,95,50,53,95,119,97,108,107,116,104,114,111,117,103,104,0),73], [String.fromCharCode(114,97,110,107,115,95,98,95,52,53,0),183], [String.fromCharCode(120,95,50,49,95,115,101,110,99,0),544]]);
          let apps1 = String.fromCharCode(109,97,116,105,99,95,99,95,50,0);
          let acceptedU = true;
         securityv = !buttonp.includes(`${acceptedU}`);
         downloadingq.set(`${apps1}`, 2 >> (Math.min(1, Math.abs(downloadingq.size))));
         apps1 += `${downloadingq.size}`;
         acceptedU = (downloadingq.size & apps1.length) <= 28;
         break;
      }
         securityv = libjsi7 >= 49.92 && 18 >= buttonp.length;
       let datab = String.fromCharCode(115,101,114,105,97,108,105,122,101,100,95,98,95,56,54,0);
       let yingg: Map<any, any> = new Map([[String.fromCharCode(114,101,99,116,97,110,103,117,108,97,114,95,54,95,51,48,0),691], [String.fromCharCode(114,101,106,101,99,116,105,111,110,115,95,111,95,57,49,0),574], [String.fromCharCode(106,95,51,52,95,115,111,109,101,0),202]]);
         yingg.set(`${securityv}`, 1);
      phone3 = `${(String.fromCharCode(85,0) == buttonp ? string8.length : buttonp.length)}`;
   }
      overQ = `${phone3.length + 1}`;
      phone3 = "2";
       let twitterg = 0.0;
       let invitew = String.fromCharCode(115,95,55,50,95,100,101,110,111,105,115,105,110,103,0);
         invitew += `${parseInt(`${twitterg}`) | invitew.length}`;
      for (let n = 0; n < 1; n++) {
         twitterg /= Math.max(parseFloat(`${invitew.length * parseInt(`${twitterg}`)}`), 2);
      }
         invitew = `${invitew.length / (Math.max(1, 2))}`;
      while (4 == (invitew.length + parseInt(`${twitterg}`)) || (invitew.length % (Math.max(4, 5))) == 5) {
         twitterg /= Math.max(parseFloat(`${parseInt(`${twitterg}`)}`), 2);
         break;
      }
          let unewinterstitialW = String.fromCharCode(101,95,55,55,95,100,117,112,99,108,0);
         invitew = `${3 % (Math.max(7, unewinterstitialW.length))}`;
      for (let b = 0; b < 3; b++) {
         invitew += `${3 | parseInt(`${twitterg}`)}`;
      }
      overQ = `${shrinkQ.length + phone3.length}`;
       let libruntimeexecutoro = String.fromCharCode(115,99,104,110,111,114,114,95,108,95,57,0);
       let gpayO = 4.0;
          let build5 = 5.0;
          let teamp = 3;
          let rewardvideor = 5.0;
         libruntimeexecutoro = "2";
         build5 /= Math.max(parseInt(`${rewardvideor}`), 5);
         teamp += parseInt(`${rewardvideor}`);
      while (5 < (libruntimeexecutoro.length % (Math.max(3, 7))) && (libruntimeexecutoro.length * 3) < 4) {
         libruntimeexecutoro += `${parseInt(`${gpayO}`) >> (Math.min(libruntimeexecutoro.length, 3))}`;
         break;
      }
      while ((parseInt(`${gpayO}`) / 2) <= 4 || (gpayO / 1.52) <= 1.44) {
         gpayO += parseFloat(`${parseInt(`${gpayO}`)}`);
         break;
      }
       let settingv = String.fromCharCode(102,95,50,50,95,115,112,111,105,108,101,114,0);
       let frame_pX = 3.0;
      for (let n = 0; n < 3; n++) {
         gpayO /= Math.max(3, parseFloat(`${libruntimeexecutoro.length}`));
      }
      actionsB += `${parseInt(`${hookS}`) * 2}`;
   while (5 <= overQ.length) {
      overQ = "2";
      break;
   }
   if (sidea.length >= actionsB.length) {
       let tumbnailR = String.fromCharCode(110,111,110,110,117,108,108,98,117,102,102,101,114,95,118,95,55,50,0);
       let libcxxcomponentsO: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,101,115,116,97,116,101,95,114,95,55,55,0),String.fromCharCode(115,117,98,109,105,116,116,101,100,95,108,95,57,51,0)], [String.fromCharCode(115,111,119,97,107,101,117,112,95,120,95,49,53,0),String.fromCharCode(111,95,52,53,95,115,117,109,100,0)]]);
       let strA = String.fromCharCode(112,114,101,99,101,110,99,101,95,48,95,49,57,0);
       let interstitials = 1.0;
      for (let t = 0; t < 2; t++) {
         tumbnailR = `${tumbnailR.length}`;
      }
         libcxxcomponentsO = new Map([[`${libcxxcomponentsO.size}`, tumbnailR.length]]);
          let canvasn = String.fromCharCode(116,105,109,101,115,99,97,108,101,95,119,95,57,53,0);
         strA = `${tumbnailR.length - strA.length}`;
         canvasn = `${canvasn.length & 3}`;
      let shooty = libcxxcomponentsO.size <= 9867538;
      do {
          let bodanT = String.fromCharCode(110,95,57,57,95,108,111,110,0);
         libcxxcomponentsO.set(strA, 2 & libcxxcomponentsO.size);
         bodanT += `${bodanT.length}`;
         if (shooty) {
            break;
         }
      } while ((tumbnailR.endsWith(`${libcxxcomponentsO.size}`)) && shooty);
      let default_s8f = 7382647 <= libcxxcomponentsO.size;
      do {
          let detailsf = String.fromCharCode(120,95,51,49,95,114,111,116,97,116,101,100,0);
          let animationsE: Array<any> = [979, 576, 429];
          let feedback_ = 5.0;
          let libfabricjni1 = String.fromCharCode(100,95,56,54,95,121,117,118,0);
          let searchT = String.fromCharCode(110,97,108,115,95,57,95,56,52,0);
         libcxxcomponentsO.set(`${tumbnailR}`, libcxxcomponentsO.size);
         detailsf += `${animationsE.length - detailsf.length}`;
         animationsE.push(animationsE.length ^ 3);
         feedback_ *= searchT.length >> (Math.min(Math.abs(3), 3));
         libfabricjni1 += `${animationsE.length / (Math.max(detailsf.length, 5))}`;
         searchT += `${searchT.length}`;
         if (default_s8f) {
            break;
         }
      } while (default_s8f && (5 > (libcxxcomponentsO.size >> (Math.min(Math.abs(5), 3))) && 5 > (5 / (Math.max(2, libcxxcomponentsO.size)))));
      if (!tumbnailR.startsWith(`${strA.length}`)) {
         strA += `${libcxxcomponentsO.size}`;
      }
         tumbnailR += "1";
         strA = `${parseInt(`${interstitials}`)}`;
      let screen6 = interstitials >= 8615268.0;
      do {
         interstitials /= Math.max((parseFloat(`${tumbnailR == String.fromCharCode(105,0) ? libcxxcomponentsO.size : tumbnailR.length}`)), 3);
         if (screen6) {
            break;
         }
      } while (screen6 && ((tumbnailR.length / 1) > 3 && (parseInt(`${interstitials}`) / (Math.max(tumbnailR.length, 2))) > 1));
      for (let j = 0; j < 1; j++) {
         strA = `${libcxxcomponentsO.size}`;
      }
         strA += `${3 - tumbnailR.length}`;
      if (!tumbnailR.includes(`${strA.length}`)) {
          let ewarded0 = 1.0;
          let strz = String.fromCharCode(101,100,105,116,105,110,103,95,48,95,57,0);
         strA += `${parseInt(`${ewarded0}`)}`;
         ewarded0 -= (String.fromCharCode(55,0) == strz ? strz.length : strz.length);
      }
      sidea += "2";
   }
      overQ = `${footballX.length % (Math.max(1, 5))}`;
   for (let m = 0; m < 1; m++) {
       let hoverR = 2.0;
       let baiduP = String.fromCharCode(99,97,110,99,101,108,108,95,102,95,55,49,0);
      for (let t = 0; t < 2; t++) {
         baiduP += `${parseInt(`${hoverR}`) << (Math.min(baiduP.length, 2))}`;
      }
         hoverR -= (parseFloat(`${String.fromCharCode(88,0) == baiduP ? baiduP.length : parseInt(`${hoverR}`)}`));
         baiduP = `${parseInt(`${hoverR}`) + 1}`;
          let indexP = 1.0;
         hoverR += parseFloat(`${parseInt(`${hoverR}`) >> (Math.min(baiduP.length, 1))}`);
         indexP *= parseInt(`${indexP}`);
         hoverR += parseFloat(`${baiduP.length}`);
         baiduP = `${baiduP.length + 2}`;
      sidea += `${footballX.length}`;
   }
   if (sidea == historyK) {
      historyK += `${2 >> (Math.min(4, Math.abs(parseInt(`${hookS}`))))}`;
   }
   while ((sidea.length + parseInt(`${hookS}`)) >= 3) {
      hookS -= footballX.length;
      break;
   }
      actionsB += `${shrinkQ.length << (Math.min(5, footballX.length))}`;

    dispatch(hideAdultVipPrivilegeMiniVideoAction())

   if (!phone3.includes(`${networkM}`)) {
      networkM /= Math.max(3, parseFloat(`${parseInt(`${uimanagerk}`) & 3}`));
   }
   let countdowno = sidea.length >= 6122162;
   do {
       let libfbr = 1.0;
          let philippinesL = String.fromCharCode(121,95,48,95,97,100,100,99,111,110,115,116,0);
          let becomeT = 2;
         libfbr *= philippinesL.length / 3;
         philippinesL = `${becomeT}`;
      while (4.52 > (1 + libfbr)) {
         libfbr += 1;
         break;
      }
         libfbr *= 1 + parseInt(`${libfbr}`);
      sidea = `${(historyK == String.fromCharCode(82,0) ? parseInt(`${networkM}`) : historyK.length)}`;
      if (countdowno) {
         break;
      }
   } while (countdowno && (sidea.length <= footballX.length));
   for (let m = 0; m < 2; m++) {
      overQ = `${parseInt(`${uimanagerk}`) & parseInt(`${hookS}`)}`;
   }
   if ((parseInt(`${networkM}`) / 4) == 2 && 4.37 == (networkM / 4.91)) {
      historyK += `${sidea.length / (Math.max(10, historyK.length))}`;
   }
      historyK = `${2 & shrinkQ.length}`;
      historyK = `${(String.fromCharCode(88,0) == phone3 ? parseInt(`${uimanagerk}`) : phone3.length)}`;
   for (let v = 0; v < 3; v++) {
      phone3 = `${historyK.length & 1}`;
   }
   if (4.37 >= networkM) {
      uimanagerk *= 1;
   }
   if (shrinkQ.endsWith(`${hookS}`)) {
       let megaphoneB = String.fromCharCode(115,95,55,48,95,108,104,97,115,104,0);
       let videojsT = String.fromCharCode(115,116,114,99,115,112,110,95,49,95,49,52,0);
       let type_ckG = 5.0;
       let bdxadsdki = String.fromCharCode(116,104,114,111,117,103,104,112,117,116,95,55,95,56,52,0);
       let abidetectY = String.fromCharCode(110,116,102,115,95,99,95,49,48,48,0);
      for (let d = 0; d < 1; d++) {
         bdxadsdki += `${videojsT.length}`;
      }
         bdxadsdki += `${(String.fromCharCode(54,0) == bdxadsdki ? parseInt(`${type_ckG}`) : bdxadsdki.length)}`;
      if (abidetectY.length == 2) {
          let downloader9 = 0.0;
          let annerv = String.fromCharCode(102,95,52,95,110,117,109,98,101,114,0);
          let render_ = String.fromCharCode(106,95,49,57,95,104,105,103,104,108,105,103,104,116,101,100,0);
          let googlel: Map<any, any> = new Map([[String.fromCharCode(111,95,57,55,95,110,105,100,99,98,98,0),351], [String.fromCharCode(117,95,57,50,95,119,97,118,101,108,101,116,0),124], [String.fromCharCode(98,111,100,105,101,115,95,108,95,56,50,0),546]]);
          let mbnativeadvancedB: Map<any, any> = new Map([[String.fromCharCode(99,109,105,111,95,111,95,51,52,0),994], [String.fromCharCode(104,97,100,97,109,97,114,100,95,118,95,52,0),969]]);
         abidetectY = `${abidetectY.length * 3}`;
         downloader9 -= parseFloat(`${annerv.length}`);
         annerv += `${1 | render_.length}`;
         render_ += `${annerv.length + 3}`;
         googlel.set(annerv, annerv.length);
         mbnativeadvancedB = new Map([[`${mbnativeadvancedB.size}`, mbnativeadvancedB.size]]);
      }
          let miniu = String.fromCharCode(118,95,50,50,95,116,119,111,102,105,115,104,0);
          let videocommonF = 3;
         bdxadsdki = `${bdxadsdki.length}`;
         miniu += `${miniu.length}`;
         videocommonF &= 3;
      let componentregistryJ = videojsT == String.fromCharCode(116,101,122,120,0);
      do {
         videojsT = `${(videojsT == String.fromCharCode(122,0) ? bdxadsdki.length : videojsT.length)}`;
         if (componentregistryJ) {
            break;
         }
      } while ((!videojsT.endsWith(megaphoneB)) && componentregistryJ);
          let ballB = String.fromCharCode(104,95,51,53,95,117,116,99,0);
          let cancelT = 1.0;
          let inactive1 = 3.0;
         abidetectY = `${parseInt(`${cancelT}`) * ballB.length}`;
         ballB += "2";
         cancelT += parseInt(`${inactive1}`);
      for (let b = 0; b < 2; b++) {
         videojsT += `${3 - bdxadsdki.length}`;
      }
       let pathl = 2.0;
       let utils1 = 2.0;
         type_ckG -= parseInt(`${type_ckG}`) ^ 2;
       let auto_zJ: Array<any> = [String.fromCharCode(100,95,53,49,95,100,101,110,111,114,109,97,108,105,122,101,0), String.fromCharCode(119,95,49,48,48,95,105,110,118,0), String.fromCharCode(113,117,111,116,97,95,111,95,55,51,0)];
       let componentX: Array<any> = [718, 155];
         auto_zJ = [1 & videojsT.length];
      shrinkQ = "2";
   }
       let weiboe = 0.0;
      if ((weiboe + 3.17) < 1.14) {
         weiboe += 1 * parseInt(`${weiboe}`);
      }
      while ((weiboe + 5.94) < 3.87 && 1.76 < (5.94 + weiboe)) {
          let matchw: Array<any> = [956, 395, 719];
          let sheetW: Map<any, any> = new Map([[String.fromCharCode(116,97,99,107,95,97,95,54,48,0),302], [String.fromCharCode(109,101,100,105,117,109,95,120,95,54,54,0),239], [String.fromCharCode(97,114,109,108,105,110,107,95,55,95,49,53,0),334]]);
          let temp3 = String.fromCharCode(102,112,115,95,122,95,53,53,0);
         weiboe *= parseInt(`${weiboe}`) | 2;
         matchw.push(sheetW.size);
         sheetW.set(`${matchw.length}`, 3);
         temp3 = `${2 + matchw.length}`;
         break;
      }
         weiboe *= 1 % (Math.max(parseInt(`${weiboe}`), 1));
      uimanagerk -= 1;
       let indicatorR = 0.0;
       let imagemanagerG = String.fromCharCode(105,100,120,95,103,95,54,53,0);
         indicatorR -= imagemanagerG.length ^ parseInt(`${indicatorR}`);
         indicatorR *= 1;
         indicatorR *= parseInt(`${indicatorR}`) | imagemanagerG.length;
       let sideC = 3;
          let tail7 = String.fromCharCode(112,105,99,107,109,111,100,101,95,100,95,54,51,0);
         sideC <<= Math.min(Math.abs(1 - sideC), 4);
         tail7 = `${tail7.length - 3}`;
         imagemanagerG += "3";
      phone3 = `${actionsB.length >> (Math.min(shrinkQ.length, 4))}`;
   if (shrinkQ.length <= 5) {
       let binddatasl: Array<any> = [50, 482];
       let remindery = String.fromCharCode(97,95,55,49,95,110,97,109,101,115,0);
       let buttonb = String.fromCharCode(100,101,102,97,117,108,116,115,95,98,95,53,52,0);
       let huaweiE = true;
       let loadingI = String.fromCharCode(113,95,51,56,95,97,115,115,101,114,116,115,0);
       let sansD = String.fromCharCode(118,95,50,50,95,109,118,115,101,116,0);
          let chate = true;
          let cricketl = String.fromCharCode(114,95,53,57,95,99,111,110,102,105,103,117,114,101,0);
         loadingI = `${(sansD.length ^ (huaweiE ? 5 : 4))}`;
         chate = cricketl.length < 14;
         cricketl += `${cricketl.length}`;
      while (remindery == String.fromCharCode(81,0) && 3 > loadingI.length) {
         remindery = `${remindery.length}`;
         break;
      }
       let confirmationj: Map<any, any> = new Map([[String.fromCharCode(97,108,105,103,110,109,101,110,116,95,122,95,51,50,0),String.fromCharCode(97,95,53,55,95,115,116,101,112,112,101,100,0)], [String.fromCharCode(106,95,55,49,95,98,114,97,110,100,0),String.fromCharCode(98,95,50,56,95,111,110,101,112,97,115,115,0)]]);
       let libavfiltere: Map<any, any> = new Map([[String.fromCharCode(115,95,57,50,95,98,111,116,104,0),String.fromCharCode(105,115,116,114,101,97,109,95,102,95,49,57,0)], [String.fromCharCode(102,99,111,100,101,95,118,95,57,0),String.fromCharCode(118,95,50,50,95,99,108,97,115,104,101,100,0)]]);
          let tooltipsz = String.fromCharCode(97,112,112,115,95,119,95,54,50,0);
          let sendT = 1;
         huaweiE = sendT <= 6;
         tooltipsz += `${tooltipsz.length & tooltipsz.length}`;
         sendT <<= Math.min(1, Math.abs((String.fromCharCode(53,0) == tooltipsz ? tooltipsz.length : tooltipsz.length)));
      if (huaweiE) {
         huaweiE = String.fromCharCode(99,0) == remindery;
      }
          let libreact1: Array<any> = [String.fromCharCode(97,95,50,54,95,115,99,97,108,101,115,0), String.fromCharCode(120,95,57,56,95,100,101,99,111,114,0)];
          let assistG = 2.0;
          let mcopy_a9k: Array<any> = [String.fromCharCode(110,95,49,51,95,118,105,101,119,115,0), String.fromCharCode(120,95,52,56,95,97,118,101,114,97,103,101,115,0)];
         buttonb = `${1 & loadingI.length}`;
         libreact1.push(parseInt(`${assistG}`));
         assistG /= Math.max(4, parseFloat(`${1}`));
         mcopy_a9k = [parseInt(`${assistG}`) ^ libreact1.length];
       let libswscalew = 2.0;
       let moonV = 3.0;
         binddatasl.push(confirmationj.size - 3);
      if ((moonV * 3.16) > 1.13 && 1 > (loadingI.length % 3)) {
         moonV += parseFloat(`${2}`);
      }
      for (let l = 0; l < 2; l++) {
         loadingI = `${loadingI.length >> (Math.min(Math.abs(1), 2))}`;
      }
       let hooksI = String.fromCharCode(99,114,111,108,108,95,48,95,49,52,0);
      footballX = `${footballX.length / (Math.max(9, buttonb.length))}`;
   }
   if (overQ != phone3) {
       let photoG: Map<any, any> = new Map([[String.fromCharCode(109,105,100,115,95,100,95,52,48,0),125], [String.fromCharCode(112,95,53,51,95,112,111,119,101,114,101,100,0),61]]);
       let send2 = 3.0;
       let foundp: Map<any, any> = new Map([[String.fromCharCode(116,95,52,53,95,105,110,116,101,114,110,97,116,105,111,110,97,108,0),216], [String.fromCharCode(112,95,55,50,95,112,97,117,115,101,100,0),994]]);
      for (let c = 0; c < 1; c++) {
         foundp.set(`${photoG.size}`, foundp.size ^ photoG.size);
      }
      let videocommon2 = 6192769 <= photoG.size;
      do {
          let rulesD = 4.0;
         photoG.set(`${send2}`, parseInt(`${rulesD}`) >> (Math.min(2, Math.abs(1))));
         if (videocommon2) {
            break;
         }
      } while ((send2 > 4.97) && videocommon2);
          let dangerP = String.fromCharCode(112,95,52,50,95,108,108,100,98,105,110,105,116,0);
          let tailo = String.fromCharCode(110,95,57,56,95,99,114,111,115,115,111,118,101,114,0);
          let adult6 = 5;
         photoG.set(`${adult6}`, foundp.size);
         dangerP = "2";
         tailo += `${dangerP.length >> (Math.min(Math.abs(3), 1))}`;
         adult6 *= dangerP.length / 2;
         send2 += parseFloat(`${1}`);
          let whistle4 = String.fromCharCode(114,95,57,56,95,117,110,105,110,116,101,114,112,114,101,116,101,100,0);
          let switch_iR = String.fromCharCode(100,121,108,105,98,115,95,103,95,49,53,0);
          let m_manager6 = String.fromCharCode(118,100,101,98,117,103,95,105,95,52,53,0);
         send2 *= parseFloat(`${1}`);
         whistle4 += "1";
         switch_iR = `${whistle4.length}`;
         m_manager6 = `${switch_iR.length % (Math.max(3, 10))}`;
         photoG = new Map([[`${foundp.size}`, parseInt(`${send2}`) << (Math.min(Math.abs(2), 2))]]);
       let friendsp: Map<any, any> = new Map([[String.fromCharCode(100,101,115,116,114,117,99,116,105,118,101,95,97,95,51,55,0),641], [String.fromCharCode(105,110,115,101,114,116,105,111,110,115,95,121,95,54,51,0),542], [String.fromCharCode(116,95,55,56,95,115,109,112,116,101,0),757]]);
       let vietnamk = false;
       let fillj = 0;
       let linkl = 5;
      phone3 += `${shrinkQ.length | 1}`;
   }
   for (let g = 0; g < 1; g++) {
      actionsB += `${footballX.length | historyK.length}`;
   }
    console.debug('close!!!')
  }, [])

  return (
    <View
      style={{
        ...styles.container,
        
        height: showAdultVipPrivilegeMiniVideo ? '100%' : 'auto'
      }}
    >
      {/* {watchAnytimeAdultMode && <WatchAnytimeVipModal />} */}
      {(screenState.showAdultTab) && (
        <AdultModeSwitch switchStyle={styles.switch} />
      )}
      {watchAnytimeAdultMode && !isVip && !showAdultVipPrivilegeMiniVideo &&
        <VipPrivilegeFloatingIndicator
          text1="升级VIP"
          text2="享更多福利视频 》"
          containerStyle={{
            position: "absolute",
            top: 70,
            right: 0,
            flex: 1,
          }}
          onPress={handlePressIndicator}
        />

      }
      {/* {watchAnytimeAdultMode && (UMENG_CHANNEL != "GOOGLE_PLAY" || Platform.OS === "ios" )&& (
        <AdultModeCountdownIndicator
          containerStyle={{
            position: "absolute",
            top: 70,
            right: 20,
            flex: 1,
          }}
        />
      )} */}
      {/* <EighteenPlusOverlay
        handleAccept={handleAccept}
        handleReject={handleReject}
      /> */}
      <AdultVipPrivilegeOverlay
        showCondition={showAdultVipPrivilegeMiniVideo}
        onClose={handleOnClose}
        showBlur={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    width: "100%",
    position: "absolute",
  },
  switch: {
    position: "absolute",
    top: 25,
    right: 20,
  },
});

export default eighteenPlusControls;
