import React from 'react';
import {Image, View} from 'react-native';
import {Grayscale} from 'react-native-color-matrix-image-filters';
import Config from '../../global/yys_baiduads_eighteen_view';
import styles from './yys_nbatrophy';
import {yysDefaultlogoBackward} from '../../global/yys_unlock';

const DefaultThumbnail = ({
  width,
  height,
  iconSize,
  children,
  iconDefault,
  marginEnd = 0,
  borderRadius = 0,
}) => {
  return (
    <View
      style={styles.defaultThumbnail(width, height, marginEnd, borderRadius)}>
      <Image
        style={{
          width: iconSize,
          height: iconSize,
          resizeMode: 'stretch',
          position: 'absolute',
        }}
        source={iconDefault ?? Config.defaultThumbnailBg}
      />
      {yysDefaultlogoBackward.instance.funeralMode ? (
        <Grayscale style={{width: '100%'}}>{children}</Grayscale>
      ) : (
        children
      )}
    </View>
  );
};

export default DefaultThumbnail;
