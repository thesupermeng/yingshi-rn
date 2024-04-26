import React, { memo, useRef } from "react";
import { Keyboard } from "react-native";
import { SigninupForm, wawaControlsTramini } from "../profile/wawa_iconwatch";
import { CBottomSheet } from "../atoms";

interface wawaAwayShow {
  isVisible?: boolean;
  handleClose?: () => any;
  displayMode?: string;
}

function SigninupBottomSheet({
  isVisible = false,
  handleClose,
  displayMode,
}: wawaAwayShow) {
  
  const loginRef = useRef<wawaControlsTramini>(null);

  return (
    <CBottomSheet
      isVisible={isVisible}
      onBackdropPress={() => {
        if (handleClose) handleClose();

        Keyboard.dismiss();
        loginRef.current?.resetValue();
      }}
      maxHeight={'70%'}
    >
      <SigninupForm
        ref={loginRef}
        onGooleLoginSuccess={() => {
          if (handleClose) handleClose()

          Keyboard.dismiss();
          loginRef.current?.resetValue();
        }}
      />
    </CBottomSheet>
  );
}

export default memo(SigninupBottomSheet);
