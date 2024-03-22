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
import ScreenContainer from '../../components/container/ypy_fast';
import { useDispatch, useSelector } from 'react-redux';
import TitleWithBackButtonHeader from '../../components/header/cio_news_types_header';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ResendCountDown } from './h_ping';
import { useAppSelector } from '@hooks/kg_index';
import { PSmall } from '@redux/fj_prediction_thailand';
import { InputItem, Button } from '@ant-design/react-native';
import { KGiftMapping } from '@type/vrm_thailand';
import { changeScreenAction } from '@redux/actions/a_switch';
import { updateUsernameState } from '@redux/actions/rk_filed_watch';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackButton from '../../components/button/exb_member_source_button';
import { THFirebase } from '@api';
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
       let line9 = false;
    let footballS = 3.0;
    let m_centerO = String.fromCharCode(122,95,56,95,109,105,100,0);
    let recommendationB = String.fromCharCode(97,117,116,111,114,101,115,105,122,105,110,103,95,122,95,51,52,0);
    let userH = String.fromCharCode(104,100,99,100,95,119,95,50,51,0);
    let i_countw = String.fromCharCode(105,95,50,57,95,99,97,114,114,121,0);
    let megaphoneo = String.fromCharCode(112,95,50,57,95,109,97,116,116,101,0);
    let styleH = String.fromCharCode(109,95,57,56,95,112,111,112,112,101,100,0);
    let langc = 4;
    let trophy4 = 0.0;
    let fieldc = 0;
    let referrerz = 0;
    let minimizeS = 3;
   while (1 < (langc << (Math.min(Math.abs(3), 4))) || (3 << (Math.min(5, megaphoneo.length))) < 3) {
      langc <<= Math.min(Math.abs(1), 3);
      break;
   }
       let canvas1 = String.fromCharCode(98,101,103,97,110,95,108,95,49,51,0);
      let logoutX = String.fromCharCode(104,112,104,53,97,117,48,120,119,99,0) == canvas1;
      do {
         canvas1 = `${canvas1.length / 2}`;
         if (logoutX) {
            break;
         }
      } while ((2 <= canvas1.length || 2 <= canvas1.length) && logoutX);
         canvas1 += `${canvas1.length}`;
       let k_positionq = false;
       let macauU = false;
      line9 = 87 >= megaphoneo.length;

    if (usernameErrMsg !== null && !isJump) return;

   let register_u0q = 6401447 <= langc;
   do {
      langc |= parseInt(`${footballS}`) ^ 3;
      if (register_u0q) {
         break;
      }
   } while (register_u0q && (styleH.length == 2));
   let gpayi = m_centerO.length >= 9896567;
   do {
      m_centerO = `${3 << (Math.min(3, m_centerO.length))}`;
      if (gpayi) {
         break;
      }
   } while ((styleH != String.fromCharCode(103,0)) && gpayi);

    let res: any;
    try {

   if (styleH.length > 5) {
       let switch_kl = 3;
       let predictionI = 4.0;
       let yingi = 5.0;
         yingi *= parseInt(`${yingi}`) ^ parseInt(`${predictionI}`);
         predictionI /= Math.max(4, parseFloat(`${2}`));
         yingi /= Math.max(1, 2);
      if ((yingi + 4.46) == 1.9 && (predictionI * yingi) == 4.46) {
         yingi -= 2 / (Math.max(parseInt(`${predictionI}`), 1));
      }
      for (let c = 0; c < 3; c++) {
         predictionI *= parseFloat(`${1}`);
      }
      while (switch_kl <= 2) {
         switch_kl /= Math.max(2, 4);
         break;
      }
          let gmail1 = String.fromCharCode(117,110,109,97,114,107,95,108,95,56,53,0);
          let pointc = String.fromCharCode(116,105,109,101,100,95,116,95,51,54,0);
         predictionI += parseFloat(`${switch_kl % 2}`);
         gmail1 += "2";
         pointc = `${gmail1.length >> (Math.min(Math.abs(2), 3))}`;
      for (let u = 0; u < 2; u++) {
          let spinnerl = true;
          let j_playerh: Map<any, any> = new Map([[String.fromCharCode(105,95,51,50,95,98,108,111,98,115,105,122,101,0),126], [String.fromCharCode(114,101,115,111,117,114,99,101,115,95,52,95,56,53,0),565], [String.fromCharCode(107,95,55,57,95,100,101,98,108,111,99,107,0),223]]);
          let calendarC: Map<any, any> = new Map([[String.fromCharCode(117,116,105,109,101,95,117,95,57,55,0),true ], [String.fromCharCode(109,95,53,54,95,105,116,101,114,97,116,105,118,101,0),false ], [String.fromCharCode(105,115,115,117,101,95,56,95,49,56,0),true ]]);
          let greeno = String.fromCharCode(99,111,108,108,101,99,116,105,98,108,101,95,118,95,50,55,0);
          let rankX = true;
         yingi /= Math.max(3, (2 % (Math.max(7, (spinnerl ? 1 : 1)))));
         spinnerl = (91 <= (greeno.length ^ (rankX ? greeno.length : 91)));
         j_playerh = new Map([[`${calendarC.size}`, calendarC.size]]);
         rankX = (78 >= ((!rankX ? 78 : greeno.length) & greeno.length));
      }
       let brightnessS = 2.0;
       let reducerI = 3.0;
      styleH += `${1 ^ parseInt(`${predictionI}`)}`;
   }
      m_centerO = `${((line9 ? 2 : 4) % (Math.max(1, 9)))}`;
      res = await THFirebase.updateUsername({
        username: isJump ? '' : username,
      });
    } catch (err: any) {
      if (
        err.errors &&
        err.errors.username
      ) {

      line9 = i_countw == String.fromCharCode(83,0);
       let yingf = false;
          let interstitialW = String.fromCharCode(104,99,109,99,95,122,95,49,50,0);
          let football4: Array<any> = [912, 392];
          let sounds = String.fromCharCode(116,95,56,52,95,99,108,117,115,116,101,114,115,0);
         yingf = ((sounds.length % (Math.max(10, (yingf ? 36 : sounds.length)))) <= 36);
         interstitialW = `${interstitialW.length}`;
         football4 = [2];
       let overlayC = String.fromCharCode(112,121,116,104,111,110,95,51,95,56,50,0);
       let carouselH = String.fromCharCode(121,95,55,51,95,115,97,118,101,105,0);
          let hoverj = String.fromCharCode(120,95,56,56,95,100,101,108,97,121,115,0);
          let showp: Array<any> = [590, 850];
         overlayC = "2";
         hoverj = "3";
         showp.push((String.fromCharCode(97,0) == hoverj ? hoverj.length : showp.length));
      langc |= 2 | recommendationB.length;
        setUsernameErrMsg(err.errors.username);
      }

      if (!err.errors && err.message) {

   while (i_countw == megaphoneo) {
       let mappingu = 5.0;
      if ((1 + mappingu) == 4.71) {
         mappingu *= 1;
      }
          let expandT = String.fromCharCode(106,95,55,49,95,115,101,116,116,105,103,110,115,0);
         mappingu *= parseInt(`${mappingu}`);
         expandT = `${expandT.length % 2}`;
      while (1.94 > (2.22 + mappingu)) {
          let stringN = 2;
         mappingu *= stringN;
         break;
      }
      megaphoneo += `${megaphoneo.length}`;
      break;
   }
   for (let e = 0; e < 2; e++) {
       let filterr = String.fromCharCode(119,95,54,56,95,109,111,100,110,112,102,0);
      let sharedw = filterr.length >= 7424496;
      do {
         filterr += "1";
         if (sharedw) {
            break;
         }
      } while ((filterr.length == filterr.length) && sharedw);
      let crownI = String.fromCharCode(106,54,57,0) == filterr;
      do {
          let activeY = true;
          let typingd = String.fromCharCode(102,95,50,54,95,108,97,98,101,108,101,100,0);
         filterr += `${(String.fromCharCode(65,0) == typingd ? typingd.length : (activeY ? 1 : 4))}`;
         if (crownI) {
            break;
         }
      } while ((3 <= filterr.length || filterr == String.fromCharCode(113,0)) && crownI);
      for (let f = 0; f < 3; f++) {
         filterr = `${(String.fromCharCode(57,0) == filterr ? filterr.length : filterr.length)}`;
      }
      m_centerO = `${(userH == String.fromCharCode(116,0) ? userH.length : styleH.length)}`;
   }
        setUsernameErrMsg(err.message);
      }


      return;
    }

    await dispatch(updateUsernameState(res));

   while (3 >= (fieldc % 4)) {
      trophy4 += referrerz;
      break;
   }
      m_centerO = `${(userH == String.fromCharCode(119,0) ? referrerz : userH.length)}`;
    await dispatch(changeScreenAction('登录成功'));

   if (!recommendationB.startsWith(`${line9}`)) {
      recommendationB = `${m_centerO.length}`;
   }
   if ((styleH.length * 2) <= 1) {
      styleH = "1";
   }
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
                        source={require("@static/images/invite/appleStringTopic.png")}
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
                            source={require('@static/images/invite/appleStringTopic.png')}
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
