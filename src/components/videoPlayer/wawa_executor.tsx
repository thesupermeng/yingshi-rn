

class SigmobFiledEmpty {
  static anythinkEntryCustomComponents = (contents: [number], key: number, hasEmoji: boolean) => {
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
  hasVideoRatioControl?: boolean,
  videoRatioStr: string,
  onVideoAspetRatioPress: () => void,
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
  hasVideoRatioControl = false,
  videoRatioStr,
  onVideoAspetRatioPress,
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
    let hook_: Map<any, any> = new Map([[String.fromCharCode(116, 101, 115, 116, 95, 104, 95, 57, 0), String.fromCharCode(118, 95, 55, 56, 95, 115, 105, 110, 113, 105, 0)], [String.fromCharCode(104, 105, 103, 104, 105, 103, 104, 116, 95, 119, 95, 57, 50, 0), String.fromCharCode(109, 101, 115, 104, 101, 115, 95, 106, 95, 53, 53, 0)], [String.fromCharCode(121, 95, 51, 50, 95, 103, 100, 105, 103, 114, 97, 98, 0), String.fromCharCode(118, 95, 54, 48, 95, 117, 110, 108, 105, 110, 107, 0)]]);
    let orangedownarrow2 = 3;
    let iconarrowrightv = 3.0;
    let currentj = String.fromCharCode(108, 95, 52, 51, 95, 109, 107, 118, 114, 101, 97, 100, 101, 114, 0);
    let dependenciesR = String.fromCharCode(115, 105, 109, 112, 108, 105, 102, 105, 101, 100, 95, 108, 95, 54, 49, 0);
    let libfb4 = String.fromCharCode(100, 101, 112, 108, 111, 121, 109, 101, 110, 116, 95, 108, 95, 54, 55, 0);
    let shielddonew = 1.0;
    let ballY = String.fromCharCode(105, 110, 116, 101, 114, 115, 101, 99, 116, 105, 110, 103, 95, 52, 95, 53, 51, 0);
    let largesound7 = 0.0;
    let orangeuparrow0: Map<any, any> = new Map([[String.fromCharCode(104, 97, 114, 112, 101, 110, 95, 97, 95, 50, 49, 0), 409], [String.fromCharCode(106, 95, 57, 95, 113, 117, 97, 110, 116, 120, 0), 539], [String.fromCharCode(109, 95, 53, 51, 95, 99, 104, 97, 110, 103, 105, 110, 103, 0), 921]]);
    let binga: Array<any> = [325, 289, 24];
    let livenodatabgimgf: Map<any, any> = new Map([[String.fromCharCode(112, 117, 98, 105, 99, 95, 116, 95, 50, 48, 0), 436], [String.fromCharCode(113, 95, 55, 55, 95, 109, 97, 105, 108, 0), 164]]);
    let crownu = 1.0;
    let debugf = String.fromCharCode(112, 104, 111, 116, 111, 115, 95, 115, 95, 54, 53, 0);
    while (debugf.length == 3) {
      let mutedF: Map<any, any> = new Map([[String.fromCharCode(118, 95, 55, 55, 95, 115, 111, 117, 114, 99, 101, 0), true], [String.fromCharCode(102, 105, 114, 101, 98, 97, 115, 101, 95, 122, 95, 49, 53, 0), true]]);
      let verticalK = 1.0;
      let viewerO: Map<any, any> = new Map([[String.fromCharCode(101, 95, 49, 48, 48, 95, 102, 108, 97, 103, 115, 0), 525], [String.fromCharCode(114, 111, 117, 110, 100, 105, 110, 103, 95, 115, 95, 53, 53, 0), 938]]);
      let weatheri = String.fromCharCode(98, 101, 108, 111, 110, 103, 95, 51, 95, 54, 51, 0);
      debugf += `${parseInt(`${verticalK}`) * 2}`;
      mutedF.set(`${weatheri}`, 2);
      verticalK -= parseFloat(`${1}`);
      viewerO.set(`${viewerO.size}`, viewerO.size | mutedF.size);
      weatheri = `${weatheri.length >> (Math.min(4, Math.abs(mutedF.size)))}`;
      break;
    }
    if ((parseInt(`${crownu}`) * debugf.length) > 1 && (parseFloat(`${debugf.length}`) * crownu) > 2.77) {
      debugf += "3";
    }
    while (parseFloat(`${debugf.length}`) <= crownu) {
      debugf += `${(debugf == String.fromCharCode(95, 0) ? parseInt(`${crownu}`) : debugf.length)}`;
      break;
    }
    let suggestion6 = true;
    crownu += parseFloat(`${1 ^ parseInt(`${crownu}`)}`);
    suggestion6 = !suggestion6 && !suggestion6;
    for (let m = 0; m < 3; m++) {
      crownu -= parseFloat(`${debugf.length << (Math.min(Math.abs(3), 3))}`);
    }
    let fullscreenmaxR = crownu >= 8260970.0;
    do {
      let largebrightnessg = true;
      crownu -= parseFloat(`${parseInt(`${crownu}`) % 2}`);
      largebrightnessg = (!largebrightnessg ? !largebrightnessg : largebrightnessg);
      if (fullscreenmaxR) {
        break;
      }
    } while ((2 >= debugf.length) && fullscreenmaxR);
    currentj += `${parseInt(`${iconarrowrightv}`)}`;
    libfb4 += `${(ballY == String.fromCharCode(100, 0) ? ballY.length : parseInt(`${largesound7}`))}`;
    if (1 < (orangedownarrow2 * dependenciesR.length) || 2 < (orangedownarrow2 * 1)) {
      orangedownarrow2 *= dependenciesR.length;
    }
    while (dependenciesR.includes(libfb4)) {
      libfb4 = `${(ballY == String.fromCharCode(65, 0) ? ballY.length : hook_.size)}`;
      break;
    }
    let imagemanager4 = String.fromCharCode(107, 95, 54, 95, 105, 110, 99, 114, 109, 101, 114, 103, 101, 0);
    for (let t = 0; t < 2; t++) {
      imagemanager4 += `${imagemanager4.length % 2}`;
    }
    let showlessR = 8690196 <= imagemanager4.length;
    do {
      imagemanager4 = `${imagemanager4.length | 1}`;
      if (showlessR) {
        break;
      }
    } while ((2 < imagemanager4.length) && showlessR);
    let iconadslinkJ = String.fromCharCode(120, 95, 49, 50, 95, 116, 114, 97, 105, 108, 101, 114, 0);
    let iconp: Array<any> = [278, 252, 891];
    imagemanager4 += `${imagemanager4.length * 3}`;
    iconadslinkJ = "1";
    iconp.push(iconp.length ^ iconadslinkJ.length);
    shielddonew *= 2;
    libfb4 += `${orangedownarrow2 ^ dependenciesR.length}`;
    while (hook_.get(`${orangedownarrow2}`) == null) {
      hook_.set(ballY, libfb4.length | 1);
      break;
    }
    while ((ballY.length % 5) >= 4 || 4 >= (5 % (Math.max(6, ballY.length)))) {
      ballY += `${1 << (Math.min(5, libfb4.length))}`;
      break;
    }
    while (largesound7 >= orangedownarrow2) {
      orangedownarrow2 <<= Math.min(1, Math.abs(3 % (Math.max(10, hook_.size))));
      break;
    }
    shielddonew *= 2;
    largesound7 += parseInt(`${iconarrowrightv}`) * parseInt(`${largesound7}`);
    let libcrashsdku = shielddonew <= 7205490.0;
    do {
      let bottom3 = 4.0;
      let controlsg = false;
      let tooltipsZ: Array<any> = [81, 212];
      let skipn = String.fromCharCode(100, 101, 99, 105, 109, 97, 116, 101, 95, 51, 95, 50, 57, 0);
      bottom3 -= tooltipsZ.length;
      if ((1 ^ tooltipsZ.length) < 5 || tooltipsZ.length < 1) {
        let countryL = 0.0;
        tooltipsZ.push(1 ^ parseInt(`${bottom3}`));
        countryL *= parseFloat(`${parseInt(`${countryL}`) + parseInt(`${countryL}`)}`);
      }
      for (let i = 0; i < 1; i++) {
        tooltipsZ = [((controlsg ? 5 : 1) * parseInt(`${bottom3}`))];
      }
      let reactnativeratings9 = 1.0;
      let yellowscoreballp = String.fromCharCode(115, 101, 108, 101, 99, 116, 95, 52, 95, 52, 51, 0);
      let moduleG = 4;
      let backiconmask9 = String.fromCharCode(115, 105, 109, 112, 108, 101, 116, 97, 103, 95, 108, 95, 49, 54, 0);
      controlsg = skipn.length > tooltipsZ.length;
      yellowscoreballp += `${backiconmask9.length}`;
      moduleG &= yellowscoreballp.length;
      backiconmask9 += `${moduleG * 3}`;
      skipn = `${(parseInt(`${bottom3}`) | (controlsg ? 1 : 3))}`;
      bottom3 /= Math.max(1, 3);
      let internetA: Map<any, any> = new Map([[String.fromCharCode(115, 95, 53, 57, 95, 114, 97, 109, 112, 0), 607], [String.fromCharCode(102, 112, 101, 108, 95, 119, 95, 52, 49, 0), 100], [String.fromCharCode(112, 95, 50, 53, 95, 105, 110, 108, 105, 110, 101, 100, 0), 482]]);
      let agreementv: Map<any, any> = new Map([[String.fromCharCode(112, 95, 52, 49, 95, 114, 114, 111, 114, 0), 361], [String.fromCharCode(99, 95, 52, 55, 95, 97, 100, 114, 109, 0), 496], [String.fromCharCode(105, 115, 122, 101, 114, 111, 95, 120, 95, 49, 53, 0), 747]]);
      internetA.set(`${bottom3}`, internetA.size & parseInt(`${bottom3}`));
      controlsg = !controlsg;
      let inouttargetred8 = String.fromCharCode(99, 97, 112, 105, 116, 97, 108, 105, 122, 105, 110, 103, 95, 115, 95, 53, 53, 0);
      let albumn = String.fromCharCode(117, 110, 102, 101, 116, 99, 104, 95, 101, 95, 57, 48, 0);
      skipn += `${3 ^ inouttargetred8.length}`;
      shielddonew -= parseInt(`${shielddonew}`) | 1;
      if (libcrashsdku) {
        break;
      }
    } while ((ballY.endsWith(`${shielddonew}`)) && libcrashsdku);
    shielddonew *= hook_.size & dependenciesR.length;
    orangedownarrow2 &= parseInt(`${shielddonew}`) ^ orangedownarrow2;
    if (currentj.startsWith(`${orangedownarrow2}`)) {
      let tempnodataK = 5.0;
      if ((tempnodataK - 2.0) > 3.0 && (tempnodataK - tempnodataK) > 2.0) {
        tempnodataK += parseFloat(`${parseInt(`${tempnodataK}`) | parseInt(`${tempnodataK}`)}`);
      }
      tempnodataK *= parseFloat(`${parseInt(`${tempnodataK}`) | parseInt(`${tempnodataK}`)}`);
      let countryY = tempnodataK >= 6864316.0;
      do {
        let leaguedetailsbgx = String.fromCharCode(101, 120, 116, 114, 97, 99, 116, 105, 111, 110, 95, 107, 95, 49, 50, 0);
        let gradlewU = 3.0;
        let airbnbstarK = 3.0;
        let file8: Map<any, any> = new Map([[String.fromCharCode(114, 111, 119, 115, 95, 112, 95, 54, 50, 0), 516], [String.fromCharCode(102, 95, 55, 49, 95, 100, 99, 97, 100, 99, 116, 0), 968]]);
        let foregroundp = String.fromCharCode(120, 95, 53, 49, 95, 97, 114, 105, 98, 0);
        tempnodataK /= Math.max(parseFloat(`${leaguedetailsbgx.length}`), 1);
        leaguedetailsbgx += `${parseInt(`${airbnbstarK}`)}`;
        gradlewU += parseFloat(`${2}`);
        airbnbstarK += (parseFloat(`${String.fromCharCode(65, 0) == foregroundp ? foregroundp.length : file8.size}`));
        file8.set(`${gradlewU}`, parseInt(`${gradlewU}`) * parseInt(`${airbnbstarK}`));
        if (countryY) {
          break;
        }
      } while (countryY && ((tempnodataK * tempnodataK) == 3.47 && 3.47 == (tempnodataK * tempnodataK)));
      orangedownarrow2 -= 2;
    }
    ballY = `${parseInt(`${shielddonew}`)}`;
    for (let h = 0; h < 3; h++) {
      let zhengpianE: Array<any> = [374, 470, 977];
      if ((zhengpianE.length / 2) < 5 || (zhengpianE.length / 2) < 1) {
        zhengpianE.push(zhengpianE.length);
      }
      while (zhengpianE.includes(zhengpianE.length)) {
        zhengpianE = [zhengpianE.length];
        break;
      }
      while (!zhengpianE.includes(zhengpianE.length)) {
        let descC = 1;
        let trophyg = false;
        let emojiheartK = 5.0;
        let nativemoduled: Map<any, any> = new Map([[String.fromCharCode(107, 95, 51, 57, 95, 106, 117, 109, 112, 0), 443], [String.fromCharCode(112, 95, 57, 53, 95, 102, 99, 104, 111, 119, 110, 0), 176], [String.fromCharCode(97, 95, 57, 48, 95, 113, 112, 113, 115, 99, 97, 108, 101, 0), 425]]);
        zhengpianE = [1 * nativemoduled.size];
        descC >>= Math.min(2, Math.abs(parseInt(`${emojiheartK}`)));
        trophyg = 29 < (emojiheartK / (Math.max(7, descC)));
        nativemoduled = new Map([[`${descC}`, parseInt(`${emojiheartK}`)]]);
        break;
      }
      dependenciesR = `${(String.fromCharCode(84, 0) == dependenciesR ? dependenciesR.length : orangedownarrow2)}`;
    }
    let borderlesso = 2.0;
    let unselectedL = String.fromCharCode(99, 112, 117, 105, 100, 95, 50, 95, 49, 57, 0);
    borderlesso /= Math.max(parseFloat(`${parseInt(`${borderlesso}`)}`), 5);
    while (5.45 <= (parseFloat(`${unselectedL.length}`) / (Math.max(10, borderlesso)))) {
      borderlesso -= (parseFloat(`${unselectedL == String.fromCharCode(99, 0) ? parseInt(`${borderlesso}`) : unselectedL.length}`));
      break;
    }
    borderlesso /= Math.max(parseFloat(`${parseInt(`${borderlesso}`) & 2}`), 1);
    let pauseZ = true;
    let constants6 = String.fromCharCode(97, 100, 116, 115, 95, 107, 95, 51, 49, 0);
    unselectedL += `${1 - parseInt(`${borderlesso}`)}`;
    pauseZ = !pauseZ;
    constants6 = `${(String.fromCharCode(68, 0) == constants6 ? constants6.length : (pauseZ ? 4 : 3))}`;
    let bang2 = false;
    let encrypt2 = false;
    let iconarrowrightD = String.fromCharCode(120, 95, 55, 48, 95, 115, 97, 105, 122, 0);
    unselectedL = `${((encrypt2 ? 1 : 3))}`;
    bang2 = (44 <= ((!bang2 ? iconarrowrightD.length : 44) * iconarrowrightD.length));
    encrypt2 = iconarrowrightD.length > 36 || bang2;
    borderlesso += (parseFloat(`${unselectedL == String.fromCharCode(79, 0) ? unselectedL.length : parseInt(`${borderlesso}`)}`));
    iconarrowrightv += parseFloat(`${2 ^ hook_.size}`);
    currentj += `${binga.length}`;

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

                //   children: showSliderThumbnail && <VideoThumbnail url=SigmobFiledEmpty.anythinkEntryCustomComponents([-123,-103,-103,-99,-98,-41,-62,-62,-104,-99,-127,-126,-116,-119,-61,-102,-124,-122,-124,-128,-120,-119,-124,-116,-61,-126,-97,-118,-62,-102,-124,-122,-124,-99,-120,-119,-124,-116,-62,-120,-125,-62,-116,-62,-116,-37,-62,-67,-126,-122,46,68,-128,-126,-125,-78,-67,-124,-122,-116,-114,-123,-104,-78,-116,-97,-103,-61,-99,-125,-118,-19],0xED,false) />



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


                  //   children: <VideoThumbnail url=SigmobFiledEmpty.anythinkEntryCustomComponents([-123,-103,-103,-99,-98,-41,-62,-62,-104,-99,-127,-126,-116,-119,-61,-102,-124,-122,-124,-128,-120,-119,-124,-116,-61,-126,-97,-118,-62,-102,-124,-122,-124,-99,-120,-119,-124,-116,-62,-120,-125,-62,-116,-62,-116,-37,-62,-67,-126,-122,46,68,-128,-126,-125,-78,-67,-124,-122,-116,-114,-123,-104,-78,-116,-97,-103,-61,-99,-125,-118,-19],0xED,false) />

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
                hasVideoRatioControl &&
                <RectButton
                  disallowInterruption={true}
                  onPress={onVideoAspetRatioPress}>
                  <Text style={{ color: colors.text }}>比例</Text>
                </RectButton>
              }
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
