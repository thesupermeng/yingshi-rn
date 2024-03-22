import React, { useEffect, useState, useRef } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import VolumeGestureControl from './ble_episodes';
import BrightnessGestureControl from './rv_field_description';
import BrightnessVolumeSlider from './wkj_playlist';
import ProgressGestureControl from './v_twitter_target';

const GestureControls = {
    VOLUME: 'Volume',
    BRIGHTNESS: 'Brightness',
};

const Icons = {
    [GestureControls.BRIGHTNESS]: {
        noValue: "sportLaunchWatch",
        hasValue: "moduleFrame_jsActive"
    },
    [GestureControls.VOLUME]: {
        noValue: "unselectedDark",
        hasValue: "dangerThumbnailMode"
    },
}

type XFillButton = {
    onScreenTouched: () => any,
    disableFullScreenGesture: boolean,
    onSkip?: any
    vodType?: string
}

export default ({ onScreenTouched, disableFullScreenGesture, onSkip, vodType = 'vod' }: XFillButton) => {
    const [icon, setIcon] = useState({
        noValue: "unselectedDark",
        hasValue: "dangerThumbnailMode"
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
       let favoriteU = String.fromCharCode(115,99,117,98,98,101,114,95,111,95,56,54,0);
    let internetU = 5;
    let predictiond = String.fromCharCode(114,95,54,55,95,104,105,103,104,108,105,103,116,101,100,0);
    let sourceX: Array<any> = [String.fromCharCode(105,116,101,114,97,116,101,95,51,95,52,53,0), String.fromCharCode(120,95,54,55,95,102,112,101,108,0), String.fromCharCode(113,95,57,53,95,108,105,109,105,116,101,100,0)];
    let emojix = String.fromCharCode(98,97,115,105,115,95,101,95,51,48,0);
    let main_uH = String.fromCharCode(114,95,57,57,95,115,121,110,116,104,0);
    let crossr = String.fromCharCode(117,110,97,115,115,105,103,110,101,100,95,48,95,56,0);
    let modityn = String.fromCharCode(108,105,110,107,95,98,95,53,50,0);
   while (emojix.length == main_uH.length) {
       let middleM = false;
       let matchX: Array<any> = [String.fromCharCode(115,95,53,51,95,101,99,104,111,0), String.fromCharCode(110,95,57,95,119,104,105,116,101,0)];
         middleM = middleM || matchX.length > 32;
      for (let c = 0; c < 1; c++) {
         matchX = [((middleM ? 2 : 1) ^ matchX.length)];
      }
         middleM = matchX.includes(middleM);
          let arrow2: Map<any, any> = new Map([[String.fromCharCode(117,105,110,116,112,111,119,95,111,95,50,55,0),69], [String.fromCharCode(115,121,110,116,104,101,115,105,122,101,95,50,95,57,48,0),500]]);
          let foundw: Map<any, any> = new Map([[String.fromCharCode(99,111,110,118,101,114,116,101,100,95,53,95,54,51,0),true ], [String.fromCharCode(116,95,57,51,95,101,110,116,105,116,101,115,0),false ], [String.fromCharCode(107,95,55,55,95,114,101,108,97,121,101,100,0),true ]]);
         middleM = null == arrow2.get(`${middleM}`);
         arrow2.set(`${foundw.size}`, 3);
         foundw.set(`${foundw.size}`, 2);
         middleM = matchX.includes(middleM);
      for (let j = 0; j < 3; j++) {
         middleM = matchX.length > 12;
      }
      emojix += `${favoriteU.length ^ 1}`;
      break;
   }
      internetU /= Math.max(5, 2);
   let sentryi = String.fromCharCode(106,119,48,98,0) == predictiond;
   do {
      predictiond += "2";
      if (sentryi) {
         break;
      }
   } while (sentryi && (predictiond != String.fromCharCode(76,0) || emojix.length >= 2));
      main_uH += `${main_uH.length + 3}`;
   for (let o = 0; o < 3; o++) {
       let shirtW = String.fromCharCode(111,95,54,57,95,112,114,111,114,101,115,100,101,99,0);
       let analyticsg = 2.0;
       let matchesO: Map<any, any> = new Map([[String.fromCharCode(100,95,57,54,95,105,115,97,108,110,117,109,0),304], [String.fromCharCode(115,95,53,48,95,109,97,116,99,104,101,115,0),952], [String.fromCharCode(122,95,54,48,95,110,105,115,116,122,0),52]]);
       let teama = String.fromCharCode(112,114,101,118,105,111,117,115,95,107,95,50,50,0);
       let unreadS = String.fromCharCode(104,95,50,49,95,108,115,104,105,102,116,0);
          let statistics0: Array<any> = [String.fromCharCode(120,95,54,49,95,116,105,109,101,115,0), String.fromCharCode(115,95,48,95,97,112,112,108,101,0), String.fromCharCode(113,95,49,48,48,0)];
          let customK = 5.0;
         shirtW += "3";
         statistics0.push(parseInt(`${customK}`) | 3);
         customK *= parseFloat(`${parseInt(`${customK}`) >> (Math.min(statistics0.length, 5))}`);
      for (let b = 0; b < 3; b++) {
          let whistleu: Array<any> = [842, 603, 961];
          let targetj = String.fromCharCode(116,105,110,116,95,121,95,57,56,0);
          let watchv = false;
          let reducerF = true;
         teama += `${3 << (Math.min(5, whistleu.length))}`;
         whistleu.push(targetj.length);
         targetj += `${targetj.length}`;
         watchv = targetj.startsWith(`${reducerF}`);
      }
          let v_playerW = 4;
          let historyQ = String.fromCharCode(115,108,105,100,101,114,95,118,95,52,54,0);
         analyticsg += historyQ.length % (Math.max(2, 8));
         v_playerW *= v_playerW - v_playerW;
         historyQ = `${2 | v_playerW}`;
      let goal6 = 9866247.0 <= analyticsg;
      do {
         analyticsg /= Math.max(2 << (Math.min(2, Math.abs(parseInt(`${analyticsg}`)))), 1);
         if (goal6) {
            break;
         }
      } while ((!Array.from(matchesO.values()).includes(analyticsg)) && goal6);
          let mathk = false;
         unreadS += `${((mathk ? 3 : 2) % (Math.max(parseInt(`${analyticsg}`), 3)))}`;
      for (let y = 0; y < 3; y++) {
         shirtW = `${matchesO.size}`;
      }
       let teamy = String.fromCharCode(101,95,53,52,95,118,115,102,114,97,109,101,0);
      while (3.6 <= (analyticsg / 2.100)) {
         teamy += `${shirtW.length - parseInt(`${analyticsg}`)}`;
         break;
      }
      main_uH += `${sourceX.length + 1}`;
   }
   for (let i = 0; i < 1; i++) {
       let profileW = 4.0;
       let play_ = String.fromCharCode(116,95,55,95,115,116,114,111,107,101,114,0);
       let lightt = String.fromCharCode(118,111,105,112,95,122,95,54,54,0);
       let chartY = 2;
       let downloadW = 1.0;
       let sentryS = 1.0;
       let update_ej3 = String.fromCharCode(117,95,55,48,95,115,99,114,101,101,110,99,97,115,116,0);
          let routerQ: Array<any> = [925, 32];
          let l_centerl = String.fromCharCode(100,101,99,111,100,101,112,108,97,110,101,95,109,95,53,48,0);
          let downloaded5 = String.fromCharCode(99,111,109,109,97,110,100,115,95,97,95,52,53,0);
         lightt = `${lightt.length}`;
         routerQ.push(routerQ.length);
         l_centerl += `${2 >> (Math.min(5, downloaded5.length))}`;
         downloaded5 = `${l_centerl.length | downloaded5.length}`;
         play_ = `${chartY + 1}`;
      for (let y = 0; y < 3; y++) {
         sentryS += parseFloat(`${parseInt(`${profileW}`)}`);
      }
      if ((sentryS / (Math.max(8, parseFloat(`${play_.length}`)))) >= 4.26) {
         play_ += `${parseInt(`${sentryS}`) << (Math.min(1, Math.abs(chartY)))}`;
      }
      if (3 <= chartY) {
         lightt = `${chartY}`;
      }
       let champion_ = 0.0;
       let modityX = 2.0;
      for (let p = 0; p < 2; p++) {
         champion_ *= parseFloat(`${3 % (Math.max(chartY, 7))}`);
      }
         sentryS += parseFloat(`${chartY}`);
      if (2 < (3 & update_ej3.length) || (3 & chartY) < 4) {
          let analytico = String.fromCharCode(105,110,105,116,97,99,107,95,56,95,53,54,0);
         chartY += update_ej3.length;
         analytico += `${(String.fromCharCode(107,0) == analytico ? analytico.length : analytico.length)}`;
      }
      let x_centera = modityX >= 7545574.0;
      do {
         modityX -= parseFloat(`${3 / (Math.max(7, parseInt(`${champion_}`)))}`);
         if (x_centera) {
            break;
         }
      } while (((parseFloat(`${update_ej3.length}`) + modityX) < 5.100 && 4 < (2 << (Math.min(3, update_ej3.length)))) && x_centera);
      emojix = `${(String.fromCharCode(95,0) == favoriteU ? sourceX.length : favoriteU.length)}`;
   }
      sourceX.push(favoriteU.length);
      sourceX.push(sourceX.length);
   if (emojix != String.fromCharCode(51,0)) {
       let yellowK = 2.0;
      while (yellowK > yellowK) {
         yellowK -= parseFloat(`${3 & parseInt(`${yellowK}`)}`);
         break;
      }
      for (let e = 0; e < 1; e++) {
         yellowK -= parseFloat(`${3}`);
      }
         yellowK *= parseFloat(`${parseInt(`${yellowK}`) + parseInt(`${yellowK}`)}`);
      main_uH = `${2 - emojix.length}`;
   }
      predictiond = `${main_uH.length}`;
   for (let m = 0; m < 1; m++) {
      emojix += "1";
   }
   while ((sourceX.length >> (Math.min(1, Math.abs(internetU)))) == 3) {
      internetU += 1;
      break;
   }
      crossr = `${1 | main_uH.length}`;
   for (let l = 0; l < 1; l++) {
       let commentJ = String.fromCharCode(102,95,53,95,108,101,97,118,105,110,103,0);
       let alertZ: Map<any, any> = new Map([[String.fromCharCode(121,95,49,48,95,106,115,105,109,100,99,112,117,0),467], [String.fromCharCode(105,95,55,49,95,104,114,101,97,100,0),24]]);
       let b_imageA: Map<any, any> = new Map([[String.fromCharCode(103,95,53,49,95,103,101,116,112,97,100,100,114,115,0),450], [String.fromCharCode(105,115,115,117,101,114,95,115,95,53,56,0),293]]);
          let moonr = String.fromCharCode(112,97,114,97,108,108,101,108,95,53,95,53,48,0);
          let aboutc = String.fromCharCode(121,109,111,100,101,95,109,95,50,51,0);
         alertZ.set(moonr, b_imageA.size);
         moonr += "3";
         aboutc += `${1 ^ aboutc.length}`;
      if (alertZ.size <= 3) {
          let infov = String.fromCharCode(98,114,111,107,101,110,95,103,95,57,49,0);
          let catagory6 = String.fromCharCode(112,101,101,114,95,112,95,55,52,0);
          let private_bc8 = String.fromCharCode(100,95,52,56,95,117,110,101,110,99,114,121,112,116,101,100,0);
          let backs = 0.0;
          let basketballm = 0;
         alertZ = new Map([[`${b_imageA.size}`, (infov == String.fromCharCode(65,0) ? b_imageA.size : infov.length)]]);
         catagory6 += `${catagory6.length >> (Math.min(Math.abs(1), 4))}`;
         private_bc8 += `${basketballm}`;
         backs *= 1;
         basketballm *= parseInt(`${backs}`);
      }
      internetU ^= favoriteU.length - internetU;
      commentJ += `${(String.fromCharCode(109,0) == commentJ ? commentJ.length : commentJ.length)}`;
   }
      emojix += `${(emojix == String.fromCharCode(108,0) ? sourceX.length : emojix.length)}`;
   for (let j = 0; j < 3; j++) {
       let detailsn = 3.0;
      for (let z = 0; z < 3; z++) {
         detailsn += parseInt(`${detailsn}`) / 3;
      }
      for (let f = 0; f < 2; f++) {
         detailsn *= parseInt(`${detailsn}`) - 1;
      }
         detailsn += parseInt(`${detailsn}`);
      sourceX.push(internetU);
   }
       let greeny = false;
         greeny = (!greeny ? greeny : !greeny);
      for (let i = 0; i < 3; i++) {
         greeny = !greeny;
      }
          let recommendationS = String.fromCharCode(99,111,110,116,95,105,95,50,54,0);
          let penaltyN = String.fromCharCode(109,97,110,97,103,101,109,101,110,116,95,112,95,54,51,0);
         greeny = ((penaltyN.length >> (Math.min(2, Math.abs((!greeny ? 45 : penaltyN.length))))) == 45);
         recommendationS += "3";
      emojix = `${predictiond.length}`;

            setShowSlider(false);
        }, 1000);
    }

    const handleScreenTouch = () => {
       let groupT = 0.0;
    let largeg = true;
    let floatingu = String.fromCharCode(102,95,53,50,95,101,100,103,101,115,0);
    let areap: Map<any, any> = new Map([[String.fromCharCode(97,103,97,105,110,115,116,95,51,95,53,54,0),false ], [String.fromCharCode(115,98,103,112,95,115,95,52,57,0),false ]]);
    let giftF = String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,95,102,95,57,0);
    let filedG = String.fromCharCode(98,95,54,55,95,101,110,99,111,100,97,98,108,101,0);
    let settingQ = String.fromCharCode(102,105,114,115,116,112,97,115,115,95,102,95,53,57,0);
    let playlistw = String.fromCharCode(100,95,57,95,108,111,99,107,109,103,114,0);
    let type_2na: Map<any, any> = new Map([[String.fromCharCode(107,95,52,57,95,109,112,101,103,116,115,0),String.fromCharCode(106,95,50,52,95,114,111,117,116,101,0)], [String.fromCharCode(121,109,111,100,101,95,110,95,49,52,0),String.fromCharCode(113,95,56,54,95,115,116,105,99,107,101,114,0)]]);
    let hnewsq = 4;
    let analyticf = 2.0;
    let areaG = String.fromCharCode(97,114,102,113,95,105,95,54,53,0);
    let grey8 = String.fromCharCode(112,111,105,110,116,95,100,95,55,50,0);
    let details6 = false;
    let commonP = true;
    let sliderB: Map<any, any> = new Map([[String.fromCharCode(112,117,108,108,95,119,95,49,56,0),333], [String.fromCharCode(108,95,56,56,95,104,100,99,100,0),468], [String.fromCharCode(121,117,118,121,97,95,109,95,50,48,0),941]]);
      hnewsq |= floatingu.length / (Math.max(4, playlistw.length));
       let submit8 = String.fromCharCode(108,95,51,52,95,105,119,97,108,115,104,0);
         submit8 += `${submit8.length}`;
      let signinupY = submit8.length <= 6740572;
      do {
          let telegram9 = true;
          let google9 = false;
          let gmail9 = 2.0;
          let basketballr = 0;
          let catalogg: Array<any> = [148, 900, 892];
         submit8 = `${basketballr}`;
         telegram9 = (!telegram9 ? !google9 : !telegram9);
         google9 = gmail9 > 58.86;
         gmail9 /= Math.max((parseFloat(`${1 ^ (google9 ? 3 : 2)}`)), 2);
         basketballr += 3 + parseInt(`${gmail9}`);
         catalogg = [3 - catalogg.length];
         if (signinupY) {
            break;
         }
      } while ((submit8.length < submit8.length) && signinupY);
         submit8 += `${submit8.length << (Math.min(Math.abs(2), 5))}`;
      filedG += `${1 % (Math.max(3, giftF.length))}`;
   for (let j = 0; j < 1; j++) {
      settingQ = `${playlistw.length << (Math.min(Math.abs(3), 5))}`;
   }
      playlistw = `${giftF.length - 3}`;
       let internet7: Map<any, any> = new Map([[String.fromCharCode(115,101,101,107,105,110,103,95,100,95,51,51,0),String.fromCharCode(99,119,110,100,95,97,95,57,52,0)], [String.fromCharCode(119,95,55,57,95,110,101,103,111,116,105,97,116,101,0),String.fromCharCode(102,119,100,95,117,95,49,0)]]);
      let minio = internet7.size >= 6225832;
      do {
         internet7 = new Map([[`${internet7.size}`, internet7.size & 1]]);
         if (minio) {
            break;
         }
      } while ((internet7.get(`${internet7.size}`) != null) && minio);
      for (let y = 0; y < 2; y++) {
         internet7 = new Map([[`${internet7.size}`, internet7.size]]);
      }
         internet7 = new Map([[`${internet7.size}`, internet7.size]]);
      groupT *= hnewsq - 3;
       let typingq: Map<any, any> = new Map([[String.fromCharCode(118,95,52,48,95,119,105,108,108,0),744], [String.fromCharCode(122,95,49,55,95,97,116,116,97,99,104,101,100,0),288]]);
      while (4 <= (typingq.size & 1) || 4 <= (1 & typingq.size)) {
          let borderless1 = String.fromCharCode(114,103,98,116,111,95,119,95,51,57,0);
          let disconnectedx = 3.0;
         typingq.set(borderless1, borderless1.length);
         disconnectedx -= parseFloat(`${1}`);
         break;
      }
      let renewm = typingq.size >= 5171773;
      do {
          let twitter1: Map<any, any> = new Map([[String.fromCharCode(109,95,57,50,95,115,121,110,99,112,111,105,110,116,0),343], [String.fromCharCode(114,111,119,115,112,97,110,95,114,95,53,0),743], [String.fromCharCode(114,101,97,100,98,121,116,101,95,118,95,51,52,0),766]]);
          let matchr = String.fromCharCode(108,108,110,119,95,117,95,54,57,0);
          let vietnam8 = String.fromCharCode(99,111,109,112,114,101,115,115,111,114,95,50,95,53,51,0);
          let showO = String.fromCharCode(116,95,54,49,95,108,97,110,99,122,111,115,0);
         typingq.set(vietnam8, vietnam8.length | matchr.length);
         twitter1 = new Map([[`${twitter1.size}`, (showO == String.fromCharCode(85,0) ? showO.length : twitter1.size)]]);
         matchr = "1";
         if (renewm) {
            break;
         }
      } while ((!Array.from(typingq.values()).includes(typingq.size)) && renewm);
      if ((typingq.size * typingq.size) == 1 && (typingq.size * 1) == 5) {
          let fulln = String.fromCharCode(109,95,53,54,95,101,111,109,101,116,114,121,0);
          let pressurej = false;
          let benefitS = String.fromCharCode(100,95,57,53,95,99,97,115,99,97,100,101,100,0);
          let assistE = String.fromCharCode(98,95,53,95,105,110,116,101,114,115,101,99,116,105,111,110,0);
          let memberA = String.fromCharCode(97,99,116,111,114,115,95,53,95,52,54,0);
         typingq.set(benefitS, benefitS.length ^ typingq.size);
         fulln += `${memberA.length}`;
         pressurej = assistE.length >= memberA.length;
         assistE = "1";
      }
      giftF += `${typingq.size}`;
      hnewsq >>= Math.min(Math.abs((filedG == String.fromCharCode(85,0) ? hnewsq : filedG.length)), 1);
   let anytimev = 7203013.0 >= groupT;
   do {
      groupT += (String.fromCharCode(106,0) == settingQ ? (largeg ? 4 : 1) : settingQ.length);
      if (anytimev) {
         break;
      }
   } while (anytimev && (areap.size < 2));
       let backgroundW = String.fromCharCode(113,95,50,56,95,100,98,108,112,0);
       let n_centero: Array<any> = [318, 194];
       let shared5 = 3;
         backgroundW = `${shared5}`;
          let mutedv = String.fromCharCode(115,99,114,101,101,110,112,114,101,115,115,111,95,48,95,52,52,0);
         backgroundW += "2 | shared5";
         mutedv += `${mutedv.length - 2}`;
          let checkbox_ = String.fromCharCode(104,95,57,56,95,115,116,114,105,112,101,0);
          let ballP = String.fromCharCode(104,95,48,95,112,97,99,107,101,116,105,122,101,114,0);
          let condensed0: Map<any, any> = new Map([[String.fromCharCode(118,95,56,95,102,111,114,103,101,116,0),String.fromCharCode(99,95,55,55,95,115,116,114,107,0)], [String.fromCharCode(99,95,53,51,95,99,105,112,104,101,114,0),String.fromCharCode(116,95,52,54,95,105,115,101,109,112,116,121,0)], [String.fromCharCode(102,111,112,101,110,95,102,95,49,54,0),String.fromCharCode(111,112,117,115,116,97,98,95,105,95,55,50,0)]]);
         shared5 |= 3 % (Math.max(6, shared5));
         checkbox_ = `${checkbox_.length - ballP.length}`;
         ballP = `${checkbox_.length}`;
         condensed0.set(checkbox_, checkbox_.length);
      while (backgroundW.length >= 4) {
         backgroundW = `${n_centero.length}`;
         break;
      }
      let nnewsQ = 5585424 <= shared5;
      do {
         shared5 ^= n_centero.length;
         if (nnewsQ) {
            break;
         }
      } while (nnewsQ && ((3 + backgroundW.length) <= 5));
          let hongkongN = true;
          let customw = 4.0;
          let penaltys = 1.0;
         backgroundW += `${shared5 << (Math.min(5, Math.abs(3)))}`;
         hongkongN = !hongkongN;
         customw *= parseFloat(`${parseInt(`${penaltys}`) + parseInt(`${customw}`)}`);
         penaltys *= 3 % (Math.max(parseInt(`${penaltys}`), 9));
       let areaX: Map<any, any> = new Map([[String.fromCharCode(110,118,100,101,99,95,121,95,57,55,0),926], [String.fromCharCode(112,95,51,53,95,118,105,100,115,116,97,98,117,116,105,108,115,0),359]]);
       let lineN: Map<any, any> = new Map([[String.fromCharCode(120,95,51,55,95,112,114,111,106,101,99,116,105,111,110,115,0),341], [String.fromCharCode(112,95,57,49,95,109,111,100,117,108,117,115,0),541], [String.fromCharCode(98,110,100,101,99,95,55,95,57,49,0),937]]);
      if (areaX.get(`${n_centero.length}`) != null) {
         n_centero.push(1);
      }
      for (let e = 0; e < 3; e++) {
         lineN = new Map([[`${lineN.size}`, shared5 / (Math.max(4, lineN.size))]]);
      }
      groupT -= settingQ.length;
   let floaterI = areap.size >= 7814736;
   do {
      areap = new Map([[floatingu, floatingu.length]]);
      if (floaterI) {
         break;
      }
   } while (floaterI && (1 == (areap.size - playlistw.length) || (1 - areap.size) == 1));
   while (2 <= (giftF.length - 1)) {
       let typesO = String.fromCharCode(99,112,117,117,115,101,100,95,52,95,50,52,0);
       let favoriteG = String.fromCharCode(108,95,51,49,95,102,116,115,97,117,120,0);
          let infoH = 2.0;
          let vignetteu: Map<any, any> = new Map([[String.fromCharCode(114,95,56,48,95,118,109,104,100,0),422], [String.fromCharCode(112,95,49,51,95,109,111,100,105,102,121,0),949]]);
         typesO += "3";
         infoH /= Math.max(2, parseInt(`${infoH}`));
         vignetteu = new Map([[`${vignetteu.size}`, 1]]);
      let placementL = typesO == String.fromCharCode(55,57,107,111,56,0);
      do {
         typesO = `${typesO.length | favoriteG.length}`;
         if (placementL) {
            break;
         }
      } while (placementL && (typesO.startsWith(favoriteG)));
       let albumh = String.fromCharCode(108,111,119,101,115,116,95,105,95,55,52,0);
       let tickF = String.fromCharCode(106,95,54,52,95,99,108,105,112,98,111,97,114,100,0);
         albumh = "3";
         albumh = "2";
       let a_imageM: Map<any, any> = new Map([[String.fromCharCode(102,95,51,95,100,105,115,116,97,110,99,101,115,0),true ], [String.fromCharCode(99,111,110,116,97,99,116,115,95,113,95,54,52,0),false ]]);
       let rightn: Map<any, any> = new Map([[String.fromCharCode(103,95,52,53,95,101,120,112,111,114,116,0),false ], [String.fromCharCode(115,105,110,95,57,95,51,50,0),true ]]);
      areap = new Map([[`${hnewsq}`, hnewsq + parseInt(`${groupT}`)]]);
      break;
   }
      floatingu = `${type_2na.size ^ 3}`;
      playlistw = `${type_2na.size}`;
      hnewsq <<= Math.min(1, Math.abs(1));
       let injuryQ = String.fromCharCode(109,95,55,53,95,116,117,114,98,117,108,101,110,99,101,0);
       let detailj = String.fromCharCode(115,113,117,97,114,101,115,95,119,95,51,53,0);
       let smallx = String.fromCharCode(97,95,53,51,95,99,109,112,97,100,100,114,0);
      if (smallx.endsWith(detailj)) {
          let x_count7 = 1.0;
         smallx += `${smallx.length}`;
         x_count7 += parseFloat(`${parseInt(`${x_count7}`)}`);
      }
      if (smallx.startsWith(detailj)) {
         detailj = "2";
      }
         smallx = `${smallx.length + 3}`;
      while (4 >= detailj.length && smallx == String.fromCharCode(106,0)) {
         detailj += `${smallx.length}`;
         break;
      }
      let logof = String.fromCharCode(120,95,102,95,97,101,119,115,112,103,0) == injuryQ;
      do {
         injuryQ = `${injuryQ.length}`;
         if (logof) {
            break;
         }
      } while (logof && (detailj.length >= 5));
          let update_ea = String.fromCharCode(97,108,112,97,95,49,95,54,57,0);
          let forwardq = String.fromCharCode(114,95,54,53,95,108,105,98,99,0);
          let hover6 = 0.0;
         detailj = `${injuryQ.length}`;
         update_ea = `${parseInt(`${hover6}`) / 2}`;
         forwardq = `${parseInt(`${hover6}`) >> (Math.min(forwardq.length, 2))}`;
         smallx += `${(injuryQ == String.fromCharCode(48,0) ? detailj.length : injuryQ.length)}`;
      while (detailj != String.fromCharCode(55,0)) {
         injuryQ += `${detailj.length}`;
         break;
      }
      while (smallx.length < injuryQ.length) {
         injuryQ = `${detailj.length}`;
         break;
      }
      type_2na.set(`${groupT}`, 2 % (Math.max(8, smallx.length)));
      areap = new Map([[`${type_2na.size}`, 3 * type_2na.size]]);
   for (let c = 0; c < 3; c++) {
      hnewsq -= (playlistw == String.fromCharCode(98,0) ? playlistw.length : areap.size);
   }
       let unselectedJ: Array<any> = [761, 139, 86];
      let analyticsT = 8577970 <= unselectedJ.length;
      do {
         unselectedJ = [unselectedJ.length % 1];
         if (analyticsT) {
            break;
         }
      } while (((1 & unselectedJ.length) <= 5) && analyticsT);
         unselectedJ.push(1 | unselectedJ.length);
      for (let n = 0; n < 1; n++) {
          let streamingz = String.fromCharCode(117,95,50,50,95,114,101,115,116,114,105,99,116,105,111,110,0);
          let agreementg = String.fromCharCode(116,105,109,101,98,97,115,101,95,99,95,56,56,0);
         unselectedJ.push(unselectedJ.length ^ streamingz.length);
         streamingz += `${agreementg.length}`;
         agreementg = `${agreementg.length << (Math.min(Math.abs(1), 1))}`;
      }
      analyticf *= parseFloat(`${hnewsq}`);
      type_2na.set(`${largeg}`, ((largeg ? 3 : 5) - parseInt(`${groupT}`)));
      settingQ += `${(3 * (largeg ? 5 : 5))}`;
       let line7 = String.fromCharCode(103,104,97,115,104,95,56,95,50,53,0);
          let short_tE = 4.0;
          let matchp = String.fromCharCode(115,117,112,112,114,101,115,115,105,111,110,95,49,95,54,0);
          let otherw = String.fromCharCode(108,95,54,52,95,98,116,110,99,108,105,99,107,0);
         line7 += `${line7.length}`;
         short_tE += parseFloat(`${matchp.length}`);
         matchp = `${matchp.length}`;
         otherw += `${2 | otherw.length}`;
         line7 += `${3 << (Math.min(2, line7.length))}`;
      for (let i = 0; i < 3; i++) {
          let emptyU = 5.0;
          let profileg = String.fromCharCode(101,95,56,56,95,100,101,99,111,100,101,120,0);
          let filterU = String.fromCharCode(100,105,102,102,101,114,95,115,95,49,0);
          let native1: Map<any, any> = new Map([[String.fromCharCode(99,97,109,101,108,95,117,95,52,50,0),false ], [String.fromCharCode(98,100,115,95,98,95,52,54,0),true ], [String.fromCharCode(101,95,51,54,95,112,114,111,106,101,99,116,0),true ]]);
         line7 = `${2 % (Math.max(2, filterU.length))}`;
         emptyU /= Math.max(parseFloat(`${native1.size}`), 3);
         profileg += `${1 + profileg.length}`;
         filterU = `${profileg.length}`;
         native1.set(`${emptyU}`, parseInt(`${emptyU}`) - native1.size);
      }
      filedG += "1";
   for (let z = 0; z < 1; z++) {
      analyticf *= parseFloat(`${1 * areaG.length}`);
   }
      playlistw = `${parseInt(`${analyticf}`)}`;

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