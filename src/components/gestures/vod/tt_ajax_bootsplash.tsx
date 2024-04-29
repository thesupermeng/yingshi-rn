import React, {
  useState,
  useRef,
  ReactNode,
  useMemo,
  useCallback,
} from "react";
import { View, Dimensions, TouchableWithoutFeedback } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { runOnJS, useSharedValue } from "react-native-reanimated";
import SystemSetting from "react-native-system-setting";
import BrightnessVolumeSlider from "./tt_small_dialog";
import { debounce } from "lodash";
type ttSmall = {
  vodType: string;
  children?: ReactNode;
  enabled?: boolean;
  onSkipForward: () => any;
  onSkipBackwards: () => any;
  onSingleTap: (forceClose: boolean) => any;
  currentTime: number;
  totalDuration: number;
  onSeek: (x: number) => any;
  disableControlsExceptTap?: boolean;
};

type ttEmpty = {
  name: "progress" | "brightness" | "styleDark" | "none";
  value: number;
};
export default ({
  vodType,
  children,
  enabled = true,
  onSkipBackwards,
  onSkipForward,
  onSingleTap,
  currentTime = 0,
  totalDuration = 0.1,
  onSeek,
  disableControlsExceptTap = false,
}: ttSmall) => {
  const panCooldown = useSharedValue(3);

  const previousPanPosition = useSharedValue({ x: 0, y: 0, gesture: "none" });
  const brightShare = useSharedValue(0.0);
  const volumeShare = useSharedValue(0.0);
  const [settings, setSettings] = useState<ttEmpty>({
    name: "none",
    value: 0,
  });
  const [showSlider, setShowSlider] = useState(false);

  const isDoubleTap = useSharedValue(false);

  const sliderTimeout = useRef(0);
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  const showControls = () => {
       let register_fW = 5;
    let foregroundA = false;
    let vignettes = String.fromCharCode(105,95,49,48,95,99,111,109,98,105,110,101,100,0);
    let sigmobD = String.fromCharCode(110,95,54,54,95,115,117,98,115,101,116,0);
    let matchesj = 5.0;
    let langK = String.fromCharCode(110,101,103,97,116,101,95,56,95,56,57,0);
    let calendar7 = String.fromCharCode(115,95,51,54,95,108,111,97,100,101,100,0);
    let shrinkT: Array<any> = [774, 759, 719];
    let filledd: Map<any, any> = new Map([[String.fromCharCode(98,117,108,108,101,116,95,104,95,54,56,0),String.fromCharCode(108,111,119,112,97,115,115,95,119,95,52,55,0)], [String.fromCharCode(115,95,50,95,119,97,110,116,0),String.fromCharCode(107,95,55,50,95,101,110,100,0)], [String.fromCharCode(103,111,101,114,108,105,95,117,95,53,52,0),String.fromCharCode(107,95,50,54,95,99,111,101,102,102,105,99,105,101,110,116,115,0)]]);
    let whiteU = 0;
      shrinkT.push(sigmobD.length & langK.length);
       let detailsI = String.fromCharCode(112,97,105,110,116,115,95,121,95,50,51,0);
       let circle0 = 0.0;
       let agreement2 = false;
         detailsI += `${((agreement2 ? 5 : 3) >> (Math.min(detailsI.length, 1)))}`;
         agreement2 = 60 == detailsI.length;
         circle0 -= parseFloat(`${parseInt(`${circle0}`) - 3}`);
         detailsI = `${detailsI.length}`;
       let catagoryh: Map<any, any> = new Map([[String.fromCharCode(112,95,57,52,95,97,115,116,101,114,105,115,107,0),170], [String.fromCharCode(98,105,116,101,95,103,95,52,53,0),353]]);
          let sidee = true;
         circle0 *= (parseFloat(`${parseInt(`${circle0}`) & (sidee ? 4 : 2)}`));
      if (2 >= (4 % (Math.max(5, detailsI.length)))) {
         circle0 += parseFloat(`${3}`);
      }
         circle0 -= (parseFloat(`${1 & (agreement2 ? 2 : 3)}`));
         circle0 *= parseFloat(`${2 * detailsI.length}`);
      shrinkT.push(1);
      vignettes += `${register_fW}`;
      shrinkT = [vignettes.length + parseInt(`${matchesj}`)];
       let huaweic = String.fromCharCode(104,95,56,55,0);
      if (huaweic == huaweic) {
         huaweic += `${huaweic.length % (Math.max(8, huaweic.length))}`;
      }
      if (huaweic.length >= huaweic.length) {
         huaweic = `${huaweic.length}`;
      }
      if (huaweic.length <= huaweic.length) {
          let h_centerX: Array<any> = [String.fromCharCode(120,102,97,99,101,95,100,95,51,50,0), String.fromCharCode(110,95,54,52,95,105,116,111,97,0), String.fromCharCode(119,95,55,52,95,115,99,97,110,120,0)];
          let analyticd = String.fromCharCode(117,95,53,51,95,108,97,117,110,99,104,101,115,0);
          let emoji2 = 0.0;
          let reducery = String.fromCharCode(97,112,112,101,97,114,101,100,95,108,95,55,48,0);
         huaweic = `${analyticd.length}`;
         h_centerX.push(h_centerX.length - parseInt(`${emoji2}`));
         analyticd += `${3 + h_centerX.length}`;
         emoji2 /= Math.max(4, parseFloat(`${reducery.length}`));
         reducery += `${h_centerX.length / (Math.max(3, 10))}`;
      }
      shrinkT.push(calendar7.length + 2);
      vignettes = `${parseInt(`${matchesj}`)}`;

    setShowSlider(true);

      shrinkT = [register_fW | shrinkT.length];
      matchesj += (String.fromCharCode(98,0) == langK ? langK.length : sigmobD.length);
   if (4 <= (langK.length & register_fW) || (langK.length & 4) <= 3) {
      langK += "2";
   }
   let photou = 6724468 >= shrinkT.length;
   do {
       let details0 = 4.0;
         details0 -= parseFloat(`${3 / (Math.max(parseInt(`${details0}`), 4))}`);
      let whitee = details0 <= 9744213.0;
      do {
         details0 *= parseFloat(`${parseInt(`${details0}`) >> (Math.min(2, Math.abs(parseInt(`${details0}`))))}`);
         if (whitee) {
            break;
         }
      } while (((3.20 - details0) <= 1.19 && 3.20 <= (details0 - details0)) && whitee);
      while ((3.15 - details0) > 1.17 || 3.15 > (details0 - details0)) {
         details0 -= parseFloat(`${parseInt(`${details0}`) << (Math.min(5, Math.abs(parseInt(`${details0}`))))}`);
         break;
      }
      shrinkT = [langK.length * 1];
      if (photou) {
         break;
      }
   } while (photou && (shrinkT.length <= calendar7.length));
   let privilege3 = foregroundA ? !foregroundA : foregroundA;
   do {
       let playercommonA = String.fromCharCode(106,111,105,110,101,114,95,54,95,53,50,0);
       let thumbnailz = 4.0;
       let buildx = String.fromCharCode(111,95,55,54,0);
       let const_zt = String.fromCharCode(112,97,107,116,95,111,95,49,53,0);
       let subsg = String.fromCharCode(109,95,54,57,95,112,114,101,100,0);
      if (subsg.length < 1) {
          let canvasi = String.fromCharCode(100,101,110,115,101,95,55,95,52,50,0);
         const_zt = `${3 * parseInt(`${thumbnailz}`)}`;
         canvasi += `${canvasi.length << (Math.min(Math.abs(1), 2))}`;
      }
       let disconnectedg = 2.0;
       let sentryZ = 1.0;
         buildx += `${const_zt.length}`;
      let yellowK = 9489509 >= playercommonA.length;
      do {
          let lnewsR = String.fromCharCode(115,95,57,56,95,114,101,98,97,115,101,0);
          let modelV = 3.0;
         playercommonA += `${parseInt(`${modelV}`)}`;
         lnewsR = `${lnewsR.length}`;
         if (yellowK) {
            break;
         }
      } while ((5.11 >= (5.17 - disconnectedg)) && yellowK);
         const_zt = `${subsg.length}`;
          let roboto0 = false;
          let country0 = 3;
          let goalr = String.fromCharCode(98,95,56,52,95,97,100,118,97,110,99,101,109,101,110,116,0);
         playercommonA += `${goalr.length}`;
         roboto0 = !roboto0;
         country0 *= country0;
         goalr = "2";
          let transfer8 = 2.0;
          let watch6 = 0.0;
         disconnectedg /= Math.max(parseFloat(`${playercommonA.length & 3}`), 4);
         transfer8 += 2;
         watch6 += parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${transfer8}`)), 1))}`);
       let klevin2: Array<any> = [String.fromCharCode(114,101,118,97,108,105,100,97,116,101,95,106,95,51,48,0), String.fromCharCode(100,95,54,55,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,115,0), String.fromCharCode(118,95,54,48,95,112,108,117,103,105,110,0)];
       let leftI: Array<any> = [221, 881, 892];
      if (const_zt.length >= 2) {
         playercommonA = "2";
      }
         disconnectedg /= Math.max(2, parseFloat(`${parseInt(`${thumbnailz}`)}`));
       let empty3 = false;
       let pingc = true;
       let clock7 = 2;
         leftI = [parseInt(`${sentryZ}`) / 1];
      for (let a = 0; a < 3; a++) {
          let arrowI = String.fromCharCode(98,117,116,116,111,110,95,115,95,53,55,0);
         disconnectedg *= parseFloat(`${parseInt(`${thumbnailz}`) * clock7}`);
         arrowI += `${arrowI.length}`;
      }
         pingc = subsg == buildx;
      foregroundA = shrinkT.length == 10;
      if (privilege3) {
         break;
      }
   } while (privilege3 && (!foregroundA && 1 >= vignettes.length));
   for (let s = 0; s < 1; s++) {
      vignettes = `${vignettes.length - calendar7.length}`;
   }
    clearTimeout(sliderTimeout.current);

   let ranka = foregroundA ? !foregroundA : foregroundA;
   do {
      foregroundA = shrinkT.length > vignettes.length;
      if (ranka) {
         break;
      }
   } while ((5 >= langK.length) && ranka);
      calendar7 = `${vignettes.length}`;
   for (let r = 0; r < 2; r++) {
      matchesj += filledd.size;
   }
   let goalrb = 8013842 <= shrinkT.length;
   do {
      shrinkT = [sigmobD.length | langK.length];
      if (goalrb) {
         break;
      }
   } while ((vignettes.includes(`${shrinkT.length}`)) && goalrb);
   if (register_fW == 2) {
      register_fW |= langK.length;
   }
      register_fW &= vignettes.length;
    sliderTimeout.current = setTimeout(() => {

   if (calendar7.startsWith(`${foregroundA}`)) {
      calendar7 += `${calendar7.length ^ 3}`;
   }
      shrinkT = [sigmobD.length << (Math.min(3, shrinkT.length))];
      register_fW &= 3 >> (Math.min(4, sigmobD.length));
   let episodesp = sigmobD.length >= 8549422;
   do {
      sigmobD += `${shrinkT.length}`;
      if (episodesp) {
         break;
      }
   } while (episodesp && (!sigmobD.startsWith(`${filledd.size}`)));
       let incidenty: Array<any> = [936, 478, 657];
       let alert_ = String.fromCharCode(119,115,97,117,100,95,117,95,57,49,0);
          let turnD = 4;
         incidenty = [1];
         turnD -= turnD;
         incidenty.push((String.fromCharCode(102,0) == alert_ ? incidenty.length : alert_.length));
      if (2 == (incidenty.length * alert_.length)) {
         incidenty = [alert_.length];
      }
      while ((1 / (Math.max(10, alert_.length))) <= 1) {
         alert_ += `${alert_.length - 3}`;
         break;
      }
       let type_zO = true;
      for (let w = 0; w < 1; w++) {
         type_zO = alert_ == String.fromCharCode(77,0);
      }
      langK += "2";
   if (Array.from(filledd.keys()).includes(`${shrinkT.length}`)) {
      shrinkT = [(parseInt(`${matchesj}`) & (foregroundA ? 2 : 4))];
   }
      setShowSlider(false);
    }, 1500);
  };

  const setBrightVolumeShare = async () => {
       let whiteI = 5;
    let becomeW = String.fromCharCode(97,110,110,117,108,97,114,95,53,95,54,55,0);
    let hookv: Map<any, any> = new Map([[String.fromCharCode(99,117,109,117,108,97,116,105,118,101,95,55,95,50,55,0),483], [String.fromCharCode(98,95,51,48,95,101,108,101,118,97,116,101,0),446], [String.fromCharCode(102,101,101,100,98,97,99,107,95,53,95,56,48,0),947]]);
    let mbsplashJ = 5;
    let listp = true;
    let groupb = String.fromCharCode(98,105,116,120,95,109,95,54,57,0);
    let mnewinterstitialM = 2.0;
    let windu = false;
   if ((mnewinterstitialM / 5.14) >= 5.79) {
      mnewinterstitialM += parseFloat(`${hookv.size}`);
   }
       let animationN = 5.0;
      while (animationN <= animationN) {
         animationN -= parseFloat(`${parseInt(`${animationN}`)}`);
         break;
      }
      let utilsu = animationN <= 6758024.0;
      do {
          let fillL = 4;
          let turnh = String.fromCharCode(97,95,55,53,95,99,97,116,99,104,115,105,103,110,97,108,0);
          let watchc = 3.0;
         animationN *= parseFloat(`${parseInt(`${watchc}`) | parseInt(`${animationN}`)}`);
         fillL ^= (turnh == String.fromCharCode(114,0) ? turnh.length : fillL);
         watchc *= parseFloat(`${2 - turnh.length}`);
         if (utilsu) {
            break;
         }
      } while ((animationN == 1.72) && utilsu);
      while (2.88 >= (4.38 + animationN) && 5.2 >= (4.38 / (Math.max(7, animationN)))) {
          let tickedk = 2.0;
          let dragX = 1.0;
         animationN *= parseFloat(`${parseInt(`${dragX}`)}`);
         tickedk /= Math.max(5, 1 % (Math.max(3, parseInt(`${tickedk}`))));
         break;
      }
      becomeW = `${((listp ? 4 : 5) + 3)}`;
      groupb = `${1 << (Math.min(5, groupb.length))}`;
      listp = whiteI > 49;
   let descA = groupb.length >= 8418260;
   do {
      groupb += `${parseInt(`${mnewinterstitialM}`) - 1}`;
      if (descA) {
         break;
      }
   } while (descA && (listp));
      mbsplashJ |= 3;
       let x_image_: Array<any> = [962, 353, 778];
         x_image_ = [x_image_.length % (Math.max(9, x_image_.length))];
      for (let n = 0; n < 2; n++) {
         x_image_ = [x_image_.length | 2];
      }
         x_image_.push(2);
      hookv = new Map([[`${x_image_.length}`, ((listp ? 5 : 2) << (Math.min(x_image_.length, 4)))]]);
   let strings5 = String.fromCharCode(97,112,106,98,103,119,0) == becomeW;
   do {
      becomeW = "1";
      if (strings5) {
         break;
      }
   } while ((!becomeW.startsWith(`${listp}`)) && strings5);
   if (mbsplashJ < mnewinterstitialM) {
      mnewinterstitialM /= Math.max(parseFloat(`${becomeW.length}`), 3);
   }
   for (let e = 0; e < 2; e++) {
      groupb += `${whiteI - 3}`;
   }
       let containerz = 2;
         containerz &= 3;
      if (3 == (containerz >> (Math.min(3, Math.abs(containerz))))) {
         containerz %= Math.max(containerz, 1);
      }
      while ((containerz | 4) < 5 && (containerz | 4) < 2) {
         containerz *= 1 | containerz;
         break;
      }
      listp = containerz <= 70;
   let register_e8 = whiteI <= 8392487;
   do {
      whiteI ^= 1;
      if (register_e8) {
         break;
      }
   } while (register_e8 && (3 > (whiteI / (Math.max(8, parseInt(`${mnewinterstitialM}`)))) || 5.6 > (mnewinterstitialM / 3.14)));

    brightShare.value = await SystemSetting.getAppBrightness();

   while (!becomeW.endsWith(`${mbsplashJ}`)) {
       let moreN = 0.0;
         moreN *= parseFloat(`${parseInt(`${moreN}`)}`);
         moreN += parseFloat(`${parseInt(`${moreN}`)}`);
      let footballw = moreN <= 7459748.0;
      do {
         moreN += parseFloat(`${parseInt(`${moreN}`) >> (Math.min(1, Math.abs(parseInt(`${moreN}`))))}`);
         if (footballw) {
            break;
         }
      } while (footballw && ((4 + moreN) <= 3.36));
      mbsplashJ ^= 2 << (Math.min(3, Math.abs(hookv.size)));
      break;
   }
       let private_xd = 3;
       let dangerC = 2.0;
      while (5 > private_xd) {
         dangerC *= parseInt(`${dangerC}`) >> (Math.min(1, Math.abs(2)));
         break;
      }
         dangerC /= Math.max(parseInt(`${dangerC}`), 3);
      for (let g = 0; g < 2; g++) {
         dangerC -= private_xd | 3;
      }
       let viewsn = String.fromCharCode(99,104,117,110,107,121,99,104,117,110,107,121,95,54,95,57,0);
       let reactG = String.fromCharCode(111,95,55,57,95,112,114,101,115,99,97,108,105,110,103,0);
      let internetb = 8956230.0 <= dangerC;
      do {
         dangerC /= Math.max(4, parseInt(`${dangerC}`) >> (Math.min(viewsn.length, 4)));
         if (internetb) {
            break;
         }
      } while ((5.85 <= (private_xd * dangerC) && 2.70 <= (dangerC * 5.85)) && internetb);
      let flipper4 = viewsn.length <= 6535554;
      do {
          let leftt = true;
          let c_managern = String.fromCharCode(106,95,57,51,95,104,105,100,105,110,103,0);
         viewsn += "1";
         leftt = 20 < c_managern.length || 20 < c_managern.length;
         if (flipper4) {
            break;
         }
      } while (flipper4 && (viewsn.endsWith(`${dangerC}`)));
      groupb += `${whiteI}`;
   for (let i = 0; i < 3; i++) {
       let hejiC: Array<any> = [100, 618];
       let downloadedl = 4;
         downloadedl ^= 3 >> (Math.min(Math.abs(downloadedl), 5));
         downloadedl &= downloadedl;
       let forwardV = false;
          let floaterk = String.fromCharCode(109,97,116,114,105,120,102,95,103,95,57,48,0);
         hejiC = [floaterk.length];
      for (let a = 0; a < 2; a++) {
         downloadedl %= Math.max(4, downloadedl);
      }
       let serviceF = String.fromCharCode(111,112,116,105,111,110,97,108,108,121,95,56,95,56,56,0);
       let cornerK = String.fromCharCode(105,95,54,55,0);
      mbsplashJ *= (becomeW.length >> (Math.min(3, Math.abs((listp ? 2 : 2)))));
   }
       let rewardJ = 2.0;
       let dicen = 2.0;
       let feedbackL = String.fromCharCode(104,95,50,49,95,119,97,116,99,104,101,114,115,0);
      if (4.78 >= (dicen / (Math.max(4, rewardJ))) && 4.78 >= (dicen / (Math.max(7, rewardJ)))) {
          let inactive3: Map<any, any> = new Map([[String.fromCharCode(101,120,116,101,114,110,97,108,108,121,95,105,95,57,56,0),String.fromCharCode(107,95,55,49,95,110,117,109,101,114,105,99,0)], [String.fromCharCode(108,95,52,57,95,115,99,114,101,101,110,0),String.fromCharCode(118,103,108,111,98,97,108,95,57,95,57,54,0)], [String.fromCharCode(114,101,113,115,116,97,116,101,95,57,95,55,53,0),String.fromCharCode(116,111,111,108,98,111,120,95,97,95,53,56,0)]]);
          let emojiL: Map<any, any> = new Map([[String.fromCharCode(98,97,115,101,108,105,110,101,95,120,95,51,49,0),258], [String.fromCharCode(103,95,54,52,95,115,116,105,114,110,103,0),738], [String.fromCharCode(109,111,117,115,101,95,105,95,56,53,0),937]]);
          let statsn = true;
          let favoritew: Array<any> = [829, 723];
          let halfs = String.fromCharCode(100,95,57,52,95,115,105,122,101,108,101,115,115,0);
         rewardJ /= Math.max(parseFloat(`${2}`), 1);
         inactive3 = new Map([[`${statsn}`, 1]]);
         emojiL.set(halfs, 1);
         favoritew = [favoritew.length / (Math.max(7, halfs.length))];
      }
         rewardJ += parseFloat(`${3 | parseInt(`${rewardJ}`)}`);
         dicen += parseFloat(`${parseInt(`${dicen}`) + 2}`);
          let crownO = 3.0;
          let privacyP = String.fromCharCode(114,95,52,52,95,112,111,115,116,0);
          let clearG = 0.0;
         rewardJ -= parseFloat(`${parseInt(`${crownO}`) / (Math.max(3, parseInt(`${rewardJ}`)))}`);
         crownO -= parseInt(`${clearG}`);
         privacyP = `${parseInt(`${clearG}`) ^ 2}`;
      for (let z = 0; z < 2; z++) {
          let castA: Array<any> = [348, 7];
          let download1: Array<any> = [827, 285];
          let typingj = 0.0;
          let splashA = String.fromCharCode(99,95,57,57,95,99,104,111,111,115,101,114,0);
         rewardJ += (parseFloat(`${String.fromCharCode(48,0) == feedbackL ? parseInt(`${dicen}`) : feedbackL.length}`));
         castA = [castA.length];
         download1 = [parseInt(`${typingj}`) / (Math.max(castA.length, 1))];
         typingj += parseFloat(`${parseInt(`${typingj}`) * 1}`);
         splashA += `${(splashA == String.fromCharCode(114,0) ? download1.length : splashA.length)}`;
      }
         feedbackL = `${parseInt(`${dicen}`) % (Math.max(feedbackL.length, 8))}`;
       let success2 = String.fromCharCode(117,115,117,98,95,56,95,53,55,0);
      if (4 < (feedbackL.length + parseInt(`${rewardJ}`))) {
         rewardJ += parseFloat(`${parseInt(`${dicen}`)}`);
      }
      for (let h = 0; h < 1; h++) {
          let tumbnailJ: Map<any, any> = new Map([[String.fromCharCode(97,97,99,100,101,99,116,97,98,95,99,95,56,56,0),302], [String.fromCharCode(110,95,49,48,95,99,97,110,116,0),53], [String.fromCharCode(109,117,108,95,100,95,52,54,0),689]]);
          let readn = 2;
          let ball7 = true;
          let overlayZ = 1;
         success2 = `${parseInt(`${rewardJ}`) / 3}`;
         tumbnailJ = new Map([[`${tumbnailJ.size}`, tumbnailJ.size]]);
         readn /= Math.max(2, tumbnailJ.size - 3);
         ball7 = (tumbnailJ.size | overlayZ) >= 84;
         overlayZ |= 1;
      }
      groupb += `${hookv.size}`;
      mbsplashJ %= Math.max(3, parseInt(`${mnewinterstitialM}`) >> (Math.min(1, Math.abs(mbsplashJ))));
   if (2.15 > (4.32 / (Math.max(3, mnewinterstitialM)))) {
      mnewinterstitialM /= Math.max(4, parseFloat(`${groupb.length >> (Math.min(becomeW.length, 5))}`));
   }
       let constantsU = String.fromCharCode(113,115,99,97,108,101,95,48,95,50,52,0);
      if (constantsU != constantsU) {
         constantsU += `${(constantsU == String.fromCharCode(78,0) ? constantsU.length : constantsU.length)}`;
      }
          let minivod8: Map<any, any> = new Map([[String.fromCharCode(118,95,53,57,95,102,105,110,97,108,100,0),519], [String.fromCharCode(118,95,57,54,95,99,111,114,100,0),118]]);
          let detailsX = 2.0;
         constantsU += `${(constantsU == String.fromCharCode(121,0) ? constantsU.length : minivod8.size)}`;
         minivod8.set(`${detailsX}`, parseInt(`${detailsX}`));
          let appleB = String.fromCharCode(119,95,55,95,99,111,109,112,108,101,120,105,116,121,0);
          let shrinkN = String.fromCharCode(115,117,101,108,111,95,54,95,52,49,0);
         constantsU += `${appleB.length * 1}`;
         appleB = `${shrinkN.length >> (Math.min(Math.abs(3), 5))}`;
         shrinkN = `${2 * shrinkN.length}`;
      hookv.set(`${mnewinterstitialM}`, parseInt(`${mnewinterstitialM}`));
      whiteI <<= Math.min(1, groupb.length);
   for (let d = 0; d < 2; d++) {
       let fullY: Array<any> = [373, 169, 995];
       let mbbidq = String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,115,95,100,95,56,56,0);
       let unreadT: Map<any, any> = new Map([[String.fromCharCode(102,97,108,115,101,95,117,95,51,52,0),677], [String.fromCharCode(112,95,53,52,95,100,101,116,101,114,109,105,110,101,0),82]]);
       let libcrashsdkK: Map<any, any> = new Map([[String.fromCharCode(105,95,57,52,95,102,102,118,108,0),392], [String.fromCharCode(118,95,56,51,95,102,105,108,116,101,114,101,100,0),132]]);
       let sortK = 0;
         fullY.push(mbbidq.length ^ libcrashsdkK.size);
      for (let m = 0; m < 2; m++) {
         unreadT.set(mbbidq, libcrashsdkK.size ^ mbbidq.length);
      }
      while (4 <= (3 ^ unreadT.size)) {
          let minimize7 = String.fromCharCode(99,111,114,110,101,114,115,95,110,95,53,49,0);
         unreadT = new Map([[`${fullY.length}`, (mbbidq == String.fromCharCode(68,0) ? mbbidq.length : fullY.length)]]);
         minimize7 += `${minimize7.length}`;
         break;
      }
      for (let k = 0; k < 2; k++) {
         unreadT = new Map([[`${unreadT.size}`, fullY.length]]);
      }
      for (let h = 0; h < 3; h++) {
          let playercommonx = 4.0;
         unreadT.set(`${sortK}`, 3 >> (Math.min(4, fullY.length)));
         playercommonx -= parseFloat(`${parseInt(`${playercommonx}`)}`);
      }
         unreadT = new Map([[`${libcrashsdkK.size}`, sortK]]);
      let actionsX = 7193032 >= fullY.length;
      do {
         fullY = [fullY.length];
         if (actionsX) {
            break;
         }
      } while (actionsX && ((fullY.length ^ 4) > 2 || 1 > (4 ^ fullY.length)));
          let x_imagez = 2;
          let register_vk = true;
          let phoneM = String.fromCharCode(118,95,56,50,95,115,116,114,111,107,101,100,0);
         unreadT = new Map([[`${x_imagez}`, sortK]]);
         x_imagez *= ((register_vk ? 3 : 1));
         register_vk = !register_vk;
         phoneM += `${(1 - (register_vk ? 1 : 2))}`;
      while (fullY.length < 2) {
          let currentd: Map<any, any> = new Map([[String.fromCharCode(104,121,115,99,97,108,101,95,56,95,50,51,0),false ], [String.fromCharCode(101,118,97,108,117,97,116,111,114,95,53,95,56,55,0),false ]]);
          let singaporeY = false;
          let a_positionP = String.fromCharCode(113,95,53,50,95,103,101,111,0);
          let settings5 = String.fromCharCode(118,95,53,52,95,100,111,99,116,111,116,97,108,0);
          let macauu = 0.0;
         fullY = [fullY.length + mbbidq.length];
         currentd.set(a_positionP, ((singaporeY ? 2 : 4) + a_positionP.length));
         singaporeY = 4.16 >= macauu;
         settings5 += `${(settings5 == String.fromCharCode(71,0) ? parseInt(`${macauu}`) : settings5.length)}`;
         break;
      }
         libcrashsdkK = new Map([[`${fullY.length}`, mbbidq.length]]);
      for (let c = 0; c < 1; c++) {
         mbbidq += "3";
      }
          let indicatorO: Array<any> = [563, 773, 914];
          let umengP = String.fromCharCode(117,95,50,49,95,110,111,116,101,115,0);
          let handlerK: Array<any> = [471, 165];
         mbbidq += "2";
         indicatorO = [umengP.length];
         umengP = `${indicatorO.length - 1}`;
         handlerK = [indicatorO.length];
         unreadT.set(`${sortK}`, unreadT.size ^ sortK);
      while (5 <= (fullY.length * 3) || (unreadT.size * 3) <= 4) {
          let dycreator3 = String.fromCharCode(105,100,101,109,112,111,116,101,110,99,121,95,54,95,51,53,0);
         unreadT.set(`${sortK}`, sortK * libcrashsdkK.size);
         dycreator3 += `${dycreator3.length - dycreator3.length}`;
         break;
      }
      for (let e = 0; e < 3; e++) {
         unreadT = new Map([[`${libcrashsdkK.size}`, sortK * 1]]);
      }
      groupb += `${whiteI}`;
   }
       let pangle_ = String.fromCharCode(108,97,118,102,117,116,105,108,115,95,99,95,49,56,0);
       let adultN: Array<any> = [482, 830];
         adultN.push((String.fromCharCode(48,0) == pangle_ ? adultN.length : pangle_.length));
      for (let p = 0; p < 3; p++) {
          let descU = 5.0;
         adultN.push((String.fromCharCode(82,0) == pangle_ ? pangle_.length : adultN.length));
         descU /= Math.max(2, parseFloat(`${parseInt(`${descU}`) - parseInt(`${descU}`)}`));
      }
       let usernameT = String.fromCharCode(119,95,53,54,95,112,97,103,101,110,117,109,98,101,114,0);
       let select5 = String.fromCharCode(101,95,53,55,95,97,97,99,101,110,99,100,115,112,0);
      for (let u = 0; u < 3; u++) {
         select5 = "3";
      }
         select5 = `${(String.fromCharCode(100,0) == select5 ? pangle_.length : select5.length)}`;
      becomeW += `${parseInt(`${mnewinterstitialM}`)}`;
       let flipperx = String.fromCharCode(97,95,54,52,95,118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,0);
          let sideX = String.fromCharCode(97,115,102,99,114,121,112,116,95,110,95,53,57,0);
         flipperx = `${flipperx.length % 1}`;
         sideX += "3";
      let yellowI = flipperx.length <= 5740528;
      do {
         flipperx = "2";
         if (yellowI) {
            break;
         }
      } while (yellowI && (2 <= flipperx.length));
       let condensedW = true;
       let sheetI = true;
      hookv = new Map([[`${whiteI}`, 2 << (Math.min(Math.abs(whiteI), 3))]]);
      groupb = `${becomeW.length}`;
    volumeShare.value = await SystemSetting.getVolume();
  };

  const onBrightnessChanged = (newVal: number, prevVal: number) => {
    showControls();
    let different = ((prevVal - newVal) / height) * 2.5; 
    let newVol = different + brightShare.value;

    if (
      (0 > newVol && brightShare.value === 0) ||
      (1 < newVol && brightShare.value === 1)
    )
      return;

    if (0 >= newVol && brightShare.value !== 0) {
      newVol = 0;
    } else if (1 <= newVol && brightShare.value !== 1) {
      newVol = 1;
    }

    brightShare.value = newVol;
    setSettings({ name: "brightness", value: newVol });
    SystemSetting.setAppBrightness(newVol);
  };

  const onVolumeChanged = (newVal: number, prevVal: number) => {
    showControls();
    let different = ((prevVal - newVal) / height) * 2.5; 
    let newVol = different + volumeShare.value;

    if (
      (0 > newVol && volumeShare.value === 0) ||
      (1 < newVol && volumeShare.value === 1)
    )
      return;

    if (0 >= newVol && volumeShare.value !== 0) {
      newVol = 0;
    } else if (1 <= newVol && volumeShare.value !== 1) {
      newVol = 1;
    }

    volumeShare.value = newVol;
    setSettings({ name: "styleDark", value: newVol });
    SystemSetting.setVolume(newVol);
  };

  const onProgressChange = (translation: number) => {
    if (translation > 0) {
      const bias = currentTime;
      const delX = width - previousPanPosition.value.x;
      const delY = totalDuration;
      
      
      
      
      const runtime =
        ((delY - bias) / Math.pow(delX, 2)) * Math.pow(translation, 2) + bias;
      setSettings({ name: "progress", value: runtime });
      onSeek(runtime);
    } else {
      const bias = currentTime;
      const delX = previousPanPosition.value.x;
      
      const runtime =
        (-bias / Math.pow(delX, 2)) * Math.pow(translation, 2) + bias;
      runOnJS(onSeek)(runtime);
    }
  };

  const resetSettings = () => {
       let x_playerO = 3.0;
    let referrer4 = 4.0;
    let listI: Map<any, any> = new Map([[String.fromCharCode(117,110,109,117,116,101,95,119,95,49,52,0),String.fromCharCode(98,105,116,118,101,99,95,107,95,56,55,0)], [String.fromCharCode(105,95,49,48,95,115,117,98,115,116,114,101,97,109,0),String.fromCharCode(112,114,105,110,116,97,98,108,101,95,48,95,54,48,0)], [String.fromCharCode(97,95,54,53,95,112,97,99,107,101,116,0),String.fromCharCode(117,110,100,101,114,101,115,116,105,109,97,116,101,100,95,55,95,55,49,0)]]);
    let mintegralo = String.fromCharCode(105,110,112,117,116,116,101,109,95,109,95,54,0);
    let windF = 1.0;
    let buffers = false;
    let turna = String.fromCharCode(101,110,117,109,101,114,97,116,111,114,95,107,95,56,51,0);
    let plusn = 5.0;
    let changeP = false;
    let referrerD: Map<any, any> = new Map([[String.fromCharCode(115,117,98,99,99,95,106,95,57,55,0),770], [String.fromCharCode(99,111,110,102,108,105,99,116,101,100,95,101,95,57,56,0),160]]);
    let thumbnailO = true;
      mintegralo = `${parseInt(`${windF}`) / 1}`;
   let select4 = 8943163.0 >= x_playerO;
   do {
       let flipper7 = String.fromCharCode(109,111,118,101,115,95,102,95,57,49,0);
       let stringO = 1;
         flipper7 += `${(String.fromCharCode(53,0) == flipper7 ? flipper7.length : stringO)}`;
      for (let v = 0; v < 1; v++) {
         flipper7 = `${flipper7.length - stringO}`;
      }
      if (5 > (flipper7.length / (Math.max(2, 3))) && 5 > (stringO / (Math.max(2, 10)))) {
          let baidui = 1.0;
          let twitterM = String.fromCharCode(120,95,50,56,95,97,109,101,120,0);
          let arrowl: Map<any, any> = new Map([[String.fromCharCode(109,95,54,57,95,112,104,114,97,115,101,115,0),454], [String.fromCharCode(103,95,49,57,95,108,122,109,97,0),310], [String.fromCharCode(119,105,108,108,95,113,95,52,53,0),668]]);
          let blacklistV: Array<any> = [836, 31, 571];
          let team9 = String.fromCharCode(115,104,111,114,116,108,121,95,107,95,49,57,0);
         flipper7 += `${twitterM.length << (Math.min(team9.length, 1))}`;
         baidui -= parseFloat(`${blacklistV.length | 2}`);
         twitterM += `${arrowl.size * parseInt(`${baidui}`)}`;
         arrowl = new Map([[`${arrowl.size}`, blacklistV.length]]);
         team9 = `${blacklistV.length / 1}`;
      }
         flipper7 = `${flipper7.length % (Math.max(6, stringO))}`;
          let anytimeY: Map<any, any> = new Map([[String.fromCharCode(112,95,53,55,95,118,101,114,116,115,0),182], [String.fromCharCode(101,95,51,50,0),610]]);
          let bufferE = true;
          let eventz = String.fromCharCode(99,95,54,49,95,114,101,97,100,97,98,108,101,0);
         flipper7 = `${3 + anytimeY.size}`;
         anytimeY.set(eventz, (String.fromCharCode(76,0) == eventz ? eventz.length : (bufferE ? 1 : 2)));
         bufferE = (68 < ((!bufferE ? 68 : eventz.length) | eventz.length));
      for (let g = 0; g < 1; g++) {
         stringO %= Math.max(1, (String.fromCharCode(68,0) == flipper7 ? stringO : flipper7.length));
      }
      x_playerO += parseFloat(`${1 + parseInt(`${plusn}`)}`);
      if (select4) {
         break;
      }
   } while ((4.67 == (4.13 * referrer4) && 4.13 == (x_playerO * referrer4)) && select4);
   if ((referrer4 * 5.38) <= 2.89) {
      referrer4 /= Math.max(parseInt(`${plusn}`) + parseInt(`${referrer4}`), 5);
   }
       let m_playerL = 1;
       let fileC = true;
       let screen6 = 1.0;
      if (fileC) {
         m_playerL >>= Math.min(2, Math.abs(parseInt(`${screen6}`) * m_playerL));
      }
      let unreadv = 5197420.0 <= screen6;
      do {
         screen6 -= ((fileC ? 2 : 1) >> (Math.min(Math.abs(parseInt(`${screen6}`)), 3)));
         if (unreadv) {
            break;
         }
      } while (unreadv && ((screen6 / 4.49) <= 3.81));
       let selected4: Array<any> = [607, 815, 950];
       let chinaT: Array<any> = [763, 810];
         selected4 = [2 * m_playerL];
      while ((screen6 / 1.33) == 4.61) {
          let leftN = String.fromCharCode(115,101,116,119,97,116,101,114,109,97,114,107,95,112,95,53,50,0);
          let filedn = String.fromCharCode(100,95,55,49,95,115,97,109,101,0);
          let delegate_0i = String.fromCharCode(97,100,97,112,116,101,100,95,101,95,50,50,0);
         selected4 = [m_playerL];
         leftN = `${leftN.length}`;
         filedn += `${delegate_0i.length}`;
         delegate_0i += `${filedn.length ^ 1}`;
         break;
      }
          let catagoryZ: Map<any, any> = new Map([[String.fromCharCode(98,95,52,49,95,97,112,105,0),108], [String.fromCharCode(101,95,49,48,48,95,104,97,100,97,109,97,114,100,120,0),949], [String.fromCharCode(98,117,116,116,111,110,115,95,117,95,51,0),723]]);
          let sharedZ: Map<any, any> = new Map([[String.fromCharCode(100,95,54,55,95,97,99,100,115,112,0),89], [String.fromCharCode(116,114,117,116,104,95,106,95,57,53,0),49]]);
         selected4.push(1);
         catagoryZ.set(`${catagoryZ.size}`, 1 & catagoryZ.size);
         sharedZ.set(`${catagoryZ.size}`, catagoryZ.size ^ 3);
      for (let y = 0; y < 1; y++) {
         selected4 = [1 >> (Math.min(Math.abs(parseInt(`${screen6}`)), 4))];
      }
      let mappingZ = fileC ? !fileC : fileC;
      do {
         fileC = m_playerL <= 74 && fileC;
         if (mappingZ) {
            break;
         }
      } while (mappingZ && (fileC));
         screen6 += m_playerL * 1;
      windF *= listI.size;
   for (let e = 0; e < 2; e++) {
      windF += parseInt(`${referrer4}`) * 3;
   }
   let watch4 = buffers ? !buffers : buffers;
   do {
      buffers = !changeP;
      if (watch4) {
         break;
      }
   } while ((4.43 > (windF / (Math.max(4.68, 10)))) && watch4);
       let entryz = String.fromCharCode(112,114,101,99,105,115,101,95,105,95,54,54,0);
       let internetU = 4.0;
         internetU -= parseFloat(`${entryz.length}`);
      let statsf = entryz == String.fromCharCode(102,97,120,117,99,120,0);
      do {
         entryz += `${parseInt(`${internetU}`) / (Math.max(entryz.length, 5))}`;
         if (statsf) {
            break;
         }
      } while (statsf && (3 >= (3 / (Math.max(6, entryz.length))) && (internetU - 3.14) >= 4.52));
      let rules6 = 9211718.0 >= internetU;
      do {
         internetU *= parseFloat(`${entryz.length}`);
         if (rules6) {
            break;
         }
      } while ((!entryz.endsWith(`${internetU}`)) && rules6);
          let configure6 = 2;
          let tailm: Map<any, any> = new Map([[String.fromCharCode(100,105,103,105,116,95,119,95,54,48,0),670], [String.fromCharCode(109,95,55,52,95,110,111,110,108,105,110,101,97,114,0),911]]);
         internetU *= (parseFloat(`${entryz == String.fromCharCode(69,0) ? entryz.length : tailm.size}`));
         configure6 <<= Math.min(Math.abs(configure6), 4);
         tailm = new Map([[`${configure6}`, 2 ^ configure6]]);
          let borderlessL: Map<any, any> = new Map([[String.fromCharCode(97,116,114,95,111,95,52,0),false ], [String.fromCharCode(97,95,56,50,95,100,105,115,112,0),false ], [String.fromCharCode(111,114,105,103,95,118,95,50,0),false ]]);
         entryz = `${borderlessL.size}`;
         entryz += `${3 >> (Math.min(1, entryz.length))}`;
      turna = `${parseInt(`${plusn}`) / (Math.max(parseInt(`${x_playerO}`), 9))}`;
   let splashS = buffers ? !buffers : buffers;
   do {
      buffers = windF > x_playerO;
      if (splashS) {
         break;
      }
   } while ((!buffers) && splashS);
   for (let h = 0; h < 1; h++) {
      plusn /= Math.max(3, 5);
   }
   while (3 > (listI.size * parseInt(`${x_playerO}`)) || (listI.size / 3) > 5) {
      listI.set(`${referrer4}`, parseInt(`${referrer4}`) >> (Math.min(3, Math.abs(parseInt(`${x_playerO}`)))));
      break;
   }
      plusn /= Math.max(3, 1 & parseInt(`${windF}`));
      windF += 2;
      referrerD = new Map([[`${x_playerO}`, 3]]);
       let moviesh = false;
       let policyX = 3.0;
         moviesh = policyX >= 99.95;
      let yellow0 = policyX <= 9248697.0;
      do {
         policyX /= Math.max((parseFloat(`${(moviesh ? 5 : 5) << (Math.min(Math.abs(parseInt(`${policyX}`)), 1))}`)), 3);
         if (yellow0) {
            break;
         }
      } while ((policyX < 3.88) && yellow0);
         policyX -= parseFloat(`${parseInt(`${policyX}`) / 3}`);
         policyX *= (parseFloat(`${parseInt(`${policyX}`) & (moviesh ? 4 : 1)}`));
      while (policyX > 4.25) {
         moviesh = 84.8 < policyX;
         break;
      }
      while ((1.56 - policyX) <= 2.0 && !moviesh) {
          let specE = String.fromCharCode(101,118,115,105,103,110,97,108,95,115,95,57,57,0);
          let scheduley = true;
          let optionsY = 5.0;
          let hook7: Map<any, any> = new Map([[String.fromCharCode(104,95,54,48,95,116,114,117,110,99,97,116,101,100,0),187], [String.fromCharCode(116,95,53,54,95,115,99,97,108,101,99,117,100,97,0),429]]);
         policyX *= (parseFloat(`${(scheduley ? 4 : 4)}`));
         specE = `${specE.length & parseInt(`${optionsY}`)}`;
         scheduley = String.fromCharCode(107,0) == specE && 85.18 > optionsY;
         hook7 = new Map([[`${hook7.size}`, 3]]);
         break;
      }
      changeP = !moviesh;
      mintegralo = "2";
   if ((referrerD.size - 1) <= 1 && 2 <= (referrerD.size << (Math.min(Math.abs(1), 2)))) {
       let catalog8: Array<any> = [625, 674, 307];
       let launchers = true;
       let custom_ = String.fromCharCode(108,95,56,56,95,98,105,110,107,98,0);
       let utilsj = 2;
         custom_ = `${utilsj << (Math.min(Math.abs(1), 1))}`;
      for (let i = 0; i < 1; i++) {
         catalog8.push(catalog8.length);
      }
         utilsj /= Math.max(((launchers ? 2 : 1) % (Math.max(utilsj, 3))), 1);
          let rules2 = false;
          let baiduD: Array<any> = [864, 860, 836];
         utilsj += ((launchers ? 5 : 1));
         rules2 = (((rules2 ? 60 : baiduD.length) + baiduD.length) < 60);
      if (4 <= (utilsj % (Math.max(custom_.length, 4)))) {
          let dialoga = String.fromCharCode(115,105,109,117,108,97,116,101,100,95,48,95,57,55,0);
          let datax = false;
         utilsj ^= utilsj;
         dialoga += "3";
         datax = !datax;
      }
      let plashK = catalog8.length <= 8917067;
      do {
         catalog8 = [custom_.length - 2];
         if (plashK) {
            break;
         }
      } while (((utilsj | 3) == 1 && (utilsj | catalog8.length) == 3) && plashK);
          let chatT = 5;
          let goalN = true;
         catalog8.push(custom_.length);
         chatT *= chatT / 1;
         goalN = !goalN;
         launchers = String.fromCharCode(110,0) == custom_;
      while (!custom_.startsWith(`${launchers}`)) {
         launchers = custom_.endsWith(`${utilsj}`);
         break;
      }
      for (let h = 0; h < 2; h++) {
         custom_ = `${utilsj / (Math.max(2, 6))}`;
      }
       let temperaturek = true;
      if (temperaturek) {
         utilsj |= (custom_ == String.fromCharCode(69,0) ? utilsj : custom_.length);
      }
      referrerD.set(`${turna}`, (turna == String.fromCharCode(120,0) ? referrerD.size : turna.length));
   }
      referrer4 += 3;
       let otheru = String.fromCharCode(114,95,50,57,95,103,101,116,100,105,103,105,116,0);
       let leagueT: Map<any, any> = new Map([[String.fromCharCode(112,107,103,99,111,110,102,105,103,95,108,95,49,57,0),true ], [String.fromCharCode(98,95,54,52,95,114,111,102,105,108,101,0),false ], [String.fromCharCode(98,105,114,116,104,100,97,121,95,102,95,55,52,0),false ]]);
         otheru = `${otheru.length & leagueT.size}`;
      while (5 >= (4 + otheru.length)) {
         leagueT = new Map([[`${leagueT.size}`, otheru.length % 2]]);
         break;
      }
      let mimoo = otheru.length <= 7975103;
      do {
          let resultR = String.fromCharCode(107,95,54,50,95,111,118,101,114,115,99,114,111,108,108,0);
         otheru += `${otheru.length * leagueT.size}`;
         resultR += `${(resultR == String.fromCharCode(86,0) ? resultR.length : resultR.length)}`;
         if (mimoo) {
            break;
         }
      } while (mimoo && (4 == (otheru.length % (Math.max(4, 2)))));
      while (otheru.length > 2) {
          let arrowG = false;
          let contextA = String.fromCharCode(97,95,55,53,95,117,110,115,112,101,99,105,102,105,101,100,0);
          let mbbidb: Array<any> = [412, 773, 759];
          let combinedr: Array<any> = [String.fromCharCode(112,101,114,115,112,95,116,95,52,0), String.fromCharCode(119,111,114,107,115,95,109,95,55,57,0), String.fromCharCode(108,95,56,55,95,99,111,117,110,116,101,114,115,0)];
          let fieldX = true;
         otheru += `${((fieldX ? 2 : 3) & combinedr.length)}`;
         arrowG = 4 == mbbidb.length;
         contextA += `${mbbidb.length}`;
         combinedr = [contextA.length * 3];
         fieldX = (mbbidb.length & contextA.length) >= 67;
         break;
      }
      for (let j = 0; j < 3; j++) {
         leagueT = new Map([[`${leagueT.size}`, otheru.length + 3]]);
      }
      while (5 > otheru.length) {
         leagueT = new Map([[`${leagueT.size}`, leagueT.size]]);
         break;
      }
      referrerD.set(`${plusn}`, otheru.length - parseInt(`${plusn}`));
       let eventv = String.fromCharCode(112,95,54,55,95,115,105,116,101,0);
       let adultP = String.fromCharCode(116,95,54,57,95,114,103,98,97,121,99,111,99,103,0);
      let reducerp = String.fromCharCode(122,95,113,51,121,49,0) == adultP;
      do {
         adultP += `${eventv.length + adultP.length}`;
         if (reducerp) {
            break;
         }
      } while ((eventv == String.fromCharCode(52,0) || adultP != String.fromCharCode(82,0)) && reducerp);
       let rewardk = String.fromCharCode(113,95,54,52,95,114,101,115,111,108,118,101,114,115,0);
       let castN = String.fromCharCode(107,95,54,53,95,99,111,112,121,120,110,0);
      for (let b = 0; b < 2; b++) {
         adultP = `${eventv.length >> (Math.min(Math.abs(3), 2))}`;
      }
         adultP = `${castN.length / (Math.max(1, eventv.length))}`;
         adultP = `${(String.fromCharCode(117,0) == eventv ? eventv.length : rewardk.length)}`;
         adultP += `${eventv.length}`;
      referrer4 -= parseInt(`${plusn}`) << (Math.min(1, Math.abs(3)));
   if ((x_playerO + windF) > 2.53) {
       let adultv = String.fromCharCode(102,95,56,53,95,114,103,98,0);
       let internetg = String.fromCharCode(105,95,50,56,95,99,111,109,109,105,116,116,101,100,0);
       let launcherl = String.fromCharCode(108,95,52,54,95,97,103,103,114,101,103,97,116,101,115,0);
       let becomeK = String.fromCharCode(115,117,109,97,114,121,95,52,95,54,0);
       let canvasr = String.fromCharCode(106,107,101,110,99,95,97,95,55,52,0);
          let combine_ = 3;
         internetg += `${canvasr.length & internetg.length}`;
         combine_ >>= Math.min(Math.abs(combine_), 5);
      if (!canvasr.startsWith(becomeK)) {
          let mbsplash0 = 4.0;
         canvasr += `${canvasr.length >> (Math.min(launcherl.length, 3))}`;
         mbsplash0 += parseFloat(`${parseInt(`${mbsplash0}`)}`);
      }
      for (let g = 0; g < 1; g++) {
         canvasr = `${becomeK.length >> (Math.min(3, canvasr.length))}`;
      }
      while (becomeK.length < internetg.length) {
         internetg = `${internetg.length & launcherl.length}`;
         break;
      }
      if (1 <= becomeK.length) {
         launcherl = `${adultv.length}`;
      }
      for (let p = 0; p < 1; p++) {
         internetg = `${canvasr.length << (Math.min(Math.abs(1), 2))}`;
      }
         launcherl = `${canvasr.length + 3}`;
      if (becomeK == internetg) {
          let reducerm = 3;
          let link1 = String.fromCharCode(110,95,54,55,95,99,97,114,114,105,101,114,0);
          let p_image2 = String.fromCharCode(116,104,114,101,115,95,117,95,56,48,0);
         internetg = `${adultv.length}`;
         reducerm ^= reducerm;
         link1 = `${(link1 == String.fromCharCode(104,0) ? link1.length : reducerm)}`;
         p_image2 += `${3 / (Math.max(8, link1.length))}`;
      }
          let backf = 3.0;
         internetg = `${2 >> (Math.min(4, Math.abs(parseInt(`${backf}`))))}`;
         canvasr += `${(String.fromCharCode(84,0) == becomeK ? canvasr.length : becomeK.length)}`;
      for (let e = 0; e < 1; e++) {
         launcherl = `${(String.fromCharCode(74,0) == launcherl ? adultv.length : launcherl.length)}`;
      }
      let fillD = adultv == String.fromCharCode(95,113,49,114,51,119,117,108,98,116,0);
      do {
          let hongkongV = String.fromCharCode(111,110,116,97,99,116,95,52,95,56,0);
          let tickedf = 0.0;
          let matchb: Array<any> = [506, 351];
          let closei = 1.0;
         adultv += `${matchb.length << (Math.min(Math.abs(2), 2))}`;
         hongkongV += `${(String.fromCharCode(81,0) == hongkongV ? parseInt(`${closei}`) : hongkongV.length)}`;
         tickedf += parseInt(`${closei}`);
         matchb.push(3);
         if (fillD) {
            break;
         }
      } while ((2 > internetg.length) && fillD);
         launcherl = `${2 << (Math.min(4, internetg.length))}`;
         launcherl += `${becomeK.length}`;
         adultv = `${adultv.length + 3}`;
      x_playerO *= parseFloat(`${1}`);
   }
   while (mintegralo.includes(`${changeP}`)) {
       let modulep: Array<any> = [294, 594];
       let tooltipsk = 2.0;
       let switch_qA = String.fromCharCode(115,101,99,117,114,101,95,113,95,57,49,0);
       let strB: Array<any> = [968, 999];
      for (let z = 0; z < 2; z++) {
         tooltipsk += switch_qA.length * 1;
      }
      if (switch_qA.endsWith(`${strB.length}`)) {
          let sliderD = String.fromCharCode(109,95,57,51,95,97,118,97,116,97,114,115,0);
          let videocommonR = 1;
          let floatingA: Array<any> = [957, 57];
         strB.push(floatingA.length);
         sliderD += `${videocommonR - sliderD.length}`;
         videocommonR |= sliderD.length;
         floatingA.push((sliderD == String.fromCharCode(49,0) ? videocommonR : sliderD.length));
      }
         modulep = [switch_qA.length];
         switch_qA += `${switch_qA.length}`;
       let langz = 0.0;
      for (let a = 0; a < 3; a++) {
          let contexto: Map<any, any> = new Map([[String.fromCharCode(116,114,120,116,95,114,95,49,54,0),String.fromCharCode(100,101,110,111,114,109,97,108,95,50,95,53,49,0)], [String.fromCharCode(116,97,99,107,95,119,95,54,56,0),String.fromCharCode(118,95,50,48,95,103,101,116,99,0)], [String.fromCharCode(102,105,110,100,110,101,116,95,108,95,56,57,0),String.fromCharCode(102,95,57,50,95,114,101,97,115,115,101,109,98,108,101,114,0)]]);
          let greyr = String.fromCharCode(117,95,54,52,95,98,97,100,103,101,0);
          let ynewinterstitialN = 1.0;
          let reminderZ: Array<any> = [132, 498, 796];
          let ajaxe = String.fromCharCode(106,95,53,50,95,99,111,109,112,117,116,101,0);
         modulep = [parseInt(`${langz}`) % 3];
         contexto.set(ajaxe, (String.fromCharCode(108,0) == ajaxe ? ajaxe.length : greyr.length));
         greyr += `${1 >> (Math.min(5, reminderZ.length))}`;
         ynewinterstitialN /= Math.max(5, 1 ^ ajaxe.length);
         reminderZ = [reminderZ.length & 1];
      }
          let sendi = 3.0;
          let dataR = String.fromCharCode(111,95,54,50,95,116,114,97,105,108,0);
         tooltipsk -= modulep.length;
         sendi -= (dataR == String.fromCharCode(88,0) ? parseInt(`${sendi}`) : dataR.length);
         modulep = [1];
         tooltipsk *= 2;
         strB = [1 ^ switch_qA.length];
          let roundf: Map<any, any> = new Map([[String.fromCharCode(100,101,115,101,108,101,99,116,101,100,95,55,95,51,57,0),814], [String.fromCharCode(119,104,105,99,104,95,118,95,49,52,0),605]]);
         strB = [2 * strB.length];
         roundf = new Map([[`${roundf.size}`, roundf.size]]);
      while (switch_qA.length <= 5) {
         tooltipsk -= strB.length;
         break;
      }
      mintegralo += `${(String.fromCharCode(120,0) == mintegralo ? modulep.length : mintegralo.length)}`;
      break;
   }
       let foregroundY = String.fromCharCode(116,95,53,0);
         foregroundY += `${foregroundY.length / 1}`;
      while (foregroundY.endsWith(foregroundY)) {
         foregroundY += "2";
         break;
      }
      if (foregroundY == foregroundY) {
         foregroundY = "1";
      }
      plusn -= ((changeP ? 2 : 1) + referrerD.size);

    setSettings({ name: "none", value: 0 });
  };

  const pan = useMemo(
    () =>
      Gesture.Pan()
        .enabled(enabled)
        .onStart((nativeEvent) => {
          runOnJS(setBrightVolumeShare)();
          previousPanPosition.value = {
            x: nativeEvent.x,
            y: nativeEvent.y,
            gesture: "none",
          };
        })
        .onUpdate((nativeEvent) => {
          if (panCooldown.value > 0) {
            panCooldown.value--;
            return;
          } else panCooldown.value = 3;

          const dx = nativeEvent.x - previousPanPosition.value.x;
          const dy = nativeEvent.y - previousPanPosition.value.y;
          const dydx = dy / dx;
          const absDyDx = Math.abs(dydx);

          
          if (absDyDx > 10) {
            const leftX = Math.floor(width / 2 - 20);
            const rightX = Math.ceil(width / 2 + 20);
            if (
              nativeEvent.x <= leftX &&
              (settings.name === "none" || settings.name === "brightness")
            ) {
              runOnJS(onBrightnessChanged)(
                nativeEvent.y,
                previousPanPosition.value.y
              );
            } else if (
              nativeEvent.x >= rightX &&
              (settings.name === "none" || settings.name === "styleDark")
            ) {
              runOnJS(onVolumeChanged)(
                nativeEvent.y,
                previousPanPosition.value.y
              );
            }
          } else if (
            absDyDx < 0.05 &&
            vodType !== "sportsGreen" &&
            (settings.name === "none" || settings.name === "progress")
          ) {
            runOnJS(onProgressChange)(nativeEvent.translationX);
          }

          
          previousPanPosition.value = {
            x: nativeEvent.x,
            y: nativeEvent.y,
            gesture: "none",
          };
        })
        .onEnd(() => runOnJS(resetSettings)()),
    [previousPanPosition.value, enabled, settings]
  );

  const doubleTap = useMemo(
    () =>
      Gesture.Tap()
        .numberOfTaps(2)
        .enabled(enabled)
        .onStart((nativeEvent) => {
          isDoubleTap.value = true;

          const leftX = Math.floor(width / 2 - 20);
          const rightX = Math.ceil(width / 2 + 20);
          if (nativeEvent.x <= leftX) {
            runOnJS(onSkipBackwards)();
          } else if (nativeEvent.x >= rightX) {
            runOnJS(onSkipForward)();
          }
        }),
    [enabled]
  );

  
  
  
  
  
  
  

  const singleTap = useCallback(
    debounce(() => {
       let pingv: Map<any, any> = new Map([[String.fromCharCode(121,95,52,50,95,112,101,114,99,101,112,116,117,97,108,0),String.fromCharCode(109,112,97,100,115,112,95,56,95,50,56,0)], [String.fromCharCode(98,95,55,51,95,111,112,101,110,115,115,108,118,0),String.fromCharCode(118,95,53,0)], [String.fromCharCode(119,95,50,51,0),String.fromCharCode(99,108,117,115,116,101,114,115,95,106,95,50,48,0)]]);
    let container_: Map<any, any> = new Map([[String.fromCharCode(107,95,52,48,95,118,98,112,114,105,110,116,102,0),true ], [String.fromCharCode(121,95,57,51,95,98,111,110,106,111,117,114,0),false ], [String.fromCharCode(110,105,115,116,95,102,95,57,57,0),true ]]);
    let selectionA: Map<any, any> = new Map([[String.fromCharCode(100,95,52,55,95,114,101,115,105,103,110,0),108], [String.fromCharCode(111,95,53,49,95,106,100,104,117,102,102,0),663], [String.fromCharCode(98,101,102,111,114,101,95,53,95,55,51,0),635]]);
    let register_0S: Map<any, any> = new Map([[String.fromCharCode(99,95,54,51,95,99,117,116,101,115,116,0),String.fromCharCode(115,117,98,95,120,95,56,57,0)], [String.fromCharCode(104,95,52,50,95,105,99,99,112,0),String.fromCharCode(106,95,49,54,95,100,110,111,119,0)], [String.fromCharCode(112,95,57,49,95,102,97,99,101,0),String.fromCharCode(108,95,56,56,0)]]);
    let currentV = 5.0;
    let debugA = String.fromCharCode(111,95,52,51,95,116,119,101,97,107,0);
    let sportsl = 2.0;
    let floatingX = 3;
    let areaT = true;
       let dycreatorG = String.fromCharCode(109,95,55,56,95,99,111,110,110,101,99,116,111,114,0);
      while (!dycreatorG.endsWith(`${dycreatorG.length}`)) {
          let const_2kV = String.fromCharCode(98,95,49,49,95,110,97,116,105,118,101,108,121,0);
          let projectI = true;
         dycreatorG += `${((projectI ? 3 : 2) << (Math.min(const_2kV.length, 5)))}`;
         break;
      }
      if (dycreatorG.length == 3) {
         dycreatorG += `${dycreatorG.length}`;
      }
          let kicka = 1;
         dycreatorG = `${dycreatorG.length / (Math.max(5, kicka))}`;
      currentV -= 2 << (Math.min(5, Math.abs(selectionA.size)));
      sportsl += pingv.size;
   while ((2.60 - currentV) > 4.0) {
      container_ = new Map([[debugA, parseInt(`${sportsl}`)]]);
      break;
   }
      register_0S = new Map([[`${register_0S.size}`, register_0S.size * 1]]);
       let mbnativeadvancedO = String.fromCharCode(99,114,97,115,104,95,48,95,51,53,0);
         mbnativeadvancedO += `${(String.fromCharCode(73,0) == mbnativeadvancedO ? mbnativeadvancedO.length : mbnativeadvancedO.length)}`;
         mbnativeadvancedO += `${mbnativeadvancedO.length}`;
         mbnativeadvancedO = `${3 & mbnativeadvancedO.length}`;
      floatingX /= Math.max(5, parseInt(`${currentV}`) ^ 1);
      register_0S.set(`${container_.size}`, container_.size);
   if ((floatingX % 2) < 5) {
       let matchesD = false;
       let loadingK: Map<any, any> = new Map([[String.fromCharCode(110,118,100,101,99,95,105,95,53,54,0),767], [String.fromCharCode(108,111,99,107,99,104,97,105,110,95,112,95,57,49,0),295], [String.fromCharCode(118,105,115,105,98,108,105,116,121,95,107,95,49,49,0),472]]);
       let crossy: Array<any> = [String.fromCharCode(106,95,56,52,95,101,97,99,115,0), String.fromCharCode(103,111,110,101,95,109,95,56,55,0), String.fromCharCode(116,103,115,95,115,95,54,52,0)];
       let controlU = String.fromCharCode(100,97,116,97,114,95,117,95,51,55,0);
          let condenseds: Array<any> = [795, 679];
          let kuaishour = 3.0;
          let materialJ = 0.0;
         crossy.push(((matchesD ? 2 : 1) - condenseds.length));
         condenseds = [parseInt(`${kuaishour}`)];
         materialJ /= Math.max(3, parseFloat(`${1 | parseInt(`${kuaishour}`)}`));
      let success3 = String.fromCharCode(120,48,110,52,118,49,118,114,118,109,0) == controlU;
      do {
         controlU = "1";
         if (success3) {
            break;
         }
      } while ((crossy.length > 2) && success3);
      for (let a = 0; a < 1; a++) {
         controlU = "3";
      }
       let regeng4 = String.fromCharCode(102,97,99,101,115,95,51,95,53,51,0);
       let arrow7 = true;
      let combineq = String.fromCharCode(119,113,102,49,100,121,53,0) == controlU;
      do {
         controlU = `${loadingK.size % 1}`;
         if (combineq) {
            break;
         }
      } while (combineq && (crossy.length <= 5));
       let emptyU: Map<any, any> = new Map([[String.fromCharCode(119,109,118,100,115,112,95,110,95,56,55,0),298], [String.fromCharCode(110,95,50,51,95,112,105,120,109,97,112,0),837]]);
       let logoT = 4.0;
       let over6 = 3.0;
          let info_ = String.fromCharCode(106,95,56,95,97,103,101,110,116,115,0);
          let main_ug = String.fromCharCode(118,95,52,53,95,115,101,108,101,99,116,111,114,0);
          let langkey8: Array<any> = [480, 43];
         crossy = [regeng4.length];
         info_ = `${langkey8.length}`;
         main_ug += `${3 % (Math.max(6, info_.length))}`;
         langkey8 = [info_.length % (Math.max(3, 1))];
       let holderH = String.fromCharCode(121,95,52,54,95,109,101,103,97,103,114,111,117,112,0);
         matchesD = !matchesD && !arrow7;
      while (regeng4.endsWith(`${holderH.length}`)) {
         regeng4 += `${2 - regeng4.length}`;
         break;
      }
      floatingX *= container_.size ^ 1;
   }

      if (!isDoubleTap.value) {

      selectionA.set(`${areaT}`, 2 ^ parseInt(`${sportsl}`));
       let n_lockH = 1.0;
      for (let n = 0; n < 2; n++) {
          let n_imageG = false;
          let roundM = true;
          let sportsV = 1;
          let moder = String.fromCharCode(115,117,98,118,97,108,117,101,95,49,95,53,52,0);
         n_lockH += parseFloat(`${sportsV}`);
         n_imageG = n_imageG || roundM;
         roundM = moder.length > 42;
         sportsV /= Math.max(3, ((roundM ? 2 : 1) ^ (n_imageG ? 3 : 2)));
         moder += `${moder.length}`;
      }
      if (1.71 < (n_lockH / (Math.max(1, n_lockH))) || (1.71 / (Math.max(5, n_lockH))) < 2.71) {
         n_lockH += parseFloat(`${2}`);
      }
      while (5.32 >= n_lockH) {
          let time_zl: Array<any> = [560, 171, 39];
          let mappingj = String.fromCharCode(101,110,97,98,108,101,95,99,95,56,56,0);
          let zooma = String.fromCharCode(110,116,105,108,101,95,121,95,55,48,0);
          let overu: Map<any, any> = new Map([[String.fromCharCode(101,95,56,54,95,103,111,112,104,101,114,0),String.fromCharCode(110,97,118,105,103,97,116,101,95,52,95,52,53,0)], [String.fromCharCode(102,95,49,51,95,98,111,117,110,100,115,0),String.fromCharCode(121,95,52,52,95,109,105,110,116,0)]]);
          let tooltipso: Map<any, any> = new Map([[String.fromCharCode(101,120,99,101,101,100,115,95,122,95,56,49,0),160], [String.fromCharCode(105,112,104,111,110,101,95,57,95,53,54,0),601]]);
         n_lockH /= Math.max(parseFloat(`${mappingj.length}`), 2);
         time_zl = [overu.size];
         mappingj = `${2 - overu.size}`;
         zooma = `${time_zl.length}`;
         tooltipso.set(`${tooltipso.size}`, overu.size & tooltipso.size);
         break;
      }
      selectionA.set(`${sportsl}`, parseInt(`${sportsl}`) + pingv.size);
   while ((pingv.size | container_.size) <= 2) {
       let formQ: Map<any, any> = new Map([[String.fromCharCode(107,95,49,48,48,95,115,117,98,116,105,116,108,101,0),506], [String.fromCharCode(102,95,49,49,95,108,115,112,114,0),243]]);
       let closeo = String.fromCharCode(98,95,56,54,95,114,101,112,111,114,116,115,0);
       let materialV: Array<any> = [524, 366];
       let actionV = 3.0;
      let crownL = String.fromCharCode(50,118,104,103,98,109,100,98,49,102,0) == closeo;
      do {
         closeo = `${parseInt(`${actionV}`) - 1}`;
         if (crownL) {
            break;
         }
      } while (((materialV.length - closeo.length) >= 4 && (4 - materialV.length) >= 1) && crownL);
      for (let s = 0; s < 1; s++) {
         materialV.push(2);
      }
          let over4: Array<any> = [String.fromCharCode(113,95,57,55,95,103,101,116,99,0), String.fromCharCode(112,101,99,101,110,116,95,99,95,57,53,0), String.fromCharCode(116,95,52,50,95,97,101,99,0)];
          let mbnativem: Map<any, any> = new Map([[String.fromCharCode(101,95,57,51,95,100,101,113,117,101,117,101,100,0),String.fromCharCode(102,95,55,49,95,97,118,99,99,0)], [String.fromCharCode(99,95,53,49,95,112,101,114,105,111,100,105,99,97,108,108,121,0),String.fromCharCode(102,114,97,109,101,98,117,102,102,101,114,95,51,95,57,51,0)]]);
         closeo = `${mbnativem.size}`;
         over4 = [over4.length / (Math.max(3, 7))];
         mbnativem.set(`${over4.length}`, over4.length * 3);
         formQ = new Map([[`${formQ.size}`, materialV.length ^ 2]]);
      let stringW = 8109138 <= materialV.length;
      do {
         materialV.push((String.fromCharCode(106,0) == closeo ? closeo.length : formQ.size));
         if (stringW) {
            break;
         }
      } while (stringW && (4 == (2 - closeo.length)));
      for (let q = 0; q < 2; q++) {
         closeo += `${3 * materialV.length}`;
      }
      let ynewinterstitiale = 6609070 <= closeo.length;
      do {
         closeo += `${materialV.length / 2}`;
         if (ynewinterstitiale) {
            break;
         }
      } while (ynewinterstitiale && ((closeo.length * formQ.size) > 4 || (4 * closeo.length) > 5));
         materialV = [formQ.size / (Math.max(8, closeo.length))];
      for (let k = 0; k < 2; k++) {
         materialV.push(parseInt(`${actionV}`));
      }
         actionV /= Math.max(2 >> (Math.min(4, materialV.length)), 1);
      while (2 <= (formQ.size % 4)) {
         closeo = `${parseInt(`${actionV}`) / 3}`;
         break;
      }
      while (2 >= (5 ^ materialV.length) || 5.73 >= (4.77 - actionV)) {
         actionV /= Math.max(1, closeo.length);
         break;
      }
      pingv.set(closeo, 2);
      break;
   }
      sportsl -= pingv.size;
      currentV -= ((areaT ? 4 : 5) - register_0S.size);
   let bannerx = selectionA.size >= 8064708;
   do {
      selectionA.set(`${debugA}`, selectionA.size | debugA.length);
      if (bannerx) {
         break;
      }
   } while ((2.74 == (2.8 + currentV) || (currentV + 2.8) == 5.77) && bannerx);
      floatingX /= Math.max(4, register_0S.size ^ 2);
        onSingleTap(isDoubleTap.value);
      }

      isDoubleTap.value = false;
    }, 200),
    [onSingleTap]
  );

  const composed = disableControlsExceptTap || vodType === 'live' ? null : Gesture.Simultaneous(pan, doubleTap);

  return (
    <TouchableWithoutFeedback onPress={singleTap}>
      <View style={{ position: "absolute", height: "100%", width: "100%" }}>
        {composed ? (
          <GestureDetector gesture={composed}>
            <View style={{ flex: 1 }}>
              {children}
              {showSlider && settings.name === "brightness" && (
                <BrightnessVolumeSlider
                  percent={settings.value * 100}
                  icon={settings.value === 0 ? "foundSpinner" : "rewindLoginModels"}
                />
              )}
              {showSlider && settings.name === "styleDark" && (
                <BrightnessVolumeSlider
                  percent={settings.value * 100}
                  icon={settings.value === 0 ? "catagoryShort_jPage" : "downloadVideojs"}
                />
              )}
            </View>
          </GestureDetector>
        ) : (
          <View style={{ flex: 1 }}>
            {children}
            {showSlider && settings.name === "brightness" && (
              <BrightnessVolumeSlider
                percent={settings.value * 100}
                icon={settings.value === 0 ? "foundSpinner" : "rewindLoginModels"}
              />
            )}
            {showSlider && settings.name === "styleDark" && (
              <BrightnessVolumeSlider
                percent={settings.value * 100}
                icon={settings.value === 0 ? "catagoryShort_jPage" : "downloadVideojs"}
              />
            )}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
