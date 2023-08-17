import React, {useEffect, useState, useContext, useRef, memo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Play from '../../../static/images/blackPlay.svg';
import Pause from '../../../static/images/pause.svg';
import Rewind from '../../../static/images/rewind.svg';
import Fastforward from '../../../static/images/fastforward.svg';
import {BaseButton, RectButton} from 'react-native-gesture-handler';
import {useTheme} from '@react-navigation/native';

type Props = {
  fastForward: (params: any) => any;
  togglePlayPause: () => any;
  paused: boolean;
  videoType?: string;
};

const MiddleControls = ({
  fastForward,
  togglePlayPause,
  paused,
  videoType,
}: Props) => {
  const animationTimeout = useRef(-1);
  const {textVariants} = useTheme();

  const onSkip = (seconds: number) => {
    fastForward(seconds);
  };

  const onTogglePlayPause = () => {
    togglePlayPause();
  };
  return (
    <View style={styles.middleControls}>
      {videoType !== 'live' && (
        <View style={styles.leftButton}>
          <RectButton
            rippleColor="transparent"
            disallowInterruption={true}
            onPress={() => onSkip(-10)}>
            <Rewind width={55} height={55} />
          </RectButton>
        </View>
      )}
      <RectButton
        disallowInterruption={true}
        rippleColor="transparent"
        onPress={() => onTogglePlayPause()}>
        {paused ? (
          <Play width={55} height={55} />
        ) : (
          <Pause width={55} height={55} />
        )}
      </RectButton>
      {videoType !== 'live' && (
        <View style={styles.rightButton}>
          <RectButton
            rippleColor="transparent"
            disallowInterruption={true}
            onPress={() => onSkip(10)}>
            <Fastforward width={55} height={55} />
          </RectButton>
        </View>
      )}
    </View>
  );
};

export default memo(MiddleControls);

const styles = StyleSheet.create({
  middleControls: {
    paddingHorizontal: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
  },
  sideButtons: {
    paddingLeft: 46,
    paddingRight: 46,
  },
  leftButton: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 23,
  },
  rightButton: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 23,
  },
});
