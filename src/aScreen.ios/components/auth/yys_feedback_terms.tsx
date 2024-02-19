import React, { memo, useRef } from "react";
import { Keyboard } from "react-native";
import { SigninupForm, yysDescriptionProgress } from "../profile/yys_backiconmask_iconsubssuccess";
import { CBottomSheet } from "../atoms";

interface yysIconarrowrightorangeStation {
  isVisible?: boolean;
  handleClose?: () => any;
  displayMode?: string;
}

function SigninupBottomSheet({
  isVisible = false,
  handleClose,
  displayMode,
}: yysIconarrowrightorangeStation) {
  
  const loginRef = useRef<yysDescriptionProgress>(null);

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
