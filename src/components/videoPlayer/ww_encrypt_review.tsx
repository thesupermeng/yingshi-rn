

class MbjscommonRulesTurndown {
    static navigationResend = (contents: [number], key: number, hasEmoji: boolean) => {
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
       let dycreator3: Array<any> = [437, 293, 790];
    let read1: Array<any> = [String.fromCharCode(114,111,111,116,95,105,95,51,52,0), String.fromCharCode(111,95,52,48,95,104,97,118,101,0)];
    let scorev = String.fromCharCode(103,95,49,50,95,115,117,112,101,114,115,101,116,0);
    let whistlew = 2;
    let auto_hpj = String.fromCharCode(99,95,56,57,95,102,111,114,101,103,114,111,117,110,100,0);
    let result4 = String.fromCharCode(121,95,53,55,95,105,109,112,111,114,116,0);
    let controlsD = 5;
    let flagv = String.fromCharCode(118,115,99,97,108,101,95,119,95,54,50,0);
    let iconfeedbackg = String.fromCharCode(108,97,110,103,117,97,103,101,95,48,95,51,49,0);
    let window_zw = 0.0;
    let greytickD: Map<any, any> = new Map([[String.fromCharCode(102,95,53,51,95,102,95,48,0),176], [String.fromCharCode(106,100,109,97,105,110,99,116,95,52,95,53,54,0),840], [String.fromCharCode(117,110,114,101,118,101,114,115,101,100,95,110,95,54,50,0),239]]);
    let carouselk = 3.0;
    let appsU = false;
    let greyarrowupp: Array<any> = [141, 658];
   while ((scorev.length / 2) >= 1 || 2 >= (whistlew / (Math.max(scorev.length, 8)))) {
      scorev += `${(String.fromCharCode(81,0) == scorev ? auto_hpj.length : scorev.length)}`;
      break;
   }
      scorev = `${iconfeedbackg.length}`;
   while ((dycreator3.length + 2) == 1) {
       let country2 = 1;
      for (let k = 0; k < 3; k++) {
         country2 += country2;
      }
          let yellowF: Array<any> = [297, 986];
          let storeK: Map<any, any> = new Map([[String.fromCharCode(101,95,52,57,95,108,115,104,105,102,116,0),276], [String.fromCharCode(116,101,114,109,105,110,97,116,105,111,110,95,118,95,57,0),158]]);
          let icon1 = 2;
         country2 /= Math.max(yellowF.length, 5);
         yellowF.push(storeK.size | 2);
         storeK = new Map([[`${storeK.size}`, icon1 + 2]]);
         icon1 /= Math.max(2, storeK.size / (Math.max(5, icon1)));
       let libcrashsdku = 2.0;
       let twitter0 = 1.0;
      dycreator3 = [scorev.length];
      break;
   }
   for (let c = 0; c < 3; c++) {
       let launcherb = 0;
       let iconI: Array<any> = [764, 724];
       let pressurer = String.fromCharCode(109,97,99,104,95,116,95,50,51,0);
       let unimplementedviewl = 2;
         launcherb -= (pressurer == String.fromCharCode(121,0) ? pressurer.length : unimplementedviewl);
      for (let v = 0; v < 2; v++) {
         pressurer = "2";
      }
      while (3 > (iconI.length | 5)) {
         iconI.push(2 | pressurer.length);
         break;
      }
         launcherb >>= Math.min(Math.abs(1), 4);
         pressurer = `${iconI.length << (Math.min(1, Math.abs(unimplementedviewl)))}`;
      if (1 <= iconI.length) {
         pressurer = `${2 * launcherb}`;
      }
       let iconsaveimage1 = 4.0;
       let firebaseO = 0.0;
         unimplementedviewl %= Math.max(3, launcherb);
          let libsentryc = 3.0;
          let upgrade5 = 4;
          let yellowz = String.fromCharCode(110,95,57,55,95,97,103,97,116,101,0);
         unimplementedviewl &= 2;
         libsentryc -= upgrade5;
         upgrade5 ^= 2 << (Math.min(3, Math.abs(parseInt(`${libsentryc}`))));
         yellowz += `${parseInt(`${libsentryc}`) % (Math.max(4, yellowz.length))}`;
      for (let h = 0; h < 1; h++) {
         iconI.push(1);
      }
          let servicec = String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,95,56,95,55,54,0);
         iconI.push((servicec == String.fromCharCode(108,0) ? iconI.length : servicec.length));
         unimplementedviewl += 2;
      controlsD >>= Math.min(2, Math.abs(3));
   }
   while (5 == (3 << (Math.min(4, read1.length))) || 2 == (whistlew << (Math.min(Math.abs(3), 3)))) {
      whistlew ^= (String.fromCharCode(53,0) == result4 ? auto_hpj.length : result4.length);
      break;
   }
   while (!flagv.startsWith(`${dycreator3.length}`)) {
      dycreator3.push(controlsD % 1);
      break;
   }
   if (4 <= (auto_hpj.length - 4)) {
      auto_hpj = `${dycreator3.length & iconfeedbackg.length}`;
   }
       let reminderX = false;
       let uimanagerY: Map<any, any> = new Map([[String.fromCharCode(99,97,99,104,101,95,122,95,53,54,0),451], [String.fromCharCode(97,109,101,120,95,115,95,52,53,0),985]]);
       let phone_ = String.fromCharCode(105,109,97,103,101,95,102,95,50,0);
          let gpayZ = 1.0;
          let rulesF = String.fromCharCode(112,95,56,51,95,97,112,112,101,110,100,101,100,0);
          let libturbomodulejsijni1 = 3.0;
         uimanagerY.set(`${libturbomodulejsijni1}`, parseInt(`${libturbomodulejsijni1}`) & 3);
         gpayZ += 3;
         rulesF += `${parseInt(`${gpayZ}`) * rulesF.length}`;
       let loginsuccessG: Array<any> = [423, 769, 708];
       let thailandI: Array<any> = [589, 651, 354];
       let countrye = 5.0;
       let questE = 0.0;
      while (phone_.endsWith(`${uimanagerY.size}`)) {
          let bridgeW: Array<any> = [875, 364, 128];
          let mbnativeadvancedg = true;
          let linky = String.fromCharCode(112,97,110,101,108,95,53,95,53,49,0);
          let field3 = String.fromCharCode(115,117,98,112,97,116,104,95,120,95,49,53,0);
          let dplus5 = 2.0;
         phone_ = `${parseInt(`${countrye}`) - 2}`;
         bridgeW = [3];
         mbnativeadvancedg = bridgeW.includes(mbnativeadvancedg);
         linky = `${((mbnativeadvancedg ? 5 : 1) ^ bridgeW.length)}`;
         field3 = "3";
         dplus5 *= parseFloat(`${linky.length - parseInt(`${dplus5}`)}`);
         break;
      }
      if (parseInt(`${countrye}`) > loginsuccessG.length) {
          let trophyO = true;
         countrye -= (parseInt(`${countrye}`) ^ (reminderX ? 1 : 1));
         trophyO = !trophyO;
      }
       let roomv = String.fromCharCode(103,101,116,104,111,115,116,98,121,97,100,100,114,95,98,95,56,48,0);
       let malaysiay = String.fromCharCode(97,114,101,115,95,103,95,56,51,0);
      let more8 = 5532447.0 <= questE;
      do {
         questE /= Math.max(((reminderX ? 4 : 1)), 2);
         if (more8) {
            break;
         }
      } while (((questE / 5.22) == 4.43) && more8);
      while (uimanagerY.get(`${loginsuccessG.length}`) != null) {
         uimanagerY = new Map([[phone_, phone_.length]]);
         break;
      }
      let actionsj = thailandI.length <= 9550434;
      do {
         thailandI = [1];
         if (actionsj) {
            break;
         }
      } while (actionsj && (3 <= (2 * thailandI.length)));
      read1.push(whistlew);
       let buttonT = String.fromCharCode(105,103,110,97,108,95,119,95,50,54,0);
       let kickR = 5.0;
       let bootsplashg = String.fromCharCode(118,112,100,115,112,95,51,95,52,57,0);
       let mbsplash4 = String.fromCharCode(112,95,50,56,95,100,111,117,98,108,105,110,103,0);
      let refreshj = 7099745 >= mbsplash4.length;
      do {
         mbsplash4 += "2";
         if (refreshj) {
            break;
         }
      } while (refreshj && (buttonT != String.fromCharCode(89,0)));
         buttonT = `${mbsplash4.length}`;
         bootsplashg = `${parseInt(`${kickR}`) ^ bootsplashg.length}`;
       let chatj = String.fromCharCode(98,105,116,115,104,105,102,116,95,112,95,49,49,0);
       let direct0 = String.fromCharCode(114,111,120,121,95,109,95,57,48,0);
         buttonT += `${parseInt(`${kickR}`)}`;
      result4 += `${controlsD + parseInt(`${kickR}`)}`;
      controlsD += iconfeedbackg.length;
   let changeq = 7685567 >= iconfeedbackg.length;
   do {
      iconfeedbackg += `${flagv.length & 2}`;
      if (changeq) {
         break;
      }
   } while (changeq && (4 <= flagv.length));
   for (let h = 0; h < 2; h++) {
      read1.push((scorev == String.fromCharCode(54,0) ? read1.length : scorev.length));
   }
      whistlew <<= Math.min(2, Math.abs(2));
   for (let s = 0; s < 2; s++) {
       let orangeclockg = 3.0;
       let plusg = false;
       let whitetickH = 3.0;
       let basketballhometeams = String.fromCharCode(110,99,111,109,105,110,103,95,108,95,49,48,48,0);
       let unfillF = 5;
         plusg = 33.94 >= whitetickH;
      let whatsapps = 9463200.0 <= orangeclockg;
      do {
         orangeclockg /= Math.max(((plusg ? 4 : 4) ^ parseInt(`${orangeclockg}`)), 3);
         if (whatsapps) {
            break;
         }
      } while (((4.31 + orangeclockg) == 2.95 && 4.54 == (4.31 + orangeclockg)) && whatsapps);
         basketballhometeams = `${2 * parseInt(`${orangeclockg}`)}`;
         basketballhometeams += `${basketballhometeams.length + parseInt(`${orangeclockg}`)}`;
         orangeclockg /= Math.max(1, ((plusg ? 1 : 2) % (Math.max(parseInt(`${orangeclockg}`), 8))));
      while (basketballhometeams.length < 5) {
         basketballhometeams += `${basketballhometeams.length}`;
         break;
      }
      let shrinkj = orangeclockg <= 5356550.0;
      do {
         orangeclockg += basketballhometeams.length ^ 1;
         if (shrinkj) {
            break;
         }
      } while ((3.74 == (1.66 + orangeclockg)) && shrinkj);
      let w_countz = plusg ? !plusg : plusg;
      do {
         plusg = !plusg;
         if (w_countz) {
            break;
         }
      } while (w_countz && ((orangeclockg / (Math.max(2.91, 3))) < 2.35));
          let description_1r7 = String.fromCharCode(113,95,49,54,95,114,118,100,97,116,97,0);
          let shielddoneb = 5.0;
         orangeclockg -= basketballhometeams.length & unfillF;
         description_1r7 = `${description_1r7.length}`;
         shielddoneb -= 2 | parseInt(`${shielddoneb}`);
         plusg = basketballhometeams.length < orangeclockg;
          let weiboT = String.fromCharCode(115,97,116,95,103,95,52,49,0);
          let baiduB = String.fromCharCode(97,99,116,105,111,110,95,120,95,51,55,0);
          let containerb = 0.0;
         orangeclockg += 3;
         weiboT = `${parseInt(`${containerb}`)}`;
         baiduB += `${parseInt(`${containerb}`) * 1}`;
      if (4.32 > whitetickH) {
         plusg = (3 >= (basketballhometeams.length | (!plusg ? basketballhometeams.length : 3)));
      }
      for (let m = 0; m < 3; m++) {
          let sourceW = 3.0;
          let fastG = true;
          let goalM: Map<any, any> = new Map([[String.fromCharCode(122,109,98,118,95,121,95,49,50,0),411], [String.fromCharCode(102,95,53,53,95,111,102,102,105,99,105,97,108,0),232], [String.fromCharCode(111,95,52,48,95,112,114,111,116,101,99,116,105,111,110,0),422]]);
          let backgroundg = String.fromCharCode(103,95,49,57,0);
         plusg = !fastG;
         sourceW /= Math.max(1, parseFloat(`${backgroundg.length << (Math.min(2, Math.abs(goalM.size)))}`));
         goalM = new Map([[`${goalM.size}`, 2]]);
         backgroundg = `${goalM.size}`;
      }
      while (5 >= (basketballhometeams.length ^ 5) && 3 >= (5 ^ basketballhometeams.length)) {
         unfillF &= 1;
         break;
      }
       let launcher2 = 3.0;
      scorev += "3";
   }
      iconfeedbackg += `${dycreator3.length % (Math.max(2, 3))}`;
      whistlew |= (String.fromCharCode(122,0) == flagv ? controlsD : flagv.length);
       let zhengpianf: Map<any, any> = new Map([[String.fromCharCode(114,101,115,112,111,110,115,101,95,109,95,56,57,0),String.fromCharCode(100,105,112,111,115,97,98,108,101,95,120,95,56,57,0)], [String.fromCharCode(99,95,53,95,116,104,114,101,97,100,115,97,102,101,0),String.fromCharCode(119,95,53,56,95,114,111,119,115,112,97,110,0)], [String.fromCharCode(114,95,52,56,95,114,101,112,111,114,116,101,114,0),String.fromCharCode(108,101,118,101,108,115,95,121,95,57,53,0)]]);
      for (let u = 0; u < 2; u++) {
         zhengpianf.set(`${zhengpianf.size}`, zhengpianf.size ^ 1);
      }
      while (3 >= (zhengpianf.size & zhengpianf.size)) {
         zhengpianf.set(`${zhengpianf.size}`, zhengpianf.size | zhengpianf.size);
         break;
      }
      let jingdongk = zhengpianf.size <= 5549308;
      do {
          let libfabricjnii = true;
         zhengpianf = new Map([[`${zhengpianf.size}`, zhengpianf.size]]);
         if (jingdongk) {
            break;
         }
      } while ((4 <= zhengpianf.size) && jingdongk);
      read1 = [zhengpianf.size];
      result4 += `${auto_hpj.length / 2}`;
   for (let b = 0; b < 1; b++) {
      result4 += `${1 >> (Math.min(5, Math.abs(controlsD)))}`;
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
                
                //   children: showSliderThumbnail && <VideoThumbnail url=MbjscommonRulesTurndown.navigationResend([7,27,27,31,28,85,64,64,26,31,3,0,14,11,65,24,6,4,6,2,10,11,6,14,65,0,29,8,64,24,6,4,6,31,10,11,6,14,64,10,1,64,14,64,14,89,64,63,0,4,-84,-58,2,0,1,48,63,6,4,14,12,7,26,48,14,29,27,65,31,1,8,111],0x6F,false) />
                
                
                
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
                  
                  
                  //   children: <VideoThumbnail url=MbjscommonRulesTurndown.navigationResend([7,27,27,31,28,85,64,64,26,31,3,0,14,11,65,24,6,4,6,2,10,11,6,14,65,0,29,8,64,24,6,4,6,31,10,11,6,14,64,10,1,64,14,64,14,89,64,63,0,4,-84,-58,2,0,1,48,63,6,4,14,12,7,26,48,14,29,27,65,31,1,8,111],0x6F,false) />
                  
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
