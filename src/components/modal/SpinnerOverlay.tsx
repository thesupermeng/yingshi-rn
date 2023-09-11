// SpinnerOverlay.js
import React from 'react';
import {Modal, ActivityIndicator, View, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'; // Import SafeAreaView

const SpinnerOverlay = ({visible}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => {}} // To prevent closing by tapping outside
    >
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
          ...Platform.select({
            ios: {
              paddingBottom: 0, // Prevent iOS SafeAreaView from pushing content up
            },
          }),
        }}>
        <ActivityIndicator size="large" color="#FAC33D" />
      </SafeAreaView>
    </Modal>
  );
};

export default SpinnerOverlay;
