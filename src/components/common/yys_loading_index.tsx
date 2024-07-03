import React, {memo, useRef} from 'react';
import {Keyboard, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

interface YysLoadingIndexProps {
  errorMessage: string;
}

function YysLoadingIndex({errorMessage = ''}: YysLoadingIndexProps) {
  //state for child

  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(20,22,25)',
      }}>
      <FastImage
        source={require('@static/images/indexTyping.gif')}
        style={{
          width: 150,
          height: 150,
          position: 'relative',
          bottom: 50,
          zIndex: -1,
        }}
        resizeMode={'contain'}
      />
      {errorMessage.length > 0 && (
        <View
          style={{
            position: 'absolute',
            left: 20,
            right: 20,
            bottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000000',
          }}>
          <Text style={{color: '#F1C557', fontSize: 16}}>{errorMessage}</Text>
        </View>
      )}
    </View>
  );
}

export default memo(YysLoadingIndex);
