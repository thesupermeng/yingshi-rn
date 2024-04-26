import React, { useEffect, useState, useRef } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import VolumeGestureControl from './ww_tramini_casting';
import BrightnessGestureControl from './ww_over';
import BrightnessVolumeSlider from './ww_config_reactnavigation';
import ProgressGestureControl from './ww_textlayoutmanager_forward';

const GestureControls = {
    VOLUME: 'Volume',
    BRIGHTNESS: 'Brightness',
};

const Icons = {
    [GestureControls.BRIGHTNESS]: {
        noValue: "filedSelectedAndroid",
        hasValue: "plashProfileframeTyping"
    },
    [GestureControls.VOLUME]: {
        noValue: "uploadHumidityImagenetworkerr",
        hasValue: "short_9iYing"
    },
}

type wwIndexDice = {
    onScreenTouched: () => any,
    disableFullScreenGesture: boolean,
    onSkip?: any
    vodType?: string
}

export default ({ onScreenTouched, disableFullScreenGesture, onSkip, vodType = 'vod' }: wwIndexDice) => {
    const [icon, setIcon] = useState({
        noValue: "uploadHumidityImagenetworkerr",
        hasValue: "short_9iYing"
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
       let feedbackZ: Map<any, any> = new Map([[String.fromCharCode(104,95,50,56,95,118,101,114,105,102,105,97,98,108,101,0),true ], [String.fromCharCode(114,95,54,54,95,115,116,97,108,101,0),true ]]);
    let strings2 = true;
    let tnewarchdefaultsi: Array<any> = [String.fromCharCode(102,95,50,49,95,115,97,110,115,0), String.fromCharCode(120,107,101,101,112,95,102,95,51,52,0)];
    let librrc0: Map<any, any> = new Map([[String.fromCharCode(122,95,49,53,95,109,98,117,102,99,104,97,105,110,0),257], [String.fromCharCode(115,112,97,99,101,100,95,104,95,50,0),903], [String.fromCharCode(120,95,54,52,95,102,105,110,110,101,121,0),277]]);
    let clubc: Map<any, any> = new Map([[String.fromCharCode(116,121,112,101,110,97,109,101,0),846], [String.fromCharCode(109,95,56,53,95,97,117,116,111,102,105,108,108,0),87], [String.fromCharCode(100,114,111,112,95,57,95,51,48,0),833]]);
    let xnewsshareQ = String.fromCharCode(111,95,53,55,95,115,110,97,112,0);
    let skipn: Array<any> = [String.fromCharCode(100,95,53,51,95,115,115,114,99,115,0), String.fromCharCode(113,95,50,53,95,116,104,114,101,97,100,115,108,105,99,101,0)];
    let libcxxcomponentsm = String.fromCharCode(112,97,99,107,101,116,105,122,97,116,105,111,110,95,112,95,52,48,0);
    let libturbomodulejsijniG = 2.0;
    let rewindh = String.fromCharCode(107,95,50,55,95,100,115,116,115,117,98,0);
    let loginU = 5.0;
    let infoA = String.fromCharCode(99,95,56,56,95,105,118,97,114,115,0);
    let orangep = 0;
    let halffieldimage2 = true;
    let basketballhometeamG = true;
   for (let b = 0; b < 3; b++) {
       let ncopy_au = 2.0;
       let inouttargetredV = String.fromCharCode(120,95,49,55,95,102,105,110,103,101,114,0);
       let libruntimeexecutorI = String.fromCharCode(99,111,110,102,101,116,116,105,0);
         libruntimeexecutorI = `${inouttargetredV.length}`;
      for (let n = 0; n < 2; n++) {
         libruntimeexecutorI = `${inouttargetredV.length}`;
      }
      if (5 == libruntimeexecutorI.length || inouttargetredV == String.fromCharCode(84,0)) {
         libruntimeexecutorI = `${libruntimeexecutorI.length}`;
      }
         ncopy_au += (parseFloat(`${String.fromCharCode(56,0) == inouttargetredV ? parseInt(`${ncopy_au}`) : inouttargetredV.length}`));
      for (let f = 0; f < 3; f++) {
         inouttargetredV += `${(String.fromCharCode(65,0) == libruntimeexecutorI ? libruntimeexecutorI.length : inouttargetredV.length)}`;
      }
      if ((parseInt(`${ncopy_au}`) * libruntimeexecutorI.length) > 1 && 2.88 > (2.11 * ncopy_au)) {
         libruntimeexecutorI += `${libruntimeexecutorI.length}`;
      }
      let pathR = inouttargetredV.length <= 7264863;
      do {
         inouttargetredV += `${libruntimeexecutorI.length + parseInt(`${ncopy_au}`)}`;
         if (pathR) {
            break;
         }
      } while ((5.83 >= (2.34 - ncopy_au)) && pathR);
         ncopy_au += parseFloat(`${1}`);
         libruntimeexecutorI += "3";
      xnewsshareQ += `${inouttargetredV.length}`;
   }
       let gpayE = 5.0;
       let floatingU = String.fromCharCode(99,114,101,97,116,101,98,97,108,97,110,99,101,95,121,95,55,57,0);
      let stringy = gpayE <= 5020194.0;
      do {
          let combineP = true;
          let turn9 = String.fromCharCode(97,100,97,112,116,101,114,95,97,95,55,53,0);
          let expired3 = String.fromCharCode(115,116,105,108,108,95,98,95,51,56,0);
          let layout5 = false;
         gpayE -= parseFloat(`${1}`);
         combineP = String.fromCharCode(97,0) == turn9;
         turn9 += `${(String.fromCharCode(50,0) == turn9 ? expired3.length : turn9.length)}`;
         expired3 = `${expired3.length}`;
         layout5 = turn9.length < expired3.length;
         if (stringy) {
            break;
         }
      } while ((!floatingU.endsWith(`${gpayE}`)) && stringy);
         gpayE /= Math.max(5, parseFloat(`${parseInt(`${gpayE}`)}`));
      while (floatingU.includes(`${gpayE}`)) {
          let favoriteZ: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,115,95,117,95,49,48,48,0),String.fromCharCode(99,97,114,100,97,110,111,95,107,95,56,56,0)], [String.fromCharCode(97,95,53,53,95,101,99,111,117,110,116,0),String.fromCharCode(102,116,118,110,115,95,102,95,50,51,0)]]);
          let frame_fq = String.fromCharCode(109,111,117,116,104,95,52,95,52,56,0);
         gpayE *= (parseFloat(`${String.fromCharCode(117,0) == frame_fq ? floatingU.length : frame_fq.length}`));
         favoriteZ.set(`${favoriteZ.size}`, favoriteZ.size);
         break;
      }
      if (5 > (floatingU.length ^ 2) || (parseInt(`${gpayE}`) + floatingU.length) > 2) {
         floatingU = `${floatingU.length}`;
      }
         gpayE /= Math.max(parseFloat(`${parseInt(`${gpayE}`)}`), 4);
         floatingU = `${parseInt(`${gpayE}`)}`;
      librrc0 = new Map([[`${skipn.length}`, 1]]);
   if (libcxxcomponentsm.length >= 3) {
       let invitel = 2;
       let chatt: Map<any, any> = new Map([[String.fromCharCode(115,95,57,48,0),false ], [String.fromCharCode(97,95,56,57,95,97,112,112,101,110,100,99,104,97,114,0),false ]]);
         invitel /= Math.max(1, invitel & chatt.size);
          let neonG = 0.0;
          let minimizeX = String.fromCharCode(98,97,115,101,112,111,105,110,116,95,48,95,52,56,0);
          let moonS = false;
         invitel &= (minimizeX == String.fromCharCode(81,0) ? minimizeX.length : invitel);
         neonG -= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${neonG}`)), 1))}`);
         moonS = !moonS;
      for (let z = 0; z < 3; z++) {
         chatt.set(`${invitel}`, invitel & 2);
      }
         invitel >>= Math.min(Math.abs(2), 2);
      while (5 > (invitel * chatt.size)) {
         invitel ^= chatt.size / (Math.max(7, invitel));
         break;
      }
          let footballfiledlayoutR = String.fromCharCode(114,97,110,115,102,111,114,109,101,114,95,108,95,53,55,0);
         chatt.set(footballfiledlayoutR, (String.fromCharCode(67,0) == footballfiledlayoutR ? footballfiledlayoutR.length : chatt.size));
      tnewarchdefaultsi = [feedbackZ.size | 3];
   }
       let suggestionZ: Map<any, any> = new Map([[String.fromCharCode(97,95,53,53,95,115,115,108,114,111,111,116,115,0),true ], [String.fromCharCode(100,117,109,112,101,114,95,103,95,57,49,0),false ]]);
       let umengb = false;
      for (let g = 0; g < 1; g++) {
         suggestionZ.set(`${umengb}`, suggestionZ.size);
      }
          let clubL = 2.0;
          let anythinkG: Array<any> = [792, 398];
          let codeE: Map<any, any> = new Map([[String.fromCharCode(117,100,112,108,105,116,101,95,107,95,51,53,0),true ], [String.fromCharCode(114,111,112,115,116,101,110,95,53,95,52,56,0),false ]]);
         umengb = 79 >= codeE.size || clubL >= 51.74;
         clubL /= Math.max(parseFloat(`${anythinkG.length}`), 4);
         anythinkG.push(anythinkG.length >> (Math.min(3, anythinkG.length)));
         umengb = (((!umengb ? 22 : suggestionZ.size) << (Math.min(Math.abs(suggestionZ.size), 3))) < 22);
          let unimplementedviewd = String.fromCharCode(110,95,55,55,95,112,101,101,114,99,111,110,110,101,99,116,105,111,110,0);
         umengb = 50 >= unimplementedviewd.length || suggestionZ.size >= 50;
         umengb = (((umengb ? 88 : suggestionZ.size) + suggestionZ.size) >= 88);
      if (umengb) {
         umengb = suggestionZ.size < 11;
      }
      strings2 = 4 < feedbackZ.size && 4 < suggestionZ.size;
      skipn = [3 * rewindh.length];
   while (3 > (2 * librrc0.size) && (2 * librrc0.size) > 1) {
      feedbackZ.set(`${strings2}`, ((strings2 ? 1 : 5) ^ 3));
      break;
   }
      xnewsshareQ += `${rewindh.length}`;
   while ((1 ^ skipn.length) == 4) {
      skipn.push(rewindh.length);
      break;
   }
      clubc.set(`${libturbomodulejsijniG}`, librrc0.size);
      skipn.push(parseInt(`${loginU}`) << (Math.min(Math.abs(3), 3)));
      librrc0 = new Map([[`${loginU}`, parseInt(`${loginU}`) >> (Math.min(1, Math.abs(1)))]]);
       let runtimescheduler0 = String.fromCharCode(115,95,54,57,95,115,107,105,112,0);
          let iconsaveimageN = String.fromCharCode(111,102,102,108,111,97,100,95,117,95,52,52,0);
          let libjsij = 3.0;
          let zoom8 = false;
         runtimescheduler0 += `${parseInt(`${libjsij}`) * 2}`;
         iconsaveimageN = `${iconsaveimageN.length}`;
         libjsij /= Math.max(3, ((zoom8 ? 5 : 4)));
      while (runtimescheduler0.length >= runtimescheduler0.length) {
          let smallo = 2;
          let traminiB = 1;
          let encryptB = false;
         runtimescheduler0 = `${smallo}`;
         smallo -= 1;
         traminiB += 3 & traminiB;
         encryptB = !encryptB && 93 < traminiB;
         break;
      }
      while (4 == runtimescheduler0.length) {
         runtimescheduler0 = `${runtimescheduler0.length & runtimescheduler0.length}`;
         break;
      }
      clubc.set(`${tnewarchdefaultsi.length}`, librrc0.size & tnewarchdefaultsi.length);
   for (let v = 0; v < 2; v++) {
       let y_managerk = String.fromCharCode(102,105,120,101,100,0);
       let matches8 = 0.0;
      for (let a = 0; a < 2; a++) {
         y_managerk = `${parseInt(`${matches8}`) + y_managerk.length}`;
      }
          let rulesP = String.fromCharCode(115,95,51,56,95,99,114,101,100,101,110,116,105,97,108,115,0);
         y_managerk = "3";
         rulesP = `${rulesP.length % (Math.max(2, 10))}`;
          let exampleimageV = 3.0;
          let tickedj: Array<any> = [498, 798, 180];
          let floaterY: Map<any, any> = new Map([[String.fromCharCode(97,118,102,114,97,109,101,0),202], [String.fromCharCode(97,95,51,56,95,104,97,110,100,108,101,0),879], [String.fromCharCode(105,99,101,99,97,115,116,0),18]]);
         y_managerk += "2";
         exampleimageV += parseFloat(`${parseInt(`${exampleimageV}`) * 1}`);
         tickedj.push(tickedj.length);
         floaterY.set(`${tickedj.length}`, tickedj.length - floaterY.size);
      if (1.31 >= (4.70 + matches8) || (y_managerk.length + parseInt(`${matches8}`)) >= 2) {
          let mappingP = String.fromCharCode(97,100,106,117,115,116,101,100,95,57,95,49,52,0);
         matches8 += 2 % (Math.max(1, parseInt(`${matches8}`)));
         mappingP = `${mappingP.length >> (Math.min(1, mappingP.length))}`;
      }
         y_managerk += `${parseInt(`${matches8}`)}`;
          let basketballhometeamp: Array<any> = [22, 23];
          let changeV = 4.0;
          let downloaderX: Map<any, any> = new Map([[String.fromCharCode(114,95,50,95,115,101,97,114,99,104,0),192], [String.fromCharCode(117,95,49,51,95,116,111,111,108,116,105,112,115,0),167]]);
         matches8 += parseInt(`${changeV}`) | parseInt(`${matches8}`);
         basketballhometeamp = [basketballhometeamp.length & 3];
         changeV += basketballhometeamp.length;
         downloaderX = new Map([[`${downloaderX.size}`, downloaderX.size]]);
      librrc0.set(`${strings2}`, ((strings2 ? 3 : 4) << (Math.min(y_managerk.length, 4))));
   }
   if ((5 >> (Math.min(4, infoA.length))) < 5 && 4 < (5 >> (Math.min(2, infoA.length)))) {
       let shootyesgoalH = 0.0;
       let sheetp = 0.0;
       let dycreatori = String.fromCharCode(102,117,108,102,105,108,108,101,100,0);
       let inviteP = 0.0;
       let stylel = String.fromCharCode(115,95,57,95,115,111,110,105,99,0);
      let eventsplashy = stylel == String.fromCharCode(101,112,121,56,102,107,117,0);
      do {
          let pressurez = String.fromCharCode(114,95,49,52,95,105,118,97,114,0);
          let halffieldimageG: Array<any> = [642, 945];
          let with_5X = String.fromCharCode(122,95,49,56,95,115,116,114,114,101,115,101,116,0);
          let sheetN = true;
          let privilegeY = String.fromCharCode(99,95,57,55,95,115,108,111,119,101,115,116,0);
         stylel = `${dycreatori.length | halffieldimageG.length}`;
         pressurez = `${with_5X.length}`;
         halffieldimageG = [(1 - (sheetN ? 2 : 3))];
         with_5X += `${3 & pressurez.length}`;
         privilegeY = `${pressurez.length / 3}`;
         if (eventsplashy) {
            break;
         }
      } while ((stylel.length > sheetp) && eventsplashy);
         dycreatori = `${parseInt(`${sheetp}`) << (Math.min(Math.abs(parseInt(`${inviteP}`)), 2))}`;
      let const_kxN = 7251867.0 >= inviteP;
      do {
          let flyer8: Array<any> = [435, 634, 545];
          let bridgeY = true;
          let injuryg = 1.0;
          let iconnointernetn = 3.0;
          let spec0 = false;
         inviteP += parseFloat(`${3}`);
         flyer8 = [(1 ^ (bridgeY ? 5 : 5))];
         bridgeY = spec0;
         injuryg += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${injuryg}`)), 2))}`);
         iconnointernetn *= parseFloat(`${3 / (Math.max(4, parseInt(`${iconnointernetn}`)))}`);
         if (const_kxN) {
            break;
         }
      } while ((1.74 < (2.98 + inviteP)) && const_kxN);
      while ((inviteP / (Math.max(parseFloat(`${dycreatori.length}`), 2))) > 2.13 || 2.0 > (inviteP / (Math.max(2.13, 7)))) {
          let imagenetworkerrd: Array<any> = [710, 964];
          let basey = 0;
          let orientationM: Array<any> = [716, 250];
          let termsP = 1.0;
         inviteP *= parseFloat(`${parseInt(`${sheetp}`)}`);
         imagenetworkerrd = [2 & imagenetworkerrd.length];
         basey *= 3;
         orientationM = [3 * parseInt(`${termsP}`)];
         termsP += 2 + imagenetworkerrd.length;
         break;
      }
      for (let a = 0; a < 1; a++) {
         shootyesgoalH += parseFloat(`${parseInt(`${sheetp}`) * dycreatori.length}`);
      }
      for (let f = 0; f < 2; f++) {
          let reviewM = String.fromCharCode(98,95,49,48,48,95,102,116,101,108,108,0);
         inviteP *= parseFloat(`${parseInt(`${shootyesgoalH}`)}`);
         reviewM += `${reviewM.length}`;
      }
       let unfillu = 1.0;
       let iconsaveimageO = 4.0;
          let downloadingf = String.fromCharCode(97,95,55,48,95,118,112,97,116,104,109,101,115,117,114,101,0);
         inviteP -= parseFloat(`${dycreatori.length | parseInt(`${inviteP}`)}`);
         downloadingf = `${downloadingf.length >> (Math.min(3, downloadingf.length))}`;
      for (let l = 0; l < 3; l++) {
         inviteP *= parseFloat(`${parseInt(`${iconsaveimageO}`) | 2}`);
      }
          let videovarl: Array<any> = [464, 764, 347];
         inviteP += parseFloat(`${parseInt(`${iconsaveimageO}`) % (Math.max(parseInt(`${unfillu}`), 2))}`);
         videovarl.push(videovarl.length & 2);
      let hongkong1 = 7795270.0 >= iconsaveimageO;
      do {
         iconsaveimageO *= parseFloat(`${parseInt(`${unfillu}`)}`);
         if (hongkong1) {
            break;
         }
      } while (hongkong1 && ((iconsaveimageO + shootyesgoalH) == 4.41 || (4.41 + shootyesgoalH) == 1.72));
      if (3.93 == (5 * sheetp)) {
         iconsaveimageO *= parseFloat(`${parseInt(`${shootyesgoalH}`) - 3}`);
      }
      let internetv = 8876202.0 >= sheetp;
      do {
         sheetp += 2 + stylel.length;
         if (internetv) {
            break;
         }
      } while (internetv && (4.18 < sheetp));
      while ((sheetp - stylel.length) == 1.83) {
          let heartC = 5.0;
         sheetp += parseInt(`${heartC}`);
         break;
      }
      if ((iconsaveimageO / 4.99) < 5.29) {
         iconsaveimageO -= parseFloat(`${parseInt(`${inviteP}`) % (Math.max(2, parseInt(`${iconsaveimageO}`)))}`);
      }
      tnewarchdefaultsi.push(3 & xnewsshareQ.length);
   }
      feedbackZ = new Map([[rewindh, rewindh.length ^ 3]]);
   while (5 == clubc.size) {
      clubc = new Map([[xnewsshareQ, xnewsshareQ.length]]);
      break;
   }
   while (strings2) {
      infoA = `${(String.fromCharCode(122,0) == infoA ? infoA.length : feedbackZ.size)}`;
      break;
   }
   if (strings2) {
      strings2 = (clubc.size % (Math.max(8, tnewarchdefaultsi.length))) >= 34;
   }
   while (libcxxcomponentsm != String.fromCharCode(102,0)) {
      rewindh += `${(3 * (strings2 ? 1 : 4))}`;
      break;
   }

            setShowSlider(false);
        }, 1000);
    }

    const handleScreenTouch = () => {
       let gemfilet: Map<any, any> = new Map([[String.fromCharCode(109,98,108,111,111,112,95,100,95,55,54,0),16], [String.fromCharCode(117,110,101,109,112,116,121,0),328], [String.fromCharCode(115,112,101,99,105,97,108,95,48,95,56,51,0),486]]);
    let jingdongu = String.fromCharCode(103,101,116,97,117,120,118,97,108,95,101,95,55,48,0);
    let libflipperT: Map<any, any> = new Map([[String.fromCharCode(100,101,99,114,101,109,101,110,116,95,48,95,52,55,0),633], [String.fromCharCode(108,104,97,115,104,0),456], [String.fromCharCode(109,111,109,101,110,116,117,109,95,111,95,49,55,0),610]]);
    let alert9 = 4.0;
    let hoverx = String.fromCharCode(119,97,116,99,104,101,100,0);
    let bootS: Map<any, any> = new Map([[String.fromCharCode(101,110,116,114,105,101,115,95,118,95,55,55,0),543], [String.fromCharCode(115,117,98,115,116,97,116,101,95,56,95,53,53,0),224], [String.fromCharCode(116,111,110,95,121,95,55,57,0),350]]);
    let policyO = String.fromCharCode(103,101,115,116,117,114,101,95,111,95,49,0);
    let bootsplashT = true;
    let dycreatore = String.fromCharCode(99,114,108,100,112,95,97,95,51,51,0);
    let iconsubssuccessk: Array<any> = [700, 156, 520];
    let readS = 1;
    let videojsJ = 3.0;
    let agreementT: Array<any> = [810, 128];
   if ((5 >> (Math.min(1, policyO.length))) >= 1 || 4 >= (policyO.length >> (Math.min(Math.abs(5), 4)))) {
      libflipperT = new Map([[`${libflipperT.size}`, parseInt(`${alert9}`)]]);
   }
   while (parseInt(`${videojsJ}`) <= policyO.length) {
      videojsJ -= 3;
      break;
   }
       let grayG = 5;
       let teami = 3.0;
       let detailS = String.fromCharCode(122,95,52,57,95,113,117,105,99,107,99,111,109,112,114,101,115,115,0);
          let xvodK: Map<any, any> = new Map([[String.fromCharCode(97,95,54,48,95,115,112,111,105,108,101,114,0),String.fromCharCode(120,95,54,53,95,116,114,117,110,99,97,116,101,100,0)], [String.fromCharCode(118,100,97,116,97,95,53,95,51,48,0),String.fromCharCode(116,95,57,51,95,115,116,101,114,101,111,0)]]);
          let nterstitialV = 1.0;
          let profile4 = String.fromCharCode(115,104,111,114,116,95,105,95,55,48,0);
         teami *= parseFloat(`${parseInt(`${nterstitialV}`) | xvodK.size}`);
         xvodK.set(profile4, profile4.length);
         nterstitialV += profile4.length + 3;
      for (let j = 0; j < 2; j++) {
         detailS += `${1 / (Math.max(parseInt(`${teami}`), 1))}`;
      }
      for (let f = 0; f < 1; f++) {
         teami += parseFloat(`${2}`);
      }
      while (teami > grayG) {
         grayG %= Math.max(5, 3);
         break;
      }
      for (let c = 0; c < 3; c++) {
         detailS = `${parseInt(`${teami}`) | grayG}`;
      }
      for (let n = 0; n < 3; n++) {
         grayG <<= Math.min(4, Math.abs(3 - parseInt(`${teami}`)));
      }
       let successd: Array<any> = [293, 341];
       let statisticsinactivex: Array<any> = [648, 237];
         teami /= Math.max((parseFloat(`${String.fromCharCode(89,0) == detailS ? successd.length : detailS.length}`)), 2);
      if (4 > (3 * statisticsinactivex.length) || 3 > (statisticsinactivex.length * grayG)) {
         grayG -= 1 << (Math.min(Math.abs(grayG), 2));
      }
      policyO += `${readS / (Math.max(policyO.length, 7))}`;
       let coreY = 3.0;
         coreY += parseInt(`${coreY}`);
         coreY *= parseInt(`${coreY}`) % (Math.max(parseInt(`${coreY}`), 5));
      for (let w = 0; w < 1; w++) {
          let guideS = 4.0;
         coreY += parseInt(`${coreY}`) * 3;
         guideS -= parseInt(`${guideS}`);
      }
      readS *= (libflipperT.size << (Math.min(5, Math.abs((bootsplashT ? 4 : 3)))));
   let detailsx = alert9 <= 8787661.0;
   do {
      alert9 /= Math.max(parseInt(`${alert9}`) / (Math.max(policyO.length, 2)), 4);
      if (detailsx) {
         break;
      }
   } while (detailsx && (2 <= (libflipperT.size << (Math.min(Math.abs(5), 5))) && 3 <= (libflipperT.size - 5)));
      libflipperT = new Map([[`${gemfilet.size}`, gemfilet.size]]);
       let descP = 2;
      if (descP >= descP) {
          let mappingc: Array<any> = [468, 949, 501];
          let canvas_: Array<any> = [217, 660, 488];
          let reactnativejs4: Array<any> = [990, 201];
          let a_centerx: Map<any, any> = new Map([[String.fromCharCode(99,95,55,51,95,112,114,101,99,0),String.fromCharCode(109,117,116,97,116,105,110,103,95,110,95,49,48,48,0)], [String.fromCharCode(103,95,57,52,95,108,105,118,101,0),String.fromCharCode(104,97,110,100,108,101,95,106,95,55,49,0)]]);
          let iconwechatk = String.fromCharCode(97,99,114,111,110,121,109,95,52,95,55,48,0);
         descP /= Math.max(4, (String.fromCharCode(108,0) == iconwechatk ? a_centerx.size : iconwechatk.length));
         mappingc.push(3);
         canvas_.push(mappingc.length | reactnativejs4.length);
         reactnativejs4 = [mappingc.length ^ canvas_.length];
         a_centerx.set(`${mappingc.length}`, canvas_.length);
      }
      while (descP > descP) {
         descP += 2;
         break;
      }
      let utilsF = descP <= 9548490;
      do {
          let acceptedP: Map<any, any> = new Map([[String.fromCharCode(99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,0),258], [String.fromCharCode(99,97,112,105,116,97,108,115,0),573], [String.fromCharCode(103,101,111,109,101,116,114,121,95,54,95,56,56,0),670]]);
          let gemfileg = String.fromCharCode(114,101,97,100,102,117,108,108,0);
          let qnews_ = 1.0;
          let middlewareI = String.fromCharCode(116,117,112,108,101,95,111,95,51,48,0);
          let filter2 = String.fromCharCode(115,95,54,51,95,115,116,114,102,117,110,99,0);
         descP %= Math.max(2, 3 + acceptedP.size);
         acceptedP = new Map([[filter2, (String.fromCharCode(70,0) == gemfileg ? filter2.length : gemfileg.length)]]);
         qnews_ *= parseFloat(`${parseInt(`${qnews_}`) >> (Math.min(middlewareI.length, 2))}`);
         middlewareI = "1";
         if (utilsF) {
            break;
         }
      } while (utilsF && (descP > 5));
      readS &= 1 ^ parseInt(`${videojsJ}`);
       let libflipperj = String.fromCharCode(110,105,99,101,95,112,95,54,52,0);
       let activityG = String.fromCharCode(102,95,52,48,95,101,110,116,114,121,112,111,105,110,116,0);
       let nativen = String.fromCharCode(106,99,115,97,109,112,108,101,95,99,95,49,49,0);
      for (let e = 0; e < 2; e++) {
          let shareK = String.fromCharCode(102,108,97,103,95,107,95,52,53,0);
          let type_ur = 1.0;
          let cancelv = String.fromCharCode(121,99,98,99,114,95,122,95,48,0);
          let tick4 = String.fromCharCode(99,105,110,97,117,100,105,111,95,99,95,54,48,0);
         libflipperj += `${2 >> (Math.min(2, Math.abs(parseInt(`${type_ur}`))))}`;
         shareK = `${(tick4 == String.fromCharCode(78,0) ? cancelv.length : tick4.length)}`;
         type_ur *= (tick4 == String.fromCharCode(74,0) ? cancelv.length : tick4.length);
      }
         activityG = `${activityG.length}`;
          let backicon8 = String.fromCharCode(114,111,111,116,115,95,108,95,49,51,0);
         activityG = "1";
         backicon8 = `${3 >> (Math.min(4, backicon8.length))}`;
      for (let q = 0; q < 3; q++) {
          let baselinep: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,101,115,116,95,113,95,50,53,0),572], [String.fromCharCode(115,105,109,112,108,101,116,97,103,95,118,95,57,55,0),422], [String.fromCharCode(100,101,108,101,103,97,116,101,95,57,95,54,0),482]]);
          let iconclosewhitebgG = String.fromCharCode(115,117,98,105,109,97,103,101,95,119,95,55,48,0);
          let libyogah = 3.0;
          let scrollviewv = 0.0;
         activityG = `${parseInt(`${libyogah}`) & 3}`;
         baselinep = new Map([[`${baselinep.size}`, iconclosewhitebgG.length]]);
         iconclosewhitebgG += `${1 << (Math.min(1, Math.abs(baselinep.size)))}`;
         libyogah += iconclosewhitebgG.length / 2;
         scrollviewv *= parseFloat(`${baselinep.size}`);
      }
         libflipperj += `${libflipperj.length}`;
         nativen = "3";
       let kuaishouT = String.fromCharCode(97,114,101,95,109,95,51,56,0);
      let libjsinspectori = kuaishouT.length >= 5023681;
      do {
          let layouti = String.fromCharCode(102,97,118,101,95,57,95,56,52,0);
          let appleb: Array<any> = [557, 143, 611];
          let penaltyL = 5.0;
         kuaishouT = `${nativen.length ^ activityG.length}`;
         layouti = `${layouti.length ^ 3}`;
         appleb = [3 & parseInt(`${penaltyL}`)];
         penaltyL += appleb.length * layouti.length;
         if (libjsinspectori) {
            break;
         }
      } while (libjsinspectori && (1 < nativen.length));
      let themed = String.fromCharCode(118,98,117,104,118,53,0) == activityG;
      do {
          let feedbackl = 2.0;
          let libfbjnip = 5.0;
          let arrowQ = false;
          let scrollviewG = false;
         activityG = `${2 & nativen.length}`;
         feedbackl += (parseFloat(`${(arrowQ ? 2 : 1) + parseInt(`${feedbackl}`)}`));
         libfbjnip *= parseFloat(`${1 + parseInt(`${libfbjnip}`)}`);
         arrowQ = feedbackl == libfbjnip;
         scrollviewG = !arrowQ;
         if (themed) {
            break;
         }
      } while ((activityG.length >= kuaishouT.length) && themed);
      hoverx = "1";
   while (!jingdongu.endsWith(`${iconsubssuccessk.length}`)) {
      jingdongu += `${((bootsplashT ? 2 : 1) - bootS.size)}`;
      break;
   }
   while ((2.7 / (Math.max(10, alert9))) < 2.32) {
      alert9 /= Math.max(1, gemfilet.size >> (Math.min(hoverx.length, 1)));
      break;
   }
   if (2.50 < (videojsJ / 4.3)) {
      videojsJ -= ((bootsplashT ? 5 : 3) % (Math.max(4, parseInt(`${alert9}`))));
   }
   while (policyO.length < 5) {
      policyO += `${jingdongu.length % (Math.max(6, hoverx.length))}`;
      break;
   }
   for (let k = 0; k < 2; k++) {
      iconsubssuccessk.push(2);
   }
   for (let z = 0; z < 3; z++) {
       let countryb: Array<any> = [639, 761, 117];
       let libswresamplei = 0.0;
       let basketballhometeamE = String.fromCharCode(102,105,108,108,101,100,95,122,95,49,51,0);
       let eyeopen_: Array<any> = [445, 483, 446];
       let binddatasx: Array<any> = [String.fromCharCode(115,95,56,54,0), String.fromCharCode(103,101,116,97,115,115,111,99,105,100,95,114,95,51,53,0)];
      while (binddatasx.includes(countryb.length)) {
         countryb = [(String.fromCharCode(53,0) == basketballhometeamE ? basketballhometeamE.length : countryb.length)];
         break;
      }
          let clockF = 5;
          let notification4 = String.fromCharCode(97,112,105,115,0);
         binddatasx = [2 - clockF];
         clockF /= Math.max(1, notification4.length >> (Math.min(4, notification4.length)));
      while ((eyeopen_.length / (Math.max(basketballhometeamE.length, 8))) == 4 && 4 == (basketballhometeamE.length / (Math.max(7, eyeopen_.length)))) {
         basketballhometeamE += "1";
         break;
      }
         eyeopen_.push(countryb.length);
      let acceptedv = 7542341 >= eyeopen_.length;
      do {
          let halffieldimagen = String.fromCharCode(115,117,109,95,122,95,51,53,0);
          let reactnavigationy = String.fromCharCode(109,95,56,50,95,100,105,115,99,0);
          let gemfilek = 1.0;
         eyeopen_ = [eyeopen_.length | basketballhometeamE.length];
         halffieldimagen += `${reactnavigationy.length * 3}`;
         reactnavigationy = "3";
         gemfilek /= Math.max(3, halffieldimagen.length);
         if (acceptedv) {
            break;
         }
      } while ((!binddatasx.includes(eyeopen_.length)) && acceptedv);
          let penaltyv = String.fromCharCode(115,117,98,118,105,101,119,95,106,95,54,48,0);
         eyeopen_ = [countryb.length & 3];
         penaltyv += `${penaltyv.length}`;
         eyeopen_ = [countryb.length % (Math.max(basketballhometeamE.length, 4))];
          let linkm = String.fromCharCode(119,95,49,48,95,117,110,101,115,99,97,112,105,110,103,0);
          let kuaishouH: Map<any, any> = new Map([[String.fromCharCode(121,95,57,52,95,116,105,116,108,116,101,0),99], [String.fromCharCode(110,95,52,54,95,102,111,114,103,111,116,116,101,110,0),998]]);
          let disconnectedlogoT = false;
         basketballhometeamE += `${(String.fromCharCode(67,0) == linkm ? linkm.length : (disconnectedlogoT ? 4 : 5))}`;
         kuaishouH.set(`${kuaishouH.size}`, kuaishouH.size / 3);
      bootsplashT = policyO == String.fromCharCode(90,0);
      libswresamplei += parseFloat(`${1}`);
   }
   while ((parseInt(`${videojsJ}`) / (Math.max(iconsubssuccessk.length, 1))) == 1) {
      videojsJ += parseInt(`${alert9}`) / (Math.max(3, 4));
      break;
   }
       let fcdaebecbcbafcdfceaaeccfeacdb0 = 3.0;
       let middlewareQ = String.fromCharCode(97,117,116,111,97,114,99,104,105,118,101,95,51,95,55,53,0);
       let selectj: Map<any, any> = new Map([[String.fromCharCode(110,95,57,50,95,116,97,112,0),true ], [String.fromCharCode(97,100,100,114,101,115,115,95,122,95,51,54,0),true ], [String.fromCharCode(102,95,56,53,95,98,119,100,105,102,0),true ]]);
      for (let j = 0; j < 2; j++) {
         middlewareQ += `${middlewareQ.length ^ 2}`;
      }
      for (let t = 0; t < 3; t++) {
         selectj.set(`${fcdaebecbcbafcdfceaaeccfeacdb0}`, middlewareQ.length);
      }
         fcdaebecbcbafcdfceaaeccfeacdb0 /= Math.max(4, parseFloat(`${middlewareQ.length}`));
         middlewareQ = `${middlewareQ.length}`;
      for (let x = 0; x < 1; x++) {
          let dragcloseS = String.fromCharCode(112,104,111,110,101,98,111,111,107,95,111,95,55,56,0);
          let middlebrightnessw = String.fromCharCode(99,111,115,113,105,95,107,95,53,53,0);
          let shared5: Map<any, any> = new Map([[String.fromCharCode(117,95,50,49,95,97,108,97,110,103,117,97,103,101,0),193], [String.fromCharCode(101,95,53,49,95,116,114,105,101,115,0),353]]);
          let successp: Map<any, any> = new Map([[String.fromCharCode(102,95,57,49,95,107,98,100,119,105,110,0),483], [String.fromCharCode(99,95,54,52,0),635], [String.fromCharCode(104,95,48,95,109,105,100,105,0),218]]);
          let mbsplashK = String.fromCharCode(108,95,52,48,95,109,111,118,105,110,103,0);
         middlewareQ += `${dragcloseS.length * 1}`;
         dragcloseS += `${shared5.size * successp.size}`;
         middlebrightnessw += `${shared5.size}`;
         successp = new Map([[`${shared5.size}`, successp.size]]);
         mbsplashK += `${2 * shared5.size}`;
      }
         middlewareQ += `${middlewareQ.length << (Math.min(Math.abs(2), 3))}`;
         middlewareQ = `${1 >> (Math.min(1, middlewareQ.length))}`;
         middlewareQ = "2";
          let emojia = String.fromCharCode(102,102,109,97,108,0);
          let directC = 3;
          let type_0yD = String.fromCharCode(112,95,53,51,95,111,118,101,114,104,101,97,100,0);
         fcdaebecbcbafcdfceaaeccfeacdb0 -= parseFloat(`${3 + middlewareQ.length}`);
         emojia += "1";
         directC >>= Math.min(2, Math.abs((String.fromCharCode(87,0) == emojia ? type_0yD.length : emojia.length)));
         type_0yD += `${(String.fromCharCode(112,0) == type_0yD ? type_0yD.length : directC)}`;
      bootsplashT = 54 < policyO.length;
   if (1.80 <= (4.55 / (Math.max(1, alert9))) || 5 <= (agreementT.length % 2)) {
      agreementT.push(iconsubssuccessk.length * bootS.size);
   }
      videojsJ += 3 - parseInt(`${videojsJ}`);
   while ((parseInt(`${alert9}`) * 1) <= 3 && (alert9 * 5.10) <= 4.54) {
      alert9 += 2 - parseInt(`${videojsJ}`);
      break;
   }
       let libyogay: Map<any, any> = new Map([[String.fromCharCode(106,117,108,105,97,110,95,55,95,51,53,0),425], [String.fromCharCode(114,101,102,108,95,108,95,55,49,0),22]]);
          let graphM = String.fromCharCode(112,95,49,51,95,114,101,112,108,105,101,115,0);
          let submits = 4.0;
          let savep = String.fromCharCode(97,117,116,111,100,101,116,101,99,116,105,111,110,95,122,95,56,57,0);
         libyogay.set(graphM, 3 - graphM.length);
         submits *= (String.fromCharCode(71,0) == savep ? savep.length : parseInt(`${submits}`));
          let gifgoalbgG = 1.0;
          let libavformatl = String.fromCharCode(100,101,99,108,105,110,101,100,95,97,95,51,48,0);
          let analyticsC = false;
         libyogay = new Map([[`${libyogay.size}`, parseInt(`${gifgoalbgG}`)]]);
         gifgoalbgG += (String.fromCharCode(113,0) == libavformatl ? libavformatl.length : (analyticsC ? 5 : 1));
         analyticsC = (((!analyticsC ? 57 : libavformatl.length) % (Math.max(libavformatl.length, 7))) >= 57);
      for (let v = 0; v < 3; v++) {
         libyogay.set(`${libyogay.size}`, libyogay.size);
      }
      videojsJ -= libyogay.size;
      videojsJ *= (agreementT.length ^ (bootsplashT ? 4 : 4));
   if (!agreementT.includes(videojsJ)) {
      videojsJ /= Math.max(agreementT.length >> (Math.min(2, Math.abs(parseInt(`${videojsJ}`)))), 3);
   }
   while (2 <= agreementT.length) {
      bootsplashT = hoverx.length <= 31;
      break;
   }
      videojsJ -= bootS.size << (Math.min(Math.abs(2), 5));
   while ((gemfilet.size >> (Math.min(2, Math.abs(readS)))) < 2) {
      gemfilet = new Map([[`${videojsJ}`, parseInt(`${videojsJ}`)]]);
      break;
   }
      alert9 /= Math.max(2, agreementT.length);

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