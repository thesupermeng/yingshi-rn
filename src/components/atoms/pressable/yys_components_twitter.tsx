import { useRef } from "react";
import { GestureResponderEvent } from "react-native";

type yysShoot = {
    onPress?: (e: GestureResponderEvent) => void,
    onDoublePress?: (e: GestureResponderEvent) => void,
    doublePressInterval?: number,
}

export const useCPressableHook = ({
    onPress,
    onDoublePress,
    doublePressInterval = 200,
}: yysShoot) => {
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
       let watchW = 0.0;
    let networkl = 1.0;
    let dragclose2: Array<any> = [String.fromCharCode(102,105,108,116,101,114,103,114,97,112,104,95,118,95,54,52,0), String.fromCharCode(104,95,52,51,95,115,99,114,111,108,108,97,98,108,101,0), String.fromCharCode(105,95,54,53,95,120,110,97,115,109,0)];
    let dcopy_ddO = String.fromCharCode(98,95,50,55,95,110,111,102,105,116,105,99,97,116,105,111,110,0);
    let rncorei = 3.0;
    let temperatureW = String.fromCharCode(117,112,100,97,116,101,95,107,95,53,48,0);
    let penaltyshootj = true;
    let homeplayer9 = false;
    let clubJ = 1.0;
    let embedT = 1.0;
   for (let c = 0; c < 1; c++) {
      networkl += parseFloat(`${3 & parseInt(`${watchW}`)}`);
   }
       let backR = String.fromCharCode(103,95,49,53,95,114,101,112,108,97,99,101,115,0);
      for (let i = 0; i < 2; i++) {
         backR += "3";
      }
      let materialU = 5551091 <= backR.length;
      do {
         backR = `${backR.length >> (Math.min(backR.length, 3))}`;
         if (materialU) {
            break;
         }
      } while ((!backR.startsWith(`${backR.length}`)) && materialU);
      let themem = String.fromCharCode(54,55,112,107,0) == backR;
      do {
          let suggestionp = 1.0;
          let clubf = 0.0;
         backR += "1";
         suggestionp -= 2 - parseInt(`${suggestionp}`);
         clubf *= parseInt(`${suggestionp}`) << (Math.min(Math.abs(parseInt(`${clubf}`)), 4));
         if (themem) {
            break;
         }
      } while (themem && (backR == backR));
      dragclose2.push((temperatureW == String.fromCharCode(49,0) ? temperatureW.length : (penaltyshootj ? 2 : 1)));
      dragclose2 = [2 * parseInt(`${watchW}`)];
   let volumeB = watchW <= 5615799.0;
   do {
      watchW -= parseInt(`${watchW}`) / 2;
      if (volumeB) {
         break;
      }
   } while (volumeB && (5.98 == (watchW * 5.23)));
   if ((1 & dragclose2.length) <= 5 || penaltyshootj) {
       let runtimeschedulerN = 3;
       let r_imagei: Map<any, any> = new Map([[String.fromCharCode(109,111,100,105,102,105,101,100,95,120,95,52,57,0),String.fromCharCode(98,110,100,101,99,95,102,95,57,55,0)], [String.fromCharCode(97,108,103,111,114,105,116,104,109,115,95,53,95,53,51,0),String.fromCharCode(110,95,49,56,95,99,111,115,105,0)], [String.fromCharCode(99,111,110,115,116,114,117,99,116,95,108,95,57,50,0),String.fromCharCode(112,114,101,99,104,101,99,107,111,117,116,95,107,95,49,55,0)]]);
         r_imagei = new Map([[`${r_imagei.size}`, 3 >> (Math.min(5, Math.abs(r_imagei.size)))]]);
         r_imagei = new Map([[`${r_imagei.size}`, 1]]);
      let libavdevicen = runtimeschedulerN <= 5484630;
      do {
         runtimeschedulerN >>= Math.min(2, Math.abs(runtimeschedulerN));
         if (libavdevicen) {
            break;
         }
      } while ((Array.from(r_imagei.values()).includes(runtimeschedulerN)) && libavdevicen);
      let encryptH = 6384734 <= runtimeschedulerN;
      do {
          let inviteZ: Array<any> = [834, 8, 408];
          let shirtp = true;
          let floating2 = 3;
          let iconschedule2: Map<any, any> = new Map([[String.fromCharCode(98,121,112,97,115,115,105,110,103,95,120,95,52,57,0),725], [String.fromCharCode(97,116,97,98,97,115,101,95,122,95,52,56,0),221]]);
          let codeF = String.fromCharCode(105,115,112,108,97,121,95,104,95,55,55,0);
         runtimeschedulerN &= floating2 + 1;
         inviteZ = [((shirtp ? 4 : 2) >> (Math.min(Math.abs(1), 5)))];
         shirtp = 87 < iconschedule2.size && 87 < inviteZ.length;
         floating2 %= Math.max(4, (2 & (shirtp ? 2 : 2)));
         iconschedule2 = new Map([[`${inviteZ.length}`, inviteZ.length]]);
         codeF = `${((shirtp ? 1 : 2) << (Math.min(Math.abs(1), 3)))}`;
         if (encryptH) {
            break;
         }
      } while ((1 > (r_imagei.size | 5) && (5 | runtimeschedulerN) > 4) && encryptH);
         runtimeschedulerN += runtimeschedulerN & 3;
         r_imagei = new Map([[`${r_imagei.size}`, 2 >> (Math.min(4, Math.abs(runtimeschedulerN)))]]);
      penaltyshootj = 42.75 < rncorei;
   }
      networkl *= parseFloat(`${temperatureW.length}`);
      penaltyshootj = 82.37 == networkl || 82.37 == rncorei;
   let onewinterstitialf = 6619566.0 >= watchW;
   do {
      watchW += temperatureW.length;
      if (onewinterstitialf) {
         break;
      }
   } while (onewinterstitialf && (rncorei == 2.58));

            if (lastTime.current !== null) {

       let nativeexi = String.fromCharCode(100,95,51,49,95,101,116,104,101,114,115,99,97,110,0);
       let expiredp = 3.0;
       let turnY = 2.0;
       let policyP = String.fromCharCode(99,111,114,101,105,109,97,103,101,95,103,95,53,49,0);
      while (nativeexi.length <= 2) {
         nativeexi += `${parseInt(`${turnY}`) % 3}`;
         break;
      }
      penaltyshootj = 28 > dragclose2.length;
       let shielddoneD = String.fromCharCode(100,95,51,53,95,107,105,116,116,121,0);
      let defaultlogo6 = shielddoneD.length >= 8103094;
      do {
          let frame_qJ = String.fromCharCode(115,117,98,109,111,100,101,108,95,97,95,53,0);
         shielddoneD += `${shielddoneD.length - 3}`;
         frame_qJ = `${frame_qJ.length % 2}`;
         if (defaultlogo6) {
            break;
         }
      } while ((4 > shielddoneD.length) && defaultlogo6);
      let mailQ = String.fromCharCode(55,108,115,121,120,0) == shielddoneD;
      do {
         shielddoneD = `${shielddoneD.length}`;
         if (mailQ) {
            break;
         }
      } while ((1 >= shielddoneD.length) && mailQ);
         shielddoneD = `${1 & shielddoneD.length}`;
      rncorei /= Math.max(parseInt(`${watchW}`) | dragclose2.length, 2);
   let inouttargetredz = dragclose2.length <= 5739977;
   do {
       let bgvipsportG = String.fromCharCode(99,95,49,51,95,115,115,101,100,105,102,102,0);
       let typingloadingy = String.fromCharCode(108,111,119,95,119,95,53,49,0);
      if (!typingloadingy.includes(`${bgvipsportG.length}`)) {
          let orangeclockx = String.fromCharCode(111,110,97,118,99,100,97,116,97,95,107,95,57,0);
          let greyarrowupv = false;
         typingloadingy = "2";
         orangeclockx += `${((greyarrowupv ? 2 : 2))}`;
         greyarrowupv = !greyarrowupv;
      }
         typingloadingy += `${typingloadingy.length}`;
      for (let k = 0; k < 1; k++) {
         typingloadingy = `${bgvipsportG.length}`;
      }
         typingloadingy = `${(String.fromCharCode(74,0) == bgvipsportG ? typingloadingy.length : bgvipsportG.length)}`;
      for (let j = 0; j < 2; j++) {
         typingloadingy += "2";
      }
      for (let z = 0; z < 2; z++) {
         typingloadingy = "3";
      }
      dragclose2 = [((penaltyshootj ? 5 : 4))];
      if (inouttargetredz) {
         break;
      }
   } while (((rncorei + dragclose2.length) > 2.3) && inouttargetredz);
   if (!dcopy_ddO.includes(`${rncorei}`)) {
      rncorei += 1 - dragclose2.length;
   }
       let private_8x = 1;
         private_8x >>= Math.min(3, Math.abs(private_8x));
      let indicator5 = 5359633 <= private_8x;
      do {
         private_8x <<= Math.min(Math.abs(private_8x), 5);
         if (indicator5) {
            break;
         }
      } while (indicator5 && ((private_8x / 4) == 4));
       let libnms9: Array<any> = [938, 234, 793];
       let matchinactivec: Array<any> = [155, 147, 132];
      temperatureW += `${parseInt(`${rncorei}`)}`;
   if (2 <= temperatureW.length) {
      rncorei += dragclose2.length;
   }
   if (dcopy_ddO.length < 2 || 2 < temperatureW.length) {
      temperatureW = `${(dragclose2.length / (Math.max(7, (penaltyshootj ? 3 : 5))))}`;
   }
      dragclose2.push(parseInt(`${networkl}`) ^ 2);
                _singlePress(e);
            }
        }, doublePressInterval + 1);

        lastTime.current = currentTime;
    }

    return {
        onPressHandle,
    };
}