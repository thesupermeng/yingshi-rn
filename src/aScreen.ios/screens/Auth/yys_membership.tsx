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
       let bottomu = String.fromCharCode(97,115,121,109,0);
    let whatsappQ: Array<any> = [133, 340];
    let statsnomoredata2 = String.fromCharCode(115,116,97,103,101,95,99,95,56,55,0);
    let iconnointernetO = true;
    let mbbidn = String.fromCharCode(101,114,97,115,101,100,0);
    let greyarrowupY = 2;
    let vietnamT = String.fromCharCode(99,95,55,57,95,99,104,97,110,110,101,108,115,0);
    let downX: Map<any, any> = new Map([[String.fromCharCode(120,100,97,105,95,98,95,54,54,0),813], [String.fromCharCode(115,109,97,108,108,0),754]]);
    let constantsi = 1.0;
    let penaltyshootp = String.fromCharCode(118,95,54,50,95,115,99,104,109,0);
    let iconwatch3: Array<any> = [520, 585, 779];
    let pausec: Array<any> = [909, 66];
    let episodesD = String.fromCharCode(117,95,57,51,95,99,117,116,101,115,116,0);
   if (mbbidn.length >= 3 && 3 >= bottomu.length) {
      bottomu = `${bottomu.length}`;
   }
   for (let a = 0; a < 3; a++) {
      downX.set(vietnamT, (vietnamT == String.fromCharCode(55,0) ? vietnamT.length : greyarrowupY));
   }

    if (usernameErrMsg !== null && !isJump) return;

      statsnomoredata2 += `${vietnamT.length >> (Math.min(5, Math.abs(downX.size)))}`;
      statsnomoredata2 = "2";

    let res: any;
    try {

   if (2 >= (statsnomoredata2.length ^ 3)) {
       let owngoalZ = 1.0;
       let dragN = String.fromCharCode(102,114,97,109,101,113,117,101,117,101,0);
      while ((5 - parseInt(`${owngoalZ}`)) == 5 && 5 == (parseInt(`${owngoalZ}`) - dragN.length)) {
         dragN = `${1 - parseInt(`${owngoalZ}`)}`;
         break;
      }
      for (let i = 0; i < 2; i++) {
         owngoalZ *= (parseFloat(`${String.fromCharCode(84,0) == dragN ? dragN.length : parseInt(`${owngoalZ}`)}`));
      }
      let subsA = String.fromCharCode(52,109,48,0) == dragN;
      do {
         dragN += `${dragN.length}`;
         if (subsA) {
            break;
         }
      } while (subsA && (4.34 >= owngoalZ));
          let flipper0 = String.fromCharCode(99,111,110,102,105,103,117,114,101,100,95,48,95,52,56,0);
         dragN += `${parseInt(`${owngoalZ}`)}`;
         flipper0 += `${flipper0.length * 1}`;
      let mode4 = owngoalZ >= 6852568.0;
      do {
         owngoalZ /= Math.max(4, (parseFloat(`${String.fromCharCode(107,0) == dragN ? parseInt(`${owngoalZ}`) : dragN.length}`)));
         if (mode4) {
            break;
         }
      } while ((5 < (parseInt(`${owngoalZ}`) - dragN.length)) && mode4);
      let application0 = 5372494.0 >= owngoalZ;
      do {
          let popupK = String.fromCharCode(99,104,97,110,103,101,104,95,50,95,56,53,0);
          let iconlogoutw = 3.0;
         owngoalZ /= Math.max(parseFloat(`${parseInt(`${owngoalZ}`) | parseInt(`${iconlogoutw}`)}`), 3);
         popupK += `${popupK.length}`;
         iconlogoutw += popupK.length;
         if (application0) {
            break;
         }
      } while (((4 & dragN.length) <= 1 || 5 <= (4 + dragN.length)) && application0);
      statsnomoredata2 = `${downX.size >> (Math.min(Math.abs(1), 1))}`;
   }
      constantsi += parseFloat(`${1 ^ greyarrowupY}`);
      res = await yysHomeloading.updateUsername({
        username: isJump ? '' : username,
      });
    } catch (err: any) {
      if (
        err.errors &&
        err.errors.username
      ) {

   for (let p = 0; p < 2; p++) {
      whatsappQ.push(statsnomoredata2.length % (Math.max(1, 6)));
   }
   while (mbbidn.length <= 2) {
      mbbidn = `${(downX.size & (iconnointernetO ? 1 : 4))}`;
      break;
   }
        setUsernameErrMsg(err.errors.username);
      }

      if (!err.errors && err.message) {

   let utils1 = mbbidn.length <= 5004910;
   do {
      mbbidn = "2";
      if (utils1) {
         break;
      }
   } while (utils1 && (2 == bottomu.length));
   while (mbbidn.includes(statsnomoredata2)) {
       let awayplayer4: Array<any> = [String.fromCharCode(99,111,109,112,114,101,115,115,111,114,0), String.fromCharCode(115,95,50,52,95,111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,0), String.fromCharCode(105,100,99,116,99,111,108,95,113,95,55,52,0)];
       let submitB = String.fromCharCode(98,108,111,99,107,115,99,97,110,0);
      while (awayplayer4.length < 4) {
          let orangeticks = String.fromCharCode(116,105,116,108,101,0);
         submitB += `${(orangeticks == String.fromCharCode(55,0) ? submitB.length : orangeticks.length)}`;
         break;
      }
         submitB += `${submitB.length}`;
      while ((submitB.length % 3) > 1 || 1 > (submitB.length % 3)) {
         submitB += `${awayplayer4.length}`;
         break;
      }
      if (3 < (submitB.length & 2)) {
         awayplayer4.push(awayplayer4.length & 3);
      }
         submitB = "1";
      let canvase = submitB.length <= 8687382;
      do {
         submitB = `${submitB.length >> (Math.min(Math.abs(3), 1))}`;
         if (canvase) {
            break;
         }
      } while ((!submitB.endsWith(`${awayplayer4.length}`)) && canvase);
      statsnomoredata2 += `${(String.fromCharCode(69,0) == submitB ? submitB.length : bottomu.length)}`;
      break;
   }
        setUsernameErrMsg(err.message);
      }


      return;
    }

    await dispatch(updateUsernameState(res));

   if (downX.size <= 5) {
      downX = new Map([[`${constantsi}`, parseInt(`${constantsi}`) ^ 1]]);
   }
      vietnamT = `${whatsappQ.length}`;
    await dispatch(changeScreenAction('登录成功'));

   for (let h = 0; h < 3; h++) {
      vietnamT += "3";
   }
      vietnamT = `${vietnamT.length}`;
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
                            source={require('../../../../static/images/invite/libreactIconeye.png')}
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
