import React, { memo, useRef } from "react";
import { Keyboard } from "react-native";
import { SigninupForm, SXvod } from "../profile/qmp_episodes";
import { CBottomSheet } from "../atoms";

interface XFillButton {
  isVisible?: boolean;
  handleClose?: () => any;
  displayMode?: string;
}

function SigninupBottomSheet({
  isVisible = false,
  handleClose,
  displayMode,
}: XFillButton) {
  
  const loginRef = useRef<SXvod>(null);

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
