import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Clipboard,
  Platform,
} from "react-native";
import ScreenContainer from "../../components/container/screenContainer";
import { RootStackScreenProps } from "@type";
import { useTheme } from "@react-navigation/native";
import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import { useSelector } from "@hooks";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import NotificationModal from "../../components/modal/notificationModal";
import { CPopup } from "@utility";
import FastImage from "../../components/common/customFastImage";
import { ChangeUsernameModal } from "../../components/modal/changeUsernameModal";
import { ChangeReferrerModal } from "../../components/modal/changeReferrerModal";
import { UserStateType } from "@redux";

export default ({ navigation }: RootStackScreenProps<"个人中心">) => {
  const { colors } = useTheme();

  const userState = useSelector<UserStateType>('userReducer');

  const [username, setUsername] = useState(userState.userName);

  const [isShowUsernameModal, setShowUsernameModal] = useState(false);
  const [isShowReferrerModal, setShowReferrerModal] = useState(false);

  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const toggleOverlay = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const onPressUsername = () => {
    setShowUsernameModal(true);
  }

  const onUsernameUpdateSuccess = (newUsername: string) => {
    setUsername(newUsername);
  }

  const onPressReferrer = () => {
    setShowReferrerModal(true);
  }

  const onCopyReferralCode = () => {
    Clipboard.setString(userState.user?.userReferralCode ?? '');
    setIsDialogOpen(true);
  }

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title='个人中心' />
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
          paddingHorizontal: 10,
        }}
      >
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity
            style={styles.pressableTextContainer}
            onPress={() => {
              CPopup.showToast('目前暂不支持更改头像，敬请期待');
            }}
          >
            <Text style={{ fontSize: 16, color: '#9C9C9C' }}>头像</Text>
            <FastImage
              style={{
                height: 34,
                width: 34,
              }}
              source={require('../../../../static/images/profilePic.png')}
            />
          </TouchableOpacity>

          {/* username  */}
          <TouchableOpacity
            style={styles.pressableTextContainer}
            onPress={onPressUsername}
          >
            <Text style={{ fontSize: 16, color: 'white' }}>
              {username}
            </Text>
          </TouchableOpacity>

          {/* email & phone */}
          <View style={styles.pressableTextContainer}>
            <Text style={{ fontSize: 16, color: '#9C9C9C' }}>
              {userState.user?.userEmail !== '' ? userState.user?.userEmail : userState.user?.userPhoneNumber}
            </Text>
          </View>

          {/* referral  */}
          {userState.user?.userReferrerName == '' &&
            userState.user.userAllowUpdateReferral == true &&
            <TouchableOpacity
              style={styles.pressableTextContainer}
              onPress={onPressReferrer}
            >
              <Text style={{ fontSize: 16, color: '#B6B6B6' }}>
                补填邀请码 (只能填写一次)
              </Text>
            </TouchableOpacity>
          }

          {userState.user?.userReferrerName != '' && (
            <View style={styles.pressableTextContainer}>
              <Text style={{ fontSize: 16, color: '#9C9C9C' }}>推介人</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 14, color: '#9C9C9C' }}>
                  {userState.user?.userReferrerName}
                </Text>
              </View>
            </View>
          )}

          {/* copy referral */}
          <TouchableOpacity
            style={styles.pressableTextContainer}
            onPress={onCopyReferralCode}
          >
            <Text style={{ fontSize: 16, color: colors.primary }}>
              {userState.user?.userReferralCode}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 14, color: '#9C9C9C' }}>
                复制邀请码
              </Text>
              <Image
                style={{
                  height: 27,
                  width: 27,
                  position: 'relative',
                  top: 2,
                }}
                source={require('../../../../static/images/profile/copy.png')}
              />
            </View>
          </TouchableOpacity>

          <NotificationModal
            onConfirm={toggleOverlay}
            isVisible={isDialogOpen}
            title='复制成功'
            subtitle1=''
            subtitle2=''
            subtitle3=''
          />
        </View>

        <ChangeUsernameModal
          isVisible={isShowUsernameModal}
          handleClose={() => {
            setShowUsernameModal(false);
          }}
          initialUsername={username}
          onSubmitSuccess={onUsernameUpdateSuccess}
        />

        <ChangeReferrerModal
          isVisible={isShowReferrerModal}
          handleClose={() => {
            setShowReferrerModal(false);
          }}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  pressableTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1d2023',
    marginTop: 20,
    paddingLeft: 18,
    paddingRight: 13,
    height: 48,
    borderRadius: 8,
    marginBottom: 20,
  },
});
