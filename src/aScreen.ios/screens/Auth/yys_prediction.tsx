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
import ScreenContainer from '../../components/container/yys_executor_expand';
import { useDispatch, useSelector } from 'react-redux';
import TitleWithBackButtonHeader from '../../components/header/yys_anner_header';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ResendCountDown } from './yys_country';
import { useAppSelector } from '@hooks/yys_frame';
import { yys_MintegralLibavdevice } from '@redux/yys_sport_shrink';
import { InputItem, Button } from '@ant-design/react-native';
import { yys_Product } from '@type/yys_settings';
import { changeScreenAction } from '@redux/actions/yys_runtimescheduler';
import { updateUsernameState } from '@redux/actions/yys_gesture';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackButton from '../../components/button/yys_render_cast_button';
import { yys_GesturesConst } from '@api';
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
       let private_of = String.fromCharCode(116,119,105,99,101,95,118,95,51,56,0);
    let largeY = 3.0;
    let canvas4 = String.fromCharCode(106,95,56,54,95,107,110,111,119,110,0);
    let whistleX = 2;
    let updatesD = String.fromCharCode(103,114,111,117,112,105,110,103,95,118,95,50,0);
    let downloadingb = String.fromCharCode(121,117,118,97,95,97,95,50,57,0);
    let dicez: Array<any> = [127, 875, 416];
    let gradleA: Map<any, any> = new Map([[String.fromCharCode(100,105,102,102,95,101,95,55,52,0),485], [String.fromCharCode(108,95,54,52,95,97,118,103,121,0),686]]);
    let flyeri: Array<any> = [String.fromCharCode(98,95,50,95,97,108,108,111,99,99,111,109,109,111,110,0), String.fromCharCode(109,97,112,112,105,110,103,115,95,102,95,49,50,0)];
    let ajaxy = 5.0;
    let chinasames = 1.0;
    let componentregistryb = String.fromCharCode(116,95,52,51,95,99,111,110,115,116,113,112,0);
    let contexta = true;
    let bottomm: Map<any, any> = new Map([[String.fromCharCode(109,95,56,55,95,102,101,108,101,109,0),true ], [String.fromCharCode(99,95,51,95,101,118,101,114,121,111,110,101,0),true ]]);
   if (private_of.length >= updatesD.length) {
      updatesD = `${dicez.length}`;
   }
   if (downloadingb != private_of) {
      private_of = `${dicez.length | 1}`;
   }

    if (usernameErrMsg !== null && !isJump) return;

   for (let l = 0; l < 1; l++) {
      ajaxy *= parseFloat(`${gradleA.size}`);
   }
   while (1 < canvas4.length) {
      canvas4 += "3";
      break;
   }

    let res: any;
    try {

   let libjsiS = gradleA.size <= 6775413;
   do {
       let suggestionm = 2.0;
       let catalogU = String.fromCharCode(112,95,56,95,105,100,101,111,0);
         catalogU = `${parseInt(`${suggestionm}`)}`;
         suggestionm /= Math.max(parseFloat(`${3}`), 3);
         suggestionm /= Math.max(1, parseFloat(`${catalogU.length % (Math.max(9, parseInt(`${suggestionm}`)))}`));
       let benefitv = 0;
       let plashO = 5;
      let reducerY = 6277835 <= benefitv;
      do {
         benefitv -= benefitv << (Math.min(catalogU.length, 5));
         if (reducerY) {
            break;
         }
      } while ((benefitv < suggestionm) && reducerY);
          let unselecteda = String.fromCharCode(116,95,55,51,95,110,109,104,100,0);
          let traminiY = 1.0;
         benefitv %= Math.max(4, 3);
         unselecteda += `${unselecteda.length}`;
         traminiY -= (parseFloat(`${String.fromCharCode(57,0) == unselecteda ? unselecteda.length : parseInt(`${traminiY}`)}`));
      gradleA.set(`${largeY}`, parseInt(`${largeY}`));
      if (libjsiS) {
         break;
      }
   } while (((flyeri.length & 1) == 5 || 4 == (1 & gradleA.size)) && libjsiS);
       let ajaxq = true;
       let filterE = true;
         filterE = (filterE ? ajaxq : filterE);
         filterE = ajaxq;
          let viewsi = String.fromCharCode(114,97,116,101,99,116,114,108,95,122,95,54,53,0);
         ajaxq = ajaxq || viewsi.length == 46;
      while (!filterE) {
          let componentregistryn = 1;
          let robotoY = 5.0;
          let onewsk = 4.0;
          let halff = String.fromCharCode(97,117,116,111,99,111,109,109,105,116,95,122,95,57,53,0);
         ajaxq = halff.includes(`${componentregistryn}`);
         componentregistryn %= Math.max(5, 2 >> (Math.min(Math.abs(parseInt(`${onewsk}`)), 1)));
         robotoY -= parseFloat(`${parseInt(`${onewsk}`) ^ 1}`);
         halff += `${parseInt(`${robotoY}`)}`;
         break;
      }
      if (!filterE && ajaxq) {
          let page7: Map<any, any> = new Map([[String.fromCharCode(105,111,101,114,114,110,111,109,101,109,95,119,95,54,50,0),String.fromCharCode(106,95,55,49,95,110,116,105,108,101,0)], [String.fromCharCode(115,116,97,107,101,95,121,95,53,52,0),String.fromCharCode(118,102,108,97,103,95,104,95,57,51,0)]]);
          let bootsplashg: Array<any> = [581, 471];
          let libreanimatedR = String.fromCharCode(104,97,114,100,101,110,101,100,95,103,95,52,0);
          let mintegralJ = true;
          let eactF = 1;
         ajaxq = libreanimatedR.length > 60 || ajaxq;
         page7 = new Map([[`${bootsplashg.length}`, 2]]);
         bootsplashg = [(2 >> (Math.min(4, Math.abs((mintegralJ ? 2 : 5)))))];
         libreanimatedR = `${bootsplashg.length}`;
         mintegralJ = page7.size == 72;
         eactF &= eactF;
      }
       let shareL = String.fromCharCode(112,114,111,103,114,101,115,115,105,118,101,95,56,95,53,48,0);
      private_of += `${downloadingb.length}`;
      res = await yys_GesturesConst.updateUsername({
        username: isJump ? '' : username,
      });
    } catch (err: any) {
      if (
        err.errors &&
        err.errors.username
      ) {

   if (flyeri.length < downloadingb.length) {
      downloadingb += `${3 % (Math.max(1, gradleA.size))}`;
   }
   while (chinasames <= 1.26) {
       let models0 = String.fromCharCode(115,97,109,112,108,101,95,109,95,53,52,0);
       let pressurei: Map<any, any> = new Map([[String.fromCharCode(99,95,56,53,95,101,120,97,109,112,108,101,0),true ], [String.fromCharCode(112,95,49,50,95,114,101,117,115,101,0),false ]]);
       let mapbufferq = 3.0;
       let latnV = String.fromCharCode(120,95,55,95,112,117,114,112,111,115,101,102,117,108,0);
      while (5.73 >= (mapbufferq + parseFloat(`${pressurei.size}`)) && 1.57 >= (5.73 + mapbufferq)) {
         pressurei.set(`${models0}`, models0.length / 3);
         break;
      }
      while (5 >= (models0.length >> (Math.min(Math.abs(1), 5))) || 4.84 >= (mapbufferq / 2.78)) {
          let libreanimatedC: Array<any> = [345, 821, 230];
         models0 += `${libreanimatedC.length | 1}`;
         break;
      }
      let hookp = latnV.length <= 9031782;
      do {
         latnV = `${models0.length}`;
         if (hookp) {
            break;
         }
      } while ((models0 != String.fromCharCode(80,0)) && hookp);
      while (latnV.endsWith(`${mapbufferq}`)) {
         latnV = `${2 * parseInt(`${mapbufferq}`)}`;
         break;
      }
         pressurei.set(`${mapbufferq}`, parseInt(`${mapbufferq}`));
      let toponK = mapbufferq <= 7287678.0;
      do {
          let utilsI = String.fromCharCode(97,95,56,95,106,115,116,114,105,110,103,0);
          let agreement2 = 3;
          let rewindi = 5;
          let vietnamG = 5.0;
          let phonev = String.fromCharCode(113,95,50,51,95,102,97,100,101,111,117,116,0);
         mapbufferq *= (parseFloat(`${String.fromCharCode(113,0) == phonev ? parseInt(`${mapbufferq}`) : phonev.length}`));
         utilsI = `${rewindi & agreement2}`;
         agreement2 <<= Math.min(Math.abs(3 + parseInt(`${vietnamG}`)), 2);
         rewindi >>= Math.min(Math.abs(parseInt(`${vietnamG}`)), 1);
         if (toponK) {
            break;
         }
      } while (toponK && (!latnV.includes(`${mapbufferq}`)));
          let shoot7 = 0.0;
          let playlist9 = String.fromCharCode(116,111,121,115,95,48,95,53,56,0);
          let renewn = 5;
         latnV = `${parseInt(`${mapbufferq}`)}`;
         shoot7 += 3;
         playlist9 += `${(String.fromCharCode(52,0) == playlist9 ? playlist9.length : parseInt(`${shoot7}`))}`;
         renewn &= parseInt(`${shoot7}`);
      let chinasamez = pressurei.size >= 5303204;
      do {
         pressurei.set(`${mapbufferq}`, 1);
         if (chinasamez) {
            break;
         }
      } while (((3 >> (Math.min(4, Math.abs(pressurei.size)))) >= 3) && chinasamez);
      while ((mapbufferq - parseFloat(`${latnV.length}`)) < 5.31) {
         latnV = "3";
         break;
      }
      if (!models0.startsWith(`${mapbufferq}`)) {
          let switch_ukT = 5.0;
          let o_countZ: Array<any> = [189, 318, 528];
          let basketballp = 5;
          let animations0 = String.fromCharCode(115,95,55,51,95,98,97,110,100,101,100,0);
          let libreactnativeblobz = 1.0;
         models0 = "1";
         switch_ukT += basketballp ^ 3;
         o_countZ.push(3);
         basketballp += o_countZ.length;
         animations0 += "2";
         libreactnativeblobz /= Math.max(4, (parseFloat(`${String.fromCharCode(97,0) == animations0 ? animations0.length : basketballp}`)));
      }
      let homei = String.fromCharCode(109,57,100,99,56,113,122,53,111,112,0) == models0;
      do {
          let unimplementedviewm = 1.0;
          let aboutK = 3.0;
          let episodeP = String.fromCharCode(107,95,49,48,95,108,105,98,99,101,108,116,0);
          let casting5 = String.fromCharCode(100,95,53,50,95,105,104,116,120,0);
         models0 += `${parseInt(`${unimplementedviewm}`) >> (Math.min(episodeP.length, 5))}`;
         unimplementedviewm -= parseInt(`${aboutK}`);
         aboutK -= (casting5 == String.fromCharCode(102,0) ? parseInt(`${aboutK}`) : casting5.length);
         episodeP += `${1 * casting5.length}`;
         if (homei) {
            break;
         }
      } while (homei && (latnV.startsWith(`${models0.length}`)));
      while (1 < (3 << (Math.min(3, models0.length))) && (models0.length * parseInt(`${mapbufferq}`)) < 3) {
          let common6: Array<any> = [857, 743, 244];
          let selectiond = String.fromCharCode(116,121,112,101,115,95,110,95,51,55,0);
         models0 += "3";
         common6.push(2);
         selectiond += `${common6.length}`;
         break;
      }
      ajaxy -= parseFloat(`${parseInt(`${largeY}`) * latnV.length}`);
      break;
   }
        setUsernameErrMsg(err.errors.username);
      }

      if (!err.errors && err.message) {

   while (1.82 >= (1.38 * largeY)) {
       let i_positionb: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,108,101,116,105,111,110,115,95,110,95,51,56,0),401], [String.fromCharCode(116,114,97,110,115,108,97,116,101,95,109,95,51,0),806]]);
       let goalJ = 0;
      if ((4 + goalJ) < 5 || 3 < (4 + i_positionb.size)) {
         i_positionb = new Map([[`${i_positionb.size}`, i_positionb.size]]);
      }
       let weibo3 = 4.0;
       let applicationQ = 5.0;
      while (!Array.from(i_positionb.keys()).includes(`${applicationQ}`)) {
         applicationQ *= parseFloat(`${1 & i_positionb.size}`);
         break;
      }
      for (let j = 0; j < 1; j++) {
         goalJ /= Math.max(goalJ, 2);
      }
      let activem = applicationQ <= 7084785.0;
      do {
         applicationQ += parseFloat(`${2}`);
         if (activem) {
            break;
         }
      } while (((parseInt(`${applicationQ}`) - i_positionb.size) < 1 && 1 < (i_positionb.size ^ 1)) && activem);
      for (let m = 0; m < 3; m++) {
         applicationQ -= parseFloat(`${parseInt(`${applicationQ}`) & i_positionb.size}`);
      }
      largeY *= parseFloat(`${dicez.length >> (Math.min(5, Math.abs(parseInt(`${chinasames}`))))}`);
      break;
   }
       let ewardedY = String.fromCharCode(122,95,54,57,95,115,116,97,107,105,110,103,0);
      while (ewardedY.includes(`${ewardedY.length}`)) {
         ewardedY += "2";
         break;
      }
      while (ewardedY != String.fromCharCode(48,0) || ewardedY.length < 3) {
         ewardedY += `${ewardedY.length}`;
         break;
      }
      while (ewardedY.length >= ewardedY.length) {
         ewardedY += `${(ewardedY == String.fromCharCode(88,0) ? ewardedY.length : ewardedY.length)}`;
         break;
      }
      whistleX >>= Math.min(3, Math.abs((downloadingb == String.fromCharCode(115,0) ? downloadingb.length : parseInt(`${chinasames}`))));
        setUsernameErrMsg(err.message);
      }


      return;
    }

    await dispatch(updateUsernameState(res));

       let debugp = String.fromCharCode(115,101,108,101,99,116,101,100,95,119,95,53,57,0);
       let analyticsQ: Array<any> = [String.fromCharCode(99,97,99,104,101,115,105,122,101,95,48,95,53,52,0), String.fromCharCode(99,95,50,52,95,97,110,99,104,111,114,0)];
       let orangel = String.fromCharCode(115,117,112,101,114,102,114,97,109,101,95,111,95,55,56,0);
      while (1 >= (analyticsQ.length + orangel.length)) {
         analyticsQ = [debugp.length];
         break;
      }
         analyticsQ.push(orangel.length);
      if ((analyticsQ.length / 5) > 1) {
         analyticsQ = [analyticsQ.length];
      }
         orangel = `${2 ^ debugp.length}`;
      let scheduler0 = 7961225 <= orangel.length;
      do {
         orangel += `${(orangel == String.fromCharCode(70,0) ? orangel.length : debugp.length)}`;
         if (scheduler0) {
            break;
         }
      } while ((4 >= analyticsQ.length) && scheduler0);
       let relatedO = String.fromCharCode(106,95,54,56,95,98,97,115,101,0);
       let promotionA = String.fromCharCode(115,116,97,110,100,97,108,111,110,101,95,114,95,52,56,0);
         debugp += `${3 * orangel.length}`;
         promotionA += `${promotionA.length % (Math.max(10, relatedO.length))}`;
       let templateprocessorQ = String.fromCharCode(122,95,51,56,95,108,105,98,119,101,98,112,101,110,99,0);
       let upgradeg = String.fromCharCode(118,95,55,50,95,111,110,101,0);
      dicez.push(parseInt(`${ajaxy}`) % (Math.max(updatesD.length, 8)));
   for (let o = 0; o < 2; o++) {
      flyeri = [canvas4.length ^ 2];
   }
    await dispatch(changeScreenAction('登录成功'));

      whistleX /= Math.max(parseInt(`${largeY}`), 5);
   if (4 > whistleX) {
      downloadingb += `${1 * flyeri.length}`;
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
                            source={require('@static/images/invite/hongkongLibswresampleSigmob.png')}
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
