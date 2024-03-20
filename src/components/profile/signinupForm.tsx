import { Button } from "@ant-design/react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/hooks";
import {
  changeScreenAction,
  hideBottomSheetAction,
  hideLoginAction,
  navigateToProfileScreen,
} from "@redux/actions/screenAction";
import SpinnerOverlay from "../modal/SpinnerOverlay";
import PhoneIcon from '@static/images/phone.svg';
import MailIcon from '@static/images/mail.svg';
import GmailIcon from '@static/images/gmail.svg';
import DropdownIcon from '@static/images/dropdown.svg';
import { CountryPhoneList } from "./countryPhoneList";
import FastImage from '../common/customFastImage';
import { CountryPhoneCodeType } from "@type/ajaxTypes";
import { ReadAgreementPrivacyPolicy } from "./readAgreementPrivacyPolicy";

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useQuery } from "@tanstack/react-query";
import { showToast } from "../../Sports/utility/toast";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UmengAnalytics from "../../../Umeng/UmengAnalytics";
import { useDispatch } from "react-redux";
import { addUserAuthState } from "@redux/actions/userAction";
import { UserApi } from "@api";
import { User } from "@models/user";
import { UserStateType } from "@redux/reducers/userReducer";
import AppsFlyerAnalytics from "../../../AppsFlyer/AppsFlyerAnalytic";
import TickedIcon from '@static/images/ticked.svg';
import { IS_OTHER_SKIN } from "@utility/constants";


export type SigninupRef = {
  resetValue: () => void,
}

type Props = {
  onGooleLoginSuccess?: () => void,
}

export const SigninupForm = forwardRef<SigninupRef, Props>(({
  onGooleLoginSuccess,
}: Props, ref) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [loginType, setloginType] = useState<'email' | 'phone'>('email');

  const [loginValue, setLoginValue] = useState(''); // email or phone
  const [referralCode, setReferralCode] = useState('');
  const [loginValueErrMsg, setLoginValueErrMsg] = useState<string | null>(null); // null is valid, else is invalid (include empty string)
  const [referralCodeErrMsg, setReferralCodeErrMsg] = useState<string | null>(null);
  const [isReadTermNCondition, setReadTermNCondition] = useState(true);

  // for country phone code
  const [isShowCountryList, setShowCountryList] = useState(false);
  const [countryPhoneSelected, setCountryPhoneSelected] = useState<CountryPhoneCodeType>();

  // others
  const [isSubmitting, setSubmitting] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);

  const userState = useSelector<UserStateType>('userReducer');

  const { data: countryPhoneOptions } = useQuery({
    queryKey: ["CountryPhoneOptions"],
    queryFn: () => UserApi.getCountries(),
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

    if (loginType === 'phone') {
      // Remove all non-digit characters from the input value
      const formattedValue = value.replace(/\D/g, '');

      let formattedPhoneNumber = '';
      for (let i = 0; i < formattedValue.length; i++) {
        formattedPhoneNumber += formattedValue[i];
        if (i === 2 && formattedValue.length > 3) {
          formattedPhoneNumber += ' ';
        } else if (i === 5 && formattedValue.length > 6) {
          formattedPhoneNumber += ' ';
        }
      }

      // Update the state with the formatted phone number
      setLoginValue(formattedPhoneNumber);
      setLoginValueErrMsg(null);
    }

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

  const onChangeloginType = (type: 'email' | 'phone') => {
    setloginType(type);
    setLoginValue('');
    setLoginValueErrMsg(null);
  }

  const onPressGoogleLogin = async () => {
    if (isSubmitting) return;

    if (isReadTermNCondition == false) {
      showToast('请勾选用户协议和隐私协议');
      return;
    }

    let userInfo;

    try {
      await GoogleSignin.hasPlayServices();

      if (await GoogleSignin.isSignedIn()) {
        userInfo = await GoogleSignin.getCurrentUser();
      } else {
        userInfo = await GoogleSignin.signIn();
      }

    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        showToast('请勿频繁操作');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        showToast('谷歌服务获取失败');
      } else {
        // some other error happened
        showToast('登入失败，请稍后再试');
      }
      console.log(error.toString());
      return;
    }

    if (userInfo === null) {
      showToast('登入失败，请稍后再试');
      return;
    }

    try {
      setSubmitting(true);
      userInfo = await UserApi.signinupUser({
        loginType: 'EMAIL',
        email: userInfo.user.email,
        referralCode: referralCode,
        isGoogleLogin: true,
        userId: userState.user?.userId ?? '',
      });

    } catch (err: any) {
      GoogleSignin.signOut();
      showToast(err.toString());
      return;
    } finally {
      setSubmitting(false);
    }

    const resultData = userInfo.data;

    const user = User.fromJson(resultData);

    await dispatch(addUserAuthState(user));

    if (userInfo.message.includes("注册成功")) {
      navigation.navigate('SetUsername');

    } else if (userInfo.message.includes("登录成功")) {

      if (user.isVip()) {
        await AsyncStorage.setItem("showAds", "false");
      } else {
        await AsyncStorage.setItem("showAds", "true");
      }

      await dispatch(changeScreenAction('登录成功'));

      // ========== for analytics - start ==========
      UmengAnalytics.userCenterLoginSuccessTimesAnalytics();
      AppsFlyerAnalytics.userCenterLoginSuccessTimesAnalytics();

      if (user.isVip()) {
        UmengAnalytics.userCenterVipLoginSuccessTimesAnalytics();
      }
      // ========== for analytics - end ==========

      if (onGooleLoginSuccess) onGooleLoginSuccess();
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

    const formattedLoginValue = loginType === 'phone' ? loginValue.replace(/\s/g, '') : loginValue;

    // if (isGoogleLogin !== true && loginValue === "") {
    //   setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
    //   return;
    // }

    if (formattedLoginValue === "" || loginValueErrMsg !== null) {
      setLoginValueErrMsg(loginType === 'email' ? '请填写邮箱账号' : '请填写手机号码');
      return;
    }

    try {
      setSubmitting(true);
      await UserApi.signinupUser({
        loginType: loginType === 'email' ? 'EMAIL' : 'SMS',
        email: loginType === 'email' ? loginValue : undefined,
        // phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + loginValue : undefined,
        phone: loginType === 'phone' ? countryPhoneSelected?.country_phonecode + formattedLoginValue : undefined,
        countryId: loginType === 'phone' ? countryPhoneSelected?.country_id : undefined,
        referralCode: referralCode,
        userId: userState.user?.userId ?? '',
      });
    } catch (err: any) {
      if (!err?.message.includes('验证码已发送')) {
        setSubmitting(false);
        setLoginValueErrMsg(err.message);
        return;
      }
    }

    setSubmitting(false);

    dispatch(hideBottomSheetAction());
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
  countryPhoneSelected?: CountryPhoneCodeType,
  onLoginValueChange: (value: string) => void,
  onReferralCodeChange: (value: string) => void,
  onPressTermNCondition: () => void,
  onChangeloginType: (type: 'email' | 'phone') => void,
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
  const { colors, dark } = useTheme();
  const styles = useMemo(() => createStyles({ colors, dark }), [colors, dark]);

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>「登录/注册」解锁更多精彩内容！</Text>
      {/* <Text style={styles.subtitle}>登录后可管理您的账号，多端同步观看历史和收藏夹</Text> */}
      {/* ============================== tab control ============================== */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tabItemContainer}
          onPress={() => onChangeloginType('email')}
        >
          <Text style={[loginType === 'email' ? styles.tabItemFocusText : styles.tabItemUnfocusText]}>电邮地址</Text>
          {loginType === 'email' &&
            <View
              style={{
                width: 30,
                height: 4,
                borderRadius: 20,
                backgroundColor: colors.primary,
              }}
            />
          }
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItemContainer}
          onPress={() => onChangeloginType('phone')}
        >
          <Text style={[loginType === 'phone' ? styles.tabItemFocusText : styles.tabItemUnfocusText]}>手机号码</Text>
          {loginType === 'phone' &&
            <View
              style={{
                width: 30,
                height: 4,
                borderRadius: 20,
                backgroundColor: colors.primary,
              }}
            />
          }
        </TouchableOpacity>
      </View>
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
              +{countryPhoneSelected?.country_phonecode}
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
              placeholder="请输入手机号"
              placeholderTextColor="#B6B6B6"
            />
          </View>
        }

        {((loginValue !== "" && loginValueErrMsg === null) || (loginValueErrMsg && loginValueErrMsg?.includes("稍后"))) && (
          <TickedIcon
            style={styles.iconStyle}
            width={18}
            height={18}
            color={colors.success}
            fill={'white'}
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
            color: loginValue === "" || !isReadTermNCondition ? "white" : 'white',
          }}
        >
          登入
        </Text>
      </Button>

      <Text style={{ fontSize: 12, color: "#9c9c9c", marginVertical: 10, }}>
        如果未注册，登入后将自动为您创建账号。
      </Text>

      <ReadAgreementPrivacyPolicy
        isReadChecked={isReadTermNCondition}
        onPress={onPressTermNCondition}
        onPressUserAgreement={() => {
          dispatch(navigateToProfileScreen());
          navigation.navigate("用户协议");
          dispatch(hideLoginAction());
        }}
        onPressPrivacyPolicy={() => {
          dispatch(navigateToProfileScreen());
          navigation.navigate("隐私政策");
          dispatch(hideLoginAction());

        }}
      />

      {/* ============================== other login type ============================== */}
      <TouchableOpacity
        onPress={onPressGoogleLogin}
        style={{
          backgroundColor: '#1D2023',
          padding: 8,
          paddingHorizontal: 20,
          borderRadius: 8,
          marginRight: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <GmailIcon style={{ marginRight: 10, }} />
        <Text style={{
          flex: 1,
          textAlign: 'center',
          color: 'white',
          fontSize: 16,
        }}>
          使用Google账号登录
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const createStyles = ({ colors, dark }: any) => StyleSheet.create({
  textinputContainer: {
    marginTop: 15,
    marginBottom: 10,
    justifyContent: 'center',
  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  tabItemContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  tabItemFocusText: {
    color: colors.text,
    paddingBottom: 10,
  },
  tabItemUnfocusText: {
    color: '#9c9c9c',
    paddingBottom: 10,
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
  defaultTextInputStyle: {
    color: colors.text,
    backgroundColor: dark ? "#1d2023" : '#D9D9D9',
  },
  correctTextInputStyle: {
    color: colors.text,
    backgroundColor: dark ? "#1d2023" : '#D9D9D9',
  },
  invalidTextInputStyle: {
    backgroundColor: dark ? "#1d2023" : '#D9D9D9',
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
    paddingBottom: 30,
  },
  title: {
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    color: colors.text,
    paddingBottom: 20,
  },
  subtitle: {
    fontWeight: "400",
    color: colors.text,
    textAlign: "center",
    paddingBottom: 25,
  },
  btnActive: {
    backgroundColor: colors.primary,
    color: "#000",
  },
  btnInactive: {
    // backgroundColor: "#1d2023",
    backgroundColor: "#1d2023",
  },
  danger: {
    fontWeight: "400",
    fontSize: 14,
    textAlign: "left",
    color: "#FF3434",
  },
});
