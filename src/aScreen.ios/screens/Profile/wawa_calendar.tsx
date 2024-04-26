import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ScreenContainer from "../../components/container/wawa_nterstitial_iconpipexpand";
import { RootStackScreenProps } from "@type/wawa_iconnewchat";
import { useTheme } from "@react-navigation/native";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";

import TitleWithBackButtonHeader from "../../components/header/wawa_matchinactive_header";
import { Button } from "@rneui/themed";
import ShowMoreButton from "../../components/button/wawa_iconlogout_button";
import Logo2 from "@static/images/matchSmall.svg";
import NotificationModal from "../../components/modal/wawa_lock";
import {
  APP_EMAIL_CONST,
  APP_NAME_CONST,
  APP_VERSION,
} from "@utility/wawa_iconpointscore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNRestart from 'react-native-restart';

export default ({ navigation }: RootStackScreenProps<"关于我们">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [countToggleB, setCountToggleB] = useState(0);

  const toggleOverlay = () => {
       let rightx = 0.0;
    let minimizen = String.fromCharCode(102,95,55,51,0);
    let iconeye5 = String.fromCharCode(104,97,110,100,108,105,110,103,95,106,95,54,50,0);
    let whistlet: Array<any> = [577, 978, 405];
    let homeinactiveN = 1;
    let shareblackI = String.fromCharCode(122,95,51,56,95,114,101,103,105,111,110,0);
    let textinputs = false;
    let langkeyM: Array<any> = [String.fromCharCode(109,112,101,103,97,117,100,105,111,100,115,112,95,49,95,55,52,0), String.fromCharCode(121,95,52,51,95,99,111,108,111,110,115,0), String.fromCharCode(109,95,55,55,95,116,114,97,118,101,114,115,101,0)];
   if (2 > (whistlet.length % 1)) {
      whistlet.push(((textinputs ? 1 : 2) - 1));
   }
   for (let k = 0; k < 2; k++) {
       let abidetectI = String.fromCharCode(114,95,57,55,95,97,112,112,101,110,100,105,110,103,0);
       let arrowselectdownk = String.fromCharCode(121,95,54,56,95,100,114,111,112,120,0);
       let roboto0: Map<any, any> = new Map([[String.fromCharCode(119,101,98,102,105,108,101,95,105,95,50,50,0),525], [String.fromCharCode(97,110,97,108,121,122,101,114,95,52,95,52,51,0),90]]);
      let bellreminderB = roboto0.size <= 5254239;
      do {
         roboto0.set(`${abidetectI}`, roboto0.size - abidetectI.length);
         if (bellreminderB) {
            break;
         }
      } while ((!arrowselectdownk.startsWith(`${roboto0.size}`)) && bellreminderB);
      if (2 <= arrowselectdownk.length && abidetectI == String.fromCharCode(87,0)) {
         arrowselectdownk = `${1 | roboto0.size}`;
      }
      let arrowrightwithtailY = arrowselectdownk == String.fromCharCode(53,120,103,110,121,0);
      do {
         arrowselectdownk += `${roboto0.size ^ arrowselectdownk.length}`;
         if (arrowrightwithtailY) {
            break;
         }
      } while ((abidetectI == String.fromCharCode(66,0)) && arrowrightwithtailY);
      if (abidetectI.length == arrowselectdownk.length) {
         arrowselectdownk = `${arrowselectdownk.length}`;
      }
      for (let i = 0; i < 2; i++) {
         abidetectI += `${roboto0.size}`;
      }
      while (3 == abidetectI.length) {
         roboto0 = new Map([[`${roboto0.size}`, arrowselectdownk.length]]);
         break;
      }
         arrowselectdownk = `${arrowselectdownk.length}`;
      let found9 = roboto0.size <= 9869693;
      do {
          let sharemodalP: Array<any> = [215, 321, 381];
         roboto0 = new Map([[`${sharemodalP.length}`, 3 & abidetectI.length]]);
         if (found9) {
            break;
         }
      } while ((1 >= (4 ^ abidetectI.length) && 1 >= (roboto0.size ^ 4)) && found9);
      while (abidetectI == String.fromCharCode(82,0) || arrowselectdownk == String.fromCharCode(101,0)) {
          let showlessv = 3.0;
          let bdxadsdk0 = String.fromCharCode(116,95,55,55,95,117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,0);
          let bangF = 4;
          let libswresampleN: Map<any, any> = new Map([[String.fromCharCode(116,102,114,102,95,102,95,50,50,0),false ], [String.fromCharCode(100,95,56,54,95,115,101,97,108,98,111,120,0),false ]]);
         abidetectI += `${parseInt(`${showlessv}`) & 1}`;
         showlessv *= libswresampleN.size & bangF;
         bdxadsdk0 += `${2 << (Math.min(1, Math.abs(bangF)))}`;
         libswresampleN.set(bdxadsdk0, bdxadsdk0.length);
         break;
      }
      minimizen = `${arrowselectdownk.length}`;
   }
       let overlay6: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,101,114,118,101,115,95,110,95,49,55,0),963], [String.fromCharCode(111,117,116,115,105,100,101,95,54,95,54,50,0),436]]);
       let storeI: Array<any> = [69, 944, 942];
         storeI.push(3 | overlay6.size);
          let shirte: Array<any> = [String.fromCharCode(115,112,108,105,110,101,95,50,95,50,57,0), String.fromCharCode(116,95,55,55,95,98,111,100,105,101,115,0), String.fromCharCode(117,118,104,111,114,105,122,111,110,116,97,108,95,99,95,57,0)];
          let anners = 4.0;
         overlay6.set(`${shirte.length}`, 2 / (Math.max(9, overlay6.size)));
         shirte.push(parseInt(`${anners}`) + parseInt(`${anners}`));
      shareblackI += `${iconeye5.length}`;
   while (minimizen != String.fromCharCode(76,0) || iconeye5.length <= 1) {
      iconeye5 = `${parseInt(`${rightx}`) | iconeye5.length}`;
      break;
   }
      iconeye5 += `${1 & whistlet.length}`;
   let yellowanimationlive4 = homeinactiveN >= 5213630;
   do {
      homeinactiveN *= parseInt(`${rightx}`) - 1;
      if (yellowanimationlive4) {
         break;
      }
   } while ((1.15 < (rightx - homeinactiveN) || (2 - homeinactiveN) < 5) && yellowanimationlive4);
      minimizen = `${((textinputs ? 1 : 2) % 1)}`;
   while ((iconeye5.length % (Math.max(2, 1))) < 4 && (iconeye5.length - rightx) < 5.12) {
      rightx += whistlet.length & 2;
      break;
   }
      iconeye5 = `${(String.fromCharCode(79,0) == iconeye5 ? iconeye5.length : whistlet.length)}`;
   let homeiconU = textinputs ? !textinputs : textinputs;
   do {
       let mailf: Array<any> = [169, 577, 911];
       let yellowtoredU = String.fromCharCode(121,95,51,53,95,99,105,110,97,117,100,105,111,0);
       let googleH = String.fromCharCode(99,111,108,120,95,98,95,53,48,0);
       let twitterr: Map<any, any> = new Map([[String.fromCharCode(112,114,101,97,109,98,108,101,95,110,95,53,52,0),false ], [String.fromCharCode(105,95,54,54,95,109,115,109,112,101,103,118,0),true ]]);
       let nativeexK = String.fromCharCode(100,95,51,51,95,102,115,121,110,99,0);
      if (twitterr.size >= googleH.length) {
         twitterr = new Map([[`${mailf.length}`, 3 & mailf.length]]);
      }
          let zhuboI = 5.0;
          let becomeW = String.fromCharCode(100,101,102,105,110,105,116,105,111,110,95,53,95,56,52,0);
         yellowtoredU += "2";
         zhuboI -= parseFloat(`${parseInt(`${zhuboI}`) / (Math.max(becomeW.length, 7))}`);
         becomeW = `${parseInt(`${zhuboI}`) / (Math.max(1, 2))}`;
      for (let l = 0; l < 2; l++) {
         mailf.push(googleH.length);
      }
      while ((mailf.length ^ nativeexK.length) <= 4 && 4 <= (4 ^ nativeexK.length)) {
         nativeexK += `${(String.fromCharCode(78,0) == googleH ? googleH.length : nativeexK.length)}`;
         break;
      }
      if (3 == (googleH.length | 5) && (5 | googleH.length) == 5) {
          let footballfiledlayoutP: Array<any> = [33, 817, 163];
          let bootsplashk = true;
          let owngoalv: Array<any> = [522, 275, 969];
         twitterr = new Map([[nativeexK, ((bootsplashk ? 5 : 4) ^ 3)]]);
         footballfiledlayoutP = [owngoalv.length];
         bootsplashk = footballfiledlayoutP.includes(owngoalv[owngoalv.length - 1]);
      }
         mailf.push(mailf.length | 1);
      while (!googleH.startsWith(`${twitterr.size}`)) {
         twitterr = new Map([[`${twitterr.size}`, (nativeexK == String.fromCharCode(112,0) ? twitterr.size : nativeexK.length)]]);
         break;
      }
      for (let e = 0; e < 1; e++) {
          let orientationi = String.fromCharCode(115,95,55,57,95,114,105,110,103,105,110,103,0);
          let mutedb: Array<any> = [940, 703, 97];
          let guidek = 5.0;
         twitterr.set(`${orientationi}`, 3 + twitterr.size);
         orientationi += `${parseInt(`${guidek}`) << (Math.min(mutedb.length, 1))}`;
         mutedb = [2 + mutedb.length];
         guidek += parseFloat(`${mutedb.length}`);
      }
      for (let v = 0; v < 2; v++) {
         yellowtoredU = `${yellowtoredU.length}`;
      }
          let savei = true;
          let infoy = 4.0;
          let countdownk = true;
         yellowtoredU = `${parseInt(`${infoy}`)}`;
         savei = (!countdownk ? savei : countdownk);
         infoy -= ((savei ? 1 : 4) / 2);
      if (yellowtoredU != String.fromCharCode(80,0)) {
         nativeexK += `${(googleH == String.fromCharCode(106,0) ? mailf.length : googleH.length)}`;
      }
       let predictionbannersharedu: Array<any> = [336, 887, 855];
      for (let i = 0; i < 3; i++) {
          let moviesJ: Map<any, any> = new Map([[String.fromCharCode(115,95,52,54,95,112,111,115,116,114,101,113,117,101,115,116,0),196], [String.fromCharCode(118,95,54,52,95,114,101,118,111,107,101,0),811], [String.fromCharCode(109,97,112,112,101,114,95,106,95,50,51,0),273]]);
         twitterr = new Map([[`${moviesJ.size}`, moviesJ.size]]);
      }
      for (let n = 0; n < 1; n++) {
          let icondownimgt = String.fromCharCode(98,101,104,97,118,105,111,114,115,95,114,95,49,0);
         nativeexK += `${twitterr.size}`;
         icondownimgt += `${(icondownimgt == String.fromCharCode(81,0) ? icondownimgt.length : icondownimgt.length)}`;
      }
          let suboutk = 5;
         twitterr.set(`${predictionbannersharedu.length}`, 2 * mailf.length);
         suboutk ^= suboutk % 3;
      textinputs = rightx <= 100.14;
      if (homeiconU) {
         break;
      }
   } while ((whistlet.length <= 1 || 3 <= (whistlet.length | 1)) && homeiconU);
       let xvodi = String.fromCharCode(114,95,54,57,95,108,97,116,109,0);
         xvodi += `${xvodi.length}`;
      while (5 > xvodi.length) {
          let bgvipsport8: Map<any, any> = new Map([[String.fromCharCode(102,111,114,109,97,116,115,95,111,95,53,52,0),true ], [String.fromCharCode(112,95,52,0),true ], [String.fromCharCode(112,95,54,51,95,119,104,105,116,101,0),false ]]);
          let qaagJ = String.fromCharCode(104,95,49,52,95,115,97,109,112,108,101,0);
          let loginS: Array<any> = [String.fromCharCode(105,116,97,108,105,97,110,95,116,95,52,52,0), String.fromCharCode(107,95,49,51,95,102,100,99,116,0), String.fromCharCode(114,101,111,112,101,110,95,110,95,53,57,0)];
          let sigmobG = 4.0;
         xvodi += `${bgvipsport8.size << (Math.min(xvodi.length, 1))}`;
         bgvipsport8 = new Map([[`${loginS.length}`, 2]]);
         qaagJ = `${loginS.length}`;
         sigmobG += parseFloat(`${parseInt(`${sigmobG}`)}`);
         break;
      }
       let libruntimeexecutorS = String.fromCharCode(98,95,57,51,95,114,98,115,112,0);
       let taiwana = String.fromCharCode(112,115,102,105,108,101,95,99,95,51,57,0);
      iconeye5 = `${(minimizen == String.fromCharCode(54,0) ? shareblackI.length : minimizen.length)}`;
      shareblackI = `${((textinputs ? 1 : 1) & shareblackI.length)}`;
      rightx -= 3 * parseInt(`${rightx}`);
      whistlet.push(whistlet.length);
      rightx += minimizen.length + 3;
   while (3.99 < rightx) {
      rightx -= parseInt(`${rightx}`);
      break;
   }
      whistlet = [2 + minimizen.length];

    setIsDialogOpen(!isDialogOpen);
  };

  const spamToggleB = () => {
       let colorsU: Array<any> = [96, 387];
    let dacccfaabfbcbadeebddcabacdffdbo = 3.0;
    let cornershootf = 5.0;
    let photoW = String.fromCharCode(106,95,53,48,95,99,111,101,102,102,115,0);
    let r_managerO = String.fromCharCode(117,95,49,49,95,115,117,98,116,97,115,107,0);
    let privilegev = String.fromCharCode(114,95,55,54,95,97,112,111,115,0);
    let libreactnativejnin = 4.0;
    let team5 = false;
      photoW += `${parseInt(`${libreactnativejnin}`) - 1}`;
   while (privilegev != String.fromCharCode(114,0)) {
      photoW += `${privilegev.length}`;
      break;
   }
   let searchx = libreactnativejnin >= 8093236.0;
   do {
      libreactnativejnin -= parseFloat(`${parseInt(`${dacccfaabfbcbadeebddcabacdffdbo}`)}`);
      if (searchx) {
         break;
      }
   } while (searchx && ((5.8 * libreactnativejnin) == 2.22));
   if ((dacccfaabfbcbadeebddcabacdffdbo / 5) < 3.55) {
      cornershootf *= parseFloat(`${parseInt(`${libreactnativejnin}`)}`);
   }
      colorsU.push(privilegev.length ^ 3);
   if (2 < (colorsU.length * 5) && (r_managerO.length * 5) < 3) {
      colorsU.push(r_managerO.length & 3);
   }
      privilegev = `${colorsU.length | photoW.length}`;
       let eyeopenm = 1.0;
         eyeopenm -= parseInt(`${eyeopenm}`);
      while ((eyeopenm - eyeopenm) <= 1.42 || (eyeopenm / 1.42) <= 1.42) {
          let h_managerJ = String.fromCharCode(116,105,109,101,119,97,105,116,95,111,95,52,54,0);
         eyeopenm *= parseInt(`${eyeopenm}`) + 2;
         h_managerJ = "2";
         break;
      }
          let userl = 4;
          let rootJ = 2.0;
          let airbnbstarb = 0;
         eyeopenm += parseInt(`${rootJ}`) << (Math.min(3, Math.abs(3)));
         userl *= 3;
         rootJ *= airbnbstarb;
      privilegev = `${(r_managerO == String.fromCharCode(114,0) ? parseInt(`${libreactnativejnin}`) : r_managerO.length)}`;
   if (libreactnativejnin == parseFloat(`${r_managerO.length}`)) {
      r_managerO += `${photoW.length}`;
   }
   if (2.46 < libreactnativejnin) {
      cornershootf /= Math.max(3, parseFloat(`${1 | parseInt(`${cornershootf}`)}`));
   }
       let auto_lnk = String.fromCharCode(115,101,101,110,95,117,95,53,53,0);
       let relatedL: Array<any> = [String.fromCharCode(121,95,51,56,95,112,108,97,110,101,0), String.fromCharCode(102,95,52,48,95,112,111,115,116,97,108,0), String.fromCharCode(100,111,112,115,95,49,95,50,52,0)];
         relatedL = [(auto_lnk == String.fromCharCode(53,0) ? auto_lnk.length : relatedL.length)];
          let type_j9 = true;
          let shootyesgoalU = 3.0;
         auto_lnk += `${(auto_lnk == String.fromCharCode(99,0) ? relatedL.length : auto_lnk.length)}`;
         type_j9 = !type_j9;
         shootyesgoalU -= parseInt(`${shootyesgoalU}`) - 3;
       let fastforward8: Array<any> = [102, 326, 800];
       let dropdownd: Array<any> = [770, 411];
      let storeV = 6735039 <= relatedL.length;
      do {
         relatedL.push(dropdownd.length);
         if (storeV) {
            break;
         }
      } while (storeV && (2 > (fastforward8.length - 2) && 1 > (fastforward8.length - 2)));
          let viewsg: Array<any> = [424, 863];
          let fullc = String.fromCharCode(116,95,57,57,95,99,108,101,97,110,117,112,0);
          let switch_hO = true;
         auto_lnk += `${(fastforward8.length << (Math.min(1, Math.abs((switch_hO ? 1 : 5)))))}`;
         viewsg = [3 / (Math.max(5, fullc.length))];
         fullc += `${(String.fromCharCode(66,0) == fullc ? fullc.length : viewsg.length)}`;
         switch_hO = String.fromCharCode(71,0) == fullc;
       let whatsappr = 0.0;
      dacccfaabfbcbadeebddcabacdffdbo /= Math.max(3, parseFloat(`${colorsU.length ^ 2}`));
   if (dacccfaabfbcbadeebddcabacdffdbo >= parseFloat(`${colorsU.length}`)) {
       let package_s37: Map<any, any> = new Map([[String.fromCharCode(112,95,53,52,95,116,114,97,105,116,0),224], [String.fromCharCode(98,95,55,52,95,114,101,97,108,108,111,99,112,0),85], [String.fromCharCode(109,108,111,99,107,95,99,95,57,57,0),65]]);
         package_s37.set(`${package_s37.size}`, package_s37.size << (Math.min(3, Math.abs(package_s37.size))));
         package_s37 = new Map([[`${package_s37.size}`, package_s37.size - 2]]);
          let usernamep: Map<any, any> = new Map([[String.fromCharCode(102,95,56,48,95,112,97,108,101,116,116,101,0),false ], [String.fromCharCode(111,95,54,54,95,99,97,116,97,108,111,103,0),false ]]);
          let backwhite0 = String.fromCharCode(100,95,56,55,95,112,101,114,109,117,116,97,116,105,111,110,115,0);
         package_s37 = new Map([[`${usernamep.size}`, backwhite0.length & 3]]);
      dacccfaabfbcbadeebddcabacdffdbo *= parseFloat(`${colorsU.length | 3}`);
   }
      dacccfaabfbcbadeebddcabacdffdbo += parseFloat(`${2 >> (Math.min(5, Math.abs(parseInt(`${cornershootf}`))))}`);
       let libreactnativejniU = 2.0;
         libreactnativejniU -= parseFloat(`${2 % (Math.max(parseInt(`${libreactnativejniU}`), 6))}`);
      if ((libreactnativejniU / (Math.max(5, 3))) == 2.18) {
         libreactnativejniU /= Math.max(3, parseFloat(`${parseInt(`${libreactnativejniU}`) - 2}`));
      }
      while ((libreactnativejniU / 3.88) == 1.4) {
          let greytick4 = 4.0;
          let iconshareB = String.fromCharCode(99,104,105,114,112,95,100,95,54,53,0);
          let libavcodece: Map<any, any> = new Map([[String.fromCharCode(112,108,97,116,102,111,114,109,95,108,95,51,56,0),String.fromCharCode(118,95,49,52,95,97,116,114,97,99,97,108,0)], [String.fromCharCode(113,95,54,52,0),String.fromCharCode(107,101,109,112,102,95,121,95,55,50,0)], [String.fromCharCode(97,95,57,55,95,101,113,117,101,115,116,0),String.fromCharCode(99,95,52,54,95,101,112,105,99,0)]]);
          let active7: Array<any> = [270, 923, 216];
         libreactnativejniU *= parseFloat(`${parseInt(`${greytick4}`)}`);
         iconshareB = `${1 >> (Math.min(5, active7.length))}`;
         libavcodece = new Map([[`${libavcodece.size}`, iconshareB.length]]);
         active7.push(libavcodece.size / 2);
         break;
      }
      photoW = `${parseInt(`${cornershootf}`) >> (Math.min(Math.abs(3), 5))}`;
   while (2.78 == (4.14 / (Math.max(5, cornershootf)))) {
       let values6 = String.fromCharCode(109,95,50,56,95,101,120,104,97,117,115,116,101,100,0);
       let viewerK = 2.0;
       let baselineJ = String.fromCharCode(120,95,53,51,95,109,117,108,97,100,100,0);
       let liveshareT = 3.0;
       let chinam = true;
      for (let t = 0; t < 3; t++) {
         chinam = values6.startsWith(`${liveshareT}`);
      }
      for (let c = 0; c < 3; c++) {
         baselineJ = `${baselineJ.length}`;
      }
      if ((viewerK * parseFloat(`${values6.length}`)) == 3.5 && 3.10 == (3.5 * viewerK)) {
         viewerK += parseFloat(`${2 * parseInt(`${liveshareT}`)}`);
      }
         liveshareT -= parseFloat(`${1 - baselineJ.length}`);
         values6 += `${values6.length << (Math.min(Math.abs(1), 5))}`;
       let sourced = 0.0;
       let iconclose8 = 2.0;
      if (viewerK < sourced) {
          let orangedownarrowK = 2;
         sourced -= (parseFloat(`${(chinam ? 5 : 5) & parseInt(`${viewerK}`)}`));
         orangedownarrowK &= orangedownarrowK;
      }
      if (1.35 > (viewerK - parseFloat(`${values6.length}`)) || (values6.length - parseInt(`${viewerK}`)) > 1) {
         viewerK += parseFloat(`${2}`);
      }
         baselineJ = `${parseInt(`${liveshareT}`)}`;
          let cancelQ = 3.0;
          let moviesy = 5.0;
         sourced += parseFloat(`${2}`);
         cancelQ += parseFloat(`${3}`);
         moviesy *= 1;
         chinam = baselineJ.length < parseInt(`${liveshareT}`);
      if (!baselineJ.endsWith(`${sourced}`)) {
         sourced *= parseFloat(`${parseInt(`${liveshareT}`)}`);
      }
      if (!chinam || 2 >= values6.length) {
         chinam = 14.52 > liveshareT && 14.52 > viewerK;
      }
         sourced += parseFloat(`${values6.length}`);
      if (chinam) {
         iconclose8 *= parseFloat(`${3 - parseInt(`${iconclose8}`)}`);
      }
      colorsU.push(parseInt(`${viewerK}`));
      break;
   }
   for (let q = 0; q < 3; q++) {
      dacccfaabfbcbadeebddcabacdffdbo *= (parseFloat(`${String.fromCharCode(114,0) == privilegev ? parseInt(`${libreactnativejnin}`) : privilegev.length}`));
   }
      r_managerO += `${photoW.length / 3}`;

    setCountToggleB(countToggleB + 1);
  }

  const switchToggle = async () => {
       let networkC = String.fromCharCode(112,95,50,56,95,112,108,117,103,105,110,115,0);
    let dplusa: Array<any> = [62, 815];
    let trophyz: Array<any> = [878, 668];
    let libreactnativejni8 = true;
    let uimanagerg = 2.0;
    let livenodatabgimgZ: Array<any> = [String.fromCharCode(113,101,120,112,110,101,103,95,51,95,50,56,0), String.fromCharCode(98,114,117,115,104,95,99,95,51,51,0)];
    let small6 = 2;
    let readT = 2.0;
    let shareblackZ = String.fromCharCode(101,113,117,105,118,97,108,101,110,99,101,95,48,95,52,52,0);
    let statsY = 1.0;
    let librrcQ: Map<any, any> = new Map([[String.fromCharCode(119,95,56,53,95,109,97,105,110,104,101,97,100,101,114,0),900], [String.fromCharCode(101,99,108,95,104,95,54,0),59], [String.fromCharCode(116,95,49,48,95,114,101,111,115,0),553]]);
    let unimplementedviewS: Array<any> = [String.fromCharCode(112,95,57,53,95,98,101,110,101,102,105,99,105,97,114,121,0), String.fromCharCode(104,95,52,55,95,97,110,116,105,97,108,105,97,115,0), String.fromCharCode(99,109,115,103,115,95,112,95,57,52,0)];
    let detailsS: Array<any> = [String.fromCharCode(105,95,52,48,95,99,111,110,116,114,111,108,108,101,100,0), String.fromCharCode(111,95,53,48,95,115,101,112,97,114,97,116,101,100,0), String.fromCharCode(102,95,52,49,95,115,97,100,100,0)];
   if ((4.4 - uimanagerg) == 3.46) {
      uimanagerg += shareblackZ.length;
   }
      trophyz = [small6];
   for (let k = 0; k < 3; k++) {
      shareblackZ += "1";
   }
   if ((uimanagerg - 1.40) > 1.55 && (uimanagerg - 1.40) > 2.59) {
      shareblackZ = `${dplusa.length << (Math.min(trophyz.length, 3))}`;
   }
   while (!shareblackZ.startsWith(`${uimanagerg}`)) {
      shareblackZ = `${(String.fromCharCode(108,0) == shareblackZ ? parseInt(`${statsY}`) : shareblackZ.length)}`;
      break;
   }
   if (3 > small6) {
      small6 &= parseInt(`${statsY}`) >> (Math.min(2, Math.abs(parseInt(`${uimanagerg}`))));
   }
   for (let b = 0; b < 3; b++) {
      uimanagerg -= trophyz.length;
   }
   if (parseInt(`${uimanagerg}`) >= networkC.length) {
      networkC = `${parseInt(`${readT}`) + 1}`;
   }
       let popup1 = String.fromCharCode(116,111,112,109,111,115,116,95,100,95,50,57,0);
         popup1 = `${3 ^ popup1.length}`;
         popup1 = `${popup1.length | 1}`;
       let libffmpegkitP = 1.0;
      statsY /= Math.max(2, 5);
      livenodatabgimgZ.push(((libreactnativejni8 ? 3 : 4) / (Math.max(parseInt(`${readT}`), 5))));
       let libavutilH = String.fromCharCode(105,95,57,51,95,99,97,99,104,101,115,0);
       let listx = String.fromCharCode(109,101,109,115,104,105,112,95,100,95,53,49,0);
         libavutilH += `${libavutilH.length}`;
         listx += `${listx.length / (Math.max(4, libavutilH.length))}`;
       let basketballhometeamn: Map<any, any> = new Map([[String.fromCharCode(97,108,105,97,115,101,115,95,114,95,54,55,0),868], [String.fromCharCode(115,101,109,97,112,104,111,114,101,95,50,95,53,55,0),312]]);
       let iconnewssharem: Map<any, any> = new Map([[String.fromCharCode(102,105,110,95,111,95,52,49,0),255], [String.fromCharCode(114,95,55,55,95,97,118,101,114,0),23], [String.fromCharCode(118,95,53,55,95,115,99,113,117,101,114,121,0),153]]);
         basketballhometeamn.set(`${listx}`, basketballhometeamn.size & listx.length);
         listx += `${iconnewssharem.size * libavutilH.length}`;
       let carousely = 4;
      shareblackZ += `${librrcQ.size}`;
   if ((uimanagerg / (Math.max(1.18, 9))) >= 4.12) {
      librrcQ.set(`${readT}`, parseInt(`${readT}`));
   }
   for (let g = 0; g < 2; g++) {
      trophyz.push(small6);
   }
   if ((livenodatabgimgZ.length * 1) > 3 || (small6 * livenodatabgimgZ.length) > 1) {
      small6 -= dplusa.length;
   }

    await AsyncStorage.setItem("access", "11111111");

   if (2 > small6) {
      small6 >>= Math.min(2, Math.abs(((libreactnativejni8 ? 4 : 1) ^ parseInt(`${readT}`))));
   }
      small6 -= parseInt(`${statsY}`);
   for (let c = 0; c < 3; c++) {
      small6 /= Math.max(5, librrcQ.size);
   }
       let largeV = String.fromCharCode(117,95,55,49,95,105,115,116,97,112,0);
       let vignetteB = 1;
         vignetteB += vignetteB;
          let webviewz = String.fromCharCode(107,95,49,95,100,101,99,114,121,112,116,0);
         largeV = `${vignetteB - 1}`;
         webviewz += `${webviewz.length * webviewz.length}`;
          let pressurej = String.fromCharCode(116,95,55,48,95,111,116,104,101,114,115,0);
         vignetteB <<= Math.min(largeV.length, 1);
         pressurej = `${(pressurej == String.fromCharCode(80,0) ? pressurej.length : pressurej.length)}`;
         vignetteB *= 1;
         vignetteB <<= Math.min(2, Math.abs(1 - largeV.length));
       let suggestionR = true;
      networkC = `${1 * parseInt(`${uimanagerg}`)}`;
   let iconqqM = 8492287 >= small6;
   do {
       let dacccfaabfbcbadeebddcabacdffdb3: Array<any> = [179, 85];
      let reactu = dacccfaabfbcbadeebddcabacdffdb3.length <= 7709341;
      do {
          let linkA = 0;
          let shareblack4 = 0.0;
         dacccfaabfbcbadeebddcabacdffdb3 = [dacccfaabfbcbadeebddcabacdffdb3.length * linkA];
         linkA /= Math.max(1, parseInt(`${shareblack4}`) ^ parseInt(`${shareblack4}`));
         if (reactu) {
            break;
         }
      } while ((5 > dacccfaabfbcbadeebddcabacdffdb3.length) && reactu);
      while (dacccfaabfbcbadeebddcabacdffdb3.includes(dacccfaabfbcbadeebddcabacdffdb3.length)) {
         dacccfaabfbcbadeebddcabacdffdb3 = [1 & dacccfaabfbcbadeebddcabacdffdb3.length];
         break;
      }
          let shoot3 = String.fromCharCode(104,105,103,104,108,105,103,104,116,115,95,51,95,56,50,0);
         dacccfaabfbcbadeebddcabacdffdb3 = [dacccfaabfbcbadeebddcabacdffdb3.length];
         shoot3 = `${shoot3.length}`;
      small6 >>= Math.min(5, Math.abs(1 - livenodatabgimgZ.length));
      if (iconqqM) {
         break;
      }
   } while ((2 >= small6) && iconqqM);
      statsY *= 3 / (Math.max(parseInt(`${readT}`), 7));
   if (!dplusa.includes(small6)) {
       let iconarrowrightorangeM = 1.0;
       let libcrashsdk8 = 3.0;
       let floatingt = 5.0;
       let whitesmalltickH = false;
      let thumbnailr = 9099365.0 >= iconarrowrightorangeM;
      do {
         iconarrowrightorangeM -= (parseFloat(`${parseInt(`${floatingt}`) + (whitesmalltickH ? 4 : 5)}`));
         if (thumbnailr) {
            break;
         }
      } while (((iconarrowrightorangeM + libcrashsdk8) >= 4.52) && thumbnailr);
         floatingt /= Math.max(2, parseFloat(`${1}`));
      let imagemanagerB = 5059543.0 >= libcrashsdk8;
      do {
         libcrashsdk8 *= (parseFloat(`${(whitesmalltickH ? 2 : 5) % (Math.max(parseInt(`${iconarrowrightorangeM}`), 6))}`));
         if (imagemanagerB) {
            break;
         }
      } while ((2.56 == (2.89 + libcrashsdk8) || libcrashsdk8 == 2.89) && imagemanagerB);
      for (let f = 0; f < 3; f++) {
         iconarrowrightorangeM /= Math.max(3, parseFloat(`${parseInt(`${floatingt}`)}`));
      }
         floatingt += (parseFloat(`${(whitesmalltickH ? 4 : 1) % (Math.max(parseInt(`${libcrashsdk8}`), 1))}`));
          let main_qT = 0;
          let attributedstringc = String.fromCharCode(102,95,49,95,112,114,111,118,105,100,105,110,103,0);
          let c_positionR = true;
         floatingt -= parseFloat(`${1}`);
         main_qT &= 2;
         attributedstringc = `${attributedstringc.length}`;
         c_positionR = !c_positionR;
         iconarrowrightorangeM -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${iconarrowrightorangeM}`)), 5))}`);
         iconarrowrightorangeM /= Math.max(parseFloat(`${1 % (Math.max(parseInt(`${iconarrowrightorangeM}`), 5))}`), 3);
      if (5.73 >= (5.96 / (Math.max(6, libcrashsdk8))) && 3.67 >= (floatingt / 5.96)) {
         libcrashsdk8 += parseFloat(`${1}`);
      }
          let castingQ = String.fromCharCode(98,109,111,100,101,95,49,95,56,52,0);
         floatingt /= Math.max(parseFloat(`${parseInt(`${floatingt}`) & 1}`), 4);
         castingQ += `${castingQ.length}`;
          let icontransferclub5 = 3.0;
         libcrashsdk8 -= parseFloat(`${1 ^ parseInt(`${icontransferclub5}`)}`);
      for (let y = 0; y < 1; y++) {
          let libswscalew = true;
          let scheduleri = 4;
          let runtimeschedulerI = true;
          let elementsf = 4.0;
         whitesmalltickH = libswscalew;
         scheduleri <<= Math.min(Math.abs(((runtimeschedulerI ? 2 : 4) + scheduleri)), 4);
         runtimeschedulerI = !runtimeschedulerI;
         elementsf *= parseFloat(`${scheduleri - 3}`);
      }
      dplusa = [1 / (Math.max(3, parseInt(`${uimanagerg}`)))];
   }
      statsY += trophyz.length;
      shareblackZ = `${((libreactnativejni8 ? 2 : 4) % (Math.max(librrcQ.size, 1)))}`;
       let dnewarchdefaults6 = 2.0;
       let orangeuparrow0: Map<any, any> = new Map([[String.fromCharCode(103,95,54,52,95,109,97,100,101,0),809], [String.fromCharCode(99,108,111,115,101,99,98,95,54,95,54,52,0),96]]);
          let iconclosewhiteG = String.fromCharCode(108,95,55,53,95,99,114,97,122,121,116,105,109,101,0);
          let holderO = true;
          let nterstitial9 = true;
         dnewarchdefaults6 /= Math.max((1 ^ (holderO ? 3 : 1)), 3);
         iconclosewhiteG = `${iconclosewhiteG.length}`;
         holderO = iconclosewhiteG.startsWith(`${nterstitial9}`);
      for (let r = 0; r < 2; r++) {
          let dialoge: Array<any> = [786, 979];
          let commony = String.fromCharCode(110,95,50,50,95,108,105,118,101,109,111,100,101,0);
          let foundW = String.fromCharCode(100,95,54,53,95,100,98,115,116,97,116,0);
          let libreacty = String.fromCharCode(118,95,51,57,95,116,101,120,116,117,114,101,100,115,112,0);
         dnewarchdefaults6 -= 1 % (Math.max(parseInt(`${dnewarchdefaults6}`), 1));
         dialoge = [(String.fromCharCode(114,0) == libreacty ? libreacty.length : foundW.length)];
         commony = `${foundW.length * commony.length}`;
      }
      statsY -= 2;
       let tickK = false;
         tickK = tickK || tickK;
      let largebrightnessI = tickK ? !tickK : tickK;
      do {
          let chatroombackground6: Map<any, any> = new Map([[String.fromCharCode(118,105,97,95,118,95,54,49,0),673], [String.fromCharCode(102,95,57,49,95,113,112,101,108,100,115,112,0),776], [String.fromCharCode(106,95,50,48,95,97,108,116,101,114,110,97,116,105,111,110,0),433]]);
          let list6: Array<any> = [770, 647];
          let optionsq: Map<any, any> = new Map([[String.fromCharCode(105,95,54,53,95,99,111,108,114,97,109,0),String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,115,95,114,95,53,53,0)], [String.fromCharCode(118,95,54,95,114,116,112,109,97,112,0),String.fromCharCode(99,95,55,57,95,105,115,110,111,116,116,97,112,0)]]);
          let jingdongI = String.fromCharCode(111,95,54,95,115,101,109,105,0);
         tickK = (((tickK ? 81 : optionsq.size) & optionsq.size) < 81);
         chatroombackground6.set(jingdongI, list6.length);
         list6 = [1 << (Math.min(5, list6.length))];
         jingdongI += `${(String.fromCharCode(87,0) == jingdongI ? chatroombackground6.size : jingdongI.length)}`;
         if (largebrightnessI) {
            break;
         }
      } while (largebrightnessI && (!tickK));
         tickK = (tickK ? tickK : tickK);
      statsY += 1;
   let expiredd = 7773094 <= trophyz.length;
   do {
      trophyz.push(librrcQ.size >> (Math.min(Math.abs(3), 3)));
      if (expiredd) {
         break;
      }
   } while (expiredd && (!Array.from(librrcQ.values()).includes(trophyz.length)));
       let othermatchdetailbga = String.fromCharCode(105,110,115,101,114,116,101,100,95,51,95,53,56,0);
       let lineD = String.fromCharCode(100,121,108,105,98,115,95,102,95,50,0);
       let dicei = true;
      while (lineD.length >= 1 || !dicei) {
         lineD += `${((dicei ? 4 : 5))}`;
         break;
      }
      for (let o = 0; o < 3; o++) {
         dicei = String.fromCharCode(84,0) == lineD;
      }
       let starZ = 2;
      if (othermatchdetailbga.length > lineD.length) {
         othermatchdetailbga += `${((dicei ? 5 : 2))}`;
      }
      let mapbufferi = othermatchdetailbga.length <= 8371083;
      do {
          let rightd = false;
          let libmapbufferjniA = 4.0;
          let directj = 0;
          let modeC = String.fromCharCode(120,95,49,54,95,98,121,116,101,111,117,116,0);
         othermatchdetailbga += `${(String.fromCharCode(50,0) == modeC ? modeC.length : lineD.length)}`;
         rightd = 26.67 == libmapbufferjniA;
         libmapbufferjniA /= Math.max(5, 3 + parseInt(`${libmapbufferjniA}`));
         directj |= 2 << (Math.min(Math.abs(parseInt(`${libmapbufferjniA}`)), 5));
         if (mapbufferi) {
            break;
         }
      } while (mapbufferi && (othermatchdetailbga.length >= 2 && dicei));
         starZ %= Math.max(lineD.length, 3);
      while (dicei) {
         starZ >>= Math.min(Math.abs(starZ), 3);
         break;
      }
         lineD += `${starZ}`;
         starZ -= othermatchdetailbga.length;
      dplusa = [networkC.length];
       let yellowtored0: Map<any, any> = new Map([[String.fromCharCode(110,95,54,95,112,97,114,115,101,117,116,105,108,115,0),999], [String.fromCharCode(114,101,116,114,97,110,115,109,105,116,95,102,95,49,48,48,0),974]]);
          let mbnativeM: Array<any> = [757, 734];
          let iconedit7 = 5;
         yellowtored0 = new Map([[`${mbnativeM.length}`, iconedit7 & 3]]);
      for (let a = 0; a < 2; a++) {
         yellowtored0 = new Map([[`${yellowtored0.size}`, yellowtored0.size ^ 1]]);
      }
      if (yellowtored0.get(`${yellowtored0.size}`) == null) {
         yellowtored0.set(`${yellowtored0.size}`, yellowtored0.size);
      }
      livenodatabgimgZ = [detailsS.length];
    RNRestart.Restart();
  }

  useEffect(() => {
    if(countToggleB == 8){
      switchToggle();
    }
  }, [countToggleB])

  return (
    
    
    
    
    
    
    //     }}>
    
    //   </Text>
    
    <ScreenContainer>
      <View style={{ gap: spacing.m }}>
        <TitleWithBackButtonHeader title="关于我们" />
        <View style={styles.logo}>
          <Logo2 height={icons.sizes.xxl} width={icons.sizes.xxl} />
        </View>
        <TouchableOpacity onPress={spamToggleB}>
          <Text style={{ textAlign: "center", ...textVariants.body }}>
            {APP_VERSION}
          </Text>
        </TouchableOpacity>
        <NotificationModal
          onConfirm={toggleOverlay}
          isVisible={isDialogOpen}
          title="版权声明"
          subtitle1={`如果该APP提供内容侵犯了您的版权, 请发送电子邮件说明, 我们将立即删除内容, 保护版权所有者的权益。`}
          subtitle2="联系邮箱:"
          subtitle3={APP_EMAIL_CONST}
        />
        <View>
          <ShowMoreButton
            text="隐私政策"
            onPress={() => navigation.navigate("隐私政策")}
          />
          <ShowMoreButton
            text="用户协议"
            onPress={() => navigation.navigate("用户协议")}
          />
          {/* <ShowMoreButton
            text="版权声明"
            onPress={() => setIsDialogOpen(!isDialogOpen)}
          /> */}
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  topNav: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  submitBtn: {
    borderRadius: 10,
  },
});
