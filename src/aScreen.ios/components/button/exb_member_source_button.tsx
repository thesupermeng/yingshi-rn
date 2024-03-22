import { StyleSheet, TouchableOpacity, ViewStyle, Platform } from "react-native";
import BackIcon from "@static/images/adultNotificationPenalty.svg";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
interface XFillButton {
  children?: React.ReactNode;
  onPress?: any;
  params?: any[];
  btnStyle?: ViewStyle;
}
export default function BackButton({
  children,
  onPress,
  btnStyle,
  ...params
}: XFillButton) {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.85}
      onPress={onPress ? onPress : () => navigation.goBack()}
      style={{ ...styles.btn, ...btnStyle }}
    >
      <BackIcon
        style={{
          color: colors.text,
        }}
      ></BackIcon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    
  },
});
