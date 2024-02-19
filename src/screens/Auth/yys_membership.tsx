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
import ScreenContainer from '../../components/container/yys_matches';
import { useDispatch, useSelector } from 'react-redux';
import TitleWithBackButtonHeader from '../../components/header/yys_away_predictionloss_header';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ResendCountDown } from './yys_goallogo';
import { useAppSelector } from '@hooks';
import { yysIconclosewhiteBaiduads } from '@redux';
import { InputItem, Button } from '@ant-design/react-native';
import { yysNbatrophyBootsplash } from '@type';
import { changeScreenAction } from '@redux';
import { updateUsernameState } from '@redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackButton from '../../components/button/yys_matchdetailbg_iconarrowright_button';
import { yysHomeloading } from '@api';
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
       let shielddonec = false;
    let redcirclebg2 = 4.0;
    let indicator0 = false;
    let changeE = 4.0;
    let awayteamfieldG = 3;
    let starB = String.fromCharCode(118,120,119,111,114,107,115,95,102,95,49,49,0);
    let readW: Map<any, any> = new Map([[String.fromCharCode(121,117,118,114,103,98,95,98,95,54,54,0),424], [String.fromCharCode(101,109,117,108,97,116,105,111,110,95,111,95,52,55,0),115]]);
    let skipo = String.fromCharCode(117,95,55,54,95,101,110,99,111,100,97,98,108,101,0);
    let privatechatbgC = 5.0;
    let inouttargetyellowd = String.fromCharCode(122,95,54,50,95,118,100,97,116,97,0);
    let refreshH = 4;
      redcirclebg2 /= Math.max(3, (parseFloat(`${inouttargetyellowd == String.fromCharCode(75,0) ? parseInt(`${privatechatbgC}`) : inouttargetyellowd.length}`)));
   let file6 = inouttargetyellowd == String.fromCharCode(117,112,57,115,99,109,55,53,119,0);
   do {
      inouttargetyellowd += `${((shielddonec ? 3 : 2) ^ awayteamfieldG)}`;
      if (file6) {
         break;
      }
   } while ((1 < (3 >> (Math.min(3, inouttargetyellowd.length))) || 4 < (3 % (Math.max(7, inouttargetyellowd.length)))) && file6);

    if (usernameErrMsg !== null && !isJump) return;

      changeE /= Math.max(5, parseFloat(`${inouttargetyellowd.length << (Math.min(2, Math.abs(awayteamfieldG)))}`));
       let borderless0 = String.fromCharCode(108,95,51,51,95,97,99,102,105,108,116,101,114,0);
       let defaultplayerimgX: Map<any, any> = new Map([[String.fromCharCode(107,95,49,55,0),772], [String.fromCharCode(106,95,51,51,95,109,112,106,112,101,103,0),233], [String.fromCharCode(116,117,110,110,101,108,95,103,95,49,52,0),262]]);
      let bootsplasho = borderless0.length >= 5573829;
      do {
          let kuaishouJ = String.fromCharCode(97,95,51,57,95,105,110,116,101,114,111,112,0);
         borderless0 += `${defaultplayerimgX.size}`;
         kuaishouJ = `${kuaishouJ.length}`;
         if (bootsplasho) {
            break;
         }
      } while ((defaultplayerimgX.size <= borderless0.length) && bootsplasho);
      for (let c = 0; c < 1; c++) {
         borderless0 += `${defaultplayerimgX.size % (Math.max(borderless0.length, 2))}`;
      }
      if (defaultplayerimgX.size < 3) {
          let greyarrowupQ: Array<any> = [438, 142];
         borderless0 = `${borderless0.length}`;
         greyarrowupQ = [greyarrowupQ.length + 2];
      }
         borderless0 = `${borderless0.length}`;
      for (let t = 0; t < 2; t++) {
         defaultplayerimgX = new Map([[`${defaultplayerimgX.size}`, 1]]);
      }
         borderless0 = `${borderless0.length}`;
      inouttargetyellowd = `${parseInt(`${redcirclebg2}`)}`;

    let res: any;
    try {

      skipo += `${((shielddonec ? 3 : 4) / (Math.max(starB.length, 2)))}`;
      privatechatbgC *= parseFloat(`${3 - parseInt(`${changeE}`)}`);
      res = await yysHomeloading.updateUsername({
        username: isJump ? '' : username,
      });
    } catch (err: any) {
      if (
        err.errors &&
        err.errors.username
      ) {

      skipo += `${((indicator0 ? 1 : 3) << (Math.min(Math.abs(parseInt(`${privatechatbgC}`)), 3)))}`;
   for (let i = 0; i < 2; i++) {
      awayteamfieldG *= (1 << (Math.min(3, Math.abs((shielddonec ? 4 : 5)))));
   }
        setUsernameErrMsg(err.errors.username);
      }

      if (!err.errors && err.message) {

      changeE += parseFloat(`${1}`);
       let bgvipsportg = String.fromCharCode(101,110,116,101,114,101,100,95,104,95,52,51,0);
      while (bgvipsportg.length >= 5 || bgvipsportg == String.fromCharCode(54,0)) {
          let interstitialS: Map<any, any> = new Map([[String.fromCharCode(109,111,98,105,117,115,95,106,95,51,50,0),226], [String.fromCharCode(116,95,54,52,95,115,108,97,118,101,115,0),237], [String.fromCharCode(97,95,52,50,95,108,97,121,111,117,116,115,0),160]]);
          let singaporea = 5;
          let circlea = String.fromCharCode(110,111,116,105,102,121,105,110,103,95,99,95,56,57,0);
          let componentT = String.fromCharCode(121,95,57,57,95,98,117,98,98,108,101,115,0);
          let animationY = String.fromCharCode(116,111,116,97,108,95,110,95,53,53,0);
         bgvipsportg += `${(String.fromCharCode(114,0) == componentT ? bgvipsportg.length : componentT.length)}`;
         interstitialS = new Map([[`${interstitialS.size}`, animationY.length]]);
         singaporea <<= Math.min(4, Math.abs(2 + singaporea));
         circlea = "2";
         animationY = `${circlea.length}`;
         break;
      }
         bgvipsportg = `${bgvipsportg.length}`;
      while (4 > bgvipsportg.length) {
         bgvipsportg += "2";
         break;
      }
      shielddonec = skipo.length <= 43 || !indicator0;
        setUsernameErrMsg(err.message);
      }


      return;
    }

    await dispatch(updateUsernameState(res));

       let buildH = 5.0;
          let iconmegaphoneU = String.fromCharCode(111,95,50,52,95,99,104,101,99,107,97,115,109,0);
         buildH += (parseFloat(`${iconmegaphoneU == String.fromCharCode(112,0) ? iconmegaphoneU.length : parseInt(`${buildH}`)}`));
      if (2.99 < (buildH - 1.41)) {
          let imagesI = String.fromCharCode(97,110,97,108,121,122,101,95,110,95,56,51,0);
          let predictionbannershared4 = String.fromCharCode(98,111,114,100,101,114,115,95,121,95,54,50,0);
         buildH += parseFloat(`${imagesI.length}`);
         imagesI += "2";
         predictionbannershared4 += `${predictionbannershared4.length}`;
      }
         buildH += parseFloat(`${parseInt(`${buildH}`)}`);
      awayteamfieldG ^= 3 & parseInt(`${redcirclebg2}`);
      inouttargetyellowd += `${(skipo == String.fromCharCode(98,0) ? skipo.length : (indicator0 ? 1 : 1))}`;
    await dispatch(changeScreenAction('登录成功'));

   for (let q = 0; q < 3; q++) {
      privatechatbgC /= Math.max(3, (parseFloat(`${(indicator0 ? 4 : 5) % (Math.max(awayteamfieldG, 2))}`)));
   }
   let scheduleD = shielddonec ? !shielddonec : shielddonec;
   do {
      shielddonec = awayteamfieldG > 56;
      if (scheduleD) {
         break;
      }
   } while (scheduleD && (shielddonec));
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
                        source={require("../../../static/images/invite/libreactIconeye.png")}
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
                            source={require('../../../static/images/invite/libreactIconeye.png')}
                          />
                        </View>
                        <Text style={styles.danger}>{errMsg} </Text>
                      </>
                    )}
                  </View>

                  <Text
                    style={{ fontWeight: '600', fontSize: 15, color: '#9C9C9C' }}>
                    {username.replace(/\s+/g, "").length}/18
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
