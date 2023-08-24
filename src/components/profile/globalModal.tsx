import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';

export const GobalModal = (props: any) => {
  const {height} = useWindowDimensions();
  return (
    <Modal
      visible={props.show}
      transparent={props.transparent ?? true}
      onRequestClose={props.dismiss}
      animationType={props.animationType ?? 'none'}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, flexDirection: 'column-reverse'}}
        keyboardVerticalOffset={props.keyboardOffset}>
        <Pressable
          onPress={props.dismiss}
          style={{
            backgroundColor: 'rgba(0,0,0,0.4)',
            width: '100%',
            height: '200%',
            position: 'absolute',
          }}
        />
        <View
          style={{...styles.panel, height: height * props.heightFloat ?? 0.4}}>
          {props.children}
          {/* <InputItem /> */}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  panel: {
    marginBottom: 0,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: 'white',
  },
  modalContent: {
    height: 200,
    width: 300,
    justifyContent: 'center',
    margin: '5%',
    backgroundColor: 'green',
  },
  modalOverlay: {
    height: '60%',
    width: '100%',
  },
  modalOverlayColor: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});
