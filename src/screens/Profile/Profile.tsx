import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ListItem} from '@rneui/themed';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  Platform,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import {useTheme, useFocusEffect} from '@react-navigation/native';
import {toggleTheme} from '../../redux/actions/themeAction';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {RootState} from '../../redux/store';
import ShowMoreButton from '../../components/button/showMoreButton';

import CollectionIcon from '../../../static/images/collection.svg';
import HistoryIcon from '../../../static/images/history.svg';
import FeedbackIcon from '../../../static/images/feedback.svg';
import SettingsIcon from '../../../static/images/settings.svg';
import InfoIcon from '../../../static/images/info.svg';
import DownloadIcon from '../../../static/images/download.svg';
import {useNavigation} from '@react-navigation/native';
import ShareIcon from '../../../static/images/share.svg';

import LightMode from '../../../static/images/light_mode.svg';
import DarkMode from '../../../static/images/dark_mode.svg';
import Orientation from 'react-native-orientation-locker';
import ProfileIcon from '../../../static/images/profile.svg';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import MoreArrow from '../../../static/images/more_arrow.svg';
import EditIcn from './../../../static/images/profile/edit.svg';

import VipIcon from '../../../static/images/vip-icon.svg';
import VipArrow from '../../../static/images/vip-arrow.svg';

import UpgradeIcon from '../../../static/images/upgrade.svg';
import RightArrow from '../../../static/images/right-arrow-yellow.svg';

import {Login} from '../../components/profile/login';
import {Register} from '../../components/profile/register';
import {GobalModal} from '../../components/profile/globalModal';

import BottomSheet from '@gorhom/bottom-sheet';

import {
  removeScreenAction,
  showLoginAction,
} from '../../redux/actions/screenAction';
import {userModel} from '../../types/userType';
import NotificationModal from '../../components/modal/notificationModal';

export default ({navigation, route}: BottomTabScreenProps<any>) => {
  const sheetRef = useRef<BottomSheet>(null);
  const [signUpOrLogin, setSignUpOrLogin] = useState(false);
  const [actionType, setActionType] = useState('login');
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const navigator = useNavigation();
  const {colors, textVariants, icons, spacing} = useTheme();
  const dispatch = useAppDispatch();
  const themeReducer = useAppSelector(
    ({themeReducer}: RootState) => themeReducer,
  );

  const [displayedDate, setDisplayedDate] = useState('');

  const pageInitialState = route.params;
  const userState: userModel = useAppSelector(
    ({userReducer}: RootState) => userReducer,
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  useEffect(() => {
    const date = new Date(Number(userState.userMemberExpired) * 1000); // Multiply by 1000 to convert from seconds to milliseconds

    // Extract year, month, and day
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are 0-based, so add 1
    const day = date.getDate();

    setDisplayedDate(`${year}年${month}月${day}日`);
  }, [userState.userMemberExpired]);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => {
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  const screenState = useAppSelector(
    ({screenReducer}: RootState) => screenReducer,
  );
  useEffect(() => {
    console.log('screenState in profile');
    console.log(screenState.screenAction);
  }, [screenState]);

  useEffect(() => {
    if (pageInitialState?.showSuccessRegister != undefined) {
      console.log('show login success');
    } else if (pageInitialState?.showLogin != undefined) {
      console.log('showLogin');
    } else {
      console.log('show nothing');
    }
  }, []);

  const highlightText = (text: string, keyword: string) => {
    const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <Text key={index} style={{...textVariants.body, color: colors.primary}}>
          {part}
        </Text>
      ) : (
        <Text key={index} style={{...textVariants.body, color: '#FFF0CA'}}>
          {part}
        </Text>
      ),
    );
  };

  return (
    <>
      <ScreenContainer>
        <View style={{...styles.topNav}}>
          <Text
            style={{
              ...textVariants.bigHeader,
              color: colors.text,
              fontSize: 22,
            }}>
            我的
          </Text>
          {/* <TouchableOpacity onPress={() => dispatch(toggleTheme(!themeReducer.theme))}>
                    {
                        themeReducer.theme
                            ? <LightMode color={icons.iconColor} height={26} width={26} />
                            : <DarkMode color={icons.iconColor}  height={26} width={26} />

                    }
                </TouchableOpacity> */}
        </View>
        {/* 游客登录  component*/}
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            if (userState.userToken == '') {
              dispatch(showLoginAction());
              // console.log('props{');
              // setActionType('login');
              // setSignUpOrLogin(true);
            } else {
              navigation.navigate('个人中心');
            }
          }}>
          <View
            style={{paddingTop: 20, paddingBottom: 10, flexDirection: 'row'}}>
            <ProfileIcon
              style={{color: colors.button, width: 18, height: 18}}
            />
            <View
              style={{
                flexDirection: 'column',
                flexGrow: 1,
                gap: 5,
                justifyContent: 'center',
                paddingLeft: 12,
              }}>
              {userState.userToken == '' && (
                <>
                  <Text style={{color: '#ffffff', fontSize: 20}}>
                    游客您好！
                  </Text>
                  <Text style={{color: '#ffffff', fontSize: 14}}>
                    登录可享更多服务
                  </Text>
                </>
              )}
              {userState.userToken != '' && (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: '#ffffff', fontSize: 20}}>
                      {userState.userName}
                    </Text>
                    <Image
                      style={styles.iconStyle}
                      source={require('../../../static/images/profile/vip.png')}
                    />
                  </View>

                  {userState.userMemberExpired == '0' && (
                    <Text style={{fontSize: 14}}>VIP会员已经到期</Text>
                  )}
                  {userState.userMemberExpired != '0' && (
                    <Text style={{color: colors.primary, fontSize: 14}}>
                      VIP会员有效日期至{displayedDate}
                    </Text>
                  )}
                </>
              )}
            </View>

            <View
              style={{
                justifyContent: 'center',
                paddingRight: 15,
              }}>
              {userState.userToken == '' && (
                <MoreArrow
                  width={icons.sizes.l}
                  height={icons.sizes.l}
                  color={colors.muted}
                />
              )}

              {userState.userToken != '' && (
                <EditIcn width={29} height={29} color={colors.muted} />
              )}
            </View>
          </View>
        </TouchableOpacity>

        <ScrollView style={{marginBottom: -30, flex: 3, paddingBottom: 120}}>
          <TouchableOpacity
            style={{
              ...styles.btn,
              backgroundColor: '#2d2e30',
            }}
            onPress={() => navigation.navigate('邀请')}>
            <View style={styles.left}>
              <View style={styles.icon}>
                <VipIcon />
              </View>

              <Text
                style={{
                  ...textVariants.body,
                }}>
                {highlightText('邀请好友获得VIP奖励，享更多权益', 'VIP')}
              </Text>
            </View>

            <VipArrow
              width={icons.sizes.l}
              height={icons.sizes.l}
              color={colors.muted}
            />
          </TouchableOpacity>

          <ShowMoreButton
            text="我的收藏"
            leftIcon={<CollectionIcon style={{color: colors.button}} />}
            onPress={() => navigation.navigate('我的收藏')}
          />
          <ShowMoreButton
            text="我的下载"
            leftIcon={<DownloadIcon style={{color: colors.button}} />}
            onPress={() => setIsDialogOpen(true)}
          />
          <ShowMoreButton
            text="播放历史"
            leftIcon={<HistoryIcon style={{color: colors.button}} />}
            onPress={() => navigation.navigate('播放历史')}
          />
          <ShowMoreButton
            text="我要反馈"
            leftIcon={<FeedbackIcon style={{color: colors.button}} />}
            onPress={() => navigation.navigate('反馈')}
          />
          <ShowMoreButton
            text="设置"
            leftIcon={<SettingsIcon style={{color: colors.button}} />}
            onPress={() => navigation.navigate('设置')}
          />
          <ShowMoreButton
            text="关于我们"
            leftIcon={<InfoIcon style={{color: colors.button}} />}
            onPress={() => navigation.navigate('关于我们')}
          />
          {/* <TouchableOpacity
            style={{
              ...styles.btn,
              backgroundColor: '#2b271e',
            }}
            onPress={() => setIsDialogOpen(true)}>
            <View style={styles.left}>
              <View style={{...styles.icon, paddingTop: 2}}>
                <UpgradeIcon />
              </View>

              <Text
                style={{
                  ...textVariants.body,
                  color: colors.primary,
                }}>
                一键升级至影视TV Pro
              </Text>
            </View>

            <RightArrow
              width={icons.sizes.l}
              height={icons.sizes.l}
              color={colors.muted}
            />
          </TouchableOpacity> */}
          {/* <ShowMoreButton text='分享App' disabled={true} leftIcon={<ShareIcon style={{ color: colors.button }} />} /> */}
        </ScrollView>

        <NotificationModal
          onConfirm={toggleOverlay}
          isVisible={isDialogOpen}
          title="功能尚未开放"
          subtitle1=""
          subtitle2=""
          subtitle3=""
        />
      </ScreenContainer>

      <SignUpOrLogin
        show={signUpOrLogin}
        actionType={actionType}
        dismiss={() => {
          setSignUpOrLogin(false);
        }}
        goToRegister={() => {
          console.log('goToRegister');
          setSignUpOrLogin(false);
          setActionType('register');
          setSignUpOrLogin(true);
        }}
        goToLogin={() => {
          console.log('go to login');
          setSignUpOrLogin(false);
          setActionType('login');
          setSignUpOrLogin(true);
        }}
        emailValid={emailValid}
        setEmail={setEmail}
        email={email}
        navigator={navigator}
      />
    </>
  );
};

const SignUpOrLogin = (props: any) => {
  const {height} = useWindowDimensions();

  return (
    <>
      {props.actionType == 'login' && (
        <GobalModal
          show={props.show}
          dismiss={props.dismiss}
          actionType={props.actionType}
          heightFloat={height < 650 ? 0.42 : 0.4}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Login dismiss={props.dismiss} goToRegister={props.goToRegister} />
          </KeyboardAvoidingView>
        </GobalModal>
      )}
      {props.actionType == 'register' && (
        <GobalModal
          show={props.show}
          dismiss={props.dismiss}
          actionType={props.actionType}
          heightFloat={height < 650 ? 0.42 : 0.4}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Register dismiss={props.dismiss} goToLogin={props.goToLogin} />
          </KeyboardAvoidingView>
        </GobalModal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  topNav: {
    paddingTop: 8,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  icon: {
    marginRight: 10,
    height: 24,
    width: 24,
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    width: '100%',
    borderRadius: 10,
    marginTop: 20,
  },
  highlightColor: {
    color: '#FAC33D', // Change this color to your desired highlight color
  },
  iconStyle: {
    height: 22,
    width: 22,
    marginLeft: 5,
    position: 'relative',
    top: 2,
  },
});
