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
       let w_centerq = true;
    let plus5 = String.fromCharCode(115,117,98,112,101,101,114,95,53,95,50,0);
    let acceptedN = true;
    let greenI: Array<any> = [741, 627, 118];
    let utils5 = String.fromCharCode(112,114,101,100,105,99,116,111,114,115,98,95,118,95,55,50,0);
    let final_i9 = String.fromCharCode(97,95,50,51,95,101,99,114,101,100,0);
    let libfbi = String.fromCharCode(108,95,50,49,95,114,101,102,108,101,99,116,111,114,0);
    let dragK = String.fromCharCode(100,105,115,99,97,114,100,95,108,95,53,0);
    let libloggerL = String.fromCharCode(115,101,110,115,111,114,95,119,95,54,49,0);
    let clockk = 5.0;
    let ballN = false;
    let memberK = String.fromCharCode(107,95,51,49,95,97,116,99,104,101,114,0);
    let greenP: Map<any, any> = new Map([[String.fromCharCode(105,95,50,53,95,109,97,116,114,111,115,107,97,0),30], [String.fromCharCode(112,95,52,56,95,115,104,97,114,112,101,110,105,110,103,0),352], [String.fromCharCode(101,118,101,110,97,118,103,95,57,95,55,0),629]]);
    let agreementI = String.fromCharCode(105,100,101,110,116,105,116,121,95,113,95,54,57,0);
   while (plus5.length >= 2) {
       let filedv = 5.0;
      while (2.29 >= (filedv * filedv) || 2.18 >= (filedv * 2.29)) {
         filedv += parseFloat(`${2 % (Math.max(parseInt(`${filedv}`), 10))}`);
         break;
      }
       let hiadT = true;
      while (filedv <= 5.38) {
         filedv += (parseFloat(`${parseInt(`${filedv}`) | (hiadT ? 5 : 2)}`));
         break;
      }
      plus5 = `${parseInt(`${filedv}`)}`;
      break;
   }
      dragK += `${(greenI.length | (w_centerq ? 1 : 4))}`;

    if (usernameErrMsg !== null && !isJump) return;

      greenI.push(greenI.length);
   for (let x = 0; x < 2; x++) {
       let componentB = String.fromCharCode(104,97,110,100,111,118,101,114,95,113,95,50,53,0);
       let filled0 = String.fromCharCode(110,95,50,51,95,119,111,114,107,0);
       let gemfile5 = 5;
       let telegramp = 1.0;
       let sigmobp = 2.0;
       let foregrounda = String.fromCharCode(121,95,53,49,95,115,117,98,115,101,108,101,99,116,0);
      let libswresample6 = String.fromCharCode(122,107,114,97,107,110,55,100,55,50,0) == componentB;
      do {
          let verticalW: Map<any, any> = new Map([[String.fromCharCode(104,95,51,51,95,105,110,115,116,97,110,116,105,97,116,101,0),933], [String.fromCharCode(112,97,99,107,101,116,101,100,95,54,95,50,54,0),871], [String.fromCharCode(105,110,100,101,110,116,101,100,95,113,95,50,52,0),622]]);
          let foundA = 5.0;
         componentB = `${filled0.length}`;
         verticalW = new Map([[`${verticalW.size}`, parseInt(`${foundA}`) - verticalW.size]]);
         foundA -= parseFloat(`${parseInt(`${foundA}`)}`);
         if (libswresample6) {
            break;
         }
      } while (libswresample6 && (gemfile5 == 4));
         filled0 += "3";
          let telemetry3 = true;
          let leagueV = String.fromCharCode(109,97,110,116,105,115,115,97,115,95,116,95,54,48,0);
         sigmobp *= parseFloat(`${2}`);
         telemetry3 = leagueV.length <= leagueV.length;
      while (2.90 <= telegramp) {
         sigmobp -= (parseFloat(`${filled0 == String.fromCharCode(73,0) ? parseInt(`${telegramp}`) : filled0.length}`));
         break;
      }
         gemfile5 &= 2 % (Math.max(7, gemfile5));
       let selection4 = 1;
       let libsgcoree = 2;
          let countryf = String.fromCharCode(102,105,103,104,116,101,114,115,95,121,95,50,53,0);
          let giftv: Map<any, any> = new Map([[String.fromCharCode(99,95,49,95,109,97,116,104,111,112,115,0),true ], [String.fromCharCode(115,95,56,50,95,100,105,115,116,114,105,98,117,116,101,0),true ]]);
          let styleW = String.fromCharCode(104,95,49,95,117,110,115,116,111,112,112,97,98,108,101,0);
         foregrounda += `${parseInt(`${sigmobp}`)}`;
         countryf += "2";
         giftv = new Map([[`${giftv.size}`, giftv.size]]);
         styleW += `${(countryf == String.fromCharCode(72,0) ? giftv.size : countryf.length)}`;
         sigmobp /= Math.max(parseFloat(`${1 << (Math.min(5, Math.abs(parseInt(`${telegramp}`))))}`), 1);
         filled0 = `${2 / (Math.max(4, filled0.length))}`;
      if ((componentB.length / (Math.max(4, 3))) > 3 && (parseInt(`${telegramp}`) + 4) > 4) {
          let foundd: Map<any, any> = new Map([[String.fromCharCode(97,112,112,115,95,119,95,51,55,0),String.fromCharCode(97,95,54,55,95,116,111,110,101,109,97,112,0)], [String.fromCharCode(112,114,101,118,101,110,116,115,95,108,95,55,52,0),String.fromCharCode(109,95,50,57,95,103,101,110,115,0)], [String.fromCharCode(109,101,108,116,95,107,95,54,50,0),String.fromCharCode(112,95,54,52,95,115,117,112,112,108,101,109,101,110,116,97,114,121,0)]]);
         componentB = `${3 * libsgcoree}`;
         foundd = new Map([[`${foundd.size}`, foundd.size % (Math.max(foundd.size, 10))]]);
      }
      for (let q = 0; q < 1; q++) {
         libsgcoree -= filled0.length;
      }
      if (filled0.startsWith(`${gemfile5}`)) {
         gemfile5 <<= Math.min(filled0.length, 3);
      }
      if (!filled0.startsWith(`${gemfile5}`)) {
         filled0 = "3";
      }
         gemfile5 %= Math.max(1 + selection4, 5);
      ballN = 53 == gemfile5;
   }

    let res: any;
    try {

   for (let f = 0; f < 1; f++) {
      plus5 = `${dragK.length - libloggerL.length}`;
   }
   for (let v = 0; v < 1; v++) {
      final_i9 = `${libloggerL.length * dragK.length}`;
   }
      res = await yys_GesturesConst.updateUsername({
        username: isJump ? '' : username,
      });
    } catch (err: any) {
      if (
        err.errors &&
        err.errors.username
      ) {

       let countdownK = true;
       let saveB = 1;
       let source2: Map<any, any> = new Map([[String.fromCharCode(109,95,56,56,95,114,101,116,114,105,101,118,105,110,103,0),0], [String.fromCharCode(113,95,51,53,95,110,111,110,98,108,111,99,107,105,110,103,0),587]]);
      while (1 > source2.size) {
          let handlerF = 3.0;
          let time_uzU = false;
          let xadsdkJ = String.fromCharCode(100,95,54,53,95,118,100,101,98,117,103,0);
          let pointT = 5;
         source2 = new Map([[`${countdownK}`, ((countdownK ? 1 : 2))]]);
         handlerF -= 2 >> (Math.min(2, Math.abs(parseInt(`${handlerF}`))));
         time_uzU = !time_uzU;
         xadsdkJ = `${pointT}`;
         pointT %= Math.max(5, xadsdkJ.length);
         break;
      }
         countdownK = source2.get(`${saveB}`) == null;
          let placementz = 1;
          let tickedH = String.fromCharCode(116,97,98,95,117,95,49,0);
          let flyer7 = 1;
         saveB /= Math.max(4, flyer7 - tickedH.length);
         placementz <<= Math.min(Math.abs(placementz), 2);
         tickedH += `${placementz / (Math.max(1, 10))}`;
      let bellP = countdownK ? !countdownK : countdownK;
      do {
         countdownK = saveB < 50;
         if (bellP) {
            break;
         }
      } while ((2 <= (saveB | 4) || 4 <= saveB) && bellP);
         saveB <<= Math.min(5, Math.abs(source2.size));
      final_i9 = `${parseInt(`${clockk}`)}`;
   while (4.33 <= (1.45 * clockk)) {
       let main_xR = 2.0;
         main_xR -= 1 / (Math.max(4, parseInt(`${main_xR}`)));
      for (let n = 0; n < 1; n++) {
         main_xR *= 2 * parseInt(`${main_xR}`);
      }
       let libhermesj = false;
       let analyticsV = false;
      clockk *= parseFloat(`${parseInt(`${clockk}`) % 3}`);
      break;
   }
        setUsernameErrMsg(err.errors.username);
      }

      if (!err.errors && err.message) {

   if (!w_centerq) {
      w_centerq = !w_centerq;
   }
       let userS: Array<any> = [16, 544, 278];
       let viewer1: Map<any, any> = new Map([[String.fromCharCode(118,95,51,51,95,105,112,114,101,100,0),943], [String.fromCharCode(97,110,110,117,108,97,114,95,103,95,53,57,0),981], [String.fromCharCode(112,95,49,51,95,105,110,118,115,98,111,120,0),288]]);
      for (let m = 0; m < 2; m++) {
         userS = [userS.length];
      }
         userS = [userS.length - viewer1.size];
          let inactiveN = false;
          let saveP: Array<any> = [760, 980];
         userS.push(userS.length);
         inactiveN = (70 > ((inactiveN ? 70 : saveP.length) << (Math.min(saveP.length, 4))));
      if ((userS.length - viewer1.size) < 3 || 2 < (viewer1.size - 3)) {
         viewer1 = new Map([[`${viewer1.size}`, 2]]);
      }
          let anythinkC: Map<any, any> = new Map([[String.fromCharCode(117,112,100,97,116,101,95,118,95,49,51,0),965], [String.fromCharCode(118,95,51,95,98,116,110,99,108,105,99,107,0),929]]);
          let libffmpegkit0: Map<any, any> = new Map([[String.fromCharCode(106,95,53,57,95,106,115,105,109,100,101,120,116,0),956], [String.fromCharCode(117,95,49,54,95,115,101,110,100,97,108,108,0),376], [String.fromCharCode(114,101,102,117,110,100,95,111,95,56,48,0),680]]);
         userS = [userS.length];
         anythinkC = new Map([[`${libffmpegkit0.size}`, anythinkC.size]]);
         libffmpegkit0.set(`${anythinkC.size}`, libffmpegkit0.size | anythinkC.size);
         viewer1 = new Map([[`${viewer1.size}`, viewer1.size * 3]]);
      utils5 += `${(utils5 == String.fromCharCode(81,0) ? utils5.length : (ballN ? 1 : 4))}`;
        setUsernameErrMsg(err.message);
      }


      return;
    }

    await dispatch(updateUsernameState(res));

      libloggerL = `${libfbi.length & libloggerL.length}`;
       let catalog8 = String.fromCharCode(121,95,53,95,109,111,109,101,110,116,97,114,121,0);
       let halfu = 4.0;
       let pangleG: Map<any, any> = new Map([[String.fromCharCode(112,95,49,53,0),697], [String.fromCharCode(102,117,108,108,121,95,113,95,49,0),465], [String.fromCharCode(112,117,98,105,99,95,49,95,50,49,0),481]]);
       let shrinkE = String.fromCharCode(119,95,55,95,115,105,103,105,108,108,0);
          let checkboxP: Array<any> = [548, 808];
          let downloader6 = 4.0;
          let mbnative2 = 4.0;
         pangleG = new Map([[`${downloader6}`, parseInt(`${downloader6}`) & parseInt(`${mbnative2}`)]]);
         checkboxP = [2 | checkboxP.length];
      let middle3 = 7896170 <= catalog8.length;
      do {
         catalog8 += `${pangleG.size}`;
         if (middle3) {
            break;
         }
      } while ((!shrinkE.endsWith(catalog8)) && middle3);
       let time_lo = String.fromCharCode(99,111,108,108,105,100,101,114,95,112,95,57,0);
      let resultd = pangleG.size <= 9741833;
      do {
         pangleG.set(`${time_lo}`, time_lo.length);
         if (resultd) {
            break;
         }
      } while ((halfu == 5.93) && resultd);
         pangleG = new Map([[`${pangleG.size}`, pangleG.size]]);
      if (1 == catalog8.length) {
         halfu *= catalog8.length;
      }
      for (let p = 0; p < 1; p++) {
          let leaguen = String.fromCharCode(102,116,118,108,105,110,107,95,99,95,53,51,0);
          let filledL: Map<any, any> = new Map([[String.fromCharCode(112,105,99,109,101,109,115,101,116,95,113,95,50,52,0),true ], [String.fromCharCode(115,112,107,114,95,105,95,54,48,0),true ], [String.fromCharCode(117,95,57,57,95,122,117,108,117,0),false ]]);
          let unselectedw = String.fromCharCode(113,95,49,55,95,115,101,118,101,110,0);
          let assistJ: Map<any, any> = new Map([[String.fromCharCode(100,95,51,49,95,99,111,108,111,114,101,100,0),250], [String.fromCharCode(98,95,53,55,95,104,105,103,104,101,114,0),908], [String.fromCharCode(98,95,50,57,95,114,97,108,102,0),851]]);
         shrinkE += `${unselectedw.length}`;
         leaguen = `${assistJ.size + 3}`;
         filledL.set(`${assistJ.size}`, filledL.size / 2);
         unselectedw += `${leaguen.length - filledL.size}`;
      }
         shrinkE = "3";
      greenI.push(1);
    await dispatch(changeScreenAction('登录成功'));

   for (let p = 0; p < 3; p++) {
       let dplus9: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,115,99,97,108,101,95,112,95,57,53,0),String.fromCharCode(99,95,54,57,95,99,111,108,108,105,100,101,114,0)], [String.fromCharCode(106,95,55,50,95,118,100,112,97,117,99,111,110,116,101,120,116,0),String.fromCharCode(100,95,50,56,95,97,99,107,110,111,119,108,101,100,103,109,101,110,116,0)]]);
       let anytimea: Array<any> = [String.fromCharCode(118,95,52,51,95,105,110,105,116,105,97,108,105,122,101,114,115,0), String.fromCharCode(108,108,100,98,105,110,105,116,95,49,95,55,56,0)];
       let quest2 = String.fromCharCode(112,95,50,51,95,103,101,110,101,115,105,115,0);
       let filed9 = true;
       let trashh = 2.0;
         filed9 = quest2 == String.fromCharCode(49,0) && dplus9.size > 47;
       let teamA = 2;
       let playlisty = 1;
         teamA /= Math.max(3, teamA % (Math.max(quest2.length, 3)));
         filed9 = 99 <= teamA;
      for (let w = 0; w < 2; w++) {
          let humidityJ = 3.0;
          let combineS = String.fromCharCode(105,95,49,53,95,100,117,114,97,116,105,111,110,0);
          let configF = 3.0;
          let langkeyc = String.fromCharCode(121,95,54,48,95,102,114,97,109,101,115,101,116,116,101,114,0);
          let step6 = String.fromCharCode(114,101,108,111,97,100,105,110,103,95,110,95,57,56,0);
         teamA ^= (combineS == String.fromCharCode(66,0) ? parseInt(`${configF}`) : combineS.length);
         humidityJ /= Math.max(3, parseFloat(`${parseInt(`${humidityJ}`)}`));
         configF /= Math.max(step6.length, 2);
         langkeyc = `${(step6 == String.fromCharCode(54,0) ? step6.length : langkeyc.length)}`;
      }
      for (let i = 0; i < 2; i++) {
         dplus9.set(quest2, (quest2 == String.fromCharCode(55,0) ? dplus9.size : quest2.length));
      }
      let trashD = 5006133.0 <= trashh;
      do {
          let acceptedH = 3;
          let upgradeO = String.fromCharCode(120,95,55,52,95,116,121,112,101,110,97,109,101,0);
          let styleJ = String.fromCharCode(98,95,50,55,95,115,113,108,105,116,101,115,101,115,115,105,111,110,0);
          let target_: Map<any, any> = new Map([[String.fromCharCode(108,95,49,48,48,95,114,102,116,102,115,117,98,0),String.fromCharCode(111,118,101,114,115,99,114,111,108,108,105,110,103,95,100,95,50,51,0)], [String.fromCharCode(110,117,109,101,114,105,99,97,108,95,98,95,56,49,0),String.fromCharCode(99,105,114,99,108,101,115,95,116,95,54,56,0)]]);
         trashh *= playlisty - target_.size;
         acceptedH <<= Math.min(Math.abs(upgradeO.length & acceptedH), 5);
         upgradeO += `${styleJ.length >> (Math.min(Math.abs(1), 4))}`;
         styleJ = "3";
         target_.set(`${acceptedH}`, acceptedH ^ upgradeO.length);
         if (trashD) {
            break;
         }
      } while (trashD && (2 < (dplus9.size - 3) || (3.54 - trashh) < 3.84));
      let vietnamq = 8109465 <= quest2.length;
      do {
          let encryptn = 1.0;
          let bdxadsdkV = true;
          let soundM: Map<any, any> = new Map([[String.fromCharCode(104,95,49,53,95,97,98,98,114,0),true ], [String.fromCharCode(115,99,97,108,101,100,99,111,110,118,111,108,118,101,95,120,95,55,51,0),false ]]);
         quest2 = `${2 - dplus9.size}`;
         encryptn *= ((bdxadsdkV ? 5 : 4) + parseInt(`${encryptn}`));
         bdxadsdkV = encryptn > 66.70;
         soundM = new Map([[`${soundM.size}`, soundM.size % 1]]);
         if (vietnamq) {
            break;
         }
      } while (((1 | quest2.length) <= 1) && vietnamq);
         quest2 = "3";
         teamA ^= ((filed9 ? 4 : 3) & teamA);
      for (let p = 0; p < 3; p++) {
         trashh *= 1;
      }
      let streamingZ = 6938451 <= playlisty;
      do {
          let analyticM = true;
         playlisty ^= 2 * dplus9.size;
         analyticM = !analyticM;
         if (streamingZ) {
            break;
         }
      } while (streamingZ && ((4 | playlisty) >= 5 && (playlisty | teamA) >= 4));
         playlisty &= dplus9.size;
      for (let l = 0; l < 3; l++) {
         playlisty -= 1 * dplus9.size;
      }
      let shareg = filed9 ? !filed9 : filed9;
      do {
         filed9 = anytimea.length > dplus9.size;
         if (shareg) {
            break;
         }
      } while ((!quest2.endsWith(`${filed9}`)) && shareg);
      libloggerL = "2";
   }
       let catalogh = String.fromCharCode(111,99,97,108,95,117,95,49,56,0);
      while (catalogh.startsWith(`${catalogh.length}`)) {
         catalogh = `${catalogh.length | 2}`;
         break;
      }
      let emptye = catalogh == String.fromCharCode(107,116,110,122,0);
      do {
         catalogh = `${(catalogh == String.fromCharCode(68,0) ? catalogh.length : catalogh.length)}`;
         if (emptye) {
            break;
         }
      } while (emptye && (catalogh.length < 1));
         catalogh += `${catalogh.length}`;
      final_i9 = `${((w_centerq ? 5 : 4) << (Math.min(final_i9.length, 1)))}`;
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
                        source={require("@static/images/invite/hongkongLibswresampleSigmob.png")}
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
