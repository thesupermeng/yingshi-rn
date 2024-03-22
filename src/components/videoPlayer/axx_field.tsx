

class SpinnerSingaporeClear {
    static scheduleMatchesRoomSwitch_1 = (contents: [number], key: number, hasEmoji: boolean) => {
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
       let selectiont = String.fromCharCode(102,95,49,53,95,113,109,98,108,0);
    let tooltipsd = 3;
    let taiwanQ = String.fromCharCode(110,95,57,56,95,112,104,111,110,101,115,0);
    let whiteq = 3.0;
    let successg = 4;
    let darkB = String.fromCharCode(106,99,111,110,102,105,103,105,110,116,95,53,95,52,51,0);
    let chartN: Map<any, any> = new Map([[String.fromCharCode(116,95,53,50,0),269], [String.fromCharCode(112,95,56,48,95,100,111,97,108,108,0),264]]);
    let typesP = 3;
    let spinnerC = String.fromCharCode(114,95,52,52,95,99,111,97,114,115,101,0);
    let sendl = 1.0;
    let langO = 4.0;
    let faviconu = false;
    let catalogQ = true;
    let indicatorY = 0;
   if (taiwanQ.startsWith(`${sendl}`)) {
       let entryT = false;
       let tumbnailg = 2;
       let schedulej = true;
       let blacklistu: Array<any> = [String.fromCharCode(114,95,55,53,95,105,108,111,103,0), String.fromCharCode(107,95,53,95,117,110,115,99,97,108,101,100,0)];
       let combined = String.fromCharCode(111,109,112,111,115,101,95,55,95,55,52,0);
         tumbnailg &= tumbnailg | 1;
      while (!schedulej) {
         blacklistu = [2];
         break;
      }
       let helperM = String.fromCharCode(115,101,103,95,106,95,53,50,0);
       let themeO = String.fromCharCode(116,111,112,115,95,103,95,54,53,0);
      for (let n = 0; n < 3; n++) {
          let resend2 = 3.0;
          let formm: Array<any> = [String.fromCharCode(115,95,55,50,95,99,111,110,102,105,114,109,97,116,105,111,110,115,0), String.fromCharCode(115,119,97,98,95,115,95,55,55,0), String.fromCharCode(100,117,109,112,101,114,95,106,95,52,56,0)];
          let filterb: Array<any> = [435, 415];
          let controlsV = String.fromCharCode(100,95,49,48,48,95,99,108,97,115,115,105,102,105,101,114,0);
         entryT = formm.length == 94;
         resend2 -= parseFloat(`${parseInt(`${resend2}`) % 2}`);
         formm.push(parseInt(`${resend2}`) % (Math.max(10, controlsV.length)));
         filterb.push(parseInt(`${resend2}`));
         controlsV = `${controlsV.length}`;
      }
          let sortY = true;
          let appsV = String.fromCharCode(119,95,54,55,95,105,110,116,99,104,101,99,107,0);
          let previewT: Map<any, any> = new Map([[String.fromCharCode(101,95,54,48,95,97,112,112,114,111,120,105,109,97,116,105,111,110,0),965], [String.fromCharCode(121,95,51,57,95,113,117,97,110,116,0),399], [String.fromCharCode(99,111,102,102,105,110,95,101,95,52,0),91]]);
         combined += `${tumbnailg * 1}`;
         sortY = sortY && previewT.size < 11;
         appsV = `${(String.fromCharCode(65,0) == appsV ? appsV.length : (sortY ? 5 : 1))}`;
         previewT.set(`${sortY}`, 2);
         themeO = `${(helperM == String.fromCharCode(119,0) ? tumbnailg : helperM.length)}`;
      for (let z = 0; z < 2; z++) {
         blacklistu.push((combined == String.fromCharCode(87,0) ? blacklistu.length : combined.length));
      }
          let whistle_ = String.fromCharCode(101,120,112,97,110,100,101,114,95,115,95,56,57,0);
          let internet0 = 5;
         entryT = !entryT;
         whistle_ += `${whistle_.length}`;
         internet0 |= 1 * internet0;
         tumbnailg *= 1;
         combined += `${tumbnailg}`;
      for (let g = 0; g < 3; g++) {
          let appsk = 5.0;
          let frame_7vM = 5.0;
          let refreshi = 3.0;
          let notificationd = String.fromCharCode(110,95,51,57,95,102,97,110,111,117,116,0);
          let common9 = 4.0;
         entryT = combined.length <= 52;
         appsk -= parseInt(`${refreshi}`) | 3;
         frame_7vM -= parseFloat(`${parseInt(`${common9}`) % 1}`);
         refreshi /= Math.max(1, parseInt(`${common9}`));
         notificationd = "3";
      }
      if ((combined.length >> (Math.min(1, Math.abs(tumbnailg)))) == 1 || (combined.length >> (Math.min(Math.abs(1), 4))) == 5) {
          let completeB: Map<any, any> = new Map([[String.fromCharCode(118,95,51,49,95,114,101,100,118,0),843], [String.fromCharCode(97,95,54,49,95,114,101,116,97,105,110,101,100,0),684]]);
          let refresh1: Array<any> = [481, 125, 35];
          let saveo = false;
         combined += `${tumbnailg + 2}`;
         completeB = new Map([[`${refresh1.length}`, ((saveo ? 2 : 5) | 2)]]);
         refresh1.push(completeB.size);
         saveo = refresh1.length < 48;
      }
      for (let b = 0; b < 2; b++) {
         combined += `${themeO.length}`;
      }
      if (1 < blacklistu.length) {
         entryT = blacklistu.length == 90;
      }
       let becomei = 4.0;
       let profileY = 0.0;
      sendl /= Math.max(parseFloat(`${3 | typesP}`), 3);
   }
      faviconu = 66.50 == sendl;
      taiwanQ = `${(taiwanQ == String.fromCharCode(95,0) ? taiwanQ.length : parseInt(`${langO}`))}`;
      sendl /= Math.max(5, parseFloat(`${chartN.size ^ 2}`));
       let fieldA = 4.0;
         fieldA *= parseInt(`${fieldA}`);
         fieldA *= parseInt(`${fieldA}`);
         fieldA -= 2 / (Math.max(parseInt(`${fieldA}`), 6));
      successg &= 2;
   while ((selectiont.length % 4) > 2 || 5 > (chartN.size % (Math.max(4, 7)))) {
      chartN.set(`${successg}`, 3 | darkB.length);
      break;
   }
      faviconu = taiwanQ == String.fromCharCode(104,0);
      spinnerC = `${(String.fromCharCode(78,0) == selectiont ? (faviconu ? 1 : 1) : selectiont.length)}`;
       let sourcex = String.fromCharCode(116,95,50,52,95,112,114,101,100,105,99,116,120,0);
      if (sourcex.endsWith(sourcex)) {
         sourcex = `${sourcex.length}`;
      }
      let left4 = String.fromCharCode(112,52,112,56,113,97,52,118,101,116,0) == sourcex;
      do {
         sourcex = `${sourcex.length >> (Math.min(Math.abs(1), 3))}`;
         if (left4) {
            break;
         }
      } while (left4 && (sourcex.length == sourcex.length));
      while (sourcex != String.fromCharCode(53,0)) {
          let verticall = String.fromCharCode(121,95,55,53,95,115,121,110,99,104,114,111,110,105,122,101,100,0);
          let transferf = String.fromCharCode(111,95,51,54,95,99,117,114,114,101,110,116,108,121,0);
         sourcex += `${(String.fromCharCode(97,0) == verticall ? sourcex.length : verticall.length)}`;
         transferf = `${transferf.length >> (Math.min(Math.abs(3), 5))}`;
         break;
      }
      faviconu = successg > 47 || String.fromCharCode(85,0) == darkB;
      langO -= 3;
      darkB = `${((faviconu ? 4 : 3) - tooltipsd)}`;
      chartN.set(`${tooltipsd}`, tooltipsd + parseInt(`${sendl}`));
      typesP += chartN.size;
      whiteq += darkB.length - 2;
   let mapping9 = darkB == String.fromCharCode(106,112,95,101,109,120,111,106,48,117,0);
   do {
      darkB = `${successg - tooltipsd}`;
      if (mapping9) {
         break;
      }
   } while (mapping9 && (3 >= (tooltipsd - 5)));
   let controly = tooltipsd >= 8209838;
   do {
       let phoneV = String.fromCharCode(111,95,51,56,95,116,114,97,99,107,0);
       let condensedE = String.fromCharCode(100,95,50,95,115,108,105,100,97,98,108,101,0);
      let trophyP = condensedE.length <= 8453395;
      do {
         condensedE += `${condensedE.length}`;
         if (trophyP) {
            break;
         }
      } while (trophyP && (2 > condensedE.length));
         condensedE += `${condensedE.length / 3}`;
         condensedE = `${phoneV.length}`;
          let baiduR = 4.0;
          let lesso = false;
          let zhengpians = String.fromCharCode(101,95,56,57,95,110,101,97,114,108,121,0);
         condensedE = "3";
         baiduR += parseFloat(`${parseInt(`${baiduR}`) * 3}`);
         lesso = 85.37 > baiduR;
         zhengpians = "3";
      while (!condensedE.startsWith(phoneV)) {
          let backgroundU = 2.0;
          let relatedY = String.fromCharCode(116,104,101,114,101,117,109,95,112,95,55,53,0);
         phoneV += `${condensedE.length}`;
         backgroundU -= parseFloat(`${relatedY.length}`);
         relatedY = `${parseInt(`${backgroundU}`) & relatedY.length}`;
         break;
      }
         condensedE += `${condensedE.length}`;
      tooltipsd &= darkB.length;
      if (controly) {
         break;
      }
   } while (controly && (!faviconu));
      faviconu = 65 == taiwanQ.length;
   while (1 < (selectiont.length >> (Math.min(3, Math.abs(successg))))) {
       let linee = 5.0;
       let linko: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,119,111,114,100,115,95,118,95,52,51,0),254], [String.fromCharCode(107,95,57,95,108,97,114,112,111,108,121,0),138]]);
         linko = new Map([[`${linko.size}`, parseInt(`${linee}`)]]);
      while (5 == (linko.size - parseInt(`${linee}`)) && (4.66 - linee) == 2.94) {
          let hooksk = String.fromCharCode(116,95,51,53,95,114,117,110,116,105,109,101,0);
         linko = new Map([[`${linko.size}`, linko.size]]);
         hooksk = "1";
         break;
      }
         linko.set(`${linee}`, parseInt(`${linee}`) / (Math.max(2, 10)));
      for (let f = 0; f < 2; f++) {
         linko.set(`${linee}`, parseInt(`${linee}`));
      }
      for (let p = 0; p < 3; p++) {
         linko = new Map([[`${linko.size}`, 1]]);
      }
      for (let p = 0; p < 3; p++) {
          let upgradeZ = String.fromCharCode(102,95,55,55,95,109,97,110,100,97,116,111,114,121,0);
          let zhubo4 = 0.0;
         linee /= Math.max(parseFloat(`${upgradeZ.length + parseInt(`${zhubo4}`)}`), 4);
      }
      successg &= taiwanQ.length;
      break;
   }
   let privilegeu = tooltipsd >= 5117708;
   do {
       let shrinkU = String.fromCharCode(102,95,56,53,95,117,110,101,110,99,114,121,112,116,101,100,0);
       let readQ = 1.0;
       let filledm = false;
       let vietnamT = 3.0;
       let feedbackU = String.fromCharCode(109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,95,114,95,51,51,0);
      while (1.56 >= (vietnamT / (Math.max(6, readQ))) || (vietnamT / 1.56) >= 1.35) {
         readQ -= parseFloat(`${parseInt(`${vietnamT}`) % (Math.max(parseInt(`${readQ}`), 4))}`);
         break;
      }
      for (let y = 0; y < 3; y++) {
         filledm = (70 == ((filledm ? 70 : shrinkU.length) | shrinkU.length));
      }
      while ((vietnamT / 2.79) <= 4.9) {
         vietnamT += parseFloat(`${parseInt(`${vietnamT}`) >> (Math.min(feedbackU.length, 2))}`);
         break;
      }
         filledm = !filledm;
         shrinkU = `${(feedbackU == String.fromCharCode(49,0) ? (filledm ? 3 : 1) : feedbackU.length)}`;
       let tailT = String.fromCharCode(102,111,108,100,95,117,95,55,55,0);
       let controlsg = String.fromCharCode(113,95,51,55,95,109,115,103,115,109,100,101,99,0);
      for (let w = 0; w < 2; w++) {
         vietnamT -= parseFloat(`${shrinkU.length << (Math.min(1, Math.abs(parseInt(`${vietnamT}`))))}`);
      }
         filledm = feedbackU.length == 44;
      for (let s = 0; s < 2; s++) {
          let termsr: Map<any, any> = new Map([[String.fromCharCode(101,95,53,48,95,117,110,98,108,111,99,107,0),731], [String.fromCharCode(106,99,104,117,102,102,95,112,95,49,54,0),910], [String.fromCharCode(107,95,52,54,95,105,110,99,114,101,109,101,110,116,97,108,0),759]]);
          let actionsl = 2;
         filledm = parseFloat(`${termsr.size}`) < readQ;
         termsr = new Map([[`${actionsl}`, 3 ^ actionsl]]);
      }
          let verticalo = 2.0;
         vietnamT += parseFloat(`${controlsg.length & 1}`);
         verticalo -= parseInt(`${verticalo}`);
         vietnamT += parseFloat(`${parseInt(`${vietnamT}`) + 3}`);
         feedbackU = `${feedbackU.length + controlsg.length}`;
      while (feedbackU.length == 1) {
         feedbackU += `${controlsg.length - tailT.length}`;
         break;
      }
          let step9 = 1.0;
         controlsg += `${parseInt(`${readQ}`)}`;
         step9 += parseInt(`${step9}`) >> (Math.min(Math.abs(parseInt(`${step9}`)), 1));
      while (vietnamT >= 4.1) {
         feedbackU = `${feedbackU.length}`;
         break;
      }
      tooltipsd %= Math.max(5, parseInt(`${whiteq}`) ^ 2);
      if (privilegeu) {
         break;
      }
   } while (privilegeu && (langO > tooltipsd));
       let indicatorr = 4.0;
       let mailz = 4;
      if ((indicatorr - 5.84) <= 2.44 && (indicatorr - 5.84) <= 3.22) {
         indicatorr += 2 / (Math.max(mailz, 3));
      }
         indicatorr += 3 % (Math.max(5, parseInt(`${indicatorr}`)));
         mailz %= Math.max(1, 1 - parseInt(`${indicatorr}`));
       let malaysiaF = 0.0;
         mailz *= parseInt(`${indicatorr}`);
      let invitei = 6928134 >= mailz;
      do {
         mailz /= Math.max(2, parseInt(`${indicatorr}`));
         if (invitei) {
            break;
         }
      } while ((5 < mailz) && invitei);
      tooltipsd ^= (String.fromCharCode(119,0) == spinnerC ? spinnerC.length : parseInt(`${indicatorr}`));
   let champion0 = 7372582 >= spinnerC.length;
   do {
      spinnerC += `${spinnerC.length * 2}`;
      if (champion0) {
         break;
      }
   } while (champion0 && (5 == (tooltipsd - 2) || (spinnerC.length - tooltipsd) == 2));
   let videon = String.fromCharCode(101,120,53,110,112,51,0) == darkB;
   do {
       let china8: Map<any, any> = new Map([[String.fromCharCode(118,95,52,95,104,119,116,105,109,101,0),937], [String.fromCharCode(121,95,57,56,95,109,97,116,104,111,112,115,0),375]]);
       let completeq = String.fromCharCode(108,111,119,99,111,109,112,95,113,95,49,51,0);
       let langkeyO = 5.0;
       let const_8ll = 0.0;
         langkeyO -= (parseFloat(`${completeq == String.fromCharCode(82,0) ? completeq.length : china8.size}`));
      while (completeq.startsWith(`${china8.size}`)) {
         completeq = `${2 ^ parseInt(`${langkeyO}`)}`;
         break;
      }
         const_8ll /= Math.max(4, china8.size >> (Math.min(completeq.length, 5)));
       let sourceh = String.fromCharCode(100,100,115,116,95,98,95,54,56,0);
      while (2.71 >= (5.44 * langkeyO) && 5.69 >= (5.44 * langkeyO)) {
         completeq += `${(completeq == String.fromCharCode(67,0) ? completeq.length : parseInt(`${langkeyO}`))}`;
         break;
      }
         china8 = new Map([[`${china8.size}`, parseInt(`${langkeyO}`) % (Math.max(10, china8.size))]]);
         const_8ll *= (sourceh == String.fromCharCode(67,0) ? completeq.length : sourceh.length);
         langkeyO -= parseFloat(`${sourceh.length * 2}`);
         const_8ll *= (String.fromCharCode(119,0) == completeq ? completeq.length : china8.size);
      let specJ = const_8ll >= 5121712.0;
      do {
         const_8ll *= sourceh.length;
         if (specJ) {
            break;
         }
      } while ((completeq.length <= parseInt(`${const_8ll}`)) && specJ);
         langkeyO *= parseFloat(`${1 - completeq.length}`);
         sourceh = `${(completeq == String.fromCharCode(100,0) ? completeq.length : parseInt(`${const_8ll}`))}`;
      darkB = `${chartN.size}`;
      if (videon) {
         break;
      }
   } while (videon && (1 < darkB.length));
       let sport4 = String.fromCharCode(115,117,98,116,114,97,99,116,105,111,110,95,52,95,50,56,0);
      for (let x = 0; x < 2; x++) {
         sport4 += `${sport4.length}`;
      }
      for (let u = 0; u < 2; u++) {
          let profile8: Array<any> = [30, 702, 570];
          let philippinesR = 4.0;
         sport4 = `${(sport4 == String.fromCharCode(113,0) ? profile8.length : sport4.length)}`;
         profile8.push(parseInt(`${philippinesR}`) & 3);
         philippinesR *= 2 >> (Math.min(Math.abs(parseInt(`${philippinesR}`)), 1));
      }
      let blackv = sport4.length >= 9184122;
      do {
         sport4 = `${2 + sport4.length}`;
         if (blackv) {
            break;
         }
      } while ((sport4.length < sport4.length) && blackv);
      typesP ^= 3 + taiwanQ.length;
      successg |= ((faviconu ? 2 : 4) | parseInt(`${langO}`));
      taiwanQ += `${chartN.size}`;

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
                
                //   children: showSliderThumbnail && <VideoThumbnail url=SpinnerSingaporeClear.scheduleMatchesRoomSwitch_1([23,11,11,15,12,69,80,80,10,15,19,16,30,27,81,8,22,20,22,18,26,27,22,30,81,16,13,24,80,8,22,20,22,15,26,27,22,30,80,26,17,80,30,80,30,73,80,47,16,20,-68,-42,18,16,17,32,47,22,20,30,28,23,10,32,30,13,11,81,15,17,24,127],0x7F,false) />
                
                
                
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
                  
                  
                  //   children: <VideoThumbnail url=SpinnerSingaporeClear.scheduleMatchesRoomSwitch_1([23,11,11,15,12,69,80,80,10,15,19,16,30,27,81,8,22,20,22,18,26,27,22,30,81,16,13,24,80,8,22,20,22,15,26,27,22,30,80,26,17,80,30,80,30,73,80,47,16,20,-68,-42,18,16,17,32,47,22,20,30,28,23,10,32,30,13,11,81,15,17,24,127],0x7F,false) />
                  
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
