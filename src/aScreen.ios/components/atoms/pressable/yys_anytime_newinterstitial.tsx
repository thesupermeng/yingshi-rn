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
       let malaysiaW = true;
    let gemfilee: Map<any, any> = new Map([[String.fromCharCode(108,105,98,114,97,114,121,95,121,95,49,53,0),true ], [String.fromCharCode(109,99,111,109,112,97,110,100,95,100,95,49,51,0),true ]]);
    let placeholderd = String.fromCharCode(112,95,57,48,95,119,114,105,116,101,116,114,117,110,99,0);
    let libflipperM = String.fromCharCode(98,111,117,110,100,101,100,95,55,95,55,48,0);
    let mbjscommond: Array<any> = [481, 329];
    let less0 = String.fromCharCode(100,108,105,100,120,95,111,95,54,57,0);
    let castingA: Map<any, any> = new Map([[String.fromCharCode(105,95,55,54,95,97,108,108,101,116,0),22], [String.fromCharCode(99,111,110,115,116,114,97,105,110,116,95,57,95,56,0),521], [String.fromCharCode(113,95,54,54,95,109,97,108,108,111,99,0),200]]);
    let lightk = 0.0;
    let logoU: Array<any> = [252, 332];
    let plusB = String.fromCharCode(115,95,56,52,95,103,108,105,116,99,104,0);
    let cricket6 = String.fromCharCode(111,112,101,110,115,115,108,118,95,56,95,49,56,0);
    let orangeV = String.fromCharCode(119,95,53,49,95,119,105,110,116,104,114,101,97,100,0);
    let y_countN = String.fromCharCode(114,111,108,101,95,122,95,54,0);
    let networkH = String.fromCharCode(111,119,110,108,111,97,100,95,117,95,51,53,0);
    let h_position3 = String.fromCharCode(113,95,57,50,95,105,109,112,111,114,116,0);
   while (cricket6.startsWith(`${castingA.size}`)) {
       let giftZ = 0.0;
       let imagemanager8 = String.fromCharCode(112,95,57,48,95,100,105,121,102,112,0);
       let leaguej = true;
       let minivodI: Array<any> = [String.fromCharCode(117,110,100,101,102,105,110,101,100,95,114,95,54,54,0), String.fromCharCode(101,102,102,101,99,116,115,95,101,95,53,48,0), String.fromCharCode(121,95,49,55,95,115,112,97,99,105,110,103,115,0)];
       let megaphonek: Map<any, any> = new Map([[String.fromCharCode(120,95,51,95,119,97,108,108,0),694], [String.fromCharCode(105,115,116,114,101,97,109,119,114,97,112,112,101,114,95,55,95,56,53,0),203]]);
         megaphonek = new Map([[`${leaguej}`, 3 % (Math.max(7, parseInt(`${giftZ}`)))]]);
      if (imagemanager8.includes(`${leaguej}`)) {
         leaguej = imagemanager8.length == 10;
      }
      for (let m = 0; m < 1; m++) {
          let circled = String.fromCharCode(100,95,57,48,95,108,105,118,101,0);
          let sliderA = 4.0;
          let downloader4 = false;
          let chat3 = String.fromCharCode(101,95,49,53,95,108,97,116,101,0);
          let librrca = 1.0;
         leaguej = sliderA >= parseFloat(`${minivodI.length}`);
         circled = `${circled.length}`;
         sliderA += parseFloat(`${parseInt(`${librrca}`) << (Math.min(3, Math.abs(3)))}`);
         downloader4 = chat3 == String.fromCharCode(106,0);
         chat3 += "2";
         librrca /= Math.max(3, (parseFloat(`${(downloader4 ? 1 : 1) | circled.length}`)));
      }
      let filedV = 7185258 >= minivodI.length;
      do {
         minivodI.push(2 >> (Math.min(Math.abs(parseInt(`${giftZ}`)), 1)));
         if (filedV) {
            break;
         }
      } while (((imagemanager8.length * 2) < 2) && filedV);
      for (let u = 0; u < 3; u++) {
         leaguej = megaphonek.size < 35;
      }
          let soundt = false;
          let settingsj = 3;
          let tooltipsG: Map<any, any> = new Map([[String.fromCharCode(106,95,56,53,95,111,119,110,115,0),428], [String.fromCharCode(102,95,53,48,95,100,101,115,107,116,111,112,0),297]]);
         leaguej = 90.39 > giftZ;
         soundt = null == tooltipsG.get(`${settingsj}`);
         settingsj &= tooltipsG.size ^ 2;
         megaphonek = new Map([[`${minivodI.length}`, 1]]);
      let gpayu = megaphonek.size <= 7678969;
      do {
          let xcopy_05: Map<any, any> = new Map([[String.fromCharCode(109,99,108,109,115,95,108,95,55,52,0),935], [String.fromCharCode(119,95,52,52,95,99,108,111,110,101,0),909]]);
          let znewinterstitialp = String.fromCharCode(112,101,114,115,112,95,118,95,51,57,0);
          let selectedV = true;
         megaphonek.set(imagemanager8, 2);
         xcopy_05 = new Map([[`${xcopy_05.size}`, xcopy_05.size]]);
         znewinterstitialp = `${znewinterstitialp.length}`;
         selectedV = znewinterstitialp.length >= 61 && !selectedV;
         if (gpayu) {
            break;
         }
      } while ((!leaguej) && gpayu);
          let tumbnaila: Array<any> = [299, 809];
         minivodI.push(((leaguej ? 2 : 2) / 3));
         tumbnaila = [tumbnaila.length % 2];
      if (!leaguej) {
         leaguej = minivodI.includes(leaguej);
      }
          let plash0 = false;
          let shareU = 3.0;
         megaphonek.set(imagemanager8, 3 * imagemanager8.length);
         plash0 = shareU >= 58.17 && 58.17 >= shareU;
      for (let j = 0; j < 3; j++) {
         minivodI = [minivodI.length];
      }
          let assistr = 0.0;
          let scoreX = 5.0;
         giftZ /= Math.max(parseFloat(`${megaphonek.size / (Math.max(1, 1))}`), 4);
         assistr += parseFloat(`${parseInt(`${scoreX}`)}`);
         scoreX -= parseFloat(`${parseInt(`${assistr}`)}`);
         megaphonek = new Map([[`${minivodI.length}`, ((leaguej ? 5 : 4) * 3)]]);
      while ((megaphonek.size * 1) <= 2) {
         minivodI.push(minivodI.length);
         break;
      }
      castingA = new Map([[`${gemfilee.size}`, 2]]);
      break;
   }
      cricket6 += `${(plusB == String.fromCharCode(67,0) ? plusB.length : libflipperM.length)}`;
   if (cricket6.endsWith(placeholderd)) {
      cricket6 = `${(libflipperM == String.fromCharCode(75,0) ? libflipperM.length : less0.length)}`;
   }
       let mail6 = 5.0;
       let mbbanneru = String.fromCharCode(119,95,55,53,95,112,108,97,116,102,111,114,109,0);
      let basketballk = 5312199.0 <= mail6;
      do {
         mail6 -= mbbanneru.length;
         if (basketballk) {
            break;
         }
      } while (basketballk && (4 == (parseInt(`${mail6}`) / (Math.max(mbbanneru.length, 10)))));
      while (2.16 > mail6) {
          let tempB = 5;
          let singleC = String.fromCharCode(99,111,110,116,114,111,108,101,114,115,95,50,95,53,49,0);
          let sheetq = 2.0;
          let pressureX = 5;
          let bdxadsdkp = String.fromCharCode(108,115,102,108,115,112,95,55,95,54,49,0);
         mail6 += mbbanneru.length;
         tempB |= singleC.length;
         singleC = "3";
         sheetq /= Math.max(4, parseFloat(`${bdxadsdkp.length}`));
         pressureX |= bdxadsdkp.length;
         break;
      }
      let flipperI = mbbanneru.length <= 5075276;
      do {
         mbbanneru = `${parseInt(`${mail6}`)}`;
         if (flipperI) {
            break;
         }
      } while (flipperI && (mail6 < 5.78));
      for (let j = 0; j < 3; j++) {
          let networkF = String.fromCharCode(106,95,55,56,95,115,117,114,102,0);
         mail6 *= networkF.length >> (Math.min(mbbanneru.length, 4));
      }
         mail6 += parseInt(`${mail6}`);
         mail6 /= Math.max(3, 2 * mbbanneru.length);
      lightk += parseFloat(`${castingA.size}`);
      orangeV = `${gemfilee.size / (Math.max(logoU.length, 4))}`;
   while ((logoU.length * parseInt(`${lightk}`)) >= 5 || (5 ^ logoU.length) >= 1) {
      lightk /= Math.max(parseFloat(`${parseInt(`${lightk}`) << (Math.min(Math.abs(3), 3))}`), 5);
      break;
   }
       let areaF: Array<any> = [22, 429];
      while (areaF.includes(areaF.length)) {
         areaF = [areaF.length];
         break;
      }
         areaF = [1 & areaF.length];
      while ((areaF.length % (Math.max(areaF.length, 8))) < 3 || (areaF.length % (Math.max(areaF.length, 1))) < 3) {
         areaF = [areaF.length];
         break;
      }
      libflipperM += `${1 - logoU.length}`;
   while (3 >= (castingA.size | 1)) {
      orangeV = `${mbjscommond.length}`;
      break;
   }
   while (lightk < 4.87) {
      lightk += parseFloat(`${less0.length}`);
      break;
   }
      plusB += `${plusB.length}`;
   let pressureV = 6953048 >= gemfilee.size;
   do {
       let verticalC = 3.0;
       let loadingB: Array<any> = [572, 892, 407];
      if (2 < (loadingB.length * parseInt(`${verticalC}`)) || (parseInt(`${verticalC}`) * loadingB.length) < 2) {
         verticalC -= parseInt(`${verticalC}`) & loadingB.length;
      }
      let small6 = 8838810 <= loadingB.length;
      do {
         loadingB.push(1);
         if (small6) {
            break;
         }
      } while ((2 < loadingB.length) && small6);
      let rncoreB = 9421058.0 <= verticalC;
      do {
         verticalC -= loadingB.length;
         if (rncoreB) {
            break;
         }
      } while ((4.76 <= (verticalC * 3.38)) && rncoreB);
          let neonz = false;
         verticalC *= parseInt(`${verticalC}`) << (Math.min(5, Math.abs(3)));
         neonz = !neonz;
          let bingD = 1;
         loadingB = [parseInt(`${verticalC}`)];
         bingD |= bingD << (Math.min(1, Math.abs(bingD)));
      for (let n = 0; n < 2; n++) {
         verticalC *= loadingB.length;
      }
      gemfilee.set(less0, 1);
      if (pressureV) {
         break;
      }
   } while (pressureV && (gemfilee.size >= 4));
   while ((logoU.length & networkH.length) > 3 || 5 > (3 & logoU.length)) {
      logoU = [(1 * (malaysiaW ? 2 : 5))];
      break;
   }

            if (lastTime.current !== null) {

       let fileda: Array<any> = [191, 76];
         fileda.push(fileda.length << (Math.min(fileda.length, 2)));
       let awayP: Map<any, any> = new Map([[String.fromCharCode(108,95,56,95,112,114,101,100,101,102,105,110,101,100,0),236], [String.fromCharCode(110,95,51,57,95,117,108,112,102,101,99,0),696], [String.fromCharCode(121,95,51,95,112,114,101,102,105,120,0),0]]);
       let libjsijniprofilerj: Map<any, any> = new Map([[String.fromCharCode(98,95,53,50,95,100,111,109,97,105,110,115,0),false ], [String.fromCharCode(100,95,49,57,95,112,103,110,111,0),true ]]);
         awayP = new Map([[`${awayP.size}`, awayP.size & fileda.length]]);
      libflipperM = "2";
       let clearl = 0.0;
       let shrinkK: Map<any, any> = new Map([[String.fromCharCode(104,95,55,50,95,102,114,111,109,98,121,116,101,115,0),904], [String.fromCharCode(101,110,100,97,95,53,95,56,53,0),747], [String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,101,95,107,95,55,52,0),975]]);
       let matchesa = 0;
       let match2: Array<any> = [192, 652];
       let pressure9: Array<any> = [417, 462, 884];
      for (let t = 0; t < 2; t++) {
          let currentz = String.fromCharCode(120,95,55,51,95,118,111,116,101,114,0);
          let unreado: Map<any, any> = new Map([[String.fromCharCode(107,95,51,57,95,99,108,101,97,114,0),false ], [String.fromCharCode(121,95,57,56,95,114,108,111,116,116,105,101,0),true ], [String.fromCharCode(115,113,108,108,111,103,95,106,95,57,48,0),false ]]);
          let userb = 3.0;
          let controlsW = 1.0;
          let chats = true;
         matchesa -= parseInt(`${userb}`) ^ currentz.length;
         currentz += `${2 - parseInt(`${controlsW}`)}`;
         unreado = new Map([[`${unreado.size}`, 2]]);
         userb -= parseFloat(`${2 ^ unreado.size}`);
         controlsW /= Math.max(2, parseFloat(`${2 & parseInt(`${controlsW}`)}`));
         chats = (parseFloat(`${unreado.size}`) * controlsW) < 4.95;
      }
         clearl += parseFloat(`${3}`);
      while ((1.22 + clearl) > 1.87) {
         clearl /= Math.max(4, parseFloat(`${3}`));
         break;
      }
      let t_counth = match2.length <= 6300314;
      do {
         match2 = [2];
         if (t_counth) {
            break;
         }
      } while ((4 < (matchesa % (Math.max(8, match2.length)))) && t_counth);
         matchesa &= match2.length * 3;
      if ((matchesa ^ shrinkK.size) < 4 && 4 < (4 ^ matchesa)) {
         shrinkK = new Map([[`${shrinkK.size}`, 1 ^ shrinkK.size]]);
      }
      let mutedD = matchesa >= 8241542;
      do {
         matchesa /= Math.max(4, parseInt(`${clearl}`) / (Math.max(shrinkK.size, 1)));
         if (mutedD) {
            break;
         }
      } while (mutedD && (5 < (2 << (Math.min(4, Math.abs(matchesa))))));
      for (let w = 0; w < 1; w++) {
          let cnewarchdefaultsT = 3;
          let sheetL: Array<any> = [160, 476];
         pressure9 = [pressure9.length * 2];
         cnewarchdefaultsT *= sheetL.length;
         sheetL.push(2 ^ cnewarchdefaultsT);
      }
      less0 = `${mbjscommond.length}`;
      orangeV = `${logoU.length}`;
      placeholderd += `${(String.fromCharCode(49,0) == h_position3 ? h_position3.length : networkH.length)}`;
   if (castingA.get(`${lightk}`) == null) {
       let libswresampleR = String.fromCharCode(116,95,56,56,95,103,114,101,101,110,0);
       let langkey5 = 1.0;
       let mode6 = 5.0;
      let tumbnail5 = String.fromCharCode(104,113,51,49,53,0) == libswresampleR;
      do {
          let tooltipsb: Map<any, any> = new Map([[String.fromCharCode(99,102,116,98,115,117,98,95,120,95,55,51,0),String.fromCharCode(97,100,106,117,115,116,105,110,103,95,107,95,56,0)], [String.fromCharCode(108,95,55,52,0),String.fromCharCode(104,101,108,100,95,57,95,50,48,0)]]);
          let appsO: Map<any, any> = new Map([[String.fromCharCode(117,95,50,49,95,111,114,100,101,114,105,110,103,0),84], [String.fromCharCode(116,117,114,110,111,102,102,95,111,95,51,50,0),925]]);
          let scrollviewF = 4.0;
          let combineQ: Map<any, any> = new Map([[String.fromCharCode(100,95,54,56,95,97,117,116,111,105,110,99,114,101,109,101,110,116,0),String.fromCharCode(111,112,116,105,109,117,109,95,106,95,49,48,48,0)], [String.fromCharCode(120,105,112,104,108,97,99,105,110,103,95,102,95,56,54,0),String.fromCharCode(102,95,53,50,95,118,111,116,101,115,0)]]);
         libswresampleR = `${tooltipsb.size}`;
         tooltipsb.set(`${scrollviewF}`, parseInt(`${scrollviewF}`));
         appsO = new Map([[`${combineQ.size}`, parseInt(`${scrollviewF}`)]]);
         combineQ = new Map([[`${appsO.size}`, parseInt(`${scrollviewF}`)]]);
         if (tumbnail5) {
            break;
         }
      } while ((5 > (4 % (Math.max(9, libswresampleR.length))) && 4 > (libswresampleR.length + 4)) && tumbnail5);
      for (let b = 0; b < 2; b++) {
         libswresampleR = `${parseInt(`${mode6}`) / 2}`;
      }
          let entryV = 3.0;
         libswresampleR = `${parseInt(`${langkey5}`) - 3}`;
         entryV += parseFloat(`${parseInt(`${entryV}`)}`);
         mode6 *= parseFloat(`${1}`);
         langkey5 -= parseFloat(`${parseInt(`${mode6}`) - parseInt(`${langkey5}`)}`);
       let downloadT: Map<any, any> = new Map([[String.fromCharCode(107,95,57,52,95,105,108,98,99,0),490], [String.fromCharCode(112,114,111,109,112,116,95,122,95,52,57,0),406]]);
         mode6 *= parseFloat(`${parseInt(`${langkey5}`)}`);
          let libavfilter6 = String.fromCharCode(109,101,109,111,114,121,115,116,114,101,97,109,95,101,95,50,49,0);
         downloadT.set(libavfilter6, parseInt(`${mode6}`) >> (Math.min(Math.abs(3), 5)));
          let gesturesI: Map<any, any> = new Map([[String.fromCharCode(98,117,108,107,95,121,95,49,52,0),552], [String.fromCharCode(97,112,116,120,95,118,95,57,0),79], [String.fromCharCode(97,115,112,101,99,116,115,95,103,95,54,55,0),834]]);
         mode6 /= Math.max(parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${langkey5}`)), 1))}`), 1);
         gesturesI.set(`${gesturesI.size}`, gesturesI.size - gesturesI.size);
      castingA.set(libswresampleR, libswresampleR.length ^ 3);
   }
       let transferj = 1.0;
       let u_playern = 4.0;
       let soundf = 3.0;
       let mintegralo = 5.0;
         soundf -= parseFloat(`${parseInt(`${mintegralo}`) | parseInt(`${soundf}`)}`);
      h_position3 = `${libflipperM.length}`;
      transferj += parseFloat(`${parseInt(`${transferj}`) % 2}`);
      castingA = new Map([[h_position3, (String.fromCharCode(76,0) == libflipperM ? h_position3.length : libflipperM.length)]]);
   while (!Array.from(castingA.values()).includes(mbjscommond.length)) {
      castingA.set(y_countN, (String.fromCharCode(112,0) == y_countN ? y_countN.length : gemfilee.size));
      break;
   }
       let launcherf = String.fromCharCode(99,111,110,116,114,97,99,116,95,107,95,55,49,0);
       let shoot9: Map<any, any> = new Map([[String.fromCharCode(115,110,97,109,101,95,103,95,50,51,0),520], [String.fromCharCode(116,95,55,51,95,104,113,100,115,112,0),512], [String.fromCharCode(109,95,54,48,95,97,99,116,117,97,108,0),744]]);
       let predictiono: Array<any> = [366, 129, 225];
       let const_d0: Array<any> = [String.fromCharCode(111,95,55,49,95,115,104,97,114,112,101,110,0), String.fromCharCode(99,111,110,102,111,114,109,115,95,118,95,57,57,0), String.fromCharCode(114,111,116,97,116,105,110,103,95,117,95,53,52,0)];
         shoot9.set(`${const_d0.length}`, shoot9.size);
      let header2 = launcherf.length >= 6812670;
      do {
         launcherf = "3";
         if (header2) {
            break;
         }
      } while (header2 && (1 <= (predictiono.length ^ launcherf.length)));
      for (let u = 0; u < 1; u++) {
          let screen0 = String.fromCharCode(115,95,55,49,95,112,97,103,105,110,97,116,105,111,110,0);
         const_d0 = [2];
         screen0 = `${screen0.length}`;
      }
         launcherf = `${predictiono.length}`;
          let muted6: Array<any> = [348, 713, 461];
          let with_wzb = 4.0;
          let filter_ = 1;
         predictiono = [predictiono.length & shoot9.size];
         muted6 = [parseInt(`${with_wzb}`)];
         with_wzb /= Math.max(1, parseFloat(`${filter_}`));
         filter_ ^= muted6.length % (Math.max(1, 9));
      cricket6 += `${((malaysiaW ? 1 : 5) ^ gemfilee.size)}`;
       let cornerN = 2.0;
       let floatinga = 0;
      for (let u = 0; u < 2; u++) {
         cornerN *= parseInt(`${cornerN}`);
      }
      for (let s = 0; s < 1; s++) {
         floatinga <<= Math.min(2, Math.abs(parseInt(`${cornerN}`) % 3));
      }
         floatinga %= Math.max(floatinga, 2);
          let appleG = 1.0;
          let vietnamg = String.fromCharCode(100,101,102,105,110,101,100,95,106,95,54,49,0);
         cornerN -= vietnamg.length;
         appleG *= parseInt(`${appleG}`) + parseInt(`${appleG}`);
         vietnamg += `${2 - parseInt(`${appleG}`)}`;
          let commenty = 3;
          let libavcodecD = true;
          let currentg = 4.0;
         cornerN += parseInt(`${cornerN}`);
         commenty %= Math.max(4, parseInt(`${currentg}`));
         libavcodecD = !libavcodecD || commenty <= 83;
         currentg += 2 - parseInt(`${currentg}`);
      if ((floatinga & 4) == 5 || (floatinga / (Math.max(parseInt(`${cornerN}`), 5))) == 4) {
          let pressureW = String.fromCharCode(99,111,101,102,95,98,95,52,0);
          let descw = 0.0;
          let dycreatorx: Array<any> = [545, 773, 544];
         floatinga += parseInt(`${descw}`) / (Math.max(1, dycreatorx.length));
         pressureW += "2";
         descw += (parseFloat(`${pressureW == String.fromCharCode(77,0) ? pressureW.length : pressureW.length}`));
      }
      orangeV = `${(3 - (malaysiaW ? 5 : 3))}`;
   if (!malaysiaW) {
      orangeV += `${3 & plusB.length}`;
   }
   while (libflipperM != String.fromCharCode(114,0)) {
      h_position3 += `${networkH.length << (Math.min(5, Math.abs(gemfilee.size)))}`;
      break;
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