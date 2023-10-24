import React, {
  useState,
  memo,
} from 'react';
import {
  Keyboard,
} from 'react-native';
import {useAppDispatch} from '../../hooks/hooks';
import {
  resetBottomSheetForm,
  showLoginAction,
} from '../../redux/actions/screenAction';
import {Register} from '../profile/register';
import BottomSheet from '../bottomSheet/bottomSheet';

interface Props {
  isVisible?: boolean;
  handleClose?: () => any;
  displayMode?: string;
}

function RegisterBottomSheet({isVisible = false, handleClose, displayMode}: Props) {
  const dispatch = useAppDispatch();

  //child state
  const [email, setEmail] = useState('');
  const [referralCode, setReferralCode] = useState('');

  return (
    <BottomSheet
      isVisible={isVisible}
      containerStyle={{
        paddingBottom: 50,
      }}
      onBackdropPress={() => {
        if(handleClose) handleClose();

        dispatch(resetBottomSheetForm());
        Keyboard.dismiss();
        setReferralCode('');
        setEmail('');
      }}
    >
      <Register
        email={email}
        referralCode={referralCode}
        setEmail={setEmail}
        setReferralCode={setReferralCode}
        goToLogin={() => {
          dispatch(showLoginAction());
        }}
      />
    </BottomSheet>
  );
}

export default memo(RegisterBottomSheet);
