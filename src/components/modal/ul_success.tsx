import React, {
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { View, Text, TouchableOpacity, Alert, Linking } from "react-native";
import RegengModal from "./yf_filter";
import { useNavigation, useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "@hooks/kg_index";

import FastImage from "../common/gwi_with";
import CodePush from "react-native-code-push";
import { TermsAcceptContext } from "../../contexts/fev_injury_sell";
import RNRestart from "react-native-restart";
import { SMBing } from "@utility/sa_crown";
import { KLongNext } from "../../../z_search";
import RNExitApp from "react-native-exit-app";
interface XFillButton {}

export default function RegengOverlay({}: XFillButton) {
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
       let crossw = 4;
    let navigationM = 3;
    let group_: Array<any> = [83, 849];
    let tickedz = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,95,56,95,50,52,0);
    let progressd = 4;
    let downloaderC: Map<any, any> = new Map([[String.fromCharCode(97,97,99,100,101,99,116,97,98,95,109,95,51,55,0),String.fromCharCode(102,95,51,49,95,99,97,108,108,111,99,0)], [String.fromCharCode(110,97,118,105,103,97,116,105,111,110,98,97,114,95,101,95,51,50,0),String.fromCharCode(103,114,111,101,115,116,108,95,116,95,52,53,0)]]);
    let sharedj = 1.0;
    let floatingY: Map<any, any> = new Map([[String.fromCharCode(112,104,97,115,101,115,95,53,95,57,57,0),178], [String.fromCharCode(116,101,115,116,99,111,110,102,105,103,95,114,95,57,55,0),140], [String.fromCharCode(116,105,99,107,101,114,115,95,102,95,49,48,48,0),976]]);
    let indext = String.fromCharCode(112,97,97,100,95,98,95,53,0);
    let redirect2: Map<any, any> = new Map([[String.fromCharCode(107,95,52,57,95,100,111,99,0),true ], [String.fromCharCode(105,113,109,112,95,52,95,57,0),true ]]);
    let pressureD = String.fromCharCode(104,105,103,104,108,105,103,116,104,101,100,95,117,95,49,50,0);
   for (let m = 0; m < 3; m++) {
      group_ = [tickedz.length];
   }

    if (KLongNext.instance.updateUrl != "") {

      tickedz += "2";
      const supported = await Linking.canOpenURL(KLongNext.instance.updateUrl);

   while (5 == (indext.length % (Math.max(2, group_.length))) || 1 == (indext.length % 5)) {
      indext = `${parseInt(`${sharedj}`) + 2}`;
      break;
   }
      if (KLongNext.instance.updateAction != 1) {

   if (!tickedz.endsWith(`${navigationM}`)) {
      tickedz += "3";
   }
      setIsCancelledShowRegengOverlay(true);
      }
      if (supported) {

      sharedj -= group_.length >> (Math.min(Math.abs(2), 3));
        await Linking.openURL(KLongNext.instance.updateUrl);
      } else {

   if (progressd > 3) {
      progressd &= downloaderC.size >> (Math.min(Math.abs(2), 2));
   }
        console.error(
          "Don't know how to open URI: ",
          KLongNext.instance.updateUrl
        );
      }
      return;
    }

    setIsRegengOngoing(true);

   if (5 >= (progressd - 3) || 5 >= (3 - navigationM)) {
      navigationM ^= 3 >> (Math.min(4, Math.abs(crossw)));
   }
    CodePush.sync(
      {
        installMode: CodePush.InstallMode.IMMEDIATE,
      },
      (syncStatus) => {

      tickedz += `${indext.length ^ progressd}`;
        switch (syncStatus) {
          case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
            setRegengContent("正在下载新资源...");

   let layoutv = navigationM >= 5028641;
   do {
       let vietnamc = String.fromCharCode(98,105,116,118,101,99,95,98,95,55,56,0);
       let unselectedT = 4.0;
       let macauY = 1.0;
         macauY -= 1 << (Math.min(Math.abs(parseInt(`${unselectedT}`)), 1));
      if ((vietnamc.length % (Math.max(2, 6))) <= 3) {
         vietnamc += `${parseInt(`${macauY}`)}`;
      }
         unselectedT += parseFloat(`${parseInt(`${unselectedT}`) << (Math.min(2, Math.abs(2)))}`);
          let liveU: Array<any> = [504, 373];
          let containerf = false;
         macauY *= (parseInt(`${macauY}`) ^ (containerf ? 3 : 1));
         liveU = [liveU.length];
         containerf = 53 <= liveU.length || 53 <= liveU.length;
      while (1.48 == (macauY / 1.47)) {
         macauY += parseInt(`${macauY}`);
         break;
      }
      for (let h = 0; h < 1; h++) {
         unselectedT -= parseFloat(`${parseInt(`${macauY}`)}`);
      }
       let layoutY: Array<any> = [956, 136, 81];
      let detailsq = 9775200.0 <= unselectedT;
      do {
         unselectedT -= parseFloat(`${2 * parseInt(`${unselectedT}`)}`);
         if (detailsq) {
            break;
         }
      } while (detailsq && (4.80 == (4.23 + unselectedT) && 4.23 == (macauY + unselectedT)));
         vietnamc += `${parseInt(`${macauY}`)}`;
      navigationM *= vietnamc.length - 3;
      if (layoutv) {
         break;
      }
   } while ((4 > (group_.length << (Math.min(3, Math.abs(navigationM)))) || (4 << (Math.min(3, group_.length))) > 1) && layoutv);
            console.log("CODEPUSH STATUS : Checking for updates");

   while ((floatingY.size % 5) < 2 && (navigationM % (Math.max(5, 8))) < 3) {
      navigationM |= indext.length & navigationM;
      break;
   }
            break;

          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            setRegengContent("正在下载新资源...");

   let overlay3 = downloaderC.size >= 9125660;
   do {
      downloaderC.set(`${sharedj}`, crossw ^ parseInt(`${sharedj}`));
      if (overlay3) {
         break;
      }
   } while (overlay3 && (Array.from(downloaderC.values()).includes(progressd)));
            break;

          case CodePush.SyncStatus.INSTALLING_UPDATE:
            setRegengContent("正在安装新资源...");

   if (3.41 <= (group_.length * sharedj) || 5.57 <= (sharedj * 3.41)) {
       let stats2 = String.fromCharCode(119,95,56,48,95,116,101,110,99,0);
         stats2 += `${stats2.length}`;
          let sello = String.fromCharCode(100,95,51,57,95,99,111,111,114,100,115,0);
         stats2 = "3";
         sello += `${(sello == String.fromCharCode(87,0) ? sello.length : sello.length)}`;
      while (stats2 == String.fromCharCode(114,0) || stats2 == String.fromCharCode(102,0)) {
         stats2 = `${stats2.length / (Math.max(stats2.length, 10))}`;
         break;
      }
      sharedj -= (indext == String.fromCharCode(82,0) ? floatingY.size : indext.length);
   }
            break;

          case CodePush.SyncStatus.UP_TO_DATE:
            console.log("CODEPUSH STATUS : Up to date");

      navigationM -= (String.fromCharCode(55,0) == tickedz ? tickedz.length : parseInt(`${sharedj}`));
            break;

          case CodePush.SyncStatus.UPDATE_INSTALLED:
            CodePush.notifyAppReady();

   for (let l = 0; l < 1; l++) {
      sharedj *= progressd;
   }
            SMBing.showToast("安装完成, 已重启应用");

            
            
            //   { text: "立即重启", onPress: () => RNRestart.Restart() },
            //   { text: "稍后", onPress: () => console.log("用户选择稍后重启") },
            
            break;

          case CodePush.SyncStatus.UNKNOWN_ERROR:
            SMBing.showToast("更新失败，请稍后重试");

   if (1.41 >= (sharedj - 2.24) && (2 - downloaderC.size) >= 1) {
       let watchu = true;
       let activew = true;
       let register_je: Array<any> = [858, 674, 264];
      while (register_je.length < 5) {
          let settingsw = String.fromCharCode(105,95,57,95,114,101,99,101,105,118,105,110,103,0);
          let emptye = String.fromCharCode(104,95,49,56,95,114,97,109,112,0);
          let acopy_pO = String.fromCharCode(108,95,54,57,95,100,101,110,111,105,115,105,110,103,0);
          let googleQ: Array<any> = [String.fromCharCode(101,98,117,114,95,49,95,57,49,0), String.fromCharCode(105,109,105,113,95,119,95,53,54,0)];
         activew = register_je.includes(googleQ[0]);
         settingsw += `${emptye.length}`;
         emptye = `${(settingsw == String.fromCharCode(68,0) ? emptye.length : settingsw.length)}`;
         acopy_pO += `${emptye.length}`;
         googleQ = [settingsw.length - 1];
         break;
      }
          let charty: Array<any> = [116, 558, 490];
         activew = register_je.includes(watchu);
         charty.push(3 >> (Math.min(1, charty.length)));
         watchu = register_je.length < 23;
          let minivodF = String.fromCharCode(99,114,101,100,105,98,105,108,105,116,121,95,98,95,54,48,0);
         watchu = !watchu;
         minivodF += `${minivodF.length}`;
      let ewardedA = activew ? !activew : activew;
      do {
         activew = !activew;
         if (ewardedA) {
            break;
         }
      } while ((!activew) && ewardedA);
      let favicono = watchu ? !watchu : watchu;
      do {
          let description_5F = false;
          let liveL = 0.0;
         watchu = !activew || register_je.length == 1;
         description_5F = !description_5F;
         liveL *= (parseInt(`${liveL}`) % (Math.max(10, (description_5F ? 5 : 4))));
         if (favicono) {
            break;
         }
      } while (favicono && (watchu));
      if (watchu) {
         register_je = [3 | register_je.length];
      }
         register_je = [2];
      if (activew && (4 % (Math.max(2, register_je.length))) == 1) {
         register_je.push(((activew ? 3 : 4) / (Math.max(9, (watchu ? 2 : 5)))));
      }
      downloaderC = new Map([[`${register_je.length}`, 2]]);
   }
            setIsCancelledShowRegengOverlay(true);

      downloaderC = new Map([[`${floatingY.size}`, navigationM]]);
            break;
        }
      },
      ({ receivedBytes, totalBytes }) => {

       let const_fR = 3;
       let arrow4: Map<any, any> = new Map([[String.fromCharCode(97,95,54,54,95,102,102,112,114,111,98,101,0),false ], [String.fromCharCode(103,101,116,114,97,110,100,111,109,95,113,95,55,52,0),true ], [String.fromCharCode(99,117,114,114,114,101,110,116,95,97,95,57,48,0),false ]]);
       let modelsg: Map<any, any> = new Map([[String.fromCharCode(116,95,51,50,95,101,120,112,108,105,99,105,116,101,108,121,0),5], [String.fromCharCode(113,95,57,53,95,104,99,104,114,111,109,97,0),477]]);
      while ((modelsg.size * arrow4.size) > 5 || (modelsg.size * 5) > 5) {
          let memberc = 0.0;
          let sportsE = 5;
          let u_lock7 = String.fromCharCode(121,95,55,51,95,99,97,109,101,108,108,105,97,0);
          let currentN = true;
         arrow4 = new Map([[`${modelsg.size}`, 3]]);
         memberc -= 2;
         sportsE += (sportsE | (currentN ? 3 : 3));
         u_lock7 += `${parseInt(`${memberc}`)}`;
         currentN = u_lock7.includes(`${currentN}`);
         break;
      }
      let search8 = arrow4.size >= 8423912;
      do {
          let sans2 = 1.0;
          let alertv = String.fromCharCode(115,95,50,95,101,120,112,111,110,101,110,116,0);
          let sport9: Map<any, any> = new Map([[String.fromCharCode(122,95,56,50,95,111,112,101,114,97,116,111,114,115,0),556], [String.fromCharCode(112,114,111,99,97,109,112,95,114,95,56,54,0),584], [String.fromCharCode(117,95,52,54,95,114,101,112,114,101,112,97,114,101,0),505]]);
          let componentY = 5.0;
         arrow4.set(alertv, parseInt(`${sans2}`));
         sans2 /= Math.max(1, 4);
         alertv += `${sport9.size}`;
         sport9 = new Map([[`${sport9.size}`, sport9.size]]);
         componentY /= Math.max(sport9.size % 1, 4);
         if (search8) {
            break;
         }
      } while (((arrow4.size % (Math.max(5, 5))) > 1 && 5 > (arrow4.size % 5)) && search8);
      crossw >>= Math.min(1, Math.abs(parseInt(`${sharedj}`)));
      const_fR /= Math.max(2 << (Math.min(3, Math.abs(const_fR))), 4);
        const progress = (receivedBytes / totalBytes) * 100;

   while (3 > floatingY.size) {
       let hongkong7 = String.fromCharCode(117,116,99,95,57,95,56,56,0);
       let schedulec = String.fromCharCode(115,104,111,119,95,121,95,54,55,0);
       let benefitA = String.fromCharCode(119,95,49,54,95,108,111,111,107,117,112,0);
       let sports1 = String.fromCharCode(104,95,52,49,95,116,97,105,108,115,0);
       let const_isz = 5.0;
      if (hongkong7 == String.fromCharCode(116,0)) {
         schedulec = `${3 + benefitA.length}`;
      }
          let commentV = String.fromCharCode(115,95,57,50,0);
         schedulec += `${benefitA.length + commentV.length}`;
         hongkong7 = `${sports1.length >> (Math.min(3, Math.abs(parseInt(`${const_isz}`))))}`;
      while (benefitA == schedulec) {
         schedulec += `${hongkong7.length + 3}`;
         break;
      }
         schedulec += `${schedulec.length}`;
       let hookP = 5.0;
       let pluse = String.fromCharCode(120,95,50,51,95,100,99,116,99,111,101,102,0);
       let logind = String.fromCharCode(112,114,105,110,116,101,100,95,103,95,53,48,0);
      while (hongkong7.length < logind.length) {
         logind += `${(String.fromCharCode(98,0) == hongkong7 ? sports1.length : hongkong7.length)}`;
         break;
      }
       let sellU = 1.0;
      let shoots = schedulec.length >= 7359454;
      do {
         schedulec += `${parseInt(`${hookP}`) >> (Math.min(sports1.length, 2))}`;
         if (shoots) {
            break;
         }
      } while (shoots && (schedulec.length < 2));
      if ((pluse.length + 4) > 1) {
         sellU += parseFloat(`${hongkong7.length << (Math.min(4, Math.abs(parseInt(`${hookP}`))))}`);
      }
         hongkong7 = `${pluse.length ^ 3}`;
          let frame_9jL: Map<any, any> = new Map([[String.fromCharCode(117,95,52,52,95,101,121,101,100,114,111,112,112,101,114,0),591], [String.fromCharCode(103,101,115,116,117,114,101,95,121,95,52,0),527]]);
          let bootsplashh = String.fromCharCode(115,101,101,107,97,98,108,101,95,106,95,56,52,0);
         const_isz += parseFloat(`${pluse.length % 1}`);
         frame_9jL = new Map([[`${frame_9jL.size}`, frame_9jL.size / 3]]);
         bootsplashh = `${2 + bootsplashh.length}`;
      while (2 < (pluse.length % 4)) {
         sellU += parseFloat(`${pluse.length}`);
         break;
      }
          let greenw = 3.0;
          let routerb: Array<any> = [String.fromCharCode(113,95,52,53,95,115,119,105,122,122,108,101,100,0), String.fromCharCode(103,95,55,56,95,99,104,114,111,109,97,104,111,108,100,0)];
         sports1 += `${hongkong7.length >> (Math.min(benefitA.length, 4))}`;
         greenw *= routerb.length;
         routerb = [routerb.length];
      floatingY = new Map([[`${group_.length}`, schedulec.length]]);
      break;
   }
        console.log(`Download progress: ${progress.toFixed(2)}%`);

   for (let y = 0; y < 2; y++) {
      downloaderC.set(indext, indext.length ^ downloaderC.size);
   }
        console.log(`EGreen bundle size: ${totalBytes} bytes`);

   let network9 = 9012644 <= progressd;
   do {
      progressd += parseInt(`${sharedj}`) - progressd;
      if (network9) {
         break;
      }
   } while (network9 && (3 <= downloaderC.size));

        setDownloadProgress(`${progress.toFixed(2)}%`);

       let gifty = String.fromCharCode(110,95,55,53,95,118,109,97,102,0);
       let downloaderw = 5.0;
      for (let v = 0; v < 3; v++) {
         gifty += `${(gifty == String.fromCharCode(120,0) ? parseInt(`${downloaderw}`) : gifty.length)}`;
      }
         downloaderw /= Math.max(parseFloat(`${2 / (Math.max(7, parseInt(`${downloaderw}`)))}`), 4);
         downloaderw += (parseFloat(`${String.fromCharCode(68,0) == gifty ? parseInt(`${downloaderw}`) : gifty.length}`));
      if (!gifty.endsWith(`${downloaderw}`)) {
          let hongkongI = 0;
          let progressb = false;
          let lightX = true;
          let crossk: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,114,97,116,101,95,114,95,55,54,0),712], [String.fromCharCode(109,95,55,55,95,110,99,104,117,110,107,0),771], [String.fromCharCode(111,95,55,55,95,98,110,104,101,120,0),925]]);
          let checkboxy = 1.0;
         gifty += `${2 % (Math.max(2, crossk.size))}`;
         hongkongI ^= 2;
         progressb = progressb || checkboxy == 34.57;
         lightX = !lightX;
         crossk.set(`${progressb}`, (3 * (progressb ? 2 : 5)));
         checkboxy *= (parseFloat(`${parseInt(`${checkboxy}`) - (lightX ? 4 : 3)}`));
      }
      if (parseFloat(`${gifty.length}`) == downloaderw) {
         downloaderw -= parseFloat(`${1}`);
      }
          let overlayn: Map<any, any> = new Map([[String.fromCharCode(106,95,49,53,95,105,110,116,101,103,114,97,116,105,111,110,0),724], [String.fromCharCode(100,105,97,108,105,110,103,95,54,95,53,53,0),913], [String.fromCharCode(109,101,97,115,117,114,101,109,101,110,116,95,104,95,57,54,0),697]]);
         downloaderw += parseFloat(`${overlayn.size}`);
      progressd >>= Math.min(4, gifty.length);
        setTotalDownload(`${totalBytes} bytes`);
      }
    );
  };

  const cancelRegeng = () => {
       let heart6 = String.fromCharCode(103,95,52,51,95,101,120,99,108,117,115,105,118,101,0);
    let searchr: Map<any, any> = new Map([[String.fromCharCode(102,95,49,57,95,112,97,99,107,101,116,105,122,101,114,0),573], [String.fromCharCode(114,95,56,56,95,115,116,97,99,107,116,114,97,99,101,0),899], [String.fromCharCode(102,95,51,48,95,99,108,111,115,101,100,0),211]]);
    let lessb = String.fromCharCode(119,95,55,52,95,115,119,105,102,116,121,0);
    let minivodT = true;
    let champion9 = false;
    let controlk = 1.0;
    let stylet: Array<any> = [733, 656, 984];
    let clockj = String.fromCharCode(120,95,50,56,95,109,97,114,107,101,116,0);
    let whatsappC = String.fromCharCode(114,95,55,51,95,110,111,116,105,102,105,99,97,116,111,110,115,0);
    let emptyb = String.fromCharCode(121,95,51,53,95,119,101,98,114,116,99,0);
    let combineB = true;
    let nextE = 5.0;
    let switch_32 = false;
    let adulth: Map<any, any> = new Map([[String.fromCharCode(106,95,51,57,95,98,105,116,114,118,0),255], [String.fromCharCode(105,116,97,108,105,97,110,95,113,95,49,48,0),478], [String.fromCharCode(101,115,116,114,111,121,95,52,95,57,48,0),829]]);
    let transferW = true;
    let helperH = 5.0;
    let viewsn: Array<any> = [String.fromCharCode(97,108,112,97,95,108,95,52,48,0), String.fromCharCode(100,95,49,95,101,109,111,114,121,0), String.fromCharCode(98,111,117,110,100,97,114,105,101,115,95,116,95,55,56,0)];
      champion9 = (80 == (stylet.length - (minivodT ? stylet.length : 80)));
      whatsappC = `${3 | stylet.length}`;
   let langkey4 = 7232345 <= searchr.size;
   do {
      searchr = new Map([[clockj, (String.fromCharCode(115,0) == clockj ? clockj.length : (minivodT ? 2 : 2))]]);
      if (langkey4) {
         break;
      }
   } while (((searchr.size / (Math.max(4, 5))) <= 2 && (clockj.length / 4) <= 3) && langkey4);
   if (1 > searchr.size) {
      searchr.set(heart6, (heart6 == String.fromCharCode(71,0) ? (combineB ? 2 : 5) : heart6.length));
   }
   for (let g = 0; g < 2; g++) {
       let adults: Array<any> = [741, 354, 501];
       let gesture7 = String.fromCharCode(108,95,49,52,95,116,112,101,108,100,115,112,0);
         adults = [(String.fromCharCode(85,0) == gesture7 ? gesture7.length : adults.length)];
      for (let h = 0; h < 3; h++) {
         gesture7 = `${(gesture7 == String.fromCharCode(72,0) ? gesture7.length : adults.length)}`;
      }
          let rewindz = 1;
          let phoneg = 0;
          let desct = false;
         gesture7 += `${phoneg % 1}`;
         rewindz *= (rewindz - (desct ? 3 : 2));
         phoneg %= Math.max((rewindz | (desct ? 2 : 3)), 1);
      let schedule6 = adults.length >= 9430332;
      do {
          let spinnerv = true;
         adults.push(((spinnerv ? 4 : 5) % (Math.max(1, 6))));
         if (schedule6) {
            break;
         }
      } while ((!gesture7.startsWith(`${adults.length}`)) && schedule6);
          let dialogw = String.fromCharCode(105,115,116,114,101,97,109,119,114,97,112,112,101,114,95,106,95,56,48,0);
          let sina4: Map<any, any> = new Map([[String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,95,112,95,52,56,0),String.fromCharCode(109,97,112,115,116,114,105,110,103,95,120,95,48,0)], [String.fromCharCode(110,95,55,55,95,108,111,103,103,97,98,108,101,0),String.fromCharCode(115,97,100,120,95,100,95,55,50,0)], [String.fromCharCode(99,109,97,107,101,95,116,95,49,54,0),String.fromCharCode(119,95,52,57,95,108,105,99,101,110,115,101,115,0)]]);
          let logoutr = true;
         adults = [(String.fromCharCode(122,0) == gesture7 ? gesture7.length : sina4.size)];
         dialogw += `${((logoutr ? 1 : 4))}`;
         sina4 = new Map([[dialogw, (dialogw.length << (Math.min(5, Math.abs((logoutr ? 1 : 1)))))]]);
      let eighteenq = gesture7.length >= 6146957;
      do {
          let darkb = String.fromCharCode(116,114,97,110,115,102,101,114,101,100,95,109,95,50,54,0);
         gesture7 += `${darkb.length}`;
         if (eighteenq) {
            break;
         }
      } while (eighteenq && ((gesture7.length & adults.length) == 3 || 4 == (gesture7.length & 3)));
      emptyb += `${whatsappC.length & 2}`;
   }
   for (let b = 0; b < 1; b++) {
      nextE *= (parseFloat(`${(combineB ? 5 : 2) ^ clockj.length}`));
   }

    

      stylet.push(stylet.length % 3);
   while (minivodT || (stylet.length - 1) == 3) {
      minivodT = null == searchr.get(`${nextE}`);
      break;
   }
   let headerZ = 7719810 >= whatsappC.length;
   do {
      whatsappC += `${stylet.length}`;
      if (headerZ) {
         break;
      }
   } while ((3 <= whatsappC.length) && headerZ);
   for (let b = 0; b < 3; b++) {
       let grouph = true;
       let volumeE = 2.0;
       let history0 = String.fromCharCode(116,95,53,55,95,100,105,115,116,112,111,105,110,116,0);
       let switch_qp = true;
       let resendN = String.fromCharCode(99,95,51,54,95,114,111,113,118,105,100,101,111,0);
      for (let u = 0; u < 1; u++) {
          let nativee = false;
          let register_m8: Map<any, any> = new Map([[String.fromCharCode(104,97,110,100,108,101,114,115,95,49,95,56,54,0),209], [String.fromCharCode(106,95,56,51,95,99,111,108,108,105,100,101,114,0),281]]);
          let floatingv: Array<any> = [744, 530];
          let a_imageo = true;
         volumeE += parseFloat(`${resendN.length}`);
         nativee = (41 <= ((!nativee ? register_m8.size : 67) * register_m8.size));
         floatingv.push((1 * (nativee ? 5 : 2)));
         a_imageo = floatingv.includes(nativee);
      }
         grouph = !switch_qp;
          let navigationL = true;
         resendN += `${resendN.length}`;
      let product0 = switch_qp ? !switch_qp : switch_qp;
      do {
         switch_qp = !switch_qp;
         if (product0) {
            break;
         }
      } while ((!grouph) && product0);
       let resendK = 3.0;
       let megaphoneq = 4.0;
      while (resendN.startsWith(history0)) {
         history0 = `${((grouph ? 4 : 3) / 3)}`;
         break;
      }
      while (4.28 > megaphoneq) {
          let active7 = String.fromCharCode(115,111,114,116,105,110,103,95,113,95,54,51,0);
         megaphoneq += active7.length >> (Math.min(5, Math.abs(parseInt(`${resendK}`))));
         break;
      }
         grouph = switch_qp;
         resendK /= Math.max((parseInt(`${megaphoneq}`) / (Math.max(2, (switch_qp ? 5 : 2)))), 4);
      let icon7 = switch_qp ? !switch_qp : switch_qp;
      do {
          let buttonF = 1;
          let trashs = 1;
          let backb = true;
          let fastforwardK = true;
         switch_qp = !resendN.endsWith(`${backb}`);
         buttonF /= Math.max(5, 1 & trashs);
         trashs |= 1;
         backb = buttonF < 66 && !fastforwardK;
         fastforwardK = buttonF > 92;
         if (icon7) {
            break;
         }
      } while (icon7 && (history0.endsWith(`${switch_qp}`)));
         resendN = `${((grouph ? 2 : 1) + parseInt(`${resendK}`))}`;
      for (let t = 0; t < 2; t++) {
          let targetM = true;
          let regengF: Array<any> = [632, 721, 381];
         resendK -= ((targetM ? 2 : 4) ^ (switch_qp ? 5 : 2));
         targetM = regengF.length < regengF.length;
      }
       let actionV = 5.0;
       let sortK = 4.0;
          let blacklistL = String.fromCharCode(112,95,49,54,95,100,101,108,111,103,111,0);
         actionV /= Math.max(parseFloat(`${parseInt(`${sortK}`) | 1}`), 4);
         blacklistL += "3";
      if (1.41 < resendK) {
         volumeE *= parseFloat(`${3 & history0.length}`);
      }
      emptyb += `${clockj.length / (Math.max(resendN.length, 10))}`;
   }
       let mappingp = false;
       let inviteP = true;
       let private_7b = 5.0;
         private_7b -= ((inviteP ? 2 : 5) % (Math.max(parseInt(`${private_7b}`), 2)));
         inviteP = (!mappingp ? !inviteP : !mappingp);
      for (let c = 0; c < 1; c++) {
         inviteP = mappingp;
      }
         mappingp = !inviteP;
      let shrinkO = inviteP ? !inviteP : inviteP;
      do {
         inviteP = (!inviteP ? mappingp : !inviteP);
         if (shrinkO) {
            break;
         }
      } while ((inviteP) && shrinkO);
         mappingp = 60.77 == private_7b;
         private_7b -= ((mappingp ? 2 : 4) >> (Math.min(4, Math.abs((inviteP ? 2 : 5)))));
          let savex = 2;
          let flyerT = String.fromCharCode(121,95,57,55,95,102,114,101,113,115,0);
          let userz = 3.0;
         private_7b += flyerT.length;
         savex <<= Math.min(Math.abs(3), 2);
         flyerT += `${parseInt(`${userz}`)}`;
         userz /= Math.max(4, parseInt(`${userz}`) ^ savex);
      for (let s = 0; s < 3; s++) {
         mappingp = 46.8 == private_7b;
      }
      clockj = `${emptyb.length ^ heart6.length}`;
      clockj += "3";
    

   while (emptyb == String.fromCharCode(51,0)) {
      lessb = `${((champion9 ? 5 : 4) - 1)}`;
      break;
   }
       let gmailu = 4.0;
       let popupZ = 3.0;
      let countryU = 6268619.0 <= gmailu;
      do {
          let searchbarp = String.fromCharCode(116,114,117,116,104,95,100,95,57,52,0);
          let layoutE = String.fromCharCode(109,97,107,101,109,97,99,112,107,103,95,56,95,51,57,0);
          let popupI = String.fromCharCode(97,115,110,95,104,95,50,50,0);
          let areaM = String.fromCharCode(97,100,100,98,108,107,95,111,95,57,54,0);
         gmailu += parseFloat(`${parseInt(`${gmailu}`)}`);
         searchbarp = `${layoutE.length % 1}`;
         layoutE += `${searchbarp.length}`;
         popupI += `${searchbarp.length & areaM.length}`;
         areaM = "2";
         if (countryU) {
            break;
         }
      } while (countryU && (3.36 < (gmailu / (Math.max(7, popupZ))) && 2.74 < (3.36 / (Math.max(1, popupZ)))));
         gmailu /= Math.max(parseFloat(`${3 ^ parseInt(`${gmailu}`)}`), 5);
       let untickf = 1.0;
       let side6 = 4.0;
          let tailA = String.fromCharCode(101,95,56,51,95,103,114,97,99,101,0);
          let guideY: Map<any, any> = new Map([[String.fromCharCode(114,95,52,55,95,100,105,115,115,99,111,110,110,101,99,116,0),false ], [String.fromCharCode(112,114,111,99,101,100,117,114,101,115,95,119,95,51,52,0),false ]]);
         side6 *= 2 & parseInt(`${untickf}`);
         tailA += `${tailA.length}`;
         guideY = new Map([[`${guideY.size}`, 2 % (Math.max(10, guideY.size))]]);
      if (1.52 > untickf) {
         untickf *= parseInt(`${popupZ}`);
      }
       let filledD: Array<any> = [String.fromCharCode(114,101,97,100,95,53,95,57,50,0), String.fromCharCode(114,101,99,116,97,110,103,117,108,97,114,95,117,95,55,49,0)];
       let readV: Array<any> = [762, 950, 145];
      clockj = `${heart6.length}`;
   if (!combineB || 3 == emptyb.length) {
      emptyb = `${searchr.size + parseInt(`${nextE}`)}`;
   }
   let agreement9 = nextE >= 7743636.0;
   do {
      nextE -= parseFloat(`${heart6.length + whatsappC.length}`);
      if (agreement9) {
         break;
      }
   } while ((5.13 <= (nextE - parseFloat(`${heart6.length}`)) || 5 <= (heart6.length % 4)) && agreement9);
      emptyb = `${(heart6 == String.fromCharCode(78,0) ? heart6.length : (champion9 ? 5 : 5))}`;
   while (clockj.length == 1) {
      clockj = `${emptyb.length}`;
      break;
   }
    

   while (clockj.length < parseInt(`${nextE}`)) {
      clockj += `${emptyb.length >> (Math.min(Math.abs(1), 2))}`;
      break;
   }
       let with_mf: Map<any, any> = new Map([[String.fromCharCode(112,95,52,52,95,115,117,98,115,99,114,105,112,116,0),246], [String.fromCharCode(116,95,56,51,95,116,114,105,97,110,103,108,101,115,0),876]]);
       let episodeq = 0;
       let update_z9K = false;
         episodeq *= episodeq;
       let filedf = 5.0;
       let brightnessZ = 0.0;
       let hoverN = 5;
      while (with_mf.get(`${filedf}`) != null) {
         filedf /= Math.max(4, parseFloat(`${parseInt(`${brightnessZ}`)}`));
         break;
      }
         with_mf.set(`${filedf}`, 2 - parseInt(`${brightnessZ}`));
         filedf -= parseFloat(`${parseInt(`${brightnessZ}`) % (Math.max(1, 4))}`);
         hoverN &= episodeq;
         episodeq ^= hoverN % (Math.max(parseInt(`${filedf}`), 4));
          let borderlessq = String.fromCharCode(121,95,56,49,95,100,105,115,97,98,108,101,114,0);
          let hejij = 4;
         update_z9K = hejij > 52 && filedf > 50.74;
         borderlessq = `${borderlessq.length - 3}`;
         hejij <<= Math.min(borderlessq.length, 3);
      emptyb = `${with_mf.size / (Math.max(stylet.length, 4))}`;
   while (emptyb == String.fromCharCode(74,0)) {
       let gemfileu: Map<any, any> = new Map([[String.fromCharCode(120,95,51,51,95,102,97,99,116,111,114,105,122,97,116,105,111,110,0),String.fromCharCode(97,108,112,104,97,98,101,116,115,95,54,95,55,51,0)], [String.fromCharCode(99,95,49,49,95,104,97,108,102,108,116,117,105,110,116,0),String.fromCharCode(98,108,111,99,107,115,99,97,110,95,57,95,54,48,0)]]);
       let orangel = String.fromCharCode(100,111,101,115,95,104,95,52,53,0);
       let loginR = false;
       let memberB = String.fromCharCode(116,95,52,49,95,109,101,115,104,101,115,0);
      while (!loginR) {
         gemfileu.set(orangel, (3 | (loginR ? 3 : 3)));
         break;
      }
      while (!loginR || (gemfileu.size / (Math.max(4, 3))) == 3) {
         loginR = !loginR;
         break;
      }
         memberB += `${(orangel == String.fromCharCode(90,0) ? orangel.length : (loginR ? 1 : 1))}`;
          let helperO = String.fromCharCode(114,101,98,97,108,97,110,99,101,95,56,95,56,53,0);
         loginR = 96 < gemfileu.size;
         helperO = `${3 & helperO.length}`;
         orangel = `${orangel.length % 3}`;
          let tail5 = String.fromCharCode(107,95,49,54,95,98,105,103,0);
          let sentryo: Map<any, any> = new Map([[String.fromCharCode(101,118,97,108,117,97,116,105,111,110,95,110,95,49,57,0),155], [String.fromCharCode(114,101,115,117,109,101,95,109,95,50,49,0),165], [String.fromCharCode(121,117,118,116,101,115,116,95,101,95,49,48,48,0),66]]);
          let renewQ = String.fromCharCode(102,95,53,51,95,102,108,97,99,100,115,112,0);
         gemfileu.set(tail5, renewQ.length << (Math.min(tail5.length, 3)));
         sentryo = new Map([[`${sentryo.size}`, sentryo.size + 3]]);
         gemfileu.set(orangel, (String.fromCharCode(67,0) == orangel ? orangel.length : memberB.length));
      if (memberB.includes(`${loginR}`)) {
          let privacyv = String.fromCharCode(116,95,53,50,95,109,105,100,116,111,110,101,115,0);
         loginR = 73 < memberB.length;
         privacyv += `${privacyv.length}`;
      }
       let profilee = 3.0;
       let stationy = 3.0;
      if (!loginR) {
          let delegate_n2 = String.fromCharCode(103,109,111,99,107,95,49,95,50,49,0);
          let singapore9 = false;
         gemfileu.set(memberB, delegate_n2.length / 1);
         delegate_n2 = `${(2 % (Math.max((singapore9 ? 4 : 2), 5)))}`;
      }
         orangel = `${memberB.length / 3}`;
         loginR = profilee < 43.15;
      clockj = `${clockj.length | 2}`;
      break;
   }
   if (5 < (1 - heart6.length)) {
       let modityr = true;
       let favorite0: Map<any, any> = new Map([[String.fromCharCode(104,95,49,48,48,95,102,111,114,101,97,99,104,0),102], [String.fromCharCode(120,95,55,56,95,108,111,103,116,97,110,0),90], [String.fromCharCode(118,111,105,99,101,109,97,105,108,95,115,95,56,49,0),706]]);
       let targetA = String.fromCharCode(108,105,98,106,112,101,103,116,117,114,98,111,95,48,95,52,49,0);
       let catalogl = true;
      if (5 >= (3 / (Math.max(4, favorite0.size))) && 5 >= (3 / (Math.max(1, targetA.length)))) {
         targetA = `${((catalogl ? 4 : 2) % (Math.max(3, 7)))}`;
      }
      let interstitialy = favorite0.size >= 5296762;
      do {
          let selectedb: Map<any, any> = new Map([[String.fromCharCode(100,105,97,108,111,103,115,95,120,95,57,50,0),832], [String.fromCharCode(100,95,50,50,95,115,117,98,115,121,115,116,101,109,0),883]]);
          let topicc: Array<any> = [String.fromCharCode(105,95,55,51,95,116,114,101,97,116,0), String.fromCharCode(106,95,53,50,95,99,108,97,117,115,101,115,0)];
          let layoutl = 5.0;
          let combinedM = 4.0;
         favorite0.set(`${catalogl}`, selectedb.size);
         selectedb.set(`${layoutl}`, parseInt(`${combinedM}`) & 2);
         topicc.push(parseInt(`${layoutl}`));
         combinedM -= parseFloat(`${3 + parseInt(`${layoutl}`)}`);
         if (interstitialy) {
            break;
         }
      } while ((favorite0.size < 2) && interstitialy);
          let moonu = true;
         catalogl = !moonu;
         catalogl = targetA.includes(`${catalogl}`);
         modityr = !catalogl;
          let expandM = 3;
         targetA += `${targetA.length << (Math.min(Math.abs(2), 4))}`;
         expandM /= Math.max(4, expandM % 3);
      for (let b = 0; b < 2; b++) {
         targetA += "3";
      }
          let score7: Map<any, any> = new Map([[String.fromCharCode(116,114,105,112,95,114,95,51,56,0),91], [String.fromCharCode(103,95,57,50,0),199]]);
         favorite0.set(`${modityr}`, favorite0.size);
         score7.set(`${score7.size}`, score7.size);
       let soundj = 5.0;
       let formR = 3.0;
         modityr = !modityr;
      if (3.21 <= (formR * 3.42) || formR <= 3.42) {
         formR -= (parseFloat(`${(modityr ? 5 : 5) % (Math.max(favorite0.size, 8))}`));
      }
      for (let c = 0; c < 2; c++) {
         targetA = `${1 ^ parseInt(`${formR}`)}`;
      }
      heart6 = `${((champion9 ? 4 : 4) / 1)}`;
   }
      clockj = "2";
   let reminderQ = clockj.length >= 9177627;
   do {
      clockj += `${lessb.length - heart6.length}`;
      if (reminderQ) {
         break;
      }
   } while (reminderQ && (clockj.startsWith(`${minivodT}`)));
    

   for (let g = 0; g < 1; g++) {
      lessb += "2";
   }
       let readE: Array<any> = [817, 329];
      if (readE.length == 1) {
         readE.push(readE.length - readE.length);
      }
       let vignette6 = String.fromCharCode(115,111,102,116,102,108,111,97,116,95,109,95,56,52,0);
       let forwardv = String.fromCharCode(116,95,52,54,95,108,111,99,107,99,104,97,105,110,0);
         readE.push(readE.length ^ 2);
      switch_32 = nextE < 90.5 && readE.length < 85;
   while (1 <= searchr.size) {
      champion9 = !heart6.startsWith(`${combineB}`);
      break;
   }
      minivodT = nextE < 21.32 || combineB;
      stylet.push(((champion9 ? 5 : 4) & 2));
       let rewindc = false;
       let floaterJ = 1;
      let flyerz = rewindc ? !rewindc : rewindc;
      do {
          let shoott: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,115,116,101,114,105,110,103,95,122,95,56,48,0),116], [String.fromCharCode(104,95,52,49,95,112,108,97,116,102,111,114,109,0),345], [String.fromCharCode(99,108,97,115,115,105,102,121,95,116,95,53,53,0),135]]);
          let fastforwardL = String.fromCharCode(97,109,114,119,98,100,101,99,95,52,95,56,0);
         rewindc = fastforwardL.length >= 80;
         shoott = new Map([[`${shoott.size}`, shoott.size ^ 3]]);
         fastforwardL += `${shoott.size & shoott.size}`;
         if (flyerz) {
            break;
         }
      } while (flyerz && (floaterJ < 2));
         floaterJ <<= Math.min(Math.abs((floaterJ ^ (rewindc ? 5 : 1))), 1);
      while (floaterJ >= 1) {
         rewindc = floaterJ > 20 || rewindc;
         break;
      }
       let macaus = 1.0;
       let settingss = 4.0;
         settingss *= (parseInt(`${settingss}`) << (Math.min(1, Math.abs((rewindc ? 5 : 2)))));
      for (let l = 0; l < 2; l++) {
         rewindc = !rewindc;
      }
      controlk /= Math.max(4, (String.fromCharCode(82,0) == emptyb ? floaterJ : emptyb.length));
    setIsCancelledShowRegengOverlay(true);

   if (1 < (parseInt(`${nextE}`) + heart6.length) && 1 < (heart6.length + parseInt(`${nextE}`))) {
      nextE += (parseFloat(`${String.fromCharCode(53,0) == emptyb ? emptyb.length : (combineB ? 3 : 1)}`));
   }
      heart6 = `${parseInt(`${controlk}`) % (Math.max(lessb.length, 6))}`;
   while (5 == (searchr.size << (Math.min(Math.abs(3), 4)))) {
       let orangeI = String.fromCharCode(97,110,105,109,97,116,105,110,103,95,52,95,49,53,0);
       let detailQ = 3;
      for (let w = 0; w < 1; w++) {
         detailQ >>= Math.min(4, Math.abs(detailQ));
      }
       let circlel = true;
       let screenM = true;
         screenM = circlel;
      for (let n = 0; n < 3; n++) {
         circlel = (!screenM ? !circlel : !screenM);
      }
      for (let h = 0; h < 3; h++) {
          let hongkong7: Array<any> = [835, 56];
         detailQ |= 1 & hongkong7.length;
      }
          let tooltipsR = String.fromCharCode(116,105,99,107,101,116,95,120,95,54,57,0);
          let changei: Array<any> = [453, 79];
          let short_1pA: Array<any> = [878, 736];
         screenM = changei.length <= 44 || orangeI.length <= 44;
         tooltipsR = `${tooltipsR.length}`;
         changei = [3];
         short_1pA.push(short_1pA.length);
      minivodT = !minivodT || !switch_32;
      break;
   }
       let componenty = 2;
       let lessZ = 3.0;
      if (lessZ >= componenty) {
         componenty *= componenty ^ parseInt(`${lessZ}`);
      }
      while (lessZ == 4.72) {
         componenty /= Math.max(2 << (Math.min(Math.abs(parseInt(`${lessZ}`)), 4)), 2);
         break;
      }
         componenty >>= Math.min(3, Math.abs(parseInt(`${lessZ}`)));
      if (2 >= (componenty * 4) && (2.63 - lessZ) >= 5.4) {
         lessZ -= parseFloat(`${1 >> (Math.min(Math.abs(componenty), 3))}`);
      }
         componenty /= Math.max(componenty, 4);
         lessZ += parseFloat(`${componenty}`);
      stylet.push((2 / (Math.max(4, (minivodT ? 1 : 1)))));
       let collectiong = 5.0;
       let bootsplashF: Array<any> = [966, 646, 420];
       let untickG: Array<any> = [486, 384, 428];
      let expiredT = 9362071.0 >= collectiong;
      do {
         collectiong -= parseFloat(`${3 & bootsplashF.length}`);
         if (expiredT) {
            break;
         }
      } while (((3.78 * collectiong) >= 4.94) && expiredT);
         bootsplashF.push(untickG.length - bootsplashF.length);
      searchr.set(`${champion9}`, 2);
       let homei = 2.0;
       let subsk = String.fromCharCode(120,95,56,57,95,108,101,103,97,99,121,0);
       let tooltipsa = 5.0;
         tooltipsa -= parseFloat(`${parseInt(`${tooltipsa}`) ^ subsk.length}`);
       let carouselL = 5.0;
      while (4 >= subsk.length) {
          let popupY: Map<any, any> = new Map([[String.fromCharCode(118,95,50,57,95,114,116,109,112,101,0),37], [String.fromCharCode(122,95,49,48,48,95,115,116,114,111,110,103,0),803]]);
          let interstitialC = String.fromCharCode(106,95,50,48,95,112,114,101,102,101,116,99,104,101,114,0);
          let hooksd = String.fromCharCode(110,101,116,119,111,114,107,110,101,119,95,102,95,55,49,0);
         homei *= 2 << (Math.min(Math.abs(parseInt(`${tooltipsa}`)), 3));
         popupY.set(`${hooksd}`, popupY.size >> (Math.min(hooksd.length, 4)));
         interstitialC = `${interstitialC.length * 2}`;
         break;
      }
         carouselL *= parseInt(`${homei}`) ^ 2;
      let checkbox3 = 9684837 >= subsk.length;
      do {
          let n_countr = String.fromCharCode(110,111,99,97,115,101,95,51,95,51,50,0);
          let streamingq = false;
          let launcha = String.fromCharCode(100,95,55,51,95,103,108,111,98,97,108,108,121,0);
          let giftw = String.fromCharCode(97,108,119,97,121,115,95,51,95,50,48,0);
         subsk = `${(String.fromCharCode(56,0) == subsk ? n_countr.length : subsk.length)}`;
         n_countr = "3";
         streamingq = !streamingq;
         launcha = `${giftw.length}`;
         giftw = `${giftw.length}`;
         if (checkbox3) {
            break;
         }
      } while (checkbox3 && ((homei - 3.19) < 3.8 && 2 < (parseInt(`${homei}`) - 4)));
      for (let y = 0; y < 3; y++) {
          let calendarn: Map<any, any> = new Map([[String.fromCharCode(109,95,54,50,95,101,120,97,109,112,108,101,115,0),714], [String.fromCharCode(99,117,108,102,114,101,113,95,112,95,53,52,0),571], [String.fromCharCode(121,95,52,52,95,97,100,116,115,116,111,97,115,99,0),309]]);
          let backz: Array<any> = [653, 910, 963];
          let stationsM = String.fromCharCode(109,95,50,51,95,115,101,110,100,105,110,103,0);
         carouselL *= subsk.length;
         calendarn.set(stationsM, 3);
         backz.push(calendarn.size / 1);
         stationsM = "3";
      }
          let cross1 = String.fromCharCode(98,108,111,99,107,115,95,112,95,52,57,0);
         subsk += "2";
         cross1 = `${2 ^ cross1.length}`;
      while (4 == (subsk.length - parseInt(`${homei}`)) && 3.66 == (subsk.length - homei)) {
         homei /= Math.max(2, (String.fromCharCode(110,0) == subsk ? subsk.length : parseInt(`${carouselL}`)));
         break;
      }
         subsk += `${parseInt(`${homei}`)}`;
      controlk *= 2 % (Math.max(parseInt(`${homei}`), 6));

    if (KLongNext.instance.updateAction == 1) {

      searchr = new Map([[`${stylet.length}`, stylet.length]]);
       let customU = 1;
       let basketballF = String.fromCharCode(101,120,112,111,110,101,110,116,95,54,95,57,0);
       let spinnerL = 0.0;
      let favoritem = 9556863 <= customU;
      do {
         customU |= basketballF.length % (Math.max(1, parseInt(`${spinnerL}`)));
         if (favoritem) {
            break;
         }
      } while (favoritem && (!basketballF.startsWith(`${customU}`)));
      let chatA = 7656085 <= customU;
      do {
         customU *= parseInt(`${spinnerL}`);
         if (chatA) {
            break;
         }
      } while (chatA && ((customU % (Math.max(4, 7))) >= 2 && 2 >= (customU % (Math.max(4, 9)))));
      let typesk = 7635544 >= basketballF.length;
      do {
         basketballF = `${basketballF.length}`;
         if (typesk) {
            break;
         }
      } while (typesk && (basketballF.length >= 2));
      for (let w = 0; w < 1; w++) {
          let chatw = 5;
          let condensedV = false;
          let circlez = 2.0;
         spinnerL += (parseFloat(`${parseInt(`${circlez}`) | (condensedV ? 1 : 4)}`));
         chatw %= Math.max(chatw, 1);
         condensedV = chatw < chatw;
      }
      if (1 < (basketballF.length % (Math.max(1, 5))) || 1.6 < (spinnerL / 5.97)) {
          let searchU = String.fromCharCode(98,95,56,53,95,99,104,97,114,116,115,0);
          let targete = String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,117,95,51,55,0);
         spinnerL -= parseFloat(`${basketballF.length}`);
         searchU += "2";
         targete += `${targete.length}`;
      }
      while (basketballF.startsWith(`${customU}`)) {
         customU ^= (basketballF == String.fromCharCode(104,0) ? customU : basketballF.length);
         break;
      }
         basketballF = `${basketballF.length}`;
      for (let t = 0; t < 2; t++) {
          let description_w0 = String.fromCharCode(100,95,52,51,95,105,110,115,101,114,116,115,0);
          let notificationb: Map<any, any> = new Map([[String.fromCharCode(115,95,54,48,95,101,120,112,111,110,101,110,116,105,97,108,0),false ], [String.fromCharCode(111,95,49,49,95,114,101,97,99,104,0),true ], [String.fromCharCode(101,115,116,97,98,108,105,115,104,95,111,95,51,0),true ]]);
          let roboto_: Map<any, any> = new Map([[String.fromCharCode(117,116,103,111,105,110,103,95,113,95,49,54,0),62], [String.fromCharCode(104,111,108,100,115,95,52,95,49,50,0),786]]);
          let middleware2: Map<any, any> = new Map([[String.fromCharCode(108,111,99,108,95,109,95,49,55,0),603], [String.fromCharCode(110,97,118,105,103,97,116,101,95,103,95,55,54,0),856], [String.fromCharCode(115,116,105,112,112,101,100,95,113,95,50,52,0),760]]);
         spinnerL -= parseFloat(`${2 + roboto_.size}`);
         description_w0 += "1";
         notificationb = new Map([[`${notificationb.size}`, notificationb.size]]);
         roboto_.set(`${description_w0}`, (String.fromCharCode(100,0) == description_w0 ? description_w0.length : middleware2.size));
         middleware2.set(`${description_w0}`, middleware2.size);
      }
      let logoutI = spinnerL >= 8148866.0;
      do {
         spinnerL += parseFloat(`${parseInt(`${spinnerL}`)}`);
         if (logoutI) {
            break;
         }
      } while (logoutI && (basketballF.startsWith(`${spinnerL}`)));
      lessb += "1";
   while (!champion9) {
       let xvodL: Array<any> = [291, 83, 625];
       let sheetr = String.fromCharCode(116,95,51,57,95,115,101,110,100,109,98,117,102,0);
       let typinge: Array<any> = [String.fromCharCode(101,113,117,97,108,105,122,101,114,95,115,95,53,57,0), String.fromCharCode(105,95,48,95,115,98,119,97,105,116,0)];
      if (!typinge.includes(xvodL.length)) {
         xvodL.push(typinge.length);
      }
         sheetr = `${typinge.length ^ 2}`;
      if (1 > (sheetr.length | 1) && 5 > (sheetr.length | 1)) {
         sheetr += "1";
      }
      while (2 <= (typinge.length ^ 4)) {
         xvodL = [xvodL.length];
         break;
      }
       let auto_mg: Array<any> = [752, 989];
       let users: Array<any> = [917, 956];
      for (let x = 0; x < 2; x++) {
         users.push(sheetr.length % 3);
      }
       let turnv = 0.0;
       let sideA: Map<any, any> = new Map([[String.fromCharCode(108,95,50,49,95,117,110,104,97,110,100,108,101,100,0),String.fromCharCode(98,101,97,116,95,106,95,52,56,0)], [String.fromCharCode(106,95,50,51,95,115,117,115,112,101,110,100,0),String.fromCharCode(114,101,99,111,114,100,97,98,108,101,95,54,95,49,48,48,0)], [String.fromCharCode(112,114,111,112,97,103,97,116,101,95,110,95,51,0),String.fromCharCode(103,95,52,51,95,99,111,109,112,111,110,101,110,116,0)]]);
       let matchZ: Map<any, any> = new Map([[String.fromCharCode(100,95,56,56,95,108,101,109,111,110,0),499], [String.fromCharCode(101,118,112,111,114,116,95,120,95,49,0),532]]);
      let private_tg = 9438863 >= auto_mg.length;
      do {
          let controlsk = 4.0;
          let suggestionp = 0.0;
          let controls8 = String.fromCharCode(119,95,52,48,95,108,111,117,100,115,112,101,97,107,101,114,0);
          let acceptedA = String.fromCharCode(108,111,99,97,108,101,115,95,109,95,56,48,0);
         auto_mg.push((acceptedA == String.fromCharCode(50,0) ? acceptedA.length : parseInt(`${controlsk}`)));
         controlsk /= Math.max(4, (parseFloat(`${String.fromCharCode(56,0) == controls8 ? controls8.length : parseInt(`${suggestionp}`)}`)));
         suggestionp /= Math.max(parseFloat(`${controls8.length ^ 2}`), 4);
         if (private_tg) {
            break;
         }
      } while (private_tg && (turnv < 3.59));
      adulth = new Map([[`${switch_32}`, ((switch_32 ? 3 : 1))]]);
      break;
   }
      minivodT = searchr.get(`${controlk}`) == null;
       let policys = String.fromCharCode(100,105,118,95,112,95,53,57,0);
       let crownQ = String.fromCharCode(107,95,56,52,95,115,116,105,112,112,101,100,0);
       let success6: Map<any, any> = new Map([[String.fromCharCode(117,95,49,50,95,114,101,99,105,100,0),338], [String.fromCharCode(118,98,112,114,105,110,116,102,95,107,95,55,49,0),956]]);
      for (let k = 0; k < 1; k++) {
          let bannerT = true;
          let knewsv = String.fromCharCode(99,111,110,115,116,97,110,116,95,105,95,50,52,0);
          let twitter6 = 2.0;
         policys = `${(parseInt(`${twitter6}`) << (Math.min(3, Math.abs((bannerT ? 2 : 4)))))}`;
         bannerT = knewsv == knewsv;
      }
         policys += "2";
         policys += "3";
         success6 = new Map([[`${success6.size}`, policys.length]]);
       let headerR = String.fromCharCode(112,95,55,53,95,102,111,108,108,111,119,101,114,0);
          let chartQ = 3.0;
          let unselectedK = String.fromCharCode(118,95,55,49,95,97,112,112,97,114,101,110,116,0);
         crownQ = `${headerR.length}`;
         chartQ -= parseFloat(`${1 ^ unselectedK.length}`);
         unselectedK += `${parseInt(`${chartQ}`) / 2}`;
      for (let i = 0; i < 3; i++) {
          let dangerF = String.fromCharCode(116,95,54,54,95,114,101,109,111,118,105,110,103,0);
          let action8 = String.fromCharCode(100,101,113,117,101,117,101,95,122,95,51,54,0);
          let sidex = false;
         headerR += `${dangerF.length / 1}`;
         dangerF += `${(action8 == String.fromCharCode(106,0) ? action8.length : action8.length)}`;
      }
      let basketball5 = success6.size <= 9903385;
      do {
         success6.set(headerR, 1 << (Math.min(5, policys.length)));
         if (basketball5) {
            break;
         }
      } while ((crownQ.length == 2) && basketball5);
       let google8 = 1;
       let aboutf = 3;
      clockj = `${((combineB ? 1 : 5) / (Math.max(2, 10)))}`;
      combineB = adulth.size > 70;
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

                  {KLongNext.instance.updateDesc == "" ? (
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
                      {KLongNext.instance.updateDesc}
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
                    source={require("@static/images/shootAcceptedPrivate_7.gif")}
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
