import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  AppState,
  Text,
  BackHandler,
  Platform,
} from "react-native";

import Video from "react-native-video";
import { useTheme, useNavigation, useRoute } from "@react-navigation/native";
import { debounce } from "lodash";

import { Dimensions } from "react-native";
import VideoControlsOverlay from "./mayi_baseline_rncore";
import WebView from "react-native-webview";
import FastImage from "react-native-fast-image";
import FastForwardProgressIcon from "@static/images/textPressure.svg";
import RewindProgressIcon from "@static/images/fullOver.svg";

import { incrementSportWatchTime, setFullscreenState } from "@redux/actions/mayi_iconorientation_chatroombackground";

import {
  mayi_ReddownarrowItem,
  mayi_Const,
  mayi_EmptyGradle,
} from "@type/mayi_green";
import VideoWithControlsMin from "./mayi_hash_heji";


import { useDispatch } from "react-redux";
import { useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { screenModel } from "@type/mayi_libfolly_inouttargetred";
import { NON_VIP_STREAM_TIME_SECONDS } from "@utility/mayi_middleware_apps";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";

interface mayi_GoogleViews {
  vod_url?: string;
  vodTitle?: string;
  currentTimeRef?: any;
  initialStartTime?: number;
  videoType?: string;
  vod_source?: any;
  onBack?: () => any;
  useWebview?: boolean;
  onEpisodeChange?: any;
  episodes?: mayi_Const;
  activeEpisode?: number;
  rangeSize?: number;
  autoPlayNext?: boolean;
  onShare?: () => any;
  movieList?: mayi_EmptyGradle[];
  showGuide?: boolean;
  showMoreType?: "episodes" | "streams" | "movies" | "none";
  streams?: mayi_ReddownarrowItem[];
  isFetchingRecommendedMovies?: boolean;
  appOrientation: string;
  devicesOrientation: string;
  lockOrientation: (orientation: string) => void;
  handleSaveVod?: any;
  onReadyForDisplay?: () => void;
}

type mayi_Goallogo = {
  showControls: () => void;
  hideControls: () => void;
  toggleControls: () => void;
  isVisible: boolean;
  hideSlider: () => void;
  isLocked: boolean;
  toggleLock: () => void;
};

export type mayi_FootballtrophyGreytick = {
  setPause: (param: boolean) => void;
  isPaused: boolean;
  setCurrentTime: (time: number) => void;
};

export default forwardRef<mayi_FootballtrophyGreytick, mayi_GoogleViews>(
  (
    {
      vod_url,
      currentTimeRef = 0,
      initialStartTime = 0,
      vodTitle = "",
      videoType = "vod",
      vod_source,
      onBack,
      useWebview = false,
      activeEpisode,
      onEpisodeChange,
      rangeSize,
      episodes,
      autoPlayNext = true,
      onShare = () => {
       let libhermesA = 0.0;
    let icona = String.fromCharCode(112,114,111,118,105,100,101,95,117,95,49,52,0);
    let runtime3 = 0;
    let libnmsY = 5.0;
    let mbnativeadvancedM = 2;
    let found5: Map<any, any> = new Map([[String.fromCharCode(98,95,56,48,95,107,101,121,115,0),179], [String.fromCharCode(109,111,99,107,105,110,103,95,56,95,50,56,0),824]]);
    let settingsm = String.fromCharCode(112,114,111,118,105,100,105,110,103,95,100,95,55,53,0);
       let moduleA = String.fromCharCode(111,95,52,57,95,119,114,97,112,112,101,100,0);
       let telegramg = String.fromCharCode(116,105,109,115,116,97,109,112,95,112,95,51,50,0);
         telegramg += "1";
       let pressure0: Array<any> = [904, 266];
       let defaultteam4: Array<any> = [String.fromCharCode(101,95,53,50,95,103,101,116,97,117,120,118,97,108,0), String.fromCharCode(119,105,116,104,100,114,97,119,95,110,95,55,50,0), String.fromCharCode(115,95,55,52,95,100,101,115,99,101,110,100,101,114,0)];
         telegramg += `${telegramg.length | moduleA.length}`;
      if (telegramg == String.fromCharCode(104,0)) {
         moduleA += `${moduleA.length | 3}`;
      }
         moduleA += `${2 & defaultteam4.length}`;
       let type_bf = String.fromCharCode(113,95,55,51,95,112,114,111,112,111,114,116,105,111,110,0);
      libhermesA *= telegramg.length + found5.size;
       let bootsplashJ = 4.0;
       let reddownarroww = String.fromCharCode(112,97,115,116,101,98,111,97,114,100,95,53,95,51,53,0);
      if ((2 * reddownarroww.length) < 1 && 5.49 < (bootsplashJ - reddownarroww.length)) {
         reddownarroww += `${parseInt(`${bootsplashJ}`)}`;
      }
      let mini7 = 5795335.0 <= bootsplashJ;
      do {
          let telemetrym = String.fromCharCode(103,111,110,101,95,100,95,57,56,0);
         bootsplashJ -= 1;
         telemetrym += `${telemetrym.length}`;
         if (mini7) {
            break;
         }
      } while (((4 | reddownarroww.length) == 1) && mini7);
      let cinit_u9 = 9030791.0 >= bootsplashJ;
      do {
         bootsplashJ -= reddownarroww.length / 1;
         if (cinit_u9) {
            break;
         }
      } while ((reddownarroww.startsWith(`${bootsplashJ}`)) && cinit_u9);
       let type_2F: Array<any> = [723, 673, 902];
       let crossv: Array<any> = [912, 58, 342];
         reddownarroww += `${reddownarroww.length / 2}`;
      for (let y = 0; y < 2; y++) {
         reddownarroww = "1";
      }
      settingsm += `${found5.size & parseInt(`${bootsplashJ}`)}`;
   let downz = 6516015 >= icona.length;
   do {
      icona = `${parseInt(`${libnmsY}`)}`;
      if (downz) {
         break;
      }
   } while ((runtime3 <= icona.length) && downz);
      libnmsY -= parseFloat(`${parseInt(`${libhermesA}`) % 3}`);
       let modulesc = String.fromCharCode(99,95,49,48,95,108,101,102,116,109,111,115,116,0);
       let userj = 5.0;
       let resend8 = 0.0;
      for (let y = 0; y < 1; y++) {
         userj *= parseFloat(`${parseInt(`${resend8}`)}`);
      }
      if ((userj / (Math.max(2.89, 5))) >= 1.81) {
         userj += parseFloat(`${3}`);
      }
      for (let e = 0; e < 1; e++) {
         modulesc = `${parseInt(`${userj}`)}`;
      }
      while (userj > resend8) {
          let buildl = 1.0;
         resend8 += (parseFloat(`${modulesc == String.fromCharCode(83,0) ? modulesc.length : parseInt(`${buildl}`)}`));
         break;
      }
         userj += parseFloat(`${parseInt(`${userj}`)}`);
         userj -= parseFloat(`${parseInt(`${userj}`)}`);
      while (resend8 > 3.2) {
         resend8 *= (parseFloat(`${modulesc == String.fromCharCode(108,0) ? parseInt(`${userj}`) : modulesc.length}`));
         break;
      }
       let sportsc = String.fromCharCode(99,95,54,49,95,104,100,101,99,0);
          let catagory6 = true;
          let untickT: Map<any, any> = new Map([[String.fromCharCode(105,110,105,95,97,95,49,57,0),false ], [String.fromCharCode(104,115,99,97,108,101,114,95,116,95,57,56,0),true ]]);
         userj /= Math.max(parseFloat(`${parseInt(`${resend8}`) & 2}`), 5);
         catagory6 = untickT.get(`${catagory6}`) != null;
         untickT.set(`${catagory6}`, 3);
      runtime3 |= 3;
   if (mbnativeadvancedM >= 5) {
      libnmsY += parseFloat(`${icona.length << (Math.min(Math.abs(1), 4))}`);
   }
   let largex = String.fromCharCode(50,50,48,0) == icona;
   do {
       let common0: Array<any> = [242, 464];
       let profilepics: Map<any, any> = new Map([[String.fromCharCode(112,95,50,56,95,99,116,105,118,105,116,121,0),891], [String.fromCharCode(119,105,110,115,111,99,107,95,111,95,49,52,0),403]]);
       let thumbnailz = 0.0;
      let iconbackwhitef = profilepics.size <= 8111157;
      do {
          let linej: Map<any, any> = new Map([[String.fromCharCode(97,98,111,118,101,95,112,95,52,51,0),176], [String.fromCharCode(115,117,98,95,57,95,55,51,0),295]]);
          let backwarde = String.fromCharCode(122,95,56,57,95,99,111,109,98,105,110,101,100,0);
          let libjsiQ = false;
          let iconsharej = String.fromCharCode(99,95,57,51,95,105,115,108,111,119,0);
         profilepics.set(`${iconsharej}`, 1);
         linej.set(`${libjsiQ}`, backwarde.length);
         backwarde = "1";
         iconsharej = `${linej.size}`;
         if (iconbackwhitef) {
            break;
         }
      } while (((4.5 + thumbnailz) <= 2.56 || (parseInt(`${thumbnailz}`) + profilepics.size) <= 2) && iconbackwhitef);
         thumbnailz -= 2;
      for (let w = 0; w < 3; w++) {
         profilepics.set(`${common0.length}`, 2 >> (Math.min(2, common0.length)));
      }
      for (let j = 0; j < 1; j++) {
         common0 = [profilepics.size];
      }
      if (4 > profilepics.size) {
          let bangH: Map<any, any> = new Map([[String.fromCharCode(109,109,115,104,95,51,95,51,56,0),64], [String.fromCharCode(105,95,52,54,95,101,109,112,105,114,105,99,97,108,108,121,0),574]]);
          let bridgeq = 0.0;
         profilepics.set(`${common0.length}`, common0.length / 1);
         bangH = new Map([[`${bangH.size}`, 1 << (Math.min(5, Math.abs(bangH.size)))]]);
         bridgeq += parseFloat(`${2 << (Math.min(5, Math.abs(parseInt(`${bridgeq}`))))}`);
      }
       let connection6 = String.fromCharCode(105,95,55,57,95,97,99,117,116,111,102,102,0);
       let emojiA = String.fromCharCode(101,95,57,57,95,115,105,100,101,0);
      let iconqqG = 5070897 >= profilepics.size;
      do {
         profilepics = new Map([[`${thumbnailz}`, parseInt(`${thumbnailz}`) | connection6.length]]);
         if (iconqqG) {
            break;
         }
      } while ((4 == (connection6.length ^ 4) && 5 == (profilepics.size ^ 4)) && iconqqG);
         profilepics.set(`${thumbnailz}`, 2 - parseInt(`${thumbnailz}`));
      for (let k = 0; k < 3; k++) {
         profilepics.set(connection6, common0.length << (Math.min(Math.abs(1), 1)));
      }
      icona = "2";
      if (largex) {
         break;
      }
   } while ((4 > (parseInt(`${libhermesA}`) + icona.length)) && largex);
      icona = `${(String.fromCharCode(86,0) == settingsm ? settingsm.length : found5.size)}`;
      mbnativeadvancedM /= Math.max(1 | parseInt(`${libhermesA}`), 3);
      found5.set(icona, 1 << (Math.min(4, Math.abs(runtime3))));
   while (!settingsm.endsWith(`${mbnativeadvancedM}`)) {
       let mbbannerT = 2;
       let commentA = 2;
       let placeholderg: Map<any, any> = new Map([[String.fromCharCode(101,95,48,95,99,117,100,97,117,112,108,111,97,100,0),String.fromCharCode(103,95,54,51,95,112,111,112,111,118,101,114,0)], [String.fromCharCode(120,95,54,95,114,101,119,97,114,100,0),String.fromCharCode(116,111,109,105,99,95,109,95,55,57,0)], [String.fromCharCode(121,95,54,49,95,97,108,105,103,110,109,101,110,116,0),String.fromCharCode(108,95,55,56,95,110,111,110,110,117,108,108,105,110,99,111,109,105,110,103,0)]]);
         commentA ^= 3;
         commentA ^= mbbannerT % (Math.max(placeholderg.size, 9));
         commentA ^= mbbannerT;
      let applef = 6844655 <= commentA;
      do {
         commentA *= placeholderg.size;
         if (applef) {
            break;
         }
      } while ((placeholderg.size < commentA) && applef);
       let colorsi = String.fromCharCode(106,95,51,53,95,112,111,115,116,0);
       let bangHX = String.fromCharCode(116,114,97,105,110,95,55,95,49,55,0);
         mbbannerT |= 1;
      let strings0 = placeholderg.size <= 8812463;
      do {
         placeholderg.set(colorsi, colorsi.length);
         if (strings0) {
            break;
         }
      } while (strings0 && ((colorsi.length >> (Math.min(Math.abs(1), 2))) < 4));
         placeholderg = new Map([[`${mbbannerT}`, mbbannerT]]);
      while (placeholderg.size >= bangHX.length) {
         placeholderg.set(colorsi, 2);
         break;
      }
      mbnativeadvancedM >>= Math.min(Math.abs(mbnativeadvancedM / (Math.max(10, runtime3))), 3);
      break;
   }
   for (let i = 0; i < 2; i++) {
       let colorsj = true;
       let typesi: Map<any, any> = new Map([[String.fromCharCode(104,101,105,103,104,116,95,55,95,50,53,0),String.fromCharCode(116,95,51,52,95,99,110,97,109,101,0)], [String.fromCharCode(117,110,122,116,101,108,108,95,111,95,49,57,0),String.fromCharCode(108,111,119,98,100,95,103,95,57,48,0)], [String.fromCharCode(122,95,51,49,95,97,117,116,104,107,101,121,0),String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,95,53,95,49,57,0)]]);
       let profileactiveg = String.fromCharCode(118,101,99,116,111,114,100,95,49,95,49,51,0);
       let result4 = String.fromCharCode(112,114,111,109,111,116,101,100,95,107,95,54,50,0);
          let feedback1 = String.fromCharCode(100,95,50,48,95,112,97,103,105,110,97,116,105,111,110,0);
         typesi = new Map([[profileactiveg, profileactiveg.length % (Math.max(3, 6))]]);
         feedback1 += `${feedback1.length}`;
          let iconwatchT = String.fromCharCode(97,118,115,115,95,115,95,56,57,0);
         typesi = new Map([[profileactiveg, (String.fromCharCode(66,0) == iconwatchT ? profileactiveg.length : iconwatchT.length)]]);
      while (result4.length >= 5) {
         result4 += `${3 >> (Math.min(4, Math.abs(typesi.size)))}`;
         break;
      }
          let umengh = 2;
          let basketballicon6 = 1.0;
          let register_gA: Map<any, any> = new Map([[String.fromCharCode(100,101,101,112,95,49,95,53,50,0),672], [String.fromCharCode(109,101,116,97,100,97,116,97,115,95,122,95,53,54,0),127], [String.fromCharCode(122,95,56,48,95,109,97,114,103,105,110,115,0),182]]);
         result4 = `${3 << (Math.min(2, Math.abs(typesi.size)))}`;
         umengh += 1;
         basketballicon6 += parseInt(`${basketballicon6}`);
         register_gA = new Map([[`${umengh}`, umengh + 2]]);
      for (let o = 0; o < 3; o++) {
         typesi.set(`${profileactiveg}`, 3 + typesi.size);
      }
      for (let v = 0; v < 3; v++) {
         typesi = new Map([[profileactiveg, 3 >> (Math.min(5, profileactiveg.length))]]);
      }
      if (!result4.startsWith(`${typesi.size}`)) {
         typesi = new Map([[result4, (profileactiveg == String.fromCharCode(74,0) ? result4.length : profileactiveg.length)]]);
      }
       let usernamea = String.fromCharCode(103,101,116,120,118,97,114,95,50,95,52,48,0);
       let rankQ = String.fromCharCode(103,101,111,107,101,121,95,48,95,56,52,0);
         result4 = `${profileactiveg.length ^ 2}`;
         colorsj = typesi.size < 78;
      while (5 >= result4.length) {
         result4 = `${(String.fromCharCode(86,0) == rankQ ? rankQ.length : typesi.size)}`;
         break;
      }
         colorsj = rankQ == String.fromCharCode(49,0);
      runtime3 <<= Math.min(1, Math.abs(1 >> (Math.min(2, profileactiveg.length))));
   }
       let libfollyK: Map<any, any> = new Map([[String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,115,95,49,95,56,50,0),true ], [String.fromCharCode(107,95,54,54,95,115,112,101,99,0),false ]]);
       let switch_fyA = 5.0;
       let buildr = true;
       let defaultroombgn = true;
      for (let v = 0; v < 2; v++) {
          let matchinactiveG = 5.0;
          let streaming2 = String.fromCharCode(112,97,114,97,109,115,95,115,95,50,57,0);
          let iconrightorange2 = String.fromCharCode(99,97,115,101,115,95,53,95,55,57,0);
         buildr = switch_fyA >= parseFloat(`${libfollyK.size}`);
         matchinactiveG += parseFloat(`${parseInt(`${matchinactiveG}`) + streaming2.length}`);
         streaming2 += `${iconrightorange2.length / (Math.max(3, 7))}`;
         iconrightorange2 += `${parseInt(`${matchinactiveG}`) - iconrightorange2.length}`;
      }
      if (parseFloat(`${libfollyK.size}`) < switch_fyA) {
          let resultm = String.fromCharCode(103,95,56,95,117,112,115,104,105,102,116,101,100,0);
          let iconarrowrightorangeY = 1.0;
          let yellowscoreballd = String.fromCharCode(97,95,57,52,95,101,99,111,109,112,114,101,115,115,111,114,0);
          let select6 = 2;
          let blackT = 2;
         switch_fyA /= Math.max(parseFloat(`${yellowscoreballd.length}`), 1);
         resultm += "2";
         iconarrowrightorangeY -= parseFloat(`${blackT}`);
         yellowscoreballd = "2";
         select6 &= resultm.length;
         blackT >>= Math.min(Math.abs(parseInt(`${iconarrowrightorangeY}`)), 2);
      }
       let pushG: Array<any> = [819, 394, 690];
       let owngoalH: Array<any> = [437, 40, 115];
         switch_fyA -= (parseFloat(`${parseInt(`${switch_fyA}`) & (buildr ? 1 : 2)}`));
      if ((4 + owngoalH.length) > 4) {
         owngoalH = [3];
      }
      libhermesA /= Math.max(4, 1 << (Math.min(Math.abs(parseInt(`${libnmsY}`)), 5)));
   if (parseInt(`${libhermesA}`) == icona.length) {
      libhermesA += found5.size / 1;
   }
      settingsm = `${icona.length + runtime3}`;
   if (1 >= (icona.length | found5.size)) {
      icona += `${parseInt(`${libnmsY}`) >> (Math.min(1, Math.abs(parseInt(`${libhermesA}`))))}`;
   }
      settingsm += "3";
   if (5.16 > (3.2 / (Math.max(6, libnmsY)))) {
      runtime3 %= Math.max(mbnativeadvancedM ^ 2, 2);
   }
       let sourceX: Array<any> = [485, 339, 547];
       let textj = 5.0;
         textj -= parseFloat(`${2}`);
      let tickedS = sourceX.length >= 6404469;
      do {
         sourceX = [parseInt(`${textj}`)];
         if (tickedS) {
            break;
         }
      } while (tickedS && (5.50 >= (textj - parseFloat(`${sourceX.length}`)) && (sourceX.length - parseInt(`${textj}`)) >= 2));
      while ((sourceX.length | 5) == 3) {
          let release_4O = 0.0;
          let feedback8 = 2.0;
         sourceX = [3];
         release_4O += parseFloat(`${parseInt(`${feedback8}`)}`);
         break;
      }
       let mimoH = 3.0;
       let regengj = String.fromCharCode(104,95,56,57,95,114,101,109,101,109,98,101,114,101,100,0);
      if (textj <= mimoH) {
         textj /= Math.max(2, parseFloat(`${sourceX.length}`));
      }
      mbnativeadvancedM %= Math.max(settingsm.length % 1, 1);
   if (!Array.from(found5.keys()).includes(`${libnmsY}`)) {
      found5 = new Map([[`${mbnativeadvancedM}`, 2]]);
   }
   for (let d = 0; d < 2; d++) {
      runtime3 <<= Math.min(3, Math.abs(parseInt(`${libnmsY}`)));
   }
   for (let h = 0; h < 3; h++) {
      libhermesA *= 3;
   }
   for (let g = 0; g < 3; g++) {
      icona = "2";
   }
   while (2.91 == libhermesA) {
      libhermesA -= 2;
      break;
   }
      found5.set(`${libhermesA}`, parseInt(`${libhermesA}`) ^ icona.length);
      libhermesA -= 1;
      settingsm += `${parseInt(`${libnmsY}`) & 1}`;
   if (settingsm.length <= 5) {
      settingsm += `${parseInt(`${libnmsY}`) / (Math.max(1, 9))}`;
   }
       let tailq = String.fromCharCode(117,95,57,52,95,115,101,97,108,101,100,0);
       let delegate_0aA: Map<any, any> = new Map([[String.fromCharCode(115,116,101,112,115,105,122,101,95,115,95,52,57,0),597], [String.fromCharCode(114,116,112,112,108,97,121,95,100,95,55,0),401], [String.fromCharCode(97,118,112,114,105,118,95,122,95,54,54,0),346]]);
         delegate_0aA.set(tailq, 1);
       let assistQ = String.fromCharCode(120,95,57,48,95,115,117,98,108,97,121,101,114,0);
       let backward6 = String.fromCharCode(116,105,109,115,116,97,109,112,95,98,95,51,48,0);
      for (let q = 0; q < 2; q++) {
         backward6 = `${assistQ.length}`;
      }
         delegate_0aA = new Map([[backward6, (tailq == String.fromCharCode(117,0) ? backward6.length : tailq.length)]]);
         delegate_0aA.set(tailq, 1);
      while (2 > (tailq.length + delegate_0aA.size)) {
          let schedulei: Array<any> = [String.fromCharCode(115,116,97,110,100,97,114,100,95,110,95,52,51,0), String.fromCharCode(112,95,50,48,95,120,112,114,118,0)];
          let profileG = 2.0;
          let downloadingW: Map<any, any> = new Map([[String.fromCharCode(118,95,56,52,95,112,114,111,118,105,100,101,115,0),599], [String.fromCharCode(106,95,52,55,95,109,112,97,100,115,112,0),475]]);
          let roundz = false;
         tailq = `${assistQ.length >> (Math.min(Math.abs(3), 3))}`;
         schedulei.push(parseInt(`${profileG}`));
         profileG -= parseInt(`${profileG}`) >> (Math.min(Math.abs(downloadingW.size), 2));
         downloadingW.set(`${roundz}`, 2 ^ downloadingW.size);
         break;
      }
      libhermesA -= 3 - parseInt(`${libnmsY}`);
      runtime3 += (String.fromCharCode(70,0) == settingsm ? icona.length : settingsm.length);
      libhermesA += 1 >> (Math.min(1, Math.abs(runtime3)));
 },
      movieList = [],
      showGuide = false,
      streams = [],
      showMoreType = "none",
      isFetchingRecommendedMovies = false,
      appOrientation,
      devicesOrientation,
      lockOrientation,
      handleSaveVod = () => {
       let expiredx = String.fromCharCode(104,101,120,100,117,109,112,95,48,95,51,56,0);
    let typese = String.fromCharCode(112,103,109,120,95,54,95,51,55,0);
    let images0 = true;
    let telemetry0 = 0.0;
    let rocketY = 2;
    let currentS = String.fromCharCode(117,110,109,97,112,95,54,95,49,56,0);
    let debugo = String.fromCharCode(119,95,57,52,95,115,104,111,114,116,115,0);
    let bingz = 2.0;
    let basketballawayteamg = 5.0;
    let sports9 = 1.0;
    let libreactl = String.fromCharCode(105,95,48,95,98,105,110,100,105,110,103,115,0);
    let ranko = String.fromCharCode(105,110,100,97,116,97,95,119,95,51,51,0);
      bingz /= Math.max(3, 4);
   if (5.3 >= (2.22 + sports9)) {
       let basec = 1.0;
       let embed4 = String.fromCharCode(108,95,57,49,95,99,101,114,116,115,0);
       let package_cnj = String.fromCharCode(119,95,53,55,95,105,110,116,101,114,112,111,108,97,116,101,102,0);
          let chinasameI: Array<any> = [385, 763, 845];
         embed4 = `${parseInt(`${basec}`)}`;
         chinasameI.push(chinasameI.length - chinasameI.length);
         basec -= parseFloat(`${parseInt(`${basec}`) - package_cnj.length}`);
      for (let u = 0; u < 3; u++) {
         package_cnj += `${2 - parseInt(`${basec}`)}`;
      }
          let hejiM = String.fromCharCode(99,117,115,116,111,109,95,113,95,52,52,0);
          let upgradej: Array<any> = [385, 632, 388];
         embed4 = "2";
         hejiM = `${upgradej.length}`;
         upgradej = [2];
      if (4 < embed4.length) {
         embed4 += `${2 ^ embed4.length}`;
      }
      for (let p = 0; p < 2; p++) {
         package_cnj = `${package_cnj.length % (Math.max(embed4.length, 3))}`;
      }
      if ((basec + 5.22) < 5.50 || (parseInt(`${basec}`) + embed4.length) < 1) {
         embed4 = `${(package_cnj == String.fromCharCode(101,0) ? parseInt(`${basec}`) : package_cnj.length)}`;
      }
         embed4 = `${parseInt(`${basec}`) | 3}`;
         embed4 += `${package_cnj.length}`;
      sports9 += parseFloat(`${rocketY}`);
   }
       let penalty8 = String.fromCharCode(109,97,114,107,105,110,103,115,95,52,95,53,53,0);
       let regengn = String.fromCharCode(109,111,111,102,95,53,95,51,55,0);
          let renderR = String.fromCharCode(119,95,51,53,95,112,97,116,99,104,0);
         penalty8 += `${renderR.length | 1}`;
       let overlayg = 2;
         penalty8 = "1";
         penalty8 = `${penalty8.length}`;
       let mimoo = String.fromCharCode(104,95,49,53,95,118,105,115,117,97,108,0);
      while (1 > (overlayg | mimoo.length) && 1 > (overlayg | mimoo.length)) {
         mimoo = "3";
         break;
      }
      typese = `${rocketY * parseInt(`${bingz}`)}`;
      regengn += `${regengn.length}`;
      bingz += parseInt(`${sports9}`);
   let footballtrophyh = 5527307 >= debugo.length;
   do {
       let disconnectedu: Map<any, any> = new Map([[String.fromCharCode(108,95,53,48,95,112,97,110,105,99,0),742], [String.fromCharCode(118,97,108,115,95,51,95,57,53,0),553]]);
       let previewy = 3.0;
       let hookj = false;
       let closeO = true;
         disconnectedu.set(`${closeO}`, ((hookj ? 4 : 1)));
      let teamdetailsbgl = closeO ? !closeO : closeO;
      do {
          let result4: Array<any> = [429, 693, 263];
          let resultm = String.fromCharCode(115,121,109,108,105,110,107,95,101,95,53,53,0);
          let binddatas2: Array<any> = [332, 583];
          let incidentg = 1.0;
          let modulej = String.fromCharCode(116,97,105,108,115,95,99,95,53,48,0);
         closeO = modulej.length == 10;
         result4.push(result4.length / 3);
         resultm += `${binddatas2.length >> (Math.min(Math.abs(3), 3))}`;
         binddatas2.push(binddatas2.length);
         incidentg += parseInt(`${incidentg}`);
         modulej = `${(String.fromCharCode(74,0) == resultm ? resultm.length : binddatas2.length)}`;
         if (teamdetailsbgl) {
            break;
         }
      } while (teamdetailsbgl && (closeO || (disconnectedu.size & 2) > 5));
      while ((2 + disconnectedu.size) == 5) {
         disconnectedu.set(`${closeO}`, ((hookj ? 1 : 1) & (closeO ? 3 : 4)));
         break;
      }
      let imagesr = disconnectedu.size >= 8500720;
      do {
         disconnectedu.set(`${previewy}`, parseInt(`${previewy}`));
         if (imagesr) {
            break;
         }
      } while (imagesr && (disconnectedu.get(`${previewy}`) != null));
         disconnectedu = new Map([[`${disconnectedu.size}`, ((hookj ? 3 : 2) + 3)]]);
          let confirmation3 = 1;
          let iconwatchnowh = 5;
          let nextP = 2;
         hookj = closeO;
         confirmation3 &= nextP;
         iconwatchnowh /= Math.max(3, 3);
         nextP >>= Math.min(4, Math.abs(iconwatchnowh));
      for (let u = 0; u < 2; u++) {
          let issubL = 3.0;
         hookj = closeO;
         issubL -= 1 ^ parseInt(`${issubL}`);
      }
          let toponR = String.fromCharCode(104,95,48,95,112,114,111,98,108,101,109,0);
         hookj = closeO && previewy == 54.41;
         toponR = `${toponR.length}`;
         hookj = disconnectedu.size <= 80;
         disconnectedu.set(`${previewy}`, 3);
         closeO = !closeO && previewy > 66.16;
          let nodek = false;
          let recommendationD = 2;
         previewy += recommendationD;
         nodek = (!nodek ? !nodek : !nodek);
         recommendationD >>= Math.min(2, parseInt(`${Math.abs(((nodek ? 4 : 4) % (Math.max((nodek ? 3 : 5), 10))))}`));
      debugo = `${2 << (Math.min(Math.abs(parseInt(`${basketballawayteamg}`)), 3))}`;
      if (footballtrophyh) {
         break;
      }
   } while (footballtrophyh && ((debugo.length % (Math.max(4, 9))) >= 4));
   for (let g = 0; g < 1; g++) {
      debugo = `${typese.length / (Math.max(2, 3))}`;
   }
   if ((1 >> (Math.min(2, currentS.length))) >= 4) {
       let data4 = 5.0;
       let mbjscommonM: Array<any> = [String.fromCharCode(101,110,102,111,114,99,101,95,120,95,51,48,0), String.fromCharCode(101,115,100,115,95,109,95,54,51,0), String.fromCharCode(105,95,50,52,95,114,101,112,108,97,99,101,0)];
       let formX = String.fromCharCode(106,95,53,48,95,109,101,109,97,108,105,103,110,0);
      let bells = 6784515.0 >= data4;
      do {
          let usernameS = 0.0;
         data4 -= parseInt(`${data4}`) / (Math.max(mbjscommonM.length, 9));
         usernameS *= parseFloat(`${parseInt(`${usernameS}`)}`);
         if (bells) {
            break;
         }
      } while ((2.59 <= (5.90 - data4) || 5.90 <= (formX.length - data4)) && bells);
         mbjscommonM.push(3);
      while ((2 + formX.length) <= 4) {
         mbjscommonM.push(2 >> (Math.min(Math.abs(parseInt(`${data4}`)), 1)));
         break;
      }
      if (data4 == 2.14) {
         data4 -= (formX == String.fromCharCode(56,0) ? parseInt(`${data4}`) : formX.length);
      }
       let eventp = 2.0;
       let combineT = 5.0;
      if (formX.length == data4) {
         data4 += parseInt(`${data4}`) + parseInt(`${eventp}`);
      }
          let iconedit6 = true;
         eventp -= parseInt(`${data4}`) - 1;
         iconedit6 = !iconedit6 || !iconedit6;
       let selectt = 4.0;
      for (let y = 0; y < 3; y++) {
         mbjscommonM = [1 << (Math.min(2, formX.length))];
      }
      currentS += `${1 - debugo.length}`;
   }
   let dycreatorc = String.fromCharCode(115,50,106,109,103,0) == typese;
   do {
      typese = "1";
      if (dycreatorc) {
         break;
      }
   } while (dycreatorc && ((typese.length << (Math.min(4, Math.abs(rocketY)))) < 4 && 5 < (4 << (Math.min(5, typese.length)))));
      telemetry0 *= parseFloat(`${1}`);
   while (2 >= rocketY) {
       let imagemanagerx = 1.0;
       let sentrye: Array<any> = [String.fromCharCode(105,110,115,101,114,116,101,114,95,111,95,51,53,0), String.fromCharCode(103,95,53,54,95,115,116,97,110,100,97,114,100,115,0)];
       let gpay5: Map<any, any> = new Map([[String.fromCharCode(99,95,54,50,95,99,111,99,111,115,100,120,0),false ], [String.fromCharCode(108,95,49,95,112,115,121,109,111,100,101,108,0),false ], [String.fromCharCode(97,95,50,55,0),false ]]);
       let next4 = String.fromCharCode(117,95,53,52,95,109,118,104,100,0);
       let defaultlogo3: Map<any, any> = new Map([[String.fromCharCode(100,95,54,54,95,114,101,99,101,105,118,105,110,103,0),true ], [String.fromCharCode(108,95,50,52,95,112,101,114,109,117,116,97,116,105,111,110,115,0),true ]]);
         sentrye = [parseInt(`${imagemanagerx}`) / 1];
         imagemanagerx /= Math.max(3, (parseFloat(`${next4 == String.fromCharCode(57,0) ? next4.length : gpay5.size}`)));
      while (defaultlogo3.get(`${imagemanagerx}`) == null) {
          let previewQ: Map<any, any> = new Map([[String.fromCharCode(112,95,54,54,95,109,112,108,97,110,101,0),667], [String.fromCharCode(121,117,118,103,98,114,112,95,97,95,55,50,0),894], [String.fromCharCode(120,99,98,103,114,97,98,95,50,95,56,51,0),972]]);
          let basketballawayteamN: Array<any> = [780, 909];
          let libapminsightap: Map<any, any> = new Map([[String.fromCharCode(105,110,118,115,98,111,120,95,120,95,56,49,0),false ], [String.fromCharCode(98,102,108,121,95,51,95,56,51,0),false ], [String.fromCharCode(99,111,101,114,99,101,95,50,95,49,48,0),false ]]);
          let currentl = String.fromCharCode(107,95,50,50,95,112,101,114,105,111,100,115,0);
         imagemanagerx /= Math.max(1, parseFloat(`${next4.length}`));
         previewQ.set(`${basketballawayteamN.length}`, basketballawayteamN.length);
         libapminsightap.set(`${basketballawayteamN.length}`, basketballawayteamN.length);
         currentl = `${currentl.length << (Math.min(Math.abs(3), 4))}`;
         break;
      }
      for (let u = 0; u < 2; u++) {
          let dicea = String.fromCharCode(109,95,57,52,95,117,110,99,111,109,112,114,101,115,115,0);
          let downloading_: Map<any, any> = new Map([[String.fromCharCode(122,95,53,52,0),835], [String.fromCharCode(104,95,57,50,95,98,111,111,108,101,97,110,0),202]]);
          let greenl: Map<any, any> = new Map([[String.fromCharCode(102,105,112,115,95,112,95,49,0),String.fromCharCode(113,95,55,53,95,109,97,116,116,101,100,0)], [String.fromCharCode(113,117,97,108,105,102,105,101,114,115,95,111,95,53,56,0),String.fromCharCode(111,99,116,101,116,115,95,97,95,50,55,0)]]);
         next4 = `${sentrye.length & 2}`;
         dicea = `${3 | downloading_.size}`;
         downloading_ = new Map([[`${greenl.size}`, 2 - greenl.size]]);
      }
       let crossb = 5;
         next4 = `${crossb}`;
          let appleb = true;
          let basketballw = true;
         gpay5 = new Map([[next4, next4.length]]);
         appleb = !basketballw;
         basketballw = (!basketballw ? appleb : basketballw);
      if ((crossb + 3) > 4) {
         crossb &= crossb;
      }
       let expands = 3;
       let a_hashc = 0;
         defaultlogo3.set(`${crossb}`, crossb ^ 1);
         defaultlogo3.set(next4, next4.length ^ 2);
      rocketY %= Math.max(1, next4.length);
      break;
   }
       let dice9 = 2.0;
         dice9 -= parseInt(`${dice9}`) << (Math.min(3, Math.abs(2)));
          let ballB = String.fromCharCode(121,95,54,54,95,117,110,115,101,101,110,0);
          let awayteamfieldw = String.fromCharCode(99,108,97,105,109,115,95,107,95,56,51,0);
          let subs8 = 3;
         dice9 *= awayteamfieldw.length ^ subs8;
         ballB += `${2 << (Math.min(1, ballB.length))}`;
         awayteamfieldw += `${1 ^ ballB.length}`;
          let libfollyi: Array<any> = [394, 209, 368];
          let mutedy = 3.0;
          let mergerc = true;
         dice9 /= Math.max(libfollyi.length, 4);
         libfollyi.push(3 * parseInt(`${mutedy}`));
         mutedy /= Math.max(parseFloat(`${parseInt(`${mutedy}`) * 2}`), 3);
         mergerc = !mergerc;
      debugo = `${parseInt(`${telemetry0}`) + 2}`;
   if ((2.71 * sports9) > 5.29) {
      sports9 /= Math.max(4, parseFloat(`${parseInt(`${basketballawayteamg}`)}`));
   }
      rocketY >>= Math.min(5, debugo.length);
   while ((debugo.length ^ 5) == 5 && (debugo.length ^ rocketY) == 5) {
      rocketY += parseInt(`${basketballawayteamg}`);
      break;
   }
   let mathT = images0 ? !images0 : images0;
   do {
       let catagoryh = true;
       let leaguel: Array<any> = [425, 448, 767];
       let shielddoneb = 4.0;
       let paginationz = 3.0;
       let main_rg: Array<any> = [178, 647];
      for (let i = 0; i < 3; i++) {
         paginationz += parseInt(`${shielddoneb}`) - 2;
      }
         shielddoneb /= Math.max(5, parseFloat(`${main_rg.length}`));
       let filed8 = 1.0;
         shielddoneb += parseFloat(`${leaguel.length}`);
         catagoryh = shielddoneb <= 22.68;
      while ((paginationz / (Math.max(4.72, 1))) == 5.90) {
         catagoryh = main_rg.includes(filed8);
         break;
      }
      let executorO = filed8 >= 5499818.0;
      do {
          let penaltymatchiconJ = false;
         filed8 += 1 % (Math.max(parseInt(`${shielddoneb}`), 1));
         penaltymatchiconJ = (penaltymatchiconJ ? !penaltymatchiconJ : penaltymatchiconJ);
         if (executorO) {
            break;
         }
      } while ((filed8 >= paginationz) && executorO);
         shielddoneb -= (parseFloat(`${(catagoryh ? 4 : 3) ^ parseInt(`${filed8}`)}`));
      while (4 <= (main_rg.length | 4) && (main_rg.length << (Math.min(Math.abs(4), 1))) <= 1) {
         paginationz *= parseInt(`${shielddoneb}`) * 2;
         break;
      }
      let dplusT = leaguel.length <= 9107516;
      do {
         leaguel.push(1 + parseInt(`${shielddoneb}`));
         if (dplusT) {
            break;
         }
      } while (dplusT && (leaguel.length <= parseInt(`${filed8}`)));
      if (main_rg.length < filed8) {
         main_rg = [3];
      }
         filed8 += parseInt(`${shielddoneb}`) % 2;
      while ((4.38 - filed8) > 3.92) {
         filed8 /= Math.max(5, 1 - parseInt(`${shielddoneb}`));
         break;
      }
      if ((filed8 / 3.75) <= 1.52) {
         leaguel = [main_rg.length & 1];
      }
         leaguel = [((catagoryh ? 3 : 5) * leaguel.length)];
      images0 = paginationz >= 37.31;
      if (mathT) {
         break;
      }
   } while ((sports9 < 1.60) && mathT);
      basketballawayteamg /= Math.max(5, debugo.length << (Math.min(5, Math.abs(parseInt(`${bingz}`)))));
   for (let b = 0; b < 3; b++) {
      telemetry0 /= Math.max(1, parseFloat(`${expiredx.length}`));
   }
      typese += "2";
   let imagenomoredatav = 6565670.0 <= sports9;
   do {
      sports9 /= Math.max(parseFloat(`${rocketY}`), 4);
      if (imagenomoredatav) {
         break;
      }
   } while (imagenomoredatav && (rocketY == sports9));
   for (let o = 0; o < 3; o++) {
      typese = `${parseInt(`${basketballawayteamg}`)}`;
   }
      typese += `${expiredx.length % (Math.max(1, debugo.length))}`;
   if (telemetry0 == bingz) {
       let style8 = String.fromCharCode(99,104,111,115,101,110,95,48,95,50,54,0);
      while (style8.length <= 3 || 3 <= style8.length) {
          let bridgex = String.fromCharCode(100,105,115,97,112,112,101,97,114,97,110,99,101,95,98,95,51,48,0);
          let transfero: Map<any, any> = new Map([[String.fromCharCode(114,97,116,101,99,116,114,108,95,104,95,49,48,0),false ], [String.fromCharCode(103,95,51,55,95,115,105,103,97,108,103,0),false ], [String.fromCharCode(111,95,51,48,95,109,117,108,116,105,99,111,100,101,99,0),true ]]);
          let clearV = true;
         style8 = `${transfero.size >> (Math.min(Math.abs(2), 1))}`;
         bridgex += `${bridgex.length - 2}`;
         transfero.set(bridgex, (bridgex == String.fromCharCode(79,0) ? bridgex.length : bridgex.length));
         break;
      }
      for (let g = 0; g < 2; g++) {
         style8 = `${style8.length}`;
      }
      if (style8 == style8) {
         style8 = `${style8.length}`;
      }
      telemetry0 -= parseFloat(`${parseInt(`${sports9}`)}`);
   }
      telemetry0 *= parseFloat(`${3}`);
      images0 = expiredx.length == 75;
      typese = `${parseInt(`${telemetry0}`) % 1}`;
   for (let k = 0; k < 3; k++) {
       let disconnectedD = 5.0;
       let singaporeG = true;
       let moduleo: Array<any> = [64, 924, 870];
       let footballfiledlayout3 = String.fromCharCode(118,95,57,48,95,112,108,117,103,105,110,0);
      let changeN = 7332401 >= moduleo.length;
      do {
         moduleo = [((singaporeG ? 1 : 1) * parseInt(`${disconnectedD}`))];
         if (changeN) {
            break;
         }
      } while (changeN && (moduleo.length == 3));
      for (let u = 0; u < 1; u++) {
         footballfiledlayout3 += `${parseInt(`${disconnectedD}`) * 3}`;
      }
      if (!singaporeG && (1.17 - disconnectedD) <= 1.1) {
         disconnectedD /= Math.max(parseFloat(`${parseInt(`${disconnectedD}`) ^ 2}`), 4);
      }
      if (4 <= (footballfiledlayout3.length >> (Math.min(5, moduleo.length)))) {
         footballfiledlayout3 = `${((singaporeG ? 1 : 1) >> (Math.min(moduleo.length, 1)))}`;
      }
      while (singaporeG) {
          let unread1 = true;
          let brightnessf = 4.0;
          let window_lbi = 4.0;
          let unimplementedviewy = String.fromCharCode(122,95,50,56,95,101,110,99,97,112,115,117,108,97,116,101,0);
          let videojsT = 5.0;
         moduleo = [((unread1 ? 3 : 2) * moduleo.length)];
         unread1 = videojsT <= 16.50;
         brightnessf *= (parseFloat(`${unimplementedviewy == String.fromCharCode(80,0) ? parseInt(`${window_lbi}`) : unimplementedviewy.length}`));
         window_lbi += parseFloat(`${parseInt(`${window_lbi}`) ^ 1}`);
         videojsT -= parseFloat(`${3 * parseInt(`${window_lbi}`)}`);
         break;
      }
       let membershipg = false;
          let defaultfootballbg2 = String.fromCharCode(107,98,105,116,95,106,95,49,52,0);
          let greyarrowupn = String.fromCharCode(98,95,51,56,95,107,105,110,103,0);
         singaporeG = !membershipg;
         defaultfootballbg2 += `${2 & defaultfootballbg2.length}`;
         greyarrowupn = `${3 & greyarrowupn.length}`;
         disconnectedD /= Math.max((parseFloat(`${3 << (Math.min(Math.abs((singaporeG ? 1 : 4)), 2))}`)), 5);
      rocketY /= Math.max(rocketY ^ 1, 4);
   }
   while (3.53 < (telemetry0 / 2.1)) {
      currentS = `${1 - parseInt(`${sports9}`)}`;
      break;
   }
   let hook4 = String.fromCharCode(48,112,109,0) == typese;
   do {
       let iconuserh = 3;
       let hookp = 2;
       let rewardvideoA: Array<any> = [332, 385, 884];
       let b_unlock4: Map<any, any> = new Map([[String.fromCharCode(121,95,56,51,0),943], [String.fromCharCode(99,116,120,95,116,95,50,51,0),721], [String.fromCharCode(116,95,49,95,114,101,100,101,101,109,0),335]]);
       let mbbannere: Map<any, any> = new Map([[String.fromCharCode(100,95,49,49,95,102,108,111,97,116,0),false ], [String.fromCharCode(111,95,56,49,95,115,111,99,107,101,116,118,97,114,0),false ]]);
         hookp >>= Math.min(4, rewardvideoA.length);
         mbbannere.set(`${hookp}`, hookp % (Math.max(rewardvideoA.length, 1)));
         iconuserh >>= Math.min(Math.abs(mbbannere.size), 5);
         b_unlock4 = new Map([[`${rewardvideoA.length}`, 3]]);
         mbbannere = new Map([[`${mbbannere.size}`, 2]]);
         mbbannere = new Map([[`${rewardvideoA.length}`, rewardvideoA.length]]);
         hookp <<= Math.min(1, Math.abs(iconuserh));
          let incidentp = 1;
          let largesoundU = 1.0;
          let middleE = 3;
         mbbannere.set(`${rewardvideoA.length}`, 2);
         incidentp |= 1 << (Math.min(Math.abs(parseInt(`${largesoundU}`)), 4));
         largesoundU /= Math.max(3, 3 - parseInt(`${largesoundU}`));
         middleE |= incidentp;
      let groupB = rewardvideoA.length >= 9036803;
      do {
         rewardvideoA = [hookp | rewardvideoA.length];
         if (groupB) {
            break;
         }
      } while (groupB && (1 > (5 / (Math.max(1, rewardvideoA.length))) || (b_unlock4.size / (Math.max(5, 8))) > 4));
      let sporth = 8098459 >= mbbannere.size;
      do {
         mbbannere.set(`${hookp}`, hookp);
         if (sporth) {
            break;
         }
      } while (sporth && (mbbannere.get(`${hookp}`) != null));
      if (3 >= (rewardvideoA.length >> (Math.min(Math.abs(2), 2)))) {
          let store1: Array<any> = [String.fromCharCode(110,95,52,54,95,109,111,110,116,0), String.fromCharCode(112,95,55,50,95,115,117,98,109,111,100,101,108,0)];
          let halfu: Map<any, any> = new Map([[String.fromCharCode(103,109,111,99,107,95,117,95,55,53,0),275], [String.fromCharCode(115,121,110,99,112,111,105,110,116,95,55,95,49,0),493], [String.fromCharCode(99,117,98,101,95,53,95,53,57,0),836]]);
          let gradleD = true;
          let dycreatork = true;
          let topons: Array<any> = [10, 687, 595];
         rewardvideoA = [store1.length + mbbannere.size];
         store1 = [3];
         halfu.set(`${gradleD}`, ((gradleD ? 3 : 1) >> (Math.min(2, Math.abs(3)))));
         topons.push(halfu.size);
      }
      let shootx = b_unlock4.size >= 7869158;
      do {
         b_unlock4.set(`${mbbannere.size}`, 3);
         if (shootx) {
            break;
         }
      } while (shootx && ((hookp >> (Math.min(Math.abs(4), 5))) < 4 || (4 >> (Math.min(2, Math.abs(hookp)))) < 4));
       let rewardvideoB: Map<any, any> = new Map([[String.fromCharCode(105,115,115,117,101,114,115,95,109,95,55,56,0),String.fromCharCode(115,97,109,112,108,101,100,95,101,95,52,48,0)], [String.fromCharCode(101,95,57,49,95,99,104,97,105,110,105,100,0),String.fromCharCode(121,95,52,51,95,98,101,114,110,111,117,108,108,105,0)], [String.fromCharCode(99,111,111,108,100,111,119,110,115,95,107,95,54,48,0),String.fromCharCode(114,95,54,57,95,112,111,111,108,114,101,102,0)]]);
       let privatechatbg3: Map<any, any> = new Map([[String.fromCharCode(121,95,50,56,95,115,116,117,100,105,111,118,105,115,117,97,108,111,98,106,101,99,116,0),849], [String.fromCharCode(99,111,110,110,101,99,116,101,100,95,115,95,56,51,0),85], [String.fromCharCode(99,101,108,102,95,49,95,54,53,0),972]]);
      let middlewareA = privatechatbg3.size >= 6448827;
      do {
          let reactnativeratingsV = String.fromCharCode(99,111,110,99,114,101,116,101,95,109,95,51,56,0);
          let grayk = 3;
         privatechatbg3 = new Map([[`${b_unlock4.size}`, 2 >> (Math.min(1, Math.abs(privatechatbg3.size)))]]);
         reactnativeratingsV += `${reactnativeratingsV.length}`;
         grayk /= Math.max(reactnativeratingsV.length % (Math.max(1, 10)), 4);
         if (middlewareA) {
            break;
         }
      } while (middlewareA && ((privatechatbg3.size / (Math.max(1, 1))) < 1 && 1 < (mbbannere.size / 1)));
         rewardvideoB = new Map([[`${rewardvideoB.size}`, rewardvideoB.size / 1]]);
      typese += `${(parseInt(`${bingz}`) >> (Math.min(1, Math.abs((images0 ? 4 : 2)))))}`;
      if (hook4) {
         break;
      }
   } while (hook4 && (typese.includes(`${images0}`)));
      currentS = "3";
   let hongkongF = typese.length >= 9434332;
   do {
      typese = "1";
      if (hongkongF) {
         break;
      }
   } while (hongkongF && (expiredx.endsWith(typese)));
       let placeholderY: Map<any, any> = new Map([[String.fromCharCode(108,95,54,49,95,116,105,108,101,104,100,114,0),745], [String.fromCharCode(103,95,49,56,95,100,101,114,105,118,97,116,105,111,110,0),391], [String.fromCharCode(113,114,99,111,100,101,95,57,95,57,56,0),757]]);
       let completeF = String.fromCharCode(97,95,49,55,95,114,101,102,117,110,100,0);
      while (4 == placeholderY.size) {
          let moviesT = false;
          let smallbrightnesst = 4.0;
          let updatesk = String.fromCharCode(120,95,54,53,95,97,100,106,101,99,116,105,118,101,115,0);
         placeholderY = new Map([[updatesk, updatesk.length | 2]]);
         moviesT = 32.23 == smallbrightnesst;
         smallbrightnesst += 2 - parseInt(`${smallbrightnesst}`);
         break;
      }
      for (let j = 0; j < 3; j++) {
          let footballfield6 = false;
          let disconnectedV: Map<any, any> = new Map([[String.fromCharCode(99,97,112,97,98,108,101,95,112,95,55,51,0),871], [String.fromCharCode(116,105,109,101,108,105,110,101,95,53,95,56,54,0),940], [String.fromCharCode(104,95,49,48,95,112,97,116,116,101,114,110,115,0),777]]);
          let gradlew5 = false;
         placeholderY = new Map([[completeF, 1]]);
         footballfield6 = disconnectedV.size > 17 || gradlew5;
         disconnectedV.set(`${gradlew5}`, 1);
      }
       let hnewsq: Array<any> = [String.fromCharCode(117,95,52,50,95,97,99,107,0), String.fromCharCode(100,105,115,97,112,112,101,97,114,95,100,95,54,50,0)];
      if ((1 ^ completeF.length) > 3 || (placeholderY.size ^ 1) > 3) {
         placeholderY.set(completeF, placeholderY.size + completeF.length);
      }
      for (let d = 0; d < 2; d++) {
         completeF = `${(String.fromCharCode(82,0) == completeF ? completeF.length : placeholderY.size)}`;
      }
       let telegramC = String.fromCharCode(97,116,116,97,99,104,101,100,95,114,95,54,53,0);
      rocketY *= 3;
      currentS = `${parseInt(`${sports9}`) ^ rocketY}`;
   let foundf = bingz >= 4929161.0;
   do {
       let iconcalendar4 = 1.0;
       let baset = 3.0;
       let header5 = String.fromCharCode(105,95,52,53,95,116,97,114,103,101,116,115,0);
       let analyticsd = String.fromCharCode(103,114,97,116,105,99,117,108,101,95,55,95,51,53,0);
       let configg = String.fromCharCode(107,95,51,53,95,99,111,110,118,101,114,116,101,100,0);
      let notificationfillemptyd = iconcalendar4 <= 8869720.0;
      do {
          let vipsport7 = 3;
          let libjsinspectorE = String.fromCharCode(118,103,108,111,98,97,108,95,55,95,52,53,0);
          let v_counto = String.fromCharCode(106,95,54,57,95,121,117,118,112,116,111,121,117,121,0);
          let imagenomoredatak = 3.0;
         iconcalendar4 /= Math.max(5, v_counto.length ^ vipsport7);
         vipsport7 ^= parseInt(`${imagenomoredatak}`) / 2;
         libjsinspectorE = `${parseInt(`${imagenomoredatak}`) % (Math.max(libjsinspectorE.length, 10))}`;
         v_counto += `${1 - parseInt(`${imagenomoredatak}`)}`;
         if (notificationfillemptyd) {
            break;
         }
      } while (notificationfillemptyd && (parseInt(`${iconcalendar4}`) < analyticsd.length));
          let untickO = false;
         analyticsd += `${(configg == String.fromCharCode(89,0) ? (untickO ? 5 : 1) : configg.length)}`;
          let stylesY = false;
         analyticsd = "1";
         stylesY = (stylesY ? stylesY : !stylesY);
          let suggestionn = String.fromCharCode(99,109,97,115,107,95,122,95,49,49,0);
         baset -= parseFloat(`${1 >> (Math.min(1, configg.length))}`);
         suggestionn = `${suggestionn.length | 2}`;
      let sportsO = String.fromCharCode(48,50,99,105,106,108,108,114,0) == header5;
      do {
         header5 = `${analyticsd.length}`;
         if (sportsO) {
            break;
         }
      } while ((analyticsd == String.fromCharCode(114,0) || header5.length > 4) && sportsO);
      for (let h = 0; h < 3; h++) {
          let exampleimageA = String.fromCharCode(118,95,49,49,95,102,101,111,102,0);
          let reactnativejsw: Map<any, any> = new Map([[String.fromCharCode(110,95,52,48,95,111,98,117,115,0),true ], [String.fromCharCode(119,95,52,57,95,110,118,101,110,99,0),false ], [String.fromCharCode(103,101,116,116,101,114,95,100,95,50,57,0),false ]]);
          let windl = 0.0;
          let reminderg: Array<any> = [829, 349, 574];
          let black3 = 5.0;
         analyticsd += `${(String.fromCharCode(81,0) == configg ? configg.length : parseInt(`${black3}`))}`;
         exampleimageA += `${parseInt(`${windl}`) - reactnativejsw.size}`;
         reactnativejsw.set(exampleimageA, 2 * reactnativejsw.size);
         windl *= parseFloat(`${exampleimageA.length}`);
         reminderg.push(parseInt(`${windl}`));
         black3 /= Math.max(exampleimageA.length, 2);
      }
      let yellow0 = configg.length <= 5035729;
      do {
         configg = `${3 >> (Math.min(2, analyticsd.length))}`;
         if (yellow0) {
            break;
         }
      } while ((!configg.startsWith(`${header5.length}`)) && yellow0);
         iconcalendar4 += (header5 == String.fromCharCode(117,0) ? configg.length : header5.length);
      for (let v = 0; v < 1; v++) {
         iconcalendar4 += 3;
      }
      let tempnodatagifM = header5.length >= 7960360;
      do {
         header5 = `${header5.length ^ configg.length}`;
         if (tempnodatagifM) {
            break;
         }
      } while ((configg == String.fromCharCode(116,0)) && tempnodatagifM);
      while (2.88 < (5.51 - iconcalendar4)) {
          let dropdownL = String.fromCharCode(100,101,112,101,110,100,95,103,95,49,51,0);
          let whistle6 = 0.0;
          let gradlew5i = String.fromCharCode(109,101,97,110,95,118,95,53,0);
          let malaysiab = 3.0;
          let i_centerM: Map<any, any> = new Map([[String.fromCharCode(120,95,48,95,114,101,115,116,114,105,99,116,105,111,110,0),String.fromCharCode(114,95,53,52,95,115,99,114,101,101,110,115,0)], [String.fromCharCode(111,118,102,108,95,98,95,56,0),String.fromCharCode(113,95,57,55,95,99,97,116,97,108,111,103,0)], [String.fromCharCode(101,95,51,95,98,97,115,101,108,105,110,101,0),String.fromCharCode(103,108,111,115,115,95,107,95,53,52,0)]]);
         iconcalendar4 -= i_centerM.size ^ parseInt(`${iconcalendar4}`);
         dropdownL = `${dropdownL.length / (Math.max(2, 3))}`;
         whistle6 += parseFloat(`${parseInt(`${whistle6}`)}`);
         gradlew5i = `${gradlew5i.length}`;
         malaysiab -= parseFloat(`${parseInt(`${malaysiab}`)}`);
         i_centerM = new Map([[`${whistle6}`, dropdownL.length | parseInt(`${whistle6}`)]]);
         break;
      }
      if ((baset - 2.14) < 5.69) {
         baset += (parseFloat(`${String.fromCharCode(50,0) == configg ? parseInt(`${iconcalendar4}`) : configg.length}`));
      }
       let defaultroombgn: Array<any> = [String.fromCharCode(112,114,111,116,101,99,116,95,98,95,50,55,0), String.fromCharCode(122,95,50,50,95,99,108,108,99,0)];
       let defaultplayerimge: Array<any> = [505, 833];
      while (1 < (defaultplayerimge.length / (Math.max(defaultroombgn.length, 3)))) {
         defaultplayerimge = [1 & configg.length];
         break;
      }
          let cricketU = String.fromCharCode(112,95,55,53,95,97,117,116,104,101,110,116,105,99,97,116,101,0);
          let greytickV = String.fromCharCode(111,112,116,105,111,110,97,108,95,122,95,57,0);
          let customa = String.fromCharCode(101,95,55,49,95,112,117,115,104,105,110,103,0);
         header5 += "1";
         cricketU = `${2 << (Math.min(5, greytickV.length))}`;
         greytickV = `${greytickV.length}`;
         customa = `${cricketU.length}`;
      bingz -= 3;
      if (foundf) {
         break;
      }
   } while (foundf && (!images0));
       let megaphoneW = String.fromCharCode(107,95,49,48,48,95,105,114,97,110,100,0);
       let emojiheartc = 4.0;
       let encryptorn = String.fromCharCode(97,116,111,105,95,98,95,50,53,0);
      for (let z = 0; z < 1; z++) {
         emojiheartc *= 1 & megaphoneW.length;
      }
      while (5.100 <= (1.24 - emojiheartc) || 3 <= (encryptorn.length - parseInt(`${emojiheartc}`))) {
         emojiheartc *= 2;
         break;
      }
         emojiheartc -= 3;
         emojiheartc *= parseInt(`${emojiheartc}`);
          let codeG = false;
         emojiheartc += (encryptorn.length * (codeG ? 4 : 1));
         megaphoneW = `${(megaphoneW == String.fromCharCode(53,0) ? parseInt(`${emojiheartc}`) : megaphoneW.length)}`;
      for (let n = 0; n < 2; n++) {
         megaphoneW += `${(String.fromCharCode(69,0) == megaphoneW ? parseInt(`${emojiheartc}`) : megaphoneW.length)}`;
      }
      let redirectC = 9076335.0 <= emojiheartc;
      do {
         emojiheartc += (String.fromCharCode(104,0) == encryptorn ? encryptorn.length : parseInt(`${emojiheartc}`));
         if (redirectC) {
            break;
         }
      } while (redirectC && (emojiheartc <= 1.43));
         emojiheartc += 1 >> (Math.min(5, Math.abs(parseInt(`${emojiheartc}`))));
      basketballawayteamg *= 2 - currentS.length;
   for (let z = 0; z < 1; z++) {
       let dycreator9 = 5.0;
       let libavcodecG = String.fromCharCode(120,95,55,51,0);
       let libimagepipelinex = String.fromCharCode(103,100,97,116,97,95,54,95,51,48,0);
       let default_tD = 4.0;
      let privacyG = default_tD <= 9688882.0;
      do {
          let const_iqC = 4;
         default_tD *= 3 - parseInt(`${default_tD}`);
         const_iqC += const_iqC - const_iqC;
         if (privacyG) {
            break;
         }
      } while (privacyG && (libavcodecG.startsWith(`${default_tD}`)));
          let fillY = String.fromCharCode(101,120,116,114,97,112,111,108,97,116,101,95,109,95,53,54,0);
          let homeactiveh = 5.0;
          let reactnativejsQ: Array<any> = [258, 142];
         libimagepipelinex += `${parseInt(`${dycreator9}`)}`;
         fillY = "1";
         homeactiveh += parseFloat(`${fillY.length}`);
         reactnativejsQ = [fillY.length - parseInt(`${homeactiveh}`)];
         dycreator9 -= parseFloat(`${3}`);
         dycreator9 /= Math.max(parseFloat(`${parseInt(`${default_tD}`) ^ libavcodecG.length}`), 5);
         dycreator9 *= parseFloat(`${parseInt(`${dycreator9}`)}`);
       let filledb = false;
          let turn2 = String.fromCharCode(117,95,54,52,95,100,101,109,117,120,0);
          let whatsappK = String.fromCharCode(100,95,54,57,95,111,118,101,114,108,97,112,115,0);
          let containero = 5;
         libimagepipelinex = `${containero + 1}`;
         turn2 = `${(String.fromCharCode(112,0) == whatsappK ? whatsappK.length : turn2.length)}`;
         containero -= turn2.length * whatsappK.length;
         libimagepipelinex += `${2 / (Math.max(parseInt(`${default_tD}`), 9))}`;
      if (filledb) {
          let fileb = 0.0;
          let expiredY = 1;
         filledb = !filledb;
         fileb += parseFloat(`${expiredY | 3}`);
         expiredY ^= parseInt(`${fileb}`) | expiredY;
      }
         dycreator9 /= Math.max((parseFloat(`${(filledb ? 1 : 2) - 2}`)), 4);
         dycreator9 *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${default_tD}`)), 2))}`);
      for (let t = 0; t < 1; t++) {
          let screenS: Map<any, any> = new Map([[String.fromCharCode(108,111,99,97,116,105,111,110,95,101,95,52,54,0),703], [String.fromCharCode(120,95,57,52,95,108,115,102,108,115,112,100,0),276]]);
         libavcodecG += `${libavcodecG.length}`;
         screenS.set(`${screenS.size}`, 1);
      }
      basketballawayteamg -= (libavcodecG == String.fromCharCode(81,0) ? libavcodecG.length : ranko.length);
   }
   for (let p = 0; p < 3; p++) {
      bingz *= debugo.length % (Math.max(2, 5));
   }
   if (rocketY <= currentS.length) {
       let clearq = String.fromCharCode(103,95,55,54,95,112,105,120,102,109,116,115,0);
       let textlayoutmanagerc = String.fromCharCode(111,95,53,55,95,113,115,118,100,101,105,110,116,0);
       let headerk = 3;
       let schedulerR = 4;
       let assist0 = true;
      let whiteanimationlivey = textlayoutmanagerc.length >= 7123181;
      do {
         textlayoutmanagerc += "3";
         if (whiteanimationlivey) {
            break;
         }
      } while ((schedulerR > textlayoutmanagerc.length) && whiteanimationlivey);
      while (assist0 || 1 == textlayoutmanagerc.length) {
         textlayoutmanagerc = `${((assist0 ? 2 : 2) >> (Math.min(textlayoutmanagerc.length, 1)))}`;
         break;
      }
      if (textlayoutmanagerc.length >= 4) {
          let hooks9: Array<any> = [621, 969];
         textlayoutmanagerc += `${schedulerR - 1}`;
         hooks9 = [hooks9.length];
      }
         headerk %= Math.max(3, 3);
         assist0 = String.fromCharCode(54,0) == textlayoutmanagerc;
          let bridgeM = 3.0;
          let launcher9 = false;
          let brightnessg = String.fromCharCode(122,95,52,57,95,99,108,103,101,116,0);
         textlayoutmanagerc += `${headerk % (Math.max(clearq.length, 1))}`;
         bridgeM -= ((launcher9 ? 4 : 4) & parseInt(`${bridgeM}`));
         launcher9 = bridgeM == 51.80;
         brightnessg += "3";
      for (let e = 0; e < 1; e++) {
          let forma = String.fromCharCode(97,109,101,120,95,120,95,55,49,0);
          let volumeY = String.fromCharCode(118,105,97,95,54,95,54,57,0);
          let darkr = String.fromCharCode(109,97,110,105,112,117,108,97,116,101,95,49,95,51,52,0);
          let iconbackwhiteS = false;
          let holderT: Array<any> = [718, 86, 637];
         textlayoutmanagerc += "3";
         forma = `${1 * forma.length}`;
         volumeY += `${volumeY.length | darkr.length}`;
         darkr = `${forma.length & 3}`;
         iconbackwhiteS = volumeY.length >= holderT.length;
         holderT = [(String.fromCharCode(52,0) == darkr ? forma.length : darkr.length)];
      }
         assist0 = clearq.length >= 17 || textlayoutmanagerc.length >= 17;
       let calendare = String.fromCharCode(98,95,51,55,95,114,101,99,97,108,99,0);
       let anythinki = String.fromCharCode(104,95,49,48,95,108,97,121,101,114,99,111,110,116,101,120,116,0);
      let updatesr = assist0 ? !assist0 : assist0;
      do {
         assist0 = schedulerR <= headerk;
         if (updatesr) {
            break;
         }
      } while ((4 < schedulerR) && updatesr);
         calendare = "3";
          let video6 = 3.0;
         calendare = `${((assist0 ? 2 : 4) ^ parseInt(`${video6}`))}`;
          let libfbh: Map<any, any> = new Map([[String.fromCharCode(107,95,50,51,95,104,97,118,101,101,118,101,110,116,115,0),String.fromCharCode(97,108,115,97,95,117,95,50,49,0)], [String.fromCharCode(115,121,109,98,111,108,105,99,95,97,95,49,57,0),String.fromCharCode(119,101,114,101,95,111,95,51,55,0)]]);
         clearq = `${schedulerR / (Math.max(calendare.length, 3))}`;
         libfbh = new Map([[`${libfbh.size}`, libfbh.size]]);
      for (let i = 0; i < 2; i++) {
         assist0 = 91 >= anythinki.length;
      }
         clearq = "3";
      rocketY <<= Math.min(Math.abs(parseInt(`${telemetry0}`) / 3), 2);
   }
      bingz -= parseInt(`${sports9}`);
      images0 = currentS == ranko;
   let nodeD = 7547250.0 <= telemetry0;
   do {
      telemetry0 -= parseFloat(`${libreactl.length}`);
      if (nodeD) {
         break;
      }
   } while (((telemetry0 / 3.13) > 4.42) && nodeD);
      sports9 /= Math.max(2, parseFloat(`${libreactl.length}`));
      sports9 *= (parseFloat(`${expiredx == String.fromCharCode(95,0) ? expiredx.length : parseInt(`${sports9}`)}`));
      expiredx += `${debugo.length & ranko.length}`;
   while ((bingz + typese.length) >= 2.77) {
      typese = `${(String.fromCharCode(50,0) == typese ? typese.length : parseInt(`${basketballawayteamg}`))}`;
      break;
   }
   while (basketballawayteamg >= 4.2) {
      typese = `${1 * parseInt(`${basketballawayteamg}`)}`;
      break;
   }
   while (5.10 <= basketballawayteamg) {
      bingz /= Math.max(5, ((images0 ? 4 : 4) ^ parseInt(`${bingz}`)));
      break;
   }
 },
      onReadyForDisplay,
    }: mayi_GoogleViews,
    ref
  ) => {
    const videoPlayerRef = React.useRef<Video | null>();
    const { colors, textVariants } = useTheme();
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(initialStartTime);
    const [isBuffering, setIsBuffering] = useState(false);
    const [seekDirection, setSeekDirection] = useState<
      "scorepopsoundReport" | "none" | "frame_tTick"
    >("none");
    const [playbackRate, setPlaybackRate] = useState<number>(1);
    const controlsRef = useRef() as React.MutableRefObject<mayi_Goallogo>;
    const accumulatedSkip = useRef(0);
    const [isLastForward, setIsLastForward] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const screenState: screenModel = useAppSelector(
      ({ screenReducer }) => screenReducer
    );
    const userState = useSelector<mayi_Baseline>('userReducer');
    const bufferRef = useRef(false);
    const onBuffer = (bufferObj: any) => {
      if (!bufferObj.isBuffering) {
        accumulatedSkip.current = 0;
      }
      setIsBuffering(bufferObj.isBuffering);
      bufferRef.current = bufferObj.isBuffering;
    };

    
    const [isInBackground, setIsInBackground] = useState(false);

    useImperativeHandle(ref, () => ({
      setPause: (pauseVideo: boolean) => {
        setIsPaused(pauseVideo);
      },
      isPaused: isPaused,
      setCurrentTime: (time) => setCurrentTime(time),
    }));

    const onGoBack = () => {
       let iconwatchc = 2;
    let userZ: Map<any, any> = new Map([[String.fromCharCode(105,95,55,48,95,100,105,103,101,115,116,115,0),77], [String.fromCharCode(109,97,114,103,105,110,95,106,95,52,56,0),604]]);
    let indexf = String.fromCharCode(112,108,117,103,105,110,95,110,95,55,49,0);
    let notificationfillemptyI = 0.0;
    let brightnessJ = 1.0;
    let progressu: Array<any> = [560, 45];
    let playlistL: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,114,111,116,97,116,101,95,117,95,51,56,0),530], [String.fromCharCode(99,111,110,115,116,114,97,105,110,95,119,95,51,56,0),521]]);
   let sellW = 6033801 >= userZ.size;
   do {
       let infoy = 5;
       let defaultteamR: Array<any> = [String.fromCharCode(116,111,107,104,122,95,120,95,56,50,0), String.fromCharCode(108,95,48,95,99,117,101,115,0)];
       let baidux = false;
       let utils9 = false;
         infoy -= ((utils9 ? 1 : 2));
      while (infoy <= 4) {
         baidux = infoy >= 6;
         break;
      }
      while (3 <= (infoy << (Math.min(Math.abs(4), 3))) || 4 <= infoy) {
          let goalv = String.fromCharCode(107,95,50,50,95,117,110,105,113,117,101,108,121,0);
          let resendy = 2;
          let imagemanagerO = String.fromCharCode(119,104,105,116,101,108,105,115,116,101,100,95,111,95,57,52,0);
          let sendz = 3.0;
         infoy /= Math.max(resendy, 5);
         goalv += `${parseInt(`${sendz}`)}`;
         resendy += 1 | parseInt(`${sendz}`);
         imagemanagerO = `${parseInt(`${sendz}`)}`;
         break;
      }
      if ((3 + defaultteamR.length) >= 5) {
          let moon6: Array<any> = [374, 921];
          let rankN: Array<any> = [357, 757];
          let logoO = String.fromCharCode(101,95,57,55,95,99,102,102,116,105,0);
         utils9 = rankN.length > logoO.length;
         moon6.push(moon6.length);
         rankN = [moon6.length & moon6.length];
      }
       let bnewarchdefaults4 = 2.0;
      userZ = new Map([[`${defaultteamR.length}`, 3]]);
      if (sellW) {
         break;
      }
   } while ((!Array.from(userZ.values()).includes(iconwatchc)) && sellW);
      notificationfillemptyI -= parseInt(`${brightnessJ}`);
      userZ.set(`${notificationfillemptyI}`, iconwatchc | 1);
   let window_3yz = 6605055.0 <= notificationfillemptyI;
   do {
       let halffieldimageX = 3.0;
       let penaltymatchiconf = false;
       let gemfileP = String.fromCharCode(98,95,55,53,95,99,115,104,97,114,112,0);
         halffieldimageX -= (parseFloat(`${(penaltymatchiconf ? 3 : 4)}`));
      while (parseFloat(`${gemfileP.length}`) <= halffieldimageX) {
          let penaltymatchicono: Map<any, any> = new Map([[String.fromCharCode(103,95,51,51,95,116,101,109,112,111,114,97,114,121,0),713], [String.fromCharCode(109,95,53,51,95,100,105,114,112,0),16]]);
         halffieldimageX += parseFloat(`${gemfileP.length}`);
         penaltymatchicono = new Map([[`${penaltymatchicono.size}`, penaltymatchicono.size & 3]]);
         break;
      }
         halffieldimageX *= parseFloat(`${gemfileP.length * 1}`);
         penaltymatchiconf = gemfileP.includes(`${penaltymatchiconf}`);
         gemfileP = `${parseInt(`${halffieldimageX}`) << (Math.min(4, Math.abs(2)))}`;
         gemfileP = `${(parseInt(`${halffieldimageX}`) * (penaltymatchiconf ? 4 : 4))}`;
      for (let m = 0; m < 2; m++) {
          let injuryL = 5.0;
          let middlewareI = 1.0;
         penaltymatchiconf = gemfileP == String.fromCharCode(114,0);
         injuryL += parseInt(`${injuryL}`) ^ parseInt(`${middlewareI}`);
         middlewareI -= parseFloat(`${parseInt(`${injuryL}`) + 2}`);
      }
      let iconsubssuccessn = penaltymatchiconf ? !penaltymatchiconf : penaltymatchiconf;
      do {
          let halffieldimage5 = String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,95,116,95,52,56,0);
          let combinedG = false;
          let minimizeZ = String.fromCharCode(106,112,103,95,122,95,50,51,0);
         penaltymatchiconf = halffieldimage5.startsWith(`${combinedG}`);
         halffieldimage5 = `${(String.fromCharCode(57,0) == minimizeZ ? minimizeZ.length : minimizeZ.length)}`;
         combinedG = 24 < minimizeZ.length;
         if (iconsubssuccessn) {
            break;
         }
      } while ((gemfileP.length >= 5 && penaltymatchiconf) && iconsubssuccessn);
      while (3 > gemfileP.length) {
         penaltymatchiconf = gemfileP.length > 62;
         break;
      }
      notificationfillemptyI += (2 >> (Math.min(4, Math.abs((penaltymatchiconf ? 1 : 5)))));
      if (window_3yz) {
         break;
      }
   } while (window_3yz && (3.52 > brightnessJ));

      if (onBack !== undefined) {

       let downloadedy = String.fromCharCode(115,101,108,101,99,116,105,118,101,108,121,95,55,95,55,50,0);
       let kuaishoun = String.fromCharCode(102,99,104,111,119,110,95,107,95,55,53,0);
       let libflipperb = 1.0;
      let topics = libflipperb <= 8758071.0;
      do {
         libflipperb *= 1;
         if (topics) {
            break;
         }
      } while ((4 <= (parseInt(`${libflipperb}`) / 4) || (kuaishoun.length << (Math.min(Math.abs(4), 1))) <= 1) && topics);
       let commentz = String.fromCharCode(115,95,54,55,95,115,117,114,102,0);
      let scheduler3 = 5021678 >= downloadedy.length;
      do {
         downloadedy += `${2 << (Math.min(1, downloadedy.length))}`;
         if (scheduler3) {
            break;
         }
      } while ((!kuaishoun.startsWith(`${downloadedy.length}`)) && scheduler3);
      if (!kuaishoun.endsWith(`${libflipperb}`)) {
         libflipperb += 1 - parseInt(`${libflipperb}`);
      }
      let gesturesO = 9032278 >= kuaishoun.length;
      do {
         kuaishoun += "1";
         if (gesturesO) {
            break;
         }
      } while (gesturesO && (3 > kuaishoun.length));
      progressu = [2 - playlistL.size];
   while (indexf.endsWith(`${userZ.size}`)) {
      indexf += `${parseInt(`${brightnessJ}`)}`;
      break;
   }
   let quests = String.fromCharCode(55,103,52,115,49,102,117,116,53,108,0) == indexf;
   do {
      indexf = `${playlistL.size * parseInt(`${brightnessJ}`)}`;
      if (quests) {
         break;
      }
   } while (quests && ((indexf.length + parseInt(`${notificationfillemptyI}`)) >= 2));
   if (!Array.from(userZ.keys()).includes(`${progressu.length}`)) {
      userZ = new Map([[`${progressu.length}`, parseInt(`${brightnessJ}`)]]);
   }
        onBack();

      indexf += `${playlistL.size}`;
      iconwatchc ^= iconwatchc;
   while (progressu.length == 2) {
      indexf = "3";
      break;
   }
      notificationfillemptyI /= Math.max(userZ.size, 3);
        lockOrientation("PORTRAIT");

   let android2 = iconwatchc <= 7360584;
   do {
       let gifgoalbgc = 4.0;
       let default_b2: Array<any> = [String.fromCharCode(108,101,109,111,110,95,98,95,51,56,0), String.fromCharCode(97,102,102,105,110,105,116,105,101,115,95,116,95,54,54,0), String.fromCharCode(102,95,54,95,114,101,97,99,104,97,98,105,108,105,116,121,0)];
       let defaultprofilepicQ: Map<any, any> = new Map([[String.fromCharCode(119,95,55,56,95,99,111,100,101,99,0),779], [String.fromCharCode(99,111,108,111,114,109,97,116,114,105,120,95,52,95,49,48,0),198]]);
       let loadingG = true;
         defaultprofilepicQ = new Map([[`${defaultprofilepicQ.size}`, 2 ^ default_b2.length]]);
      for (let y = 0; y < 3; y++) {
         gifgoalbgc *= ((loadingG ? 1 : 3) | defaultprofilepicQ.size);
      }
      while (gifgoalbgc > 4.61) {
         gifgoalbgc += defaultprofilepicQ.size & 3;
         break;
      }
         loadingG = default_b2.length > 50;
         default_b2 = [3 | parseInt(`${gifgoalbgc}`)];
      for (let m = 0; m < 1; m++) {
         default_b2 = [3 * default_b2.length];
      }
         default_b2 = [1];
       let configC = 3;
      for (let x = 0; x < 1; x++) {
         default_b2.push(2);
      }
         default_b2 = [parseInt(`${gifgoalbgc}`) / (Math.max(default_b2.length, 5))];
         default_b2.push(1 | defaultprofilepicQ.size);
      if (3.45 <= (gifgoalbgc - 1.5) || (1.5 - gifgoalbgc) <= 5.68) {
         default_b2 = [1];
      }
      iconwatchc -= 1 & defaultprofilepicQ.size;
      if (android2) {
         break;
      }
   } while (android2 && (playlistL.get(`${iconwatchc}`) == null));
   for (let g = 0; g < 1; g++) {
      userZ = new Map([[`${userZ.size}`, parseInt(`${notificationfillemptyI}`)]]);
   }
   let reactnativeratings7 = 7277431 <= userZ.size;
   do {
      userZ = new Map([[`${brightnessJ}`, iconwatchc * parseInt(`${brightnessJ}`)]]);
      if (reactnativeratings7) {
         break;
      }
   } while (reactnativeratings7 && (indexf.startsWith(`${userZ.size}`)));
       let libjsiO = 0.0;
       let change0: Array<any> = [925, 187];
          let predictionarrow9 = String.fromCharCode(97,95,50,95,97,99,113,117,97,110,116,0);
          let basketballmatchdetailbgm = 3.0;
          let liveshare4 = 2.0;
         libjsiO -= parseInt(`${basketballmatchdetailbgm}`);
         predictionarrow9 = "1";
         liveshare4 /= Math.max(3, parseFloat(`${parseInt(`${liveshare4}`)}`));
       let condensedj = String.fromCharCode(103,101,116,95,50,95,50,51,0);
       let sideo = String.fromCharCode(105,95,53,56,95,116,114,97,110,115,102,101,114,0);
      let specp = condensedj.length <= 6506186;
      do {
         condensedj += `${condensedj.length}`;
         if (specp) {
            break;
         }
      } while ((5 == (condensedj.length / 3) && (condensedj.length / 3) == 4) && specp);
      while (condensedj != sideo) {
         sideo = "3";
         break;
      }
         change0 = [condensedj.length - parseInt(`${libjsiO}`)];
       let humidityT = String.fromCharCode(114,95,55,50,95,114,103,98,116,111,0);
       let lnewarchdefaultso = String.fromCharCode(97,114,98,105,116,114,97,114,121,95,112,95,52,51,0);
      indexf = `${2 + indexf.length}`;
        setIsFullScreen(false);
      } else {

       let notificationY = String.fromCharCode(102,97,114,95,97,95,52,48,0);
         notificationY += `${notificationY.length * 2}`;
         notificationY += `${(notificationY == String.fromCharCode(90,0) ? notificationY.length : notificationY.length)}`;
         notificationY += `${2 % (Math.max(3, notificationY.length))}`;
      progressu = [parseInt(`${notificationfillemptyI}`) / (Math.max(playlistL.size, 2))];
   while (Array.from(userZ.values()).includes(iconwatchc)) {
       let less0 = String.fromCharCode(101,113,117,97,116,97,98,108,101,95,114,95,53,52,0);
       let private_uj: Map<any, any> = new Map([[String.fromCharCode(112,95,52,53,95,100,111,119,110,108,111,97,100,115,0),986], [String.fromCharCode(109,95,54,48,95,99,110,111,110,99,101,0),669]]);
       let skipQ = String.fromCharCode(120,95,52,49,0);
         skipQ = `${private_uj.size / (Math.max(3, 1))}`;
      let logout4 = 7770484 >= private_uj.size;
      do {
         private_uj.set(skipQ, 3);
         if (logout4) {
            break;
         }
      } while ((4 >= (private_uj.size | 2)) && logout4);
       let catalog2: Array<any> = [595, 355];
       let videobufferloadingh: Array<any> = [String.fromCharCode(113,95,56,49,95,101,110,99,111,100,105,110,103,98,0), String.fromCharCode(100,101,112,101,110,100,101,110,116,95,54,95,50,0), String.fromCharCode(119,114,97,112,112,101,114,95,111,95,49,55,0)];
         catalog2.push(2 + videobufferloadingh.length);
         private_uj = new Map([[`${private_uj.size}`, private_uj.size]]);
         catalog2.push(skipQ.length % 1);
          let nterstitial7 = String.fromCharCode(114,95,52,48,95,111,98,118,105,111,117,115,108,121,0);
          let lightw = 1.0;
         private_uj.set(`${videobufferloadingh.length}`, catalog2.length % 3);
         nterstitial7 += `${(String.fromCharCode(100,0) == nterstitial7 ? parseInt(`${lightw}`) : nterstitial7.length)}`;
         lightw += nterstitial7.length - 2;
         catalog2 = [skipQ.length >> (Math.min(1, catalog2.length))];
      while (catalog2.length <= 5) {
          let screenW = 1.0;
          let scheduleS = false;
          let render6 = 0.0;
          let macauH = String.fromCharCode(118,95,52,50,95,117,110,109,97,115,107,0);
         catalog2.push(macauH.length);
         screenW /= Math.max(1, ((scheduleS ? 5 : 5) ^ parseInt(`${screenW}`)));
         scheduleS = !scheduleS;
         render6 /= Math.max(parseInt(`${screenW}`) - parseInt(`${render6}`), 1);
         macauH = `${(parseInt(`${render6}`) - (scheduleS ? 2 : 5))}`;
         break;
      }
      iconwatchc |= skipQ.length;
      less0 = `${less0.length}`;
      break;
   }
   let delegate_aom = iconwatchc <= 6474579;
   do {
       let searchV = 0.0;
       let userI: Map<any, any> = new Map([[String.fromCharCode(102,95,54,54,95,116,105,114,101,100,0),String.fromCharCode(121,95,51,55,95,114,101,110,100,101,114,101,100,0)], [String.fromCharCode(105,100,101,110,116,105,116,105,121,95,117,95,49,48,0),String.fromCharCode(122,95,57,54,95,104,105,103,104,115,104,101,108,102,0)], [String.fromCharCode(101,103,114,101,115,115,95,55,95,51,54,0),String.fromCharCode(120,95,50,50,95,114,101,117,112,108,111,97,100,101,100,0)]]);
      let lessO = 9772227.0 <= searchV;
      do {
         searchV += parseFloat(`${3}`);
         if (lessO) {
            break;
         }
      } while (lessO && ((searchV * 2.8) < 4.53 || (parseInt(`${searchV}`) * userI.size) < 1));
         searchV /= Math.max(3, parseFloat(`${parseInt(`${searchV}`) << (Math.min(Math.abs(1), 3))}`));
         searchV /= Math.max(parseFloat(`${parseInt(`${searchV}`) / 1}`), 4);
         searchV /= Math.max(parseFloat(`${parseInt(`${searchV}`)}`), 2);
      if (Array.from(userI.values()).includes(searchV)) {
          let encryptorz = false;
          let disconnectedE = String.fromCharCode(107,95,56,56,95,100,101,99,114,101,97,115,101,0);
          let modeI = 0.0;
          let becomeX: Map<any, any> = new Map([[String.fromCharCode(97,117,100,105,111,100,115,112,95,107,95,57,49,0),String.fromCharCode(108,95,55,57,95,116,104,114,101,97,100,115,108,105,99,101,0)], [String.fromCharCode(100,95,49,56,95,101,120,97,99,116,0),String.fromCharCode(114,101,117,112,108,111,97,100,101,100,95,103,95,48,0)], [String.fromCharCode(99,111,110,116,114,97,115,116,95,55,95,57,53,0),String.fromCharCode(113,95,54,55,95,97,116,114,97,99,0)]]);
         userI.set(`${userI.size}`, 2 << (Math.min(5, Math.abs(userI.size))));
         encryptorz = !encryptorz;
         disconnectedE += `${becomeX.size % 2}`;
         modeI += parseFloat(`${3}`);
         becomeX.set(disconnectedE, (disconnectedE == String.fromCharCode(78,0) ? disconnectedE.length : becomeX.size));
      }
      while (2 >= (parseInt(`${searchV}`) / (Math.max(userI.size, 3))) && (parseFloat(`${userI.size}`) / (Math.max(6, searchV))) >= 1.12) {
         userI.set(`${searchV}`, userI.size);
         break;
      }
      iconwatchc *= parseInt(`${notificationfillemptyI}`);
      if (delegate_aom) {
         break;
      }
   } while ((iconwatchc == indexf.length) && delegate_aom);
      iconwatchc <<= Math.min(Math.abs(3 * userZ.size), 3);
        

      indexf = `${progressu.length}`;
   while (iconwatchc <= 3) {
       let libtobv = String.fromCharCode(99,95,54,55,95,112,114,101,112,97,114,101,100,0);
       let u_hash5 = 4.0;
       let mathj = String.fromCharCode(103,95,55,48,95,113,117,105,122,0);
         mathj += `${(String.fromCharCode(117,0) == libtobv ? libtobv.length : parseInt(`${u_hash5}`))}`;
      while ((u_hash5 / (Math.max(libtobv.length, 6))) < 2.86) {
          let kickh: Array<any> = [304, 65, 130];
          let nodex = true;
          let gradlej = 3.0;
          let informationk = String.fromCharCode(97,114,103,117,109,101,110,116,95,54,95,52,57,0);
         libtobv += `${informationk.length >> (Math.min(2, Math.abs(parseInt(`${gradlej}`))))}`;
         kickh.push((3 - (nodex ? 1 : 3)));
         nodex = (20 > ((!nodex ? 20 : kickh.length) % (Math.max(kickh.length, 8))));
         gradlej *= (parseFloat(`${(nodex ? 3 : 2) / 2}`));
         informationk = `${2 << (Math.min(3, kickh.length))}`;
         break;
      }
      if (2 <= (2 + libtobv.length) || 1.9 <= (libtobv.length - u_hash5)) {
         libtobv += `${parseInt(`${u_hash5}`)}`;
      }
      while ((libtobv.length >> (Math.min(Math.abs(4), 2))) >= 4) {
          let sendC = 5;
         u_hash5 /= Math.max(4, parseInt(`${u_hash5}`));
         sendC -= sendC;
         break;
      }
          let yellowcirclebgY = String.fromCharCode(112,95,53,53,95,115,117,98,112,101,101,114,0);
          let listf = 1.0;
         libtobv = `${parseInt(`${listf}`)}`;
         yellowcirclebgY = `${1 + yellowcirclebgY.length}`;
         listf += yellowcirclebgY.length;
      for (let w = 0; w < 3; w++) {
          let suggestionK = String.fromCharCode(101,95,57,49,95,111,112,116,105,109,97,108,0);
         u_hash5 /= Math.max(2, (suggestionK == String.fromCharCode(102,0) ? suggestionK.length : parseInt(`${u_hash5}`)));
      }
          let formE: Array<any> = [19, 894];
          let inviteN = 3.0;
         u_hash5 *= formE.length;
         formE.push(parseInt(`${inviteN}`));
      if ((5 & mathj.length) <= 4 && (mathj.length + 5) <= 4) {
          let prediction7 = String.fromCharCode(99,97,108,108,108,95,121,95,48,0);
          let cornershootM = String.fromCharCode(114,101,99,118,109,115,103,95,98,95,55,54,0);
          let settingsv = 2;
          let videoI = 2.0;
          let chinaf = false;
         u_hash5 += (parseInt(`${videoI}`) | (chinaf ? 2 : 3));
         prediction7 += `${prediction7.length}`;
         cornershootM = `${cornershootM.length * 3}`;
         settingsv += cornershootM.length;
         videoI -= parseFloat(`${settingsv}`);
         chinaf = cornershootM.includes(`${settingsv}`);
      }
          let nextU = true;
          let rocket_ = 4.0;
         u_hash5 -= mathj.length;
         nextU = rocket_ >= 17.100;
         rocket_ /= Math.max(parseInt(`${rocket_}`), 5);
      notificationfillemptyI -= parseInt(`${notificationfillemptyI}`) / (Math.max(7, parseInt(`${brightnessJ}`)));
      break;
   }
   let foreground2 = 8447297 <= indexf.length;
   do {
      indexf += `${progressu.length}`;
      if (foreground2) {
         break;
      }
   } while (foreground2 && (5 < indexf.length));
   if (4 < (5 - indexf.length) || (indexf.length - iconwatchc) < 5) {
      iconwatchc ^= (indexf == String.fromCharCode(74,0) ? userZ.size : indexf.length);
   }
        navigation.goBack();
      }
    };

    useEffect(() => {
      
      const subscription = AppState.addEventListener(
        "change",
        handleAppStateChange
      );

      return () => {
        subscription.remove();
      };
    }, []);

    useEffect(() => {
      
      const isNeedAutoRotate = false;
      const isLocked = controlsRef?.current?.isLocked ?? false;

      if (isNeedAutoRotate && !isLocked) {
        deviceOrientationHandle();
      } else {
        
        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
      }
    }, [devicesOrientation]);

    useEffect(() => {
      const removeBackPressListener = BackHandler.addEventListener(
        "hardwareBackPress",
        () => {
          
          navigation.goBack();
          return true;
        }
      );

      
      const onBeforeRemoveListener = navigation.addListener(
        "beforeRemove",
        (e: any) => {
          if (
            !(
              Platform.OS === "ios" &&
              e.data.action.type.toLocaleLowerCase() === "pop"
            )
          ) {
            
            
            e.preventDefault();
          }

          if (isFullScreen) {
            lockOrientation("PORTRAIT");
            StatusBar.setHidden(false);
            setIsFullScreen(false);
          } else {
            videoPlayerRef.current.setNativeProps({ paused: false })
            
            setIsPaused(true);
            
            setTimeout(() => {
              navigation.dispatch(e.data.action);
            }, 100);
          }
        }
      );

      return () => {
        removeBackPressListener.remove();
        onBeforeRemoveListener();
      };
    }, [navigation, isFullScreen, isPaused]);

    useEffect(() => {
      dispatch(setFullscreenState(isFullScreen));
      
      if (isFullScreen) {
        navigation.setOptions({ gestureEnabled: false });
      } else {
        navigation.setOptions({ gestureEnabled: true });
      }
    }, [isFullScreen]);

    useEffect(() => {
      
      setCurrentTime(0);
    }, [vod_url]);

    
    const handleAppStateChange = (nextAppState: any) => {
      
      
      
      
      
      
      try {
        if (currentTimeRef.current != 0 && nextAppState !== "active") {
          console.log("save vod");
          if (handleSaveVod) handleSaveVod();
        }
      } catch (err) {
       let bottomR = String.fromCharCode(114,116,112,115,101,110,100,101,114,95,105,95,52,56,0);
    let gifgoalbgF: Map<any, any> = new Map([[String.fromCharCode(111,110,101,115,99,97,108,101,95,120,95,54,49,0),760], [String.fromCharCode(119,95,49,50,95,105,110,112,117,116,115,0),2], [String.fromCharCode(108,111,110,103,101,114,95,49,95,53,56,0),707]]);
    let toponD: Array<any> = [String.fromCharCode(98,95,55,53,95,115,112,101,99,105,102,105,101,114,0), String.fromCharCode(118,95,53,95,101,118,105,99,101,0), String.fromCharCode(113,95,51,57,95,116,114,117,116,104,0)];
    let pushX = String.fromCharCode(108,95,57,54,95,98,112,115,0);
    let scrollview3 = 0.0;
    let videobufferloadingw = 0.0;
    let iconfeedbackE = String.fromCharCode(115,95,54,52,95,97,97,110,100,99,116,116,97,98,0);
    let minimizeT = 2.0;
    let kickf = 2;
    let infol: Array<any> = [142, 818, 563];
    let mnewinterstitial2 = 2.0;
    let iconwatchnown = String.fromCharCode(107,101,101,112,105,110,103,95,52,95,52,54,0);
    let iconpipexpandn = String.fromCharCode(116,114,101,97,100,95,51,95,53,48,0);
    let chinasameo = String.fromCharCode(102,100,111,112,101,110,95,97,95,56,51,0);
    let telegramR: Map<any, any> = new Map([[String.fromCharCode(115,95,55,52,95,99,111,110,116,114,111,108,0),722], [String.fromCharCode(109,95,51,53,95,118,100,98,101,0),882]]);
   while (Array.from(gifgoalbgF.keys()).includes(`${minimizeT}`)) {
      minimizeT /= Math.max(5, parseInt(`${scrollview3}`));
      break;
   }
   while (3.45 < minimizeT) {
      minimizeT *= parseInt(`${minimizeT}`) + 2;
      break;
   }
   while (5.36 < scrollview3) {
      scrollview3 /= Math.max(1, parseFloat(`${kickf % 2}`));
      break;
   }
       let userZ = String.fromCharCode(117,110,109,111,118,101,100,95,54,95,53,51,0);
       let auto_d9c = String.fromCharCode(109,117,108,116,105,116,97,98,108,101,95,108,95,54,55,0);
       let stringW = String.fromCharCode(100,95,55,53,95,111,118,101,114,108,97,112,112,101,100,0);
          let subin3 = String.fromCharCode(108,105,98,97,118,117,116,105,108,95,107,95,50,0);
         auto_d9c = `${userZ.length ^ auto_d9c.length}`;
         subin3 += `${(subin3 == String.fromCharCode(55,0) ? subin3.length : subin3.length)}`;
         auto_d9c = "3";
      for (let c = 0; c < 3; c++) {
         auto_d9c = `${1 - auto_d9c.length}`;
      }
       let renewh = String.fromCharCode(98,95,55,49,95,110,117,109,101,114,105,102,121,0);
      for (let y = 0; y < 1; y++) {
          let holderw: Array<any> = [String.fromCharCode(99,114,101,97,116,101,101,120,95,111,95,49,51,0), String.fromCharCode(115,95,49,52,95,105,115,115,101,116,117,103,105,100,0)];
          let green2 = 0;
          let rncore3 = true;
          let static_teT: Array<any> = [454, 999, 898];
         auto_d9c += `${auto_d9c.length}`;
         holderw = [1];
         green2 += 1;
         static_teT.push(3);
      }
      while (stringW.includes(auto_d9c)) {
         auto_d9c += `${(String.fromCharCode(81,0) == auto_d9c ? auto_d9c.length : userZ.length)}`;
         break;
      }
         stringW = `${auto_d9c.length}`;
      let baselinew = String.fromCharCode(98,110,104,121,108,98,114,112,116,106,0) == stringW;
      do {
         stringW = `${renewh.length / (Math.max(auto_d9c.length, 10))}`;
         if (baselinew) {
            break;
         }
      } while (baselinew && (renewh != String.fromCharCode(81,0)));
          let changeE = 0.0;
         auto_d9c = `${parseInt(`${changeE}`)}`;
      videobufferloadingw += (String.fromCharCode(78,0) == stringW ? auto_d9c.length : stringW.length);
   while ((2 + iconfeedbackE.length) > 2) {
       let typingX: Array<any> = [694, 96, 506];
       let mbbidW = 1.0;
       let basketballiconm = false;
      let unreadh = basketballiconm ? !basketballiconm : basketballiconm;
      do {
         basketballiconm = typingX.includes(basketballiconm);
         if (unreadh) {
            break;
         }
      } while ((2.38 > (2.34 * mbbidW) || mbbidW > 2.34) && unreadh);
      let invite6 = 8857076.0 <= mbbidW;
      do {
         mbbidW *= typingX.length;
         if (invite6) {
            break;
         }
      } while (invite6 && (basketballiconm || (mbbidW / 3.55) <= 5.32));
      if ((typingX.length - mbbidW) > 4.52 && 4 > (typingX.length << (Math.min(Math.abs(5), 5)))) {
         mbbidW += 2 + typingX.length;
      }
         basketballiconm = typingX.includes(mbbidW);
      for (let w = 0; w < 1; w++) {
         typingX.push(2);
      }
       let halfg = String.fromCharCode(118,95,49,50,95,99,111,110,100,101,110,115,101,100,0);
       let anythinkV = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,115,95,113,95,49,48,0);
      while (basketballiconm || 2 >= (typingX.length % 4)) {
         typingX = [(typingX.length >> (Math.min(2, Math.abs((basketballiconm ? 4 : 1)))))];
         break;
      }
         mbbidW *= 2 + typingX.length;
      let specl = mbbidW >= 8917337.0;
      do {
         mbbidW += (parseInt(`${mbbidW}`) + (basketballiconm ? 1 : 5));
         if (specl) {
            break;
         }
      } while ((typingX.length < 3) && specl);
      iconfeedbackE = `${typingX.length}`;
      break;
   }
      pushX = `${gifgoalbgF.size}`;
   let langJ = videobufferloadingw <= 6538155.0;
   do {
      videobufferloadingw += 2 >> (Math.min(Math.abs(kickf), 3));
      if (langJ) {
         break;
      }
   } while (((videobufferloadingw + 2.29) == 4.44) && langJ);
   for (let a = 0; a < 1; a++) {
       let cornershootz = String.fromCharCode(119,95,55,56,95,116,114,105,0);
       let basketballp = String.fromCharCode(111,114,105,95,105,95,52,50,0);
       let pangleH = 5.0;
       let modelsc = 2.0;
         cornershootz += `${basketballp.length - cornershootz.length}`;
         basketballp = `${cornershootz.length % (Math.max(8, parseInt(`${modelsc}`)))}`;
      while ((pangleH * parseFloat(`${cornershootz.length}`)) >= 5.18) {
         pangleH -= parseFloat(`${parseInt(`${modelsc}`) | 3}`);
         break;
      }
       let private_4x8 = 4.0;
       let libavdeviceF = String.fromCharCode(105,95,56,54,95,117,110,108,111,99,107,101,100,0);
      while (2.34 >= private_4x8) {
         private_4x8 *= parseFloat(`${libavdeviceF.length + cornershootz.length}`);
         break;
      }
          let combinedb = String.fromCharCode(101,120,99,101,101,100,115,95,104,95,52,56,0);
          let rewindy: Array<any> = [57, 907, 960];
         cornershootz += `${parseInt(`${pangleH}`)}`;
         combinedb = `${rewindy.length + 1}`;
         rewindy = [(combinedb == String.fromCharCode(98,0) ? rewindy.length : combinedb.length)];
         basketballp = `${parseInt(`${pangleH}`) + 3}`;
       let downloadedV = 4.0;
         pangleH *= parseFloat(`${3}`);
      for (let q = 0; q < 2; q++) {
         pangleH /= Math.max(3, parseFloat(`${parseInt(`${downloadedV}`)}`));
      }
      for (let x = 0; x < 3; x++) {
         downloadedV += libavdeviceF.length;
      }
      toponD = [1];
   }
   let renewO = 9206235.0 <= scrollview3;
   do {
       let greyticke = false;
       let klevinu = String.fromCharCode(121,95,51,56,95,115,116,114,105,107,101,116,104,114,111,117,103,104,115,0);
      while (klevinu.length <= 3 || !greyticke) {
          let white1: Map<any, any> = new Map([[String.fromCharCode(97,110,103,108,101,100,95,48,95,52,52,0),true ], [String.fromCharCode(99,95,56,95,121,118,99,111,110,102,105,103,0),true ]]);
          let china6: Map<any, any> = new Map([[String.fromCharCode(99,111,114,114,117,112,116,101,100,95,50,95,49,48,0),String.fromCharCode(114,95,54,53,95,102,119,97,108,115,104,0)], [String.fromCharCode(104,95,51,49,95,99,111,110,99,97,116,100,101,99,0),String.fromCharCode(99,111,110,116,114,111,108,101,114,115,95,51,95,56,51,0)], [String.fromCharCode(107,101,121,110,97,109,101,95,98,95,50,52,0),String.fromCharCode(116,95,50,56,95,100,105,114,97,99,116,97,98,0)]]);
          let inouttargetred9 = 5.0;
         klevinu += `${parseInt(`${inouttargetred9}`) << (Math.min(Math.abs(white1.size), 2))}`;
         white1 = new Map([[`${china6.size}`, 3]]);
         china6.set(`${china6.size}`, china6.size);
         break;
      }
      let private_3k = String.fromCharCode(51,116,56,0) == klevinu;
      do {
         klevinu = `${(klevinu == String.fromCharCode(120,0) ? klevinu.length : (greyticke ? 5 : 3))}`;
         if (private_3k) {
            break;
         }
      } while ((!greyticke && klevinu.length <= 1) && private_3k);
      scrollview3 += parseFloat(`${parseInt(`${minimizeT}`) ^ 2}`);
      if (renewO) {
         break;
      }
   } while (renewO && (scrollview3 >= 4.61));
      kickf &= parseInt(`${scrollview3}`) & 1;
      minimizeT /= Math.max(toponD.length / (Math.max(3, infol.length)), 3);
      gifgoalbgF = new Map([[`${mnewinterstitial2}`, 3 << (Math.min(3, Math.abs(parseInt(`${mnewinterstitial2}`))))]]);
   if (5 >= kickf) {
      infol = [toponD.length];
   }
   for (let n = 0; n < 1; n++) {
      pushX += `${2 + parseInt(`${videobufferloadingw}`)}`;
   }
   let acceptedh = 6312290 <= bottomR.length;
   do {
      bottomR += `${kickf + 1}`;
      if (acceptedh) {
         break;
      }
   } while (acceptedh && (3 >= bottomR.length));

        console.log("err save vod!");

      infol.push(iconwatchnown.length ^ 2);
   for (let e = 0; e < 3; e++) {
      mnewinterstitial2 -= parseInt(`${minimizeT}`) << (Math.min(4, Math.abs(3)));
   }
      pushX = `${pushX.length}`;
      gifgoalbgF.set(bottomR, bottomR.length ^ 1);
   let episodesh = 9495632 <= iconwatchnown.length;
   do {
      iconwatchnown = `${gifgoalbgF.size * iconfeedbackE.length}`;
      if (episodesh) {
         break;
      }
   } while (((iconwatchnown.length | 1) >= 4 || 5 >= (1 | toponD.length)) && episodesh);
      toponD = [parseInt(`${videobufferloadingw}`)];
   let down5 = gifgoalbgF.size >= 7518116;
   do {
      gifgoalbgF = new Map([[`${kickf}`, 2 * kickf]]);
      if (down5) {
         break;
      }
   } while ((gifgoalbgF.size >= 4) && down5);
   while ((videobufferloadingw / (Math.max(4, gifgoalbgF.size))) == 3.32 || (5 << (Math.min(3, Math.abs(gifgoalbgF.size)))) == 3) {
      videobufferloadingw *= 1;
      break;
   }
   for (let f = 0; f < 3; f++) {
      gifgoalbgF = new Map([[iconwatchnown, (String.fromCharCode(53,0) == iconwatchnown ? kickf : iconwatchnown.length)]]);
   }
   while (pushX.length < parseInt(`${minimizeT}`)) {
       let bufferG: Array<any> = [35, 229];
         bufferG = [bufferG.length];
         bufferG.push(bufferG.length);
          let logout9: Map<any, any> = new Map([[String.fromCharCode(112,114,122,112,95,109,95,50,55,0),String.fromCharCode(101,118,111,108,118,101,95,112,95,52,55,0)], [String.fromCharCode(100,101,108,101,116,101,100,95,55,95,50,55,0),String.fromCharCode(101,95,52,51,95,98,111,117,110,100,97,108,108,0)], [String.fromCharCode(122,95,54,52,95,100,105,118,109,111,100,0),String.fromCharCode(109,95,49,56,95,97,99,99,117,114,97,116,101,0)]]);
         bufferG = [logout9.size << (Math.min(Math.abs(1), 4))];
      pushX = `${1 & iconwatchnown.length}`;
      break;
   }
   while (iconpipexpandn.length > 1) {
       let eighteenf = true;
       let iconsharefriendsT = String.fromCharCode(120,95,51,51,95,114,101,119,105,110,100,0);
          let indicatorn = 1.0;
          let heart_ = String.fromCharCode(116,95,49,54,95,110,105,108,115,0);
          let giftbuttonp = String.fromCharCode(97,116,114,97,99,112,108,117,115,95,55,95,52,55,0);
         iconsharefriendsT += `${heart_.length}`;
         indicatorn -= parseFloat(`${giftbuttonp.length}`);
         heart_ += `${giftbuttonp.length << (Math.min(2, Math.abs(parseInt(`${indicatorn}`))))}`;
      for (let r = 0; r < 3; r++) {
         iconsharefriendsT += `${(iconsharefriendsT == String.fromCharCode(70,0) ? (eighteenf ? 2 : 2) : iconsharefriendsT.length)}`;
      }
      while (!iconsharefriendsT.endsWith(`${eighteenf}`)) {
         iconsharefriendsT = `${iconsharefriendsT.length % 3}`;
         break;
      }
          let soundr = String.fromCharCode(119,95,54,53,95,117,110,116,121,112,101,100,0);
          let collectiono = 5.0;
         iconsharefriendsT = `${((eighteenf ? 2 : 2) >> (Math.min(Math.abs(1), 5)))}`;
         soundr += "2";
         collectiono -= parseInt(`${collectiono}`) << (Math.min(soundr.length, 4));
      for (let m = 0; m < 1; m++) {
          let homeloadingU = String.fromCharCode(100,95,51,51,95,117,110,100,101,108,101,103,97,116,101,0);
          let colorsv = false;
         iconsharefriendsT += "3";
         homeloadingU += "3";
         colorsv = homeloadingU == String.fromCharCode(67,0);
      }
      let fileG = eighteenf ? !eighteenf : eighteenf;
      do {
         eighteenf = !eighteenf;
         if (fileG) {
            break;
         }
      } while ((iconsharefriendsT.endsWith(`${eighteenf}`)) && fileG);
      iconpipexpandn += "2";
      break;
   }
   for (let w = 0; w < 2; w++) {
       let awayiconh: Array<any> = [629, 202];
       let iconlogoutf = 3.0;
      let libturbomodulejsijnix = 8540900 >= awayiconh.length;
      do {
         awayiconh = [3];
         if (libturbomodulejsijnix) {
            break;
         }
      } while (libturbomodulejsijnix && (awayiconh.length == iconlogoutf));
      let bootM = 9162243 >= awayiconh.length;
      do {
          let aboutI: Map<any, any> = new Map([[String.fromCharCode(102,111,114,109,97,116,116,101,100,95,116,95,54,54,0),String.fromCharCode(108,111,99,108,95,57,95,55,50,0)], [String.fromCharCode(101,101,112,95,97,95,52,53,0),String.fromCharCode(114,95,53,49,95,112,105,99,109,101,109,115,101,116,0)], [String.fromCharCode(113,95,53,52,95,112,117,98,108,105,115,104,0),String.fromCharCode(116,114,107,110,95,113,95,57,57,0)]]);
         awayiconh = [1 | parseInt(`${iconlogoutf}`)];
         aboutI.set(`${aboutI.size}`, 1 >> (Math.min(2, Math.abs(aboutI.size))));
         if (bootM) {
            break;
         }
      } while (bootM && ((awayiconh.length / (Math.max(9, parseInt(`${iconlogoutf}`)))) < 1 && (iconlogoutf / 1.9) < 2.42));
         awayiconh.push(awayiconh.length);
      if (1 < (parseInt(`${iconlogoutf}`) - awayiconh.length)) {
         awayiconh.push(3);
      }
      for (let a = 0; a < 1; a++) {
         iconlogoutf += 3 - awayiconh.length;
      }
       let floatingt = String.fromCharCode(114,101,115,101,114,118,101,100,95,56,95,50,48,0);
      gifgoalbgF = new Map([[`${scrollview3}`, kickf - parseInt(`${scrollview3}`)]]);
   }
      bottomR = `${3 / (Math.max(4, toponD.length))}`;
   while ((pushX.length - infol.length) < 3 && (pushX.length - infol.length) < 3) {
      pushX = `${(pushX == String.fromCharCode(116,0) ? parseInt(`${mnewinterstitial2}`) : pushX.length)}`;
      break;
   }
       let neone = true;
      while (neone) {
          let x_playerJ = 1;
         neone = 54 > x_playerJ || !neone;
         break;
      }
         neone = (!neone ? !neone : neone);
       let sports_ = 5.0;
       let singaporen = 0.0;
      minimizeT /= Math.max(3, kickf);
        console.log(err);
      }
    };

    const deviceOrientationHandle = () => {
       let yingy = String.fromCharCode(114,95,49,51,95,118,111,114,100,105,112,108,111,109,0);
    let shirtJ = String.fromCharCode(114,101,113,117,101,115,116,95,118,95,52,53,0);
    let sportI: Map<any, any> = new Map([[String.fromCharCode(110,97,110,112,97,95,109,95,50,49,0),212], [String.fromCharCode(109,111,110,111,116,111,110,121,95,51,95,51,54,0),46]]);
    let defaultteamV = 2.0;
    let libswresampleK: Array<any> = [39, 658];
    let thumbnail3 = String.fromCharCode(116,117,114,98,117,108,101,110,99,101,95,119,95,51,49,0);
    let suggestionf = String.fromCharCode(112,114,111,100,117,99,116,105,111,110,95,54,95,48,0);
    let mintegralh: Array<any> = [String.fromCharCode(98,95,52,50,95,97,100,109,105,110,0), String.fromCharCode(111,116,104,101,114,119,105,115,101,95,119,95,51,48,0), String.fromCharCode(118,105,100,101,111,105,110,102,111,104,101,97,100,101,114,95,104,95,49,55,0)];
    let login0: Map<any, any> = new Map([[String.fromCharCode(107,95,56,51,95,106,99,111,110,102,105,103,0),258], [String.fromCharCode(115,95,49,57,95,121,117,118,0),766], [String.fromCharCode(111,95,54,95,115,117,98,112,101,108,0),974]]);
    let albumB = 0.0;
    let penaltyt = 1.0;
    let statisticsE: Map<any, any> = new Map([[String.fromCharCode(116,95,53,51,95,111,114,105,103,0),String.fromCharCode(100,111,99,115,105,122,101,95,52,95,50,53,0)], [String.fromCharCode(104,95,51,51,95,105,110,99,114,98,108,111,98,0),String.fromCharCode(100,101,110,111,105,115,101,114,95,105,95,49,57,0)], [String.fromCharCode(110,111,110,115,101,99,117,114,101,95,108,95,54,57,0),String.fromCharCode(104,95,49,49,95,99,104,105,114,112,0)]]);
    let rewardvideo3 = 5;
      login0.set(suggestionf, suggestionf.length);
   let penaltyshootnogoal7 = shirtJ.length >= 5817310;
   do {
       let orangedownarrowD = String.fromCharCode(115,95,49,57,95,111,112,116,105,111,110,97,108,108,121,0);
          let libjsiF = String.fromCharCode(111,99,116,112,111,105,110,116,95,110,95,52,48,0);
          let libhermes0 = 0.0;
         orangedownarrowD += `${1 - libjsiF.length}`;
         libjsiF += `${parseInt(`${libhermes0}`)}`;
      for (let l = 0; l < 3; l++) {
         orangedownarrowD = `${orangedownarrowD.length}`;
      }
         orangedownarrowD = `${orangedownarrowD.length + orangedownarrowD.length}`;
      shirtJ = `${parseInt(`${albumB}`) / (Math.max(10, yingy.length))}`;
      if (penaltyshootnogoal7) {
         break;
      }
   } while (penaltyshootnogoal7 && (5 == (sportI.size % 2)));
       let debugD = String.fromCharCode(107,95,54,52,95,98,114,105,103,104,116,110,101,115,115,0);
       let heartl = String.fromCharCode(101,95,52,50,95,112,114,105,110,116,0);
       let assisti = 1.0;
         debugD = "3";
          let borderlessP = 3;
          let inactiveo = false;
         heartl = `${3 ^ debugD.length}`;
         borderlessP <<= Math.min(1, parseInt(`${Math.abs(((inactiveo ? 3 : 3) >> (Math.min(Math.abs(borderlessP), 1))))}`));
         inactiveo = !inactiveo;
         assisti -= heartl.length | 3;
         heartl = `${1 | parseInt(`${assisti}`)}`;
         assisti /= Math.max(debugD.length, 4);
         assisti += parseInt(`${assisti}`);
         assisti += debugD.length | heartl.length;
      for (let c = 0; c < 2; c++) {
         debugD = `${1 << (Math.min(2, heartl.length))}`;
      }
         heartl += `${debugD.length}`;
      shirtJ += `${sportI.size}`;
       let models6 = String.fromCharCode(119,95,52,51,0);
      if (models6.startsWith(models6)) {
         models6 += `${models6.length}`;
      }
       let fastforwardV = String.fromCharCode(103,114,97,98,98,101,114,95,105,95,54,50,0);
      if (fastforwardV != String.fromCharCode(84,0)) {
          let xnewarchdefaultsy = true;
          let descu = true;
          let push0 = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,95,100,95,57,52,0);
         models6 = `${3 * push0.length}`;
         xnewarchdefaultsy = (!xnewarchdefaultsy ? !xnewarchdefaultsy : !xnewarchdefaultsy);
         descu = !xnewarchdefaultsy;
      }
      penaltyt -= parseFloat(`${login0.size - 2}`);

      

   for (let l = 0; l < 2; l++) {
      thumbnail3 = "1";
   }
   let changet = 6771738.0 >= albumB;
   do {
       let gift4 = 1;
      if (4 == (gift4 % 5)) {
         gift4 -= gift4 ^ 1;
      }
       let mimeO = 1.0;
       let paginationA = 1.0;
          let libreanimated_ = false;
         mimeO /= Math.max(1, parseFloat(`${parseInt(`${paginationA}`)}`));
         libreanimated_ = !libreanimated_ || !libreanimated_;
      albumB *= 2;
      if (changet) {
         break;
      }
   } while ((yingy.length > 3) && changet);
   while (2 >= (1 - parseInt(`${albumB}`)) && 5 >= (yingy.length / (Math.max(1, 9)))) {
       let leakcheckerK: Map<any, any> = new Map([[String.fromCharCode(116,95,51,48,95,115,111,99,107,101,116,118,97,114,0),String.fromCharCode(111,95,50,54,95,111,112,115,0)], [String.fromCharCode(111,95,48,95,110,111,100,101,0),String.fromCharCode(115,116,105,108,108,95,102,95,51,51,0)], [String.fromCharCode(119,95,52,54,95,115,104,97,114,101,103,114,111,117,112,0),String.fromCharCode(118,97,97,99,97,108,99,117,108,97,116,105,111,110,95,110,95,55,54,0)]]);
       let iconrightorangeF = String.fromCharCode(109,95,48,95,109,101,97,115,117,114,101,100,0);
       let mappingC = String.fromCharCode(99,120,100,97,116,97,95,113,95,55,50,0);
       let profile4 = 1;
      while ((leakcheckerK.size | iconrightorangeF.length) == 5) {
          let footballfiledlayout7: Array<any> = [435, 762, 425];
          let arrowC = String.fromCharCode(102,95,53,57,95,110,97,116,105,118,101,108,121,0);
          let foregroundb: Array<any> = [String.fromCharCode(110,95,57,57,95,100,121,108,105,98,115,0), String.fromCharCode(122,95,55,53,95,100,101,102,105,110,101,115,0), String.fromCharCode(111,95,49,49,95,114,101,115,97,109,112,108,101,114,0)];
         leakcheckerK = new Map([[`${foregroundb.length}`, profile4 / 2]]);
         footballfiledlayout7.push(1);
         arrowC = `${3 - arrowC.length}`;
         foregroundb.push(arrowC.length);
         break;
      }
          let singlek = 5;
          let episodeb = 2.0;
         profile4 >>= Math.min(Math.abs(leakcheckerK.size), 4);
         singlek <<= Math.min(5, Math.abs(singlek / 3));
         episodeb += singlek >> (Math.min(Math.abs(parseInt(`${episodeb}`)), 3));
      let schedulerU = iconrightorangeF.length <= 8165514;
      do {
         iconrightorangeF = "3";
         if (schedulerU) {
            break;
         }
      } while (((leakcheckerK.size & iconrightorangeF.length) <= 3 && (iconrightorangeF.length & 3) <= 1) && schedulerU);
      for (let l = 0; l < 3; l++) {
         leakcheckerK = new Map([[`${leakcheckerK.size}`, mappingC.length]]);
      }
          let selectedA: Array<any> = [455, 797, 926];
          let graphicse: Map<any, any> = new Map([[String.fromCharCode(115,105,110,103,108,101,116,97,98,108,101,95,97,95,50,51,0),String.fromCharCode(115,108,111,119,109,111,100,101,95,112,95,56,48,0)], [String.fromCharCode(112,114,111,112,111,115,101,114,95,55,95,56,48,0),String.fromCharCode(105,95,51,57,95,117,110,97,118,97,105,108,97,98,101,0)], [String.fromCharCode(105,95,56,48,95,114,101,108,117,0),String.fromCharCode(113,95,52,54,95,100,105,97,103,110,111,115,116,105,99,0)]]);
          let defaultteaml: Map<any, any> = new Map([[String.fromCharCode(101,114,97,115,101,95,113,95,55,51,0),900], [String.fromCharCode(112,114,105,109,97,114,105,101,115,95,110,95,51,55,0),145]]);
         mappingC = `${selectedA.length / 2}`;
         selectedA = [graphicse.size % (Math.max(1, 1))];
         graphicse.set(`${defaultteaml.size}`, 1 + defaultteaml.size);
      while (iconrightorangeF.startsWith(`${profile4}`)) {
         profile4 *= 2 << (Math.min(4, Math.abs(profile4)));
         break;
      }
       let halffieldimagev = String.fromCharCode(116,95,54,95,117,112,115,104,105,102,116,0);
      for (let g = 0; g < 1; g++) {
         leakcheckerK.set(iconrightorangeF, iconrightorangeF.length - 2);
      }
          let interstitiald = String.fromCharCode(100,95,57,95,108,105,98,115,119,115,99,97,108,101,0);
         leakcheckerK.set(interstitiald, interstitiald.length & leakcheckerK.size);
          let owngoalr: Map<any, any> = new Map([[String.fromCharCode(99,101,108,102,95,102,95,57,54,0),787], [String.fromCharCode(110,95,50,48,95,112,114,111,109,112,116,101,100,0),449], [String.fromCharCode(109,111,118,101,95,97,95,51,53,0),409]]);
         profile4 += owngoalr.size;
      if (!Array.from(leakcheckerK.values()).includes(profile4)) {
         profile4 ^= iconrightorangeF.length ^ 2;
      }
         leakcheckerK = new Map([[`${leakcheckerK.size}`, 2 ^ leakcheckerK.size]]);
      albumB -= 1 / (Math.max(parseInt(`${penaltyt}`), 9));
      break;
   }
   let megaphoneV = 9543884 <= shirtJ.length;
   do {
      shirtJ += `${parseInt(`${albumB}`) / 2}`;
      if (megaphoneV) {
         break;
      }
   } while ((shirtJ.length <= 2) && megaphoneV);
      if (
        devicesOrientation === "LANDSCAPE-LEFT" ||
        devicesOrientation === "LANDSCAPE-RIGHT"
      ) {

      albumB += parseInt(`${albumB}`) ^ 1;
   let detail9 = suggestionf.length <= 5363796;
   do {
       let penaltyshootnogoalZ = String.fromCharCode(102,114,97,99,95,116,95,53,0);
       let historyV = String.fromCharCode(118,95,51,51,95,97,115,99,101,110,100,101,114,0);
       let videobufferloadingM = 1.0;
       let modeV = 3.0;
       let actionG = String.fromCharCode(97,95,52,53,95,112,111,108,121,108,105,110,101,0);
         videobufferloadingM *= 1;
      if ((penaltyshootnogoalZ.length % 3) < 1 || 2 < (penaltyshootnogoalZ.length ^ 3)) {
         modeV *= (penaltyshootnogoalZ == String.fromCharCode(105,0) ? penaltyshootnogoalZ.length : parseInt(`${videobufferloadingM}`));
      }
         actionG = `${(String.fromCharCode(104,0) == historyV ? penaltyshootnogoalZ.length : historyV.length)}`;
      if (actionG.length == parseInt(`${videobufferloadingM}`)) {
         actionG = "3";
      }
         historyV += `${actionG.length}`;
         historyV += `${parseInt(`${modeV}`)}`;
      let favoriteq = String.fromCharCode(108,53,50,110,55,121,115,0) == penaltyshootnogoalZ;
      do {
         penaltyshootnogoalZ = `${(penaltyshootnogoalZ == String.fromCharCode(54,0) ? actionG.length : penaltyshootnogoalZ.length)}`;
         if (favoriteq) {
            break;
         }
      } while (favoriteq && (penaltyshootnogoalZ.length > parseInt(`${modeV}`)));
         actionG = `${parseInt(`${modeV}`) + actionG.length}`;
      for (let n = 0; n < 3; n++) {
         modeV /= Math.max(1, penaltyshootnogoalZ.length);
      }
       let subinf = 4;
       let themeS = 1;
         videobufferloadingM *= historyV.length;
         historyV = `${subinf << (Math.min(Math.abs(parseInt(`${videobufferloadingM}`)), 1))}`;
         penaltyshootnogoalZ += `${penaltyshootnogoalZ.length & parseInt(`${videobufferloadingM}`)}`;
         historyV = "1";
         penaltyshootnogoalZ = `${historyV.length}`;
      suggestionf += `${(String.fromCharCode(73,0) == suggestionf ? mintegralh.length : suggestionf.length)}`;
      if (detail9) {
         break;
      }
   } while ((!suggestionf.startsWith(`${penaltyt}`)) && detail9);
   while (4.96 > albumB) {
      albumB += mintegralh.length ^ shirtJ.length;
      break;
   }
       let friendsM = 2.0;
       let ying7: Map<any, any> = new Map([[String.fromCharCode(109,95,55,56,95,97,114,116,105,99,108,101,115,0),136], [String.fromCharCode(114,115,116,114,105,112,95,103,95,53,57,0),948]]);
       let libreanimatedw = false;
          let relatedk = String.fromCharCode(109,95,54,95,97,120,105,120,0);
          let predictionbannerO: Array<any> = [String.fromCharCode(109,101,109,115,101,116,95,117,95,57,0), String.fromCharCode(99,97,112,116,117,114,101,95,104,95,55,53,0)];
         friendsM -= ying7.size;
         relatedk += "3";
         predictionbannerO.push(2);
         libreanimatedw = ying7.size == 75;
         libreanimatedw = parseInt(`${friendsM}`) > ying7.size;
         friendsM -= parseInt(`${friendsM}`);
      if (Array.from(ying7.keys()).includes(`${friendsM}`)) {
          let cedbadcebfbfbfbcfecbcK: Array<any> = [510, 944];
          let statsnomoredataM = 4.0;
          let soundv = String.fromCharCode(118,105,100,101,111,101,110,99,100,115,112,95,97,95,50,0);
         friendsM += (3 & (libreanimatedw ? 2 : 1));
         cedbadcebfbfbfbcfecbcK = [parseInt(`${statsnomoredataM}`)];
         statsnomoredataM -= parseFloat(`${parseInt(`${statsnomoredataM}`) ^ 3}`);
         soundv = `${(soundv == String.fromCharCode(71,0) ? soundv.length : parseInt(`${statsnomoredataM}`))}`;
      }
      suggestionf = `${parseInt(`${albumB}`) / (Math.max(login0.size, 8))}`;
        setIsFullScreen(true);

      login0.set(shirtJ, shirtJ.length);
   while (2 >= (parseInt(`${defaultteamV}`) + yingy.length) || (2 + parseInt(`${defaultteamV}`)) >= 3) {
       let promotionC = 2.0;
       let downloadere = 3;
       let dialog_: Array<any> = [445, 194];
       let iconorientationl = String.fromCharCode(121,95,55,56,95,99,111,108,111,114,113,117,97,110,116,0);
       let teamdetailsbgx: Array<any> = [434, 191];
          let renewe = String.fromCharCode(122,95,57,55,95,103,101,111,109,101,116,114,121,0);
         teamdetailsbgx = [teamdetailsbgx.length << (Math.min(Math.abs(1), 1))];
         renewe = `${renewe.length}`;
      let blackY = 8660673 <= downloadere;
      do {
          let guidew = 5.0;
         downloadere %= Math.max(2, teamdetailsbgx.length / (Math.max(2, parseInt(`${guidew}`))));
         if (blackY) {
            break;
         }
      } while ((2 >= (downloadere % 2) && 2 >= (dialog_.length % (Math.max(2, 9)))) && blackY);
       let mimoF = String.fromCharCode(121,95,51,55,95,115,116,117,100,105,111,0);
       let episodesT = String.fromCharCode(117,95,55,53,95,104,97,115,104,116,97,103,0);
          let e_hash9 = false;
         mimoF = `${parseInt(`${promotionC}`) | downloadere}`;
         e_hash9 = (!e_hash9 ? !e_hash9 : e_hash9);
      if (downloadere > 5) {
          let shirtp: Map<any, any> = new Map([[String.fromCharCode(102,115,101,101,107,95,99,95,56,55,0),true ], [String.fromCharCode(107,95,50,54,95,103,105,103,97,103,114,111,117,112,0),false ]]);
         downloadere &= iconorientationl.length | teamdetailsbgx.length;
         shirtp.set(`${shirtp.size}`, shirtp.size / 3);
      }
          let renewl = 3.0;
          let iconarrowrightorangep = false;
          let mbjscommonV = true;
         dialog_ = [3 / (Math.max(parseInt(`${promotionC}`), 10))];
         renewl /= Math.max((parseFloat(`${parseInt(`${renewl}`) + (iconarrowrightorangep ? 1 : 4)}`)), 3);
         iconarrowrightorangep = !mbjscommonV || iconarrowrightorangep;
         mbjscommonV = !mbjscommonV;
          let condensed9: Map<any, any> = new Map([[String.fromCharCode(117,115,114,99,95,121,95,52,55,0),850], [String.fromCharCode(118,112,108,97,121,101,114,95,103,95,55,49,0),543]]);
         downloadere |= iconorientationl.length;
         condensed9 = new Map([[`${condensed9.size}`, condensed9.size]]);
      let tinit_lT = dialog_.length >= 8888947;
      do {
          let aboutZ = 3;
          let libimagepipelinev = String.fromCharCode(116,95,50,53,95,99,117,114,108,121,0);
          let g_lock7 = 4.0;
          let googlep = String.fromCharCode(112,114,111,112,101,114,95,102,95,50,0);
         dialog_.push(parseInt(`${promotionC}`) + 3);
         aboutZ <<= Math.min(Math.abs(3 + aboutZ), 3);
         libimagepipelinev = `${libimagepipelinev.length - 3}`;
         g_lock7 /= Math.max((googlep == String.fromCharCode(65,0) ? aboutZ : googlep.length), 2);
         if (tinit_lT) {
            break;
         }
      } while (tinit_lT && (iconorientationl.includes(`${dialog_.length}`)));
          let banner0 = 3.0;
          let schedulerm = 1;
         iconorientationl = `${parseInt(`${banner0}`) * parseInt(`${promotionC}`)}`;
         banner0 += schedulerm >> (Math.min(Math.abs(schedulerm), 1));
      let upgradeK = iconorientationl.length <= 7308880;
      do {
         iconorientationl = "2";
         if (upgradeK) {
            break;
         }
      } while (upgradeK && (!iconorientationl.endsWith(`${teamdetailsbgx.length}`)));
      while (1 < (mimoF.length % (Math.max(2, 3)))) {
         mimoF += `${teamdetailsbgx.length}`;
         break;
      }
         teamdetailsbgx = [mimoF.length];
      let liveE = downloadere >= 8703964;
      do {
         downloadere -= iconorientationl.length / 1;
         if (liveE) {
            break;
         }
      } while (((downloadere ^ mimoF.length) >= 1 || (mimoF.length ^ 1) >= 2) && liveE);
      let imagemanagerZ = 8246829 <= mimoF.length;
      do {
         mimoF = `${teamdetailsbgx.length - 2}`;
         if (imagemanagerZ) {
            break;
         }
      } while (imagemanagerZ && (episodesT != mimoF));
          let yellowscoreballe = 0.0;
          let suggestionE = 0;
          let graphicsw: Map<any, any> = new Map([[String.fromCharCode(112,95,57,0),236], [String.fromCharCode(120,95,54,51,95,112,114,111,99,101,101,100,0),841], [String.fromCharCode(116,95,56,51,0),715]]);
         downloadere *= downloadere;
         yellowscoreballe -= parseFloat(`${parseInt(`${yellowscoreballe}`)}`);
         suggestionE |= 2;
         graphicsw = new Map([[`${graphicsw.size}`, suggestionE]]);
      defaultteamV *= parseInt(`${penaltyt}`) / (Math.max(1, 10));
      break;
   }
   for (let p = 0; p < 1; p++) {
      suggestionf = `${yingy.length << (Math.min(Math.abs(2), 1))}`;
   }
   if (!shirtJ.endsWith(`${login0.size}`)) {
      shirtJ += `${mintegralh.length}`;
   }
        

      shirtJ = `${parseInt(`${penaltyt}`) | thumbnail3.length}`;
   while (parseInt(`${defaultteamV}`) >= statisticsE.size) {
      defaultteamV /= Math.max(3, 3);
      break;
   }
      suggestionf += `${parseInt(`${penaltyt}`) + 2}`;
       let notificationr = String.fromCharCode(113,95,55,52,95,102,116,118,110,115,0);
       let eventi: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,112,101,100,95,116,95,56,51,0),830], [String.fromCharCode(103,95,54,54,95,97,116,114,97,99,97,108,0),656], [String.fromCharCode(118,95,54,52,95,112,114,111,116,111,0),109]]);
       let connection4 = 5.0;
      let libswscale5 = 5266860 >= eventi.size;
      do {
         eventi.set(`${notificationr}`, 3 + notificationr.length);
         if (libswscale5) {
            break;
         }
      } while (((eventi.size & notificationr.length) <= 1 && (1 & notificationr.length) <= 5) && libswscale5);
         eventi = new Map([[`${eventi.size}`, notificationr.length]]);
      while (5 <= (notificationr.length | 4)) {
          let recommendationF = true;
          let owngoalW = true;
          let morei = String.fromCharCode(109,95,51,50,95,115,105,103,105,108,108,0);
          let blackD: Map<any, any> = new Map([[String.fromCharCode(113,95,49,50,95,107,101,121,98,117,102,0),true ], [String.fromCharCode(121,95,56,53,95,105,109,97,103,101,114,111,116,97,116,101,0),true ], [String.fromCharCode(115,117,98,116,114,97,99,116,95,49,95,51,55,0),false ]]);
          let nendD = 4.0;
         connection4 *= parseInt(`${connection4}`);
         recommendationF = (78 < ((owngoalW ? 78 : morei.length) % (Math.max(morei.length, 7))));
         owngoalW = !recommendationF;
         blackD = new Map([[`${owngoalW}`, ((recommendationF ? 5 : 2) ^ 1)]]);
         nendD /= Math.max(1, parseInt(`${nendD}`));
         break;
      }
      let whitevideoliveT = String.fromCharCode(100,57,102,48,117,113,103,0) == notificationr;
      do {
         notificationr = `${notificationr.length / 3}`;
         if (whitevideoliveT) {
            break;
         }
      } while (((notificationr.length >> (Math.min(Math.abs(2), 1))) > 4) && whitevideoliveT);
      for (let q = 0; q < 3; q++) {
          let with_p9 = String.fromCharCode(99,111,114,101,105,109,97,103,101,95,109,95,51,49,0);
          let gifti = true;
          let vignette0 = String.fromCharCode(116,95,56,54,95,112,97,114,115,101,0);
         connection4 *= with_p9.length % (Math.max(2, 4));
         with_p9 += `${vignette0.length - 2}`;
         gifti = !gifti && vignette0.length >= 13;
      }
         connection4 -= notificationr.length;
      if (1 > (notificationr.length + 1) && 2.44 > (5.22 - connection4)) {
          let vignette1 = String.fromCharCode(122,95,53,95,116,104,101,0);
          let mbridgeB = true;
          let dependenciesS = 5.0;
          let defaultplayerimg9 = String.fromCharCode(117,105,100,95,52,95,56,50,0);
          let security9: Map<any, any> = new Map([[String.fromCharCode(116,95,54,52,95,97,120,112,0),961], [String.fromCharCode(105,110,115,116,114,95,109,95,57,0),689]]);
         notificationr = `${((mbridgeB ? 1 : 2) << (Math.min(notificationr.length, 1)))}`;
         vignette1 += `${(String.fromCharCode(71,0) == defaultplayerimg9 ? parseInt(`${dependenciesS}`) : defaultplayerimg9.length)}`;
         mbridgeB = parseInt(`${dependenciesS}`) == vignette1.length;
         security9 = new Map([[`${security9.size}`, parseInt(`${dependenciesS}`) / 3]]);
      }
         connection4 *= 3 * eventi.size;
      if ((notificationr.length % 4) <= 4 || (eventi.size % 4) <= 2) {
          let abidetectk = true;
         notificationr += `${((abidetectk ? 5 : 3) / (Math.max(parseInt(`${connection4}`), 10)))}`;
      }
      shirtJ += `${statisticsE.size ^ 2}`;
        StatusBar.setHidden(true);

      sportI = new Map([[suggestionf, (String.fromCharCode(95,0) == suggestionf ? suggestionf.length : parseInt(`${penaltyt}`))]]);
   if (2 > sportI.size) {
       let libavfilter7 = 3;
       let selection9 = String.fromCharCode(110,95,53,55,95,101,112,101,108,0);
       let point3 = 5.0;
      while (4 == (5 - libavfilter7) || (point3 * 1.50) == 5.41) {
          let blacklistr = 0;
          let uploadm = String.fromCharCode(121,95,55,53,95,103,111,101,114,108,105,0);
          let leakcheckerJ: Array<any> = [569, 341];
          let plusN = true;
          let footballM = String.fromCharCode(122,95,55,49,95,97,99,116,105,118,97,116,105,111,110,0);
         point3 -= parseFloat(`${2 << (Math.min(4, footballM.length))}`);
         blacklistr += (String.fromCharCode(52,0) == uploadm ? blacklistr : uploadm.length);
         leakcheckerJ.push(blacklistr);
         plusN = uploadm == String.fromCharCode(107,0);
         footballM += `${uploadm.length & 2}`;
         break;
      }
         libavfilter7 >>= Math.min(Math.abs((String.fromCharCode(75,0) == selection9 ? selection9.length : parseInt(`${point3}`))), 4);
       let telegram9 = 1;
       let cornershootw = 0;
          let promotionT = String.fromCharCode(112,101,97,99,104,95,115,95,49,0);
          let main_xA = 2.0;
          let bufferg = String.fromCharCode(99,97,117,116,101,114,105,122,101,95,102,95,51,55,0);
         cornershootw >>= Math.min(Math.abs(parseInt(`${point3}`) & selection9.length), 1);
         promotionT = `${promotionT.length}`;
         main_xA /= Math.max(4, parseFloat(`${bufferg.length}`));
         bufferg = `${promotionT.length & 2}`;
          let dialoga = String.fromCharCode(116,101,115,115,101,108,108,97,116,101,95,122,95,51,56,0);
          let zhubo5 = true;
          let anytimew: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,99,112,114,105,118,97,116,101,95,107,95,51,53,0),355], [String.fromCharCode(115,119,105,116,99,104,98,97,115,101,95,115,95,49,57,0),745]]);
         telegram9 <<= Math.min(Math.abs(((zhubo5 ? 5 : 4) ^ parseInt(`${point3}`))), 1);
         dialoga = `${2 + anytimew.size}`;
         zhubo5 = anytimew.size <= 83;
          let detailW = 5;
          let mbridgel = true;
          let iconsubssuccess8 = true;
         telegram9 += telegram9 / 2;
         detailW /= Math.max(2, detailW);
         mbridgel = 57 >= detailW;
         iconsubssuccess8 = iconsubssuccess8 || mbridgel;
      if (4.76 == (libavfilter7 - point3)) {
         point3 /= Math.max(parseFloat(`${selection9.length}`), 3);
      }
      let sina2 = point3 <= 5356247.0;
      do {
         point3 *= parseFloat(`${2 >> (Math.min(4, selection9.length))}`);
         if (sina2) {
            break;
         }
      } while ((point3 > cornershootw) && sina2);
      if (4 > (selection9.length ^ libavfilter7) || 4 > (selection9.length ^ libavfilter7)) {
         selection9 = `${selection9.length >> (Math.min(5, Math.abs(libavfilter7)))}`;
      }
      sportI = new Map([[`${libswresampleK.length}`, libswresampleK.length - 3]]);
   }
       let agreement_ = 4;
      while (2 > (agreement_ % 1) || 1 > (agreement_ % (Math.max(1, 2)))) {
          let wind3: Array<any> = [409, 821, 383];
         agreement_ %= Math.max(agreement_, 1);
         wind3 = [wind3.length - wind3.length];
         break;
      }
      for (let w = 0; w < 1; w++) {
         agreement_ ^= agreement_ * 3;
      }
      if ((agreement_ >> (Math.min(3, Math.abs(agreement_)))) <= 1) {
         agreement_ <<= Math.min(2, Math.abs(agreement_));
      }
      albumB /= Math.max(3, 1);
       let rewind1 = String.fromCharCode(116,95,55,51,95,115,117,98,108,101,110,103,116,104,0);
       let megaphone_: Map<any, any> = new Map([[String.fromCharCode(115,95,49,56,95,108,111,103,102,110,0),37], [String.fromCharCode(102,114,101,113,117,101,110,99,121,95,50,95,55,55,0),327]]);
       let room6: Map<any, any> = new Map([[String.fromCharCode(121,95,52,49,95,109,111,110,107,101,121,0),889], [String.fromCharCode(112,95,54,55,95,100,105,115,99,111,110,116,105,103,117,111,117,115,0),568]]);
      while (rewind1.endsWith(`${megaphone_.size}`)) {
         megaphone_ = new Map([[`${megaphone_.size}`, 3]]);
         break;
      }
         megaphone_ = new Map([[`${room6.size}`, megaphone_.size]]);
         room6 = new Map([[`${megaphone_.size}`, megaphone_.size << (Math.min(Math.abs(3), 1))]]);
      while (3 == (4 & room6.size)) {
          let searchbarq: Map<any, any> = new Map([[String.fromCharCode(98,95,54,51,95,107,105,108,108,0),452], [String.fromCharCode(105,110,100,105,110,103,95,48,95,54,54,0),529], [String.fromCharCode(101,110,99,97,112,95,109,95,54,48,0),985]]);
          let knews0: Array<any> = [434, 184, 133];
          let orangedownarrowz = false;
          let networkS = 3.0;
         megaphone_ = new Map([[rewind1, parseInt(`${networkS}`) >> (Math.min(rewind1.length, 4))]]);
         searchbarq.set(`${orangedownarrowz}`, knews0.length);
         knews0 = [2 + searchbarq.size];
         networkS -= 3;
         break;
      }
      if ((rewind1.length + 4) <= 1 || (rewind1.length + room6.size) <= 4) {
         rewind1 += "3";
      }
         rewind1 += `${megaphone_.size * 1}`;
      let gmailH = rewind1.length <= 8685511;
      do {
         rewind1 += `${megaphone_.size << (Math.min(rewind1.length, 1))}`;
         if (gmailH) {
            break;
         }
      } while (gmailH && (5 > (2 % (Math.max(9, rewind1.length))) || 2 > (megaphone_.size % (Math.max(rewind1.length, 1)))));
         room6 = new Map([[`${megaphone_.size}`, 2 >> (Math.min(3, Math.abs(room6.size)))]]);
      if ((rewind1.length & 5) < 5 || (megaphone_.size & rewind1.length) < 5) {
          let eighteen5 = 1.0;
          let leakcheckerY: Array<any> = [42, 508, 593];
          let iconlogoutG = 4.0;
          let fastforwardf = 5;
         megaphone_ = new Map([[rewind1, rewind1.length]]);
         eighteen5 *= leakcheckerY.length ^ parseInt(`${iconlogoutG}`);
         leakcheckerY.push(parseInt(`${iconlogoutG}`) + 3);
         fastforwardf %= Math.max(4, 3);
      }
      statisticsE.set(`${shirtJ}`, sportI.size | shirtJ.length);

        lockOrientation(devicesOrientation);
      } else if (devicesOrientation === "PORTRAIT") {

       let sinay = false;
      if (!sinay || !sinay) {
         sinay = (!sinay ? sinay : sinay);
      }
      if (sinay && !sinay) {
         sinay = sinay && sinay;
      }
          let statisticsZ = String.fromCharCode(101,114,97,115,117,114,101,95,117,95,50,48,0);
          let currentz: Map<any, any> = new Map([[String.fromCharCode(102,95,52,48,95,116,114,121,0),924], [String.fromCharCode(100,110,115,95,117,95,55,56,0),548]]);
         sinay = 59 <= currentz.size;
         statisticsZ += `${statisticsZ.length >> (Math.min(Math.abs(1), 2))}`;
         currentz.set(statisticsZ, statisticsZ.length - 1);
      suggestionf += `${shirtJ.length}`;
   let descj = 7656971 <= login0.size;
   do {
      login0.set(thumbnail3, parseInt(`${defaultteamV}`) + thumbnail3.length);
      if (descj) {
         break;
      }
   } while (descj && (Array.from(login0.values()).includes(defaultteamV)));
      rewardvideo3 /= Math.max(login0.size | rewardvideo3, 3);
      defaultteamV /= Math.max(2, sportI.size);
        setIsFullScreen(false);

      libswresampleK = [3 | thumbnail3.length];
   while ((3 & yingy.length) == 5 || (yingy.length & sportI.size) == 3) {
       let a_unlockf = String.fromCharCode(99,112,112,108,105,110,116,95,99,95,51,49,0);
       let librrcT: Array<any> = [934, 792, 80];
       let package_wX = 0;
       let typesl: Array<any> = [585, 928];
      while ((typesl.length >> (Math.min(Math.abs(2), 2))) == 1) {
          let iconfeedbackE: Map<any, any> = new Map([[String.fromCharCode(110,97,118,105,103,97,116,101,100,95,49,95,56,49,0),910], [String.fromCharCode(122,95,51,56,95,97,116,99,104,0),280]]);
          let gradlewD: Map<any, any> = new Map([[String.fromCharCode(115,95,51,50,95,118,101,114,115,105,111,110,115,0),false ], [String.fromCharCode(100,101,108,111,99,97,116,101,95,104,95,56,54,0),false ]]);
         typesl = [2];
         iconfeedbackE.set(`${iconfeedbackE.size}`, iconfeedbackE.size);
         gradlewD = new Map([[`${iconfeedbackE.size}`, iconfeedbackE.size]]);
         break;
      }
      if ((typesl.length | package_wX) > 4 && 4 > (4 | typesl.length)) {
         package_wX += 3 - a_unlockf.length;
      }
         typesl = [librrcT.length >> (Math.min(1, Math.abs(package_wX)))];
         typesl = [2];
       let scheduler8: Map<any, any> = new Map([[String.fromCharCode(109,95,54,52,95,102,105,110,97,108,108,121,0),String.fromCharCode(111,95,54,52,95,98,97,114,0)], [String.fromCharCode(110,112,112,115,99,97,108,101,95,116,95,53,50,0),String.fromCharCode(99,111,109,109,97,110,100,115,95,57,95,57,0)], [String.fromCharCode(99,95,54,56,95,99,111,109,98,0),String.fromCharCode(98,95,57,49,95,99,104,97,112,0)]]);
       let bufferO: Map<any, any> = new Map([[String.fromCharCode(121,95,49,54,95,112,111,119,0),25], [String.fromCharCode(111,95,54,54,95,112,105,112,101,0),207], [String.fromCharCode(98,95,52,50,95,109,99,111,109,112,97,110,100,0),398]]);
       let turnI = 1.0;
          let floaterr: Array<any> = [300, 268, 465];
          let read5 = String.fromCharCode(109,97,116,104,95,118,95,53,54,0);
          let backward9: Array<any> = [219, 315, 14];
         typesl.push(3 / (Math.max(8, package_wX)));
         floaterr = [(String.fromCharCode(70,0) == read5 ? backward9.length : read5.length)];
         backward9.push(read5.length);
         typesl = [scheduler8.size];
      if ((turnI * 5.67) >= 5.12) {
         package_wX -= bufferO.size >> (Math.min(Math.abs(3), 2));
      }
       let emojiZ = String.fromCharCode(115,99,104,109,95,115,95,54,49,0);
       let fast2 = String.fromCharCode(106,95,52,54,95,109,111,110,116,104,0);
          let yellowscoreballN: Array<any> = [35, 242];
         bufferO.set(`${scheduler8.size}`, bufferO.size);
         yellowscoreballN = [1 % (Math.max(10, yellowscoreballN.length))];
      while (a_unlockf == emojiZ) {
         emojiZ = `${a_unlockf.length | package_wX}`;
         break;
      }
      yingy += `${librrcT.length}`;
      break;
   }
   while (4 >= (shirtJ.length + libswresampleK.length) || (4 + shirtJ.length) >= 2) {
      shirtJ += `${shirtJ.length % (Math.max(2, parseInt(`${defaultteamV}`)))}`;
      break;
   }
      statisticsE = new Map([[yingy, yingy.length]]);
        

      sportI = new Map([[`${mintegralh.length}`, mintegralh.length]]);
   if (defaultteamV < 4.18) {
      defaultteamV -= (shirtJ == String.fromCharCode(78,0) ? parseInt(`${penaltyt}`) : shirtJ.length);
   }
   for (let s = 0; s < 3; s++) {
      thumbnail3 += `${(String.fromCharCode(79,0) == shirtJ ? sportI.size : shirtJ.length)}`;
   }
   while ((4.78 * albumB) >= 4.76) {
      login0 = new Map([[`${sportI.size}`, 2 / (Math.max(9, sportI.size))]]);
      break;
   }
        StatusBar.setHidden(false);

      albumB /= Math.max((String.fromCharCode(83,0) == shirtJ ? thumbnail3.length : shirtJ.length), 2);
      statisticsE = new Map([[`${libswresampleK.length}`, yingy.length]]);
   for (let o = 0; o < 2; o++) {
      login0 = new Map([[`${sportI.size}`, parseInt(`${penaltyt}`)]]);
   }
   for (let a = 0; a < 2; a++) {
      defaultteamV *= libswresampleK.length;
   }

        lockOrientation(devicesOrientation);
      }
    };

    const onToggleFullScreen = useCallback(() => {
       let membershipY = true;
    let share3 = 4.0;
    let stringsT: Array<any> = [148, 678, 678];
    let linkM = String.fromCharCode(114,101,106,101,99,116,105,111,110,115,95,105,95,51,50,0);
    let penaltymatchiconQ = 1.0;
    let videovarV: Array<any> = [149, 744, 983];
    let release_5_j = 2.0;
    let runtime6 = 3;
    let cornershootw = false;
    let iconwatchnowj: Array<any> = [658, 481];
    let stations_: Array<any> = [824, 608];
      stringsT = [1];
   let questq = 8594416 <= videovarV.length;
   do {
       let goallogoY = true;
       let minivodx = false;
       let hookT = 5;
          let cornerkickJ: Map<any, any> = new Map([[String.fromCharCode(103,95,55,55,95,100,105,97,103,110,111,115,116,105,99,0),false ], [String.fromCharCode(104,95,56,95,109,97,116,120,0),false ]]);
          let j_playerR = true;
         hookT ^= (cornerkickJ.size * (j_playerR ? 5 : 2));
      let iconpipexpandG = hookT <= 6170345;
      do {
         hookT &= (1 ^ (minivodx ? 4 : 4));
         if (iconpipexpandG) {
            break;
         }
      } while ((goallogoY) && iconpipexpandG);
      let sideK = hookT <= 8141890;
      do {
          let graphJ = String.fromCharCode(114,101,112,97,114,101,100,95,100,95,55,53,0);
         hookT ^= 3;
         graphJ = "3";
         if (sideK) {
            break;
         }
      } while ((minivodx) && sideK);
      while (hookT >= 5) {
         minivodx = !goallogoY;
         break;
      }
      for (let e = 0; e < 2; e++) {
         hookT *= 1;
      }
         minivodx = (goallogoY ? minivodx : !goallogoY);
      if (1 >= hookT) {
         hookT -= ((goallogoY ? 1 : 1));
      }
          let spinnerO: Array<any> = [741, 242];
          let actiond = true;
          let libtoby = String.fromCharCode(101,95,53,54,95,110,111,116,105,102,105,101,115,0);
         goallogoY = (82 > ((actiond ? 82 : libtoby.length) + libtoby.length));
         spinnerO = [spinnerO.length & 2];
         actiond = spinnerO.length <= 1;
         goallogoY = (!goallogoY ? !minivodx : goallogoY);
      videovarV.push(parseInt(`${share3}`) - 3);
      if (questq) {
         break;
      }
   } while ((release_5_j >= 2.79) && questq);

      if (
        appOrientation === "LANDSCAPE-LEFT" ||
        appOrientation === "LANDSCAPE-RIGHT"
      ) {

       let soundY = 2.0;
       let transferz = 5;
      if ((transferz + 2) > 1) {
         transferz >>= Math.min(1, Math.abs(parseInt(`${soundY}`)));
      }
      for (let a = 0; a < 3; a++) {
          let userm = 0.0;
          let qaagt: Array<any> = [463, 3];
          let iconarrowlefth = 3;
          let fullP: Map<any, any> = new Map([[String.fromCharCode(116,95,53,48,95,115,121,110,99,104,114,111,110,105,122,101,100,0),558], [String.fromCharCode(106,112,101,103,116,114,97,110,95,56,95,49,50,0),349]]);
         soundY -= iconarrowlefth;
         userm /= Math.max(1, parseFloat(`${parseInt(`${userm}`)}`));
         qaagt = [fullP.size];
         iconarrowlefth &= qaagt.length;
         fullP.set(`${userm}`, 2);
      }
      while (soundY <= transferz) {
         soundY *= parseInt(`${soundY}`);
         break;
      }
         soundY *= 3 % (Math.max(7, parseInt(`${soundY}`)));
         soundY += transferz >> (Math.min(Math.abs(parseInt(`${soundY}`)), 3));
      for (let o = 0; o < 2; o++) {
         transferz ^= parseInt(`${soundY}`);
      }
      linkM = "1";
      stringsT = [videovarV.length << (Math.min(1, Math.abs(parseInt(`${share3}`))))];
        lockOrientation("PORTRAIT");

   while ((linkM.length % 4) > 5 || (4 << (Math.min(2, linkM.length))) > 2) {
      linkM += `${parseInt(`${share3}`) * linkM.length}`;
      break;
   }
   if (!membershipY || 2 >= (videovarV.length << (Math.min(Math.abs(4), 4)))) {
      videovarV = [videovarV.length];
   }
        setIsFullScreen(false);

   if (5 <= stringsT.length) {
      stringsT = [3 | parseInt(`${penaltymatchiconQ}`)];
   }
      membershipY = share3 <= 92.19;
        

   let benefitw = membershipY ? !membershipY : membershipY;
   do {
       let mbbids = 0;
       let hooksL = 1.0;
       let injuryu = 3;
       let savea: Array<any> = [716, 919, 858];
      let elementsz = 7384087 >= savea.length;
      do {
         savea.push(savea.length);
         if (elementsz) {
            break;
         }
      } while ((!savea.includes(hooksL)) && elementsz);
       let bottomf = false;
      if ((5 + savea.length) <= 5) {
         savea = [((bottomf ? 4 : 1) ^ mbbids)];
      }
      for (let p = 0; p < 1; p++) {
         hooksL /= Math.max(3 | injuryu, 4);
      }
      let graphq = injuryu <= 7534885;
      do {
         injuryu |= (mbbids | (bottomf ? 3 : 3));
         if (graphq) {
            break;
         }
      } while (graphq && ((injuryu + parseInt(`${hooksL}`)) == 4 && 4.81 == (1.36 + hooksL)));
      while (4 == injuryu) {
         injuryu %= Math.max(injuryu % (Math.max(parseInt(`${hooksL}`), 4)), 1);
         break;
      }
      if (!bottomf) {
          let shrinkO: Map<any, any> = new Map([[String.fromCharCode(111,95,50,51,95,109,97,105,110,100,98,0),true ], [String.fromCharCode(103,95,50,50,95,118,105,109,101,111,0),false ], [String.fromCharCode(112,114,101,116,99,104,95,122,95,52,55,0),false ]]);
          let iconrightorange5 = String.fromCharCode(114,111,116,97,116,105,111,110,97,110,103,108,101,95,105,95,49,56,0);
          let typesW = String.fromCharCode(110,95,56,55,95,114,101,108,97,121,115,0);
         bottomf = shrinkO.size <= 3;
         shrinkO = new Map([[typesW, iconrightorange5.length ^ typesW.length]]);
         iconrightorange5 = `${2 + typesW.length}`;
      }
      for (let u = 0; u < 2; u++) {
         hooksL -= savea.length | parseInt(`${hooksL}`);
      }
      while (savea.length >= 5 && (5 + savea.length) >= 3) {
         bottomf = hooksL >= 84.72;
         break;
      }
          let template_xfQ: Map<any, any> = new Map([[String.fromCharCode(114,101,109,117,120,101,114,95,104,95,57,0),839], [String.fromCharCode(98,95,48,95,117,110,99,108,97,109,112,101,100,0),974], [String.fromCharCode(110,95,53,95,104,101,97,118,121,0),131]]);
          let flipperi: Map<any, any> = new Map([[String.fromCharCode(108,95,49,51,95,100,101,116,101,114,109,105,110,101,100,0),76], [String.fromCharCode(99,111,100,101,114,115,95,99,95,56,57,0),636]]);
          let shootT = String.fromCharCode(99,95,51,50,95,98,105,110,116,101,120,116,0);
         hooksL /= Math.max(flipperi.size % (Math.max(1, injuryu)), 2);
         template_xfQ.set(`${shootT}`, template_xfQ.size);
         flipperi = new Map([[`${template_xfQ.size}`, (shootT == String.fromCharCode(55,0) ? shootT.length : template_xfQ.size)]]);
         savea.push(mbbids & 3);
         injuryu &= injuryu >> (Math.min(savea.length, 2));
      membershipY = String.fromCharCode(111,0) == linkM;
      if (benefitw) {
         break;
      }
   } while (benefitw && (3.40 > release_5_j && (3.40 * release_5_j) > 1.9));
      share3 += parseFloat(`${2}`);
        StatusBar.setHidden(false);

      membershipY = 65 >= stringsT.length || penaltymatchiconQ >= 49.79;
      linkM += "2";

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "portrait" });
        }
      } else {

   let basketballplayerplaceholderV = stringsT.length >= 5043337;
   do {
      stringsT = [((membershipY ? 2 : 1) & runtime6)];
      if (basketballplayerplaceholderV) {
         break;
      }
   } while ((!stringsT.includes(share3)) && basketballplayerplaceholderV);
   for (let x = 0; x < 1; x++) {
      membershipY = 18.63 >= share3;
   }
        lockOrientation("LANDSCAPE");

   let libruntimeexecutorc = runtime6 <= 6758403;
   do {
      runtime6 -= (linkM == String.fromCharCode(86,0) ? linkM.length : stringsT.length);
      if (libruntimeexecutorc) {
         break;
      }
   } while ((1 >= (runtime6 * 3)) && libruntimeexecutorc);
       let giftbuttonK = 4;
      if (1 < (giftbuttonK & giftbuttonK)) {
         giftbuttonK -= giftbuttonK;
      }
      let unimplementedviewD = giftbuttonK >= 7950680;
      do {
         giftbuttonK *= giftbuttonK;
         if (unimplementedviewD) {
            break;
         }
      } while (unimplementedviewD && (giftbuttonK < 5));
      let accepted_ = 5655463 >= giftbuttonK;
      do {
          let teamdetailsbgx = String.fromCharCode(101,95,54,48,95,115,117,98,100,97,116,97,0);
         giftbuttonK %= Math.max(3, giftbuttonK);
         teamdetailsbgx = `${teamdetailsbgx.length - 1}`;
         if (accepted_) {
            break;
         }
      } while ((2 <= (giftbuttonK - 5) && 5 <= (giftbuttonK - giftbuttonK)) && accepted_);
      share3 += parseFloat(`${videovarV.length * parseInt(`${penaltymatchiconQ}`)}`);
        setIsFullScreen(true);

      runtime6 >>= Math.min(1, stringsT.length);
      penaltymatchiconQ -= parseInt(`${share3}`);
        

   for (let f = 0; f < 2; f++) {
      cornershootw = runtime6 <= 32;
   }
   if (2.86 > (penaltymatchiconQ - share3) || 1.80 > (2.86 - penaltymatchiconQ)) {
       let downloadings = String.fromCharCode(116,111,108,101,114,97,110,99,101,95,57,95,50,49,0);
       let routero = String.fromCharCode(117,110,114,101,103,105,115,116,101,114,101,100,95,56,95,57,57,0);
         routero = `${downloadings.length}`;
         downloadings += `${(String.fromCharCode(70,0) == downloadings ? downloadings.length : routero.length)}`;
         downloadings = `${downloadings.length ^ routero.length}`;
      if (routero == downloadings) {
         downloadings = `${downloadings.length}`;
      }
      while (downloadings.length <= 2) {
          let internetB = 1.0;
          let foregroundw = 1;
          let connectiond = String.fromCharCode(115,107,101,119,95,109,95,55,0);
         downloadings = `${3 ^ connectiond.length}`;
         internetB += foregroundw % (Math.max(8, parseInt(`${internetB}`)));
         foregroundw *= foregroundw * 2;
         connectiond += "3";
         break;
      }
      while (downloadings != String.fromCharCode(75,0) || routero != String.fromCharCode(86,0)) {
         routero += `${downloadings.length % (Math.max(2, 1))}`;
         break;
      }
      penaltymatchiconQ -= runtime6 >> (Math.min(Math.abs(parseInt(`${penaltymatchiconQ}`)), 4));
   }
        StatusBar.setHidden(true);

   let libjsir = 9653593.0 >= release_5_j;
   do {
      release_5_j *= (parseFloat(`${iconwatchnowj.length >> (Math.min(1, Math.abs((cornershootw ? 2 : 3))))}`));
      if (libjsir) {
         break;
      }
   } while ((4.95 > (release_5_j / (Math.max(parseFloat(`${stringsT.length}`), 8)))) && libjsir);
       let uploadH = true;
         uploadH = !uploadH;
      let animationj = uploadH ? !uploadH : uploadH;
      do {
         uploadH = !uploadH;
         if (animationj) {
            break;
         }
      } while ((!uploadH || uploadH) && animationj);
         uploadH = !uploadH;
      membershipY = 7.33 >= share3;

        if (Platform.OS === "android") {
          navigation.setOptions({ orientation: "landscape" });
        }
      }
    }, [isFullScreen, appOrientation]);

    const onVideoLoaded = (data: any) => {
      setDuration(data.duration);
      if (currentTimeRef) {
        currentTimeRef.current = data.currentTime;
      }
      if (videoPlayerRef.current) {
        videoPlayerRef.current.seek(initialStartTime);
      }
    };

    const onSeek = (time: number) => {
      hideSeekProgress();
      time = Math.min(Math.max(time, 0), duration);
      try {
        if (videoPlayerRef.current && !isNaN(time)) {
          videoPlayerRef.current.seek(time);
          setCurrentTime(time);
        }
      } catch (err) {
       let containerV = String.fromCharCode(115,117,98,109,111,100,101,108,115,95,54,95,53,49,0);
    let attributedstringm = true;
    let iconuserA = String.fromCharCode(106,95,52,51,95,116,97,107,101,0);
    let iconarrowleftO = 5.0;
    let elementsF = String.fromCharCode(114,95,55,56,95,104,97,100,0);
    let iconpipexpandh = 2.0;
    let common9 = String.fromCharCode(120,95,57,55,95,100,105,118,105,100,105,110,103,0);
    let selectedi = String.fromCharCode(114,111,116,111,95,117,95,55,55,0);
    let v_unlockY = 1;
    let defaultplayerimgD = true;
    let unimplementedviewM = String.fromCharCode(98,95,54,53,95,109,99,111,109,112,0);
    let floatingP = 4.0;
    let topict = 5.0;
    let weibo0 = 0.0;
    let iconclosewhitebg3 = String.fromCharCode(112,105,101,99,101,119,105,115,101,95,55,95,52,52,0);
    let textW = String.fromCharCode(118,111,116,101,100,95,50,95,51,56,0);
    let homeloadingC = false;
    let mimev = String.fromCharCode(102,95,54,48,95,100,105,100,0);
   if (selectedi.includes(`${iconarrowleftO}`)) {
       let select4 = 3;
       let homey = String.fromCharCode(98,95,49,56,95,114,101,109,97,112,112,105,110,103,0);
       let internetF: Map<any, any> = new Map([[String.fromCharCode(112,104,121,115,105,99,97,108,95,56,95,54,56,0),827], [String.fromCharCode(116,101,114,109,105,110,97,116,105,111,110,95,115,95,51,51,0),286]]);
      let whiteanimationliveb = select4 >= 8372540;
      do {
         select4 += homey.length;
         if (whiteanimationliveb) {
            break;
         }
      } while (whiteanimationliveb && ((homey.length - select4) <= 1 || 1 <= (1 - select4)));
         select4 -= 2 * select4;
      if (internetF.size >= 1) {
         homey += `${select4 & 1}`;
      }
         homey = "2";
      while (homey.startsWith(`${select4}`)) {
         select4 |= (homey == String.fromCharCode(113,0) ? select4 : homey.length);
         break;
      }
          let firebaseV = String.fromCharCode(116,114,97,99,107,101,114,95,107,95,49,56,0);
          let videojsW = String.fromCharCode(114,95,56,95,114,105,100,0);
          let closek = 3;
         select4 *= 2;
         firebaseV = "3";
         videojsW += `${firebaseV.length / (Math.max(4, closek))}`;
         closek += 3 / (Math.max(2, firebaseV.length));
       let subtextC = String.fromCharCode(99,95,54,52,95,110,97,109,101,0);
       let pointo = String.fromCharCode(106,95,54,55,0);
       let notificationfillemptyc = String.fromCharCode(106,95,50,50,95,115,119,97,112,0);
       let serviceJ = String.fromCharCode(116,95,53,50,95,115,109,104,100,0);
      selectedi += "3";
   }
   if ((5 / (Math.max(3, parseInt(`${iconpipexpandh}`)))) == 3 && 5.44 == (iconpipexpandh / (Math.max(10, iconuserA.length)))) {
      iconpipexpandh *= parseInt(`${topict}`);
   }
      elementsF = `${(3 + (defaultplayerimgD ? 1 : 5))}`;
   while (iconarrowleftO >= 4.6 || 1.37 >= (iconarrowleftO - 4.6)) {
      defaultplayerimgD = (unimplementedviewM.length - parseInt(`${floatingP}`)) <= 21;
      break;
   }
      topict += unimplementedviewM.length ^ 3;
       let sentryL: Array<any> = [918, 121, 498];
       let interstitiale = String.fromCharCode(121,95,57,49,95,97,108,98,117,109,115,0);
       let loginb = 4.0;
       let zhengpiani = String.fromCharCode(106,95,50,95,115,101,110,100,118,0);
       let termsh = String.fromCharCode(103,95,53,56,95,108,111,119,112,97,115,115,0);
         interstitiale = `${parseInt(`${loginb}`) >> (Math.min(Math.abs(3), 4))}`;
         interstitiale = `${termsh.length | interstitiale.length}`;
      while (interstitiale.length < zhengpiani.length) {
          let cedbadcebfbfbfbcfecbcX = String.fromCharCode(115,117,98,109,105,116,95,50,95,51,53,0);
          let spinnern = 0;
          let playlistL = String.fromCharCode(117,95,49,50,95,108,105,98,111,112,101,110,106,112,101,103,0);
          let leagueM = 3.0;
          let splashi = String.fromCharCode(105,110,112,117,116,120,95,106,95,57,48,0);
         zhengpiani += `${interstitiale.length | 3}`;
         cedbadcebfbfbfbcfecbcX += `${(String.fromCharCode(67,0) == playlistL ? playlistL.length : spinnern)}`;
         spinnern *= (playlistL == String.fromCharCode(89,0) ? spinnern : playlistL.length);
         leagueM /= Math.max(3, parseFloat(`${parseInt(`${leagueM}`) * 3}`));
         splashi = `${spinnern}`;
         break;
      }
      if (2 < (2 / (Math.max(9, interstitiale.length))) || 3 < (interstitiale.length % 2)) {
          let mbbannera = 0.0;
          let executorh = 5.0;
          let upgrade3: Array<any> = [504, 103];
          let attributedstringJ = 1.0;
         interstitiale = `${sentryL.length - 3}`;
         mbbannera += upgrade3.length;
         executorh -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${attributedstringJ}`)), 2))}`);
         upgrade3 = [parseInt(`${attributedstringJ}`)];
      }
      for (let d = 0; d < 1; d++) {
         interstitiale = `${termsh.length}`;
      }
         interstitiale += "2";
      let codeF = 6737044 <= zhengpiani.length;
      do {
         zhengpiani = `${termsh.length & 3}`;
         if (codeF) {
            break;
         }
      } while (codeF && (termsh.length == 5));
      if (2 > (parseInt(`${loginb}`) + sentryL.length) || (2 << (Math.min(3, sentryL.length))) > 4) {
         sentryL = [3];
      }
      topict /= Math.max(interstitiale.length << (Math.min(Math.abs(1), 1)), 1);
      attributedstringm = selectedi == String.fromCharCode(113,0);
   for (let h = 0; h < 2; h++) {
      elementsF += `${unimplementedviewM.length << (Math.min(5, selectedi.length))}`;
   }
      defaultplayerimgD = !attributedstringm;
   if (defaultplayerimgD) {
       let teamdetailsbgM = 1.0;
          let gradlewp = 5;
          let yellowscoreball0 = false;
          let firebaser = 0.0;
         teamdetailsbgM += parseInt(`${firebaser}`) >> (Math.min(3, Math.abs(1)));
         gradlewp ^= 1 / (Math.max(gradlewp, 10));
         yellowscoreball0 = !yellowscoreball0;
         firebaser /= Math.max(parseFloat(`${2}`), 3);
      for (let w = 0; w < 3; w++) {
         teamdetailsbgM *= parseInt(`${teamdetailsbgM}`);
      }
      for (let a = 0; a < 1; a++) {
         teamdetailsbgM -= parseInt(`${teamdetailsbgM}`) / (Math.max(parseInt(`${teamdetailsbgM}`), 7));
      }
      iconpipexpandh -= ((defaultplayerimgD ? 1 : 1) >> (Math.min(Math.abs(v_unlockY), 3)));
   }
   while (!defaultplayerimgD) {
      defaultplayerimgD = unimplementedviewM.length < 44 && 87.70 < topict;
      break;
   }
   while (1 == (selectedi.length / (Math.max(4, parseInt(`${topict}`))))) {
      topict /= Math.max(2, 2 / (Math.max(parseInt(`${iconpipexpandh}`), 2)));
      break;
   }
      defaultplayerimgD = 82 > iconuserA.length;
   let flyer5 = common9.length >= 7659982;
   do {
      common9 = `${iconuserA.length}`;
      if (flyer5) {
         break;
      }
   } while ((common9.length <= iconarrowleftO) && flyer5);
   while (2.92 < (floatingP + 2.87) || 5 < (2 | selectedi.length)) {
       let humidityx = String.fromCharCode(114,101,97,100,95,54,95,55,48,0);
       let plashe = 1.0;
       let singaporeb = 5.0;
      if (5.36 == (2 / (Math.max(7, singaporeb)))) {
         plashe += parseFloat(`${3}`);
      }
      let sharem = 8374805.0 >= plashe;
      do {
         plashe -= parseFloat(`${3 - parseInt(`${plashe}`)}`);
         if (sharem) {
            break;
         }
      } while (sharem && (humidityx.endsWith(`${plashe}`)));
         singaporeb *= parseInt(`${plashe}`);
      if (plashe > 4.22) {
          let vipsportH = String.fromCharCode(99,95,55,55,95,97,114,99,104,105,118,101,100,0);
          let libjsif = String.fromCharCode(109,111,110,111,98,108,97,99,107,95,109,95,55,48,0);
          let fieldo: Array<any> = [424, 968, 89];
         plashe *= parseFloat(`${1}`);
         vipsportH = `${(libjsif == String.fromCharCode(77,0) ? libjsif.length : fieldo.length)}`;
         fieldo = [libjsif.length];
      }
         plashe -= parseFloat(`${parseInt(`${singaporeb}`) << (Math.min(3, Math.abs(2)))}`);
      while (2.77 >= (plashe + singaporeb)) {
         singaporeb *= parseInt(`${plashe}`) & 2;
         break;
      }
         humidityx = `${3 - humidityx.length}`;
       let pressuree = String.fromCharCode(117,110,100,111,95,102,95,55,0);
      let iconarrowrightS = 9211186 >= humidityx.length;
      do {
         humidityx += `${(String.fromCharCode(82,0) == humidityx ? humidityx.length : parseInt(`${singaporeb}`))}`;
         if (iconarrowrightS) {
            break;
         }
      } while (iconarrowrightS && (singaporeb >= 3.30));
      floatingP /= Math.max(3, 2 >> (Math.min(1, iconuserA.length)));
      break;
   }
       let icontransferclubX = 2.0;
       let path2: Array<any> = [322, 272, 382];
      let mimoi = path2.length <= 5078610;
      do {
         path2.push(path2.length);
         if (mimoi) {
            break;
         }
      } while ((path2.includes(icontransferclubX)) && mimoi);
         icontransferclubX /= Math.max(parseFloat(`${parseInt(`${icontransferclubX}`) * path2.length}`), 3);
      let subinL = path2.length <= 6804627;
      do {
         path2 = [path2.length];
         if (subinL) {
            break;
         }
      } while (subinL && (icontransferclubX == parseFloat(`${path2.length}`)));
       let panglee = 5.0;
       let description_cbt = 2.0;
      let codegenM = 8600250 <= path2.length;
      do {
          let exampleimageq: Array<any> = [196, 549, 535];
          let entryj: Map<any, any> = new Map([[String.fromCharCode(101,95,51,48,95,115,121,115,114,97,110,100,0),String.fromCharCode(113,95,52,50,95,99,111,108,108,97,116,101,0)], [String.fromCharCode(116,95,55,49,95,98,97,99,107,116,114,97,99,101,0),String.fromCharCode(102,95,57,95,115,101,116,116,105,109,101,111,117,116,0)], [String.fromCharCode(118,95,49,48,48,95,116,101,120,105,112,111,100,0),String.fromCharCode(116,111,107,101,95,99,95,56,48,0)]]);
         path2 = [path2.length << (Math.min(1, Math.abs(parseInt(`${panglee}`))))];
         exampleimageq.push(exampleimageq.length + 3);
         entryj = new Map([[`${entryj.size}`, 3 & entryj.size]]);
         if (codegenM) {
            break;
         }
      } while ((1 > (path2.length % 2)) && codegenM);
          let icontransferclubn = String.fromCharCode(110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,95,104,95,50,54,0);
         panglee -= parseFloat(`${3 % (Math.max(9, parseInt(`${panglee}`)))}`);
         icontransferclubn += `${icontransferclubn.length}`;
      selectedi = `${unimplementedviewM.length}`;
   if (v_unlockY > iconuserA.length) {
       let temperatureA = String.fromCharCode(105,95,54,57,95,108,111,110,103,0);
       let moonm = String.fromCharCode(115,95,54,56,95,110,101,117,116,114,97,108,0);
       let type_vx: Map<any, any> = new Map([[String.fromCharCode(121,95,49,48,95,114,101,99,111,103,110,105,122,101,114,0),987], [String.fromCharCode(106,95,52,49,95,112,97,115,115,98,0),671], [String.fromCharCode(104,95,54,48,95,104,97,114,100,116,104,114,101,115,104,0),887]]);
       let iconsharefriendsX = String.fromCharCode(108,95,54,50,95,101,120,97,110,100,101,100,0);
       let baiduP = 1.0;
      for (let k = 0; k < 1; k++) {
         baiduP -= iconsharefriendsX.length;
      }
         type_vx = new Map([[iconsharefriendsX, 1]]);
       let page6 = String.fromCharCode(118,99,100,97,116,97,95,55,95,53,54,0);
      if (!iconsharefriendsX.endsWith(`${baiduP}`)) {
         iconsharefriendsX = `${3 + temperatureA.length}`;
      }
      if (2 > (5 & temperatureA.length)) {
         baiduP *= iconsharefriendsX.length;
      }
          let libfollyh = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,95,56,95,48,0);
          let downloadK = 1;
          let catagorya = String.fromCharCode(109,95,54,49,95,98,101,114,114,105,101,115,0);
         type_vx = new Map([[`${type_vx.size}`, type_vx.size]]);
         libfollyh += "2";
         downloadK += 2 & catagorya.length;
         catagorya = `${catagorya.length - 2}`;
      let renderL = 7406231 >= page6.length;
      do {
         page6 += "3";
         if (renderL) {
            break;
         }
      } while ((page6.includes(temperatureA)) && renderL);
      let memberG = baiduP >= 5203089.0;
      do {
         baiduP += moonm.length >> (Math.min(iconsharefriendsX.length, 3));
         if (memberG) {
            break;
         }
      } while ((!temperatureA.startsWith(`${baiduP}`)) && memberG);
         page6 += `${2 - page6.length}`;
      for (let q = 0; q < 1; q++) {
          let optionsW = 3.0;
          let firebaseR = String.fromCharCode(116,116,116,95,121,95,56,48,0);
          let l_title0 = String.fromCharCode(105,95,51,49,95,105,110,116,101,114,110,0);
          let pingE = String.fromCharCode(107,95,53,95,110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,0);
          let ping3: Map<any, any> = new Map([[String.fromCharCode(100,101,99,114,101,97,115,101,95,57,95,56,52,0),431], [String.fromCharCode(113,95,54,49,0),535]]);
         type_vx = new Map([[`${ping3.size}`, 2]]);
         optionsW /= Math.max(parseFloat(`${parseInt(`${optionsW}`) - 2}`), 1);
         firebaseR += `${firebaseR.length ^ l_title0.length}`;
         l_title0 += `${(String.fromCharCode(112,0) == l_title0 ? parseInt(`${optionsW}`) : l_title0.length)}`;
         pingE += `${2 - l_title0.length}`;
         ping3 = new Map([[l_title0, l_title0.length]]);
      }
         type_vx.set(`${baiduP}`, parseInt(`${baiduP}`) % (Math.max(3, 1)));
         page6 = `${parseInt(`${baiduP}`)}`;
         iconsharefriendsX += `${3 & moonm.length}`;
      let mapbufferQ = page6 == String.fromCharCode(104,120,49,105,102,113,56,114,122,0);
      do {
         page6 = `${(page6 == String.fromCharCode(55,0) ? parseInt(`${baiduP}`) : page6.length)}`;
         if (mapbufferQ) {
            break;
         }
      } while (mapbufferQ && (page6.endsWith(`${baiduP}`)));
      if (moonm.length == 3) {
         moonm += `${1 ^ iconsharefriendsX.length}`;
      }
      iconuserA += `${containerV.length}`;
   }
      attributedstringm = iconpipexpandh < 81.48 || v_unlockY < 77;
   while (parseInt(`${iconarrowleftO}`) >= common9.length) {
      iconarrowleftO -= parseInt(`${floatingP}`) * selectedi.length;
      break;
   }
      iconpipexpandh *= elementsF.length;
      topict *= ((defaultplayerimgD ? 5 : 5) & 2);
       let icondefaultthumbnailP = 2.0;
       let const_pfi = 0.0;
       let castingw: Map<any, any> = new Map([[String.fromCharCode(105,109,112,108,101,109,101,110,116,115,95,53,95,53,49,0),741], [String.fromCharCode(104,95,49,49,0),610], [String.fromCharCode(97,108,108,111,99,97,116,101,100,95,106,95,52,54,0),126]]);
         const_pfi *= parseFloat(`${parseInt(`${const_pfi}`) * 3}`);
         castingw.set(`${const_pfi}`, parseInt(`${const_pfi}`) / (Math.max(castingw.size, 2)));
          let iconbackwhitev = 2.0;
         const_pfi /= Math.max(parseFloat(`${1}`), 2);
         iconbackwhitev -= parseFloat(`${parseInt(`${iconbackwhitev}`)}`);
      let leaguedetailsbgt = castingw.size >= 5133198;
      do {
         castingw.set(`${icondefaultthumbnailP}`, castingw.size % (Math.max(9, parseInt(`${icondefaultthumbnailP}`))));
         if (leaguedetailsbgt) {
            break;
         }
      } while (leaguedetailsbgt && (!Array.from(castingw.values()).includes(const_pfi)));
          let profilepic0 = String.fromCharCode(115,105,122,101,109,109,95,111,95,55,54,0);
         const_pfi *= parseFloat(`${parseInt(`${icondefaultthumbnailP}`) - parseInt(`${const_pfi}`)}`);
         profilepic0 = `${(String.fromCharCode(52,0) == profilepic0 ? profilepic0.length : profilepic0.length)}`;
      let foregroundM = 9022162.0 >= const_pfi;
      do {
         const_pfi -= parseFloat(`${2 | castingw.size}`);
         if (foregroundM) {
            break;
         }
      } while (foregroundM && ((const_pfi + icondefaultthumbnailP) == 4.97));
         const_pfi -= parseFloat(`${parseInt(`${icondefaultthumbnailP}`)}`);
          let iconwatchS = true;
          let libjsijniprofilerV = String.fromCharCode(107,101,121,102,114,97,109,101,115,95,119,95,52,54,0);
          let defaultlogot: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,114,97,116,111,114,95,122,95,52,54,0),904], [String.fromCharCode(114,95,56,56,95,99,104,117,110,107,121,99,104,117,110,107,121,0),100]]);
         icondefaultthumbnailP += parseFloat(`${parseInt(`${icondefaultthumbnailP}`)}`);
         iconwatchS = 79 >= defaultlogot.size;
         libjsijniprofilerV = `${libjsijniprofilerV.length}`;
         defaultlogot.set(`${iconwatchS}`, 3);
       let bellb = 1.0;
      iconclosewhitebg3 += "1";
      floatingP += (common9 == String.fromCharCode(97,0) ? parseInt(`${weibo0}`) : common9.length);
   let pathD = 9463952 <= selectedi.length;
   do {
      selectedi = `${containerV.length}`;
      if (pathD) {
         break;
      }
   } while ((!selectedi.startsWith(`${floatingP}`)) && pathD);
   if (1.27 >= (weibo0 - containerV.length)) {
       let yellowtoredY = String.fromCharCode(118,97,114,121,95,120,95,57,48,0);
       let whistleorangev: Map<any, any> = new Map([[String.fromCharCode(111,95,49,56,95,115,116,114,111,107,101,100,0),519], [String.fromCharCode(97,108,105,97,115,95,110,95,50,51,0),420]]);
       let viewsz = String.fromCharCode(100,105,103,105,116,99,111,117,110,116,95,115,95,57,50,0);
          let emojik = String.fromCharCode(110,97,110,111,115,118,103,95,49,95,54,53,0);
          let unticky = String.fromCharCode(116,95,57,52,95,115,117,110,114,105,115,101,0);
          let rankj = 3;
         whistleorangev = new Map([[`${whistleorangev.size}`, emojik.length ^ 2]]);
         emojik += `${unticky.length}`;
         unticky += `${unticky.length}`;
         rankj <<= Math.min(Math.abs(rankj % 1), 2);
      for (let l = 0; l < 3; l++) {
         whistleorangev = new Map([[`${whistleorangev.size}`, yellowtoredY.length]]);
      }
      if (4 > (whistleorangev.size >> (Math.min(yellowtoredY.length, 1)))) {
         whistleorangev = new Map([[`${whistleorangev.size}`, (viewsz == String.fromCharCode(52,0) ? viewsz.length : whistleorangev.size)]]);
      }
      let smallorangeman7 = 5319877 <= whistleorangev.size;
      do {
          let zcopy__V = String.fromCharCode(115,117,98,108,97,121,101,114,115,95,97,95,51,0);
         whistleorangev = new Map([[`${whistleorangev.size}`, 2]]);
         zcopy__V += `${(zcopy__V == String.fromCharCode(79,0) ? zcopy__V.length : zcopy__V.length)}`;
         if (smallorangeman7) {
            break;
         }
      } while ((2 <= (5 * viewsz.length)) && smallorangeman7);
      if (2 < (viewsz.length | 2) && (viewsz.length | 2) < 4) {
          let refreshM = 0.0;
          let sheetd = String.fromCharCode(119,97,118,114,101,97,100,101,114,95,49,95,53,0);
          let scheduleu = 5.0;
          let logoC: Array<any> = [508, 629, 254];
         viewsz = `${sheetd.length >> (Math.min(Math.abs(3), 5))}`;
         refreshM /= Math.max(2, parseInt(`${scheduleu}`) << (Math.min(4, Math.abs(parseInt(`${refreshM}`)))));
         sheetd += `${3 * parseInt(`${scheduleu}`)}`;
         logoC.push(2);
      }
      for (let s = 0; s < 3; s++) {
         whistleorangev = new Map([[viewsz, viewsz.length * 1]]);
      }
         whistleorangev.set(`${viewsz}`, 1);
          let goalD = 2;
          let mbsplashM = String.fromCharCode(100,95,49,55,95,99,108,108,99,0);
          let orangek: Map<any, any> = new Map([[String.fromCharCode(116,105,101,114,115,95,120,95,55,52,0),77], [String.fromCharCode(112,95,56,49,95,117,110,103,114,111,117,112,0),740]]);
         whistleorangev = new Map([[`${whistleorangev.size}`, viewsz.length]]);
         goalD /= Math.max(5, orangek.size + 1);
         mbsplashM = `${orangek.size}`;
       let yellowz = false;
      weibo0 += parseInt(`${weibo0}`);
   }
   if (5.30 <= (iconarrowleftO * 4.49) || (iconpipexpandh - 4.49) <= 4.22) {
      iconpipexpandh *= 1;
   }

        console.log("Error!", err, time);
      }
    };

    const onSeekGesture = (time: number) => {
      if (currentTime < time) {
        setSeekDirection("frame_tTick");
      } else {
        setSeekDirection("scorepopsoundReport");
      }
      onSeek(time);
    };

    const onVideoProgessing = (data: any) => {
      setCurrentTime(data.currentTime);

      try {
        currentTimeRef.current = data.currentTime;
      } catch (err) {
       let tempnodataG = false;
    let notificationfillemptyW = String.fromCharCode(101,110,99,111,100,101,100,95,110,95,57,57,0);
    let iconscheduleN = String.fromCharCode(100,95,52,95,117,112,103,114,97,100,101,115,0);
    let videocommonh: Array<any> = [895, 492, 937];
    let predictionbuttonB = 1.0;
    let more9 = String.fromCharCode(97,103,101,110,116,115,95,116,95,55,50,0);
    let helperZ = String.fromCharCode(115,111,100,105,115,99,111,110,110,101,99,116,95,112,95,49,50,0);
    let textd: Array<any> = [777, 444, 41];
    let leftu = 2;
    let statsnomoredataN = 3.0;
    let iconlogoutc = String.fromCharCode(103,97,109,109,97,118,97,108,95,103,95,50,56,0);
   for (let f = 0; f < 2; f++) {
      videocommonh = [3 ^ more9.length];
   }
   let imagemanager5 = iconscheduleN == String.fromCharCode(57,56,51,117,101,113,113,101,106,117,0);
   do {
      iconscheduleN = `${iconscheduleN.length / 2}`;
      if (imagemanager5) {
         break;
      }
   } while ((more9.length <= iconscheduleN.length) && imagemanager5);
   for (let o = 0; o < 2; o++) {
       let libyogay = 5.0;
       let unselectedL = String.fromCharCode(105,95,51,49,95,109,111,110,116,0);
       let reactnativeultimatelistviews = 5.0;
       let iconU = String.fromCharCode(102,95,50,49,95,114,101,109,101,109,98,101,114,101,100,0);
          let loadingU = 3;
         unselectedL = "1";
         loadingU >>= Math.min(4, Math.abs(loadingU >> (Math.min(2, Math.abs(loadingU)))));
      for (let q = 0; q < 3; q++) {
         reactnativeultimatelistviews *= 1;
      }
          let homeloadingP = String.fromCharCode(119,95,55,54,95,113,117,111,116,101,100,0);
          let matchesq: Array<any> = [469, 738, 214];
          let tickD: Array<any> = [390, 462, 741];
         libyogay /= Math.max(parseFloat(`${2 << (Math.min(4, unselectedL.length))}`), 2);
         homeloadingP = `${3 | matchesq.length}`;
         matchesq.push(matchesq.length);
         tickD = [homeloadingP.length];
       let baseJ = 2.0;
       let securityZ = 3.0;
      for (let w = 0; w < 2; w++) {
         baseJ += parseFloat(`${1}`);
      }
          let diceL = 5.0;
          let halffieldimagen = String.fromCharCode(103,95,56,51,95,114,101,108,97,116,101,100,0);
          let rocketp = 1.0;
         baseJ /= Math.max(parseFloat(`${1}`), 4);
         diceL -= parseFloat(`${halffieldimagen.length}`);
         halffieldimagen += `${parseInt(`${diceL}`)}`;
         rocketp -= parseFloat(`${halffieldimagen.length}`);
         unselectedL += `${parseInt(`${securityZ}`) * unselectedL.length}`;
          let giftbuttonZ = 2.0;
          let subbasketballplayerM = 4.0;
          let e_positiong = String.fromCharCode(118,95,50,54,95,99,111,100,101,99,115,0);
         baseJ -= parseFloat(`${parseInt(`${securityZ}`)}`);
         giftbuttonZ *= parseInt(`${subbasketballplayerM}`);
         e_positiong += "3";
       let checkbox9 = String.fromCharCode(102,105,116,116,105,110,103,95,117,95,52,51,0);
       let libcxxcomponentsQ = String.fromCharCode(98,97,116,99,104,105,110,103,95,110,95,49,54,0);
         libyogay += parseFloat(`${libcxxcomponentsQ.length}`);
          let constantsH = 0;
          let signinupx: Map<any, any> = new Map([[String.fromCharCode(110,95,50,95,109,101,116,104,111,100,115,0),String.fromCharCode(114,95,55,54,95,98,101,116,116,101,114,0)], [String.fromCharCode(113,117,97,100,114,95,56,95,49,51,0),String.fromCharCode(116,95,50,56,95,109,111,118,101,0)]]);
         checkbox9 = `${libcxxcomponentsQ.length}`;
         constantsH >>= Math.min(Math.abs(3 ^ constantsH), 3);
         signinupx = new Map([[`${signinupx.size}`, constantsH >> (Math.min(Math.abs(signinupx.size), 5))]]);
         libcxxcomponentsQ = `${parseInt(`${reactnativeultimatelistviews}`) | 1}`;
      notificationfillemptyW = "3";
   }
   while ((notificationfillemptyW.length & 3) < 1 && 3 < (textd.length & notificationfillemptyW.length)) {
       let combine6 = 5.0;
       let libturbomodulejsijnid = true;
          let hoverx = 3.0;
          let feedbackK = 5;
          let register_5b3 = false;
         libturbomodulejsijnid = register_5b3;
         hoverx /= Math.max(3, feedbackK);
         feedbackK >>= Math.min(Math.abs(parseInt(`${hoverx}`) - 3), 3);
         combine6 -= parseInt(`${combine6}`) & 1;
      for (let f = 0; f < 1; f++) {
         combine6 += 2 * parseInt(`${combine6}`);
      }
       let nodeF = String.fromCharCode(105,109,100,99,116,95,119,95,56,50,0);
      for (let q = 0; q < 3; q++) {
         combine6 /= Math.max((String.fromCharCode(56,0) == nodeF ? nodeF.length : parseInt(`${combine6}`)), 3);
      }
         combine6 /= Math.max((String.fromCharCode(99,0) == nodeF ? nodeF.length : (libturbomodulejsijnid ? 2 : 5)), 3);
      textd = [(videocommonh.length & (tempnodataG ? 1 : 1))];
      break;
   }
      textd.push(videocommonh.length % (Math.max(helperZ.length, 8)));
   let desca = 6914385 >= videocommonh.length;
   do {
      videocommonh = [1 << (Math.min(1, Math.abs(parseInt(`${predictionbuttonB}`))))];
      if (desca) {
         break;
      }
   } while ((!videocommonh.includes(predictionbuttonB)) && desca);
   let episodeF = 5709029.0 >= predictionbuttonB;
   do {
      predictionbuttonB += parseFloat(`${more9.length}`);
      if (episodeF) {
         break;
      }
   } while ((5.83 >= predictionbuttonB && (predictionbuttonB - 5.83) >= 3.83) && episodeF);
      textd = [2];
   let telemetryd = tempnodataG ? !tempnodataG : tempnodataG;
   do {
      tempnodataG = 12.16 <= predictionbuttonB;
      if (telemetryd) {
         break;
      }
   } while (telemetryd && (!iconscheduleN.endsWith(`${tempnodataG}`)));
      helperZ += `${(notificationfillemptyW == String.fromCharCode(74,0) ? notificationfillemptyW.length : leftu)}`;
       let promotion1 = 1;
       let langkeyg = 2.0;
       let template_1L: Array<any> = [518, 292, 283];
       let viewery = String.fromCharCode(100,101,99,111,109,112,111,115,101,105,95,108,95,49,57,0);
       let libfbU: Array<any> = [382, 886];
       let calendarr = true;
       let greenW = false;
         viewery += `${((greenW ? 5 : 1) * 1)}`;
         viewery = `${1 * parseInt(`${langkeyg}`)}`;
      let gesturesf = promotion1 <= 6297996;
      do {
         promotion1 *= 1;
         if (gesturesf) {
            break;
         }
      } while (gesturesf && (1 >= (3 | viewery.length) || 3 >= (3 | promotion1)));
      let h_center4 = calendarr ? !calendarr : calendarr;
      do {
          let libfabricjnij = String.fromCharCode(107,95,53,52,95,100,105,118,105,100,101,114,115,0);
          let orientationR = 0.0;
          let libffmpegkit3 = String.fromCharCode(114,101,99,111,110,102,105,103,117,114,97,116,105,111,110,95,57,95,52,56,0);
          let renew6 = true;
          let moond = String.fromCharCode(101,120,116,101,110,100,101,100,95,97,95,56,0);
         calendarr = !calendarr;
         libfabricjnij += `${parseInt(`${orientationR}`) ^ 1}`;
         orientationR /= Math.max(4, (libffmpegkit3 == String.fromCharCode(49,0) ? libffmpegkit3.length : (renew6 ? 5 : 4)));
         renew6 = 63.49 <= orientationR;
         moond += `${libfabricjnij.length}`;
         if (h_center4) {
            break;
         }
      } while (h_center4 && (1.97 <= langkeyg));
      if (4 > viewery.length) {
          let bgvipsportP = 4;
         calendarr = template_1L.length == 82;
         bgvipsportP %= Math.max(1, bgvipsportP);
      }
          let description_36 = 2;
          let defaultroombgS = String.fromCharCode(114,101,99,118,118,95,54,95,55,52,0);
         libfbU = [1];
         description_36 >>= Math.min(1, Math.abs(description_36));
         defaultroombgS = `${description_36 - defaultroombgS.length}`;
      leftu %= Math.max(2, ((tempnodataG ? 3 : 1)));
       let vipsportc = 2.0;
         vipsportc *= parseFloat(`${3 | parseInt(`${vipsportc}`)}`);
         vipsportc -= parseFloat(`${2 ^ parseInt(`${vipsportc}`)}`);
      if (vipsportc <= 3.96) {
         vipsportc *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${vipsportc}`)), 5))}`);
      }
      textd = [(String.fromCharCode(111,0) == helperZ ? helperZ.length : textd.length)];
      textd = [(String.fromCharCode(113,0) == more9 ? parseInt(`${predictionbuttonB}`) : more9.length)];
      leftu >>= Math.min(Math.abs(3), 1);
   if ((leftu << (Math.min(textd.length, 1))) < 2 || (textd.length << (Math.min(Math.abs(2), 2))) < 4) {
       let headerG = 2.0;
       let iconwatchnowc = 0;
         headerG += parseInt(`${headerG}`) | iconwatchnowc;
          let defaultlogoE = 1.0;
         iconwatchnowc &= parseInt(`${headerG}`) + parseInt(`${defaultlogoE}`);
      let cornershootq = 4912877.0 <= headerG;
      do {
         headerG -= 1;
         if (cornershootq) {
            break;
         }
      } while (cornershootq && (2.7 <= (headerG - 5.40) && 5.40 <= (headerG - iconwatchnowc)));
          let slidery = 3.0;
          let bufferM = String.fromCharCode(100,95,55,51,95,112,97,115,116,101,108,0);
          let libflipper1 = 0.0;
         headerG /= Math.max(1 & bufferM.length, 5);
         slidery /= Math.max(parseInt(`${libflipper1}`) ^ parseInt(`${slidery}`), 1);
         bufferM += "1";
         libflipper1 -= parseInt(`${slidery}`) * parseInt(`${libflipper1}`);
       let animationsz: Array<any> = [593, 346];
         iconwatchnowc >>= Math.min(Math.abs(iconwatchnowc ^ 1), 2);
      leftu <<= Math.min(1, Math.abs(3 % (Math.max(8, iconscheduleN.length))));
   }
      videocommonh = [leftu * 3];
   while (!more9.endsWith(`${tempnodataG}`)) {
       let libfbO = 1;
       let holdera: Map<any, any> = new Map([[String.fromCharCode(114,116,115,112,95,99,95,53,52,0),245], [String.fromCharCode(114,100,101,108,116,97,95,115,95,55,57,0),557], [String.fromCharCode(108,95,49,53,95,99,111,110,116,101,110,116,115,0),761]]);
       let halffieldimageB: Map<any, any> = new Map([[String.fromCharCode(115,117,98,110,111,100,101,115,95,54,95,55,55,0),103], [String.fromCharCode(107,95,52,49,95,109,97,114,107,105,110,103,0),181], [String.fromCharCode(112,114,111,104,105,98,105,116,95,114,95,50,50,0),977]]);
       let zhengpiane = String.fromCharCode(114,95,49,48,95,97,114,99,104,105,118,101,0);
         zhengpiane = `${halffieldimageB.size - 1}`;
       let iconschedule4: Array<any> = [676, 210, 729];
       let china8: Array<any> = [583, 185];
       let configS = String.fromCharCode(117,95,56,52,95,115,108,111,112,0);
       let historyk = String.fromCharCode(112,97,114,97,108,108,97,120,95,106,95,50,54,0);
      if (!configS.includes(`${china8.length}`)) {
         china8 = [halffieldimageB.size];
      }
         configS = `${china8.length}`;
       let questh = String.fromCharCode(115,97,119,95,101,95,51,48,0);
       let libreactnativeblobt = String.fromCharCode(116,95,55,53,95,112,114,111,98,0);
       let libjsinspector0 = 3;
         iconschedule4.push(libfbO);
      if (Array.from(halffieldimageB.keys()).includes(`${iconschedule4.length}`)) {
          let soundI = false;
         iconschedule4 = [zhengpiane.length];
         soundI = !soundI;
      }
       let const_wu = 4.0;
       let fastforwardL = 1.0;
       let unimplementedviewI = String.fromCharCode(99,95,53,49,95,98,108,111,99,107,105,110,103,0);
      let verticalD = 6133444 <= iconschedule4.length;
      do {
         iconschedule4.push(2);
         if (verticalD) {
            break;
         }
      } while (verticalD && (1 <= (questh.length >> (Math.min(Math.abs(5), 5)))));
      tempnodataG = (holdera.size | notificationfillemptyW.length) == 23;
      break;
   }
       let iconlogouti = 2;
       let expired_ = 0.0;
       let rewardU = 5.0;
       let libavutilC: Map<any, any> = new Map([[String.fromCharCode(116,114,105,112,108,101,95,109,95,52,55,0),true ], [String.fromCharCode(108,105,98,120,95,108,95,51,55,0),true ], [String.fromCharCode(114,101,111,114,100,101,114,105,110,103,95,111,95,53,49,0),true ]]);
       let moviesy: Map<any, any> = new Map([[String.fromCharCode(97,95,52,55,95,114,101,112,108,97,121,101,100,0),489], [String.fromCharCode(110,111,105,115,101,115,95,113,95,52,48,0),727]]);
      let moonI = rewardU <= 7306873.0;
      do {
         rewardU /= Math.max(4, 2);
         if (moonI) {
            break;
         }
      } while (moonI && (expired_ == rewardU));
      while (rewardU <= 4.45) {
         rewardU /= Math.max(4, parseInt(`${expired_}`));
         break;
      }
          let modulesq = String.fromCharCode(99,111,109,112,108,101,116,101,100,95,115,95,50,50,0);
          let expired2 = String.fromCharCode(105,109,112,111,114,116,101,114,95,114,95,55,48,0);
         moviesy = new Map([[`${rewardU}`, 1]]);
         modulesq = `${(String.fromCharCode(49,0) == expired2 ? expired2.length : modulesq.length)}`;
         libavutilC.set(`${rewardU}`, 2 >> (Math.min(2, Math.abs(libavutilC.size))));
      while ((parseInt(`${expired_}`) - moviesy.size) >= 3) {
         expired_ *= parseFloat(`${iconlogouti + 1}`);
         break;
      }
          let containerK = true;
          let prediction4 = String.fromCharCode(112,114,101,116,119,105,100,100,108,101,95,97,95,54,55,0);
         iconlogouti ^= 1;
         containerK = !prediction4.startsWith(`${containerK}`);
         prediction4 = `${((containerK ? 3 : 2))}`;
         moviesy = new Map([[`${libavutilC.size}`, 1]]);
      let reddownarrowL = 6964485 <= iconlogouti;
      do {
         iconlogouti &= 1 + moviesy.size;
         if (reddownarrowL) {
            break;
         }
      } while (reddownarrowL && (5 > (1 << (Math.min(3, Math.abs(libavutilC.size)))) && (iconlogouti << (Math.min(Math.abs(libavutilC.size), 5))) > 1));
      leftu -= parseInt(`${statsnomoredataN}`);
      tempnodataG = parseFloat(`${textd.length}`) < statsnomoredataN;
      predictionbuttonB *= parseFloat(`${1}`);
      notificationfillemptyW = "1";

        console.error("crash here");
      }

      bufferRef.current = false;
    };

    const onSkip = (time: any) => {
      if (videoPlayerRef?.current) {
        if (time > 0 && isLastForward == false) {
          setIsLastForward(true);
          accumulatedSkip.current = 0;
        }

        if (time < 0 && isLastForward == true) {
          setIsLastForward(false);
          accumulatedSkip.current = 0;
        }

        accumulatedSkip.current += time;
        let currentTime = currentTimeRef.current + time;
        currentTime = Math.max(0, currentTime);
        currentTimeRef.current = currentTime;
        videoPlayerRef.current.seek(currentTime);
        setCurrentTime(currentTime);
      }
    };

    const onTogglePlayPause = () => {
       let models7: Map<any, any> = new Map([[String.fromCharCode(99,95,53,48,95,116,114,97,105,108,105,110,103,0),681], [String.fromCharCode(99,108,111,99,107,100,114,105,102,116,95,105,95,57,52,0),430], [String.fromCharCode(119,95,53,49,95,114,101,99,97,108,99,0),199]]);
    let langkeyu: Array<any> = [String.fromCharCode(101,95,51,95,115,100,97,108,108,111,99,120,0), String.fromCharCode(122,95,52,50,95,99,111,110,110,101,99,116,105,110,103,0), String.fromCharCode(117,110,115,111,108,118,101,100,95,119,95,56,0)];
    let logo5 = String.fromCharCode(112,97,115,115,112,104,114,97,115,101,95,57,95,56,0);
    let sourceb = 5.0;
    let viewerH = String.fromCharCode(98,95,53,51,95,115,99,104,101,109,101,115,0);
    let singleR = String.fromCharCode(98,117,99,107,101,116,95,103,95,54,51,0);
    let blackh = 3;
    let mbridgeU = true;
    let router0: Array<any> = [102, 884];
    let issubp = 2;
    let renderr = String.fromCharCode(111,95,53,56,95,118,109,100,118,105,100,101,111,0);
    let issubN = String.fromCharCode(100,99,97,100,115,112,95,108,95,50,54,0);
    let nbatrophy9 = String.fromCharCode(104,113,100,115,112,95,108,95,54,52,0);
   if (singleR.length > 3 || mbridgeU) {
      mbridgeU = viewerH.length < 3;
   }
   if (!Array.from(models7.values()).includes(router0.length)) {
       let configc = true;
       let favoriteA: Map<any, any> = new Map([[String.fromCharCode(104,95,50,51,95,109,101,97,115,117,114,105,110,103,0),450], [String.fromCharCode(109,95,57,50,95,114,101,115,111,108,118,0),88], [String.fromCharCode(97,95,49,50,95,116,101,114,109,105,110,97,116,105,110,103,0),680]]);
       let q_lockP: Array<any> = [String.fromCharCode(108,117,97,95,100,95,57,49,0), String.fromCharCode(121,95,51,54,95,100,97,112,0)];
         q_lockP.push(favoriteA.size);
      if ((2 ^ favoriteA.size) == 1) {
          let megaphoneJ = 1.0;
          let fullscreenmaxe: Array<any> = [909, 160, 155];
          let iconadslinkG = true;
          let iconclosewhitewithbgx = String.fromCharCode(115,99,97,108,101,100,99,111,110,118,111,108,118,101,95,122,95,50,52,0);
          let update_l_8 = String.fromCharCode(112,115,102,98,95,49,95,55,55,0);
         favoriteA = new Map([[`${q_lockP.length}`, q_lockP.length + 3]]);
         megaphoneJ += (parseFloat(`${String.fromCharCode(71,0) == iconclosewhitewithbgx ? fullscreenmaxe.length : iconclosewhitewithbgx.length}`));
         fullscreenmaxe = [1 ^ parseInt(`${megaphoneJ}`)];
         iconadslinkG = iconclosewhitewithbgx.length > fullscreenmaxe.length;
         update_l_8 += `${fullscreenmaxe.length & 2}`;
      }
      if (4 >= favoriteA.size) {
          let referreri = String.fromCharCode(121,95,52,48,95,97,100,108,101,114,0);
          let libruntimeexecutorb = true;
         favoriteA = new Map([[`${favoriteA.size}`, favoriteA.size]]);
         referreri += "2";
         libruntimeexecutorb = !libruntimeexecutorb;
      }
      if (2 == favoriteA.size) {
         configc = !configc;
      }
         favoriteA.set(`${configc}`, favoriteA.size);
      let yellowscoreballK = q_lockP.length >= 7650682;
      do {
         q_lockP.push(favoriteA.size % (Math.max(q_lockP.length, 10)));
         if (yellowscoreballK) {
            break;
         }
      } while (yellowscoreballK && (2 >= (favoriteA.size >> (Math.min(Math.abs(1), 1))) || 1 >= (q_lockP.length >> (Math.min(Math.abs(favoriteA.size), 5)))));
          let agreementA: Array<any> = [219, 947];
         configc = (((configc ? 61 : q_lockP.length) | q_lockP.length) == 61);
         agreementA.push(agreementA.length % 3);
          let report7 = 2.0;
          let refreshborderlessC = String.fromCharCode(100,95,57,55,95,102,105,108,101,119,114,105,116,101,115,116,114,101,97,109,0);
          let libreactj = true;
         q_lockP = [q_lockP.length ^ parseInt(`${report7}`)];
         report7 -= refreshborderlessC.length;
         refreshborderlessC += `${(refreshborderlessC == String.fromCharCode(56,0) ? refreshborderlessC.length : (libreactj ? 3 : 2))}`;
      if (configc) {
         q_lockP = [favoriteA.size];
      }
      models7 = new Map([[`${sourceb}`, singleR.length]]);
   }
      blackh -= singleR.length;
      sourceb *= 2;
      viewerH = `${models7.size | 3}`;
   while (1 >= blackh) {
       let telemetrym = String.fromCharCode(122,95,55,52,95,102,108,117,115,104,0);
       let leakcheckerb = 5.0;
       let servicey: Array<any> = [627, 435];
       let goalz = String.fromCharCode(115,117,98,109,105,116,116,101,100,95,48,95,55,48,0);
          let macau2 = String.fromCharCode(110,95,55,50,95,99,105,112,104,101,114,98,121,110,105,100,0);
          let shrinkg = String.fromCharCode(102,102,112,114,111,98,101,95,119,95,55,54,0);
         servicey.push(1);
         macau2 += `${1 - macau2.length}`;
         shrinkg += `${shrinkg.length * 2}`;
         leakcheckerb *= parseFloat(`${parseInt(`${leakcheckerb}`) / 2}`);
          let shrink3 = String.fromCharCode(99,95,50,57,95,99,111,112,121,0);
          let libavfilteri = false;
          let eventi = 0;
         telemetrym += `${telemetrym.length}`;
         shrink3 += `${shrink3.length}`;
         libavfilteri = eventi <= 92;
         eventi *= eventi;
      let string1 = 9158940.0 <= leakcheckerb;
      do {
         leakcheckerb /= Math.max(2, parseFloat(`${1 << (Math.min(1, goalz.length))}`));
         if (string1) {
            break;
         }
      } while (string1 && (5.27 == (3.67 * leakcheckerb)));
      while (goalz.endsWith(`${servicey.length}`)) {
         servicey = [servicey.length | 3];
         break;
      }
      if (1 < servicey.length) {
         leakcheckerb += (parseFloat(`${telemetrym == String.fromCharCode(120,0) ? telemetrym.length : servicey.length}`));
      }
         leakcheckerb /= Math.max(parseFloat(`${telemetrym.length % (Math.max(3, 6))}`), 2);
         servicey = [3 << (Math.min(5, goalz.length))];
         telemetrym = `${telemetrym.length}`;
       let subinH: Map<any, any> = new Map([[String.fromCharCode(107,108,97,121,116,110,95,103,95,54,0),580], [String.fromCharCode(102,95,49,52,95,112,97,115,112,0),148]]);
       let homeplayerr: Map<any, any> = new Map([[String.fromCharCode(100,100,116,115,95,52,95,52,53,0),521], [String.fromCharCode(101,95,49,50,95,100,101,98,117,103,103,105,110,103,0),976]]);
         telemetrym += `${goalz.length}`;
         servicey = [servicey.length];
      router0.push(1);
      break;
   }
   let embedr = mbridgeU ? !mbridgeU : mbridgeU;
   do {
      mbridgeU = 75 == router0.length;
      if (embedr) {
         break;
      }
   } while ((1 < viewerH.length) && embedr);
   if (5.57 < (logo5.length + sourceb) && (5 | logo5.length) < 5) {
       let castingP: Map<any, any> = new Map([[String.fromCharCode(101,110,100,95,113,95,51,57,0),571], [String.fromCharCode(105,95,56,52,95,105,110,105,116,97,108,105,122,101,0),749]]);
       let loadingJ = String.fromCharCode(97,95,57,52,95,105,102,105,108,116,101,114,0);
       let defaultteams = 0;
         castingP = new Map([[loadingJ, 3]]);
         loadingJ = "1";
         castingP = new Map([[`${defaultteams}`, defaultteams ^ loadingJ.length]]);
      while (loadingJ.startsWith(`${castingP.size}`)) {
          let gifgoalbgu = String.fromCharCode(116,95,53,54,95,100,100,116,115,0);
          let selectp = String.fromCharCode(100,95,51,54,95,112,114,101,102,101,114,101,110,99,101,115,0);
          let spec5: Map<any, any> = new Map([[String.fromCharCode(122,95,53,52,95,120,111,114,101,100,0),726], [String.fromCharCode(111,95,51,53,95,101,108,97,115,116,105,99,0),426], [String.fromCharCode(112,95,55,48,95,112,115,110,114,0),804]]);
          let static_pkY: Map<any, any> = new Map([[String.fromCharCode(114,116,114,101,101,110,111,100,101,95,116,95,51,57,0),String.fromCharCode(115,117,110,114,105,115,101,95,53,95,53,51,0)], [String.fromCharCode(99,95,52,55,95,105,111,115,117,114,102,97,99,101,0),String.fromCharCode(116,114,97,110,115,108,97,116,105,111,110,95,105,95,57,48,0)]]);
         castingP.set(`${loadingJ}`, (loadingJ == String.fromCharCode(102,0) ? spec5.size : loadingJ.length));
         gifgoalbgu = "1";
         selectp = `${gifgoalbgu.length}`;
         spec5 = new Map([[selectp, gifgoalbgu.length]]);
         static_pkY.set(`${selectp}`, static_pkY.size << (Math.min(selectp.length, 4)));
         break;
      }
         castingP = new Map([[`${castingP.size}`, (loadingJ == String.fromCharCode(52,0) ? castingP.size : loadingJ.length)]]);
      let shielddoneN = 6934674 >= defaultteams;
      do {
         defaultteams |= castingP.size + loadingJ.length;
         if (shielddoneN) {
            break;
         }
      } while (shielddoneN && (defaultteams <= 4));
      if (defaultteams > 4) {
         castingP.set(loadingJ, loadingJ.length ^ 1);
      }
         defaultteams /= Math.max(defaultteams / (Math.max(castingP.size, 6)), 3);
         defaultteams ^= defaultteams;
      logo5 += `${(logo5 == String.fromCharCode(119,0) ? (mbridgeU ? 4 : 1) : logo5.length)}`;
   }
   for (let y = 0; y < 2; y++) {
       let module0 = String.fromCharCode(99,95,50,53,95,105,110,100,101,112,101,110,100,101,110,116,0);
       let referrer7 = String.fromCharCode(102,95,55,55,95,104,115,99,97,108,101,114,0);
       let agreementx = 4.0;
         referrer7 = `${referrer7.length & 2}`;
         agreementx /= Math.max(parseInt(`${agreementx}`), 4);
      for (let x = 0; x < 2; x++) {
         referrer7 = `${parseInt(`${agreementx}`)}`;
      }
         module0 = `${parseInt(`${agreementx}`)}`;
          let floaterG: Array<any> = [618, 564];
          let guidee = String.fromCharCode(99,95,49,48,48,95,118,112,120,101,110,99,0);
          let controlst = String.fromCharCode(111,95,53,52,95,105,112,113,102,0);
         module0 = `${2 + floaterG.length}`;
         floaterG = [controlst.length];
         guidee = `${controlst.length}`;
         referrer7 = `${referrer7.length + 1}`;
         referrer7 = `${(module0 == String.fromCharCode(104,0) ? parseInt(`${agreementx}`) : module0.length)}`;
         referrer7 = `${parseInt(`${agreementx}`)}`;
         module0 = `${(referrer7 == String.fromCharCode(55,0) ? parseInt(`${agreementx}`) : referrer7.length)}`;
      router0.push(referrer7.length % (Math.max(3, 4)));
   }
       let giftbuttonV: Array<any> = [String.fromCharCode(118,95,52,53,95,97,117,116,104,111,114,105,122,101,0), String.fromCharCode(114,95,55,50,95,110,111,111,112,0)];
       let gradlewF = 1.0;
       let mbridgex = String.fromCharCode(109,95,53,57,95,112,97,115,115,116,104,114,111,117,103,104,0);
       let middlewareG = String.fromCharCode(112,114,111,112,111,115,97,108,115,95,121,95,54,52,0);
       let projectJ: Map<any, any> = new Map([[String.fromCharCode(116,95,50,53,95,104,121,112,111,116,104,101,115,101,115,0),String.fromCharCode(99,95,53,95,110,101,119,108,105,110,101,0)], [String.fromCharCode(121,95,54,56,95,117,100,116,97,0),String.fromCharCode(107,95,49,49,95,116,101,120,116,117,114,101,0)], [String.fromCharCode(101,120,101,99,117,116,105,111,110,95,53,95,49,51,0),String.fromCharCode(106,112,101,103,100,115,112,95,97,95,52,49,0)]]);
         giftbuttonV.push(middlewareG.length >> (Math.min(Math.abs(1), 4)));
         mbridgex += "2";
      while ((mbridgex.length << (Math.min(Math.abs(3), 1))) < 1 || (3 | mbridgex.length) < 4) {
         mbridgex = `${giftbuttonV.length - 2}`;
         break;
      }
      for (let d = 0; d < 1; d++) {
         gradlewF /= Math.max(parseFloat(`${mbridgex.length / 2}`), 1);
      }
      sourceb /= Math.max(5, 2);
       let filedy = false;
       let storeL = 4.0;
       let sharewhiteP: Map<any, any> = new Map([[String.fromCharCode(106,95,51,95,99,117,114,115,111,114,0),String.fromCharCode(111,112,116,95,53,95,50,52,0)], [String.fromCharCode(98,102,115,116,109,95,121,95,54,52,0),String.fromCharCode(116,120,102,109,95,112,95,52,52,0)]]);
      while (!filedy) {
         filedy = sharewhiteP.size >= 25 && storeL >= 38.31;
         break;
      }
      if (Array.from(sharewhiteP.keys()).includes(`${storeL}`)) {
         sharewhiteP.set(`${filedy}`, 1 ^ sharewhiteP.size);
      }
         sharewhiteP.set(`${storeL}`, parseInt(`${storeL}`));
      let closeF = 4913738 >= sharewhiteP.size;
      do {
         sharewhiteP = new Map([[`${sharewhiteP.size}`, sharewhiteP.size]]);
         if (closeF) {
            break;
         }
      } while (closeF && (2.64 <= storeL));
       let over3 = String.fromCharCode(112,111,115,101,95,108,95,53,56,0);
          let u_countz = true;
         filedy = 84 <= sharewhiteP.size;
         u_countz = !u_countz;
         filedy = !filedy;
         filedy = filedy && sharewhiteP.size <= 95;
      for (let w = 0; w < 1; w++) {
          let panglef = String.fromCharCode(116,95,51,52,95,108,111,99,107,0);
          let runtimeschedulerS = 2;
          let release_1C: Array<any> = [384, 189];
          let valuesc = String.fromCharCode(99,95,57,56,95,116,115,114,0);
          let sigmobz = false;
         sharewhiteP = new Map([[`${runtimeschedulerS}`, 3 - over3.length]]);
         panglef += `${(String.fromCharCode(86,0) == panglef ? panglef.length : release_1C.length)}`;
         runtimeschedulerS &= valuesc.length;
         release_1C.push((String.fromCharCode(117,0) == panglef ? valuesc.length : panglef.length));
         sigmobz = (release_1C.length ^ valuesc.length) >= 96;
      }
      langkeyu = [parseInt(`${storeL}`) % (Math.max(7, parseInt(`${sourceb}`)))];
   let otherQ = issubp <= 7185319;
   do {
      issubp >>= Math.min(5, Math.abs(blackh));
      if (otherQ) {
         break;
      }
   } while (otherQ && (2 >= issubp));
   if (3 == (langkeyu.length << (Math.min(Math.abs(5), 1))) || 1 == (langkeyu.length << (Math.min(Math.abs(5), 2)))) {
       let cross0: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,100,101,108,101,116,101,95,105,95,52,57,0),String.fromCharCode(100,110,115,110,97,109,101,95,120,95,49,54,0)], [String.fromCharCode(106,95,57,48,95,114,101,113,117,105,114,101,109,101,110,116,115,0),String.fromCharCode(99,117,98,101,100,95,49,95,53,52,0)], [String.fromCharCode(121,95,56,55,95,97,101,118,97,108,0),String.fromCharCode(110,111,97,108,108,111,99,95,114,95,52,52,0)]]);
       let qaagH = 5;
       let firebaseY = String.fromCharCode(114,101,115,105,100,117,101,95,99,95,52,51,0);
       let selected2 = String.fromCharCode(105,95,49,53,95,99,101,114,116,105,102,105,99,97,116,101,0);
       let collectionM = String.fromCharCode(114,101,115,116,97,114,116,95,107,95,50,49,0);
       let tempG = 5.0;
       let typess = 2.0;
         tempG *= parseFloat(`${selected2.length + 2}`);
      if ((qaagH / (Math.max(firebaseY.length, 2))) <= 3 || (qaagH / (Math.max(8, firebaseY.length))) <= 3) {
          let static_uH = 1.0;
         firebaseY += `${collectionM.length % 3}`;
         static_uH *= parseFloat(`${parseInt(`${static_uH}`) >> (Math.min(Math.abs(parseInt(`${static_uH}`)), 5))}`);
      }
      let gifgoalbgs = tempG >= 9174060.0;
      do {
         tempG -= parseFloat(`${cross0.size}`);
         if (gifgoalbgs) {
            break;
         }
      } while ((tempG <= 4.82) && gifgoalbgs);
         typess -= parseFloat(`${firebaseY.length * 3}`);
      for (let y = 0; y < 1; y++) {
          let icon8 = String.fromCharCode(116,95,54,52,95,112,114,111,98,105,110,103,0);
          let favoritev = 4;
         tempG += (parseFloat(`${collectionM == String.fromCharCode(51,0) ? collectionM.length : icon8.length}`));
         icon8 += `${2 - favoritev}`;
         favoritev &= favoritev | 3;
      }
      while (Array.from(cross0.keys()).includes(`${typess}`)) {
         typess -= parseFloat(`${3}`);
         break;
      }
      let fullscreenmax5 = firebaseY.length <= 6703859;
      do {
         firebaseY = `${firebaseY.length}`;
         if (fullscreenmax5) {
            break;
         }
      } while (fullscreenmax5 && (selected2.startsWith(`${firebaseY.length}`)));
      if (selected2 != String.fromCharCode(121,0)) {
          let uimanager7 = String.fromCharCode(97,98,101,108,95,55,95,51,56,0);
          let bridgeI: Map<any, any> = new Map([[String.fromCharCode(101,95,53,56,95,102,99,116,108,0),199], [String.fromCharCode(97,108,108,111,99,97,116,101,95,57,95,54,57,0),755], [String.fromCharCode(112,111,108,108,101,114,95,98,95,56,48,0),708]]);
          let awayicono: Map<any, any> = new Map([[String.fromCharCode(110,101,119,108,105,110,101,95,54,95,50,49,0),56], [String.fromCharCode(101,95,53,55,95,98,111,114,100,101,114,108,101,115,115,0),583]]);
          let iconclosewhitewithbgS: Map<any, any> = new Map([[String.fromCharCode(106,95,52,53,95,99,111,100,101,99,117,116,105,108,115,0),65], [String.fromCharCode(98,101,105,103,110,101,116,95,109,95,49,55,0),471], [String.fromCharCode(97,108,109,111,115,116,95,48,95,53,57,0),188]]);
         collectionM = `${awayicono.size << (Math.min(Math.abs(1), 3))}`;
         uimanager7 += `${bridgeI.size + 1}`;
         bridgeI = new Map([[`${bridgeI.size}`, iconclosewhitewithbgS.size << (Math.min(Math.abs(bridgeI.size), 4))]]);
         awayicono.set(uimanager7, bridgeI.size);
         iconclosewhitewithbgS.set(`${bridgeI.size}`, 2);
      }
      let klevinZ = collectionM.length >= 6532135;
      do {
         collectionM = `${cross0.size | 3}`;
         if (klevinZ) {
            break;
         }
      } while ((selected2 == collectionM) && klevinZ);
       let homeiconI = 5.0;
       let guide1 = 0.0;
      let greyarrowupy = qaagH >= 6425262;
      do {
         qaagH -= 2 ^ selected2.length;
         if (greyarrowupy) {
            break;
         }
      } while (greyarrowupy && ((4 >> (Math.min(2, Math.abs(qaagH)))) < 5 && (qaagH >> (Math.min(Math.abs(4), 2))) < 2));
      if ((tempG * guide1) < 4.44 && (4.44 * tempG) < 4.83) {
         guide1 -= parseFloat(`${parseInt(`${tempG}`)}`);
      }
      if (!collectionM.endsWith(`${tempG}`)) {
          let whiteV = 2.0;
          let mintegrali = false;
          let cedbadcebfbfbfbcfecbc8: Map<any, any> = new Map([[String.fromCharCode(111,95,55,95,98,115,111,108,117,116,101,0),69], [String.fromCharCode(108,95,56,57,95,111,112,101,110,0),923]]);
          let airbnbstarM: Map<any, any> = new Map([[String.fromCharCode(99,98,115,110,105,100,95,55,95,52,56,0),true ], [String.fromCharCode(102,95,53,49,95,97,117,116,111,99,111,109,109,105,116,0),false ]]);
          let clear7 = 5;
         collectionM += `${selected2.length}`;
         whiteV -= parseFloat(`${3 | cedbadcebfbfbfbcfecbc8.size}`);
         mintegrali = clear7 <= 72;
         cedbadcebfbfbfbcfecbc8.set(`${whiteV}`, (parseInt(`${whiteV}`) + (mintegrali ? 1 : 2)));
         airbnbstarM.set(`${clear7}`, cedbadcebfbfbfbcfecbc8.size);
      }
         homeiconI /= Math.max(1, parseFloat(`${3}`));
      langkeyu.push(qaagH);
   }
      sourceb -= 1 >> (Math.min(Math.abs(blackh), 2));
      mbridgeU = blackh > 99;
   for (let x = 0; x < 1; x++) {
      renderr += "1";
   }
      langkeyu = [router0.length];
   let canvas3 = 8182606 >= router0.length;
   do {
       let incidentp = 0.0;
       let mimeJ = String.fromCharCode(103,95,57,52,95,97,110,105,109,97,116,101,0);
       let p_centerD = String.fromCharCode(101,95,54,55,95,105,110,105,116,0);
      while (mimeJ == String.fromCharCode(72,0) || p_centerD != String.fromCharCode(49,0)) {
          let libglogH = 4.0;
          let chatV = false;
          let championn = 3.0;
         mimeJ = `${2 % (Math.max(4, parseInt(`${championn}`)))}`;
         libglogH /= Math.max((parseFloat(`${parseInt(`${libglogH}`) + (chatV ? 5 : 4)}`)), 5);
         chatV = 90.30 == libglogH;
         championn /= Math.max(parseFloat(`${2 * parseInt(`${libglogH}`)}`), 4);
         break;
      }
      let orientationj = p_centerD.length >= 8619617;
      do {
         p_centerD = `${p_centerD.length}`;
         if (orientationj) {
            break;
         }
      } while (orientationj && (mimeJ != String.fromCharCode(103,0) || 3 <= p_centerD.length));
      for (let e = 0; e < 2; e++) {
         incidentp /= Math.max(2 * parseInt(`${incidentp}`), 1);
      }
      if (!mimeJ.endsWith(`${incidentp}`)) {
          let iconqqK = true;
          let weiboV = 0.0;
         mimeJ += `${((iconqqK ? 4 : 3) * 2)}`;
         iconqqK = weiboV < 56.33 && weiboV < 56.33;
      }
         incidentp /= Math.max(1, parseInt(`${incidentp}`) | 3);
         p_centerD += `${(String.fromCharCode(104,0) == mimeJ ? mimeJ.length : parseInt(`${incidentp}`))}`;
         mimeJ = `${p_centerD.length}`;
      while ((parseInt(`${incidentp}`) + 4) < 1 && 4 < (parseInt(`${incidentp}`) + mimeJ.length)) {
         mimeJ = `${p_centerD.length}`;
         break;
      }
         mimeJ = `${p_centerD.length}`;
      router0.push(issubp | 1);
      if (canvas3) {
         break;
      }
   } while (canvas3 && ((router0.length * sourceb) == 2.53 && 4.64 == (2.53 * sourceb)));
      mbridgeU = viewerH == String.fromCharCode(106,0);
   if (5.48 < (issubp + sourceb)) {
       let whiter = false;
       let crownc = false;
       let thailandQ = 1.0;
       let volumeF = String.fromCharCode(115,95,53,50,0);
          let libreanimatedx = String.fromCharCode(114,95,51,54,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,115,0);
          let y_titleV: Map<any, any> = new Map([[String.fromCharCode(101,95,52,95,105,110,100,101,118,115,0),String.fromCharCode(116,97,103,103,105,110,103,95,113,95,49,48,48,0)], [String.fromCharCode(106,117,115,116,105,102,105,101,100,95,48,95,56,57,0),String.fromCharCode(103,95,57,56,95,117,110,115,117,112,112,111,114,116,101,100,0)]]);
          let checkbox6: Array<any> = [739, 356];
         thailandQ /= Math.max((parseFloat(`${(whiter ? 2 : 5) % (Math.max(checkbox6.length, 3))}`)), 4);
         libreanimatedx += "3";
         y_titleV = new Map([[`${y_titleV.size}`, 2]]);
         checkbox6 = [(String.fromCharCode(70,0) == libreanimatedx ? y_titleV.size : libreanimatedx.length)];
      let uimanagerb = whiter ? !whiter : whiter;
      do {
          let goallogoO = String.fromCharCode(112,114,111,118,105,100,101,114,115,95,49,95,55,55,0);
          let emojiheartS: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,110,95,53,95,51,48,0),false ], [String.fromCharCode(103,97,117,115,115,105,97,110,105,105,114,100,95,52,95,57,54,0),false ], [String.fromCharCode(115,104,97,107,105,110,103,95,104,95,49,0),false ]]);
          let predictionarrowO = 5.0;
          let countryw = 5;
         whiter = emojiheartS.size > 55 || 26.12 > predictionarrowO;
         goallogoO = `${(goallogoO == String.fromCharCode(113,0) ? countryw : goallogoO.length)}`;
         emojiheartS.set(`${countryw}`, 1);
         predictionarrowO /= Math.max(countryw, 4);
         if (uimanagerb) {
            break;
         }
      } while (uimanagerb && (!crownc && !whiter));
      while (5.78 == (thailandQ + 4.46) && 4.46 == thailandQ) {
         crownc = (parseInt(`${thailandQ}`) - volumeF.length) < 27;
         break;
      }
      let gpayD = whiter ? !whiter : whiter;
      do {
          let filledW = 0.0;
          let nativemoduleY = 0.0;
          let relatedn = 3.0;
         whiter = (relatedn + filledW) <= 41.4;
         filledW -= 2;
         nativemoduleY *= parseInt(`${nativemoduleY}`) + 1;
         if (gpayD) {
            break;
         }
      } while ((3 >= volumeF.length) && gpayD);
      let iconshareO = thailandQ >= 9866186.0;
      do {
         thailandQ += parseFloat(`${3 + volumeF.length}`);
         if (iconshareO) {
            break;
         }
      } while (iconshareO && (!whiter));
      while (whiter) {
         thailandQ /= Math.max(4, parseFloat(`${parseInt(`${thailandQ}`) ^ 2}`));
         break;
      }
         whiter = whiter && volumeF.length < 48;
       let footballtrophyg = 2.0;
       let animation2 = 0.0;
         animation2 += parseInt(`${animation2}`) - 1;
      for (let v = 0; v < 2; v++) {
         footballtrophyg -= ((crownc ? 4 : 5) + parseInt(`${animation2}`));
      }
      while (3.21 >= (animation2 - 4.57) && (parseInt(`${animation2}`) - volumeF.length) >= 1) {
         animation2 /= Math.max(((crownc ? 2 : 2) | 2), 3);
         break;
      }
      let iconcalendarW = volumeF == String.fromCharCode(113,51,98,104,116,101,0);
      do {
         volumeF += `${((crownc ? 2 : 2) % (Math.max(parseInt(`${animation2}`), 10)))}`;
         if (iconcalendarW) {
            break;
         }
      } while ((volumeF.length == parseInt(`${animation2}`)) && iconcalendarW);
      sourceb *= parseInt(`${sourceb}`) << (Math.min(2, Math.abs(parseInt(`${thailandQ}`))));
   }
      sourceb += models7.size;
       let firebaseb = 5.0;
      if ((firebaseb + firebaseb) <= 2.19 && (firebaseb + firebaseb) <= 2.19) {
         firebaseb += parseFloat(`${parseInt(`${firebaseb}`) | 2}`);
      }
         firebaseb += parseFloat(`${parseInt(`${firebaseb}`) ^ 1}`);
          let sheet2: Map<any, any> = new Map([[String.fromCharCode(121,95,56,51,95,110,111,110,110,101,103,97,116,105,118,101,0),411], [String.fromCharCode(115,97,110,105,116,105,122,101,100,95,114,95,50,48,0),273], [String.fromCharCode(109,95,55,54,95,115,116,117,102,102,115,116,0),224]]);
          let completez = String.fromCharCode(108,95,49,57,95,100,101,108,105,109,0);
          let sharewhite3 = 5.0;
         firebaseb /= Math.max(parseFloat(`${sheet2.size}`), 4);
         sheet2 = new Map([[`${sharewhite3}`, parseInt(`${sharewhite3}`)]]);
         completez += `${completez.length}`;
      issubp &= ((mbridgeU ? 3 : 2) & router0.length);
      router0 = [blackh];
       let j_playerZ = 4.0;
       let actionsI = String.fromCharCode(100,95,51,57,95,119,114,105,116,101,0);
         actionsI = `${3 | actionsI.length}`;
      if (3.51 < (j_playerZ / (Math.max(parseFloat(`${actionsI.length}`), 4))) || 4 < (actionsI.length % 5)) {
         actionsI += `${actionsI.length}`;
      }
          let holderv = false;
         actionsI += `${(1 << (Math.min(4, Math.abs((holderv ? 2 : 2)))))}`;
         actionsI += `${(actionsI == String.fromCharCode(78,0) ? parseInt(`${j_playerZ}`) : actionsI.length)}`;
       let matchM = 5;
       let unread9 = 0;
      while ((actionsI.length ^ 2) < 3 && (2 ^ actionsI.length) < 4) {
         matchM *= 1;
         break;
      }
      blackh &= logo5.length & parseInt(`${j_playerZ}`);

      setIsPaused(!isPaused);
    };

    const hideSeekProgress = useCallback(
      debounce(() => setSeekDirection("none"), 300),
      []
    );

    const changeEpisodeAndPlay = (ep: any) => {
      setIsPaused(false);
      onEpisodeChange(ep);
    };

    const getNextEpisode = () => {
       let controlE = 2.0;
    let pangle5 = 4.0;
    let canvask = 0.0;
    let airbnbstarj = 1.0;
    let icondefaultthumbnaili = 4.0;
    let libreanimatedf: Map<any, any> = new Map([[String.fromCharCode(102,108,97,116,116,101,110,95,103,95,50,49,0),String.fromCharCode(122,95,52,52,95,97,114,116,105,99,108,101,115,0)], [String.fromCharCode(103,101,116,99,117,116,95,97,95,51,49,0),String.fromCharCode(100,95,53,52,95,105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,0)]]);
    let readV = String.fromCharCode(109,95,57,57,95,99,111,108,111,114,107,101,121,0);
    let turn6 = true;
    let libreactN = 3.0;
    let moduleL: Map<any, any> = new Map([[String.fromCharCode(115,95,49,50,95,102,105,110,105,115,104,0),true ], [String.fromCharCode(98,117,102,102,101,114,95,107,95,52,57,0),false ]]);
    let typesU = 1.0;
    let statisticsm = 4;
    let ajaxy = String.fromCharCode(97,95,57,52,95,108,111,99,107,97,98,108,101,0);
    let fillm = String.fromCharCode(109,95,49,49,95,119,105,100,116,104,115,0);
    let profileactivek = 3;
      controlE *= parseFloat(`${parseInt(`${typesU}`)}`);
   let airbnbstar8 = 7336518.0 <= pangle5;
   do {
       let reactnativeratingsN = 1.0;
       let foreground9 = true;
       let smallbrightnessR = String.fromCharCode(119,109,97,118,111,105,99,101,95,56,95,52,53,0);
      for (let b = 0; b < 3; b++) {
         reactnativeratingsN /= Math.max(1, (parseFloat(`${(foreground9 ? 1 : 2) >> (Math.min(Math.abs(parseInt(`${reactnativeratingsN}`)), 2))}`)));
      }
      while (reactnativeratingsN >= 2.13) {
         foreground9 = (93 == ((foreground9 ? smallbrightnessR.length : 93) >> (Math.min(smallbrightnessR.length, 5))));
         break;
      }
         foreground9 = !foreground9;
         smallbrightnessR = `${3 - smallbrightnessR.length}`;
          let matchI = String.fromCharCode(116,114,101,122,111,114,95,53,95,55,51,0);
         foreground9 = !foreground9;
         matchI = "1";
          let linkM: Map<any, any> = new Map([[String.fromCharCode(102,95,57,55,95,119,105,100,116,104,115,0),783], [String.fromCharCode(115,119,105,99,104,95,99,95,49,52,0),217], [String.fromCharCode(116,105,99,107,101,114,95,48,95,55,57,0),839]]);
          let reactnativeratings7: Array<any> = [312, 998, 90];
         smallbrightnessR += `${((foreground9 ? 5 : 5) * reactnativeratings7.length)}`;
         linkM = new Map([[`${linkM.size}`, 2]]);
         reactnativeratings7.push(linkM.size / 1);
      if (smallbrightnessR.length > 4) {
         smallbrightnessR = "2";
      }
         reactnativeratingsN += (parseFloat(`${smallbrightnessR.length - (foreground9 ? 4 : 1)}`));
      let backm = smallbrightnessR.length <= 5016552;
      do {
          let guideq = String.fromCharCode(99,117,109,101,95,118,95,57,49,0);
          let sendC = true;
          let videovar4 = true;
         smallbrightnessR = `${((videovar4 ? 3 : 1) + (foreground9 ? 2 : 4))}`;
         guideq += `${(String.fromCharCode(81,0) == guideq ? guideq.length : (sendC ? 1 : 1))}`;
         sendC = sendC && guideq.length <= 31;
         videovar4 = !guideq.startsWith(`${sendC}`);
         if (backm) {
            break;
         }
      } while ((foreground9 || 5 >= smallbrightnessR.length) && backm);
      pangle5 /= Math.max(1, 2 & smallbrightnessR.length);
      if (airbnbstar8) {
         break;
      }
   } while ((controlE < 1.38) && airbnbstar8);
      statisticsm %= Math.max(3, 1);
   let unreadr = airbnbstarj <= 6488818.0;
   do {
       let rewardf = 0.0;
       let vignetteH = 1.0;
       let quest1: Map<any, any> = new Map([[String.fromCharCode(99,95,53,57,95,116,104,101,114,101,117,109,0),true ], [String.fromCharCode(101,95,52,48,95,105,110,116,101,114,112,114,101,116,0),true ], [String.fromCharCode(114,95,53,51,95,99,111,110,118,115,97,109,112,0),false ]]);
       let colorsc: Array<any> = [782, 971];
       let bottomG = String.fromCharCode(115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,95,103,95,50,49,0);
       let runtimeschedulerw = 5.0;
       let leftT = 5.0;
          let iconK = String.fromCharCode(109,95,50,57,95,109,97,112,0);
          let dycreatorg = true;
          let loginC = String.fromCharCode(98,97,99,107,105,110,103,95,50,95,51,49,0);
         runtimeschedulerw /= Math.max(5, parseFloat(`${1}`));
         iconK = `${iconK.length}`;
         dycreatorg = iconK.length >= 58;
         loginC = `${iconK.length}`;
         vignetteH *= quest1.size & 3;
         bottomG = `${parseInt(`${leftT}`)}`;
      for (let w = 0; w < 3; w++) {
         runtimeschedulerw *= parseFloat(`${bottomG.length}`);
      }
         rewardf /= Math.max(5, 3);
      while (1.20 == (vignetteH * rewardf)) {
          let predictionwin8 = String.fromCharCode(118,108,99,111,100,101,99,95,118,95,54,50,0);
         vignetteH += colorsc.length;
         predictionwin8 += `${predictionwin8.length}`;
         break;
      }
      let data4 = 9754208.0 >= runtimeschedulerw;
      do {
         runtimeschedulerw /= Math.max(2, parseFloat(`${parseInt(`${rewardf}`)}`));
         if (data4) {
            break;
         }
      } while (data4 && (2.82 >= (rewardf / (Math.max(runtimeschedulerw, 3))) || (2.82 - runtimeschedulerw) >= 4.24));
         colorsc = [1 + parseInt(`${leftT}`)];
          let combinedF = 1.0;
         runtimeschedulerw /= Math.max(parseFloat(`${parseInt(`${rewardf}`)}`), 1);
         combinedF -= 3;
       let notification6 = true;
       let yinge: Array<any> = [859, 893];
       let pushV: Array<any> = [726, 539];
      for (let q = 0; q < 1; q++) {
          let roots = 3.0;
         runtimeschedulerw /= Math.max(4, parseFloat(`${parseInt(`${leftT}`) >> (Math.min(yinge.length, 1))}`));
         roots -= parseFloat(`${parseInt(`${roots}`) << (Math.min(2, Math.abs(1)))}`);
      }
         rewardf += parseInt(`${leftT}`) / 3;
          let taiwanl = String.fromCharCode(110,95,57,53,95,114,101,103,105,115,116,114,97,110,116,0);
          let termsU = true;
          let layoutp: Array<any> = [435, 234];
         runtimeschedulerw *= (parseFloat(`${String.fromCharCode(108,0) == bottomG ? (termsU ? 1 : 3) : bottomG.length}`));
         taiwanl += `${layoutp.length}`;
         termsU = layoutp.length <= taiwanl.length;
      airbnbstarj /= Math.max(2, 5);
      if (unreadr) {
         break;
      }
   } while ((airbnbstarj > 3.73) && unreadr);
   if (icondefaultthumbnaili <= typesU) {
       let borderlessj = String.fromCharCode(101,97,115,105,110,103,95,121,95,53,52,0);
       let iconrightorange0 = String.fromCharCode(99,111,110,116,97,105,110,97,98,108,101,95,55,95,50,0);
         borderlessj = "3";
         iconrightorange0 += `${(iconrightorange0 == String.fromCharCode(90,0) ? iconrightorange0.length : borderlessj.length)}`;
         borderlessj += `${borderlessj.length << (Math.min(5, iconrightorange0.length))}`;
          let basketballtrophyt = 2.0;
          let entry2 = 1.0;
         borderlessj += "3";
         basketballtrophyt *= parseFloat(`${parseInt(`${entry2}`) * 2}`);
         entry2 -= parseInt(`${basketballtrophyt}`);
      if (borderlessj.length == 1) {
         borderlessj += `${iconrightorange0.length - 1}`;
      }
         borderlessj = `${borderlessj.length ^ 1}`;
      icondefaultthumbnaili *= parseFloat(`${1}`);
   }
       let downloadingB = String.fromCharCode(117,101,117,101,95,121,95,56,53,0);
       let mbjscommonX = 3;
       let xvodc = 3.0;
      if (2 < (2 + mbjscommonX) || (xvodc - 4.1) < 5.76) {
          let bellx = String.fromCharCode(100,118,98,115,117,98,95,51,95,53,53,0);
          let tempB = false;
          let iconwatchnowV = true;
          let sinaG = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,98,108,101,95,109,95,51,48,0);
          let homeinactiveU = 2.0;
         xvodc /= Math.max(1, ((tempB ? 5 : 1)));
         bellx += `${((iconwatchnowV ? 2 : 1))}`;
         tempB = (((!iconwatchnowV ? sinaG.length : 3) / (Math.max(sinaG.length, 2))) == 3);
         homeinactiveU /= Math.max(3, (parseFloat(`${sinaG.length & (iconwatchnowV ? 5 : 4)}`)));
      }
       let closeA = String.fromCharCode(108,95,51,55,95,112,111,108,108,105,110,103,0);
      if (2 <= (closeA.length - mbjscommonX)) {
         closeA = "3";
      }
          let libfbjni9 = 1.0;
         closeA = `${mbjscommonX}`;
         libfbjni9 += 1;
          let macauB = 2;
          let chatx: Map<any, any> = new Map([[String.fromCharCode(108,97,121,111,121,116,95,116,95,57,56,0),510], [String.fromCharCode(109,117,108,116,105,112,108,105,101,100,95,57,95,55,48,0),23]]);
         closeA = `${(downloadingB == String.fromCharCode(102,0) ? macauB : downloadingB.length)}`;
         macauB |= chatx.size % (Math.max(1, chatx.size));
          let icondefaultthumbnailiw = 4.0;
          let routerw = String.fromCharCode(97,110,110,111,116,97,116,105,111,110,95,109,95,50,0);
          let whitevideoliveP = String.fromCharCode(107,95,53,53,0);
         closeA += `${(String.fromCharCode(101,0) == closeA ? downloadingB.length : closeA.length)}`;
         icondefaultthumbnailiw += parseFloat(`${whitevideoliveP.length << (Math.min(Math.abs(3), 2))}`);
         routerw += `${3 << (Math.min(4, routerw.length))}`;
         whitevideoliveP = `${3 / (Math.max(4, whitevideoliveP.length))}`;
         closeA += `${parseInt(`${xvodc}`) / 3}`;
      while (3 <= (mbjscommonX << (Math.min(closeA.length, 2)))) {
          let tumbnailL: Map<any, any> = new Map([[String.fromCharCode(99,95,50,52,95,97,114,101,115,0),605], [String.fromCharCode(108,95,49,57,95,101,120,116,114,97,99,102,103,0),20], [String.fromCharCode(99,97,108,99,117,108,97,116,105,110,103,95,97,95,57,56,0),418]]);
         closeA += `${downloadingB.length >> (Math.min(Math.abs(1), 5))}`;
         tumbnailL = new Map([[`${tumbnailL.size}`, tumbnailL.size & tumbnailL.size]]);
         break;
      }
      while (3 >= (closeA.length ^ mbjscommonX)) {
         closeA = `${closeA.length >> (Math.min(Math.abs(2), 1))}`;
         break;
      }
      pangle5 *= parseInt(`${typesU}`) << (Math.min(3, Math.abs(mbjscommonX)));
   for (let c = 0; c < 3; c++) {
       let whiteanimationlivem = String.fromCharCode(109,95,55,57,95,102,108,97,115,104,115,118,0);
       let short_qc5 = 2;
      while ((short_qc5 - 5) <= 4) {
          let acceptedT: Array<any> = [String.fromCharCode(116,95,54,95,108,111,99,107,99,104,97,105,110,0), String.fromCharCode(101,95,55,57,95,115,109,112,116,101,0)];
         short_qc5 -= 1 & short_qc5;
         acceptedT.push(3);
         break;
      }
      let eactn = whiteanimationlivem == String.fromCharCode(110,121,115,0);
      do {
          let controlq: Map<any, any> = new Map([[String.fromCharCode(115,101,101,110,95,115,95,56,48,0),true ], [String.fromCharCode(99,111,115,113,102,95,98,95,56,0),true ], [String.fromCharCode(100,97,115,104,101,110,99,95,109,95,52,50,0),true ]]);
          let paginationL = 2.0;
          let libnmse = 2.0;
          let defaultplayerimg6: Array<any> = [String.fromCharCode(112,95,51,54,95,103,101,116,97,100,100,114,105,110,102,111,0), String.fromCharCode(99,111,112,121,118,95,117,95,55,49,0), String.fromCharCode(114,101,99,112,95,114,95,52,48,0)];
          let moder = false;
         whiteanimationlivem += `${parseInt(`${libnmse}`) >> (Math.min(1, Math.abs(short_qc5)))}`;
         controlq.set(`${paginationL}`, (parseInt(`${paginationL}`) + (moder ? 2 : 1)));
         libnmse += parseInt(`${paginationL}`);
         defaultplayerimg6.push((3 + (moder ? 3 : 4)));
         if (eactn) {
            break;
         }
      } while ((!whiteanimationlivem.includes(`${short_qc5}`)) && eactn);
       let huaweiw: Array<any> = [String.fromCharCode(106,117,103,103,108,101,95,52,95,50,57,0), String.fromCharCode(111,95,50,55,95,114,101,115,101,114,118,101,0), String.fromCharCode(115,121,115,114,97,110,100,95,114,95,53,53,0)];
          let commonH = String.fromCharCode(106,95,51,48,95,98,101,108,108,0);
         short_qc5 += huaweiw.length ^ 3;
         commonH = `${commonH.length | 1}`;
      if (3 >= (whiteanimationlivem.length & short_qc5) && 5 >= (3 & short_qc5)) {
          let album6 = 5;
          let twitter9 = String.fromCharCode(117,112,100,97,116,101,115,95,104,95,57,54,0);
          let redirectw = 4.0;
          let appsd = 4.0;
         whiteanimationlivem = `${whiteanimationlivem.length}`;
         album6 &= twitter9.length;
         twitter9 = `${album6 << (Math.min(Math.abs(parseInt(`${appsd}`)), 5))}`;
         redirectw *= 2;
         appsd += parseFloat(`${album6}`);
      }
       let telegramL = String.fromCharCode(97,115,121,109,95,51,95,49,53,0);
       let over4 = String.fromCharCode(120,97,118,115,95,49,95,56,55,0);
      libreactN *= libreanimatedf.size;
   }
   for (let o = 0; o < 1; o++) {
       let dplusY = 4.0;
       let photoa = String.fromCharCode(98,108,111,99,107,100,115,112,95,117,95,51,52,0);
      while ((dplusY / 4.23) == 2.42) {
          let mailV = 5.0;
          let subbasketballplayeri = 4.0;
          let n_centerZ: Array<any> = [567, 193, 765];
         photoa += `${3 + parseInt(`${subbasketballplayeri}`)}`;
         mailV -= parseFloat(`${n_centerZ.length}`);
         subbasketballplayeri += 1;
         n_centerZ = [parseInt(`${mailV}`) * 1];
         break;
      }
      while (dplusY > 5.96) {
         photoa += `${parseInt(`${dplusY}`)}`;
         break;
      }
       let airbnbstarB = false;
       let launcherr = true;
      let stepS = String.fromCharCode(50,99,50,49,0) == photoa;
      do {
         photoa = `${(photoa == String.fromCharCode(54,0) ? photoa.length : (launcherr ? 1 : 2))}`;
         if (stepS) {
            break;
         }
      } while (stepS && (launcherr));
      if (!launcherr) {
         airbnbstarB = airbnbstarB && photoa.length >= 49;
      }
      if ((dplusY - 1.33) > 1.84 || 3.53 > (dplusY - 1.33)) {
         photoa += `${parseInt(`${dplusY}`)}`;
      }
      pangle5 /= Math.max(1, 4);
   }
   let nbatrophyG = String.fromCharCode(97,100,48,48,55,119,56,0) == readV;
   do {
       let linkMY = 5.0;
       let savew: Array<any> = [821, 484, 454];
       let cricketj = String.fromCharCode(99,111,110,118,101,114,115,97,116,105,111,110,95,55,95,50,49,0);
       let page9: Array<any> = [String.fromCharCode(99,111,108,108,101,116,105,111,110,95,108,95,55,54,0), String.fromCharCode(109,111,118,101,95,101,95,55,52,0)];
       let smallorangemanE = 3;
          let m_playerY = 3;
         linkMY /= Math.max(parseFloat(`${m_playerY * 2}`), 5);
         smallorangemanE -= savew.length & parseInt(`${linkMY}`);
       let formJ: Array<any> = [763, 339];
       let scrollview5: Array<any> = [297, 845];
       let librrcn = 0.0;
      for (let g = 0; g < 2; g++) {
          let untickZ: Map<any, any> = new Map([[String.fromCharCode(113,95,54,48,95,98,105,116,0),String.fromCharCode(104,95,55,48,95,119,104,97,116,115,0)], [String.fromCharCode(111,110,101,111,102,95,113,95,54,55,0),String.fromCharCode(99,111,108,108,95,54,95,55,50,0)]]);
          let scoreK = 0.0;
          let profile2 = false;
          let redirecta = false;
         smallorangemanE |= 3 >> (Math.min(3, savew.length));
         untickZ.set(`${redirecta}`, untickZ.size);
         scoreK += parseInt(`${scoreK}`);
         profile2 = redirecta;
      }
       let template_ghx: Map<any, any> = new Map([[String.fromCharCode(121,95,54,55,95,105,115,115,117,101,0),String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,95,111,95,54,57,0)], [String.fromCharCode(118,95,52,48,95,109,101,114,103,101,100,0),String.fromCharCode(114,101,115,101,114,118,101,115,105,122,101,95,104,95,55,52,0)], [String.fromCharCode(108,95,55,48,95,112,108,117,103,103,101,100,0),String.fromCharCode(117,95,53,48,95,102,99,109,117,108,0)]]);
       let shrink7: Map<any, any> = new Map([[String.fromCharCode(98,101,97,116,95,121,95,57,48,0),534], [String.fromCharCode(97,118,102,111,114,109,97,116,95,98,95,56,50,0),104]]);
       let photoH = true;
       let bootsplashA = true;
          let predictionc = String.fromCharCode(100,95,50,48,95,116,101,109,112,108,97,116,101,115,0);
          let subtext5 = String.fromCharCode(99,117,116,95,49,95,55,53,0);
          let mbjscommonH: Map<any, any> = new Map([[String.fromCharCode(112,117,98,101,120,112,95,55,95,50,0),990], [String.fromCharCode(112,97,105,114,119,105,115,101,95,57,95,56,56,0),449], [String.fromCharCode(115,101,116,119,97,116,101,114,109,97,114,107,95,117,95,53,48,0),489]]);
         linkMY -= (parseFloat(`${template_ghx.size ^ (photoH ? 5 : 2)}`));
         predictionc = "3";
         subtext5 = "3";
         mbjscommonH.set(`${predictionc}`, (String.fromCharCode(71,0) == predictionc ? predictionc.length : mbjscommonH.size));
         photoH = (parseInt(`${librrcn}`) * template_ghx.size) > 13;
      for (let q = 0; q < 3; q++) {
          let imagemanagerV = 4.0;
          let giftbutton5 = 3.0;
         linkMY *= parseFloat(`${3 | page9.length}`);
         imagemanagerV += parseInt(`${imagemanagerV}`) - 3;
         giftbutton5 += parseInt(`${giftbutton5}`) * 1;
      }
       let rncoreu = 0.0;
          let downarrowz = 4.0;
          let scorek: Map<any, any> = new Map([[String.fromCharCode(101,95,54,57,95,119,97,110,116,115,0),869], [String.fromCharCode(99,111,110,99,101,97,108,95,120,95,51,50,0),199]]);
          let audiencee = String.fromCharCode(99,121,99,108,105,99,95,118,95,49,54,0);
         linkMY *= parseFloat(`${savew.length}`);
         downarrowz += (parseFloat(`${audiencee == String.fromCharCode(100,0) ? scorek.size : audiencee.length}`));
         scorek.set(`${audiencee}`, scorek.size ^ 2);
          let animation4: Map<any, any> = new Map([[String.fromCharCode(105,115,112,111,114,116,95,115,95,54,55,0),true ], [String.fromCharCode(119,95,51,48,95,104,101,97,100,101,114,115,0),false ], [String.fromCharCode(109,111,118,101,112,97,103,101,95,122,95,52,50,0),false ]]);
          let defaultprofilepicV = true;
         formJ.push(page9.length / (Math.max(10, smallorangemanE)));
         animation4.set(`${defaultprofilepicV}`, animation4.size);
       let x_imageI = 0;
      let reminderB = String.fromCharCode(100,54,115,52,119,0) == cricketj;
      do {
         cricketj += `${scrollview5.length / 1}`;
         if (reminderB) {
            break;
         }
      } while (reminderB && (1.99 <= librrcn));
      readV = `${parseInt(`${typesU}`)}`;
      if (nbatrophyG) {
         break;
      }
   } while ((readV.includes(`${icondefaultthumbnaili}`)) && nbatrophyG);
   for (let z = 0; z < 2; z++) {
       let profilec: Map<any, any> = new Map([[String.fromCharCode(117,110,114,101,99,111,103,110,105,122,101,100,95,110,95,54,56,0),341], [String.fromCharCode(102,101,116,99,104,101,100,95,52,95,53,53,0),474], [String.fromCharCode(114,105,110,103,105,110,103,95,52,95,52,54,0),281]]);
         profilec.set(`${profilec.size}`, profilec.size);
         profilec.set(`${profilec.size}`, profilec.size);
      while (profilec.get(`${profilec.size}`) != null) {
         profilec = new Map([[`${profilec.size}`, profilec.size]]);
         break;
      }
      libreactN += ajaxy.length;
   }
   let eactI = controlE >= 7411145.0;
   do {
       let datap = 0;
       let thailand3 = false;
       let componentregistryj: Array<any> = [873, 562, 942];
       let gesturesp = 1;
      while (1 <= (componentregistryj.length | gesturesp)) {
         componentregistryj = [1 ^ datap];
         break;
      }
         datap -= 2;
       let codegena = 4;
       let mapping_ = 3.0;
      for (let a = 0; a < 2; a++) {
          let update_6Z = true;
          let verticalP = String.fromCharCode(97,117,116,111,114,111,116,97,116,105,111,110,95,100,95,51,54,0);
          let types1 = String.fromCharCode(100,101,99,105,109,97,108,95,99,95,55,57,0);
          let miniQ = 2;
          let targetg: Array<any> = [String.fromCharCode(121,95,56,49,95,100,105,115,97,108,108,111,119,0), String.fromCharCode(114,97,110,103,101,115,95,55,95,57,54,0), String.fromCharCode(117,95,51,55,95,97,108,108,111,99,97,116,101,0)];
         componentregistryj = [componentregistryj.length ^ 1];
         update_6Z = targetg.length > 94;
         verticalP += `${(String.fromCharCode(51,0) == types1 ? (update_6Z ? 3 : 4) : types1.length)}`;
         miniQ -= 1;
         targetg = [((update_6Z ? 4 : 5) - 1)];
      }
         componentregistryj.push(2);
      while ((4 + codegena) < 4 || (4 + gesturesp) < 3) {
         codegena >>= Math.min(3, parseInt(`${Math.abs(((thailand3 ? 5 : 4) << (Math.min(Math.abs(3), 2))))}`));
         break;
      }
         mapping_ -= codegena;
          let backiconn = String.fromCharCode(103,111,98,98,108,101,95,117,95,57,53,0);
          let splasht = 4.0;
          let weathery = String.fromCharCode(114,101,118,111,107,101,100,95,103,95,57,0);
         gesturesp += 2 & parseInt(`${splasht}`);
         backiconn += `${(weathery == String.fromCharCode(104,0) ? backiconn.length : weathery.length)}`;
         splasht /= Math.max(2, backiconn.length | 3);
       let mapbufferW = true;
       let shootn = true;
      if (thailand3) {
         thailand3 = componentregistryj.length == parseInt(`${mapping_}`);
      }
      let sentryF = datap >= 7038308;
      do {
         datap &= 2;
         if (sentryF) {
            break;
         }
      } while ((2 == datap) && sentryF);
      controlE /= Math.max(1, (parseFloat(`${parseInt(`${typesU}`) / (Math.max(5, (turn6 ? 5 : 1)))}`)));
      if (eactI) {
         break;
      }
   } while (eactI && ((statisticsm * 3) >= 5 && (statisticsm * 3) >= 2));

      if (
        autoPlayNext &&
        activeEpisode !== undefined &&
        episodes &&
        activeEpisode < episodes?.url_count - 1
      ) {

   for (let q = 0; q < 2; q++) {
      turn6 = statisticsm >= 37 && !turn6;
   }
   while (moduleL.size >= 5) {
      moduleL.set(`${canvask}`, (ajaxy == String.fromCharCode(90,0) ? parseInt(`${canvask}`) : ajaxy.length));
      break;
   }
      controlE += parseFloat(`${3}`);
      ajaxy += `${1 & parseInt(`${icondefaultthumbnaili}`)}`;
   while (fillm == String.fromCharCode(85,0)) {
      readV += `${ajaxy.length}`;
      break;
   }
       let searchT: Map<any, any> = new Map([[String.fromCharCode(100,95,53,56,95,115,116,111,112,0),683], [String.fromCharCode(99,95,53,55,95,100,101,99,111,114,97,116,101,0),663], [String.fromCharCode(101,120,116,101,110,100,101,100,95,114,95,51,56,0),101]]);
       let rockete = String.fromCharCode(106,95,49,51,95,103,101,110,101,114,105,99,0);
      while (1 == (4 % (Math.max(9, rockete.length))) || (searchT.size % 4) == 3) {
         rockete += `${(rockete == String.fromCharCode(108,0) ? rockete.length : searchT.size)}`;
         break;
      }
      let leakcheckerW = 7274098 <= searchT.size;
      do {
         searchT = new Map([[`${searchT.size}`, rockete.length * searchT.size]]);
         if (leakcheckerW) {
            break;
         }
      } while (leakcheckerW && ((searchT.size << (Math.min(rockete.length, 4))) >= 5 || 5 >= (rockete.length << (Math.min(Math.abs(5), 2)))));
      let fastS = searchT.size <= 6162012;
      do {
         searchT.set(rockete, 3 * searchT.size);
         if (fastS) {
            break;
         }
      } while (fastS && (searchT.size == 4));
       let albumC: Map<any, any> = new Map([[String.fromCharCode(112,101,114,102,111,114,109,95,111,95,52,52,0),String.fromCharCode(111,118,101,114,119,114,105,116,101,95,104,95,53,48,0)], [String.fromCharCode(116,95,52,57,95,99,108,109,117,108,0),String.fromCharCode(99,95,56,50,95,98,119,100,105,102,0)]]);
       let completes = String.fromCharCode(120,95,51,54,95,112,97,114,97,109,103,101,110,0);
       let orangeuparrowx = String.fromCharCode(101,120,116,114,99,95,117,95,54,52,0);
      if (Array.from(searchT.keys()).includes(`${albumC.size}`)) {
          let trashE = 0;
          let fillV = 3.0;
          let profilepicI = String.fromCharCode(120,95,49,49,95,118,101,114,116,105,99,97,108,0);
          let googlex = 0.0;
          let detailsj = String.fromCharCode(116,101,114,109,115,101,116,95,114,95,52,53,0);
         searchT = new Map([[rockete, 3 - rockete.length]]);
         trashE |= 3 * trashE;
         fillV -= parseFloat(`${1 + trashE}`);
         profilepicI += `${trashE}`;
         googlex /= Math.max(1 * trashE, 3);
         detailsj = `${(String.fromCharCode(76,0) == detailsj ? parseInt(`${fillV}`) : detailsj.length)}`;
      }
      icondefaultthumbnaili += parseFloat(`${3}`);
       let selectn = 2.0;
       let profile3 = true;
         profile3 = 16.39 == selectn;
          let executorL: Array<any> = [683, 346, 496];
         profile3 = !profile3;
         executorL.push(executorL.length | executorL.length);
      while (5.19 <= (4.90 * selectn)) {
         profile3 = selectn >= 32.90;
         break;
      }
       let annerw: Map<any, any> = new Map([[String.fromCharCode(102,95,50,48,95,115,105,103,110,117,109,0),String.fromCharCode(100,105,114,97,99,116,97,98,95,110,95,56,57,0)], [String.fromCharCode(108,105,98,112,111,115,116,112,114,111,99,95,53,95,56,54,0),String.fromCharCode(99,104,97,99,104,97,95,115,95,56,53,0)]]);
         profile3 = selectn <= annerw.size;
         profile3 = !profile3;
      controlE += parseFloat(`${parseInt(`${icondefaultthumbnaili}`)}`);
      libreanimatedf = new Map([[`${airbnbstarj}`, parseInt(`${airbnbstarj}`) % 3]]);
      ajaxy = `${parseInt(`${icondefaultthumbnaili}`)}`;
   let basketballtrophyD = turn6 ? !turn6 : turn6;
   do {
       let projectd: Array<any> = [601, 664];
       let googler: Array<any> = [639, 851, 875];
      if (1 < (googler.length & 5) && (googler.length & projectd.length) < 5) {
         googler = [googler.length >> (Math.min(5, projectd.length))];
      }
      if ((googler.length * 2) > 1) {
         googler.push(googler.length);
      }
         projectd = [projectd.length];
         projectd.push(googler.length % (Math.max(3, 1)));
      let mime7 = googler.length >= 5345926;
      do {
         googler = [1 - projectd.length];
         if (mime7) {
            break;
         }
      } while (mime7 && (5 < (4 ^ googler.length) || (4 ^ projectd.length) < 3));
         projectd = [googler.length];
      turn6 = moduleL.size >= 89 && canvask >= 86.89;
      if (basketballtrophyD) {
         break;
      }
   } while ((!turn6) && basketballtrophyD);
      pangle5 -= ajaxy.length;
        return () => changeEpisodeAndPlay(episodes.urls[activeEpisode + 1].nid);
      }
      return undefined;
    };

    
    //   // if is sports stream, if watch time > 300s, pause vid
    
    
    //     screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    useEffect(() => {
      if (screenState.interstitialShow == true && Platform.OS === "ios") {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    }, [screenState.interstitialShow]);

    useEffect(() => {
      if (route.name == '体育详情') {
        const unsub = setInterval(() => {
       let tickedq = 5.0;
    let hookt = 4.0;
    let videojs9 = 0;
    let fullscreenmind: Array<any> = [985, 568];
    let libreactnativejniK = 4;
    let sharedh = 5;
    let singleE = String.fromCharCode(114,95,52,56,95,112,114,101,114,101,108,101,97,115,101,0);
    let searchbarR: Array<any> = [String.fromCharCode(102,95,52,54,95,109,111,100,112,108,117,103,0), String.fromCharCode(100,117,112,108,105,99,97,116,101,100,95,103,95,50,52,0), String.fromCharCode(113,95,49,95,116,111,107,101,110,100,0)];
    let nend4 = String.fromCharCode(112,111,111,108,115,95,100,95,52,51,0);
    let expiredw = 0;
   let hook7 = 6900321 <= searchbarR.length;
   do {
      searchbarR = [parseInt(`${tickedq}`)];
      if (hook7) {
         break;
      }
   } while (hook7 && ((4 & searchbarR.length) >= 2 || (4 + searchbarR.length) >= 5));
      singleE = `${fullscreenmind.length}`;
      libreactnativejniK -= 2 / (Math.max(parseInt(`${hookt}`), 6));
      sharedh *= 2;
   if ((5 << (Math.min(4, Math.abs(libreactnativejniK)))) <= 2 && (libreactnativejniK << (Math.min(4, Math.abs(videojs9)))) <= 5) {
      libreactnativejniK ^= 3;
   }
   let cricketO = singleE == String.fromCharCode(115,111,103,54,111,104,49,113,0);
   do {
       let current6 = String.fromCharCode(115,111,99,107,101,116,115,95,105,95,53,56,0);
       let connectionc = String.fromCharCode(115,101,116,95,56,95,51,49,0);
         current6 += "2";
      for (let v = 0; v < 2; v++) {
         connectionc = "1";
      }
         connectionc = `${(connectionc == String.fromCharCode(57,0) ? connectionc.length : current6.length)}`;
         current6 = `${(String.fromCharCode(101,0) == connectionc ? current6.length : connectionc.length)}`;
         connectionc = `${current6.length / (Math.max(connectionc.length, 1))}`;
       let subinS = true;
      singleE += `${(connectionc == String.fromCharCode(56,0) ? connectionc.length : current6.length)}`;
      if (cricketO) {
         break;
      }
   } while ((2 < fullscreenmind.length) && cricketO);
   while ((fullscreenmind.length << (Math.min(Math.abs(1), 1))) == 3 && (videojs9 << (Math.min(Math.abs(1), 2))) == 2) {
       let members = false;
       let selectionI: Map<any, any> = new Map([[String.fromCharCode(110,105,100,99,98,98,95,103,95,55,54,0),String.fromCharCode(117,110,105,102,111,114,109,115,95,51,95,55,50,0)], [String.fromCharCode(97,114,99,104,105,118,101,95,112,95,54,55,0),String.fromCharCode(105,95,57,55,95,99,101,110,116,101,114,105,110,103,0)]]);
       let libjsijniprofilerH: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,97,116,117,114,101,115,95,117,95,57,52,0),864], [String.fromCharCode(111,95,53,49,95,118,105,118,111,0),353], [String.fromCharCode(112,95,49,51,95,114,105,100,103,101,0),238]]);
       let release_pv = 1.0;
          let airbnbstarr: Map<any, any> = new Map([[String.fromCharCode(106,95,51,48,95,100,101,116,101,114,109,105,110,105,115,116,105,99,0),226], [String.fromCharCode(118,98,101,122,105,101,114,95,111,95,50,51,0),333]]);
          let attributedstringG = String.fromCharCode(106,95,56,56,95,98,114,107,116,105,109,101,103,109,0);
          let basketballicony: Array<any> = [587, 880, 348];
         members = libjsijniprofilerH.size >= airbnbstarr.size;
         airbnbstarr = new Map([[`${basketballicony.length}`, 3 & basketballicony.length]]);
         attributedstringG += `${basketballicony.length}`;
      if ((4 ^ selectionI.size) <= 4) {
         libjsijniprofilerH = new Map([[`${selectionI.size}`, 3]]);
      }
      while ((release_pv + parseFloat(`${libjsijniprofilerH.size}`)) >= 2.100 || 5 >= (libjsijniprofilerH.size & 5)) {
         release_pv *= parseFloat(`${parseInt(`${release_pv}`)}`);
         break;
      }
          let invite8 = String.fromCharCode(102,111,108,108,111,119,101,114,115,95,109,95,56,55,0);
         libjsijniprofilerH.set(`${release_pv}`, 1);
         invite8 = "3";
      for (let a = 0; a < 2; a++) {
          let router0 = 0.0;
         members = !members && router0 <= 18.56;
      }
      if (libjsijniprofilerH.size <= parseInt(`${release_pv}`)) {
          let tempY = String.fromCharCode(107,95,57,50,95,97,99,111,109,112,114,101,115,115,111,114,0);
          let whitevideolive2: Map<any, any> = new Map([[String.fromCharCode(110,95,55,48,95,111,112,116,101,100,0),455], [String.fromCharCode(109,109,99,111,115,95,100,95,51,48,0),258]]);
         release_pv *= (parseFloat(`${tempY == String.fromCharCode(105,0) ? tempY.length : whitevideolive2.size}`));
      }
      if (3 <= (selectionI.size - libjsijniprofilerH.size)) {
          let iconarrowrightorangee: Map<any, any> = new Map([[String.fromCharCode(119,95,55,55,95,114,101,115,97,109,112,0),205], [String.fromCharCode(105,110,116,101,114,97,99,116,111,114,95,48,95,49,48,48,0),870], [String.fromCharCode(98,95,54,54,95,97,110,105,109,97,116,101,0),783]]);
          let reade: Map<any, any> = new Map([[String.fromCharCode(117,112,108,111,97,100,97,98,108,101,95,117,95,52,54,0),String.fromCharCode(120,95,53,52,95,114,103,98,116,111,0)], [String.fromCharCode(110,97,109,101,100,95,111,95,57,51,0),String.fromCharCode(100,101,98,97,110,100,95,52,95,56,0)]]);
         libjsijniprofilerH = new Map([[`${reade.size}`, reade.size << (Math.min(1, Math.abs(libjsijniprofilerH.size)))]]);
         iconarrowrightorangee = new Map([[`${iconarrowrightorangee.size}`, iconarrowrightorangee.size]]);
      }
      for (let r = 0; r < 2; r++) {
          let targetj = String.fromCharCode(112,114,101,102,101,114,114,101,100,95,103,95,53,51,0);
          let detailsw: Map<any, any> = new Map([[String.fromCharCode(98,121,116,101,115,116,114,101,97,109,95,97,95,49,57,0),String.fromCharCode(97,116,111,110,95,104,95,56,56,0)], [String.fromCharCode(114,95,54,55,95,105,110,116,101,114,112,111,108,97,116,111,114,115,0),String.fromCharCode(98,95,56,56,95,114,101,112,101,97,116,105,110,103,0)]]);
          let klevinl = 0.0;
         members = selectionI.get(`${members}`) != null;
         targetj = `${parseInt(`${klevinl}`) / 2}`;
         detailsw = new Map([[`${detailsw.size}`, 2 & detailsw.size]]);
         klevinl /= Math.max(parseInt(`${klevinl}`), 4);
      }
      let applea = members ? !members : members;
      do {
          let champion_ = false;
          let basketballmatchdetailbgy = true;
          let gifgoalf: Array<any> = [378, 915, 988];
          let topicV = String.fromCharCode(112,111,105,110,116,99,98,98,95,120,95,50,52,0);
          let topons = 3.0;
         members = String.fromCharCode(77,0) == topicV;
         champion_ = gifgoalf.length >= 13;
         basketballmatchdetailbgy = gifgoalf.length == 20;
         topicV += `${gifgoalf.length}`;
         topons *= parseFloat(`${1}`);
         if (applea) {
            break;
         }
      } while (applea && (!members));
      while (!Array.from(selectionI.values()).includes(libjsijniprofilerH.size)) {
          let nodeQ = 1.0;
          let iconk = String.fromCharCode(109,111,118,101,95,106,95,55,51,0);
         selectionI = new Map([[`${libjsijniprofilerH.size}`, parseInt(`${release_pv}`)]]);
         nodeQ /= Math.max(2, 4);
         iconk += "2";
         break;
      }
         release_pv -= parseFloat(`${2 << (Math.min(1, Math.abs(selectionI.size)))}`);
         libjsijniprofilerH.set(`${libjsijniprofilerH.size}`, 3 ^ selectionI.size);
      fullscreenmind = [videojs9 % (Math.max(parseInt(`${tickedq}`), 5))];
      break;
   }
      searchbarR.push(2);
   for (let z = 0; z < 2; z++) {
      singleE += `${searchbarR.length & 3}`;
   }
      libreactnativejniK &= libreactnativejniK * parseInt(`${tickedq}`);
      videojs9 <<= Math.min(searchbarR.length, 4);
       let iconbackwhitet = String.fromCharCode(99,104,101,99,107,115,117,109,109,101,100,95,57,95,49,51,0);
       let iconclosew = 5.0;
       let smallbrightnessV = String.fromCharCode(100,101,99,111,117,112,108,101,95,117,95,55,48,0);
      while ((1.29 + iconclosew) == 1.45 && (5 / (Math.max(10, iconbackwhitet.length))) == 4) {
         iconbackwhitet += `${parseInt(`${iconclosew}`)}`;
         break;
      }
         iconclosew -= (smallbrightnessV == String.fromCharCode(113,0) ? parseInt(`${iconclosew}`) : smallbrightnessV.length);
       let gpayR = 3.0;
         iconclosew += 2;
      while (smallbrightnessV.endsWith(`${iconbackwhitet.length}`)) {
          let indexI = 3.0;
          let fillO = 0.0;
          let diced = 0.0;
          let hoverU = String.fromCharCode(99,109,97,115,107,95,104,95,51,50,0);
         iconbackwhitet += `${(String.fromCharCode(50,0) == iconbackwhitet ? iconbackwhitet.length : parseInt(`${indexI}`))}`;
         indexI -= parseFloat(`${parseInt(`${fillO}`)}`);
         diced += parseFloat(`${hoverU.length}`);
         hoverU += `${hoverU.length - parseInt(`${diced}`)}`;
         break;
      }
      let shootD = 6937859 <= smallbrightnessV.length;
      do {
         smallbrightnessV = `${parseInt(`${gpayR}`) & smallbrightnessV.length}`;
         if (shootD) {
            break;
         }
      } while (shootD && (2 <= smallbrightnessV.length));
       let elementsj = String.fromCharCode(107,95,55,55,95,110,99,104,117,110,107,0);
      let homeinactiveT = 5452861.0 >= iconclosew;
      do {
         iconclosew *= parseInt(`${iconclosew}`) - parseInt(`${gpayR}`);
         if (homeinactiveT) {
            break;
         }
      } while (homeinactiveT && (4 == (4 + elementsj.length) && 5.95 == (iconclosew / 3.33)));
         smallbrightnessV = `${parseInt(`${gpayR}`) & smallbrightnessV.length}`;
      singleE = `${parseInt(`${tickedq}`)}`;
      singleE += "2";
   for (let e = 0; e < 2; e++) {
       let contextu = 1.0;
      if ((contextu * contextu) == 2.56) {
         contextu += parseInt(`${contextu}`) | 3;
      }
      let hoverD = 5606831.0 <= contextu;
      do {
          let eventJ = false;
          let sortv: Map<any, any> = new Map([[String.fromCharCode(103,95,50,53,95,115,99,97,108,97,98,105,108,105,116,121,0),String.fromCharCode(99,97,118,115,95,54,95,56,51,0)], [String.fromCharCode(98,109,111,100,101,95,109,95,49,48,0),String.fromCharCode(105,115,105,95,112,95,54,48,0)], [String.fromCharCode(97,95,49,55,95,112,116,114,115,0),String.fromCharCode(111,95,50,50,95,102,97,100,101,100,0)]]);
          let blacklistY = false;
          let infov: Map<any, any> = new Map([[String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,95,113,95,50,55,0),542], [String.fromCharCode(104,95,50,53,95,97,114,114,97,121,115,0),457]]);
         contextu += 3 % (Math.max(6, parseInt(`${contextu}`)));
         eventJ = (96 < (infov.size * (eventJ ? infov.size : 81)));
         sortv.set(`${blacklistY}`, 1);
         if (hoverD) {
            break;
         }
      } while (hoverD && ((4.18 + contextu) < 5.75 && 5.6 < (contextu + 4.18)));
          let gesture7 = String.fromCharCode(100,105,115,97,98,108,101,100,95,54,95,51,50,0);
          let filterI = true;
          let mergeri = 3;
         contextu /= Math.max((parseInt(`${contextu}`) ^ (filterI ? 3 : 3)), 3);
         gesture7 = `${gesture7.length}`;
         filterI = gesture7.length < 47;
         mergeri /= Math.max(1 & gesture7.length, 2);
      searchbarR = [sharedh + parseInt(`${contextu}`)];
   }
   if ((hookt / (Math.max(5.7, 4))) > 4.10 || 5.7 > (hookt / (Math.max(9, tickedq)))) {
      tickedq /= Math.max(parseFloat(`${parseInt(`${hookt}`)}`), 3);
   }
   for (let u = 0; u < 3; u++) {
      fullscreenmind.push(3 - singleE.length);
   }
   for (let f = 0; f < 1; f++) {
       let playercommont = String.fromCharCode(112,112,99,99,111,109,109,111,110,95,100,95,50,56,0);
       let tick6 = true;
       let animationsQ = String.fromCharCode(99,95,57,54,95,99,97,110,99,101,108,0);
      if (playercommont == String.fromCharCode(110,0)) {
         animationsQ = `${playercommont.length}`;
      }
          let fullscreenmin7: Map<any, any> = new Map([[String.fromCharCode(115,117,98,114,101,115,117,108,116,115,95,120,95,54,50,0),213], [String.fromCharCode(101,99,117,114,115,105,118,101,95,120,95,53,57,0),177], [String.fromCharCode(112,95,51,48,95,104,97,112,116,105,99,0),296]]);
          let path3 = false;
         playercommont += "2";
         fullscreenmin7.set(`${path3}`, fullscreenmin7.size);
         tick6 = playercommont.length > 70;
         tick6 = !tick6;
         tick6 = animationsQ.length > 19;
         tick6 = 42 >= playercommont.length;
      for (let e = 0; e < 1; e++) {
          let vipsportZ: Array<any> = [653, 385];
          let corner9 = 1.0;
          let iconarrowrightorangew = String.fromCharCode(104,95,56,51,95,114,114,116,114,0);
          let iconarrowrightorangeY = true;
          let sideX: Map<any, any> = new Map([[String.fromCharCode(97,108,116,114,101,102,95,57,95,57,0),54], [String.fromCharCode(109,95,57,54,95,115,116,111,114,101,102,114,97,109,101,0),24]]);
         tick6 = sideX.size == 63;
         vipsportZ = [((iconarrowrightorangeY ? 2 : 2) + 3)];
         corner9 *= (parseFloat(`${parseInt(`${corner9}`) % (Math.max(4, (iconarrowrightorangeY ? 4 : 5)))}`));
         iconarrowrightorangew = `${parseInt(`${corner9}`) << (Math.min(vipsportZ.length, 5))}`;
         sideX = new Map([[iconarrowrightorangew, parseInt(`${corner9}`) - iconarrowrightorangew.length]]);
      }
       let countdownh = String.fromCharCode(105,95,49,48,48,95,97,117,116,111,102,111,114,109,97,116,116,105,110,103,0);
       let i_imageW = String.fromCharCode(108,111,99,111,95,55,95,54,48,0);
      let resultm = 9738186 >= i_imageW.length;
      do {
         i_imageW += `${animationsQ.length}`;
         if (resultm) {
            break;
         }
      } while (resultm && (!tick6 || 3 < i_imageW.length));
      libreactnativejniK /= Math.max(5, 2);
   }
   if ((videojs9 / 3) > 3 || 1 > (fullscreenmind.length / 3)) {
       let colorsM = 2.0;
       let embed1 = String.fromCharCode(111,119,110,115,95,114,95,49,54,0);
       let dangerv = String.fromCharCode(102,105,108,101,115,121,115,116,101,109,95,119,95,57,48,0);
      let logind = String.fromCharCode(114,100,48,52,118,51,111,0) == embed1;
      do {
         embed1 = `${dangerv.length >> (Math.min(Math.abs(1), 2))}`;
         if (logind) {
            break;
         }
      } while (logind && (5.88 >= colorsM));
      while (1 < (dangerv.length - parseInt(`${colorsM}`))) {
          let schedulerx = String.fromCharCode(116,104,114,111,116,116,108,101,114,95,48,95,52,49,0);
         dangerv = `${dangerv.length}`;
         schedulerx += "3";
         break;
      }
      if (5 > (parseInt(`${colorsM}`) + 3) || 5.82 > (3.31 + colorsM)) {
         embed1 += `${embed1.length << (Math.min(dangerv.length, 5))}`;
      }
      let frame_lhY = String.fromCharCode(121,116,97,48,56,110,121,105,100,0) == embed1;
      do {
         embed1 = `${(embed1 == String.fromCharCode(69,0) ? parseInt(`${colorsM}`) : embed1.length)}`;
         if (frame_lhY) {
            break;
         }
      } while ((dangerv != String.fromCharCode(68,0) || 5 == embed1.length) && frame_lhY);
      let update_i3 = embed1.length >= 7859526;
      do {
          let dragw = 0.0;
          let scrollview6 = 4;
          let launchF = true;
          let controls4 = String.fromCharCode(110,95,54,53,95,112,114,111,112,111,114,116,105,111,110,0);
          let usernameM = 5;
         embed1 = "2";
         dragw -= (parseFloat(`${scrollview6 << (Math.min(1, Math.abs((launchF ? 4 : 1))))}`));
         scrollview6 += usernameM;
         launchF = parseFloat(`${scrollview6}`) <= dragw;
         controls4 = `${scrollview6 & 1}`;
         usernameM ^= scrollview6 + 1;
         if (update_i3) {
            break;
         }
      } while ((1.94 > (colorsM * embed1.length) && (embed1.length * parseInt(`${colorsM}`)) > 1) && update_i3);
          let controli = String.fromCharCode(121,117,118,112,116,111,121,117,121,95,51,95,51,53,0);
          let libavformatQ: Array<any> = [123, 292];
          let inactiven = String.fromCharCode(122,95,50,48,95,111,112,101,110,0);
         dangerv += `${2 - libavformatQ.length}`;
         controli += `${(String.fromCharCode(68,0) == controli ? inactiven.length : controli.length)}`;
         libavformatQ.push((String.fromCharCode(49,0) == controli ? inactiven.length : controli.length));
      while (colorsM > 3.82) {
         dangerv += `${embed1.length}`;
         break;
      }
      let controlsk = 5833115.0 >= colorsM;
      do {
         colorsM *= 2;
         if (controlsk) {
            break;
         }
      } while ((1.80 == colorsM) && controlsk);
       let pageO = 5.0;
       let yellowanimationliveT = 5.0;
      fullscreenmind.push(searchbarR.length);
   }
       let kuaishouG = 3;
       let gmailU = String.fromCharCode(108,97,121,101,114,115,95,99,95,51,55,0);
       let darkj = String.fromCharCode(111,95,55,57,95,105,119,104,116,120,0);
         kuaishouG ^= 1;
      while (3 < darkj.length) {
         gmailU = `${darkj.length / 3}`;
         break;
      }
      let baiduX = 9668301 <= darkj.length;
      do {
          let zhubop = 2.0;
          let roundh = String.fromCharCode(120,95,51,56,95,112,97,115,116,101,108,0);
         darkj = "1";
         zhubop += parseFloat(`${roundh.length ^ 1}`);
         roundh += `${parseInt(`${zhubop}`) + 1}`;
         if (baiduX) {
            break;
         }
      } while (baiduX && (1 >= (3 << (Math.min(4, Math.abs(kuaishouG)))) && 4 >= (3 << (Math.min(5, Math.abs(kuaishouG))))));
          let matchinactivek: Array<any> = [498, 686, 1];
          let phoneshare0 = String.fromCharCode(117,110,104,105,100,101,95,111,95,50,55,0);
          let albumG: Array<any> = [309, 279, 183];
         gmailU += `${gmailU.length | 3}`;
         matchinactivek.push(phoneshare0.length + albumG.length);
         phoneshare0 = `${3 ^ phoneshare0.length}`;
         albumG = [phoneshare0.length];
         gmailU = `${darkj.length / 1}`;
         kuaishouG >>= Math.min(gmailU.length, 4);
          let launcher4 = String.fromCharCode(121,95,53,48,95,112,97,114,97,98,111,108,108,105,99,0);
          let usernameq = String.fromCharCode(116,95,55,52,95,100,101,112,0);
          let template_dk4: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,95,103,95,56,54,0),833], [String.fromCharCode(119,95,57,56,95,101,102,102,101,99,116,115,0),812], [String.fromCharCode(109,95,54,49,95,99,111,100,101,99,105,100,0),441]]);
         darkj += `${2 * template_dk4.size}`;
         launcher4 += `${(usernameq == String.fromCharCode(85,0) ? launcher4.length : usernameq.length)}`;
         template_dk4 = new Map([[launcher4, usernameq.length + launcher4.length]]);
          let bingG = String.fromCharCode(117,95,51,48,95,112,114,111,98,105,110,103,0);
          let mbnativeadvancedd = 0.0;
         kuaishouG *= 1 & parseInt(`${mbnativeadvancedd}`);
         bingG = `${bingG.length}`;
         mbnativeadvancedd += bingG.length;
      if (gmailU == String.fromCharCode(76,0)) {
          let debugx = 1;
          let alertM = true;
          let expiredx = true;
         darkj += "1";
         debugx |= (1 / (Math.max(5, (expiredx ? 2 : 5))));
         alertM = expiredx;
      }
      tickedq -= parseFloat(`${searchbarR.length - sharedh}`);

          dispatch(incrementSportWatchTime());
        }, 1000);

        return () => clearInterval(unsub);
      }
    }, [route.name])

    const pauseSportVideo =
      route.name === "体育详情" &&
      screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS &&
      !mayi_Gift.isVip(userState.user);

    return (
      <View style={styles.container}>
        <View style={{ ...styles.bofangBox }}>
          {!(vod_url !== undefined || vod_source !== undefined) ? (
            <View
              style={{
                width: "100%",
                aspectRatio: 16 / 9,
                backgroundColor: "black",
              }}
            />
          ) : useWebview ? (
            <WebView
              resizeMode="contain"
              source={vod_url === undefined ? vod_source : { uri: vod_url }}
              style={styles.video}
              onLoad={onVideoLoaded}
            />
          ) : (
            <VideoWithControlsMin
              playbackRate={playbackRate}
              videoPlayerRef={videoPlayerRef}
              isPaused={isPaused || pauseSportVideo} 
              vod_source={vod_source}
              vod_url={vod_url}
              currentTimeRef={currentTimeRef}
              controlsRef={controlsRef}
              currentTime={currentTime}
              duration={duration}
              isFullScreen={isFullScreen}
              vodTitle={vodTitle}
              videoType={videoType}
              activeEpisode={activeEpisode}
              episodes={episodes}
              rangeSize={rangeSize}
              accumulatedSkip={accumulatedSkip.current}
              movieList={movieList}
              showGuide={showGuide}
              showMoreType={showMoreType}
              streams={streams}
              isFetchingRecommendedMovies={isFetchingRecommendedMovies}
              onBuffer={onBuffer}
              getNextEpisode={getNextEpisode}
              onVideoLoaded={onVideoLoaded}
              onVideoProgessing={onVideoProgessing}
              onSeek={onSeek}
              onSeekGesture={onSeekGesture}
              onSkip={onSkip}
              onTogglePlayPause={onTogglePlayPause}
              onToggleFullScreen={onToggleFullScreen}
              onGoBack={onGoBack}
              setPlaybackRate={setPlaybackRate}
              changeEpisodeAndPlay={changeEpisodeAndPlay}
              onShare={onShare}
              onReadyForDisplay={onReadyForDisplay}
            />
          )}
        </View>

        {(bufferRef.current || seekDirection !== "none") && (
          <View style={styles.buffering}>
            {seekDirection !== "none" ? (
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0,0,0,0.4)",
                  padding: 8,
                  borderRadius: 8,
                }}
              >
                {seekDirection === "frame_tTick" ? (
                  <FastForwardProgressIcon height={50} width={50} />
                ) : (
                  <RewindProgressIcon height={50} width={50} />
                )}
                {duration > 3600 ? (
                  <Text
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Text
                      style={{ ...textVariants.header, color: colors.primary }}
                    >
                      {new Date(currentTime * 1000)
                        .toISOString()
                        .substring(11, 19)}
                    </Text>
                    <Text style={{ ...textVariants.header }}>
                      {` / ${new Date(duration * 1000)
                        .toISOString()
                        .substring(11, 19)}`}
                    </Text>
                  </Text>
                ) : (
                  <Text
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Text
                      style={{ ...textVariants.header, color: colors.primary }}
                    >
                      {new Date(currentTime * 1000)
                        .toISOString()
                        .substring(14, 19)}
                    </Text>
                    <Text style={{ ...textVariants.header }}>
                      {` / ${new Date(duration * 1000)
                        .toISOString()
                        .substring(14, 19)}`}
                    </Text>
                  </Text>
                )}
              </View>
            ) : (
              <FastImage
                source={require("@static/images/sharedImageReactnativeratings.gif")}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
              />
            )}
          </View>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  bofangBox: {
    aspectRatio: 16 / 9,
    maxHeight: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  buffering: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "carouselLibreactnativejniLibsentry",
    position: "absolute",
    height: "auto",
    width: "auto",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "black",
  },
});
