import { useRef } from "react";
import { GestureResponderEvent } from "react-native";

type yys_Main = {
    onPress?: (e: GestureResponderEvent) => void,
    onDoublePress?: (e: GestureResponderEvent) => void,
    doublePressInterval?: number,
}

export const useCPressableHook = ({
    onPress,
    onDoublePress,
    doublePressInterval = 200,
}: yys_Main) => {
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
       let countryd = 0.0;
    let calendarb = 4.0;
    let libreanimated0 = String.fromCharCode(97,108,116,101,114,95,53,95,54,57,0);
    let foreground0: Array<any> = [300, 969, 940];
    let shoot9: Array<any> = [String.fromCharCode(101,95,52,54,95,115,116,97,109,112,115,0), String.fromCharCode(104,95,51,49,95,119,101,105,103,104,116,120,0)];
    let x_titleI = String.fromCharCode(114,95,54,51,95,104,119,102,114,97,109,101,0);
    let modalQ = 3;
    let temperature3 = 4;
   while (1.97 >= (countryd - modalQ)) {
      countryd /= Math.max(parseFloat(`${modalQ}`), 3);
      break;
   }
   for (let a = 0; a < 1; a++) {
      libreanimated0 = `${1 - foreground0.length}`;
   }
   while ((5.57 + calendarb) >= 3.4 && (5.57 + calendarb) >= 1.44) {
      modalQ *= parseInt(`${countryd}`);
      break;
   }
      libreanimated0 += `${libreanimated0.length & 3}`;
      x_titleI = `${x_titleI.length}`;
      modalQ >>= Math.min(5, Math.abs(parseInt(`${calendarb}`)));
      x_titleI = `${shoot9.length}`;
      foreground0.push(1);
   while (5 > (libreanimated0.length | modalQ) || (modalQ | 5) > 5) {
       let libsentryt: Array<any> = [926, 758];
      if ((libsentryt.length >> (Math.min(1, libsentryt.length))) == 4) {
          let actionsW: Array<any> = [String.fromCharCode(100,97,116,97,108,95,111,95,50,53,0), String.fromCharCode(105,95,54,57,95,100,101,99,111,100,101,114,115,0)];
         libsentryt = [1 % (Math.max(8, libsentryt.length))];
         actionsW = [3 | actionsW.length];
      }
      while ((libsentryt.length % 5) < 2 || (libsentryt.length % (Math.max(5, 4))) < 4) {
          let materiala = 3.0;
         libsentryt.push(2);
         materiala /= Math.max(parseFloat(`${parseInt(`${materiala}`) + 1}`), 3);
         break;
      }
      let chart2 = 6962474 <= libsentryt.length;
      do {
          let hooko = 2.0;
          let helperA = 4;
          let logouth: Array<any> = [String.fromCharCode(112,95,50,49,95,115,104,111,114,116,116,101,114,109,0), String.fromCharCode(97,99,116,105,118,101,95,121,95,56,57,0), String.fromCharCode(113,95,51,52,95,100,111,118,101,0)];
          let short_2zX: Map<any, any> = new Map([[String.fromCharCode(104,95,50,53,95,111,112,101,110,115,108,101,115,0),884], [String.fromCharCode(112,114,111,100,117,99,101,114,95,121,95,54,50,0),91], [String.fromCharCode(118,95,54,57,95,100,97,116,101,0),534]]);
         libsentryt = [parseInt(`${hooko}`) * libsentryt.length];
         hooko += 3;
         helperA ^= short_2zX.size * helperA;
         logouth = [logouth.length];
         short_2zX = new Map([[`${short_2zX.size}`, logouth.length]]);
         if (chart2) {
            break;
         }
      } while ((libsentryt.length > 2) && chart2);
      modalQ *= modalQ;
      break;
   }

            if (lastTime.current !== null) {

      x_titleI += "2";
   while ((countryd + 4.1) < 5.74) {
      shoot9.push(parseInt(`${calendarb}`) << (Math.min(2, Math.abs(3))));
      break;
   }
   let eventc = calendarb >= 9406564.0;
   do {
       let leftj: Map<any, any> = new Map([[String.fromCharCode(104,101,97,100,105,110,103,95,108,95,51,0),true ], [String.fromCharCode(113,95,49,57,95,99,108,101,97,114,0),false ]]);
       let manifestn: Array<any> = [227, 655, 833];
       let darkx: Array<any> = [186, 64, 248];
      let directE = manifestn.length >= 8322121;
      do {
         manifestn.push(3 + leftj.size);
         if (directE) {
            break;
         }
      } while ((manifestn.length > 1) && directE);
         manifestn.push(darkx.length | leftj.size);
      if (manifestn.length > 1) {
          let libcxxcomponentsG = 4.0;
          let loadingB = 3;
         manifestn.push(2);
         libcxxcomponentsG *= loadingB + parseInt(`${libcxxcomponentsG}`);
         loadingB /= Math.max(loadingB, 4);
      }
      while ((4 & leftj.size) == 3) {
         darkx = [2];
         break;
      }
       let libjsi4: Array<any> = [448, 51, 814];
       let smalld: Array<any> = [String.fromCharCode(104,109,97,99,95,119,95,52,55,0), String.fromCharCode(99,95,48,95,101,98,109,108,0), String.fromCharCode(102,95,56,48,95,105,110,116,114,97,112,114,101,100,0)];
      for (let p = 0; p < 1; p++) {
          let pressureS = 3;
          let o_positionO = 0;
          let flipperB = true;
          let networkE = 5;
         smalld = [o_positionO >> (Math.min(Math.abs(1), 3))];
         pressureS += 2;
         o_positionO ^= networkE;
         flipperB = 7 < networkE;
      }
      while (manifestn.length <= leftj.size) {
         manifestn = [darkx.length ^ manifestn.length];
         break;
      }
         libjsi4 = [2];
          let overlayB = String.fromCharCode(105,110,102,111,108,100,101,114,95,102,95,54,48,0);
         leftj = new Map([[`${leftj.size}`, manifestn.length]]);
         overlayB += `${(overlayB == String.fromCharCode(90,0) ? overlayB.length : overlayB.length)}`;
      calendarb += parseInt(`${countryd}`);
      if (eventc) {
         break;
      }
   } while ((countryd == calendarb) && eventc);
   let turny = modalQ <= 5894162;
   do {
      modalQ >>= Math.min(Math.abs((String.fromCharCode(49,0) == libreanimated0 ? parseInt(`${countryd}`) : libreanimated0.length)), 1);
      if (turny) {
         break;
      }
   } while (turny && ((1 >> (Math.min(1, Math.abs(modalQ)))) >= 3));
   if (countryd <= calendarb) {
      countryd *= parseFloat(`${shoot9.length}`);
   }
   for (let u = 0; u < 2; u++) {
      modalQ ^= parseInt(`${calendarb}`);
   }
   if (2 <= (4 >> (Math.min(5, shoot9.length))) || (temperature3 >> (Math.min(Math.abs(4), 4))) <= 2) {
       let ewarded7 = String.fromCharCode(100,105,114,97,99,116,97,98,95,122,95,54,57,0);
       let smallx: Map<any, any> = new Map([[String.fromCharCode(101,118,97,108,117,97,116,111,114,95,51,95,54,57,0),String.fromCharCode(114,101,115,111,108,118,101,95,53,95,53,55,0)], [String.fromCharCode(97,99,99,101,115,115,105,110,103,95,49,95,52,52,0),String.fromCharCode(107,101,121,119,111,114,100,0)]]);
       let shrinkS = 2.0;
       let teamI: Array<any> = [891, 326];
          let customp: Array<any> = [779, 422];
          let renews = true;
          let hongkongC = String.fromCharCode(101,95,57,48,95,97,117,100,0);
         smallx = new Map([[`${smallx.size}`, 2]]);
         customp.push(((renews ? 2 : 1) % 3));
         renews = (((renews ? customp.length : 32) >> (Math.min(customp.length, 4))) <= 32);
         hongkongC += `${customp.length}`;
       let moonv: Array<any> = [667, 271, 420];
      let starf = teamI.length >= 7194394;
      do {
          let mbnativeadvancedR = 5;
          let termsO: Array<any> = [186, 229, 991];
         teamI.push(ewarded7.length);
         mbnativeadvancedR %= Math.max(3, termsO.length);
         termsO = [mbnativeadvancedR ^ 1];
         if (starf) {
            break;
         }
      } while (starf && (5 <= (teamI.length & moonv.length)));
         smallx = new Map([[`${smallx.size}`, 2 * moonv.length]]);
          let username_: Map<any, any> = new Map([[String.fromCharCode(98,114,105,100,103,101,97,98,108,101,0),766], [String.fromCharCode(120,95,51,52,95,109,98,101,100,0),390]]);
          let splashT = 5;
         teamI.push(2);
         username_ = new Map([[`${username_.size}`, 3]]);
         splashT >>= Math.min(1, Math.abs(splashT));
       let googleV = 3.0;
         shrinkS += parseFloat(`${1}`);
      let reducerg = 7930882 <= moonv.length;
      do {
         moonv = [parseInt(`${shrinkS}`)];
         if (reducerg) {
            break;
         }
      } while (reducerg && ((smallx.size ^ moonv.length) <= 3));
      let trophyd = teamI.length >= 7182172;
      do {
         teamI.push((String.fromCharCode(82,0) == ewarded7 ? ewarded7.length : moonv.length));
         if (trophyd) {
            break;
         }
      } while ((teamI.length == 3) && trophyd);
          let analytics8 = String.fromCharCode(103,95,52,95,110,101,103,97,116,101,100,0);
          let castingD = false;
         smallx.set(ewarded7, 2);
         analytics8 = `${3 - analytics8.length}`;
         castingD = !castingD;
      let pangleR = moonv.length >= 8076841;
      do {
          let playercommonr = 3.0;
          let overlayg = String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,0);
          let libsentryN: Array<any> = [622, 669, 678];
          let buildC: Map<any, any> = new Map([[String.fromCharCode(118,95,56,49,95,109,117,108,97,100,100,0),String.fromCharCode(110,95,57,55,95,97,108,112,104,97,98,101,116,115,0)], [String.fromCharCode(98,97,99,107,105,110,103,95,57,95,52,48,0),String.fromCharCode(112,115,115,104,95,55,95,49,53,0)], [String.fromCharCode(102,114,109,97,95,103,95,51,48,0),String.fromCharCode(99,95,53,50,95,98,97,103,0)]]);
          let carousel0 = String.fromCharCode(98,105,103,100,105,97,95,49,95,49,0);
         moonv.push(parseInt(`${shrinkS}`) % (Math.max(moonv.length, 10)));
         playercommonr *= libsentryN.length * 1;
         overlayg = `${parseInt(`${playercommonr}`)}`;
         libsentryN.push(libsentryN.length);
         buildC.set(`${playercommonr}`, overlayg.length);
         carousel0 += `${1 << (Math.min(3, libsentryN.length))}`;
         if (pangleR) {
            break;
         }
      } while (((moonv.length + parseInt(`${shrinkS}`)) > 1) && pangleR);
      let whatsappF = 6041901 <= smallx.size;
      do {
          let feedbackf = String.fromCharCode(103,95,51,48,95,97,108,105,103,110,101,100,0);
          let questl = false;
          let scrollviewx = 4.0;
          let resultK = 3.0;
          let lang_ = 3.0;
         smallx = new Map([[`${smallx.size}`, 2]]);
         feedbackf = `${parseInt(`${lang_}`) | parseInt(`${resultK}`)}`;
         questl = resultK > 71.8;
         scrollviewx += parseFloat(`${feedbackf.length}`);
         lang_ += parseFloat(`${parseInt(`${scrollviewx}`) / 3}`);
         if (whatsappF) {
            break;
         }
      } while (whatsappF && ((parseInt(`${googleV}`) / (Math.max(1, smallx.size))) >= 4));
      shoot9.push(2);
   }
       let activeh = 4.0;
         activeh *= parseFloat(`${parseInt(`${activeh}`) | 2}`);
         activeh /= Math.max(parseFloat(`${parseInt(`${activeh}`) & 2}`), 1);
      if (activeh == activeh) {
         activeh += parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${activeh}`)), 3))}`);
      }
      foreground0 = [1];
      shoot9.push(2);
                _singlePress(e);
            }
        }, doublePressInterval + 1);

        lastTime.current = currentTime;
    }

    return {
        onPressHandle,
    };
}