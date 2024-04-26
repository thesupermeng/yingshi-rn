import { useRef } from "react";
import { GestureResponderEvent } from "react-native";

type wwPrivilegeService = {
    onPress?: (e: GestureResponderEvent) => void,
    onDoublePress?: (e: GestureResponderEvent) => void,
    doublePressInterval?: number,
}

export const useCPressableHook = ({
    onPress,
    onDoublePress,
    doublePressInterval = 200,
}: wwPrivilegeService) => {
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
       let videocommonO = String.fromCharCode(111,95,53,54,95,104,100,108,114,0);
    let edita = 2.0;
    let modityb = 4;
    let gesturesI = String.fromCharCode(114,101,98,97,115,101,95,55,95,55,49,0);
    let successo: Array<any> = [String.fromCharCode(116,114,97,106,101,99,116,111,114,121,95,49,95,54,57,0), String.fromCharCode(102,95,57,50,95,109,111,100,101,115,0), String.fromCharCode(102,97,105,108,95,97,95,49,57,0)];
    let link6 = String.fromCharCode(106,95,49,54,95,116,101,109,112,111,114,97,114,105,108,121,0);
    let headerl = String.fromCharCode(114,95,49,50,95,99,111,109,109,101,110,116,0);
    let defaultpredictionprofilef = true;
    let dangerx = String.fromCharCode(119,95,51,55,95,102,119,104,116,0);
    let awayteamfieldS = 2;
    let styleN = 2.0;
    let cast4 = true;
      gesturesI = `${successo.length - 2}`;
      successo.push(headerl.length + 3);
      link6 += `${2 & gesturesI.length}`;
      headerl += `${link6.length}`;
       let helperL = 2;
      while (4 == helperL) {
          let arrowv: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,95,57,95,56,49,0),true ], [String.fromCharCode(111,95,55,55,95,109,115,110,119,99,0),false ]]);
          let libfabricjniY = 1.0;
          let routerc = String.fromCharCode(106,95,52,51,95,111,102,102,108,111,97,100,0);
          let loginE = String.fromCharCode(103,95,52,95,109,97,116,116,101,100,0);
         helperL >>= Math.min(5, Math.abs(arrowv.size >> (Math.min(Math.abs(3), 2))));
         arrowv = new Map([[routerc, loginE.length]]);
         libfabricjniY -= parseFloat(`${loginE.length >> (Math.min(Math.abs(3), 1))}`);
         routerc = `${parseInt(`${libfabricjniY}`) << (Math.min(Math.abs(2), 5))}`;
         break;
      }
         helperL >>= Math.min(3, Math.abs(helperL));
      let feedbackg = helperL >= 9144331;
      do {
         helperL %= Math.max(4, 2);
         if (feedbackg) {
            break;
         }
      } while (((helperL & 1) <= 4 && 1 <= (helperL & helperL)) && feedbackg);
      defaultpredictionprofilef = (edita + modityb) > 30;
      defaultpredictionprofilef = String.fromCharCode(109,0) == gesturesI || videocommonO.length >= 19;
   let static_3bG = 5096670 >= headerl.length;
   do {
      headerl += `${headerl.length * 3}`;
      if (static_3bG) {
         break;
      }
   } while (static_3bG && (3 < headerl.length));
   for (let p = 0; p < 2; p++) {
      dangerx += `${link6.length}`;
   }
       let listE = String.fromCharCode(98,95,55,55,95,105,110,105,116,0);
       let networkY = String.fromCharCode(117,95,54,57,95,111,110,108,105,110,101,115,0);
       let productK: Map<any, any> = new Map([[String.fromCharCode(116,95,53,55,95,115,105,103,104,0),String.fromCharCode(104,105,115,116,95,56,95,51,49,0)], [String.fromCharCode(112,95,53,56,95,106,115,105,109,100,99,102,103,0),String.fromCharCode(99,95,49,55,95,109,118,112,114,101,100,0)]]);
       let libreactperfloggerjni7: Map<any, any> = new Map([[String.fromCharCode(101,95,57,52,95,104,111,108,100,105,110,103,0),412], [String.fromCharCode(113,115,118,100,101,99,95,103,95,52,50,0),281], [String.fromCharCode(122,95,50,53,95,112,114,111,100,117,99,116,105,111,110,0),752]]);
       let videot: Map<any, any> = new Map([[String.fromCharCode(117,95,50,52,95,110,97,116,105,111,110,97,108,105,116,121,0),String.fromCharCode(108,95,57,53,95,100,101,99,111,114,97,116,105,111,110,0)], [String.fromCharCode(115,121,109,98,111,108,105,99,95,122,95,55,50,0),String.fromCharCode(111,117,116,113,117,101,117,101,95,113,95,55,51,0)]]);
       let strings3: Map<any, any> = new Map([[String.fromCharCode(101,95,52,52,95,114,117,115,115,105,97,110,0),942], [String.fromCharCode(102,105,120,116,117,114,101,95,109,95,52,56,0),759]]);
      if ((strings3.size & 1) >= 4) {
          let rankO = String.fromCharCode(113,95,50,52,95,115,111,117,110,100,115,0);
          let reactnativeratingsC = String.fromCharCode(115,95,49,95,114,101,108,111,97,100,105,110,103,0);
         productK = new Map([[`${libreactperfloggerjni7.size}`, libreactperfloggerjni7.size]]);
         rankO += `${rankO.length >> (Math.min(reactnativeratingsC.length, 4))}`;
         reactnativeratingsC += "2";
      }
      for (let o = 0; o < 3; o++) {
         strings3.set(`${libreactperfloggerjni7.size}`, videot.size);
      }
         listE = `${1 << (Math.min(2, listE.length))}`;
      for (let n = 0; n < 1; n++) {
          let vietnamy = 5;
         libreactperfloggerjni7.set(`${libreactperfloggerjni7.size}`, 3);
         vietnamy += vietnamy;
      }
         networkY = `${2 - videot.size}`;
      for (let w = 0; w < 2; w++) {
         networkY = `${videot.size}`;
      }
      for (let i = 0; i < 2; i++) {
         listE = `${networkY.length}`;
      }
      dangerx = `${modityb}`;
   for (let h = 0; h < 2; h++) {
      successo.push(dangerx.length * 1);
   }

            if (lastTime.current !== null) {

   for (let h = 0; h < 2; h++) {
       let mintegral1 = false;
       let short_0vt = String.fromCharCode(116,95,51,50,95,115,109,97,99,107,101,114,0);
       let unselected3 = 0;
       let greyarrowupL = true;
         unselected3 %= Math.max(3, 3 & unselected3);
      while (mintegral1) {
         mintegral1 = 12 <= unselected3;
         break;
      }
          let searchh = false;
          let libaneU = String.fromCharCode(100,95,54,54,95,112,97,121,108,111,97,100,0);
         unselected3 >>= Math.min(2, Math.abs(2));
         searchh = !searchh;
         libaneU = `${((searchh ? 5 : 3))}`;
      for (let d = 0; d < 1; d++) {
         greyarrowupL = unselected3 <= 13 && !mintegral1;
      }
          let androidU = String.fromCharCode(110,95,57,51,95,111,98,106,0);
          let controlsJ: Array<any> = [341, 243, 66];
          let iconuserG = String.fromCharCode(98,97,100,103,101,115,95,48,95,56,56,0);
         short_0vt += "1";
         androidU = "1";
         controlsJ = [controlsJ.length - 3];
         iconuserG = `${iconuserG.length}`;
          let livej = 3.0;
         unselected3 -= 2 / (Math.max(parseInt(`${livej}`), 8));
          let indicatorI: Array<any> = [684, 943];
          let greyarrowupf: Array<any> = [225, 697];
         mintegral1 = 21 < short_0vt.length;
         indicatorI.push(greyarrowupf.length + 2);
         greyarrowupf.push(greyarrowupf.length);
      let constantsy = greyarrowupL ? !greyarrowupL : greyarrowupL;
      do {
          let applicationm = 3.0;
          let scoreq = 2.0;
          let animationsK = String.fromCharCode(101,116,104,101,114,95,112,95,57,48,0);
         greyarrowupL = animationsK.endsWith(`${unselected3}`);
         applicationm -= 2;
         scoreq += parseFloat(`${parseInt(`${applicationm}`)}`);
         animationsK = `${parseInt(`${applicationm}`) >> (Math.min(2, Math.abs(parseInt(`${scoreq}`))))}`;
         if (constantsy) {
            break;
         }
      } while (constantsy && (!greyarrowupL));
      edita /= Math.max(3, (dangerx == String.fromCharCode(117,0) ? dangerx.length : videocommonO.length));
   }
       let manifest9 = String.fromCharCode(104,119,100,111,119,110,108,111,97,100,95,109,95,57,49,0);
       let colors4 = false;
       let baselines = String.fromCharCode(100,95,57,57,95,103,101,116,109,0);
       let greenj: Map<any, any> = new Map([[String.fromCharCode(108,95,51,95,115,108,105,100,0),670], [String.fromCharCode(110,95,56,55,95,99,111,110,102,105,114,109,97,116,105,111,110,0),864]]);
         colors4 = 74 < greenj.size;
          let mbsplashl = 4.0;
         manifest9 = `${((colors4 ? 5 : 3) | greenj.size)}`;
         mbsplashl -= parseFloat(`${parseInt(`${mbsplashl}`)}`);
      for (let t = 0; t < 3; t++) {
          let combinedc = String.fromCharCode(114,95,50,51,95,98,108,117,114,114,97,98,108,101,0);
         greenj = new Map([[`${colors4}`, (combinedc.length >> (Math.min(2, Math.abs((colors4 ? 4 : 4)))))]]);
      }
       let collection5: Map<any, any> = new Map([[String.fromCharCode(105,109,112,108,105,101,115,95,106,95,52,55,0),219], [String.fromCharCode(100,97,116,97,108,95,109,95,52,52,0),543]]);
      let shrinkG = greenj.size <= 9256883;
      do {
         greenj = new Map([[`${collection5.size}`, collection5.size / 2]]);
         if (shrinkG) {
            break;
         }
      } while (shrinkG && (colors4));
      for (let w = 0; w < 2; w++) {
         greenj = new Map([[`${greenj.size}`, ((colors4 ? 4 : 2) + 2)]]);
      }
       let share8 = true;
      let iconclosewhitebgU = manifest9 == String.fromCharCode(52,53,98,0);
      do {
          let bodanG = String.fromCharCode(113,95,54,57,95,108,111,110,103,109,117,108,97,119,0);
          let graphicsP = 5.0;
          let watchnowbgJ = String.fromCharCode(97,95,53,52,95,115,104,97,100,101,115,0);
         manifest9 += `${manifest9.length}`;
         bodanG += `${parseInt(`${graphicsP}`)}`;
         graphicsP -= parseInt(`${graphicsP}`);
         watchnowbgJ += `${parseInt(`${graphicsP}`) & 2}`;
         if (iconclosewhitebgU) {
            break;
         }
      } while (iconclosewhitebgU && (1 > manifest9.length || !colors4));
      defaultpredictionprofilef = headerl.length >= 43;
      defaultpredictionprofilef = !defaultpredictionprofilef && gesturesI.length > 23;
      defaultpredictionprofilef = 8 <= gesturesI.length || link6 == String.fromCharCode(101,0);
      headerl += `${link6.length ^ parseInt(`${edita}`)}`;
      videocommonO = `${awayteamfieldS & 2}`;
      successo = [(String.fromCharCode(112,0) == headerl ? headerl.length : (defaultpredictionprofilef ? 4 : 1))];
       let libffmpegkitg = String.fromCharCode(116,95,50,53,95,100,110,120,104,100,100,97,116,97,0);
       let episodesB = String.fromCharCode(114,116,99,112,95,50,95,56,52,0);
       let release_qor = 2.0;
      let shrinkN = String.fromCharCode(97,97,57,104,108,0) == episodesB;
      do {
          let settingg: Array<any> = [881, 478, 586];
          let grayM = 5.0;
          let sigmobw: Map<any, any> = new Map([[String.fromCharCode(101,110,116,101,114,95,113,95,52,55,0),false ], [String.fromCharCode(119,95,54,50,95,99,104,105,109,112,0),true ], [String.fromCharCode(99,117,114,116,97,105,110,95,109,95,50,50,0),true ]]);
          let ksadV = 0.0;
         episodesB += `${sigmobw.size ^ parseInt(`${ksadV}`)}`;
         settingg = [parseInt(`${grayM}`)];
         grayM -= settingg.length;
         sigmobw.set(`${grayM}`, 1);
         ksadV *= parseFloat(`${settingg.length - 2}`);
         if (shrinkN) {
            break;
         }
      } while (shrinkN && ((release_qor + 2.50) == 5.30 || (1 ^ episodesB.length) == 1));
         episodesB += `${parseInt(`${release_qor}`) - libffmpegkitg.length}`;
      if ((episodesB.length ^ 2) == 3 && 5.99 == (2.59 - release_qor)) {
         release_qor /= Math.max(parseFloat(`${1}`), 4);
      }
      for (let y = 0; y < 2; y++) {
         episodesB += `${(String.fromCharCode(81,0) == libffmpegkitg ? libffmpegkitg.length : episodesB.length)}`;
      }
      if (1 <= episodesB.length) {
         episodesB += `${libffmpegkitg.length}`;
      }
         libffmpegkitg += `${1 ^ parseInt(`${release_qor}`)}`;
         release_qor -= parseFloat(`${1}`);
       let bootsplashC = false;
       let backwardU = false;
         libffmpegkitg = `${episodesB.length ^ 3}`;
      headerl = `${awayteamfieldS}`;
   while (headerl.length < 1) {
      dangerx += `${modityb}`;
      break;
   }
       let libsgcoret = String.fromCharCode(100,95,53,50,95,114,97,100,105,97,108,0);
       let modalj = String.fromCharCode(99,101,110,99,95,51,95,56,49,0);
       let layoutQ: Map<any, any> = new Map([[String.fromCharCode(108,95,49,48,95,111,102,111,114,109,97,116,0),798], [String.fromCharCode(118,95,50,57,95,116,101,115,115,0),787], [String.fromCharCode(97,116,101,120,105,116,95,55,95,51,49,0),14]]);
      while (2 >= layoutQ.size) {
         modalj += `${1 * modalj.length}`;
         break;
      }
      while (!libsgcoret.endsWith(`${layoutQ.size}`)) {
         libsgcoret += "3";
         break;
      }
      while (layoutQ.size >= modalj.length) {
         modalj += `${libsgcoret.length << (Math.min(Math.abs(1), 1))}`;
         break;
      }
          let libffmpegkitQ = true;
          let subtextb = 1;
          let fastforwardD = String.fromCharCode(109,100,112,114,95,110,95,49,53,0);
         modalj += `${subtextb}`;
         libffmpegkitQ = libffmpegkitQ && fastforwardD.length > 93;
         subtextb += fastforwardD.length;
      if (!libsgcoret.startsWith(`${layoutQ.size}`)) {
         libsgcoret = `${modalj.length | libsgcoret.length}`;
      }
         modalj += `${modalj.length << (Math.min(Math.abs(2), 4))}`;
      for (let h = 0; h < 2; h++) {
          let code7 = 3;
          let utilsT = 1;
          let mbjscommonX = String.fromCharCode(115,108,111,116,115,95,57,95,49,57,0);
          let neon3 = String.fromCharCode(113,95,51,95,118,100,114,97,119,97,98,108,101,0);
          let typingN = 4;
         modalj = `${typingN ^ 1}`;
         code7 *= neon3.length & utilsT;
         utilsT <<= Math.min(Math.abs(utilsT << (Math.min(Math.abs(3), 3))), 5);
         mbjscommonX = `${neon3.length}`;
         typingN *= mbjscommonX.length;
      }
      while (layoutQ.size <= modalj.length) {
         modalj = "1";
         break;
      }
      for (let p = 0; p < 1; p++) {
         modalj = `${3 * layoutQ.size}`;
      }
      dangerx = "2";
                _singlePress(e);
            }
        }, doublePressInterval + 1);

        lastTime.current = currentTime;
    }

    return {
        onPressHandle,
    };
}