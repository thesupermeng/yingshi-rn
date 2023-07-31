import React, {useEffect, useState, useContext} from 'react';
import {View, PanResponder, StyleSheet, Dimensions, Text} from 'react-native';
import MiddleControls from './MiddleControls';
import BottomControls from './BottomControls';
import TopControls from './TopControls';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../button/backButton';
import {useNavigation, useTheme} from '@react-navigation/native';

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
};

const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;

export default ({
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
}: Props) => {
  const {colors, spacing, textVariants, icons} = useTheme();
  const navigation = useNavigation();

  const handleFastForward = (time: any) => {
    onFastForward(time);
  };

  const handlePlayPause = () => {
    onTogglePlayPause();
  };

  const onSeek = (time: number) => {
    // console.log(time);
    onVideoSeek(time);
  };

  const handleFullScreen = () => {
    onHandleFullScreen();
  };

  const goBack = () => {
    onHandleGoBack();
  };

  const handleToggleEpisodes = () => {};
  return (
    <View
      style={
        !isFullScreen
          ? styles.controlsOverlay
          : [styles.controlsOverlay, {height: isFullScreen ? height : width}]
      }>
      <View style={styles.videoHeader}>
        <BackButton btnStyle={{padding: 20}} onPress={() => goBack()} />
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
      {/* Top Controls */}
      <TopControls isFullScreen={isFullScreen} />
      {/* Middle Controls */}
      <MiddleControls
        fastForward={handleFastForward}
        togglePlayPause={handlePlayPause}
        videoType={videoType}
        paused={paused}
      />
      {/* Bottom Controls */}
      <BottomControls
        currentTime={currentTime}
        duration={duration > 0 ? duration : 0}
        onSlideStart={handlePlayPause}
        onSlideComplete={handlePlayPause}
        onSlideCapture={onSeek}
        onToggleFullScreen={handleFullScreen}
        onToggleEpisodes={handleToggleEpisodes}
        isFullScreen={isFullScreen}
        videoType={videoType}
      />

      <LinearGradient
        colors={['transparent', 'black']}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 0.8}}
        style={styles.bottomBlur}
      />
      <LinearGradient
        colors={['transparent', 'black']}
        start={{x: 0.5, y: 0.8}}
        end={{x: 0.5, y: 0}}
        style={styles.topBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  controlsOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor: '#00000090',
    backgroundColor: '#00000010',
    justifyContent: 'space-between',
    zIndex: 50
  },
  fullScreenBottom: {
    paddingBottom: 60,
  },
  bottomBlur: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 80,
    flex: 1,
    opacity: 0.8,
  },
  topBlur: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 100,
    flex: 1,
    opacity: 0.8,
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
