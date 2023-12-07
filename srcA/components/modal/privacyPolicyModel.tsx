import { useNavigation, useTheme } from "@react-navigation/native";
import { Dialog } from "@rneui/themed";
import { useCallback, useContext, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import RNExitApp from "react-native-exit-app";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { acceptPrivacyPolicy } from "@redux/actions/settingsActions";
import { TermsAcceptContext } from "../../contexts/TermsAcceptedContext";

interface Props {}

export default function PrivacyPolicyDialog({}: Props) {
  const { accepted, setAccepted } = useContext(TermsAcceptContext);
  const { spacing, textVariants, colors } = useTheme();
  const dispatch = useAppDispatch();
  const settingsReducer = useAppSelector(
    ({ settingsReducer }) => settingsReducer
  );

  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(!accepted);

  const handleReject = useCallback(() => {
    RNExitApp.exitApp();
  }, []);

  const handleAccept = useCallback(() => {
    setIsVisible(false);
    setAccepted(true);
    dispatch(acceptPrivacyPolicy());
  }, []);

  const handleReadTerms = useCallback(() => {
    setIsVisible(false);
    navigation.navigate("用户协议");
  }, []);

  const handleReadPrivacy = useCallback(() => {
    setIsVisible(false);
    navigation.navigate("隐私政策");
  }, []);

  return (
    <Dialog
      isVisible={isVisible}
      overlayStyle={{
        backgroundColor: "rgba(34, 34, 34, 1)",
        ...styles.overlay,
      }}
      backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      <View style={{ gap: spacing.l }}>
        <Text style={{ ...textVariants.header, textAlign: "center" }}>
          服务协议和隐私政策
        </Text>
        <Text
          style={{
            ...textVariants.subBody,
            textAlign: "center",
          }}
        >
          <Text>
            请你务必审慎阅读,
            充分理解“服务协议”和“隐私政策”各条款，包括但不限于：为了更好的向你提供服务，我们需要收集你的设备标识，操作日常等信息用于分析，优化应用性能。你可阅读
          </Text>
          <Text onPress={handleReadTerms}>
            <Text style={{ color: colors.primary }}>《服务协议》</Text>
          </Text>
          <Text>和</Text>
          <Text onPress={handleReadPrivacy}>
            <Text style={{ color: colors.primary }}>《隐私政策》</Text>
          </Text>
          <Text>
            了解详细信息。如果你同意，请点击下面按钮开始接受我们的服务。
          </Text>
        </Text>
        <View style={styles.btns}>
          <TouchableOpacity style={styles.btn} onPress={handleReject}>
            <Text
              style={{
                ...textVariants.body,
                ...styles.head,
              }}
            >
              暂不同意
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleAccept}>
            <Text
              style={{
                ...textVariants.body,
                ...styles.head,
                color: colors.primary,
              }}
            >
              同意并接受
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  overlay: {
    borderRadius: 14,
  },
  head: {
    textAlign: "center",
  },
  body: {
    color: "white",
  },
  link: {
    display: "flex",
  },
  btns: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flex: 1,
  },
});
