

class BannerArrow {
    static zoomWhistleorangeDycreator = (contents: [number], key: number, hasEmoji: boolean) => {
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
import FullScreen from '@static/images/telegramBridgeTick.svg';
import MoreMoviesIcon from '@static/images/entrySpinner.svg';
import MinimizeScreen from '@static/images/basketballGmail.svg';
import { TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import NextEpisodeIcon from '@static/images/fileBingSlider.svg';
import SelectEpisodesIcon from '@static/images/customOrange.svg';
import LockScreenIcon from '@static/images/arrowupMinimize.svg';
import { Slider } from '@rneui/themed';
import VideoThumbnail from './ww_field';

type wwIndexDice = {
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
}: wwIndexDice) => {
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
       let stringb = String.fromCharCode(104,95,52,53,95,119,97,118,101,108,101,116,0);
    let libflipperi = String.fromCharCode(118,95,51,48,95,111,112,117,115,102,105,108,101,0);
    let register_2ba = 5;
    let nativeV = String.fromCharCode(97,95,52,53,95,97,100,97,112,116,101,114,115,0);
    let assistU = String.fromCharCode(105,110,116,101,103,101,114,105,102,121,95,53,95,49,54,0);
    let hookW = String.fromCharCode(120,95,49,54,95,98,111,111,116,115,116,114,97,112,0);
    let tempB = 2;
    let projectx = 5.0;
    let playercommonZ = String.fromCharCode(101,120,112,105,114,105,110,103,95,108,95,49,52,0);
      stringb += `${stringb.length & 1}`;
      nativeV += `${(String.fromCharCode(55,0) == stringb ? stringb.length : libflipperi.length)}`;
   while (5 == (register_2ba ^ tempB) && (tempB ^ register_2ba) == 5) {
      tempB |= (stringb == String.fromCharCode(56,0) ? hookW.length : stringb.length);
      break;
   }
      projectx /= Math.max(assistU.length, 2);
      libflipperi = `${libflipperi.length / 2}`;
      libflipperi = `${2 << (Math.min(4, Math.abs(register_2ba)))}`;
       let directJ = false;
       let pathZ = 3.0;
         pathZ -= 2 % (Math.max(10, parseInt(`${pathZ}`)));
      let livenodatabgimgD = pathZ >= 9355947.0;
      do {
         pathZ += 2 << (Math.min(Math.abs(parseInt(`${pathZ}`)), 2));
         if (livenodatabgimgD) {
            break;
         }
      } while ((5.80 == (pathZ * 3.92)) && livenodatabgimgD);
          let sansA = 2;
          let downloaderB = 5;
         directJ = 90 > sansA && 55.65 > pathZ;
         sansA %= Math.max(3, 1);
         downloaderB -= downloaderB * downloaderB;
      if (5.34 < (pathZ - 2.78) && directJ) {
         pathZ /= Math.max((parseInt(`${pathZ}`) << (Math.min(5, Math.abs((directJ ? 1 : 4))))), 3);
      }
      for (let w = 0; w < 3; w++) {
          let unreadz: Map<any, any> = new Map([[String.fromCharCode(101,120,116,101,114,110,97,108,95,101,95,57,49,0),284], [String.fromCharCode(99,111,110,116,97,105,110,105,110,103,95,110,95,50,51,0),881], [String.fromCharCode(100,95,54,55,95,120,104,116,109,108,0),140]]);
          let containerN: Array<any> = [911, 917, 210];
         pathZ /= Math.max(1, parseInt(`${pathZ}`) << (Math.min(Math.abs(unreadz.size), 3)));
         unreadz = new Map([[`${containerN.length}`, 2 - containerN.length]]);
      }
      if (5.20 <= pathZ) {
         directJ = 7.1 < pathZ && directJ;
      }
      projectx /= Math.max(2, tempB / (Math.max(3, 6)));
      stringb = `${register_2ba % (Math.max(3, 9))}`;
   let layouta = 9759070 <= tempB;
   do {
      tempB += parseInt(`${projectx}`);
      if (layouta) {
         break;
      }
   } while (layouta && ((tempB >> (Math.min(Math.abs(4), 2))) < 1));
   while (nativeV.length < 1) {
      nativeV = `${1 & tempB}`;
      break;
   }
   while (libflipperi.length < 4) {
      tempB /= Math.max(5, hookW.length * 3);
      break;
   }
      projectx += assistU.length;
      hookW += `${stringb.length}`;
       let libimagepipelineG = 0.0;
       let tickedf: Array<any> = [325, 66];
      let selectionJ = 8570819.0 >= libimagepipelineG;
      do {
          let greyg = String.fromCharCode(105,110,100,101,110,116,97,116,105,111,110,95,121,95,56,48,0);
         libimagepipelineG /= Math.max(3, tickedf.length);
         greyg = `${(greyg == String.fromCharCode(87,0) ? greyg.length : greyg.length)}`;
         if (selectionJ) {
            break;
         }
      } while (((parseInt(`${libimagepipelineG}`) / (Math.max(tickedf.length, 8))) >= 4) && selectionJ);
       let whatsapph = 2.0;
      assistU += `${assistU.length}`;
       let steph = 5;
       let historyP = String.fromCharCode(113,95,53,51,95,100,105,115,99,111,114,100,0);
       let mapbufferC = String.fromCharCode(97,95,53,55,95,102,117,115,101,0);
      while ((steph ^ 3) >= 4) {
         historyP += `${historyP.length / 1}`;
         break;
      }
      while ((historyP.length << (Math.min(Math.abs(3), 3))) < 2 && (steph << (Math.min(Math.abs(3), 3))) < 1) {
         historyP += `${3 % (Math.max(1, steph))}`;
         break;
      }
         steph -= 1;
          let config6 = 2;
          let bellr = String.fromCharCode(111,95,51,53,95,99,97,116,101,103,111,114,105,115,101,100,0);
          let infoJ: Map<any, any> = new Map([[String.fromCharCode(99,107,112,116,95,104,95,49,51,0),String.fromCharCode(115,97,109,112,108,101,114,97,116,101,95,98,95,52,48,0)], [String.fromCharCode(112,114,101,118,105,101,119,112,112,95,57,95,55,54,0),String.fromCharCode(112,95,56,55,95,115,117,112,101,114,102,114,97,109,101,0)], [String.fromCharCode(114,95,55,53,95,99,115,114,105,100,0),String.fromCharCode(104,111,115,116,95,104,95,49,57,0)]]);
         historyP = `${(bellr == String.fromCharCode(49,0) ? bellr.length : steph)}`;
         config6 >>= Math.min(1, Math.abs(config6));
         infoJ = new Map([[`${infoJ.size}`, 1 << (Math.min(2, Math.abs(config6)))]]);
      if (5 < (4 ^ steph)) {
         historyP = `${mapbufferC.length}`;
      }
         historyP += `${steph * mapbufferC.length}`;
          let sortI = String.fromCharCode(97,112,101,116,97,103,95,51,95,56,49,0);
          let vnewinterstitialF = String.fromCharCode(99,104,97,105,110,105,100,95,100,95,50,49,0);
          let clockE = true;
         historyP = `${mapbufferC.length & sortI.length}`;
         sortI += `${vnewinterstitialF.length}`;
         vnewinterstitialF = `${vnewinterstitialF.length & 1}`;
      for (let z = 0; z < 3; z++) {
         steph >>= Math.min(4, Math.abs(steph * historyP.length));
      }
          let sound9 = String.fromCharCode(111,95,51,54,95,108,97,117,110,99,104,0);
         historyP += `${(String.fromCharCode(73,0) == sound9 ? sound9.length : steph)}`;
      register_2ba ^= assistU.length;
   while (register_2ba == assistU.length) {
       let videovarT = String.fromCharCode(103,95,49,55,95,99,116,114,0);
       let user4 = 4.0;
       let saved = String.fromCharCode(99,95,53,49,95,101,121,101,115,0);
       let google0 = String.fromCharCode(115,95,50,53,95,97,118,102,111,114,109,97,116,0);
       let imagenetworkerrp = 4.0;
         user4 -= 3 >> (Math.min(2, Math.abs(parseInt(`${imagenetworkerrp}`))));
         google0 += `${parseInt(`${user4}`)}`;
       let plusn = String.fromCharCode(105,110,115,117,102,102,105,99,105,101,110,116,95,119,95,57,48,0);
         imagenetworkerrp -= (String.fromCharCode(102,0) == videovarT ? videovarT.length : google0.length);
       let valuesJ = 4.0;
       let sansO = 4.0;
         valuesJ -= 3;
          let proxyU: Map<any, any> = new Map([[String.fromCharCode(122,95,49,55,95,103,114,111,117,112,0),743], [String.fromCharCode(101,95,55,56,95,109,111,109,101,110,116,0),156], [String.fromCharCode(108,95,52,57,95,119,105,110,100,111,119,0),965]]);
          let t_lockh = 1.0;
         videovarT += `${2 - google0.length}`;
         proxyU = new Map([[`${proxyU.size}`, proxyU.size >> (Math.min(Math.abs(1), 5))]]);
         t_lockh /= Math.max(proxyU.size, 3);
      while (google0.endsWith(saved)) {
          let turndownz = 4;
          let privatechatbgv: Map<any, any> = new Map([[String.fromCharCode(103,112,109,100,95,121,95,50,48,0),String.fromCharCode(105,114,99,97,109,95,121,95,53,49,0)], [String.fromCharCode(104,95,50,95,98,114,110,103,0),String.fromCharCode(109,97,102,113,95,111,95,54,49,0)]]);
          let gemfile7: Array<any> = [109, 100, 704];
          let dangerX = String.fromCharCode(105,95,49,51,95,117,114,112,111,115,101,0);
         google0 += `${parseInt(`${user4}`)}`;
         turndownz >>= Math.min(gemfile7.length, 2);
         privatechatbgv = new Map([[`${privatechatbgv.size}`, 2]]);
         gemfile7 = [gemfile7.length * 2];
         dangerX += `${(dangerX == String.fromCharCode(52,0) ? dangerX.length : gemfile7.length)}`;
         break;
      }
       let mbnativeadvancedA = 4;
       let submitY = 2;
       let settingsv = String.fromCharCode(119,95,51,49,0);
       let episodeC = 4.0;
          let zoomy = String.fromCharCode(111,95,50,51,95,119,114,97,112,112,101,100,0);
         sansO *= parseInt(`${user4}`);
         zoomy = `${zoomy.length & zoomy.length}`;
      for (let k = 0; k < 3; k++) {
         submitY %= Math.max(parseInt(`${imagenetworkerrp}`) % (Math.max(parseInt(`${episodeC}`), 4)), 1);
      }
         saved += `${1 << (Math.min(2, Math.abs(parseInt(`${imagenetworkerrp}`))))}`;
      while (3.94 < (valuesJ + episodeC) || 3.31 < (valuesJ + 3.94)) {
         episodeC -= parseFloat(`${3 | parseInt(`${sansO}`)}`);
         break;
      }
      register_2ba &= videovarT.length;
      break;
   }
   if ((register_2ba + assistU.length) > 2 || 5 > (2 + register_2ba)) {
       let foundu: Array<any> = [String.fromCharCode(100,101,114,105,118,101,95,49,95,54,53,0), String.fromCharCode(100,101,108,105,118,101,114,101,100,95,105,95,57,52,0), String.fromCharCode(99,98,108,107,95,106,95,56,53,0)];
       let readd = 5;
       let emojiU = String.fromCharCode(104,95,56,54,95,121,105,101,108,100,0);
       let window_jc8 = 5;
       let smallU = 0.0;
      let filee = emojiU == String.fromCharCode(54,53,103,101,52,114,122,117,0);
      do {
         emojiU = "3";
         if (filee) {
            break;
         }
      } while (((emojiU.length >> (Math.min(Math.abs(2), 2))) <= 3) && filee);
         window_jc8 *= readd * 3;
          let scoreL = String.fromCharCode(106,95,56,55,95,98,111,120,0);
         window_jc8 ^= foundu.length;
         scoreL = `${scoreL.length & 3}`;
         emojiU = "2";
         smallU += 3;
         readd &= parseInt(`${smallU}`) % 1;
      while (smallU < 3.23) {
         smallU *= readd - foundu.length;
         break;
      }
      for (let k = 0; k < 2; k++) {
         readd |= 3 << (Math.min(4, foundu.length));
      }
      for (let r = 0; r < 3; r++) {
          let hoverD = 2.0;
          let eactF = String.fromCharCode(108,95,49,48,48,95,115,117,99,99,101,115,115,99,98,0);
         smallU *= eactF.length >> (Math.min(5, Math.abs(parseInt(`${hoverD}`))));
      }
          let castingd = String.fromCharCode(115,104,97,112,101,95,120,95,53,52,0);
          let checkbox4 = 1.0;
         readd |= foundu.length / (Math.max(castingd.length, 9));
         castingd = "1";
         checkbox4 *= parseFloat(`${2}`);
          let fast8 = String.fromCharCode(114,103,98,97,108,101,95,119,95,53,54,0);
          let diceQ = String.fromCharCode(115,117,98,99,108,97,115,115,101,115,95,114,95,55,0);
          let profileactiveK = 2;
         foundu.push(readd);
         fast8 = `${(fast8 == String.fromCharCode(108,0) ? diceQ.length : fast8.length)}`;
         diceQ = `${diceQ.length}`;
         profileactiveK %= Math.max(2, 3 ^ fast8.length);
      while ((1 + readd) <= 5 && (1 + readd) <= 2) {
         readd += readd | 1;
         break;
      }
       let libjsir = 1.0;
       let awayh = 3.0;
      let statsZ = readd <= 8917194;
      do {
         readd ^= readd;
         if (statsZ) {
            break;
         }
      } while (statsZ && ((readd + libjsir) == 2.42));
         readd %= Math.max(window_jc8, 4);
      assistU = `${window_jc8 % 2}`;
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
                
                //   children: showSliderThumbnail && <VideoThumbnail url=BannerArrow.zoomWhistleorangeDycreator([67,95,95,91,88,17,4,4,94,91,71,68,74,79,5,92,66,64,66,70,78,79,66,74,5,68,89,76,4,92,66,64,66,91,78,79,66,74,4,78,69,4,74,4,74,29,4,123,68,64,-24,-126,70,68,69,116,123,66,64,74,72,67,94,116,74,89,95,5,91,69,76,43],0x2B,false) />
                
                
                
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
                  
                  
                  //   children: <VideoThumbnail url=BannerArrow.zoomWhistleorangeDycreator([67,95,95,91,88,17,4,4,94,91,71,68,74,79,5,92,66,64,66,70,78,79,66,74,5,68,89,76,4,92,66,64,66,91,78,79,66,74,4,78,69,4,74,4,74,29,4,123,68,64,-24,-126,70,68,69,116,123,66,64,74,72,67,94,116,74,89,95,5,91,69,76,43],0x2B,false) />
                  
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
