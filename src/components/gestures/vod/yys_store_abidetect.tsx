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
import BrightnessVolumeSlider from "./yys_iconcurrentmatch";
import { debounce } from "lodash";
type yysIconarrowrightorangeStation = {
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

type yysVipsport = {
  name: "progress" | "brightness" | "countdownIconplayActive" | "none";
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
}: yysIconarrowrightorangeStation) => {
  const panCooldown = useSharedValue(3);

  const previousPanPosition = useSharedValue({ x: 0, y: 0, gesture: "none" });
  const brightShare = useSharedValue(0.0);
  const volumeShare = useSharedValue(0.0);
  const [settings, setSettings] = useState<yysVipsport>({
    name: "none",
    value: 0,
  });
  const [showSlider, setShowSlider] = useState(false);

  const isDoubleTap = useSharedValue(false);

  const sliderTimeout = useRef(0);
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  const showControls = () => {
       let typingK = 2.0;
    let umengS = 5.0;
    let floaterp = String.fromCharCode(114,101,102,95,120,95,54,51,0);
    let libtobB: Array<any> = [457, 832, 429];
    let ccdfbdabcabbbedbI: Array<any> = [String.fromCharCode(98,95,55,54,95,115,117,98,116,114,97,99,116,105,111,110,0), String.fromCharCode(105,110,118,97,108,105,100,95,113,95,53,49,0), String.fromCharCode(103,97,115,95,99,95,54,54,0)];
    let bangS = 3.0;
    let icontransferclub6 = String.fromCharCode(99,111,114,114,101,108,97,116,101,95,120,95,54,0);
    let iconlogoutU = String.fromCharCode(116,95,50,95,100,105,109,101,110,115,0);
    let popupV: Map<any, any> = new Map([[String.fromCharCode(111,109,112,108,105,99,97,116,105,111,110,95,115,95,49,49,0),385], [String.fromCharCode(110,111,100,101,95,114,95,52,50,0),314]]);
    let mbnatives = 1.0;
    let bridgeV = true;
    let playlistF: Array<any> = [String.fromCharCode(112,111,108,105,99,105,101,115,95,99,95,49,56,0), String.fromCharCode(115,116,97,99,107,101,100,95,52,95,55,51,0), String.fromCharCode(115,116,97,110,100,97,114,100,105,122,101,95,102,95,52,56,0)];
    let baseP = 1;
    let libfollyx: Map<any, any> = new Map([[String.fromCharCode(97,95,54,55,0),131], [String.fromCharCode(103,95,55,55,95,111,110,121,120,99,0),570]]);
    let downloadingK: Map<any, any> = new Map([[String.fromCharCode(116,95,56,55,95,110,112,111,105,110,116,115,0),560], [String.fromCharCode(121,95,49,52,95,108,97,118,102,117,116,105,108,115,0),257]]);
    let icondefaultthumbnailV: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,114,101,115,115,111,114,95,53,95,53,51,0),String.fromCharCode(97,101,118,97,108,95,118,95,56,52,0)], [String.fromCharCode(109,101,109,100,117,112,95,98,95,54,55,0),String.fromCharCode(99,120,100,97,116,97,95,48,95,55,51,0)]]);
    let containerr = 4.0;
    let line9 = 2.0;
   for (let d = 0; d < 3; d++) {
      bangS -= floaterp.length;
   }
   let homeactivex = 5391992 >= libtobB.length;
   do {
      libtobB.push(3 ^ parseInt(`${bangS}`));
      if (homeactivex) {
         break;
      }
   } while (homeactivex && ((3 / (Math.max(4, ccdfbdabcabbbedbI.length))) < 3 || (3 / (Math.max(6, ccdfbdabcabbbedbI.length))) < 2));
      popupV.set(`${mbnatives}`, 2);
   for (let x = 0; x < 1; x++) {
      libtobB.push(3);
   }
   let rewindK = mbnatives >= 5096666.0;
   do {
       let fullT: Map<any, any> = new Map([[String.fromCharCode(108,111,103,105,110,95,103,95,50,51,0),717], [String.fromCharCode(109,97,116,114,105,120,105,110,103,95,56,95,57,49,0),921]]);
       let roboto3 = true;
       let commonL = 3;
       let componentregistryF: Array<any> = [56, 969, 777];
       let expand5 = 1.0;
         commonL -= 3 & componentregistryF.length;
      if (!roboto3) {
         componentregistryF = [commonL * 1];
      }
      if (fullT.size > 4) {
         componentregistryF = [((roboto3 ? 5 : 5) | 3)];
      }
      if ((fullT.size + parseInt(`${expand5}`)) > 3 || 3 > (fullT.size + parseInt(`${expand5}`))) {
         fullT = new Map([[`${fullT.size}`, ((roboto3 ? 4 : 2) + 1)]]);
      }
         roboto3 = expand5 == 8.55;
         expand5 -= commonL;
         expand5 *= componentregistryF.length;
         roboto3 = commonL <= parseInt(`${expand5}`);
       let showmoren = 5.0;
         fullT.set(`${componentregistryF.length}`, 1 * componentregistryF.length);
          let whiteanimationliveW = 0.0;
          let textlayoutmanagerZ = 2.0;
          let q_imagej = String.fromCharCode(116,95,50,50,95,115,111,97,99,99,101,112,116,0);
         showmoren += 3 % (Math.max(9, commonL));
         whiteanimationliveW -= parseInt(`${textlayoutmanagerZ}`);
         textlayoutmanagerZ -= parseInt(`${whiteanimationliveW}`);
         q_imagej = `${(q_imagej == String.fromCharCode(89,0) ? q_imagej.length : parseInt(`${textlayoutmanagerZ}`))}`;
       let sentry4 = true;
       let changex = false;
         sentry4 = 8.93 <= expand5;
          let teamdetailsbg3: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,111,114,116,101,100,95,56,95,55,49,0),246], [String.fromCharCode(117,95,57,53,95,105,110,118,111,108,118,101,100,0),432], [String.fromCharCode(122,95,57,55,95,115,112,101,99,105,102,105,99,97,116,105,111,110,0),54]]);
          let yellowscoreballD = 2;
          let dependenciess = String.fromCharCode(97,118,102,111,114,109,97,116,114,101,115,95,102,95,57,49,0);
         sentry4 = commonL == fullT.size;
         teamdetailsbg3.set(`${yellowscoreballD}`, 3);
         yellowscoreballD ^= dependenciess.length / 1;
         dependenciess = `${teamdetailsbg3.size}`;
      for (let s = 0; s < 2; s++) {
         sentry4 = expand5 < 59.87;
      }
      mbnatives /= Math.max(parseInt(`${bangS}`) + 2, 1);
      if (rewindK) {
         break;
      }
   } while (rewindK && (1.48 == (typingK + 5)));
      popupV = new Map([[`${ccdfbdabcabbbedbI.length}`, 3]]);
      popupV.set(`${bangS}`, parseInt(`${bangS}`));

    setShowSlider(true);

   while ((5 | icontransferclub6.length) >= 1 || 5.67 >= (icontransferclub6.length + bangS)) {
      bangS += playlistF.length;
      break;
   }
       let notificationgrayn = 4;
       let carousels = 4.0;
       let greyd: Array<any> = [306, 924];
      let predictionbannersharedh = carousels <= 9539672.0;
      do {
         carousels += 3 & greyd.length;
         if (predictionbannersharedh) {
            break;
         }
      } while (predictionbannersharedh && (carousels == greyd.length));
         greyd.push(notificationgrayn);
          let iconsubssuccessA = 3.0;
         greyd = [notificationgrayn];
         iconsubssuccessA -= parseFloat(`${parseInt(`${iconsubssuccessA}`)}`);
          let main_pF = false;
          let arrowdownQ = String.fromCharCode(115,105,100,101,100,97,116,97,95,112,95,49,52,0);
         carousels /= Math.max(4, greyd.length % 3);
         main_pF = !main_pF || arrowdownQ.length == 42;
         arrowdownQ += `${((main_pF ? 2 : 4))}`;
      while (carousels <= notificationgrayn) {
         notificationgrayn /= Math.max(1, 2);
         break;
      }
       let middleP: Array<any> = [838, 869];
         middleP = [middleP.length];
      if (middleP.includes(carousels)) {
         middleP = [parseInt(`${carousels}`)];
      }
      while ((middleP.length >> (Math.min(greyd.length, 1))) <= 4 || 3 <= (greyd.length >> (Math.min(Math.abs(4), 3)))) {
         middleP.push(notificationgrayn);
         break;
      }
      icontransferclub6 += `${3 + parseInt(`${umengS}`)}`;
       let predictionk: Map<any, any> = new Map([[String.fromCharCode(104,121,115,116,101,114,101,115,105,115,95,113,95,49,50,0),423], [String.fromCharCode(108,95,53,52,95,116,104,97,116,0),52], [String.fromCharCode(116,121,112,101,115,95,53,95,57,52,0),214]]);
       let penaltygoalU = 1.0;
       let rnewarchdefaultsz = String.fromCharCode(105,95,50,53,95,101,115,115,101,110,99,101,0);
         penaltygoalU *= (parseFloat(`${rnewarchdefaultsz == String.fromCharCode(107,0) ? parseInt(`${penaltygoalU}`) : rnewarchdefaultsz.length}`));
      while (2 <= (3 - parseInt(`${penaltygoalU}`)) && (rnewarchdefaultsz.length & 3) <= 4) {
         rnewarchdefaultsz += "3";
         break;
      }
       let heartN = String.fromCharCode(114,101,115,111,108,117,116,105,111,110,95,117,95,51,50,0);
       let productA = String.fromCharCode(98,95,57,53,95,109,117,108,116,105,112,108,121,105,110,103,0);
       let connectionX = 0.0;
         heartN += `${(heartN == String.fromCharCode(72,0) ? heartN.length : parseInt(`${connectionX}`))}`;
      for (let g = 0; g < 2; g++) {
         penaltygoalU += parseFloat(`${heartN.length}`);
      }
      while (4 < heartN.length) {
          let switch_len = 4.0;
          let feedbacko = String.fromCharCode(97,115,99,95,52,95,51,51,0);
          let tumbnailO: Array<any> = [598, 800];
          let arrowdownN = 5;
         heartN = `${tumbnailO.length % (Math.max(9, arrowdownN))}`;
         switch_len += parseFloat(`${3 + feedbacko.length}`);
         feedbacko = `${feedbacko.length}`;
         tumbnailO.push(1);
         arrowdownN -= 2;
         break;
      }
          let icondownimgL = String.fromCharCode(113,95,50,56,95,109,105,120,112,97,110,101,108,0);
         penaltygoalU += parseFloat(`${productA.length % (Math.max(4, parseInt(`${connectionX}`)))}`);
         icondownimgL = `${icondownimgL.length % 2}`;
      while ((parseInt(`${penaltygoalU}`) / 5) > 3 && (parseInt(`${penaltygoalU}`) / (Math.max(rnewarchdefaultsz.length, 8))) > 5) {
         penaltygoalU /= Math.max(4, (parseFloat(`${String.fromCharCode(84,0) == heartN ? heartN.length : parseInt(`${connectionX}`)}`)));
         break;
      }
      typingK -= (parseFloat(`${String.fromCharCode(53,0) == iconlogoutU ? parseInt(`${penaltygoalU}`) : iconlogoutU.length}`));
      predictionk = new Map([[`${predictionk.size}`, 1]]);
   let active0 = bridgeV ? !bridgeV : bridgeV;
   do {
      bridgeV = (playlistF.length | icontransferclub6.length) > 24;
      if (active0) {
         break;
      }
   } while ((bridgeV && (baseP % 3) <= 3) && active0);
   while ((5 + libtobB.length) == 4) {
      icontransferclub6 += `${(iconlogoutU == String.fromCharCode(115,0) ? popupV.size : iconlogoutU.length)}`;
      break;
   }
   let baseline0 = baseP >= 7848738;
   do {
      baseP %= Math.max(baseP, 3);
      if (baseline0) {
         break;
      }
   } while ((baseP >= 5) && baseline0);
       let clubc: Array<any> = [198, 627];
       let videojsY = String.fromCharCode(116,111,110,101,115,95,116,95,55,55,0);
         videojsY += `${clubc.length}`;
         videojsY = `${1 / (Math.max(10, videojsY.length))}`;
       let scrollviewG = false;
          let chatL = String.fromCharCode(97,95,55,54,95,115,105,109,117,108,97,116,105,111,110,0);
         clubc.push(2);
         chatL += `${(chatL == String.fromCharCode(68,0) ? chatL.length : chatL.length)}`;
          let iconbackwhitew: Array<any> = [678, 94, 482];
          let floaterj = 3.0;
          let nodeF = String.fromCharCode(109,95,56,48,95,120,103,101,116,98,118,0);
         videojsY += "1";
         iconbackwhitew = [2];
         floaterj += iconbackwhitew.length + 2;
         nodeF = `${1 | nodeF.length}`;
      if (clubc.length == 4 || (clubc.length ^ 4) == 1) {
         scrollviewG = clubc.length >= 12;
      }
      popupV = new Map([[iconlogoutU, (String.fromCharCode(106,0) == icontransferclub6 ? icontransferclub6.length : iconlogoutU.length)]]);
    clearTimeout(sliderTimeout.current);

   if (3 < (libfollyx.size % (Math.max(10, ccdfbdabcabbbedbI.length))) && 5 < (ccdfbdabcabbbedbI.length % 3)) {
      ccdfbdabcabbbedbI.push(baseP);
   }
   for (let w = 0; w < 1; w++) {
      mbnatives += icontransferclub6.length;
   }
   if (!icontransferclub6.endsWith(`${ccdfbdabcabbbedbI.length}`)) {
      ccdfbdabcabbbedbI = [playlistF.length << (Math.min(5, Math.abs(parseInt(`${umengS}`))))];
   }
       let icondefaultthumbnail2 = String.fromCharCode(97,98,115,108,95,107,95,49,56,0);
       let libimagepipelineN: Array<any> = [730, 66, 101];
          let penaltymatchiconp = 1.0;
          let material8 = String.fromCharCode(122,95,51,95,101,105,112,0);
          let scorepopsoundF = false;
         icondefaultthumbnail2 += `${(material8.length * (scorepopsoundF ? 4 : 3))}`;
         penaltymatchiconp += parseFloat(`${parseInt(`${penaltymatchiconp}`)}`);
         material8 += `${parseInt(`${penaltymatchiconp}`)}`;
         icondefaultthumbnail2 = "1";
         icondefaultthumbnail2 = `${libimagepipelineN.length << (Math.min(Math.abs(1), 4))}`;
      while (1 <= (2 * icondefaultthumbnail2.length) || 1 <= (libimagepipelineN.length * 2)) {
         libimagepipelineN = [libimagepipelineN.length];
         break;
      }
      for (let v = 0; v < 2; v++) {
         libimagepipelineN.push(libimagepipelineN.length);
      }
          let subbasketballplayer8 = 1.0;
          let eactC: Map<any, any> = new Map([[String.fromCharCode(99,116,105,109,101,95,100,95,54,51,0),81], [String.fromCharCode(102,95,52,56,95,98,101,110,99,104,0),7]]);
         icondefaultthumbnail2 = `${eactC.size * parseInt(`${subbasketballplayer8}`)}`;
      mbnatives *= parseInt(`${umengS}`) - libimagepipelineN.length;
       let sportsW = String.fromCharCode(97,118,99,99,95,50,95,52,49,0);
         sportsW += `${sportsW.length}`;
         sportsW += `${sportsW.length + sportsW.length}`;
      for (let m = 0; m < 1; m++) {
         sportsW += `${(String.fromCharCode(71,0) == sportsW ? sportsW.length : sportsW.length)}`;
      }
      icontransferclub6 = "2";
      mbnatives -= 1 << (Math.min(4, libtobB.length));
   let signinupw = bangS >= 5151644.0;
   do {
      bangS /= Math.max(parseInt(`${umengS}`), 1);
      if (signinupw) {
         break;
      }
   } while (signinupw && ((iconlogoutU.length | 3) == 1));
    sliderTimeout.current = setTimeout(() => {

   let dicelogob = playlistF.length <= 5601033;
   do {
       let o_imagez: Array<any> = [595, 915];
       let crossZ = 4.0;
          let thumbnailr = String.fromCharCode(110,117,108,108,115,95,110,95,49,51,0);
          let homeloadingn = String.fromCharCode(115,95,56,49,95,97,112,110,115,0);
         o_imagez = [parseInt(`${crossZ}`)];
         thumbnailr += `${(homeloadingn == String.fromCharCode(51,0) ? homeloadingn.length : thumbnailr.length)}`;
      while (5 >= (4 + o_imagez.length)) {
         o_imagez.push(parseInt(`${crossZ}`) ^ o_imagez.length);
         break;
      }
         o_imagez = [3];
         crossZ /= Math.max(parseFloat(`${o_imagez.length * 2}`), 2);
          let weibod: Array<any> = [306, 316, 894];
         o_imagez = [o_imagez.length];
         weibod.push(weibod.length);
         crossZ -= parseFloat(`${2}`);
      playlistF.push(o_imagez.length * parseInt(`${umengS}`));
      if (dicelogob) {
         break;
      }
   } while ((2 > (1 - playlistF.length) && (1 - playlistF.length) > 4) && dicelogob);
      iconlogoutU = "2";
      bridgeV = libtobB.includes(ccdfbdabcabbbedbI[0]);
      popupV.set(`${downloadingK.size}`, popupV.size * downloadingK.size);
   if ((typingK + 4.61) < 4.72) {
       let notificationu = String.fromCharCode(114,95,50,48,95,116,101,108,101,112,104,111,116,111,0);
          let imagenetworkerr3: Map<any, any> = new Map([[String.fromCharCode(117,110,109,97,115,107,95,106,95,49,51,0),false ], [String.fromCharCode(120,95,51,95,100,101,99,111,114,114,101,108,97,116,105,111,110,0),true ], [String.fromCharCode(99,102,116,109,100,108,95,99,95,53,55,0),true ]]);
          let shootnogoale: Array<any> = [35, 727];
          let gradlea: Map<any, any> = new Map([[String.fromCharCode(109,97,107,101,114,112,109,95,119,95,52,56,0),182], [String.fromCharCode(118,95,50,56,95,119,114,105,116,101,0),477], [String.fromCharCode(106,95,57,53,95,115,101,114,105,97,108,0),741]]);
         notificationu += `${3 / (Math.max(6, shootnogoale.length))}`;
         imagenetworkerr3 = new Map([[`${imagenetworkerr3.size}`, imagenetworkerr3.size % 2]]);
         shootnogoale = [2];
         gradlea.set(`${imagenetworkerr3.size}`, imagenetworkerr3.size ^ gradlea.size);
      if (notificationu.length < notificationu.length) {
         notificationu = `${2 >> (Math.min(2, notificationu.length))}`;
      }
         notificationu = "2";
      typingK += parseFloat(`${parseInt(`${umengS}`) % 3}`);
   }
       let iconarrowrightorangeK: Map<any, any> = new Map([[String.fromCharCode(112,95,53,95,109,101,100,105,117,109,0),false ], [String.fromCharCode(105,95,52,55,95,103,101,116,99,117,116,0),true ]]);
       let stringh = String.fromCharCode(107,95,55,51,95,115,112,97,116,105,97,108,0);
       let iconarrowrightwhiteo: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,118,101,114,101,100,95,53,95,55,50,0),435], [String.fromCharCode(100,99,98,122,108,95,51,95,56,53,0),957]]);
       let telegramC = String.fromCharCode(109,117,108,120,95,101,95,52,53,0);
      let rulesJ = stringh.length <= 9838375;
      do {
         stringh += `${(telegramC == String.fromCharCode(90,0) ? iconarrowrightorangeK.size : telegramC.length)}`;
         if (rulesJ) {
            break;
         }
      } while (rulesJ && (4 == iconarrowrightorangeK.size));
      let iconsaveimageG = iconarrowrightwhiteo.size >= 5441999;
      do {
          let backS = 1;
          let homeactive1: Map<any, any> = new Map([[String.fromCharCode(113,95,55,50,95,116,114,97,110,115,109,105,116,0),345], [String.fromCharCode(122,95,55,51,95,98,111,114,100,101,114,101,100,0),537], [String.fromCharCode(114,101,99,111,110,110,101,99,116,105,111,110,95,108,95,52,49,0),93]]);
          let homeicon9 = String.fromCharCode(116,95,56,52,95,116,101,120,116,117,114,101,100,115,112,0);
         iconarrowrightwhiteo = new Map([[`${homeactive1.size}`, iconarrowrightwhiteo.size]]);
         backS %= Math.max(4, backS ^ homeicon9.length);
         homeactive1.set(`${backS}`, backS);
         homeicon9 = "2";
         if (iconsaveimageG) {
            break;
         }
      } while ((3 >= (iconarrowrightwhiteo.size + stringh.length) || (stringh.length + iconarrowrightwhiteo.size) >= 3) && iconsaveimageG);
      let iconcloseJ = iconarrowrightwhiteo.size <= 5312468;
      do {
         iconarrowrightwhiteo.set(stringh, 2 | stringh.length);
         if (iconcloseJ) {
            break;
         }
      } while ((1 < (iconarrowrightwhiteo.size % (Math.max(telegramC.length, 10)))) && iconcloseJ);
       let rootp = 5.0;
      let mbsplashM = telegramC == String.fromCharCode(104,107,55,109,56,101,109,103,112,113,0);
      do {
         telegramC += `${telegramC.length << (Math.min(Math.abs(3), 2))}`;
         if (mbsplashM) {
            break;
         }
      } while (mbsplashM && (stringh == String.fromCharCode(116,0)));
         iconarrowrightorangeK.set(`${rootp}`, 1 / (Math.max(1, iconarrowrightwhiteo.size)));
         iconarrowrightorangeK.set(stringh, stringh.length >> (Math.min(4, Math.abs(iconarrowrightorangeK.size))));
          let gpayq = 5.0;
          let qaagg = String.fromCharCode(117,110,114,101,102,95,121,95,55,53,0);
          let nodeX = 4;
         iconarrowrightwhiteo = new Map([[telegramC, qaagg.length % (Math.max(3, 9))]]);
         gpayq /= Math.max(4, parseFloat(`${3 ^ nodeX}`));
         qaagg += `${nodeX}`;
      iconlogoutU += `${iconarrowrightorangeK.size ^ 2}`;
   while (!Array.from(popupV.keys()).includes(`${libfollyx.size}`)) {
       let iconcurrentmatchf = String.fromCharCode(104,112,101,108,95,49,95,53,53,0);
       let matchinactivep = 5.0;
       let vipsportK = 0.0;
      let orangeuparroww = iconcurrentmatchf == String.fromCharCode(117,111,95,56,0);
      do {
         iconcurrentmatchf += `${parseInt(`${matchinactivep}`)}`;
         if (orangeuparroww) {
            break;
         }
      } while ((3.56 <= (5.69 + matchinactivep) && 1 <= (2 << (Math.min(2, iconcurrentmatchf.length)))) && orangeuparroww);
      let resenda = 6648149 >= iconcurrentmatchf.length;
      do {
         iconcurrentmatchf = "2";
         if (resenda) {
            break;
         }
      } while ((!iconcurrentmatchf.includes(`${vipsportK}`)) && resenda);
         iconcurrentmatchf += `${parseInt(`${vipsportK}`) % (Math.max(iconcurrentmatchf.length, 1))}`;
         iconcurrentmatchf += `${parseInt(`${matchinactivep}`) % 1}`;
          let verticalf = 3;
          let librrc8 = String.fromCharCode(118,101,114,115,105,111,110,101,100,95,122,95,52,57,0);
          let rewindA: Map<any, any> = new Map([[String.fromCharCode(115,101,116,102,105,101,108,100,95,119,95,54,54,0),true ], [String.fromCharCode(103,95,49,56,95,103,97,105,110,99,0),true ]]);
         vipsportK += parseFloat(`${verticalf * 3}`);
         verticalf >>= Math.min(Math.abs(librrc8.length << (Math.min(Math.abs(1), 2))), 4);
         librrc8 += `${rewindA.size}`;
         rewindA.set(librrc8, 3);
         iconcurrentmatchf += `${2 * iconcurrentmatchf.length}`;
         iconcurrentmatchf = `${(String.fromCharCode(48,0) == iconcurrentmatchf ? parseInt(`${vipsportK}`) : iconcurrentmatchf.length)}`;
      let o_imagew = String.fromCharCode(101,113,48,110,0) == iconcurrentmatchf;
      do {
          let invitey = String.fromCharCode(116,95,51,48,95,108,97,109,101,0);
          let orangedownarrowY: Array<any> = [372, 803];
          let ping3 = String.fromCharCode(118,105,115,97,95,109,95,54,50,0);
          let rewardvideo2 = String.fromCharCode(118,95,53,48,95,101,110,100,105,97,110,110,101,115,115,0);
          let storew = 2.0;
         iconcurrentmatchf += "3";
         invitey += `${ping3.length}`;
         orangedownarrowY = [2 << (Math.min(Math.abs(parseInt(`${storew}`)), 4))];
         ping3 += `${(String.fromCharCode(82,0) == rewardvideo2 ? parseInt(`${storew}`) : rewardvideo2.length)}`;
         if (o_imagew) {
            break;
         }
      } while ((4 < iconcurrentmatchf.length) && o_imagew);
         matchinactivep *= 3 | parseInt(`${vipsportK}`);
      popupV.set(`${bridgeV}`, parseInt(`${typingK}`) + 3);
      break;
   }
      setShowSlider(false);
    }, 1500);
  };

  const setBrightVolumeShare = async () => {
       let faviconT = String.fromCharCode(109,97,107,101,114,112,109,95,114,95,51,54,0);
    let graphR = 5;
    let readn: Map<any, any> = new Map([[String.fromCharCode(99,95,51,57,95,115,101,108,101,99,116,111,112,0),657], [String.fromCharCode(117,95,56,54,95,116,114,117,110,99,97,116,105,111,110,0),931]]);
    let internetf = 2.0;
    let loginsuccessQ = 5;
    let membert = String.fromCharCode(102,95,57,53,95,105,110,105,116,0);
    let defaultteamt = 4;
    let shrunkC = String.fromCharCode(105,115,100,105,97,99,114,105,116,105,99,95,48,95,51,56,0);
    let editj = String.fromCharCode(104,95,52,57,95,98,117,108,108,101,116,115,0);
    let inactiven: Array<any> = [String.fromCharCode(104,97,110,100,108,101,115,95,97,95,52,56,0), String.fromCharCode(108,95,53,49,95,115,101,116,99,116,120,0)];
    let greenU = String.fromCharCode(108,95,55,50,95,116,121,112,101,100,0);
    let yellowanimationliveO: Map<any, any> = new Map([[String.fromCharCode(109,101,115,111,110,95,105,95,51,57,0),String.fromCharCode(106,95,52,55,95,112,104,114,97,115,101,115,0)], [String.fromCharCode(109,95,51,51,95,99,108,105,112,112,101,100,0),String.fromCharCode(111,117,116,108,105,110,101,95,118,95,49,55,0)]]);
    let iconwechats: Array<any> = [29, 157];
      readn = new Map([[`${loginsuccessQ}`, (String.fromCharCode(84,0) == editj ? loginsuccessQ : editj.length)]]);
   if ((editj.length * defaultteamt) == 2) {
      editj += `${membert.length}`;
   }
       let homeplayerU = String.fromCharCode(101,95,53,51,95,116,101,109,112,111,114,97,114,105,108,121,0);
       let clockb = 2.0;
         homeplayerU = `${1 ^ homeplayerU.length}`;
          let backwhiteK = false;
          let z_titleq: Array<any> = [411, 778];
         clockb -= (parseInt(`${clockb}`) & (backwhiteK ? 5 : 4));
         backwhiteK = z_titleq.length >= z_titleq.length;
         clockb *= parseInt(`${clockb}`);
         clockb /= Math.max(1, (homeplayerU == String.fromCharCode(85,0) ? homeplayerU.length : parseInt(`${clockb}`)));
          let executorF = String.fromCharCode(98,95,54,52,95,99,117,114,115,111,114,0);
          let thumbnailP = 3.0;
          let defaultroombge: Array<any> = [106, 232, 931];
         clockb += 2;
         executorF = `${executorF.length | parseInt(`${thumbnailP}`)}`;
         thumbnailP /= Math.max(3, 5);
         defaultroombge = [(String.fromCharCode(70,0) == executorF ? executorF.length : parseInt(`${thumbnailP}`))];
      let collectionU = 8039317.0 <= clockb;
      do {
         clockb /= Math.max(homeplayerU.length % (Math.max(3, 1)), 1);
         if (collectionU) {
            break;
         }
      } while ((clockb >= homeplayerU.length) && collectionU);
      graphR -= 3;
      graphR *= (String.fromCharCode(68,0) == membert ? loginsuccessQ : membert.length);
   let whitetick8 = defaultteamt <= 5603225;
   do {
      defaultteamt /= Math.max(1, graphR << (Math.min(Math.abs(2), 1)));
      if (whitetick8) {
         break;
      }
   } while (((3 & defaultteamt) <= 4) && whitetick8);
   for (let d = 0; d < 3; d++) {
       let awayplayero = 1.0;
       let e_player0 = 2;
       let statisticsinactiveb = String.fromCharCode(114,101,118,97,108,105,100,97,116,105,111,110,95,102,95,52,52,0);
       let templateprocessorj = String.fromCharCode(103,95,52,53,95,104,105,103,104,108,105,103,116,101,100,0);
       let libtobI = String.fromCharCode(111,95,49,55,95,109,109,105,117,116,105,108,115,0);
         libtobI += `${parseInt(`${awayplayero}`)}`;
         e_player0 /= Math.max(1, 1 * templateprocessorj.length);
      while (e_player0 < 2) {
          let analyticd: Map<any, any> = new Map([[String.fromCharCode(113,95,56,54,95,115,101,97,114,99,104,98,97,114,0),278], [String.fromCharCode(117,108,97,119,95,56,95,51,0),254]]);
          let giftbutton4 = 0.0;
         awayplayero += parseFloat(`${libtobI.length}`);
         analyticd.set(`${giftbutton4}`, parseInt(`${giftbutton4}`) | analyticd.size);
         break;
      }
      while (awayplayero >= parseFloat(`${libtobI.length}`)) {
         awayplayero -= parseFloat(`${3 + e_player0}`);
         break;
      }
      if ((e_player0 & templateprocessorj.length) == 1 || 1 == (e_player0 & templateprocessorj.length)) {
         templateprocessorj = `${parseInt(`${awayplayero}`) - 3}`;
      }
          let rulesx = 3;
          let championF: Map<any, any> = new Map([[String.fromCharCode(112,105,110,95,50,95,56,52,0),String.fromCharCode(100,101,97,108,108,111,99,97,116,105,111,110,95,102,95,55,0)], [String.fromCharCode(100,95,51,50,95,116,114,97,110,115,97,99,116,105,111,110,115,0),String.fromCharCode(108,95,51,57,95,115,101,113,117,101,110,99,101,114,0)]]);
         statisticsinactiveb += `${templateprocessorj.length}`;
         rulesx += rulesx + 3;
         championF.set(`${rulesx}`, 1);
         awayplayero -= parseFloat(`${parseInt(`${awayplayero}`) >> (Math.min(Math.abs(1), 4))}`);
         libtobI = `${templateprocessorj.length}`;
         libtobI = `${statisticsinactiveb.length - templateprocessorj.length}`;
      let fullX = String.fromCharCode(50,115,114,0) == libtobI;
      do {
         libtobI = `${(templateprocessorj == String.fromCharCode(122,0) ? parseInt(`${awayplayero}`) : templateprocessorj.length)}`;
         if (fullX) {
            break;
         }
      } while ((templateprocessorj == String.fromCharCode(82,0)) && fullX);
      for (let m = 0; m < 2; m++) {
          let navigationi = 0.0;
          let backwardO = 3.0;
          let recommendationR = 5.0;
          let sheetu = String.fromCharCode(99,97,110,118,97,115,95,119,95,56,52,0);
         e_player0 -= libtobI.length % (Math.max(3, 1));
         navigationi += parseFloat(`${parseInt(`${navigationi}`) % (Math.max(2, parseInt(`${backwardO}`)))}`);
         backwardO += (String.fromCharCode(113,0) == sheetu ? parseInt(`${navigationi}`) : sheetu.length);
         recommendationR *= parseInt(`${recommendationR}`) - parseInt(`${backwardO}`);
      }
      for (let d = 0; d < 1; d++) {
         libtobI = `${templateprocessorj.length * libtobI.length}`;
      }
         templateprocessorj = `${(String.fromCharCode(55,0) == templateprocessorj ? parseInt(`${awayplayero}`) : templateprocessorj.length)}`;
      for (let e = 0; e < 1; e++) {
          let malaysiar = 0.0;
          let termsU = 3;
          let tickD = String.fromCharCode(115,101,116,99,98,95,120,95,49,51,0);
          let submitG = String.fromCharCode(122,95,49,53,95,114,101,97,100,98,105,116,115,0);
          let gray2 = String.fromCharCode(110,97,118,105,103,97,116,105,111,110,98,97,114,95,106,95,51,54,0);
         awayplayero -= parseFloat(`${parseInt(`${malaysiar}`)}`);
         malaysiar += parseFloat(`${gray2.length * submitG.length}`);
         termsU -= 3;
         tickD = `${tickD.length << (Math.min(gray2.length, 4))}`;
         submitG = `${submitG.length * tickD.length}`;
      }
      if (templateprocessorj.length <= 2 && libtobI != String.fromCharCode(51,0)) {
         templateprocessorj = `${statisticsinactiveb.length >> (Math.min(Math.abs(2), 2))}`;
      }
      membert += `${inactiven.length}`;
   }
   if (Array.from(readn.values()).includes(defaultteamt)) {
      defaultteamt >>= Math.min(Math.abs(membert.length & 3), 5);
   }
   while (4 >= (readn.size / (Math.max(4, graphR))) && (4 / (Math.max(9, graphR))) >= 4) {
      readn = new Map([[`${inactiven.length}`, inactiven.length]]);
      break;
   }
   if (defaultteamt < 3) {
      faviconT += `${membert.length}`;
   }
      defaultteamt /= Math.max(1, 1);
   while ((defaultteamt + faviconT.length) >= 3 && (faviconT.length + 3) >= 1) {
      defaultteamt <<= Math.min(Math.abs(parseInt(`${internetf}`) ^ defaultteamt), 4);
      break;
   }
   if ((editj.length & 1) == 4) {
       let episodes6 = 1;
       let circlej: Map<any, any> = new Map([[String.fromCharCode(109,95,57,55,95,112,109,107,0),33], [String.fromCharCode(104,95,51,57,95,105,111,101,114,114,0),497], [String.fromCharCode(109,117,108,116,105,95,119,95,51,51,0),227]]);
       let iconclosewhitewithbg9 = String.fromCharCode(108,101,100,103,101,114,95,122,95,55,48,0);
       let awayteamfieldX = String.fromCharCode(104,95,56,56,95,107,97,110,110,97,0);
       let rncorem = 4.0;
      while (Array.from(circlej.keys()).includes(`${episodes6}`)) {
         circlej = new Map([[awayteamfieldX, (String.fromCharCode(69,0) == iconclosewhitewithbg9 ? iconclosewhitewithbg9.length : awayteamfieldX.length)]]);
         break;
      }
      for (let j = 0; j < 1; j++) {
         iconclosewhitewithbg9 = `${awayteamfieldX.length}`;
      }
         episodes6 /= Math.max(episodes6 - iconclosewhitewithbg9.length, 4);
      if (awayteamfieldX.length < circlej.size) {
          let store6 = true;
          let logouserF = String.fromCharCode(113,95,57,48,95,114,101,109,111,118,97,108,0);
          let imagenomoredatax: Array<any> = [828, 179, 914];
          let sideB = String.fromCharCode(109,101,109,111,114,121,115,116,114,101,97,109,95,121,95,50,48,0);
          let fileM = 0;
         awayteamfieldX = `${(awayteamfieldX == String.fromCharCode(121,0) ? awayteamfieldX.length : iconclosewhitewithbg9.length)}`;
         store6 = fileM > sideB.length;
         logouserF += `${((store6 ? 1 : 5) ^ 2)}`;
         imagenomoredatax.push((String.fromCharCode(108,0) == logouserF ? logouserF.length : (store6 ? 1 : 4)));
         sideB = `${imagenomoredatax.length + 2}`;
         fileM <<= Math.min(3, Math.abs(1 >> (Math.min(1, logouserF.length))));
      }
         iconclosewhitewithbg9 += "1";
          let inactiveU = String.fromCharCode(100,101,114,105,118,101,100,95,113,95,49,52,0);
          let fieldn = false;
          let turndown1 = 3.0;
         circlej.set(`${fieldn}`, 2);
         inactiveU += `${inactiveU.length - parseInt(`${turndown1}`)}`;
         turndown1 *= parseFloat(`${inactiveU.length}`);
         circlej.set(`${episodes6}`, 3);
          let libreanimatedH = String.fromCharCode(114,101,109,105,110,100,101,114,95,119,95,54,50,0);
         episodes6 %= Math.max(1, 5);
         libreanimatedH = `${libreanimatedH.length << (Math.min(3, libreanimatedH.length))}`;
       let renewb = String.fromCharCode(111,95,53,54,95,114,105,103,104,116,115,0);
       let castingT = String.fromCharCode(114,95,54,51,95,117,110,99,104,97,110,103,101,100,0);
      for (let b = 0; b < 3; b++) {
         rncorem *= episodes6 / (Math.max(10, castingT.length));
      }
      if (episodes6 > renewb.length) {
         episodes6 += episodes6;
      }
          let package_1J: Array<any> = [String.fromCharCode(114,101,116,117,114,110,101,100,95,114,95,53,56,0), String.fromCharCode(112,95,52,53,95,114,101,112,111,115,105,116,105,111,110,0)];
          let greyarrowupI: Array<any> = [32, 761, 39];
         iconclosewhitewithbg9 = `${episodes6}`;
         package_1J.push(1);
         greyarrowupI.push(package_1J.length);
         episodes6 -= (String.fromCharCode(114,0) == renewb ? renewb.length : parseInt(`${rncorem}`));
      while (renewb.length <= parseInt(`${rncorem}`)) {
         rncorem /= Math.max(5, 1);
         break;
      }
      for (let j = 0; j < 1; j++) {
          let guidee = true;
          let imagenetworkerr3 = String.fromCharCode(97,108,116,101,114,97,98,108,101,95,48,95,50,49,0);
          let fieldc = 5;
         circlej.set(awayteamfieldX, iconclosewhitewithbg9.length ^ awayteamfieldX.length);
         guidee = guidee || imagenetworkerr3.length > 22;
         imagenetworkerr3 += `${imagenetworkerr3.length % 1}`;
         fieldc /= Math.max(5, ((guidee ? 5 : 3) - 3));
      }
      editj += `${episodes6 ^ inactiven.length}`;
   }
   for (let l = 0; l < 1; l++) {
      membert += `${inactiven.length}`;
   }
   while (inactiven.length < 1) {
      inactiven.push(parseInt(`${internetf}`));
      break;
   }
      graphR ^= editj.length >> (Math.min(1, Math.abs(graphR)));

    brightShare.value = await SystemSetting.getAppBrightness();

      internetf -= (parseFloat(`${String.fromCharCode(67,0) == membert ? membert.length : parseInt(`${internetf}`)}`));
   for (let n = 0; n < 2; n++) {
       let templateprocessor4 = true;
       let dataO = String.fromCharCode(115,101,103,109,101,110,116,95,56,95,55,52,0);
       let nativeP = 4;
       let libfbL = 3;
       let componentregistryJ = true;
       let history4: Map<any, any> = new Map([[String.fromCharCode(99,95,57,49,95,101,120,105,115,116,105,110,103,0),String.fromCharCode(116,114,97,110,115,105,116,105,111,110,105,110,103,95,105,95,53,51,0)], [String.fromCharCode(97,95,52,51,95,99,109,112,97,100,100,114,0),String.fromCharCode(99,111,109,98,105,110,101,95,98,95,53,49,0)]]);
          let detailsz = String.fromCharCode(121,95,55,57,95,107,101,121,98,111,97,114,100,0);
          let placementT = 1.0;
         libfbL <<= Math.min(3, Math.abs(libfbL - detailsz.length));
         detailsz = "2";
         placementT -= parseInt(`${placementT}`);
         history4.set(`${templateprocessor4}`, libfbL);
      if ((nativeP << (Math.min(Math.abs(3), 4))) == 4) {
         nativeP /= Math.max(5, history4.size);
      }
      if ((history4.size & dataO.length) < 5 || 1 < (history4.size & 5)) {
         history4.set(`${dataO}`, 3 >> (Math.min(3, Math.abs(history4.size))));
      }
      while ((dataO.length >> (Math.min(1, Math.abs(nativeP)))) < 5) {
         nativeP %= Math.max(libfbL, 2);
         break;
      }
      for (let t = 0; t < 1; t++) {
         componentregistryJ = componentregistryJ && history4.size == 61;
      }
      for (let f = 0; f < 2; f++) {
          let wifirouter0 = String.fromCharCode(109,105,120,101,100,95,54,95,56,56,0);
          let sportp: Map<any, any> = new Map([[String.fromCharCode(115,119,102,112,108,97,121,101,114,95,54,95,50,57,0),false ], [String.fromCharCode(105,110,118,111,107,101,95,116,95,54,49,0),true ], [String.fromCharCode(114,101,112,111,115,105,116,105,111,110,95,54,95,55,49,0),true ]]);
          let orangeclockE = 4.0;
          let awayG = String.fromCharCode(100,95,51,50,95,110,97,109,101,100,0);
         nativeP >>= Math.min(Math.abs(((componentregistryJ ? 3 : 1) * 3)), 4);
         wifirouter0 += `${parseInt(`${orangeclockE}`) ^ 1}`;
         sportp.set(wifirouter0, 2 % (Math.max(3, wifirouter0.length)));
         orangeclockE += parseInt(`${orangeclockE}`);
         awayG = `${parseInt(`${orangeclockE}`) / (Math.max(10, wifirouter0.length))}`;
      }
          let defaultfootballbg5: Map<any, any> = new Map([[String.fromCharCode(98,97,110,110,101,114,95,118,95,49,52,0),631], [String.fromCharCode(109,95,53,52,95,99,97,110,110,111,116,0),971]]);
          let ballJ = 0.0;
         componentregistryJ = 20.12 > ballJ;
         defaultfootballbg5.set(`${defaultfootballbg5.size}`, defaultfootballbg5.size);
         ballJ += defaultfootballbg5.size;
       let sansb = 2.0;
      while (5 > dataO.length && !componentregistryJ) {
         componentregistryJ = dataO.length > parseInt(`${sansb}`);
         break;
      }
      while (5 < dataO.length) {
         dataO += `${(dataO == String.fromCharCode(83,0) ? history4.size : dataO.length)}`;
         break;
      }
       let largeA = String.fromCharCode(121,95,55,56,95,114,101,109,105,120,0);
      while (componentregistryJ || 4 == (history4.size ^ 2)) {
          let helperB: Map<any, any> = new Map([[String.fromCharCode(119,95,54,51,95,102,105,110,101,0),false ], [String.fromCharCode(99,95,50,51,95,116,119,111,102,105,115,104,0),true ]]);
          let baiduads_ = String.fromCharCode(100,105,115,116,97,110,99,101,95,114,95,57,48,0);
          let tempnodatagifN: Array<any> = [206, 380];
          let datav = String.fromCharCode(112,97,103,101,115,101,101,107,95,99,95,50,0);
         history4.set(`${libfbL}`, 1 ^ largeA.length);
         helperB = new Map([[`${helperB.size}`, baiduads_.length]]);
         baiduads_ = `${(String.fromCharCode(106,0) == datav ? datav.length : tempnodatagifN.length)}`;
         tempnodatagifN.push(baiduads_.length & datav.length);
         break;
      }
       let minimizex = 1.0;
      graphR ^= 2;
   }
      readn = new Map([[`${inactiven.length}`, faviconT.length & inactiven.length]]);
      readn.set(`${graphR}`, 3);
       let changeo = 0.0;
       let window_s_ = String.fromCharCode(109,95,51,51,95,114,101,112,108,97,121,101,114,0);
         changeo *= parseFloat(`${parseInt(`${changeo}`)}`);
      if (5.67 > (changeo - 5.41) && 3 > (window_s_.length + 2)) {
         changeo /= Math.max((parseFloat(`${String.fromCharCode(115,0) == window_s_ ? parseInt(`${changeo}`) : window_s_.length}`)), 3);
      }
      while ((window_s_.length ^ 3) > 1 && 5 > (3 | window_s_.length)) {
         window_s_ += "1";
         break;
      }
      for (let y = 0; y < 2; y++) {
          let defaultlogoI: Map<any, any> = new Map([[String.fromCharCode(99,95,49,57,95,99,111,110,118,101,120,0),true ], [String.fromCharCode(98,105,116,114,97,116,101,95,52,95,51,0),true ], [String.fromCharCode(109,115,101,120,95,116,95,49,49,0),true ]]);
         window_s_ += `${parseInt(`${changeo}`)}`;
         defaultlogoI = new Map([[`${defaultlogoI.size}`, 3 & defaultlogoI.size]]);
      }
      for (let s = 0; s < 1; s++) {
         window_s_ += `${parseInt(`${changeo}`) * window_s_.length}`;
      }
      let eventA = window_s_.length <= 6072110;
      do {
          let vignettef = String.fromCharCode(108,97,110,100,109,105,110,101,115,95,104,95,56,55,0);
          let handlerR = 3;
          let mailE = 2.0;
          let stationsd = 5;
          let teamdetailsbg_ = false;
         window_s_ += `${((teamdetailsbg_ ? 3 : 5) + handlerR)}`;
         vignettef += "2";
         handlerR |= parseInt(`${mailE}`) - stationsd;
         mailE *= parseFloat(`${3}`);
         stationsd /= Math.max(3, 3);
         teamdetailsbg_ = (parseFloat(`${vignettef.length}`) / (Math.max(5, mailE))) == 68.89;
         if (eventA) {
            break;
         }
      } while ((window_s_.includes(`${changeo}`)) && eventA);
      readn = new Map([[`${readn.size}`, shrunkC.length | readn.size]]);
   while (!faviconT.startsWith(`${graphR}`)) {
       let greyticke = true;
       let leftL = 0.0;
         leftL -= parseFloat(`${parseInt(`${leftL}`) | 2}`);
      if (5.38 < leftL) {
          let descw = 0;
          let stringH = String.fromCharCode(112,95,54,51,95,98,110,98,105,110,0);
          let sansu: Array<any> = [586, 251, 284];
         greyticke = sansu.length > 3;
         descw ^= stringH.length;
         stringH = `${(String.fromCharCode(106,0) == stringH ? descw : stringH.length)}`;
         sansu = [(String.fromCharCode(88,0) == stringH ? descw : stringH.length)];
      }
      for (let q = 0; q < 2; q++) {
         leftL += parseFloat(`${3 / (Math.max(parseInt(`${leftL}`), 10))}`);
      }
         leftL -= parseFloat(`${parseInt(`${leftL}`) % 1}`);
       let matchdetailbgF = 3;
       let filteru = 4;
      if (4 < (1 - filteru)) {
          let dataw = String.fromCharCode(122,95,51,49,95,103,101,116,109,97,120,114,115,115,0);
          let libfollyT = true;
          let libjsinspectorv = String.fromCharCode(112,95,50,55,95,115,107,105,112,0);
          let hovern = String.fromCharCode(115,95,49,57,95,108,105,110,107,105,110,103,0);
         greyticke = dataw.length == 72;
         dataw = `${1 & libjsinspectorv.length}`;
         libfollyT = !libfollyT;
         libjsinspectorv = "1";
         hovern += `${((libfollyT ? 4 : 3))}`;
      }
      faviconT = "1";
      break;
   }
      loginsuccessQ >>= Math.min(3, Math.abs(membert.length & loginsuccessQ));
   let codev = loginsuccessQ <= 5487586;
   do {
      loginsuccessQ >>= Math.min(Math.abs(editj.length / (Math.max(shrunkC.length, 9))), 5);
      if (codev) {
         break;
      }
   } while (codev && (5 >= (loginsuccessQ | 1) && (1 | shrunkC.length) >= 5));
   while (5 == (defaultteamt << (Math.min(Math.abs(2), 4))) || (2 << (Math.min(1, membert.length))) == 2) {
       let penaltygoalt = String.fromCharCode(102,95,53,48,95,112,97,116,116,101,114,110,0);
       let profileframes = false;
         penaltygoalt = `${1 >> (Math.min(3, penaltygoalt.length))}`;
         profileframes = penaltygoalt.length < 38 || profileframes;
         penaltygoalt = `${penaltygoalt.length}`;
       let predictionbannershared_ = 4;
       let bootsplashN = String.fromCharCode(122,95,57,50,95,97,110,111,116,104,101,114,0);
       let transfern = String.fromCharCode(121,95,55,53,95,97,108,105,97,115,0);
       let backL = String.fromCharCode(112,97,117,115,101,95,101,95,52,55,0);
      defaultteamt |= (String.fromCharCode(73,0) == shrunkC ? shrunkC.length : greenU.length);
      break;
   }
   if (4 == (1 ^ loginsuccessQ)) {
      defaultteamt %= Math.max(2, faviconT.length / 2);
   }
       let membershipe = false;
      let iconcurrentmatchg = membershipe ? !membershipe : membershipe;
      do {
         membershipe = !membershipe;
         if (iconcurrentmatchg) {
            break;
         }
      } while (iconcurrentmatchg && (membershipe || membershipe));
          let basketballu = true;
          let linkk = String.fromCharCode(115,95,55,56,95,112,97,99,107,101,116,111,117,116,0);
         membershipe = basketballu;
         linkk = `${linkk.length / (Math.max(1, 8))}`;
         membershipe = (membershipe ? !membershipe : !membershipe);
      inactiven = [membert.length];
   while (Array.from(readn.keys()).includes(`${internetf}`)) {
      internetf /= Math.max(3, (parseFloat(`${faviconT == String.fromCharCode(74,0) ? faviconT.length : inactiven.length}`)));
      break;
   }
   let dicet = greenU.length <= 6969698;
   do {
      greenU = `${editj.length - 2}`;
      if (dicet) {
         break;
      }
   } while (((readn.size * greenU.length) > 3 && (3 * readn.size) > 4) && dicet);
       let feedback8 = false;
       let mbbannerJ = String.fromCharCode(101,118,105,99,101,95,49,95,51,54,0);
      if (!mbbannerJ.startsWith(`${feedback8}`)) {
         mbbannerJ += `${(mbbannerJ.length ^ (feedback8 ? 4 : 4))}`;
      }
       let unimplementedviewK: Map<any, any> = new Map([[String.fromCharCode(111,95,51,50,95,110,101,101,100,101,100,0),String.fromCharCode(112,114,101,95,120,95,54,50,0)], [String.fromCharCode(112,95,50,50,95,97,112,110,115,0),String.fromCharCode(97,95,57,57,0)], [String.fromCharCode(108,95,50,52,95,99,111,110,110,101,99,116,115,0),String.fromCharCode(104,95,56,57,95,97,109,111,117,110,116,115,0)]]);
      let ajaxW = mbbannerJ == String.fromCharCode(52,102,120,57,104,98,107,113,52,95,0);
      do {
         mbbannerJ += `${(unimplementedviewK.size ^ (feedback8 ? 5 : 1))}`;
         if (ajaxW) {
            break;
         }
      } while (ajaxW && (feedback8));
      let downarrowu = mbbannerJ.length >= 5264823;
      do {
          let stylesb = 3;
          let defaultlogot = 3.0;
          let latny = 2;
          let launchx = 1;
          let questiconp = 0.0;
         mbbannerJ = `${launchx * unimplementedviewK.size}`;
         stylesb >>= Math.min(Math.abs(3), 2);
         defaultlogot *= parseInt(`${defaultlogot}`) + latny;
         latny &= 2 % (Math.max(parseInt(`${defaultlogot}`), 2));
         launchx ^= 3 ^ latny;
         questiconp /= Math.max(2, 3 * parseInt(`${questiconp}`));
         if (downarrowu) {
            break;
         }
      } while (downarrowu && (!feedback8));
      let defaultbasketballbgk = feedback8 ? !feedback8 : feedback8;
      do {
         feedback8 = ((mbbannerJ.length << (Math.min(1, Math.abs((!feedback8 ? 24 : mbbannerJ.length))))) < 24);
         if (defaultbasketballbgk) {
            break;
         }
      } while (defaultbasketballbgk && (feedback8));
         unimplementedviewK = new Map([[mbbannerJ, (mbbannerJ.length - (feedback8 ? 1 : 3))]]);
      faviconT += `${readn.size}`;
      yellowanimationliveO = new Map([[`${inactiven.length}`, inactiven.length]]);
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
    setSettings({ name: "countdownIconplayActive", value: newVol });
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
       let orangeM = String.fromCharCode(102,112,109,98,95,108,95,55,48,0);
    let specK = true;
    let scheduleS = true;
    let iconviewergifi = 2;
    let klevinw = 3.0;
    let attributedstringZ = String.fromCharCode(108,95,49,57,95,117,110,98,105,97,115,0);
    let placeholdery = 4.0;
    let chatroombackgroundu = 3.0;
    let promotionn = true;
      attributedstringZ = `${1 * parseInt(`${klevinw}`)}`;
      placeholdery += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${placeholdery}`)), 5))}`);
      specK = attributedstringZ.length == 21;
   let shrinky = 7935920.0 <= placeholdery;
   do {
      placeholdery /= Math.max(3, (parseFloat(`${(specK ? 3 : 4) - iconviewergifi}`)));
      if (shrinky) {
         break;
      }
   } while ((5.93 >= placeholdery) && shrinky);
       let videovar7: Map<any, any> = new Map([[String.fromCharCode(111,95,55,54,95,114,101,102,105,100,0),305], [String.fromCharCode(99,109,115,103,95,116,95,50,55,0),636]]);
       let graphy: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,97,108,95,107,95,53,48,0),462], [String.fromCharCode(98,95,55,50,95,99,111,110,115,105,115,116,101,110,99,121,0),154], [String.fromCharCode(118,99,111,100,101,99,95,106,95,55,52,0),351]]);
         videovar7 = new Map([[`${videovar7.size}`, graphy.size + videovar7.size]]);
      for (let c = 0; c < 2; c++) {
         graphy = new Map([[`${graphy.size}`, graphy.size | 3]]);
      }
       let memberf: Map<any, any> = new Map([[String.fromCharCode(111,117,116,102,105,108,101,95,104,95,55,48,0),381], [String.fromCharCode(115,109,118,106,112,101,103,95,117,95,51,55,0),937]]);
       let defaultroombgc: Map<any, any> = new Map([[String.fromCharCode(108,95,51,55,95,115,108,111,116,115,0),false ], [String.fromCharCode(108,101,101,119,97,121,95,113,95,57,51,0),true ], [String.fromCharCode(104,95,57,50,0),false ]]);
         graphy = new Map([[`${graphy.size}`, memberf.size % 3]]);
         memberf = new Map([[`${graphy.size}`, graphy.size]]);
      for (let e = 0; e < 3; e++) {
          let heartH: Map<any, any> = new Map([[String.fromCharCode(105,109,112,111,114,116,95,57,95,50,0),317], [String.fromCharCode(118,100,114,97,119,97,98,108,101,95,102,95,50,0),883]]);
          let disconnectedlogoY = 3;
          let controlE = 4.0;
          let penaltyshootnogoal2 = String.fromCharCode(101,95,51,53,95,116,109,109,98,110,0);
         defaultroombgc = new Map([[`${disconnectedlogoY}`, (String.fromCharCode(48,0) == penaltyshootnogoal2 ? disconnectedlogoY : penaltyshootnogoal2.length)]]);
         heartH = new Map([[`${heartH.size}`, heartH.size ^ 3]]);
         controlE += parseFloat(`${heartH.size}`);
      }
      klevinw *= parseFloat(`${graphy.size}`);
      specK = parseFloat(`${iconviewergifi}`) > placeholdery;
      placeholdery -= (parseFloat(`${(specK ? 3 : 5) * parseInt(`${chatroombackgroundu}`)}`));
      specK = !scheduleS || chatroombackgroundu <= 67.27;
   for (let m = 0; m < 2; m++) {
      klevinw -= parseFloat(`${parseInt(`${placeholdery}`)}`);
   }
   while (4.12 < (placeholdery - 5.18) || (klevinw - 5.18) < 1.38) {
      klevinw /= Math.max((parseFloat(`${attributedstringZ == String.fromCharCode(74,0) ? parseInt(`${klevinw}`) : attributedstringZ.length}`)), 3);
      break;
   }
      placeholdery += (parseFloat(`${(specK ? 4 : 4) / (Math.max(parseInt(`${chatroombackgroundu}`), 1))}`));
   for (let g = 0; g < 3; g++) {
       let casting5 = true;
       let sentryi = 4;
      for (let x = 0; x < 3; x++) {
          let unimplementedviewa = String.fromCharCode(99,97,108,99,117,108,97,116,101,95,115,95,54,57,0);
          let stringH = String.fromCharCode(98,95,50,52,95,112,111,112,117,112,115,0);
          let libffmpegkitu: Map<any, any> = new Map([[String.fromCharCode(109,111,110,103,111,95,115,95,57,57,0),953], [String.fromCharCode(103,95,55,57,95,109,101,110,117,115,0),902], [String.fromCharCode(119,95,49,55,95,110,111,110,110,117,108,108,98,117,102,102,101,114,0),455]]);
          let libfbjnis = String.fromCharCode(114,101,97,100,108,105,110,101,95,49,95,49,0);
         sentryi -= 3 ^ libffmpegkitu.size;
         unimplementedviewa = `${stringH.length % 3}`;
         stringH += `${stringH.length >> (Math.min(Math.abs(2), 2))}`;
         libffmpegkitu = new Map([[unimplementedviewa, (stringH == String.fromCharCode(52,0) ? stringH.length : unimplementedviewa.length)]]);
         libfbjnis = `${unimplementedviewa.length}`;
      }
         sentryi ^= (sentryi ^ (casting5 ? 5 : 2));
         casting5 = !casting5;
         casting5 = 76 == sentryi;
       let mbjscommonN = true;
       let memberL = true;
          let statisticsinactiveR = String.fromCharCode(101,95,54,56,0);
          let componentsj = 5.0;
          let defaultprofilepic_: Map<any, any> = new Map([[String.fromCharCode(101,114,115,105,111,110,95,119,95,51,55,0),655], [String.fromCharCode(120,95,53,53,95,99,97,108,108,101,114,0),452], [String.fromCharCode(114,95,49,48,48,95,97,99,99,101,115,115,111,114,105,101,115,0),568]]);
         memberL = !mbjscommonN;
         statisticsinactiveR += `${statisticsinactiveR.length}`;
         componentsj += statisticsinactiveR.length + 3;
         defaultprofilepic_.set(`${componentsj}`, defaultprofilepic_.size / 2);
      chatroombackgroundu /= Math.max(2, 1);
   }
      chatroombackgroundu -= iconviewergifi | 3;
       let binddatasz: Array<any> = [637, 56, 24];
       let yellowanimationliveT = 5;
         binddatasz.push(3);
      let anythinkr = 9568344 <= yellowanimationliveT;
      do {
         yellowanimationliveT -= 1 & binddatasz.length;
         if (anythinkr) {
            break;
         }
      } while ((yellowanimationliveT < binddatasz.length) && anythinkr);
         yellowanimationliveT &= yellowanimationliveT + 2;
       let inouttargetyellowT = false;
       let redcirclebgc = true;
         inouttargetyellowT = binddatasz.length <= yellowanimationliveT;
       let termsD = String.fromCharCode(120,95,51,54,95,99,114,121,115,116,97,108,104,100,0);
       let sportG = String.fromCharCode(116,98,117,102,95,48,95,57,0);
      placeholdery *= (parseFloat(`${(specK ? 1 : 4) | 1}`));
      iconviewergifi |= ((scheduleS ? 5 : 1) / 2);
   let basketballmatchdetailbgy = chatroombackgroundu >= 5663364.0;
   do {
      chatroombackgroundu += 2;
      if (basketballmatchdetailbgy) {
         break;
      }
   } while ((5.86 <= chatroombackgroundu) && basketballmatchdetailbgy);

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
              (settings.name === "none" || settings.name === "countdownIconplayActive")
            ) {
              runOnJS(onVolumeChanged)(
                nativeEvent.y,
                previousPanPosition.value.y
              );
            }
          } else if (
            absDyDx < 0.05 &&
            vodType !== "newsshareMerger" &&
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
       let klevinp: Map<any, any> = new Map([[String.fromCharCode(115,117,109,109,97,114,105,101,115,95,117,95,52,55,0),false ], [String.fromCharCode(101,120,99,101,101,100,101,100,95,99,95,52,56,0),true ]]);
    let embedf = String.fromCharCode(101,120,116,114,97,99,116,105,111,110,95,113,95,56,48,0);
    let downloadedS = String.fromCharCode(108,111,103,103,101,100,95,112,95,49,56,0);
    let defaultteamk = String.fromCharCode(114,116,112,95,110,95,53,51,0);
    let giftbuttonD = String.fromCharCode(106,112,101,103,100,115,112,95,106,95,52,50,0);
    let overlayG = 3.0;
    let giflivestreaming1: Array<any> = [967, 78];
    let iconfeedbacks = String.fromCharCode(121,95,54,49,95,111,118,101,114,114,105,100,101,110,0);
    let mbnativeR = String.fromCharCode(105,110,115,116,97,108,108,95,104,95,56,49,0);
    let matchesB = 0;
    let dependencyc: Array<any> = [530, 104];
    let huaweih: Map<any, any> = new Map([[String.fromCharCode(112,95,54,51,95,118,105,115,105,98,108,101,0),true ], [String.fromCharCode(103,101,116,104,111,115,116,98,121,97,100,100,114,95,106,95,57,53,0),false ], [String.fromCharCode(100,95,49,49,95,102,97,105,108,0),false ]]);
    let iconchatsendw = String.fromCharCode(113,95,54,48,95,116,105,109,101,108,105,109,105,116,0);
    let applicationI: Map<any, any> = new Map([[String.fromCharCode(115,95,54,49,95,114,101,103,100,101,102,0),867], [String.fromCharCode(102,105,108,101,112,97,116,104,95,112,95,49,55,0),565]]);
   for (let f = 0; f < 1; f++) {
      defaultteamk = `${giftbuttonD.length * 2}`;
   }
   for (let s = 0; s < 3; s++) {
      klevinp.set(embedf, (String.fromCharCode(74,0) == embedf ? iconfeedbacks.length : embedf.length));
   }
   if (3 <= (defaultteamk.length << (Math.min(Math.abs(1), 2))) && (1 << (Math.min(2, dependencyc.length))) <= 2) {
      defaultteamk += `${defaultteamk.length << (Math.min(Math.abs(2), 1))}`;
   }
   if (!Array.from(klevinp.values()).includes(overlayG)) {
       let defaultplayerimgs = String.fromCharCode(99,104,105,114,112,95,117,95,51,50,0);
      let watchnowbgk = defaultplayerimgs.length >= 6429905;
      do {
         defaultplayerimgs += `${(defaultplayerimgs == String.fromCharCode(106,0) ? defaultplayerimgs.length : defaultplayerimgs.length)}`;
         if (watchnowbgk) {
            break;
         }
      } while (watchnowbgk && (!defaultplayerimgs.includes(defaultplayerimgs)));
       let mbnativeadvancedX = true;
      while (!defaultplayerimgs.startsWith(`${mbnativeadvancedX}`)) {
         mbnativeadvancedX = !mbnativeadvancedX;
         break;
      }
      overlayG *= parseFloat(`${3 ^ giftbuttonD.length}`);
   }
   while (downloadedS.length < 2) {
       let dropdown6: Array<any> = [959, 900];
       let o_countM = 3.0;
      for (let t = 0; t < 3; t++) {
          let historyE = String.fromCharCode(110,95,49,56,95,115,112,97,110,115,0);
          let singleu = String.fromCharCode(115,111,114,116,105,110,103,95,112,95,56,0);
         dropdown6 = [dropdown6.length];
         historyE = `${(singleu == String.fromCharCode(114,0) ? singleu.length : historyE.length)}`;
      }
       let libfile9 = 3;
          let typingloadingO = String.fromCharCode(115,98,112,114,111,95,106,95,52,55,0);
         dropdown6.push(libfile9);
         typingloadingO = `${typingloadingO.length}`;
      let lefta = 7999998 >= dropdown6.length;
      do {
         dropdown6 = [2];
         if (lefta) {
            break;
         }
      } while (lefta && ((dropdown6.length << (Math.min(Math.abs(5), 2))) >= 5 && (5 << (Math.min(3, dropdown6.length))) >= 1));
         o_countM *= libfile9;
       let bgvipsportn = String.fromCharCode(97,100,109,105,110,101,100,95,97,95,57,51,0);
      downloadedS = `${1 - giftbuttonD.length}`;
      break;
   }
   for (let a = 0; a < 3; a++) {
      iconfeedbacks = `${matchesB}`;
   }
      giftbuttonD += `${dependencyc.length}`;
      dependencyc = [huaweih.size];

      if (!isDoubleTap.value) {

      embedf = `${3 - parseInt(`${overlayG}`)}`;
       let collectiong = 2.0;
       let defaultplayerimgL = 5.0;
       let moret = String.fromCharCode(112,101,114,102,111,114,109,97,110,99,101,95,54,95,51,50,0);
          let minim = String.fromCharCode(113,95,56,55,95,101,110,117,109,101,114,97,116,101,0);
          let libruntimeexecutor1: Map<any, any> = new Map([[String.fromCharCode(106,115,116,121,112,101,95,49,95,52,57,0),String.fromCharCode(102,114,97,99,95,57,95,53,52,0)], [String.fromCharCode(115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,95,49,95,53,53,0),String.fromCharCode(116,117,112,108,101,115,95,108,95,53,48,0)], [String.fromCharCode(97,99,99,114,117,101,95,104,95,49,53,0),String.fromCharCode(112,114,111,116,101,99,116,105,111,110,95,51,95,54,51,0)]]);
         moret = `${parseInt(`${collectiong}`)}`;
         minim += `${libruntimeexecutor1.size}`;
         libruntimeexecutor1 = new Map([[`${libruntimeexecutor1.size}`, (String.fromCharCode(81,0) == minim ? minim.length : libruntimeexecutor1.size)]]);
      while (4.8 >= (collectiong * 5)) {
          let turnG = String.fromCharCode(105,95,49,51,95,109,101,114,103,101,0);
          let libfbjnih = String.fromCharCode(104,95,51,55,95,112,114,101,114,101,108,101,97,115,101,0);
         defaultplayerimgL -= parseFloat(`${1 & moret.length}`);
         turnG = `${turnG.length ^ libfbjnih.length}`;
         libfbjnih += `${1 >> (Math.min(2, libfbjnih.length))}`;
         break;
      }
      for (let k = 0; k < 2; k++) {
         moret = `${parseInt(`${defaultplayerimgL}`)}`;
      }
         defaultplayerimgL += parseFloat(`${moret.length}`);
      let internety = defaultplayerimgL <= 6033500.0;
      do {
         defaultplayerimgL -= parseFloat(`${3}`);
         if (internety) {
            break;
         }
      } while ((moret.length == 2) && internety);
      for (let y = 0; y < 3; y++) {
         defaultplayerimgL += parseFloat(`${parseInt(`${collectiong}`) - 3}`);
      }
      if ((parseInt(`${collectiong}`) * moret.length) > 2 && 2 > (moret.length * parseInt(`${collectiong}`))) {
          let basketballmatchdetailbgH: Array<any> = [522, 560, 826];
         collectiong *= parseFloat(`${parseInt(`${defaultplayerimgL}`) & parseInt(`${collectiong}`)}`);
         basketballmatchdetailbgH = [basketballmatchdetailbgH.length % (Math.max(2, 9))];
      }
         moret = `${parseInt(`${collectiong}`)}`;
      while (1.67 <= (collectiong / (Math.max(4.86, 10))) || (parseInt(`${collectiong}`) / (Math.max(moret.length, 5))) <= 4) {
         moret += `${parseInt(`${defaultplayerimgL}`)}`;
         break;
      }
      downloadedS += `${3 >> (Math.min(3, giflivestreaming1.length))}`;
   let othermatchdetailbga = giflivestreaming1.length >= 6369009;
   do {
       let greenX = false;
       let homex = 3.0;
       let themeJ = String.fromCharCode(112,114,111,120,105,109,105,116,121,95,105,95,52,56,0);
       let mimoj = true;
       let questa: Array<any> = [786, 171, 407];
         homex += 2 * parseInt(`${homex}`);
      while (mimoj) {
          let penaltyshootp: Map<any, any> = new Map([[String.fromCharCode(100,113,99,111,101,102,102,95,115,95,56,55,0),230], [String.fromCharCode(97,108,108,111,119,105,95,53,95,53,57,0),568]]);
          let textD = 1.0;
          let iconsubssuccessw = 2;
          let basketball9 = String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,115,95,118,95,55,53,0);
         mimoj = (textD + penaltyshootp.size) <= 2.73;
         penaltyshootp = new Map([[basketball9, iconsubssuccessw | basketball9.length]]);
         textD /= Math.max(1, 5);
         iconsubssuccessw <<= Math.min(basketball9.length, 4);
         break;
      }
         greenX = (questa.length - parseInt(`${homex}`)) > 87;
         mimoj = !greenX;
      while (3.68 < (3.51 - homex) && homex < 3.51) {
         homex += parseInt(`${homex}`) ^ 2;
         break;
      }
      while (!greenX) {
          let statsnomoredataz = 5;
          let hometeamfielde = 0;
          let neonH = 1.0;
          let goalg = String.fromCharCode(99,111,118,114,95,57,95,54,51,0);
         greenX = 94 < statsnomoredataz;
         statsnomoredataz >>= Math.min(5, Math.abs(2));
         hometeamfielde &= hometeamfielde * goalg.length;
         neonH *= parseFloat(`${hometeamfielde}`);
         goalg = `${hometeamfielde >> (Math.min(5, Math.abs(3)))}`;
         break;
      }
         questa.push((parseInt(`${homex}`) % (Math.max(8, (greenX ? 1 : 3)))));
         mimoj = ((themeJ.length * (!mimoj ? 100 : themeJ.length)) >= 100);
      while ((themeJ.length + 2) >= 4) {
          let with_uH = 5.0;
          let dnewsn = String.fromCharCode(112,95,53,55,95,109,97,103,110,105,116,117,100,101,0);
         homex -= 3;
         with_uH += parseFloat(`${1}`);
         dnewsn = `${2 + dnewsn.length}`;
         break;
      }
      let searchd = String.fromCharCode(118,106,100,109,113,103,101,0) == themeJ;
      do {
         themeJ += `${((greenX ? 1 : 4) ^ parseInt(`${homex}`))}`;
         if (searchd) {
            break;
         }
      } while (searchd && (5.75 >= (1.23 * homex)));
         themeJ += `${(themeJ.length & (mimoj ? 1 : 3))}`;
      for (let j = 0; j < 3; j++) {
         mimoj = greenX;
      }
      for (let i = 0; i < 3; i++) {
         questa = [((mimoj ? 1 : 1) / (Math.max(parseInt(`${homex}`), 2)))];
      }
         themeJ += `${1 - parseInt(`${homex}`)}`;
      while (1 > themeJ.length) {
          let calendarG = false;
          let showlessS = 5.0;
         mimoj = 70.47 >= homex;
         calendarG = showlessS <= 26.57;
         showlessS += (parseFloat(`${parseInt(`${showlessS}`) ^ (calendarG ? 2 : 2)}`));
         break;
      }
      giflivestreaming1 = [1];
      if (othermatchdetailbga) {
         break;
      }
   } while (othermatchdetailbga && ((3 + giflivestreaming1.length) >= 5));
   for (let j = 0; j < 3; j++) {
      klevinp = new Map([[`${klevinp.size}`, 1]]);
   }
      matchesB >>= Math.min(3, Math.abs(iconfeedbacks.length << (Math.min(2, Math.abs(klevinp.size)))));
      giftbuttonD = `${(String.fromCharCode(70,0) == giftbuttonD ? iconfeedbacks.length : giftbuttonD.length)}`;
   while (Array.from(klevinp.keys()).includes(`${huaweih.size}`)) {
       let sharewhiteW = String.fromCharCode(100,95,51,50,95,114,97,100,98,103,0);
       let halffieldimageo = 4.0;
       let termsK = 1.0;
      for (let n = 0; n < 1; n++) {
          let distW = false;
          let release_my = String.fromCharCode(112,108,97,105,110,95,112,95,55,54,0);
          let settingsX = String.fromCharCode(111,98,115,101,114,118,101,114,115,95,104,95,51,0);
          let bufferV = 0;
          let private_k1R = String.fromCharCode(98,111,111,107,109,97,114,107,115,95,103,95,50,51,0);
         halffieldimageo *= 3 ^ sharewhiteW.length;
         distW = private_k1R.length <= 77 || !distW;
         release_my = `${bufferV}`;
         settingsX = "1";
         bufferV &= bufferV;
         private_k1R = `${(3 - (distW ? 3 : 1))}`;
      }
      for (let u = 0; u < 1; u++) {
          let nativej = 2.0;
          let arrowdownq = String.fromCharCode(114,105,110,103,116,111,110,101,95,111,95,54,49,0);
         halffieldimageo /= Math.max(arrowdownq.length & 3, 1);
         nativej *= parseFloat(`${3}`);
         arrowdownq = `${parseInt(`${nativej}`) * parseInt(`${nativej}`)}`;
      }
          let smallW = 4;
         termsK -= smallW;
      let time_ysY = 7423616.0 <= halffieldimageo;
      do {
          let tempnodatagifU = 0.0;
          let libjsi0 = 1.0;
          let usernamee = 0.0;
         halffieldimageo /= Math.max(parseInt(`${libjsi0}`), 2);
         tempnodatagifU += parseFloat(`${parseInt(`${usernamee}`)}`);
         usernamee *= parseInt(`${tempnodatagifU}`);
         if (time_ysY) {
            break;
         }
      } while ((!sharewhiteW.endsWith(`${halffieldimageo}`)) && time_ysY);
      for (let c = 0; c < 2; c++) {
         termsK *= parseInt(`${halffieldimageo}`);
      }
      while (2 <= sharewhiteW.length) {
         termsK += parseInt(`${halffieldimageo}`);
         break;
      }
      while ((4 / (Math.max(4, sharewhiteW.length))) <= 4 || 4 <= (4 << (Math.min(3, sharewhiteW.length)))) {
         termsK -= 3;
         break;
      }
         sharewhiteW = `${parseInt(`${termsK}`)}`;
          let basketballiconv = String.fromCharCode(117,97,100,100,95,115,95,49,57,0);
          let injury1 = true;
          let libfollyN = 0;
         sharewhiteW += `${parseInt(`${halffieldimageo}`) >> (Math.min(Math.abs(parseInt(`${termsK}`)), 4))}`;
         basketballiconv += `${2 + basketballiconv.length}`;
         injury1 = String.fromCharCode(84,0) == basketballiconv;
         libfollyN += basketballiconv.length;
      klevinp = new Map([[`${giflivestreaming1.length}`, (String.fromCharCode(117,0) == giftbuttonD ? giflivestreaming1.length : giftbuttonD.length)]]);
      break;
   }
   if (embedf.includes(`${klevinp.size}`)) {
      embedf = "1";
   }
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
                  icon={settings.value === 0 ? "anythinkModeIcontransferclub" : "iconbellIconnewchatMatchinactive"}
                />
              )}
              {showSlider && settings.name === "countdownIconplayActive" && (
                <BrightnessVolumeSlider
                  percent={settings.value * 100}
                  icon={settings.value === 0 ? "networkLogouserPhilippines" : "binddatasRenew"}
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
                icon={settings.value === 0 ? "anythinkModeIcontransferclub" : "iconbellIconnewchatMatchinactive"}
              />
            )}
            {showSlider && settings.name === "countdownIconplayActive" && (
              <BrightnessVolumeSlider
                percent={settings.value * 100}
                icon={settings.value === 0 ? "networkLogouserPhilippines" : "binddatasRenew"}
              />
            )}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
