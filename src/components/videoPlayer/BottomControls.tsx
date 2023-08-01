import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  PanResponder,
  StyleSheet,
  Dimensions,
  Text,
  Pressable,
  Platform,
} from 'react-native';
import Slider from '@react-native-community/slider';
import FullScreen from '../../../static/images/fullScreen.svg';
import Unlock from '../../../static/images/unlock.svg';
import Episodes from '../../../static/images/episodes.svg';
import NextEpisode from '../../../static/images/nextEpisode.svg';
import MinimizeScreen from '../../../static/images/minimizeScreen.svg';
import { TouchableWithoutFeedback } from 'react-native';

type Props = {
  currentTime: number;
  duration: number;
  onSlideCapture: (params: any) => any;
  onSlideStart: (params: any) => any;
  onSlideComplete: (params: any) => any;
  onToggleFullScreen: () => any;
  onToggleEpisodes: () => any;
  isFullScreen: boolean;
  videoType: string;
};

export default ({
  currentTime,
  duration,
  onSlideCapture,
  onSlideStart,
  onSlideComplete,
  onToggleFullScreen,
  onToggleEpisodes,
  isFullScreen,
  videoType,
}: Props) => {
  useEffect(() => { }, []);

  const getMinutesFromSeconds = (time: number) => {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0;
    const seconds = Math.floor(time - minutes * 60);

    return `${minutes >= 10 ? minutes : '0' + minutes}:${seconds >= 10 ? seconds : '0' + seconds
      }`;
  };

  const onSlideProgressBar = (time: any) => {
    onSlideCapture(time);
  };

  const onPressFullScreenBtn = () => {
    onToggleFullScreen();
  };

  const handleShowEpisodes = () => {
    onToggleEpisodes();
  };
  const thumbImage = require('../../../static/images/white-dot.png');

  const position = getMinutesFromSeconds(currentTime);
  const fullDuration = getMinutesFromSeconds(duration);

  return (
    <>
      {!isFullScreen ? (
        <View style={styles.wrapper}>
          {videoType === 'vod' && Platform.OS === 'ios' && (
            <Slider
              value={currentTime}
              minimumValue={0}
              maximumValue={duration}
              step={1}
              onValueChange={onSlideProgressBar}
              onSlidingStart={onSlideStart}
              onSlidingComplete={onSlideComplete}
              minimumTrackTintColor={'#FAC33D'}
              maximumTrackTintColor={'#FFFFFF'}
              thumbTintColor={'#FFFFFF'}
              thumbImage={thumbImage}
              style={{
                flex: 12,
                marginTop: 2,
              }}
            />
          )}
          {videoType === 'vod' && Platform.OS !== 'ios' && (
            <Slider
              value={currentTime}
              minimumValue={0}
              maximumValue={duration}
              step={1}
              onValueChange={onSlideProgressBar}
              onSlidingStart={onSlideStart}
              onSlidingComplete={onSlideComplete}
              minimumTrackTintColor={'#FAC33D'}
              maximumTrackTintColor={'#FFFFFF'}
              thumbTintColor={'#FFFFFF'}
              style={{ flex: 12, marginTop: 2 }}
            />
          )}
          <View>
            {videoType === 'vod' && (
              <View style={styles.timeWrapper}>
                <Text style={styles.timeLeft}>
                  {new Date(currentTime * 1000).toISOString().substring(11, 19)}
                </Text>
                <Text style={styles.timeRight}>
                  {` / ${new Date(duration * 1000).toISOString().substring(11, 19)}`}
                </Text>
              </View>
            )}
          </View>
          <Pressable
            onPress={onPressFullScreenBtn}
            style={{ alignItems: 'flex-end' }}>
            <FullScreen width={30} height={30} />
          </Pressable>
        </View>
      ) : (
        <View style={styles.landscapeContainer}>
          <View style={styles.wrapper}>
            {videoType === 'vod' && Platform.OS === 'ios' && (
              <Slider
                value={currentTime}
                minimumValue={0}
                maximumValue={duration}
                step={1}
                onValueChange={onSlideProgressBar}
                onSlidingStart={onSlideStart}
                onSlidingComplete={onSlideComplete}
                minimumTrackTintColor={'#FAC33D'}
                maximumTrackTintColor={'#FFFFFF'}
                thumbTintColor={'#FFFFFF'}
                thumbImage={thumbImage}
                style={{ flex: 16, marginTop: 2 }}
              />
            )}
            {videoType === 'vod' && Platform.OS !== 'ios' && (
              <Slider
                value={currentTime}
                minimumValue={0}
                maximumValue={duration}
                step={1}
                onValueChange={onSlideProgressBar}
                onSlidingStart={onSlideStart}
                onSlidingComplete={onSlideComplete}
                minimumTrackTintColor={'#FAC33D'}
                maximumTrackTintColor={'#FFFFFF'}
                thumbTintColor={'#FFFFFF'}
                style={{ flex: 16, marginTop: 2 }}
              />
            )}
            <View>
              {videoType === 'vod' && (
                <View style={styles.timeWrapperLandscape}>
                  <Text style={styles.timeLeftLandscape}>
                    {new Date(currentTime * 1000).toISOString().substring(11, 19)}
                  </Text>
                  <Text style={styles.timeRightLandscape}>
                    {` / ${new Date(duration * 1000).toISOString().substring(11, 19)}`}
                  </Text>
                </View>
              )}
            </View>
            <View>
              <Pressable
                style={styles.containerItem}
                onPress={onPressFullScreenBtn}>
                <MinimizeScreen width={30} height={30} />
              </Pressable>
            </View>
          </View>
          {/* <View style={styles.buttonsContainer}>
                        <View style={{ flex: 7 }}>
                            <TouchableWithoutFeedback onPress={handleShowEpisodes}>
                                <Unlock width={30} height={30} />
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.buttonsSubContainer}>
                            <TouchableWithoutFeedback style={styles.containerItem} onPress={handleShowEpisodes}>
                                <Text>1.25x</Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback style={styles.containerItem} onPress={handleShowEpisodes}>
                                <NextEpisode width={30} height={30} />
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback style={styles.containerItem} onPress={handleShowEpisodes}>
                                <Episodes width={30} height={30} />
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback style={styles.containerItem} onPress={onPressFullScreenBtn}>
                                <MinimizeScreen width={30} height={30} />
                            </TouchableWithoutFeedback>
                        </View>
                    </View> */}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  // landscapeContainer: {
  //     flex: 1,
  //     flexDirection: 'column',
  //     paddingHorizontal: 20,
  //     zIndex: 1
  // },
  landscapeContainer: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    zIndex: 1,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  // buttonsSubContainer: {
  //     flex: 2,
  //     flexDirection: 'row',
  //     justifyContent: 'space-between'
  // },
  buttonsSubContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  containerItem: {
    paddingRight: 20,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
  },
  timeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 4,
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
});
