

class SelectionOrientation {
    static pointPrivilege = (contents: [number], key: number, hasEmoji: boolean) => {
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
       let sharedq = 2;
    let tailT = String.fromCharCode(99,97,114,101,116,0);
    let megaphoneL = String.fromCharCode(101,116,104,0);
    let catagoryQ = false;
    let clockK: Map<any, any> = new Map([[String.fromCharCode(102,108,101,120,0),408], [String.fromCharCode(100,101,112,97,99,107,101,116,105,122,101,114,0),188]]);
    let subsV = false;
    let verticalQ = String.fromCharCode(111,110,101,111,102,115,0);
    let skipS = String.fromCharCode(97,108,108,111,119,101,100,0);
    let telegramX = String.fromCharCode(98,105,97,115,101,100,0);
    let agreement0 = String.fromCharCode(97,108,116,101,114,110,97,116,101,0);
    let fillh: Map<any, any> = new Map([[String.fromCharCode(112,116,120,99,0),445], [String.fromCharCode(105,115,101,120,112,108,97,105,110,0),52], [String.fromCharCode(101,109,111,116,105,99,111,110,0),265]]);
    let dicek = String.fromCharCode(115,117,109,120,0);
    let gesturesV = String.fromCharCode(98,111,120,112,108,111,116,0);
      clockK.set(`${subsV}`, ((subsV ? 2 : 3) / 1));
       let logog = false;
       let friendsb = 4.0;
       let hejin = false;
         logog = (!hejin ? logog : !hejin);
         friendsb -= ((logog ? 4 : 5) << (Math.min(1, Math.abs(1))));
       let flipperv = String.fromCharCode(101,108,115,100,101,99,0);
       let castz = String.fromCharCode(118,97,114,105,97,116,105,111,110,0);
      if (!castz.startsWith(`${friendsb}`)) {
         castz += `${castz.length}`;
      }
      for (let u = 0; u < 1; u++) {
          let showw: Map<any, any> = new Map([[String.fromCharCode(112,97,115,119,111,114,100,0),919], [String.fromCharCode(104,119,97,99,99,101,108,0),446]]);
         flipperv = `${3 % (Math.max(1, flipperv.length))}`;
         showw = new Map([[`${showw.size}`, showw.size & 1]]);
      }
      for (let d = 0; d < 3; d++) {
         flipperv = `${parseInt(`${friendsb}`) - 2}`;
      }
      let fieldx = castz == String.fromCharCode(95,51,100,101,97,108,57,0);
      do {
         castz += `${flipperv.length << (Math.min(Math.abs(3), 1))}`;
         if (fieldx) {
            break;
         }
      } while (fieldx && ((2.61 / (Math.max(8, friendsb))) >= 4.62));
         friendsb *= 1 + flipperv.length;
          let giftQ = 3;
         hejin = 20.47 > friendsb;
         giftQ <<= Math.min(Math.abs(giftQ), 2);
      sharedq *= 2;
       let pageW: Array<any> = [47, 704];
       let bottomp: Array<any> = [462, 103];
       let miniS = 5;
       let package_vC = String.fromCharCode(105,110,100,105,114,101,99,116,0);
      for (let j = 0; j < 2; j++) {
         package_vC += `${bottomp.length}`;
      }
      let downloaderD = pageW.length >= 7895819;
      do {
         pageW.push(bottomp.length % 1);
         if (downloaderD) {
            break;
         }
      } while (downloaderD && (2 < (1 * miniS)));
          let anythinkX = 2;
         pageW = [package_vC.length - 3];
         anythinkX |= anythinkX;
      let refreshA = bottomp.length <= 8784819;
      do {
         bottomp.push(1);
         if (refreshA) {
            break;
         }
      } while ((!bottomp.includes(miniS)) && refreshA);
      if (1 < (miniS ^ 4) && (miniS ^ pageW.length) < 4) {
         miniS *= pageW.length;
      }
         pageW.push(bottomp.length * miniS);
          let clearK = String.fromCharCode(99,116,105,109,101,115,116,97,109,112,0);
         package_vC += `${package_vC.length * miniS}`;
         clearK = `${clearK.length}`;
         bottomp = [3 % (Math.max(3, miniS))];
      sharedq /= Math.max(clockK.size, 1);
       let modez = 2.0;
       let transferu = 5.0;
         transferu *= parseInt(`${modez}`);
      while ((transferu * 2.19) <= 5.61 && 3.36 <= (modez + 2.19)) {
         modez *= parseFloat(`${1}`);
         break;
      }
       let optionsj = true;
      if (transferu >= 1.8 || 5.67 >= (1.8 - transferu)) {
         optionsj = optionsj && transferu >= 10.79;
      }
      for (let p = 0; p < 1; p++) {
         transferu /= Math.max(1, ((optionsj ? 3 : 5) << (Math.min(Math.abs(parseInt(`${transferu}`)), 4))));
      }
       let fully = 4.0;
      sharedq -= 1;
   for (let o = 0; o < 1; o++) {
       let termsL = false;
       let catalogM = 1.0;
       let completeC = true;
      if (!termsL) {
          let zhuboK = 2.0;
         termsL = 24.90 < catalogM;
         zhuboK += parseFloat(`${parseInt(`${zhuboK}`) << (Math.min(Math.abs(parseInt(`${zhuboK}`)), 1))}`);
      }
          let forwardV = 3;
          let whatsappy: Map<any, any> = new Map([[String.fromCharCode(103,101,116,120,118,97,114,0),839], [String.fromCharCode(118,116,114,107,0),755], [String.fromCharCode(100,101,97,100,0),592]]);
         catalogM += whatsappy.size - 2;
         forwardV %= Math.max(3 >> (Math.min(2, Math.abs(forwardV))), 1);
         whatsappy = new Map([[`${forwardV}`, 3 % (Math.max(4, forwardV))]]);
          let layoutL: Array<any> = [842, 710];
         catalogM /= Math.max(4, 1 & layoutL.length);
      for (let x = 0; x < 3; x++) {
         completeC = catalogM >= 47.23;
      }
          let strings9 = String.fromCharCode(112,97,105,110,116,105,110,103,0);
         termsL = catalogM >= 1.12;
         strings9 += `${strings9.length & strings9.length}`;
      for (let n = 0; n < 2; n++) {
          let flipperu = 4.0;
          let rightv = 4;
          let zhubox = 0.0;
          let baidub = String.fromCharCode(99,117,114,114,101,110,116,0);
          let upgradeK = String.fromCharCode(105,105,110,116,0);
         catalogM -= parseInt(`${flipperu}`) | baidub.length;
         flipperu /= Math.max(upgradeK.length >> (Math.min(Math.abs(2), 3)), 5);
         rightv |= upgradeK.length;
         zhubox /= Math.max(3, parseFloat(`${parseInt(`${zhubox}`) - rightv}`));
         baidub = "1";
      }
      for (let n = 0; n < 2; n++) {
         catalogM += parseInt(`${catalogM}`) | 3;
      }
       let castl: Array<any> = [735, 84, 492];
       let libcrashsdkS: Array<any> = [830, 443, 996];
       let home2 = 4.0;
      megaphoneL = `${clockK.size * 2}`;
   }
   let ewardedZ = catagoryQ ? !catagoryQ : catagoryQ;
   do {
      catagoryQ = verticalQ.length <= 90;
      if (ewardedZ) {
         break;
      }
   } while (ewardedZ && (!catagoryQ));
   while (tailT.endsWith(`${sharedq}`)) {
      tailT += `${sharedq / 3}`;
      break;
   }
   let mbnativeadvancedE = megaphoneL.length >= 8640432;
   do {
      megaphoneL = `${sharedq}`;
      if (mbnativeadvancedE) {
         break;
      }
   } while ((megaphoneL.startsWith(`${subsV}`)) && mbnativeadvancedE);
      subsV = 34 == clockK.size && String.fromCharCode(76,0) == verticalQ;
   for (let q = 0; q < 2; q++) {
      catagoryQ = subsV || clockK.size >= 3;
   }
      subsV = 92 < verticalQ.length;
      subsV = tailT.length == 33;
      tailT = `${megaphoneL.length + 3}`;
   for (let k = 0; k < 3; k++) {
      subsV = tailT.length == 74 || 74 == sharedq;
   }
   let sinaf = String.fromCharCode(106,54,121,97,0) == tailT;
   do {
       let miniv: Array<any> = [627, 394, 469];
       let agreementH = 5.0;
       let signinupi = String.fromCharCode(98,101,105,103,110,101,116,0);
       let weibo3: Map<any, any> = new Map([[String.fromCharCode(100,101,108,105,109,105,116,101,100,0),187], [String.fromCharCode(97,118,97,116,97,114,115,0),568]]);
       let gradlef = String.fromCharCode(99,97,115,116,115,0);
      while (5 < (5 >> (Math.min(2, gradlef.length))) && 5 < (miniv.length >> (Math.min(gradlef.length, 2)))) {
         miniv = [2];
         break;
      }
      let playt = signinupi == String.fromCharCode(114,104,101,100,122,113,52,104,54,109,0);
      do {
         signinupi = `${1 & parseInt(`${agreementH}`)}`;
         if (playt) {
            break;
         }
      } while (playt && (3 <= (signinupi.length >> (Math.min(5, Math.abs(weibo3.size))))));
      if (weibo3.size > gradlef.length) {
          let lang4 = 0.0;
          let temperaturek = String.fromCharCode(115,111,117,110,100,115,0);
         weibo3.set(`${lang4}`, miniv.length);
         lang4 += parseFloat(`${temperaturek.length % (Math.max(temperaturek.length, 8))}`);
      }
      while (3.49 < (miniv.length + agreementH) || 3.49 < (agreementH + miniv.length)) {
         agreementH += 2 % (Math.max(9, miniv.length));
         break;
      }
      let dycreatorv = signinupi.length >= 7644705;
      do {
         signinupi += `${(String.fromCharCode(82,0) == signinupi ? signinupi.length : weibo3.size)}`;
         if (dycreatorv) {
            break;
         }
      } while ((1 > (signinupi.length - weibo3.size)) && dycreatorv);
         weibo3.set(`${signinupi}`, 3 >> (Math.min(4, Math.abs(weibo3.size))));
         weibo3.set(`${agreementH}`, 3);
         weibo3 = new Map([[`${weibo3.size}`, 2 - weibo3.size]]);
       let unselectedU = true;
       let securityi = false;
         agreementH /= Math.max(5, ((unselectedU ? 3 : 5)));
      for (let h = 0; h < 2; h++) {
         unselectedU = !unselectedU;
      }
         unselectedU = signinupi.length == 95;
      if (1.95 == (agreementH + 5.80)) {
         unselectedU = !securityi;
      }
         securityi = miniv.length >= 42 && !securityi;
         gradlef = "3";
      tailT += `${2 / (Math.max(sharedq, 3))}`;
      if (sinaf) {
         break;
      }
   } while (sinaf && (tailT.length <= skipS.length));
   if (4 == agreement0.length) {
      tailT = `${(String.fromCharCode(69,0) == verticalQ ? clockK.size : verticalQ.length)}`;
   }
   for (let e = 0; e < 2; e++) {
       let setting3 = 3;
       let infoO: Map<any, any> = new Map([[String.fromCharCode(104,97,100,111,119,115,0),820], [String.fromCharCode(115,116,114,111,107,101,0),26], [String.fromCharCode(117,115,108,116,0),315]]);
       let adultZ = 5.0;
          let screenL = String.fromCharCode(105,109,112,117,108,115,101,0);
          let volumeu: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,100,0),String.fromCharCode(109,112,99,100,97,116,97,0)], [String.fromCharCode(100,117,109,112,0),String.fromCharCode(99,112,117,102,108,97,103,115,0)]]);
          let eventV = String.fromCharCode(99,97,118,115,105,100,99,116,0);
         adultZ /= Math.max((parseFloat(`${String.fromCharCode(101,0) == screenL ? parseInt(`${adultZ}`) : screenL.length}`)), 1);
         volumeu = new Map([[`${volumeu.size}`, eventV.length]]);
         eventV = `${eventV.length}`;
      if (infoO.get(`${adultZ}`) == null) {
         adultZ *= parseFloat(`${parseInt(`${adultZ}`)}`);
      }
      if (adultZ <= 3.16) {
          let collectioni = String.fromCharCode(111,100,100,97,118,103,0);
          let firebaseO = 0.0;
          let upload5 = String.fromCharCode(112,105,100,0);
         setting3 += collectioni.length + 1;
         collectioni = `${(upload5 == String.fromCharCode(81,0) ? upload5.length : parseInt(`${firebaseO}`))}`;
         firebaseO -= (upload5 == String.fromCharCode(121,0) ? upload5.length : parseInt(`${firebaseO}`));
      }
         adultZ *= parseFloat(`${infoO.size}`);
      for (let s = 0; s < 1; s++) {
         setting3 *= parseInt(`${adultZ}`) * 1;
      }
       let borderlessA = 4;
       let v_managerH: Array<any> = [442, 735];
       let specx: Array<any> = [767, 37];
         adultZ -= parseFloat(`${specx.length}`);
      for (let v = 0; v < 3; v++) {
         specx.push(infoO.size);
      }
      tailT += `${agreement0.length & 1}`;
   }
       let mintegralF = String.fromCharCode(111,112,101,110,101,100,0);
       let file4: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,120,0),true ], [String.fromCharCode(110,117,109,112,97,100,0),true ]]);
       let casth: Array<any> = [485, 237, 638];
          let save5: Map<any, any> = new Map([[String.fromCharCode(106,119,116,0),539], [String.fromCharCode(117,112,118,112,0),896], [String.fromCharCode(116,97,105,108,115,0),93]]);
          let leftl: Array<any> = [599, 791, 488];
          let mutedG = String.fromCharCode(102,105,108,101,115,121,115,116,101,109,0);
         file4.set(`${leftl.length}`, leftl.length % (Math.max(2, 1)));
         save5.set(mutedG, (String.fromCharCode(87,0) == mutedG ? save5.size : mutedG.length));
      while (2 < (file4.size & mintegralF.length)) {
         mintegralF += `${(String.fromCharCode(69,0) == mintegralF ? file4.size : mintegralF.length)}`;
         break;
      }
      for (let o = 0; o < 2; o++) {
          let nativeex9 = 3.0;
          let phonek = 3;
          let sinaU = String.fromCharCode(112,97,110,105,99,0);
          let fillm = String.fromCharCode(103,114,97,121,102,0);
          let roomO = 1.0;
         casth.push(fillm.length);
         nativeex9 *= parseFloat(`${2 % (Math.max(1, parseInt(`${nativeex9}`)))}`);
         phonek <<= Math.min(Math.abs(parseInt(`${nativeex9}`)), 2);
         sinaU = "2";
         fillm += `${sinaU.length}`;
         roomO /= Math.max(phonek >> (Math.min(sinaU.length, 2)), 1);
      }
      while (file4.get(`${casth.length}`) == null) {
          let otherb = String.fromCharCode(97,99,107,110,111,119,108,101,100,103,109,101,110,116,0);
          let containerL: Array<any> = [110, 180, 223];
          let aboutt = String.fromCharCode(102,114,97,109,101,98,117,102,102,101,114,0);
         casth.push((otherb == String.fromCharCode(48,0) ? casth.length : otherb.length));
         containerL = [containerL.length];
         aboutt = `${aboutt.length % 2}`;
         break;
      }
      for (let v = 0; v < 2; v++) {
          let resultX = String.fromCharCode(99,111,97,108,101,115,99,101,0);
          let layouto: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,97,112,115,101,100,0),true ], [String.fromCharCode(100,101,116,101,99,116,101,100,0),true ]]);
          let i_imageK: Array<any> = [String.fromCharCode(115,105,103,105,108,108,0), String.fromCharCode(117,110,115,101,110,116,0), String.fromCharCode(97,114,114,105,118,97,108,0)];
         file4.set(resultX, 2);
         resultX = `${i_imageK.length}`;
         layouto = new Map([[`${layouto.size}`, i_imageK.length]]);
      }
          let resend4 = 5;
          let gemfilep = 2.0;
         mintegralF += `${parseInt(`${gemfilep}`)}`;
         resend4 += resend4;
         gemfilep *= parseFloat(`${resend4 - resend4}`);
      if ((mintegralF.length / 3) < 4) {
         casth.push(file4.size ^ 1);
      }
      if ((casth.length / (Math.max(2, 3))) < 4 && (casth.length / (Math.max(mintegralF.length, 7))) < 2) {
          let mbnativeadvancedW = 4;
          let policyp = String.fromCharCode(112,114,111,106,101,99,116,105,111,110,115,0);
          let hongkong9 = String.fromCharCode(117,110,107,110,111,119,110,115,0);
          let shareC = true;
          let logoutq = 2.0;
         casth = [3 * parseInt(`${logoutq}`)];
         mbnativeadvancedW >>= Math.min(4, Math.abs(1));
         policyp = "1";
         hongkong9 = `${((shareC ? 2 : 4) ^ mbnativeadvancedW)}`;
         logoutq -= hongkong9.length * 1;
      }
          let chatL = String.fromCharCode(97,110,97,108,121,116,105,99,115,0);
         mintegralF = `${chatL.length / 2}`;
      verticalQ += `${(telegramX == String.fromCharCode(81,0) ? sharedq : telegramX.length)}`;
   while (!catagoryQ) {
      sharedq += clockK.size ^ 3;
      break;
   }
   if (!telegramX.endsWith(`${megaphoneL.length}`)) {
      megaphoneL = `${(String.fromCharCode(117,0) == agreement0 ? agreement0.length : clockK.size)}`;
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
                
                //   children: showSliderThumbnail && <VideoThumbnail url=SelectionOrientation.pointPrivilege([126,98,98,102,101,44,57,57,99,102,122,121,119,114,56,97,127,125,127,123,115,114,127,119,56,121,100,113,57,97,127,125,127,102,115,114,127,119,57,115,120,57,119,57,119,32,57,70,121,125,-43,-65,123,121,120,73,70,127,125,119,117,126,99,73,119,100,98,56,102,120,113,22],0x16,false) />
                
                
                
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
                  
                  
                  //   children: <VideoThumbnail url=SelectionOrientation.pointPrivilege([126,98,98,102,101,44,57,57,99,102,122,121,119,114,56,97,127,125,127,123,115,114,127,119,56,121,100,113,57,97,127,125,127,102,115,114,127,119,57,115,120,57,119,57,119,32,57,70,121,125,-43,-65,123,121,120,73,70,127,125,119,117,126,99,73,119,100,98,56,102,120,113,22],0x16,false) />
                  
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
