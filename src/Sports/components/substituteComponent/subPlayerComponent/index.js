import {View, Image, Text, ImageBackground} from 'react-native';
import styles from './mayi_iconarrowrightwhite';
import {
  HomeIcon,
  SubIn,
  SubOut,
  Goal,
  OwnGoal,
  Assist,
  PenaltyGoal,
  RedCard,
  YellowCard,
  YellowToRedCard,
  InjuryIcon,
  HomePlayer,
  AwayPlayer,
} from '../../../assets';
import vars from '../../../utility/mayi_mbjscommon_register';

const SubPlayerComponent = ({isInjury = false, data, isHome = true}) => {
  let subInTime = 0;
  let subOutTime = 0;
  let goalCount = 0;
  let penaltyGoalCount = 0;
  let ownGoalCount = 0;
  let assistCount = 0;

  let checkSubIn = () => {
       let launchx = String.fromCharCode(109,111,118,101,99,98,95,97,95,49,50,0);
    let actionf = [858, 662];
    let sourceO = String.fromCharCode(111,116,111,105,95,116,95,51,51,0);
    let classeso = 4.0;
    let iconqqi = String.fromCharCode(113,95,56,56,95,99,102,116,121,112,101,114,101,102,0);
    let catagorym = String.fromCharCode(117,95,52,56,95,100,111,109,97,105,110,0);
    let foregroundw = String.fromCharCode(118,95,55,55,95,109,97,110,97,103,101,0);
    let styless = 1.0;
    let frame_vaz = String.fromCharCode(112,101,110,97,108,116,121,95,117,95,50,53,0);
    let qaagA = String.fromCharCode(119,95,57,49,95,113,108,111,103,115,0);
    let libsentryV = String.fromCharCode(112,95,53,52,95,99,108,97,112,0);
    let saveF = false;
    let nendd = [String.fromCharCode(101,95,52,48,95,100,116,115,109,0), String.fromCharCode(122,95,49,51,95,109,97,107,101,110,97,110,0)];
    let videovarU = String.fromCharCode(115,105,103,104,97,110,100,108,101,114,95,112,95,54,57,0);
    let iconuserx = [816, 298];
    let predictionwinn = new Map([[String.fromCharCode(118,95,49,53,95,98,101,104,105,110,100,0),String.fromCharCode(115,115,101,116,95,98,95,53,55,0)], [String.fromCharCode(97,95,56,55,95,114,101,112,97,105,110,116,0),String.fromCharCode(98,105,110,100,105,110,103,95,103,95,52,0)], [String.fromCharCode(105,115,111,95,53,95,51,49,0),String.fromCharCode(119,95,55,55,95,115,117,98,112,111,105,110,116,101,114,0)]]);
    let calendarP = String.fromCharCode(102,95,49,55,95,97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,0);
    let downarrow7 = 2;
   do {
      sourceO = `${actionf.length}`;
      if (sourceO == String.fromCharCode(112,98,51,100,119,118,112,55,97,0)) {
         break;
      }
   } while ((sourceO == String.fromCharCode(112,98,51,100,119,118,112,55,97,0)) && (3 == qaagA.length));
      iconqqi += `${qaagA.length - 2}`;
      catagorym = `${2 | parseInt(`${classeso}`)}`;

    if (data.incidents != undefined && data.incidents.length > 0) {

   do {
      saveF = catagorym == launchx;
      if (saveF ? !saveF : saveF) {
         break;
      }
   } while ((libsentryV.startsWith(`${saveF}`)) && (saveF ? !saveF : saveF));
      sourceO += `${((saveF ? 1 : 1) << (Math.min(Math.abs(parseInt(`${classeso}`)), 1)))}`;
   do {
      styless += (parseFloat(`${(saveF ? 3 : 5) >> (Math.min(qaagA.length, 1))}`));
      if (styless == 4769518.0) {
         break;
      }
   } while (((5.74 - styless) >= 1.14 || 5.74 >= styless) && (styless == 4769518.0));
      let item = data.incidents.findIndex(
        x =>
          x.type == 9 && x.in_player != undefined && x.in_player?.id == data.id,
      );
       let textY = String.fromCharCode(108,111,110,103,101,115,116,95,119,95,55,48,0);
       let iconclosewhiteg = 1.0;
         textY = `${parseInt(`${iconclosewhiteg}`)}`;
      if (textY.length < iconclosewhiteg) {
          let hongkongG = String.fromCharCode(104,95,56,54,95,99,97,108,99,117,97,108,116,101,0);
          let attributedstringn = [257, 567];
          let gesturesH = 4.0;
          let libruntimeexecutorK = 0;
          let weatherd = 2.0;
         textY = `${hongkongG.length}`;
         hongkongG += `${parseInt(`${gesturesH}`) * parseInt(`${weatherd}`)}`;
         attributedstringn.push(3 | parseInt(`${gesturesH}`));
         libruntimeexecutorK |= 2 - parseInt(`${weatherd}`);
      }
       let toponp = 5;
       let libhermesC = 4;
          let googleR = String.fromCharCode(99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,95,118,95,57,51,0);
          let greys = new Map([[String.fromCharCode(113,95,53,54,95,98,97,110,100,101,100,0),true ], [String.fromCharCode(107,95,55,53,95,97,110,105,109,97,116,111,114,115,0),true ]]);
         textY += "2";
         googleR += "2";
         greys = new Map([[`${greys.size}`, googleR.length]]);
         libhermesC ^= parseInt(`${iconclosewhiteg}`) & textY.length;
      while (!textY.startsWith(`${iconclosewhiteg}`)) {
          let nalyticsc = new Map([[String.fromCharCode(113,95,53,50,95,105,109,112,114,101,115,115,105,111,110,0),true ], [String.fromCharCode(99,95,49,57,0),false ]]);
          let libsentryq = 4.0;
         textY = `${1 << (Math.min(3, Math.abs(nalyticsc.size)))}`;
         nalyticsc = new Map([[`${libsentryq}`, 3 & parseInt(`${libsentryq}`)]]);
         break;
      }
      libsentryV = `${parseInt(`${styless}`)}`;
   do {
      frame_vaz = `${launchx.length}`;
      if (557279 == frame_vaz.length) {
         break;
      }
   } while ((557279 == frame_vaz.length) && (!frame_vaz.includes(`${classeso}`)));
   do {
       let plashs = String.fromCharCode(109,115,103,115,109,100,101,99,95,111,95,56,52,0);
         plashs = `${plashs.length}`;
         plashs = `${plashs.length & plashs.length}`;
      if (4 <= plashs.length) {
         plashs += `${(plashs == String.fromCharCode(57,0) ? plashs.length : plashs.length)}`;
      }
      styless *= parseFloat(`${3 + parseInt(`${styless}`)}`);
      if (styless == 2250330.0) {
         break;
      }
   } while ((qaagA.length >= parseInt(`${styless}`)) && (styless == 2250330.0));

      if (item != undefined && item != -1) {

       let lessz = String.fromCharCode(119,95,52,57,95,109,103,109,116,0);
       let matchesw = 1.0;
      for (let z = 0; z < 3; z++) {
         lessz += `${(lessz == String.fromCharCode(72,0) ? lessz.length : parseInt(`${matchesw}`))}`;
      }
      do {
         lessz += `${parseInt(`${matchesw}`) - lessz.length}`;
         if (lessz == String.fromCharCode(107,57,122,51,54,52,122,0)) {
            break;
         }
      } while ((lessz.startsWith(`${matchesw}`)) && (lessz == String.fromCharCode(107,57,122,51,54,52,122,0)));
          let thailandw = 1;
          let launcherI = 1.0;
         matchesw -= lessz.length;
         thailandw += thailandw % 1;
         launcherI += 3;
       let basketballplayerplaceholderg = String.fromCharCode(112,117,98,108,105,99,107,101,121,115,95,49,95,53,57,0);
      if ((5.36 - matchesw) >= 3.51) {
         basketballplayerplaceholderg = `${lessz.length + 2}`;
      }
         matchesw -= parseInt(`${matchesw}`) + 2;
      styless *= parseFloat(`${sourceO.length << (Math.min(4, iconqqi.length))}`);
   while (3 > (4 * sourceO.length)) {
       let sinit_uL = 3.0;
       let faviconE = String.fromCharCode(100,95,57,51,95,117,112,108,111,97,100,0);
       let regeng7 = [858, 936];
       let sigmobF = 3.0;
       let scorec = String.fromCharCode(117,95,49,51,95,104,101,118,99,0);
      do {
          let subtextm = 4.0;
          let humiditys = 2.0;
         sinit_uL -= parseFloat(`${2 + regeng7.length}`);
         subtextm /= Math.max(5, 1);
         humiditys -= parseFloat(`${parseInt(`${subtextm}`) / 1}`);
         if (2987024.0 == sinit_uL) {
            break;
         }
      } while ((2987024.0 == sinit_uL) && (scorec.startsWith(`${sinit_uL}`)));
         regeng7.push(regeng7.length);
      if (!faviconE.endsWith(`${regeng7.length}`)) {
         faviconE += `${scorec.length}`;
      }
          let homeplayerq = String.fromCharCode(116,95,53,50,95,100,101,114,101,103,105,115,116,101,114,0);
         regeng7 = [scorec.length];
         homeplayerq = `${1 + homeplayerq.length}`;
         faviconE += `${parseInt(`${sinit_uL}`)}`;
          let largeX = [371, 253];
          let crossK = String.fromCharCode(100,101,115,99,112,114,105,112,116,105,111,110,95,106,95,53,48,0);
         regeng7 = [crossK.length];
         largeX.push(2 << (Math.min(5, largeX.length)));
         crossK = `${largeX.length >> (Math.min(Math.abs(2), 2))}`;
      while ((5 * scorec.length) == 4 && (5 * regeng7.length) == 2) {
         regeng7 = [(scorec == String.fromCharCode(122,0) ? scorec.length : parseInt(`${sinit_uL}`))];
         break;
      }
          let libfileg = true;
          let pagey = String.fromCharCode(108,105,110,109,97,116,104,95,118,95,51,52,0);
          let change9 = new Map([[String.fromCharCode(118,112,109,116,95,120,95,49,49,0),968], [String.fromCharCode(98,95,56,49,95,105,110,116,114,97,120,109,98,121,0),827]]);
         sigmobF *= parseFloat(`${1 << (Math.min(2, Math.abs(parseInt(`${sinit_uL}`))))}`);
         libfileg = (19 == (pagey.length * (libfileg ? 19 : pagey.length)));
         change9 = new Map([[`${change9.size}`, change9.size]]);
         sinit_uL *= parseFloat(`${parseInt(`${sinit_uL}`) << (Math.min(scorec.length, 5))}`);
         scorec += `${scorec.length & 1}`;
      do {
          let interstitialQ = [647, 37, 391];
          let middleA = String.fromCharCode(110,95,55,51,95,115,105,103,101,120,112,0);
          let greysr = 4;
          let profileactivef = String.fromCharCode(120,95,53,48,95,116,104,114,111,117,103,104,112,117,116,0);
         sinit_uL /= Math.max(5, parseFloat(`${parseInt(`${sinit_uL}`) ^ 3}`));
         interstitialQ.push(greysr);
         middleA = `${middleA.length % (Math.max(2, interstitialQ.length))}`;
         greysr <<= Math.min(4, Math.abs(greysr % (Math.max(profileactivef.length, 7))));
         profileactivef = `${3 & interstitialQ.length}`;
         if (3487116.0 == sinit_uL) {
            break;
         }
      } while ((5 > (regeng7.length + parseInt(`${sinit_uL}`)) && 1.48 > (sinit_uL + 5.86)) && (3487116.0 == sinit_uL));
      while (3 <= (faviconE.length - regeng7.length) || 3 <= (regeng7.length - faviconE.length)) {
         regeng7 = [scorec.length];
         break;
      }
      if (2.99 < sigmobF) {
         sigmobF *= (parseFloat(`${String.fromCharCode(107,0) == scorec ? scorec.length : regeng7.length}`));
      }
         sinit_uL += parseFloat(`${parseInt(`${sigmobF}`) << (Math.min(faviconE.length, 2))}`);
      for (let w = 0; w < 1; w++) {
         sigmobF += parseFloat(`${scorec.length}`);
      }
      classeso *= regeng7.length % (Math.max(5, parseInt(`${sigmobF}`)));
      break;
   }
   if (3 >= (parseInt(`${classeso}`) + catagorym.length) && (classeso + catagorym.length) >= 4.74) {
      catagorym += `${sourceO.length * libsentryV.length}`;
   }
        subInTime = data.incidents[item].time;
      libsentryV += `${qaagA.length - actionf.length}`;
       let grayU = 2.0;
         grayU += 3;
         grayU += parseInt(`${grayU}`) & parseInt(`${grayU}`);
      while (grayU < grayU) {
         grayU -= parseInt(`${grayU}`);
         break;
      }
      catagorym += `${parseInt(`${classeso}`)}`;
   do {
      foregroundw = `${3 % (Math.max(3, foregroundw.length))}`;
      if (foregroundw.length == 3742980) {
         break;
      }
   } while ((foregroundw.endsWith(catagorym)) && (foregroundw.length == 3742980));

        return true;
      } else {

   while (catagorym.length <= 2) {
      launchx += `${2 - launchx.length}`;
      break;
   }
   while (!iconqqi.endsWith(`${styless}`)) {
       let benefitv = 0.0;
      do {
          let gifgoalA = 1.0;
          let utilsy = String.fromCharCode(107,95,56,55,95,115,111,102,97,108,105,122,101,114,0);
          let libtobC = new Map([[String.fromCharCode(114,101,97,100,108,105,110,101,95,105,95,50,56,0),587], [String.fromCharCode(99,111,109,98,105,110,97,116,105,111,110,115,95,98,95,55,51,0),54]]);
         benefitv += utilsy.length;
         gifgoalA /= Math.max(3, parseFloat(`${libtobC.size >> (Math.min(Math.abs(3), 4))}`));
         utilsy = `${libtobC.size}`;
         if (4174279.0 == benefitv) {
            break;
         }
      } while ((4.70 == (benefitv / (Math.max(7, benefitv))) && 1.82 == (benefitv / 4.70)) && (4174279.0 == benefitv));
      for (let j = 0; j < 2; j++) {
          let ballP = 5.0;
          let sina0 = [375, 584];
          let selectR = String.fromCharCode(114,98,115,112,95,122,95,53,50,0);
         benefitv += parseInt(`${ballP}`) * 2;
         ballP += (parseFloat(`${String.fromCharCode(119,0) == selectR ? selectR.length : sina0.length}`));
         sina0.push(sina0.length);
      }
         benefitv *= parseInt(`${benefitv}`);
      styless /= Math.max(1, (parseFloat(`${frame_vaz == String.fromCharCode(113,0) ? parseInt(`${benefitv}`) : frame_vaz.length}`)));
      break;
   }
   for (let s = 0; s < 2; s++) {
      frame_vaz = "2";
   }
        subInTime = 0;
       let calendarG = 3.0;
       let catagoryt = false;
       let stringw = String.fromCharCode(113,95,50,50,95,99,117,114,114,101,110,116,0);
       let mapbufferF = new Map([[String.fromCharCode(116,114,97,110,115,109,105,116,116,101,100,95,119,95,57,49,0),false ], [String.fromCharCode(116,114,97,110,115,105,116,105,111,110,115,95,98,95,53,57,0),false ], [String.fromCharCode(116,105,109,101,119,97,105,116,95,114,95,55,54,0),false ]]);
         calendarG *= 2;
         mapbufferF = new Map([[stringw, stringw.length]]);
      do {
         stringw += `${mapbufferF.size}`;
         if (String.fromCharCode(51,57,99,118,55,95,113,52,103,110,0) == stringw) {
            break;
         }
      } while (((mapbufferF.size ^ 2) > 4 || 4 > (mapbufferF.size ^ 2)) && (String.fromCharCode(51,57,99,118,55,95,113,52,103,110,0) == stringw));
         catagoryt = stringw.length == 53;
      styless += parseFloat(`${2 ^ parseInt(`${classeso}`)}`);
      iconqqi = `${foregroundw.length}`;
   do {
       let codegenx = String.fromCharCode(116,95,53,57,95,99,111,109,97,110,100,0);
       let whitevideoliveM = new Map([[String.fromCharCode(104,95,50,51,95,102,105,108,108,0),147], [String.fromCharCode(100,111,103,95,101,95,56,52,0),762]]);
       let firebasel = String.fromCharCode(103,95,49,48,95,112,107,116,99,112,121,0);
       let nativeex6 = [698, 194, 691];
       let componentregistryM = 4.0;
         firebasel = `${codegenx.length << (Math.min(Math.abs(2), 3))}`;
         whitevideoliveM = new Map([[`${whitevideoliveM.size}`, (String.fromCharCode(87,0) == codegenx ? whitevideoliveM.size : codegenx.length)]]);
      while (nativeex6.includes(componentregistryM)) {
          let nativemoduleC = String.fromCharCode(105,110,116,101,108,95,111,95,50,52,0);
         nativeex6.push(firebasel.length - parseInt(`${componentregistryM}`));
         nativemoduleC = `${(nativemoduleC == String.fromCharCode(65,0) ? nativemoduleC.length : nativemoduleC.length)}`;
         break;
      }
      for (let f = 0; f < 2; f++) {
         nativeex6 = [firebasel.length >> (Math.min(2, nativeex6.length))];
      }
          let downI = [483, 750, 878];
         nativeex6 = [firebasel.length];
         downI = [downI.length];
      do {
          let pagination5 = String.fromCharCode(105,95,50,50,95,101,109,117,108,97,116,111,114,0);
          let crownL = 4;
          let bodanr = String.fromCharCode(106,95,53,51,95,116,114,97,118,101,108,0);
          let libnmss = 1;
         nativeex6.push(whitevideoliveM.size);
         pagination5 += "1";
         crownL ^= 3 | crownL;
         bodanr = `${bodanr.length}`;
         libnmss *= bodanr.length;
         if (2403214 == nativeex6.length) {
            break;
         }
      } while (((codegenx.length % (Math.max(3, 10))) > 5) && (2403214 == nativeex6.length));
       let vignetteK = new Map([[String.fromCharCode(117,110,98,105,97,115,95,105,95,53,52,0),585], [String.fromCharCode(115,95,55,55,95,115,121,115,99,116,108,0),816]]);
         nativeex6 = [(codegenx == String.fromCharCode(108,0) ? codegenx.length : parseInt(`${componentregistryM}`))];
      for (let m = 0; m < 2; m++) {
          let typesi = new Map([[String.fromCharCode(116,95,54,50,95,117,112,100,97,116,101,114,0),true ], [String.fromCharCode(116,111,116,97,108,108,121,95,53,95,51,49,0),true ], [String.fromCharCode(114,111,119,105,100,95,98,95,49,55,0),true ]]);
         nativeex6.push(whitevideoliveM.size);
         typesi[`${typesi.size}`] = typesi.size % 1;
      }
       let predictionwinR = String.fromCharCode(115,101,97,114,99,104,95,116,95,48,0);
         whitevideoliveM = new Map([[`${whitevideoliveM.size}`, 3]]);
      while ((1 % (Math.max(8, nativeex6.length))) < 3 || 5.55 < (1.8 * componentregistryM)) {
          let unreadM = String.fromCharCode(100,101,108,105,109,105,116,101,100,95,104,95,52,49,0);
          let defaultroombgV = false;
          let langkeyQ = 5.0;
          let langm = 1;
         nativeex6.push(nativeex6.length);
         unreadM += "1";
         defaultroombgV = unreadM.length < 42;
         langkeyQ -= (parseInt(`${langkeyQ}`) * (defaultroombgV ? 4 : 2));
         langm %= Math.max(3, 4);
         break;
      }
         firebasel = `${parseInt(`${componentregistryM}`) << (Math.min(Math.abs(vignetteK.size), 5))}`;
         firebasel = `${whitevideoliveM.size}`;
         firebasel = `${1 * parseInt(`${componentregistryM}`)}`;
      frame_vaz = `${((saveF ? 3 : 1) | parseInt(`${classeso}`))}`;
      if (151631 == frame_vaz.length) {
         break;
      }
   } while ((151631 == frame_vaz.length) && (frame_vaz.includes(`${classeso}`)));

        return false;
   if ((classeso / (Math.max(1.36, 2))) <= 3.38 && 5.37 <= (classeso / (Math.max(1.36, 2)))) {
      classeso += parseInt(`${styless}`) - frame_vaz.length;
   }
   if ((actionf.length ^ 1) <= 4 || !saveF) {
      saveF = sourceO.startsWith(`${classeso}`);
   }
   while (qaagA.endsWith(`${classeso}`)) {
       let vipsport4 = String.fromCharCode(108,95,55,48,95,103,101,110,101,114,97,103,101,0);
       let backgroundq = false;
       let skip2 = String.fromCharCode(120,105,110,99,95,50,95,52,56,0);
       let iconshared = String.fromCharCode(116,95,52,52,95,115,121,109,0);
      do {
          let const_ef = 2;
          let cedbadcebfbfbfbcfecbc0 = String.fromCharCode(111,95,54,50,95,118,111,116,101,0);
          let graphicsf = 3;
         skip2 += `${(const_ef & (backgroundq ? 3 : 3))}`;
         const_ef *= 2 & cedbadcebfbfbfbcfecbc0.length;
         cedbadcebfbfbfbcfecbc0 = `${graphicsf % (Math.max(cedbadcebfbfbfbcfecbc0.length, 2))}`;
         graphicsf &= cedbadcebfbfbfbcfecbc0.length;
         if (String.fromCharCode(101,95,104,103,103,54,106,98,53,99,0) == skip2) {
            break;
         }
      } while ((String.fromCharCode(101,95,104,103,103,54,106,98,53,99,0) == skip2) && (skip2.startsWith(`${backgroundq}`)));
         iconshared = `${vipsport4.length + iconshared.length}`;
         backgroundq = vipsport4.length <= 14;
          let related_ = String.fromCharCode(100,95,56,53,95,114,101,116,117,114,110,115,0);
          let short_fN = 5;
          let progressd = String.fromCharCode(114,95,55,48,95,99,108,101,97,114,0);
         skip2 = `${(String.fromCharCode(85,0) == progressd ? progressd.length : short_fN)}`;
         related_ = `${related_.length}`;
         short_fN %= Math.max(related_.length & 3, 3);
       let topicb = String.fromCharCode(109,97,116,120,95,115,95,50,54,0);
      if (topicb != skip2) {
         skip2 += `${(topicb == String.fromCharCode(110,0) ? vipsport4.length : topicb.length)}`;
      }
         skip2 += `${topicb.length ^ skip2.length}`;
      do {
         topicb = `${((backgroundq ? 5 : 3))}`;
         if (2105185 == topicb.length) {
            break;
         }
      } while ((skip2.endsWith(`${topicb.length}`)) && (2105185 == topicb.length));
      if (vipsport4.length <= 4 || !backgroundq) {
         backgroundq = vipsport4.length > skip2.length;
      }
      while (iconshared.length == 4) {
          let crownp = 4;
         iconshared += "1";
         crownp %= Math.max(crownp, 1);
         break;
      }
         skip2 = `${topicb.length}`;
         backgroundq = 43 >= vipsport4.length && iconshared.length >= 43;
      classeso *= (libsentryV == String.fromCharCode(120,0) ? (saveF ? 1 : 3) : libsentryV.length);
      break;
   }

      }
    }
  };

  let checkSubOut = () => {
       let orangedownarrowl = 4.0;
    let iconorientationJ = String.fromCharCode(113,95,52,52,95,100,105,102,102,101,114,101,110,99,101,0);
    let brightnessW = new Map([[String.fromCharCode(111,95,50,52,95,97,118,97,105,108,97,98,108,101,0),true ], [String.fromCharCode(115,116,101,114,101,111,100,95,50,95,50,51,0),true ]]);
    let filedg = 3;
    let fileA = 1;
    let template_4V = String.fromCharCode(105,95,55,51,95,116,115,120,0);
    let sentryQ = String.fromCharCode(115,101,112,97,114,97,116,101,95,118,95,55,0);
    let iconsubssuccess9 = 2;
    let controlso = String.fromCharCode(97,95,49,53,95,97,117,116,104,101,110,116,105,99,97,116,105,111,110,0);
    let neonG = new Map([[String.fromCharCode(116,119,105,100,100,108,101,95,103,95,51,56,0),String.fromCharCode(111,95,54,95,114,97,116,105,111,0)], [String.fromCharCode(111,98,115,101,114,118,105,110,103,95,57,95,49,48,48,0),String.fromCharCode(114,95,52,95,101,120,97,109,112,108,101,0)], [String.fromCharCode(109,95,52,57,95,114,101,115,101,116,0),String.fromCharCode(116,111,100,97,121,115,95,102,95,49,56,0)]]);
    let humidityI = 1.0;
   while (iconorientationJ.length >= 3) {
      brightnessW = new Map([[`${iconsubssuccess9}`, sentryQ.length + 2]]);
      break;
   }
      filedg &= parseInt(`${orangedownarrowl}`) / 3;

    if (data.incidents != undefined && data.incidents.length > 0) {

   if (2.77 >= (orangedownarrowl + 4.4) || (iconsubssuccess9 + orangedownarrowl) >= 4.4) {
      iconsubssuccess9 ^= fileA << (Math.min(template_4V.length, 5));
   }
      sentryQ = `${brightnessW.size}`;
      let item = data.incidents.findIndex(
        x =>
          x.type == 9 &&
          x.out_player != undefined &&
          x.out_player?.id == data.id,
      );
   for (let t = 0; t < 3; t++) {
       let headers = 3.0;
      for (let r = 0; r < 2; r++) {
         headers /= Math.max(parseFloat(`${parseInt(`${headers}`)}`), 3);
      }
      do {
          let grouph = 0;
          let libcxxcomponentsx = String.fromCharCode(114,101,107,101,121,95,99,95,52,54,0);
          let goalr = true;
         headers -= (parseFloat(`${grouph >> (Math.min(1, Math.abs((goalr ? 2 : 4))))}`));
         grouph %= Math.max(libcxxcomponentsx.length % (Math.max(libcxxcomponentsx.length, 7)), 3);
         if (914846.0 == headers) {
            break;
         }
      } while ((914846.0 == headers) && (4.51 >= (4 * headers)));
          let liveshareY = 5.0;
          let materiali = 3.0;
         headers /= Math.max(parseFloat(`${parseInt(`${materiali}`)}`), 1);
         liveshareY /= Math.max(parseInt(`${liveshareY}`), 1);
         materiali -= parseFloat(`${1 / (Math.max(3, parseInt(`${liveshareY}`)))}`);
      template_4V = "3";
   }
      iconsubssuccess9 /= Math.max((iconorientationJ == String.fromCharCode(71,0) ? template_4V.length : iconorientationJ.length), 3);

      if (item != undefined && item != -1) {

      brightnessW = new Map([[`${fileA}`, 1]]);
   do {
      fileA &= 3 - parseInt(`${orangedownarrowl}`);
      if (1745641 == fileA) {
         break;
      }
   } while ((5.20 > (1.18 - orangedownarrowl)) && (1745641 == fileA));
        subOutTime = data.incidents[item].time;
      iconorientationJ += `${brightnessW.size}`;
   for (let t = 0; t < 1; t++) {
      orangedownarrowl *= (String.fromCharCode(103,0) == sentryQ ? brightnessW.size : sentryQ.length);
   }

        return true;
      } else {

      iconsubssuccess9 ^= parseInt(`${orangedownarrowl}`) & 2;
      iconsubssuccess9 <<= Math.min(2, Math.abs(fileA | iconsubssuccess9));
        subOutTime = 0;
       let logoutU = 0.0;
       let nextC = [703, 269];
         logoutU -= parseFloat(`${nextC.length}`);
      if ((2 | nextC.length) > 1 || 2 > (parseInt(`${logoutU}`) - nextC.length)) {
         logoutU -= parseFloat(`${3}`);
      }
          let selectedF = true;
         logoutU /= Math.max(2, (parseFloat(`${nextC.length * (selectedF ? 2 : 5)}`)));
       let iconrightoranget = [String.fromCharCode(105,110,102,117,114,97,95,54,95,51,50,0), String.fromCharCode(99,111,109,112,97,110,100,95,49,95,51,56,0)];
       let blacklistx = [747, 537];
          let becomeE = String.fromCharCode(97,119,97,107,101,95,102,95,55,51,0);
          let yingr = false;
         nextC = [2 % (Math.max(3, nextC.length))];
         becomeE += `${((yingr ? 3 : 5))}`;
         yingr = !becomeE.endsWith(`${yingr}`);
      while (3 < (blacklistx.length + nextC.length)) {
         nextC.push(nextC.length);
         break;
      }
      controlso = `${fileA * 1}`;
       let refreshZ = new Map([[String.fromCharCode(108,105,115,116,95,109,95,52,50,0),471], [String.fromCharCode(102,111,99,117,115,101,100,95,117,95,52,48,0),792], [String.fromCharCode(103,95,51,55,95,99,97,110,99,101,108,97,98,108,101,0),116]]);
       let specj = new Map([[String.fromCharCode(108,97,121,111,117,116,115,95,103,95,55,54,0),343], [String.fromCharCode(105,116,113,117,101,117,101,95,56,95,57,53,0),514], [String.fromCharCode(109,112,101,103,97,117,100,105,111,116,97,98,95,105,95,50,53,0),176]]);
      do {
         specj[`${refreshZ.size}`] = 1;
         if (specj.size == 4311574) {
            break;
         }
      } while ((4 == (specj.size | refreshZ.size)) && (specj.size == 4311574));
      while (Array.from(refreshZ.values()).includes(specj.size)) {
         refreshZ[`${specj.size}`] = refreshZ.size % (Math.max(10, specj.size));
         break;
      }
         specj[`${refreshZ.size}`] = specj.size;
      for (let y = 0; y < 1; y++) {
         specj = new Map([[`${specj.size}`, 3]]);
      }
      for (let d = 0; d < 1; d++) {
         refreshZ[`${refreshZ.size}`] = specj.size;
      }
         specj = new Map([[`${refreshZ.size}`, 3]]);
      orangedownarrowl *= brightnessW.size >> (Math.min(1, Math.abs(filedg)));

        return false;
      fileA ^= controlso.length;
      filedg &= controlso.length;

      }
    }
  };

  let checkYellowCard = () => {
       let reactnavigation8 = new Map([[String.fromCharCode(109,111,100,101,99,111,115,116,115,95,56,95,57,55,0),517], [String.fromCharCode(106,95,49,51,95,116,111,111,108,98,111,120,0),36]]);
    let w_managerb = String.fromCharCode(116,114,117,115,116,95,50,95,53,0);
    let nativez = 3.0;
    let dependenciesQ = 0.0;
    let basketballplayerplaceholderI = String.fromCharCode(117,112,100,97,116,101,114,95,120,95,54,51,0);
    let crossA = 3;
    let wind_ = String.fromCharCode(101,116,104,95,117,95,54,50,0);
    let thumbnailk = true;
    let fullc = String.fromCharCode(115,109,97,99,107,101,114,95,112,95,54,0);
    let service9 = String.fromCharCode(109,98,115,116,114,105,110,103,95,106,95,52,54,0);
    let defaultfootballbgg = 2.0;
    let current6 = new Map([[String.fromCharCode(98,95,49,48,95,118,101,99,0),534], [String.fromCharCode(110,95,50,49,95,105,110,116,111,0),566], [String.fromCharCode(104,97,115,104,105,110,105,116,95,102,95,56,56,0),156]]);
    let colors7 = String.fromCharCode(105,95,53,48,95,108,111,97,100,0);
    let xvodq = String.fromCharCode(114,95,50,95,112,105,112,0);
    let nterstitialD = 3;
   do {
       let targetQ = String.fromCharCode(117,100,112,108,105,116,101,95,101,95,50,53,0);
       let reactnativeratingsb = String.fromCharCode(119,95,55,52,95,109,98,117,102,0);
       let crosst = 5;
       let agreement0 = 2.0;
      for (let e = 0; e < 1; e++) {
         targetQ += `${crosst}`;
      }
         targetQ = `${(String.fromCharCode(65,0) == targetQ ? targetQ.length : parseInt(`${agreement0}`))}`;
      while ((agreement0 - crosst) > 2.91) {
         crosst *= reactnativeratingsb.length / 2;
         break;
      }
      if ((agreement0 - parseFloat(`${crosst}`)) >= 3.30 || (crosst << (Math.min(Math.abs(1), 1))) >= 5) {
         agreement0 *= (parseFloat(`${String.fromCharCode(81,0) == reactnativeratingsb ? crosst : reactnativeratingsb.length}`));
      }
      if (crosst < 5) {
          let largeX = 4.0;
         reactnativeratingsb += `${2 - parseInt(`${largeX}`)}`;
      }
      for (let o = 0; o < 3; o++) {
          let libswresample_ = 5.0;
          let analytick = [511, 76];
          let g_unlockj = String.fromCharCode(101,110,97,98,108,101,95,54,95,51,54,0);
          let iconclosewhitewithbg6 = new Map([[String.fromCharCode(97,110,116,105,99,111,108,108,97,112,115,101,95,57,95,50,50,0),57], [String.fromCharCode(105,100,108,105,115,116,95,107,95,56,48,0),135]]);
         reactnativeratingsb += "2";
         libswresample_ += parseFloat(`${analytick.length}`);
         analytick = [3 + parseInt(`${libswresample_}`)];
         g_unlockj = `${g_unlockj.length / 2}`;
         iconclosewhitewithbg6[`${analytick.length}`] = iconclosewhitewithbg6.size;
      }
       let confirmation8 = 4;
       let iconrightorange5 = 3;
          let nodea = 1.0;
          let sharedi = String.fromCharCode(120,118,109,99,95,51,95,49,56,0);
         reactnativeratingsb = `${sharedi.length / (Math.max(2, 6))}`;
         nodea += parseFloat(`${parseInt(`${nodea}`)}`);
         sharedi += `${parseInt(`${nodea}`) * parseInt(`${nodea}`)}`;
      do {
         agreement0 += parseFloat(`${confirmation8 >> (Math.min(1, Math.abs(2)))}`);
         if (3617768.0 == agreement0) {
            break;
         }
      } while (((2.39 * agreement0) == 3.64 && 1 == (5 >> (Math.min(5, Math.abs(confirmation8))))) && (3617768.0 == agreement0));
         targetQ += `${targetQ.length}`;
         targetQ = `${reactnativeratingsb.length}`;
         confirmation8 |= parseInt(`${agreement0}`) + 1;
      crossA ^= reactnavigation8.size;
      if (crossA == 2203500) {
         break;
      }
   } while ((crossA == 2203500) && (3 > (3 - wind_.length)));
   for (let h = 0; h < 1; h++) {
      w_managerb += `${(String.fromCharCode(112,0) == w_managerb ? reactnavigation8.size : w_managerb.length)}`;
   }
      crossA += parseInt(`${dependenciesQ}`) % 1;
      dependenciesQ += parseInt(`${nativez}`);

    if (data.incidents != undefined && data.incidents.length > 0) {

      service9 = `${1 >> (Math.min(Math.abs(parseInt(`${dependenciesQ}`)), 5))}`;
   for (let i = 0; i < 1; i++) {
      fullc = `${(w_managerb == String.fromCharCode(51,0) ? parseInt(`${nativez}`) : w_managerb.length)}`;
   }
      fullc += `${3 & w_managerb.length}`;
   if (fullc.length <= 5 && wind_ != String.fromCharCode(99,0)) {
       let annerE = String.fromCharCode(112,95,49,49,95,98,108,111,98,0);
       let downloadx = 5;
      for (let t = 0; t < 2; t++) {
         downloadx ^= annerE.length | 2;
      }
         downloadx -= downloadx;
      while ((downloadx - 5) == 5 || (downloadx - 5) == 1) {
         downloadx *= 2 | annerE.length;
         break;
      }
         downloadx -= downloadx & annerE.length;
         annerE += `${(annerE == String.fromCharCode(109,0) ? annerE.length : downloadx)}`;
         annerE += `${3 / (Math.max(7, downloadx))}`;
      fullc += `${basketballplayerplaceholderI.length}`;
   }
      let item = data.incidents.findIndex(
        x => x.type == 3 && x.player != undefined && x.player?.id == data.id,
      );
      reactnavigation8 = new Map([[service9, 1]]);
      fullc += `${1 | parseInt(`${nativez}`)}`;
       let turndown0 = String.fromCharCode(116,95,51,57,95,116,101,109,112,102,105,108,101,0);
       let libfileW = new Map([[String.fromCharCode(110,111,110,99,111,110,116,97,99,116,95,122,95,56,0),269], [String.fromCharCode(111,95,55,56,95,115,116,114,101,97,109,105,100,0),440]]);
         libfileW = new Map([[`${libfileW.size}`, 1]]);
         libfileW = new Map([[`${libfileW.size}`, libfileW.size]]);
      if (!turndown0.startsWith(`${libfileW.size}`)) {
          let showlesse = String.fromCharCode(110,95,52,56,95,102,108,118,101,110,99,0);
          let shirt8 = [String.fromCharCode(103,95,50,48,95,114,98,115,112,0), String.fromCharCode(112,104,114,97,115,101,115,95,107,95,57,48,0)];
          let alertJ = [543, 488, 780];
         libfileW[`${showlesse}`] = libfileW.size;
         showlesse += `${alertJ.length % (Math.max(3, 10))}`;
         shirt8.push(shirt8.length | 3);
         alertJ.push(1);
      }
      while (turndown0.length >= 4) {
         turndown0 += `${turndown0.length}`;
         break;
      }
          let telegramN = 0.0;
         libfileW = new Map([[`${libfileW.size}`, (String.fromCharCode(48,0) == turndown0 ? turndown0.length : libfileW.size)]]);
         telegramN *= parseInt(`${telegramN}`) ^ 2;
          let refreshborderless4 = 3;
          let smallb = new Map([[String.fromCharCode(99,95,55,51,95,100,111,110,110,97,0),true ], [String.fromCharCode(101,120,97,99,116,108,121,95,115,95,51,56,0),true ]]);
         libfileW = new Map([[`${smallb.size}`, 1]]);
         refreshborderless4 *= refreshborderless4 - refreshborderless4;
         smallb[`${refreshborderless4}`] = refreshborderless4;
      wind_ += "2";
      reactnavigation8 = new Map([[fullc, parseInt(`${defaultfootballbgg}`)]]);

      if (item != undefined && item != -1) {

      fullc = "1";
       let storeh = String.fromCharCode(105,95,53,55,95,110,116,101,114,110,97,108,0);
       let backV = [97, 553];
       let historyX = new Map([[String.fromCharCode(121,95,50,56,0),227], [String.fromCharCode(106,95,55,50,95,118,112,108,112,102,0),366]]);
      do {
         backV = [(storeh == String.fromCharCode(116,0) ? backV.length : storeh.length)];
         if (backV.length == 1923630) {
            break;
         }
      } while ((4 > backV.length) && (backV.length == 1923630));
      if (!storeh.startsWith(`${backV.length}`)) {
          let libswresamplej = [523, 482, 700];
          let iconstarn = 0.0;
          let baselinel = 1.0;
         backV.push(storeh.length);
         libswresamplej.push(parseInt(`${baselinel}`));
         iconstarn /= Math.max(4, libswresamplej.length / 3);
      }
         backV = [storeh.length];
      for (let d = 0; d < 2; d++) {
         backV.push(storeh.length);
      }
      do {
          let package_rX = new Map([[String.fromCharCode(114,95,56,53,95,98,97,114,107,0),600], [String.fromCharCode(122,95,53,57,95,114,97,100,102,103,0),139]]);
          let fullscreenmaxf = 1;
         backV.push((storeh == String.fromCharCode(113,0) ? storeh.length : backV.length));
         package_rX = new Map([[`${package_rX.size}`, fullscreenmaxf]]);
         fullscreenmaxf ^= package_rX.size;
         if (backV.length == 903551) {
            break;
         }
      } while ((2 < (historyX.size % (Math.max(3, 3)))) && (backV.length == 903551));
       let predictionbanner8 = 2.0;
         storeh = `${2 & backV.length}`;
          let vietnamr = String.fromCharCode(119,95,56,50,95,117,110,109,97,116,99,104,101,100,0);
          let grayX = true;
         backV.push(historyX.size % 2);
         vietnamr = `${((grayX ? 4 : 1) / 2)}`;
         grayX = vietnamr.length <= 22;
      if (1 <= storeh.length) {
         predictionbanner8 *= parseFloat(`${parseInt(`${predictionbanner8}`)}`);
      }
      basketballplayerplaceholderI = `${parseInt(`${nativez}`) / (Math.max(1, 3))}`;
   if (parseInt(`${nativez}`) > service9.length) {
      nativez /= Math.max(5, (parseFloat(`${service9 == String.fromCharCode(53,0) ? parseInt(`${dependenciesQ}`) : service9.length}`)));
   }
   while (w_managerb.startsWith(wind_)) {
       let iconsaveimageL = String.fromCharCode(99,99,105,112,95,118,95,54,52,0);
       let minimizer = String.fromCharCode(109,95,49,54,95,115,117,112,112,108,101,109,101,110,116,97,108,0);
       let guideZ = String.fromCharCode(111,115,116,114,101,97,109,119,114,97,112,112,101,114,95,56,95,56,51,0);
       let type_ez = false;
       let iconsaveimageP = [596, 555];
       let signinupD = [544, 242, 801];
         guideZ += `${(3 % (Math.max(4, (type_ez ? 3 : 3))))}`;
      for (let c = 0; c < 2; c++) {
         iconsaveimageL = `${minimizer.length}`;
      }
         signinupD = [(String.fromCharCode(101,0) == iconsaveimageL ? iconsaveimageL.length : minimizer.length)];
          let heartW = String.fromCharCode(108,95,49,95,100,101,99,111,117,112,108,101,0);
          let playY = 3.0;
         minimizer += "3";
         heartW += `${heartW.length}`;
         playY /= Math.max(parseFloat(`${parseInt(`${playY}`) | 1}`), 1);
      do {
         minimizer = `${(2 ^ (type_ez ? 1 : 4))}`;
         if (minimizer == String.fromCharCode(119,105,114,118,53,98,119,107,57,112,0)) {
            break;
         }
      } while ((minimizer == String.fromCharCode(119,105,114,118,53,98,119,107,57,112,0)) && (minimizer.length <= 1));
      while (guideZ.length < minimizer.length) {
         minimizer = "3";
         break;
      }
         minimizer += `${iconsaveimageL.length}`;
      w_managerb = `${fullc.length % 3}`;
      break;
   }
        return true;
      } else {

      nativez -= parseFloat(`${wind_.length}`);
   do {
      defaultfootballbgg -= (String.fromCharCode(79,0) == w_managerb ? fullc.length : w_managerb.length);
      if (defaultfootballbgg == 3081896.0) {
         break;
      }
   } while ((3 < (2 - service9.length) || (service9.length % (Math.max(2, 8))) < 4) && (defaultfootballbgg == 3081896.0));
       let codegenK = String.fromCharCode(104,95,50,50,95,115,101,97,114,99,104,0);
       let referrerK = new Map([[String.fromCharCode(111,117,116,115,105,100,101,95,107,95,49,53,0),653], [String.fromCharCode(112,111,115,108,105,115,116,95,53,95,50,48,0),693]]);
       let configM = false;
       let iconwatchU = true;
      do {
         configM = !codegenK.startsWith(`${configM}`);
         if (configM ? !configM : configM) {
            break;
         }
      } while ((configM ? !configM : configM) && (referrerK.size <= 5 || (referrerK.size & 5) <= 2));
       let tempnodata5 = false;
          let iconschedule2 = String.fromCharCode(117,95,49,49,95,112,101,111,112,108,101,0);
          let iconwechatt = 2.0;
          let friendsr = String.fromCharCode(115,116,121,108,101,115,95,105,95,53,52,0);
         referrerK = new Map([[`${iconwatchU}`, ((tempnodata5 ? 3 : 2) - 2)]]);
         iconschedule2 = `${1 ^ friendsr.length}`;
         iconwechatt += parseFloat(`${2}`);
         friendsr += "2";
      if ((5 * referrerK.size) > 4) {
         referrerK[`${tempnodata5}`] = ((configM ? 1 : 5));
      }
      do {
          let strings6 = String.fromCharCode(109,95,49,51,95,116,111,108,111,119,101,114,0);
          let gradlef = new Map([[String.fromCharCode(101,95,50,48,95,115,97,108,116,0),273], [String.fromCharCode(117,112,100,97,116,97,98,108,101,95,121,95,57,55,0),258]]);
         iconwatchU = null == referrerK[`${configM}`];
         strings6 = "1";
         gradlef[`${strings6}`] = gradlef.size;
         if (iconwatchU ? !iconwatchU : iconwatchU) {
            break;
         }
      } while ((configM) && (iconwatchU ? !iconwatchU : iconwatchU));
      service9 += `${crossA}`;
       let trophyM = new Map([[String.fromCharCode(114,95,54,57,0),111], [String.fromCharCode(100,105,97,108,108,105,110,103,95,120,95,57,52,0),371], [String.fromCharCode(116,95,51,48,95,114,117,98,121,0),727]]);
       let rightn = String.fromCharCode(109,95,57,54,95,115,99,114,111,108,108,105,110,103,0);
         trophyM[rightn] = trophyM.size - 3;
         rightn = `${1 / (Math.max(1, rightn.length))}`;
      if (1 > (3 - trophyM.size) && 4 > (rightn.length - 3)) {
         rightn = `${(String.fromCharCode(52,0) == rightn ? trophyM.size : rightn.length)}`;
      }
      do {
          let sidez = 3.0;
          let internetm = new Map([[String.fromCharCode(115,95,57,56,95,114,103,98,116,111,0),666], [String.fromCharCode(122,95,55,56,95,112,97,100,0),939], [String.fromCharCode(112,108,117,114,97,108,105,122,101,100,95,105,95,53,53,0),664]]);
          let topicz = 3.0;
          let goallogoE = String.fromCharCode(114,97,105,115,101,95,100,95,56,57,0);
         rightn = `${trophyM.size * 2}`;
         sidez += parseFloat(`${parseInt(`${topicz}`)}`);
         internetm[goallogoE] = goallogoE.length;
         topicz *= parseFloat(`${parseInt(`${sidez}`)}`);
         if (1517708 == rightn.length) {
            break;
         }
      } while (((trophyM.size % 1) <= 5 && 1 <= (rightn.length % (Math.max(3, trophyM.size)))) && (1517708 == rightn.length));
      for (let w = 0; w < 1; w++) {
          let windU = 1.0;
          let yellowscoreballr = String.fromCharCode(117,95,49,56,95,115,117,109,0);
          let confirmationo = new Map([[String.fromCharCode(117,95,51,56,0),String.fromCharCode(108,95,50,50,95,97,109,114,119,98,100,101,99,0)], [String.fromCharCode(99,98,99,114,95,53,95,56,0),String.fromCharCode(104,95,55,57,95,99,117,114,118,101,115,0)], [String.fromCharCode(115,117,112,101,114,118,105,101,119,95,116,95,54,51,0),String.fromCharCode(115,95,53,51,95,119,104,105,116,101,115,112,97,99,101,115,0)]]);
         rightn += `${confirmationo.size ^ 1}`;
         windU /= Math.max(3, parseFloat(`${yellowscoreballr.length % (Math.max(3, 6))}`));
         yellowscoreballr += "3";
         confirmationo = new Map([[yellowscoreballr, yellowscoreballr.length]]);
      }
      if ((rightn.length ^ 4) > 3) {
         trophyM = new Map([[`${trophyM.size}`, 1]]);
      }
      wind_ = `${3 / (Math.max(10, trophyM.size))}`;
        return false;
       let libreactnativejniu = new Map([[String.fromCharCode(111,95,49,54,95,111,117,116,0),String.fromCharCode(97,101,97,100,95,57,95,57,55,0)], [String.fromCharCode(99,108,111,117,100,102,108,97,114,101,95,56,95,56,48,0),String.fromCharCode(121,95,51,95,97,100,97,112,116,111,114,0)], [String.fromCharCode(112,114,111,109,111,116,101,100,95,102,95,51,53,0),String.fromCharCode(120,95,57,54,95,100,101,112,101,110,100,0)]]);
       let roundC = String.fromCharCode(105,95,56,51,95,116,105,109,101,115,99,97,108,101,0);
       let mimey = String.fromCharCode(100,95,54,57,95,109,97,115,116,101,114,0);
      while (roundC.startsWith(`${libreactnativejniu.size}`)) {
         roundC += `${(mimey == String.fromCharCode(118,0) ? libreactnativejniu.size : mimey.length)}`;
         break;
      }
       let lessA = String.fromCharCode(121,95,55,57,95,99,111,110,116,111,117,114,0);
          let guideO = String.fromCharCode(97,95,54,50,95,119,115,118,113,97,0);
          let greyarrowupL = new Map([[String.fromCharCode(99,111,110,116,101,120,116,117,97,108,95,112,95,57,55,0),177], [String.fromCharCode(114,101,99,111,114,100,105,110,103,99,111,110,110,95,118,95,54,51,0),358], [String.fromCharCode(103,95,54,50,95,99,97,110,116,0),851]]);
         roundC = `${guideO.length}`;
         guideO += `${3 - greyarrowupL.size}`;
         greyarrowupL = new Map([[`${greyarrowupL.size}`, greyarrowupL.size * greyarrowupL.size]]);
         mimey = `${lessA.length}`;
         lessA = `${1 * roundC.length}`;
         roundC = `${roundC.length}`;
      do {
          let handleru = String.fromCharCode(112,95,52,53,95,110,97,110,111,112,98,0);
         libreactnativejniu = new Map([[handleru, handleru.length]]);
         if (79476 == libreactnativejniu.size) {
            break;
         }
      } while ((79476 == libreactnativejniu.size) && (libreactnativejniu.size >= roundC.length));
       let s_counta = [186, 990];
       let sharedX = [607, 164, 823];
      for (let t = 0; t < 2; t++) {
         mimey = `${1 % (Math.max(6, roundC.length))}`;
      }
      dependenciesQ /= Math.max(1, roundC.length >> (Math.min(2, Math.abs(parseInt(`${dependenciesQ}`)))));
       let bootsplashI = String.fromCharCode(115,95,50,53,95,97,115,115,105,103,110,109,101,110,116,0);
       let leakcheckerS = String.fromCharCode(112,111,115,115,105,98,108,121,95,112,95,54,50,0);
       let libcxxcomponentsS = 3;
          let libruntimeexecutorY = [550, 295, 517];
         leakcheckerS = "1";
         libruntimeexecutorY.push(1);
      for (let g = 0; g < 2; g++) {
         libcxxcomponentsS -= leakcheckerS.length;
      }
      if (libcxxcomponentsS >= 1) {
         libcxxcomponentsS /= Math.max(bootsplashI.length + 2, 1);
      }
      while (bootsplashI == leakcheckerS) {
         leakcheckerS = `${(String.fromCharCode(118,0) == leakcheckerS ? bootsplashI.length : leakcheckerS.length)}`;
         break;
      }
         libcxxcomponentsS %= Math.max(1, leakcheckerS.length << (Math.min(2, bootsplashI.length)));
      while (!leakcheckerS.includes(`${libcxxcomponentsS}`)) {
          let bufferB = String.fromCharCode(107,95,53,55,95,97,115,99,101,110,100,101,114,0);
          let libavutil1 = new Map([[String.fromCharCode(111,95,56,57,95,118,111,105,99,101,0),979], [String.fromCharCode(97,110,100,95,48,95,55,48,0),857]]);
         libcxxcomponentsS |= 3;
         bufferB += `${3 >> (Math.min(3, Math.abs(libavutil1.size)))}`;
         libavutil1[`${bufferB}`] = (String.fromCharCode(53,0) == bufferB ? libavutil1.size : bufferB.length);
         break;
      }
      while (4 < (libcxxcomponentsS >> (Math.min(leakcheckerS.length, 1)))) {
         libcxxcomponentsS ^= bootsplashI.length;
         break;
      }
         bootsplashI += `${bootsplashI.length << (Math.min(3, Math.abs(libcxxcomponentsS)))}`;
       let iconarrowrightwhite7 = false;
       let taiwanb = false;
      wind_ += `${reactnavigation8.size}`;
   do {
      reactnavigation8[`${nativez}`] = wind_.length / 3;
      if (reactnavigation8.size == 2867948) {
         break;
      }
   } while ((dependenciesQ <= 1.82) && (reactnavigation8.size == 2867948));
   do {
       let librrc1 = 3;
         librrc1 ^= librrc1;
      if (4 <= librrc1) {
          let librrcq = String.fromCharCode(112,95,50,56,95,119,105,110,100,111,119,115,0);
          let acceptedx = new Map([[String.fromCharCode(114,101,115,99,97,108,101,95,97,95,49,51,0),943], [String.fromCharCode(99,117,115,116,111,109,105,122,101,114,95,56,95,50,55,0),58], [String.fromCharCode(116,105,109,101,122,111,110,101,95,119,95,50,52,0),197]]);
          let libfile1 = String.fromCharCode(103,95,51,51,95,99,111,109,112,111,117,110,100,0);
         librrc1 /= Math.max(3, acceptedx.size + librrcq.length);
         librrcq = `${libfile1.length & 1}`;
         acceptedx[libfile1] = libfile1.length;
      }
         librrc1 *= librrc1;
      dependenciesQ *= parseInt(`${nativez}`) % (Math.max(5, librrc1));
      if (3498637.0 == dependenciesQ) {
         break;
      }
   } while ((3498637.0 == dependenciesQ) && ((dependenciesQ + 2.95) > 2.42));

      }
    }
  };

  let checkRedCard = () => {
       let floatingu = new Map([[String.fromCharCode(120,95,51,49,95,101,120,112,97,110,100,101,100,0),String.fromCharCode(105,95,53,48,95,114,100,106,112,103,99,111,109,0)], [String.fromCharCode(97,110,109,114,95,102,95,53,57,0),String.fromCharCode(103,101,116,115,105,103,99,116,120,110,111,95,98,95,56,0)]]);
    let downY = 0.0;
    let iconpipexpandR = 3.0;
    let teamF = 4;
    let pangleF = 0.0;
    let reminderE = 4.0;
    let selectp = [388, 844];
    let manifest9 = String.fromCharCode(122,117,108,117,95,53,95,52,55,0);
    let modityr = 3.0;
    let phoneshare_ = 2;
    let gesturesc = 3;
    let iconclosewhitebgD = String.fromCharCode(104,95,52,52,95,105,100,97,115,115,101,116,115,0);
    let condensedA = String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,95,52,95,57,54,0);
    let images3 = 4.0;
    let placementi = String.fromCharCode(115,112,101,99,105,102,105,101,114,115,95,53,95,50,56,0);
    let fille = false;
       let eighteenb = 4.0;
      if (2.31 == (eighteenb / (Math.max(5.4, 8))) && 5.4 == (eighteenb / (Math.max(2, eighteenb)))) {
         eighteenb /= Math.max(3, parseFloat(`${parseInt(`${eighteenb}`) * parseInt(`${eighteenb}`)}`));
      }
          let imagenetworkerrM = 1.0;
          let specr = true;
         eighteenb *= parseFloat(`${3 & parseInt(`${eighteenb}`)}`);
         imagenetworkerrM += parseFloat(`${2 ^ parseInt(`${imagenetworkerrM}`)}`);
         specr = imagenetworkerrM < 75.24;
         eighteenb -= parseFloat(`${parseInt(`${eighteenb}`) ^ 2}`);
      teamF += iconclosewhitebgD.length | 3;
      floatingu = new Map([[`${downY}`, parseInt(`${downY}`)]]);
   for (let l = 0; l < 2; l++) {
       let libhermes6 = new Map([[String.fromCharCode(106,95,54,52,95,114,101,109,97,112,112,105,110,103,0),414], [String.fromCharCode(114,95,49,48,95,115,98,97,100,0),672]]);
       let librrcr = new Map([[String.fromCharCode(97,95,49,48,48,95,97,115,102,99,114,121,112,116,0),false ], [String.fromCharCode(115,95,57,50,95,97,97,99,116,97,98,0),false ]]);
         libhermes6 = new Map([[`${librrcr.size}`, librrcr.size]]);
          let libcrashsdky = 1.0;
          let friends4 = String.fromCharCode(114,95,54,52,95,101,98,109,108,0);
          let styleb = [String.fromCharCode(117,110,111,114,100,101,114,101,100,95,110,95,49,52,0), String.fromCharCode(109,95,54,53,95,98,101,103,97,110,0), String.fromCharCode(113,95,50,95,114,97,98,105,110,0)];
         librrcr[`${libcrashsdky}`] = libhermes6.size ^ parseInt(`${libcrashsdky}`);
         friends4 += `${2 & friends4.length}`;
         styleb = [1];
         librrcr = new Map([[`${libhermes6.size}`, 2]]);
         librrcr[`${librrcr.size}`] = libhermes6.size ^ 3;
      if (3 <= libhermes6.size) {
          let weiboy = 0.0;
          let panglec = String.fromCharCode(99,95,52,56,95,112,114,101,115,101,110,116,0);
          let nterstitialj = String.fromCharCode(118,95,50,54,95,112,101,114,105,111,100,105,99,0);
          let profileactiveD = true;
          let mergerN = 5.0;
         libhermes6 = new Map([[`${libhermes6.size}`, parseInt(`${weiboy}`)]]);
         weiboy *= (parseFloat(`${panglec == String.fromCharCode(81,0) ? nterstitialj.length : panglec.length}`));
         nterstitialj += `${panglec.length}`;
         profileactiveD = String.fromCharCode(81,0) == panglec && 78.32 < mergerN;
         mergerN += ((profileactiveD ? 3 : 3) | 3);
      }
         librrcr = new Map([[`${libhermes6.size}`, libhermes6.size]]);
      manifest9 += `${parseInt(`${pangleF}`)}`;
   }
      iconpipexpandR *= parseFloat(`${gesturesc}`);

    if (data.incidents != undefined && data.incidents.length > 0) {

   do {
      gesturesc <<= Math.min(1, Math.abs(parseInt(`${reminderE}`)));
      if (gesturesc == 4624705) {
         break;
      }
   } while ((gesturesc == 4624705) && (floatingu[`${gesturesc}`] == null));
   while (selectp.length == 5) {
      selectp = [selectp.length];
      break;
   }
      phoneshare_ += iconclosewhitebgD.length - parseInt(`${modityr}`);
   if ((iconclosewhitebgD.length / (Math.max(3, 3))) >= 3 && 4.57 >= (reminderE / (Math.max(parseFloat(`${iconclosewhitebgD.length}`), 8)))) {
      reminderE *= parseFloat(`${parseInt(`${downY}`)}`);
   }
      let item = data.incidents.findIndex(
        x => x.type == 4 && x.player != undefined && x.player?.id == data.id,
      );
   do {
      teamF ^= 2;
      if (1383921 == teamF) {
         break;
      }
   } while ((1383921 == teamF) && (3 > (teamF % (Math.max(2, gesturesc))) || 3 > (teamF % (Math.max(9, gesturesc)))));
   for (let i = 0; i < 3; i++) {
       let libjsijniprofilerm = String.fromCharCode(115,111,102,116,119,97,114,101,95,50,95,50,49,0);
       let volumeo = String.fromCharCode(115,117,98,115,101,108,101,99,116,95,115,95,50,48,0);
       let subin_ = false;
       let pathG = String.fromCharCode(106,95,55,54,95,112,111,115,116,0);
      if (libjsijniprofilerm == String.fromCharCode(105,0)) {
         pathG = `${volumeo.length + 3}`;
      }
      while (!pathG.endsWith(`${subin_}`)) {
         pathG = `${1 * libjsijniprofilerm.length}`;
         break;
      }
         libjsijniprofilerm = "3";
         volumeo = `${libjsijniprofilerm.length - 3}`;
      do {
         volumeo = `${libjsijniprofilerm.length << (Math.min(5, pathG.length))}`;
         if (String.fromCharCode(48,120,105,52,110,99,0) == volumeo) {
            break;
         }
      } while ((libjsijniprofilerm != String.fromCharCode(77,0)) && (String.fromCharCode(48,120,105,52,110,99,0) == volumeo));
         volumeo += `${libjsijniprofilerm.length}`;
          let yellowtorede = 3;
          let encryptore = 2.0;
          let teamdetailsbgm = String.fromCharCode(99,111,114,114,117,112,116,101,100,95,49,95,57,55,0);
         subin_ = !teamdetailsbgm.includes(`${encryptore}`);
         yellowtorede *= yellowtorede >> (Math.min(Math.abs(2), 4));
         encryptore += yellowtorede;
          let nbatrophyW = 4.0;
         pathG = `${libjsijniprofilerm.length << (Math.min(Math.abs(2), 4))}`;
         nbatrophyW *= parseFloat(`${parseInt(`${nbatrophyW}`)}`);
      for (let q = 0; q < 3; q++) {
         pathG = `${volumeo.length << (Math.min(Math.abs(3), 4))}`;
      }
       let libruntimeexecutor0 = String.fromCharCode(98,105,116,114,101,97,100,101,114,95,104,95,56,55,0);
       let sellmathbackground6 = String.fromCharCode(119,104,105,116,101,115,112,97,99,101,95,51,95,52,57,0);
         sellmathbackground6 += `${(String.fromCharCode(77,0) == pathG ? volumeo.length : pathG.length)}`;
      if (4 <= sellmathbackground6.length) {
          let debugs = 5.0;
          let foundA = 5.0;
          let private_goJ = 4.0;
          let uimanagerg = String.fromCharCode(110,95,56,56,95,116,114,117,101,109,111,116,105,111,110,0);
         sellmathbackground6 += `${libjsijniprofilerm.length}`;
         debugs -= parseInt(`${private_goJ}`);
         foundA *= (parseFloat(`${String.fromCharCode(90,0) == uimanagerg ? parseInt(`${private_goJ}`) : uimanagerg.length}`));
      }
      selectp.push(1);
   }
       let awayZ = 4.0;
       let carouselz = true;
         carouselz = 84.67 > awayZ;
      do {
         carouselz = !carouselz;
         if (carouselz ? !carouselz : carouselz) {
            break;
         }
      } while ((awayZ == 4.15 || (awayZ * 4.15) == 2.10) && (carouselz ? !carouselz : carouselz));
         awayZ -= parseInt(`${awayZ}`) / 1;
      while ((1.39 + awayZ) <= 5.32) {
         awayZ *= 2 + parseInt(`${awayZ}`);
         break;
      }
       let description_hL = 3.0;
      for (let f = 0; f < 1; f++) {
         description_hL -= parseInt(`${awayZ}`) & 3;
      }
      phoneshare_ *= (iconclosewhitebgD == String.fromCharCode(108,0) ? parseInt(`${iconpipexpandR}`) : iconclosewhitebgD.length);
   for (let l = 0; l < 2; l++) {
      pangleF /= Math.max(4, parseFloat(`${3}`));
   }

      if (item != undefined && item != -1) {

       let homeicond = 1.0;
       let heartj = String.fromCharCode(116,114,97,110,115,102,111,114,109,101,100,95,115,95,49,57,0);
         homeicond *= parseFloat(`${parseInt(`${homeicond}`) >> (Math.min(heartj.length, 1))}`);
         homeicond /= Math.max(parseFloat(`${heartj.length & parseInt(`${homeicond}`)}`), 3);
      while ((heartj.length | 3) == 5 || (homeicond / (Math.max(1.99, 2))) == 1.46) {
          let libavdevicee = true;
          let vipsportG = [800, 368, 525];
         homeicond /= Math.max(1, (parseFloat(`${String.fromCharCode(87,0) == heartj ? heartj.length : (libavdevicee ? 2 : 5)}`)));
         libavdevicee = (vipsportG.length % (Math.max(10, vipsportG.length))) > 71;
         break;
      }
      do {
          let expiredA = String.fromCharCode(115,95,50,53,95,105,99,111,110,0);
          let orangeuparrow4 = String.fromCharCode(119,95,52,49,95,112,114,101,115,101,110,116,101,114,0);
          let actionm = true;
         homeicond /= Math.max(2, (parseFloat(`${orangeuparrow4 == String.fromCharCode(86,0) ? orangeuparrow4.length : (actionm ? 1 : 1)}`)));
         expiredA += `${expiredA.length}`;
         if (3578669.0 == homeicond) {
            break;
         }
      } while (((homeicond - 1.46) >= 4.6) && (3578669.0 == homeicond));
      if ((2 >> (Math.min(3, heartj.length))) == 2) {
          let videovara = 2;
         heartj = `${videovara ^ 2}`;
      }
      for (let c = 0; c < 1; c++) {
          let subbasketballplayerC = String.fromCharCode(110,119,105,115,101,95,54,95,53,0);
          let iconarrowrightU = String.fromCharCode(99,100,110,95,52,95,49,48,0);
         homeicond += parseFloat(`${1}`);
         subbasketballplayerC += `${iconarrowrightU.length}`;
         iconarrowrightU += `${(iconarrowrightU == String.fromCharCode(56,0) ? iconarrowrightU.length : subbasketballplayerC.length)}`;
      }
      phoneshare_ *= parseInt(`${modityr}`) - 2;
      iconpipexpandR *= parseFloat(`${gesturesc}`);
   for (let j = 0; j < 3; j++) {
      selectp.push(phoneshare_);
   }
      manifest9 = `${parseInt(`${iconpipexpandR}`) % (Math.max(7, teamF))}`;
        return true;
      } else {

      pangleF /= Math.max(parseFloat(`${iconclosewhitebgD.length << (Math.min(2, Math.abs(parseInt(`${reminderE}`))))}`), 4);
      downY *= 1 >> (Math.min(4, iconclosewhitebgD.length));
      gesturesc *= parseInt(`${modityr}`);
   for (let j = 0; j < 1; j++) {
      phoneshare_ %= Math.max(5, parseInt(`${pangleF}`));
   }
        return false;
      reminderE *= parseFloat(`${3 ^ teamF}`);
      modityr /= Math.max(5, parseFloat(`${parseInt(`${pangleF}`) >> (Math.min(iconclosewhitebgD.length, 4))}`));
   for (let d = 0; d < 2; d++) {
      gesturesc /= Math.max(gesturesc << (Math.min(Math.abs(1), 4)), 4);
   }
      floatingu[`${iconclosewhitebgD}`] = 1;

      }
    }
  };

  let checkYellowToRedCard = () => {
       let textlayoutmanagerG = false;
    let elements7 = false;
    let iconlogoutU = String.fromCharCode(109,117,108,116,105,99,111,100,101,99,95,97,95,57,0);
    let qaagv = 3.0;
    let thumbnail3 = String.fromCharCode(113,95,56,48,95,115,111,99,107,101,116,115,0);
    let utilsN = String.fromCharCode(110,111,110,110,117,108,108,111,117,116,95,103,95,52,56,0);
    let delegate_pz = String.fromCharCode(109,102,104,100,95,49,95,57,48,0);
    let closeb = String.fromCharCode(119,95,51,54,95,114,101,99,111,103,110,105,122,101,100,0);
    let customC = String.fromCharCode(111,95,51,50,95,101,109,117,108,97,116,101,100,0);
    let baidu0 = new Map([[String.fromCharCode(109,97,116,114,105,120,101,110,99,95,102,95,54,49,0),743], [String.fromCharCode(115,97,110,101,95,121,95,50,49,0),247], [String.fromCharCode(122,95,55,49,95,121,115,108,111,103,0),696]]);
   while (!textlayoutmanagerG && !elements7) {
      textlayoutmanagerG = 94 < closeb.length;
      break;
   }
   if (3 >= delegate_pz.length) {
      delegate_pz = "3";
   }
      utilsN = `${(iconlogoutU == String.fromCharCode(77,0) ? (elements7 ? 1 : 1) : iconlogoutU.length)}`;

    if (data.incidents != undefined && data.incidents.length > 0) {

      utilsN = `${((textlayoutmanagerG ? 2 : 2) + (elements7 ? 4 : 1))}`;
       let zhengpianW = String.fromCharCode(99,111,110,118,101,114,116,101,114,95,49,95,51,52,0);
       let libyogaD = String.fromCharCode(104,105,103,104,108,105,103,104,116,97,98,108,101,95,54,95,51,55,0);
      if (!zhengpianW.includes(`${libyogaD.length}`)) {
         libyogaD = `${libyogaD.length | zhengpianW.length}`;
      }
          let basketballiconN = String.fromCharCode(102,95,56,52,95,116,104,117,109,98,115,117,112,0);
         libyogaD = `${3 >> (Math.min(2, libyogaD.length))}`;
         basketballiconN += `${basketballiconN.length}`;
      while (libyogaD != String.fromCharCode(50,0)) {
         zhengpianW = `${zhengpianW.length << (Math.min(Math.abs(1), 1))}`;
         break;
      }
         libyogaD = `${libyogaD.length}`;
         libyogaD = `${2 % (Math.max(4, zhengpianW.length))}`;
      do {
         zhengpianW = `${zhengpianW.length << (Math.min(1, libyogaD.length))}`;
         if (zhengpianW.length == 2496376) {
            break;
         }
      } while ((zhengpianW.length == 2496376) && (!libyogaD.endsWith(zhengpianW)));
      elements7 = zhengpianW == String.fromCharCode(100,0);
   if (!closeb.includes(thumbnail3)) {
      thumbnail3 += `${((textlayoutmanagerG ? 4 : 2))}`;
   }
      let item = data.incidents.findIndex(
        x => x.type == 15 && x.player != undefined && x.player?.id == data.id,
      );
   while (delegate_pz.length > 5 || !textlayoutmanagerG) {
      delegate_pz += `${thumbnail3.length}`;
      break;
   }
      textlayoutmanagerG = utilsN.length >= baidu0.size;
       let iconfeedback3 = 4;
       let mini9 = 4;
       let dependencyE = 5.0;
       let favoritew = String.fromCharCode(100,111,119,110,108,111,97,100,95,99,95,55,52,0);
      closeb += `${closeb.length % 1}`;
      iconfeedback3 *= iconfeedback3 % 2;

      if (item != undefined && item != -1) {

      iconlogoutU = `${parseInt(`${qaagv}`)}`;
       let predictionbannersharedw = 1.0;
       let half4 = true;
         predictionbannersharedw *= 3 / (Math.max(parseInt(`${predictionbannersharedw}`), 6));
      do {
         predictionbannersharedw *= ((half4 ? 5 : 4) << (Math.min(Math.abs(parseInt(`${predictionbannersharedw}`)), 5)));
         if (predictionbannersharedw == 2342061.0) {
            break;
         }
      } while ((!half4) && (predictionbannersharedw == 2342061.0));
         half4 = !half4 || predictionbannersharedw > 82.32;
         predictionbannersharedw -= parseInt(`${predictionbannersharedw}`) / 1;
       let libreactnativeblobH = 4.0;
       let panglex = 3.0;
      do {
         libreactnativeblobH *= parseInt(`${libreactnativeblobH}`) | 3;
         if (2863690.0 == libreactnativeblobH) {
            break;
         }
      } while (((predictionbannersharedw - libreactnativeblobH) <= 1.95) && (2863690.0 == libreactnativeblobH));
      qaagv /= Math.max(closeb.length, 3);
      iconlogoutU = `${((textlayoutmanagerG ? 1 : 3))}`;
        return true;
      } else {

   for (let k = 0; k < 1; k++) {
      customC += "1";
   }
       let filei = 5.0;
      if (2.28 > (2.51 - filei) && 2.51 > (filei - filei)) {
         filei -= parseFloat(`${3 - parseInt(`${filei}`)}`);
      }
      do {
         filei -= parseFloat(`${3}`);
         if (1671933.0 == filei) {
            break;
         }
      } while ((1671933.0 == filei) && (filei < filei));
          let scorej = String.fromCharCode(108,111,111,107,95,48,95,54,0);
          let brightnessV = 0.0;
          let line2 = true;
         filei -= parseFloat(`${parseInt(`${brightnessV}`) * 1}`);
         scorej += `${((line2 ? 1 : 3) + 2)}`;
         brightnessV -= parseFloat(`${scorej.length}`);
      closeb = `${iconlogoutU.length - 3}`;
      customC = `${((elements7 ? 4 : 5) & 2)}`;
        return false;
   do {
      elements7 = !elements7;
      if (elements7 ? !elements7 : elements7) {
         break;
      }
   } while ((elements7 ? !elements7 : elements7) && (elements7));
   if (!closeb.endsWith(`${textlayoutmanagerG}`)) {
      closeb = `${delegate_pz.length + 1}`;
   }
      utilsN += "1";

      }
    }
  };

  let checkGoal = () => {
       let valuesc = [515, 762];
    let turndownc = new Map([[String.fromCharCode(118,95,55,48,95,101,115,100,115,0),567], [String.fromCharCode(121,95,56,95,115,117,98,115,99,114,105,98,97,98,108,101,115,0),844]]);
    let skipa = new Map([[String.fromCharCode(99,95,54,53,95,114,101,115,101,97,114,99,104,0),866], [String.fromCharCode(97,100,114,109,95,55,95,57,53,0),973]]);
    let short_htQ = String.fromCharCode(103,114,101,103,95,106,95,55,55,0);
    let qaag8 = 3;
    let tickw = [182, 58];
    let penaltyX = String.fromCharCode(106,95,53,55,95,112,111,115,116,105,110,105,116,0);
    let libjsijniprofilern = [486, 226, 701];
    let blackO = String.fromCharCode(98,101,110,99,104,109,97,114,107,95,51,95,54,0);
    let grayV = String.fromCharCode(115,104,111,119,115,95,113,95,50,0);
    let lineh = 1.0;
    let abidetect9 = new Map([[String.fromCharCode(102,95,52,57,95,100,99,116,120,100,99,0),738], [String.fromCharCode(114,95,55,53,95,112,97,115,112,0),214], [String.fromCharCode(100,97,112,95,100,95,52,55,0),693]]);
    let mintegral3 = [866, 481];
       let yellowscoreballR = new Map([[String.fromCharCode(106,95,55,55,95,116,104,114,101,97,100,105,110,103,0),814], [String.fromCharCode(107,95,51,57,95,115,104,97,114,101,103,114,111,117,112,0),608], [String.fromCharCode(118,95,54,54,95,117,108,116,114,97,0),775]]);
       let zhengpiand = String.fromCharCode(117,95,55,56,95,98,101,99,111,109,101,0);
         yellowscoreballR[zhengpiand] = zhengpiand.length + yellowscoreballR.size;
      while (zhengpiand.endsWith(`${yellowscoreballR.size}`)) {
         zhengpiand = `${zhengpiand.length}`;
         break;
      }
          let fullscreenminq = 5;
         yellowscoreballR[zhengpiand] = zhengpiand.length | 2;
         fullscreenminq >>= Math.min(Math.abs(fullscreenminq + 2), 2);
      do {
          let holderj = 0;
          let umengm = String.fromCharCode(108,95,50,55,95,97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,0);
          let smallU = String.fromCharCode(104,95,49,53,95,102,105,114,101,98,97,115,101,0);
          let lightw = 2;
          let cancelm = 0.0;
         zhengpiand += `${lightw - 2}`;
         holderj /= Math.max(3, umengm.length - 1);
         umengm += `${umengm.length}`;
         smallU = `${1 & parseInt(`${cancelm}`)}`;
         lightw %= Math.max((String.fromCharCode(56,0) == umengm ? parseInt(`${cancelm}`) : umengm.length), 5);
         if (String.fromCharCode(57,118,50,57,98,0) == zhengpiand) {
            break;
         }
      } while (((zhengpiand.length - 3) > 3) && (String.fromCharCode(57,118,50,57,98,0) == zhengpiand));
      for (let w = 0; w < 2; w++) {
         zhengpiand += `${zhengpiand.length % (Math.max(1, 9))}`;
      }
      if (zhengpiand.endsWith(`${yellowscoreballR.size}`)) {
          let shrinkb = 3.0;
          let libavutilh = [String.fromCharCode(103,95,48,95,100,109,117,108,0), String.fromCharCode(107,105,110,103,95,120,95,51,53,0)];
         yellowscoreballR = new Map([[`${shrinkb}`, 1]]);
         shrinkb *= parseFloat(`${libavutilh.length ^ libavutilh.length}`);
      }
      valuesc.push(1);
      skipa = new Map([[`${valuesc.length}`, 3 << (Math.min(Math.abs(qaag8), 1))]]);
      valuesc = [skipa.size * 1];

    if (data.incidents != undefined && data.incidents.length > 0) {

       let awayteamfield1 = String.fromCharCode(106,95,53,50,95,114,97,115,116,101,114,0);
       let singleq = String.fromCharCode(111,110,101,119,97,121,95,55,95,56,48,0);
       let defaultteam2 = String.fromCharCode(122,95,56,54,95,112,114,101,104,101,97,116,0);
         awayteamfield1 = `${defaultteam2.length * 3}`;
      for (let a = 0; a < 2; a++) {
         awayteamfield1 = "1";
      }
      for (let k = 0; k < 1; k++) {
         singleq += `${(String.fromCharCode(113,0) == awayteamfield1 ? awayteamfield1.length : singleq.length)}`;
      }
      for (let x = 0; x < 2; x++) {
         singleq += `${defaultteam2.length}`;
      }
          let codegenH = 2;
          let statisticsK = true;
          let iconclosem = 0.0;
         singleq = `${codegenH}`;
         codegenH <<= Math.min(Math.abs((parseInt(`${iconclosem}`) & (statisticsK ? 4 : 5))), 3);
         statisticsK = !statisticsK;
         iconclosem += ((statisticsK ? 2 : 4) / (Math.max(parseInt(`${iconclosem}`), 1)));
         singleq += `${singleq.length}`;
         singleq += `${(String.fromCharCode(89,0) == singleq ? awayteamfield1.length : singleq.length)}`;
      for (let p = 0; p < 1; p++) {
         awayteamfield1 += `${defaultteam2.length ^ awayteamfield1.length}`;
      }
          let streamings = new Map([[String.fromCharCode(109,95,52,51,95,108,111,110,103,105,116,117,100,101,0),625], [String.fromCharCode(102,105,108,116,101,114,115,95,122,95,51,51,0),307]]);
          let activityb = [87, 771];
          let uimanagere = String.fromCharCode(100,105,115,99,108,111,115,117,114,101,95,118,95,51,53,0);
         singleq += `${streamings.size}`;
         streamings[uimanagere] = 1;
         activityb = [uimanagere.length / 2];
      penaltyX += `${qaag8}`;
       let shootyesgoalt = [965, 68, 680];
      if (!shootyesgoalt.includes(shootyesgoalt.length)) {
         shootyesgoalt = [shootyesgoalt.length];
      }
          let orangeb = 1.0;
          let sourceE = 0;
         shootyesgoalt = [sourceE];
         orangeb /= Math.max(parseFloat(`${parseInt(`${orangeb}`)}`), 1);
         sourceE &= 1;
         shootyesgoalt = [shootyesgoalt.length >> (Math.min(3, shootyesgoalt.length))];
      libjsijniprofilern = [(grayV == String.fromCharCode(81,0) ? tickw.length : grayV.length)];
   if (2 <= (5 % (Math.max(7, qaag8)))) {
      grayV = `${qaag8 << (Math.min(1, Math.abs(3)))}`;
   }
      let item = data.incidents.filter(
        x => x.type == 1 && x.player != undefined && x.player?.id == data.id,
      );
   if (5 <= (4 | qaag8) || 1 <= (penaltyX.length | 4)) {
      penaltyX += `${(String.fromCharCode(68,0) == blackO ? qaag8 : blackO.length)}`;
   }
   while (!grayV.endsWith(`${tickw.length}`)) {
      tickw.push(tickw.length - 2);
      break;
   }
   if (2 > (valuesc.length / 4) || (valuesc.length / (Math.max(4, 5))) > 5) {
       let defaultroombgz = [699, 142];
       let chinasameD = new Map([[String.fromCharCode(100,95,57,52,95,97,112,112,115,102,108,121,101,114,0),false ], [String.fromCharCode(99,104,97,110,103,105,110,103,95,104,95,48,0),false ], [String.fromCharCode(102,95,51,56,95,118,105,101,119,0),true ]]);
       let basketballiconM = 5;
       let iconeditZ = String.fromCharCode(122,95,51,50,95,114,101,100,105,114,101,99,116,111,114,0);
       let models_ = 4;
      while (Array.from(chinasameD.keys()).includes(`${defaultroombgz.length}`)) {
          let viewerW = 4.0;
          let customF = String.fromCharCode(107,112,115,95,103,95,56,52,0);
          let detail3 = 2;
          let loginz = String.fromCharCode(111,95,56,56,95,114,108,105,110,101,0);
         defaultroombgz.push(1);
         viewerW += customF.length << (Math.min(5, loginz.length));
         customF += `${parseInt(`${viewerW}`)}`;
         detail3 >>= Math.min(Math.abs(loginz.length + detail3), 4);
         break;
      }
          let qaagD = String.fromCharCode(116,105,109,101,114,95,116,95,56,0);
          let diceV = 2;
         chinasameD = new Map([[iconeditZ, basketballiconM]]);
         qaagD += `${diceV << (Math.min(Math.abs(3), 1))}`;
         diceV *= 3 + diceV;
         defaultroombgz.push(3 << (Math.min(3, Math.abs(chinasameD.size))));
         models_ *= iconeditZ.length & chinasameD.size;
          let subsS = 0.0;
          let cricketq = String.fromCharCode(97,116,114,105,109,95,53,95,51,54,0);
         models_ ^= 2;
         subsS *= parseFloat(`${parseInt(`${subsS}`) << (Math.min(cricketq.length, 4))}`);
         cricketq = `${cricketq.length}`;
          let alertg = true;
          let descA = String.fromCharCode(117,95,55,48,95,112,111,111,112,0);
         basketballiconM &= (String.fromCharCode(115,0) == descA ? descA.length : defaultroombgz.length);
         alertg = alertg && !alertg;
      for (let e = 0; e < 1; e++) {
         defaultroombgz.push(defaultroombgz.length);
      }
      while (4 == (basketballiconM * models_)) {
         models_ >>= Math.min(Math.abs(defaultroombgz.length - iconeditZ.length), 2);
         break;
      }
          let imagesb = 2.0;
          let libhermesA = 2.0;
          let giftbuttonm = String.fromCharCode(115,95,57,54,95,104,101,97,114,116,0);
         chinasameD = new Map([[iconeditZ, iconeditZ.length]]);
         imagesb /= Math.max(2, parseInt(`${libhermesA}`));
         libhermesA += (parseFloat(`${giftbuttonm == String.fromCharCode(95,0) ? parseInt(`${libhermesA}`) : giftbuttonm.length}`));
      for (let d = 0; d < 1; d++) {
         iconeditZ = `${defaultroombgz.length << (Math.min(Math.abs(1), 3))}`;
      }
      while ((chinasameD.size - defaultroombgz.length) >= 2) {
         defaultroombgz = [chinasameD.size];
         break;
      }
      while (defaultroombgz.includes(basketballiconM)) {
          let classesp = [241, 681, 271];
          let alert9 = String.fromCharCode(99,111,110,110,101,99,116,101,100,95,104,95,49,56,0);
          let vipsportz = String.fromCharCode(109,95,49,53,95,109,97,114,115,104,97,108,108,105,110,103,0);
          let libreactV = false;
          let bgvipsportm = [761, 122, 924];
         defaultroombgz = [basketballiconM & 1];
         classesp.push(vipsportz.length);
         alert9 += `${vipsportz.length}`;
         libreactV = !libreactV;
         bgvipsportm = [classesp.length % 3];
         break;
      }
       let pangleQ = new Map([[String.fromCharCode(122,95,54,54,95,116,97,107,101,110,0),String.fromCharCode(111,112,97,100,95,113,95,57,56,0)], [String.fromCharCode(112,114,111,109,111,95,110,95,51,56,0),String.fromCharCode(97,112,112,114,111,120,95,119,95,52,57,0)]]);
      if (!defaultroombgz.includes(basketballiconM)) {
          let filterX = 3.0;
          let halfq = 5;
          let whistleU = String.fromCharCode(105,110,118,105,116,97,116,105,111,110,115,95,48,95,55,50,0);
          let libreactperfloggerjnih = String.fromCharCode(97,117,116,111,114,101,115,105,122,101,115,95,54,95,54,49,0);
         defaultroombgz = [parseInt(`${filterX}`) >> (Math.min(3, Math.abs(basketballiconM)))];
         filterX *= (libreactperfloggerjnih == String.fromCharCode(69,0) ? whistleU.length : libreactperfloggerjnih.length);
         halfq |= halfq * whistleU.length;
      }
      do {
          let reducerw = true;
         iconeditZ = `${basketballiconM % (Math.max(pangleQ.size, 4))}`;
         reducerw = (reducerw ? !reducerw : !reducerw);
         if (iconeditZ.length == 4434514) {
            break;
         }
      } while ((iconeditZ.length == 4434514) && (basketballiconM < iconeditZ.length));
      valuesc = [1];
   }

      if (item.length > 0) {

   do {
      valuesc.push(short_htQ.length);
      if (valuesc.length == 604435) {
         break;
      }
   } while ((valuesc.length == 604435) && (1 >= (valuesc.length % (Math.max(9, blackO.length))) && (blackO.length % 1) >= 3));
      lineh -= blackO.length >> (Math.min(Math.abs(3), 1));
      skipa = new Map([[`${skipa.size}`, 1 << (Math.min(3, Math.abs(skipa.size)))]]);
        goalCount = item.length;
   do {
       let logouserL = new Map([[String.fromCharCode(100,105,118,95,106,95,53,52,0),135], [String.fromCharCode(98,105,110,107,100,97,116,97,95,98,95,54,53,0),695], [String.fromCharCode(114,95,57,50,95,116,104,114,111,116,116,108,101,114,0),183]]);
       let routerg = 5.0;
       let dark4 = String.fromCharCode(104,101,120,99,104,97,114,105,110,116,95,109,95,49,52,0);
       let libyoga2 = 5.0;
          let iconmorey = false;
         routerg -= 3;
         iconmorey = !iconmorey;
      do {
         logouserL[`${libyoga2}`] = dark4.length - parseInt(`${libyoga2}`);
         if (3067220 == logouserL.size) {
            break;
         }
      } while ((dark4.length < 5) && (3067220 == logouserL.size));
       let analyticN = String.fromCharCode(117,95,56,48,95,99,101,110,99,0);
       let usernameS = String.fromCharCode(101,95,54,48,95,104,121,115,99,97,108,101,0);
          let commonv = new Map([[String.fromCharCode(116,97,108,108,95,51,95,53,53,0),693], [String.fromCharCode(98,95,50,53,95,109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,0),600], [String.fromCharCode(110,116,114,111,95,55,95,50,57,0),905]]);
          let iconfeedbackb = true;
          let sellmathbackgroundQ = false;
         logouserL[`${dark4}`] = 3 % (Math.max(1, dark4.length));
         commonv = new Map([[`${iconfeedbackb}`, 2]]);
         sellmathbackgroundQ = (30 < ((!iconfeedbackb ? 30 : commonv.size) << (Math.min(Math.abs(commonv.size), 2))));
       let codeF = 3.0;
       let filterM = 4.0;
      while (4.9 > (routerg - 1.89) && (logouserL.size - parseInt(`${routerg}`)) > 4) {
         logouserL = new Map([[`${codeF}`, parseInt(`${codeF}`)]]);
         break;
      }
       let tumbnailT = 1.0;
      while ((filterM + 3.96) <= 1.93 || 5.45 <= (3.96 + filterM)) {
         logouserL[`${routerg}`] = parseInt(`${filterM}`);
         break;
      }
      while (dark4.endsWith(`${routerg}`)) {
          let arrowupw = 4.0;
          let cross0 = 4.0;
         routerg /= Math.max(4, 3 << (Math.min(3, Math.abs(parseInt(`${cross0}`)))));
         arrowupw *= parseFloat(`${parseInt(`${arrowupw}`)}`);
         cross0 *= parseFloat(`${2 ^ parseInt(`${arrowupw}`)}`);
         break;
      }
         analyticN = `${analyticN.length}`;
         codeF /= Math.max(5, parseFloat(`${1}`));
      while (5.37 <= libyoga2) {
         dark4 = `${parseInt(`${libyoga2}`)}`;
         break;
      }
      turndownc[`${routerg}`] = parseInt(`${lineh}`) & parseInt(`${routerg}`);
      if (3443439 == turndownc.size) {
         break;
      }
   } while ((!Array.from(turndownc.keys()).includes(`${lineh}`)) && (3443439 == turndownc.size));
       let otherM = 2.0;
       let large8 = false;
       let mimov = [832, 217, 804];
       let spinnerm = 1;
       let reportU = 3;
      for (let e = 0; e < 1; e++) {
         reportU /= Math.max((parseInt(`${otherM}`) / (Math.max(8, (large8 ? 1 : 5)))), 4);
      }
         mimov = [spinnerm];
      if (!mimov.includes(spinnerm)) {
          let settingsv = 5;
         mimov = [settingsv ^ 3];
      }
      if (1 <= (reportU / 1)) {
          let hongkongC = [718, 427, 168];
          let connectionP = [135, 476];
          let iconshareh = String.fromCharCode(115,112,101,101,100,104,113,95,119,95,56,51,0);
         spinnerm += 1 % (Math.max(parseInt(`${otherM}`), 3));
         hongkongC = [hongkongC.length % 2];
         connectionP.push(iconshareh.length);
         iconshareh += `${1 | connectionP.length}`;
      }
         otherM += reportU;
         otherM *= mimov.length;
         otherM += parseInt(`${otherM}`) % 3;
       let arrowupU = false;
      qaag8 |= 3 * parseInt(`${otherM}`);
   if (3 >= grayV.length) {
       let predictionbuttonh = String.fromCharCode(103,95,56,52,95,100,101,99,114,121,112,116,101,100,0);
       let favoritec = true;
       let adultb = 3.0;
         adultb /= Math.max(3, parseFloat(`${3}`));
         adultb -= parseFloat(`${1 - parseInt(`${adultb}`)}`);
      for (let b = 0; b < 1; b++) {
         predictionbuttonh += `${((favoritec ? 2 : 3) ^ predictionbuttonh.length)}`;
      }
      if (predictionbuttonh.length > 2) {
          let hejit = 5;
          let bingY = String.fromCharCode(115,105,110,116,95,51,95,52,50,0);
          let rankq = 1;
         favoritec = bingY.startsWith(`${rankq}`);
         hejit %= Math.max(hejit - hejit, 2);
         bingY = `${3 % (Math.max(1, hejit))}`;
      }
         adultb /= Math.max((parseFloat(`${(favoritec ? 5 : 5) % (Math.max(4, parseInt(`${adultb}`)))}`)), 3);
      skipa = new Map([[penaltyX, 1]]);
   }

        return true;
      } else {

   for (let b = 0; b < 2; b++) {
      short_htQ = `${tickw.length >> (Math.min(short_htQ.length, 3))}`;
   }
       let sellR = 3;
      do {
          let xvodd = 1.0;
          let styleC = 3.0;
          let themeM = new Map([[String.fromCharCode(99,108,101,97,114,95,52,95,56,51,0),725], [String.fromCharCode(105,110,102,111,114,109,97,116,105,111,110,95,105,95,57,52,0),243], [String.fromCharCode(115,105,103,97,108,103,95,121,95,51,57,0),966]]);
         sellR -= 2;
         xvodd *= parseFloat(`${2}`);
         styleC *= parseFloat(`${parseInt(`${xvodd}`) + parseInt(`${styleC}`)}`);
         themeM[`${styleC}`] = themeM.size;
         if (sellR == 3845717) {
            break;
         }
      } while ((sellR == 3845717) && (3 < (5 & sellR)));
      if (1 >= (sellR % (Math.max(5, 7))) || 1 >= (sellR % 5)) {
         sellR |= 1;
      }
      if (sellR == 5) {
         sellR >>= Math.min(Math.abs(sellR), 3);
      }
      lineh += libjsijniprofilern.length;
   for (let r = 0; r < 3; r++) {
       let subsT = String.fromCharCode(109,95,50,51,95,99,108,97,115,115,105,99,0);
       let minif = String.fromCharCode(104,97,110,100,101,114,95,51,95,50,0);
       let libfabricjnio = new Map([[String.fromCharCode(111,95,52,95,101,121,101,100,114,111,112,112,101,114,0),133], [String.fromCharCode(102,95,52,52,95,99,111,108,111,114,109,97,116,114,105,120,0),396]]);
       let scheduleD = 0;
       let subbasketballplayerJ = 2.0;
      if (!minif.startsWith(`${scheduleD}`)) {
         scheduleD *= scheduleD;
      }
       let favicon1 = new Map([[String.fromCharCode(116,95,50,52,95,104,113,100,115,112,0),true ], [String.fromCharCode(113,95,53,95,100,105,115,99,111,118,101,114,0),false ]]);
       let basketballmatchdetailbg8 = new Map([[String.fromCharCode(114,111,117,116,105,110,115,95,97,95,57,54,0),295], [String.fromCharCode(100,117,112,115,95,114,95,53,48,0),257]]);
         minif += `${libfabricjnio.size | minif.length}`;
         scheduleD &= 1;
         subbasketballplayerJ += 3;
          let reminderp = 0;
         subsT += `${favicon1.size}`;
         reminderp += reminderp;
       let d_centerL = 2;
      do {
         basketballmatchdetailbg8[`${subbasketballplayerJ}`] = 3 * parseInt(`${subbasketballplayerJ}`);
         if (basketballmatchdetailbg8.size == 2027972) {
            break;
         }
      } while ((!Array.from(basketballmatchdetailbg8.keys()).includes(`${d_centerL}`)) && (basketballmatchdetailbg8.size == 2027972));
      for (let q = 0; q < 2; q++) {
         basketballmatchdetailbg8 = new Map([[`${basketballmatchdetailbg8.size}`, basketballmatchdetailbg8.size & 3]]);
      }
      do {
         d_centerL -= 2 - basketballmatchdetailbg8.size;
         if (d_centerL == 1629335) {
            break;
         }
      } while (((4 & favicon1.size) < 1 && (4 & d_centerL) < 1) && (d_centerL == 1629335));
         subsT += `${favicon1.size}`;
         d_centerL %= Math.max(2, 3);
      while ((5.25 - subbasketballplayerJ) == 5.77 && (5.25 - subbasketballplayerJ) == 5.36) {
          let pathL = String.fromCharCode(104,111,114,105,122,111,110,116,97,108,108,121,95,50,95,52,52,0);
          let traminiv = String.fromCharCode(99,97,116,97,108,111,103,95,115,95,53,56,0);
         scheduleD >>= Math.min(1, Math.abs(3 << (Math.min(1, traminiv.length))));
         pathL += `${pathL.length}`;
         traminiv += `${(String.fromCharCode(53,0) == pathL ? pathL.length : pathL.length)}`;
         break;
      }
         minif = `${scheduleD ^ subsT.length}`;
      for (let r = 0; r < 3; r++) {
         basketballmatchdetailbg8 = new Map([[subsT, minif.length]]);
      }
      turndownc = new Map([[`${turndownc.size}`, 2]]);
   }
        goalCount = 0;
   while (blackO.length > 3) {
      blackO += `${blackO.length}`;
      break;
   }
      qaag8 %= Math.max(4, short_htQ.length);
   for (let r = 0; r < 2; r++) {
       let regeng_ = 4.0;
       let update_rI = String.fromCharCode(97,100,106,117,115,116,105,110,103,95,54,95,50,49,0);
       let rootp = new Map([[String.fromCharCode(118,95,55,53,95,97,100,106,117,115,109,101,110,116,115,0),645], [String.fromCharCode(98,117,110,100,108,101,115,95,48,95,54,48,0),755], [String.fromCharCode(115,111,114,101,99,101,105,118,101,95,118,95,49,52,0),282]]);
         rootp[`${regeng_}`] = 1;
         update_rI += `${update_rI.length}`;
      if ((regeng_ / 5.93) >= 5.8 && (parseInt(`${regeng_}`) / (Math.max(rootp.size, 1))) >= 4) {
         rootp[`${regeng_}`] = 2 ^ rootp.size;
      }
         rootp[update_rI] = rootp.size * update_rI.length;
      while (update_rI.includes(`${regeng_}`)) {
         update_rI = `${parseInt(`${regeng_}`) + 2}`;
         break;
      }
         update_rI += `${update_rI.length - parseInt(`${regeng_}`)}`;
       let giftu = String.fromCharCode(116,95,52,51,95,97,99,107,0);
         rootp = new Map([[update_rI, 3 * update_rI.length]]);
      for (let a = 0; a < 2; a++) {
          let viewsi = 3.0;
          let playU = 2.0;
          let green7 = new Map([[String.fromCharCode(114,101,115,101,114,118,101,95,50,95,51,49,0),String.fromCharCode(100,101,115,116,105,110,97,116,105,111,110,115,95,114,95,57,51,0)], [String.fromCharCode(97,108,97,99,100,115,112,95,120,95,49,50,0),String.fromCharCode(115,116,114,105,110,103,115,95,120,95,53,50,0)]]);
          let description_oN = new Map([[String.fromCharCode(97,95,57,52,95,105,110,115,116,97,108,108,97,116,105,111,110,115,0),true ], [String.fromCharCode(110,108,115,116,95,122,95,55,48,0),false ], [String.fromCharCode(119,95,49,50,95,115,101,116,117,112,0),true ]]);
          let storek = new Map([[String.fromCharCode(105,109,112,111,114,116,97,110,116,95,54,95,50,53,0),715], [String.fromCharCode(108,95,52,50,95,118,97,114,120,104,0),519]]);
         rootp = new Map([[`${storek.size}`, (String.fromCharCode(81,0) == giftu ? storek.size : giftu.length)]]);
         viewsi /= Math.max(parseFloat(`${2}`), 3);
         playU /= Math.max(1, 2);
         green7 = new Map([[`${description_oN.size}`, 3 - description_oN.size]]);
      }
      blackO += `${turndownc.size}`;
   }

        return false;
   do {
      blackO = `${qaag8 / 3}`;
      if (4854599 == blackO.length) {
         break;
      }
   } while ((!blackO.endsWith(penaltyX)) && (4854599 == blackO.length));
      valuesc = [2 - libjsijniprofilern.length];
      grayV += `${parseInt(`${lineh}`) * libjsijniprofilern.length}`;

      }
    }
  };

  let checkAssist = () => {
       let gradleS = 0;
    let whitez = [385, 289];
    let debugy = 4.0;
    let basketballiconn = 3.0;
    let libreactt = String.fromCharCode(105,95,51,49,95,115,109,112,116,101,98,97,114,115,0);
    let aboutX = String.fromCharCode(106,95,54,55,95,101,114,114,111,114,99,98,0);
    let editj = new Map([[String.fromCharCode(115,101,103,109,97,112,95,107,95,52,56,0),381], [String.fromCharCode(98,95,57,55,95,99,111,108,108,97,116,105,111,110,0),789], [String.fromCharCode(121,95,48,95,114,101,108,111,97,100,101,114,0),357]]);
    let weiboI = [6, 740, 157];
    let rulesW = 5.0;
    let lightq = String.fromCharCode(109,95,57,95,108,97,116,101,0);
    let helperI = new Map([[String.fromCharCode(113,95,53,53,0),605], [String.fromCharCode(116,95,50,56,95,117,112,118,112,0),346]]);
    let mimeg = 3.0;
    let gmailz = 4;
    let middleC = 5.0;
    let mimo4 = [369, 574];
    let singleE = [255, 884, 153];
    let away4 = [String.fromCharCode(99,95,55,56,95,100,120,118,97,0), String.fromCharCode(103,101,116,95,108,95,56,53,0)];
    let networku = 4.0;
   while (3 <= aboutX.length) {
      whitez = [1];
      break;
   }
      editj = new Map([[`${weiboI.length}`, parseInt(`${debugy}`) / (Math.max(weiboI.length, 2))]]);
      weiboI = [whitez.length];

    if (data.incidents != undefined && data.incidents.length > 0) {

      editj[libreactt] = libreactt.length & gradleS;
   for (let g = 0; g < 2; g++) {
      libreactt += `${weiboI.length - whitez.length}`;
   }
      helperI = new Map([[`${gradleS}`, 3 & lightq.length]]);
      let item = data.incidents.filter(
        x => x.type == 1 && x.assist1 != undefined && x.assist1?.id == data.id,
      );
   if ((editj.size / 2) >= 1 || 2 >= (editj.size / (Math.max(lightq.length, 5)))) {
       let predictionbannerf = true;
       let detailsN = 3;
         predictionbannerf = detailsN >= 73 || predictionbannerf;
      for (let c = 0; c < 2; c++) {
         predictionbannerf = !predictionbannerf && detailsN >= 2;
      }
          let casting1 = false;
          let privatechatbgv = 2;
          let predictionwinS = new Map([[String.fromCharCode(115,95,55,57,95,115,101,116,0),String.fromCharCode(98,111,110,100,95,109,95,51,53,0)], [String.fromCharCode(115,95,53,50,95,112,114,111,98,108,101,109,0),String.fromCharCode(102,114,111,109,102,101,95,113,95,51,56,0)], [String.fromCharCode(121,95,56,49,95,109,100,99,118,0),String.fromCharCode(119,112,116,104,114,101,97,100,115,95,111,95,57,0)]]);
         detailsN /= Math.max(privatechatbgv - 2, 5);
         casting1 = casting1 && predictionwinS.size <= 5;
         privatechatbgv *= ((casting1 ? 4 : 3) / (Math.max(predictionwinS.size, 7)));
      while ((3 | detailsN) <= 5 && !predictionbannerf) {
          let source9 = new Map([[String.fromCharCode(122,95,52,50,95,111,119,110,0),716], [String.fromCharCode(112,95,49,56,95,99,102,115,116,114,101,97,109,0),694], [String.fromCharCode(98,95,57,52,95,114,101,97,100,0),956]]);
          let completem = 5.0;
          let regengu = new Map([[String.fromCharCode(105,110,115,105,100,101,95,51,95,52,55,0),String.fromCharCode(98,95,55,54,95,99,104,117,110,107,0)], [String.fromCharCode(102,105,103,104,116,101,114,115,95,102,95,57,54,0),String.fromCharCode(100,95,54,48,95,112,116,114,109,97,112,115,0)]]);
          let scorepopsoundG = [723, 346];
          let short_fM = 2.0;
         predictionbannerf = scorepopsoundG.includes(detailsN);
         source9[`${completem}`] = regengu.size;
         completem /= Math.max(5, parseFloat(`${regengu.size + 2}`));
         scorepopsoundG.push(parseInt(`${completem}`) + regengu.size);
         short_fM /= Math.max(1, parseFloat(`${parseInt(`${short_fM}`)}`));
         break;
      }
         predictionbannerf = detailsN < 13;
      do {
         detailsN >>= Math.min(4, Math.abs(1 & detailsN));
         if (4473424 == detailsN) {
            break;
         }
      } while ((4473424 == detailsN) && ((2 | detailsN) <= 2));
      editj[lightq] = helperI.size;
   }
   while (!libreactt.endsWith(`${whitez.length}`)) {
      libreactt = `${parseInt(`${mimeg}`) - 3}`;
      break;
   }
       let penaltyshootnogoalr = String.fromCharCode(105,95,57,52,95,115,99,111,114,101,0);
       let alert3 = 3;
      do {
         alert3 *= penaltyshootnogoalr.length;
         if (alert3 == 2410831) {
            break;
         }
      } while (((penaltyshootnogoalr.length / (Math.max(1, 9))) > 5 || (1 / (Math.max(4, alert3))) > 1) && (alert3 == 2410831));
          let userj = true;
         penaltyshootnogoalr = `${((userj ? 1 : 5) / (Math.max(alert3, 6)))}`;
      do {
         alert3 /= Math.max(2, penaltyshootnogoalr.length * alert3);
         if (alert3 == 4244159) {
            break;
         }
      } while ((4 > (alert3 % (Math.max(5, 10))) && (alert3 % 5) > 1) && (alert3 == 4244159));
      if ((alert3 >> (Math.min(penaltyshootnogoalr.length, 3))) < 1 || 3 < (1 >> (Math.min(5, penaltyshootnogoalr.length)))) {
         penaltyshootnogoalr = "2 * alert3";
      }
      while ((5 * penaltyshootnogoalr.length) > 3 || (penaltyshootnogoalr.length * 5) > 1) {
         penaltyshootnogoalr = `${alert3 + 2}`;
         break;
      }
         alert3 -= 3 << (Math.min(2, penaltyshootnogoalr.length));
      basketballiconn -= gradleS;

      if (item.length > 0) {

   if (Array.from(helperI.values()).includes(whitez.length)) {
      whitez = [aboutX.length];
   }
   for (let b = 0; b < 2; b++) {
      whitez.push(parseInt(`${basketballiconn}`));
   }
   while (lightq.length < basketballiconn) {
      lightq = `${parseInt(`${rulesW}`)}`;
      break;
   }
        assistCount = item.length;
      editj[`${debugy}`] = gradleS % (Math.max(6, parseInt(`${debugy}`)));
      weiboI.push(1);
   for (let b = 0; b < 1; b++) {
      mimeg -= parseFloat(`${parseInt(`${basketballiconn}`)}`);
   }

        return true;
      } else {

   while (4 > (libreactt.length & 4) && 4.41 > (basketballiconn / (Math.max(5.45, 2)))) {
      libreactt = `${helperI.size}`;
      break;
   }
       let basketballplayerplaceholderO = 4.0;
       let modeC = String.fromCharCode(102,95,53,49,95,115,101,99,116,105,110,115,0);
      for (let m = 0; m < 1; m++) {
         modeC = `${parseInt(`${basketballplayerplaceholderO}`)}`;
      }
         basketballplayerplaceholderO += parseFloat(`${modeC.length}`);
      do {
          let connection4 = 3;
          let goallogob = String.fromCharCode(115,116,100,95,110,95,53,51,0);
          let loading6 = String.fromCharCode(101,97,103,101,114,95,102,95,49,53,0);
          let found0 = new Map([[String.fromCharCode(117,105,111,116,111,109,98,117,102,95,100,95,49,53,0),19], [String.fromCharCode(99,97,118,115,95,115,95,55,56,0),149]]);
          let network3 = [342, 185];
         basketballplayerplaceholderO -= parseFloat(`${parseInt(`${basketballplayerplaceholderO}`) << (Math.min(modeC.length, 2))}`);
         connection4 /= Math.max(2, (loading6 == String.fromCharCode(88,0) ? network3.length : loading6.length));
         goallogob += `${(goallogob == String.fromCharCode(122,0) ? goallogob.length : connection4)}`;
         found0 = new Map([[`${found0.size}`, found0.size << (Math.min(goallogob.length, 3))]]);
         network3 = [found0.size];
         if (1799912.0 == basketballplayerplaceholderO) {
            break;
         }
      } while (((basketballplayerplaceholderO / 3.31) > 5.17) && (1799912.0 == basketballplayerplaceholderO));
      for (let w = 0; w < 3; w++) {
         basketballplayerplaceholderO /= Math.max(parseFloat(`${parseInt(`${basketballplayerplaceholderO}`)}`), 5);
      }
       let package_duP = String.fromCharCode(117,95,49,56,95,101,100,105,116,0);
       let rocketY = String.fromCharCode(104,95,53,53,95,114,101,118,101,97,108,0);
      for (let k = 0; k < 2; k++) {
          let entry7 = String.fromCharCode(111,95,49,52,95,98,105,116,101,120,97,99,116,110,101,115,115,0);
          let floaterz = String.fromCharCode(100,95,57,49,95,106,111,121,102,117,108,0);
          let modityt = 0.0;
          let sendq = [String.fromCharCode(99,111,110,115,116,114,117,99,116,95,56,95,57,54,0), String.fromCharCode(114,116,108,95,100,95,49,55,0)];
          let s_managerm = 1.0;
         rocketY = `${2 + parseInt(`${basketballplayerplaceholderO}`)}`;
         entry7 = `${3 & floaterz.length}`;
         floaterz = `${parseInt(`${modityt}`) + 3}`;
         modityt *= parseFloat(`${floaterz.length + 3}`);
         sendq.push(2);
         s_managerm /= Math.max(1, parseFloat(`${sendq.length}`));
      }
      debugy -= 2 >> (Math.min(2, lightq.length));
       let ticky = 5;
       let privatechatbgj = 0;
       let langkeyQ = 1.0;
          let becomeC = String.fromCharCode(112,114,111,109,112,101,103,95,51,95,57,51,0);
         langkeyQ *= becomeC.length << (Math.min(Math.abs(2), 2));
      do {
         privatechatbgj *= privatechatbgj - ticky;
         if (3925797 == privatechatbgj) {
            break;
         }
      } while ((3925797 == privatechatbgj) && (4 > (ticky % (Math.max(privatechatbgj, 6))) && (4 % (Math.max(2, ticky))) > 2));
         privatechatbgj <<= Math.min(Math.abs(2), 5);
      do {
         privatechatbgj += parseInt(`${langkeyQ}`);
         if (privatechatbgj == 1285340) {
            break;
         }
      } while ((3.23 < (3.24 + langkeyQ) || 2 < (parseInt(`${langkeyQ}`) + privatechatbgj)) && (privatechatbgj == 1285340));
         privatechatbgj %= Math.max(parseInt(`${langkeyQ}`) / 3, 5);
         langkeyQ -= privatechatbgj >> (Math.min(3, Math.abs(2)));
      do {
         langkeyQ -= privatechatbgj;
         if (langkeyQ == 2515128.0) {
            break;
         }
      } while ((5.46 >= langkeyQ) && (langkeyQ == 2515128.0));
      if (4 >= privatechatbgj) {
         privatechatbgj >>= Math.min(4, Math.abs(2));
      }
      if (4 == (5 * privatechatbgj)) {
         privatechatbgj /= Math.max(parseInt(`${langkeyQ}`) | privatechatbgj, 5);
      }
      basketballiconn /= Math.max(1, privatechatbgj);
        assistCount = 0;
      lightq = `${1 << (Math.min(2, lightq.length))}`;
   for (let v = 0; v < 3; v++) {
      aboutX += `${gmailz}`;
   }
      mimeg *= parseFloat(`${parseInt(`${basketballiconn}`)}`);

        return false;
      lightq += `${parseInt(`${debugy}`) % (Math.max(aboutX.length, 7))}`;
   if ((2.66 + rulesW) <= 2.3) {
      rulesW *= 1 & parseInt(`${rulesW}`);
   }
   while ((gmailz & lightq.length) == 1 && (gmailz & 1) == 3) {
      lightq += `${aboutX.length >> (Math.min(Math.abs(1), 3))}`;
      break;
   }

      }
    }
  };

  let checkPenaltyGoal = () => {
       let humidityf = 5.0;
    let predictionwin9 = String.fromCharCode(102,105,120,95,109,95,57,53,0);
    let forwardg = 4.0;
    let libyogaU = [680, 652];
    let fills = 4;
    let textinputa = String.fromCharCode(104,117,109,97,110,95,52,95,50,54,0);
    let saveX = 0.0;
    let iconfeedback9 = [131, 678, 549];
    let nbatrophym = 3;
    let roundk = 0;
    let lessU = [153, 211];
    let heartJ = true;
    let googleg = new Map([[String.fromCharCode(116,95,52,56,95,115,107,105,110,0),604], [String.fromCharCode(112,114,111,112,101,114,95,122,95,51,50,0),436]]);
    let gestureo = [String.fromCharCode(110,99,111,109,105,110,103,95,108,95,57,49,0), String.fromCharCode(119,95,55,57,95,104,111,116,111,0)];
      forwardg *= 2 >> (Math.min(5, Math.abs(roundk)));
   if (3 > (predictionwin9.length ^ 4)) {
      iconfeedback9.push(3 >> (Math.min(3, Math.abs(parseInt(`${forwardg}`)))));
   }
      forwardg *= parseInt(`${saveX}`);

    if (data.incidents != undefined && data.incidents.length > 0) {

   while (4 < (googleg.size & 4) || 5 < (googleg.size & 4)) {
      googleg = new Map([[`${roundk}`, ((heartJ ? 4 : 2) >> (Math.min(Math.abs(roundk), 2)))]]);
      break;
   }
      humidityf -= (parseFloat(`${String.fromCharCode(67,0) == predictionwin9 ? predictionwin9.length : libyogaU.length}`));
       let bangm = 4;
       let orangedownarrowm = new Map([[String.fromCharCode(114,116,112,119,95,113,95,56,52,0),751], [String.fromCharCode(101,110,97,98,108,101,95,103,95,54,49,0),796]]);
       let stationsM = String.fromCharCode(97,95,49,48,95,109,98,117,118,101,114,114,111,114,0);
       let neon6 = String.fromCharCode(99,95,57,54,95,118,97,108,117,101,100,0);
         orangedownarrowm[stationsM] = neon6.length | stationsM.length;
         bangm <<= Math.min(1, Math.abs(3 ^ stationsM.length));
      do {
          let awayiconR = true;
          let bootX = new Map([[String.fromCharCode(114,101,103,117,108,97,114,95,50,95,51,49,0),String.fromCharCode(112,114,111,99,101,115,115,95,120,95,49,50,0)], [String.fromCharCode(98,95,55,56,0),String.fromCharCode(119,105,110,100,105,110,103,95,48,95,56,49,0)], [String.fromCharCode(111,95,50,50,95,99,111,110,116,0),String.fromCharCode(110,97,118,105,103,97,116,101,95,107,95,56,0)]]);
          let homeiconB = 3.0;
          let historyB = new Map([[String.fromCharCode(121,95,50,57,95,99,111,110,115,116,114,97,105,110,0),String.fromCharCode(121,95,55,52,95,98,97,100,103,101,0)], [String.fromCharCode(109,97,114,107,101,100,95,50,95,54,50,0),String.fromCharCode(108,95,56,54,95,102,114,101,111,112,101,110,0)]]);
          let thailandu = String.fromCharCode(122,95,57,57,95,98,108,97,99,107,108,105,115,116,0);
         bangm >>= Math.min(4, Math.abs(orangedownarrowm.size));
         awayiconR = homeiconB <= 43.29;
         bootX[`${historyB.size}`] = historyB.size;
         homeiconB *= parseFloat(`${thailandu.length * bootX.size}`);
         thailandu = `${1 >> (Math.min(4, Math.abs(historyB.size)))}`;
         if (bangm == 3343090) {
            break;
         }
      } while ((bangm == 3343090) && (!stationsM.endsWith(`${bangm}`)));
         bangm ^= orangedownarrowm.size;
         stationsM += `${stationsM.length}`;
      humidityf -= parseFloat(`${googleg.size}`);
      let item = data.incidents.filter(
        x => x.type == 8 && x.player != undefined && x.player?.id == data.id,
      );
      fills %= Math.max(libyogaU.length | 2, 3);
       let episodesD = new Map([[String.fromCharCode(105,110,116,101,114,114,117,112,116,105,111,110,95,97,95,50,0),737], [String.fromCharCode(112,95,57,56,95,110,97,116,105,118,101,0),292]]);
       let delegate_pvl = 5.0;
       let fastC = true;
      do {
         episodesD = new Map([[`${episodesD.size}`, episodesD.size / (Math.max(1, 5))]]);
         if (1868973 == episodesD.size) {
            break;
         }
      } while ((1868973 == episodesD.size) && ((episodesD.size - 2) > 3 && fastC));
      if (3 < (episodesD.size + 4) || !fastC) {
          let liveshare4 = String.fromCharCode(106,95,51,54,95,99,112,117,102,108,97,103,115,0);
          let gift9 = String.fromCharCode(98,108,111,98,115,105,122,101,95,114,95,52,54,0);
         fastC = !gift9.endsWith(`${delegate_pvl}`);
         liveshare4 = "2";
         gift9 = `${liveshare4.length | liveshare4.length}`;
      }
      for (let a = 0; a < 1; a++) {
         delegate_pvl *= 1 - parseInt(`${delegate_pvl}`);
      }
         fastC = fastC || 12.51 == delegate_pvl;
       let libfbjniG = String.fromCharCode(97,95,56,54,95,97,118,105,111,0);
       let iconP = String.fromCharCode(112,117,108,108,117,112,95,53,95,51,50,0);
      while (fastC) {
          let helpery = 3.0;
          let l_unlockw = false;
          let football3 = String.fromCharCode(117,95,49,50,95,114,101,103,105,115,116,114,121,0);
          let iconfeedbacki = true;
          let rncores = 5.0;
         fastC = 84.39 >= helpery;
         helpery *= (parseFloat(`${(l_unlockw ? 4 : 2)}`));
         l_unlockw = !iconfeedbacki && football3.length < 14;
         football3 += `${1 + football3.length}`;
         iconfeedbacki = !l_unlockw;
         rncores /= Math.max(parseFloat(`${2}`), 3);
         break;
      }
      if ((5.95 * delegate_pvl) > 5.42) {
         delegate_pvl -= (3 << (Math.min(1, Math.abs((fastC ? 4 : 3)))));
      }
       let blackc = [554, 161];
         delegate_pvl += 3;
      lessU = [(roundk | (fastC ? 3 : 5))];
   while (4.97 >= (humidityf * 4.59) && (humidityf * 4.59) >= 4.32) {
       let filledj = String.fromCharCode(115,109,105,109,101,95,48,95,49,54,0);
       let malaysiai = String.fromCharCode(110,95,53,48,95,101,120,101,99,0);
      if (malaysiai == filledj) {
         filledj = `${filledj.length * malaysiai.length}`;
      }
         filledj = `${malaysiai.length}`;
       let scoreK = String.fromCharCode(98,119,114,105,116,101,95,122,95,55,55,0);
      do {
         malaysiai = `${scoreK.length}`;
         if (malaysiai == String.fromCharCode(119,95,111,0)) {
            break;
         }
      } while ((malaysiai == String.fromCharCode(119,95,111,0)) && (2 < filledj.length));
      if (malaysiai.length < scoreK.length) {
         scoreK += `${filledj.length}`;
      }
      while (!scoreK.includes(`${filledj.length}`)) {
         scoreK = `${malaysiai.length << (Math.min(Math.abs(2), 5))}`;
         break;
      }
      predictionwin9 += `${2 << (Math.min(Math.abs(fills), 1))}`;
      break;
   }

      if (item.length > 0) {

   for (let a = 0; a < 1; a++) {
      nbatrophym -= parseInt(`${forwardg}`) ^ textinputa.length;
   }
      libyogaU = [lessU.length >> (Math.min(Math.abs(3), 2))];
      roundk &= textinputa.length;
        penaltyGoalCount = item.length;
   do {
      iconfeedback9.push(iconfeedback9.length);
      if (1582709 == iconfeedback9.length) {
         break;
      }
   } while ((1582709 == iconfeedback9.length) && ((2 ^ iconfeedback9.length) > 4 && (roundk ^ iconfeedback9.length) > 2));
   if (!heartJ) {
      heartJ = googleg.size <= 82 && fills <= 82;
   }
       let helperl = String.fromCharCode(114,105,100,103,101,95,51,95,52,49,0);
       let footballtrophyi = true;
         footballtrophyi = !footballtrophyi;
         helperl += `${((footballtrophyi ? 2 : 5))}`;
          let unewinterstitial7 = new Map([[String.fromCharCode(109,95,52,55,95,100,101,108,105,109,105,116,101,100,0),984], [String.fromCharCode(103,97,116,101,95,121,95,56,55,0),492], [String.fromCharCode(99,114,101,97,116,105,110,103,95,108,95,54,55,0),702]]);
          let static_t9F = new Map([[String.fromCharCode(120,95,49,54,95,105,109,109,101,100,105,97,116,101,108,121,0),116], [String.fromCharCode(112,97,115,116,101,98,111,97,114,100,95,112,95,53,55,0),198]]);
          let penaltyshoot2 = 3.0;
         footballtrophyi = ((helperl.length & (!footballtrophyi ? 93 : helperl.length)) < 93);
         unewinterstitial7 = new Map([[`${static_t9F.size}`, 3]]);
         static_t9F = new Map([[`${unewinterstitial7.size}`, parseInt(`${penaltyshoot2}`) - 3]]);
         penaltyshoot2 += static_t9F.size / (Math.max(7, unewinterstitial7.size));
      do {
         footballtrophyi = helperl.length > 31;
         if (footballtrophyi ? !footballtrophyi : footballtrophyi) {
            break;
         }
      } while ((footballtrophyi ? !footballtrophyi : footballtrophyi) && (4 < helperl.length));
      for (let t = 0; t < 3; t++) {
         footballtrophyi = helperl.startsWith(`${footballtrophyi}`);
      }
          let minimize4 = true;
          let activityS = [String.fromCharCode(110,101,119,115,95,117,95,49,55,0), String.fromCharCode(115,95,53,52,95,99,108,97,115,115,105,102,121,0), String.fromCharCode(108,101,97,115,116,95,97,95,50,49,0)];
          let nativemodulem = String.fromCharCode(117,110,102,114,101,101,122,101,95,48,95,54,52,0);
         helperl = "2";
         minimize4 = (((!minimize4 ? 77 : nativemodulem.length) << (Math.min(nativemodulem.length, 5))) > 77);
         activityS.push(2 + nativemodulem.length);
      humidityf /= Math.max(2, parseFloat(`${1}`));

        return true;
      } else {

       let loadingD = new Map([[String.fromCharCode(114,95,57,53,95,97,112,97,114,97,109,115,0),462], [String.fromCharCode(97,117,116,111,112,108,97,121,95,104,95,53,55,0),667], [String.fromCharCode(104,95,56,54,95,111,108,100,110,101,119,0),381]]);
       let episodex = [564, 729, 354];
       let materialQ = String.fromCharCode(117,95,50,57,95,97,118,115,115,0);
         episodex = [episodex.length];
         loadingD[`${episodex.length}`] = episodex.length ^ loadingD.size;
      for (let w = 0; w < 3; w++) {
         loadingD[materialQ] = 3 << (Math.min(2, episodex.length));
      }
         loadingD[`${episodex.length}`] = 3 >> (Math.min(2, episodex.length));
      if (loadingD.size > materialQ.length) {
          let xvodc = [83, 313, 907];
          let iconarrowrightH = new Map([[String.fromCharCode(99,97,114,114,105,101,114,95,111,95,54,56,0),776], [String.fromCharCode(101,108,108,105,112,116,105,99,95,104,95,50,48,0),320]]);
          let plus7 = String.fromCharCode(100,105,114,101,99,116,108,121,95,100,95,57,48,0);
          let iconsaveimageZ = 5;
         materialQ += `${episodex.length ^ materialQ.length}`;
         xvodc = [3];
         iconarrowrightH = new Map([[`${iconarrowrightH.size}`, iconarrowrightH.size * xvodc.length]]);
         plus7 = `${xvodc.length + 3}`;
         iconsaveimageZ ^= 2;
      }
      for (let r = 0; r < 1; r++) {
          let schedulern = 3;
          let yellowu = new Map([[String.fromCharCode(97,95,52,53,95,111,114,103,97,110,105,122,97,116,105,111,110,0),String.fromCharCode(100,112,110,97,109,101,95,106,95,49,48,0)], [String.fromCharCode(100,114,97,103,95,114,95,52,50,0),String.fromCharCode(109,112,101,103,112,105,99,116,117,114,101,95,103,95,57,52,0)], [String.fromCharCode(115,116,117,102,102,95,116,95,52,52,0),String.fromCharCode(99,117,114,114,101,110,116,95,100,95,53,53,0)]]);
          let weatherg = [850, 815];
          let downloade = [986, 749];
         materialQ = `${episodex.length}`;
         schedulern >>= Math.min(3, Math.abs(1 / (Math.max(3, weatherg.length))));
         yellowu[`${schedulern}`] = 3;
         weatherg.push(2);
         downloade.push(3 | weatherg.length);
      }
      do {
         materialQ += "1";
         if (4652962 == materialQ.length) {
            break;
         }
      } while ((4652962 == materialQ.length) && (!materialQ.startsWith(`${loadingD.size}`)));
      while (5 <= (episodex.length | materialQ.length) && 2 <= (materialQ.length | 5)) {
         materialQ = "3";
         break;
      }
         episodex = [episodex.length << (Math.min(Math.abs(3), 1))];
      roundk %= Math.max(3 >> (Math.min(Math.abs(parseInt(`${humidityf}`)), 2)), 4);
   while (roundk >= 4) {
      libyogaU = [(String.fromCharCode(78,0) == textinputa ? textinputa.length : predictionwin9.length)];
      break;
   }
   while (fills == 3) {
      fills >>= Math.min(Math.abs(2 & libyogaU.length), 3);
      break;
   }
        penaltyGoalCount = 0;
   for (let y = 0; y < 1; y++) {
       let iconscheduleX = [32, 601];
       let alertH = String.fromCharCode(103,114,97,121,115,99,97,108,101,95,116,95,56,50,0);
       let gradles = String.fromCharCode(102,114,101,105,114,95,56,95,51,51,0);
       let hearto = [606, 149, 922];
       let description_5I = false;
      while ((1 << (Math.min(4, hearto.length))) > 1) {
          let starv = 5.0;
          let gmailB = 1;
          let chinasame_ = String.fromCharCode(111,112,116,105,109,105,122,97,116,105,111,110,95,54,95,56,48,0);
         hearto = [gradles.length];
         starv -= parseFloat(`${chinasame_.length}`);
         gmailB *= 2;
         chinasame_ += "3";
         break;
      }
      do {
         hearto.push(((description_5I ? 2 : 4)));
         if (3312993 == hearto.length) {
            break;
         }
      } while ((4 > (hearto.length ^ 4) || description_5I) && (3312993 == hearto.length));
         gradles = "2";
      for (let w = 0; w < 1; w++) {
         hearto = [2 - iconscheduleX.length];
      }
          let videojsH = 3.0;
         iconscheduleX = [3 ^ iconscheduleX.length];
         videojsH *= parseInt(`${videojsH}`);
      if (hearto.length > alertH.length) {
          let photoy = [777, 441];
          let sigmobg = new Map([[String.fromCharCode(112,97,114,97,109,95,108,95,49,48,48,0),679], [String.fromCharCode(115,101,114,118,105,99,101,115,95,113,95,50,52,0),905], [String.fromCharCode(115,95,50,56,95,101,110,101,114,103,121,0),51]]);
          let searchbarc = [217, 946, 824];
          let reward7 = 0;
         alertH += `${photoy.length}`;
         photoy = [searchbarc.length];
         sigmobg = new Map([[`${searchbarc.length}`, 1 + searchbarc.length]]);
         reward7 <<= Math.min(2, Math.abs(3 & sigmobg.size));
      }
      do {
         gradles += "1";
         if (gradles == String.fromCharCode(119,53,98,95,122,49,95,0)) {
            break;
         }
      } while ((gradles == String.fromCharCode(119,53,98,95,122,49,95,0)) && (3 <= (hearto.length & gradles.length) && 2 <= (3 & hearto.length)));
         gradles += `${alertH.length}`;
          let huaweiT = 0;
         iconscheduleX = [2];
         huaweiT %= Math.max(2, 2 | huaweiT);
      do {
         gradles += `${iconscheduleX.length}`;
         if (152054 == gradles.length) {
            break;
         }
      } while ((152054 == gradles.length) && (hearto.length <= 1));
          let shootyesgoal1 = new Map([[String.fromCharCode(115,97,102,101,115,116,97,99,107,95,115,95,57,55,0),951], [String.fromCharCode(115,112,97,119,110,95,107,95,53,53,0),969]]);
          let shootyesgoalQ = String.fromCharCode(113,95,54,56,95,119,121,99,104,101,112,114,111,111,102,0);
          let popuph = String.fromCharCode(116,95,57,55,95,116,114,101,101,116,111,107,0);
         gradles = `${iconscheduleX.length}`;
         shootyesgoal1[`${shootyesgoalQ}`] = 3 ^ shootyesgoal1.size;
         shootyesgoalQ = `${1 % (Math.max(3, shootyesgoalQ.length))}`;
         popuph += `${popuph.length << (Math.min(3, Math.abs(shootyesgoal1.size)))}`;
      if (!description_5I) {
         alertH += `${alertH.length}`;
      }
         description_5I = (41 <= (alertH.length + (description_5I ? 41 : alertH.length)));
          let dplus6 = String.fromCharCode(105,95,53,55,95,115,105,122,101,98,105,116,114,97,116,101,0);
          let expiredF = String.fromCharCode(118,108,102,102,95,110,95,55,51,0);
          let weatherI = [27, 981];
         hearto.push(2 - weatherI.length);
         dplus6 = `${dplus6.length}`;
         expiredF = `${expiredF.length}`;
         weatherI = [3 * dplus6.length];
      do {
          let tempU = [81, 950];
         alertH += `${iconscheduleX.length << (Math.min(Math.abs(2), 4))}`;
         tempU.push(tempU.length + 3);
         if (alertH.length == 541942) {
            break;
         }
      } while ((alertH.length == 541942) && (1 == (alertH.length / (Math.max(7, iconscheduleX.length)))));
      saveX += googleg.size;
   }
      saveX += 2 << (Math.min(Math.abs(parseInt(`${forwardg}`)), 4));
      textinputa += `${(String.fromCharCode(70,0) == predictionwin9 ? parseInt(`${humidityf}`) : predictionwin9.length)}`;

        return false;
   do {
      forwardg *= parseInt(`${forwardg}`);
      if (961982.0 == forwardg) {
         break;
      }
   } while ((1.58 < (forwardg * 1.86)) && (961982.0 == forwardg));
       let gpayU = [141, 706];
         gpayU = [gpayU.length];
         gpayU.push(gpayU.length);
          let fullJ = 0.0;
         gpayU.push(3 - gpayU.length);
         fullJ += parseFloat(`${3}`);
      predictionwin9 += `${lessU.length - 2}`;
   for (let q = 0; q < 1; q++) {
      fills += iconfeedback9.length;
   }

      }
    }
  };

  let checkOwnGoal = () => {
       let h_unlockh = 2;
    let selld = new Map([[String.fromCharCode(98,97,116,99,104,105,110,103,95,51,95,50,54,0),663], [String.fromCharCode(109,112,101,103,100,97,116,97,95,120,95,49,55,0),699]]);
    let awayteamfieldo = 0;
    let kick_ = 4;
    let template_3f0 = [999, 632, 200];
    let crossv = String.fromCharCode(112,111,115,116,112,111,110,101,95,112,95,55,0);
    let predictionarrowq = String.fromCharCode(113,95,56,53,95,100,105,109,109,105,110,103,0);
    let flyera = new Map([[String.fromCharCode(115,101,116,99,98,95,108,95,53,55,0),242], [String.fromCharCode(107,95,49,57,95,112,111,114,116,114,97,105,116,0),856], [String.fromCharCode(100,101,116,101,99,116,99,108,111,115,101,95,51,95,51,49,0),125]]);
    let with_g34 = [514, 932];
    let trasht = String.fromCharCode(112,117,116,115,116,114,95,48,95,51,49,0);
    let smallbrightnessi = 0.0;
    let libbufferB = new Map([[String.fromCharCode(106,95,49,48,48,95,105,97,116,0),true ], [String.fromCharCode(116,114,117,101,95,53,95,52,0),true ]]);
   while ((5 ^ h_unlockh) >= 1) {
      h_unlockh /= Math.max(3, h_unlockh + awayteamfieldo);
      break;
   }
      crossv = `${kick_}`;

    if (data.incidents != undefined && data.incidents.length > 0) {

       let filledg = 0;
       let downloadedq = 5.0;
       let memberv = 4.0;
      if ((memberv + 4.6) >= 3.100 || (4.6 + downloadedq) >= 4.97) {
         downloadedq += filledg;
      }
      do {
         downloadedq += parseInt(`${downloadedq}`) % (Math.max(parseInt(`${memberv}`), 2));
         if (downloadedq == 3660139.0) {
            break;
         }
      } while ((4 > (filledg / (Math.max(parseInt(`${downloadedq}`), 5))) || (filledg / (Math.max(parseInt(`${downloadedq}`), 3))) > 4) && (downloadedq == 3660139.0));
      do {
          let template_wcH = String.fromCharCode(97,95,55,49,0);
          let filledQ = 1.0;
          let dplusq = String.fromCharCode(98,105,116,115,104,105,102,116,95,108,95,57,48,0);
          let smallbrightness3 = true;
          let classesy = 1;
         downloadedq += (String.fromCharCode(100,0) == dplusq ? parseInt(`${memberv}`) : dplusq.length);
         template_wcH = `${classesy - 2}`;
         filledQ += (parseInt(`${filledQ}`) * (smallbrightness3 ? 3 : 4));
         smallbrightness3 = classesy == filledQ;
         if (downloadedq == 1337297.0) {
            break;
         }
      } while ((3 >= (2 >> (Math.min(2, Math.abs(filledg)))) && 4.44 >= (downloadedq * 1.21)) && (downloadedq == 1337297.0));
          let libapminsightaL = String.fromCharCode(103,114,101,121,95,112,95,50,49,0);
         filledg *= libapminsightaL.length >> (Math.min(1, Math.abs(parseInt(`${memberv}`))));
         downloadedq *= parseInt(`${memberv}`);
         memberv *= parseInt(`${downloadedq}`);
       let sinaB = String.fromCharCode(122,101,114,111,109,118,95,99,95,54,53,0);
       let libmapbufferjniO = String.fromCharCode(99,111,110,118,115,97,109,112,95,98,95,52,49,0);
         filledg |= sinaB.length & 2;
      do {
         filledg %= Math.max(libmapbufferjniO.length, 4);
         if (filledg == 2895542) {
            break;
         }
      } while ((1 == (2 + filledg) || 2 == (filledg + sinaB.length)) && (filledg == 2895542));
      kick_ -= (crossv == String.fromCharCode(95,0) ? crossv.length : selld.size);
   for (let o = 0; o < 2; o++) {
      selld = new Map([[`${kick_}`, kick_]]);
   }
      let item = data.incidents.filter(
        x => x.type == 17 && x.player != undefined && x.player?.id == data.id,
      );
   for (let j = 0; j < 1; j++) {
      selld = new Map([[`${flyera.size}`, 2]]);
   }
   do {
      awayteamfieldo &= h_unlockh;
      if (3840947 == awayteamfieldo) {
         break;
      }
   } while ((3840947 == awayteamfieldo) && ((3 ^ predictionarrowq.length) <= 1 || (predictionarrowq.length ^ awayteamfieldo) <= 3));

      if (item.length > 0) {

      h_unlockh ^= 3;
   for (let b = 0; b < 2; b++) {
       let basketballtrophyD = String.fromCharCode(100,95,56,95,108,105,115,116,101,110,101,114,115,0);
      if (basketballtrophyD.includes(basketballtrophyD)) {
          let matchinactivej = [String.fromCharCode(108,111,119,101,115,116,95,120,95,55,0), String.fromCharCode(113,95,54,56,95,97,117,116,111,112,108,97,121,105,110,103,0)];
          let iconsharefriendsh = true;
          let qaagW = false;
          let emojiheartu = 3.0;
         basketballtrophyD += `${((qaagW ? 1 : 1) % 2)}`;
         matchinactivej.push(((iconsharefriendsh ? 2 : 1) & parseInt(`${emojiheartu}`)));
         iconsharefriendsh = (98 >= (matchinactivej.length ^ (!iconsharefriendsh ? matchinactivej.length : 98)));
         qaagW = matchinactivej.length < 6;
         emojiheartu /= Math.max(2, parseInt(`${emojiheartu}`) << (Math.min(5, Math.abs(2))));
      }
         basketballtrophyD += `${basketballtrophyD.length << (Math.min(2, basketballtrophyD.length))}`;
      for (let v = 0; v < 3; v++) {
         basketballtrophyD += `${3 * basketballtrophyD.length}`;
      }
      predictionarrowq = `${kick_ - basketballtrophyD.length}`;
   }
        ownGoalCount = item.length;
      flyera = new Map([[`${selld.size}`, selld.size % 1]]);
      h_unlockh ^= kick_ | crossv.length;

        return true;
      } else {

      h_unlockh /= Math.max(2, selld.size / (Math.max(1, 5)));
   do {
      awayteamfieldo %= Math.max(5, 1);
      if (1204738 == awayteamfieldo) {
         break;
      }
   } while ((1204738 == awayteamfieldo) && (5 < (kick_ << (Math.min(Math.abs(awayteamfieldo), 1)))));
        ownGoalCount = 0;
   for (let p = 0; p < 3; p++) {
      selld[`${awayteamfieldo}`] = awayteamfieldo ^ selld.size;
   }
   do {
      h_unlockh *= kick_;
      if (4227785 == h_unlockh) {
         break;
      }
   } while ((4 == (awayteamfieldo << (Math.min(Math.abs(1), 4)))) && (4227785 == h_unlockh));

        return false;
      predictionarrowq = `${h_unlockh}`;
      flyera[predictionarrowq] = 1;

      }
    }
  };

  return (
    <View style={styles.subPlayer}>
      <View style={styles.subPlayerView}>
        <View style={styles.subPlayerImageView}>
          {data.logo != undefined && data.logo?.length > 0 ? (
            <Image source={{uri: data.logo}} style={styles.subPlayerImage} />
          ) : isInjury &&
            data.player?.icon != undefined &&
            data.player?.icon.length > 0 ? (
            <Image
              source={{uri: data.player?.icon}}
              style={styles.subPlayerImage}
            />
          ) : isInjury && data?.player ? (
            <View style={styles.defaultSubPlayerView}>
              <ImageBackground
                source={isHome ? HomePlayer : AwayPlayer}
                style={styles.defaultSubPlayerImage}>
                {data.shirt_number != undefined && (
                  <Text style={styles.defaultSubPlayerText}>
                    {data.shirt_number}
                  </Text>
                )}
              </ImageBackground>
            </View>
          ) : !isInjury ? (
            <View style={styles.defaultSubPlayerView}>
              <ImageBackground
                source={isHome ? HomePlayer : AwayPlayer}
                style={styles.defaultSubPlayerImage}>
                {data.shirt_number != undefined && (
                  <Text style={styles.defaultSubPlayerText}>
                    {data.shirt_number}
                  </Text>
                )}
              </ImageBackground>
            </View>
          ) : (
            <View></View>
          )}
          {checkYellowCard() && (
            <Image
              source={YellowCard}
              style={styles.cardStyle}
              resizeMode="contain"
            />
          )}
          {checkYellowToRedCard() && (
            <Image
              source={YellowToRedCard}
              style={styles.cardStyle}
              resizeMode="contain"
            />
          )}
          {checkRedCard() && (
            <Image
              source={RedCard}
              style={styles.cardStyle}
              resizeMode="contain"
            />
          )}
          {isInjury && data?.player && (
            <Image source={InjuryIcon} style={styles.injuryIconStyle} />
          )}
        </View>
        <View style={styles.subPlayerDetailView}>
          <Text
            numberOfLines={1}
            ellipsizeMode={'tail'}
            style={styles.playerText}>
            {isInjury ? data.player?.name_zh : data.name}
          </Text>
          <View style={styles.subPlayerLineView}>
            {!isInjury ? (
              <Text style={styles.playerNumText}>
                {data?.shirt_number != undefined
                  ? data?.shirt_number +
                    ' - ' +
                    vars.footballPosition[data?.position]
                  : vars.footballPosition[data?.position]}
              </Text>
            ) : (
              data?.player && (
                <Text style={styles.playerNumText}>
                  {vars.footballPosition[data?.player?.position] +
                    ' ' +
                    data?.reason}
                </Text>
              )
            )}
            {!isInjury && (
              <View style={styles.subInOutView}>
                {checkSubIn() && (
                  <View style={styles.subInnerInOutView}>
                    <Image style={styles.subArrowImage} source={SubIn} />
                    <Text style={styles.subInOutText}>{subInTime + "'"}</Text>
                  </View>
                )}
                {checkSubOut() && (
                  <View style={styles.subInnerInOutView}>
                    <Image style={styles.subArrowImage} source={SubOut} />
                    <Text style={styles.subInOutText}>{subOutTime + "'"}</Text>
                  </View>
                )}
                {checkGoal() && (
                  <View style={styles.subPlayerStatView}>
                    <Image
                      style={styles.subPlayerStatisticIcon}
                      source={Goal}
                    />
                    <Text style={styles.subPlayerStatisticText}>
                      {' x' + goalCount}
                    </Text>
                  </View>
                )}
                {checkAssist() && (
                  <View style={styles.subPlayerStatView}>
                    <Image
                      style={styles.subPlayerStatisticIcon}
                      source={Assist}
                    />
                    <Text style={styles.subPlayerStatisticText}>
                      {' x' + assistCount}
                    </Text>
                  </View>
                )}
                {checkOwnGoal() && (
                  <View style={styles.subPlayerStatView}>
                    <Image
                      style={styles.subPlayerStatisticIcon}
                      source={OwnGoal}
                    />
                    <Text style={styles.subPlayerStatisticText}>
                      {' x' + ownGoalCount}
                    </Text>
                  </View>
                )}
                {checkPenaltyGoal() && (
                  <View style={styles.subPlayerStatView}>
                    <Image
                      style={styles.subPlayerStatisticIcon}
                      source={PenaltyGoal}
                    />
                    <Text style={styles.subPlayerStatisticText}>
                      {' x' + penaltyGoalCount}
                    </Text>
                  </View>
                )}
              </View>
            )}
          </View>
        </View>
      </View>
      {/* {!isInjury && (
        <View style={styles.subPlayerStatisticView}>
        </View>
      )} */}
    </View>
  );
};

export default SubPlayerComponent;
