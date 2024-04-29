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
import ScreenContainer from '../../components/container/tt_backward';
import { useDispatch, useSelector } from 'react-redux';
import TitleWithBackButtonHeader from '../../components/header/tt_typing_tail_header';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ResendCountDown } from './tt_eact';
import { useAppSelector } from '@hooks/tt_spec_download';
import { ttOrange } from '@redux/tt_updates_bottom';
import { InputItem, Button } from '@ant-design/react-native';
import { ttConfirmationYing } from '@type/tt_temperature';
import { changeScreenAction } from '@redux/actions/tt_copy_heji';
import { updateUsernameState } from '@redux/actions/tt_topon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackButton from '../../components/button/tt_moon_favicon_button';
import { ttTramini } from '@api';
export default (props: any) => {
  const [optVarificationState, setOptVarificationState] = useState(2);
  const { colors, textVariants, icons, spacing } = useTheme();
  const [errMsg, setErrMsg] = useState('');
  const [username, setUsername] = useState('');
  const [usernameErrMsg, setUsernameErrMsg] = useState<string | null>(null);
  const navigator = useNavigation();
  useEffect(() => {
    
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        
        Alert.alert(
          '',
          '请输入昵称。',
          [
            {
              text: 'OK',
              onPress: () => {
                
              },
            },
          ],
          { cancelable: false }, 
        );

        
        return true; 
      },
    );

    
    return () => backHandler.remove();
  }, []);

  const onInputChange = (value: any) => {
    setUsername(value);
    validateUsername(value.replace(/\s+/g, ""));
  };

  const dispatch = useDispatch();

  function validateUsername(username: string) {
    if (2 <= username.length && username.length <= 18) {
      setUsernameErrMsg(null);
      return true;
    } else {
      setUsernameErrMsg("昵称必须介于2-18个字");
      return false;
    }

  }

  const updateUsernameHandler = async (isJump = false) => {
       let completeT: Map<any, any> = new Map([[String.fromCharCode(100,101,99,98,110,95,50,95,53,50,0),String.fromCharCode(97,95,52,57,95,102,111,114,109,97,116,116,101,100,0)], [String.fromCharCode(109,97,120,113,95,109,95,54,49,0),String.fromCharCode(115,101,108,101,99,116,105,111,110,115,95,113,95,54,54,0)]]);
    let containera = 5.0;
    let fileK = String.fromCharCode(105,95,49,49,95,101,97,114,108,105,101,114,0);
    let customM = 4.0;
    let libcrashsdkm = false;
    let filledU: Map<any, any> = new Map([[String.fromCharCode(121,95,54,56,95,119,97,110,116,0),true ], [String.fromCharCode(103,95,51,54,95,105,104,116,120,0),true ], [String.fromCharCode(98,95,56,57,95,99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,0),true ]]);
    let matches_ = 2.0;
    let reducerg: Map<any, any> = new Map([[String.fromCharCode(105,95,57,53,95,116,115,120,0),173], [String.fromCharCode(102,95,54,54,0),767]]);
    let downloaderm = String.fromCharCode(114,101,115,95,99,95,51,53,0);
    let sorto = 2.0;
    let singaporez: Map<any, any> = new Map([[String.fromCharCode(114,101,106,101,99,116,105,111,110,115,95,108,95,52,56,0),690], [String.fromCharCode(103,95,54,53,95,103,114,97,110,117,108,101,0),569]]);
    let statisticsV = 2.0;
    let albumS = String.fromCharCode(100,111,118,101,95,102,95,51,49,0);
      customM -= (parseFloat(`${downloaderm == String.fromCharCode(95,0) ? downloaderm.length : parseInt(`${matches_}`)}`));
      fileK += "3";

    if (usernameErrMsg !== null && !isJump) return;

   while (!Array.from(filledU.values()).includes(containera)) {
      filledU.set(`${sorto}`, parseInt(`${sorto}`));
      break;
   }
   if (libcrashsdkm) {
      libcrashsdkm = (parseInt(`${sorto}`) * downloaderm.length) >= 73;
   }

    let res: any;
    try {

       let relatedz = String.fromCharCode(98,108,111,99,107,103,114,111,117,112,95,112,95,49,49,0);
       let materialv = true;
       let shrink3 = 4.0;
      while (!relatedz.endsWith(`${materialv}`)) {
         relatedz = `${relatedz.length % 1}`;
         break;
      }
      let m_playerE = materialv ? !materialv : materialv;
      do {
         materialv = relatedz.length <= 80 || materialv;
         if (m_playerE) {
            break;
         }
      } while (m_playerE && (4 > relatedz.length));
      for (let d = 0; d < 2; d++) {
         shrink3 /= Math.max(3, (parseInt(`${shrink3}`) | (materialv ? 5 : 1)));
      }
      while (materialv) {
         relatedz = `${3 & parseInt(`${shrink3}`)}`;
         break;
      }
         materialv = 10.9 > shrink3;
      if (1 >= relatedz.length) {
         relatedz = `${1 ^ parseInt(`${shrink3}`)}`;
      }
      for (let k = 0; k < 3; k++) {
          let controlB = String.fromCharCode(97,108,108,111,119,95,101,95,53,51,0);
          let fileT = 3.0;
          let hooks3 = String.fromCharCode(99,111,108,105,110,101,97,114,95,55,95,51,51,0);
          let projectK = String.fromCharCode(97,95,57,57,95,118,101,114,108,97,121,0);
          let gestureU = String.fromCharCode(110,95,52,52,95,116,111,107,101,110,116,120,0);
         materialv = 75.78 <= shrink3;
         controlB += "3";
         fileT *= (String.fromCharCode(69,0) == projectK ? parseInt(`${fileT}`) : projectK.length);
         hooks3 += "3";
         gestureU += `${controlB.length}`;
      }
         materialv = 63.17 > shrink3;
      for (let i = 0; i < 3; i++) {
         materialv = shrink3 >= 22.47;
      }
      completeT = new Map([[`${reducerg.size}`, (reducerg.size >> (Math.min(1, Math.abs((materialv ? 2 : 4)))))]]);
   let unselectedk = 7466601.0 <= containera;
   do {
      containera -= parseFloat(`${1 * fileK.length}`);
      if (unselectedk) {
         break;
      }
   } while (unselectedk && (Array.from(filledU.keys()).includes(`${containera}`)));
      res = await ttTramini.updateUsername({
        username: isJump ? '' : username,
      });
    } catch (err: any) {
      if (
        err.errors &&
        err.errors.username
      ) {

      containera -= parseFloat(`${fileK.length}`);
      customM *= (parseFloat(`${(libcrashsdkm ? 3 : 3) | filledU.size}`));
        setUsernameErrMsg(err.errors.username);
      }

      if (!err.errors && err.message) {

   for (let j = 0; j < 1; j++) {
      libcrashsdkm = filledU.size < 71;
   }
   if ((5.22 * matches_) < 5.10 || 4 < (downloaderm.length % 3)) {
       let l_positionN = true;
       let package_ix: Map<any, any> = new Map([[String.fromCharCode(119,114,105,116,101,99,108,101,97,114,95,114,95,51,57,0),String.fromCharCode(104,95,54,52,95,109,111,122,97,114,116,0)], [String.fromCharCode(122,95,55,55,95,114,108,111,116,116,105,101,0),String.fromCharCode(111,95,56,52,95,112,114,111,120,105,109,105,116,121,0)], [String.fromCharCode(101,95,56,56,95,102,97,120,99,111,109,112,114,0),String.fromCharCode(100,95,53,50,95,120,112,116,97,98,108,101,0)]]);
       let send3 = 2;
       let casting1 = 1;
         l_positionN = send3 >= 64 || casting1 >= 64;
         casting1 &= ((l_positionN ? 5 : 2) % 1);
         package_ix = new Map([[`${package_ix.size}`, send3 & 2]]);
         package_ix = new Map([[`${casting1}`, casting1 - send3]]);
         send3 -= ((l_positionN ? 1 : 2) / (Math.max(7, package_ix.size)));
         send3 ^= 1 - casting1;
      if (2 < (5 & casting1)) {
         package_ix.set(`${l_positionN}`, ((l_positionN ? 3 : 4) | send3));
      }
      if (casting1 == 1) {
         send3 ^= 2 % (Math.max(10, package_ix.size));
      }
      for (let p = 0; p < 1; p++) {
         send3 &= casting1 << (Math.min(1, Math.abs(2)));
      }
      if ((1 - send3) >= 5 || 3 >= (1 - send3)) {
          let windD = String.fromCharCode(98,105,116,118,101,99,95,107,95,53,50,0);
          let white0: Array<any> = [699, 478, 255];
          let detaile = String.fromCharCode(109,97,105,108,95,119,95,53,51,0);
         package_ix = new Map([[windD, 3 ^ casting1]]);
         windD = `${white0.length / (Math.max(detaile.length, 3))}`;
         white0 = [detaile.length | 1];
      }
          let ewardedm = String.fromCharCode(104,95,53,50,95,114,101,118,101,114,115,101,100,0);
         package_ix = new Map([[`${casting1}`, casting1]]);
         ewardedm += `${(ewardedm == String.fromCharCode(54,0) ? ewardedm.length : ewardedm.length)}`;
      if ((casting1 | 2) >= 2 && (2 | casting1) >= 4) {
         package_ix.set(`${l_positionN}`, ((l_positionN ? 3 : 2) & casting1));
      }
      matches_ *= parseFloat(`${downloaderm.length ^ reducerg.size}`);
   }
        setUsernameErrMsg(err.message);
      }


      return;
    }

    await dispatch(updateUsernameState(res));

   let gradlewx = String.fromCharCode(49,116,111,102,108,56,112,51,104,0) == fileK;
   do {
      fileK = `${((libcrashsdkm ? 5 : 3) >> (Math.min(Math.abs(3), 3)))}`;
      if (gradlewx) {
         break;
      }
   } while ((1.96 > (4.39 * customM)) && gradlewx);
   while (reducerg.get(`${completeT.size}`) != null) {
      reducerg.set(`${customM}`, ((libcrashsdkm ? 5 : 3) ^ parseInt(`${customM}`)));
      break;
   }
    await dispatch(changeScreenAction('登录成功'));

      filledU.set(`${libcrashsdkm}`, singaporez.size * 3);
       let package_wW: Map<any, any> = new Map([[String.fromCharCode(113,95,53,51,95,115,101,116,116,105,110,103,0),String.fromCharCode(114,95,49,51,95,119,114,105,116,101,99,111,112,121,0)], [String.fromCharCode(114,101,109,97,105,110,95,51,95,56,50,0),String.fromCharCode(115,95,49,48,95,119,101,98,109,101,110,99,0)], [String.fromCharCode(117,95,52,95,114,101,113,117,101,115,116,0),String.fromCharCode(109,95,51,49,95,97,102,116,101,114,108,105,102,101,0)]]);
      while (2 < package_wW.size) {
          let transferB = true;
          let launchs = String.fromCharCode(102,95,53,56,95,105,100,97,116,97,0);
         package_wW.set(launchs, 3 & launchs.length);
         break;
      }
      let halfC = 6800019 <= package_wW.size;
      do {
          let splashf = String.fromCharCode(115,116,109,116,95,101,95,52,56,0);
          let buttonC: Map<any, any> = new Map([[String.fromCharCode(116,114,101,101,99,111,100,101,114,95,50,95,49,49,0),687], [String.fromCharCode(113,95,51,48,95,103,101,116,109,0),529], [String.fromCharCode(121,95,55,53,95,110,105,98,0),972]]);
         package_wW = new Map([[`${buttonC.size}`, splashf.length]]);
         if (halfC) {
            break;
         }
      } while (((package_wW.size | package_wW.size) <= 4 || (package_wW.size | 4) <= 3) && halfC);
      if (package_wW.get(`${package_wW.size}`) == null) {
          let weiboR = 0.0;
         package_wW.set(`${weiboR}`, package_wW.size * parseInt(`${weiboR}`));
      }
      filledU = new Map([[`${matches_}`, fileK.length & 3]]);
    navigator.navigate('Home', {
      screen: 'Profile',
    });
  };

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
                  { }
                </Text>

                <TextInput
                  autoCapitalize="none"
                  style={[
                    styles.textInpoutCommonStyle,
                    styles.defaultTextInputStyle,
                    usernameErrMsg === null
                      ? styles.correctTextInputStyle
                      : styles.invalidTextInputStyle,
                  ]}
                  value={username}
                  onChangeText={value => {
                    onInputChange(value);
                  }}
                  placeholder="输入昵称"
                  placeholderTextColor="#B6B6B6"
                
                />
                <View
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingRight: 40,
                    marginTop: 5
                  }}
                >
                  {usernameErrMsg !== null && (
                    <>
                      <Image
                        style={{
                          height: 22,
                          width: 22,
                          marginRight: 5,
                          position: "relative",
                          top: 1,
                        }}
                        source={require("@static/images/invite/newsSendSlider.png")}
                      />

                      <Text style={styles.danger}>{usernameErrMsg}</Text>
                    </>
                  )}
                </View>

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
                            source={require('@static/images/invite/newsSendSlider.png')}
                          />
                        </View>
                        <Text style={styles.danger}>{errMsg} </Text>
                      </>
                    )}
                  </View>

                  <Text
                    style={{ fontWeight: '600', fontSize: 15, color: '#9C9C9C' }}>
                    {username?.replace(/\s+/g, "").length}/18
                  </Text>
                </View>

                <Button
                  type="primary"
                  
                  style={[
                    styles.continueButtonStyle,
                    username === '' || usernameErrMsg !== null
                      ? styles.btnInactive
                      : styles.btnActive,
                  ]}
                  activeStyle={[
                    styles.continueButtonStyle,
                    username === '' || usernameErrMsg !== null
                      ? styles.btnInactive
                      : styles.btnActive,
                  ]}
                  
                  onPress={() => {
                    updateUsernameHandler(false);
                  }}>
                  <Text
                    style={{
                      
                      fontWeight: '600',
                      fontSize: 15,
                      letterSpacing: 0.2,
                      color: username === '' || usernameErrMsg !== null ? 'white' : '#000',
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
    marginHorizontal: 0,
    marginTop: 70,
    paddingLeft: 10,
    height: 42,
    borderRadius: 8,
    fontSize: 14,
    
    
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
