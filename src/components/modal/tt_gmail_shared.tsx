import React, {
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { View, Text, TouchableOpacity, Alert, Linking } from "react-native";
import RegengModal from "./tt_green";
import { useNavigation, useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "@hooks/tt_spec_download";

import FastImage from "../common/tt_connection";
import CodePush from "react-native-code-push";
import { TermsAcceptContext } from "../../contexts/tt_overlay_spinner";
import RNRestart from "react-native-restart";
import { ttGray } from "@utility/tt_selection";
import { ttConfigRecommendation } from "../../../tt_copy_floater";
import RNExitApp from "react-native-exit-app";
interface ttSmall {}

export default function RegengOverlay({}: ttSmall) {
  const { accepted } = useContext(TermsAcceptContext);

  const { colors, textVariants, spacing, icons } = useTheme();

  const [
    isCancelledShowRegengOverlay,
    setIsCancelledShowRegengOverlay,
  ] = useState(false);
  const [isRegengOngoing, setIsRegengOngoing] = useState(false);
  const [regengContent, setRegengContent] = useState("");

  const [downloadProgress, setDownloadProgress] = useState("0%");

  const [totalDownload, setTotalDownload] = useState("");

  const acceptRegeng = async () => {
       let reactnativejsC = 2;
    let vignette9 = false;
    let screenB = String.fromCharCode(100,116,108,115,0);
    let castingw = String.fromCharCode(100,120,116,97,0);
    let calendarH = 2.0;
    let sansF = 2.0;
    let f_centerX = 0;
    let acceptedq = String.fromCharCode(101,109,117,108,97,116,111,114,0);
    let backwardF = 1.0;
    let floatingP = 5;
   while (2 < f_centerX) {
      f_centerX <<= Math.min(1, Math.abs(3 + parseInt(`${backwardF}`)));
      break;
   }

    if (ttConfigRecommendation.instance.updateUrl != "") {

   if (backwardF <= sansF) {
      backwardF += reactnativejsC;
   }
      const supported = await Linking.canOpenURL(ttConfigRecommendation.instance.updateUrl);

   if ((sansF / 4.93) > 2.3 || 4 > (parseInt(`${sansF}`) / (Math.max(10, screenB.length)))) {
      screenB = `${acceptedq.length}`;
   }
      if (ttConfigRecommendation.instance.updateAction != 1) {

      acceptedq = `${parseInt(`${backwardF}`) - castingw.length}`;
      setIsCancelledShowRegengOverlay(true);
      }
      if (supported) {

   if (4 > (screenB.length - parseInt(`${sansF}`)) && (screenB.length - parseInt(`${sansF}`)) > 4) {
       let with_kcd: Map<any, any> = new Map([[String.fromCharCode(112,107,99,115,0),158], [String.fromCharCode(102,108,97,99,101,110,99,0),792], [String.fromCharCode(117,110,103,114,111,117,112,0),143]]);
       let inactivea = false;
       let expand7: Array<any> = [626, 771];
       let expandY = String.fromCharCode(112,104,97,115,101,115,0);
         with_kcd = new Map([[`${with_kcd.size}`, 2]]);
         with_kcd = new Map([[`${with_kcd.size}`, with_kcd.size]]);
      if (2 == expandY.length) {
          let redirecth = 2.0;
         with_kcd = new Map([[`${inactivea}`, (parseInt(`${redirecth}`) * (inactivea ? 1 : 1))]]);
      }
      if (4 <= with_kcd.size && 1 <= (4 ^ with_kcd.size)) {
          let interstitial8 = 0.0;
         with_kcd.set(expandY, 3 >> (Math.min(5, expandY.length)));
         interstitial8 *= parseFloat(`${parseInt(`${interstitial8}`) % 1}`);
      }
      while (expandY.includes(`${inactivea}`)) {
         inactivea = expandY == String.fromCharCode(66,0);
         break;
      }
      while (expandY.length <= expand7.length) {
          let debugz: Array<any> = [String.fromCharCode(99,108,105,112,116,101,115,116,0), String.fromCharCode(98,97,115,105,99,97,108,108,121,0), String.fromCharCode(117,115,101,114,0)];
          let castingk = String.fromCharCode(114,105,100,0);
          let shared8 = String.fromCharCode(99,111,100,101,98,108,111,99,107,115,0);
          let indext = String.fromCharCode(121,117,118,112,99,0);
          let completev = 0;
         expandY = `${(String.fromCharCode(72,0) == expandY ? expand7.length : expandY.length)}`;
         debugz.push(debugz.length ^ 3);
         castingk = `${(String.fromCharCode(78,0) == indext ? debugz.length : indext.length)}`;
         shared8 = "3";
         completev *= 2 << (Math.min(5, shared8.length));
         break;
      }
         with_kcd.set(`${expand7.length}`, with_kcd.size % (Math.max(3, 3)));
      if ((1 ^ expand7.length) > 4) {
          let n_countH = 2.0;
          let field2: Array<any> = [940, 202];
          let matchesF: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,114,101,115,115,101,100,0),false ], [String.fromCharCode(116,101,114,109,105,110,97,116,101,100,0),false ], [String.fromCharCode(119,105,114,101,102,114,97,109,101,0),true ]]);
          let helperS = String.fromCharCode(99,111,109,112,97,114,101,114,115,0);
          let colorsf = false;
         inactivea = field2.length >= 5;
         n_countH /= Math.max(1, parseFloat(`${2 - parseInt(`${n_countH}`)}`));
         field2.push(matchesF.size);
         matchesF = new Map([[`${matchesF.size}`, ((colorsf ? 2 : 4) >> (Math.min(Math.abs(2), 3)))]]);
         helperS += `${matchesF.size}`;
         colorsf = 12 == helperS.length;
      }
      let android8 = expand7.length >= 7988949;
      do {
         expand7.push(expandY.length ^ 3);
         if (android8) {
            break;
         }
      } while ((5 >= (expand7.length | expandY.length)) && android8);
         with_kcd = new Map([[expandY, ((inactivea ? 5 : 1))]]);
      while (2 < (5 - expandY.length) || 1 < (with_kcd.size - 5)) {
         with_kcd = new Map([[`${with_kcd.size}`, ((inactivea ? 5 : 5) >> (Math.min(Math.abs(with_kcd.size), 2)))]]);
         break;
      }
       let predictionH = true;
       let privilegeD = true;
      sansF += parseFloat(`${reactnativejsC | 2}`);
   }
        await Linking.openURL(ttConfigRecommendation.instance.updateUrl);
      } else {

   for (let r = 0; r < 2; r++) {
      backwardF -= parseInt(`${backwardF}`) - f_centerX;
   }
        console.error(
          "Don't know how to open URI: ",
          ttConfigRecommendation.instance.updateUrl
        );
      }
      return;
    }

    setIsRegengOngoing(true);

       let inews7 = 0.0;
          let reward0 = String.fromCharCode(99,97,114,114,105,101,114,0);
          let p_playerz = true;
         inews7 += parseFloat(`${2 - reward0.length}`);
         reward0 = `${((p_playerz ? 2 : 2) * 2)}`;
      if (3.89 <= inews7) {
         inews7 -= parseFloat(`${3 * parseInt(`${inews7}`)}`);
      }
      while ((inews7 + inews7) < 1.1) {
         inews7 += parseFloat(`${parseInt(`${inews7}`)}`);
         break;
      }
      reactnativejsC &= (reactnativejsC * (vignette9 ? 1 : 3));
    CodePush.sync(
      {
        installMode: CodePush.InstallMode.IMMEDIATE,
      },
      (syncStatus) => {

       let langM: Array<any> = [717, 504, 640];
       let shirt4 = String.fromCharCode(100,111,119,110,108,111,97,100,97,98,108,101,0);
      for (let v = 0; v < 2; v++) {
         shirt4 = `${3 + langM.length}`;
      }
      while ((shirt4.length | 1) <= 5 && (shirt4.length | langM.length) <= 1) {
         shirt4 += "3";
         break;
      }
         langM = [2];
         shirt4 = `${1 + shirt4.length}`;
      if (5 >= shirt4.length) {
         langM.push((String.fromCharCode(55,0) == shirt4 ? langM.length : shirt4.length));
      }
       let uploadp = 2.0;
      screenB += `${screenB.length / (Math.max(1, 10))}`;
        switch (syncStatus) {
          case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
            setRegengContent("正在下载新资源...");

       let zhengpianP: Array<any> = [693, 654, 78];
         zhengpianP.push(2);
          let episode5 = String.fromCharCode(115,107,101,116,99,104,0);
          let sidep = 1;
          let remindera = String.fromCharCode(102,114,97,103,109,101,110,116,115,0);
         zhengpianP = [episode5.length ^ zhengpianP.length];
         episode5 += "3";
         sidep >>= Math.min(1, Math.abs(sidep & 1));
         remindera = `${remindera.length * sidep}`;
         zhengpianP = [zhengpianP.length * 2];
      sansF += parseFloat(`${parseInt(`${sansF}`) ^ screenB.length}`);
            console.log("CODEPUSH STATUS : Checking for updates");

   while (3 == screenB.length) {
       let footballl: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,97,117,100,105,111,100,101,99,104,101,97,100,101,114,0),String.fromCharCode(114,116,109,100,0)], [String.fromCharCode(105,103,110,97,108,0),String.fromCharCode(100,99,111,110,108,121,0)], [String.fromCharCode(102,105,120,101,100,0),String.fromCharCode(97,100,111,112,116,101,100,0)]]);
      if ((footballl.size % (Math.max(footballl.size, 2))) > 5 || 3 > (footballl.size % 5)) {
         footballl = new Map([[`${footballl.size}`, 1]]);
      }
      if (2 <= (3 + footballl.size) && 3 <= (footballl.size + footballl.size)) {
         footballl.set(`${footballl.size}`, footballl.size & 3);
      }
       let dycreatorz: Array<any> = [String.fromCharCode(103,101,110,102,105,108,101,115,0), String.fromCharCode(100,101,99,105,112,104,101,114,0), String.fromCharCode(102,111,99,117,115,97,98,108,101,0)];
       let tempF: Array<any> = [224, 352];
      reactnativejsC |= 3;
      break;
   }
            break;

          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            setRegengContent("正在下载新资源...");

      acceptedq += `${(String.fromCharCode(71,0) == acceptedq ? parseInt(`${calendarH}`) : acceptedq.length)}`;
            break;

          case CodePush.SyncStatus.INSTALLING_UPDATE:
            setRegengContent("正在安装新资源...");

   if ((backwardF - 1.62) < 1.53) {
       let pingW: Array<any> = [34, 444];
       let temperatureI = 1.0;
       let downloaderc = String.fromCharCode(114,101,110,100,105,116,105,111,110,0);
          let statisticsR = 0.0;
          let store5: Array<any> = [674, 163, 88];
         downloaderc += `${downloaderc.length ^ 1}`;
         statisticsR /= Math.max(3, store5.length);
         store5 = [parseInt(`${statisticsR}`)];
       let thailandv: Array<any> = [398, 325, 250];
          let diceF: Array<any> = [838, 303, 377];
         pingW.push(downloaderc.length * parseInt(`${temperatureI}`));
         diceF = [diceF.length & 1];
       let long_a9n = String.fromCharCode(113,116,114,108,101,0);
      let materialD = 9815633 <= downloaderc.length;
      do {
         downloaderc = "3";
         if (materialD) {
            break;
         }
      } while ((parseInt(`${temperatureI}`) == downloaderc.length) && materialD);
      for (let u = 0; u < 1; u++) {
          let pointk = String.fromCharCode(102,100,99,116,100,115,112,0);
          let teamE = 3.0;
         temperatureI *= parseFloat(`${3}`);
         pointk += `${(String.fromCharCode(83,0) == pointk ? pointk.length : parseInt(`${teamE}`))}`;
         teamE *= parseInt(`${teamE}`) ^ 2;
      }
      if (5 <= (long_a9n.length / 2) || 2 <= (long_a9n.length / 2)) {
         thailandv.push(3);
      }
          let headerX = true;
          let default_fiK = 2.0;
         long_a9n += `${2 | thailandv.length}`;
         headerX = 66.93 < default_fiK;
         default_fiK /= Math.max(((headerX ? 4 : 1) + parseInt(`${default_fiK}`)), 3);
         thailandv = [thailandv.length | 2];
      backwardF *= 2;
   }
            break;

          case CodePush.SyncStatus.UP_TO_DATE:
            console.log("CODEPUSH STATUS : Up to date");

   while (sansF >= 2.53 || (sansF / (Math.max(2.53, 9))) >= 4.36) {
      sansF += parseFloat(`${2}`);
      break;
   }
            break;

          case CodePush.SyncStatus.UPDATE_INSTALLED:
            CodePush.notifyAppReady();

      sansF /= Math.max(parseFloat(`${parseInt(`${calendarH}`)}`), 4);
            ttGray.showToast("安装完成, 已重启应用");

            
            
            //   { text: "立即重启", onPress: () => RNRestart.Restart() },
            //   { text: "稍后", onPress: () => console.log("用户选择稍后重启") },
            
            break;

          case CodePush.SyncStatus.UNKNOWN_ERROR:
            ttGray.showToast("更新失败，请稍后重试");

      screenB = `${1 & reactnativejsC}`;
            setIsCancelledShowRegengOverlay(true);

   if (3.13 <= (sansF * 2.18) || !vignette9) {
      sansF /= Math.max(3, (parseFloat(`${String.fromCharCode(87,0) == screenB ? screenB.length : parseInt(`${backwardF}`)}`)));
   }
            break;
        }
      },
      ({ receivedBytes, totalBytes }) => {

      castingw = `${f_centerX}`;
        const progress = (receivedBytes / totalBytes) * 100;

      backwardF *= parseInt(`${sansF}`) | 2;
        console.log(`Download progress: ${progress.toFixed(2)}%`);

   let helperO = reactnativejsC >= 9765516;
   do {
      reactnativejsC |= ((vignette9 ? 2 : 4));
      if (helperO) {
         break;
      }
   } while (helperO && (f_centerX >= reactnativejsC));
        console.log(`ttMinivodBodan bundle size: ${totalBytes} bytes`);

      backwardF += screenB.length ^ 1;

        setDownloadProgress(`${progress.toFixed(2)}%`);

   let blackD = vignette9 ? !vignette9 : vignette9;
   do {
      vignette9 = ((castingw.length * (!vignette9 ? 70 : castingw.length)) > 70);
      if (blackD) {
         break;
      }
   } while ((!vignette9) && blackD);
        setTotalDownload(`${totalBytes} bytes`);
      }
    );
  };

  const cancelRegeng = () => {
       let reportI = String.fromCharCode(110,102,116,0);
    let applicationq = String.fromCharCode(104,105,103,104,112,97,115,115,0);
    let videojsl = 3.0;
    let championu = String.fromCharCode(113,115,111,114,116,0);
    let f_playerY: Array<any> = [922, 533];
    let str8 = String.fromCharCode(111,114,105,103,105,110,97,108,0);
    let telegramc = String.fromCharCode(115,108,105,100,101,0);
    let animationk = 2.0;
    let time_qQ: Array<any> = [503, 517, 151];
    let entryQ = String.fromCharCode(115,121,115,99,116,108,115,0);
    let w_imageF: Array<any> = [254, 718, 580];
    let commonP = 4;
    let moduleO = 3;
      animationk *= telegramc.length & 1;
   let single0 = String.fromCharCode(117,48,113,0) == championu;
   do {
      championu += `${telegramc.length}`;
      if (single0) {
         break;
      }
   } while ((str8 != String.fromCharCode(52,0)) && single0);
   let statisticsG = 5635855 <= f_playerY.length;
   do {
      f_playerY = [parseInt(`${videojsl}`) / 2];
      if (statisticsG) {
         break;
      }
   } while (statisticsG && ((4.0 * videojsl) < 3.68 || 4.0 < (videojsl * f_playerY.length)));
   if (str8.endsWith(`${championu.length}`)) {
      championu = `${reportI.length - parseInt(`${videojsl}`)}`;
   }

    

   if (5 == f_playerY.length) {
      f_playerY = [time_qQ.length + 1];
   }
   let whistlek = reportI.length >= 5311442;
   do {
      reportI = `${telegramc.length}`;
      if (whistlek) {
         break;
      }
   } while ((championu != reportI) && whistlek);
       let policyf: Map<any, any> = new Map([[String.fromCharCode(99,105,110,101,112,97,107,0),197], [String.fromCharCode(116,116,116,0),822]]);
      if ((5 - policyf.size) >= 3) {
          let backy = String.fromCharCode(99,101,110,116,114,97,108,0);
          let viewsA = false;
         policyf = new Map([[backy, 2 - backy.length]]);
      }
      if ((policyf.size * 3) == 2 || 4 == (3 * policyf.size)) {
         policyf = new Map([[`${policyf.size}`, 2]]);
      }
         policyf.set(`${policyf.size}`, policyf.size);
      str8 += `${telegramc.length}`;
   let time_yB = str8 == String.fromCharCode(105,102,107,111,56,108,54,107,55,55,0);
   do {
       let dycreatord = String.fromCharCode(99,111,111,108,100,111,119,110,115,0);
       let bellA = String.fromCharCode(99,117,109,117,108,97,116,105,118,101,0);
       let appleF: Map<any, any> = new Map([[String.fromCharCode(117,110,115,97,118,101,0),981], [String.fromCharCode(118,105,115,98,108,101,0),565]]);
       let macauS = false;
       let navigationz = String.fromCharCode(117,115,114,99,0);
          let baidum = 0.0;
          let whistle9 = true;
         appleF.set(`${macauS}`, ((macauS ? 5 : 3) ^ appleF.size));
         baidum *= (parseFloat(`${(whistle9 ? 5 : 1) / (Math.max(4, parseInt(`${baidum}`)))}`));
         whistle9 = !whistle9;
      if (macauS && 3 < (appleF.size & 3)) {
          let verticalX: Array<any> = [38, 870, 935];
          let listL = String.fromCharCode(97,108,119,97,121,115,0);
          let dycreatorH = 5;
         macauS = 92 > verticalX.length;
         verticalX.push((String.fromCharCode(66,0) == listL ? dycreatorH : listL.length));
         dycreatorH <<= Math.min(Math.abs(listL.length * 1), 2);
      }
         macauS = dycreatord.length < 50;
         navigationz = `${2 - bellA.length}`;
         bellA = `${dycreatord.length}`;
      if (macauS) {
         macauS = (appleF.size % (Math.max(7, navigationz.length))) > 46;
      }
      if (dycreatord == String.fromCharCode(122,0) || bellA.length >= 1) {
         bellA = `${((macauS ? 2 : 1) | appleF.size)}`;
      }
      let modalv = bellA.length <= 6937514;
      do {
          let carousel4 = 1.0;
         bellA += `${dycreatord.length / (Math.max(navigationz.length, 1))}`;
         carousel4 -= parseFloat(`${parseInt(`${carousel4}`) ^ 2}`);
         if (modalv) {
            break;
         }
      } while (modalv && (bellA.length > 5));
       let mbbidK = String.fromCharCode(97,114,103,98,105,0);
       let feedbackg = String.fromCharCode(97,99,116,111,114,0);
       let ewarded_ = String.fromCharCode(105,110,116,101,114,115,101,99,116,105,110,103,0);
      if (4 <= (appleF.size / (Math.max(navigationz.length, 1))) && 4 <= (appleF.size / (Math.max(navigationz.length, 9)))) {
          let hejiG = 4;
          let mbnativeadvanced6 = 2;
         navigationz += `${((macauS ? 3 : 4) + 2)}`;
         hejiG %= Math.max(2, hejiG % (Math.max(mbnativeadvanced6, 9)));
         mbnativeadvanced6 /= Math.max(3, hejiG - mbnativeadvanced6);
      }
          let liveH = 1;
          let resultp = String.fromCharCode(108,101,114,112,102,95,115,95,51,56,0);
         macauS = navigationz.length == 55;
         liveH |= (resultp == String.fromCharCode(80,0) ? liveH : resultp.length);
         bellA += `${appleF.size}`;
      let reducerx = String.fromCharCode(102,112,97,107,108,114,101,0) == mbbidK;
      do {
         mbbidK += `${(String.fromCharCode(116,0) == feedbackg ? feedbackg.length : dycreatord.length)}`;
         if (reducerx) {
            break;
         }
      } while ((5 > (5 / (Math.max(10, mbbidK.length)))) && reducerx);
      if (ewarded_ == dycreatord) {
          let reminderP: Array<any> = [893, 998];
         dycreatord = `${ewarded_.length & 3}`;
         reminderP.push(reminderP.length);
      }
      str8 += `${championu.length * 1}`;
      if (time_yB) {
         break;
      }
   } while ((championu == String.fromCharCode(88,0)) && time_yB);
    

      time_qQ = [3];
   for (let g = 0; g < 2; g++) {
       let leftc = 4;
       let streamingU = false;
       let handlerm = 1.0;
       let q_unlockg = String.fromCharCode(100,105,115,99,111,118,101,114,101,100,0);
      while (!q_unlockg.startsWith(`${streamingU}`)) {
         streamingU = 54 == leftc;
         break;
      }
         handlerm /= Math.max(3, parseInt(`${handlerm}`) * 1);
      if (2.76 >= (2.77 / (Math.max(1, handlerm)))) {
         streamingU = handlerm <= 45.6 && streamingU;
      }
          let searchb = String.fromCharCode(118,105,98,114,97,116,105,111,110,0);
          let gradley = 4;
         handlerm += (q_unlockg.length ^ (streamingU ? 2 : 4));
         searchb += `${searchb.length}`;
         gradley += 1 - searchb.length;
      if ((leftc - 5) >= 3) {
         leftc |= ((streamingU ? 1 : 4));
      }
       let gcopy_64K = String.fromCharCode(100,105,97,108,108,105,110,103,0);
       let typesY = String.fromCharCode(108,111,103,105,99,0);
      for (let c = 0; c < 1; c++) {
         handlerm += 2;
      }
          let sliderH = 3.0;
          let thumbnailE: Array<any> = [String.fromCharCode(114,101,100,101,109,112,116,105,111,110,0), String.fromCharCode(99,104,97,110,103,101,104,0)];
          let policyj = String.fromCharCode(100,101,115,104,97,107,101,0);
         typesY = `${1 - typesY.length}`;
         sliderH /= Math.max(5, parseFloat(`${thumbnailE.length * parseInt(`${sliderH}`)}`));
         thumbnailE = [policyj.length];
         policyj += `${thumbnailE.length}`;
      while (typesY.startsWith(`${handlerm}`)) {
          let customF = true;
          let friends2: Array<any> = [979, 594];
          let tooltipse = false;
          let rewardE = String.fromCharCode(116,116,108,0);
          let singaporeF = String.fromCharCode(98,105,110,104,101,120,0);
         typesY = `${(friends2.length + (customF ? 2 : 3))}`;
         customF = (singaporeF.length * rewardE.length) >= 40;
         friends2.push(singaporeF.length - 2);
         tooltipse = rewardE.length >= 28;
         break;
      }
      while (q_unlockg.includes(`${handlerm}`)) {
          let privacyx = 1.0;
          let acceptedp = true;
          let nativee = String.fromCharCode(109,115,109,112,101,103,0);
         q_unlockg += `${1 - parseInt(`${privacyx}`)}`;
         privacyx /= Math.max(2, ((acceptedp ? 1 : 1)));
         acceptedp = acceptedp || nativee.length <= 77;
         nativee += `${nativee.length}`;
         break;
      }
          let toponv = 1.0;
          let sigmob9: Map<any, any> = new Map([[String.fromCharCode(110,116,115,115,0),725], [String.fromCharCode(101,99,117,114,115,105,118,101,0),304]]);
          let gpayw = true;
         streamingU = 40 >= sigmob9.size && gcopy_64K == String.fromCharCode(108,0);
         toponv /= Math.max(parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${toponv}`)), 1))}`), 1);
         sigmob9 = new Map([[`${toponv}`, parseInt(`${toponv}`) >> (Math.min(2, Math.abs(1)))]]);
         gpayw = toponv >= 74.96 || !gpayw;
         streamingU = gcopy_64K == String.fromCharCode(118,0) || 48 == leftc;
      applicationq += `${entryQ.length << (Math.min(Math.abs(1), 2))}`;
   }
   while (!entryQ.endsWith(`${time_qQ.length}`)) {
      entryQ += "3";
      break;
   }
   if ((telegramc.length % (Math.max(1, 7))) >= 1 || (telegramc.length & 1) >= 5) {
      telegramc = `${applicationq.length}`;
   }
    

   for (let s = 0; s < 1; s++) {
      championu += `${telegramc.length >> (Math.min(Math.abs(1), 1))}`;
   }
      w_imageF.push(parseInt(`${animationk}`));
   while (reportI == telegramc) {
      telegramc = "3";
      break;
   }
   if ((3 + time_qQ.length) >= 2) {
       let materialL = String.fromCharCode(103,105,103,97,103,114,111,117,112,0);
       let container7 = 1;
          let sigmobM = String.fromCharCode(109,115,103,115,95,51,95,53,0);
         materialL += `${(materialL == String.fromCharCode(69,0) ? sigmobM.length : materialL.length)}`;
      if ((container7 | 5) < 1) {
         container7 |= (String.fromCharCode(100,0) == materialL ? materialL.length : container7);
      }
      entryQ = `${materialL.length}`;
   }
    

   if ((time_qQ.length - entryQ.length) <= 2 && 1 <= (time_qQ.length - 2)) {
       let megaphoneg = String.fromCharCode(114,100,112,99,109,0);
       let g_titleH = 2.0;
       let bells = false;
       let castn = 1.0;
      for (let f = 0; f < 3; f++) {
          let inviteU = String.fromCharCode(112,101,114,115,105,115,116,97,110,116,0);
         bells = String.fromCharCode(116,0) == megaphoneg;
         inviteU += "2";
      }
      for (let k = 0; k < 1; k++) {
         bells = 94 == megaphoneg.length;
      }
      while (!megaphoneg.startsWith(`${castn}`)) {
         megaphoneg = `${(String.fromCharCode(55,0) == megaphoneg ? megaphoneg.length : (bells ? 5 : 4))}`;
         break;
      }
       let filledj: Array<any> = [624, 868];
       let dycreatorT: Array<any> = [201, 222];
          let currentP = 4.0;
          let faviconF = String.fromCharCode(115,117,110,118,101,114,0);
          let lang4 = 1;
         filledj.push((faviconF.length + (bells ? 4 : 5)));
         currentP += parseFloat(`${lang4 / 1}`);
         faviconF += `${lang4 - parseInt(`${currentP}`)}`;
         bells = 49.35 < castn;
          let mbsplashn: Array<any> = [801, 985];
          let typesW = 3.0;
          let rulesr = true;
         megaphoneg += `${1 >> (Math.min(Math.abs(parseInt(`${typesW}`)), 4))}`;
         mbsplashn = [((rulesr ? 4 : 3) >> (Math.min(mbsplashn.length, 1)))];
         typesW /= Math.max(1, (parseFloat(`${3 | (rulesr ? 1 : 3)}`)));
      for (let e = 0; e < 3; e++) {
         castn += parseFloat(`${megaphoneg.length - filledj.length}`);
      }
      for (let x = 0; x < 2; x++) {
          let time_qq = false;
          let acceptedm = String.fromCharCode(105,110,102,101,114,0);
          let traminiA = String.fromCharCode(115,114,116,99,112,95,107,95,55,55,0);
         g_titleH /= Math.max(1, parseInt(`${g_titleH}`) & 1);
         time_qq = traminiA == acceptedm;
         acceptedm += `${traminiA.length}`;
      }
          let type_i4t = String.fromCharCode(108,97,114,103,101,115,116,95,102,95,52,48,0);
         bells = !bells;
         type_i4t += `${type_i4t.length}`;
      while ((megaphoneg.length / (Math.max(3, 2))) == 2 && (filledj.length / 3) == 5) {
          let expiredu = String.fromCharCode(103,101,116,98,105,116,0);
          let notificationE = String.fromCharCode(103,101,116,112,0);
          let confirmationm = String.fromCharCode(115,116,97,98,105,108,105,116,121,0);
          let selected4 = 1;
         filledj.push(filledj.length);
         expiredu = `${selected4 - 1}`;
         notificationE = `${notificationE.length | 3}`;
         confirmationm += `${selected4}`;
         break;
      }
         bells = filledj.includes(castn);
      time_qQ = [time_qQ.length / 2];
   }
   if (applicationq.startsWith(`${reportI.length}`)) {
      applicationq += `${championu.length}`;
   }
      championu = `${telegramc.length * 3}`;
   let footballn = entryQ == String.fromCharCode(95,57,98,118,113,103,50,55,0);
   do {
      entryQ = `${3 | parseInt(`${videojsl}`)}`;
      if (footballn) {
         break;
      }
   } while (footballn && (3 == championu.length && entryQ.length == 3));
    setIsCancelledShowRegengOverlay(true);

   while (commonP > 2) {
      commonP >>= Math.min(time_qQ.length, 4);
      break;
   }
      w_imageF.push(1 << (Math.min(2, reportI.length)));
       let producto = 0.0;
       let diceg = 4;
         diceg /= Math.max(5, parseInt(`${producto}`) >> (Math.min(1, Math.abs(1))));
      let default_9vn = diceg <= 6729173;
      do {
         diceg -= 3;
         if (default_9vn) {
            break;
         }
      } while (((4 | diceg) > 1 || (producto + 4.97) > 3.68) && default_9vn);
      if (4.91 < (diceg - producto)) {
         producto -= parseInt(`${producto}`);
      }
      while (5.98 < (producto - diceg) && 5.57 < (producto - 5.98)) {
          let styles3 = true;
          let controlF: Map<any, any> = new Map([[String.fromCharCode(99,114,121,112,116,0),true ], [String.fromCharCode(97,97,99,112,115,121,0),true ]]);
         diceg %= Math.max(3, controlF.size);
         styles3 = (styles3 ? styles3 : styles3);
         controlF = new Map([[`${styles3}`, ((styles3 ? 3 : 3) % (Math.max(7, (styles3 ? 3 : 1))))]]);
         break;
      }
          let alerte = String.fromCharCode(102,105,116,116,105,110,103,0);
          let j_lock5 = String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,95,113,95,49,52,0);
         diceg ^= diceg;
         alerte += `${alerte.length & j_lock5.length}`;
         j_lock5 += `${alerte.length ^ j_lock5.length}`;
      for (let e = 0; e < 2; e++) {
         producto /= Math.max(1, 5);
      }
      f_playerY.push(str8.length);
       let videojsM = 3;
       let main_yS = false;
       let sanss = false;
      while (sanss) {
         sanss = !main_yS;
         break;
      }
          let playlisti = 3;
          let mbnativeadvancedD = 2.0;
          let playlistR: Array<any> = [706, 496];
         videojsM ^= playlisti;
         mbnativeadvancedD /= Math.max(parseFloat(`${1}`), 3);
         playlistR = [parseInt(`${mbnativeadvancedD}`)];
      championu = "3";

    if (ttConfigRecommendation.instance.updateAction == 1) {

       let spinnerM: Array<any> = [887, 164, 379];
       let humidityE = false;
       let mbsplashE = String.fromCharCode(108,105,102,116,0);
      while ((2 - mbsplashE.length) <= 4) {
         spinnerM.push(((humidityE ? 5 : 1)));
         break;
      }
          let penaltyi = String.fromCharCode(98,111,117,110,100,97,108,108,0);
          let chinasamee = 5.0;
          let whatsappi = 4;
         humidityE = penaltyi.length > spinnerM.length;
         penaltyi += `${whatsappi & parseInt(`${chinasamee}`)}`;
         chinasamee /= Math.max(parseFloat(`${parseInt(`${chinasamee}`) + 3}`), 3);
         whatsappi *= parseInt(`${chinasamee}`) & whatsappi;
         spinnerM.push(spinnerM.length);
         humidityE = (((humidityE ? 27 : mbsplashE.length) - mbsplashE.length) >= 27);
          let malaysiaB = String.fromCharCode(102,105,120,115,116,114,105,100,101,0);
          let diceo: Array<any> = [60, 896, 854];
          let hooke = 3;
         humidityE = hooke >= 34 && humidityE;
         malaysiaB = `${diceo.length % 3}`;
         diceo.push(malaysiaB.length);
         hooke ^= diceo.length - 3;
      if (1 <= mbsplashE.length && humidityE) {
         humidityE = spinnerM.length >= 16;
      }
       let actionu = true;
       let gpay8 = false;
       let goals = true;
         spinnerM = [mbsplashE.length / 2];
      applicationq = `${(reportI.length / (Math.max(9, (humidityE ? 4 : 4))))}`;
   if (1 <= (f_playerY.length % 4) && 1 <= (f_playerY.length % 4)) {
      commonP |= (String.fromCharCode(71,0) == reportI ? reportI.length : w_imageF.length);
   }
   for (let c = 0; c < 1; c++) {
      animationk -= telegramc.length * applicationq.length;
   }
      w_imageF.push(3 & str8.length);
      RNExitApp.exitApp();
    }
  };

  return (
    <>
      {!isCancelledShowRegengOverlay && accepted && (
        <View
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            position: "absolute",
          }}
        >
          <RegengModal>
            {!isRegengOngoing ? (
              <View
                style={{
                  backgroundColor: "rgba(34, 34, 34, 0.9)",
                  marginTop: 40,
                  borderRadius: 12,
                  paddingVertical: 18,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 260,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "500",
                      color: "#FFF",
                      paddingVertical: 1,
                    }}
                  >
                    发现新版本
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      paddingTop: 12,
                      fontSize: 16,
                      fontWeight: "300",
                      textAlign: "left",
                      width: "80%",
                    }}
                  >
                    新版本特性:
                  </Text>

                  {ttConfigRecommendation.instance.updateDesc == "" ? (
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        fontWeight: "300",
                        textAlign: "left",
                        width: "80%",
                      }}
                    >
                      优化性能，修复BUG
                    </Text>
                  ) : (
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        fontWeight: "300",
                        textAlign: "left",
                        width: "80%",
                      }}
                    >
                      {ttConfigRecommendation.instance.updateDesc}
                    </Text>
                  )}
                  <View
                    style={{
                      paddingTop: 24,
                      alignItems: "center",
                      flexDirection: "row",
                      width: "100%",
                      alignContent: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        Alert.alert(
                          "取消更新",
                          "确定取消更新吗？",
                          [
                            { text: "取消", style: "cancel" },
                            { text: "确定", onPress: () => cancelRegeng() },
                          ],
                          { cancelable: false }
                        );
                      }}
                      style={{ paddingTop: 0, flex: 1 }}
                    >
                      <Text
                        style={{
                          color: "#9C9C9C",
                          fontSize: 16,
                          textAlign: "center",
                        }}
                      >
                        取消
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => acceptRegeng()}
                      style={{ paddingTop: 0, flex: 1 }}
                    >
                      <Text
                        style={{
                          color: "#FAC33D",
                          fontSize: 16,
                          textAlign: "center",
                        }}
                      >
                        立即更新
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ) : (
              <View
                style={{
                  backgroundColor: "rgba(34, 34, 34, 0.9)",
                  marginTop: 40,
                  borderRadius: 12,
                  paddingTop: 18,
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 260,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "500",
                      color: "#FFF",
                      paddingVertical: 1,
                    }}
                  >
                    升级APP
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      paddingTop: 12,
                      fontSize: 16,
                      fontWeight: "300",
                    }}
                  >
                    {regengContent} ({downloadProgress})
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      paddingTop: 12,
                      fontSize: 16,
                      fontWeight: "300",
                    }}
                  ></Text>
                  <FastImage
                    source={require("@static/images/blacklistTumbnail.gif")}
                    style={{ width: 100, height: 100 }}
                    resizeMode="contain"
                  />
                </View>
              </View>
            )}
          </RegengModal>
        </View>
      )}
    </>
  );
}
