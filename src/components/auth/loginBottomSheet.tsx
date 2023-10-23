import React, {
  useState,
  memo,
} from 'react';
import {
  Keyboard,
} from 'react-native';
import {useAppDispatch} from '../../hooks/hooks';
import {Login} from '../profile/login';
import {
  resetBottomSheetForm,
  showRegisterAction,
} from '../../redux/actions/screenAction';
import BottomSheet from '../bottomSheet/bottomSheet';

interface Props {
  isVisible?: boolean;
  handleClose?: () => any;
  displayMode?: string;
}

function LoginBottomSheet({isVisible = false, handleClose, displayMode}: Props) {
  const dispatch = useAppDispatch();

  //state for child
  const [email, setEmail] = useState('');

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
        setEmail('');
      }}
    >
      <Login
        setEmail={setEmail}
        email={email}
        dismiss={() => {}}
        goToRegister={() => {
          dispatch(showRegisterAction());
        }}
      />
    </BottomSheet>
  );
}

export default memo(LoginBottomSheet);
