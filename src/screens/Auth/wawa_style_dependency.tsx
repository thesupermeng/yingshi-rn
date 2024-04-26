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
       let defaultroombg_ = 1.0;
    let phoneJ: Map<any, any> = new Map([[String.fromCharCode(102,95,51,50,95,115,117,98,102,105,108,101,0),660], [String.fromCharCode(98,95,53,56,95,105,115,110,111,110,122,101,114,111,0),984], [String.fromCharCode(120,95,52,48,95,110,118,99,0),410]]);
    let iconbellactivef = String.fromCharCode(114,101,105,115,115,117,101,95,116,95,56,53,0);
    let orangedownarrowd = 3.0;
    let bdxadsdkI = String.fromCharCode(119,95,57,49,95,112,103,109,121,117,118,0);
    let libreactperfloggerjnio = String.fromCharCode(105,116,108,101,95,54,95,52,57,0);
    let leakcheckerq = 3.0;
    let runtimeschedulerk: Map<any, any> = new Map([[String.fromCharCode(104,95,52,51,95,102,114,97,109,101,98,117,102,102,101,114,115,0),633], [String.fromCharCode(99,108,97,105,109,95,121,95,53,48,0),332], [String.fromCharCode(105,115,112,97,116,99,104,95,114,95,54,57,0),470]]);
    let penaltygoal0 = false;
    let bgvipxvod7 = 1.0;
    let twitterD = String.fromCharCode(101,110,99,111,100,101,100,102,114,97,109,101,95,52,95,52,52,0);
    let mailm = 3.0;
    let reactnavigationb = String.fromCharCode(98,105,110,95,111,95,49,48,48,0);
    let u_image5 = 4.0;
    let clearF: Array<any> = [709, 976];
    let mailW: Array<any> = [781, 976];
      libreactperfloggerjnio = `${libreactperfloggerjnio.length}`;
   if (defaultroombg_ <= 3.58 && 3.82 <= (defaultroombg_ - 3.58)) {
      penaltygoal0 = 6 < bdxadsdkI.length;
   }

    if (usernameErrMsg !== null && !isJump) return;

   while ((parseInt(`${defaultroombg_}`) / (Math.max(phoneJ.size, 10))) > 5 && (defaultroombg_ / (Math.max(5, parseFloat(`${phoneJ.size}`)))) > 4.39) {
      defaultroombg_ += (parseFloat(`${iconbellactivef == String.fromCharCode(112,0) ? iconbellactivef.length : parseInt(`${leakcheckerq}`)}`));
      break;
   }
      iconbellactivef = `${iconbellactivef.length | 1}`;

    let res: any;
    try {

   while (3 < bdxadsdkI.length) {
       let areag: Map<any, any> = new Map([[String.fromCharCode(112,117,98,108,105,99,105,116,121,95,53,95,55,53,0),292], [String.fromCharCode(115,95,52,95,103,101,116,116,101,114,0),392], [String.fromCharCode(105,111,115,117,114,102,97,99,101,95,51,95,52,52,0),289]]);
          let defaultbasketballbgF = String.fromCharCode(118,95,52,56,95,99,111,109,112,111,115,105,116,105,110,103,0);
          let iconstarn = String.fromCharCode(115,95,52,55,95,117,110,119,114,97,112,0);
          let s_hashT = 5.0;
         areag.set(`${s_hashT}`, 1 << (Math.min(5, Math.abs(parseInt(`${s_hashT}`)))));
         defaultbasketballbgF = `${iconstarn.length}`;
         iconstarn += `${defaultbasketballbgF.length}`;
         areag.set(`${areag.size}`, areag.size);
      if ((areag.size + 3) <= 1 || 3 <= (areag.size + 3)) {
          let catagoryx = String.fromCharCode(115,95,57,51,95,100,101,115,101,114,105,97,108,105,122,101,0);
          let backwardY = String.fromCharCode(115,101,116,115,97,114,95,110,95,56,57,0);
          let anytimeD = 4.0;
         areag.set(backwardY, (String.fromCharCode(73,0) == backwardY ? backwardY.length : parseInt(`${anytimeD}`)));
         catagoryx = "1";
      }
      bdxadsdkI = `${parseInt(`${leakcheckerq}`)}`;
      break;
   }
      phoneJ = new Map([[`${penaltygoal0}`, 3 & parseInt(`${orangedownarrowd}`)]]);
      res = await wawaEvent.updateUsername({
        username: isJump ? '' : username,
      });
    } catch (err: any) {
      if (
        err.errors &&
        err.errors.username
      ) {

   let questV = libreactperfloggerjnio == String.fromCharCode(54,109,57,97,111,122,48,0);
   do {
       let soundA: Map<any, any> = new Map([[String.fromCharCode(115,110,97,107,101,95,114,95,57,56,0),705], [String.fromCharCode(114,95,55,53,95,118,97,108,117,101,0),821], [String.fromCharCode(109,95,50,48,95,115,117,112,112,111,114,116,115,0),847]]);
       let apps7 = 1;
       let libavformatQ: Array<any> = [905, 327, 59];
       let eyeopenF = String.fromCharCode(117,110,101,115,99,97,112,105,110,103,95,55,95,56,53,0);
       let ewardedF = 5.0;
      while (1 > (3 >> (Math.min(5, Math.abs(apps7))))) {
         apps7 ^= 1 + soundA.size;
         break;
      }
         libavformatQ = [3];
      let libavutilL = apps7 <= 8260861;
      do {
         apps7 /= Math.max(3, 4);
         if (libavutilL) {
            break;
         }
      } while ((!Array.from(soundA.keys()).includes(`${apps7}`)) && libavutilL);
       let confirmation5 = 1.0;
         eyeopenF = `${eyeopenF.length | 3}`;
         ewardedF += soundA.size % (Math.max(1, libavformatQ.length));
          let shrinkF: Array<any> = [798, 493, 102];
          let greytick2: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,112,101,114,102,114,97,109,101,95,113,95,50,57,0),654], [String.fromCharCode(100,114,97,119,105,110,103,95,117,95,52,52,0),460], [String.fromCharCode(100,111,101,115,95,105,95,49,54,0),611]]);
         soundA.set(`${apps7}`, soundA.size);
         shrinkF.push(shrinkF.length);
         greytick2 = new Map([[`${greytick2.size}`, shrinkF.length]]);
      for (let t = 0; t < 3; t++) {
         libavformatQ = [eyeopenF.length / 3];
      }
         apps7 |= 1 | libavformatQ.length;
      for (let r = 0; r < 1; r++) {
          let iconorientation0 = String.fromCharCode(117,110,122,116,101,108,108,95,108,95,55,56,0);
          let nativeexf = String.fromCharCode(113,95,51,51,95,100,101,115,101,114,105,97,108,105,122,101,0);
          let awayicon_ = String.fromCharCode(108,111,111,112,98,97,99,107,95,114,95,55,53,0);
         libavformatQ = [1];
         iconorientation0 += `${iconorientation0.length}`;
         nativeexf = `${iconorientation0.length * 3}`;
         awayicon_ = `${iconorientation0.length}`;
      }
          let basketballdetailsbg3 = 4.0;
          let matchinactivej = String.fromCharCode(99,112,117,102,108,97,103,115,95,54,95,52,54,0);
         apps7 >>= Math.min(2, Math.abs(2 << (Math.min(4, matchinactivej.length))));
         basketballdetailsbg3 -= parseInt(`${basketballdetailsbg3}`) - parseInt(`${basketballdetailsbg3}`);
         matchinactivej += `${parseInt(`${basketballdetailsbg3}`) << (Math.min(4, Math.abs(3)))}`;
      while (4 >= (2 * apps7) && 5 >= (2 * apps7)) {
          let awayplayerE: Map<any, any> = new Map([[String.fromCharCode(110,101,120,116,108,95,114,95,50,49,0),false ], [String.fromCharCode(120,95,54,49,95,114,101,109,111,118,101,103,114,97,105,110,0),true ]]);
          let iconh = 1.0;
          let suggestiont = String.fromCharCode(105,115,105,95,98,95,53,52,0);
         libavformatQ.push(eyeopenF.length * soundA.size);
         awayplayerE.set(`${iconh}`, parseInt(`${iconh}`));
         suggestiont += `${parseInt(`${iconh}`) ^ suggestiont.length}`;
         break;
      }
       let iconwatchr: Array<any> = [String.fromCharCode(118,95,54,57,95,114,116,97,100,100,114,115,0), String.fromCharCode(98,97,103,95,116,95,52,52,0), String.fromCharCode(116,119,105,110,118,113,95,99,95,51,48,0)];
      while ((confirmation5 / (Math.max(4, iconwatchr.length))) >= 1.7 || (iconwatchr.length ^ 4) >= 5) {
          let modulesM = 1;
          let stringz = String.fromCharCode(116,121,112,95,114,95,54,49,0);
         iconwatchr.push(modulesM - parseInt(`${confirmation5}`));
         modulesM <<= Math.min(stringz.length, 2);
         stringz = `${stringz.length | stringz.length}`;
         break;
      }
         confirmation5 /= Math.max(parseInt(`${ewardedF}`), 4);
      libreactperfloggerjnio = `${libreactperfloggerjnio.length % (Math.max(2, 6))}`;
      if (questV) {
         break;
      }
   } while (questV && (!libreactperfloggerjnio.endsWith(`${penaltygoal0}`)));
   if (penaltygoal0) {
      runtimeschedulerk.set(`${defaultroombg_}`, parseInt(`${leakcheckerq}`) + 1);
   }
        setUsernameErrMsg(err.errors.username);
      }

      if (!err.errors && err.message) {

   let hongkongd = 5004851.0 >= leakcheckerq;
   do {
      leakcheckerq += parseInt(`${defaultroombg_}`);
      if (hongkongd) {
         break;
      }
   } while (hongkongd && (4 == (4 % (Math.max(5, libreactperfloggerjnio.length))) || (1.39 + leakcheckerq) == 3.28));
      defaultroombg_ -= parseFloat(`${iconbellactivef.length}`);
        setUsernameErrMsg(err.message);
      }


      return;
    }

    await dispatch(updateUsernameState(res));

       let eacto = String.fromCharCode(97,95,49,57,95,112,116,115,101,115,0);
       let libcxxcomponentsY = 0.0;
      while (2.82 == (5.27 + libcxxcomponentsY) && (2 >> (Math.min(2, eacto.length))) == 4) {
         eacto = `${eacto.length * 1}`;
         break;
      }
      while (eacto.length >= parseInt(`${libcxxcomponentsY}`)) {
         libcxxcomponentsY -= parseFloat(`${eacto.length}`);
         break;
      }
         eacto += "2";
      let exampleimagec = eacto == String.fromCharCode(56,114,101,95,98,0);
      do {
          let shareB = 4.0;
          let entryC: Array<any> = [332, 226, 802];
         eacto = `${3 & parseInt(`${shareB}`)}`;
         shareB /= Math.max(3 / (Math.max(8, entryC.length)), 1);
         entryC = [entryC.length];
         if (exampleimagec) {
            break;
         }
      } while ((eacto.endsWith(`${libcxxcomponentsY}`)) && exampleimagec);
       let bggradientb = false;
          let libloggerq = String.fromCharCode(106,95,51,95,115,105,122,101,100,0);
         eacto += `${libloggerq.length << (Math.min(Math.abs(1), 4))}`;
      leakcheckerq *= phoneJ.size - 2;
       let flagT = 3.0;
       let footballtrophyP: Array<any> = [768, 225, 248];
       let playE = true;
       let final_bA = false;
         flagT += parseFloat(`${3}`);
      if (playE || final_bA) {
         playE = footballtrophyP.length < 32 && !playE;
      }
      let iconpipexpand8 = 8633500.0 >= flagT;
      do {
          let runtimeschedulerT = false;
          let ewardedH = 2.0;
          let fullQ: Array<any> = [565, 468];
          let plashm = String.fromCharCode(101,120,97,109,112,108,101,115,95,112,95,55,49,0);
         flagT /= Math.max(3, parseFloat(`${footballtrophyP.length}`));
         runtimeschedulerT = plashm.length <= 40;
         ewardedH /= Math.max(2, parseFloat(`${parseInt(`${ewardedH}`)}`));
         fullQ = [2];
         plashm += "3";
         if (iconpipexpand8) {
            break;
         }
      } while (iconpipexpand8 && (footballtrophyP.includes(flagT)));
      if (!playE && final_bA) {
         playE = !playE;
      }
      if (final_bA || (1 >> (Math.min(2, footballtrophyP.length))) > 3) {
         final_bA = !final_bA || !playE;
      }
      orangedownarrowd /= Math.max(bdxadsdkI.length, 3);
    await dispatch(changeScreenAction('登录成功'));

   for (let i = 0; i < 3; i++) {
      runtimeschedulerk.set(`${leakcheckerq}`, parseInt(`${leakcheckerq}`) & 3);
   }
      penaltygoal0 = 10.27 > orangedownarrowd && 43 > phoneJ.size;
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
                        source={require("@static/images/invite/volumeOrangeclock.png")}
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
