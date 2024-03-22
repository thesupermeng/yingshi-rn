import React, { memo, useRef } from "react";
import { Keyboard } from "react-native";
import { SigninupForm, mayi_NativeexManifest } from "../profile/mayi_score";
import { CBottomSheet } from "../atoms";

interface mayi_GoogleViews {
  isVisible?: boolean;
  handleClose?: () => any;
  displayMode?: string;
}

function SigninupBottomSheet({
  isVisible = false,
  handleClose,
  displayMode,
}: mayi_GoogleViews) {
  
  const loginRef = useRef<mayi_NativeexManifest>(null);

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
