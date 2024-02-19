import { StyleSheet, TouchableOpacity, ViewStyle, Platform } from "react-native";
import { BackArrowSvg } from "@static";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
interface Props {
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
}: Props) {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={onPress ? onPress : () => navigation.goBack()}
      style={{ ...styles.btn, ...btnStyle }}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
    >
      <BackArrowSvg
        style={{
          color: colors.text,
        }}
      ></BackArrowSvg>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    // paddingTop: (Platform.OS === 'android') ? 10 : 0,
  },
});
