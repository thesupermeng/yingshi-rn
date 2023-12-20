import { InputItem, Button } from "@ant-design/react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../features/user";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import {
  hideBottomSheetAction,
  hideLoginAction,
  hideRegisterAction,
  initialBottomSheetForm,
} from "@redux/actions/screenAction";
import { RootState } from "@redux/store";
import { screenModel } from "@type/screenType";
import SpinnerOverlay from "../modal/SpinnerOverlay";
export const Login = (props: any) => {
  const [emailValid, setEmailValid] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const dispatch = useDispatch();
  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: RootState) => screenReducer
  );

  useEffect(() => {
    ValidateEmail(props.email, setEmailValid);
  }, [props.email]);

  useEffect(() => {
    if (screenState.resetInputForm == true) {
      dispatch(initialBottomSheetForm());
      setEmailValid(true);
      setErrMsg("");
    }
  }, [screenState]);

  const navigator = useNavigation();
  return (
    <View style={{ height: "100%" }}>
      <SpinnerOverlay visible={isLoading} />
      <LoginCard
        setIsloading={setIsloading}
        emailValid={emailValid}
        setEmail={props.setEmail}
        email={props.email}
        setEmailValid={setEmailValid}
        navigator={navigator}
        goToRegister={props.goToRegister}
        setErrMsg={setErrMsg}
        errMsg={errMsg}
        bottomSheetRef={props.bottomSheetRef}
      />
    </View>
  );
};

const LoginCard = (props) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>登录解锁更多精彩内容</Text>
      {/* <Text style={{textAlign: 'center', width: '100%', paddingTop: 7}}>
        It takes less than a minute to sign up
      </Text> */}
      {/* <Text style={styles.description}>Please enter your email address</Text> */}
      <View>
        <InputItem
          autoCapitalize="none"
          style={[
            styles.textInpoutCommonStyle,
            props.email === ""
              ? styles.defaultTextInputStyle
              : props.emailValid || props.errMsg.includes("稍后")
              ? styles.correctTextInputStyle
              : styles.invalidTextInputStyle,
          ]}
          value={props.email}
          onChange={(value) => {
            onEmailInputChange(value, props.setEmail, props.setErrMsg);
          }}
          placeholder="输入邮箱账号"
          placeholderTextColor="#B6B6B6"
        />

        {props.email != "" && props.emailValid && (
          <Image
            style={styles.iconStyle}
            source={require("@static/images/profile/cricket_tick.png")}
          />
        )}

        {props.errMsg.includes("稍后") && (
          <Image
            style={styles.iconStyle}
            source={require("@static/images/profile/cricket_tick.png")}
          />
        )}

        {props.email !== "" &&
          !props.emailValid &&
          !props.errMsg.includes("稍后") && (
            <TouchableWithoutFeedback
              onPress={() => {
                props.setEmail("");
                props.setErrMsg("");
                props.setEmailValid(true);
              }}
            >
              <Image
                style={styles.iconStyle}
                source={require("@static/images/profile/cross.png")}
              />
            </TouchableWithoutFeedback>
          )}
      </View>
      {props.errMsg != "" && (
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 10,
            paddingRight: 20,
          }}
        >
          <View
            style={{
              marginTop: 1,
              alignSelf: "flex-start",
            }}
          >
            <Image
              style={{
                height: 20,
                width: 20,
                marginRight: 5,
                position: "relative",
                top: 1,
              }}
              source={require("@static/images/invite/danger.png")}
            />
          </View>
          <Text style={styles.danger}>{props.errMsg}</Text>
        </View>
      )}
      <Button
        type="primary"
        // disabled={props.email === '' || !props.emailValid}
        style={[
          styles.continueButtonStyle,
          props.email === "" ? styles.btnInactive : styles.btnActive,
        ]}
        activeStyle={[
          styles.continueButtonStyle,
          props.email === "" ? styles.btnInactive : styles.btnActive,
        ]}
        //disabled={!props.emailValid}
        onPress={async () => {
          if (props.email === "") {
            console.log("invalid email");
            props.setEmailValid(false);
            props.setErrMsg("请填写邮箱账号");
            return;
          }

          try {
            props.setIsloading(true);
            await loginUser({
              email: props.email,
              otp: "",
            });
          } catch (err) {
            props.setIsloading(false);
            props.setEmailValid(false);
            props.setErrMsg(err.response.data.message);
            props.setReferralCodeValid(false);
            return;
          }

          dispatch(hideBottomSheetAction());
          setTimeout(() => {
            props.setIsloading(false);
            navigation.navigate("OTP", {
              email: props.email,
              action: "login",
            });
          }, 300);
        }}
      >
        <Text
          style={{
            //  fontFamily: 'SF Pro Display',
            fontWeight: "600",
            fontSize: 14,
            letterSpacing: 0.2,
            color: props.email === "" ? "white" : "#000",
          }}
        >
          登录
        </Text>
      </Button>
      <TouchableOpacity
        onPress={() => {
          console.log("   props.goToRegister();");

          props.setEmail("");
          props.setErrMsg("");
          props.setEmailValid(true);
          props.goToRegister();
          // props.navigator.navigate('CricketTerm');
        }}
      >
        <View style={styles.loginTermPrivacy}>
          <Text style={styles.termPrivacyFont}>
            <Text style={{ color: "white" }}> 注册 </Text>
          </Text>
          <Image
            style={{ width: 18, height: 18 }}
            source={require("@static/images/profile/rightArrow.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const onEmailInputChange = (value, setEmail, setErrMsg) => {
  setErrMsg("");
  setEmail(value);
};

function ValidateEmail(mail, setEmailValid) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail)) {
    setEmailValid(true);
  } else {
    setEmailValid(false);
  }
}

const styles = StyleSheet.create({
  textInpoutCommonStyle: {
    marginHorizontal: "-5%",
    marginTop: 15,
    paddingLeft: 10,
    height: 42,
    borderRadius: 8,
    fontSize: 14,
    // backgroundColor: '#1d2023',
    // fontFamily: 'SF Pro Display',
  },
  defaultTextInputStyle: { backgroundColor: "#1d2023" },
  correctTextInputStyle: { backgroundColor: "#1d2023", color: "#fff" },
  invalidTextInputStyle: {
    backgroundColor: "#311818",
    borderWidth: 1,
    borderColor: "#FF1010",
    color: "#FF1010",
  },
  iconStyle: {
    height: 18,
    width: 18,
    position: "absolute",
    right: 10,
    top: 20,
  },
  continueButtonStyle: {
    width: "100%",
    height: 42,
    marginTop: 30,
    marginLeft: "-0.5%",
    borderWidth: 0,
  },
  card: {
    height: "85%",
    width: "100%",
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "transparent",
  },
  title: {
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    paddingBottom: 25,
  },
  description: {
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 20,
    textAlign: "left",
    marginTop: 20,
  },
  termPrivacyFont: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 18,
    textAlign: "center",
  },
  loginTermPrivacy: {
    paddingTop: 40,
    paddingLeft: 80,
    paddingRight: 80,
    paddingBottom: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  btnActive: {
    backgroundColor: "#FAC33D",
    color: "#000",
  },
  btnInactive: {
    backgroundColor: "#1d2023",
  },
  danger: {
    fontWeight: "400",
    fontSize: 14,
    textAlign: "left",
    color: "#FF3434",
  },
});