

class RewindFiledThailandStar {
    static libloggerLessLibfileMatchactiv = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { MinimizeScreenSvg, FullScreenSvg, MoreMoviesSvg, NextEpisodeSvg, SelectEpisodesSvg, LockScreenSvg } from '@static';

import { TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Slider } from '@rneui/themed';
import VideoThumbnail from './yys_anner';

type yysIconarrowrightorangeStation = {
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
}: yysIconarrowrightorangeStation) => {
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
       let relatedA = String.fromCharCode(114,95,49,55,95,97,117,116,111,100,101,116,101,99,116,0);
    let dangerU = true;
    let libcxxcomponents0 = 0;
    let flipperc = 1;
    let adultw = String.fromCharCode(117,95,53,53,95,109,102,104,100,0);
    let defaultplayerimgt = 3;
    let pages: Map<any, any> = new Map([[String.fromCharCode(109,98,115,116,114,105,110,103,95,56,95,50,50,0),true ], [String.fromCharCode(116,111,110,101,95,112,95,50,55,0),false ]]);
    let downloadingL = 5.0;
    let huawei0 = 2.0;
    let collection1 = String.fromCharCode(112,97,114,116,95,109,95,56,52,0);
    let teamI: Map<any, any> = new Map([[String.fromCharCode(97,95,54,95,114,101,108,97,116,101,100,0),String.fromCharCode(120,95,50,57,95,97,99,116,105,118,105,116,105,101,115,0)], [String.fromCharCode(103,108,111,119,0),String.fromCharCode(99,108,97,115,115,110,97,109,101,95,52,95,51,48,0)], [String.fromCharCode(118,112,100,115,112,95,112,95,55,49,0),String.fromCharCode(103,110,111,95,105,95,49,49,0)]]);
    let mnewso = String.fromCharCode(119,95,57,49,95,105,110,118,105,116,101,100,0);
    let whiteanimationliveQ = 4.0;
    let typing3: Array<any> = [282, 21, 130];
    let servicea = 5.0;
    let description_cX = 4;
    let private_ruT = String.fromCharCode(102,95,53,48,95,113,117,105,99,107,0);
   let bgvipxvodD = 9186340 <= mnewso.length;
   do {
      mnewso += "2";
      if (bgvipxvodD) {
         break;
      }
   } while (((mnewso.length | flipperc) <= 3) && bgvipxvodD);
       let homeloadingL: Map<any, any> = new Map([[String.fromCharCode(112,97,115,116,101,100,95,109,95,49,49,0),615], [String.fromCharCode(109,118,100,97,116,97,95,109,95,50,50,0),995], [String.fromCharCode(115,95,53,50,95,119,101,98,118,105,101,119,0),897]]);
       let arrowdownO: Array<any> = [String.fromCharCode(110,95,53,53,95,108,97,114,103,101,0), String.fromCharCode(120,95,50,0)];
       let v_managerM = String.fromCharCode(115,116,114,116,111,108,108,95,56,95,52,52,0);
       let questicone = String.fromCharCode(101,109,98,101,100,95,56,95,54,50,0);
       let clubh = String.fromCharCode(103,95,55,54,95,114,101,113,117,101,115,116,101,114,0);
      if (!clubh.endsWith(`${questicone.length}`)) {
         questicone = "1";
      }
         homeloadingL = new Map([[`${arrowdownO.length}`, 2 | arrowdownO.length]]);
      if ((questicone.length & arrowdownO.length) >= 4 && 2 >= (4 & questicone.length)) {
         arrowdownO = [v_managerM.length];
      }
      for (let z = 0; z < 2; z++) {
          let floaterR = 0.0;
          let bannerz = 5.0;
          let huaweiQ = 5.0;
         clubh += `${(questicone == String.fromCharCode(69,0) ? questicone.length : homeloadingL.size)}`;
         floaterR -= 2 % (Math.max(7, parseInt(`${bannerz}`)));
         bannerz += 3;
         huaweiQ -= 1;
      }
          let stationK = 1.0;
         v_managerM = `${homeloadingL.size + 1}`;
         stationK *= parseInt(`${stationK}`);
      while (v_managerM.endsWith(`${questicone.length}`)) {
         questicone += `${homeloadingL.size & v_managerM.length}`;
         break;
      }
         questicone = `${v_managerM.length}`;
      if (v_managerM.length < 5) {
          let iconplayD = true;
          let configv: Map<any, any> = new Map([[String.fromCharCode(117,95,55,95,102,111,114,109,97,116,116,101,114,115,0),true ], [String.fromCharCode(100,95,50,48,95,102,112,99,0),true ]]);
         v_managerM = `${(homeloadingL.size & (iconplayD ? 2 : 2))}`;
         iconplayD = (configv.size | configv.size) >= 54;
      }
      mnewso += `${((dangerU ? 5 : 5) + parseInt(`${huawei0}`))}`;
      adultw += `${((dangerU ? 1 : 2))}`;
   while (4 >= (2 * flipperc)) {
      huawei0 -= ((dangerU ? 3 : 1));
      break;
   }
   for (let m = 0; m < 1; m++) {
      dangerU = adultw == String.fromCharCode(102,0);
   }
   let selecti = dangerU ? !dangerU : dangerU;
   do {
       let mountingf = 4.0;
       let downloadingV: Array<any> = [String.fromCharCode(110,117,109,98,101,114,115,95,118,95,52,52,0), String.fromCharCode(99,111,110,115,116,114,117,99,116,95,111,95,52,48,0)];
       let redscoreballN = 5.0;
         redscoreballN += 2 ^ parseInt(`${redscoreballN}`);
      while (4 < (parseInt(`${redscoreballN}`) / (Math.max(downloadingV.length, 4)))) {
          let tickedJ = 5;
          let iconnotificationnewt: Map<any, any> = new Map([[String.fromCharCode(111,95,55,49,95,112,101,114,115,111,110,0),String.fromCharCode(116,104,97,116,95,115,95,56,52,0)], [String.fromCharCode(118,101,114,105,102,105,99,97,116,105,111,110,0),String.fromCharCode(108,95,48,95,104,101,118,99,100,101,99,0)]]);
          let soundH = String.fromCharCode(103,101,116,112,116,114,95,104,95,51,54,0);
         downloadingV.push(parseInt(`${mountingf}`));
         tickedJ >>= Math.min(Math.abs(soundH.length + iconnotificationnewt.size), 4);
         iconnotificationnewt.set(soundH, (String.fromCharCode(70,0) == soundH ? iconnotificationnewt.size : soundH.length));
         break;
      }
         downloadingV.push(downloadingV.length * parseInt(`${redscoreballN}`));
       let analyticU = 4;
         mountingf += 1 | downloadingV.length;
         redscoreballN -= analyticU;
      while (analyticU < downloadingV.length) {
          let datab = String.fromCharCode(97,112,112,114,116,99,95,117,95,55,48,0);
         analyticU ^= analyticU + datab.length;
         break;
      }
         downloadingV = [1 & parseInt(`${redscoreballN}`)];
         analyticU |= analyticU;
      dangerU = mnewso.length == 50 && dangerU;
      if (selecti) {
         break;
      }
   } while ((3 == relatedA.length) && selecti);
   let buffern = 6686371 <= mnewso.length;
   do {
      mnewso = "2";
      if (buffern) {
         break;
      }
   } while ((2 >= (2 << (Math.min(3, Math.abs(libcxxcomponents0)))) || 4 >= (2 << (Math.min(1, mnewso.length)))) && buffern);
      huawei0 += 3 * teamI.size;
   for (let j = 0; j < 3; j++) {
      downloadingL /= Math.max(3, (mnewso == String.fromCharCode(70,0) ? defaultplayerimgt : mnewso.length));
   }
      defaultplayerimgt /= Math.max(2, 2 >> (Math.min(2, relatedA.length)));
   while ((downloadingL - huawei0) == 5.16 || (huawei0 - downloadingL) == 5.16) {
       let mimoD = String.fromCharCode(114,95,50,50,95,117,110,108,105,110,107,101,100,0);
       let temp0 = String.fromCharCode(116,104,114,111,116,116,108,105,110,103,95,56,95,49,51,0);
       let selectedd: Map<any, any> = new Map([[String.fromCharCode(115,117,98,118,105,101,119,115,95,113,95,50,51,0),44], [String.fromCharCode(97,114,99,104,105,118,105,110,103,95,49,95,49,50,0),802]]);
      if (1 <= (mimoD.length >> (Math.min(2, Math.abs(selectedd.size)))) && (1 >> (Math.min(1, Math.abs(selectedd.size)))) <= 1) {
         selectedd.set(`${temp0}`, temp0.length);
      }
      for (let n = 0; n < 2; n++) {
         mimoD = `${temp0.length}`;
      }
      while (5 == (selectedd.size ^ 1) && (1 ^ selectedd.size) == 5) {
          let floaterG = String.fromCharCode(116,105,109,101,115,99,97,108,101,0);
         selectedd.set(temp0, temp0.length ^ 3);
         floaterG += `${(String.fromCharCode(49,0) == floaterG ? floaterG.length : floaterG.length)}`;
         break;
      }
          let hometeamfieldq = String.fromCharCode(102,114,97,109,101,110,117,109,95,109,95,57,51,0);
         temp0 += `${temp0.length - mimoD.length}`;
         hometeamfieldq = `${hometeamfieldq.length}`;
      for (let r = 0; r < 2; r++) {
          let interstitialx = 5.0;
         temp0 += `${(mimoD == String.fromCharCode(87,0) ? temp0.length : mimoD.length)}`;
         interstitialx /= Math.max(2, parseInt(`${interstitialx}`) | 2);
      }
         selectedd = new Map([[temp0, temp0.length & mimoD.length]]);
      for (let t = 0; t < 1; t++) {
          let encryptorY = String.fromCharCode(100,101,110,111,114,109,97,108,105,122,101,95,112,95,56,50,0);
          let mimo1 = String.fromCharCode(115,116,97,98,105,108,105,122,101,95,52,95,54,56,0);
          let matchesR = 5.0;
          let matchactivec = String.fromCharCode(99,121,97,110,95,119,95,53,49,0);
          let telemetryL: Map<any, any> = new Map([[String.fromCharCode(115,95,54,0),String.fromCharCode(105,110,116,101,114,118,97,108,95,116,95,55,55,0)], [String.fromCharCode(116,120,116,110,105,100,95,110,95,53,54,0),String.fromCharCode(107,95,50,55,95,111,112,101,110,99,108,0)], [String.fromCharCode(115,117,98,116,121,112,101,115,95,51,95,53,54,0),String.fromCharCode(115,95,57,56,95,115,97,105,111,0)]]);
         temp0 += `${temp0.length | mimoD.length}`;
         encryptorY = `${(encryptorY == String.fromCharCode(98,0) ? telemetryL.size : encryptorY.length)}`;
         mimo1 += `${telemetryL.size | encryptorY.length}`;
         matchesR -= parseFloat(`${2}`);
         matchactivec += `${matchactivec.length << (Math.min(Math.abs(1), 5))}`;
      }
          let smallsoundf = String.fromCharCode(104,95,56,54,95,108,111,103,115,97,109,112,108,101,0);
          let brightnessw = String.fromCharCode(103,109,97,116,99,104,95,54,95,57,48,0);
          let iconbackwhite0 = String.fromCharCode(113,95,53,56,95,112,111,115,116,112,114,111,99,114,101,115,0);
         mimoD += `${iconbackwhite0.length + smallsoundf.length}`;
         smallsoundf = `${2 | brightnessw.length}`;
         brightnessw += "1";
      let wifirouterL = 7696263 <= selectedd.size;
      do {
          let videocommonv = String.fromCharCode(100,101,99,105,109,97,108,115,95,57,95,50,49,0);
         selectedd = new Map([[`${selectedd.size}`, 3]]);
         videocommonv += `${(String.fromCharCode(118,0) == videocommonv ? videocommonv.length : videocommonv.length)}`;
         if (wifirouterL) {
            break;
         }
      } while (wifirouterL && (4 >= (temp0.length << (Math.min(1, Math.abs(selectedd.size)))) || (selectedd.size << (Math.min(Math.abs(4), 4))) >= 3));
      downloadingL -= 3;
      break;
   }
      dangerU = huawei0 < 92.47;
   while (teamI.get(`${downloadingL}`) != null) {
      teamI.set(`${huawei0}`, parseInt(`${downloadingL}`) / 1);
      break;
   }
      huawei0 += collection1.length & 3;
       let dropdownV = 0;
       let aboutv: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,110,110,101,99,116,95,117,95,51,50,0),878], [String.fromCharCode(119,95,55,56,95,110,111,116,105,102,105,101,115,0),470], [String.fromCharCode(108,95,53,48,95,115,117,98,115,101,108,101,99,116,0),494]]);
       let baselineQ = String.fromCharCode(102,95,54,53,95,99,111,110,116,101,110,116,0);
      while (!Array.from(aboutv.values()).includes(dropdownV)) {
          let buffero: Map<any, any> = new Map([[String.fromCharCode(103,101,109,102,105,108,101,95,104,95,56,50,0),false ], [String.fromCharCode(121,95,57,50,95,114,101,103,105,115,116,101,114,0),false ]]);
         dropdownV <<= Math.min(5, Math.abs(2 ^ baselineQ.length));
         buffero.set(`${buffero.size}`, 2 ^ buffero.size);
         break;
      }
      let productf = aboutv.size >= 8300237;
      do {
          let elements1: Array<any> = [376, 40, 157];
          let fullscreenminB = 0;
          let yellowtoredy = 2.0;
          let cornerkickP = 3;
         aboutv.set(baselineQ, dropdownV);
         elements1 = [fullscreenminB];
         fullscreenminB |= parseInt(`${yellowtoredy}`) * 2;
         yellowtoredy -= 3 % (Math.max(parseInt(`${yellowtoredy}`), 8));
         cornerkickP >>= Math.min(Math.abs(cornerkickP), 3);
         if (productf) {
            break;
         }
      } while (((4 / (Math.max(6, dropdownV))) > 4 && 4 > (dropdownV / (Math.max(aboutv.size, 4)))) && productf);
      if (aboutv.get(`${dropdownV}`) != null) {
         aboutv = new Map([[baselineQ, (String.fromCharCode(89,0) == baselineQ ? dropdownV : baselineQ.length)]]);
      }
      let livenodatabgimg7 = baselineQ == String.fromCharCode(116,51,109,0);
      do {
         baselineQ = `${(String.fromCharCode(54,0) == baselineQ ? aboutv.size : baselineQ.length)}`;
         if (livenodatabgimg7) {
            break;
         }
      } while (livenodatabgimg7 && (4 < aboutv.size));
         baselineQ = `${dropdownV}`;
         baselineQ += `${dropdownV >> (Math.min(Math.abs(3), 3))}`;
      if (baselineQ.length > aboutv.size) {
          let imageactionliveC = 3.0;
          let langkeyz = String.fromCharCode(101,108,105,115,116,95,108,95,56,53,0);
         baselineQ = `${parseInt(`${imageactionliveC}`)}`;
         imageactionliveC -= langkeyz.length;
         langkeyz += `${langkeyz.length}`;
      }
         aboutv.set(baselineQ, baselineQ.length);
       let tickedx = String.fromCharCode(108,111,119,95,111,95,57,52,0);
       let membershipY = String.fromCharCode(101,99,108,95,108,95,55,49,0);
      pages = new Map([[`${dangerU}`, 2]]);
   let bingx = defaultplayerimgt >= 8212166;
   do {
      defaultplayerimgt += parseInt(`${huawei0}`);
      if (bingx) {
         break;
      }
   } while (((libcxxcomponents0 + 2) == 5 && 1 == (2 + defaultplayerimgt)) && bingx);
       let volume9: Array<any> = [244, 571];
         volume9.push(volume9.length);
      if ((volume9.length & volume9.length) == 1 || (volume9.length & volume9.length) == 1) {
         volume9.push(3);
      }
         volume9.push(2 & volume9.length);
      defaultplayerimgt /= Math.max(pages.size, 4);
   for (let o = 0; o < 1; o++) {
       let appleR = String.fromCharCode(118,100,101,98,117,103,95,100,95,54,53,0);
         appleR = `${appleR.length}`;
      if (1 < appleR.length) {
         appleR = `${appleR.length >> (Math.min(Math.abs(1), 2))}`;
      }
      while (5 < appleR.length) {
         appleR += `${appleR.length}`;
         break;
      }
      teamI = new Map([[relatedA, adultw.length & relatedA.length]]);
   }
      teamI.set(`${downloadingL}`, 1);
       let greytickQ = false;
       let membership2 = 4;
      let defaultfootballbgb = 8231143 >= membership2;
      do {
          let dropdownf: Map<any, any> = new Map([[String.fromCharCode(112,97,105,114,105,110,103,115,95,55,95,56,56,0),751], [String.fromCharCode(100,95,56,55,95,104,97,110,100,108,101,114,0),203], [String.fromCharCode(122,101,114,111,109,118,95,101,95,54,53,0),25]]);
          let combineZ = String.fromCharCode(115,117,99,104,95,53,95,57,55,0);
         membership2 %= Math.max(membership2 % (Math.max(dropdownf.size, 4)), 2);
         dropdownf = new Map([[combineZ, combineZ.length * 3]]);
         if (defaultfootballbgb) {
            break;
         }
      } while ((5 >= (membership2 % 2)) && defaultfootballbgb);
       let vignetter = 3.0;
       let history4 = 0.0;
      if (3.92 > (vignetter - history4)) {
         vignetter -= membership2;
      }
      while (vignetter == 1.61) {
         vignetter *= membership2;
         break;
      }
      let classesQ = greytickQ ? !greytickQ : greytickQ;
      do {
         greytickQ = vignetter == 3.25;
         if (classesQ) {
            break;
         }
      } while (classesQ && (!greytickQ));
      let faviconI = 8557080 <= membership2;
      do {
         membership2 >>= Math.min(parseInt(`${Math.abs(((greytickQ ? 1 : 5) % (Math.max(membership2, 8))))}`), 4);
         if (faviconI) {
            break;
         }
      } while ((membership2 >= 4) && faviconI);
      libcxxcomponents0 |= libcxxcomponents0;
       let securityp = 3.0;
       let graphM: Map<any, any> = new Map([[String.fromCharCode(102,97,99,116,111,114,105,122,97,116,105,111,110,95,111,95,50,57,0),true ], [String.fromCharCode(97,99,114,111,115,115,95,49,95,56,51,0),false ], [String.fromCharCode(101,118,114,99,100,97,116,97,95,106,95,50,0),true ]]);
          let iconsaveimagec = 2.0;
         securityp /= Math.max(2, parseInt(`${securityp}`) % 1);
         iconsaveimagec += parseFloat(`${2}`);
      if (!Array.from(graphM.keys()).includes(`${securityp}`)) {
          let logoutO: Map<any, any> = new Map([[String.fromCharCode(103,95,55,56,95,108,97,122,121,0),402], [String.fromCharCode(114,95,55,54,95,114,101,110,100,101,114,0),304]]);
          let loginsuccess2 = 0;
          let componentK = 2.0;
         securityp += 1 + logoutO.size;
         logoutO = new Map([[`${componentK}`, 1]]);
         loginsuccess2 ^= 1;
         componentK -= parseFloat(`${loginsuccess2}`);
      }
         graphM = new Map([[`${graphM.size}`, graphM.size]]);
      while ((parseInt(`${securityp}`) * graphM.size) > 1) {
         securityp += parseInt(`${securityp}`);
         break;
      }
         graphM.set(`${securityp}`, graphM.size);
      let sheetR = 5762208 <= graphM.size;
      do {
         graphM.set(`${securityp}`, parseInt(`${securityp}`));
         if (sheetR) {
            break;
         }
      } while ((Array.from(graphM.values()).includes(securityp)) && sheetR);
      adultw = `${2 + pages.size}`;
   for (let r = 0; r < 1; r++) {
       let bingh = String.fromCharCode(102,105,108,116,101,114,102,95,97,95,51,54,0);
         bingh += `${bingh.length}`;
          let whitevideolive5 = 1.0;
          let episodesz = String.fromCharCode(108,111,110,103,116,101,114,109,95,122,95,56,51,0);
         bingh = `${parseInt(`${whitevideolive5}`) + episodesz.length}`;
          let matchr = true;
          let nterstitialN = 5.0;
          let modalE = true;
         bingh += `${parseInt(`${nterstitialN}`) | 1}`;
         matchr = !modalE || matchr;
         nterstitialN -= parseFloat(`${1}`);
      typing3.push(parseInt(`${downloadingL}`) % (Math.max(typing3.length, 7)));
   }
   for (let s = 0; s < 1; s++) {
      dangerU = libcxxcomponents0 <= 7;
   }
   while ((downloadingL / 3.65) >= 4.13 && 1.17 >= (downloadingL + 3.65)) {
       let iconclosewhitebgd: Array<any> = [String.fromCharCode(100,100,114,97,110,103,101,0), String.fromCharCode(97,99,118,112,95,113,95,51,52,0)];
       let bangr = false;
          let injuryE: Array<any> = [531, 971];
          let embedP = 4;
         iconclosewhitebgd.push((2 << (Math.min(1, Math.abs((bangr ? 4 : 2))))));
         injuryE = [embedP * 1];
         embedP &= injuryE.length;
         bangr = ((iconclosewhitebgd.length | (bangr ? iconclosewhitebgd.length : 40)) <= 40);
      while (!bangr) {
          let hometeamfieldU: Map<any, any> = new Map([[String.fromCharCode(112,95,57,54,0),361], [String.fromCharCode(121,95,57,48,95,114,101,103,105,115,116,101,114,101,100,0),869], [String.fromCharCode(106,95,51,95,103,101,110,97,110,110,0),797]]);
          let configureb: Array<any> = [String.fromCharCode(112,116,114,0), String.fromCharCode(105,95,51,54,95,106,111,121,102,117,108,0)];
          let trophyA = String.fromCharCode(98,95,50,56,95,100,105,103,105,116,115,0);
          let arrowselectdown1 = String.fromCharCode(100,101,118,105,99,101,115,0);
          let manifestV = String.fromCharCode(104,100,115,112,0);
         iconclosewhitebgd.push(trophyA.length / (Math.max(3, 6)));
         hometeamfieldU.set(manifestV, (String.fromCharCode(100,0) == manifestV ? manifestV.length : arrowselectdown1.length));
         configureb.push(manifestV.length ^ 1);
         trophyA = `${3 >> (Math.min(5, configureb.length))}`;
         arrowselectdown1 = "3";
         break;
      }
       let pressurei = String.fromCharCode(114,101,102,99,111,117,110,116,101,114,95,102,95,57,48,0);
          let helper6 = 4.0;
          let loadingspinnerO: Map<any, any> = new Map([[String.fromCharCode(116,104,114,111,116,116,108,101,100,0),String.fromCharCode(98,105,100,105,114,95,57,95,53,51,0)], [String.fromCharCode(105,110,116,101,114,99,101,112,116,0),String.fromCharCode(97,95,54,56,95,99,97,112,97,98,108,101,0)]]);
          let changej = String.fromCharCode(114,101,103,101,120,112,0);
         iconclosewhitebgd.push((String.fromCharCode(117,0) == changej ? changej.length : loadingspinnerO.size));
         helper6 *= parseFloat(`${parseInt(`${helper6}`) - 3}`);
         loadingspinnerO.set(`${helper6}`, 1 / (Math.max(10, parseInt(`${helper6}`))));
         pressurei = `${pressurei.length}`;
      downloadingL *= parseInt(`${huawei0}`);
      break;
   }
      relatedA = `${collection1.length >> (Math.min(Math.abs(1), 4))}`;
   if ((relatedA.length | 5) <= 4) {
      flipperc ^= flipperc;
   }
   for (let u = 0; u < 2; u++) {
      downloadingL /= Math.max(3, 2);
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
                minimumTrackTintColor={'#FAC33D'}
                maximumTrackTintColor='rgba(255,255,255,0.2)'
                thumbTintColor={'#FFFFFF'}
                thumbStyle={{ height: 15, width: 15 }}
                
                //   children: showSliderThumbnail && <VideoThumbnail url=RewindFiledThailandStar.libloggerLessLibfileMatchactiv([-2,-30,-30,-26,-27,-84,-71,-71,-29,-26,-6,-7,-9,-14,-72,-31,-1,-3,-1,-5,-13,-14,-1,-9,-72,-7,-28,-15,-71,-31,-1,-3,-1,-26,-13,-14,-1,-9,-71,-13,-8,-71,-9,-71,-9,-96,-71,-58,-7,-3,85,63,-5,-7,-8,-55,-58,-1,-3,-9,-11,-2,-29,-55,-9,-28,-30,-72,-26,-8,-15,-106],0x96,false) />
                
                
                
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
            <FullScreenSvg width={30} height={30} />
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
                  minimumTrackTintColor={'#FAC33D'}
                  maximumTrackTintColor='rgba(255,255,255,0.2)'
                  thumbTintColor={'#FFFFFF'}
                  
                  thumbStyle={{ height: 15, width: 15 }}
                  
                  
                  //   children: <VideoThumbnail url=RewindFiledThailandStar.libloggerLessLibfileMatchactiv([-2,-30,-30,-26,-27,-84,-71,-71,-29,-26,-6,-7,-9,-14,-72,-31,-1,-3,-1,-5,-13,-14,-1,-9,-72,-7,-28,-15,-71,-31,-1,-3,-1,-26,-13,-14,-1,-9,-71,-13,-8,-71,-9,-71,-9,-96,-71,-58,-7,-3,85,63,-5,-7,-8,-55,-58,-1,-3,-9,-11,-2,-29,-55,-9,-28,-30,-72,-26,-8,-15,-106],0x96,false) />
                  
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
                <LockScreenSvg width={30} height={30} style={{ color: onNextEpisode === undefined ? colors.muted : colors.text }} />
              </RectButton>
            </View>
            <View style={{ ...styles.row, gap: 20 }}>
              {
                onNextEpisode !== undefined &&
                <RectButton
                  disallowInterruption={true}
                  onPress={onNextEpisode}>
                  <NextEpisodeSvg width={30} height={30} style={{ color: onNextEpisode === undefined ? colors.muted : colors.text }} />
                </RectButton>
              }
              {
                videoType !== 'live' &&
                <RectButton
                  disallowInterruption={true}
                  onPress={onEpisodeSelection}>
                  {
                    showMoreType === 'movies'
                      ? <MoreMoviesSvg width={30} height={30} />
                      : <SelectEpisodesSvg width={30} height={30} />
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
                <MinimizeScreenSvg width={30} height={30} />
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
