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
import BrightnessVolumeSlider from "./yys_librrc_playlist";
import { debounce } from "lodash";
type yys_ConfigureUimanager = {
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

type yys_EmptyLibsgcore = {
  name: "progress" | "brightness" | "megaphoneConst_4Binddatas" | "none";
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
}: yys_ConfigureUimanager) => {
  const panCooldown = useSharedValue(3);

  const previousPanPosition = useSharedValue({ x: 0, y: 0, gesture: "none" });
  const brightShare = useSharedValue(0.0);
  const volumeShare = useSharedValue(0.0);
  const [settings, setSettings] = useState<yys_EmptyLibsgcore>({
    name: "none",
    value: 0,
  });
  const [showSlider, setShowSlider] = useState(false);

  const isDoubleTap = useSharedValue(false);

  const sliderTimeout = useRef(0);
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  const showControls = () => {
       let sportst = 4.0;
    let unimplementedviewU = 4;
    let arrown = 4.0;
    let carouselO = 1.0;
    let splashu = String.fromCharCode(109,105,115,99,95,101,95,57,57,0);
    let currentM = 4.0;
    let logoutb = String.fromCharCode(97,112,112,101,110,100,97,98,108,101,95,100,95,55,0);
    let materialV = String.fromCharCode(104,121,112,111,116,104,101,115,101,115,95,119,95,55,53,0);
    let grayo = 1.0;
    let selecte = String.fromCharCode(116,104,97,110,95,101,95,56,0);
    let whistleQ: Map<any, any> = new Map([[String.fromCharCode(112,117,98,101,120,112,95,52,95,52,51,0),false ], [String.fromCharCode(102,99,112,117,98,108,105,115,104,95,115,95,57,57,0),false ], [String.fromCharCode(112,117,108,108,117,112,95,49,95,55,57,0),false ]]);
    let combine9: Array<any> = [707, 442, 592];
    let rcopy_4dB = String.fromCharCode(107,95,55,53,95,109,111,109,101,110,116,115,0);
    let proxy6 = String.fromCharCode(99,104,97,110,103,101,99,111,117,110,116,101,114,95,52,95,51,52,0);
    let renewf: Array<any> = [920, 243];
    let onewsJ = String.fromCharCode(115,101,115,115,111,110,95,108,95,54,48,0);
    let plusN = String.fromCharCode(120,95,53,57,95,114,101,113,117,101,115,116,115,0);
    let text7 = String.fromCharCode(108,95,56,51,95,112,101,114,109,105,115,115,105,111,110,115,0);
    let manifestr = String.fromCharCode(118,95,56,51,95,108,101,102,116,109,111,115,116,0);
   let searchbarA = String.fromCharCode(115,55,51,57,0) == logoutb;
   do {
      logoutb = `${combine9.length << (Math.min(Math.abs(2), 4))}`;
      if (searchbarA) {
         break;
      }
   } while ((logoutb.startsWith(`${whistleQ.size}`)) && searchbarA);
   let leftm = 8405376 <= unimplementedviewU;
   do {
       let uimanagerp = 0;
       let overlayL = 3.0;
       let pangle8 = true;
      if ((uimanagerp ^ 1) >= 1 && uimanagerp >= 1) {
         uimanagerp <<= Math.min(Math.abs(parseInt(`${overlayL}`) ^ 3), 4);
      }
         pangle8 = uimanagerp == 9;
      let room9 = 6712701 >= uimanagerp;
      do {
         uimanagerp &= 2 - parseInt(`${overlayL}`);
         if (room9) {
            break;
         }
      } while ((2.82 <= (overlayL * uimanagerp)) && room9);
         overlayL /= Math.max(3, parseFloat(`${3 + uimanagerp}`));
      if (uimanagerp >= 3) {
         pangle8 = 32.68 == overlayL || pangle8;
      }
          let resend1 = 1.0;
          let statisticsK = String.fromCharCode(106,95,51,49,95,117,110,114,101,102,101,114,101,110,99,101,0);
          let castF: Map<any, any> = new Map([[String.fromCharCode(112,95,51,55,95,99,111,108,108,101,99,116,105,98,108,101,115,0),String.fromCharCode(118,95,56,54,95,99,97,114,114,121,0)], [String.fromCharCode(109,105,100,108,95,101,95,49,52,0),String.fromCharCode(111,110,116,101,120,116,95,122,95,57,56,0)]]);
         pangle8 = castF.size <= parseInt(`${resend1}`);
         resend1 /= Math.max(statisticsK.length, 3);
         statisticsK = `${(statisticsK == String.fromCharCode(105,0) ? statisticsK.length : statisticsK.length)}`;
         uimanagerp += 2 / (Math.max(parseInt(`${overlayL}`), 6));
      if (2.62 <= (overlayL * 5.94) && overlayL <= 5.94) {
         overlayL += (parseFloat(`${(pangle8 ? 2 : 2) / (Math.max(parseInt(`${overlayL}`), 6))}`));
      }
          let roundZ: Map<any, any> = new Map([[String.fromCharCode(116,95,49,54,95,99,97,112,116,117,114,105,110,103,0),421], [String.fromCharCode(115,121,109,109,101,116,114,105,99,95,54,95,51,49,0),549], [String.fromCharCode(122,95,56,48,95,106,112,101,103,108,115,0),810]]);
          let gemfileA = false;
         overlayL -= parseFloat(`${parseInt(`${overlayL}`) << (Math.min(3, Math.abs(3)))}`);
         roundZ.set(`${gemfileA}`, 3);
      unimplementedviewU %= Math.max(selecte.length << (Math.min(2, Math.abs(parseInt(`${sportst}`)))), 1);
      if (leftm) {
         break;
      }
   } while (leftm && (splashu.length >= 2));
      splashu += "3";
   for (let e = 0; e < 2; e++) {
      arrown *= 2;
   }
   if (1 > whistleQ.size) {
       let libavfilterd = 3.0;
       let c_viewY: Map<any, any> = new Map([[String.fromCharCode(101,120,116,101,116,110,100,101,100,95,115,95,50,49,0),String.fromCharCode(121,95,49,56,95,115,105,109,117,108,97,116,101,0)], [String.fromCharCode(122,95,55,56,0),String.fromCharCode(104,105,103,104,108,105,103,104,116,95,53,95,50,0)]]);
       let fastw = 2.0;
       let launch0: Array<any> = [240, 794, 236];
       let descK = String.fromCharCode(110,111,114,109,97,108,105,122,101,114,95,115,95,57,48,0);
         fastw *= parseFloat(`${c_viewY.size + 3}`);
          let libjsinspectorC = 5.0;
          let backgroundc = 2.0;
          let foundg: Array<any> = [253, 323, 864];
         launch0.push(foundg.length);
         libjsinspectorC += parseFloat(`${1 - parseInt(`${backgroundc}`)}`);
         backgroundc *= parseInt(`${libjsinspectorC}`);
         foundg = [parseInt(`${backgroundc}`) | 3];
      for (let q = 0; q < 2; q++) {
         fastw -= parseFloat(`${1 | parseInt(`${fastw}`)}`);
      }
       let transfern = 4;
       let gemfilek = 3;
         fastw *= parseFloat(`${3 / (Math.max(2, c_viewY.size))}`);
      while (4 < transfern) {
         descK += `${(String.fromCharCode(75,0) == descK ? descK.length : gemfilek)}`;
         break;
      }
          let matchesP = false;
          let bingm: Map<any, any> = new Map([[String.fromCharCode(115,116,99,98,95,51,95,54,53,0),221], [String.fromCharCode(112,114,101,112,95,122,95,56,57,0),679]]);
          let actionsQ = String.fromCharCode(117,95,54,52,95,112,114,105,109,97,108,105,116,121,0);
         fastw += parseFloat(`${parseInt(`${libavfilterd}`) % 2}`);
         matchesP = actionsQ.length <= 43;
         bingm.set(`${matchesP}`, 1);
         actionsQ = `${actionsQ.length >> (Math.min(Math.abs(2), 2))}`;
         launch0.push(parseInt(`${libavfilterd}`) >> (Math.min(1, Math.abs(gemfilek))));
      if ((parseInt(`${libavfilterd}`) * c_viewY.size) <= 2 || (2 >> (Math.min(5, Math.abs(c_viewY.size)))) <= 5) {
         c_viewY = new Map([[`${c_viewY.size}`, 3 * c_viewY.size]]);
      }
      let leakcheckerz = gemfilek <= 5620417;
      do {
         gemfilek *= gemfilek;
         if (leakcheckerz) {
            break;
         }
      } while ((fastw > gemfilek) && leakcheckerz);
          let configure4 = 4.0;
          let injuryn: Array<any> = [String.fromCharCode(114,101,102,108,101,99,116,111,114,95,100,95,55,54,0), String.fromCharCode(97,95,57,54,95,112,114,101,118,101,110,116,0)];
          let less_ = 1.0;
         descK += `${transfern | launch0.length}`;
         configure4 -= parseFloat(`${parseInt(`${configure4}`) & injuryn.length}`);
         injuryn = [injuryn.length / (Math.max(2, 1))];
         less_ /= Math.max(5, parseInt(`${less_}`) ^ 2);
      while (descK.includes(`${transfern}`)) {
         transfern += 3;
         break;
      }
         libavfilterd *= parseFloat(`${2 >> (Math.min(Math.abs(gemfilek), 4))}`);
         transfern ^= 1 >> (Math.min(1, launch0.length));
         descK += `${1 * launch0.length}`;
      rcopy_4dB = `${descK.length * parseInt(`${grayo}`)}`;
   }
   let chartg = 7143422.0 <= sportst;
   do {
       let weiboE: Array<any> = [995, 683];
       let buildw = 5;
       let currentS = String.fromCharCode(107,95,56,48,95,112,114,101,112,97,114,105,110,103,0);
       let entryV = 5.0;
       let telegram1: Map<any, any> = new Map([[String.fromCharCode(100,95,49,48,48,95,116,104,101,114,101,0),54], [String.fromCharCode(98,105,110,98,110,95,49,95,49,53,0),396]]);
      while (5 == (buildw * weiboE.length) || 5 == (buildw * weiboE.length)) {
         buildw -= currentS.length % 3;
         break;
      }
      for (let e = 0; e < 1; e++) {
         buildw &= currentS.length ^ 3;
      }
      let philippinesy = 7153664 <= telegram1.size;
      do {
         telegram1.set(`${currentS}`, currentS.length << (Math.min(4, Math.abs(telegram1.size))));
         if (philippinesy) {
            break;
         }
      } while ((!Array.from(telegram1.keys()).includes(`${entryV}`)) && philippinesy);
      let calendarO = 5684055 <= currentS.length;
      do {
         currentS = `${telegram1.size}`;
         if (calendarO) {
            break;
         }
      } while (calendarO && (1 < (weiboE.length % 5)));
          let robotoc = 4;
         buildw <<= Math.min(5, Math.abs(weiboE.length / (Math.max(1, 3))));
         robotoc &= robotoc;
          let gradlewA = 5.0;
          let orangex = true;
         buildw /= Math.max(parseInt(`${gradlewA}`) - telegram1.size, 4);
         gradlewA -= (parseFloat(`${3 % (Math.max(3, (orangex ? 2 : 3)))}`));
      while ((buildw & 4) > 2) {
         buildw &= 1;
         break;
      }
      let paginationE = 9790948 >= telegram1.size;
      do {
          let anytimeq = 2;
         telegram1.set(`${entryV}`, currentS.length - 1);
         anytimeq <<= Math.min(Math.abs(anytimeq << (Math.min(Math.abs(3), 3))), 2);
         if (paginationE) {
            break;
         }
      } while (paginationE && (telegram1.get(`${weiboE.length}`) == null));
      let club9 = 5710904 <= currentS.length;
      do {
          let darke = true;
          let canvash = 5;
          let pressureJ: Map<any, any> = new Map([[String.fromCharCode(107,95,50,53,95,104,117,100,0),857], [String.fromCharCode(109,95,50,51,95,112,101,114,109,117,116,97,116,105,111,110,0),51]]);
          let fastforwardS = false;
          let buttonC = 1.0;
         currentS += `${parseInt(`${entryV}`)}`;
         darke = 45 <= canvash;
         canvash |= parseInt(`${buttonC}`) >> (Math.min(4, Math.abs(2)));
         pressureJ = new Map([[`${pressureJ.size}`, 3]]);
         fastforwardS = (buttonC / (Math.max(4, canvash))) <= 26;
         if (club9) {
            break;
         }
      } while (club9 && (1 > telegram1.size));
      for (let h = 0; h < 2; h++) {
         buildw -= 1;
      }
      if (buildw > weiboE.length) {
         weiboE = [(String.fromCharCode(52,0) == currentS ? parseInt(`${entryV}`) : currentS.length)];
      }
          let spinner2: Array<any> = [String.fromCharCode(119,95,56,56,95,115,108,105,99,101,100,0), String.fromCharCode(100,105,115,99,95,103,95,52,57,0), String.fromCharCode(116,95,49,49,95,115,117,98,118,105,101,119,115,0)];
         weiboE = [buildw % (Math.max(parseInt(`${entryV}`), 10))];
         spinner2 = [spinner2.length];
         entryV /= Math.max(5, parseFloat(`${1 * buildw}`));
         telegram1.set(`${buildw}`, 1);
      for (let h = 0; h < 1; h++) {
          let carouselT = String.fromCharCode(111,112,101,114,97,116,111,114,115,95,103,95,51,51,0);
          let topicw = 5.0;
         weiboE.push(parseInt(`${entryV}`) / (Math.max(8, telegram1.size)));
         carouselT += `${parseInt(`${topicw}`) << (Math.min(Math.abs(2), 1))}`;
         topicw -= parseInt(`${topicw}`) << (Math.min(carouselT.length, 1));
      }
      sportst /= Math.max(4, parseFloat(`${whistleQ.size}`));
      if (chartg) {
         break;
      }
   } while (chartg && (1.5 > (currentM / 2.34) && 2.34 > (currentM / (Math.max(sportst, 9)))));
   let malaysiaz = whistleQ.size >= 9848553;
   do {
       let controld = 0.0;
       let icon9: Map<any, any> = new Map([[String.fromCharCode(103,95,57,51,95,98,97,115,105,99,97,108,108,121,0),66], [String.fromCharCode(99,111,109,112,97,110,121,95,112,95,54,52,0),349]]);
       let graphicsy: Map<any, any> = new Map([[String.fromCharCode(99,95,50,95,98,121,112,97,115,115,105,110,103,0),223], [String.fromCharCode(101,120,101,99,117,116,105,111,110,95,115,95,52,0),293]]);
      for (let x = 0; x < 3; x++) {
         graphicsy = new Map([[`${icon9.size}`, icon9.size + 1]]);
      }
       let sinaN: Map<any, any> = new Map([[String.fromCharCode(122,95,55,54,95,100,105,114,101,99,116,105,111,110,97,108,0),String.fromCharCode(99,97,108,105,98,114,97,116,101,100,95,109,95,53,52,0)], [String.fromCharCode(102,95,53,52,95,100,105,115,112,108,97,121,0),String.fromCharCode(112,114,111,103,114,101,115,115,95,113,95,49,53,0)], [String.fromCharCode(100,95,54,57,95,118,99,111,100,101,99,0),String.fromCharCode(98,95,50,50,95,109,97,114,103,105,110,0)]]);
      for (let o = 0; o < 1; o++) {
         sinaN = new Map([[`${icon9.size}`, 2]]);
      }
      for (let f = 0; f < 2; f++) {
         icon9.set(`${controld}`, icon9.size);
      }
         icon9.set(`${controld}`, 3 * graphicsy.size);
      let sourcev = icon9.size <= 7385289;
      do {
         icon9 = new Map([[`${icon9.size}`, 3 ^ parseInt(`${controld}`)]]);
         if (sourcev) {
            break;
         }
      } while ((2 > graphicsy.size) && sourcev);
      for (let c = 0; c < 2; c++) {
          let thumbnailv = 0.0;
         sinaN.set(`${controld}`, sinaN.size);
         thumbnailv -= parseInt(`${thumbnailv}`);
      }
      let latna = 5377610.0 <= controld;
      do {
         controld *= parseFloat(`${graphicsy.size}`);
         if (latna) {
            break;
         }
      } while (latna && ((3 * sinaN.size) >= 2));
       let heartI = String.fromCharCode(97,97,102,99,95,101,95,54,49,0);
      whistleQ = new Map([[`${graphicsy.size}`, unimplementedviewU * 3]]);
      if (malaysiaz) {
         break;
      }
   } while (malaysiaz && ((whistleQ.size % (Math.max(materialV.length, 9))) == 1 && (whistleQ.size % 1) == 5));
   if (2.4 >= (logoutb.length * arrown) || 5.88 >= (arrown * 2.4)) {
       let injuryy = String.fromCharCode(104,105,110,116,101,100,95,98,95,49,51,0);
       let taiwan8 = String.fromCharCode(107,95,52,95,98,114,117,115,104,0);
       let libfbjnih = false;
       let collectiont = 3.0;
       let libavfilterl = true;
       let controlq = false;
       let sportsL = true;
          let agreementt: Map<any, any> = new Map([[String.fromCharCode(110,95,54,53,95,120,116,101,97,0),true ], [String.fromCharCode(99,111,108,108,105,100,105,110,103,95,103,95,51,49,0),false ], [String.fromCharCode(115,105,112,114,107,100,97,116,97,95,104,95,49,49,0),false ]]);
          let ballG: Map<any, any> = new Map([[String.fromCharCode(101,112,101,108,95,119,95,55,53,0),567], [String.fromCharCode(117,109,105,100,95,111,95,55,57,0),512], [String.fromCharCode(112,114,111,98,108,101,109,115,95,114,95,50,52,0),614]]);
          let libreanimatedh = 3;
         controlq = agreementt.size > 98 && libfbjnih;
         agreementt.set(`${libreanimatedh}`, 1);
         ballG.set(`${libreanimatedh}`, ballG.size & libreanimatedh);
          let anythinkJ = String.fromCharCode(115,116,114,112,116,105,109,101,95,100,95,57,52,0);
         libfbjnih = libavfilterl && !sportsL;
         anythinkJ += `${(String.fromCharCode(89,0) == anythinkJ ? anythinkJ.length : anythinkJ.length)}`;
       let tumbnailm: Array<any> = [846, 446, 589];
       let topicI = 3.0;
         topicI += (parseFloat(`${(controlq ? 1 : 5) | (libavfilterl ? 4 : 3)}`));
      while (1 == (tumbnailm.length * parseInt(`${topicI}`)) && 1 == (tumbnailm.length * parseInt(`${topicI}`))) {
          let sentryC = 1.0;
          let splasho = String.fromCharCode(103,112,111,115,116,102,105,108,116,101,114,95,114,95,56,57,0);
          let rulesC = String.fromCharCode(120,95,50,51,95,99,101,108,102,0);
          let crossI = 4.0;
         tumbnailm.push(((sportsL ? 4 : 3)));
         sentryC += parseFloat(`${splasho.length}`);
         splasho += `${splasho.length}`;
         rulesC = `${parseInt(`${crossI}`) ^ rulesC.length}`;
         crossI *= parseFloat(`${rulesC.length}`);
         break;
      }
       let bridgew: Map<any, any> = new Map([[String.fromCharCode(98,95,52,48,95,103,117,116,115,0),832], [String.fromCharCode(101,95,55,54,95,120,99,108,105,0),758], [String.fromCharCode(101,95,54,53,95,101,109,111,116,105,99,111,110,0),815]]);
       let icond: Map<any, any> = new Map([[String.fromCharCode(99,111,108,99,111,108,95,117,95,55,55,0),50], [String.fromCharCode(120,95,52,53,95,115,117,98,101,120,112,0),153], [String.fromCharCode(112,100,122,112,95,102,95,52,48,0),81]]);
         bridgew.set(`${taiwan8}`, 3 + bridgew.size);
         taiwan8 += `${((libavfilterl ? 4 : 4) >> (Math.min(Math.abs(parseInt(`${collectiont}`)), 4)))}`;
      if ((injuryy.length - 1) < 4) {
          let dialog1 = String.fromCharCode(99,111,110,116,114,111,108,101,114,115,95,111,95,54,52,0);
          let watchP = String.fromCharCode(105,100,101,110,116,105,116,105,101,115,95,118,95,51,54,0);
         injuryy += `${dialog1.length & 1}`;
         dialog1 = `${watchP.length}`;
         watchP = `${watchP.length}`;
      }
          let xadsdkb = String.fromCharCode(99,111,110,110,101,99,116,95,48,95,53,48,0);
          let smallO = true;
         icond = new Map([[`${tumbnailm.length}`, 2]]);
         xadsdkb = `${xadsdkb.length}`;
         smallO = !smallO;
       let theme6 = String.fromCharCode(99,106,112,101,103,95,113,95,51,53,0);
       let hiadD = String.fromCharCode(112,101,114,105,111,100,95,106,95,56,48,0);
      while (!controlq) {
         injuryy += "2";
         break;
      }
          let libreactperfloggerjnif = String.fromCharCode(101,110,117,109,95,49,95,49,50,0);
          let uimanagerC = 0.0;
          let currentK = String.fromCharCode(108,105,110,101,98,114,101,97,107,95,116,95,51,49,0);
         taiwan8 += `${theme6.length - hiadD.length}`;
         libreactperfloggerjnif += `${libreactperfloggerjnif.length}`;
         uimanagerC *= 3 >> (Math.min(4, Math.abs(parseInt(`${uimanagerC}`))));
         currentK += `${parseInt(`${uimanagerC}`)}`;
      logoutb = `${parseInt(`${arrown}`)}`;
   }
      logoutb += `${2 & proxy6.length}`;

    setShowSlider(true);

   let layoutF = grayo >= 6612623.0;
   do {
      grayo += parseFloat(`${parseInt(`${carouselO}`)}`);
      if (layoutF) {
         break;
      }
   } while (layoutF && ((proxy6.length + parseInt(`${grayo}`)) < 2));
      logoutb = "2";
   if (2 == logoutb.length) {
      logoutb += `${splashu.length + proxy6.length}`;
   }
      unimplementedviewU |= 3 << (Math.min(Math.abs(parseInt(`${currentM}`)), 4));
   let vignette_ = String.fromCharCode(109,50,51,110,103,0) == materialV;
   do {
      materialV += "2";
      if (vignette_) {
         break;
      }
   } while ((2 < whistleQ.size) && vignette_);
      grayo -= parseFloat(`${parseInt(`${arrown}`) * parseInt(`${carouselO}`)}`);
      unimplementedviewU >>= Math.min(Math.abs(parseInt(`${carouselO}`) << (Math.min(Math.abs(2), 1))), 2);
      logoutb = "2";
   while (materialV.length >= 1) {
      materialV += `${selecte.length}`;
      break;
   }
    clearTimeout(sliderTimeout.current);

   if (3.63 < (carouselO * grayo) || 1.1 < (3.63 * grayo)) {
       let fastforwardW: Array<any> = [674, 905];
       let spinnerR: Array<any> = [927, 118, 76];
       let controlsM = false;
       let benefitZ = String.fromCharCode(113,95,52,51,95,115,98,99,100,101,99,0);
         fastforwardW.push(1);
         spinnerR = [spinnerR.length];
      while (benefitZ.length == 5) {
          let bannerV = true;
         controlsM = fastforwardW.length >= spinnerR.length;
         bannerV = !bannerV && !bannerV;
         break;
      }
      while (benefitZ.length >= fastforwardW.length) {
         fastforwardW = [spinnerR.length / (Math.max(1, 6))];
         break;
      }
      for (let g = 0; g < 3; g++) {
         spinnerR.push((spinnerR.length ^ (controlsM ? 1 : 3)));
      }
         controlsM = !controlsM;
         fastforwardW = [1];
         fastforwardW.push(spinnerR.length + benefitZ.length);
      let confirmationu = fastforwardW.length <= 6126959;
      do {
         fastforwardW = [3 + spinnerR.length];
         if (confirmationu) {
            break;
         }
      } while ((benefitZ.includes(`${fastforwardW.length}`)) && confirmationu);
      let expired3 = controlsM ? !controlsM : controlsM;
      do {
          let unimplementedviewy = false;
         controlsM = ((fastforwardW.length & (controlsM ? 43 : fastforwardW.length)) > 43);
         unimplementedviewy = unimplementedviewy || !unimplementedviewy;
         if (expired3) {
            break;
         }
      } while (expired3 && (2 < spinnerR.length));
          let transferg = String.fromCharCode(114,101,112,111,114,116,115,95,105,95,57,52,0);
         controlsM = benefitZ.length <= spinnerR.length;
         transferg += `${transferg.length}`;
      while (3 > (fastforwardW.length & 2) || 1 > (benefitZ.length & 2)) {
         fastforwardW.push(3 ^ benefitZ.length);
         break;
      }
      grayo += parseFloat(`${2}`);
   }
      materialV += `${renewf.length}`;
   if (5.75 < (2.37 + grayo) || (grayo + parseFloat(`${unimplementedviewU}`)) < 2.37) {
       let popupi = false;
       let libcrashsdk0: Array<any> = [String.fromCharCode(119,95,50,57,95,114,101,109,111,118,101,114,0), String.fromCharCode(111,118,101,114,108,111,97,100,95,99,95,52,49,0)];
       let trashx = String.fromCharCode(100,101,113,117,101,117,101,100,95,119,95,51,56,0);
       let videocommonj = String.fromCharCode(103,95,55,52,95,109,117,116,97,98,108,101,0);
       let darkC = 0.0;
      let modeld = popupi ? !popupi : popupi;
      do {
         popupi = !popupi;
         if (modeld) {
            break;
         }
      } while (modeld && (2 > libcrashsdk0.length));
      for (let h = 0; h < 2; h++) {
         darkC += parseFloat(`${libcrashsdk0.length ^ 1}`);
      }
      while (!videocommonj.startsWith(`${libcrashsdk0.length}`)) {
         videocommonj += `${2 * parseInt(`${darkC}`)}`;
         break;
      }
          let tail6 = 4;
          let activez = String.fromCharCode(111,95,50,51,95,99,111,118,101,114,0);
          let episodes = 2.0;
         darkC -= parseFloat(`${3 + trashx.length}`);
         tail6 &= 1;
         activez = `${activez.length}`;
         episodes *= 1 | activez.length;
         libcrashsdk0 = [videocommonj.length * trashx.length];
      if (2 <= (2 + videocommonj.length) && 5 <= (2 + libcrashsdk0.length)) {
         videocommonj = `${((popupi ? 3 : 1) * trashx.length)}`;
      }
      while (videocommonj == String.fromCharCode(78,0)) {
          let basketballl = 5.0;
          let libjsinspectorO = String.fromCharCode(108,95,51,50,95,114,97,110,100,111,109,105,122,101,0);
          let scheduler = String.fromCharCode(99,95,52,50,95,109,117,108,116,105,100,101,115,99,114,105,112,116,111,114,0);
         trashx = `${(String.fromCharCode(57,0) == videocommonj ? libcrashsdk0.length : videocommonj.length)}`;
         basketballl /= Math.max(2, parseFloat(`${parseInt(`${basketballl}`)}`));
         libjsinspectorO = `${libjsinspectorO.length * parseInt(`${basketballl}`)}`;
         scheduler += `${parseInt(`${basketballl}`)}`;
         break;
      }
         darkC += parseFloat(`${libcrashsdk0.length | 3}`);
      for (let l = 0; l < 3; l++) {
         videocommonj = `${parseInt(`${darkC}`) / (Math.max(4, videocommonj.length))}`;
      }
         darkC -= parseFloat(`${1}`);
         trashx += "3";
      grayo -= parseFloat(`${rcopy_4dB.length / (Math.max(10, parseInt(`${carouselO}`)))}`);
   }
   for (let w = 0; w < 1; w++) {
      unimplementedviewU |= whistleQ.size;
   }
      selecte = `${renewf.length}`;
      proxy6 += `${2 >> (Math.min(3, Math.abs(whistleQ.size)))}`;
   while ((3 >> (Math.min(5, materialV.length))) <= 4 || 5.66 <= (grayo - parseFloat(`${materialV.length}`))) {
       let suggestionm: Map<any, any> = new Map([[String.fromCharCode(117,114,112,111,115,101,95,97,95,53,48,0),true ], [String.fromCharCode(102,95,51,50,95,115,105,103,110,112,111,115,116,0),false ], [String.fromCharCode(101,110,118,105,114,111,110,109,101,110,116,95,106,95,53,55,0),false ]]);
         suggestionm.set(`${suggestionm.size}`, 3);
      let mbnativeY = suggestionm.size <= 9053201;
      do {
          let commonw = String.fromCharCode(108,95,54,55,95,109,97,112,112,101,114,0);
          let proxyA = String.fromCharCode(99,97,99,104,101,115,105,122,101,95,109,95,49,51,0);
          let fill6 = String.fromCharCode(99,111,109,112,108,101,120,95,101,95,51,55,0);
          let pnewinterstitialh = String.fromCharCode(102,95,56,53,95,105,112,99,0);
         suggestionm.set(proxyA, fill6.length);
         commonw += "2";
         proxyA = `${pnewinterstitialh.length << (Math.min(Math.abs(1), 4))}`;
         fill6 += `${1 >> (Math.min(5, pnewinterstitialh.length))}`;
         if (mbnativeY) {
            break;
         }
      } while ((Array.from(suggestionm.keys()).includes(`${suggestionm.size}`)) && mbnativeY);
      if (suggestionm.get(`${suggestionm.size}`) != null) {
         suggestionm.set(`${suggestionm.size}`, suggestionm.size / (Math.max(suggestionm.size, 1)));
      }
      grayo += parseFloat(`${parseInt(`${arrown}`)}`);
      break;
   }
      proxy6 += `${(String.fromCharCode(113,0) == rcopy_4dB ? unimplementedviewU : rcopy_4dB.length)}`;
       let z_image4: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,105,110,116,101,114,95,108,95,51,48,0),194], [String.fromCharCode(114,95,54,55,95,109,101,114,103,101,0),859], [String.fromCharCode(116,122,102,105,108,101,95,48,95,57,48,0),962]]);
       let feedbacky = 1;
       let reactE = 2.0;
       let videoT: Map<any, any> = new Map([[String.fromCharCode(99,98,112,104,105,95,116,95,56,48,0),46], [String.fromCharCode(112,111,108,108,115,95,119,95,55,50,0),36]]);
       let sourceh: Map<any, any> = new Map([[String.fromCharCode(101,120,97,109,105,110,101,95,102,95,50,53,0),String.fromCharCode(107,95,57,57,95,97,108,108,111,119,115,0)], [String.fromCharCode(115,111,114,116,101,114,95,103,95,54,51,0),String.fromCharCode(106,109,111,114,101,99,102,103,95,120,95,56,50,0)]]);
          let o_centerP = String.fromCharCode(98,105,103,105,110,116,101,103,101,114,95,109,95,55,0);
          let libflipperk = 4.0;
          let incidentB = 0.0;
         z_image4 = new Map([[`${incidentB}`, parseInt(`${incidentB}`) * feedbacky]]);
         o_centerP = "3";
         libflipperk *= 3 ^ parseInt(`${libflipperk}`);
         sourceh.set(`${reactE}`, sourceh.size);
          let libavutil3 = String.fromCharCode(112,114,111,98,97,98,108,101,95,102,95,56,54,0);
          let entryN: Array<any> = [462, 998, 774];
         reactE -= (parseFloat(`${String.fromCharCode(105,0) == libavutil3 ? libavutil3.length : entryN.length}`));
         z_image4.set(`${z_image4.size}`, sourceh.size);
      let volumec = reactE >= 6298141.0;
      do {
          let taiwanI = true;
          let rules7: Map<any, any> = new Map([[String.fromCharCode(99,101,105,108,95,101,95,51,55,0),false ], [String.fromCharCode(111,95,54,56,95,102,105,108,116,0),true ]]);
          let bodanV: Map<any, any> = new Map([[String.fromCharCode(110,95,51,50,95,105,100,101,110,116,105,102,105,101,114,0),220], [String.fromCharCode(110,101,117,116,114,97,108,95,103,95,54,50,0),736]]);
          let panglea = String.fromCharCode(101,109,111,116,105,99,111,110,95,119,95,54,51,0);
         reactE *= parseFloat(`${3 & sourceh.size}`);
         taiwanI = (panglea.length ^ rules7.size) < 4;
         rules7.set(`${rules7.size}`, rules7.size - 2);
         bodanV.set(`${bodanV.size}`, 3);
         panglea = `${1 + rules7.size}`;
         if (volumec) {
            break;
         }
      } while ((sourceh.get(`${reactE}`) == null) && volumec);
      for (let e = 0; e < 2; e++) {
          let mbnativez = String.fromCharCode(111,102,102,101,114,95,54,95,49,52,0);
          let mbnativeI: Array<any> = [String.fromCharCode(102,105,112,115,95,117,95,50,52,0), String.fromCharCode(99,95,55,54,95,114,101,99,116,97,110,103,108,101,0)];
         sourceh = new Map([[`${videoT.size}`, videoT.size | mbnativeI.length]]);
         mbnativez += `${mbnativez.length}`;
         mbnativeI.push(mbnativez.length);
      }
      let viewsb = 7679004.0 >= reactE;
      do {
         reactE += parseFloat(`${parseInt(`${reactE}`) ^ 2}`);
         if (viewsb) {
            break;
         }
      } while (viewsb && (3 <= feedbacky));
          let feedbackx = String.fromCharCode(113,95,49,48,95,116,114,105,112,0);
          let telemetryz = String.fromCharCode(97,115,111,99,95,113,95,49,48,0);
          let humidityX = 5.0;
         videoT.set(`${sourceh.size}`, videoT.size);
         feedbackx = `${2 / (Math.max(4, parseInt(`${humidityX}`)))}`;
         telemetryz = "1";
         humidityX /= Math.max(3 * feedbackx.length, 3);
      arrown *= combine9.length + 1;
    sliderTimeout.current = setTimeout(() => {

       let modalD = 3.0;
       let green0 = true;
       let bufferq = 5.0;
      for (let c = 0; c < 1; c++) {
          let libavutilZ: Array<any> = [804, 993];
          let searchs = String.fromCharCode(113,99,97,110,95,50,95,57,0);
         modalD /= Math.max(((green0 ? 2 : 2) | 2), 2);
         libavutilZ = [libavutilZ.length];
         searchs += `${searchs.length & libavutilZ.length}`;
      }
         modalD /= Math.max(2, (parseInt(`${modalD}`) % (Math.max(2, (green0 ? 4 : 1)))));
          let u_countr = 1;
         green0 = !green0;
         u_countr %= Math.max(4, u_countr << (Math.min(Math.abs(3), 4)));
          let danger1: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,102,95,99,95,53,52,0),981], [String.fromCharCode(115,116,114,117,99,116,95,50,95,55,51,0),376], [String.fromCharCode(101,95,51,51,95,114,105,98,98,111,110,0),82]]);
          let o_titleu = 1.0;
          let favoriteU = 1.0;
         green0 = o_titleu == 28.62 || 28.62 == favoriteU;
         danger1 = new Map([[`${danger1.size}`, danger1.size]]);
         o_titleu -= parseFloat(`${danger1.size | 2}`);
         bufferq -= 2 >> (Math.min(Math.abs(parseInt(`${bufferq}`)), 5));
      if (modalD == 4.21 && (modalD + 4.21) == 4.30) {
         modalD -= parseInt(`${modalD}`) & 1;
      }
      while (2.46 >= bufferq) {
         bufferq -= ((green0 ? 3 : 4) % (Math.max(10, parseInt(`${bufferq}`))));
         break;
      }
      for (let h = 0; h < 1; h++) {
         modalD *= (parseInt(`${bufferq}`) & (green0 ? 5 : 5));
      }
      if (4.79 < (bufferq - 2.51) || green0) {
         green0 = !green0;
      }
      proxy6 += "2";
      currentM += (parseFloat(`${logoutb == String.fromCharCode(79,0) ? logoutb.length : parseInt(`${arrown}`)}`));
       let regengT = 4.0;
         regengT *= parseFloat(`${parseInt(`${regengT}`)}`);
         regengT -= parseFloat(`${parseInt(`${regengT}`)}`);
       let whiteG: Array<any> = [196, 307, 458];
      onewsJ = `${unimplementedviewU}`;
   let fill8 = currentM <= 5496493.0;
   do {
      currentM *= parseFloat(`${whistleQ.size % 2}`);
      if (fill8) {
         break;
      }
   } while ((5.49 > currentM) && fill8);
   let cross9 = 7863028.0 <= currentM;
   do {
      currentM -= parseFloat(`${3}`);
      if (cross9) {
         break;
      }
   } while (cross9 && ((currentM * 1.60) > 3.14));
       let footballU: Map<any, any> = new Map([[String.fromCharCode(108,101,97,100,105,110,103,95,97,95,52,54,0),322], [String.fromCharCode(103,101,116,115,111,99,107,111,112,116,95,50,95,54,50,0),859], [String.fromCharCode(109,95,52,49,95,121,113,117,97,110,116,0),495]]);
       let verticalb = 3.0;
      if (5 > (4 | footballU.size)) {
          let successZ = String.fromCharCode(103,95,53,57,95,115,101,116,105,0);
          let playlistg: Array<any> = [386, 351, 987];
          let directt = 4.0;
         verticalb += parseFloat(`${2 ^ footballU.size}`);
         successZ = `${successZ.length}`;
         playlistg = [successZ.length << (Math.min(2, Math.abs(parseInt(`${directt}`))))];
         directt /= Math.max(4, parseFloat(`${playlistg.length ^ 2}`));
      }
      if ((verticalb + 1.4) <= 2.26 || 3.96 <= (1.4 + verticalb)) {
          let modev = 3;
          let holderD = true;
         verticalb *= parseFloat(`${modev - 2}`);
         modev /= Math.max(2, 2);
      }
         verticalb *= parseFloat(`${parseInt(`${verticalb}`) % 1}`);
          let penaltyU = 3;
         verticalb += parseFloat(`${parseInt(`${verticalb}`)}`);
         penaltyU -= penaltyU;
         verticalb += parseFloat(`${parseInt(`${verticalb}`)}`);
         verticalb *= parseFloat(`${footballU.size ^ 3}`);
      currentM += (parseFloat(`${String.fromCharCode(119,0) == proxy6 ? proxy6.length : parseInt(`${sportst}`)}`));
   if (!splashu.startsWith(logoutb)) {
       let routere: Map<any, any> = new Map([[String.fromCharCode(99,111,109,98,105,110,101,95,57,95,49,48,0),975], [String.fromCharCode(114,101,117,112,108,111,97,100,95,117,95,50,52,0),828]]);
       let downw = true;
         routere = new Map([[`${routere.size}`, routere.size]]);
       let libruntimeexecutor3 = String.fromCharCode(118,95,53,51,95,103,101,116,104,111,115,116,98,121,110,97,109,101,0);
      splashu += `${1 + splashu.length}`;
   }
   let redirectk = splashu == String.fromCharCode(121,110,119,110,104,105,119,0);
   do {
      splashu += `${rcopy_4dB.length}`;
      if (redirectk) {
         break;
      }
   } while ((sportst == 4.95) && redirectk);
      sportst += parseFloat(`${1}`);
      setShowSlider(false);
    }, 1500);
  };

  const setBrightVolumeShare = async () => {
       let refresh4 = String.fromCharCode(114,116,112,95,112,95,52,54,0);
    let shirtG: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,95,112,95,56,50,0),726], [String.fromCharCode(107,95,55,51,95,104,117,102,102,121,117,118,100,115,112,0),881], [String.fromCharCode(103,117,97,114,97,110,116,101,101,115,95,119,95,56,57,0),994]]);
    let langkeyI = false;
    let singaporel = 4.0;
    let hiad2 = 3.0;
    let questm = 4.0;
    let predictiont = String.fromCharCode(120,95,57,50,95,102,117,110,103,105,98,108,101,115,0);
    let rewardY = 4;
    let canvasT = true;
    let graphicsJ = String.fromCharCode(107,101,121,112,97,116,104,95,117,95,54,57,0);
    let v_unlockc = String.fromCharCode(102,101,116,99,104,95,113,95,50,52,0);
    let accepted5 = String.fromCharCode(112,95,54,48,95,112,105,120,101,108,102,111,114,109,97,116,0);
    let minimizeP: Array<any> = [522, 653];
    let telemetry3 = true;
    let yingX = 5;
    let adultE = true;
    let rewardvideoH = 4.0;
      hiad2 += 2 >> (Math.min(3, Math.abs(parseInt(`${hiad2}`))));
   let profilek = singaporel >= 9711771.0;
   do {
      singaporel *= parseFloat(`${parseInt(`${hiad2}`)}`);
      if (profilek) {
         break;
      }
   } while (profilek && (2.96 > (hiad2 + singaporel)));
   if (canvasT) {
      canvasT = !graphicsJ.includes(`${canvasT}`);
   }
      questm -= (parseFloat(`${(langkeyI ? 4 : 1) - v_unlockc.length}`));
       let libfbq: Array<any> = [135, 617, 307];
       let utilsK = String.fromCharCode(116,111,110,101,115,95,121,95,50,54,0);
       let promotionC = 1;
      if ((utilsK.length % 5) >= 1) {
          let over5: Map<any, any> = new Map([[String.fromCharCode(111,95,56,57,95,116,111,110,0),324], [String.fromCharCode(117,95,49,56,95,116,97,117,0),235]]);
          let lessm = String.fromCharCode(98,101,104,97,118,105,111,114,95,57,95,49,57,0);
          let controlU = 0.0;
          let adultv = true;
          let favorite3 = String.fromCharCode(99,95,54,52,95,114,101,118,97,108,105,100,97,116,105,111,110,0);
         promotionC &= parseInt(`${controlU}`) & 3;
         over5.set(favorite3, 3);
         lessm += `${lessm.length | favorite3.length}`;
         controlU += ((adultv ? 2 : 5) / (Math.max(5, lessm.length)));
         adultv = lessm.length >= 33;
      }
      for (let t = 0; t < 3; t++) {
          let updatesu = 4;
          let mbridgeo: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,99,111,100,101,95,57,95,55,56,0),87], [String.fromCharCode(113,95,53,48,95,114,101,109,105,110,100,0),453]]);
          let point1 = String.fromCharCode(108,95,53,49,95,97,116,116,97,99,104,0);
          let chinasameu = String.fromCharCode(111,112,116,105,109,117,109,95,55,95,54,54,0);
          let executor3 = 0.0;
         utilsK = `${parseInt(`${executor3}`)}`;
         updatesu *= 3;
         mbridgeo = new Map([[`${mbridgeo.size}`, 1]]);
         point1 = "2";
         chinasameu = "1";
         executor3 -= point1.length & mbridgeo.size;
      }
          let chart9 = 5;
          let dplusn = String.fromCharCode(97,99,99,101,115,115,111,114,121,95,120,95,57,56,0);
          let dicee = String.fromCharCode(119,105,116,110,101,115,115,95,104,95,55,56,0);
         promotionC /= Math.max(3, (dplusn == String.fromCharCode(120,0) ? promotionC : dplusn.length));
         chart9 &= 2;
         dicee = `${(String.fromCharCode(54,0) == dicee ? chart9 : dicee.length)}`;
         promotionC -= libfbq.length | utilsK.length;
      let bdxadsdkU = String.fromCharCode(104,121,112,98,113,107,98,106,99,0) == utilsK;
      do {
         utilsK = `${libfbq.length}`;
         if (bdxadsdkU) {
            break;
         }
      } while (bdxadsdkU && ((2 * promotionC) > 4 || 2 > (promotionC * utilsK.length)));
      if (5 > (promotionC % (Math.max(3, libfbq.length)))) {
         promotionC *= 2;
      }
       let trophyi = String.fromCharCode(114,101,109,105,110,100,101,114,95,102,95,49,54,0);
         trophyi = "1";
      while (utilsK.includes(`${promotionC}`)) {
         promotionC /= Math.max(5, trophyi.length ^ 2);
         break;
      }
      hiad2 *= ((langkeyI ? 2 : 3) >> (Math.min(5, Math.abs(2))));
       let championQ = 5.0;
       let gmailj = String.fromCharCode(98,111,116,115,95,120,95,51,57,0);
          let libswresamplec = 3;
          let schedulerS: Map<any, any> = new Map([[String.fromCharCode(112,107,103,99,111,110,102,105,103,95,99,95,52,54,0),861], [String.fromCharCode(110,95,53,49,95,112,114,97,112,97,114,101,0),869], [String.fromCharCode(112,95,53,53,95,97,115,109,100,101,102,115,0),18]]);
          let greenK: Array<any> = [20, 219, 433];
         championQ *= (gmailj == String.fromCharCode(68,0) ? gmailj.length : schedulerS.size);
         libswresamplec += 2;
         schedulerS = new Map([[`${greenK.length}`, greenK.length << (Math.min(Math.abs(1), 3))]]);
      let teamz = 6156189.0 >= championQ;
      do {
         championQ /= Math.max(2 ^ parseInt(`${championQ}`), 5);
         if (teamz) {
            break;
         }
      } while (((2.57 + championQ) > 3.71) && teamz);
         championQ += parseInt(`${championQ}`);
          let mbridgeM: Array<any> = [96, 831];
          let dragv = String.fromCharCode(116,114,101,97,116,95,49,95,54,49,0);
         championQ -= 2;
         mbridgeM.push(mbridgeM.length ^ dragv.length);
         dragv = `${dragv.length - mbridgeM.length}`;
      let videojsB = 8510068.0 >= championQ;
      do {
         championQ *= parseInt(`${championQ}`);
         if (videojsB) {
            break;
         }
      } while (((parseInt(`${championQ}`) / (Math.max(gmailj.length, 6))) > 4) && videojsB);
       let aboutQ = String.fromCharCode(106,95,56,95,115,101,116,102,105,101,108,100,0);
       let forwardA = String.fromCharCode(97,101,97,100,95,56,95,57,56,0);
      predictiont += `${refresh4.length % (Math.max(1, 5))}`;
   while (graphicsJ.startsWith(`${rewardY}`)) {
       let closeI = String.fromCharCode(112,97,114,109,115,95,107,95,50,52,0);
       let successg = 1;
       let qnewarchdefaultsB = String.fromCharCode(115,101,103,105,100,95,50,95,56,50,0);
      if (1 < (3 >> (Math.min(4, qnewarchdefaultsB.length)))) {
          let manifestN: Map<any, any> = new Map([[String.fromCharCode(97,116,111,110,95,54,95,55,56,0),604], [String.fromCharCode(122,95,50,49,95,112,111,115,116,97,108,0),189], [String.fromCharCode(100,95,52,95,99,97,105,112,0),276]]);
          let topicB = String.fromCharCode(109,111,118,101,95,117,95,51,49,0);
         qnewarchdefaultsB += `${successg}`;
         manifestN = new Map([[`${manifestN.size}`, 2 - topicB.length]]);
         topicB += `${topicB.length << (Math.min(1, Math.abs(manifestN.size)))}`;
      }
      while (closeI != qnewarchdefaultsB) {
         qnewarchdefaultsB = `${(String.fromCharCode(65,0) == qnewarchdefaultsB ? closeI.length : qnewarchdefaultsB.length)}`;
         break;
      }
          let register_u1T = String.fromCharCode(113,95,50,50,95,108,105,116,116,108,101,0);
          let schedulerc = String.fromCharCode(109,95,57,53,95,116,101,115,101,100,103,101,0);
         successg |= 2;
         register_u1T += `${schedulerc.length / 1}`;
         schedulerc = `${schedulerc.length}`;
      for (let k = 0; k < 1; k++) {
         qnewarchdefaultsB += `${1 * successg}`;
      }
         qnewarchdefaultsB += `${closeI.length + 2}`;
         closeI = "2";
         successg <<= Math.min(2, Math.abs(successg));
          let materialR = 1.0;
          let mbnativeE = 0.0;
         closeI = `${(String.fromCharCode(98,0) == closeI ? parseInt(`${materialR}`) : closeI.length)}`;
         materialR -= parseFloat(`${parseInt(`${mbnativeE}`)}`);
      for (let c = 0; c < 3; c++) {
         closeI = `${successg >> (Math.min(Math.abs(3), 2))}`;
      }
      rewardY += 1;
      break;
   }
       let long_dI = 4.0;
       let reducerA: Map<any, any> = new Map([[String.fromCharCode(101,95,49,56,95,101,120,112,108,111,114,101,114,0),617], [String.fromCharCode(109,101,114,103,101,95,106,95,56,53,0),633], [String.fromCharCode(119,114,105,116,101,120,95,109,95,55,51,0),126]]);
       let condensedp = 0;
      while (5 <= (reducerA.size - condensedp) || 5 <= (reducerA.size - condensedp)) {
          let nalyticsP = String.fromCharCode(115,116,114,101,97,109,105,110,103,95,110,95,52,54,0);
          let langkeyh = false;
         reducerA = new Map([[`${reducerA.size}`, nalyticsP.length ^ reducerA.size]]);
         nalyticsP += `${((langkeyh ? 5 : 2) ^ (langkeyh ? 2 : 3))}`;
         break;
      }
          let smallL: Map<any, any> = new Map([[String.fromCharCode(109,105,103,114,97,116,101,95,56,95,53,56,0),false ], [String.fromCharCode(103,95,52,50,95,108,108,118,105,100,101,110,99,100,115,112,0),true ], [String.fromCharCode(115,117,98,98,97,110,100,95,118,95,53,0),false ]]);
          let updatesq: Array<any> = [String.fromCharCode(103,101,116,102,114,97,109,101,95,105,95,54,52,0), String.fromCharCode(102,95,57,51,95,115,111,108,117,116,105,111,110,0)];
          let hooksE = 5;
         reducerA = new Map([[`${updatesq.length}`, condensedp]]);
         smallL.set(`${hooksE}`, smallL.size | hooksE);
         updatesq.push(smallL.size * hooksE);
          let back9 = 1.0;
          let pageN = String.fromCharCode(114,95,49,48,48,95,98,97,115,101,110,97,109,101,0);
         long_dI -= 1 >> (Math.min(1, Math.abs(condensedp)));
         back9 += parseFloat(`${3 - parseInt(`${back9}`)}`);
         pageN = "1";
      let loadingc = long_dI >= 9891592.0;
      do {
          let profilekN = String.fromCharCode(101,95,55,56,95,97,115,105,115,0);
         long_dI *= 1 << (Math.min(2, profilekN.length));
         if (loadingc) {
            break;
         }
      } while ((1 <= (4 + reducerA.size) || (parseInt(`${long_dI}`) * reducerA.size) <= 4) && loadingc);
      if (2 < (reducerA.size ^ 1) || (long_dI * 1.24) < 5.45) {
         reducerA.set(`${condensedp}`, 1 ^ condensedp);
      }
       let libflipperI = 0.0;
      while (!Array.from(reducerA.keys()).includes(`${long_dI}`)) {
         reducerA = new Map([[`${reducerA.size}`, 2]]);
         break;
      }
       let countryc = false;
       let sendX = false;
         reducerA = new Map([[`${sendX}`, 3]]);
      singaporel *= parseFloat(`${2}`);
      singaporel += parseFloat(`${parseInt(`${questm}`)}`);
   let filterf = 7683238.0 <= questm;
   do {
      questm /= Math.max(1, (parseFloat(`${(canvasT ? 2 : 5) - 1}`)));
      if (filterf) {
         break;
      }
   } while (filterf && (4.80 <= questm));
      graphicsJ += "1";
   while (!langkeyI) {
      singaporel -= parseFloat(`${3}`);
      break;
   }
   let nalyticsL = 7691459 >= refresh4.length;
   do {
      refresh4 = `${refresh4.length | graphicsJ.length}`;
      if (nalyticsL) {
         break;
      }
   } while (nalyticsL && ((refresh4.length - 3) <= 5));
   if (accepted5.length < 5) {
       let source7 = true;
      if (!source7) {
         source7 = !source7;
      }
         source7 = (!source7 ? !source7 : source7);
      for (let p = 0; p < 2; p++) {
         source7 = source7 && source7;
      }
      shirtG.set(graphicsJ, graphicsJ.length);
   }
   for (let a = 0; a < 1; a++) {
       let mbjscommon4 = 3;
       let modelsZ: Map<any, any> = new Map([[String.fromCharCode(100,97,115,104,101,110,99,95,49,95,54,0),973], [String.fromCharCode(115,109,105,108,105,101,115,95,110,95,52,51,0),482]]);
          let edith = false;
          let libpangleflippedN = 5;
          let privacym = 3;
         modelsZ.set(`${mbjscommon4}`, mbjscommon4 - modelsZ.size);
         edith = !edith;
         libpangleflippedN %= Math.max(libpangleflippedN + 1, 4);
         privacym -= libpangleflippedN;
       let updatesz: Array<any> = [861, 45, 284];
       let questI: Array<any> = [172, 837];
         modelsZ.set(`${updatesz.length}`, updatesz.length | modelsZ.size);
         modelsZ = new Map([[`${updatesz.length}`, updatesz.length]]);
          let libfabricjni6 = 0.0;
         modelsZ.set(`${mbjscommon4}`, questI.length);
         libfabricjni6 -= parseFloat(`${parseInt(`${libfabricjni6}`)}`);
         questI.push(2);
      questm *= parseFloat(`${1}`);
   }

    brightShare.value = await SystemSetting.getAppBrightness();

      hiad2 /= Math.max(1, 1 + parseInt(`${questm}`));
       let backwardS: Map<any, any> = new Map([[String.fromCharCode(115,95,56,48,95,117,116,120,111,115,0),625], [String.fromCharCode(105,110,102,111,108,100,101,114,95,113,95,54,57,0),444]]);
       let agreemente: Map<any, any> = new Map([[String.fromCharCode(108,111,99,107,97,98,108,101,95,107,95,55,52,0),566], [String.fromCharCode(115,95,53,49,95,118,105,111,108,101,110,99,101,0),689]]);
       let long_tm = String.fromCharCode(102,111,114,119,97,114,100,95,116,95,51,48,0);
         backwardS = new Map([[`${backwardS.size}`, agreemente.size]]);
          let mbbannerQ: Array<any> = [String.fromCharCode(109,95,56,49,95,116,101,115,116,105,109,103,105,110,116,0), String.fromCharCode(118,95,49,54,95,105,100,99,105,110,0), String.fromCharCode(109,95,57,50,95,118,101,99,115,0)];
         agreemente.set(`${mbbannerQ.length}`, 1);
          let shrinkV = String.fromCharCode(104,95,57,55,95,100,105,114,97,99,116,97,98,0);
         long_tm += `${(String.fromCharCode(103,0) == long_tm ? backwardS.size : long_tm.length)}`;
         shrinkV = `${3 & shrinkV.length}`;
      for (let t = 0; t < 3; t++) {
          let libsgcoreu = 3.0;
          let xnewsI = String.fromCharCode(119,104,97,116,115,95,103,95,55,57,0);
          let score6 = String.fromCharCode(106,95,56,54,95,97,114,114,105,118,97,108,0);
         agreemente = new Map([[score6, 1 | xnewsI.length]]);
         libsgcoreu += parseFloat(`${3}`);
         xnewsI += "3";
      }
      while (backwardS.size == 4) {
         long_tm += `${agreemente.size + backwardS.size}`;
         break;
      }
          let manifesti = 0;
          let libzeusJ = String.fromCharCode(105,109,108,116,95,99,95,57,50,0);
         agreemente.set(`${manifesti}`, backwardS.size & 3);
         manifesti -= (libzeusJ == String.fromCharCode(57,0) ? libzeusJ.length : libzeusJ.length);
         agreemente.set(long_tm, agreemente.size);
      let textinputO = 4929340 <= backwardS.size;
      do {
         backwardS = new Map([[`${agreemente.size}`, long_tm.length / (Math.max(1, 2))]]);
         if (textinputO) {
            break;
         }
      } while (((backwardS.size ^ 4) == 5 && (long_tm.length ^ 4) == 5) && textinputO);
          let utils6: Array<any> = [839, 478, 922];
          let bridgeV: Map<any, any> = new Map([[String.fromCharCode(118,105,100,101,111,115,116,114,101,97,109,95,104,95,52,50,0),776], [String.fromCharCode(115,116,114,105,107,101,116,104,114,111,117,103,104,115,95,107,95,50,57,0),686]]);
          let completeA = 0.0;
         long_tm = `${long_tm.length}`;
         utils6 = [parseInt(`${completeA}`) >> (Math.min(Math.abs(bridgeV.size), 5))];
         bridgeV.set(`${utils6.length}`, utils6.length * 2);
         completeA *= parseFloat(`${utils6.length}`);
      predictiont += `${shirtG.size - parseInt(`${questm}`)}`;
   if (2 <= (rewardY ^ 1)) {
      singaporel -= parseFloat(`${refresh4.length}`);
   }
      shirtG = new Map([[`${langkeyI}`, 1 + accepted5.length]]);
   while ((rewardY - 5) > 1) {
      rewardY ^= parseInt(`${singaporel}`) % (Math.max(parseInt(`${hiad2}`), 4));
      break;
   }
      questm /= Math.max(parseFloat(`${accepted5.length - 3}`), 3);
   for (let v = 0; v < 3; v++) {
      v_unlockc += `${(2 * (langkeyI ? 3 : 3))}`;
   }
   if (!langkeyI) {
       let mutedJ: Array<any> = [String.fromCharCode(100,95,55,53,95,97,119,97,114,101,0), String.fromCharCode(117,95,53,51,95,99,105,114,99,117,108,97,114,0)];
          let libreactj: Map<any, any> = new Map([[String.fromCharCode(105,109,103,117,116,105,108,115,95,104,95,52,0),388], [String.fromCharCode(99,95,49,52,95,108,105,109,105,116,101,114,0),938], [String.fromCharCode(98,95,54,95,99,104,115,101,116,0),718]]);
          let qaago = String.fromCharCode(101,100,105,116,95,105,95,51,48,0);
         mutedJ.push(mutedJ.length & qaago.length);
         libreactj.set(`${libreactj.size}`, libreactj.size << (Math.min(Math.abs(1), 4)));
         qaago = `${libreactj.size / (Math.max(libreactj.size, 4))}`;
         mutedJ.push(mutedJ.length + mutedJ.length);
         mutedJ.push(mutedJ.length << (Math.min(4, mutedJ.length)));
      questm += parseFloat(`${minimizeP.length % (Math.max(3, graphicsJ.length))}`);
   }
       let membership7 = String.fromCharCode(121,97,114,110,95,104,95,53,53,0);
       let qaage = false;
      let acceptedJ = 5597395 <= membership7.length;
      do {
          let buttonn: Array<any> = [868, 665, 452];
          let promotionH = 5;
         membership7 += `${3 % (Math.max(5, buttonn.length))}`;
         buttonn = [3];
         promotionH -= 2;
         if (acceptedJ) {
            break;
         }
      } while (acceptedJ && (qaage));
      let splashB = qaage ? !qaage : qaage;
      do {
         qaage = (76 >= (membership7.length << (Math.min(1, Math.abs((qaage ? 76 : membership7.length))))));
         if (splashB) {
            break;
         }
      } while ((2 == membership7.length && !qaage) && splashB);
      while (membership7.endsWith(`${qaage}`)) {
          let fastforwarda = 2.0;
          let ping4 = String.fromCharCode(115,95,50,54,95,99,97,114,100,97,110,111,0);
          let trashY = 0.0;
         membership7 += `${parseInt(`${trashY}`)}`;
         fastforwarda *= parseFloat(`${3 | parseInt(`${fastforwarda}`)}`);
         ping4 = `${parseInt(`${fastforwarda}`) ^ 3}`;
         trashY -= parseFloat(`${parseInt(`${fastforwarda}`) ^ ping4.length}`);
         break;
      }
       let x_countj = 4;
       let libflippern = 3;
      while ((x_countj * 3) > 1) {
          let casting7 = true;
          let collectionP = 2.0;
          let libfabricjniG = String.fromCharCode(105,101,101,101,95,109,95,52,48,0);
          let singaporee: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,108,97,116,101,100,95,53,95,51,53,0),true ], [String.fromCharCode(105,110,99,111,109,112,108,101,116,101,95,122,95,56,49,0),true ], [String.fromCharCode(97,95,54,52,95,99,111,100,101,98,108,111,99,107,115,0),false ]]);
         x_countj *= ((casting7 ? 4 : 2) | 3);
         casting7 = String.fromCharCode(82,0) == libfabricjniG && 99.64 == collectionP;
         collectionP /= Math.max(parseInt(`${collectionP}`), 5);
         libfabricjniG += `${1 * singaporee.size}`;
         singaporee = new Map([[`${singaporee.size}`, 1]]);
         break;
      }
      let runtimeschedulers = libflippern <= 9166366;
      do {
          let libjsinspectorG = 1;
         libflippern ^= 2 + x_countj;
         libjsinspectorG <<= Math.min(1, Math.abs(libjsinspectorG));
         if (runtimeschedulers) {
            break;
         }
      } while ((libflippern <= 4) && runtimeschedulers);
      refresh4 += `${membership7.length | 3}`;
   for (let b = 0; b < 3; b++) {
      refresh4 += `${parseInt(`${singaporel}`) / 1}`;
   }
      langkeyI = predictiont == String.fromCharCode(89,0) || 12 >= graphicsJ.length;
   let matchesP = rewardY >= 7509458;
   do {
      rewardY |= 1 & parseInt(`${hiad2}`);
      if (matchesP) {
         break;
      }
   } while (matchesP && (!v_unlockc.includes(`${rewardY}`)));
       let descr: Map<any, any> = new Map([[String.fromCharCode(101,95,51,52,95,116,116,97,103,0),921], [String.fromCharCode(117,95,49,48,48,95,107,101,121,102,114,97,109,101,115,0),975]]);
       let trophyK: Map<any, any> = new Map([[String.fromCharCode(114,95,52,55,95,102,114,101,113,115,0),false ], [String.fromCharCode(104,105,110,116,101,100,95,98,95,51,49,0),true ], [String.fromCharCode(112,114,105,118,95,56,95,52,0),true ]]);
       let baseb = String.fromCharCode(116,101,120,116,117,114,101,100,115,112,95,100,95,54,50,0);
      for (let j = 0; j < 1; j++) {
          let bootsplashx = String.fromCharCode(104,95,52,51,95,114,103,116,99,117,0);
          let componentf = String.fromCharCode(109,95,53,48,95,99,111,110,115,116,114,117,99,116,111,114,109,97,103,105,99,0);
         descr = new Map([[`${trophyK.size}`, baseb.length]]);
         bootsplashx += "1";
         componentf += "3";
      }
      let benefit5 = trophyK.size <= 6122438;
      do {
         trophyK = new Map([[`${descr.size}`, trophyK.size / (Math.max(descr.size, 9))]]);
         if (benefit5) {
            break;
         }
      } while ((2 < trophyK.size) && benefit5);
       let adultH = 4.0;
       let codegenp = 1.0;
          let related0 = String.fromCharCode(100,101,115,104,97,107,101,95,102,95,54,49,0);
          let foregroundf = String.fromCharCode(100,101,115,116,105,110,97,116,105,111,110,95,112,95,53,56,0);
          let round9 = true;
         trophyK.set(`${codegenp}`, (String.fromCharCode(74,0) == related0 ? related0.length : parseInt(`${codegenp}`)));
         foregroundf = `${((round9 ? 4 : 1))}`;
         round9 = !round9 || foregroundf.length > 76;
         adultH *= parseFloat(`${parseInt(`${codegenp}`)}`);
         trophyK.set(baseb, baseb.length >> (Math.min(Math.abs(3), 4)));
          let a_positionz = String.fromCharCode(103,95,53,53,95,112,111,108,105,99,105,101,115,0);
          let untick6 = 3;
         baseb = `${descr.size}`;
         a_positionz = `${2 >> (Math.min(3, Math.abs(untick6)))}`;
         untick6 *= untick6 ^ a_positionz.length;
      for (let l = 0; l < 2; l++) {
         adultH += parseFloat(`${baseb.length}`);
      }
      for (let v = 0; v < 1; v++) {
          let minimizeX = String.fromCharCode(115,119,105,122,122,108,101,100,95,117,95,49,53,0);
          let statisticsW: Array<any> = [913, 228];
          let questa = true;
         trophyK = new Map([[`${adultH}`, parseInt(`${adultH}`) + 1]]);
         minimizeX += `${((questa ? 3 : 1))}`;
         statisticsW = [statisticsW.length];
         questa = minimizeX.length < 51;
      }
      questm -= parseFloat(`${minimizeP.length * graphicsJ.length}`);
      accepted5 = "1";
   while ((refresh4.length - 2) > 1) {
       let giftD = String.fromCharCode(122,95,50,51,95,97,99,99,117,109,0);
       let injuryW = String.fromCharCode(113,95,53,95,115,101,113,117,101,110,99,101,114,0);
       let tumbnailb = 5.0;
       let xvodu = String.fromCharCode(112,95,56,95,115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,0);
      let hooksH = giftD.length <= 6092641;
      do {
         giftD += `${parseInt(`${tumbnailb}`)}`;
         if (hooksH) {
            break;
         }
      } while (hooksH && (injuryW.length > giftD.length));
      let libfollyE = xvodu == String.fromCharCode(110,49,116,0);
      do {
          let libreactnativejniC = 0.0;
          let screen4: Map<any, any> = new Map([[String.fromCharCode(105,95,54,57,95,115,117,114,101,0),441], [String.fromCharCode(108,95,55,48,95,105,108,101,97,118,101,0),889]]);
          let crownJ = 0.0;
         xvodu += `${2 - xvodu.length}`;
         libreactnativejniC /= Math.max(screen4.size, 3);
         screen4.set(`${libreactnativejniC}`, parseInt(`${libreactnativejniC}`));
         crownJ -= parseFloat(`${parseInt(`${libreactnativejniC}`)}`);
         if (libfollyE) {
            break;
         }
      } while (libfollyE && (!xvodu.endsWith(`${tumbnailb}`)));
      for (let f = 0; f < 2; f++) {
         injuryW += `${parseInt(`${tumbnailb}`)}`;
      }
      if (giftD.length >= 2) {
          let buttonG: Array<any> = [231, 497, 680];
         xvodu = `${giftD.length}`;
         buttonG.push(buttonG.length);
      }
      while (4 < (parseInt(`${tumbnailb}`) + xvodu.length) && (1.69 + tumbnailb) < 5.66) {
         tumbnailb *= (parseFloat(`${String.fromCharCode(120,0) == giftD ? parseInt(`${tumbnailb}`) : giftD.length}`));
         break;
      }
         injuryW += `${(String.fromCharCode(90,0) == giftD ? parseInt(`${tumbnailb}`) : giftD.length)}`;
      while (tumbnailb <= parseFloat(`${injuryW.length}`)) {
         injuryW += `${(String.fromCharCode(55,0) == xvodu ? xvodu.length : giftD.length)}`;
         break;
      }
      for (let f = 0; f < 3; f++) {
         giftD = "3";
      }
      for (let y = 0; y < 2; y++) {
         giftD += `${xvodu.length}`;
      }
       let mini3 = true;
      let qaag2 = String.fromCharCode(103,99,116,51,122,120,0) == xvodu;
      do {
          let usernamec = 2.0;
         xvodu += `${giftD.length - 2}`;
         usernamec /= Math.max(parseInt(`${usernamec}`) ^ parseInt(`${usernamec}`), 4);
         if (qaag2) {
            break;
         }
      } while ((!xvodu.includes(`${mini3}`)) && qaag2);
      if (!mini3) {
         tumbnailb -= parseFloat(`${3 ^ parseInt(`${tumbnailb}`)}`);
      }
      refresh4 += "2";
      break;
   }
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
    setSettings({ name: "megaphoneConst_4Binddatas", value: newVol });
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
       let alertR = String.fromCharCode(115,104,97,100,111,119,115,95,105,95,53,50,0);
    let clubt = String.fromCharCode(110,95,52,49,95,101,110,116,114,105,101,115,0);
    let whistlee = true;
    let launcherS = String.fromCharCode(115,95,48,95,97,117,116,104,101,110,116,105,99,97,116,101,100,0);
    let adult1 = String.fromCharCode(98,108,97,107,101,98,95,104,95,51,49,0);
    let download9 = String.fromCharCode(121,95,51,52,95,112,115,110,114,104,118,115,0);
    let cornerM = 2.0;
    let goalo: Map<any, any> = new Map([[String.fromCharCode(97,95,57,49,95,100,101,110,121,0),635], [String.fromCharCode(114,116,99,112,95,110,95,53,55,0),429], [String.fromCharCode(113,95,56,52,95,108,105,98,99,0),214]]);
    let episodej = 5.0;
    let middle6: Array<any> = [320, 733];
    let friendsO = true;
   if (alertR.length <= 4 && clubt == String.fromCharCode(107,0)) {
      alertR = `${parseInt(`${cornerM}`) << (Math.min(Math.abs(goalo.size), 3))}`;
   }
   while ((4.94 / (Math.max(7, cornerM))) <= 3.3 && 3 <= (4 ^ alertR.length)) {
      alertR += `${clubt.length}`;
      break;
   }
   if (download9 == launcherS) {
      launcherS += "2";
   }
       let with_qz = String.fromCharCode(116,104,114,101,115,104,95,101,95,51,55,0);
       let utilsE = String.fromCharCode(112,95,50,51,95,112,114,111,99,101,115,115,105,110,103,0);
       let sentryu: Map<any, any> = new Map([[String.fromCharCode(116,95,51,95,116,114,97,110,115,102,101,114,114,97,98,108,101,0),736], [String.fromCharCode(113,95,57,49,95,114,101,99,116,97,110,103,108,101,115,0),275]]);
         utilsE = "1";
          let cnews7 = String.fromCharCode(112,95,50,52,95,116,99,102,105,108,101,0);
         utilsE = `${utilsE.length}`;
         cnews7 += `${cnews7.length - cnews7.length}`;
      let runtimescheduler3 = utilsE == String.fromCharCode(106,95,103,54,50,95,107,100,55,100,0);
      do {
         utilsE = `${with_qz.length << (Math.min(Math.abs(3), 5))}`;
         if (runtimescheduler3) {
            break;
         }
      } while (runtimescheduler3 && (5 == (utilsE.length << (Math.min(5, Math.abs(sentryu.size)))) && (5 << (Math.min(5, utilsE.length))) == 3));
         utilsE = `${utilsE.length}`;
         utilsE = `${(with_qz == String.fromCharCode(113,0) ? with_qz.length : utilsE.length)}`;
       let settingsf = 2;
          let combineP = String.fromCharCode(115,116,114,117,99,116,117,114,97,108,95,114,95,52,51,0);
          let related1 = 4.0;
         with_qz += `${(with_qz == String.fromCharCode(88,0) ? with_qz.length : settingsf)}`;
         combineP = `${parseInt(`${related1}`)}`;
         related1 *= parseInt(`${related1}`);
      for (let a = 0; a < 3; a++) {
          let custom5 = String.fromCharCode(120,95,49,53,95,97,99,100,99,0);
          let libruntimeexecutorS = String.fromCharCode(110,95,56,48,95,105,116,101,114,97,116,101,0);
          let weibo_ = String.fromCharCode(116,121,112,101,115,95,110,95,49,49,0);
         sentryu.set(with_qz, 1);
         custom5 += `${(String.fromCharCode(79,0) == libruntimeexecutorS ? custom5.length : libruntimeexecutorS.length)}`;
         weibo_ += `${libruntimeexecutorS.length * weibo_.length}`;
      }
         sentryu.set(`${settingsf}`, sentryu.size << (Math.min(Math.abs(3), 4)));
      download9 = `${parseInt(`${cornerM}`) >> (Math.min(Math.abs(1), 3))}`;
      alertR = "3";
       let a_titles = String.fromCharCode(108,95,55,55,95,101,110,99,105,114,99,108,101,100,0);
       let showh = 1.0;
       let bridgeA = 0.0;
         bridgeA /= Math.max(parseInt(`${showh}`), 5);
         showh /= Math.max(parseInt(`${bridgeA}`), 3);
      while ((parseInt(`${bridgeA}`) * a_titles.length) > 3) {
         bridgeA += parseInt(`${showh}`);
         break;
      }
          let suggestion1: Map<any, any> = new Map([[String.fromCharCode(103,105,102,115,95,97,95,51,49,0),false ], [String.fromCharCode(108,95,52,57,95,97,100,118,97,110,99,101,0),false ], [String.fromCharCode(99,117,115,116,111,109,95,121,95,50,0),false ]]);
          let xadsdkY: Array<any> = [103, 984];
          let animationsp = String.fromCharCode(111,95,53,56,95,97,108,98,117,109,115,0);
         a_titles += `${animationsp.length & 1}`;
         suggestion1.set(`${xadsdkY.length}`, 1);
         xadsdkY.push(suggestion1.size);
         animationsp = `${suggestion1.size % (Math.max(xadsdkY.length, 2))}`;
      let mbbannern = 6237781.0 <= bridgeA;
      do {
         bridgeA /= Math.max(2, 2);
         if (mbbannern) {
            break;
         }
      } while ((bridgeA >= 3.82) && mbbannern);
      for (let r = 0; r < 2; r++) {
         a_titles = `${3 ^ parseInt(`${showh}`)}`;
      }
          let time_hk7: Map<any, any> = new Map([[String.fromCharCode(116,104,117,109,98,95,97,95,50,50,0),636], [String.fromCharCode(105,115,115,117,101,114,95,97,95,57,0),212]]);
         bridgeA -= time_hk7.size;
         showh *= a_titles.length | parseInt(`${showh}`);
       let infoz = String.fromCharCode(115,99,97,110,110,101,114,95,113,95,48,0);
      launcherS = `${adult1.length % (Math.max(2, 10))}`;
       let ewardedH: Map<any, any> = new Map([[String.fromCharCode(101,95,53,48,95,99,104,101,98,121,115,104,101,118,0),String.fromCharCode(117,110,102,114,101,101,122,101,95,104,95,55,48,0)], [String.fromCharCode(102,95,54,50,95,115,119,114,0),String.fromCharCode(116,95,56,53,95,105,109,97,103,101,0)], [String.fromCharCode(101,108,101,109,101,110,116,119,105,115,101,95,54,95,53,49,0),String.fromCharCode(114,101,115,105,100,101,110,99,101,95,100,95,49,51,0)]]);
       let formC: Map<any, any> = new Map([[String.fromCharCode(114,95,52,57,95,115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,0),68], [String.fromCharCode(106,95,54,57,95,115,117,109,0),271], [String.fromCharCode(117,98,108,105,99,95,102,95,56,54,0),152]]);
         formC = new Map([[`${ewardedH.size}`, ewardedH.size - formC.size]]);
      if (Array.from(ewardedH.values()).includes(formC.size)) {
         ewardedH = new Map([[`${formC.size}`, 3 & ewardedH.size]]);
      }
         ewardedH = new Map([[`${formC.size}`, ewardedH.size ^ 3]]);
         formC = new Map([[`${formC.size}`, ewardedH.size >> (Math.min(Math.abs(3), 5))]]);
      for (let c = 0; c < 3; c++) {
         formC.set(`${ewardedH.size}`, ewardedH.size / 2);
      }
      if (4 < (ewardedH.size & 4) && 4 < (formC.size & 4)) {
          let feedbackD = String.fromCharCode(112,101,114,109,117,116,101,95,57,95,52,56,0);
          let libfbu = String.fromCharCode(99,111,109,112,111,115,101,95,99,95,57,51,0);
         formC.set(`${feedbackD}`, feedbackD.length);
         libfbu = `${libfbu.length}`;
      }
      download9 = "1";
   for (let d = 0; d < 3; d++) {
      goalo = new Map([[adult1, (download9 == String.fromCharCode(104,0) ? adult1.length : download9.length)]]);
   }
   if ((parseInt(`${cornerM}`) + launcherS.length) > 3) {
       let vietnamT = 2.0;
       let moonx: Array<any> = [151, 36];
       let launcher1 = 2.0;
       let roundy = 4;
         roundy -= parseInt(`${launcher1}`) / 1;
      for (let d = 0; d < 1; d++) {
          let favorites = 2.0;
          let canvasl = 4;
          let catalogW = String.fromCharCode(105,95,54,52,95,99,101,108,108,115,0);
          let thailandk = 1.0;
          let invitex = 3.0;
         launcher1 -= 2;
         favorites *= parseFloat(`${catalogW.length | parseInt(`${thailandk}`)}`);
         canvasl += parseInt(`${invitex}`);
         catalogW = `${parseInt(`${thailandk}`)}`;
      }
         vietnamT *= parseFloat(`${1 & parseInt(`${launcher1}`)}`);
       let weiboO: Map<any, any> = new Map([[String.fromCharCode(97,95,55,54,95,113,115,99,97,108,101,0),String.fromCharCode(99,104,115,101,116,95,51,95,52,0)], [String.fromCharCode(99,95,50,53,95,103,114,97,110,117,108,101,112,111,115,0),String.fromCharCode(119,95,56,53,95,97,110,116,105,97,108,105,97,115,0)]]);
       let scrollviewd: Map<any, any> = new Map([[String.fromCharCode(115,99,116,112,95,50,95,54,54,0),275], [String.fromCharCode(99,114,101,100,101,110,116,105,97,108,95,102,95,49,52,0),937], [String.fromCharCode(119,101,105,103,104,116,95,109,95,50,52,0),716]]);
      while ((weiboO.size >> (Math.min(1, Math.abs(roundy)))) < 4) {
         roundy >>= Math.min(Math.abs(2 >> (Math.min(3, Math.abs(weiboO.size)))), 3);
         break;
      }
      for (let q = 0; q < 3; q++) {
         vietnamT /= Math.max(2, parseFloat(`${parseInt(`${vietnamT}`) << (Math.min(2, Math.abs(1)))}`));
      }
      for (let l = 0; l < 1; l++) {
         roundy /= Math.max(moonx.length | 3, 3);
      }
      while (weiboO.get(`${roundy}`) == null) {
         weiboO.set(`${weiboO.size}`, scrollviewd.size * weiboO.size);
         break;
      }
      let modeY = 5094761 >= roundy;
      do {
          let securityd: Map<any, any> = new Map([[String.fromCharCode(113,95,52,50,95,105,110,99,111,114,114,101,99,116,0),String.fromCharCode(97,115,111,99,95,53,95,51,51,0)], [String.fromCharCode(120,95,49,52,95,108,111,103,105,99,97,108,0),String.fromCharCode(116,97,112,95,103,95,55,56,0)], [String.fromCharCode(99,111,110,102,105,103,117,114,101,95,51,95,50,56,0),String.fromCharCode(113,95,57,56,95,113,115,118,101,110,99,0)]]);
          let target2 = 0;
          let predictionA = 0.0;
         roundy |= 2 - parseInt(`${predictionA}`);
         securityd = new Map([[`${securityd.size}`, 1 >> (Math.min(4, Math.abs(securityd.size)))]]);
         target2 /= Math.max(securityd.size, 1);
         predictionA -= target2;
         if (modeY) {
            break;
         }
      } while ((roundy <= 1) && modeY);
         roundy /= Math.max(1, 1);
          let searchbarq = 5.0;
         roundy |= parseInt(`${searchbarq}`);
      while ((5.77 * vietnamT) < 1.7 && 4.43 < (launcher1 / 5.77)) {
          let servicej = 5.0;
         launcher1 /= Math.max(moonx.length, 3);
         servicej *= parseInt(`${servicej}`) / (Math.max(parseInt(`${servicej}`), 8));
         break;
      }
      launcherS += `${goalo.size}`;
   }
   let catagoryG = episodej >= 8131294.0;
   do {
      episodej *= 1;
      if (catagoryG) {
         break;
      }
   } while (catagoryG && (4 < (1 + alertR.length)));
      cornerM *= parseInt(`${cornerM}`);
   let bridgep = cornerM <= 6254383.0;
   do {
       let control5 = 5;
       let nextl = String.fromCharCode(116,104,97,116,95,56,95,51,54,0);
       let liner: Array<any> = [221, 687];
         nextl = "3";
         control5 |= liner.length;
         nextl = `${2 ^ nextl.length}`;
          let codegenP = String.fromCharCode(121,95,54,50,95,103,111,98,98,108,101,0);
          let fadfdeebbbfdabbbabdadfaaddaaa: Map<any, any> = new Map([[String.fromCharCode(120,95,51,48,95,107,102,109,111,100,101,115,0),String.fromCharCode(113,95,49,95,113,117,97,110,116,105,122,101,114,115,0)], [String.fromCharCode(114,95,51,50,95,100,101,108,101,116,101,0),String.fromCharCode(121,95,52,54,95,111,98,106,101,99,116,0)], [String.fromCharCode(121,95,50,95,105,112,102,115,0),String.fromCharCode(99,111,109,109,117,110,105,99,97,116,105,111,110,95,103,95,52,56,0)]]);
         control5 >>= Math.min(Math.abs((String.fromCharCode(66,0) == codegenP ? codegenP.length : fadfdeebbbfdabbbabdadfaaddaaa.size)), 2);
       let libcxxcomponentsG = String.fromCharCode(99,111,109,109,97,95,102,95,57,50,0);
       let libglogR = String.fromCharCode(115,95,52,55,95,103,101,116,99,114,101,100,0);
         liner.push(liner.length | nextl.length);
          let gesturesJ = String.fromCharCode(99,95,50,50,95,105,110,116,101,114,99,101,112,116,111,114,0);
          let langkeyS = 1;
         nextl += `${1 >> (Math.min(5, Math.abs(control5)))}`;
         gesturesJ = `${(String.fromCharCode(117,0) == gesturesJ ? gesturesJ.length : langkeyS)}`;
         langkeyS *= langkeyS >> (Math.min(gesturesJ.length, 4));
          let ying5 = 3.0;
         liner.push(control5 | 3);
         ying5 /= Math.max(3, 2);
      if ((nextl.length << (Math.min(Math.abs(2), 3))) == 1 && (control5 << (Math.min(Math.abs(2), 4))) == 1) {
          let heji3 = true;
          let basev = 4.0;
          let pressure1: Array<any> = [754, 785, 601];
          let sharedw = true;
          let mergerJ = 0.0;
         control5 |= libcxxcomponentsG.length + nextl.length;
         heji3 = !sharedw && 49.12 <= mergerJ;
         basev += parseFloat(`${pressure1.length / 2}`);
         pressure1.push(pressure1.length);
         mergerJ += (parseFloat(`${parseInt(`${basev}`) >> (Math.min(4, Math.abs((heji3 ? 4 : 5))))}`));
      }
      cornerM *= alertR.length;
      if (bridgep) {
         break;
      }
   } while (bridgep && (3 >= (parseInt(`${cornerM}`) + download9.length) || 4 >= (3 | download9.length)));
      episodej /= Math.max(alertR.length, 4);
      clubt += `${alertR.length}`;
   for (let f = 0; f < 3; f++) {
      episodej -= adult1.length >> (Math.min(2, Math.abs(parseInt(`${episodej}`))));
   }
      download9 = `${parseInt(`${cornerM}`) / 1}`;
   while (!whistlee) {
       let trophyD: Map<any, any> = new Map([[String.fromCharCode(117,95,49,56,95,115,116,121,108,101,100,0),944], [String.fromCharCode(115,97,116,100,120,95,51,95,50,54,0),448], [String.fromCharCode(99,111,108,108,101,99,116,111,114,95,54,95,55,0),555]]);
         trophyD = new Map([[`${trophyD.size}`, trophyD.size ^ 3]]);
       let short_vm: Array<any> = [265, 942];
       let clearT = String.fromCharCode(102,95,56,54,95,97,108,108,111,119,101,100,0);
      whistlee = alertR.length == 76 || download9 == String.fromCharCode(117,0);
      break;
   }
      alertR += `${((whistlee ? 5 : 1))}`;
   let playv = 6458821 <= alertR.length;
   do {
       let productf = 2.0;
       let quest6 = 5.0;
       let videocommonO = 0.0;
      if (4.94 < (videocommonO / (Math.max(quest6, 3))) || 3.32 < (4.94 / (Math.max(2, quest6)))) {
         quest6 /= Math.max(parseFloat(`${parseInt(`${productf}`)}`), 2);
      }
         quest6 /= Math.max(1, parseFloat(`${1 | parseInt(`${quest6}`)}`));
         quest6 += parseFloat(`${parseInt(`${videocommonO}`)}`);
      while (5.25 < productf) {
          let service1 = String.fromCharCode(115,116,114,101,97,109,99,111,112,121,95,51,95,52,52,0);
         quest6 /= Math.max(parseFloat(`${parseInt(`${quest6}`)}`), 3);
         service1 += `${service1.length}`;
         break;
      }
         quest6 += parseFloat(`${parseInt(`${videocommonO}`) >> (Math.min(4, Math.abs(1)))}`);
         videocommonO -= parseFloat(`${parseInt(`${quest6}`)}`);
       let renew1 = String.fromCharCode(112,97,114,97,103,114,97,112,104,95,114,95,57,50,0);
       let gift0 = String.fromCharCode(105,95,53,54,95,119,102,100,105,102,0);
      while ((quest6 + productf) == 3.81 && (quest6 * 3.81) == 2.5) {
         quest6 /= Math.max(1, parseFloat(`${parseInt(`${videocommonO}`) / 2}`));
         break;
      }
      if (productf >= quest6) {
         productf -= 1 + gift0.length;
      }
      alertR += "2";
      if (playv) {
         break;
      }
   } while (playv && (3 == clubt.length));
   while (!whistlee || (1.92 + episodej) < 3.49) {
       let usernameu: Array<any> = [String.fromCharCode(117,110,119,114,97,112,95,108,95,49,57,0), String.fromCharCode(99,95,56,48,95,114,101,112,114,101,115,101,110,116,115,0), String.fromCharCode(121,95,52,54,95,110,97,109,101,115,0)];
       let page3: Map<any, any> = new Map([[String.fromCharCode(103,111,101,114,108,105,95,57,95,51,55,0),194], [String.fromCharCode(117,95,53,52,95,105,99,111,110,0),220]]);
       let pageR = true;
         pageR = page3.size >= 77;
         page3.set(`${usernameu.length}`, 2);
         pageR = (((pageR ? 99 : usernameu.length) | usernameu.length) > 99);
       let roomZ = 1;
       let libswscale_ = 5;
       let regengo = String.fromCharCode(112,95,50,51,95,113,112,98,105,116,115,0);
         page3.set(`${usernameu.length}`, page3.size | 2);
         pageR = 75 < (roomZ >> (Math.min(2, Math.abs(libswscale_))));
      let other9 = 5282268 >= usernameu.length;
      do {
         usernameu = [1 << (Math.min(4, Math.abs(roomZ)))];
         if (other9) {
            break;
         }
      } while (other9 && (pageR || 3 <= (usernameu.length + 4)));
       let projectb = true;
       let bootsplashV = true;
      episodej /= Math.max(1, ((whistlee ? 3 : 1)));
      break;
   }

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
              (settings.name === "none" || settings.name === "megaphoneConst_4Binddatas")
            ) {
              runOnJS(onVolumeChanged)(
                nativeEvent.y,
                previousPanPosition.value.y
              );
            }
          } else if (
            absDyDx < 0.05 &&
            vodType !== "floatingIndex" &&
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
       let uimanagero: Map<any, any> = new Map([[String.fromCharCode(102,95,50,50,95,100,101,102,105,110,101,115,0),142], [String.fromCharCode(101,95,52,95,108,101,103,101,110,100,0),893], [String.fromCharCode(99,111,110,102,108,105,99,116,95,118,95,54,51,0),834]]);
    let searchM: Array<any> = [383, 116];
    let gesturesW = true;
    let bootsplashN = String.fromCharCode(116,101,108,101,103,114,97,112,104,95,109,95,53,56,0);
    let mbsplash3 = String.fromCharCode(112,114,111,98,97,98,105,108,105,116,121,95,101,95,53,54,0);
    let forwardG: Map<any, any> = new Map([[String.fromCharCode(102,105,110,116,95,120,95,57,53,0),865], [String.fromCharCode(122,95,57,54,95,118,97,105,108,97,98,105,108,105,116,121,0),704], [String.fromCharCode(100,105,115,116,114,105,98,117,116,105,111,110,115,95,116,95,56,55,0),783]]);
    let skipU = String.fromCharCode(110,105,107,111,110,95,108,95,55,55,0);
    let score0: Array<any> = [503, 844, 739];
    let thailandR = 0;
    let telemetry_ = String.fromCharCode(100,101,116,101,114,109,105,110,97,98,108,101,95,112,95,52,48,0);
      uimanagero = new Map([[`${uimanagero.size}`, thailandR ^ 3]]);
      forwardG.set(`${thailandR}`, (String.fromCharCode(116,0) == skipU ? thailandR : skipU.length));
      searchM.push(1 >> (Math.min(2, Math.abs(uimanagero.size))));
   while (uimanagero.size > 4) {
       let container7 = String.fromCharCode(109,101,116,97,100,97,116,97,115,95,49,95,56,52,0);
       let sharedN = String.fromCharCode(97,95,54,54,95,110,101,105,103,104,98,111,114,115,0);
       let update_feT: Map<any, any> = new Map([[String.fromCharCode(102,95,54,54,95,102,102,116,115,0),282], [String.fromCharCode(97,112,112,97,114,101,110,116,95,97,95,53,49,0),459], [String.fromCharCode(110,95,52,53,95,108,111,117,100,110,111,114,109,0),82]]);
       let refresh4 = 5;
       let downloadingB = String.fromCharCode(115,119,97,112,121,118,98,117,102,102,101,114,95,111,95,49,48,0);
      if (2 == sharedN.length) {
         sharedN += "3 & refresh4";
      }
         update_feT = new Map([[`${update_feT.size}`, 2 << (Math.min(3, container7.length))]]);
      if ((3 >> (Math.min(5, downloadingB.length))) == 3 || 3 == (downloadingB.length >> (Math.min(4, Math.abs(refresh4))))) {
          let friendsC: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,103,114,105,116,121,95,117,95,49,56,0),String.fromCharCode(114,97,116,105,111,95,100,95,52,52,0)], [String.fromCharCode(97,95,57,57,95,113,101,120,112,110,101,103,0),String.fromCharCode(112,108,97,121,95,101,95,54,57,0)]]);
         refresh4 /= Math.max(4, refresh4 - 2);
         friendsC.set(`${friendsC.size}`, 3 << (Math.min(3, Math.abs(friendsC.size))));
      }
       let nalyticsq = String.fromCharCode(110,95,56,95,115,119,114,0);
       let short_mE = String.fromCharCode(106,95,51,52,95,105,109,109,101,100,105,97,116,101,108,121,0);
         downloadingB = `${short_mE.length}`;
       let guideq = 5.0;
       let danger8 = 0.0;
          let gdtadvp = String.fromCharCode(100,101,113,117,101,117,101,100,95,117,95,56,53,0);
         short_mE += `${(downloadingB == String.fromCharCode(81,0) ? refresh4 : downloadingB.length)}`;
         gdtadvp = `${1 % (Math.max(8, gdtadvp.length))}`;
          let hooksS = String.fromCharCode(111,109,112,108,105,99,97,116,105,111,110,95,53,95,56,0);
         nalyticsq = `${update_feT.size * parseInt(`${danger8}`)}`;
         hooksS += `${hooksS.length >> (Math.min(hooksS.length, 3))}`;
      if (danger8 > 5.8) {
         guideq *= parseFloat(`${downloadingB.length}`);
      }
      if (container7.includes(`${downloadingB.length}`)) {
          let kick1 = false;
          let private_su = String.fromCharCode(113,95,51,51,95,112,114,105,109,97,114,105,108,121,0);
         container7 = `${(private_su == String.fromCharCode(66,0) ? private_su.length : container7.length)}`;
         kick1 = !kick1;
      }
         nalyticsq = `${(String.fromCharCode(70,0) == container7 ? nalyticsq.length : container7.length)}`;
      while (5.91 <= (danger8 - refresh4)) {
         danger8 /= Math.max(3, parseFloat(`${container7.length}`));
         break;
      }
         update_feT = new Map([[nalyticsq, 2 + container7.length]]);
       let smallA = String.fromCharCode(113,117,101,114,105,101,115,95,104,95,52,55,0);
      while (sharedN == container7) {
         container7 = `${downloadingB.length}`;
         break;
      }
      mbsplash3 += `${bootsplashN.length}`;
      break;
   }
   while (!Array.from(uimanagero.keys()).includes(`${thailandR}`)) {
      uimanagero.set(`${gesturesW}`, 3 - searchM.length);
      break;
   }
   if (1 == thailandR) {
      uimanagero = new Map([[`${forwardG.size}`, skipU.length]]);
   }
   let libfollyg = gesturesW ? !gesturesW : gesturesW;
   do {
      gesturesW = score0.length <= 47;
      if (libfollyg) {
         break;
      }
   } while ((2 == score0.length) && libfollyg);
       let ksadm = 2.0;
       let mathS = String.fromCharCode(119,95,51,95,101,120,112,97,110,115,105,111,110,0);
      for (let w = 0; w < 1; w++) {
         ksadm += parseFloat(`${parseInt(`${ksadm}`) / 2}`);
      }
      for (let v = 0; v < 2; v++) {
          let rewindv = 4;
          let gpayW = String.fromCharCode(103,95,51,48,95,115,117,98,105,116,101,109,115,0);
          let telegramX = String.fromCharCode(109,101,109,120,95,104,95,53,48,0);
          let found2 = String.fromCharCode(98,115,119,97,112,95,51,95,52,51,0);
          let module9: Array<any> = [433, 476];
         mathS += `${(String.fromCharCode(106,0) == telegramX ? telegramX.length : parseInt(`${ksadm}`))}`;
         rewindv %= Math.max(3 & module9.length, 3);
         gpayW = `${rewindv}`;
         found2 += `${module9.length}`;
      }
         mathS = `${parseInt(`${ksadm}`) << (Math.min(Math.abs(1), 3))}`;
         mathS = `${mathS.length % 2}`;
       let changeH = String.fromCharCode(112,114,111,103,114,101,115,115,101,115,95,54,95,50,53,0);
       let pausew = String.fromCharCode(97,116,116,101,109,116,115,95,55,95,56,0);
      while (changeH.length > 4) {
          let libavformatg = 4.0;
          let moonf = String.fromCharCode(121,95,54,55,95,106,100,99,116,0);
          let ruleso = 0.0;
          let launchZ: Map<any, any> = new Map([[String.fromCharCode(102,95,49,51,95,99,108,111,115,101,0),false ], [String.fromCharCode(116,101,116,114,97,104,101,100,114,97,108,95,107,95,51,50,0),true ], [String.fromCharCode(114,101,105,115,115,117,101,95,102,95,54,49,0),true ]]);
          let formS = String.fromCharCode(112,114,101,115,101,114,118,101,115,95,111,95,51,55,0);
         changeH = `${parseInt(`${ruleso}`)}`;
         libavformatg -= parseInt(`${libavformatg}`);
         moonf = `${moonf.length}`;
         ruleso += parseInt(`${libavformatg}`) * launchZ.size;
         launchZ = new Map([[`${launchZ.size}`, launchZ.size]]);
         formS = `${moonf.length ^ formS.length}`;
         break;
      }
      searchM.push(uimanagero.size);

      if (!isDoubleTap.value) {

      gesturesW = 13 > thailandR;
   let dragS = 8497910 >= forwardG.size;
   do {
      forwardG.set(`${thailandR}`, 3);
      if (dragS) {
         break;
      }
   } while ((!Array.from(forwardG.keys()).includes(`${searchM.length}`)) && dragS);
   let matchesd = 9721729 >= uimanagero.size;
   do {
      uimanagero.set(`${forwardG.size}`, uimanagero.size);
      if (matchesd) {
         break;
      }
   } while (matchesd && (!Array.from(uimanagero.keys()).includes(`${thailandR}`)));
      searchM.push(thailandR >> (Math.min(Math.abs(2), 2)));
   for (let w = 0; w < 3; w++) {
       let statsm: Array<any> = [69, 938, 139];
       let controlI = String.fromCharCode(119,95,57,52,95,99,111,108,108,97,116,101,0);
       let rewindd = String.fromCharCode(114,101,99,101,105,118,101,100,95,107,95,57,49,0);
       let progressZ = String.fromCharCode(109,101,109,98,101,114,115,104,105,112,95,101,95,51,51,0);
      for (let v = 0; v < 1; v++) {
         controlI = `${statsm.length}`;
      }
         statsm.push(1);
          let actionsb = String.fromCharCode(99,95,51,54,95,110,116,114,111,0);
          let contextT = String.fromCharCode(103,95,50,51,95,102,111,111,116,98,97,108,108,0);
          let notificationN = true;
         statsm = [statsm.length * 2];
         actionsb = `${actionsb.length}`;
         contextT += `${actionsb.length % 3}`;
         notificationN = (actionsb.length % (Math.max(contextT.length, 3))) <= 2;
      while (progressZ != rewindd) {
         rewindd += "1";
         break;
      }
       let libhermesv = true;
      for (let t = 0; t < 3; t++) {
          let default_lI = false;
          let datag = String.fromCharCode(116,104,114,101,97,100,95,112,95,55,0);
          let sortg = 1;
          let libloggeru = 4.0;
         controlI += "2";
         default_lI = !default_lI;
         datag += `${(String.fromCharCode(84,0) == datag ? datag.length : sortg)}`;
         sortg |= 2;
         libloggeru /= Math.max(3, 1);
      }
         controlI += `${((libhermesv ? 4 : 1))}`;
         statsm.push((progressZ == String.fromCharCode(113,0) ? progressZ.length : statsm.length));
          let tickr: Array<any> = [626, 874];
          let actionsj = false;
          let eacts = String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,115,95,112,95,54,56,0);
         progressZ = `${controlI.length & statsm.length}`;
         tickr.push(((actionsj ? 4 : 3) * 2));
         actionsj = (69 <= (eacts.length | (actionsj ? 69 : eacts.length)));
         libhermesv = String.fromCharCode(119,0) == rewindd;
      while (controlI.includes(progressZ)) {
         progressZ = `${3 | progressZ.length}`;
         break;
      }
       let mutedc = String.fromCharCode(103,95,57,52,95,100,101,115,116,114,111,121,101,100,0);
      uimanagero.set(rewindd, uimanagero.size);
   }
      bootsplashN = `${((gesturesW ? 5 : 1) ^ 3)}`;
   let field4 = bootsplashN == String.fromCharCode(117,108,50,57,102,0);
   do {
      bootsplashN += `${score0.length | 3}`;
      if (field4) {
         break;
      }
   } while ((4 <= (2 | bootsplashN.length) && (2 | bootsplashN.length) <= 1) && field4);
   let viewsG = gesturesW ? !gesturesW : gesturesW;
   do {
      gesturesW = searchM.length <= skipU.length;
      if (viewsG) {
         break;
      }
   } while ((!gesturesW) && viewsG);
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
                  icon={settings.value === 0 ? "newarchdefaultsBing" : "miniTelemetryUnread"}
                />
              )}
              {showSlider && settings.name === "megaphoneConst_4Binddatas" && (
                <BrightnessVolumeSlider
                  percent={settings.value * 100}
                  icon={settings.value === 0 ? "langkeyEmoji" : "combinedLangkeyLibfb"}
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
                icon={settings.value === 0 ? "newarchdefaultsBing" : "miniTelemetryUnread"}
              />
            )}
            {showSlider && settings.name === "megaphoneConst_4Binddatas" && (
              <BrightnessVolumeSlider
                percent={settings.value * 100}
                icon={settings.value === 0 ? "langkeyEmoji" : "combinedLangkeyLibfb"}
              />
            )}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
