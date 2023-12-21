import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ViewStyle,
  Platform,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import BackButton from "../button/backButton";

interface Props {
  title?: string;
  onBack?: any;
  headerStyle?: ViewStyle;
  right?: React.ReactNode;
  backBtnStyle?: ViewStyle; 
}

export default function TitleWithBackButtonHeader({
  title,
  onBack,
  headerStyle,
  right,
  backBtnStyle
}: Props) {
  const { textVariants } = useTheme();

  let leftIconBottomVal;

  if (right) {
    console.log("right");
    console.log(right);
    leftIconBottomVal = Platform.OS == "ios" ? -4 : -7;
  } else {
    console.log("right");
    console.log(right);
    leftIconBottomVal = Platform.OS == "ios" ? -14 : -12;
  }
  // console.log("leftIconBottomVal");
  // console.log(leftIconBottomVal);
  return (
    <View style={{ ...styles.container}}>
      <View
        style={{
          ...styles.backStyle,
          position: "absolute",
          left: 15,
          ...backBtnStyle
        }}
      >
        <BackButton
          onPress={onBack}
          btnStyle={{
            position: "absolute",
            bottom: leftIconBottomVal,
            // paddingTop: Platform.OS == "android" ? 30 : 5,
            width: 30,
          }}
        />
      </View>
      <View style={{ ...headerStyle }}>
        <Text
          style={{
            ...textVariants.header,
            fontSize: 16,
          }}
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>

      {right ? (
        <View
          style={{
            ...styles.backStyle,
            position: "absolute",
            right: 15,
            bottom: 8,
          }}
        >
          {right}
        </View>
      ) : (
        <View style={{ opacity: 0, pointerEvents: "none" }}>
          <BackButton onPress={onBack} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
   marginBottom:15
  },
  backStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
