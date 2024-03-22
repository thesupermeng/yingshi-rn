

class VignetteFound {
    static sigmobHongkong = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  PanResponder,
  StyleSheet,
  Dimensions,
  Text,
  Pressable,
  Platform,
  Image,
} from 'react-native';
import FullScreen from '@static/images/huaweiSave.svg';
import MoreMoviesIcon from '@static/images/downLibreactIconpipexpand.svg';
import MinimizeScreen from '@static/images/mbsplashCombineIcontransferclub.svg';
import { TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import NextEpisodeIcon from '@static/images/langGoogle.svg';
import SelectEpisodesIcon from '@static/images/vignetteLive.svg';
import LockScreenIcon from '@static/images/annerContext.svg';
import { Slider } from '@rneui/themed';
import VideoThumbnail from './mayi_predictionactive_internet';

type mayi_GoogleViews = {
  currentTime: number;
  duration: number;
  onSlideCapture: (params: any) => any;
  onSlideStart: (params: any) => any;
  onSlideComplete: (params: any) => any;
  onToggleFullScreen: () => any;
  isFullScreen: boolean;
  videoType: string;
  onPlaybackRateChange: () => any;
  onEpisodeSelection: () => any;
  playbackRate?: number,
  onNextEpisode?: () => any,
  onLock: () => any,
  showMoreType?: 'episodes' | 'streams' | 'movies' | 'none',
  showSliderThumbnail: boolean,
};

export default ({
  currentTime,
  duration,
  playbackRate = 1,
  onSlideCapture,
  onSlideStart,
  onSlideComplete,
  onToggleFullScreen,
  isFullScreen,
  videoType,
  onPlaybackRateChange,
  onEpisodeSelection,
  onNextEpisode,
  onLock,
  showMoreType = 'episodes',
  showSliderThumbnail = false,
}: mayi_GoogleViews) => {
  useEffect(() => { }, []);
  const { textVariants, colors } = useTheme();
  const getMinutesFromSeconds = (time: number) => {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0;
    const seconds = Math.floor(time - minutes * 60);

    return `${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds
      }`;
  };

  const onSlideProgressBar = (time: any) => {
    console.log('time:', time)
    onSlideCapture(time);
  };

  const onPressFullScreenBtn = () => {
       let cedbadcebfbfbfbcfecbcz = 4.0;
    let mbbannerE = true;
    let redscoreballV: Array<any> = [String.fromCharCode(108,97,121,101,114,95,118,95,48,0), String.fromCharCode(110,95,53,51,95,110,101,116,0), String.fromCharCode(117,110,109,97,114,115,104,97,108,95,116,95,50,51,0)];
    let leaguedetailsbgL = false;
    let yellowD = 4;
    let scrollviewr = String.fromCharCode(109,101,116,97,98,111,100,121,95,54,95,56,57,0);
    let guidep: Map<any, any> = new Map([[String.fromCharCode(120,95,56,55,95,115,99,116,112,117,116,105,108,0),String.fromCharCode(108,95,57,54,95,110,117,109,112,97,100,0)], [String.fromCharCode(113,100,109,99,95,101,95,53,54,0),String.fromCharCode(112,95,49,57,95,100,117,112,108,105,99,97,116,101,100,0)], [String.fromCharCode(111,95,51,55,95,99,108,105,99,107,0),String.fromCharCode(101,115,112,111,110,100,101,114,95,116,95,56,56,0)]]);
    let bang8: Array<any> = [519, 139];
    let iconsharev = true;
    let whiteY: Map<any, any> = new Map([[String.fromCharCode(99,95,55,52,95,105,110,108,105,110,101,0),false ], [String.fromCharCode(108,95,49,55,95,114,101,110,100,101,114,0),true ]]);
    let themeQ = String.fromCharCode(99,95,51,50,95,119,105,102,105,0);
    let shootyesgoald = true;
    let mapbufferW = String.fromCharCode(113,95,54,56,95,108,111,99,97,108,105,122,97,116,105,111,110,115,0);
   let iconlogout1 = leaguedetailsbgL ? !leaguedetailsbgL : leaguedetailsbgL;
   do {
       let imagesf: Array<any> = [996, 758];
       let libreactU = String.fromCharCode(112,95,51,53,95,118,99,116,101,115,116,0);
       let defaultlogo7 = String.fromCharCode(122,95,56,95,114,101,109,111,118,97,108,0);
       let filedQ = String.fromCharCode(115,95,55,50,95,115,108,102,0);
      for (let n = 0; n < 2; n++) {
         defaultlogo7 = "1";
      }
      if (filedQ != defaultlogo7) {
          let background1 = String.fromCharCode(114,101,100,117,99,101,95,116,95,57,49,0);
          let privatechatbgy = String.fromCharCode(113,95,55,51,95,108,111,103,100,98,0);
          let weibo7: Map<any, any> = new Map([[String.fromCharCode(99,111,112,105,101,115,95,111,95,55,48,0),false ], [String.fromCharCode(108,97,116,116,105,99,101,95,115,95,56,53,0),false ]]);
         defaultlogo7 = `${1 & filedQ.length}`;
         background1 = `${privatechatbgy.length}`;
         privatechatbgy = `${(String.fromCharCode(52,0) == privatechatbgy ? privatechatbgy.length : weibo7.size)}`;
         weibo7 = new Map([[`${weibo7.size}`, 1]]);
      }
      let recommendationU = String.fromCharCode(114,101,54,117,49,121,108,117,116,0) == defaultlogo7;
      do {
          let splashW = String.fromCharCode(98,95,55,53,95,100,111,119,110,108,111,97,100,105,110,103,0);
          let actionC = true;
          let abidetectR = String.fromCharCode(112,105,120,101,108,115,95,97,95,52,52,0);
          let clockv = 4.0;
          let resultF = String.fromCharCode(105,110,104,105,98,105,116,115,95,118,95,53,54,0);
         defaultlogo7 += `${(String.fromCharCode(55,0) == abidetectR ? abidetectR.length : libreactU.length)}`;
         splashW = `${parseInt(`${clockv}`) >> (Math.min(4, Math.abs(1)))}`;
         actionC = resultF == splashW;
         clockv -= (1 * (actionC ? 3 : 3));
         resultF = `${2 + parseInt(`${clockv}`)}`;
         if (recommendationU) {
            break;
         }
      } while (recommendationU && (libreactU == defaultlogo7));
      if (defaultlogo7.endsWith(`${filedQ.length}`)) {
         defaultlogo7 += `${defaultlogo7.length}`;
      }
         defaultlogo7 += `${(libreactU == String.fromCharCode(111,0) ? imagesf.length : libreactU.length)}`;
      leaguedetailsbgL = cedbadcebfbfbfbcfecbcz > 36.4;
      if (iconlogout1) {
         break;
      }
   } while (iconlogout1 && (yellowD == 1 && (yellowD - 1) == 5));
   while (!iconsharev) {
       let redscoreballP: Map<any, any> = new Map([[String.fromCharCode(104,95,51,48,95,115,116,111,114,101,100,0),false ], [String.fromCharCode(98,119,114,105,116,101,95,55,95,54,55,0),false ]]);
       let release_2a = String.fromCharCode(118,95,50,54,95,108,105,98,106,112,101,103,116,117,114,98,111,0);
       let navigationG = String.fromCharCode(107,95,49,48,48,95,100,105,103,101,115,116,98,121,111,98,106,0);
         navigationG = `${(release_2a == String.fromCharCode(65,0) ? redscoreballP.size : release_2a.length)}`;
      let emptyw = release_2a.length >= 8904080;
      do {
         release_2a += `${2 * release_2a.length}`;
         if (emptyw) {
            break;
         }
      } while (emptyw && (2 <= (release_2a.length - redscoreballP.size)));
      while (5 > redscoreballP.size) {
         redscoreballP = new Map([[`${redscoreballP.size}`, 2 + release_2a.length]]);
         break;
      }
      if ((redscoreballP.size >> (Math.min(Math.abs(1), 4))) <= 1 || 5 <= (1 >> (Math.min(3, release_2a.length)))) {
         release_2a = `${2 & release_2a.length}`;
      }
         release_2a += `${redscoreballP.size}`;
          let heartI = String.fromCharCode(114,116,115,112,99,111,100,101,115,95,119,95,49,57,0);
          let customx = String.fromCharCode(115,116,111,112,112,105,110,103,95,105,95,55,50,0);
          let aboutD = String.fromCharCode(120,95,49,49,95,104,101,120,105,110,116,0);
         redscoreballP.set(release_2a, redscoreballP.size);
         heartI += `${(String.fromCharCode(54,0) == heartI ? aboutD.length : heartI.length)}`;
         customx += `${3 - customx.length}`;
         aboutD = `${aboutD.length ^ heartI.length}`;
      for (let a = 0; a < 1; a++) {
         redscoreballP = new Map([[`${redscoreballP.size}`, release_2a.length | redscoreballP.size]]);
      }
       let checkboxa = 0;
      for (let g = 0; g < 3; g++) {
          let penaltyshootnogoall = false;
          let gmailN: Map<any, any> = new Map([[String.fromCharCode(121,95,54,95,119,120,109,109,116,101,115,116,0),String.fromCharCode(105,95,51,52,95,117,110,98,111,110,100,0)], [String.fromCharCode(117,110,99,114,111,112,112,101,100,95,102,95,52,51,0),String.fromCharCode(97,95,53,57,95,113,116,114,108,101,0)], [String.fromCharCode(106,95,49,50,95,116,114,97,105,108,101,114,0),String.fromCharCode(102,95,49,51,95,114,101,106,101,99,116,101,100,0)]]);
          let screenq = 1.0;
          let mbbannerQ = String.fromCharCode(105,115,116,111,103,114,97,109,95,56,95,56,57,0);
         release_2a += "2";
         penaltyshootnogoall = !penaltyshootnogoall;
         gmailN.set(`${penaltyshootnogoall}`, ((penaltyshootnogoall ? 1 : 5) % 3));
         screenq += 1 << (Math.min(4, mbbannerQ.length));
         mbbannerQ = `${3 << (Math.min(1, mbbannerQ.length))}`;
      }
      iconsharev = 21 < redscoreballV.length;
      break;
   }
       let logouserE = String.fromCharCode(102,95,49,52,95,108,97,98,101,108,110,115,0);
       let animationU = 1;
      if (!logouserE.endsWith(`${animationU}`)) {
         animationU >>= Math.min(5, Math.abs(3 + logouserE.length));
      }
         animationU ^= animationU;
          let orientationI = 3.0;
          let champion_ = String.fromCharCode(102,95,57,56,95,102,111,114,103,111,116,116,101,110,0);
          let reactnativejss: Map<any, any> = new Map([[String.fromCharCode(110,116,114,111,95,113,95,49,54,0),false ], [String.fromCharCode(99,95,56,57,95,117,110,101,115,99,97,112,101,0),true ]]);
         animationU *= parseInt(`${orientationI}`) >> (Math.min(champion_.length, 4));
         orientationI -= reactnativejss.size * 3;
         champion_ = `${reactnativejss.size}`;
         logouserE += `${(logouserE == String.fromCharCode(71,0) ? animationU : logouserE.length)}`;
      while ((4 * animationU) > 5) {
         animationU &= logouserE.length / 2;
         break;
      }
      let untickB = 8024702 <= animationU;
      do {
          let giftO = String.fromCharCode(107,95,54,57,95,101,118,105,99,101,0);
          let libyogat = true;
          let albumH = true;
          let predictionbuttonN = String.fromCharCode(97,116,116,101,109,112,116,95,117,95,50,56,0);
         animationU += (giftO == String.fromCharCode(77,0) ? giftO.length : animationU);
         libyogat = albumH;
         predictionbuttonN = "3";
         if (untickB) {
            break;
         }
      } while ((animationU > logouserE.length) && untickB);
      yellowD /= Math.max(5, ((iconsharev ? 4 : 1) / (Math.max(yellowD, 3))));
      bang8 = [(3 & (leaguedetailsbgL ? 5 : 1))];
      leaguedetailsbgL = 16.12 <= cedbadcebfbfbfbcfecbcz;
   let fastforwarda = guidep.size >= 6554723;
   do {
       let hometeamfieldw = String.fromCharCode(100,101,108,97,121,115,95,119,95,53,51,0);
       let arrowX = String.fromCharCode(104,95,49,53,95,110,115,112,97,99,101,115,0);
       let emptyR = String.fromCharCode(100,111,99,95,55,95,50,57,0);
      if (emptyR.startsWith(arrowX)) {
         arrowX += `${(hometeamfieldw == String.fromCharCode(82,0) ? arrowX.length : hometeamfieldw.length)}`;
      }
         emptyR += "3";
         arrowX = `${hometeamfieldw.length}`;
      for (let i = 0; i < 1; i++) {
         arrowX += `${arrowX.length}`;
      }
      for (let w = 0; w < 3; w++) {
         emptyR += "1";
      }
         hometeamfieldw += `${hometeamfieldw.length}`;
          let fieldp = 4.0;
          let core_: Array<any> = [String.fromCharCode(112,114,101,112,97,114,101,100,95,107,95,51,56,0), String.fromCharCode(117,110,109,97,116,99,104,101,100,95,50,95,48,0)];
         arrowX = `${hometeamfieldw.length % (Math.max(2, arrowX.length))}`;
         fieldp /= Math.max(2, parseFloat(`${parseInt(`${fieldp}`) & 2}`));
         core_.push(core_.length);
       let reddownarrowe = 1;
       let sentryn = 5;
      let analyticN = hometeamfieldw.length <= 9309314;
      do {
         hometeamfieldw += `${emptyR.length}`;
         if (analyticN) {
            break;
         }
      } while ((1 > hometeamfieldw.length) && analyticN);
      guidep = new Map([[`${whiteY.size}`, whiteY.size >> (Math.min(Math.abs(2), 1))]]);
      if (fastforwarda) {
         break;
      }
   } while ((!mbbannerE) && fastforwarda);
      mbbannerE = !iconsharev;
       let subinA = false;
       let libreanimatedP: Map<any, any> = new Map([[String.fromCharCode(112,111,115,116,102,105,120,95,98,95,57,57,0),String.fromCharCode(111,95,52,51,95,101,99,114,101,100,0)], [String.fromCharCode(116,95,49,95,114,97,116,105,111,115,0),String.fromCharCode(105,95,56,49,95,113,100,101,108,116,97,0)]]);
      while (libreanimatedP.size <= 4) {
         libreanimatedP = new Map([[`${libreanimatedP.size}`, 2]]);
         break;
      }
       let topicy = false;
       let submitN = true;
      for (let o = 0; o < 3; o++) {
          let lineP: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,95,54,95,54,53,0),348], [String.fromCharCode(107,95,52,95,118,105,100,101,111,115,0),371], [String.fromCharCode(112,95,50,53,95,115,101,110,115,105,116,105,118,101,0),542]]);
          let elementsA = 2.0;
          let selectedf = 1.0;
          let dataU = String.fromCharCode(114,101,112,111,115,105,116,105,111,110,95,113,95,55,49,0);
         submitN = selectedf <= dataU.length;
         lineP = new Map([[`${lineP.size}`, lineP.size]]);
         elementsA *= parseFloat(`${lineP.size * parseInt(`${elementsA}`)}`);
         selectedf /= Math.max(parseInt(`${elementsA}`) & lineP.size, 2);
         dataU = `${3 - lineP.size}`;
      }
          let sharedD = 2.0;
          let inactive7 = String.fromCharCode(112,97,116,104,109,116,117,95,105,95,53,50,0);
          let telegram_ = String.fromCharCode(99,111,109,112,97,116,105,98,108,101,95,99,95,56,51,0);
         topicy = (sharedD - parseFloat(`${inactive7.length}`)) == 81.78;
         sharedD *= parseFloat(`${3 / (Math.max(9, telegram_.length))}`);
         inactive7 = "2";
      while (!subinA) {
         submitN = !topicy || !subinA;
         break;
      }
         libreanimatedP.set(`${subinA}`, 2);
      iconsharev = bang8.includes(subinA);
   for (let b = 0; b < 1; b++) {
      cedbadcebfbfbfbcfecbcz += parseFloat(`${scrollviewr.length}`);
   }
       let code_ = 0.0;
       let about_ = 4.0;
       let launcherf = String.fromCharCode(104,101,118,99,100,115,112,95,51,95,50,55,0);
          let optionsO = 1.0;
          let static_xw: Map<any, any> = new Map([[String.fromCharCode(103,97,116,104,101,114,105,110,103,95,106,95,54,49,0),907], [String.fromCharCode(102,111,114,99,101,100,95,107,95,55,0),668], [String.fromCharCode(110,95,50,49,95,99,104,111,111,115,101,0),497]]);
          let memberY = String.fromCharCode(115,97,118,101,114,95,101,95,54,48,0);
         launcherf = `${static_xw.size >> (Math.min(4, Math.abs(parseInt(`${optionsO}`))))}`;
         optionsO *= (parseFloat(`${memberY == String.fromCharCode(121,0) ? memberY.length : memberY.length}`));
         static_xw = new Map([[memberY, memberY.length]]);
       let reddownarrowec = String.fromCharCode(117,110,114,101,118,101,114,115,101,100,95,116,95,55,52,0);
       let anytimeF = String.fromCharCode(112,97,103,101,104,97,115,104,95,110,95,52,0);
          let recommendationR = 2;
          let scorepopsound4: Map<any, any> = new Map([[String.fromCharCode(109,111,114,112,104,101,100,95,111,95,53,52,0),false ], [String.fromCharCode(115,105,103,109,97,95,107,95,57,54,0),true ]]);
         reddownarrowec = `${reddownarrowec.length % 2}`;
         recommendationR -= recommendationR % 2;
         scorepopsound4 = new Map([[`${scorepopsound4.size}`, scorepopsound4.size]]);
      for (let j = 0; j < 2; j++) {
         about_ -= parseFloat(`${parseInt(`${about_}`)}`);
      }
      let y_unlockQ = code_ <= 9779911.0;
      do {
         code_ /= Math.max(5, reddownarrowec.length);
         if (y_unlockQ) {
            break;
         }
      } while (y_unlockQ && (reddownarrowec.length < 3));
         reddownarrowec = `${parseInt(`${about_}`)}`;
      for (let n = 0; n < 3; n++) {
          let umengs = 1.0;
          let modec = 2;
          let iconuserY: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,101,110,116,101,100,95,100,95,56,51,0),656], [String.fromCharCode(109,101,103,101,100,95,99,95,55,48,0),379], [String.fromCharCode(104,95,51,49,95,121,117,118,112,116,111,121,117,121,0),179]]);
          let basketballtrophys = 1;
         launcherf += `${parseInt(`${code_}`) ^ iconuserY.size}`;
         umengs *= parseFloat(`${basketballtrophys % 3}`);
         modec -= basketballtrophys;
         iconuserY = new Map([[`${basketballtrophys}`, parseInt(`${umengs}`) >> (Math.min(4, Math.abs(1)))]]);
      }
       let scrollviewz = String.fromCharCode(116,114,97,110,115,95,97,95,50,51,0);
         reddownarrowec = `${reddownarrowec.length}`;
      redscoreballV.push(bang8.length);
      guidep.set(`${leaguedetailsbgL}`, redscoreballV.length);
   for (let x = 0; x < 1; x++) {
      leaguedetailsbgL = 47 <= redscoreballV.length;
   }
       let libfabricjniY = String.fromCharCode(107,95,54,55,95,98,105,116,115,104,105,102,116,0);
       let brightnessr = 4.0;
       let mbbannerc = String.fromCharCode(112,114,111,118,105,100,101,114,115,95,48,95,53,55,0);
      while ((libfabricjniY.length / 5) < 1) {
         brightnessr *= parseInt(`${brightnessr}`);
         break;
      }
         brightnessr -= parseInt(`${brightnessr}`) << (Math.min(Math.abs(3), 2));
       let memberI = String.fromCharCode(97,95,56,51,95,114,97,108,102,0);
       let statisticsJ = true;
       let pauseB = false;
      while (2 == (mbbannerc.length ^ 3)) {
          let manifesth: Map<any, any> = new Map([[String.fromCharCode(121,95,54,55,95,110,101,101,100,108,101,0),216], [String.fromCharCode(101,95,55,49,95,108,112,99,101,110,118,0),5]]);
          let sharewhiteO = 3.0;
          let footballC = String.fromCharCode(115,99,114,101,101,110,99,97,115,116,95,48,95,54,50,0);
          let halffieldimageg = String.fromCharCode(101,95,51,52,95,118,100,101,98,117,103,0);
         brightnessr /= Math.max(footballC.length, 3);
         manifesth.set(`${sharewhiteO}`, parseInt(`${sharewhiteO}`) & 2);
         footballC = `${(halffieldimageg == String.fromCharCode(116,0) ? halffieldimageg.length : parseInt(`${sharewhiteO}`))}`;
         break;
      }
       let viewerZ = 2.0;
       let types4 = 1.0;
       let statsnomoredataq = 4.0;
       let canvasH = 3.0;
         statisticsJ = 13.80 == types4;
       let main_zf = 2.0;
      cedbadcebfbfbfbcfecbcz += parseFloat(`${libfabricjniY.length}`);
   while (3 > scrollviewr.length) {
      yellowD /= Math.max(1, guidep.size & 2);
      break;
   }
   if (1 > (scrollviewr.length * 2)) {
       let penaltymatchiconH = String.fromCharCode(105,95,50,49,95,99,117,114,114,101,110,116,0);
       let notification5 = 3;
       let clearY = true;
       let routerD = 5.0;
         penaltymatchiconH = `${penaltymatchiconH.length}`;
      let mergerl = notification5 <= 5889773;
      do {
         notification5 -= (parseInt(`${routerD}`) >> (Math.min(5, Math.abs((clearY ? 1 : 5)))));
         if (mergerl) {
            break;
         }
      } while ((!clearY) && mergerl);
         notification5 &= notification5 / (Math.max(penaltymatchiconH.length, 10));
         routerD -= (parseFloat(`${(clearY ? 2 : 5) / (Math.max(parseInt(`${routerD}`), 5))}`));
       let mbridgeS = String.fromCharCode(115,112,108,105,116,116,101,114,95,106,95,50,54,0);
      while (!mbridgeS.includes(penaltymatchiconH)) {
         penaltymatchiconH = `${mbridgeS.length ^ penaltymatchiconH.length}`;
         break;
      }
      for (let v = 0; v < 2; v++) {
         mbridgeS += `${parseInt(`${routerD}`)}`;
      }
      for (let b = 0; b < 1; b++) {
         mbridgeS += `${penaltymatchiconH.length ^ 1}`;
      }
         routerD /= Math.max(5, (parseFloat(`${(clearY ? 1 : 3) * penaltymatchiconH.length}`)));
      for (let p = 0; p < 1; p++) {
         routerD += parseFloat(`${3 << (Math.min(Math.abs(notification5), 1))}`);
      }
      for (let c = 0; c < 1; c++) {
         routerD /= Math.max(2, parseFloat(`${1 / (Math.max(9, parseInt(`${routerD}`)))}`));
      }
         mbridgeS += `${(parseInt(`${routerD}`) >> (Math.min(4, Math.abs((clearY ? 5 : 5)))))}`;
      cedbadcebfbfbfbcfecbcz /= Math.max(parseFloat(`${2}`), 1);
   }
       let gemfilel = true;
       let resend3: Array<any> = [276, 795];
       let type_t_ = 5.0;
          let entryb = String.fromCharCode(115,110,97,112,115,104,111,116,115,95,102,95,57,49,0);
         gemfilel = !gemfilel;
         entryb = `${entryb.length & 1}`;
      if (2.46 < (type_t_ - 5.49)) {
         type_t_ -= (parseFloat(`${1 & (gemfilel ? 5 : 5)}`));
      }
      while (1 == resend3.length) {
         resend3 = [((gemfilel ? 2 : 2) - parseInt(`${type_t_}`))];
         break;
      }
      for (let t = 0; t < 3; t++) {
         resend3.push(1 & resend3.length);
      }
         type_t_ -= parseFloat(`${2}`);
         resend3.push(resend3.length);
      for (let e = 0; e < 2; e++) {
         resend3 = [parseInt(`${type_t_}`)];
      }
         resend3.push(resend3.length * 3);
      while (!gemfilel) {
          let modity7 = String.fromCharCode(105,95,54,51,95,108,105,98,118,101,114,115,105,111,110,0);
          let countdowno = 0.0;
         resend3.push(resend3.length ^ parseInt(`${type_t_}`));
         modity7 = `${modity7.length}`;
         countdowno *= 1;
         break;
      }
      bang8.push(scrollviewr.length);
   for (let c = 0; c < 1; c++) {
      cedbadcebfbfbfbcfecbcz *= parseFloat(`${yellowD}`);
   }
      bang8 = [2];
       let g_playerk: Map<any, any> = new Map([[String.fromCharCode(98,95,53,54,95,115,116,117,102,102,105,110,103,0),String.fromCharCode(119,95,55,56,95,97,99,99,101,112,116,0)], [String.fromCharCode(115,116,97,110,100,97,114,100,105,122,101,95,50,95,55,52,0),String.fromCharCode(116,101,99,104,110,111,108,111,103,121,95,53,95,51,54,0)], [String.fromCharCode(120,95,55,49,95,110,105,115,116,110,105,100,0),String.fromCharCode(121,111,110,108,121,120,95,121,95,55,48,0)]]);
       let darkd = String.fromCharCode(98,101,105,110,103,95,122,95,49,57,0);
       let iconmoreZ: Map<any, any> = new Map([[String.fromCharCode(108,95,55,49,95,114,101,102,112,108,97,110,101,0),String.fromCharCode(109,95,56,55,95,100,101,109,97,116,101,114,105,97,108,105,122,101,0)], [String.fromCharCode(110,95,57,56,95,100,105,102,102,0),String.fromCharCode(104,95,52,56,95,101,110,116,105,116,105,101,115,0)]]);
      while (!darkd.startsWith(`${iconmoreZ.size}`)) {
          let plashA = String.fromCharCode(101,95,49,56,95,99,105,114,99,108,101,100,0);
          let whitep = String.fromCharCode(116,95,51,51,95,115,113,108,105,116,101,99,104,97,110,103,101,103,114,111,117,112,0);
          let codegenM: Map<any, any> = new Map([[String.fromCharCode(120,95,52,55,95,97,98,115,108,0),437], [String.fromCharCode(112,101,101,114,95,55,95,50,53,0),534], [String.fromCharCode(118,105,101,119,115,95,108,95,53,57,0),693]]);
         iconmoreZ.set(whitep, plashA.length);
         plashA += `${codegenM.size - codegenM.size}`;
         whitep = "1";
         break;
      }
      for (let z = 0; z < 3; z++) {
          let libfb2: Array<any> = [String.fromCharCode(100,110,120,104,100,100,97,116,97,95,117,95,52,48,0), String.fromCharCode(98,95,53,56,0)];
          let goallogo2 = false;
         iconmoreZ.set(`${libfb2.length}`, 1);
         libfb2.push(((goallogo2 ? 2 : 4) >> (Math.min(4, Math.abs((goallogo2 ? 1 : 5))))));
      }
         g_playerk.set(`${darkd}`, g_playerk.size);
      if (1 >= (g_playerk.size / (Math.max(3, 9))) && (g_playerk.size / (Math.max(6, iconmoreZ.size))) >= 3) {
          let mimo5 = 1;
         g_playerk.set(`${mimo5}`, 1);
      }
         iconmoreZ.set(`${darkd}`, 3);
      while (iconmoreZ.get(`${g_playerk.size}`) != null) {
         iconmoreZ = new Map([[`${g_playerk.size}`, 3]]);
         break;
      }
          let libfollyj = 5.0;
          let cleare = 2.0;
          let matchesL = false;
         darkd += `${(String.fromCharCode(54,0) == darkd ? (matchesL ? 4 : 4) : darkd.length)}`;
         libfollyj /= Math.max(5, 3);
         cleare += parseFloat(`${1 & parseInt(`${cleare}`)}`);
         matchesL = 65.86 > cleare;
      while ((iconmoreZ.size * 5) <= 2 || 2 <= (iconmoreZ.size * 5)) {
         g_playerk.set(`${g_playerk.size}`, g_playerk.size / 1);
         break;
      }
         darkd = `${g_playerk.size * 1}`;
      whiteY = new Map([[`${iconmoreZ.size}`, iconmoreZ.size ^ 2]]);
   if (iconsharev && 3 < (1 >> (Math.min(5, Math.abs(whiteY.size))))) {
       let shoot5 = true;
       let closeq = 4.0;
          let product9 = String.fromCharCode(121,95,56,55,95,110,97,117,116,105,99,97,108,0);
         shoot5 = closeq >= 93.4;
         product9 += `${product9.length % (Math.max(1, 6))}`;
         shoot5 = closeq > 32.8;
         closeq /= Math.max(5, (parseFloat(`${parseInt(`${closeq}`) - (shoot5 ? 4 : 1)}`)));
       let libavdevicex = String.fromCharCode(97,95,56,56,95,97,115,115,105,103,110,0);
         libavdevicex = `${parseInt(`${closeq}`)}`;
          let becomeN: Map<any, any> = new Map([[String.fromCharCode(102,95,57,54,95,99,107,112,116,0),113], [String.fromCharCode(97,95,56,52,95,116,97,103,99,111,109,112,97,114,101,0),726]]);
         libavdevicex += `${(String.fromCharCode(80,0) == libavdevicex ? parseInt(`${closeq}`) : libavdevicex.length)}`;
         becomeN = new Map([[`${becomeN.size}`, becomeN.size]]);
      whiteY = new Map([[scrollviewr, yellowD]]);
   }
   for (let g = 0; g < 3; g++) {
       let reactnativejsV = String.fromCharCode(105,95,54,48,95,115,101,110,99,0);
       let telegrame = true;
       let eacte = String.fromCharCode(109,95,53,48,95,104,97,114,112,101,110,0);
         eacte += `${((telegrame ? 4 : 3))}`;
      if (eacte.length == 1) {
         telegrame = (((!telegrame ? 84 : reactnativejsV.length) % (Math.max(1, reactnativejsV.length))) == 84);
      }
      if (reactnativejsV.includes(`${telegrame}`)) {
          let regengh = String.fromCharCode(98,95,55,48,95,112,97,114,105,116,105,111,110,105,110,103,0);
          let clockk = 5;
          let controlsx = String.fromCharCode(119,95,49,53,95,105,110,118,101,114,115,101,100,0);
          let benefith = String.fromCharCode(117,95,49,48,48,95,112,101,115,113,0);
          let emojiheartb = false;
         telegrame = benefith.length < 36 && !emojiheartb;
         regengh += `${1 >> (Math.min(1, Math.abs(clockk)))}`;
         clockk >>= Math.min(3, controlsx.length);
         controlsx += `${clockk << (Math.min(regengh.length, 1))}`;
         benefith = `${clockk * 3}`;
         emojiheartb = controlsx.length < 58;
      }
       let renderG = 3.0;
       let mapping1 = 5.0;
       let logouser_ = String.fromCharCode(107,117,107,105,95,121,95,49,50,0);
         eacte = `${parseInt(`${renderG}`)}`;
      let countdownT = eacte.length <= 7946110;
      do {
          let suggestionT = false;
          let iconclosewhiteq = String.fromCharCode(115,117,98,116,114,97,99,116,95,111,95,49,51,0);
         eacte += `${(eacte.length & (telegrame ? 4 : 1))}`;
         suggestionT = (((!suggestionT ? 20 : iconclosewhiteq.length) >> (Math.min(iconclosewhiteq.length, 2))) >= 20);
         if (countdownT) {
            break;
         }
      } while (countdownT && (4.6 >= (renderG * 2.97) && (eacte.length - 3) >= 5));
       let reactnativejsb: Array<any> = [620, 890, 540];
      for (let k = 0; k < 1; k++) {
         eacte = `${reactnativejsb.length - 2}`;
      }
      bang8 = [((leaguedetailsbgL ? 4 : 4) / (Math.max(5, parseInt(`${cedbadcebfbfbfbcfecbcz}`))))];
   }
   for (let k = 0; k < 3; k++) {
       let reducerk: Array<any> = [915, 83];
       let encryptor_ = 2;
       let backiconi: Map<any, any> = new Map([[String.fromCharCode(103,95,51,55,95,100,120,118,97,0),String.fromCharCode(115,97,109,112,108,101,114,101,100,117,99,116,105,111,110,95,117,95,56,55,0)], [String.fromCharCode(109,95,49,52,0),String.fromCharCode(99,95,57,54,95,112,105,120,100,101,115,99,0)], [String.fromCharCode(105,95,52,53,95,106,105,116,116,101,114,0),String.fromCharCode(108,95,49,57,95,99,111,108,111,114,109,97,116,114,105,120,0)]]);
       let expiredz = 3.0;
         reducerk = [parseInt(`${expiredz}`)];
         reducerk.push(parseInt(`${expiredz}`));
      let navigationL = expiredz >= 8075989.0;
      do {
          let homeinactiven = 3;
         expiredz *= parseInt(`${expiredz}`) >> (Math.min(Math.abs(1), 3));
         homeinactiven <<= Math.min(Math.abs(homeinactiven), 5);
         if (navigationL) {
            break;
         }
      } while (navigationL && ((expiredz / (Math.max(reducerk.length, 4))) <= 5.42 || (reducerk.length / (Math.max(7, parseInt(`${expiredz}`)))) <= 5));
      while (1 <= (reducerk.length / 5) && (5.58 - expiredz) <= 4.26) {
         expiredz *= encryptor_;
         break;
      }
          let activity0 = 4;
          let confige = false;
         encryptor_ -= (parseInt(`${expiredz}`) >> (Math.min(2, Math.abs((confige ? 3 : 3)))));
         activity0 += activity0 | 3;
         confige = 86 > (activity0 / (Math.max(activity0, 8)));
      for (let b = 0; b < 1; b++) {
         encryptor_ >>= Math.min(5, Math.abs(parseInt(`${expiredz}`) >> (Math.min(Math.abs(backiconi.size), 1))));
      }
      while ((backiconi.size - 1) <= 4 && 1 <= (parseInt(`${expiredz}`) + backiconi.size)) {
         backiconi.set(`${encryptor_}`, 2 % (Math.max(encryptor_, 6)));
         break;
      }
         reducerk = [2 & backiconi.size];
       let statisticsz: Map<any, any> = new Map([[String.fromCharCode(102,101,110,99,95,57,95,50,49,0),795], [String.fromCharCode(113,95,55,51,95,102,105,102,111,0),892]]);
       let subbasketballplayerx: Map<any, any> = new Map([[String.fromCharCode(105,95,55,56,95,99,97,108,99,117,97,108,116,101,0),57], [String.fromCharCode(110,117,109,95,51,95,49,49,0),868], [String.fromCharCode(103,95,55,52,95,109,101,109,120,0),795]]);
       let streaming_ = String.fromCharCode(99,95,49,50,95,114,101,99,111,110,110,101,99,116,105,111,110,0);
          let schedulec = String.fromCharCode(100,101,110,111,114,109,97,108,95,118,95,51,0);
          let predictiondefaultL = 4.0;
         expiredz += 1;
         schedulec = `${parseInt(`${predictiondefaultL}`)}`;
         predictiondefaultL += parseFloat(`${parseInt(`${predictiondefaultL}`)}`);
       let cornerI: Map<any, any> = new Map([[String.fromCharCode(111,119,110,108,111,97,100,95,56,95,51,52,0),986], [String.fromCharCode(99,114,97,122,121,116,105,109,101,95,106,95,50,51,0),228], [String.fromCharCode(110,101,119,114,111,119,95,114,95,54,51,0),843]]);
       let bangm: Map<any, any> = new Map([[String.fromCharCode(104,100,101,99,95,99,95,50,49,0),String.fromCharCode(111,95,57,48,95,112,114,101,99,105,115,105,111,110,0)], [String.fromCharCode(108,95,50,48,95,97,100,100,120,0),String.fromCharCode(98,95,56,56,95,104,97,110,100,101,114,0)], [String.fromCharCode(99,121,99,108,105,99,95,100,95,56,51,0),String.fromCharCode(114,95,49,51,95,110,111,114,109,97,108,105,115,101,0)]]);
      iconsharev = encryptor_ >= 22;
   }

    onToggleFullScreen();
  };

  

  const position = getMinutesFromSeconds(currentTime);
  const fullDuration = getMinutesFromSeconds(duration);

  return (
    <>
      {!isFullScreen ? (
        <View style={styles.wrapper}>
          {videoType === 'vod' ? (
            <>
              <Slider
                value={currentTime}
                minimumValue={0}
                maximumValue={duration}
                step={1}
                onValueChange={onSlideProgressBar}
                onSlidingStart={onSlideStart}
                onSlidingComplete={onSlideComplete}
                minimumTrackTintColor={colors.primary}
                maximumTrackTintColor='rgba(255,255,255,0.2)'
                thumbTintColor={'#FFFFFF'}
                thumbStyle={{ height: 15, width: 15 }}
                
                //   children: showSliderThumbnail && <VideoThumbnail url=VignetteFound.sigmobHongkong([92,64,64,68,71,14,27,27,65,68,88,91,85,80,26,67,93,95,93,89,81,80,93,85,26,91,70,83,27,67,93,95,93,68,81,80,93,85,27,81,90,27,85,27,85,2,27,100,91,95,-9,-99,89,91,90,107,100,93,95,85,87,92,65,107,85,70,64,26,68,90,83,52],0x34,false) />
                
                
                
                style={{
                  flex: 12,
                  marginTop: 2,
                }}
              />
              <Text>
                <Text style={styles.timeLeft}>
                  {new Date(currentTime * 1000).toISOString().substring(11, 19)}
                </Text>
                <Text style={styles.timeRight}>
                  {` / ${new Date(duration * 1000).toISOString().substring(11, 19)}`}
                </Text>
              </Text>
            </>
          ) : <View />
          }
          <Pressable
            onPress={onPressFullScreenBtn}
            style={{ alignItems: 'flex-end' }}>
            <FullScreen width={30} height={30} />
          </Pressable>
        </View>
      ) : (
        <View style={styles.landscapeContainer} >
          <View style={{ ...styles.wrapper }}>
            {videoType === 'vod' && (
              <>
                <Slider
                  value={currentTime}
                  minimumValue={0}
                  maximumValue={duration}
                  step={1}
                  onValueChange={onSlideProgressBar}
                  onSlidingStart={onSlideStart}
                  onSlidingComplete={onSlideComplete}
                  minimumTrackTintColor={colors.primary}
                  maximumTrackTintColor='rgba(255,255,255,0.2)'
                  thumbTintColor={'#FFFFFF'}
                  
                  thumbStyle={{ height: 15, width: 15 }}
                  
                  
                  //   children: <VideoThumbnail url=VignetteFound.sigmobHongkong([92,64,64,68,71,14,27,27,65,68,88,91,85,80,26,67,93,95,93,89,81,80,93,85,26,91,70,83,27,67,93,95,93,68,81,80,93,85,27,81,90,27,85,27,85,2,27,100,91,95,-9,-99,89,91,90,107,100,93,95,85,87,92,65,107,85,70,64,26,68,90,83,52],0x34,false) />
                  
                  style={{ flex: 16, marginTop: 2 }}
                />
                <View style={{ ...styles.timeWrapperLandscape }}>
                  <Text style={styles.timeLeftLandscape}>
                    {new Date(currentTime * 1000).toISOString().substring(11, 19)}
                  </Text>
                  <Text style={styles.timeRightLandscape}>
                    {` / ${new Date(duration * 1000).toISOString().substring(11, 19)}`}
                  </Text>
                </View>
              </>
            )}
          </View>
          <View style={{ ...styles.row }}>
            <View>
              <RectButton
                disallowInterruption={true}
                onPress={onLock}>
                <LockScreenIcon width={30} height={30} style={{ color: onNextEpisode === undefined ? colors.muted : colors.text }} />
              </RectButton>
            </View>
            <View style={{ ...styles.row, gap: 20 }}>
              {
                onNextEpisode !== undefined &&
                <RectButton
                  disallowInterruption={true}
                  onPress={onNextEpisode}>
                  <NextEpisodeIcon width={30} height={30} style={{ color: onNextEpisode === undefined ? colors.muted : colors.text }} />
                </RectButton>
              }
              {
                videoType !== 'live' &&
                <RectButton
                  disallowInterruption={true}
                  onPress={onEpisodeSelection}>
                  {
                    showMoreType === 'movies'
                      ? <MoreMoviesIcon width={30} height={30} />
                      : <SelectEpisodesIcon width={30} height={30} />
                  }
                </RectButton>
              }
              {
                videoType !== 'live' &&
                <RectButton
                  disallowInterruption={true}
                  onPress={onPlaybackRateChange}>
                  <Text style={textVariants.header}>{`${playbackRate}X`}</Text>
                </RectButton>
              }
              <RectButton
                disallowInterruption={true}
                onPress={onPressFullScreenBtn}>
                <MinimizeScreen width={30} height={30} />
              </RectButton>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  landscapeContainer: {
    
    
    
    zIndex: 100,
    paddingHorizontal: 10
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  buttonsSubContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  containerItem: {
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: 8,
    paddingLeft: 8
  },
  timeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 4
  },
  timeWrapperLandscape: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    float: 'center',
    justifyContent: 'center',
    flex: 3,
  },
  timeLeft: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  timeRight: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'right',
  },
  timeLeftLandscape: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  timeRightLandscape: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
