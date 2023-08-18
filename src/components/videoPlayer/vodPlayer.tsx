import React, {useEffect, useState, useCallback, useRef, useMemo} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  StatusBar,
  AppState,
  Text,
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
import FastImage from 'react-native-fast-image';
import FastForwardProgressIcon from '../../../static/images/fastforwardProgress.svg';
import RewindProgressIcon from '../../../static/images/rewindProgress.svg';
import ProgressGestureControl from '../gestures/vod/ProgressGestureControl';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {runOnJS} from 'react-native-reanimated';
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
  onShare = () => {},
  movieList = [],
  showGuide = false,
  streams = [],
  showMoreType = 'none',
  isFetchingRecommendedMovies = false,
}: Props) => {
  const videoPlayerRef = React.useRef<Video | null>();
  const {colors, spacing, textVariants, icons} = useTheme();
  const isPotrait = useOrientation();
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

  const toggleControls = () => {
    controlsRef.current.toggleControls();
  };

  const navigation = useNavigation();

  const onBuffer = (bufferObj: any) => {
    if (!bufferObj.isBuffering) {
      accumulatedSkip.current = 0;
    }
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

  const handleOrientation = (orientation: any) => {
    if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
      StatusBar.setHidden(true);
      setIsFullScreen(true);
      controlsRef.current.hideSlider();
    } else {
      // StatusBar.setHidden(false);
      setIsFullScreen(false);
    }
  };
  useEffect(() => {
    Orientation.addOrientationListener(handleOrientation);
    return () => {
      Orientation.removeOrientationListener(handleOrientation);
    };
  }, [handleOrientation, Orientation, StatusBar]);

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

  const onToggleFullScreen = useCallback(() => {
    if (isFullScreen) {
      Orientation.lockToPortrait();
      // StatusBar.setHidden(false);
      setIsFullScreen(false);
    } else {
      Orientation.lockToLandscape();
      StatusBar.setHidden(true);
      setIsFullScreen(true);
    }
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
    console.log('time');
    console.log(time);
    if (videoPlayerRef?.current) {
      if (time > 0 && isLastForward == false) {
        console.log(1112221);

        console.log(isLastForward);
        setIsLastForward(true);
        accumulatedSkip.current = 0;
      }

      if (time < 0 && isLastForward == true) {
        console.log(1111);

        console.log(isLastForward);
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

  const onGoBack = () => {
    if (onBack !== undefined) {
      onBack();
    } else {
      if (isFullScreen) {
        Orientation.lockToPortrait();
        // StatusBar.setHidden(false);
        setIsFullScreen(false);
      } else {
        setIsPaused(true);
        setTimeout(() => {
          navigation.goBack();
        });
      }
    }
  };

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

  // here check swipe back event, and paused video
  navigation.addListener('beforeRemove', (e) => {
    if (!isPaused) {
      e.preventDefault();
      setIsPaused(true);
      setTimeout(() => {
        navigation.dispatch(e.data.action);
      }, 100);
    }
  });

  return (
    <View
      style={
        isFullScreen ? styles.containerLandscape : styles.containerPortrait
      }>
      {isFullScreen ? (
        <StatusBar hidden={true} />
      ) : (
        <StatusBar
          backgroundColor={colors.background}
          barStyle="light-content"
        />
      )}
      <View
        style={{
          ...styles.bofangBox,
          aspectRatio: isFullScreen ? 926 / 428 : 16 / 9,
        }}>
        {(vod_url !== undefined || vod_source !== undefined) &&
          (useWebview ? (
            <WebView
              resizeMode="contain"
              source={vod_url === undefined ? vod_source : {uri: vod_url}}
              style={
                !isFullScreen ? styles.videoPotrait : styles.videoLandscape
              }
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
              style={
                !isFullScreen ? styles.videoPotrait : styles.videoLandscape
              }
            />
          ))}
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
                      style={{...textVariants.header, color: colors.primary}}>
                      {new Date(currentTime * 1000)
                        .toISOString()
                        .substring(11, 19)}
                    </Text>
                    <Text style={{...textVariants.header}}>
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
                      style={{...textVariants.header, color: colors.primary}}>
                      {new Date(currentTime * 1000)
                        .toISOString()
                        .substring(14, 19)}
                    </Text>
                    <Text style={{...textVariants.header}}>
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
                style={{width: 100, height: 100}}
                resizeMode="contain"
              />
            )}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoPotrait: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
  videoLandscape: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  bofangBox: {
    aspectRatio: 16 / 9,
    maxHeight: '100%',
    maxWidth: '100%',
  },
  buffering: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'yellow',
    position: 'absolute',
    width: '100%',
  },
  containerLandscape: {
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
  },
  containerPortrait: {
    backgroundColor: 'black',
  },
});
