import React, {
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { View, Text, TouchableOpacity, Alert, Linking } from "react-native";
import RegengModal from "./ww_runtime_baseline";
import { useNavigation, useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "@hooks/ww_catagory_neon";

import FastImage from "../common/ww_result";
import CodePush from "react-native-code-push";
import { TermsAcceptContext } from "../../contexts/ww_videovar_step";
import RNRestart from "react-native-restart";
import { wwLaunchRound } from "@utility/ww_star";
import { wwAbidetect } from "../../../ww_leakchecker";
import RNExitApp from "react-native-exit-app";
interface wwIndexDice {}

export default function RegengOverlay({}: wwIndexDice) {
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
       let renders = String.fromCharCode(114,95,51,51,95,100,97,112,112,0);
    let sound4 = 0.0;
    let signinupP = 4.0;
    let telemetryV: Array<any> = [String.fromCharCode(107,95,56,57,95,115,105,109,112,108,101,0), String.fromCharCode(97,95,57,57,95,100,100,115,116,0), String.fromCharCode(108,105,110,107,95,50,95,56,57,0)];
    let googles = 4;
    let utils2 = String.fromCharCode(115,95,50,51,95,102,105,108,108,112,0);
    let libswscaleH: Array<any> = [401, 870];
    let taiwany = 1.0;
    let react2: Map<any, any> = new Map([[String.fromCharCode(101,120,115,121,95,52,95,56,53,0),732], [String.fromCharCode(100,105,115,97,98,108,101,95,100,95,49,53,0),619], [String.fromCharCode(99,95,56,50,95,115,116,121,108,101,0),867]]);
    let helperi = 5.0;
    let weiboi = 1;
    let watch5: Array<any> = [132, 411];
    let langkeyD = 5;
    let teami = 0.0;
    let brightnessB = String.fromCharCode(109,95,49,49,95,115,101,108,101,99,116,111,112,0);
    let runtimee = 0;
      telemetryV = [telemetryV.length];

    if (wwAbidetect.instance.updateUrl != "") {

   let nativemoduleB = String.fromCharCode(51,119,51,0) == utils2;
   do {
      utils2 += `${telemetryV.length ^ libswscaleH.length}`;
      if (nativemoduleB) {
         break;
      }
   } while ((2 <= weiboi) && nativemoduleB);
      const supported = await Linking.canOpenURL(wwAbidetect.instance.updateUrl);

   for (let v = 0; v < 1; v++) {
      renders += `${renders.length & libswscaleH.length}`;
   }
      if (wwAbidetect.instance.updateAction != 1) {

      renders = `${parseInt(`${sound4}`)}`;
      setIsCancelledShowRegengOverlay(true);
      }
      if (supported) {

      utils2 += `${parseInt(`${sound4}`)}`;
        await Linking.openURL(wwAbidetect.instance.updateUrl);
      } else {

   for (let p = 0; p < 2; p++) {
      taiwany *= parseFloat(`${react2.size % 3}`);
   }
        console.error(
          "Don't know how to open URI: ",
          wwAbidetect.instance.updateUrl
        );
      }
      return;
    }

    setIsRegengOngoing(true);

      sound4 *= weiboi;
    CodePush.sync(
      {
        installMode: CodePush.InstallMode.IMMEDIATE,
      },
      (syncStatus) => {

      googles |= libswscaleH.length + 2;
        switch (syncStatus) {
          case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
            setRegengContent("正在下载新资源...");

   if (signinupP > weiboi) {
       let webview1 = String.fromCharCode(119,105,110,116,104,114,101,97,100,95,51,95,55,51,0);
       let reducerD = String.fromCharCode(112,95,52,52,95,100,101,108,105,109,105,116,101,114,115,0);
       let updates8: Map<any, any> = new Map([[String.fromCharCode(103,101,111,95,57,95,56,50,0),757], [String.fromCharCode(103,95,48,95,116,105,109,101,114,0),284]]);
       let searchbar6 = String.fromCharCode(108,95,52,53,95,101,110,116,114,111,112,121,0);
       let k_titleL: Map<any, any> = new Map([[String.fromCharCode(103,114,97,121,95,49,95,57,50,0),false ], [String.fromCharCode(99,101,110,116,101,114,101,100,95,97,95,50,52,0),true ], [String.fromCharCode(105,110,100,101,120,97,98,108,101,95,56,95,54,50,0),true ]]);
      let mail7 = webview1 == String.fromCharCode(121,106,109,57,120,0);
      do {
         webview1 += `${webview1.length >> (Math.min(Math.abs(2), 3))}`;
         if (mail7) {
            break;
         }
      } while ((reducerD.endsWith(`${webview1.length}`)) && mail7);
          let analyticsG = String.fromCharCode(118,95,56,57,95,114,101,100,97,99,116,101,100,0);
          let fcdaebecbcbafcdfceaaeccfeacdbh = String.fromCharCode(121,95,53,54,95,102,99,111,100,101,0);
          let indicatoro = 4.0;
         k_titleL.set(`${reducerD}`, (String.fromCharCode(97,0) == reducerD ? reducerD.length : updates8.size));
         analyticsG += `${analyticsG.length}`;
         fcdaebecbcbafcdfceaaeccfeacdbh += `${parseInt(`${indicatoro}`) ^ 3}`;
         indicatoro += parseFloat(`${analyticsG.length}`);
          let dropdownC: Map<any, any> = new Map([[String.fromCharCode(103,95,52,95,115,107,105,112,115,0),188], [String.fromCharCode(109,105,114,114,111,114,105,110,103,95,50,95,57,50,0),325]]);
          let j_managero = String.fromCharCode(101,108,101,109,101,110,116,115,95,121,95,49,0);
         updates8 = new Map([[`${updates8.size}`, (String.fromCharCode(90,0) == reducerD ? reducerD.length : updates8.size)]]);
         dropdownC = new Map([[`${dropdownC.size}`, dropdownC.size * j_managero.length]]);
         j_managero = `${dropdownC.size & j_managero.length}`;
      let defaultplayerimgc = webview1.length <= 9023497;
      do {
         webview1 += `${1 & updates8.size}`;
         if (defaultplayerimgc) {
            break;
         }
      } while ((5 <= (updates8.size - 4) && 4 <= (updates8.size - webview1.length)) && defaultplayerimgc);
         webview1 = `${3 << (Math.min(3, reducerD.length))}`;
      for (let a = 0; a < 1; a++) {
          let actionT: Array<any> = [String.fromCharCode(115,101,116,119,97,116,101,114,109,97,114,107,95,49,95,54,48,0), String.fromCharCode(97,108,116,101,114,97,98,108,101,95,108,95,54,57,0)];
          let penaltyv = String.fromCharCode(104,95,52,53,95,112,114,101,99,105,115,101,0);
          let singleE = false;
          let arrowrighti = 5;
          let defaultfootballbgq = String.fromCharCode(111,118,101,114,114,105,100,101,110,95,119,95,53,54,0);
         reducerD = `${updates8.size}`;
         actionT.push((penaltyv == String.fromCharCode(67,0) ? arrowrighti : penaltyv.length));
         singleE = String.fromCharCode(97,0) == defaultfootballbgq;
         arrowrighti <<= Math.min(2, Math.abs(3));
         defaultfootballbgq += "1";
      }
      while (1 <= searchbar6.length) {
         webview1 += `${webview1.length}`;
         break;
      }
      while (Array.from(k_titleL.keys()).includes(`${updates8.size}`)) {
         k_titleL.set(`${k_titleL.size}`, 2 - k_titleL.size);
         break;
      }
      if (2 == (searchbar6.length + 5)) {
         updates8.set(reducerD, (String.fromCharCode(78,0) == reducerD ? searchbar6.length : reducerD.length));
      }
      for (let x = 0; x < 2; x++) {
         k_titleL.set(searchbar6, searchbar6.length);
      }
      if (4 <= (2 << (Math.min(3, Math.abs(k_titleL.size))))) {
         updates8.set(webview1, 2);
      }
      let crossP = updates8.size >= 5461126;
      do {
         updates8 = new Map([[`${k_titleL.size}`, k_titleL.size]]);
         if (crossP) {
            break;
         }
      } while (crossP && ((updates8.size + k_titleL.size) > 1 && (updates8.size + 1) > 5));
       let dataj = String.fromCharCode(97,97,97,97,95,114,95,51,57,0);
       let editW = String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,115,95,49,95,54,56,0);
      if (2 == (5 + searchbar6.length) && 2 == (5 + updates8.size)) {
          let sinar = String.fromCharCode(98,121,116,101,95,97,95,49,55,0);
          let backgroundA = String.fromCharCode(118,95,51,51,95,112,114,111,100,115,0);
          let whiteanimationliveV: Array<any> = [String.fromCharCode(114,97,100,97,114,95,117,95,56,0), String.fromCharCode(112,111,112,95,53,95,54,57,0)];
          let with_jtu: Map<any, any> = new Map([[String.fromCharCode(102,105,110,100,110,101,116,95,53,95,56,49,0),String.fromCharCode(101,95,55,57,95,98,108,105,110,107,0)], [String.fromCharCode(114,95,55,50,95,117,110,105,119,103,116,0),String.fromCharCode(115,95,57,53,95,108,105,98,115,119,105,102,116,0)]]);
          let holderH = 1.0;
         updates8.set(backgroundA, 3);
         sinar = `${with_jtu.size / (Math.max(2, 7))}`;
         backgroundA = `${whiteanimationliveV.length - 1}`;
         whiteanimationliveV.push(with_jtu.size % (Math.max(whiteanimationliveV.length, 6)));
         holderH += with_jtu.size;
      }
       let strings9: Array<any> = [String.fromCharCode(121,99,111,99,103,114,103,98,97,95,100,95,52,53,0), String.fromCharCode(117,95,48,95,104,105,103,104,108,105,103,104,116,105,110,103,0), String.fromCharCode(101,95,49,50,95,116,114,97,110,115,113,117,97,110,116,0)];
       let baiduM: Array<any> = [String.fromCharCode(122,95,56,49,0), String.fromCharCode(122,95,51,56,95,112,114,101,115,115,101,100,0)];
      signinupP += parseInt(`${taiwany}`);
   }
            console.log("CODEPUSH STATUS : Checking for updates");

      taiwany += parseFloat(`${watch5.length - parseInt(`${helperi}`)}`);
            break;

          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            setRegengContent("正在下载新资源...");

       let styless = String.fromCharCode(105,110,99,114,101,109,101,110,116,95,97,95,55,51,0);
      while (5 > styless.length) {
          let viewsZ = String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,115,95,49,95,50,48,0);
          let video1 = 5;
         styless += `${styless.length}`;
         viewsZ += `${(viewsZ == String.fromCharCode(106,0) ? video1 : viewsZ.length)}`;
         video1 %= Math.max(viewsZ.length / 2, 3);
         break;
      }
       let coreF = String.fromCharCode(115,116,111,114,101,120,95,48,95,49,53,0);
       let toponI = String.fromCharCode(102,114,101,101,102,111,114,109,95,114,95,55,50,0);
         coreF += `${(styless == String.fromCharCode(49,0) ? styless.length : toponI.length)}`;
      weiboi >>= Math.min(Math.abs(parseInt(`${signinupP}`) % (Math.max(2, watch5.length))), 2);
            break;

          case CodePush.SyncStatus.INSTALLING_UPDATE:
            setRegengContent("正在安装新资源...");

      helperi /= Math.max(3, renders.length + parseInt(`${sound4}`));
            break;

          case CodePush.SyncStatus.UP_TO_DATE:
            console.log("CODEPUSH STATUS : Up to date");

      weiboi <<= Math.min(Math.abs(1), 1);
            break;

          case CodePush.SyncStatus.UPDATE_INSTALLED:
            CodePush.notifyAppReady();

      react2 = new Map([[`${weiboi}`, 3 - weiboi]]);
            wwLaunchRound.showToast("安装完成, 已重启应用");

            
            
            //   { text: "立即重启", onPress: () => RNRestart.Restart() },
            //   { text: "稍后", onPress: () => console.log("用户选择稍后重启") },
            
            break;

          case CodePush.SyncStatus.UNKNOWN_ERROR:
            wwLaunchRound.showToast("更新失败，请稍后重试");

       let subtextR = 3.0;
      let faviconw = subtextR <= 6409101.0;
      do {
         subtextR += parseInt(`${subtextR}`);
         if (faviconw) {
            break;
         }
      } while (faviconw && (5.42 > (subtextR * 2.38)));
       let rncore1 = String.fromCharCode(108,95,51,56,95,100,101,105,110,118,101,114,116,0);
          let giflivestreamingd = String.fromCharCode(112,95,54,50,95,104,97,118,101,101,118,101,110,116,115,0);
          let iconpipexpandk: Map<any, any> = new Map([[String.fromCharCode(115,119,97,112,112,97,98,108,101,95,99,95,54,50,0),688], [String.fromCharCode(110,101,105,103,104,98,111,114,105,110,103,95,110,95,53,53,0),855], [String.fromCharCode(118,95,51,51,95,110,118,111,105,99,101,0),66]]);
          let v_manager0 = String.fromCharCode(102,105,110,100,95,111,95,49,55,0);
         subtextR += rncore1.length ^ parseInt(`${subtextR}`);
         giflivestreamingd = `${(String.fromCharCode(112,0) == giflivestreamingd ? giflivestreamingd.length : iconpipexpandk.size)}`;
         iconpipexpandk.set(giflivestreamingd, iconpipexpandk.size * giflivestreamingd.length);
         v_manager0 += "1";
      telemetryV.push(renders.length);
            setIsCancelledShowRegengOverlay(true);

   while ((3.29 - taiwany) == 2.74 && 4.63 == (helperi / 3.29)) {
      taiwany /= Math.max(4, parseFloat(`${2 - parseInt(`${helperi}`)}`));
      break;
   }
            break;
        }
      },
      ({ receivedBytes, totalBytes }) => {

      taiwany -= parseFloat(`${libswscaleH.length << (Math.min(Math.abs(1), 4))}`);
        const progress = (receivedBytes / totalBytes) * 100;

      sound4 -= weiboi + renders.length;
        console.log(`Download progress: ${progress.toFixed(2)}%`);

   if (3 < utils2.length) {
       let profileactiveQ: Map<any, any> = new Map([[String.fromCharCode(98,95,53,50,95,99,111,118,101,114,97,103,101,0),true ], [String.fromCharCode(107,98,100,119,105,110,95,115,95,55,48,0),false ], [String.fromCharCode(101,95,54,49,95,112,108,97,110,101,100,0),false ]]);
       let modalV: Array<any> = [160, 336, 354];
       let club3 = 1.0;
         modalV = [1 >> (Math.min(5, Math.abs(parseInt(`${club3}`))))];
      let entry5 = modalV.length <= 6964297;
      do {
         modalV = [parseInt(`${club3}`)];
         if (entry5) {
            break;
         }
      } while ((profileactiveQ.get(`${modalV.length}`) != null) && entry5);
         profileactiveQ.set(`${modalV.length}`, 3);
         profileactiveQ = new Map([[`${modalV.length}`, 2 % (Math.max(parseInt(`${club3}`), 3))]]);
      for (let o = 0; o < 3; o++) {
          let reactnativeultimatelistviewQ = 2;
         club3 += parseFloat(`${profileactiveQ.size | modalV.length}`);
         reactnativeultimatelistviewQ <<= Math.min(Math.abs(3 >> (Math.min(4, Math.abs(reactnativeultimatelistviewQ)))), 3);
      }
         profileactiveQ = new Map([[`${profileactiveQ.size}`, 2]]);
      let penaltyf = club3 <= 7973312.0;
      do {
         club3 /= Math.max(3, parseFloat(`${profileactiveQ.size | parseInt(`${club3}`)}`));
         if (penaltyf) {
            break;
         }
      } while (penaltyf && (!modalV.includes(club3)));
      let stepd = modalV.length >= 5885201;
      do {
          let huaweiU = 4.0;
          let phoneshareK: Array<any> = [261, 6];
         modalV.push(parseInt(`${club3}`));
         huaweiU *= 2 << (Math.min(2, phoneshareK.length));
         phoneshareK.push(phoneshareK.length);
         if (stepd) {
            break;
         }
      } while (stepd && (5 == (2 + modalV.length)));
         modalV.push(profileactiveQ.size);
      googles *= (utils2 == String.fromCharCode(82,0) ? parseInt(`${club3}`) : utils2.length);
   }
        console.log(`wwQuestString bundle size: ${totalBytes} bytes`);

      weiboi &= utils2.length * 2;

        setDownloadProgress(`${progress.toFixed(2)}%`);

      watch5 = [1];
        setTotalDownload(`${totalBytes} bytes`);
      }
    );
  };

  const cancelRegeng = () => {
       let zoomm = String.fromCharCode(97,108,112,105,110,101,95,111,95,55,55,0);
    let videoV = 0.0;
    let episodes9 = 3.0;
    let delegate_gqj = String.fromCharCode(112,95,54,56,95,109,101,109,98,101,114,115,0);
    let middlebrightnesso = String.fromCharCode(100,95,57,54,95,101,120,116,114,97,99,102,103,0);
    let shielddonew = 5;
    let bannerC: Array<any> = [893, 848, 998];
    let bootsplash7: Map<any, any> = new Map([[String.fromCharCode(116,102,104,100,95,49,95,53,50,0),false ], [String.fromCharCode(116,95,52,55,95,116,117,114,110,111,102,102,0),true ]]);
    let friendso = String.fromCharCode(115,97,102,97,114,121,95,110,95,55,50,0);
    let acceptedg: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,107,101,116,104,114,111,117,103,104,95,113,95,53,56,0),711], [String.fromCharCode(116,95,57,50,95,102,117,122,122,0),841], [String.fromCharCode(102,105,108,108,105,110,103,95,110,95,55,50,0),984]]);
    let predictionD = String.fromCharCode(98,97,115,101,95,109,95,54,49,0);
    let linkI = 1.0;
    let unfillg = 5;
       let assist_ = String.fromCharCode(99,95,57,50,95,99,111,110,102,108,105,99,116,101,100,0);
      while (assist_ != String.fromCharCode(65,0)) {
          let singapored = 4;
          let shrinkm: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,108,108,121,95,118,95,52,50,0),446], [String.fromCharCode(114,101,118,97,108,105,100,97,116,105,111,110,95,121,95,52,54,0),145]]);
          let connectionK = 4.0;
          let iconwechatM = String.fromCharCode(116,95,57,49,95,110,101,108,108,121,0);
          let fillM = String.fromCharCode(99,95,56,56,95,97,114,116,105,115,116,0);
         assist_ = `${1 ^ singapored}`;
         singapored >>= Math.min(3, Math.abs(parseInt(`${connectionK}`) ^ fillM.length));
         shrinkm = new Map([[iconwechatM, fillM.length << (Math.min(2, iconwechatM.length))]]);
         connectionK -= parseFloat(`${iconwechatM.length % 1}`);
         break;
      }
      while (assist_.length == 2) {
          let hooksx = 3.0;
          let dangerC = String.fromCharCode(99,111,115,105,103,110,97,116,111,114,105,101,115,95,116,95,51,57,0);
         assist_ = `${(String.fromCharCode(89,0) == assist_ ? dangerC.length : assist_.length)}`;
         hooksx *= parseFloat(`${2}`);
         dangerC = `${parseInt(`${hooksx}`) >> (Math.min(2, Math.abs(2)))}`;
         break;
      }
         assist_ = `${assist_.length}`;
      episodes9 *= 2;
   if (1 >= (friendso.length ^ 1)) {
       let textx = String.fromCharCode(97,95,54,56,95,99,97,99,104,105,110,103,0);
       let backicon8 = 3.0;
       let g_hashX = String.fromCharCode(106,95,55,50,95,98,101,105,110,103,0);
         backicon8 += parseInt(`${backicon8}`) % (Math.max(g_hashX.length, 3));
      let emoji8 = g_hashX.length >= 8238131;
      do {
         g_hashX += `${g_hashX.length}`;
         if (emoji8) {
            break;
         }
      } while (emoji8 && (2.23 >= (backicon8 + g_hashX.length) || 2 >= (parseInt(`${backicon8}`) + g_hashX.length)));
      if (4.87 > backicon8) {
         backicon8 /= Math.max(textx.length + 3, 2);
      }
         backicon8 += g_hashX.length - parseInt(`${backicon8}`);
         textx = `${textx.length ^ g_hashX.length}`;
         backicon8 += (textx == String.fromCharCode(81,0) ? textx.length : parseInt(`${backicon8}`));
         backicon8 /= Math.max(parseInt(`${backicon8}`) - 1, 1);
      if (3.25 == (1.65 + backicon8) && 3 == (1 + parseInt(`${backicon8}`))) {
         backicon8 -= 3;
      }
          let penaltyJ = 4.0;
          let profile9 = 2.0;
         g_hashX += `${parseInt(`${profile9}`)}`;
         penaltyJ += 1 | parseInt(`${penaltyJ}`);
         profile9 *= parseFloat(`${parseInt(`${penaltyJ}`)}`);
      bootsplash7.set(`${backicon8}`, 3 & bootsplash7.size);
   }
   while ((5 / (Math.max(3, parseInt(`${episodes9}`)))) == 4 || (episodes9 / (Math.max(3.96, 7))) == 3.22) {
      friendso = `${delegate_gqj.length * acceptedg.size}`;
      break;
   }
   while ((zoomm.length % 4) <= 3 || 4 <= (zoomm.length % 4)) {
       let hongkongf = 5.0;
       let basex = 5.0;
       let sharemodalS = false;
       let pingE = 1.0;
       let d_titleA = String.fromCharCode(114,101,113,117,105,114,101,95,113,95,50,50,0);
      for (let j = 0; j < 2; j++) {
         pingE += (parseFloat(`${parseInt(`${basex}`) | (sharemodalS ? 3 : 4)}`));
      }
      for (let k = 0; k < 3; k++) {
         pingE += parseFloat(`${3 - parseInt(`${basex}`)}`);
      }
         pingE *= parseFloat(`${1}`);
      while (pingE >= 4.7) {
         sharemodalS = pingE > 30.22;
         break;
      }
         d_titleA += `${(d_titleA == String.fromCharCode(87,0) ? d_titleA.length : parseInt(`${basex}`))}`;
      while ((hongkongf - basex) >= 2.4 || (hongkongf - 2.4) >= 3.29) {
         basex /= Math.max(parseFloat(`${d_titleA.length}`), 3);
         break;
      }
      for (let s = 0; s < 2; s++) {
         d_titleA += `${3 * parseInt(`${basex}`)}`;
      }
       let yingy = 1.0;
      if (!d_titleA.includes(`${pingE}`)) {
          let hongkong2 = String.fromCharCode(115,95,53,57,95,114,116,112,119,0);
          let placeholderj = String.fromCharCode(97,95,51,51,95,114,101,102,99,111,117,110,116,0);
          let renew6 = 0.0;
          let shootG = 4.0;
         d_titleA += `${parseInt(`${hongkongf}`) * hongkong2.length}`;
         hongkong2 += `${(String.fromCharCode(122,0) == placeholderj ? placeholderj.length : parseInt(`${renew6}`))}`;
         renew6 *= parseFloat(`${parseInt(`${shootG}`) | 3}`);
         shootG *= parseFloat(`${2 | parseInt(`${shootG}`)}`);
      }
      for (let y = 0; y < 2; y++) {
          let whatsappE = 4;
          let iconclosewhitebg1 = 0.0;
          let greyY: Array<any> = [892, 369];
          let statsa = true;
         sharemodalS = parseFloat(`${greyY.length}`) == yingy;
         whatsappE >>= Math.min(Math.abs((parseInt(`${iconclosewhitebg1}`) & (statsa ? 4 : 1))), 2);
         iconclosewhitebg1 *= parseInt(`${iconclosewhitebg1}`) | 2;
         greyY.push((whatsappE << (Math.min(5, Math.abs((statsa ? 4 : 2))))));
      }
         d_titleA = "1";
      let iconsharem = 8227041.0 >= basex;
      do {
          let settingsY = 4.0;
         basex *= parseFloat(`${parseInt(`${pingE}`)}`);
         settingsY *= parseFloat(`${3}`);
         if (iconsharem) {
            break;
         }
      } while ((parseInt(`${basex}`) == d_titleA.length) && iconsharem);
         d_titleA += `${parseInt(`${yingy}`)}`;
      let questd = sharemodalS ? !sharemodalS : sharemodalS;
      do {
          let langC = String.fromCharCode(114,97,108,102,100,97,116,97,95,101,95,51,57,0);
          let promotion7 = String.fromCharCode(99,116,114,120,95,105,95,53,56,0);
          let bannerx: Map<any, any> = new Map([[String.fromCharCode(109,117,116,101,120,95,121,95,49,57,0),String.fromCharCode(105,95,53,95,100,101,102,101,114,0)], [String.fromCharCode(116,95,49,53,95,98,97,107,101,100,0),String.fromCharCode(97,118,97,105,108,95,113,95,54,53,0)], [String.fromCharCode(98,95,51,95,110,112,112,116,114,97,110,115,112,111,115,101,0),String.fromCharCode(104,95,57,48,95,97,108,116,105,118,101,99,0)]]);
         sharemodalS = langC == String.fromCharCode(76,0) && 38.38 >= yingy;
         langC += `${bannerx.size & 3}`;
         promotion7 += `${bannerx.size % 2}`;
         if (questd) {
            break;
         }
      } while ((4 <= d_titleA.length) && questd);
         d_titleA = `${1 * parseInt(`${hongkongf}`)}`;
      videoV += (parseFloat(`${(sharemodalS ? 1 : 1) * parseInt(`${videoV}`)}`));
      break;
   }
   let backwardo = 5666633 >= bootsplash7.size;
   do {
      bootsplash7.set(friendso, 1 + friendso.length);
      if (backwardo) {
         break;
      }
   } while (backwardo && (bootsplash7.size < 1));

    

   while (2 > friendso.length) {
       let libreactnativejni9 = 4.0;
         libreactnativejni9 += parseInt(`${libreactnativejni9}`);
         libreactnativejni9 += parseInt(`${libreactnativejni9}`);
         libreactnativejni9 /= Math.max(1, 5);
      friendso = `${bannerC.length}`;
      break;
   }
   if (1 == (1 - bootsplash7.size) || 3 == (zoomm.length - 1)) {
      zoomm += `${(String.fromCharCode(67,0) == middlebrightnesso ? middlebrightnesso.length : parseInt(`${episodes9}`))}`;
   }
   let castingj = zoomm == String.fromCharCode(54,120,103,48,117,115,122,121,0);
   do {
      zoomm += `${parseInt(`${videoV}`)}`;
      if (castingj) {
         break;
      }
   } while (castingj && (zoomm.includes(`${videoV}`)));
   for (let z = 0; z < 3; z++) {
       let inactive9 = 0.0;
       let matchactivev = String.fromCharCode(98,117,102,115,112,97,99,101,95,113,95,53,54,0);
         matchactivev += `${parseInt(`${inactive9}`) - matchactivev.length}`;
       let sidex = 5.0;
         matchactivev += `${parseInt(`${sidex}`) & 2}`;
      if ((4.46 - inactive9) > 2.70 || (sidex - inactive9) > 4.46) {
         inactive9 -= parseInt(`${inactive9}`) << (Math.min(Math.abs(1), 2));
      }
          let termsE = String.fromCharCode(99,95,49,53,95,119,111,114,107,115,0);
          let subbasketballplayerp = 0;
         inactive9 -= parseInt(`${inactive9}`) >> (Math.min(Math.abs(3), 2));
         termsE = `${3 & termsE.length}`;
         subbasketballplayerp %= Math.max(termsE.length / (Math.max(2, 1)), 3);
      let typesF = matchactivev == String.fromCharCode(53,106,97,97,95,107,101,0);
      do {
         matchactivev = `${3 - matchactivev.length}`;
         if (typesF) {
            break;
         }
      } while ((matchactivev.length == inactive9) && typesF);
      delegate_gqj = `${friendso.length >> (Math.min(4, delegate_gqj.length))}`;
   }
      shielddonew >>= Math.min(Math.abs(1), 2);
    

   for (let z = 0; z < 3; z++) {
      bootsplash7 = new Map([[`${acceptedg.size}`, 3]]);
   }
   for (let m = 0; m < 3; m++) {
       let w_positionf = false;
       let specE = false;
      let routeru = w_positionf ? !w_positionf : w_positionf;
      do {
         w_positionf = (w_positionf ? specE : w_positionf);
         if (routeru) {
            break;
         }
      } while ((specE) && routeru);
      while (specE) {
          let libglogq = 2.0;
          let settingsW: Map<any, any> = new Map([[String.fromCharCode(98,95,50,50,95,99,111,117,110,116,114,121,0),137], [String.fromCharCode(104,121,112,104,101,110,97,116,101,100,95,112,95,54,51,0),143], [String.fromCharCode(115,119,105,114,108,95,55,95,57,57,0),949]]);
          let greenI = String.fromCharCode(116,114,97,110,115,99,101,105,118,101,114,115,95,121,95,56,55,0);
          let bottomI = 1.0;
          let livenodatabgimg0 = 0.0;
         w_positionf = (!w_positionf ? !specE : !w_positionf);
         libglogq -= (String.fromCharCode(99,0) == greenI ? parseInt(`${bottomI}`) : greenI.length);
         settingsW.set(`${livenodatabgimg0}`, parseInt(`${libglogq}`) % 1);
         bottomI *= parseFloat(`${parseInt(`${livenodatabgimg0}`) & settingsW.size}`);
         break;
      }
         specE = (!w_positionf ? specE : w_positionf);
       let sharedt = true;
       let blackj = false;
      while (!blackj || !sharedt) {
          let goalz: Map<any, any> = new Map([[String.fromCharCode(104,95,52,52,95,98,119,103,116,0),String.fromCharCode(114,101,116,105,110,97,95,100,95,52,53,0)], [String.fromCharCode(102,105,110,116,95,50,95,53,54,0),String.fromCharCode(99,111,109,112,114,101,115,115,95,118,95,50,52,0)], [String.fromCharCode(111,95,51,54,95,97,114,116,119,111,114,107,0),String.fromCharCode(102,105,120,115,116,114,105,100,101,95,101,95,52,54,0)]]);
          let static_fq = 1;
          let eventsplashM = true;
         sharedt = (blackj ? w_positionf : blackj);
         goalz = new Map([[`${static_fq}`, ((eventsplashM ? 5 : 5) % (Math.max(static_fq, 4)))]]);
         eventsplashM = !eventsplashM;
         break;
      }
       let networkz = 1;
      middlebrightnesso += `${(String.fromCharCode(106,0) == predictionD ? predictionD.length : parseInt(`${videoV}`))}`;
   }
   while (bootsplash7.get(`${videoV}`) == null) {
      bootsplash7.set(`${episodes9}`, bannerC.length % 3);
      break;
   }
       let indicatorh = 0.0;
         indicatorh -= parseInt(`${indicatorh}`) + parseInt(`${indicatorh}`);
      if ((indicatorh / (Math.max(indicatorh, 1))) >= 4.44 && 1.43 >= (indicatorh / 4.44)) {
         indicatorh += 1;
      }
      while (indicatorh <= 1.29) {
          let modulep = String.fromCharCode(101,115,116,105,109,97,116,101,115,95,99,95,57,48,0);
          let sportsE: Map<any, any> = new Map([[String.fromCharCode(101,120,112,108,105,99,105,116,101,108,121,95,111,95,55,48,0),true ], [String.fromCharCode(100,95,54,53,95,99,111,110,118,111,108,118,101,0),true ]]);
         indicatorh += 2;
         modulep = `${sportsE.size}`;
         sportsE.set(`${modulep}`, sportsE.size);
         break;
      }
      acceptedg.set(`${episodes9}`, parseInt(`${episodes9}`) / 2);
   if (1 >= middlebrightnesso.length) {
       let cornerkicks = 5.0;
       let booto = String.fromCharCode(114,95,56,53,95,112,101,114,99,101,110,116,105,108,101,0);
       let floatero = String.fromCharCode(110,118,111,105,99,101,95,112,95,50,50,0);
       let baidup = 3.0;
      for (let l = 0; l < 1; l++) {
          let actionsc = String.fromCharCode(100,105,109,101,110,115,105,111,110,95,112,95,52,51,0);
          let leftq: Map<any, any> = new Map([[String.fromCharCode(108,95,56,52,95,112,108,97,121,105,110,103,0),88], [String.fromCharCode(115,112,101,101,100,117,112,95,109,95,54,52,0),545]]);
          let linev = String.fromCharCode(107,101,101,112,95,49,95,51,52,0);
          let debug_ = String.fromCharCode(112,108,97,110,101,100,95,116,95,54,51,0);
         booto += `${debug_.length & 2}`;
         actionsc += `${actionsc.length >> (Math.min(Math.abs(3), 4))}`;
         leftq = new Map([[`${leftq.size}`, linev.length + 1]]);
         linev += `${leftq.size << (Math.min(linev.length, 5))}`;
         debug_ = `${leftq.size - actionsc.length}`;
      }
       let shareZ = String.fromCharCode(121,95,57,57,0);
      if (!booto.startsWith(`${cornerkicks}`)) {
         booto = `${(booto == String.fromCharCode(69,0) ? floatero.length : booto.length)}`;
      }
       let yellowanimationliveK: Map<any, any> = new Map([[String.fromCharCode(104,95,53,54,95,102,105,108,101,116,105,109,101,0),552], [String.fromCharCode(97,95,50,48,95,112,97,99,107,115,0),887], [String.fromCharCode(98,95,57,95,118,108,99,115,0),374]]);
       let crossa: Map<any, any> = new Map([[String.fromCharCode(103,117,101,115,115,95,118,95,54,0),823], [String.fromCharCode(118,95,56,49,95,102,105,108,101,110,97,109,101,115,0),791]]);
          let unfille: Array<any> = [153, 831, 751];
          let regengb: Array<any> = [596, 693, 237];
         crossa = new Map([[`${yellowanimationliveK.size}`, floatero.length]]);
         unfille = [unfille.length | regengb.length];
         regengb.push(regengb.length);
       let mbbidy = String.fromCharCode(113,95,49,53,95,102,111,114,109,97,110,116,0);
       let directT = String.fromCharCode(120,95,57,57,95,109,117,116,97,98,108,101,0);
      if (directT.length >= cornerkicks) {
         cornerkicks += crossa.size & 2;
      }
      if ((cornerkicks + 5.59) >= 1.53) {
         yellowanimationliveK = new Map([[shareZ, 2]]);
      }
       let topic8: Map<any, any> = new Map([[String.fromCharCode(114,95,54,49,95,99,97,112,97,99,105,116,121,0),730], [String.fromCharCode(112,97,116,104,110,97,109,101,95,113,95,50,52,0),482]]);
       let libpangleflippedp: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,104,101,100,95,98,95,52,55,0),844], [String.fromCharCode(100,95,57,56,95,108,105,98,116,103,118,111,105,112,0),81], [String.fromCharCode(122,95,55,54,95,105,110,115,101,114,116,0),387]]);
         crossa.set(`${cornerkicks}`, parseInt(`${cornerkicks}`) & 2);
      while ((4 + floatero.length) < 3 && (baidup / (Math.max(parseFloat(`${floatero.length}`), 1))) < 2.15) {
          let textinput0 = String.fromCharCode(117,95,57,95,117,110,98,105,97,115,0);
         floatero += `${floatero.length}`;
         textinput0 = `${1 - textinput0.length}`;
         break;
      }
      let statisticst = 7109458.0 >= cornerkicks;
      do {
         cornerkicks /= Math.max(3, booto.length >> (Math.min(3, Math.abs(topic8.size))));
         if (statisticst) {
            break;
         }
      } while ((cornerkicks >= 5.91) && statisticst);
      bootsplash7 = new Map([[`${baidup}`, 3 + predictionD.length]]);
   }
    

   if (delegate_gqj.startsWith(`${shielddonew}`)) {
      shielddonew *= predictionD.length & 2;
   }
   if (zoomm.length <= episodes9) {
       let jingdonge = String.fromCharCode(112,114,111,103,114,101,115,115,105,118,101,95,100,95,52,57,0);
       let videovar8 = 5.0;
       let videojsM = String.fromCharCode(122,95,49,51,95,100,101,105,110,116,101,114,108,101,97,118,101,100,0);
          let half7 = 1.0;
         videojsM = `${parseInt(`${videovar8}`)}`;
         half7 *= parseFloat(`${2}`);
      let defaultfootballbgE = jingdonge.length <= 6569773;
      do {
         jingdonge += `${parseInt(`${videovar8}`) << (Math.min(Math.abs(1), 4))}`;
         if (defaultfootballbgE) {
            break;
         }
      } while ((5.79 >= (videovar8 / 1.17)) && defaultfootballbgE);
         videojsM += `${jingdonge.length % 3}`;
         videojsM += `${parseInt(`${videovar8}`) + 3}`;
      if (4 >= (videojsM.length - parseInt(`${videovar8}`)) || (videojsM.length ^ 4) >= 5) {
          let othery: Array<any> = [219, 220, 995];
          let clear4 = String.fromCharCode(120,95,55,55,95,118,109,97,116,114,105,120,0);
          let iconfeedbackV = String.fromCharCode(104,95,53,55,95,109,111,100,105,116,121,0);
          let searchbard: Array<any> = [39, 661];
         videovar8 -= parseFloat(`${searchbard.length}`);
         othery = [(String.fromCharCode(66,0) == clear4 ? clear4.length : othery.length)];
         iconfeedbackV = `${clear4.length}`;
         searchbard = [(clear4 == String.fromCharCode(80,0) ? clear4.length : othery.length)];
      }
      episodes9 /= Math.max(1, 3 % (Math.max(1, zoomm.length)));
   }
       let commenth = String.fromCharCode(113,109,97,116,95,55,95,57,55,0);
       let libjsi1 = String.fromCharCode(114,95,53,49,95,100,105,115,112,108,97,121,105,110,103,0);
       let stylesj = String.fromCharCode(112,95,51,55,95,100,112,114,105,110,116,0);
       let confirmationE = true;
      while (!stylesj.endsWith(`${commenth.length}`)) {
         commenth += `${3 + libjsi1.length}`;
         break;
      }
          let humidity_: Map<any, any> = new Map([[String.fromCharCode(103,95,57,48,95,117,110,112,97,99,107,108,111,0),629], [String.fromCharCode(120,106,112,101,103,95,54,95,55,53,0),623]]);
          let contextd = String.fromCharCode(110,95,52,49,95,116,104,117,110,107,0);
          let fieldF = 3;
         commenth = `${fieldF}`;
         humidity_.set(contextd, humidity_.size & contextd.length);
         fieldF -= humidity_.size | 2;
         libjsi1 = "1";
      for (let c = 0; c < 2; c++) {
         stylesj = `${((confirmationE ? 3 : 2) ^ 1)}`;
      }
      for (let s = 0; s < 1; s++) {
          let photoE = String.fromCharCode(97,99,116,105,118,97,116,105,111,110,115,95,122,95,51,53,0);
          let pageC = 5.0;
          let iconarrowrightg = String.fromCharCode(112,95,56,51,95,105,110,116,101,114,97,99,116,111,114,0);
         commenth = `${iconarrowrightg.length}`;
         photoE += `${parseInt(`${pageC}`) / (Math.max(photoE.length, 4))}`;
         pageC -= 3;
         iconarrowrightg += `${parseInt(`${pageC}`)}`;
      }
      if (commenth != String.fromCharCode(108,0) && stylesj.length == 2) {
         stylesj = `${(stylesj.length ^ (confirmationE ? 2 : 4))}`;
      }
       let playlistP: Array<any> = [350, 261];
       let indexM: Array<any> = [318, 368];
         commenth += `${stylesj.length}`;
      zoomm += "1";
      shielddonew ^= acceptedg.size;
       let libtanJ = 0.0;
       let overlayx: Map<any, any> = new Map([[String.fromCharCode(97,95,49,50,95,100,111,119,110,115,99,97,108,101,0),1], [String.fromCharCode(116,116,97,100,97,116,97,95,113,95,54,50,0),468], [String.fromCharCode(114,103,98,110,95,113,95,54,53,0),724]]);
       let filterk = String.fromCharCode(111,108,108,101,99,116,105,111,110,115,95,114,95,49,48,48,0);
      for (let j = 0; j < 1; j++) {
         overlayx = new Map([[`${overlayx.size}`, (String.fromCharCode(77,0) == filterk ? filterk.length : overlayx.size)]]);
      }
         overlayx = new Map([[`${overlayx.size}`, 2]]);
         filterk = "2";
         filterk = `${overlayx.size}`;
       let iconarrowrightT = 2.0;
       let reviewF = 2.0;
      for (let f = 0; f < 3; f++) {
          let eighteenx = 0.0;
          let back2 = String.fromCharCode(107,95,49,48,48,95,115,116,105,114,110,103,0);
          let libreactnativejnio: Array<any> = [388, 10];
          let eighteen9: Map<any, any> = new Map([[String.fromCharCode(103,97,109,97,95,110,95,49,0),String.fromCharCode(109,95,50,52,95,110,111,110,98,0)], [String.fromCharCode(99,104,101,99,107,98,111,120,95,108,95,50,53,0),String.fromCharCode(115,95,55,49,95,103,114,97,99,101,0)]]);
          let arrowrightK: Array<any> = [639, 339];
         filterk = `${libreactnativejnio.length}`;
         eighteenx *= parseInt(`${eighteenx}`) << (Math.min(2, Math.abs(3)));
         back2 += `${eighteen9.size}`;
         libreactnativejnio.push(parseInt(`${eighteenx}`));
         eighteen9.set(`${arrowrightK.length}`, 1);
         arrowrightK = [back2.length];
      }
       let nalytics3 = 5.0;
         iconarrowrightT -= overlayx.size;
      if (1.42 >= libtanJ) {
         libtanJ *= overlayx.size;
      }
      episodes9 -= bannerC.length / 2;
    

      middlebrightnesso = `${1 >> (Math.min(5, Math.abs(parseInt(`${episodes9}`))))}`;
   while (delegate_gqj == String.fromCharCode(119,0)) {
      zoomm += `${1 | predictionD.length}`;
      break;
   }
   if (2 > (bannerC.length ^ 2) || 2 > (bannerC.length ^ predictionD.length)) {
       let questdd = 4;
       let imagenetworkerrD: Array<any> = [394, 794];
       let clearU: Array<any> = [149, 401, 987];
       let footballc = 0;
      if (imagenetworkerrD.includes(footballc)) {
         footballc &= questdd & 3;
      }
      let minivodm = questdd <= 6898535;
      do {
          let selecteds = 5.0;
          let popupf = 5.0;
          let fnewssharel = String.fromCharCode(102,102,109,112,101,103,95,48,95,55,48,0);
          let libglogO = String.fromCharCode(101,95,49,55,95,97,120,105,120,0);
          let helperi = String.fromCharCode(114,101,112,101,97,116,95,55,95,52,54,0);
         questdd *= questdd;
         selecteds /= Math.max(helperi.length / 1, 2);
         popupf += parseFloat(`${helperi.length % 1}`);
         fnewssharel = `${libglogO.length}`;
         libglogO += `${parseInt(`${popupf}`) & helperi.length}`;
         if (minivodm) {
            break;
         }
      } while ((footballc >= questdd) && minivodm);
         footballc *= clearU.length * 1;
          let untickU = false;
          let iconnointernetY = 2;
          let analyticsB = String.fromCharCode(118,95,52,56,95,115,117,98,109,105,116,116,101,100,0);
         clearU.push(clearU.length);
         untickU = (((!untickU ? analyticsB.length : 100) * analyticsB.length) < 100);
         iconnointernetY += iconnointernetY;
          let manifestR = 3;
          let nativeext: Map<any, any> = new Map([[String.fromCharCode(104,95,50,53,95,115,116,97,114,116,99,111,100,101,0),String.fromCharCode(119,95,53,54,95,112,97,99,107,97,103,101,100,0)], [String.fromCharCode(112,108,97,99,101,115,95,48,95,49,50,0),String.fromCharCode(100,95,53,52,95,112,114,105,118,0)]]);
         imagenetworkerrD.push(clearU.length % (Math.max(2, 3)));
         manifestR /= Math.max(3, 1 / (Math.max(2, nativeext.size)));
         nativeext = new Map([[`${nativeext.size}`, manifestR]]);
         clearU.push(imagenetworkerrD.length ^ 1);
         questdd *= 3;
       let tailk: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,99,116,95,105,95,50,54,0),526], [String.fromCharCode(114,101,116,117,114,110,105,110,103,95,118,95,51,50,0),0], [String.fromCharCode(107,95,56,55,95,116,114,97,110,115,102,111,114,109,101,114,0),624]]);
       let matchw: Map<any, any> = new Map([[String.fromCharCode(104,111,117,114,115,95,98,95,53,52,0),741], [String.fromCharCode(115,95,52,48,95,108,111,103,115,116,101,114,101,111,0),799]]);
          let reactnativeratingsu = String.fromCharCode(97,115,115,111,99,95,55,95,50,51,0);
          let traminiw = 2.0;
          let dropdownE = String.fromCharCode(116,95,54,53,95,99,111,110,99,101,97,108,109,101,110,116,0);
         footballc >>= Math.min(3, Math.abs(matchw.size));
         reactnativeratingsu = "3";
         traminiw -= 3 ^ reactnativeratingsu.length;
         dropdownE = `${dropdownE.length - 3}`;
         tailk.set(`${footballc}`, imagenetworkerrD.length);
      while (3 < (tailk.size - 1)) {
         tailk.set(`${footballc}`, 1);
         break;
      }
      for (let u = 0; u < 1; u++) {
         tailk.set(`${clearU.length}`, matchw.size - clearU.length);
      }
      predictionD += "2";
   }
   let rewardH = 7223354 >= shielddonew;
   do {
       let styleE: Array<any> = [171, 131, 684];
       let iconstarw = 4;
       let eventr: Map<any, any> = new Map([[String.fromCharCode(101,97,115,105,110,103,95,117,95,53,55,0),true ], [String.fromCharCode(98,95,50,52,95,117,108,97,119,0),false ]]);
      for (let t = 0; t < 2; t++) {
         iconstarw -= styleE.length;
      }
         iconstarw *= iconstarw;
         styleE.push(2);
      for (let q = 0; q < 2; q++) {
         styleE = [iconstarw];
      }
         iconstarw += styleE.length;
          let frame_id = 4.0;
          let albumR = 3.0;
         styleE.push(1 + eventr.size);
         frame_id *= parseInt(`${frame_id}`) ^ 3;
         albumR /= Math.max(4, parseInt(`${frame_id}`) / (Math.max(10, parseInt(`${albumR}`))));
      let iconsaveimageA = iconstarw <= 9338591;
      do {
         iconstarw -= eventr.size - 1;
         if (iconsaveimageA) {
            break;
         }
      } while ((3 == (iconstarw & eventr.size)) && iconsaveimageA);
          let clubs = 0.0;
          let chinasame6 = String.fromCharCode(101,109,98,101,100,100,101,100,95,97,95,57,53,0);
          let baiduX = String.fromCharCode(116,95,52,56,95,102,108,111,119,0);
         eventr.set(`${iconstarw}`, eventr.size * 2);
         clubs /= Math.max((chinasame6 == String.fromCharCode(79,0) ? parseInt(`${clubs}`) : chinasame6.length), 3);
         baiduX = `${parseInt(`${clubs}`) | 2}`;
         styleE = [eventr.size];
      shielddonew |= parseInt(`${episodes9}`) / 2;
      if (rewardH) {
         break;
      }
   } while (rewardH && (4 >= (middlebrightnesso.length % (Math.max(5, 9))) || (middlebrightnesso.length % (Math.max(3, shielddonew))) >= 5));
      shielddonew /= Math.max(5, 3);
    setIsCancelledShowRegengOverlay(true);

       let defaultroombgh = String.fromCharCode(104,95,52,56,95,99,111,109,109,105,115,115,105,111,110,0);
         defaultroombgh = `${defaultroombgh.length - 2}`;
      for (let m = 0; m < 1; m++) {
          let middlewarek = true;
          let libfabricjniy = 5;
          let navigationr = String.fromCharCode(115,95,53,95,100,114,97,103,0);
          let traminim = String.fromCharCode(115,108,111,119,100,111,119,110,95,101,95,52,56,0);
          let iconbellactiveM: Array<any> = [716, 348, 929];
         defaultroombgh = `${(String.fromCharCode(105,0) == traminim ? libfabricjniy : traminim.length)}`;
         middlewarek = navigationr.length == 71;
         libfabricjniy <<= Math.min(iconbellactiveM.length, 1);
         navigationr += "1";
         iconbellactiveM = [iconbellactiveM.length];
      }
      for (let t = 0; t < 1; t++) {
         defaultroombgh = `${defaultroombgh.length}`;
      }
      delegate_gqj += `${parseInt(`${episodes9}`)}`;
      videoV -= parseFloat(`${acceptedg.size ^ 1}`);
   for (let b = 0; b < 3; b++) {
      delegate_gqj = "1";
   }
      bootsplash7 = new Map([[`${shielddonew}`, 2 / (Math.max(9, zoomm.length))]]);
   for (let h = 0; h < 2; h++) {
      zoomm = `${delegate_gqj.length}`;
   }

    if (wwAbidetect.instance.updateAction == 1) {

   if (2 == zoomm.length) {
      delegate_gqj += `${parseInt(`${videoV}`)}`;
   }
   for (let d = 0; d < 2; d++) {
      shielddonew <<= Math.min(Math.abs(2 & parseInt(`${episodes9}`)), 4);
   }
   if (!Array.from(bootsplash7.keys()).includes(`${videoV}`)) {
      bootsplash7.set(friendso, (String.fromCharCode(80,0) == friendso ? bannerC.length : friendso.length));
   }
       let jingdongk: Map<any, any> = new Map([[String.fromCharCode(99,111,108,117,109,110,95,56,95,52,55,0),467], [String.fromCharCode(100,95,49,55,95,118,105,101,119,0),772]]);
       let nalyticsh = String.fromCharCode(112,95,49,52,95,100,114,111,112,112,101,100,0);
       let libffmpegkit5 = String.fromCharCode(116,97,98,108,101,115,95,117,95,51,54,0);
         libffmpegkit5 += "3";
         libffmpegkit5 += `${(String.fromCharCode(107,0) == libffmpegkit5 ? jingdongk.size : libffmpegkit5.length)}`;
      shielddonew >>= Math.min(Math.abs(bootsplash7.size << (Math.min(Math.abs(1), 1))), 1);
   for (let b = 0; b < 1; b++) {
       let iconsubssuccessK = false;
       let launcher9 = 0.0;
       let completef = 2.0;
       let modityd = 4.0;
       let specv = 1.0;
          let calendarA = String.fromCharCode(109,97,110,116,105,115,115,97,95,57,95,54,57,0);
          let bottomx = String.fromCharCode(109,95,57,48,95,105,110,116,101,114,115,101,99,116,105,111,110,0);
          let sheetf = String.fromCharCode(117,105,100,115,95,100,95,51,56,0);
         completef /= Math.max(5, parseInt(`${modityd}`));
         calendarA = `${bottomx.length + calendarA.length}`;
         bottomx += `${(calendarA == String.fromCharCode(50,0) ? calendarA.length : sheetf.length)}`;
         sheetf = `${sheetf.length * 2}`;
      episodes9 -= acceptedg.size & predictionD.length;
      iconsubssuccessK = !iconsubssuccessK && iconsubssuccessK;
   }
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

                  {wwAbidetect.instance.updateDesc == "" ? (
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
                      {wwAbidetect.instance.updateDesc}
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
                    source={require("@static/images/giflivestreamingNavigationVolume.gif")}
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
