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
import BrightnessVolumeSlider from "./wawa_whistle";
import { debounce } from "lodash";
type wawaAwayShow = {
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

type wawaYellow = {
  name: "progress" | "brightness" | "feedbackRefreshborderless" | "none";
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
}: wawaAwayShow) => {
  const panCooldown = useSharedValue(3);

  const previousPanPosition = useSharedValue({ x: 0, y: 0, gesture: "none" });
  const brightShare = useSharedValue(0.0);
  const volumeShare = useSharedValue(0.0);
  const [settings, setSettings] = useState<wawaYellow>({
    name: "none",
    value: 0,
  });
  const [showSlider, setShowSlider] = useState(false);

  const isDoubleTap = useSharedValue(false);

  const sliderTimeout = useRef(0);
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  const showControls = () => {
       let matchactivey = String.fromCharCode(105,110,100,105,114,101,99,116,0);
    let libglogc = 2.0;
    let recommendationN = 2.0;
    let tickedq = 4;
    let stringsD = 4.0;
    let policyg = String.fromCharCode(109,101,109,111,106,105,0);
    let render9 = String.fromCharCode(117,112,100,97,116,105,110,103,0);
    let package_as: Array<any> = [466, 470];
    let iconarrowrights: Array<any> = [657, 716, 154];
    let editU = String.fromCharCode(118,115,102,114,97,109,101,0);
    let danger6 = false;
    let middlesoundf: Map<any, any> = new Map([[String.fromCharCode(115,116,114,116,111,105,110,116,0),98], [String.fromCharCode(98,108,111,99,107,115,99,97,110,0),710], [String.fromCharCode(114,105,102,102,0),769]]);
    let iconmoret: Map<any, any> = new Map([[String.fromCharCode(109,115,118,115,100,101,112,101,110,100,0),false ], [String.fromCharCode(114,101,112,115,116,114,0),false ], [String.fromCharCode(103,95,49,53,95,101,102,102,101,99,116,0),true ]]);
    let analyticD = String.fromCharCode(104,101,108,112,101,114,115,0);
    let animationsx = String.fromCharCode(112,114,101,101,110,99,111,100,101,0);
   let ajaxi = package_as.length <= 6976887;
   do {
       let paths = 5.0;
       let leagueX: Array<any> = [434, 361];
       let colorsu = String.fromCharCode(109,121,115,101,108,102,0);
          let sideT = String.fromCharCode(112,104,97,115,101,0);
         leagueX.push(leagueX.length >> (Math.min(Math.abs(3), 4)));
         sideT = `${sideT.length >> (Math.min(Math.abs(1), 5))}`;
      if (3 >= (leagueX.length / (Math.max(8, parseInt(`${paths}`))))) {
         paths -= (String.fromCharCode(102,0) == colorsu ? parseInt(`${paths}`) : colorsu.length);
      }
          let fullscreenmax7 = String.fromCharCode(105,111,115,0);
         colorsu = "3";
         fullscreenmax7 = `${(fullscreenmax7 == String.fromCharCode(77,0) ? fullscreenmax7.length : fullscreenmax7.length)}`;
          let nodev = 2.0;
          let spinner6 = 3;
         paths /= Math.max(leagueX.length, 5);
         nodev -= 1;
         spinner6 &= parseInt(`${nodev}`) >> (Math.min(1, Math.abs(spinner6)));
          let componentregistryZ = String.fromCharCode(111,112,116,105,111,110,115,0);
          let iconadslinkc: Array<any> = [783, 226, 1];
         paths += (String.fromCharCode(115,0) == componentregistryZ ? leagueX.length : componentregistryZ.length);
         iconadslinkc = [1];
      for (let p = 0; p < 2; p++) {
         colorsu += `${2 | parseInt(`${paths}`)}`;
      }
      let uimanagerp = 5079201.0 >= paths;
      do {
         paths -= 3;
         if (uimanagerp) {
            break;
         }
      } while (uimanagerp && (2 >= (leagueX.length ^ 1) || (leagueX.length >> (Math.min(Math.abs(1), 3))) >= 4));
          let iconclosewhitebg8 = String.fromCharCode(99,117,114,0);
          let libreactT = 5.0;
         leagueX = [parseInt(`${libreactT}`) / (Math.max(1, parseInt(`${paths}`)))];
         iconclosewhitebg8 += `${1 % (Math.max(1, iconclosewhitebg8.length))}`;
         libreactT /= Math.max(2, iconclosewhitebg8.length * iconclosewhitebg8.length);
         colorsu = "3";
      package_as.push(policyg.length << (Math.min(Math.abs(2), 4)));
      if (ajaxi) {
         break;
      }
   } while (ajaxi && (package_as.includes(recommendationN)));
   if (!danger6) {
      policyg += `${1 - parseInt(`${stringsD}`)}`;
   }
   for (let a = 0; a < 3; a++) {
      stringsD -= parseFloat(`${parseInt(`${stringsD}`) + render9.length}`);
   }
      render9 += `${2 << (Math.min(Math.abs(tickedq), 2))}`;
   if ((4.43 * libglogc) <= 2.64) {
       let crown0 = 3.0;
       let defaultfootballbgF = String.fromCharCode(97,97,99,116,97,98,0);
       let t_playeri = 4.0;
         t_playeri /= Math.max(5, (parseFloat(`${defaultfootballbgF == String.fromCharCode(121,0) ? parseInt(`${crown0}`) : defaultfootballbgF.length}`)));
          let ksadS = String.fromCharCode(110,97,99,107,0);
         t_playeri /= Math.max(parseFloat(`${1}`), 1);
         ksadS += `${ksadS.length << (Math.min(ksadS.length, 2))}`;
          let footballfiledlayoutI = String.fromCharCode(111,117,116,112,117,116,95,113,95,53,51,0);
         t_playeri += parseFloat(`${3}`);
         footballfiledlayoutI = `${footballfiledlayoutI.length}`;
         defaultfootballbgF += `${2 & parseInt(`${t_playeri}`)}`;
       let iconmegaphoneP: Array<any> = [291, 508, 903];
       let armvak: Array<any> = [166, 397, 564];
      for (let k = 0; k < 1; k++) {
         crown0 /= Math.max(parseFloat(`${3 | parseInt(`${t_playeri}`)}`), 3);
      }
         iconmegaphoneP = [armvak.length & 3];
          let dplusF: Array<any> = [String.fromCharCode(113,109,97,116,0), String.fromCharCode(99,97,116,0)];
          let mbjscommonp: Array<any> = [884, 508];
          let modelsN = 2.0;
         crown0 += parseFloat(`${armvak.length / 3}`);
         dplusF = [dplusF.length % (Math.max(1, 7))];
         mbjscommonp.push(1 * dplusF.length);
         modelsN /= Math.max(parseFloat(`${parseInt(`${modelsN}`)}`), 1);
      while (5.11 < (3.90 / (Math.max(8, t_playeri)))) {
          let matchactiveA: Array<any> = [734, 935];
          let defaultprofilepicL = 0.0;
         iconmegaphoneP.push(1);
         matchactiveA = [parseInt(`${defaultprofilepicL}`)];
         defaultprofilepicL += 3;
         break;
      }
      libglogc /= Math.max(5, (parseFloat(`${iconarrowrights.length % (Math.max(10, (danger6 ? 3 : 3)))}`)));
   }
   if (render9.endsWith(`${libglogc}`)) {
      render9 = `${(matchactivey == String.fromCharCode(121,0) ? parseInt(`${libglogc}`) : matchactivey.length)}`;
   }
   let sharewhitez = 7349984.0 >= libglogc;
   do {
      libglogc += parseFloat(`${tickedq}`);
      if (sharewhitez) {
         break;
      }
   } while (sharewhitez && (3.99 >= (1.29 + libglogc)));
       let volume4: Array<any> = [505, 930, 159];
      if (2 <= (volume4.length - volume4.length) && (volume4.length - 2) <= 2) {
         volume4.push(1 ^ volume4.length);
      }
          let basketballmatchdetailbgE: Map<any, any> = new Map([[String.fromCharCode(115,99,116,112,99,111,110,110,0),200], [String.fromCharCode(98,105,116,115,113,112,0),456]]);
         volume4 = [2 / (Math.max(8, volume4.length))];
         basketballmatchdetailbgE.set(`${basketballmatchdetailbgE.size}`, 3);
         volume4.push(volume4.length);
      editU += `${1 / (Math.max(2, matchactivey.length))}`;
   while (5 < (package_as.length + policyg.length)) {
       let popupE: Array<any> = [342, 917];
       let code3 = String.fromCharCode(114,101,112,108,97,121,101,100,0);
      while (code3.endsWith(`${popupE.length}`)) {
         popupE.push(code3.length >> (Math.min(5, popupE.length)));
         break;
      }
      for (let l = 0; l < 1; l++) {
          let arrowdownq: Array<any> = [148, 573, 628];
          let middlebrightness2 = false;
          let iconnewchath = String.fromCharCode(105,110,97,99,116,105,118,101,0);
         code3 = `${popupE.length}`;
         arrowdownq.push(((middlebrightness2 ? 1 : 2)));
         middlebrightness2 = iconnewchath.startsWith(`${middlebrightness2}`);
         iconnewchath += `${((middlebrightness2 ? 3 : 4) + 3)}`;
      }
      for (let q = 0; q < 1; q++) {
         popupE.push(code3.length);
      }
      let assistg = 5167795 >= popupE.length;
      do {
          let schedulerC = String.fromCharCode(114,101,99,101,105,118,101,95,121,95,49,51,0);
         popupE.push(code3.length & 2);
         schedulerC = `${1 % (Math.max(10, schedulerC.length))}`;
         if (assistg) {
            break;
         }
      } while ((code3.includes(`${popupE.length}`)) && assistg);
          let basea: Map<any, any> = new Map([[String.fromCharCode(105,115,110,111,116,116,97,112,95,116,95,53,48,0),546], [String.fromCharCode(115,105,103,110,101,100,0),44], [String.fromCharCode(113,100,109,99,0),796]]);
         popupE.push((code3 == String.fromCharCode(89,0) ? code3.length : popupE.length));
         basea.set(`${basea.size}`, basea.size | 1);
          let connectionT = String.fromCharCode(116,101,97,114,0);
          let bell5 = String.fromCharCode(112,111,115,116,114,101,113,117,101,115,116,0);
          let downe = String.fromCharCode(114,102,102,116,102,0);
         popupE = [2];
         connectionT += `${bell5.length}`;
         bell5 += `${downe.length >> (Math.min(connectionT.length, 5))}`;
         downe += `${connectionT.length << (Math.min(downe.length, 5))}`;
      package_as = [render9.length & 3];
      break;
   }

    setShowSlider(true);

   let emojiheartr = 6121123 >= iconarrowrights.length;
   do {
       let reddownarrowf = 0;
       let analyticsc = 5.0;
       let success9 = String.fromCharCode(109,97,103,110,105,116,117,100,101,0);
       let arrow2: Array<any> = [476, 686];
       let gradlee = String.fromCharCode(104,109,97,99,105,100,0);
       let profilez = false;
       let klevinV = false;
      while (!klevinV && 3 < (arrow2.length / (Math.max(3, 3)))) {
          let agreement7 = String.fromCharCode(115,109,111,111,116,104,105,110,103,0);
          let eighteenI = 3.0;
          let otherG = 4.0;
          let armvaZ: Map<any, any> = new Map([[String.fromCharCode(112,108,97,110,101,115,0),true ], [String.fromCharCode(106,95,57,51,95,97,99,99,101,115,115,0),true ]]);
         arrow2.push(reddownarrowf / 2);
         agreement7 += `${parseInt(`${otherG}`) * 1}`;
         eighteenI += parseFloat(`${parseInt(`${eighteenI}`) % (Math.max(agreement7.length, 9))}`);
         otherG -= parseFloat(`${agreement7.length ^ armvaZ.size}`);
         armvaZ = new Map([[`${eighteenI}`, (agreement7 == String.fromCharCode(53,0) ? agreement7.length : parseInt(`${eighteenI}`))]]);
         break;
      }
         reddownarrowf %= Math.max(reddownarrowf | parseInt(`${analyticsc}`), 4);
         reddownarrowf <<= Math.min(1, Math.abs(((klevinV ? 5 : 4) | parseInt(`${analyticsc}`))));
         success9 = `${parseInt(`${analyticsc}`) * 2}`;
          let backwardu = 5;
          let o_titley = String.fromCharCode(115,110,112,114,105,110,116,102,0);
         arrow2.push((1 | (profilez ? 5 : 5)));
         backwardu ^= 2;
         o_titley = `${backwardu}`;
         success9 = `${success9.length << (Math.min(2, Math.abs(reddownarrowf)))}`;
          let stringsV = String.fromCharCode(107,101,121,119,111,114,100,115,0);
          let abidetectV = String.fromCharCode(100,95,57,51,95,99,111,101,102,115,0);
         gradlee = `${success9.length}`;
         stringsV = `${2 << (Math.min(4, stringsV.length))}`;
         abidetectV += `${(stringsV == String.fromCharCode(50,0) ? stringsV.length : abidetectV.length)}`;
         arrow2.push(1 - parseInt(`${analyticsc}`));
         gradlee = "2";
      if (analyticsc == 3.33 || 5.68 == (analyticsc / 3.33)) {
          let sportsC = String.fromCharCode(122,95,53,48,0);
         klevinV = 46 > gradlee.length;
         sportsC = `${2 + sportsC.length}`;
      }
         gradlee = `${parseInt(`${analyticsc}`) << (Math.min(2, Math.abs(2)))}`;
         reddownarrowf ^= 2 / (Math.max(10, arrow2.length));
      for (let n = 0; n < 3; n++) {
          let activityY: Map<any, any> = new Map([[String.fromCharCode(115,111,99,107,97,100,100,114,0),529], [String.fromCharCode(108,105,110,101,115,0),886]]);
          let sort9 = 2.0;
          let filledC: Array<any> = [900, 226];
          let minivodG = String.fromCharCode(99,111,110,102,111,114,109,115,0);
         klevinV = (filledC.length + minivodG.length) <= 19;
         activityY.set(`${sort9}`, 1);
         sort9 -= parseFloat(`${parseInt(`${sort9}`) / 2}`);
         filledC = [parseInt(`${sort9}`) - activityY.size];
         minivodG += `${3 / (Math.max(9, parseInt(`${sort9}`)))}`;
      }
      let eact6 = klevinV ? !klevinV : klevinV;
      do {
         klevinV = arrow2.length == 61 && 59.86 == analyticsc;
         if (eact6) {
            break;
         }
      } while (eact6 && (klevinV));
      iconarrowrights = [iconarrowrights.length];
      if (emojiheartr) {
         break;
      }
   } while (((iconarrowrights.length ^ 2) <= 2) && emojiheartr);
      iconarrowrights = [package_as.length];
   if (1 == (1 - package_as.length) || (tickedq - package_as.length) == 1) {
       let bottom3: Array<any> = [375, 928];
         bottom3.push(2);
         bottom3.push(3);
      if (bottom3.length <= 2) {
         bottom3 = [1 | bottom3.length];
      }
      tickedq <<= Math.min(Math.abs(2), 2);
   }
   for (let i = 0; i < 2; i++) {
      policyg = `${editU.length}`;
   }
       let giflivestreamingJ = 1;
          let componentV = String.fromCharCode(117,114,108,0);
         giflivestreamingJ -= (componentV == String.fromCharCode(65,0) ? giflivestreamingJ : componentV.length);
       let green7: Array<any> = [49, 0];
          let libpangleflipped9 = 1;
         giflivestreamingJ -= green7.length + libpangleflipped9;
      package_as.push(package_as.length >> (Math.min(editU.length, 4)));
       let proxyB = String.fromCharCode(103,105,118,101,110,0);
       let shareg = 4;
      while ((5 >> (Math.min(5, Math.abs(shareg)))) <= 2 || (5 >> (Math.min(2, Math.abs(shareg)))) <= 2) {
          let pressureq = false;
          let xvodA = String.fromCharCode(99,111,112,121,120,0);
         proxyB += `${((pressureq ? 5 : 4) | shareg)}`;
         pressureq = xvodA.length >= xvodA.length;
         break;
      }
      while ((5 >> (Math.min(2, proxyB.length))) == 1 || (proxyB.length >> (Math.min(Math.abs(5), 1))) == 1) {
          let baiduads8 = String.fromCharCode(122,101,114,111,115,95,101,95,56,0);
         shareg /= Math.max(shareg, 3);
         baiduads8 = "1";
         break;
      }
      let smallbrightnessc = 7683429 <= proxyB.length;
      do {
         proxyB += `${shareg & 1}`;
         if (smallbrightnessc) {
            break;
         }
      } while (smallbrightnessc && ((4 & shareg) <= 5));
      if (3 >= shareg) {
          let sigmobX = String.fromCharCode(112,114,101,112,114,111,103,114,97,109,109,101,100,0);
          let sigmoby = false;
          let stationsG = String.fromCharCode(111,117,114,0);
          let nalyticsU = String.fromCharCode(116,116,116,0);
          let giftbuttonD = 1.0;
         proxyB += `${shareg}`;
         sigmobX += "2";
         sigmoby = 39.79 == giftbuttonD;
         stationsG = `${(sigmobX == String.fromCharCode(86,0) ? nalyticsU.length : sigmobX.length)}`;
         nalyticsU += `${((sigmoby ? 3 : 3))}`;
         giftbuttonD /= Math.max(1 % (Math.max(3, sigmobX.length)), 4);
      }
      while (3 >= (shareg >> (Math.min(Math.abs(5), 2)))) {
         proxyB = `${shareg}`;
         break;
      }
      for (let w = 0; w < 1; w++) {
         shareg >>= Math.min(4, Math.abs(shareg % 1));
      }
      danger6 = 31.96 < libglogc;
   for (let t = 0; t < 1; t++) {
       let checkboxu = 2.0;
       let questiconP = String.fromCharCode(116,109,112,111,95,115,95,51,52,0);
       let filterd = String.fromCharCode(98,97,100,114,101,113,0);
       let matchactiveu = 4;
       let window_6V = 0;
       let baiduadsz = 0.0;
       let homeinactiveV = 0.0;
      if (filterd.includes(`${matchactiveu}`)) {
          let goallogoY = 5.0;
          let linkW = false;
          let iconcalendars = String.fromCharCode(115,97,118,101,100,0);
          let iconnewssharei = false;
          let componentregistryK: Map<any, any> = new Map([[String.fromCharCode(112,99,98,105,110,102,111,0),true ], [String.fromCharCode(113,117,97,108,105,102,121,0),true ]]);
         filterd = "3";
         goallogoY /= Math.max(3, parseFloat(`${iconcalendars.length}`));
         linkW = iconnewssharei;
         iconcalendars = `${iconcalendars.length}`;
         componentregistryK = new Map([[`${componentregistryK.size}`, ((linkW ? 1 : 5) % (Math.max(componentregistryK.size, 3)))]]);
      }
      while ((5 + filterd.length) >= 1 && (5 + matchactiveu) >= 5) {
          let calendard = 2.0;
         filterd = `${questiconP.length << (Math.min(5, Math.abs(window_6V)))}`;
         calendard /= Math.max(5, parseFloat(`${parseInt(`${calendard}`) + 1}`));
         break;
      }
          let configureW = String.fromCharCode(98,95,51,95,118,97,97,112,105,0);
         matchactiveu -= questiconP.length;
         configureW += `${2 * configureW.length}`;
       let phoneP: Array<any> = [738, 211];
       let playercommong: Array<any> = [922, 422];
      for (let c = 0; c < 3; c++) {
         matchactiveu -= 1;
      }
       let gesturesD = String.fromCharCode(105,95,49,53,95,116,114,97,110,115,105,116,0);
       let chatroombackground9 = 0.0;
         matchactiveu <<= Math.min(Math.abs(2), 4);
         questiconP = `${parseInt(`${baiduadsz}`)}`;
      while ((checkboxu - 2.49) > 2.88 || (questiconP.length / 1) > 2) {
          let runtimeg = true;
         questiconP = `${parseInt(`${baiduadsz}`) * gesturesD.length}`;
         runtimeg = !runtimeg;
         break;
      }
          let combined4 = String.fromCharCode(116,114,97,99,107,101,100,0);
          let directA = 1.0;
         baiduadsz *= 3;
         combined4 += `${parseInt(`${directA}`) >> (Math.min(Math.abs(2), 2))}`;
         directA /= Math.max(1, parseFloat(`${parseInt(`${directA}`)}`));
          let reducer1 = 4.0;
         filterd = `${parseInt(`${baiduadsz}`)}`;
         reducer1 /= Math.max(parseInt(`${reducer1}`) << (Math.min(2, Math.abs(2))), 1);
      for (let s = 0; s < 3; s++) {
          let toponz: Map<any, any> = new Map([[String.fromCharCode(116,114,97,99,105,110,103,95,48,95,53,56,0),String.fromCharCode(112,101,110,100,105,110,103,115,0)], [String.fromCharCode(97,114,103,118,0),String.fromCharCode(111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,0)]]);
          let borderlessq = true;
          let jingdongc = 0.0;
          let yellowscoreball8 = 1.0;
          let vignettee: Array<any> = [String.fromCharCode(118,99,114,101,97,116,101,0), String.fromCharCode(113,95,52,57,95,101,108,101,118,97,116,101,100,0)];
         filterd = `${gesturesD.length / 3}`;
         toponz = new Map([[`${toponz.size}`, 2 & parseInt(`${jingdongc}`)]]);
         borderlessq = (36 >= ((borderlessq ? 36 : toponz.size) | toponz.size));
         jingdongc *= 3;
         yellowscoreball8 *= 1 >> (Math.min(4, vignettee.length));
         vignettee.push(parseInt(`${jingdongc}`));
      }
      let predictionbannerg = 6415558.0 >= chatroombackground9;
      do {
         chatroombackground9 *= filterd.length;
         if (predictionbannerg) {
            break;
         }
      } while (predictionbannerg && (3.49 <= (window_6V - chatroombackground9)));
      recommendationN /= Math.max(4, parseInt(`${recommendationN}`) + 1);
   }
   if (4 == (render9.length & 1)) {
      recommendationN -= render9.length << (Math.min(policyg.length, 4));
   }
   let selecti = libglogc <= 8639888.0;
   do {
       let auto_izD = 2.0;
         auto_izD /= Math.max(parseFloat(`${parseInt(`${auto_izD}`) | parseInt(`${auto_izD}`)}`), 1);
         auto_izD *= parseFloat(`${parseInt(`${auto_izD}`)}`);
      if (auto_izD >= 3.63) {
         auto_izD -= parseFloat(`${parseInt(`${auto_izD}`)}`);
      }
      libglogc += parseFloat(`${iconarrowrights.length ^ 2}`);
      if (selecti) {
         break;
      }
   } while (selecti && ((2.93 + libglogc) <= 5.44));
    clearTimeout(sliderTimeout.current);

   if (package_as.length == middlesoundf.size) {
      package_as = [parseInt(`${libglogc}`) % 1];
   }
      libglogc *= parseFloat(`${2 ^ iconarrowrights.length}`);
   let dacccfaabfbcbadeebddcabacdffdbI = recommendationN >= 6154984.0;
   do {
      recommendationN *= iconarrowrights.length;
      if (dacccfaabfbcbadeebddcabacdffdbI) {
         break;
      }
   } while ((3.94 <= libglogc) && dacccfaabfbcbadeebddcabacdffdbI);
   while ((iconarrowrights.length | 3) > 1 && 4.7 > (3.94 - recommendationN)) {
       let iconarrowleft1: Array<any> = [728, 626, 616];
       let libreactperfloggerjnis = String.fromCharCode(117,110,115,111,108,118,101,100,0);
      for (let f = 0; f < 2; f++) {
          let mountingP = 5.0;
          let gifgoalj: Map<any, any> = new Map([[String.fromCharCode(106,95,53,54,95,102,105,108,116,101,114,0),67], [String.fromCharCode(98,95,49,49,95,105,110,115,112,101,99,116,0),158], [String.fromCharCode(117,110,115,97,116,105,115,102,105,101,100,0),735]]);
         iconarrowleft1 = [parseInt(`${mountingP}`)];
         mountingP += parseFloat(`${3}`);
         gifgoalj.set(`${gifgoalj.size}`, gifgoalj.size / 1);
      }
      if (4 == (libreactperfloggerjnis.length % (Math.max(3, 7)))) {
          let debugH: Array<any> = [528, 588];
          let splashx = 2.0;
          let redgoal5 = 3.0;
          let yingB: Array<any> = [749, 237];
         iconarrowleft1.push(2 % (Math.max(parseInt(`${splashx}`), 4)));
         debugH = [parseInt(`${redgoal5}`)];
         splashx /= Math.max(5, debugH.length << (Math.min(Math.abs(1), 3)));
         redgoal5 *= 1;
         yingB.push(2);
      }
         libreactperfloggerjnis += `${3 ^ iconarrowleft1.length}`;
          let resendg = 3.0;
          let middlei: Map<any, any> = new Map([[String.fromCharCode(115,116,114,110,105,99,109,112,0),false ], [String.fromCharCode(108,111,103,103,101,100,0),false ], [String.fromCharCode(115,117,98,116,101,114,109,0),true ]]);
         libreactperfloggerjnis += `${1 >> (Math.min(5, libreactperfloggerjnis.length))}`;
         resendg -= parseInt(`${resendg}`);
         middlei = new Map([[`${middlei.size}`, middlei.size]]);
         libreactperfloggerjnis = `${iconarrowleft1.length + libreactperfloggerjnis.length}`;
       let pingH = String.fromCharCode(109,95,50,57,95,116,111,107,101,110,100,0);
      recommendationN *= iconarrowleft1.length;
      break;
   }
       let brightnessI = String.fromCharCode(99,104,105,108,100,114,101,110,0);
       let vertical4 = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,95,105,95,54,48,0);
         brightnessI += "1";
      if (3 <= vertical4.length && 3 <= brightnessI.length) {
         vertical4 += `${brightnessI.length}`;
      }
      middlesoundf = new Map([[`${danger6}`, 3]]);
   while (!danger6) {
       let heartZ = String.fromCharCode(97,99,99,101,115,115,105,98,105,108,105,116,121,0);
       let iconcurrentmatchZ = String.fromCharCode(97,95,53,48,95,115,101,97,114,99,104,0);
         heartZ += `${iconcurrentmatchZ.length | 2}`;
      let philippinesj = String.fromCharCode(97,109,52,57,0) == heartZ;
      do {
         heartZ = `${heartZ.length}`;
         if (philippinesj) {
            break;
         }
      } while ((5 == heartZ.length) && philippinesj);
      let math2 = iconcurrentmatchZ == String.fromCharCode(102,100,95,115,118,114,107,97,54,0);
      do {
          let window_5qT: Array<any> = [553, 688];
          let sharedw = String.fromCharCode(118,100,101,99,0);
          let projectj = String.fromCharCode(100,101,110,121,0);
         iconcurrentmatchZ = `${projectj.length}`;
         window_5qT.push(window_5qT.length);
         sharedw = `${sharedw.length}`;
         projectj = `${sharedw.length}`;
         if (math2) {
            break;
         }
      } while ((iconcurrentmatchZ.length >= heartZ.length) && math2);
      while (iconcurrentmatchZ.length >= 3) {
          let yellowvideoliveR: Map<any, any> = new Map([[String.fromCharCode(118,105,115,105,98,105,116,121,0),163], [String.fromCharCode(114,101,118,111,107,105,110,103,0),477]]);
         iconcurrentmatchZ += `${(String.fromCharCode(67,0) == heartZ ? yellowvideoliveR.size : heartZ.length)}`;
         break;
      }
         iconcurrentmatchZ += "3";
       let xvods: Array<any> = [326, 959];
       let userq: Array<any> = [String.fromCharCode(113,112,105,115,0), String.fromCharCode(97,97,117,100,105,111,0), String.fromCharCode(109,117,108,116,120,0)];
      tickedq /= Math.max(3, 2);
      break;
   }
   let airbnbstarselectedo = 9720450 <= tickedq;
   do {
      tickedq /= Math.max(2 & tickedq, 3);
      if (airbnbstarselectedo) {
         break;
      }
   } while (airbnbstarselectedo && (iconarrowrights.includes(tickedq)));
       let constantsn = String.fromCharCode(99,116,111,114,0);
       let modulek = String.fromCharCode(111,99,117,109,101,110,116,95,119,95,52,56,0);
       let eyeclosek: Map<any, any> = new Map([[String.fromCharCode(104,109,109,116,0),491], [String.fromCharCode(117,95,57,49,95,114,101,99,101,105,118,101,100,0),797], [String.fromCharCode(112,95,49,56,0),222]]);
       let viewerw: Map<any, any> = new Map([[String.fromCharCode(115,104,97,100,101,115,0),672], [String.fromCharCode(115,117,105,116,101,98,0),16], [String.fromCharCode(110,111,116,101,115,95,54,95,51,53,0),145]]);
       let imagenetworkerru: Array<any> = [345, 903];
       let componentx: Array<any> = [562, 776, 368];
      let matchdetailbgm = viewerw.size >= 9226947;
      do {
         viewerw = new Map([[modulek, 3 | constantsn.length]]);
         if (matchdetailbgm) {
            break;
         }
      } while (matchdetailbgm && ((eyeclosek.size / 4) > 5 && (eyeclosek.size / 4) > 4));
       let yellowvideolive7 = String.fromCharCode(97,115,102,99,114,121,112,116,0);
       let graphP = String.fromCharCode(106,95,51,50,95,115,112,97,110,0);
      for (let h = 0; h < 2; h++) {
         viewerw.set(`${eyeclosek.size}`, 1 >> (Math.min(5, Math.abs(viewerw.size))));
      }
       let imagemanagerY = String.fromCharCode(104,118,99,99,0);
      package_as = [package_as.length % (Math.max(editU.length, 6))];
      danger6 = editU.length <= parseInt(`${libglogc}`);
    sliderTimeout.current = setTimeout(() => {

       let leakcheckerE = true;
      if (!leakcheckerE) {
         leakcheckerE = (leakcheckerE ? leakcheckerE : !leakcheckerE);
      }
          let nativeext = String.fromCharCode(99,109,112,97,100,100,114,0);
         leakcheckerE = nativeext.length > 13;
         leakcheckerE = (!leakcheckerE ? leakcheckerE : !leakcheckerE);
      editU = `${package_as.length}`;
   let macauA = String.fromCharCode(102,49,102,110,122,99,100,0) == matchactivey;
   do {
      matchactivey += `${editU.length}`;
      if (macauA) {
         break;
      }
   } while ((!matchactivey.includes(`${stringsD}`)) && macauA);
       let logoutO = 4.0;
       let homeplayerW = 0;
       let icontransferclubN: Array<any> = [853, 416, 753];
      while (3.70 <= (homeplayerW / (Math.max(logoutO, 2)))) {
          let commont = 3;
          let background0 = false;
         homeplayerW -= (commont + (background0 ? 5 : 1));
         break;
      }
          let smallbrightnessj = String.fromCharCode(98,105,110,97,114,121,0);
          let playercommonp: Map<any, any> = new Map([[String.fromCharCode(97,99,100,99,0),String.fromCharCode(116,97,110,0)], [String.fromCharCode(115,101,103,116,114,101,101,0),String.fromCharCode(115,116,114,102,117,110,99,0)]]);
          let libavdeviceD = false;
         homeplayerW ^= (3 << (Math.min(4, Math.abs((libavdeviceD ? 4 : 2)))));
         smallbrightnessj = `${smallbrightnessj.length + 1}`;
         playercommonp.set(smallbrightnessj, (smallbrightnessj == String.fromCharCode(90,0) ? playercommonp.size : smallbrightnessj.length));
         libavdeviceD = smallbrightnessj == String.fromCharCode(72,0);
       let internetK = String.fromCharCode(109,117,108,116,105,112,108,105,101,114,0);
       let whistleorangeJ = String.fromCharCode(104,97,110,100,108,101,114,0);
      for (let e = 0; e < 2; e++) {
          let gradle7 = 0.0;
          let middlebrightnessj = String.fromCharCode(118,112,115,104,97,114,101,100,0);
          let default_2U = String.fromCharCode(108,95,55,52,95,100,101,106,117,100,100,101,114,0);
          let gemfileT = true;
          let typingk = 5.0;
         logoutO /= Math.max(1, (parseFloat(`${(gemfileT ? 2 : 2) * homeplayerW}`)));
         gradle7 /= Math.max(4, 3 & parseInt(`${typingk}`));
         middlebrightnessj += `${default_2U.length + 2}`;
         default_2U = `${2 + parseInt(`${typingk}`)}`;
         gemfileT = typingk < 69.80;
      }
      let fullscreenmaxM = internetK == String.fromCharCode(117,99,109,116,0);
      do {
          let cancelr = 5;
          let chartR = 3.0;
         internetK += "2";
         cancelr %= Math.max(5, parseInt(`${chartR}`) >> (Math.min(3, Math.abs(2))));
         chartR += cancelr % (Math.max(parseInt(`${chartR}`), 2));
         if (fullscreenmaxM) {
            break;
         }
      } while (fullscreenmaxM && (whistleorangeJ == internetK));
      policyg += `${matchactivey.length ^ 3}`;
      render9 += `${parseInt(`${recommendationN}`) >> (Math.min(Math.abs(1), 3))}`;
       let bottomN = String.fromCharCode(113,117,111,116,97,0);
       let manifestA = String.fromCharCode(97,98,115,100,105,102,102,0);
       let orangeclocku = String.fromCharCode(101,95,55,48,95,116,101,109,112,110,97,109,101,0);
          let imagemanagerc: Map<any, any> = new Map([[String.fromCharCode(119,97,115,116,101,100,0),115], [String.fromCharCode(116,101,115,116,110,101,116,115,0),395]]);
          let dycreatorm = String.fromCharCode(117,114,105,0);
         manifestA = `${bottomN.length}`;
         imagemanagerc.set(dycreatorm, imagemanagerc.size | 1);
         dycreatorm += `${imagemanagerc.size}`;
      if (manifestA.startsWith(`${orangeclocku.length}`)) {
         orangeclocku = `${bottomN.length}`;
      }
      let completeG = manifestA == String.fromCharCode(105,117,121,117,0);
      do {
         manifestA += `${manifestA.length}`;
         if (completeG) {
            break;
         }
      } while (completeG && (orangeclocku != String.fromCharCode(56,0)));
          let optionsl: Map<any, any> = new Map([[String.fromCharCode(99,111,109,109,105,116,116,101,100,0),630], [String.fromCharCode(114,116,112,0),689], [String.fromCharCode(113,95,49,49,95,114,101,108,101,97,115,101,100,0),925]]);
         manifestA += "2";
         optionsl = new Map([[`${optionsl.size}`, optionsl.size | optionsl.size]]);
      for (let v = 0; v < 3; v++) {
          let whatsappv = String.fromCharCode(105,110,116,114,111,0);
         manifestA += `${1 + manifestA.length}`;
         whatsappv = `${whatsappv.length}`;
      }
          let statsP: Array<any> = [179, 824];
         bottomN = `${bottomN.length & orangeclocku.length}`;
         statsP.push(statsP.length + statsP.length);
         manifestA += `${(bottomN == String.fromCharCode(106,0) ? orangeclocku.length : bottomN.length)}`;
       let login5 = String.fromCharCode(112,114,101,97,109,98,108,101,0);
      for (let y = 0; y < 1; y++) {
         manifestA += `${(String.fromCharCode(72,0) == login5 ? login5.length : manifestA.length)}`;
      }
      danger6 = stringsD <= parseFloat(`${orangeclocku.length}`);
      iconmoret.set(`${danger6}`, iconarrowrights.length | 2);
       let progressZ = String.fromCharCode(100,118,97,117,100,105,111,0);
      for (let l = 0; l < 2; l++) {
          let vietnamz = 5.0;
          let sliderk = String.fromCharCode(117,110,99,111,109,112,114,101,115,115,0);
         progressZ += `${sliderk.length}`;
         vietnamz *= 2;
         sliderk += `${parseInt(`${vietnamz}`) >> (Math.min(Math.abs(parseInt(`${vietnamz}`)), 3))}`;
      }
      while (progressZ == String.fromCharCode(75,0)) {
         progressZ += `${2 & progressZ.length}`;
         break;
      }
         progressZ += `${progressZ.length}`;
      libglogc /= Math.max(1, parseFloat(`${parseInt(`${recommendationN}`) % (Math.max(8, iconarrowrights.length))}`));
      policyg = `${tickedq}`;
   let merger9 = 6513767 <= render9.length;
   do {
      render9 = `${((danger6 ? 5 : 3) % (Math.max(1, 1)))}`;
      if (merger9) {
         break;
      }
   } while ((render9.length <= 1 && matchactivey == String.fromCharCode(103,0)) && merger9);
      setShowSlider(false);
    }, 1500);
  };

  const setBrightVolumeShare = async () => {
       let descu: Map<any, any> = new Map([[String.fromCharCode(98,105,97,115,101,100,0),546], [String.fromCharCode(115,117,98,118,97,108,117,101,0),906], [String.fromCharCode(116,105,103,103,108,101,0),114]]);
    let leaguev: Array<any> = [String.fromCharCode(98,114,101,110,100,101,114,0), String.fromCharCode(112,111,115,105,116,105,118,101,0), String.fromCharCode(108,97,98,101,108,101,100,0)];
    let imagemanagery = String.fromCharCode(113,115,99,97,108,101,113,112,0);
    let textlayoutmanagerr = String.fromCharCode(113,100,109,100,97,116,97,95,107,95,56,51,0);
    let sellt = 1.0;
    let countdownt = 5;
    let default_xt = String.fromCharCode(114,101,100,118,0);
    let eyecloseZ = String.fromCharCode(100,105,118,112,111,119,109,0);
    let middlewareJ = false;
    let currentA = String.fromCharCode(99,111,101,102,102,115,0);
    let libfbV = String.fromCharCode(109,109,99,111,115,0);
    let notificationZ = true;
    let downloadu = true;
    let penaltyshoote = String.fromCharCode(99,97,99,104,101,115,0);
    let greenS = 4.0;
    let reminderR = 3.0;
    let dacccfaabfbcbadeebddcabacdffdbo = String.fromCharCode(112,111,108,108,0);
    let livesharer: Array<any> = [311, 109];
    let backiconmaskn = String.fromCharCode(115,116,117,102,102,115,116,0);
      descu = new Map([[`${countdownt}`, currentA.length << (Math.min(Math.abs(2), 3))]]);
       let iconrightorangez: Map<any, any> = new Map([[String.fromCharCode(111,115,116,114,101,97,109,0),10], [String.fromCharCode(100,105,109,105,115,115,95,112,95,52,54,0),43]]);
      while ((5 ^ iconrightorangez.size) <= 4) {
         iconrightorangez = new Map([[`${iconrightorangez.size}`, iconrightorangez.size + 3]]);
         break;
      }
       let signinupx = String.fromCharCode(105,110,99,111,109,105,110,103,95,57,95,50,51,0);
      if (signinupx.endsWith(`${iconrightorangez.size}`)) {
         iconrightorangez.set(signinupx, 3 | signinupx.length);
      }
      default_xt = `${1 >> (Math.min(3, textlayoutmanagerr.length))}`;
       let iconshareM = false;
      while (!iconshareM) {
         iconshareM = (!iconshareM ? iconshareM : !iconshareM);
         break;
      }
         iconshareM = !iconshareM;
      while (!iconshareM) {
         iconshareM = !iconshareM;
         break;
      }
      leaguev.push((leaguev.length << (Math.min(3, Math.abs((middlewareJ ? 2 : 5))))));
      leaguev.push(textlayoutmanagerr.length);
   if (5 >= leaguev.length) {
      descu.set(libfbV, libfbV.length * 2);
   }
      descu.set(currentA, (2 ^ (middlewareJ ? 3 : 3)));
   let uploadp = 6938801.0 >= sellt;
   do {
      sellt += parseFloat(`${imagemanagery.length}`);
      if (uploadp) {
         break;
      }
   } while ((leaguev.length == 4) && uploadp);
       let owngoalU: Map<any, any> = new Map([[String.fromCharCode(105,110,99,108,117,100,105,110,103,0),881], [String.fromCharCode(97,100,118,97,110,99,101,109,101,110,116,0),623]]);
       let package_oq4 = 3.0;
      if (3.64 < (parseFloat(`${owngoalU.size}`) + package_oq4)) {
         owngoalU = new Map([[`${owngoalU.size}`, 3 * parseInt(`${package_oq4}`)]]);
      }
          let rewardvideo3 = String.fromCharCode(110,101,97,114,101,115,116,0);
         package_oq4 -= parseFloat(`${owngoalU.size}`);
         rewardvideo3 = `${1 * rewardvideo3.length}`;
      if (2.73 == (package_oq4 + 3.81) && (owngoalU.size - 5) == 4) {
         owngoalU.set(`${package_oq4}`, parseInt(`${package_oq4}`));
      }
      if ((package_oq4 / (Math.max(parseFloat(`${owngoalU.size}`), 7))) == 3.19 || (parseFloat(`${owngoalU.size}`) / (Math.max(3, package_oq4))) == 3.19) {
         owngoalU = new Map([[`${owngoalU.size}`, 2 * owngoalU.size]]);
      }
         owngoalU.set(`${package_oq4}`, 1);
         owngoalU.set(`${package_oq4}`, 1 * owngoalU.size);
      countdownt *= (textlayoutmanagerr == String.fromCharCode(110,0) ? descu.size : textlayoutmanagerr.length);
   if (3 == textlayoutmanagerr.length && !notificationZ) {
      textlayoutmanagerr += "3";
   }
   if (middlewareJ) {
      middlewareJ = downloadu;
   }
       let memberu: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,108,105,103,104,116,97,98,108,101,0),74], [String.fromCharCode(114,101,112,97,114,101,100,0),55]]);
       let moonf = false;
       let anythink8 = String.fromCharCode(97,110,115,119,101,114,0);
         anythink8 += `${((moonf ? 5 : 3) >> (Math.min(Math.abs(1), 3)))}`;
         moonf = !moonf;
         memberu.set(`${moonf}`, ((moonf ? 2 : 2) ^ anythink8.length));
      while (!moonf) {
         moonf = !moonf;
         break;
      }
         memberu = new Map([[`${memberu.size}`, memberu.size]]);
         moonf = memberu.size <= 28;
          let stringR = String.fromCharCode(114,97,112,105,100,106,115,111,110,0);
         anythink8 = `${memberu.size % (Math.max(anythink8.length, 2))}`;
         stringR = `${(stringR == String.fromCharCode(86,0) ? stringR.length : stringR.length)}`;
      for (let q = 0; q < 2; q++) {
          let mbjscommon2 = 5;
          let pauses = 5.0;
          let privatechatbgV = 4;
         moonf = (24 <= (anythink8.length | (moonf ? 24 : anythink8.length)));
         mbjscommon2 >>= Math.min(3, Math.abs(parseInt(`${pauses}`)));
         pauses /= Math.max(4, mbjscommon2);
         privatechatbgV *= parseInt(`${pauses}`);
      }
         anythink8 += `${memberu.size}`;
      textlayoutmanagerr = `${(parseInt(`${sellt}`) * (notificationZ ? 3 : 2))}`;
      notificationZ = (parseFloat(`${textlayoutmanagerr.length}`) + sellt) < 72.22;
      default_xt = `${libfbV.length & 2}`;
   let loadingJ = downloadu ? !downloadu : downloadu;
   do {
      downloadu = sellt < 57.31;
      if (loadingJ) {
         break;
      }
   } while ((!downloadu) && loadingJ);
      middlewareJ = 11 < eyecloseZ.length;
       let scoreD = 5.0;
       let abidetect9 = 5.0;
          let mail9 = 3.0;
          let textinputU = 5.0;
         abidetect9 /= Math.max(5, 2 - parseInt(`${mail9}`));
         mail9 += parseFloat(`${parseInt(`${textinputU}`)}`);
      for (let n = 0; n < 3; n++) {
          let refreshy: Map<any, any> = new Map([[String.fromCharCode(121,117,118,116,101,115,116,0),592], [String.fromCharCode(115,116,97,103,101,0),85], [String.fromCharCode(103,117,97,114,97,110,116,101,101,0),391]]);
          let iconsubssuccessa = 1.0;
          let cornershootc: Array<any> = [115, 722, 223];
         abidetect9 += parseInt(`${iconsubssuccessa}`) % (Math.max(parseInt(`${scoreD}`), 7));
         refreshy = new Map([[`${refreshy.size}`, refreshy.size]]);
         iconsubssuccessa += cornershootc.length + 2;
         cornershootc = [2 * refreshy.size];
      }
      if (1.23 >= (scoreD + abidetect9) && 1.64 >= (1.23 + abidetect9)) {
          let mnewarchdefaultst = 4.0;
          let smallbrightnessK = String.fromCharCode(101,110,99,114,121,112,116,0);
          let executori = String.fromCharCode(117,110,100,101,114,102,108,111,119,0);
          let penaltyv = 5;
         scoreD *= parseFloat(`${parseInt(`${scoreD}`) % (Math.max(10, smallbrightnessK.length))}`);
         mnewarchdefaultst /= Math.max(parseFloat(`${executori.length - parseInt(`${mnewarchdefaultst}`)}`), 4);
         smallbrightnessK += `${executori.length}`;
         penaltyv ^= 3 ^ parseInt(`${mnewarchdefaultst}`);
      }
       let footballtrophyf = false;
          let wifirouterj: Array<any> = [54, 626];
          let homeloadingw = 3.0;
          let stationsG = String.fromCharCode(101,115,99,97,112,101,100,0);
         abidetect9 *= 2;
         wifirouterj = [2];
         homeloadingw -= (parseFloat(`${stationsG == String.fromCharCode(68,0) ? parseInt(`${homeloadingw}`) : stationsG.length}`));
         scoreD -= parseFloat(`${parseInt(`${abidetect9}`) >> (Math.min(2, Math.abs(2)))}`);
      notificationZ = default_xt.length == 32;
   if (currentA == eyecloseZ) {
      eyecloseZ = "2";
   }
   for (let i = 0; i < 3; i++) {
      currentA = `${2 + textlayoutmanagerr.length}`;
   }

    brightShare.value = await SystemSetting.getAppBrightness();

      libfbV = "3";
   let popupe = 8255822 <= descu.size;
   do {
      descu = new Map([[default_xt, (String.fromCharCode(55,0) == eyecloseZ ? eyecloseZ.length : default_xt.length)]]);
      if (popupe) {
         break;
      }
   } while (popupe && ((descu.size % (Math.max(1, 3))) > 5 && 1 > descu.size));
   while (4.14 < (greenS + 1.67)) {
      greenS /= Math.max(5, 1 >> (Math.min(3, currentA.length)));
      break;
   }
   let tickedM = 7425176 <= libfbV.length;
   do {
      libfbV = `${2 & libfbV.length}`;
      if (tickedM) {
         break;
      }
   } while (tickedM && ((libfbV.length | leaguev.length) >= 2 && 3 >= (libfbV.length | 2)));
   if (imagemanagery.length < currentA.length) {
      imagemanagery += `${((downloadu ? 5 : 5))}`;
   }
      leaguev = [currentA.length];
      default_xt = `${2 + parseInt(`${greenS}`)}`;
   for (let x = 0; x < 3; x++) {
      greenS *= (countdownt - (middlewareJ ? 1 : 4));
   }
   if (!default_xt.includes(`${middlewareJ}`)) {
      middlewareJ = imagemanagery == String.fromCharCode(55,0);
   }
   let playercommona = countdownt >= 8688753;
   do {
       let giflivestreamingb: Array<any> = [String.fromCharCode(97,115,121,110,99,104,114,111,110,111,117,115,0), String.fromCharCode(101,95,52,0), String.fromCharCode(116,112,101,108,100,115,112,0)];
       let favicon7 = String.fromCharCode(109,97,116,99,104,101,100,95,52,95,49,54,0);
       let reducerE = String.fromCharCode(104,97,110,100,108,101,115,0);
       let reactT = String.fromCharCode(119,115,97,117,100,0);
         reactT += "1";
      for (let x = 0; x < 2; x++) {
         reactT += `${reactT.length}`;
      }
          let componentsB = String.fromCharCode(116,101,120,105,100,101,112,0);
          let footballfiledlayoutl = 4.0;
         reducerE = "1";
         componentsB += `${parseInt(`${footballfiledlayoutl}`) % (Math.max(componentsB.length, 10))}`;
         footballfiledlayoutl -= parseFloat(`${1}`);
          let leaguedetailsbgF = true;
         favicon7 = `${reactT.length << (Math.min(Math.abs(2), 3))}`;
       let giflivestreamingx = 1;
         favicon7 = "1";
      let dacccfaabfbcbadeebddcabacdffdbV = 5965309 >= giflivestreamingx;
      do {
          let changeJ = 4;
          let confirmationF = 0.0;
          let release_lnH = String.fromCharCode(102,117,122,122,0);
          let bellZ: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,110,103,116,104,0),256], [String.fromCharCode(112,117,98,108,105,115,104,101,114,0),495]]);
         giflivestreamingx *= 3 | release_lnH.length;
         changeJ ^= parseInt(`${confirmationF}`);
         confirmationF += 3;
         release_lnH = `${changeJ & parseInt(`${confirmationF}`)}`;
         bellZ = new Map([[`${bellZ.size}`, bellZ.size]]);
         if (dacccfaabfbcbadeebddcabacdffdbV) {
            break;
         }
      } while (dacccfaabfbcbadeebddcabacdffdbV && (4 <= (giflivestreamingx + 3) || (3 + giflivestreamingb.length) <= 5));
         giflivestreamingb.push((String.fromCharCode(99,0) == favicon7 ? giflivestreamingb.length : favicon7.length));
      for (let u = 0; u < 2; u++) {
          let imagewatchliveQ: Map<any, any> = new Map([[String.fromCharCode(102,108,101,120,102,101,99,0),133], [String.fromCharCode(115,112,114,105,116,101,115,95,119,95,49,50,0),612], [String.fromCharCode(119,109,118,100,115,112,0),506]]);
         favicon7 = `${(reactT == String.fromCharCode(82,0) ? reactT.length : giflivestreamingx)}`;
         imagewatchliveQ = new Map([[`${imagewatchliveQ.size}`, imagewatchliveQ.size]]);
      }
         reactT = `${3 >> (Math.min(4, giflivestreamingb.length))}`;
      for (let o = 0; o < 1; o++) {
         reactT += `${(favicon7 == String.fromCharCode(80,0) ? giflivestreamingb.length : favicon7.length)}`;
      }
          let championR: Array<any> = [537, 883];
          let switch_23 = String.fromCharCode(115,104,111,114,116,101,110,0);
          let resultg = 5.0;
         reducerE = `${reactT.length}`;
         championR.push(championR.length);
         switch_23 += `${2 + parseInt(`${resultg}`)}`;
         resultg += parseFloat(`${2 - parseInt(`${resultg}`)}`);
      countdownt += parseInt(`${greenS}`);
      if (playercommona) {
         break;
      }
   } while ((downloadu) && playercommona);
   while (middlewareJ) {
       let basketballawayteama = String.fromCharCode(102,105,112,115,95,113,95,52,52,0);
       let assetsf = 2;
       let arrowupb = String.fromCharCode(97,108,108,114,103,98,0);
       let member7 = 1.0;
      if ((member7 / (Math.max(2, parseFloat(`${arrowupb.length}`)))) >= 3.75 || 4 >= (arrowupb.length & 2)) {
         arrowupb += `${2 / (Math.max(6, parseInt(`${member7}`)))}`;
      }
         member7 /= Math.max(5, parseFloat(`${assetsf}`));
          let stationsQ = String.fromCharCode(117,95,53,48,95,115,110,97,112,115,104,111,116,116,101,114,0);
          let libreactperfloggerjniP = true;
          let showc: Map<any, any> = new Map([[String.fromCharCode(115,110,97,112,0),true ], [String.fromCharCode(110,95,53,56,95,108,105,110,107,115,0),false ]]);
         member7 /= Math.max(5, parseFloat(`${stationsQ.length - assetsf}`));
         stationsQ = `${((libreactperfloggerjniP ? 3 : 5) * 3)}`;
         libreactperfloggerjniP = showc.get(`${libreactperfloggerjniP}`) == null;
         showc.set(`${libreactperfloggerjniP}`, showc.size);
          let blackf: Map<any, any> = new Map([[String.fromCharCode(107,95,54,54,95,99,121,99,108,101,115,0),true ], [String.fromCharCode(115,117,110,114,105,115,101,115,101,116,0),false ]]);
          let typesg = 3.0;
          let notificationgray6 = 0;
         member7 += (parseFloat(`${String.fromCharCode(49,0) == basketballawayteama ? basketballawayteama.length : arrowupb.length}`));
         blackf.set(`${notificationgray6}`, blackf.size);
         typesg *= notificationgray6 >> (Math.min(Math.abs(blackf.size), 5));
      while (4 >= (4 * arrowupb.length)) {
         member7 /= Math.max(2, parseFloat(`${parseInt(`${member7}`) % 1}`));
         break;
      }
          let shootnogoalX = String.fromCharCode(110,116,102,115,0);
          let profileT = 1.0;
         assetsf -= parseInt(`${profileT}`) - basketballawayteama.length;
         shootnogoalX += "2";
         profileT *= (String.fromCharCode(97,0) == shootnogoalX ? shootnogoalX.length : shootnogoalX.length);
      for (let s = 0; s < 3; s++) {
          let dependenciesm = 3.0;
          let sport_ = 3;
          let fulli = 1.0;
          let greenD = 5.0;
          let screenx: Array<any> = [25, 515];
         basketballawayteama += "2";
         dependenciesm *= parseFloat(`${parseInt(`${fulli}`)}`);
         sport_ &= parseInt(`${greenD}`) | screenx.length;
         fulli *= screenx.length + 3;
         greenD /= Math.max(parseFloat(`${1}`), 5);
      }
       let flipperv = 4.0;
       let lightq = 4.0;
          let libpangleflippedx: Map<any, any> = new Map([[String.fromCharCode(115,99,97,110,110,101,100,0),String.fromCharCode(99,117,115,116,111,109,105,122,101,114,0)], [String.fromCharCode(105,109,109,101,100,105,97,116,101,115,105,103,110,97,108,95,55,95,52,48,0),String.fromCharCode(104,99,115,99,97,108,101,0)], [String.fromCharCode(104,101,97,114,98,101,97,116,95,111,95,56,52,0),String.fromCharCode(99,102,116,115,116,0)]]);
         flipperv += 1;
         libpangleflippedx.set(`${libpangleflippedx.size}`, 2);
      while (4 <= (assetsf - 3)) {
         assetsf %= Math.max(1, arrowupb.length / (Math.max(2, parseInt(`${member7}`))));
         break;
      }
          let icondownimgn = 3.0;
         member7 *= parseFloat(`${assetsf / (Math.max(parseInt(`${flipperv}`), 9))}`);
         icondownimgn *= parseFloat(`${parseInt(`${icondownimgn}`) / (Math.max(parseInt(`${icondownimgn}`), 1))}`);
      while (2 == assetsf) {
          let largex = String.fromCharCode(115,117,98,101,120,112,114,0);
         arrowupb += `${2 ^ assetsf}`;
         largex = `${(String.fromCharCode(118,0) == largex ? largex.length : largex.length)}`;
         break;
      }
      default_xt += `${parseInt(`${greenS}`)}`;
      break;
   }
      downloadu = textlayoutmanagerr.length < countdownt;
      leaguev = [((downloadu ? 5 : 1))];
       let clockF = 0;
       let redcirclebgR = 4;
       let watchU = String.fromCharCode(102,95,49,54,95,103,98,114,97,112,0);
      if (2 > (watchU.length * 2) && (watchU.length * 2) > 1) {
          let applee: Array<any> = [771, 576, 760];
          let ajaxd = String.fromCharCode(107,101,121,115,116,111,114,101,0);
          let reviewn = 0.0;
          let backZ = 0;
         redcirclebgR ^= clockF;
         applee = [3 / (Math.max(1, ajaxd.length))];
         ajaxd = "1";
         reviewn -= parseFloat(`${1}`);
         backZ %= Math.max(4, 3);
      }
          let controlsW = 2.0;
         redcirclebgR >>= Math.min(Math.abs(1), 1);
         controlsW += parseInt(`${controlsW}`);
         clockF /= Math.max(clockF, 4);
          let themeU: Map<any, any> = new Map([[String.fromCharCode(103,101,116,97,115,115,111,99,105,100,0),253], [String.fromCharCode(114,97,110,100,111,109,0),632], [String.fromCharCode(115,117,98,112,97,99,107,101,116,0),675]]);
          let fastN: Array<any> = [384, 418];
          let const_7y: Map<any, any> = new Map([[String.fromCharCode(101,118,101,114,121,111,110,101,0),206], [String.fromCharCode(114,101,115,116,0),261], [String.fromCharCode(112,115,100,115,112,95,111,95,50,54,0),195]]);
         redcirclebgR |= 1 & themeU.size;
         themeU = new Map([[`${const_7y.size}`, 3 * const_7y.size]]);
         fastN = [fastN.length];
       let matchactiveM: Array<any> = [369, 89];
         watchU += `${redcirclebgR}`;
          let giftbuttonu: Array<any> = [890, 870, 734];
          let floaterl = String.fromCharCode(98,101,110,99,104,115,0);
          let imagewatchlive7 = 1.0;
         watchU = `${(String.fromCharCode(71,0) == floaterl ? floaterl.length : parseInt(`${imagewatchlive7}`))}`;
         giftbuttonu.push(giftbuttonu.length ^ 1);
      if (watchU.includes(`${redcirclebgR}`)) {
          let jingdongb: Array<any> = [380, 119];
          let baiduadso = 2;
          let playlisto = String.fromCharCode(118,111,105,99,101,115,0);
         redcirclebgR /= Math.max(3 % (Math.max(9, redcirclebgR)), 3);
         jingdongb.push(jingdongb.length);
         baiduadso /= Math.max(jingdongb.length, 5);
         playlisto = `${jingdongb.length}`;
      }
       let optionsh = String.fromCharCode(97,116,104,0);
       let textj = String.fromCharCode(112,102,102,102,116,0);
      middlewareJ = (57 > ((downloadu ? eyecloseZ.length : 57) * eyecloseZ.length));
      currentA += `${default_xt.length & libfbV.length}`;
       let footballfiledlayoutE = 1.0;
       let acceptedu = 0.0;
         acceptedu += 2;
         footballfiledlayoutE -= parseInt(`${footballfiledlayoutE}`) | parseInt(`${acceptedu}`);
      for (let f = 0; f < 2; f++) {
          let componentsq = String.fromCharCode(99,97,100,101,110,99,101,0);
          let side7 = 4.0;
         acceptedu += 1;
         componentsq = `${2 >> (Math.min(3, Math.abs(parseInt(`${side7}`))))}`;
         side7 /= Math.max((parseFloat(`${String.fromCharCode(98,0) == componentsq ? componentsq.length : parseInt(`${side7}`)}`)), 3);
      }
      if (acceptedu == 1.53) {
         acceptedu *= 1 % (Math.max(parseInt(`${footballfiledlayoutE}`), 7));
      }
       let linkE = 5;
       let confirmationi = false;
      sellt += parseFloat(`${1}`);
      downloadu = 69 > eyecloseZ.length;
   if (2 > countdownt) {
       let teamr: Map<any, any> = new Map([[String.fromCharCode(118,105,115,117,97,108,108,121,0),false ], [String.fromCharCode(111,95,54,48,95,97,99,107,100,114,111,112,0),false ], [String.fromCharCode(100,101,100,117,112,101,0),true ]]);
       let libfolly2 = 0.0;
       let libfbG = String.fromCharCode(97,99,116,105,118,97,116,101,100,0);
       let connectionf = 0;
      if (3 < (teamr.size | 2)) {
         teamr = new Map([[`${teamr.size}`, 2 & teamr.size]]);
      }
      let iconeditF = String.fromCharCode(119,112,107,119,52,106,95,117,0) == libfbG;
      do {
         libfbG = `${1 * libfbG.length}`;
         if (iconeditF) {
            break;
         }
      } while ((4.28 <= (libfolly2 / 3.27) && 4 <= (parseInt(`${libfolly2}`) / 5)) && iconeditF);
      let classesY = libfbG == String.fromCharCode(56,55,49,95,113,115,0);
      do {
         libfbG += `${libfbG.length}`;
         if (classesY) {
            break;
         }
      } while (((connectionf + libfbG.length) <= 4 || 4 <= (connectionf + libfbG.length)) && classesY);
         libfolly2 -= parseFloat(`${parseInt(`${libfolly2}`)}`);
         libfbG += "1";
      while (2 < (teamr.size << (Math.min(Math.abs(3), 5))) && 3 < (connectionf << (Math.min(Math.abs(teamr.size), 5)))) {
         teamr.set(libfbG, connectionf | libfbG.length);
         break;
      }
      if ((1 & teamr.size) <= 4) {
          let invitea: Array<any> = [917, 91, 271];
         teamr = new Map([[`${teamr.size}`, 1]]);
         invitea = [invitea.length];
      }
      while (connectionf == libfolly2) {
         libfolly2 /= Math.max(parseFloat(`${3}`), 5);
         break;
      }
      if (2 == connectionf) {
         libfolly2 += parseFloat(`${libfbG.length}`);
      }
      let reminderm = libfbG == String.fromCharCode(121,110,105,97,117,49,106,100,106,113,0);
      do {
         libfbG = `${teamr.size % 1}`;
         if (reminderm) {
            break;
         }
      } while (reminderm && (1 == (3 >> (Math.min(2, libfbG.length))) && (4.76 + libfolly2) == 3.42));
          let playz = String.fromCharCode(115,99,111,112,101,100,95,103,95,51,51,0);
          let giflivestreamingn = false;
         libfolly2 *= parseFloat(`${connectionf}`);
         playz += `${playz.length ^ 1}`;
         giflivestreamingn = playz.length == 18;
         connectionf <<= Math.min(libfbG.length, 3);
      countdownt %= Math.max(default_xt.length >> (Math.min(3, eyecloseZ.length)), 5);
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
    setSettings({ name: "feedbackRefreshborderless", value: newVol });
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
       let orangetickn = String.fromCharCode(108,105,115,116,105,110,103,115,0);
    let placementr = 4.0;
    let project0 = 2.0;
    let signinupT = String.fromCharCode(99,104,97,110,103,101,95,50,95,50,57,0);
    let imagewatchliveL = String.fromCharCode(106,95,56,54,95,112,104,121,115,0);
    let mountingX = 2;
    let dycreatory = true;
    let gradlek: Map<any, any> = new Map([[String.fromCharCode(118,101,114,105,102,105,97,116,105,111,110,0),902], [String.fromCharCode(114,101,112,114,101,115,101,110,116,97,98,108,101,0),911], [String.fromCharCode(108,111,103,103,105,110,103,0),715]]);
    let tailz = 4.0;
   while (4 > orangetickn.length) {
      orangetickn += `${(orangetickn == String.fromCharCode(120,0) ? orangetickn.length : parseInt(`${placementr}`))}`;
      break;
   }
      placementr /= Math.max((parseFloat(`${signinupT == String.fromCharCode(69,0) ? signinupT.length : parseInt(`${placementr}`)}`)), 3);
      project0 -= (parseFloat(`${1 >> (Math.min(4, Math.abs((dycreatory ? 4 : 2))))}`));
   while ((project0 / (Math.max(8, mountingX))) < 5.49) {
      mountingX &= 2 << (Math.min(2, imagewatchliveL.length));
      break;
   }
      orangetickn = `${parseInt(`${placementr}`)}`;
      gradlek.set(`${mountingX}`, mountingX);
   let reactnativeratingsh = 8755994 >= gradlek.size;
   do {
      gradlek = new Map([[orangetickn, 2 % (Math.max(5, imagewatchliveL.length))]]);
      if (reactnativeratingsh) {
         break;
      }
   } while (((1 ^ gradlek.size) > 2) && reactnativeratingsh);
   for (let i = 0; i < 3; i++) {
      project0 *= parseFloat(`${parseInt(`${project0}`) & parseInt(`${placementr}`)}`);
   }
       let teamdetailsbg_ = String.fromCharCode(104,115,99,114,111,108,108,0);
      if (teamdetailsbg_.length <= teamdetailsbg_.length) {
         teamdetailsbg_ += "2";
      }
         teamdetailsbg_ = `${teamdetailsbg_.length % (Math.max(3, 2))}`;
       let starT = String.fromCharCode(114,95,55,51,0);
       let dacccfaabfbcbadeebddcabacdffdb6 = String.fromCharCode(118,111,98,115,117,98,0);
      project0 /= Math.max(3, parseFloat(`${mountingX << (Math.min(5, Math.abs(1)))}`));
   for (let j = 0; j < 2; j++) {
      tailz *= parseFloat(`${1 | gradlek.size}`);
   }
   for (let v = 0; v < 2; v++) {
       let defaultfootballbgX = String.fromCharCode(102,95,50,49,95,114,101,99,111,110,110,101,99,116,105,111,110,0);
       let rankP = String.fromCharCode(118,95,55,55,95,100,101,102,105,110,101,115,0);
         rankP += `${defaultfootballbgX.length << (Math.min(3, rankP.length))}`;
       let reminder0 = false;
         reminder0 = rankP.length < defaultfootballbgX.length;
         reminder0 = 35 <= rankP.length;
      while (reminder0 && 3 >= rankP.length) {
          let iconclosewhiteP = String.fromCharCode(115,117,98,100,97,116,97,0);
          let hookQ = String.fromCharCode(105,112,111,108,0);
          let temperaturej = 5.0;
          let v_centerj: Array<any> = [706, 42, 941];
          let eyeclose1 = String.fromCharCode(114,95,51,52,95,98,101,120,116,0);
         reminder0 = !eyeclose1.startsWith(`${reminder0}`);
         iconclosewhiteP += `${iconclosewhiteP.length ^ hookQ.length}`;
         hookQ += `${v_centerj.length | iconclosewhiteP.length}`;
         temperaturej /= Math.max(parseFloat(`${v_centerj.length}`), 1);
         eyeclose1 += `${iconclosewhiteP.length >> (Math.min(Math.abs(1), 5))}`;
         break;
      }
         rankP += `${rankP.length * defaultfootballbgX.length}`;
      tailz /= Math.max(4, parseFloat(`${3}`));
   }
   for (let j = 0; j < 2; j++) {
       let quest7: Map<any, any> = new Map([[String.fromCharCode(118,100,101,98,117,103,0),739], [String.fromCharCode(107,97,105,115,101,114,0),391], [String.fromCharCode(101,120,112,105,114,97,116,105,111,110,115,0),660]]);
      for (let j = 0; j < 2; j++) {
         quest7.set(`${quest7.size}`, quest7.size + 2);
      }
         quest7.set(`${quest7.size}`, quest7.size - 2);
         quest7 = new Map([[`${quest7.size}`, quest7.size]]);
      gradlek.set(`${orangetickn}`, 1);
   }
   let hoverQ = 9669125.0 >= tailz;
   do {
      tailz /= Math.max((parseFloat(`${(dycreatory ? 3 : 5) & 2}`)), 4);
      if (hoverQ) {
         break;
      }
   } while (hoverQ && (3.1 <= tailz));
       let libreactnativeblobr = false;
       let nativeS: Array<any> = [161, 654];
      for (let v = 0; v < 3; v++) {
          let mounting5: Map<any, any> = new Map([[String.fromCharCode(108,105,102,101,99,121,99,108,101,0),false ], [String.fromCharCode(111,95,49,57,95,111,102,102,105,99,105,97,108,0),true ]]);
          let libyoga3: Array<any> = [351, 196];
          let scorepopsoundq = String.fromCharCode(103,95,49,95,99,111,109,112,97,114,105,115,111,110,0);
         nativeS = [((libreactnativeblobr ? 2 : 4))];
         mounting5.set(scorepopsoundq, scorepopsoundq.length);
         libyoga3 = [1];
      }
      for (let d = 0; d < 2; d++) {
         libreactnativeblobr = !libreactnativeblobr;
      }
       let long_p3 = String.fromCharCode(115,121,109,0);
      let tumbnailR = libreactnativeblobr ? !libreactnativeblobr : libreactnativeblobr;
      do {
          let backiconB = String.fromCharCode(114,101,108,102,117,110,99,0);
          let proxyI = String.fromCharCode(115,121,110,99,119,111,114,100,115,0);
          let carouselW = String.fromCharCode(98,95,50,53,95,97,115,115,101,115,115,109,101,110,116,0);
          let sellZ: Map<any, any> = new Map([[String.fromCharCode(109,101,109,115,104,105,112,0),520], [String.fromCharCode(112,114,101,100,105,99,116,120,0),968], [String.fromCharCode(111,95,49,48,48,95,110,101,116,115,0),355]]);
         libreactnativeblobr = 13 == nativeS.length;
         backiconB = `${sellZ.size}`;
         proxyI += "2";
         carouselW = `${proxyI.length | backiconB.length}`;
         sellZ.set(proxyI, proxyI.length / (Math.max(3, 8)));
         if (tumbnailR) {
            break;
         }
      } while ((3 > long_p3.length) && tumbnailR);
         long_p3 = `${nativeS.length}`;
         libreactnativeblobr = nativeS.includes(libreactnativeblobr);
      mountingX %= Math.max(1, mountingX);
   for (let i = 0; i < 1; i++) {
       let reviews = 0.0;
       let logos = String.fromCharCode(110,95,53,51,95,108,111,116,115,0);
       let eacts = 0.0;
       let renewP = true;
      if ((reviews + 2.29) > 1.3) {
         logos += `${parseInt(`${reviews}`) + 3}`;
      }
      for (let m = 0; m < 3; m++) {
          let bodanx = String.fromCharCode(98,108,105,110,107,0);
         renewP = renewP && bodanx.length <= 34;
      }
         logos = `${((renewP ? 4 : 4) ^ parseInt(`${eacts}`))}`;
         renewP = 16.74 > eacts;
      let libswresample6 = logos.length >= 6280113;
      do {
          let middlesound7 = String.fromCharCode(115,101,103,109,101,110,116,101,100,0);
          let iconarrowrightwhite4 = true;
         logos += `${logos.length}`;
         middlesound7 = "3";
         iconarrowrightwhite4 = !iconarrowrightwhite4;
         if (libswresample6) {
            break;
         }
      } while (libswresample6 && (!logos.startsWith(`${eacts}`)));
         eacts += 2 << (Math.min(2, logos.length));
          let rewindT = String.fromCharCode(113,95,56,56,95,100,101,118,112,111,108,108,0);
          let selected0 = 0;
          let usernameZ: Map<any, any> = new Map([[String.fromCharCode(112,117,108,115,101,115,95,100,95,54,54,0),150], [String.fromCharCode(97,108,108,111,99,97,116,105,111,110,0),730]]);
         eacts /= Math.max(1, parseInt(`${reviews}`) / (Math.max(2, rewindT.length)));
         rewindT += `${usernameZ.size}`;
         selected0 |= usernameZ.size;
          let customf: Array<any> = [588, 327, 991];
          let carousel_ = 1;
          let o_countn = 0.0;
         reviews -= parseFloat(`${3 - carousel_}`);
         customf = [2 * parseInt(`${o_countn}`)];
         carousel_ <<= Math.min(4, Math.abs(parseInt(`${o_countn}`)));
          let gmaila = String.fromCharCode(97,117,116,111,112,108,97,121,105,110,103,0);
          let sellq = 1;
          let redscoreball2 = 1;
         renewP = logos.startsWith(`${redscoreball2}`);
         gmaila += "1";
         sellq >>= Math.min(gmaila.length, 5);
         redscoreball2 += 3 ^ gmaila.length;
      for (let c = 0; c < 2; c++) {
          let materialA = String.fromCharCode(117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,0);
          let detailsw = false;
          let recommendationv: Array<any> = [227, 724];
          let goallogoi = 3;
         renewP = reviews <= eacts;
         materialA += `${1 * recommendationv.length}`;
         detailsw = !detailsw;
         recommendationv = [1];
         goallogoi ^= materialA.length;
      }
      if (eacts < reviews) {
          let changeF = true;
          let commentC = false;
          let downL = 1;
          let soundU = 1.0;
          let canvas9: Array<any> = [294, 194, 879];
         eacts *= ((renewP ? 5 : 3) % 3);
         changeF = downL <= 70;
         commentC = downL > 78 && changeF;
         soundU /= Math.max((parseFloat(`${parseInt(`${soundU}`) + (changeF ? 3 : 4)}`)), 4);
         canvas9 = [downL];
      }
      if (reviews == 4.80) {
         reviews *= parseFloat(`${parseInt(`${eacts}`) / 3}`);
      }
      tailz += parseFloat(`${gradlek.size * 1}`);
   }
   while (2.22 <= (placementr / 1.31) || 1.64 <= (placementr / 1.31)) {
      tailz -= parseFloat(`${gradlek.size}`);
      break;
   }
      project0 *= parseFloat(`${3}`);
      signinupT = `${parseInt(`${project0}`) / (Math.max(1, 5))}`;
   if (!dycreatory) {
      dycreatory = (orangetickn.length + parseInt(`${placementr}`)) == 53;
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
              (settings.name === "none" || settings.name === "feedbackRefreshborderless")
            ) {
              runOnJS(onVolumeChanged)(
                nativeEvent.y,
                previousPanPosition.value.y
              );
            }
          } else if (
            absDyDx < 0.05 &&
            vodType !== "owngoalIconeye" &&
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
       let subbasketballplayerh = 0;
    let dataU = String.fromCharCode(112,114,101,115,101,110,99,101,115,0);
    let libswscale8: Map<any, any> = new Map([[String.fromCharCode(99,108,97,105,109,115,0),114], [String.fromCharCode(111,112,116,105,111,110,97,108,108,121,0),792], [String.fromCharCode(115,119,105,102,116,121,0),823]]);
    let greyarrowupj = 5.0;
    let uinit_fhU: Array<any> = [777, 179, 465];
    let fullscreenmaxe: Map<any, any> = new Map([[String.fromCharCode(103,114,111,117,110,100,0),false ], [String.fromCharCode(104,95,51,95,97,117,116,111,99,111,109,109,105,116,0),true ], [String.fromCharCode(114,101,115,117,108,117,116,105,111,110,0),true ]]);
    let form9 = 2.0;
    let distR: Map<any, any> = new Map([[String.fromCharCode(114,111,116,97,116,105,111,110,95,99,95,52,55,0),986], [String.fromCharCode(112,97,121,101,101,95,99,95,53,55,0),44]]);
    let imagemanagerK: Array<any> = [697, 518];
    let largebrightnessE: Array<any> = [929, 458, 874];
    let nodeb: Array<any> = [130, 68];
    let iconbackwhiteT = 2.0;
    let reward2 = true;
       let klevinx: Map<any, any> = new Map([[String.fromCharCode(115,116,114,108,99,112,121,0),30], [String.fromCharCode(114,119,103,116,0),561]]);
       let string1 = String.fromCharCode(98,116,110,99,108,105,99,107,0);
       let iconclosewhitet = String.fromCharCode(118,111,112,101,110,95,119,95,53,49,0);
      for (let k = 0; k < 2; k++) {
          let rewardR = String.fromCharCode(100,117,114,103,101,114,107,105,110,103,0);
          let championW = 4;
          let h_playerO = 3.0;
         string1 += "3";
         rewardR += `${rewardR.length}`;
         championW %= Math.max(3, championW);
         h_playerO += parseFloat(`${2 / (Math.max(parseInt(`${h_playerO}`), 5))}`);
      }
          let gnewarchdefaultsP: Map<any, any> = new Map([[String.fromCharCode(116,95,49,56,95,112,108,97,110,101,100,0),false ], [String.fromCharCode(120,121,119,104,0),true ]]);
          let iconbackwhitep = 2.0;
          let adultn = false;
         string1 = `${((adultn ? 1 : 2) / (Math.max(parseInt(`${iconbackwhitep}`), 2)))}`;
         gnewarchdefaultsP = new Map([[`${gnewarchdefaultsP.size}`, gnewarchdefaultsP.size]]);
         iconbackwhitep *= parseFloat(`${3}`);
         iconclosewhitet += "1";
      for (let u = 0; u < 3; u++) {
         iconclosewhitet = `${(String.fromCharCode(104,0) == string1 ? string1.length : klevinx.size)}`;
      }
      for (let e = 0; e < 2; e++) {
         klevinx.set(iconclosewhitet, iconclosewhitet.length);
      }
      if ((2 - klevinx.size) >= 3 && (klevinx.size - 2) >= 3) {
          let componentC = false;
          let splashK = 4.0;
         klevinx.set(`${iconclosewhitet}`, klevinx.size);
         componentC = 49.25 <= splashK || !componentC;
         splashK += parseFloat(`${parseInt(`${splashK}`) ^ 1}`);
      }
       let basketballdetailsbgW = String.fromCharCode(106,99,104,117,102,102,95,105,95,56,48,0);
       let backwardT = String.fromCharCode(109,97,105,110,110,101,116,0);
      if ((3 >> (Math.min(5, string1.length))) >= 3 && (string1.length >> (Math.min(1, Math.abs(klevinx.size)))) >= 3) {
         string1 = `${klevinx.size}`;
      }
         basketballdetailsbgW = "2";
      distR = new Map([[`${nodeb.length}`, nodeb.length / (Math.max(9, imagemanagerK.length))]]);
   while (!Array.from(fullscreenmaxe.keys()).includes(`${subbasketballplayerh}`)) {
       let backwardV = 0.0;
      while ((backwardV / (Math.max(2, 10))) < 1.8) {
         backwardV += parseFloat(`${parseInt(`${backwardV}`)}`);
         break;
      }
         backwardV *= parseFloat(`${parseInt(`${backwardV}`) - 1}`);
      while ((2.38 - backwardV) == 4.32) {
         backwardV += parseFloat(`${2}`);
         break;
      }
      fullscreenmaxe = new Map([[`${backwardV}`, parseInt(`${backwardV}`)]]);
      break;
   }
      nodeb = [3];
   for (let b = 0; b < 1; b++) {
       let qaagU: Map<any, any> = new Map([[String.fromCharCode(112,95,54,53,95,99,111,118,101,114,97,103,101,0),String.fromCharCode(99,97,117,115,101,0)], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,105,111,110,0),String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,115,0)]]);
       let predictionwinD = String.fromCharCode(98,114,111,119,115,101,0);
       let mintegrali = String.fromCharCode(115,112,111,116,108,105,103,104,116,95,109,95,50,48,0);
       let iconarrowrightblackp = 3.0;
         iconarrowrightblackp += parseInt(`${iconarrowrightblackp}`);
      for (let k = 0; k < 2; k++) {
         mintegrali = "3";
      }
         mintegrali = `${3 & qaagU.size}`;
         predictionwinD += `${mintegrali.length & 2}`;
         predictionwinD += `${predictionwinD.length ^ 2}`;
      while (!mintegrali.includes(`${qaagU.size}`)) {
         qaagU.set(predictionwinD, predictionwinD.length * 3);
         break;
      }
      while (mintegrali == String.fromCharCode(90,0) && predictionwinD != String.fromCharCode(82,0)) {
         predictionwinD += `${qaagU.size}`;
         break;
      }
       let reward_: Array<any> = [String.fromCharCode(104,116,109,108,115,117,98,116,105,116,108,101,115,95,55,95,51,50,0), String.fromCharCode(115,105,110,100,101,120,0)];
         reward_ = [1 | qaagU.size];
          let zhubor = String.fromCharCode(106,95,51,53,95,114,101,110,100,101,114,101,100,0);
          let distl = 4.0;
         mintegrali = `${reward_.length}`;
         zhubor = `${parseInt(`${distl}`) << (Math.min(zhubor.length, 1))}`;
         distl += 1 | parseInt(`${distl}`);
      for (let c = 0; c < 3; c++) {
         qaagU = new Map([[mintegrali, mintegrali.length]]);
      }
         reward_ = [parseInt(`${iconarrowrightblackp}`)];
      fullscreenmaxe = new Map([[`${qaagU.size}`, qaagU.size & 2]]);
   }
   if (Array.from(distR.values()).includes(fullscreenmaxe.size)) {
      distR.set(`${imagemanagerK.length}`, imagemanagerK.length);
   }
       let indexW = 3.0;
       let profile0 = 0.0;
      for (let y = 0; y < 3; y++) {
         profile0 -= parseFloat(`${parseInt(`${indexW}`)}`);
      }
         indexW += 2;
          let arrowupK: Map<any, any> = new Map([[String.fromCharCode(115,101,103,109,97,112,0),295], [String.fromCharCode(115,108,117,114,112,0),685], [String.fromCharCode(98,115,119,97,112,100,115,112,0),952]]);
         profile0 /= Math.max(4, parseFloat(`${1 + parseInt(`${indexW}`)}`));
         arrowupK = new Map([[`${arrowupK.size}`, arrowupK.size - 1]]);
         indexW *= parseInt(`${indexW}`) % (Math.max(9, parseInt(`${profile0}`)));
      for (let w = 0; w < 3; w++) {
         profile0 /= Math.max(5, parseFloat(`${parseInt(`${profile0}`) & parseInt(`${indexW}`)}`));
      }
      while (1.6 < (profile0 / (Math.max(indexW, 1))) && 1.6 < (profile0 / (Math.max(indexW, 5)))) {
         indexW -= parseInt(`${indexW}`) % (Math.max(parseInt(`${profile0}`), 4));
         break;
      }
      distR.set(`${largebrightnessE.length}`, fullscreenmaxe.size ^ 2);
   if (dataU.includes(`${libswscale8.size}`)) {
      libswscale8 = new Map([[`${nodeb.length}`, nodeb.length ^ largebrightnessE.length]]);
   }
   if (!Array.from(fullscreenmaxe.keys()).includes(`${uinit_fhU.length}`)) {
      uinit_fhU = [3 / (Math.max(6, parseInt(`${form9}`)))];
   }
       let codegenp = String.fromCharCode(117,110,98,111,120,101,100,95,119,95,52,50,0);
       let tumbnailZ = false;
         tumbnailZ = !tumbnailZ;
      while (!codegenp.endsWith(`${tumbnailZ}`)) {
         codegenp += `${(3 >> (Math.min(5, Math.abs((tumbnailZ ? 4 : 5)))))}`;
         break;
      }
      while (!codegenp.startsWith(`${tumbnailZ}`)) {
         tumbnailZ = codegenp.length < 20;
         break;
      }
       let modulesD: Array<any> = [302, 437, 417];
          let singleH = String.fromCharCode(118,108,111,103,0);
          let attributedstringz = String.fromCharCode(115,117,114,102,97,99,101,115,0);
          let t_positiong = String.fromCharCode(116,104,105,99,107,110,101,115,115,0);
         modulesD = [attributedstringz.length];
         singleH = "3";
         attributedstringz = `${singleH.length}`;
         t_positiong = `${singleH.length}`;
         tumbnailZ = !tumbnailZ;
      greyarrowupj += 3;
   if ((3.38 * greyarrowupj) <= 1.27 && 2 <= (parseInt(`${greyarrowupj}`) * libswscale8.size)) {
       let whistleorangeA = 0.0;
      while (whistleorangeA == whistleorangeA) {
         whistleorangeA += parseFloat(`${parseInt(`${whistleorangeA}`)}`);
         break;
      }
         whistleorangeA -= parseFloat(`${parseInt(`${whistleorangeA}`) / (Math.max(6, parseInt(`${whistleorangeA}`)))}`);
       let countryo = 5.0;
      greyarrowupj += nodeb.length;
   }

      if (!isDoubleTap.value) {

   if ((4 << (Math.min(2, dataU.length))) == 3 && 4 == (nodeb.length << (Math.min(dataU.length, 5)))) {
      nodeb.push(dataU.length);
   }
      imagemanagerK.push(3);
      dataU += `${uinit_fhU.length >> (Math.min(Math.abs(3), 2))}`;
   for (let j = 0; j < 2; j++) {
       let topicI = String.fromCharCode(112,95,51,51,95,97,99,113,117,97,110,116,0);
          let homeiconZ: Map<any, any> = new Map([[String.fromCharCode(102,108,97,99,100,97,116,97,0),687], [String.fromCharCode(116,114,101,101,0),628], [String.fromCharCode(108,117,116,100,0),271]]);
          let update_jJ = String.fromCharCode(102,95,50,51,95,112,114,101,98,117,102,0);
         topicI = `${homeiconZ.size}`;
         homeiconZ = new Map([[update_jJ, update_jJ.length << (Math.min(update_jJ.length, 1))]]);
         topicI += `${(topicI == String.fromCharCode(106,0) ? topicI.length : topicI.length)}`;
       let searchbarl = true;
       let desc_ = true;
      subbasketballplayerh *= parseInt(`${iconbackwhiteT}`) - 1;
   }
       let librrcF = 2.0;
          let baseW = String.fromCharCode(99,114,101,97,116,105,110,103,0);
          let gesturesc = String.fromCharCode(99,111,109,112,108,101,109,101,110,116,0);
         librrcF *= parseInt(`${librrcF}`);
         baseW += `${gesturesc.length - baseW.length}`;
         gesturesc = `${gesturesc.length / (Math.max(baseW.length, 6))}`;
      for (let s = 0; s < 2; s++) {
          let pointU = String.fromCharCode(112,105,112,101,108,105,110,105,110,103,95,111,95,57,0);
          let defaultlogoN: Array<any> = [393, 722, 551];
          let twitterN = String.fromCharCode(110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,0);
         librrcF *= 1 & pointU.length;
         pointU = `${twitterN.length}`;
         defaultlogoN.push(3 * defaultlogoN.length);
         twitterN += `${3 - defaultlogoN.length}`;
      }
         librrcF += parseInt(`${librrcF}`) & 2;
      imagemanagerK = [imagemanagerK.length];
   while (5 >= (uinit_fhU.length * dataU.length)) {
      dataU += `${dataU.length >> (Math.min(Math.abs(2), 4))}`;
      break;
   }
   for (let f = 0; f < 1; f++) {
      libswscale8 = new Map([[`${distR.size}`, imagemanagerK.length | 2]]);
   }
      uinit_fhU.push(largebrightnessE.length >> (Math.min(imagemanagerK.length, 5)));
      uinit_fhU = [uinit_fhU.length & 2];
      greyarrowupj *= 1 << (Math.min(3, imagemanagerK.length));
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
                  icon={settings.value === 0 ? "bellActionsNews" : "mailPauseOthermatchdetailbg"}
                />
              )}
              {showSlider && settings.name === "feedbackRefreshborderless" && (
                <BrightnessVolumeSlider
                  percent={settings.value * 100}
                  icon={settings.value === 0 ? "libyogaGesturesSubs" : "subinStatsnomoredata"}
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
                icon={settings.value === 0 ? "bellActionsNews" : "mailPauseOthermatchdetailbg"}
              />
            )}
            {showSlider && settings.name === "feedbackRefreshborderless" && (
              <BrightnessVolumeSlider
                percent={settings.value * 100}
                icon={settings.value === 0 ? "libyogaGesturesSubs" : "subinStatsnomoredata"}
              />
            )}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
