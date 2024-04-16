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
import BrightnessVolumeSlider from "./wkj_playlist";
import { debounce } from "lodash";
type XFillButton = {
   vodType: string;
   children?: ReactNode;
   enabled?: boolean;
   disabledGesture?: boolean;
   onSkipForward: () => any;
   onSkipBackwards: () => any;
   onSingleTap: (forceClose: boolean) => any;
   currentTime: number;
   totalDuration: number;
   onSeek: (x: number) => any;
   disableControlsExceptTap?: boolean;
};

type GHWNotification = {
   name: "progress" | "brightness" | "leagueGpayExpired" | "none";
   value: number;
};
export default ({
   vodType,
   children,
   enabled = true,
   disabledGesture = false,
   onSkipBackwards,
   onSkipForward,
   onSingleTap,
   currentTime = 0,
   totalDuration = 0.1,
   onSeek,
   disableControlsExceptTap = false,
}: XFillButton) => {
   const panCooldown = useSharedValue(3);

   const previousPanPosition = useSharedValue({ x: 0, y: 0, gesture: "none" });
   const brightShare = useSharedValue(0.0);
   const volumeShare = useSharedValue(0.0);
   const [settings, setSettings] = useState<GHWNotification>({
      name: "none",
      value: 0,
   });
   const [showSlider, setShowSlider] = useState(false);

   const isDoubleTap = useSharedValue(false);

   const sliderTimeout = useRef(0);
   const height = Dimensions.get("window").height;
   const width = Dimensions.get("window").width;

   const showControls = () => {
      let assistL = 0;
      let pressureS = String.fromCharCode(117, 95, 49, 95, 105, 110, 116, 115, 0);
      let regengf = 1;
      let fillx = 4.0;
      let gesturesf = 0.0;
      let tooltips3 = 0;
      let lesse = 3.0;
      let diceK = 4.0;
      let bodanE = 0.0;
      let dragW = String.fromCharCode(101, 95, 51, 55, 95, 108, 111, 117, 112, 101, 0);
      let indexK = String.fromCharCode(118, 95, 49, 50, 95, 112, 105, 100, 0);
      let orientation0 = 4.0;
      if (dragW.length > indexK.length) {
         let faviconL: Array<any> = [300, 34, 486];
         let plusN = 3;
         let shoot0: Array<any> = [750, 673];
         let resende = String.fromCharCode(122, 95, 54, 57, 95, 97, 99, 99, 101, 112, 116, 115, 0);
         dragW = `${plusN}`;
         faviconL = [resende.length << (Math.min(4, shoot0.length))];
         plusN |= faviconL.length;
         shoot0 = [3 & shoot0.length];
         resende += `${faviconL.length}`;
      }
      let referrer1 = false;
      let basketballu = String.fromCharCode(119, 95, 55, 54, 95, 108, 111, 116, 116, 105, 101, 112, 114, 111, 120, 121, 109, 111, 100, 101, 108, 0);
      let pressurel = false;
      indexK += `${basketballu.length}`;
      referrer1 = pressurel;
      basketballu = `${((referrer1 ? 4 : 1) ^ (pressurel ? 3 : 2))}`;
      dragW = `${parseInt(`${orientation0}`)}`;
      let overlay8 = 0.0;
      if (dragW.includes(`${orientation0}`)) {
         orientation0 *= (parseFloat(`${dragW == String.fromCharCode(72, 0) ? indexK.length : dragW.length}`));
      }
      fillx *= pressureS.length;
      let reporte = String.fromCharCode(118, 111, 114, 100, 105, 112, 108, 111, 109, 95, 52, 95, 49, 54, 0);
      let predictionX = 5.0;
      let contextx = 0;
      if (predictionX == 2.18) {
         contextx *= contextx & parseInt(`${predictionX}`);
      }
      if (1 >= contextx) {
         contextx *= 1;
      }
      contextx /= Math.max(contextx | 1, 3);
      while (5 < (contextx % (Math.max(2, 6))) && 2 < (contextx - parseInt(`${predictionX}`))) {
         contextx %= Math.max(contextx, 1);
         break;
      }
      if ((predictionX * 4.70) >= 2.11) {
         predictionX += 3;
      }
      let feedback1: Array<any> = [252, 88];
      let alertF = String.fromCharCode(114, 97, 115, 116, 101, 114, 105, 122, 97, 116, 105, 111, 110, 95, 100, 95, 54, 49, 0);
      reporte += "1";
      feedback1 = [alertF.length];
      alertF += `${alertF.length ^ 3}`;
      if ((contextx + predictionX) == 3.44) {
         predictionX /= Math.max(parseInt(`${predictionX}`), 3);
      }
      let fastA = String.fromCharCode(117, 110, 98, 97, 110, 95, 109, 95, 55, 0);
      let appleH = String.fromCharCode(103, 95, 52, 56, 95, 121, 111, 110, 108, 121, 0);
      let searchbaru = 3;
      contextx += fastA.length >> (Math.min(reporte.length, 5));
      fastA += `${appleH.length}`;
      appleH = `${2 * appleH.length}`;
      searchbaru |= searchbaru + 3;
      while ((predictionX * contextx) <= 1.75 && (contextx / 4) <= 5) {
         let modulet: Array<any> = [String.fromCharCode(109, 95, 51, 57, 95, 97, 112, 112, 114, 111, 120, 105, 109, 97, 116, 105, 111, 110, 0), String.fromCharCode(119, 101, 98, 109, 105, 100, 115, 95, 112, 95, 54, 50, 0)];
         let selectv = 2.0;
         let send6 = String.fromCharCode(119, 95, 51, 54, 95, 109, 115, 101, 120, 0);
         contextx %= Math.max(reporte.length ^ 3, 3);
         modulet.push(3);
         selectv *= send6.length | 2;
         send6 = `${modulet.length}`;
         break;
      }
      regengf ^= 1 + reporte.length;
      gesturesf /= Math.max(1, tooltips3 | parseInt(`${gesturesf}`));
      tooltips3 ^= pressureS.length;
      if (3 >= (4 + assistL)) {
         let statsI = true;
         let firebaseN: Array<any> = [String.fromCharCode(114, 102, 102, 116, 102, 95, 105, 95, 52, 57, 0), String.fromCharCode(115, 116, 97, 98, 105, 108, 105, 122, 101, 95, 108, 95, 49, 54, 0), String.fromCharCode(99, 104, 101, 99, 107, 105, 110, 103, 95, 109, 95, 50, 57, 0)];
         while (!statsI) {
            statsI = (84 > (firebaseN.length ^ (statsI ? 84 : firebaseN.length)));
            break;
         }
         statsI = firebaseN.length >= 92;
         let modalX = statsI ? !statsI : statsI;
         do {
            statsI = firebaseN.includes(statsI);
            if (modalX) {
               break;
            }
         } while (modalX && (2 <= firebaseN.length));
         if (firebaseN.length < 5) {
            let circle_ = String.fromCharCode(106, 115, 116, 121, 112, 101, 95, 122, 95, 49, 55, 0);
            let match7 = false;
            let headerp = 1;
            statsI = statsI || firebaseN.length < 29;
            circle_ += `${(headerp | (match7 ? 4 : 5))}`;
            match7 = match7 || circle_.length <= 17;
            headerp /= Math.max(2, circle_.length);
         }
         let yellowL = firebaseN.length <= 5295130;
         do {
            let unread5 = String.fromCharCode(103, 95, 57, 95, 100, 101, 108, 116, 97, 113, 0);
            let liveR = true;
            let ballA = String.fromCharCode(117, 112, 100, 97, 116, 101, 100, 95, 100, 95, 53, 55, 0);
            let agreement3 = 5;
            let anytimeR = 4;
            firebaseN = [ballA.length ^ 1];
            unread5 = `${anytimeR / (Math.max(agreement3, 8))}`;
            liveR = (unread5.length - agreement3) > 67;
            ballA += `${anytimeR | unread5.length}`;
            if (yellowL) {
               break;
            }
         } while ((firebaseN.length > 1) && yellowL);
         let themeq = String.fromCharCode(97, 95, 54, 57, 95, 114, 101, 102, 101, 114, 114, 97, 108, 0);
         let storef: Array<any> = [875, 115];
         let streamingY: Array<any> = [String.fromCharCode(112, 114, 101, 112, 97, 114, 105, 110, 103, 95, 53, 95, 55, 51, 0), String.fromCharCode(100, 101, 99, 105, 109, 97, 108, 115, 95, 97, 95, 52, 56, 0)];
         firebaseN.push(1 / (Math.max(5, firebaseN.length)));
         themeq += "1";
         storef.push(streamingY.length);
         streamingY = [2 | streamingY.length];
         assistL += 3 | parseInt(`${lesse}`);
      }
      let dropdown9 = String.fromCharCode(99, 97, 112, 105, 116, 97, 108, 105, 122, 105, 110, 103, 95, 108, 95, 56, 49, 0);
      let hongkongp = String.fromCharCode(99, 95, 57, 54, 95, 101, 120, 99, 108, 117, 115, 105, 111, 110, 115, 0);
      let previewW = String.fromCharCode(97, 95, 52, 53, 0);
      while (dropdown9 == String.fromCharCode(70, 0) && hongkongp.length <= 5) {
         let skipy: Array<any> = [666, 841];
         let disconnectedm = String.fromCharCode(115, 111, 108, 97, 110, 97, 95, 122, 95, 51, 54, 0);
         let becomeX = 4.0;
         dropdown9 = `${dropdown9.length << (Math.min(Math.abs(3), 3))}`;
         skipy.push(parseInt(`${becomeX}`));
         disconnectedm = `${(String.fromCharCode(120, 0) == disconnectedm ? skipy.length : disconnectedm.length)}`;
         becomeX /= Math.max(1, parseFloat(`${parseInt(`${becomeX}`)}`));
         break;
      }
      let lineH = String.fromCharCode(98, 95, 49, 49, 95, 117, 115, 101, 99, 0);
      diceK /= Math.max(4, parseFloat(`${3 % (Math.max(parseInt(`${gesturesf}`), 6))}`));
      assistL <<= Math.min(5, Math.abs(parseInt(`${lesse}`) << (Math.min(5, Math.abs(3)))));

      setShowSlider(true);

      regengf /= Math.max(parseInt(`${diceK}`) + 3, 2);
      for (let v = 0; v < 2; v++) {
         lesse -= parseFloat(`${assistL * 1}`);
      }
      let friendsk = String.fromCharCode(119, 101, 105, 103, 104, 116, 101, 100, 95, 108, 95, 55, 48, 0);
      let policy_ = String.fromCharCode(118, 95, 56, 54, 95, 116, 104, 114, 101, 101, 0);
      while (!policy_.startsWith(friendsk)) {
         friendsk += `${(policy_ == String.fromCharCode(101, 0) ? friendsk.length : policy_.length)}`;
         break;
      }
      let read8 = String.fromCharCode(97, 111, 108, 49, 104, 95, 104, 0) == policy_;
      do {
         policy_ = `${3 / (Math.max(4, policy_.length))}`;
         if (read8) {
            break;
         }
      } while ((policy_.startsWith(friendsk)) && read8);
      while (4 == policy_.length) {
         let cross5 = 0.0;
         policy_ = `${policy_.length}`;
         cross5 += parseFloat(`${parseInt(`${cross5}`)}`);
         break;
      }
      friendsk += "3";
      policy_ = `${policy_.length / (Math.max(1, friendsk.length))}`;
      let policyZ = false;
      pressureS = `${friendsk.length}`;
      while (lesse == parseFloat(`${pressureS.length}`)) {
         let acceptedN: Map<any, any> = new Map([[String.fromCharCode(97, 117, 100, 105, 101, 110, 99, 101, 95, 120, 95, 57, 57, 0), 45], [String.fromCharCode(106, 95, 56, 48, 95, 114, 111, 111, 109, 0), 707], [String.fromCharCode(111, 112, 116, 105, 111, 110, 95, 53, 95, 49, 57, 0), 684]]);
         let private_6f7 = String.fromCharCode(105, 95, 50, 57, 95, 109, 105, 103, 104, 116, 0);
         let footballp: Map<any, any> = new Map([[String.fromCharCode(97, 110, 105, 109, 97, 116, 97, 98, 108, 101, 95, 50, 95, 49, 57, 0), 238], [String.fromCharCode(110, 111, 110, 110, 117, 108, 108, 115, 115, 114, 99, 115, 95, 113, 95, 54, 52, 0), 806], [String.fromCharCode(102, 102, 109, 109, 97, 108, 95, 120, 95, 52, 0), 222]]);
         let storeX = String.fromCharCode(97, 116, 114, 97, 99, 95, 52, 95, 53, 50, 0);
         let playlistV = acceptedN.size >= 8428865;
         do {
            acceptedN.set(private_6f7, 3);
            if (playlistV) {
               break;
            }
         } while (playlistV && ((1 - storeX.length) < 3 && 4 < (1 - storeX.length)));
         private_6f7 = "3";
         let gemfileC = String.fromCharCode(114, 95, 50, 51, 95, 109, 112, 97, 100, 115, 112, 0);
         let langkeyo = 1.0;
         let targetA = 4;
         private_6f7 = `${private_6f7.length}`;
         gemfileC += `${gemfileC.length & 1}`;
         langkeyo -= 2 / (Math.max(parseInt(`${langkeyo}`), 7));
         targetA -= 2 & parseInt(`${langkeyo}`);
         footballp.set(`${private_6f7}`, private_6f7.length | acceptedN.size);
         let temperatureE = 0.0;
         while (1 >= (5 - acceptedN.size) || (footballp.size - acceptedN.size) >= 5) {
            acceptedN = new Map([[`${footballp.size}`, footballp.size]]);
            break;
         }
         storeX += `${parseInt(`${temperatureE}`) * 3}`;
         if ((footballp.size << (Math.min(Math.abs(1), 5))) >= 3 && 1 >= (storeX.length << (Math.min(4, Math.abs(footballp.size))))) {
            footballp.set(`${temperatureE}`, parseInt(`${temperatureE}`) / (Math.max(private_6f7.length, 7)));
         }
         let vignetteJ = String.fromCharCode(111, 114, 105, 95, 54, 95, 55, 56, 0);
         if (3.78 == temperatureE) {
            let countdownW: Map<any, any> = new Map([[String.fromCharCode(99, 95, 49, 55, 95, 99, 105, 110, 116, 0), true], [String.fromCharCode(97, 112, 105, 99, 95, 97, 95, 51, 48, 0), true], [String.fromCharCode(98, 117, 115, 95, 119, 95, 56, 51, 0), true]]);
            let zhengpiann = 0.0;
            let internet1 = 5.0;
            let scorew = false;
            let firebase8 = false;
            temperatureE += (String.fromCharCode(116, 0) == vignetteJ ? vignetteJ.length : (firebase8 ? 5 : 4));
            countdownW = new Map([[`${countdownW.size}`, 1 + countdownW.size]]);
            zhengpiann *= countdownW.size;
            internet1 += parseFloat(`${parseInt(`${internet1}`) >> (Math.min(5, Math.abs(1)))}`);
            scorew = countdownW.size >= 72 || 32.96 >= zhengpiann;
            firebase8 = null != countdownW.get(`${scorew}`);
         }
         if (2 == (acceptedN.size << (Math.min(Math.abs(1), 2)))) {
            private_6f7 = "3";
         }
         let inviteJ = false;
         let analytic2 = true;
         pressureS += "1";
         break;
      }
      let stationsR: Array<any> = [325, 112];
      let photol: Map<any, any> = new Map([[String.fromCharCode(107, 95, 56, 50, 95, 98, 112, 115, 0), 736], [String.fromCharCode(114, 101, 116, 97, 105, 110, 115, 95, 55, 95, 49, 48, 48, 0), 744]]);
      photol.set(`${stationsR.length}`, photol.size);
      let inactivec = 8575380 <= photol.size;
      do {
         photol.set(`${stationsR.length}`, photol.size % (Math.max(9, stationsR.length)));
         if (inactivec) {
            break;
         }
      } while (((5 & stationsR.length) >= 2 && (5 & stationsR.length) >= 3) && inactivec);
      if ((stationsR.length << (Math.min(Math.abs(photol.size), 2))) == 4 && (stationsR.length << (Math.min(Math.abs(4), 5))) == 1) {
         stationsR = [1];
      }
      for (let c = 0; c < 2; c++) {
         let mappingz = String.fromCharCode(109, 108, 115, 100, 95, 118, 95, 52, 56, 0);
         let sheety = String.fromCharCode(115, 105, 100, 120, 95, 100, 95, 55, 48, 0);
         let umengC = 4.0;
         let interstitialr = 4.0;
         photol = new Map([[`${photol.size}`, 3]]);
         mappingz += `${3 ^ parseInt(`${interstitialr}`)}`;
         sheety += `${mappingz.length}`;
         umengC *= (parseFloat(`${mappingz == String.fromCharCode(108, 0) ? parseInt(`${interstitialr}`) : mappingz.length}`));
      }
      for (let i = 0; i < 3; i++) {
         photol = new Map([[`${photol.size}`, stationsR.length - 3]]);
      }
      for (let n = 0; n < 3; n++) {
         photol.set(`${stationsR.length}`, stationsR.length * photol.size);
      }
      assistL *= parseInt(`${fillx}`);
      let time_hw = 7783945 <= assistL;
      do {
         assistL <<= Math.min(2, Math.abs(regengf * pressureS.length));
         if (time_hw) {
            break;
         }
      } while ((1 <= (tooltips3 | assistL) && (1 | tooltips3) <= 2) && time_hw);
      assistL -= parseInt(`${diceK}`) * regengf;
      clearTimeout(sliderTimeout.current);

      let sinaI = 9499088.0 <= fillx;
      do {
         fillx /= Math.max(1, parseInt(`${fillx}`));
         if (sinaI) {
            break;
         }
      } while (sinaI && ((regengf * 2) >= 4));
      let photoS = 7758718 >= pressureS.length;
      do {
         pressureS += `${parseInt(`${fillx}`)}`;
         if (photoS) {
            break;
         }
      } while ((gesturesf <= pressureS.length) && photoS);
      if (fillx >= 2.10) {
         fillx -= 3 ^ parseInt(`${diceK}`);
      }
      diceK *= parseFloat(`${parseInt(`${lesse}`) - 2}`);
      for (let d = 0; d < 3; d++) {
         let time_rJ = String.fromCharCode(120, 95, 50, 49, 95, 102, 114, 97, 109, 101, 115, 121, 110, 99, 0);
         time_rJ += `${time_rJ.length ^ 3}`;
         for (let j = 0; j < 2; j++) {
            time_rJ += `${time_rJ.length}`;
         }
         if (time_rJ.length <= time_rJ.length) {
            time_rJ += `${3 | time_rJ.length}`;
         }
         fillx *= regengf;
      }
      gesturesf /= Math.max(assistL >> (Math.min(1, Math.abs(1))), 3);
      lesse *= parseFloat(`${1}`);
      sliderTimeout.current = setTimeout(() => {

         let adultV = 0;
         let time_h2: Array<any> = [535, 804, 373];
         for (let y = 0; y < 2; y++) {
            let p_view1 = 2.0;
            let overlay1 = String.fromCharCode(102, 97, 108, 108, 98, 97, 99, 107, 95, 112, 95, 56, 51, 0);
            let episodesA = 0.0;
            let giftj = 3;
            adultV |= giftj >> (Math.min(5, Math.abs(3)));
            p_view1 /= Math.max(3, parseFloat(`${overlay1.length}`));
            overlay1 = `${3 << (Math.min(5, overlay1.length))}`;
            episodesA *= parseInt(`${p_view1}`);
            giftj -= 1;
         }
         time_h2 = [time_h2.length * adultV];
         let configureA = 5959429 >= adultV;
         do {
            adultV &= time_h2.length << (Math.min(Math.abs(3), 3));
            if (configureA) {
               break;
            }
         } while (((time_h2.length ^ 1) < 4) && configureA);
         let plash5 = 9556478 >= adultV;
         do {
            let description_9G = 2;
            let zhengpians: Array<any> = [583, 312];
            let football4 = String.fromCharCode(100, 95, 57, 50, 95, 120, 115, 117, 98, 0);
            adultV /= Math.max(3 >> (Math.min(2, time_h2.length)), 5);
            description_9G <<= Math.min(3, Math.abs(2));
            zhengpians.push(zhengpians.length);
            football4 += `${1 >> (Math.min(2, zhengpians.length))}`;
            if (plash5) {
               break;
            }
         } while ((time_h2.includes(adultV)) && plash5);
         let viewerv = String.fromCharCode(103, 101, 116, 104, 111, 115, 116, 98, 121, 110, 97, 109, 101, 95, 51, 95, 55, 49, 0);
         let analyticsp = String.fromCharCode(111, 116, 104, 101, 114, 119, 105, 115, 101, 95, 103, 95, 57, 55, 0);
         let dialogP = 3.0;
         let backgroundV = String.fromCharCode(118, 111, 105, 112, 95, 117, 95, 51, 53, 0);
         let resend5 = String.fromCharCode(97, 95, 50, 55, 95, 109, 98, 114, 116, 104, 114, 101, 97, 100, 0);
         time_h2.push(backgroundV.length);
         dialogP += parseInt(`${dialogP}`) & 2;
         backgroundV = `${resend5.length}`;
         resend5 += `${resend5.length}`;
         lesse *= parseFloat(`${parseInt(`${lesse}`)}`);
         let sharedo = false;
         let favoritek = 1.0;
         let linko = true;
         while ((favoritek * 4.68) >= 2.52 && favoritek >= 4.68) {
            let privacyV = true;
            let forwardl = 5.0;
            let chinaR = 1;
            linko = (privacyV ? !sharedo : privacyV);
            forwardl += parseFloat(`${1}`);
            chinaR %= Math.max(chinaR, 5);
            break;
         }
         let pauseS = true;
         let moonF = 0.0;
         let benefith: Map<any, any> = new Map([[String.fromCharCode(119, 102, 101, 120, 95, 113, 95, 52, 57, 0), 222], [String.fromCharCode(113, 95, 55, 52, 95, 111, 118, 101, 114, 0), 341]]);
         linko = pauseS || !sharedo;
         pauseS = 85.61 > moonF;
         moonF /= Math.max(3, 2);
         benefith = new Map([[`${benefith.size}`, parseInt(`${moonF}`) >> (Math.min(Math.abs(benefith.size), 2))]]);
         sharedo = favoritek <= 100.53;
         for (let v = 0; v < 1; v++) {
            favoritek *= (parseInt(`${favoritek}`) >> (Math.min(5, Math.abs((linko ? 1 : 2)))));
         }
         linko = 86.89 == favoritek && sharedo;
         let stepC = true;
         let homes: Array<any> = [0, 50, 500];
         let telegramN: Array<any> = [622, 6, 244];
         favoritek -= homes.length / (Math.max(9, parseInt(`${favoritek}`)));
         stepC = (37 == ((!stepC ? 37 : telegramN.length) & telegramN.length));
         homes.push(1);
         let downloadingZ = favoritek >= 8212211.0;
         do {
            favoritek -= 2 | parseInt(`${favoritek}`);
            if (downloadingZ) {
               break;
            }
         } while (downloadingZ && (linko));
         for (let a = 0; a < 3; a++) {
            favoritek -= ((linko ? 5 : 1) << (Math.min(Math.abs((sharedo ? 2 : 1)), 3)));
         }
         if (linko) {
            linko = linko || sharedo;
         }
         tooltips3 ^= parseInt(`${gesturesf}`);
         if (2.61 < (1.2 + fillx) || (parseInt(`${fillx}`) + tooltips3) < 2) {
            let annerS = String.fromCharCode(118, 95, 51, 48, 95, 116, 114, 97, 110, 115, 112, 97, 114, 101, 110, 116, 0);
            let controlsi = true;
            let type_rqx: Map<any, any> = new Map([[String.fromCharCode(115, 97, 109, 112, 108, 101, 115, 95, 122, 95, 56, 0), 125], [String.fromCharCode(101, 120, 112, 114, 101, 115, 115, 105, 111, 110, 95, 112, 95, 54, 51, 0), 909], [String.fromCharCode(118, 95, 54, 52, 95, 99, 111, 108, 99, 111, 108, 0), 192]]);
            while ((type_rqx.size >> (Math.min(annerS.length, 2))) == 2 && (annerS.length >> (Math.min(1, Math.abs(type_rqx.size)))) == 2) {
               let rulesc: Map<any, any> = new Map([[String.fromCharCode(100, 95, 56, 49, 95, 109, 97, 107, 101, 0), 207], [String.fromCharCode(99, 95, 54, 51, 95, 97, 118, 111, 105, 100, 0), 747]]);
               let gift6 = 3.0;
               type_rqx.set(`${gift6}`, 2);
               rulesc = new Map([[`${rulesc.size}`, rulesc.size - rulesc.size]]);
               gift6 += rulesc.size + rulesc.size;
               break;
            }
            controlsi = annerS.length >= 72;
            annerS += `${(2 * (controlsi ? 3 : 2))}`;
            controlsi = 77 < annerS.length || 77 < type_rqx.size;
            let windl = String.fromCharCode(106, 95, 49, 48, 48, 95, 100, 99, 98, 122, 108, 0);
            let catalogA = String.fromCharCode(97, 95, 53, 51, 95, 112, 114, 111, 103, 114, 101, 115, 115, 105, 118, 101, 0);
            let notificationM = false;
            controlsi = 31 >= windl.length && 31 >= catalogA.length;
            windl = "2";
            catalogA = `${((notificationM ? 3 : 2) * (notificationM ? 4 : 1))}`;
            controlsi = type_rqx.get(`${controlsi}`) == null;
            if (annerS.length < 2 && !controlsi) {
               let whatsappa = 2.0;
               let scorek: Array<any> = [986, 367, 85];
               annerS = `${scorek.length}`;
               whatsappa += parseInt(`${whatsappa}`) | parseInt(`${whatsappa}`);
               scorek = [3 - parseInt(`${whatsappa}`)];
            }
            while (1 >= (type_rqx.size * 4)) {
               type_rqx.set(annerS, (String.fromCharCode(87, 0) == annerS ? (controlsi ? 4 : 3) : annerS.length));
               break;
            }
            if (controlsi) {
               controlsi = type_rqx.size == 44;
            }
            tooltips3 >>= Math.min(Math.abs(3 >> (Math.min(3, Math.abs(regengf)))), 3);
         }
         pressureS += `${parseInt(`${gesturesf}`) + 3}`;
         if (4.17 <= (diceK / 4.99) || 1 <= (2 << (Math.min(1, Math.abs(regengf))))) {
            let constantsk = String.fromCharCode(110, 95, 51, 50, 95, 99, 111, 110, 118, 115, 97, 109, 112, 0);
            let umengT = 0.0;
            let window_l4 = 0;
            let saveB = String.fromCharCode(99, 104, 114, 111, 109, 105, 117, 109, 95, 109, 95, 50, 57, 0);
            for (let a = 0; a < 1; a++) {
               let shirtt = 4.0;
               constantsk = `${parseInt(`${shirtt}`) % 3}`;
            }
            umengT -= parseFloat(`${3 & constantsk.length}`);
            if (2 < (window_l4 & 5) || (5 / (Math.max(4, window_l4))) < 1) {
               umengT += parseFloat(`${saveB.length << (Math.min(Math.abs(3), 2))}`);
            }
            let analyticsz = String.fromCharCode(104, 95, 50, 48, 95, 100, 101, 108, 116, 97, 0);
            let leagueZ = String.fromCharCode(114, 111, 102, 105, 108, 101, 95, 111, 95, 49, 53, 0);
            let diceR = String.fromCharCode(121, 95, 54, 95, 103, 114, 97, 100, 108, 101, 0);
            umengT *= (parseFloat(`${analyticsz == String.fromCharCode(50, 0) ? analyticsz.length : parseInt(`${umengT}`)}`));
            leagueZ = "2";
            diceR += `${diceR.length}`;
            let xcopy_7w = String.fromCharCode(112, 101, 114, 109, 97, 110, 101, 110, 116, 95, 112, 95, 49, 54, 0);
            constantsk = `${window_l4}`;
            xcopy_7w = `${xcopy_7w.length}`;
            umengT -= parseFloat(`${1}`);
            umengT /= Math.max(parseFloat(`${saveB.length << (Math.min(3, constantsk.length))}`), 4);
            for (let u = 0; u < 3; u++) {
               umengT += parseFloat(`${parseInt(`${umengT}`)}`);
            }
            if ((constantsk.length * 3) == 3 && 3 == (3 ^ constantsk.length)) {
               let middleF = String.fromCharCode(99, 95, 57, 54, 95, 100, 114, 97, 110, 100, 0);
               let muted8: Map<any, any> = new Map([[String.fromCharCode(112, 108, 97, 110, 97, 114, 116, 111, 121, 117, 121, 95, 52, 95, 52, 48, 0), 243], [String.fromCharCode(113, 95, 51, 52, 95, 118, 112, 105, 110, 116, 114, 97, 112, 114, 101, 100, 0), 342], [String.fromCharCode(107, 95, 50, 50, 95, 112, 114, 111, 109, 111, 116, 101, 0), 355]]);
               let delegate_4yK = String.fromCharCode(100, 111, 99, 117, 109, 101, 110, 116, 115, 95, 54, 95, 54, 48, 0);
               let middleware2 = true;
               let miniv = String.fromCharCode(116, 95, 54, 54, 0);
               umengT /= Math.max(parseFloat(`${delegate_4yK.length * middleF.length}`), 1);
               middleF = `${muted8.size}`;
               muted8 = new Map([[miniv, ((middleware2 ? 5 : 5) % (Math.max(3, 5)))]]);
               delegate_4yK += `${((middleware2 ? 4 : 3) * miniv.length)}`;
            }
            let interneti: Array<any> = [27, 277];
            saveB = `${interneti.length}`;
            window_l4 ^= constantsk.length;
            constantsk += "1";
            diceK -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${diceK}`)), 3))}`);
         }
         while (2 == (assistL / 1)) {
            let star6 = true;
            let trash3 = String.fromCharCode(102, 95, 52, 57, 0);
            let fastZ = String.fromCharCode(120, 95, 56, 56, 95, 115, 116, 105, 99, 107, 101, 114, 101, 100, 0);
            let download1 = String.fromCharCode(120, 95, 56, 52, 95, 99, 111, 110, 99, 104, 0);
            let langI: Map<any, any> = new Map([[String.fromCharCode(105, 116, 101, 114, 97, 116, 111, 114, 95, 121, 95, 52, 52, 0), 809], [String.fromCharCode(111, 95, 50, 51, 95, 99, 104, 114, 111, 109, 97, 116, 105, 99, 0), 528]]);
            while (1 == (langI.size - 5) && 5 == (langI.size - trash3.length)) {
               langI.set(fastZ, fastZ.length);
               break;
            }
            let typingh = langI.size <= 8999315;
            do {
               langI.set(`${trash3}`, 2);
               if (typingh) {
                  break;
               }
            } while (typingh && (4 == (langI.size - 3)));
            let m_imageu = String.fromCharCode(101, 50, 48, 115, 117, 101, 56, 0) == download1;
            do {
               download1 += `${trash3.length | download1.length}`;
               if (m_imageu) {
                  break;
               }
            } while ((langI.size >= download1.length) && m_imageu);
            let hook3 = String.fromCharCode(121, 95, 51, 49, 95, 115, 116, 114, 108, 99, 97, 116, 0);
            download1 = `${download1.length}`;
            hook3 += `${hook3.length >> (Math.min(hook3.length, 4))}`;
            langI.set(`${download1}`, langI.size << (Math.min(download1.length, 2)));
            download1 += `${trash3.length}`;
            download1 += "2";
            fastZ += `${trash3.length}`;
            download1 = `${langI.size}`;
            langI.set(`${star6}`, fastZ.length + 2);
            if (2 > (langI.size & trash3.length)) {
               trash3 = `${download1.length}`;
            }
            download1 = `${download1.length}`;
            langI.set(`${download1}`, langI.size);
            let fillu = fastZ.length <= 6135942;
            do {
               fastZ = `${download1.length}`;
               if (fillu) {
                  break;
               }
            } while ((!trash3.includes(fastZ)) && fillu);
            fastZ = "1";
            diceK /= Math.max(parseFloat(`${langI.size >> (Math.min(Math.abs(3), 1))}`), 4);
            break;
         }
         lesse *= parseFloat(`${pressureS.length | parseInt(`${fillx}`)}`);
         setShowSlider(false);
      }, 1500);
   };

   const setBrightVolumeShare = async () => {
      let penaltys = String.fromCharCode(106, 112, 101, 103, 105, 110, 116, 95, 120, 95, 49, 0);
      let goalr = false;
      let signinupg = String.fromCharCode(121, 95, 52, 57, 95, 112, 114, 105, 110, 116, 0);
      let zhengpianK = 3.0;
      let minimizef = String.fromCharCode(118, 116, 97, 98, 95, 55, 95, 54, 48, 0);
      let trophyH = 4;
      let linkr = false;
      let dropdownc = String.fromCharCode(99, 111, 117, 110, 116, 101, 114, 115, 95, 108, 95, 57, 55, 0);
      let becomeP = String.fromCharCode(109, 117, 108, 116, 105, 99, 111, 100, 101, 99, 95, 97, 95, 51, 51, 0);
      let reminderE = 5.0;
      let sellL = 1.0;
      let privacyf = 0.0;
      becomeP = `${(dropdownc.length / (Math.max(5, (linkr ? 5 : 1))))}`;
      while (penaltys.length < 5) {
         penaltys += `${signinupg.length + penaltys.length}`;
         break;
      }
      while (linkr) {
         let shootz = String.fromCharCode(117, 95, 57, 49, 95, 115, 117, 98, 109, 105, 116, 0);
         let emptyy: Array<any> = [187, 171];
         let firebase8: Array<any> = [634, 103];
         for (let v = 0; v < 3; v++) {
            let modityC = String.fromCharCode(117, 112, 100, 97, 116, 97, 98, 108, 101, 95, 99, 95, 57, 54, 0);
            shootz = `${emptyy.length}`;
            modityC += `${modityC.length}`;
         }
         let update_1b = emptyy.length <= 7344299;
         do {
            emptyy.push(shootz.length);
            if (update_1b) {
               break;
            }
         } while (update_1b && ((firebase8.length / (Math.max(1, 3))) < 4 || 1 < (emptyy.length / (Math.max(firebase8.length, 3)))));
         zhengpianK -= parseFloat(`${trophyH ^ 2}`);
         break;
      }
      if (goalr) {
         goalr = 68 <= (reminderE / (Math.max(2, trophyH)));
      }
      let long__vt = 3.0;
      let flyerq = String.fromCharCode(108, 95, 53, 52, 95, 97, 98, 115, 100, 105, 102, 102, 0);
      for (let c = 0; c < 3; c++) {
         flyerq += `${(String.fromCharCode(86, 0) == flyerq ? parseInt(`${long__vt}`) : flyerq.length)}`;
      }
      if ((long__vt + flyerq.length) == 2.48 || 2.48 == (flyerq.length + long__vt)) {
         flyerq = `${parseInt(`${long__vt}`) / (Math.max(3, 2))}`;
      }
      flyerq += `${parseInt(`${long__vt}`) - flyerq.length}`;
      while (5 <= (parseInt(`${long__vt}`) / (Math.max(3, 6))) && (5.5 / (Math.max(4, long__vt))) <= 1.91) {
         flyerq = `${flyerq.length % (Math.max(3, parseInt(`${long__vt}`)))}`;
         break;
      }
      flyerq += `${3 ^ flyerq.length}`;
      let carouselA: Array<any> = [String.fromCharCode(116, 95, 52, 55, 95, 114, 103, 98, 97, 121, 99, 111, 99, 103, 0), String.fromCharCode(122, 95, 53, 57, 0)];
      let connectionm = String.fromCharCode(115, 95, 53, 48, 95, 99, 108, 111, 115, 105, 110, 103, 0);
      flyerq = `${carouselA.length ^ flyerq.length}`;
      carouselA = [connectionm.length >> (Math.min(connectionm.length, 2))];
      linkr = 39 == penaltys.length;
      let minimizer = 5;
      let phonef = String.fromCharCode(117, 115, 101, 114, 110, 97, 109, 101, 95, 110, 95, 50, 50, 0);
      let expand5: Map<any, any> = new Map([[String.fromCharCode(98, 95, 51, 50, 95, 109, 97, 99, 114, 111, 0), 258], [String.fromCharCode(111, 95, 56, 55, 95, 115, 117, 112, 101, 114, 0), 645]]);
      let morev: Map<any, any> = new Map([[String.fromCharCode(105, 95, 51, 48, 95, 108, 105, 98, 115, 112, 101, 101, 120, 0), 764], [String.fromCharCode(115, 101, 113, 117, 101, 110, 99, 101, 114, 95, 50, 95, 57, 0), 226], [String.fromCharCode(110, 95, 55, 48, 95, 112, 111, 115, 101, 115, 0), 887]]);
      let historyO: Map<any, any> = new Map([[String.fromCharCode(122, 95, 55, 54, 95, 97, 114, 114, 97, 121, 115, 0), 707], [String.fromCharCode(107, 95, 53, 50, 95, 106, 115, 105, 109, 100, 0), 705]]);
      let k_viewM: Array<any> = [364, 416];
      expand5 = new Map([[`${historyO.size}`, 3]]);
      historyO.set(`${k_viewM.length}`, k_viewM.length ^ 1);
      expand5 = new Map([[`${morev.size}`, 3 + expand5.size]]);
      if (minimizer < phonef.length) {
         phonef += `${minimizer - 1}`;
      }
      phonef = `${3 << (Math.min(4, phonef.length))}`;
      let mail1: Array<any> = [638, 390, 284];
      let controlsa = 1.0;
      let langd = String.fromCharCode(99, 95, 55, 55, 95, 97, 117, 116, 111, 99, 111, 114, 114, 101, 108, 97, 116, 105, 111, 110, 0);
      phonef = "3";
      mail1.push(parseInt(`${controlsa}`));
      controlsa /= Math.max(1, parseFloat(`${parseInt(`${controlsa}`)}`));
      langd = `${mail1.length | 3}`;
      dropdownc += "1";
      let twitteri = signinupg.length >= 8063869;
      do {
         signinupg += "1";
         if (twitteri) {
            break;
         }
      } while (twitteri && (signinupg.length > 3));
      linkr = 84 >= dropdownc.length;
      trophyH /= Math.max(2, ((linkr ? 2 : 5) % (Math.max(signinupg.length, 8))));
      let episodesf = penaltys == String.fromCharCode(55, 98, 115, 110, 0);
      do {
         penaltys = `${((linkr ? 2 : 5) >> (Math.min(1, Math.abs(1))))}`;
         if (episodesf) {
            break;
         }
      } while (episodesf && (!minimizef.endsWith(penaltys)));
      zhengpianK *= parseFloat(`${signinupg.length}`);
      goalr = signinupg.includes(`${reminderE}`);
      minimizef += `${becomeP.length & 3}`;
      trophyH |= (becomeP == String.fromCharCode(104, 0) ? becomeP.length : (goalr ? 2 : 3));
      let stationsV: Array<any> = [274, 646];
      let blackY = String.fromCharCode(102, 102, 116, 115, 95, 116, 95, 54, 56, 0);
      let baiduX = String.fromCharCode(120, 95, 49, 56, 95, 114, 101, 115, 111, 108, 117, 116, 105, 111, 110, 115, 0);
      let sentryO: Map<any, any> = new Map([[String.fromCharCode(101, 120, 116, 114, 97, 99, 102, 103, 95, 105, 95, 53, 56, 0), 931], [String.fromCharCode(119, 95, 51, 52, 95, 119, 115, 97, 117, 100, 0), 247]]);
      stationsV.push(stationsV.length);
      blackY += `${blackY.length - 2}`;
      baiduX = "1";
      sentryO.set(baiduX, (String.fromCharCode(100, 0) == baiduX ? sentryO.size : baiduX.length));
      stationsV = [2];
      stationsV = [1];
      signinupg = `${trophyH | 2}`;
      while (!minimizef.endsWith(`${linkr}`)) {
         minimizef += "2";
         break;
      }

      brightShare.value = await SystemSetting.getAppBrightness();

      goalr = !linkr;
      trophyH <<= Math.min(4, Math.abs(1 + minimizef.length));
      reminderE -= parseFloat(`${3}`);
      becomeP = `${2 / (Math.max(parseInt(`${reminderE}`), 8))}`;
      while ((penaltys.length * 1) > 2 && 2.31 > (sellL / (Math.max(penaltys.length, 10)))) {
         sellL /= Math.max(parseInt(`${sellL}`) | 2, 2);
         break;
      }
      if ((1 + signinupg.length) >= 1 && 5.89 >= (sellL / 3.96)) {
         let privacy0 = String.fromCharCode(114, 101, 112, 111, 95, 102, 95, 57, 0);
         let auto_eF = String.fromCharCode(105, 95, 57, 48, 95, 99, 111, 114, 100, 0);
         let sansZ = String.fromCharCode(108, 95, 49, 55, 95, 109, 101, 115, 97, 103, 101, 115, 0);
         let policyL = 6970443 >= privacy0.length;
         do {
            let bannerx: Map<any, any> = new Map([[String.fromCharCode(114, 95, 54, 57, 95, 109, 97, 112, 0), String.fromCharCode(111, 117, 116, 112, 117, 116, 95, 52, 95, 57, 0)], [String.fromCharCode(97, 95, 49, 55, 95, 99, 108, 105, 112, 115, 0), String.fromCharCode(100, 105, 115, 112, 108, 97, 99, 101, 109, 101, 110, 116, 95, 103, 95, 55, 49, 0)]]);
            let grey3 = true;
            let launchL: Array<any> = [634, 40, 547];
            let with_9sU: Map<any, any> = new Map([[String.fromCharCode(115, 95, 57, 53, 95, 100, 101, 116, 101, 99, 116, 105, 111, 110, 0), 289], [String.fromCharCode(102, 95, 57, 57, 95, 105, 110, 116, 101, 114, 118, 97, 108, 115, 0), 50], [String.fromCharCode(112, 95, 49, 50, 95, 112, 114, 101, 115, 101, 116, 115, 0), 958]]);
            privacy0 += `${1 ^ bannerx.size}`;
            bannerx = new Map([[`${launchL.length}`, ((grey3 ? 4 : 4) * launchL.length)]]);
            grey3 = !grey3 && launchL.length < 98;
            with_9sU.set(`${launchL.length}`, launchL.length);
            if (policyL) {
               break;
            }
         } while ((privacy0.length == 3) && policyL);
         let blacklist7 = String.fromCharCode(114, 101, 115, 105, 100, 117, 97, 108, 95, 50, 95, 53, 57, 0);
         let paginationA = false;
         sansZ += `${sansZ.length}`;
         blacklist7 += `${((paginationA ? 3 : 1))}`;
         paginationA = blacklist7.length < 38;
         if (auto_eF.length > privacy0.length) {
            privacy0 += `${1 | auto_eF.length}`;
         }
         privacy0 += "3";
         while (privacy0 != String.fromCharCode(75, 0) && 3 <= auto_eF.length) {
            let mail9 = 4.0;
            let sourceh = true;
            auto_eF = "2";
            mail9 += ((sourceh ? 2 : 2) >> (Math.min(Math.abs(parseInt(`${mail9}`)), 4)));
            sourceh = sourceh || mail9 <= 32.57;
            break;
         }
         let blacklistL: Map<any, any> = new Map([[String.fromCharCode(107, 95, 53, 55, 95, 104, 116, 109, 108, 109, 97, 114, 107, 117, 112, 0), 418], [String.fromCharCode(100, 105, 115, 112, 101, 110, 115, 101, 114, 95, 120, 95, 55, 55, 0), 318]]);
         let sinaq = String.fromCharCode(117, 110, 115, 111, 108, 118, 101, 100, 95, 121, 95, 55, 57, 0);
         let hooksz = String.fromCharCode(110, 112, 117, 116, 95, 104, 95, 49, 56, 0);
         auto_eF = `${hooksz.length}`;
         blacklistL = new Map([[`${blacklistL.size}`, 1 + sinaq.length]]);
         sinaq += `${(sinaq == String.fromCharCode(104, 0) ? blacklistL.size : sinaq.length)}`;
         hooksz = `${sinaq.length ^ 1}`;
         for (let o = 0; o < 2; o++) {
            auto_eF += `${privacy0.length + auto_eF.length}`;
         }
         for (let r = 0; r < 1; r++) {
            let chinat: Map<any, any> = new Map([[String.fromCharCode(100, 101, 99, 111, 109, 112, 114, 101, 115, 115, 105, 111, 110, 95, 117, 95, 52, 56, 0), false], [String.fromCharCode(98, 105, 109, 97, 112, 95, 97, 95, 53, 52, 0), false], [String.fromCharCode(119, 95, 50, 55, 95, 112, 97, 114, 116, 105, 99, 105, 112, 97, 116, 105, 111, 110, 0), true]]);
            let gesturesv = String.fromCharCode(118, 97, 114, 105, 97, 110, 99, 101, 120, 104, 95, 52, 95, 55, 57, 0);
            let internet8: Map<any, any> = new Map([[String.fromCharCode(105, 95, 53, 53, 95, 105, 115, 110, 111, 116, 116, 97, 112, 0), 625], [String.fromCharCode(99, 95, 55, 49, 95, 109, 97, 115, 107, 101, 100, 0), 720], [String.fromCharCode(119, 111, 114, 107, 105, 110, 103, 95, 97, 95, 49, 48, 0), 110]]);
            auto_eF += `${(sansZ == String.fromCharCode(88, 0) ? sansZ.length : chinat.size)}`;
            chinat = new Map([[`${internet8.size}`, 2]]);
            gesturesv = `${(String.fromCharCode(69, 0) == gesturesv ? gesturesv.length : internet8.size)}`;
         }
         let x_countJ = 5;
         let handlerF = 3;
         sellL *= (String.fromCharCode(115, 0) == minimizef ? minimizef.length : parseInt(`${zhengpianK}`));
      }
      while (parseInt(`${zhengpianK}`) >= signinupg.length) {
         let whistleD = 1;
         let gesturesH = false;
         let plus_: Array<any> = [31, 538];
         let moref = 0.0;
         let soundt = gesturesH ? !gesturesH : gesturesH;
         do {
            let fast6: Array<any> = [493, 714, 508];
            let nalyticsv = 4.0;
            let combine5: Map<any, any> = new Map([[String.fromCharCode(115, 115, 101, 100, 105, 102, 102, 95, 54, 95, 55, 0), 49], [String.fromCharCode(107, 95, 49, 52, 95, 97, 109, 101, 120, 0), 291], [String.fromCharCode(99, 102, 101, 110, 99, 95, 100, 95, 54, 55, 0), 462]]);
            gesturesH = parseInt(`${moref}`) == plus_.length;
            fast6 = [fast6.length >> (Math.min(Math.abs(1), 1))];
            nalyticsv /= Math.max(parseInt(`${nalyticsv}`), 2);
            combine5 = new Map([[`${combine5.size}`, combine5.size]]);
            if (soundt) {
               break;
            }
         } while ((5 < whistleD) && soundt);
         while (whistleD < 2) {
            whistleD >>= Math.min(Math.abs(parseInt(`${moref}`) ^ whistleD), 3);
            break;
         }
         whistleD %= Math.max(4, 2);
         let questM = gesturesH ? !gesturesH : gesturesH;
         do {
            gesturesH = plus_.includes(moref);
            if (questM) {
               break;
            }
         } while (questM && ((3 & whistleD) == 3 || 3 == whistleD));
         if (!plus_.includes(whistleD)) {
            let trashW: Map<any, any> = new Map([[String.fromCharCode(101, 116, 104, 101, 114, 116, 117, 112, 108, 105, 115, 95, 115, 95, 57, 53, 0), 688], [String.fromCharCode(114, 103, 98, 121, 117, 118, 95, 48, 95, 49, 54, 0), 482], [String.fromCharCode(116, 97, 112, 115, 95, 51, 95, 56, 48, 0), 910]]);
            plus_.push(parseInt(`${moref}`) % 3);
            trashW = new Map([[`${trashW.size}`, 2 % (Math.max(4, trashW.size))]]);
         }
         let bodanF = 0.0;
         let desc4 = String.fromCharCode(99, 95, 52, 54, 0);
         let previewD = String.fromCharCode(107, 95, 53, 54, 95, 103, 110, 114, 101, 0);
         bodanF *= parseFloat(`${whistleD - 3}`);
         desc4 = `${previewD.length << (Math.min(2, desc4.length))}`;
         previewD = `${desc4.length}`;
         if (4 == (whistleD / (Math.max(parseInt(`${moref}`), 4))) || 4 == (parseInt(`${moref}`) / (Math.max(6, whistleD)))) {
            whistleD >>= Math.min(Math.abs(whistleD), 5);
         }
         let list0 = 1.0;
         let lessl = String.fromCharCode(99, 111, 117, 110, 116, 115, 95, 104, 95, 55, 52, 0);
         let emptym = 3;
         moref -= parseFloat(`${whistleD % 1}`);
         list0 += emptym | 2;
         lessl += `${emptym}`;
         while (2.59 <= (moref * 1.5)) {
            let selectedG = 4.0;
            let recommendationr = 4;
            let whatsapp5 = 4.0;
            let shootG: Array<any> = [String.fromCharCode(106, 95, 54, 48, 95, 98, 117, 102, 108, 101, 110, 0), String.fromCharCode(119, 114, 97, 112, 100, 101, 116, 101, 99, 116, 95, 99, 95, 56, 54, 0)];
            moref *= parseFloat(`${1 >> (Math.min(Math.abs(recommendationr), 5))}`);
            selectedG += parseFloat(`${parseInt(`${whatsapp5}`)}`);
            recommendationr &= 1 ^ parseInt(`${selectedG}`);
            whatsapp5 /= Math.max(3, parseFloat(`${shootG.length % (Math.max(1, 4))}`));
            shootG.push(parseInt(`${selectedG}`) - 1);
            break;
         }
         let settingsP = plus_.length >= 5019112;
         do {
            let default_2L: Array<any> = [816, 806];
            plus_ = [plus_.length * 3];
            default_2L = [default_2L.length % (Math.max(10, default_2L.length))];
            if (settingsP) {
               break;
            }
         } while (settingsP && (plus_.includes(moref)));
         let nterstitialx = 5.0;
         let profileX = String.fromCharCode(115, 95, 57, 53, 95, 105, 103, 110, 111, 114, 101, 0);
         let detailh = false;
         plus_ = [((detailh ? 3 : 1) * 2)];
         nterstitialx /= Math.max((parseFloat(`${profileX == String.fromCharCode(116, 0) ? profileX.length : parseInt(`${nterstitialx}`)}`)), 3);
         detailh = profileX == String.fromCharCode(76, 0);
         signinupg = `${parseInt(`${zhengpianK}`) ^ 3}`;
         break;
      }
      zhengpianK += (parseFloat(`${(goalr ? 5 : 4)}`));
      dropdownc += "2";
      let popupN = dropdownc == String.fromCharCode(117, 113, 103, 104, 53, 119, 0);
      do {
         dropdownc += `${parseInt(`${reminderE}`)}`;
         if (popupN) {
            break;
         }
      } while (((5 * dropdownc.length) >= 3) && popupN);
      signinupg = `${minimizef.length | 2}`;
      let downloadd = linkr ? !linkr : linkr;
      do {
         linkr = minimizef.length < 69;
         if (downloadd) {
            break;
         }
      } while (downloadd && (4.86 < reminderE));
      linkr = reminderE > 60.58 || !linkr;
      if (5 >= (becomeP.length << (Math.min(Math.abs(1), 1)))) {
         becomeP += "1";
      }
      linkr = 24.98 == reminderE && trophyH == 34;
      let fieldM: Map<any, any> = new Map([[String.fromCharCode(119, 95, 51, 50, 95, 115, 117, 109, 0), 611], [String.fromCharCode(108, 117, 109, 98, 101, 114, 106, 97, 99, 107, 95, 49, 95, 55, 53, 0), 730]]);
      if (5 >= (fieldM.size % (Math.max(fieldM.size, 2))) || (fieldM.size % (Math.max(fieldM.size, 2))) >= 5) {
         fieldM.set(`${fieldM.size}`, fieldM.size);
      }
      let subsW = String.fromCharCode(97, 97, 100, 95, 106, 95, 53, 53, 0);
      while (fieldM.size == 5) {
         subsW += `${(subsW == String.fromCharCode(87, 0) ? fieldM.size : subsW.length)}`;
         break;
      }
      signinupg = `${((goalr ? 2 : 2))}`;
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
      setSettings({ name: "leagueGpayExpired", value: newVol });
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
      let basketballQ = true;
      let forward6: Array<any> = [498, 577, 12];
      let expired9 = String.fromCharCode(119, 95, 57, 54, 95, 112, 114, 101, 102, 105, 120, 101, 115, 0);
      let filterN: Array<any> = [String.fromCharCode(118, 97, 108, 95, 121, 95, 49, 56, 0), String.fromCharCode(105, 110, 118, 101, 114, 115, 101, 95, 121, 95, 53, 48, 0), String.fromCharCode(108, 95, 54, 54, 95, 115, 117, 98, 115, 116, 114, 105, 110, 103, 115, 0)];
      let znews3 = 2;
      let l_playerq = String.fromCharCode(114, 101, 103, 105, 115, 116, 101, 114, 95, 97, 95, 55, 52, 0);
      let fulln = String.fromCharCode(116, 114, 107, 110, 95, 52, 95, 50, 54, 0);
      let friends1 = String.fromCharCode(98, 95, 52, 56, 95, 100, 118, 98, 115, 117, 98, 0);
      let index8 = 2.0;
      let apps6 = String.fromCharCode(115, 116, 111, 114, 101, 95, 104, 95, 50, 56, 0);
      let description_cv = 5;
      let form4 = 3.0;
      let field0 = String.fromCharCode(100, 115, 116, 95, 98, 95, 51, 56, 0);
      let math4 = 3.0;
      let humidityh = String.fromCharCode(106, 95, 50, 56, 95, 102, 108, 97, 115, 104, 105, 110, 103, 0);
      let orientationz = 2.0;
      fulln += `${(String.fromCharCode(89, 0) == friends1 ? friends1.length : znews3)}`;
      while (5 <= (2 * znews3) && 2 <= znews3) {
         basketballQ = !basketballQ;
         break;
      }
      while (4 == (5 - friends1.length) || (5 - friends1.length) == 2) {
         znews3 *= znews3;
         break;
      }
      while (form4 < 3.64 && 1.63 < (3.64 - form4)) {
         let fastforwardf: Map<any, any> = new Map([[String.fromCharCode(99, 108, 97, 110, 103, 95, 101, 95, 57, 50, 0), 815], [String.fromCharCode(99, 97, 112, 105, 116, 97, 108, 105, 122, 97, 116, 105, 111, 110, 95, 100, 95, 57, 0), 93]]);
         let actionsC = 1.0;
         let notification2 = String.fromCharCode(114, 101, 116, 117, 114, 110, 115, 95, 54, 95, 52, 50, 0);
         notification2 = `${parseInt(`${actionsC}`) << (Math.min(Math.abs(1), 5))}`;
         let vietnamR = String.fromCharCode(115, 101, 113, 118, 105, 100, 101, 111, 95, 98, 95, 54, 53, 0);
         let firebaseK = String.fromCharCode(112, 114, 101, 95, 52, 95, 53, 56, 0);
         fastforwardf = new Map([[vietnamR, vietnamR.length]]);
         actionsC *= parseFloat(`${vietnamR.length << (Math.min(Math.abs(3), 2))}`);
         for (let m = 0; m < 3; m++) {
            actionsC *= parseFloat(`${1}`);
         }
         notification2 = `${parseInt(`${actionsC}`) - 3}`;
         if (fastforwardf.get(`${actionsC}`) != null) {
            let overlayQ = String.fromCharCode(103, 95, 52, 48, 0);
            let routerv = String.fromCharCode(106, 95, 52, 56, 95, 97, 100, 118, 97, 110, 99, 101, 100, 0);
            let store4 = false;
            actionsC -= parseFloat(`${notification2.length}`);
            overlayQ += `${(routerv == String.fromCharCode(68, 0) ? routerv.length : overlayQ.length)}`;
            store4 = routerv == overlayQ;
         }
         actionsC += parseFloat(`${firebaseK.length ^ 1}`);
         let langh: Map<any, any> = new Map([[String.fromCharCode(107, 95, 54, 48, 95, 108, 97, 99, 101, 115, 0), String.fromCharCode(109, 95, 51, 49, 95, 99, 104, 97, 105, 110, 115, 0)], [String.fromCharCode(115, 95, 56, 51, 95, 109, 97, 105, 110, 110, 101, 116, 0), String.fromCharCode(122, 95, 55, 51, 95, 99, 111, 109, 112, 0)]]);
         let screen9: Array<any> = [693, 880];
         let downloader9 = String.fromCharCode(114, 95, 57, 48, 95, 117, 115, 108, 101, 101, 112, 0);
         notification2 = `${langh.size - 2}`;
         langh.set(downloader9, (downloader9 == String.fromCharCode(120, 0) ? screen9.length : downloader9.length));
         screen9 = [screen9.length];
         basketballQ = null == fastforwardf.get(`${basketballQ}`);
         break;
      }
      while (apps6.length > fulln.length) {
         fulln += "2";
         break;
      }
      friends1 = `${2 - parseInt(`${form4}`)}`;
      let details2 = 7330498 <= description_cv;
      do {
         description_cv &= (String.fromCharCode(79, 0) == fulln ? fulln.length : forward6.length);
         if (details2) {
            break;
         }
      } while (details2 && ((apps6.length >> (Math.min(Math.abs(5), 3))) >= 1));
      apps6 += `${fulln.length & 2}`;
      for (let x = 0; x < 1; x++) {
         let detailsk: Map<any, any> = new Map([[String.fromCharCode(99, 111, 114, 100, 95, 54, 95, 56, 55, 0), 145], [String.fromCharCode(111, 114, 105, 103, 105, 110, 115, 95, 97, 95, 54, 53, 0), 862], [String.fromCharCode(120, 95, 49, 51, 95, 113, 117, 97, 110, 116, 105, 108, 101, 0), 166]]);
         let typesM = false;
         let awayX = String.fromCharCode(107, 110, 111, 119, 110, 95, 116, 95, 50, 0);
         let memberc: Map<any, any> = new Map([[String.fromCharCode(112, 101, 114, 112, 101, 110, 100, 105, 99, 117, 108, 97, 114, 95, 109, 95, 52, 56, 0), 381], [String.fromCharCode(98, 95, 49, 50, 95, 116, 117, 114, 98, 111, 106, 112, 101, 103, 0), 411]]);
         let photoV = 3;
         for (let j = 0; j < 2; j++) {
            let statisticsa = String.fromCharCode(105, 95, 55, 50, 95, 115, 116, 114, 100, 117, 112, 0);
            let tooltipsN = String.fromCharCode(113, 95, 56, 56, 95, 100, 101, 99, 105, 109, 97, 116, 111, 114, 0);
            let selectN = String.fromCharCode(116, 114, 97, 110, 115, 109, 105, 116, 95, 55, 95, 54, 49, 0);
            awayX += `${2 * detailsk.size}`;
            statisticsa += `${selectN.length / 3}`;
            tooltipsN = `${2 * statisticsa.length}`;
            selectN += `${selectN.length ^ tooltipsN.length}`;
         }
         if (memberc.size < 2) {
            typesM = 46 == memberc.size;
         }
         let layoutQ: Array<any> = [690, 355];
         memberc = new Map([[`${photoV}`, awayX.length]]);
         awayX = "2";
         let penaltyV = String.fromCharCode(100, 95, 49, 55, 95, 117, 110, 115, 97, 102, 101, 0);
         let linkg = 1.0;
         memberc.set(`${layoutQ.length}`, detailsk.size - layoutQ.length);
         penaltyV += `${(String.fromCharCode(79, 0) == penaltyV ? parseInt(`${linkg}`) : penaltyV.length)}`;
         linkg -= parseFloat(`${1 ^ penaltyV.length}`);
         typesM = (37 < ((typesM ? 37 : awayX.length) | awayX.length));
         detailsk.set(`${typesM}`, ((typesM ? 1 : 2) / (Math.max(detailsk.size, 6))));
         if (4 <= (detailsk.size ^ photoV) && (detailsk.size ^ photoV) <= 4) {
            detailsk = new Map([[`${layoutQ.length}`, layoutQ.length]]);
         }
         let redirectf = true;
         let rightm = true;
         let episodesH = 5.0;
         photoV >>= Math.min(4, awayX.length);
         episodesH /= Math.max(2, parseFloat(`${parseInt(`${episodesH}`)}`));
         layoutQ = [layoutQ.length << (Math.min(2, Math.abs(memberc.size)))];
         let promotionW = String.fromCharCode(112, 114, 111, 120, 105, 109, 105, 116, 121, 95, 111, 95, 57, 50, 0);
         let modelK: Array<any> = [String.fromCharCode(101, 108, 101, 109, 95, 120, 95, 52, 54, 0), String.fromCharCode(100, 111, 99, 108, 105, 115, 116, 115, 95, 104, 95, 50, 52, 0), String.fromCharCode(119, 95, 49, 48, 48, 95, 116, 101, 120, 116, 109, 111, 118, 115, 117, 98, 0)];
         let mores: Map<any, any> = new Map([[String.fromCharCode(103, 117, 116, 115, 95, 49, 95, 56, 57, 0), 190], [String.fromCharCode(97, 95, 51, 57, 95, 112, 105, 120, 108, 101, 116, 0), 853]]);
         redirectf = 99 < memberc.size;
         promotionW += `${(String.fromCharCode(110, 0) == promotionW ? promotionW.length : mores.size)}`;
         modelK.push(promotionW.length);
         mores = new Map([[`${mores.size}`, 1]]);
         rightm = !redirectf && rightm;
         layoutQ = [((rightm ? 4 : 5) * photoV)];
         apps6 += `${(String.fromCharCode(101, 0) == awayX ? awayX.length : parseInt(`${index8}`))}`;
      }
      znews3 >>= Math.min(Math.abs(3), 2);
      while (5 == forward6.length) {
         let notification5 = 2.0;
         let update_a4: Array<any> = [992, 698];
         let indicatorq = true;
         let goalG = 7016183 >= update_a4.length;
         do {
            update_a4.push(parseInt(`${notification5}`));
            if (goalG) {
               break;
            }
         } while (goalG && (update_a4.length < 1));
         let cornerd = 9427989.0 <= notification5;
         do {
            let downC = String.fromCharCode(105, 95, 53, 49, 95, 112, 114, 117, 110, 105, 110, 103, 0);
            let indexn = false;
            let carouselW: Array<any> = [953, 957];
            notification5 /= Math.max(parseFloat(`${2 % (Math.max(1, parseInt(`${notification5}`)))}`), 5);
            downC += `${carouselW.length}`;
            indexn = carouselW.length > 78;
            if (cornerd) {
               break;
            }
         } while (cornerd && (4.60 == (notification5 - 3.95) && (notification5 - parseFloat(`${update_a4.length}`)) == 3.95));
         let long_kq = String.fromCharCode(110, 101, 97, 114, 101, 115, 116, 95, 54, 95, 54, 52, 0);
         let groupV: Map<any, any> = new Map([[String.fromCharCode(109, 97, 116, 99, 104, 105, 110, 102, 111, 95, 122, 95, 54, 57, 0), 111], [String.fromCharCode(97, 95, 50, 55, 95, 114, 105, 112, 101, 109, 100, 0), 33]]);
         let moduleK: Map<any, any> = new Map([[String.fromCharCode(98, 97, 116, 99, 104, 105, 110, 103, 95, 54, 95, 50, 48, 0), String.fromCharCode(114, 101, 97, 109, 95, 112, 95, 56, 57, 0)], [String.fromCharCode(112, 114, 111, 95, 101, 95, 55, 52, 0), String.fromCharCode(99, 95, 54, 54, 95, 114, 101, 115, 105, 103, 110, 105, 110, 103, 0)], [String.fromCharCode(112, 95, 52, 48, 95, 102, 114, 97, 109, 101, 0), String.fromCharCode(111, 95, 49, 52, 95, 97, 105, 102, 102, 0)]]);
         while (1 < (update_a4.length & long_kq.length) && (1 & update_a4.length) < 1) {
            update_a4.push(parseInt(`${notification5}`) + groupV.size);
            break;
         }
         if (1 == long_kq.length) {
            notification5 += parseFloat(`${update_a4.length}`);
         }
         indicatorq = 38.36 <= notification5;
         if ((update_a4.length % (Math.max(5, 7))) < 1 || 5 < (update_a4.length % (Math.max(moduleK.size, 9)))) {
            moduleK.set(`${notification5}`, parseInt(`${notification5}`) % 3);
         }
         while (!indicatorq) {
            let m_titleU = String.fromCharCode(100, 95, 56, 55, 95, 112, 97, 114, 116, 105, 99, 108, 101, 115, 0);
            let redirectn = String.fromCharCode(100, 95, 56, 57, 95, 100, 105, 97, 108, 111, 103, 115, 0);
            let specf = String.fromCharCode(116, 95, 52, 54, 95, 108, 97, 110, 99, 122, 111, 115, 0);
            let logoutU = String.fromCharCode(99, 95, 53, 55, 95, 112, 103, 110, 111, 0);
            groupV = new Map([[`${moduleK.size}`, groupV.size]]);
            m_titleU += `${specf.length}`;
            redirectn += `${specf.length}`;
            logoutU += `${specf.length * redirectn.length}`;
            break;
         }
         forward6.push(description_cv);
         break;
      }
      let desc8: Array<any> = [268, 907, 787];
      let giftT = 0.0;
      let sourceL = String.fromCharCode(105, 95, 53, 50, 95, 99, 108, 97, 105, 109, 101, 100, 0);
      giftT -= (String.fromCharCode(103, 0) == sourceL ? sourceL.length : desc8.length);
      while (desc8.length == parseInt(`${giftT}`)) {
         giftT -= desc8.length | 3;
         break;
      }
      desc8.push(parseInt(`${giftT}`));
      desc8.push(3);
      let settingsK = 0.0;
      let renew3 = 0.0;
      let ajax2 = giftT >= 9881398.0;
      do {
         let crownz = 2.0;
         let gemfile4 = 3.0;
         let promotions = String.fromCharCode(99, 95, 52, 56, 95, 117, 100, 112, 0);
         let verticalb = String.fromCharCode(121, 95, 57, 50, 0);
         let sideG = 1.0;
         giftT *= parseInt(`${renew3}`);
         crownz -= verticalb.length / 1;
         gemfile4 /= Math.max(parseFloat(`${2 / (Math.max(parseInt(`${gemfile4}`), 5))}`), 1);
         promotions += `${promotions.length << (Math.min(4, Math.abs(parseInt(`${gemfile4}`))))}`;
         verticalb += `${1 & parseInt(`${crownz}`)}`;
         sideG /= Math.max(1, promotions.length);
         if (ajax2) {
            break;
         }
      } while (ajax2 && (desc8.length < giftT));
      znews3 <<= Math.min(1, Math.abs(1 - friends1.length));
      for (let d = 0; d < 3; d++) {
         let eventk = 1;
         let checkboxQ = String.fromCharCode(99, 111, 110, 99, 97, 116, 95, 117, 95, 53, 51, 0);
         let upgrade9 = String.fromCharCode(116, 119, 105, 110, 118, 113, 95, 49, 95, 55, 53, 0);
         checkboxQ += `${checkboxQ.length}`;
         for (let h = 0; h < 3; h++) {
            eventk <<= Math.min(Math.abs(eventk), 1);
         }
         for (let s = 0; s < 1; s++) {
            checkboxQ = `${(String.fromCharCode(54, 0) == checkboxQ ? upgrade9.length : checkboxQ.length)}`;
         }
         let tooltipsP = 5643639 >= eventk;
         do {
            eventk >>= Math.min(2, Math.abs(1));
            if (tooltipsP) {
               break;
            }
         } while ((upgrade9.length >= 3) && tooltipsP);
         if (upgrade9.includes(`${checkboxQ.length}`)) {
            checkboxQ = `${2 << (Math.min(3, checkboxQ.length))}`;
         }
         let progress2 = 2.0;
         checkboxQ += "1";
         let rewind1 = 6090540.0 >= progress2;
         do {
            progress2 /= Math.max(parseFloat(`${checkboxQ.length << (Math.min(upgrade9.length, 5))}`), 3);
            if (rewind1) {
               break;
            }
         } while ((2 == (eventk >> (Math.min(Math.abs(1), 1))) && (parseFloat(`${eventk}`) / (Math.max(progress2, 4))) == 3.38) && rewind1);
         eventk &= checkboxQ.length * 3;
         fulln = `${parseInt(`${form4}`) + 3}`;
      }
      if (5.59 >= form4) {
         friends1 += `${(String.fromCharCode(65, 0) == friends1 ? parseInt(`${form4}`) : friends1.length)}`;
      }
      while (!fulln.endsWith(`${znews3}`)) {
         fulln += `${3 - filterN.length}`;
         break;
      }
      forward6.push(friends1.length);
      friends1 = `${forward6.length | 3}`;
      let combinedK = 9397957.0 >= form4;
      do {
         form4 += parseFloat(`${2 % (Math.max(2, znews3))}`);
         if (combinedK) {
            break;
         }
      } while (((parseFloat(`${apps6.length}`) / (Math.max(4, form4))) <= 3.48 && (form4 / (Math.max(3.48, 10))) <= 2.5) && combinedK);
      let backward6 = 5586638 >= expired9.length;
      do {
         let time_aR: Array<any> = [String.fromCharCode(108, 95, 54, 95, 109, 117, 116, 97, 98, 108, 101, 0), String.fromCharCode(112, 95, 55, 95, 97, 108, 115, 101, 0)];
         let sendB = String.fromCharCode(101, 95, 51, 49, 95, 115, 117, 114, 114, 111, 117, 110, 100, 0);
         let filter6 = String.fromCharCode(103, 95, 50, 48, 95, 102, 105, 114, 115, 116, 0);
         let alert9 = String.fromCharCode(99, 97, 116, 99, 104, 115, 105, 103, 110, 97, 108, 95, 114, 95, 55, 57, 0);
         let showU: Map<any, any> = new Map([[String.fromCharCode(121, 95, 50, 50, 95, 112, 116, 104, 114, 101, 97, 100, 0), false], [String.fromCharCode(102, 117, 108, 108, 95, 49, 95, 57, 53, 0), true], [String.fromCharCode(115, 112, 101, 101, 120, 95, 110, 95, 50, 50, 0), true]]);
         sendB = `${(filter6 == String.fromCharCode(75, 0) ? filter6.length : alert9.length)}`;
         let yingg = 5.0;
         time_aR.push(1);
         yingg /= Math.max(4, parseInt(`${yingg}`));
         let becomem = String.fromCharCode(97, 95, 53, 50, 95, 117, 114, 118, 101, 0);
         let miniB = String.fromCharCode(101, 95, 57, 49, 95, 112, 114, 101, 100, 105, 99, 116, 111, 114, 0);
         miniB = `${filter6.length}`;
         if (becomem.length >= 1) {
            showU.set(miniB, 1 >> (Math.min(3, becomem.length)));
         }
         let xvodz = String.fromCharCode(48, 115, 106, 120, 109, 120, 99, 0) == sendB;
         do {
            sendB += `${filter6.length + 2}`;
            if (xvodz) {
               break;
            }
         } while (xvodz && ((1 << (Math.min(3, sendB.length))) >= 1 && (sendB.length << (Math.min(5, time_aR.length))) >= 1));
         showU.set(miniB, miniB.length / 2);
         let animationx = false;
         let shows = true;
         let selectedh = time_aR.length >= 7161771;
         do {
            time_aR = [3];
            if (selectedh) {
               break;
            }
         } while (selectedh && (sendB.length == time_aR.length));
         animationx = sendB == miniB;
         let countdowne = 5;
         if ((5 * showU.size) == 5 || 5 == (becomem.length * showU.size)) {
            becomem += `${((shows ? 1 : 1))}`;
         }
         let acceptedf = 7594568 >= alert9.length;
         do {
            let main_ep = 2.0;
            let roboto0 = String.fromCharCode(115, 95, 49, 49, 95, 100, 105, 115, 97, 112, 112, 101, 97, 114, 0);
            let combineC = 3;
            let shooto = 3.0;
            alert9 += `${filter6.length}`;
            main_ep -= parseFloat(`${1 & parseInt(`${main_ep}`)}`);
            roboto0 += `${combineC % 2}`;
            combineC |= 1 ^ roboto0.length;
            shooto += parseFloat(`${parseInt(`${main_ep}`)}`);
            if (acceptedf) {
               break;
            }
         } while (acceptedf && ((showU.size - 1) <= 1 || (alert9.length - 1) <= 3));
         animationx = (23 >= ((!shows ? alert9.length : 23) + alert9.length));
         for (let t = 0; t < 2; t++) {
            time_aR.push(2 ^ countdowne);
         }
         expired9 += `${forward6.length}`;
         if (backward6) {
            break;
         }
      } while (backward6 && (4.40 > (1.29 - index8) || 1.29 > (parseFloat(`${expired9.length}`) - index8)));
      filterN = [2];
      let faviconG = String.fromCharCode(99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 95, 109, 95, 54, 49, 0);
      for (let j = 0; j < 3; j++) {
         faviconG += "1";
      }
      faviconG = `${2 + faviconG.length}`;
      faviconG = `${faviconG.length | faviconG.length}`;
      field0 = `${filterN.length}`;
      for (let r = 0; r < 2; r++) {
         let resend5 = true;
         let z_countN: Map<any, any> = new Map([[String.fromCharCode(107, 95, 57, 55, 95, 112, 95, 54, 51, 0), String.fromCharCode(116, 114, 97, 115, 104, 111, 108, 100, 95, 103, 95, 54, 49, 0)], [String.fromCharCode(117, 110, 114, 111, 108, 108, 101, 100, 95, 113, 95, 50, 55, 0), String.fromCharCode(113, 95, 52, 48, 95, 100, 101, 112, 114, 101, 99, 97, 116, 101, 100, 0)]]);
         while ((z_countN.size | 1) <= 4) {
            let ajaxe = String.fromCharCode(116, 95, 57, 51, 95, 111, 112, 101, 110, 115, 115, 108, 118, 0);
            let pressurei = 4.0;
            let backwardr = String.fromCharCode(110, 95, 49, 57, 95, 99, 104, 111, 115, 101, 110, 0);
            let bannerO: Map<any, any> = new Map([[String.fromCharCode(105, 112, 109, 111, 118, 105, 101, 95, 99, 95, 56, 51, 0), 640], [String.fromCharCode(116, 95, 51, 55, 95, 100, 101, 108, 105, 118, 101, 114, 101, 100, 0), 563], [String.fromCharCode(102, 95, 51, 95, 97, 118, 97, 116, 97, 114, 115, 0), 783]]);
            z_countN.set(`${resend5}`, ajaxe.length);
            ajaxe = `${2 << (Math.min(1, backwardr.length))}`;
            pressurei *= parseInt(`${pressurei}`);
            backwardr += "1";
            bannerO = new Map([[`${bannerO.size}`, bannerO.size ^ backwardr.length]]);
            break;
         }
         let resultY: Map<any, any> = new Map([[String.fromCharCode(104, 105, 98, 105, 116, 95, 110, 95, 54, 56, 0), String.fromCharCode(99, 108, 111, 115, 101, 95, 52, 95, 51, 0)], [String.fromCharCode(105, 115, 111, 112, 101, 110, 113, 117, 111, 116, 101, 95, 111, 95, 56, 56, 0), String.fromCharCode(99, 95, 54, 54, 95, 115, 117, 109, 109, 0)]]);
         z_countN = new Map([[`${z_countN.size}`, z_countN.size >> (Math.min(Math.abs(2), 1))]]);
         resultY.set(`${resultY.size}`, resultY.size);
         let helperj = true;
         let otherf = String.fromCharCode(117, 95, 51, 95, 110, 111, 116, 104, 105, 110, 103, 0);
         resend5 = (otherf.length * z_countN.size) >= 35;
         helperj = (!helperj ? !helperj : helperj);
         otherf += `${((helperj ? 3 : 5) * (helperj ? 5 : 5))}`;
         let sidew = resend5 ? !resend5 : resend5;
         do {
            resend5 = (((resend5 ? 95 : z_countN.size) % (Math.max(z_countN.size, 7))) == 95);
            if (sidew) {
               break;
            }
         } while ((!resend5 || 2 == (z_countN.size ^ 4)) && sidew);
         let zhuboj = String.fromCharCode(120, 95, 54, 52, 95, 115, 101, 99, 107, 101, 121, 0);
         let hoverS = String.fromCharCode(97, 115, 101, 108, 101, 99, 116, 95, 105, 95, 56, 57, 0);
         let controlk = 8752642 >= z_countN.size;
         do {
            let auto_ygl = 3.0;
            let changeu = String.fromCharCode(107, 95, 51, 49, 95, 108, 105, 110, 103, 101, 114, 0);
            let yellowU = 1;
            let routerw: Map<any, any> = new Map([[String.fromCharCode(99, 95, 51, 55, 95, 99, 111, 110, 115, 116, 114, 117, 99, 116, 0), 309], [String.fromCharCode(112, 114, 101, 115, 115, 117, 114, 101, 95, 121, 95, 57, 54, 0), 415]]);
            let sportt = String.fromCharCode(109, 105, 110, 105, 109, 97, 108, 108, 121, 95, 101, 95, 53, 49, 0);
            z_countN = new Map([[`${z_countN.size}`, 1 << (Math.min(3, Math.abs(z_countN.size)))]]);
            auto_ygl *= (String.fromCharCode(49, 0) == changeu ? changeu.length : routerw.size);
            yellowU &= sportt.length;
            routerw = new Map([[changeu, 2]]);
            sportt = `${parseInt(`${auto_ygl}`)}`;
            if (controlk) {
               break;
            }
         } while ((resend5) && controlk);
         friends1 = `${friends1.length}`;
      }
      l_playerq = `${friends1.length}`;
      field0 += `${parseInt(`${math4}`)}`;
      l_playerq = `${field0.length ^ 2}`;

      setSettings({ name: "none", value: 0 });
   };

   const pan = useMemo(
      () =>
         Gesture.Pan()
            .enabled(enabled && !disabledGesture)
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
                     (settings.name === "none" || settings.name === "leagueGpayExpired")
                  ) {
                     runOnJS(onVolumeChanged)(
                        nativeEvent.y,
                        previousPanPosition.value.y
                     );
                  }
               } else if (
                  absDyDx < 0.05 &&
                  vodType !== "saveClose" &&
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
         let untickH = true;
         let settings6 = 5.0;
         let viewerU = String.fromCharCode(114, 95, 56, 55, 0);
         let countryp: Map<any, any> = new Map([[String.fromCharCode(97, 95, 53, 49, 95, 115, 111, 102, 116, 102, 108, 111, 97, 116, 0), true], [String.fromCharCode(99, 109, 97, 115, 107, 95, 53, 95, 50, 50, 0), true]]);
         let progressf = String.fromCharCode(119, 95, 57, 51, 95, 107, 109, 118, 99, 0);
         let dragT = 0.0;
         let internetf = false;
         let grayX = false;
         let sourceN = String.fromCharCode(113, 95, 53, 48, 95, 116, 111, 114, 101, 100, 0);
         let suggestionM = String.fromCharCode(99, 111, 110, 102, 105, 103, 117, 114, 101, 100, 95, 98, 95, 52, 52, 0);
         let mutedT = String.fromCharCode(100, 95, 57, 48, 95, 109, 111, 117, 115, 0);
         let plusZ = String.fromCharCode(100, 101, 99, 111, 100, 101, 114, 116, 104, 114, 101, 97, 100, 105, 110, 103, 95, 120, 95, 56, 57, 0);
         dragT *= 2 >> (Math.min(1, progressf.length));
         if (!untickH) {
            let smallF = true;
            let xvodJ: Array<any> = [String.fromCharCode(114, 95, 55, 49, 95, 98, 108, 111, 99, 107, 101, 114, 0), String.fromCharCode(110, 95, 49, 57, 95, 97, 121, 98, 114, 105, 0)];
            let bottomb = 3;
            xvodJ.push(2 << (Math.min(Math.abs(bottomb), 2)));
            for (let j = 0; j < 2; j++) {
               xvodJ = [bottomb];
            }
            let thailandV = String.fromCharCode(111, 110, 101, 115, 99, 97, 108, 101, 95, 112, 95, 56, 48, 0);
            let historyf = 2.0;
            let transferM = String.fromCharCode(115, 95, 50, 56, 95, 104, 97, 115, 104, 107, 101, 121, 0);
            xvodJ.push(thailandV.length - 2);
            historyf += parseFloat(`${1 >> (Math.min(3, Math.abs(parseInt(`${historyf}`))))}`);
            transferM = `${parseInt(`${historyf}`) & transferM.length}`;
            smallF = ((xvodJ.length + (smallF ? xvodJ.length : 38)) == 38);
            smallF = bottomb <= 94;
            let pressureI = 8851558 >= xvodJ.length;
            do {
               let tailH: Map<any, any> = new Map([[String.fromCharCode(111, 95, 49, 48, 95, 110, 105, 109, 97, 116, 105, 111, 110, 0), 689], [String.fromCharCode(103, 95, 52, 51, 95, 98, 116, 111, 98, 105, 110, 0), 99]]);
               let modalh = 1;
               let shareG = 5.0;
               let yellowd = String.fromCharCode(104, 97, 118, 101, 95, 98, 95, 50, 0);
               xvodJ = [1 ^ xvodJ.length];
               tailH = new Map([[`${tailH.size}`, parseInt(`${shareG}`) ^ tailH.size]]);
               modalh ^= tailH.size;
               shareG *= parseFloat(`${3 ^ parseInt(`${shareG}`)}`);
               yellowd += `${(yellowd == String.fromCharCode(121, 0) ? yellowd.length : parseInt(`${shareG}`))}`;
               if (pressureI) {
                  break;
               }
            } while (pressureI && ((bottomb % (Math.max(xvodJ.length, 5))) >= 3 || 3 >= (xvodJ.length % (Math.max(8, bottomb)))));
            let auto_dN = String.fromCharCode(105, 110, 115, 101, 114, 116, 101, 114, 95, 99, 95, 49, 49, 0);
            thailandV = `${1 / (Math.max(5, xvodJ.length))}`;
            internetf = countryp.get(`${dragT}`) != null;
         }
         while ((countryp.size & 1) > 4) {
            viewerU = `${((grayX ? 5 : 5))}`;
            break;
         }
         grayX = sourceN.includes(`${grayX}`);
         suggestionM = "3";
         let private_mV = String.fromCharCode(102, 95, 56, 52, 95, 116, 101, 108, 0);
         let darkt = String.fromCharCode(117, 95, 55, 51, 95, 102, 99, 110, 116, 108, 0);
         let humiditym = String.fromCharCode(109, 101, 109, 99, 109, 112, 95, 115, 95, 57, 49, 0);
         humiditym += "3";
         private_mV += `${2 * private_mV.length}`;
         private_mV = `${darkt.length * private_mV.length}`;
         darkt = `${private_mV.length}`;
         for (let g = 0; g < 3; g++) {
            darkt = `${private_mV.length}`;
         }
         while (!darkt.startsWith(private_mV)) {
            let ballE = String.fromCharCode(113, 95, 57, 53, 95, 115, 112, 114, 105, 116, 101, 0);
            let dialogj = 3;
            darkt = "1";
            ballE += `${(String.fromCharCode(65, 0) == ballE ? dialogj : ballE.length)}`;
            dialogj >>= Math.min(Math.abs(1), 3);
            break;
         }
         let bootsplashD = humiditym == String.fromCharCode(120, 116, 49, 0);
         do {
            humiditym = `${(String.fromCharCode(115, 0) == darkt ? humiditym.length : darkt.length)}`;
            if (bootsplashD) {
               break;
            }
         } while ((humiditym.length <= private_mV.length) && bootsplashD);
         darkt += `${darkt.length / (Math.max(humiditym.length, 5))}`;
         while (!humiditym.startsWith(`${darkt.length}`)) {
            let sendy = String.fromCharCode(100, 110, 111, 119, 95, 108, 95, 50, 55, 0);
            let descg: Map<any, any> = new Map([[String.fromCharCode(107, 105, 115, 115, 95, 52, 95, 51, 53, 0), false], [String.fromCharCode(102, 117, 110, 99, 115, 95, 57, 95, 49, 57, 0), false]]);
            let navigationo = true;
            let listH = 0.0;
            let starg = 5;
            humiditym = `${(String.fromCharCode(97, 0) == sendy ? sendy.length : parseInt(`${listH}`))}`;
            descg = new Map([[`${descg.size}`, (1 * (navigationo ? 4 : 1))]]);
            navigationo = null != descg.get(`${navigationo}`);
            listH -= (parseFloat(`${(navigationo ? 3 : 1) + 2}`));
            starg *= ((navigationo ? 4 : 5) % (Math.max(descg.size, 8)));
            break;
         }
         viewerU = "1";
         let tickr = 2.0;
         for (let l = 0; l < 3; l++) {
            let sentry6 = 0;
            let whatsappC = String.fromCharCode(115, 95, 49, 50, 95, 115, 119, 105, 114, 108, 0);
            let injuryA: Array<any> = [356, 938, 110];
            tickr += parseFloat(`${whatsappC.length << (Math.min(2, Math.abs(sentry6)))}`);
            sentry6 ^= injuryA.length;
            whatsappC += `${injuryA.length * 2}`;
         }
         for (let m = 0; m < 3; m++) {
            tickr *= parseFloat(`${parseInt(`${tickr}`) % 1}`);
         }
         let single_ = tickr <= 8715534.0;
         do {
            let paginationC = true;
            let foundU: Map<any, any> = new Map([[String.fromCharCode(97, 114, 101, 95, 48, 95, 55, 0), true], [String.fromCharCode(112, 111, 111, 108, 95, 99, 95, 54, 52, 0), false], [String.fromCharCode(115, 95, 49, 54, 95, 109, 106, 112, 101, 103, 100, 101, 99, 0), false]]);
            let inviteN: Array<any> = [207, 895];
            let megaphoneD = 3;
            let tickp: Map<any, any> = new Map([[String.fromCharCode(114, 117, 108, 101, 95, 104, 95, 54, 56, 0), String.fromCharCode(101, 95, 52, 49, 95, 102, 114, 101, 113, 0)], [String.fromCharCode(115, 105, 109, 117, 108, 97, 116, 101, 95, 108, 95, 52, 48, 0), String.fromCharCode(112, 95, 52, 57, 0)], [String.fromCharCode(120, 117, 118, 109, 118, 115, 95, 112, 95, 52, 51, 0), String.fromCharCode(120, 95, 57, 56, 95, 115, 117, 98, 100, 101, 109, 117, 120, 101, 114, 0)]]);
            tickr -= parseFloat(`${2 + foundU.size}`);
            paginationC = inviteN.length >= tickp.size;
            foundU = new Map([[`${tickp.size}`, 1 << (Math.min(4, Math.abs(tickp.size)))]]);
            inviteN = [tickp.size - 1];
            megaphoneD -= tickp.size;
            if (single_) {
               break;
            }
         } while ((tickr < tickr) && single_);
         viewerU += `${((internetf ? 4 : 5))}`;

         if (!isDoubleTap.value) {

            while (viewerU.length >= 2) {
               viewerU += `${(countryp.size >> (Math.min(4, Math.abs((internetf ? 4 : 3)))))}`;
               break;
            }
            viewerU += `${parseInt(`${settings6}`)}`;
            let questk = sourceN.length >= 8455831;
            do {
               let mutedC = 0;
               let streaming2: Map<any, any> = new Map([[String.fromCharCode(116, 101, 108, 95, 104, 95, 50, 48, 0), 473], [String.fromCharCode(100, 95, 48, 95, 114, 101, 99, 111, 110, 110, 101, 99, 116, 101, 100, 0), 244], [String.fromCharCode(102, 95, 50, 95, 115, 116, 97, 116, 0), 582]]);
               mutedC %= Math.max(2 | streaming2.size, 1);
               mutedC >>= Math.min(Math.abs(2 * mutedC), 2);
               while (1 == mutedC) {
                  mutedC <<= Math.min(2, Math.abs(mutedC % (Math.max(mutedC, 10))));
                  break;
               }
               sourceN = `${parseInt(`${settings6}`) & 2}`;
               if (questk) {
                  break;
               }
            } while (questk && (sourceN.length > 1 && !untickH));
            if (sourceN.endsWith(`${dragT}`)) {
               let sellX = 0.0;
               let leftS = 3;
               let fastforwardH: Array<any> = [String.fromCharCode(119, 95, 52, 57, 95, 98, 102, 114, 97, 109, 101, 115, 0), String.fromCharCode(120, 95, 57, 57, 95, 105, 110, 116, 114, 97, 120, 104, 117, 102, 0), String.fromCharCode(114, 101, 99, 116, 115, 95, 98, 95, 55, 57, 0)];
               let catagoryR = 0.0;
               if (3 < (5 | fastforwardH.length)) {
                  sellX += fastforwardH.length;
               }
               leftS >>= Math.min(4, Math.abs(parseInt(`${catagoryR}`)));
               let short_gvM = 2;
               fastforwardH.push(short_gvM);
               for (let f = 0; f < 3; f++) {
                  sellX += parseInt(`${sellX}`);
               }
               let sports0 = 8025362 <= leftS;
               do {
                  let g_titleY = false;
                  let gmailo: Array<any> = [494, 81, 722];
                  let guideb: Map<any, any> = new Map([[String.fromCharCode(114, 105, 110, 103, 95, 54, 95, 52, 50, 0), String.fromCharCode(100, 95, 49, 50, 95, 112, 114, 101, 102, 101, 114, 0)], [String.fromCharCode(106, 95, 53, 55, 95, 108, 111, 111, 112, 98, 97, 99, 107, 0), String.fromCharCode(109, 101, 97, 115, 117, 114, 101, 109, 101, 110, 116, 115, 95, 117, 95, 49, 49, 0)]]);
                  let whatsappA = String.fromCharCode(116, 105, 99, 107, 115, 95, 51, 95, 49, 55, 0);
                  leftS &= 1;
                  g_titleY = whatsappA.length <= 16 && guideb.size <= 16;
                  gmailo.push((String.fromCharCode(110, 0) == whatsappA ? whatsappA.length : guideb.size));
                  if (sports0) {
                     break;
                  }
               } while ((2 >= leftS) && sports0);
               fastforwardH.push(2 ^ parseInt(`${sellX}`));
               if (catagoryR < fastforwardH.length) {
                  let buttonC = String.fromCharCode(112, 95, 50, 52, 95, 119, 105, 110, 97, 114, 109, 0);
                  let flyerq = 0.0;
                  let constantsa = 5;
                  catagoryR += 3;
                  buttonC = `${parseInt(`${flyerq}`)}`;
                  flyerq /= Math.max(4, parseFloat(`${2}`));
                  constantsa ^= parseInt(`${flyerq}`) >> (Math.min(buttonC.length, 3));
               }
               leftS %= Math.max(3, 3 << (Math.min(Math.abs(parseInt(`${sellX}`)), 1)));
               let shrinkj = 9457793.0 <= sellX;
               do {
                  sellX -= 2;
                  if (shrinkj) {
                     break;
                  }
               } while (shrinkj && ((2 >> (Math.min(1, Math.abs(leftS)))) > 4));
               fastforwardH = [leftS / (Math.max(parseInt(`${catagoryR}`), 9))];
               let fill2 = sellX >= 6095721.0;
               do {
                  sellX /= Math.max(parseInt(`${catagoryR}`) % (Math.max(parseInt(`${sellX}`), 3)), 5);
                  if (fill2) {
                     break;
                  }
               } while (fill2 && ((sellX - 5.94) <= 2.23 && 5.58 <= (5.94 * sellX)));
               let small1 = 2.0;
               dragT += 1 >> (Math.min(2, progressf.length));
            }
            internetf = 84.78 > dragT;
            let k_lockn = sourceN.length <= 5353689;
            do {
               let expiredi = String.fromCharCode(98, 97, 115, 101, 108, 105, 110, 101, 95, 115, 95, 54, 51, 0);
               let castw = 2.0;
               castw *= parseFloat(`${expiredi.length}`);
               let hoverR = 0;
               if (2.87 == castw) {
                  expiredi = `${hoverR / (Math.max(parseInt(`${castw}`), 5))}`;
               }
               expiredi += `${parseInt(`${castw}`) * 3}`;
               if (!expiredi.startsWith(`${hoverR}`)) {
                  let backwardt: Map<any, any> = new Map([[String.fromCharCode(106, 111, 121, 102, 117, 108, 95, 102, 95, 51, 52, 0), String.fromCharCode(100, 95, 49, 54, 95, 111, 119, 110, 101, 114, 0)], [String.fromCharCode(105, 110, 100, 105, 99, 97, 116, 105, 111, 110, 95, 114, 95, 54, 53, 0), String.fromCharCode(99, 104, 114, 111, 109, 97, 107, 101, 121, 95, 106, 95, 56, 51, 0)], [String.fromCharCode(119, 95, 56, 55, 95, 115, 101, 103, 117, 101, 0), String.fromCharCode(100, 101, 109, 111, 116, 101, 95, 98, 95, 51, 0)]]);
                  let volumef: Array<any> = [1, 275, 277];
                  let temperatureQ = 4.0;
                  let langkeyx = String.fromCharCode(100, 101, 109, 97, 110, 100, 95, 122, 95, 52, 56, 0);
                  hoverR >>= Math.min(Math.abs(parseInt(`${castw}`)), 2);
                  backwardt.set(langkeyx, langkeyx.length);
                  volumef.push(parseInt(`${temperatureQ}`) | 1);
                  temperatureQ += parseFloat(`${1 ^ backwardt.size}`);
               }
               let sina1 = 5883624.0 >= castw;
               do {
                  castw *= parseFloat(`${3}`);
                  if (sina1) {
                     break;
                  }
               } while ((castw < parseFloat(`${expiredi.length}`)) && sina1);
               sourceN += `${parseInt(`${settings6}`) & 3}`;
               if (k_lockn) {
                  break;
               }
            } while (k_lockn && (suggestionM == sourceN));
            let internetx = sourceN == String.fromCharCode(95, 52, 52, 114, 56, 0);
            do {
               let volumeA = false;
               let predictione = String.fromCharCode(114, 95, 56, 50, 95, 100, 117, 109, 112, 101, 114, 0);
               let sinaF: Array<any> = [993, 74];
               for (let k = 0; k < 1; k++) {
                  let stations2 = false;
                  let whatsapp3: Map<any, any> = new Map([[String.fromCharCode(107, 95, 57, 50, 95, 98, 108, 105, 110, 100, 105, 110, 103, 0), false], [String.fromCharCode(115, 108, 111, 112, 95, 122, 95, 54, 57, 0), false], [String.fromCharCode(99, 108, 111, 115, 101, 99, 98, 95, 101, 95, 50, 56, 0), false]]);
                  let xvodw = String.fromCharCode(108, 95, 50, 95, 106, 115, 105, 109, 100, 101, 120, 116, 0);
                  let penaltyp: Map<any, any> = new Map([[String.fromCharCode(101, 95, 52, 95, 102, 97, 105, 108, 115, 0), String.fromCharCode(99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 95, 115, 95, 53, 55, 0)], [String.fromCharCode(108, 97, 121, 111, 117, 116, 95, 113, 95, 52, 48, 0), String.fromCharCode(111, 95, 56, 56, 95, 118, 111, 105, 112, 0)], [String.fromCharCode(99, 95, 57, 49, 95, 109, 101, 97, 115, 117, 114, 101, 109, 101, 110, 116, 0), String.fromCharCode(103, 95, 57, 56, 95, 111, 112, 101, 114, 97, 116, 111, 114, 115, 0)]]);
                  predictione += `${predictione.length}`;
                  stations2 = (((stations2 ? 37 : whatsapp3.size) % (Math.max(whatsapp3.size, 2))) == 37);
                  xvodw = `${1 + whatsapp3.size}`;
                  penaltyp.set(`${stations2}`, ((stations2 ? 4 : 4)));
               }
               for (let f = 0; f < 3; f++) {
                  predictione = `${(sinaF.length + (volumeA ? 5 : 1))}`;
               }
               predictione = `${sinaF.length}`;
               predictione += "1";
               predictione = `${(sinaF.length << (Math.min(4, Math.abs((volumeA ? 4 : 5)))))}`;
               if (volumeA || 4 < predictione.length) {
                  volumeA = sinaF.includes(volumeA);
               }
               let sheetJ = String.fromCharCode(114, 95, 49, 95, 114, 101, 113, 117, 105, 114, 105, 110, 103, 0);
               predictione += `${sinaF.length >> (Math.min(Math.abs(3), 5))}`;
               sheetJ = `${(sheetJ == String.fromCharCode(122, 0) ? sheetJ.length : sheetJ.length)}`;
               sinaF.push(1);
               while (3 <= (2 >> (Math.min(4, sinaF.length)))) {
                  predictione = `${1 % (Math.max(7, sinaF.length))}`;
                  break;
               }
               sourceN += "1";
               if (internetx) {
                  break;
               }
            } while (internetx && (!sourceN.startsWith(`${grayX}`)));
            onSingleTap(isDoubleTap.value);
         }

         isDoubleTap.value = false;
      }, 200),
      [onSingleTap]
   );

   const composed = disableControlsExceptTap ? null : vodType === 'live' ? pan : Gesture.Simultaneous(pan, doubleTap);

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
                           icon={settings.value === 0 ? "sportLaunchWatch" : "moduleFrame_jsActive"}
                        />
                     )}
                     {showSlider && settings.name === "leagueGpayExpired" && (
                        <BrightnessVolumeSlider
                           percent={settings.value * 100}
                           icon={settings.value === 0 ? "unselectedDark" : "dangerThumbnailMode"}
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
                        icon={settings.value === 0 ? "sportLaunchWatch" : "moduleFrame_jsActive"}
                     />
                  )}
                  {showSlider && settings.name === "leagueGpayExpired" && (
                     <BrightnessVolumeSlider
                        percent={settings.value * 100}
                        icon={settings.value === 0 ? "unselectedDark" : "dangerThumbnailMode"}
                     />
                  )}
               </View>
            )}
         </View>
      </TouchableWithoutFeedback>
   );
};
