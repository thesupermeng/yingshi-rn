import { useTheme } from '@react-navigation/native';
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

import ScreenContainer from '../../components/container/yys_executor_expand';
import TitleWithBackButtonHeader from '../../components/header/yys_anner_header';

import { useSelector } from '@hooks/yys_frame';
import { yys_HejiCricket } from '@redux/reducers/yys_privacy_round';
import { yys_StatsForm } from '@utility/yys_context_muted';
import { yys_StringsVignette } from '@utility/yys_ping';
import { yys_FavoriteCustom } from '@constants';
import FastImage from 'react-native-fast-image';

export default (props: any) => {

  const [showLoading, setShowLoading] = useState(false);
  
  const handlePinCode = async (code: string) => {
    if (props.route.params.verify === true) {
      return;
    }

    try {
      setShowLoading(true);
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
        setShowLoading(false);
        yys_StatsForm.showToast(err.message);
        return;
      }
    }

    setShowLoading(false);
    props.navigation.replace("AhaPinOtpScreen", {pin: code});
  };

  return (
    <ScreenContainer>
      <View style={{height: '100%'}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <>
            <TitleWithBackButtonHeader title="安全PIN码" />
            <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: '20%' }}>
              <PinInput 
                useForVerify={props.route.params.verify} 
                onSetPin={(code:string) => {
                  handlePinCode(code);
                }
              }/>
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

type PinProps = {
  useForVerify: boolean,
  onSetPin: (code:string) => void,
}

const PinInput = ({useForVerify, onSetPin}:PinProps) => {
  const { colors } = useTheme();

  const [isRepeat, setIsRepeat] = useState(false);
  const userState = useSelector<yys_HejiCricket>('userReducer');
  const isModify = useMemo(() => userState.user?.userAhaWithDrawalPin === 1, [userState.user?.userAhaWithDrawalPin]);

  const [otp1, setOtp1] = useState('      ');
  const [otp2, setOtp2] = useState('      ');
  const [otpTextInput, setOtpTextInput] = useState<TextInput[]>([]);
  const [isValid] = useState(0); // 0: have not checked, 1: invalid, 2: valid

  const [focusedInput, setFocusedInput] = useState(null); // Track the focused input index

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

  const focusPrevious = async (key: string, index: number) => {
    let old_otp = isRepeat ? otp2 : otp1;
    if (key === 'Backspace') {
      if (old_otp[index] == ' ' && index !== 0) {
        let new_otp = old_otp.replace(/./g, (c, i) => (i == index ? ' ' : c));
        new_otp = new_otp.replace(/./g, (c, i) => (i == index - 1 ? ' ' : c));
        if (isRepeat) {
          setOtp2(new_otp);
        } else {
          setOtp1(new_otp);
        }
        otpTextInput[index - 1].focus();
      } else {
        let new_otp = old_otp.replace(/./g, (c, i) => (i == index ? ' ' : c));
        if (isRepeat) {
          setOtp2(new_otp);
        } else {
          setOtp1(new_otp);
        }
      }
    } else if (!isNaN(parseInt(key, 10))) {
      if (index < otpTextInput.length - 1 && key) {
        otpTextInput[index + 1].focus();
        let new_otp = old_otp.replace(/./g, (c, i) => (i == index ? key : c));
        if (isRepeat) {
          setOtp2(new_otp);
        } else {
          setOtp1(new_otp);
        }
      }
      if (index === otpTextInput.length - 1) {
        // last digit enter, need to verify otp
        let new_otp = old_otp.replace(/./g, (c, i) => (i == index ? key : c));
        if (isRepeat) {
          setOtp2(new_otp);
        } else {
          setOtp1(new_otp);
        }

        // submit otp when 6 digit
        if (isRepeat) {
          if (otp1 == new_otp) {
            otpTextInput[index].blur();
            onSetPin(new_otp)
          } else {
            otpTextInput[index].blur();
            setOtp1('      ')
            setOtp2('      ')
            setIsRepeat(false)
            // 键盘弹出时，无法显示toast
            yys_StatsForm.showToast("两次输入的PIN码不一致，请重新输入");
          }
        } else if (useForVerify) {
          otpTextInput[index].blur();
          onSetPin(new_otp)
        } else {
          setIsRepeat(true);
          otpTextInput[0].focus();
        }
        return;
      }
      let new_otp = old_otp.replace(/./g, (c, i) => (i == index ? key : c));
      if (isRepeat) {
        setOtp2(new_otp);
      } else {
        setOtp1(new_otp);
      }
    }
  };

  const title = useMemo(() => {
    if (useForVerify) {
      return '输入安全PIN码';
    }
    if (isRepeat) {
      return '确认安全PIN码';
    }
    return isModify ? '修改安全PIN码' : '设置安全PIN码';
  }, [isModify, isRepeat]);

  const description = useMemo(() => {
    if (useForVerify) {
      return '请输入您的安全PIN码以继续提款';
    }
    return isRepeat ? '请再次输入您的安全PIN码以确认' : '请输入6位数字的安全PIN码，以保障您的交易安全';
  }, [isRepeat]);

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
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
                const inputs = otpTextInput;
                inputs[i] = ref!;
                setOtpTextInput(inputs);
              }}
              onBlur={handleBlur}
              onFocus={() => handleFocus(i)}
              value={isRepeat ? (otp2[i] === ' ' ? '' : otp2[i]) : (otp1[i] === ' ' ? '' : otp1[i])}
              maxLength={1}
              secureTextEntry={true}
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
    width: '100%'
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
    fontSize: 12,
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
