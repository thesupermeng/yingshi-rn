import React, { useEffect, useState } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import PanHandler from './s_shrink_ticked';
import SystemSetting from 'react-native-system-setting';

type XFillButton = {
    onChangeVolume: (params: any) => any,
    onTouchScreen: () => any
}

const steps = 1;

export default ({ onChangeVolume, onTouchScreen }: XFillButton) => {

    const [startY, setStartY] = useState(0)
    const [endY, setEndY] = useState(0)

    const onScreenTouched = () => {
       let animation7: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,115,116,97,109,112,95,102,95,55,56,0),536], [String.fromCharCode(108,111,99,107,110,101,115,115,95,54,95,53,49,0),311]]);
    let acceptedP = String.fromCharCode(116,104,114,101,97,100,115,108,105,99,101,95,106,95,56,54,0);
    let screenz = 4.0;
    let tooltips7 = 0.0;
    let verticalS = false;
    let containerj = 1.0;
    let minix = String.fromCharCode(105,115,101,120,112,108,97,105,110,95,117,95,49,52,0);
    let confirmationU = 3.0;
    let albumz = false;
    let minivodj = String.fromCharCode(105,110,102,101,114,95,122,95,57,56,0);
   let whiteK = verticalS ? !verticalS : verticalS;
   do {
       let searchbarf = String.fromCharCode(116,111,107,101,104,95,105,95,57,0);
       let checkboxe = String.fromCharCode(97,95,54,51,95,112,97,108,109,0);
       let redirectE = 5.0;
       let graye: Map<any, any> = new Map([[String.fromCharCode(105,95,54,52,95,109,97,116,99,104,101,0),false ], [String.fromCharCode(116,95,57,57,95,99,116,105,118,105,116,121,0),true ]]);
       let playlistB = false;
       let areaT = 0.0;
      let combinedv = redirectE <= 5614600.0;
      do {
          let optionsi = 1.0;
          let whitef = 5;
          let gemfileL: Map<any, any> = new Map([[String.fromCharCode(98,105,110,100,108,105,115,116,95,113,95,57,50,0),String.fromCharCode(109,117,108,109,111,100,95,112,95,51,53,0)], [String.fromCharCode(115,116,121,108,101,100,95,101,95,56,53,0),String.fromCharCode(99,111,112,121,120,95,112,95,50,52,0)], [String.fromCharCode(109,105,103,104,116,95,110,95,50,57,0),String.fromCharCode(105,95,53,51,95,114,117,110,110,105,110,103,0)]]);
         redirectE /= Math.max(parseFloat(`${gemfileL.size}`), 5);
         optionsi *= parseFloat(`${whitef >> (Math.min(Math.abs(parseInt(`${optionsi}`)), 2))}`);
         whitef *= parseInt(`${optionsi}`);
         gemfileL = new Map([[`${whitef}`, whitef << (Math.min(Math.abs(parseInt(`${optionsi}`)), 3))]]);
         if (combinedv) {
            break;
         }
      } while ((1.39 < redirectE) && combinedv);
      while (4 == searchbarf.length) {
         checkboxe += `${parseInt(`${areaT}`) & 3}`;
         break;
      }
       let orientationM = 4.0;
      for (let x = 0; x < 2; x++) {
          let u_titleR = false;
          let flyert = String.fromCharCode(104,95,54,54,95,114,101,97,115,115,111,99,105,97,116,101,0);
          let trasht = String.fromCharCode(115,110,112,114,105,110,116,102,95,48,95,51,0);
         orientationM += (trasht == String.fromCharCode(65,0) ? trasht.length : checkboxe.length);
         u_titleR = flyert.length > 49 || u_titleR;
         flyert = `${(String.fromCharCode(104,0) == flyert ? (u_titleR ? 4 : 5) : flyert.length)}`;
      }
         searchbarf += `${graye.size * parseInt(`${areaT}`)}`;
      for (let e = 0; e < 2; e++) {
         orientationM /= Math.max(2, parseInt(`${redirectE}`));
      }
         areaT -= 2;
          let placementI = String.fromCharCode(104,101,118,99,100,115,112,95,119,95,53,0);
          let live_ = String.fromCharCode(114,95,51,95,112,97,100,100,105,110,103,0);
          let questS = false;
         playlistB = checkboxe.includes(`${orientationM}`);
         placementI = `${(live_.length & (questS ? 1 : 2))}`;
         live_ = "1";
          let themeF: Map<any, any> = new Map([[String.fromCharCode(97,95,51,55,95,101,110,99,111,100,101,105,110,116,114,97,0),String.fromCharCode(105,110,118,105,116,101,100,95,108,95,52,52,0)], [String.fromCharCode(105,110,116,101,114,114,117,112,116,105,98,108,101,95,115,95,53,54,0),String.fromCharCode(108,97,112,112,101,100,95,103,95,57,49,0)]]);
          let brightnessv = 5;
          let anythinkO = 0.0;
         orientationM /= Math.max(4, parseInt(`${areaT}`) / 3);
         themeF.set(`${brightnessv}`, themeF.size << (Math.min(4, Math.abs(brightnessv))));
         anythinkO -= parseInt(`${anythinkO}`) ^ 1;
         orientationM /= Math.max(3, parseInt(`${areaT}`) & 2);
          let lightP: Map<any, any> = new Map([[String.fromCharCode(105,95,56,52,95,110,105,98,0),String.fromCharCode(98,114,111,119,110,95,52,95,52,52,0)], [String.fromCharCode(113,117,111,116,101,115,95,116,95,57,49,0),String.fromCharCode(99,111,108,117,109,110,115,95,99,95,55,53,0)], [String.fromCharCode(100,95,54,57,95,111,118,101,114,0),String.fromCharCode(120,95,49,49,95,108,105,98,115,119,105,102,116,0)]]);
          let scoret = false;
          let bellU = String.fromCharCode(118,95,53,57,95,97,115,107,105,110,103,0);
         playlistB = 69 < lightP.size && 90.19 < orientationM;
         lightP.set(`${scoret}`, (String.fromCharCode(121,0) == bellU ? (scoret ? 5 : 3) : bellU.length));
      while (checkboxe.endsWith(`${areaT}`)) {
         checkboxe = `${parseInt(`${areaT}`)}`;
         break;
      }
         searchbarf += `${parseInt(`${orientationM}`) | 3}`;
         checkboxe += `${parseInt(`${areaT}`)}`;
      verticalS = !verticalS;
      if (whiteK) {
         break;
      }
   } while (whiteK && (!verticalS));
   for (let l = 0; l < 1; l++) {
       let starL: Map<any, any> = new Map([[String.fromCharCode(100,95,54,50,95,98,105,113,117,97,100,0),101], [String.fromCharCode(108,111,119,95,53,95,53,51,0),154]]);
      while (5 >= starL.size) {
          let crownF = 4;
          let selectw: Array<any> = [String.fromCharCode(107,95,51,48,95,104,111,108,108,111,119,0), String.fromCharCode(106,95,49,95,97,117,120,0), String.fromCharCode(99,101,108,102,95,102,95,50,55,0)];
          let scheduleH = String.fromCharCode(113,95,49,48,48,95,108,105,98,118,101,114,115,105,111,110,0);
          let predictionW = String.fromCharCode(109,105,103,114,97,116,101,100,95,106,95,50,54,0);
         starL = new Map([[`${starL.size}`, crownF]]);
         crownF %= Math.max(selectw.length, 5);
         selectw.push(selectw.length);
         scheduleH += `${3 << (Math.min(4, selectw.length))}`;
         predictionW = `${scheduleH.length}`;
         break;
      }
      while ((starL.size >> (Math.min(Math.abs(starL.size), 1))) >= 2 || 4 >= (2 >> (Math.min(5, Math.abs(starL.size))))) {
         starL = new Map([[`${starL.size}`, starL.size]]);
         break;
      }
      if (Array.from(starL.keys()).includes(`${starL.size}`)) {
          let settingsH = String.fromCharCode(103,101,116,114,97,110,100,111,109,95,102,95,51,56,0);
          let currentH: Map<any, any> = new Map([[String.fromCharCode(101,110,115,117,114,101,95,56,95,57,56,0),798], [String.fromCharCode(106,95,56,50,95,102,116,118,108,105,110,107,0),332]]);
          let controlsZ = String.fromCharCode(102,95,56,53,95,115,117,98,99,111,101,102,115,0);
         starL = new Map([[`${currentH.size}`, starL.size]]);
         settingsH = `${2 / (Math.max(10, settingsH.length))}`;
         currentH = new Map([[controlsZ, controlsZ.length / (Math.max(2, 6))]]);
      }
      containerj -= parseFloat(`${2 ^ acceptedP.length}`);
   }
   if (5.83 >= (screenz - 4.30) || (3 - parseInt(`${screenz}`)) >= 1) {
      minix += `${(animation7.size >> (Math.min(1, Math.abs((verticalS ? 4 : 4)))))}`;
   }
       let transfero: Map<any, any> = new Map([[String.fromCharCode(99,104,114,111,109,97,104,111,108,100,95,56,95,49,57,0),319], [String.fromCharCode(111,99,99,117,114,114,101,110,99,101,115,95,97,95,52,57,0),568], [String.fromCharCode(116,95,55,50,95,99,111,109,112,101,110,115,97,116,101,0),502]]);
          let controlsZH = true;
          let faviconJ: Map<any, any> = new Map([[String.fromCharCode(100,95,57,52,95,118,112,100,115,112,0),713], [String.fromCharCode(98,111,100,105,101,115,95,101,95,55,56,0),287], [String.fromCharCode(108,95,50,50,95,108,112,99,108,115,112,0),886]]);
          let sideW = 0;
         transfero = new Map([[`${faviconJ.size}`, faviconJ.size % 1]]);
         controlsZH = sideW >= 76 && sideW >= 76;
      let thumbnailq = 9627727 <= transfero.size;
      do {
          let actionsJ = 5;
          let anythinkB = 2;
          let optionsY = String.fromCharCode(120,98,105,110,95,106,95,49,49,0);
          let roomu = true;
          let expand0: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,118,97,116,101,100,95,100,95,53,54,0),false ], [String.fromCharCode(103,95,53,95,115,97,118,101,105,0),true ]]);
         transfero.set(`${roomu}`, 3 / (Math.max(9, transfero.size)));
         actionsJ <<= Math.min(optionsY.length, 5);
         anythinkB ^= optionsY.length & anythinkB;
         expand0.set(optionsY, 3);
         if (thumbnailq) {
            break;
         }
      } while ((Array.from(transfero.keys()).includes(`${transfero.size}`)) && thumbnailq);
         transfero = new Map([[`${transfero.size}`, 1 - transfero.size]]);
      animation7 = new Map([[minix, acceptedP.length - minix.length]]);
   while ((screenz / (Math.max(minix.length, 3))) <= 2.67 && (screenz / 2.67) <= 1.77) {
      screenz += animation7.size;
      break;
   }
   while (minix.length == parseInt(`${confirmationU}`)) {
      minix = `${acceptedP.length / (Math.max(2, 1))}`;
      break;
   }
   for (let t = 0; t < 1; t++) {
       let selectS = 4.0;
       let sourcez = String.fromCharCode(109,95,49,95,106,99,104,117,102,102,0);
       let cornerw = String.fromCharCode(103,97,109,109,97,95,53,95,56,49,0);
       let half5 = String.fromCharCode(121,95,51,52,95,99,111,108,115,0);
       let lineG = 3.0;
         sourcez = `${3 << (Math.min(Math.abs(parseInt(`${lineG}`)), 5))}`;
          let areaO = 5.0;
          let closef = 3;
          let guide4: Array<any> = [485, 429];
         half5 += `${(half5 == String.fromCharCode(88,0) ? half5.length : parseInt(`${areaO}`))}`;
         areaO /= Math.max(parseFloat(`${guide4.length | 3}`), 1);
         closef &= guide4.length % (Math.max(1, 2));
       let canvasD = 1.0;
         canvasD *= parseFloat(`${parseInt(`${selectS}`) | 2}`);
          let benefitF: Array<any> = [773, 39];
         canvasD *= (parseFloat(`${cornerw == String.fromCharCode(78,0) ? cornerw.length : parseInt(`${selectS}`)}`));
         benefitF.push(1);
       let resultV = true;
         lineG /= Math.max(parseFloat(`${half5.length}`), 1);
       let zhengpianf: Map<any, any> = new Map([[String.fromCharCode(116,117,114,98,111,106,112,101,103,95,99,95,57,53,0),String.fromCharCode(100,95,53,95,97,114,116,105,115,116,0)], [String.fromCharCode(97,108,116,101,114,97,98,108,101,95,115,95,50,56,0),String.fromCharCode(100,111,116,116,101,100,95,104,95,52,57,0)]]);
      for (let i = 0; i < 3; i++) {
         sourcez += `${1 & parseInt(`${canvasD}`)}`;
      }
       let fastforwardQ = String.fromCharCode(102,95,54,49,95,120,115,117,98,0);
       let pressure9 = String.fromCharCode(111,95,50,53,95,97,99,115,107,105,112,0);
      if (1 >= half5.length || pressure9 != String.fromCharCode(106,0)) {
          let schedulet = String.fromCharCode(97,95,49,48,48,95,115,116,111,112,0);
         pressure9 = `${parseInt(`${canvasD}`) - zhengpianf.size}`;
         schedulet = `${(String.fromCharCode(78,0) == schedulet ? schedulet.length : schedulet.length)}`;
      }
         canvasD += parseFloat(`${zhengpianf.size}`);
      while (!pressure9.includes(`${zhengpianf.size}`)) {
          let invitez = String.fromCharCode(101,95,54,53,95,117,110,116,114,97,99,107,0);
          let transfery = 4.0;
         pressure9 += `${(fastforwardQ == String.fromCharCode(116,0) ? fastforwardQ.length : (resultV ? 1 : 5))}`;
         invitez += `${(String.fromCharCode(90,0) == invitez ? parseInt(`${transfery}`) : invitez.length)}`;
         transfery -= parseInt(`${transfery}`) % (Math.max(invitez.length, 8));
         break;
      }
      while (5 <= (1 * sourcez.length)) {
         sourcez = `${half5.length}`;
         break;
      }
         resultV = 5.90 == (lineG + selectS);
      containerj *= parseFloat(`${parseInt(`${tooltips7}`) | minix.length}`);
   }
       let favicono = 0.0;
       let h_lockS: Array<any> = [String.fromCharCode(101,109,98,101,100,95,104,95,50,55,0), String.fromCharCode(120,95,51,51,95,98,114,97,110,99,104,0), String.fromCharCode(107,95,49,49,95,97,112,112,108,105,101,115,0)];
       let verticalW: Array<any> = [496, 769, 868];
      if (h_lockS.includes(favicono)) {
         favicono *= parseFloat(`${parseInt(`${favicono}`) - verticalW.length}`);
      }
      while (4.37 <= (3.72 * favicono) && 5.74 <= (3.72 * favicono)) {
          let progressO = 5;
         h_lockS = [parseInt(`${favicono}`) << (Math.min(4, Math.abs(2)))];
         progressO += progressO;
         break;
      }
      confirmationU += parseInt(`${tooltips7}`) / 2;
   while (acceptedP.includes(minix)) {
       let footballi = 2.0;
          let popupZ = String.fromCharCode(108,97,100,100,101,114,115,116,101,112,95,56,95,56,55,0);
          let fillP = 1;
         footballi -= parseFloat(`${popupZ.length * 3}`);
         popupZ += `${fillP}`;
          let modelsx = 0.0;
         footballi += parseFloat(`${parseInt(`${footballi}`) >> (Math.min(Math.abs(parseInt(`${modelsx}`)), 5))}`);
         footballi += parseFloat(`${parseInt(`${footballi}`)}`);
      acceptedP = `${minix.length}`;
      break;
   }
   while (verticalS) {
      verticalS = 3.80 <= (containerj / (Math.max(2, tooltips7)));
      break;
   }
      confirmationU /= Math.max(((verticalS ? 4 : 5) * parseInt(`${screenz}`)), 2);
      screenz += animation7.size << (Math.min(Math.abs(3), 1));
       let yellowP = 2;
       let largeW = 4.0;
       let navigationG = 1;
      while ((navigationG % 3) > 2 || 1 > (navigationG ^ 3)) {
          let humidityd = String.fromCharCode(114,95,53,50,95,114,105,110,103,116,111,110,101,115,0);
          let filed8 = String.fromCharCode(98,117,116,116,111,110,115,95,106,95,56,54,0);
          let collectionT = String.fromCharCode(99,98,114,116,95,116,95,51,51,0);
          let bodanp = 4.0;
          let combinedy = String.fromCharCode(117,110,108,105,109,105,116,101,100,95,110,95,55,57,0);
         largeW *= 2;
         humidityd = `${humidityd.length % (Math.max(filed8.length, 8))}`;
         filed8 += `${combinedy.length}`;
         collectionT = "2";
         bodanp += parseFloat(`${parseInt(`${bodanp}`) | 1}`);
         combinedy += `${combinedy.length - humidityd.length}`;
         break;
      }
      while ((largeW + 4.5) < 4.86 && 1.57 < (largeW + 4.5)) {
         largeW *= navigationG;
         break;
      }
       let skipK = 3.0;
       let refreshQ = 0.0;
      if (5 > (4 - yellowP) && (yellowP - navigationG) > 4) {
          let downloadedW = 5.0;
          let castingz = String.fromCharCode(111,95,55,95,114,101,116,97,105,110,0);
          let windv = 1.0;
         navigationG &= 1 / (Math.max(parseInt(`${skipK}`), 5));
         downloadedW += 3;
         castingz += `${parseInt(`${downloadedW}`)}`;
         windv += castingz.length & parseInt(`${downloadedW}`);
      }
         refreshQ -= parseInt(`${largeW}`);
      if (4 == (navigationG & 4) && (navigationG & yellowP) == 4) {
         yellowP -= 2 + parseInt(`${refreshQ}`);
      }
          let vietnamE: Map<any, any> = new Map([[String.fromCharCode(110,95,49,48,95,115,116,97,114,116,105,110,103,0),true ], [String.fromCharCode(99,95,50,50,95,104,97,110,100,108,101,114,0),false ]]);
         refreshQ /= Math.max(2, yellowP);
         vietnamE.set(`${vietnamE.size}`, vietnamE.size);
      if (navigationG > largeW) {
         largeW -= navigationG;
      }
      while (yellowP < navigationG) {
          let loginw = 4.0;
          let referrer0 = String.fromCharCode(108,95,57,55,95,109,101,109,99,109,112,0);
          let vietnam0 = false;
         yellowP -= yellowP ^ 2;
         loginw *= (parseFloat(`${referrer0 == String.fromCharCode(88,0) ? referrer0.length : (vietnam0 ? 2 : 2)}`));
         vietnam0 = !vietnam0;
         break;
      }
      verticalS = acceptedP == String.fromCharCode(53,0);
      containerj -= parseFloat(`${parseInt(`${screenz}`)}`);
   for (let w = 0; w < 3; w++) {
      confirmationU += parseInt(`${screenz}`) & 3;
   }
   for (let m = 0; m < 3; m++) {
      containerj /= Math.max(1, (parseFloat(`${(verticalS ? 5 : 3) % (Math.max(acceptedP.length, 3))}`)));
   }
      screenz /= Math.max(2, minix.length);

        onTouchScreen();
    }

    const onVolumeChanged = async (val: number) => {
        const currVolume = await SystemSetting.getVolume();
        val = val > 0 ? currVolume + 1 / steps : currVolume - 1 / steps;
        val = Math.min(1, Math.max(0, val));

        onChangeVolume(parseFloat(val.toFixed(2)));

        SystemSetting.setVolume(val);
        return;
    }

    return (
        <PanHandler step={1} onTouch={onScreenTouched} onChange={onVolumeChanged} />
    )
}

const styles = StyleSheet.create({

});