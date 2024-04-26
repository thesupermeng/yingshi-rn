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
import ScreenContainer from '../../components/container/wawa_nterstitial_iconpipexpand';
import { useDispatch, useSelector } from 'react-redux';
import TitleWithBackButtonHeader from '../../components/header/wawa_matchinactive_header';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ResendCountDown } from './wawa_basketballawayteam';
import { useAppSelector } from '@hooks/wawa_root';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';
import { InputItem, Button } from '@ant-design/react-native';
import { wawaBottom } from '@type/wawa_iconnewchat';
import { changeScreenAction } from '@redux/actions/wawa_related';
import { updateUsernameState } from '@redux/actions/wawa_loginsuccess';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackButton from '../../components/button/wawa_awayteamfield_airbnbstarselected_button';
import { wawaEvent } from '@api';
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
       let agreementr = 3.0;
    let bingV = String.fromCharCode(112,95,51,95,117,110,99,111,110,102,105,114,109,101,100,0);
    let sharewhiteL = 4;
    let savej: Map<any, any> = new Map([[String.fromCharCode(111,95,56,56,95,97,108,116,105,118,101,99,0),false ], [String.fromCharCode(106,95,49,49,95,105,110,116,101,114,112,111,108,97,116,97,98,108,101,0),false ], [String.fromCharCode(122,95,50,48,95,98,97,99,107,103,114,111,117,110,100,0),false ]]);
    let subtextf = false;
    let yellowtoredi = 1;
    let codec = false;
    let minimizeB: Map<any, any> = new Map([[String.fromCharCode(99,95,53,50,0),false ], [String.fromCharCode(108,105,118,101,115,116,114,101,97,109,95,101,95,56,49,0),false ]]);
    let libswresampleD = 1.0;
    let gdtadvz = 5.0;
    let disconnectedo = String.fromCharCode(106,117,115,116,105,102,105,101,100,95,107,95,57,56,0);
   for (let k = 0; k < 3; k++) {
      savej = new Map([[`${codec}`, ((codec ? 4 : 5) - parseInt(`${libswresampleD}`))]]);
   }
       let filla = String.fromCharCode(113,95,51,55,95,112,100,102,0);
         filla += `${filla.length * 1}`;
      let gpayX = 5241409 <= filla.length;
      do {
          let yingh = 0;
          let changeT: Array<any> = [757, 206, 551];
          let nterstitialx = 0;
         filla += `${changeT.length << (Math.min(filla.length, 3))}`;
         yingh -= 3 + yingh;
         changeT.push(3);
         nterstitialx |= yingh;
         if (gpayX) {
            break;
         }
      } while ((1 < filla.length && filla != String.fromCharCode(108,0)) && gpayX);
      for (let p = 0; p < 2; p++) {
          let iconpointscoreH = true;
         filla += "2";
      }
      savej = new Map([[`${codec}`, ((codec ? 4 : 2) + (subtextf ? 3 : 5))]]);

    if (usernameErrMsg !== null && !isJump) return;

      minimizeB.set(`${codec}`, (bingV == String.fromCharCode(120,0) ? bingV.length : (codec ? 5 : 1)));
      yellowtoredi *= minimizeB.size;

    let res: any;
    try {

   for (let l = 0; l < 3; l++) {
      sharewhiteL &= bingV.length;
   }
   if (!subtextf) {
      agreementr -= parseFloat(`${2 >> (Math.min(2, bingV.length))}`);
   }
      res = await wawaEvent.updateUsername({
        username: isJump ? '' : username,
      });
    } catch (err: any) {
      if (
        err.errors &&
        err.errors.username
      ) {

      savej.set(`${bingV}`, bingV.length);
       let buttonp = true;
       let graphicsv: Map<any, any> = new Map([[String.fromCharCode(100,95,51,57,95,108,97,110,103,115,0),806], [String.fromCharCode(100,105,109,105,115,115,95,116,95,50,53,0),854]]);
       let leaguel = 0;
         leaguel %= Math.max(leaguel ^ 1, 3);
         leaguel += graphicsv.size;
         buttonp = (graphicsv.size << (Math.min(3, Math.abs(leaguel)))) <= 15;
          let bing7 = String.fromCharCode(115,117,110,118,101,114,95,103,95,51,57,0);
          let iconwatchnow6 = String.fromCharCode(100,112,114,105,110,116,95,56,95,54,49,0);
          let trophyN = 3.0;
         graphicsv.set(iconwatchnow6, 1);
         bing7 = "3";
         iconwatchnow6 = `${parseInt(`${trophyN}`) << (Math.min(Math.abs(1), 4))}`;
         trophyN *= parseFloat(`${bing7.length & 2}`);
         buttonp = !buttonp;
      libswresampleD -= 2 / (Math.max(7, parseInt(`${libswresampleD}`)));
        setUsernameErrMsg(err.errors.username);
      }

      if (!err.errors && err.message) {

       let index2 = 5.0;
      while (1.14 < (index2 * 2.52)) {
         index2 *= 3 << (Math.min(Math.abs(parseInt(`${index2}`)), 3));
         break;
      }
         index2 *= parseInt(`${index2}`) | parseInt(`${index2}`);
       let homeplayerV: Map<any, any> = new Map([[String.fromCharCode(114,101,110,100,101,114,95,112,95,52,48,0),String.fromCharCode(108,95,50,54,95,97,116,116,114,97,99,116,105,110,103,0)], [String.fromCharCode(105,95,53,52,95,115,105,110,113,105,0),String.fromCharCode(101,95,48,95,109,97,114,107,101,114,115,0)]]);
       let floaterH: Map<any, any> = new Map([[String.fromCharCode(116,97,107,101,111,117,116,95,101,95,51,53,0),384], [String.fromCharCode(105,110,99,114,109,101,114,103,101,95,103,95,56,50,0),588]]);
      subtextf = minimizeB.get(`${sharewhiteL}`) == null;
       let teamdetailsbgZ: Map<any, any> = new Map([[String.fromCharCode(105,100,108,101,95,107,95,52,55,0),String.fromCharCode(115,105,109,112,108,105,102,121,95,53,95,50,0)], [String.fromCharCode(117,110,100,101,114,108,105,110,101,95,112,95,55,57,0),String.fromCharCode(121,95,54,57,95,98,97,114,99,111,100,101,0)]]);
       let const__y9 = 2.0;
       let related9: Array<any> = [984, 466];
      if (4 >= (teamdetailsbgZ.size / (Math.max(2, 10))) && (teamdetailsbgZ.size + parseInt(`${const__y9}`)) >= 2) {
         const__y9 *= parseFloat(`${3 * teamdetailsbgZ.size}`);
      }
      if (!Array.from(teamdetailsbgZ.values()).includes(related9.length)) {
         teamdetailsbgZ = new Map([[`${teamdetailsbgZ.size}`, related9.length * 2]]);
      }
      for (let w = 0; w < 1; w++) {
         related9.push(3);
      }
      while (teamdetailsbgZ.size == parseInt(`${const__y9}`)) {
         teamdetailsbgZ = new Map([[`${teamdetailsbgZ.size}`, teamdetailsbgZ.size | 2]]);
         break;
      }
      while (Array.from(teamdetailsbgZ.keys()).includes(`${const__y9}`)) {
          let nodeV: Array<any> = [726, 63];
          let tail5: Map<any, any> = new Map([[String.fromCharCode(107,95,50,51,95,97,114,103,98,0),125], [String.fromCharCode(105,116,101,114,97,116,101,95,110,95,50,56,0),90], [String.fromCharCode(116,95,51,55,95,115,101,113,110,111,0),34]]);
         teamdetailsbgZ.set(`${const__y9}`, 2);
         nodeV.push(nodeV.length);
         tail5 = new Map([[`${tail5.size}`, nodeV.length]]);
         break;
      }
      while (4 <= related9.length) {
         const__y9 /= Math.max(parseFloat(`${1}`), 4);
         break;
      }
         related9 = [related9.length];
      while (3 >= (related9.length << (Math.min(Math.abs(1), 1)))) {
          let logoutl = String.fromCharCode(116,95,51,55,95,116,119,105,116,116,101,114,0);
          let footballfield5 = String.fromCharCode(109,95,56,95,105,116,108,101,0);
          let area9 = true;
         related9.push(logoutl.length);
         logoutl += `${((area9 ? 4 : 4) >> (Math.min(Math.abs(3), 1)))}`;
         footballfield5 = `${((area9 ? 4 : 3))}`;
         break;
      }
      if (!Array.from(teamdetailsbgZ.values()).includes(const__y9)) {
          let detailh = String.fromCharCode(112,97,103,101,110,117,109,98,101,114,95,48,95,54,51,0);
          let predictionbutton4: Array<any> = [335, 331, 606];
         const__y9 /= Math.max(4, parseFloat(`${3}`));
         detailh += `${(String.fromCharCode(115,0) == detailh ? detailh.length : predictionbutton4.length)}`;
         predictionbutton4 = [1];
      }
      bingV += "1";
        setUsernameErrMsg(err.message);
      }


      return;
    }

    await dispatch(updateUsernameState(res));

   for (let b = 0; b < 3; b++) {
      codec = 29 == yellowtoredi && libswresampleD == 1.88;
   }
      libswresampleD += 3 | parseInt(`${libswresampleD}`);
    await dispatch(changeScreenAction('登录成功'));

   while ((sharewhiteL >> (Math.min(Math.abs(5), 2))) >= 1) {
      sharewhiteL <<= Math.min(Math.abs(yellowtoredi - bingV.length), 5);
      break;
   }
   while (1.88 == (libswresampleD * 3.31)) {
       let libreacto = String.fromCharCode(117,95,52,54,95,99,108,111,115,117,114,101,0);
       let h_centerK = String.fromCharCode(114,111,108,108,105,110,103,95,51,95,53,50,0);
      for (let m = 0; m < 2; m++) {
          let renewe = 5;
         libreacto += `${renewe}`;
      }
       let detailsd = 3.0;
       let orientationr = 0.0;
      libswresampleD /= Math.max(3, minimizeB.size);
      break;
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

                <InputItem
                  autoCapitalize="none"
                  style={[
                    styles.textInpoutCommonStyle,
                    styles.defaultTextInputStyle,
                    usernameErrMsg === null
                      ? styles.correctTextInputStyle
                      : styles.invalidTextInputStyle,
                  ]}
                  value={username}
                  onChange={value => {
                    onInputChange(value);
                  }}
                  placeholder="输入昵称"
                  placeholderTextColor="#B6B6B6"
                
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
                            source={require('@static/images/invite/volumeOrangeclock.png')}
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
    marginHorizontal: '-5%',
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
