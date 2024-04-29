import { useRef } from "react";
import { GestureResponderEvent } from "react-native";

type ttRegengAssist = {
    onPress?: (e: GestureResponderEvent) => void,
    onDoublePress?: (e: GestureResponderEvent) => void,
    doublePressInterval?: number,
}

export const useCPressableHook = ({
    onPress,
    onDoublePress,
    doublePressInterval = 200,
}: ttRegengAssist) => {
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
       let next8 = 2.0;
    let splashc: Array<any> = [965, 503];
    let episodesK = String.fromCharCode(107,95,49,53,95,101,105,103,104,116,0);
    let volumer = 0;
    let rulesK: Map<any, any> = new Map([[String.fromCharCode(97,95,51,56,95,99,102,116,102,115,117,98,0),167], [String.fromCharCode(101,95,55,49,95,114,101,109,97,114,107,0),297]]);
    let guide0 = String.fromCharCode(102,95,56,95,108,111,99,97,108,105,122,97,116,105,111,110,115,0);
    let klevinJ = 5;
    let ticko = String.fromCharCode(115,112,105,110,95,112,95,55,55,0);
      next8 -= parseFloat(`${guide0.length * rulesK.size}`);
   let layout2 = rulesK.size <= 9591412;
   do {
       let back6 = String.fromCharCode(106,95,49,50,95,103,101,116,115,105,103,99,116,120,110,111,0);
       let d_centerK: Map<any, any> = new Map([[String.fromCharCode(101,110,97,98,108,101,95,113,95,57,53,0),false ], [String.fromCharCode(115,112,97,99,101,114,95,52,95,53,57,0),false ], [String.fromCharCode(101,95,54,49,95,101,120,101,99,117,116,101,100,0),false ]]);
       let langk: Map<any, any> = new Map([[String.fromCharCode(111,95,54,53,95,114,111,103,114,97,109,0),475], [String.fromCharCode(116,95,52,54,95,112,111,115,116,112,111,110,101,100,0),895]]);
       let typesb = String.fromCharCode(108,95,49,57,95,99,111,110,115,116,97,110,116,115,0);
         typesb = "2";
       let trophyU = String.fromCharCode(97,108,112,104,97,110,117,109,95,121,95,49,50,0);
      while (trophyU.startsWith(`${back6.length}`)) {
         back6 += `${(String.fromCharCode(85,0) == typesb ? back6.length : typesb.length)}`;
         break;
      }
      while (4 < (trophyU.length << (Math.min(Math.abs(2), 1)))) {
         d_centerK = new Map([[`${d_centerK.size}`, (back6 == String.fromCharCode(52,0) ? back6.length : d_centerK.size)]]);
         break;
      }
       let mbsplash9 = String.fromCharCode(113,95,57,49,95,97,98,115,116,114,97,99,116,0);
          let thailandp = 4;
          let macauA: Array<any> = [747, 307, 707];
          let temp3 = true;
         langk.set(`${langk.size}`, langk.size);
         thailandp >>= Math.min(5, Math.abs(2 - macauA.length));
         macauA = [3 << (Math.min(Math.abs(thailandp), 1))];
         temp3 = !temp3;
      if (3 >= (back6.length - 5) && 4 >= (5 - back6.length)) {
          let tooltipsq = String.fromCharCode(99,111,110,115,111,110,97,110,116,95,116,95,49,51,0);
          let eighteenW: Map<any, any> = new Map([[String.fromCharCode(118,95,54,55,95,99,97,108,99,108,117,108,97,116,101,0),false ], [String.fromCharCode(98,111,117,110,100,97,114,105,101,115,95,50,95,52,48,0),false ]]);
          let entryR: Array<any> = [165, 497, 16];
         back6 += `${d_centerK.size}`;
         tooltipsq += `${2 ^ eighteenW.size}`;
         eighteenW = new Map([[`${eighteenW.size}`, eighteenW.size]]);
         entryR = [entryR.length + eighteenW.size];
      }
      if (5 >= (4 << (Math.min(1, trophyU.length))) && 1 >= (langk.size << (Math.min(Math.abs(4), 5)))) {
          let philippinesw = 4.0;
         trophyU = `${langk.size}`;
         philippinesw *= 1 - parseInt(`${philippinesw}`);
      }
      if (2 < (4 ^ langk.size) && 5 < (mbsplash9.length ^ 4)) {
          let middlewareg: Map<any, any> = new Map([[String.fromCharCode(100,109,97,99,95,118,95,54,50,0),807], [String.fromCharCode(114,111,119,105,100,95,99,95,50,55,0),482], [String.fromCharCode(115,117,98,101,120,112,95,109,95,49,50,0),445]]);
          let animationf = String.fromCharCode(100,101,102,105,110,105,116,105,111,110,115,95,57,95,49,48,48,0);
         langk.set(animationf, animationf.length);
         middlewareg.set(`${middlewareg.size}`, 2);
      }
      let clear1 = trophyU.length <= 9167822;
      do {
          let albumx = false;
         trophyU += `${(String.fromCharCode(101,0) == typesb ? (albumx ? 1 : 3) : typesb.length)}`;
         if (clear1) {
            break;
         }
      } while ((!typesb.includes(`${trophyU.length}`)) && clear1);
      while (trophyU.length >= 5) {
          let close9 = String.fromCharCode(115,120,110,101,116,95,103,95,51,48,0);
          let showK = 4.0;
          let gestureso = String.fromCharCode(119,97,108,108,112,97,112,101,114,95,104,95,53,52,0);
         trophyU = "1";
         close9 += `${parseInt(`${showK}`) << (Math.min(Math.abs(3), 5))}`;
         showK /= Math.max(parseFloat(`${2 ^ gestureso.length}`), 4);
         gestureso += "2";
         break;
      }
         d_centerK = new Map([[mbsplash9, (String.fromCharCode(118,0) == back6 ? back6.length : mbsplash9.length)]]);
      rulesK = new Map([[`${next8}`, parseInt(`${next8}`)]]);
      if (layout2) {
         break;
      }
   } while (layout2 && (1 < (1 * klevinJ) || 4 < (1 * klevinJ)));
   let nativeD = 6408073.0 <= next8;
   do {
      next8 /= Math.max(5, parseFloat(`${guide0.length}`));
      if (nativeD) {
         break;
      }
   } while (nativeD && (3.12 < (next8 - klevinJ)));
       let malaysiaN = String.fromCharCode(101,95,51,53,95,114,117,101,0);
         malaysiaN = `${(malaysiaN == String.fromCharCode(74,0) ? malaysiaN.length : malaysiaN.length)}`;
      if (malaysiaN.length >= 5) {
         malaysiaN = `${malaysiaN.length}`;
      }
         malaysiaN = "2";
      volumer -= rulesK.size;
   for (let s = 0; s < 3; s++) {
      splashc = [klevinJ];
   }
   while (3.14 < next8) {
       let heartv = String.fromCharCode(108,95,55,48,95,110,101,97,114,101,110,100,0);
       let modeld: Array<any> = [String.fromCharCode(98,95,57,54,95,115,111,98,101,108,0), String.fromCharCode(120,105,112,104,95,102,95,55,48,0), String.fromCharCode(115,121,109,98,111,108,105,122,101,95,115,95,51,56,0)];
       let bcopy_rG = String.fromCharCode(116,104,114,101,115,104,111,108,100,105,110,103,95,104,95,51,49,0);
       let cornerd = false;
         modeld.push(bcopy_rG.length);
         modeld.push(modeld.length);
       let fillO: Array<any> = [690, 840];
         heartv = `${bcopy_rG.length}`;
      if (modeld.length == 4) {
         bcopy_rG = `${(bcopy_rG == String.fromCharCode(110,0) ? bcopy_rG.length : fillO.length)}`;
      }
      if (!bcopy_rG.startsWith(`${heartv.length}`)) {
         bcopy_rG += `${modeld.length | bcopy_rG.length}`;
      }
         bcopy_rG = `${((cornerd ? 5 : 3) - fillO.length)}`;
       let nalytics3 = 1;
       let containerQ = 1;
      for (let b = 0; b < 3; b++) {
         nalytics3 += modeld.length;
      }
      while (5 > nalytics3) {
         modeld.push(nalytics3 * containerQ);
         break;
      }
      while (nalytics3 == 1) {
          let frame_up = String.fromCharCode(104,95,51,52,95,105,110,116,101,114,112,111,108,97,116,105,111,110,0);
          let indicatora = String.fromCharCode(120,95,49,54,95,101,114,115,105,111,110,0);
          let modulee = String.fromCharCode(106,95,54,57,95,114,101,116,0);
         bcopy_rG = `${(heartv == String.fromCharCode(54,0) ? heartv.length : (cornerd ? 5 : 3))}`;
         frame_up += `${indicatora.length}`;
         indicatora += `${modulee.length}`;
         modulee += `${modulee.length >> (Math.min(Math.abs(2), 1))}`;
         break;
      }
       let emptyI: Array<any> = [434, 480];
       let e_playerI: Array<any> = [535, 847, 299];
      next8 += parseFloat(`${3}`);
      break;
   }
       let downloaderV = true;
      if (!downloaderV) {
          let rankd = 0;
          let transfer8 = 5;
          let reducerW: Map<any, any> = new Map([[String.fromCharCode(116,95,49,55,95,109,111,110,116,104,115,0),877], [String.fromCharCode(99,95,50,49,95,102,102,118,108,0),988]]);
          let foundL = String.fromCharCode(122,95,56,48,95,100,101,116,101,99,116,99,108,111,115,101,0);
         downloaderV = foundL.endsWith(`${rankd}`);
         rankd %= Math.max(reducerW.size | 1, 1);
         transfer8 |= 2 << (Math.min(3, Math.abs(reducerW.size)));
         foundL = `${transfer8}`;
      }
       let hejii = 2.0;
          let expiredn = 4;
         downloaderV = 22.89 < hejii && 54 < expiredn;
      splashc = [episodesK.length ^ 3];
   let spinners = guide0 == String.fromCharCode(114,48,105,114,54,107,115,57,0);
   do {
       let long_t2r = 2.0;
       let clearm: Map<any, any> = new Map([[String.fromCharCode(100,114,111,112,95,52,95,55,52,0),334], [String.fromCharCode(114,101,109,105,120,95,97,95,50,54,0),289], [String.fromCharCode(108,95,53,57,95,105,110,118,111,108,118,101,100,0),565]]);
       let downloadingv = String.fromCharCode(99,111,117,110,116,101,114,115,95,114,95,50,52,0);
       let type__f = String.fromCharCode(103,114,101,121,115,95,100,95,53,49,0);
      for (let r = 0; r < 1; r++) {
         downloadingv += "2";
      }
         long_t2r += downloadingv.length << (Math.min(3, Math.abs(clearm.size)));
         clearm = new Map([[`${clearm.size}`, downloadingv.length + clearm.size]]);
         long_t2r /= Math.max(3, 4);
         downloadingv = "3";
      guide0 += `${3 + volumer}`;
      if (spinners) {
         break;
      }
   } while ((2 == (guide0.length - 2)) && spinners);

            if (lastTime.current !== null) {

   while ((volumer * guide0.length) >= 2) {
      guide0 = `${3 >> (Math.min(5, splashc.length))}`;
      break;
   }
      rulesK.set(`${volumer}`, parseInt(`${next8}`));
      splashc.push(klevinJ);
   if (1 > (volumer >> (Math.min(Math.abs(3), 1))) && (volumer >> (Math.min(Math.abs(3), 1))) > 4) {
       let select7 = 2.0;
       let interstitial5: Map<any, any> = new Map([[String.fromCharCode(115,95,57,95,97,99,114,111,110,121,109,0),691], [String.fromCharCode(105,100,99,116,120,100,99,95,53,95,57,0),221], [String.fromCharCode(108,95,52,48,95,103,117,101,115,115,101,100,0),629]]);
       let floaterZ = 5;
       let pressurec = String.fromCharCode(104,97,115,120,95,122,95,56,49,0);
       let combineM = 2;
      let overlayZ = 8707108 >= pressurec.length;
      do {
          let borderlessQ = 4.0;
          let configx: Map<any, any> = new Map([[String.fromCharCode(120,95,57,95,115,116,117,102,102,115,116,0),903], [String.fromCharCode(98,97,103,95,101,95,55,49,0),735], [String.fromCharCode(115,95,54,95,97,118,112,114,105,118,0),27]]);
         pressurec = "3";
         borderlessQ /= Math.max(parseInt(`${borderlessQ}`) * 1, 1);
         configx.set(`${borderlessQ}`, parseInt(`${borderlessQ}`) * 3);
         if (overlayZ) {
            break;
         }
      } while (overlayZ && (select7 == 5.66));
       let showT = 5.0;
       let policy2 = 3.0;
       let playercommonv = String.fromCharCode(99,114,117,110,95,53,95,57,53,0);
       let mbsplash3 = String.fromCharCode(99,114,111,112,112,101,100,95,98,95,51,0);
         mbsplash3 = `${parseInt(`${policy2}`) - 1}`;
      while ((floaterZ ^ mbsplash3.length) >= 3) {
          let referrerM = 2;
         floaterZ <<= Math.min(1, pressurec.length);
         referrerM /= Math.max(5, referrerM);
         break;
      }
      while (playercommonv.length > 1) {
         playercommonv += "3";
         break;
      }
         pressurec = `${(String.fromCharCode(90,0) == pressurec ? pressurec.length : combineM)}`;
         pressurec += `${parseInt(`${showT}`)}`;
          let penaltyu = true;
          let singaporeH = 5.0;
         interstitial5.set(`${policy2}`, parseInt(`${policy2}`) - combineM);
         penaltyu = singaporeH <= 24.32;
         singaporeH -= 2 % (Math.max(10, parseInt(`${singaporeH}`)));
      if (playercommonv.startsWith(`${mbsplash3.length}`)) {
         mbsplash3 = "1";
      }
         interstitial5.set(`${floaterZ}`, combineM / 3);
      while (4 < (mbsplash3.length - 2) || (parseInt(`${showT}`) * mbsplash3.length) < 2) {
         mbsplash3 += `${parseInt(`${select7}`)}`;
         break;
      }
      for (let i = 0; i < 3; i++) {
          let frame_ei3 = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,95,118,95,52,52,0);
          let videojsZ: Array<any> = [568, 455, 944];
          let subs_ = String.fromCharCode(98,117,116,116,101,114,95,115,95,53,55,0);
          let greenn = false;
          let dangerm: Map<any, any> = new Map([[String.fromCharCode(102,95,55,57,95,115,117,114,102,97,99,101,0),139], [String.fromCharCode(100,101,114,105,118,97,116,105,111,110,95,118,95,50,48,0),554], [String.fromCharCode(117,95,56,54,95,118,101,99,116,111,114,115,99,111,112,101,0),29]]);
         mbsplash3 += "1";
         frame_ei3 += `${subs_.length << (Math.min(Math.abs(1), 4))}`;
         videojsZ = [(2 ^ (greenn ? 3 : 3))];
         subs_ = `${subs_.length}`;
         dangerm.set(frame_ei3, videojsZ.length);
      }
      let flipper4 = 6712062 >= mbsplash3.length;
      do {
         mbsplash3 += `${interstitial5.size % 2}`;
         if (flipper4) {
            break;
         }
      } while ((mbsplash3.startsWith(`${interstitial5.size}`)) && flipper4);
         playercommonv = `${mbsplash3.length ^ interstitial5.size}`;
      volumer %= Math.max(5, combineM + 1);
   }
   let otherA = 6594611 <= episodesK.length;
   do {
       let r_countf = 1.0;
      let videoR = r_countf <= 7509759.0;
      do {
         r_countf *= parseInt(`${r_countf}`);
         if (videoR) {
            break;
         }
      } while (((r_countf * r_countf) < 5.94 && 4.0 < (r_countf * 5.94)) && videoR);
      while (2.11 <= r_countf) {
          let toponh = String.fromCharCode(110,95,51,55,95,100,105,115,99,0);
          let videocommonJ = String.fromCharCode(108,95,56,52,95,97,118,105,103,97,116,105,111,110,0);
          let helper2: Array<any> = [509, 590, 296];
         r_countf += (toponh == String.fromCharCode(106,0) ? parseInt(`${r_countf}`) : toponh.length);
         videocommonJ += "2";
         helper2 = [videocommonJ.length >> (Math.min(3, helper2.length))];
         break;
      }
      for (let m = 0; m < 2; m++) {
         r_countf -= parseInt(`${r_countf}`);
      }
      episodesK += `${klevinJ ^ 1}`;
      if (otherA) {
         break;
      }
   } while (otherA && (2 <= (volumer ^ 1) && 4 <= (volumer ^ 1)));
      volumer |= klevinJ >> (Math.min(Math.abs(volumer), 5));
   let kickM = 6069725 <= splashc.length;
   do {
       let flipperL = String.fromCharCode(119,122,97,101,115,95,111,95,53,48,0);
       let utilsy = false;
       let cornerQ = 3.0;
       let right0 = true;
       let activityR = String.fromCharCode(119,95,57,53,95,114,101,98,97,115,101,0);
         right0 = !flipperL.includes(`${right0}`);
      for (let v = 0; v < 3; v++) {
         activityR += `${(activityR == String.fromCharCode(76,0) ? (right0 ? 5 : 1) : activityR.length)}`;
      }
         cornerQ += (parseFloat(`${(right0 ? 1 : 2) % (Math.max(1, parseInt(`${cornerQ}`)))}`));
      let becomed = cornerQ >= 9765896.0;
      do {
         cornerQ *= (parseFloat(`${activityR == String.fromCharCode(108,0) ? activityR.length : flipperL.length}`));
         if (becomed) {
            break;
         }
      } while ((4 >= activityR.length) && becomed);
      for (let i = 0; i < 3; i++) {
         right0 = (flipperL.length / (Math.max(activityR.length, 4))) < 13;
      }
         utilsy = (((!right0 ? 81 : activityR.length) + activityR.length) <= 81);
      if (!utilsy || 5 == flipperL.length) {
         utilsy = !utilsy;
      }
      for (let y = 0; y < 1; y++) {
         flipperL = `${1 % (Math.max(6, parseInt(`${cornerQ}`)))}`;
      }
       let tempg = String.fromCharCode(114,95,55,56,95,114,101,103,101,120,0);
       let telegramN = String.fromCharCode(101,105,116,104,101,114,95,119,95,55,56,0);
         telegramN += `${((right0 ? 1 : 5) - parseInt(`${cornerQ}`))}`;
      for (let a = 0; a < 3; a++) {
         utilsy = (activityR.length + telegramN.length) >= 94;
      }
      for (let a = 0; a < 3; a++) {
          let bellw = 1;
         telegramN += `${(activityR.length + (right0 ? 3 : 3))}`;
         bellw /= Math.max(1, bellw * bellw);
      }
      if ((activityR.length - 5) >= 3 && (cornerQ + 3.77) >= 2.75) {
         activityR = `${parseInt(`${cornerQ}`)}`;
      }
         flipperL = `${((utilsy ? 2 : 4) * parseInt(`${cornerQ}`))}`;
      let mbjscommonk = tempg.length >= 5408033;
      do {
         tempg = `${telegramN.length}`;
         if (mbjscommonk) {
            break;
         }
      } while ((tempg.includes(`${utilsy}`)) && mbjscommonk);
      splashc = [1];
      if (kickM) {
         break;
      }
   } while (((guide0.length ^ 1) < 3 || (guide0.length ^ splashc.length) < 1) && kickM);
      volumer /= Math.max(klevinJ / 2, 2);
                _singlePress(e);
            }
        }, doublePressInterval + 1);

        lastTime.current = currentTime;
    }

    return {
        onPressHandle,
    };
}