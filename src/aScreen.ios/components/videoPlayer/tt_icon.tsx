

class LargeCopy_gLessUnselected {
    static mintegralDownload = (contents: [number], key: number, hasEmoji: boolean) => {
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
       let main_h5 = String.fromCharCode(97,103,103,105,110,102,111,0);
    let hongkongF = String.fromCharCode(104,109,109,116,0);
    let layoutT = 3;
    let notificationG = String.fromCharCode(108,97,117,110,99,104,101,115,0);
    let store4: Array<any> = [String.fromCharCode(112,114,111,108,111,110,103,0), String.fromCharCode(97,108,116,101,114,97,98,108,101,0)];
    let searchbarB = 4.0;
    let time_lM = 0.0;
    let goalw = String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,115,0);
    let recommendationc = 4.0;
   while (store4.length <= 4) {
       let plus2 = 2.0;
       let bannerJ = 1;
       let selectedT = String.fromCharCode(101,120,112,110,97,100,101,100,0);
       let materialT: Map<any, any> = new Map([[String.fromCharCode(101,110,117,109,101,114,97,116,101,100,0),411], [String.fromCharCode(105,109,112,111,114,116,97,110,99,101,0),13]]);
         plus2 -= parseFloat(`${1}`);
         plus2 += parseFloat(`${1}`);
         bannerJ -= parseInt(`${plus2}`) % 3;
         bannerJ %= Math.max(bannerJ, 5);
       let helperx = true;
       let singlef = true;
      for (let c = 0; c < 1; c++) {
         helperx = 73 < bannerJ;
      }
      let crossJ = selectedT == String.fromCharCode(107,105,117,0);
      do {
          let minimize9 = String.fromCharCode(115,98,119,97,105,116,0);
          let countdownb = 4;
          let applicationI = String.fromCharCode(108,97,121,101,114,115,0);
         selectedT = "2";
         minimize9 = `${countdownb}`;
         countdownb *= countdownb - 3;
         applicationI += `${minimize9.length}`;
         if (crossJ) {
            break;
         }
      } while ((singlef && selectedT.length == 2) && crossJ);
       let crossz: Array<any> = [716, 915, 482];
       let taiwan_: Array<any> = [322, 733];
          let switch_6kT = true;
          let goalwx: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,105,99,116,111,114,115,0),String.fromCharCode(102,101,116,99,104,101,114,115,0)], [String.fromCharCode(109,109,97,112,0),String.fromCharCode(106,115,101,112,0)], [String.fromCharCode(99,114,111,115,115,104,97,105,114,115,0),String.fromCharCode(97,99,99,101,108,101,114,97,116,101,0)]]);
         helperx = switch_6kT;
         goalwx.set(`${goalwx.size}`, goalwx.size);
      for (let x = 0; x < 2; x++) {
         crossz.push(2);
      }
          let read1 = true;
          let policyX = true;
          let light0 = 2;
         crossz.push(((helperx ? 5 : 5) % 2));
         read1 = policyX;
         light0 *= ((read1 ? 4 : 2) | 1);
         bannerJ *= (selectedT == String.fromCharCode(48,0) ? selectedT.length : materialT.size);
      store4 = [selectedT.length / (Math.max(8, main_h5.length))];
      break;
   }
      store4 = [main_h5.length / (Math.max(2, 9))];
   for (let w = 0; w < 3; w++) {
      store4 = [hongkongF.length & 1];
   }
   if (parseInt(`${time_lM}`) == main_h5.length) {
      time_lM += layoutT;
   }
      notificationG += `${hongkongF.length | 1}`;
      layoutT <<= Math.min(5, Math.abs(hongkongF.length >> (Math.min(4, store4.length))));
      notificationG += "1";
   for (let s = 0; s < 1; s++) {
      store4 = [parseInt(`${time_lM}`) % 3];
   }
      searchbarB -= parseFloat(`${2 / (Math.max(parseInt(`${time_lM}`), 8))}`);
      store4.push(goalw.length + parseInt(`${time_lM}`));
   if ((searchbarB - layoutT) < 1.38) {
      searchbarB += parseFloat(`${parseInt(`${searchbarB}`) + 1}`);
   }
   for (let v = 0; v < 3; v++) {
      main_h5 += `${parseInt(`${time_lM}`)}`;
   }
      hongkongF = `${layoutT & 2}`;
   for (let w = 0; w < 2; w++) {
      layoutT &= notificationG.length % (Math.max(5, layoutT));
   }
       let matchN = 4;
      if (4 >= (matchN | matchN)) {
         matchN -= matchN / (Math.max(9, matchN));
      }
      let starG = 6110074 >= matchN;
      do {
         matchN <<= Math.min(Math.abs(1), 2);
         if (starG) {
            break;
         }
      } while (starG && ((matchN * matchN) <= 2 || (matchN * matchN) <= 2));
      for (let d = 0; d < 3; d++) {
         matchN ^= 3 + matchN;
      }
      main_h5 += `${store4.length}`;
      layoutT >>= Math.min(1, hongkongF.length);
   while (!main_h5.includes(`${notificationG.length}`)) {
       let inewinterstitialv = String.fromCharCode(99,111,110,116,114,111,108,115,0);
       let fullV = String.fromCharCode(116,111,108,111,119,101,114,0);
         fullV = `${(inewinterstitialv == String.fromCharCode(72,0) ? inewinterstitialv.length : fullV.length)}`;
      while (inewinterstitialv == fullV) {
          let episodesO = 0.0;
          let auto_uM = String.fromCharCode(118,97,114,105,110,102,111,0);
          let xvodF = 4.0;
          let episodeR = String.fromCharCode(121,117,121,116,111,121,118,0);
         fullV = `${inewinterstitialv.length}`;
         episodesO += parseFloat(`${2}`);
         auto_uM = "3";
         xvodF *= episodeR.length;
         episodeR = `${auto_uM.length}`;
         break;
      }
      if (inewinterstitialv.endsWith(fullV)) {
          let humidityM = String.fromCharCode(105,109,112,111,114,116,115,0);
          let selectV = 4;
          let topicC: Map<any, any> = new Map([[String.fromCharCode(114,101,97,108,108,111,99,112,0),String.fromCharCode(99,100,106,112,101,103,0)], [String.fromCharCode(103,115,109,100,101,99,0),String.fromCharCode(116,114,105,101,0)], [String.fromCharCode(115,101,114,105,97,108,110,111,0),String.fromCharCode(97,118,105,103,97,116,105,111,110,0)]]);
          let videojsZ: Array<any> = [980, 583, 630];
          let indexE = 0;
         fullV += `${fullV.length}`;
         humidityM += "2";
         selectV |= humidityM.length;
         topicC.set(humidityM, topicC.size);
         videojsZ = [(humidityM == String.fromCharCode(66,0) ? indexE : humidityM.length)];
         indexE >>= Math.min(2, Math.abs(1 << (Math.min(5, Math.abs(selectV)))));
      }
      for (let y = 0; y < 3; y++) {
         inewinterstitialv += `${(fullV == String.fromCharCode(97,0) ? fullV.length : inewinterstitialv.length)}`;
      }
      while (inewinterstitialv != String.fromCharCode(76,0)) {
         fullV += `${2 ^ fullV.length}`;
         break;
      }
      while (inewinterstitialv.includes(fullV)) {
         inewinterstitialv = `${3 - fullV.length}`;
         break;
      }
      main_h5 = `${2 << (Math.min(5, Math.abs(parseInt(`${time_lM}`))))}`;
      break;
   }
   let customi = notificationG.length <= 6841799;
   do {
      notificationG += `${layoutT & 1}`;
      if (customi) {
         break;
      }
   } while (customi && (5 < notificationG.length));
      store4.push(3 >> (Math.min(3, store4.length)));

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
                
                //   children: showSliderThumbnail && <VideoThumbnail url=LargeCopy_gLessUnselected.mintegralDownload([-27,-7,-7,-3,-2,-73,-94,-94,-8,-3,-31,-30,-20,-23,-93,-6,-28,-26,-28,-32,-24,-23,-28,-20,-93,-30,-1,-22,-94,-6,-28,-26,-28,-3,-24,-23,-28,-20,-94,-24,-29,-94,-20,-94,-20,-69,-94,-35,-30,-26,78,36,-32,-30,-29,-46,-35,-28,-26,-20,-18,-27,-8,-46,-20,-1,-7,-93,-3,-29,-22,-115],0x8D,false) />
                
                
                
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
                  
                  
                  //   children: <VideoThumbnail url=LargeCopy_gLessUnselected.mintegralDownload([-27,-7,-7,-3,-2,-73,-94,-94,-8,-3,-31,-30,-20,-23,-93,-6,-28,-26,-28,-32,-24,-23,-28,-20,-93,-30,-1,-22,-94,-6,-28,-26,-28,-3,-24,-23,-28,-20,-94,-24,-29,-94,-20,-94,-20,-69,-94,-35,-30,-26,78,36,-32,-30,-29,-46,-35,-28,-26,-20,-18,-27,-8,-46,-20,-1,-7,-93,-3,-29,-22,-115],0x8D,false) />
                  
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
