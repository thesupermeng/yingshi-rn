import React, { useRef, memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { PlaySvg, PauseSvg, RewindSvg, FastforwardSvg, } from '@static';

import { RectButton } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';

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
            <RewindSvg width={55} height={55} />
          </RectButton>
        </View>
      )}
      <RectButton
        disallowInterruption={true}
        rippleColor="transparent"
        onPress={() => onTogglePlayPause()}>
        {paused ? (
          <PlaySvg width={55} height={55} />
        ) : (
          <PauseSvg width={55} height={55} />
        )}
      </RectButton>
      {videoType !== 'live' && (
        <View style={styles.rightButton}>
          <RectButton
            rippleColor="transparent"
            disallowInterruption={true}
            onPress={() => onSkip(10)}>
            <FastforwardSvg width={55} height={55} />
          </RectButton>
        </View>
      )}
    </View>
  );
};

export default memo(MiddleControls);

const styles = StyleSheet.create({
  middleControls: {
    flexDirection: 'row',
  },
  sideButtons: {
    paddingLeft: 46,
    paddingRight: 46,
  },
  leftButton: {
    alignItems: 'flex-end',
    paddingRight: 23,
  },
  rightButton: {
    alignItems: 'flex-start',
    paddingLeft: 23,
  },
});
