import { useTheme } from "@react-navigation/native";
import { BottomSheet as ReactBottomSheet } from "@rneui/base";
import { useEffect, useState } from "react";
import { Keyboard, Platform, View, ViewStyle } from "react-native";
import DeviceInfo from "react-native-device-info";

interface wawaAwayShow {
  children?: React.ReactNode;
  isVisible: boolean;
  isKeyboardVisible?: boolean;
  onBackdropPress: () => void;
  containerStyle?: ViewStyle;
  height?: string;
  bottomOffset?: number;
  supportedOrientations?: ("portrait" | "landscape")[];
}

export default function BottomSheet({
  children,
  isVisible,
  onBackdropPress,
  containerStyle,
  isKeyboardVisible = false,
  height = "auto",
  bottomOffset = 0,
  supportedOrientations = ["portrait", "landscape"],
}: wawaAwayShow) {
  const { colors } = useTheme();
  const [bottomPosition, setBottomPosition] = useState(0);
  const deviceBrand = DeviceInfo.getBrand();
  const [deviceName, setDeviceName] = useState("");
  DeviceInfo.getDeviceName().then((d) => {
    setDeviceName(d);
  });

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardWillShow",
      (e) => {
        setBottomPosition(e.endCoordinates.height);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardWillHide",
      () => {
        if (Platform.OS === "ios") setBottomPosition(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <ReactBottomSheet
      scrollViewProps={{ keyboardShouldPersistTaps: "handled" }}
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      backdropStyle={{
        backgroundColor: "#000000aa",
      }}
      containerStyle={{
        position: "absolute",
        
        bottom: bottomPosition,
        width: "100%",
        height: height,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: colors.bottomSheet,
        paddingBottom:
          deviceBrand == "HUAWEI" && /p\d+/i.test(deviceName)
            ? bottomOffset + 100
            : 0,
        ...containerStyle,
      }}
      modalProps={{
        supportedOrientations: supportedOrientations,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 14,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: 40,
            height: 5,
            borderRadius: 10,
          }}
        />
      </View>
      {children}
    </ReactBottomSheet>
  );
}
