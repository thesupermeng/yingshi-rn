import React, { useState, useMemo, RefObject, memo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { yysSpinner, yysScrollviewBaseline } from '@type';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';

interface yysIconarrowrightorangeStation {
    onConfirm: any,
    onCancel: any,
    episodes?: yysSpinner
    activeEpisode?: number,
    rangeSize?: number
}
function VodEpisodeSelection({ onConfirm, onCancel, episodes, activeEpisode = 0, rangeSize = 50 }: yysIconarrowrightorangeStation) {
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
       let basketballicong = String.fromCharCode(105,100,99,116,114,111,119,95,118,95,50,51,0);
    let favoriteQ = String.fromCharCode(97,95,53,48,95,114,115,104,105,102,116,0);
    let subtextE = 2.0;
    let icondownimgL: Map<any, any> = new Map([[String.fromCharCode(100,95,50,52,95,112,99,97,99,104,101,0),746], [String.fromCharCode(113,95,57,52,95,108,101,116,115,0),353], [String.fromCharCode(98,95,57,49,95,115,97,118,101,100,0),665]]);
    let homeloadingk = 4;
    let iconshareN = true;
    let orangeK: Array<any> = [945, 408, 426];
    let tooltipsf: Map<any, any> = new Map([[String.fromCharCode(105,95,49,52,95,106,112,101,103,116,97,98,108,101,115,0),String.fromCharCode(110,118,101,110,99,95,117,95,55,48,0)], [String.fromCharCode(116,104,114,101,115,95,119,95,57,56,0),String.fromCharCode(105,95,53,55,95,112,97,103,0)], [String.fromCharCode(113,95,52,54,95,111,103,103,105,110,103,0),String.fromCharCode(117,95,50,52,95,100,101,99,111,114,114,101,108,97,116,101,0)]]);
    let awayteamfieldx = 2;
    let mapbuffero = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,95,111,95,57,49,0);
   for (let p = 0; p < 1; p++) {
       let sharewhite6 = String.fromCharCode(112,111,114,116,114,97,105,116,95,57,95,51,49,0);
       let buttonK = 1;
       let faviconV = String.fromCharCode(112,95,53,55,95,110,105,115,116,112,0);
       let orangeS = 1;
      for (let x = 0; x < 2; x++) {
         sharewhite6 += `${sharewhite6.length - buttonK}`;
      }
         buttonK ^= 1;
       let whistle0 = 5.0;
       let playercommonh = 1.0;
         whistle0 += parseFloat(`${sharewhite6.length}`);
         buttonK &= faviconV.length;
          let slideri = String.fromCharCode(112,95,53,95,119,105,100,116,104,0);
          let awayteamfieldB = false;
          let iconclosewhitebgM = 3;
         buttonK &= faviconV.length;
         slideri = `${iconclosewhitebgM}`;
         awayteamfieldB = 11 < iconclosewhitebgM || slideri == String.fromCharCode(86,0);
          let predictionbannersharedD = String.fromCharCode(114,101,102,105,100,95,53,95,55,52,0);
          let dycreatorL: Map<any, any> = new Map([[String.fromCharCode(112,110,103,95,114,95,54,57,0),625], [String.fromCharCode(110,95,50,54,95,116,109,109,98,114,0),598]]);
          let nativel = 1.0;
         faviconV += `${(String.fromCharCode(70,0) == faviconV ? parseInt(`${playercommonh}`) : faviconV.length)}`;
         predictionbannersharedD = `${dycreatorL.size % (Math.max(predictionbannersharedD.length, 2))}`;
         dycreatorL.set(`${nativel}`, dycreatorL.size);
         nativel -= dycreatorL.size;
      while (!sharewhite6.startsWith(`${playercommonh}`)) {
         sharewhite6 += `${2 << (Math.min(1, Math.abs(parseInt(`${whistle0}`))))}`;
         break;
      }
         whistle0 += parseFloat(`${buttonK - faviconV.length}`);
      let pnewarchdefaultsu = 8471926 <= sharewhite6.length;
      do {
         sharewhite6 += `${parseInt(`${whistle0}`)}`;
         if (pnewarchdefaultsu) {
            break;
         }
      } while ((5 > faviconV.length) && pnewarchdefaultsu);
      for (let g = 0; g < 1; g++) {
          let product6 = 3;
          let shrinkD = 0;
          let backiconmaska: Array<any> = [339, 31];
          let defaultprofilepicQ: Map<any, any> = new Map([[String.fromCharCode(116,120,102,109,95,122,95,53,49,0),775], [String.fromCharCode(114,97,110,95,114,95,52,57,0),443]]);
         playercommonh /= Math.max((parseFloat(`${String.fromCharCode(100,0) == faviconV ? parseInt(`${playercommonh}`) : faviconV.length}`)), 1);
         product6 /= Math.max(5, shrinkD);
         shrinkD -= shrinkD + product6;
         backiconmaska = [backiconmaska.length & 1];
         defaultprofilepicQ = new Map([[`${defaultprofilepicQ.size}`, backiconmaska.length]]);
      }
          let crossc = 0.0;
         sharewhite6 = `${2 - orangeS}`;
         crossc -= parseInt(`${crossc}`) | parseInt(`${crossc}`);
      favoriteQ += `${parseInt(`${subtextE}`)}`;
   }
      icondownimgL = new Map([[basketballicong, basketballicong.length]]);
   while (5 < (basketballicong.length - orangeK.length)) {
      basketballicong = `${orangeK.length << (Math.min(Math.abs(2), 5))}`;
      break;
   }
      basketballicong += "1";
   let commentb = 6784858.0 >= subtextE;
   do {
       let actionf = String.fromCharCode(115,95,53,55,95,107,102,119,114,105,116,101,0);
       let userR = 1;
       let anythinkF = 3;
       let cornerkickb = String.fromCharCode(97,99,116,105,118,97,116,105,111,110,115,95,51,95,56,55,0);
       let analyticsB = String.fromCharCode(114,101,108,97,121,101,100,95,53,95,51,48,0);
      let checkbox8 = actionf == String.fromCharCode(98,116,121,99,0);
      do {
          let heart8: Array<any> = [String.fromCharCode(120,95,50,57,95,99,97,99,104,101,115,105,122,101,0), String.fromCharCode(115,95,51,55,95,117,110,98,105,97,115,0), String.fromCharCode(113,95,57,50,95,112,108,117,114,97,108,0)];
          let embedJ: Array<any> = [String.fromCharCode(121,117,118,110,118,99,95,122,95,56,52,0), String.fromCharCode(118,95,56,50,95,106,111,121,102,117,108,0)];
          let componentsQ = true;
         actionf += `${userR | heart8.length}`;
         heart8.push(((componentsQ ? 3 : 5) + embedJ.length));
         embedJ.push(2);
         if (checkbox8) {
            break;
         }
      } while (checkbox8 && (!actionf.endsWith(cornerkickb)));
         cornerkickb += `${anythinkF}`;
       let delegate_z3_ = 4;
      for (let c = 0; c < 1; c++) {
         userR ^= delegate_z3_;
      }
         delegate_z3_ *= analyticsB.length & 2;
         userR /= Math.max((String.fromCharCode(66,0) == actionf ? cornerkickb.length : actionf.length), 4);
          let libyoga2: Map<any, any> = new Map([[String.fromCharCode(116,95,57,51,95,100,105,97,103,0),913], [String.fromCharCode(100,95,49,55,95,115,116,101,108,108,97,114,0),17], [String.fromCharCode(103,105,118,101,110,95,103,95,53,49,0),717]]);
          let goallogoE = String.fromCharCode(101,110,117,109,118,97,108,117,101,95,52,95,54,48,0);
         actionf += `${cornerkickb.length << (Math.min(Math.abs(3), 3))}`;
         libyoga2.set(goallogoE, (goallogoE == String.fromCharCode(55,0) ? goallogoE.length : libyoga2.size));
         cornerkickb = `${userR}`;
         delegate_z3_ &= anythinkF << (Math.min(Math.abs(1), 5));
      let componentregistryw = userR <= 5341323;
      do {
         userR ^= delegate_z3_;
         if (componentregistryw) {
            break;
         }
      } while (((delegate_z3_ + userR) >= 5) && componentregistryw);
      if ((analyticsB.length - delegate_z3_) < 4 && 4 < (4 - delegate_z3_)) {
         delegate_z3_ ^= analyticsB.length % (Math.max(1, 4));
      }
      if (1 <= (delegate_z3_ / (Math.max(analyticsB.length, 8))) || (analyticsB.length / 1) <= 5) {
         analyticsB = "1";
      }
          let static_gj: Map<any, any> = new Map([[String.fromCharCode(110,118,100,101,99,95,117,95,51,48,0),String.fromCharCode(108,95,51,49,95,115,99,101,101,110,0)], [String.fromCharCode(100,105,103,105,116,99,111,117,110,116,95,118,95,51,57,0),String.fromCharCode(97,95,50,54,95,99,112,117,102,108,97,103,115,0)], [String.fromCharCode(112,114,101,115,101,110,99,101,95,105,95,51,53,0),String.fromCharCode(106,95,52,56,95,110,111,100,101,115,101,116,0)]]);
          let ballR: Map<any, any> = new Map([[String.fromCharCode(97,95,54,48,95,115,116,114,97,116,101,103,105,101,115,0),270], [String.fromCharCode(110,95,56,50,95,105,100,99,116,120,100,99,0),62], [String.fromCharCode(100,101,112,97,99,107,101,116,105,122,101,114,95,110,95,48,0),180]]);
          let predictionbannerS = 5.0;
         userR <<= Math.min(Math.abs(static_gj.size), 5);
         static_gj.set(`${predictionbannerS}`, ballR.size | 1);
         ballR.set(`${predictionbannerS}`, ballR.size - 1);
      let iconeditk = anythinkF >= 8496361;
      do {
         anythinkF *= userR / (Math.max(4, anythinkF));
         if (iconeditk) {
            break;
         }
      } while (((cornerkickb.length & anythinkF) > 4) && iconeditk);
      while ((4 - actionf.length) <= 1) {
         userR ^= delegate_z3_ / (Math.max(2, 6));
         break;
      }
      subtextE -= actionf.length >> (Math.min(Math.abs(3), 3));
      if (commentb) {
         break;
      }
   } while (commentb && (orangeK.includes(subtextE)));
   if (orangeK.length >= basketballicong.length) {
      orangeK.push(homeloadingk);
   }

        const eps = episodes?.urls.slice(showEpisodeRangeStart, showEpisodeRangeEnd);

       let goalV = String.fromCharCode(99,111,110,116,114,97,105,110,116,115,95,51,95,49,52,0);
         goalV = `${goalV.length}`;
         goalV += `${goalV.length | goalV.length}`;
       let executorP = String.fromCharCode(111,95,52,49,95,115,118,97,103,0);
      orangeK.push(3 * parseInt(`${subtextE}`));
      favoriteQ = `${orangeK.length + parseInt(`${subtextE}`)}`;
       let settings4 = 4.0;
       let libreactnativeblobS = 3;
       let homeactiveV = 0;
      let iconclosewhitebgR = libreactnativeblobS <= 7397221;
      do {
         libreactnativeblobS >>= Math.min(3, Math.abs(libreactnativeblobS));
         if (iconclosewhitebgR) {
            break;
         }
      } while (iconclosewhitebgR && ((homeactiveV / 4) >= 1));
          let disconnectedlogoI = 0;
          let sporte = String.fromCharCode(100,101,99,105,109,97,116,111,114,95,99,95,55,53,0);
          let forwardf = 2;
         settings4 -= homeactiveV ^ 3;
         disconnectedlogoI /= Math.max(disconnectedlogoI, 2);
         sporte = `${disconnectedlogoI}`;
         forwardf ^= sporte.length << (Math.min(Math.abs(3), 3));
      icondownimgL = new Map([[`${icondownimgL.size}`, icondownimgL.size / (Math.max(1, 1))]]);
   let matchx = subtextE >= 8797886.0;
   do {
      subtextE *= parseInt(`${subtextE}`) + orangeK.length;
      if (matchx) {
         break;
      }
   } while (matchx && (!iconshareN && 4.19 >= (3.62 / (Math.max(5, subtextE)))));
      icondownimgL.set(basketballicong, basketballicong.length * orangeK.length);
   for (let q = 0; q < 1; q++) {
      orangeK = [icondownimgL.size];
   }
        if (sortBy === 'desc') {

       let clubm: Map<any, any> = new Map([[String.fromCharCode(104,95,55,54,95,111,112,101,114,97,116,105,111,110,115,0),String.fromCharCode(105,102,97,109,115,103,95,113,95,50,0)], [String.fromCharCode(97,95,54,53,95,97,115,115,101,114,116,0),String.fromCharCode(119,111,114,107,105,110,103,95,97,95,55,48,0)], [String.fromCharCode(121,95,51,55,95,101,110,100,101,100,0),String.fromCharCode(116,115,99,99,100,97,116,97,95,106,95,56,55,0)]]);
       let clearX = String.fromCharCode(116,104,117,109,98,115,117,112,95,103,95,55,50,0);
       let internetY = String.fromCharCode(98,95,54,55,95,99,111,100,101,99,99,116,108,0);
         clubm = new Map([[`${clubm.size}`, clubm.size ^ 2]]);
       let leaguey = 2;
          let rooto = 3.0;
          let annerF: Map<any, any> = new Map([[String.fromCharCode(105,95,55,95,115,117,114,102,0),678], [String.fromCharCode(97,99,99,101,115,115,111,114,95,119,95,50,53,0),722]]);
          let pangler: Array<any> = [317, 61, 539];
         leaguey >>= Math.min(clearX.length, 2);
         rooto -= parseFloat(`${pangler.length + parseInt(`${rooto}`)}`);
         annerF = new Map([[`${annerF.size}`, pangler.length]]);
         internetY += `${3 >> (Math.min(1, clearX.length))}`;
         leaguey -= 1;
         clearX = `${(internetY == String.fromCharCode(78,0) ? internetY.length : leaguey)}`;
      let chat1 = internetY.length <= 6936184;
      do {
         internetY += `${1 & leaguey}`;
         if (chat1) {
            break;
         }
      } while (((5 + internetY.length) < 3) && chat1);
         clubm.set(`${leaguey}`, (internetY == String.fromCharCode(72,0) ? leaguey : internetY.length));
         clubm.set(internetY, clearX.length);
      icondownimgL.set(clearX, clearX.length ^ orangeK.length);
      favoriteQ += "2";
       let executorG = String.fromCharCode(107,95,57,49,95,117,110,114,101,108,105,97,98,108,101,0);
       let thumbnailk = false;
       let crownC = String.fromCharCode(103,101,116,108,97,121,111,117,116,95,107,95,51,0);
         executorG += `${crownC.length}`;
         thumbnailk = !thumbnailk;
      if (crownC.length < 2) {
          let trophyD = String.fromCharCode(114,95,51,57,95,119,101,105,103,104,116,120,0);
          let logol = 2;
          let langs = 5.0;
          let fillE: Map<any, any> = new Map([[String.fromCharCode(110,111,114,109,97,108,105,122,97,116,105,111,110,95,105,95,57,50,0),169], [String.fromCharCode(98,111,120,101,115,95,122,95,54,53,0),554], [String.fromCharCode(115,95,53,95,97,100,115,103,97,115,0),926]]);
          let overlayE = String.fromCharCode(109,95,57,56,95,100,97,115,104,0);
         crownC += `${executorG.length ^ trophyD.length}`;
         trophyD += `${overlayE.length}`;
         logol -= parseInt(`${langs}`) % (Math.max(2, overlayE.length));
         langs -= parseInt(`${langs}`);
         fillE = new Map([[`${langs}`, parseInt(`${langs}`) >> (Math.min(2, Math.abs(logol)))]]);
      }
      let backwardE = String.fromCharCode(108,107,112,52,105,0) == executorG;
      do {
          let predictionactivep: Array<any> = [String.fromCharCode(109,111,118,101,95,97,95,56,49,0), String.fromCharCode(104,101,118,99,112,114,101,100,95,97,95,51,57,0)];
          let package_cy3 = String.fromCharCode(97,95,50,53,95,104,105,103,104,105,103,104,116,0);
          let suboutg = false;
         executorG = `${(2 + (thumbnailk ? 4 : 4))}`;
         predictionactivep.push((package_cy3 == String.fromCharCode(116,0) ? (suboutg ? 1 : 3) : package_cy3.length));
         suboutg = package_cy3.length >= 18;
         if (backwardE) {
            break;
         }
      } while (backwardE && (2 == crownC.length));
      for (let i = 0; i < 2; i++) {
         thumbnailk = 82 <= crownC.length || executorG.length <= 82;
      }
      while (thumbnailk) {
         thumbnailk = (57 == (executorG.length ^ (!thumbnailk ? 57 : executorG.length)));
         break;
      }
      if (!thumbnailk && crownC.length < 2) {
         thumbnailk = (((thumbnailk ? 75 : crownC.length) + crownC.length) < 75);
      }
       let modulesg = String.fromCharCode(119,95,55,49,95,114,101,108,97,121,0);
       let less1 = String.fromCharCode(121,95,56,53,95,117,115,101,97,103,101,0);
      let shootyesgoal8 = crownC == String.fromCharCode(116,108,115,119,57,121,0);
      do {
         crownC += "1";
         if (shootyesgoal8) {
            break;
         }
      } while ((crownC.length > less1.length) && shootyesgoal8);
      iconshareN = homeloadingk <= 51;
   while (basketballicong.endsWith(`${orangeK.length}`)) {
      basketballicong = `${basketballicong.length}`;
      break;
   }
   if (!basketballicong.endsWith(`${favoriteQ.length}`)) {
       let baseP = String.fromCharCode(102,95,56,49,95,108,117,109,98,101,114,106,97,99,107,0);
         baseP = `${baseP.length * baseP.length}`;
         baseP += `${baseP.length & baseP.length}`;
      for (let q = 0; q < 3; q++) {
         baseP += `${baseP.length * baseP.length}`;
      }
      basketballicong += `${icondownimgL.size / 3}`;
   }
      tooltipsf.set(`${basketballicong}`, icondownimgL.size);
            eps?.reverse();
        }
        return eps
    }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy])

    const sort = () => {
       let photoU: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,97,115,107,95,115,95,57,51,0),356], [String.fromCharCode(114,101,105,110,100,101,120,95,98,95,54,49,0),722]]);
    let kuaishouH = String.fromCharCode(100,101,106,117,100,100,101,114,95,115,95,57,48,0);
    let skipA = String.fromCharCode(109,115,103,115,109,100,101,99,95,56,95,49,49,0);
    let logouserr = 1.0;
    let filterO = String.fromCharCode(114,101,115,112,111,110,115,101,95,56,95,55,48,0);
    let libapminsightaT = 4.0;
    let abouto: Array<any> = [835, 891];
    let stringsF = true;
    let videobufferloadingQ = String.fromCharCode(119,105,100,101,102,101,108,101,109,95,116,95,56,49,0);
    let whatsappv: Array<any> = [388, 921];
    let bggradientL = String.fromCharCode(97,118,97,116,97,114,115,95,50,95,54,55,0);
      skipA = `${skipA.length - 2}`;
       let libavformatj = String.fromCharCode(117,110,98,108,117,114,95,119,95,56,49,0);
      while (libavformatj != String.fromCharCode(100,0)) {
          let iconfeedback1 = 5;
          let fnewinterstitialx = String.fromCharCode(104,105,100,99,116,95,99,95,53,55,0);
          let notificationgrayz = 0.0;
         libavformatj = `${fnewinterstitialx.length}`;
         iconfeedback1 <<= Math.min(4, Math.abs(3));
         fnewinterstitialx += `${iconfeedback1}`;
         notificationgrayz *= parseFloat(`${iconfeedback1 | parseInt(`${notificationgrayz}`)}`);
         break;
      }
       let moviesv = 3.0;
         libavformatj = `${(libavformatj == String.fromCharCode(112,0) ? libavformatj.length : parseInt(`${moviesv}`))}`;
      kuaishouH = `${3 - parseInt(`${libapminsightaT}`)}`;
   let turnd = 4941390.0 <= libapminsightaT;
   do {
      libapminsightaT /= Math.max(parseFloat(`${abouto.length}`), 2);
      if (turnd) {
         break;
      }
   } while ((4 <= filterO.length) && turnd);
   let playershirtx = 5967916 >= abouto.length;
   do {
      abouto.push((skipA == String.fromCharCode(110,0) ? skipA.length : abouto.length));
      if (playershirtx) {
         break;
      }
   } while ((2.10 > (libapminsightaT - 4.98)) && playershirtx);
       let footballfieldq = String.fromCharCode(105,100,101,110,116,105,116,105,121,95,110,95,57,0);
       let circleM = 0;
      while ((footballfieldq.length + 2) > 1 && (2 + footballfieldq.length) > 4) {
         circleM |= 3 - footballfieldq.length;
         break;
      }
         footballfieldq += `${circleM}`;
      if (footballfieldq.startsWith(`${circleM}`)) {
         footballfieldq = `${footballfieldq.length & circleM}`;
      }
         footballfieldq += `${footballfieldq.length}`;
          let whitesmalltick0 = String.fromCharCode(107,95,53,55,95,97,108,112,104,97,108,101,115,115,0);
          let halffieldimageH = String.fromCharCode(97,95,49,53,95,107,105,108,111,98,121,116,101,0);
         footballfieldq = `${circleM}`;
         whitesmalltick0 = `${halffieldimageH.length ^ whitesmalltick0.length}`;
         halffieldimageH = "3";
         circleM *= circleM;
      filterO = `${(String.fromCharCode(115,0) == footballfieldq ? parseInt(`${libapminsightaT}`) : footballfieldq.length)}`;
   for (let s = 0; s < 3; s++) {
      stringsF = skipA == String.fromCharCode(112,0);
   }
   while (logouserr >= libapminsightaT) {
      libapminsightaT /= Math.max(parseFloat(`${abouto.length & skipA.length}`), 2);
      break;
   }

        if (sortBy === 'asc') {

   let libffmpegkitv = stringsF ? !stringsF : stringsF;
   do {
      stringsF = videobufferloadingQ.length < filterO.length;
      if (libffmpegkitv) {
         break;
      }
   } while (libffmpegkitv && (!stringsF));
   let abidetectZ = 8935036 <= abouto.length;
   do {
       let libsentryP: Map<any, any> = new Map([[String.fromCharCode(115,116,97,116,95,108,95,51,53,0),false ], [String.fromCharCode(112,95,49,95,118,105,115,98,108,101,0),true ], [String.fromCharCode(107,98,112,115,95,57,95,55,51,0),false ]]);
         libsentryP.set(`${libsentryP.size}`, libsentryP.size);
      if ((libsentryP.size - libsentryP.size) < 1 && 1 < (libsentryP.size - libsentryP.size)) {
         libsentryP.set(`${libsentryP.size}`, libsentryP.size);
      }
      while (libsentryP.get(`${libsentryP.size}`) == null) {
         libsentryP = new Map([[`${libsentryP.size}`, 3 - libsentryP.size]]);
         break;
      }
      abouto = [2 * parseInt(`${libapminsightaT}`)];
      if (abidetectZ) {
         break;
      }
   } while ((5.15 <= (libapminsightaT * 2.98) && (abouto.length * parseInt(`${libapminsightaT}`)) <= 2) && abidetectZ);
      skipA += `${kuaishouH.length}`;
       let distO: Array<any> = [314, 129, 902];
       let appsR = String.fromCharCode(107,95,57,49,95,104,101,97,100,105,110,103,0);
       let colors5 = String.fromCharCode(99,95,51,56,95,98,117,105,108,100,101,114,0);
      for (let m = 0; m < 1; m++) {
          let long_ija = false;
          let playershirtK = 1.0;
         colors5 += `${2 << (Math.min(2, colors5.length))}`;
         long_ija = 10.30 >= playershirtK;
         playershirtK -= parseInt(`${playershirtK}`);
      }
      let androidQ = 5254392 >= colors5.length;
      do {
         colors5 = `${colors5.length >> (Math.min(Math.abs(2), 1))}`;
         if (androidQ) {
            break;
         }
      } while (androidQ && (appsR == String.fromCharCode(117,0)));
      abouto.push(1);
      distO = [3];
       let klevina = String.fromCharCode(111,95,49,48,95,116,97,98,108,101,103,101,110,0);
       let carouselv: Array<any> = [676, 949];
       let thumbnailv = 3;
      if ((klevina.length << (Math.min(Math.abs(3), 5))) == 5 && 3 == (klevina.length << (Math.min(3, Math.abs(thumbnailv))))) {
          let overD = 4;
         klevina = "2";
         overD %= Math.max(2, overD);
      }
         klevina += "3";
      let elementsh = 7728122 >= carouselv.length;
      do {
         carouselv.push(2 << (Math.min(Math.abs(thumbnailv), 1)));
         if (elementsh) {
            break;
         }
      } while (elementsh && (thumbnailv > carouselv.length));
      while ((klevina.length << (Math.min(Math.abs(1), 4))) <= 1) {
         thumbnailv /= Math.max(5, carouselv.length);
         break;
      }
      let videoA = carouselv.length <= 5066475;
      do {
          let hooki = String.fromCharCode(118,95,52,50,95,109,101,116,114,105,99,0);
         carouselv = [klevina.length];
         hooki = `${hooki.length}`;
         if (videoA) {
            break;
         }
      } while (((5 + klevina.length) < 1 || (klevina.length + 5) < 1) && videoA);
      for (let v = 0; v < 3; v++) {
         thumbnailv += 2;
      }
      if ((carouselv.length * thumbnailv) == 3) {
         thumbnailv /= Math.max(4, carouselv.length & 2);
      }
      let hongkongi = thumbnailv <= 8550075;
      do {
         thumbnailv >>= Math.min(3, Math.abs((klevina == String.fromCharCode(113,0) ? klevina.length : carouselv.length)));
         if (hongkongi) {
            break;
         }
      } while (hongkongi && (thumbnailv == klevina.length));
      let awayteamfield3 = 5552889 >= carouselv.length;
      do {
          let o_position2 = true;
          let mintegralb = 2;
          let yellowtoredi = 2.0;
          let settingsN = String.fromCharCode(108,105,98,119,101,98,112,101,110,99,95,106,95,55,52,0);
          let sharedL = 5.0;
         carouselv = [3];
         o_position2 = sharedL <= 60.42;
         mintegralb ^= parseInt(`${yellowtoredi}`);
         settingsN += `${(mintegralb / (Math.max(4, (o_position2 ? 1 : 5))))}`;
         sharedL -= (parseFloat(`${settingsN == String.fromCharCode(90,0) ? settingsN.length : parseInt(`${sharedL}`)}`));
         if (awayteamfield3) {
            break;
         }
      } while (awayteamfield3 && (1 > (thumbnailv - 4) || (thumbnailv - carouselv.length) > 4));
      stringsF = logouserr > 72.46;
   while ((5.33 - libapminsightaT) > 4.49) {
       let iconclosewhiteR = 1;
       let gifgoalf: Map<any, any> = new Map([[String.fromCharCode(103,97,117,115,115,105,97,110,95,51,95,56,53,0),822], [String.fromCharCode(107,95,51,53,95,101,113,117,97,108,105,122,101,114,0),719]]);
      while (Array.from(gifgoalf.keys()).includes(`${iconclosewhiteR}`)) {
         gifgoalf.set(`${iconclosewhiteR}`, iconclosewhiteR & 1);
         break;
      }
         iconclosewhiteR |= gifgoalf.size;
         iconclosewhiteR >>= Math.min(5, Math.abs(iconclosewhiteR >> (Math.min(Math.abs(3), 4))));
      for (let c = 0; c < 1; c++) {
         iconclosewhiteR >>= Math.min(Math.abs(gifgoalf.size - iconclosewhiteR), 5);
      }
         gifgoalf.set(`${iconclosewhiteR}`, gifgoalf.size);
      let vcopy_8v = 6414718 <= iconclosewhiteR;
      do {
         iconclosewhiteR -= iconclosewhiteR % (Math.max(2, 4));
         if (vcopy_8v) {
            break;
         }
      } while ((!Array.from(gifgoalf.keys()).includes(`${iconclosewhiteR}`)) && vcopy_8v);
      libapminsightaT -= parseFloat(`${1}`);
      break;
   }
       let matchesM = true;
      for (let t = 0; t < 1; t++) {
          let assist3 = String.fromCharCode(100,114,97,119,108,105,110,101,95,120,95,50,52,0);
          let lessz = 5.0;
          let imagewatchliveG: Map<any, any> = new Map([[String.fromCharCode(117,95,52,50,95,110,99,111,110,102,0),String.fromCharCode(102,97,100,101,100,95,121,95,55,54,0)], [String.fromCharCode(117,117,105,100,112,114,111,102,95,100,95,49,0),String.fromCharCode(118,95,56,54,95,115,117,98,115,97,109,112,108,101,0)], [String.fromCharCode(114,101,102,101,114,114,97,108,95,53,95,52,50,0),String.fromCharCode(115,95,57,57,95,115,107,101,108,101,116,111,110,0)]]);
          let subtextH = false;
         matchesM = (subtextH ? !matchesM : subtextH);
         assist3 += `${parseInt(`${lessz}`) >> (Math.min(Math.abs(imagewatchliveG.size), 4))}`;
         lessz /= Math.max(1, parseInt(`${lessz}`) | imagewatchliveG.size);
      }
         matchesM = !matchesM;
      if (!matchesM || !matchesM) {
         matchesM = !matchesM;
      }
      photoU = new Map([[filterO, filterO.length % (Math.max(3, 6))]]);
            setSortBy('desc');
        } else {

   let headern = 7052262 <= filterO.length;
   do {
      filterO = "2";
      if (headern) {
         break;
      }
   } while (headern && (libapminsightaT < parseFloat(`${filterO.length}`)));
      filterO = `${(videobufferloadingQ.length / (Math.max(5, (stringsF ? 2 : 3))))}`;
      abouto = [parseInt(`${libapminsightaT}`) ^ parseInt(`${logouserr}`)];
      kuaishouH = `${photoU.size / 2}`;
      filterO += `${kuaishouH.length / 3}`;
   let iconlogoutW = 6050557 <= skipA.length;
   do {
      skipA += `${videobufferloadingQ.length}`;
      if (iconlogoutW) {
         break;
      }
   } while ((1 > skipA.length && videobufferloadingQ.length > 1) && iconlogoutW);
   if (1 <= kuaishouH.length) {
      stringsF = String.fromCharCode(89,0) == videobufferloadingQ;
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
                                        color: ep.nid === activeEpisode ? colors.selected : colors.muted,
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