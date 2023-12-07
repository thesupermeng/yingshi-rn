import React, { useState, memo, useEffect } from "react";
import { Keyboard } from "react-native";
import { useAppDispatch } from "../../hooks/hooks";
import {
  resetBottomSheetForm,
  showLoginAction,
} from "@redux/actions/screenAction";
import { Register } from "../profile/register";
import BottomSheet from "../bottomSheet/bottomSheet";
import DeviceInfo from "react-native-device-info";

interface Props {
  isVisible?: boolean;
  handleClose?: () => any;
  displayMode?: string;
}

function RegisterBottomSheet({
  isVisible = false,
  handleClose,
  displayMode,
}: Props) {
  const dispatch = useAppDispatch();

  //child state
  const [email, setEmail] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const deviceBrand = DeviceInfo.getBrand();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [endCoordinates, setEndCoordinates] = useState(0);
  const [bottomOffset, setBottomOffset] = useState(0);
  const [deviceName, setDeviceName] = useState("");
  DeviceInfo.getDeviceName().then((d) => {
    setDeviceName(d);
  });

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (e) => {
        setEndCoordinates(e.endCoordinates.height);
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setEndCoordinates(0);
        setKeyboardVisible(false); // or some other action
      }
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  useEffect(() => {
    console.log(endCoordinates);
  }, [endCoordinates]);

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
        setReferralCode("");
        setEmail("");
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
