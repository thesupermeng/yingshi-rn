import { useNavigation } from "@react-navigation/native";
import VipPrivilegeModal from "./yys_component_attributedstring"
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/yys_frame";
import { hideAdultVipPrivilegeMiniVideoAction, showAdultVipPrivilegeMiniVideoAction, showLoginAction } from "@redux/actions/yys_runtimescheduler";
import { View } from "react-native";
import { screenModel } from "@type/yys_service_setting";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";

const adultModels = require('@static/images/mbnativeSide.png');
const adultBg = require('@static/images/mintegralSecurityShared.png');

interface yys_ConfigureUimanager {
  showCondition: boolean;
  onClose: any;
  showBlur?: boolean;
  addPaddingTop?: boolean;
  showDarkBackdrop?: boolean;
}

export const AdultVipPrivilegeOverlay = ({showCondition, onClose, showBlur, addPaddingTop = false, showDarkBackdrop = false}: yys_ConfigureUimanager) => {

  const navigator = useNavigation()
  const dispatch = useAppDispatch()
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );
  const userState = useSelector<yys_HejiCricket>('userReducer');
  const isVip = yys_RelatedTooltips.isVip(userState.user);

  const handleOnPurchase = useCallback(() => {
       let tnewinterstitial_ = String.fromCharCode(99,112,105,97,0);
    let vietnamY: Map<any, any> = new Map([[String.fromCharCode(102,114,101,105,114,0),243], [String.fromCharCode(114,95,53,95,116,104,101,109,101,0),192], [String.fromCharCode(110,95,53,51,95,100,101,108,97,117,110,97,121,0),497]]);
    let savev = String.fromCharCode(97,98,103,114,0);
    let analyticV: Map<any, any> = new Map([[String.fromCharCode(102,97,118,101,95,116,95,57,52,0),504], [String.fromCharCode(103,114,101,101,100,121,95,108,95,50,51,0),864]]);
    let launchC = String.fromCharCode(109,98,105,110,116,114,97,95,101,95,49,52,0);
    let iconH = String.fromCharCode(117,117,105,100,0);
    let mappingf = 2.0;
    let mergerG = 3.0;
    let progress3 = String.fromCharCode(117,110,115,97,102,101,0);
   while ((parseFloat(`${analyticV.size}`) + mappingf) < 4.62) {
      mappingf /= Math.max(parseFloat(`${3 | parseInt(`${mappingf}`)}`), 3);
      break;
   }
       let schedulem = 5.0;
         schedulem /= Math.max(4, 1);
      while (2.71 >= (schedulem / (Math.max(6, schedulem))) && (schedulem / 2.71) >= 1.54) {
         schedulem += parseInt(`${schedulem}`);
         break;
      }
      for (let z = 0; z < 3; z++) {
         schedulem /= Math.max(parseInt(`${schedulem}`) * 1, 4);
      }
      vietnamY = new Map([[`${vietnamY.size}`, vietnamY.size]]);
   if ((5 * analyticV.size) < 4) {
      vietnamY.set(launchC, iconH.length ^ launchC.length);
   }
       let helperS = 1.0;
          let leftU = String.fromCharCode(115,104,105,109,109,101,114,105,110,103,95,100,95,49,54,0);
         helperS *= parseFloat(`${leftU.length}`);
      if ((helperS / 2) > 3.84) {
         helperS /= Math.max(parseFloat(`${parseInt(`${helperS}`) % (Math.max(2, parseInt(`${helperS}`)))}`), 5);
      }
          let borderlessg = true;
          let langX = 4;
          let runtimeschedulerQ = String.fromCharCode(122,95,56,50,95,105,115,99,111,118,101,114,0);
         helperS -= parseFloat(`${2 & parseInt(`${helperS}`)}`);
         borderlessg = 36 > langX;
         langX &= 1;
         runtimeschedulerQ = `${(langX - (borderlessg ? 4 : 4))}`;
      tnewinterstitial_ = `${parseInt(`${helperS}`) * tnewinterstitial_.length}`;
   let sportG = vietnamY.size >= 7343241;
   do {
      vietnamY = new Map([[tnewinterstitial_, savev.length]]);
      if (sportG) {
         break;
      }
   } while ((3.14 >= (2.55 + mappingf) || (vietnamY.size - 4) >= 4) && sportG);
       let update_xw: Array<any> = [String.fromCharCode(105,118,97,114,0), String.fromCharCode(109,97,120,98,117,114,115,116,0), String.fromCharCode(100,105,109,101,110,115,105,111,110,115,0)];
         update_xw.push(update_xw.length >> (Math.min(Math.abs(1), 2)));
       let scrollviewJ = String.fromCharCode(115,117,112,101,114,98,108,111,99,107,115,95,102,95,57,49,0);
      for (let h = 0; h < 3; h++) {
         scrollviewJ = `${scrollviewJ.length}`;
      }
      savev += `${tnewinterstitial_.length}`;
      savev += `${parseInt(`${mappingf}`)}`;
       let gestureM = 3;
       let flyer0 = 3.0;
       let bridgeG: Array<any> = [498, 177, 415];
      for (let m = 0; m < 1; m++) {
         flyer0 /= Math.max(5, parseFloat(`${parseInt(`${flyer0}`)}`));
      }
          let disconnectedG = 1.0;
          let mbjscommone = String.fromCharCode(119,111,114,107,97,114,111,117,110,100,0);
         bridgeG = [3 & mbjscommone.length];
         disconnectedG += parseInt(`${disconnectedG}`);
         mbjscommone = `${parseInt(`${disconnectedG}`)}`;
         gestureM += gestureM / (Math.max(bridgeG.length, 2));
          let plashm = String.fromCharCode(98,114,97,99,107,101,116,0);
          let countdownr = 0;
          let combinedF = String.fromCharCode(109,117,108,116,105,112,108,121,0);
         flyer0 += parseFloat(`${parseInt(`${flyer0}`) ^ 2}`);
         plashm += `${combinedF.length >> (Math.min(plashm.length, 5))}`;
         countdownr ^= combinedF.length;
      while (4.6 <= (flyer0 * 2.30)) {
         flyer0 -= parseFloat(`${gestureM << (Math.min(bridgeG.length, 5))}`);
         break;
      }
      while (2.54 <= (flyer0 * 5.55)) {
         gestureM <<= Math.min(4, bridgeG.length);
         break;
      }
         bridgeG = [bridgeG.length / (Math.max(7, gestureM))];
      for (let n = 0; n < 2; n++) {
         gestureM += bridgeG.length;
      }
      if (5 <= (gestureM - bridgeG.length)) {
         gestureM &= bridgeG.length;
      }
      tnewinterstitial_ += `${1 - gestureM}`;
      mergerG /= Math.max(5, parseFloat(`${parseInt(`${mappingf}`)}`));
      savev = `${vietnamY.size - analyticV.size}`;
      mappingf -= parseFloat(`${parseInt(`${mergerG}`)}`);

    onClose()

       let pressurep = 2.0;
       let animation9 = 5;
       let sportsq: Array<any> = [102, 89, 444];
      for (let s = 0; s < 1; s++) {
         pressurep -= parseFloat(`${parseInt(`${pressurep}`) - sportsq.length}`);
      }
          let phonev = String.fromCharCode(119,100,101,99,0);
          let kuaishouQ: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,105,101,118,101,100,0),false ], [String.fromCharCode(108,111,103,111,117,114,108,0),true ]]);
          let miniA = true;
         pressurep *= parseFloat(`${phonev.length % 1}`);
         phonev += `${(2 ^ (miniA ? 1 : 5))}`;
         kuaishouQ = new Map([[`${kuaishouQ.size}`, 1 + kuaishouQ.size]]);
      let fastforwardE = pressurep <= 7391408.0;
      do {
          let chinaq = true;
          let libhermesb = 1;
         pressurep *= (parseFloat(`${(chinaq ? 5 : 5) >> (Math.min(Math.abs(libhermesb), 2))}`));
         if (fastforwardE) {
            break;
         }
      } while (fastforwardE && (pressurep < 5.61));
       let score4 = String.fromCharCode(115,121,110,116,104,101,115,105,115,0);
         pressurep *= parseFloat(`${parseInt(`${pressurep}`)}`);
         pressurep *= parseFloat(`${sportsq.length / 3}`);
       let wcopy_pi = String.fromCharCode(97,110,110,117,108,97,114,0);
      for (let q = 0; q < 1; q++) {
         wcopy_pi += `${wcopy_pi.length * animation9}`;
      }
       let empty3 = 5;
      mergerG *= parseFloat(`${2}`);
      mappingf /= Math.max(parseFloat(`${3}`), 3);
       let episodesQ = false;
       let historyx = String.fromCharCode(100,105,103,105,116,99,111,117,110,116,95,104,95,52,50,0);
       let leftH = String.fromCharCode(102,95,50,48,95,115,101,112,97,114,97,116,101,115,0);
         episodesQ = String.fromCharCode(68,0) == leftH;
      if (!episodesQ) {
         leftH += `${(String.fromCharCode(104,0) == historyx ? historyx.length : (episodesQ ? 1 : 3))}`;
      }
          let reducerv: Map<any, any> = new Map([[String.fromCharCode(117,117,105,100,112,114,111,102,0),925], [String.fromCharCode(103,112,111,115,116,102,105,108,116,101,114,0),269]]);
          let delegate_80C = String.fromCharCode(114,97,112,105,100,106,115,111,110,0);
          let umengu = String.fromCharCode(100,105,115,99,111,118,101,114,121,95,106,95,49,49,0);
         episodesQ = historyx == umengu;
         reducerv.set(delegate_80C, 2);
         delegate_80C += "2";
         umengu = `${reducerv.size}`;
       let bodanA = 2.0;
       let leftd = 5.0;
      if (!leftH.startsWith(historyx)) {
         leftH = `${leftH.length | parseInt(`${bodanA}`)}`;
      }
         historyx = `${3 % (Math.max(8, parseInt(`${leftd}`)))}`;
      for (let d = 0; d < 1; d++) {
         historyx = `${(leftH == String.fromCharCode(97,0) ? parseInt(`${leftd}`) : leftH.length)}`;
      }
          let megaphonex = true;
          let annerm: Array<any> = [String.fromCharCode(105,110,105,116,104,0), String.fromCharCode(118,95,49,52,95,105,110,116,101,114,112,0)];
          let schedulerE: Array<any> = [850, 184, 276];
         leftd += parseFloat(`${historyx.length}`);
         megaphonex = annerm.length == 7;
         annerm.push(annerm.length);
         schedulerE = [((megaphonex ? 5 : 2) | 1)];
         bodanA *= (parseFloat(`${(episodesQ ? 4 : 2)}`));
      savev = "3";
      vietnamY = new Map([[`${vietnamY.size}`, (launchC == String.fromCharCode(100,0) ? vietnamY.size : launchC.length)]]);
   if ((mergerG / (Math.max(1.30, 4))) < 1.65) {
      savev += `${vietnamY.size}`;
   }
       let sharedQ = String.fromCharCode(105,110,110,101,114,0);
       let pageB = String.fromCharCode(98,105,116,119,114,105,116,101,114,95,110,95,56,49,0);
       let bufferG = true;
         sharedQ = "1";
          let renewQ: Map<any, any> = new Map([[String.fromCharCode(97,116,97,98,97,115,101,0),true ], [String.fromCharCode(112,97,114,97,109,101,116,101,114,115,0),false ], [String.fromCharCode(100,105,109,105,110,115,105,111,110,115,0),true ]]);
          let moviesY = 2.0;
          let sheetM = 1;
         pageB = `${renewQ.size ^ 3}`;
         renewQ.set(`${sheetM}`, 3 - parseInt(`${moviesY}`));
         moviesY += parseFloat(`${1}`);
         sheetM *= sheetM ^ 1;
      for (let f = 0; f < 3; f++) {
          let armva8 = 5.0;
         bufferG = pageB.length <= 77;
         armva8 += 3 % (Math.max(parseInt(`${armva8}`), 8));
      }
         bufferG = !pageB.endsWith(`${bufferG}`);
          let moduleU = 0.0;
          let r_imageA = 1.0;
         sharedQ += `${2 % (Math.max(6, parseInt(`${r_imageA}`)))}`;
         moduleU *= 1;
         r_imageA /= Math.max(parseFloat(`${3 + parseInt(`${moduleU}`)}`), 4);
         bufferG = sharedQ.length < 46;
      if (!pageB.includes(`${sharedQ.length}`)) {
          let football1 = 5.0;
         pageB += `${sharedQ.length}`;
         football1 += parseFloat(`${parseInt(`${football1}`)}`);
      }
         pageB += `${sharedQ.length}`;
      for (let y = 0; y < 3; y++) {
         pageB = `${sharedQ.length * pageB.length}`;
      }
      analyticV = new Map([[`${bufferG}`, 1 - parseInt(`${mergerG}`)]]);
       let promotionB: Map<any, any> = new Map([[String.fromCharCode(97,114,102,113,0),String.fromCharCode(109,101,109,95,101,95,48,0)], [String.fromCharCode(120,95,49,53,95,103,111,108,100,101,110,0),String.fromCharCode(103,111,116,111,0)], [String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,95,98,95,50,52,0),String.fromCharCode(115,112,97,99,105,110,103,0)]]);
       let sigmobi: Map<any, any> = new Map([[String.fromCharCode(117,95,51,56,95,109,101,109,98,101,114,0),true ], [String.fromCharCode(101,115,99,97,112,105,110,103,0),false ], [String.fromCharCode(116,111,116,97,108,108,121,0),true ]]);
       let zoomZ = String.fromCharCode(104,97,115,104,101,100,0);
          let setting2: Array<any> = [90, 111];
         promotionB = new Map([[`${sigmobi.size}`, setting2.length]]);
       let codegene = 4.0;
       let detailF = 4.0;
         zoomZ += `${promotionB.size + 1}`;
      if ((codegene / (Math.max(4.27, 7))) > 1.38) {
         codegene += (String.fromCharCode(108,0) == zoomZ ? zoomZ.length : promotionB.size);
      }
       let routero = true;
      mappingf += (parseFloat(`${String.fromCharCode(109,0) == launchC ? parseInt(`${mappingf}`) : launchC.length}`));
   if (savev.length == 2) {
      iconH += `${3 & iconH.length}`;
   }
       let found6 = String.fromCharCode(120,95,53,56,95,115,116,111,114,97,103,101,115,0);
      let lang8 = 8191555 >= found6.length;
      do {
         found6 += `${(found6 == String.fromCharCode(102,0) ? found6.length : found6.length)}`;
         if (lang8) {
            break;
         }
      } while ((!found6.endsWith(`${found6.length}`)) && lang8);
       let libffmpegkitB = String.fromCharCode(110,101,103,111,116,105,97,116,101,0);
       let dropdownJ = String.fromCharCode(111,110,121,120,0);
         found6 = `${3 + libffmpegkitB.length}`;
      launchC = `${vietnamY.size}`;
      progress3 = `${parseInt(`${mappingf}`) + vietnamY.size}`;
       let templateprocessorK: Array<any> = [50, 271, 746];
       let tempA = 3;
          let modityJ: Array<any> = [String.fromCharCode(115,112,108,97,116,0), String.fromCharCode(107,95,55,53,95,102,114,101,101,0), String.fromCharCode(114,101,108,102,117,110,99,0)];
         tempA |= 3 ^ tempA;
         modityJ = [1];
       let light8 = String.fromCharCode(100,101,116,101,114,109,105,110,101,100,0);
       let trashM = String.fromCharCode(112,97,114,101,110,116,97,103,101,0);
      while (templateprocessorK.length < 2) {
         templateprocessorK = [templateprocessorK.length >> (Math.min(Math.abs(1), 5))];
         break;
      }
          let latn2: Array<any> = [200, 151];
          let viewsH: Array<any> = [418, 145, 709];
          let current4 = 5.0;
         light8 = `${trashM.length / (Math.max(2, tempA))}`;
         latn2.push(latn2.length);
         viewsH.push(latn2.length);
         current4 *= parseFloat(`${1}`);
       let dangerl = 1;
       let blackP = 5;
      for (let f = 0; f < 3; f++) {
         blackP /= Math.max(3, 1);
      }
      iconH = `${analyticV.size ^ 3}`;
    navigator.navigate('付费VIP');
  }, [])

  const handleOnInvite = useCallback(() => {
       let modelse = String.fromCharCode(115,117,112,112,111,114,116,97,98,108,101,95,120,95,57,54,0);
    let fieldt = false;
    let libyogan: Array<any> = [String.fromCharCode(112,95,50,53,95,116,104,111,117,103,104,0), String.fromCharCode(114,101,97,100,120,98,108,111,99,107,0), String.fromCharCode(116,101,109,112,102,105,108,101,95,49,95,56,57,0)];
    let libturbomodulejsijni8: Map<any, any> = new Map([[String.fromCharCode(114,101,112,97,114,101,100,0),441], [String.fromCharCode(109,95,57,49,95,102,116,101,108,108,0),135], [String.fromCharCode(97,95,57,57,95,115,116,114,116,111,100,0),578]]);
    let long_rf = 1;
    let confirmationE = 3.0;
    let refreshZ: Map<any, any> = new Map([[String.fromCharCode(103,99,109,0),false ], [String.fromCharCode(115,101,103,0),false ]]);
    let playlistJ: Map<any, any> = new Map([[String.fromCharCode(117,110,114,101,103,105,115,116,101,114,0),String.fromCharCode(100,105,115,112,97,116,99,104,101,100,0)], [String.fromCharCode(116,104,114,111,116,116,108,105,110,103,0),String.fromCharCode(99,111,110,102,105,100,101,110,116,105,97,108,0)]]);
    let k_titleL = 5.0;
    let linkn = 2.0;
    let delegate_rG = 2.0;
    let singaporeg: Array<any> = [863, 277, 481];
    let prediction8 = 5;
   for (let t = 0; t < 1; t++) {
      confirmationE -= long_rf;
   }
   if (5 <= (libyogan.length + parseInt(`${confirmationE}`))) {
      confirmationE /= Math.max(2 & parseInt(`${k_titleL}`), 1);
   }
   if ((long_rf - libturbomodulejsijni8.size) >= 1 || (long_rf - libturbomodulejsijni8.size) >= 1) {
      long_rf &= playlistJ.size % 1;
   }
      k_titleL -= parseInt(`${linkn}`);
      playlistJ = new Map([[`${libturbomodulejsijni8.size}`, libturbomodulejsijni8.size | 3]]);
       let libpangleflippeds = String.fromCharCode(97,114,101,118,101,114,115,101,0);
         libpangleflippeds += "1";
      let vignettef = libpangleflippeds == String.fromCharCode(109,122,117,115,55,102,113,0);
      do {
         libpangleflippeds += `${(String.fromCharCode(110,0) == libpangleflippeds ? libpangleflippeds.length : libpangleflippeds.length)}`;
         if (vignettef) {
            break;
         }
      } while ((libpangleflippeds.endsWith(`${libpangleflippeds.length}`)) && vignettef);
         libpangleflippeds = `${libpangleflippeds.length >> (Math.min(Math.abs(1), 5))}`;
      long_rf += (long_rf - (fieldt ? 4 : 3));
       let filedK: Map<any, any> = new Map([[String.fromCharCode(116,119,111,108,111,111,112,0),true ], [String.fromCharCode(99,97,115,116,0),false ]]);
      for (let c = 0; c < 2; c++) {
         filedK.set(`${filedK.size}`, 3 + filedK.size);
      }
      while (4 == (3 >> (Math.min(5, Math.abs(filedK.size))))) {
         filedK = new Map([[`${filedK.size}`, filedK.size]]);
         break;
      }
      let dicec = 8301681 <= filedK.size;
      do {
         filedK = new Map([[`${filedK.size}`, 1]]);
         if (dicec) {
            break;
         }
      } while (dicec && (filedK.size <= filedK.size));
      modelse = `${3 * modelse.length}`;
      modelse += `${parseInt(`${k_titleL}`) ^ parseInt(`${linkn}`)}`;
      libyogan.push(parseInt(`${confirmationE}`) * parseInt(`${k_titleL}`));
   while (5 <= (libturbomodulejsijni8.size ^ 1) || (libturbomodulejsijni8.size / 1) <= 4) {
      libturbomodulejsijni8.set(`${long_rf}`, long_rf << (Math.min(modelse.length, 5)));
      break;
   }
   while (5.70 < (delegate_rG - parseFloat(`${libyogan.length}`))) {
       let successn = 4.0;
       let sportB = false;
       let baiduG = 4;
      for (let p = 0; p < 1; p++) {
         baiduG -= parseInt(`${successn}`);
      }
      for (let o = 0; o < 2; o++) {
         sportB = successn < 40.62 || !sportB;
      }
      for (let f = 0; f < 2; f++) {
         successn *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${successn}`)), 5))}`);
      }
         sportB = successn == 78.25;
         successn /= Math.max((parseFloat(`${parseInt(`${successn}`) + (sportB ? 4 : 3)}`)), 2);
         baiduG /= Math.max(1, ((sportB ? 5 : 4) << (Math.min(Math.abs(baiduG), 3))));
         sportB = 45.21 > successn;
         successn += parseFloat(`${baiduG / 1}`);
       let animationR: Map<any, any> = new Map([[String.fromCharCode(97,109,101,120,95,116,95,49,50,0),847], [String.fromCharCode(100,101,108,116,97,115,0),140], [String.fromCharCode(114,101,105,110,100,101,120,0),788]]);
       let serviceq: Map<any, any> = new Map([[String.fromCharCode(111,112,101,110,105,110,103,0),651], [String.fromCharCode(105,110,102,101,114,0),125]]);
      delegate_rG -= parseFloat(`${parseInt(`${delegate_rG}`) << (Math.min(4, Math.abs(parseInt(`${linkn}`))))}`);
      break;
   }
   while ((modelse.length - 5) <= 2 || (modelse.length - singaporeg.length) <= 5) {
      modelse = `${1 % (Math.max(4, parseInt(`${k_titleL}`)))}`;
      break;
   }
      delegate_rG *= parseFloat(`${3 / (Math.max(parseInt(`${confirmationE}`), 6))}`);
   while (modelse.includes(`${fieldt}`)) {
       let register_iq: Array<any> = [String.fromCharCode(101,115,101,110,100,0), String.fromCharCode(110,116,111,108,111,103,121,95,103,95,55,49,0)];
       let injury5 = String.fromCharCode(107,95,56,55,95,115,116,97,114,116,114,101,101,0);
       let viewerB = String.fromCharCode(101,97,103,101,114,95,53,95,56,54,0);
       let main_f8 = String.fromCharCode(119,109,97,100,97,116,97,95,99,95,51,53,0);
      if (register_iq.length == viewerB.length) {
          let detailX: Array<any> = [745, 106, 296];
         viewerB += `${1 ^ viewerB.length}`;
         detailX.push(detailX.length ^ 3);
      }
         injury5 += `${(main_f8 == String.fromCharCode(98,0) ? main_f8.length : register_iq.length)}`;
         injury5 += `${main_f8.length / (Math.max(7, viewerB.length))}`;
       let datac: Array<any> = [137, 810, 104];
         viewerB += `${1 | register_iq.length}`;
       let collectionQ: Map<any, any> = new Map([[String.fromCharCode(98,95,55,57,95,105,110,115,112,101,99,116,0),163], [String.fromCharCode(98,95,52,57,95,99,114,111,119,100,105,110,0),801], [String.fromCharCode(104,95,57,57,95,112,114,105,110,116,101,114,0),650]]);
          let robotoD = String.fromCharCode(99,97,110,100,105,100,97,116,101,115,0);
          let collectionG = String.fromCharCode(111,98,115,101,114,118,101,114,0);
         main_f8 = `${datac.length / 1}`;
         robotoD += `${robotoD.length}`;
         collectionG = `${collectionG.length + 3}`;
       let ewarded4 = 1.0;
       let matchk = 2.0;
          let rootc = 0.0;
         viewerB += `${1 + parseInt(`${ewarded4}`)}`;
         rootc *= parseInt(`${rootc}`) - parseInt(`${rootc}`);
       let stringt = 5.0;
       let hongkonge = String.fromCharCode(105,111,101,114,114,0);
         stringt -= parseFloat(`${register_iq.length | collectionQ.size}`);
      modelse = `${(main_f8 == String.fromCharCode(88,0) ? main_f8.length : singaporeg.length)}`;
      break;
   }
       let gesturesW = String.fromCharCode(116,105,108,101,115,95,113,95,52,57,0);
       let weibo5 = 0;
          let play9 = 1.0;
          let sound2 = 2.0;
         gesturesW = `${weibo5}`;
         play9 -= parseInt(`${sound2}`);
      for (let a = 0; a < 2; a++) {
         weibo5 >>= Math.min(Math.abs(weibo5 + 3), 1);
      }
         gesturesW = `${weibo5 % 1}`;
      while (3 >= (weibo5 % 5)) {
          let sportso = false;
          let controlsQ = String.fromCharCode(116,114,101,122,111,114,0);
         weibo5 >>= Math.min(2, Math.abs(controlsQ.length ^ 3));
         sportso = (!sportso ? !sportso : !sportso);
         controlsQ = "1";
         break;
      }
         gesturesW = `${weibo5 % (Math.max(gesturesW.length, 2))}`;
         weibo5 /= Math.max(gesturesW.length, 3);
      delegate_rG -= parseFloat(`${parseInt(`${delegate_rG}`)}`);
      modelse = `${singaporeg.length}`;

    onClose()

   if (4.80 >= (k_titleL + 3.55)) {
       let langkeyS: Array<any> = [754, 494, 645];
       let encryptN = String.fromCharCode(110,111,114,109,97,108,105,122,101,0);
         langkeyS = [encryptN.length];
      for (let q = 0; q < 2; q++) {
         encryptN = `${encryptN.length | langkeyS.length}`;
      }
      for (let m = 0; m < 1; m++) {
         langkeyS = [3 * langkeyS.length];
      }
         langkeyS = [(String.fromCharCode(111,0) == encryptN ? encryptN.length : langkeyS.length)];
         encryptN = `${langkeyS.length ^ encryptN.length}`;
       let combinen = 0.0;
      k_titleL *= 3 << (Math.min(5, encryptN.length));
   }
      linkn *= 1 | singaporeg.length;
      libturbomodulejsijni8.set(`${confirmationE}`, parseInt(`${confirmationE}`) << (Math.min(4, Math.abs(2))));
   let shirtG = singaporeg.length >= 5480185;
   do {
      singaporeg = [playlistJ.size >> (Math.min(Math.abs(3), 4))];
      if (shirtG) {
         break;
      }
   } while ((!singaporeg.includes(k_titleL)) && shirtG);
      refreshZ.set(`${fieldt}`, ((fieldt ? 3 : 2) - singaporeg.length));
      delegate_rG += parseFloat(`${playlistJ.size / (Math.max(3, 7))}`);
      prediction8 &= prediction8;
      delegate_rG += parseFloat(`${singaporeg.length}`);
       let libfabricjniZ = true;
       let roomD = 5;
         libfabricjniZ = libfabricjniZ || roomD < 25;
       let forwardw: Array<any> = [369, 308, 490];
       let libfabricjnij: Array<any> = [221, 293];
      for (let i = 0; i < 3; i++) {
         libfabricjniZ = !libfabricjniZ;
      }
      for (let w = 0; w < 1; w++) {
          let gestureK = true;
          let gray5: Array<any> = [33, 67, 659];
          let twitterO = String.fromCharCode(97,99,118,112,0);
         forwardw = [(twitterO == String.fromCharCode(105,0) ? roomD : twitterO.length)];
         gestureK = ((gray5.length & (!gestureK ? gray5.length : 48)) <= 48);
      }
      for (let w = 0; w < 1; w++) {
          let plashB = 3.0;
          let backgroundA = String.fromCharCode(115,111,108,105,100,99,111,108,111,114,0);
          let latnH = false;
         libfabricjnij = [((libfabricjniZ ? 4 : 4))];
         plashB -= (parseFloat(`${backgroundA == String.fromCharCode(121,0) ? backgroundA.length : parseInt(`${plashB}`)}`));
         latnH = plashB < parseFloat(`${backgroundA.length}`);
      }
          let entryj = String.fromCharCode(115,112,97,99,101,0);
          let dangerc = String.fromCharCode(117,110,115,101,114,105,97,108,105,122,101,95,52,95,57,52,0);
         forwardw.push(libfabricjnij.length >> (Math.min(Math.abs(3), 1)));
         entryj = `${(dangerc == String.fromCharCode(95,0) ? dangerc.length : entryj.length)}`;
      linkn += long_rf;
       let xvod4 = false;
       let penaltyr: Array<any> = [String.fromCharCode(97,110,103,101,95,50,95,49,51,0), String.fromCharCode(97,101,115,116,97,98,95,117,95,51,48,0)];
       let send9 = 3.0;
      while (!xvod4) {
         xvod4 = penaltyr.includes(send9);
         break;
      }
          let flyerI = 4.0;
          let with_1o = String.fromCharCode(101,114,108,101,0);
          let expiredd = String.fromCharCode(102,108,105,103,104,116,95,114,95,56,53,0);
         xvod4 = (flyerI * send9) <= 81.3;
         flyerI /= Math.max(2, (parseFloat(`${with_1o == String.fromCharCode(113,0) ? expiredd.length : with_1o.length}`)));
         expiredd = `${expiredd.length}`;
      let greys = 5799232.0 >= send9;
      do {
         send9 -= parseInt(`${send9}`) | 2;
         if (greys) {
            break;
         }
      } while ((!penaltyr.includes(send9)) && greys);
      if (4 > penaltyr.length && (4 << (Math.min(2, penaltyr.length))) > 4) {
          let mbridgeI = false;
          let libloggerc = 3.0;
          let basketballc = String.fromCharCode(121,115,108,111,103,0);
         penaltyr = [1];
         mbridgeI = parseInt(`${libloggerc}`) > basketballc.length;
         libloggerc /= Math.max((String.fromCharCode(83,0) == basketballc ? parseInt(`${libloggerc}`) : basketballc.length), 2);
      }
      if (5 <= penaltyr.length || 4 <= (5 << (Math.min(4, penaltyr.length)))) {
         penaltyr.push(penaltyr.length);
      }
       let navigation0 = 4.0;
         penaltyr.push(parseInt(`${send9}`));
       let bellc = String.fromCharCode(99,97,114,101,102,117,108,108,121,0);
       let rulesV = String.fromCharCode(116,114,97,110,115,109,105,116,116,101,100,0);
         penaltyr = [2];
      prediction8 *= ((xvod4 ? 1 : 4) ^ penaltyr.length);
      prediction8 |= playlistJ.size % 3;
   for (let w = 0; w < 3; w++) {
       let playlisth = String.fromCharCode(97,114,114,97,110,103,101,109,101,110,116,0);
       let episodeZ = String.fromCharCode(116,104,101,105,114,0);
         playlisth += "3";
          let sharedC = String.fromCharCode(109,116,105,109,101,0);
         episodeZ += `${sharedC.length * playlisth.length}`;
         playlisth += `${playlisth.length + episodeZ.length}`;
      for (let u = 0; u < 2; u++) {
          let utilsa = 0;
          let sentryo = String.fromCharCode(114,101,99,104,117,110,107,0);
          let gpayM = String.fromCharCode(108,111,103,95,50,95,56,52,0);
          let libtan6: Array<any> = [478, 913];
         playlisth += "2";
         utilsa *= (String.fromCharCode(105,0) == sentryo ? libtan6.length : sentryo.length);
         gpayM += "1";
         libtan6.push(sentryo.length);
      }
      while (playlisth.length == episodeZ.length) {
         episodeZ = `${(episodeZ == String.fromCharCode(110,0) ? playlisth.length : episodeZ.length)}`;
         break;
      }
      while (playlisth.length < 4) {
          let stationsJ: Map<any, any> = new Map([[String.fromCharCode(97,95,53,49,95,105,103,110,111,114,101,115,0),60], [String.fromCharCode(102,114,97,109,101,110,117,109,0),599], [String.fromCharCode(115,117,98,112,97,121,108,111,97,100,95,107,95,52,55,0),64]]);
          let logouty: Map<any, any> = new Map([[String.fromCharCode(105,116,97,108,105,97,110,0),587], [String.fromCharCode(97,116,114,97,99,95,100,95,56,0),850]]);
          let sinal = String.fromCharCode(109,97,115,107,105,110,103,0);
          let mimoJ = 3.0;
          let hiadr: Array<any> = [357, 903];
         playlisth += `${1 << (Math.min(3, episodeZ.length))}`;
         stationsJ = new Map([[`${logouty.size}`, parseInt(`${mimoJ}`)]]);
         logouty.set(`${mimoJ}`, logouty.size);
         sinal += `${logouty.size}`;
         hiadr.push(parseInt(`${mimoJ}`) / (Math.max(2, 5)));
         break;
      }
      singaporeg.push(parseInt(`${confirmationE}`));
   }
   while ((4.59 + linkn) >= 3.62 || 2.91 >= (4.59 + linkn)) {
       let libhermeso = 0;
       let umengd = 2.0;
      for (let z = 0; z < 2; z++) {
         umengd += parseInt(`${umengd}`) / 2;
      }
         libhermeso <<= Math.min(5, Math.abs(3));
      if (4.96 >= umengd) {
          let notificationf: Array<any> = [30, 960, 696];
          let soundZ = 4.0;
          let package_adL = String.fromCharCode(104,95,54,53,95,118,95,53,56,0);
         libhermeso ^= 1 | parseInt(`${umengd}`);
         notificationf.push(parseInt(`${soundZ}`) + 3);
         soundZ += parseFloat(`${1}`);
         package_adL += `${notificationf.length - 1}`;
      }
      if (4 == (libhermeso / 2)) {
          let downloadr = 2.0;
          let placementp: Array<any> = [126, 786, 336];
          let xvodq = 1.0;
         libhermeso &= 2 & libhermeso;
         downloadr -= parseFloat(`${placementp.length ^ parseInt(`${xvodq}`)}`);
         placementp = [parseInt(`${downloadr}`)];
         xvodq /= Math.max(1, parseInt(`${xvodq}`) * parseInt(`${downloadr}`));
      }
         libhermeso |= parseInt(`${umengd}`) | 3;
      if (libhermeso == 4) {
         libhermeso &= parseInt(`${umengd}`);
      }
      k_titleL *= long_rf ^ parseInt(`${umengd}`);
      break;
   }
   if (Array.from(libturbomodulejsijni8.values()).includes(singaporeg.length)) {
       let window_kqF: Map<any, any> = new Map([[String.fromCharCode(110,101,103,0),String.fromCharCode(112,105,112,101,108,105,110,101,0)], [String.fromCharCode(114,101,108,111,103,105,110,0),String.fromCharCode(115,112,114,101,97,100,0)]]);
      if (window_kqF.get(`${window_kqF.size}`) == null) {
         window_kqF.set(`${window_kqF.size}`, window_kqF.size);
      }
         window_kqF.set(`${window_kqF.size}`, 1 % (Math.max(7, window_kqF.size)));
      while (1 == (window_kqF.size - window_kqF.size) && (window_kqF.size - 1) == 4) {
         window_kqF = new Map([[`${window_kqF.size}`, window_kqF.size]]);
         break;
      }
      libturbomodulejsijni8.set(`${singaporeg.length}`, 1 | libyogan.length);
   }
      confirmationE /= Math.max(3, refreshZ.size ^ 2);
   for (let h = 0; h < 3; h++) {
       let description_4u = String.fromCharCode(116,97,98,108,101,108,105,109,0);
       let libreactnativejniY: Map<any, any> = new Map([[String.fromCharCode(112,97,105,110,116,115,95,48,95,49,56,0),581], [String.fromCharCode(115,98,112,114,111,95,57,95,51,57,0),461]]);
       let neonF = true;
         libreactnativejniY.set(description_4u, description_4u.length * 1);
      let router0 = String.fromCharCode(55,113,106,118,95,52,118,54,119,0) == description_4u;
      do {
         description_4u = `${libreactnativejniY.size}`;
         if (router0) {
            break;
         }
      } while (router0 && (!description_4u.endsWith(`${neonF}`)));
          let thailandw: Map<any, any> = new Map([[String.fromCharCode(100,101,99,105,109,97,116,101,0),359], [String.fromCharCode(97,98,101,108,95,107,95,50,0),396], [String.fromCharCode(98,117,105,108,100,115,0),522]]);
         libreactnativejniY.set(`${neonF}`, (3 * (neonF ? 5 : 2)));
         thailandw.set(`${thailandw.size}`, thailandw.size);
          let graphicsw = String.fromCharCode(117,95,53,50,95,112,97,110,0);
         description_4u += "3";
         graphicsw += `${graphicsw.length ^ 1}`;
         neonF = (10 <= (libreactnativejniY.size ^ (neonF ? libreactnativejniY.size : 93)));
      let backwardw = 6965380 <= description_4u.length;
      do {
          let sourceX = 0.0;
          let gestureh = 1;
          let activeh = 0.0;
         description_4u += `${(parseInt(`${activeh}`) / (Math.max(9, (neonF ? 3 : 1))))}`;
         sourceX -= parseInt(`${sourceX}`);
         gestureh -= gestureh - parseInt(`${sourceX}`);
         activeh -= parseFloat(`${1}`);
         if (backwardw) {
            break;
         }
      } while ((3 <= libreactnativejniY.size) && backwardw);
      if ((description_4u.length << (Math.min(5, Math.abs(libreactnativejniY.size)))) < 4) {
         libreactnativejniY = new Map([[`${libreactnativejniY.size}`, description_4u.length | libreactnativejniY.size]]);
      }
      let whistleF = neonF ? !neonF : neonF;
      do {
         neonF = (86 > ((!neonF ? description_4u.length : 86) << (Math.min(description_4u.length, 1))));
         if (whistleF) {
            break;
         }
      } while ((neonF) && whistleF);
       let collections = String.fromCharCode(114,101,116,114,105,101,118,101,0);
       let playU = String.fromCharCode(97,110,99,104,111,114,0);
      libyogan.push(description_4u.length);
   }

   navigator.navigate('邀请');





  }, [])


  return (

    <VipPrivilegeModal
      showDarkBackdrop={showDarkBackdrop}
      addPaddingTop={addPaddingTop}
      titleText={"VIP升级权益"}
      benefitsTextsArray={['高清体育赛事  零时差感受赛场激情', '海量福利视频 你想要的这里都有', '高清画质 无广告观影体验']}
      imageGradientColors = {['#FF9AD000', '#EB59A7'] }
      contentGradientColors = {['#EA58A7', '#DE2575']}
      coverBackground={adultBg}
      coverImage={adultModels}
      onPurchase={handleOnPurchase}
      onInvite={handleOnInvite}
      onClose={onClose}
      showBlur={showBlur}
      showCondition={showCondition}
    />

  )
}