import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
} from "react-native";
import ScreenContainer from "../../components/container/screenContainer";
import { RootStackScreenProps } from "@type/navigationTypes";
import { useTheme } from "@react-navigation/native";
import { RootState } from "@redux/store";

import TitleWithBackButtonHeader from "../../components/header/titleWithBackButtonHeader";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { userModel } from "@type/userType";
import { updateUserAuth } from "@redux/actions/userAction";
import { TouchableOpacity } from "react-native";
import NoConnection from "../../components/common/noConnection";
import FastImage from "react-native-fast-image";
import {
  IS_IOS,
} from "@utility/constants";
import { showLoginAction } from "@redux/actions/screenAction";
import { UserApi } from "@api";
import WebView from "react-native-webview";
import { YSConfig } from "../../../ysConfig";

export default ({ navigation }: RootStackScreenProps<"付费VIP">) => {
  const [isOffline, setIsOffline] = useState(false);
  const { textVariants, spacing } = useTheme();
  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer
  );

  const [loading, setIsLoading] = useState(true);
  const [isNavigated, setIsNavigated] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();
  const scrollRef = useRef<any>();

  const handleRefresh = async () => {
    setRefreshing(true);
    await refreshUserState();
    setRefreshing(false);
    scrollRef.current.scrollTo({ index: 0, animated: false });
  };

  const refreshUserState = async () => {
    const result = await UserApi.getUserDetails();
    if (result == null) {
      return;
    }

    await dispatch(updateUserAuth(result));
    return;
  };

  const checkConnection = async () => {
    const state = await NetInfo.fetch();
    const offline = !(state.isConnected && state.isInternetReachable);
    setIsOffline(offline);
    if (!offline) {
      handleRefresh();
    }
  };

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(
      (state: NetInfoState) => {
        const offline = !(
          state.isConnected &&
          (state.isInternetReachable === true ||
          state.isInternetReachable === null
            ? true
            : false)
        );
        setIsOffline(offline);
      }
    );
    return () => removeNetInfoSubscription();
  }, []);

  const webViewref = useRef<any>();
  useEffect(() => {
    webViewref.current.reload();
  },[userState.userToken]);

  const onLoadEnd = () => {
    webViewref.current.postMessage(`${userState.userToken}`);
    setIsLoading(false);
  };

  return (
    <>
      <ScreenContainer>
        <TitleWithBackButtonHeader
         title={ YSConfig.instance.showBecomeVip
          ? "成为VIP"
          : "付费VIP"}
          right={
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("VIP明细", { userState: userState });
              }}
              disabled={
                !(
                  userState.userPaidVipList.total_purchased_days > 0 ||
                  userState.userAccumulateRewardDay > 0
                )
              }
            >
              <Text
                style={{
                  ...textVariants.subBody,
                  opacity:
                    userState.userPaidVipList.total_purchased_days > 0 ||
                    userState.userAccumulateRewardDay > 0
                      ? 100
                      : 0,
                }}
              >
                VIP明细
              </Text>
            </TouchableOpacity>
          }
          onBack={() => isNavigated ? webViewref.current.goBack() : navigation.goBack()}
        />

        {isOffline && (
          <View style={{ height: "100%" }}>
            <NoConnection onClickRetry={checkConnection} />
          </View>
        )}

        {loading && !isOffline && (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(20,22,25)",
            }}
          >
            <FastImage
              source={require("@static/images/home-loading.gif")}
              style={{
                width: 150,
                height: 150,
                position: "relative",
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        )}

        {!isOffline && (
          <View style={{backgroundColor: 'rgba(20, 22, 26, 1)', flex: loading ? 0 : 1, borderColor: 'black', borderRadius: 1}}>
            <WebView
              ref={webViewref}
              style={{ backgroundColor: !isNavigated ? 'transparent' : 'white' }}
              source={{uri: 'https://www.yingshi.tv/vip'}}
              onLoadEnd={onLoadEnd}
              automaticallyAdjustContentInsets={false}
              javaScriptCanOpenWindowsAutomatically={true}
              onMessage={(e: {nativeEvent: {data?: string}}) => {
                console.log('99999', e.nativeEvent.data)
                if (e.nativeEvent.data === 'invalid credential') {
                  dispatch(showLoginAction());
                } else if (e.nativeEvent.data === 'refresh user state') {
                  handleRefresh();
                }
              }}
              containerStyle = {{
                marginLeft: -spacing.sideOffset,
                marginRight: -spacing.sideOffset,
              }}
              onNavigationStateChange={(event) => {
                console.log(event.url);
                if (event.url === 'https://www.yingshi.tv/vip') {
                  setIsNavigated(false);
                } else {
                  setIsNavigated(true);
                }
              }}
            />
          </View>
        )}
      </ScreenContainer>
    </>
  );
};
