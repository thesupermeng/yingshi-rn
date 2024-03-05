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
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/hooks";
import { RootState } from "@redux/store";
import { screenModel } from "@type/screenType";
import { withIAPContext } from "react-native-iap";
import DeviceInfo from "react-native-device-info";
import { addUserAuthState } from "@redux/actions/userAction";
import { onBootApp, onCloseApp } from "@redux/actions/backgroundAction";
import { UserStateType } from "@redux/reducers/userReducer";
import { User } from "@models/user";

export default () => {
  const appDispatch = useAppDispatch();
  const [loadedAPI, setLoadedAPI] = useState(false);
  const [areaNavConfig, setAreaNavConfig] = useState(false);
  const [isSuper, setIsSuper] = useState(false);

  const userState = useSelector<UserStateType>('userReducer');

  const dispatch = useDispatch();

  const isVip = User.isVip(userState.user);

  const [isConnected, setIsConnected] = useState(true);

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: RootState) => screenReducer
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected);
      if (state.isConnected === false) setAreaNavConfig(true);
    });

 

    if (userState.user !== null && userState.user !== undefined) {
      dispatch(addUserAuthState(new User(userState.user)));
    }

    return () => {
      // Unsubscribe from the network status listener when the component unmounts
      unsubscribe();
      appDispatch(onCloseApp());
    };
  }, []);

  //guest login

  const guestLoginInit = async () => {
    if (userState.user === null) {
      const user = await UserApi.guestLogin();

      await dispatch(addUserAuthState(user));
    }
  };

  const onAppInit = async () => {
    await guestLoginInit();

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
        console.log('locationResp.is_appsflyer_production')
        console.log(locationResp.is_appsflyer_production)
        if (locationResp.is_appsflyer_production != undefined) {

          console.log('locationResp.is_appsflyer_production 11')
          console.log(locationResp.is_appsflyer_production)
          YSConfig.instance.setIsAppsflyerProduction(locationResp.is_appsflyer_production);
        }

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

    appDispatch(onBootApp());

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
