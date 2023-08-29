import React, { useCallback, useMemo, useRef, RefObject } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
  Text,
} from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {BottomSheetDefaultBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import {useTheme} from '@react-navigation/native';
import {Login} from './login';
import {Register} from './register';

interface Props {
  sheetRef?: RefObject<BottomSheetMethods>;
}

export const LoginModal = ({sheetRef}:Props) => {
  const {colors, textVariants, spacing} = useTheme();
  
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '75%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === 0 && sheetRef?.current) {
        sheetRef?.current.close();
    }

  }, [sheetRef]);

  const renderBackdrop = useCallback(
    (
      props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps,
    ) => <BottomSheetBackdrop {...props} />,
    [],
  );
 
  return (
      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          backgroundColor: colors.card,
        }}
        handleIndicatorStyle={{
          backgroundColor: colors.text,
        }}>
        <View
          style={{
            backgroundColor: colors.card,
            gap: spacing.m,
            zIndex: 100,
          }}
        >
         <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Login sheetRef={sheetRef}/>
          </KeyboardAvoidingView>
        </View>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  panel: {
    marginBottom: 0,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: '#000',
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
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    zIndex: 100,
  },
});
