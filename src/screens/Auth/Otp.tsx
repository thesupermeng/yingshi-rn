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
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {ResendCountDown} from './resendCountDown';

const OtpInputs = props => {
  const storeToken = useSelector(state => state.userToken);
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('      ');
  const [otpTextInput, setOtpTextInput] = useState([]);
  const [resend, setResend] = useState(false);
  const [isValid, setValid] = useState(0); // 0: have not checked, 1: invalid, 2: valid
  const navigator = useNavigation();

  useEffect(() => {
    otpTextInput[0].focus();
  }, []);
  // to make sure countdown reset before restart the countdown
  const resendOTP = email => {
    setResend(false);
    loginApiCall({email: email});
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
        let result = await otpApiCall(
          verfifyPayload,
          dispatch,
          storeToken.user_token,
          storeToken.refresh_token,
        );
        if (result.state === 'new') {
          otpCompleteEvent = new OtpCompleteEvent();
          otpCompleteEvent.send();
          navigator.navigate('CricketNickname', {
            nickname: result.data.nickname,
          });
        } else if (result.state === 'existing') {
          otpCompleteEvent = new OtpCompleteEvent();
          otpCompleteEvent.send();
          navigator.navigate('CricketRoute', {nickname: result.data.nickname});
        } else if (result.state === 'otp Invalid') {
          otpFailedEvent = new OtpFailedEvent();
          otpFailedEvent.send();
          setValid(1);
        } else if (result.state === 'otp expired') {
          otpFailedEvent = new OtpFailedEvent();
          otpFailedEvent.send();
          setValid(1);
        }
        return;
      }
      let new_otp = otp.replace(/./g, (c, i) => (i == index ? key : c));
      setOtp(new_otp);
    }
    setValid(0);
  };

  return (
    <View style={{backgroundColor: 'black'}}>
      {/* <Text style={styles.OTPtitle}>OTP Verification</Text> */}
      <Text style={styles.description}>
        Enter the OTP that was sent to your email address
      </Text>
      <Text style={styles.hyperlink}>{props.email}</Text>
      <View style={styles.containerStyle}>
        {[0, 0, 0, 0, 0, 0].map((i, j) => {
          return (
            <TextInput
              key={j}
              style={
                isValid === 0 ? styles.inputStyle : styles.inputInvalidStyle
              }
              keyboardType="numeric"
              onKeyPress={e => focusPrevious(e.nativeEvent.key, j)}
              ref={ref => {
                otpTextInput[j] = ref;
              }}
              value={otp[j]}
              maxLength={1}
            />
          );
        })}
      </View>
      {isValid === 1 && (
        <Text style={styles.danger}>Incorrect OTP. Please try again!</Text>
      )}
      <Text style={styles.description}>Didn't receive the code?</Text>
      {!resend && <ResendCountDown resend={resend} setResend={setResend} />}
      {resend && (
        <TouchableWithoutFeedback
          onPress={() => {
            // otpResendEvent = new OtpResendEvent();
            // otpResendEvent.send();
            resendOTP(props.email);
            setOtpTextInput([]);
            setOtp('      ');
            setValid(0);
          }}>
          <View>
            <Text style={[styles.hyperlink, {marginBottom: 10}]}>
              Resend OTP
            </Text>
          </View>
        </TouchableWithoutFeedback>
      )}
      {/* <Text style={[styles.description, {marginBottom:10}]}>If you don't receive the OTP within 60 seconds, please click the <Text style={styles.hyperlink}>Resend</Text> button to receive the OTP again.</Text> */}
      <Text style={styles.description}>
        If you can't find the OTP code, please check your junk mail.
      </Text>
    </View>
  );
};

export default () => {
  const [optVarificationState, setOptVarificationState] = useState(2);
  const {colors, textVariants, icons, spacing} = useTheme();
  return (
    <View
      style={{
        height: '100%',
        paddingVertical: '10%',
        backgroundColor: 'red',
      }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={{flex: 1}}>
          <View style={{...styles.topNav}}>
            <Text
              style={{
                ...textVariants.bigHeader,
                color: colors.text,
                fontSize: 22,
              }}>
              我的
            </Text>
            {/* <TouchableOpacity onPress={() => dispatch(toggleTheme(!themeReducer.theme))}>
                    {
                        themeReducer.theme
                            ? <LightMode color={icons.iconColor} height={26} width={26} />
                            : <DarkMode color={icons.iconColor}  height={26} width={26} />

                    }
                </TouchableOpacity> */}
          </View>
          {/* <View style={styles.headerBarShadow}/> */}
          <View style={{paddingLeft: 20, paddingRight: 20, marginTop: '30%'}}>
            <OtpInputs
              optVarificationState={optVarificationState}
              setOptVarificationState={setOptVarificationState}
              email={'props.route.params.email'}
            />
          </View>
        </SafeAreaView>
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
    alignItems: 'center',
    height: 80,
    width: '100%',
  },
  inputStyle: {
    textAlign: 'center',
    backgroundColor: '#F4F4F4',
    color: '#2F3434',
    width: 48,
    height: 48,
    borderRadius: 6,
  },
  inputInvalidStyle: {
    textAlign: 'center',
    backgroundColor: '#FFEEEE',
    color: '#FF3434',
    borderColor: '#FF3434',
    borderWidth: 1,
    width: 48,
    height: 48,
    borderRadius: 6,
  },
  OTPtitle: {
    fontWeight: '800',
    fontSize: 40,
    lineHeight: 48,
    width: '80%',
    textAlign: 'left',
    marginBottom: 20,
  },
  description: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'left',
  },
  hyperlink: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'left',
    color: 'white',
  },
  danger: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
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
});
