

class RuntimeIconchatsend {
    static iconbellactiveThemeXvodBackico = (contents: [number], key: number, hasEmoji: boolean) => {
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
import FullScreen from '@static/images/classesSend.svg';
import MoreMoviesIcon from '@static/images/reactnavigationYellowscoreball.svg';
import MinimizeScreen from '@static/images/notificationgrayInouttargetyellowIconedit.svg';
import { TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import NextEpisodeIcon from '@static/images/currentGoallogo.svg';
import SelectEpisodesIcon from '@static/images/usernameRoot.svg';
import LockScreenIcon from '@static/images/runtimeschedulerBecomeTumbnail.svg';
import { Slider } from '@rneui/themed';
import VideoThumbnail from './wawa_libreact';

type wawaAwayShow = {
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
}: wawaAwayShow) => {
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
       let iconbackwhite3 = String.fromCharCode(109,112,108,97,110,101,95,106,95,57,51,0);
    let yellow2: Map<any, any> = new Map([[String.fromCharCode(101,110,97,98,108,101,95,108,95,54,50,0),false ], [String.fromCharCode(121,95,51,52,95,115,111,114,116,101,114,0),false ]]);
    let whiteanimationliveF = 4.0;
    let shrinkc = String.fromCharCode(108,95,53,51,95,99,111,108,108,97,112,115,105,110,103,0);
    let baiduads0 = 1.0;
    let shirt6 = 2;
    let whistle_ = 0.0;
    let dialog1 = String.fromCharCode(121,95,50,51,95,115,99,114,97,112,101,0);
   if ((shrinkc.length + 1) == 3 || 3.48 == (baiduads0 / 3.92)) {
      shrinkc += `${shirt6}`;
   }
   if (!iconbackwhite3.includes(`${yellow2.size}`)) {
       let libfbjniZ = 3.0;
       let disconnectedw = 0;
         libfbjniZ -= 2;
         disconnectedw -= disconnectedw;
      while ((5 << (Math.min(3, Math.abs(disconnectedw)))) >= 3 || (5 | disconnectedw) >= 3) {
         disconnectedw |= parseInt(`${libfbjniZ}`) ^ disconnectedw;
         break;
      }
      let taiwanO = libfbjniZ >= 9348754.0;
      do {
          let notificationfillemptyV = String.fromCharCode(115,95,55,48,0);
          let sidej: Map<any, any> = new Map([[String.fromCharCode(102,116,115,121,121,95,101,95,57,55,0),false ], [String.fromCharCode(105,95,56,50,95,109,97,110,97,103,101,115,0),false ]]);
          let tickedh = true;
          let expired1 = String.fromCharCode(103,95,51,56,95,101,110,99,97,112,115,117,108,97,116,101,0);
          let google6 = String.fromCharCode(115,105,99,107,95,115,95,56,57,0);
         libfbjniZ /= Math.max(expired1.length + 2, 5);
         notificationfillemptyV = `${sidej.size}`;
         sidej.set(`${tickedh}`, sidej.size);
         expired1 += `${3 | notificationfillemptyV.length}`;
         google6 = `${(String.fromCharCode(51,0) == google6 ? notificationfillemptyV.length : google6.length)}`;
         if (taiwanO) {
            break;
         }
      } while ((5.30 == (libfbjniZ * disconnectedw)) && taiwanO);
         disconnectedw += parseInt(`${libfbjniZ}`) >> (Math.min(1, Math.abs(3)));
      if (5.91 <= (libfbjniZ + 3.37)) {
         libfbjniZ *= parseInt(`${libfbjniZ}`);
      }
      yellow2.set(`${whistle_}`, shirt6);
   }
   while (4.75 <= (whistle_ * 3.65) || 3 <= (parseInt(`${whistle_}`) * shirt6)) {
      shirt6 |= 1;
      break;
   }
   while (4 == (5 * shirt6)) {
      shirt6 |= parseInt(`${whistle_}`) * 2;
      break;
   }
   while (2 >= (iconbackwhite3.length | shirt6)) {
      shirt6 >>= Math.min(5, Math.abs((iconbackwhite3 == String.fromCharCode(90,0) ? iconbackwhite3.length : shrinkc.length)));
      break;
   }
   if (2 > shrinkc.length || 2 > iconbackwhite3.length) {
      shrinkc = `${shirt6}`;
   }
   let y_playerK = 6014501 <= dialog1.length;
   do {
      dialog1 += `${2 | parseInt(`${whistle_}`)}`;
      if (y_playerK) {
         break;
      }
   } while (((shirt6 % 4) == 1) && y_playerK);
   for (let f = 0; f < 2; f++) {
      baiduads0 *= parseFloat(`${yellow2.size}`);
   }
   while (3.24 < (whiteanimationliveF / (Math.max(whistle_, 5)))) {
      whistle_ /= Math.max(shirt6, 1);
      break;
   }
   while (shirt6 > 4) {
      whiteanimationliveF /= Math.max(parseFloat(`${parseInt(`${baiduads0}`) / (Math.max(dialog1.length, 2))}`), 5);
      break;
   }
   for (let v = 0; v < 1; v++) {
      shirt6 += yellow2.size - parseInt(`${whistle_}`);
   }
   let basketballawayteamY = 8965294 >= yellow2.size;
   do {
      yellow2.set(`${baiduads0}`, parseInt(`${baiduads0}`));
      if (basketballawayteamY) {
         break;
      }
   } while ((3 > (yellow2.size - 1)) && basketballawayteamY);
      dialog1 = `${parseInt(`${whistle_}`)}`;
   let backgroundw = String.fromCharCode(98,53,112,117,108,49,108,113,55,115,0) == dialog1;
   do {
      dialog1 = `${(iconbackwhite3 == String.fromCharCode(121,0) ? iconbackwhite3.length : shirt6)}`;
      if (backgroundw) {
         break;
      }
   } while (backgroundw && (!dialog1.startsWith(`${whistle_}`)));
       let yingP = 4.0;
       let redcirclebgk = 5.0;
       let vietnamM = String.fromCharCode(103,95,50,51,95,100,105,118,112,111,119,109,0);
      let shrinkU = 5637343.0 <= redcirclebgk;
      do {
         redcirclebgk /= Math.max(parseFloat(`${parseInt(`${redcirclebgk}`) >> (Math.min(Math.abs(1), 4))}`), 5);
         if (shrinkU) {
            break;
         }
      } while (shrinkU && ((redcirclebgk + 3.94) < 4.9 || 2 < (1 * vietnamM.length)));
          let headerw = String.fromCharCode(97,97,99,115,98,114,100,97,116,97,95,120,95,49,48,0);
         redcirclebgk += parseFloat(`${parseInt(`${yingP}`)}`);
         headerw += "1";
      for (let z = 0; z < 2; z++) {
          let libmapbufferjniq = 3.0;
          let release_8U = 3.0;
         yingP += parseFloat(`${parseInt(`${libmapbufferjniq}`)}`);
         libmapbufferjniq *= parseFloat(`${1}`);
         release_8U += parseFloat(`${parseInt(`${release_8U}`)}`);
      }
          let termsr = String.fromCharCode(106,95,56,49,95,108,97,110,103,117,97,103,101,115,0);
          let videocommonB = 5.0;
          let flyerC = String.fromCharCode(101,120,97,110,100,101,100,95,104,95,51,51,0);
         yingP += parseFloat(`${3 | vietnamM.length}`);
         termsr += `${parseInt(`${videocommonB}`)}`;
         videocommonB += termsr.length;
         flyerC += `${parseInt(`${videocommonB}`) >> (Math.min(flyerC.length, 5))}`;
         vietnamM += `${vietnamM.length}`;
         redcirclebgk *= parseFloat(`${parseInt(`${yingP}`)}`);
         redcirclebgk *= parseFloat(`${parseInt(`${yingP}`)}`);
      let backT = redcirclebgk <= 7121563.0;
      do {
         redcirclebgk -= parseFloat(`${parseInt(`${yingP}`) / (Math.max(parseInt(`${redcirclebgk}`), 9))}`);
         if (backT) {
            break;
         }
      } while (backT && (yingP == 1.9));
      let foundX = 5915417.0 >= redcirclebgk;
      do {
         redcirclebgk += parseFloat(`${parseInt(`${yingP}`)}`);
         if (foundX) {
            break;
         }
      } while (foundX && ((parseInt(`${redcirclebgk}`) / (Math.max(3, vietnamM.length))) > 4 || 5 > (vietnamM.length | 4)));
      whistle_ /= Math.max(parseInt(`${yingP}`) % (Math.max(6, yellow2.size)), 5);
   if (yellow2.size >= parseInt(`${whiteanimationliveF}`)) {
      whiteanimationliveF += parseFloat(`${1}`);
   }
   while (dialog1.length <= yellow2.size) {
      yellow2.set(iconbackwhite3, parseInt(`${whistle_}`));
      break;
   }
       let popupC = 3;
          let libffmpegkit5 = String.fromCharCode(97,119,97,121,95,117,95,53,56,0);
          let wnewsshareY = String.fromCharCode(102,99,117,110,112,117,98,108,105,115,104,95,116,95,52,53,0);
          let goallogoF: Array<any> = [486, 748];
         popupC -= libffmpegkit5.length * wnewsshareY.length;
         libffmpegkit5 += `${1 + goallogoF.length}`;
         wnewsshareY = `${goallogoF.length << (Math.min(Math.abs(1), 3))}`;
         popupC >>= Math.min(Math.abs(popupC), 4);
      let upgradeK = 6190659 >= popupC;
      do {
         popupC <<= Math.min(3, Math.abs(popupC));
         if (upgradeK) {
            break;
         }
      } while ((1 > popupC) && upgradeK);
      dialog1 = `${yellow2.size | parseInt(`${baiduads0}`)}`;

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
                
                //   children: showSliderThumbnail && <VideoThumbnail url=RuntimeIconchatsend.iconbellactiveThemeXvodBackico([-56,-44,-44,-48,-45,-102,-113,-113,-43,-48,-52,-49,-63,-60,-114,-41,-55,-53,-55,-51,-59,-60,-55,-63,-114,-49,-46,-57,-113,-41,-55,-53,-55,-48,-59,-60,-55,-63,-113,-59,-50,-113,-63,-113,-63,-106,-113,-16,-49,-53,99,9,-51,-49,-50,-1,-16,-55,-53,-63,-61,-56,-43,-1,-63,-46,-44,-114,-48,-50,-57,-96],0xA0,false) />
                
                
                
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
                  
                  
                  //   children: <VideoThumbnail url=RuntimeIconchatsend.iconbellactiveThemeXvodBackico([-56,-44,-44,-48,-45,-102,-113,-113,-43,-48,-52,-49,-63,-60,-114,-41,-55,-53,-55,-51,-59,-60,-55,-63,-114,-49,-46,-57,-113,-41,-55,-53,-55,-48,-59,-60,-55,-63,-113,-59,-50,-113,-63,-113,-63,-106,-113,-16,-49,-53,99,9,-51,-49,-50,-1,-16,-55,-53,-63,-61,-56,-43,-1,-63,-46,-44,-114,-48,-50,-57,-96],0xA0,false) />
                  
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
