import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Text,
  SafeAreaView,
  Keyboard,
  Image,
  Touchable,
  Alert,
  BackHandler,
} from 'react-native';
// import {ScreenContainer} from 'react-native-screens';
import ScreenContainer from '../../components/container/screenContainer';
import { useDispatch, useSelector } from 'react-redux';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ResendCountDown } from './resendCountDown';
import { useAppSelector } from '@hooks/hooks';
import { RootState } from '@redux/store';
import { InputItem, Button } from '@ant-design/react-native';
import { ProfileTabParamList } from '@type/navigationTypes';
import { changeScreenAction } from '@redux/actions/screenAction';
import { updateUsernameState } from '@redux/actions/userAction';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { userModel } from '@type/userType';
import BackButton from '../../components/button/backButton';
import { UserApi } from '@api';
export default (props: any) => {
  const [optVarificationState, setOptVarificationState] = useState(2);
  const { colors, textVariants, icons, spacing } = useTheme();
  const [errMsg, setErrMsg] = useState('');
  const [username, setUsername] = useState('');
  const [usernameValid, setUsernameValid] = useState(true);
  const navigator = useNavigation();
  useEffect(() => {
    // Add an event listener for the hardware back button press
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        // Show an alert to inform the user
        Alert.alert(
          '',
          '请输入昵称。',
          [
            {
              text: 'OK',
              onPress: () => {
                // Handle the OK button press (if needed)
              },
            },
          ],
          { cancelable: false }, // Prevent dismissing the alert by tapping outside
        );

        // Prevent the default behavior (navigating back)
        return true; // Returning true will prevent the default behavior
      },
    );

    // Remove the event listener when the component unmounts
    return () => backHandler.remove();
  }, []);

  const onInputChange = (value: any) => {
    // setErrMsg('');

    const cleanedValue = value.replace(/\s+/g, '');

    setUsername(cleanedValue);
    ValidateUsername(cleanedValue);
  };
  const dispatch = useDispatch();
  function ValidateUsername(username: string) {
    if (username.length < 2) {
      setErrMsg('昵称必须介于2-18个字');
      setUsernameValid(false);
    } else {
      setErrMsg('');
      setUsernameValid(true);
    }
  }

  const updateUsernameHandler = async (isJump = false) => {
    if (username == '' && !isJump) {
      setErrMsg('请输入昵称');
      setUsernameValid(false);
      return;
    }

    if (username.length < 2 && !isJump) {
      return;
    }

    let res: any;
    try {
      res = await UserApi.updateUsername({
        username: isJump ? '' : username,
      });
    } catch (err: any) {
      if (err.errors.username) {
        setUsernameValid(false);
        setErrMsg(err.errors.username);
      }

      return;
    }

    await dispatch(updateUsernameState(res));
    await dispatch(changeScreenAction('登录成功'));
    navigator.navigate('Home', {
      screen: 'Profile',
    });
  };

  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer,
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}>
      <ScreenContainer>
        {/* <SafeAreaView> */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
              }}>
              <BackButton
                onPress={() => {
                  updateUsernameHandler(true);
                  navigator.goBack();
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  updateUsernameHandler(true);
                }}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 18,
                    letterSpacing: 0.2,
                    color: '#fff',
                  }}>
                  跳过
                </Text>
              </TouchableOpacity>
            </View>

            {/* <View style={styles.headerBarShadow}/> */}
            <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: '20%' }}>
              <View
                style={{
                  backgroundColor: 'transparent',
                }}>
                {/* <Text style={styles.OTPtitle}>OTP Verification</Text> */}
                <Text style={styles.title}>输入属于你的昵称</Text>

                <Text style={styles.description}>
                  请输入2-18个字符
                  {/* {userState.userEmail} */}
                </Text>

                <InputItem
                  autoCapitalize="none"
                  style={[
                    styles.textInpoutCommonStyle,
                    styles.defaultTextInputStyle,
                    usernameValid
                      ? styles.correctTextInputStyle
                      : styles.invalidTextInputStyle,
                  ]}
                  value={username}
                  onChange={value => {
                    onInputChange(value);
                  }}
                  placeholder="输入昵称"
                  placeholderTextColor="#B6B6B6"
                  maxLength={18}
                />

                <View
                  style={{
                    marginTop: 45,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    {errMsg != '' && (
                      <>
                        <View style={{ alignSelf: 'flex-start' }}>
                          <Image
                            style={{
                              height: 22,
                              width: 22,
                              marginRight: 5,
                              position: 'relative',
                              top: 1,
                            }}
                            source={require('@static/images/invite/danger.png')}
                          />
                        </View>
                        <Text style={styles.danger}>{errMsg} </Text>
                      </>
                    )}
                  </View>

                  <Text
                    style={{ fontWeight: '600', fontSize: 15, color: '#9C9C9C' }}>
                    {username.length}/18
                    {/* {userState.userEmail} */}
                  </Text>
                </View>

                <Button
                  type="primary"
                  // disabled={props.email === '' || !props.emailValid}
                  style={[
                    styles.continueButtonStyle,
                    username === '' || !usernameValid
                      ? styles.btnInactive
                      : styles.btnActive,
                  ]}
                  activeStyle={[
                    styles.continueButtonStyle,
                    username === '' || !usernameValid
                      ? styles.btnInactive
                      : styles.btnActive,
                  ]}
                  //disabled={!props.emailValid}
                  onPress={() => {
                    updateUsernameHandler(false);
                  }}>
                  <Text
                    style={{
                      //  fontFamily: 'SF Pro Display',
                      fontWeight: '600',
                      fontSize: 15,
                      letterSpacing: 0.2,
                      color: username === '' || !usernameValid ? 'white' : '#000',
                    }}>
                    确定
                  </Text>
                </Button>
              </View>
            </View>
          </>
        </TouchableWithoutFeedback>
        {/* </SafeAreaView> */}
      </ScreenContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  textInpoutCommonStyle: {
    marginHorizontal: '-5%',
    marginTop: 70,
    paddingLeft: 10,
    height: 42,
    borderRadius: 8,
    fontSize: 14,
    // backgroundColor: '#1d2023',
    // fontFamily: 'SF Pro Display',
  },
  defaultTextInputStyle: { backgroundColor: '#1d2023' },
  correctTextInputStyle: { backgroundColor: '#1d2023', color: '#fff' },
  invalidTextInputStyle: {
    backgroundColor: '#311818',
    borderWidth: 1,
    borderColor: '#FF1010',
    color: '#FF1010',
  },
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
    paddingRight: 35,
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
  continueButtonStyle: {
    width: '100%',
    height: 42,
    marginTop: 30,
    marginLeft: '-0.5%',
    borderWidth: 0,
  },
  btnActive: {
    backgroundColor: '#FAC33D',
    color: '#000',
  },
  btnInactive: {
    backgroundColor: '#1d2023',
  },
});
