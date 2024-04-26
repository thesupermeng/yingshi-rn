import React, { useEffect, useState, useRef } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import VolumeGestureControl from './wawa_combine';
import BrightnessGestureControl from './wawa_iconclosewhitebg_iconeye';
import BrightnessVolumeSlider from './wawa_whistle';
import ProgressGestureControl from './wawa_phoneshare_defaultplayerimg';

const GestureControls = {
    VOLUME: 'Volume',
    BRIGHTNESS: 'Brightness',
};

const Icons = {
    [GestureControls.BRIGHTNESS]: {
        noValue: "bellActionsNews",
        hasValue: "mailPauseOthermatchdetailbg"
    },
    [GestureControls.VOLUME]: {
        noValue: "libyogaGesturesSubs",
        hasValue: "subinStatsnomoredata"
    },
}

type wawaAwayShow = {
    onScreenTouched: () => any,
    disableFullScreenGesture: boolean,
    onSkip?: any
    vodType?: string
}

export default ({ onScreenTouched, disableFullScreenGesture, onSkip, vodType = 'vod' }: wawaAwayShow) => {
    const [icon, setIcon] = useState({
        noValue: "libyogaGesturesSubs",
        hasValue: "subinStatsnomoredata"
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
       let backiconM = String.fromCharCode(98,105,116,114,101,118,0);
    let layoute: Array<any> = [106, 918];
    let inviteU: Array<any> = [999, 61];
    let mappingQ: Array<any> = [205, 738];
    let tickU: Array<any> = [704, 652, 248];
    let faviconL = 0.0;
    let nodeN = true;
    let final_8g: Map<any, any> = new Map([[String.fromCharCode(105,95,55,50,95,99,114,101,97,116,101,0),281], [String.fromCharCode(115,117,110,114,105,115,101,95,53,95,51,48,0),643], [String.fromCharCode(118,101,114,115,105,111,110,101,100,95,118,95,51,51,0),516]]);
    let cancel6 = String.fromCharCode(111,110,116,101,120,116,0);
    let iconclosewhitewithbga = false;
    let libjsif: Array<any> = [366, 28];
   while ((tickU.length >> (Math.min(Math.abs(final_8g.size), 5))) > 5 && (tickU.length >> (Math.min(Math.abs(5), 3))) > 2) {
      final_8g.set(`${cancel6}`, 2 ^ cancel6.length);
      break;
   }
      inviteU.push(3);
      inviteU = [layoute.length];
   while (backiconM.length >= 3) {
      mappingQ.push(inviteU.length);
      break;
   }
      tickU.push((cancel6.length >> (Math.min(3, Math.abs((iconclosewhitewithbga ? 4 : 4))))));
       let signinupv = String.fromCharCode(117,112,103,114,97,100,101,115,0);
       let defaultfootballbgD: Array<any> = [481, 315];
       let philippinesA: Map<any, any> = new Map([[String.fromCharCode(122,95,49,48,95,115,119,97,112,112,97,98,108,101,0),801], [String.fromCharCode(109,109,120,101,120,116,95,100,95,49,55,0),104]]);
          let renderh = false;
          let goal9 = 1.0;
         philippinesA.set(`${renderh}`, parseInt(`${goal9}`) % 2);
         defaultfootballbgD.push(defaultfootballbgD.length);
      while ((signinupv.length + 2) >= 3) {
         defaultfootballbgD.push(1 ^ signinupv.length);
         break;
      }
         signinupv = `${3 - philippinesA.size}`;
      while (1 > (signinupv.length & 5) || (defaultfootballbgD.length & signinupv.length) > 5) {
          let regengK: Array<any> = [794, 141];
          let filed9 = String.fromCharCode(118,97,114,105,97,110,99,101,95,55,95,51,57,0);
          let liveshareZ = String.fromCharCode(113,99,101,108,112,100,97,116,97,0);
          let desc8 = true;
         defaultfootballbgD.push(philippinesA.size);
         regengK.push(3);
         filed9 += `${filed9.length}`;
         liveshareZ = `${(String.fromCharCode(101,0) == filed9 ? filed9.length : regengK.length)}`;
         desc8 = (67 == (filed9.length + (desc8 ? 67 : filed9.length)));
         break;
      }
      mappingQ = [inviteU.length ^ tickU.length];
   if (3 < (inviteU.length >> (Math.min(cancel6.length, 2)))) {
       let whitevideolive5: Array<any> = [487, 381];
       let contextG = String.fromCharCode(102,105,110,97,108,0);
         whitevideolive5 = [1];
          let tooltipsJ: Map<any, any> = new Map([[String.fromCharCode(120,95,48,95,109,111,99,107,0),String.fromCharCode(119,95,56,52,95,112,114,111,99,101,100,117,114,101,115,0)], [String.fromCharCode(97,108,114,101,97,100,121,95,110,95,51,55,0),String.fromCharCode(114,101,118,111,107,97,98,108,101,0)]]);
          let hookh = 5.0;
         whitevideolive5.push(1);
         tooltipsJ = new Map([[`${tooltipsJ.size}`, tooltipsJ.size]]);
         hookh *= parseInt(`${hookh}`) + 3;
      cancel6 += `${((nodeN ? 3 : 3))}`;
   }
   if (cancel6.startsWith(`${mappingQ.length}`)) {
       let tickQ = String.fromCharCode(110,111,105,115,101,0);
      if (tickQ.length < tickQ.length) {
         tickQ += `${(String.fromCharCode(72,0) == tickQ ? tickQ.length : tickQ.length)}`;
      }
      while (tickQ.includes(tickQ)) {
          let historyE = String.fromCharCode(102,119,114,105,116,101,0);
          let eyecloseo = String.fromCharCode(110,95,51,52,95,115,121,110,116,104,101,115,105,122,101,114,0);
          let signinupQ = true;
         tickQ += `${2 >> (Math.min(5, tickQ.length))}`;
         historyE += `${historyE.length - 1}`;
         eyecloseo = "1";
         signinupQ = eyecloseo.length >= 40;
         break;
      }
          let malaysiaW = 0.0;
         tickQ = `${parseInt(`${malaysiaW}`) | 1}`;
      mappingQ.push(3 >> (Math.min(5, tickQ.length)));
   }
      iconclosewhitewithbga = layoute.length <= mappingQ.length;
   while (3 > (layoute.length | final_8g.size) && (layoute.length | final_8g.size) > 3) {
      final_8g.set(`${mappingQ.length}`, 1);
      break;
   }
   while (!iconclosewhitewithbga) {
      iconclosewhitewithbga = (29 <= (mappingQ.length % (Math.max(9, (!nodeN ? mappingQ.length : 29)))));
      break;
   }
   if (backiconM == String.fromCharCode(111,0)) {
      cancel6 = `${3 * final_8g.size}`;
   }
      layoute = [3];
       let interstitialr = 2.0;
       let libyogaW = String.fromCharCode(119,101,114,101,0);
       let graph4 = String.fromCharCode(111,118,101,114,114,105,100,105,110,103,95,54,95,49,54,0);
         libyogaW += `${graph4.length << (Math.min(Math.abs(2), 2))}`;
          let graph_: Map<any, any> = new Map([[String.fromCharCode(111,102,102,115,101,116,95,102,95,49,50,0),String.fromCharCode(112,114,111,114,101,115,100,97,116,97,95,54,95,53,0)], [String.fromCharCode(99,111,100,101,98,111,111,107,115,95,111,95,57,57,0),String.fromCharCode(110,95,49,56,95,113,117,111,116,101,115,0)]]);
         libyogaW = `${parseInt(`${interstitialr}`) ^ 1}`;
         graph_ = new Map([[`${graph_.size}`, graph_.size]]);
         libyogaW += `${graph4.length}`;
         graph4 = `${libyogaW.length}`;
      for (let z = 0; z < 2; z++) {
          let usernameD = String.fromCharCode(97,100,100,105,116,105,111,110,115,95,109,95,56,50,0);
          let baselinev = false;
          let icondefaultthumbnailt = 1.0;
          let entryD = 1;
         graph4 = `${((baselinev ? 2 : 2) << (Math.min(Math.abs(2), 2)))}`;
         usernameD += `${usernameD.length}`;
         baselinev = usernameD == String.fromCharCode(99,0);
         icondefaultthumbnailt *= parseFloat(`${entryD}`);
         entryD %= Math.max(parseInt(`${icondefaultthumbnailt}`), 4);
      }
          let airbnbstarselectedA = 5.0;
          let analyticsF = 2.0;
         libyogaW = `${1 >> (Math.min(1, libyogaW.length))}`;
         airbnbstarselectedA -= parseFloat(`${parseInt(`${analyticsF}`) >> (Math.min(4, Math.abs(1)))}`);
         analyticsF -= parseFloat(`${3 * parseInt(`${airbnbstarselectedA}`)}`);
      if ((interstitialr - parseFloat(`${graph4.length}`)) <= 2.69 || 3 <= (parseInt(`${interstitialr}`) - graph4.length)) {
          let eactd = 0.0;
         graph4 += `${2 & graph4.length}`;
         eactd *= parseFloat(`${3 & parseInt(`${eactd}`)}`);
      }
         graph4 += `${libyogaW.length / 2}`;
      let crossN = 6078537 >= graph4.length;
      do {
         graph4 = `${graph4.length ^ libyogaW.length}`;
         if (crossN) {
            break;
         }
      } while (crossN && (!graph4.endsWith(`${libyogaW.length}`)));
      faviconL -= 3;
      layoute.push(mappingQ.length);
      faviconL *= layoute.length + 2;
   if (cancel6.endsWith(`${iconclosewhitewithbga}`)) {
      cancel6 = `${parseInt(`${faviconL}`)}`;
   }
   let eactT = libjsif.length >= 9753851;
   do {
      libjsif.push((String.fromCharCode(82,0) == cancel6 ? cancel6.length : mappingQ.length));
      if (eactT) {
         break;
      }
   } while ((!libjsif.includes(faviconL)) && eactT);
      cancel6 = `${layoute.length}`;
   let loadingN = cancel6 == String.fromCharCode(110,105,108,0);
   do {
      cancel6 = `${3 ^ inviteU.length}`;
      if (loadingN) {
         break;
      }
   } while ((5.87 < (faviconL + 5.20)) && loadingN);
      nodeN = inviteU.includes(mappingQ[0]);

            setShowSlider(false);
        }, 1000);
    }

    const handleScreenTouch = () => {
       let webview8 = String.fromCharCode(114,101,116,114,105,101,114,0);
    let inouttargetyellowa = String.fromCharCode(107,101,101,112,97,108,105,118,101,95,114,95,56,57,0);
    let reactnativeratings8 = 3.0;
    let event9 = 4.0;
    let themeb = 3.0;
    let userN: Map<any, any> = new Map([[String.fromCharCode(101,114,114,99,111,100,101,0),119], [String.fromCharCode(99,95,50,53,95,105,111,115,98,117,105,108,100,0),275]]);
    let schedulei = String.fromCharCode(109,106,112,101,103,100,101,99,95,112,95,56,50,0);
    let libreactnativeblobv: Map<any, any> = new Map([[String.fromCharCode(97,114,109,108,105,110,107,95,102,95,53,55,0),String.fromCharCode(101,95,53,95,114,97,105,115,101,100,0)], [String.fromCharCode(104,97,115,104,101,100,95,112,95,51,48,0),String.fromCharCode(103,95,52,53,95,100,105,114,97,99,116,97,98,0)]]);
    let iconviewergif0 = String.fromCharCode(120,95,57,51,0);
   if (schedulei == String.fromCharCode(52,0)) {
      inouttargetyellowa = "2";
   }
   for (let f = 0; f < 1; f++) {
      themeb /= Math.max(2, parseInt(`${event9}`));
   }
   for (let g = 0; g < 2; g++) {
       let submith = 3.0;
       let iconclosewhitebgK = String.fromCharCode(99,108,99,112,95,107,95,50,56,0);
       let notificationgrayd = 3;
      if (notificationgrayd < iconclosewhitebgK.length) {
         iconclosewhitebgK = `${parseInt(`${submith}`) >> (Math.min(Math.abs(1), 1))}`;
      }
          let bing5 = false;
          let largesoundi: Map<any, any> = new Map([[String.fromCharCode(116,109,109,98,0),680], [String.fromCharCode(121,95,51,57,95,114,101,99,111,103,110,105,122,101,114,0),526]]);
         submith += parseFloat(`${notificationgrayd}`);
         bing5 = (23 >= (largesoundi.size + (!bing5 ? largesoundi.size : 55)));
         iconclosewhitebgK += "2";
      if (5 < iconclosewhitebgK.length) {
          let orangeclock5 = 1.0;
          let disconnectedlogoh = String.fromCharCode(112,97,103,101,115,101,101,107,0);
          let submitV = String.fromCharCode(101,118,98,117,102,102,101,114,95,106,95,52,53,0);
          let sharewhiter = 2.0;
          let libruntimeexecutorZ: Map<any, any> = new Map([[String.fromCharCode(98,117,102,102,0),755], [String.fromCharCode(117,112,99,111,109,105,110,103,95,116,95,52,53,0),936], [String.fromCharCode(112,108,97,99,101,115,0),88]]);
         iconclosewhitebgK = `${parseInt(`${submith}`) + parseInt(`${sharewhiter}`)}`;
         orangeclock5 *= parseFloat(`${libruntimeexecutorZ.size}`);
         disconnectedlogoh = `${2 ^ submitV.length}`;
         submitV += `${submitV.length >> (Math.min(disconnectedlogoh.length, 4))}`;
         sharewhiter += (String.fromCharCode(85,0) == submitV ? parseInt(`${orangeclock5}`) : submitV.length);
         libruntimeexecutorZ.set(submitV, libruntimeexecutorZ.size);
      }
         submith /= Math.max(1, parseFloat(`${notificationgrayd}`));
         notificationgrayd %= Math.max(1, 2 * notificationgrayd);
      let downloadingu = notificationgrayd >= 7672229;
      do {
          let iconrightorangeA = String.fromCharCode(112,101,114,115,112,0);
          let iconfeedback1 = String.fromCharCode(119,95,50,49,95,115,117,114,102,0);
         notificationgrayd &= iconrightorangeA.length;
         iconrightorangeA = `${iconfeedback1.length}`;
         iconfeedback1 += `${iconfeedback1.length}`;
         if (downloadingu) {
            break;
         }
      } while ((notificationgrayd < iconclosewhitebgK.length) && downloadingu);
      for (let o = 0; o < 1; o++) {
          let more7 = String.fromCharCode(119,95,56,53,95,113,117,101,117,101,100,0);
          let defaultfootballbg8 = String.fromCharCode(112,101,97,99,104,95,113,95,50,53,0);
         iconclosewhitebgK += "3";
         more7 += "3";
         defaultfootballbg8 += `${more7.length >> (Math.min(2, defaultfootballbg8.length))}`;
      }
      if (4 < (notificationgrayd | iconclosewhitebgK.length) && 5 < (iconclosewhitebgK.length | 4)) {
         iconclosewhitebgK += `${iconclosewhitebgK.length | 2}`;
      }
      userN = new Map([[`${submith}`, parseInt(`${submith}`) - schedulei.length]]);
   }
   while ((schedulei.length << (Math.min(3, Math.abs(userN.size)))) == 5 && 5 == (schedulei.length << (Math.min(4, Math.abs(userN.size))))) {
      schedulei += `${parseInt(`${event9}`)}`;
      break;
   }
      inouttargetyellowa += `${parseInt(`${themeb}`) << (Math.min(Math.abs(parseInt(`${reactnativeratings8}`)), 4))}`;
       let footballfiledlayoutw = 3.0;
       let buttonV = 1.0;
       let videobufferloadingS = String.fromCharCode(113,95,52,57,95,97,117,100,105,111,112,114,111,99,0);
      while (!videobufferloadingS.startsWith(`${buttonV}`)) {
          let videocommon9 = 5.0;
          let disconnectedlogoz = String.fromCharCode(112,101,114,112,105,120,101,108,0);
          let sinae = String.fromCharCode(112,111,112,117,112,95,101,95,51,0);
          let final_j7g = 5;
          let reado = String.fromCharCode(99,105,110,101,109,97,0);
         videobufferloadingS = `${parseInt(`${buttonV}`)}`;
         videocommon9 -= 1;
         disconnectedlogoz += `${final_j7g - 2}`;
         sinae += "1";
         final_j7g -= sinae.length;
         reado = `${2 % (Math.max(3, reado.length))}`;
         break;
      }
      let dragcloseg = buttonV >= 6280199.0;
      do {
         buttonV += parseFloat(`${parseInt(`${buttonV}`) + videobufferloadingS.length}`);
         if (dragcloseg) {
            break;
         }
      } while (dragcloseg && (1.68 >= (footballfiledlayoutw / 2.72) || (footballfiledlayoutw / (Math.max(2.72, 9))) >= 3.0));
          let fullscreenminr = String.fromCharCode(115,101,116,116,108,101,0);
         footballfiledlayoutw *= parseInt(`${footballfiledlayoutw}`);
         fullscreenminr += `${(String.fromCharCode(90,0) == fullscreenminr ? fullscreenminr.length : fullscreenminr.length)}`;
      while (footballfiledlayoutw > 1.76) {
         buttonV -= parseFloat(`${3}`);
         break;
      }
         videobufferloadingS += `${3 - videobufferloadingS.length}`;
         videobufferloadingS = `${videobufferloadingS.length}`;
      if (5.58 >= (3.52 * buttonV)) {
         buttonV += parseFloat(`${parseInt(`${footballfiledlayoutw}`) & 2}`);
      }
         buttonV *= parseFloat(`${videobufferloadingS.length | 3}`);
      while (3 >= (videobufferloadingS.length + 5) && 5 >= (videobufferloadingS.length + parseInt(`${footballfiledlayoutw}`))) {
         videobufferloadingS = "1";
         break;
      }
      libreactnativeblobv.set(`${footballfiledlayoutw}`, parseInt(`${footballfiledlayoutw}`));
      userN = new Map([[`${themeb}`, parseInt(`${themeb}`) ^ 3]]);
   while ((parseInt(`${reactnativeratings8}`) - userN.size) <= 1 && 1 <= (parseInt(`${reactnativeratings8}`) - userN.size)) {
       let predictiondefaulte: Array<any> = [698, 626];
         predictiondefaulte = [2 / (Math.max(4, predictiondefaulte.length))];
      let shirtO = predictiondefaulte.length <= 8147352;
      do {
          let libzeus0 = false;
         predictiondefaulte.push(((libzeus0 ? 4 : 3) >> (Math.min(predictiondefaulte.length, 1))));
         if (shirtO) {
            break;
         }
      } while ((predictiondefaulte.length > predictiondefaulte.length) && shirtO);
          let configs = 5.0;
         predictiondefaulte = [parseInt(`${configs}`)];
      userN.set(iconviewergif0, (iconviewergif0 == String.fromCharCode(109,0) ? parseInt(`${themeb}`) : iconviewergif0.length));
      break;
   }
       let mutedN = 5;
       let championA = 3.0;
       let settingsx = 5;
      let coreT = championA >= 9829974.0;
      do {
          let gesturesJ = String.fromCharCode(112,111,111,112,95,107,95,52,52,0);
          let umeng3 = 0;
          let largebrightness9 = 1.0;
         championA *= gesturesJ.length;
         gesturesJ = `${umeng3 & parseInt(`${largebrightness9}`)}`;
         umeng3 |= parseInt(`${largebrightness9}`) * 2;
         if (coreT) {
            break;
         }
      } while ((4.89 >= (settingsx - championA)) && coreT);
         championA /= Math.max(parseInt(`${championA}`) << (Math.min(2, Math.abs(1))), 3);
          let libfbjniq: Array<any> = [711, 994, 500];
          let disconnectedlogoc = String.fromCharCode(109,111,100,110,112,102,0);
         mutedN |= libfbjniq.length;
         libfbjniq = [(disconnectedlogoc == String.fromCharCode(55,0) ? disconnectedlogoc.length : disconnectedlogoc.length)];
      let reactnativeultimatelistviewD = championA >= 7659292.0;
      do {
         championA -= 1 * settingsx;
         if (reactnativeultimatelistviewD) {
            break;
         }
      } while (reactnativeultimatelistviewD && (3 > (5 * mutedN) || (5 / (Math.max(5, mutedN))) > 3));
       let footballfieldG = 1.0;
       let eventsplashG = 0.0;
      if ((footballfieldG / 3.61) < 1.59 && 5.2 < (footballfieldG / (Math.max(3.61, 1)))) {
         footballfieldG += parseFloat(`${parseInt(`${eventsplashG}`)}`);
      }
      for (let q = 0; q < 1; q++) {
          let libflipperl = String.fromCharCode(115,95,54,50,95,109,112,101,103,100,97,116,97,0);
          let hiady: Array<any> = [830, 623];
         championA *= 3 % (Math.max(parseInt(`${eventsplashG}`), 9));
         libflipperl = `${(String.fromCharCode(107,0) == libflipperl ? libflipperl.length : hiady.length)}`;
         hiady = [hiady.length % (Math.max(4, libflipperl.length))];
      }
       let mappingc = String.fromCharCode(112,95,57,95,98,105,116,111,112,115,0);
         mappingc = `${3 & settingsx}`;
      themeb += mutedN / (Math.max(schedulei.length, 4));
   for (let w = 0; w < 2; w++) {
       let loadingspinnerp = String.fromCharCode(100,105,118,105,115,111,114,0);
       let disconnectedlogoi = true;
       let policyq = String.fromCharCode(110,95,55,54,95,101,120,115,121,0);
       let bgvipsportL = String.fromCharCode(102,95,53,52,95,114,101,101,110,97,98,108,101,0);
          let mbjscommon0: Array<any> = [637, 750, 993];
          let wifirouteri = String.fromCharCode(105,110,118,102,0);
         policyq += `${bgvipsportL.length ^ loadingspinnerp.length}`;
         mbjscommon0 = [(String.fromCharCode(65,0) == wifirouteri ? wifirouteri.length : mbjscommon0.length)];
          let rncorew = String.fromCharCode(109,95,49,53,95,99,109,115,103,115,0);
          let nextT = String.fromCharCode(98,97,115,105,99,95,116,95,53,50,0);
          let hoveri = String.fromCharCode(109,97,100,101,0);
         policyq += `${(hoveri == String.fromCharCode(75,0) ? nextT.length : hoveri.length)}`;
         rncorew += `${rncorew.length ^ 2}`;
         nextT += `${2 * rncorew.length}`;
      let langkeyr = 8515028 <= bgvipsportL.length;
      do {
          let pangle4 = String.fromCharCode(119,97,114,110,105,110,103,115,0);
         bgvipsportL += `${(bgvipsportL == String.fromCharCode(115,0) ? bgvipsportL.length : pangle4.length)}`;
         if (langkeyr) {
            break;
         }
      } while (langkeyr && (!disconnectedlogoi || bgvipsportL.length >= 4));
      for (let n = 0; n < 3; n++) {
         bgvipsportL += `${3 * bgvipsportL.length}`;
      }
      for (let r = 0; r < 2; r++) {
          let imagesE = true;
          let libreanimatedr = 4.0;
          let showb: Array<any> = [530, 661, 230];
          let w_unlockJ = String.fromCharCode(97,103,101,0);
         bgvipsportL += `${3 | policyq.length}`;
         imagesE = w_unlockJ.length < 2;
         libreanimatedr *= w_unlockJ.length;
         showb = [w_unlockJ.length];
      }
      while (policyq.length <= 3) {
         policyq += `${((disconnectedlogoi ? 4 : 2) << (Math.min(bgvipsportL.length, 4)))}`;
         break;
      }
      let upgrade2 = 5177657 <= policyq.length;
      do {
         policyq = `${((disconnectedlogoi ? 4 : 5) + 3)}`;
         if (upgrade2) {
            break;
         }
      } while ((1 >= policyq.length) && upgrade2);
       let expandQ = String.fromCharCode(115,121,109,109,101,116,114,105,99,95,50,95,51,53,0);
       let description_bmS = String.fromCharCode(112,95,55,55,95,97,116,111,109,105,99,0);
       let homeplayerk = String.fromCharCode(111,95,52,52,95,115,121,110,99,104,114,111,110,105,122,101,114,0);
      for (let a = 0; a < 3; a++) {
          let cancel5 = String.fromCharCode(99,111,110,102,105,103,0);
          let dragJ = String.fromCharCode(104,95,57,54,95,105,115,111,112,101,110,113,117,111,116,101,0);
          let malaysiaZ: Array<any> = [905, 406, 695];
          let gemfileX = String.fromCharCode(108,95,50,48,95,102,108,111,97,116,0);
         homeplayerk = `${3 & bgvipsportL.length}`;
         cancel5 = `${(String.fromCharCode(97,0) == gemfileX ? gemfileX.length : malaysiaZ.length)}`;
         dragJ = "1";
         malaysiaZ = [gemfileX.length];
      }
       let benefit2 = 4;
      if (bgvipsportL.length <= policyq.length) {
          let tempnodatagif9 = String.fromCharCode(100,101,113,117,111,116,101,95,115,95,55,52,0);
          let expandj = 0.0;
          let privilegeX: Map<any, any> = new Map([[String.fromCharCode(118,95,50,54,95,101,115,101,110,100,0),720], [String.fromCharCode(100,111,99,105,100,95,56,95,52,50,0),99]]);
          let downloadX = 2;
         policyq += `${((disconnectedlogoi ? 4 : 5) & loadingspinnerp.length)}`;
         tempnodatagif9 = `${downloadX ^ 2}`;
         expandj += 3 % (Math.max(5, parseInt(`${expandj}`)));
         privilegeX = new Map([[tempnodatagif9, 1]]);
         downloadX += tempnodatagif9.length << (Math.min(Math.abs(1), 2));
      }
      userN.set(`${reactnativeratings8}`, (iconviewergif0 == String.fromCharCode(119,0) ? iconviewergif0.length : parseInt(`${reactnativeratings8}`)));
   }
   for (let r = 0; r < 2; r++) {
       let robotot = true;
       let splashU = 5.0;
         splashU *= ((robotot ? 5 : 4) >> (Math.min(Math.abs(parseInt(`${splashU}`)), 5)));
         splashU -= 3 + parseInt(`${splashU}`);
      for (let n = 0; n < 1; n++) {
          let iconM = String.fromCharCode(117,116,105,108,0);
          let dark8 = String.fromCharCode(105,110,102,111,114,109,97,116,105,111,110,0);
         robotot = splashU == 48.73 && String.fromCharCode(80,0) == dark8;
         iconM += `${iconM.length}`;
         dark8 = `${iconM.length ^ iconM.length}`;
      }
      let logoutg = robotot ? !robotot : robotot;
      do {
         robotot = !robotot;
         if (logoutg) {
            break;
         }
      } while (logoutg && (splashU >= 5.15));
         splashU *= 2 - parseInt(`${splashU}`);
         splashU *= ((robotot ? 1 : 2) >> (Math.min(Math.abs(parseInt(`${splashU}`)), 4)));
      webview8 += `${webview8.length}`;
   }
       let homeactiveG: Array<any> = [946, 885];
      while (homeactiveG.includes(homeactiveG.length)) {
          let viewers = String.fromCharCode(112,108,117,115,0);
          let whitesmalltickO = 2;
          let actionf = String.fromCharCode(120,95,50,53,95,103,114,105,100,0);
          let matchactiveu = 2;
         homeactiveG = [1 >> (Math.min(3, Math.abs(matchactiveu)))];
         viewers += `${whitesmalltickO << (Math.min(viewers.length, 3))}`;
         whitesmalltickO -= (viewers == String.fromCharCode(111,0) ? viewers.length : whitesmalltickO);
         actionf = `${actionf.length}`;
         matchactiveu *= whitesmalltickO;
         break;
      }
         homeactiveG.push(2);
       let blackg: Array<any> = [922, 199, 49];
      reactnativeratings8 /= Math.max(userN.size ^ 3, 4);
   for (let r = 0; r < 1; r++) {
      schedulei = `${userN.size / (Math.max(9, parseInt(`${event9}`)))}`;
   }
       let awayiconM: Map<any, any> = new Map([[String.fromCharCode(109,111,118,116,101,120,116,115,117,98,0),true ], [String.fromCharCode(100,105,115,109,105,115,115,0),false ], [String.fromCharCode(114,95,52,57,95,114,101,113,117,101,115,116,0),true ]]);
         awayiconM = new Map([[`${awayiconM.size}`, awayiconM.size]]);
      if (3 <= (awayiconM.size >> (Math.min(Math.abs(5), 5)))) {
          let models6 = false;
          let whistleorangeu = 3;
         awayiconM.set(`${whistleorangeu}`, 1);
         models6 = (!models6 ? models6 : !models6);
         whistleorangeu |= 3;
      }
      let u_animation_ = 5989446 <= awayiconM.size;
      do {
         awayiconM.set(`${awayiconM.size}`, awayiconM.size);
         if (u_animation_) {
            break;
         }
      } while ((5 >= (awayiconM.size + 1)) && u_animation_);
      webview8 += `${parseInt(`${reactnativeratings8}`) - inouttargetyellowa.length}`;
   for (let v = 0; v < 1; v++) {
       let aboutu: Array<any> = [467, 505, 648];
       let predictionwinl: Array<any> = [String.fromCharCode(107,95,52,55,95,110,111,116,101,115,0), String.fromCharCode(115,105,103,110,114,97,110,100,0), String.fromCharCode(112,114,111,109,105,115,105,102,121,0)];
       let reactnativeratingsD = true;
      if ((aboutu.length * 5) <= 4 && 5 <= aboutu.length) {
         reactnativeratingsD = (predictionwinl.length - aboutu.length) < 71;
      }
      while (2 == (predictionwinl.length ^ 4) || 4 == predictionwinl.length) {
         predictionwinl = [3];
         break;
      }
      while (reactnativeratingsD) {
         reactnativeratingsD = aboutu.length < 31;
         break;
      }
          let w_unlockJ1 = 3;
          let firebaseS: Array<any> = [911, 904];
         predictionwinl = [((reactnativeratingsD ? 3 : 1) / (Math.max(1, 9)))];
         w_unlockJ1 |= w_unlockJ1 % 3;
         firebaseS = [firebaseS.length];
      if (reactnativeratingsD) {
          let sendg = String.fromCharCode(99,108,105,112,115,0);
          let fullscreenmaxp = String.fromCharCode(101,95,50,53,95,105,109,112,111,114,116,97,98,108,101,0);
          let largesoundl = String.fromCharCode(104,117,103,103,105,110,103,0);
          let anythinkd: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,0),true ], [String.fromCharCode(99,97,116,101,103,111,114,105,122,101,95,49,95,49,56,0),false ]]);
         predictionwinl.push(anythinkd.size);
         sendg = "3";
         fullscreenmaxp += `${(sendg == String.fromCharCode(77,0) ? sendg.length : fullscreenmaxp.length)}`;
         largesoundl += `${sendg.length}`;
         anythinkd.set(sendg, 1);
      }
      let reminderu = reactnativeratingsD ? !reactnativeratingsD : reactnativeratingsD;
      do {
          let placeholderc = String.fromCharCode(115,95,53,57,95,99,111,108,108,101,99,116,0);
         reactnativeratingsD = ((placeholderc.length >> (Math.min(2, Math.abs((!reactnativeratingsD ? 27 : placeholderc.length))))) > 27);
         if (reminderu) {
            break;
         }
      } while (reminderu && (4 == predictionwinl.length));
      if (5 <= (aboutu.length - predictionwinl.length)) {
         predictionwinl = [1];
      }
      if (2 >= (predictionwinl.length | aboutu.length) || 2 >= (predictionwinl.length | aboutu.length)) {
         aboutu = [aboutu.length | 1];
      }
      if (reactnativeratingsD && (predictionwinl.length / 3) < 3) {
         predictionwinl.push(((reactnativeratingsD ? 2 : 2) * predictionwinl.length));
      }
      event9 -= parseFloat(`${3}`);
   }
   let iconchatsendX = String.fromCharCode(110,97,104,97,57,103,101,101,0) == iconviewergif0;
   do {
      iconviewergif0 += `${parseInt(`${themeb}`) | parseInt(`${event9}`)}`;
      if (iconchatsendX) {
         break;
      }
   } while ((5.79 >= (event9 / (Math.max(3.69, 10))) || (5 / (Math.max(10, parseInt(`${event9}`)))) >= 3) && iconchatsendX);
   let headerU = 6032589 >= userN.size;
   do {
      userN = new Map([[iconviewergif0, (iconviewergif0 == String.fromCharCode(69,0) ? iconviewergif0.length : parseInt(`${event9}`))]]);
      if (headerU) {
         break;
      }
   } while ((userN.size <= 2) && headerU);
      inouttargetyellowa += `${(iconviewergif0 == String.fromCharCode(52,0) ? parseInt(`${event9}`) : iconviewergif0.length)}`;
   if (webview8.length < 1) {
      userN.set(webview8, 3 / (Math.max(8, webview8.length)));
   }
      reactnativeratings8 += 2;
   if ((2 / (Math.max(1, parseInt(`${reactnativeratings8}`)))) > 4 && 3 > (2 & schedulei.length)) {
      schedulei = `${parseInt(`${reactnativeratings8}`)}`;
   }
      event9 /= Math.max(4, parseFloat(`${parseInt(`${reactnativeratings8}`)}`));
   for (let m = 0; m < 3; m++) {
      themeb *= iconviewergif0.length * 2;
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