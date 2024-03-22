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
       let fast2 = 2.0;
    let episodest = true;
    let borderlessQ = false;
    let vignetter = true;
    let downb = String.fromCharCode(97,114,114,97,121,95,109,95,49,0);
    let country_ = String.fromCharCode(99,119,110,100,95,51,95,50,0);
    let telegramL = String.fromCharCode(116,97,103,97,118,114,95,51,95,57,49,0);
    let submitT = 2.0;
    let sellf = false;
    let miniC = true;
       let screenk = String.fromCharCode(97,95,56,51,95,105,110,116,101,114,112,111,108,97,116,111,114,0);
         screenk = "1";
      if (screenk != String.fromCharCode(73,0) && screenk == String.fromCharCode(54,0)) {
          let wind2: Map<any, any> = new Map([[String.fromCharCode(97,95,52,48,95,115,108,105,100,101,0),755], [String.fromCharCode(104,95,55,48,95,99,104,97,110,103,101,0),292]]);
         screenk += "2";
         wind2.set(`${wind2.size}`, wind2.size ^ 2);
      }
      if (screenk != String.fromCharCode(74,0)) {
         screenk = `${(String.fromCharCode(88,0) == screenk ? screenk.length : screenk.length)}`;
      }
      vignetter = !downb.endsWith(`${fast2}`);
      fast2 /= Math.max(downb.length << (Math.min(Math.abs(3), 5)), 4);

    if (usernameErrMsg !== null && !isJump) return;

      vignetter = (!vignetter ? borderlessQ : vignetter);
   while (country_.length <= 5) {
       let recommendation8 = true;
         recommendation8 = !recommendation8;
         recommendation8 = (!recommendation8 ? !recommendation8 : recommendation8);
      while (!recommendation8) {
         recommendation8 = recommendation8 && !recommendation8;
         break;
      }
      country_ += `${((borderlessQ ? 4 : 4))}`;
      break;
   }

    let res: any;
    try {

   let stylez = sellf ? !sellf : sellf;
   do {
      sellf = 95 >= telegramL.length && country_ == String.fromCharCode(100,0);
      if (stylez) {
         break;
      }
   } while (stylez && (telegramL.length < 1));
   if ((fast2 / 4.54) > 4.45 && fast2 > 4.54) {
       let episodec = 0;
         episodec >>= Math.min(Math.abs(episodec % (Math.max(episodec, 8))), 2);
          let penalty2 = String.fromCharCode(105,100,102,118,95,108,95,57,51,0);
          let adultO = 1.0;
         episodec += 3 << (Math.min(Math.abs(episodec), 4));
         penalty2 += `${2 - penalty2.length}`;
         adultO /= Math.max(parseInt(`${adultO}`), 3);
      let langv = episodec <= 9339119;
      do {
          let video8 = String.fromCharCode(99,95,52,50,95,109,109,99,111,0);
          let modityD = String.fromCharCode(99,111,114,114,101,99,116,105,110,103,95,53,95,49,49,0);
          let temperatured = String.fromCharCode(104,95,55,49,95,100,105,102,102,97,98,108,101,0);
          let borderlessU = 1.0;
          let time_w_ = String.fromCharCode(100,95,51,48,95,101,116,104,101,114,0);
         episodec >>= Math.min(1, Math.abs(video8.length % 2));
         video8 = `${modityD.length}`;
         modityD = `${time_w_.length * 2}`;
         temperatured += `${3 - parseInt(`${borderlessU}`)}`;
         borderlessU -= parseFloat(`${temperatured.length + modityD.length}`);
         time_w_ += "2";
         if (langv) {
            break;
         }
      } while (langv && ((episodec - episodec) == 5 || 5 == (episodec - episodec)));
      vignetter = downb.endsWith(`${borderlessQ}`);
   }
      res = await THFirebase.updateUsername({
        username: isJump ? '' : username,
      });
    } catch (err: any) {
      if (
        err.errors &&
        err.errors.username
      ) {

   for (let v = 0; v < 1; v++) {
       let placeholderj = 0.0;
       let switch_v0 = true;
       let bufferL = String.fromCharCode(115,116,114,105,112,112,101,100,95,100,95,49,0);
       let plashX: Map<any, any> = new Map([[String.fromCharCode(98,95,55,48,95,116,97,98,115,0),true ], [String.fromCharCode(99,97,112,116,117,114,101,95,116,95,56,50,0),true ]]);
      for (let s = 0; s < 2; s++) {
          let detail7 = String.fromCharCode(105,109,112,114,105,110,116,95,101,95,51,55,0);
          let phones = String.fromCharCode(116,95,49,52,95,110,116,101,114,102,97,99,101,0);
          let anytimea = 1;
         placeholderj -= parseFloat(`${anytimea + detail7.length}`);
         detail7 = "3";
         phones = `${phones.length ^ phones.length}`;
      }
       let umengV: Array<any> = [764, 353];
       let eighteen6: Array<any> = [106, 579, 256];
       let macauP: Map<any, any> = new Map([[String.fromCharCode(97,95,49,48,95,99,108,105,112,115,0),21], [String.fromCharCode(112,117,108,108,95,99,95,54,55,0),774]]);
       let theme1: Map<any, any> = new Map([[String.fromCharCode(104,95,54,52,95,109,111,109,101,110,116,115,0),String.fromCharCode(99,111,110,100,117,99,116,111,114,95,104,95,54,0)], [String.fromCharCode(117,95,55,53,95,105,111,101,114,114,110,111,109,101,109,0),String.fromCharCode(99,97,99,104,101,100,107,101,121,115,95,105,95,57,57,0)], [String.fromCharCode(98,95,57,50,95,103,114,101,101,110,0),String.fromCharCode(100,101,115,99,101,110,100,101,114,95,119,95,49,55,0)]]);
      if (!switch_v0) {
         switch_v0 = umengV.length < 68;
      }
       let cornerH = 4.0;
         eighteen6.push(((switch_v0 ? 5 : 1) >> (Math.min(eighteen6.length, 5))));
      for (let q = 0; q < 1; q++) {
         plashX = new Map([[`${theme1.size}`, 3]]);
      }
      if (5 >= (2 / (Math.max(3, theme1.size))) && (umengV.length / (Math.max(2, 1))) >= 3) {
         theme1 = new Map([[`${plashX.size}`, plashX.size]]);
      }
         bufferL += `${((switch_v0 ? 5 : 4) >> (Math.min(Math.abs(1), 5)))}`;
      for (let d = 0; d < 3; d++) {
         eighteen6 = [1];
      }
      if (3 == plashX.size) {
         cornerH /= Math.max(1, eighteen6.length);
      }
          let pauseC = 2.0;
          let linkt = 5.0;
         macauP = new Map([[`${macauP.size}`, 1 - parseInt(`${cornerH}`)]]);
         pauseC /= Math.max(parseFloat(`${parseInt(`${linkt}`)}`), 3);
      sellf = submitT <= 29.55;
   }
       let register_m6k = 0.0;
       let memberK = 1.0;
       let screenU: Map<any, any> = new Map([[String.fromCharCode(115,117,99,99,101,115,115,102,117,108,95,112,95,57,51,0),873], [String.fromCharCode(101,118,105,99,116,95,53,95,55,51,0),545]]);
      let schedulen = 7506844.0 >= register_m6k;
      do {
         register_m6k += parseInt(`${memberK}`);
         if (schedulen) {
            break;
         }
      } while (schedulen && (1.7 < (4.62 + memberK) && (4.62 + register_m6k) < 1.34));
         screenU.set(`${memberK}`, screenU.size);
      for (let a = 0; a < 2; a++) {
          let photo_ = 5;
          let rankJ: Map<any, any> = new Map([[String.fromCharCode(101,114,114,108,111,103,95,119,95,51,48,0),407], [String.fromCharCode(105,95,52,49,95,100,101,99,101,108,101,114,97,116,105,110,103,0),662]]);
          let countdown2 = 2.0;
         register_m6k -= screenU.size - parseInt(`${register_m6k}`);
         photo_ -= parseInt(`${countdown2}`) % (Math.max(3, 5));
         rankJ.set(`${countdown2}`, parseInt(`${countdown2}`));
      }
       let thumbnailc: Map<any, any> = new Map([[String.fromCharCode(117,95,50,50,95,100,111,117,98,108,101,115,115,116,114,0),893], [String.fromCharCode(106,95,49,56,95,115,116,114,101,97,109,102,111,117,114,99,99,0),1]]);
      if (thumbnailc.size > 3) {
          let aboutQ = 0;
          let telegramz = 1.0;
          let borderless8: Map<any, any> = new Map([[String.fromCharCode(113,95,53,54,95,115,116,97,109,112,115,0),324], [String.fromCharCode(113,95,55,54,95,99,104,97,105,110,115,0),848], [String.fromCharCode(117,112,108,111,97,100,95,52,95,53,54,0),762]]);
          let groupu = String.fromCharCode(105,95,57,50,95,112,114,101,115,117,98,109,105,116,0);
          let policy0: Map<any, any> = new Map([[String.fromCharCode(117,95,51,56,95,112,114,101,109,117,108,116,105,112,108,121,121,117,118,0),String.fromCharCode(118,99,116,101,115,116,95,110,95,52,51,0)], [String.fromCharCode(100,101,115,107,116,111,112,95,50,95,52,51,0),String.fromCharCode(107,95,53,53,95,100,117,109,109,121,0)], [String.fromCharCode(107,95,55,52,95,102,97,118,101,100,0),String.fromCharCode(110,95,49,54,95,117,110,114,101,118,101,114,115,101,100,0)]]);
         memberK /= Math.max(parseFloat(`${3 / (Math.max(1, parseInt(`${telegramz}`)))}`), 2);
         aboutQ %= Math.max(borderless8.size & 3, 5);
         telegramz *= parseFloat(`${borderless8.size % (Math.max(8, aboutQ))}`);
         groupu = `${(groupu == String.fromCharCode(83,0) ? policy0.size : groupu.length)}`;
         policy0.set(`${aboutQ}`, aboutQ);
      }
      if ((memberK / (Math.max(5.41, 8))) > 1.72) {
         memberK *= parseFloat(`${thumbnailc.size * parseInt(`${register_m6k}`)}`);
      }
      let sourceQ = 5825715.0 >= memberK;
      do {
         memberK *= parseFloat(`${screenU.size}`);
         if (sourceQ) {
            break;
         }
      } while (sourceQ && (5.79 >= (memberK + register_m6k) && (5.79 + register_m6k) >= 5.86));
         memberK /= Math.max(parseFloat(`${thumbnailc.size}`), 4);
       let playlistn = String.fromCharCode(121,95,54,57,95,98,105,119,103,116,0);
      episodest = 44 >= screenU.size;
        setUsernameErrMsg(err.errors.username);
      }

      if (!err.errors && err.message) {

   for (let y = 0; y < 1; y++) {
      vignetter = 65.51 <= fast2;
   }
   if (1.13 < (1.76 - submitT) || 1.76 < submitT) {
      submitT *= parseFloat(`${3}`);
   }
        setUsernameErrMsg(err.message);
      }


      return;
    }

    await dispatch(updateUsernameState(res));

   if (country_.length >= 1) {
      sellf = 48 < country_.length;
   }
   if (episodest) {
       let dice0: Map<any, any> = new Map([[String.fromCharCode(105,112,102,115,95,105,95,54,51,0),799], [String.fromCharCode(111,95,48,95,119,105,116,104,111,117,116,0),25], [String.fromCharCode(100,95,50,55,95,105,116,120,102,109,0),427]]);
       let spinnerz = true;
       let frame__J: Map<any, any> = new Map([[String.fromCharCode(106,95,53,53,95,100,105,115,97,112,112,101,97,114,0),196], [String.fromCharCode(103,95,56,55,95,112,108,97,99,101,104,111,108,100,101,114,115,0),500]]);
       let k_imageX = 5;
         frame__J.set(`${spinnerz}`, 3 ^ k_imageX);
      while ((frame__J.size + 4) <= 3 || 2 <= (k_imageX + 4)) {
         frame__J.set(`${k_imageX}`, k_imageX ^ dice0.size);
         break;
      }
         k_imageX /= Math.max(5, dice0.size & 1);
      while ((3 + frame__J.size) == 2 || (3 + frame__J.size) == 1) {
          let reminder7: Map<any, any> = new Map([[String.fromCharCode(110,95,51,51,95,111,118,97,108,0),865], [String.fromCharCode(115,112,101,99,105,102,105,101,114,95,118,95,50,54,0),356], [String.fromCharCode(102,111,108,108,111,119,101,114,115,95,98,95,56,51,0),886]]);
         frame__J = new Map([[`${reminder7.size}`, reminder7.size]]);
         break;
      }
      if (!spinnerz) {
         spinnerz = !spinnerz || frame__J.size == 61;
      }
       let downN = false;
       let floater4 = true;
          let assistV = String.fromCharCode(117,95,49,55,95,103,101,115,116,117,114,101,115,0);
          let filedf = 5.0;
         floater4 = downN && 6.47 < filedf;
         assistV += "3";
         filedf *= (parseFloat(`${assistV == String.fromCharCode(55,0) ? assistV.length : assistV.length}`));
          let auto_luG = String.fromCharCode(106,95,50,57,95,108,103,111,114,97,110,100,0);
          let incidentj = String.fromCharCode(99,102,104,100,95,110,95,56,57,0);
         k_imageX -= ((spinnerz ? 3 : 3) + 3);
         auto_luG = `${incidentj.length ^ auto_luG.length}`;
         incidentj += `${auto_luG.length}`;
         spinnerz = dice0.size < 38;
      let refreshp = floater4 ? !floater4 : floater4;
      do {
         floater4 = 10 == k_imageX && floater4;
         if (refreshp) {
            break;
         }
      } while (refreshp && (!floater4));
          let otherA = String.fromCharCode(102,116,118,109,110,111,100,101,95,98,95,56,52,0);
         dice0 = new Map([[`${spinnerz}`, 3]]);
         otherA += `${(String.fromCharCode(84,0) == otherA ? otherA.length : otherA.length)}`;
      if (!floater4 && 5 >= (dice0.size * 5)) {
         floater4 = frame__J.size > 91;
      }
      episodest = vignetter;
   }
    await dispatch(changeScreenAction('登录成功'));

      country_ += `${(String.fromCharCode(119,0) == downb ? parseInt(`${submitT}`) : downb.length)}`;
   let indexQ = borderlessQ ? !borderlessQ : borderlessQ;
   do {
       let umengn = String.fromCharCode(97,99,99,117,109,95,52,95,55,49,0);
       let submitO = String.fromCharCode(117,95,49,48,48,95,115,112,101,99,105,102,105,99,0);
       let frame_sZ = String.fromCharCode(118,95,50,54,95,109,105,110,115,0);
       let injuryR = true;
      if (frame_sZ.length <= 4 && !injuryR) {
          let tumbnailJ = 4.0;
          let episode5 = 1;
         injuryR = String.fromCharCode(118,0) == umengn;
         tumbnailJ *= episode5;
         episode5 %= Math.max(episode5, 2);
      }
         frame_sZ = `${(String.fromCharCode(95,0) == submitO ? frame_sZ.length : submitO.length)}`;
      let tempi = submitO == String.fromCharCode(57,48,108,49,0);
      do {
         submitO = `${(String.fromCharCode(108,0) == umengn ? umengn.length : frame_sZ.length)}`;
         if (tempi) {
            break;
         }
      } while (tempi && (umengn.length < 4 || submitO == String.fromCharCode(65,0)));
      if (frame_sZ != String.fromCharCode(80,0)) {
          let custom7 = String.fromCharCode(116,95,52,54,95,115,109,115,0);
          let searchbarY = String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,95,101,95,56,56,0);
         submitO = `${umengn.length / (Math.max(4, submitO.length))}`;
         custom7 += `${custom7.length}`;
         searchbarY += `${custom7.length}`;
      }
      let overlayj = String.fromCharCode(105,121,120,95,120,114,0) == frame_sZ;
      do {
         frame_sZ = `${submitO.length | umengn.length}`;
         if (overlayj) {
            break;
         }
      } while ((!injuryR) && overlayj);
       let moviesx = 5;
       let livem = 3;
       let reminderN: Array<any> = [382, 479, 565];
          let typing9 = String.fromCharCode(105,110,118,111,107,101,95,119,95,53,48,0);
          let subsf = 5.0;
          let success8: Array<any> = [534, 4, 343];
         reminderN = [2];
         typing9 += `${(String.fromCharCode(122,0) == typing9 ? parseInt(`${subsf}`) : typing9.length)}`;
         subsf /= Math.max(parseFloat(`${1}`), 3);
         success8.push(typing9.length);
      while (submitO.length < 4 || umengn == String.fromCharCode(48,0)) {
          let gpay9: Map<any, any> = new Map([[String.fromCharCode(120,95,50,49,95,102,114,111,110,116,0),215], [String.fromCharCode(112,114,105,110,116,102,95,99,95,57,48,0),331]]);
          let thumbnailT: Array<any> = [14, 194, 550];
          let dropdownX = String.fromCharCode(110,95,52,57,95,105,108,98,99,100,97,116,97,0);
          let videoZ = String.fromCharCode(97,95,53,49,0);
         submitO = `${dropdownX.length}`;
         gpay9 = new Map([[`${gpay9.size}`, 2]]);
         thumbnailT = [thumbnailT.length % 1];
         dropdownX = "1";
         videoZ += `${gpay9.size}`;
         break;
      }
       let sortF = String.fromCharCode(100,95,49,53,95,117,110,115,112,105,108,108,0);
       let greenY = String.fromCharCode(118,101,99,115,95,99,95,49,55,0);
         greenY = `${frame_sZ.length / (Math.max(2, 7))}`;
      while (injuryR || 5 == frame_sZ.length) {
         injuryR = !injuryR;
         break;
      }
      borderlessQ = !borderlessQ;
      if (indexQ) {
         break;
      }
   } while (indexQ && (telegramL.length < 4));
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
              <TouchableOpacity activeOpacity={0.85}
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
