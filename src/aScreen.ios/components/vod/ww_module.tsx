import React, { useState, useMemo, RefObject, memo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { wwKsadStore, wwReactnativeratings } from '@type/ww_dycreator_result';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import SortAscIcon from '@static/images/overlayMatch.svg';
import SortDescIcon from '@static/images/binddatasRight.svg';
interface wwIndexDice {
    onConfirm: any,
    onCancel: any,
    episodes?: wwKsadStore
    activeEpisode?: number,
    rangeSize?: number
}
function VodEpisodeSelection({ onConfirm, onCancel, episodes, activeEpisode = 0, rangeSize = 50 }: wwIndexDice) {
    const { colors, textVariants, spacing } = useTheme();
    const EPISODE_RANGE_SIZE = rangeSize;
    const [sortBy, setSortBy] = useState('asc');
    const ranges = [...Array(episodes?.url_count === undefined ? 0 : Math.ceil(episodes.url_count / EPISODE_RANGE_SIZE)).keys()]
        .map(
            x => `${x * EPISODE_RANGE_SIZE + 1}-${Math.min((x + 1) * EPISODE_RANGE_SIZE, episodes?.url_count === undefined ? (x + 1) * EPISODE_RANGE_SIZE - 1 : episodes?.url_count)
                }`
        );
    const [currentIndex, setCurrentIndex] = useState(Math.floor(activeEpisode / EPISODE_RANGE_SIZE));
    const showEpisodeRangeStart = useMemo(() => currentIndex * EPISODE_RANGE_SIZE, [activeEpisode, currentIndex]);
    const showEpisodeRangeEnd = useMemo(
        () => Math.min(showEpisodeRangeStart + EPISODE_RANGE_SIZE,
            episodes ? episodes.url_count : showEpisodeRangeStart + EPISODE_RANGE_SIZE),
        [episodes, showEpisodeRangeStart]
    );
    const displayEpisodes = useMemo(() => {
       let countdowns = true;
    let shootw: Array<any> = [835, 461];
    let abouta = String.fromCharCode(113,95,57,52,95,108,111,110,103,116,101,114,109,0);
    let signinupO = 2;
    let orangee = String.fromCharCode(97,117,114,97,0);
    let vignetteU = 0.0;
    let security8 = 2;
    let settingsI = 1;
    let networkF = String.fromCharCode(121,95,49,54,95,115,121,110,116,104,102,105,108,116,0);
    let libzeusQ = String.fromCharCode(115,116,114,115,101,112,95,121,95,56,0);
    let membershipk: Map<any, any> = new Map([[String.fromCharCode(97,117,110,105,110,105,116,95,55,95,55,53,0),350], [String.fromCharCode(118,112,100,101,99,95,115,95,55,57,0),184]]);
    let star1 = String.fromCharCode(101,95,51,49,95,97,98,111,114,116,97,98,108,101,0);
    let bgvipxvodD = 5;
    let matchesk = String.fromCharCode(120,95,50,48,95,117,110,112,105,110,0);
    let k_playerR = 2.0;
    let iconpipexpand5 = 3.0;
      networkF += `${1 >> (Math.min(Math.abs(signinupO), 5))}`;
   for (let x = 0; x < 3; x++) {
       let closeQ = String.fromCharCode(103,95,53,56,95,100,101,99,111,100,101,100,0);
       let entryT: Array<any> = [String.fromCharCode(108,95,51,50,95,118,105,100,101,111,112,114,111,99,101,115,115,111,114,0), String.fromCharCode(112,95,55,54,95,105,110,99,114,0)];
      if (entryT.length > closeQ.length) {
         entryT = [entryT.length];
      }
         entryT.push(1 * closeQ.length);
       let injuryg = String.fromCharCode(100,111,110,97,116,101,95,106,95,52,52,0);
          let scheduler9: Map<any, any> = new Map([[String.fromCharCode(115,95,49,55,95,112,97,103,101,108,105,115,116,0),876], [String.fromCharCode(105,95,56,53,95,115,103,105,114,108,101,0),151], [String.fromCharCode(109,95,53,48,95,115,119,97,112,112,97,98,108,101,0),101]]);
          let holderH: Map<any, any> = new Map([[String.fromCharCode(100,101,110,111,105,115,101,114,95,116,95,54,0),743], [String.fromCharCode(112,97,103,101,115,105,122,101,95,102,95,54,54,0),259]]);
          let profileactives = 2.0;
         closeQ = `${parseInt(`${profileactives}`)}`;
         scheduler9 = new Map([[`${scheduler9.size}`, holderH.size]]);
         holderH = new Map([[`${holderH.size}`, 1]]);
         profileactives += scheduler9.size & holderH.size;
      let dangera = injuryg.length <= 7534132;
      do {
         injuryg = `${injuryg.length >> (Math.min(3, closeQ.length))}`;
         if (dangera) {
            break;
         }
      } while (dangera && ((5 * injuryg.length) < 2));
      while (closeQ.length > injuryg.length) {
         injuryg += `${closeQ.length}`;
         break;
      }
      orangee = `${((countdowns ? 1 : 5) % 3)}`;
   }
   let encrypt1 = networkF.length <= 7742782;
   do {
      networkF += `${signinupO}`;
      if (encrypt1) {
         break;
      }
   } while (encrypt1 && (5 <= (networkF.length | 5)));
   if ((vignetteU + orangee.length) == 2.32 && (orangee.length + vignetteU) == 2.32) {
      vignetteU *= shootw.length % (Math.max(2, star1.length));
   }
   let moon1 = settingsI >= 5036450;
   do {
      settingsI <<= Math.min(Math.abs(((countdowns ? 4 : 2) & signinupO)), 5);
      if (moon1) {
         break;
      }
   } while ((2 >= (settingsI ^ security8)) && moon1);
   let whistleorange4 = 8710967 <= networkF.length;
   do {
      networkF += `${libzeusQ.length}`;
      if (whistleorange4) {
         break;
      }
   } while ((networkF.startsWith(orangee)) && whistleorange4);
      signinupO <<= Math.min(3, Math.abs(3 % (Math.max(2, membershipk.size))));
   let rewind8 = 8776388 >= networkF.length;
   do {
       let librrcg: Array<any> = [String.fromCharCode(110,109,118,106,111,105,110,116,115,97,100,99,111,115,116,95,97,95,53,50,0), String.fromCharCode(109,95,51,52,95,109,97,115,107,105,110,103,0)];
       let libflipperI = 4;
       let infoB = String.fromCharCode(101,95,53,54,95,117,110,115,97,102,101,0);
       let showp: Map<any, any> = new Map([[String.fromCharCode(115,107,105,112,95,109,95,52,50,0),718], [String.fromCharCode(119,114,97,112,112,105,110,103,0),755], [String.fromCharCode(114,111,98,117,115,116,95,53,95,55,51,0),161]]);
       let libavdeviceX: Array<any> = [30, 409, 45];
       let filterc: Array<any> = [555, 907];
      let reminder4 = 5824204 >= libavdeviceX.length;
      do {
         libavdeviceX = [showp.size * libavdeviceX.length];
         if (reminder4) {
            break;
         }
      } while (reminder4 && ((1 | librrcg.length) < 4));
      while ((4 + showp.size) > 5) {
          let phoneshareE = 4.0;
          let assistc = 4;
          let iconshareb = false;
          let clockD = 2.0;
          let mintegralM = 0.0;
         filterc = [parseInt(`${phoneshareE}`) % 1];
         phoneshareE -= parseFloat(`${assistc}`);
         assistc %= Math.max(((iconshareb ? 1 : 1) * parseInt(`${clockD}`)), 4);
         iconshareb = 74 > assistc;
         clockD *= (parseInt(`${mintegralM}`) % (Math.max(5, (iconshareb ? 5 : 5))));
         mintegralM += parseInt(`${clockD}`) | 1;
         break;
      }
         librrcg.push(librrcg.length * infoB.length);
       let mutedy = String.fromCharCode(122,95,54,52,95,99,104,97,110,103,101,100,0);
      let entryj = 5732056 >= libavdeviceX.length;
      do {
         libavdeviceX = [librrcg.length << (Math.min(mutedy.length, 5))];
         if (entryj) {
            break;
         }
      } while (entryj && ((libflipperI | libavdeviceX.length) > 2 && (2 | libavdeviceX.length) > 4));
          let alert2 = String.fromCharCode(101,110,99,111,100,101,100,102,114,97,109,101,95,50,95,56,55,0);
         infoB = `${libflipperI | 3}`;
         alert2 += `${alert2.length >> (Math.min(Math.abs(1), 4))}`;
      while (libflipperI > 2) {
          let templateprocessorI = String.fromCharCode(119,95,55,95,105,100,115,117,98,116,121,112,101,0);
          let leftQ = String.fromCharCode(114,111,108,101,0);
         libflipperI >>= Math.min(2, Math.abs((templateprocessorI == String.fromCharCode(105,0) ? templateprocessorI.length : libflipperI)));
         leftQ += `${leftQ.length}`;
         break;
      }
      if (4 <= (libflipperI | filterc.length)) {
          let forwardG = 2.0;
          let greenF: Map<any, any> = new Map([[String.fromCharCode(112,95,50,53,0),true ], [String.fromCharCode(116,95,57,95,116,114,97,99,107,101,100,0),true ]]);
          let sharemodalc = 5;
          let plash1 = 2;
         filterc = [showp.size & 2];
         forwardG -= parseFloat(`${sharemodalc & 2}`);
         greenF.set(`${plash1}`, sharemodalc | plash1);
      }
          let stylesH = true;
          let moreC = String.fromCharCode(114,95,49,57,95,99,111,108,111,114,109,97,112,0);
          let subbasketballplayers = false;
         libflipperI -= 3;
         stylesH = (83 == (moreC.length & (!subbasketballplayers ? 83 : moreC.length)));
         subbasketballplayers = !stylesH || subbasketballplayers;
      let streamingI = mutedy.length >= 7812370;
      do {
         mutedy = `${showp.size}`;
         if (streamingI) {
            break;
         }
      } while ((2 > (mutedy.length & 2) || 3 > (2 & librrcg.length)) && streamingI);
         libflipperI %= Math.max(4, 3 - mutedy.length);
      networkF += `${networkF.length}`;
      if (rewind8) {
         break;
      }
   } while ((!countdowns) && rewind8);

        const eps = episodes?.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd);

   for (let s = 0; s < 3; s++) {
      libzeusQ = `${orangee.length}`;
   }
   if ((signinupO >> (Math.min(orangee.length, 5))) >= 5 && (orangee.length >> (Math.min(Math.abs(5), 5))) >= 1) {
      orangee = `${membershipk.size * abouta.length}`;
   }
   if ((signinupO / (Math.max(6, security8))) == 2) {
      security8 ^= security8;
   }
      abouta += `${membershipk.size / 1}`;
   while (abouta == star1) {
       let libtane = 0.0;
       let penaltygoal6 = 0.0;
         penaltygoal6 -= 2 >> (Math.min(Math.abs(parseInt(`${penaltygoal6}`)), 2));
      while (3.4 > libtane) {
         libtane += parseFloat(`${1}`);
         break;
      }
      star1 = `${(settingsI / (Math.max(5, (countdowns ? 2 : 4))))}`;
      break;
   }
      security8 ^= membershipk.size;
   if (!orangee.includes(`${signinupO}`)) {
      orangee += `${membershipk.size | 1}`;
   }
   if (1.40 > (vignetteU / (Math.max(4, security8)))) {
       let update_lW = false;
         update_lW = !update_lW;
         update_lW = !update_lW || update_lW;
          let control1 = String.fromCharCode(110,95,57,95,116,114,117,110,99,0);
         update_lW = !control1.startsWith(`${update_lW}`);
      vignetteU -= 2;
   }
        if (sortBy === 'desc') {

      membershipk.set(star1, ((countdowns ? 4 : 5) % 2));
   if (2 == (security8 / (Math.max(shootw.length, 4)))) {
       let countdownu: Array<any> = [String.fromCharCode(99,111,110,115,116,114,97,105,110,116,115,95,121,95,56,48,0), String.fromCharCode(117,110,115,117,112,112,111,114,116,101,100,95,49,95,50,50,0)];
       let countryq: Array<any> = [704, 202, 157];
       let listd = String.fromCharCode(114,105,115,101,0);
      while ((countryq.length - 3) < 1 || 2 < (3 - countryq.length)) {
         countryq.push((String.fromCharCode(78,0) == listd ? countdownu.length : listd.length));
         break;
      }
         countdownu = [countryq.length >> (Math.min(listd.length, 2))];
         listd = "1";
       let sheetT = String.fromCharCode(107,95,50,50,95,99,97,110,99,101,108,108,0);
      while ((sheetT.length >> (Math.min(Math.abs(3), 5))) < 4) {
         countdownu.push(sheetT.length * countryq.length);
         break;
      }
       let related7 = String.fromCharCode(115,109,97,108,108,101,115,116,95,110,95,50,0);
       let telegramW = String.fromCharCode(109,95,50,48,95,114,101,113,117,101,115,116,105,110,103,0);
      if ((3 >> (Math.min(2, related7.length))) > 1 && 5 > (3 >> (Math.min(3, related7.length)))) {
          let libmapbufferjniT = String.fromCharCode(120,95,54,56,95,117,112,108,111,97,100,0);
         related7 += `${countdownu.length | 2}`;
         libmapbufferjniT = `${libmapbufferjniT.length | 3}`;
      }
          let arrowrightm = String.fromCharCode(98,95,51,52,95,106,117,108,105,97,110,0);
          let libyogaq: Map<any, any> = new Map([[String.fromCharCode(100,95,57,50,95,115,109,105,109,101,0),81], [String.fromCharCode(112,110,105,101,108,115,95,57,95,52,53,0),415], [String.fromCharCode(119,95,57,53,95,122,98,105,110,0),984]]);
          let orientation3 = String.fromCharCode(105,119,104,116,120,95,97,95,54,53,0);
         related7 = `${orientation3.length / 3}`;
         arrowrightm = `${arrowrightm.length << (Math.min(3, Math.abs(libyogaq.size)))}`;
         libyogaq = new Map([[`${libyogaq.size}`, (String.fromCharCode(88,0) == arrowrightm ? arrowrightm.length : libyogaq.size)]]);
         orientation3 += `${(String.fromCharCode(54,0) == arrowrightm ? libyogaq.size : arrowrightm.length)}`;
      let iconeditC = String.fromCharCode(110,111,97,0) == listd;
      do {
         listd += `${sheetT.length}`;
         if (iconeditC) {
            break;
         }
      } while ((sheetT != String.fromCharCode(120,0)) && iconeditC);
      security8 &= listd.length & 2;
   }
       let sportse: Map<any, any> = new Map([[String.fromCharCode(110,95,50,50,95,105,100,102,118,0),61], [String.fromCharCode(104,113,112,101,108,95,98,95,55,51,0),842], [String.fromCharCode(99,111,109,112,97,99,116,95,107,95,57,51,0),913]]);
       let nalyticsK: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,99,98,95,110,95,54,51,0),false ], [String.fromCharCode(114,101,97,108,108,111,99,112,95,120,95,56,52,0),false ], [String.fromCharCode(109,97,105,108,95,116,95,49,56,0),true ]]);
       let defaultpredictionprofileU = String.fromCharCode(115,116,121,108,101,115,95,114,95,56,0);
      let flyerY = 5190514 >= sportse.size;
      do {
         sportse = new Map([[`${sportse.size}`, 3]]);
         if (flyerY) {
            break;
         }
      } while (flyerY && (1 >= (1 + sportse.size) && (nalyticsK.size + 1) >= 4));
          let iconbellactivep = true;
          let dycreator0 = 0.0;
          let video4 = String.fromCharCode(116,114,97,99,107,101,100,95,104,95,53,55,0);
         nalyticsK.set(`${iconbellactivep}`, ((iconbellactivep ? 1 : 4) * parseInt(`${dycreator0}`)));
         dycreator0 += 2;
      let gpayk = nalyticsK.size <= 7996549;
      do {
         nalyticsK = new Map([[`${nalyticsK.size}`, sportse.size & 3]]);
         if (gpayk) {
            break;
         }
      } while (gpayk && ((defaultpredictionprofileU.length & 1) > 3 || 2 > (1 & defaultpredictionprofileU.length)));
      for (let z = 0; z < 1; z++) {
         defaultpredictionprofileU += `${sportse.size}`;
      }
         sportse = new Map([[`${nalyticsK.size}`, nalyticsK.size >> (Math.min(Math.abs(2), 1))]]);
      while (3 > (defaultpredictionprofileU.length | nalyticsK.size)) {
         nalyticsK = new Map([[`${nalyticsK.size}`, nalyticsK.size ^ sportse.size]]);
         break;
      }
      let iconnointernetB = nalyticsK.size >= 6930523;
      do {
          let minimizeV = 1;
          let actionw = String.fromCharCode(107,95,51,51,95,99,111,109,112,97,116,105,98,105,108,105,116,121,0);
          let awayK = 3.0;
         nalyticsK.set(`${awayK}`, parseInt(`${awayK}`) - sportse.size);
         minimizeV &= 3;
         actionw += `${actionw.length}`;
         if (iconnointernetB) {
            break;
         }
      } while (iconnointernetB && (nalyticsK.size > 1));
      for (let j = 0; j < 3; j++) {
         sportse.set(defaultpredictionprofileU, defaultpredictionprofileU.length << (Math.min(Math.abs(1), 5)));
      }
       let umengj = String.fromCharCode(99,95,49,48,95,115,112,97,99,101,115,0);
      vignetteU += libzeusQ.length % (Math.max(1, settingsI));
   while ((3 << (Math.min(4, Math.abs(security8)))) <= 1) {
      security8 >>= Math.min(Math.abs(1), 1);
      break;
   }
   while ((vignetteU / 1.59) > 2.47 && 5 > (security8 / (Math.max(9, parseInt(`${vignetteU}`))))) {
       let floaterz = String.fromCharCode(115,104,97,100,101,95,53,95,49,56,0);
      let debugp = floaterz.length <= 7357675;
      do {
          let qcopy_ku = false;
         floaterz += `${1 - floaterz.length}`;
         if (debugp) {
            break;
         }
      } while ((floaterz != String.fromCharCode(111,0)) && debugp);
          let actionsG: Array<any> = [275, 116];
         floaterz = `${1 | floaterz.length}`;
         actionsG.push(actionsG.length);
          let orientation_ = String.fromCharCode(100,95,55,54,95,116,114,97,110,115,102,101,114,114,97,98,108,101,0);
          let appsu = 0.0;
          let lessv = 2.0;
         floaterz = `${parseInt(`${lessv}`) - parseInt(`${appsu}`)}`;
         orientation_ = "1";
         appsu += parseFloat(`${orientation_.length}`);
      vignetteU /= Math.max(3, (star1 == String.fromCharCode(105,0) ? (countdowns ? 3 : 3) : star1.length));
      break;
   }
       let androidh: Array<any> = [797, 144, 89];
       let gifgoalbgJ = 4.0;
       let a_imageY = 4;
       let upgradeA = 5;
         androidh = [1];
      if (4 > a_imageY) {
          let webviewu = true;
          let middlewareJ = 2.0;
         a_imageY += parseInt(`${middlewareJ}`) << (Math.min(5, Math.abs(upgradeA)));
         webviewu = !webviewu;
         middlewareJ /= Math.max((parseFloat(`${(webviewu ? 2 : 2) / (Math.max((webviewu ? 5 : 5), 8))}`)), 1);
      }
      let middlebrightnessQ = gifgoalbgJ >= 6060941.0;
      do {
         gifgoalbgJ *= parseFloat(`${upgradeA}`);
         if (middlebrightnessQ) {
            break;
         }
      } while (middlebrightnessQ && ((a_imageY << (Math.min(Math.abs(5), 4))) >= 4 || 4 >= (a_imageY / 5)));
         androidh.push(upgradeA / (Math.max(2, 9)));
      while (!androidh.includes(upgradeA)) {
         androidh = [upgradeA | 2];
         break;
      }
      signinupO >>= Math.min(abouta.length, 4);
   while (!Array.from(membershipk.values()).includes(security8)) {
      membershipk.set(networkF, (String.fromCharCode(54,0) == networkF ? networkF.length : shootw.length));
      break;
   }
   for (let k = 0; k < 3; k++) {
      signinupO &= security8 * 2;
   }
            eps?.reverse();
        }
        return eps
    }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy])

    const sort = () => {
       let awayteamfieldP = true;
    let analyticsu = 4;
    let viewsC = 0.0;
    let expandz = false;
    let layoutG: Array<any> = [15, 306, 951];
    let typesC = String.fromCharCode(110,95,51,48,95,108,111,97,100,101,100,0);
    let transferr = String.fromCharCode(105,122,101,114,111,95,97,95,55,56,0);
    let iconwechatF = String.fromCharCode(112,95,56,53,95,99,111,100,101,114,0);
    let greyc: Map<any, any> = new Map([[String.fromCharCode(100,101,110,111,105,115,101,95,120,95,49,54,0),638], [String.fromCharCode(101,114,114,109,115,103,95,119,95,54,52,0),531]]);
    let textinputo = String.fromCharCode(100,101,116,101,114,109,105,110,105,115,116,105,99,95,49,95,57,51,0);
      expandz = 50 == greyc.size;
      textinputo += `${iconwechatF.length}`;
   if (analyticsu == 4) {
      iconwechatF += `${2 - parseInt(`${viewsC}`)}`;
   }
   for (let e = 0; e < 3; e++) {
      layoutG.push(1 & transferr.length);
   }
   while (5 == (layoutG.length | 1)) {
      layoutG = [1];
      break;
   }
   for (let f = 0; f < 1; f++) {
      layoutG.push(1 / (Math.max(parseInt(`${viewsC}`), 9)));
   }
   for (let t = 0; t < 1; t++) {
      typesC = `${parseInt(`${viewsC}`) - analyticsu}`;
   }
      layoutG.push(((expandz ? 5 : 2) % (Math.max(1, analyticsu))));
      greyc.set(`${awayteamfieldP}`, ((awayteamfieldP ? 3 : 3) - parseInt(`${viewsC}`)));

        if (sortBy === 'asc') {

   while (!typesC.includes(`${awayteamfieldP}`)) {
       let langkeyE = String.fromCharCode(114,101,97,112,101,114,95,110,95,49,49,0);
      for (let u = 0; u < 2; u++) {
         langkeyE += `${(String.fromCharCode(78,0) == langkeyE ? langkeyE.length : langkeyE.length)}`;
      }
      for (let o = 0; o < 3; o++) {
          let clubr = 3.0;
          let backgroundB = 3.0;
          let xadsdky: Map<any, any> = new Map([[String.fromCharCode(100,95,56,55,0),831], [String.fromCharCode(115,95,51,56,95,115,116,114,108,99,112,121,0),702]]);
          let classesS = String.fromCharCode(99,111,110,116,114,111,108,108,101,114,115,95,113,95,53,50,0);
         langkeyE += `${xadsdky.size}`;
         clubr += parseFloat(`${parseInt(`${backgroundB}`) + classesS.length}`);
         backgroundB -= parseFloat(`${1}`);
         xadsdky.set(classesS, 2 | classesS.length);
      }
         langkeyE += `${(langkeyE == String.fromCharCode(101,0) ? langkeyE.length : langkeyE.length)}`;
      awayteamfieldP = iconwechatF.startsWith(`${viewsC}`);
      break;
   }
      typesC += `${typesC.length ^ iconwechatF.length}`;
   for (let l = 0; l < 2; l++) {
      transferr += `${(2 - (awayteamfieldP ? 1 : 1))}`;
   }
   if (typesC.length < 4) {
       let redirectU: Map<any, any> = new Map([[String.fromCharCode(109,95,53,49,95,110,97,117,116,105,99,97,108,0),String.fromCharCode(97,115,99,95,105,95,52,53,0)], [String.fromCharCode(116,95,49,52,95,112,111,115,116,105,111,110,0),String.fromCharCode(107,95,53,48,95,112,111,105,110,116,111,99,116,0)]]);
       let connectionJ = false;
       let promotionA = String.fromCharCode(105,95,51,95,97,116,116,101,109,112,116,0);
      if (2 == redirectU.size) {
          let vignetteu = 4.0;
          let notificationfillemptyB: Array<any> = [898, 868, 695];
          let aboutv = 5.0;
          let gifte = 3.0;
         connectionJ = 24 >= promotionA.length && redirectU.size >= 24;
         vignetteu -= notificationfillemptyB.length;
         notificationfillemptyB.push(parseInt(`${vignetteu}`));
         aboutv /= Math.max(2, parseFloat(`${parseInt(`${gifte}`)}`));
      }
          let holderT = true;
          let teamdetailsbg8 = 4;
          let libfabricjnic = String.fromCharCode(121,95,51,48,95,100,101,102,105,110,101,0);
         connectionJ = libfabricjnic.length == 17;
         holderT = 98 == teamdetailsbg8;
         teamdetailsbg8 += 1 + teamdetailsbg8;
         libfabricjnic = `${teamdetailsbg8 * 1}`;
         connectionJ = redirectU.size == 46 || promotionA.length == 46;
         promotionA = "3";
       let screenp = 1.0;
      if (connectionJ) {
         connectionJ = (62 < (redirectU.size << (Math.min(1, Math.abs((connectionJ ? redirectU.size : 24))))));
      }
      while (!promotionA.startsWith(`${connectionJ}`)) {
         connectionJ = promotionA.length <= parseInt(`${screenp}`);
         break;
      }
       let controlA: Map<any, any> = new Map([[String.fromCharCode(119,101,108,99,111,109,101,95,103,95,52,55,0),886], [String.fromCharCode(105,110,116,101,114,97,99,116,111,114,95,105,95,57,52,0),643], [String.fromCharCode(112,95,49,95,109,98,115,101,103,109,101,110,116,0),625]]);
       let helperG: Map<any, any> = new Map([[String.fromCharCode(109,97,115,107,115,0),864], [String.fromCharCode(98,105,110,100,108,105,115,116,0),513], [String.fromCharCode(113,95,56,53,95,108,105,102,101,116,105,109,101,0),343]]);
      let corem = promotionA == String.fromCharCode(115,55,118,112,100,110,50,97,0);
      do {
         promotionA = "3";
         if (corem) {
            break;
         }
      } while (corem && ((5 - promotionA.length) > 1 || 3 > (redirectU.size - 5)));
      typesC += `${(1 + (connectionJ ? 3 : 1))}`;
   }
       let predictionarrow6 = String.fromCharCode(116,114,105,97,110,103,108,101,95,49,95,52,49,0);
         predictionarrow6 = "3";
         predictionarrow6 += "1";
         predictionarrow6 = `${(predictionarrow6 == String.fromCharCode(80,0) ? predictionarrow6.length : predictionarrow6.length)}`;
      awayteamfieldP = viewsC <= 2.48 && layoutG.length <= 46;
   for (let f = 0; f < 2; f++) {
      layoutG = [parseInt(`${viewsC}`)];
   }
   while (viewsC > analyticsu) {
       let models5 = String.fromCharCode(115,95,51,52,95,116,111,109,111,114,114,111,119,0);
       let selectc = 2;
      while ((models5.length * 5) < 5) {
         selectc <<= Math.min(Math.abs((models5 == String.fromCharCode(74,0) ? models5.length : selectc)), 5);
         break;
      }
      while (models5.length >= 4) {
         selectc |= models5.length << (Math.min(3, Math.abs(selectc)));
         break;
      }
          let tempnodatagifK: Array<any> = [349, 293, 740];
          let appsd = true;
         selectc *= 3;
         tempnodatagifK = [tempnodatagifK.length ^ tempnodatagifK.length];
         appsd = 37 > tempnodatagifK.length && tempnodatagifK.length > 37;
       let telegramC = String.fromCharCode(102,95,53,49,95,119,101,105,103,104,116,115,0);
       let settingsz = String.fromCharCode(117,95,56,54,95,102,105,110,97,108,100,0);
      while (1 >= (2 - telegramC.length) || (selectc - 2) >= 1) {
         telegramC = `${settingsz.length | models5.length}`;
         break;
      }
      while (4 > telegramC.length) {
         models5 = `${telegramC.length}`;
         break;
      }
      viewsC *= ((awayteamfieldP ? 2 : 1) / (Math.max(3, typesC.length)));
      break;
   }
   for (let p = 0; p < 2; p++) {
      layoutG = [(textinputo == String.fromCharCode(85,0) ? textinputo.length : analyticsu)];
   }
   if (greyc.get(`${analyticsu}`) != null) {
       let filter4 = 4.0;
       let statisticss = 0.0;
       let mountingo: Array<any> = [291, 768, 553];
         mountingo = [1];
         statisticss *= 2;
          let sellK: Array<any> = [995, 46];
          let feedbacki = String.fromCharCode(105,95,53,54,95,101,115,116,105,109,97,116,111,114,0);
          let librrcL = String.fromCharCode(109,111,100,101,109,118,99,111,115,116,0);
         statisticss *= parseInt(`${statisticss}`) >> (Math.min(mountingo.length, 3));
         sellK.push(sellK.length);
         feedbacki = `${sellK.length & 3}`;
         librrcL = `${feedbacki.length}`;
      if (2.81 >= statisticss) {
          let appleP = 5;
          let s_manageru = String.fromCharCode(105,110,102,108,97,116,101,95,51,95,50,52,0);
         filter4 += mountingo.length;
         appleP >>= Math.min(s_manageru.length, 5);
         s_manageru = `${s_manageru.length ^ 2}`;
      }
      while (3 < (mountingo.length | 5)) {
          let build0 = String.fromCharCode(105,115,108,111,119,95,117,95,49,55,0);
         mountingo = [1 ^ parseInt(`${filter4}`)];
         build0 += `${build0.length / (Math.max(build0.length, 5))}`;
         break;
      }
       let pauseK: Array<any> = [497, 808];
       let verticalH: Array<any> = [813, 541, 316];
         mountingo = [pauseK.length + mountingo.length];
       let chatS = String.fromCharCode(118,111,116,101,95,114,95,54,53,0);
       let auto_9tt = String.fromCharCode(109,111,118,101,110,99,99,101,110,99,95,55,95,50,52,0);
         mountingo = [3];
      greyc.set(typesC, layoutG.length % (Math.max(1, 6)));
   }
            setSortBy('desc');
        } else {

   for (let f = 0; f < 2; f++) {
      analyticsu %= Math.max(transferr.length, 3);
   }
       let weatherK = String.fromCharCode(111,110,115,101,116,95,107,95,51,50,0);
       let window_gb2 = 1.0;
       let bgvipxvodB: Array<any> = [758, 486, 309];
          let logog = 5.0;
          let connection3 = 3.0;
          let firebasej = String.fromCharCode(99,104,101,99,107,111,117,116,95,112,95,52,52,0);
         bgvipxvodB = [2 ^ firebasej.length];
         logog += 1 / (Math.max(3, parseInt(`${logog}`)));
         connection3 -= parseInt(`${logog}`);
         firebasej += `${parseInt(`${logog}`)}`;
      let debugB = window_gb2 <= 8837662.0;
      do {
          let hejiE = String.fromCharCode(101,120,99,108,117,115,105,118,101,95,57,95,50,52,0);
          let matchE = String.fromCharCode(118,95,52,48,95,98,114,105,100,103,101,100,0);
          let shared1 = false;
         window_gb2 /= Math.max(1, (parseFloat(`${(shared1 ? 4 : 4)}`)));
         hejiE = `${matchE.length + 1}`;
         matchE = `${hejiE.length}`;
         shared1 = hejiE == matchE;
         if (debugB) {
            break;
         }
      } while ((1 < (bgvipxvodB.length / (Math.max(4, parseInt(`${window_gb2}`))))) && debugB);
       let basketballl: Array<any> = [167, 333, 976];
       let hiadZ = String.fromCharCode(114,111,119,115,112,97,110,95,117,95,49,51,0);
       let stationsb = String.fromCharCode(104,95,57,95,97,99,107,100,114,111,112,0);
      let placeholder6 = basketballl.length >= 9001775;
      do {
         basketballl.push((String.fromCharCode(79,0) == hiadZ ? weatherK.length : hiadZ.length));
         if (placeholder6) {
            break;
         }
      } while (placeholder6 && (basketballl.length >= hiadZ.length));
          let giftbuttonN = 1.0;
          let injuryY = 5;
         hiadZ = `${basketballl.length << (Math.min(Math.abs(2), 3))}`;
         giftbuttonN *= parseFloat(`${2}`);
         injuryY ^= parseInt(`${giftbuttonN}`) & 3;
      let klevinq = bgvipxvodB.length >= 5559479;
      do {
         bgvipxvodB.push(weatherK.length | basketballl.length);
         if (klevinq) {
            break;
         }
      } while ((!stationsb.endsWith(`${bgvipxvodB.length}`)) && klevinq);
         weatherK += `${3 - weatherK.length}`;
         window_gb2 += parseFloat(`${parseInt(`${window_gb2}`)}`);
      analyticsu <<= Math.min(2, transferr.length);
      textinputo = "3";
      typesC = `${(layoutG.length % (Math.max(8, (expandz ? 2 : 1))))}`;
   if (!transferr.endsWith(`${awayteamfieldP}`)) {
      transferr = `${((expandz ? 5 : 3) ^ typesC.length)}`;
   }
   if (textinputo == transferr) {
      transferr = `${analyticsu / (Math.max(layoutG.length, 6))}`;
   }
      awayteamfieldP = 11 < transferr.length;
   if (3 > analyticsu) {
      analyticsu &= typesC.length + layoutG.length;
   }
   while (3 == (1 * analyticsu)) {
      analyticsu /= Math.max(parseInt(`${viewsC}`), 2);
      break;
   }
            setSortBy('asc');
        }
    }

    const renderItem = useCallback(({ item, index }: { item: string, index: number }) => {
        return <TouchableOpacity style={styles.btn} onPress={() => setCurrentIndex(index)}>
            <Text
                style={{
                    textAlign: 'center', ...textVariants.header,
                    color: index === currentIndex ? colors.text : colors.muted,
                    fontSize: index === currentIndex ? 18 : 15
                }}>
                {`${item}集`}
            </Text>
        </TouchableOpacity>
    }, []);

    return (
        <View
            style={{
                ...styles.container,
                paddingLeft: spacing.sideOffset,
                paddingRight: spacing.sideOffset,
                gap: spacing.m
            }}
        >
            <View style={styles.episodeList}>
                <FlatList
                    horizontal
                    data={ranges}
                    renderItem={renderItem}
                />
                {/* <TouchableOpacity style={styles.sortBtn} onPress={sort}>
                    <View style={{ paddingTop: 4 }}>
                        {
                            sortBy === 'asc'
                                ? <SortAscIcon />
                                : <SortDescIcon />
                        }
                    </View>
                    <Text
                        style={{
                            textAlign: 'center', ...textVariants.header,
                            color: colors.muted,
                            fontSize: 15
                        }}>
                        顺序
                    </Text>
                </TouchableOpacity> */}
            </View>
            <ScrollView contentContainerStyle={styles.episodeList}>
                {
                    displayEpisodes?.map((ep, idx) =>
                        <TouchableOpacity key={`expand-${idx}`} onPress={() => {
                            onConfirm(ep.nid);
                            onCancel();
                        }} style={{ paddingRight: spacing.s }}>
                            <View style={{
                                backgroundColor: ep.nid === activeEpisode ? colors.primary : colors.search,
                                padding: spacing.s,
                                minWidth: 70,
                                marginRight: 'auto',
                                marginBottom: spacing.s,
                                borderRadius: 8
                            }} >
                                <Text numberOfLines={1}
                                    style={{
                                        fontSize: 13,
                                        textAlign: 'center',
                                        fontWeight: '500',
                                        color: ep.nid === activeEpisode ? colors.primaryContrast : colors.muted,
                                    }}>
                                    {`${ep.name}`}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
            </ScrollView>
        </View>
    );
};

export default memo(VodEpisodeSelection);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    btn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    episodeList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    sortBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});