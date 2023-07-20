import React, {useEffect, useState, useMemo, useCallback, useRef} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Video from 'react-native-video';
import {useTheme, useNavigation} from '@react-navigation/native';
import {useOrientation} from '../../hooks/useOrientation';
import PlayFullScreenGesture from '../gestures/vod/PlayFullScreenGesture';
import {debounce} from 'lodash';

import {Dimensions} from 'react-native';
import VideoControlsOverlay from './VideoControlsOverlay';
import Orientation from 'react-native-orientation-locker';
import WebView from 'react-native-webview';

interface Props {
  vod_url?: string;
  vodTitle?: string;
  currentTimeRef?: any;
  initialStartTime?: number;
  videoType?: string;
  vod_source?: any;
  onBack?: () => any;
  useWebview?: boolean;
}

const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;

export default ({
  vod_url,
  currentTimeRef = 0,
  initialStartTime = 0,
  vodTitle = '',
  videoType = 'vod',
  vod_source,
  onBack,
  useWebview = false,
}: Props) => {
  // console.log('vod_url is', vod_url)
  const videoPlayerRef = React.useRef<Video | null>();
  const {colors, spacing, textVariants, icons} = useTheme();
  const isPotrait = useOrientation();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [isPaused, setIsPaused] = useState(false);
  const [isShowControls, setIsShowControls] = useState(false);
  const [disableFullScreenGesture, setDisableFullScreenGesture] =
    useState(false);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(initialStartTime);

  const navigation = useNavigation();

  useEffect(() => {
    if (!isPotrait) {
      setIsFullScreen(true);
    } else {
      setIsFullScreen(false);
    }
  }, [isPotrait]);

  useEffect(() => {
    let intervalId = 0;
    setCurrentTime(currentTimeRef.current);
    if (isShowControls) {
      intervalId = setInterval(() => {
        setCurrentTime(currentTimeRef.current);
      }, 500);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isShowControls, currentTimeRef]);

  useEffect(() => {
    Orientation.addOrientationListener(handleOrientation);
    return () => {
      Orientation.removeOrientationListener(handleOrientation);
    };
  }, []);

  const handleOrientation = (orientation: any) => {
    if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
      StatusBar.setHidden(true);
      Orientation.lockToLandscapeLeft();
      setIsFullScreen(true);
    } else {
      StatusBar.setHidden(false);
      Orientation.lockToPortrait();
      setIsFullScreen(false);
    }
  };

  const onToggleFullScreen = useCallback(() => {
    if (isFullScreen) {
      Orientation.lockToPortrait();
      Orientation.unlockAllOrientations();
      StatusBar.setHidden(false);
      setIsFullScreen(false);
    } else {
      Orientation.lockToLandscapeLeft();
      // Orientation.unlockAllOrientations();
      StatusBar.setHidden(true);
      setIsFullScreen(true);
    }
  }, [isFullScreen, Orientation]);

  const toggleControls = () => {
    setIsShowControls(prev => !prev);
    setDisableFullScreenGesture(prev => !prev);
    debouncedFn();
  };

  const onVideoLoaded = (data: any) => {
    setDuration(data.duration);
    if (currentTimeRef) {
      currentTimeRef.current = data.currentTime;
    }
    if (videoPlayerRef.current) {
      videoPlayerRef.current.seek(initialStartTime);
    }
  };

  const onSeek = (time: number) => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.seek(time);
    }
  };

  const onVideoProgessing = (data: any) => {
    currentTimeRef.current = data.currentTime;
  };

  const onSkip = (time: any) => {
    if (videoPlayerRef?.current) {
      let currentTime = currentTimeRef.current + time;
      currentTime = Math.max(0, currentTime); // Ensure currentTime is not negative
      currentTimeRef.current = currentTime;
      videoPlayerRef.current.seek(currentTime);
    }
    // setCurrentTime(currentTime + time);
    // if (currentTimeRef) {
    //   console.log('pass 2nd  111111');
    //   currentTimeRef.current += time;
    //   currentTimeRef.current < 0
    //     ? (currentTimeRef.current = 0)
    //     : currentTimeRef.current;
    // }
    debouncedFn();
  };

  const onTogglePlayPause = () => {
    setIsPaused(prev => !prev);
    debouncedFn();
  };

  const onTouchScreen = useCallback(() => {
    setDisableFullScreenGesture(prev => !prev);
    setIsShowControls(prev => !prev);
    debouncedFn();
  }, []);

  const changeControlsState = () => {
    setIsShowControls(prev => false);
    setDisableFullScreenGesture(prev => false);

    return;
  };

  const debouncedFn = useCallback(debounce(changeControlsState, 4000), []);

  const onGoBack = () => {
    if (onBack !== undefined) {
      onBack();
    } else {
      if (isFullScreen) {
        Orientation.lockToPortrait();

        StatusBar.setHidden(false);
        setIsFullScreen(false);
      } else {
        setIsPaused(true);

        setTimeout(() => {
          navigation.goBack();
        });

        // navigation.goBack();
      }
    }
  };

  return (
    <>
      {isFullScreen && (
        <PlayFullScreenGesture
          onScreenTouched={onTouchScreen}
          disableFullScreenGesture={disableFullScreenGesture}
        />
      )}
      <TouchableWithoutFeedback onPress={toggleControls}>
        <View style={styles.bofangBox}>
          {(vod_url !== undefined || vod_source !== undefined) &&
            (useWebview ? (
              <WebView
                resizeMode="contain"
                source={vod_url === undefined ? vod_source : {uri: vod_url}}
                // style={[
                //   { backgroundColor: 'black' },
                //   isFullScreen
                //     ? {
                //       // aspectRatio: 803 / 464,
                //       alignSelf: 'center',
                //     }
                //     : {},
                // ]}
                style={
                  !isFullScreen ? styles.videoPotrait : styles.videoLandscape
                }
                onLoad={onVideoLoaded}
                // onLoadEnd={onEnd}
                // renderError={onError}
                // renderLoading={<Loader />}
              />
            ) : (
              <Video
                ignoreSilentSwitch={'ignore'}
                ref={ref => (videoPlayerRef.current = ref)}
                fullscreen={isFullScreen}
                paused={isPaused}
                resizeMode="contain"
                source={
                  vod_source !== undefined
                    ? vod_source
                    : {
                        uri: vod_url,
                        headers: {
                          origin: 'https://v.kylintv.com',
                          referer: 'https://v.kylintv.com',
                        },
                      }
                }
                // source={{
                //   uri: 'https://h5cdn2.kylintv.tv/live/ctshd_iphone.m3u8',
                //   headers: {
                //     origin: 'https://v.kylintv.com',
                //     referer: 'https://v.kylintv.com/'
                //   }}}
                onLoad={onVideoLoaded}
                progressUpdateInterval={1000}
                onProgress={onVideoProgessing}
                onSeek={data => {
                  if (currentTimeRef) {
                    currentTimeRef.current = data.currentTime;
                  }
                }}
                style={
                  !isFullScreen ? styles.videoPotrait : styles.videoLandscape
                }
              />
            ))}
          {(vod_url !== undefined || vod_source !== undefined) &&
            isShowControls && (
              <VideoControlsOverlay
                onVideoSeek={onSeek}
                currentTime={currentTime}
                duration={duration}
                onFastForward={onSkip}
                paused={isPaused}
                isFullScreen={isFullScreen}
                onTogglePlayPause={onTogglePlayPause}
                headerTitle={vodTitle}
                onHandleFullScreen={onToggleFullScreen}
                onHandleGoBack={onGoBack}
                videoType={videoType}
              />
            )}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  videoPotrait: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
  },
  videoLandscape: {
    flex: 1,
    maxHeight: height,
    width: '100%',
    backgroundColor: 'black',
  },
  bofangBox: {
    aspectRatio: 428 / 242,
    width: '100%',
  },
  videoHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 50,
  },
});
