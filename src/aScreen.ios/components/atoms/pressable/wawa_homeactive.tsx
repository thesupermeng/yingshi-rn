import { useRef } from "react";
import { GestureResponderEvent } from "react-native";

type wawaMatchactive = {
    onPress?: (e: GestureResponderEvent) => void,
    onDoublePress?: (e: GestureResponderEvent) => void,
    doublePressInterval?: number,
}

export const useCPressableHook = ({
    onPress,
    onDoublePress,
    doublePressInterval = 200,
}: wawaMatchactive) => {
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
       let runtimeX: Array<any> = [284, 847];
    let liveendmodallogoO = 3;
    let annerk = 2.0;
    let redscoreballE = false;
    let yellowredcarde: Map<any, any> = new Map([[String.fromCharCode(108,97,116,101,110,99,121,95,54,95,55,51,0),false ], [String.fromCharCode(108,95,48,95,115,101,103,0),true ]]);
    let tempB = String.fromCharCode(120,95,57,53,95,98,114,97,99,101,0);
    let logoutW = 1.0;
    let projectr = 0;
    let iconarrowrightblackW = String.fromCharCode(104,95,52,95,118,111,114,100,105,112,108,111,109,0);
    let webviewB = String.fromCharCode(99,95,50,52,95,105,103,110,111,114,101,0);
    let showI = 4;
   if ((projectr / 2) < 2) {
       let benefitB = 5;
       let colorsr = String.fromCharCode(119,95,57,56,95,97,114,105,116,104,0);
       let neonq = String.fromCharCode(121,95,49,50,95,115,97,118,101,0);
       let spinnerL = 1.0;
      while ((colorsr.length - benefitB) == 4 || (colorsr.length - benefitB) == 4) {
         benefitB ^= colorsr.length;
         break;
      }
      for (let v = 0; v < 1; v++) {
          let reactnativeultimatelistviewZ = 3.0;
          let sigmobA: Array<any> = [852, 70];
          let crownx = true;
         colorsr += `${neonq.length}`;
         reactnativeultimatelistviewZ -= parseFloat(`${3 ^ parseInt(`${reactnativeultimatelistviewZ}`)}`);
         sigmobA.push(3 >> (Math.min(Math.abs(parseInt(`${reactnativeultimatelistviewZ}`)), 3)));
         crownx = 33 >= sigmobA.length;
      }
          let reactnativejsl = 4.0;
         neonq += `${parseInt(`${reactnativejsl}`) ^ 2}`;
       let adultw = true;
      while ((2 * benefitB) == 4 && 2 == (benefitB * colorsr.length)) {
          let valuesT: Array<any> = [String.fromCharCode(112,97,105,110,116,95,109,95,54,50,0), String.fromCharCode(118,95,53,54,95,108,105,98,119,101,98,112,101,110,99,0), String.fromCharCode(107,95,55,52,95,118,99,97,114,100,0)];
         benefitB ^= neonq.length << (Math.min(Math.abs(3), 1));
         valuesT.push(1 + valuesT.length);
         break;
      }
          let profileframeO = String.fromCharCode(121,95,52,56,95,102,111,114,101,109,97,110,0);
          let iconarrowrightorangeN = String.fromCharCode(118,95,49,52,95,115,112,101,97,107,101,114,0);
         adultw = profileframeO.length <= iconarrowrightorangeN.length;
          let sliderh = String.fromCharCode(107,95,52,95,118,112,97,116,104,0);
          let unimplementedviewc = String.fromCharCode(109,95,53,56,95,112,101,114,115,105,115,116,97,98,108,101,0);
         spinnerL += parseFloat(`${unimplementedviewc.length % 1}`);
         sliderh += "1";
         unimplementedviewc += "3";
      for (let l = 0; l < 3; l++) {
          let screenG = String.fromCharCode(117,95,55,49,95,100,101,116,101,114,109,105,110,97,98,108,101,0);
          let nalyticsu: Array<any> = [String.fromCharCode(111,112,101,110,103,108,95,102,95,57,57,0), String.fromCharCode(110,111,115,105,109,100,95,117,95,52,54,0), String.fromCharCode(117,95,52,48,95,109,111,100,105,102,105,99,97,116,105,111,110,0)];
          let models2 = false;
          let relatedg = String.fromCharCode(97,115,115,105,103,110,101,100,95,51,95,57,49,0);
         neonq = `${nalyticsu.length}`;
         screenG = `${(String.fromCharCode(102,0) == relatedg ? relatedg.length : (models2 ? 3 : 3))}`;
         nalyticsu = [relatedg.length];
      }
         colorsr = `${benefitB}`;
          let watcht = 1;
         spinnerL += parseFloat(`${colorsr.length % 1}`);
         watcht >>= Math.min(1, Math.abs(watcht % (Math.max(2, 10))));
      while ((benefitB + colorsr.length) == 4 || (benefitB + colorsr.length) == 4) {
          let mathR = 1.0;
          let proxyB = String.fromCharCode(97,112,116,120,104,100,95,110,95,55,50,0);
          let theme2 = String.fromCharCode(99,95,55,57,95,109,97,112,112,97,98,108,101,0);
         benefitB |= parseInt(`${mathR}`) << (Math.min(2, Math.abs(benefitB)));
         mathR /= Math.max(1, parseFloat(`${proxyB.length}`));
         proxyB = `${(String.fromCharCode(74,0) == proxyB ? proxyB.length : theme2.length)}`;
         theme2 += `${2 >> (Math.min(2, theme2.length))}`;
         break;
      }
          let iconpipexpandY = String.fromCharCode(112,111,115,115,105,98,108,101,95,108,95,51,49,0);
          let viewerj = 1.0;
         neonq = `${benefitB - 2}`;
         iconpipexpandY = `${(iconpipexpandY == String.fromCharCode(67,0) ? parseInt(`${viewerj}`) : iconpipexpandY.length)}`;
         viewerj *= parseInt(`${viewerj}`);
      projectr += (tempB == String.fromCharCode(115,0) ? parseInt(`${logoutW}`) : tempB.length);
   }
   for (let s = 0; s < 3; s++) {
      yellowredcarde = new Map([[tempB, webviewB.length * tempB.length]]);
   }
      iconarrowrightblackW += `${yellowredcarde.size}`;
   if (3.99 <= annerk) {
      annerk -= parseFloat(`${projectr}`);
   }
   let reducerl = redscoreballE ? !redscoreballE : redscoreballE;
   do {
      redscoreballE = webviewB.includes(`${liveendmodallogoO}`);
      if (reducerl) {
         break;
      }
   } while ((!redscoreballE) && reducerl);
       let over4 = String.fromCharCode(113,95,55,51,0);
       let skipF: Array<any> = [407, 15, 773];
       let redcirclebgd = 2.0;
      while (4 >= (parseInt(`${redcirclebgd}`) / (Math.max(skipF.length, 5)))) {
         skipF = [parseInt(`${redcirclebgd}`)];
         break;
      }
      while (skipF.includes(redcirclebgd)) {
         skipF = [parseInt(`${redcirclebgd}`) - skipF.length];
         break;
      }
      if (!skipF.includes(redcirclebgd)) {
          let constantsd = String.fromCharCode(100,99,116,101,108,101,109,95,48,95,49,56,0);
          let iconviewergifz = 0.0;
          let type_wg1 = String.fromCharCode(115,116,114,105,100,105,110,103,95,121,95,52,48,0);
          let y_viewI = true;
         redcirclebgd -= parseFloat(`${3 | parseInt(`${redcirclebgd}`)}`);
         constantsd = `${constantsd.length}`;
         iconviewergifz += (parseFloat(`${3 % (Math.max(3, (y_viewI ? 5 : 1)))}`));
         type_wg1 = `${constantsd.length}`;
         y_viewI = type_wg1.length > 19;
      }
      for (let l = 0; l < 2; l++) {
         redcirclebgd -= (parseFloat(`${String.fromCharCode(55,0) == over4 ? over4.length : parseInt(`${redcirclebgd}`)}`));
      }
       let const_g2_ = 0.0;
       let libimagepipeliney = 5.0;
       let rightF = 5.0;
         redcirclebgd += parseFloat(`${over4.length | skipF.length}`);
         const_g2_ += parseFloat(`${parseInt(`${libimagepipeliney}`) >> (Math.min(over4.length, 2))}`);
          let bang3: Array<any> = [509, 176, 160];
          let eventsplashQ = String.fromCharCode(109,95,53,55,95,99,97,116,99,104,115,105,103,110,97,108,0);
          let button6 = String.fromCharCode(112,111,105,110,116,111,99,116,95,113,95,51,50,0);
         redcirclebgd += parseFloat(`${parseInt(`${const_g2_}`)}`);
         bang3 = [3];
         eventsplashQ = `${bang3.length / (Math.max(2, 10))}`;
         button6 += `${3 / (Math.max(3, eventsplashQ.length))}`;
      runtimeX.push((String.fromCharCode(110,0) == over4 ? iconarrowrightblackW.length : over4.length));
   for (let n = 0; n < 1; n++) {
      liveendmodallogoO >>= Math.min(4, Math.abs(1));
   }
      liveendmodallogoO += yellowredcarde.size;
      tempB += `${3 ^ liveendmodallogoO}`;
   for (let f = 0; f < 2; f++) {
       let gesturej = 1;
       let handler7 = 4;
       let notificationgray6 = String.fromCharCode(99,111,108,111,110,115,95,119,95,57,52,0);
       let loadingK = String.fromCharCode(110,95,50,52,95,99,111,117,110,116,113,117,97,110,116,0);
          let directw = String.fromCharCode(120,118,105,100,105,100,99,116,95,119,95,57,56,0);
          let download9 = false;
         notificationgray6 += `${(notificationgray6 == String.fromCharCode(52,0) ? handler7 : notificationgray6.length)}`;
         directw += `${directw.length - 1}`;
         download9 = (58 <= ((download9 ? directw.length : 58) & directw.length));
         gesturej -= gesturej;
       let basketballdetailsbgV = String.fromCharCode(109,97,114,107,95,48,95,49,55,0);
       let scoreS = String.fromCharCode(102,114,101,101,102,111,114,109,95,122,95,49,54,0);
         handler7 %= Math.max((notificationgray6 == String.fromCharCode(82,0) ? gesturej : notificationgray6.length), 2);
       let exampleimageo: Array<any> = [599, 157];
      if (!notificationgray6.endsWith(`${loadingK.length}`)) {
          let roundR = false;
          let membershipA = String.fromCharCode(104,95,55,54,95,112,105,100,0);
          let predictionactiveU = String.fromCharCode(102,105,110,105,115,101,100,95,122,95,54,57,0);
          let unreadJ = 1;
         loadingK += `${loadingK.length}`;
         roundR = !membershipA.includes(`${roundR}`);
         membershipA = `${(unreadJ / (Math.max(2, (roundR ? 3 : 2))))}`;
         predictionactiveU = `${((roundR ? 1 : 4))}`;
         unreadJ &= ((roundR ? 3 : 2) | 1);
      }
         notificationgray6 += `${scoreS.length >> (Math.min(2, Math.abs(handler7)))}`;
         gesturej += handler7;
      tempB += `${(tempB == String.fromCharCode(79,0) ? tempB.length : liveendmodallogoO)}`;
   }
      iconarrowrightblackW = `${1 / (Math.max(7, yellowredcarde.size))}`;
   while (iconarrowrightblackW.length < runtimeX.length) {
      iconarrowrightblackW += "3";
      break;
   }

            if (lastTime.current !== null) {

      annerk -= parseFloat(`${3 * yellowredcarde.size}`);
       let awayplayerM: Array<any> = [700, 556];
       let blackd = String.fromCharCode(110,111,110,100,99,95,108,95,49,54,0);
          let tempt = 3.0;
          let textlayoutmanager2 = String.fromCharCode(102,95,53,54,95,98,97,99,107,119,97,114,100,115,0);
          let latnN = String.fromCharCode(105,95,49,48,48,95,118,112,100,120,0);
         blackd += `${(String.fromCharCode(84,0) == latnN ? latnN.length : blackd.length)}`;
         tempt += textlayoutmanager2.length;
         textlayoutmanager2 = `${1 + parseInt(`${tempt}`)}`;
          let sheetC: Array<any> = [454, 696];
         blackd += `${blackd.length % (Math.max(1, 4))}`;
         sheetC.push(sheetC.length);
         awayplayerM.push(blackd.length & awayplayerM.length);
         awayplayerM = [blackd.length & 1];
         blackd = `${blackd.length | 2}`;
      for (let s = 0; s < 1; s++) {
         awayplayerM = [blackd.length];
      }
      redscoreballE = liveendmodallogoO <= 2 || 2 <= awayplayerM.length;
      yellowredcarde = new Map([[`${projectr}`, projectr]]);
      tempB += `${(String.fromCharCode(122,0) == iconarrowrightblackW ? projectr : iconarrowrightblackW.length)}`;
   if ((3 ^ liveendmodallogoO) >= 5) {
      annerk += parseFloat(`${yellowredcarde.size}`);
   }
      yellowredcarde.set(tempB, tempB.length | webviewB.length);
   for (let r = 0; r < 1; r++) {
      webviewB = "3";
   }
       let videovarP: Map<any, any> = new Map([[String.fromCharCode(105,116,117,110,101,115,95,117,95,55,57,0),true ], [String.fromCharCode(119,95,48,95,102,116,118,112,110,111,100,101,0),false ]]);
       let cornerz = 5;
       let play9 = String.fromCharCode(108,97,121,101,114,95,104,95,52,0);
          let castH = String.fromCharCode(109,112,101,103,97,117,100,105,111,95,53,95,55,54,0);
          let firebasec = String.fromCharCode(101,95,57,54,95,100,105,115,97,98,108,101,0);
          let mbnativeo: Array<any> = [725, 646];
         cornerz >>= Math.min(4, Math.abs(play9.length / (Math.max(1, 6))));
         castH = `${1 | firebasec.length}`;
         firebasec = `${castH.length & 2}`;
         mbnativeo.push(castH.length ^ mbnativeo.length);
      while ((play9.length | cornerz) <= 3 || (3 | play9.length) <= 1) {
         play9 += `${cornerz}`;
         break;
      }
         videovarP.set(`${cornerz}`, cornerz - 3);
      while (!play9.includes(`${videovarP.size}`)) {
         videovarP = new Map([[`${videovarP.size}`, 2]]);
         break;
      }
      let penaltyj = 9270667 <= play9.length;
      do {
         play9 += "1";
         if (penaltyj) {
            break;
         }
      } while ((videovarP.size == 5) && penaltyj);
         cornerz *= 1;
      while (5 <= videovarP.size) {
         videovarP = new Map([[`${videovarP.size}`, 3 >> (Math.min(4, play9.length))]]);
         break;
      }
         play9 += "2";
         cornerz += videovarP.size ^ 2;
      yellowredcarde = new Map([[`${videovarP.size}`, videovarP.size | webviewB.length]]);
   for (let b = 0; b < 3; b++) {
      iconarrowrightblackW = `${liveendmodallogoO}`;
   }
   while ((liveendmodallogoO + tempB.length) < 1) {
      liveendmodallogoO %= Math.max(2, iconarrowrightblackW.length ^ parseInt(`${annerk}`));
      break;
   }
      liveendmodallogoO += runtimeX.length & liveendmodallogoO;
   if (1 > (iconarrowrightblackW.length >> (Math.min(5, Math.abs(projectr)))) || 1 > (1 >> (Math.min(3, iconarrowrightblackW.length)))) {
      iconarrowrightblackW = `${tempB.length}`;
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