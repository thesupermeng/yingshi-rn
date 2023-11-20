import { useTheme } from "@react-navigation/native";
import { BottomSheet as ReactBottomSheet } from "@rneui/base";
import { useEffect, useState } from "react";
import { Keyboard, Platform, ScrollView, View, ViewStyle } from "react-native";
import DeviceInfo from "react-native-device-info";

interface Props {
  children?: React.ReactNode;
  isVisible: boolean;
  isKeyboardVisible?: boolean;
  onBackdropPress: () => void;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  height?: string;
  bottomOffset?: number;
  supportedOrientations?: ("portrait" | "landscape")[];
}

export default function BottomSheet({
  children,
  isVisible,
  onBackdropPress,
  style,
  containerStyle,
  isKeyboardVisible = false,
  height = "auto",
  bottomOffset = 0,
  supportedOrientations = ["portrait", "landscape"],
}: Props) {
  const { colors } = useTheme();
  const [bottomPosition, setBottomPosition] = useState(0);
  const deviceBrand = DeviceInfo.getBrand();
  const [deviceName, setDeviceName] = useState("");
  const [containHeight, setContainHeight] = useState(0);

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
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      backdropStyle={{
        backgroundColor: "#000000aa",
      }}
      modalProps={{
        supportedOrientations: supportedOrientations,
        style: {
          justifyContent: 'flex-end',
        }
      }}
      scrollViewProps={{
        scrollEnabled: false,
        nestedScrollEnabled: true,
        style: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: colors.bottomSheet,
          width: "100%",
          height: height,
          paddingBottom:
            deviceBrand == "HUAWEI" && /p\d+/i.test(deviceName)
              ? bottomOffset + 100
              : 0,
          ...style,
        },
        onLayout: (event) => {
          var { height } = event.nativeEvent.layout;
          setContainHeight(height)
        }
      }}
    >
      <View
        style={{
          backgroundColor: colors.bottomSheet,
          justifyContent: 'center',
          alignItems: "center",
          position: 'absolute',
          height: 30,
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
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
      <ScrollView style={{ marginTop: 20, height: containHeight, ...containerStyle }}>
        {children}
      </ScrollView>
    </ReactBottomSheet>
  );
}
