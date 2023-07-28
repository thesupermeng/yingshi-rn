import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  StatusBar,
  AppState,
} from 'react-native';

import Video from 'react-native-video';
import { useTheme, useNavigation } from '@react-navigation/native';
import { useOrientation } from '../../hooks/useOrientation';
import PlayFullScreenGesture from '../gestures/vod/PlayFullScreenGesture';
import { debounce } from 'lodash';

import { Dimensions } from 'react-native';
import VideoControlsOverlay from './VideoControlsOverlay';
import Orientation from 'react-native-orientation-locker';
import WebView from 'react-native-webview';
import FastImage from 'react-native-fast-image';

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
  const videoPlayerRef = React.useRef<Video | null>();
  const { colors, spacing, textVariants, icons } = useTheme();
  const isPotrait = useOrientation();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isShowControls, setIsShowControls] = useState(false);
  const [disableFullScreenGesture, setDisableFullScreenGesture] =
    useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(initialStartTime);
  const [isBuffering, setIsBuffering] = useState(false);

  const navigation = useNavigation();

  const onBuffer = (bufferObj: any) => {
    setIsBuffering(bufferObj.isBuffering);
  };

  // New state to keep track of app's background/foreground status
  const [isInBackground, setIsInBackground] = useState(false);

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
      }, 200);
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

  useEffect(() => {
    setIsShowControls(true);
    setDisableFullScreenGesture(prev => !prev);
    debouncedFn();
    // if (videoPlayerRef.current) {
    //   videoPlayerRef.current.seek(0);
    // }
  }, []);

  useEffect(() => {
    // ... (rest of the useEffect hook remains unchanged)
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );
    return () => {
      subscription.remove();
      // AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  // Handle app's background/foreground status
  const handleAppStateChange = (nextAppState: any) => {
    setIsInBackground(nextAppState !== 'active');
    if (nextAppState === 'active') {
      setIsPaused(false); // Resume video when app becomes active (foreground)
    }
  };

  const handleOrientation = (orientation: any) => {
    if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
      StatusBar.setHidden(true);
      setIsFullScreen(true);
    } else {
      StatusBar.setHidden(false);
      setIsFullScreen(false);
    }
  };

  const onToggleFullScreen = useCallback(() => {
    if (isFullScreen) {
      Orientation.lockToPortrait();
      StatusBar.setHidden(false);
      setIsFullScreen(false);
    } else {
      Orientation.lockToLandscape();
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
      currentTime = Math.max(0, currentTime);
      currentTimeRef.current = currentTime;
      videoPlayerRef.current.seek(currentTime);
    }
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
                source={vod_url === undefined ? vod_source : { uri: vod_url }}
                style={
                  !isFullScreen ? styles.videoPotrait : styles.videoLandscape
                }
                onLoad={onVideoLoaded}
              />
            ) : (
              <Video
                mixWithOthers="mix"
                disableFocus
                ignoreSilentSwitch="ignore"
                ref={ref => (videoPlayerRef.current = ref)}
                fullscreen={isFullScreen}
                onBuffer={onBuffer}
                paused={isPaused || isInBackground} // Pause video when app is in the background
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
          {isBuffering && (
            <View style={styles.buffering}>
              <FastImage
                source={require('../../../static/images/videoBufferLoading.gif')}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
              />
            </View>
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
  buffering: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
    color: 'yellow',
    position: 'absolute',
    top: '40%',
    left: '36%',
    zIndex: 100,
  },
});
