import React, { useState, memo, useEffect, useRef } from "react";
import { Keyboard } from "react-native";
import { SigninupForm, SigninupRef } from "../profile/signinupForm";
import DeviceInfo from "react-native-device-info";
import { CBottomSheet } from "../atoms";

interface Props {
  isVisible?: boolean;
  handleClose?: () => any;
  displayMode?: string;
}

function SigninupBottomSheet({
  isVisible = false,
  handleClose,
  displayMode,
}: Props) {
  //state for child
  const loginRef = useRef<SigninupRef>(null);

  const deviceBrand = DeviceInfo.getBrand();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(0);

  const [deviceName, setDeviceName] = useState("");
  DeviceInfo.getDeviceName().then((d) => {
    setDeviceName(d);
  });

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    if (
      deviceBrand == "HUAWEI" &&
      isKeyboardVisible &&
      /p\d+/i.test(deviceName)
    ) {
      setBottomOffset(180);
    } else {
      setBottomOffset(50);
    }
  }, [isKeyboardVisible]);

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
