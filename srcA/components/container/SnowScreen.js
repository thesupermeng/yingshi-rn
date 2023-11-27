import React from 'react';
import {Image, Dimensions, StyleSheet, View} from 'react-native';

import Snow from './Snow';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height,
    overflow: 'hidden'
  },
  bg: {
    width,
    height,
  },
});

export default function SnowScreen() {
  return (
    <View style={styles.container}>
      <Snow />
    </View>
  );
}