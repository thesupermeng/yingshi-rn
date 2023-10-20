import React, {
  useState,
  RefObject,
  memo,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {useAppDispatch} from '../../hooks/hooks';
import {Login} from '../profile/login';
import {
  resetBottomSheetForm,
  showRegisterAction,
} from '../../redux/actions/screenAction';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
interface Props {
  sheetRef?: RefObject<BottomSheetMethods>;
  displayMode?: string;
}

function LoginBottomSheet({sheetRef, displayMode}: Props) {
  const dispatch = useAppDispatch();
  const [snapPoints, setSnapPoints] = useState<string[] | number[]>([1, 330]); // Initial snap points
  const renderBackdrop = useCallback(
    (
      props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps,
    ) => <BottomSheetBackdrop {...props} />,
    [],
  );

  //state for child
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (Platform.OS === 'ios'){
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setSnapPoints(['1%', '80%']);
        },
      );

      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setSnapPoints([1, 330]);
        },
      );

      // Return a cleanup function to remove event listeners
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }
  }, []);

  return (
    <BottomSheet
      ref={sheetRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={index => {
        if (index) {
          dispatch(resetBottomSheetForm());
        }
        Keyboard.dismiss();
      }}
      backdropComponent={renderBackdrop}
      backgroundStyle={{
        backgroundColor: '#171717',
      }}
      handleIndicatorStyle={{
        backgroundColor: '#414040',
        width: 50,
      }}
      onClose={() => {
        setEmail('');
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'height' : 'height'}
        style={{flex: 1, flexDirection: 'column-reverse'}}>
        <Login
          setEmail={setEmail}
          email={email}
          dismiss={() => {}}
          goToRegister={() => {
            dispatch(showRegisterAction());
          }}
        />
      </KeyboardAvoidingView>
    </BottomSheet>
  );
}

export default memo(LoginBottomSheet);
