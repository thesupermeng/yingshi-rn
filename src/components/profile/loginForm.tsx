import { Button } from "@ant-design/react-native";
import { useNavigation } from "@react-navigation/native";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useAppDispatch } from "@hooks/hooks";
import {
  navigateToProfileScreen,
} from "@redux/actions/screenAction";
import SpinnerOverlay from "../modal/SpinnerOverlay";
import PhoneIcon from '@static/images/phone.svg';
import MailIcon from '@static/images/mail.svg';
import GmailIcon from '@static/images/gmail.svg';
import DropdownIcon from '@static/images/dropdown.svg';
import { CountryPhoneList } from "./countryPhoneList";
import FastImage from '../common/customFastImage';
import { countryPhoneCodeType } from "@type/ajaxTypes";
import { ReadAgreementPrivacyPolicy } from "./readAgreementPrivacyPolicy";

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useQuery } from "@tanstack/react-query";
import { API_DOMAIN } from "@utility/constants";
import { signinupUser } from "../../features/user";
import { showToast } from "../../Sports/utility/toast";

export type LoginRef = {
  resetValue: () => void,
}

export const LoginForm = forwardRef<LoginRef>(({ }, ref) => {
  const navigation = useNavigation();

  const [loginType, setloginType] = useState<'email' | 'phone'>('email');

  const [loginValue, setLoginValue] = useState(''); // email or phone
  const [referralCode, setReferralCode] = useState('');
  const [loginValueErrMsg, setLoginValueErrMsg] = useState<string | null>(null); // null is valid, else is invalid (include empty string)
  const [referralCodeErrMsg, setReferralCodeErrMsg] = useState<string | null>(null);
  const [isReadTermNCondition, setReadTermNCondition] = useState(true);

  // for country phone code
  const [isShowCountryList, setShowCountryList] = useState(false);
  const [countryPhoneSelected, setCountryPhoneSelected] = useState<countryPhoneCodeType>();

  // ohters
  const [isSubmitting, setSubmitting] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  const { data: countryPhoneOptions } = useQuery({
    queryKey: ["CountryPhoneOptions"],
    queryFn: () =>
      fetch(`${API_DOMAIN}country/v1/country`)
        .then((response) => response.json())
        .then((json: any) => {
          return json.data as countryPhoneCodeType[];
        }),
  });


  useImperativeHandle(ref, () => ({
    resetValue: () => {
      resetForm();
    },
  }));

  useEffect(() => {
    if (countryPhoneOptions && countryPhoneOptions?.length > 0) {
      setCountryPhoneSelected(countryPhoneOptions[0]);
    }
  }, [countryPhoneOptions]);

  const resetForm = () => {
    setloginType('email');
    setLoginValue('');
    setReferralCode('');
    setLoginValueErrMsg(null);
    setReferralCodeErrMsg(null);
    setReadTermNCondition(false);

    setShowCountryList(false);
  }

  const onLoginValueChange = (
    value: string,
  ) => {
    setLoginValue(value);
    setLoginValueErrMsg(null);

    if (value === '') return;

    if (loginType === 'email' && !isEmailValid(value)) {
      setLoginValueErrMsg('邮件格式错误');
    } else if (loginType === 'phone' && !isPhoneValid(value)) {
      setLoginValueErrMsg('手机号码格式错误');
    }
  };

  const onReferralCodeChange = (
    value: string,
  ) => {
    setReferralCode(value);
    setReferralCodeErrMsg(null);
  };

  const onPressCountryDropdown = () => {
    setShowCountryList(!isShowCountryList);
  }

  const onSelectCountryPhone = (data: any) => {
    setCountryPhoneSelected(data);
    setShowCountryList(false);
  }

  const onChangeloginType = () => {
    setloginType(loginType === 'email' ? 'phone' : 'email');
    setLoginValue('');
  }

  const onPressGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();

      console.log('userInfo\n\n');
      console.log(userInfo);

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('error SIGN_IN_CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('error IN_PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('error PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        // some other error happened
        console.log('error common');
      }

      console.log(error.toString());
      showToast(error.toString());
    }
  }

  const onPressTermNCondition = () => {
    setReadTermNCondition(!isReadTermNCondition);
  };

  const isEmailValid = (value: string) => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(value)) {
      return false;
    }

    return true;
  }

  const isPhoneValid = (value: string) => {
    if (!/^[0-9]{7,12}$/.test(value.replace(RegExp(' ', 'g'), ''))) {
      return false;
    }

    return true;
  }

  const onSubmit = async () => {
    if (isSubmitting) return;

    if (isReadTermNCondition == false) {
      return;
    }

    if (loginValue === "") {
      setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
      return;
    }

    try {
      setSubmitting(true);

      await signinupUser({
        loginType: loginType === 'email' ? 'EMAIL' : 'SMS',
        email: loginType === 'email' ? loginValue : undefined,
        phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + loginValue : undefined,
        countryId: loginType === 'phone' ? countryPhoneSelected?.country_id : undefined,
        referralCode: referralCode,
      });
    } catch (err: any) {
      setSubmitting(false);
      setLoginValueErrMsg(err);
      return;
    }

    setSubmitting(false);

    navigation.navigate("OTP", {
      email: loginType === 'email' ? loginValue : undefined,
      phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + loginValue : undefined,
      countryId: loginType === 'phone' ? countryPhoneSelected?.country_id : undefined,
      referralCode: referralCode,
    });
  }

  return (
    <View style={{ height: "100%" }}>
      <SpinnerOverlay visible={isSubmitting} />

      {!isShowCountryList &&
        <View onLayout={(e) => {
          if (containerHeight === 0) setContainerHeight(e.nativeEvent.layout.height);
        }}>
          <LoginCard
            loginType={loginType}
            loginValue={loginValue}
            referralCode={referralCode}
            loginValueErrMsg={loginValueErrMsg}
            referralCodeErrMsg={referralCodeErrMsg}
            isReadTermNCondition={isReadTermNCondition}
            countryPhoneSelected={countryPhoneSelected}
            onLoginValueChange={onLoginValueChange}
            onReferralCodeChange={onReferralCodeChange}
            onPressTermNCondition={onPressTermNCondition}
            onChangeloginType={onChangeloginType}
            onPressGoogleLogin={onPressGoogleLogin}
            onPressCountryDropdown={onPressCountryDropdown}
            onSubmit={onSubmit}
          />
        </View>
      }

      {isShowCountryList && countryPhoneOptions && countryPhoneOptions.length > 0 &&
        <CountryPhoneList
          data={countryPhoneOptions}
          dataSelected={countryPhoneSelected}
          onSelectCountryPhone={onSelectCountryPhone}
        />
      }
    </View>
  );
});

type LoginCardProps = {
  loginType: 'email' | 'phone',
  loginValue: string,
  referralCode: string,
  loginValueErrMsg: string | null,
  referralCodeErrMsg: string | null,
  isReadTermNCondition: boolean,
  countryPhoneSelected?: countryPhoneCodeType,
  onLoginValueChange: (value: string) => void,
  onReferralCodeChange: (value: string) => void,
  onPressTermNCondition: () => void,
  onChangeloginType: () => void,
  onPressGoogleLogin: () => void,
  onPressCountryDropdown: () => void,
  onSubmit: () => void,
}

const LoginCard = ({
  loginType,
  loginValue,
  referralCode,
  loginValueErrMsg,
  referralCodeErrMsg,
  isReadTermNCondition,
  countryPhoneSelected,
  onLoginValueChange,
  onReferralCodeChange,
  onPressTermNCondition,
  onChangeloginType,
  onPressGoogleLogin,
  onPressCountryDropdown,
  onSubmit,
}: LoginCardProps) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>注册/登录</Text>
      <Text style={styles.subtitle}>登录后可管理您的账号，多端同步观看历史和收藏夹</Text>
      <View style={styles.textinputContainer}>
        {/* ============================== login value (email / phone) ============================== */}
        {loginType === 'email' && <>
          <TextInput
            autoCapitalize="none"
            style={[
              styles.textInpoutCommonStyle,
              loginValue === ""
                ? styles.defaultTextInputStyle
                : loginValueErrMsg === null // || props.errEmail.includes("稍后")
                  ? styles.correctTextInputStyle
                  : styles.invalidTextInputStyle,
            ]}
            value={loginValue}
            onChangeText={(value) => {
              onLoginValueChange(value);
            }}
            placeholder="输入邮箱账号"
            placeholderTextColor="#B6B6B6"
          />
        </>}

        {loginType === 'phone' &&
          <View style={styles.countryPhoneInputContainer}>
            <TouchableOpacity
              onPress={onPressCountryDropdown}
              style={styles.phoneCodeDropdown}
            >
              {countryPhoneSelected &&
                <FastImage
                  source={{
                    uri: countryPhoneSelected?.country_flag
                  }}
                  style={styles.countryFlag}
                />
              }

              <DropdownIcon />
            </TouchableOpacity>

            <Text style={{
              position: 'absolute',
              color: 'white',
              left: 94,
              zIndex: 100,
            }}>
              {countryPhoneSelected?.country_phonecode}
            </Text>

            <TextInput
              keyboardType="numeric"
              autoCapitalize="none"
              style={[
                styles.textInpoutCommonStyle,
                loginValue === ""
                  ? styles.defaultTextInputStyle
                  : loginValueErrMsg === null // || props.errEmail.includes("稍后")
                    ? styles.correctTextInputStyle
                    : styles.invalidTextInputStyle,
                {
                  paddingLeft: 60
                }
              ]}
              value={loginValue}
              onChangeText={(value) => {
                onLoginValueChange(value);
              }}
              placeholder="2 345 6789"
              placeholderTextColor="#B6B6B6"
            />
          </View>
        }

        {((loginValue !== "" && loginValueErrMsg === null) || (loginValueErrMsg && loginValueErrMsg?.includes("稍后"))) && (
          <Image
            style={styles.iconStyle}
            source={require("@static/images/profile/cricket_tick.png")}
          />
        )}

        {loginValue !== '' &&
          loginValueErrMsg !== null &&
          !loginValueErrMsg.includes("稍后") && (
            <TouchableWithoutFeedback
              onPress={() => {
                onLoginValueChange('');
              }}
            >
              <Image
                style={styles.iconStyle}
                source={require("@static/images/profile/cross.png")}
              />
            </TouchableWithoutFeedback>
          )
        }

        {loginValueErrMsg !== null && loginValueErrMsg !== '' && (
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 10,
              paddingRight: 20,
            }}
          >
            <Image
              style={{
                height: 20,
                width: 20,
                marginRight: 5,
              }}
              source={require("@static/images/invite/danger.png")}
            />

            <Text style={styles.danger}>{loginValueErrMsg}</Text>
          </View>
        )}
      </View>

      {/* ============================== referral code ============================== */}
      <View style={styles.textinputContainer}>
        <TextInput
          autoCapitalize="none"
          style={[
            styles.textInpoutCommonStyle,
            referralCode === ''
              ? styles.defaultTextInputStyle
              : referralCodeErrMsg === null
                ? styles.correctTextInputStyle
                : styles.invalidTextInputStyle,
          ]}
          value={referralCode}
          onChangeText={(value) => {
            onReferralCodeChange(value);
          }}
          placeholder='邀请码 (选填)'
          placeholderTextColor='#B6B6B6'
        />

        {referralCode !== '' &&
          referralCodeErrMsg !== null && (
            <TouchableWithoutFeedback
              onPress={() => {
                onReferralCodeChange('');
              }}
            >
              <Image
                style={styles.iconStyle}
                source={require("@static/images/profile/cross.png")}
              />
            </TouchableWithoutFeedback>
          )}

        {referralCodeErrMsg !== null && referralCodeErrMsg !== '' && (
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 10,
              paddingRight: 20,
            }}
          >
            <Image
              style={{
                height: 20,
                width: 20,
                marginRight: 5,
              }}
              source={require("@static/images/invite/danger.png")}
            />

            <Text style={styles.danger}>{referralCodeErrMsg} </Text>
          </View>
        )}
      </View>

      {/* ============================== submit button ============================== */}
      <Button
        type="primary"
        disabled={loginValue === '' || loginValueErrMsg !== null || !isReadTermNCondition}
        style={[
          styles.continueButtonStyle,
          loginValue === "" || !isReadTermNCondition ? styles.btnInactive : styles.btnActive,
        ]}
        activeStyle={[
          styles.continueButtonStyle,
          loginValue === "" || !isReadTermNCondition ? styles.btnInactive : styles.btnActive,
        ]}
        onPress={onSubmit}
      >
        <Text
          style={{
            //  fontFamily: 'SF Pro Display',
            fontWeight: "600",
            fontSize: 14,
            letterSpacing: 0.2,
            color: loginValue === "" || !isReadTermNCondition ? "white" : "#000",
          }}
        >
          注册
        </Text>
      </Button>


      <ReadAgreementPrivacyPolicy
        isReadChecked={isReadTermNCondition}
        onPress={onPressTermNCondition}
        onPressUserAgreement={() => {
          dispatch(navigateToProfileScreen('login'));
          navigation.navigate("用户协议");
        }}
        onPressPrivacyPolicy={() => {
          dispatch(navigateToProfileScreen('login'));
          navigation.navigate("隐私政策");
        }}
      />

      {/* ============================== other login type ============================== */}
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: "#9c9c9c" }}>使用以下方式登入</Text>
      </View>

      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
      }}>
        <TouchableOpacity
          onPress={onChangeloginType}
          style={{
            backgroundColor: '#1D2023',
            padding: 8,
            borderRadius: 100,
            marginRight: 10,
          }}
        >
          {loginType === 'email' && <PhoneIcon />}
          {loginType === 'phone' && <MailIcon />}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPressGoogleLogin}
          style={{
            backgroundColor: '#1D2023',
            padding: 8,
            borderRadius: 100,
            marginRight: 10,
          }}
        >
          <GmailIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textinputContainer: {
    marginTop: 15,
    marginBottom: 10,
    justifyContent: 'center',
  },
  countryPhoneInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
  },
  phoneCodeDropdown: {
    borderRadius: 8,
    backgroundColor: "#1d2023",
    marginRight: 16,
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
  },
  countryFlag: {
    width: 24,
    aspectRatio: 1,
    borderRadius: 100,
    marginRight: 10,
  },
  textInpoutCommonStyle: {
    paddingLeft: 10,
    height: 42,
    borderRadius: 8,
    fontSize: 14,
    flex: 1,
  },
  defaultTextInputStyle: { backgroundColor: "#1d2023", color: 'white' },
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
    top: 12,
  },
  continueButtonStyle: {
    width: "100%",
    height: 42,
    marginTop: 20,
    marginLeft: "-0.5%",
    borderWidth: 0,
  },
  card: {
    height: "85%",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "transparent",
  },
  title: {
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    paddingBottom: 20,
  },
  subtitle: {
    fontWeight: "400",
    color: "#9c9c9c",
    textAlign: "center",
    paddingBottom: 25,
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
