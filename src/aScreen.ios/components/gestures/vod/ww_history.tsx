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
       let overlayc = String.fromCharCode(102,95,57,56,95,98,105,114,116,104,100,97,121,0);
    let typesV: Array<any> = [507, 77];
    let module_ = String.fromCharCode(115,95,49,95,112,114,105,109,97,114,105,108,121,0);
    let scheduleri: Array<any> = [693, 895, 271];
    let trophyj = String.fromCharCode(106,115,105,109,100,99,102,103,95,52,95,53,48,0);
    let iconmoreb = 5.0;
    let bottomx = String.fromCharCode(107,95,49,52,95,107,101,121,105,100,0);
    let k_lockU: Map<any, any> = new Map([[String.fromCharCode(99,114,108,115,95,56,95,49,51,0),false ], [String.fromCharCode(107,101,101,112,97,108,105,118,101,95,107,95,57,48,0),true ], [String.fromCharCode(109,95,50,54,0),true ]]);
    let greyarrowupp: Map<any, any> = new Map([[String.fromCharCode(114,95,56,51,95,116,101,115,115,101,108,97,116,111,114,0),1000], [String.fromCharCode(99,95,57,52,95,119,100,108,102,99,110,0),848], [String.fromCharCode(114,95,52,57,95,99,117,101,115,0),467]]);
    let o_viewJ = 1.0;
    let activity3: Array<any> = [838, 838];
    let descm = String.fromCharCode(106,115,105,109,100,101,120,116,95,117,95,55,49,0);
    let fast_ = 5.0;
    let defaultlogok: Map<any, any> = new Map([[String.fromCharCode(107,95,57,52,95,119,111,114,100,115,0),80], [String.fromCharCode(120,95,56,50,0),443]]);
    let hongkongi = String.fromCharCode(115,105,110,117,115,111,105,100,97,108,95,55,95,51,0);
    let bottomr = String.fromCharCode(116,95,57,52,95,102,97,99,116,111,114,121,0);
    let giflivestreamingD = 4.0;
   for (let w = 0; w < 1; w++) {
      iconmoreb -= 3;
   }
   let eighteenT = 8073172 >= bottomx.length;
   do {
       let championw = 0.0;
       let combine5: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,111,114,105,122,101,95,112,95,51,57,0),57], [String.fromCharCode(107,95,55,55,95,97,118,101,114,114,111,114,0),185]]);
       let listZ = 5.0;
       let eighteenm = false;
       let placementB = 5;
         eighteenm = championw <= 50.60;
      for (let w = 0; w < 1; w++) {
          let bufferJ = false;
         eighteenm = championw < 54.99 || !eighteenm;
         bufferJ = (bufferJ ? !bufferJ : !bufferJ);
      }
       let downloadingP = String.fromCharCode(115,111,98,101,108,95,107,95,52,0);
         eighteenm = !eighteenm && downloadingP.length > 46;
          let leakcheckerP = 1.0;
          let rightb = false;
         combine5.set(`${placementB}`, (String.fromCharCode(87,0) == downloadingP ? downloadingP.length : placementB));
         leakcheckerP *= parseInt(`${leakcheckerP}`) % 1;
         rightb = !rightb;
      if (2 == downloadingP.length) {
         downloadingP = `${(String.fromCharCode(68,0) == downloadingP ? placementB : downloadingP.length)}`;
      }
       let control9 = 3;
       let loginsuccessE = 2;
      if (!eighteenm) {
          let checkboxL = String.fromCharCode(121,95,54,49,95,115,116,114,105,112,112,101,100,0);
          let rankU = 2.0;
          let specd = false;
          let bottomt = String.fromCharCode(115,95,57,54,95,99,116,114,108,0);
         eighteenm = String.fromCharCode(113,0) == bottomt;
         checkboxL = "2";
         rankU *= parseFloat(`${parseInt(`${rankU}`) - 3}`);
         specd = 7.58 > rankU && !specd;
         bottomt += "1";
      }
      while (5 >= loginsuccessE) {
         control9 /= Math.max(5, downloadingP.length);
         break;
      }
       let bingZ = String.fromCharCode(115,116,114,111,107,101,115,95,55,95,50,56,0);
       let current0 = String.fromCharCode(99,111,110,118,101,114,116,95,53,95,52,0);
         placementB %= Math.max(2, current0.length);
         loginsuccessE |= bingZ.length;
         combine5 = new Map([[`${listZ}`, bingZ.length]]);
      if (!current0.endsWith(`${championw}`)) {
         championw /= Math.max(2, parseFloat(`${loginsuccessE + 3}`));
      }
       let sansI = 1.0;
       let activityf = 1.0;
      bottomx += `${3 & parseInt(`${o_viewJ}`)}`;
      if (eighteenT) {
         break;
      }
   } while (eighteenT && (!bottomx.startsWith(`${scheduleri.length}`)));
   while (4 == trophyj.length) {
      iconmoreb += 1 | overlayc.length;
      break;
   }
   if (module_.length < iconmoreb) {
      module_ += `${bottomx.length}`;
   }
   let disconnectedlogoZ = String.fromCharCode(95,118,49,98,113,100,0) == trophyj;
   do {
      trophyj = `${k_lockU.size}`;
      if (disconnectedlogoZ) {
         break;
      }
   } while (disconnectedlogoZ && (!trophyj.startsWith(`${greyarrowupp.size}`)));
       let green5 = 5.0;
       let componentsV = String.fromCharCode(111,95,50,95,105,110,99,114,101,97,115,105,110,103,0);
       let k_playert = String.fromCharCode(113,95,53,55,95,115,105,103,102,105,103,0);
      let bodanh = componentsV.length <= 9119942;
      do {
          let reducerB: Array<any> = [87, 687];
          let arrowright6: Array<any> = [311, 305, 439];
          let predictionwing = 3;
         componentsV += `${(k_playert == String.fromCharCode(122,0) ? arrowright6.length : k_playert.length)}`;
         reducerB = [2 << (Math.min(2, reducerB.length))];
         arrowright6.push(predictionwing);
         predictionwing -= reducerB.length / (Math.max(2, 7));
         if (bodanh) {
            break;
         }
      } while ((!componentsV.endsWith(`${green5}`)) && bodanh);
         componentsV += `${k_playert.length >> (Math.min(5, componentsV.length))}`;
          let footballfieldA = String.fromCharCode(104,117,102,102,121,117,118,101,110,99,100,115,112,95,102,95,56,51,0);
         green5 *= (parseFloat(`${footballfieldA == String.fromCharCode(122,0) ? footballfieldA.length : k_playert.length}`));
          let backG = String.fromCharCode(115,95,50,52,95,99,104,115,99,97,108,101,0);
         green5 += parseFloat(`${k_playert.length}`);
         backG = `${backG.length}`;
         k_playert = `${componentsV.length | k_playert.length}`;
       let material9 = false;
          let inouttargetredA = 4.0;
         green5 += (parseFloat(`${parseInt(`${inouttargetredA}`) & (material9 ? 2 : 1)}`));
          let executorX = String.fromCharCode(116,114,101,108,108,105,115,95,55,95,53,48,0);
          let chart3: Array<any> = [776, 329, 638];
          let desc7 = 1;
         componentsV += `${(k_playert == String.fromCharCode(51,0) ? k_playert.length : desc7)}`;
         executorX = `${executorX.length}`;
         chart3 = [chart3.length];
         desc7 += 3;
      for (let d = 0; d < 1; d++) {
         material9 = k_playert.includes(`${material9}`);
      }
      typesV.push(1 + module_.length);
      bottomx += `${k_lockU.size}`;
      bottomx = `${trophyj.length}`;
   if (2 > bottomx.length) {
      o_viewJ /= Math.max(parseFloat(`${3}`), 5);
   }

    setShowSlider(true);

       let modulesE: Array<any> = [465, 725];
       let event3: Array<any> = [546, 612, 311];
       let singleW: Array<any> = [String.fromCharCode(111,95,51,51,95,119,101,98,109,100,101,99,0), String.fromCharCode(100,95,54,52,95,100,105,115,112,108,97,121,0), String.fromCharCode(121,95,49,48,95,100,111,99,115,0)];
         event3 = [3];
      while (2 >= (event3.length * modulesE.length) || (2 * event3.length) >= 2) {
          let shirtR = String.fromCharCode(118,95,54,48,95,97,97,99,115,98,114,100,97,116,97,0);
          let entryY: Array<any> = [93, 414, 383];
          let stats1 = 2.0;
         event3 = [1 << (Math.min(2, entryY.length))];
         shirtR += `${shirtR.length}`;
         entryY = [parseInt(`${stats1}`)];
         stats1 *= shirtR.length + parseInt(`${stats1}`);
         break;
      }
          let armvaI: Array<any> = [String.fromCharCode(115,116,114,105,100,95,122,95,49,0), String.fromCharCode(100,95,51,56,95,112,107,116,99,112,121,0), String.fromCharCode(109,107,118,119,114,105,116,101,114,95,49,95,53,50,0)];
          let backL = 2.0;
         event3.push(2 >> (Math.min(3, armvaI.length)));
         armvaI = [parseInt(`${backL}`)];
      while ((5 << (Math.min(2, event3.length))) < 5 && (singleW.length << (Math.min(event3.length, 1))) < 5) {
         singleW = [event3.length];
         break;
      }
         event3.push(event3.length * 1);
      while (singleW.includes(event3.length)) {
          let playercommonv = true;
          let iconsettingP = 0;
         event3 = [((playercommonv ? 3 : 1) | event3.length)];
         playercommonv = iconsettingP == iconsettingP;
         break;
      }
       let appleD = String.fromCharCode(117,95,55,51,95,115,117,112,112,111,114,116,101,100,0);
       let downloader6 = String.fromCharCode(98,95,52,48,95,114,101,109,111,118,101,103,114,97,105,110,0);
      if (!appleD.startsWith(`${modulesE.length}`)) {
          let targetu: Map<any, any> = new Map([[String.fromCharCode(110,95,50,56,95,100,117,112,115,111,114,116,0),false ], [String.fromCharCode(97,99,100,99,95,118,95,56,52,0),true ]]);
         appleD = `${event3.length & singleW.length}`;
         targetu = new Map([[`${targetu.size}`, 1 & targetu.size]]);
      }
       let greyV = true;
       let greytickq = false;
      trophyj = `${3 | typesV.length}`;
      k_lockU.set(`${o_viewJ}`, parseInt(`${o_viewJ}`));
       let home0 = String.fromCharCode(122,95,51,57,95,99,97,114,114,121,0);
       let mountingK = 2.0;
       let tumbnailw = String.fromCharCode(114,101,99,111,103,110,105,122,101,100,95,48,95,53,48,0);
      let profileactiveb = String.fromCharCode(119,116,104,0) == tumbnailw;
      do {
         tumbnailw = `${1 % (Math.max(10, tumbnailw.length))}`;
         if (profileactiveb) {
            break;
         }
      } while (profileactiveb && (home0 == String.fromCharCode(107,0) && tumbnailw.length <= 2));
      if (3.30 >= (mountingK * 4.94) && (parseFloat(`${tumbnailw.length}`) * mountingK) >= 4.94) {
         mountingK -= parseFloat(`${parseInt(`${mountingK}`) | 3}`);
      }
      while (3 >= (4 / (Math.max(2, tumbnailw.length)))) {
          let utilsI = false;
          let plusb: Map<any, any> = new Map([[String.fromCharCode(121,95,54,53,95,108,105,98,97,118,100,101,118,105,99,101,0),490], [String.fromCharCode(121,95,52,54,95,102,114,97,103,109,101,110,116,115,0),514]]);
          let stringz = 2;
          let iconclosewhitebgU = String.fromCharCode(122,95,55,50,95,108,97,98,101,108,110,115,0);
         tumbnailw += `${(stringz >> (Math.min(3, Math.abs((utilsI ? 3 : 2)))))}`;
         utilsI = 15 <= plusb.size || iconclosewhitebgU.length <= 15;
         plusb = new Map([[`${plusb.size}`, iconclosewhitebgU.length]]);
         stringz &= plusb.size;
         break;
      }
      if (tumbnailw.startsWith(`${mountingK}`)) {
          let iconbellactivez = 4;
          let humidity0 = 5;
          let areai: Array<any> = [214, 396, 957];
          let downloadk = String.fromCharCode(100,105,115,115,105,109,105,108,97,114,105,116,121,95,104,95,50,55,0);
         mountingK += parseFloat(`${2}`);
         iconbellactivez ^= iconbellactivez | areai.length;
         humidity0 |= iconbellactivez ^ downloadk.length;
         areai = [humidity0 >> (Math.min(2, Math.abs(2)))];
         downloadk += `${downloadk.length / 2}`;
      }
          let countryy = String.fromCharCode(121,95,56,48,95,112,114,111,103,114,101,115,115,101,115,0);
          let mbridge4 = String.fromCharCode(102,97,114,95,100,95,50,0);
         mountingK /= Math.max(parseFloat(`${1 + tumbnailw.length}`), 3);
         countryy += `${countryy.length / (Math.max(mbridge4.length, 1))}`;
         mbridge4 += `${mbridge4.length}`;
      for (let i = 0; i < 1; i++) {
         mountingK *= parseFloat(`${tumbnailw.length / 1}`);
      }
       let valuesS = 1;
      if ((4.32 * mountingK) < 5.75 && 2.13 < (4.32 * mountingK)) {
         mountingK /= Math.max((parseFloat(`${tumbnailw == String.fromCharCode(78,0) ? valuesS : tumbnailw.length}`)), 4);
      }
         home0 += `${tumbnailw.length & 2}`;
      module_ += `${2 * greyarrowupp.size}`;
      overlayc = "1";
   if (3 <= (4 & trophyj.length) && (k_lockU.size & trophyj.length) <= 4) {
      trophyj = "3";
   }
   while (fast_ < 3.77) {
      fast_ -= descm.length;
      break;
   }
       let containerz = 4.0;
         containerz -= parseFloat(`${1}`);
         containerz -= parseFloat(`${parseInt(`${containerz}`) + parseInt(`${containerz}`)}`);
         containerz += parseFloat(`${parseInt(`${containerz}`) << (Math.min(Math.abs(parseInt(`${containerz}`)), 2))}`);
      fast_ += 2 | k_lockU.size;
   for (let r = 0; r < 3; r++) {
       let iconeditk = 3.0;
       let corners = String.fromCharCode(100,105,115,115,111,108,118,101,95,109,95,49,52,0);
       let sheetw: Map<any, any> = new Map([[String.fromCharCode(114,95,53,49,95,97,115,115,111,99,105,97,116,105,111,110,0),127], [String.fromCharCode(97,115,115,101,109,98,108,101,114,95,114,95,54,48,0),149], [String.fromCharCode(109,102,104,100,95,113,95,56,51,0),532]]);
       let register_f_k: Array<any> = [870, 852];
      for (let a = 0; a < 2; a++) {
          let sortx: Map<any, any> = new Map([[String.fromCharCode(112,114,101,116,119,105,100,100,108,101,95,51,95,49,50,0),String.fromCharCode(108,95,57,49,95,115,117,98,110,111,100,101,115,0)], [String.fromCharCode(112,111,108,121,95,57,95,55,56,0),String.fromCharCode(105,95,56,50,95,106,115,111,110,0)]]);
          let componentU = 0.0;
         register_f_k = [parseInt(`${iconeditk}`) << (Math.min(Math.abs(sheetw.size), 1))];
         sortx = new Map([[`${sortx.size}`, 2 * parseInt(`${componentU}`)]]);
         componentU /= Math.max(sortx.size + parseInt(`${componentU}`), 5);
      }
          let vietnamH = String.fromCharCode(110,95,57,52,95,100,115,99,112,0);
          let refreshW = 0.0;
          let floaterN = String.fromCharCode(101,95,49,50,95,115,101,113,110,111,0);
         corners = `${(String.fromCharCode(51,0) == vietnamH ? sheetw.size : vietnamH.length)}`;
         refreshW *= (parseFloat(`${floaterN == String.fromCharCode(89,0) ? floaterN.length : parseInt(`${refreshW}`)}`));
          let infol = String.fromCharCode(109,95,56,56,95,115,107,97,100,0);
          let iconbellactive7 = String.fromCharCode(99,111,100,101,102,95,122,95,55,48,0);
         iconeditk *= 2 ^ iconbellactive7.length;
         infol = "1";
         iconbellactive7 = `${3 >> (Math.min(5, infol.length))}`;
      if (corners.length > parseInt(`${iconeditk}`)) {
         corners += `${1 + parseInt(`${iconeditk}`)}`;
      }
         sheetw.set(`${iconeditk}`, 2 * register_f_k.length);
      if ((2 + corners.length) >= 2 || 2 >= (parseInt(`${iconeditk}`) - corners.length)) {
         corners += `${register_f_k.length >> (Math.min(2, Math.abs(sheetw.size)))}`;
      }
          let canvasO = 2.0;
          let huawei1: Array<any> = [678, 882, 95];
          let frame_h5k = String.fromCharCode(97,98,115,100,105,102,102,95,120,95,51,52,0);
         corners += `${frame_h5k.length >> (Math.min(Math.abs(2), 2))}`;
         canvasO *= parseInt(`${canvasO}`);
         huawei1 = [3];
         frame_h5k = `${parseInt(`${canvasO}`) << (Math.min(4, Math.abs(2)))}`;
         register_f_k = [parseInt(`${iconeditk}`)];
      for (let e = 0; e < 2; e++) {
          let iconpipexpand2: Array<any> = [424, 526];
          let stationG = String.fromCharCode(114,95,57,57,95,110,111,110,109,117,108,116,0);
          let shootE: Map<any, any> = new Map([[String.fromCharCode(112,111,108,121,109,101,115,104,95,115,95,57,56,0),String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,49,95,50,0)], [String.fromCharCode(108,111,103,102,117,110,99,95,98,95,51,50,0),String.fromCharCode(99,104,101,99,107,109,97,114,107,115,95,122,95,57,56,0)], [String.fromCharCode(110,95,53,48,95,116,119,111,115,99,97,108,101,0),String.fromCharCode(109,117,120,95,117,95,57,55,0)]]);
          let bing2: Map<any, any> = new Map([[String.fromCharCode(117,95,56,50,95,117,110,115,101,101,110,0),235], [String.fromCharCode(107,95,51,50,95,111,102,102,115,101,116,115,105,122,101,0),306], [String.fromCharCode(109,97,105,110,108,105,115,116,95,106,95,57,48,0),478]]);
          let white1 = String.fromCharCode(100,105,114,112,95,122,95,52,50,0);
         corners = "2";
         iconpipexpand2.push((white1 == String.fromCharCode(113,0) ? white1.length : iconpipexpand2.length));
         stationG += "3";
         shootE = new Map([[`${bing2.size}`, stationG.length * bing2.size]]);
      }
      let mappingI = register_f_k.length >= 6220192;
      do {
          let successV: Map<any, any> = new Map([[String.fromCharCode(101,99,116,97,110,103,108,101,95,121,95,55,56,0),903], [String.fromCharCode(103,95,51,51,95,115,121,109,111,100,100,0),656]]);
         register_f_k.push(corners.length - parseInt(`${iconeditk}`));
         successV = new Map([[`${successV.size}`, successV.size]]);
         if (mappingI) {
            break;
         }
      } while (mappingI && ((register_f_k.length ^ 2) < 3 || (parseInt(`${iconeditk}`) / (Math.max(7, register_f_k.length))) < 2));
          let rewindw = false;
          let predictionwin8 = String.fromCharCode(98,111,120,112,108,111,116,95,55,95,54,52,0);
         sheetw.set(predictionwin8, parseInt(`${iconeditk}`) / 3);
         rewindw = (!rewindw ? rewindw : !rewindw);
         predictionwin8 += "2";
      for (let o = 0; o < 1; o++) {
          let aboutm: Array<any> = [63, 261, 414];
          let catagoryz: Array<any> = [860, 230];
         sheetw.set(`${iconeditk}`, parseInt(`${iconeditk}`));
         aboutm = [aboutm.length % 3];
         catagoryz = [aboutm.length & 3];
      }
      bottomx = `${parseInt(`${o_viewJ}`)}`;
   }
      trophyj = `${parseInt(`${iconmoreb}`)}`;
    clearTimeout(sliderTimeout.current);

      overlayc += `${(String.fromCharCode(83,0) == trophyj ? trophyj.length : descm.length)}`;
   for (let k = 0; k < 2; k++) {
      descm = `${activity3.length - greyarrowupp.size}`;
   }
   while (activity3.length >= typesV.length) {
      activity3 = [bottomx.length];
      break;
   }
   if (scheduleri.length <= typesV.length) {
      scheduleri.push(parseInt(`${iconmoreb}`) + 1);
   }
       let starV = 1.0;
       let cornerkickg: Array<any> = [884, 17, 131];
      if (parseInt(`${starV}`) > cornerkickg.length) {
         starV -= parseFloat(`${parseInt(`${starV}`) + cornerkickg.length}`);
      }
       let regengU = String.fromCharCode(104,111,117,114,95,106,95,57,0);
      let entryB = cornerkickg.length >= 5429224;
      do {
         cornerkickg = [regengU.length % 3];
         if (entryB) {
            break;
         }
      } while (entryB && (regengU.length <= 2));
      let catagory8 = starV >= 7781237.0;
      do {
         starV *= parseFloat(`${3}`);
         if (catagory8) {
            break;
         }
      } while (catagory8 && ((parseFloat(`${cornerkickg.length}`) - starV) >= 3.59));
          let descB: Array<any> = [884, 951, 467];
          let fasto = 1;
          let privileget: Map<any, any> = new Map([[String.fromCharCode(109,111,109,101,110,116,115,95,52,95,56,50,0),true ], [String.fromCharCode(121,95,57,53,95,112,115,102,98,0),false ], [String.fromCharCode(100,101,99,111,109,112,97,110,100,95,51,95,52,53,0),true ]]);
         starV -= parseFloat(`${3 % (Math.max(8, fasto))}`);
         descB.push(descB.length);
         fasto ^= descB.length;
         privileget.set(`${descB.length}`, 1);
          let appsw: Map<any, any> = new Map([[String.fromCharCode(116,95,52,57,95,117,115,101,0),479], [String.fromCharCode(102,95,56,50,95,114,115,104,105,102,116,0),970], [String.fromCharCode(99,111,114,114,101,99,116,105,111,110,95,117,95,55,54,0),876]]);
          let termsa = String.fromCharCode(109,95,53,57,95,115,99,97,108,101,115,0);
         cornerkickg.push(parseInt(`${starV}`) << (Math.min(cornerkickg.length, 1)));
         appsw.set(`${termsa}`, 1 * termsa.length);
      trophyj += `${activity3.length}`;
   let libjsijniprofilerF = 5430530 <= trophyj.length;
   do {
      trophyj += `${2 * scheduleri.length}`;
      if (libjsijniprofilerF) {
         break;
      }
   } while (libjsijniprofilerF && (2 > (trophyj.length * defaultlogok.size)));
   for (let x = 0; x < 3; x++) {
      greyarrowupp.set(`${fast_}`, parseInt(`${fast_}`) - parseInt(`${o_viewJ}`));
   }
      k_lockU.set(trophyj, activity3.length % (Math.max(8, trophyj.length)));
   for (let d = 0; d < 2; d++) {
      iconmoreb /= Math.max(2, 2);
   }
    sliderTimeout.current = setTimeout(() => {

       let viewerw = 4.0;
         viewerw += parseInt(`${viewerw}`);
      let analytic9 = 5465510.0 >= viewerw;
      do {
         viewerw += parseInt(`${viewerw}`);
         if (analytic9) {
            break;
         }
      } while (((viewerw / (Math.max(1.27, 5))) >= 5.38 || (viewerw / (Math.max(1.27, 4))) >= 2.40) && analytic9);
         viewerw += 2 % (Math.max(parseInt(`${viewerw}`), 6));
      typesV.push(greyarrowupp.size);
   let usernamez = 7516014 >= typesV.length;
   do {
       let leagueJ = 4;
       let libaneh: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,95,51,95,49,56,0),444], [String.fromCharCode(103,101,110,101,114,97,116,101,95,57,95,52,49,0),118]]);
       let nextU = 4.0;
      while ((nextU + parseFloat(`${libaneh.size}`)) > 5.27) {
          let condensed2 = 4;
          let predictionbannershared9 = 3;
          let q_titleX = 5.0;
         libaneh.set(`${q_titleX}`, predictionbannershared9 >> (Math.min(1, Math.abs(1))));
         condensed2 &= condensed2;
         predictionbannershared9 |= condensed2 + condensed2;
         break;
      }
          let iconwechatu: Map<any, any> = new Map([[String.fromCharCode(122,101,114,111,99,111,100,101,99,95,50,95,50,52,0),69], [String.fromCharCode(101,110,97,98,108,101,100,95,114,95,54,0),529], [String.fromCharCode(114,105,100,95,108,95,49,53,0),293]]);
          let rnewsshareA = 3;
         libaneh = new Map([[`${libaneh.size}`, rnewsshareA % 2]]);
         iconwechatu = new Map([[`${iconwechatu.size}`, iconwechatu.size]]);
         rnewsshareA &= iconwechatu.size;
         leagueJ |= leagueJ & libaneh.size;
         nextU *= parseFloat(`${parseInt(`${nextU}`)}`);
         leagueJ >>= Math.min(Math.abs(leagueJ), 5);
      let hejiv = 8809895 <= libaneh.size;
      do {
         libaneh.set(`${nextU}`, leagueJ - parseInt(`${nextU}`));
         if (hejiv) {
            break;
         }
      } while (hejiv && (!Array.from(libaneh.keys()).includes(`${leagueJ}`)));
      while ((leagueJ >> (Math.min(Math.abs(libaneh.size), 3))) > 4 || (libaneh.size >> (Math.min(Math.abs(4), 2))) > 2) {
         leagueJ += parseInt(`${nextU}`) & 1;
         break;
      }
      if (3 == (libaneh.size * parseInt(`${nextU}`)) && (3 + libaneh.size) == 3) {
         nextU /= Math.max(parseFloat(`${libaneh.size}`), 4);
      }
       let runtimeschedulera = String.fromCharCode(101,118,105,99,101,95,120,95,49,54,0);
       let cornerg = String.fromCharCode(108,95,53,49,95,104,113,120,100,115,112,0);
      typesV.push(3);
      if (usernamez) {
         break;
      }
   } while (((overlayc.length / 4) >= 5 || (overlayc.length / 4) >= 3) && usernamez);
   let animation1 = 8790442.0 >= o_viewJ;
   do {
       let baselineF = String.fromCharCode(99,104,105,109,112,95,112,95,57,0);
         baselineF += "3";
         baselineF = `${baselineF.length}`;
         baselineF = `${baselineF.length << (Math.min(Math.abs(3), 1))}`;
      o_viewJ *= parseFloat(`${2}`);
      if (animation1) {
         break;
      }
   } while ((o_viewJ >= 3.90) && animation1);
      iconmoreb += 2;
   if (overlayc.startsWith(`${iconmoreb}`)) {
      overlayc = `${parseInt(`${o_viewJ}`) * trophyj.length}`;
   }
   let mimoU = String.fromCharCode(122,116,115,113,95,52,0) == overlayc;
   do {
       let untick4 = 1.0;
       let twitterH = 3.0;
       let libtan6 = String.fromCharCode(119,95,54,56,95,101,112,101,108,0);
       let giflivestreaming5 = String.fromCharCode(117,95,51,56,95,99,97,112,116,117,114,101,0);
         twitterH -= parseInt(`${untick4}`) % (Math.max(giflivestreaming5.length, 6));
         libtan6 += `${giflivestreaming5.length >> (Math.min(Math.abs(2), 4))}`;
         twitterH -= giflivestreaming5.length;
      for (let d = 0; d < 1; d++) {
          let giflivestreamingd = String.fromCharCode(113,95,53,49,95,99,97,108,105,110,103,0);
          let matchactiveC = String.fromCharCode(99,95,51,50,95,103,101,116,116,105,109,101,0);
          let mergerZ = 1;
          let stylesH = 0.0;
          let userR = true;
         giflivestreaming5 += `${parseInt(`${stylesH}`) << (Math.min(matchactiveC.length, 2))}`;
         giflivestreamingd += `${mergerZ}`;
         matchactiveC = `${3 ^ mergerZ}`;
         stylesH *= (parseFloat(`${giflivestreamingd == String.fromCharCode(48,0) ? giflivestreamingd.length : (userR ? 5 : 1)}`));
         userR = 9 >= mergerZ;
      }
       let libsentryk = 1;
       let overlayq = 0;
      overlayc += `${descm.length}`;
      if (mimoU) {
         break;
      }
   } while (mimoU && ((5.78 / (Math.max(1, iconmoreb))) > 2.87));
      k_lockU = new Map([[`${o_viewJ}`, 3]]);
       let executorQ = 4.0;
       let iconeditn: Map<any, any> = new Map([[String.fromCharCode(97,98,98,114,95,109,95,49,53,0),889], [String.fromCharCode(101,95,52,48,0),24]]);
       let feedbackB = String.fromCharCode(109,101,115,104,95,102,95,55,53,0);
       let actionsW = String.fromCharCode(115,117,98,115,101,115,115,105,111,110,95,114,95,57,53,0);
       let starW = String.fromCharCode(100,95,53,53,95,105,100,99,116,120,0);
       let commentH = String.fromCharCode(121,101,115,110,111,95,114,95,55,52,0);
         iconeditn = new Map([[starW, 2]]);
         actionsW += `${(String.fromCharCode(105,0) == commentH ? commentH.length : iconeditn.size)}`;
       let lightk = 5;
       let gemfileM = 1;
      for (let f = 0; f < 3; f++) {
          let iconschedulec: Map<any, any> = new Map([[String.fromCharCode(101,120,116,101,114,110,97,108,108,121,95,115,95,56,48,0),false ], [String.fromCharCode(103,95,50,95,100,105,115,116,0),true ]]);
          let appsh: Map<any, any> = new Map([[String.fromCharCode(102,95,56,55,95,100,116,111,97,0),true ], [String.fromCharCode(110,95,50,50,95,116,114,105,108,105,110,101,97,114,0),true ]]);
          let splashA = 2;
          let upgradeE: Array<any> = [String.fromCharCode(100,95,57,56,95,116,116,97,103,0), String.fromCharCode(99,97,116,99,104,95,98,95,54,52,0), String.fromCharCode(114,101,100,101,116,101,99,116,95,109,95,49,49,0)];
          let catagoryL: Array<any> = [86, 812];
         actionsW = `${lightk}`;
         iconschedulec.set(`${upgradeE.length}`, iconschedulec.size % (Math.max(upgradeE.length, 6)));
         appsh = new Map([[`${catagoryL.length}`, splashA]]);
         splashA &= 1;
         catagoryL.push(3 - upgradeE.length);
      }
      greyarrowupp = new Map([[`${typesV.length}`, parseInt(`${iconmoreb}`) % (Math.max(typesV.length, 1))]]);
      executorQ /= Math.max(3, 2 >> (Math.min(Math.abs(parseInt(`${executorQ}`)), 4)));
      fast_ -= parseInt(`${o_viewJ}`) & k_lockU.size;
      setShowSlider(false);
    }, 1500);
  };

  const setBrightVolumeShare = async () => {
       let giflivestreamingG = 5.0;
    let pressurey = String.fromCharCode(120,95,51,53,95,97,98,115,100,105,102,102,0);
    let iconsubssuccessa: Map<any, any> = new Map([[String.fromCharCode(97,118,97,116,97,114,95,102,95,53,53,0),398], [String.fromCharCode(102,95,52,52,95,102,115,101,101,107,0),652], [String.fromCharCode(102,114,97,109,101,115,101,116,116,101,114,95,50,95,53,53,0),72]]);
    let libfbjnid: Map<any, any> = new Map([[String.fromCharCode(121,95,55,54,95,115,105,110,99,101,0),500], [String.fromCharCode(107,95,49,48,95,115,112,114,111,112,0),588], [String.fromCharCode(108,95,53,50,95,101,120,112,108,105,99,105,116,0),875]]);
    let selectionP: Array<any> = [116, 379, 762];
    let popupk = String.fromCharCode(105,95,56,95,109,111,109,101,110,116,115,0);
    let routeri = 3.0;
    let watchnowbgF = 0.0;
    let photoc: Map<any, any> = new Map([[String.fromCharCode(122,95,51,55,95,111,112,117,115,116,97,98,0),81], [String.fromCharCode(109,95,54,56,95,97,100,100,115,0),962], [String.fromCharCode(112,95,51,52,95,112,114,101,117,112,100,97,116,101,0),284]]);
   if (popupk.startsWith(`${selectionP.length}`)) {
      popupk += `${pressurey.length}`;
   }
   for (let y = 0; y < 2; y++) {
      libfbjnid.set(`${giflivestreamingG}`, 2);
   }
      selectionP.push(3 | selectionP.length);
      giflivestreamingG *= parseFloat(`${selectionP.length | 1}`);
   while (popupk.startsWith(`${giflivestreamingG}`)) {
       let componentregistryI: Array<any> = [333, 347, 935];
      for (let k = 0; k < 3; k++) {
         componentregistryI = [componentregistryI.length];
      }
      if ((4 - componentregistryI.length) <= 2 || (4 - componentregistryI.length) <= 5) {
         componentregistryI.push(componentregistryI.length % (Math.max(2, 9)));
      }
      let math5 = 6072895 >= componentregistryI.length;
      do {
         componentregistryI = [2 + componentregistryI.length];
         if (math5) {
            break;
         }
      } while ((3 == componentregistryI.length) && math5);
      popupk = `${libfbjnid.size * 2}`;
      break;
   }
      libfbjnid = new Map([[popupk, popupk.length]]);
   for (let f = 0; f < 3; f++) {
       let iconnewsshareo = 3;
       let videojsn: Array<any> = [665, 782];
       let editp = String.fromCharCode(117,110,114,105,115,101,95,115,95,57,54,0);
      for (let f = 0; f < 1; f++) {
         videojsn.push(videojsn.length);
      }
         videojsn.push(editp.length / (Math.max(1, 6)));
      while ((4 >> (Math.min(2, editp.length))) >= 5 && 4 >= (4 >> (Math.min(4, editp.length)))) {
         iconnewsshareo /= Math.max(videojsn.length << (Math.min(Math.abs(2), 5)), 5);
         break;
      }
         iconnewsshareo -= iconnewsshareo;
      if (2 <= videojsn.length) {
         videojsn = [editp.length >> (Math.min(Math.abs(2), 3))];
      }
         videojsn.push(1);
      for (let s = 0; s < 2; s++) {
         videojsn = [editp.length % 1];
      }
          let iconnewssharek = 0.0;
          let movieso = String.fromCharCode(115,116,105,108,108,95,107,95,50,0);
         iconnewsshareo *= parseInt(`${iconnewssharek}`);
         iconnewssharek *= parseFloat(`${movieso.length}`);
         movieso = `${movieso.length}`;
      if (2 >= (editp.length | 3)) {
         editp += `${videojsn.length}`;
      }
      iconsubssuccessa = new Map([[`${routeri}`, 3 % (Math.max(parseInt(`${giflivestreamingG}`), 4))]]);
   }
       let firebaseF = false;
       let iconnointernetQ = String.fromCharCode(101,120,116,114,97,100,97,116,97,112,115,101,116,115,95,102,95,56,48,0);
         iconnointernetQ += `${((firebaseF ? 2 : 4) / 1)}`;
      if (1 > iconnointernetQ.length || !firebaseF) {
         firebaseF = (26 == ((!firebaseF ? iconnointernetQ.length : 26) & iconnointernetQ.length));
      }
         firebaseF = ((iconnointernetQ.length - (!firebaseF ? iconnointernetQ.length : 66)) <= 66);
      let dragz = iconnointernetQ == String.fromCharCode(112,111,101,102,100,57,0);
      do {
         iconnointernetQ += "2";
         if (dragz) {
            break;
         }
      } while ((iconnointernetQ.length >= 4) && dragz);
         iconnointernetQ += `${((firebaseF ? 5 : 1))}`;
      for (let r = 0; r < 3; r++) {
          let thailando = String.fromCharCode(109,95,49,48,95,121,118,116,111,121,117,121,0);
          let contextm = true;
          let handler1 = 0.0;
          let dragcloseb = String.fromCharCode(105,95,49,95,114,116,115,112,0);
          let awayteamfielde = true;
         iconnointernetQ = `${((awayteamfielde ? 2 : 4))}`;
         thailando += `${((contextm ? 4 : 4) / (Math.max(dragcloseb.length, 10)))}`;
         contextm = handler1 < dragcloseb.length;
         handler1 -= dragcloseb.length ^ 2;
         awayteamfielde = (((contextm ? dragcloseb.length : 38) * dragcloseb.length) >= 38);
      }
      routeri += parseInt(`${giflivestreamingG}`) - parseInt(`${routeri}`);
      giflivestreamingG *= parseFloat(`${libfbjnid.size * 3}`);
      giflivestreamingG /= Math.max(5, parseFloat(`${1 * parseInt(`${routeri}`)}`));
   let libruntimeexecutorq = 8257579.0 <= giflivestreamingG;
   do {
      giflivestreamingG -= parseFloat(`${parseInt(`${routeri}`) << (Math.min(Math.abs(2), 5))}`);
      if (libruntimeexecutorq) {
         break;
      }
   } while (((parseInt(`${giflivestreamingG}`) * pressurey.length) >= 4 || 2.57 >= (3.2 * giflivestreamingG)) && libruntimeexecutorq);

    brightShare.value = await SystemSetting.getAppBrightness();

      giflivestreamingG -= parseFloat(`${2}`);
       let mimoZ = String.fromCharCode(115,101,99,111,110,100,112,97,115,115,95,56,95,57,52,0);
       let bggradientV = String.fromCharCode(100,101,115,101,108,101,99,116,95,116,95,57,52,0);
       let pushE = String.fromCharCode(107,95,55,56,95,99,97,116,101,103,111,114,105,101,115,0);
          let gifgoalbgt = false;
          let telemetry9 = String.fromCharCode(104,97,110,110,105,110,103,95,112,95,54,52,0);
          let pangleq: Array<any> = [145, 617, 70];
         mimoZ = `${2 * mimoZ.length}`;
         gifgoalbgt = pangleq.length == 80;
         telemetry9 += "1";
         pangleq.push((3 / (Math.max(1, (gifgoalbgt ? 1 : 1)))));
       let lines = String.fromCharCode(117,95,56,54,95,115,111,117,110,0);
       let libloggerl = String.fromCharCode(109,95,56,49,95,117,110,115,111,108,118,101,100,0);
          let defaultplayerimg4 = String.fromCharCode(116,95,56,51,95,105,110,116,114,97,120,100,115,112,0);
         libloggerl += `${defaultplayerimg4.length}`;
      for (let r = 0; r < 2; r++) {
          let projectk = String.fromCharCode(105,95,54,48,95,100,117,97,108,105,110,112,117,116,0);
          let iconmore6: Array<any> = [441, 774, 899];
         lines += `${libloggerl.length}`;
         projectk = `${iconmore6.length ^ 2}`;
         iconmore6.push(iconmore6.length);
      }
      for (let a = 0; a < 2; a++) {
          let screenz = 4.0;
          let abidetectC = 1;
          let baidup = String.fromCharCode(119,95,53,48,95,109,97,120,120,0);
          let heart9 = String.fromCharCode(97,118,112,107,116,95,57,95,53,57,0);
          let megaphoneN = 4;
         lines = `${heart9.length}`;
         screenz -= parseFloat(`${1 ^ parseInt(`${screenz}`)}`);
         abidetectC += baidup.length;
         baidup += `${abidetectC & 2}`;
         heart9 += `${1 << (Math.min(Math.abs(parseInt(`${screenz}`)), 3))}`;
         megaphoneN >>= Math.min(Math.abs(3), 4);
      }
      for (let v = 0; v < 3; v++) {
         lines += `${pushE.length}`;
      }
          let materialA = String.fromCharCode(102,95,55,53,95,108,101,116,116,101,114,115,0);
          let liveendmodallogof: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,119,111,114,100,95,48,95,53,49,0),165], [String.fromCharCode(104,95,57,57,95,115,117,98,113,117,101,114,121,0),25], [String.fromCharCode(115,95,49,53,95,99,111,110,102,105,103,117,114,97,98,108,101,0),4]]);
         libloggerl = `${materialA.length}`;
         materialA = `${liveendmodallogof.size & 2}`;
         liveendmodallogof = new Map([[`${liveendmodallogof.size}`, liveendmodallogof.size]]);
          let leftw = 2.0;
         pushE += `${mimoZ.length - 2}`;
         leftw *= parseFloat(`${3 * parseInt(`${leftw}`)}`);
      for (let b = 0; b < 3; b++) {
         pushE += `${pushE.length >> (Math.min(Math.abs(3), 5))}`;
      }
      iconsubssuccessa = new Map([[`${iconsubssuccessa.size}`, iconsubssuccessa.size - selectionP.length]]);
      bggradientV = "3";
   for (let l = 0; l < 1; l++) {
      libfbjnid = new Map([[pressurey, parseInt(`${giflivestreamingG}`) & pressurey.length]]);
   }
       let stylesX = true;
      for (let k = 0; k < 2; k++) {
         stylesX = !stylesX;
      }
      for (let w = 0; w < 1; w++) {
         stylesX = (stylesX ? !stylesX : stylesX);
      }
          let security9 = false;
          let yellowredcardZ = false;
         stylesX = !security9;
         yellowredcardZ = !yellowredcardZ || !yellowredcardZ;
      iconsubssuccessa.set(`${giflivestreamingG}`, (parseInt(`${giflivestreamingG}`) * (stylesX ? 1 : 1)));
      pressurey = `${selectionP.length - 2}`;
   while ((selectionP.length << (Math.min(Math.abs(2), 2))) > 4) {
      selectionP = [iconsubssuccessa.size - 1];
      break;
   }
   for (let w = 0; w < 3; w++) {
      selectionP = [2 * selectionP.length];
   }
      libfbjnid = new Map([[pressurey, (String.fromCharCode(48,0) == popupk ? pressurey.length : popupk.length)]]);
      pressurey += `${popupk.length}`;
   while (watchnowbgF >= routeri) {
      watchnowbgF -= pressurey.length >> (Math.min(Math.abs(1), 1));
      break;
   }
      photoc.set(`${watchnowbgF}`, 3);
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
       let stringV = String.fromCharCode(109,95,49,49,95,97,110,105,109,97,116,97,98,108,101,0);
    let helperM = false;
    let changeD = String.fromCharCode(121,95,52,57,95,105,110,102,111,114,109,97,116,105,111,110,0);
    let modald = String.fromCharCode(99,95,52,57,95,105,115,100,105,103,105,116,0);
    let popupT: Array<any> = [815, 191, 432];
    let foundP = String.fromCharCode(100,95,53,49,95,115,111,110,111,0);
    let hiadJ = String.fromCharCode(100,95,49,48,95,98,101,110,101,102,105,99,105,97,114,121,0);
    let schedulerK = String.fromCharCode(98,95,54,48,95,116,104,117,110,107,0);
    let combineO = String.fromCharCode(109,101,100,105,97,95,111,95,52,57,0);
    let uimanagerj = String.fromCharCode(100,111,99,105,100,115,95,118,95,53,55,0);
    let auto_jX = String.fromCharCode(115,95,56,56,95,99,109,97,112,0);
    let armvap: Array<any> = [117, 41, 734];
    let nbatrophyt = 0.0;
      hiadJ = `${hiadJ.length}`;
   while (combineO.endsWith(`${helperM}`)) {
       let contextG: Array<any> = [522, 377, 58];
       let overlayi = 1;
      while (contextG.length == 2) {
         overlayi <<= Math.min(Math.abs(1), 3);
         break;
      }
      let valuess = overlayi >= 8540680;
      do {
          let baselinet = 3;
          let hongkongh: Array<any> = [String.fromCharCode(111,95,55,55,95,118,112,109,116,0), String.fromCharCode(111,118,101,114,108,111,97,100,95,114,95,52,55,0), String.fromCharCode(100,95,55,54,95,115,109,105,108,105,110,103,0)];
         overlayi <<= Math.min(2, Math.abs(hongkongh.length << (Math.min(4, Math.abs(baselinet)))));
         if (valuess) {
            break;
         }
      } while (valuess && (1 >= (4 >> (Math.min(2, contextG.length))) && 5 >= (overlayi >> (Math.min(Math.abs(4), 3)))));
      for (let v = 0; v < 1; v++) {
          let darkh: Array<any> = [577, 15, 832];
          let redirecte = String.fromCharCode(101,114,97,115,101,114,95,50,95,51,49,0);
          let assistC = String.fromCharCode(116,111,111,98,105,103,95,49,95,56,54,0);
         contextG.push(1);
         darkh = [3];
         redirecte += `${2 * redirecte.length}`;
         assistC = `${(redirecte == String.fromCharCode(116,0) ? darkh.length : redirecte.length)}`;
      }
          let tnewarchdefaultse = String.fromCharCode(99,114,101,100,101,110,116,105,97,108,115,95,108,95,56,51,0);
         contextG.push((String.fromCharCode(86,0) == tnewarchdefaultse ? contextG.length : tnewarchdefaultse.length));
       let scrollviewj: Array<any> = [String.fromCharCode(114,95,48,95,100,101,99,101,108,101,114,97,116,101,100,0), String.fromCharCode(97,95,52,50,95,114,105,110,103,0)];
       let sportJ: Array<any> = [255, 406, 567];
         scrollviewj = [2];
      combineO = `${popupT.length ^ 3}`;
      break;
   }
   for (let w = 0; w < 2; w++) {
      hiadJ += `${popupT.length}`;
   }
       let dependenciesg = String.fromCharCode(104,113,100,110,100,95,98,95,57,49,0);
      while (dependenciesg == String.fromCharCode(107,0)) {
          let founds = 0;
         dependenciesg += `${2 & dependenciesg.length}`;
         founds %= Math.max(1, 2);
         break;
      }
      if (dependenciesg == String.fromCharCode(86,0) && 4 >= dependenciesg.length) {
          let valuesW = String.fromCharCode(112,114,101,102,105,120,101,115,95,99,95,48,0);
          let langy = 2;
          let unimplementedviewy = String.fromCharCode(109,115,105,122,101,95,50,95,53,54,0);
          let downloadedS = 4.0;
          let change4 = true;
         dependenciesg = `${unimplementedviewy.length}`;
         valuesW = "1";
         langy *= 1;
         unimplementedviewy = "3";
         downloadedS /= Math.max(2, parseInt(`${downloadedS}`) - valuesW.length);
         change4 = !change4;
      }
      while (dependenciesg != String.fromCharCode(50,0) || dependenciesg.length == 4) {
          let inouttargetredf: Map<any, any> = new Map([[String.fromCharCode(114,97,100,102,95,114,95,50,57,0),227], [String.fromCharCode(107,95,55,53,95,100,101,99,105,115,105,111,110,0),888]]);
          let iconedits = 2.0;
          let uimanagerb = String.fromCharCode(114,95,56,95,109,115,103,115,109,0);
          let rulesT = String.fromCharCode(113,95,51,57,95,97,98,115,116,114,97,99,116,0);
          let mbnativeadvancedw = String.fromCharCode(109,111,100,101,109,118,99,111,115,116,95,52,95,57,49,0);
         dependenciesg += `${(String.fromCharCode(82,0) == mbnativeadvancedw ? rulesT.length : mbnativeadvancedw.length)}`;
         inouttargetredf.set(`${iconedits}`, 1);
         iconedits *= parseFloat(`${inouttargetredf.size}`);
         uimanagerb += `${parseInt(`${iconedits}`)}`;
         rulesT = `${inouttargetredf.size ^ parseInt(`${iconedits}`)}`;
         break;
      }
      combineO += `${hiadJ.length & modald.length}`;
   while (hiadJ != foundP) {
      foundP += `${modald.length / (Math.max(1, 5))}`;
      break;
   }
   let animationt = 6247078 >= stringV.length;
   do {
      stringV = `${(String.fromCharCode(79,0) == combineO ? combineO.length : (helperM ? 3 : 4))}`;
      if (animationt) {
         break;
      }
   } while (animationt && (!stringV.startsWith(`${helperM}`)));
   while (!modald.startsWith(`${popupT.length}`)) {
      modald += "1";
      break;
   }
   let fnewinterstitialV = String.fromCharCode(100,101,105,56,120,52,97,109,0) == stringV;
   do {
      stringV += `${1 + popupT.length}`;
      if (fnewinterstitialV) {
         break;
      }
   } while (fnewinterstitialV && (helperM));
   let phoneshareM = popupT.length >= 6862298;
   do {
      popupT.push(1 << (Math.min(2, schedulerK.length)));
      if (phoneshareM) {
         break;
      }
   } while ((helperM) && phoneshareM);
   let binddatasO = String.fromCharCode(103,57,55,119,117,111,109,98,0) == stringV;
   do {
      stringV += `${schedulerK.length}`;
      if (binddatasO) {
         break;
      }
   } while (binddatasO && (hiadJ.includes(stringV)));
      combineO += `${foundP.length}`;
   let styleO = schedulerK == String.fromCharCode(102,103,121,121,116,113,56,0);
   do {
      schedulerK = `${stringV.length}`;
      if (styleO) {
         break;
      }
   } while ((helperM) && styleO);
      helperM = String.fromCharCode(115,0) == hiadJ;
   let tickc = String.fromCharCode(119,57,99,0) == stringV;
   do {
       let flipperL = String.fromCharCode(116,97,105,108,115,95,121,95,55,57,0);
       let qnewinterstitialF = false;
       let predictionwin3 = true;
         qnewinterstitialF = !predictionwin3 || !qnewinterstitialF;
          let filteru = String.fromCharCode(98,117,114,115,116,121,95,50,95,52,52,0);
          let incident7 = 3;
         qnewinterstitialF = predictionwin3;
         filteru = `${filteru.length}`;
         incident7 >>= Math.min(filteru.length, 1);
         flipperL += `${((qnewinterstitialF ? 5 : 5) & 1)}`;
      let iconshareN = predictionwin3 ? !predictionwin3 : predictionwin3;
      do {
         predictionwin3 = !qnewinterstitialF;
         if (iconshareN) {
            break;
         }
      } while ((!qnewinterstitialF) && iconshareN);
      while (predictionwin3 && qnewinterstitialF) {
          let giflivestreamingg = String.fromCharCode(101,95,55,50,95,116,105,109,101,111,117,116,115,0);
          let viewsz = 3;
          let teamdetailsbgJ = 4.0;
         predictionwin3 = viewsz < teamdetailsbgJ;
         giflivestreamingg = `${giflivestreamingg.length}`;
         viewsz %= Math.max((String.fromCharCode(104,0) == giflivestreamingg ? giflivestreamingg.length : giflivestreamingg.length), 1);
         break;
      }
      if (flipperL.endsWith(`${qnewinterstitialF}`)) {
         qnewinterstitialF = !qnewinterstitialF;
      }
      let pages = qnewinterstitialF ? !qnewinterstitialF : qnewinterstitialF;
      do {
         qnewinterstitialF = flipperL.includes(`${predictionwin3}`);
         if (pages) {
            break;
         }
      } while (pages && (!qnewinterstitialF));
         flipperL = `${(1 << (Math.min(Math.abs((predictionwin3 ? 5 : 5)), 3)))}`;
         qnewinterstitialF = !predictionwin3;
      stringV += "1";
      if (tickc) {
         break;
      }
   } while ((stringV.length >= hiadJ.length) && tickc);
   let humiditys = uimanagerj == String.fromCharCode(101,122,54,103,118,57,57,99,116,0);
   do {
      uimanagerj += `${modald.length}`;
      if (humiditys) {
         break;
      }
   } while (humiditys && (uimanagerj.includes(schedulerK)));
      helperM = String.fromCharCode(109,0) == foundP;
   let schedulerH = helperM ? !helperM : helperM;
   do {
      helperM = auto_jX == String.fromCharCode(112,0);
      if (schedulerH) {
         break;
      }
   } while ((helperM) && schedulerH);
   let directo = auto_jX == String.fromCharCode(56,56,100,116,49,109,111,55,100,95,0);
   do {
      auto_jX = `${schedulerK.length}`;
      if (directo) {
         break;
      }
   } while (directo && (auto_jX.length > popupT.length));
       let bdxadsdk0 = String.fromCharCode(117,110,99,111,114,114,95,98,95,57,56,0);
       let iconfeedbackG = 3;
         bdxadsdk0 = `${bdxadsdk0.length << (Math.min(5, Math.abs(iconfeedbackG)))}`;
         bdxadsdk0 += `${3 >> (Math.min(5, Math.abs(iconfeedbackG)))}`;
          let modelse = 1.0;
          let window_xs = 2;
         bdxadsdk0 += `${parseInt(`${modelse}`)}`;
         modelse *= window_xs << (Math.min(3, Math.abs(window_xs)));
       let zoomk: Map<any, any> = new Map([[String.fromCharCode(102,95,57,57,95,119,101,98,112,97,103,101,115,0),529], [String.fromCharCode(98,95,56,49,95,100,101,115,116,114,111,121,101,100,0),871]]);
      while (!bdxadsdk0.includes(`${zoomk.size}`)) {
          let inactiveb: Array<any> = [146, 691, 171];
          let kuaishouJ: Map<any, any> = new Map([[String.fromCharCode(97,118,102,111,114,109,97,116,95,98,95,55,0),String.fromCharCode(108,95,54,55,95,100,105,103,105,116,99,111,117,110,116,0)], [String.fromCharCode(105,110,105,116,95,119,95,51,50,0),String.fromCharCode(105,100,101,116,95,113,95,55,55,0)]]);
         zoomk = new Map([[`${kuaishouJ.size}`, zoomk.size >> (Math.min(Math.abs(2), 2))]]);
         inactiveb = [1];
         kuaishouJ.set(`${inactiveb.length}`, inactiveb.length);
         break;
      }
      while (5 < (iconfeedbackG ^ 4) || 3 < (zoomk.size ^ 4)) {
         iconfeedbackG &= bdxadsdk0.length ^ iconfeedbackG;
         break;
      }
      changeD = `${foundP.length + 2}`;
      combineO += `${popupT.length}`;
   while (!schedulerK.includes(`${helperM}`)) {
      helperM = (hiadJ.length * schedulerK.length) == 48;
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
       let send9: Map<any, any> = new Map([[String.fromCharCode(97,102,116,101,114,108,105,102,101,95,100,95,56,51,0),706], [String.fromCharCode(106,95,54,49,95,111,103,103,105,110,103,0),829], [String.fromCharCode(118,95,49,53,95,114,101,115,116,114,105,99,116,105,111,110,115,0),105]]);
    let materialr = false;
    let unfill6 = 2.0;
    let f_counte = String.fromCharCode(104,97,115,104,100,101,115,116,114,111,121,95,52,95,52,57,0);
    let championh = false;
    let catalogf = String.fromCharCode(110,95,49,51,95,102,116,121,112,0);
    let backicone = String.fromCharCode(99,95,54,95,102,105,101,108,100,109,97,116,99,104,0);
    let window_ojo = String.fromCharCode(105,95,52,52,95,119,101,105,103,104,116,115,0);
    let vietnamG: Array<any> = [210, 647, 659];
    let predictionK = true;
    let libyogae: Map<any, any> = new Map([[String.fromCharCode(105,95,49,57,95,121,117,118,112,108,0),true ], [String.fromCharCode(118,95,57,49,95,97,100,106,117,115,116,0),true ]]);
      championh = catalogf.length <= 75;
   if (libyogae.size < 4) {
      materialr = !materialr;
   }
   if (2.98 > (parseFloat(`${backicone.length}`) * unfill6)) {
       let iconschedule4 = String.fromCharCode(97,114,101,113,117,101,115,116,95,100,95,49,57,0);
       let componentsP = String.fromCharCode(115,105,103,112,97,115,115,95,48,95,55,52,0);
       let rncore3 = String.fromCharCode(118,99,111,100,101,99,95,110,95,53,52,0);
       let shoot0 = false;
       let customs = String.fromCharCode(121,111,117,114,95,116,95,53,55,0);
          let lessV: Array<any> = [899, 547];
          let root1 = 2.0;
         shoot0 = (componentsP.length + parseInt(`${root1}`)) == 73;
         lessV = [lessV.length + 2];
         root1 -= parseFloat(`${lessV.length}`);
      let editf = rncore3 == String.fromCharCode(120,52,118,111,104,118,117,0);
      do {
         rncore3 += `${(String.fromCharCode(74,0) == customs ? customs.length : componentsP.length)}`;
         if (editf) {
            break;
         }
      } while ((!componentsP.endsWith(`${rncore3.length}`)) && editf);
          let fullK = String.fromCharCode(99,95,51,95,100,101,99,111,100,101,102,114,97,109,101,0);
         componentsP = `${3 ^ componentsP.length}`;
         fullK = `${fullK.length}`;
      let root3 = String.fromCharCode(52,57,118,57,104,103,55,51,99,116,0) == iconschedule4;
      do {
          let type_bqZ = true;
          let huaweif = 5;
          let giftbuttony = String.fromCharCode(108,111,99,107,105,110,103,95,110,95,57,56,0);
          let shareK = String.fromCharCode(97,99,97,108,99,95,55,95,50,53,0);
         iconschedule4 = `${3 + customs.length}`;
         type_bqZ = giftbuttony.endsWith(`${huaweif}`);
         huaweif -= giftbuttony.length;
         shareK = `${giftbuttony.length}`;
         if (root3) {
            break;
         }
      } while ((rncore3.length >= iconschedule4.length) && root3);
      while (rncore3 != String.fromCharCode(51,0)) {
         iconschedule4 += `${iconschedule4.length}`;
         break;
      }
          let interstitialy = 1.0;
          let leftM = String.fromCharCode(116,101,109,112,108,97,116,101,100,95,106,95,49,53,0);
         componentsP += `${rncore3.length}`;
         interstitialy += 3 & leftM.length;
         leftM += `${leftM.length * 2}`;
         iconschedule4 += `${((shoot0 ? 5 : 5))}`;
      while (iconschedule4.length > 5 || rncore3 == String.fromCharCode(51,0)) {
          let selectiono = String.fromCharCode(118,115,110,112,114,105,110,116,102,95,103,95,55,50,0);
         iconschedule4 = "1";
         selectiono = `${selectiono.length % (Math.max(3, 6))}`;
         break;
      }
          let telegramt = 3.0;
          let statistics8 = String.fromCharCode(98,108,117,114,95,49,95,57,53,0);
         shoot0 = iconschedule4.length <= 85 || componentsP.length <= 85;
         telegramt -= parseFloat(`${2}`);
         statistics8 = `${parseInt(`${telegramt}`)}`;
      if (3 > customs.length || shoot0) {
         shoot0 = (36 < ((!shoot0 ? 36 : componentsP.length) - componentsP.length));
      }
      let trophy8 = shoot0 ? !shoot0 : shoot0;
      do {
         shoot0 = iconschedule4.length == 47;
         if (trophy8) {
            break;
         }
      } while (trophy8 && (rncore3.length == 1));
         rncore3 += "2";
         customs = `${((shoot0 ? 1 : 5))}`;
         customs += `${3 >> (Math.min(5, iconschedule4.length))}`;
      for (let b = 0; b < 2; b++) {
         iconschedule4 += `${rncore3.length}`;
      }
      unfill6 /= Math.max(parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${unfill6}`)), 3))}`), 2);
   }
   while (!championh) {
       let renderO = String.fromCharCode(115,116,114,101,97,109,102,111,117,114,99,99,95,108,95,49,55,0);
      for (let y = 0; y < 1; y++) {
          let xadsdku = String.fromCharCode(111,95,54,51,95,111,99,115,112,105,100,0);
          let iconarrowrightQ = String.fromCharCode(99,111,110,102,105,103,95,53,95,53,49,0);
          let dplus6 = 1.0;
          let notificationH = String.fromCharCode(105,95,51,95,100,99,97,97,100,112,99,109,0);
         renderO += `${iconarrowrightQ.length}`;
         xadsdku += `${parseInt(`${dplus6}`)}`;
         iconarrowrightQ = `${xadsdku.length * parseInt(`${dplus6}`)}`;
         notificationH = `${(String.fromCharCode(111,0) == notificationH ? parseInt(`${dplus6}`) : notificationH.length)}`;
      }
          let libavdeviceu = 2.0;
         renderO += `${renderO.length}`;
         libavdeviceu -= parseFloat(`${2 * parseInt(`${libavdeviceu}`)}`);
      let nextB = renderO == String.fromCharCode(118,48,48,0);
      do {
          let disconnectedlogoW = String.fromCharCode(116,95,53,48,95,112,108,117,103,103,101,100,0);
          let usernameC: Map<any, any> = new Map([[String.fromCharCode(105,95,50,50,95,116,114,117,110,99,0),942], [String.fromCharCode(98,101,104,97,118,105,111,114,115,95,121,95,57,54,0),172], [String.fromCharCode(99,114,99,99,95,113,95,50,49,0),981]]);
          let stationk = 4.0;
          let bodanB = 5.0;
          let giflivestreamingY = String.fromCharCode(108,95,55,57,95,112,97,114,0);
         renderO += `${usernameC.size << (Math.min(Math.abs(3), 2))}`;
         disconnectedlogoW += `${parseInt(`${stationk}`) + parseInt(`${bodanB}`)}`;
         usernameC = new Map([[disconnectedlogoW, parseInt(`${stationk}`) >> (Math.min(disconnectedlogoW.length, 1))]]);
         bodanB += parseFloat(`${parseInt(`${bodanB}`) / 1}`);
         giflivestreamingY = `${3 - parseInt(`${stationk}`)}`;
         if (nextB) {
            break;
         }
      } while (nextB && (renderO.length <= 5));
      catalogf += "2";
      break;
   }
   let away6 = 6749825 >= backicone.length;
   do {
      backicone += `${1 & libyogae.size}`;
      if (away6) {
         break;
      }
   } while ((backicone.length == 3) && away6);
       let wnewinterstitial_ = String.fromCharCode(115,116,114,117,99,116,115,95,117,95,54,57,0);
      let j_viewv = wnewinterstitial_.length >= 5929015;
      do {
          let dice9 = String.fromCharCode(111,95,52,52,95,108,111,97,100,0);
          let formN: Array<any> = [52, 690];
         wnewinterstitial_ += `${wnewinterstitial_.length}`;
         dice9 = `${(dice9 == String.fromCharCode(89,0) ? dice9.length : formN.length)}`;
         formN = [dice9.length - 1];
         if (j_viewv) {
            break;
         }
      } while ((wnewinterstitial_.length < wnewinterstitial_.length) && j_viewv);
         wnewinterstitial_ += "1";
      for (let n = 0; n < 1; n++) {
          let commonu = 1.0;
          let trashQ = String.fromCharCode(105,112,102,115,95,114,95,54,51,0);
          let sentryG = 0.0;
         wnewinterstitial_ += "1";
         commonu *= parseInt(`${sentryG}`) / 3;
         trashQ = `${2 >> (Math.min(4, Math.abs(parseInt(`${commonu}`))))}`;
         sentryG -= parseFloat(`${parseInt(`${commonu}`) - 3}`);
      }
      window_ojo = `${1 * parseInt(`${unfill6}`)}`;
   let templateprocessorZ = 4912473 >= window_ojo.length;
   do {
      window_ojo += `${window_ojo.length}`;
      if (templateprocessorZ) {
         break;
      }
   } while (templateprocessorZ && (3 > (4 >> (Math.min(2, window_ojo.length))) || 2 > (4 >> (Math.min(5, Math.abs(libyogae.size))))));
      materialr = libyogae.size < 55 && 55 < catalogf.length;
      championh = 48.61 < unfill6;
      materialr = f_counte.length <= vietnamG.length;

      if (!isDoubleTap.value) {

   while (!materialr || f_counte.length == 5) {
      f_counte += "1";
      break;
   }
      materialr = backicone.length == 34 && championh;
   while (!materialr) {
      materialr = String.fromCharCode(122,0) == catalogf;
      break;
   }
       let stringH = String.fromCharCode(112,95,52,53,95,104,111,115,116,112,111,114,116,102,105,108,101,0);
      while (stringH.endsWith(`${stringH.length}`)) {
         stringH = "3";
         break;
      }
      let skip9 = stringH == String.fromCharCode(117,100,53,109,107,101,110,0);
      do {
         stringH += `${stringH.length}`;
         if (skip9) {
            break;
         }
      } while ((4 == stringH.length || stringH == String.fromCharCode(48,0)) && skip9);
       let product2 = 0;
       let faviconM = 2;
      window_ojo += "1";
   for (let b = 0; b < 2; b++) {
      predictionK = 95 < window_ojo.length;
   }
   let indicatorS = catalogf == String.fromCharCode(104,115,104,56,0);
   do {
      catalogf = "1";
      if (indicatorS) {
         break;
      }
   } while ((window_ojo != catalogf) && indicatorS);
   for (let a = 0; a < 3; a++) {
      unfill6 /= Math.max(4, parseFloat(`${1}`));
   }
      vietnamG.push((parseInt(`${unfill6}`) + (materialr ? 5 : 2)));
      send9.set(backicone, send9.size);
      vietnamG.push(parseInt(`${unfill6}`) & window_ojo.length);
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
