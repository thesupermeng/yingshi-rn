import React, { useState, memo, useEffect, useRef } from "react";
import { Keyboard } from "react-native";
import { LoginForm, LoginRef } from "../profile/loginForm";
import BottomSheet from "../bottomSheet/bottomSheet";
import DeviceInfo from "react-native-device-info";
import { CountryPhoneList } from "../profile/countryPhoneList";

interface Props {
  isVisible?: boolean;
  handleClose?: () => any;
  displayMode?: string;
}

function LoginBottomSheet({
  isVisible = false,
  handleClose,
  displayMode,
}: Props) {
  //state for child
  const loginRef = useRef<LoginRef>(null);

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
    <BottomSheet
      isKeyboardVisible={isKeyboardVisible}
      isVisible={isVisible}
      bottomOffset={bottomOffset}
      containerStyle={{
        height: 'auto',
      }}
      onBackdropPress={() => {
        if (handleClose) handleClose();

        Keyboard.dismiss();
        loginRef.current?.resetValue();
      }}
      maxHeight={'90%'}
    >
      <LoginForm
        ref={loginRef}
      />
    </BottomSheet>
  );
}

export default memo(LoginBottomSheet);
