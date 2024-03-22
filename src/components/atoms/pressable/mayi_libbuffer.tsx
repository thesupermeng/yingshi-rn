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
       let libjsinspector9 = String.fromCharCode(117,110,97,115,115,105,103,110,101,100,95,122,95,51,48,0);
    let fullscreenmin6: Array<any> = [442, 943, 647];
    let list3 = String.fromCharCode(111,95,56,53,95,99,111,100,97,98,108,101,0);
    let gradleV = String.fromCharCode(104,95,54,49,95,118,97,114,121,105,110,103,0);
    let reactnativeultimatelistview_: Map<any, any> = new Map([[String.fromCharCode(103,117,97,114,97,110,116,101,101,115,95,53,95,49,48,0),261], [String.fromCharCode(98,105,110,100,108,105,115,116,95,115,95,57,54,0),91], [String.fromCharCode(115,116,114,111,107,101,115,95,115,95,53,53,0),583]]);
    let plash0 = false;
    let typeso: Map<any, any> = new Map([[String.fromCharCode(99,111,109,109,111,110,95,98,95,56,49,0),545], [String.fromCharCode(97,95,51,54,95,111,118,101,114,115,99,114,111,108,108,105,110,103,0),448]]);
    let annerq: Array<any> = [232, 467];
    let buttonm = String.fromCharCode(106,111,121,102,117,108,95,98,95,51,57,0);
    let templateprocessorX = String.fromCharCode(111,115,100,101,112,95,56,95,49,54,0);
    let checkboxk = String.fromCharCode(113,117,97,110,116,105,122,97,116,105,111,110,95,52,95,57,50,0);
   let group6 = plash0 ? !plash0 : plash0;
   do {
       let activeG = String.fromCharCode(115,97,100,98,95,118,95,49,0);
       let greyj = String.fromCharCode(99,108,109,117,108,95,101,95,49,49,0);
          let serviceB = 1;
         activeG += `${greyj.length - 1}`;
         serviceB <<= Math.min(Math.abs(serviceB), 1);
       let libffmpegkitm = String.fromCharCode(100,95,49,54,95,98,97,103,0);
       let rightL = String.fromCharCode(112,95,53,50,95,99,114,111,112,112,105,110,103,0);
      plash0 = libjsinspector9.length >= 46;
      if (group6) {
         break;
      }
   } while (group6 && (2 < (5 | reactnativeultimatelistview_.size)));
   while (1 > typeso.size) {
       let constantsL: Array<any> = [100, 689];
       let volume1: Array<any> = [477, 918];
          let neonS = false;
          let headerK = String.fromCharCode(103,95,52,55,95,100,111,99,0);
          let const_kc: Map<any, any> = new Map([[String.fromCharCode(100,105,115,116,114,97,99,116,97,98,108,101,95,102,95,55,52,0),728], [String.fromCharCode(109,111,100,110,112,102,95,118,95,50,50,0),867], [String.fromCharCode(98,101,103,97,110,95,103,95,53,57,0),58]]);
         constantsL.push(headerK.length + 2);
         neonS = null == const_kc.get(`${neonS}`);
         headerK = `${const_kc.size << (Math.min(Math.abs(2), 4))}`;
       let rncoreu = String.fromCharCode(103,95,49,53,95,100,101,108,105,109,105,116,101,114,0);
       let libfabricjniD = String.fromCharCode(100,95,55,95,102,105,108,101,115,0);
      while (libfabricjniD.length >= 2) {
         constantsL = [volume1.length];
         break;
      }
          let holderv: Map<any, any> = new Map([[String.fromCharCode(114,101,99,112,95,100,95,57,52,0),573], [String.fromCharCode(109,95,49,56,95,115,118,103,0),981]]);
         constantsL.push(libfabricjniD.length);
         holderv = new Map([[`${holderv.size}`, holderv.size]]);
      while (rncoreu.length >= libfabricjniD.length) {
          let penaltyshootp = String.fromCharCode(108,95,52,50,95,112,105,110,107,0);
          let traminin = 4.0;
         libfabricjniD += `${penaltyshootp.length * volume1.length}`;
         penaltyshootp += "2";
         traminin += parseFloat(`${parseInt(`${traminin}`)}`);
         break;
      }
          let textinputm = String.fromCharCode(118,100,114,97,119,97,98,108,101,95,55,95,49,50,0);
         rncoreu += `${constantsL.length % 1}`;
         textinputm = `${textinputm.length}`;
      typeso.set(`${constantsL.length}`, reactnativeultimatelistview_.size * 3);
      break;
   }
      fullscreenmin6.push(typeso.size);
      libjsinspector9 = `${(String.fromCharCode(80,0) == gradleV ? list3.length : gradleV.length)}`;
      libjsinspector9 = `${list3.length & gradleV.length}`;
      typeso = new Map([[`${reactnativeultimatelistview_.size}`, 1 - reactnativeultimatelistview_.size]]);
      fullscreenmin6.push(gradleV.length - fullscreenmin6.length);
       let step0 = false;
         step0 = !step0;
      for (let x = 0; x < 1; x++) {
         step0 = !step0;
      }
         step0 = !step0;
      gradleV = `${annerq.length}`;

            if (lastTime.current !== null) {

      reactnativeultimatelistview_.set(`${plash0}`, 2);
   for (let f = 0; f < 3; f++) {
       let reactnativejst: Map<any, any> = new Map([[String.fromCharCode(116,119,111,112,97,115,115,95,53,95,53,54,0),669], [String.fromCharCode(116,105,114,101,100,95,120,95,56,49,0),223]]);
       let plash2: Map<any, any> = new Map([[String.fromCharCode(101,95,54,51,95,102,105,114,101,0),String.fromCharCode(97,95,54,49,95,115,121,110,99,104,114,111,110,105,115,101,100,0)], [String.fromCharCode(98,95,55,53,95,100,105,115,97,98,108,101,0),String.fromCharCode(97,117,116,111,114,101,109,111,118,101,95,109,95,57,54,0)]]);
       let smallR = 2.0;
       let roomI = 2.0;
          let stringsf = String.fromCharCode(99,111,118,97,108,101,110,116,95,56,95,53,52,0);
          let vignetteQ: Map<any, any> = new Map([[String.fromCharCode(109,105,103,114,97,116,101,100,95,97,95,51,54,0),9], [String.fromCharCode(105,95,57,52,95,114,101,110,116,97,108,0),877], [String.fromCharCode(97,109,111,117,110,116,115,95,122,95,55,57,0),916]]);
          let activeO = true;
         plash2.set(stringsf, (stringsf == String.fromCharCode(76,0) ? (activeO ? 1 : 4) : stringsf.length));
         vignetteQ = new Map([[`${vignetteQ.size}`, vignetteQ.size]]);
      let eabafadfadddbafeddddeeefeaafD = plash2.size <= 5598898;
      do {
         plash2.set(`${smallR}`, reactnativejst.size >> (Math.min(2, Math.abs(parseInt(`${smallR}`)))));
         if (eabafadfadddbafeddddeeefeaafD) {
            break;
         }
      } while (eabafadfadddbafeddddeeefeaafD && (!Array.from(plash2.keys()).includes(`${smallR}`)));
      let backicon0 = roomI <= 6837452.0;
      do {
         roomI += parseFloat(`${3}`);
         if (backicon0) {
            break;
         }
      } while ((roomI >= 5.65) && backicon0);
       let popupH = String.fromCharCode(111,95,49,48,95,112,111,108,105,99,121,0);
       let iconwatchnowN = 0.0;
       let trophyY = 1.0;
         trophyY *= parseFloat(`${parseInt(`${roomI}`)}`);
       let gradlewo = String.fromCharCode(114,95,49,57,95,109,117,108,116,105,112,108,121,0);
         roomI -= parseFloat(`${plash2.size % 1}`);
         iconwatchnowN -= parseFloat(`${plash2.size >> (Math.min(popupH.length, 4))}`);
       let reactnativejse = String.fromCharCode(99,95,56,54,95,99,104,97,114,108,101,110,0);
      if (roomI < 1.59) {
         reactnativejse = "3";
      }
      for (let g = 0; g < 3; g++) {
         iconwatchnowN += parseFloat(`${reactnativejst.size % 1}`);
      }
      typeso.set(`${fullscreenmin6.length}`, typeso.size - 1);
   }
   if (3 >= (2 & typeso.size) && 3 >= (list3.length & 2)) {
       let termsd = 0;
       let description_ix = String.fromCharCode(119,95,48,95,111,98,116,97,105,110,101,114,0);
       let static_nJ = 2.0;
       let mime6 = 4.0;
       let zhengpianm: Map<any, any> = new Map([[String.fromCharCode(114,100,111,112,116,95,49,95,52,57,0),true ], [String.fromCharCode(117,95,50,48,95,111,117,116,108,105,101,114,0),true ], [String.fromCharCode(99,97,110,116,95,97,95,49,51,0),true ]]);
       let transferO: Map<any, any> = new Map([[String.fromCharCode(100,111,99,115,95,55,95,57,54,0),597], [String.fromCharCode(101,114,115,105,111,110,95,56,95,56,0),686], [String.fromCharCode(102,95,52,55,95,112,97,116,104,115,0),658]]);
         zhengpianm.set(`${termsd}`, termsd);
         zhengpianm = new Map([[`${transferO.size}`, transferO.size ^ parseInt(`${mime6}`)]]);
      while ((zhengpianm.size % (Math.max(4, 6))) > 3 && (transferO.size % 4) > 4) {
         transferO = new Map([[`${static_nJ}`, parseInt(`${mime6}`)]]);
         break;
      }
      let hejiL = mime6 <= 6048680.0;
      do {
         mime6 *= parseFloat(`${description_ix.length}`);
         if (hejiL) {
            break;
         }
      } while ((!Array.from(zhengpianm.values()).includes(mime6)) && hejiL);
      if (2 >= (zhengpianm.size % 1)) {
          let mapping_: Array<any> = [149, 810];
          let rankG: Array<any> = [292, 600, 730];
          let encrypt3: Map<any, any> = new Map([[String.fromCharCode(118,95,54,54,95,99,97,110,100,105,100,97,116,101,115,0),646], [String.fromCharCode(110,111,110,102,97,116,97,108,95,110,95,53,51,0),285], [String.fromCharCode(99,102,116,102,115,117,98,95,120,95,56,48,0),832]]);
          let fullQ = 5.0;
         termsd *= 1 >> (Math.min(Math.abs(parseInt(`${static_nJ}`)), 5));
         mapping_.push(1 ^ parseInt(`${fullQ}`));
         rankG = [rankG.length];
         encrypt3.set(`${fullQ}`, parseInt(`${fullQ}`));
      }
      while (3 >= transferO.size) {
         termsd <<= Math.min(Math.abs(zhengpianm.size), 1);
         break;
      }
      for (let l = 0; l < 2; l++) {
         termsd >>= Math.min(3, Math.abs(parseInt(`${mime6}`) / (Math.max(2, 6))));
      }
         static_nJ -= 2 * parseInt(`${mime6}`);
      while (3.91 < (static_nJ / 1.46) || 3 < (3 + zhengpianm.size)) {
          let unewinterstitialc = String.fromCharCode(112,114,101,118,105,101,119,105,110,103,95,97,95,57,0);
          let nativeu: Array<any> = [String.fromCharCode(103,95,52,52,95,99,111,110,102,105,103,117,114,97,98,108,101,0), String.fromCharCode(104,111,108,100,95,102,95,57,55,0), String.fromCharCode(108,95,57,48,95,115,117,99,99,101,115,115,102,117,108,108,121,0)];
          let catagory8 = String.fromCharCode(118,95,54,49,0);
          let main_hj: Array<any> = [222, 712, 898];
         zhengpianm.set(`${termsd}`, 2);
         unewinterstitialc = `${nativeu.length}`;
         nativeu = [unewinterstitialc.length % 3];
         catagory8 = "2";
         main_hj.push(main_hj.length + nativeu.length);
         break;
      }
          let moviesQ = String.fromCharCode(113,95,49,55,95,115,111,117,110,100,0);
          let catalog5 = String.fromCharCode(97,110,97,108,121,116,105,99,115,95,118,95,56,52,0);
         termsd += catalog5.length;
         moviesQ = `${moviesQ.length << (Math.min(Math.abs(3), 5))}`;
         catalog5 += `${moviesQ.length / 3}`;
      let flyerI = zhengpianm.size <= 8322339;
      do {
         zhengpianm.set(`${static_nJ}`, parseInt(`${static_nJ}`) + 3);
         if (flyerI) {
            break;
         }
      } while ((Array.from(zhengpianm.values()).includes(transferO.size)) && flyerI);
      list3 += `${termsd ^ 1}`;
   }
      plash0 = (fullscreenmin6.length << (Math.min(libjsinspector9.length, 3))) >= 28;
       let libapminsightbQ = 1;
         libapminsightbQ %= Math.max(3, libapminsightbQ >> (Math.min(Math.abs(1), 3)));
      for (let x = 0; x < 3; x++) {
          let cancelK = String.fromCharCode(107,95,54,52,95,100,117,97,108,0);
          let shirtO = String.fromCharCode(106,99,111,110,102,105,103,95,54,95,50,57,0);
         libapminsightbQ <<= Math.min(cancelK.length, 3);
         cancelK = `${shirtO.length}`;
         shirtO += `${shirtO.length / (Math.max(shirtO.length, 7))}`;
      }
      for (let v = 0; v < 3; v++) {
         libapminsightbQ |= libapminsightbQ;
      }
      gradleV = `${(list3 == String.fromCharCode(87,0) ? list3.length : typeso.size)}`;
      reactnativeultimatelistview_ = new Map([[`${reactnativeultimatelistview_.size}`, list3.length]]);
      plash0 = list3 == buttonm;
      plash0 = annerq.length < 66;
                _singlePress(e);
            }
        }, doublePressInterval + 1);

        lastTime.current = currentTime;
    }

    return {
        onPressHandle,
    };
}