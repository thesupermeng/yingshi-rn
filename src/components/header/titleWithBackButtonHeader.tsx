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
}

export default function TitleWithBackButtonHeader({
  title,
  onBack,
  headerStyle,
  right,
}: Props) {
  const { textVariants } = useTheme();

  return (
    <View style={{ ...styles.container, ...headerStyle }}>
      <View
        style={{
          ...styles.backStyle,
          position: "absolute",
          left: 20,
        }}
      >
        <BackButton
          onPress={onBack}
          btnStyle={{
            position: "absolute",
            paddingTop: Platform.OS == "ios" ? 0 : 5,
            width: 30,
          }}
        />
      </View>
      <Text style={{ ...textVariants.header, fontSize: 16 }} numberOfLines={1}>
        {title}
      </Text>
      {right ? (
        right
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
    paddingTop: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    marginTop: 5,
  },
  backStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
