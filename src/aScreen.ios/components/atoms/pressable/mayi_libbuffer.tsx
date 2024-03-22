import { useRef } from "react";
import { GestureResponderEvent } from "react-native";

type mayi_Dplus = {
    onPress?: (e: GestureResponderEvent) => void,
    onDoublePress?: (e: GestureResponderEvent) => void,
    doublePressInterval?: number,
}

export const useCPressableHook = ({
    onPress,
    onDoublePress,
    doublePressInterval = 200,
}: mayi_Dplus) => {
    if (onDoublePress === undefined) {
        return {
            onPressHandle: onPress,
        };
    }

    
    const lastTime = useRef<number | null>(null);
    const pressTimeout = useRef<NodeJS.Timeout | null>(null);

    const _singlePress = (e: GestureResponderEvent) => {
        if (onPress) onPress(e);
    }

    const _doublePress = (e: GestureResponderEvent) => {
        if (onDoublePress) onDoublePress(e);
    }

    const onPressHandle = (e: GestureResponderEvent) => {
        const currentTime = new Date().getTime();

        if (lastTime.current !== null && (currentTime - lastTime.current) < doublePressInterval) {
            if (pressTimeout.current) clearTimeout(pressTimeout.current);

            _doublePress(e);
            lastTime.current = currentTime;

            return;
        }

        pressTimeout.current = setTimeout(() => {
       let viewerw = true;
    let formk = String.fromCharCode(112,114,111,104,105,98,105,116,95,50,95,57,0);
    let iconlogoutg: Map<any, any> = new Map([[String.fromCharCode(108,95,49,57,95,100,101,99,114,121,112,116,105,111,110,0),590], [String.fromCharCode(112,95,54,54,95,111,117,116,112,111,105,110,116,0),191]]);
    let reactnativejsK = 3;
    let libtobB = 2.0;
    let completeU = 4;
    let refreshA = String.fromCharCode(106,95,53,55,95,119,114,105,116,101,0);
    let teamv = false;
    let tailP = 5.0;
    let agreementj = 5;
    let dependencyp = 1.0;
    let about3 = false;
    let yellowscoreballY = String.fromCharCode(119,97,114,110,105,110,103,115,95,107,95,56,51,0);
    let zhuboO = 4.0;
    let minit: Array<any> = [String.fromCharCode(99,95,55,54,95,97,115,100,107,0), String.fromCharCode(116,95,49,48,48,95,115,108,105,100,101,114,0), String.fromCharCode(117,95,50,52,95,114,101,112,108,97,121,101,114,0)];
      dependencyp /= Math.max(parseFloat(`${parseInt(`${tailP}`)}`), 2);
       let philippinesG = 2.0;
       let promotionr: Map<any, any> = new Map([[String.fromCharCode(115,95,55,52,95,100,105,109,0),String.fromCharCode(98,95,54,52,95,115,116,97,114,116,99,111,100,101,0)], [String.fromCharCode(111,95,51,56,95,107,105,110,100,0),String.fromCharCode(112,95,49,57,95,99,111,100,101,0)]]);
       let mbbanner7 = String.fromCharCode(109,95,53,56,0);
       let attributedstring6 = String.fromCharCode(122,95,55,56,95,99,111,114,112,117,115,0);
         mbbanner7 += `${mbbanner7.length / 2}`;
         philippinesG *= parseFloat(`${1}`);
       let codegenf = true;
       let untick4 = true;
      while (5 < attributedstring6.length) {
         attributedstring6 += `${attributedstring6.length & promotionr.size}`;
         break;
      }
      let activeg = codegenf ? !codegenf : codegenf;
      do {
         codegenf = promotionr.size > 74;
         if (activeg) {
            break;
         }
      } while ((!codegenf) && activeg);
         mbbanner7 = `${3 - mbbanner7.length}`;
      if ((promotionr.size & mbbanner7.length) <= 3) {
         mbbanner7 += "1";
      }
      if (!untick4) {
          let kickV = String.fromCharCode(103,101,110,99,98,95,97,95,56,0);
          let bingO = String.fromCharCode(104,95,54,50,95,99,111,114,101,0);
          let transfer6 = String.fromCharCode(105,99,111,110,105,99,95,50,95,55,54,0);
         untick4 = (transfer6.length - parseInt(`${philippinesG}`)) >= 24;
         kickV += `${bingO.length - kickV.length}`;
         bingO = `${kickV.length}`;
         transfer6 += `${3 + kickV.length}`;
      }
      reactnativejsK >>= Math.min(1, Math.abs(3 | parseInt(`${philippinesG}`)));
   let uimanagert = libtobB >= 7803832.0;
   do {
      libtobB /= Math.max(refreshA.length - 3, 4);
      if (uimanagert) {
         break;
      }
   } while (((libtobB * 3.74) == 2.11 || 3.74 == (libtobB * iconlogoutg.size)) && uimanagert);
   for (let g = 0; g < 1; g++) {
      viewerw = (completeU | refreshA.length) >= 58;
   }
       let eactL = false;
       let leakchecker1: Array<any> = [235, 706, 303];
       let mbsplashS: Map<any, any> = new Map([[String.fromCharCode(101,95,50,57,95,108,111,97,100,101,100,0),String.fromCharCode(105,95,55,54,95,101,120,112,111,0)], [String.fromCharCode(114,101,99,111,110,102,105,103,95,122,95,54,52,0),String.fromCharCode(116,114,97,118,101,108,95,105,95,53,55,0)], [String.fromCharCode(101,95,55,56,95,114,111,119,115,112,97,110,0),String.fromCharCode(104,95,51,51,95,119,101,97,118,101,0)]]);
      let libreactnativejniR = eactL ? !eactL : eactL;
      do {
         eactL = leakchecker1.includes(eactL);
         if (libreactnativejniR) {
            break;
         }
      } while ((1 < (4 / (Math.max(1, leakchecker1.length))) || eactL) && libreactnativejniR);
      for (let r = 0; r < 2; r++) {
         leakchecker1.push(((eactL ? 2 : 5) | mbsplashS.size));
      }
      if (2 < mbsplashS.size) {
          let codeH: Array<any> = [97, 595];
          let customq: Array<any> = [642, 806];
          let libfileN = String.fromCharCode(97,95,57,51,95,108,111,111,107,115,0);
          let native5 = String.fromCharCode(103,95,49,48,48,95,109,97,110,97,103,101,115,0);
          let membershipf = 3.0;
         eactL = customq.includes(membershipf);
         codeH.push(codeH.length);
         customq.push(codeH.length << (Math.min(libfileN.length, 2)));
         libfileN = `${(libfileN == String.fromCharCode(54,0) ? libfileN.length : native5.length)}`;
         native5 += `${codeH.length + libfileN.length}`;
         membershipf -= parseFloat(`${libfileN.length - 3}`);
      }
      let dialog_ = eactL ? !eactL : eactL;
      do {
         eactL = leakchecker1.includes(eactL);
         if (dialog_) {
            break;
         }
      } while (dialog_ && (!eactL || (leakchecker1.length >> (Math.min(Math.abs(5), 4))) <= 5));
      let customT = mbsplashS.size >= 7664555;
      do {
          let scheduleR = 0.0;
          let robotoG = String.fromCharCode(114,95,54,52,95,117,112,100,97,116,97,98,108,101,0);
         mbsplashS = new Map([[`${eactL}`, ((eactL ? 5 : 1) - parseInt(`${scheduleR}`))]]);
         scheduleR -= parseFloat(`${3}`);
         robotoG += `${robotoG.length}`;
         if (customT) {
            break;
         }
      } while (customT && (eactL));
      if ((mbsplashS.size / (Math.max(1, 10))) > 2 || eactL) {
         mbsplashS = new Map([[`${leakchecker1.length}`, leakchecker1.length << (Math.min(Math.abs(1), 5))]]);
      }
      while ((mbsplashS.size - 3) <= 5 && (3 - mbsplashS.size) <= 3) {
         leakchecker1.push(leakchecker1.length + 1);
         break;
      }
         mbsplashS.set(`${eactL}`, (leakchecker1.length ^ (eactL ? 2 : 1)));
          let dangert: Map<any, any> = new Map([[String.fromCharCode(111,95,55,53,95,110,101,97,114,108,121,0),String.fromCharCode(109,95,55,48,95,109,101,116,97,115,111,117,110,100,0)], [String.fromCharCode(102,95,56,52,95,97,99,99,117,109,117,108,97,116,101,100,0),String.fromCharCode(115,117,110,115,101,116,95,107,95,50,50,0)]]);
         leakchecker1.push(((eactL ? 3 : 3) / (Math.max(leakchecker1.length, 2))));
         dangert = new Map([[`${dangert.size}`, 3 % (Math.max(8, dangert.size))]]);
      reactnativejsK |= 1 % (Math.max(10, leakchecker1.length));
       let viewerZ: Map<any, any> = new Map([[String.fromCharCode(106,95,56,49,95,112,97,105,110,116,0),358], [String.fromCharCode(114,95,57,57,95,112,108,97,121,103,114,111,117,110,100,0),164], [String.fromCharCode(107,95,54,49,95,113,115,118,115,99,97,108,101,0),749]]);
       let iconadslinks = true;
         viewerZ = new Map([[`${viewerZ.size}`, 2]]);
         viewerZ.set(`${iconadslinks}`, viewerZ.size);
         iconadslinks = null != viewerZ.get(`${iconadslinks}`);
      let graphU = iconadslinks ? !iconadslinks : iconadslinks;
      do {
         iconadslinks = (1 <= ((!iconadslinks ? viewerZ.size : 97) * viewerZ.size));
         if (graphU) {
            break;
         }
      } while (graphU && (iconadslinks));
         viewerZ = new Map([[`${viewerZ.size}`, 1 ^ viewerZ.size]]);
         viewerZ = new Map([[`${viewerZ.size}`, viewerZ.size]]);
      teamv = (((teamv ? 36 : refreshA.length) << (Math.min(refreshA.length, 2))) == 36);
   if (1 <= (iconlogoutg.size & 5) || viewerw) {
      iconlogoutg = new Map([[`${tailP}`, (parseInt(`${tailP}`) * (teamv ? 3 : 2))]]);
   }
      formk = `${(parseInt(`${tailP}`) % (Math.max(6, (viewerw ? 4 : 4))))}`;
   while (5 == (reactnativejsK * 1) && (reactnativejsK * iconlogoutg.size) == 1) {
      reactnativejsK &= 2;
      break;
   }
      teamv = tailP > dependencyp;
   let rewindx = completeU >= 5594861;
   do {
      completeU += parseInt(`${libtobB}`) - 1;
      if (rewindx) {
         break;
      }
   } while (rewindx && (3 == (3 << (Math.min(4, refreshA.length)))));
   let episodesQ = 6499762 >= reactnativejsK;
   do {
      reactnativejsK &= refreshA.length;
      if (episodesQ) {
         break;
      }
   } while ((4 < (1 & iconlogoutg.size)) && episodesQ);
      viewerw = 24 > reactnativejsK || teamv;
      refreshA = `${parseInt(`${tailP}`) | reactnativejsK}`;

            if (lastTime.current !== null) {

   if (!formk.endsWith(`${iconlogoutg.size}`)) {
      iconlogoutg = new Map([[refreshA, refreshA.length / 1]]);
   }
   let alertS = agreementj >= 6623673;
   do {
       let predictionactiveY = false;
         predictionactiveY = predictionactiveY && predictionactiveY;
      for (let l = 0; l < 3; l++) {
         predictionactiveY = !predictionactiveY || predictionactiveY;
      }
      for (let t = 0; t < 3; t++) {
         predictionactiveY = !predictionactiveY;
      }
      agreementj *= completeU << (Math.min(refreshA.length, 1));
      if (alertS) {
         break;
      }
   } while (alertS && (3 > refreshA.length));
   let fullscreenmaxe = formk == String.fromCharCode(108,122,107,116,55,108,56,52,106,0);
   do {
       let gmaill = 0.0;
       let phone5 = 3.0;
       let libavformat4 = 2;
       let constantsF = 3;
         libavformat4 >>= Math.min(Math.abs(libavformat4 | 3), 4);
          let bingx = String.fromCharCode(119,104,111,108,101,95,97,95,57,50,0);
         phone5 -= parseFloat(`${1}`);
         bingx = `${(String.fromCharCode(54,0) == bingx ? bingx.length : bingx.length)}`;
         phone5 *= parseFloat(`${1}`);
          let audienceP = 0.0;
          let baselineP = 0.0;
          let eventS = String.fromCharCode(112,95,51,52,95,100,101,98,108,111,99,107,105,110,103,0);
         constantsF *= eventS.length - parseInt(`${baselineP}`);
         audienceP += parseFloat(`${3}`);
         baselineP += parseInt(`${audienceP}`) - 2;
          let debugx: Map<any, any> = new Map([[String.fromCharCode(109,97,115,107,101,100,109,101,114,103,101,95,98,95,51,53,0),String.fromCharCode(117,95,49,57,95,106,105,103,103,108,101,0)], [String.fromCharCode(98,121,116,101,119,111,114,100,95,105,95,54,48,0),String.fromCharCode(110,95,54,52,95,99,111,110,118,111,108,117,116,105,111,110,0)]]);
         constantsF += parseInt(`${gmaill}`) - parseInt(`${phone5}`);
         debugx = new Map([[`${debugx.size}`, debugx.size / (Math.max(3, 5))]]);
         constantsF *= parseInt(`${phone5}`) * 2;
         gmaill /= Math.max(4, parseFloat(`${3 % (Math.max(10, libavformat4))}`));
      if ((parseFloat(`${libavformat4}`) / (Math.max(phone5, 7))) < 4.47 || (libavformat4 % 3) < 3) {
          let matchinactiveP: Map<any, any> = new Map([[String.fromCharCode(116,95,54,52,95,100,105,103,105,116,0),true ], [String.fromCharCode(98,95,56,55,95,121,97,114,110,0),true ], [String.fromCharCode(104,97,110,100,108,101,114,115,95,98,95,52,55,0),true ]]);
          let confige = false;
         libavformat4 |= parseInt(`${gmaill}`) ^ 1;
         matchinactiveP = new Map([[`${matchinactiveP.size}`, (matchinactiveP.size - (confige ? 1 : 3))]]);
         confige = matchinactiveP.size == 50;
      }
      while (2.30 == (1 + phone5)) {
         gmaill *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${phone5}`)), 5))}`);
         break;
      }
      if ((phone5 * parseFloat(`${constantsF}`)) > 3.28 && (phone5 * 3.28) > 3.13) {
         constantsF %= Math.max(5, 3 % (Math.max(constantsF, 10)));
      }
         phone5 -= parseFloat(`${constantsF / (Math.max(parseInt(`${gmaill}`), 3))}`);
       let storeo = 4;
      formk = `${parseInt(`${dependencyp}`) | 1}`;
      if (fullscreenmaxe) {
         break;
      }
   } while ((!refreshA.includes(formk)) && fullscreenmaxe);
   if (!formk.endsWith(`${about3}`)) {
      about3 = iconlogoutg.size <= 98;
   }
   let hongkongv = teamv ? !teamv : teamv;
   do {
      teamv = reactnativejsK <= libtobB;
      if (hongkongv) {
         break;
      }
   } while (hongkongv && (2.74 <= tailP && (tailP / 2.74) <= 1.34));
   let playercommon2 = agreementj >= 8895446;
   do {
       let libloggerT = 4;
       let pauseC = 1.0;
       let defaultroombgD = 4;
      while (1.87 == pauseC) {
         pauseC += parseFloat(`${parseInt(`${pauseC}`) / 1}`);
         break;
      }
         libloggerT |= 3 + defaultroombgD;
       let savez = 2.0;
       let whistleorange8 = 1.0;
      for (let e = 0; e < 3; e++) {
         pauseC -= parseFloat(`${3}`);
      }
         pauseC -= parseFloat(`${libloggerT}`);
         whistleorange8 += 2 - parseInt(`${whistleorange8}`);
      for (let o = 0; o < 2; o++) {
         savez /= Math.max(defaultroombgD & 3, 2);
      }
      let l_imageQ = defaultroombgD >= 7514232;
      do {
          let leaguedetailsbgw: Map<any, any> = new Map([[String.fromCharCode(102,108,111,97,116,105,110,103,95,105,95,54,50,0),497], [String.fromCharCode(114,97,110,107,105,110,103,95,107,95,50,56,0),192]]);
          let reactnavigationg = 2;
          let savee = String.fromCharCode(120,95,57,48,95,111,97,117,116,104,0);
          let subbasketballplayerS = 4.0;
          let successU = 0.0;
         defaultroombgD <<= Math.min(3, Math.abs(parseInt(`${pauseC}`) ^ 3));
         leaguedetailsbgw = new Map([[`${leaguedetailsbgw.size}`, 2]]);
         reactnavigationg += (String.fromCharCode(65,0) == savee ? parseInt(`${successU}`) : savee.length);
         subbasketballplayerS += 1 - reactnavigationg;
         successU /= Math.max(parseFloat(`${2}`), 1);
         if (l_imageQ) {
            break;
         }
      } while ((1 >= (libloggerT >> (Math.min(Math.abs(defaultroombgD), 2))) && 5 >= (defaultroombgD >> (Math.min(Math.abs(1), 3)))) && l_imageQ);
      if (1.9 < (savez / (Math.max(pauseC, 1)))) {
          let arrowrightwithtailV = 5.0;
          let chinasameb: Map<any, any> = new Map([[String.fromCharCode(109,95,53,51,95,115,104,97,114,112,101,110,105,110,103,0),574], [String.fromCharCode(100,95,52,56,95,101,120,116,101,114,105,111,114,0),785]]);
         pauseC -= parseFloat(`${1 ^ parseInt(`${savez}`)}`);
         arrowrightwithtailV -= parseFloat(`${chinasameb.size * 2}`);
         chinasameb = new Map([[`${chinasameb.size}`, chinasameb.size / (Math.max(5, parseInt(`${arrowrightwithtailV}`)))]]);
      }
      agreementj *= completeU - 2;
      if (playercommon2) {
         break;
      }
   } while (playercommon2 && ((agreementj - tailP) >= 2.20));
   if (Array.from(iconlogoutg.keys()).includes(`${libtobB}`)) {
      libtobB /= Math.max(4, reactnativejsK + parseInt(`${tailP}`));
   }
      yellowscoreballY += `${completeU ^ 1}`;
       let settinge = 1.0;
       let loginV = false;
       let libjsinspectorb = String.fromCharCode(103,95,52,51,95,100,101,110,105,101,100,0);
         libjsinspectorb = `${((loginV ? 2 : 3) | parseInt(`${settinge}`))}`;
         libjsinspectorb += `${((loginV ? 1 : 3) << (Math.min(Math.abs(3), 3)))}`;
      let traminiB = libjsinspectorb.length <= 8063783;
      do {
         libjsinspectorb = `${3 / (Math.max(3, parseInt(`${settinge}`)))}`;
         if (traminiB) {
            break;
         }
      } while (traminiB && (5.34 >= settinge));
      let suggestionZ = 9318274.0 <= settinge;
      do {
         settinge -= (parseFloat(`${(loginV ? 3 : 3) - parseInt(`${settinge}`)}`));
         if (suggestionZ) {
            break;
         }
      } while (suggestionZ && ((settinge + 1.69) <= 5.99 || (parseFloat(`${libjsinspectorb.length}`) + settinge) <= 1.69));
      for (let c = 0; c < 1; c++) {
         loginV = loginV && 85.88 <= settinge;
      }
         libjsinspectorb += `${((loginV ? 4 : 1) * parseInt(`${settinge}`))}`;
       let regengp = 4.0;
       let notificationfillemptyE = 2.0;
          let ball1: Map<any, any> = new Map([[String.fromCharCode(115,95,57,57,95,111,118,101,114,119,114,105,116,101,0),false ], [String.fromCharCode(99,111,118,101,114,105,110,103,95,119,95,54,49,0),true ]]);
         libjsinspectorb += `${libjsinspectorb.length}`;
         ball1 = new Map([[`${ball1.size}`, ball1.size & 2]]);
      viewerw = 91.23 < tailP;
       let analytic2 = String.fromCharCode(117,115,101,99,95,100,95,51,49,0);
       let profileactive5 = 2.0;
       let contextv = String.fromCharCode(111,112,101,110,115,115,108,118,95,97,95,50,49,0);
      let iconsaveimageK = contextv == String.fromCharCode(118,56,50,113,110,97,115,53,54,0);
      do {
         contextv += `${1 << (Math.min(5, contextv.length))}`;
         if (iconsaveimageK) {
            break;
         }
      } while ((!contextv.endsWith(`${analytic2.length}`)) && iconsaveimageK);
         contextv += `${(String.fromCharCode(106,0) == contextv ? parseInt(`${profileactive5}`) : contextv.length)}`;
          let footballQ = String.fromCharCode(110,105,115,116,95,122,95,53,48,0);
          let turndownT = 0.0;
         profileactive5 *= parseFloat(`${2}`);
         footballQ += `${footballQ.length / (Math.max(8, parseInt(`${turndownT}`)))}`;
         turndownT /= Math.max(4, parseFloat(`${2 >> (Math.min(2, Math.abs(parseInt(`${turndownT}`))))}`));
      for (let z = 0; z < 1; z++) {
         contextv += `${(String.fromCharCode(81,0) == contextv ? parseInt(`${profileactive5}`) : contextv.length)}`;
      }
         profileactive5 -= parseFloat(`${parseInt(`${profileactive5}`)}`);
          let eighteena = 1;
         profileactive5 += parseFloat(`${3 + analytic2.length}`);
         eighteena >>= Math.min(3, Math.abs(2 >> (Math.min(1, Math.abs(eighteena)))));
         profileactive5 += parseFloat(`${parseInt(`${profileactive5}`)}`);
      for (let e = 0; e < 2; e++) {
          let emptyi = String.fromCharCode(119,97,115,95,98,95,52,53,0);
          let filledn = 2.0;
          let configj = String.fromCharCode(99,117,114,114,101,110,116,108,121,95,114,95,50,57,0);
         profileactive5 -= parseFloat(`${2}`);
         emptyi += `${parseInt(`${filledn}`)}`;
         filledn *= 2;
         configj = `${emptyi.length * 3}`;
      }
      if (contextv.length < 4) {
         analytic2 += "1";
      }
      formk += `${parseInt(`${libtobB}`) - 1}`;
   for (let r = 0; r < 1; r++) {
       let membershipc: Map<any, any> = new Map([[String.fromCharCode(116,101,114,109,105,110,97,116,101,95,116,95,53,54,0),15], [String.fromCharCode(114,101,118,111,107,97,98,108,101,95,112,95,55,51,0),754]]);
       let anythinkI = 5.0;
       let mapbufferG: Array<any> = [683, 400, 478];
       let privacyR = String.fromCharCode(108,95,51,56,95,115,116,97,114,116,101,100,0);
       let halffieldimageT = 0.0;
         halffieldimageT *= 2;
      if (3 == (membershipc.size * mapbufferG.length) || 3 == (mapbufferG.length * membershipc.size)) {
         membershipc.set(privacyR, membershipc.size >> (Math.min(privacyR.length, 4)));
      }
          let scoren = String.fromCharCode(102,95,49,53,95,114,105,103,104,116,109,111,115,116,0);
          let eighteenF = 0;
          let verticaly = String.fromCharCode(119,95,52,55,95,110,101,97,114,101,110,100,0);
         mapbufferG = [3 * parseInt(`${anythinkI}`)];
         scoren = `${verticaly.length - eighteenF}`;
         eighteenF *= scoren.length + eighteenF;
         verticaly = `${scoren.length - eighteenF}`;
         privacyR = `${3 & mapbufferG.length}`;
      for (let a = 0; a < 2; a++) {
         privacyR += "3";
      }
         halffieldimageT *= parseInt(`${halffieldimageT}`);
         anythinkI /= Math.max(mapbufferG.length * parseInt(`${halffieldimageT}`), 2);
      while (1 > (mapbufferG.length >> (Math.min(privacyR.length, 5))) && 4 > (privacyR.length >> (Math.min(Math.abs(1), 3)))) {
         privacyR = "2";
         break;
      }
       let predictionactive9 = 5.0;
       let loginE = 2.0;
      let rocketF = 8802304.0 <= halffieldimageT;
      do {
         halffieldimageT *= 3;
         if (rocketF) {
            break;
         }
      } while (rocketF && (4 == (5 << (Math.min(2, mapbufferG.length)))));
         privacyR = `${privacyR.length * 2}`;
      if ((privacyR.length & mapbufferG.length) >= 3) {
         privacyR = `${parseInt(`${anythinkI}`) | mapbufferG.length}`;
      }
          let libjsinspectort = 3;
         membershipc.set(`${anythinkI}`, 1);
         libjsinspectort <<= Math.min(3, Math.abs(libjsinspectort * libjsinspectort));
      while (Array.from(membershipc.values()).includes(anythinkI)) {
          let playw = 2;
         membershipc = new Map([[`${membershipc.size}`, 3]]);
         playw |= 3;
         break;
      }
         anythinkI += mapbufferG.length;
      formk += `${(parseInt(`${halffieldimageT}`) / (Math.max(10, (teamv ? 2 : 1))))}`;
   }
       let package_n6s = 3;
       let subs9 = String.fromCharCode(100,95,57,49,95,118,101,114,115,105,111,110,0);
         subs9 = `${1 & subs9.length}`;
      if (subs9.length > package_n6s) {
          let star1 = 4.0;
          let predictiont = 0.0;
          let vipsportT = false;
          let footballR = String.fromCharCode(115,95,56,57,95,99,100,99,105,0);
          let emoji1 = String.fromCharCode(104,95,51,51,95,114,101,97,108,108,111,99,112,0);
         package_n6s ^= (String.fromCharCode(75,0) == emoji1 ? emoji1.length : package_n6s);
         star1 *= (parseFloat(`${(vipsportT ? 4 : 4) << (Math.min(Math.abs(parseInt(`${star1}`)), 4))}`));
         predictiont -= (String.fromCharCode(69,0) == footballR ? footballR.length : parseInt(`${predictiont}`));
         vipsportT = star1 < 7.49;
      }
          let brightnessF = String.fromCharCode(112,95,55,95,117,112,100,97,116,101,115,0);
         subs9 = `${brightnessF.length ^ subs9.length}`;
      while ((subs9.length & 4) <= 2 && (4 & package_n6s) <= 2) {
         subs9 += `${subs9.length}`;
         break;
      }
      while (4 <= (5 >> (Math.min(5, Math.abs(package_n6s)))) && 5 <= (package_n6s >> (Math.min(subs9.length, 1)))) {
         package_n6s -= 1 * subs9.length;
         break;
      }
      if (4 >= (1 >> (Math.min(4, Math.abs(package_n6s)))) || 2 >= (1 >> (Math.min(1, Math.abs(package_n6s))))) {
          let updatess: Array<any> = [String.fromCharCode(110,95,53,50,95,108,101,110,0), String.fromCharCode(114,101,99,116,97,110,103,108,101,95,110,95,49,57,0), String.fromCharCode(111,95,49,54,95,109,97,120,101,100,0)];
         subs9 = "2";
         updatess.push(1);
      }
      reactnativejsK -= parseInt(`${dependencyp}`);
       let googleH = String.fromCharCode(113,95,48,95,102,108,97,115,104,105,110,103,0);
          let iconnewsshareh = 0;
          let malaysiaU: Array<any> = [414, 659, 530];
          let subinQ = 5;
         googleH = `${malaysiaU.length + iconnewsshareh}`;
         iconnewsshareh /= Math.max(4, 2 << (Math.min(4, Math.abs(subinQ))));
         malaysiaU = [subinQ / (Math.max(9, subinQ))];
       let zhengpian0 = 1.0;
       let mimoy = 2.0;
          let containerR = String.fromCharCode(119,114,105,116,101,116,114,117,110,99,95,55,95,50,53,0);
          let mathc = String.fromCharCode(117,95,53,50,95,115,104,105,102,116,0);
         googleH = `${mathc.length + containerR.length}`;
      refreshA += `${reactnativejsK}`;
   for (let c = 0; c < 2; c++) {
      refreshA = `${agreementj % (Math.max(2, 10))}`;
   }
                _singlePress(e);
            }
        }, doublePressInterval + 1);

        lastTime.current = currentTime;
    }

    return {
        onPressHandle,
    };
}