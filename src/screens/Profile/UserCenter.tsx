import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Clipboard,
} from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import {RootStackScreenProps} from '../../types/navigationTypes';
import {useTheme} from '@react-navigation/native';
import {RootState} from '../../redux/store';
import {InputItem, Button} from '@ant-design/react-native';
import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import axios from 'axios';
import {Keyboard} from 'react-native';
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from '../../utility/constants';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';

import {ScrollView} from 'react-native-gesture-handler';

import InviteStep from '../../components/invite/inviteStep';
import InviteCard from '../../components/invite/inviteCard';

import InviteHeader from '../../components/invite/inviteHeader';
import {useAppSelector} from '../../hooks/hooks';
import {userModel} from '../../types/userType';
import {useDispatch} from 'react-redux';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import {changeScreenAction} from '../../redux/actions/screenAction';
import NotificationModal from '../../components/modal/notificationModal';
import {getUserDetails, updateUsername} from '../../features/user';
import {
  updateUsernameState,
  updateUserReferral,
} from '../../redux/actions/userAction';
export default ({navigation}: RootStackScreenProps<'个人中心'>) => {
  const {colors, textVariants, icons, spacing} = useTheme();
  const dispatch = useDispatch();
  const userState: userModel = useAppSelector(
    ({userReducer}: RootState) => userReducer,
  );

  const [errUsername, setErrUsername] = useState('');
  const [initialUsername, setInitialUsername] = useState('');
  const [username, setUsername] = useState('');
  const [usernameValid, setUsernameValid] = useState(true);

  const [errReferral, setErrReferral] = useState('');
  const [referral, setReferral] = useState('');
  const [referralValid, setReferralValid] = useState(true);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
    setIsDialogOpen(!isDialogOpen);
  };
  const onUsernameChange = (value: any) => {
    setUsername(value);
    ValidateUsername(value);
  };

  const onReferralChange = (value: any) => {
    setReferral(value);
    ValidateReferral(value);
  };

  function ValidateReferral(username: string) {
    setErrReferral('');
    setReferralValid(true);
  }

  function ValidateUsername(username: string) {
    const regex = /^.{2,18}$/;
    console.log(regex.test(username));
    if (username.length < 2) {
      setErrUsername('昵称必须介于2-18个字');
      setUsernameValid(false);
    } else {
      setErrUsername('');
      setUsernameValid(true);
    }
  }
  useEffect(() => {
    setUsername(userState.userName);
    setInitialUsername(userState.userName.toLocaleUpperCase());
    // setReferral(userState.userReferrerName);
  }, []);

  return (
    <View style={{flex: 1, paddingHorizontal: 5}}>
      <TitleWithBackButtonHeader title="个人中心" />
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
          paddingHorizontal: 10,
        }}>
        {/* username input  */}
        <View style={{marginTop: 30}}>
          <View>
            <InputItem
              autoCapitalize="none"
              style={[
                styles.textInpoutCommonStyle,
                styles.defaultTextInputStyle,
                usernameValid
                  ? styles.correctTextInputStyle
                  : styles.invalidTextInputStyle,
              ]}
              value={username}
              onChange={value => {
                onUsernameChange(value);
              }}
              placeholder="输入昵称"
              placeholderTextColor="#B6B6B6"
              maxLength={18}
            />
            <View
              style={{
                ...styles.dangerWrap,
              }}>
              <View
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                {errUsername != '' && (
                  <>
                    <Image
                      style={{
                        height: 22,
                        width: 22,
                        marginRight: 5,
                        position: 'relative',
                        top: 1,
                      }}
                      source={require('../../../static/images/invite/danger.png')}
                    />

                    <Text style={styles.danger}>{errUsername} </Text>
                  </>
                )}
              </View>

              <Text style={{fontWeight: '600', fontSize: 15, color: '#9C9C9C'}}>
                {username.length}/18
                {/* {userState.userEmail} */}
              </Text>
            </View>
          </View>
          {/* referral input  */}
          {userState.userReferrerName == '' && (
            <View>
              <InputItem
                autoCapitalize="none"
                style={[
                  styles.textInpoutCommonStyle,
                  styles.defaultTextInputStyle,
                  referralValid
                    ? styles.correctTextInputStyle
                    : styles.invalidTextInputStyle,
                ]}
                value={referral}
                onChange={value => {
                  onReferralChange(value);
                }}
                placeholder="补填邀请码 (只能填写一次)"
                placeholderTextColor="#B6B6B6"
                maxLength={18}
              />

              <View
                style={{
                  ...styles.dangerWrap,
                }}>
                <View
                  style={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  {errReferral != '' && (
                    <>
                      <Image
                        style={{
                          height: 22,
                          width: 22,
                          marginRight: 5,
                          position: 'relative',
                          top: 1,
                        }}
                        source={require('../../../static/images/invite/danger.png')}
                      />

                      <Text style={styles.danger}>{errReferral} </Text>
                    </>
                  )}
                </View>
              </View>
            </View>
          )}

          {userState.userReferrerName != '' && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#1d2023',
                marginTop: 20,
                paddingLeft: 18,
                paddingRight: 13,
                height: 48,
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 16, color: '#9C9C9C'}}>推介人</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 14}}>
                  {' '}
                  {userState.userReferrerName}
                </Text>
              </View>
            </View>
          )}
          {/* copy referral */}
          <TouchableOpacity
            onPress={() => {
              console.log('open dialog');

              Clipboard.setString(userState.userReferralCode);
              setIsDialogOpen(true);
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#1d2023',
                marginTop: 20,
                paddingLeft: 18,
                paddingRight: 13,
                height: 48,
                borderRadius: 8,
              }}>
              <Text style={{fontSize: 16, color: colors.primary}}>
                {userState.userReferralCode}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 14, color: '#9C9C9C'}}>复制邀请码</Text>
                <Image
                  style={{
                    height: 27,
                    width: 27,
                    position: 'relative',
                    top: 2,
                  }}
                  source={require('../../../static/images/profile/copy.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          <NotificationModal
            onConfirm={toggleOverlay}
            isVisible={isDialogOpen}
            title="复制成功"
            subtitle1=""
            subtitle2=""
            subtitle3=""
          />
        </View>
        {/* bottom button  */}
        <Button
          onPress={async () => {
            if (
              usernameValid == false ||
              referralValid == false ||
              !(
                initialUsername.toLocaleLowerCase() !==
                  username.toLocaleLowerCase() ||
                (referral != '' && userState.userReferrerName == '')
              )
            ) {
              console.log('err form validation');
              return;
            }
            let res;
            try {
              res = await updateUsername({
                username: username,
                referralCode: referral,
                bearerToken: userState.userToken,
              });
            } catch (err: any) {
              if (err.response.data.errors.referral_code) {
                setReferralValid(false);
                setErrReferral(err.response.data.errors.referral_code);
              }

              if (err.response.data.errors.username) {
                setUsernameValid(false);
                setErrUsername(err.response.data.errors.username);
              }
              // setErrMsg(err.response.data.message);
              // setUsernameValid(false);
              return;
            }

            let result;
            if (referral != '') {
              result = await getUserDetails({
                bearerToken: userState.userToken,
              });

              let resultData = result.data.data;
              await dispatch(updateUserReferral(resultData.user.referrer_name));
              setUsername(resultData.user.user_name);
              setInitialUsername(resultData.user.user_name);

              console.log('user details');
              console.log(resultData);
            } else {
              await dispatch(updateUsernameState(username));
              setUsername(username);
              setInitialUsername(username.toUpperCase());
            }

            Keyboard.dismiss();
            dispatch(changeScreenAction('修改成功'));
          }}
          type="primary"
          // disabled={props.email === '' || !props.emailValid}
          style={[
            styles.confirmButtonStyle,

            usernameValid &&
            referralValid &&
            (initialUsername.toLocaleLowerCase() !==
              username.toLocaleLowerCase() ||
              (referral != '' && userState.userReferrerName == ''))
              ? styles.btnActive
              : styles.btnInactive,
          ]}
          activeStyle={[
            styles.confirmButtonStyle,

            usernameValid &&
            referralValid &&
            (initialUsername.toLocaleLowerCase() !==
              username.toLocaleLowerCase() ||
              (referral != '' && userState.userReferrerName == ''))
              ? styles.btnActive
              : styles.btnInactive,
          ]}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 15,
              letterSpacing: 0.2,
              color:
                usernameValid &&
                referralValid &&
                (initialUsername.toLocaleLowerCase() !==
                  username.toLocaleLowerCase() ||
                  (referral != '' && userState.userReferrerName == ''))
                  ? '#000'
                  : 'grey',
            }}>
            修改
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInpoutCommonStyle: {
    marginHorizontal: '-5%',
    marginTop: 20,
    paddingHorizontal: 18,
    height: 48,
    borderRadius: 8,
    fontSize: 16,
  },
  defaultTextInputStyle: {backgroundColor: '#1d2023'},
  correctTextInputStyle: {backgroundColor: '#1d2023', color: '#fff'},
  invalidTextInputStyle: {
    backgroundColor: '#311818',
    borderWidth: 1,
    borderColor: '#FF1010',
    color: '#FF1010',
  },
  confirmButtonStyle: {
    width: '100%',
    height: 42,
    marginBottom: 30,
    borderWidth: 0,
  },
  btnActive: {
    backgroundColor: '#FAC33D',
    color: '#000',
  },
  btnInactive: {
    backgroundColor: '#1d2023',
  },
  dangerWrap: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  danger: {
    fontWeight: '400',
    fontSize: 15,
    textAlign: 'left',
    color: '#FF3434',
  },
});
