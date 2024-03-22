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
import ScreenContainer from '../../components/container/mayi_save';
import { useDispatch, useSelector } from 'react-redux';
import TitleWithBackButtonHeader from '../../components/header/mayi_predictiondefault_header';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ResendCountDown } from './mayi_downloader';
import { useAppSelector } from '@hooks/mayi_redirect';
import { mayi_Libapminsightb } from '@redux/mayi_live_tumbnail';
import { InputItem, Button } from '@ant-design/react-native';
import { mayi_FullscreenmaxCore } from '@type/mayi_video_binddatas';
import { changeScreenAction } from '@redux/actions/mayi_iconorientation_chatroombackground';
import { updateUsernameState } from '@redux/actions/mayi_librrc';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackButton from '../../components/button/mayi_issub_button';
import { mayi_Injury } from '@api';
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
       let statsV: Array<any> = [996, 600];
    let googleR = String.fromCharCode(105,110,99,114,101,109,101,110,116,115,95,101,95,52,49,0);
    let penaltyshootnogoalp = 0;
    let successV = String.fromCharCode(110,95,49,54,95,98,117,102,102,101,114,0);
    let libhermesD = 3.0;
    let l_titleq: Map<any, any> = new Map([[String.fromCharCode(106,95,57,54,95,114,101,99,101,112,116,105,111,110,0),317], [String.fromCharCode(98,95,53,52,95,116,117,114,110,0),327]]);
    let filter2 = false;
    let arrowup0: Map<any, any> = new Map([[String.fromCharCode(117,115,97,103,101,95,51,95,50,49,0),918], [String.fromCharCode(109,109,99,116,120,95,106,95,52,52,0),301], [String.fromCharCode(102,95,57,55,95,98,107,116,114,0),165]]);
    let yellowv: Array<any> = [701, 682, 766];
   let modelsi = filter2 ? !filter2 : filter2;
   do {
      filter2 = yellowv.length >= 70 && penaltyshootnogoalp >= 70;
      if (modelsi) {
         break;
      }
   } while (((4.57 * libhermesD) > 5.20 || 4.57 > libhermesD) && modelsi);
   for (let g = 0; g < 1; g++) {
      successV = `${1 % (Math.max(8, parseInt(`${libhermesD}`)))}`;
   }

    if (usernameErrMsg !== null && !isJump) return;

       let private_u8h: Array<any> = [String.fromCharCode(108,97,110,101,95,51,95,48,0), String.fromCharCode(113,95,51,50,95,118,111,114,100,105,112,108,111,109,0), String.fromCharCode(112,95,49,55,95,97,115,115,101,109,98,108,101,0)];
       let arrowU = String.fromCharCode(105,115,116,97,112,95,55,95,54,53,0);
      while ((private_u8h.length - arrowU.length) >= 2 && 5 >= (private_u8h.length - 2)) {
          let matchdetailbga = String.fromCharCode(99,95,56,48,95,102,100,111,112,101,110,0);
         arrowU += `${private_u8h.length}`;
         matchdetailbga = `${matchdetailbga.length & 2}`;
         break;
      }
          let unreadA: Map<any, any> = new Map([[String.fromCharCode(109,95,53,53,95,117,112,115,97,109,112,108,101,0),String.fromCharCode(115,105,110,107,95,109,95,49,0)], [String.fromCharCode(99,97,99,104,105,110,103,95,51,95,49,53,0),String.fromCharCode(102,95,56,54,95,99,111,110,102,108,105,99,116,0)]]);
         arrowU = `${(arrowU == String.fromCharCode(110,0) ? arrowU.length : unreadA.size)}`;
      for (let e = 0; e < 3; e++) {
          let libapminsightaw = false;
         private_u8h.push((arrowU == String.fromCharCode(116,0) ? private_u8h.length : arrowU.length));
         libapminsightaw = (!libapminsightaw ? !libapminsightaw : !libapminsightaw);
      }
      for (let t = 0; t < 1; t++) {
         arrowU = `${private_u8h.length}`;
      }
         arrowU += `${arrowU.length}`;
      while (4 <= (1 + arrowU.length) || (private_u8h.length + arrowU.length) <= 1) {
          let downloaderZ: Map<any, any> = new Map([[String.fromCharCode(120,95,56,57,95,116,114,117,101,104,100,0),336], [String.fromCharCode(114,101,112,108,105,99,97,116,101,95,110,95,56,55,0),607], [String.fromCharCode(99,111,110,118,111,108,118,101,95,118,95,55,57,0),104]]);
          let statisticsS = 5.0;
          let subtexti: Array<any> = [String.fromCharCode(112,95,54,50,95,97,99,116,105,111,110,0), String.fromCharCode(112,97,103,95,111,95,49,57,0), String.fromCharCode(112,117,98,108,105,115,104,97,98,108,101,95,106,95,55,50,0)];
          let casting5 = String.fromCharCode(109,111,110,107,101,121,95,49,95,56,56,0);
         private_u8h = [parseInt(`${statisticsS}`) << (Math.min(Math.abs(3), 3))];
         downloaderZ.set(`${casting5}`, 2 / (Math.max(6, downloaderZ.size)));
         statisticsS -= parseFloat(`${downloaderZ.size << (Math.min(Math.abs(1), 3))}`);
         subtexti.push((casting5 == String.fromCharCode(57,0) ? casting5.length : subtexti.length));
         break;
      }
      l_titleq.set(`${libhermesD}`, parseInt(`${libhermesD}`));
   if (googleR.length == statsV.length) {
      statsV = [3 / (Math.max(8, successV.length))];
   }

    let res: any;
    try {

   for (let r = 0; r < 3; r++) {
      googleR += `${yellowv.length}`;
   }
      arrowup0 = new Map([[googleR, successV.length]]);
      res = await mayi_Injury.updateUsername({
        username: isJump ? '' : username,
      });
    } catch (err: any) {
      if (
        err.errors &&
        err.errors.username
      ) {

       let libreact9 = String.fromCharCode(103,95,53,55,95,112,97,99,107,115,0);
       let iconstarD = String.fromCharCode(104,95,51,49,95,112,114,111,112,111,115,101,114,0);
       let nterstitial3 = String.fromCharCode(102,95,57,56,95,119,105,100,101,0);
      if (1 > libreact9.length) {
          let customK = String.fromCharCode(121,95,52,52,95,107,105,110,103,0);
         libreact9 = `${nterstitial3.length * 2}`;
         customK = "3";
      }
       let plusb = 3.0;
      libhermesD *= parseFloat(`${yellowv.length}`);
      successV = `${successV.length % (Math.max(6, googleR.length))}`;
        setUsernameErrMsg(err.errors.username);
      }

      if (!err.errors && err.message) {

   while (5 == (penaltyshootnogoalp >> (Math.min(Math.abs(4), 5)))) {
      penaltyshootnogoalp &= 1 * l_titleq.size;
      break;
   }
   while (l_titleq.get(`${statsV.length}`) == null) {
      l_titleq = new Map([[`${libhermesD}`, parseInt(`${libhermesD}`)]]);
      break;
   }
        setUsernameErrMsg(err.message);
      }


      return;
    }

    await dispatch(updateUsernameState(res));

      yellowv.push(googleR.length);
      statsV.push(parseInt(`${libhermesD}`));
    await dispatch(changeScreenAction('登录成功'));

   for (let z = 0; z < 2; z++) {
       let libreactO = String.fromCharCode(110,95,51,49,95,99,111,117,112,108,105,110,103,0);
       let nendz = 1.0;
       let clearR = String.fromCharCode(111,95,55,54,95,99,108,105,112,0);
       let libimagepipeline5 = String.fromCharCode(97,108,105,97,115,101,115,95,111,95,49,53,0);
         libimagepipeline5 += "3";
      while (libreactO != libimagepipeline5) {
          let mutedd = 3;
          let downloading9 = String.fromCharCode(115,117,112,112,114,101,115,115,105,110,103,95,114,95,48,0);
          let taild = String.fromCharCode(112,95,53,95,109,101,100,105,97,115,0);
         libimagepipeline5 = `${clearR.length % 3}`;
         mutedd *= taild.length;
         downloading9 += `${2 >> (Math.min(2, Math.abs(mutedd)))}`;
         taild = `${downloading9.length}`;
         break;
      }
       let mbjscommonV: Map<any, any> = new Map([[String.fromCharCode(106,95,53,50,95,118,101,114,98,111,115,101,0),627], [String.fromCharCode(115,99,104,110,111,114,114,95,118,95,55,54,0),100]]);
      if (!clearR.includes(`${libreactO.length}`)) {
         clearR = `${libimagepipeline5.length % (Math.max(clearR.length, 7))}`;
      }
          let firebasew: Array<any> = [String.fromCharCode(122,95,54,56,95,115,105,108,101,110,116,108,121,0), String.fromCharCode(104,95,54,57,95,102,105,120,117,112,0), String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,101,95,56,95,55,52,0)];
          let orangeuparrow9 = String.fromCharCode(99,104,111,115,101,95,53,95,51,48,0);
         libreactO = `${firebasew.length * 3}`;
         firebasew.push(orangeuparrow9.length);
         orangeuparrow9 += `${orangeuparrow9.length}`;
       let imagenetworkerrt = String.fromCharCode(109,111,109,101,110,116,117,109,95,97,95,55,57,0);
       let applicationj = String.fromCharCode(116,95,50,52,95,114,101,103,105,115,116,101,114,101,114,0);
         libreactO = `${(imagenetworkerrt == String.fromCharCode(84,0) ? imagenetworkerrt.length : applicationj.length)}`;
      for (let u = 0; u < 1; u++) {
          let becomem: Array<any> = [107, 247];
          let j_imagem: Map<any, any> = new Map([[String.fromCharCode(114,101,97,108,109,95,97,95,50,0),String.fromCharCode(112,95,49,50,95,106,112,101,103,99,111,109,112,0)], [String.fromCharCode(107,95,55,49,95,112,112,102,108,97,103,115,0),String.fromCharCode(105,110,112,117,116,115,95,117,95,57,52,0)]]);
          let libcrashsdkh = 0.0;
          let whiteW = String.fromCharCode(99,95,55,55,95,99,108,111,115,101,0);
         mbjscommonV = new Map([[`${mbjscommonV.size}`, 1 - becomem.length]]);
         becomem = [j_imagem.size];
         j_imagem = new Map([[`${j_imagem.size}`, 1 ^ parseInt(`${libcrashsdkh}`)]]);
         libcrashsdkh /= Math.max(1, parseInt(`${libcrashsdkh}`));
         whiteW += "1";
      }
      let downloaderT = 8319232.0 >= nendz;
      do {
         nendz += 1 | libreactO.length;
         if (downloaderT) {
            break;
         }
      } while (downloaderT && (3.78 == (1.80 * nendz) && 2.90 == (nendz * 1.80)));
       let history2 = String.fromCharCode(100,95,51,56,95,109,101,109,111,114,121,115,116,114,101,97,109,0);
         libimagepipeline5 = `${1 ^ imagenetworkerrt.length}`;
         clearR += `${imagenetworkerrt.length << (Math.min(3, clearR.length))}`;
      filter2 = successV.length == 26 || String.fromCharCode(97,0) == googleR;
   }
       let smallbrightnessw: Map<any, any> = new Map([[String.fromCharCode(116,114,97,112,95,104,95,51,55,0),false ], [String.fromCharCode(101,120,112,105,114,97,116,105,111,110,115,95,101,95,49,56,0),true ]]);
       let controlW: Array<any> = [172, 384, 852];
      if (smallbrightnessw.get(`${controlW.length}`) == null) {
         controlW = [smallbrightnessw.size];
      }
      while (4 <= (smallbrightnessw.size / (Math.max(1, 2)))) {
         controlW = [3 % (Math.max(3, smallbrightnessw.size))];
         break;
      }
         controlW = [smallbrightnessw.size];
         smallbrightnessw = new Map([[`${smallbrightnessw.size}`, 3]]);
         smallbrightnessw.set(`${controlW.length}`, smallbrightnessw.size);
       let awayteamfield6: Array<any> = [997, 746, 936];
       let aboutO: Array<any> = [633, 178, 786];
      arrowup0 = new Map([[`${smallbrightnessw.size}`, 2 | parseInt(`${libhermesD}`)]]);
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
                        source={require("@static/images/invite/assistTextinputHook.png")}
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
                            source={require('@static/images/invite/assistTextinputHook.png')}
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
