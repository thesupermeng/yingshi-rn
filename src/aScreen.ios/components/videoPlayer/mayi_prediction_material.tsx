

class RoundRenderCountdown {
    static settingsBasketballiconShort_m = (contents: [number], key: number, hasEmoji: boolean) => {
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
import FullScreen from '@static/images/huaweiSave.svg';
import MoreMoviesIcon from '@static/images/downLibreactIconpipexpand.svg';
import MinimizeScreen from '@static/images/mbsplashCombineIcontransferclub.svg';
import { TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import NextEpisodeIcon from '@static/images/langGoogle.svg';
import SelectEpisodesIcon from '@static/images/vignetteLive.svg';
import LockScreenIcon from '@static/images/annerContext.svg';
import { Slider } from '@rneui/themed';
import VideoThumbnail from './mayi_predictionactive_internet';

type mayi_GoogleViews = {
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
}: mayi_GoogleViews) => {
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
       let renderG = 0.0;
    let leaguedetailsbgZ = String.fromCharCode(118,112,97,105,110,116,101,114,95,49,95,49,51,0);
    let dicef: Map<any, any> = new Map([[String.fromCharCode(114,95,57,57,95,114,101,101,110,97,98,108,101,0),499], [String.fromCharCode(115,101,108,101,99,116,95,107,95,56,51,0),323]]);
    let chinasameY: Map<any, any> = new Map([[String.fromCharCode(118,95,49,95,102,114,97,109,101,108,101,115,115,0),516], [String.fromCharCode(121,95,56,50,95,115,101,114,105,97,108,108,121,0),915]]);
    let injuryl = String.fromCharCode(107,95,56,54,95,107,109,101,97,110,115,0);
    let codegenv = 4;
    let dependencyG = true;
       let sharewhitey: Map<any, any> = new Map([[String.fromCharCode(120,95,49,95,115,116,114,116,111,105,110,116,0),185], [String.fromCharCode(101,95,51,54,95,109,97,110,117,97,108,108,121,0),92]]);
         sharewhitey.set(`${sharewhitey.size}`, sharewhitey.size >> (Math.min(Math.abs(1), 1)));
       let vietnamL = 3;
         vietnamL -= 1 + sharewhitey.size;
      dependencyG = (injuryl.length * dicef.size) < 56;
   while (1 <= (3 - codegenv)) {
       let pressure_ = String.fromCharCode(105,115,116,114,101,97,109,119,114,97,112,112,101,114,95,108,95,51,56,0);
       let q_centerb = String.fromCharCode(108,95,55,51,95,97,99,107,117,112,0);
       let subs1 = true;
       let homeactive3 = 4.0;
       let iconwechat2: Array<any> = [102, 646];
         homeactive3 *= 1;
      for (let f = 0; f < 1; f++) {
         pressure_ += "1";
      }
      for (let k = 0; k < 3; k++) {
         homeactive3 /= Math.max(1, iconwechat2.length);
      }
         iconwechat2.push(2 % (Math.max(3, iconwechat2.length)));
      if (subs1) {
          let detailm = true;
          let gifgoalbgC = String.fromCharCode(118,95,57,57,95,98,114,101,97,100,0);
          let libcrashsdkH = String.fromCharCode(104,97,100,97,109,97,114,100,95,105,95,54,0);
          let auto_y3 = String.fromCharCode(110,95,57,56,95,112,114,111,112,101,114,116,105,101,115,0);
          let binddatasW = 0.0;
         subs1 = libcrashsdkH.length > parseInt(`${binddatasW}`);
         detailm = detailm || gifgoalbgC.length > 55;
         gifgoalbgC += `${gifgoalbgC.length}`;
         libcrashsdkH += "3";
         auto_y3 += `${1 / (Math.max(3, gifgoalbgC.length))}`;
         binddatasW /= Math.max(parseFloat(`${gifgoalbgC.length}`), 1);
      }
         iconwechat2.push(1);
      for (let s = 0; s < 2; s++) {
          let homeicon3: Map<any, any> = new Map([[String.fromCharCode(114,112,114,111,98,101,95,100,95,51,53,0),162], [String.fromCharCode(108,105,98,114,97,114,121,95,48,95,53,51,0),830], [String.fromCharCode(97,97,110,100,99,116,116,97,98,95,101,95,51,51,0),174]]);
          let internetc: Map<any, any> = new Map([[String.fromCharCode(98,95,51,49,95,104,97,115,104,101,115,0),475], [String.fromCharCode(100,101,99,111,114,114,95,51,95,57,52,0),480], [String.fromCharCode(121,95,56,95,105,110,99,114,98,108,111,98,0),353]]);
         homeactive3 /= Math.max((parseInt(`${homeactive3}`) & (subs1 ? 1 : 5)), 5);
         homeicon3.set(`${internetc.size}`, internetc.size);
      }
       let regeng5 = true;
       let nnewarchdefaultsC = false;
         subs1 = q_centerb.length <= 91;
      for (let x = 0; x < 3; x++) {
         homeactive3 -= pressure_.length;
      }
         nnewarchdefaultsC = !subs1 && homeactive3 < 63.20;
         pressure_ += `${1 % (Math.max(parseInt(`${homeactive3}`), 3))}`;
      if (subs1 || regeng5) {
          let annerF = 1.0;
          let away9 = 5;
          let kuaishou6 = String.fromCharCode(109,112,105,98,110,95,114,95,52,50,0);
          let clearn: Map<any, any> = new Map([[String.fromCharCode(121,95,49,50,95,108,101,114,112,105,110,103,0),946], [String.fromCharCode(112,111,115,116,105,110,105,116,95,115,95,55,57,0),335]]);
          let libavcodecy = 1;
         regeng5 = q_centerb.includes(`${subs1}`);
         annerF /= Math.max(2, parseFloat(`${3}`));
         away9 |= clearn.size;
         kuaishou6 = `${libavcodecy + clearn.size}`;
         libavcodecy /= Math.max(5, away9);
      }
          let iconstaru = String.fromCharCode(106,95,56,51,95,101,120,101,99,117,116,101,0);
          let yellowB = 4.0;
         subs1 = iconstaru.length >= 99;
         iconstaru = "3";
         yellowB *= parseFloat(`${3 / (Math.max(parseInt(`${yellowB}`), 2))}`);
         homeactive3 *= 3;
      injuryl += "3";
      break;
   }
      chinasameY = new Map([[`${dependencyG}`, ((dependencyG ? 5 : 4))]]);
      renderG *= (parseFloat(`${String.fromCharCode(88,0) == leaguedetailsbgZ ? codegenv : leaguedetailsbgZ.length}`));
      injuryl = `${3 - codegenv}`;
      chinasameY = new Map([[injuryl, injuryl.length]]);
      leaguedetailsbgZ = `${1 / (Math.max(6, dicef.size))}`;
       let singleL = true;
      while (singleL) {
         singleL = (singleL ? singleL : singleL);
         break;
      }
          let mbjscommonB = 4.0;
         singleL = mbjscommonB > 67.66;
      for (let l = 0; l < 3; l++) {
          let iconnewsshare3 = 4.0;
          let owngoalV = false;
         singleL = iconnewsshare3 == 87.80;
         iconnewsshare3 += ((owngoalV ? 3 : 2));
      }
      injuryl = `${(codegenv >> (Math.min(4, Math.abs((dependencyG ? 5 : 5)))))}`;
   let valuesZ = dependencyG ? !dependencyG : dependencyG;
   do {
      dependencyG = leaguedetailsbgZ == String.fromCharCode(97,0);
      if (valuesZ) {
         break;
      }
   } while ((5 <= chinasameY.size) && valuesZ);
   if (dependencyG || injuryl.length < 4) {
      dependencyG = String.fromCharCode(52,0) == leaguedetailsbgZ;
   }
   for (let o = 0; o < 3; o++) {
      dicef.set(injuryl, parseInt(`${renderG}`) % 1);
   }
      injuryl = `${chinasameY.size}`;
       let string5: Map<any, any> = new Map([[String.fromCharCode(99,104,97,110,103,101,99,111,117,110,116,101,114,95,109,95,55,49,0),false ], [String.fromCharCode(103,95,53,56,95,111,112,115,0),true ], [String.fromCharCode(118,109,112,114,105,110,116,102,95,104,95,54,53,0),true ]]);
       let owngoalQ = String.fromCharCode(99,111,110,102,105,103,117,114,101,100,95,112,95,50,50,0);
       let iconshared = false;
       let search5 = false;
       let liblogger5: Map<any, any> = new Map([[String.fromCharCode(115,111,108,118,101,100,95,105,95,56,55,0),933], [String.fromCharCode(114,101,110,100,101,114,95,115,95,49,53,0),911], [String.fromCharCode(116,95,52,57,95,111,98,115,101,114,118,97,116,105,111,110,0),794]]);
       let minimize9: Map<any, any> = new Map([[String.fromCharCode(114,111,116,114,95,111,95,50,50,0),52], [String.fromCharCode(105,109,112,111,114,116,101,100,95,49,95,50,55,0),701], [String.fromCharCode(112,97,114,97,109,101,116,114,105,99,95,55,95,51,0),195]]);
      while ((1 & string5.size) == 1 && 1 == (string5.size & owngoalQ.length)) {
         owngoalQ += `${minimize9.size << (Math.min(Math.abs(2), 3))}`;
         break;
      }
         string5 = new Map([[`${string5.size}`, 1]]);
          let modelc = String.fromCharCode(107,95,57,54,95,116,99,102,105,108,101,0);
         owngoalQ += `${owngoalQ.length + 1}`;
         modelc += `${modelc.length << (Math.min(modelc.length, 1))}`;
          let backgroundR = String.fromCharCode(101,95,53,48,95,100,99,116,114,101,102,0);
          let detaile = 2;
         minimize9.set(`${iconshared}`, ((iconshared ? 2 : 5) / (Math.max(liblogger5.size, 9))));
         backgroundR = `${detaile}`;
         detaile >>= Math.min(Math.abs(1), 5);
      let template_e9M = iconshared ? !iconshared : iconshared;
      do {
         iconshared = (33 < (minimize9.size * (!search5 ? minimize9.size : 12)));
         if (template_e9M) {
            break;
         }
      } while ((1 >= owngoalQ.length || iconshared) && template_e9M);
         search5 = String.fromCharCode(71,0) == owngoalQ;
      while (minimize9.size == 1) {
          let arrowrightwithtaild: Map<any, any> = new Map([[String.fromCharCode(108,105,98,116,103,118,111,105,112,95,116,95,55,57,0),String.fromCharCode(109,117,116,101,100,95,98,95,53,48,0)], [String.fromCharCode(111,95,57,51,95,104,111,115,116,112,111,114,116,102,105,108,101,0),String.fromCharCode(100,105,118,105,100,101,110,100,95,108,95,55,55,0)], [String.fromCharCode(112,108,97,121,98,97,99,107,95,100,95,52,50,0),String.fromCharCode(114,101,115,101,116,115,95,98,95,50,48,0)]]);
          let targets: Array<any> = [String.fromCharCode(114,95,57,55,95,115,113,108,108,111,103,0), String.fromCharCode(103,95,53,95,109,111,100,105,116,121,0), String.fromCharCode(107,108,97,115,115,95,56,95,49,49,0)];
         iconshared = (targets.length ^ arrowrightwithtaild.size) <= 32;
         break;
      }
      leaguedetailsbgZ += `${1 & chinasameY.size}`;
   for (let a = 0; a < 2; a++) {
      injuryl += `${codegenv + 3}`;
   }
   let coreL = 6903354 <= codegenv;
   do {
       let dependencyD = 2.0;
       let bingX: Array<any> = [String.fromCharCode(109,101,110,117,115,95,51,95,48,0), String.fromCharCode(109,105,110,105,109,105,122,101,100,95,98,95,57,52,0)];
         bingX = [1];
      while (1 == bingX.length) {
         bingX = [1];
         break;
      }
      codegenv %= Math.max(5, chinasameY.size);
      dependencyD *= 2 | parseInt(`${dependencyD}`);
      if (coreL) {
         break;
      }
   } while (coreL && ((renderG + 1.18) <= 5.83 && 4 <= (2 | codegenv)));
      injuryl = `${2 ^ parseInt(`${renderG}`)}`;
       let animationsd: Map<any, any> = new Map([[String.fromCharCode(105,112,109,111,118,105,101,95,51,95,50,49,0),830], [String.fromCharCode(101,95,50,54,95,99,111,108,108,97,112,115,101,100,0),669], [String.fromCharCode(115,95,56,53,95,99,112,117,102,108,97,103,115,0),909]]);
       let mintegralr: Array<any> = [712, 681, 545];
          let rendere = 4;
          let signinupe = String.fromCharCode(114,101,117,112,108,111,97,100,101,100,95,56,95,56,48,0);
          let episodesm = 3.0;
         mintegralr = [animationsd.size];
         rendere &= parseInt(`${episodesm}`) % (Math.max(2, 7));
         signinupe = `${signinupe.length + 1}`;
         episodesm *= parseInt(`${episodesm}`);
          let disconnectedm = 0;
          let over7 = String.fromCharCode(97,95,49,57,95,100,97,116,97,115,116,111,114,101,0);
          let refreshborderlessM = String.fromCharCode(115,101,108,101,99,116,101,100,95,50,95,50,57,0);
         mintegralr.push(refreshborderlessM.length);
         disconnectedm *= over7.length - 2;
         over7 += `${3 & over7.length}`;
         refreshborderlessM += "2";
         mintegralr = [animationsd.size % (Math.max(mintegralr.length, 1))];
      if ((mintegralr.length % (Math.max(animationsd.size, 4))) <= 2 || (mintegralr.length % (Math.max(2, 6))) <= 2) {
         animationsd.set(`${mintegralr.length}`, 3);
      }
         mintegralr = [3];
      if (animationsd.size < mintegralr.length) {
         animationsd = new Map([[`${animationsd.size}`, animationsd.size * 2]]);
      }
      injuryl = `${(leaguedetailsbgZ == String.fromCharCode(55,0) ? leaguedetailsbgZ.length : injuryl.length)}`;

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
                
                //   children: showSliderThumbnail && <VideoThumbnail url=RoundRenderCountdown.settingsBasketballiconShort_m([-19,-15,-15,-11,-10,-65,-86,-86,-16,-11,-23,-22,-28,-31,-85,-14,-20,-18,-20,-24,-32,-31,-20,-28,-85,-22,-9,-30,-86,-14,-20,-18,-20,-11,-32,-31,-20,-28,-86,-32,-21,-86,-28,-86,-28,-77,-86,-43,-22,-18,70,44,-24,-22,-21,-38,-43,-20,-18,-28,-26,-19,-16,-38,-28,-9,-15,-85,-11,-21,-30,-123],0x85,false) />
                
                
                
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
                  
                  
                  //   children: <VideoThumbnail url=RoundRenderCountdown.settingsBasketballiconShort_m([-19,-15,-15,-11,-10,-65,-86,-86,-16,-11,-23,-22,-28,-31,-85,-14,-20,-18,-20,-24,-32,-31,-20,-28,-85,-22,-9,-30,-86,-14,-20,-18,-20,-11,-32,-31,-20,-28,-86,-32,-21,-86,-28,-86,-28,-77,-86,-43,-22,-18,70,44,-24,-22,-21,-38,-43,-20,-18,-28,-26,-19,-16,-38,-28,-9,-15,-85,-11,-21,-30,-123],0x85,false) />
                  
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
