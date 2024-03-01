import React, { memo, useRef } from "react";
import { Keyboard } from "react-native";
import { SigninupForm, yys_VideoLibreanimated } from "../profile/yys_modity";
import { CBottomSheet } from "../atoms";

interface yys_ConfigureUimanager {
  isVisible?: boolean;
  handleClose?: () => any;
  displayMode?: string;
}

function SigninupBottomSheet({
  isVisible = false,
  handleClose,
  displayMode,
}: yys_ConfigureUimanager) {
  
  const loginRef = useRef<yys_VideoLibreanimated>(null);

  return (
    <CBottomSheet
      isVisible={isVisible}
      onBackdropPress={() => {
        if (handleClose) handleClose();

        Keyboard.dismiss();
        loginRef.current?.resetValue();
      }}
      maxHeight={'85%'}
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
