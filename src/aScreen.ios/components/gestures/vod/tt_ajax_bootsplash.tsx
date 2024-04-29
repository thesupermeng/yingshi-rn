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
       let navigationx: Map<any, any> = new Map([[String.fromCharCode(109,95,56,55,95,116,105,109,101,115,116,97,109,112,115,0),774], [String.fromCharCode(102,95,54,51,95,118,97,108,105,100,97,116,101,0),961], [String.fromCharCode(115,116,97,99,107,101,100,95,120,95,53,57,0),988]]);
    let selectionM = String.fromCharCode(99,95,56,54,95,108,105,98,115,114,116,0);
    let editK = String.fromCharCode(117,95,49,48,48,95,119,100,108,116,0);
    let descr = String.fromCharCode(108,111,99,97,116,105,111,110,95,100,95,51,57,0);
    let unselectedF = 0;
    let combinedZ = 5.0;
    let filledd = String.fromCharCode(112,95,57,50,95,111,99,97,108,105,122,97,116,105,111,110,0);
    let zhuboz = String.fromCharCode(113,105,97,110,95,101,95,53,48,0);
    let injuryc = 0;
    let stationsJ = String.fromCharCode(108,111,103,105,99,97,108,95,50,95,55,50,0);
    let delegate_8z = String.fromCharCode(120,109,112,101,103,95,108,95,51,53,0);
    let bufferZ = 1;
    let carouselZ = true;
      combinedZ /= Math.max(filledd.length, 2);
   for (let p = 0; p < 1; p++) {
      filledd += `${unselectedF}`;
   }
   for (let l = 0; l < 1; l++) {
      zhuboz = `${filledd.length}`;
   }
      descr += `${navigationx.size}`;
   if ((4.88 - combinedZ) > 2.63 && (combinedZ - descr.length) > 4.88) {
       let projectG = 5;
       let dragu = 3.0;
       let aboutc = 4.0;
       let thailandE = String.fromCharCode(115,105,103,110,95,56,95,53,53,0);
       let register_jx = String.fromCharCode(109,100,97,116,101,95,106,95,54,50,0);
         dragu *= parseFloat(`${1}`);
      for (let a = 0; a < 2; a++) {
          let reminderb = String.fromCharCode(108,105,98,97,118,102,111,114,109,97,116,95,118,95,52,55,0);
          let volumei: Map<any, any> = new Map([[String.fromCharCode(99,95,50,48,95,105,116,97,108,105,99,0),58], [String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,115,95,48,95,57,55,0),183], [String.fromCharCode(106,95,57,54,95,105,112,97,100,105,102,102,0),891]]);
         register_jx = `${reminderb.length >> (Math.min(Math.abs(3), 1))}`;
         reminderb += `${volumei.size << (Math.min(Math.abs(volumei.size), 4))}`;
      }
      for (let t = 0; t < 1; t++) {
          let ajaxf = 3;
         register_jx = `${parseInt(`${dragu}`) | register_jx.length}`;
         ajaxf %= Math.max(2, 5);
      }
         aboutc += parseFloat(`${parseInt(`${aboutc}`) & 1}`);
          let megaphoned: Map<any, any> = new Map([[String.fromCharCode(110,95,56,54,95,108,111,111,112,102,105,108,116,101,114,0),String.fromCharCode(112,95,50,56,95,115,105,103,110,97,116,117,114,101,115,0)], [String.fromCharCode(110,105,103,104,116,95,99,95,54,55,0),String.fromCharCode(122,95,55,48,95,108,111,99,107,115,0)]]);
          let moduleo: Map<any, any> = new Map([[String.fromCharCode(108,95,52,55,95,118,101,114,98,97,116,105,109,0),true ], [String.fromCharCode(122,95,57,57,95,99,111,118,97,108,101,110,116,0),true ]]);
          let loginK = 0.0;
         projectG -= 3 % (Math.max(parseInt(`${loginK}`), 9));
         megaphoned.set(`${megaphoned.size}`, moduleo.size);
         moduleo.set(`${megaphoned.size}`, megaphoned.size - 1);
         loginK -= moduleo.size;
      if ((projectG - aboutc) > 3.96) {
          let clear4 = String.fromCharCode(97,118,117,105,95,54,95,52,49,0);
          let bridgew = 2.0;
          let robotoh = true;
          let reducer4 = 5.0;
         projectG >>= Math.min(Math.abs(projectG / (Math.max(parseInt(`${aboutc}`), 4))), 2);
         clear4 = "1";
         bridgew += parseFloat(`${parseInt(`${reducer4}`) % 2}`);
         robotoh = clear4 == String.fromCharCode(77,0);
         reducer4 -= parseInt(`${bridgew}`) >> (Math.min(clear4.length, 4));
      }
      for (let d = 0; d < 1; d++) {
          let stationsP = false;
         thailandE = `${((stationsP ? 4 : 1) & 3)}`;
      }
      let constantsc = register_jx == String.fromCharCode(111,52,116,114,122,112,0);
      do {
         register_jx += `${projectG * 1}`;
         if (constantsc) {
            break;
         }
      } while ((4.4 <= dragu) && constantsc);
      if (4.43 == (4.76 - dragu)) {
         dragu /= Math.max(parseFloat(`${register_jx.length}`), 1);
      }
      let whistleO = projectG >= 9385356;
      do {
          let plusJ = String.fromCharCode(111,95,53,57,95,115,105,109,112,108,105,102,105,101,100,0);
          let watchi: Array<any> = [String.fromCharCode(97,95,57,54,95,114,101,99,101,110,116,101,114,0), String.fromCharCode(117,95,53,95,99,111,118,101,114,101,100,0), String.fromCharCode(97,115,115,105,103,110,95,118,95,49,52,0)];
          let sharedh = 0;
          let anythink4 = 2.0;
         projectG += parseInt(`${dragu}`);
         plusJ += "1";
         watchi = [parseInt(`${anythink4}`)];
         sharedh -= (String.fromCharCode(106,0) == plusJ ? parseInt(`${anythink4}`) : plusJ.length);
         if (whistleO) {
            break;
         }
      } while (whistleO && ((projectG + 4) <= 2));
      while (3.65 <= dragu) {
         projectG |= register_jx.length - projectG;
         break;
      }
          let sentryv = true;
         dragu /= Math.max(parseFloat(`${1}`), 5);
         sentryv = sentryv && sentryv;
          let configure3 = String.fromCharCode(99,112,120,95,113,95,56,0);
         register_jx = `${parseInt(`${aboutc}`) - parseInt(`${dragu}`)}`;
         configure3 += `${configure3.length}`;
          let androidc: Map<any, any> = new Map([[String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,100,95,122,95,50,53,0),85], [String.fromCharCode(98,117,99,107,101,116,95,56,95,50,56,0),962], [String.fromCharCode(112,114,101,118,111,117,115,95,100,95,49,56,0),643]]);
         thailandE = `${register_jx.length << (Math.min(thailandE.length, 5))}`;
         androidc = new Map([[`${androidc.size}`, androidc.size]]);
          let videoz: Array<any> = [621, 859, 27];
          let policyM = 3.0;
          let descK = 3.0;
         aboutc *= parseFloat(`${projectG}`);
         videoz = [videoz.length];
         policyM *= parseFloat(`${parseInt(`${descK}`) - 2}`);
         descK *= parseInt(`${policyM}`) ^ parseInt(`${descK}`);
      descr += `${navigationx.size}`;
   }
   let firebaset = editK == String.fromCharCode(114,57,52,113,118,101,100,52,105,117,0);
   do {
       let tooltips2 = 3.0;
       let incidentS = String.fromCharCode(121,95,55,57,95,108,105,98,118,101,114,115,105,111,110,0);
       let holderc = String.fromCharCode(109,95,53,50,95,112,111,115,105,116,105,118,101,0);
         tooltips2 /= Math.max(5, parseFloat(`${parseInt(`${tooltips2}`) ^ holderc.length}`));
         holderc = `${holderc.length}`;
      editK = `${unselectedF}`;
      if (firebaset) {
         break;
      }
   } while (firebaset && (3 > (navigationx.size & editK.length) || 3 > (editK.length & navigationx.size)));
   if (editK.length >= 4) {
      editK += `${injuryc - 2}`;
   }

    setShowSlider(true);

      editK = `${(String.fromCharCode(116,0) == editK ? injuryc : editK.length)}`;
   for (let v = 0; v < 1; v++) {
      editK += `${zhuboz.length >> (Math.min(Math.abs(1), 2))}`;
   }
      selectionM += `${navigationx.size >> (Math.min(editK.length, 2))}`;
   if (stationsJ.length >= 3) {
      unselectedF *= (String.fromCharCode(88,0) == filledd ? unselectedF : filledd.length);
   }
       let signinupQ = String.fromCharCode(114,115,104,105,102,116,95,119,95,52,56,0);
       let mbridgeU = String.fromCharCode(105,95,51,50,95,118,110,101,103,113,0);
       let umeng7: Array<any> = [732, 346, 330];
          let pointY: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,101,115,116,97,98,108,101,95,115,95,52,0),615], [String.fromCharCode(105,95,50,50,95,115,105,112,114,0),391]]);
         signinupQ += `${signinupQ.length}`;
         pointY.set(`${pointY.size}`, pointY.size);
       let leagueW = false;
       let untick0 = false;
      let statsj = 6592562 >= mbridgeU.length;
      do {
         mbridgeU += `${umeng7.length}`;
         if (statsj) {
            break;
         }
      } while ((mbridgeU.length < 5 && !untick0) && statsj);
      if (untick0) {
          let baidua = String.fromCharCode(107,95,54,49,95,114,101,118,101,97,108,0);
          let debug9 = 4.0;
          let ewardedh = true;
          let componentQ = 2;
          let successF = 4.0;
         untick0 = umeng7.includes(debug9);
         baidua += `${componentQ}`;
         debug9 *= parseFloat(`${parseInt(`${successF}`) ^ 2}`);
         ewardedh = componentQ > 90 && 14.95 > successF;
      }
          let holderE = true;
         mbridgeU = `${(3 * (holderE ? 3 : 4))}`;
       let privilegeM = String.fromCharCode(98,95,50,50,95,101,118,101,110,108,121,0);
       let style5 = String.fromCharCode(121,95,53,95,114,101,99,104,117,110,107,0);
      if (untick0) {
         signinupQ += `${style5.length & 2}`;
      }
      while (!untick0) {
          let thailand_ = String.fromCharCode(98,95,52,55,95,99,97,114,101,116,0);
          let countryu = 2.0;
          let gradlewM = String.fromCharCode(103,111,111,103,95,121,95,54,57,0);
          let skip3 = true;
         leagueW = !skip3;
         thailand_ = `${(String.fromCharCode(118,0) == gradlewM ? parseInt(`${countryu}`) : gradlewM.length)}`;
         countryu += parseFloat(`${1}`);
         break;
      }
      while (4 >= style5.length) {
         leagueW = privilegeM == style5;
         break;
      }
      zhuboz = "1";
      selectionM = `${(editK == String.fromCharCode(102,0) ? selectionM.length : editK.length)}`;
      descr = `${selectionM.length / (Math.max(editK.length, 7))}`;
    clearTimeout(sliderTimeout.current);

   if (selectionM != String.fromCharCode(51,0)) {
      zhuboz += `${(filledd == String.fromCharCode(115,0) ? filledd.length : parseInt(`${combinedZ}`))}`;
   }
   if (!selectionM.startsWith(`${injuryc}`)) {
      injuryc -= 1;
   }
   if (injuryc < descr.length) {
      injuryc %= Math.max(parseInt(`${combinedZ}`), 1);
   }
       let sportC: Array<any> = [890, 631];
       let searchp = String.fromCharCode(112,114,101,101,109,112,116,105,118,101,95,98,95,51,51,0);
          let checkboxO: Array<any> = [92, 479];
          let progressh: Map<any, any> = new Map([[String.fromCharCode(109,95,54,48,95,105,110,116,109,97,116,104,0),true ], [String.fromCharCode(100,111,109,101,115,116,105,99,95,98,95,52,49,0),true ]]);
          let movies5: Map<any, any> = new Map([[String.fromCharCode(98,108,117,101,95,56,95,57,53,0),247], [String.fromCharCode(117,95,55,49,95,119,97,116,99,104,101,114,0),145]]);
         sportC.push(movies5.size);
         checkboxO.push(3 << (Math.min(2, Math.abs(progressh.size))));
         progressh.set(`${checkboxO.length}`, 2);
         movies5.set(`${checkboxO.length}`, progressh.size / 3);
         searchp = `${sportC.length}`;
         searchp = `${1 ^ searchp.length}`;
      let leftz = sportC.length >= 7549904;
      do {
         sportC.push(sportC.length);
         if (leftz) {
            break;
         }
      } while ((!searchp.startsWith(`${sportC.length}`)) && leftz);
      while (sportC.length >= searchp.length) {
          let recommendationq: Array<any> = [889, 511, 500];
         sportC = [3];
         recommendationq = [recommendationq.length];
         break;
      }
         sportC = [(searchp == String.fromCharCode(48,0) ? sportC.length : searchp.length)];
      combinedZ /= Math.max(selectionM.length - 2, 2);
      editK += `${editK.length}`;
      descr += `${unselectedF & 2}`;
      selectionM += `${descr.length}`;
    sliderTimeout.current = setTimeout(() => {

   while (5 == editK.length) {
      selectionM += `${injuryc}`;
      break;
   }
      combinedZ /= Math.max(3, 2);
   if (delegate_8z != stationsJ) {
       let filledq: Array<any> = [695, 859];
       let assistc = String.fromCharCode(100,101,99,111,100,101,95,102,95,56,53,0);
       let targetm = 1.0;
       let found5: Array<any> = [String.fromCharCode(114,101,97,99,104,101,100,95,99,95,52,48,0), String.fromCharCode(99,111,109,112,108,101,116,101,115,95,117,95,52,48,0), String.fromCharCode(119,95,50,48,95,115,119,97,112,112,101,114,0)];
         filledq.push(1);
         filledq = [filledq.length / (Math.max(found5.length, 10))];
      while (1 == (filledq.length + 3)) {
         filledq.push(found5.length + 3);
         break;
      }
         targetm *= assistc.length;
      if (1 == (2 + assistc.length)) {
          let condensed2 = 4;
          let down2: Array<any> = [298, 274, 792];
          let tooltipsZ = true;
          let reactnativejsc = false;
         assistc = `${found5.length}`;
         condensed2 <<= Math.min(Math.abs(1), 3);
         down2 = [condensed2];
         tooltipsZ = down2.includes(reactnativejsc);
      }
         filledq.push(assistc.length);
      for (let q = 0; q < 2; q++) {
         targetm -= assistc.length ^ filledq.length;
      }
      for (let u = 0; u < 2; u++) {
         assistc += `${assistc.length % (Math.max(1, found5.length))}`;
      }
         targetm /= Math.max(parseInt(`${targetm}`), 3);
      while ((2 - assistc.length) >= 5) {
         assistc += `${parseInt(`${targetm}`)}`;
         break;
      }
          let popup7 = String.fromCharCode(117,95,55,52,95,114,101,115,105,103,110,0);
          let modelst: Map<any, any> = new Map([[String.fromCharCode(122,95,57,57,95,100,114,105,118,101,114,0),438], [String.fromCharCode(108,111,119,101,115,116,95,103,95,57,48,0),250]]);
          let buttonE = 1.0;
         targetm *= parseInt(`${targetm}`) & found5.length;
         popup7 += `${parseInt(`${buttonE}`)}`;
         modelst = new Map([[`${modelst.size}`, parseInt(`${buttonE}`) % (Math.max(modelst.size, 9))]]);
      for (let x = 0; x < 2; x++) {
         assistc = `${parseInt(`${targetm}`) * assistc.length}`;
      }
      stationsJ += `${(selectionM == String.fromCharCode(54,0) ? filledq.length : selectionM.length)}`;
   }
       let clockV: Map<any, any> = new Map([[String.fromCharCode(104,95,49,95,119,114,105,116,101,116,114,117,110,99,0),625], [String.fromCharCode(109,97,107,101,115,114,112,109,95,53,95,53,55,0),653]]);
      for (let i = 0; i < 1; i++) {
         clockV.set(`${clockV.size}`, clockV.size << (Math.min(Math.abs(3), 2)));
      }
       let condensedR = 5.0;
         clockV.set(`${condensedR}`, clockV.size);
      injuryc %= Math.max(3, parseInt(`${combinedZ}`));
   let bellK = filledd == String.fromCharCode(100,95,56,116,48,111,108,100,95,54,0);
   do {
      filledd = `${parseInt(`${combinedZ}`) - navigationx.size}`;
      if (bellK) {
         break;
      }
   } while (bellK && (unselectedF < 1));
   while (unselectedF > filledd.length) {
       let launchK: Array<any> = [421, 292];
       let materialZ = String.fromCharCode(112,95,55,50,95,99,111,117,108,100,0);
      let whatsappu = launchK.length <= 5193202;
      do {
         launchK = [1];
         if (whatsappu) {
            break;
         }
      } while (whatsappu && ((5 + materialZ.length) >= 1));
      while (1 == (launchK.length & materialZ.length) && 1 == (1 & launchK.length)) {
         materialZ += "3";
         break;
      }
      for (let a = 0; a < 3; a++) {
         launchK.push(3);
      }
         launchK = [launchK.length];
          let clubP = 2.0;
          let guide4 = 1;
         materialZ = `${guide4}`;
         clubP *= parseFloat(`${parseInt(`${clubP}`)}`);
         guide4 /= Math.max(parseInt(`${clubP}`) / 3, 2);
      while ((materialZ.length - launchK.length) >= 4 || 1 >= (4 - launchK.length)) {
         launchK = [materialZ.length];
         break;
      }
      filledd += `${1 * editK.length}`;
      break;
   }
       let accepted2 = true;
       let emojip = String.fromCharCode(105,95,50,56,95,115,107,105,112,112,97,98,108,101,0);
       let skip5 = false;
         emojip += `${((skip5 ? 5 : 2) + 1)}`;
         accepted2 = !accepted2 && emojip.length == 57;
      for (let z = 0; z < 2; z++) {
         emojip = `${((skip5 ? 3 : 3))}`;
      }
         skip5 = emojip.includes(`${accepted2}`);
       let middlez = String.fromCharCode(105,95,51,56,95,100,101,102,105,110,101,115,0);
      let photoz = accepted2 ? !accepted2 : accepted2;
      do {
         accepted2 = middlez.length < 90;
         if (photoz) {
            break;
         }
      } while (photoz && (accepted2 || skip5));
          let plusG: Map<any, any> = new Map([[String.fromCharCode(119,95,50,95,103,105,103,97,98,121,116,101,115,0),false ], [String.fromCharCode(113,95,49,48,95,100,101,108,101,116,101,0),false ]]);
          let chinaQ = String.fromCharCode(98,97,114,99,111,100,101,95,49,95,50,57,0);
          let carouselO = String.fromCharCode(98,111,117,110,100,95,107,95,55,56,0);
         accepted2 = emojip == carouselO;
         plusG = new Map([[`${plusG.size}`, plusG.size / (Math.max(chinaQ.length, 7))]]);
         chinaQ += `${2 >> (Math.min(3, Math.abs(plusG.size)))}`;
         carouselO += `${chinaQ.length | plusG.size}`;
       let buildB = 2;
      let clearG = skip5 ? !skip5 : skip5;
      do {
         skip5 = ((middlez.length & (accepted2 ? 11 : middlez.length)) == 11);
         if (clearG) {
            break;
         }
      } while (clearG && (middlez.endsWith(`${skip5}`)));
      selectionM += "1";
      setShowSlider(false);
    }, 1500);
  };

  const setBrightVolumeShare = async () => {
       let temperature3: Array<any> = [364, 369];
    let navigation6 = String.fromCharCode(114,95,54,48,95,100,97,105,0);
    let malaysiaL = String.fromCharCode(99,103,117,95,54,95,53,52,0);
    let with_2cl = 4;
    let serviceh = String.fromCharCode(116,95,53,53,95,101,120,116,101,114,110,97,108,0);
    let detailsC: Array<any> = [String.fromCharCode(115,116,99,98,95,121,95,57,54,0), String.fromCharCode(121,95,54,48,95,115,117,98,106,101,99,116,105,118,101,115,0), String.fromCharCode(104,95,49,54,95,101,114,114,111,114,115,0)];
    let switch_4Y = String.fromCharCode(107,95,57,54,95,97,117,116,104,111,114,105,122,97,116,105,111,110,115,0);
    let taiwanr = String.fromCharCode(110,101,119,115,108,101,116,116,101,114,95,109,95,56,0);
    let package__uk = String.fromCharCode(114,95,55,50,95,101,110,99,114,121,112,116,105,111,110,0);
    let line6 = false;
    let penalty4 = String.fromCharCode(105,110,115,112,101,99,116,95,101,95,54,0);
    let basketball3 = String.fromCharCode(97,95,51,95,103,97,105,110,0);
    let whistlez = String.fromCharCode(119,95,55,48,95,109,112,111,110,0);
    let gradlewB = false;
    let whiteC = true;
   while ((detailsC.length + 1) == 3) {
       let mbjscommon_ = 1.0;
       let gradlewI = String.fromCharCode(105,95,50,49,95,99,97,112,97,98,105,108,105,116,105,101,115,0);
       let constantsr = String.fromCharCode(120,95,51,52,95,97,98,98,114,0);
       let sidez = 5;
       let with_bY = true;
      while (4 > (constantsr.length & 4)) {
         constantsr = "2";
         break;
      }
      let thailandp = constantsr.length <= 6813324;
      do {
         constantsr += `${sidez}`;
         if (thailandp) {
            break;
         }
      } while (thailandp && (4 >= constantsr.length));
         sidez %= Math.max(3, 2);
      while (!gradlewI.includes(`${with_bY}`)) {
          let types0 = String.fromCharCode(103,111,100,101,112,115,95,54,95,51,52,0);
          let windE: Map<any, any> = new Map([[String.fromCharCode(119,95,56,54,95,116,119,105,116,116,101,114,0),827], [String.fromCharCode(98,95,56,51,95,99,108,117,115,116,101,114,115,0),15], [String.fromCharCode(116,114,101,122,111,114,95,111,95,54,0),750]]);
          let changeS = true;
         with_bY = constantsr.length < 63;
         types0 += `${windE.size & 1}`;
         windE = new Map([[`${windE.size}`, windE.size % 1]]);
         changeS = windE.size >= 39;
         break;
      }
         gradlewI = `${gradlewI.length % 2}`;
         sidez &= 2 << (Math.min(5, gradlewI.length));
       let crownB = 0;
       let vietnamo = 4;
      for (let c = 0; c < 3; c++) {
          let mbsplash5 = true;
          let sharedt = 0;
          let sigmobP = 1.0;
         mbjscommon_ *= (parseFloat(`${(with_bY ? 1 : 5) << (Math.min(Math.abs(parseInt(`${mbjscommon_}`)), 2))}`));
         mbsplash5 = sharedt > sigmobP;
         sharedt >>= Math.min(parseInt(`${Math.abs(((mbsplash5 ? 1 : 3) >> (Math.min(Math.abs(sharedt), 1))))}`), 1);
         sigmobP /= Math.max(4, 1 * sharedt);
      }
         with_bY = crownB < 45 && constantsr.length < 45;
      while (!gradlewI.includes(`${sidez}`)) {
          let changeJ: Map<any, any> = new Map([[String.fromCharCode(103,101,116,97,100,100,114,105,110,102,111,95,116,95,57,54,0),373], [String.fromCharCode(112,111,105,115,111,110,95,113,95,55,55,0),398], [String.fromCharCode(105,95,54,55,95,101,113,117,97,108,105,122,101,114,0),751]]);
          let completes = String.fromCharCode(110,95,57,57,0);
          let langkeyB = String.fromCharCode(104,95,51,50,95,109,112,101,103,118,108,99,0);
          let reactnativejsj = false;
         gradlewI = `${langkeyB.length | 1}`;
         changeJ.set(completes, completes.length);
         langkeyB = `${3 * changeJ.size}`;
         reactnativejsj = completes.length > 6;
         break;
      }
         with_bY = 82 < gradlewI.length;
      for (let c = 0; c < 1; c++) {
         constantsr = `${sidez}`;
      }
         mbjscommon_ /= Math.max(3, parseFloat(`${1}`));
      if (constantsr != gradlewI) {
          let analytics3 = String.fromCharCode(106,95,49,53,95,108,109,100,98,0);
          let senda = 3.0;
          let agreementb: Array<any> = [994, 992, 556];
          let sportj = String.fromCharCode(100,95,56,49,95,101,116,104,114,101,97,100,105,110,103,0);
          let resultD = 0.0;
         gradlewI = `${((with_bY ? 1 : 4) & sidez)}`;
         analytics3 = `${parseInt(`${resultD}`)}`;
         senda -= 1;
         agreementb.push(parseInt(`${senda}`) >> (Math.min(analytics3.length, 4)));
         sportj += `${parseInt(`${senda}`)}`;
         resultD *= parseFloat(`${agreementb.length / (Math.max(3, 10))}`);
      }
          let telegramG: Map<any, any> = new Map([[String.fromCharCode(110,111,110,110,117,108,108,98,117,102,102,101,114,95,97,95,57,55,0),true ], [String.fromCharCode(119,95,51,52,95,97,98,115,0),true ]]);
          let volumej = String.fromCharCode(110,95,55,55,95,99,97,110,99,101,108,97,98,108,101,0);
         sidez &= crownB - telegramG.size;
         telegramG.set(volumej, (String.fromCharCode(56,0) == volumej ? volumej.length : volumej.length));
      serviceh = `${temperature3.length | 3}`;
      break;
   }
   if ((penalty4.length * 4) == 4 && 2 == (4 * temperature3.length)) {
      penalty4 += `${whistlez.length | switch_4Y.length}`;
   }
      serviceh += `${penalty4.length << (Math.min(Math.abs(1), 5))}`;
       let disconnectedr = String.fromCharCode(117,95,49,55,95,99,117,114,108,0);
       let heartH = 5.0;
          let login5 = String.fromCharCode(118,95,49,48,95,109,117,116,97,116,105,110,103,0);
         disconnectedr = `${parseInt(`${heartH}`) >> (Math.min(disconnectedr.length, 5))}`;
         login5 += `${login5.length}`;
      let inactivej = heartH >= 6584649.0;
      do {
         heartH -= parseInt(`${heartH}`);
         if (inactivej) {
            break;
         }
      } while ((5 > (parseInt(`${heartH}`) / 4) || (heartH / 1.28) > 3.81) && inactivej);
          let foregroundC = 0.0;
          let paginationK = String.fromCharCode(110,95,50,51,95,102,111,108,100,0);
         heartH *= parseInt(`${foregroundC}`);
         paginationK = `${(paginationK == String.fromCharCode(98,0) ? paginationK.length : paginationK.length)}`;
       let mutedu: Array<any> = [644, 236, 208];
       let splashp: Array<any> = [String.fromCharCode(101,95,50,56,95,112,97,114,116,105,116,105,111,110,0), String.fromCharCode(102,95,49,50,95,110,111,116,99,104,0), String.fromCharCode(109,95,54,52,95,115,101,116,116,105,110,103,0)];
          let expiredx = 3;
          let verticalb = String.fromCharCode(100,95,49,56,95,115,109,97,114,116,0);
         heartH += mutedu.length;
         expiredx ^= expiredx;
         verticalb += `${expiredx * verticalb.length}`;
      for (let r = 0; r < 1; r++) {
         disconnectedr = `${disconnectedr.length}`;
      }
      package__uk += `${whistlez.length | 1}`;
      basketball3 += "1";
   let loadingn = package__uk.length <= 7352511;
   do {
      package__uk += `${temperature3.length}`;
      if (loadingn) {
         break;
      }
   } while ((2 < temperature3.length) && loadingn);
       let u_positionb = String.fromCharCode(106,95,57,53,95,110,111,110,110,117,108,108,98,117,102,102,101,114,0);
       let bridgej = String.fromCharCode(101,102,102,101,99,116,105,118,101,108,121,95,55,95,49,57,0);
      if (bridgej == String.fromCharCode(105,0) || u_positionb.length < 5) {
         bridgej += `${2 ^ u_positionb.length}`;
      }
      for (let a = 0; a < 1; a++) {
          let moreA = String.fromCharCode(110,112,111,105,110,116,115,95,97,95,50,53,0);
          let albumy: Map<any, any> = new Map([[String.fromCharCode(119,95,52,49,95,109,97,120,105,109,105,122,101,100,0),false ], [String.fromCharCode(117,95,49,57,95,115,97,109,112,108,101,0),true ], [String.fromCharCode(113,95,57,52,95,100,101,99,108,105,110,101,100,0),true ]]);
          let overlaym = String.fromCharCode(101,95,51,56,95,99,111,110,116,114,111,108,108,101,100,0);
          let yellowq = 4;
         u_positionb = `${albumy.size}`;
         moreA = `${moreA.length << (Math.min(Math.abs(1), 3))}`;
         albumy = new Map([[`${yellowq}`, yellowq & 2]]);
         overlaym = `${yellowq}`;
      }
      for (let c = 0; c < 2; c++) {
         bridgej += `${bridgej.length}`;
      }
       let z_playerH = 0;
         bridgej += "1";
      if (!bridgej.startsWith(`${z_playerH}`)) {
          let greenJ = 1;
          let dropdownq = 4;
         bridgej = "2";
         greenJ /= Math.max(1 - dropdownq, 5);
         dropdownq |= greenJ;
      }
      detailsC = [2];
       let episode1 = String.fromCharCode(121,95,51,56,95,100,97,118,100,0);
       let configure7 = 0;
      for (let s = 0; s < 3; s++) {
          let themeX = String.fromCharCode(114,101,110,100,101,114,105,110,103,95,54,95,50,0);
          let description_wX = String.fromCharCode(111,114,100,101,114,116,121,112,101,95,56,95,56,52,0);
         episode1 = `${configure7 >> (Math.min(description_wX.length, 1))}`;
         themeX = "1";
         description_wX += `${(String.fromCharCode(74,0) == themeX ? themeX.length : themeX.length)}`;
      }
      let mode6 = episode1 == String.fromCharCode(116,53,95,109,114,120,0);
      do {
         episode1 += "1";
         if (mode6) {
            break;
         }
      } while (mode6 && (1 >= (episode1.length / (Math.max(1, configure7)))));
       let videot = String.fromCharCode(109,95,49,50,95,100,101,112,114,101,99,105,97,116,101,100,104,0);
       let read_ = String.fromCharCode(112,95,51,55,95,116,97,115,107,0);
         configure7 &= episode1.length & 1;
       let routerH: Map<any, any> = new Map([[String.fromCharCode(103,95,49,95,97,99,116,105,118,105,116,105,101,115,0),274], [String.fromCharCode(98,95,56,54,95,114,101,109,97,105,110,0),455], [String.fromCharCode(113,95,49,48,48,95,114,101,115,105,103,110,101,100,0),212]]);
      if (read_.startsWith(`${configure7}`)) {
          let vignette9 = true;
          let reminderc = String.fromCharCode(109,95,53,54,95,111,112,101,110,0);
          let paginationZ = 5.0;
          let mbbanneri = 0.0;
         configure7 *= reminderc.length + 3;
         vignette9 = 83.39 >= paginationZ;
         reminderc += `${parseInt(`${paginationZ}`) - 2}`;
         mbbanneri += (parseFloat(`${(vignette9 ? 2 : 2) * parseInt(`${paginationZ}`)}`));
      }
      malaysiaL = `${(String.fromCharCode(50,0) == episode1 ? package__uk.length : episode1.length)}`;
      navigation6 = "2";
      navigation6 += `${navigation6.length}`;
   let bingF = 8498415 >= detailsC.length;
   do {
      detailsC.push((String.fromCharCode(49,0) == whistlez ? (gradlewB ? 5 : 1) : whistlez.length));
      if (bingF) {
         break;
      }
   } while (bingF && (4 <= (4 << (Math.min(4, detailsC.length))) || (detailsC.length << (Math.min(malaysiaL.length, 1))) <= 4));
   for (let s = 0; s < 3; s++) {
      serviceh += "2";
   }
   while (!basketball3.startsWith(`${line6}`)) {
       let rewindU = true;
      if (rewindU) {
          let photoo = String.fromCharCode(120,95,55,56,95,117,112,108,111,97,100,115,0);
          let configureh: Array<any> = [String.fromCharCode(111,95,53,49,95,107,101,121,98,111,97,114,100,0), String.fromCharCode(99,104,97,114,99,111,110,118,95,122,95,49,54,0)];
          let componentG = 5;
          let dycreatori = false;
         rewindU = configureh.includes(componentG);
         photoo = "2";
         configureh.push(photoo.length << (Math.min(Math.abs(2), 2)));
         componentG -= (photoo == String.fromCharCode(119,0) ? (dycreatori ? 5 : 1) : photoo.length);
      }
         rewindU = !rewindU || rewindU;
         rewindU = !rewindU;
      line6 = taiwanr == String.fromCharCode(119,0) || detailsC.length > 84;
      break;
   }
   let largek = malaysiaL == String.fromCharCode(108,114,117,50,117,107,0);
   do {
       let faviconz = String.fromCharCode(100,105,108,97,116,101,95,106,95,56,0);
         faviconz += "3";
      if (faviconz.length > 5 || faviconz.length > 5) {
         faviconz = "1";
      }
      let regengg = String.fromCharCode(105,114,120,105,53,52,49,0) == faviconz;
      do {
         faviconz += `${3 / (Math.max(6, faviconz.length))}`;
         if (regengg) {
            break;
         }
      } while ((faviconz == String.fromCharCode(90,0)) && regengg);
      malaysiaL = `${((gradlewB ? 4 : 3) / (Math.max(9, taiwanr.length)))}`;
      if (largek) {
         break;
      }
   } while ((malaysiaL.length >= 4) && largek);
   if (package__uk.length < 1 || gradlewB) {
       let dataX = true;
       let transferS = 1.0;
       let downloadedz = String.fromCharCode(109,95,50,56,95,115,116,111,114,97,98,108,101,0);
       let middle4 = String.fromCharCode(108,105,98,99,95,122,95,53,54,0);
       let detailK = String.fromCharCode(114,95,52,56,95,99,111,108,111,114,115,112,97,99,101,0);
         transferS -= parseFloat(`${parseInt(`${transferS}`)}`);
       let downloadingz: Map<any, any> = new Map([[String.fromCharCode(115,99,97,108,97,114,115,95,107,95,56,51,0),true ], [String.fromCharCode(98,97,111,98,97,98,95,52,95,57,49,0),false ], [String.fromCharCode(109,95,48,95,118,97,114,105,110,102,111,0),true ]]);
         downloadedz = `${(parseInt(`${transferS}`) ^ (dataX ? 4 : 1))}`;
      if ((downloadedz.length / (Math.max(5, 6))) < 2) {
          let navigationP: Map<any, any> = new Map([[String.fromCharCode(99,95,50,54,95,102,114,111,109,102,101,0),435], [String.fromCharCode(118,95,56,49,95,116,114,97,110,115,105,116,105,111,110,0),437], [String.fromCharCode(98,95,55,56,95,112,97,114,105,116,105,111,110,105,110,103,0),285]]);
          let alerth = String.fromCharCode(115,97,109,112,108,101,114,97,116,101,95,114,95,50,49,0);
         downloadedz = `${downloadedz.length & middle4.length}`;
         navigationP.set(alerth, 1 >> (Math.min(5, Math.abs(navigationP.size))));
         alerth = `${navigationP.size}`;
      }
          let context5: Map<any, any> = new Map([[String.fromCharCode(115,95,51,51,95,97,115,115,105,103,110,109,101,110,116,0),251], [String.fromCharCode(122,95,53,57,95,103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,0),253]]);
         detailK = `${(middle4 == String.fromCharCode(120,0) ? middle4.length : context5.size)}`;
       let regeng8 = false;
      while (detailK.length >= 2) {
          let forma = String.fromCharCode(114,97,116,105,111,110,97,108,95,103,95,49,52,0);
          let tailC = 0.0;
         detailK += `${parseInt(`${tailC}`)}`;
         forma += `${forma.length | 2}`;
         tailC /= Math.max(1, parseFloat(`${forma.length >> (Math.min(Math.abs(1), 4))}`));
         break;
      }
          let mbbannerw = String.fromCharCode(115,116,97,114,116,117,112,95,111,95,51,48,0);
          let inactiveM = 5.0;
          let sentrye = 3.0;
         dataX = (((regeng8 ? downloadingz.size : 34) / (Math.max(8, downloadingz.size))) >= 97);
         mbbannerw += "1";
         inactiveM /= Math.max(mbbannerw.length, 4);
         sentrye /= Math.max(4, (parseFloat(`${String.fromCharCode(110,0) == mbbannerw ? parseInt(`${inactiveM}`) : mbbannerw.length}`)));
      let selectionQ = downloadingz.size <= 7364723;
      do {
          let floating9 = true;
          let playlistI = true;
          let favoritek = String.fromCharCode(97,114,103,115,95,51,95,55,49,0);
          let macau8 = String.fromCharCode(101,120,99,101,101,100,101,100,95,56,95,52,50,0);
          let zhengpiany = String.fromCharCode(113,95,56,57,95,112,108,117,103,103,101,100,0);
         downloadingz.set(macau8, macau8.length);
         floating9 = zhengpiany == favoritek;
         playlistI = favoritek.length <= 17 || !playlistI;
         zhengpiany += "3";
         if (selectionQ) {
            break;
         }
      } while (selectionQ && (1 < (downloadingz.size << (Math.min(Math.abs(3), 1))) && 1 < (downloadingz.size + 3)));
      let mbridge0 = 6588759 <= downloadedz.length;
      do {
         downloadedz = `${((regeng8 ? 1 : 2))}`;
         if (mbridge0) {
            break;
         }
      } while (mbridge0 && (detailK == String.fromCharCode(89,0) && downloadedz.length <= 1));
          let user_ = false;
          let private_is0: Array<any> = [595, 986];
          let privilege5 = 4;
         regeng8 = transferS == 94.62;
         user_ = !user_;
         private_is0 = [private_is0.length << (Math.min(Math.abs(1), 4))];
         privilege5 ^= 3;
      for (let q = 0; q < 2; q++) {
          let contextd = String.fromCharCode(97,117,116,111,102,111,99,117,115,105,110,103,95,109,95,50,50,0);
          let settings8: Array<any> = [691, 410];
          let brightnessV = 2.0;
          let halfi: Map<any, any> = new Map([[String.fromCharCode(97,98,111,118,101,95,105,95,54,54,0),String.fromCharCode(108,95,51,54,95,114,101,109,97,112,112,101,100,0)], [String.fromCharCode(114,101,99,118,102,114,111,109,95,112,95,49,55,0),String.fromCharCode(119,111,114,100,108,105,115,116,95,106,95,50,0)]]);
         downloadedz += `${2 - settings8.length}`;
         contextd += `${parseInt(`${brightnessV}`)}`;
         settings8 = [halfi.size ^ parseInt(`${brightnessV}`)];
         halfi.set(contextd, 2 + contextd.length);
      }
          let resendK = String.fromCharCode(99,111,109,98,105,110,97,116,105,111,110,115,95,53,95,49,52,0);
          let buffer7: Map<any, any> = new Map([[String.fromCharCode(97,95,56,49,95,113,117,97,114,116,122,0),507], [String.fromCharCode(97,95,56,54,95,109,98,98,108,111,99,107,0),65]]);
          let sliderN: Array<any> = [633, 415, 593];
         downloadedz = `${(downloadedz == String.fromCharCode(86,0) ? resendK.length : downloadedz.length)}`;
         resendK = "3";
         buffer7 = new Map([[`${buffer7.size}`, sliderN.length]]);
         sliderN = [buffer7.size];
          let logoE = 3.0;
          let default_boY = 4;
          let clearR = true;
         regeng8 = !dataX || 51 < default_boY;
         logoE *= (parseFloat(`${(clearR ? 4 : 4) & parseInt(`${logoE}`)}`));
         default_boY <<= Math.min(Math.abs(2 | parseInt(`${logoE}`)), 5);
         clearR = !clearR;
         downloadedz += `${1 & parseInt(`${transferS}`)}`;
      gradlewB = !line6 || detailsC.length < 40;
   }
      basketball3 = `${switch_4Y.length / (Math.max(2, 4))}`;
   for (let q = 0; q < 2; q++) {
      with_2cl %= Math.max(3, 4);
   }
      basketball3 += `${serviceh.length}`;
   for (let w = 0; w < 2; w++) {
      package__uk = "2";
   }

    brightShare.value = await SystemSetting.getAppBrightness();

      switch_4Y += `${with_2cl}`;
   while ((5 | with_2cl) >= 2 && (serviceh.length | 5) >= 3) {
      with_2cl /= Math.max(5, 1);
      break;
   }
       let selections = String.fromCharCode(98,95,52,95,111,102,102,108,105,110,101,0);
       let math4 = 1.0;
      for (let g = 0; g < 3; g++) {
         math4 *= (String.fromCharCode(120,0) == selections ? selections.length : parseInt(`${math4}`));
      }
         selections += "1";
         selections = `${parseInt(`${math4}`) ^ selections.length}`;
         selections += `${selections.length % 2}`;
          let plashG: Map<any, any> = new Map([[String.fromCharCode(109,118,101,99,95,99,95,57,55,0),421], [String.fromCharCode(115,95,57,51,95,97,98,115,116,114,97,99,116,0),608]]);
          let networkQ = 4.0;
         math4 -= (String.fromCharCode(52,0) == selections ? parseInt(`${math4}`) : selections.length);
         plashG = new Map([[`${plashG.size}`, 3 + plashG.size]]);
         networkQ -= parseFloat(`${parseInt(`${networkQ}`) ^ plashG.size}`);
          let alertf = 2;
         selections += `${1 << (Math.min(Math.abs(parseInt(`${math4}`)), 5))}`;
         alertf += alertf;
      penalty4 += `${3 - with_2cl}`;
      detailsC.push((taiwanr == String.fromCharCode(77,0) ? temperature3.length : taiwanr.length));
       let teamd = 2;
      if (3 < teamd) {
         teamd -= teamd / (Math.max(1, 4));
      }
          let acceptedi = String.fromCharCode(113,95,49,56,95,99,97,110,110,111,116,0);
          let agreementz = String.fromCharCode(109,95,50,54,95,99,121,99,108,101,115,0);
         teamd %= Math.max(agreementz.length + acceptedi.length, 2);
       let mbjscommonE = String.fromCharCode(101,120,116,101,116,110,100,101,100,95,120,95,51,53,0);
      package__uk = `${((line6 ? 1 : 4))}`;
      switch_4Y = `${malaysiaL.length >> (Math.min(package__uk.length, 5))}`;
   for (let v = 0; v < 2; v++) {
      navigation6 = `${malaysiaL.length - 3}`;
   }
   if (serviceh.length < 2) {
       let team4 = String.fromCharCode(111,95,53,55,95,116,104,114,101,115,104,111,108,100,105,110,103,0);
       let dragJ: Map<any, any> = new Map([[String.fromCharCode(99,97,108,99,117,108,97,116,101,95,57,95,52,57,0),336], [String.fromCharCode(97,95,52,95,100,108,114,114,0),226]]);
       let enewsV = true;
       let controlsz = String.fromCharCode(114,95,52,57,95,115,116,101,112,115,0);
       let mbnative_ = String.fromCharCode(99,104,97,110,103,101,99,111,117,110,116,101,114,95,110,95,57,48,0);
      if (controlsz.length < 3 && mbnative_ != String.fromCharCode(104,0)) {
          let traminiX = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,105,111,110,95,115,95,50,53,0);
          let langkeyZ = String.fromCharCode(104,95,51,57,95,114,101,113,117,101,115,116,101,114,115,0);
          let disconnected4: Map<any, any> = new Map([[String.fromCharCode(114,117,98,98,101,114,95,118,95,53,50,0),187], [String.fromCharCode(115,112,111,116,95,118,95,54,57,0),711], [String.fromCharCode(118,95,50,51,95,116,114,97,110,115,112,0),599]]);
         mbnative_ = `${disconnected4.size}`;
         traminiX += `${langkeyZ.length | 2}`;
         langkeyZ += `${(traminiX == String.fromCharCode(76,0) ? traminiX.length : langkeyZ.length)}`;
         disconnected4.set(traminiX, traminiX.length / (Math.max(2, langkeyZ.length)));
      }
      for (let f = 0; f < 2; f++) {
         dragJ = new Map([[`${dragJ.size}`, dragJ.size ^ 1]]);
      }
      let mbnativeZ = 5449467 >= controlsz.length;
      do {
         controlsz += "3";
         if (mbnativeZ) {
            break;
         }
      } while ((3 >= controlsz.length || enewsV) && mbnativeZ);
          let ewardedu = 2;
          let away_: Map<any, any> = new Map([[String.fromCharCode(108,111,99,107,109,103,114,95,109,95,54,53,0),false ], [String.fromCharCode(99,100,101,114,114,111,114,95,98,95,55,0),true ], [String.fromCharCode(99,95,54,49,95,99,104,101,99,107,112,111,105,110,116,0),true ]]);
         controlsz = "3";
         ewardedu += away_.size;
         away_.set(`${ewardedu}`, 3 * away_.size);
       let heartg = 5;
       let networkM = 4;
         enewsV = dragJ.size == 78;
         team4 += `${((enewsV ? 2 : 3))}`;
         networkM %= Math.max(3, team4.length + 1);
         controlsz = "1";
         heartg /= Math.max(2, 1 | controlsz.length);
      if (1 <= networkM) {
          let rank6: Map<any, any> = new Map([[String.fromCharCode(101,110,99,108,111,115,105,110,103,95,100,95,49,0),false ], [String.fromCharCode(105,95,55,56,95,115,111,114,116,101,114,0),true ], [String.fromCharCode(105,110,116,114,97,120,98,108,111,99,107,95,57,95,56,0),true ]]);
          let layoutV = String.fromCharCode(115,97,100,120,95,51,95,50,0);
          let mini_ = 1;
          let downloadedV: Map<any, any> = new Map([[String.fromCharCode(109,111,116,105,111,110,115,101,97,114,99,104,95,106,95,57,53,0),String.fromCharCode(106,95,54,50,95,98,105,116,118,101,99,116,111,114,0)], [String.fromCharCode(109,112,115,117,98,95,103,95,54,0),String.fromCharCode(107,95,49,52,95,98,105,116,114,97,116,101,0)], [String.fromCharCode(99,95,49,51,95,115,116,114,116,111,107,0),String.fromCharCode(108,95,52,55,95,105,110,116,101,114,112,114,101,116,0)]]);
          let statisticsP = String.fromCharCode(116,95,54,50,95,112,97,114,116,105,99,108,101,0);
         networkM &= mbnative_.length >> (Math.min(5, Math.abs(dragJ.size)));
         rank6 = new Map([[`${downloadedV.size}`, layoutV.length]]);
         layoutV = `${mini_}`;
         mini_ -= (layoutV == String.fromCharCode(97,0) ? mini_ : layoutV.length);
         downloadedV.set(`${statisticsP}`, 2);
         statisticsP += `${mini_}`;
      }
       let statisticsX = String.fromCharCode(103,95,55,49,95,114,101,99,101,105,118,101,0);
       let modelc = String.fromCharCode(111,95,52,50,95,114,101,109,105,120,105,110,103,0);
       let hejiW = 4;
       let securityU = 3;
      if (enewsV) {
          let private_ps = String.fromCharCode(99,95,52,57,95,97,100,106,117,115,116,0);
          let tickQ: Map<any, any> = new Map([[String.fromCharCode(111,109,101,103,97,95,99,95,56,49,0),String.fromCharCode(101,110,99,111,100,105,110,103,115,95,102,95,49,49,0)], [String.fromCharCode(112,95,50,57,95,114,101,99,101,105,118,101,100,0),String.fromCharCode(118,95,54,95,115,117,98,116,114,97,99,116,105,110,103,0)]]);
          let bufferU: Array<any> = [421, 695, 801];
          let inactiveB = 3;
          let logina = 4.0;
         networkM %= Math.max(hejiW, 5);
         private_ps = "3";
         tickQ = new Map([[`${tickQ.size}`, (private_ps == String.fromCharCode(98,0) ? private_ps.length : tickQ.size)]]);
         bufferU.push(inactiveB);
         inactiveB ^= private_ps.length + tickQ.size;
         logina /= Math.max(5, (private_ps == String.fromCharCode(99,0) ? private_ps.length : bufferU.length));
      }
      serviceh += `${serviceh.length / 3}`;
   }
      switch_4Y += `${navigation6.length}`;
      temperature3 = [serviceh.length << (Math.min(malaysiaL.length, 5))];
      switch_4Y += `${((gradlewB ? 2 : 2))}`;
   if (4 >= basketball3.length) {
       let orientationo = 5;
       let arrowb = String.fromCharCode(117,95,56,55,95,99,101,110,116,114,97,108,108,121,0);
       let updatesb = String.fromCharCode(121,95,51,48,95,97,115,121,110,99,104,114,111,110,111,117,115,108,121,0);
       let analyticsc = 0.0;
       let typingl = String.fromCharCode(102,105,108,116,101,114,102,95,122,95,56,51,0);
      for (let i = 0; i < 1; i++) {
          let short_1z = false;
          let s_centeri = 1;
         analyticsc -= parseInt(`${analyticsc}`) ^ 1;
         short_1z = !short_1z;
         s_centeri |= s_centeri / 2;
      }
         analyticsc /= Math.max(5, 1 + orientationo);
          let halfiA: Array<any> = [278, 953, 762];
          let middleJ: Array<any> = [502, 353];
         arrowb += "3";
         halfiA = [1 & middleJ.length];
         middleJ = [1 & halfiA.length];
      while (2 >= (5 >> (Math.min(3, typingl.length))) && 5 >= (orientationo >> (Math.min(typingl.length, 4)))) {
         typingl += `${2 + parseInt(`${analyticsc}`)}`;
         break;
      }
          let eighteenw = 0;
          let volume3: Map<any, any> = new Map([[String.fromCharCode(104,95,55,53,95,99,111,108,117,109,115,0),183], [String.fromCharCode(105,95,49,48,48,95,112,103,105,100,120,0),142]]);
          let aboutg = 4;
         analyticsc *= 2;
         eighteenw /= Math.max(5, volume3.size);
         volume3 = new Map([[`${eighteenw}`, 2]]);
         aboutg *= 2 ^ volume3.size;
       let phoneU = String.fromCharCode(109,95,52,55,95,102,105,110,100,97,115,115,111,99,105,97,116,105,111,110,0);
       let anytime0 = String.fromCharCode(110,111,110,101,109,112,116,121,95,121,95,49,49,0);
      let traminil = analyticsc <= 7926525.0;
      do {
          let splashc = 3.0;
         analyticsc /= Math.max(updatesb.length, 4);
         splashc /= Math.max(parseInt(`${splashc}`), 5);
         if (traminil) {
            break;
         }
      } while (traminil && ((analyticsc / (Math.max(10, anytime0.length))) > 1.58));
      for (let x = 0; x < 1; x++) {
          let commonf: Map<any, any> = new Map([[String.fromCharCode(114,103,98,116,111,95,103,95,50,48,0),2], [String.fromCharCode(112,114,101,118,111,105,117,115,95,98,95,49,51,0),455]]);
          let goalu = String.fromCharCode(109,95,57,57,95,102,108,97,103,0);
          let sportw: Array<any> = [373, 334];
          let anytimeV = String.fromCharCode(112,97,114,97,109,101,116,114,105,122,101,100,95,111,95,55,51,0);
         arrowb += `${sportw.length}`;
         commonf.set(goalu, commonf.size % (Math.max(goalu.length, 3)));
         sportw.push(3 * commonf.size);
         anytimeV += `${3 | anytimeV.length}`;
      }
         typingl += `${anytime0.length - arrowb.length}`;
         anytime0 = `${(String.fromCharCode(110,0) == updatesb ? updatesb.length : arrowb.length)}`;
      if (3.6 < (analyticsc / (Math.max(5.60, 6))) && 5.60 < (analyticsc / (Math.max(arrowb.length, 9)))) {
         analyticsc += updatesb.length / (Math.max(2, 8));
      }
       let diced = 0;
      let referrerW = 5285441 <= orientationo;
      do {
         orientationo ^= orientationo & typingl.length;
         if (referrerW) {
            break;
         }
      } while ((2 >= (diced ^ orientationo) && (diced ^ 2) >= 4) && referrerW);
          let pathz = String.fromCharCode(118,105,110,116,101,114,112,111,108,97,116,111,114,95,107,95,51,56,0);
          let checkbox5 = String.fromCharCode(114,95,49,51,95,116,105,109,101,111,117,116,101,100,0);
         analyticsc *= arrowb.length ^ updatesb.length;
         pathz = `${1 * pathz.length}`;
         checkbox5 = `${checkbox5.length}`;
         anytime0 += `${(typingl == String.fromCharCode(50,0) ? typingl.length : parseInt(`${analyticsc}`))}`;
      basketball3 += `${serviceh.length + 2}`;
   }
       let gestureR: Array<any> = [552, 277];
       let bannerK = 0.0;
       let register_og = 0.0;
       let indexs = 5;
       let configx = 1;
       let toponS = false;
         bannerK *= parseFloat(`${gestureR.length & 3}`);
          let delegate_ty = String.fromCharCode(112,95,52,56,95,116,117,110,110,101,108,105,110,103,0);
          let bootsplashu = 3.0;
          let time_slQ = true;
         register_og += delegate_ty.length;
         delegate_ty = `${(parseInt(`${bootsplashu}`) - (time_slQ ? 4 : 1))}`;
         bootsplashu /= Math.max(4, parseFloat(`${parseInt(`${bootsplashu}`) - 1}`));
         time_slQ = !time_slQ;
          let canvasI = 1;
          let arrowg: Array<any> = [String.fromCharCode(106,95,54,95,100,101,99,98,110,0), String.fromCharCode(107,95,55,56,95,115,121,110,99,97,98,108,101,0), String.fromCharCode(99,95,54,49,95,122,101,114,111,122,101,114,111,0)];
         configx /= Math.max(parseInt(`${bannerK}`) / 3, 4);
         canvasI /= Math.max(canvasI - arrowg.length, 2);
         arrowg.push(arrowg.length);
         configx &= 3;
       let otheri = 3.0;
       let d_managerj = 1.0;
      while (2 < (4 ^ indexs)) {
         d_managerj *= gestureR.length * configx;
         break;
      }
          let frame_7i = String.fromCharCode(119,95,50,56,95,105,110,100,101,110,116,101,100,0);
         bannerK += parseFloat(`${parseInt(`${d_managerj}`) << (Math.min(5, Math.abs(parseInt(`${otheri}`))))}`);
         frame_7i = `${(frame_7i == String.fromCharCode(57,0) ? frame_7i.length : frame_7i.length)}`;
      package__uk = `${detailsC.length}`;
   while (4 > (2 | switch_4Y.length) && 2 > (switch_4Y.length | detailsC.length)) {
       let windS = 4.0;
       let gpaye = 0;
       let slidert = String.fromCharCode(114,101,103,105,115,116,101,114,101,114,95,119,95,57,56,0);
       let sentryl = String.fromCharCode(110,95,54,57,95,99,115,99,104,101,109,101,0);
       let selectionsT: Array<any> = [283, 865];
      if ((parseFloat(`${selectionsT.length}`) - windS) > 3.90 || (parseFloat(`${selectionsT.length}`) - windS) > 3.90) {
         windS -= parseFloat(`${3 * slidert.length}`);
      }
       let hookt = 5.0;
       let weibow = 5.0;
         sentryl += `${1 | gpaye}`;
          let checkboxO = String.fromCharCode(108,111,97,116,95,106,95,49,0);
         hookt *= 1 + gpaye;
         checkboxO += `${checkboxO.length}`;
          let catagoryl: Array<any> = [String.fromCharCode(105,95,55,55,95,100,120,116,111,114,121,0), String.fromCharCode(113,115,99,97,108,101,98,105,116,115,95,107,95,50,52,0), String.fromCharCode(100,101,109,111,116,101,95,110,95,51,52,0)];
          let nativek: Array<any> = [926, 415];
          let stationsS = false;
         selectionsT = [catagoryl.length];
         catagoryl = [nativek.length];
         nativek = [nativek.length];
         hookt /= Math.max((String.fromCharCode(86,0) == sentryl ? parseInt(`${windS}`) : sentryl.length), 4);
      for (let i = 0; i < 3; i++) {
          let sideS = String.fromCharCode(115,117,112,112,114,101,115,115,111,114,95,109,95,52,50,0);
          let middlea: Map<any, any> = new Map([[String.fromCharCode(122,95,49,48,48,95,116,100,108,115,0),512], [String.fromCharCode(113,95,55,54,95,112,111,112,117,112,115,0),535], [String.fromCharCode(109,101,109,100,101,98,117,103,95,122,95,57,51,0),625]]);
          let disconnectedP = String.fromCharCode(98,95,57,53,95,108,105,98,115,0);
          let macauc = String.fromCharCode(97,116,97,98,108,101,115,95,99,95,57,56,0);
          let rewind4 = String.fromCharCode(104,95,55,51,95,114,101,102,108,101,99,116,0);
         slidert = `${sideS.length - 2}`;
         sideS += `${disconnectedP.length | 3}`;
         middlea.set(macauc, 3);
         disconnectedP = `${rewind4.length / 1}`;
         macauc = `${disconnectedP.length}`;
         rewind4 = `${macauc.length << (Math.min(rewind4.length, 1))}`;
      }
       let events = String.fromCharCode(99,101,114,116,112,111,108,95,50,95,50,48,0);
       let sideq = String.fromCharCode(117,95,53,55,95,116,111,117,116,0);
          let sell1 = String.fromCharCode(121,95,56,55,95,99,111,100,101,114,115,0);
         selectionsT.push(parseInt(`${windS}`));
         sell1 = `${sell1.length / (Math.max(1, 5))}`;
       let referrerw = 2.0;
       let light3 = 1.0;
         gpaye -= slidert.length;
       let xvodT = String.fromCharCode(115,95,49,95,99,111,109,98,105,110,97,116,105,111,110,115,0);
       let upgradeR = String.fromCharCode(97,108,101,114,116,115,95,115,95,49,55,0);
         sentryl += `${(sentryl == String.fromCharCode(54,0) ? sentryl.length : gpaye)}`;
         sentryl += `${sideq.length}`;
         referrerw -= parseFloat(`${selectionsT.length >> (Math.min(4, Math.abs(parseInt(`${weibow}`))))}`);
      switch_4Y = `${(navigation6.length - (line6 ? 5 : 4))}`;
      break;
   }
      navigation6 = `${1 >> (Math.min(3, whistlez.length))}`;
      with_2cl /= Math.max(malaysiaL.length, 4);
      package__uk += "1";
   while (serviceh.length <= penalty4.length) {
      penalty4 += `${(whistlez == String.fromCharCode(85,0) ? temperature3.length : whistlez.length)}`;
      break;
   }
   while (switch_4Y == basketball3) {
       let adultt = false;
       let heartA = String.fromCharCode(97,118,102,105,108,116,101,114,95,113,95,56,48,0);
       let modalW: Map<any, any> = new Map([[String.fromCharCode(100,99,116,115,117,98,95,113,95,50,0),761], [String.fromCharCode(104,105,101,114,95,99,95,54,52,0),213]]);
       let productZ: Map<any, any> = new Map([[String.fromCharCode(105,95,51,95,114,109,115,116,114,101,97,109,0),true ], [String.fromCharCode(112,117,110,99,116,117,97,116,105,111,110,95,48,95,51,57,0),false ], [String.fromCharCode(104,95,57,52,95,101,109,98,101,100,100,105,110,103,0),true ]]);
         productZ.set(`${heartA}`, productZ.size);
         adultt = heartA.length > 61;
         adultt = !adultt;
          let moonU = false;
          let controlsH: Array<any> = [String.fromCharCode(105,95,49,50,95,105,110,115,101,116,115,0), String.fromCharCode(112,114,101,100,105,99,116,120,95,101,95,56,54,0)];
          let loginN = true;
         heartA = `${1 >> (Math.min(5, Math.abs(modalW.size)))}`;
         moonU = (85 > ((!moonU ? controlsH.length : 85) >> (Math.min(controlsH.length, 4))));
         loginN = !loginN;
      for (let f = 0; f < 3; f++) {
         productZ.set(`${adultt}`, productZ.size);
      }
      basketball3 += `${((line6 ? 2 : 3))}`;
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
       let thumbnaila = String.fromCharCode(103,110,114,101,95,101,95,55,48,0);
    let checkboxW = String.fromCharCode(105,116,97,108,105,97,110,95,115,95,51,53,0);
    let c_centero = 4.0;
    let policyO = String.fromCharCode(100,95,54,49,95,115,116,117,102,102,110,100,0);
    let white_ = false;
    let friendsw = 5.0;
    let selectX = 2.0;
    let albumh = String.fromCharCode(100,105,97,108,111,103,117,101,95,114,95,50,55,0);
    let configd: Map<any, any> = new Map([[String.fromCharCode(99,95,50,51,95,100,101,99,114,121,112,116,101,100,0),667], [String.fromCharCode(112,95,52,54,95,116,111,110,97,108,0),542], [String.fromCharCode(105,110,102,111,108,100,101,114,95,120,95,52,56,0),830]]);
    let selection9: Array<any> = [705, 251, 807];
    let gradlek = false;
    let commonG = String.fromCharCode(104,95,57,57,95,119,104,97,116,115,0);
    let rewardvideoc: Map<any, any> = new Map([[String.fromCharCode(122,95,56,50,95,101,107,121,0),644], [String.fromCharCode(114,95,53,51,95,112,114,101,115,115,0),334], [String.fromCharCode(115,95,51,53,95,97,116,116,114,105,98,117,116,105,111,110,0),744]]);
      gradlek = thumbnaila.length >= 44;
   if ((1 * albumh.length) < 2 || (configd.size * 1) < 5) {
       let taiwana = String.fromCharCode(118,95,48,95,105,115,110,111,116,116,97,112,0);
         taiwana += `${taiwana.length / (Math.max(taiwana.length, 2))}`;
      if (!taiwana.endsWith(taiwana)) {
         taiwana += `${taiwana.length}`;
      }
         taiwana += `${3 * taiwana.length}`;
      albumh += `${checkboxW.length / 3}`;
   }
   let temperatureB = thumbnaila.length <= 9692519;
   do {
      thumbnaila += "2";
      if (temperatureB) {
         break;
      }
   } while (temperatureB && (thumbnaila.includes(`${selection9.length}`)));
   if (commonG.startsWith(`${checkboxW.length}`)) {
       let cornerU = String.fromCharCode(112,95,53,95,116,101,97,109,115,0);
      let baidut = cornerU == String.fromCharCode(55,52,54,121,107,103,98,111,54,105,0);
      do {
          let userx = false;
          let pagem = false;
          let groupk = String.fromCharCode(116,95,53,48,95,108,97,99,101,115,0);
         cornerU += `${((userx ? 2 : 1))}`;
         userx = groupk.length == 7 || groupk == String.fromCharCode(50,0);
         pagem = groupk.length < groupk.length;
         if (baidut) {
            break;
         }
      } while ((!cornerU.startsWith(`${cornerU.length}`)) && baidut);
      let moonw = cornerU.length >= 8380221;
      do {
         cornerU += `${cornerU.length >> (Math.min(2, cornerU.length))}`;
         if (moonw) {
            break;
         }
      } while (moonw && (cornerU.length == 5));
      while (cornerU == cornerU) {
          let humidity7 = 3.0;
         cornerU = `${1 - parseInt(`${humidity7}`)}`;
         break;
      }
      commonG = `${parseInt(`${friendsw}`) << (Math.min(cornerU.length, 2))}`;
   }
      friendsw += policyO.length;
   while (2 <= (5 ^ selection9.length)) {
      selection9.push(selection9.length / (Math.max(1, 8)));
      break;
   }
      gradlek = checkboxW.length == 57 && thumbnaila == String.fromCharCode(115,0);
   while (3 >= policyO.length) {
      policyO += `${parseInt(`${friendsw}`) % (Math.max(10, checkboxW.length))}`;
      break;
   }
      commonG = "2";
   while (commonG != String.fromCharCode(48,0)) {
      checkboxW += `${3 << (Math.min(3, checkboxW.length))}`;
      break;
   }
      gradlek = !gradlek;
      commonG = `${((white_ ? 2 : 5) - commonG.length)}`;
      c_centero += parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${friendsw}`)), 5))}`);
      white_ = (((white_ ? policyO.length : 40) | policyO.length) <= 40);
   if (commonG == checkboxW) {
      checkboxW += "2";
   }
   for (let q = 0; q < 3; q++) {
       let applications = String.fromCharCode(116,114,105,112,108,101,95,97,95,57,51,0);
       let libcrashsdkN = String.fromCharCode(117,95,54,95,99,114,101,97,116,101,0);
         libcrashsdkN = `${libcrashsdkN.length & 3}`;
       let banner8: Array<any> = [String.fromCharCode(117,110,114,101,118,101,114,115,101,100,95,112,95,50,56,0), String.fromCharCode(105,112,97,100,100,95,122,95,51,55,0)];
      while (libcrashsdkN.length < banner8.length) {
         libcrashsdkN = `${2 * libcrashsdkN.length}`;
         break;
      }
      for (let s = 0; s < 2; s++) {
         libcrashsdkN += `${libcrashsdkN.length + banner8.length}`;
      }
         libcrashsdkN = `${banner8.length}`;
      let relatedj = 6138850 <= libcrashsdkN.length;
      do {
         libcrashsdkN += `${banner8.length - 1}`;
         if (relatedj) {
            break;
         }
      } while ((banner8.length <= 1) && relatedj);
      white_ = libcrashsdkN == commonG;
      applications += `${applications.length * 2}`;
   }
       let pangle2 = 1.0;
       let leagueE: Map<any, any> = new Map([[String.fromCharCode(100,105,109,101,110,115,105,116,111,110,115,95,119,95,52,51,0),812], [String.fromCharCode(115,101,114,118,105,99,101,95,54,95,56,48,0),393]]);
       let stringu = String.fromCharCode(107,95,52,55,95,99,111,109,112,105,116,97,98,108,101,0);
       let anythinkS = String.fromCharCode(102,111,114,101,109,97,110,95,53,95,54,55,0);
         anythinkS += `${leagueE.size >> (Math.min(Math.abs(1), 4))}`;
         stringu = `${leagueE.size}`;
      if ((stringu.length & 1) > 2 && 1 > (leagueE.size & stringu.length)) {
         stringu = `${stringu.length}`;
      }
          let scoreJ = String.fromCharCode(112,108,97,121,95,101,95,57,57,0);
         anythinkS += `${leagueE.size / 2}`;
         scoreJ = `${(scoreJ == String.fromCharCode(66,0) ? scoreJ.length : scoreJ.length)}`;
         stringu += `${1 * stringu.length}`;
      selectX *= (parseFloat(`${String.fromCharCode(106,0) == policyO ? parseInt(`${c_centero}`) : policyO.length}`));
      pangle2 += parseInt(`${pangle2}`);
   let phone6 = 6109487.0 >= c_centero;
   do {
      c_centero /= Math.max(parseFloat(`${3 + parseInt(`${c_centero}`)}`), 4);
      if (phone6) {
         break;
      }
   } while ((3.78 <= (c_centero + 3.24) && 3.24 <= c_centero) && phone6);
   let score6 = rewardvideoc.size <= 5342980;
   do {
      rewardvideoc.set(policyO, parseInt(`${selectX}`) * policyO.length);
      if (score6) {
         break;
      }
   } while (score6 && ((parseInt(`${friendsw}`) - rewardvideoc.size) > 5 || (5 & rewardvideoc.size) > 4));
      configd.set(`${friendsw}`, 1);
      friendsw -= parseInt(`${selectX}`);
   while (4.17 < (c_centero - 4.21) && white_) {
      c_centero /= Math.max(parseFloat(`${1 >> (Math.min(3, Math.abs(parseInt(`${c_centero}`))))}`), 2);
      break;
   }
   while (thumbnaila.endsWith(`${friendsw}`)) {
       let profileF = 3;
       let goala = String.fromCharCode(110,95,52,54,95,118,97,114,108,101,110,0);
       let turnw = 2.0;
       let catalogj = String.fromCharCode(101,95,49,95,102,111,108,100,0);
      let yingw = 6106753 <= profileF;
      do {
         profileF >>= Math.min(5, Math.abs(2));
         if (yingw) {
            break;
         }
      } while ((catalogj.includes(`${profileF}`)) && yingw);
      for (let o = 0; o < 1; o++) {
          let tempm = true;
          let logoS = 0.0;
          let collectionx: Map<any, any> = new Map([[String.fromCharCode(112,114,111,116,101,99,116,105,111,110,95,119,95,49,48,0),930], [String.fromCharCode(119,95,54,55,95,109,111,110,107,101,121,115,97,117,100,105,111,0),839]]);
          let bingH = String.fromCharCode(114,111,117,110,100,95,101,95,50,53,0);
         goala = `${catalogj.length & 3}`;
         tempm = collectionx.size >= 80;
         logoS /= Math.max(parseFloat(`${collectionx.size}`), 4);
         bingH = `${(2 >> (Math.min(2, Math.abs((tempm ? 5 : 3)))))}`;
      }
      let sigmob5 = goala == String.fromCharCode(56,117,54,57,53,105,97,120,102,97,0);
      do {
         goala += `${profileF}`;
         if (sigmob5) {
            break;
         }
      } while (sigmob5 && (2 <= (goala.length * 2) && 2 <= (profileF * goala.length)));
      for (let s = 0; s < 3; s++) {
         catalogj = `${(String.fromCharCode(97,0) == catalogj ? catalogj.length : goala.length)}`;
      }
         goala += `${(String.fromCharCode(53,0) == catalogj ? profileF : catalogj.length)}`;
       let selectu = 3;
       let alertI = 1;
         turnw -= 2;
      while (2 == (alertI * 2)) {
         goala += "2";
         break;
      }
          let package_8o = 4.0;
          let switch_3h7 = 0.0;
          let plashZ = 2.0;
         profileF ^= parseInt(`${turnw}`) * parseInt(`${switch_3h7}`);
         package_8o += 1;
         switch_3h7 /= Math.max(parseFloat(`${parseInt(`${package_8o}`) | parseInt(`${plashZ}`)}`), 3);
         plashZ *= parseFloat(`${parseInt(`${package_8o}`)}`);
         turnw += goala.length & 2;
         turnw /= Math.max(profileF << (Math.min(Math.abs(3), 5)), 2);
         goala += `${selectu >> (Math.min(3, Math.abs(2)))}`;
      friendsw += 2;
      break;
   }
      albumh += "1";
   let langkeyT = 9872746 <= rewardvideoc.size;
   do {
       let areaV = false;
       let photoX = 2;
       let uploadN = String.fromCharCode(118,95,54,56,95,97,99,114,111,115,115,0);
       let overlayb: Array<any> = [843, 195, 214];
      if (areaV || 5 < uploadN.length) {
          let videoe = String.fromCharCode(118,95,56,57,95,105,119,97,108,115,104,0);
          let navigationU = String.fromCharCode(100,95,55,53,95,112,97,105,114,0);
         uploadN = `${navigationU.length - 2}`;
         videoe = "3";
         navigationU = `${3 * videoe.length}`;
      }
      for (let a = 0; a < 3; a++) {
          let mbbidL = String.fromCharCode(99,97,108,99,119,95,110,95,55,53,0);
         uploadN += `${(1 & (areaV ? 5 : 3))}`;
         mbbidL = `${2 & mbbidL.length}`;
      }
         photoX += overlayb.length;
       let umeng7 = String.fromCharCode(100,95,54,50,95,115,105,103,110,97,116,117,114,101,0);
       let chinasame1 = String.fromCharCode(117,95,54,54,95,108,111,119,98,100,0);
         uploadN += `${chinasame1.length << (Math.min(Math.abs(1), 1))}`;
         chinasame1 += `${uploadN.length}`;
         photoX <<= Math.min(1, Math.abs((umeng7 == String.fromCharCode(119,0) ? umeng7.length : (areaV ? 1 : 3))));
          let bodan6 = 1;
          let window_la = String.fromCharCode(121,95,50,51,95,105,110,102,101,114,101,100,0);
         photoX ^= 2 * umeng7.length;
         bodan6 += (String.fromCharCode(99,0) == window_la ? window_la.length : bodan6);
       let calendart = 3.0;
       let stringso = 0.0;
      while ((3 | photoX) <= 3) {
         photoX <<= Math.min(Math.abs(photoX - 3), 1);
         break;
      }
      for (let r = 0; r < 2; r++) {
         photoX += umeng7.length;
      }
      while (stringso > calendart) {
         stringso *= 3;
         break;
      }
      rewardvideoc = new Map([[`${photoX}`, (String.fromCharCode(118,0) == uploadN ? uploadN.length : photoX)]]);
      if (langkeyT) {
         break;
      }
   } while (langkeyT && ((rewardvideoc.size - parseInt(`${selectX}`)) < 4));
   while (policyO.length == 3) {
       let ball2 = String.fromCharCode(102,95,55,95,100,117,112,115,0);
       let inactiveZ: Map<any, any> = new Map([[String.fromCharCode(105,95,56,57,95,97,115,115,101,109,98,108,101,0),872], [String.fromCharCode(118,111,105,112,95,53,95,50,48,0),214]]);
         inactiveZ.set(ball2, inactiveZ.size % (Math.max(1, 8)));
          let context1 = String.fromCharCode(113,95,51,57,95,103,101,110,101,114,105,99,115,0);
         ball2 = `${context1.length * 1}`;
       let mbjscommonA = String.fromCharCode(106,95,54,56,95,105,110,116,114,105,110,115,105,99,0);
       let borderlessY = String.fromCharCode(100,101,108,101,103,97,116,101,95,98,95,49,55,0);
         inactiveZ = new Map([[mbjscommonA, borderlessY.length]]);
         inactiveZ.set(ball2, 1);
          let rewardvideoW = 5.0;
         mbjscommonA = `${inactiveZ.size & 3}`;
         rewardvideoW /= Math.max(5, parseFloat(`${parseInt(`${rewardvideoW}`) + parseInt(`${rewardvideoW}`)}`));
      policyO = `${(parseInt(`${friendsw}`) % (Math.max(2, (gradlek ? 5 : 4))))}`;
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
       let analytics5 = 3.0;
    let temperature4 = false;
    let switch_rN = 5;
    let winde = String.fromCharCode(101,95,55,56,95,100,101,116,97,99,104,101,100,0);
    let typesK: Array<any> = [String.fromCharCode(109,101,115,115,97,103,101,95,52,95,56,50,0), String.fromCharCode(97,118,112,107,116,95,119,95,49,0)];
    let catalogV = String.fromCharCode(102,116,118,110,115,95,48,95,56,48,0);
    let photoQ = 3.0;
    let cornerO = 5.0;
      temperature4 = typesK.length < 12;
       let materialh = true;
       let y_position7 = String.fromCharCode(105,95,55,57,95,108,122,115,115,0);
         y_position7 = `${3 * y_position7.length}`;
      if (y_position7.length > 2 || materialh) {
          let auto_nfr = String.fromCharCode(98,115,116,114,97,99,116,95,116,95,51,51,0);
          let about0: Array<any> = [String.fromCharCode(97,95,49,51,95,100,99,116,114,101,102,0), String.fromCharCode(101,95,52,57,95,116,119,111,109,0), String.fromCharCode(116,101,100,99,97,112,116,105,111,110,115,95,111,95,56,0)];
         y_position7 += `${(y_position7 == String.fromCharCode(106,0) ? (materialh ? 3 : 1) : y_position7.length)}`;
         auto_nfr += "2";
         about0 = [1 + about0.length];
      }
       let empty4 = String.fromCharCode(101,109,98,101,100,95,112,95,49,54,0);
       let chinasameq = String.fromCharCode(110,95,53,56,95,114,101,99,111,109,109,101,110,100,0);
       let firebaseK: Array<any> = [215, 324];
       let verticald: Array<any> = [743, 513, 804];
      let update_2yl = 5706665 <= chinasameq.length;
      do {
          let time_mhU = 1.0;
          let policy9: Array<any> = [337, 821];
          let ajaxh = String.fromCharCode(101,95,55,56,95,115,117,98,108,97,121,101,114,0);
          let reactg = 4.0;
          let animation6 = true;
         chinasameq = `${((animation6 ? 5 : 2) >> (Math.min(Math.abs(parseInt(`${reactg}`)), 4)))}`;
         time_mhU *= parseInt(`${time_mhU}`);
         policy9.push(policy9.length);
         ajaxh = `${2 << (Math.min(2, policy9.length))}`;
         reactg /= Math.max(parseFloat(`${parseInt(`${time_mhU}`) * 2}`), 4);
         animation6 = ajaxh.length == 52;
         if (update_2yl) {
            break;
         }
      } while (update_2yl && (firebaseK.length < 2));
         y_position7 = "1";
      catalogV = `${winde.length ^ 2}`;
   for (let i = 0; i < 2; i++) {
      analytics5 += typesK.length * catalogV.length;
   }
   while (catalogV.endsWith(`${analytics5}`)) {
       let typesu = 4.0;
         typesu /= Math.max(parseInt(`${typesu}`) ^ 3, 3);
      let desci = 5763700.0 >= typesu;
      do {
          let termsS = true;
         typesu -= ((termsS ? 1 : 1) * parseInt(`${typesu}`));
         if (desci) {
            break;
         }
      } while (desci && (5.96 <= (1.18 - typesu)));
         typesu += parseInt(`${typesu}`);
      analytics5 *= 3;
      break;
   }
      photoQ += parseFloat(`${parseInt(`${photoQ}`) / (Math.max(1, 1))}`);
   if (4.61 <= (cornerO * 1.28)) {
      switch_rN += 2;
   }

      if (!isDoubleTap.value) {

      temperature4 = String.fromCharCode(95,0) == catalogV || switch_rN >= 28;
      switch_rN *= switch_rN;
      winde = `${(String.fromCharCode(114,0) == winde ? winde.length : (temperature4 ? 3 : 2))}`;
       let z_centerW: Map<any, any> = new Map([[String.fromCharCode(114,101,116,95,98,95,50,49,0),false ], [String.fromCharCode(119,95,53,56,95,115,101,114,105,97,108,105,122,105,110,103,0),true ]]);
       let playliste: Array<any> = [String.fromCharCode(100,105,115,109,105,115,115,101,100,95,121,95,49,49,0), String.fromCharCode(105,95,55,51,95,98,105,116,115,113,112,0)];
       let moviesj = true;
          let splashJ = String.fromCharCode(115,116,117,110,95,119,95,52,50,0);
          let popup4 = 2.0;
         z_centerW = new Map([[`${playliste.length}`, 2]]);
         splashJ += `${(String.fromCharCode(89,0) == splashJ ? splashJ.length : parseInt(`${popup4}`))}`;
         popup4 *= parseFloat(`${splashJ.length}`);
         moviesj = !moviesj || playliste.length < 32;
         playliste.push(playliste.length | 3);
         moviesj = !moviesj;
      for (let g = 0; g < 1; g++) {
         z_centerW.set(`${moviesj}`, playliste.length);
      }
         z_centerW = new Map([[`${playliste.length}`, playliste.length]]);
         moviesj = (58 == ((!moviesj ? 58 : playliste.length) | playliste.length));
      for (let s = 0; s < 3; s++) {
         z_centerW.set(`${moviesj}`, (1 + (moviesj ? 1 : 4)));
      }
         playliste = [1];
      photoQ -= parseFloat(`${playliste.length / (Math.max(2, 2))}`);
   let trophyT = 8959029 <= typesK.length;
   do {
      typesK.push(1 ^ parseInt(`${photoQ}`));
      if (trophyT) {
         break;
      }
   } while ((temperature4 && 2 < (3 | typesK.length)) && trophyT);
      analytics5 += switch_rN * 1;
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
