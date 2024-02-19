import React, { useEffect, useState, useRef } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';
import VolumeGestureControl from './yys_defaultlogo';
import BrightnessGestureControl from './yys_backward_combined';
import BrightnessVolumeSlider from './yys_iconcurrentmatch';
import ProgressGestureControl from './yys_black';

const GestureControls = {
    VOLUME: 'Volume',
    BRIGHTNESS: 'Brightness',
};

const Icons = {
    [GestureControls.BRIGHTNESS]: {
        noValue: "anythinkModeIcontransferclub",
        hasValue: "iconbellIconnewchatMatchinactive"
    },
    [GestureControls.VOLUME]: {
        noValue: "networkLogouserPhilippines",
        hasValue: "binddatasRenew"
    },
}

type yysIconarrowrightorangeStation = {
    onScreenTouched: () => any,
    disableFullScreenGesture: boolean,
    onSkip?: any
    vodType?: string
}

export default ({ onScreenTouched, disableFullScreenGesture, onSkip, vodType = 'vod' }: yysIconarrowrightorangeStation) => {
    const [icon, setIcon] = useState({
        noValue: "networkLogouserPhilippines",
        hasValue: "binddatasRenew"
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
       let privacyB = true;
    let middlebrightnessx = String.fromCharCode(100,97,116,97,98,108,111,99,107,95,106,95,51,56,0);
    let halfN: Array<any> = [825, 244];
    let iconwatchnowJ = 3;
    let entryG = String.fromCharCode(101,110,99,114,121,112,116,95,48,95,52,56,0);
    let libmapbufferjnie = String.fromCharCode(120,95,54,56,95,112,114,101,112,114,111,99,101,115,115,0);
    let privatechatbgz = 1;
    let iconbella = 2;
    let gmailn = false;
    let bang0 = 4.0;
   if (2 > (3 >> (Math.min(5, middlebrightnessx.length)))) {
       let type_9O = String.fromCharCode(116,114,97,110,115,113,117,97,110,116,95,56,95,50,51,0);
      while (type_9O.length < type_9O.length) {
          let controlj = false;
          let libreactnativejnir = String.fromCharCode(115,116,114,114,101,115,101,116,95,104,95,51,0);
         type_9O += `${((controlj ? 5 : 1) + 3)}`;
         controlj = libreactnativejnir.length <= 90;
         libreactnativejnir = `${libreactnativejnir.length % (Math.max(9, libreactnativejnir.length))}`;
         break;
      }
      for (let a = 0; a < 1; a++) {
          let redirecty = 0;
         type_9O += `${redirecty % (Math.max(2, 6))}`;
      }
          let greenarrowupo = String.fromCharCode(112,95,53,55,95,115,116,101,97,108,0);
         type_9O += "2";
         greenarrowupo = "3";
      privatechatbgz &= 1;
   }
   while (middlebrightnessx.length > 5 && !privacyB) {
       let libswresample8: Array<any> = [810, 545];
       let moonP = String.fromCharCode(114,97,110,100,111,109,95,119,95,57,51,0);
      let stationsC = libswresample8.length >= 9554980;
      do {
         libswresample8.push(3 | libswresample8.length);
         if (stationsC) {
            break;
         }
      } while ((moonP.length <= 3) && stationsC);
      let toponh = 5576898 <= libswresample8.length;
      do {
         libswresample8.push(libswresample8.length * 1);
         if (toponh) {
            break;
         }
      } while (toponh && ((libswresample8.length >> (Math.min(moonP.length, 3))) <= 2 && (2 >> (Math.min(2, moonP.length))) <= 4));
      let nend6 = 6435952 <= libswresample8.length;
      do {
         libswresample8.push((moonP == String.fromCharCode(56,0) ? libswresample8.length : moonP.length));
         if (nend6) {
            break;
         }
      } while (nend6 && (libswresample8.length < 3));
         moonP = `${libswresample8.length + moonP.length}`;
       let iconadslinkm = 4.0;
         moonP = `${moonP.length >> (Math.min(1, libswresample8.length))}`;
      privacyB = 28 < middlebrightnessx.length || 28 < libswresample8.length;
      break;
   }
      iconwatchnowJ &= halfN.length;
   for (let t = 0; t < 3; t++) {
      middlebrightnessx += `${halfN.length ^ privatechatbgz}`;
   }
       let viewse = 2.0;
       let halffieldimage9 = false;
       let strw = false;
         strw = 74.55 <= viewse;
      if ((2.44 / (Math.max(8, viewse))) < 3.7) {
         halffieldimage9 = (halffieldimage9 ? strw : !halffieldimage9);
      }
      iconbella -= ((privacyB ? 5 : 5) ^ 1);
      halfN.push(3 >> (Math.min(2, entryG.length)));
   let liveendmodallogoO = 5206117 >= privatechatbgz;
   do {
      privatechatbgz >>= Math.min(Math.abs(iconbella % 3), 4);
      if (liveendmodallogoO) {
         break;
      }
   } while ((2 == privatechatbgz) && liveendmodallogoO);
      iconwatchnowJ ^= iconbella;
      libmapbufferjnie += `${halfN.length - iconwatchnowJ}`;
   for (let e = 0; e < 1; e++) {
      iconwatchnowJ &= iconbella;
   }
   for (let t = 0; t < 2; t++) {
      libmapbufferjnie = "3";
   }
   if (1 < iconwatchnowJ) {
      libmapbufferjnie = "2";
   }
       let iconcloseZ = String.fromCharCode(110,95,51,51,95,118,100,101,99,0);
       let flag4 = 5.0;
          let downloadd = String.fromCharCode(118,95,56,54,95,116,101,115,116,114,101,115,117,108,116,0);
          let subtextp: Map<any, any> = new Map([[String.fromCharCode(113,95,56,52,95,116,97,108,107,0),false ], [String.fromCharCode(121,95,51,53,95,99,115,99,104,101,109,101,0),true ]]);
         flag4 -= parseFloat(`${2 ^ subtextp.size}`);
         downloadd = `${downloadd.length}`;
         subtextp = new Map([[downloadd, 2]]);
         flag4 /= Math.max(2, parseFloat(`${parseInt(`${flag4}`)}`));
      let utilsV = 6537951.0 >= flag4;
      do {
         flag4 *= parseFloat(`${parseInt(`${flag4}`) ^ 1}`);
         if (utilsV) {
            break;
         }
      } while ((iconcloseZ.startsWith(`${flag4}`)) && utilsV);
       let dplus_: Map<any, any> = new Map([[String.fromCharCode(117,110,115,99,97,108,101,100,99,121,99,108,101,99,108,111,99,107,95,116,95,50,57,0),true ], [String.fromCharCode(109,97,114,107,100,111,119,110,95,117,95,52,55,0),true ]]);
       let modulesF: Map<any, any> = new Map([[String.fromCharCode(108,95,55,55,95,97,108,114,101,97,100,121,0),666], [String.fromCharCode(100,95,55,49,95,98,101,108,111,110,103,115,0),480], [String.fromCharCode(101,95,55,55,95,101,120,116,0),573]]);
         modulesF = new Map([[`${modulesF.size}`, modulesF.size + parseInt(`${flag4}`)]]);
      while ((iconcloseZ.length << (Math.min(4, Math.abs(modulesF.size)))) == 1) {
         iconcloseZ += `${iconcloseZ.length >> (Math.min(3, Math.abs(dplus_.size)))}`;
         break;
      }
      privacyB = (middlebrightnessx.length * iconbella) == 26;
       let classesA = String.fromCharCode(115,111,117,114,99,101,105,100,95,119,95,52,51,0);
         classesA += `${classesA.length | 1}`;
      while (2 > classesA.length) {
         classesA += `${(classesA == String.fromCharCode(68,0) ? classesA.length : classesA.length)}`;
         break;
      }
         classesA += "3";
      entryG += `${(entryG == String.fromCharCode(120,0) ? libmapbufferjnie.length : entryG.length)}`;
      middlebrightnessx += "1";
      iconwatchnowJ /= Math.max(5, 1);

            setShowSlider(false);
        }, 1000);
    }

    const handleScreenTouch = () => {
       let iconwechatG = String.fromCharCode(111,95,52,56,95,103,101,116,112,97,100,100,114,115,0);
    let suggestionL: Array<any> = [677, 215];
    let countdownF = String.fromCharCode(116,95,56,57,95,115,121,115,116,101,109,0);
    let sortw = String.fromCharCode(115,100,107,95,52,95,50,52,0);
    let eventS: Array<any> = [658, 521, 420];
    let iconpipshrinkz: Array<any> = [461, 770];
    let l_managerE = 5.0;
    let footballfieldS = String.fromCharCode(105,110,97,99,116,105,118,101,95,122,95,51,49,0);
    let inouttargetredD = true;
    let floatingE = String.fromCharCode(119,95,57,51,95,115,116,117,102,102,110,100,0);
    let whitez: Map<any, any> = new Map([[String.fromCharCode(97,118,97,116,97,114,115,95,50,95,54,53,0),String.fromCharCode(112,114,111,98,115,95,49,95,51,53,0)], [String.fromCharCode(109,111,117,115,95,117,95,49,55,0),String.fromCharCode(98,95,50,53,95,99,121,97,110,0)]]);
    let orangedownarrowN = String.fromCharCode(112,95,54,49,95,109,117,108,116,105,99,97,115,116,101,100,0);
    let mapbufferQ = 3;
   if (2 >= (whitez.size * sortw.length)) {
      sortw += `${iconwechatG.length}`;
   }
   for (let u = 0; u < 1; u++) {
      inouttargetredD = (whitez.size ^ eventS.length) >= 86;
   }
      whitez = new Map([[`${l_managerE}`, parseInt(`${l_managerE}`) ^ iconwechatG.length]]);
   while (2 < (floatingE.length % 5) || 5 < (eventS.length % (Math.max(floatingE.length, 5)))) {
       let iconsharefriends0 = String.fromCharCode(102,95,49,55,95,115,99,114,97,116,99,104,0);
       let whistleorangeM = 4;
       let owngoald = 4;
       let predictionbuttone = String.fromCharCode(108,111,99,107,101,100,95,52,95,52,57,0);
       let sliderP: Array<any> = [423, 256, 793];
      for (let q = 0; q < 1; q++) {
         predictionbuttone = `${sliderP.length % (Math.max(predictionbuttone.length, 6))}`;
      }
         owngoald |= iconsharefriends0.length | sliderP.length;
         sliderP.push(predictionbuttone.length);
      let catagoryl = String.fromCharCode(57,112,111,107,57,104,53,0) == predictionbuttone;
      do {
          let countdownP = 1.0;
          let refreshborderlesss = 4.0;
         predictionbuttone += `${whistleorangeM}`;
         countdownP += parseFloat(`${2 / (Math.max(1, parseInt(`${countdownP}`)))}`);
         refreshborderlesss += parseFloat(`${parseInt(`${refreshborderlesss}`) | parseInt(`${countdownP}`)}`);
         if (catagoryl) {
            break;
         }
      } while ((4 >= (owngoald ^ predictionbuttone.length) || (predictionbuttone.length ^ owngoald) >= 4) && catagoryl);
         owngoald *= sliderP.length;
          let adultw = String.fromCharCode(115,112,101,101,120,95,56,95,53,55,0);
          let gesturep: Map<any, any> = new Map([[String.fromCharCode(109,106,112,101,103,97,95,105,95,50,49,0),false ], [String.fromCharCode(106,95,57,51,95,115,117,112,101,114,110,111,100,101,115,0),true ], [String.fromCharCode(117,112,100,97,116,101,95,108,95,52,55,0),true ]]);
          let showmoren = 2;
         predictionbuttone = `${adultw.length + iconsharefriends0.length}`;
         adultw = `${showmoren}`;
         gesturep = new Map([[`${gesturep.size}`, 1 & gesturep.size]]);
         showmoren >>= Math.min(Math.abs(2), 4);
          let privacy3 = 1.0;
          let bellreminderD: Array<any> = [981, 960];
          let scorex = String.fromCharCode(99,108,99,112,95,118,95,51,56,0);
         predictionbuttone = `${parseInt(`${privacy3}`)}`;
         privacy3 *= parseFloat(`${bellreminderD.length * scorex.length}`);
         bellreminderD = [bellreminderD.length ^ 2];
         scorex += `${scorex.length}`;
      while (!predictionbuttone.includes(`${owngoald}`)) {
         predictionbuttone = `${owngoald >> (Math.min(Math.abs(3), 2))}`;
         break;
      }
      for (let v = 0; v < 3; v++) {
          let vietnamp = 1;
          let sendw: Map<any, any> = new Map([[String.fromCharCode(115,101,99,117,114,105,116,121,95,114,95,53,49,0),String.fromCharCode(115,122,97,98,111,115,95,122,95,54,55,0)], [String.fromCharCode(101,120,112,111,115,117,114,101,95,121,95,57,49,0),String.fromCharCode(108,95,57,55,95,105,118,97,114,115,0)]]);
         iconsharefriends0 = `${sendw.size}`;
         vietnamp >>= Math.min(Math.abs(vietnamp), 5);
         sendw = new Map([[`${vietnamp}`, vietnamp >> (Math.min(Math.abs(2), 2))]]);
      }
      if (whistleorangeM == 3) {
          let thumbnailm = String.fromCharCode(109,115,103,95,107,95,53,55,0);
          let themex = true;
          let notificationgrayt: Array<any> = [294, 955, 459];
          let auto_yzm = 5.0;
          let with_gk3: Array<any> = [161, 761];
         whistleorangeM += 3 / (Math.max(1, sliderP.length));
         thumbnailm += "1";
         themex = (thumbnailm.length * notificationgrayt.length) > 64;
         notificationgrayt.push(with_gk3.length % 1);
         auto_yzm -= notificationgrayt.length % 1;
         with_gk3.push(3 ^ notificationgrayt.length);
      }
          let libreactperfloggerjnil = String.fromCharCode(106,115,105,109,100,99,102,103,95,97,95,57,49,0);
         sliderP.push(1 / (Math.max(4, whistleorangeM)));
         libreactperfloggerjnil += `${libreactperfloggerjnil.length}`;
      if (iconsharefriends0.length < 3) {
          let bellreminderz: Array<any> = [532, 818];
         iconsharefriends0 = `${sliderP.length}`;
         bellreminderz.push(bellreminderz.length - bellreminderz.length);
      }
      if ((whistleorangeM % (Math.max(5, 7))) >= 3 && 2 >= (iconsharefriends0.length % (Math.max(5, 3)))) {
         iconsharefriends0 += `${whistleorangeM - 2}`;
      }
      while (1 > (3 * sliderP.length) || (3 * sliderP.length) > 5) {
         owngoald ^= predictionbuttone.length;
         break;
      }
          let playlistz = 1.0;
         predictionbuttone += `${whistleorangeM}`;
         playlistz *= parseInt(`${playlistz}`);
      eventS = [2 & whitez.size];
      break;
   }
      footballfieldS = `${parseInt(`${l_managerE}`) / 3}`;
      iconwechatG = `${1 + sortw.length}`;
   while (floatingE.length == 2) {
      floatingE = `${whitez.size - floatingE.length}`;
      break;
   }
      iconpipshrinkz = [countdownF.length / 2];
   if (!footballfieldS.startsWith(`${inouttargetredD}`)) {
      footballfieldS += `${3 ^ floatingE.length}`;
   }
       let orangez = String.fromCharCode(98,97,99,107,103,114,111,117,110,100,95,114,95,57,48,0);
       let downloader7 = 0.0;
         downloader7 -= orangez.length & parseInt(`${downloader7}`);
      if (2.30 < (downloader7 / 5.65)) {
         orangez += `${orangez.length + parseInt(`${downloader7}`)}`;
      }
         orangez += `${parseInt(`${downloader7}`) & 3}`;
      for (let o = 0; o < 3; o++) {
          let sigmobK = String.fromCharCode(116,101,110,99,95,98,95,54,52,0);
          let zoomp: Map<any, any> = new Map([[String.fromCharCode(103,95,53,54,95,122,101,114,111,118,0),670], [String.fromCharCode(99,95,49,95,98,101,103,105,110,110,105,110,103,0),477]]);
         orangez = "3";
         sigmobK = `${zoomp.size << (Math.min(Math.abs(1), 4))}`;
         zoomp.set(sigmobK, 1 * sigmobK.length);
      }
      let iconeyeC = downloader7 >= 8550671.0;
      do {
         downloader7 *= parseInt(`${downloader7}`) - 2;
         if (iconeyeC) {
            break;
         }
      } while (iconeyeC && (3.12 >= (2.43 + downloader7) || 5 >= (parseInt(`${downloader7}`) + orangez.length)));
         orangez += `${parseInt(`${downloader7}`) - orangez.length}`;
      eventS.push(3 - parseInt(`${l_managerE}`));
   for (let s = 0; s < 3; s++) {
      iconwechatG = `${suggestionL.length}`;
   }
   for (let f = 0; f < 2; f++) {
       let verticalz = String.fromCharCode(102,111,108,100,101,114,115,95,51,95,54,50,0);
       let inouttargetredI = String.fromCharCode(105,109,112,108,105,99,105,116,101,108,121,95,50,95,56,0);
       let temperaturev: Map<any, any> = new Map([[String.fromCharCode(120,109,97,115,109,95,111,95,49,57,0),false ], [String.fromCharCode(98,95,54,50,95,115,108,105,112,0),false ]]);
       let predictiondefaultL: Map<any, any> = new Map([[String.fromCharCode(100,95,49,53,95,101,110,118,101,108,111,112,101,100,0),String.fromCharCode(110,97,118,105,103,97,116,101,100,95,120,95,49,49,0)], [String.fromCharCode(99,108,101,97,110,101,100,95,109,95,50,51,0),String.fromCharCode(118,95,50,51,95,115,110,112,114,105,110,116,102,0)], [String.fromCharCode(103,95,50,56,95,101,120,112,105,114,101,0),String.fromCharCode(112,111,108,105,99,121,95,105,95,57,57,0)]]);
       let adultt: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,105,99,115,95,53,95,49,51,0),729], [String.fromCharCode(121,95,50,48,95,115,121,110,116,104,101,115,105,115,0),143], [String.fromCharCode(112,95,52,49,95,115,113,108,105,116,101,0),524]]);
         temperaturev = new Map([[`${temperaturev.size}`, verticalz.length]]);
          let iconclosewhitebgR = String.fromCharCode(120,95,52,57,95,117,105,110,116,0);
         temperaturev = new Map([[`${adultt.size}`, predictiondefaultL.size]]);
         iconclosewhitebgR += `${(iconclosewhitebgR == String.fromCharCode(72,0) ? iconclosewhitebgR.length : iconclosewhitebgR.length)}`;
         inouttargetredI = `${(inouttargetredI == String.fromCharCode(84,0) ? inouttargetredI.length : predictiondefaultL.size)}`;
         temperaturev = new Map([[`${predictiondefaultL.size}`, predictiondefaultL.size]]);
      if (!verticalz.includes(`${temperaturev.size}`)) {
          let time_7j = String.fromCharCode(122,95,49,48,48,95,99,111,114,114,101,108,97,116,101,0);
          let connectionP = String.fromCharCode(112,97,103,105,110,97,116,105,111,110,95,98,95,54,50,0);
          let yellowanimationlive1: Map<any, any> = new Map([[String.fromCharCode(117,95,57,54,95,103,97,105,110,99,0),919], [String.fromCharCode(99,111,109,98,105,95,108,95,56,50,0),986], [String.fromCharCode(103,95,50,56,95,97,108,109,111,115,116,0),620]]);
          let foregroundg = String.fromCharCode(108,105,98,121,117,118,95,105,95,55,56,0);
          let arrowdownE = true;
         temperaturev.set(inouttargetredI, (String.fromCharCode(75,0) == inouttargetredI ? inouttargetredI.length : foregroundg.length));
         time_7j += `${(1 + (arrowdownE ? 4 : 4))}`;
         connectionP = `${((arrowdownE ? 1 : 3))}`;
         yellowanimationlive1 = new Map([[time_7j, connectionP.length >> (Math.min(Math.abs(2), 2))]]);
         foregroundg += "1";
      }
         predictiondefaultL.set(`${predictiondefaultL.size}`, temperaturev.size + 2);
      for (let x = 0; x < 1; x++) {
         verticalz += `${inouttargetredI.length}`;
      }
         adultt = new Map([[`${predictiondefaultL.size}`, adultt.size / (Math.max(1, predictiondefaultL.size))]]);
         verticalz = `${inouttargetredI.length << (Math.min(verticalz.length, 2))}`;
      while ((2 * verticalz.length) >= 4 || 2 >= (2 * verticalz.length)) {
          let matchx = 0;
          let googley = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,95,55,95,55,48,0);
          let sharedu: Array<any> = [493, 305, 259];
          let videobufferloading9: Map<any, any> = new Map([[String.fromCharCode(101,95,55,52,95,101,112,111,108,108,0),true ], [String.fromCharCode(106,95,49,48,48,95,115,117,98,115,116,114,105,110,103,0),true ]]);
          let auto_0vV: Map<any, any> = new Map([[String.fromCharCode(107,95,49,57,95,102,105,110,97,108,108,121,0),String.fromCharCode(118,95,55,55,95,116,101,115,116,110,101,116,115,0)], [String.fromCharCode(106,95,55,53,95,115,105,110,0),String.fromCharCode(111,118,101,114,108,97,121,95,106,95,50,56,0)], [String.fromCharCode(120,99,116,101,115,116,95,51,95,53,56,0),String.fromCharCode(100,116,108,115,95,121,95,51,50,0)]]);
         verticalz = `${googley.length % (Math.max(3, 4))}`;
         matchx ^= sharedu.length;
         googley += `${2 << (Math.min(4, Math.abs(matchx)))}`;
         sharedu.push(videobufferloading9.size);
         videobufferloading9 = new Map([[`${auto_0vV.size}`, auto_0vV.size]]);
         break;
      }
      let carousely = verticalz == String.fromCharCode(98,106,110,122,97,120,52,115,50,120,0);
      do {
          let iconclosewhitebga = String.fromCharCode(104,95,53,95,116,104,114,111,116,116,108,101,100,0);
          let graphicsU = 4.0;
          let forwardj = 0.0;
          let libreactnativejnit = String.fromCharCode(115,117,112,101,114,120,115,97,105,95,100,95,50,57,0);
         verticalz = `${predictiondefaultL.size}`;
         iconclosewhitebga += `${3 % (Math.max(parseInt(`${forwardj}`), 1))}`;
         graphicsU /= Math.max(1, 3);
         forwardj *= 3 / (Math.max(5, libreactnativejnit.length));
         libreactnativejnit = `${iconclosewhitebga.length}`;
         if (carousely) {
            break;
         }
      } while (carousely && ((3 - adultt.size) <= 5 && 1 <= (verticalz.length - 3)));
      for (let t = 0; t < 2; t++) {
         predictiondefaultL.set(`${inouttargetredI}`, 1 + temperaturev.size);
      }
          let cornerp = 5;
          let submity = String.fromCharCode(120,95,57,57,95,117,110,99,111,110,102,105,114,109,101,100,0);
          let gradley = String.fromCharCode(98,97,110,110,101,100,95,110,95,56,57,0);
         predictiondefaultL = new Map([[inouttargetredI, inouttargetredI.length]]);
         cornerp &= submity.length << (Math.min(gradley.length, 2));
         submity += `${cornerp}`;
         gradley = `${submity.length}`;
      while (!verticalz.endsWith(`${predictiondefaultL.size}`)) {
         verticalz += `${predictiondefaultL.size}`;
         break;
      }
      while (verticalz.length >= 4) {
          let unreadY = 3.0;
          let selected6 = String.fromCharCode(97,99,116,105,118,97,116,105,111,110,95,98,95,55,48,0);
          let headerN: Map<any, any> = new Map([[String.fromCharCode(108,95,52,49,95,103,101,116,112,101,101,114,97,100,100,114,0),String.fromCharCode(110,95,54,49,95,102,105,110,97,108,105,115,101,114,0)], [String.fromCharCode(102,95,54,54,95,100,105,99,116,105,111,110,97,114,105,101,115,0),String.fromCharCode(107,95,55,55,95,112,114,111,104,105,98,105,116,0)], [String.fromCharCode(120,95,53,54,95,115,107,101,108,101,116,111,110,0),String.fromCharCode(97,108,97,109,111,102,105,114,101,95,111,95,55,53,0)]]);
          let transfer7 = 4.0;
          let refreshborderlessL = 0;
         verticalz = `${inouttargetredI.length}`;
         unreadY -= 1;
         selected6 = "3";
         headerN = new Map([[`${transfer7}`, parseInt(`${unreadY}`)]]);
         transfer7 -= parseInt(`${unreadY}`);
         refreshborderlessL -= headerN.size;
         break;
      }
      sortw = `${parseInt(`${l_managerE}`)}`;
   }
   if (!inouttargetredD) {
      inouttargetredD = countdownF.length < footballfieldS.length;
   }
      floatingE += `${(String.fromCharCode(66,0) == footballfieldS ? iconwechatG.length : footballfieldS.length)}`;
   let otherf = 9465339 <= iconpipshrinkz.length;
   do {
      iconpipshrinkz = [1 & eventS.length];
      if (otherf) {
         break;
      }
   } while (otherf && ((footballfieldS.length + 5) == 3));
   while (l_managerE <= 1.61) {
      inouttargetredD = suggestionL.length > 82;
      break;
   }
      iconpipshrinkz = [footballfieldS.length];
       let profileinactivea = true;
       let suggestionLK = 5;
      for (let q = 0; q < 1; q++) {
          let zhengpianE = 2;
          let nativeexd = 1.0;
          let baseK = 4.0;
         suggestionLK %= Math.max(1, zhengpianE);
         zhengpianE <<= Math.min(Math.abs(parseInt(`${nativeexd}`) / 1), 3);
         nativeexd -= parseFloat(`${3 | parseInt(`${nativeexd}`)}`);
         baseK /= Math.max(4, parseFloat(`${parseInt(`${baseK}`) / 2}`));
      }
          let tooltipst = 5;
         suggestionLK *= 2;
         tooltipst += tooltipst;
      for (let s = 0; s < 2; s++) {
         suggestionLK *= 2;
      }
       let friendst: Map<any, any> = new Map([[String.fromCharCode(102,95,56,52,95,112,114,111,120,105,101,115,0),String.fromCharCode(116,95,54,53,95,114,115,112,0)], [String.fromCharCode(114,101,99,117,114,115,105,118,101,108,121,95,122,95,55,54,0),String.fromCharCode(114,95,56,50,95,104,97,114,112,101,110,0)], [String.fromCharCode(99,111,118,97,108,101,110,116,95,55,95,57,55,0),String.fromCharCode(99,95,55,55,95,100,101,115,99,101,110,116,0)]]);
      for (let w = 0; w < 1; w++) {
         suggestionLK -= (suggestionLK % (Math.max(9, (profileinactivea ? 5 : 3))));
      }
         profileinactivea = friendst.size > 72;
      whitez.set(`${iconwechatG}`, iconwechatG.length + whitez.size);
      floatingE += `${3 ^ countdownF.length}`;
      sortw += `${eventS.length}`;
      footballfieldS = `${whitez.size | eventS.length}`;
      inouttargetredD = (footballfieldS.length % (Math.max(iconwechatG.length, 8))) < 71;
      iconpipshrinkz = [2 / (Math.max(6, suggestionL.length))];
   if (countdownF.endsWith(`${inouttargetredD}`)) {
       let blackA: Map<any, any> = new Map([[String.fromCharCode(119,95,52,53,95,115,101,110,115,111,114,0),25], [String.fromCharCode(109,95,49,55,95,102,111,114,99,105,110,103,0),623]]);
         blackA.set(`${blackA.size}`, blackA.size);
         blackA = new Map([[`${blackA.size}`, blackA.size / 2]]);
          let zoomO = String.fromCharCode(116,95,51,56,95,114,101,116,114,105,101,114,0);
         blackA = new Map([[`${blackA.size}`, blackA.size & zoomO.length]]);
      countdownF += "1";
   }
       let positionfieldZ = String.fromCharCode(105,110,118,101,114,115,105,111,110,95,57,95,50,56,0);
       let schedulerO = 3.0;
       let footballtrophy1 = 0.0;
       let ewardedZ = String.fromCharCode(99,95,55,57,95,112,110,103,0);
       let schedulerj = String.fromCharCode(101,115,115,105,111,110,95,55,95,50,48,0);
      while (2.9 < schedulerO) {
         footballtrophy1 -= parseFloat(`${parseInt(`${schedulerO}`) * positionfieldZ.length}`);
         break;
      }
          let sourceK = 2.0;
         schedulerj = `${(String.fromCharCode(85,0) == ewardedZ ? ewardedZ.length : parseInt(`${footballtrophy1}`))}`;
         sourceK += parseInt(`${sourceK}`);
      if (1.83 >= (5.38 + schedulerO)) {
         schedulerO -= parseFloat(`${parseInt(`${footballtrophy1}`) - ewardedZ.length}`);
      }
      if (ewardedZ.startsWith(`${schedulerj.length}`)) {
         ewardedZ += `${ewardedZ.length | parseInt(`${footballtrophy1}`)}`;
      }
         schedulerO *= parseFloat(`${parseInt(`${footballtrophy1}`) - 2}`);
      let resendZ = schedulerO <= 6631073.0;
      do {
         schedulerO += parseFloat(`${parseInt(`${schedulerO}`) * schedulerj.length}`);
         if (resendZ) {
            break;
         }
      } while (((footballtrophy1 + schedulerO) < 4.39) && resendZ);
          let iconstar3 = 0.0;
          let typesZ = 4.0;
         schedulerO *= parseFloat(`${3 | parseInt(`${footballtrophy1}`)}`);
         iconstar3 += parseFloat(`${2}`);
         typesZ -= parseInt(`${iconstar3}`) * parseInt(`${typesZ}`);
         ewardedZ = `${2 ^ positionfieldZ.length}`;
      suggestionL.push(1 << (Math.min(3, iconpipshrinkz.length)));
   if ((2 ^ eventS.length) < 1) {
       let chatbotphoto8 = String.fromCharCode(119,95,50,50,95,98,117,114,115,116,0);
       let bodan0 = 3.0;
       let animationU: Array<any> = [878, 35];
       let arrowdowns = String.fromCharCode(108,111,119,95,115,95,57,54,0);
      while (5.100 == bodan0) {
         bodan0 -= parseFloat(`${3 - arrowdowns.length}`);
         break;
      }
         bodan0 *= parseFloat(`${animationU.length ^ chatbotphoto8.length}`);
      let listO = bodan0 <= 6826727.0;
      do {
         bodan0 /= Math.max(5, parseFloat(`${chatbotphoto8.length % 1}`));
         if (listO) {
            break;
         }
      } while ((parseFloat(`${arrowdowns.length}`) > bodan0) && listO);
      while (4.66 <= (5.22 * bodan0) && (parseInt(`${bodan0}`) * 1) <= 5) {
          let phoneg = true;
         bodan0 -= (parseFloat(`${(phoneg ? 3 : 3) - 3}`));
         break;
      }
         bodan0 /= Math.max(parseFloat(`${arrowdowns.length % 2}`), 3);
      for (let a = 0; a < 1; a++) {
         bodan0 *= parseFloat(`${chatbotphoto8.length}`);
      }
         bodan0 -= parseFloat(`${animationU.length}`);
      if (1 <= animationU.length) {
          let customz = 3.0;
          let libcxxcomponentsj = 0;
          let mutedI = 2.0;
         animationU.push(parseInt(`${customz}`) ^ arrowdowns.length);
         customz -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${mutedI}`)), 2))}`);
         libcxxcomponentsj *= 2 ^ parseInt(`${mutedI}`);
      }
      sortw += "1";
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