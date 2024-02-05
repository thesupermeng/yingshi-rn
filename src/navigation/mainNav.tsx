import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { useInfiniteQuery } from "@tanstack/react-query";
import FastImage from "../components/common/customFastImage";
import Nav from "../../src/navigation/nav";
import { EventSpash } from "../../src/navigation/eventSplash";
import NavIos from "@iosScreen/navigation/nav";

import {
  TOTAL_VIDEO_TO_DOWNLOAD,
  DOWNLOAD_WATCH_ANYTIME,
  GOOGLE_SINGIN_CLIENT_WEB,
  GOOGLE_SINGIN_CLIENT_IOS,
} from "@utility/constants";
import { YSConfig } from "../../ysConfig";
import { Platform } from "react-native";
import Api from "../../src/Sports/middleware/api";
import { Url } from "../../src/Sports/middleware/url";
import Config from "../../src/Sports/global/env";
import { AppConfig } from "../../src/Sports/global/appConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AdsBannerContextProvider } from "../contexts/AdsBannerContext";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { downloadFirstNVid } from "../utils/minivodDownloader";
import { fetchMiniVods } from "../api/miniVod";
import { AppsApi, SplashApi, UserApi } from "@api";
import { hideLoginAction } from "@redux/actions/screenAction";
import { useDispatch } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { RootState } from "@redux/store";
import { screenModel } from "@type/screenType";
import { withIAPContext } from "react-native-iap";
import DeviceInfo from "react-native-device-info";
import { userModel } from "@type/userType";
import { addUserAuthState } from "@redux/actions/userAction";
import { onBootApp, onCloseApp } from "@redux/actions/backgroundAction";

export default () => {
  const appDispatch = useAppDispatch();
  const [loadedAPI, setLoadedAPI] = useState(false);
  const [areaNavConfig, setAreaNavConfig] = useState(false);
  const [isSuper, setIsSuper] = useState(false);

  const userState: userModel = useAppSelector(
    ({ userReducer }: RootState) => userReducer
  );

  const dispatch = useDispatch();
  const isVip = useAppSelector(
    ({ userReducer }) =>
      !(
        Number(userReducer.userMemberExpired) <=
        Number(userReducer.userCurrentTimestamp) ||
        userReducer.userToken === ""
      )
  );

  const [isConnected, setIsConnected] = useState(true);

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: RootState) => screenReducer
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
      if (state.isConnected === false) setAreaNavConfig(true);
    });

    appDispatch(onBootApp());

    return () => {
      // Unsubscribe from the network status listener when the component unmounts
      unsubscribe();
      appDispatch(onCloseApp());
    };
  }, []);

  //guest login

  const guestLoginInit = async () => {
    // console.log("guestLoginInit");
    // console.log(userState.userId);
    // console.log(userState.userToken);

    if (userState.userId == "" && userState.userToken == "") {
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
        userPhoneNumber: resultData.user.user_phone,
        userMemberExpired: resultData.user.vip_end_time,
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

      // await dispatch(addUserAuthState(json));
    }
  };

  const onAppInit = async () => {
    await guestLoginInit();

    // console.log("after guestLoginInit");
    await Promise.all([AppsApi.getLocalIpAddress(), AppsApi.getBottomNav()]);

    const res = await Api.call(
      Url.getConfig,
      { channel: Config.channelId },
      "GET"
    );
    if (res.success) {
      AppConfig.instance.setConfig(res.data);
    }

    try {
      const locationResp = await AppsApi.postLocation();

      if (locationResp !== undefined && locationResp !== null) {
        if (locationResp.status == undefined || locationResp.status == null) {
          YSConfig.instance.setAreaConfig(false);
          setAreaNavConfig(false);
          setLoadedAPI(true);
        } else {
          YSConfig.instance.setAreaConfig(locationResp.status);
          setAreaNavConfig(locationResp.status);
          setLoadedAPI(true);
        }

        // y == 成为VIP
        // n == 付费购买VIP
        if (locationResp.is_become_vip == "y") {
          // sdfgh gh sdfghj
          YSConfig.instance.setShowBecomeVip(true);
        }
      } else {
        YSConfig.instance.setAreaConfig(false);
        setAreaNavConfig(false);
        setLoadedAPI(true);
      }
    } catch (e) {
      YSConfig.instance.setAreaConfig(false);
      setAreaNavConfig(false);
      setLoadedAPI(true);
    }

    //check super (profile click)
    const access = await AsyncStorage.getItem("access");
    if (access == "11111111") {
      setIsSuper(true);
      return;
    }
    if (access == "22222222") {
      setIsSuper(false);
      YSConfig.instance.setAreaConfig(false);
      setAreaNavConfig(false);
      setLoadedAPI(true);
      return;
    }
  };

  useEffect(() => {
    console.log("onAppInit");
    onAppInit();

    GoogleSignin.configure({
      webClientId: GOOGLE_SINGIN_CLIENT_WEB,
      iosClientId: GOOGLE_SINGIN_CLIENT_IOS,
      offlineAccess: true,
    });

    dispatch(hideLoginAction());
  }, []);

  const { data } = useInfiniteQuery(["watchAnytime", "normal", isVip], {
    queryFn: ({ pageParam = 1 }) =>
      fetchMiniVods(pageParam, {
        from: "api",
        isVip,
      }),
  });

  useEffect(() => {
    if (DOWNLOAD_WATCH_ANYTIME === true) {
      if (!!data) {
        const firstNVod = data.pages
          .flat(Infinity)
          .slice(0, TOTAL_VIDEO_TO_DOWNLOAD);
        downloadFirstNVid(TOTAL_VIDEO_TO_DOWNLOAD, firstNVod);
      }
    }
  }, [data, isVip]);

  return (
    <>
      {isSuper == true ? (
        <AdsBannerContextProvider>
          <Nav />
        </AdsBannerContextProvider>
      ) : (
        <>
          {loadedAPI == false && isConnected === true ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#161616",
              }}
            >
              <FastImage
                source={require("@static/images/home-loading.gif")}
                style={{
                  width: 150,
                  height: 150,
                  position: "relative",
                  bottom: 50,
                  zIndex: -1,
                }}
                resizeMode={"contain"}
                useFastImage={true}
              />
            </View>
          ) : (
            <>
              <>
                {areaNavConfig == true ? (
                  // B面的B面
                  <AdsBannerContextProvider>
                    <Nav />
                  </AdsBannerContextProvider>
                ) : (
                  <NavIos />
                )}
              </>
            </>
          )}
        </>
      )}
    </>
  );
};
