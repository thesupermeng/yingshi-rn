import {useNavigation, useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Text,
  SafeAreaView,
  Keyboard,
  Image,
} from 'react-native';
import {ScreenContainer} from 'react-native-screens';
import {useDispatch, useSelector} from 'react-redux';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';

import {ResendCountDown} from './resendCountDown';
import {registerUser, loginUser} from '../../features/user';

const OtpInputs = props => {
  const storeToken = useSelector(state => state.userToken);
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('      ');
  const [otpTextInput, setOtpTextInput] = useState([]);
  const [resend, setResend] = useState(false);
  const [isValid, setValid] = useState(0); // 0: have not checked, 1: invalid, 2: valid
  const navigator = useNavigation();

  const [focusedInput, setFocusedInput] = useState(null); // Track the focused input index

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
  // to make sure countdown reset before restart the countdown
  const resendOTP = async () => {
    setResend(false);
    console.log('props');
    console.log(props);
    if (props.action == 'register') {
      console.log('resend OTP register');
      await registerUser({
        email: props.email,
        referral_code: props.referral_code,
        device_id: props.device_id,
        otp: '',
      });
    }

    if (props.action == 'login') {
      await loginUser({
        email: props.email,
        otp: '',
      });
    }
    return;
  };

  const focusPrevious = async (key, index) => {
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
        let verfifyPayload = {
          email: props.email,
          code: new_otp,
        };

        // let result = await otpApiCall(
        //   verfifyPayload,
        //   dispatch,
        //   storeToken.user_token,
        //   storeToken.refresh_token,
        // );
        console.log('result');
        let result;
        try {
          if (props.action == 'register') {
            result = await registerUser({
              email: props.email,
              referral_code: props.referralCode,
              device_id: props.device_id,
              otp: new_otp,
            });
          }

          if (props.action == 'login') {
            result = loginUser({
              email: props.email,
              otp: new_otp,
            });
          }
        } catch (err: any) {
          console.log('err debug');
          console.log(err.response.data.message);
          setValid(1);
          result = {state: ''};
          result.state = err.response.data.message;
          //  props.setErrMsg(err.response.data.message);
        }

        console.log('result debug');
        console.log(result);
        return;
        if (result.state === 'new') {
          navigator.navigate('CricketNickname', {
            nickname: result.data.nickname,
          });
        } else if (result.state === 'existing') {
          navigator.navigate('CricketRoute', {nickname: result.data.nickname});
        } else if (result.state === 'otp Invalid') {
          setValid(1);
        } else if (result.state === 'otp expired') {
          setValid(1);
        }
        return;
      }
      let new_otp = otp.replace(/./g, (c, i) => (i == index ? key : c));
      setOtp(new_otp);
    }
    setValid(0);
  };
  const {colors, textVariants, icons, spacing} = useTheme();

  return (
    <View
      style={{
        backgroundColor: 'transparent',
      }}>
      {/* <Text style={styles.OTPtitle}>OTP Verification</Text> */}
      <Text style={styles.title}>输入邮箱验证码</Text>

      <Text style={styles.description}>
        验证码已发送至{' '}
        <Text style={[styles.hyperlink, {color: colors.primary}]}>
          {props.email}
        </Text>{' '}
      </Text>
      <Text style={styles.description}>如果没有收到邮件，请检查垃圾邮箱</Text>
      <View style={styles.containerStyle}>
        {[0, 0, 0, 0, 0, 0].map((i, j) => {
          return (
            <TextInput
              key={j}
              style={[
                isValid === 0 ? styles.inputStyle : styles.inputInvalidStyle,
                focusedInput === j ? styles.inputFocused : null,
              ]}
              keyboardType="numeric"
              onKeyPress={e => focusPrevious(e.nativeEvent.key, j)}
              ref={ref => {
                otpTextInput[j] = ref;
              }}
              onBlur={handleBlur}
              onFocus={() => handleFocus(j)}
              value={otp[j]}
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
          }}>
          <Image
            style={styles.iconStyle}
            source={require('../../../static/images/invite/danger.png')}
          />

          <Text style={styles.danger}>验证码不正确，请重试</Text>
        </View>
      )}
      {/* <Text>没有收到验证码?</Text> */}
      {!resend && <ResendCountDown resend={resend} setResend={setResend} />}
      {resend && (
        <TouchableWithoutFeedback
          onPress={async () => {
            // otpResendEvent = new OtpResendEvent();
            // otpResendEvent.send();
            console.log('await resendOTP();');
            await resendOTP();

            setOtpTextInput([]);
            setOtp('      ');
            setValid(0);
          }}>
          <View style={{marginTop: 35}}>
            <Text
              style={[
                styles.hyperlink,
                {color: colors.primary, textAlign: 'center', fontWeight: '600'},
              ]}>
              重新发送验证码
            </Text>
          </View>
        </TouchableWithoutFeedback>
      )}
      {/* <Text style={[styles.description, {marginBottom:10}]}>If you don't receive the OTP within 60 seconds, please click the <Text style={styles.hyperlink}>Resend</Text> button to receive the OTP again.</Text> */}
    </View>
  );
};

export default (props: any) => {
  const [optVarificationState, setOptVarificationState] = useState(2);
  const {colors, textVariants, icons, spacing} = useTheme();
  return (
    <View
      style={{
        height: '100%',
        paddingVertical: '10%',
        backgroundColor: '#000',
      }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <>
          <TitleWithBackButtonHeader title="" />

          {/* <View style={styles.headerBarShadow}/> */}
          <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: '20%'}}>
            <OtpInputs
              optVarificationState={optVarificationState}
              setOptVarificationState={setOptVarificationState}
              email={props.route.params.email}
              referral_code={props.route.params.referralCode}
              device_id={props.route.params.deviceId}
              action={props.route.params.action}
            />
          </View>
        </>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBarShadow: {
    width: '100%',
    marginTop: 12,
    height: 4,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {width: 0, height: 4},
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
    width: 48,
    height: 48,
    borderRadius: 6,
    fontSize: 24,
  },
  inputInvalidStyle: {
    textAlign: 'center',
    backgroundColor: '#1D2023',
    color: '#FF1010',
    width: 48,
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
    borderColor: '#FAC33D',
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
