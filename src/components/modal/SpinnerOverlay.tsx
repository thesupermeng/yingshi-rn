import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const SpinnerOverlay = ({visible}) => {
  if (!visible) {
    return null; // Don't render the overlay when it's not visible
  }

  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="#FAC33D" />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject, // Cover the entire screen
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.55)', // Semi-transparent background
    flex: 1,
    zIndex: 999,
    position: 'absolute',
  },
});

export default SpinnerOverlay;
