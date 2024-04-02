import { useNavigation, useTheme } from "@react-navigation/native";
import { useCallback, useContext, useEffect } from "react";
import { BackHandler, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import RNExitApp from "react-native-exit-app";
import { useAppDispatch } from "@hooks/hooks";
import { acceptPrivacyPolicy } from "@redux/actions/settingsActions";
import { TermsAcceptContext } from "../../contexts/TermsAcceptedContext";
import { IS_OTHER_SKIN } from "@utility/constants";


interface Props {
  isVisible: boolean,
  setIsVisible: any,
}

export default function PrivacyPolicyOverlay({
  isVisible,
  setIsVisible,
}: Props) {
  const { accepted, setAccepted } = useContext(TermsAcceptContext);
  const { spacing, textVariants, colors } = useTheme();
  const dispatch = useAppDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    setIsVisible(!accepted);
  }, []);

  const handleReject = useCallback(() => {
    RNExitApp.exitApp();
  }, []);

  const handleAccept = useCallback(() => {
    setIsVisible(false)
    setAccepted(true)
    dispatch(acceptPrivacyPolicy())
  }, [])

  const handleReadTermsPrivacy = useCallback((view: '用户协议' | '隐私政策') => {
    const checkGoBack = ({ data }) => {
      if (data.state.routes[data.state.routes.length - 1].name === 'Home') {
        setIsVisible(true);
        navigation.removeListener('state', checkGoBack);
      }
    }
    navigation.addListener('state', checkGoBack);

    navigation.navigate(view);
    setIsVisible(false);
  }, [])

  return (
    <>
      {isVisible &&
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <View style={{
            width: '75%',
            padding: 20,
            gap: spacing.l,
            backgroundColor: 'rgba(34, 34, 34, 1)',
            ...styles.overlay,
          }}>
            <Text style={{ ...textVariants.header, textAlign: 'center' }}>服务协议和隐私政策</Text>
            <Text
              style={{
                ...textVariants.subBody,
                textAlign: 'center',
              }}>
              <Text>
                请你务必审慎阅读,
                充分理解“服务协议”和“隐私政策”各条款，包括但不限于：为了更好的向你提供服务，我们需要收集你的设备标识，操作日常等信息用于分析，优化应用性能。你可阅读
              </Text>
              <Text onPress={() => handleReadTermsPrivacy('用户协议')}>
                <Text style={{ color: colors.primary }}>《服务协议》</Text>
              </Text>
              <Text>和</Text>
              <Text onPress={() => handleReadTermsPrivacy('隐私政策')}>
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
                  }}>
                  暂不同意
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={handleAccept}>
                <Text
                  style={{
                    ...textVariants.body,
                    ...styles.head,
                    color: IS_OTHER_SKIN ? colors.confirm : colors.primary,
                  }}>
                  同意并接受
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  overlay: {
    borderRadius: 14,
  },
  head: {
    textAlign: 'center',
  },
  body: {
    color: 'white',
  },
  link: {
    display: 'flex',
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    flex: 1,
  },
});
