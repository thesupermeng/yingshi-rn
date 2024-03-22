import React, { useEffect, useState, useRef } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import VolumeGestureControl from './mayi_recommendation_gemfile';
import BrightnessGestureControl from './mayi_libfb_tempnodata';
import BrightnessVolumeSlider from './mayi_rewardvideo';
import ProgressGestureControl from './mayi_uimanager';

const GestureControls = {
    VOLUME: 'Volume',
    BRIGHTNESS: 'Brightness',
};

const Icons = {
    [GestureControls.BRIGHTNESS]: {
        noValue: "iconstarCatagory",
        hasValue: "phoneInviteLibhermes"
    },
    [GestureControls.VOLUME]: {
        noValue: "taiwanScore",
        hasValue: "iconarrowrightorangeReminderPosition"
    },
}

type mayi_GoogleViews = {
    onScreenTouched: () => any,
    disableFullScreenGesture: boolean,
    onSkip?: any
    vodType?: string
}

export default ({ onScreenTouched, disableFullScreenGesture, onSkip, vodType = 'vod' }: mayi_GoogleViews) => {
    const [icon, setIcon] = useState({
        noValue: "taiwanScore",
        hasValue: "iconarrowrightorangeReminderPosition"
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
       let country0 = String.fromCharCode(100,95,51,56,95,109,111,100,117,108,101,115,0);
    let gestureF = 2.0;
    let helperp = String.fromCharCode(100,110,115,108,97,98,101,108,95,104,95,57,53,0);
    let homeinactiveh = String.fromCharCode(97,95,55,56,95,114,101,109,105,110,100,101,114,0);
    let awayiconN: Map<any, any> = new Map([[String.fromCharCode(121,95,54,54,95,97,99,107,101,100,0),925], [String.fromCharCode(97,118,102,111,114,109,97,116,114,101,115,95,104,95,54,53,0),519], [String.fromCharCode(99,95,52,95,112,101,114,102,111,114,109,105,110,103,0),226]]);
    let basketballicon9 = 0.0;
    let icondefaultthumbnailk = 2;
    let pointl = 4.0;
    let downarrowX = String.fromCharCode(114,101,115,112,95,54,95,52,48,0);
    let smallN = true;
    let foregrounda: Map<any, any> = new Map([[String.fromCharCode(114,97,112,104,105,99,115,95,112,95,49,52,0),String.fromCharCode(110,95,51,48,95,107,109,101,97,110,115,0)], [String.fromCharCode(105,110,112,117,116,121,95,106,95,50,55,0),String.fromCharCode(119,95,49,51,95,108,101,110,103,116,104,115,0)]]);
    let membership8 = false;
    let headerj = String.fromCharCode(113,105,110,100,101,120,95,105,95,57,48,0);
    let libswscale8 = true;
    let interstitialw = String.fromCharCode(102,95,49,54,95,115,111,117,110,100,0);
   while ((helperp.length - 4) < 3) {
      helperp += `${awayiconN.size}`;
      break;
   }
   let pointg = basketballicon9 <= 6325562.0;
   do {
       let settingh = 1.0;
       let const_u0p: Array<any> = [367, 604, 779];
       let teamdetailsbgJ = String.fromCharCode(115,117,109,109,97,114,105,101,115,95,48,95,49,53,0);
       let string3 = 1.0;
       let mime3 = 5;
      while (teamdetailsbgJ.length < const_u0p.length) {
          let black_ = 4.0;
          let binddatasU = 1;
          let libhermese = 4;
         teamdetailsbgJ += `${teamdetailsbgJ.length}`;
         black_ /= Math.max(2, 5);
         binddatasU ^= 2;
         libhermese %= Math.max(parseInt(`${black_}`), 4);
         break;
      }
         string3 *= 3 * parseInt(`${string3}`);
          let statistics7 = true;
          let whitetickP = 0;
         teamdetailsbgJ = "2";
         statistics7 = whitetickP > 41 || !statistics7;
         whitetickP += whitetickP * 1;
      for (let w = 0; w < 3; w++) {
         teamdetailsbgJ += `${parseInt(`${settingh}`)}`;
      }
      let basketballV = 6352092.0 <= string3;
      do {
          let bootsplashF = String.fromCharCode(114,97,109,112,95,103,95,51,49,0);
         string3 += 1 / (Math.max(9, parseInt(`${string3}`)));
         bootsplashF = "3";
         if (basketballV) {
            break;
         }
      } while (basketballV && ((const_u0p.length >> (Math.min(Math.abs(2), 4))) <= 3));
      for (let z = 0; z < 2; z++) {
         teamdetailsbgJ = `${parseInt(`${string3}`) ^ 1}`;
      }
       let humidityH: Map<any, any> = new Map([[String.fromCharCode(100,95,50,52,95,101,120,101,99,0),String.fromCharCode(99,95,54,56,95,109,97,107,101,100,112,107,103,0)], [String.fromCharCode(116,114,105,109,95,109,95,56,54,0),String.fromCharCode(122,95,49,52,95,115,97,116,100,0)], [String.fromCharCode(108,95,49,48,95,97,112,112,101,97,114,0),String.fromCharCode(115,95,53,95,101,115,116,105,109,97,116,105,110,103,0)]]);
       let inviten: Map<any, any> = new Map([[String.fromCharCode(106,102,105,101,108,100,115,95,100,95,54,57,0),String.fromCharCode(108,105,110,101,115,105,122,101,95,49,95,49,55,0)], [String.fromCharCode(100,95,57,56,95,109,105,110,105,109,105,122,101,0),String.fromCharCode(120,95,50,56,95,110,111,114,109,97,108,105,122,97,116,105,111,110,0)], [String.fromCharCode(110,105,115,116,122,95,110,95,52,54,0),String.fromCharCode(117,95,55,48,95,111,99,97,108,105,122,97,116,105,111,110,0)]]);
         teamdetailsbgJ += `${const_u0p.length | 2}`;
          let dialogr = 1.0;
          let disconnecteda = String.fromCharCode(112,95,51,57,95,104,97,108,100,99,108,117,116,115,114,99,0);
         settingh *= const_u0p.length | teamdetailsbgJ.length;
         dialogr += parseFloat(`${1}`);
         disconnecteda += `${disconnecteda.length / (Math.max(3, parseInt(`${dialogr}`)))}`;
       let iconarrowrightwhiteK = String.fromCharCode(120,95,49,95,114,101,115,105,100,117,101,115,0);
       let unimplementedviewd = String.fromCharCode(118,97,114,108,101,110,103,116,104,95,49,95,53,51,0);
          let eventf = false;
         const_u0p = [mime3 + 2];
         eventf = !eventf;
       let mode7 = 1.0;
       let libavdeviceq = 3.0;
         unimplementedviewd += `${iconarrowrightwhiteK.length + parseInt(`${string3}`)}`;
          let whistlew = 4.0;
         humidityH = new Map([[`${mode7}`, parseInt(`${libavdeviceq}`)]]);
         whistlew *= parseInt(`${whistlew}`) % 3;
         teamdetailsbgJ = `${humidityH.size}`;
      basketballicon9 += foregrounda.size;
      if (pointg) {
         break;
      }
   } while ((4 == (5 >> (Math.min(1, Math.abs(foregrounda.size))))) && pointg);
   while ((basketballicon9 * gestureF) < 4.28) {
       let penaltyY = String.fromCharCode(115,97,109,112,95,51,95,57,57,0);
       let alerto = String.fromCharCode(115,95,57,52,95,101,114,114,110,111,0);
       let context4 = String.fromCharCode(99,95,56,56,95,105,110,110,100,101,114,0);
       let arrowupJ = 1;
       let goalI = 4;
      let androidB = context4.length >= 6815810;
      do {
         context4 = `${goalI}`;
         if (androidB) {
            break;
         }
      } while (androidB && (alerto == String.fromCharCode(100,0)));
         context4 = `${context4.length}`;
      if (alerto.length == context4.length) {
         alerto = `${(String.fromCharCode(50,0) == context4 ? context4.length : goalI)}`;
      }
       let fullscreenmaxj = 1.0;
      while (!penaltyY.endsWith(alerto)) {
         penaltyY = `${penaltyY.length}`;
         break;
      }
         alerto = `${alerto.length | penaltyY.length}`;
       let icon6: Array<any> = [String.fromCharCode(121,95,56,57,95,117,110,102,111,114,109,97,116,116,101,100,0), String.fromCharCode(115,97,118,105,110,103,115,95,50,95,52,50,0), String.fromCharCode(100,101,99,111,109,112,114,101,115,115,105,111,110,95,118,95,53,57,0)];
          let modalN: Map<any, any> = new Map([[String.fromCharCode(113,95,53,54,95,99,97,108,108,111,99,0),String.fromCharCode(113,95,49,54,95,116,111,111,108,99,104,97,105,110,0)], [String.fromCharCode(111,112,117,115,101,110,99,95,100,95,50,54,0),String.fromCharCode(120,95,55,54,95,112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,0)]]);
         alerto = `${context4.length}`;
         modalN = new Map([[`${modalN.size}`, 2]]);
      gestureF += homeinactiveh.length / (Math.max(2, 9));
      break;
   }
      smallN = downarrowX == country0;
       let logoA: Map<any, any> = new Map([[String.fromCharCode(112,111,111,108,114,101,102,95,104,95,52,54,0),232], [String.fromCharCode(115,112,108,105,116,115,95,104,95,50,49,0),899], [String.fromCharCode(99,97,114,101,102,117,108,108,121,95,106,95,50,52,0),300]]);
       let runtimeschedulerp = 4.0;
         runtimeschedulerp *= logoA.size;
      if (Array.from(logoA.values()).includes(runtimeschedulerp)) {
         logoA.set(`${runtimeschedulerp}`, parseInt(`${runtimeschedulerp}`));
      }
         runtimeschedulerp -= parseInt(`${runtimeschedulerp}`);
         runtimeschedulerp += 3 - parseInt(`${runtimeschedulerp}`);
         logoA = new Map([[`${logoA.size}`, 1 << (Math.min(2, Math.abs(parseInt(`${runtimeschedulerp}`))))]]);
      let mbbido = 6624432 <= logoA.size;
      do {
         logoA.set(`${runtimeschedulerp}`, parseInt(`${runtimeschedulerp}`) & 2);
         if (mbbido) {
            break;
         }
      } while (mbbido && ((logoA.size | 5) >= 1 && (runtimeschedulerp - logoA.size) >= 3.52));
      smallN = runtimeschedulerp == 42.44;
   while (downarrowX != String.fromCharCode(78,0)) {
      helperp += `${parseInt(`${gestureF}`) * 1}`;
      break;
   }
      pointl /= Math.max(1, parseInt(`${pointl}`) ^ 3);
       let gmailQ: Map<any, any> = new Map([[String.fromCharCode(111,99,115,112,105,100,95,112,95,51,56,0),false ], [String.fromCharCode(121,95,56,54,95,109,109,99,111,115,0),true ], [String.fromCharCode(116,114,105,103,103,101,114,95,102,95,51,56,0),false ]]);
       let giftL = String.fromCharCode(100,101,115,99,112,114,105,112,116,105,111,110,95,104,95,55,53,0);
       let predictionarrowv = String.fromCharCode(106,95,53,56,95,118,97,108,0);
         gmailQ = new Map([[`${gmailQ.size}`, 3]]);
         giftL += `${giftL.length}`;
         gmailQ = new Map([[predictionarrowv, predictionarrowv.length << (Math.min(Math.abs(2), 1))]]);
         giftL = "1";
      let acceptedG = 7874203 >= gmailQ.size;
      do {
         gmailQ.set(`${predictionarrowv}`, (predictionarrowv == String.fromCharCode(104,0) ? predictionarrowv.length : gmailQ.size));
         if (acceptedG) {
            break;
         }
      } while (acceptedG && (predictionarrowv.length > gmailQ.size));
      let gestureR = 9659398 >= predictionarrowv.length;
      do {
         predictionarrowv = `${1 * gmailQ.size}`;
         if (gestureR) {
            break;
         }
      } while (gestureR && (predictionarrowv.startsWith(`${gmailQ.size}`)));
      let castT = 6428594 >= giftL.length;
      do {
          let networkw = 1;
          let chinasameF = String.fromCharCode(114,95,49,55,95,114,108,118,108,99,0);
          let downloadZ = 5.0;
          let linkp = String.fromCharCode(97,95,55,51,95,97,110,97,110,100,97,110,0);
          let libfilev = true;
         giftL += "3";
         networkw <<= Math.min(Math.abs(parseInt(`${downloadZ}`) & linkp.length), 3);
         chinasameF += `${(String.fromCharCode(86,0) == linkp ? linkp.length : parseInt(`${downloadZ}`))}`;
         libfilev = String.fromCharCode(73,0) == chinasameF || networkw <= 93;
         if (castT) {
            break;
         }
      } while ((!giftL.includes(`${gmailQ.size}`)) && castT);
      if (predictionarrowv.length < 5) {
         giftL += "2";
      }
      for (let d = 0; d < 2; d++) {
         predictionarrowv += `${(String.fromCharCode(68,0) == giftL ? predictionarrowv.length : giftL.length)}`;
      }
      smallN = (parseInt(`${pointl}`) + awayiconN.size) == 81;
       let appsF = 4;
       let temperaturen = 1.0;
      while (temperaturen < appsF) {
         temperaturen /= Math.max(parseFloat(`${appsF}`), 4);
         break;
      }
       let zoomo = 4;
       let annery = 2;
      if (3 == (annery % (Math.max(8, appsF))) && 5 == (appsF % 3)) {
         appsF -= 1;
      }
       let neon8 = 5;
      while (5 > (appsF + annery)) {
         annery *= parseInt(`${temperaturen}`) | neon8;
         break;
      }
         zoomo <<= Math.min(1, Math.abs(1 ^ appsF));
      pointl -= awayiconN.size << (Math.min(Math.abs(2), 2));
   let embedC = icondefaultthumbnailk <= 6818130;
   do {
       let moviesn: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,97,108,108,95,98,95,50,57,0),890], [String.fromCharCode(107,95,50,55,95,101,108,105,109,105,110,97,116,105,111,110,0),906], [String.fromCharCode(99,117,114,114,101,110,116,108,121,95,103,95,55,50,0),434]]);
       let videovarz = 4.0;
       let penaltymatchicont: Map<any, any> = new Map([[String.fromCharCode(112,95,53,48,95,101,118,117,116,105,108,0),279], [String.fromCharCode(102,101,116,99,104,101,115,95,48,95,55,48,0),382]]);
       let libhermesS = String.fromCharCode(107,95,52,50,95,119,101,98,112,97,103,101,0);
      while (3 < (5 | penaltymatchicont.size) && (5 + penaltymatchicont.size) < 4) {
          let smallU = String.fromCharCode(118,95,51,55,95,108,117,109,105,110,97,110,99,101,0);
          let searcht = true;
         videovarz += 3;
         smallU = `${((searcht ? 1 : 2) << (Math.min(Math.abs(1), 2)))}`;
         searcht = !searcht;
         break;
      }
      while ((libhermesS.length - moviesn.size) == 3 || 1 == (3 - moviesn.size)) {
         moviesn.set(`${libhermesS}`, penaltymatchicont.size);
         break;
      }
      if ((penaltymatchicont.size ^ libhermesS.length) <= 5 || (5 ^ libhermesS.length) <= 4) {
         penaltymatchicont.set(`${videovarz}`, parseInt(`${videovarz}`) - 1);
      }
          let linek: Array<any> = [73, 843, 352];
         moviesn.set(`${videovarz}`, penaltymatchicont.size * parseInt(`${videovarz}`));
         linek.push(3 << (Math.min(1, linek.length)));
      while ((videovarz * 1.96) <= 2.53 || 1.96 <= (moviesn.size * videovarz)) {
         moviesn.set(libhermesS, penaltymatchicont.size);
         break;
      }
         videovarz *= penaltymatchicont.size ^ libhermesS.length;
       let bannerl: Array<any> = [338, 100, 172];
       let appleZ: Array<any> = [609, 375, 408];
      let handlere = 8274157 <= appleZ.length;
      do {
         appleZ = [bannerl.length];
         if (handlere) {
            break;
         }
      } while (handlere && ((5 * appleZ.length) > 3 || (appleZ.length - videovarz) > 3.3));
          let nativeexb = true;
          let blacklisti: Array<any> = [141, 403, 94];
         appleZ = [penaltymatchicont.size / (Math.max(7, moviesn.size))];
         nativeexb = ((blacklisti.length << (Math.min(3, Math.abs((nativeexb ? 11 : blacklisti.length))))) > 11);
      for (let q = 0; q < 1; q++) {
         bannerl.push(1);
      }
          let green_ = String.fromCharCode(102,105,110,100,95,114,95,49,52,0);
          let tooltipsa = 5.0;
          let long_7Q = String.fromCharCode(106,95,52,54,95,109,105,99,0);
         bannerl.push(moviesn.size);
         green_ = `${(long_7Q == String.fromCharCode(121,0) ? long_7Q.length : parseInt(`${tooltipsa}`))}`;
         tooltipsa /= Math.max(2, parseFloat(`${3 << (Math.min(4, Math.abs(parseInt(`${tooltipsa}`))))}`));
         bannerl = [(libhermesS == String.fromCharCode(82,0) ? penaltymatchicont.size : libhermesS.length)];
      icondefaultthumbnailk += (3 & (membership8 ? 2 : 5));
      if (embedC) {
         break;
      }
   } while ((5 >= (5 + icondefaultthumbnailk)) && embedC);
   if (membership8) {
      foregrounda.set(`${downarrowX}`, downarrowX.length ^ 2);
   }
      awayiconN = new Map([[helperp, helperp.length & parseInt(`${pointl}`)]]);
   while (!homeinactiveh.startsWith(`${basketballicon9}`)) {
      basketballicon9 -= homeinactiveh.length;
      break;
   }
   while (foregrounda.get(`${basketballicon9}`) == null) {
       let policy6: Map<any, any> = new Map([[String.fromCharCode(98,108,105,116,0),String.fromCharCode(112,114,111,100,117,99,101,95,121,95,57,49,0)], [String.fromCharCode(118,105,122,105,101,114,95,109,95,49,50,0),String.fromCharCode(114,95,52,49,95,108,111,103,105,99,0)], [String.fromCharCode(99,95,55,53,95,118,99,100,97,116,97,0),String.fromCharCode(98,95,57,48,95,108,111,103,115,0)]]);
       let window_qhr: Array<any> = [627, 210];
          let mbbidH = String.fromCharCode(97,95,55,52,95,109,97,114,107,115,0);
         window_qhr = [mbbidH.length];
          let libbuffer_ = 0.0;
          let schedulers: Array<any> = [567, 10, 83];
          let libswresample9 = false;
         policy6 = new Map([[`${window_qhr.length}`, parseInt(`${libbuffer_}`)]]);
         libbuffer_ += (parseFloat(`${(libswresample9 ? 3 : 1) % (Math.max(schedulers.length, 7))}`));
         schedulers.push((3 | (libswresample9 ? 4 : 5)));
       let iconarrowleftm = 5.0;
         iconarrowleftm += parseFloat(`${parseInt(`${iconarrowleftm}`) >> (Math.min(1, Math.abs(1)))}`);
       let eabafadfadddbafeddddeeefeaafV = String.fromCharCode(112,114,111,100,117,99,101,95,49,95,50,52,0);
       let libfollyK = String.fromCharCode(114,95,55,51,95,111,110,101,111,102,115,0);
         window_qhr.push(eabafadfadddbafeddddeeefeaafV.length >> (Math.min(Math.abs(3), 3)));
      foregrounda.set(country0, 3);
      break;
   }
      country0 = `${parseInt(`${gestureF}`)}`;
   while (3 <= country0.length) {
       let libapminsightbc: Map<any, any> = new Map([[String.fromCharCode(116,101,120,116,95,104,95,49,57,0),510], [String.fromCharCode(100,95,49,57,95,100,97,121,0),441], [String.fromCharCode(120,95,52,95,115,116,114,105,107,101,0),888]]);
      while ((libapminsightbc.size >> (Math.min(Math.abs(4), 5))) <= 5 && (libapminsightbc.size >> (Math.min(Math.abs(4), 3))) <= 2) {
         libapminsightbc = new Map([[`${libapminsightbc.size}`, libapminsightbc.size + libapminsightbc.size]]);
         break;
      }
      let libmapbufferjni4 = 6227246 >= libapminsightbc.size;
      do {
         libapminsightbc.set(`${libapminsightbc.size}`, libapminsightbc.size - libapminsightbc.size);
         if (libmapbufferjni4) {
            break;
         }
      } while (libmapbufferjni4 && ((3 >> (Math.min(1, Math.abs(libapminsightbc.size)))) == 1 || (libapminsightbc.size >> (Math.min(Math.abs(libapminsightbc.size), 5))) == 3));
      if (libapminsightbc.get(`${libapminsightbc.size}`) == null) {
          let subsK: Map<any, any> = new Map([[String.fromCharCode(112,95,56,56,95,102,105,101,108,100,0),127], [String.fromCharCode(118,95,50,50,95,99,111,110,110,101,99,116,105,118,105,116,121,0),269]]);
         libapminsightbc = new Map([[`${subsK.size}`, subsK.size % 3]]);
      }
      country0 += `${(1 >> (Math.min(4, Math.abs((smallN ? 4 : 5)))))}`;
      break;
   }
      downarrowX += "3";
   if (!smallN) {
      pointl += (String.fromCharCode(72,0) == country0 ? country0.length : (membership8 ? 1 : 3));
   }
      pointl -= (country0 == String.fromCharCode(50,0) ? awayiconN.size : country0.length);
      homeinactiveh = `${parseInt(`${pointl}`)}`;
      foregrounda.set(`${pointl}`, ((smallN ? 1 : 5) >> (Math.min(Math.abs(parseInt(`${pointl}`)), 3))));
      basketballicon9 += ((membership8 ? 5 : 4) + country0.length);
   if (3 == awayiconN.size) {
      gestureF += parseInt(`${basketballicon9}`) % 1;
   }
   if (icondefaultthumbnailk == 4) {
      icondefaultthumbnailk += 3;
   }
   if (5 > foregrounda.size) {
       let singaporeO = String.fromCharCode(97,116,116,97,99,104,101,100,95,118,95,54,49,0);
       let libfbjnia = 1.0;
       let showY = false;
         showY = ((singaporeO.length + (!showY ? singaporeO.length : 17)) >= 17);
          let sliderk = String.fromCharCode(120,95,49,54,95,101,110,97,98,108,101,0);
          let frame_iuL = String.fromCharCode(120,105,110,103,95,118,95,53,54,0);
         libfbjnia += parseFloat(`${parseInt(`${libfbjnia}`) % 2}`);
         sliderk += `${frame_iuL.length}`;
         frame_iuL += `${1 + frame_iuL.length}`;
      let turndownG = showY ? !showY : showY;
      do {
          let expiredF = 4;
          let views8: Map<any, any> = new Map([[String.fromCharCode(97,116,99,104,101,114,95,103,95,56,51,0),String.fromCharCode(115,95,49,55,95,112,117,98,0)], [String.fromCharCode(98,114,105,100,103,105,110,103,95,115,95,52,49,0),String.fromCharCode(106,95,53,57,95,98,97,99,107,98,114,111,117,110,100,0)], [String.fromCharCode(119,95,55,0),String.fromCharCode(99,121,112,114,101,115,115,95,51,95,56,49,0)]]);
          let const_q4F: Array<any> = [223, 397];
         showY = 81 <= views8.size && expiredF <= 81;
         expiredF ^= const_q4F.length;
         views8.set(`${const_q4F.length}`, const_q4F.length);
         if (turndownG) {
            break;
         }
      } while ((showY) && turndownG);
         showY = libfbjnia > 77.33 && showY;
      while (singaporeO.endsWith(`${showY}`)) {
          let greenz = String.fromCharCode(102,119,104,116,120,95,122,95,56,54,0);
         singaporeO += `${(String.fromCharCode(80,0) == singaporeO ? (showY ? 3 : 1) : singaporeO.length)}`;
         greenz = `${3 << (Math.min(5, greenz.length))}`;
         break;
      }
          let gpayj: Array<any> = [String.fromCharCode(112,114,105,110,116,118,97,108,95,106,95,56,52,0), String.fromCharCode(98,111,114,100,101,114,108,101,115,115,95,100,95,50,57,0), String.fromCharCode(115,95,57,95,104,100,97,116,97,0)];
          let dependencyh: Map<any, any> = new Map([[String.fromCharCode(104,95,54,53,95,103,114,111,117,112,105,110,103,0),false ], [String.fromCharCode(100,101,116,101,114,109,105,110,105,115,116,105,99,95,108,95,52,56,0),true ]]);
         libfbjnia *= (parseFloat(`${String.fromCharCode(79,0) == singaporeO ? parseInt(`${libfbjnia}`) : singaporeO.length}`));
         gpayj = [dependencyh.size ^ gpayj.length];
         dependencyh = new Map([[`${dependencyh.size}`, 3]]);
      let feedbackk = libfbjnia <= 7493943.0;
      do {
         libfbjnia += parseFloat(`${1 | parseInt(`${libfbjnia}`)}`);
         if (feedbackk) {
            break;
         }
      } while ((3.51 >= libfbjnia) && feedbackk);
         singaporeO += `${singaporeO.length}`;
      let codegenL = showY ? !showY : showY;
      do {
          let leakcheckerc: Array<any> = [534, 990];
          let imagesl = 5.0;
         showY = imagesl <= 92.14;
         leakcheckerc = [1 * leakcheckerc.length];
         imagesl += parseFloat(`${2}`);
         if (codegenL) {
            break;
         }
      } while (codegenL && (2.0 <= (3.43 - libfbjnia)));
      foregrounda = new Map([[`${libfbjnia}`, parseInt(`${pointl}`)]]);
   }
   let tumbnaily = String.fromCharCode(101,55,106,0) == downarrowX;
   do {
      downarrowX += `${country0.length}`;
      if (tumbnaily) {
         break;
      }
   } while ((downarrowX.length > pointl) && tumbnaily);

            setShowSlider(false);
        }, 1000);
    }

    const handleScreenTouch = () => {
       let statisticsS = String.fromCharCode(112,114,111,112,111,114,116,105,111,110,115,95,120,95,52,50,0);
    let pointG = String.fromCharCode(119,97,116,99,104,100,111,103,95,104,95,55,51,0);
    let home3 = String.fromCharCode(109,97,120,100,98,115,95,110,95,49,52,0);
    let cornerkickB = String.fromCharCode(102,117,110,99,116,105,111,110,95,48,95,53,55,0);
    let u_positionm = String.fromCharCode(100,105,115,99,97,114,100,101,100,95,97,95,49,55,0);
    let uimanagerJ = false;
    let footballtrophy7: Array<any> = [425, 915];
    let u_player0: Map<any, any> = new Map([[String.fromCharCode(98,105,116,114,118,95,115,95,54,49,0),331], [String.fromCharCode(115,95,55,95,100,101,116,101,99,116,101,100,0),340]]);
    let defaultroombgT = 4;
    let shirt6 = true;
    let videojsD = String.fromCharCode(109,95,50,48,95,114,116,114,101,101,100,101,112,116,104,0);
       let mini6 = 5;
      let rootQ = mini6 >= 5259790;
      do {
         mini6 %= Math.max(1, 5);
         if (rootQ) {
            break;
         }
      } while ((3 <= (3 * mini6)) && rootQ);
         mini6 <<= Math.min(3, Math.abs(mini6 << (Math.min(Math.abs(3), 3))));
      let cedbadcebfbfbfbcfecbcY = mini6 <= 5454386;
      do {
         mini6 &= mini6;
         if (cedbadcebfbfbfbcfecbcY) {
            break;
         }
      } while ((mini6 == 5) && cedbadcebfbfbfbcfecbcY);
      u_player0.set(u_positionm, 2);
   let popuph = String.fromCharCode(54,54,118,104,55,0) == u_positionm;
   do {
      u_positionm += `${footballtrophy7.length}`;
      if (popuph) {
         break;
      }
   } while ((!u_positionm.includes(`${statisticsS.length}`)) && popuph);
      pointG = "2";
      u_positionm += `${pointG.length % (Math.max(3, 9))}`;
      uimanagerJ = u_positionm.length == 79 || uimanagerJ;
   if (2 <= videojsD.length) {
       let eactm = 2.0;
       let m_lockQ = 3.0;
       let whitevideoliveS: Array<any> = [55, 799];
          let downloaderE = true;
          let penaltyshootj = 0.0;
         eactm += (parseFloat(`${(downloaderE ? 4 : 5) << (Math.min(Math.abs(parseInt(`${eactm}`)), 3))}`));
         downloaderE = (penaltyshootj * penaltyshootj) > 46.34;
         eactm *= parseFloat(`${whitevideoliveS.length}`);
      while (2.16 < (m_lockQ + 5.41) || 2.19 < (5.41 + m_lockQ)) {
         m_lockQ -= whitevideoliveS.length + 1;
         break;
      }
          let popupV = 4;
          let nenda = String.fromCharCode(100,105,118,105,100,105,110,103,95,104,95,56,56,0);
          let entryj = String.fromCharCode(116,114,97,110,115,112,95,107,95,56,57,0);
         eactm *= parseFloat(`${2}`);
         popupV += entryj.length;
         nenda += `${nenda.length}`;
         entryj += `${nenda.length >> (Math.min(3, entryj.length))}`;
      while ((eactm - m_lockQ) <= 5.73 && (eactm - m_lockQ) <= 5.73) {
         m_lockQ += parseInt(`${m_lockQ}`) & parseInt(`${eactm}`);
         break;
      }
      for (let i = 0; i < 3; i++) {
          let basketballiconT: Array<any> = [284, 129, 610];
          let commentW = 4.0;
          let xvodt = true;
          let libflippery: Array<any> = [116, 648];
          let langj: Map<any, any> = new Map([[String.fromCharCode(112,97,114,97,109,101,116,101,114,115,95,112,95,49,57,0),815], [String.fromCharCode(106,95,57,51,95,109,97,115,115,0),9], [String.fromCharCode(117,95,56,52,95,100,99,98,122,108,0),256]]);
         m_lockQ /= Math.max(parseInt(`${m_lockQ}`), 1);
         basketballiconT.push(1 >> (Math.min(4, libflippery.length)));
         commentW += parseFloat(`${1}`);
         xvodt = libflippery.length == 7;
         langj = new Map([[`${langj.size}`, langj.size]]);
      }
      for (let m = 0; m < 1; m++) {
          let expanda = 2.0;
          let awayS = true;
          let shrinkB: Array<any> = [String.fromCharCode(114,108,109,95,97,95,53,52,0), String.fromCharCode(97,100,115,103,97,115,95,103,95,51,54,0), String.fromCharCode(102,100,111,112,101,110,95,57,95,52,51,0)];
          let static_w9: Map<any, any> = new Map([[String.fromCharCode(99,95,56,52,95,101,110,102,111,114,99,101,0),902], [String.fromCharCode(101,120,116,101,110,100,95,98,95,57,51,0),477]]);
         eactm /= Math.max(parseFloat(`${shrinkB.length}`), 4);
         expanda *= (parseFloat(`${static_w9.size | (awayS ? 4 : 1)}`));
         awayS = static_w9.size == 81 && !awayS;
         shrinkB.push(static_w9.size);
      }
         m_lockQ += 3 % (Math.max(10, parseInt(`${eactm}`)));
          let iconpipexpandk = String.fromCharCode(112,108,97,99,101,109,101,110,116,95,121,95,50,55,0);
         m_lockQ -= 2 - whitevideoliveS.length;
         iconpipexpandk += `${(iconpipexpandk == String.fromCharCode(75,0) ? iconpipexpandk.length : iconpipexpandk.length)}`;
      shirt6 = !shirt6;
   }
   for (let v = 0; v < 1; v++) {
       let unreadP: Map<any, any> = new Map([[String.fromCharCode(97,115,99,101,110,116,95,103,95,55,49,0),77], [String.fromCharCode(98,117,102,102,101,114,0),209], [String.fromCharCode(99,111,117,110,116,100,111,119,110,0),237]]);
       let suggestionY = false;
       let saveP: Map<any, any> = new Map([[String.fromCharCode(109,115,117,98,95,113,95,49,52,0),916], [String.fromCharCode(99,97,115,116,95,114,95,57,56,0),194]]);
       let footballfieldT = String.fromCharCode(105,95,53,57,95,97,97,99,116,97,98,0);
       let layoutM = 3;
      if ((saveP.size / (Math.max(footballfieldT.length, 2))) >= 3 || (saveP.size / 3) >= 4) {
         footballfieldT += `${(String.fromCharCode(51,0) == footballfieldT ? footballfieldT.length : saveP.size)}`;
      }
      if ((saveP.size >> (Math.min(Math.abs(3), 3))) < 4) {
          let basketballplayerplaceholderU = 4;
          let loadingU = 5.0;
         saveP = new Map([[footballfieldT, 1]]);
         basketballplayerplaceholderU *= 1 - basketballplayerplaceholderU;
         loadingU *= basketballplayerplaceholderU;
      }
      for (let k = 0; k < 2; k++) {
          let downR: Map<any, any> = new Map([[String.fromCharCode(109,105,114,114,111,114,95,53,95,54,55,0),true ], [String.fromCharCode(115,97,118,105,110,103,95,118,95,50,57,0),true ]]);
          let viewsw = 0;
          let suggestions = 3.0;
         suggestionY = footballfieldT.length > saveP.size;
         downR.set(`${suggestions}`, viewsw);
         viewsw += parseInt(`${suggestions}`);
      }
          let defaultroombgb = 0.0;
         suggestionY = defaultroombgb >= unreadP.size;
      for (let r = 0; r < 1; r++) {
          let assisto = String.fromCharCode(100,105,118,105,115,111,114,95,55,95,57,57,0);
          let foundj: Map<any, any> = new Map([[String.fromCharCode(109,98,115,101,103,109,101,110,116,97,116,105,111,110,95,110,95,54,53,0),869], [String.fromCharCode(105,95,57,51,95,115,97,118,101,0),201]]);
          let countdownR: Map<any, any> = new Map([[String.fromCharCode(113,95,51,55,95,102,97,97,110,105,100,99,116,0),String.fromCharCode(97,108,108,111,99,122,95,100,95,53,53,0)], [String.fromCharCode(103,95,53,95,102,117,108,102,105,108,108,101,100,0),String.fromCharCode(118,99,111,109,98,105,110,101,95,104,95,51,52,0)]]);
         unreadP = new Map([[`${layoutM}`, 3 ^ layoutM]]);
         assisto += "1";
         foundj = new Map([[`${countdownR.size}`, 3 >> (Math.min(5, Math.abs(countdownR.size)))]]);
      }
          let dragU = String.fromCharCode(119,95,50,48,95,99,97,118,101,97,116,0);
          let windx: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,110,111,100,101,95,97,95,54,56,0),530], [String.fromCharCode(99,111,108,105,110,101,97,114,95,115,95,57,53,0),143]]);
          let data0: Array<any> = [132, 33, 933];
         saveP.set(footballfieldT, (footballfieldT == String.fromCharCode(48,0) ? dragU.length : footballfieldT.length));
         dragU += `${windx.size}`;
         windx = new Map([[`${windx.size}`, 1]]);
         data0.push(windx.size ^ data0.length);
         footballfieldT = "1";
          let nativeexw: Array<any> = [189, 190, 850];
         footballfieldT = `${unreadP.size & 2}`;
         nativeexw.push(nativeexw.length);
      while ((footballfieldT.length >> (Math.min(Math.abs(2), 1))) <= 3) {
         footballfieldT = `${(unreadP.size - (suggestionY ? 2 : 3))}`;
         break;
      }
       let time_nq = String.fromCharCode(115,95,50,95,97,110,97,110,100,97,110,0);
       let bangc = String.fromCharCode(105,95,54,56,95,110,111,110,98,0);
      for (let t = 0; t < 2; t++) {
         saveP.set(bangc, 2 | layoutM);
      }
      let sharewhiteZ = suggestionY ? !suggestionY : suggestionY;
      do {
         suggestionY = saveP.size < 67 || !suggestionY;
         if (sharewhiteZ) {
            break;
         }
      } while ((!suggestionY) && sharewhiteZ);
          let tempnodatagifd = 4.0;
         time_nq = `${((suggestionY ? 4 : 3) % (Math.max(3, 2)))}`;
         tempnodatagifd /= Math.max(parseFloat(`${parseInt(`${tempnodatagifd}`)}`), 3);
         layoutM |= time_nq.length;
         saveP = new Map([[`${saveP.size}`, time_nq.length & saveP.size]]);
      statisticsS += `${(String.fromCharCode(106,0) == statisticsS ? (shirt6 ? 5 : 1) : statisticsS.length)}`;
   }
   while (u_positionm.length > 2 || shirt6) {
      u_positionm += `${u_positionm.length >> (Math.min(Math.abs(1), 1))}`;
      break;
   }
   let filterb = home3 == String.fromCharCode(110,52,99,115,115,48,0);
   do {
      home3 = `${pointG.length}`;
      if (filterb) {
         break;
      }
   } while (((footballtrophy7.length + home3.length) <= 3 && (3 + footballtrophy7.length) <= 2) && filterb);
   while (3 < defaultroombgT) {
      defaultroombgT %= Math.max(videojsD.length, 3);
      break;
   }
   for (let h = 0; h < 2; h++) {
      footballtrophy7 = [defaultroombgT * 1];
   }
      statisticsS = `${2 | statisticsS.length}`;
       let animationT = 5.0;
         animationT += parseInt(`${animationT}`);
      let downloadX = animationT >= 7476329.0;
      do {
          let libffmpegkit2 = String.fromCharCode(111,95,50,57,95,97,118,97,105,108,97,98,105,108,105,116,121,0);
          let arrowrightwithtailU = String.fromCharCode(103,95,50,56,95,97,102,102,101,99,116,101,100,0);
         animationT /= Math.max(2 - arrowrightwithtailU.length, 1);
         libffmpegkit2 = "3";
         arrowrightwithtailU = `${libffmpegkit2.length}`;
         if (downloadX) {
            break;
         }
      } while (downloadX && ((animationT - animationT) >= 3.25));
          let navigationX: Map<any, any> = new Map([[String.fromCharCode(109,111,100,101,99,111,115,116,115,95,111,95,54,55,0),false ], [String.fromCharCode(99,111,110,115,116,114,97,105,110,95,118,95,56,52,0),false ]]);
          let vipsportA = 2.0;
          let screen7: Array<any> = [887, 807, 135];
         animationT -= parseInt(`${vipsportA}`);
         navigationX = new Map([[`${navigationX.size}`, 3]]);
         vipsportA /= Math.max(4, navigationX.size & screen7.length);
         screen7 = [2 >> (Math.min(1, Math.abs(navigationX.size)))];
      u_positionm += `${videojsD.length}`;
   let accepted4 = defaultroombgT <= 5769603;
   do {
      defaultroombgT /= Math.max(((shirt6 ? 2 : 1)), 1);
      if (accepted4) {
         break;
      }
   } while ((defaultroombgT == statisticsS.length) && accepted4);
       let penaltymatchicon0 = String.fromCharCode(104,95,54,52,95,99,111,110,99,97,116,101,110,97,116,101,100,0);
       let bodan8 = String.fromCharCode(100,95,55,56,95,100,101,115,116,114,111,121,0);
          let templateprocessorN = 0.0;
          let largee = String.fromCharCode(97,115,116,114,111,110,111,109,105,99,97,108,95,107,95,51,54,0);
         penaltymatchicon0 += "1";
         templateprocessorN += parseFloat(`${parseInt(`${templateprocessorN}`) << (Math.min(Math.abs(2), 1))}`);
         largee = `${largee.length}`;
      let incidentz = bodan8 == String.fromCharCode(114,97,117,0);
      do {
         bodan8 += `${penaltymatchicon0.length % (Math.max(1, 2))}`;
         if (incidentz) {
            break;
         }
      } while ((penaltymatchicon0 == bodan8) && incidentz);
          let fastr = 4;
         bodan8 = "1";
         fastr <<= Math.min(5, Math.abs(fastr * fastr));
         bodan8 = `${penaltymatchicon0.length >> (Math.min(Math.abs(2), 2))}`;
         penaltymatchicon0 = `${penaltymatchicon0.length}`;
          let slider8: Array<any> = [315, 121];
          let pushv: Map<any, any> = new Map([[String.fromCharCode(115,99,97,110,110,101,100,95,115,95,52,53,0),971], [String.fromCharCode(104,95,52,52,95,120,114,117,110,0),848]]);
          let kuaishouA = true;
         penaltymatchicon0 += "3";
         slider8 = [slider8.length << (Math.min(3, Math.abs(pushv.size)))];
         pushv.set(`${slider8.length}`, slider8.length);
         kuaishouA = slider8.length > 77;
      shirt6 = footballtrophy7.length > 53;
      uimanagerJ = 33 == pointG.length;
      uimanagerJ = 84 < pointG.length;
   while (!pointG.endsWith(`${uimanagerJ}`)) {
      uimanagerJ = 16 > pointG.length && u_player0.size > 16;
      break;
   }
       let readT = String.fromCharCode(97,95,53,49,95,116,109,105,120,0);
       let backwardm = 0.0;
       let reportR = String.fromCharCode(119,95,51,57,95,98,110,98,105,110,0);
         readT = `${parseInt(`${backwardm}`)}`;
      if ((readT.length - parseInt(`${backwardm}`)) < 5 || (5 * readT.length) < 4) {
         readT = `${(reportR == String.fromCharCode(111,0) ? reportR.length : parseInt(`${backwardm}`))}`;
      }
      for (let q = 0; q < 2; q++) {
          let referrer1 = true;
          let iconshareN: Array<any> = [272, 467, 573];
          let control7 = String.fromCharCode(114,101,102,105,110,101,114,95,120,95,50,49,0);
          let shirtc = 2.0;
         reportR = `${iconshareN.length % (Math.max(2, 3))}`;
         referrer1 = !control7.includes(`${shirtc}`);
         iconshareN = [control7.length];
         shirtc -= parseFloat(`${parseInt(`${shirtc}`) >> (Math.min(Math.abs(2), 2))}`);
      }
       let iconarrowrights = false;
       let humidityF = false;
         backwardm *= (parseFloat(`${(iconarrowrights ? 1 : 3) >> (Math.min(3, Math.abs((humidityF ? 3 : 1))))}`));
         humidityF = (!humidityF ? iconarrowrights : humidityF);
      for (let m = 0; m < 2; m++) {
         iconarrowrights = !iconarrowrights && readT.length >= 17;
      }
          let selectiono: Array<any> = [String.fromCharCode(114,95,53,56,95,115,116,111,112,0), String.fromCharCode(102,95,56,52,95,115,116,97,103,105,110,103,0), String.fromCharCode(102,95,57,49,95,112,108,97,110,101,115,0)];
         backwardm += parseFloat(`${2 + readT.length}`);
         selectiono = [selectiono.length << (Math.min(Math.abs(1), 2))];
         humidityF = reportR.length == parseInt(`${backwardm}`);
      footballtrophy7 = [1];

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