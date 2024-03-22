import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const SpinnerOverlay = ({visible}) => {
  if (!visible) {
    return null; 
  }

  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="#FAC33D" />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.55)', 
    flex: 1,
    zIndex: 999,
    position: 'absolute',
  },
});

export default SpinnerOverlay;
