import { useRef } from "react";
import { GestureResponderEvent } from "react-native";

type FRBlack = {
    onPress?: (e: GestureResponderEvent) => void,
    onDoublePress?: (e: GestureResponderEvent) => void,
    doublePressInterval?: number,
}

export const useCPressableHook = ({
    onPress,
    onDoublePress,
    doublePressInterval = 200,
}: FRBlack) => {
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
       let countryp = String.fromCharCode(100,111,119,110,108,111,97,100,105,110,103,95,50,95,50,54,0);
    let nterstitial5 = String.fromCharCode(112,101,114,115,105,115,116,97,110,116,95,119,95,56,48,0);
    let disconnectedJ: Array<any> = [490, 47, 347];
    let connection2 = String.fromCharCode(102,111,114,99,105,110,103,95,55,95,52,50,0);
    let eact1 = String.fromCharCode(102,105,110,100,97,115,111,99,95,103,95,57,57,0);
    let baidu2 = false;
    let single2 = 5;
    let navigationK = String.fromCharCode(102,95,53,54,95,115,101,114,118,105,99,101,115,0);
    let slider6 = String.fromCharCode(101,95,53,95,106,112,101,103,116,97,98,108,101,115,0);
    let updates_ = String.fromCharCode(110,111,100,101,115,95,55,95,55,53,0);
    let unticke = String.fromCharCode(109,101,115,115,97,103,101,95,122,95,57,53,0);
    let stationsQ = String.fromCharCode(100,101,97,100,95,55,95,50,50,0);
    let emojir = String.fromCharCode(102,95,49,53,95,98,97,116,99,104,0);
    let whitey = 1.0;
    let cornerF = false;
    let eactY = String.fromCharCode(119,101,98,114,116,99,95,49,95,49,0);
   let long_u1z = 9135935 >= slider6.length;
   do {
      slider6 = `${slider6.length - single2}`;
      if (long_u1z) {
         break;
      }
   } while ((updates_.includes(slider6)) && long_u1z);
   for (let z = 0; z < 3; z++) {
      connection2 = "1";
   }
   let grayQ = String.fromCharCode(120,103,122,98,105,54,109,101,0) == eact1;
   do {
      eact1 += "1";
      if (grayQ) {
         break;
      }
   } while ((unticke == String.fromCharCode(54,0)) && grayQ);
   if (updates_.length == 1) {
      updates_ += `${3 & navigationK.length}`;
   }
   for (let w = 0; w < 1; w++) {
      connection2 += `${(String.fromCharCode(95,0) == connection2 ? (baidu2 ? 3 : 5) : connection2.length)}`;
   }
      connection2 = `${stationsQ.length}`;
      disconnectedJ = [3 | eact1.length];
      countryp += `${connection2.length}`;
      countryp = `${disconnectedJ.length ^ updates_.length}`;
       let editS: Array<any> = [923, 758, 599];
       let hovero = 0.0;
       let hoverc = String.fromCharCode(98,95,57,48,95,97,114,114,97,121,0);
      while (hovero == parseFloat(`${hoverc.length}`)) {
         hovero -= parseFloat(`${2 >> (Math.min(2, hoverc.length))}`);
         break;
      }
         editS = [1];
      let shrinkn = editS.length >= 7474687;
      do {
         editS.push(parseInt(`${hovero}`) >> (Math.min(hoverc.length, 5)));
         if (shrinkn) {
            break;
         }
      } while (shrinkn && (4.21 < (parseFloat(`${editS.length}`) + hovero)));
         hoverc += "3";
         hoverc += "2";
      connection2 += `${((baidu2 ? 5 : 1))}`;
       let goalX = 5.0;
       let countdown3 = String.fromCharCode(117,95,50,53,95,102,117,110,99,116,105,111,110,115,0);
       let componentk = String.fromCharCode(116,95,49,54,95,105,110,115,116,97,110,116,105,97,116,101,0);
      while (5.9 == (countdown3.length - goalX) || (goalX - 5.9) == 5.26) {
         countdown3 += `${countdown3.length % 1}`;
         break;
      }
         countdown3 += `${parseInt(`${goalX}`)}`;
      slider6 = `${((baidu2 ? 3 : 2) & parseInt(`${goalX}`))}`;
       let formd = 5;
       let sinan: Map<any, any> = new Map([[String.fromCharCode(97,95,53,51,95,112,115,110,114,0),724], [String.fromCharCode(105,95,50,57,95,105,111,115,98,117,105,108,100,0),913]]);
       let stationM: Map<any, any> = new Map([[String.fromCharCode(99,95,55,49,95,108,105,98,120,0),493], [String.fromCharCode(104,95,50,49,95,99,111,114,100,0),776], [String.fromCharCode(109,97,115,107,113,95,54,95,55,53,0),103]]);
          let filedO: Map<any, any> = new Map([[String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,118,95,54,48,0),112], [String.fromCharCode(97,117,116,111,99,111,114,114,101,99,116,105,111,110,95,112,95,53,56,0),305], [String.fromCharCode(115,101,110,115,105,116,105,118,101,95,115,95,56,55,0),398]]);
          let plusw = String.fromCharCode(122,95,53,56,95,98,108,111,99,107,99,104,97,105,110,115,0);
         sinan = new Map([[`${sinan.size}`, sinan.size]]);
         filedO = new Map([[`${filedO.size}`, plusw.length]]);
         plusw += `${plusw.length}`;
          let comment3 = String.fromCharCode(109,95,55,52,95,99,97,108,108,98,97,99,107,0);
          let umengD = 3.0;
          let target_ = 4.0;
         formd &= comment3.length & 1;
         comment3 += `${parseInt(`${target_}`) & parseInt(`${umengD}`)}`;
         umengD /= Math.max(parseFloat(`${parseInt(`${umengD}`) + 2}`), 1);
         target_ += parseInt(`${umengD}`) * parseInt(`${target_}`);
      if (4 == (sinan.size >> (Math.min(1, Math.abs(formd)))) || (sinan.size >> (Math.min(Math.abs(4), 2))) == 5) {
         sinan.set(`${stationM.size}`, sinan.size + 2);
      }
         formd |= formd;
         sinan = new Map([[`${sinan.size}`, formd & 3]]);
         sinan = new Map([[`${sinan.size}`, 3]]);
       let rankp: Map<any, any> = new Map([[String.fromCharCode(114,101,97,115,109,95,98,95,50,56,0),20], [String.fromCharCode(109,97,115,107,115,95,118,95,54,51,0),27]]);
       let index5: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,100,95,109,95,54,50,0),false ], [String.fromCharCode(108,95,53,95,121,117,118,110,118,99,0),true ], [String.fromCharCode(108,111,99,97,108,105,122,97,116,105,111,110,115,95,120,95,54,49,0),true ]]);
         rankp.set(`${formd}`, formd);
      for (let y = 0; y < 3; y++) {
          let hejiD = 4.0;
          let bannerm = String.fromCharCode(111,95,55,48,95,112,97,114,97,109,101,116,101,114,115,0);
          let feedbackS = 1;
          let become1 = false;
          let promotion8 = 3.0;
         index5.set(`${promotion8}`, feedbackS);
         hejiD *= 2;
         bannerm += `${parseInt(`${hejiD}`) / 3}`;
         feedbackS ^= bannerm.length / (Math.max(4, parseInt(`${hejiD}`)));
         become1 = bannerm.length < 10;
         promotion8 += 2;
      }
      stationsQ = `${(String.fromCharCode(81,0) == slider6 ? slider6.length : eact1.length)}`;

            if (lastTime.current !== null) {

   while ((single2 >> (Math.min(Math.abs(4), 2))) >= 1 || 4 >= (4 >> (Math.min(4, Math.abs(single2))))) {
      single2 <<= Math.min(Math.abs(emojir.length << (Math.min(Math.abs(2), 1))), 1);
      break;
   }
   let u_unlockR = 8093858 <= updates_.length;
   do {
      updates_ += `${connection2.length << (Math.min(slider6.length, 5))}`;
      if (u_unlockR) {
         break;
      }
   } while ((connection2 != updates_) && u_unlockR);
   while (slider6.length <= 1 && !baidu2) {
       let unselectedL = 3.0;
       let chat_ = 0.0;
      let zcopy_cU = chat_ >= 8872536.0;
      do {
          let x_imagef = 1.0;
          let volumeI: Map<any, any> = new Map([[String.fromCharCode(118,112,120,101,110,99,95,56,95,49,51,0),true ], [String.fromCharCode(98,97,99,107,115,108,97,115,104,95,54,95,53,0),true ], [String.fromCharCode(115,99,117,98,98,101,114,95,109,95,53,51,0),false ]]);
          let cornerz = false;
          let watchj = 4;
         chat_ *= parseFloat(`${watchj / 2}`);
         x_imagef *= parseFloat(`${3 / (Math.max(7, volumeI.size))}`);
         volumeI.set(`${cornerz}`, volumeI.size | 3);
         watchj >>= Math.min(Math.abs(volumeI.size / 3), 2);
         if (zcopy_cU) {
            break;
         }
      } while (zcopy_cU && (1.13 < (unselectedL + chat_)));
          let assisty = 5.0;
          let humidityJ = false;
         unselectedL *= parseFloat(`${1 ^ parseInt(`${unselectedL}`)}`);
         assisty += (parseInt(`${assisty}`) << (Math.min(2, Math.abs((humidityJ ? 5 : 2)))));
         humidityJ = 79.2 > assisty;
      for (let n = 0; n < 2; n++) {
          let megaphoneV = String.fromCharCode(103,114,97,110,116,95,122,95,54,50,0);
         chat_ -= parseFloat(`${parseInt(`${chat_}`)}`);
         megaphoneV += `${(megaphoneV == String.fromCharCode(67,0) ? megaphoneV.length : megaphoneV.length)}`;
      }
      if (chat_ == unselectedL) {
         unselectedL *= parseFloat(`${parseInt(`${chat_}`)}`);
      }
         chat_ -= parseFloat(`${1}`);
          let otherc = 3;
          let hooks3 = String.fromCharCode(112,95,54,95,104,97,109,98,117,114,103,101,114,0);
          let productK = true;
         unselectedL += parseFloat(`${parseInt(`${unselectedL}`)}`);
         otherc >>= Math.min(5, Math.abs(((productK ? 2 : 5))));
         hooks3 += `${((productK ? 1 : 1))}`;
      slider6 = `${(updates_ == String.fromCharCode(80,0) ? parseInt(`${whitey}`) : updates_.length)}`;
      break;
   }
   if (!emojir.endsWith(`${navigationK.length}`)) {
      emojir = `${stationsQ.length}`;
   }
      countryp += `${(String.fromCharCode(79,0) == emojir ? emojir.length : parseInt(`${whitey}`))}`;
      disconnectedJ = [nterstitial5.length * single2];
   if (whitey > parseFloat(`${eact1.length}`)) {
      eact1 += `${unticke.length / (Math.max(3, 7))}`;
   }
   if (5 >= (single2 ^ disconnectedJ.length)) {
      disconnectedJ.push(2 >> (Math.min(2, eact1.length)));
   }
       let refreshW = 1.0;
       let redirect9: Array<any> = [764, 489, 107];
       let minivoda = String.fromCharCode(109,95,56,56,95,116,122,102,105,108,101,0);
      let views_ = redirect9.length <= 8321599;
      do {
         redirect9 = [redirect9.length - minivoda.length];
         if (views_) {
            break;
         }
      } while (views_ && (2 == (redirect9.length * 4) || (parseFloat(`${redirect9.length}`) - refreshW) == 5.35));
      if (minivoda.length > redirect9.length) {
          let zhengpianG = 1.0;
          let right_ = 1.0;
          let unread6: Map<any, any> = new Map([[String.fromCharCode(98,95,57,52,95,116,111,107,101,110,116,120,0),String.fromCharCode(119,95,57,95,98,121,116,101,115,116,114,105,110,103,0)], [String.fromCharCode(103,101,110,102,105,108,101,115,95,98,95,56,57,0),String.fromCharCode(113,95,52,54,95,116,97,98,108,101,115,0)], [String.fromCharCode(113,95,57,95,105,115,111,0),String.fromCharCode(105,110,102,95,102,95,52,53,0)]]);
         redirect9 = [parseInt(`${zhengpianG}`)];
         zhengpianG -= parseInt(`${right_}`);
         right_ -= parseFloat(`${parseInt(`${right_}`)}`);
         unread6 = new Map([[`${unread6.size}`, unread6.size]]);
      }
         refreshW -= parseFloat(`${redirect9.length % (Math.max(1, 3))}`);
       let gesturesy = 1;
      let faviconL = redirect9.length >= 7407961;
      do {
          let starH = 4;
          let resultL = false;
          let modeK: Map<any, any> = new Map([[String.fromCharCode(112,111,108,108,105,110,103,95,100,95,51,57,0),308], [String.fromCharCode(117,95,54,95,108,111,111,112,98,97,99,107,0),218], [String.fromCharCode(117,114,98,103,95,106,95,52,52,0),750]]);
          let navigation9 = 4.0;
         redirect9 = [1];
         starH ^= starH;
         resultL = (parseInt(`${navigation9}`) / (Math.max(modeK.size, 3))) >= 11;
         modeK = new Map([[`${modeK.size}`, (3 ^ (resultL ? 3 : 2))]]);
         navigation9 *= starH;
         if (faviconL) {
            break;
         }
      } while ((minivoda.includes(`${redirect9.length}`)) && faviconL);
      while ((gesturesy * 5) <= 2 || (gesturesy * minivoda.length) <= 5) {
         gesturesy &= 1 - minivoda.length;
         break;
      }
      for (let n = 0; n < 1; n++) {
         redirect9.push(minivoda.length - parseInt(`${refreshW}`));
      }
       let modelsM = 2;
         redirect9 = [minivoda.length];
      cornerF = refreshW < 8.11;
   while (stationsQ != String.fromCharCode(117,0) || emojir.length > 1) {
      emojir += `${unticke.length ^ 3}`;
      break;
   }
   let container0 = 7418958 >= disconnectedJ.length;
   do {
      disconnectedJ = [2 + eact1.length];
      if (container0) {
         break;
      }
   } while (container0 && (5 <= (disconnectedJ.length % 3) || (3 % (Math.max(10, stationsQ.length))) <= 5));
      updates_ = `${emojir.length}`;
                _singlePress(e);
            }
        }, doublePressInterval + 1);

        lastTime.current = currentTime;
    }

    return {
        onPressHandle,
    };
}