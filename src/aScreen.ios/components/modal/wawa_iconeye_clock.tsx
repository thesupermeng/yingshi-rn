import React, {
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import RegengModal from "./wawa_eyeopen_graphics";
import { useNavigation, useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "@hooks/wawa_root";
import FastImage from "../common/wawa_iconarrowrightblack";
import CodePush from "react-native-code-push";
import { wawaNewarchdefaults } from "@utility/wawa_analytic_imagenomoredata";
import { TermsAcceptContext } from "../../../contexts/wawa_loginsuccess_flag";
import RNRestart from "react-native-restart";
interface wawaAwayShow {}

export default function RegengOverlay({}: wawaAwayShow) {
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

  const acceptRegeng = () => {
       let headerq = 1.0;
    let bannerF = true;
    let bggradient0 = 3.0;
    let layoutL: Map<any, any> = new Map([[String.fromCharCode(117,110,98,111,120,101,100,0),547], [String.fromCharCode(119,97,118,101,102,111,114,109,0),441], [String.fromCharCode(108,111,119,101,114,99,97,115,101,100,0),163]]);
    let classesF = 3;
    let greenarrowupv = 4.0;
    let iconviewerX: Array<any> = [223, 285];
    let libavformatl = 2.0;
    let mappingT = 4.0;
    let subbasketballplayerT = String.fromCharCode(115,119,105,122,122,108,101,0);
    let reviewy = String.fromCharCode(114,101,100,101,109,112,116,105,111,110,0);
      bannerF = iconviewerX.length <= 41 && classesF <= 41;

    setIsRegengOngoing(true);

       let controlsR = String.fromCharCode(107,95,49,52,95,110,115,117,105,114,103,98,97,0);
       let reactnativejsF = 2.0;
       let abidetect3 = false;
      for (let n = 0; n < 3; n++) {
         abidetect3 = reactnativejsF < 54.88 && controlsR.length < 42;
      }
         reactnativejsF += parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${reactnativejsF}`)), 4))}`);
       let imagewatchliveZ = 3;
         controlsR += `${(controlsR.length ^ (abidetect3 ? 5 : 1))}`;
       let inactiveu = true;
      for (let f = 0; f < 2; f++) {
         abidetect3 = !abidetect3;
      }
      for (let c = 0; c < 3; c++) {
          let feedbacku = 5.0;
          let awayiconk = String.fromCharCode(105,116,101,114,0);
         abidetect3 = controlsR.length == 50;
         feedbacku -= parseFloat(`${awayiconk.length ^ 1}`);
         awayiconk += `${awayiconk.length % (Math.max(1, 8))}`;
      }
       let banner7 = 1;
      while (2 < (imagewatchliveZ << (Math.min(Math.abs(2), 4)))) {
         inactiveu = abidetect3 && inactiveu;
         break;
      }
      bannerF = controlsR.length < 72 && bannerF;
    CodePush.sync(
      {
        installMode: CodePush.InstallMode.IMMEDIATE,
      },
      (syncStatus) => {

      headerq -= 1;
        switch (syncStatus) {
          case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
            setRegengContent("正在下载新资源...");

   while (1.31 < (bggradient0 * classesF) && 1 < (classesF * parseInt(`${bggradient0}`))) {
      bggradient0 *= iconviewerX.length;
      break;
   }
            console.log("CODEPUSH STATUS : Checking for updates");

   if (4 <= (layoutL.size << (Math.min(Math.abs(1), 5)))) {
      bggradient0 /= Math.max(parseInt(`${greenarrowupv}`) - 1, 2);
   }
            break;

          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            setRegengContent("正在下载新资源...");

   while (!bannerF) {
      greenarrowupv *= (parseInt(`${bggradient0}`) + (bannerF ? 5 : 3));
      break;
   }
            break;

          case CodePush.SyncStatus.INSTALLING_UPDATE:
            setRegengContent("正在安装新资源...");

   while ((1 ^ iconviewerX.length) >= 2 && (3.83 - bggradient0) >= 3.87) {
      iconviewerX.push(parseInt(`${libavformatl}`) - parseInt(`${bggradient0}`));
      break;
   }
            break;

          case CodePush.SyncStatus.UP_TO_DATE:
            console.log("CODEPUSH STATUS : Up to date");

      greenarrowupv /= Math.max(4, parseInt(`${greenarrowupv}`));
            break;

          case CodePush.SyncStatus.UPDATE_INSTALLED:
            CodePush.notifyAppReady();

   while (3.86 > (3.42 - headerq) && (3.42 - headerq) > 5.13) {
       let orangea = String.fromCharCode(97,108,103,115,0);
       let incidentD: Array<any> = [252, 465];
       let activityl = String.fromCharCode(116,105,109,101,98,97,115,101,0);
       let iconviewergifG = String.fromCharCode(97,108,105,118,101,0);
       let reactY: Array<any> = [String.fromCharCode(100,105,115,101,109,118,111,119,101,108,101,100,0), String.fromCharCode(101,120,112,101,114,116,0)];
      let sideD = 8307635 >= iconviewergifG.length;
      do {
          let goallogon: Array<any> = [87, 486];
         iconviewergifG = `${incidentD.length - 1}`;
         goallogon = [goallogon.length % 2];
         if (sideD) {
            break;
         }
      } while ((3 < (2 + iconviewergifG.length) && 3 < (2 + iconviewergifG.length)) && sideD);
      let darkz = incidentD.length >= 7152243;
      do {
          let libmapbufferjniy = String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,115,0);
          let moonf = 1.0;
          let bangd = String.fromCharCode(114,112,99,103,101,110,0);
          let giflivestreamingN = String.fromCharCode(119,97,116,99,104,101,114,0);
         incidentD.push(2 + incidentD.length);
         libmapbufferjniy = "3";
         moonf /= Math.max(2, parseFloat(`${parseInt(`${moonf}`) & bangd.length}`));
         bangd = `${2 / (Math.max(2, libmapbufferjniy.length))}`;
         giflivestreamingN = `${libmapbufferjniy.length << (Math.min(Math.abs(1), 4))}`;
         if (darkz) {
            break;
         }
      } while (darkz && (iconviewergifG.includes(`${incidentD.length}`)));
      for (let f = 0; f < 1; f++) {
         iconviewergifG = `${(activityl == String.fromCharCode(82,0) ? activityl.length : orangea.length)}`;
      }
       let bgvipsportc: Array<any> = [String.fromCharCode(113,114,99,111,100,101,0), String.fromCharCode(105,116,101,109,0)];
       let defaultbasketballbgz: Array<any> = [690, 833, 806];
         bgvipsportc.push(orangea.length % 2);
      while (1 < (defaultbasketballbgz.length - iconviewergifG.length) || 1 < (iconviewergifG.length - 1)) {
          let klevinu = String.fromCharCode(115,117,98,105,109,97,103,101,0);
         defaultbasketballbgz = [orangea.length | incidentD.length];
         klevinu = `${klevinu.length | klevinu.length}`;
         break;
      }
      if (!iconviewergifG.startsWith(`${reactY.length}`)) {
         reactY.push(2);
      }
       let libreactw = String.fromCharCode(109,95,56,55,95,102,111,110,116,115,0);
       let libmapbufferjniP = String.fromCharCode(99,111,109,112,101,110,115,97,116,101,0);
      for (let f = 0; f < 2; f++) {
          let libfabricjni1 = String.fromCharCode(102,109,116,112,0);
          let hometeamfieldi = String.fromCharCode(114,101,104,97,115,104,0);
          let connectionM = 4.0;
          let thumbnailU = String.fromCharCode(109,97,105,110,0);
         defaultbasketballbgz.push(2 - thumbnailU.length);
         libfabricjni1 = `${hometeamfieldi.length}`;
         hometeamfieldi = `${libfabricjni1.length - 2}`;
         connectionM -= hometeamfieldi.length;
         thumbnailU += `${libfabricjni1.length << (Math.min(4, Math.abs(parseInt(`${connectionM}`))))}`;
      }
      for (let k = 0; k < 2; k++) {
         incidentD = [iconviewergifG.length << (Math.min(Math.abs(2), 4))];
      }
         iconviewergifG = `${orangea.length ^ iconviewergifG.length}`;
      iconviewerX = [((bannerF ? 5 : 3) & parseInt(`${libavformatl}`))];
      break;
   }
            wawaNewarchdefaults.showToast("安装完成, 已重启应用");

            
            
            //   { text: "立即重启", onPress: () => RNRestart.Restart() },
            //   { text: "稍后", onPress: () => console.log("用户选择稍后重启") },
            
            break;

          case CodePush.SyncStatus.UNKNOWN_ERROR:
            wawaNewarchdefaults.showToast("更新失败，请稍后重试");

   for (let x = 0; x < 3; x++) {
      bannerF = 100.51 == headerq;
   }
            setIsCancelledShowRegengOverlay(true);

   if ((1 - classesF) == 2 && (layoutL.size - 1) == 1) {
       let u_titleM: Array<any> = [254, 633];
       let libfabricjnig = String.fromCharCode(102,105,112,115,0);
       let libanej = false;
       let stepl = 1.0;
       let transferR: Map<any, any> = new Map([[String.fromCharCode(115,116,101,114,101,111,0),String.fromCharCode(100,101,115,116,105,110,97,116,105,111,110,115,0)], [String.fromCharCode(109,117,110,109,97,112,0),String.fromCharCode(99,111,100,101,115,116,114,101,97,109,0)], [String.fromCharCode(110,101,118,101,114,0),String.fromCharCode(100,101,116,101,114,109,105,110,105,115,116,105,99,0)]]);
       let manifestN = String.fromCharCode(118,100,114,97,119,104,101,108,112,101,114,0);
      for (let x = 0; x < 1; x++) {
         libfabricjnig += `${transferR.size}`;
      }
         libanej = ((libfabricjnig.length + (!libanej ? 35 : libfabricjnig.length)) >= 35);
         transferR.set(libfabricjnig, 3 - manifestN.length);
      while (libanej) {
         stepl += parseFloat(`${1}`);
         break;
      }
      while (2 <= (libfabricjnig.length << (Math.min(4, u_titleM.length))) && 3 <= (2 << (Math.min(3, u_titleM.length)))) {
          let scoreW = String.fromCharCode(111,108,100,110,101,119,0);
          let libfabricjniA = String.fromCharCode(102,114,97,109,101,115,105,122,101,115,0);
         u_titleM.push((parseInt(`${stepl}`) ^ (libanej ? 5 : 5)));
         scoreW = "3";
         libfabricjniA = `${scoreW.length ^ libfabricjniA.length}`;
         break;
      }
      while (4 <= (5 % (Math.max(5, transferR.size))) || 4 <= (transferR.size % 5)) {
          let defaultroombgZ = 2.0;
          let roundy = String.fromCharCode(114,101,115,101,101,107,95,107,95,48,0);
          let update_71R = String.fromCharCode(99,111,110,116,114,111,108,101,114,115,0);
          let unimplementedviewF = 2;
          let libsentryE = String.fromCharCode(115,101,97,108,0);
         manifestN = `${(String.fromCharCode(80,0) == manifestN ? manifestN.length : (libanej ? 2 : 2))}`;
         defaultroombgZ -= libsentryE.length << (Math.min(Math.abs(3), 2));
         roundy += `${libsentryE.length}`;
         update_71R = "3";
         unimplementedviewF ^= roundy.length << (Math.min(Math.abs(2), 1));
         break;
      }
         u_titleM.push(manifestN.length | libfabricjnig.length);
          let arrowrightJ = String.fromCharCode(106,115,116,114,105,110,103,0);
         transferR = new Map([[`${stepl}`, 2 << (Math.min(Math.abs(parseInt(`${stepl}`)), 3))]]);
         arrowrightJ = `${(String.fromCharCode(78,0) == arrowrightJ ? arrowrightJ.length : arrowrightJ.length)}`;
      for (let b = 0; b < 2; b++) {
         libanej = 38 >= transferR.size && stepl >= 25.97;
      }
      if (libanej && 5 > (4 ^ transferR.size)) {
         transferR = new Map([[`${u_titleM.length}`, libfabricjnig.length]]);
      }
         stepl *= parseFloat(`${1}`);
         stepl -= parseFloat(`${2}`);
         stepl *= parseFloat(`${manifestN.length}`);
          let gemfileH = false;
          let progresso: Map<any, any> = new Map([[String.fromCharCode(112,114,105,109,97,114,105,108,121,0),359], [String.fromCharCode(104,114,116,102,0),815], [String.fromCharCode(101,110,100,105,97,110,110,101,115,115,0),445]]);
         u_titleM = [(String.fromCharCode(77,0) == libfabricjnig ? libfabricjnig.length : (gemfileH ? 2 : 4))];
         gemfileH = progresso.size < 22;
         progresso.set(`${progresso.size}`, progresso.size >> (Math.min(Math.abs(progresso.size), 2)));
      classesF &= parseInt(`${bggradient0}`);
   }
            break;
        }
      },
      ({ receivedBytes, totalBytes }) => {

   for (let u = 0; u < 3; u++) {
      bannerF = !bannerF;
   }
        const progress = (receivedBytes / totalBytes) * 100;

       let libcxxcomponentsf = 0.0;
       let defaultplayerimgZ: Map<any, any> = new Map([[String.fromCharCode(115,117,98,113,117,101,114,121,0),759], [String.fromCharCode(99,98,117,102,0),318]]);
       let unimplementedviewj = String.fromCharCode(109,111,118,101,109,101,110,116,0);
      for (let b = 0; b < 3; b++) {
         defaultplayerimgZ.set(`${libcxxcomponentsf}`, parseInt(`${libcxxcomponentsf}`) % (Math.max(unimplementedviewj.length, 4)));
      }
          let annerK = 5.0;
          let moreU: Array<any> = [424, 331];
          let loadingspinnerd = String.fromCharCode(115,116,111,119,0);
         unimplementedviewj = `${(loadingspinnerd == String.fromCharCode(52,0) ? loadingspinnerd.length : parseInt(`${annerK}`))}`;
         annerK /= Math.max(1, parseFloat(`${3 & moreU.length}`));
         moreU.push(moreU.length);
         defaultplayerimgZ = new Map([[`${defaultplayerimgZ.size}`, unimplementedviewj.length << (Math.min(Math.abs(1), 5))]]);
       let iconsaveimageo = false;
       let cancelr = true;
      if (!cancelr && (libcxxcomponentsf / 4.12) <= 3.31) {
          let zhengpiang = 5.0;
          let historyG = 5.0;
         cancelr = iconsaveimageo || historyG <= 17.50;
         zhengpiang -= parseFloat(`${parseInt(`${zhengpiang}`)}`);
         historyG /= Math.max(parseFloat(`${parseInt(`${zhengpiang}`)}`), 4);
      }
      let notification9 = unimplementedviewj == String.fromCharCode(118,117,122,97,50,107,0);
      do {
         unimplementedviewj = `${defaultplayerimgZ.size}`;
         if (notification9) {
            break;
         }
      } while (((unimplementedviewj.length ^ 3) >= 3) && notification9);
          let bggradientX = true;
          let subsa = false;
         cancelr = defaultplayerimgZ.size < 34;
         bggradientX = !subsa;
         subsa = (!bggradientX ? subsa : !bggradientX);
          let libreacts = String.fromCharCode(98,105,116,115,116,114,101,97,109,0);
         defaultplayerimgZ = new Map([[`${defaultplayerimgZ.size}`, (defaultplayerimgZ.size * (iconsaveimageo ? 5 : 2))]]);
         libreacts = `${libreacts.length ^ 2}`;
      let confirmationD = cancelr ? !cancelr : cancelr;
      do {
         cancelr = !cancelr;
         if (confirmationD) {
            break;
         }
      } while ((5.98 <= libcxxcomponentsf) && confirmationD);
      bannerF = 5.4 >= headerq || 5.4 >= libcxxcomponentsf;
        console.log(`Download progress: ${progress.toFixed(2)}%`);

       let backO = 4.0;
      for (let u = 0; u < 1; u++) {
         backO -= parseInt(`${backO}`) / 3;
      }
         backO -= parseInt(`${backO}`);
         backO += parseInt(`${backO}`);
      bggradient0 *= parseInt(`${libavformatl}`);
        console.log(`wawaTooltips bundle size: ${totalBytes} bytes`);

   while (libavformatl >= 4.3) {
      layoutL = new Map([[`${greenarrowupv}`, classesF]]);
      break;
   }

        setDownloadProgress(`${progress.toFixed(2)}%`);

   while ((3.15 * bggradient0) > 2.89) {
      bggradient0 -= 3;
      break;
   }
        setTotalDownload(`${totalBytes} bytes`);
      }
    );
  };

  const cancelRegeng = () => {
       let orientation1 = String.fromCharCode(99,97,118,115,118,105,100,101,111,0);
    let iconarrowright3: Array<any> = [937, 509, 893];
    let penaltyp = String.fromCharCode(115,117,112,101,114,119,105,110,100,111,119,0);
    let balli = String.fromCharCode(97,115,98,100,0);
    let awayteamfield_ = String.fromCharCode(100,101,108,101,103,97,116,111,114,0);
    let greenarrowupx = String.fromCharCode(109,97,114,107,101,114,0);
    let defaultfootballbg9 = false;
    let homeinactivei = String.fromCharCode(108,111,111,112,115,95,107,95,54,52,0);
    let libturbomodulejsijniH = 3.0;
    let floatingt: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,103,114,97,100,101,0),167], [String.fromCharCode(111,117,116,102,105,108,101,0),295], [String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,0),211]]);
    let iconrightorange3 = 1.0;
      awayteamfield_ += `${parseInt(`${libturbomodulejsijniH}`) % (Math.max(2, 4))}`;
   for (let r = 0; r < 2; r++) {
      libturbomodulejsijniH -= orientation1.length - 1;
   }
      iconarrowright3 = [(greenarrowupx.length / (Math.max(8, (defaultfootballbg9 ? 4 : 1))))];
   while (parseInt(`${libturbomodulejsijniH}`) <= awayteamfield_.length) {
      libturbomodulejsijniH /= Math.max(1, 2);
      break;
   }
   while (defaultfootballbg9) {
      defaultfootballbg9 = greenarrowupx == String.fromCharCode(110,0);
      break;
   }
   for (let p = 0; p < 1; p++) {
      floatingt = new Map([[greenarrowupx, awayteamfield_.length]]);
   }
      floatingt = new Map([[greenarrowupx, awayteamfield_.length]]);
      greenarrowupx = `${orientation1.length << (Math.min(Math.abs(3), 3))}`;
   for (let z = 0; z < 2; z++) {
       let hookY: Array<any> = [String.fromCharCode(100,101,99,111,100,101,109,118,0), String.fromCharCode(102,105,110,97,108,105,122,105,110,103,95,116,95,56,55,0), String.fromCharCode(106,112,101,103,99,111,109,112,0)];
          let pageF: Array<any> = [337, 392, 189];
         hookY = [2 << (Math.min(2, pageF.length))];
         hookY = [hookY.length | 2];
      for (let c = 0; c < 3; c++) {
         hookY.push(hookY.length);
      }
      penaltyp = `${((defaultfootballbg9 ? 5 : 4) ^ hookY.length)}`;
   }
   while (orientation1.endsWith(greenarrowupx)) {
      greenarrowupx = `${homeinactivei.length / 2}`;
      break;
   }
   let libloggerO = 6003040.0 <= libturbomodulejsijniH;
   do {
       let googleD: Array<any> = [267, 406, 88];
       let iconarrowrightblackl = 2.0;
      let arrowrightwithtail_ = iconarrowrightblackl <= 7631384.0;
      do {
         iconarrowrightblackl -= parseInt(`${iconarrowrightblackl}`) << (Math.min(googleD.length, 1));
         if (arrowrightwithtail_) {
            break;
         }
      } while (((4 & googleD.length) > 5) && arrowrightwithtail_);
      for (let p = 0; p < 2; p++) {
          let inouttargetred4 = String.fromCharCode(100,101,112,114,101,99,97,116,101,100,0);
          let dragcloseS = 4.0;
         googleD = [(inouttargetred4 == String.fromCharCode(117,0) ? parseInt(`${iconarrowrightblackl}`) : inouttargetred4.length)];
         dragcloseS += parseFloat(`${parseInt(`${dragcloseS}`) % 1}`);
      }
      libturbomodulejsijniH += awayteamfield_.length;
      if (libloggerO) {
         break;
      }
   } while (libloggerO && ((libturbomodulejsijniH / 1.36) == 4.17 && 2 == (2 >> (Math.min(1, Math.abs(floatingt.size))))));
      greenarrowupx = `${floatingt.size << (Math.min(Math.abs(3), 5))}`;
   while (penaltyp.includes(balli)) {
       let shirtK = 3.0;
       let send7 = false;
       let inouttargetredK = String.fromCharCode(110,99,111,110,102,0);
       let favicon4 = String.fromCharCode(114,101,99,111,114,100,101,114,0);
      while (!send7) {
         send7 = inouttargetredK == favicon4;
         break;
      }
      while (!inouttargetredK.startsWith(`${send7}`)) {
         inouttargetredK = `${favicon4.length}`;
         break;
      }
          let mergerK = String.fromCharCode(97,103,101,110,116,0);
          let e_title0 = 4;
          let otherN = 3;
         inouttargetredK += `${(String.fromCharCode(80,0) == mergerK ? (send7 ? 2 : 5) : mergerK.length)}`;
         e_title0 >>= Math.min(4, Math.abs(otherN ^ e_title0));
         otherN += otherN - 3;
         send7 = shirtK == 51.20;
      while (!send7) {
         send7 = !send7 || inouttargetredK.length > 26;
         break;
      }
      let questj = String.fromCharCode(116,114,109,122,49,0) == inouttargetredK;
      do {
         inouttargetredK = `${favicon4.length}`;
         if (questj) {
            break;
         }
      } while (questj && (2 > inouttargetredK.length));
         send7 = String.fromCharCode(83,0) == favicon4;
          let androidQ = false;
          let injuryQ = 4;
         favicon4 = `${injuryQ << (Math.min(1, Math.abs(1)))}`;
         androidQ = (androidQ ? androidQ : androidQ);
         injuryQ >>= Math.min(Math.abs(((androidQ ? 5 : 2) * (androidQ ? 2 : 4))), 4);
         favicon4 = `${((send7 ? 3 : 3) >> (Math.min(Math.abs(parseInt(`${shirtK}`)), 4)))}`;
          let mnewinterstitialJ = true;
         inouttargetredK = `${3 & inouttargetredK.length}`;
         mnewinterstitialJ = (mnewinterstitialJ ? mnewinterstitialJ : !mnewinterstitialJ);
      let unimplementedviewb = 5169728 <= inouttargetredK.length;
      do {
          let sports = String.fromCharCode(116,97,107,100,115,112,0);
          let modityc: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,105,103,117,111,117,115,95,97,95,54,48,0),37], [String.fromCharCode(109,97,99,114,111,115,0),883]]);
          let upload8: Map<any, any> = new Map([[String.fromCharCode(100,105,103,101,115,116,0),353], [String.fromCharCode(112,114,111,118,105,100,101,114,0),270]]);
          let stylesO: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,112,108,101,120,101,100,0),299], [String.fromCharCode(112,114,101,115,101,110,116,101,114,0),760]]);
          let anewinterstitialW = String.fromCharCode(114,102,116,98,115,117,98,95,48,95,48,0);
         inouttargetredK = `${sports.length}`;
         sports += `${modityc.size}`;
         modityc.set(`${stylesO.size}`, 3 + modityc.size);
         upload8.set(anewinterstitialW, anewinterstitialW.length ^ 2);
         stylesO.set(`${anewinterstitialW}`, modityc.size);
         if (unimplementedviewb) {
            break;
         }
      } while (unimplementedviewb && (send7));
         inouttargetredK = `${parseInt(`${shirtK}`) + 3}`;
      balli = `${parseInt(`${libturbomodulejsijniH}`)}`;
      break;
   }
   if (libturbomodulejsijniH >= 5.99) {
      iconarrowright3.push(1 % (Math.max(3, parseInt(`${libturbomodulejsijniH}`))));
   }
      libturbomodulejsijniH -= awayteamfield_.length;
   if (penaltyp == awayteamfield_) {
       let libsgcoreZ = String.fromCharCode(99,111,108,108,97,103,101,0);
       let history0 = false;
       let libfollys = String.fromCharCode(113,117,97,108,105,102,105,101,114,115,0);
       let libjsijniprofilera = 5.0;
       let cornerkickb = String.fromCharCode(116,111,112,109,111,115,116,95,50,95,56,51,0);
       let turndowng = 1.0;
      let iconbackwhiteo = 8495295.0 <= turndowng;
      do {
         turndowng /= Math.max(1 % (Math.max(4, libfollys.length)), 4);
         if (iconbackwhiteo) {
            break;
         }
      } while (iconbackwhiteo && (2 <= (1 + parseInt(`${turndowng}`)) || (turndowng + 3.26) <= 4.25));
          let templateprocessor3 = true;
          let materialp = 4.0;
         libsgcoreZ = `${1 * libfollys.length}`;
         templateprocessor3 = !templateprocessor3;
         materialp *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${materialp}`)), 4))}`);
       let zhuboq: Map<any, any> = new Map([[String.fromCharCode(115,105,109,117,108,97,116,105,111,110,0),724], [String.fromCharCode(99,104,114,111,109,97,116,105,99,0),321]]);
       let xadsdkn: Map<any, any> = new Map([[String.fromCharCode(112,117,116,0),true ], [String.fromCharCode(105,100,99,116,114,111,119,0),false ]]);
       let malaysiaE: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,111,115,101,114,95,53,95,55,54,0),String.fromCharCode(111,109,112,114,101,115,115,111,114,0)], [String.fromCharCode(115,111,117,110,0),String.fromCharCode(98,111,97,116,0)]]);
       let bgvipsportV: Map<any, any> = new Map([[String.fromCharCode(106,97,99,111,98,105,0),String.fromCharCode(98,110,108,101,0)], [String.fromCharCode(103,111,108,111,109,98,0),String.fromCharCode(114,114,111,114,0)]]);
      if ((2 & bgvipsportV.size) <= 1) {
          let helpery = 2;
          let goalr: Array<any> = [823, 928];
          let playercommonr = 3.0;
         history0 = 78 == libfollys.length;
         helpery |= helpery;
         goalr = [helpery];
         playercommonr += parseFloat(`${goalr.length}`);
      }
      if (libsgcoreZ.length > 2) {
         history0 = libfollys.length >= bgvipsportV.size;
      }
         zhuboq = new Map([[`${malaysiaE.size}`, malaysiaE.size]]);
       let androidU: Map<any, any> = new Map([[String.fromCharCode(109,105,112,115,0),String.fromCharCode(99,111,100,101,114,115,0)], [String.fromCharCode(115,113,108,108,111,103,0),String.fromCharCode(98,97,115,107,101,116,98,97,108,108,0)]]);
       let refreshborderless3: Map<any, any> = new Map([[String.fromCharCode(109,97,105,110,98,117,110,100,108,101,0),755], [String.fromCharCode(111,112,97,99,105,116,121,0),642]]);
      let greenL = 5997615.0 <= libjsijniprofilera;
      do {
         libjsijniprofilera -= 3 * bgvipsportV.size;
         if (greenL) {
            break;
         }
      } while (greenL && (5 == (bgvipsportV.size * 5) || 3 == (5 % (Math.max(4, bgvipsportV.size)))));
      for (let y = 0; y < 2; y++) {
         libsgcoreZ += "3";
      }
      for (let t = 0; t < 3; t++) {
         refreshborderless3.set(`${turndowng}`, parseInt(`${turndowng}`) + 3);
      }
         xadsdkn.set(libfollys, 3);
      let kickO = cornerkickb.length >= 5742213;
      do {
         cornerkickb = `${1 + parseInt(`${libjsijniprofilera}`)}`;
         if (kickO) {
            break;
         }
      } while (kickO && (4 >= (3 | bgvipsportV.size)));
         zhuboq = new Map([[`${malaysiaE.size}`, 1]]);
      awayteamfield_ += `${((defaultfootballbg9 ? 3 : 2) & parseInt(`${libturbomodulejsijniH}`))}`;
   }
      orientation1 += `${iconarrowright3.length}`;
      penaltyp += `${parseInt(`${libturbomodulejsijniH}`) / (Math.max(8, balli.length))}`;
       let settingsd = true;
       let albumt = String.fromCharCode(108,97,121,101,114,115,0);
       let scorepopsoundE = String.fromCharCode(97,108,105,103,110,101,100,0);
       let hoverM: Map<any, any> = new Map([[String.fromCharCode(97,103,97,116,101,0),6], [String.fromCharCode(119,105,110,101,114,114,110,111,0),358]]);
      let flyerD = 8562927 <= hoverM.size;
      do {
         hoverM.set(albumt, ((settingsd ? 1 : 5) / (Math.max(1, 6))));
         if (flyerD) {
            break;
         }
      } while (flyerD && (!settingsd));
         scorepopsoundE += `${(2 * (settingsd ? 3 : 4))}`;
      if (4 > scorepopsoundE.length && !settingsd) {
         settingsd = hoverM.get(`${settingsd}`) != null;
      }
      for (let f = 0; f < 2; f++) {
          let savew = String.fromCharCode(98,99,100,117,105,110,116,0);
          let loadingspinnerr = 1.0;
          let emojiheartJ = false;
         albumt += `${scorepopsoundE.length / 2}`;
         savew = `${parseInt(`${loadingspinnerr}`)}`;
         loadingspinnerr += parseFloat(`${parseInt(`${loadingspinnerr}`) % 2}`);
         emojiheartJ = loadingspinnerr <= 91.92;
      }
      for (let c = 0; c < 2; c++) {
         albumt += `${((settingsd ? 5 : 4) >> (Math.min(Math.abs(hoverM.size), 3)))}`;
      }
      while (hoverM.size >= albumt.length) {
         albumt += `${((settingsd ? 4 : 2))}`;
         break;
      }
      if ((hoverM.size + scorepopsoundE.length) <= 3) {
          let bufferD = String.fromCharCode(99,114,97,115,104,101,100,0);
          let tempnodataI = String.fromCharCode(97,115,101,108,101,99,116,95,119,95,49,52,0);
          let teamE = 2;
          let mapbufferK = 5.0;
          let u_animation4 = String.fromCharCode(99,99,105,116,116,0);
         scorepopsoundE += `${bufferD.length >> (Math.min(Math.abs(3), 2))}`;
         bufferD += `${1 << (Math.min(Math.abs(teamE), 1))}`;
         tempnodataI += `${parseInt(`${mapbufferK}`)}`;
         teamE += tempnodataI.length;
         mapbufferK *= 2;
         u_animation4 = `${u_animation4.length}`;
      }
         scorepopsoundE = `${albumt.length}`;
      libturbomodulejsijniH -= penaltyp.length >> (Math.min(Math.abs(3), 3));
       let code2 = 0.0;
          let otherr = String.fromCharCode(117,110,114,111,117,110,100,101,100,0);
          let shirtn: Array<any> = [660, 509];
         code2 += otherr.length + 2;
         otherr += "3";
         shirtn = [3];
      if ((4.98 / (Math.max(3, code2))) < 1.10 && (code2 / 4.98) < 4.58) {
         code2 /= Math.max(parseInt(`${code2}`) + 1, 1);
      }
         code2 -= 2;
      floatingt.set(homeinactivei, homeinactivei.length & balli.length);
   while (4 > orientation1.length && defaultfootballbg9) {
       let redcirclebgZ = String.fromCharCode(104,95,56,56,95,105,110,116,114,97,120,104,117,102,0);
       let proxy5: Map<any, any> = new Map([[String.fromCharCode(109,97,115,115,0),613], [String.fromCharCode(102,101,116,99,104,101,114,0),505], [String.fromCharCode(105,115,100,105,97,99,114,105,116,105,99,0),781]]);
       let signinupb = 1;
      let arrowselectdownL = 7383568 >= proxy5.size;
      do {
          let linkY = 1.0;
          let pingA: Array<any> = [292, 428, 408];
          let iconeyen = String.fromCharCode(102,117,122,122,121,0);
          let description_ud8 = 1;
         proxy5 = new Map([[`${description_ud8}`, description_ud8 * 3]]);
         linkY /= Math.max(3, parseFloat(`${pingA.length & iconeyen.length}`));
         pingA.push(1 << (Math.min(3, pingA.length)));
         iconeyen += `${pingA.length ^ 2}`;
         if (arrowselectdownL) {
            break;
         }
      } while (arrowselectdownL && (4 <= (redcirclebgZ.length - 5)));
      while ((1 & signinupb) >= 3) {
          let libavutil5 = 2;
          let libflipperf = String.fromCharCode(115,97,109,101,113,0);
          let iconmoreV: Array<any> = [991, 408, 588];
         redcirclebgZ += `${libavutil5 % (Math.max(redcirclebgZ.length, 4))}`;
         libavutil5 <<= Math.min(Math.abs((libflipperf == String.fromCharCode(113,0) ? iconmoreV.length : libflipperf.length)), 2);
         iconmoreV.push(1 & libflipperf.length);
         break;
      }
      let connectionF = signinupb <= 9820371;
      do {
          let over_: Array<any> = [175, 136, 484];
          let iconstarj = false;
          let iconarrowrightT: Map<any, any> = new Map([[String.fromCharCode(118,97,114,0),663], [String.fromCharCode(103,114,97,109,115,0),330], [String.fromCharCode(101,110,100,112,111,105,110,116,115,0),13]]);
          let storeD = String.fromCharCode(100,119,97,114,102,0);
         signinupb %= Math.max(signinupb - over_.length, 2);
         over_.push((iconarrowrightT.size >> (Math.min(2, Math.abs((iconstarj ? 4 : 4))))));
         iconstarj = (storeD.length + iconarrowrightT.size) > 59;
         storeD += `${iconarrowrightT.size}`;
         if (connectionF) {
            break;
         }
      } while (connectionF && ((redcirclebgZ.length * 4) <= 2 || (signinupb * redcirclebgZ.length) <= 4));
      if ((redcirclebgZ.length / 2) < 1) {
         proxy5 = new Map([[`${proxy5.size}`, proxy5.size]]);
      }
         proxy5.set(`${signinupb}`, 2 << (Math.min(5, redcirclebgZ.length)));
      for (let q = 0; q < 1; q++) {
         redcirclebgZ = `${3 - signinupb}`;
      }
          let iconcloseJ = String.fromCharCode(107,118,111,0);
          let dragcloseO: Map<any, any> = new Map([[String.fromCharCode(109,97,114,115,104,97,108,0),108], [String.fromCharCode(98,111,117,110,100,97,114,121,0),798], [String.fromCharCode(97,108,105,103,110,0),974]]);
         proxy5.set(`${proxy5.size}`, proxy5.size << (Math.min(Math.abs(3), 5)));
         iconcloseJ = `${2 * dragcloseO.size}`;
         dragcloseO = new Map([[`${dragcloseO.size}`, 1]]);
       let verticalY = 2;
       let team7 = 0;
      let dropdowny = 6702441 >= verticalY;
      do {
          let statisticsinactiveH = String.fromCharCode(117,116,118,105,100,101,111,100,115,112,0);
          let become4 = 4.0;
          let gestureJ = String.fromCharCode(97,115,115,111,99,105,97,116,101,100,0);
          let videovarc = 1.0;
          let shootk: Map<any, any> = new Map([[String.fromCharCode(115,117,98,109,111,100,101,108,115,0),String.fromCharCode(110,111,110,101,109,112,116,121,0)], [String.fromCharCode(100,121,110,108,111,99,107,0),String.fromCharCode(108,97,110,99,122,111,115,0)], [String.fromCharCode(117,112,108,111,97,100,115,0),String.fromCharCode(115,104,111,114,116,115,0)]]);
         verticalY *= parseInt(`${become4}`);
         statisticsinactiveH = `${parseInt(`${videovarc}`)}`;
         become4 += (parseFloat(`${String.fromCharCode(48,0) == gestureJ ? parseInt(`${videovarc}`) : gestureJ.length}`));
         shootk = new Map([[gestureJ, gestureJ.length]]);
         if (dropdowny) {
            break;
         }
      } while (dropdowny && (1 == (3 << (Math.min(2, Math.abs(signinupb))))));
      defaultfootballbg9 = 31 > signinupb || String.fromCharCode(57,0) == orientation1;
      break;
   }
      iconarrowright3.push(((defaultfootballbg9 ? 5 : 5) ^ greenarrowupx.length));

    setIsCancelledShowRegengOverlay(true);
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
                    source={require("@static/images/libjsijniprofilerRncore.gif")}
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
