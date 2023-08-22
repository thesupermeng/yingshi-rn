import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  StatusBar,
  AppState,
  Text,
} from 'react-native';

import Video from 'react-native-video';
import { useTheme, useNavigation } from '@react-navigation/native';
import { debounce } from 'lodash';

import { Dimensions } from 'react-native';
import VideoControlsOverlay from './VideoControlsOverlay';
import Orientation from 'react-native-orientation-locker';
import WebView from 'react-native-webview';
import FastImage from 'react-native-fast-image';
import FastForwardProgressIcon from '../../../static/images/fastforwardProgress.svg';
import RewindProgressIcon from '../../../static/images/rewindProgress.svg';

import {
  LiveTVStationItem,
  VodEpisodeListType,
  VodType,
} from '../../types/ajaxTypes';

interface Props {
  vod_url?: string;
  vodTitle?: string;
  currentTimeRef?: any;
  initialStartTime?: number;
  videoType?: string;
  vod_source?: any;
  onBack?: () => any;
  useWebview?: boolean;
  onEpisodeChange?: any;
  episodes?: VodEpisodeListType;
  activeEpisode?: number;
  rangeSize?: number;
  autoPlayNext?: boolean;
  onShare?: () => any;
  movieList?: VodType[];
  showGuide?: boolean;
  showMoreType?: 'episodes' | 'streams' | 'movies' | 'none';
  streams?: LiveTVStationItem[];
  isFetchingRecommendedMovies?: boolean;
}

type RefHandler = {
  showControls: () => void;
  hideControls: () => void;
  toggleControls: () => void;
  isVisible: boolean;
  hideSlider: () => void;
  isLocked: boolean;
  toggleLock: () => void;
};

export default ({
  vod_url,
  currentTimeRef = 0,
  initialStartTime = 0,
  vodTitle = '',
  videoType = 'vod',
  vod_source,
  onBack,
  useWebview = false,
  activeEpisode,
  onEpisodeChange,
  rangeSize,
  episodes,
  autoPlayNext = true,
  onShare = () => { },
  movieList = [],
  showGuide = false,
  streams = [],
  showMoreType = 'none',
  isFetchingRecommendedMovies = false,
}: Props) => {
  const videoPlayerRef = React.useRef<Video | null>();
  const { colors, spacing, textVariants, icons } = useTheme();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(initialStartTime);
  const [isBuffering, setIsBuffering] = useState(false);
  const [seekDirection, setSeekDirection] = useState<
    'backward' | 'none' | 'forward'
  >('none');
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const controlsRef = useRef() as React.MutableRefObject<RefHandler>;
  const accumulatedSkip = useRef(0);
  const [isLastForward, setIsLastForward] = useState(true);

  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  const navigation = useNavigation();

  const onBuffer = (bufferObj: any) => {
    if (!bufferObj.isBuffering) {
      accumulatedSkip.current = 0;
    }
    setIsBuffering(bufferObj.isBuffering);
  };

  // New state to keep track of app's background/foreground status
  const [isInBackground, setIsInBackground] = useState(false);
  // useEffect(() => {
  //   if (!isPotrait) {
  //     setIsFullScreen(true);
  //     navigation.setOptions({
  //       gestureEnabled: false,
  //     })
  //   } else {
  //     setIsFullScreen(false);
  //     navigation.setOptions({
  //       gestureEnabled: true,
  //     })
  //   }
  // }, [isPotrait]);

  const handleOrientation = useCallback((orientation: any) => {
    if (!Orientation.isLocked()) {
      if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
        setIsFullScreen(true);
      } else {
        setIsFullScreen(false);
      }
    }
  }, [setIsFullScreen, Orientation]);

  useEffect(() => {
    Orientation.addDeviceOrientationListener(handleOrientation);
    return () => {
      Orientation.removeDeviceOrientationListener(handleOrientation);
      Orientation.unlockAllOrientations();
    };
  }, [Orientation, handleOrientation]);


  const onGoBack = () => {
    if (onBack !== undefined) {
      onBack();
    } else {
      console.log('BAD')
      if (isFullScreen) {
        Orientation.lockToPortrait();
        // StatusBar.setHidden(false);
        setIsFullScreen(false);
      } else {
        // setTimeout(() => setIsPaused(true))
        navigation.goBack();
      }
    }
  };

  useEffect(() => {
    console.log('Unlocking all')
    Orientation.unlockAllOrientations();
    // ... (rest of the useEffect hook remains unchanged)
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    // here check swipe back event, and paused video
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
      if (!isPaused) {
        setIsPaused(true);
        setTimeout(() => {
          navigation.dispatch(e.data.action);
        }, 100);
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  // Handle app's background/foreground status
  const handleAppStateChange = (nextAppState: any) => {
    setIsInBackground(nextAppState !== 'active');
    if (nextAppState === 'active') {
      setIsPaused(false); // Resume video when app becomes active (foreground)
    }
  };

  const onToggleFullScreen = useCallback(() => {
    Orientation.getOrientation(orientation => {
      if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
        Orientation.lockToPortrait();
        setIsFullScreen(false);
      } else {
        Orientation.lockToLandscape();
        setIsFullScreen(true);
      }
    })
  }, [isFullScreen, Orientation]);

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
    hideSeekProgress();
    time = Math.min(Math.max(time, 0), duration);
    try {
      if (videoPlayerRef.current && !isNaN(time)) {
        videoPlayerRef.current.seek(time);
        setCurrentTime(time);
      }
    } catch (err) {
      console.log('Error!', err, time);
    }
  };

  const onSeekGesture = (time: number) => {
    if (currentTime < time) {
      setSeekDirection('forward');
    } else {
      setSeekDirection('backward');
    }
    onSeek(time);
  };

  const onVideoProgessing = (data: any) => {
    setCurrentTime(data.currentTime);
    currentTimeRef.current = data.currentTime;
  };

  const onSkip = (time: any) => {
    if (videoPlayerRef?.current) {
      if (time > 0 && isLastForward == false) {
        setIsLastForward(true);
        accumulatedSkip.current = 0;
      }

      if (time < 0 && isLastForward == true) {
        setIsLastForward(false);
        accumulatedSkip.current = 0;
      }

      accumulatedSkip.current += time;
      let currentTime = currentTimeRef.current + time;
      currentTime = Math.max(0, currentTime);
      currentTimeRef.current = currentTime;
      videoPlayerRef.current.seek(currentTime);
      setCurrentTime(currentTime);
    }
  };

  const onTogglePlayPause = () => {
    setIsPaused(!isPaused);
  };

  const hideSeekProgress = useCallback(
    debounce(() => setSeekDirection('none'), 300),
    [],
  );

  const changeEpisodeAndPlay = (ep: any) => {
    setIsPaused(false);
    onEpisodeChange(ep);
  };

  const getNextEpisode = () => {
    if (
      autoPlayNext &&
      activeEpisode !== undefined &&
      episodes &&
      activeEpisode < episodes?.url_count - 1
    ) {
      return () => changeEpisodeAndPlay(episodes.urls[activeEpisode + 1].nid);
    }
    return undefined;
  };

  return (
    <View style={styles.container}>
      <View style={{ ...styles.bofangBox }}>
        {(vod_url !== undefined || vod_source !== undefined) &&
          (useWebview ? (
            <WebView
              resizeMode="contain"
              source={vod_url === undefined ? vod_source : { uri: vod_url }}
              style={styles.video}
              onLoad={onVideoLoaded}
            />
          ) : (
            <Video
              mixWithOthers="mix"
              disableFocus
              rate={playbackRate}
              ignoreSilentSwitch="ignore"
              ref={ref => (videoPlayerRef.current = ref)}
              fullscreen={isFullScreen}
              onBuffer={onBuffer}
              paused={isPaused || isInBackground} // Pause video when app is in the background
              resizeMode="contain"
              onEnd={() => {
                const nextEpi = getNextEpisode();
                if (nextEpi !== undefined) {
                  nextEpi();
                }
              }}
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
              style={styles.video}
            />
          ))}
      </View>
      {(vod_url !== undefined || vod_source !== undefined) && (
        <VideoControlsOverlay
          ref={controlsRef}
          onVideoSeek={onSeek}
          onSeekGesture={onSeekGesture}
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
          playbackRate={playbackRate}
          onPlaybackRateChange={(rate: number) => {
            setPlaybackRate(rate);
          }}
          activeEpisode={activeEpisode}
          episodes={episodes}
          onEpisodeChange={changeEpisodeAndPlay}
          rangeSize={rangeSize}
          onNextEpisode={getNextEpisode()}
          accumulatedSkip={accumulatedSkip.current}
          onShare={onShare}
          movieList={movieList}
          showGuide={showGuide}
          showMoreType={showMoreType}
          streams={streams}
          isFetchingRecommendedMovies={isFetchingRecommendedMovies}
        />
      )}
      {(isBuffering || seekDirection !== 'none') && (
        <View
          style={{
            ...styles.buffering,
            top: isFullScreen ? height / 2 - 30 : (width * 9) / 32 - 45,
          }}>
          {seekDirection !== 'none' ? (
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.4)',
                padding: 8,
                borderRadius: 8,
              }}>
              {seekDirection === 'forward' ? (
                <FastForwardProgressIcon height={50} width={50} />
              ) : (
                <RewindProgressIcon height={50} width={50} />
              )}
              {duration > 3600 ? (
                <Text
                  style={{
                    textAlign: 'center',
                  }}>
                  <Text
                    style={{ ...textVariants.header, color: colors.primary }}>
                    {new Date(currentTime * 1000)
                      .toISOString()
                      .substring(11, 19)}
                  </Text>
                  <Text style={{ ...textVariants.header }}>
                    {` / ${new Date(duration * 1000)
                      .toISOString()
                      .substring(11, 19)}`}
                  </Text>
                </Text>
              ) : (
                <Text
                  style={{
                    textAlign: 'center',
                  }}>
                  <Text
                    style={{ ...textVariants.header, color: colors.primary }}>
                    {new Date(currentTime * 1000)
                      .toISOString()
                      .substring(14, 19)}
                  </Text>
                  <Text style={{ ...textVariants.header }}>
                    {` / ${new Date(duration * 1000)
                      .toISOString()
                      .substring(14, 19)}`}
                  </Text>
                </Text>
              )}
            </View>
          ) : (
            <FastImage
              source={require('../../../static/images/videoBufferLoading.gif')}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  bofangBox: {
    aspectRatio: 16 / 9,
    maxHeight: '100%',
    width: '100%',
    maxWidth: '100%'
  },
  buffering: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'yellow',
    position: 'absolute',
    width: '100%',
  },
  container: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black',
  },
});
