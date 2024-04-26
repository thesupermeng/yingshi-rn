import { StyleSheet, TouchableOpacity, ViewStyle, Platform } from "react-native";
import BackIcon from "@static/images/loadingWhistleorange.svg";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
interface wawaAwayShow {
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
}: wawaAwayShow) {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={onPress ? onPress : () => navigation.goBack()}
      style={{ ...styles.btn, ...btnStyle }}
      hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
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
