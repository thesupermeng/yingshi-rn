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
import {
  resetBottomSheetForm,
  showLoginAction,
} from '../../redux/actions/screenAction';
import {Register} from '../profile/register';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

interface Props {
  sheetRef?: RefObject<BottomSheetMethods>;
  displayMode?: string;
}

function RegisterBottomSheet({sheetRef, displayMode}: Props) {
  const dispatch = useAppDispatch();
  const [snapPoints, setSnapPoints] = useState<string[] | number[]>([1, 400]); // Initial snap points
  const renderBackdrop = useCallback(
    (
      props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps,
    ) => <BottomSheetBackdrop {...props} />,
    [],
  );

  //child state
  const [email, setEmail] = useState('');
  const [referralCode, setReferralCode] = useState('');

  useEffect(() => {
    if (Platform.OS === 'ios'){
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setSnapPoints(['1%', '85%']);
        },
      );

      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setSnapPoints([1, 400]);
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
        setReferralCode('');
        setEmail('');
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, flexDirection: 'column-reverse'}}>
        <Register
          email={email}
          referralCode={referralCode}
          setEmail={setEmail}
          setReferralCode={setReferralCode}
          goToLogin={() => {
            dispatch(showLoginAction());
          }}
        />
      </KeyboardAvoidingView>
    </BottomSheet>
  );
}

export default memo(RegisterBottomSheet);
