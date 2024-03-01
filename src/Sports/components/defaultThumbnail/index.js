import React from 'react';
import {Image, View} from 'react-native';
import {Grayscale} from 'react-native-color-matrix-image-filters';
import Config from '../../global/yys_unselected_view';
import styles from './yys_gpay_roboto';
import {yys_Build} from '../../global/yys_chart';

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
      {yys_Build.instance.funeralMode ? (
        <Grayscale style={{width: '100%'}}>{children}</Grayscale>
      ) : (
        children
      )}
    </View>
  );
};

export default DefaultThumbnail;
