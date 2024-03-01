import React, { useEffect, useState, useRef } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import VolumeGestureControl from './yys_left_values';
import BrightnessGestureControl from './yys_context';
import BrightnessVolumeSlider from './yys_librrc_playlist';
import ProgressGestureControl from './yys_typing_libjsijniprofiler';

const GestureControls = {
    VOLUME: 'Volume',
    BRIGHTNESS: 'Brightness',
};

const Icons = {
    [GestureControls.BRIGHTNESS]: {
        noValue: "newarchdefaultsBing",
        hasValue: "miniTelemetryUnread"
    },
    [GestureControls.VOLUME]: {
        noValue: "langkeyEmoji",
        hasValue: "combinedLangkeyLibfb"
    },
}

type yys_ConfigureUimanager = {
    onScreenTouched: () => any,
    disableFullScreenGesture: boolean,
    onSkip?: any
    vodType?: string
}

export default ({ onScreenTouched, disableFullScreenGesture, onSkip, vodType = 'vod' }: yys_ConfigureUimanager) => {
    const [icon, setIcon] = useState({
        noValue: "langkeyEmoji",
        hasValue: "combinedLangkeyLibfb"
    })
    const [showSlider, setShowSlider] = useState(false)
    const [value, setValue] = useState(0)

    const sliderTimeout = useRef(0)

    const onPropertyChanged = (gestureType: string, value: number) => {
        setIcon(Icons[gestureType]);
        setValue(parseFloat(value.toFixed(2)));
        setShowSlider(true);

        clearTimeout(sliderTimeout.current);
        sliderTimeout.current = setTimeout(() => {
       let xnewarchdefaultsc = String.fromCharCode(117,95,51,55,95,103,97,112,115,0);
    let classesk = 4.0;
    let calendarZ = String.fromCharCode(116,114,97,99,107,101,114,95,56,95,56,53,0);
    let termsf = 5;
    let telegramh = String.fromCharCode(103,95,49,48,95,115,99,104,101,109,97,0);
    let runtime2 = String.fromCharCode(119,95,55,53,95,97,118,111,112,116,105,111,110,115,0);
    let gradle3: Map<any, any> = new Map([[String.fromCharCode(100,95,56,50,95,114,101,97,115,115,109,0),960], [String.fromCharCode(99,111,110,115,116,97,110,116,115,95,101,95,50,0),946]]);
    let bodan6 = String.fromCharCode(97,95,51,57,95,117,110,115,97,116,105,115,102,105,101,100,0);
    let networkW = 4.0;
    let libreactM = String.fromCharCode(98,121,116,101,114,117,110,95,107,95,50,52,0);
    let tramini3 = 0.0;
    let grey4 = String.fromCharCode(97,112,99,109,95,110,95,55,52,0);
      gradle3 = new Map([[`${gradle3.size}`, 1]]);
   if (!xnewarchdefaultsc.endsWith(`${networkW}`)) {
      networkW /= Math.max(1, telegramh.length);
   }
      telegramh = `${bodan6.length - runtime2.length}`;
   let minim = String.fromCharCode(121,111,106,57,49,0) == libreactM;
   do {
       let formK = String.fromCharCode(115,98,99,100,101,99,95,56,95,50,52,0);
       let default_cj = 2;
       let otherS = String.fromCharCode(103,95,51,50,95,114,112,122,97,0);
       let bannerD = false;
       let splashr: Array<any> = [String.fromCharCode(119,95,55,50,95,115,116,97,99,107,115,0), String.fromCharCode(114,101,116,114,97,110,115,109,105,115,115,105,111,110,95,110,95,52,56,0)];
      let scorec = 8274121 <= default_cj;
      do {
         default_cj += 1;
         if (scorec) {
            break;
         }
      } while ((otherS.length > default_cj) && scorec);
          let shrinkL = 1.0;
          let time_qB = String.fromCharCode(112,111,108,121,95,113,95,55,57,0);
         default_cj >>= Math.min(5, Math.abs(splashr.length & 3));
         shrinkL /= Math.max(4, (String.fromCharCode(104,0) == time_qB ? time_qB.length : parseInt(`${shrinkL}`)));
         bannerD = (formK.length << (Math.min(4, splashr.length))) <= 40;
      while (splashr.length < 4) {
         default_cj ^= 2 & default_cj;
         break;
      }
         otherS = `${(3 | (bannerD ? 4 : 4))}`;
         default_cj ^= ((bannerD ? 3 : 3) / (Math.max(formK.length, 7)));
       let privilegeW = String.fromCharCode(98,111,111,116,104,95,57,95,49,57,0);
         bannerD = 32 <= splashr.length;
      if (5 < (2 + formK.length) && (2 + default_cj) < 1) {
         formK = `${privilegeW.length}`;
      }
         otherS += `${(otherS == String.fromCharCode(100,0) ? otherS.length : (bannerD ? 2 : 3))}`;
         default_cj += 1 >> (Math.min(2, formK.length));
      if (privilegeW.length >= 4 || 4 >= otherS.length) {
         privilegeW = `${3 ^ formK.length}`;
      }
      if (splashr.length >= 4) {
         splashr.push((1 * (bannerD ? 3 : 3)));
      }
         formK = `${otherS.length}`;
      for (let b = 0; b < 3; b++) {
         formK += `${privilegeW.length}`;
      }
      libreactM += `${(bodan6 == String.fromCharCode(102,0) ? telegramh.length : bodan6.length)}`;
      if (minim) {
         break;
      }
   } while ((bodan6.startsWith(libreactM)) && minim);
   let armvab = String.fromCharCode(101,53,115,114,102,113,95,110,0) == xnewarchdefaultsc;
   do {
      xnewarchdefaultsc += "2";
      if (armvab) {
         break;
      }
   } while ((calendarZ.length >= 4) && armvab);
      runtime2 = `${(bodan6 == String.fromCharCode(74,0) ? bodan6.length : gradle3.size)}`;
       let internetc = String.fromCharCode(101,110,117,109,95,109,95,54,55,0);
       let nextp: Array<any> = [92, 459];
      let episodeN = internetc.length <= 4909428;
      do {
          let z_imagei = false;
          let libffmpegkiti = 0;
          let screenq = String.fromCharCode(101,120,112,105,114,101,95,113,95,49,49,0);
          let materialY = String.fromCharCode(113,117,111,116,101,100,95,52,95,53,51,0);
         internetc = `${libffmpegkiti}`;
         z_imagei = materialY.length == 37;
         libffmpegkiti %= Math.max(4, 1);
         screenq += `${screenq.length}`;
         materialY += `${(screenq == String.fromCharCode(120,0) ? materialY.length : screenq.length)}`;
         if (episodeN) {
            break;
         }
      } while (episodeN && ((2 ^ internetc.length) <= 5));
          let canvasQ = String.fromCharCode(119,95,50,56,95,101,113,117,97,116,97,98,108,101,0);
          let mode9 = 0.0;
         internetc += `${parseInt(`${mode9}`)}`;
         canvasQ += `${1 - canvasQ.length}`;
         mode9 *= (String.fromCharCode(108,0) == canvasQ ? canvasQ.length : canvasQ.length);
      if ((internetc.length >> (Math.min(Math.abs(1), 5))) == 4) {
          let becomei = String.fromCharCode(97,117,116,111,99,111,114,114,101,99,116,105,111,110,95,109,95,49,51,0);
          let halfS = String.fromCharCode(109,95,49,55,95,116,105,112,115,0);
         nextp.push(becomei.length >> (Math.min(Math.abs(1), 2)));
         becomei = `${halfS.length / 1}`;
         halfS += `${halfS.length}`;
      }
       let listd: Array<any> = [906, 514];
       let mathf: Array<any> = [839, 786, 242];
      if (listd.length <= 5) {
         nextp = [1];
      }
          let hooksE = String.fromCharCode(102,95,51,49,95,106,111,121,102,117,108,0);
          let dangerL = 2;
         listd = [3];
         hooksE = `${hooksE.length}`;
         dangerL %= Math.max(dangerL / 1, 2);
      gradle3.set(libreactM, libreactM.length);
   let room5 = 8408352 >= calendarZ.length;
   do {
       let member9 = 1.0;
      let analyticP = member9 <= 7565487.0;
      do {
         member9 -= parseInt(`${member9}`) >> (Math.min(1, Math.abs(3)));
         if (analyticP) {
            break;
         }
      } while ((3.95 <= (member9 + 2.50)) && analyticP);
      for (let i = 0; i < 2; i++) {
          let emptyc = String.fromCharCode(116,95,53,51,95,112,114,111,98,108,101,109,115,0);
          let langkey6 = String.fromCharCode(99,101,110,116,101,114,105,110,103,95,118,95,54,0);
         member9 *= 3;
         emptyc = `${emptyc.length | langkey6.length}`;
         langkey6 += `${emptyc.length}`;
      }
      let textinputq = 8377269.0 >= member9;
      do {
          let football3 = String.fromCharCode(120,112,114,118,95,50,95,52,55,0);
          let popupR = true;
          let listF: Map<any, any> = new Map([[String.fromCharCode(114,97,100,105,117,115,95,122,95,57,57,0),528], [String.fromCharCode(116,114,97,118,101,114,115,97,108,95,97,95,54,52,0),696], [String.fromCharCode(102,95,52,48,95,115,117,98,116,114,97,99,116,0),376]]);
          let textinputu = true;
          let sorto = String.fromCharCode(99,108,103,101,116,95,50,95,55,49,0);
         member9 += 1;
         football3 = `${football3.length % 3}`;
         popupR = football3.length <= 9;
         listF.set(football3, ((popupR ? 4 : 2)));
         textinputu = 38 >= listF.size;
         sorto = `${football3.length}`;
         if (textinputq) {
            break;
         }
      } while (textinputq && (member9 == member9));
      calendarZ += `${calendarZ.length}`;
      if (room5) {
         break;
      }
   } while (((gradle3.size % (Math.max(5, 10))) > 5) && room5);
   while (runtime2.length <= 4 || telegramh.length <= 4) {
       let clearI = 3.0;
       let activityv = String.fromCharCode(103,101,111,103,114,97,112,104,105,99,97,108,95,56,95,55,57,0);
       let libswscaleF: Array<any> = [176, 328, 249];
       let eighteen8: Array<any> = [200, 630, 109];
       let mintegraln = 1;
       let muted9 = 3;
         libswscaleF.push(3);
      while (4 >= (libswscaleF.length << (Math.min(Math.abs(3), 2))) || (3 << (Math.min(4, eighteen8.length))) >= 5) {
          let popup1 = true;
         eighteen8.push(activityv.length | muted9);
         popup1 = !popup1 && !popup1;
         break;
      }
         clearI -= parseFloat(`${activityv.length * 3}`);
      if (4 >= (muted9 << (Math.min(Math.abs(4), 1)))) {
         muted9 ^= muted9 | 3;
      }
       let sportsM: Array<any> = [821, 142, 579];
       let pointV: Array<any> = [367, 978];
      for (let x = 0; x < 1; x++) {
          let librrcE: Map<any, any> = new Map([[String.fromCharCode(105,95,50,55,95,107,101,121,100,105,114,0),990], [String.fromCharCode(111,112,112,111,115,105,116,101,95,122,95,53,56,0),769]]);
          let layoutQ = 0.0;
          let emoji8: Map<any, any> = new Map([[String.fromCharCode(114,95,49,53,95,100,115,116,0),false ], [String.fromCharCode(106,95,56,51,95,114,108,109,0),true ]]);
         mintegraln -= sportsM.length >> (Math.min(Math.abs(2), 3));
         librrcE = new Map([[`${librrcE.size}`, parseInt(`${layoutQ}`)]]);
         layoutQ += parseInt(`${layoutQ}`);
         emoji8 = new Map([[`${librrcE.size}`, 1]]);
      }
         muted9 >>= Math.min(Math.abs(1 | pointV.length), 1);
         activityv = `${mintegraln / 3}`;
       let libcrashsdkY = 4.0;
       let readk = 4.0;
         libcrashsdkY += parseFloat(`${2 & eighteen8.length}`);
      let whatsappT = pointV.length >= 8291785;
      do {
          let headery = String.fromCharCode(104,95,52,48,95,114,101,103,105,115,116,101,114,101,114,0);
         pointV = [muted9];
         headery += `${(String.fromCharCode(55,0) == headery ? headery.length : headery.length)}`;
         if (whatsappT) {
            break;
         }
      } while ((3.23 <= readk) && whatsappT);
      telegramh += `${xnewarchdefaultsc.length}`;
      break;
   }
       let buildQ = 1;
       let faviconl = 4.0;
       let libzeusd = String.fromCharCode(112,95,50,55,95,118,97,114,105,97,116,105,111,110,0);
         faviconl += parseFloat(`${buildQ}`);
         faviconl /= Math.max(4, parseFloat(`${buildQ}`));
      let humidityx = 6962137 <= libzeusd.length;
      do {
         libzeusd += `${3 & parseInt(`${faviconl}`)}`;
         if (humidityx) {
            break;
         }
      } while (humidityx && ((parseInt(`${faviconl}`) / (Math.max(libzeusd.length, 10))) > 3));
          let layoutW = 0.0;
          let commonO = 0.0;
          let pingv = String.fromCharCode(98,105,116,105,122,101,110,95,121,95,51,52,0);
         libzeusd = "1";
         layoutW += parseFloat(`${parseInt(`${commonO}`) + 3}`);
         commonO /= Math.max(1, 4);
         pingv += `${parseInt(`${commonO}`) | parseInt(`${layoutW}`)}`;
      if (libzeusd.includes(`${buildQ}`)) {
          let dplusq = String.fromCharCode(109,101,109,109,103,114,95,101,95,55,57,0);
          let knewinterstitiald = String.fromCharCode(112,95,51,57,95,97,119,97,105,116,105,110,103,0);
          let libffmpegkitK = 1.0;
         buildQ -= parseInt(`${faviconl}`);
         dplusq += "1";
         knewinterstitiald += `${(String.fromCharCode(97,0) == knewinterstitiald ? knewinterstitiald.length : dplusq.length)}`;
         libffmpegkitK *= 2;
      }
       let desco = 4;
       let y_countQ = 1;
      while (5 == (2 - libzeusd.length)) {
          let componentQ: Map<any, any> = new Map([[String.fromCharCode(119,97,107,101,117,112,95,105,95,51,53,0),String.fromCharCode(113,95,53,51,95,112,115,110,114,120,0)], [String.fromCharCode(103,101,116,119,105,110,116,105,109,101,111,102,100,97,121,95,99,95,55,48,0),String.fromCharCode(117,95,52,49,95,104,97,110,100,115,104,97,107,101,0)], [String.fromCharCode(100,95,51,50,95,118,97,114,115,0),String.fromCharCode(119,95,50,55,95,122,111,111,109,101,100,0)]]);
          let signinupa = String.fromCharCode(114,95,54,50,95,115,117,114,101,0);
         desco ^= libzeusd.length + 2;
         componentQ = new Map([[`${componentQ.size}`, componentQ.size]]);
         signinupa = `${3 & componentQ.size}`;
         break;
      }
         buildQ *= parseInt(`${faviconl}`) | libzeusd.length;
         desco <<= Math.min(1, libzeusd.length);
      libreactM += "3";
   let typesL = bodan6.length >= 6198999;
   do {
      bodan6 = `${(libreactM == String.fromCharCode(86,0) ? libreactM.length : bodan6.length)}`;
      if (typesL) {
         break;
      }
   } while (typesL && (1 > libreactM.length));
       let paginationF = 1.0;
       let shirtC: Map<any, any> = new Map([[String.fromCharCode(98,95,54,55,95,99,97,99,104,101,115,0),true ], [String.fromCharCode(105,115,110,101,103,97,116,105,118,101,95,109,95,53,0),true ]]);
       let trophyl = false;
          let miniD = String.fromCharCode(116,102,100,116,95,110,95,54,57,0);
          let downh: Array<any> = [255, 0];
         trophyl = shirtC.size <= 36;
         miniD = `${downh.length}`;
         downh = [downh.length];
      if (Array.from(shirtC.keys()).includes(`${paginationF}`)) {
         shirtC = new Map([[`${shirtC.size}`, parseInt(`${paginationF}`) + shirtC.size]]);
      }
         paginationF -= (parseFloat(`${(trophyl ? 3 : 2) % (Math.max(parseInt(`${paginationF}`), 3))}`));
      while (1 < shirtC.size) {
         shirtC = new Map([[`${shirtC.size}`, shirtC.size ^ parseInt(`${paginationF}`)]]);
         break;
      }
      while ((shirtC.size % 4) > 1) {
          let downloadedH = String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,95,49,95,50,52,0);
          let gesturesE = String.fromCharCode(118,95,52,51,95,112,97,121,101,101,0);
          let contextb = 4.0;
         shirtC = new Map([[gesturesE, downloadedH.length & 2]]);
         downloadedH = `${parseInt(`${contextb}`)}`;
         gesturesE += `${1 & parseInt(`${contextb}`)}`;
         break;
      }
      let notificationc = 5544312 <= shirtC.size;
      do {
         shirtC = new Map([[`${shirtC.size}`, shirtC.size % 3]]);
         if (notificationc) {
            break;
         }
      } while (notificationc && (shirtC.get(`${paginationF}`) != null));
         shirtC = new Map([[`${shirtC.size}`, 2 ^ shirtC.size]]);
          let greenn = String.fromCharCode(99,105,118,105,108,95,110,95,49,50,0);
          let detailsG = String.fromCharCode(101,109,115,99,114,105,112,116,101,110,95,99,95,57,49,0);
          let productK = 1;
         shirtC = new Map([[`${productK}`, 3]]);
         greenn += `${detailsG.length}`;
         detailsG = "1";
         productK %= Math.max(1, detailsG.length - greenn.length);
      while (!trophyl) {
         trophyl = shirtC.get(`${trophyl}`) != null;
         break;
      }
      telegramh = `${telegramh.length}`;
   while (5 == (termsf ^ 1)) {
      termsf >>= Math.min(3, Math.abs((telegramh == String.fromCharCode(101,0) ? telegramh.length : gradle3.size)));
      break;
   }
      runtime2 += `${gradle3.size}`;
   for (let u = 0; u < 1; u++) {
      networkW += 2;
   }
   if (5 < runtime2.length) {
      networkW *= parseInt(`${classesk}`);
   }
   for (let q = 0; q < 2; q++) {
      libreactM = `${bodan6.length}`;
   }
       let livel: Map<any, any> = new Map([[String.fromCharCode(99,95,51,55,95,115,116,111,114,109,98,105,114,100,0),60], [String.fromCharCode(117,95,52,52,95,98,101,116,119,101,101,110,0),19], [String.fromCharCode(112,114,101,105,118,111,117,115,95,119,95,51,57,0),936]]);
       let sharedN = String.fromCharCode(99,111,108,111,114,95,112,95,57,54,0);
      if (2 == (5 >> (Math.min(5, sharedN.length)))) {
         livel.set(`${sharedN}`, sharedN.length);
      }
       let backwardE = 4.0;
       let eacty = 4.0;
         eacty -= parseFloat(`${1 << (Math.min(1, Math.abs(parseInt(`${eacty}`))))}`);
         backwardE += parseFloat(`${parseInt(`${eacty}`)}`);
       let libjsinspectorS: Array<any> = [241, 368, 754];
       let mapbufferr: Array<any> = [200, 709];
      if ((libjsinspectorS.length - 4) < 5) {
         sharedN = `${sharedN.length & 2}`;
      }
      libreactM += `${2 | runtime2.length}`;
      libreactM = `${xnewarchdefaultsc.length}`;
       let animationsX: Map<any, any> = new Map([[String.fromCharCode(98,101,110,99,104,115,95,119,95,56,55,0),899], [String.fromCharCode(109,97,110,116,105,115,115,97,115,95,98,95,50,52,0),447]]);
       let networkE: Map<any, any> = new Map([[String.fromCharCode(118,97,114,116,105,109,101,95,51,95,49,55,0),718], [String.fromCharCode(106,95,57,48,95,111,112,116,105,111,110,97,108,115,0),997]]);
         animationsX.set(`${networkE.size}`, networkE.size);
          let policyf = String.fromCharCode(99,111,110,116,114,97,99,116,115,95,111,95,54,55,0);
          let proxyR = 2.0;
         networkE.set(`${animationsX.size}`, networkE.size);
         policyf += `${policyf.length}`;
         proxyR *= policyf.length >> (Math.min(4, Math.abs(parseInt(`${proxyR}`))));
      if ((5 | animationsX.size) == 2 || (animationsX.size | 5) == 2) {
         animationsX.set(`${animationsX.size}`, networkE.size * 2);
      }
      if (1 >= (networkE.size | 2)) {
         animationsX.set(`${animationsX.size}`, networkE.size - animationsX.size);
      }
          let libcxxcomponentsV = String.fromCharCode(112,95,53,55,95,107,101,121,102,114,97,109,101,115,0);
         animationsX = new Map([[`${animationsX.size}`, 1 + networkE.size]]);
         libcxxcomponentsV += `${(libcxxcomponentsV == String.fromCharCode(104,0) ? libcxxcomponentsV.length : libcxxcomponentsV.length)}`;
      if (2 <= (networkE.size - animationsX.size)) {
         animationsX = new Map([[`${networkE.size}`, animationsX.size / 2]]);
      }
      telegramh = `${calendarZ.length}`;
      termsf <<= Math.min(Math.abs((grey4 == String.fromCharCode(108,0) ? grey4.length : parseInt(`${tramini3}`))), 1);
   if (telegramh.length <= 3) {
      bodan6 += `${3 * runtime2.length}`;
   }
       let with_32: Map<any, any> = new Map([[String.fromCharCode(103,95,50,49,95,110,99,98,99,0),true ], [String.fromCharCode(109,97,115,116,101,114,105,110,103,95,56,95,49,56,0),false ], [String.fromCharCode(98,95,54,57,95,99,108,105,112,112,105,110,103,0),true ]]);
       let internetG: Array<any> = [674, 110];
       let carouselK = 3.0;
         with_32.set(`${carouselK}`, parseInt(`${carouselK}`) | 2);
         with_32 = new Map([[`${internetG.length}`, parseInt(`${carouselK}`) & 1]]);
       let commentZ: Array<any> = [String.fromCharCode(104,95,53,49,95,109,101,109,109,101,116,104,111,100,115,0), String.fromCharCode(112,95,52,56,95,115,104,111,114,116,101,114,0), String.fromCharCode(114,95,53,48,95,101,120,112,114,0)];
       let interstitialI: Array<any> = [361, 650];
       let libavcodecK = 1.0;
       let progress4 = 3.0;
          let stationsX: Array<any> = [122, 806];
         libavcodecK += parseFloat(`${parseInt(`${progress4}`)}`);
         stationsX.push(stationsX.length);
      let backT = progress4 <= 6378201.0;
      do {
          let canvasS = String.fromCharCode(101,109,117,108,97,116,101,95,111,95,56,57,0);
          let launcher4 = String.fromCharCode(122,95,52,55,95,102,114,97,109,101,115,105,122,101,115,0);
          let halfY = String.fromCharCode(111,95,54,53,95,99,101,108,108,97,117,116,111,0);
          let temperaturec = 2.0;
         progress4 *= parseFloat(`${parseInt(`${libavcodecK}`) & 1}`);
         canvasS = "1";
         launcher4 += `${(String.fromCharCode(53,0) == canvasS ? launcher4.length : canvasS.length)}`;
         halfY = `${halfY.length % 2}`;
         temperaturec *= parseFloat(`${2 >> (Math.min(4, canvasS.length))}`);
         if (backT) {
            break;
         }
      } while (((libavcodecK * 4) < 1.42) && backT);
          let contextn = false;
          let refreshk: Map<any, any> = new Map([[String.fromCharCode(104,95,54,56,95,105,100,120,0),true ], [String.fromCharCode(105,110,105,116,105,97,116,111,114,95,57,95,49,48,48,0),false ]]);
         with_32.set(`${contextn}`, ((contextn ? 4 : 1) / (Math.max(2, 10))));
         refreshk.set(`${refreshk.size}`, refreshk.size);
         commentZ.push(interstitialI.length);
         carouselK += parseFloat(`${3}`);
      calendarZ = `${(grey4 == String.fromCharCode(78,0) ? grey4.length : gradle3.size)}`;

            setShowSlider(false);
        }, 1000);
    }

    const handleScreenTouch = () => {
       let android6: Array<any> = [String.fromCharCode(111,116,104,101,114,110,97,109,101,95,102,95,50,53,0), String.fromCharCode(106,95,52,54,95,102,101,116,99,104,0), String.fromCharCode(114,101,99,111,114,100,95,119,95,52,56,0)];
    let footballA = 5;
    let privilegez = 0;
    let unticks = String.fromCharCode(99,95,51,52,95,101,110,99,105,114,99,108,101,100,0);
    let fullh = String.fromCharCode(108,95,53,54,95,102,114,101,113,117,101,110,116,0);
    let ajaxE = 4;
    let merger_: Array<any> = [902, 18];
    let proxyS = 0;
    let short_19a = 2;
    let miniq: Array<any> = [628, 42];
   while ((miniq.length + android6.length) <= 2) {
       let debugy: Array<any> = [String.fromCharCode(102,114,111,109,95,105,95,56,56,0), String.fromCharCode(108,95,55,95,105,110,105,116,105,97,108,105,122,101,0), String.fromCharCode(99,104,97,110,103,101,115,101,116,95,97,95,56,0)];
       let loginO = String.fromCharCode(117,112,115,97,109,112,108,101,95,121,95,57,57,0);
         loginO += `${2 * loginO.length}`;
       let incidenti = 2;
       let annerq = 3;
      let taiwanG = annerq >= 6435677;
      do {
          let controlsm = String.fromCharCode(119,95,52,49,95,99,114,111,112,112,105,110,103,0);
          let volumeN = 5.0;
          let huawei3 = String.fromCharCode(119,95,50,53,0);
         annerq *= 2 >> (Math.min(4, huawei3.length));
         controlsm = `${controlsm.length << (Math.min(Math.abs(1), 2))}`;
         volumeN *= parseInt(`${volumeN}`);
         huawei3 = `${controlsm.length}`;
         if (taiwanG) {
            break;
         }
      } while (taiwanG && (debugy.length >= 1));
      let station6 = 7241151 >= annerq;
      do {
          let championV: Map<any, any> = new Map([[String.fromCharCode(108,122,115,115,95,97,95,50,48,0),false ], [String.fromCharCode(104,95,53,57,95,107,101,114,110,101,100,0),false ]]);
          let mbridgeE = String.fromCharCode(122,95,51,56,95,109,97,112,112,101,100,0);
          let bottom_ = String.fromCharCode(104,95,49,48,95,112,97,114,97,109,115,0);
          let activityL = String.fromCharCode(106,95,52,95,114,115,104,105,102,116,0);
         annerq <<= Math.min(1, Math.abs(3));
         championV = new Map([[`${championV.size}`, activityL.length]]);
         mbridgeE += `${mbridgeE.length | bottom_.length}`;
         bottom_ += `${(activityL == String.fromCharCode(104,0) ? championV.size : activityL.length)}`;
         if (station6) {
            break;
         }
      } while (station6 && (5 <= (4 - incidenti) || 3 <= (4 - incidenti)));
         loginO = `${3 >> (Math.min(5, debugy.length))}`;
          let terms5 = String.fromCharCode(100,101,116,101,99,116,105,110,103,95,119,95,53,53,0);
          let videocommonf = 2;
          let switch_o49: Map<any, any> = new Map([[String.fromCharCode(122,95,55,52,95,116,117,108,115,105,0),211], [String.fromCharCode(109,108,115,100,95,104,95,49,52,0),418]]);
         debugy.push(annerq % (Math.max(switch_o49.size, 2)));
         terms5 += `${(terms5 == String.fromCharCode(98,0) ? videocommonf : terms5.length)}`;
         videocommonf <<= Math.min(4, terms5.length);
         switch_o49.set(`${videocommonf}`, videocommonf);
      android6.push(ajaxE % (Math.max(miniq.length, 3)));
      break;
   }
       let mimoD = 3;
       let launcheri = true;
      for (let l = 0; l < 3; l++) {
         mimoD -= (mimoD * (launcheri ? 5 : 1));
      }
       let projecth: Array<any> = [404, 629, 568];
         launcheri = launcheri && projecth.length == 97;
         projecth.push(1 - projecth.length);
         launcheri = !launcheri || projecth.length == 56;
          let adultf = 4;
         launcheri = 86 >= adultf || projecth.length >= 86;
      android6 = [((launcheri ? 1 : 4) + mimoD)];
      proxyS >>= Math.min(5, android6.length);
   let nterstitial6 = merger_.length <= 6950784;
   do {
       let countdownR: Array<any> = [String.fromCharCode(115,95,49,54,95,109,101,97,115,117,114,101,0), String.fromCharCode(111,112,101,114,97,116,105,111,110,95,122,95,53,52,0)];
       let videocommonc = String.fromCharCode(117,95,57,95,102,101,101,100,98,97,99,107,0);
       let descr = 2.0;
       let toponX: Map<any, any> = new Map([[String.fromCharCode(100,115,117,98,101,120,112,95,120,95,49,48,0),String.fromCharCode(114,101,113,117,101,115,116,95,57,95,52,57,0)], [String.fromCharCode(105,95,52,56,95,122,111,110,101,115,0),String.fromCharCode(101,95,53,51,95,114,101,99,101,105,118,101,114,115,0)], [String.fromCharCode(102,95,55,49,95,111,116,111,102,0),String.fromCharCode(100,95,53,55,95,99,114,101,97,116,105,110,103,0)]]);
       let transferC = 2.0;
         transferC /= Math.max(parseFloat(`${countdownR.length}`), 4);
      if (2 > (toponX.size << (Math.min(Math.abs(2), 5)))) {
          let plusM = 4.0;
         toponX = new Map([[`${transferC}`, parseInt(`${plusM}`)]]);
      }
      if (toponX.get(`${descr}`) != null) {
         descr *= parseFloat(`${toponX.size + parseInt(`${descr}`)}`);
      }
          let selectb = true;
          let interstitialD: Map<any, any> = new Map([[String.fromCharCode(116,95,52,53,0),true ], [String.fromCharCode(115,116,114,101,101,116,95,101,95,53,50,0),true ]]);
          let giftD = String.fromCharCode(111,95,50,53,95,103,101,116,104,111,115,116,98,121,97,100,100,114,0);
         descr *= parseFloat(`${interstitialD.size}`);
         selectb = !selectb;
         interstitialD.set(`${selectb}`, ((selectb ? 4 : 2)));
         giftD = `${(giftD == String.fromCharCode(106,0) ? (selectb ? 5 : 5) : giftD.length)}`;
      while (2 <= (1 - toponX.size) && (parseInt(`${descr}`) + toponX.size) <= 1) {
         descr /= Math.max(3, parseFloat(`${videocommonc.length & 1}`));
         break;
      }
       let gpays = String.fromCharCode(97,95,53,56,95,102,111,99,117,115,101,100,0);
       let pressure3 = String.fromCharCode(108,95,49,95,111,114,105,103,105,110,115,0);
         videocommonc += `${countdownR.length}`;
      for (let u = 0; u < 3; u++) {
         gpays += `${countdownR.length / (Math.max(9, parseInt(`${transferC}`)))}`;
      }
      let league0 = transferC <= 9654137.0;
      do {
          let loadingo = 3;
          let libswscaleq: Array<any> = [811, 1000];
         transferC -= parseFloat(`${parseInt(`${descr}`) ^ pressure3.length}`);
         loadingo &= libswscaleq.length + 1;
         libswscaleq = [libswscaleq.length];
         if (league0) {
            break;
         }
      } while (((videocommonc.length - 1) > 1) && league0);
          let abidetectu = String.fromCharCode(119,101,101,107,95,116,95,53,52,0);
         videocommonc += `${(String.fromCharCode(109,0) == gpays ? gpays.length : parseInt(`${descr}`))}`;
         abidetectu += `${abidetectu.length}`;
       let benefito = 2.0;
         transferC += parseFloat(`${videocommonc.length}`);
       let arrowc = 5.0;
       let humidityD = 1.0;
       let commentN: Map<any, any> = new Map([[String.fromCharCode(100,105,115,97,112,112,101,97,114,105,110,103,95,106,95,51,50,0),true ], [String.fromCharCode(100,110,115,108,97,98,101,108,95,110,95,49,51,0),false ], [String.fromCharCode(104,95,54,48,95,99,111,100,101,114,115,0),true ]]);
         gpays += `${pressure3.length >> (Math.min(Math.abs(2), 2))}`;
      merger_.push(fullh.length % (Math.max(10, miniq.length)));
      if (nterstitial6) {
         break;
      }
   } while (nterstitial6 && ((2 / (Math.max(7, unticks.length))) >= 3));
      ajaxE -= short_19a;
   while (miniq.length > 4) {
       let singleK = String.fromCharCode(108,95,56,57,95,115,111,114,116,101,100,0);
       let index8: Array<any> = [717, 629];
       let navigationg = String.fromCharCode(105,115,97,99,102,105,120,95,116,95,53,54,0);
      for (let j = 0; j < 2; j++) {
          let friendsQ = false;
          let corev = 4.0;
          let vignetteU = 2;
          let specU = 5.0;
          let checkboxG = 3.0;
         singleK = `${((friendsQ ? 2 : 3) << (Math.min(index8.length, 3)))}`;
         friendsQ = 3.84 > specU;
         corev *= parseInt(`${specU}`);
         vignetteU ^= parseInt(`${corev}`) - parseInt(`${specU}`);
         checkboxG *= 3 << (Math.min(Math.abs(parseInt(`${specU}`)), 4));
      }
      let buildQ = 7004810 >= index8.length;
      do {
         index8 = [3 + singleK.length];
         if (buildQ) {
            break;
         }
      } while ((navigationg.length == index8.length) && buildQ);
      while (navigationg != String.fromCharCode(57,0) || singleK != String.fromCharCode(106,0)) {
         singleK = "3";
         break;
      }
          let castn = String.fromCharCode(116,95,50,50,95,101,110,108,97,114,103,101,0);
          let lessb = 0.0;
         navigationg += `${2 * navigationg.length}`;
         castn = `${3 + parseInt(`${lessb}`)}`;
         lessb *= parseFloat(`${castn.length}`);
       let matchesm = 5;
       let button6 = 4;
      if (4 > (button6 % (Math.max(3, 3)))) {
          let mapbuffera = true;
          let anythinkf: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,116,114,97,105,110,116,95,118,95,50,53,0),false ], [String.fromCharCode(101,95,54,57,95,119,101,101,107,100,97,121,0),true ]]);
          let librrcl = String.fromCharCode(97,100,100,98,108,107,95,107,95,57,54,0);
          let trashn = String.fromCharCode(110,95,53,56,95,115,121,110,99,104,114,111,110,111,117,115,0);
         button6 <<= Math.min(navigationg.length, 2);
         mapbuffera = String.fromCharCode(55,0) == trashn;
         anythinkf.set(trashn, librrcl.length);
         librrcl = `${anythinkf.size}`;
      }
       let shareW = String.fromCharCode(100,95,50,56,95,114,97,110,103,101,0);
       let binddatasr = true;
          let libruntimeexecutorr: Array<any> = [121, 858, 739];
         matchesm -= 2 % (Math.max(button6, 2));
         libruntimeexecutorr.push(3 >> (Math.min(4, libruntimeexecutorr.length)));
      miniq.push(3);
      break;
   }
       let playercommonl: Map<any, any> = new Map([[String.fromCharCode(109,106,112,101,103,97,95,122,95,55,50,0),764], [String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,95,116,95,56,55,0),536], [String.fromCharCode(120,95,53,48,95,103,97,117,115,115,105,97,110,0),766]]);
      for (let y = 0; y < 1; y++) {
         playercommonl.set(`${playercommonl.size}`, playercommonl.size);
      }
       let eacty: Array<any> = [String.fromCharCode(108,111,111,107,95,102,95,50,54,0), String.fromCharCode(107,95,56,56,95,113,117,111,116,101,115,0)];
       let phonen: Array<any> = [20, 502, 633];
      for (let k = 0; k < 3; k++) {
          let templateprocessorU = String.fromCharCode(117,95,56,57,95,104,111,114,105,122,0);
         playercommonl.set(`${eacty.length}`, eacty.length);
         templateprocessorU = `${templateprocessorU.length}`;
      }
      miniq = [3 | miniq.length];
       let collectionJ = String.fromCharCode(97,95,52,56,95,102,114,101,113,98,97,114,107,0);
      if (5 <= collectionJ.length && collectionJ.length <= 5) {
         collectionJ = `${(String.fromCharCode(79,0) == collectionJ ? collectionJ.length : collectionJ.length)}`;
      }
         collectionJ += "1";
      while (collectionJ == collectionJ) {
          let statisticsr = 2;
          let appleP = String.fromCharCode(106,95,53,57,95,98,108,101,101,100,0);
          let reactm: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,105,110,105,116,95,109,95,56,57,0),513], [String.fromCharCode(99,111,115,105,103,110,97,116,111,114,105,101,115,95,49,95,55,50,0),24], [String.fromCharCode(102,116,115,105,115,115,112,97,99,101,95,109,95,49,54,0),717]]);
          let baiduA = 2;
          let kickB = String.fromCharCode(112,114,101,98,117,102,95,118,95,54,49,0);
         collectionJ = `${kickB.length >> (Math.min(Math.abs(3), 3))}`;
         statisticsr <<= Math.min(1, Math.abs(statisticsr | 2));
         appleP = `${reactm.size + baiduA}`;
         reactm.set(`${baiduA}`, reactm.size);
         kickB += `${statisticsr - appleP.length}`;
         break;
      }
      merger_.push(footballA << (Math.min(Math.abs(1), 3)));
       let tickedT: Array<any> = [951, 953];
          let final_02I = 1.0;
          let eighteenx = String.fromCharCode(103,97,117,103,101,95,115,95,54,49,0);
          let sheetO = 0.0;
         tickedT.push(1);
         final_02I *= parseFloat(`${1 * eighteenx.length}`);
         eighteenx += `${parseInt(`${sheetO}`)}`;
         sheetO /= Math.max(parseFloat(`${parseInt(`${sheetO}`) ^ eighteenx.length}`), 4);
      while ((tickedT.length / (Math.max(4, 5))) > 2) {
          let dropdownD = false;
          let basketball9 = 3.0;
          let mbnativee = 3.0;
          let nterstitial5: Map<any, any> = new Map([[String.fromCharCode(112,104,112,95,49,95,56,51,0),String.fromCharCode(117,95,56,48,95,98,97,114,107,0)], [String.fromCharCode(113,95,52,48,95,112,97,117,115,101,0),String.fromCharCode(117,112,100,97,116,101,95,57,95,55,48,0)]]);
         tickedT = [((dropdownD ? 1 : 1) & parseInt(`${basketball9}`))];
         dropdownD = 4 > nterstitial5.size;
         basketball9 /= Math.max(parseFloat(`${parseInt(`${mbnativee}`)}`), 4);
         mbnativee /= Math.max(5, parseFloat(`${parseInt(`${mbnativee}`)}`));
         nterstitial5 = new Map([[`${nterstitial5.size}`, nterstitial5.size / (Math.max(1, 3))]]);
         break;
      }
      while ((4 + tickedT.length) >= 1 && (tickedT.length + 4) >= 1) {
         tickedT.push(1);
         break;
      }
      footballA -= fullh.length;
       let countrye = false;
       let fullE: Array<any> = [String.fromCharCode(121,95,55,54,95,99,111,108,111,114,0), String.fromCharCode(99,95,50,53,95,106,111,105,110,116,0)];
      if (2 > fullE.length) {
          let tumbnailD = 1;
          let panglek = 5;
          let launcherf: Array<any> = [48, 167, 694];
          let libfbz: Array<any> = [String.fromCharCode(102,95,56,57,95,111,112,101,110,101,100,0), String.fromCharCode(105,100,99,116,108,108,109,95,53,95,52,50,0)];
         fullE = [libfbz.length << (Math.min(3, Math.abs(tumbnailD)))];
         tumbnailD += panglek * launcherf.length;
         panglek >>= Math.min(Math.abs(panglek), 4);
         launcherf.push(3);
         libfbz.push(panglek * 3);
      }
      if (2 >= (fullE.length / 3) && !countrye) {
         countrye = fullE.length > 24;
      }
      if ((5 | fullE.length) == 3 || !countrye) {
         fullE = [((countrye ? 3 : 2) % (Math.max(fullE.length, 1)))];
      }
         countrye = fullE.length == 73;
      for (let t = 0; t < 1; t++) {
         countrye = !countrye;
      }
          let modeJ: Array<any> = [699, 821, 449];
         fullE.push(modeJ.length);
      ajaxE &= ajaxE >> (Math.min(5, Math.abs(short_19a)));
   let short_kr = android6.length <= 5086125;
   do {
      android6 = [proxyS / 3];
      if (short_kr) {
         break;
      }
   } while ((5 > (android6.length - merger_.length)) && short_kr);
      fullh = `${merger_.length}`;
       let floating2 = String.fromCharCode(121,95,57,55,95,113,117,111,116,101,0);
       let prediction7 = String.fromCharCode(112,95,55,52,95,97,116,116,97,99,107,0);
       let cross9 = String.fromCharCode(111,112,116,101,100,95,120,95,50,55,0);
         prediction7 += `${prediction7.length}`;
          let castE = true;
          let rewindt = String.fromCharCode(104,95,54,54,95,108,105,98,119,101,98,112,101,110,99,0);
         cross9 = `${prediction7.length + floating2.length}`;
         castE = rewindt.length == 75;
         rewindt = `${rewindt.length}`;
          let appsf = 5.0;
         cross9 = `${(floating2 == String.fromCharCode(54,0) ? prediction7.length : floating2.length)}`;
         appsf -= parseFloat(`${parseInt(`${appsf}`)}`);
       let libjsinspectorG = 5.0;
         prediction7 = `${floating2.length + 3}`;
      for (let w = 0; w < 2; w++) {
          let libpangleflippedK = 1.0;
          let ying0 = String.fromCharCode(119,95,51,55,95,112,97,114,97,103,114,97,112,104,0);
          let containerN = String.fromCharCode(97,95,49,48,48,95,97,114,99,104,105,118,105,110,103,0);
         libjsinspectorG *= parseFloat(`${ying0.length}`);
         libpangleflippedK *= parseInt(`${libpangleflippedK}`) & 3;
         ying0 += `${containerN.length}`;
         containerN += `${1 & containerN.length}`;
      }
         cross9 += `${prediction7.length}`;
      if ((libjsinspectorG - 3.61) >= 1.64) {
         libjsinspectorG *= parseFloat(`${3 * cross9.length}`);
      }
      let zoomr = 6979062 >= floating2.length;
      do {
         floating2 += `${cross9.length ^ parseInt(`${libjsinspectorG}`)}`;
         if (zoomr) {
            break;
         }
      } while ((libjsinspectorG >= 3.12) && zoomr);
      footballA >>= Math.min(4, merger_.length);
       let actionsS = 2;
       let privacy3 = true;
       let abidetectt = String.fromCharCode(117,110,97,114,121,95,121,95,56,55,0);
          let default_sgX = String.fromCharCode(108,105,107,101,108,121,95,49,95,56,52,0);
          let videoi = String.fromCharCode(109,95,56,52,95,111,110,115,101,116,0);
          let screenp: Map<any, any> = new Map([[String.fromCharCode(100,95,56,51,95,115,97,109,101,113,0),false ], [String.fromCharCode(97,101,99,95,53,95,55,55,0),false ], [String.fromCharCode(106,95,57,57,95,116,111,112,105,99,115,0),true ]]);
         actionsS ^= 1;
         default_sgX += `${videoi.length & screenp.size}`;
         videoi = `${screenp.size}`;
      let predictions = 6016408 <= actionsS;
      do {
         actionsS %= Math.max(abidetectt.length, 5);
         if (predictions) {
            break;
         }
      } while (predictions && (!abidetectt.includes(`${actionsS}`)));
          let bdxadsdk0 = String.fromCharCode(98,95,53,53,95,119,101,98,118,116,116,0);
          let viewsw: Map<any, any> = new Map([[String.fromCharCode(112,105,120,115,99,111,112,101,95,116,95,55,48,0),String.fromCharCode(118,95,52,95,99,111,108,111,114,113,117,97,110,116,0)], [String.fromCharCode(97,110,103,108,101,100,95,98,95,52,0),String.fromCharCode(111,95,51,95,114,111,116,97,116,105,111,110,0)]]);
          let nativemoduleN = 2.0;
         abidetectt += `${(parseInt(`${nativemoduleN}`) ^ (privacy3 ? 1 : 5))}`;
         bdxadsdk0 = `${bdxadsdk0.length / (Math.max(3, 9))}`;
         viewsw.set(`${bdxadsdk0}`, viewsw.size);
         nativemoduleN *= viewsw.size / 1;
         actionsS &= ((privacy3 ? 4 : 1) * abidetectt.length);
      let transferi = privacy3 ? !privacy3 : privacy3;
      do {
         privacy3 = abidetectt.length <= 17;
         if (transferi) {
            break;
         }
      } while (transferi && (abidetectt.endsWith(`${privacy3}`)));
      for (let y = 0; y < 3; y++) {
         privacy3 = !abidetectt.includes(`${privacy3}`);
      }
          let mimo3 = String.fromCharCode(110,95,53,55,95,97,115,99,111,110,102,0);
         abidetectt = `${mimo3.length << (Math.min(Math.abs(1), 5))}`;
       let sheet_ = String.fromCharCode(109,111,100,117,108,117,115,95,52,95,54,0);
          let navigation8 = 2;
          let ecopy_jx: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,104,95,107,95,57,54,0),211], [String.fromCharCode(99,101,110,99,95,104,95,53,49,0),284], [String.fromCharCode(98,95,57,56,95,109,110,101,109,111,110,105,99,0),498]]);
          let whistle4 = 1;
         actionsS *= actionsS;
         navigation8 ^= ecopy_jx.size;
         ecopy_jx = new Map([[`${ecopy_jx.size}`, ecopy_jx.size]]);
         whistle4 ^= whistle4 % (Math.max(1, 3));
      fullh += "3";
      merger_ = [footballA];
      short_19a /= Math.max(unticks.length, 5);
      short_19a |= short_19a ^ ajaxE;
       let sentryb = 1.0;
       let sheet6 = 1;
      for (let r = 0; r < 1; r++) {
          let hooks5 = 3.0;
         sheet6 /= Math.max(4, 1 / (Math.max(10, parseInt(`${hooks5}`))));
      }
         sentryb /= Math.max(2, 1);
      while ((sheet6 / (Math.max(sentryb, 3))) < 3.93 || 1.29 < (sentryb / 3.93)) {
          let pangle3 = 1;
          let time_qiE = 3.0;
          let modelsV = String.fromCharCode(119,95,57,50,95,100,99,113,117,97,110,116,0);
          let libimagepipelineI: Map<any, any> = new Map([[String.fromCharCode(113,95,53,95,115,99,97,110,110,101,100,0),String.fromCharCode(101,95,52,49,95,100,101,97,108,108,111,99,97,116,105,111,110,0)], [String.fromCharCode(105,109,108,116,95,116,95,54,57,0),String.fromCharCode(104,95,52,50,95,105,110,115,101,114,116,101,114,0)], [String.fromCharCode(119,95,55,48,95,101,120,116,114,99,0),String.fromCharCode(100,95,52,49,95,105,115,101,120,112,108,97,105,110,0)]]);
         sentryb += 2;
         pangle3 |= (modelsV == String.fromCharCode(56,0) ? modelsV.length : parseInt(`${time_qiE}`));
         time_qiE *= parseFloat(`${modelsV.length % 3}`);
         libimagepipelineI.set(`${pangle3}`, libimagepipelineI.size);
         break;
      }
      while ((sheet6 % 1) <= 3) {
         sheet6 >>= Math.min(5, Math.abs(parseInt(`${sentryb}`)));
         break;
      }
         sheet6 ^= sheet6 - 3;
      if (3 <= (sheet6 >> (Math.min(Math.abs(5), 2))) && 2.53 <= (sheet6 * sentryb)) {
         sentryb /= Math.max(2, 3);
      }
      footballA ^= short_19a ^ 1;
   while (short_19a == 4) {
      footballA /= Math.max(4, merger_.length);
      break;
   }
   while (4 > (miniq.length & 2) && (2 & miniq.length) > 4) {
      miniq.push(footballA);
      break;
   }
       let libloggers: Array<any> = [38, 113];
       let inactivew = String.fromCharCode(115,101,113,117,101,110,99,101,95,48,95,48,0);
         libloggers.push(libloggers.length);
      while (inactivew.length >= 3) {
         inactivew += `${inactivew.length}`;
         break;
      }
         inactivew = `${libloggers.length | 3}`;
         inactivew += `${2 + inactivew.length}`;
      let assistf = 5645516 <= libloggers.length;
      do {
          let descX = String.fromCharCode(102,111,114,101,97,99,104,95,105,95,56,55,0);
          let overj = false;
          let securityZ = 2.0;
          let placeholderl = String.fromCharCode(97,95,55,52,95,119,105,100,116,104,0);
         libloggers = [descX.length ^ placeholderl.length];
         descX += `${parseInt(`${securityZ}`) >> (Math.min(4, Math.abs(3)))}`;
         overj = !overj;
         securityZ *= (parseFloat(`${parseInt(`${securityZ}`) ^ (overj ? 2 : 4)}`));
         placeholderl += `${parseInt(`${securityZ}`) & 3}`;
         if (assistf) {
            break;
         }
      } while (assistf && (!inactivew.includes(`${libloggers.length}`)));
         libloggers = [libloggers.length * inactivew.length];
      unticks += `${ajaxE}`;
      footballA *= (String.fromCharCode(54,0) == fullh ? short_19a : fullh.length);
   while (!android6.includes(short_19a)) {
      short_19a *= 3;
      break;
   }
   if (!miniq.includes(short_19a)) {
      short_19a <<= Math.min(2, Math.abs(1));
   }
   for (let w = 0; w < 2; w++) {
      short_19a %= Math.max(3 * android6.length, 3);
   }

        onScreenTouched();
    }

    return (
        <View style={!disableFullScreenGesture ? styles.container : { zIndex: -10, position: 'absolute' }}>
            <BrightnessGestureControl
                onChangeBrightness={(value: number) => {
                    onPropertyChanged(GestureControls.BRIGHTNESS, value)
                }}
                onTouchScreen={handleScreenTouch}
            />
            {
                vodType === 'vod' && <ProgressGestureControl
                    onTouchScreen={handleScreenTouch}
                    onProgressChange={onSkip}
                />
            }
            <VolumeGestureControl
                onChangeVolume={(value: number) => {
                    onPropertyChanged(GestureControls.VOLUME, value)
                }}
                onTouchScreen={handleScreenTouch}
            />
            {showSlider && (
                <BrightnessVolumeSlider
                    percent={100 * value}
                    icon={
                        value === 0 ? icon.noValue : icon.hasValue
                    }
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        zIndex: 20,
        position: 'absolute'
    }
});