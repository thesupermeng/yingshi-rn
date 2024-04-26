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
       let enewinterstitiall = String.fromCharCode(107,95,54,51,95,101,120,97,109,105,110,101,0);
    let iconmoreo = 4.0;
    let dangera = 4.0;
    let zoomT = String.fromCharCode(111,95,49,54,95,104,117,103,103,105,110,103,0);
    let analyticsV = 5.0;
    let t_titlec = String.fromCharCode(112,114,111,116,101,99,116,105,111,110,95,116,95,51,54,0);
    let overlay_ = 2.0;
   if ((3 + parseInt(`${iconmoreo}`)) >= 1 || 2.44 >= (zoomT.length + iconmoreo)) {
      zoomT = `${parseInt(`${analyticsV}`)}`;
   }
       let reactnavigationQ = String.fromCharCode(119,101,98,118,116,116,95,119,95,51,54,0);
       let webviewd = String.fromCharCode(105,95,50,49,95,103,114,97,110,116,0);
          let progressp: Array<any> = [String.fromCharCode(112,101,99,101,110,116,95,114,95,56,53,0), String.fromCharCode(116,111,103,103,108,105,110,103,95,101,95,57,0)];
          let gemfileQ: Map<any, any> = new Map([[String.fromCharCode(117,95,53,52,95,111,112,117,115,101,110,99,0),String.fromCharCode(97,114,103,98,105,95,114,95,49,0)], [String.fromCharCode(101,95,54,55,95,98,121,116,101,115,116,114,105,110,103,0),String.fromCharCode(100,95,54,51,0)], [String.fromCharCode(108,95,56,48,95,98,97,110,110,101,100,0),String.fromCharCode(116,97,98,108,101,116,95,48,95,53,54,0)]]);
          let pressureB: Array<any> = [String.fromCharCode(109,95,55,51,95,102,114,101,97,100,0), String.fromCharCode(104,95,52,48,95,97,101,115,110,105,0)];
         webviewd = `${2 + reactnavigationQ.length}`;
         progressp = [gemfileQ.size];
         gemfileQ = new Map([[`${gemfileQ.size}`, gemfileQ.size % 3]]);
         pressureB.push(pressureB.length - progressp.length);
         webviewd = "1";
       let dialogH = String.fromCharCode(107,95,49,52,95,115,110,97,112,115,104,111,116,116,101,114,0);
      for (let k = 0; k < 2; k++) {
          let defaultfootballbgu = String.fromCharCode(119,95,52,49,95,115,107,101,119,0);
         webviewd = `${defaultfootballbgu.length - 3}`;
      }
       let libzeusp = String.fromCharCode(112,108,97,121,95,98,95,57,49,0);
       let project3 = String.fromCharCode(98,95,50,50,95,115,101,112,97,114,97,116,111,114,0);
         webviewd += `${webviewd.length}`;
      iconmoreo /= Math.max(parseInt(`${iconmoreo}`) / 3, 5);

    if (usernameErrMsg !== null && !isJump) return;

   if (4.56 > (4.17 + iconmoreo) && (4.17 + iconmoreo) > 4.36) {
      iconmoreo += enewinterstitiall.length;
   }
       let goal_ = String.fromCharCode(106,95,49,49,95,97,118,99,105,0);
       let mintegralV = 0.0;
          let controlsH = String.fromCharCode(100,95,57,95,105,110,116,114,111,0);
         goal_ += `${goal_.length / 3}`;
         controlsH += `${1 | controlsH.length}`;
      let runtimescheduler2 = mintegralV <= 7692500.0;
      do {
         mintegralV /= Math.max(4, parseFloat(`${goal_.length}`));
         if (runtimescheduler2) {
            break;
         }
      } while (runtimescheduler2 && (3 == (3 - goal_.length) || (parseInt(`${mintegralV}`) + 3) == 1));
      for (let d = 0; d < 1; d++) {
         mintegralV -= parseFloat(`${1 - goal_.length}`);
      }
      while ((goal_.length & 1) < 4 || 1 < (parseInt(`${mintegralV}`) * goal_.length)) {
          let hiadm = 3.0;
          let sideT: Array<any> = [731, 439, 538];
          let settingT = 3.0;
          let stringsX = 1;
         mintegralV -= parseFloat(`${parseInt(`${hiadm}`) % (Math.max(sideT.length, 5))}`);
         hiadm -= parseFloat(`${stringsX}`);
         sideT.push(2);
         settingT += 3 * stringsX;
         break;
      }
      if ((mintegralV * 3.49) < 5.89) {
          let stationI = 0.0;
          let bootsplashT = String.fromCharCode(101,103,114,101,115,115,95,52,95,53,48,0);
          let libreanimatedD: Map<any, any> = new Map([[String.fromCharCode(100,101,97,100,95,55,95,56,55,0),238], [String.fromCharCode(104,105,115,116,111,114,121,95,57,95,53,54,0),18]]);
          let guides = String.fromCharCode(111,112,116,105,111,110,115,95,55,95,56,49,0);
          let videovarq = String.fromCharCode(110,97,118,105,103,97,116,105,111,110,98,97,114,95,101,95,51,57,0);
         mintegralV *= parseFloat(`${parseInt(`${stationI}`) / (Math.max(guides.length, 5))}`);
         stationI /= Math.max(parseFloat(`${bootsplashT.length}`), 3);
         bootsplashT += `${libreanimatedD.size % (Math.max(7, videovarq.length))}`;
         libreanimatedD = new Map([[`${libreanimatedD.size}`, 1 - videovarq.length]]);
         guides += "1";
      }
       let sourceJ = 5.0;
      zoomT += `${parseInt(`${dangera}`)}`;

    let res: any;
    try {

   if (overlay_ < 3.61) {
       let mintegralH = 0.0;
       let styleb = 4.0;
          let mbjscommon6: Array<any> = [920, 118];
         mintegralH *= parseFloat(`${parseInt(`${styleb}`) * parseInt(`${mintegralH}`)}`);
         mbjscommon6.push(1 & mbjscommon6.length);
         styleb += parseFloat(`${2 | parseInt(`${styleb}`)}`);
          let eighteenm = true;
          let lineI: Map<any, any> = new Map([[String.fromCharCode(109,116,97,102,95,55,95,55,55,0),String.fromCharCode(103,112,116,111,112,116,115,95,116,95,55,49,0)], [String.fromCharCode(109,95,49,57,95,111,98,116,97,105,110,0),String.fromCharCode(106,95,50,53,95,110,111,110,101,109,112,116,121,0)]]);
         styleb -= parseFloat(`${lineI.size}`);
         eighteenm = eighteenm || eighteenm;
         lineI.set(`${eighteenm}`, ((eighteenm ? 1 : 2)));
      if ((styleb - mintegralH) > 1.70) {
         styleb /= Math.max(parseFloat(`${3 | parseInt(`${styleb}`)}`), 3);
      }
      for (let b = 0; b < 1; b++) {
          let balld = String.fromCharCode(103,101,110,101,114,97,108,95,107,95,51,50,0);
          let firebaseB = false;
          let mathM = 3.0;
         mintegralH *= parseFloat(`${parseInt(`${styleb}`)}`);
         balld = `${((firebaseB ? 1 : 5) << (Math.min(Math.abs(parseInt(`${mathM}`)), 5)))}`;
         firebaseB = !firebaseB;
         mathM -= (parseFloat(`${(firebaseB ? 5 : 2) * parseInt(`${mathM}`)}`));
      }
         styleb /= Math.max(5, parseFloat(`${parseInt(`${mintegralH}`)}`));
      dangera += (enewinterstitiall == String.fromCharCode(79,0) ? parseInt(`${overlay_}`) : enewinterstitiall.length);
   }
       let over1 = 2.0;
      for (let y = 0; y < 3; y++) {
         over1 /= Math.max(parseInt(`${over1}`), 5);
      }
         over1 += parseInt(`${over1}`) & 3;
      for (let h = 0; h < 2; h++) {
         over1 += 2 & parseInt(`${over1}`);
      }
      zoomT += `${2 << (Math.min(Math.abs(parseInt(`${analyticsV}`)), 1))}`;
      res = await wwIconscheduleColors.updateUsername({
        username: isJump ? '' : username,
      });
    } catch (err: any) {
      if (
        err.errors &&
        err.errors.username
      ) {

      overlay_ += parseFloat(`${1}`);
   while (iconmoreo > 2.77) {
       let nativemoduleZ: Map<any, any> = new Map([[String.fromCharCode(114,95,55,52,95,114,103,116,99,117,0),269], [String.fromCharCode(117,110,97,114,121,95,121,95,49,48,48,0),878]]);
       let stats3 = String.fromCharCode(115,101,114,105,97,108,105,122,101,114,95,114,95,57,52,0);
       let hooksc: Array<any> = [393, 965];
       let combinep = String.fromCharCode(112,114,101,97,108,108,111,99,97,116,101,95,50,95,51,50,0);
       let eighteen9: Array<any> = [String.fromCharCode(106,95,57,52,95,98,112,115,0), String.fromCharCode(97,95,54,57,95,99,114,111,115,115,98,97,114,0)];
       let backwardi = String.fromCharCode(111,95,56,53,95,116,114,97,110,115,102,111,114,109,115,0);
       let orientationb = String.fromCharCode(113,95,52,54,95,100,101,114,101,102,0);
       let basketballhometeamz = false;
         nativemoduleZ.set(orientationb, orientationb.length / (Math.max(1, 10)));
      let specl = orientationb == String.fromCharCode(51,50,53,51,0);
      do {
         orientationb = `${2 >> (Math.min(2, stats3.length))}`;
         if (specl) {
            break;
         }
      } while ((orientationb.length < stats3.length) && specl);
      if (1 >= (2 >> (Math.min(5, eighteen9.length))) && (eighteen9.length >> (Math.min(stats3.length, 1))) >= 2) {
         eighteen9 = [(String.fromCharCode(103,0) == stats3 ? backwardi.length : stats3.length)];
      }
      let leaguec = combinep == String.fromCharCode(104,110,108,111,122,51,95,111,106,0);
      do {
          let alertD = String.fromCharCode(106,115,105,109,100,99,102,103,95,113,95,50,57,0);
          let commoni = String.fromCharCode(120,95,56,0);
          let xvodx = String.fromCharCode(112,95,55,50,0);
          let rootR = true;
         combinep += `${(String.fromCharCode(97,0) == backwardi ? (rootR ? 4 : 2) : backwardi.length)}`;
         alertD += `${alertD.length / (Math.max(5, commoni.length))}`;
         commoni = `${alertD.length * commoni.length}`;
         xvodx += `${2 | commoni.length}`;
         rootR = commoni.length <= 41 && xvodx.length <= 41;
         if (leaguec) {
            break;
         }
      } while ((combinep.length == hooksc.length) && leaguec);
      for (let x = 0; x < 3; x++) {
         combinep = "2";
      }
          let update_88 = 0.0;
          let encryptH = String.fromCharCode(97,115,121,110,99,100,105,115,112,108,97,121,107,105,116,95,118,95,57,50,0);
          let inactiveK = String.fromCharCode(102,114,101,101,95,116,95,56,51,0);
         stats3 += `${parseInt(`${update_88}`)}`;
         update_88 /= Math.max(4, (inactiveK == String.fromCharCode(98,0) ? encryptH.length : inactiveK.length));
         encryptH = `${inactiveK.length}`;
         hooksc = [1 - hooksc.length];
       let bridgeU = String.fromCharCode(114,114,111,114,95,51,95,53,0);
       let customd = String.fromCharCode(98,95,53,56,95,115,104,111,119,119,97,118,101,115,112,105,99,0);
         orientationb += `${backwardi.length}`;
      if (orientationb.length == bridgeU.length) {
         orientationb += `${orientationb.length}`;
      }
         bridgeU = `${eighteen9.length << (Math.min(Math.abs(1), 3))}`;
      for (let h = 0; h < 2; h++) {
         bridgeU = `${customd.length + 3}`;
      }
         basketballhometeamz = stats3.length <= 94;
      zoomT += `${parseInt(`${overlay_}`) / 1}`;
      break;
   }
        setUsernameErrMsg(err.errors.username);
      }

      if (!err.errors && err.message) {

      overlay_ /= Math.max(3, parseFloat(`${t_titlec.length + parseInt(`${dangera}`)}`));
      iconmoreo /= Math.max(2, parseInt(`${iconmoreo}`) ^ 3);
        setUsernameErrMsg(err.message);
      }


      return;
    }

    await dispatch(updateUsernameState(res));

   for (let e = 0; e < 1; e++) {
      zoomT += `${2 ^ parseInt(`${iconmoreo}`)}`;
   }
      overlay_ *= parseFloat(`${parseInt(`${analyticsV}`) + t_titlec.length}`);
    await dispatch(changeScreenAction('登录成功'));

      enewinterstitiall += `${parseInt(`${analyticsV}`) ^ 3}`;
       let applicationg = String.fromCharCode(108,95,52,52,95,97,99,99,101,115,115,105,110,103,0);
       let mimoa = String.fromCharCode(98,95,54,95,115,116,117,102,102,105,110,103,0);
       let giftbutton5 = String.fromCharCode(116,97,114,103,101,116,115,95,117,95,56,56,0);
       let defaultplayerimgi = String.fromCharCode(121,95,56,49,95,102,105,101,108,100,0);
      if (!defaultplayerimgi.endsWith(giftbutton5)) {
         giftbutton5 = `${(applicationg == String.fromCharCode(57,0) ? applicationg.length : defaultplayerimgi.length)}`;
      }
         giftbutton5 += `${(mimoa == String.fromCharCode(54,0) ? defaultplayerimgi.length : mimoa.length)}`;
      let champion7 = String.fromCharCode(95,119,113,48,122,49,106,0) == applicationg;
      do {
         applicationg += `${giftbutton5.length | 3}`;
         if (champion7) {
            break;
         }
      } while ((defaultplayerimgi != String.fromCharCode(81,0) || applicationg == String.fromCharCode(68,0)) && champion7);
          let overa = true;
          let hoverj = 5.0;
          let injuryP: Map<any, any> = new Map([[String.fromCharCode(99,97,116,101,103,111,114,105,101,115,95,118,95,57,55,0),117], [String.fromCharCode(105,116,115,101,108,102,95,107,95,57,51,0),340]]);
         mimoa += "2";
         overa = 77 > injuryP.size;
         hoverj -= injuryP.size * 3;
       let templateprocessorC = 1;
         applicationg += `${(giftbutton5 == String.fromCharCode(75,0) ? giftbutton5.length : defaultplayerimgi.length)}`;
         templateprocessorC &= 3;
         defaultplayerimgi = `${templateprocessorC * 2}`;
      zoomT += `${parseInt(`${iconmoreo}`) & 3}`;
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
