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
       let checkbox4 = 1;
    let nativeexe: Array<any> = [221, 930, 393];
    let hiadS: Array<any> = [964, 104];
    let editm = 2;
    let mbnativeadvancedt: Map<any, any> = new Map([[String.fromCharCode(115,101,115,115,105,111,110,105,100,95,53,95,51,51,0),288], [String.fromCharCode(108,95,55,54,95,99,111,110,116,105,110,117,101,0),584], [String.fromCharCode(106,95,53,55,95,113,115,111,114,116,0),32]]);
    let gradlewD = 5.0;
    let albumP = String.fromCharCode(107,95,56,48,95,98,108,111,99,107,115,0);
    let searchS = 3.0;
    let fullscreenmin_ = 1.0;
    let inactivew = false;
      editm |= editm;
   let leaguedetailsbgw = hiadS.length <= 6967688;
   do {
      hiadS.push(parseInt(`${searchS}`));
      if (leaguedetailsbgw) {
         break;
      }
   } while (leaguedetailsbgw && ((4 + albumP.length) <= 2 && 4 <= (albumP.length + hiadS.length)));
      nativeexe = [mbnativeadvancedt.size];
      mbnativeadvancedt = new Map([[`${nativeexe.length}`, 3]]);
      fullscreenmin_ /= Math.max(parseInt(`${fullscreenmin_}`) + 1, 3);
      editm >>= Math.min(5, Math.abs(hiadS.length - parseInt(`${gradlewD}`)));
   while (4 == (editm >> (Math.min(nativeexe.length, 1)))) {
      nativeexe.push(nativeexe.length & 3);
      break;
   }

    setShowSlider(true);

      gradlewD += parseFloat(`${3}`);
   if ((hiadS.length * editm) > 4) {
      editm |= checkbox4 >> (Math.min(Math.abs(parseInt(`${fullscreenmin_}`)), 2));
   }
      mbnativeadvancedt.set(`${hiadS.length}`, nativeexe.length << (Math.min(Math.abs(2), 5)));
       let whitevideolivet = 5;
      if ((whitevideolivet % (Math.max(5, whitevideolivet))) >= 3 && (3 % (Math.max(7, whitevideolivet))) >= 3) {
         whitevideolivet -= 1 - whitevideolivet;
      }
      if (1 == (3 >> (Math.min(3, Math.abs(whitevideolivet)))) || 2 == (3 >> (Math.min(2, Math.abs(whitevideolivet))))) {
         whitevideolivet ^= whitevideolivet ^ 3;
      }
       let iconsetting8 = String.fromCharCode(117,95,52,57,95,113,115,99,97,108,101,0);
       let forme = String.fromCharCode(116,111,107,101,110,105,122,101,100,95,100,95,54,49,0);
      nativeexe.push(parseInt(`${gradlewD}`) & whitevideolivet);
      nativeexe.push(albumP.length ^ hiadS.length);
       let airbnbstarn = 0.0;
      for (let q = 0; q < 3; q++) {
         airbnbstarn -= 1 << (Math.min(Math.abs(parseInt(`${airbnbstarn}`)), 5));
      }
         airbnbstarn /= Math.max(4, parseInt(`${airbnbstarn}`) & parseInt(`${airbnbstarn}`));
         airbnbstarn *= 3;
      albumP += `${checkbox4}`;
   while (gradlewD >= 2.15) {
      gradlewD += parseFloat(`${3}`);
      break;
   }
    clearTimeout(sliderTimeout.current);

      fullscreenmin_ += 2;
   for (let m = 0; m < 1; m++) {
      mbnativeadvancedt.set(`${checkbox4}`, 3 >> (Math.min(Math.abs(parseInt(`${fullscreenmin_}`)), 3)));
   }
      nativeexe.push(hiadS.length);
   while (4.18 >= fullscreenmin_) {
       let iconwatchY: Array<any> = [188, 880, 416];
         iconwatchY = [2];
      let bridgel = iconwatchY.length <= 8575855;
      do {
          let robotod = 4.0;
         iconwatchY.push(iconwatchY.length + parseInt(`${robotod}`));
         if (bridgel) {
            break;
         }
      } while (bridgel && (iconwatchY.length <= iconwatchY.length));
       let images2 = 0.0;
       let awayiconu = 4.0;
      editm += nativeexe.length;
      break;
   }
      gradlewD -= parseFloat(`${editm}`);
   for (let j = 0; j < 2; j++) {
      albumP = "2";
   }
   let saveX = nativeexe.length <= 4943584;
   do {
      nativeexe = [1 << (Math.min(5, hiadS.length))];
      if (saveX) {
         break;
      }
   } while ((nativeexe.includes(checkbox4)) && saveX);
    sliderTimeout.current = setTimeout(() => {

      mbnativeadvancedt = new Map([[`${gradlewD}`, parseInt(`${fullscreenmin_}`)]]);
   if (4 == (editm / 1)) {
      fullscreenmin_ -= editm;
   }
   for (let i = 0; i < 2; i++) {
      fullscreenmin_ -= 1;
   }
      fullscreenmin_ -= albumP.length;
      albumP = `${checkbox4 ^ mbnativeadvancedt.size}`;
   let cornerN = 9027777 >= nativeexe.length;
   do {
       let bellg = 5.0;
       let codegenb = 0.0;
       let suboutx = 3;
       let umenge: Map<any, any> = new Map([[String.fromCharCode(113,117,97,100,115,95,111,95,54,49,0),false ], [String.fromCharCode(114,95,56,57,95,115,116,101,110,99,105,108,0),true ]]);
       let scorepopsoundW = 3.0;
      for (let c = 0; c < 3; c++) {
          let basketballplayerplaceholderb = 2;
          let vietnamw = 4.0;
         codegenb *= 1 % (Math.max(10, parseInt(`${scorepopsoundW}`)));
         basketballplayerplaceholderb <<= Math.min(3, Math.abs(parseInt(`${vietnamw}`) >> (Math.min(2, Math.abs(basketballplayerplaceholderb)))));
         vietnamw /= Math.max(5, 3 >> (Math.min(Math.abs(basketballplayerplaceholderb), 2)));
      }
         bellg *= parseInt(`${codegenb}`) | 2;
         codegenb -= parseInt(`${scorepopsoundW}`);
      if (codegenb >= 3.23) {
         scorepopsoundW /= Math.max(1, parseFloat(`${parseInt(`${bellg}`) & parseInt(`${codegenb}`)}`));
      }
      for (let p = 0; p < 2; p++) {
          let internetn = 1;
         suboutx >>= Math.min(Math.abs(parseInt(`${scorepopsoundW}`)), 3);
         internetn %= Math.max(2, 3);
      }
          let sellL = 0.0;
         bellg += 3;
         sellL -= 2;
       let eventn = String.fromCharCode(112,95,52,49,95,114,116,114,101,101,99,104,101,99,107,0);
          let connectionD = String.fromCharCode(121,95,49,57,95,102,105,110,116,0);
          let combinedt = 4;
         scorepopsoundW *= (parseFloat(`${String.fromCharCode(97,0) == eventn ? eventn.length : connectionD.length}`));
         connectionD = `${combinedt}`;
         umenge = new Map([[`${codegenb}`, 2]]);
      while (bellg >= codegenb) {
          let plusw = String.fromCharCode(117,95,57,56,95,99,111,109,112,105,108,101,0);
          let homeplayerx = 4.0;
          let predictiondefaultR = 0.0;
          let recommendationq = true;
          let controlk = 0.0;
         codegenb -= 2 - umenge.size;
         plusw = `${1 / (Math.max(3, plusw.length))}`;
         homeplayerx *= 1;
         predictiondefaultR /= Math.max(3, 2);
         recommendationq = parseInt(`${predictiondefaultR}`) < plusw.length;
         controlk *= parseFloat(`${parseInt(`${predictiondefaultR}`)}`);
         break;
      }
      for (let q = 0; q < 3; q++) {
         scorepopsoundW *= parseFloat(`${parseInt(`${codegenb}`)}`);
      }
          let analytic1 = 4.0;
          let tramini3 = 0.0;
          let mailo = String.fromCharCode(107,95,52,53,95,116,97,114,103,97,0);
         codegenb /= Math.max(1, parseInt(`${scorepopsoundW}`) << (Math.min(Math.abs(2), 1)));
         analytic1 += 2;
         tramini3 += parseInt(`${analytic1}`);
         mailo = `${parseInt(`${analytic1}`)}`;
       let handlerg = String.fromCharCode(115,116,97,109,112,95,55,95,56,50,0);
       let footballM = String.fromCharCode(102,95,52,48,95,103,110,111,115,105,115,0);
      if (handlerg.length < umenge.size) {
          let sportr: Array<any> = [150, 838, 194];
          let e_playerA = 3;
         umenge = new Map([[`${bellg}`, parseInt(`${scorepopsoundW}`) ^ 3]]);
         sportr = [sportr.length * e_playerA];
         e_playerA >>= Math.min(3, Math.abs(sportr.length | 3));
      }
      if ((5 >> (Math.min(1, Math.abs(umenge.size)))) == 3) {
          let fasti: Array<any> = [881, 239, 193];
          let phoneshareT = false;
          let iconsharefriendsP = String.fromCharCode(99,111,109,112,97,110,100,95,117,95,57,56,0);
          let long_iqD = 5.0;
         handlerg += `${umenge.size | 3}`;
         fasti.push(1);
         phoneshareT = iconsharefriendsP.length >= 80;
         iconsharefriendsP += "2";
         long_iqD += parseFloat(`${parseInt(`${long_iqD}`) >> (Math.min(5, Math.abs(2)))}`);
      }
      nativeexe.push(2 - nativeexe.length);
      if (cornerN) {
         break;
      }
   } while (cornerN && (nativeexe.length >= hiadS.length));
   while ((3.27 + gradlewD) >= 1.39 && (3 + nativeexe.length) >= 2) {
      gradlewD += parseFloat(`${checkbox4}`);
      break;
   }
      setShowSlider(false);
    }, 1500);
  };

  const setBrightVolumeShare = async () => {
       let vnewarchdefaultse = 4;
    let gdtadv6 = true;
    let starO = String.fromCharCode(108,95,56,48,95,103,114,111,117,112,99,97,108,108,0);
    let detaile = String.fromCharCode(110,95,53,57,95,103,101,116,102,114,97,109,101,0);
    let incidenti: Map<any, any> = new Map([[String.fromCharCode(106,95,56,55,95,116,101,109,112,111,114,97,108,0),714], [String.fromCharCode(101,108,101,109,101,110,116,119,105,115,101,95,55,95,51,48,0),431], [String.fromCharCode(99,95,52,55,95,116,114,97,99,107,101,100,0),251]]);
    let iconsubssuccessL = 3.0;
    let codegenM = String.fromCharCode(119,95,56,95,118,101,114,108,97,121,0);
    let dependencyT = 4.0;
    let flyerG = 3.0;
    let panglel = String.fromCharCode(113,95,52,49,95,104,117,101,115,0);
    let kuaishouz = String.fromCharCode(119,97,118,101,115,95,121,95,53,54,0);
    let sportH: Map<any, any> = new Map([[String.fromCharCode(103,95,55,52,95,108,101,100,103,101,114,0),true ], [String.fromCharCode(111,115,116,114,101,97,109,119,114,97,112,112,101,114,95,107,95,52,55,0),true ]]);
    let switch_dB = String.fromCharCode(112,97,110,101,108,95,100,95,57,52,0);
      codegenM = `${2 | parseInt(`${iconsubssuccessL}`)}`;
      vnewarchdefaultse += 1;
      gdtadv6 = starO.length > 60;
   while (panglel == String.fromCharCode(66,0)) {
      codegenM += `${1 % (Math.max(3, parseInt(`${dependencyT}`)))}`;
      break;
   }
       let router0 = 0;
       let iconpipshrinkl: Map<any, any> = new Map([[String.fromCharCode(109,101,114,103,101,95,51,95,52,56,0),499], [String.fromCharCode(115,101,103,109,101,110,116,97,116,105,111,110,95,98,95,57,48,0),942], [String.fromCharCode(100,101,97,100,105,110,101,95,122,95,53,51,0),256]]);
       let whatsapp8 = false;
       let statisticsactiveR = 5;
      while ((3 ^ iconpipshrinkl.size) < 3) {
          let hejiU = 5.0;
          let flagn = String.fromCharCode(115,95,50,54,95,109,105,120,112,97,110,101,108,0);
          let philippinesi = 5;
         whatsapp8 = String.fromCharCode(113,0) == flagn;
         hejiU /= Math.max(3, parseFloat(`${philippinesi}`));
         flagn += `${parseInt(`${hejiU}`)}`;
         philippinesi ^= parseInt(`${hejiU}`) & philippinesi;
         break;
      }
      while (3 == (1 - iconpipshrinkl.size) && (iconpipshrinkl.size - 1) == 1) {
         iconpipshrinkl.set(`${router0}`, iconpipshrinkl.size);
         break;
      }
          let liveendmodallogoF = 4;
          let stationo = false;
         router0 <<= Math.min(3, Math.abs(1));
         liveendmodallogoF *= liveendmodallogoF;
         stationo = !stationo;
       let iconclosewhiteA = String.fromCharCode(111,95,51,56,95,105,110,116,101,114,110,97,108,0);
      while (!whatsapp8) {
         statisticsactiveR >>= Math.min(1, Math.abs(2 << (Math.min(1, Math.abs(statisticsactiveR)))));
         break;
      }
      if (iconclosewhiteA.length == 5) {
         iconpipshrinkl = new Map([[`${statisticsactiveR}`, ((whatsapp8 ? 4 : 4) - statisticsactiveR)]]);
      }
         iconclosewhiteA += `${iconclosewhiteA.length}`;
      for (let x = 0; x < 1; x++) {
          let nterstitiale = true;
          let manifestE = String.fromCharCode(99,95,56,95,109,97,107,101,100,112,107,103,0);
         whatsapp8 = iconpipshrinkl.size == 99;
         nterstitiale = nterstitiale || manifestE.length > 56;
         manifestE = `${manifestE.length}`;
      }
      codegenM += "3";
      starO += `${2 + vnewarchdefaultse}`;
      panglel = `${panglel.length}`;
      incidenti.set(panglel, parseInt(`${dependencyT}`));
   while ((incidenti.size + parseInt(`${dependencyT}`)) <= 3 && 3 <= (incidenti.size + parseInt(`${dependencyT}`))) {
      incidenti = new Map([[`${dependencyT}`, parseInt(`${dependencyT}`) / (Math.max(parseInt(`${iconsubssuccessL}`), 7))]]);
      break;
   }
   let iconpipexpandl = panglel.length >= 8298325;
   do {
      panglel = `${incidenti.size}`;
      if (iconpipexpandl) {
         break;
      }
   } while ((panglel.startsWith(`${incidenti.size}`)) && iconpipexpandl);
       let libfbjniV = true;
      if (libfbjniV) {
          let statsnomoredatae = 0.0;
          let chatbotphotoo = 5;
          let models = 2.0;
         libfbjniV = !libfbjniV;
         statsnomoredatae += parseFloat(`${chatbotphotoo + 1}`);
         chatbotphotoo -= 2;
         models *= parseFloat(`${1}`);
      }
      let shootyesgoala = libfbjniV ? !libfbjniV : libfbjniV;
      do {
         libfbjniV = !libfbjniV;
         if (shootyesgoala) {
            break;
         }
      } while (shootyesgoala && (!libfbjniV && libfbjniV));
      while (!libfbjniV) {
          let iconviewerw: Map<any, any> = new Map([[String.fromCharCode(104,95,53,48,95,112,104,111,110,101,115,0),744], [String.fromCharCode(115,105,112,104,97,115,104,95,53,95,51,49,0),838], [String.fromCharCode(118,95,51,57,95,109,101,114,103,105,110,103,0),920]]);
          let reactnativejsf: Array<any> = [376, 955];
          let dropdownK = String.fromCharCode(105,95,57,56,95,102,105,102,111,115,0);
          let recommendationl = 4;
         libfbjniV = !libfbjniV;
         iconviewerw.set(`${recommendationl}`, recommendationl);
         reactnativejsf = [reactnativejsf.length - 3];
         dropdownK += `${dropdownK.length}`;
         break;
      }
      starO += `${2 + panglel.length}`;
      dependencyT += parseFloat(`${parseInt(`${iconsubssuccessL}`)}`);
   let matchinactiveq = 6052970 <= starO.length;
   do {
       let iconbellactiveg: Map<any, any> = new Map([[String.fromCharCode(109,111,109,101,110,116,115,95,106,95,57,57,0),930], [String.fromCharCode(109,115,109,112,101,103,118,95,104,95,52,53,0),699]]);
       let recommendationq = 3.0;
       let profileinactiveQ: Map<any, any> = new Map([[String.fromCharCode(109,95,54,50,95,98,105,103,116,114,101,101,0),432], [String.fromCharCode(109,118,101,99,95,51,95,51,56,0),883]]);
       let libavutilU: Map<any, any> = new Map([[String.fromCharCode(112,95,53,57,95,99,111,109,112,97,115,115,0),615], [String.fromCharCode(120,95,53,52,95,110,111,114,109,97,108,105,122,101,114,0),16], [String.fromCharCode(102,114,97,103,95,113,95,51,51,0),484]]);
         profileinactiveQ = new Map([[`${iconbellactiveg.size}`, iconbellactiveg.size]]);
       let codeL = 2.0;
       let schedulerp = 2.0;
      if (4 >= (4 * profileinactiveQ.size)) {
          let backiconmaskq = 5.0;
          let predictionactiveP = 2;
          let searchh: Array<any> = [586, 425, 988];
          let inouttargetredP = String.fromCharCode(110,95,51,48,95,118,97,114,119,105,100,116,104,0);
          let defaultbasketballbg4: Array<any> = [496, 811, 593];
         profileinactiveQ.set(`${codeL}`, (inouttargetredP == String.fromCharCode(57,0) ? inouttargetredP.length : parseInt(`${codeL}`)));
         backiconmaskq /= Math.max(4, parseFloat(`${parseInt(`${backiconmaskq}`) + searchh.length}`));
         predictionactiveP *= defaultbasketballbg4.length;
         searchh = [predictionactiveP >> (Math.min(searchh.length, 4))];
         defaultbasketballbg4 = [1];
      }
      while (Array.from(libavutilU.values()).includes(schedulerp)) {
          let homeiconB: Map<any, any> = new Map([[String.fromCharCode(111,95,48,95,111,118,101,114,114,105,100,105,110,103,0),583], [String.fromCharCode(106,95,56,52,95,105,110,116,101,114,110,101,116,0),587]]);
          let pangler = 0.0;
          let homeplayerH = String.fromCharCode(121,95,53,51,95,101,110,99,111,100,105,110,103,115,0);
          let whitetickR: Array<any> = [269, 524, 293];
         schedulerp -= parseFloat(`${profileinactiveQ.size}`);
         homeiconB.set(`${pangler}`, 1 - parseInt(`${pangler}`));
         homeplayerH = `${parseInt(`${pangler}`) & 2}`;
         whitetickR = [2];
         break;
      }
      let borderlessA = libavutilU.size >= 8665187;
      do {
         libavutilU = new Map([[`${libavutilU.size}`, libavutilU.size]]);
         if (borderlessA) {
            break;
         }
      } while (borderlessA && (parseInt(`${schedulerp}`) < libavutilU.size));
          let basketballmatchdetailbgJ = true;
          let owngoal2 = 5.0;
          let predictionlossa = String.fromCharCode(115,111,117,110,100,95,120,95,54,48,0);
         iconbellactiveg = new Map([[predictionlossa, 3]]);
         basketballmatchdetailbgJ = 22.75 > owngoal2;
         owngoal2 /= Math.max(parseFloat(`${parseInt(`${owngoal2}`) * 2}`), 5);
         predictionlossa += `${((basketballmatchdetailbgJ ? 2 : 4) ^ parseInt(`${owngoal2}`))}`;
          let uploadV = 4.0;
         codeL += parseFloat(`${parseInt(`${recommendationq}`)}`);
         uploadV *= parseFloat(`${3 * parseInt(`${uploadV}`)}`);
      let mbnativeadvancedP = 6936738 >= profileinactiveQ.size;
      do {
          let privilegeF = String.fromCharCode(112,95,57,49,95,110,111,110,101,109,112,116,121,0);
          let sportsI = String.fromCharCode(114,101,112,111,114,116,105,110,103,95,53,95,56,49,0);
          let analyticsk = 4.0;
         profileinactiveQ.set(`${sportsI}`, iconbellactiveg.size);
         privilegeF = `${privilegeF.length % (Math.max(1, 9))}`;
         sportsI = "2";
         analyticsk *= parseFloat(`${2}`);
         if (mbnativeadvancedP) {
            break;
         }
      } while ((!Array.from(profileinactiveQ.keys()).includes(`${libavutilU.size}`)) && mbnativeadvancedP);
      starO += `${(String.fromCharCode(111,0) == detaile ? incidenti.size : detaile.length)}`;
      if (matchinactiveq) {
         break;
      }
   } while ((incidenti.size < 4) && matchinactiveq);
   if (starO.length > 1) {
      starO += `${codegenM.length}`;
   }
   while (5.61 <= (3.0 * flyerG) && 3 <= (detaile.length * parseInt(`${flyerG}`))) {
       let baiduads0 = 3.0;
       let slidert = 1.0;
       let leagueG: Array<any> = [260, 787];
         slidert += parseFloat(`${parseInt(`${baiduads0}`)}`);
      for (let e = 0; e < 1; e++) {
          let videoL = 4;
          let emojihearto = true;
         baiduads0 += parseFloat(`${parseInt(`${slidert}`) | 1}`);
         videoL -= ((emojihearto ? 3 : 2) & videoL);
         emojihearto = videoL <= 14;
      }
      if (2.6 < slidert) {
         slidert /= Math.max(parseFloat(`${3 & parseInt(`${slidert}`)}`), 4);
      }
      if (!leagueG.includes(slidert)) {
         slidert += parseFloat(`${leagueG.length}`);
      }
      if (leagueG.length > parseInt(`${slidert}`)) {
         leagueG.push(parseInt(`${baiduads0}`));
      }
         baiduads0 -= parseFloat(`${1 * leagueG.length}`);
          let sortv = String.fromCharCode(116,101,120,116,97,116,116,114,95,108,95,54,57,0);
         leagueG.push(sortv.length);
      while (slidert <= 1.46) {
          let xvodr = 1.0;
          let whitesmalltickw = true;
          let libmapbufferjniv = String.fromCharCode(115,105,103,110,101,100,95,108,95,49,49,0);
          let showlessn = String.fromCharCode(120,95,52,55,95,98,121,114,121,0);
         slidert *= parseFloat(`${libmapbufferjniv.length << (Math.min(Math.abs(3), 2))}`);
         xvodr /= Math.max((parseFloat(`${String.fromCharCode(66,0) == showlessn ? (whitesmalltickw ? 5 : 5) : showlessn.length}`)), 3);
         whitesmalltickw = showlessn.length >= 40;
         libmapbufferjniv = `${showlessn.length}`;
         break;
      }
         slidert += parseFloat(`${leagueG.length ^ 3}`);
      detaile = `${parseInt(`${flyerG}`)}`;
      break;
   }

    brightShare.value = await SystemSetting.getAppBrightness();

   let floating7 = 8448420.0 >= flyerG;
   do {
      flyerG /= Math.max(parseFloat(`${1 * vnewarchdefaultse}`), 3);
      if (floating7) {
         break;
      }
   } while (floating7 && (5.64 <= (flyerG - parseFloat(`${incidenti.size}`)) || 2 <= (incidenti.size - parseInt(`${flyerG}`))));
   let tempa = gdtadv6 ? !gdtadv6 : gdtadv6;
   do {
      gdtadv6 = 92 <= starO.length;
      if (tempa) {
         break;
      }
   } while ((!gdtadv6) && tempa);
   for (let z = 0; z < 2; z++) {
       let predictionlosse = String.fromCharCode(119,111,114,100,95,117,95,51,52,0);
      let flyerw = predictionlosse.length >= 6912627;
      do {
         predictionlosse = `${predictionlosse.length}`;
         if (flyerw) {
            break;
         }
      } while (flyerw && (!predictionlosse.startsWith(`${predictionlosse.length}`)));
      for (let p = 0; p < 1; p++) {
         predictionlosse += `${predictionlosse.length | predictionlosse.length}`;
      }
      if (predictionlosse == String.fromCharCode(72,0)) {
          let middle8 = 5.0;
          let iconwatchnowj = true;
          let whitesmalltickX = String.fromCharCode(97,95,50,51,95,105,110,116,101,114,99,101,112,116,0);
          let greenarrowup6 = false;
         predictionlosse += `${predictionlosse.length}`;
         middle8 /= Math.max(parseFloat(`${parseInt(`${middle8}`) + whitesmalltickX.length}`), 3);
         iconwatchnowj = (parseFloat(`${whitesmalltickX.length}`) + middle8) <= 73.49;
         greenarrowup6 = 73.39 < middle8 || greenarrowup6;
      }
      panglel += "2";
   }
   for (let g = 0; g < 1; g++) {
       let notificationi = 0;
      if ((notificationi - notificationi) == 1 || 1 == (1 - notificationi)) {
         notificationi |= 3 % (Math.max(10, notificationi));
      }
         notificationi >>= Math.min(2, Math.abs(notificationi));
      if (3 >= notificationi) {
         notificationi *= notificationi;
      }
      vnewarchdefaultse <<= Math.min(2, Math.abs(1));
   }
   for (let f = 0; f < 2; f++) {
       let predictionarrowR = String.fromCharCode(114,101,115,101,116,95,119,95,57,53,0);
       let adult0 = String.fromCharCode(106,95,54,53,95,100,105,118,112,111,119,109,0);
       let iconfeedback0 = 0;
       let iconclosewhitebgJ = String.fromCharCode(117,95,55,95,112,114,101,102,101,116,99,104,105,110,103,0);
       let bridgeh = 1.0;
         iconfeedback0 /= Math.max(iconclosewhitebgJ.length, 2);
      let tempnodatao = 6964131 >= iconfeedback0;
      do {
         iconfeedback0 <<= Math.min(predictionarrowR.length, 2);
         if (tempnodatao) {
            break;
         }
      } while (((1.87 * bridgeh) > 2.73 && 1.87 > (parseFloat(`${iconfeedback0}`) * bridgeh)) && tempnodatao);
          let moviesM: Map<any, any> = new Map([[String.fromCharCode(112,108,97,121,97,98,108,101,95,108,95,49,49,0),true ], [String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,95,119,95,54,51,0),true ]]);
          let championV = 0.0;
          let sellmathbackgroundL = String.fromCharCode(101,95,48,95,100,99,116,115,117,98,0);
         iconfeedback0 ^= (String.fromCharCode(52,0) == sellmathbackgroundL ? moviesM.size : sellmathbackgroundL.length);
         moviesM.set(`${championV}`, 1);
         championV *= parseInt(`${championV}`);
      for (let a = 0; a < 2; a++) {
          let libavformatx = 1;
          let gesturesu = String.fromCharCode(121,95,55,53,0);
          let stationZ = String.fromCharCode(122,95,48,95,115,117,98,115,99,114,105,98,97,98,108,101,115,0);
          let liblogger5 = String.fromCharCode(116,95,51,95,117,110,116,121,112,101,100,0);
          let iconwechato = String.fromCharCode(115,117,112,112,111,114,116,115,95,97,95,51,52,0);
         predictionarrowR += `${liblogger5.length * 2}`;
         libavformatx %= Math.max(1, gesturesu.length);
         gesturesu = `${(String.fromCharCode(57,0) == gesturesu ? iconwechato.length : gesturesu.length)}`;
         stationZ = `${gesturesu.length}`;
         liblogger5 = `${libavformatx}`;
         iconwechato = "2";
      }
         iconfeedback0 <<= Math.min(5, Math.abs((adult0 == String.fromCharCode(98,0) ? predictionarrowR.length : adult0.length)));
         predictionarrowR += "2";
      if (2 >= (2 << (Math.min(3, Math.abs(iconfeedback0))))) {
          let spece = 0.0;
          let o_animationl = String.fromCharCode(99,104,111,115,101,110,95,98,95,50,56,0);
         iconfeedback0 >>= Math.min(4, iconclosewhitebgJ.length);
         spece -= parseFloat(`${o_animationl.length | 3}`);
         o_animationl += `${o_animationl.length}`;
      }
         iconfeedback0 += iconclosewhitebgJ.length;
         iconclosewhitebgJ += `${iconclosewhitebgJ.length >> (Math.min(5, Math.abs(parseInt(`${bridgeh}`))))}`;
         bridgeh -= parseFloat(`${3}`);
         predictionarrowR = "2";
      for (let v = 0; v < 3; v++) {
          let acceptedR = String.fromCharCode(105,109,112,95,97,95,50,55,0);
          let favorite3 = false;
          let backwhitew = String.fromCharCode(99,101,114,116,112,111,108,95,118,95,54,49,0);
          let targetH: Map<any, any> = new Map([[String.fromCharCode(103,95,57,56,95,116,119,105,110,118,113,0),918], [String.fromCharCode(111,116,104,95,99,95,55,49,0),894], [String.fromCharCode(108,105,98,120,118,105,100,95,104,95,55,57,0),519]]);
          let rulesS = String.fromCharCode(98,101,116,119,101,101,110,95,106,95,53,56,0);
         iconclosewhitebgJ = `${predictionarrowR.length << (Math.min(Math.abs(2), 3))}`;
         acceptedR = `${rulesS.length}`;
         favorite3 = (backwhitew.length * rulesS.length) > 11;
         backwhitew += "2";
         targetH = new Map([[backwhitew, backwhitew.length * rulesS.length]]);
      }
      let textlayoutmanagerw = adult0.length >= 7535585;
      do {
         adult0 += `${adult0.length}`;
         if (textlayoutmanagerw) {
            break;
         }
      } while (textlayoutmanagerw && (1 > predictionarrowR.length || adult0 == String.fromCharCode(103,0)));
         bridgeh -= parseFloat(`${parseInt(`${bridgeh}`) << (Math.min(Math.abs(3), 4))}`);
          let searchB = String.fromCharCode(116,95,57,48,95,118,97,114,105,97,110,99,101,115,0);
          let sportsc = 4;
          let applicatione = 2.0;
         adult0 += `${searchB.length << (Math.min(Math.abs(1), 1))}`;
         searchB = `${sportsc & 3}`;
         sportsc >>= Math.min(4, Math.abs(2 | sportsc));
         applicatione += parseInt(`${applicatione}`);
      gdtadv6 = predictionarrowR == String.fromCharCode(108,0);
   }
      dependencyT -= parseFloat(`${parseInt(`${dependencyT}`)}`);
   for (let l = 0; l < 2; l++) {
       let securityd = 1;
       let thailandV: Map<any, any> = new Map([[String.fromCharCode(99,95,49,57,95,108,115,102,108,115,112,100,0),856], [String.fromCharCode(111,98,115,101,114,118,101,100,95,118,95,52,55,0),374]]);
       let iconrightoranges = String.fromCharCode(118,95,50,51,95,115,101,97,0);
         thailandV.set(`${securityd}`, securityd % 2);
      let feedbackE = 6958213 <= iconrightoranges.length;
      do {
         iconrightoranges += "1";
         if (feedbackE) {
            break;
         }
      } while (feedbackE && ((securityd | iconrightoranges.length) == 4 && 4 == (iconrightoranges.length | 4)));
          let libjsijniprofilerV: Array<any> = [String.fromCharCode(106,112,101,103,108,105,98,95,49,95,51,53,0), String.fromCharCode(112,114,101,118,101,110,116,95,115,95,49,52,0)];
          let textlayoutmanagerP: Array<any> = [8, 428, 567];
          let castingg: Map<any, any> = new Map([[String.fromCharCode(115,112,114,111,112,95,104,95,57,52,0),String.fromCharCode(120,95,51,49,0)], [String.fromCharCode(114,101,110,111,114,109,101,95,102,95,54,55,0),String.fromCharCode(101,95,49,95,116,97,103,103,105,110,103,0)], [String.fromCharCode(116,104,97,116,95,107,95,56,56,0),String.fromCharCode(114,117,98,121,95,98,95,51,55,0)]]);
         iconrightoranges += `${castingg.size}`;
         libjsijniprofilerV = [3];
         textlayoutmanagerP = [textlayoutmanagerP.length * 1];
         castingg.set(`${libjsijniprofilerV.length}`, textlayoutmanagerP.length * libjsijniprofilerV.length);
       let countdowno = 0;
       let reactnativeultimatelistviewU = 4;
      let nterstitialK = String.fromCharCode(115,112,48,122,97,52,114,111,122,0) == iconrightoranges;
      do {
         iconrightoranges += `${iconrightoranges.length + 1}`;
         if (nterstitialK) {
            break;
         }
      } while (nterstitialK && ((iconrightoranges.length ^ 2) < 3));
         reactnativeultimatelistviewU %= Math.max(1, 4);
         securityd ^= 1;
         thailandV = new Map([[`${reactnativeultimatelistviewU}`, securityd / 1]]);
      if (3 < (securityd * 2) && 2 < (2 * thailandV.size)) {
          let dependenciesl: Array<any> = [String.fromCharCode(115,112,114,101,97,100,95,108,95,57,51,0), String.fromCharCode(100,95,54,52,95,100,105,115,116,114,97,99,116,105,111,110,0), String.fromCharCode(112,108,97,121,103,114,111,117,110,100,95,97,95,55,55,0)];
          let turn1 = 1.0;
          let selectionr = 0.0;
          let exampleimageQ: Array<any> = [379, 924];
         securityd |= parseInt(`${turn1}`);
         dependenciesl = [exampleimageQ.length];
         turn1 /= Math.max(parseFloat(`${parseInt(`${selectionr}`) << (Math.min(dependenciesl.length, 1))}`), 2);
         selectionr -= parseInt(`${selectionr}`);
         exampleimageQ = [exampleimageQ.length % 3];
      }
      gdtadv6 = dependencyT > 98.48;
   }
   if ((parseInt(`${iconsubssuccessL}`) * panglel.length) <= 3) {
      panglel = "3";
   }
   if (!gdtadv6 || 1 > detaile.length) {
       let flyert = true;
       let logins = 0.0;
       let libyogau = String.fromCharCode(100,101,108,105,118,101,114,121,95,51,95,56,56,0);
      for (let z = 0; z < 2; z++) {
         flyert = libyogau == String.fromCharCode(117,0);
      }
         flyert = !flyert;
       let minimizea = 2.0;
       let upgradej = 1.0;
      let mathP = flyert ? !flyert : flyert;
      do {
         flyert = upgradej >= 60.98;
         if (mathP) {
            break;
         }
      } while (mathP && (!flyert));
         logins += (libyogau.length * (flyert ? 4 : 4));
       let mbbannerG = 0.0;
         mbbannerG /= Math.max(5, parseInt(`${upgradej}`) - 1);
       let mathY = String.fromCharCode(118,95,53,53,95,98,117,116,116,111,110,0);
       let spinnern = String.fromCharCode(122,95,54,54,95,107,97,105,115,101,114,0);
      for (let c = 0; c < 2; c++) {
         logins /= Math.max(3, libyogau.length);
      }
      gdtadv6 = 31 > (flyerG - vnewarchdefaultse);
   }
       let bottomH = false;
       let nativemoduleA = String.fromCharCode(105,110,100,101,110,116,101,100,95,104,95,52,57,0);
      let teami = bottomH ? !bottomH : bottomH;
      do {
         bottomH = (47 == ((bottomH ? nativemoduleA.length : 47) * nativemoduleA.length));
         if (teami) {
            break;
         }
      } while ((1 < nativemoduleA.length) && teami);
          let yellowtored_ = true;
         nativemoduleA += `${nativemoduleA.length ^ 2}`;
       let questiconM = String.fromCharCode(120,95,57,95,97,115,101,108,101,99,116,0);
       let backiconmaskK = String.fromCharCode(102,95,52,52,95,115,104,111,114,116,102,108,111,97,116,0);
      while (nativemoduleA != String.fromCharCode(69,0)) {
         questiconM = `${(questiconM == String.fromCharCode(67,0) ? questiconM.length : nativemoduleA.length)}`;
         break;
      }
         questiconM = `${nativemoduleA.length >> (Math.min(Math.abs(1), 1))}`;
      if (4 >= nativemoduleA.length) {
         questiconM = `${(nativemoduleA == String.fromCharCode(98,0) ? (bottomH ? 3 : 5) : nativemoduleA.length)}`;
      }
      flyerG += (parseFloat(`${nativemoduleA == String.fromCharCode(117,0) ? (bottomH ? 2 : 3) : nativemoduleA.length}`));
      incidenti.set(starO, starO.length / (Math.max(9, incidenti.size)));
      kuaishouz += `${vnewarchdefaultse}`;
      gdtadv6 = detaile.length <= 80;
      detaile = `${(vnewarchdefaultse | (gdtadv6 ? 5 : 5))}`;
      panglel = `${kuaishouz.length % (Math.max(2, 1))}`;
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
       let mintegralJ = String.fromCharCode(102,105,118,101,95,122,95,52,50,0);
    let country_ = String.fromCharCode(107,95,51,57,95,97,99,100,101,99,0);
    let customk = 1.0;
    let libmapbufferjnim = 5;
    let iconclosewhitebg0 = 2.0;
    let middleZ = String.fromCharCode(109,105,103,104,116,95,51,95,49,48,0);
    let issube = true;
    let merger7 = true;
    let smallh = String.fromCharCode(101,115,116,97,98,108,105,115,104,95,121,95,56,52,0);
    let singleV: Array<any> = [String.fromCharCode(102,95,49,57,95,97,99,116,97,98,0), String.fromCharCode(99,98,117,102,95,54,95,52,56,0)];
    let settingsh = 0.0;
    let reddownarrowB = 3.0;
    let promotionT = 4.0;
    let heji9: Array<any> = [631, 11];
    let gifgoalZ: Array<any> = [String.fromCharCode(100,101,108,97,121,101,100,95,51,95,54,0), String.fromCharCode(99,111,110,115,116,113,112,95,54,95,56,0)];
   while ((2 & country_.length) == 1) {
      country_ = `${middleZ.length + parseInt(`${iconclosewhitebg0}`)}`;
      break;
   }
   let componentQ = 6098056 >= mintegralJ.length;
   do {
      mintegralJ = `${country_.length * mintegralJ.length}`;
      if (componentQ) {
         break;
      }
   } while ((4 == singleV.length) && componentQ);
      singleV = [1 + smallh.length];
       let playD = String.fromCharCode(113,115,99,97,108,101,98,105,116,115,95,98,95,55,54,0);
          let utilsB = String.fromCharCode(99,108,97,115,115,110,97,109,101,95,113,95,53,52,0);
         playD += `${playD.length + 2}`;
         utilsB = `${utilsB.length >> (Math.min(5, utilsB.length))}`;
          let sellmathbackgroundN = String.fromCharCode(105,95,55,49,95,115,121,109,98,111,108,105,122,101,0);
          let iconbellL = 2.0;
          let placementN: Map<any, any> = new Map([[String.fromCharCode(99,95,55,49,95,116,97,108,107,0),413], [String.fromCharCode(104,114,101,97,100,95,103,95,55,54,0),75]]);
         playD += "3";
         sellmathbackgroundN += `${sellmathbackgroundN.length}`;
         iconbellL *= 2;
         placementN.set(sellmathbackgroundN, sellmathbackgroundN.length * placementN.size);
       let iconwatch4 = 0.0;
       let singapore8 = 3.0;
      singleV = [1];
   while ((country_.length >> (Math.min(Math.abs(2), 5))) <= 2 && 5 <= (2 / (Math.max(1, country_.length)))) {
      country_ = `${libmapbufferjnim}`;
      break;
   }
   while (4 < singleV.length) {
       let styleH = 5.0;
      let bggradient5 = styleH >= 4987280.0;
      do {
          let telegramF = String.fromCharCode(118,95,54,50,95,102,111,114,101,105,103,110,0);
          let nextU: Map<any, any> = new Map([[String.fromCharCode(100,115,116,95,53,95,55,0),235], [String.fromCharCode(122,95,50,49,95,116,104,114,111,119,0),954], [String.fromCharCode(110,95,51,48,95,117,101,102,97,0),229]]);
          let hometeamfield3: Map<any, any> = new Map([[String.fromCharCode(122,95,56,48,95,119,97,105,116,0),32], [String.fromCharCode(97,109,112,108,105,116,117,100,101,95,49,95,53,53,0),319], [String.fromCharCode(112,95,54,51,95,97,99,99,101,115,115,111,114,105,101,115,0),415]]);
          let rewind8 = String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,95,51,95,55,56,0);
          let sellmathbackgroundZ = String.fromCharCode(103,104,97,115,104,95,114,95,53,50,0);
         styleH *= 1;
         telegramF += `${hometeamfield3.size}`;
         nextU = new Map([[`${hometeamfield3.size}`, 2]]);
         rewind8 += `${(String.fromCharCode(67,0) == rewind8 ? sellmathbackgroundZ.length : rewind8.length)}`;
         sellmathbackgroundZ += `${(rewind8 == String.fromCharCode(99,0) ? hometeamfield3.size : rewind8.length)}`;
         if (bggradient5) {
            break;
         }
      } while ((styleH == styleH) && bggradient5);
         styleH += parseInt(`${styleH}`) | 2;
          let mbbannerr: Map<any, any> = new Map([[String.fromCharCode(119,95,55,56,95,114,111,117,110,100,115,0),130], [String.fromCharCode(115,105,103,102,105,103,95,105,95,53,51,0),76]]);
          let bellI = String.fromCharCode(119,97,118,101,115,121,110,116,104,95,114,95,48,0);
          let profileinactiveP = 2;
         styleH /= Math.max(4, 2);
         mbbannerr = new Map([[`${mbbannerr.size}`, 1]]);
         bellI += `${bellI.length | profileinactiveP}`;
         profileinactiveP ^= 3 << (Math.min(4, Math.abs(profileinactiveP)));
      merger7 = String.fromCharCode(95,0) == smallh && 94 > middleZ.length;
      break;
   }
       let containerq: Array<any> = [235, 817, 322];
       let node9 = String.fromCharCode(99,97,108,99,119,95,108,95,53,52,0);
       let baiduadsp = String.fromCharCode(114,95,56,95,99,117,101,112,111,105,110,116,0);
      if (3 < (5 | baiduadsp.length) || 5 < (baiduadsp.length | containerq.length)) {
         baiduadsp = "2";
      }
          let libruntimeexecutor9 = false;
         containerq.push(3);
      if (node9.length > containerq.length) {
         containerq.push(baiduadsp.length >> (Math.min(Math.abs(1), 3)));
      }
      while (node9 == String.fromCharCode(121,0)) {
         baiduadsp = `${baiduadsp.length}`;
         break;
      }
         baiduadsp = `${containerq.length >> (Math.min(Math.abs(3), 4))}`;
      let reddownarrowA = 9082009 <= containerq.length;
      do {
          let orangeuparrowb = true;
          let libreanimatedc = String.fromCharCode(105,108,98,99,95,97,95,49,48,48,0);
          let fillT: Map<any, any> = new Map([[String.fromCharCode(100,101,110,115,101,95,105,95,52,53,0),216], [String.fromCharCode(116,99,109,105,95,122,95,57,49,0),52], [String.fromCharCode(104,97,115,104,105,110,105,116,95,54,95,49,55,0),628]]);
          let arrowselectdownN = 3;
          let favoritee = 1.0;
         containerq.push(2 & fillT.size);
         orangeuparrowb = (parseFloat(`${libreanimatedc.length}`) * favoritee) < 28.45;
         libreanimatedc += `${libreanimatedc.length >> (Math.min(1, Math.abs(parseInt(`${favoritee}`))))}`;
         fillT.set(`${orangeuparrowb}`, 1 & libreanimatedc.length);
         arrowselectdownN >>= Math.min(5, Math.abs((String.fromCharCode(86,0) == libreanimatedc ? libreanimatedc.length : arrowselectdownN)));
         if (reddownarrowA) {
            break;
         }
      } while (reddownarrowA && (!node9.startsWith(`${containerq.length}`)));
      while (baiduadsp.length == 5) {
         baiduadsp += `${baiduadsp.length}`;
         break;
      }
         baiduadsp += `${node9.length / 2}`;
          let penaltymatchiconY = String.fromCharCode(102,114,97,109,101,105,110,102,111,95,115,95,53,53,0);
         node9 = `${(String.fromCharCode(66,0) == penaltymatchiconY ? penaltymatchiconY.length : containerq.length)}`;
      customk /= Math.max((String.fromCharCode(117,0) == baiduadsp ? smallh.length : baiduadsp.length), 2);
   if (middleZ.length >= settingsh) {
      settingsh -= 2 << (Math.min(1, mintegralJ.length));
   }
       let gpayr = 3.0;
       let ksadk = String.fromCharCode(101,95,49,52,95,116,111,108,101,114,97,110,99,101,0);
       let iconclosewhitebgg: Map<any, any> = new Map([[String.fromCharCode(119,95,56,52,95,115,116,114,105,110,103,101,110,99,111,100,101,0),627], [String.fromCharCode(110,95,56,55,95,112,97,99,107,101,116,112,101,101,107,0),894], [String.fromCharCode(103,101,116,112,97,100,100,114,115,95,107,95,55,55,0),630]]);
      if (ksadk.length <= 4) {
         ksadk = `${ksadk.length}`;
      }
      while ((parseInt(`${gpayr}`) / (Math.max(2, ksadk.length))) < 3) {
         ksadk = "3";
         break;
      }
      for (let e = 0; e < 1; e++) {
         gpayr += parseFloat(`${iconclosewhitebgg.size % (Math.max(2, 7))}`);
      }
          let arrowupw = 5;
          let penaltyshootnogoalq = String.fromCharCode(109,111,100,117,108,97,116,101,95,111,95,50,0);
          let eyecloseS = 1.0;
         iconclosewhitebgg.set(ksadk, 3);
         arrowupw &= arrowupw % 1;
         penaltyshootnogoalq = `${penaltyshootnogoalq.length & arrowupw}`;
         eyecloseS += parseFloat(`${penaltyshootnogoalq.length}`);
       let statisticsactive2: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,99,97,108,101,95,109,95,49,54,0),true ], [String.fromCharCode(105,95,53,50,95,108,105,98,115,109,98,99,0),false ]]);
       let holderN: Map<any, any> = new Map([[String.fromCharCode(113,95,52,57,95,115,101,103,116,114,101,101,0),644], [String.fromCharCode(107,95,57,48,95,120,118,105,100,105,100,99,116,0),377], [String.fromCharCode(104,105,103,104,112,111,114,116,95,122,95,51,50,0),703]]);
      smallh += `${singleV.length | 1}`;
      singleV = [2];
   while (!issube) {
      issube = String.fromCharCode(77,0) == mintegralJ;
      break;
   }
   let nnewarchdefaultsU = mintegralJ == String.fromCharCode(98,118,105,122,95,55,51,50,56,56,0);
   do {
      mintegralJ += `${(middleZ == String.fromCharCode(97,0) ? middleZ.length : parseInt(`${customk}`))}`;
      if (nnewarchdefaultsU) {
         break;
      }
   } while (((mintegralJ.length / 2) <= 3) && nnewarchdefaultsU);
   while (middleZ == smallh) {
      smallh = `${mintegralJ.length | 3}`;
      break;
   }
   let roundv = 7143469 >= middleZ.length;
   do {
      middleZ += `${parseInt(`${customk}`) & smallh.length}`;
      if (roundv) {
         break;
      }
   } while (roundv && (!middleZ.startsWith(`${customk}`)));
   if (country_.includes(`${libmapbufferjnim}`)) {
      libmapbufferjnim <<= Math.min(1, Math.abs(((issube ? 5 : 1))));
   }
       let iconqq3: Array<any> = [165, 695];
          let iconstarF: Array<any> = [String.fromCharCode(101,110,116,114,111,112,121,95,53,95,54,56,0), String.fromCharCode(99,111,115,105,103,110,97,116,111,114,121,95,119,95,54,57,0)];
          let fullscreenminc = false;
          let gradlex = String.fromCharCode(119,95,51,95,97,112,112,114,111,120,105,109,97,116,101,0);
         iconqq3.push(((fullscreenminc ? 3 : 5) << (Math.min(Math.abs(3), 4))));
         iconstarF.push(iconstarF.length);
         fullscreenminc = gradlex == String.fromCharCode(107,0) || iconstarF.length >= 3;
         gradlex += "3";
      while (3 < (5 & iconqq3.length)) {
          let iconscheduleb = String.fromCharCode(110,95,53,51,95,102,105,108,108,105,110,0);
         iconqq3.push(3 / (Math.max(10, iconqq3.length)));
         iconscheduleb += `${iconscheduleb.length ^ iconscheduleb.length}`;
         break;
      }
          let hejiU = 2;
          let collection2 = String.fromCharCode(109,106,112,101,103,98,95,107,95,53,48,0);
         iconqq3 = [hejiU];
         hejiU -= collection2.length << (Math.min(4, collection2.length));
      country_ = `${parseInt(`${customk}`)}`;
   let mbnativeadvancedl = reddownarrowB <= 8824551.0;
   do {
       let applek = 0;
       let libavformatD = 3.0;
       let statisticsactiveb = 1.0;
         applek ^= 2 ^ applek;
      for (let a = 0; a < 3; a++) {
         libavformatD *= parseFloat(`${applek << (Math.min(1, Math.abs(1)))}`);
      }
         libavformatD *= parseFloat(`${3 - parseInt(`${libavformatD}`)}`);
          let reactnavigationx = String.fromCharCode(100,105,114,101,99,116,111,114,105,101,115,95,120,95,57,57,0);
          let iconedits = 2.0;
         libavformatD += parseFloat(`${1}`);
         reactnavigationx = `${reactnavigationx.length}`;
         iconedits += reactnavigationx.length << (Math.min(Math.abs(3), 1));
      if (3 == (applek | 4) || 1 == (4 | applek)) {
          let distu = 1;
          let imagenomoredataQ = 0;
          let thumbnailV: Array<any> = [String.fromCharCode(98,117,116,116,101,114,95,120,95,57,57,0), String.fromCharCode(116,119,105,110,118,113,95,118,95,54,51,0), String.fromCharCode(104,99,108,114,95,100,95,55,54,0)];
          let footballfiledlayoutQ: Map<any, any> = new Map([[String.fromCharCode(112,97,114,97,109,101,116,101,114,115,95,112,95,53,48,0),410], [String.fromCharCode(98,95,53,57,95,115,112,114,101,97,100,0),433], [String.fromCharCode(110,97,116,105,118,101,95,109,95,50,56,0),74]]);
         applek %= Math.max(5, 2);
         distu >>= Math.min(2, thumbnailV.length);
         imagenomoredataQ -= 2 / (Math.max(3, thumbnailV.length));
         footballfiledlayoutQ.set(`${distu}`, imagenomoredataQ);
      }
         libavformatD += parseFloat(`${applek}`);
      while (4 <= (2 << (Math.min(5, Math.abs(applek)))) || 3.89 <= (libavformatD + parseFloat(`${applek}`))) {
         applek <<= Math.min(Math.abs(applek >> (Math.min(1, Math.abs(2)))), 1);
         break;
      }
       let iconnointernetT = 2;
       let final_8eY = 1;
      if (1.63 < (libavformatD * 2.63) && (libavformatD * 2.63) < 5.87) {
         applek <<= Math.min(Math.abs(parseInt(`${statisticsactiveb}`) * parseInt(`${libavformatD}`)), 5);
      }
      reddownarrowB += parseFloat(`${1 & parseInt(`${libavformatD}`)}`);
      if (mbnativeadvancedl) {
         break;
      }
   } while (mbnativeadvancedl && (reddownarrowB <= settingsh));
       let malaysiah = String.fromCharCode(111,95,54,48,95,109,97,116,99,104,101,0);
       let termsr = 3;
      if (5 <= (malaysiah.length / (Math.max(1, 7)))) {
          let banneri = 4.0;
         termsr += 3;
         banneri *= parseInt(`${banneri}`) >> (Math.min(Math.abs(parseInt(`${banneri}`)), 2));
      }
      while ((1 & malaysiah.length) == 3 || (termsr & malaysiah.length) == 1) {
          let defaultbasketballbgj = String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,115,95,116,95,53,50,0);
         termsr &= 3 >> (Math.min(1, Math.abs(termsr)));
         defaultbasketballbgj = `${(String.fromCharCode(80,0) == defaultbasketballbgj ? defaultbasketballbgj.length : defaultbasketballbgj.length)}`;
         break;
      }
         malaysiah = `${termsr ^ 1}`;
         malaysiah += `${termsr >> (Math.min(Math.abs(1), 5))}`;
      if (termsr == malaysiah.length) {
          let colorsp: Map<any, any> = new Map([[String.fromCharCode(112,95,51,57,95,102,105,110,97,108,105,122,101,100,0),String.fromCharCode(109,117,108,116,105,112,108,105,99,97,116,105,111,110,95,57,95,51,54,0)], [String.fromCharCode(115,95,50,48,95,115,117,98,115,116,105,116,117,116,101,100,0),String.fromCharCode(115,99,114,117,98,98,101,114,95,122,95,53,51,0)], [String.fromCharCode(97,115,104,105,110,103,95,113,95,52,54,0),String.fromCharCode(100,98,104,97,110,100,108,101,95,118,95,52,56,0)]]);
          let smallsound1 = 4.0;
          let leftv: Array<any> = [String.fromCharCode(116,119,111,102,105,115,104,95,49,95,52,51,0), String.fromCharCode(107,108,97,115,115,95,116,95,57,48,0)];
          let windN = String.fromCharCode(102,95,53,52,95,99,111,110,116,101,110,116,115,0);
          let videojsd: Map<any, any> = new Map([[String.fromCharCode(110,95,51,56,95,112,99,109,119,98,0),114], [String.fromCharCode(115,95,50,49,95,115,101,116,105,118,0),573]]);
         malaysiah += `${windN.length}`;
         colorsp.set(`${smallsound1}`, parseInt(`${smallsound1}`) * 2);
         leftv.push(2);
         windN = `${videojsd.size % (Math.max(1, leftv.length))}`;
         videojsd.set(`${leftv.length}`, videojsd.size - 1);
      }
      while (4 <= (termsr / 1) && (1 / (Math.max(9, malaysiah.length))) <= 5) {
         malaysiah += "2";
         break;
      }
      merger7 = middleZ.length == 18;
   for (let h = 0; h < 3; h++) {
      iconclosewhitebg0 -= parseFloat(`${1}`);
   }
      smallh = `${2 ^ parseInt(`${reddownarrowB}`)}`;
      mintegralJ += `${parseInt(`${promotionT}`) << (Math.min(3, Math.abs(1)))}`;
   while (2.52 >= (4.29 * settingsh) && 5.73 >= (4.29 + settingsh)) {
       let modityT = String.fromCharCode(115,95,50,54,95,100,120,110,100,99,0);
       let actionQ: Map<any, any> = new Map([[String.fromCharCode(98,95,52,49,95,114,101,110,100,101,114,101,114,115,0),41], [String.fromCharCode(97,121,111,117,116,95,57,95,54,48,0),499]]);
       let tempnodata1: Map<any, any> = new Map([[String.fromCharCode(115,99,111,114,101,115,95,51,95,51,51,0),351], [String.fromCharCode(100,95,49,50,95,114,101,97,108,108,111,99,0),418], [String.fromCharCode(99,104,101,118,114,111,110,95,122,95,56,50,0),445]]);
       let eventsplashz = String.fromCharCode(101,115,99,97,112,101,95,116,95,57,51,0);
      let matchinactiveE = 8117974 >= tempnodata1.size;
      do {
          let filed0 = String.fromCharCode(109,111,118,101,109,101,110,116,95,116,95,57,55,0);
          let bggradientE = String.fromCharCode(114,101,115,105,122,97,98,108,101,95,55,95,52,0);
          let profile_ = 2.0;
          let whitevideoliveg = String.fromCharCode(121,95,51,50,95,97,99,99,117,114,97,116,101,0);
          let readD = String.fromCharCode(108,95,48,95,115,105,122,101,114,0);
         tempnodata1.set(bggradientE, bggradientE.length);
         filed0 += `${(readD == String.fromCharCode(54,0) ? readD.length : whitevideoliveg.length)}`;
         profile_ += 1 - filed0.length;
         whitevideoliveg = `${readD.length}`;
         if (matchinactiveE) {
            break;
         }
      } while (matchinactiveE && (Array.from(tempnodata1.keys()).includes(`${actionQ.size}`)));
         eventsplashz += `${2 & actionQ.size}`;
      while (2 == eventsplashz.length) {
         eventsplashz += "1";
         break;
      }
      while (3 <= (tempnodata1.size + 4)) {
         modityT += `${modityT.length}`;
         break;
      }
         eventsplashz += `${3 >> (Math.min(3, Math.abs(tempnodata1.size)))}`;
      if ((actionQ.size >> (Math.min(Math.abs(4), 5))) <= 3 && (4 >> (Math.min(1, modityT.length))) <= 1) {
         actionQ = new Map([[`${actionQ.size}`, eventsplashz.length + actionQ.size]]);
      }
          let mergerg = 0.0;
          let sharea = 3.0;
         eventsplashz += `${eventsplashz.length >> (Math.min(4, Math.abs(tempnodata1.size)))}`;
         mergerg -= parseInt(`${mergerg}`) | 2;
         sharea /= Math.max(4, parseInt(`${mergerg}`) << (Math.min(5, Math.abs(parseInt(`${sharea}`)))));
      if (5 > modityT.length) {
          let distE = 2;
         eventsplashz += `${(eventsplashz == String.fromCharCode(119,0) ? tempnodata1.size : eventsplashz.length)}`;
         distE |= distE;
      }
         modityT = `${(String.fromCharCode(50,0) == modityT ? actionQ.size : modityT.length)}`;
       let tnewinterstitial2 = String.fromCharCode(100,95,49,49,95,105,110,115,116,114,0);
       let sina3 = String.fromCharCode(105,110,116,101,103,114,105,116,121,95,56,95,57,54,0);
         modityT = `${(String.fromCharCode(77,0) == tnewinterstitial2 ? tnewinterstitial2.length : actionQ.size)}`;
      while (!eventsplashz.endsWith(`${tnewinterstitial2.length}`)) {
          let relatedI = String.fromCharCode(99,95,50,57,95,105,110,112,117,116,0);
          let linea: Map<any, any> = new Map([[String.fromCharCode(105,110,102,105,110,105,116,101,95,56,95,57,53,0),319], [String.fromCharCode(101,120,105,115,116,105,110,103,95,49,95,56,48,0),293], [String.fromCharCode(97,95,55,53,95,98,105,116,109,97,112,0),119]]);
         tnewinterstitial2 = `${modityT.length}`;
         relatedI = `${relatedI.length}`;
         linea = new Map([[`${linea.size}`, linea.size / (Math.max(relatedI.length, 4))]]);
         break;
      }
      settingsh += 3;
      break;
   }
      iconclosewhitebg0 /= Math.max(1, parseFloat(`${parseInt(`${promotionT}`) & 2}`));
   if (merger7) {
       let iconnotificationnew6 = false;
       let whistleoranget = 2.0;
       let elementsJ = String.fromCharCode(104,101,97,100,115,95,117,95,50,56,0);
       let libavfilters: Map<any, any> = new Map([[String.fromCharCode(115,95,49,51,95,104,115,99,97,108,101,114,0),true ], [String.fromCharCode(118,95,52,49,95,105,110,118,105,116,101,0),false ]]);
       let hongkongo = String.fromCharCode(101,110,117,109,118,97,108,117,101,95,104,95,54,51,0);
      while (elementsJ.length <= libavfilters.size) {
         elementsJ += `${libavfilters.size * 2}`;
         break;
      }
      for (let d = 0; d < 2; d++) {
         hongkongo += `${parseInt(`${whistleoranget}`)}`;
      }
      let whitebello = 7025951.0 <= whistleoranget;
      do {
          let stationw = true;
          let libavcodec_: Map<any, any> = new Map([[String.fromCharCode(106,115,111,110,115,95,116,95,49,52,0),false ], [String.fromCharCode(112,111,108,113,97,95,54,95,55,55,0),true ], [String.fromCharCode(98,95,57,52,95,115,109,118,106,112,101,103,0),true ]]);
         whistleoranget -= parseFloat(`${3}`);
         stationw = !stationw;
         libavcodec_ = new Map([[`${libavcodec_.size}`, 2]]);
         if (whitebello) {
            break;
         }
      } while (((1.91 * whistleoranget) > 3.80) && whitebello);
       let projectC = 0.0;
      let backA = whistleoranget >= 9400388.0;
      do {
          let layoutE = 5.0;
          let dragclosef = 0.0;
         whistleoranget -= parseFloat(`${1 % (Math.max(parseInt(`${projectC}`), 8))}`);
         layoutE *= parseFloat(`${parseInt(`${layoutE}`) + parseInt(`${dragclosef}`)}`);
         dragclosef *= parseFloat(`${3}`);
         if (backA) {
            break;
         }
      } while (((elementsJ.length * 2) > 3) && backA);
      while ((projectC / 5.14) == 3.87) {
          let profileactiveo = 3;
         projectC -= parseFloat(`${elementsJ.length}`);
         profileactiveo <<= Math.min(5, Math.abs(2 + profileactiveo));
         break;
      }
      if ((whistleoranget / (Math.max(parseFloat(`${elementsJ.length}`), 3))) >= 3.27 || 3 >= (2 ^ elementsJ.length)) {
         whistleoranget -= parseFloat(`${2 - parseInt(`${whistleoranget}`)}`);
      }
         hongkongo = `${2 % (Math.max(parseInt(`${whistleoranget}`), 8))}`;
         libavfilters = new Map([[hongkongo, 3]]);
         iconnotificationnew6 = libavfilters.size == 42;
         elementsJ += `${(parseInt(`${projectC}`) ^ (iconnotificationnew6 ? 4 : 4))}`;
      for (let n = 0; n < 3; n++) {
         projectC *= (parseFloat(`${(iconnotificationnew6 ? 1 : 4) >> (Math.min(Math.abs(parseInt(`${projectC}`)), 3))}`));
      }
          let langK = true;
          let predictiondefaultJ: Array<any> = [301, 277, 812];
          let carousel6 = 1.0;
         projectC /= Math.max(parseFloat(`${2 | parseInt(`${projectC}`)}`), 5);
         langK = !langK;
         predictiondefaultJ = [predictiondefaultJ.length];
         carousel6 *= 1;
         hongkongo = `${parseInt(`${projectC}`)}`;
         hongkongo = `${parseInt(`${projectC}`)}`;
      merger7 = gifgoalZ.length >= libmapbufferjnim;
   }
       let largebrightnessI: Map<any, any> = new Map([[String.fromCharCode(118,105,115,105,116,111,114,95,116,95,52,53,0),556], [String.fromCharCode(116,101,120,105,100,101,112,95,112,95,51,52,0),65]]);
         largebrightnessI = new Map([[`${largebrightnessI.size}`, 3]]);
         largebrightnessI = new Map([[`${largebrightnessI.size}`, 3 ^ largebrightnessI.size]]);
          let matchh = String.fromCharCode(104,95,52,49,95,98,108,111,99,107,103,114,111,117,112,0);
          let tickedf = false;
         largebrightnessI.set(`${matchh}`, (String.fromCharCode(66,0) == matchh ? largebrightnessI.size : matchh.length));
         tickedf = (tickedf ? !tickedf : !tickedf);
      smallh = `${parseInt(`${iconclosewhitebg0}`) << (Math.min(3, Math.abs(2)))}`;

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
       let mathA = 2.0;
    let ajaxp: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,105,101,114,95,55,95,54,57,0),599], [String.fromCharCode(120,95,54,95,97,116,104,0),485], [String.fromCharCode(100,95,50,50,95,110,101,119,115,108,101,116,116,101,114,0),555]]);
    let type_js1 = false;
    let malaysiaT = 2;
    let redgoalL = 4.0;
    let binddatasz = String.fromCharCode(113,95,56,53,95,115,117,98,108,97,121,111,117,116,115,0);
    let minimizeQ = false;
    let promotion_ = String.fromCharCode(118,95,49,56,95,115,101,114,118,105,99,101,0);
    let x_imageT = String.fromCharCode(101,95,52,50,95,100,118,100,97,116,97,0);
    let pingS = String.fromCharCode(101,109,117,108,97,116,101,100,95,111,95,54,49,0);
    let proxy2 = String.fromCharCode(114,101,97,108,108,111,99,112,95,121,95,55,56,0);
    let libsgcoreL = 3;
    let iconarrowleft0 = String.fromCharCode(102,95,57,95,116,114,97,99,101,114,0);
    let uimanager9: Array<any> = [405, 265, 212];
      ajaxp.set(promotion_, ((type_js1 ? 1 : 2) ^ 1));
      ajaxp.set(proxy2, proxy2.length | 1);
      minimizeQ = ajaxp.size == parseInt(`${redgoalL}`);
   while (ajaxp.size > 2) {
      ajaxp = new Map([[`${minimizeQ}`, 3 << (Math.min(Math.abs(parseInt(`${redgoalL}`)), 4))]]);
      break;
   }
       let fcdaebecbcbafcdfceaaeccfeacdbC = String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,95,120,95,54,52,0);
         fcdaebecbcbafcdfceaaeccfeacdbC = `${fcdaebecbcbafcdfceaaeccfeacdbC.length}`;
      while (4 >= fcdaebecbcbafcdfceaaeccfeacdbC.length) {
         fcdaebecbcbafcdfceaaeccfeacdbC += `${fcdaebecbcbafcdfceaaeccfeacdbC.length * 3}`;
         break;
      }
         fcdaebecbcbafcdfceaaeccfeacdbC += `${fcdaebecbcbafcdfceaaeccfeacdbC.length}`;
      binddatasz = `${malaysiaT / (Math.max(promotion_.length, 5))}`;
      ajaxp.set(`${redgoalL}`, parseInt(`${redgoalL}`) - 3);
      x_imageT = `${pingS.length}`;
   while (4 >= (malaysiaT >> (Math.min(Math.abs(2), 1))) || (4.15 - redgoalL) >= 1.17) {
       let homeA = String.fromCharCode(113,95,57,95,99,114,111,119,100,105,110,0);
       let libffmpegkito: Map<any, any> = new Map([[String.fromCharCode(115,109,115,95,111,95,55,51,0),String.fromCharCode(98,121,116,101,95,117,95,51,49,0)], [String.fromCharCode(99,95,51,95,118,99,120,112,114,111,106,0),String.fromCharCode(98,95,52,95,99,111,110,102,105,103,117,114,101,0)], [String.fromCharCode(116,101,114,109,95,119,95,56,57,0),String.fromCharCode(112,95,49,49,95,115,117,98,116,97,115,107,0)]]);
       let logoX = 4.0;
       let o_viewS: Map<any, any> = new Map([[String.fromCharCode(121,95,53,52,95,118,112,99,99,0),572], [String.fromCharCode(104,95,54,50,95,111,114,97,110,103,101,0),419], [String.fromCharCode(97,112,112,101,97,114,101,110,99,101,95,117,95,54,48,0),298]]);
      while (homeA.length <= o_viewS.size) {
         homeA += `${libffmpegkito.size}`;
         break;
      }
         libffmpegkito = new Map([[`${o_viewS.size}`, o_viewS.size]]);
         o_viewS.set(homeA, 2);
       let libfollyx = 2;
      if (3 >= (homeA.length & libfollyx)) {
          let inouttargetredb = true;
         libfollyx ^= libffmpegkito.size;
      }
       let profileactiveL: Array<any> = [302, 803];
       let bingt: Array<any> = [String.fromCharCode(111,114,105,103,95,118,95,54,54,0), String.fromCharCode(120,95,57,52,95,97,117,116,104,105,110,102,111,0)];
      let cancelW = 9138373 >= libfollyx;
      do {
         libfollyx <<= Math.min(5, Math.abs(o_viewS.size + libfollyx));
         if (cancelW) {
            break;
         }
      } while ((!homeA.endsWith(`${libfollyx}`)) && cancelW);
      let redgoalK = profileactiveL.length >= 9357010;
      do {
         profileactiveL.push(libffmpegkito.size - parseInt(`${logoX}`));
         if (redgoalK) {
            break;
         }
      } while ((logoX == parseFloat(`${profileactiveL.length}`)) && redgoalK);
      if (3.82 == (logoX * 4.31) && (parseFloat(`${bingt.length}`) * logoX) == 4.31) {
         bingt.push(3 >> (Math.min(5, Math.abs(parseInt(`${logoX}`)))));
      }
      if (5 > (profileactiveL.length ^ bingt.length)) {
          let iconnotificationnewF = false;
          let neonk: Map<any, any> = new Map([[String.fromCharCode(105,95,52,48,95,100,114,105,118,101,110,0),293], [String.fromCharCode(116,95,50,51,95,105,110,105,116,0),735], [String.fromCharCode(109,95,51,53,95,114,101,115,105,122,101,0),358]]);
         profileactiveL.push(3);
         iconnotificationnewF = (neonk.size / (Math.max(3, neonk.size))) > 57;
      }
      while (!bingt.includes(profileactiveL.length)) {
          let middlewarey = String.fromCharCode(102,95,50,49,95,103,101,116,112,101,101,114,97,100,100,114,0);
          let iconarrowrightorangeC = 5.0;
         profileactiveL = [parseInt(`${logoX}`)];
         middlewarey = `${parseInt(`${iconarrowrightorangeC}`) % 2}`;
         iconarrowrightorangeC += middlewarey.length;
         break;
      }
         libfollyx -= o_viewS.size >> (Math.min(Math.abs(libffmpegkito.size), 3));
      redgoalL += parseFloat(`${2 | homeA.length}`);
      break;
   }
   while (proxy2.startsWith(`${pingS.length}`)) {
      pingS += "3";
      break;
   }

      if (!isDoubleTap.value) {

      mathA *= parseFloat(`${malaysiaT}`);
   if (pingS.length <= 4 || 4 <= x_imageT.length) {
       let wifirouter5 = 5.0;
       let interstitialT = String.fromCharCode(97,115,99,105,105,95,112,95,51,0);
       let penaltyA = 5.0;
       let iconsettingz = 1;
      if (4 == (interstitialT.length & 3) && (3.30 - wifirouter5) == 1.9) {
          let collectionp = false;
          let borderlessJ = String.fromCharCode(118,95,49,56,95,101,120,112,101,99,116,0);
          let nterstitialS = String.fromCharCode(102,105,110,100,97,115,111,99,95,109,95,52,56,0);
          let iconnewchat0 = 2.0;
         wifirouter5 *= nterstitialS.length - 1;
         collectionp = 37.59 > iconnewchat0 && 55 > borderlessJ.length;
         borderlessJ = `${(borderlessJ == String.fromCharCode(113,0) ? parseInt(`${iconnewchat0}`) : borderlessJ.length)}`;
         nterstitialS = `${borderlessJ.length}`;
      }
       let loginD = String.fromCharCode(97,95,56,53,95,115,117,98,108,97,121,111,117,116,115,0);
       let circleo = String.fromCharCode(100,101,108,97,117,110,97,121,95,115,95,54,53,0);
          let middlewareh = String.fromCharCode(99,108,97,112,95,122,95,56,57,0);
         interstitialT += `${loginD.length + 1}`;
         middlewareh = "3";
      let tooltipsJ = penaltyA >= 9886135.0;
      do {
         penaltyA *= iconsettingz * 1;
         if (tooltipsJ) {
            break;
         }
      } while (tooltipsJ && (wifirouter5 == penaltyA));
         interstitialT += `${2 | circleo.length}`;
       let video2 = 5.0;
       let largebrightnessI = 5.0;
          let whitevideoliveE = true;
         video2 -= (parseFloat(`${loginD == String.fromCharCode(98,0) ? parseInt(`${video2}`) : loginD.length}`));
         whitevideoliveE = (!whitevideoliveE ? whitevideoliveE : whitevideoliveE);
      for (let h = 0; h < 3; h++) {
          let airbnbstarN = String.fromCharCode(102,95,49,48,95,117,110,114,101,115,111,108,118,97,98,108,101,0);
          let predictionlossS = String.fromCharCode(112,95,49,54,95,111,117,116,99,111,109,101,0);
          let dicelogoo = 1;
          let imagemanager5 = String.fromCharCode(113,95,56,55,95,112,111,115,116,105,110,105,116,0);
         largebrightnessI /= Math.max(2, parseFloat(`${predictionlossS.length}`));
         airbnbstarN += `${(imagemanager5 == String.fromCharCode(102,0) ? imagemanager5.length : dicelogoo)}`;
         predictionlossS += `${1 | dicelogoo}`;
      }
      if (3.44 < (wifirouter5 * loginD.length)) {
         wifirouter5 *= loginD.length;
      }
         circleo += `${parseInt(`${largebrightnessI}`)}`;
       let attributedstringb = false;
       let showmoreJ = true;
         attributedstringb = iconsettingz >= 78;
      x_imageT = `${promotion_.length >> (Math.min(Math.abs(3), 1))}`;
   }
      proxy2 = `${proxy2.length}`;
   while ((promotion_.length - parseInt(`${redgoalL}`)) <= 3 || 1.76 <= (5.45 - redgoalL)) {
      promotion_ = `${(String.fromCharCode(82,0) == binddatasz ? binddatasz.length : x_imageT.length)}`;
      break;
   }
   while (4 < (ajaxp.size ^ 2) || 4 < (ajaxp.size ^ 2)) {
       let configJ: Map<any, any> = new Map([[String.fromCharCode(105,95,51,57,95,114,101,112,101,97,116,101,114,0),false ], [String.fromCharCode(101,95,55,51,95,114,101,117,112,108,111,97,100,0),false ]]);
       let footballfieldG: Map<any, any> = new Map([[String.fromCharCode(98,117,116,116,111,110,115,95,105,95,49,56,0),956], [String.fromCharCode(104,95,52,95,97,101,115,111,112,116,0),976], [String.fromCharCode(109,95,52,53,95,105,110,99,114,98,108,111,98,0),637]]);
       let libreactnativejniT: Array<any> = [146, 396, 624];
         configJ = new Map([[`${footballfieldG.size}`, 3 - configJ.size]]);
         footballfieldG.set(`${footballfieldG.size}`, footballfieldG.size);
         libreactnativejniT.push(footballfieldG.size | 3);
       let libimagepipelineW = String.fromCharCode(98,95,56,52,95,107,101,121,115,112,101,99,0);
       let pauseb: Map<any, any> = new Map([[String.fromCharCode(97,108,97,114,109,95,97,95,48,0),42], [String.fromCharCode(119,95,56,95,108,111,99,97,116,105,111,110,0),276]]);
       let sharemodalV: Map<any, any> = new Map([[String.fromCharCode(102,95,49,57,95,114,101,108,97,121,111,117,116,0),958], [String.fromCharCode(122,95,55,56,95,115,116,114,105,100,0),401]]);
      while (5 == (libimagepipelineW.length % (Math.max(5, 6))) || (libimagepipelineW.length % (Math.max(8, libreactnativejniT.length))) == 5) {
         libimagepipelineW = `${footballfieldG.size + 1}`;
         break;
      }
       let appsq = 3;
       let iconrightorangem = 2;
          let singaporeZ: Array<any> = [461, 779];
          let mbjscommonN = 1.0;
          let logouserO = 5.0;
         iconrightorangem ^= footballfieldG.size;
         singaporeZ = [parseInt(`${mbjscommonN}`) | singaporeZ.length];
         mbjscommonN *= parseFloat(`${singaporeZ.length}`);
         logouserO /= Math.max(singaporeZ.length % (Math.max(8, parseInt(`${mbjscommonN}`))), 1);
      if (3 > (appsq - 5) && 3 > (appsq - 5)) {
          let collectionj = 2.0;
          let bgvipsport_ = String.fromCharCode(119,95,55,54,95,104,101,97,100,108,105,110,101,0);
          let notificationfillemptyB = 3.0;
         appsq &= libreactnativejniT.length << (Math.min(Math.abs(3), 4));
         collectionj /= Math.max(1, parseFloat(`${2 & parseInt(`${collectionj}`)}`));
         bgvipsport_ += `${bgvipsport_.length & 1}`;
         notificationfillemptyB /= Math.max(parseFloat(`${bgvipsport_.length + parseInt(`${collectionj}`)}`), 2);
      }
      x_imageT += "2";
      break;
   }
   while ((5 / (Math.max(7, promotion_.length))) == 1 || 4.6 == (parseFloat(`${promotion_.length}`) - mathA)) {
      mathA -= parseFloat(`${3}`);
      break;
   }
      binddatasz = `${3 % (Math.max(5, x_imageT.length))}`;
      binddatasz = `${ajaxp.size << (Math.min(Math.abs(1), 1))}`;
      binddatasz = `${((minimizeQ ? 3 : 3) | parseInt(`${redgoalL}`))}`;
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
