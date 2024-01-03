import React, { useRef, memo } from 'react';
import { View, StyleSheet } from 'react-native';
import Play from '@static/images/blackPlay.svg';
import Pause from '@static/images/pause.svg';
import Rewind from '@static/images/rewind.svg';
import Fastforward from '@static/images/fastforward.svg';
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
