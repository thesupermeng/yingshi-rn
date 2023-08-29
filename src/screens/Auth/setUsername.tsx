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
import {useAppSelector} from '../../hooks/hooks';
import {RootState} from '../../redux/store';

export default (props: any) => {
  const [optVarificationState, setOptVarificationState] = useState(2);
  const {colors, textVariants, icons, spacing} = useTheme();

  const userState = useAppSelector(({userReducer}: RootState) => userReducer);

  useEffect(() => {
    console.log('userState');
    console.log(userState);
  }, []);

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
            <View
              style={{
                backgroundColor: 'transparent',
              }}>
              {/* <Text style={styles.OTPtitle}>OTP Verification</Text> */}
              <Text style={styles.title}>
                输入邮箱验证码 {userState.userToken}
              </Text>

              <Text style={styles.description}>
                验证码已发送至{' '}
                <Text style={[styles.hyperlink, {color: colors.primary}]}>
                  {props.email}
                </Text>{' '}
              </Text>
              <Text style={styles.description}>
                如果没有收到邮件，请检查垃圾邮箱
              </Text>
            </View>
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
