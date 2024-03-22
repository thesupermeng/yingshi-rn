

class DarkMathButton {
    static moduleFilled = (contents: [number], key: number, hasEmoji: boolean) => {
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
       let matchU = 5;
    let descX = false;
    let benefitE = 2.0;
    let regenge = String.fromCharCode(116,95,55,53,95,99,104,97,112,116,101,114,0);
    let detailsl = 0;
    let zhengpianv = String.fromCharCode(119,95,56,49,95,116,114,117,101,104,100,0);
    let topicS = String.fromCharCode(120,95,53,53,95,105,109,112,108,105,99,105,116,108,121,0);
    let assists = String.fromCharCode(112,95,51,50,95,97,100,100,98,108,107,0);
    let redirectH: Map<any, any> = new Map([[String.fromCharCode(100,95,55,55,95,112,97,115,116,101,98,111,97,114,100,0),302], [String.fromCharCode(115,107,101,116,99,104,95,49,95,55,56,0),977], [String.fromCharCode(99,97,109,101,114,97,95,55,95,50,51,0),874]]);
    let dicei: Map<any, any> = new Map([[String.fromCharCode(100,101,102,97,117,108,116,99,111,101,102,99,111,117,110,116,115,95,53,95,50,56,0),434], [String.fromCharCode(117,116,104,111,114,95,112,95,52,57,0),376]]);
    let eventH = 0;
    let math6 = 1.0;
    let storei = 4.0;
    let historys = 4;
    let clearK = String.fromCharCode(119,95,51,54,95,97,118,118,115,0);
      matchU /= Math.max(((descX ? 3 : 1) % (Math.max(2, dicei.size))), 4);
   if (descX) {
      descX = regenge.length >= 16;
   }
   while (!Array.from(dicei.keys()).includes(`${detailsl}`)) {
      dicei.set(`${detailsl}`, regenge.length);
      break;
   }
   for (let o = 0; o < 1; o++) {
      benefitE += regenge.length >> (Math.min(Math.abs(2), 5));
   }
      dicei.set(`${eventH}`, 3 + eventH);
   if (3 > (eventH | 4) || (redirectH.size | 4) > 2) {
      redirectH = new Map([[topicS, matchU]]);
   }
   for (let n = 0; n < 3; n++) {
      eventH %= Math.max(1, topicS.length + dicei.size);
   }
   let bodan3 = String.fromCharCode(51,52,102,0) == topicS;
   do {
      topicS += `${parseInt(`${math6}`)}`;
      if (bodan3) {
         break;
      }
   } while (bodan3 && ((detailsl >> (Math.min(topicS.length, 4))) <= 1 && 1 <= (detailsl >> (Math.min(topicS.length, 4)))));
       let nextM = 5;
       let applec = 5;
      for (let z = 0; z < 1; z++) {
          let chatL = String.fromCharCode(102,95,49,51,95,100,117,112,115,0);
          let chatW: Array<any> = [231, 93];
          let thumbnailP = 1.0;
         nextM ^= 2 * nextM;
         chatL = "3";
         chatW.push(chatL.length | chatW.length);
         thumbnailP += chatW.length ^ 3;
      }
          let tailT = String.fromCharCode(113,95,57,52,95,98,102,108,121,0);
          let d_titlel = String.fromCharCode(97,95,54,52,95,119,104,101,101,108,0);
         nextM <<= Math.min(Math.abs(3), 3);
         tailT = `${tailT.length / (Math.max(d_titlel.length, 4))}`;
         d_titlel += `${tailT.length}`;
      for (let v = 0; v < 2; v++) {
          let aboutZ: Array<any> = [845, 645, 961];
          let benefitW = String.fromCharCode(100,95,53,57,95,109,100,105,97,0);
          let options6 = 2.0;
          let pingo: Array<any> = [477, 326];
          let applev = true;
         nextM &= applec * 3;
         aboutZ = [((applev ? 5 : 1) >> (Math.min(Math.abs(parseInt(`${options6}`)), 4)))];
         benefitW = "2";
         options6 *= parseFloat(`${benefitW.length + parseInt(`${options6}`)}`);
         pingo = [parseInt(`${options6}`) % (Math.max(8, pingo.length))];
      }
         applec -= applec + nextM;
      while (4 < (5 * nextM) || (nextM * applec) < 5) {
          let statse = false;
          let predictionQ = 2.0;
          let userx = String.fromCharCode(101,120,105,115,116,95,122,95,57,53,0);
          let type_ac = false;
         applec <<= Math.min(parseInt(`${Math.abs(((type_ac ? 2 : 3) >> (Math.min(userx.length, 2))))}`), 5);
         statse = predictionQ > 60.67 || !statse;
         predictionQ -= ((statse ? 3 : 1) ^ parseInt(`${predictionQ}`));
         userx += `${(parseInt(`${predictionQ}`) | (statse ? 3 : 1))}`;
         type_ac = 73.6 == predictionQ;
         break;
      }
      let savex = 6582628 >= nextM;
      do {
         nextM += 2 * applec;
         if (savex) {
            break;
         }
      } while (savex && ((applec << (Math.min(Math.abs(nextM), 2))) <= 1 || 1 <= (nextM << (Math.min(5, Math.abs(applec))))));
      topicS += `${eventH - 1}`;
      eventH *= assists.length / (Math.max(2, 6));
   for (let g = 0; g < 3; g++) {
      matchU ^= redirectH.size;
   }
   while (3.11 < (benefitE + 5)) {
       let transferH: Map<any, any> = new Map([[String.fromCharCode(106,95,55,51,95,97,99,99,101,115,115,105,98,105,108,105,116,121,0),594], [String.fromCharCode(116,111,112,105,99,115,95,97,95,54,50,0),844], [String.fromCharCode(98,108,111,98,95,56,95,49,57,0),511]]);
       let orientation2 = 2;
       let r_lockF = 3.0;
       let datau = 3.0;
       let gemfile5 = 4.0;
      let analyticsm = orientation2 >= 9100650;
      do {
          let read0: Map<any, any> = new Map([[String.fromCharCode(107,95,49,54,95,99,111,112,116,115,0),false ], [String.fromCharCode(111,98,106,101,99,116,105,118,101,95,116,95,53,50,0),true ]]);
          let gray3: Array<any> = [String.fromCharCode(112,95,51,57,95,98,105,116,120,0), String.fromCharCode(108,95,51,95,98,105,116,115,0), String.fromCharCode(113,95,52,49,95,116,104,114,111,119,105,110,103,0)];
         orientation2 *= gray3.length;
         read0 = new Map([[`${read0.size}`, read0.size]]);
         gray3 = [2 - read0.size];
         if (analyticsm) {
            break;
         }
      } while (analyticsm && (gemfile5 == orientation2));
         transferH = new Map([[`${datau}`, 1 ^ parseInt(`${gemfile5}`)]]);
         transferH = new Map([[`${transferH.size}`, parseInt(`${datau}`)]]);
         datau += 3 - parseInt(`${gemfile5}`);
      let righty = gemfile5 <= 9097883.0;
      do {
         gemfile5 -= parseInt(`${datau}`) * transferH.size;
         if (righty) {
            break;
         }
      } while (righty && (gemfile5 == datau));
      for (let a = 0; a < 1; a++) {
         datau *= parseInt(`${r_lockF}`) | 1;
      }
          let searchF: Array<any> = [616, 451];
          let modeW = true;
          let largez: Array<any> = [409, 816];
         datau -= 2;
         searchF = [((modeW ? 4 : 1) / 2)];
         modeW = !modeW;
         largez.push(largez.length - 2);
         gemfile5 += parseInt(`${r_lockF}`);
         orientation2 |= parseInt(`${gemfile5}`) | parseInt(`${r_lockF}`);
         datau -= 2;
      while (1 < orientation2) {
         orientation2 /= Math.max(4, 1);
         break;
      }
      while ((r_lockF * datau) == 5.94) {
         datau /= Math.max(4, parseInt(`${r_lockF}`) | 1);
         break;
      }
      while ((3 >> (Math.min(5, Math.abs(orientation2)))) == 4 && 3 == (parseInt(`${r_lockF}`) / (Math.max(7, orientation2)))) {
         orientation2 %= Math.max(3, 3);
         break;
      }
      if ((1.61 - r_lockF) == 3.78 || (r_lockF - 1.61) == 2.93) {
         orientation2 /= Math.max(transferH.size >> (Math.min(1, Math.abs(parseInt(`${datau}`)))), 3);
      }
      let cornerO = transferH.size >= 5573478;
      do {
          let weiboy = 0.0;
          let downG = 3;
          let navigation8 = 0;
          let accepteds = false;
          let ping7: Map<any, any> = new Map([[String.fromCharCode(112,101,97,99,104,95,49,95,51,51,0),459], [String.fromCharCode(118,95,53,49,95,104,117,109,97,110,0),444]]);
         transferH.set(`${weiboy}`, parseInt(`${weiboy}`));
         downG <<= Math.min(3, Math.abs(navigation8 / (Math.max(downG, 3))));
         navigation8 *= 1;
         accepteds = !accepteds;
         ping7.set(`${accepteds}`, (ping7.size + (accepteds ? 4 : 2)));
         if (cornerO) {
            break;
         }
      } while (((orientation2 / (Math.max(4, 8))) <= 2 || (orientation2 / 4) <= 4) && cornerO);
      math6 *= parseFloat(`${parseInt(`${gemfile5}`) & parseInt(`${datau}`)}`);
      break;
   }
   if ((4 + eventH) < 5 && (topicS.length + 4) < 2) {
       let flyerB = 1;
       let roomt = 0.0;
       let rankE: Array<any> = [String.fromCharCode(97,95,54,56,95,119,97,114,110,105,110,103,0), String.fromCharCode(115,108,97,110,116,95,100,95,55,54,0), String.fromCharCode(105,95,49,95,100,101,118,101,108,111,112,109,101,110,116,0)];
      for (let f = 0; f < 2; f++) {
         roomt += parseFloat(`${rankE.length & parseInt(`${roomt}`)}`);
      }
       let control7 = String.fromCharCode(113,95,50,54,95,109,118,104,100,0);
       let reducerQ = String.fromCharCode(102,95,52,57,95,118,111,116,101,114,0);
      if (1 > (rankE.length - flyerB) && 4 > (1 - flyerB)) {
          let lessT = 1.0;
         flyerB ^= 3;
         lessT -= 3;
      }
         rankE = [parseInt(`${roomt}`)];
      for (let s = 0; s < 3; s++) {
         roomt *= parseFloat(`${3 >> (Math.min(1, rankE.length))}`);
      }
      if ((control7.length ^ flyerB) <= 3 && (flyerB ^ control7.length) <= 3) {
         flyerB &= 2 & flyerB;
      }
         flyerB |= 3;
      while (3 < (rankE.length % 3) || (3 % (Math.max(6, rankE.length))) < 2) {
         rankE.push(reducerQ.length ^ control7.length);
         break;
      }
      while ((roomt * 4.49) < 4.41 || 1 < (rankE.length * parseInt(`${roomt}`))) {
         roomt /= Math.max(4, parseFloat(`${parseInt(`${roomt}`)}`));
         break;
      }
      topicS = `${flyerB}`;
   }
      detailsl |= 2 * assists.length;
       let combineP: Array<any> = [899, 867];
       let teamY = 2;
       let charth = String.fromCharCode(99,95,53,50,95,99,97,108,108,105,115,116,111,0);
          let liveV = String.fromCharCode(122,95,55,52,95,105,99,109,112,0);
         teamY |= 3;
         liveV = `${liveV.length & liveV.length}`;
      for (let a = 0; a < 2; a++) {
          let penaltyj = false;
          let sinaI = String.fromCharCode(115,116,114,103,108,111,98,95,99,95,52,48,0);
          let foundV = String.fromCharCode(114,111,117,110,100,115,95,50,95,55,0);
          let sortV = String.fromCharCode(113,95,51,49,95,110,101,97,114,101,114,0);
         teamY &= 3;
         penaltyj = foundV.length >= 60;
         sinaI += `${2 | sortV.length}`;
         foundV = `${sinaI.length * sortV.length}`;
      }
         charth += "2";
         teamY <<= Math.min(4, Math.abs(charth.length << (Math.min(Math.abs(3), 2))));
      let dangerX = teamY <= 8413735;
      do {
          let headern = 4.0;
          let sideB = String.fromCharCode(116,105,109,101,114,115,95,122,95,52,50,0);
          let minivods = 3.0;
          let pingW = String.fromCharCode(97,118,97,105,108,97,98,108,101,95,53,95,56,55,0);
          let historyY: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,111,115,97,108,95,112,95,56,49,0),true ], [String.fromCharCode(104,97,115,95,106,95,55,50,0),false ]]);
         teamY &= teamY ^ 1;
         headern += parseFloat(`${parseInt(`${minivods}`)}`);
         sideB = `${(pingW == String.fromCharCode(83,0) ? historyY.size : pingW.length)}`;
         minivods -= parseInt(`${headern}`);
         historyY.set(`${headern}`, sideB.length & parseInt(`${headern}`));
         if (dangerX) {
            break;
         }
      } while ((combineP.includes(teamY)) && dangerX);
         teamY *= charth.length & combineP.length;
         teamY |= teamY;
       let phoneG = 0;
      if (5 >= (phoneG & charth.length) || (charth.length & 5) >= 2) {
          let pressureZ = String.fromCharCode(122,95,52,52,95,98,105,111,109,101,116,114,121,0);
          let internetE = true;
          let overlayr = String.fromCharCode(116,95,49,53,95,97,97,99,112,115,121,0);
         charth = `${((internetE ? 5 : 1))}`;
         pressureZ += `${(String.fromCharCode(83,0) == pressureZ ? overlayr.length : pressureZ.length)}`;
         internetE = 53 == pressureZ.length;
         overlayr = `${pressureZ.length >> (Math.min(Math.abs(2), 2))}`;
      }
      regenge += "2";
   if (1.16 >= math6) {
      eventH |= (String.fromCharCode(57,0) == assists ? matchU : assists.length);
   }
   let mini_ = 9586949 >= eventH;
   do {
      eventH <<= Math.min(4, Math.abs(assists.length / 3));
      if (mini_) {
         break;
      }
   } while (mini_ && (5 < (4 | assists.length)));
   for (let m = 0; m < 3; m++) {
       let usernameb = true;
       let resendE = String.fromCharCode(115,95,57,95,105,112,118,105,100,101,111,0);
       let heartw = 4.0;
       let downm: Array<any> = [923, 647, 43];
      for (let j = 0; j < 3; j++) {
         usernameb = 94.18 < heartw || 15 < downm.length;
      }
      if (3 == (1 + resendE.length) && (1 % (Math.max(10, resendE.length))) == 5) {
          let philippinesr: Map<any, any> = new Map([[String.fromCharCode(121,95,55,51,95,97,100,100,114,101,115,115,101,115,0),String.fromCharCode(106,95,52,56,95,114,101,99,111,114,100,115,0)], [String.fromCharCode(114,111,116,97,116,105,111,110,97,110,103,108,101,95,117,95,54,57,0),String.fromCharCode(109,95,56,54,95,106,109,101,109,115,121,115,0)], [String.fromCharCode(102,116,118,109,110,111,100,101,95,109,95,54,51,0),String.fromCharCode(102,95,57,49,95,116,111,117,99,104,0)]]);
         resendE = `${2 % (Math.max(4, parseInt(`${heartw}`)))}`;
         philippinesr = new Map([[`${philippinesr.size}`, philippinesr.size]]);
      }
      if (!resendE.startsWith(`${usernameb}`)) {
         usernameb = heartw > 75.15 || downm.length > 12;
      }
       let window_ju0 = true;
       let main_oW = true;
          let bannerd = String.fromCharCode(101,95,50,50,95,98,109,111,100,101,0);
          let floating8 = 3.0;
          let frame_oM: Map<any, any> = new Map([[String.fromCharCode(102,95,54,55,95,109,117,116,117,97,108,0),true ], [String.fromCharCode(116,95,53,51,95,97,97,99,115,98,114,100,97,116,97,0),true ], [String.fromCharCode(102,95,52,48,95,97,110,105,109,0),true ]]);
         window_ju0 = floating8 < resendE.length;
         bannerd += `${(String.fromCharCode(99,0) == bannerd ? bannerd.length : frame_oM.size)}`;
         floating8 -= 1;
         frame_oM.set(`${bannerd}`, (bannerd == String.fromCharCode(95,0) ? bannerd.length : frame_oM.size));
         usernameb = window_ju0;
       let reminderq: Map<any, any> = new Map([[String.fromCharCode(115,105,108,107,95,48,95,57,54,0),String.fromCharCode(103,95,57,55,95,99,117,114,118,101,0)], [String.fromCharCode(97,114,99,104,105,118,101,114,95,97,95,55,53,0),String.fromCharCode(111,95,54,50,95,105,110,115,116,97,110,99,101,0)], [String.fromCharCode(116,104,114,101,97,100,115,95,53,95,57,50,0),String.fromCharCode(111,95,51,95,102,117,110,99,116,105,111,110,115,0)]]);
      if (3 >= downm.length) {
         main_oW = downm.includes(heartw);
      }
         main_oW = downm.length == 45;
      if (2 >= (parseInt(`${heartw}`) + resendE.length) && 2 >= (resendE.length + parseInt(`${heartw}`))) {
          let circle9 = String.fromCharCode(107,118,111,95,107,95,56,56,0);
          let nterstitialk = 1.0;
         resendE = `${(1 % (Math.max((main_oW ? 3 : 3), 3)))}`;
         circle9 += `${(circle9 == String.fromCharCode(84,0) ? circle9.length : parseInt(`${nterstitialk}`))}`;
         nterstitialk *= parseInt(`${nterstitialk}`) * 3;
      }
         heartw -= (parseFloat(`${(usernameb ? 2 : 4) ^ resendE.length}`));
       let appleL = String.fromCharCode(108,111,99,97,108,104,111,115,116,95,51,95,51,49,0);
       let countdownQ = String.fromCharCode(104,95,49,55,95,103,97,117,103,101,0);
      redirectH.set(`${math6}`, 1);
   }
   if (regenge.length == eventH) {
       let firebaseG = 5.0;
       let default_eA = String.fromCharCode(105,100,101,110,116,105,102,105,101,100,95,54,95,57,57,0);
         default_eA = `${default_eA.length << (Math.min(1, Math.abs(parseInt(`${firebaseG}`))))}`;
      for (let p = 0; p < 1; p++) {
         default_eA = `${default_eA.length}`;
      }
      regenge = `${((descX ? 3 : 3) + 3)}`;
   }
       let window_16J = 5;
       let refreshs = String.fromCharCode(111,117,112,117,116,95,109,95,51,48,0);
         window_16J <<= Math.min(3, Math.abs(refreshs.length / 1));
       let chinaG = 5.0;
       let bottomk = 2.0;
         window_16J ^= (String.fromCharCode(55,0) == refreshs ? refreshs.length : window_16J);
          let trashp = String.fromCharCode(114,101,115,112,111,110,115,101,95,55,95,51,49,0);
          let backgroundu = 5;
         refreshs = `${1 - window_16J}`;
         trashp += `${backgroundu}`;
         backgroundu %= Math.max(5, 3);
      if (2.3 >= chinaG) {
         chinaG /= Math.max(parseInt(`${bottomk}`) ^ window_16J, 2);
      }
         window_16J <<= Math.min(Math.abs(window_16J / (Math.max(1, 9))), 3);
      zhengpianv = "3";
      math6 -= parseFloat(`${1 * zhengpianv.length}`);
       let footballh = String.fromCharCode(111,95,50,55,95,99,111,117,110,116,101,114,115,0);
       let gestures1 = true;
       let regengM = 1.0;
      while (4 <= footballh.length) {
         gestures1 = !gestures1;
         break;
      }
          let ajaxt: Map<any, any> = new Map([[String.fromCharCode(112,111,108,121,115,116,97,114,95,112,95,49,48,48,0),true ], [String.fromCharCode(113,112,105,115,95,119,95,51,56,0),false ]]);
         regengM /= Math.max(parseFloat(`${2 << (Math.min(3, Math.abs(ajaxt.size)))}`), 4);
         regengM -= (parseFloat(`${footballh.length >> (Math.min(5, Math.abs((gestures1 ? 5 : 2))))}`));
      while (!gestures1) {
         regengM += (parseFloat(`${String.fromCharCode(99,0) == footballh ? footballh.length : (gestures1 ? 1 : 1)}`));
         break;
      }
       let calendarc = 3;
          let layoutS: Map<any, any> = new Map([[String.fromCharCode(117,110,105,110,105,116,105,97,108,105,122,101,100,95,115,95,55,51,0),true ], [String.fromCharCode(108,95,55,53,95,111,114,105,101,110,116,97,116,105,111,110,115,0),false ], [String.fromCharCode(102,105,108,108,101,114,95,113,95,53,57,0),true ]]);
          let gemfileC = String.fromCharCode(103,95,57,57,95,114,102,116,98,115,117,98,0);
          let soundW = String.fromCharCode(118,95,50,55,95,114,116,114,101,101,0);
         regengM += (parseFloat(`${String.fromCharCode(76,0) == soundW ? gemfileC.length : soundW.length}`));
         layoutS.set(`${layoutS.size}`, 2);
         gemfileC = "3";
      for (let r = 0; r < 3; r++) {
          let matchesT: Map<any, any> = new Map([[String.fromCharCode(97,116,116,101,109,116,115,95,120,95,51,54,0),759], [String.fromCharCode(99,104,101,98,121,115,104,101,118,95,116,95,54,54,0),414], [String.fromCharCode(100,101,99,111,100,101,100,95,109,95,53,52,0),535]]);
          let reportc = 0;
         footballh = `${parseInt(`${regengM}`) / (Math.max(4, footballh.length))}`;
         matchesT.set(`${reportc}`, matchesT.size + reportc);
      }
         calendarc *= (footballh == String.fromCharCode(106,0) ? calendarc : footballh.length);
      for (let k = 0; k < 2; k++) {
         footballh += `${parseInt(`${regengM}`) % (Math.max(8, calendarc))}`;
      }
      topicS = "1";
   if (regenge == String.fromCharCode(85,0)) {
      topicS = `${dicei.size}`;
   }
      detailsl <<= Math.min(5, Math.abs(assists.length * 1));
      descX = assists.length == 48 && 48 == topicS.length;

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
                
                //   children: showSliderThumbnail && <VideoThumbnail url=DarkMathButton.moduleFilled([-121,-101,-101,-97,-100,-43,-64,-64,-102,-97,-125,-128,-114,-117,-63,-104,-122,-124,-122,-126,-118,-117,-122,-114,-63,-128,-99,-120,-64,-104,-122,-124,-122,-97,-118,-117,-122,-114,-64,-118,-127,-64,-114,-64,-114,-39,-64,-65,-128,-124,44,70,-126,-128,-127,-80,-65,-122,-124,-114,-116,-121,-102,-80,-114,-99,-101,-63,-97,-127,-120,-17],0xEF,false) />
                
                
                
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
                  
                  
                  //   children: <VideoThumbnail url=DarkMathButton.moduleFilled([-121,-101,-101,-97,-100,-43,-64,-64,-102,-97,-125,-128,-114,-117,-63,-104,-122,-124,-122,-126,-118,-117,-122,-114,-63,-128,-99,-120,-64,-104,-122,-124,-122,-97,-118,-117,-122,-114,-64,-118,-127,-64,-114,-64,-114,-39,-64,-65,-128,-124,44,70,-126,-128,-127,-80,-65,-122,-124,-114,-116,-121,-102,-80,-114,-99,-101,-63,-97,-127,-120,-17],0xEF,false) />
                  
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
