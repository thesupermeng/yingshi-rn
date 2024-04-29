import React, { useEffect, useState, useRef } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import VolumeGestureControl from './tt_default';
import BrightnessGestureControl from './tt_adult_anythink';
import BrightnessVolumeSlider from './tt_small_dialog';
import ProgressGestureControl from './tt_macau_vignette';

const GestureControls = {
    VOLUME: 'Volume',
    BRIGHTNESS: 'Brightness',
};

const Icons = {
    [GestureControls.BRIGHTNESS]: {
        noValue: "foundSpinner",
        hasValue: "rewindLoginModels"
    },
    [GestureControls.VOLUME]: {
        noValue: "catagoryShort_jPage",
        hasValue: "downloadVideojs"
    },
}

type ttSmall = {
    onScreenTouched: () => any,
    disableFullScreenGesture: boolean,
    onSkip?: any
    vodType?: string
}

export default ({ onScreenTouched, disableFullScreenGesture, onSkip, vodType = 'vod' }: ttSmall) => {
    const [icon, setIcon] = useState({
        noValue: "catagoryShort_jPage",
        hasValue: "downloadVideojs"
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
       let telegram_: Map<any, any> = new Map([[String.fromCharCode(109,95,50,57,95,102,101,111,102,0),140], [String.fromCharCode(116,95,56,51,95,106,112,101,103,116,114,97,110,0),846]]);
    let sendY = String.fromCharCode(112,97,114,101,110,116,104,101,115,101,115,95,56,95,50,54,0);
    let teaml = true;
    let spinnere: Map<any, any> = new Map([[String.fromCharCode(102,97,100,101,111,117,116,95,114,95,56,56,0),String.fromCharCode(106,95,57,48,95,114,101,102,99,111,117,110,116,101,100,111,98,106,101,99,116,0)], [String.fromCharCode(100,95,49,55,95,105,115,115,101,116,117,103,105,100,0),String.fromCharCode(101,112,115,118,95,53,95,56,51,0)], [String.fromCharCode(101,95,51,49,95,99,111,114,114,101,115,112,111,110,100,101,110,116,115,0),String.fromCharCode(109,111,110,116,95,113,95,51,51,0)]]);
    let dnewinterstitialF: Array<any> = [String.fromCharCode(100,105,115,97,108,108,111,119,95,103,95,50,51,0), String.fromCharCode(119,95,55,54,95,103,114,101,97,116,101,115,116,0), String.fromCharCode(99,111,114,100,122,95,57,95,57,57,0)];
    let popupO = String.fromCharCode(115,95,52,52,95,109,97,120,0);
    let nalyticsP = 1;
    let dycreatork = 2;
    let materialB = String.fromCharCode(103,95,55,57,95,105,110,101,116,0);
    let albumJ = 2;
    let disconnectedY = 5.0;
    let fastforwardn: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,97,108,95,104,95,51,54,0),410], [String.fromCharCode(102,114,97,109,101,115,101,116,116,101,114,95,112,95,54,57,0),552]]);
    let headere = 4.0;
    let mbsplashP: Map<any, any> = new Map([[String.fromCharCode(101,95,50,57,95,115,116,97,109,112,115,0),940], [String.fromCharCode(121,95,57,56,95,109,105,114,114,111,114,105,110,103,0),557], [String.fromCharCode(115,95,56,55,95,99,121,99,108,101,0),569]]);
    let megaphone1 = 1.0;
    let product0 = 3.0;
    let type_dw = 5;
    let androidy = 5.0;
       let sharedV: Array<any> = [848, 632, 948];
       let filterO = String.fromCharCode(121,95,50,55,95,114,101,99,116,0);
      while (1 <= filterO.length) {
         filterO += `${filterO.length * 3}`;
         break;
      }
         filterO = `${(filterO == String.fromCharCode(67,0) ? filterO.length : sharedV.length)}`;
       let downloadedt: Map<any, any> = new Map([[String.fromCharCode(122,95,54,51,95,99,109,111,118,101,0),636], [String.fromCharCode(97,112,112,101,114,97,110,99,101,95,108,95,55,52,0),259]]);
       let megaphoneM: Map<any, any> = new Map([[String.fromCharCode(102,114,105,101,110,100,108,121,95,103,95,52,49,0),268], [String.fromCharCode(112,97,114,97,109,101,116,101,114,95,53,95,57,54,0),683]]);
          let lightq = 1.0;
          let sellH = 5.0;
          let greyS = String.fromCharCode(97,100,100,105,116,105,111,110,95,53,95,49,53,0);
         filterO += `${parseInt(`${lightq}`) ^ 1}`;
         lightq /= Math.max(2, parseFloat(`${greyS.length}`));
         sellH += parseFloat(`${greyS.length}`);
      if ((megaphoneM.size / 5) > 5) {
          let promotionz = String.fromCharCode(104,95,50,50,95,99,111,114,110,101,114,115,0);
          let tickH = 5;
          let projects = String.fromCharCode(98,101,99,97,109,101,95,54,95,57,57,0);
          let networkv = 2.0;
         downloadedt.set(`${tickH}`, tickH);
         promotionz = "2";
         projects = `${promotionz.length}`;
         networkv += 2;
      }
      let whistleM = 6343094 <= megaphoneM.size;
      do {
         megaphoneM.set(`${filterO}`, (filterO == String.fromCharCode(67,0) ? filterO.length : megaphoneM.size));
         if (whistleM) {
            break;
         }
      } while ((!Array.from(megaphoneM.keys()).includes(`${sharedV.length}`)) && whistleM);
      teaml = String.fromCharCode(49,0) == popupO;
      dnewinterstitialF.push(telegram_.size);
       let match7 = 2.0;
       let firebaseC = false;
          let sporta = 1.0;
         match7 /= Math.max(2, (parseFloat(`${parseInt(`${match7}`) + (firebaseC ? 1 : 3)}`)));
         sporta += parseFloat(`${parseInt(`${sporta}`)}`);
          let bannerz = String.fromCharCode(118,95,52,49,95,105,110,102,117,114,97,0);
          let entryO = 4.0;
         firebaseC = 90.38 > entryO || firebaseC;
         bannerz += `${2 ^ bannerz.length}`;
         entryO += parseFloat(`${3 ^ bannerz.length}`);
         match7 += (parseFloat(`${(firebaseC ? 3 : 1) + parseInt(`${match7}`)}`));
          let shirtG: Map<any, any> = new Map([[String.fromCharCode(105,110,116,114,97,120,95,102,95,57,56,0),true ], [String.fromCharCode(115,116,105,99,107,101,114,115,101,116,95,107,95,51,50,0),false ], [String.fromCharCode(98,108,111,99,107,100,115,112,95,118,95,56,49,0),false ]]);
          let progressd = 5.0;
          let currentW = 2.0;
         match7 -= parseFloat(`${2}`);
         shirtG.set(`${progressd}`, 2);
         progressd *= parseFloat(`${1 | parseInt(`${currentW}`)}`);
         currentW *= parseInt(`${currentW}`) ^ 3;
          let chinasameH = true;
         match7 += parseFloat(`${3 + parseInt(`${match7}`)}`);
         chinasameH = !chinasameH;
         match7 /= Math.max(4, parseFloat(`${parseInt(`${match7}`) ^ 2}`));
      dnewinterstitialF = [dnewinterstitialF.length * 1];
      disconnectedY -= parseFloat(`${2}`);
       let textG = 5;
       let time_vtH = 2;
       let more9 = String.fromCharCode(114,101,113,117,105,117,114,101,115,95,120,95,53,49,0);
         time_vtH >>= Math.min(Math.abs(more9.length << (Math.min(3, Math.abs(time_vtH)))), 5);
      for (let o = 0; o < 2; o++) {
         time_vtH /= Math.max(4, 2 + time_vtH);
      }
         more9 = `${time_vtH}`;
       let configuret: Array<any> = [451, 808, 701];
         textG *= more9.length << (Math.min(Math.abs(2), 5));
      let plashM = 9709265 >= configuret.length;
      do {
         configuret.push(1);
         if (plashM) {
            break;
         }
      } while ((1 > textG) && plashM);
         more9 = `${time_vtH - more9.length}`;
      if (configuret.length <= more9.length) {
         more9 = "3";
      }
          let modityv = 2;
          let becomeA = 1.0;
         textG ^= 3;
         modityv %= Math.max(5, 2);
         becomeA /= Math.max(4, parseInt(`${becomeA}`) ^ modityv);
      spinnere = new Map([[`${dycreatork}`, dycreatork >> (Math.min(materialB.length, 3))]]);
      popupO = `${parseInt(`${disconnectedY}`) ^ 1}`;
      popupO += "1";
      materialB = `${albumJ + 3}`;
      nalyticsP *= fastforwardn.size;
   if (3 == (nalyticsP + mbsplashP.size) || 3 == (mbsplashP.size + nalyticsP)) {
      nalyticsP <<= Math.min(Math.abs(1 & spinnere.size), 3);
   }
   if (1.5 > (megaphone1 + 5.77)) {
       let rewardN = 1.0;
       let notificationX: Array<any> = [18, 639, 86];
         rewardN += parseFloat(`${notificationX.length}`);
         notificationX.push(2 ^ parseInt(`${rewardN}`));
       let floaterF = 1;
       let tumbnailb = 2;
      for (let k = 0; k < 2; k++) {
         floaterF |= 2;
      }
          let suggestion2 = String.fromCharCode(98,101,97,114,105,110,103,95,50,95,54,53,0);
          let overlay1 = false;
         floaterF += 1 + floaterF;
         suggestion2 = `${((overlay1 ? 1 : 3))}`;
         overlay1 = (((overlay1 ? 24 : suggestion2.length) ^ suggestion2.length) >= 24);
       let gestures1 = String.fromCharCode(120,95,49,53,95,98,114,111,119,110,0);
       let preview7 = String.fromCharCode(105,110,100,101,120,105,110,103,95,102,95,56,57,0);
      mbsplashP = new Map([[`${disconnectedY}`, parseInt(`${disconnectedY}`) ^ nalyticsP]]);
   }
      nalyticsP <<= Math.min(Math.abs(parseInt(`${disconnectedY}`) / 3), 2);
      spinnere = new Map([[`${teaml}`, ((teaml ? 1 : 5) >> (Math.min(Math.abs(1), 4)))]]);
   for (let i = 0; i < 3; i++) {
      headere /= Math.max(parseFloat(`${telegram_.size}`), 1);
   }
      headere *= parseFloat(`${parseInt(`${headere}`)}`);
      nalyticsP >>= Math.min(3, Math.abs(3 << (Math.min(1, Math.abs(telegram_.size)))));
   let fill6 = dnewinterstitialF.length <= 6844813;
   do {
      dnewinterstitialF.push((sendY == String.fromCharCode(109,0) ? dycreatork : sendY.length));
      if (fill6) {
         break;
      }
   } while (fill6 && ((popupO.length * 2) <= 3 || (popupO.length * 2) <= 4));
       let launchI = String.fromCharCode(109,121,115,101,108,102,95,52,95,50,0);
      if (launchI != String.fromCharCode(109,0)) {
         launchI = `${launchI.length & 3}`;
      }
      if (launchI == launchI) {
          let sellR = true;
          let commentY = 4;
         launchI += "3";
         sellR = 64 > (commentY + commentY);
      }
      let photoy = String.fromCharCode(57,120,102,0) == launchI;
      do {
         launchI = `${launchI.length / (Math.max(2, launchI.length))}`;
         if (photoy) {
            break;
         }
      } while ((launchI == launchI) && photoy);
      megaphone1 /= Math.max(2, parseFloat(`${telegram_.size - 3}`));
      materialB = `${mbsplashP.size}`;
      dycreatork <<= Math.min(1, materialB.length);
   while (1.75 < disconnectedY) {
      nalyticsP |= mbsplashP.size;
      break;
   }
      materialB += `${2 - dnewinterstitialF.length}`;
   if (materialB.startsWith(`${spinnere.size}`)) {
      spinnere = new Map([[`${headere}`, albumJ % 2]]);
   }
   for (let x = 0; x < 2; x++) {
       let delegate_mK: Map<any, any> = new Map([[String.fromCharCode(109,95,54,54,95,100,101,99,111,114,0),253], [String.fromCharCode(109,98,104,115,95,54,95,56,0),616]]);
       let activity2: Array<any> = [696, 905, 132];
      while (4 > (activity2.length >> (Math.min(Math.abs(delegate_mK.size), 1)))) {
         activity2 = [activity2.length];
         break;
      }
      let kickN = activity2.length <= 9720691;
      do {
         activity2.push(delegate_mK.size / (Math.max(4, activity2.length)));
         if (kickN) {
            break;
         }
      } while (kickN && (Array.from(delegate_mK.keys()).includes(`${activity2.length}`)));
      let detailsh = 7428643 >= delegate_mK.size;
      do {
         delegate_mK.set(`${activity2.length}`, 3);
         if (detailsh) {
            break;
         }
      } while ((delegate_mK.get(`${activity2.length}`) == null) && detailsh);
      if (delegate_mK.get(`${activity2.length}`) == null) {
          let floaterO = String.fromCharCode(108,95,57,54,95,105,110,105,116,97,108,0);
         activity2.push(activity2.length);
         floaterO += "3";
      }
          let sidec = String.fromCharCode(117,115,114,99,95,121,95,51,54,0);
         delegate_mK.set(`${activity2.length}`, delegate_mK.size);
         sidec = `${sidec.length * sidec.length}`;
      while (delegate_mK.size > 5) {
          let entry2 = 2.0;
          let entryV = String.fromCharCode(107,95,50,57,95,120,98,105,110,0);
          let frame_z1: Array<any> = [471, 498];
          let checkboxa: Array<any> = [String.fromCharCode(110,117,109,101,114,97,108,115,95,115,95,57,52,0), String.fromCharCode(105,95,51,53,0)];
          let huaweiT = 0;
         delegate_mK = new Map([[`${delegate_mK.size}`, (String.fromCharCode(107,0) == entryV ? delegate_mK.size : entryV.length)]]);
         entry2 += frame_z1.length * 2;
         frame_z1 = [checkboxa.length];
         checkboxa.push(frame_z1.length + checkboxa.length);
         huaweiT ^= checkboxa.length;
         break;
      }
      spinnere = new Map([[`${dnewinterstitialF.length}`, parseInt(`${megaphone1}`) << (Math.min(3, Math.abs(3)))]]);
   }
       let android6: Array<any> = [502, 91];
       let ewardedO = String.fromCharCode(114,95,49,49,95,103,105,118,101,110,0);
          let bottomM = 0.0;
          let episodeP = 5.0;
          let android4 = String.fromCharCode(115,109,105,109,101,95,100,95,54,0);
         ewardedO = "3";
         bottomM += parseFloat(`${android4.length}`);
         episodeP += parseInt(`${bottomM}`) * 3;
         android4 = `${android4.length}`;
      for (let v = 0; v < 3; v++) {
         ewardedO = `${ewardedO.length}`;
      }
      if (1 < (4 & ewardedO.length) || (4 & ewardedO.length) < 4) {
          let relatedm: Array<any> = [869, 732, 732];
          let delegate_65w: Map<any, any> = new Map([[String.fromCharCode(115,104,105,109,115,95,122,95,52,50,0),225], [String.fromCharCode(110,101,97,114,101,115,116,95,104,95,50,49,0),966]]);
          let gmailr: Map<any, any> = new Map([[String.fromCharCode(105,112,113,102,95,100,95,50,53,0),false ], [String.fromCharCode(105,109,112,108,105,99,105,116,108,121,95,102,95,51,48,0),false ], [String.fromCharCode(101,95,52,57,95,98,117,105,108,100,99,111,110,102,0),true ]]);
          let textR = String.fromCharCode(110,95,51,50,95,99,111,111,108,100,111,119,110,115,0);
         ewardedO += `${relatedm.length ^ 2}`;
         relatedm = [1];
         delegate_65w = new Map([[`${gmailr.size}`, delegate_65w.size | 1]]);
         gmailr.set(`${textR}`, 3);
         textR = `${2 >> (Math.min(1, Math.abs(delegate_65w.size)))}`;
      }
      for (let o = 0; o < 3; o++) {
         ewardedO += `${(ewardedO == String.fromCharCode(102,0) ? ewardedO.length : android6.length)}`;
      }
      while ((android6.length | 1) <= 5 && (1 | ewardedO.length) <= 3) {
         ewardedO = `${3 & ewardedO.length}`;
         break;
      }
         android6.push(ewardedO.length + android6.length);
      fastforwardn = new Map([[`${dnewinterstitialF.length}`, nalyticsP]]);
   if (2.33 > (3.42 + product0) || 5 > (type_dw % 1)) {
       let mbsplashv = 0;
       let dplusg = String.fromCharCode(99,111,110,100,105,116,105,111,110,95,113,95,49,54,0);
       let videocommona = 5.0;
       let unselectedv = 2.0;
          let shown = String.fromCharCode(115,119,114,101,115,97,109,112,108,101,114,101,115,95,100,95,50,53,0);
          let mbbannerU = String.fromCharCode(112,105,99,116,121,112,101,95,109,95,51,55,0);
         mbsplashv ^= 3 & dplusg.length;
         shown = `${1 | mbbannerU.length}`;
         mbbannerU += "1";
      while ((mbsplashv - unselectedv) <= 4.27) {
          let circleh = 2;
         mbsplashv |= circleh;
         break;
      }
      while (1 >= (mbsplashv / 2) || 3 >= (dplusg.length / 2)) {
          let castingc = String.fromCharCode(110,95,51,95,114,101,115,117,108,116,115,0);
         dplusg = `${3 >> (Math.min(5, Math.abs(parseInt(`${unselectedv}`))))}`;
         castingc += `${castingc.length + castingc.length}`;
         break;
      }
          let leftR: Map<any, any> = new Map([[String.fromCharCode(103,114,97,109,115,95,119,95,51,0),true ], [String.fromCharCode(99,104,97,110,103,101,100,95,114,95,49,0),false ], [String.fromCharCode(108,95,50,48,95,97,112,112,101,110,100,97,108,108,0),true ]]);
         unselectedv /= Math.max(3, parseFloat(`${3 ^ leftR.size}`));
         videocommona *= parseFloat(`${parseInt(`${videocommona}`) * parseInt(`${unselectedv}`)}`);
      product0 *= parseFloat(`${telegram_.size}`);
   }
      headere += parseFloat(`${type_dw + 1}`);

            setShowSlider(false);
        }, 1000);
    }

    const handleScreenTouch = () => {
       let uploadD = String.fromCharCode(108,97,98,101,108,101,100,95,107,95,49,48,0);
    let selected2: Array<any> = [String.fromCharCode(116,95,51,54,95,115,116,114,107,0), String.fromCharCode(97,95,56,51,95,102,105,110,100,101,112,0), String.fromCharCode(109,114,122,95,111,95,49,53,0)];
    let countdowng = 3.0;
    let successL: Map<any, any> = new Map([[String.fromCharCode(116,111,107,101,110,100,95,121,95,50,57,0),675], [String.fromCharCode(102,95,49,95,97,99,104,105,101,118,101,100,0),815], [String.fromCharCode(99,104,97,110,110,101,108,109,97,112,95,118,95,51,48,0),350]]);
    let activityU = 0;
    let blacklisti: Array<any> = [708, 244];
    let mbsplash6 = String.fromCharCode(106,95,52,54,95,112,97,114,97,98,111,108,108,105,99,0);
    let related9 = String.fromCharCode(115,95,56,95,101,120,112,114,101,115,115,105,111,110,115,0);
    let whistleU = 4;
    let station3 = 5;
    let clearc: Map<any, any> = new Map([[String.fromCharCode(97,110,100,108,101,95,106,95,55,54,0),false ], [String.fromCharCode(111,114,105,101,110,116,97,116,105,111,110,95,120,95,50,0),true ], [String.fromCharCode(97,108,109,111,115,116,95,118,95,56,57,0),false ]]);
   if (1 > (selected2.length << (Math.min(mbsplash6.length, 3))) || 5 > (1 << (Math.min(2, selected2.length)))) {
       let subsn = String.fromCharCode(109,97,120,114,101,97,100,101,114,115,95,115,95,51,55,0);
       let roundC = String.fromCharCode(118,95,56,52,95,102,116,118,98,108,97,110,107,0);
       let description_8xN: Array<any> = [821, 900, 338];
       let container6 = 5;
         roundC = `${container6}`;
      for (let d = 0; d < 3; d++) {
         container6 >>= Math.min(3, Math.abs(container6 | 1));
      }
      let interstitialo = 5471401 >= container6;
      do {
         container6 ^= 2 >> (Math.min(5, Math.abs(container6)));
         if (interstitialo) {
            break;
         }
      } while (((2 - description_8xN.length) == 1) && interstitialo);
      for (let o = 0; o < 1; o++) {
         roundC += `${roundC.length}`;
      }
         subsn += `${description_8xN.length & 2}`;
      if (3 <= (5 / (Math.max(2, roundC.length))) || (container6 / (Math.max(roundC.length, 7))) <= 5) {
          let smallC = String.fromCharCode(102,105,108,101,110,97,109,101,95,98,95,57,57,0);
          let expandS: Array<any> = [784, 145, 778];
         roundC = `${(subsn == String.fromCharCode(66,0) ? subsn.length : container6)}`;
         smallC = `${smallC.length}`;
         expandS = [1];
      }
      let combinedm = String.fromCharCode(117,52,104,119,99,101,101,118,0) == subsn;
      do {
         subsn = `${1 & subsn.length}`;
         if (combinedm) {
            break;
         }
      } while (combinedm && ((description_8xN.length | subsn.length) > 3 && (subsn.length | 3) > 2));
         container6 += description_8xN.length & roundC.length;
         container6 &= roundC.length & subsn.length;
          let indicatorD: Map<any, any> = new Map([[String.fromCharCode(110,95,53,53,95,109,115,101,120,0),String.fromCharCode(97,108,108,121,117,118,95,121,95,49,48,48,0)], [String.fromCharCode(120,95,49,48,48,95,118,105,109,97,103,101,108,111,97,100,101,114,0),String.fromCharCode(109,111,100,101,110,97,109,101,95,55,95,53,52,0)]]);
         container6 &= container6 << (Math.min(Math.abs(indicatorD.size), 1));
         description_8xN = [3 + description_8xN.length];
         subsn += `${subsn.length}`;
      selected2 = [uploadD.length % 3];
   }
       let tumbnailm: Map<any, any> = new Map([[String.fromCharCode(117,95,56,55,95,101,110,104,97,110,99,101,0),String.fromCharCode(109,95,49,49,95,108,115,102,108,115,112,100,0)], [String.fromCharCode(112,111,115,116,102,105,120,95,48,95,52,49,0),String.fromCharCode(98,95,51,54,95,99,104,97,110,110,101,108,115,0)], [String.fromCharCode(98,105,112,114,101,100,95,112,95,53,56,0),String.fromCharCode(100,121,110,97,109,105,99,115,95,101,95,55,50,0)]]);
       let shirtO = 4;
       let anythinkj = String.fromCharCode(109,95,50,55,95,115,117,98,101,120,112,114,0);
      while (!anythinkj.startsWith(`${shirtO}`)) {
         anythinkj = `${shirtO - anythinkj.length}`;
         break;
      }
         shirtO *= anythinkj.length;
      while (!Array.from(tumbnailm.values()).includes(shirtO)) {
          let moduleM: Array<any> = [String.fromCharCode(105,110,116,101,114,108,101,97,118,101,100,95,54,95,49,48,48,0), String.fromCharCode(99,111,109,112,108,101,116,105,111,110,115,95,100,95,52,52,0)];
          let ucopy_1bd = String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,95,54,95,52,57,0);
          let injuryF: Map<any, any> = new Map([[String.fromCharCode(112,114,111,118,105,100,101,100,95,115,95,48,0),String.fromCharCode(97,95,54,52,95,116,121,112,101,100,0)], [String.fromCharCode(117,110,99,111,114,114,95,118,95,50,48,0),String.fromCharCode(104,101,97,100,115,101,116,95,50,95,57,50,0)], [String.fromCharCode(114,111,116,97,116,105,111,110,95,115,95,53,56,0),String.fromCharCode(115,95,49,55,95,102,105,108,101,116,105,109,101,0)]]);
         shirtO -= moduleM.length | 2;
         moduleM = [ucopy_1bd.length & injuryF.size];
         ucopy_1bd = `${2 + ucopy_1bd.length}`;
         injuryF.set(`${ucopy_1bd}`, 3 | injuryF.size);
         break;
      }
      while (4 > anythinkj.length) {
          let combine0 = false;
          let shootO: Array<any> = [788, 673, 794];
          let modelsT = true;
         anythinkj += "2";
         combine0 = shootO.length > 63;
         shootO.push(((modelsT ? 3 : 3) << (Math.min(2, Math.abs((combine0 ? 4 : 3))))));
         modelsT = shootO.includes(combine0);
         break;
      }
       let videojsL = true;
       let gemfileV = false;
      if (!videojsL) {
          let gpays = 0.0;
          let scheduleJ = 3.0;
          let thumbnailh = 5.0;
          let unreada: Array<any> = [535, 385];
         videojsL = tumbnailm.size > anythinkj.length;
         gpays /= Math.max(parseFloat(`${parseInt(`${thumbnailh}`)}`), 1);
         scheduleJ += parseFloat(`${parseInt(`${thumbnailh}`) << (Math.min(unreada.length, 2))}`);
         unreada.push(parseInt(`${thumbnailh}`));
      }
       let sportX = 4.0;
       let rewind5: Array<any> = [437, 693, 709];
          let zhubox = 4;
          let circleg = String.fromCharCode(102,95,57,54,95,117,110,109,117,116,101,100,0);
          let animationj = false;
         tumbnailm = new Map([[`${sportX}`, zhubox / (Math.max(parseInt(`${sportX}`), 6))]]);
         zhubox /= Math.max(3, circleg.length | 3);
         circleg += `${(circleg == String.fromCharCode(55,0) ? circleg.length : (animationj ? 1 : 4))}`;
      blacklisti.push(whistleU);
   if (1 == (3 + successL.size)) {
      successL = new Map([[`${successL.size}`, 3]]);
   }
      blacklisti = [2];
   let overM = 8800353 >= whistleU;
   do {
      whistleU %= Math.max(1, 3);
      if (overM) {
         break;
      }
   } while (((mbsplash6.length + 3) == 5 || 2 == (3 + mbsplash6.length)) && overM);
       let rnewss = false;
      for (let j = 0; j < 1; j++) {
         rnewss = (!rnewss ? !rnewss : rnewss);
      }
          let inactiveA: Map<any, any> = new Map([[String.fromCharCode(110,95,50,48,95,105,102,111,114,109,97,116,0),432], [String.fromCharCode(112,95,48,95,102,114,97,109,101,98,117,102,102,101,114,115,0),127]]);
         rnewss = inactiveA.size == 92 && !rnewss;
         rnewss = rnewss && !rnewss;
      blacklisti = [activityU ^ blacklisti.length];
   for (let y = 0; y < 1; y++) {
      successL = new Map([[`${blacklisti.length}`, 1 << (Math.min(1, uploadD.length))]]);
   }
   for (let h = 0; h < 1; h++) {
      uploadD = `${activityU}`;
   }
       let productY = String.fromCharCode(114,95,49,49,95,115,117,114,102,97,99,101,0);
       let buttonv = String.fromCharCode(114,101,102,105,110,101,95,110,95,53,0);
         productY = `${buttonv.length - 3}`;
      let selectT = String.fromCharCode(98,48,120,105,97,0) == buttonv;
      do {
         buttonv += `${productY.length}`;
         if (selectT) {
            break;
         }
      } while ((1 == buttonv.length) && selectT);
      while (2 < productY.length) {
         productY += `${buttonv.length}`;
         break;
      }
      for (let j = 0; j < 1; j++) {
         buttonv = `${buttonv.length}`;
      }
         buttonv = `${(String.fromCharCode(52,0) == buttonv ? productY.length : buttonv.length)}`;
       let expiredl: Array<any> = [602, 89, 440];
       let colorsg: Array<any> = [523, 553, 84];
      whistleU |= whistleU;
   if (2 >= (selected2.length | 1)) {
       let pressureC: Array<any> = [String.fromCharCode(108,109,108,109,95,103,95,51,53,0), String.fromCharCode(108,105,115,116,101,110,105,110,103,95,49,95,57,54,0), String.fromCharCode(115,116,97,107,101,95,107,95,55,55,0)];
       let dplusj = 1;
       let mbjscommon8 = String.fromCharCode(105,95,51,53,95,112,111,115,116,0);
       let logoutO = String.fromCharCode(112,95,56,51,95,109,97,120,98,117,114,115,116,0);
      for (let e = 0; e < 1; e++) {
          let groupp = String.fromCharCode(114,95,55,95,101,115,115,101,110,116,105,97,108,0);
         logoutO += `${pressureC.length / 1}`;
         groupp = `${groupp.length}`;
      }
         mbjscommon8 += `${mbjscommon8.length}`;
          let brightnessV = String.fromCharCode(114,95,52,57,95,111,112,101,110,115,115,108,99,111,110,102,0);
          let path0 = String.fromCharCode(108,105,102,101,116,105,109,101,95,55,95,54,52,0);
          let nativeexF = 3;
         mbjscommon8 += `${logoutO.length}`;
         brightnessV += `${(String.fromCharCode(107,0) == path0 ? brightnessV.length : path0.length)}`;
         nativeexF %= Math.max(5, 3);
         logoutO = `${dplusj >> (Math.min(4, Math.abs(2)))}`;
         dplusj %= Math.max(mbjscommon8.length, 4);
      selected2 = [parseInt(`${countdowng}`) % (Math.max(10, activityU))];
   }
   if ((5 ^ activityU) <= 5 && (mbsplash6.length ^ 5) <= 5) {
      activityU /= Math.max(1, related9.length);
   }
   let analyticsl = selected2.length >= 7097287;
   do {
      selected2.push(blacklisti.length * 1);
      if (analyticsl) {
         break;
      }
   } while (analyticsl && ((4 / (Math.max(2, selected2.length))) <= 5 && (selected2.length / (Math.max(uploadD.length, 1))) <= 4));
   for (let l = 0; l < 3; l++) {
       let langkeyj: Map<any, any> = new Map([[String.fromCharCode(115,95,54,52,95,102,117,110,103,105,98,108,101,0),338], [String.fromCharCode(104,95,54,51,95,109,121,113,114,0),420]]);
       let benefitX = String.fromCharCode(119,111,114,115,116,95,51,95,55,54,0);
       let activityH = String.fromCharCode(104,95,52,49,95,101,97,115,101,0);
         benefitX = `${benefitX.length >> (Math.min(4, Math.abs(langkeyj.size)))}`;
          let sheetP: Array<any> = [882, 10];
          let acceptedo = String.fromCharCode(103,95,55,55,95,114,101,100,101,108,101,103,97,116,101,0);
         activityH += `${3 << (Math.min(1, sheetP.length))}`;
         sheetP.push(acceptedo.length + 2);
         acceptedo += `${acceptedo.length | 2}`;
         benefitX = `${benefitX.length & 1}`;
      while (benefitX == activityH) {
          let malaysiaf = String.fromCharCode(107,95,51,57,95,115,116,97,114,116,0);
          let hongkongh = 3;
          let patht = String.fromCharCode(98,95,57,51,95,114,101,108,97,116,101,100,0);
          let ewardedz = 3;
          let umengZ: Array<any> = [299, 331, 732];
         activityH += `${malaysiaf.length * patht.length}`;
         malaysiaf = `${ewardedz}`;
         hongkongh %= Math.max(5, umengZ.length % (Math.max(1, 1)));
         patht += `${ewardedz >> (Math.min(2, Math.abs(1)))}`;
         umengZ.push(3 >> (Math.min(1, umengZ.length)));
         break;
      }
      for (let i = 0; i < 3; i++) {
         activityH += `${langkeyj.size}`;
      }
      for (let p = 0; p < 2; p++) {
          let indexi = String.fromCharCode(106,95,49,56,95,117,110,101,120,112,101,99,116,101,100,0);
         langkeyj = new Map([[indexi, 1 % (Math.max(6, benefitX.length))]]);
      }
          let areaa = 0;
          let calendarY = String.fromCharCode(105,110,116,101,114,108,101,97,118,101,100,95,97,95,54,56,0);
         langkeyj = new Map([[`${langkeyj.size}`, langkeyj.size - 2]]);
         areaa |= 2;
         calendarY = `${areaa}`;
      for (let b = 0; b < 3; b++) {
         benefitX += `${activityH.length | langkeyj.size}`;
      }
       let regengV = 1.0;
       let matchO = 2.0;
      successL.set(uploadD, uploadD.length);
   }
   if (2 <= (3 | selected2.length)) {
      uploadD = `${selected2.length >> (Math.min(Math.abs(2), 4))}`;
   }
      blacklisti = [2 | parseInt(`${countdowng}`)];
       let submit3 = 2.0;
         submit3 -= parseFloat(`${parseInt(`${submit3}`) | parseInt(`${submit3}`)}`);
      if ((1.34 - submit3) == 4.14 || 3.68 == (1.34 + submit3)) {
         submit3 += parseFloat(`${parseInt(`${submit3}`)}`);
      }
         submit3 += parseFloat(`${parseInt(`${submit3}`) | 3}`);
      successL = new Map([[`${selected2.length}`, selected2.length ^ uploadD.length]]);
   while (2 > whistleU) {
      whistleU &= (String.fromCharCode(104,0) == mbsplash6 ? blacklisti.length : mbsplash6.length);
      break;
   }
   while (blacklisti.includes(station3)) {
       let main_eN = 4.0;
      while (main_eN >= 5.63) {
         main_eN += parseInt(`${main_eN}`);
         break;
      }
          let launcherl = true;
          let signinupL = 0.0;
         main_eN += parseInt(`${main_eN}`) / 2;
         launcherl = signinupL == 53.46 || !launcherl;
         signinupL /= Math.max((parseInt(`${signinupL}`) / (Math.max(10, (launcherl ? 4 : 2)))), 4);
      let dialogi = main_eN >= 5155740.0;
      do {
         main_eN += parseInt(`${main_eN}`) / 3;
         if (dialogi) {
            break;
         }
      } while (((4.5 - main_eN) < 5.12 || 1.35 < (4.5 + main_eN)) && dialogi);
      blacklisti.push(whistleU + 1);
      break;
   }
   let hoverx = 7860639.0 >= countdowng;
   do {
      countdowng *= parseFloat(`${parseInt(`${countdowng}`)}`);
      if (hoverx) {
         break;
      }
   } while ((2 == (1 ^ selected2.length)) && hoverx);
      successL.set(`${station3}`, station3 - selected2.length);

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