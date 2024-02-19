import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  RefreshControl,
  ScrollView,
} from "react-native";
import ScreenContainer from "../../components/container/screenContainer";
import { RootStackScreenProps } from "@type";
import { useTheme } from "@react-navigation/native";
import { RootState } from "@redux";

import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import axios from "axios";
import { Keyboard } from "react-native";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from "@utility";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import InviteStep from "./../../components/invite/inviteStep";
import InviteCard from "./../../components/invite/inviteCard";

import InviteHeader from "./../../components/invite/inviteHeader";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { updateUserAuth } from "@redux";
import UmengAnalytics from '../../../Umeng/UmengAnalytics';
import { UserApi } from "@api";
import { UserStateType } from "@redux";


export default ({ navigation }: RootStackScreenProps<"邀请">) => {
  const { colors, textVariants, icons, spacing } = useTheme();

  const userState = useSelector<UserStateType>('userReducer');

  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();

  // ========== for analytics - start ==========
  useEffect(() => {
    UmengAnalytics.userCenterVipInviteViewsAnalytics();
  }, []);
  // ========== for analytics - end ==========

  const handleRefresh = async () => {
    setRefreshing(true);
    await refreshUserState();
    setRefreshing(false);
  };

  const refreshUserState = async () => {
    const result = await UserApi.getUserDetails();
    if (result == null) {
      return;
    }

    await dispatch(updateUserAuth(result));
    return;
  };

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title="邀请好友奖励" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor="#FAC33D" />
        }
        showsVerticalScrollIndicator={false}
      >
        {/* <TitleWithBackButtonHeader title="邀请好友奖励" /> */}
        <View style={{ paddingHorizontal: 0 }}>
          {/* top component  */}
          <InviteHeader />
          {/* content card component  */}
          <InviteCard userState={userState.user!} />
          {/* event section  */}

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("活动规则");
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  textDecorationLine: "underline",
                  color: "#ffffff",
                }}
              >
                活动规则
              </Text>
            </View>
          </TouchableOpacity>
          {/* invite step  */}
        </View>
        <InviteStep />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});
