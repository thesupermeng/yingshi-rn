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
       let formZ = String.fromCharCode(119,95,57,48,95,98,102,108,121,0);
    let switch_u0v: Map<any, any> = new Map([[String.fromCharCode(108,97,115,116,109,98,117,102,95,118,95,55,48,0),891], [String.fromCharCode(113,95,56,56,95,112,97,115,112,0),551]]);
    let rulesC: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,95,111,95,52,50,0),String.fromCharCode(104,119,114,97,110,100,95,119,95,52,48,0)], [String.fromCharCode(117,95,54,53,0),String.fromCharCode(118,111,105,112,95,119,95,54,48,0)]]);
    let minimize8 = true;
    let filed0 = 3;
    let m_titlev = 4;
    let area5 = String.fromCharCode(103,101,110,101,114,97,116,101,102,105,108,101,95,53,95,52,57,0);
    let brightnessP: Map<any, any> = new Map([[String.fromCharCode(97,118,97,116,97,114,115,95,51,95,49,48,48,0),521], [String.fromCharCode(103,95,54,53,95,97,99,107,110,111,119,108,101,100,103,109,101,110,116,0),910]]);
    let predictionK = 0.0;
    let megaphonep = true;
    let macauM = 2.0;
    let heartW = String.fromCharCode(119,95,57,52,95,99,97,110,99,101,108,108,97,98,108,101,0);
    let overh: Array<any> = [String.fromCharCode(119,97,118,101,102,111,114,109,97,116,101,120,95,116,95,57,50,0), String.fromCharCode(100,97,105,95,55,95,48,0), String.fromCharCode(108,95,54,52,95,109,101,115,97,103,101,115,0)];
    let favorite1 = String.fromCharCode(99,95,51,53,95,114,101,102,99,111,117,110,116,101,114,0);
    let sideM: Array<any> = [725, 227, 535];
   let tumbnailn = area5 == String.fromCharCode(117,98,109,56,55,117,0);
   do {
      area5 += `${2 | rulesC.size}`;
      if (tumbnailn) {
         break;
      }
   } while ((formZ.includes(`${area5.length}`)) && tumbnailn);
      minimize8 = filed0 >= 37 || predictionK >= 29.26;
       let default_97 = String.fromCharCode(114,95,55,56,95,105,115,101,109,112,116,121,0);
       let default_soo = false;
       let historyk = String.fromCharCode(99,97,114,100,104,111,108,100,101,114,95,114,95,54,57,0);
         default_97 += `${((default_soo ? 3 : 5))}`;
         default_soo = !default_soo;
         default_soo = (53 == ((!default_soo ? historyk.length : 53) % (Math.max(historyk.length, 9))));
      if (3 == default_97.length) {
         historyk = `${default_97.length}`;
      }
          let resendM = false;
          let floaterr = 2.0;
          let dragU = 2.0;
         default_soo = default_97.length >= 43;
         resendM = dragU > 16.11;
         floaterr -= (parseFloat(`${parseInt(`${floaterr}`) / (Math.max(9, (resendM ? 2 : 3)))}`));
         dragU -= (parseInt(`${dragU}`) | (resendM ? 5 : 5));
         default_soo = default_soo || historyk.length > 75;
         default_soo = !default_97.startsWith(`${default_soo}`);
         historyk += `${(String.fromCharCode(81,0) == historyk ? default_97.length : historyk.length)}`;
          let fastforwardt = String.fromCharCode(117,95,55,95,99,100,101,114,114,111,114,0);
          let modityX = String.fromCharCode(116,109,109,98,95,98,95,51,51,0);
         historyk = `${((default_soo ? 4 : 4))}`;
         fastforwardt = `${fastforwardt.length ^ modityX.length}`;
         modityX = `${(modityX == String.fromCharCode(53,0) ? fastforwardt.length : modityX.length)}`;
      brightnessP.set(area5, area5.length);
   while (1.13 <= macauM) {
       let logo3 = 0.0;
       let tumbnailp = 1;
         tumbnailp <<= Math.min(Math.abs(3), 3);
         tumbnailp %= Math.max(4, 1 >> (Math.min(Math.abs(parseInt(`${logo3}`)), 5)));
         tumbnailp /= Math.max(2 - tumbnailp, 2);
         logo3 -= 3 / (Math.max(7, tumbnailp));
      if ((4.42 / (Math.max(9, logo3))) <= 3.75 && (4 ^ tumbnailp) <= 2) {
         tumbnailp %= Math.max(2, 2);
      }
         logo3 *= tumbnailp;
      macauM -= heartW.length / (Math.max(2, formZ.length));
      break;
   }
   if (5.26 >= (macauM / 2.88)) {
      macauM *= 2 * parseInt(`${macauM}`);
   }
       let sansg = 1.0;
       let robotoJ = String.fromCharCode(118,112,100,97,116,97,95,115,95,49,53,0);
       let orangef = String.fromCharCode(110,100,101,102,95,111,95,57,57,0);
         robotoJ = `${parseInt(`${sansg}`)}`;
      for (let x = 0; x < 1; x++) {
         sansg -= (parseFloat(`${String.fromCharCode(65,0) == robotoJ ? orangef.length : robotoJ.length}`));
      }
      filed0 <<= Math.min(4, heartW.length);
      filed0 >>= Math.min(Math.abs(3), 3);
   while (Array.from(switch_u0v.values()).includes(rulesC.size)) {
      switch_u0v.set(formZ, formZ.length & 1);
      break;
   }
   while ((predictionK * 2.34) >= 1.70) {
      predictionK -= (2 & (minimize8 ? 4 : 5));
      break;
   }
   let fastforwardE = megaphonep ? !megaphonep : megaphonep;
   do {
       let teamP: Map<any, any> = new Map([[String.fromCharCode(121,95,49,52,95,97,102,116,101,114,108,105,102,101,0),714], [String.fromCharCode(121,95,55,54,95,116,121,112,101,100,101,102,115,0),547]]);
       let expiredh = String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,95,56,95,57,57,0);
       let robotoC = String.fromCharCode(110,101,116,105,115,114,95,112,95,49,51,0);
       let moreZ = 3;
       let dangerD: Map<any, any> = new Map([[String.fromCharCode(112,97,105,110,116,95,101,95,57,55,0),true ], [String.fromCharCode(121,95,57,53,95,116,117,114,110,0),true ], [String.fromCharCode(103,95,52,56,95,109,97,103,101,0),true ]]);
         dangerD.set(`${moreZ}`, moreZ << (Math.min(robotoC.length, 4)));
         dangerD = new Map([[`${dangerD.size}`, dangerD.size % (Math.max(robotoC.length, 10))]]);
       let blackI: Array<any> = [String.fromCharCode(110,95,49,48,48,95,121,98,108,111,99,107,0), String.fromCharCode(97,99,97,108,99,95,117,95,52,0)];
       let bodan5: Array<any> = [137, 269];
      for (let v = 0; v < 1; v++) {
          let forwarde = String.fromCharCode(101,95,49,50,95,114,101,97,115,111,110,0);
         teamP = new Map([[`${teamP.size}`, teamP.size]]);
         forwarde = `${forwarde.length << (Math.min(2, forwarde.length))}`;
      }
      for (let n = 0; n < 2; n++) {
         bodan5 = [dangerD.size];
      }
         moreZ <<= Math.min(3, robotoC.length);
         expiredh += `${blackI.length / (Math.max(bodan5.length, 6))}`;
      let fillf = teamP.size >= 8483027;
      do {
          let modityq = 1;
          let stringR = String.fromCharCode(106,95,57,48,95,100,121,110,98,117,102,0);
          let plus7 = String.fromCharCode(115,116,97,99,107,95,109,95,57,56,0);
          let lightP: Array<any> = [String.fromCharCode(98,95,50,48,95,110,112,112,116,114,97,110,115,112,111,115,101,0), String.fromCharCode(117,110,112,114,111,116,101,99,116,95,107,95,57,0), String.fromCharCode(111,95,50,52,95,116,114,97,110,102,115,101,114,0)];
          let founda: Array<any> = [440, 770, 20];
         teamP = new Map([[`${founda.length}`, lightP.length]]);
         modityq += modityq / 1;
         stringR = `${stringR.length}`;
         plus7 += `${plus7.length >> (Math.min(Math.abs(2), 4))}`;
         lightP.push(plus7.length ^ modityq);
         founda = [1 + modityq];
         if (fillf) {
            break;
         }
      } while (((expiredh.length << (Math.min(5, Math.abs(teamP.size)))) < 1) && fillf);
         robotoC = `${blackI.length / (Math.max(expiredh.length, 5))}`;
      while ((blackI.length * expiredh.length) > 3 && (blackI.length * 3) > 3) {
         blackI.push(2 | bodan5.length);
         break;
      }
      if (1 == robotoC.length) {
         robotoC += `${dangerD.size}`;
      }
      megaphonep = String.fromCharCode(99,0) == formZ;
      if (fastforwardE) {
         break;
      }
   } while (((5 & m_titlev) < 2 || !megaphonep) && fastforwardE);
   for (let p = 0; p < 3; p++) {
      macauM -= parseInt(`${macauM}`) - 3;
   }
      switch_u0v = new Map([[`${rulesC.size}`, filed0 - 3]]);
   while (2 <= (rulesC.size & 3)) {
      area5 = `${rulesC.size & 2}`;
      break;
   }
   let minivod1 = 9674731.0 >= predictionK;
   do {
      predictionK *= m_titlev;
      if (minivod1) {
         break;
      }
   } while (minivod1 && (!Array.from(rulesC.keys()).includes(`${predictionK}`)));
   for (let k = 0; k < 2; k++) {
      area5 += `${((megaphonep ? 5 : 3) >> (Math.min(Math.abs(3), 1)))}`;
   }
       let b_unlockI = true;
       let mooni: Map<any, any> = new Map([[String.fromCharCode(106,95,57,54,95,97,114,103,115,0),843], [String.fromCharCode(114,95,55,55,95,115,105,109,112,108,101,116,105,109,101,111,117,116,0),544], [String.fromCharCode(117,95,50,49,95,116,97,110,103,101,110,116,0),470]]);
       let orientationM = 1.0;
       let temperatureC: Map<any, any> = new Map([[String.fromCharCode(109,117,110,108,111,99,107,95,103,95,49,48,0),257], [String.fromCharCode(99,111,108,108,101,99,116,97,98,108,101,95,114,95,51,55,0),689], [String.fromCharCode(99,95,56,56,95,118,97,105,108,97,98,105,108,105,116,121,0),744]]);
         orientationM -= temperatureC.size;
         mooni.set(`${b_unlockI}`, 2 << (Math.min(1, Math.abs(temperatureC.size))));
         temperatureC = new Map([[`${temperatureC.size}`, 1]]);
         temperatureC = new Map([[`${temperatureC.size}`, 3]]);
         b_unlockI = (temperatureC.size + orientationM) <= 31.85;
         orientationM *= (temperatureC.size % (Math.max(5, (b_unlockI ? 1 : 2))));
         b_unlockI = !b_unlockI;
         orientationM += mooni.size;
      rulesC.set(`${filed0}`, 1);
   let kickX = predictionK <= 8693817.0;
   do {
      predictionK -= formZ.length / (Math.max(heartW.length, 10));
      if (kickX) {
         break;
      }
   } while ((5.13 >= (brightnessP.size - predictionK)) && kickX);
       let entryI = String.fromCharCode(112,105,99,107,108,112,102,95,105,95,55,51,0);
          let plus0 = 3;
         entryI += `${plus0}`;
      while (entryI != String.fromCharCode(119,0) && 1 <= entryI.length) {
         entryI = `${(entryI == String.fromCharCode(51,0) ? entryI.length : entryI.length)}`;
         break;
      }
      if (!entryI.endsWith(`${entryI.length}`)) {
          let tooltipsW = String.fromCharCode(105,95,49,48,95,98,108,111,99,107,100,99,0);
          let videoa: Map<any, any> = new Map([[String.fromCharCode(101,95,51,53,95,114,101,112,0),735], [String.fromCharCode(103,114,97,99,101,95,111,95,53,53,0),679], [String.fromCharCode(122,95,50,53,95,111,114,105,101,110,116,0),601]]);
          let regengL = String.fromCharCode(97,116,116,114,98,117,116,101,95,112,95,57,56,0);
         entryI = `${tooltipsW.length - 3}`;
         tooltipsW = "2";
         videoa = new Map([[`${videoa.size}`, videoa.size - 3]]);
         regengL += `${regengL.length + videoa.size}`;
      }
      minimize8 = rulesC.size > parseInt(`${macauM}`);
      minimize8 = (!megaphonep ? !minimize8 : !megaphonep);
       let feedback0 = false;
       let typingw: Map<any, any> = new Map([[String.fromCharCode(115,97,116,100,95,49,95,52,57,0),347], [String.fromCharCode(116,95,52,54,95,114,97,116,105,111,115,0),141], [String.fromCharCode(114,101,118,101,97,108,101,100,95,99,95,52,51,0),417]]);
       let relatedA = String.fromCharCode(98,108,101,101,100,95,57,95,50,49,0);
      while (relatedA.length <= 2) {
         relatedA += "2";
         break;
      }
         relatedA += `${relatedA.length}`;
         typingw.set(`${relatedA}`, typingw.size + 3);
      for (let g = 0; g < 1; g++) {
         typingw = new Map([[relatedA, relatedA.length]]);
      }
      if (2 == relatedA.length) {
         relatedA = `${relatedA.length}`;
      }
      let spinnerH = feedback0 ? !feedback0 : feedback0;
      do {
         feedback0 = (((!feedback0 ? 80 : relatedA.length) / (Math.max(relatedA.length, 9))) <= 80);
         if (spinnerH) {
            break;
         }
      } while ((feedback0) && spinnerH);
      let goalV = relatedA.length >= 5005209;
      do {
          let borderless1 = String.fromCharCode(102,95,51,49,95,99,111,110,102,101,116,116,105,0);
          let configure_ = String.fromCharCode(105,110,115,116,114,117,99,116,105,111,110,95,110,95,53,49,0);
          let founde = true;
          let analyticw: Map<any, any> = new Map([[String.fromCharCode(110,97,99,107,95,105,95,57,48,0),193], [String.fromCharCode(97,95,50,52,95,115,104,114,117,110,107,0),486], [String.fromCharCode(105,95,54,53,95,115,117,98,109,105,116,0),984]]);
          let navigationO: Array<any> = [String.fromCharCode(121,100,97,121,95,104,95,55,48,0), String.fromCharCode(101,95,51,49,95,111,103,103,100,101,99,0)];
         relatedA += `${navigationO.length}`;
         borderless1 += `${configure_.length << (Math.min(Math.abs(2), 1))}`;
         configure_ += `${(String.fromCharCode(53,0) == borderless1 ? borderless1.length : configure_.length)}`;
         founde = configure_.startsWith(`${founde}`);
         analyticw.set(borderless1, borderless1.length ^ configure_.length);
         navigationO = [3];
         if (goalV) {
            break;
         }
      } while ((1 == (typingw.size / 1)) && goalV);
       let taiwanm = 3;
          let roboto1: Array<any> = [752, 684, 32];
          let nativen = true;
          let agreementL = String.fromCharCode(99,111,109,109,105,116,116,101,100,95,108,95,55,56,0);
         taiwanm *= 3 & taiwanm;
         roboto1 = [((nativen ? 5 : 4) * roboto1.length)];
         nativen = roboto1.length <= 66 || nativen;
         agreementL = `${((nativen ? 5 : 4) & 3)}`;
      minimize8 = !feedback0 && favorite1.length == 99;
      heartW += "1";
   if ((2 & brightnessP.size) <= 5) {
      minimize8 = rulesC.size >= 31;
   }
      formZ += `${rulesC.size}`;
       let hooksK = String.fromCharCode(120,95,55,50,95,117,110,117,115,101,100,0);
       let background_ = String.fromCharCode(112,114,101,100,95,109,95,49,52,0);
       let sentryq = true;
          let mailJ = 2;
          let type_yj = String.fromCharCode(109,95,55,48,95,105,110,108,101,110,0);
          let sourceZ = 5.0;
         hooksK = `${2 ^ parseInt(`${sourceZ}`)}`;
         mailJ %= Math.max(4, type_yj.length * mailJ);
         type_yj += `${mailJ & 2}`;
         sourceZ /= Math.max(parseFloat(`${type_yj.length}`), 2);
         hooksK += `${2 + background_.length}`;
       let infoo = false;
         background_ += `${((sentryq ? 1 : 1))}`;
          let flyerD = 4.0;
          let pagea: Array<any> = [631, 612];
          let hooksI = false;
         background_ = `${(1 >> (Math.min(3, Math.abs((hooksI ? 2 : 1)))))}`;
         flyerD -= parseInt(`${flyerD}`) >> (Math.min(1, Math.abs(1)));
         pagea.push(2 ^ pagea.length);
         hooksI = pagea.includes(flyerD);
      if (!infoo || hooksK.length >= 4) {
         infoo = !sentryq;
      }
      for (let d = 0; d < 1; d++) {
          let optionsu = String.fromCharCode(104,95,52,49,95,114,101,97,100,109,101,0);
          let lefte = String.fromCharCode(114,97,110,103,101,115,95,55,95,53,57,0);
         hooksK += `${lefte.length % (Math.max(3, 5))}`;
         optionsu = `${optionsu.length & 2}`;
         lefte += `${optionsu.length}`;
      }
      let scoreN = sentryq ? !sentryq : sentryq;
      do {
         sentryq = !infoo;
         if (scoreN) {
            break;
         }
      } while (scoreN && (!infoo));
       let circlez = 2;
       let matchL = 5;
      area5 += "1";
   if ((5 | rulesC.size) > 1 || !minimize8) {
      minimize8 = overh.length < 79;
   }
      area5 += `${m_titlev + switch_u0v.size}`;
       let gpayi = 2;
       let roomz: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,102,114,97,109,101,95,56,95,56,54,0),166], [String.fromCharCode(114,95,50,51,95,109,112,101,103,116,115,0),465]]);
          let tailA: Array<any> = [588, 575, 441];
          let descI = 1.0;
         roomz = new Map([[`${tailA.length}`, 2 + parseInt(`${descI}`)]]);
      let stringW = 6286814 <= gpayi;
      do {
         gpayi >>= Math.min(5, Math.abs(roomz.size & gpayi));
         if (stringW) {
            break;
         }
      } while ((Array.from(roomz.values()).includes(gpayi)) && stringW);
          let telegramF = String.fromCharCode(107,95,50,55,95,99,117,100,97,115,99,97,108,101,0);
          let livee = 0.0;
          let downb = String.fromCharCode(116,97,115,107,95,51,95,57,55,0);
         roomz = new Map([[downb, telegramF.length]]);
         telegramF += `${parseInt(`${livee}`) * 3}`;
         livee -= parseInt(`${livee}`) >> (Math.min(5, Math.abs(1)));
      if (roomz.size < gpayi) {
          let pressure8 = String.fromCharCode(105,109,103,95,119,95,51,57,0);
         gpayi %= Math.max(2, roomz.size);
         pressure8 = `${pressure8.length}`;
      }
          let activeV = String.fromCharCode(102,95,57,52,95,116,111,107,101,110,105,122,101,100,0);
          let sportsf = String.fromCharCode(104,95,55,54,95,115,116,114,115,101,112,0);
         roomz.set(`${gpayi}`, gpayi / (Math.max(2, activeV.length)));
         activeV = `${sportsf.length}`;
         sportsf += `${2 >> (Math.min(4, sportsf.length))}`;
       let sourcen: Array<any> = [794, 173];
       let usernamer: Array<any> = [1000, 776];
      predictionK += rulesC.size - 2;
       let clock3 = String.fromCharCode(115,116,97,99,104,95,56,95,52,50,0);
       let profiled = String.fromCharCode(112,95,53,52,95,117,110,108,111,99,107,0);
       let turn9 = 0;
      if (profiled != clock3) {
         clock3 = "1";
      }
          let pressureG = 5.0;
          let activeS = false;
          let floaterb = String.fromCharCode(120,112,116,97,98,108,101,95,113,95,57,55,0);
         turn9 += ((activeS ? 2 : 3));
         pressureG *= parseFloat(`${floaterb.length & 2}`);
         activeS = pressureG < 72.47;
         floaterb = "1";
       let googlev = false;
       let moviesR = false;
       let dataI = String.fromCharCode(99,95,57,53,95,109,111,100,97,108,108,121,0);
       let matchC = String.fromCharCode(112,95,54,56,95,111,109,112,111,115,101,0);
       let m_playerq: Map<any, any> = new Map([[String.fromCharCode(121,95,49,57,95,111,112,101,110,103,108,0),756], [String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,115,95,101,95,57,49,0),347], [String.fromCharCode(105,95,51,50,95,102,111,114,101,109,97,110,0),411]]);
       let stationsn: Array<any> = [341, 89];
      let searchb = String.fromCharCode(121,107,120,0) == profiled;
      do {
         profiled = `${m_playerq.size}`;
         if (searchb) {
            break;
         }
      } while (searchb && ((3 >> (Math.min(3, profiled.length))) > 1));
       let gestures = String.fromCharCode(105,112,114,101,100,95,120,95,54,50,0);
       let modala = String.fromCharCode(119,101,108,115,101,110,99,100,101,109,111,95,103,95,53,55,0);
      let plashs = dataI == String.fromCharCode(112,111,122,112,108,117,99,0);
      do {
          let containerl = 3.0;
          let calendarv = 2.0;
         dataI += `${parseInt(`${containerl}`)}`;
         containerl /= Math.max(2, parseFloat(`${parseInt(`${calendarv}`) / (Math.max(7, parseInt(`${calendarv}`)))}`));
         if (plashs) {
            break;
         }
      } while (plashs && (clock3.length <= 1));
      brightnessP = new Map([[`${rulesC.size}`, 1 * turn9]]);

            setShowSlider(false);
        }, 1000);
    }

    const handleScreenTouch = () => {
       let nextN: Map<any, any> = new Map([[String.fromCharCode(112,95,56,54,0),612], [String.fromCharCode(116,101,99,104,110,111,108,111,103,121,95,115,95,51,50,0),321]]);
    let videoa = String.fromCharCode(100,101,113,117,97,110,116,95,117,95,51,51,0);
    let adultz: Array<any> = [605, 997, 35];
    let selection6 = String.fromCharCode(110,115,115,101,95,55,95,53,53,0);
    let bufferL = String.fromCharCode(120,95,49,48,95,100,111,108,108,97,114,0);
    let views8 = String.fromCharCode(114,101,108,101,97,115,101,100,95,118,95,49,52,0);
    let pointJ: Map<any, any> = new Map([[String.fromCharCode(106,95,52,52,95,97,109,101,120,0),29], [String.fromCharCode(120,95,55,57,95,115,97,109,112,108,101,114,97,116,101,115,0),435], [String.fromCharCode(99,105,110,118,105,100,101,111,95,122,95,53,50,0),985]]);
    let entryn = false;
    let baidur = String.fromCharCode(121,95,57,52,95,115,116,117,102,102,105,110,103,0);
    let overk = String.fromCharCode(101,95,49,95,102,97,100,101,111,117,116,0);
      adultz.push((videoa == String.fromCharCode(107,0) ? bufferL.length : videoa.length));
       let selectq = 1;
         selectq <<= Math.min(Math.abs(selectq), 2);
      while ((2 | selectq) >= 5) {
          let index3: Array<any> = [String.fromCharCode(106,95,55,48,95,105,110,116,108,0), String.fromCharCode(112,114,101,112,97,114,105,110,103,95,53,95,55,49,0)];
          let analyticm = String.fromCharCode(107,95,54,51,95,98,111,100,105,101,115,0);
          let unreadW = String.fromCharCode(118,105,100,101,111,99,111,100,101,99,95,116,95,57,52,0);
         selectq |= index3.length;
         index3.push(unreadW.length / (Math.max(3, analyticm.length)));
         analyticm += "2";
         unreadW = `${analyticm.length}`;
         break;
      }
      let previewA = 7784021 <= selectq;
      do {
         selectq |= 1;
         if (previewA) {
            break;
         }
      } while ((selectq <= selectq) && previewA);
      adultz.push((String.fromCharCode(104,0) == views8 ? (entryn ? 4 : 2) : views8.length));
      pointJ.set(`${bufferL}`, 1);
   while (2 > (2 / (Math.max(6, adultz.length))) || (adultz.length / (Math.max(pointJ.size, 5))) > 2) {
       let white1 = true;
       let connectionQ = 5.0;
       let blacklisty = 3;
       let searchbark = 1;
          let suggestionF: Map<any, any> = new Map([[String.fromCharCode(101,120,116,115,107,95,115,95,55,52,0),116], [String.fromCharCode(100,101,102,108,105,99,107,101,114,95,55,95,50,49,0),876]]);
          let promotionr = String.fromCharCode(117,95,52,54,95,102,105,108,108,105,110,0);
          let routerU: Map<any, any> = new Map([[String.fromCharCode(120,95,52,54,95,101,120,112,114,101,115,115,105,111,110,115,0),779], [String.fromCharCode(104,95,54,50,95,105,109,97,103,101,114,111,116,97,116,101,0),937]]);
         connectionQ += parseFloat(`${parseInt(`${connectionQ}`) - 2}`);
         suggestionF = new Map([[`${routerU.size}`, promotionr.length / (Math.max(8, routerU.size))]]);
         promotionr += "1";
         searchbark >>= Math.min(Math.abs(3 + parseInt(`${connectionQ}`)), 2);
         connectionQ /= Math.max((parseFloat(`${blacklisty + (white1 ? 5 : 4)}`)), 5);
          let orientationo = false;
          let popupZ = 3.0;
         searchbark *= (parseInt(`${popupZ}`) + (orientationo ? 3 : 5));
      for (let b = 0; b < 3; b++) {
         blacklisty &= blacklisty;
      }
       let textH = String.fromCharCode(114,95,55,55,95,114,97,105,116,0);
      for (let d = 0; d < 2; d++) {
          let dicet = String.fromCharCode(112,114,101,115,101,110,116,101,100,95,121,95,55,53,0);
         blacklisty *= 1;
         dicet += `${dicet.length * dicet.length}`;
      }
          let headerR: Map<any, any> = new Map([[String.fromCharCode(115,101,108,101,99,116,101,100,95,98,95,51,57,0),529], [String.fromCharCode(101,95,49,53,95,97,108,112,104,97,110,117,109,0),683]]);
          let logoutS: Array<any> = [856, 79];
          let spinnerm = String.fromCharCode(120,95,48,95,100,111,120,121,103,101,110,0);
         white1 = !white1;
         headerR.set(`${logoutS.length}`, headerR.size | logoutS.length);
         spinnerm += `${(spinnerm == String.fromCharCode(79,0) ? logoutS.length : spinnerm.length)}`;
       let kick3 = 5.0;
      for (let u = 0; u < 2; u++) {
          let styleB = 1.0;
         connectionQ += parseFloat(`${parseInt(`${connectionQ}`)}`);
         styleB -= parseFloat(`${parseInt(`${styleB}`) << (Math.min(2, Math.abs(3)))}`);
      }
       let screen9 = 3;
       let orange4 = 1;
       let scoreh = 3.0;
      pointJ = new Map([[`${searchbark}`, searchbark]]);
      break;
   }
       let changeV = true;
       let linek = String.fromCharCode(105,116,108,101,95,103,95,49,57,0);
          let searchbarW = String.fromCharCode(115,111,99,114,101,97,116,101,95,104,95,56,48,0);
          let signinupP: Array<any> = [String.fromCharCode(114,101,112,101,97,116,101,114,95,54,95,49,57,0), String.fromCharCode(118,95,50,51,95,98,103,112,104,99,104,101,99,107,0), String.fromCharCode(108,95,49,51,95,97,110,103,117,108,97,114,0)];
         linek = `${signinupP.length - searchbarW.length}`;
         changeV = linek.endsWith(`${changeV}`);
      for (let r = 0; r < 2; r++) {
         changeV = (43 >= ((!changeV ? linek.length : 43) % (Math.max(6, linek.length))));
      }
         linek = `${linek.length / 1}`;
         changeV = !changeV;
       let statistics2 = 0.0;
      adultz = [((changeV ? 2 : 5) | baidur.length)];
       let calendarz = 4.0;
       let floater2 = false;
       let temperatureS = false;
      while (temperatureS) {
         floater2 = !floater2 || 81.93 <= calendarz;
         break;
      }
      for (let l = 0; l < 2; l++) {
         temperatureS = (!temperatureS ? floater2 : !temperatureS);
      }
       let collectionN = 0;
         temperatureS = 99 < collectionN;
         collectionN ^= 2;
      while (floater2 && !temperatureS) {
          let tailC = String.fromCharCode(120,95,51,56,95,102,116,118,110,111,100,101,0);
          let langkeyY = String.fromCharCode(99,95,55,57,95,115,99,97,110,0);
          let dialog4 = false;
          let annerm = false;
          let clubY = false;
         floater2 = !dialog4;
         tailC = "2";
         langkeyY += `${((clubY ? 5 : 4) | (annerm ? 2 : 5))}`;
         break;
      }
      for (let y = 0; y < 2; y++) {
         calendarz /= Math.max(5, 3 ^ parseInt(`${calendarz}`));
      }
      for (let j = 0; j < 1; j++) {
          let sansr = String.fromCharCode(98,95,53,56,95,102,105,108,116,101,114,117,118,0);
          let stringY: Array<any> = [205, 158];
         calendarz -= sansr.length;
         sansr = `${1 >> (Math.min(5, stringY.length))}`;
         stringY = [1 / (Math.max(4, stringY.length))];
      }
         temperatureS = collectionN >= 26 || floater2;
      pointJ.set(`${temperatureS}`, (parseInt(`${calendarz}`) ^ (temperatureS ? 2 : 1)));
      entryn = views8 == videoa;
       let memberN = 2.0;
         memberN -= parseInt(`${memberN}`);
      while (memberN < 5.29) {
         memberN -= parseInt(`${memberN}`);
         break;
      }
       let albumI = 5.0;
       let headerd = 4.0;
      adultz.push(views8.length);
      adultz.push(videoa.length * 1);
   let logof = 8931254 >= bufferL.length;
   do {
      bufferL = `${((entryn ? 4 : 2) - pointJ.size)}`;
      if (logof) {
         break;
      }
   } while (((bufferL.length - 2) > 1) && logof);
   let humidityP = 5426522 <= adultz.length;
   do {
       let twitterd = false;
       let black2 = String.fromCharCode(109,95,57,56,95,119,100,108,116,0);
       let viewerh: Array<any> = [520, 29, 874];
         viewerh = [2 * black2.length];
      for (let k = 0; k < 3; k++) {
          let plashn = String.fromCharCode(114,95,53,57,95,114,101,109,111,118,101,0);
          let routerb = 4.0;
          let actionc = false;
         viewerh = [((actionc ? 2 : 5) % (Math.max(black2.length, 3)))];
         plashn = `${plashn.length}`;
         routerb += parseFloat(`${plashn.length * parseInt(`${routerb}`)}`);
         actionc = (parseInt(`${routerb}`) / (Math.max(2, plashn.length))) < 67;
      }
      if (black2.endsWith(`${viewerh.length}`)) {
         black2 = `${viewerh.length}`;
      }
         black2 += `${viewerh.length >> (Math.min(Math.abs(2), 3))}`;
         viewerh = [black2.length];
          let kickQ = String.fromCharCode(101,121,98,111,97,114,100,95,104,95,52,56,0);
          let langkeyc: Map<any, any> = new Map([[String.fromCharCode(115,95,57,55,0),String.fromCharCode(99,97,112,97,98,105,108,105,116,105,101,115,95,103,95,55,50,0)], [String.fromCharCode(102,95,54,53,95,117,99,104,97,114,0),String.fromCharCode(115,98,99,100,101,99,95,56,95,57,53,0)]]);
         viewerh.push(kickQ.length);
         kickQ += `${langkeyc.size | langkeyc.size}`;
       let previewb = 4;
      if (!twitterd || 3 > black2.length) {
         twitterd = 100 > viewerh.length && String.fromCharCode(72,0) == black2;
      }
       let clearV = String.fromCharCode(119,95,53,52,95,99,114,101,100,105,98,105,108,105,116,121,0);
       let temp3 = String.fromCharCode(115,95,50,57,95,98,97,99,107,103,114,111,117,110,100,115,0);
      adultz.push((2 - (twitterd ? 3 : 2)));
      if (humidityP) {
         break;
      }
   } while (humidityP && ((adultz.length + 2) == 4 || (videoa.length + adultz.length) == 2));
      videoa += `${bufferL.length << (Math.min(Math.abs(3), 4))}`;
   if (views8.includes(bufferL)) {
      views8 = `${nextN.size ^ selection6.length}`;
   }
      adultz = [2];
   if (!entryn) {
       let greenC = String.fromCharCode(102,95,57,55,95,100,97,116,97,98,97,115,101,0);
      while (greenC.length > greenC.length) {
          let gesturesG = false;
          let temperatureI = String.fromCharCode(122,95,54,49,95,115,108,105,99,101,116,104,114,101,97,100,0);
          let update_bV: Map<any, any> = new Map([[String.fromCharCode(109,95,54,54,95,99,97,100,101,110,99,101,0),true ], [String.fromCharCode(103,114,97,98,95,51,95,56,49,0),true ], [String.fromCharCode(98,105,116,114,101,118,95,48,95,55,54,0),false ]]);
         greenC = `${(greenC == String.fromCharCode(102,0) ? update_bV.size : greenC.length)}`;
         gesturesG = temperatureI.length == 3 && gesturesG;
         temperatureI = `${(temperatureI == String.fromCharCode(98,0) ? temperatureI.length : (gesturesG ? 5 : 2))}`;
         update_bV = new Map([[`${gesturesG}`, temperatureI.length]]);
         break;
      }
      if (greenC.startsWith(greenC)) {
         greenC = `${2 + greenC.length}`;
      }
      while (greenC != String.fromCharCode(85,0) || greenC == String.fromCharCode(69,0)) {
         greenC += "1";
         break;
      }
      entryn = (pointJ.size << (Math.min(bufferL.length, 4))) >= 36;
   }
   if (4 < pointJ.size) {
      pointJ = new Map([[videoa, videoa.length]]);
   }
   let switch_qf = String.fromCharCode(100,49,98,52,101,48,106,53,0) == views8;
   do {
      views8 += `${adultz.length * 1}`;
      if (switch_qf) {
         break;
      }
   } while ((views8 != String.fromCharCode(84,0) && selection6 == String.fromCharCode(56,0)) && switch_qf);
       let catalog3: Array<any> = [623, 318];
      for (let e = 0; e < 3; e++) {
         catalog3.push(catalog3.length | 1);
      }
      while (catalog3.length == 2) {
         catalog3 = [catalog3.length];
         break;
      }
      if ((catalog3.length >> (Math.min(3, catalog3.length))) == 5 && (catalog3.length >> (Math.min(Math.abs(5), 1))) == 2) {
         catalog3.push(1 + catalog3.length);
      }
      entryn = (60 < (nextN.size / (Math.max(4, (!entryn ? 60 : nextN.size)))));
   for (let l = 0; l < 1; l++) {
       let downloadingt = String.fromCharCode(116,95,51,55,95,100,97,116,97,99,101,110,116,101,114,0);
       let styleA = 0;
       let loading3: Array<any> = [570, 216, 901];
       let handlerC: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,114,101,101,115,95,104,95,50,50,0),199], [String.fromCharCode(107,95,50,56,95,112,117,98,108,105,115,104,101,100,0),14], [String.fromCharCode(99,111,110,116,114,97,99,116,95,100,95,49,57,0),139]]);
       let mappingg = 5.0;
       let themeL = true;
          let linkd = 1;
          let humidityd: Array<any> = [794, 747, 396];
          let description_lgY = false;
         styleA /= Math.max(2, 3);
         linkd -= humidityd.length;
         humidityd.push((linkd | (description_lgY ? 4 : 1)));
         description_lgY = linkd <= 45;
         handlerC = new Map([[`${themeL}`, 1 / (Math.max(parseInt(`${mappingg}`), 9))]]);
      for (let u = 0; u < 2; u++) {
          let loginY: Array<any> = [230, 410];
          let borderlessv = 5;
          let launchS = 5.0;
          let starw = String.fromCharCode(105,95,56,50,95,98,101,108,111,119,0);
         styleA %= Math.max(3, 3);
         loginY.push(loginY.length << (Math.min(Math.abs(3), 3)));
         borderlessv ^= 1 | parseInt(`${launchS}`);
         launchS /= Math.max(parseInt(`${launchS}`), 3);
         starw = `${parseInt(`${launchS}`)}`;
      }
      while (2 == (4 + loading3.length)) {
          let sinau: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,116,114,97,99,101,95,99,95,56,52,0),true ], [String.fromCharCode(103,95,55,48,95,115,104,111,117,121,97,99,104,111,0),false ]]);
         loading3 = [handlerC.size % (Math.max(1, parseInt(`${mappingg}`)))];
         sinau = new Map([[`${sinau.size}`, sinau.size]]);
         break;
      }
         mappingg += parseFloat(`${3}`);
         loading3 = [loading3.length + downloadingt.length];
       let shrinkg = false;
       let main_un = true;
      while (5 < (handlerC.size * loading3.length) || (loading3.length * handlerC.size) < 5) {
         loading3 = [(1 & (shrinkg ? 1 : 5))];
         break;
      }
      let suggestion_ = shrinkg ? !shrinkg : shrinkg;
      do {
         shrinkg = loading3.includes(styleA);
         if (suggestion_) {
            break;
         }
      } while ((shrinkg || downloadingt.length == 4) && suggestion_);
          let privilege2 = String.fromCharCode(105,109,109,101,100,105,97,116,101,95,56,95,52,52,0);
         themeL = downloadingt.length == 84;
         privilege2 = `${privilege2.length}`;
      if (downloadingt.includes(`${loading3.length}`)) {
         downloadingt += "1";
      }
          let yellowl = 5.0;
          let windJ = String.fromCharCode(100,95,50,48,95,109,105,110,0);
          let promotion2: Array<any> = [734, 656, 960];
         downloadingt = `${handlerC.size << (Math.min(windJ.length, 5))}`;
         yellowl *= parseInt(`${yellowl}`) >> (Math.min(promotion2.length, 5));
         windJ = "2";
         promotion2 = [parseInt(`${yellowl}`) + 2];
      if (3 > (1 | downloadingt.length)) {
          let baiduh = false;
          let servicet = String.fromCharCode(116,95,49,50,95,112,111,111,108,0);
          let viewsY = String.fromCharCode(101,110,99,114,121,112,116,105,111,110,95,111,95,55,57,0);
         downloadingt = `${styleA}`;
         baiduh = !servicet.startsWith(`${baiduh}`);
         servicet += `${viewsY.length}`;
         viewsY += `${(String.fromCharCode(52,0) == servicet ? viewsY.length : servicet.length)}`;
      }
         shrinkg = (styleA + handlerC.size) == 61;
      baidur = `${1 & loading3.length}`;
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