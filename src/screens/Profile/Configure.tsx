import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ScreenContainer from '../../components/container/screenContainer';
import {RootStackScreenProps} from '../../types/navigationTypes';
import {useTheme} from '@react-navigation/native';

import TitleWithBackButtonHeader from '../../components/header/titleWithBackButtonHeader';
import {Button, Dialog} from '@rneui/themed';
import ShowMoreButton from '../../components/button/showMoreButton';
import NotificationModal from '../../components/modal/notificationModal';
import MoreArrow from '../../../static/images/more_arrow.svg';
import ConfirmationModal from '../../components/modal/confirmationModal';
import {useAppDispatch} from '../../hooks/hooks';
import {clearStorageMemory} from '../../redux/actions/settingsActions';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import {APP_VERSION} from '../../utility/constants';
export default ({navigation}: RootStackScreenProps<'设置'>) => {
  const {colors, textVariants, icons, spacing} = useTheme();
  const [isVersionDialogOpen, setIsVersionDialogOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);
  const [subtitle1, setSubtitle1] = useState('当前已是最新版本' + APP_VERSION);
  const dispatch = useAppDispatch();

  const toggleVersionDialog = () => {
    setIsVersionDialogOpen(!isVersionDialogOpen);
  };
  const toggleClearDialog = () => {
    setIsClearDialogOpen(!isClearDialogOpen);
  };

  const [isOffline, setIsOffline] = useState(false);
  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(
      (state: NetInfoState) => {
        const offline = !(state.isConnected && state.isInternetReachable);
        setIsOffline(offline);
      },
    );

    return () => removeNetInfoSubscription();
  }, []);
  return (
    <ScreenContainer>
      <View style={{gap: spacing.m}}>
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
