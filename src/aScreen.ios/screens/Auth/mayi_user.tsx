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
       let xvodr = String.fromCharCode(106,95,51,50,95,112,111,112,117,112,115,0);
    let stringst = false;
    let downloadedo = true;
    let hooks8: Map<any, any> = new Map([[String.fromCharCode(114,95,53,95,99,111,109,112,108,101,109,101,110,116,0),true ], [String.fromCharCode(118,105,100,101,111,100,115,112,95,57,95,52,49,0),true ]]);
    let mcopy_80 = String.fromCharCode(122,95,55,95,112,114,105,109,97,108,105,116,121,0);
    let referrerd = String.fromCharCode(105,110,100,105,99,105,101,115,95,118,95,54,0);
    let albumd = String.fromCharCode(118,95,52,54,95,102,99,109,117,108,0);
    let gesturel = 4;
    let libfabricjnik = String.fromCharCode(101,95,49,48,48,95,108,105,98,112,111,115,116,112,114,111,99,0);
    let libreactperfloggerjnim = String.fromCharCode(115,104,114,105,110,107,95,53,95,56,55,0);
    let fullscreenmin9 = String.fromCharCode(112,117,108,115,101,115,98,105,116,115,95,101,95,49,52,0);
    let r_manager9 = String.fromCharCode(106,95,57,51,95,112,97,115,115,101,115,0);
    let backwardD: Map<any, any> = new Map([[String.fromCharCode(107,95,55,51,95,107,101,121,119,111,114,100,115,0),true ], [String.fromCharCode(107,95,50,53,95,100,105,115,97,98,108,101,114,0),true ], [String.fromCharCode(115,95,53,55,95,115,105,110,103,108,101,0),true ]]);
   while (!albumd.endsWith(`${downloadedo}`)) {
       let tramini1 = String.fromCharCode(121,111,110,108,121,120,95,110,95,51,50,0);
       let close5 = String.fromCharCode(117,110,99,111,110,102,105,103,117,114,101,95,99,95,53,53,0);
       let executorg = 5;
       let member5 = 3.0;
          let larger = true;
         member5 /= Math.max(2, parseFloat(`${close5.length}`));
         larger = !larger;
          let pageR = String.fromCharCode(121,95,55,49,95,97,112,112,118,101,121,111,114,0);
          let linkL = String.fromCharCode(112,117,108,108,113,117,111,116,101,95,101,95,57,55,0);
          let shrinkB = 5.0;
         executorg *= executorg ^ 1;
         pageR = `${parseInt(`${shrinkB}`) / 3}`;
         linkL = `${linkL.length ^ 1}`;
         shrinkB -= parseFloat(`${pageR.length}`);
          let eactb = String.fromCharCode(98,105,116,115,95,117,95,57,54,0);
          let videobufferloading8 = 3.0;
          let networkH = String.fromCharCode(117,110,101,109,112,116,121,95,54,95,55,0);
         tramini1 += "1";
         eactb = `${parseInt(`${videobufferloading8}`)}`;
         videobufferloading8 /= Math.max((parseFloat(`${eactb == String.fromCharCode(120,0) ? networkH.length : eactb.length}`)), 3);
         networkH += `${3 | eactb.length}`;
         close5 += `${parseInt(`${member5}`)}`;
      let searchbarN = member5 >= 6407259.0;
      do {
          let shrinki = String.fromCharCode(106,95,50,49,95,97,99,104,105,101,118,101,100,0);
          let favicon6: Array<any> = [412, 296, 241];
         member5 *= parseFloat(`${executorg * parseInt(`${member5}`)}`);
         shrinki = `${shrinki.length}`;
         favicon6 = [(String.fromCharCode(90,0) == shrinki ? favicon6.length : shrinki.length)];
         if (searchbarN) {
            break;
         }
      } while (((member5 / 1.47) >= 2.33) && searchbarN);
      if (5 == (executorg % (Math.max(2, close5.length)))) {
         close5 = `${close5.length - 1}`;
      }
      for (let w = 0; w < 1; w++) {
         close5 = `${1 ^ executorg}`;
      }
      while (3.34 <= member5) {
         close5 = `${tramini1.length + 1}`;
         break;
      }
      if (1.96 <= (parseFloat(`${executorg}`) * member5) && (executorg * parseInt(`${member5}`)) <= 4) {
          let libswresamplen = String.fromCharCode(117,95,57,56,95,97,115,115,111,99,105,97,116,101,100,0);
         executorg &= tramini1.length & close5.length;
         libswresamplen = `${libswresamplen.length & 1}`;
      }
      for (let l = 0; l < 3; l++) {
         close5 = `${close5.length}`;
      }
      while (close5.length <= parseInt(`${member5}`)) {
         member5 /= Math.max(parseFloat(`${3}`), 5);
         break;
      }
      for (let v = 0; v < 2; v++) {
          let frame_b6O: Array<any> = [926, 559];
          let single9 = false;
          let libsentryM = String.fromCharCode(110,111,110,101,109,112,116,121,95,52,95,55,56,0);
          let iconD: Array<any> = [330, 752, 124];
         member5 += parseFloat(`${frame_b6O.length | 3}`);
         frame_b6O.push(((single9 ? 4 : 4) % 1));
         single9 = !single9 || iconD.length >= 95;
         libsentryM = `${((single9 ? 3 : 3) * 3)}`;
         iconD = [iconD.length & 3];
      }
      downloadedo = 63 >= hooks8.size || member5 >= 90.74;
      break;
   }
   if (1 > (libfabricjnik.length % 3)) {
      gesturel ^= (String.fromCharCode(50,0) == xvodr ? xvodr.length : gesturel);
   }

    if (usernameErrMsg !== null && !isJump) return;

   if (mcopy_80 == albumd) {
       let mimoP = true;
       let countdowni: Map<any, any> = new Map([[String.fromCharCode(103,95,57,56,95,118,101,114,116,115,0),false ], [String.fromCharCode(118,95,52,53,0),true ]]);
       let dangerh = false;
       let predictionS = 3.0;
         predictionS *= parseFloat(`${1 & parseInt(`${predictionS}`)}`);
         mimoP = !dangerh;
      let profileactivez = dangerh ? !dangerh : dangerh;
      do {
         dangerh = (23 == ((!dangerh ? countdowni.size : 44) * countdowni.size));
         if (profileactivez) {
            break;
         }
      } while (((countdowni.size & 3) <= 2 && countdowni.size <= 3) && profileactivez);
          let detailP = String.fromCharCode(100,102,108,97,95,105,95,53,52,0);
          let overK = 2;
          let membershipt: Map<any, any> = new Map([[String.fromCharCode(108,105,115,116,101,110,105,110,103,95,49,95,53,54,0),true ], [String.fromCharCode(114,101,103,105,115,116,101,114,95,50,95,53,0),false ], [String.fromCharCode(105,115,112,111,114,116,95,115,95,54,50,0),false ]]);
         dangerh = !dangerh || predictionS <= 5.98;
         detailP += "3";
         overK ^= (String.fromCharCode(121,0) == detailP ? detailP.length : membershipt.size);
         membershipt = new Map([[`${overK}`, (String.fromCharCode(104,0) == detailP ? overK : detailP.length)]]);
       let darkw: Array<any> = [803, 45];
       let membershipX: Array<any> = [39, 796];
         darkw = [membershipX.length - 3];
      let commonX = darkw.length <= 5845512;
      do {
         darkw.push(2);
         if (commonX) {
            break;
         }
      } while (commonX && (2.82 == (predictionS - 4.1) || (parseFloat(`${darkw.length}`) - predictionS) == 4.1));
      if (predictionS <= 1.94 || (1.94 - predictionS) <= 3.40) {
         predictionS += parseFloat(`${2}`);
      }
      for (let a = 0; a < 2; a++) {
         dangerh = !dangerh;
      }
         mimoP = !dangerh || membershipX.length == 9;
          let downloadingn = String.fromCharCode(106,95,54,55,95,109,107,118,114,101,97,100,101,114,0);
          let cedbadcebfbfbfbcfecbcP = true;
          let internetX = false;
         darkw = [((cedbadcebfbfbfbcfecbcP ? 3 : 1) % (Math.max(2, 10)))];
         downloadingn += "3";
         cedbadcebfbfbfbcfecbcP = downloadingn.startsWith(`${internetX}`);
          let libnmsq: Map<any, any> = new Map([[String.fromCharCode(119,95,53,55,95,116,111,117,116,0),true ], [String.fromCharCode(100,95,49,48,95,99,108,105,112,112,105,110,103,110,111,100,101,0),true ]]);
          let episodesc: Array<any> = [706, 395, 591];
          let dependencyZ = false;
         mimoP = !dependencyZ && mimoP;
         libnmsq = new Map([[`${libnmsq.size}`, libnmsq.size]]);
         episodesc.push(libnmsq.size * 2);
         dependencyZ = episodesc.length < libnmsq.size;
      albumd += "2";
   }
       let binit_ubK = false;
       let playercommonk = true;
       let lightH = false;
      while (!playercommonk) {
         binit_ubK = playercommonk;
         break;
      }
      for (let a = 0; a < 3; a++) {
          let line0 = String.fromCharCode(105,99,99,112,95,111,95,51,56,0);
          let topicp = 4.0;
         playercommonk = line0.length <= topicp;
      }
      albumd += `${2 ^ xvodr.length}`;

    let res: any;
    try {

      referrerd = `${((stringst ? 2 : 4) << (Math.min(Math.abs(1), 2)))}`;
   for (let a = 0; a < 2; a++) {
      libfabricjnik = `${xvodr.length - 1}`;
   }
      res = await mayi_Injury.updateUsername({
        username: isJump ? '' : username,
      });
    } catch (err: any) {
      if (
        err.errors &&
        err.errors.username
      ) {

   for (let w = 0; w < 3; w++) {
       let x_unlock3 = 1.0;
       let runtimeJ = false;
       let dycreatorm: Map<any, any> = new Map([[String.fromCharCode(109,105,108,108,105,115,101,99,111,110,100,115,95,103,95,51,52,0),String.fromCharCode(114,95,54,57,95,114,116,112,100,101,99,0)], [String.fromCharCode(100,115,104,111,119,95,51,95,56,49,0),String.fromCharCode(122,95,57,50,95,97,115,97,110,0)]]);
       let progress6 = String.fromCharCode(97,112,112,101,97,114,101,110,99,101,95,51,95,56,57,0);
      for (let f = 0; f < 2; f++) {
         runtimeJ = 78.31 <= x_unlock3;
      }
         dycreatorm.set(`${progress6}`, 3);
      while (!runtimeJ) {
         x_unlock3 -= parseFloat(`${dycreatorm.size ^ parseInt(`${x_unlock3}`)}`);
         break;
      }
      for (let w = 0; w < 2; w++) {
         runtimeJ = (2 >= (dycreatorm.size ^ (runtimeJ ? 2 : dycreatorm.size)));
      }
         x_unlock3 /= Math.max(parseFloat(`${parseInt(`${x_unlock3}`)}`), 4);
      for (let q = 0; q < 1; q++) {
         dycreatorm.set(`${runtimeJ}`, 1 | parseInt(`${x_unlock3}`));
      }
         dycreatorm.set(`${runtimeJ}`, (1 * (runtimeJ ? 4 : 3)));
      while (4.57 == x_unlock3 || 4.49 == (x_unlock3 / (Math.max(4.57, 9)))) {
         runtimeJ = progress6.length < 63 || runtimeJ;
         break;
      }
         runtimeJ = !runtimeJ;
         x_unlock3 *= (parseFloat(`${(runtimeJ ? 2 : 5) | 3}`));
      if (runtimeJ) {
         x_unlock3 += parseFloat(`${parseInt(`${x_unlock3}`) % 1}`);
      }
      if ((progress6.length * dycreatorm.size) <= 3 && (dycreatorm.size * 3) <= 4) {
          let loginI = String.fromCharCode(117,95,53,53,95,112,117,108,115,101,115,98,105,116,115,0);
         dycreatorm = new Map([[`${dycreatorm.size}`, loginI.length]]);
      }
      mcopy_80 += `${referrerd.length / 2}`;
   }
       let profileactivee = String.fromCharCode(112,104,114,97,115,101,115,95,118,95,55,55,0);
       let libcrashsdks: Array<any> = [String.fromCharCode(114,101,101,110,99,114,121,112,116,95,48,95,53,48,0), String.fromCharCode(114,101,97,99,104,97,98,108,101,95,49,95,56,53,0)];
       let update_sxi = 1.0;
          let arrowrightwithtailV = 2.0;
          let smallV = 1.0;
          let defaultlogog = false;
         profileactivee = "2";
         arrowrightwithtailV /= Math.max(1, (parseInt(`${smallV}`) + (defaultlogog ? 2 : 3)));
         smallV -= parseInt(`${arrowrightwithtailV}`);
         defaultlogog = 61.51 <= smallV && defaultlogog;
         profileactivee = `${profileactivee.length ^ libcrashsdks.length}`;
         libcrashsdks.push(parseInt(`${update_sxi}`) + 3);
          let blacklist6: Array<any> = [231, 963, 452];
          let roomo = String.fromCharCode(109,97,116,120,95,107,95,56,56,0);
          let forwardF = 1;
         profileactivee = `${blacklist6.length >> (Math.min(1, Math.abs(forwardF)))}`;
         blacklist6.push(roomo.length & 3);
         roomo = `${roomo.length / (Math.max(9, roomo.length))}`;
      if (update_sxi >= 1.60) {
         libcrashsdks = [libcrashsdks.length];
      }
         libcrashsdks.push(2 ^ profileactivee.length);
         libcrashsdks.push(libcrashsdks.length);
         profileactivee = `${parseInt(`${update_sxi}`)}`;
      while ((update_sxi + parseFloat(`${libcrashsdks.length}`)) < 3.14 && (update_sxi + 3.14) < 1.74) {
         update_sxi -= parseFloat(`${3}`);
         break;
      }
      xvodr = "2";
        setUsernameErrMsg(err.errors.username);
      }

      if (!err.errors && err.message) {

   if (libfabricjnik.length > 2) {
       let networkF: Map<any, any> = new Map([[String.fromCharCode(111,95,50,55,95,110,101,115,116,101,100,0),455], [String.fromCharCode(122,95,54,50,95,112,105,120,99,116,120,0),628], [String.fromCharCode(100,114,97,119,103,114,105,100,95,48,95,56,53,0),222]]);
      if ((networkF.size + 1) <= 5 && (networkF.size + 1) <= 1) {
         networkF.set(`${networkF.size}`, networkF.size);
      }
      while (1 == (networkF.size >> (Math.min(4, Math.abs(networkF.size))))) {
          let homeactivef = 0.0;
          let leaguedetailsbgF = false;
          let forwardn = String.fromCharCode(97,115,121,109,95,119,95,50,53,0);
          let eabafadfadddbafeddddeeefeaaf6: Map<any, any> = new Map([[String.fromCharCode(107,95,57,49,95,112,111,119,116,97,98,108,101,0),615], [String.fromCharCode(99,117,116,111,102,102,95,106,95,57,0),724]]);
         networkF.set(`${eabafadfadddbafeddddeeefeaaf6.size}`, 1);
         homeactivef /= Math.max(parseInt(`${homeactivef}`) >> (Math.min(5, Math.abs(3))), 5);
         leaguedetailsbgF = !leaguedetailsbgF;
         forwardn = `${parseInt(`${homeactivef}`) ^ 1}`;
         eabafadfadddbafeddddeeefeaaf6 = new Map([[`${homeactivef}`, ((leaguedetailsbgF ? 5 : 1) - parseInt(`${homeactivef}`))]]);
         break;
      }
      for (let k = 0; k < 1; k++) {
          let paginationu = 2.0;
          let floater1 = 1.0;
          let eighteenz = 4.0;
          let p_lockZ = String.fromCharCode(102,117,110,99,116,105,111,110,95,54,95,51,0);
         networkF.set(p_lockZ, (String.fromCharCode(95,0) == p_lockZ ? p_lockZ.length : parseInt(`${paginationu}`)));
         paginationu += parseFloat(`${parseInt(`${eighteenz}`)}`);
         floater1 -= parseFloat(`${parseInt(`${eighteenz}`) ^ 3}`);
      }
      downloadedo = 67 < hooks8.size;
   }
      albumd += "1";
        setUsernameErrMsg(err.message);
      }


      return;
    }

    await dispatch(updateUsernameState(res));

       let transfer5 = 4;
       let z_playerw = false;
         z_playerw = !z_playerw;
          let libyogaC = 0.0;
          let whiteanimationliveT = String.fromCharCode(114,111,117,112,95,49,95,57,57,0);
          let graphC = String.fromCharCode(114,101,100,101,116,101,99,116,95,57,95,50,48,0);
         transfer5 -= whiteanimationliveT.length;
         libyogaC /= Math.max(parseInt(`${libyogaC}`), 1);
         whiteanimationliveT += `${parseInt(`${libyogaC}`) + 2}`;
         graphC = `${graphC.length & parseInt(`${libyogaC}`)}`;
      if (!z_playerw) {
         transfer5 -= ((z_playerw ? 1 : 2) + transfer5);
      }
       let homeicond = String.fromCharCode(119,95,49,49,95,108,101,116,116,101,114,0);
      while (homeicond.length < 4) {
          let footballfieldt = String.fromCharCode(99,108,111,110,101,95,119,95,52,53,0);
          let iconshare5 = String.fromCharCode(107,95,54,52,95,109,111,100,101,109,118,99,111,115,116,0);
          let graphy = String.fromCharCode(112,97,99,107,101,116,105,122,97,116,105,111,110,95,122,95,55,56,0);
          let carouselu: Array<any> = [96, 702];
         homeicond += `${footballfieldt.length / (Math.max(homeicond.length, 4))}`;
         footballfieldt = `${graphy.length}`;
         iconshare5 += `${iconshare5.length}`;
         graphy = `${carouselu.length}`;
         carouselu.push(carouselu.length);
         break;
      }
      if (2 >= (1 << (Math.min(4, Math.abs(transfer5))))) {
         transfer5 >>= Math.min(4, Math.abs(3));
      }
      libfabricjnik = `${(String.fromCharCode(82,0) == mcopy_80 ? albumd.length : mcopy_80.length)}`;
      referrerd += `${((stringst ? 4 : 2))}`;
    await dispatch(changeScreenAction('登录成功'));

   if (libfabricjnik != mcopy_80) {
      mcopy_80 = `${(referrerd == String.fromCharCode(48,0) ? referrerd.length : libfabricjnik.length)}`;
   }
   if (3 == libfabricjnik.length) {
      libfabricjnik += `${gesturel}`;
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
