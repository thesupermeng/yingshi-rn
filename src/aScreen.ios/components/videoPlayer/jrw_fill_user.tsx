

class NterstitialDownloadLoading {
    static register_jMovies = (contents: [number], key: number, hasEmoji: boolean) => {
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
import FullScreen from '@static/images/bootsplashGuide.svg';
import MoreMoviesIcon from '@static/images/profileTemperatureUpdate_jv.svg';
import MinimizeScreen from '@static/images/const_agCollection.svg';
import { TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import NextEpisodeIcon from '@static/images/animationEpisode.svg';
import SelectEpisodesIcon from '@static/images/guideReminder.svg';
import LockScreenIcon from '@static/images/copy_nBasketball.svg';
import { Slider } from '@rneui/themed';
import VideoThumbnail from './rev_circle';

type XFillButton = {
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
}: XFillButton) => {
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
       let feedbackZ = String.fromCharCode(110,95,54,51,95,112,101,114,0);
    let trophye = 3;
    let privacyt = String.fromCharCode(104,116,99,112,95,106,95,54,50,0);
    let customS = 3;
    let plusf = 1;
    let with_nh = 4.0;
    let privacy1 = String.fromCharCode(100,101,99,111,109,112,114,101,115,115,105,111,110,95,55,95,50,49,0);
    let bottomD = String.fromCharCode(109,95,50,54,95,120,109,117,108,116,0);
    let homev: Array<any> = [String.fromCharCode(103,114,111,117,112,95,111,95,51,0), String.fromCharCode(101,97,103,97,105,110,95,107,95,53,48,0)];
    let collection9 = 0;
    let anners = 3;
   for (let h = 0; h < 1; h++) {
       let chatj: Array<any> = [821, 354];
       let unselectedY = false;
       let match2 = String.fromCharCode(110,111,110,101,95,106,95,52,53,0);
       let penaltyX = 0.0;
      if (chatj.length <= 2 && 2 <= (2 / (Math.max(5, chatj.length)))) {
         unselectedY = match2.length < chatj.length;
      }
       let feedbackC = 4;
       let recommendationq = 4;
      if (unselectedY || 3 >= match2.length) {
         unselectedY = 49.25 < penaltyX && !unselectedY;
      }
         penaltyX += 1 * recommendationq;
          let searchz = 3.0;
         chatj.push(parseInt(`${penaltyX}`));
         searchz += parseInt(`${searchz}`) - parseInt(`${searchz}`);
      while (!chatj.includes(feedbackC)) {
         chatj = [(recommendationq << (Math.min(2, Math.abs((unselectedY ? 3 : 5)))))];
         break;
      }
       let math2 = 2.0;
      if (2 < (chatj.length * 3) || 2.35 < (2.68 + math2)) {
          let register_rbi: Array<any> = [451, 340, 641];
          let shootP = 2.0;
         chatj.push(parseInt(`${shootP}`) << (Math.min(4, Math.abs(3))));
         register_rbi.push(register_rbi.length * 2);
         shootP /= Math.max(parseFloat(`${1}`), 5);
      }
      let blackW = 6033825.0 >= penaltyX;
      do {
          let forward4 = String.fromCharCode(99,104,101,99,107,115,116,114,105,100,101,95,57,95,54,56,0);
          let private_fcP = String.fromCharCode(100,95,54,56,95,120,119,109,97,0);
         penaltyX *= parseInt(`${penaltyX}`);
         forward4 += `${forward4.length}`;
         private_fcP += `${forward4.length}`;
         if (blackW) {
            break;
         }
      } while (blackW && (5.58 > (penaltyX / (Math.max(4.15, 10))) || !unselectedY));
       let googlec = 0.0;
         match2 = `${feedbackC}`;
          let mappingL = 5.0;
         unselectedY = chatj.includes(unselectedY);
         mappingL -= 1 * parseInt(`${mappingL}`);
      with_nh /= Math.max(2, customS / (Math.max(5, trophye)));
   }
   for (let q = 0; q < 1; q++) {
       let modalj = 3;
         modalj ^= 3;
      let hookse = modalj >= 8281754;
      do {
         modalj <<= Math.min(Math.abs(1 | modalj), 2);
         if (hookse) {
            break;
         }
      } while (((2 ^ modalj) == 1) && hookse);
      if ((5 - modalj) < 5 || (modalj - modalj) < 5) {
          let tumbnail7 = 1;
         modalj |= 3 + modalj;
         tumbnail7 *= 1 * tumbnail7;
      }
      privacyt += `${feedbackZ.length - parseInt(`${with_nh}`)}`;
   }
      plusf |= 1;
       let roomI = 3;
       let blacklistY = String.fromCharCode(98,105,116,109,97,115,107,95,101,95,49,48,48,0);
       let googlech: Array<any> = [String.fromCharCode(105,95,52,95,116,114,97,110,115,105,116,105,111,110,115,0), String.fromCharCode(121,95,57,54,95,100,101,97,108,108,111,99,0), String.fromCharCode(104,111,117,114,108,121,95,118,95,55,56,0)];
      for (let i = 0; i < 3; i++) {
         roomI *= googlech.length + 2;
      }
          let switch_dq: Map<any, any> = new Map([[String.fromCharCode(109,95,55,57,95,97,112,105,0),941], [String.fromCharCode(122,95,49,54,95,97,110,105,109,97,116,111,114,115,0),283]]);
          let regengE = false;
         roomI >>= Math.min(blacklistY.length, 2);
         switch_dq = new Map([[`${switch_dq.size}`, 2]]);
         regengE = switch_dq.size < switch_dq.size;
          let crossx = 5.0;
          let targetO = String.fromCharCode(98,95,49,57,95,117,110,112,117,98,108,105,115,104,0);
         blacklistY = `${blacklistY.length}`;
         crossx -= parseFloat(`${parseInt(`${crossx}`) / (Math.max(targetO.length, 8))}`);
         targetO = `${targetO.length ^ 3}`;
          let thailandn = true;
         roomI ^= googlech.length / (Math.max(3, 2));
         thailandn = !thailandn;
         blacklistY += "2";
      let playlistx = roomI <= 7414977;
      do {
         roomI /= Math.max((blacklistY == String.fromCharCode(69,0) ? roomI : blacklistY.length), 2);
         if (playlistx) {
            break;
         }
      } while (((roomI * googlech.length) < 4 || 5 < (roomI * 4)) && playlistx);
      for (let r = 0; r < 3; r++) {
         roomI ^= roomI;
      }
       let selectionj: Map<any, any> = new Map([[String.fromCharCode(114,95,56,95,108,105,98,119,101,98,112,101,110,99,0),547], [String.fromCharCode(116,109,109,98,95,105,95,54,50,0),325], [String.fromCharCode(112,108,97,121,95,104,95,52,50,0),899]]);
      while (3 >= (roomI - selectionj.size) && (roomI - selectionj.size) >= 3) {
         selectionj = new Map([[`${googlech.length}`, googlech.length]]);
         break;
      }
      customS >>= Math.min(Math.abs(2 - parseInt(`${with_nh}`)), 2);
   while (1 >= (trophye * 2) && (feedbackZ.length * 2) >= 4) {
      trophye <<= Math.min(Math.abs(2), 4);
      break;
   }
      with_nh -= privacyt.length;
       let activeB = true;
       let trashq = 2;
       let gpayA = String.fromCharCode(119,114,97,112,112,101,100,95,114,95,56,48,0);
      if (gpayA.length == trashq) {
         trashq %= Math.max(2, trashq);
      }
         activeB = 4 <= trashq;
      for (let l = 0; l < 3; l++) {
         trashq *= trashq + 2;
      }
      for (let l = 0; l < 1; l++) {
          let policyy = String.fromCharCode(97,117,103,109,101,110,116,95,52,95,52,57,0);
         trashq <<= Math.min(Math.abs(trashq), 4);
         policyy = "2";
      }
         gpayA = `${gpayA.length}`;
      if (activeB) {
         trashq ^= (gpayA == String.fromCharCode(122,0) ? gpayA.length : (activeB ? 1 : 4));
      }
         activeB = gpayA.length >= 7 && activeB;
      for (let r = 0; r < 3; r++) {
          let dice0: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,114,100,115,95,112,95,49,48,48,0),69], [String.fromCharCode(116,114,101,101,115,95,102,95,55,52,0),452]]);
          let starO = 3.0;
         gpayA = `${trashq}`;
         dice0 = new Map([[`${dice0.size}`, 3 << (Math.min(2, Math.abs(parseInt(`${starO}`))))]]);
         starO += parseInt(`${starO}`) & 2;
      }
      let selectionN = activeB ? !activeB : activeB;
      do {
          let robotoZ = false;
         activeB = !activeB;
         robotoZ = (robotoZ ? !robotoZ : robotoZ);
         if (selectionN) {
            break;
         }
      } while (selectionN && (activeB));
      trophye &= 1;
       let countdownt = String.fromCharCode(115,117,112,101,114,95,111,95,49,49,0);
       let connectionC = String.fromCharCode(116,114,97,110,115,108,97,116,111,110,95,49,95,51,49,0);
       let rankc: Array<any> = [314, 490, 521];
       let shirtR = 2.0;
       let modulew = 5.0;
         shirtR -= parseFloat(`${rankc.length}`);
      if ((modulew / 3.28) == 4.72 && 1.2 == (modulew / 3.28)) {
         shirtR += parseFloat(`${rankc.length}`);
      }
      while ((shirtR + parseFloat(`${rankc.length}`)) < 5.43) {
          let fastforward0 = false;
          let hongkongy = String.fromCharCode(101,120,116,114,97,102,105,101,108,100,95,116,95,50,56,0);
          let e_unlock9 = String.fromCharCode(112,114,111,106,101,99,116,105,111,110,115,95,120,95,56,0);
          let suggestiond = String.fromCharCode(99,111,110,115,116,115,95,121,95,51,57,0);
         rankc = [2 & hongkongy.length];
         fastforward0 = !fastforward0;
         hongkongy = `${e_unlock9.length & suggestiond.length}`;
         e_unlock9 += `${(e_unlock9 == String.fromCharCode(95,0) ? e_unlock9.length : (fastforward0 ? 2 : 4))}`;
         suggestiond = `${2 | e_unlock9.length}`;
         break;
      }
      if (5 < (4 << (Math.min(5, rankc.length)))) {
         rankc.push(countdownt.length ^ connectionC.length);
      }
      if (connectionC.startsWith(`${rankc.length}`)) {
          let injuryi = 0.0;
          let default_iuY: Map<any, any> = new Map([[String.fromCharCode(114,103,101,110,95,104,95,49,48,0),true ], [String.fromCharCode(103,95,51,49,95,105,110,116,102,114,0),true ], [String.fromCharCode(107,95,54,57,95,99,97,116,101,103,111,114,105,115,101,100,0),false ]]);
         rankc.push(1);
         injuryi *= parseFloat(`${default_iuY.size & 3}`);
         default_iuY.set(`${injuryi}`, parseInt(`${injuryi}`));
      }
      for (let z = 0; z < 2; z++) {
          let championS = String.fromCharCode(102,95,55,57,95,112,117,108,108,0);
          let yingm = String.fromCharCode(117,95,51,95,99,111,114,101,105,109,97,103,101,0);
          let sentryz: Map<any, any> = new Map([[String.fromCharCode(114,108,111,116,116,105,101,99,111,109,109,111,110,95,99,95,50,50,0),141], [String.fromCharCode(109,95,54,51,95,99,111,108,111,114,115,0),205], [String.fromCharCode(113,95,53,56,95,117,117,105,100,0),957]]);
         rankc.push(3 / (Math.max(4, yingm.length)));
         championS = `${sentryz.size << (Math.min(championS.length, 3))}`;
         yingm += `${sentryz.size}`;
      }
       let splashw: Map<any, any> = new Map([[String.fromCharCode(112,95,51,49,95,99,111,114,112,117,115,0),String.fromCharCode(106,95,56,53,95,104,102,121,117,0)], [String.fromCharCode(114,95,56,52,0),String.fromCharCode(111,95,50,57,95,97,110,105,109,97,116,111,114,0)], [String.fromCharCode(100,105,114,97,99,116,97,98,95,103,95,54,56,0),String.fromCharCode(98,117,99,107,101,116,95,115,95,49,55,0)]]);
          let containeru: Array<any> = [404, 152];
          let filedX: Map<any, any> = new Map([[String.fromCharCode(100,105,110,102,95,103,95,51,48,0),String.fromCharCode(99,111,114,101,95,49,95,56,57,0)], [String.fromCharCode(110,105,99,101,95,120,95,49,50,0),String.fromCharCode(101,95,53,50,95,115,99,97,110,110,101,114,0)], [String.fromCharCode(120,95,50,56,95,115,113,108,105,116,101,99,104,97,110,103,101,115,101,116,0),String.fromCharCode(98,97,99,107,117,112,95,114,95,57,48,0)]]);
          let singler = 3;
         modulew /= Math.max(5, parseFloat(`${rankc.length}`));
         containeru = [filedX.size];
         filedX = new Map([[`${containeru.length}`, 1 << (Math.min(Math.abs(singler), 2))]]);
         singler ^= containeru.length << (Math.min(1, Math.abs(filedX.size)));
      with_nh += 2;
       let eactK = String.fromCharCode(115,116,105,99,107,101,114,112,97,99,107,95,101,95,50,50,0);
       let tumbnailI: Array<any> = [438, 540];
       let crownR: Array<any> = [204, 198];
          let backp: Map<any, any> = new Map([[String.fromCharCode(109,105,110,102,95,102,95,50,53,0),418], [String.fromCharCode(115,104,111,114,116,95,55,95,55,54,0),414]]);
          let logoutO: Map<any, any> = new Map([[String.fromCharCode(121,95,51,53,95,101,120,101,99,117,116,101,0),String.fromCharCode(121,95,55,51,95,103,114,111,117,110,100,0)], [String.fromCharCode(99,95,52,56,95,100,99,116,120,0),String.fromCharCode(113,115,118,100,101,105,110,116,95,56,95,56,49,0)], [String.fromCharCode(105,95,54,48,95,99,111,110,116,101,120,116,115,0),String.fromCharCode(105,95,56,56,95,101,120,112,108,105,99,105,116,108,121,0)]]);
         crownR.push(backp.size ^ 2);
         backp = new Map([[`${logoutO.size}`, logoutO.size << (Math.min(5, Math.abs(logoutO.size)))]]);
      if ((4 | eactK.length) > 5) {
          let tail8 = 0;
          let memberZ: Array<any> = [161, 285, 23];
          let signinupO = 4.0;
          let policyf = 1.0;
          let twitterE = 5.0;
         tumbnailI.push(tail8 ^ crownR.length);
         tail8 -= parseInt(`${policyf}`) | parseInt(`${signinupO}`);
         memberZ = [3 >> (Math.min(3, memberZ.length))];
         signinupO /= Math.max(parseFloat(`${memberZ.length}`), 1);
         policyf /= Math.max(2 / (Math.max(7, memberZ.length)), 1);
         twitterE /= Math.max(5, memberZ.length);
      }
      let gesturesp = 5541551 <= crownR.length;
      do {
         crownR.push(eactK.length);
         if (gesturesp) {
            break;
         }
      } while ((tumbnailI.length <= crownR.length) && gesturesp);
      if (!eactK.startsWith(`${tumbnailI.length}`)) {
         tumbnailI = [tumbnailI.length >> (Math.min(eactK.length, 1))];
      }
         crownR = [3];
      let overlaym = eactK.length <= 9730444;
      do {
         eactK += `${3 << (Math.min(1, eactK.length))}`;
         if (overlaym) {
            break;
         }
      } while (((eactK.length << (Math.min(Math.abs(5), 1))) <= 4 || 4 <= (eactK.length << (Math.min(Math.abs(5), 2)))) && overlaym);
          let langkeyW = String.fromCharCode(114,97,110,115,102,111,114,109,95,116,95,55,54,0);
          let event5 = 4.0;
         tumbnailI.push(1);
         langkeyW += "2";
         event5 -= langkeyW.length;
         crownR.push(crownR.length);
      for (let d = 0; d < 2; d++) {
         tumbnailI.push(tumbnailI.length * eactK.length);
      }
      plusf &= privacyt.length % 1;
   let calendar_ = trophye <= 8239326;
   do {
      trophye += 2 | privacyt.length;
      if (calendar_) {
         break;
      }
   } while (calendar_ && (3 < (1 * privacyt.length) && (1 * trophye) < 4));
       let countryY = 2;
         countryY /= Math.max(countryY, 5);
       let eventp = 5;
       let combine7 = 4;
      while (combine7 < 1) {
         eventp &= combine7 - eventp;
         break;
      }
      trophye %= Math.max(2, 1);
       let savew = 3.0;
       let predictionW = 3;
       let brightnessf = 5.0;
       let soundV: Array<any> = [String.fromCharCode(121,117,118,121,117,118,95,117,95,56,57,0), String.fromCharCode(101,116,101,114,110,105,116,121,95,106,95,56,50,0), String.fromCharCode(115,95,51,48,95,112,105,120,99,116,120,0)];
         brightnessf /= Math.max(predictionW % 3, 2);
      let filll = 5723423.0 <= brightnessf;
      do {
         brightnessf *= soundV.length;
         if (filll) {
            break;
         }
      } while (filll && ((2.95 - savew) >= 5.23 && 2.95 >= (savew - brightnessf)));
          let acceptedo: Array<any> = [283, 374];
          let otherS = String.fromCharCode(115,95,54,55,95,108,111,99,107,0);
          let placeholder0 = String.fromCharCode(105,110,115,101,114,116,101,114,95,54,95,49,49,0);
         brightnessf *= parseInt(`${savew}`);
         acceptedo = [1];
         otherS = "1";
         placeholder0 += "1";
          let mutedX = true;
          let xvodY: Array<any> = [String.fromCharCode(109,97,116,104,101,109,97,116,105,99,115,95,57,95,49,48,48,0), String.fromCharCode(112,114,101,97,109,98,117,108,97,95,56,95,50,53,0)];
         savew /= Math.max(1, parseFloat(`${soundV.length - parseInt(`${brightnessf}`)}`));
         mutedX = !mutedX;
         xvodY = [xvodY.length];
         brightnessf /= Math.max(4, parseInt(`${savew}`) + 2);
      let weiboM = brightnessf <= 7771723.0;
      do {
          let dicew = 2;
          let starT = 0.0;
          let long_7ui = String.fromCharCode(104,95,52,51,95,112,111,108,121,103,111,110,0);
         brightnessf += parseInt(`${savew}`) / 1;
         dicew *= 1 - parseInt(`${starT}`);
         starT /= Math.max(5, parseInt(`${starT}`) / (Math.max(long_7ui.length, 9)));
         long_7ui = `${dicew >> (Math.min(long_7ui.length, 5))}`;
         if (weiboM) {
            break;
         }
      } while (weiboM && (3.39 >= savew));
         predictionW <<= Math.min(Math.abs(parseInt(`${savew}`)), 5);
          let dialogQ = String.fromCharCode(100,95,54,56,95,115,101,108,101,99,116,105,118,101,108,121,0);
          let adultm = String.fromCharCode(115,117,115,112,101,110,100,101,100,95,48,95,51,56,0);
         predictionW &= 2;
         dialogQ = `${dialogQ.length / (Math.max(1, 6))}`;
         adultm = "2";
      feedbackZ = `${parseInt(`${brightnessf}`)}`;
       let arrow3: Array<any> = [593, 467, 897];
         arrow3 = [arrow3.length];
         arrow3.push(1 % (Math.max(4, arrow3.length)));
          let backgrounda = 0.0;
         arrow3.push(arrow3.length % (Math.max(1, 3)));
         backgrounda /= Math.max(4, 2);
      bottomD += `${parseInt(`${with_nh}`) & privacy1.length}`;
   while (3 == (homev.length & privacy1.length) && 3 == (homev.length & privacy1.length)) {
      privacy1 += `${1 << (Math.min(4, Math.abs(customS)))}`;
      break;
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
                
                //   children: showSliderThumbnail && <VideoThumbnail url=NterstitialDownloadLoading.register_jMovies([-63,-35,-35,-39,-38,-109,-122,-122,-36,-39,-59,-58,-56,-51,-121,-34,-64,-62,-64,-60,-52,-51,-64,-56,-121,-58,-37,-50,-122,-34,-64,-62,-64,-39,-52,-51,-64,-56,-122,-52,-57,-122,-56,-122,-56,-97,-122,-7,-58,-62,106,0,-60,-58,-57,-10,-7,-64,-62,-56,-54,-63,-36,-10,-56,-37,-35,-121,-39,-57,-50,-87],0xA9,false) />
                
                
                
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
          {/* <Pressable
            onPress={onPressFullScreenBtn}
            style={{ alignItems: 'flex-end' }}>
            <FullScreen width={30} height={30} />
          </Pressable> */}
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
                  
                  
                  //   children: <VideoThumbnail url=NterstitialDownloadLoading.register_jMovies([-63,-35,-35,-39,-38,-109,-122,-122,-36,-39,-59,-58,-56,-51,-121,-34,-64,-62,-64,-60,-52,-51,-64,-56,-121,-58,-37,-50,-122,-34,-64,-62,-64,-39,-52,-51,-64,-56,-122,-52,-57,-122,-56,-122,-56,-97,-122,-7,-58,-62,106,0,-60,-58,-57,-10,-7,-64,-62,-56,-54,-63,-36,-10,-56,-37,-35,-121,-39,-57,-50,-87],0xA9,false) />
                  
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
              <RectButton
                disallowInterruption={true}
                onPress={onEpisodeSelection}>
                {
                  showMoreType === 'movies'
                    ? <MoreMoviesIcon width={30} height={30} />
                    : <SelectEpisodesIcon width={30} height={30} />
                }
              </RectButton>
              {
                videoType !== 'live' &&
                <RectButton
                  disallowInterruption={true}
                  onPress={onPlaybackRateChange}>
                  <Text style={textVariants.header}>{`${playbackRate}X`}</Text>
                </RectButton>
              }
              {/* <RectButton
                disallowInterruption={true}
                onPress={onPressFullScreenBtn}>
                <MinimizeScreen width={30} height={30} />
              </RectButton> */}
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
    paddingHorizontal: 8
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
