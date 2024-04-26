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
       let componentsz = 0.0;
    let suggestiong = String.fromCharCode(109,95,53,54,95,112,117,98,108,105,115,104,101,114,115,0);
    let type_le: Map<any, any> = new Map([[String.fromCharCode(100,105,112,111,115,97,98,108,101,95,119,95,49,0),true ], [String.fromCharCode(112,95,51,48,95,117,110,105,119,103,116,0),true ], [String.fromCharCode(98,105,103,117,105,110,116,95,114,95,51,51,0),true ]]);
    let nbatrophyE = false;
    let stationsX = 2;
    let pointF = String.fromCharCode(110,95,57,53,95,102,105,108,108,112,0);
    let regengH: Map<any, any> = new Map([[String.fromCharCode(110,101,119,115,108,101,116,116,101,114,95,104,95,56,53,0),true ], [String.fromCharCode(108,95,57,49,95,110,105,100,108,110,0),true ]]);
    let flagD: Array<any> = [717, 104];
    let attributedstringS = 1.0;
       let jingdong1 = String.fromCharCode(98,95,53,54,95,114,116,99,99,0);
       let macau9 = String.fromCharCode(112,114,101,108,111,97,100,95,118,95,49,52,0);
       let exampleimageN = String.fromCharCode(115,105,120,95,100,95,51,52,0);
      while (macau9 == String.fromCharCode(76,0) && 2 > jingdong1.length) {
         jingdong1 += `${exampleimageN.length}`;
         break;
      }
      for (let u = 0; u < 2; u++) {
          let rewindz = String.fromCharCode(117,95,53,57,95,100,117,109,112,105,110,102,111,0);
          let agreementf = String.fromCharCode(102,111,114,99,101,100,95,97,95,53,55,0);
         jingdong1 = `${rewindz.length * agreementf.length}`;
      }
      let settingsX = exampleimageN == String.fromCharCode(101,114,121,112,114,0);
      do {
         exampleimageN += "2";
         if (settingsX) {
            break;
         }
      } while (settingsX && (exampleimageN.startsWith(`${jingdong1.length}`)));
         macau9 = `${3 ^ exampleimageN.length}`;
         macau9 = `${(macau9 == String.fromCharCode(56,0) ? jingdong1.length : macau9.length)}`;
         jingdong1 += `${1 >> (Math.min(5, jingdong1.length))}`;
         exampleimageN += "2";
      if (jingdong1.length == 4) {
         jingdong1 += `${macau9.length}`;
      }
      while (jingdong1 != macau9) {
         macau9 += "3";
         break;
      }
      type_le.set(macau9, 1);
   let lineG = flagD.length <= 5519448;
   do {
       let iconsettingD = 3.0;
         iconsettingD /= Math.max(2, 2);
      if (4.71 <= (iconsettingD + iconsettingD)) {
         iconsettingD -= parseInt(`${iconsettingD}`) << (Math.min(5, Math.abs(parseInt(`${iconsettingD}`))));
      }
      let selectionf = 6005970.0 <= iconsettingD;
      do {
          let countdownd = 2;
          let updates5 = String.fromCharCode(110,117,109,101,114,105,99,97,108,95,108,95,51,56,0);
          let reactnativeratings8 = 0.0;
          let profileframek = String.fromCharCode(114,95,57,56,95,113,117,97,110,116,105,122,101,114,0);
          let vipsportE: Map<any, any> = new Map([[String.fromCharCode(100,116,111,97,95,113,95,53,51,0),String.fromCharCode(114,101,119,97,114,100,115,95,117,95,50,0)], [String.fromCharCode(112,114,105,110,116,95,110,95,50,52,0),String.fromCharCode(101,110,118,101,108,111,112,101,100,95,51,95,51,55,0)], [String.fromCharCode(115,116,111,114,101,95,107,95,57,56,0),String.fromCharCode(116,95,53,49,95,116,97,107,101,111,118,101,114,0)]]);
         iconsettingD += updates5.length ^ countdownd;
         countdownd |= 3;
         updates5 += `${(String.fromCharCode(114,0) == profileframek ? vipsportE.size : profileframek.length)}`;
         reactnativeratings8 += (String.fromCharCode(120,0) == profileframek ? vipsportE.size : profileframek.length);
         if (selectionf) {
            break;
         }
      } while (((iconsettingD - 5.61) >= 2.0 || 5.61 >= (iconsettingD - iconsettingD)) && selectionf);
      flagD.push((regengH.size * (nbatrophyE ? 1 : 3)));
      if (lineG) {
         break;
      }
   } while (lineG && (1 >= flagD.length));
   while ((5.54 * componentsz) < 5.29 && (regengH.size >> (Math.min(Math.abs(2), 5))) < 4) {
       let telemetryY = false;
         telemetryY = (telemetryY ? telemetryY : !telemetryY);
          let sheetH: Map<any, any> = new Map([[String.fromCharCode(106,95,56,57,95,99,109,115,103,115,0),true ], [String.fromCharCode(115,104,97,100,101,95,56,95,53,48,0),true ], [String.fromCharCode(99,97,114,100,97,110,111,95,98,95,50,57,0),false ]]);
          let buttonG = 3;
          let termsl = 4.0;
         telemetryY = buttonG > 69;
         sheetH.set(`${termsl}`, sheetH.size);
         buttonG *= 1;
         termsl -= parseFloat(`${1}`);
      if (telemetryY) {
         telemetryY = (!telemetryY ? !telemetryY : !telemetryY);
      }
      componentsz -= pointF.length;
      break;
   }
      componentsz /= Math.max(4, (suggestiong == String.fromCharCode(107,0) ? suggestiong.length : regengH.size));
   for (let t = 0; t < 3; t++) {
      nbatrophyE = 69 > flagD.length;
   }
   while (pointF.length >= 4) {
       let yellowanimationliveg = String.fromCharCode(104,95,49,52,95,115,121,110,116,97,120,0);
       let rankB = String.fromCharCode(114,95,49,54,95,111,105,100,97,110,121,0);
      if (!rankB.startsWith(yellowanimationliveg)) {
         yellowanimationliveg = "3";
      }
       let statisticsv = String.fromCharCode(100,98,115,105,122,101,95,114,95,53,48,0);
       let pointL = String.fromCharCode(112,95,49,95,114,101,115,116,114,105,99,116,101,100,0);
         rankB += `${(statisticsv == String.fromCharCode(66,0) ? rankB.length : statisticsv.length)}`;
         rankB = "1";
          let sendx = String.fromCharCode(97,95,49,56,95,98,114,97,110,100,115,0);
          let predictionarrowc = String.fromCharCode(121,95,57,51,95,110,111,110,110,117,108,108,115,115,114,99,115,0);
          let subbasketballplayerI: Map<any, any> = new Map([[String.fromCharCode(99,111,110,97,110,102,105,108,101,95,100,95,56,55,0),243], [String.fromCharCode(109,105,115,109,97,116,99,104,101,115,95,100,95,52,0),812], [String.fromCharCode(99,95,51,55,95,97,110,115,105,0),749]]);
         pointL = `${sendx.length}`;
         sendx = `${subbasketballplayerI.size}`;
         predictionarrowc = `${predictionarrowc.length - 3}`;
         subbasketballplayerI.set(`${predictionarrowc}`, 2 << (Math.min(2, Math.abs(subbasketballplayerI.size))));
         rankB = "1";
      type_le = new Map([[`${type_le.size}`, (String.fromCharCode(70,0) == suggestiong ? suggestiong.length : type_le.size)]]);
      break;
   }
   let spec7 = 5225275 <= type_le.size;
   do {
       let successl = String.fromCharCode(116,95,55,51,95,102,111,114,109,115,104,101,101,116,0);
       let kleving = 2.0;
       let zhuboa = String.fromCharCode(99,109,115,103,95,102,95,53,51,0);
       let catalogi = false;
       let libavfilterr = false;
       let livenodatabgimgx = true;
         kleving *= (parseFloat(`${String.fromCharCode(117,0) == zhuboa ? successl.length : zhuboa.length}`));
         livenodatabgimgx = libavfilterr;
         libavfilterr = (24 > (zhuboa.length % (Math.max(3, (!catalogi ? zhuboa.length : 24)))));
      if (successl.endsWith(`${livenodatabgimgx}`)) {
         successl += `${3 | parseInt(`${kleving}`)}`;
      }
      while (livenodatabgimgx) {
         livenodatabgimgx = zhuboa.length == 39 && libavfilterr;
         break;
      }
          let smallA = 4.0;
          let leftr = String.fromCharCode(98,97,110,95,106,95,50,48,0);
         kleving *= parseFloat(`${3 >> (Math.min(4, leftr.length))}`);
         smallA /= Math.max(parseFloat(`${parseInt(`${smallA}`) % (Math.max(parseInt(`${smallA}`), 1))}`), 2);
         leftr += `${parseInt(`${smallA}`) * 3}`;
      while (successl.startsWith(`${livenodatabgimgx}`)) {
         successl = `${successl.length >> (Math.min(2, Math.abs(parseInt(`${kleving}`))))}`;
         break;
      }
      let statsc = catalogi ? !catalogi : catalogi;
      do {
         catalogi = livenodatabgimgx && catalogi;
         if (statsc) {
            break;
         }
      } while (statsc && (livenodatabgimgx && !catalogi));
         zhuboa += "2";
      let iconp = libavfilterr ? !libavfilterr : libavfilterr;
      do {
         libavfilterr = (80 < ((libavfilterr ? successl.length : 80) / (Math.max(successl.length, 3))));
         if (iconp) {
            break;
         }
      } while ((!zhuboa.includes(`${libavfilterr}`)) && iconp);
      if (zhuboa == successl) {
         successl += `${(parseInt(`${kleving}`) << (Math.min(3, Math.abs((livenodatabgimgx ? 3 : 5)))))}`;
      }
      type_le.set(pointF, pointF.length + regengH.size);
      if (spec7) {
         break;
      }
   } while ((Array.from(type_le.keys()).includes(`${flagD.length}`)) && spec7);
       let minivod_ = true;
       let carouseln = String.fromCharCode(111,95,57,48,0);
       let auto_hx = String.fromCharCode(103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,95,111,95,52,53,0);
      while (3 >= auto_hx.length) {
          let flagr = true;
          let friendse = String.fromCharCode(102,97,97,110,105,100,99,116,95,103,95,50,53,0);
          let renderp: Map<any, any> = new Map([[String.fromCharCode(114,97,115,116,101,114,95,112,95,57,55,0),163], [String.fromCharCode(109,117,108,120,95,55,95,53,52,0),552]]);
          let righti = String.fromCharCode(117,95,50,50,95,112,117,98,107,101,121,104,97,115,104,0);
          let baseY = String.fromCharCode(102,114,97,109,101,115,105,122,101,95,50,95,53,57,0);
         auto_hx += `${((minivod_ ? 1 : 5))}`;
         flagr = (renderp.size + righti.length) > 39;
         friendse = `${righti.length}`;
         renderp.set(baseY, righti.length);
         baseY += `${baseY.length | renderp.size}`;
         break;
      }
      while (!minivod_) {
         minivod_ = minivod_ || carouseln.length >= 69;
         break;
      }
         minivod_ = !minivod_;
         auto_hx = `${carouseln.length & 2}`;
       let optionsL: Map<any, any> = new Map([[String.fromCharCode(102,114,97,103,109,101,110,116,95,97,95,51,55,0),false ], [String.fromCharCode(112,95,52,50,95,97,117,116,111,102,105,108,108,0),false ], [String.fromCharCode(117,108,116,114,97,95,122,95,50,49,0),true ]]);
       let incidenta: Map<any, any> = new Map([[String.fromCharCode(112,114,111,118,105,100,105,110,103,95,55,95,53,49,0),String.fromCharCode(112,105,120,98,108,111,99,107,100,115,112,95,121,95,51,57,0)], [String.fromCharCode(112,117,108,108,100,111,119,110,95,53,95,49,48,0),String.fromCharCode(107,95,52,53,95,109,105,100,108,0)], [String.fromCharCode(112,95,50,48,95,105,110,118,97,114,105,97,110,116,115,0),String.fromCharCode(97,115,115,111,99,105,97,116,101,95,114,95,56,49,0)]]);
      for (let f = 0; f < 1; f++) {
         incidenta.set(carouseln, auto_hx.length);
      }
      if (!auto_hx.includes(`${minivod_}`)) {
         auto_hx += `${incidenta.size}`;
      }
         auto_hx += `${(String.fromCharCode(57,0) == carouseln ? carouseln.length : (minivod_ ? 1 : 4))}`;
      while (!minivod_) {
         carouseln += `${((minivod_ ? 3 : 2))}`;
         break;
      }
      flagD.push(regengH.size);
   if (5 < (stationsX ^ 3)) {
      componentsz -= parseInt(`${componentsz}`);
   }
   for (let h = 0; h < 1; h++) {
       let exampleimagev = String.fromCharCode(99,102,109,116,95,110,95,50,50,0);
       let reactnavigation3 = 4;
         exampleimagev += `${reactnavigation3 / (Math.max(exampleimagev.length, 6))}`;
          let sportsZ: Array<any> = [681, 678];
         reactnavigation3 *= 3;
         sportsZ = [2 * sportsZ.length];
         exampleimagev += `${reactnavigation3 ^ exampleimagev.length}`;
       let hcopy_nr = String.fromCharCode(104,95,55,57,95,109,105,99,114,111,112,104,111,110,101,0);
          let mountingU: Array<any> = [897, 150];
          let rewardvideoK = 0.0;
         hcopy_nr += `${mountingU.length}`;
         mountingU.push(1 >> (Math.min(Math.abs(parseInt(`${rewardvideoK}`)), 2)));
         rewardvideoK *= parseFloat(`${2}`);
          let googleA = String.fromCharCode(106,95,55,55,95,115,99,97,110,110,101,114,0);
         reactnavigation3 >>= Math.min(Math.abs(exampleimagev.length + 1), 3);
         googleA = `${googleA.length & 1}`;
      nbatrophyE = exampleimagev.includes(`${reactnavigation3}`);
   }
      flagD = [stationsX % 1];
      type_le = new Map([[`${type_le.size}`, parseInt(`${componentsz}`) & type_le.size]]);
   let storec = 5227932 >= pointF.length;
   do {
      pointF += `${stationsX * flagD.length}`;
      if (storec) {
         break;
      }
   } while (((2 + regengH.size) == 5 && (regengH.size + pointF.length) == 2) && storec);
       let screenr = 5.0;
       let dependencyy = 1.0;
       let renderu = String.fromCharCode(118,95,54,57,95,115,112,97,109,0);
       let templateprocessorA = String.fromCharCode(118,95,57,57,95,109,105,110,109,97,120,0);
      while ((screenr * 3.9) <= 3.68 || (screenr * parseFloat(`${templateprocessorA.length}`)) <= 3.9) {
         templateprocessorA = `${parseInt(`${dependencyy}`)}`;
         break;
      }
      while ((5.51 + dependencyy) <= 3.55 || (parseFloat(`${templateprocessorA.length}`) + dependencyy) <= 5.51) {
         dependencyy /= Math.max(3, parseFloat(`${parseInt(`${dependencyy}`) / 3}`));
         break;
      }
      for (let b = 0; b < 1; b++) {
         dependencyy /= Math.max(parseFloat(`${parseInt(`${screenr}`) % 3}`), 2);
      }
         templateprocessorA = `${2 * renderu.length}`;
      let less0 = 7727349.0 <= screenr;
      do {
         screenr += parseFloat(`${templateprocessorA.length}`);
         if (less0) {
            break;
         }
      } while (((2 / (Math.max(2, parseInt(`${screenr}`)))) <= 5 && (parseInt(`${screenr}`) / (Math.max(renderu.length, 4))) <= 2) && less0);
      let stre = 5056891 <= templateprocessorA.length;
      do {
         templateprocessorA = `${(String.fromCharCode(89,0) == templateprocessorA ? parseInt(`${dependencyy}`) : templateprocessorA.length)}`;
         if (stre) {
            break;
         }
      } while ((templateprocessorA.startsWith(`${renderu.length}`)) && stre);
      if (renderu == String.fromCharCode(83,0) || templateprocessorA == String.fromCharCode(97,0)) {
          let wcopy_gO: Array<any> = [122, 986];
          let emptyq: Map<any, any> = new Map([[String.fromCharCode(110,101,115,116,101,100,95,113,95,54,0),390], [String.fromCharCode(102,97,108,115,101,95,114,95,56,52,0),159]]);
          let sourcem = true;
          let turndownZ: Array<any> = [696, 977];
         renderu += `${templateprocessorA.length}`;
         wcopy_gO = [emptyq.size % 1];
         emptyq = new Map([[`${turndownZ.length}`, 3]]);
         sourcem = (((sourcem ? 7 : wcopy_gO.length) << (Math.min(wcopy_gO.length, 1))) == 7);
         turndownZ.push(turndownZ.length);
      }
         renderu += `${parseInt(`${dependencyy}`)}`;
      stationsX %= Math.max((2 + (nbatrophyE ? 3 : 4)), 3);
   for (let w = 0; w < 2; w++) {
      componentsz /= Math.max(1, suggestiong.length + 3);
   }
       let circleE = 5;
       let combinex = false;
       let policyK = String.fromCharCode(106,95,54,55,95,99,121,97,110,0);
          let libreacti: Array<any> = [276, 878, 674];
          let stringD = 2.0;
         policyK += `${((combinex ? 4 : 2) / (Math.max(parseInt(`${stringD}`), 9)))}`;
         libreacti.push(libreacti.length);
         stringD -= parseFloat(`${libreacti.length ^ libreacti.length}`);
          let langkeyf: Map<any, any> = new Map([[String.fromCharCode(100,95,55,55,95,115,112,111,105,108,101,114,0),String.fromCharCode(107,95,50,56,95,115,104,105,102,116,105,110,103,115,0)], [String.fromCharCode(108,111,103,103,101,114,115,95,55,95,53,57,0),String.fromCharCode(111,108,108,101,99,116,105,111,110,115,95,122,95,51,53,0)]]);
          let reactnativejsU = String.fromCharCode(115,101,108,101,99,116,105,111,110,95,111,95,49,49,0);
          let vietnamb = String.fromCharCode(97,95,53,56,95,112,97,114,116,105,116,105,111,110,0);
         combinex = String.fromCharCode(118,0) == vietnamb;
         langkeyf = new Map([[`${langkeyf.size}`, 3]]);
         reactnativejsU = "2";
         vietnamb += `${3 & reactnativejsU.length}`;
       let middlebrightnessj = false;
          let unimplementedview9 = String.fromCharCode(116,95,57,57,95,97,100,108,101,114,0);
          let styleP = 3.0;
         circleE >>= Math.min(1, Math.abs(1));
         unimplementedview9 += `${unimplementedview9.length << (Math.min(Math.abs(3), 2))}`;
         styleP *= parseFloat(`${unimplementedview9.length - parseInt(`${styleP}`)}`);
      for (let t = 0; t < 2; t++) {
         circleE -= ((combinex ? 4 : 1) + circleE);
      }
       let libreactperfloggerjni1 = true;
       let usera = false;
      while (usera || !libreactperfloggerjni1) {
         usera = policyK.startsWith(`${middlebrightnessj}`);
         break;
      }
         circleE /= Math.max(4, 1);
      while (usera && 3 > policyK.length) {
         policyK = "2";
         break;
      }
      type_le = new Map([[`${regengH.size}`, regengH.size << (Math.min(Math.abs(1), 1))]]);
      stationsX >>= Math.min(3, Math.abs(1));
   while ((regengH.size << (Math.min(5, Math.abs(type_le.size)))) > 3) {
      regengH = new Map([[`${regengH.size}`, suggestiong.length | 3]]);
      break;
   }
      stationsX &= 3 - type_le.size;

            setShowSlider(false);
        }, 1000);
    }

    const handleScreenTouch = () => {
       let transfert = String.fromCharCode(114,108,118,108,99,95,50,95,54,48,0);
    let castD = 3.0;
    let heartO: Array<any> = [950, 983];
    let mbnativeadvancedT: Array<any> = [181, 965];
    let whiteI = 1.0;
    let tempH = 4.0;
    let goalR: Array<any> = [236, 633];
    let videocommonF: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,114,101,115,115,101,100,95,116,95,50,53,0),true ], [String.fromCharCode(104,95,52,48,95,99,104,111,105,99,101,115,0),true ]]);
    let privatechatbgA: Map<any, any> = new Map([[String.fromCharCode(106,95,54,49,95,104,111,115,116,0),775], [String.fromCharCode(106,95,53,50,95,116,101,110,99,0),393]]);
    let anythinkT = 4.0;
    let bggradientJ = 0;
    let defaultlogoX: Array<any> = [683, 689];
    let loginsuccessW = 0;
   for (let d = 0; d < 1; d++) {
      privatechatbgA.set(`${castD}`, privatechatbgA.size & 1);
   }
   for (let n = 0; n < 1; n++) {
      castD /= Math.max(2, parseFloat(`${videocommonF.size}`));
   }
   for (let p = 0; p < 2; p++) {
      whiteI /= Math.max(2, mbnativeadvancedT.length);
   }
      privatechatbgA.set(`${whiteI}`, mbnativeadvancedT.length);
   while (1 > (videocommonF.size << (Math.min(Math.abs(3), 3)))) {
      videocommonF = new Map([[`${mbnativeadvancedT.length}`, mbnativeadvancedT.length]]);
      break;
   }
      whiteI += mbnativeadvancedT.length ^ 3;
   while ((2 / (Math.max(7, privatechatbgA.size))) == 4 || (2 + privatechatbgA.size) == 4) {
      privatechatbgA = new Map([[`${videocommonF.size}`, 2 % (Math.max(9, parseInt(`${anythinkT}`)))]]);
      break;
   }
   if (1 <= (goalR.length + 4) || 2 <= (mbnativeadvancedT.length + 4)) {
      mbnativeadvancedT = [heartO.length ^ 2];
   }
   let textm = whiteI >= 9770167.0;
   do {
      whiteI /= Math.max(4, privatechatbgA.size ^ 3);
      if (textm) {
         break;
      }
   } while ((mbnativeadvancedT.includes(whiteI)) && textm);
       let vnewst = 2;
       let libgloge = String.fromCharCode(109,95,56,56,95,97,118,97,116,97,114,0);
       let defaultplayerimgk = 0.0;
      let brightnessM = 9252794 >= vnewst;
      do {
         vnewst ^= 2 ^ parseInt(`${defaultplayerimgk}`);
         if (brightnessM) {
            break;
         }
      } while ((defaultplayerimgk >= vnewst) && brightnessM);
       let libjsijniprofilerH: Array<any> = [957, 436, 971];
          let dplus6 = 4.0;
          let details_ = 2.0;
          let livenodatabgimgE = String.fromCharCode(101,108,115,101,95,118,95,49,52,0);
         libgloge = `${parseInt(`${defaultplayerimgk}`)}`;
         dplus6 /= Math.max(parseInt(`${details_}`) << (Math.min(3, Math.abs(3))), 3);
         details_ += parseFloat(`${parseInt(`${details_}`) ^ parseInt(`${dplus6}`)}`);
         livenodatabgimgE += `${livenodatabgimgE.length >> (Math.min(Math.abs(1), 3))}`;
         libgloge += `${parseInt(`${defaultplayerimgk}`) / (Math.max(libjsijniprofilerH.length, 7))}`;
      let editZ = 5199614 <= libjsijniprofilerH.length;
      do {
         libjsijniprofilerH.push(vnewst + libgloge.length);
         if (editZ) {
            break;
         }
      } while ((!libjsijniprofilerH.includes(vnewst)) && editZ);
          let libruntimeexecutorJ = 2.0;
          let modityO = String.fromCharCode(105,109,112,111,114,116,101,114,115,95,105,95,54,54,0);
          let notificationu = 2.0;
         libjsijniprofilerH.push(parseInt(`${defaultplayerimgk}`));
         libruntimeexecutorJ /= Math.max(modityO.length / (Math.max(1, parseInt(`${libruntimeexecutorJ}`))), 3);
         modityO += `${1 >> (Math.min(5, Math.abs(parseInt(`${libruntimeexecutorJ}`))))}`;
         notificationu += parseInt(`${libruntimeexecutorJ}`) ^ 3;
      if (5 == (libgloge.length ^ libjsijniprofilerH.length)) {
         libgloge = `${vnewst % 1}`;
      }
      if (libgloge.length < 4) {
         defaultplayerimgk += libgloge.length << (Math.min(1, Math.abs(parseInt(`${defaultplayerimgk}`))));
      }
      while (libgloge.endsWith(`${defaultplayerimgk}`)) {
         libgloge = `${libgloge.length}`;
         break;
      }
      heartO = [3 * parseInt(`${anythinkT}`)];
      videocommonF = new Map([[`${goalR.length}`, 3]]);
   let historyf = tempH >= 5180730.0;
   do {
       let mapbuffer_ = 1.0;
       let actionsM = 2.0;
       let detaili: Array<any> = [913, 25];
       let goalh: Array<any> = [579, 729];
       let saveJ: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,104,97,115,104,95,116,95,56,48,0),827], [String.fromCharCode(102,95,54,48,95,101,115,116,105,109,97,116,101,100,0),386]]);
       let datav: Map<any, any> = new Map([[String.fromCharCode(121,95,55,55,95,105,101,110,116,114,121,0),String.fromCharCode(114,95,57,0)], [String.fromCharCode(98,95,57,48,95,101,110,97,98,108,101,115,0),String.fromCharCode(114,103,98,97,108,101,95,121,95,56,53,0)], [String.fromCharCode(112,95,55,50,95,112,114,101,115,101,110,116,97,116,105,111,110,0),String.fromCharCode(105,95,57,52,95,109,118,112,114,101,100,0)]]);
          let macauH = String.fromCharCode(101,95,55,56,95,115,116,97,114,116,0);
         detaili.push(saveJ.size);
         macauH = `${macauH.length - macauH.length}`;
      for (let e = 0; e < 2; e++) {
         detaili.push(1);
      }
      for (let k = 0; k < 2; k++) {
          let matchesk = String.fromCharCode(119,95,56,57,95,114,116,114,101,101,110,111,100,101,0);
          let unfillP = String.fromCharCode(99,111,108,108,97,112,115,101,95,103,95,51,54,0);
          let hiadO = 1.0;
          let weibo5 = 0.0;
         goalh.push(3);
         matchesk = `${2 | parseInt(`${hiadO}`)}`;
         unfillP += `${unfillP.length}`;
         hiadO *= parseFloat(`${unfillP.length}`);
         weibo5 -= 3;
      }
      for (let c = 0; c < 2; c++) {
         datav = new Map([[`${datav.size}`, 1 % (Math.max(3, datav.size))]]);
      }
      if (1 == (detaili.length - saveJ.size) || (saveJ.size - 1) == 1) {
          let proxyg = 1.0;
          let emptya = 1.0;
          let eventO = true;
         detaili = [goalh.length];
         proxyg /= Math.max((parseFloat(`${parseInt(`${emptya}`) & (eventO ? 1 : 4)}`)), 4);
         emptya += parseInt(`${proxyg}`) % (Math.max(3, parseInt(`${emptya}`)));
         eventO = 33.74 <= emptya;
      }
      if (detaili.length == saveJ.size) {
         saveJ.set(`${saveJ.size}`, saveJ.size);
      }
      while (detaili.includes(actionsM)) {
          let file_ = 0.0;
          let backwardt = 0;
          let liveendmodallogom = 3.0;
         actionsM -= parseFloat(`${2}`);
         file_ /= Math.max(parseFloat(`${parseInt(`${liveendmodallogom}`)}`), 4);
         backwardt += 2;
         break;
      }
      while (1.9 > actionsM) {
          let filterI = String.fromCharCode(110,95,56,51,95,98,97,107,101,100,0);
          let arrowupd = 4.0;
         detaili = [parseInt(`${mapbuffer_}`) * 1];
         filterI = `${parseInt(`${arrowupd}`) << (Math.min(filterI.length, 5))}`;
         arrowupd -= parseInt(`${arrowupd}`) - filterI.length;
         break;
      }
         detaili.push(goalh.length);
         datav.set(`${actionsM}`, parseInt(`${mapbuffer_}`) - 2);
      while ((saveJ.size * 5) > 1 && 3.63 > (mapbuffer_ - parseFloat(`${saveJ.size}`))) {
         mapbuffer_ *= parseFloat(`${detaili.length}`);
         break;
      }
      tempH /= Math.max(4, parseFloat(`${2}`));
      if (historyf) {
         break;
      }
   } while ((4.15 <= tempH) && historyf);
      transfert = "3";
      privatechatbgA = new Map([[`${privatechatbgA.size}`, parseInt(`${whiteI}`)]]);
      mbnativeadvancedT.push(1 | mbnativeadvancedT.length);
   if (Array.from(privatechatbgA.values()).includes(anythinkT)) {
       let policyX = false;
          let vignettez: Map<any, any> = new Map([[String.fromCharCode(115,117,110,115,101,116,95,100,95,53,49,0),299], [String.fromCharCode(117,95,56,53,95,115,114,112,0),95]]);
         policyX = vignettez.size >= 63 || !policyX;
       let redirectY = true;
       let popupa = false;
       let mbjscommonx = false;
      privatechatbgA.set(transfert, 3 << (Math.min(1, transfert.length)));
   }
       let componentregistryI = 3;
       let libpangleflippedu: Map<any, any> = new Map([[String.fromCharCode(99,97,116,101,103,111,114,105,122,101,95,99,95,50,57,0),350], [String.fromCharCode(108,111,116,115,95,113,95,56,51,0),482], [String.fromCharCode(100,117,114,97,116,105,111,110,115,95,57,95,56,56,0),504]]);
      let taiwanK = 9511926 <= libpangleflippedu.size;
      do {
         libpangleflippedu = new Map([[`${libpangleflippedu.size}`, componentregistryI]]);
         if (taiwanK) {
            break;
         }
      } while ((componentregistryI > libpangleflippedu.size) && taiwanK);
         libpangleflippedu.set(`${componentregistryI}`, componentregistryI % (Math.max(3, 5)));
      let twitter0 = componentregistryI <= 6785418;
      do {
         componentregistryI %= Math.max(3, componentregistryI);
         if (twitter0) {
            break;
         }
      } while (twitter0 && ((componentregistryI & 4) == 3));
      let fieldd = libpangleflippedu.size >= 7269741;
      do {
         libpangleflippedu = new Map([[`${libpangleflippedu.size}`, 3 * componentregistryI]]);
         if (fieldd) {
            break;
         }
      } while (fieldd && (componentregistryI > 2));
          let pressure0: Array<any> = [String.fromCharCode(101,95,52,54,95,112,114,101,99,105,115,105,111,110,0), String.fromCharCode(110,95,51,57,95,115,105,109,117,108,99,97,115,116,0)];
          let emptyY: Map<any, any> = new Map([[String.fromCharCode(101,120,104,97,117,115,116,95,98,95,57,51,0),152], [String.fromCharCode(101,95,51,51,95,104,97,108,102,102,108,111,97,116,0),873], [String.fromCharCode(121,117,121,118,116,111,121,117,118,95,55,95,54,54,0),309]]);
         libpangleflippedu = new Map([[`${pressure0.length}`, 3]]);
         pressure0 = [3];
         emptyY = new Map([[`${emptyY.size}`, 3]]);
      for (let g = 0; g < 1; g++) {
         componentregistryI &= 2;
      }
      privatechatbgA = new Map([[`${componentregistryI}`, bggradientJ ^ componentregistryI]]);
   if (transfert.length >= 5) {
       let mutedi = true;
       let container0 = 4.0;
      while (!mutedi) {
         container0 /= Math.max(4, 2 >> (Math.min(Math.abs(parseInt(`${container0}`)), 2)));
         break;
      }
         mutedi = !mutedi;
         container0 /= Math.max((parseInt(`${container0}`) << (Math.min(4, Math.abs((mutedi ? 1 : 3))))), 3);
         mutedi = container0 > 89.92 && mutedi;
       let launcherY: Array<any> = [35, 266, 762];
       let colorsi: Array<any> = [158, 862];
       let referrerH = false;
       let uimanagero = true;
      transfert = `${mbnativeadvancedT.length & 2}`;
   }
   for (let b = 0; b < 2; b++) {
       let reviewF = String.fromCharCode(118,95,57,51,95,99,111,114,114,101,99,116,101,100,0);
      let eventF = reviewF == String.fromCharCode(118,116,51,0);
      do {
         reviewF = `${reviewF.length / (Math.max(1, reviewF.length))}`;
         if (eventF) {
            break;
         }
      } while ((!reviewF.endsWith(reviewF)) && eventF);
          let membershipM = String.fromCharCode(107,108,97,121,116,110,95,51,95,57,51,0);
         reviewF = `${reviewF.length << (Math.min(membershipM.length, 4))}`;
      for (let y = 0; y < 1; y++) {
         reviewF = `${reviewF.length - 3}`;
      }
      videocommonF.set(`${reviewF}`, (reviewF == String.fromCharCode(95,0) ? reviewF.length : videocommonF.size));
   }
   if (defaultlogoX.length < transfert.length) {
       let foundj: Array<any> = [718, 375, 757];
       let backiconr: Map<any, any> = new Map([[String.fromCharCode(114,116,99,100,95,54,95,49,48,0),String.fromCharCode(107,95,52,51,95,97,99,116,97,98,0)], [String.fromCharCode(102,114,111,110,116,95,108,95,56,55,0),String.fromCharCode(115,116,116,115,95,106,95,53,52,0)], [String.fromCharCode(112,114,101,102,101,114,114,101,100,95,121,95,56,51,0),String.fromCharCode(119,95,50,52,0)]]);
       let classesU = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,97,116,97,95,52,95,49,55,0);
      for (let d = 0; d < 2; d++) {
         backiconr = new Map([[`${foundj.length}`, foundj.length << (Math.min(classesU.length, 4))]]);
      }
         backiconr.set(`${foundj.length}`, backiconr.size);
       let pressureE = 4.0;
       let halfp = 2.0;
      if (5.42 <= (pressureE / (Math.max(1.23, 8))) && (pressureE / 1.23) <= 2.49) {
          let greenu = 1.0;
          let station6: Array<any> = [561, 639, 622];
          let iconmore0 = String.fromCharCode(99,111,109,112,111,115,105,116,105,110,103,95,104,95,56,56,0);
          let arrowu = 1.0;
          let configureg = String.fromCharCode(97,112,112,118,101,121,111,114,95,122,95,55,51,0);
         pressureE *= parseFloat(`${parseInt(`${greenu}`) & 2}`);
         greenu *= (iconmore0 == String.fromCharCode(79,0) ? station6.length : iconmore0.length);
         station6 = [parseInt(`${arrowu}`) | 1];
         arrowu -= (iconmore0 == String.fromCharCode(78,0) ? station6.length : iconmore0.length);
         configureg = `${iconmore0.length / (Math.max(3, parseInt(`${arrowu}`)))}`;
      }
      while (classesU.length > 1) {
         pressureE -= parseFloat(`${foundj.length % (Math.max(7, parseInt(`${halfp}`)))}`);
         break;
      }
         foundj.push((classesU == String.fromCharCode(103,0) ? parseInt(`${pressureE}`) : classesU.length));
      for (let y = 0; y < 3; y++) {
          let analyticm = false;
          let zhengpianr: Map<any, any> = new Map([[String.fromCharCode(109,115,103,115,95,49,95,52,56,0),318], [String.fromCharCode(119,95,49,52,95,101,114,105,97,108,105,122,97,116,105,111,110,0),263], [String.fromCharCode(106,95,56,51,95,103,100,112,114,0),913]]);
          let temperatureE = 2.0;
         backiconr = new Map([[`${backiconr.size}`, ((analyticm ? 4 : 5) ^ 1)]]);
         analyticm = zhengpianr.size < 79;
         zhengpianr = new Map([[`${zhengpianr.size}`, 3 ^ zhengpianr.size]]);
         temperatureE /= Math.max(parseFloat(`${parseInt(`${temperatureE}`)}`), 3);
      }
      for (let w = 0; w < 2; w++) {
         halfp -= parseFloat(`${parseInt(`${pressureE}`) - 3}`);
      }
      if ((halfp / 1.71) < 4.83 || 1 < (backiconr.size - 5)) {
         halfp += parseFloat(`${classesU.length}`);
      }
      defaultlogoX = [3];
   }
   let overlayW = privatechatbgA.size <= 7667271;
   do {
       let sentryn = 1.0;
       let promotionz = 1.0;
      let private_yb3 = promotionz >= 8712190.0;
      do {
         promotionz += parseFloat(`${3}`);
         if (private_yb3) {
            break;
         }
      } while ((sentryn < 5.37) && private_yb3);
         promotionz *= parseFloat(`${parseInt(`${promotionz}`) << (Math.min(3, Math.abs(2)))}`);
      let greytickG = sentryn >= 6606492.0;
      do {
         sentryn *= parseInt(`${promotionz}`);
         if (greytickG) {
            break;
         }
      } while (greytickG && (2.0 == (sentryn - promotionz)));
      while (5.59 >= (3 / (Math.max(3, promotionz)))) {
         sentryn += parseInt(`${sentryn}`) << (Math.min(1, Math.abs(2)));
         break;
      }
      while ((sentryn * 5) <= 3.13) {
         promotionz += parseFloat(`${parseInt(`${sentryn}`)}`);
         break;
      }
         promotionz /= Math.max(parseFloat(`${parseInt(`${promotionz}`) + parseInt(`${sentryn}`)}`), 3);
      privatechatbgA = new Map([[`${bggradientJ}`, bggradientJ ^ 3]]);
      if (overlayW) {
         break;
      }
   } while (overlayW && (Array.from(privatechatbgA.keys()).includes(`${whiteI}`)));

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