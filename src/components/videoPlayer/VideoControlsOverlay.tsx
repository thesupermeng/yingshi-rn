import React, { useEffect, useState, useMemo, Ref, forwardRef, useImperativeHandle, useCallback, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions, Text } from 'react-native';
import MiddleControls from './MiddleControls';
import BottomControls from './BottomControls';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../button/backButton';
import { useNavigation, useTheme } from '@react-navigation/native';
import { BaseButton, FlatList, Gesture, GestureDetector, RectButton, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import VodEpisodeSelection from '../vod/vodEpisodeSelection';
import { LiveTVStationItem, VodEpisodeListType, VodType } from '../../types/ajaxTypes';
import VodCombinedGesture from '../gestures/vod/vodCombinedGesture';
import Animated, { SlideInRight, useAnimatedStyle, withTiming, useSharedValue, FadeInDown, runOnJS } from 'react-native-reanimated';
import Orientation from 'react-native-orientation-locker';
import UnlockScreenIcon from '../../../static/images/unlockScreen.svg';
import ProjectIcon from '../../../static/images/project.svg'
import VodListVertical from '../vod/vodListVertical';
import GesturesGuide from '../gestures/vod/GesturesGuide';
import VodLiveStationListVertical from '../vod/vodLiveStationListVertical';
import FastImage from 'react-native-fast-image';

type Props = {
  currentTime: number;
  duration: number;
  onVideoSeek: (params: any) => any;
  onFastForward: (params: any) => any;
  onTogglePlayPause: () => any;
  onHandleFullScreen: () => any;
  paused: boolean;
  isFullScreen: boolean;
  headerTitle: string;
  onHandleGoBack: () => any;
  videoType: string;
  onPlaybackRateChange: (rate: number) => any;
  playbackRate: number;
  onEpisodeChange: any;
  episodes?: VodEpisodeListType
  movieList?: VodType[],
  activeEpisode?: number,
  rangeSize?: number,
  onNextEpisode?: () => any,
  onSeekGesture: (params: any) => any;
  accumulatedSkip?: number,
  onShare: () => any,
  showGuide: boolean,
  showMoreType?: 'episodes' | 'streams' | 'movies' | 'none',
  streams?: LiveTVStationItem[],
  isFetchingRecommendedMovies?: boolean
};

type RefHandler = {
  showControls: () => void,
  hideControls: () => void,
  toggleControls: () => void,
  isVisible: boolean,
  hideSlider: () => void
}

export default forwardRef<RefHandler, Props>(({
  currentTime,
  duration,
  onVideoSeek,
  onFastForward,
  onTogglePlayPause,
  onHandleFullScreen,
  paused,
  isFullScreen,
  headerTitle,
  onHandleGoBack,
  videoType,
  playbackRate,
  onPlaybackRateChange,
  activeEpisode,
  movieList = [],
  onEpisodeChange,
  rangeSize,
  episodes,
  onNextEpisode,
  onSeekGesture,
  accumulatedSkip = 0,
  onShare,
  showGuide,
  showMoreType = 'none',
  streams = [],
  isFetchingRecommendedMovies = false
}, ref) => {
  const { colors, spacing, textVariants, icons } = useTheme();
  const navigation = useNavigation();
  const [showSlider, setShowSlider] = useState<'none' | 'playback' | 'episodes' | 'movies' | 'streams'>('none');
  const [showControls, setShowControls] = useState(true);
  const hideControlsTimeout = useRef(-1);
  const opacity = useSharedValue(1);
  const timeout = useRef(-1);
  const [isLocked, setIsLocked] = useState(false);

  const height = Dimensions.get('window').width;

  // Animation function to hide the text after a delay
  const hideText = () => {
    opacity.value = withTiming(0); // Update opacity to 0 (invisible)
  };

  useEffect(() => {
    opacity.value = 1;
    // Call hideText after the specified delay
    timeout.current = setTimeout(hideText, 1000);
    // Cleanup the timer on component unmount
    return () => clearTimeout(timeout.current);
  }, [accumulatedSkip]);

  useEffect(() => {
    delayControls();
  }, []);

  const handleFastForward = (time: any) => {
    delayControls(false);
    console.log('skipping', time)
    onFastForward(time);
  };

  const handlePlayPause = () => {
    delayControls(!paused);
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    // console.log(time);
    delayControls(false);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
    onHandleFullScreen();
  };

  const goBack = () => {
    delayControls();
    onHandleGoBack();
  };

  const rewindTextAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      position: 'absolute',
      top: (height / 2) - 20,
      left: isFullScreen ? '8%' : '20%',
      backgroundColor: 'rgba(0,0,0,0.7)',
      padding: 10,
      borderRadius: 8
    };
  });

  const ffTextAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      position: 'absolute',
      right: isFullScreen ? '8%' : '20%',
      top: (height / 2) - 20,
      backgroundColor: 'rgba(0,0,0,0.7)',
      padding: 10,
      borderRadius: 8
    };
  });

  const changePlaybackRate = (rate: number) => {
    setShowSlider('none');
    onPlaybackRateChange(rate);
    delayControls(false);
  }

  useImperativeHandle(ref, () => ({
    toggleControls: () => {
      if (showControls) {
        setShowControls(false);
      } else {
        setShowSlider('none');
        setShowControls(true);
        delayControls();
      }
    },
    hideControls: () => {
      clearHidingDelay();
      setShowControls(false);
    },
    showControls: () => {
      setShowControls(true);
      delayControls();
    },
    isVisible: showControls,
    hideSlider: () => {
      setShowSlider('none')
    }
  }))

  const changeControlsState = () => {
    setShowControls(!showControls);
    delayControls();
  };

  const clearHidingDelay = () => {
    clearTimeout(hideControlsTimeout.current);
  }

  const delayControls = (delayValue?: boolean) => {
    clearHidingDelay();
    hideControlsTimeout.current = setTimeout(() => {
      console.log('debouncing', showSlider, 'is paused', paused)
      if (delayValue === undefined) {
        if (showSlider === 'none' && !paused) {
          setShowControls(false)
        }
      } else {
        setShowControls(delayValue)
      }
    }, 3000)
  }

  const toggleLock = () => {
    if (isLocked) {
      Orientation.unlockAllOrientations();
      setIsLocked(false);
    } else {
      Orientation.lockToLandscape();
      setIsLocked(true);
    }
  }
  return (
    <View
      style={{ ...styles.controlsOverlay }}>
      {
        !showControls &&
        <VodCombinedGesture
          vodType={videoType}
          enabled={showSlider === 'none'}
          onSkipBackwards={() => handleFastForward(-10)}
          onSkipForward={() => handleFastForward(10)}
          onSingleTap={changeControlsState}
          currentTime={currentTime}
          totalDuration={duration}
          onSeek={onSeekGesture}
        >
          <View style={{ flex: 1, zIndex: 50 }}></View>
        </VodCombinedGesture>
      }
      {
        accumulatedSkip < 0 &&
        <Animated.View entering={FadeInDown} style={rewindTextAnimatedStyle}>
          <Text style={textVariants.header}>{`${accumulatedSkip}s`}</Text>
        </Animated.View>
      }
      {
        accumulatedSkip > 0 &&
        <Animated.View entering={FadeInDown} style={ffTextAnimatedStyle}>
          <Text style={textVariants.header}>{`+${accumulatedSkip}s`}</Text>
        </Animated.View>
      }
      {
        showControls && isLocked &&
        <View style={styles.unlock}>
          <RectButton
            disallowInterruption={true}
            onPress={toggleLock}>
            <UnlockScreenIcon width={40} height={40} />
          </RectButton>
        </View>
      }
      {
        isFullScreen && showGuide &&
        <GesturesGuide />
      }
      {
        showControls && !isLocked && (
          showSlider !== 'none' && isFullScreen
            ? <View style={{ flex: 1, flexDirection: 'row' }}>
              <BaseButton onPress={
                () => {
                  setShowSlider('none')
                }}
                disallowInterruption={true}
                style={{ flex: 1, width: 'auto' }}></BaseButton>
              <Animated.View style={styles.sidePanel} entering={SlideInRight}>
                <LinearGradient
                  colors={['transparent', 'black']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0.1, y: 0 }}
                  style={{ height: '100%', width: '100%', opacity: 0.8, position: 'absolute' }}
                />
                <View style={{ paddingVertical: 30, paddingHorizontal: 30, flex: 1, zIndex: 99 }}>
                  {
                    showSlider === 'playback' &&
                    <Text style={{ ...textVariants.header, marginBottom: 20, textAlign: 'center' }}>倍速</Text>
                  }
                  {
                    showSlider === 'episodes' &&
                    <Text style={{ ...textVariants.header, marginBottom: 20, textAlign: 'left', marginLeft: spacing.sideOffset + 12 }}>选集</Text>
                  }
                  {
                    showSlider === 'movies' &&
                    <Text style={{ ...textVariants.header, marginBottom: 20, textAlign: 'left', marginLeft: spacing.sideOffset + 10 }}>
                      电影推荐
                    </Text>
                  }
                  {
                    showSlider === 'streams' &&
                    <Text style={{ ...textVariants.header, marginBottom: 20, textAlign: 'left', marginLeft: spacing.sideOffset + 10 }}>
                      电视台推荐
                    </Text>
                  }
                  {
                    showSlider === 'playback' &&
                    <FlatList
                      data={[0.5, 0.75, 1, 1.25, 1.5, 2, 3]}
                      // initialScrollIndex={}
                      renderItem={({ item }) =>
                        <RectButton disallowInterruption={true} style={styles.rateButtons} onPress={() => {
                          changePlaybackRate(item);
                        }}>
                          <Text style={{
                            ...textVariants.header,
                            color: item === playbackRate ? colors.primary : colors.text
                          }}>
                            {`${item}X`}
                          </Text>
                        </RectButton>
                      }
                    />
                  }
                  {
                    showSlider === 'episodes' &&
                    <VodEpisodeSelection
                      activeEpisode={activeEpisode}
                      episodes={episodes}
                      onConfirm={onEpisodeChange}
                      rangeSize={rangeSize}
                      onCancel={() => { }}
                    />
                  }
                  {
                    showSlider === 'movies' &&
                    <View style={{ paddingLeft: spacing.sideOffset + 10, flex: 1 }}>
                      {
                        isFetchingRecommendedMovies
                          ? <View style={{ ...styles.loading }}>
                            <FastImage
                              style={{ height: 80, width: 80 }}
                              source={require('../../../static/images/loading-spinner.gif')}
                              resizeMode={FastImage.resizeMode.contain}
                            />
                          </View>
                          : <VodListVertical vods={movieList.slice(0, 6)} outerRowPadding={50} />
                      }
                    </View>
                  }
                  {
                    showSlider === 'streams' &&
                    <View style={{ paddingLeft: spacing.sideOffset + 10 }}>
                      <View style={{ alignItems: 'center' }}>
                        <VodLiveStationListVertical itemList={streams} numOfRows={3} />
                      </View>
                    </View>
                  }
                </View>
              </Animated.View>
            </View>
            : <View style={{ height: '100%', flex: 1 }}>
              {/* Top Controls */}
              <LinearGradient
                colors={['transparent', 'black']}
                start={{ x: 0.5, y: 0.8 }}
                end={{ x: 0.5, y: 0 }}
                style={styles.topBlur}
              >
                <View style={{...styles.videoHeader, marginRight: isFullScreen ? 20 : 0}}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', flexShrink: 1, paddingRight: 10 }}>
                    <BackButton onPress={() => goBack()} />
                    <Text
                      style={{
                        ...textVariants.body,
                        fontSize: 17,
                        fontWeight: '600',
                        color: colors.text,
                        flex: 1,
                        paddingBottom: 3,
                      }}
                      numberOfLines={1}>
                      {headerTitle}
                    </Text>
                  </View>
                  <RectButton
                    disallowInterruption={true}
                    onPress={onShare}>
                    <ProjectIcon width={30} height={30} />
                  </RectButton>
                </View>
              </LinearGradient>
              {/* Middle Controls */}
              <VodCombinedGesture
                vodType={videoType}
                enabled={showSlider === 'none'}
                onSkipBackwards={() => handleFastForward(-10)}
                onSkipForward={() => handleFastForward(10)}
                onSingleTap={changeControlsState}
                currentTime={currentTime}
                totalDuration={duration}
                onSeek={onSeekGesture}
              >
                <MiddleControls
                  fastForward={handleFastForward}
                  togglePlayPause={handlePlayPause}
                  videoType={videoType}
                  paused={paused}
                />
              </VodCombinedGesture>
              {/* Bottom Controls */}
              <LinearGradient
                colors={['transparent', 'black']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 0.8 }}
                style={styles.bottomBlur}
              >
                <BottomControls
                  currentTime={currentTime}
                  duration={duration > 0 ? duration : 0}
                  onSlideStart={handlePlayPause}
                  onSlideComplete={handlePlayPause}
                  onSlideCapture={onSeek}
                  onToggleFullScreen={handleFullScreen}
                  onEpisodeSelection={() => {
                    clearHidingDelay();
                    setShowSlider(showMoreType);
                  }}
                  isFullScreen={isFullScreen}
                  videoType={videoType}
                  onPlaybackRateChange={() => {
                    clearHidingDelay();
                    setShowSlider('playback');
                  }}
                  playbackRate={playbackRate}
                  onNextEpisode={onNextEpisode}
                  onLock={toggleLock}
                  showMoreType={showMoreType}
                />
              </LinearGradient>
            </View>
        )
      }
    </View >
  );
});

const styles = StyleSheet.create({
  controlsOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor: 'red',
    width: '100%',
    // backgroundColor: '#00000010',
  },
  fullScreenBottom: {
    paddingBottom: 60,
  },
  bottomBlur: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99
  },
  topBlur: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 99
  },
  videoHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sidePanel: {
    height: '100%',
    width: 'auto',
    maxWidth: 400,
    minWidth: 200
    // flex: 1
  },
  rateButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  },
  unlock: {
    position: 'absolute',
    bottom: 20,
    left: 20
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: 300
  },
});
