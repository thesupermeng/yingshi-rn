import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { useEffect } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Text,
  Keyboard,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import ScreenContainer from '../../components/container/yys_executor_expand';
import TitleWithBackButtonHeader from '../../components/header/yys_anner_header';
import { ResendCountDown } from '../Auth/yys_country';

import { useDispatch } from 'react-redux';
import { addUserAuthState } from '@redux/actions/yys_gesture';
import { changeScreenAction } from '@redux/actions/yys_runtimescheduler';
import { useSelector } from '@hooks/yys_frame';
import { yys_HejiCricket } from '@redux/reducers/yys_privacy_round';
import { yys_StringsVignette } from '@utility/yys_ping';
import { yys_FavoriteCustom } from '@constants';
import { yys_StatsForm } from '@utility/yys_context_muted';


export default (props: any) => {
  
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    console.log()
  }, []);

  return (
    <ScreenContainer>
      <View
        style={{
          height: '100%',
        }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <>
            <TitleWithBackButtonHeader title="" />
            <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: '20%' }}>
              <OtpInputs
                code={props.route.params.pin ?? ""}
                showLoading = {setShowLoading}
              />
            </View>
          </>
        </TouchableWithoutFeedback>
      </View>
      {showLoading && <View 
        style={{
          width: '100%', 
          height: '100%', 
          position: 'absolute', 
          zIndex: 1000, 
          backgroundColor: 'rgba(20,22,25,0)',
          justifyContent: 'center', 
          alignItems: 'center'
        }}
      >
        <FastImage
          style={{ height: 150, width: 150 }}
          source={require("@static/images/sinaHover.gif")}
          resizeMode={"contain"}
        />
      </View>}
    </ScreenContainer>
  );
};

type OtpInputsProps = {
  code: string,
  showLoading: (loading: boolean) => void,
}

const OtpInputs = ({
  code,
  showLoading
}: OtpInputsProps) => {
  const { colors } = useTheme();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [otp, setOtp] = useState('      ');
  const [otpTextInput, setOtpTextInput] = useState<TextInput[]>([]);
  const [resend, setResend] = useState(false);
  const [isValid, setValid] = useState(0); // 0: have not checked, 1: invalid, 2: valid

  const [focusedInput, setFocusedInput] = useState(null); // Track the focused input index

  const userState = useSelector<yys_HejiCricket>('userReducer');

  const styles = useMemo(() => createStyles({
    colors,
  }), []);

  const handleFocus = (index: any) => {
    console.log(index);
    setFocusedInput(index);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  useEffect(() => {
    otpTextInput[0].focus();
  }, []);

  const formatPhoneNumber = (phoneNumber:any) => {
    // Remove all non-numeric characters from the phone number
    const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

    // Check if the phone number is empty or null
    if (!numericPhoneNumber) return '';

    const countryCode = numericPhoneNumber.substring(0, 3); // Replace with your country code length
    const firstPart = numericPhoneNumber.substring(3, 6);
    const secondPart = numericPhoneNumber.substring(6);

    const formattedNumber = `+${countryCode} ${firstPart} ${secondPart}`;
    return formattedNumber;
  };

  // to make sure countdown reset before restart the countdown
  const resendOTP = async () => {
    setResend(false);

    try {
      showLoading(true);
      const result = await yys_StringsVignette.post(yys_FavoriteCustom.setPinCode, {
        body: {
          pin: code,
          otp: ""
        },
      });
      if (result.success === false) {
        throw result;
      }
    } catch (err: any) {
      if (!err?.message.includes('验证码已发送')) {
        showLoading(false);
        yys_StatsForm.showToast(err.message);
        return;
      }
    }
    showLoading(false);
    setOtpTextInput([]);
    setOtp('      ');
    setValid(0);
  };

  const focusPrevious = async (key: string, index: number) => {
    if (key === 'Backspace') {
      if (otp[index] == ' ' && index !== 0) {
        let new_otp = otp.replace(/./g, (c, i) => (i == index ? ' ' : c));
        new_otp = new_otp.replace(/./g, (c, i) => (i == index - 1 ? ' ' : c));
        setOtp(new_otp);
        otpTextInput[index - 1].focus();
      } else {
        let new_otp = otp.replace(/./g, (c, i) => (i == index ? ' ' : c));
        setOtp(new_otp);
      }
    } else if (!isNaN(parseInt(key, 10))) {
      if (index < otpTextInput.length - 1 && key) {
        otpTextInput[index + 1].focus();
      }
      if (index === otpTextInput.length - 1) {
        otpTextInput[index].blur();
        // last digit enter, need to verify otp
        let new_otp = otp.replace(/./g, (c, i) => (i == index ? key : c));
        setOtp(new_otp);

        // submit otp when 6 digit
        await onSubmit(new_otp);

        return;
      }
      let new_otp = otp.replace(/./g, (c, i) => (i == index ? key : c));
      setOtp(new_otp);
    }
    setValid(0);
  };

  const onSubmit = async (new_otp: string) => {
    let result: any;

    showLoading(true);
    try {
      result = await yys_StringsVignette.post(yys_FavoriteCustom.setPinCode, {
        body: {
          pin: code,
          otp: new_otp
        },
      });
      if (result.success === false) {
        throw result;
      }
    } catch (err: any) {
      showLoading(false);
      setValid(1);
      result = { state: '' };
      result.state = err;
      return;
    }

    const user = userState.user;
    const resultModify = user?.userAhaWithDrawalPin === 1
    const resultMsg = resultModify ? '安全PIN码修改成功' : '安全PIN码设置成功';
    if (user) {
      user.userAhaWithDrawalPin = 1;
      await dispatch(addUserAuthState(user));
    }

    showLoading(false);
    await dispatch(changeScreenAction(resultMsg));
    navigation.goBack();
  }

  return (
    <View>
      {/* <Text style={styles.title}>输入邮箱验证码</Text> */}
      <Text style={styles.title}>{userState.user?.userEmail ? '输入邮箱验证码' : '输入OTP验证码'}</Text>

      <Text style={styles.description}>
        验证码已发送至{' '}
        {/* <Text style={styles.hyperlink}>
          {email ?? phone}
        </Text>{' '} */}
        <Text style={styles.hyperlink}>
          {userState.user?.userEmail ? userState.user?.userEmail : formatPhoneNumber(userState.user?.userPhoneNumber)}
        </Text>{' '}
      </Text>

      {userState.user?.userEmail && <Text style={styles.description}>如果没有收到邮件，请检查垃圾邮箱</Text>}

      <View style={styles.containerStyle}>
        {[0, 0, 0, 0, 0, 0].map((_, i) => {
          return (
            <TextInput
              key={i}
              style={[
                isValid === 0 ? styles.inputStyle : styles.inputInvalidStyle,
                focusedInput === i ? styles.inputFocused : null,
              ]}
              keyboardType="numeric"
              onKeyPress={e => focusPrevious(e.nativeEvent.key, i)}
              ref={ref => {
                otpTextInput[i] = ref!;
              }}
              onBlur={handleBlur}
              onFocus={() => handleFocus(i)}
              value={otp[i]}
              maxLength={1}
            />
          );
        })}
      </View>
      {isValid === 1 && (
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 20,
          }}>
          <Image
            style={styles.iconStyle}
            source={require('@static/images/invite/hongkongLibswresampleSigmob.png')}
          />

          <Text style={styles.danger}>验证码不正确，请重试</Text>
        </View>
      )}

      {!resend && <ResendCountDown resend={resend} setResend={setResend} />}

      {resend && (
        <TouchableWithoutFeedback
          onPress={() => {resendOTP()}}
          style={{ marginTop: 35 }}
        >
          <Text
            style={styles.hyperlink}
          >
            重新发送验证码
          </Text>
        </TouchableWithoutFeedback>
      )}
      {/* <Text style={[styles.description, {marginBottom:10}]}>If you don't receive the OTP within 60 seconds, please click the <Text style={styles.hyperlink}>Resend</Text> button to receive the OTP again.</Text> */}
    </View>
  );
};

const createStyles = ({ colors }: any = {}) => StyleSheet.create({
  headerBarShadow: {
    width: '100%',
    marginTop: 12,
    height: 4,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    elevation: 5,
    shadowRadius: 3,
    backgroundColor: 'white',
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    alignItems: 'center',
    height: 80,
    width: '100%',
  },
  inputStyle: {
    textAlign: 'center',
    backgroundColor: '#1D2023',
    color: '#ffffff',
    width: '15%',
    height: 48,
    borderRadius: 6,
    fontSize: 24,
  },
  inputInvalidStyle: {
    textAlign: 'center',
    backgroundColor: '#1D2023',
    color: '#FF1010',
    width: '15%',
    height: 48,
    borderRadius: 6,
    fontSize: 24,
  },
  OTPtitle: {
    fontWeight: '800',
    fontSize: 40,
    width: '80%',
    textAlign: 'left',
    marginBottom: 20,
  },
  description: {
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    fontWeight: '600',
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  hyperlink: {
    fontWeight: '600',
    fontSize: 15,
    paddingLeft: 10,
    textAlign: 'center',
    color: colors?.primary,
    marginTop: 50
  },
  danger: {
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'left',
    color: '#FF3434',
  },
  topNav: {
    paddingTop: 8,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  inputFocused: {
    borderColor: colors.primary,
    borderWidth: 1,
  },
  iconStyle: {
    height: 22,
    width: 22,
    marginRight: 5,
    position: 'relative',
    top: 1,
  },
});
