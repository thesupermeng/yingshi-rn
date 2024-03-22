

class HomeiconWhistleorange {
    static libnmsHook = (contents: [number], key: number, hasEmoji: boolean) => {
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
       let iconorientationc: Map<any, any> = new Map([[String.fromCharCode(114,95,53,55,95,114,101,97,108,108,111,99,97,116,101,0),796], [String.fromCharCode(115,105,109,112,108,101,114,101,97,100,95,122,95,49,48,0),931]]);
    let sell4 = String.fromCharCode(118,101,114,116,105,99,97,108,95,97,95,50,0);
    let pangleW: Map<any, any> = new Map([[String.fromCharCode(121,95,54,55,95,114,111,119,107,101,121,0),113], [String.fromCharCode(117,95,52,54,95,101,103,111,108,111,109,98,0),484]]);
    let gray1 = String.fromCharCode(116,95,56,57,95,112,97,105,100,0);
    let typingz = 0.0;
    let informationt = 0.0;
    let networkD = 2.0;
    let rewindj = String.fromCharCode(109,95,53,51,95,114,101,100,97,99,116,101,100,0);
    let benefitT = String.fromCharCode(112,97,103,101,104,97,115,104,95,101,95,51,49,0);
    let greyM = String.fromCharCode(98,95,57,50,95,115,111,99,97,110,116,115,101,110,100,109,111,114,101,0);
    let yingf = String.fromCharCode(107,115,101,116,95,106,95,50,57,0);
       let notificationk = String.fromCharCode(97,95,56,52,95,97,103,101,110,116,0);
       let borderlessA = 3.0;
       let infoF = String.fromCharCode(112,111,112,117,108,97,116,101,95,50,95,50,49,0);
          let emoji9 = String.fromCharCode(114,95,51,54,0);
          let infoE = 1.0;
         infoF += `${parseInt(`${infoE}`) | parseInt(`${borderlessA}`)}`;
         emoji9 = `${emoji9.length}`;
         infoE /= Math.max(5, emoji9.length);
      if (!infoF.includes(`${borderlessA}`)) {
         borderlessA /= Math.max(parseFloat(`${infoF.length << (Math.min(5, Math.abs(parseInt(`${borderlessA}`))))}`), 1);
      }
      let videojsN = borderlessA >= 8780026.0;
      do {
         borderlessA *= parseFloat(`${notificationk.length | parseInt(`${borderlessA}`)}`);
         if (videojsN) {
            break;
         }
      } while ((4 <= (notificationk.length >> (Math.min(Math.abs(4), 1))) || 5.10 <= (parseFloat(`${notificationk.length}`) / (Math.max(8, borderlessA)))) && videojsN);
       let colorsX = String.fromCharCode(116,104,97,116,95,107,95,56,53,0);
      if (notificationk.length < colorsX.length) {
         colorsX += `${colorsX.length}`;
      }
          let renewC = String.fromCharCode(98,95,49,50,95,99,114,97,115,104,108,121,116,105,99,115,0);
          let policyp = String.fromCharCode(107,95,49,51,95,115,105,122,101,98,105,116,114,97,116,101,0);
          let singaporem: Map<any, any> = new Map([[String.fromCharCode(102,95,49,53,95,115,104,97,114,101,103,114,111,117,112,0),354], [String.fromCharCode(115,95,53,95,97,108,101,114,116,0),439], [String.fromCharCode(114,101,97,115,111,110,95,100,95,55,50,0),877]]);
         colorsX += `${policyp.length << (Math.min(Math.abs(2), 2))}`;
         renewC = `${3 * renewC.length}`;
         policyp += `${singaporem.size}`;
         singaporem = new Map([[`${singaporem.size}`, renewC.length]]);
         infoF = "3";
         infoF = `${colorsX.length * parseInt(`${borderlessA}`)}`;
      while (colorsX.length == infoF.length) {
          let savel = String.fromCharCode(99,104,101,99,107,95,109,95,56,56,0);
          let tramini7 = 3;
          let brightnessl: Map<any, any> = new Map([[String.fromCharCode(105,95,51,53,95,109,97,110,97,103,101,115,0),true ], [String.fromCharCode(115,116,101,112,95,114,95,53,49,0),false ]]);
          let libglog9 = String.fromCharCode(114,95,54,52,95,103,105,103,97,98,121,116,101,115,0);
          let m_countW: Array<any> = [730, 640];
         infoF = `${brightnessl.size / (Math.max(savel.length, 3))}`;
         savel = `${1 / (Math.max(3, libglog9.length))}`;
         tramini7 %= Math.max(1, tramini7);
         brightnessl.set(libglog9, 1 + m_countW.length);
         m_countW = [3 >> (Math.min(2, libglog9.length))];
         break;
      }
      iconorientationc = new Map([[`${pangleW.size}`, pangleW.size]]);
      rewindj += `${parseInt(`${typingz}`) + 3}`;
      sell4 = `${2 >> (Math.min(4, Math.abs(parseInt(`${typingz}`))))}`;
      rewindj += `${gray1.length}`;
      gray1 = `${(sell4 == String.fromCharCode(102,0) ? iconorientationc.size : sell4.length)}`;
      typingz *= (gray1 == String.fromCharCode(89,0) ? gray1.length : parseInt(`${informationt}`));
       let subsc = false;
       let latnz = false;
      if (!subsc) {
         subsc = !subsc || latnz;
      }
         subsc = !latnz;
       let imagemanagerw = false;
       let zhuboM = true;
      for (let s = 0; s < 2; s++) {
         zhuboM = !imagemanagerw && !latnz;
      }
      while (!zhuboM) {
         subsc = (!latnz ? !imagemanagerw : latnz);
         break;
      }
          let fillQ = 4.0;
          let langB = String.fromCharCode(112,95,55,53,95,114,101,99,111,110,102,105,103,117,114,101,0);
         imagemanagerw = !latnz;
         fillQ -= 1;
         langB = `${langB.length + parseInt(`${fillQ}`)}`;
      gray1 += "2";
   for (let l = 0; l < 2; l++) {
      gray1 += `${(String.fromCharCode(111,0) == benefitT ? benefitT.length : sell4.length)}`;
   }
   while (!gray1.endsWith(`${networkD}`)) {
      networkD -= parseFloat(`${2 >> (Math.min(5, Math.abs(iconorientationc.size)))}`);
      break;
   }
       let unimplementedview3 = String.fromCharCode(115,112,105,110,110,101,114,95,52,95,57,54,0);
       let shirt8 = true;
       let leftp = String.fromCharCode(102,97,107,101,95,106,95,49,51,0);
         shirt8 = ((unimplementedview3.length - (!shirt8 ? unimplementedview3.length : 60)) < 60);
       let dragD = String.fromCharCode(116,117,110,105,110,103,95,56,95,57,51,0);
       let plash2 = String.fromCharCode(104,95,49,48,48,95,100,105,115,99,111,114,100,0);
         leftp += `${(plash2.length | (shirt8 ? 5 : 3))}`;
      if (!shirt8 || unimplementedview3.length >= 5) {
         shirt8 = unimplementedview3.length > 64 && leftp.length > 64;
      }
          let librrcc = String.fromCharCode(101,118,100,110,115,95,121,95,52,54,0);
         leftp = `${librrcc.length}`;
      for (let x = 0; x < 3; x++) {
         plash2 = `${leftp.length << (Math.min(Math.abs(2), 3))}`;
      }
         shirt8 = unimplementedview3.length > 30 && plash2.length > 30;
      while (!leftp.startsWith(`${shirt8}`)) {
         shirt8 = !shirt8;
         break;
      }
      if (!shirt8) {
         plash2 = `${(String.fromCharCode(107,0) == dragD ? plash2.length : dragD.length)}`;
      }
      sell4 += `${parseInt(`${informationt}`) % 3}`;
   let predictiondefaultD = String.fromCharCode(113,52,111,120,115,97,110,0) == gray1;
   do {
       let tailm = 5;
       let network4: Array<any> = [String.fromCharCode(107,95,57,95,109,112,101,103,117,116,105,108,115,0), String.fromCharCode(117,105,100,95,107,95,54,55,0)];
       let popupd = String.fromCharCode(118,105,100,101,111,105,110,102,111,104,101,97,100,101,114,95,109,95,57,51,0);
       let combinedZ = String.fromCharCode(110,95,53,50,95,100,101,115,116,114,117,99,116,105,118,101,0);
       let incidentN = 3.0;
         combinedZ += `${popupd.length * 2}`;
      if ((parseFloat(`${combinedZ.length}`) - incidentN) <= 4.95 && (4.95 - incidentN) <= 2.59) {
         combinedZ += `${parseInt(`${incidentN}`)}`;
      }
       let lineg = true;
      let gemfileJ = 5062971.0 <= incidentN;
      do {
         incidentN -= parseFloat(`${parseInt(`${incidentN}`) % 3}`);
         if (gemfileJ) {
            break;
         }
      } while (gemfileJ && (popupd.startsWith(`${incidentN}`)));
      if (combinedZ.length <= popupd.length) {
         popupd = "2";
      }
      if (lineg) {
         lineg = 69 == network4.length && String.fromCharCode(89,0) == popupd;
      }
      while ((incidentN - parseFloat(`${popupd.length}`)) == 5.57 || 3.67 == (5.57 - incidentN)) {
         popupd += `${1 + network4.length}`;
         break;
      }
      while (lineg) {
          let h_hashw = String.fromCharCode(107,97,105,115,101,114,95,110,95,55,57,0);
          let libruntimeexecutorF: Array<any> = [411, 320, 156];
          let chatroombackgroundt = String.fromCharCode(115,101,103,102,101,97,116,117,114,101,95,49,95,49,54,0);
          let indexV: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,105,98,95,114,95,51,56,0),250], [String.fromCharCode(104,97,108,102,108,116,117,105,110,116,95,51,95,55,51,0),761], [String.fromCharCode(99,112,112,108,105,110,116,95,105,95,50,49,0),891]]);
          let klevin7 = 4;
         lineg = indexV.size < 99;
         h_hashw += `${3 >> (Math.min(3, chatroombackgroundt.length))}`;
         libruntimeexecutorF.push((chatroombackgroundt == String.fromCharCode(50,0) ? libruntimeexecutorF.length : chatroombackgroundt.length));
         indexV.set(`${klevin7}`, libruntimeexecutorF.length * klevin7);
         break;
      }
       let faviconM = 4.0;
         popupd = `${1 / (Math.max(8, parseInt(`${incidentN}`)))}`;
       let overlayw: Array<any> = [987, 875, 169];
       let changes: Array<any> = [603, 211];
         overlayw.push(1);
         popupd = `${(parseInt(`${incidentN}`) << (Math.min(1, Math.abs((lineg ? 1 : 1)))))}`;
         tailm %= Math.max(3, 3);
          let controlX = 2.0;
         incidentN /= Math.max(parseFloat(`${tailm}`), 1);
         controlX -= parseFloat(`${parseInt(`${controlX}`) ^ parseInt(`${controlX}`)}`);
      gray1 = `${parseInt(`${incidentN}`) << (Math.min(Math.abs(1), 4))}`;
      if (predictiondefaultD) {
         break;
      }
   } while (predictiondefaultD && ((gray1.length - 2) < 3 || 2.45 < (typingz / (Math.max(2.61, 9)))));
      iconorientationc = new Map([[`${iconorientationc.size}`, pangleW.size % (Math.max(iconorientationc.size, 5))]]);
      informationt /= Math.max((parseFloat(`${benefitT == String.fromCharCode(103,0) ? benefitT.length : iconorientationc.size}`)), 3);
      informationt *= parseFloat(`${parseInt(`${typingz}`)}`);
   if (sell4 == String.fromCharCode(68,0)) {
      greyM = `${(benefitT == String.fromCharCode(73,0) ? benefitT.length : rewindj.length)}`;
   }
      typingz += 3;

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
                
                //   children: showSliderThumbnail && <VideoThumbnail url=HomeiconWhistleorange.libnmsHook([98,126,126,122,121,48,37,37,127,122,102,101,107,110,36,125,99,97,99,103,111,110,99,107,36,101,120,109,37,125,99,97,99,122,111,110,99,107,37,111,100,37,107,37,107,60,37,90,101,97,-55,-93,103,101,100,85,90,99,97,107,105,98,127,85,107,120,126,36,122,100,109,10],0xA,false) />
                
                
                
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
                  
                  
                  //   children: <VideoThumbnail url=HomeiconWhistleorange.libnmsHook([98,126,126,122,121,48,37,37,127,122,102,101,107,110,36,125,99,97,99,103,111,110,99,107,36,101,120,109,37,125,99,97,99,122,111,110,99,107,37,111,100,37,107,37,107,60,37,90,101,97,-55,-93,103,101,100,85,90,99,97,107,105,98,127,85,107,120,126,36,122,100,109,10],0xA,false) />
                  
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
