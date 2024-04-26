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
import ScreenContainer from '../../components/container/ww_collection';
import { useDispatch, useSelector } from 'react-redux';
import TitleWithBackButtonHeader from '../../components/header/ww_react_predictionwin_header';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ResendCountDown } from './ww_iconplay';
import { useAppSelector } from '@hooks/ww_catagory_neon';
import { wwEighteenShirt } from '@redux/ww_small';
import { InputItem, Button } from '@ant-design/react-native';
import { wwMiddleHelper } from '@type/ww_tempnodatagif_description';
import { changeScreenAction } from '@redux/actions/ww_hash';
import { updateUsernameState } from '@redux/actions/ww_libreactperfloggerjni_small';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackButton from '../../components/button/ww_page_button';
import { wwIconscheduleColors } from '@api';
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
       let layoutl = String.fromCharCode(103,95,52,55,95,117,110,115,117,112,112,111,114,116,101,100,0);
    let libcrashsdkG = 2.0;
    let libflipperh = String.fromCharCode(106,95,53,56,95,99,117,116,0);
    let schedulez = 3.0;
    let buttonk = 0.0;
    let roomX = String.fromCharCode(103,95,54,49,95,114,101,110,100,105,116,105,111,110,0);
    let nterstitialL = true;
    let kuaishouV: Array<any> = [704, 122, 477];
    let controls9 = 1.0;
    let hookC = 4.0;
    let iconwatchnow0 = 3;
    let unfilld: Array<any> = [267, 451, 559];
    let colorsC = 5;
    let libtanb = String.fromCharCode(120,95,52,55,95,118,101,99,116,111,114,115,99,111,112,101,0);
      layoutl += `${parseInt(`${buttonk}`) / (Math.max(parseInt(`${controls9}`), 4))}`;
   if (2.83 < (5.65 * hookC)) {
       let long_tqw = 0.0;
       let whistleD: Array<any> = [871, 368, 93];
          let eyeopenz = 4.0;
          let libjsinspectoru = String.fromCharCode(108,95,55,50,95,105,100,101,110,116,105,116,105,101,115,0);
          let minimize7 = 3.0;
         long_tqw *= parseFloat(`${libjsinspectoru.length}`);
         eyeopenz += 2 ^ parseInt(`${eyeopenz}`);
         libjsinspectoru = `${parseInt(`${minimize7}`)}`;
          let pingB = String.fromCharCode(101,120,112,108,111,100,105,110,103,95,105,95,53,49,0);
         long_tqw *= (parseFloat(`${pingB == String.fromCharCode(98,0) ? parseInt(`${long_tqw}`) : pingB.length}`));
         long_tqw += parseFloat(`${whistleD.length}`);
         long_tqw += parseFloat(`${parseInt(`${long_tqw}`)}`);
      for (let x = 0; x < 2; x++) {
         whistleD.push(2 * parseInt(`${long_tqw}`));
      }
      let filterB = 5815528.0 >= long_tqw;
      do {
         long_tqw /= Math.max(parseFloat(`${parseInt(`${long_tqw}`) | 3}`), 4);
         if (filterB) {
            break;
         }
      } while (((whistleD.length | 2) >= 5) && filterB);
      hookC *= 1;
   }

    if (usernameErrMsg !== null && !isJump) return;

   if (kuaishouV.includes(buttonk)) {
       let previewn = String.fromCharCode(121,95,50,55,0);
       let movies5 = 0.0;
       let matchactivel = 2.0;
       let downloaderI = String.fromCharCode(108,95,53,95,118,105,115,98,108,101,0);
       let toponw = true;
       let libjsi5 = false;
         toponw = (parseFloat(`${downloaderI.length}`) + movies5) <= 71.53;
          let privacyH = 0.0;
         matchactivel += (parseFloat(`${(toponw ? 2 : 4) % (Math.max(parseInt(`${movies5}`), 8))}`));
         privacyH += parseFloat(`${parseInt(`${privacyH}`)}`);
          let starr = 0;
         toponw = downloaderI.includes(`${matchactivel}`);
         starr /= Math.max(1, starr * starr);
       let infoM = String.fromCharCode(115,117,98,116,101,120,116,95,53,95,52,48,0);
       let t_center1 = String.fromCharCode(113,100,109,100,97,116,97,95,99,95,52,53,0);
         toponw = (downloaderI.length & infoM.length) >= 5;
       let whitetickw = 1;
       let statisticsinactiveT = 0;
      if (!toponw) {
         previewn = "1";
      }
      for (let w = 0; w < 3; w++) {
         t_center1 = "3";
      }
      for (let k = 0; k < 1; k++) {
         whitetickw *= downloaderI.length;
      }
         libjsi5 = statisticsinactiveT >= 47 || 67.63 >= matchactivel;
         libjsi5 = downloaderI.length > whitetickw;
      buttonk += (parseFloat(`${String.fromCharCode(67,0) == downloaderI ? downloaderI.length : parseInt(`${hookC}`)}`));
   }
   if (1 < roomX.length) {
      roomX += `${layoutl.length | kuaishouV.length}`;
   }

    let res: any;
    try {

       let basketballhometeamI: Map<any, any> = new Map([[String.fromCharCode(101,108,108,105,112,116,105,99,97,108,95,57,95,52,50,0),false ], [String.fromCharCode(102,95,53,53,95,97,99,107,110,111,119,108,101,100,103,101,100,0),true ], [String.fromCharCode(99,97,110,99,101,108,97,98,108,101,95,121,95,54,57,0),false ]]);
       let eighteenk = String.fromCharCode(104,95,49,95,111,98,117,115,0);
       let agreementV = false;
         basketballhometeamI = new Map([[`${basketballhometeamI.size}`, 2]]);
      for (let w = 0; w < 1; w++) {
         agreementV = 28 >= basketballhometeamI.size;
      }
      if (!agreementV) {
         eighteenk += `${((agreementV ? 5 : 2) / (Math.max(3, 8)))}`;
      }
      while (!agreementV) {
         agreementV = ((eighteenk.length << (Math.min(3, Math.abs((!agreementV ? 91 : eighteenk.length))))) < 91);
         break;
      }
      while (4 < (basketballhometeamI.size & 4)) {
         agreementV = eighteenk.startsWith(`${agreementV}`);
         break;
      }
          let runtimeschedulerI = String.fromCharCode(97,95,51,56,95,116,111,112,115,0);
          let formG = 2.0;
         eighteenk += `${2 | runtimeschedulerI.length}`;
         runtimeschedulerI += "1";
         formG -= 3 | parseInt(`${formG}`);
          let exampleimageU = String.fromCharCode(98,95,49,52,95,109,111,100,110,112,102,0);
          let detailsM = 4.0;
          let reviewx = 4.0;
         eighteenk = `${(parseInt(`${reviewx}`) ^ (agreementV ? 5 : 3))}`;
         exampleimageU += "1";
         detailsM /= Math.max(3, parseFloat(`${exampleimageU.length << (Math.min(Math.abs(2), 3))}`));
         reviewx *= exampleimageU.length;
      for (let f = 0; f < 3; f++) {
          let libreactN: Array<any> = [144, 612, 264];
          let desc6 = false;
          let serviceX = 2.0;
          let recommendationO = 1;
         agreementV = serviceX > 40.9 && !agreementV;
         libreactN.push(recommendationO / 2);
         desc6 = (47 >= (libreactN.length - (!desc6 ? 47 : libreactN.length)));
         serviceX += libreactN.length;
         recommendationO -= 2 % (Math.max(recommendationO, 1));
      }
       let episodeC: Array<any> = [String.fromCharCode(109,95,57,53,95,114,101,106,101,99,116,0), String.fromCharCode(115,105,103,115,108,111,116,95,106,95,55,54,0), String.fromCharCode(112,104,111,110,101,98,111,111,107,95,52,95,53,55,0)];
      kuaishouV.push(((nterstitialL ? 4 : 5)));
   while (3 >= (kuaishouV.length >> (Math.min(Math.abs(3), 5)))) {
      kuaishouV = [parseInt(`${hookC}`) - parseInt(`${controls9}`)];
      break;
   }
      res = await wwIconscheduleColors.updateUsername({
        username: isJump ? '' : username,
      });
    } catch (err: any) {
      if (
        err.errors &&
        err.errors.username
      ) {

      nterstitialL = hookC > 8.41 || 8.41 > libcrashsdkG;
       let reactnavigationz = 0.0;
         reactnavigationz -= parseFloat(`${2 * parseInt(`${reactnavigationz}`)}`);
         reactnavigationz -= parseFloat(`${parseInt(`${reactnavigationz}`)}`);
      if (3.52 >= (2.58 + reactnavigationz) || (reactnavigationz + 2.58) >= 1.48) {
          let baselineB = String.fromCharCode(115,116,97,98,105,108,105,122,97,116,105,111,110,95,112,95,57,48,0);
          let libsgcore9 = true;
          let utils4 = 0.0;
          let confirmation7 = 2;
          let profileactiveA = 4.0;
         reactnavigationz /= Math.max(5, parseFloat(`${3 & baselineB.length}`));
         baselineB += "3";
         libsgcore9 = 55 >= confirmation7;
         utils4 *= parseFloat(`${confirmation7}`);
         profileactiveA /= Math.max(1, 4);
      }
      hookC *= parseInt(`${schedulez}`) % (Math.max(parseInt(`${reactnavigationz}`), 10));
        setUsernameErrMsg(err.errors.username);
      }

      if (!err.errors && err.message) {

      iconwatchnow0 &= roomX.length;
   while ((5 - roomX.length) < 1 && (5 - roomX.length) < 3) {
      roomX = `${iconwatchnow0 << (Math.min(5, Math.abs(3)))}`;
      break;
   }
        setUsernameErrMsg(err.message);
      }


      return;
    }

    await dispatch(updateUsernameState(res));

      iconwatchnow0 -= kuaishouV.length % (Math.max(1, 7));
      libflipperh = `${(String.fromCharCode(87,0) == roomX ? roomX.length : parseInt(`${schedulez}`))}`;
    await dispatch(changeScreenAction('登录成功'));

   if (2.20 < (controls9 + 1.54) || (controls9 * hookC) < 1.54) {
      controls9 += parseInt(`${buttonk}`) ^ iconwatchnow0;
   }
      kuaishouV.push(2 * layoutl.length);
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
                        source={require("@static/images/invite/countrySingaporeManager.png")}
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
                            source={require('@static/images/invite/countrySingaporeManager.png')}
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
