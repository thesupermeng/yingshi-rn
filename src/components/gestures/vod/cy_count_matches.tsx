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
       let invitem = 1;
    let n_playerL = String.fromCharCode(102,114,105,101,110,100,115,95,117,95,56,52,0);
    let condensedx = String.fromCharCode(118,111,116,101,115,95,50,95,56,52,0);
    let spinner3 = 0.0;
    let modalk = String.fromCharCode(115,95,49,48,48,95,105,110,116,101,110,116,105,111,110,0);
    let shrinku: Map<any, any> = new Map([[String.fromCharCode(122,95,56,56,95,117,110,105,118,101,114,115,97,108,0),223], [String.fromCharCode(99,108,105,99,107,95,118,95,57,49,0),566], [String.fromCharCode(115,99,114,111,108,108,101,114,95,99,95,57,49,0),511]]);
    let countdownf = false;
    let actionv = true;
    let animationc = 4.0;
   let actionQ = 9269552 >= invitem;
   do {
      invitem /= Math.max(((countdownf ? 5 : 1) << (Math.min(condensedx.length, 5))), 2);
      if (actionQ) {
         break;
      }
   } while ((modalk.startsWith(`${invitem}`)) && actionQ);
   if (modalk.includes(`${countdownf}`)) {
       let viewerS = String.fromCharCode(114,95,50,52,95,105,110,115,116,97,108,108,0);
      if (viewerS == viewerS) {
         viewerS += `${viewerS.length ^ viewerS.length}`;
      }
      let unselectedP = String.fromCharCode(104,103,112,50,49,115,51,0) == viewerS;
      do {
          let nalyticsg: Array<any> = [String.fromCharCode(121,95,54,48,95,116,121,112,101,100,101,102,115,0), String.fromCharCode(121,95,56,53,95,112,97,114,116,105,99,105,112,97,116,105,110,103,0)];
          let filterC = String.fromCharCode(107,95,53,48,95,117,110,114,111,117,110,100,101,100,0);
         viewerS += `${viewerS.length % 1}`;
         nalyticsg = [1];
         filterC += `${(String.fromCharCode(66,0) == filterC ? filterC.length : nalyticsg.length)}`;
         if (unselectedP) {
            break;
         }
      } while ((viewerS.length <= viewerS.length) && unselectedP);
      let taiwan0 = 5618194 <= viewerS.length;
      do {
         viewerS = `${viewerS.length}`;
         if (taiwan0) {
            break;
         }
      } while ((viewerS.startsWith(`${viewerS.length}`)) && taiwan0);
      modalk += `${((countdownf ? 5 : 3) >> (Math.min(Math.abs(invitem), 4)))}`;
   }
      modalk = `${condensedx.length}`;
       let footballp = String.fromCharCode(109,97,114,107,101,116,95,51,95,55,51,0);
       let crossX: Array<any> = [String.fromCharCode(97,114,99,104,105,118,101,114,95,114,95,54,55,0), String.fromCharCode(118,105,115,105,98,105,108,105,116,105,101,115,95,48,95,51,49,0), String.fromCharCode(99,95,55,50,95,101,110,116,105,114,101,0)];
       let collection0: Array<any> = [String.fromCharCode(107,101,121,112,97,116,104,115,95,97,95,55,48,0), String.fromCharCode(99,117,101,115,95,50,95,54,0)];
      let tumbnailf = String.fromCharCode(48,56,102,109,105,105,102,54,121,107,0) == footballp;
      do {
         footballp = `${crossX.length ^ footballp.length}`;
         if (tumbnailf) {
            break;
         }
      } while (tumbnailf && (5 == (crossX.length / (Math.max(8, footballp.length)))));
         crossX = [crossX.length];
       let constantsG = String.fromCharCode(97,99,113,117,97,110,116,95,122,95,55,57,0);
       let textQ = String.fromCharCode(122,95,49,55,95,112,105,112,101,119,105,114,101,0);
      while (textQ.endsWith(`${crossX.length}`)) {
         textQ += `${footballp.length}`;
         break;
      }
      let sortX = 9268674 >= footballp.length;
      do {
         footballp = `${textQ.length}`;
         if (sortX) {
            break;
         }
      } while (sortX && (constantsG == String.fromCharCode(68,0)));
      while ((crossX.length & collection0.length) == 5 && 3 == (collection0.length & 5)) {
         crossX.push(1 ^ collection0.length);
         break;
      }
       let matchY = 2;
       let lefti = 5;
      while (footballp.endsWith(constantsG)) {
          let gestureo = String.fromCharCode(114,101,97,112,95,115,95,55,56,0);
          let currentn = false;
         constantsG += `${collection0.length}`;
         gestureo = `${(1 >> (Math.min(5, Math.abs((currentn ? 5 : 5)))))}`;
         currentn = gestureo.length >= 27 || !currentn;
         break;
      }
       let bootsplashq = String.fromCharCode(122,95,57,51,95,119,97,107,101,0);
      modalk += `${parseInt(`${spinner3}`) - 2}`;
   if (!Array.from(shrinku.keys()).includes(`${spinner3}`)) {
       let catagory0 = String.fromCharCode(114,108,105,110,101,95,106,95,51,51,0);
       let middleware1 = 4;
          let textM = 3.0;
         catagory0 += `${parseInt(`${textM}`) << (Math.min(2, Math.abs(middleware1)))}`;
          let time_c4J = String.fromCharCode(105,95,51,52,95,100,101,99,111,117,112,108,101,0);
          let gmailk: Array<any> = [81, 664, 434];
         middleware1 |= 3;
         time_c4J = `${time_c4J.length}`;
         gmailk.push((String.fromCharCode(117,0) == time_c4J ? gmailk.length : time_c4J.length));
         middleware1 /= Math.max(catagory0.length * middleware1, 1);
       let minivodv = String.fromCharCode(98,117,116,111,110,95,50,95,53,0);
         middleware1 += middleware1 << (Math.min(catagory0.length, 5));
      while (3 > (middleware1 ^ 4) || (minivodv.length ^ middleware1) > 4) {
          let sporth = 2;
          let telegram2: Map<any, any> = new Map([[String.fromCharCode(97,116,104,95,51,95,57,50,0),true ], [String.fromCharCode(105,100,108,105,115,116,95,104,95,50,49,0),true ]]);
         middleware1 >>= Math.min(2, Math.abs(sporth));
         sporth *= telegram2.size;
         telegram2 = new Map([[`${telegram2.size}`, 1]]);
         break;
      }
      shrinku.set(`${spinner3}`, (condensedx == String.fromCharCode(104,0) ? condensedx.length : parseInt(`${spinner3}`)));
   }
   let fulln = 5472577 >= condensedx.length;
   do {
       let crownZ = 2.0;
       let confirmationa = false;
       let greyz = 2;
          let resultq = 1;
          let teamO = 3.0;
         confirmationa = crownZ == 45.72;
         resultq ^= 2 * parseInt(`${teamO}`);
         teamO += parseFloat(`${1}`);
         confirmationa = greyz <= crownZ;
      let gestureD = crownZ >= 9897675.0;
      do {
          let thailanda = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,95,101,95,54,49,0);
          let backwardb: Array<any> = [String.fromCharCode(100,101,114,105,118,101,95,48,95,48,0), String.fromCharCode(101,95,51,52,95,106,112,101,103,108,115,0)];
         crownZ -= thailanda.length;
         thailanda += "1";
         backwardb = [backwardb.length * backwardb.length];
         if (gestureD) {
            break;
         }
      } while ((crownZ < greyz) && gestureD);
         confirmationa = greyz < 1 || !confirmationa;
       let half9 = String.fromCharCode(114,101,109,111,118,101,103,114,97,105,110,95,98,95,50,53,0);
       let plusm = String.fromCharCode(118,95,50,52,95,111,117,114,0);
      for (let t = 0; t < 3; t++) {
         plusm += `${(greyz | (confirmationa ? 3 : 3))}`;
      }
         confirmationa = plusm.length == crownZ;
      while (2 <= (half9.length + 4) || 1 <= (4 + greyz)) {
          let pause6 = String.fromCharCode(109,105,100,110,105,103,104,116,95,108,95,57,52,0);
         greyz >>= Math.min(4, Math.abs((pause6 == String.fromCharCode(52,0) ? pause6.length : greyz)));
         break;
      }
      while (plusm.includes(`${half9.length}`)) {
          let appsH: Map<any, any> = new Map([[String.fromCharCode(120,95,55,49,95,113,117,97,110,116,105,122,101,100,0),719], [String.fromCharCode(115,112,101,101,100,95,117,95,52,51,0),404], [String.fromCharCode(104,101,120,98,121,116,101,95,107,95,51,54,0),485]]);
          let carouselQ = String.fromCharCode(112,97,114,97,109,95,51,95,52,50,0);
         plusm = `${appsH.size}`;
         appsH = new Map([[carouselQ, 2]]);
         carouselQ = `${1 >> (Math.min(1, carouselQ.length))}`;
         break;
      }
      condensedx += `${modalk.length + 3}`;
      if (fulln) {
         break;
      }
   } while ((modalk.length == 5 || condensedx.length == 5) && fulln);

    setShowSlider(true);

      spinner3 /= Math.max(shrinku.size / 1, 3);
      condensedx = `${shrinku.size >> (Math.min(4, Math.abs(parseInt(`${spinner3}`))))}`;
   if (!countdownf && 2 <= modalk.length) {
       let layout7: Array<any> = [String.fromCharCode(116,114,97,110,115,105,116,105,111,110,101,100,95,56,95,53,54,0), String.fromCharCode(115,116,97,116,105,111,110,97,114,105,116,121,95,108,95,51,51,0), String.fromCharCode(107,95,53,52,95,97,114,101,97,0)];
       let bellV = String.fromCharCode(106,95,50,54,95,109,97,107,101,0);
       let shirtO: Array<any> = [407, 390, 822];
       let private_dgb = String.fromCharCode(99,111,110,115,116,97,110,116,95,117,95,49,57,0);
       let rewindo = String.fromCharCode(99,95,56,56,95,112,97,105,110,116,0);
          let p_lock5 = String.fromCharCode(97,95,53,48,95,101,120,116,101,110,115,105,98,105,108,105,116,121,0);
          let nativex = String.fromCharCode(115,117,98,99,101,108,95,117,95,55,49,0);
          let popupf = 2;
         bellV += `${popupf}`;
         p_lock5 = `${p_lock5.length + nativex.length}`;
         nativex += `${1 << (Math.min(4, p_lock5.length))}`;
         popupf += nativex.length & 3;
      while ((rewindo.length ^ 5) > 2 && (shirtO.length ^ 5) > 1) {
         rewindo += "1";
         break;
      }
      for (let d = 0; d < 2; d++) {
          let inactivef = true;
          let philippinesL: Array<any> = [443, 23, 749];
          let activel = String.fromCharCode(109,95,50,53,95,115,117,109,120,0);
          let recommendationp = String.fromCharCode(121,95,49,53,95,115,101,109,97,110,116,105,99,97,108,108,121,0);
         shirtO.push(bellV.length);
         inactivef = 4 > philippinesL.length;
         philippinesL = [philippinesL.length % (Math.max(2, 6))];
         activel += `${(2 - (inactivef ? 2 : 4))}`;
         recommendationp += `${recommendationp.length | activel.length}`;
      }
       let math2: Array<any> = [String.fromCharCode(119,95,57,95,100,112,99,109,0), String.fromCharCode(103,95,56,48,95,105,110,112,117,116,0), String.fromCharCode(102,95,57,56,95,106,117,115,116,105,102,105,101,100,0)];
       let previewX: Array<any> = [972, 727, 832];
      let firebasec = 5777805 <= previewX.length;
      do {
          let expiredm = 4;
          let moreE = 4.0;
          let lightZ: Array<any> = [712, 97, 675];
         previewX = [1];
         expiredm ^= parseInt(`${moreE}`) & expiredm;
         moreE *= parseFloat(`${lightZ.length}`);
         lightZ = [lightZ.length | parseInt(`${moreE}`)];
         if (firebasec) {
            break;
         }
      } while (firebasec && ((rewindo.length * previewX.length) == 2));
       let bottomH = 0.0;
       let volume7 = 4.0;
      if (!private_dgb.includes(`${volume7}`)) {
         private_dgb += `${parseInt(`${volume7}`) - layout7.length}`;
      }
      while (!private_dgb.endsWith(`${layout7.length}`)) {
         private_dgb += "2";
         break;
      }
       let actionD = 3.0;
       let settingA = String.fromCharCode(117,110,115,111,114,116,101,100,95,53,95,52,0);
          let clear9: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,95,97,95,49,50,0),false ], [String.fromCharCode(98,117,102,115,95,57,95,52,51,0),false ]]);
          let floatingu = false;
         layout7 = [clear9.size];
         clear9 = new Map([[`${floatingu}`, 3]]);
      while ((private_dgb.length | 1) <= 3 || 3 <= (1 | private_dgb.length)) {
          let downloadB = false;
          let saveX = true;
         private_dgb = `${2 | bellV.length}`;
         downloadB = (saveX ? !downloadB : saveX);
         break;
      }
      let heartd = 7918800.0 >= bottomH;
      do {
         bottomH += parseInt(`${actionD}`);
         if (heartd) {
            break;
         }
      } while (((bottomH * 2.41) == 3.17 || (bottomH * 2.41) == 3.37) && heartd);
      if ((bottomH - 5.90) < 3.14 && (math2.length * 4) < 4) {
         bottomH += parseInt(`${actionD}`);
      }
      for (let i = 0; i < 1; i++) {
         previewX = [math2.length * 2];
      }
      countdownf = n_playerL.endsWith(`${invitem}`);
   }
   while (n_playerL.length <= condensedx.length) {
      n_playerL += `${(String.fromCharCode(122,0) == modalk ? parseInt(`${spinner3}`) : modalk.length)}`;
      break;
   }
      countdownf = n_playerL.length == 85 && 54.36 == spinner3;
       let gesture5: Array<any> = [String.fromCharCode(108,115,112,108,112,99,95,109,95,52,55,0), String.fromCharCode(106,95,50,52,95,102,102,117,114,108,0), String.fromCharCode(106,95,54,50,95,112,104,97,115,101,115,0)];
         gesture5.push(gesture5.length);
          let modityA = 2;
         gesture5 = [modityA];
      let natived = 8063024 >= gesture5.length;
      do {
          let matchesR = String.fromCharCode(112,95,52,48,95,99,111,108,120,0);
          let sourceT = String.fromCharCode(98,105,97,115,95,100,95,49,53,0);
          let b_imageA = true;
          let disconnecteda: Map<any, any> = new Map([[String.fromCharCode(109,95,56,54,95,102,105,108,101,104,101,97,100,101,114,0),String.fromCharCode(115,121,110,116,104,95,118,95,54,0)], [String.fromCharCode(119,95,54,54,95,117,110,97,108,105,103,110,101,100,0),String.fromCharCode(122,95,56,57,95,120,117,116,105,108,0)]]);
         gesture5.push(((b_imageA ? 1 : 1) | disconnecteda.size));
         matchesR += `${1 + matchesR.length}`;
         sourceT += `${2 * sourceT.length}`;
         b_imageA = matchesR.length < sourceT.length;
         disconnecteda.set(matchesR, 1);
         if (natived) {
            break;
         }
      } while (((2 * gesture5.length) == 3 && 4 == (2 * gesture5.length)) && natived);
      invitem >>= Math.min(4, modalk.length);
    clearTimeout(sliderTimeout.current);

       let photot: Array<any> = [641, 739];
       let liveJ = 3.0;
       let philippineso = String.fromCharCode(97,118,114,101,115,97,109,112,108,101,114,101,115,95,122,95,50,0);
          let unreadu = 1;
          let pageE = String.fromCharCode(110,111,116,105,102,121,95,118,95,54,50,0);
         liveJ -= 3;
         unreadu /= Math.max(4, (pageE == String.fromCharCode(122,0) ? pageE.length : unreadu));
         philippineso = `${parseInt(`${liveJ}`)}`;
      if (!photot.includes(liveJ)) {
         photot = [philippineso.length];
      }
      while (photot.length == 1) {
         liveJ *= parseInt(`${liveJ}`) * 3;
         break;
      }
      let trashg = 9661856.0 <= liveJ;
      do {
          let index7 = String.fromCharCode(98,95,55,49,95,100,105,116,104,101,114,0);
          let foundW = String.fromCharCode(122,95,54,55,95,99,104,101,99,107,0);
          let plusR: Array<any> = [103, 569];
          let gestures0 = String.fromCharCode(113,95,50,48,95,115,97,110,105,116,105,122,101,100,0);
         liveJ += gestures0.length;
         index7 += `${foundW.length * plusR.length}`;
         foundW += `${plusR.length / (Math.max(foundW.length, 2))}`;
         gestures0 += `${index7.length}`;
         if (trashg) {
            break;
         }
      } while (trashg && (4.93 <= (liveJ / (Math.max(1.17, 2)))));
      let xvodY = 5206806.0 <= liveJ;
      do {
         liveJ /= Math.max(3 & parseInt(`${liveJ}`), 5);
         if (xvodY) {
            break;
         }
      } while ((photot.includes(liveJ)) && xvodY);
         liveJ += photot.length;
      while ((parseInt(`${liveJ}`) * photot.length) <= 1) {
         photot = [philippineso.length + 3];
         break;
      }
          let trophyy: Array<any> = [299, 238];
          let vignette9 = String.fromCharCode(97,108,108,114,103,98,95,116,95,54,52,0);
         photot.push(trophyy.length + philippineso.length);
         trophyy.push(3 + vignette9.length);
         vignette9 += "3";
      invitem -= 2;
       let configureW: Array<any> = [362, 864];
       let eventu = 0;
          let prediction6 = 2;
          let agreement7: Map<any, any> = new Map([[String.fromCharCode(99,95,51,54,95,116,97,108,107,0),147], [String.fromCharCode(120,95,55,49,95,109,111,110,105,116,111,114,0),412], [String.fromCharCode(106,95,57,53,0),775]]);
         configureW = [eventu];
         prediction6 /= Math.max(prediction6 + 2, 5);
         agreement7 = new Map([[`${agreement7.size}`, 2 / (Math.max(4, agreement7.size))]]);
         eventu %= Math.max(5, 2 & eventu);
          let backwardS: Map<any, any> = new Map([[String.fromCharCode(105,95,57,55,95,101,120,112,111,110,101,110,116,0),false ], [String.fromCharCode(106,95,55,55,95,99,111,108,108,101,99,116,97,98,108,101,0),false ]]);
          let placementk = 3;
          let splashi = 4;
         configureW = [splashi / (Math.max(10, placementk))];
         backwardS = new Map([[`${backwardS.size}`, 2]]);
         placementk *= backwardS.size;
          let nativeH = 3.0;
          let zhengpianC = String.fromCharCode(102,114,97,99,95,121,95,56,48,0);
          let service1: Array<any> = [451, 705];
         configureW.push(2 - configureW.length);
         nativeH /= Math.max(parseFloat(`${parseInt(`${nativeH}`) + 3}`), 5);
         zhengpianC = "3";
         service1 = [1];
      while ((configureW.length / 1) < 5) {
         eventu -= configureW.length * eventu;
         break;
      }
      if ((eventu * configureW.length) <= 2 && (configureW.length * eventu) <= 2) {
         eventu >>= Math.min(configureW.length, 3);
      }
      countdownf = (condensedx.length + n_playerL.length) > 34;
      modalk = `${shrinku.size}`;
       let overlayH: Map<any, any> = new Map([[String.fromCharCode(112,114,101,114,101,108,101,97,115,101,95,53,95,51,53,0),300], [String.fromCharCode(99,95,53,51,95,105,110,116,114,97,120,0),328], [String.fromCharCode(110,95,51,50,95,116,97,112,101,115,0),456]]);
       let downloadera = 1;
          let historys = String.fromCharCode(118,95,57,53,95,97,112,112,101,97,114,97,110,99,101,0);
          let descr = 3.0;
         downloadera |= historys.length;
         historys = `${parseInt(`${descr}`)}`;
      for (let x = 0; x < 1; x++) {
         overlayH.set(`${downloadera}`, overlayH.size);
      }
      if (!Array.from(overlayH.values()).includes(downloadera)) {
          let ball1 = 1.0;
          let fillY = 0;
          let productw = String.fromCharCode(108,95,51,95,111,112,101,114,97,116,105,110,103,0);
          let clearJ = String.fromCharCode(102,95,53,55,95,114,101,111,112,101,110,0);
         overlayH.set(`${downloadera}`, 1 << (Math.min(2, Math.abs(overlayH.size))));
         ball1 += fillY;
         fillY *= parseInt(`${ball1}`) / (Math.max(productw.length, 10));
         productw = `${fillY * 3}`;
         clearJ += "2";
      }
      while ((3 & overlayH.size) == 2 && 3 == (overlayH.size & 3)) {
         overlayH = new Map([[`${overlayH.size}`, downloadera]]);
         break;
      }
      for (let z = 0; z < 1; z++) {
          let bcopy_1qP = 1.0;
          let close5 = String.fromCharCode(102,115,112,112,95,105,95,52,49,0);
          let mutedT = String.fromCharCode(98,111,114,100,101,114,95,104,95,54,51,0);
         overlayH = new Map([[`${bcopy_1qP}`, 3 % (Math.max(6, parseInt(`${bcopy_1qP}`)))]]);
         close5 += `${close5.length << (Math.min(Math.abs(3), 5))}`;
         mutedT = "2";
      }
       let favoritex: Array<any> = [312, 158, 982];
       let darkn: Array<any> = [702, 546, 139];
      n_playerL = `${((countdownf ? 1 : 1))}`;
      invitem *= ((countdownf ? 1 : 4) % (Math.max(9, invitem)));
      countdownf = !countdownf;
    sliderTimeout.current = setTimeout(() => {

   for (let m = 0; m < 3; m++) {
       let placementl: Map<any, any> = new Map([[String.fromCharCode(109,95,56,55,95,102,114,101,101,122,101,0),true ], [String.fromCharCode(100,117,109,112,101,114,95,103,95,50,57,0),false ]]);
       let sharedB = 4.0;
       let splasht = 2;
       let redirectO = String.fromCharCode(105,110,105,116,97,108,105,122,101,95,106,95,55,48,0);
      while (splasht < sharedB) {
         sharedB += parseFloat(`${placementl.size | parseInt(`${sharedB}`)}`);
         break;
      }
      for (let l = 0; l < 2; l++) {
         placementl.set(`${splasht}`, 1 ^ splasht);
      }
          let settingm = String.fromCharCode(111,117,116,113,117,101,117,101,95,104,95,50,55,0);
          let moduleu: Array<any> = [757, 74, 325];
         sharedB -= parseFloat(`${3}`);
         settingm = `${settingm.length | 3}`;
         moduleu = [settingm.length & 1];
      while (5 > (splasht | placementl.size) || (5 | splasht) > 2) {
         splasht /= Math.max(5, 2);
         break;
      }
         placementl.set(`${redirectO}`, redirectO.length);
          let reneww = 4;
          let leftF = false;
          let target3 = 5.0;
         placementl.set(`${reneww}`, parseInt(`${sharedB}`) >> (Math.min(1, Math.abs(3))));
         reneww &= 3 % (Math.max(3, parseInt(`${target3}`)));
         leftF = leftF || 61.66 == target3;
          let detailc = 5.0;
          let text4: Array<any> = [691, 993, 611];
          let navigationb: Map<any, any> = new Map([[String.fromCharCode(111,95,50,55,95,100,117,114,103,101,114,0),String.fromCharCode(108,105,98,115,104,105,110,101,95,99,95,56,52,0)], [String.fromCharCode(97,99,99,111,114,100,105,110,103,95,103,95,54,57,0),String.fromCharCode(105,95,49,54,95,115,99,97,110,0)], [String.fromCharCode(118,101,114,115,105,111,110,101,100,95,100,95,56,48,0),String.fromCharCode(109,95,49,51,95,100,114,105,118,105,110,103,0)]]);
         redirectO = `${redirectO.length % 3}`;
         detailc *= parseFloat(`${2 + navigationb.size}`);
         text4 = [text4.length | 1];
         navigationb = new Map([[`${navigationb.size}`, navigationb.size * 2]]);
      if (sharedB <= 3.82) {
         placementl.set(redirectO, 3 | redirectO.length);
      }
      while ((sharedB / (Math.max(3, splasht))) <= 2.68) {
         splasht -= 2;
         break;
      }
         sharedB -= parseFloat(`${1 >> (Math.min(5, Math.abs(placementl.size)))}`);
      let gpayZ = sharedB <= 6780627.0;
      do {
          let orientationJ = 4.0;
          let watch_ = 3.0;
          let roboto6 = String.fromCharCode(102,111,108,108,111,119,115,95,102,95,49,56,0);
          let inviteD = String.fromCharCode(115,101,114,105,97,108,110,111,95,101,95,54,51,0);
          let profilek = String.fromCharCode(112,95,52,49,95,116,105,109,115,116,97,109,112,0);
         sharedB *= parseFloat(`${redirectO.length & 3}`);
         orientationJ += parseFloat(`${parseInt(`${watch_}`) / (Math.max(roboto6.length, 7))}`);
         watch_ /= Math.max(inviteD.length, 4);
         roboto6 = "1";
         inviteD = `${parseInt(`${orientationJ}`) >> (Math.min(Math.abs(1), 3))}`;
         profilek = `${3 % (Math.max(1, roboto6.length))}`;
         if (gpayZ) {
            break;
         }
      } while ((3.2 >= (sharedB * 3.35) && 1 >= (placementl.size * 2)) && gpayZ);
      while ((4.93 / (Math.max(3, sharedB))) == 4.96 || (parseFloat(`${placementl.size}`) / (Math.max(2, sharedB))) == 4.93) {
         sharedB -= parseFloat(`${splasht / 2}`);
         break;
      }
      invitem += modalk.length;
   }
      invitem ^= invitem;
       let orientation5 = 2;
       let username8 = 5.0;
         username8 -= parseInt(`${username8}`);
         orientation5 >>= Math.min(Math.abs(3 / (Math.max(9, orientation5))), 4);
          let malaysiau = String.fromCharCode(99,95,55,57,95,116,105,109,101,114,115,0);
          let chinaE = true;
          let invitep = false;
         username8 -= ((invitep ? 3 : 5) & parseInt(`${username8}`));
         malaysiau = `${malaysiau.length}`;
         chinaE = !chinaE || malaysiau.length >= 6;
         invitep = chinaE;
         orientation5 /= Math.max(3, parseInt(`${username8}`) - orientation5);
         orientation5 <<= Math.min(Math.abs(orientation5 & parseInt(`${username8}`)), 1);
          let commonk: Map<any, any> = new Map([[String.fromCharCode(109,97,99,104,105,110,101,95,50,95,49,52,0),407], [String.fromCharCode(114,95,57,50,95,110,101,116,115,0),474], [String.fromCharCode(111,95,52,53,95,115,101,97,108,101,100,0),791]]);
         orientation5 |= parseInt(`${username8}`) - orientation5;
         commonk.set(`${commonk.size}`, commonk.size * commonk.size);
      shrinku.set(`${countdownf}`, (String.fromCharCode(103,0) == condensedx ? condensedx.length : (countdownf ? 4 : 5)));
      modalk = `${shrinku.size}`;
   while (!n_playerL.startsWith(`${actionv}`)) {
       let moonY = 0.0;
       let moon5 = String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,95,52,95,55,0);
       let chartn = false;
      if (!moon5.includes(`${moonY}`)) {
         moon5 += `${(moon5.length + (chartn ? 3 : 5))}`;
      }
      if (2.49 <= moonY && (moonY + 2.49) <= 3.6) {
         moonY *= (parseFloat(`${(chartn ? 3 : 1) << (Math.min(moon5.length, 3))}`));
      }
      while (moonY > 2.60) {
         chartn = (25 == (moon5.length << (Math.min(1, Math.abs((chartn ? moon5.length : 25))))));
         break;
      }
          let ewardedD = String.fromCharCode(116,104,101,114,101,117,109,95,106,95,50,53,0);
          let successF = 4.0;
          let privacyE = String.fromCharCode(114,101,109,111,118,97,108,95,51,95,52,0);
         moon5 = `${parseInt(`${successF}`)}`;
         ewardedD += `${privacyE.length}`;
         successF *= ewardedD.length + 1;
         privacyE = `${privacyE.length / (Math.max(2, 5))}`;
         chartn = !chartn;
      while (moon5.length >= 3) {
         moon5 = `${(parseInt(`${moonY}`) * (chartn ? 4 : 1))}`;
         break;
      }
          let starh = false;
          let update_jxK = String.fromCharCode(103,95,52,57,95,108,97,110,100,109,105,110,101,115,0);
          let photoF = String.fromCharCode(103,95,55,55,95,101,108,101,109,115,0);
         chartn = !chartn;
         starh = update_jxK.length == 50 || starh;
         update_jxK = `${photoF.length}`;
         photoF = `${((starh ? 4 : 4))}`;
         chartn = moon5.startsWith(`${chartn}`);
       let cornerh = String.fromCharCode(102,95,53,52,95,122,98,117,102,0);
      n_playerL = "3";
      break;
   }
      n_playerL += `${parseInt(`${spinner3}`) & 3}`;
      setShowSlider(false);
    }, 1500);
  };

  const setBrightVolumeShare = async () => {
       let hoverQ = String.fromCharCode(121,95,52,56,95,112,105,120,108,101,116,0);
    let vietnamO = true;
    let dice7 = String.fromCharCode(122,95,51,52,95,121,117,118,112,0);
    let pagep: Array<any> = [String.fromCharCode(99,111,112,121,120,110,95,52,95,50,56,0), String.fromCharCode(114,95,57,48,95,100,105,116,97,110,99,101,0)];
    let castingh = String.fromCharCode(108,95,50,53,95,115,115,105,109,118,0);
    let weibo5 = true;
    let spinnerA = 5.0;
    let skip0: Array<any> = [404, 538, 238];
    let back6: Array<any> = [616, 422];
    let unreadR = false;
   for (let a = 0; a < 3; a++) {
      spinnerA -= parseFloat(`${2 - pagep.length}`);
   }
   while ((spinnerA + 4.59) > 4.35) {
      spinnerA += (parseFloat(`${3 & (weibo5 ? 3 : 2)}`));
      break;
   }
      dice7 = `${(String.fromCharCode(113,0) == dice7 ? hoverQ.length : dice7.length)}`;
       let scheduleG = String.fromCharCode(99,95,54,56,95,116,114,97,110,115,108,97,116,111,110,0);
       let resendh = String.fromCharCode(120,95,49,54,95,115,116,114,101,101,116,0);
      for (let b = 0; b < 2; b++) {
          let whatsappf = String.fromCharCode(99,121,99,108,101,100,95,51,95,52,55,0);
          let station_ = true;
         scheduleG = `${whatsappf.length | scheduleG.length}`;
         whatsappf = `${(2 << (Math.min(Math.abs((station_ ? 4 : 3)), 3)))}`;
      }
      while (resendh.length >= scheduleG.length) {
          let matho = 3.0;
          let entry2 = true;
          let nalyticsd: Map<any, any> = new Map([[String.fromCharCode(119,95,55,49,95,105,110,100,105,99,97,116,101,100,0),902], [String.fromCharCode(109,95,50,49,95,116,111,117,99,104,101,115,0),422]]);
          let heartk: Array<any> = [607, 941];
         resendh += `${scheduleG.length}`;
         matho -= parseFloat(`${nalyticsd.size & heartk.length}`);
         entry2 = nalyticsd.size >= parseInt(`${matho}`);
         heartk.push(3 << (Math.min(1, Math.abs(nalyticsd.size))));
         break;
      }
      let castS = scheduleG == String.fromCharCode(98,55,99,107,95,97,114,105,121,0);
      do {
         scheduleG += `${scheduleG.length & resendh.length}`;
         if (castS) {
            break;
         }
      } while ((resendh.length >= 4) && castS);
      while (3 <= resendh.length) {
          let brightnessE = String.fromCharCode(113,117,97,100,116,114,101,101,95,99,95,52,56,0);
          let umeng_ = true;
          let time_yR = String.fromCharCode(102,105,108,116,101,114,101,100,95,52,95,57,50,0);
          let yellows = String.fromCharCode(112,95,49,48,95,98,111,117,110,99,101,0);
          let settingsd = 4;
         scheduleG = `${resendh.length - 1}`;
         brightnessE += `${(yellows == String.fromCharCode(49,0) ? yellows.length : brightnessE.length)}`;
         umeng_ = (((umeng_ ? 91 : time_yR.length) / (Math.max(1, time_yR.length))) < 91);
         settingsd /= Math.max(3, 5);
         break;
      }
          let dialogn: Map<any, any> = new Map([[String.fromCharCode(113,95,56,56,95,102,105,110,97,108,105,122,101,100,0),String.fromCharCode(108,95,56,95,98,105,116,115,116,114,105,110,103,0)], [String.fromCharCode(104,101,120,98,110,95,114,95,49,51,0),String.fromCharCode(99,97,108,99,119,95,113,95,56,48,0)]]);
          let comment3 = 3.0;
         scheduleG += `${1 + parseInt(`${comment3}`)}`;
         dialogn.set(`${dialogn.size}`, dialogn.size % 2);
         comment3 += dialogn.size + dialogn.size;
      while (resendh.length > 5) {
         resendh += `${resendh.length & 1}`;
         break;
      }
      skip0 = [2 + dice7.length];
   while (skip0.length > 3) {
      skip0 = [(skip0.length - (weibo5 ? 1 : 2))];
      break;
   }
   let emojiy = spinnerA >= 6707095.0;
   do {
      spinnerA += parseFloat(`${back6.length}`);
      if (emojiy) {
         break;
      }
   } while (emojiy && (spinnerA >= 5.11));
   if ((2 << (Math.min(2, pagep.length))) > 1 && pagep.length > 2) {
      pagep.push(((vietnamO ? 1 : 2) % 2));
   }
   while (2 > (3 | skip0.length)) {
       let constantsu = true;
       let floaterx = true;
       let pausee = String.fromCharCode(119,95,57,56,95,99,101,114,116,105,102,105,99,97,116,101,115,0);
       let tick3 = String.fromCharCode(112,95,49,95,100,105,115,112,111,115,97,108,0);
       let downloadingf = String.fromCharCode(115,105,103,101,120,112,95,102,95,53,48,0);
      let injurym = String.fromCharCode(48,112,55,53,0) == tick3;
      do {
         tick3 = `${pausee.length}`;
         if (injurym) {
            break;
         }
      } while ((4 > tick3.length) && injurym);
          let favoriteU: Array<any> = [411, 700];
         constantsu = !floaterx;
         favoriteU.push(2 & favoriteU.length);
      for (let t = 0; t < 1; t++) {
         constantsu = !constantsu && !floaterx;
      }
         downloadingf += `${3 & tick3.length}`;
      let assistB = constantsu ? !constantsu : constantsu;
      do {
          let hookse = String.fromCharCode(112,101,114,112,105,120,101,108,95,109,95,55,50,0);
         constantsu = hookse.length == 45;
         if (assistB) {
            break;
         }
      } while ((1 < downloadingf.length || constantsu) && assistB);
      while (floaterx) {
         floaterx = 25 > downloadingf.length;
         break;
      }
      let otherz = constantsu ? !constantsu : constantsu;
      do {
          let previewi: Map<any, any> = new Map([[String.fromCharCode(106,112,101,103,105,110,116,95,49,95,55,49,0),true ], [String.fromCharCode(120,95,50,55,95,100,101,99,111,100,105,110,103,0),true ], [String.fromCharCode(117,110,109,97,112,102,105,108,101,95,121,95,50,52,0),false ]]);
          let windE = 5.0;
          let headerr = String.fromCharCode(103,97,116,104,101,114,105,110,103,95,103,95,50,49,0);
         constantsu = previewi.size > 56;
         previewi = new Map([[headerr, parseInt(`${windE}`)]]);
         windE *= (parseFloat(`${String.fromCharCode(110,0) == headerr ? parseInt(`${windE}`) : headerr.length}`));
         if (otherz) {
            break;
         }
      } while ((floaterx && constantsu) && otherz);
      if (!downloadingf.endsWith(pausee)) {
          let g_titleU = String.fromCharCode(112,117,98,105,99,95,100,95,51,49,0);
          let trophyz = true;
          let hooksn = String.fromCharCode(112,111,112,117,112,115,95,110,95,53,50,0);
          let pageY = 4.0;
          let reportw = String.fromCharCode(110,97,118,105,103,97,116,105,111,110,95,119,95,53,50,0);
         downloadingf = `${((constantsu ? 1 : 5) % (Math.max(2, (trophyz ? 4 : 2))))}`;
         g_titleU = `${parseInt(`${pageY}`)}`;
         trophyz = hooksn == reportw;
         hooksn = `${reportw.length}`;
         pageY /= Math.max(parseFloat(`${parseInt(`${pageY}`) + 2}`), 5);
      }
         downloadingf = `${downloadingf.length}`;
      while (4 <= tick3.length) {
         tick3 = `${tick3.length}`;
         break;
      }
         tick3 = `${((floaterx ? 2 : 1) | 2)}`;
         downloadingf = "1";
      for (let p = 0; p < 3; p++) {
          let zhengpianp: Array<any> = [String.fromCharCode(99,95,50,54,95,112,97,112,101,114,0), String.fromCharCode(106,95,53,55,95,102,117,108,108,0)];
          let scheduleA: Array<any> = [String.fromCharCode(107,95,50,95,111,102,102,115,99,114,101,101,110,0), String.fromCharCode(110,95,57,95,103,101,110,101,114,97,116,101,0)];
         floaterx = 6 >= pausee.length || 6 >= zhengpianp.length;
         zhengpianp = [1];
         scheduleA = [scheduleA.length];
      }
      if (tick3 == String.fromCharCode(51,0)) {
         pausee += `${tick3.length}`;
      }
      let rights = tick3.length <= 9678600;
      do {
         tick3 = `${tick3.length / (Math.max(3, 1))}`;
         if (rights) {
            break;
         }
      } while (rights && (pausee == tick3));
      vietnamO = !hoverQ.includes(`${unreadR}`);
      break;
   }
       let humidityO = true;
       let screenq = 3.0;
       let streaminga: Array<any> = [955, 859];
         humidityO = 7.60 < screenq;
         streaminga = [1 - parseInt(`${screenq}`)];
      while (5.3 == (5.58 + screenq)) {
         screenq -= 2 ^ parseInt(`${screenq}`);
         break;
      }
          let trashF = 4.0;
          let castD = String.fromCharCode(97,95,57,49,95,114,101,103,105,115,116,101,114,101,114,0);
         streaminga = [((humidityO ? 5 : 1) | parseInt(`${trashF}`))];
         trashF /= Math.max(1 ^ castD.length, 2);
         castD += `${castD.length & 1}`;
          let league6 = 3.0;
          let abouta = 4.0;
          let desc5 = String.fromCharCode(115,116,114,110,108,101,110,95,106,95,53,50,0);
         screenq -= parseInt(`${abouta}`) * 1;
         league6 -= parseFloat(`${3 >> (Math.min(1, desc5.length))}`);
         abouta -= parseFloat(`${desc5.length}`);
       let sinaG = String.fromCharCode(109,100,101,99,95,108,95,57,49,0);
       let gpayZ = String.fromCharCode(102,95,50,56,95,115,116,114,99,97,116,0);
         streaminga = [gpayZ.length - streaminga.length];
      if (1 > streaminga.length || (streaminga.length + 1) > 5) {
         streaminga = [(String.fromCharCode(118,0) == gpayZ ? gpayZ.length : streaminga.length)];
      }
      if (!humidityO && (5.90 + screenq) <= 5.83) {
         screenq *= (parseInt(`${screenq}`) >> (Math.min(5, Math.abs((humidityO ? 1 : 4)))));
      }
      weibo5 = skip0.length >= 11;
      back6 = [(String.fromCharCode(119,0) == dice7 ? skip0.length : dice7.length)];
      hoverQ = "1";
   for (let z = 0; z < 1; z++) {
      weibo5 = !vietnamO;
   }
   while (4 <= (1 | castingh.length) && 1 <= (1 & castingh.length)) {
      castingh += `${back6.length / (Math.max(2, 10))}`;
      break;
   }
       let filedI = String.fromCharCode(104,95,57,57,95,102,111,111,0);
       let completeW = true;
       let confirmationU = true;
      if (filedI.endsWith(`${completeW}`)) {
          let v_count_ = false;
         completeW = !confirmationU;
         v_count_ = !v_count_;
      }
      let twitterQ = confirmationU ? !confirmationU : confirmationU;
      do {
         confirmationU = filedI.startsWith(`${completeW}`);
         if (twitterQ) {
            break;
         }
      } while (twitterQ && (completeW));
      back6 = [castingh.length ^ 1];
       let downloaderM = false;
       let shootg = String.fromCharCode(112,114,105,110,116,101,100,95,99,95,51,52,0);
       let serviceM = 1;
      for (let o = 0; o < 2; o++) {
         shootg = "2";
      }
          let b_imagek = 1;
          let countryl = 2.0;
         serviceM /= Math.max(serviceM & 3, 2);
         b_imagek += 2;
         countryl += parseFloat(`${1}`);
         shootg += `${((downloaderM ? 1 : 5) % (Math.max(shootg.length, 10)))}`;
          let sansS: Map<any, any> = new Map([[String.fromCharCode(100,101,112,115,95,106,95,54,52,0),false ], [String.fromCharCode(97,118,102,111,114,109,97,116,95,99,95,51,53,0),true ]]);
          let acceptedM: Map<any, any> = new Map([[String.fromCharCode(101,120,97,110,100,101,100,95,113,95,52,49,0),true ], [String.fromCharCode(103,114,111,117,112,105,110,103,95,105,95,51,48,0),false ]]);
          let favorite1 = 4.0;
         serviceM %= Math.max(5, 2 | parseInt(`${favorite1}`));
         sansS = new Map([[`${sansS.size}`, sansS.size]]);
         acceptedM.set(`${acceptedM.size}`, 3 % (Math.max(5, sansS.size)));
         favorite1 /= Math.max(5, 3);
         serviceM |= shootg.length;
         serviceM += shootg.length;
      while (!downloaderM) {
         serviceM <<= Math.min(Math.abs(3), 2);
         break;
      }
      let sliderU = shootg == String.fromCharCode(56,49,105,115,108,0);
      do {
         shootg += `${serviceM}`;
         if (sliderU) {
            break;
         }
      } while (sliderU && (shootg.includes(`${serviceM}`)));
          let activel = 1.0;
          let inviteg = String.fromCharCode(103,95,56,55,95,114,101,99,111,109,112,111,115,101,0);
          let network3: Map<any, any> = new Map([[String.fromCharCode(97,110,115,105,95,53,95,52,55,0),567], [String.fromCharCode(109,111,110,105,116,111,114,105,110,103,95,117,95,50,48,0),530], [String.fromCharCode(99,95,53,52,0),710]]);
         serviceM *= ((downloaderM ? 2 : 3));
         activel /= Math.max(inviteg.length ^ parseInt(`${activel}`), 2);
         inviteg = `${3 - parseInt(`${activel}`)}`;
         network3 = new Map([[`${network3.size}`, 1]]);
      castingh = "3";

    brightShare.value = await SystemSetting.getAppBrightness();

      dice7 = "3";
       let grayb = true;
         grayb = !grayb;
         grayb = (!grayb ? !grayb : !grayb);
          let actionsg = true;
          let brightnessy = 3;
         grayb = (grayb ? actionsg : grayb);
         actionsg = brightnessy <= 6 && brightnessy <= 6;
      castingh += `${((grayb ? 4 : 5) / (Math.max((unreadR ? 5 : 4), 1)))}`;
   let model4 = vietnamO ? !vietnamO : vietnamO;
   do {
      vietnamO = parseInt(`${spinnerA}`) == hoverQ.length;
      if (model4) {
         break;
      }
   } while (model4 && (!vietnamO));
   let stringv = weibo5 ? !weibo5 : weibo5;
   do {
       let feedbackQ: Map<any, any> = new Map([[String.fromCharCode(107,95,57,50,95,109,97,105,110,102,117,110,99,0),23], [String.fromCharCode(100,101,99,111,114,114,101,108,97,116,101,95,112,95,52,49,0),448]]);
       let filledE = true;
         filledE = feedbackQ.size == 88;
          let catagory7: Array<any> = [2, 790, 275];
         feedbackQ = new Map([[`${catagory7.length}`, catagory7.length & 2]]);
      let teams = feedbackQ.size <= 8572299;
      do {
         feedbackQ = new Map([[`${feedbackQ.size}`, 1 % (Math.max(1, feedbackQ.size))]]);
         if (teams) {
            break;
         }
      } while ((4 < feedbackQ.size) && teams);
         feedbackQ = new Map([[`${feedbackQ.size}`, (2 ^ (filledE ? 1 : 3))]]);
      for (let i = 0; i < 3; i++) {
         filledE = feedbackQ.get(`${filledE}`) != null;
      }
         feedbackQ.set(`${filledE}`, feedbackQ.size);
      weibo5 = 54.85 >= spinnerA;
      if (stringv) {
         break;
      }
   } while (stringv && (2 > hoverQ.length));
      castingh = "3";
   for (let j = 0; j < 3; j++) {
       let bannerd = true;
          let changeD: Map<any, any> = new Map([[String.fromCharCode(109,95,54,54,95,116,104,97,110,0),518], [String.fromCharCode(104,95,52,56,95,115,116,100,0),2], [String.fromCharCode(100,95,50,56,95,109,97,110,97,103,101,115,0),651]]);
          let whiteI = String.fromCharCode(101,95,57,55,95,103,119,103,116,0);
          let downloading_ = String.fromCharCode(105,110,115,116,97,110,99,101,115,95,119,95,57,57,0);
         bannerd = (whiteI.length << (Math.min(4, downloading_.length))) <= 78;
         changeD.set(`${changeD.size}`, changeD.size);
         whiteI = "1";
       let whistleY = 0.0;
      if (!bannerd) {
         whistleY -= ((bannerd ? 4 : 3) % (Math.max(parseInt(`${whistleY}`), 2)));
      }
      pagep.push(castingh.length | hoverQ.length);
   }
      pagep = [back6.length / (Math.max(4, castingh.length))];
   let temperaturea = 5353724 <= pagep.length;
   do {
      pagep.push(castingh.length);
      if (temperaturea) {
         break;
      }
   } while ((pagep.length > 2) && temperaturea);
   while (1 <= (skip0.length ^ 5) && skip0.length <= 5) {
       let goall = true;
       let eactI = 2.0;
       let routerX = String.fromCharCode(115,95,54,52,95,98,108,105,116,0);
         eactI /= Math.max((parseFloat(`${(goall ? 3 : 3) % (Math.max(parseInt(`${eactI}`), 2))}`)), 5);
       let whiteM = String.fromCharCode(105,109,101,110,115,105,111,110,95,109,95,50,48,0);
       let logoN = String.fromCharCode(114,101,112,108,97,121,95,56,95,55,53,0);
       let commonX = String.fromCharCode(119,95,54,49,95,113,105,110,116,102,108,111,97,116,0);
       let regengz = String.fromCharCode(102,95,52,57,95,116,101,120,116,97,116,116,114,0);
      for (let y = 0; y < 1; y++) {
          let awayg = 1.0;
          let condensedb = true;
          let handlerS = 1.0;
          let temperatureN = String.fromCharCode(112,114,101,97,108,108,111,99,97,116,101,95,56,95,50,53,0);
          let otherN = 1.0;
         eactI /= Math.max(2, parseFloat(`${parseInt(`${handlerS}`) / (Math.max(routerX.length, 4))}`));
         awayg -= ((condensedb ? 5 : 3) | temperatureN.length);
         condensedb = !condensedb;
         handlerS *= parseInt(`${awayg}`) & 3;
         temperatureN += `${temperatureN.length}`;
         otherN *= parseFloat(`${3 % (Math.max(parseInt(`${otherN}`), 10))}`);
      }
          let carouselG = String.fromCharCode(119,95,53,53,95,101,109,112,116,121,0);
         goall = 91 > routerX.length && whiteM.length > 91;
         carouselG += `${carouselG.length >> (Math.min(5, carouselG.length))}`;
       let twitter9: Array<any> = [833, 946];
       let chinaj: Array<any> = [982, 432, 725];
      for (let g = 0; g < 2; g++) {
          let penaltye = 1.0;
          let analytics_ = 2.0;
         twitter9.push(parseInt(`${analytics_}`) * 3);
         penaltye -= parseInt(`${penaltye}`);
         analytics_ /= Math.max(5, parseFloat(`${parseInt(`${penaltye}`) + parseInt(`${penaltye}`)}`));
      }
         logoN += `${routerX.length | 3}`;
      let switch_pos = goall ? !goall : goall;
      do {
         goall = 76 < commonX.length;
         if (switch_pos) {
            break;
         }
      } while ((goall) && switch_pos);
      unreadR = !hoverQ.startsWith(`${unreadR}`);
      break;
   }
      skip0 = [3 << (Math.min(2, Math.abs(parseInt(`${spinnerA}`))))];
   if (4.39 < spinnerA) {
       let reminderW: Map<any, any> = new Map([[String.fromCharCode(111,95,56,50,95,104,99,115,99,97,108,101,0),false ], [String.fromCharCode(113,95,52,55,95,115,108,105,112,112,97,103,101,115,0),true ]]);
       let constantsa = String.fromCharCode(102,111,114,95,122,95,52,53,0);
         reminderW.set(`${constantsa}`, constantsa.length);
      for (let f = 0; f < 1; f++) {
         reminderW = new Map([[`${reminderW.size}`, reminderW.size << (Math.min(constantsa.length, 5))]]);
      }
         constantsa += `${(String.fromCharCode(71,0) == constantsa ? constantsa.length : reminderW.size)}`;
         constantsa = `${(constantsa == String.fromCharCode(112,0) ? constantsa.length : reminderW.size)}`;
       let dialogl = 4;
       let floaterD = 3;
         dialogl <<= Math.min(1, Math.abs(2));
      castingh = `${pagep.length << (Math.min(Math.abs(1), 4))}`;
   }
      skip0 = [3];
      vietnamO = vietnamO && back6.length < 34;
      skip0.push(back6.length - dice7.length);
   let backgroundn = unreadR ? !unreadR : unreadR;
   do {
      unreadR = parseInt(`${spinnerA}`) >= pagep.length;
      if (backgroundn) {
         break;
      }
   } while (backgroundn && (3 == hoverQ.length));
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
       let referrerh = 3;
    let bottomC = 4.0;
    let buttonJ: Array<any> = [142, 62, 706];
    let splashO = 1.0;
    let views_ = String.fromCharCode(111,95,51,57,95,103,97,116,101,100,0);
    let bcopy_ovz = 2.0;
    let filedC = String.fromCharCode(121,95,49,51,95,117,110,105,116,115,0);
    let searchbars = false;
    let orientation2 = 3.0;
    let searchx = String.fromCharCode(102,95,52,48,95,110,117,109,101,114,97,108,115,0);
    let mathg = String.fromCharCode(106,95,53,53,95,99,97,108,108,115,0);
    let bannerK: Map<any, any> = new Map([[String.fromCharCode(114,101,108,101,118,97,110,116,95,106,95,53,54,0),150], [String.fromCharCode(98,105,110,100,95,105,95,55,57,0),477]]);
    let hejiU: Array<any> = [278, 512];
    let page5 = false;
    let matchesX = true;
   if (5 < views_.length) {
       let dataK: Array<any> = [String.fromCharCode(98,95,55,54,95,112,114,101,112,97,114,101,100,0), String.fromCharCode(115,117,98,112,97,116,104,95,122,95,50,53,0)];
       let recommendationD = 3;
       let q_positionB = 5;
       let settingsC = String.fromCharCode(98,111,111,107,107,101,101,112,105,110,103,95,108,95,54,57,0);
      let anner7 = settingsC.length <= 6651671;
      do {
         settingsC = "1";
         if (anner7) {
            break;
         }
      } while (anner7 && (dataK.length < settingsC.length));
      for (let h = 0; h < 3; h++) {
          let bannerV: Map<any, any> = new Map([[String.fromCharCode(101,120,112,101,114,116,95,98,95,53,56,0),String.fromCharCode(118,101,114,105,102,105,97,116,105,111,110,95,48,95,55,0)], [String.fromCharCode(99,109,97,115,107,95,48,95,53,56,0),String.fromCharCode(99,111,109,112,108,101,109,101,110,116,105,110,103,95,100,95,52,48,0)], [String.fromCharCode(99,111,111,114,100,95,104,95,54,54,0),String.fromCharCode(114,101,113,117,101,115,116,101,100,95,57,95,54,49,0)]]);
          let liveI = 3.0;
          let short_d6K = String.fromCharCode(97,118,100,99,116,95,101,95,49,57,0);
          let placement_ = false;
          let sliderG: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,108,97,116,101,95,115,95,52,55,0),288], [String.fromCharCode(112,97,114,101,110,116,97,103,101,95,122,95,56,49,0),446], [String.fromCharCode(101,114,114,109,115,103,95,120,95,55,48,0),94]]);
         q_positionB -= q_positionB;
         bannerV = new Map([[short_d6K, 2 ^ short_d6K.length]]);
         liveI /= Math.max(parseFloat(`${sliderG.size}`), 2);
         sliderG = new Map([[`${liveI}`, parseInt(`${liveI}`) * short_d6K.length]]);
      }
       let backF = 2.0;
         settingsC += `${parseInt(`${backF}`)}`;
      let appleF = recommendationD >= 8951410;
      do {
          let usernames = 5;
         recommendationD += 2;
         usernames -= usernames;
         if (appleF) {
            break;
         }
      } while (appleF && (1 == (2 * recommendationD) || 2 == (recommendationD * dataK.length)));
       let long_rt0 = String.fromCharCode(108,95,54,55,95,98,114,110,103,0);
       let actionX = String.fromCharCode(112,95,54,95,105,110,99,111,109,112,97,116,105,98,108,101,0);
         dataK.push(q_positionB >> (Math.min(3, Math.abs(recommendationD))));
      let castQ = 8535851.0 >= backF;
      do {
         backF *= q_positionB;
         if (castQ) {
            break;
         }
      } while (castQ && (1.85 > (backF * dataK.length)));
         backF *= recommendationD % 2;
      let sheetf = 5202110 >= actionX.length;
      do {
          let bottomr = 5;
          let taiwanR: Map<any, any> = new Map([[String.fromCharCode(118,95,55,53,95,101,109,111,106,105,0),451], [String.fromCharCode(99,105,110,101,95,57,95,51,51,0),427]]);
          let completeE = String.fromCharCode(100,95,57,54,95,114,101,118,97,108,105,100,97,116,101,0);
         actionX = `${bottomr}`;
         bottomr %= Math.max(4, taiwanR.size - completeE.length);
         taiwanR.set(completeE, completeE.length / (Math.max(6, taiwanR.size)));
         if (sheetf) {
            break;
         }
      } while (sheetf && (settingsC.length >= 1));
      let macauv = backF >= 5704379.0;
      do {
          let assists = String.fromCharCode(105,100,97,116,97,95,108,95,49,51,0);
         backF += assists.length * 1;
         if (macauv) {
            break;
         }
      } while ((1 <= (2 * long_rt0.length)) && macauv);
          let chatz = String.fromCharCode(97,99,116,105,118,105,116,121,95,102,95,57,0);
          let actionsj = 2.0;
          let logoutz: Map<any, any> = new Map([[String.fromCharCode(100,95,53,48,95,114,97,110,107,115,0),932], [String.fromCharCode(115,116,97,110,100,97,114,100,95,102,95,55,0),838], [String.fromCharCode(105,95,56,54,95,102,101,101,100,98,97,99,107,0),309]]);
         recommendationD %= Math.max(5, settingsC.length ^ actionX.length);
         chatz = "3";
         actionsj /= Math.max(5, (parseFloat(`${chatz == String.fromCharCode(76,0) ? logoutz.size : chatz.length}`)));
         logoutz = new Map([[`${logoutz.size}`, logoutz.size + 3]]);
      searchbars = String.fromCharCode(106,0) == mathg;
   }
      orientation2 -= parseFloat(`${searchx.length & buttonJ.length}`);
      referrerh &= buttonJ.length >> (Math.min(Math.abs(1), 1));
   let blacklistY = String.fromCharCode(121,120,115,109,103,118,0) == mathg;
   do {
      mathg += `${parseInt(`${bottomC}`) + 2}`;
      if (blacklistY) {
         break;
      }
   } while (blacklistY && (!mathg.endsWith(`${views_.length}`)));
      filedC += `${((searchbars ? 3 : 4))}`;
      referrerh *= searchx.length / (Math.max(4, mathg.length));
   let arrowV = 9511785.0 >= splashO;
   do {
      splashO -= 3;
      if (arrowV) {
         break;
      }
   } while (arrowV && ((3.84 * splashO) > 2.13 || 2 > (referrerh / (Math.max(3, 1)))));
       let reducer8 = String.fromCharCode(120,98,105,110,95,112,95,51,55,0);
       let firebaseJ = String.fromCharCode(119,95,56,52,95,103,114,101,121,0);
         firebaseJ += `${3 % (Math.max(4, reducer8.length))}`;
      for (let z = 0; z < 1; z++) {
          let short_38Z = 1.0;
          let spinner9: Map<any, any> = new Map([[String.fromCharCode(112,97,103,105,110,97,116,105,111,110,95,101,95,53,51,0),166], [String.fromCharCode(97,100,97,112,116,101,100,95,105,95,57,50,0),410], [String.fromCharCode(109,97,108,108,111,99,122,95,106,95,54,55,0),180]]);
          let eactj = 5.0;
          let strx = String.fromCharCode(116,95,49,54,95,117,110,98,97,110,0);
         firebaseJ = `${strx.length}`;
         short_38Z -= spinner9.size % (Math.max(3, 4));
         spinner9 = new Map([[`${eactj}`, parseInt(`${short_38Z}`)]]);
         eactj *= spinner9.size;
         strx += `${1 / (Math.max(8, spinner9.size))}`;
      }
      while (reducer8 == firebaseJ) {
         firebaseJ += `${2 >> (Math.min(1, firebaseJ.length))}`;
         break;
      }
      for (let h = 0; h < 3; h++) {
         firebaseJ += `${reducer8.length}`;
      }
      let logoY = firebaseJ == String.fromCharCode(104,95,120,107,114,122,103,117,98,0);
      do {
         firebaseJ += `${firebaseJ.length % 3}`;
         if (logoY) {
            break;
         }
      } while (logoY && (firebaseJ.length >= reducer8.length));
      let unselectedc = 7406841 >= reducer8.length;
      do {
         reducer8 = `${(reducer8 == String.fromCharCode(54,0) ? firebaseJ.length : reducer8.length)}`;
         if (unselectedc) {
            break;
         }
      } while (unselectedc && (firebaseJ == String.fromCharCode(76,0)));
      buttonJ.push(filedC.length);
      bottomC *= parseFloat(`${parseInt(`${orientation2}`) % 2}`);
   if (views_.length < 1) {
      views_ += `${mathg.length}`;
   }
      referrerh ^= ((searchbars ? 2 : 5) / (Math.max(5, parseInt(`${bottomC}`))));
   while ((splashO - searchx.length) >= 1.57 && (splashO - 1.57) >= 3.79) {
      splashO /= Math.max(buttonJ.length + mathg.length, 5);
      break;
   }
      searchx += `${(parseInt(`${bottomC}`) << (Math.min(5, Math.abs((searchbars ? 2 : 3)))))}`;
       let modei = String.fromCharCode(121,95,57,50,95,105,110,100,105,99,105,101,115,0);
         modei += "1";
       let signinupo = String.fromCharCode(115,99,111,114,101,95,103,95,57,48,0);
       let areaR = String.fromCharCode(115,95,56,55,95,100,101,99,111,109,112,97,110,100,0);
      for (let v = 0; v < 1; v++) {
         signinupo = `${modei.length | 1}`;
      }
      orientation2 *= (parseFloat(`${(searchbars ? 2 : 1) >> (Math.min(Math.abs(2), 1))}`));
      bannerK = new Map([[`${bcopy_ovz}`, filedC.length - 1]]);
      referrerh |= parseInt(`${bottomC}`);
   while (buttonJ.length < 2) {
      bannerK = new Map([[`${referrerh}`, 3]]);
      break;
   }
   let windg = 5434426.0 <= splashO;
   do {
      splashO -= views_.length + 2;
      if (windg) {
         break;
      }
   } while (windg && ((2 - referrerh) == 5 && 5.6 == (splashO + 1.60)));
       let unselected1 = String.fromCharCode(98,95,54,51,95,112,116,120,99,0);
       let casting8 = 2.0;
       let episodee = String.fromCharCode(105,119,104,116,95,106,95,57,0);
      if (episodee.length <= unselected1.length) {
         unselected1 += `${parseInt(`${casting8}`)}`;
      }
      let untickr = String.fromCharCode(99,103,122,99,0) == episodee;
      do {
         episodee += "3";
         if (untickr) {
            break;
         }
      } while (((episodee.length / 1) > 1 || 1 > (1 & episodee.length)) && untickr);
      if (parseInt(`${casting8}`) <= unselected1.length) {
          let anytimeq = 3.0;
         unselected1 = `${parseInt(`${anytimeq}`) >> (Math.min(episodee.length, 2))}`;
      }
         casting8 -= (parseFloat(`${episodee == String.fromCharCode(103,0) ? episodee.length : parseInt(`${casting8}`)}`));
      let auto_m6r = episodee.length <= 9579860;
      do {
         episodee = `${episodee.length << (Math.min(4, Math.abs(parseInt(`${casting8}`))))}`;
         if (auto_m6r) {
            break;
         }
      } while ((1.97 < casting8) && auto_m6r);
       let promotionP: Map<any, any> = new Map([[String.fromCharCode(119,105,110,100,111,119,95,119,95,50,0),306], [String.fromCharCode(103,117,97,114,100,95,50,95,54,49,0),567]]);
       let signinupz: Map<any, any> = new Map([[String.fromCharCode(99,114,101,97,116,101,95,48,95,54,0),988], [String.fromCharCode(109,95,55,51,95,101,120,101,99,117,116,101,100,0),969], [String.fromCharCode(103,95,51,54,95,97,112,116,120,104,100,0),270]]);
         unselected1 += `${episodee.length}`;
      for (let f = 0; f < 3; f++) {
         episodee = `${promotionP.size}`;
      }
         promotionP = new Map([[`${casting8}`, parseInt(`${casting8}`) % (Math.max(7, unselected1.length))]]);
      filedC = `${parseInt(`${casting8}`) + 2}`;
       let hoverj: Map<any, any> = new Map([[String.fromCharCode(114,95,55,95,101,115,115,97,103,101,0),831], [String.fromCharCode(112,111,112,112,101,100,95,106,95,49,49,0),165], [String.fromCharCode(114,95,49,56,0),304]]);
       let side_ = 4.0;
       let aboutG = 5.0;
      let condensed1 = side_ >= 6150683.0;
      do {
         side_ *= parseFloat(`${parseInt(`${side_}`) / (Math.max(hoverj.size, 3))}`);
         if (condensed1) {
            break;
         }
      } while (condensed1 && ((side_ * aboutG) == 2.85));
         side_ -= parseFloat(`${parseInt(`${side_}`) % 1}`);
      views_ += `${parseInt(`${splashO}`) * parseInt(`${bottomC}`)}`;
      filedC += `${bannerK.size}`;
      hejiU.push(parseInt(`${bcopy_ovz}`) >> (Math.min(hejiU.length, 1)));
   let r_unlockH = views_.length <= 8851160;
   do {
      views_ = `${filedC.length}`;
      if (r_unlockH) {
         break;
      }
   } while (((bcopy_ovz * 5.11) == 5.29 && (bcopy_ovz * parseFloat(`${views_.length}`)) == 5.11) && r_unlockH);
   while (1 >= searchx.length) {
       let team9: Map<any, any> = new Map([[String.fromCharCode(105,109,101,114,95,120,95,52,57,0),true ], [String.fromCharCode(97,95,54,54,95,102,111,108,100,101,114,0),true ]]);
       let filedS = String.fromCharCode(105,110,102,111,114,109,95,112,95,52,52,0);
       let modulei = 5.0;
       let condensedo: Array<any> = [952, 859];
      while (5 > (filedS.length | team9.size)) {
          let clockC = String.fromCharCode(115,97,118,101,95,112,95,52,49,0);
          let tickedh = String.fromCharCode(115,121,109,98,111,108,115,95,103,95,54,57,0);
          let dicey = String.fromCharCode(102,111,114,107,95,50,95,51,56,0);
          let catalogI = true;
         filedS += "1";
         clockC = `${(String.fromCharCode(109,0) == dicey ? tickedh.length : dicey.length)}`;
         tickedh = `${dicey.length * tickedh.length}`;
         catalogI = !catalogI || tickedh.length <= 49;
         break;
      }
         modulei += 2;
      for (let z = 0; z < 3; z++) {
         filedS = `${condensedo.length}`;
      }
          let more5 = 2.0;
         modulei -= condensedo.length | team9.size;
         more5 += parseInt(`${more5}`);
         modulei /= Math.max(4, filedS.length % (Math.max(4, team9.size)));
          let flyern = String.fromCharCode(115,95,53,54,95,112,108,117,114,97,108,0);
          let orangec = 3.0;
         filedS = `${parseInt(`${modulei}`) >> (Math.min(condensedo.length, 5))}`;
         flyern += `${parseInt(`${orangec}`)}`;
         orangec /= Math.max(3, flyern.length * parseInt(`${orangec}`));
         modulei /= Math.max(filedS.length, 4);
         team9 = new Map([[`${team9.size}`, team9.size]]);
      let hookp = filedS.length <= 9114908;
      do {
          let closeh = 4.0;
          let line7 = String.fromCharCode(101,120,112,110,97,100,101,100,95,108,95,53,48,0);
          let logoC = String.fromCharCode(109,95,49,54,95,115,104,114,117,110,107,0);
         filedS = `${line7.length >> (Math.min(1, Math.abs(team9.size)))}`;
         closeh += parseFloat(`${1}`);
         line7 = `${logoC.length % 1}`;
         logoC = "1";
         if (hookp) {
            break;
         }
      } while (hookp && ((filedS.length * 3) < 3 && (team9.size * 3) < 2));
      if (4 > (team9.size ^ 3) && 4 > (3 ^ team9.size)) {
          let langkeyR = 3;
         filedS += `${filedS.length * 3}`;
         langkeyR <<= Math.min(Math.abs(2), 4);
      }
      if (filedS.length < 5) {
         team9 = new Map([[`${condensedo.length}`, 1]]);
      }
          let ajaxI = String.fromCharCode(116,95,56,51,95,108,111,103,103,97,98,108,101,0);
          let previewx = 0;
         modulei /= Math.max(4, filedS.length + team9.size);
         ajaxI += `${ajaxI.length}`;
         previewx -= 2;
      searchx += `${parseInt(`${splashO}`) % 1}`;
      break;
   }
   while (hejiU.length == 2) {
       let circle8 = String.fromCharCode(121,95,49,56,95,110,111,116,105,99,101,0);
       let matchess = 0;
       let transfert = String.fromCharCode(111,117,116,112,111,105,110,116,95,104,95,53,55,0);
       let with_2r = 2;
       let expandM = String.fromCharCode(97,95,51,55,95,112,114,111,112,111,114,116,105,111,110,115,0);
      let catagoryc = 5009254 <= transfert.length;
      do {
         transfert += `${(expandM == String.fromCharCode(109,0) ? transfert.length : expandM.length)}`;
         if (catagoryc) {
            break;
         }
      } while ((!expandM.endsWith(`${transfert.length}`)) && catagoryc);
         circle8 = `${circle8.length}`;
         with_2r *= transfert.length - expandM.length;
         transfert = `${matchess ^ 2}`;
         transfert += `${matchess}`;
          let ajaxp = String.fromCharCode(105,115,115,117,101,114,95,108,95,55,50,0);
         expandM = `${circle8.length & matchess}`;
         ajaxp = "3";
      for (let u = 0; u < 3; u++) {
         expandM = `${3 >> (Math.min(3, transfert.length))}`;
      }
      for (let v = 0; v < 2; v++) {
         matchess += expandM.length * 2;
      }
         expandM = `${(expandM == String.fromCharCode(121,0) ? with_2r : expandM.length)}`;
      let moviesA = matchess <= 5558362;
      do {
         matchess -= transfert.length & with_2r;
         if (moviesA) {
            break;
         }
      } while (moviesA && (3 > (matchess + circle8.length) && 3 > (matchess + circle8.length)));
      for (let f = 0; f < 2; f++) {
         transfert += `${matchess}`;
      }
      for (let l = 0; l < 1; l++) {
         matchess -= circle8.length ^ matchess;
      }
       let phoneK = 3.0;
         with_2r >>= Math.min(1, Math.abs(parseInt(`${phoneK}`)));
      let gemfile2 = 6774398.0 <= phoneK;
      do {
         phoneK -= 3;
         if (gemfile2) {
            break;
         }
      } while ((2 <= (parseInt(`${phoneK}`) * expandM.length) || (parseInt(`${phoneK}`) * expandM.length) <= 2) && gemfile2);
      hejiU.push(with_2r);
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
       let updatesB = 1.0;
    let shrinks = String.fromCharCode(100,95,55,54,95,116,121,112,101,115,0);
    let suggestion9 = 2.0;
    let rewind8 = String.fromCharCode(98,97,99,107,103,114,111,117,110,100,115,95,112,95,49,55,0);
    let optionsy = String.fromCharCode(110,95,50,52,95,108,111,103,0);
    let p_lockp = String.fromCharCode(106,95,52,53,95,115,116,114,102,116,105,109,101,0);
    let roomu = 4;
    let delegate_hT = 1.0;
    let closee = 0;
    let clockM = String.fromCharCode(117,95,56,53,0);
    let contexti = false;
    let typesR = false;
    let dicet = 3;
   for (let j = 0; j < 3; j++) {
      delegate_hT -= rewind8.length / 2;
   }
   for (let j = 0; j < 3; j++) {
      roomu |= shrinks.length;
   }
   let tumbnaili = p_lockp == String.fromCharCode(55,57,109,121,110,119,0);
   do {
       let searchbarg = 2.0;
       let moduleg = String.fromCharCode(112,114,111,106,101,99,116,105,111,110,115,95,52,95,49,49,0);
       let bellP = String.fromCharCode(115,117,98,115,101,113,117,101,110,116,95,52,95,50,48,0);
       let acceptedI = String.fromCharCode(116,112,99,95,53,95,56,0);
      for (let r = 0; r < 3; r++) {
          let danger9 = true;
          let bing0 = 1.0;
          let temperature7 = 4.0;
          let handlera = 5.0;
         acceptedI += `${parseInt(`${bing0}`)}`;
         danger9 = temperature7 <= 25.17;
         temperature7 += (parseFloat(`${parseInt(`${temperature7}`) * (danger9 ? 5 : 4)}`));
         handlera += parseFloat(`${2 - parseInt(`${handlera}`)}`);
      }
       let placementY = String.fromCharCode(106,95,54,56,95,98,108,111,99,107,104,97,115,104,0);
       let langu = String.fromCharCode(106,95,56,53,95,109,97,110,117,97,108,108,121,0);
         moduleg = `${placementY.length % (Math.max(5, acceptedI.length))}`;
      for (let w = 0; w < 2; w++) {
          let videom = false;
          let text2: Map<any, any> = new Map([[String.fromCharCode(119,95,50,95,108,101,118,97,114,105,110,116,0),926], [String.fromCharCode(108,95,53,57,95,115,117,98,98,108,111,99,107,115,0),780]]);
          let combineI = String.fromCharCode(119,95,50,53,95,108,101,110,118,108,99,0);
          let submitj = String.fromCharCode(99,114,111,112,112,101,100,95,51,95,54,57,0);
          let videou = String.fromCharCode(115,95,51,51,95,114,101,97,100,0);
         placementY = `${((videom ? 1 : 5))}`;
         videom = (combineI.length + videou.length) >= 84;
         text2.set(`${submitj}`, 3 / (Math.max(4, submitj.length)));
         combineI += `${(combineI == String.fromCharCode(50,0) ? submitj.length : combineI.length)}`;
         videou += `${submitj.length & 3}`;
      }
          let detailsb = true;
          let unselectedT: Map<any, any> = new Map([[String.fromCharCode(108,95,54,56,95,100,117,109,112,0),true ], [String.fromCharCode(99,95,52,50,95,99,121,99,108,105,99,114,101,102,114,101,115,104,0),false ], [String.fromCharCode(107,95,52,57,95,98,101,110,99,104,0),false ]]);
          let modal_ = 1;
         bellP = `${((detailsb ? 2 : 3) >> (Math.min(langu.length, 2)))}`;
         detailsb = 62 > unselectedT.size || modal_ > 62;
         unselectedT.set(`${modal_}`, modal_);
          let sellX = String.fromCharCode(115,108,97,118,101,95,56,95,54,54,0);
          let dropdownu = String.fromCharCode(100,95,49,52,95,114,118,100,97,116,97,0);
          let banner8 = String.fromCharCode(105,110,118,102,95,122,95,57,50,0);
         acceptedI += `${(String.fromCharCode(106,0) == acceptedI ? parseInt(`${searchbarg}`) : acceptedI.length)}`;
         sellX += `${sellX.length}`;
         dropdownu += `${(sellX == String.fromCharCode(86,0) ? banner8.length : sellX.length)}`;
         banner8 = `${dropdownu.length + banner8.length}`;
          let x_playern: Map<any, any> = new Map([[String.fromCharCode(115,104,111,114,116,116,101,114,109,95,111,95,52,0),848], [String.fromCharCode(116,114,97,110,115,102,111,114,109,95,108,95,53,0),647], [String.fromCharCode(100,111,119,110,109,105,120,95,121,95,56,48,0),587]]);
          let privilegeC = String.fromCharCode(118,103,108,111,98,97,108,95,108,95,53,52,0);
         searchbarg *= bellP.length | 1;
         x_playern = new Map([[`${x_playern.size}`, (privilegeC == String.fromCharCode(118,0) ? x_playern.size : privilegeC.length)]]);
         langu = `${1 * moduleg.length}`;
      for (let e = 0; e < 1; e++) {
          let agreement4 = 3.0;
          let volumeX = 3;
          let malaysia2 = String.fromCharCode(113,95,51,52,95,102,114,101,105,114,0);
          let sportsm = 4.0;
          let temperatureM = String.fromCharCode(98,95,50,54,95,112,97,99,107,101,116,112,101,101,107,0);
         bellP += "3";
         agreement4 *= 3;
         volumeX |= volumeX;
         malaysia2 = `${parseInt(`${agreement4}`)}`;
         sportsm *= parseFloat(`${2 | temperatureM.length}`);
         temperatureM = "1";
      }
      for (let b = 0; b < 2; b++) {
         searchbarg += 1;
      }
      if ((acceptedI.length / 4) > 4) {
          let modep = 2;
          let light6 = 3.0;
          let logo5 = String.fromCharCode(111,118,101,114,115,99,114,111,108,108,95,122,95,54,48,0);
          let episoden = 2.0;
         searchbarg += parseInt(`${episoden}`) % 1;
         modep *= parseInt(`${light6}`);
         light6 -= parseFloat(`${2}`);
         logo5 = `${modep}`;
         episoden *= parseInt(`${light6}`) - 3;
      }
       let themex = 5.0;
      p_lockp += `${parseInt(`${suggestion9}`)}`;
      if (tumbnaili) {
         break;
      }
   } while ((p_lockp.length > 4) && tumbnaili);
   for (let g = 0; g < 1; g++) {
      roomu -= closee;
   }
   if (p_lockp.includes(`${delegate_hT}`)) {
      p_lockp = `${roomu}`;
   }
   while ((delegate_hT - 5.96) <= 4.69 || (closee * 5) <= 3) {
      closee <<= Math.min(2, Math.abs(shrinks.length << (Math.min(Math.abs(1), 2))));
      break;
   }

      if (!isDoubleTap.value) {

   if (p_lockp.length == 5) {
      optionsy = `${parseInt(`${updatesB}`)}`;
   }
   if (2 == roomu) {
      roomu >>= Math.min(2, Math.abs(roomu));
   }
   while (optionsy.endsWith(`${suggestion9}`)) {
      suggestion9 *= shrinks.length;
      break;
   }
   if (p_lockp.length <= 2 || optionsy.length <= 2) {
       let chartX = 5.0;
         chartX -= parseFloat(`${parseInt(`${chartX}`)}`);
      if ((chartX - chartX) == 4.7 && (chartX - 4.7) == 2.98) {
         chartX += parseFloat(`${parseInt(`${chartX}`)}`);
      }
       let downloadG = 1;
       let lessi = 2;
      optionsy += `${parseInt(`${updatesB}`) * shrinks.length}`;
   }
       let mutedy = 4;
       let settings9 = true;
       let lighta: Map<any, any> = new Map([[String.fromCharCode(114,116,112,115,101,110,100,101,114,95,98,95,51,56,0),true ], [String.fromCharCode(118,95,56,48,95,112,111,115,116,115,99,97,108,101,0),false ]]);
      if ((mutedy << (Math.min(Math.abs(3), 2))) >= 5) {
         settings9 = 68 < mutedy || !settings9;
      }
      let leftb = settings9 ? !settings9 : settings9;
      do {
         settings9 = null != lighta.get(`${settings9}`);
         if (leftb) {
            break;
         }
      } while (leftb && (settings9));
      if ((5 ^ mutedy) < 2 && settings9) {
          let handlerU: Map<any, any> = new Map([[String.fromCharCode(97,95,53,48,95,104,115,99,97,108,101,0),512], [String.fromCharCode(102,99,110,116,108,95,50,95,56,54,0),260], [String.fromCharCode(107,95,49,52,95,112,114,101,115,101,114,118,101,0),730]]);
          let areaq: Array<any> = [230, 785, 370];
         settings9 = 35 < lighta.size || mutedy < 35;
         handlerU.set(`${areaq.length}`, areaq.length / 2);
      }
          let calendarY = 5.0;
          let configureh: Map<any, any> = new Map([[String.fromCharCode(114,101,115,105,122,101,95,119,95,50,50,0),false ], [String.fromCharCode(113,95,57,49,95,112,114,111,114,101,115,0),true ]]);
         lighta.set(`${calendarY}`, 3 - lighta.size);
         calendarY -= configureh.size >> (Math.min(Math.abs(3), 1));
         configureh = new Map([[`${configureh.size}`, configureh.size + 2]]);
      for (let e = 0; e < 1; e++) {
         lighta.set(`${settings9}`, 3);
      }
         lighta = new Map([[`${lighta.size}`, mutedy >> (Math.min(Math.abs(3), 4))]]);
      if (3 == (lighta.size & 2) || settings9) {
         lighta.set(`${settings9}`, mutedy | 2);
      }
      if (2 == (5 + mutedy) || 5 == mutedy) {
         mutedy |= (lighta.size & (settings9 ? 2 : 5));
      }
      for (let o = 0; o < 2; o++) {
         mutedy &= lighta.size & 3;
      }
      suggestion9 += (String.fromCharCode(65,0) == optionsy ? parseInt(`${updatesB}`) : optionsy.length);
   let dropdown5 = 5574633.0 >= suggestion9;
   do {
       let networkd = 1.0;
       let modelsw = 2.0;
       let minivodL = String.fromCharCode(107,110,111,99,107,111,117,116,95,98,95,56,53,0);
       let searche = 2.0;
      for (let n = 0; n < 1; n++) {
         minivodL += `${parseInt(`${searche}`) & 2}`;
      }
         minivodL += "3";
      let castingG = minivodL.length >= 5948723;
      do {
         minivodL = `${parseInt(`${networkd}`) ^ 3}`;
         if (castingG) {
            break;
         }
      } while (castingG && ((3 % (Math.max(3, minivodL.length))) > 4));
      while (3 > (minivodL.length - parseInt(`${modelsw}`))) {
         minivodL = `${3 & parseInt(`${searche}`)}`;
         break;
      }
       let pageE: Map<any, any> = new Map([[String.fromCharCode(97,95,54,53,95,102,111,114,109,97,110,116,0),String.fromCharCode(100,105,109,109,105,110,103,95,51,95,50,51,0)], [String.fromCharCode(100,95,49,49,95,97,118,111,112,116,105,111,110,115,0),String.fromCharCode(106,117,108,105,97,110,100,97,121,95,49,95,50,0)]]);
       let statisticsf: Map<any, any> = new Map([[String.fromCharCode(115,101,101,107,95,112,95,54,49,0),89], [String.fromCharCode(118,95,51,48,95,99,111,109,112,108,101,116,101,115,0),998]]);
         minivodL += `${minivodL.length}`;
      for (let m = 0; m < 3; m++) {
          let middlewarek = String.fromCharCode(114,95,49,55,95,112,101,114,109,105,115,115,105,111,110,0);
         statisticsf = new Map([[`${searche}`, parseInt(`${modelsw}`)]]);
         middlewarek += `${middlewarek.length}`;
      }
      let gesturesN = modelsw <= 9532577.0;
      do {
          let floaterW = 4;
         modelsw /= Math.max(parseInt(`${modelsw}`), 4);
         floaterW *= floaterW;
         if (gesturesN) {
            break;
         }
      } while ((3.89 <= (modelsw * 2.64)) && gesturesN);
       let grayV = 0;
          let filedF = 5;
         statisticsf = new Map([[`${filedF}`, 3 - filedF]]);
      while (!Array.from(pageE.values()).includes(networkd)) {
         networkd /= Math.max(parseFloat(`${parseInt(`${networkd}`)}`), 5);
         break;
      }
      if ((searche / (Math.max(networkd, 3))) > 1.15 && 1.15 > (searche / (Math.max(4, networkd)))) {
         networkd *= parseFloat(`${grayV & 1}`);
      }
      suggestion9 -= parseInt(`${suggestion9}`) & 3;
      if (dropdown5) {
         break;
      }
   } while ((1 >= (p_lockp.length * parseInt(`${suggestion9}`)) || 5 >= (p_lockp.length ^ 1)) && dropdown5);
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
