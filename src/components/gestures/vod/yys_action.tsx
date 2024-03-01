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
       let graphq = true;
    let connectionY = 3.0;
    let libjsinspector6: Array<any> = [643, 153, 269];
    let debugj = String.fromCharCode(108,97,114,112,111,108,121,0);
    let philippinesM = 3.0;
    let componentregistryb = 4;
    let hookO = 0;
    let appsL = 5;
    let bodanh = String.fromCharCode(114,117,110,116,101,115,116,115,95,111,95,52,53,0);
    let close1 = 2.0;
      debugj += `${debugj.length}`;
      connectionY /= Math.max(3, parseFloat(`${appsL}`));
   if (!debugj.endsWith(`${connectionY}`)) {
      debugj += `${3 / (Math.max(5, hookO))}`;
   }
      hookO |= 1;
      philippinesM += 1;
      connectionY += parseFloat(`${parseInt(`${connectionY}`)}`);
      hookO |= 3 - libjsinspector6.length;
      hookO %= Math.max(1, 3);
       let dicea = 3;
       let lineX: Map<any, any> = new Map([[String.fromCharCode(114,111,116,97,116,105,111,110,0),false ], [String.fromCharCode(109,95,50,56,95,115,117,112,112,111,114,116,97,98,108,101,0),true ], [String.fromCharCode(97,100,100,101,100,0),false ]]);
       let assistO = String.fromCharCode(120,95,53,51,95,104,111,115,116,0);
       let gestureI = String.fromCharCode(97,115,99,101,110,100,105,110,103,95,116,95,53,52,0);
         lineX.set(gestureI, (gestureI == String.fromCharCode(115,0) ? lineX.size : gestureI.length));
      bodanh = `${((graphq ? 2 : 3) * parseInt(`${connectionY}`))}`;
      dicea &= 1;
      componentregistryb %= Math.max(3, ((graphq ? 4 : 5) | parseInt(`${connectionY}`)));
   if (1 > (1 >> (Math.min(2, debugj.length))) || (debugj.length >> (Math.min(Math.abs(1), 5))) > 4) {
      philippinesM += 1 - appsL;
   }
      connectionY /= Math.max(parseFloat(`${libjsinspector6.length & parseInt(`${connectionY}`)}`), 4);
       let componentregistryQ = 1.0;
         componentregistryQ -= 2 | parseInt(`${componentregistryQ}`);
       let arrow2 = String.fromCharCode(102,97,110,99,121,0);
       let mbbannerv = String.fromCharCode(99,111,110,116,101,110,116,108,101,115,115,0);
         mbbannerv = `${arrow2.length}`;
      appsL %= Math.max(4, 3 - appsL);
      graphq = bodanh.length == 25 || 25 == hookO;
   let successL = graphq ? !graphq : graphq;
   do {
      graphq = debugj.length < componentregistryb;
      if (successL) {
         break;
      }
   } while ((1 < libjsinspector6.length || (1 | libjsinspector6.length) < 3) && successL);
   while (!debugj.includes(`${componentregistryb}`)) {
      debugj = `${2 / (Math.max(parseInt(`${connectionY}`), 1))}`;
      break;
   }
       let pageZ = 4.0;
       let tailO = false;
         tailO = tailO || 93.4 >= pageZ;
      if (4.53 < (pageZ / (Math.max(4.0, 7)))) {
         pageZ -= ((tailO ? 2 : 3) * parseInt(`${pageZ}`));
      }
      if (tailO) {
         tailO = 31.47 >= pageZ;
      }
          let eact9: Array<any> = [754, 355];
          let constantss = false;
          let carouselT = String.fromCharCode(101,108,108,105,112,116,105,99,97,108,0);
         pageZ *= eact9.length << (Math.min(Math.abs(1), 4));
         eact9 = [carouselT.length * 1];
         constantss = (((constantss ? carouselT.length : 49) & carouselT.length) == 49);
          let progressh = String.fromCharCode(99,97,108,99,117,108,97,116,105,110,103,95,52,95,49,57,0);
          let basketball8 = 0.0;
          let binddatasp = String.fromCharCode(99,95,51,48,95,115,121,110,111,110,121,109,0);
         tailO = (40 <= (progressh.length - (tailO ? 40 : progressh.length)));
         basketball8 += (String.fromCharCode(75,0) == binddatasp ? parseInt(`${basketball8}`) : binddatasp.length);
         pageZ += ((tailO ? 2 : 1) >> (Math.min(Math.abs(parseInt(`${pageZ}`)), 3)));
      libjsinspector6.push(bodanh.length);
   for (let y = 0; y < 3; y++) {
      graphq = bodanh.length == 4;
   }
       let libsentryO = String.fromCharCode(109,105,110,111,114,0);
       let gesturest = String.fromCharCode(114,95,56,95,116,114,117,110,99,97,116,101,100,0);
       let liblogger9 = 2.0;
      for (let p = 0; p < 1; p++) {
         liblogger9 -= parseFloat(`${libsentryO.length ^ parseInt(`${liblogger9}`)}`);
      }
      for (let y = 0; y < 3; y++) {
         liblogger9 *= parseFloat(`${2}`);
      }
          let codegenE = String.fromCharCode(115,111,110,101,119,99,111,110,110,0);
          let scoreK = true;
         gesturest += `${libsentryO.length | 2}`;
         codegenE = `${codegenE.length % (Math.max(6, codegenE.length))}`;
         scoreK = (codegenE.length + codegenE.length) > 36;
         gesturest += `${libsentryO.length << (Math.min(Math.abs(2), 5))}`;
          let routero = 4.0;
          let listD = String.fromCharCode(101,120,112,105,114,101,100,0);
          let analyticsP = String.fromCharCode(99,97,114,116,101,115,105,97,110,0);
         libsentryO = `${parseInt(`${routero}`) / (Math.max(1, 2))}`;
         routero /= Math.max(4, (listD == String.fromCharCode(101,0) ? listD.length : analyticsP.length));
         analyticsP = `${listD.length}`;
      graphq = 94 < bodanh.length;
   if (5 < (bodanh.length / (Math.max(4, 6))) && 5.45 < (close1 + parseFloat(`${bodanh.length}`))) {
      bodanh = `${parseInt(`${connectionY}`)}`;
   }
       let sinaS = 3.0;
      let bodanhS = sinaS >= 6468561.0;
      do {
         sinaS /= Math.max(1, parseFloat(`${parseInt(`${sinaS}`)}`));
         if (bodanhS) {
            break;
         }
      } while ((5.72 < (sinaS / (Math.max(10, sinaS))) && 2.10 < (5.72 / (Math.max(3, sinaS)))) && bodanhS);
      let dataw = 9016202.0 >= sinaS;
      do {
         sinaS += parseFloat(`${parseInt(`${sinaS}`) ^ 3}`);
         if (dataw) {
            break;
         }
      } while (dataw && (sinaS <= 2.19));
         sinaS -= parseFloat(`${1 % (Math.max(parseInt(`${sinaS}`), 3))}`);
      debugj = `${3 / (Math.max(1, parseInt(`${sinaS}`)))}`;

            setShowSlider(false);
        }, 1000);
    }

    const handleScreenTouch = () => {
       let leakcheckere = String.fromCharCode(97,112,112,101,97,114,101,110,99,101,0);
    let libreact9 = String.fromCharCode(100,95,55,54,95,115,117,98,114,101,115,117,108,116,0);
    let carouselb = 3.0;
    let bridge0 = String.fromCharCode(100,100,99,116,0);
    let expandE = 3.0;
    let libtann = 2.0;
    let libhermes4 = 5.0;
    let infow = String.fromCharCode(114,97,114,105,116,121,95,56,95,49,0);
    let videojsk: Map<any, any> = new Map([[String.fromCharCode(99,114,101,100,101,110,116,105,97,108,0),true ], [String.fromCharCode(115,95,52,56,95,119,105,116,104,105,110,0),true ], [String.fromCharCode(117,110,107,105,99,107,0),true ]]);
    let graphicsg = String.fromCharCode(119,115,119,111,114,100,0);
    let crownH: Map<any, any> = new Map([[String.fromCharCode(117,110,114,101,115,101,114,118,101,100,95,54,95,49,54,0),true ], [String.fromCharCode(115,117,103,103,101,115,116,105,111,110,115,0),true ]]);
       let armvao = 4.0;
       let detailJ = 4.0;
      if (detailJ <= armvao) {
         detailJ *= parseFloat(`${1}`);
      }
      let gmails = armvao <= 9530800.0;
      do {
          let mbbannerd = String.fromCharCode(115,117,109,115,113,0);
          let klevinE = String.fromCharCode(110,101,97,114,108,121,95,100,95,55,0);
          let plash0 = String.fromCharCode(97,100,97,112,116,95,117,95,55,52,0);
          let baiduk = String.fromCharCode(112,111,105,110,116,101,114,0);
          let analyticsN = String.fromCharCode(105,100,102,97,95,100,95,49,0);
         armvao *= parseFloat(`${plash0.length}`);
         mbbannerd += `${(baiduk == String.fromCharCode(66,0) ? klevinE.length : baiduk.length)}`;
         klevinE = `${mbbannerd.length + 3}`;
         plash0 += `${baiduk.length * 3}`;
         analyticsN += "3";
         if (gmails) {
            break;
         }
      } while (gmails && (4.23 > (armvao / (Math.max(3.91, 1))) && (detailJ * armvao) > 3.91));
         detailJ /= Math.max(4, parseFloat(`${parseInt(`${armvao}`)}`));
      for (let y = 0; y < 2; y++) {
         detailJ -= parseFloat(`${3}`);
      }
      if (5.15 <= (1.78 + detailJ)) {
          let internetl = 0;
          let libfbv = String.fromCharCode(121,112,114,101,100,105,99,116,105,111,110,95,118,95,49,54,0);
          let umengF = String.fromCharCode(101,95,54,56,95,115,99,97,108,97,98,108,101,0);
         detailJ *= parseFloat(`${2 - parseInt(`${armvao}`)}`);
         internetl >>= Math.min(Math.abs(2), 1);
         libfbv = `${internetl}`;
         umengF += `${(libfbv == String.fromCharCode(75,0) ? libfbv.length : internetl)}`;
      }
       let apps7 = String.fromCharCode(100,97,116,97,114,0);
      leakcheckere = `${parseInt(`${libtann}`)}`;
   for (let r = 0; r < 1; r++) {
       let runtimeschedulerG = 4.0;
       let filep = String.fromCharCode(105,110,102,108,97,116,101,95,106,95,53,50,0);
       let areao = String.fromCharCode(108,95,52,95,102,105,110,97,108,105,115,101,114,0);
       let streaming0 = String.fromCharCode(119,97,105,116,101,114,0);
      while (3.93 == runtimeschedulerG) {
         filep = `${streaming0.length}`;
         break;
      }
         streaming0 = `${3 | streaming0.length}`;
          let launchJ = String.fromCharCode(117,95,57,49,95,97,112,112,101,110,100,99,104,97,114,0);
          let greyK = 0.0;
          let clear_ = String.fromCharCode(100,95,52,49,95,101,110,97,98,108,101,0);
         areao = `${filep.length}`;
         launchJ += `${(String.fromCharCode(109,0) == clear_ ? launchJ.length : clear_.length)}`;
         greyK += 3;
          let popupC = String.fromCharCode(112,97,114,116,95,121,95,52,57,0);
          let nalyticsF = String.fromCharCode(112,114,111,98,101,95,48,95,52,48,0);
          let viewern = String.fromCharCode(99,101,110,116,114,97,108,105,116,121,0);
         areao += `${3 & filep.length}`;
         popupC = `${3 * nalyticsF.length}`;
         nalyticsF += `${popupC.length % 3}`;
         viewern += `${nalyticsF.length | popupC.length}`;
          let basei = 3.0;
          let sideF = 2;
         streaming0 = `${parseInt(`${runtimeschedulerG}`) / 1}`;
         basei -= parseFloat(`${1}`);
         sideF &= sideF + parseInt(`${basei}`);
      expandE -= 3 << (Math.min(3, Math.abs(videojsk.size)));
   }
      libhermes4 += parseFloat(`${parseInt(`${expandE}`)}`);
       let roundS = 5;
       let videocommonN = false;
         videocommonN = !videocommonN;
      let xadsdkH = videocommonN ? !videocommonN : videocommonN;
      do {
          let rightG: Array<any> = [231, 709];
         videocommonN = roundS <= 49;
         rightG.push(3);
         if (xadsdkH) {
            break;
         }
      } while ((3 < roundS) && xadsdkH);
         videocommonN = 82 > roundS || videocommonN;
         roundS /= Math.max(2, 3);
      for (let p = 0; p < 1; p++) {
         roundS &= roundS;
      }
       let nativemodulez = String.fromCharCode(112,109,107,95,56,95,54,52,0);
       let forward1 = String.fromCharCode(104,97,110,100,0);
      expandE -= bridge0.length;
      videojsk = new Map([[libreact9, libreact9.length]]);
      bridge0 += `${(String.fromCharCode(112,0) == bridge0 ? parseInt(`${libtann}`) : bridge0.length)}`;
       let forward6 = true;
      for (let o = 0; o < 2; o++) {
         forward6 = !forward6 && !forward6;
      }
          let traminit = 5.0;
         forward6 = traminit <= 26.52 || forward6;
      for (let z = 0; z < 2; z++) {
          let runtimej = String.fromCharCode(112,97,103,101,115,0);
          let rules0 = String.fromCharCode(117,110,100,111,116,116,101,100,0);
          let philippinesG = false;
          let anewinterstitialh: Map<any, any> = new Map([[String.fromCharCode(114,105,99,101,0),String.fromCharCode(115,108,111,119,109,111,100,101,0)], [String.fromCharCode(99,111,118,101,114,95,122,95,52,50,0),String.fromCharCode(101,110,100,101,100,0)]]);
         forward6 = (84 >= ((forward6 ? 84 : rules0.length) << (Math.min(rules0.length, 5))));
         runtimej = "2";
         philippinesG = runtimej.length > anewinterstitialh.size;
         anewinterstitialh = new Map([[runtimej, (runtimej.length | (philippinesG ? 1 : 3))]]);
      }
      libhermes4 *= parseFloat(`${parseInt(`${libtann}`)}`);
       let umengg: Map<any, any> = new Map([[String.fromCharCode(116,104,117,110,107,0),555], [String.fromCharCode(115,116,117,102,102,105,110,103,0),889]]);
       let singlek = 4.0;
       let dialogT: Map<any, any> = new Map([[String.fromCharCode(118,101,114,105,102,105,101,100,0),503], [String.fromCharCode(115,116,114,105,115,116,114,0),873]]);
      let bingd = 5967411 <= umengg.size;
      do {
          let flipperu = 5;
         umengg = new Map([[`${umengg.size}`, parseInt(`${singlek}`) | umengg.size]]);
         flipperu += 1 + flipperu;
         if (bingd) {
            break;
         }
      } while ((dialogT.size <= umengg.size) && bingd);
      if ((dialogT.size * parseInt(`${singlek}`)) == 3 || 4 == (dialogT.size - 3)) {
         singlek *= 1;
      }
         umengg = new Map([[`${dialogT.size}`, parseInt(`${singlek}`)]]);
       let flipperR = String.fromCharCode(106,107,101,110,99,0);
       let countryO = String.fromCharCode(105,115,110,111,116,116,97,112,0);
         countryO = `${umengg.size}`;
      while ((dialogT.size & 2) >= 4 || (umengg.size & dialogT.size) >= 2) {
         dialogT.set(`${flipperR}`, 2 >> (Math.min(3, Math.abs(umengg.size))));
         break;
      }
       let episodes4 = true;
      if ((umengg.size * 4) <= 5 || 4 <= umengg.size) {
          let brightnessf = 5;
         episodes4 = 25 >= brightnessf;
      }
      while (singlek >= flipperR.length) {
         singlek += countryO.length | 3;
         break;
      }
      libhermes4 /= Math.max(3, parseFloat(`${parseInt(`${libtann}`)}`));
      libhermes4 *= parseFloat(`${videojsk.size & parseInt(`${libtann}`)}`);
       let colorsu = 3;
       let policy3: Array<any> = [877, 533, 283];
      if (5 > (policy3.length - 1)) {
         colorsu &= policy3.length % 3;
      }
      let matchb = policy3.length <= 7968685;
      do {
         policy3.push(1);
         if (matchb) {
            break;
         }
      } while (matchb && ((colorsu / (Math.max(8, policy3.length))) >= 4 || (policy3.length / 4) >= 2));
          let malaysia1 = String.fromCharCode(120,99,101,112,116,105,111,110,0);
         policy3.push(1);
         malaysia1 = `${malaysia1.length + 3}`;
       let castingb = false;
       let username9 = true;
          let episodesQ = 1.0;
         policy3 = [parseInt(`${episodesQ}`) ^ 1];
      for (let v = 0; v < 3; v++) {
         policy3.push(policy3.length);
      }
      libreact9 += `${1 * leakcheckere.length}`;
      libhermes4 -= parseFloat(`${parseInt(`${libtann}`) >> (Math.min(4, Math.abs(2)))}`);
   if (1.81 == (graphicsg.length * libtann) || 1 == (3 * graphicsg.length)) {
      graphicsg = "1";
   }
       let classesN = String.fromCharCode(97,95,49,55,95,115,116,97,121,0);
       let yinit_447 = true;
       let mapbuffern = String.fromCharCode(109,95,57,57,95,116,104,114,111,116,116,108,101,0);
      for (let h = 0; h < 1; h++) {
         classesN = `${(mapbuffern.length * (yinit_447 ? 4 : 4))}`;
      }
         yinit_447 = mapbuffern.length < 15;
      let alertU = yinit_447 ? !yinit_447 : yinit_447;
      do {
         yinit_447 = !yinit_447;
         if (alertU) {
            break;
         }
      } while (alertU && (yinit_447));
          let ruleso = 1.0;
          let halfl = String.fromCharCode(104,95,50,55,95,115,104,117,116,100,111,119,110,97,99,107,0);
          let libglogZ = String.fromCharCode(114,101,108,117,95,105,95,54,50,0);
         classesN = `${halfl.length}`;
         ruleso /= Math.max(parseFloat(`${libglogZ.length}`), 1);
         halfl += `${parseInt(`${ruleso}`) % (Math.max(libglogZ.length, 1))}`;
          let carousel4 = String.fromCharCode(108,95,55,48,95,99,114,101,100,105,98,105,108,105,116,121,0);
          let subs1 = String.fromCharCode(114,101,115,105,122,101,100,0);
         mapbuffern += `${(String.fromCharCode(69,0) == subs1 ? subs1.length : carousel4.length)}`;
      while (classesN != String.fromCharCode(119,0) && 3 > mapbuffern.length) {
          let libruntimeexecutorJ: Array<any> = [987, 194, 42];
          let disconnectedx = String.fromCharCode(103,95,55,55,95,112,97,114,116,105,116,105,111,110,115,0);
          let libreanimated4: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,99,98,95,52,95,52,53,0),613], [String.fromCharCode(117,115,101,114,0),542], [String.fromCharCode(118,105,100,101,111,115,116,114,101,97,109,95,49,95,53,48,0),713]]);
          let tail4: Map<any, any> = new Map([[String.fromCharCode(115,117,98,118,105,100,101,111,95,120,95,50,51,0),301], [String.fromCharCode(97,117,114,97,0),713]]);
          let less6 = String.fromCharCode(121,95,57,53,95,109,97,116,114,105,120,102,0);
         mapbuffern = `${((yinit_447 ? 1 : 3) * 3)}`;
         libruntimeexecutorJ.push(less6.length);
         disconnectedx = `${1 ^ disconnectedx.length}`;
         libreanimated4.set(`${disconnectedx}`, 2 + disconnectedx.length);
         tail4.set(disconnectedx, disconnectedx.length);
         less6 = `${libreanimated4.size}`;
         break;
      }
          let actionsd = 3.0;
          let classesA = 3.0;
          let router2 = 2;
         yinit_447 = (router2 >> (Math.min(classesN.length, 4))) == 48;
         actionsd += parseFloat(`${3 | parseInt(`${classesA}`)}`);
         classesA += parseFloat(`${parseInt(`${actionsd}`) + parseInt(`${classesA}`)}`);
         router2 &= 2 * parseInt(`${actionsd}`);
          let catalog1 = String.fromCharCode(118,95,54,56,0);
          let styleV = 4.0;
          let shirtZ = 3;
         classesN += `${parseInt(`${styleV}`)}`;
         catalog1 += "1";
         styleV /= Math.max(shirtZ, 4);
         shirtZ += shirtZ - catalog1.length;
      for (let g = 0; g < 1; g++) {
          let nalyticsz = 2;
          let photoM: Array<any> = [273, 346, 293];
          let awayo = true;
         mapbuffern = `${mapbuffern.length * 1}`;
         nalyticsz ^= ((awayo ? 4 : 2) + 1);
         photoM = [nalyticsz << (Math.min(photoM.length, 1))];
         awayo = 22 < photoM.length;
      }
      carouselb /= Math.max(parseFloat(`${mapbuffern.length - graphicsg.length}`), 1);
   if (libtann <= infow.length) {
      infow = `${parseInt(`${carouselb}`) / (Math.max(bridge0.length, 1))}`;
   }
      expandE *= 3 / (Math.max(9, libreact9.length));
      libreact9 = `${videojsk.size * graphicsg.length}`;
   for (let e = 0; e < 3; e++) {
       let danger0 = String.fromCharCode(97,114,116,105,102,97,99,116,0);
      for (let s = 0; s < 1; s++) {
          let membershipo = String.fromCharCode(114,95,53,57,95,115,99,117,98,98,101,114,0);
          let libcxxcomponents9: Array<any> = [829, 317, 609];
          let topon2 = String.fromCharCode(102,105,108,101,95,116,95,53,54,0);
          let singaporem = 5.0;
          let libjsijniprofilerm = 0.0;
         danger0 += `${parseInt(`${libjsijniprofilerm}`) % 2}`;
         membershipo += `${1 % (Math.max(10, topon2.length))}`;
         libcxxcomponents9 = [3];
         topon2 = `${membershipo.length % 1}`;
         singaporem *= topon2.length + parseInt(`${singaporem}`);
         libjsijniprofilerm -= 3 >> (Math.min(2, topon2.length));
      }
      while (danger0.endsWith(`${danger0.length}`)) {
         danger0 = `${3 ^ danger0.length}`;
         break;
      }
      let combineU = danger0.length >= 7929250;
      do {
         danger0 = `${danger0.length ^ 2}`;
         if (combineU) {
            break;
         }
      } while ((danger0 != String.fromCharCode(49,0)) && combineU);
      libreact9 = `${parseInt(`${libhermes4}`) & parseInt(`${expandE}`)}`;
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