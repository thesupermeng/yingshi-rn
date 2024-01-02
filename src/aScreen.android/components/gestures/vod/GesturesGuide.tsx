import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PanHandler from './PanHandler';
import SystemSetting from 'react-native-system-setting';
import { BlurView } from '../../blurView';
import { RectButton } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import BrightnessGestureIcon from '@static/images/brightnessGuide.svg';
import VolumeGestureIcon from '@static/images/volumeGuide.svg';
import ProgressGestureIcon from '@static/images/progressGuide.svg';
import { useAppDispatch } from '@hooks/hooks';
import { hideVodGestureGuide } from '@redux/actions/settingsActions';

export default () => {
  const { colors, textVariants } = useTheme();
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <BlurView
        blurType="dark"
        style={styles.background}
        blurAmount={10}
        blurRadius={10}
        reducedTransparencyFallbackColor="white"
      />
      <View style={styles.instructions}>
        <View style={{ alignItems: 'flex-start' }}>
          <BrightnessGestureIcon />
        </View>
        <View style={{ alignItems: 'center', paddingVertical: 10, gap: 75 }}>
          <Text style={{ ...textVariants.header, fontWeight: '800' }}>
            播放界面操作导航
          </Text>
          <ProgressGestureIcon />
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <VolumeGestureIcon />
        </View>
      </View>
      <View>
        <RectButton
          style={{ ...styles.btn, backgroundColor: colors.primary }}
          onPress={() => dispatch(hideVodGestureGuide())}>
          <Text style={{ ...textVariants.bodyBold, color: colors.background }}>
            知道了
          </Text>
        </RectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
  },
  background: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  instructions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 55,
  },
  btn: {
    paddingHorizontal: 32,
    paddingTop: 8,
    paddingBottom: 10,
    borderRadius: 8,
  },
});
