import { IS_OTHER_SKIN } from '@utility/yys_ajax_switch';
import React, {memo, useRef} from 'react';
import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import RefreshIcon from '@static/images/videojsHumidityGraph.svg';
import { useTheme } from '@react-navigation/native';

interface YysLaunchProps {
  message?: string;
  retry?: boolean;
  onRetry?: () => void
}

function YysLaunchIndex({message, retry, onRetry}: YysLaunchProps) {
  //state for child
  const { colors } = useTheme();

  return (
    <View
      style={styles.container}>
      <FastImage
        source={require('@static/images/indexTyping.gif')}
        style={styles.indicator}
        resizeMode={'contain'}
      />
      { message && message.length > 0 && (
        <View style={styles.messages}>
          <Text style={{color: '#F1C557', fontSize: 16}}>
            {message}
          </Text>
          {retry && <TouchableOpacity activeOpacity={0.7} onPress={onRetry}>
            <View style={{
              ...styles.refreshBtn,
              backgroundColor: IS_OTHER_SKIN ? 'white' : colors.title,
            }}>
              <View style={{ position: 'relative', top: 2, paddingRight: 3 }}>
                <RefreshIcon />
              </View>
              <Text
                style={{
                  ...styles.refreshText,
                  color: colors.background,
                }}>
                刷新
              </Text>
            </View>
          </TouchableOpacity>}
        </View>
      )}
    </View>
  );
}

export default memo(YysLaunchIndex);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(20,22,25)',
  },
  indicator: {
    width: 150,
    height: 150,
    position: 'relative',
    bottom: 50,
    zIndex: -1,
  },
  messages: {
    position: 'absolute',
    flexDirection: "column",
    left: 20,
    right: 20,
    bottom: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000000',
  },
  refreshBtn: {
    marginTop: 20,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  refreshText: {
    color: 'white',
    textAlign: 'center',
  }
});
  