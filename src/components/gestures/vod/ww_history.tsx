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
import BrightnessVolumeSlider from "./ww_config_reactnavigation";
import { debounce } from "lodash";
type wwIndexDice = {
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

type wwStyleBall = {
  name: "progress" | "brightness" | "downloadingTeamdetailsbgTemplateprocessor" | "none";
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
}: wwIndexDice) => {
  const panCooldown = useSharedValue(3);

  const previousPanPosition = useSharedValue({ x: 0, y: 0, gesture: "none" });
  const brightShare = useSharedValue(0.0);
  const volumeShare = useSharedValue(0.0);
  const [settings, setSettings] = useState<wwStyleBall>({
    name: "none",
    value: 0,
  });
  const [showSlider, setShowSlider] = useState(false);

  const isDoubleTap = useSharedValue(false);

  const sliderTimeout = useRef(0);
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  const showControls = () => {
       let cornerkick1: Map<any, any> = new Map([[String.fromCharCode(104,95,52,51,95,115,101,109,97,112,104,111,114,101,0),true ], [String.fromCharCode(107,95,53,52,95,102,114,97,109,101,99,114,99,0),true ], [String.fromCharCode(121,117,118,109,111,110,111,95,115,95,49,49,0),false ]]);
    let network1 = String.fromCharCode(109,97,114,107,105,110,103,95,120,95,57,48,0);
    let rewardi = 2.0;
    let downarrowU: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,101,95,50,95,57,56,0),String.fromCharCode(120,95,54,49,95,115,117,98,112,97,121,108,111,97,100,0)], [String.fromCharCode(102,109,115,117,98,0),String.fromCharCode(101,110,116,101,114,101,100,0)], [String.fromCharCode(109,95,51,54,95,114,101,109,98,0),String.fromCharCode(109,111,110,103,111,95,121,95,57,53,0)]]);
    let adult8 = false;
    let rankf: Map<any, any> = new Map([[String.fromCharCode(116,101,108,101,103,114,97,109,95,112,95,57,50,0),159], [String.fromCharCode(97,95,56,57,95,99,111,110,110,101,99,116,0),278]]);
    let clearQ = String.fromCharCode(107,95,54,49,95,114,103,98,97,121,99,111,99,103,0);
    let disconnectedlogod = 0.0;
    let reactnativejsg = String.fromCharCode(112,114,111,112,111,114,116,105,111,110,95,106,95,50,57,0);
    let historym = 1.0;
    let black8 = String.fromCharCode(108,111,103,109,111,110,111,95,116,95,55,0);
    let frame_1N = String.fromCharCode(105,95,57,51,95,99,111,101,102,102,115,112,0);
    let launcheri = 1;
    let twitteri = 4.0;
    let nterstitialo: Map<any, any> = new Map([[String.fromCharCode(112,101,111,112,108,101,95,122,95,57,56,0),946], [String.fromCharCode(115,101,110,100,109,115,103,95,111,95,53,50,0),153], [String.fromCharCode(115,97,118,105,110,103,95,119,95,56,51,0),477]]);
    let spinneri = false;
    let foregroundk = 5;
   while (!Array.from(downarrowU.keys()).includes(`${rankf.size}`)) {
      downarrowU.set(`${adult8}`, rankf.size % 1);
      break;
   }
      disconnectedlogod /= Math.max(2, parseFloat(`${1}`));
   let mimoT = cornerkick1.size <= 9818041;
   do {
       let controlsg = String.fromCharCode(118,116,114,107,0);
       let componentg: Map<any, any> = new Map([[String.fromCharCode(106,111,105,110,0),648], [String.fromCharCode(110,111,97,115,109,0),122]]);
         controlsg = `${(controlsg == String.fromCharCode(90,0) ? controlsg.length : componentg.size)}`;
       let weather1 = String.fromCharCode(108,95,50,49,95,114,115,97,122,0);
      cornerkick1.set(`${network1}`, rankf.size);
      if (mimoT) {
         break;
      }
   } while ((cornerkick1.size < 1) && mimoT);
       let homei = String.fromCharCode(109,117,116,101,100,95,48,95,50,52,0);
         homei = `${homei.length}`;
          let redgoalO = true;
          let descN = 2.0;
         homei += "3";
         redgoalO = descN <= 59.35 && descN <= 59.35;
      for (let t = 0; t < 2; t++) {
         homei += `${homei.length}`;
      }
      clearQ += `${cornerkick1.size >> (Math.min(homei.length, 1))}`;
   for (let u = 0; u < 3; u++) {
       let downloadeda = String.fromCharCode(112,95,49,48,95,108,105,110,101,0);
       let minivod3 = String.fromCharCode(101,118,98,117,102,102,101,114,95,121,95,52,54,0);
         downloadeda = "2";
          let gdtadvu = 1.0;
         minivod3 = `${2 & minivod3.length}`;
         gdtadvu /= Math.max(parseFloat(`${parseInt(`${gdtadvu}`)}`), 4);
      while (minivod3 == downloadeda) {
          let floater0 = 5.0;
          let episode1 = 4;
         downloadeda = `${(downloadeda == String.fromCharCode(73,0) ? parseInt(`${floater0}`) : downloadeda.length)}`;
         floater0 /= Math.max(episode1, 4);
         break;
      }
          let zhubol = 3;
         minivod3 = `${minivod3.length % (Math.max(downloadeda.length, 8))}`;
         zhubol ^= zhubol;
      for (let d = 0; d < 1; d++) {
         minivod3 = `${downloadeda.length % (Math.max(5, minivod3.length))}`;
      }
         downloadeda = `${downloadeda.length + 3}`;
      rewardi *= (clearQ == String.fromCharCode(109,0) ? cornerkick1.size : clearQ.length);
   }
   for (let c = 0; c < 3; c++) {
      rewardi *= network1.length + 1;
   }

    setShowSlider(true);

      adult8 = rewardi >= 3.93;
      disconnectedlogod += parseFloat(`${parseInt(`${rewardi}`)}`);
   if (2 == black8.length) {
       let form0 = String.fromCharCode(116,120,116,111,98,106,0);
       let grayj = false;
       let slider7 = String.fromCharCode(99,109,115,103,95,97,95,52,0);
       let thailand0: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,101,99,116,97,98,108,101,0),843], [String.fromCharCode(109,100,105,97,0),394]]);
      for (let o = 0; o < 2; o++) {
         form0 += `${(String.fromCharCode(107,0) == slider7 ? thailand0.size : slider7.length)}`;
      }
      let adulto = grayj ? !grayj : grayj;
      do {
          let onewinterstitial9 = String.fromCharCode(99,95,49,55,95,118,97,108,105,100,97,116,101,100,0);
          let f_managera = 5.0;
          let yellowredcard2 = String.fromCharCode(115,105,109,112,108,101,119,114,105,116,101,95,49,95,52,57,0);
         grayj = grayj || form0.length > 36;
         onewinterstitial9 += `${parseInt(`${f_managera}`) / (Math.max(1, 10))}`;
         f_managera *= yellowredcard2.length / (Math.max(onewinterstitial9.length, 7));
         yellowredcard2 += `${yellowredcard2.length}`;
         if (adulto) {
            break;
         }
      } while (adulto && (slider7.length > 2));
         thailand0.set(slider7, 2 - form0.length);
      let checkboxc = slider7.length <= 6878685;
      do {
          let backwardv = String.fromCharCode(105,110,99,114,101,109,101,110,116,101,100,0);
         slider7 = `${(backwardv.length >> (Math.min(5, Math.abs((grayj ? 3 : 5)))))}`;
         if (checkboxc) {
            break;
         }
      } while (checkboxc && ((slider7.length >> (Math.min(Math.abs(5), 1))) <= 3 && (thailand0.size >> (Math.min(Math.abs(5), 1))) <= 1));
         form0 += `${((grayj ? 4 : 4) * 1)}`;
      for (let u = 0; u < 3; u++) {
          let libswscalet = 1;
          let iconwatchnowd = false;
         form0 = `${form0.length}`;
         libswscalet *= 3;
         iconwatchnowd = !iconwatchnowd && 62 <= libswscalet;
      }
          let reactnativeratingsm: Map<any, any> = new Map([[String.fromCharCode(106,95,49,55,0),53], [String.fromCharCode(97,115,105,110,107,95,112,95,53,57,0),310], [String.fromCharCode(105,109,112,111,114,116,97,98,108,101,95,114,95,57,50,0),352]]);
         form0 += `${((grayj ? 2 : 5) * slider7.length)}`;
         reactnativeratingsm.set(`${reactnativeratingsm.size}`, reactnativeratingsm.size | reactnativeratingsm.size);
      if ((2 % (Math.max(5, thailand0.size))) < 5) {
         thailand0 = new Map([[`${grayj}`, 1 * slider7.length]]);
      }
      while (!grayj) {
         grayj = !grayj;
         break;
      }
         form0 = "1";
      let securityC = slider7.length >= 8374463;
      do {
         slider7 = `${3 ^ thailand0.size}`;
         if (securityC) {
            break;
         }
      } while (securityC && (slider7.length > 3));
       let libmapbufferjniN = 0;
      historym += parseFloat(`${3}`);
   }
   while (reactnativejsg.length >= 4) {
       let incidentX: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,101,99,117,116,105,118,101,95,105,95,54,57,0),865], [String.fromCharCode(99,104,97,114,97,99,116,101,100,95,103,95,49,54,0),302], [String.fromCharCode(109,111,110,111,98,105,116,0),458]]);
       let graphicsw = false;
       let frame_sU = String.fromCharCode(111,114,105,103,105,110,97,108,95,119,95,54,50,0);
          let gift6 = true;
         graphicsw = !gift6;
         graphicsw = incidentX.size == 97;
      for (let q = 0; q < 3; q++) {
         incidentX.set(`${graphicsw}`, incidentX.size / 1);
      }
         incidentX = new Map([[`${incidentX.size}`, frame_sU.length >> (Math.min(Math.abs(2), 3))]]);
         frame_sU = `${(2 - (graphicsw ? 2 : 4))}`;
         graphicsw = ((frame_sU.length - (graphicsw ? 17 : frame_sU.length)) > 17);
      if (!graphicsw) {
         graphicsw = !graphicsw;
      }
       let spinnerS = String.fromCharCode(105,110,116,101,114,110,101,100,95,114,95,51,54,0);
       let gradlewt = String.fromCharCode(122,95,56,48,95,109,115,103,0);
      let g_imagex = String.fromCharCode(52,97,50,111,95,111,105,49,121,0) == gradlewt;
      do {
         gradlewt = `${spinnerS.length + 2}`;
         if (g_imagex) {
            break;
         }
      } while (g_imagex && (2 == spinnerS.length));
      disconnectedlogod -= parseFloat(`${parseInt(`${historym}`) % (Math.max(black8.length, 9))}`);
      break;
   }
   let defaultprofilepicL = String.fromCharCode(55,108,106,54,121,115,121,0) == clearQ;
   do {
      clearQ += `${((adult8 ? 4 : 2))}`;
      if (defaultprofilepicL) {
         break;
      }
   } while (defaultprofilepicL && (5 > (downarrowU.size % 3) || 1 > (downarrowU.size % (Math.max(3, 9)))));
       let awayteamfieldf = 2.0;
       let dataS = String.fromCharCode(115,116,114,101,97,109,105,110,102,111,95,103,95,54,50,0);
       let cornerkick_ = String.fromCharCode(110,97,118,105,103,97,116,101,100,95,55,95,54,50,0);
         dataS += `${(dataS == String.fromCharCode(55,0) ? parseInt(`${awayteamfieldf}`) : dataS.length)}`;
          let condenseda = String.fromCharCode(109,95,51,51,95,118,101,108,111,99,105,116,121,0);
         awayteamfieldf += dataS.length / (Math.max(2, 5));
         condenseda = `${condenseda.length ^ condenseda.length}`;
         awayteamfieldf *= parseInt(`${awayteamfieldf}`) - 3;
      if (dataS.length > 2) {
          let reactnativejsI = 5.0;
          let sellV: Map<any, any> = new Map([[String.fromCharCode(109,102,113,101,95,99,95,56,49,0),421], [String.fromCharCode(104,97,108,116,95,99,95,55,53,0),839], [String.fromCharCode(117,110,109,97,112,102,105,108,101,0),977]]);
          let referrer4 = String.fromCharCode(121,95,52,51,95,117,108,112,102,101,99,0);
          let matcht = 0;
         dataS += `${parseInt(`${reactnativejsI}`)}`;
         sellV.set(referrer4, referrer4.length + 2);
         matcht &= sellV.size - referrer4.length;
      }
         dataS += "3";
      cornerkick1 = new Map([[`${awayteamfieldf}`, clearQ.length]]);
    clearTimeout(sliderTimeout.current);

   for (let t = 0; t < 2; t++) {
      black8 += `${(clearQ == String.fromCharCode(71,0) ? parseInt(`${disconnectedlogod}`) : clearQ.length)}`;
   }
       let sell9 = String.fromCharCode(99,104,97,110,103,101,104,0);
       let halfx = String.fromCharCode(103,111,112,115,95,53,95,51,48,0);
       let targetq = String.fromCharCode(107,95,50,49,95,112,97,116,104,0);
      if (halfx != targetq) {
         targetq = `${targetq.length}`;
      }
      while (!halfx.includes(sell9)) {
         sell9 += `${targetq.length / (Math.max(2, 10))}`;
         break;
      }
         sell9 += "1";
      for (let o = 0; o < 3; o++) {
         sell9 = `${halfx.length * sell9.length}`;
      }
         targetq += `${halfx.length}`;
      if (targetq != String.fromCharCode(72,0) && sell9.length >= 3) {
         sell9 = `${targetq.length}`;
      }
      let libanew = 5885864 >= halfx.length;
      do {
         halfx = `${sell9.length}`;
         if (libanew) {
            break;
         }
      } while (libanew && (targetq.length >= 4));
          let sourcek = String.fromCharCode(98,111,117,110,100,115,112,101,99,105,102,105,99,95,111,95,52,57,0);
          let foreground3: Map<any, any> = new Map([[String.fromCharCode(115,101,101,107,105,110,103,95,103,95,51,50,0),433], [String.fromCharCode(122,95,50,50,95,99,111,109,112,97,116,105,98,105,108,105,116,121,0),478]]);
         sell9 += `${foreground3.size & sourcek.length}`;
      for (let y = 0; y < 1; y++) {
          let whistleT = 5;
          let middlewarei = 1.0;
          let half7: Array<any> = [962, 439];
          let schedulerI = false;
          let tumbnaill = String.fromCharCode(99,114,101,100,101,110,116,105,97,108,0);
         targetq += `${3 >> (Math.min(1, halfx.length))}`;
         whistleT /= Math.max(whistleT, 2);
         middlewarei += parseFloat(`${parseInt(`${middlewarei}`)}`);
         half7.push(tumbnaill.length);
         schedulerI = tumbnaill == String.fromCharCode(122,0);
      }
      historym *= parseFloat(`${black8.length / 1}`);
   while ((frame_1N.length - 2) <= 5) {
       let dragf = 5.0;
      let imagemanagerA = 6180984.0 <= dragf;
      do {
         dragf -= parseFloat(`${1}`);
         if (imagemanagerA) {
            break;
         }
      } while (((5 - dragf) < 5.55) && imagemanagerA);
      while ((dragf - 3.83) >= 4.50 || (dragf + 3.83) >= 4.49) {
         dragf *= parseFloat(`${3 / (Math.max(parseInt(`${dragf}`), 3))}`);
         break;
      }
       let neonh = String.fromCharCode(108,95,55,57,95,111,110,121,120,100,0);
       let paginationp = String.fromCharCode(112,111,119,95,113,95,54,55,0);
      rewardi /= Math.max(1, 2);
      break;
   }
      adult8 = (black8.length / (Math.max(7, rankf.size))) >= 29;
      rewardi += black8.length >> (Math.min(Math.abs(1), 1));
   if (3 < (network1.length % 2) && (network1.length % (Math.max(2, 7))) < 3) {
      network1 = `${black8.length * 3}`;
   }
    sliderTimeout.current = setTimeout(() => {

   while (!adult8) {
       let calendarR = String.fromCharCode(99,95,52,55,95,104,97,110,103,0);
       let turnD = String.fromCharCode(115,104,97,114,101,103,114,111,117,112,95,112,95,50,48,0);
       let muted5 = String.fromCharCode(102,95,57,56,95,112,97,112,101,114,0);
       let historyC = 0.0;
       let mbridgeG: Map<any, any> = new Map([[String.fromCharCode(101,118,101,110,0),872], [String.fromCharCode(100,95,50,55,95,99,111,109,112,111,115,105,116,105,111,110,0),99], [String.fromCharCode(101,95,53,51,95,100,98,112,97,103,101,0),611]]);
      if (turnD.length >= calendarR.length) {
          let hoverQ = String.fromCharCode(119,95,54,53,95,105,110,116,101,103,114,105,116,121,0);
          let yellowredcardo = String.fromCharCode(106,95,57,54,95,100,112,99,109,0);
         turnD = "1";
         hoverQ += `${hoverQ.length | yellowredcardo.length}`;
         yellowredcardo += `${yellowredcardo.length}`;
      }
      let backwardW = String.fromCharCode(108,110,111,117,100,113,0) == turnD;
      do {
          let path8: Array<any> = [826, 990, 580];
          let gesturesy: Array<any> = [59, 193, 285];
         turnD += `${2 ^ gesturesy.length}`;
         path8 = [path8.length ^ 3];
         gesturesy = [path8.length % (Math.max(1, 3))];
         if (backwardW) {
            break;
         }
      } while (backwardW && (turnD.length == 5));
      while (turnD.startsWith(calendarR)) {
         turnD += `${parseInt(`${historyC}`) / (Math.max(1, 6))}`;
         break;
      }
      if (3 < (2 / (Math.max(9, calendarR.length))) || (calendarR.length - parseInt(`${historyC}`)) < 2) {
         calendarR += `${parseInt(`${historyC}`) | 3}`;
      }
       let arrowrightd = false;
         mbridgeG = new Map([[`${historyC}`, 1]]);
         calendarR += `${turnD.length & 1}`;
         historyC += parseInt(`${historyC}`) << (Math.min(Math.abs(1), 3));
      while (muted5 == turnD) {
          let manifestz = 3.0;
          let chinasame2 = String.fromCharCode(105,100,101,116,95,101,95,57,52,0);
          let rootc = String.fromCharCode(103,108,107,95,55,95,57,56,0);
          let agreementJ = true;
         turnD += `${parseInt(`${manifestz}`) * 3}`;
         manifestz += (rootc.length & (agreementJ ? 3 : 3));
         chinasame2 = "3";
         rootc += `${((agreementJ ? 2 : 5) + rootc.length)}`;
         break;
      }
         historyC -= parseInt(`${historyC}`);
      if (arrowrightd) {
         arrowrightd = muted5 == String.fromCharCode(118,0);
      }
         calendarR += "1";
      for (let p = 0; p < 1; p++) {
         arrowrightd = turnD == String.fromCharCode(90,0);
      }
      for (let l = 0; l < 3; l++) {
         historyC -= ((arrowrightd ? 5 : 3));
      }
         mbridgeG.set(`${historyC}`, parseInt(`${historyC}`) / (Math.max(6, turnD.length)));
      twitteri *= parseInt(`${twitteri}`) - 3;
      break;
   }
   let arrowrighte = adult8 ? !adult8 : adult8;
   do {
      adult8 = frame_1N.length > rewardi;
      if (arrowrighte) {
         break;
      }
   } while ((!adult8) && arrowrighte);
      disconnectedlogod += parseFloat(`${rankf.size}`);
   for (let n = 0; n < 3; n++) {
      reactnativejsg += `${reactnativejsg.length}`;
   }
   let iconedit2 = 9545482.0 >= rewardi;
   do {
      rewardi += black8.length;
      if (iconedit2) {
         break;
      }
   } while (iconedit2 && (reactnativejsg.length > 5));
      rankf = new Map([[`${rewardi}`, parseInt(`${rewardi}`) % (Math.max(clearQ.length, 8))]]);
      setShowSlider(false);
    }, 1500);
  };

  const setBrightVolumeShare = async () => {
       let halfO: Array<any> = [949, 425];
    let libreactnativejniI = String.fromCharCode(99,111,109,109,101,110,116,115,95,109,95,51,52,0);
    let analyticst = 2;
    let refresh4: Array<any> = [595, 152, 756];
    let videojsZ = String.fromCharCode(120,95,57,57,95,115,105,103,101,120,112,0);
    let privacyr: Array<any> = [710, 810];
    let apple_ = 3.0;
    let clearC = 1.0;
    let ajaxJ = 3;
    let questiconF: Map<any, any> = new Map([[String.fromCharCode(100,95,57,49,95,115,99,114,97,112,101,0),true ], [String.fromCharCode(117,110,114,101,103,105,115,116,101,114,101,100,95,106,95,50,48,0),false ]]);
    let libswresamplew = false;
    let iconsaveimagem = String.fromCharCode(97,99,113,117,105,114,101,95,57,95,49,49,0);
      questiconF = new Map([[`${halfO.length}`, videojsZ.length]]);
       let subsK = 5.0;
       let gifgoalf = 4.0;
      for (let u = 0; u < 2; u++) {
          let mbnativeadvancedD: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,102,111,114,109,97,116,95,117,95,55,48,0),448], [String.fromCharCode(100,97,118,115,95,104,95,56,52,0),404], [String.fromCharCode(116,95,54,52,95,109,98,98,108,111,99,107,0),820]]);
          let baselineq = String.fromCharCode(99,97,110,99,101,108,108,101,114,95,99,95,53,49,0);
          let styles5 = String.fromCharCode(112,114,111,118,105,100,101,114,115,95,98,95,55,52,0);
         subsK += styles5.length >> (Math.min(Math.abs(2), 3));
         mbnativeadvancedD = new Map([[`${mbnativeadvancedD.size}`, baselineq.length % (Math.max(6, mbnativeadvancedD.size))]]);
         baselineq += `${2 * baselineq.length}`;
         styles5 += `${mbnativeadvancedD.size}`;
      }
          let gpayN: Map<any, any> = new Map([[String.fromCharCode(111,119,110,101,114,115,0),false ], [String.fromCharCode(107,95,53,54,95,112,114,117,110,105,110,103,0),true ], [String.fromCharCode(107,95,53,56,95,116,104,101,97,116,101,114,0),false ]]);
         subsK -= 3 - parseInt(`${gifgoalf}`);
         gpayN.set(`${gpayN.size}`, gpayN.size / (Math.max(gpayN.size, 6)));
         subsK -= parseInt(`${gifgoalf}`) * parseInt(`${subsK}`);
          let back7 = 1.0;
          let orientationO: Map<any, any> = new Map([[String.fromCharCode(114,100,111,112,116,0),359], [String.fromCharCode(109,97,103,105,99,121,117,118,0),841], [String.fromCharCode(105,110,116,114,110,108,95,105,95,57,49,0),287]]);
          let reactnavigationf: Array<any> = [541, 438];
         gifgoalf *= parseFloat(`${orientationO.size + parseInt(`${gifgoalf}`)}`);
         back7 *= 3;
         orientationO.set(`${back7}`, reactnavigationf.length ^ parseInt(`${back7}`));
         reactnavigationf.push(2);
       let field1 = 5.0;
       let dragV = 3.0;
          let subs7 = String.fromCharCode(119,95,57,55,95,115,101,116,116,108,101,0);
          let updatesi: Array<any> = [683, 35, 231];
          let submitC = 4;
         gifgoalf *= parseFloat(`${parseInt(`${subsK}`) | parseInt(`${gifgoalf}`)}`);
         subs7 = `${updatesi.length >> (Math.min(Math.abs(3), 4))}`;
         updatesi.push(1 ^ subs7.length);
         submitC *= submitC >> (Math.min(updatesi.length, 1));
      libreactnativejniI = `${parseInt(`${apple_}`)}`;
       let iconsubssuccessT = String.fromCharCode(114,101,103,101,110,101,114,97,116,101,0);
       let plashl = 3.0;
      while (!iconsubssuccessT.includes(`${plashl}`)) {
          let analyticc = 2;
         plashl -= parseInt(`${plashl}`);
         analyticc |= analyticc >> (Math.min(Math.abs(2), 5));
         break;
      }
       let graphics4 = 0;
       let annerG = 3;
      while (plashl <= 4.98) {
         plashl += 1;
         break;
      }
      if (5 < (2 >> (Math.min(3, Math.abs(graphics4))))) {
         plashl /= Math.max(2, annerG);
      }
      let linef = iconsubssuccessT.length <= 9317521;
      do {
         iconsubssuccessT += `${parseInt(`${plashl}`)}`;
         if (linef) {
            break;
         }
      } while ((iconsubssuccessT.includes(`${graphics4}`)) && linef);
      if ((3 / (Math.max(2, graphics4))) == 3) {
          let awayteamfieldZ: Map<any, any> = new Map([[String.fromCharCode(99,111,110,118,101,114,115,105,111,110,95,106,95,54,56,0),583], [String.fromCharCode(115,101,116,116,105,110,103,95,106,95,56,51,0),319], [String.fromCharCode(115,112,101,97,107,101,114,115,0),720]]);
          let exampleimaget = 5;
          let checkbox7 = String.fromCharCode(109,97,112,112,101,100,95,51,95,50,56,0);
          let weiboJ = String.fromCharCode(108,95,51,95,99,104,97,110,103,101,108,111,103,0);
          let materialh: Array<any> = [214, 268, 814];
         plashl /= Math.max(3, exampleimaget);
         awayteamfieldZ = new Map([[`${materialh.length}`, 3 - weiboJ.length]]);
         exampleimaget ^= weiboJ.length;
         checkbox7 += `${checkbox7.length - 3}`;
         materialh.push((weiboJ == String.fromCharCode(48,0) ? weiboJ.length : materialh.length));
      }
      clearC += parseFloat(`${2 << (Math.min(Math.abs(ajaxJ), 5))}`);
      refresh4 = [3 & libreactnativejniI.length];
   if (1.83 == (apple_ / (Math.max(parseFloat(`${privacyr.length}`), 4))) || 1.83 == (apple_ / (Math.max(parseFloat(`${privacyr.length}`), 1)))) {
       let codegenj = String.fromCharCode(109,95,54,52,95,102,119,104,116,120,0);
       let uimanager_ = String.fromCharCode(97,100,97,112,116,101,100,95,113,95,56,49,0);
       let otherG = true;
       let baselinej = 1.0;
         codegenj += `${1 % (Math.max(8, codegenj.length))}`;
      let questiconp = String.fromCharCode(98,102,116,102,106,118,0) == uimanager_;
      do {
          let sheetf: Map<any, any> = new Map([[String.fromCharCode(110,105,100,110,105,115,116,95,115,95,51,56,0),String.fromCharCode(110,112,112,115,99,97,108,101,95,115,95,57,50,0)], [String.fromCharCode(115,117,98,99,101,108,0),String.fromCharCode(105,95,56,56,95,114,112,114,111,98,101,0)], [String.fromCharCode(105,100,115,117,98,116,121,112,101,95,106,95,56,55,0),String.fromCharCode(115,95,57,57,95,116,111,112,105,99,0)]]);
          let belll = String.fromCharCode(118,95,50,52,0);
          let huaweix = String.fromCharCode(109,111,99,107,101,100,95,56,95,53,57,0);
          let videovar_ = String.fromCharCode(120,100,99,97,109,95,121,95,51,49,0);
          let dropdownx = String.fromCharCode(98,97,99,107,103,114,111,117,110,100,115,0);
         uimanager_ += `${codegenj.length & belll.length}`;
         sheetf = new Map([[`${sheetf.size}`, 1]]);
         belll = `${sheetf.size << (Math.min(Math.abs(2), 1))}`;
         huaweix += `${(huaweix == String.fromCharCode(71,0) ? sheetf.size : huaweix.length)}`;
         videovar_ += `${huaweix.length ^ 1}`;
         dropdownx = `${sheetf.size | dropdownx.length}`;
         if (questiconp) {
            break;
         }
      } while (questiconp && (uimanager_.includes(`${baselinej}`)));
      if ((codegenj.length * parseInt(`${baselinej}`)) >= 2 && 3.37 >= (baselinej * parseFloat(`${codegenj.length}`))) {
         codegenj = `${((otherG ? 1 : 4) / (Math.max(8, parseInt(`${baselinej}`))))}`;
      }
      while (otherG) {
         otherG = 96.36 < baselinej || !otherG;
         break;
      }
          let unselectedf: Map<any, any> = new Map([[String.fromCharCode(115,119,105,99,104,0),244], [String.fromCharCode(114,101,99,111,118,101,114,97,98,108,101,0),990], [String.fromCharCode(119,97,110,116,95,100,95,56,50,0),621]]);
          let mapbuffer4 = String.fromCharCode(99,95,53,55,95,105,110,102,111,108,100,101,114,0);
         codegenj += `${uimanager_.length}`;
         unselectedf = new Map([[`${unselectedf.size}`, mapbuffer4.length]]);
         mapbuffer4 = `${mapbuffer4.length % 2}`;
      while (uimanager_.length > 1) {
         uimanager_ = `${codegenj.length}`;
         break;
      }
         otherG = 63 < codegenj.length && uimanager_ == String.fromCharCode(51,0);
          let armvaf = false;
          let detail_ = String.fromCharCode(121,95,55,57,95,100,101,114,101,103,105,115,116,101,114,0);
          let reactnavigation5 = 3.0;
         uimanager_ = `${(parseInt(`${baselinej}`) % (Math.max(10, (otherG ? 4 : 4))))}`;
         armvaf = armvaf && reactnavigation5 == 26.91;
         detail_ += `${parseInt(`${reactnavigation5}`)}`;
      if (uimanager_.length < 2) {
         uimanager_ += `${(String.fromCharCode(56,0) == codegenj ? parseInt(`${baselinej}`) : codegenj.length)}`;
      }
         codegenj += `${(parseInt(`${baselinej}`) & (otherG ? 2 : 2))}`;
       let profileframeO = String.fromCharCode(108,111,99,97,116,105,111,110,95,50,95,54,0);
       let upgrades = String.fromCharCode(103,111,116,95,100,95,50,50,0);
          let temperatureZ: Map<any, any> = new Map([[String.fromCharCode(120,95,57,56,95,97,98,115,120,0),String.fromCharCode(111,117,116,99,111,109,101,95,117,95,55,50,0)], [String.fromCharCode(122,95,50,48,95,114,101,102,105,110,101,109,101,110,116,0),String.fromCharCode(99,95,49,48,95,115,116,97,114,0)]]);
          let connectionD = String.fromCharCode(117,95,56,54,95,115,105,109,112,108,101,0);
          let photoE = String.fromCharCode(109,97,112,95,107,95,52,0);
         codegenj += `${connectionD.length / (Math.max(4, upgrades.length))}`;
         temperatureZ = new Map([[`${temperatureZ.size}`, photoE.length]]);
         connectionD += `${photoE.length}`;
      privacyr = [2 >> (Math.min(1, Math.abs(ajaxJ)))];
   }
       let dnewsr = String.fromCharCode(99,114,111,108,108,0);
      let klevinA = dnewsr == String.fromCharCode(104,116,113,54,116,108,48,111,0);
      do {
         dnewsr = `${dnewsr.length | dnewsr.length}`;
         if (klevinA) {
            break;
         }
      } while (klevinA && (dnewsr.includes(dnewsr)));
       let fastforwardl = true;
      if (!fastforwardl) {
         fastforwardl = dnewsr.startsWith(`${fastforwardl}`);
      }
      videojsZ = `${parseInt(`${clearC}`) & ajaxJ}`;
   if (refresh4.length == 5) {
       let eventi = 1.0;
         eventi += parseFloat(`${parseInt(`${eventi}`) << (Math.min(2, Math.abs(3)))}`);
      if (3.99 < eventi) {
         eventi /= Math.max(parseFloat(`${parseInt(`${eventi}`) & parseInt(`${eventi}`)}`), 2);
      }
      for (let g = 0; g < 3; g++) {
         eventi *= parseFloat(`${parseInt(`${eventi}`) % (Math.max(8, parseInt(`${eventi}`)))}`);
      }
      libreactnativejniI = "3";
   }
   if ((apple_ + parseFloat(`${privacyr.length}`)) == 3.50) {
      apple_ += parseFloat(`${privacyr.length}`);
   }
       let backwardP: Array<any> = [998, 848, 651];
       let linky = String.fromCharCode(105,95,55,56,95,116,119,111,108,97,109,101,0);
       let zoomG = false;
       let basketballN = String.fromCharCode(116,101,115,116,98,114,105,100,103,101,95,102,95,54,53,0);
         basketballN = "3";
         backwardP.push(backwardP.length / (Math.max(basketballN.length, 7)));
          let unfill_ = false;
          let unreadL: Map<any, any> = new Map([[String.fromCharCode(101,100,105,116,101,100,0),353], [String.fromCharCode(98,117,105,108,100,0),20]]);
         basketballN += `${backwardP.length}`;
         unfill_ = unreadL.size > 38;
         unreadL.set(`${unreadL.size}`, unreadL.size);
         basketballN = `${linky.length}`;
      for (let j = 0; j < 2; j++) {
          let libimagepipelineh: Array<any> = [314, 615];
          let textlayoutmanager2 = String.fromCharCode(99,104,97,114,108,101,110,0);
          let relateda = 1;
          let scheduleW: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,101,114,105,110,103,95,106,95,50,48,0),599], [String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,95,120,95,50,50,0),463], [String.fromCharCode(104,95,53,51,95,106,97,105,108,98,114,101,97,107,0),61]]);
         zoomG = !zoomG;
         libimagepipelineh = [scheduleW.size >> (Math.min(libimagepipelineh.length, 4))];
         textlayoutmanager2 += "3";
         relateda += libimagepipelineh.length;
         scheduleW = new Map([[`${libimagepipelineh.length}`, libimagepipelineh.length * relateda]]);
      }
         basketballN = `${((zoomG ? 5 : 3) + 3)}`;
      while ((2 - backwardP.length) < 2) {
         backwardP.push(backwardP.length);
         break;
      }
      let relatedn = backwardP.length <= 7390658;
      do {
          let jcopy_3y: Array<any> = [907, 302, 16];
          let libreanimatedb = 0;
          let resendh = String.fromCharCode(118,95,54,95,97,99,111,108,111,114,115,0);
          let executorm = false;
          let unfill7 = String.fromCharCode(115,119,105,116,99,104,101,100,95,121,95,57,0);
         backwardP = [jcopy_3y.length - 3];
         jcopy_3y.push(3);
         libreanimatedb %= Math.max(((executorm ? 1 : 4)), 4);
         resendh = `${3 & libreanimatedb}`;
         unfill7 += `${unfill7.length & 3}`;
         if (relatedn) {
            break;
         }
      } while ((!linky.endsWith(`${backwardP.length}`)) && relatedn);
      ajaxJ &= backwardP.length >> (Math.min(Math.abs(3), 4));
   for (let i = 0; i < 3; i++) {
      refresh4 = [3 + privacyr.length];
   }
   while (5 <= (refresh4.length << (Math.min(Math.abs(5), 2))) || 3 <= (5 << (Math.min(3, videojsZ.length)))) {
      videojsZ += `${1 / (Math.max(4, libreactnativejniI.length))}`;
      break;
   }
      libreactnativejniI = "1";
      ajaxJ %= Math.max((iconsaveimagem == String.fromCharCode(115,0) ? iconsaveimagem.length : privacyr.length), 4);
      privacyr.push(iconsaveimagem.length);
       let bridgeU: Map<any, any> = new Map([[String.fromCharCode(99,117,114,114,101,110,116,0),false ], [String.fromCharCode(115,116,97,116,117,115,101,115,0),false ], [String.fromCharCode(100,95,53,54,0),true ]]);
       let libavcodecw = String.fromCharCode(117,100,112,108,105,116,101,95,57,95,54,57,0);
       let eactt = String.fromCharCode(98,111,116,116,108,101,110,101,99,107,0);
          let navigationq = true;
         libavcodecw = "3";
      if (eactt == String.fromCharCode(55,0)) {
         libavcodecw = `${eactt.length}`;
      }
      let side3 = eactt == String.fromCharCode(104,105,51,117,49,119,0);
      do {
         eactt = `${eactt.length | 2}`;
         if (side3) {
            break;
         }
      } while (side3 && (!eactt.startsWith(`${libavcodecw.length}`)));
      while (!eactt.endsWith(`${bridgeU.size}`)) {
          let orangeclockw = 1.0;
         eactt += "3";
         orangeclockw *= parseInt(`${orangeclockw}`);
         break;
      }
      let traminin = eactt.length >= 7280855;
      do {
         eactt = `${bridgeU.size >> (Math.min(libavcodecw.length, 1))}`;
         if (traminin) {
            break;
         }
      } while ((libavcodecw.length == 1) && traminin);
         eactt = `${1 << (Math.min(5, libavcodecw.length))}`;
       let filed1: Map<any, any> = new Map([[String.fromCharCode(115,101,114,118,101,114,115,0),461], [String.fromCharCode(108,97,98,101,108,110,115,95,104,95,52,48,0),392], [String.fromCharCode(115,105,108,107,0),650]]);
       let loginV = 1.0;
      for (let i = 0; i < 2; i++) {
          let gemfileO = 2.0;
          let notificationX = String.fromCharCode(118,95,54,57,95,114,101,116,114,121,97,98,108,101,0);
          let calendarC = 4;
         bridgeU.set(`${loginV}`, 2 ^ bridgeU.size);
         gemfileO /= Math.max((notificationX == String.fromCharCode(107,0) ? calendarC : notificationX.length), 2);
         calendarC /= Math.max(2, 2);
      }
      libswresamplew = parseInt(`${apple_}`) > libreactnativejniI.length;
   if (iconsaveimagem.includes(`${clearC}`)) {
      iconsaveimagem += "2";
   }

    brightShare.value = await SystemSetting.getAppBrightness();

   for (let t = 0; t < 1; t++) {
      questiconF.set(`${clearC}`, parseInt(`${clearC}`));
   }
       let applicationU = true;
          let condensedV = String.fromCharCode(115,104,97,100,101,114,95,56,95,54,53,0);
         applicationU = condensedV.length > 46;
         applicationU = (applicationU ? applicationU : !applicationU);
         applicationU = !applicationU;
      apple_ += parseFloat(`${2}`);
   for (let y = 0; y < 1; y++) {
      clearC -= parseFloat(`${analyticst}`);
   }
   if (halfO.includes(clearC)) {
      clearC -= parseFloat(`${parseInt(`${clearC}`) + ajaxJ}`);
   }
       let eventg = 2;
       let goal8: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,102,105,108,116,101,114,95,55,95,56,56,0),68], [String.fromCharCode(119,105,100,103,101,116,95,111,95,55,51,0),785]]);
       let imagemanagerG: Array<any> = [876, 567];
       let iconsettingo: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,113,117,101,117,101,95,112,95,53,55,0),String.fromCharCode(107,95,57,51,95,99,105,110,116,0)], [String.fromCharCode(106,111,105,110,101,114,0),String.fromCharCode(111,95,57,50,95,114,101,117,112,108,111,97,100,105,110,103,0)]]);
      let icon7 = 5836685 <= iconsettingo.size;
      do {
          let playercommonG: Map<any, any> = new Map([[String.fromCharCode(100,101,109,111,100,117,108,97,116,101,95,98,95,53,51,0),518], [String.fromCharCode(103,95,50,49,95,99,106,112,101,103,0),71], [String.fromCharCode(110,95,55,56,95,114,101,102,105,110,101,114,0),46]]);
          let buildQ: Map<any, any> = new Map([[String.fromCharCode(99,114,97,122,121,116,105,109,101,95,53,95,54,49,0),177], [String.fromCharCode(112,97,105,110,116,115,95,102,95,49,48,0),258]]);
          let imagesA = String.fromCharCode(102,105,108,116,101,114,95,100,95,53,56,0);
          let libflipperc = 4.0;
         iconsettingo.set(`${eventg}`, eventg);
         playercommonG = new Map([[imagesA, imagesA.length]]);
         buildQ = new Map([[`${buildQ.size}`, buildQ.size | imagesA.length]]);
         libflipperc -= parseFloat(`${parseInt(`${libflipperc}`) / (Math.max(playercommonG.size, 7))}`);
         if (icon7) {
            break;
         }
      } while (icon7 && (iconsettingo.get(`${eventg}`) != null));
         eventg <<= Math.min(4, Math.abs(eventg));
          let disconnectedF: Map<any, any> = new Map([[String.fromCharCode(101,110,103,108,105,115,104,95,53,95,53,57,0),String.fromCharCode(103,95,48,95,99,104,101,99,107,105,110,103,0)], [String.fromCharCode(105,95,54,57,95,117,108,116,114,97,119,105,100,101,0),String.fromCharCode(116,105,109,101,114,95,113,95,56,49,0)]]);
          let rightW = true;
         goal8 = new Map([[`${iconsettingo.size}`, 1]]);
         disconnectedF.set(`${rightW}`, ((rightW ? 4 : 4) / (Math.max(1, 3))));
      for (let g = 0; g < 1; g++) {
         goal8.set(`${goal8.size}`, 3 >> (Math.min(5, Math.abs(goal8.size))));
      }
         eventg |= iconsettingo.size << (Math.min(2, Math.abs(goal8.size)));
      while (2 >= (3 >> (Math.min(3, Math.abs(eventg))))) {
         iconsettingo.set(`${imagemanagerG.length}`, imagemanagerG.length >> (Math.min(5, Math.abs(goal8.size))));
         break;
      }
      while (goal8.get(`${imagemanagerG.length}`) != null) {
         goal8 = new Map([[`${iconsettingo.size}`, 2]]);
         break;
      }
       let redgoalP = false;
       let modelsp = true;
      refresh4 = [imagemanagerG.length % 3];
   for (let z = 0; z < 2; z++) {
       let dnewinterstitialn = String.fromCharCode(115,95,52,56,95,112,114,111,99,101,115,115,0);
       let footbally = 5;
          let stats6 = String.fromCharCode(102,97,99,101,115,95,109,95,50,48,0);
          let orangeL = String.fromCharCode(120,99,108,105,0);
          let found9: Map<any, any> = new Map([[String.fromCharCode(112,99,109,119,98,0),true ], [String.fromCharCode(99,97,110,116,111,112,101,110,95,53,95,54,56,0),true ], [String.fromCharCode(121,95,54,55,95,105,100,115,0),false ]]);
         dnewinterstitialn = `${footbally & dnewinterstitialn.length}`;
         stats6 += `${(orangeL == String.fromCharCode(71,0) ? found9.size : orangeL.length)}`;
         found9 = new Map([[`${found9.size}`, found9.size]]);
      if ((dnewinterstitialn.length & footbally) <= 4 || (dnewinterstitialn.length & 4) <= 4) {
          let chart0: Array<any> = [String.fromCharCode(98,95,51,49,95,99,104,115,101,116,0), String.fromCharCode(120,95,51,53,95,100,105,115,97,98,108,101,0), String.fromCharCode(99,111,118,101,114,97,103,101,0)];
          let trash2 = String.fromCharCode(109,105,120,105,110,103,95,116,95,52,56,0);
          let loginG = String.fromCharCode(107,95,50,48,95,112,114,97,112,97,114,101,0);
          let orangeE = String.fromCharCode(115,108,111,112,101,0);
         dnewinterstitialn = `${loginG.length}`;
         chart0 = [2 << (Math.min(2, chart0.length))];
         trash2 += `${(String.fromCharCode(95,0) == trash2 ? orangeE.length : trash2.length)}`;
         loginG += "2";
         orangeE += `${(String.fromCharCode(117,0) == trash2 ? trash2.length : chart0.length)}`;
      }
          let notificationp = String.fromCharCode(112,95,49,49,95,105,110,102,111,114,109,97,116,105,118,101,0);
          let stationsa = String.fromCharCode(99,101,108,108,117,108,97,114,95,101,95,52,55,0);
         footbally &= 1 | notificationp.length;
         notificationp = `${stationsa.length}`;
         stationsa = `${stationsa.length % (Math.max(4, stationsa.length))}`;
         dnewinterstitialn += "2";
         footbally -= 3 << (Math.min(4, dnewinterstitialn.length));
      let greenW = dnewinterstitialn == String.fromCharCode(49,56,107,48,116,119,105,99,102,0);
      do {
          let placeholderf = String.fromCharCode(114,95,56,51,95,117,110,115,97,116,105,115,102,105,101,100,0);
          let twittera = 1.0;
          let liblogger1: Array<any> = [57, 276];
          let productw: Array<any> = [String.fromCharCode(101,100,105,116,111,114,95,103,95,57,49,0), String.fromCharCode(98,105,116,115,116,114,101,97,109,0)];
         dnewinterstitialn = `${dnewinterstitialn.length}`;
         placeholderf += "2";
         twittera -= parseFloat(`${2}`);
         liblogger1.push(liblogger1.length % (Math.max(3, 10)));
         productw = [placeholderf.length];
         if (greenW) {
            break;
         }
      } while (greenW && (5 < dnewinterstitialn.length));
      halfO.push(iconsaveimagem.length);
   }
      clearC += parseFloat(`${parseInt(`${apple_}`) * 1}`);
   let iconwatchnowQ = ajaxJ <= 7613009;
   do {
      ajaxJ %= Math.max(1 >> (Math.min(4, iconsaveimagem.length)), 4);
      if (iconwatchnowQ) {
         break;
      }
   } while ((videojsZ.includes(`${ajaxJ}`)) && iconwatchnowQ);
   while (4 > (ajaxJ / (Math.max(libreactnativejniI.length, 6))) || 2 > (ajaxJ / 4)) {
      ajaxJ += 2;
      break;
   }
      questiconF = new Map([[`${halfO.length}`, (String.fromCharCode(109,0) == libreactnativejniI ? libreactnativejniI.length : halfO.length)]]);
   while (1 > (4 + refresh4.length) && 4 > refresh4.length) {
      refresh4.push(videojsZ.length);
      break;
   }
   for (let a = 0; a < 2; a++) {
      libreactnativejniI = `${(String.fromCharCode(95,0) == libreactnativejniI ? libreactnativejniI.length : (libswresamplew ? 3 : 4))}`;
   }
      analyticst |= 1;
      libswresamplew = 38 < iconsaveimagem.length;
   let linka = libswresamplew ? !libswresamplew : libswresamplew;
   do {
       let giflivestreamingf = 0.0;
       let libswscaleq = 0.0;
          let xvodp: Array<any> = [657, 330];
          let tempG = String.fromCharCode(99,105,114,99,108,101,95,107,95,51,48,0);
         giflivestreamingf -= tempG.length * parseInt(`${giflivestreamingf}`);
         xvodp = [xvodp.length / 3];
         tempG = `${xvodp.length << (Math.min(xvodp.length, 1))}`;
      for (let n = 0; n < 1; n++) {
         giflivestreamingf *= parseInt(`${giflivestreamingf}`) << (Math.min(5, Math.abs(2)));
      }
         libswscaleq /= Math.max(parseInt(`${giflivestreamingf}`), 2);
         libswscaleq -= parseInt(`${libswscaleq}`) * parseInt(`${giflivestreamingf}`);
       let libavutilG = false;
       let iconnointernetg = false;
      let bootsplash2 = libavutilG ? !libavutilG : libavutilG;
      do {
          let yellowz = String.fromCharCode(115,101,116,105,95,111,95,55,55,0);
          let mountinge = String.fromCharCode(99,111,109,112,108,101,116,101,115,0);
          let langkeyr: Map<any, any> = new Map([[String.fromCharCode(111,110,115,101,116,95,52,95,52,51,0),true ], [String.fromCharCode(99,111,109,109,117,110,105,99,97,116,111,114,95,106,95,49,49,0),false ], [String.fromCharCode(98,99,109,112,95,53,95,55,56,0),false ]]);
          let combinedy = false;
          let type_ewL = 4.0;
         libavutilG = ((yellowz.length - (!combinedy ? 51 : yellowz.length)) <= 51);
         mountinge += `${mountinge.length}`;
         langkeyr.set(`${type_ewL}`, parseInt(`${type_ewL}`));
         combinedy = mountinge.length == 15;
         if (bootsplash2) {
            break;
         }
      } while ((!iconnointernetg) && bootsplash2);
      libswresamplew = libreactnativejniI == String.fromCharCode(55,0) || ajaxJ > 62;
      if (linka) {
         break;
      }
   } while ((libswresamplew) && linka);
   let uimanagerp = analyticst >= 6083751;
   do {
      analyticst += videojsZ.length / 2;
      if (uimanagerp) {
         break;
      }
   } while (uimanagerp && ((1 ^ analyticst) <= 1 && 1 <= (analyticst ^ libreactnativejniI.length)));
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
    setSettings({ name: "downloadingTeamdetailsbgTemplateprocessor", value: newVol });
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
       let mailv: Array<any> = [382, 993];
    let eactb = 2.0;
    let sharemodaln = String.fromCharCode(99,95,49,48,48,95,115,108,105,100,105,110,103,0);
    let mailm = String.fromCharCode(100,95,55,51,95,99,111,110,118,101,114,116,0);
    let dragO = false;
    let icon8 = 2;
    let videovarD = String.fromCharCode(115,99,97,108,97,114,115,95,98,95,57,51,0);
    let reactq = 4.0;
      eactb -= parseFloat(`${mailm.length}`);
   if (dragO) {
      sharemodaln += `${parseInt(`${reactq}`) % (Math.max(mailv.length, 10))}`;
   }
   while ((reactq * 1.88) < 2.91) {
       let libloggerD: Map<any, any> = new Map([[String.fromCharCode(100,114,97,102,116,115,95,54,95,53,54,0),String.fromCharCode(120,109,108,95,118,95,53,52,0)], [String.fromCharCode(105,110,99,108,117,115,105,111,110,115,0),String.fromCharCode(98,95,52,0)]]);
       let b_hash5 = 0.0;
       let mergers = 1.0;
       let disconnectedt: Array<any> = [String.fromCharCode(100,117,114,103,101,114,107,105,110,103,95,55,95,53,53,0), String.fromCharCode(111,110,101,105,110,99,104,95,102,95,49,48,0)];
       let placeholderk = String.fromCharCode(115,116,114,101,97,109,105,100,95,49,95,57,54,0);
      if (3 < (4 / (Math.max(3, disconnectedt.length))) && (parseInt(`${mergers}`) * disconnectedt.length) < 4) {
         disconnectedt.push(libloggerD.size >> (Math.min(Math.abs(1), 5)));
      }
         placeholderk += `${parseInt(`${mergers}`)}`;
      let videocommon2 = placeholderk.length >= 9445926;
      do {
         placeholderk = `${(placeholderk == String.fromCharCode(98,0) ? placeholderk.length : disconnectedt.length)}`;
         if (videocommon2) {
            break;
         }
      } while ((3.79 >= mergers) && videocommon2);
         disconnectedt.push(3 * parseInt(`${mergers}`));
       let readw = String.fromCharCode(110,117,109,101,114,111,95,101,95,54,50,0);
       let action3 = 3.0;
       let gmaily = 5.0;
         placeholderk = `${parseInt(`${mergers}`) ^ 2}`;
         placeholderk = `${(placeholderk == String.fromCharCode(51,0) ? libloggerD.size : placeholderk.length)}`;
      if ((readw.length >> (Math.min(3, Math.abs(libloggerD.size)))) < 3 || (3 >> (Math.min(2, Math.abs(libloggerD.size)))) < 3) {
         libloggerD.set(`${b_hash5}`, 2);
      }
      if (4 > (placeholderk.length % 1) && (parseInt(`${gmaily}`) - 1) > 4) {
         gmaily -= parseFloat(`${parseInt(`${b_hash5}`)}`);
      }
         libloggerD = new Map([[`${action3}`, placeholderk.length % 3]]);
      while ((2 + action3) <= 3.86) {
         b_hash5 /= Math.max(parseFloat(`${readw.length}`), 4);
         break;
      }
      let libavcodecE = libloggerD.size <= 5035048;
      do {
          let macauO = 1.0;
          let context5: Map<any, any> = new Map([[String.fromCharCode(111,99,99,117,112,105,101,100,95,114,95,49,48,48,0),863], [String.fromCharCode(115,117,112,101,114,102,114,97,109,101,95,100,95,55,49,0),887]]);
         libloggerD = new Map([[readw, readw.length << (Math.min(3, Math.abs(parseInt(`${macauO}`))))]]);
         macauO += parseFloat(`${context5.size ^ context5.size}`);
         if (libavcodecE) {
            break;
         }
      } while (libavcodecE && (5.56 == (mergers - 4.13) && 4.13 == (libloggerD.size - mergers)));
       let componentq = String.fromCharCode(117,95,52,57,95,105,122,101,114,111,0);
       let yellowvideoliveJ = String.fromCharCode(115,104,117,116,116,105,110,103,95,56,95,57,50,0);
         action3 /= Math.max(parseFloat(`${3}`), 3);
      reactq -= ((dragO ? 2 : 3));
      break;
   }
      mailv = [3 >> (Math.min(3, Math.abs(parseInt(`${eactb}`))))];
      videovarD += `${((dragO ? 5 : 2))}`;
       let windZ: Array<any> = [497, 350, 465];
         windZ.push(3);
         windZ.push(windZ.length ^ 3);
       let libjsiv = String.fromCharCode(111,95,52,52,95,100,105,115,112,97,116,99,104,0);
      sharemodaln = `${windZ.length * icon8}`;
   let photoc = reactq >= 8181532.0;
   do {
      reactq /= Math.max(5, ((dragO ? 3 : 3) >> (Math.min(Math.abs(3), 5))));
      if (photoc) {
         break;
      }
   } while (photoc && (4.83 < reactq));
      mailm = "2";
      dragO = 5.52 == reactq || 7 == mailv.length;
       let rankN = String.fromCharCode(110,95,50,57,95,117,110,99,108,97,109,112,101,100,0);
      for (let m = 0; m < 1; m++) {
         rankN = `${rankN.length & 3}`;
      }
         rankN += `${rankN.length - rankN.length}`;
      while (3 == rankN.length) {
         rankN += `${rankN.length ^ rankN.length}`;
         break;
      }
      dragO = eactb > 41.90 || mailv.length > 60;
   let agreement8 = 6310778 >= videovarD.length;
   do {
      videovarD += `${parseInt(`${reactq}`)}`;
      if (agreement8) {
         break;
      }
   } while (agreement8 && (videovarD.length >= 4));
   for (let l = 0; l < 3; l++) {
      sharemodaln += `${2 >> (Math.min(1, videovarD.length))}`;
   }
      videovarD += `${mailm.length + parseInt(`${eactb}`)}`;
       let uimanagerL: Map<any, any> = new Map([[String.fromCharCode(101,95,50,53,95,100,105,118,0),String.fromCharCode(120,95,52,95,116,114,117,101,109,111,116,105,111,110,100,97,116,97,0)], [String.fromCharCode(116,105,108,116,0),String.fromCharCode(112,114,111,98,97,98,105,108,105,116,105,101,115,0)]]);
       let libruntimeexecutorI: Map<any, any> = new Map([[String.fromCharCode(108,117,114,97,108,105,122,97,116,105,111,110,95,110,95,56,53,0),491], [String.fromCharCode(100,101,99,108,97,114,101,95,113,95,56,56,0),719], [String.fromCharCode(119,95,56,53,95,115,112,111,105,108,101,114,0),709]]);
       let xadsdkr = String.fromCharCode(99,111,100,101,98,111,111,107,115,95,100,95,53,48,0);
      if ((3 % (Math.max(2, xadsdkr.length))) >= 4 && 3 >= (3 % (Math.max(9, uimanagerL.size)))) {
         uimanagerL = new Map([[`${uimanagerL.size}`, xadsdkr.length]]);
      }
          let b_countf = String.fromCharCode(97,115,97,110,95,54,95,50,48,0);
          let thailandz = String.fromCharCode(105,95,49,55,95,112,97,114,97,109,99,104,97,110,103,101,0);
         libruntimeexecutorI = new Map([[`${uimanagerL.size}`, uimanagerL.size]]);
         b_countf += `${b_countf.length}`;
         thailandz = "1";
       let activez = 2.0;
         xadsdkr += `${parseInt(`${activez}`)}`;
          let helperl = String.fromCharCode(101,95,50,55,95,115,111,108,105,115,116,101,110,0);
         uimanagerL = new Map([[helperl, helperl.length >> (Math.min(Math.abs(1), 4))]]);
      let eighteen_ = 7294519 <= libruntimeexecutorI.size;
      do {
         libruntimeexecutorI.set(`${libruntimeexecutorI.size}`, 1);
         if (eighteen_) {
            break;
         }
      } while ((2 < (libruntimeexecutorI.size ^ 4)) && eighteen_);
         activez += libruntimeexecutorI.size + 2;
          let downloadedT = 0.0;
          let profileinactivez = true;
          let debugS = String.fromCharCode(116,121,112,101,100,101,102,0);
         xadsdkr += "1";
         downloadedT -= parseInt(`${downloadedT}`);
         profileinactivez = 62 > debugS.length;
         debugS = `${1 | parseInt(`${downloadedT}`)}`;
         activez -= libruntimeexecutorI.size;
      sharemodaln = "2";
   for (let a = 0; a < 1; a++) {
       let leftp = 5;
       let qaagJ = String.fromCharCode(98,95,53,50,95,97,112,112,114,111,118,101,100,0);
       let iconfeedbackH = String.fromCharCode(119,104,101,116,104,101,114,95,118,95,49,53,0);
       let logouserF = true;
      if (!logouserF) {
         qaagJ += "3";
      }
         qaagJ += `${1 + leftp}`;
      let profileZ = String.fromCharCode(48,117,103,53,120,56,106,110,114,0) == iconfeedbackH;
      do {
          let overL: Array<any> = [String.fromCharCode(98,95,57,57,95,110,111,110,110,117,108,108,111,117,116,0), String.fromCharCode(109,101,109,98,101,114,95,108,95,49,48,48,0)];
          let flyer0 = String.fromCharCode(113,95,52,56,95,109,109,115,104,0);
          let dplus0 = String.fromCharCode(115,97,109,112,108,101,114,95,106,95,56,57,0);
          let utilsa = String.fromCharCode(119,95,53,50,95,114,101,109,111,118,101,114,0);
          let libloggerB = false;
         iconfeedbackH += `${overL.length << (Math.min(Math.abs(3), 5))}`;
         overL.push(1);
         flyer0 = `${((libloggerB ? 3 : 3) + 3)}`;
         dplus0 = `${1 % (Math.max(4, flyer0.length))}`;
         utilsa += `${(String.fromCharCode(67,0) == dplus0 ? dplus0.length : utilsa.length)}`;
         if (profileZ) {
            break;
         }
      } while ((!logouserF) && profileZ);
          let nbatrophyC: Array<any> = [545, 489, 339];
          let soundM = true;
         iconfeedbackH = `${qaagJ.length * 2}`;
         nbatrophyC = [(nbatrophyC.length | (soundM ? 5 : 4))];
         soundM = nbatrophyC.length < 72;
      for (let f = 0; f < 3; f++) {
         iconfeedbackH = `${((logouserF ? 2 : 4))}`;
      }
          let bgvipxvodk: Array<any> = [822, 572, 940];
          let plusx = 4;
         qaagJ += `${(plusx % (Math.max(10, (logouserF ? 3 : 1))))}`;
         bgvipxvodk.push(bgvipxvodk.length);
         plusx |= 3;
      if ((iconfeedbackH.length * 5) < 4) {
         iconfeedbackH = "2";
      }
         iconfeedbackH = `${iconfeedbackH.length}`;
      while (2 == (qaagJ.length / 1)) {
         leftp >>= Math.min(4, Math.abs(3));
         break;
      }
      if (!qaagJ.endsWith(`${leftp}`)) {
         leftp *= 1 - qaagJ.length;
      }
      let usery = 8173848 >= qaagJ.length;
      do {
          let moduleZ: Array<any> = [String.fromCharCode(112,102,102,102,116,95,108,95,56,54,0), String.fromCharCode(111,95,52,55,95,108,111,97,116,0), String.fromCharCode(114,97,100,105,97,108,95,112,95,53,51,0)];
          let libfbj = true;
         qaagJ += "2";
         moduleZ.push(moduleZ.length);
         libfbj = moduleZ.length < 78;
         if (usery) {
            break;
         }
      } while ((1 > qaagJ.length) && usery);
      while (qaagJ.endsWith(`${iconfeedbackH.length}`)) {
         qaagJ = `${(String.fromCharCode(81,0) == iconfeedbackH ? (logouserF ? 4 : 3) : iconfeedbackH.length)}`;
         break;
      }
      videovarD = `${(String.fromCharCode(89,0) == iconfeedbackH ? iconfeedbackH.length : parseInt(`${eactb}`))}`;
   }
   let sharedt = 5655268 <= mailm.length;
   do {
      mailm = `${2 ^ sharemodaln.length}`;
      if (sharedt) {
         break;
      }
   } while (sharedt && (icon8 < mailm.length));
      mailv = [icon8];
   while (mailm.length >= mailv.length) {
      mailv = [mailv.length >> (Math.min(videovarD.length, 3))];
      break;
   }
   if (mailm.length >= mailv.length) {
       let promotionx = String.fromCharCode(108,101,97,102,110,111,100,101,95,49,95,53,57,0);
          let giftT = String.fromCharCode(100,114,97,119,105,110,103,95,97,95,57,53,0);
          let selectedS = 1;
         promotionx = `${giftT.length * 2}`;
         giftT = `${2 << (Math.min(3, Math.abs(selectedS)))}`;
         selectedS -= selectedS ^ 1;
         promotionx += `${promotionx.length % (Math.max(1, promotionx.length))}`;
      if (!promotionx.endsWith(promotionx)) {
          let iconusert = String.fromCharCode(99,95,54,52,95,101,108,101,118,97,116,101,0);
         promotionx += `${(iconusert == String.fromCharCode(72,0) ? iconusert.length : promotionx.length)}`;
      }
      mailv.push(((dragO ? 5 : 3) * sharemodaln.length));
   }
   if (2 > (videovarD.length / (Math.max(2, parseInt(`${eactb}`)))) || 2 > (videovarD.length / (Math.max(7, parseInt(`${eactb}`))))) {
       let a_player0 = String.fromCharCode(122,95,51,57,95,105,109,112,108,105,99,105,116,0);
       let awaya = 3.0;
       let activityr = String.fromCharCode(100,95,52,53,95,98,97,115,107,101,116,98,97,108,108,0);
         awaya += activityr.length >> (Math.min(Math.abs(3), 1));
          let greyarrowupB: Array<any> = [524, 587, 622];
          let scheduley = 0.0;
         activityr += `${1 << (Math.min(Math.abs(parseInt(`${scheduley}`)), 5))}`;
         greyarrowupB = [greyarrowupB.length];
         scheduley /= Math.max(5, greyarrowupB.length);
      while (a_player0.length < activityr.length) {
         a_player0 = `${parseInt(`${awaya}`)}`;
         break;
      }
         a_player0 = "1";
      while (1.55 >= awaya) {
          let albumj = 1;
          let module3 = String.fromCharCode(100,112,99,109,95,103,95,54,51,0);
          let matchesQ = 4.0;
          let runtimeh = String.fromCharCode(103,95,54,54,95,116,97,98,115,0);
         activityr += `${parseInt(`${matchesQ}`)}`;
         albumj >>= Math.min(Math.abs((String.fromCharCode(105,0) == module3 ? module3.length : albumj)), 1);
         matchesQ *= runtimeh.length;
         runtimeh += "3";
         break;
      }
      while (!a_player0.startsWith(`${awaya}`)) {
         awaya -= 1;
         break;
      }
      while ((awaya + 2.10) == 5.38 || 4.67 == (awaya + 2.10)) {
         activityr += `${a_player0.length % 2}`;
         break;
      }
      for (let z = 0; z < 3; z++) {
         a_player0 += "2";
      }
      if (4 < (activityr.length / (Math.max(4, 6))) && 3.42 < (awaya * activityr.length)) {
          let iconstarF: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,98,97,115,101,95,99,95,53,55,0),51], [String.fromCharCode(116,114,101,102,95,100,95,49,50,0),355]]);
          let ballF: Array<any> = [870, 826];
          let ticked5: Map<any, any> = new Map([[String.fromCharCode(105,95,51,56,95,108,105,98,120,0),String.fromCharCode(119,95,56,48,95,99,105,112,104,101,114,116,101,120,116,0)], [String.fromCharCode(108,111,99,107,99,104,97,105,110,95,102,95,55,57,0),String.fromCharCode(110,95,49,48,48,95,110,101,103,97,116,101,100,0)]]);
          let cancel3 = false;
         activityr = `${iconstarF.size >> (Math.min(Math.abs(2), 5))}`;
         iconstarF = new Map([[`${ticked5.size}`, ballF.length << (Math.min(3, Math.abs(ticked5.size)))]]);
         ballF.push(ballF.length);
         cancel3 = ballF.includes(cancel3);
      }
      videovarD += `${(mailv.length * (dragO ? 5 : 3))}`;
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
              (settings.name === "none" || settings.name === "downloadingTeamdetailsbgTemplateprocessor")
            ) {
              runOnJS(onVolumeChanged)(
                nativeEvent.y,
                previousPanPosition.value.y
              );
            }
          } else if (
            absDyDx < 0.05 &&
            vodType !== "fullXvod" &&
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
       let reactnativeratingsg: Map<any, any> = new Map([[String.fromCharCode(109,101,109,115,101,116,95,99,95,53,49,0),true ], [String.fromCharCode(107,101,114,110,101,108,95,97,95,52,52,0),true ], [String.fromCharCode(104,95,50,49,95,99,97,114,100,104,111,108,100,101,114,0),false ]]);
    let sheet6 = false;
    let classesv = 5.0;
    let footballm = String.fromCharCode(97,95,52,53,95,99,97,116,0);
    let gestureL = String.fromCharCode(107,95,53,57,95,110,101,97,114,0);
    let resend6 = String.fromCharCode(113,95,51,53,95,102,97,105,108,115,0);
    let unselected2 = 0.0;
    let dplusi = 3.0;
      reactnativeratingsg = new Map([[resend6, resend6.length | parseInt(`${classesv}`)]]);
      gestureL += `${(footballm == String.fromCharCode(82,0) ? footballm.length : reactnativeratingsg.size)}`;
      resend6 = `${gestureL.length << (Math.min(2, Math.abs(parseInt(`${classesv}`))))}`;
   let flagI = sheet6 ? !sheet6 : sheet6;
   do {
      sheet6 = !sheet6;
      if (flagI) {
         break;
      }
   } while (flagI && (4 < (reactnativeratingsg.size - 2)));
       let long_tT = String.fromCharCode(100,95,55,48,95,99,111,100,101,114,0);
          let indexp = String.fromCharCode(122,102,114,101,101,95,111,95,49,54,0);
         long_tT += `${1 * indexp.length}`;
      if (long_tT.length >= 3) {
         long_tT += `${long_tT.length}`;
      }
      if (long_tT.endsWith(long_tT)) {
         long_tT += `${1 + long_tT.length}`;
      }
      reactnativeratingsg = new Map([[resend6, gestureL.length]]);
   let y_locki = String.fromCharCode(53,56,48,0) == gestureL;
   do {
      gestureL += `${resend6.length}`;
      if (y_locki) {
         break;
      }
   } while (y_locki && (5 <= (reactnativeratingsg.size << (Math.min(gestureL.length, 5))) && 5 <= (reactnativeratingsg.size << (Math.min(Math.abs(5), 5)))));

      if (!isDoubleTap.value) {

       let matchactivef = 0.0;
      while (2.14 < matchactivef) {
         matchactivef *= parseFloat(`${2 ^ parseInt(`${matchactivef}`)}`);
         break;
      }
      let leftz = matchactivef <= 9029856.0;
      do {
         matchactivef -= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${matchactivef}`)), 2))}`);
         if (leftz) {
            break;
         }
      } while ((matchactivef == matchactivef) && leftz);
         matchactivef -= parseFloat(`${parseInt(`${matchactivef}`) << (Math.min(5, Math.abs(3)))}`);
      sheet6 = classesv < 66.74;
       let righta = false;
         righta = !righta && !righta;
          let defaultplayerimgn: Array<any> = [827, 134];
         righta = !righta;
         defaultplayerimgn.push(2);
          let redirectO = String.fromCharCode(99,104,101,99,107,109,97,114,107,95,53,95,54,53,0);
          let file0 = String.fromCharCode(103,95,54,54,95,105,109,112,111,114,116,97,110,116,0);
         righta = file0.includes(`${righta}`);
         redirectO = `${redirectO.length ^ 2}`;
         file0 += "2";
      sheet6 = (unselected2 + resend6.length) == 6.61;
   if (!footballm.includes(`${classesv}`)) {
      footballm += "3";
   }
   if (sheet6 || 5 < gestureL.length) {
       let type_w4V = 1;
       let reminderK: Map<any, any> = new Map([[String.fromCharCode(110,117,109,101,114,97,108,115,95,118,95,48,0),false ], [String.fromCharCode(116,97,117,0),false ]]);
       let predictionarrow8 = 3;
         predictionarrow8 &= predictionarrow8;
         reminderK = new Map([[`${predictionarrow8}`, type_w4V / 1]]);
      for (let y = 0; y < 1; y++) {
          let twitterV = String.fromCharCode(100,95,51,51,95,99,108,105,112,115,0);
          let logousere = 2.0;
          let libavcodecL: Map<any, any> = new Map([[String.fromCharCode(102,95,55,56,95,100,111,99,117,109,101,110,116,0),String.fromCharCode(100,111,99,105,100,95,52,95,54,56,0)], [String.fromCharCode(114,101,111,112,101,110,95,55,95,52,53,0),String.fromCharCode(102,95,57,51,95,99,104,111,112,0)], [String.fromCharCode(100,95,49,52,95,97,118,105,97,108,97,98,108,101,0),String.fromCharCode(99,111,112,105,101,115,0)]]);
         type_w4V <<= Math.min(twitterV.length, 5);
         twitterV = `${libavcodecL.size}`;
         logousere -= parseInt(`${logousere}`);
         libavcodecL = new Map([[`${libavcodecL.size}`, 2]]);
      }
         reminderK.set(`${type_w4V}`, type_w4V / (Math.max(reminderK.size, 5)));
      if ((3 ^ predictionarrow8) == 2) {
          let stylesK = String.fromCharCode(99,97,116,101,103,111,114,121,95,97,95,56,57,0);
          let viewsY: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,108,105,110,107,95,51,95,54,54,0),763], [String.fromCharCode(104,95,54,49,95,112,114,111,99,101,115,115,0),47], [String.fromCharCode(108,111,99,97,116,101,0),601]]);
          let long_985: Array<any> = [776, 1000];
         predictionarrow8 >>= Math.min(Math.abs(type_w4V), 3);
         stylesK = `${1 >> (Math.min(3, long_985.length))}`;
         viewsY.set(`${long_985.length}`, 2);
      }
          let transferX: Array<any> = [218, 17, 651];
         reminderK.set(`${predictionarrow8}`, type_w4V >> (Math.min(Math.abs(2), 5)));
         transferX.push(2 >> (Math.min(4, transferX.length)));
         reminderK.set(`${predictionarrow8}`, predictionarrow8);
         reminderK = new Map([[`${type_w4V}`, 2 * predictionarrow8]]);
      if (reminderK.get(`${type_w4V}`) == null) {
         reminderK.set(`${type_w4V}`, reminderK.size);
      }
      sheet6 = classesv <= 44.27;
   }
      resend6 += `${parseInt(`${classesv}`)}`;
   for (let h = 0; h < 3; h++) {
       let mbnativeP = false;
         mbnativeP = (mbnativeP ? !mbnativeP : mbnativeP);
       let package_0_X = 4.0;
       let loginsuccess9 = 1.0;
         mbnativeP = !mbnativeP;
      classesv -= (String.fromCharCode(110,0) == footballm ? footballm.length : (sheet6 ? 3 : 4));
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
                  icon={settings.value === 0 ? "filedSelectedAndroid" : "plashProfileframeTyping"}
                />
              )}
              {showSlider && settings.name === "downloadingTeamdetailsbgTemplateprocessor" && (
                <BrightnessVolumeSlider
                  percent={settings.value * 100}
                  icon={settings.value === 0 ? "uploadHumidityImagenetworkerr" : "short_9iYing"}
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
                icon={settings.value === 0 ? "filedSelectedAndroid" : "plashProfileframeTyping"}
              />
            )}
            {showSlider && settings.name === "downloadingTeamdetailsbgTemplateprocessor" && (
              <BrightnessVolumeSlider
                percent={settings.value * 100}
                icon={settings.value === 0 ? "uploadHumidityImagenetworkerr" : "short_9iYing"}
              />
            )}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
