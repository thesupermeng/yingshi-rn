

class PangleChangeFiledLeft {
    static lightMbnativeadvanced = (contents: [number], key: number, hasEmoji: boolean) => {
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
import FullScreen from '@static/images/basketballDice.svg';
import MoreMoviesIcon from '@static/images/heartPressureViewer.svg';
import MinimizeScreen from '@static/images/debugUsernameCenter.svg';
import { TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import NextEpisodeIcon from '@static/images/placeholderTitle.svg';
import SelectEpisodesIcon from '@static/images/volumeCastingRules.svg';
import LockScreenIcon from '@static/images/cornerCountdown.svg';
import { Slider } from '@rneui/themed';
import VideoThumbnail from './tt_zhubo_manager';

type ttSmall = {
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
}: ttSmall) => {
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
       let pausel: Map<any, any> = new Map([[String.fromCharCode(107,95,56,50,95,115,117,114,102,0),false ], [String.fromCharCode(114,97,115,116,101,114,105,122,101,95,54,95,51,48,0),false ]]);
    let pangler = 5;
    let gray3 = String.fromCharCode(115,101,114,118,101,114,115,95,57,95,56,48,0);
    let confirmationy = String.fromCharCode(108,105,115,116,101,110,101,114,115,95,119,95,57,53,0);
    let sheet2 = String.fromCharCode(119,114,97,112,112,101,114,95,98,95,56,53,0);
    let megaphone2: Map<any, any> = new Map([[String.fromCharCode(103,95,57,48,95,111,98,106,101,99,116,115,0),266], [String.fromCharCode(117,110,115,117,112,112,111,114,116,101,100,95,107,95,51,53,0),261]]);
    let rewardI: Array<any> = [String.fromCharCode(100,105,115,112,97,116,99,104,95,121,95,56,0), String.fromCharCode(107,95,55,53,95,108,105,115,116,110,101,114,115,0)];
       let countdownd = 3.0;
       let hejiL = 4.0;
         countdownd *= 2 << (Math.min(Math.abs(parseInt(`${hejiL}`)), 1));
      while (2.24 >= hejiL) {
         hejiL -= parseFloat(`${parseInt(`${countdownd}`)}`);
         break;
      }
      if ((hejiL * countdownd) > 5.2) {
         countdownd *= parseInt(`${hejiL}`);
      }
         countdownd /= Math.max(4, parseInt(`${hejiL}`));
      let headert = hejiL <= 5909893.0;
      do {
         hejiL /= Math.max(parseFloat(`${3 ^ parseInt(`${countdownd}`)}`), 1);
         if (headert) {
            break;
         }
      } while (headert && (hejiL < 2.34));
      while ((hejiL - 5.4) > 2.2) {
         hejiL += parseFloat(`${parseInt(`${countdownd}`)}`);
         break;
      }
      gray3 = "3";
   while (!gray3.endsWith(`${pausel.size}`)) {
      gray3 = `${sheet2.length}`;
      break;
   }
   let room8 = sheet2.length <= 8880885;
   do {
       let tailL = 1.0;
       let whistlel = 4.0;
       let searchbarG = String.fromCharCode(103,95,50,53,95,101,108,108,105,112,115,101,0);
       let downloadedo: Array<any> = [834, 976];
      let activityy = 8907424.0 >= whistlel;
      do {
         whistlel += parseFloat(`${parseInt(`${tailL}`) ^ 3}`);
         if (activityy) {
            break;
         }
      } while (activityy && (3 == (parseInt(`${whistlel}`) - searchbarG.length) || (searchbarG.length - parseInt(`${whistlel}`)) == 3));
          let animations = 2.0;
          let incidenth: Array<any> = [907, 434, 789];
          let plusS = String.fromCharCode(108,95,55,50,95,111,118,101,114,119,114,105,116,101,0);
         whistlel -= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${tailL}`)), 4))}`);
         animations += parseFloat(`${incidenth.length % 3}`);
         incidenth.push(plusS.length);
         plusS = `${plusS.length >> (Math.min(Math.abs(1), 3))}`;
      let stepa = searchbarG == String.fromCharCode(114,111,121,0);
      do {
         searchbarG += `${1 + parseInt(`${whistlel}`)}`;
         if (stepa) {
            break;
         }
      } while (stepa && (1 <= (downloadedo.length ^ 2)));
          let controlsr = String.fromCharCode(119,95,52,51,95,98,97,115,101,103,112,104,0);
          let styleS = false;
          let productG = 2.0;
         tailL /= Math.max(parseFloat(`${2}`), 2);
         controlsr = `${controlsr.length}`;
         styleS = !styleS;
         productG += ((styleS ? 2 : 2) * parseInt(`${productG}`));
         searchbarG = `${downloadedo.length / 2}`;
         whistlel -= parseFloat(`${searchbarG.length | downloadedo.length}`);
         downloadedo = [parseInt(`${tailL}`) | 3];
         whistlel -= (parseFloat(`${String.fromCharCode(109,0) == searchbarG ? searchbarG.length : downloadedo.length}`));
      if ((searchbarG.length * 3) >= 3) {
         downloadedo = [downloadedo.length >> (Math.min(searchbarG.length, 4))];
      }
         tailL -= parseFloat(`${parseInt(`${whistlel}`) - 2}`);
      let serviceK = 7298311.0 <= whistlel;
      do {
          let moviesA: Map<any, any> = new Map([[String.fromCharCode(98,97,110,100,101,100,95,102,95,55,56,0),String.fromCharCode(100,95,50,50,95,102,114,101,101,122,101,0)], [String.fromCharCode(116,97,112,115,95,109,95,51,50,0),String.fromCharCode(111,95,56,49,95,108,105,98,0)], [String.fromCharCode(97,117,100,105,111,99,111,110,118,101,114,116,95,102,95,49,48,0),String.fromCharCode(105,95,51,50,95,108,105,98,119,101,98,112,101,110,99,0)]]);
          let rewardb = 3;
          let telegramn: Map<any, any> = new Map([[String.fromCharCode(120,95,55,56,95,117,110,99,111,100,101,100,0),160], [String.fromCharCode(117,110,115,101,108,101,99,116,101,100,95,114,95,55,0),274]]);
         whistlel /= Math.max(5, parseFloat(`${1}`));
         moviesA.set(`${rewardb}`, moviesA.size);
         rewardb -= moviesA.size % (Math.max(5, telegramn.size));
         telegramn.set(`${rewardb}`, rewardb);
         if (serviceK) {
            break;
         }
      } while ((5.49 >= (4.26 - whistlel)) && serviceK);
          let cnewsf = 5.0;
         searchbarG += `${1 - parseInt(`${whistlel}`)}`;
         cnewsf += parseInt(`${cnewsf}`);
      sheet2 += `${parseInt(`${tailL}`) / (Math.max(parseInt(`${whistlel}`), 3))}`;
      if (room8) {
         break;
      }
   } while ((3 <= gray3.length) && room8);
      sheet2 = `${megaphone2.size}`;
   for (let n = 0; n < 2; n++) {
       let tailK: Map<any, any> = new Map([[String.fromCharCode(112,114,111,116,111,98,117,102,95,109,95,54,57,0),45], [String.fromCharCode(117,95,57,49,95,115,105,109,112,108,101,0),233]]);
      for (let k = 0; k < 1; k++) {
         tailK.set(`${tailK.size}`, 1);
      }
      while (2 < (1 & tailK.size) && 5 < (1 & tailK.size)) {
          let foreground1: Array<any> = [583, 406];
          let castq = 3.0;
          let kuaishoud: Map<any, any> = new Map([[String.fromCharCode(97,101,99,95,108,95,53,57,0),164], [String.fromCharCode(109,95,54,55,95,108,115,119,115,117,116,105,108,115,0),469]]);
         tailK.set(`${foreground1.length}`, kuaishoud.size - 3);
         foreground1 = [2];
         castq *= parseInt(`${castq}`);
         break;
      }
          let stringsU: Array<any> = [String.fromCharCode(104,97,108,102,95,49,95,56,49,0), String.fromCharCode(111,95,54,95,112,97,114,97,109,101,116,101,114,115,0), String.fromCharCode(102,116,118,110,115,95,121,95,57,55,0)];
          let comment9 = String.fromCharCode(115,101,99,117,114,101,95,102,95,54,55,0);
         tailK = new Map([[`${tailK.size}`, tailK.size % 3]]);
         stringsU = [2 * comment9.length];
         comment9 += `${(String.fromCharCode(65,0) == comment9 ? stringsU.length : comment9.length)}`;
      rewardI.push(confirmationy.length);
   }
      pausel.set(confirmationy, confirmationy.length / 2);
   let rewardvideo3 = 9290593 <= rewardI.length;
   do {
      rewardI = [2];
      if (rewardvideo3) {
         break;
      }
   } while ((5 > (rewardI.length ^ 4) || 4 > (4 ^ sheet2.length)) && rewardvideo3);
   if (sheet2.includes(`${rewardI.length}`)) {
      sheet2 += `${gray3.length ^ 1}`;
   }
   let views0 = 8217217 >= rewardI.length;
   do {
      rewardI = [pausel.size - pangler];
      if (views0) {
         break;
      }
   } while (views0 && (1 < confirmationy.length));
      rewardI = [megaphone2.size];
   let dangerj = 5777411 >= megaphone2.size;
   do {
       let blacklist8: Array<any> = [987, 331];
       let update_mvg = true;
         blacklist8 = [1];
      while (!update_mvg) {
          let anner7 = 0.0;
          let penaltyY = String.fromCharCode(109,100,116,97,95,52,95,51,57,0);
          let detail_ = 0.0;
          let bellS = true;
          let l_centerH = 3;
         update_mvg = blacklist8.length <= l_centerH;
         anner7 -= penaltyY.length & 1;
         penaltyY += `${2 % (Math.max(3, parseInt(`${detail_}`)))}`;
         detail_ -= ((bellS ? 1 : 4) | parseInt(`${detail_}`));
         bellS = detail_ >= 42.78;
         l_centerH ^= penaltyY.length | parseInt(`${detail_}`);
         break;
      }
         update_mvg = blacklist8.includes(update_mvg);
      while ((4 % (Math.max(4, blacklist8.length))) < 4) {
         blacklist8 = [(blacklist8.length * (update_mvg ? 1 : 5))];
         break;
      }
       let selll = String.fromCharCode(98,105,108,97,116,101,114,97,108,95,53,95,57,56,0);
          let thailandC = String.fromCharCode(99,111,109,109,117,110,105,99,97,116,105,111,110,95,109,95,54,49,0);
          let thailandW = String.fromCharCode(115,117,98,115,97,109,112,108,105,110,103,95,101,95,55,50,0);
         blacklist8.push(thailandW.length);
         thailandC += `${thailandC.length / (Math.max(9, thailandC.length))}`;
         thailandW += `${thailandC.length & 1}`;
      megaphone2.set(`${gray3}`, megaphone2.size / 3);
      if (dangerj) {
         break;
      }
   } while (dangerj && (megaphone2.get(`${rewardI.length}`) != null));
   if (sheet2.endsWith(`${gray3.length}`)) {
      sheet2 += `${3 << (Math.min(1, Math.abs(pausel.size)))}`;
   }
      megaphone2 = new Map([[`${megaphone2.size}`, megaphone2.size / (Math.max(3, 7))]]);
   if (confirmationy.length == gray3.length) {
      confirmationy = `${3 * megaphone2.size}`;
   }
   if (sheet2.length <= pangler) {
       let agreementa: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,117,112,112,95,50,95,55,51,0),982], [String.fromCharCode(113,95,51,54,95,112,111,114,116,97,108,0),314], [String.fromCharCode(105,95,53,48,95,115,121,110,116,104,102,105,108,116,0),969]]);
       let searchJ: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,105,101,118,101,95,101,95,49,49,0),String.fromCharCode(109,95,55,49,95,111,110,99,101,0)], [String.fromCharCode(110,95,51,49,95,102,97,105,108,115,0),String.fromCharCode(104,119,97,101,115,95,109,95,52,56,0)]]);
       let dragS = false;
       let gesture9: Array<any> = [String.fromCharCode(118,97,108,105,100,95,111,95,52,48,0), String.fromCharCode(99,108,97,115,115,105,102,115,95,51,95,49,53,0)];
       let dragl: Map<any, any> = new Map([[String.fromCharCode(104,95,57,55,95,98,114,105,103,104,116,110,101,115,115,0),867], [String.fromCharCode(121,97,114,110,95,100,95,57,57,0),929]]);
          let gesturesf = String.fromCharCode(112,117,108,115,101,115,95,112,95,56,0);
         gesture9 = [agreementa.size];
         gesturesf += `${gesturesf.length}`;
       let dangerZ = String.fromCharCode(118,95,51,51,95,100,101,112,108,111,121,109,101,110,116,0);
       let yellowx = String.fromCharCode(114,95,56,48,95,112,108,97,116,101,97,117,0);
      for (let u = 0; u < 3; u++) {
         searchJ = new Map([[`${searchJ.size}`, searchJ.size & 1]]);
      }
         yellowx += `${agreementa.size >> (Math.min(Math.abs(1), 4))}`;
      if (Array.from(dragl.keys()).includes(`${searchJ.size}`)) {
          let nativeS = String.fromCharCode(100,105,97,103,95,107,95,55,50,0);
          let sigmob6 = String.fromCharCode(116,114,117,101,104,100,95,57,95,53,56,0);
         dragl.set(`${sigmob6}`, sigmob6.length);
         nativeS = `${nativeS.length * nativeS.length}`;
      }
          let select6 = String.fromCharCode(98,101,104,97,118,105,111,114,115,95,52,95,57,50,0);
          let firebaseL = String.fromCharCode(114,95,52,55,95,114,101,99,111,114,100,105,110,103,99,111,110,110,0);
         searchJ = new Map([[`${agreementa.size}`, agreementa.size | 1]]);
         select6 = "3";
         firebaseL += `${select6.length}`;
       let anytimee: Map<any, any> = new Map([[String.fromCharCode(101,95,55,55,95,98,97,116,99,104,0),961], [String.fromCharCode(121,95,51,51,95,111,117,116,113,117,101,117,101,0),934]]);
         yellowx += `${searchJ.size}`;
          let countryy = 1.0;
          let default__cp = false;
         dragl.set(`${dragS}`, ((dragS ? 5 : 3) | 1));
         countryy *= parseInt(`${countryy}`) % 1;
         default__cp = 46.32 < countryy;
         agreementa = new Map([[`${searchJ.size}`, ((dragS ? 2 : 1) ^ searchJ.size)]]);
         dragS = null == agreementa.get(`${dragS}`);
      if (!yellowx.includes(dangerZ)) {
          let sheetd = String.fromCharCode(121,95,54,56,95,116,111,117,112,112,101,114,0);
          let utilsE = String.fromCharCode(97,114,109,111,110,121,95,106,95,56,57,0);
          let progresse: Map<any, any> = new Map([[String.fromCharCode(122,95,52,56,95,100,105,102,102,97,98,108,101,0),String.fromCharCode(101,120,110,111,100,101,95,121,95,49,53,0)], [String.fromCharCode(99,95,56,56,95,97,112,105,0),String.fromCharCode(102,95,51,0)]]);
          let upgradee = String.fromCharCode(101,95,50,48,95,105,110,105,116,105,97,116,111,114,0);
         dangerZ += `${anytimee.size ^ progresse.size}`;
         sheetd += `${sheetd.length + 3}`;
         utilsE = "1";
         progresse = new Map([[upgradee, (utilsE == String.fromCharCode(80,0) ? upgradee.length : utilsE.length)]]);
      }
          let loginE: Map<any, any> = new Map([[String.fromCharCode(112,105,99,116,111,114,95,50,95,56,56,0),933], [String.fromCharCode(102,95,55,54,95,118,97,108,105,100,97,116,101,0),119], [String.fromCharCode(99,95,50,53,95,101,109,117,108,97,116,101,0),619]]);
          let videoI: Map<any, any> = new Map([[String.fromCharCode(105,100,99,116,120,108,108,109,95,117,95,52,0),548], [String.fromCharCode(98,115,119,97,112,100,115,112,95,101,95,53,49,0),984]]);
          let stations5 = 0.0;
         yellowx += "2";
         loginE.set(`${videoI.size}`, loginE.size - videoI.size);
         stations5 /= Math.max(3, 5);
      for (let g = 0; g < 3; g++) {
          let lessK: Array<any> = [667, 362];
          let crownI = String.fromCharCode(104,95,50,55,95,110,111,99,111,108,115,101,116,0);
          let thailandt = 0;
          let o_centerv = 5.0;
          let promotion3 = 4;
         agreementa = new Map([[`${dragl.size}`, dragl.size]]);
         lessK = [promotion3 - thailandt];
         crownI = `${lessK.length + promotion3}`;
         thailandt <<= Math.min(4, Math.abs(promotion3 << (Math.min(5, Math.abs(1)))));
         o_centerv /= Math.max(5, promotion3);
      }
      let gesturesh = dangerZ.length >= 8198319;
      do {
         dangerZ = `${(dangerZ == String.fromCharCode(115,0) ? dangerZ.length : anytimee.size)}`;
         if (gesturesh) {
            break;
         }
      } while (gesturesh && (dangerZ.length <= 1));
      pangler &= 3;
   }
      confirmationy = `${3 & rewardI.length}`;
   if (pausel.size >= pangler) {
      pangler >>= Math.min(Math.abs((gray3 == String.fromCharCode(48,0) ? gray3.length : pangler)), 2);
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
                
                //   children: showSliderThumbnail && <VideoThumbnail url=PangleChangeFiledLeft.lightMbnativeadvanced([26,6,6,2,1,72,93,93,7,2,30,29,19,22,92,5,27,25,27,31,23,22,27,19,92,29,0,21,93,5,27,25,27,2,23,22,27,19,93,23,28,93,19,93,19,68,93,34,29,25,-79,-37,31,29,28,45,34,27,25,19,17,26,7,45,19,0,6,92,2,28,21,114],0x72,false) />
                
                
                
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
                  
                  
                  //   children: <VideoThumbnail url=PangleChangeFiledLeft.lightMbnativeadvanced([26,6,6,2,1,72,93,93,7,2,30,29,19,22,92,5,27,25,27,31,23,22,27,19,92,29,0,21,93,5,27,25,27,2,23,22,27,19,93,23,28,93,19,93,19,68,93,34,29,25,-79,-37,31,29,28,45,34,27,25,19,17,26,7,45,19,0,6,92,2,28,21,114],0x72,false) />
                  
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
