import React, {useCallback, useRef, useState} from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import ScreenContainer from '../container/screenContainer';
import TitleWithBackButtonHeader from '../header/titleWithBackButtonHeader';
import {RootStackScreenProps} from '@type/navigationTypes';
import RNFetchBlob from 'rn-fetch-blob';
import {useNavigation, useTheme} from '@react-navigation/native';
import {debounce} from 'lodash';
import {Slider} from '@rneui/themed';
import PlayIcon from '@static/images/blackPlay.svg';
import PauseIcon from '@static/images/pause.svg';

export const LocalVideoPlayer = ({
  navigation,
  route,
}: RootStackScreenProps<'本机播放'>) => {
  const {videoInfo} = route.params;
  const {colors, textVariants} = useTheme();

  const [isBuffering, setIsBuffering] = useState(false);
  const videoRef = useRef<VideoRef>(null);
  const [duration, setDuration] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const timer = useRef<number>(0);
  const iconTimer = useRef<number>(0);
  const [showIcon, setShowIcon] = useState(false);
  const [imageContainerHeight, setImageContainerHeight] = useState(0);

  const [imageLoaded, setImageLoaded] = useState(false);
  const overlayRef = useRef(false);
  const [isVideoReadyIos, setVideoReadyIos] = useState(false);
  const [isVideoReadyAndroid, setVideoReadyAndroid] = useState(false);
  const [onSliding, setOnSliding] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const windowWidth = Dimensions.get('window').width;

  //   const handleProgress = useCallback(
  //     (progress: OnProgressData) => {
  //       if (
  //         progress.currentTime !== currentDuration &&
  //         !isVideoReadyAndroid &&
  //         Platform.OS === 'android'
  //       )
  //         setVideoReadyAndroid(true);
  //       if (!onSliding) updateVideoDuration(progress.currentTime);
  //     },
  //     [currentDuration, onSliding, isVideoReadyAndroid],
  //   );

  const showControls = () => {
    clearTimeout(timer.current);
    setShowOverlay(true);
    overlayRef.current = true;
    timer.current = setTimeout(() => setShowOverlay(false), 3000);
  };

  const handleSeek = useCallback(
    (value: number) => {
      if (disableSeek) {
        dispatch(showAdultModeVip());
        return;
      }
      if (!isVideoReadyIos && Platform.OS === 'ios') return;
      if (!isVideoReadyAndroid && Platform.OS === 'android') return;

      if (Number.isNaN(value)) {
        value = 0;
      }

      if (!onSliding) setOnSliding(true);

      showControls();
      updateVideoDuration(value);
      seekVideo(value);
    },
    [isVideoReadyIos, isVideoReadyAndroid, onSliding],
  );

  const seekVideo = useCallback(
    debounce(value => {
      if (videoRef.current) {
        videoRef.current.seek(isNaN(value) ? 0 : value);
        setOnSliding(false);
      }
    }, 1000),
    [videoRef.current],
  );

  const handlePlayPause = () => {
    clearTimeout(iconTimer.current);
    setShowIcon(true);
    if (isPause) {
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    } else {
      iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
    }
    // onManualPause(isPause);
    setIsPause(!isPause);
  };

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title={videoInfo.node?.image?.filename ?? 'Video'}
      />
      <TouchableWithoutFeedback onPress={() => showControls()}>
        <View style={{flex: 1}}>
          <Video
            source={{uri: videoInfo.node.image.uri}}
            resizeMode="contain"
            style={styles.video}
            paused={isPause}
          />
          {showOverlay && (
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 999,
              }}>
              <TouchableWithoutFeedback onPress={() => handlePlayPause()}>
                {isPause ? <PlayIcon /> : <PauseIcon />}
              </TouchableWithoutFeedback>
            </View>
          )}

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1}}>
              <Slider
                style={styles.slider}
                maximumValue={videoInfo.node.image.playableDuration}
                minimumValue={0}
                disabled={!showOverlay}
                thumbTouchSize={{width: 10, height: 10}}
                allowTouchTrack={!isBuffering}
                thumbStyle={{
                  height: showOverlay ? 8 : 1,
                  width: showOverlay ? 8 : 1,
                }}
                // value={currentDuration}
                // onValueChange={handleSeek}
                // onSlidingComplete={handleSeek}
                minimumTrackTintColor={'#ffffff80'}
                maximumTrackTintColor={'#ffffff24'}
                thumbTintColor={'#FFFFFF'}
                trackStyle={{height: 2, opacity: 1}}
              />
            </View>
            <Text style={{color: 'grey'}}>
              {videoInfo?.node?.image?.playableDuration.toString()}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  slider: {
    // position: 'absolute',
    // left: 0,
    // bottom: 0,
    // right: 0,
    height: 9,
  },
});
