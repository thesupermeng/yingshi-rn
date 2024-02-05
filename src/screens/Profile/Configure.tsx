import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import { RootStackScreenProps } from '@type/navigationTypes';
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native';

import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import { Button, Dialog } from '@rneui/themed';
import ShowMoreButton from '../../components/button/showMoreButton';
import NotificationModal from '../../components/modal/notificationModal';
import MoreArrow from '@static/images/more_arrow.svg';
import ConfirmationModal from '../../components/modal/confirmationModal';
import { useAppDispatch, useAppSelector } from '@hooks/hooks';
import { clearStorageMemory } from '@redux/actions/settingsActions';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import { removeUserAuthState } from '@redux/actions/userAction';
import { changeScreenAction } from '@redux/actions/screenAction';
import { RootState } from '@redux/store';
import { userModel } from '@type/userType';

import { APP_VERSION } from '@utility/constants';
import { SettingsReducerState } from '@redux/reducers/settingsReducer';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { CApi } from '@utility/apiService';
import { clearMinivodApiCache } from "../../utils/minivodDownloader"
import { UserApi } from '../../api/user';
import { addUserAuthState } from "@redux/actions/userAction";

export default ({ navigation }: RootStackScreenProps<'设置'>) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isVersionDialogOpen, setIsVersionDialogOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const [subtitle1, setSubtitle1] = useState('当前已是最新版本' + APP_VERSION);

  const settingsReducer: SettingsReducerState = useAppSelector(
    ({ settingsReducer }: RootState) => settingsReducer
  );

  const dispatch = useAppDispatch();

  const toggleLogoutDialog = () => {
    setIsLogoutDialogOpen(!isLogoutDialogOpen);
  };

  const toggleVersionDialog = () => {
    setIsVersionDialogOpen(!isVersionDialogOpen);
  };
  const toggleClearDialog = () => {
    setIsClearDialogOpen(!isClearDialogOpen);
  };
  const navigator = useNavigation();
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(useCallback(() => {
    if (!settingsReducer.isOffline) {
      setIsOffline(settingsReducer.isOffline);
    } else {
      return () => {
        setIsOffline(settingsReducer.isOffline);
      }
    }
  }, [settingsReducer.isOffline]));

  const guestLoginInit = async () => {
    // console.log("guestLoginInit");
    // console.log(userState.userId);
    // console.log(userState.userToken);

    // console.log("guestLogin");
    let result = await UserApi.guestLogin();

    // console.log("result");
    // console.log(result);
    const resultData = result;

    let json = {
      userToken: resultData.access_token,
      userId: resultData.user.user_id,
      userName: resultData.user.user_name,
      userReferralCode: resultData.user.user_referral_code,
      userEmail: resultData.user.user_email,
      userPhoneNumber: resultData.user.user_phone !== 0 ? resultData.user.user_phone : '',
      userMemberExpired: resultData.user.vip_end_time,
      // userMemberExpired: resultData.user.created_at,
      userReferrerName: resultData.user.referrer_name,
      userEndDaysCount: resultData.user.user_vip_time_duration_days,
      userTotalInvite: resultData.user.total_invited_user,
      userAccumulateRewardDay: resultData.user.accumulated_vip_reward_days,
      userAllowUpdateReferral: resultData.user.eligible_update_referrer,
      userCurrentTimestamp: resultData.user.current_timestamp,
      userInvitedUserList: resultData.user.invited_users,
      userUpline: resultData.user.upline_user,
      userAccumulateVipRewardDay:
        resultData.user.accumulated_paid_vip_reward_days,
      userPaidVipList: resultData.user.paid_vip_response,
    };
    // console.log("json");
    // console.log(json);

    await dispatch(addUserAuthState(json));

  };


  // useEffect(() => {
  //   dispatch(changeScreenAction('showSuccessLogin'));
  // }, []);
  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer,
  );
  return (
    <ScreenContainer>
      <View style={{ gap: spacing.m, justifyContent: 'space-between', flex: 1 }}>
        <View>
          <TitleWithBackButtonHeader title="设置" />

          <NotificationModal
            onConfirm={toggleVersionDialog}
            isVisible={isVersionDialogOpen && !isOffline}
            title="检查更新"
            subtitle1={subtitle1}
            confirmationText="我知道了"
          />

          <NotificationModal
            isVisible={isVersionDialogOpen && isOffline}
            onConfirm={toggleVersionDialog}
            title="无法检测网络，请稍后再试"
          />

          <ConfirmationModal
            onConfirm={() => {
              dispatch(clearStorageMemory());
              toggleClearDialog();
            }}
            onCancel={toggleClearDialog}
            isVisible={isClearDialogOpen}
            title="空间清理"
            subtitle="清除所有的缓存"
            confirmationText="清除"
          />

          <ConfirmationModal
            onConfirm={async () => {
              //    user logout
              await AsyncStorage.removeItem("showAds");
              await dispatch(removeUserAuthState());
              clearMinivodApiCache()


              await guestLoginInit();

              navigator.navigate('Home', {
                screen: 'Profile',
              });
              toggleLogoutDialog();

              GoogleSignin.signOut();




            }}
            onCancel={toggleLogoutDialog}
            isVisible={isLogoutDialogOpen}
            title="退出登录"
            subtitle="您是否确定要退出登录？"
            confirmationText="确定"
          />

          {/* displayed content */}
          <View>
            <View>
              <ShowMoreButton text="空间清理" onPress={toggleClearDialog} />
              <ShowMoreButton
                text="检查更新"
                onPress={toggleVersionDialog}
                rightIcon={
                  <View style={styles.icon}>
                    <Text
                      style={{
                        ...textVariants.small,
                        paddingBottom: 3,
                        color: colors.muted,
                      }}>
                      当前版本{APP_VERSION}
                    </Text>
                    <MoreArrow
                      width={icons.sizes.l}
                      height={icons.sizes.l}
                      color={colors.muted}
                    />
                  </View>
                }
              />
            </View>
          </View>
        </View>
        {userState.userToken != '' && (userState.userEmail != '' || userState.userPhoneNumber != '') && (
          <TouchableOpacity onPress={toggleLogoutDialog}>
            <View
              style={{
                backgroundColor: '#1d2023',
                width: '100%',
                height: 50,
                borderRadius: 8,
                borderWidth: 0,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30,
              }}>
              <Text style={{ color: '#FF3C3C' }}>退出登录</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  topNav: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitBtn: {
    borderRadius: 10,
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  overlay: {
    borderRadius: 14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
