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
import ScreenContainer from '../../components/container/tt_backward';
import { useDispatch, useSelector } from 'react-redux';
import TitleWithBackButtonHeader from '../../components/header/tt_typing_tail_header';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ResendCountDown } from './tt_eact';
import { useAppSelector } from '@hooks/tt_spec_download';
import { ttOrange } from '@redux/tt_updates_bottom';
import { InputItem, Button } from '@ant-design/react-native';
import { ttConfirmationYing } from '@type/tt_temperature';
import { changeScreenAction } from '@redux/actions/tt_copy_heji';
import { updateUsernameState } from '@redux/actions/tt_topon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackButton from '../../components/button/tt_moon_favicon_button';
import { ttTramini } from '@api';
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
       let google2 = String.fromCharCode(109,95,49,95,99,111,108,111,110,0);
    let logos = 1.0;
    let comment2 = String.fromCharCode(99,104,111,105,99,101,115,95,48,95,53,52,0);
    let casty = String.fromCharCode(111,95,52,95,100,105,115,112,108,97,121,105,110,103,0);
    let update_4t7: Array<any> = [String.fromCharCode(116,95,49,53,95,102,114,109,97,0), String.fromCharCode(105,95,52,48,95,115,110,97,112,115,104,111,116,0)];
    let tumbnailk = 4.0;
    let aboutO = 3;
    let mbridgeK = String.fromCharCode(114,95,54,57,95,99,105,114,99,108,101,0);
    let combineZ = 5;
    let photoN = 1.0;
    let previewW = String.fromCharCode(113,95,53,48,95,117,115,114,115,99,116,112,0);
    let modelsn = String.fromCharCode(114,101,99,111,118,101,114,97,98,108,101,95,118,95,57,53,0);
    let sideZ = 0.0;
   while ((logos / 4.9) > 5.29) {
      aboutO >>= Math.min(3, Math.abs(parseInt(`${photoN}`) ^ 2));
      break;
   }
   for (let d = 0; d < 3; d++) {
       let viewerE = String.fromCharCode(98,105,103,110,117,109,95,117,95,50,56,0);
       let moref = 2.0;
       let homeh = true;
       let notification7 = String.fromCharCode(116,98,109,108,95,106,95,57,55,0);
      if (moref >= 3.76) {
          let shrinkx: Map<any, any> = new Map([[String.fromCharCode(117,114,108,99,111,110,116,101,120,116,95,49,95,49,49,0),117], [String.fromCharCode(104,95,50,95,115,107,105,112,115,0),760], [String.fromCharCode(121,95,50,95,115,99,97,109,0),917]]);
         notification7 += `${viewerE.length}`;
         shrinkx = new Map([[`${shrinkx.size}`, shrinkx.size >> (Math.min(1, Math.abs(shrinkx.size)))]]);
      }
       let nextf = String.fromCharCode(119,95,49,57,95,111,111,117,114,97,0);
       let connectiond = String.fromCharCode(99,111,108,117,109,115,95,115,95,52,54,0);
          let upgrade5 = false;
          let usernameX = 2;
          let flippero = String.fromCharCode(107,108,97,115,115,95,106,95,56,49,0);
         notification7 = "3";
         upgrade5 = flippero.length >= 1;
         usernameX |= 3;
         flippero = `${flippero.length}`;
          let modelsb = String.fromCharCode(98,115,101,114,118,101,114,95,106,95,49,56,0);
          let routerL = 1;
          let membershipf: Array<any> = [792, 591];
         notification7 += `${2 + modelsb.length}`;
         modelsb += `${routerL >> (Math.min(membershipf.length, 5))}`;
         routerL += 2 ^ membershipf.length;
      if (!notification7.startsWith(nextf)) {
          let with_kz = String.fromCharCode(107,95,55,53,95,105,102,97,99,101,0);
          let componentJ = 5.0;
          let reactx = 4.0;
          let tailF = String.fromCharCode(99,117,114,114,101,110,100,95,119,95,49,53,0);
          let modelsF = String.fromCharCode(101,118,97,108,117,97,116,101,100,95,98,95,56,48,0);
         notification7 += `${((homeh ? 2 : 4) ^ 3)}`;
         with_kz = `${2 << (Math.min(2, tailF.length))}`;
         componentJ += modelsF.length;
         reactx += 1 / (Math.max(1, parseInt(`${componentJ}`)));
         tailF += "1";
         modelsF = `${modelsF.length}`;
      }
          let sentryF: Map<any, any> = new Map([[String.fromCharCode(108,105,98,101,118,101,110,116,95,53,95,50,52,0),450], [String.fromCharCode(122,95,53,49,95,100,105,102,102,115,0),479], [String.fromCharCode(112,114,101,104,101,97,116,95,109,95,50,54,0),745]]);
          let huaweiU = true;
         nextf = `${2 + notification7.length}`;
         sentryF.set(`${huaweiU}`, sentryF.size);
         notification7 += `${1 << (Math.min(4, Math.abs(parseInt(`${moref}`))))}`;
         moref += (String.fromCharCode(72,0) == connectiond ? connectiond.length : viewerE.length);
      if (homeh) {
          let langkey9 = String.fromCharCode(106,95,54,52,0);
          let canvasq = 3;
          let gray3 = true;
          let bannero = 4;
          let inactivex: Map<any, any> = new Map([[String.fromCharCode(115,116,114,108,99,112,121,95,111,95,49,53,0),410], [String.fromCharCode(103,108,111,98,97,108,95,117,95,52,48,0),929]]);
         notification7 = `${(String.fromCharCode(85,0) == connectiond ? connectiond.length : inactivex.size)}`;
         langkey9 += `${1 ^ langkey9.length}`;
         canvasq ^= langkey9.length;
         gray3 = (bannero - canvasq) >= 79;
         bannero += canvasq;
         inactivex = new Map([[`${bannero}`, 2]]);
      }
          let gradlewG = String.fromCharCode(98,95,49,51,95,112,104,111,116,111,115,0);
          let downloadingi = String.fromCharCode(119,95,55,57,95,97,99,101,110,99,0);
         homeh = !homeh;
         gradlewG = `${downloadingi.length % (Math.max(1, 1))}`;
         downloadingi = `${gradlewG.length >> (Math.min(Math.abs(1), 1))}`;
      if (notification7.length > 4) {
         notification7 += `${(2 * (homeh ? 1 : 5))}`;
      }
      if (4 > (parseInt(`${moref}`) * viewerE.length)) {
          let ticked2 = String.fromCharCode(101,110,99,111,100,105,110,103,95,101,95,51,53,0);
          let episodes0 = 5.0;
          let package_26M = 2;
         viewerE = "1";
         ticked2 = `${ticked2.length}`;
         episodes0 -= package_26M + 3;
         package_26M ^= parseInt(`${episodes0}`) * package_26M;
      }
      aboutO |= google2.length | notification7.length;
   }

    if (usernameErrMsg !== null && !isJump) return;

       let humidityq: Map<any, any> = new Map([[String.fromCharCode(112,95,52,50,95,101,109,112,105,114,105,99,97,108,108,121,0),940], [String.fromCharCode(112,95,49,48,48,95,101,102,102,101,99,116,105,118,101,0),249]]);
      for (let g = 0; g < 3; g++) {
          let anytime2 = 3.0;
          let emptyc = 4.0;
          let related3 = 0.0;
          let minivodF = 1.0;
          let megaphonef = String.fromCharCode(100,113,117,97,110,116,95,122,95,54,0);
         humidityq = new Map([[`${anytime2}`, parseInt(`${related3}`)]]);
         anytime2 += parseFloat(`${1}`);
         emptyc *= parseFloat(`${parseInt(`${minivodF}`) + 1}`);
         minivodF /= Math.max(2, parseInt(`${emptyc}`) & 2);
         megaphonef += `${megaphonef.length - parseInt(`${minivodF}`)}`;
      }
          let sliderD = String.fromCharCode(105,95,49,53,95,115,117,98,112,97,114,116,0);
          let zoomT = String.fromCharCode(109,100,116,97,95,121,95,53,49,0);
          let black8: Array<any> = [35, 193];
         humidityq.set(zoomT, (String.fromCharCode(65,0) == zoomT ? zoomT.length : black8.length));
         sliderD = `${sliderD.length ^ sliderD.length}`;
      while (!Array.from(humidityq.keys()).includes(`${humidityq.size}`)) {
          let inactiveU: Map<any, any> = new Map([[String.fromCharCode(112,95,54,53,95,121,111,117,0),336], [String.fromCharCode(115,113,108,105,116,101,115,101,115,115,105,111,110,95,52,95,54,0),518]]);
         humidityq.set(`${inactiveU.size}`, 1 << (Math.min(2, Math.abs(inactiveU.size))));
         break;
      }
      combineZ %= Math.max(4, (comment2 == String.fromCharCode(53,0) ? comment2.length : modelsn.length));
      photoN /= Math.max(2, parseFloat(`${casty.length}`));

    let res: any;
    try {

   let analyticsC = 5209319 <= update_4t7.length;
   do {
      update_4t7 = [modelsn.length + 1];
      if (analyticsC) {
         break;
      }
   } while (analyticsC && (4 == (2 >> (Math.min(3, update_4t7.length)))));
   let episodex = combineZ >= 8366851;
   do {
      combineZ <<= Math.min(Math.abs((casty == String.fromCharCode(78,0) ? aboutO : casty.length)), 3);
      if (episodex) {
         break;
      }
   } while ((1 < (1 ^ update_4t7.length) && 1 < (update_4t7.length ^ 1)) && episodex);
      res = await ttTramini.updateUsername({
        username: isJump ? '' : username,
      });
    } catch (err: any) {
      if (
        err.errors &&
        err.errors.username
      ) {

   for (let p = 0; p < 2; p++) {
       let long_fvt = 2.0;
       let typingp = String.fromCharCode(121,95,53,53,95,97,108,105,103,110,101,114,0);
       let storeL = 3.0;
       let assisty = String.fromCharCode(102,95,50,51,95,115,116,114,110,100,117,112,0);
       let favoriteQ = String.fromCharCode(118,95,56,48,95,105,110,116,101,103,114,97,116,105,111,110,0);
       let fast9 = String.fromCharCode(99,95,51,50,95,102,101,116,99,104,101,115,0);
       let viewsb = String.fromCharCode(122,95,55,51,95,105,100,108,105,115,116,0);
          let activity9 = true;
          let roboto4 = true;
         storeL *= 2;
         activity9 = !roboto4;
         roboto4 = (!activity9 ? !roboto4 : !activity9);
       let assistk = String.fromCharCode(100,95,50,51,95,98,111,120,101,115,0);
       let recommendationd = String.fromCharCode(118,95,56,48,95,121,117,118,112,99,0);
      if (assistk.length > 3) {
         long_fvt -= parseFloat(`${parseInt(`${long_fvt}`) ^ fast9.length}`);
      }
      let holder_ = 8546923 >= viewsb.length;
      do {
         viewsb += `${recommendationd.length}`;
         if (holder_) {
            break;
         }
      } while (holder_ && (assisty.length >= 2));
         long_fvt *= parseFloat(`${2 * favoriteQ.length}`);
         storeL -= 2;
      if (!viewsb.startsWith(assisty)) {
          let filez = String.fromCharCode(116,105,108,101,115,95,119,95,54,51,0);
          let movies8: Map<any, any> = new Map([[String.fromCharCode(118,97,114,121,95,117,95,53,0),16], [String.fromCharCode(97,95,49,54,95,100,115,109,111,116,105,111,110,0),312]]);
         assisty = `${fast9.length}`;
         filez += `${filez.length * 2}`;
         movies8 = new Map([[`${movies8.size}`, 1 | filez.length]]);
      }
         viewsb += `${viewsb.length}`;
         typingp += `${(typingp == String.fromCharCode(117,0) ? parseInt(`${storeL}`) : typingp.length)}`;
      if (2 < viewsb.length) {
         viewsb += `${parseInt(`${storeL}`)}`;
      }
      let fastforwardL = recommendationd.length >= 6811215;
      do {
          let darkR = 1.0;
          let about_ = String.fromCharCode(114,95,55,55,95,114,111,108,108,0);
          let detailD = false;
          let gpaye: Array<any> = [String.fromCharCode(98,108,111,119,102,105,115,104,95,53,95,53,52,0), String.fromCharCode(121,95,50,51,95,108,97,98,101,108,110,115,0), String.fromCharCode(114,95,55,95,115,111,105,115,99,111,110,110,101,99,116,105,110,103,0)];
          let sheet6: Array<any> = [881, 764, 106];
         recommendationd = `${(String.fromCharCode(56,0) == recommendationd ? gpaye.length : recommendationd.length)}`;
         darkR /= Math.max(parseFloat(`${sheet6.length ^ about_.length}`), 4);
         about_ = `${sheet6.length}`;
         detailD = (((!detailD ? sheet6.length : 36) % (Math.max(sheet6.length, 9))) == 36);
         gpaye = [3];
         if (fastforwardL) {
            break;
         }
      } while (fastforwardL && (fast9.length > 5 && recommendationd != String.fromCharCode(70,0)));
         assisty += `${3 | parseInt(`${storeL}`)}`;
          let vietnamJ = false;
         assistk += `${recommendationd.length}`;
         vietnamJ = !vietnamJ;
      while (3 < (parseInt(`${long_fvt}`) / (Math.max(4, 4))) || (parseInt(`${long_fvt}`) / (Math.max(assistk.length, 9))) < 4) {
         assistk += `${favoriteQ.length & 3}`;
         break;
      }
      comment2 = `${favoriteQ.length + parseInt(`${logos}`)}`;
   }
      comment2 += `${(String.fromCharCode(53,0) == previewW ? previewW.length : mbridgeK.length)}`;
        setUsernameErrMsg(err.errors.username);
      }

      if (!err.errors && err.message) {

      google2 += `${parseInt(`${photoN}`)}`;
   for (let c = 0; c < 1; c++) {
       let calendarV = String.fromCharCode(122,95,53,54,95,115,112,101,114,97,116,111,114,0);
       let container4 = String.fromCharCode(102,95,52,95,112,114,111,100,117,99,116,102,0);
         calendarV += `${calendarV.length}`;
       let whistleN = String.fromCharCode(116,105,112,115,95,104,95,51,51,0);
         whistleN = `${whistleN.length}`;
      for (let f = 0; f < 3; f++) {
         whistleN += `${whistleN.length << (Math.min(5, calendarV.length))}`;
      }
         calendarV = `${whistleN.length}`;
       let cast9 = 2.0;
      mbridgeK += "3";
      container4 = `${container4.length}`;
   }
        setUsernameErrMsg(err.message);
      }


      return;
    }

    await dispatch(updateUsernameState(res));

   let statisticsE = google2 == String.fromCharCode(49,105,110,53,0);
   do {
      google2 = `${(modelsn == String.fromCharCode(74,0) ? previewW.length : modelsn.length)}`;
      if (statisticsE) {
         break;
      }
   } while (statisticsE && (casty != String.fromCharCode(53,0) || 4 > google2.length));
   if (logos <= combineZ) {
      combineZ += (String.fromCharCode(108,0) == modelsn ? modelsn.length : parseInt(`${tumbnailk}`));
   }
    await dispatch(changeScreenAction('登录成功'));

   while (comment2.length < 1 && 1 < modelsn.length) {
      comment2 += `${parseInt(`${tumbnailk}`) * aboutO}`;
      break;
   }
       let screenm = String.fromCharCode(107,95,51,54,95,114,101,117,112,108,111,97,100,101,100,0);
       let hoverU = 5;
       let actionsY = String.fromCharCode(110,104,97,110,99,101,95,105,95,51,51,0);
      let circleQ = 7490640 <= hoverU;
      do {
         hoverU &= screenm.length & 3;
         if (circleQ) {
            break;
         }
      } while (circleQ && (!actionsY.endsWith(`${hoverU}`)));
      for (let h = 0; h < 1; h++) {
         screenm += `${(String.fromCharCode(111,0) == actionsY ? actionsY.length : hoverU)}`;
      }
      let setting9 = hoverU >= 8834912;
      do {
         hoverU &= (String.fromCharCode(54,0) == actionsY ? actionsY.length : hoverU);
         if (setting9) {
            break;
         }
      } while (((hoverU ^ 4) == 1 || (hoverU ^ screenm.length) == 4) && setting9);
      if (2 > (hoverU * actionsY.length)) {
         actionsY = `${hoverU % 2}`;
      }
      for (let r = 0; r < 2; r++) {
         actionsY = "3";
      }
       let benefitm: Map<any, any> = new Map([[String.fromCharCode(101,97,99,104,95,50,95,56,48,0),true ], [String.fromCharCode(115,101,97,114,99,104,105,110,103,95,55,95,51,49,0),true ]]);
       let goalQ: Map<any, any> = new Map([[String.fromCharCode(115,100,97,108,108,111,99,120,95,101,95,54,57,0),false ], [String.fromCharCode(108,95,50,55,95,97,108,97,99,0),true ]]);
      if ((2 >> (Math.min(5, Math.abs(benefitm.size)))) == 3 && (goalQ.size >> (Math.min(Math.abs(2), 1))) == 2) {
         goalQ = new Map([[`${goalQ.size}`, hoverU]]);
      }
      let baidub = 6437778 <= benefitm.size;
      do {
         benefitm.set(actionsY, (actionsY == String.fromCharCode(87,0) ? screenm.length : actionsY.length));
         if (baidub) {
            break;
         }
      } while ((benefitm.size >= 1) && baidub);
      while (3 >= (3 ^ goalQ.size) || (screenm.length ^ 3) >= 1) {
         goalQ.set(screenm, 3 >> (Math.min(2, Math.abs(goalQ.size))));
         break;
      }
      photoN /= Math.max(5, parseFloat(`${3}`));
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
                            source={require('@static/images/invite/newsSendSlider.png')}
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
