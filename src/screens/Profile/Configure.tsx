import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Modal,
} from "react-native";
import ScreenContainer from "../../components/container/screenContainer";
import { RootStackScreenProps } from "@type/navigationTypes";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";

import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import { Button, Dialog } from "@rneui/themed";
import ShowMoreButton from "../../components/button/showMoreButton";
import NotificationModal from "../../components/modal/notificationModal";
import MoreArrow from "@static/images/more_arrow.svg";
import ConfirmationModal from "../../components/modal/confirmationModal";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/hooks";
import { clearStorageMemory } from "@redux/actions/settingsActions";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { removeUserAuthState } from "@redux/actions/userAction";
import { changeScreenAction } from "@redux/actions/screenAction";
import { RootState } from "@redux/store";

import { APP_VERSION, IS_OTHER_SKIN } from "@utility/constants";
import { SettingsReducerState } from "@redux/reducers/settingsReducer";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { CApi } from "@utility/apiService";
import { clearMinivodApiCache } from "../../utils/minivodDownloader";
import { UserApi } from "../../api/user";
import { addUserAuthState } from "@redux/actions/userAction";
import { UserStateType } from '@redux/reducers/userReducer';
import { User } from "@models/user";

export default ({ navigation }: RootStackScreenProps<"设置">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isVersionDialogOpen, setIsVersionDialogOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const [subtitle1, setSubtitle1] = useState("当前已是最新版本" + APP_VERSION);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false); // New state for backdrop visibility

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

  useFocusEffect(
    useCallback(() => {
      if (!settingsReducer.isOffline) {
        setIsOffline(settingsReducer.isOffline);
      } else {
        return () => {
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline])
  );

  const guestLoginInit = async () => {
    const user = await UserApi.guestLogin();

    await dispatch(addUserAuthState(user));
  };

  // useEffect(() => {
  //   dispatch(changeScreenAction('showSuccessLogin'));
  // }, []);
  const userState = useSelector<UserStateType>('userReducer');
  return (
    <ScreenContainer>
      <View
        style={{ gap: spacing.m, justifyContent: "space-between", flex: 1 }}
      >
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
            confirmationColor={IS_OTHER_SKIN ? colors.error : undefined}
          />

          <ConfirmationModal
            onConfirm={async () => {
              //    user logout

              setIsBackdropVisible(true); //
              toggleLogoutDialog();
              await AsyncStorage.removeItem("showAds");
              await dispatch(removeUserAuthState());
              clearMinivodApiCache();

              await guestLoginInit();
              setIsBackdropVisible(false); //
              navigator.navigate("Home", {
                screen: "Profile",
              });

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
                      }}
                    >
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
        {User.isLogin(userState.user) && false && (
          <TouchableOpacity onPress={toggleLogoutDialog}>
            <View
              style={{
                backgroundColor: "#1d2023",
                width: "100%",
                height: 50,
                borderRadius: 8,
                borderWidth: 0,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              <Text style={{ color: "#FF3C3C" }}>退出登录</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>

      {/* Loading spinner with backdrop */}
      <Modal
        transparent
        animationType="slide"
        visible={isBackdropVisible}
        onRequestClose={() => setIsBackdropVisible(false)}
      >
        <View style={styles.modalContainer}>
          <ActivityIndicator size="large" color="#FAC33D" />
        </View>
      </Modal>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  topNav: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  submitBtn: {
    borderRadius: 10,
  },
  icon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  overlay: {
    borderRadius: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
