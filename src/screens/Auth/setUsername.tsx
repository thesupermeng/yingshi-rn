import {useNavigation, useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {ResendCountDown} from './resendCountDown';
import {updateUsername} from '../../features/user';
import {useAppSelector} from '../../hooks/hooks';
import {RootState} from '../../redux/store';
import {InputItem, Button} from '@ant-design/react-native';
import {ProfileTabParamList} from '../../types/navigationTypes';
import {changeScreenAction} from '../../redux/actions/screenAction';

export default (props: any) => {
  const [optVarificationState, setOptVarificationState] = useState(2);
  const {colors, textVariants, icons, spacing} = useTheme();
  const [errMsg, setErrMsg] = useState('');
  const [username, setUsername] = useState('');
  const [usernameValid, setUsernameValid] = useState(true);
  const navigator = useNavigation();
  const onInputChange = (value: any) => {
    setUsername(value);
    ValidateUsername(value);
  };
  const dispatch = useDispatch();
  function ValidateUsername(username: string) {
    if (/^[a-zA-Z0-9_.-]{2,18}$/.test(username)) {
      setUsernameValid(true);
    } else {
      setUsernameValid(false);
    }
  }

  // useEffect(() => {
  //   ValidateUsername(username, setUsername);
  // }, [username]);

  // const screenState = useAppSelector(
  //   ({screenReducer}: RootState) => screenReducer,
  // );

  const userState = useAppSelector(({userReducer}: RootState) => userReducer);
  // useEffect(() => {
  //   console.log('userState');
  //   console.log(userState);
  // }, []);

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
              <Text style={styles.title}>输入属于你的昵称</Text>

              <Text style={styles.description}>
                请输入2-18个字符
                {/* {userState.userEmail} */}
              </Text>

              <InputItem
                style={[
                  styles.textInpoutCommonStyle,
                  username === ''
                    ? styles.defaultTextInputStyle
                    : usernameValid
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
                }}>
                <View
                  style={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  {errMsg != '' && (
                    <>
                      <Image
                        style={{
                          height: 22,
                          width: 22,
                          marginRight: 5,
                          position: 'relative',
                          top: 1,
                        }}
                        source={require('../../../static/images/invite/danger.png')}
                      />

                      <Text style={styles.danger}>{errMsg} </Text>
                    </>
                  )}
                </View>

                <Text>
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
                onPress={async () => {
                  try {
                    await updateUsername({
                      username: username,
                      bearerToken: userState.userToken,
                    });
                  } catch (err: any) {
                    console.log('err');
                    console.log(err.response.data.message);
                    setErrMsg(err.response.data.message);
                    setUsernameValid(false);
                    return;
                  }
                  // props.dismiss();
                  console.log('to profile');
                  //  navigator.navigate('Profile');

                  await dispatch(
                    changeScreenAction({screenAction: 'showSuccessLogin'}),
                  );
                  navigator.navigate('Home', {
                    screen: 'Profile',
                    showSuccessRegister: true,
                  });
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
  defaultTextInputStyle: {backgroundColor: '#1d2023'},
  correctTextInputStyle: {backgroundColor: '#1d2023', color: '#fff'},
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
