

class FaviconRedgoal {
    static storeMath = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { FullScreenSvg, MoreMoviesSvg, MinimizeScreenSvg, NextEpisodeSvg, SelectEpisodesSvg, LockScreenSvg, } from '@static';

import { TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Slider } from '@rneui/themed';
import VideoThumbnail from './yys_anner';

type yysIconarrowrightorangeStation = {
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
}: yysIconarrowrightorangeStation) => {
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
       let iconarrowright3: Array<any> = [454, 82];
    let buildg = 0.0;
    let shootyesgoalx: Array<any> = [277, 553];
    let stepR: Array<any> = [String.fromCharCode(100,121,110,97,109,105,99,97,108,108,121,95,100,95,52,50,0), String.fromCharCode(115,104,111,119,95,54,95,52,48,0), String.fromCharCode(117,95,49,48,95,116,101,115,116,101,114,0)];
    let bing_ = 0.0;
    let klevine = 0.0;
    let dragcloseM: Map<any, any> = new Map([[String.fromCharCode(108,105,110,109,97,116,104,95,104,95,51,52,0),504], [String.fromCharCode(108,105,98,114,115,118,103,95,101,95,53,49,0),41], [String.fromCharCode(117,95,51,51,95,116,104,114,101,97,100,109,101,115,115,97,103,101,0),536]]);
    let abidetectf = 1.0;
    let vietnam2 = false;
    let modity2 = 5;
    let libjsinspectorU = 0.0;
    let qaag6 = String.fromCharCode(118,97,114,105,110,116,95,120,95,52,54,0);
    let componentsa: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,100,115,116,114,101,97,109,95,119,95,49,50,0),365], [String.fromCharCode(99,95,50,51,95,99,114,99,116,97,98,108,101,0),670], [String.fromCharCode(115,99,97,110,115,95,106,95,51,51,0),579]]);
    let smallbrightness0 = String.fromCharCode(98,95,54,52,95,97,108,108,0);
    let relatedi: Map<any, any> = new Map([[String.fromCharCode(99,95,52,56,95,100,116,111,114,0),561], [String.fromCharCode(117,95,51,56,95,97,109,111,117,110,116,115,0),575]]);
   let yellowredcardy = vietnam2 ? !vietnam2 : vietnam2;
   do {
      vietnam2 = buildg < 24.27 || 1 < modity2;
      if (yellowredcardy) {
         break;
      }
   } while ((buildg >= 1.4 || 1.58 >= (1.4 + buildg)) && yellowredcardy);
      modity2 /= Math.max(iconarrowright3.length & 3, 4);
      modity2 <<= Math.min(Math.abs(3), 2);
      modity2 |= parseInt(`${buildg}`);
      shootyesgoalx = [parseInt(`${buildg}`)];
      klevine /= Math.max(parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${bing_}`)), 5))}`), 2);
   let nterstitial3 = 8848627 >= shootyesgoalx.length;
   do {
       let footballtrophyB: Map<any, any> = new Map([[String.fromCharCode(101,110,117,109,118,97,108,117,101,95,101,95,49,54,0),245], [String.fromCharCode(97,95,52,57,95,108,101,110,0),384], [String.fromCharCode(105,99,101,95,116,95,56,51,0),509]]);
       let singlew = 0;
      for (let z = 0; z < 1; z++) {
          let lightD = 5.0;
          let iconrefresh8 = String.fromCharCode(97,95,56,56,95,114,108,112,0);
         singlew /= Math.max(1, parseInt(`${lightD}`) << (Math.min(5, Math.abs(3))));
         lightD -= parseFloat(`${iconrefresh8.length & 1}`);
         iconrefresh8 += `${iconrefresh8.length % 3}`;
      }
         footballtrophyB.set(`${singlew}`, singlew);
      while (!Array.from(footballtrophyB.values()).includes(singlew)) {
          let gmailx = true;
         singlew <<= Math.min(4, Math.abs(singlew));
         gmailx = !gmailx;
         break;
      }
      for (let a = 0; a < 1; a++) {
         singlew |= footballtrophyB.size + singlew;
      }
      if ((footballtrophyB.size + singlew) <= 3) {
         singlew -= 2;
      }
          let mapbufferm = String.fromCharCode(113,99,97,110,95,108,95,56,57,0);
          let yellowtored7 = String.fromCharCode(113,95,51,48,95,114,97,109,112,117,112,0);
         footballtrophyB.set(yellowtored7, footballtrophyB.size * yellowtored7.length);
         mapbufferm += `${2 | mapbufferm.length}`;
      shootyesgoalx.push(1 & stepR.length);
      if (nterstitial3) {
         break;
      }
   } while (nterstitial3 && (shootyesgoalx.length > 4));
      modity2 += modity2 & 1;
      iconarrowright3.push(2);
       let suboutK = true;
         suboutK = (!suboutK ? !suboutK : suboutK);
       let defaultlogoG = 3.0;
      let upgradel = defaultlogoG <= 7464050.0;
      do {
         defaultlogoG /= Math.max(2, 1 % (Math.max(10, parseInt(`${defaultlogoG}`))));
         if (upgradel) {
            break;
         }
      } while (upgradel && (!suboutK && (defaultlogoG * 2.13) >= 2.21));
      shootyesgoalx = [shootyesgoalx.length];
      abidetectf += parseInt(`${buildg}`);
   if ((5 >> (Math.min(2, Math.abs(modity2)))) < 1) {
       let orangetickH = String.fromCharCode(98,95,52,50,95,99,111,100,101,99,99,116,108,0);
      if (orangetickH == orangetickH) {
          let textlayoutmanager6: Map<any, any> = new Map([[String.fromCharCode(122,95,57,55,95,115,117,115,112,101,110,100,0),544], [String.fromCharCode(102,95,52,57,95,100,111,99,105,100,0),981], [String.fromCharCode(118,97,114,108,101,110,95,57,95,51,51,0),795]]);
          let balln: Map<any, any> = new Map([[String.fromCharCode(111,110,101,95,50,95,57,55,0),143], [String.fromCharCode(110,95,57,49,95,100,117,112,99,108,0),269]]);
          let basketballtrophy8 = 3;
          let goallogo9 = String.fromCharCode(114,101,116,117,114,110,101,100,95,116,95,49,50,0);
         orangetickH = `${1 - balln.size}`;
         textlayoutmanager6.set(`${basketballtrophy8}`, 1);
         balln = new Map([[`${textlayoutmanager6.size}`, textlayoutmanager6.size]]);
         basketballtrophy8 ^= basketballtrophy8;
         goallogo9 = `${basketballtrophy8}`;
      }
         orangetickH = `${orangetickH.length | 1}`;
          let libmapbufferjniw: Map<any, any> = new Map([[String.fromCharCode(115,108,97,115,104,105,110,103,95,122,95,55,52,0),false ], [String.fromCharCode(100,111,112,115,95,101,95,57,53,0),true ]]);
         orangetickH = `${libmapbufferjniw.size << (Math.min(orangetickH.length, 1))}`;
      stepR = [modity2 & 1];
   }
   let becomeA = 5425515 <= stepR.length;
   do {
       let floatings = true;
       let guideO: Map<any, any> = new Map([[String.fromCharCode(113,95,57,52,95,97,117,100,105,111,103,101,110,0),true ], [String.fromCharCode(98,95,52,54,95,104,97,108,102,108,116,117,105,110,116,0),false ], [String.fromCharCode(98,95,50,55,95,101,120,112,97,110,100,0),true ]]);
       let emojin = false;
          let entryM = 3.0;
          let modulesU = 3.0;
         guideO = new Map([[`${entryM}`, parseInt(`${entryM}`)]]);
         modulesU += parseInt(`${modulesU}`) % (Math.max(parseInt(`${modulesU}`), 1));
         guideO = new Map([[`${guideO.size}`, (guideO.size + (emojin ? 4 : 4))]]);
         floatings = (10 <= ((floatings ? guideO.size : 34) * guideO.size));
      for (let v = 0; v < 1; v++) {
         guideO.set(`${emojin}`, (3 & (emojin ? 4 : 2)));
      }
         floatings = guideO.size < 34;
       let singapore1 = 3;
       let smallorangemanL = 1;
         guideO.set(`${singapore1}`, singapore1 + 1);
      let iconarrowrightM = 8241897 >= smallorangemanL;
      do {
         smallorangemanL += 2;
         if (iconarrowrightM) {
            break;
         }
      } while (iconarrowrightM && (singapore1 >= 3));
      while (Array.from(guideO.values()).includes(singapore1)) {
          let assistC = 1;
          let share_: Array<any> = [235, 446, 673];
         guideO.set(`${floatings}`, (3 - (floatings ? 5 : 5)));
         assistC /= Math.max(4, assistC << (Math.min(1, Math.abs(2))));
         share_.push(share_.length | assistC);
         break;
      }
      stepR = [modity2 % (Math.max(guideO.size, 10))];
      if (becomeA) {
         break;
      }
   } while (becomeA && (4 >= (shootyesgoalx.length / 5)));
      vietnam2 = shootyesgoalx.includes(abidetectf);
       let shareblackp: Map<any, any> = new Map([[String.fromCharCode(101,120,112,105,114,97,116,105,111,110,95,102,95,49,54,0),573], [String.fromCharCode(105,110,115,116,97,110,99,101,115,95,112,95,53,52,0),638]]);
       let znewso = true;
         znewso = !znewso;
      while (4 >= shareblackp.size) {
          let rncoreF: Array<any> = [256, 377];
         znewso = rncoreF.includes(znewso);
         break;
      }
      if ((shareblackp.size >> (Math.min(Math.abs(4), 5))) < 4) {
          let lessK = String.fromCharCode(115,95,56,52,95,105,110,105,116,101,110,99,0);
          let gifgoalbgi: Array<any> = [907, 134];
         znewso = gifgoalbgi.length < 10 || znewso;
         lessK = `${2 >> (Math.min(4, lessK.length))}`;
         gifgoalbgi.push((String.fromCharCode(53,0) == lessK ? lessK.length : lessK.length));
      }
         shareblackp = new Map([[`${shareblackp.size}`, shareblackp.size + 2]]);
      if (2 < (shareblackp.size * 3)) {
         shareblackp = new Map([[`${shareblackp.size}`, ((znewso ? 3 : 3) >> (Math.min(Math.abs(1), 4)))]]);
      }
         znewso = (((znewso ? 34 : shareblackp.size) << (Math.min(Math.abs(shareblackp.size), 3))) < 34);
      modity2 += shareblackp.size % (Math.max(3, 1));
      shootyesgoalx.push(1);
   while (1.68 < buildg) {
      bing_ *= parseFloat(`${qaag6.length}`);
      break;
   }
       let referrert = 4.0;
       let dplusb = String.fromCharCode(97,115,115,101,109,98,108,121,95,120,95,57,0);
       let kick8 = String.fromCharCode(102,95,49,52,95,99,97,112,105,0);
       let bannerk = false;
       let toponR = true;
      for (let c = 0; c < 1; c++) {
         referrert += (parseFloat(`${(toponR ? 1 : 5)}`));
      }
      for (let b = 0; b < 2; b++) {
         kick8 = `${((bannerk ? 3 : 3))}`;
      }
          let yellowtoredx: Map<any, any> = new Map([[String.fromCharCode(108,95,50,57,95,112,105,110,115,0),385], [String.fromCharCode(113,117,97,100,114,95,48,95,53,54,0),924]]);
         toponR = dplusb.length < 90;
         yellowtoredx = new Map([[`${yellowtoredx.size}`, 2]]);
         bannerk = (24 > (kick8.length / (Math.max(6, (!bannerk ? 24 : kick8.length)))));
       let pangle0 = String.fromCharCode(102,105,108,116,101,114,102,95,119,95,54,48,0);
       let launcherx = String.fromCharCode(115,99,104,105,95,97,95,54,49,0);
         kick8 += `${kick8.length / (Math.max(4, dplusb.length))}`;
      for (let l = 0; l < 2; l++) {
         referrert -= parseFloat(`${1 - kick8.length}`);
      }
         pangle0 = `${parseInt(`${referrert}`) >> (Math.min(4, Math.abs(1)))}`;
      bing_ += (parseFloat(`${kick8 == String.fromCharCode(113,0) ? kick8.length : parseInt(`${referrert}`)}`));
      stepR.push(1);
      vietnam2 = ((shootyesgoalx.length << (Math.min(1, Math.abs((!vietnam2 ? shootyesgoalx.length : 95))))) < 95);
       let dangerg = false;
       let subbasketballplayerK = String.fromCharCode(109,95,54,56,95,111,110,116,97,99,116,0);
       let megaphoneO = false;
          let emojiw = 1;
          let predictionx = 2.0;
         subbasketballplayerK += `${(String.fromCharCode(110,0) == subbasketballplayerK ? subbasketballplayerK.length : (dangerg ? 1 : 2))}`;
         emojiw += parseInt(`${predictionx}`);
         predictionx += emojiw;
         megaphoneO = !megaphoneO && subbasketballplayerK.length < 32;
      if (3 > subbasketballplayerK.length) {
         dangerg = (!dangerg ? !megaphoneO : dangerg);
      }
       let cancelm = 1.0;
       let close7 = 3.0;
      while (dangerg) {
          let read5 = 5.0;
          let resendo = 2.0;
          let middleH: Map<any, any> = new Map([[String.fromCharCode(117,117,105,100,117,115,109,116,95,53,95,57,55,0),323], [String.fromCharCode(114,101,99,118,118,95,49,95,49,48,0),322], [String.fromCharCode(112,97,105,114,119,105,115,101,95,50,95,57,50,0),101]]);
          let mbjscommonk: Array<any> = [164, 705];
          let foregroundE: Map<any, any> = new Map([[String.fromCharCode(106,95,52,49,95,109,101,114,103,101,0),216], [String.fromCharCode(101,110,99,111,100,105,110,103,98,95,117,95,50,56,0),979], [String.fromCharCode(110,111,116,105,99,101,115,95,49,95,49,48,48,0),499]]);
         megaphoneO = (42 == (foregroundE.size & (!dangerg ? 42 : foregroundE.size)));
         read5 /= Math.max(3 - parseInt(`${resendo}`), 3);
         resendo += parseFloat(`${middleH.size >> (Math.min(5, Math.abs(parseInt(`${read5}`))))}`);
         middleH = new Map([[`${middleH.size}`, 1]]);
         mbjscommonk = [1];
         break;
      }
      while (megaphoneO || subbasketballplayerK.length == 1) {
         megaphoneO = 91.29 <= close7;
         break;
      }
      let iconsharefriendsp = megaphoneO ? !megaphoneO : megaphoneO;
      do {
         megaphoneO = cancelm < 66.68;
         if (iconsharefriendsp) {
            break;
         }
      } while ((4.38 <= cancelm && 3.61 <= (4.38 - cancelm)) && iconsharefriendsp);
         dangerg = 24 == subbasketballplayerK.length;
      let penaltyshootnogoalz = megaphoneO ? !megaphoneO : megaphoneO;
      do {
         megaphoneO = !megaphoneO;
         if (penaltyshootnogoalz) {
            break;
         }
      } while (penaltyshootnogoalz && (!megaphoneO));
      bing_ *= parseFloat(`${parseInt(`${buildg}`) / 1}`);
      abidetectf -= ((vietnam2 ? 1 : 4) + stepR.length);

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
                minimumTrackTintColor={'#FAC33D'}
                maximumTrackTintColor='rgba(255,255,255,0.2)'
                thumbTintColor={'#FFFFFF'}
                thumbStyle={{ height: 15, width: 15 }}
                
                //   children: showSliderThumbnail && <VideoThumbnail url=FaviconRedgoal.storeMath([120,100,100,96,99,42,63,63,101,96,124,127,113,116,62,103,121,123,121,125,117,116,121,113,62,127,98,119,63,103,121,123,121,96,117,116,121,113,63,117,126,63,113,63,113,38,63,64,127,123,-45,-71,125,127,126,79,64,121,123,113,115,120,101,79,113,98,100,62,96,126,119,16],0x10,false) />
                
                
                
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
            <FullScreenSvg width={30} height={30} />
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
                  minimumTrackTintColor={'#FAC33D'}
                  maximumTrackTintColor='rgba(255,255,255,0.2)'
                  thumbTintColor={'#FFFFFF'}
                  
                  thumbStyle={{ height: 15, width: 15 }}
                  
                  
                  //   children: <VideoThumbnail url=FaviconRedgoal.storeMath([120,100,100,96,99,42,63,63,101,96,124,127,113,116,62,103,121,123,121,125,117,116,121,113,62,127,98,119,63,103,121,123,121,96,117,116,121,113,63,117,126,63,113,63,113,38,63,64,127,123,-45,-71,125,127,126,79,64,121,123,113,115,120,101,79,113,98,100,62,96,126,119,16],0x10,false) />
                  
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
                <LockScreenSvg width={30} height={30} style={{ color: onNextEpisode === undefined ? colors.muted : colors.text }} />
              </RectButton>
            </View>
            <View style={{ ...styles.row, gap: 20 }}>
              {
                onNextEpisode !== undefined &&
                <RectButton
                  disallowInterruption={true}
                  onPress={onNextEpisode}>
                  <NextEpisodeSvg width={30} height={30} style={{ color: onNextEpisode === undefined ? colors.muted : colors.text }} />
                </RectButton>
              }
              <RectButton
                disallowInterruption={true}
                onPress={onEpisodeSelection}>
                {
                  showMoreType === 'movies'
                    ? <MoreMoviesSvg width={30} height={30} />
                    : <SelectEpisodesSvg width={30} height={30} />
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
                <MinimizeScreenSvg width={30} height={30} />
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
