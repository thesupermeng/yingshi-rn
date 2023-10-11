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
import { RootStackScreenProps } from "../../types/navigationTypes";
import { useTheme } from "@react-navigation/native";
import { RootState } from "../../redux/store";

import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import axios from "axios";
import { Keyboard } from "react-native";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from "../../../src/utility/constants";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import InviteStep from "./../../components/invite/inviteStep";
import InviteCard from "./../../components/invite/inviteCard";

import InviteHeader from "./../../components/invite/inviteHeader";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { userModel } from "../../types/userType";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { updateUserAuth } from "../../redux/actions/userAction";
import { getUserDetails } from "../../features/user";
import AdsBanner from "../../ads/adsBanner";
export default ({ navigation }: RootStackScreenProps<"邀请">) => {
  const { colors, textVariants, icons, spacing } = useTheme();

  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer
  );

  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();

  const handleRefresh = async () => {
    setRefreshing(true);
    await refreshUserState();
    setRefreshing(false);
  };

  const refreshUserState = async () => {
    let result;
    result = await getUserDetails({
      bearerToken: userState.userToken,
    });
    if (result == null) {
      return;
    }
    let resultData = result.data.data;
    console.log(resultData);
    await dispatch(updateUserAuth(resultData));
    return;
  };

  return (
    <ScreenContainer>
      <AdsBanner bottomTabHeight={0} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        <TitleWithBackButtonHeader title="邀请好友奖励" />
        <View style={{ paddingHorizontal: 10 }}>
          {/* top component  */}
          <InviteHeader />
          {/* content card component  */}
          <InviteCard userState={userState} />
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
