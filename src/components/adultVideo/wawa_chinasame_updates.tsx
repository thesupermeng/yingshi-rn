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
import WatchAnytimeVipModal from "../modal/wawa_trophy";
import EighteenPlusOverlay from "../modal/wawa_reactnativejs_liblogger";
import CountdownIndicator from "../button/wawa_middle_langkey";
import AdultModeCountdownIndicator from "./wawa_station";
import AdultModeSwitch from "./wawa_arrowdown";
import { screenModel } from "@type/wawa_rules";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/wawa_root";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
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
} from "@redux/actions/wawa_related";
import { UMENG_CHANNEL } from "@utility/wawa_iconpointscore";
import { AdultVipPrivilegeOverlay } from "../modal/wawa_whitetick";
import { VipPrivilegeFloatingIndicator } from "./wawa_libhermes_libsgcore";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";
interface wawaAwayShow { }

const eighteenPlusControls = ({ }: wawaAwayShow) => {
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );
  const userState = useSelector<wawaPhoneControls>('userReducer');
  const {
    adultModeVipShow,
    adultModeDisclaimerShow,
    adultMode,
    watchAnytimeAdultMode,
    isOverEighteenAccepted,
    showAdultVipPrivilegeMiniVideo
  } = screenState;
  const dispatch = useAppDispatch();
  const isVip = wawaLibglog.fakeIsVip(userState.user);

  
  
  
  
  
  
  
  //   return () => clearInterval(interval)
  
  console.log(Platform.OS)

  const handleAccept = useCallback(() => {
       let filedk = String.fromCharCode(97,109,102,101,110,99,0);
    let bggradientQ = 5.0;
    let penaltygoalS = String.fromCharCode(102,97,118,101,100,0);
    let privacyw = String.fromCharCode(99,108,103,101,116,0);
    let handlerh = String.fromCharCode(99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,0);
    let memberR = 5;
    let calendaro = String.fromCharCode(112,97,114,116,105,99,108,101,115,0);
    let iconpipshrinko = String.fromCharCode(114,101,100,105,114,101,99,116,105,111,110,97,108,0);
    let moduleg = 0;
    let signinupM: Map<any, any> = new Map([[String.fromCharCode(115,101,109,105,99,111,108,111,110,0),700], [String.fromCharCode(109,101,109,100,101,98,117,103,0),393]]);
    let robotoE = 2.0;
      bggradientQ /= Math.max(4, penaltygoalS.length);
   for (let y = 0; y < 3; y++) {
      penaltygoalS += `${moduleg >> (Math.min(3, Math.abs(memberR)))}`;
   }
       let minivodq: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,101,103,109,101,110,116,0),true ], [String.fromCharCode(117,95,54,53,95,118,97,114,115,0),false ], [String.fromCharCode(118,101,110,117,101,115,0),false ]]);
       let distr = String.fromCharCode(120,98,105,110,0);
       let iconpipshrinkE = String.fromCharCode(108,105,109,105,116,97,116,105,111,110,0);
       let placeholderV: Array<any> = [781, 857, 181];
       let debugj: Array<any> = [String.fromCharCode(115,105,110,116,105,0), String.fromCharCode(109,110,101,109,111,110,105,99,0)];
         iconpipshrinkE += `${3 >> (Math.min(3, iconpipshrinkE.length))}`;
      while (3 <= placeholderV.length) {
         placeholderV.push(distr.length * 1);
         break;
      }
      for (let k = 0; k < 3; k++) {
         placeholderV = [placeholderV.length % 1];
      }
          let downloadedp = 4;
          let hookY: Array<any> = [String.fromCharCode(105,110,118,101,114,115,101,0), String.fromCharCode(108,111,99,97,108,105,116,121,0)];
          let b_titlea: Array<any> = [String.fromCharCode(121,95,48,95,101,110,115,0), String.fromCharCode(108,97,112,112,101,100,0), String.fromCharCode(116,116,114,105,98,117,116,101,100,0)];
         debugj.push(debugj.length & placeholderV.length);
         downloadedp *= 2 ^ hookY.length;
         hookY = [downloadedp];
         b_titlea.push(1);
         minivodq.set(iconpipshrinkE, (iconpipshrinkE == String.fromCharCode(112,0) ? iconpipshrinkE.length : debugj.length));
         placeholderV.push(2 - distr.length);
      if (5 == (4 - distr.length)) {
         distr += `${debugj.length}`;
      }
      let expiredu = debugj.length >= 8067344;
      do {
         debugj = [debugj.length];
         if (expiredu) {
            break;
         }
      } while ((5 == (debugj.length + 4) && 3 == (debugj.length + 4)) && expiredu);
      iconpipshrinko = `${3 & filedk.length}`;
   let penaltyshootz = 5224807 <= handlerh.length;
   do {
      handlerh += "3";
      if (penaltyshootz) {
         break;
      }
   } while ((handlerh.length == 4) && penaltyshootz);
      calendaro = `${(handlerh == String.fromCharCode(57,0) ? handlerh.length : memberR)}`;
      iconpipshrinko = `${(privacyw == String.fromCharCode(114,0) ? privacyw.length : moduleg)}`;

    console.debug("accepted 18+");

      privacyw += `${filedk.length}`;
   for (let a = 0; a < 2; a++) {
       let gifte = String.fromCharCode(98,101,104,105,110,100,0);
       let predictiondefaultn = false;
       let videocommonV = String.fromCharCode(108,111,99,97,116,101,0);
       let usernamek = 3.0;
      while (1 <= (5 + gifte.length)) {
          let specY: Array<any> = [202, 548, 807];
          let yellowtoredo: Map<any, any> = new Map([[String.fromCharCode(109,100,97,116,0),false ], [String.fromCharCode(119,105,114,101,0),true ]]);
          let fieldC = 2;
          let register_s4 = String.fromCharCode(115,121,109,98,111,108,0);
          let ewardedE = String.fromCharCode(112,97,114,115,101,117,116,105,108,115,0);
         gifte = `${2 ^ register_s4.length}`;
         specY.push(1);
         yellowtoredo.set(ewardedE, 2 % (Math.max(6, specY.length)));
         fieldC |= yellowtoredo.size;
         register_s4 = "3";
         ewardedE += `${fieldC}`;
         break;
      }
      while (gifte.endsWith(`${predictiondefaultn}`)) {
         predictiondefaultn = usernamek <= 76.50;
         break;
      }
         gifte += `${2 - gifte.length}`;
         usernamek -= (parseFloat(`${(predictiondefaultn ? 3 : 4)}`));
      while (!predictiondefaultn && 5 <= videocommonV.length) {
          let transferY: Map<any, any> = new Map([[String.fromCharCode(114,112,99,0),843], [String.fromCharCode(116,111,107,104,122,0),736]]);
          let editc = String.fromCharCode(112,108,97,116,102,111,114,109,0);
          let over1 = 5.0;
          let fcdaebecbcbafcdfceaaeccfeacdba = true;
         predictiondefaultn = over1 < usernamek;
         transferY = new Map([[editc, 2]]);
         editc = `${transferY.size}`;
         over1 += ((fcdaebecbcbafcdfceaaeccfeacdba ? 4 : 3) / (Math.max(6, editc.length)));
         break;
      }
          let langC: Map<any, any> = new Map([[String.fromCharCode(101,110,102,111,114,99,101,0),true ], [String.fromCharCode(105,112,102,115,0),true ]]);
          let files = String.fromCharCode(114,112,114,111,98,101,0);
         predictiondefaultn = files.length <= 90;
         langC = new Map([[`${langC.size}`, langC.size + 2]]);
         files = "2";
      while (1.1 <= (usernamek / 3.80)) {
         gifte += `${((predictiondefaultn ? 5 : 3))}`;
         break;
      }
         videocommonV += `${videocommonV.length << (Math.min(Math.abs(1), 2))}`;
       let smallbrightnessV = String.fromCharCode(112,97,114,97,0);
      if (!predictiondefaultn) {
         predictiondefaultn = smallbrightnessV.length >= 41 && predictiondefaultn;
      }
      let baiduadsy = 6530011.0 >= usernamek;
      do {
          let iconnointernetR = String.fromCharCode(117,95,54,55,95,97,115,99,105,105,105,110,100,101,120,0);
         usernamek *= parseFloat(`${smallbrightnessV.length}`);
         iconnointernetR += `${iconnointernetR.length ^ 2}`;
         if (baiduadsy) {
            break;
         }
      } while (((smallbrightnessV.length + 5) < 3) && baiduadsy);
         predictiondefaultn = 78.2 < usernamek;
      privacyw = `${memberR}`;
   }
      calendaro = `${calendaro.length}`;
   while (iconpipshrinko.length > 3) {
      iconpipshrinko += `${iconpipshrinko.length >> (Math.min(1, handlerh.length))}`;
      break;
   }
   let sharewhiteA = iconpipshrinko == String.fromCharCode(98,119,118,56,50,56,0);
   do {
       let codegenn = 1;
       let elementsw: Array<any> = [185, 555, 126];
       let bgvipxvodK = 4.0;
      while (3 >= (4 << (Math.min(5, Math.abs(codegenn)))) || (4 << (Math.min(3, Math.abs(codegenn)))) >= 5) {
         elementsw.push(2);
         break;
      }
         bgvipxvodK -= parseFloat(`${2 % (Math.max(7, codegenn))}`);
       let iconnointernetV = String.fromCharCode(118,105,115,105,98,105,108,105,116,105,101,115,0);
      let giftJ = bgvipxvodK <= 8494390.0;
      do {
          let firebases: Map<any, any> = new Map([[String.fromCharCode(109,107,100,105,114,0),647], [String.fromCharCode(105,95,52,53,95,105,119,104,116,0),329]]);
          let overlayD: Array<any> = [694, 182, 796];
         bgvipxvodK -= parseFloat(`${2}`);
         firebases = new Map([[`${firebases.size}`, 1 << (Math.min(4, overlayD.length))]]);
         overlayD.push(firebases.size);
         if (giftJ) {
            break;
         }
      } while (giftJ && ((parseFloat(`${codegenn}`) / (Math.max(8, bgvipxvodK))) >= 4.82 && (codegenn / 3) >= 2));
          let iconnewchat_ = String.fromCharCode(115,101,97,114,99,104,101,100,0);
         bgvipxvodK *= parseFloat(`${2}`);
         iconnewchat_ += `${2 | iconnewchat_.length}`;
      let singleS = 6790324 <= elementsw.length;
      do {
         elementsw.push(parseInt(`${bgvipxvodK}`) % 1);
         if (singleS) {
            break;
         }
      } while ((5.17 < (1.42 - bgvipxvodK) || (1.42 - bgvipxvodK) < 2.53) && singleS);
         elementsw = [codegenn | parseInt(`${bgvipxvodK}`)];
         elementsw = [1];
         elementsw.push(3);
      iconpipshrinko = `${codegenn + 3}`;
      if (sharewhiteA) {
         break;
      }
   } while (sharewhiteA && (2 <= (parseInt(`${bggradientQ}`) - iconpipshrinko.length)));
   let bggradientS = 7347854 >= iconpipshrinko.length;
   do {
      iconpipshrinko += `${3 % (Math.max(parseInt(`${bggradientQ}`), 3))}`;
      if (bggradientS) {
         break;
      }
   } while (bggradientS && (!iconpipshrinko.startsWith(calendaro)));
    dispatch(enableAdultMode());

   if (privacyw.length <= penaltygoalS.length) {
      penaltygoalS += `${filedk.length}`;
   }
      iconpipshrinko = `${penaltygoalS.length % (Math.max(handlerh.length, 4))}`;
   if (!iconpipshrinko.startsWith(privacyw)) {
       let shootE: Map<any, any> = new Map([[String.fromCharCode(115,97,103,97,0),true ], [String.fromCharCode(121,118,116,111,121,117,121,0),false ]]);
       let downloadedb: Map<any, any> = new Map([[String.fromCharCode(116,101,110,99,0),581], [String.fromCharCode(115,116,114,111,107,101,100,0),643]]);
       let tempnodatagifz = false;
       let viewers = String.fromCharCode(110,95,48,95,112,108,97,116,102,111,114,109,0);
      for (let h = 0; h < 2; h++) {
         shootE = new Map([[`${downloadedb.size}`, (downloadedb.size | (tempnodatagifz ? 4 : 3))]]);
      }
      let event4 = viewers.length >= 5741586;
      do {
         viewers += `${viewers.length >> (Math.min(5, Math.abs(shootE.size)))}`;
         if (event4) {
            break;
         }
      } while (event4 && (viewers.includes(`${tempnodatagifz}`)));
       let const_dQ = String.fromCharCode(100,95,52,48,0);
          let eyeclose7 = 3.0;
          let connection9 = 0;
         viewers = `${downloadedb.size}`;
         eyeclose7 -= connection9;
         connection9 += 1;
      while (viewers.length > 1) {
         viewers += `${1 ^ viewers.length}`;
         break;
      }
      while (5 <= (const_dQ.length | 4) && 4 <= (downloadedb.size | const_dQ.length)) {
          let servicez = 1.0;
          let update_jv = 0.0;
          let typesz = 5.0;
          let change2 = String.fromCharCode(100,111,99,107,101,114,0);
         downloadedb = new Map([[`${servicez}`, parseInt(`${update_jv}`)]]);
         servicez *= parseInt(`${typesz}`) + 1;
         typesz += change2.length * parseInt(`${typesz}`);
         change2 = `${(change2 == String.fromCharCode(107,0) ? parseInt(`${typesz}`) : change2.length)}`;
         break;
      }
       let checkboxm: Array<any> = [874, 707, 905];
       let executorb: Map<any, any> = new Map([[String.fromCharCode(100,101,108,105,109,105,116,101,114,0),87], [String.fromCharCode(119,105,110,100,111,119,0),131], [String.fromCharCode(101,116,97,100,97,116,97,0),899]]);
       let unselected0: Map<any, any> = new Map([[String.fromCharCode(102,114,105,99,116,105,111,110,0),726], [String.fromCharCode(116,105,102,102,0),719]]);
         downloadedb.set(`${downloadedb.size}`, executorb.size);
      while ((const_dQ.length / (Math.max(9, checkboxm.length))) < 2) {
         checkboxm = [downloadedb.size];
         break;
      }
       let filledm = 5.0;
       let moviesq = 4.0;
          let chartl = 4.0;
          let assistf = 4.0;
         tempnodatagifz = viewers.length == executorb.size;
         chartl *= parseFloat(`${parseInt(`${chartl}`) | 2}`);
         assistf *= parseInt(`${chartl}`);
      privacyw += `${(iconpipshrinko == String.fromCharCode(119,0) ? iconpipshrinko.length : (tempnodatagifz ? 3 : 4))}`;
   }
   while (!iconpipshrinko.endsWith(`${privacyw.length}`)) {
      iconpipshrinko = `${privacyw.length * moduleg}`;
      break;
   }
   while (!calendaro.includes(`${moduleg}`)) {
      moduleg ^= 2 | handlerh.length;
      break;
   }
   let debugq = penaltygoalS.length <= 8692913;
   do {
      penaltygoalS += `${parseInt(`${bggradientQ}`) << (Math.min(Math.abs(3), 2))}`;
      if (debugq) {
         break;
      }
   } while (debugq && (iconpipshrinko == String.fromCharCode(74,0)));
    dispatch(acceptOverEighteen());

       let gifgoal0 = 5.0;
       let previewY: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,115,105,122,101,0),768], [String.fromCharCode(99,111,110,115,111,108,101,0),421]]);
       let xvodZ = String.fromCharCode(97,114,103,115,95,49,95,53,57,0);
         gifgoal0 += parseFloat(`${2}`);
      if (previewY.get(`${gifgoal0}`) == null) {
          let temperatureg = 2.0;
          let shootyesgoalG = String.fromCharCode(117,95,52,50,95,97,117,100,105,111,0);
          let sans9 = 2.0;
         gifgoal0 *= (parseFloat(`${String.fromCharCode(104,0) == xvodZ ? parseInt(`${gifgoal0}`) : xvodZ.length}`));
         temperatureg *= (String.fromCharCode(50,0) == shootyesgoalG ? shootyesgoalG.length : parseInt(`${temperatureg}`));
         sans9 -= parseInt(`${temperatureg}`) & 1;
      }
      let hoverz = 9808091.0 >= gifgoal0;
      do {
         gifgoal0 -= parseFloat(`${2}`);
         if (hoverz) {
            break;
         }
      } while (hoverz && (3.28 == (3.36 * gifgoal0)));
         previewY = new Map([[`${previewY.size}`, 1]]);
         xvodZ = `${3 ^ parseInt(`${gifgoal0}`)}`;
      while (xvodZ.startsWith(`${previewY.size}`)) {
          let vignette4 = 0.0;
          let sansW = 2.0;
         xvodZ += `${parseInt(`${gifgoal0}`)}`;
         vignette4 /= Math.max(parseFloat(`${parseInt(`${vignette4}`) / (Math.max(4, parseInt(`${sansW}`)))}`), 5);
         sansW *= parseFloat(`${parseInt(`${sansW}`) - parseInt(`${vignette4}`)}`);
         break;
      }
      while ((3 << (Math.min(1, Math.abs(previewY.size)))) == 2 && 1 == (3 << (Math.min(1, xvodZ.length)))) {
         previewY.set(xvodZ, previewY.size);
         break;
      }
      if (previewY.size > xvodZ.length) {
         previewY = new Map([[`${previewY.size}`, parseInt(`${gifgoal0}`) / 1]]);
      }
         previewY.set(`${xvodZ}`, xvodZ.length);
      penaltygoalS += `${(String.fromCharCode(72,0) == handlerh ? parseInt(`${bggradientQ}`) : handlerh.length)}`;
       let pointD = String.fromCharCode(109,115,117,98,0);
      let blackU = pointD.length >= 8921844;
      do {
         pointD += `${pointD.length - pointD.length}`;
         if (blackU) {
            break;
         }
      } while ((2 > pointD.length) && blackU);
       let bottom8 = 3;
      while ((5 + pointD.length) <= 5 || 4 <= (pointD.length + 5)) {
         pointD = `${2 << (Math.min(5, Math.abs(bottom8)))}`;
         break;
      }
      memberR %= Math.max(iconpipshrinko.length, 3);
      iconpipshrinko += `${filedk.length * 1}`;
      filedk += `${penaltygoalS.length}`;
       let dependencyG = 5.0;
      if ((dependencyG / 5.14) > 4.80 || (dependencyG / 5.14) > 1.12) {
         dependencyG -= parseFloat(`${parseInt(`${dependencyG}`)}`);
      }
       let notificationfilledc = 3;
       let foundN: Map<any, any> = new Map([[String.fromCharCode(119,105,108,108,0),112], [String.fromCharCode(105,110,99,111,109,112,97,116,105,98,108,101,0),871], [String.fromCharCode(97,95,57,48,95,101,110,117,109,101,114,97,116,105,111,110,0),38]]);
      calendaro = `${1 & parseInt(`${bggradientQ}`)}`;
   while ((filedk.length + memberR) == 3 || 1 == (3 + filedk.length)) {
      memberR -= calendaro.length;
      break;
   }
    dispatch(hideAdultModeDisclaimer());

   while (bggradientQ == penaltygoalS.length) {
      bggradientQ *= 2;
      break;
   }
      handlerh += `${filedk.length - 1}`;
   let mbbanner2 = String.fromCharCode(118,112,53,0) == penaltygoalS;
   do {
       let viewerw = true;
         viewerw = !viewerw;
          let videojso = String.fromCharCode(101,112,122,115,0);
          let profileinactive9 = String.fromCharCode(105,108,115,116,0);
          let libreactnativejniC = String.fromCharCode(102,95,56,95,105,110,116,114,101,97,100,119,114,105,116,101,0);
         viewerw = videojso.length < 76;
         videojso = `${profileinactive9.length}`;
         profileinactive9 = "1";
         libreactnativejniC = `${2 << (Math.min(1, profileinactive9.length))}`;
         viewerw = !viewerw;
      penaltygoalS += `${3 % (Math.max(10, penaltygoalS.length))}`;
      if (mbbanner2) {
         break;
      }
   } while (((penaltygoalS.length % 1) > 2 || (1 / (Math.max(3, parseInt(`${bggradientQ}`)))) > 3) && mbbanner2);
      privacyw += `${moduleg}`;
   let libreanimatedw = String.fromCharCode(53,122,105,103,104,99,103,103,0) == calendaro;
   do {
       let philippinese = 0.0;
       let guideL = String.fromCharCode(117,110,109,105,110,105,109,105,122,101,0);
       let navigationg = String.fromCharCode(108,95,56,49,95,120,100,99,97,109,0);
       let iconbellactiveW = 4;
       let bgvipsportd: Map<any, any> = new Map([[String.fromCharCode(111,110,116,114,97,115,116,0),String.fromCharCode(117,118,109,118,0)], [String.fromCharCode(117,110,105,109,112,108,101,109,101,110,116,101,100,0),String.fromCharCode(116,105,112,115,0)], [String.fromCharCode(112,114,111,100,0),String.fromCharCode(114,101,97,116,116,97,99,104,0)]]);
      let penaltyshootr = philippinese >= 9262847.0;
      do {
         philippinese -= navigationg.length / (Math.max(3, 9));
         if (penaltyshootr) {
            break;
         }
      } while ((iconbellactiveW < philippinese) && penaltyshootr);
      while (iconbellactiveW == navigationg.length) {
         iconbellactiveW %= Math.max(iconbellactiveW, 3);
         break;
      }
      let watchA = iconbellactiveW >= 8755064;
      do {
         iconbellactiveW <<= Math.min(Math.abs(parseInt(`${philippinese}`)), 2);
         if (watchA) {
            break;
         }
      } while (watchA && (iconbellactiveW >= navigationg.length));
      while (philippinese >= 4.85) {
          let rocketR = 3;
         bgvipsportd = new Map([[`${bgvipsportd.size}`, bgvipsportd.size - 3]]);
         rocketR >>= Math.min(3, Math.abs(rocketR));
         break;
      }
         navigationg += "2";
      if (2.68 >= philippinese) {
         philippinese += guideL.length - iconbellactiveW;
      }
         iconbellactiveW <<= Math.min(4, Math.abs((String.fromCharCode(110,0) == guideL ? guideL.length : bgvipsportd.size)));
      for (let g = 0; g < 1; g++) {
         philippinese -= iconbellactiveW;
      }
      while ((parseInt(`${philippinese}`) - 3) > 3 && (parseInt(`${philippinese}`) - guideL.length) > 3) {
         philippinese *= 3 >> (Math.min(4, Math.abs(bgvipsportd.size)));
         break;
      }
       let fullz = String.fromCharCode(97,97,99,112,115,121,0);
       let modeG = String.fromCharCode(98,105,103,105,110,116,101,103,101,114,0);
      for (let r = 0; r < 3; r++) {
         fullz += `${parseInt(`${philippinese}`)}`;
      }
      for (let c = 0; c < 2; c++) {
          let scrollviewq = true;
         bgvipsportd.set(navigationg, 2);
         scrollviewq = !scrollviewq;
      }
         iconbellactiveW <<= Math.min(1, Math.abs(bgvipsportd.size / (Math.max(4, iconbellactiveW))));
      if (guideL.includes(`${bgvipsportd.size}`)) {
         bgvipsportd.set(`${navigationg}`, navigationg.length ^ 2);
      }
      let actionsH = 5731212 <= fullz.length;
      do {
         fullz += `${modeG.length & 3}`;
         if (actionsH) {
            break;
         }
      } while (actionsH && ((fullz.length | bgvipsportd.size) == 4 && 1 == (4 | bgvipsportd.size)));
      calendaro += `${calendaro.length / (Math.max(2, 6))}`;
      if (libreanimatedw) {
         break;
      }
   } while (libreanimatedw && ((memberR / (Math.max(6, calendaro.length))) >= 1));
      bggradientQ += moduleg;
    

   if (penaltygoalS.includes(`${filedk.length}`)) {
       let iconarrowrightwhiteX = String.fromCharCode(113,117,111,116,101,115,0);
       let renewp = String.fromCharCode(116,114,117,110,0);
       let phoneO = String.fromCharCode(117,95,57,53,95,105,100,99,116,120,100,99,0);
      for (let q = 0; q < 3; q++) {
         iconarrowrightwhiteX += "3";
      }
       let qaagN = 5.0;
       let predictione = 1.0;
      while (renewp.startsWith(phoneO)) {
         renewp = `${(String.fromCharCode(88,0) == renewp ? renewp.length : parseInt(`${predictione}`))}`;
         break;
      }
       let dicelogoZ: Map<any, any> = new Map([[String.fromCharCode(100,121,108,105,98,115,0),204], [String.fromCharCode(110,101,103,97,116,101,100,0),378]]);
       let security6: Map<any, any> = new Map([[String.fromCharCode(99,104,97,114,115,101,116,95,118,95,50,57,0),371], [String.fromCharCode(101,120,116,114,101,109,101,0),309]]);
      while ((security6.size + 1) >= 4 && 5 >= (dicelogoZ.size + 1)) {
          let iconarrowrightblackR = 3.0;
         dicelogoZ.set(iconarrowrightwhiteX, (String.fromCharCode(53,0) == iconarrowrightwhiteX ? dicelogoZ.size : iconarrowrightwhiteX.length));
         iconarrowrightblackR += parseFloat(`${parseInt(`${iconarrowrightblackR}`)}`);
         break;
      }
       let small9 = 5.0;
       let iconrightorangeI = 3.0;
         predictione /= Math.max(3, parseFloat(`${security6.size + parseInt(`${small9}`)}`));
      if ((5 / (Math.max(8, phoneO.length))) > 4) {
          let grayB = 5.0;
          let philippinesO: Array<any> = [307, 123];
          let fastV: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,112,105,110,103,110,111,100,101,0),857], [String.fromCharCode(116,101,108,0),877], [String.fromCharCode(102,99,110,116,108,0),729]]);
          let imageactionliveV: Array<any> = [266, 103];
          let optionsH = String.fromCharCode(110,111,110,102,97,116,97,108,0);
         phoneO = `${(String.fromCharCode(52,0) == iconarrowrightwhiteX ? security6.size : iconarrowrightwhiteX.length)}`;
         grayB *= imageactionliveV.length;
         philippinesO.push(2);
         fastV = new Map([[`${fastV.size}`, 2 + imageactionliveV.length]]);
         optionsH = `${parseInt(`${grayB}`) >> (Math.min(Math.abs(3), 2))}`;
      }
      if (Array.from(dicelogoZ.keys()).includes(`${security6.size}`)) {
          let membershipN: Array<any> = [233, 96, 588];
          let static_knT = true;
         dicelogoZ.set(renewp, renewp.length);
         membershipN = [((static_knT ? 3 : 3) & 1)];
         static_knT = ((membershipN.length ^ (static_knT ? 18 : membershipN.length)) == 18);
      }
      penaltygoalS = `${(String.fromCharCode(85,0) == privacyw ? privacyw.length : memberR)}`;
   }
   let flago = calendaro.length >= 8888660;
   do {
      calendaro = `${(String.fromCharCode(90,0) == handlerh ? signinupM.size : handlerh.length)}`;
      if (flago) {
         break;
      }
   } while (((memberR / 2) == 3 && 3 == (memberR / 2)) && flago);
   while ((moduleg * 3) < 1) {
       let sigmobE = String.fromCharCode(100,101,109,117,120,101,114,115,0);
       let floatingd = 2.0;
      for (let t = 0; t < 3; t++) {
         sigmobE += `${parseInt(`${floatingd}`)}`;
      }
      let streamingZ = String.fromCharCode(115,101,54,100,56,0) == sigmobE;
      do {
         sigmobE += `${sigmobE.length - 3}`;
         if (streamingZ) {
            break;
         }
      } while (((sigmobE.length & 3) >= 2) && streamingZ);
      let recommendationI = 8484157.0 >= floatingd;
      do {
         floatingd += 3 ^ parseInt(`${floatingd}`);
         if (recommendationI) {
            break;
         }
      } while (recommendationI && (2 == (3 % (Math.max(8, sigmobE.length))) && 4 == (3 & sigmobE.length)));
          let telegramu = 4;
          let page1 = String.fromCharCode(109,95,54,54,95,115,112,108,105,116,116,101,114,0);
          let toponN = String.fromCharCode(97,115,105,115,0);
         floatingd += sigmobE.length & 2;
         telegramu |= telegramu;
         page1 = "3";
         toponN += `${toponN.length / 3}`;
      let models2 = sigmobE.length <= 5437173;
      do {
          let yellowtoredC = String.fromCharCode(117,112,100,97,116,101,114,0);
         sigmobE += `${parseInt(`${floatingd}`)}`;
         yellowtoredC += `${yellowtoredC.length}`;
         if (models2) {
            break;
         }
      } while (models2 && (2 == (sigmobE.length - parseInt(`${floatingd}`))));
      let downloadingv = floatingd <= 8308160.0;
      do {
         floatingd += (sigmobE == String.fromCharCode(89,0) ? parseInt(`${floatingd}`) : sigmobE.length);
         if (downloadingv) {
            break;
         }
      } while (downloadingv && (3.57 < (floatingd / 2.1)));
      robotoE *= handlerh.length - 3;
      break;
   }
   let refreshR = signinupM.size <= 9454532;
   do {
      signinupM.set(handlerh, (String.fromCharCode(118,0) == handlerh ? calendaro.length : handlerh.length));
      if (refreshR) {
         break;
      }
   } while ((3 <= (moduleg >> (Math.min(Math.abs(signinupM.size), 1)))) && refreshR);
      memberR >>= Math.min(Math.abs(2 >> (Math.min(1, Math.abs(parseInt(`${bggradientQ}`))))), 1);
   if (4.79 >= (1.30 * bggradientQ) || (bggradientQ * 1.30) >= 1.97) {
       let referrerx = false;
       let pressureh: Map<any, any> = new Map([[String.fromCharCode(116,104,111,117,115,97,110,100,115,0),736], [String.fromCharCode(112,111,115,105,116,105,111,110,115,0),744], [String.fromCharCode(118,97,114,121,0),927]]);
      if (pressureh.size == 5) {
         pressureh.set(`${referrerx}`, 3);
      }
      let libavfilterd = 7512186 <= pressureh.size;
      do {
         pressureh = new Map([[`${pressureh.size}`, ((referrerx ? 2 : 4) - 3)]]);
         if (libavfilterd) {
            break;
         }
      } while (libavfilterd && (pressureh.size > 2));
      let inviteJ = referrerx ? !referrerx : referrerx;
      do {
         referrerx = null != pressureh.get(`${referrerx}`);
         if (inviteJ) {
            break;
         }
      } while (((2 + pressureh.size) <= 1) && inviteJ);
      let weiboX = referrerx ? !referrerx : referrerx;
      do {
         referrerx = pressureh.get(`${referrerx}`) != null;
         if (weiboX) {
            break;
         }
      } while ((1 == pressureh.size) && weiboX);
      for (let a = 0; a < 1; a++) {
         referrerx = (((referrerx ? 28 : pressureh.size) >> (Math.min(Math.abs(pressureh.size), 3))) >= 28);
      }
          let footballfield7: Map<any, any> = new Map([[String.fromCharCode(98,114,111,97,100,99,97,115,116,101,114,0),false ], [String.fromCharCode(101,109,117,108,97,116,111,114,0),true ], [String.fromCharCode(97,118,117,105,0),true ]]);
         referrerx = (34 == (pressureh.size - (!referrerx ? pressureh.size : 76)));
         footballfield7 = new Map([[`${footballfield7.size}`, 1 % (Math.max(3, footballfield7.size))]]);
      signinupM.set(`${memberR}`, 2);
   }
    dispatch(enableWatchAnytimeAdultMode());
  }, [])

  const handleReject = useCallback(() => {
       let reactnativeultimatelistviewx: Array<any> = [String.fromCharCode(115,101,108,101,99,116,111,114,0), String.fromCharCode(112,115,104,0)];
    let predictionbannershared7 = String.fromCharCode(104,95,54,51,95,99,104,101,99,107,0);
    let moduleu = 1.0;
    let spinnerV = String.fromCharCode(105,115,109,108,0);
    let iconcloseB = 3.0;
    let defaultroombg5 = String.fromCharCode(116,112,99,95,98,95,51,56,0);
    let bodanV = 0.0;
    let spinnerk: Array<any> = [182, 503];
    let const_l0E: Array<any> = [915, 667, 126];
   let libfbjniW = moduleu <= 9345426.0;
   do {
      moduleu -= parseInt(`${bodanV}`);
      if (libfbjniW) {
         break;
      }
   } while ((reactnativeultimatelistviewx.length > 2) && libfbjniW);
   let filll = String.fromCharCode(117,109,106,53,95,117,0) == spinnerV;
   do {
      spinnerV += `${parseInt(`${bodanV}`)}`;
      if (filll) {
         break;
      }
   } while ((predictionbannershared7 == String.fromCharCode(99,0)) && filll);
   for (let e = 0; e < 2; e++) {
      spinnerk = [predictionbannershared7.length];
   }
      defaultroombg5 = `${spinnerk.length}`;
      predictionbannershared7 += `${const_l0E.length}`;
   while (4 <= defaultroombg5.length) {
      defaultroombg5 = `${const_l0E.length}`;
      break;
   }
   for (let u = 0; u < 3; u++) {
      spinnerV = "3";
   }
   let langkeyB = const_l0E.length <= 8771218;
   do {
      const_l0E.push(parseInt(`${moduleu}`));
      if (langkeyB) {
         break;
      }
   } while (langkeyB && (5 < const_l0E.length));
   for (let l = 0; l < 1; l++) {
      iconcloseB += parseInt(`${iconcloseB}`);
   }

    console.debug("rejected 18+");

   while ((1.98 + moduleu) >= 3.95 && (moduleu + 1.98) >= 5.76) {
       let basketballhometeamg = 3.0;
      if (1.16 == (basketballhometeamg * 3.28) || (3.28 * basketballhometeamg) == 1.63) {
         basketballhometeamg *= 3 % (Math.max(parseInt(`${basketballhometeamg}`), 6));
      }
      let whitebellg = basketballhometeamg >= 9067118.0;
      do {
          let register_d5A: Array<any> = [641, 352];
          let redgoal_: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,105,120,101,100,95,48,95,50,56,0),505], [String.fromCharCode(117,114,97,110,100,111,109,0),21]]);
          let launcher4 = String.fromCharCode(114,101,99,118,109,115,103,0);
          let untickp = String.fromCharCode(111,95,57,54,95,102,105,114,115,116,112,97,115,115,0);
          let inactiveq = false;
         basketballhometeamg *= untickp.length;
         register_d5A.push(3);
         redgoal_.set(launcher4, 3 / (Math.max(1, register_d5A.length)));
         launcher4 += `${register_d5A.length / (Math.max(3, 2))}`;
         untickp += `${1 / (Math.max(1, launcher4.length))}`;
         inactiveq = launcher4.length == register_d5A.length;
         if (whitebellg) {
            break;
         }
      } while ((3.27 > (basketballhometeamg * 1.18) || (1.18 + basketballhometeamg) > 5.28) && whitebellg);
          let shrinkc = String.fromCharCode(102,114,97,109,101,102,111,114,109,97,116,0);
         basketballhometeamg -= (String.fromCharCode(121,0) == shrinkc ? parseInt(`${basketballhometeamg}`) : shrinkc.length);
      iconcloseB -= 1 | defaultroombg5.length;
      break;
   }
      predictionbannershared7 = `${parseInt(`${bodanV}`) >> (Math.min(reactnativeultimatelistviewx.length, 5))}`;
      iconcloseB += parseInt(`${iconcloseB}`);
   if (moduleu < 2.22) {
      moduleu += defaultroombg5.length | 2;
   }
   let homeplayerb = spinnerk.length <= 9826877;
   do {
       let leftt: Map<any, any> = new Map([[String.fromCharCode(116,101,115,115,101,108,97,116,111,114,0),880], [String.fromCharCode(99,111,109,112,108,101,116,101,0),409], [String.fromCharCode(118,97,114,105,97,116,105,111,110,0),597]]);
       let iconeyeX: Array<any> = [835, 856];
       let shareblackO = true;
       let appsK = 4;
          let bggradientF = String.fromCharCode(110,97,118,0);
          let watchnowbgP = 5.0;
         shareblackO = (leftt.size + parseInt(`${watchnowbgP}`)) == 27;
         bggradientF = "2";
         watchnowbgP += bggradientF.length;
          let scrollviewa: Array<any> = [String.fromCharCode(112,117,114,112,111,115,101,0), String.fromCharCode(98,108,111,99,107,115,0)];
          let sell8: Array<any> = [String.fromCharCode(116,119,105,108,105,103,104,116,0), String.fromCharCode(114,101,97,109,0), String.fromCharCode(101,114,112,105,99,0)];
          let iconviewer6 = String.fromCharCode(98,105,116,109,97,112,0);
         iconeyeX.push((String.fromCharCode(65,0) == iconviewer6 ? iconviewer6.length : (shareblackO ? 2 : 3)));
         scrollviewa = [scrollviewa.length];
         sell8.push(scrollviewa.length << (Math.min(Math.abs(1), 5)));
         shareblackO = 92 > appsK;
          let sliderV: Map<any, any> = new Map([[String.fromCharCode(109,97,107,101,114,112,109,0),486], [String.fromCharCode(97,108,112,104,97,98,101,116,95,114,95,49,53,0),401]]);
         appsK |= 2;
         sliderV.set(`${sliderV.size}`, 2 >> (Math.min(1, Math.abs(sliderV.size))));
      let backgroundP = shareblackO ? !shareblackO : shareblackO;
      do {
          let assetsr: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,97,108,115,0),String.fromCharCode(98,105,119,101,105,103,104,116,0)], [String.fromCharCode(122,95,52,48,95,99,112,117,117,115,101,100,0),String.fromCharCode(101,95,57,55,95,115,116,114,101,97,109,99,111,112,121,0)], [String.fromCharCode(122,95,52,56,95,101,99,114,101,99,111,118,101,114,0),String.fromCharCode(115,116,114,116,111,107,0)]]);
          let weather7: Array<any> = [String.fromCharCode(99,109,97,112,0), String.fromCharCode(112,114,101,99,105,115,101,0)];
          let wifiroutert = String.fromCharCode(121,95,49,55,95,115,101,110,115,111,114,0);
          let pauseQ = String.fromCharCode(119,104,101,116,104,101,114,0);
         shareblackO = 13 == leftt.size;
         assetsr.set(wifiroutert, (String.fromCharCode(56,0) == wifiroutert ? wifiroutert.length : assetsr.size));
         weather7 = [weather7.length & 2];
         pauseQ = `${2 >> (Math.min(4, weather7.length))}`;
         if (backgroundP) {
            break;
         }
      } while (backgroundP && (shareblackO));
      let reactf = 6464810 <= leftt.size;
      do {
         leftt.set(`${appsK}`, 1);
         if (reactf) {
            break;
         }
      } while (reactf && ((appsK + 1) == 5));
         leftt = new Map([[`${leftt.size}`, (1 + (shareblackO ? 2 : 5))]]);
         iconeyeX.push(appsK / (Math.max(6, iconeyeX.length)));
      for (let k = 0; k < 2; k++) {
          let questu = 5.0;
          let libjsijniprofilerl = String.fromCharCode(114,97,100,105,120,0);
         appsK >>= Math.min(Math.abs(2 << (Math.min(Math.abs(appsK), 3))), 3);
         questu /= Math.max(1, parseFloat(`${1 << (Math.min(1, libjsijniprofilerl.length))}`));
         libjsijniprofilerl = `${libjsijniprofilerl.length}`;
      }
         leftt = new Map([[`${iconeyeX.length}`, 1 / (Math.max(7, iconeyeX.length))]]);
         appsK |= leftt.size;
         appsK &= appsK;
      spinnerk.push(3);
      if (homeplayerb) {
         break;
      }
   } while (homeplayerb && (const_l0E.length < spinnerk.length));
   for (let q = 0; q < 2; q++) {
      const_l0E = [2 & spinnerV.length];
   }
       let homeplayero = 0.0;
       let matchesI: Array<any> = [String.fromCharCode(97,108,108,121,117,118,0), String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,0), String.fromCharCode(97,105,114,105,110,103,0)];
       let classesp = String.fromCharCode(112,99,97,99,104,101,0);
      let forwardp = 7352628 <= matchesI.length;
      do {
          let homeA = 3.0;
          let chartr: Array<any> = [903, 98, 782];
          let refreshS = 2.0;
          let weatherj = String.fromCharCode(97,95,49,54,95,109,101,116,114,105,99,0);
         matchesI.push(2 - weatherj.length);
         homeA *= parseFloat(`${parseInt(`${refreshS}`)}`);
         chartr.push(parseInt(`${homeA}`) & 3);
         refreshS *= parseFloat(`${1 + parseInt(`${refreshS}`)}`);
         weatherj = `${parseInt(`${homeA}`) ^ parseInt(`${refreshS}`)}`;
         if (forwardp) {
            break;
         }
      } while ((!classesp.includes(`${matchesI.length}`)) && forwardp);
          let ewardedr = 1.0;
         matchesI.push(parseInt(`${homeplayero}`) & 1);
         ewardedr -= 1;
          let privatechatbgx = String.fromCharCode(118,105,122,105,101,114,0);
         matchesI.push(classesp.length);
         privatechatbgx += `${1 >> (Math.min(5, privatechatbgx.length))}`;
      while (classesp.includes(`${homeplayero}`)) {
         classesp = `${(classesp == String.fromCharCode(67,0) ? classesp.length : parseInt(`${homeplayero}`))}`;
         break;
      }
          let reactnavigationz: Array<any> = [721, 585, 188];
          let airbnbstar3 = 1;
          let whistleq = String.fromCharCode(112,97,97,100,0);
         classesp = `${reactnavigationz.length}`;
         reactnavigationz.push(whistleq.length * airbnbstar3);
         airbnbstar3 -= airbnbstar3;
         whistleq = `${airbnbstar3 + 1}`;
      if (2 <= classesp.length) {
         classesp += `${1 % (Math.max(3, matchesI.length))}`;
      }
      while (homeplayero == 2.84) {
         homeplayero *= parseFloat(`${parseInt(`${homeplayero}`)}`);
         break;
      }
      while (matchesI.length < parseInt(`${homeplayero}`)) {
         matchesI = [classesp.length];
         break;
      }
         classesp = `${matchesI.length}`;
      bodanV *= parseInt(`${bodanV}`) % 3;
      predictionbannershared7 += `${2 / (Math.max(8, spinnerk.length))}`;
       let firebaseP: Map<any, any> = new Map([[String.fromCharCode(111,110,97,118,99,100,97,116,97,0),613], [String.fromCharCode(121,117,118,112,116,111,121,117,121,0),81], [String.fromCharCode(115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,0),108]]);
         firebaseP = new Map([[`${firebaseP.size}`, firebaseP.size & firebaseP.size]]);
          let videox = String.fromCharCode(120,107,101,101,112,0);
         firebaseP = new Map([[`${firebaseP.size}`, (String.fromCharCode(81,0) == videox ? firebaseP.size : videox.length)]]);
         firebaseP.set(`${firebaseP.size}`, firebaseP.size);
      bodanV /= Math.max(3, 1);
    dispatch(disableAdultMode());

   if (spinnerV.length > 4) {
       let dropdownN = 2.0;
       let debugj = String.fromCharCode(98,97,114,101,0);
       let disconnectedlogoG = String.fromCharCode(104,117,110,103,0);
       let librrcd = String.fromCharCode(112,111,105,110,116,101,114,115,0);
       let librrc0 = String.fromCharCode(97,99,107,117,112,0);
      if (4.0 > (dropdownN / (Math.max(4.72, 4)))) {
          let arrowup1: Map<any, any> = new Map([[String.fromCharCode(112,101,101,114,115,0),String.fromCharCode(99,108,117,115,116,101,114,0)], [String.fromCharCode(102,97,100,101,111,117,116,0),String.fromCharCode(98,111,114,100,101,114,0)], [String.fromCharCode(117,105,100,0),String.fromCharCode(115,99,97,108,101,102,97,99,116,111,114,115,0)]]);
          let usernameR = String.fromCharCode(102,108,105,103,104,116,0);
          let spec7 = true;
         dropdownN += parseFloat(`${parseInt(`${dropdownN}`) * 3}`);
         arrowup1.set(`${usernameR}`, (String.fromCharCode(104,0) == usernameR ? usernameR.length : arrowup1.size));
         spec7 = usernameR.length >= 22 || spec7;
      }
      let tempnodataG = String.fromCharCode(115,108,52,95,99,115,52,0) == disconnectedlogoG;
      do {
         disconnectedlogoG += `${(librrcd == String.fromCharCode(119,0) ? librrcd.length : disconnectedlogoG.length)}`;
         if (tempnodataG) {
            break;
         }
      } while ((4 == librrcd.length && 4 == disconnectedlogoG.length) && tempnodataG);
          let textw: Array<any> = [521, 525];
          let bottom6: Map<any, any> = new Map([[String.fromCharCode(112,105,101,99,101,119,105,115,101,0),580], [String.fromCharCode(115,109,111,111,116,104,0),720], [String.fromCharCode(119,114,111,110,103,0),680]]);
          let filtero = 3.0;
         debugj += `${(String.fromCharCode(83,0) == debugj ? debugj.length : parseInt(`${dropdownN}`))}`;
         textw = [textw.length << (Math.min(4, Math.abs(bottom6.size)))];
         bottom6 = new Map([[`${bottom6.size}`, bottom6.size - 2]]);
         filtero += parseFloat(`${3}`);
          let homew = String.fromCharCode(109,101,115,115,115,97,103,101,0);
          let attributedstringt = true;
          let infop = false;
         dropdownN += parseFloat(`${disconnectedlogoG.length << (Math.min(Math.abs(1), 5))}`);
         homew += `${((infop ? 3 : 5) - homew.length)}`;
         attributedstringt = infop;
      while (disconnectedlogoG.length <= librrcd.length) {
         disconnectedlogoG = `${parseInt(`${dropdownN}`) ^ 1}`;
         break;
      }
       let zoomB = 0.0;
          let scorepopsoundC = String.fromCharCode(112,101,110,97,108,116,121,0);
         dropdownN += parseFloat(`${2}`);
         scorepopsoundC = `${scorepopsoundC.length}`;
         zoomB -= parseFloat(`${3 & parseInt(`${dropdownN}`)}`);
      let yellowtoredl = disconnectedlogoG.length <= 8517553;
      do {
          let launch9 = String.fromCharCode(112,105,110,0);
          let showlessi: Map<any, any> = new Map([[String.fromCharCode(109,100,112,114,0),715], [String.fromCharCode(112,97,115,116,101,108,0),759]]);
          let whiteanimationlivev = 1.0;
          let yellowredcardd = String.fromCharCode(105,100,101,110,116,105,102,105,99,97,116,105,111,110,0);
         disconnectedlogoG = `${launch9.length}`;
         launch9 += "1";
         showlessi = new Map([[`${showlessi.size}`, 2]]);
         whiteanimationlivev /= Math.max(4, parseInt(`${whiteanimationlivev}`));
         yellowredcardd = `${1 >> (Math.min(3, Math.abs(showlessi.size)))}`;
         if (yellowtoredl) {
            break;
         }
      } while (((4 << (Math.min(3, disconnectedlogoG.length))) < 1 || 1.29 < (zoomB * 5.77)) && yellowtoredl);
      for (let m = 0; m < 3; m++) {
          let notificationfillemptyw = String.fromCharCode(117,110,105,99,111,100,101,0);
          let philippinesI = String.fromCharCode(105,109,112,108,105,99,105,116,0);
          let dangerv = 0;
         librrcd += `${disconnectedlogoG.length >> (Math.min(Math.abs(3), 5))}`;
         notificationfillemptyw += `${philippinesI.length}`;
         philippinesI = `${3 + notificationfillemptyw.length}`;
         dangerv -= philippinesI.length;
      }
      let leakchecker_ = String.fromCharCode(54,48,117,54,53,0) == librrc0;
      do {
         librrc0 += `${parseInt(`${zoomB}`) * librrcd.length}`;
         if (leakchecker_) {
            break;
         }
      } while ((librrcd.length > 5) && leakchecker_);
      spinnerV = `${parseInt(`${dropdownN}`) << (Math.min(spinnerk.length, 3))}`;
   }
   let libimagepipelinex = spinnerk.length >= 6370648;
   do {
       let positionfieldq: Array<any> = [137, 341];
         positionfieldq.push(2 + positionfieldq.length);
      if ((positionfieldq.length * 1) <= 5 && (positionfieldq.length * 1) <= 5) {
          let singaporeb: Map<any, any> = new Map([[String.fromCharCode(115,101,99,111,110,100,97,114,121,0),496], [String.fromCharCode(108,112,99,109,0),424]]);
         positionfieldq = [positionfieldq.length];
         singaporeb.set(`${singaporeb.size}`, singaporeb.size);
      }
       let arrowB = 0;
      spinnerk = [spinnerV.length];
      if (libimagepipelinex) {
         break;
      }
   } while (libimagepipelinex && (reactnativeultimatelistviewx.includes(spinnerk.length)));
   if (2 > spinnerV.length) {
       let iconadslinkg = 2;
       let libreanimatedv = String.fromCharCode(113,117,101,115,116,105,111,110,0);
      if ((libreanimatedv.length - iconadslinkg) >= 5 && 5 >= (iconadslinkg - libreanimatedv.length)) {
         libreanimatedv += `${libreanimatedv.length}`;
      }
         libreanimatedv += `${iconadslinkg}`;
      let dialogG = iconadslinkg >= 7254669;
      do {
          let predictiondefaultc = String.fromCharCode(114,101,102,99,111,117,110,116,0);
         iconadslinkg >>= Math.min(2, Math.abs(1));
         predictiondefaultc += `${(predictiondefaultc == String.fromCharCode(86,0) ? predictiondefaultc.length : predictiondefaultc.length)}`;
         if (dialogG) {
            break;
         }
      } while (dialogG && (1 == iconadslinkg));
      while ((5 - iconadslinkg) >= 4 && 5 >= (iconadslinkg - libreanimatedv.length)) {
         iconadslinkg <<= Math.min(Math.abs(iconadslinkg), 1);
         break;
      }
         iconadslinkg /= Math.max(3, libreanimatedv.length);
       let bufferR: Array<any> = [75, 371, 460];
       let twitter_: Array<any> = [String.fromCharCode(100,95,53,51,95,115,117,98,109,101,115,115,97,103,101,0), String.fromCharCode(112,108,97,121,101,114,0)];
      spinnerk = [3 >> (Math.min(2, defaultroombg5.length))];
   }
       let interstitial4 = String.fromCharCode(110,105,115,116,112,0);
       let u_lockX = String.fromCharCode(103,101,110,101,114,105,99,0);
         u_lockX = "3";
          let singley = String.fromCharCode(100,118,98,116,120,116,0);
         u_lockX += "2";
         singley += `${(singley == String.fromCharCode(119,0) ? singley.length : singley.length)}`;
      for (let o = 0; o < 3; o++) {
         u_lockX += `${interstitial4.length / 1}`;
      }
      if (u_lockX == interstitial4) {
         interstitial4 += `${interstitial4.length << (Math.min(4, u_lockX.length))}`;
      }
         interstitial4 += `${u_lockX.length}`;
         u_lockX = "3";
      bodanV /= Math.max(5, interstitial4.length << (Math.min(4, spinnerk.length)));
      spinnerk = [3 << (Math.min(Math.abs(parseInt(`${bodanV}`)), 2))];
      spinnerV = `${parseInt(`${moduleu}`)}`;
      iconcloseB += 1;
       let reddownarrowe = String.fromCharCode(112,114,111,106,101,99,116,101,100,0);
      while (reddownarrowe != String.fromCharCode(102,0)) {
         reddownarrowe = `${(String.fromCharCode(83,0) == reddownarrowe ? reddownarrowe.length : reddownarrowe.length)}`;
         break;
      }
       let leakcheckerY = true;
       let clubK = true;
       let umengp = String.fromCharCode(115,109,112,116,101,98,97,114,115,95,107,95,54,51,0);
      bodanV /= Math.max(3, 3);
       let textD = 2.0;
       let livesharex = 0;
       let iconnointernetT = String.fromCharCode(117,110,114,101,108,105,97,98,108,101,0);
      for (let g = 0; g < 2; g++) {
         livesharex >>= Math.min(4, Math.abs((iconnointernetT == String.fromCharCode(56,0) ? livesharex : iconnointernetT.length)));
      }
      while (textD >= 5.43) {
         iconnointernetT += `${parseInt(`${textD}`) << (Math.min(3, Math.abs(livesharex)))}`;
         break;
      }
         livesharex %= Math.max(2 + iconnointernetT.length, 2);
      for (let t = 0; t < 2; t++) {
         iconnointernetT = "1";
      }
      for (let s = 0; s < 3; s++) {
          let modelsS = String.fromCharCode(109,117,114,109,117,114,0);
          let selectionp = 4.0;
          let disconnectedM = String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,108,121,0);
         livesharex ^= 3;
         modelsS += `${(modelsS == String.fromCharCode(54,0) ? parseInt(`${selectionp}`) : modelsS.length)}`;
         selectionp += parseFloat(`${1}`);
         disconnectedM = `${modelsS.length}`;
      }
         livesharex += iconnointernetT.length;
      let modityw = 5772338 >= livesharex;
      do {
         livesharex <<= Math.min(Math.abs(parseInt(`${textD}`) - livesharex), 1);
         if (modityw) {
            break;
         }
      } while ((livesharex > 3) && modityw);
         livesharex >>= Math.min(2, iconnointernetT.length);
         iconnointernetT = `${livesharex}`;
      defaultroombg5 += "1";
    dispatch(hideAdultModeDisclaimer());
  }, [])

  const handlePressIndicator = useCallback(() => {
       let logouserJ = String.fromCharCode(102,95,54,52,95,115,99,114,101,101,110,115,104,111,116,0);
    let tempnodatagifQ = 3;
    let cornershootc = String.fromCharCode(116,104,114,111,116,116,108,101,0);
    let iconeyeq: Array<any> = [644, 686];
    let orangedownarrowA = 3;
    let wifirouterl = String.fromCharCode(98,95,54,95,114,101,118,97,108,105,100,97,116,105,110,103,0);
    let android2 = 1.0;
    let nativemoduleU: Map<any, any> = new Map([[String.fromCharCode(111,112,117,115,101,110,99,0),true ], [String.fromCharCode(114,103,101,110,0),false ], [String.fromCharCode(108,105,110,101,115,105,122,101,95,55,95,53,52,0),false ]]);
    let vnewsshareM = true;
    let owngoal8 = true;
    let chinasameM: Array<any> = [925, 910];
    let iconsaveimageS = 2.0;
    let imagenomoredatay = true;
   if (!logouserJ.includes(`${vnewsshareM}`)) {
       let phoneshareO = 1;
       let subs2: Array<any> = [String.fromCharCode(105,110,104,105,98,105,116,115,0), String.fromCharCode(114,103,98,110,0), String.fromCharCode(98,108,99,107,0)];
       let iconnewsshare7 = String.fromCharCode(109,111,118,101,112,97,103,101,0);
       let mountingc = String.fromCharCode(102,95,51,55,95,100,111,110,116,0);
       let baiduadsl = 0;
      let desct = subs2.length >= 7652386;
      do {
         subs2 = [subs2.length >> (Math.min(iconnewsshare7.length, 1))];
         if (desct) {
            break;
         }
      } while ((1 > (phoneshareO / (Math.max(3, 3)))) && desct);
      while (5 > (subs2.length << (Math.min(Math.abs(5), 1))) || 2 > (mountingc.length << (Math.min(Math.abs(5), 5)))) {
          let type_e8 = 3.0;
          let bingB = 3.0;
         subs2 = [phoneshareO];
         type_e8 -= parseFloat(`${1 + parseInt(`${bingB}`)}`);
         bingB -= parseInt(`${type_e8}`);
         break;
      }
      let defaultteame = 7065386 <= subs2.length;
      do {
         subs2.push((String.fromCharCode(85,0) == mountingc ? subs2.length : mountingc.length));
         if (defaultteame) {
            break;
         }
      } while ((subs2.includes(baiduadsl)) && defaultteame);
      let bootsplashA = iconnewsshare7.length <= 5230692;
      do {
          let filleda: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,101,110,115,97,116,105,111,110,0),String.fromCharCode(112,108,116,101,0)], [String.fromCharCode(115,100,116,112,0),String.fromCharCode(112,97,103,101,108,105,115,116,0)], [String.fromCharCode(111,118,101,114,105,100,100,101,110,0),String.fromCharCode(109,115,103,115,109,100,101,99,0)]]);
          let libavformato = String.fromCharCode(111,110,101,111,102,0);
          let relatedU: Map<any, any> = new Map([[String.fromCharCode(102,97,114,101,110,100,0),927], [String.fromCharCode(115,104,97,114,101,100,100,111,119,110,108,111,97,100,0),50], [String.fromCharCode(112,105,99,107,108,112,102,0),884]]);
          let bodanr = false;
         iconnewsshare7 += `${(phoneshareO >> (Math.min(4, Math.abs((bodanr ? 2 : 2)))))}`;
         filleda = new Map([[`${filleda.size}`, relatedU.size >> (Math.min(Math.abs(filleda.size), 1))]]);
         libavformato = `${relatedU.size}`;
         bodanr = relatedU.size <= 80;
         if (bootsplashA) {
            break;
         }
      } while ((iconnewsshare7.length <= 2) && bootsplashA);
      let settingso = 6752382 >= iconnewsshare7.length;
      do {
          let bufferU = 0.0;
         iconnewsshare7 = `${mountingc.length + iconnewsshare7.length}`;
         bufferU += parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${bufferU}`)), 1))}`);
         if (settingso) {
            break;
         }
      } while ((!iconnewsshare7.startsWith(`${subs2.length}`)) && settingso);
          let package_fhx = String.fromCharCode(102,101,116,99,104,101,114,115,0);
         baiduadsl &= package_fhx.length;
      if (4 < mountingc.length && iconnewsshare7.length < 4) {
          let footballfield8 = false;
         iconnewsshare7 += `${subs2.length}`;
         footballfield8 = footballfield8 || footballfield8;
      }
       let plusr = 4.0;
       let policyr = 4.0;
         iconnewsshare7 = `${phoneshareO / (Math.max(6, baiduadsl))}`;
          let nnewsshareP = String.fromCharCode(118,97,114,105,97,110,99,101,95,100,95,49,55,0);
         mountingc = `${mountingc.length * 2}`;
         nnewsshareP += `${nnewsshareP.length}`;
         policyr += (iconnewsshare7 == String.fromCharCode(52,0) ? parseInt(`${plusr}`) : iconnewsshare7.length);
      if (iconnewsshare7.length > 3) {
          let libsgcoreM = true;
          let iconsharea = true;
         policyr += baiduadsl;
         libsgcoreM = iconsharea && libsgcoreM;
         iconsharea = (!libsgcoreM ? iconsharea : !libsgcoreM);
      }
         phoneshareO |= 3;
      while (2.76 <= (policyr + 1.93) && (policyr + plusr) <= 1.93) {
          let bgvipxvody: Array<any> = [297, 283, 683];
          let mbbannerW = 3.0;
          let commono = String.fromCharCode(116,104,105,99,107,0);
          let bodanq = 1.0;
          let statisticsO = 4.0;
         policyr /= Math.max(1, 2 | commono.length);
         bgvipxvody = [1];
         mbbannerW -= parseFloat(`${parseInt(`${bodanq}`) << (Math.min(1, Math.abs(1)))}`);
         commono = `${parseInt(`${statisticsO}`) * bgvipxvody.length}`;
         bodanq -= parseFloat(`${2 & bgvipxvody.length}`);
         statisticsO /= Math.max(1, parseFloat(`${parseInt(`${bodanq}`)}`));
         break;
      }
      for (let v = 0; v < 2; v++) {
         policyr /= Math.max(4, parseInt(`${plusr}`));
      }
      logouserJ += `${logouserJ.length | 2}`;
   }
   for (let x = 0; x < 3; x++) {
      android2 -= parseFloat(`${nativemoduleU.size | 1}`);
   }
   if ((iconeyeq.length + 2) > 2) {
      wifirouterl += `${tempnodatagifQ ^ nativemoduleU.size}`;
   }
      nativemoduleU = new Map([[`${tempnodatagifQ}`, 2 * cornershootc.length]]);
   let libtanm = android2 <= 6418195.0;
   do {
      android2 -= parseFloat(`${parseInt(`${android2}`) & 3}`);
      if (libtanm) {
         break;
      }
   } while (libtanm && (wifirouterl.startsWith(`${android2}`)));
       let yellowredcardg = true;
       let controls8 = String.fromCharCode(114,101,99,101,105,118,105,110,103,0);
       let weibo3: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,97,108,105,122,101,0),45], [String.fromCharCode(115,117,98,115,101,108,101,99,116,0),267], [String.fromCharCode(115,116,114,105,99,116,0),486]]);
      if (3 <= (5 + weibo3.size) || yellowredcardg) {
         yellowredcardg = !yellowredcardg;
      }
      while (1 < controls8.length) {
         weibo3.set(controls8, controls8.length | 3);
         break;
      }
         weibo3 = new Map([[`${weibo3.size}`, controls8.length & 1]]);
          let giflivestreamingo: Array<any> = [800, 550];
          let profileactivee = false;
         controls8 += "2";
         giflivestreamingo = [giflivestreamingo.length + giflivestreamingo.length];
         profileactivee = 79 < giflivestreamingo.length;
         controls8 = `${weibo3.size}`;
         controls8 += "1";
      while (controls8.length <= 2) {
         controls8 += `${3 % (Math.max(2, weibo3.size))}`;
         break;
      }
          let textlayoutmanager7 = 0.0;
         yellowredcardg = !yellowredcardg && controls8.length == 59;
         textlayoutmanager7 *= parseFloat(`${1}`);
       let bridgeJ = String.fromCharCode(114,116,112,100,101,99,0);
      wifirouterl = `${((vnewsshareM ? 4 : 5) + 2)}`;
   for (let x = 0; x < 1; x++) {
      tempnodatagifQ &= 1 * wifirouterl.length;
   }
   for (let p = 0; p < 3; p++) {
      iconeyeq = [iconeyeq.length & 2];
   }
   for (let w = 0; w < 1; w++) {
      nativemoduleU = new Map([[`${nativemoduleU.size}`, orangedownarrowA]]);
   }
   for (let f = 0; f < 1; f++) {
      nativemoduleU.set(wifirouterl, wifirouterl.length);
   }
   while (Array.from(nativemoduleU.values()).includes(iconeyeq.length)) {
      iconeyeq.push(cornershootc.length);
      break;
   }
      nativemoduleU.set(`${owngoal8}`, 1);
      owngoal8 = 79 <= iconeyeq.length && 49.93 <= android2;
      owngoal8 = orangedownarrowA >= logouserJ.length;
       let wind8 = 3.0;
          let libfbjni6 = 2.0;
          let styleso = String.fromCharCode(112,114,101,100,105,99,116,105,111,110,115,0);
         wind8 -= (parseFloat(`${styleso == String.fromCharCode(74,0) ? parseInt(`${libfbjni6}`) : styleso.length}`));
         wind8 -= parseFloat(`${parseInt(`${wind8}`)}`);
      while (4.4 == (wind8 - 4.54) || (wind8 - 4.54) == 2.48) {
         wind8 += parseFloat(`${parseInt(`${wind8}`)}`);
         break;
      }
      cornershootc += "1";
      tempnodatagifQ <<= Math.min(1, parseInt(`${Math.abs(((vnewsshareM ? 3 : 4) << (Math.min(Math.abs(orangedownarrowA), 2))))}`));
      android2 *= parseFloat(`${1}`);
   while (Array.from(nativemoduleU.values()).includes(chinasameM.length)) {
      nativemoduleU = new Map([[`${iconsaveimageS}`, 3 + parseInt(`${iconsaveimageS}`)]]);
      break;
   }
   for (let r = 0; r < 2; r++) {
       let bufferl = String.fromCharCode(102,95,51,55,95,97,118,99,111,100,101,99,114,101,115,0);
       let orangedownarrowS = 4.0;
       let handlerH = 0.0;
       let unselectedZ: Array<any> = [697, 473];
       let customw = String.fromCharCode(106,100,109,97,105,110,99,116,0);
      for (let w = 0; w < 3; w++) {
         orangedownarrowS -= parseFloat(`${customw.length % 1}`);
      }
      if ((handlerH - 5.97) == 2.20 && 5.97 == (handlerH - orangedownarrowS)) {
         orangedownarrowS *= parseFloat(`${3 / (Math.max(6, unselectedZ.length))}`);
      }
      if ((parseInt(`${handlerH}`) * unselectedZ.length) == 2) {
         unselectedZ = [3];
      }
      let crossE = 6433137.0 <= handlerH;
      do {
         handlerH *= (bufferl == String.fromCharCode(114,0) ? bufferl.length : parseInt(`${handlerH}`));
         if (crossE) {
            break;
         }
      } while (((orangedownarrowS / (Math.max(7, handlerH))) >= 4.98) && crossE);
      while (!customw.includes(`${orangedownarrowS}`)) {
         customw = `${parseInt(`${handlerH}`)}`;
         break;
      }
         orangedownarrowS -= parseFloat(`${1}`);
      for (let r = 0; r < 2; r++) {
         orangedownarrowS /= Math.max(4, parseFloat(`${3 << (Math.min(1, unselectedZ.length))}`));
      }
       let twitterP = String.fromCharCode(117,115,101,114,99,116,120,95,105,95,54,54,0);
       let downloaded1 = String.fromCharCode(114,101,115,111,117,114,99,101,115,0);
       let privilegew = String.fromCharCode(111,95,51,95,99,97,110,111,110,0);
       let loginsuccessi = String.fromCharCode(108,101,118,105,110,115,111,110,0);
         downloaded1 += `${unselectedZ.length}`;
         bufferl += `${bufferl.length}`;
          let vietnamY: Map<any, any> = new Map([[String.fromCharCode(100,101,115,114,111,121,0),841], [String.fromCharCode(114,97,115,116,101,114,0),995]]);
          let scoreP = String.fromCharCode(114,97,110,115,105,116,105,111,110,0);
         downloaded1 += "3";
         vietnamY = new Map([[`${vietnamY.size}`, scoreP.length]]);
         scoreP = `${(String.fromCharCode(109,0) == scoreP ? scoreP.length : vietnamY.size)}`;
      while (4 <= (5 << (Math.min(2, unselectedZ.length))) && 1.62 <= (2.44 + handlerH)) {
         unselectedZ.push(1 % (Math.max(10, parseInt(`${handlerH}`))));
         break;
      }
         orangedownarrowS /= Math.max(parseFloat(`${bufferl.length % 3}`), 5);
      if (customw.length >= downloaded1.length) {
         customw += `${downloaded1.length << (Math.min(5, Math.abs(parseInt(`${handlerH}`))))}`;
      }
      chinasameM = [parseInt(`${android2}`)];
   }
      tempnodatagifQ *= orangedownarrowA;
   let libtanR = imagenomoredatay ? !imagenomoredatay : imagenomoredatay;
   do {
      imagenomoredatay = vnewsshareM;
      if (libtanR) {
         break;
      }
   } while (libtanR && ((5 | nativemoduleU.size) < 1));
   let iconorientationh = vnewsshareM ? !vnewsshareM : vnewsshareM;
   do {
       let sansi = 0.0;
       let bootsplashQ = false;
       let signinupK = 5;
       let googlej = 5;
      while (4 >= (googlej ^ 1) && (googlej ^ signinupK) >= 1) {
         googlej |= 1;
         break;
      }
          let signinupt = String.fromCharCode(115,116,121,112,0);
          let liveshareU = 2.0;
          let iconorientationY = String.fromCharCode(112,107,99,115,0);
         bootsplashQ = liveshareU == 5.13;
         signinupt += `${2 * signinupt.length}`;
         liveshareU *= parseFloat(`${iconorientationY.length | signinupt.length}`);
         iconorientationY += `${iconorientationY.length ^ 2}`;
      let stationR = 6683164.0 <= sansi;
      do {
          let iconarrowright3: Array<any> = [244, 20];
          let coreh = String.fromCharCode(116,95,51,56,95,114,101,115,111,108,117,116,105,111,110,115,0);
         sansi += parseFloat(`${iconarrowright3.length}`);
         iconarrowright3.push(coreh.length / (Math.max(coreh.length, 1)));
         if (stationR) {
            break;
         }
      } while ((bootsplashQ) && stationR);
         googlej += parseInt(`${sansi}`);
      let runtimen = 5328956 <= signinupK;
      do {
         signinupK >>= Math.min(Math.abs(parseInt(`${sansi}`)), 3);
         if (runtimen) {
            break;
         }
      } while (runtimen && ((3 & signinupK) > 2 && 3 > signinupK));
      vnewsshareM = !bootsplashQ;
      if (iconorientationh) {
         break;
      }
   } while (iconorientationh && (nativemoduleU.size < 2));

    dispatch(showAdultVipPrivilegeMiniVideoAction())
  }, [])

  const handleOnClose = useCallback(() => {
       let accepted4 = 2;
    let controlsN = true;
    let googleV = String.fromCharCode(105,115,115,0);
    let source6 = String.fromCharCode(102,108,101,120,105,98,108,101,0);
    let holderK = 1.0;
    let o_positionC = 4;
    let x_view0 = String.fromCharCode(113,117,97,110,116,105,108,101,0);
    let iconsaveimageY = 5.0;
    let liveE = String.fromCharCode(119,105,110,116,104,114,101,97,100,0);
    let componentB = String.fromCharCode(119,101,105,103,104,116,112,0);
    let upgradeY = String.fromCharCode(109,97,100,100,0);
    let basketballicona = 2.0;
   let iconpointscoref = iconsaveimageY <= 7676211.0;
   do {
      iconsaveimageY += (String.fromCharCode(49,0) == liveE ? liveE.length : source6.length);
      if (iconpointscoref) {
         break;
      }
   } while (iconpointscoref && ((source6.length / 4) < 4 || (source6.length + iconsaveimageY) < 3.93));
   for (let g = 0; g < 2; g++) {
      holderK *= (parseFloat(`${googleV == String.fromCharCode(53,0) ? parseInt(`${holderK}`) : googleV.length}`));
   }
   for (let j = 0; j < 3; j++) {
      o_positionC >>= Math.min(Math.abs(1 * source6.length), 3);
   }
       let share3 = 0.0;
       let filterP: Array<any> = [872, 220, 983];
          let modalg = 3;
          let placementG = 0.0;
          let subinv = String.fromCharCode(115,116,114,101,116,99,104,97,98,108,101,0);
         share3 *= parseInt(`${placementG}`) << (Math.min(2, Math.abs(parseInt(`${share3}`))));
         modalg <<= Math.min(2, Math.abs(modalg % (Math.max(2, 4))));
         placementG -= 1;
         subinv += `${modalg}`;
       let vietnaml: Map<any, any> = new Map([[String.fromCharCode(115,105,112,114,100,97,116,97,0),435], [String.fromCharCode(110,111,116,105,102,121,105,110,103,0),185]]);
      if (4 >= (5 & vietnaml.size) || 2 >= (5 & filterP.length)) {
         filterP = [filterP.length];
      }
          let stari = false;
          let guideB = 4.0;
          let long_49g = String.fromCharCode(115,111,114,116,0);
         vietnaml.set(`${guideB}`, 3 ^ parseInt(`${guideB}`));
         stari = (((stari ? long_49g.length : 72) << (Math.min(long_49g.length, 5))) == 72);
      if (vietnaml.get(`${share3}`) == null) {
          let fileN = 5.0;
          let sanse = String.fromCharCode(98,105,110,104,101,120,0);
          let defaultroombgl = String.fromCharCode(122,95,57,55,95,118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,0);
         vietnaml = new Map([[defaultroombgl, sanse.length + 1]]);
         fileN /= Math.max(1, parseFloat(`${parseInt(`${fileN}`)}`));
         sanse += `${parseInt(`${fileN}`)}`;
      }
          let librrcn = String.fromCharCode(99,114,97,115,104,101,100,95,101,95,56,0);
          let hiadN = String.fromCharCode(97,114,99,104,0);
          let mbnativej: Map<any, any> = new Map([[String.fromCharCode(116,105,110,116,101,100,0),732], [String.fromCharCode(99,100,101,114,114,111,114,0),661], [String.fromCharCode(101,110,99,111,100,101,105,110,116,114,97,0),42]]);
         share3 *= (librrcn == String.fromCharCode(53,0) ? librrcn.length : mbnativej.size);
         hiadN += "2";
      x_view0 += `${source6.length ^ 1}`;
       let malaysia0 = 0;
      while (5 <= (malaysia0 - 5)) {
         malaysia0 += malaysia0 - 2;
         break;
      }
          let iconpipexpandE = 1.0;
          let emptyT: Array<any> = [String.fromCharCode(102,116,118,110,115,0), String.fromCharCode(115,105,109,117,108,97,116,101,0)];
          let icon2 = 4;
         malaysia0 ^= emptyT.length;
         iconpipexpandE /= Math.max(5, parseFloat(`${3 / (Math.max(7, parseInt(`${iconpipexpandE}`)))}`));
         emptyT = [parseInt(`${iconpipexpandE}`)];
         icon2 *= icon2;
         malaysia0 += malaysia0 & malaysia0;
      x_view0 += `${accepted4 * parseInt(`${holderK}`)}`;
       let disconnectedlogod: Map<any, any> = new Map([[String.fromCharCode(104,97,108,100,99,108,117,116,115,114,99,95,50,95,57,52,0),307], [String.fromCharCode(115,117,98,99,101,108,0),107]]);
      let iconY = 5484628 <= disconnectedlogod.size;
      do {
         disconnectedlogod.set(`${disconnectedlogod.size}`, 3);
         if (iconY) {
            break;
         }
      } while ((disconnectedlogod.size <= disconnectedlogod.size) && iconY);
      if (1 < (4 - disconnectedlogod.size) && 1 < (4 - disconnectedlogod.size)) {
          let hejig = String.fromCharCode(109,98,115,116,114,105,110,103,0);
          let penaltyshootY = 0.0;
          let stepk: Map<any, any> = new Map([[String.fromCharCode(114,103,98,95,108,95,52,50,0),593], [String.fromCharCode(114,116,99,100,0),944]]);
          let switch_rqg = 4.0;
          let pangleN = 3;
         disconnectedlogod.set(`${switch_rqg}`, parseInt(`${switch_rqg}`) + stepk.size);
         hejig = `${pangleN % (Math.max(3, 9))}`;
         penaltyshootY += parseFloat(`${hejig.length}`);
         stepk = new Map([[hejig, parseInt(`${penaltyshootY}`)]]);
         pangleN -= 1;
      }
      let yellowcirclebgQ = disconnectedlogod.size <= 7008534;
      do {
         disconnectedlogod.set(`${disconnectedlogod.size}`, disconnectedlogod.size);
         if (yellowcirclebgQ) {
            break;
         }
      } while (yellowcirclebgQ && (5 >= (disconnectedlogod.size << (Math.min(Math.abs(5), 1)))));
      iconsaveimageY *= o_positionC;
   if (holderK > o_positionC) {
      o_positionC <<= Math.min(1, Math.abs(3 >> (Math.min(1, x_view0.length))));
   }
   let phoneb = String.fromCharCode(101,108,51,116,121,50,104,0) == x_view0;
   do {
      x_view0 = `${1 & googleV.length}`;
      if (phoneb) {
         break;
      }
   } while (phoneb && (accepted4 == 5));
      liveE = `${googleV.length}`;
      iconsaveimageY += 2 << (Math.min(4, Math.abs(parseInt(`${holderK}`))));
      controlsN = googleV.length > 24;
       let notificationfilledZ = 1.0;
       let yellows: Array<any> = [String.fromCharCode(103,114,97,112,104,105,99,0), String.fromCharCode(115,99,111,112,101,115,0), String.fromCharCode(115,116,97,108,108,0)];
       let refreshC = String.fromCharCode(109,101,100,105,97,0);
      let scorepopsound2 = 5494789 >= yellows.length;
      do {
          let notificationv = String.fromCharCode(115,109,115,0);
         yellows = [(refreshC == String.fromCharCode(52,0) ? yellows.length : refreshC.length)];
         notificationv += `${notificationv.length << (Math.min(Math.abs(2), 3))}`;
         if (scorepopsound2) {
            break;
         }
      } while (scorepopsound2 && (2.7 <= (4.34 * notificationfilledZ) && (2 | yellows.length) <= 4));
      while ((3.16 - notificationfilledZ) <= 1.95 || 1 <= (yellows.length / (Math.max(4, 2)))) {
         notificationfilledZ -= 1;
         break;
      }
      if (!yellows.includes(notificationfilledZ)) {
         yellows.push(2);
      }
         yellows = [refreshC.length ^ parseInt(`${notificationfilledZ}`)];
       let spinnera = String.fromCharCode(108,122,109,97,0);
       let nativej = String.fromCharCode(112,114,111,103,114,101,115,105,118,101,0);
         nativej = `${parseInt(`${notificationfilledZ}`) * nativej.length}`;
          let become0 = 0;
          let reddownarrowU = String.fromCharCode(119,105,102,105,0);
          let membership2 = 3.0;
         spinnera += `${spinnera.length >> (Math.min(3, Math.abs(parseInt(`${notificationfilledZ}`))))}`;
         become0 >>= Math.min(Math.abs(2), 3);
         reddownarrowU = `${reddownarrowU.length}`;
         membership2 /= Math.max(parseInt(`${membership2}`), 1);
         notificationfilledZ *= spinnera.length ^ yellows.length;
         refreshC += `${refreshC.length}`;
      accepted4 %= Math.max(3, googleV.length);
      o_positionC -= liveE.length;
       let delegate_7i0 = String.fromCharCode(100,105,118,109,111,100,0);
          let unselected0 = 1;
          let bellL: Map<any, any> = new Map([[String.fromCharCode(118,101,114,121,0),false ], [String.fromCharCode(102,111,114,99,105,110,103,0),false ], [String.fromCharCode(104,105,115,116,111,114,105,101,115,0),true ]]);
          let codegenC = String.fromCharCode(112,105,99,109,101,109,115,101,116,0);
         delegate_7i0 = `${(delegate_7i0 == String.fromCharCode(97,0) ? codegenC.length : delegate_7i0.length)}`;
         unselected0 |= unselected0;
         bellL = new Map([[`${bellL.size}`, unselected0]]);
         codegenC += `${unselected0}`;
      while (!delegate_7i0.endsWith(`${delegate_7i0.length}`)) {
         delegate_7i0 += `${(delegate_7i0 == String.fromCharCode(110,0) ? delegate_7i0.length : delegate_7i0.length)}`;
         break;
      }
      for (let l = 0; l < 3; l++) {
         delegate_7i0 += `${delegate_7i0.length}`;
      }
      controlsN = !controlsN;

    dispatch(hideAdultVipPrivilegeMiniVideoAction())

   let backwardV = iconsaveimageY <= 9486805.0;
   do {
      iconsaveimageY /= Math.max(3, (accepted4 * (controlsN ? 1 : 1)));
      if (backwardV) {
         break;
      }
   } while ((4.90 < (iconsaveimageY * 5.9) || 3 < (liveE.length << (Math.min(Math.abs(1), 4)))) && backwardV);
   for (let l = 0; l < 3; l++) {
      controlsN = x_view0 == String.fromCharCode(51,0);
   }
   let disconnectedR = controlsN ? !controlsN : controlsN;
   do {
      controlsN = o_positionC >= 35 || holderK >= 99.71;
      if (disconnectedR) {
         break;
      }
   } while ((googleV.startsWith(`${controlsN}`)) && disconnectedR);
   if ((iconsaveimageY + 4.81) == 2.34) {
      iconsaveimageY /= Math.max(3, 2);
   }
      accepted4 <<= Math.min(Math.abs(parseInt(`${holderK}`) * accepted4), 1);
   while ((2 ^ source6.length) > 3 && (parseInt(`${holderK}`) * source6.length) > 2) {
      source6 = `${parseInt(`${holderK}`) & 1}`;
      break;
   }
   while (3 > (accepted4 % (Math.max(2, 1))) && (accepted4 % (Math.max(componentB.length, 2))) > 2) {
       let indicator4 = true;
       let whiteZ = String.fromCharCode(115,117,98,116,101,120,116,0);
       let assetsV = 2.0;
       let dialogs = String.fromCharCode(101,115,112,111,110,100,101,114,0);
       let megaphoneT = true;
         assetsV -= dialogs.length - parseInt(`${assetsV}`);
       let shootnogoall: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,112,108,105,101,100,0),306], [String.fromCharCode(97,115,105,110,107,0),25], [String.fromCharCode(116,101,109,112,108,97,116,101,100,0),18]]);
       let giftbutton6: Map<any, any> = new Map([[String.fromCharCode(112,95,54,53,95,109,111,110,103,111,0),String.fromCharCode(115,121,109,98,111,108,105,99,97,116,105,111,110,0)], [String.fromCharCode(112,111,108,121,103,111,110,0),String.fromCharCode(116,114,97,110,115,102,101,114,114,105,110,103,0)]]);
      if (Array.from(giftbutton6.keys()).includes(`${assetsV}`)) {
         assetsV += dialogs.length;
      }
      while (!dialogs.includes(`${shootnogoall.size}`)) {
         dialogs = `${whiteZ.length * 1}`;
         break;
      }
      if (!whiteZ.includes(`${indicator4}`)) {
          let listn = false;
          let iconusers: Map<any, any> = new Map([[String.fromCharCode(101,105,103,104,116,115,118,120,0),908], [String.fromCharCode(117,110,112,97,99,107,104,105,0),700], [String.fromCharCode(119,114,105,116,101,97,108,105,103,110,0),449]]);
         whiteZ += `${giftbutton6.size << (Math.min(5, Math.abs(shootnogoall.size)))}`;
         listn = !listn;
         iconusers = new Map([[`${iconusers.size}`, (iconusers.size / (Math.max(3, (listn ? 5 : 1))))]]);
      }
          let whiteN = 4.0;
          let livee: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,111,114,116,105,111,110,0),408], [String.fromCharCode(112,95,54,54,95,112,117,98,108,105,115,104,101,100,0),304]]);
         shootnogoall.set(`${megaphoneT}`, 2 << (Math.min(4, Math.abs(shootnogoall.size))));
         whiteN /= Math.max(livee.size >> (Math.min(Math.abs(1), 2)), 3);
         livee.set(`${whiteN}`, livee.size << (Math.min(Math.abs(2), 5)));
         giftbutton6.set(`${assetsV}`, parseInt(`${assetsV}`) / 2);
      while (megaphoneT && (assetsV + 1.22) <= 3.62) {
         megaphoneT = giftbutton6.size < 38 || !indicator4;
         break;
      }
      if ((4 & shootnogoall.size) < 1) {
          let private_qH = 1.0;
          let codegend = String.fromCharCode(99,114,105,116,105,99,97,108,115,101,99,116,105,111,110,0);
          let libavcodecD = String.fromCharCode(98,117,116,111,110,0);
          let backwhitec = 5.0;
         shootnogoall = new Map([[`${assetsV}`, ((indicator4 ? 4 : 3) - parseInt(`${assetsV}`))]]);
         private_qH -= libavcodecD.length - codegend.length;
         codegend = `${parseInt(`${backwhitec}`) - parseInt(`${private_qH}`)}`;
         libavcodecD = `${parseInt(`${private_qH}`) - 1}`;
         backwhitec /= Math.max(4, parseFloat(`${parseInt(`${private_qH}`)}`));
      }
      for (let t = 0; t < 3; t++) {
          let mbnativeadvancedw = String.fromCharCode(114,101,110,100,101,114,101,114,115,0);
          let emptym = String.fromCharCode(110,100,101,102,0);
          let libturbomodulejsijnif = 0;
          let package_18: Array<any> = [191, 796];
          let detailsg = String.fromCharCode(99,97,112,116,117,114,101,112,97,114,109,115,0);
         dialogs = "2";
         mbnativeadvancedw = "3";
         emptym = `${emptym.length}`;
         libturbomodulejsijnif *= (detailsg == String.fromCharCode(90,0) ? detailsg.length : libturbomodulejsijnif);
         package_18.push((mbnativeadvancedw == String.fromCharCode(86,0) ? mbnativeadvancedw.length : emptym.length));
      }
         whiteZ += `${shootnogoall.size - 2}`;
      if (giftbutton6.size >= assetsV) {
         assetsV += dialogs.length;
      }
          let orangedownarrowX = 2.0;
          let sellu = String.fromCharCode(109,97,103,105,99,121,117,118,0);
         indicator4 = dialogs.endsWith(`${megaphoneT}`);
         orangedownarrowX *= parseInt(`${orangedownarrowX}`);
         sellu = "2";
         indicator4 = giftbutton6.get(`${indicator4}`) != null;
         whiteZ += "3";
      componentB += `${2 >> (Math.min(2, googleV.length))}`;
      break;
   }
   for (let f = 0; f < 2; f++) {
       let eacts = 5.0;
       let phone7 = 0;
       let minit_mR = String.fromCharCode(115,95,53,52,95,102,117,110,99,115,0);
       let taiwanX = 3.0;
      if ((5 >> (Math.min(2, Math.abs(phone7)))) == 4) {
         eacts /= Math.max(phone7 * minit_mR.length, 2);
      }
      for (let s = 0; s < 2; s++) {
         taiwanX /= Math.max(parseInt(`${eacts}`) / (Math.max(parseInt(`${taiwanX}`), 6)), 5);
      }
      for (let q = 0; q < 1; q++) {
         phone7 |= (String.fromCharCode(55,0) == minit_mR ? minit_mR.length : phone7);
      }
      let sidel = phone7 >= 5211198;
      do {
         phone7 |= 1;
         if (sidel) {
            break;
         }
      } while ((2 == (phone7 >> (Math.min(Math.abs(5), 5)))) && sidel);
         eacts /= Math.max(parseInt(`${taiwanX}`) - 2, 1);
      for (let r = 0; r < 1; r++) {
         phone7 %= Math.max(parseInt(`${eacts}`) | phone7, 4);
      }
         phone7 %= Math.max(1, parseInt(`${taiwanX}`) >> (Math.min(Math.abs(2), 4)));
      let frame_whC = minit_mR.length >= 6795785;
      do {
         minit_mR = `${(minit_mR == String.fromCharCode(120,0) ? phone7 : minit_mR.length)}`;
         if (frame_whC) {
            break;
         }
      } while ((2.17 == (1.54 + eacts)) && frame_whC);
      if ((phone7 ^ minit_mR.length) >= 3 && 1 >= (phone7 ^ 3)) {
          let whatsapph = String.fromCharCode(97,109,114,119,98,100,101,99,0);
          let pausez: Map<any, any> = new Map([[String.fromCharCode(101,115,115,101,110,99,101,0),246], [String.fromCharCode(117,108,97,119,0),597], [String.fromCharCode(115,112,101,108,108,0),323]]);
          let matchinactiveF = 0;
          let belld = 2;
          let animations1 = String.fromCharCode(103,101,111,99,111,100,105,110,103,0);
         phone7 &= minit_mR.length;
         whatsapph += `${whatsapph.length}`;
         pausez.set(whatsapph, pausez.size);
         matchinactiveF <<= Math.min(1, Math.abs(belld / 1));
         belld %= Math.max(pausez.size + animations1.length, 4);
         animations1 = `${2 | pausez.size}`;
      }
      if ((parseInt(`${taiwanX}`) - minit_mR.length) > 2 && (2 & minit_mR.length) > 5) {
          let sendU = String.fromCharCode(99,108,105,112,116,101,115,116,0);
          let benefitB: Array<any> = [String.fromCharCode(114,97,105,115,101,100,0), String.fromCharCode(98,105,100,105,114,101,99,116,105,111,110,97,108,0), String.fromCharCode(101,110,116,105,116,105,116,121,0)];
         minit_mR += "1";
         sendU = `${benefitB.length + 3}`;
         benefitB = [benefitB.length * sendU.length];
      }
       let applem: Array<any> = [751, 459, 741];
       let adultg: Array<any> = [641, 762];
       let feedbacka: Array<any> = [215, 773];
       let dicelogod: Array<any> = [852, 839];
      controlsN = (80 >= ((controlsN ? 80 : x_view0.length) / (Math.max(1, x_view0.length))));
   }
   while (o_positionC > 2) {
      controlsN = (liveE.length | componentB.length) <= 79;
      break;
   }
   if (googleV != String.fromCharCode(80,0)) {
      componentB = `${parseInt(`${iconsaveimageY}`)}`;
   }
       let arrowM = 4.0;
       let connection6 = 3.0;
       let basketballiconD = 1.0;
         basketballiconD /= Math.max(4, 3);
      for (let e = 0; e < 2; e++) {
         arrowM -= parseFloat(`${2}`);
      }
      while (connection6 >= arrowM) {
         arrowM *= parseFloat(`${parseInt(`${arrowM}`) % (Math.max(5, parseInt(`${basketballiconD}`)))}`);
         break;
      }
         connection6 += parseInt(`${arrowM}`) * parseInt(`${connection6}`);
       let watchX = String.fromCharCode(100,101,106,117,100,100,101,114,0);
       let orangedownarrow5 = String.fromCharCode(112,97,105,114,0);
       let subss = 1;
       let targetP = 2;
      if (5.54 >= (basketballiconD + 1.56) || 1.56 >= (basketballiconD + subss)) {
          let commentS: Map<any, any> = new Map([[String.fromCharCode(114,101,102,108,101,99,116,105,111,110,0),false ], [String.fromCharCode(110,117,108,108,115,114,99,0),false ]]);
          let fcdaebecbcbafcdfceaaeccfeacdbE = String.fromCharCode(105,118,102,101,110,99,0);
          let defaultlogoG = 0;
          let logini = 0;
          let cornert = 2.0;
         subss <<= Math.min(Math.abs(1), 2);
         commentS = new Map([[`${commentS.size}`, 3]]);
         fcdaebecbcbafcdfceaaeccfeacdbE += `${logini}`;
         defaultlogoG -= logini;
         cornert *= (parseFloat(`${String.fromCharCode(54,0) == fcdaebecbcbafcdfceaaeccfeacdbE ? defaultlogoG : fcdaebecbcbafcdfceaaeccfeacdbE.length}`));
      }
      for (let u = 0; u < 3; u++) {
         watchX = `${3 ^ parseInt(`${basketballiconD}`)}`;
      }
         subss += orangedownarrow5.length % 3;
      upgradeY += `${(String.fromCharCode(68,0) == source6 ? parseInt(`${holderK}`) : source6.length)}`;
   while (controlsN && x_view0.length >= 4) {
      x_view0 = "1";
      break;
   }
   while (accepted4 > 3 || 5 > (3 << (Math.min(4, Math.abs(accepted4))))) {
      accepted4 &= (String.fromCharCode(122,0) == source6 ? source6.length : googleV.length);
      break;
   }
   if (x_view0.endsWith(`${o_positionC}`)) {
      x_view0 = `${parseInt(`${iconsaveimageY}`)}`;
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
