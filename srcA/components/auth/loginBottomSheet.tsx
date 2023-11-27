import React, { useState, memo, useEffect } from "react";
import { Keyboard } from "react-native";
import { useAppDispatch } from "../../hooks/hooks";
import { Login } from "../profile/login";
import {
  resetBottomSheetForm,
  showRegisterAction,
} from "../../redux/actions/screenAction";
import BottomSheet from "../bottomSheet/bottomSheet";
import DeviceInfo from "react-native-device-info";

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
  const dispatch = useAppDispatch();

  //state for child
  const [email, setEmail] = useState("");
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
        dispatch(resetBottomSheetForm());
        Keyboard.dismiss();
        setEmail("");
      }}
    >
      <Login
        setEmail={setEmail}
        email={email}
        dismiss={() => { }}
        goToRegister={() => {
          console.log("showRegisterAction");
          dispatch(resetBottomSheetForm());
          Keyboard.dismiss();
          setEmail("");
          setTimeout(() => {
            dispatch(showRegisterAction());
          }, 100);
        }}
      />
    </BottomSheet>
  );
}

export default memo(LoginBottomSheet);
