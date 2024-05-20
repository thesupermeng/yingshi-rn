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
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/hooks';
import { clearStorageMemory } from '@redux/actions/settingsActions';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import { removeUserAuthState } from '@redux/actions/userAction';
import { changeScreenAction } from '@redux/actions/screenAction';
import { RootState } from '@redux/store';

import { APP_NAME_CONST, APP_VERSION, IS_OTHER_SKIN } from '@utility/constants';
import { SettingsReducerState } from '@redux/reducers/settingsReducer';
import { CPopup } from '@utility/popup';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { UserStateType } from '@redux/reducers/userReducer';
import { User } from '@models';
import { CLangKey } from '@constants';
export default ({ navigation }: RootStackScreenProps<'设置'>) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isVersionDialogOpen, setIsVersionDialogOpen] = useState(false);
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const [subtitle1, setSubtitle1] = useState(CLangKey.currentlyAreLatestVersion.tr() + APP_VERSION);

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
  const toggleRemoveAccountDialog = () => {
    setIsRemoveDialogOpen(!isRemoveDialogOpen);
  }
  const onRemoveAccount = () => {
    setTimeout(() => {
      CPopup.showToast(CLangKey.cancelAccountSuccessMsg.tr());
    }, 500);
  }

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

  // useEffect(() => {
  //   dispatch(changeScreenAction('showSuccessLogin'));
  // }, []);
  const userState = useSelector<UserStateType>('userReducer');

  return (
    <ScreenContainer>
      <View style={{ gap: spacing.m, justifyContent: 'space-between', flex: 1 }}>
        <View>
          <TitleWithBackButtonHeader title={CLangKey.setting.tr()} />

          <NotificationModal
            onConfirm={toggleVersionDialog}
            isVisible={isVersionDialogOpen && !isOffline}
            title={CLangKey.checkUpdate.tr()}
            subtitle1={subtitle1}
            confirmationText={CLangKey.iSee.tr()}
          />

          <NotificationModal
            isVisible={isVersionDialogOpen && isOffline}
            onConfirm={toggleVersionDialog}
            title={CLangKey.noNetworkDetect.tr()}
          />

          <ConfirmationModal
            onConfirm={() => {
              dispatch(clearStorageMemory());
              toggleClearDialog();
            }}
            onCancel={toggleClearDialog}
            isVisible={isClearDialogOpen}
            title={CLangKey.clearCache.tr()}
            subtitle={CLangKey.clearAllCache.tr()}
            confirmationText={CLangKey.clear.tr()}
            confirmationColor={IS_OTHER_SKIN ? colors.error : undefined}
          />

          {/* {User.isLogin(userState.user) &&
            <ConfirmationModal
              onConfirm={() => {
                onRemoveAccount();
                toggleRemoveAccountDialog();
              }}
              onCancel={toggleRemoveAccountDialog}
              isVisible={isRemoveDialogOpen}
              title={CLangKey.confirmCancelAccountX.tr({ x: APP_NAME_CONST })}
              subtitle={CLangKey.accountWillRemoveIfConfirm.tr()}
            />
          } */}

          <ConfirmationModal
            onConfirm={async () => {
              //    user logout
              await AsyncStorage.removeItem("showAds");
              await dispatch(removeUserAuthState());
              navigator.navigate('Home', {
                screen: 'Profile',
              });
              toggleLogoutDialog();

              GoogleSignin.signOut();
            }}
            onCancel={toggleLogoutDialog}
            isVisible={isLogoutDialogOpen}
            title={CLangKey.logout.tr()}
            subtitle={CLangKey.logoutConfirm.tr()}
          />

          {/* displayed content */}
          <View>
            <View>
              <ShowMoreButton
                text={CLangKey.about.tr()}
                onPress={() => navigation.navigate("关于我们")}
              />
              <ShowMoreButton
                text={CLangKey.clearCache.tr()}
                onPress={toggleClearDialog}
              />
              <ShowMoreButton
                text={CLangKey.userAgreement.tr()}
                onPress={() => navigation.navigate("用户协议")}
              />
              <ShowMoreButton
                text={CLangKey.privacyPolicy.tr()}
                onPress={() => navigation.navigate("隐私政策")}
              />
              {/* <ShowMoreButton
                text={CLangKey.checkUpdate.tr()}
                onPress={toggleVersionDialog}
                rightIcon={
                  <View style={styles.icon}>
                    <Text
                      style={{
                        ...textVariants.small,
                        paddingBottom: 3,
                        color: colors.muted,
                      }}>
                      {CLangKey.currentVersion.tr()}{APP_VERSION}
                    </Text>
                    <MoreArrow
                      width={icons.sizes.l}
                      height={icons.sizes.l}
                      color={colors.muted}
                    />
                  </View>
                }
              /> */}
              {/* {User.isLogin(userState.user) &&
                <ShowMoreButton text={CLangKey.cancelAccount.tr()} onPress={toggleRemoveAccountDialog} />
              } */}
            </View>
          </View>
        </View>
        {User.isLogin(userState.user) && (
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
              <Text style={{ color: '#FF3C3C' }}>{CLangKey.logout.tr()}</Text>
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
