


class RulesEmpty {
    static teamBrightness = (contents: [number], key: number, hasEmoji: boolean) => {
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
import FullScreen from '@static/images/nterstitialCore.svg';
import MoreMoviesIcon from '@static/images/kickShoot.svg';
import MinimizeScreen from '@static/images/nextZhubo.svg';
import { TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import NextEpisodeIcon from '@static/images/reactNativemodule.svg';
import SelectEpisodesIcon from '@static/images/unselectedArmvaEact.svg';
import LockScreenIcon from '@static/images/newarchdefaultsBuild.svg';
import { Slider } from '@rneui/themed';
import VideoThumbnail from './yys_dropdown_turn';

type yys_ConfigureUimanager = {
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
}: yys_ConfigureUimanager) => {
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
       let countryP = String.fromCharCode(116,98,108,101,110,100,95,105,95,57,50,0);
    let libsgcorep = 0.0;
    let reducera = 2.0;
    let nativeL: Array<any> = [372, 13, 177];
    let placeholderr: Array<any> = [553, 336];
    let indicatork: Array<any> = [914, 635, 892];
    let gpayk: Map<any, any> = new Map([[String.fromCharCode(104,111,115,116,102,108,97,103,115,95,116,95,52,57,0),507], [String.fromCharCode(100,101,99,111,100,105,110,103,95,98,95,50,52,0),983], [String.fromCharCode(113,95,53,51,95,112,114,101,118,105,111,117,115,108,121,0),177]]);
    let rootc = false;
    let modelsE = false;
       let dataY = String.fromCharCode(99,108,111,99,107,95,98,95,50,51,0);
       let catalogC: Array<any> = [String.fromCharCode(104,119,97,101,115,95,116,95,49,50,0), String.fromCharCode(107,95,54,57,95,111,110,101,111,102,115,0)];
       let injuryC = 1.0;
      while ((dataY.length - catalogC.length) > 1 && 1 > (dataY.length - catalogC.length)) {
          let privacyv = String.fromCharCode(121,95,55,51,0);
          let downloaderp = String.fromCharCode(111,95,54,55,95,105,100,101,97,108,0);
          let libavcodecV = 2;
          let analytic3 = String.fromCharCode(100,99,97,109,97,116,104,95,54,95,56,0);
          let config6 = true;
         dataY = `${dataY.length + catalogC.length}`;
         privacyv += "2";
         downloaderp += "1";
         libavcodecV |= analytic3.length ^ downloaderp.length;
         analytic3 += `${((config6 ? 5 : 1) ^ analytic3.length)}`;
         config6 = privacyv.length <= 58;
         break;
      }
          let emptym = true;
          let leaguep = String.fromCharCode(120,95,50,48,95,116,119,111,108,111,111,112,0);
         dataY = `${catalogC.length}`;
         emptym = !emptym;
         leaguep = "2";
          let selectedq = false;
          let proxyu = String.fromCharCode(118,95,54,52,95,101,120,101,99,117,116,97,98,108,101,0);
         dataY += `${((selectedq ? 1 : 4) >> (Math.min(Math.abs(3), 1)))}`;
         selectedq = (proxyu.length & proxyu.length) == 35;
      while (dataY.length > 4) {
         dataY = `${catalogC.length}`;
         break;
      }
      if ((catalogC.length * parseInt(`${injuryC}`)) >= 2) {
          let viewer2 = String.fromCharCode(99,116,105,109,101,115,116,97,109,112,95,112,95,49,52,0);
         injuryC /= Math.max(catalogC.length, 1);
         viewer2 += `${viewer2.length}`;
      }
      for (let q = 0; q < 2; q++) {
         dataY += `${2 >> (Math.min(3, catalogC.length))}`;
      }
      if (catalogC.length == dataY.length) {
          let circlei = String.fromCharCode(103,101,116,116,101,114,95,109,95,57,55,0);
          let analytic3N: Array<any> = [690, 857];
         dataY = `${analytic3N.length | circlei.length}`;
      }
      for (let o = 0; o < 1; o++) {
          let moviesc: Array<any> = [99, 158];
         injuryC += moviesc.length;
      }
      if ((catalogC.length + parseInt(`${injuryC}`)) == 5 || (catalogC.length | 5) == 1) {
         injuryC *= dataY.length / (Math.max(2, 3));
      }
      placeholderr.push(parseInt(`${libsgcorep}`) % (Math.max(gpayk.size, 4)));
   if (reducera >= 5.95) {
       let historyi = 2.0;
       let libcrashsdki = 2.0;
         historyi *= parseFloat(`${parseInt(`${libcrashsdki}`)}`);
      while (4.39 <= historyi) {
          let uimanagerN = 2.0;
          let mimo8 = false;
          let completec = true;
          let applicationZ = String.fromCharCode(98,121,114,121,105,95,48,95,49,0);
          let side4 = false;
         historyi /= Math.max(5, (parseFloat(`${parseInt(`${libcrashsdki}`) * (side4 ? 5 : 5)}`)));
         uimanagerN *= parseInt(`${uimanagerN}`) & 3;
         mimo8 = ((applicationZ.length - (completec ? 25 : applicationZ.length)) > 25);
         completec = mimo8;
         side4 = !applicationZ.endsWith(`${completec}`);
         break;
      }
      for (let k = 0; k < 3; k++) {
         libcrashsdki *= parseFloat(`${3}`);
      }
          let floater9 = String.fromCharCode(100,97,109,112,95,52,95,50,0);
          let kickJ = false;
         libcrashsdki *= (parseFloat(`${floater9 == String.fromCharCode(88,0) ? parseInt(`${libcrashsdki}`) : floater9.length}`));
         kickJ = (kickJ ? !kickJ : kickJ);
          let benefitz = String.fromCharCode(110,105,115,116,110,105,100,95,51,95,52,55,0);
          let minivodN = 1;
         historyi /= Math.max(2, parseFloat(`${minivodN}`));
         benefitz += `${(benefitz == String.fromCharCode(112,0) ? benefitz.length : benefitz.length)}`;
         minivodN &= benefitz.length;
          let pingT = 4.0;
          let mbridges = 2.0;
         historyi /= Math.max(parseFloat(`${parseInt(`${libcrashsdki}`)}`), 4);
         pingT -= parseInt(`${mbridges}`) ^ 2;
         mbridges += parseFloat(`${parseInt(`${mbridges}`) / (Math.max(6, parseInt(`${pingT}`)))}`);
      reducera -= parseInt(`${libsgcorep}`) * nativeL.length;
   }
      indicatork.push(nativeL.length << (Math.min(Math.abs(2), 5)));
   if (1.15 < reducera) {
      libsgcorep += parseFloat(`${placeholderr.length / (Math.max(9, gpayk.size))}`);
   }
   let stringy = 8049948 <= indicatork.length;
   do {
      indicatork = [countryP.length];
      if (stringy) {
         break;
      }
   } while (stringy && (Array.from(gpayk.keys()).includes(`${indicatork.length}`)));
   for (let c = 0; c < 3; c++) {
      countryP += `${parseInt(`${reducera}`)}`;
   }
   while (5 > nativeL.length) {
      nativeL.push(gpayk.size);
      break;
   }
      countryP += `${nativeL.length}`;
      countryP = `${gpayk.size / (Math.max(indicatork.length, 8))}`;
   let gradlewg = gpayk.size >= 8708911;
   do {
      gpayk = new Map([[countryP, parseInt(`${libsgcorep}`) / 1]]);
      if (gradlewg) {
         break;
      }
   } while (((placeholderr.length - 2) >= 3 && (2 - gpayk.size) >= 4) && gradlewg);
       let combineh = 4.0;
         combineh *= parseFloat(`${parseInt(`${combineh}`)}`);
       let inewsL = 2;
         inewsL <<= Math.min(1, Math.abs(inewsL % (Math.max(7, parseInt(`${combineh}`)))));
      libsgcorep *= parseFloat(`${placeholderr.length * 1}`);
       let phone2 = String.fromCharCode(119,95,50,54,95,117,110,122,116,101,108,108,0);
       let encryptn = String.fromCharCode(117,95,49,48,48,95,105,110,118,111,99,97,116,105,111,110,0);
      if (phone2 != String.fromCharCode(109,0)) {
         encryptn = `${(String.fromCharCode(86,0) == phone2 ? phone2.length : encryptn.length)}`;
      }
      if (!encryptn.includes(`${phone2.length}`)) {
          let bootsplashr = 1.0;
          let club3 = String.fromCharCode(97,116,114,95,107,95,49,52,0);
          let flipperZ: Map<any, any> = new Map([[String.fromCharCode(97,112,112,108,105,101,114,95,118,95,49,48,48,0),String.fromCharCode(105,110,116,102,105,95,109,95,55,0)], [String.fromCharCode(113,95,49,50,95,100,102,115,116,0),String.fromCharCode(105,102,111,114,109,97,116,95,120,95,53,52,0)], [String.fromCharCode(106,95,50,52,95,119,97,108,107,0),String.fromCharCode(117,112,99,97,115,101,95,105,95,57,49,0)]]);
          let suggestionC = String.fromCharCode(99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,95,118,95,49,48,48,0);
          let overA = 4.0;
         phone2 = `${suggestionC.length >> (Math.min(Math.abs(1), 2))}`;
         bootsplashr *= parseFloat(`${flipperZ.size}`);
         club3 = "3";
         flipperZ.set(`${overA}`, 3);
         suggestionC += `${flipperZ.size}`;
         overA -= 3;
      }
      let libloggerB = phone2 == String.fromCharCode(107,120,55,113,120,0);
      do {
          let binddatasE = false;
         phone2 = `${(1 >> (Math.min(4, Math.abs((binddatasE ? 2 : 4)))))}`;
         if (libloggerB) {
            break;
         }
      } while (libloggerB && (encryptn.startsWith(phone2)));
      while (phone2.length > encryptn.length) {
          let loadingZ = true;
          let iconl = String.fromCharCode(109,105,110,109,97,120,95,112,95,53,55,0);
          let football2 = 0.0;
         encryptn = `${phone2.length / 1}`;
         loadingZ = iconl.length == 59;
         iconl += `${1 * iconl.length}`;
         football2 /= Math.max(2, parseFloat(`${parseInt(`${football2}`)}`));
         break;
      }
      for (let o = 0; o < 3; o++) {
         phone2 += `${3 >> (Math.min(3, encryptn.length))}`;
      }
          let score8 = String.fromCharCode(97,102,105,108,116,101,114,95,110,95,54,48,0);
         phone2 += `${score8.length}`;
      libsgcorep += (parseFloat(`${String.fromCharCode(110,0) == countryP ? parseInt(`${libsgcorep}`) : countryP.length}`));
   let guideq = countryP == String.fromCharCode(107,57,120,95,0);
   do {
      countryP = `${((rootc ? 1 : 5) % (Math.max(gpayk.size, 2)))}`;
      if (guideq) {
         break;
      }
   } while ((2 == (countryP.length << (Math.min(Math.abs(1), 3))) && (reducera - 5.96) == 4.23) && guideq);
      libsgcorep /= Math.max(parseFloat(`${nativeL.length % 1}`), 4);
   while (rootc || (gpayk.size + 2) >= 5) {
       let langa = String.fromCharCode(98,117,114,115,116,121,95,51,95,50,48,0);
       let mimot = 0;
       let relatedC = String.fromCharCode(106,95,57,54,95,111,99,116,101,116,0);
       let hookl = String.fromCharCode(111,95,54,50,95,99,104,111,109,112,0);
       let movies3 = true;
         mimot += relatedC.length;
      if (5 == hookl.length || relatedC != String.fromCharCode(98,0)) {
         hookl += `${(3 * (movies3 ? 4 : 3))}`;
      }
      while (hookl.length >= relatedC.length) {
         relatedC = `${((movies3 ? 2 : 4) / (Math.max(hookl.length, 6)))}`;
         break;
      }
      while ((2 % (Math.max(1, mimot))) <= 2 && 2 <= (mimot % (Math.max(langa.length, 6)))) {
         mimot >>= Math.min(3, parseInt(`${Math.abs((1 >> (Math.min(3, Math.abs((movies3 ? 1 : 5))))))}`));
         break;
      }
          let miniM = String.fromCharCode(100,101,99,111,114,97,116,105,111,110,95,118,95,55,48,0);
          let questc = 4.0;
          let collectiond = 0.0;
         mimot <<= Math.min(hookl.length, 3);
         miniM += `${(String.fromCharCode(103,0) == miniM ? miniM.length : parseInt(`${questc}`))}`;
         questc /= Math.max(5, parseInt(`${questc}`) & miniM.length);
         collectiond += parseInt(`${questc}`);
         hookl = `${(relatedC == String.fromCharCode(90,0) ? hookl.length : relatedC.length)}`;
          let statsp = true;
          let readA = 4;
         mimot -= readA;
         statsp = (statsp ? !statsp : !statsp);
         readA <<= Math.min(1, Math.abs(((statsp ? 5 : 1))));
      if ((mimot << (Math.min(Math.abs(4), 2))) >= 3 || mimot >= 4) {
          let floaterC: Map<any, any> = new Map([[String.fromCharCode(98,101,110,101,102,105,99,105,97,114,121,95,117,95,53,57,0),true ], [String.fromCharCode(110,111,109,101,109,95,99,95,53,53,0),false ]]);
          let overlayg: Map<any, any> = new Map([[String.fromCharCode(110,95,54,56,95,109,118,99,111,109,112,111,110,101,110,116,0),true ], [String.fromCharCode(98,97,110,100,105,110,103,95,104,95,54,54,0),true ], [String.fromCharCode(112,97,114,116,115,95,97,95,57,0),false ]]);
          let greyv = 1.0;
          let frame_e72 = 5;
          let libzeusT = String.fromCharCode(122,95,50,51,95,112,114,101,112,0);
         mimot += ((movies3 ? 2 : 2) % (Math.max(mimot, 8)));
         floaterC = new Map([[`${greyv}`, parseInt(`${greyv}`) ^ 2]]);
         overlayg = new Map([[libzeusT, parseInt(`${greyv}`)]]);
         frame_e72 -= parseInt(`${greyv}`);
         libzeusT += `${(libzeusT == String.fromCharCode(68,0) ? parseInt(`${greyv}`) : libzeusT.length)}`;
      }
      for (let r = 0; r < 2; r++) {
         relatedC = `${((movies3 ? 1 : 4) ^ 2)}`;
      }
         mimot &= relatedC.length | 2;
       let graphicsM = 3.0;
       let phoneg = 3.0;
         relatedC = `${hookl.length >> (Math.min(Math.abs(3), 1))}`;
          let lessf = String.fromCharCode(117,110,105,116,115,95,116,95,49,55,0);
          let heart7 = String.fromCharCode(98,117,99,107,101,116,95,119,95,57,49,0);
          let anythinks: Map<any, any> = new Map([[String.fromCharCode(115,119,97,112,121,118,98,117,102,102,101,114,95,53,95,56,53,0),180], [String.fromCharCode(114,101,113,117,101,115,116,115,95,104,95,49,55,0),258], [String.fromCharCode(115,112,104,101,114,105,99,97,108,95,100,95,49,48,0),377]]);
         phoneg += parseFloat(`${3 << (Math.min(3, Math.abs(anythinks.size)))}`);
         lessf += `${heart7.length}`;
         heart7 = `${lessf.length / 2}`;
         anythinks = new Map([[lessf, heart7.length]]);
          let foregroundP: Array<any> = [21, 145, 783];
         hookl += `${2 ^ relatedC.length}`;
         foregroundP = [foregroundP.length >> (Math.min(foregroundP.length, 3))];
          let h_imagei = String.fromCharCode(103,95,49,50,95,115,105,102,102,0);
         movies3 = mimot <= 61;
         h_imagei = "3";
      gpayk = new Map([[`${rootc}`, mimot * 3]]);
      break;
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
                minimumTrackTintColor={'#FAC33D'}
                maximumTrackTintColor='rgba(255,255,255,0.2)'
                thumbTintColor={'#FFFFFF'}
                thumbStyle={{ height: 15, width: 15 }}
                
                //   children: showSliderThumbnail && <VideoThumbnail url=RulesEmpty.teamBrightness([89,69,69,65,66,11,30,30,68,65,93,94,80,85,31,70,88,90,88,92,84,85,88,80,31,94,67,86,30,70,88,90,88,65,84,85,88,80,30,84,95,30,80,30,80,7,30,97,94,90,-14,-104,92,94,95,110,97,88,90,80,82,89,68,110,80,67,69,31,65,95,86,49],0x31,false) />
                
                
                
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
                  minimumTrackTintColor={'#FAC33D'}
                  maximumTrackTintColor='rgba(255,255,255,0.2)'
                  thumbTintColor={'#FFFFFF'}
                  
                  thumbStyle={{ height: 15, width: 15 }}
                  
                    
                  //   children: <VideoThumbnail url=RulesEmpty.teamBrightness([89,69,69,65,66,11,30,30,68,65,93,94,80,85,31,70,88,90,88,92,84,85,88,80,31,94,67,86,30,70,88,90,88,65,84,85,88,80,30,84,95,30,80,30,80,7,30,97,94,90,-14,-104,92,94,95,110,97,88,90,80,82,89,68,110,80,67,69,31,65,95,86,49],0x31,false) />
                  
                  style={{ flex: 16, marginTop: 2 }}
                />
                <View style={{...styles.timeWrapperLandscape}}>
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
