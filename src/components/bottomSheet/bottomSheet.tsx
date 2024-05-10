import { useTheme } from "@react-navigation/native";
import { BottomSheet as ReactBottomSheet } from "@rneui/base";
import { useEffect, useState } from "react";
import { Dimensions, Keyboard, Platform, View, ViewStyle } from "react-native";
import DeviceInfo from "react-native-device-info";

interface Props {
  children?: React.ReactNode;
  isVisible: boolean;
  isKeyboardVisible?: boolean;
  onBackdropPress: () => void;
  containerStyle?: ViewStyle;
  height?: string;
  maxHeight?: string | number;
  bottomOffset?: number;
  supportedOrientations?: ("portrait" | "landscape")[];
  showWhiteLine?: boolean;
}

export default function BottomSheet({
  children,
  isVisible,
  onBackdropPress,
  containerStyle,
  isKeyboardVisible = false,
  height = "auto",
  maxHeight,
  bottomOffset = 0,
  supportedOrientations = ["portrait", "landscape"],
  showWhiteLine = true,
}: Props) {
  const { colors } = useTheme();
  const [bottomPosition, setBottomPosition] = useState(0);
  const deviceBrand = DeviceInfo.getBrand();
  const [deviceName, setDeviceName] = useState(DeviceInfo.getModel());

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
      scrollViewProps={{ keyboardShouldPersistTaps: "handled", showsVerticalScrollIndicator: false, style: { width: Dimensions.get('screen').width } }}
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      backdropStyle={{
        backgroundColor: "#000000aa",
      }}
      containerStyle={{
        position: "absolute",
        // paddingBottom: deviceBrand == "HUAWEI" && isKeyboardVisible ? 200 : 50,
        bottom: bottomPosition,
        width: "100%",
        height: height,
        maxHeight: maxHeight,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: colors.bottomSheet,
        paddingBottom:
          deviceBrand == "HUAWEI" && /ELE-L29/i.test(deviceName)
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
        {showWhiteLine &&
          <View
            style={{
              backgroundColor: "white",
              width: 40,
              height: 5,
              borderRadius: 10,
            }}
          />
        }
      </View>
      {children}
    </ReactBottomSheet>
  );
}
