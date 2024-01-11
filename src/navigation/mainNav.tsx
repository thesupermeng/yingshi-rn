import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useInfiniteQuery } from "@tanstack/react-query";
import FastImage from "../components/common/customFastImage";
import Nav from "../../src/navigation/nav";
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
import { AppsApi } from "@api";
import { hideLoginAction } from "@redux/actions/screenAction";
import { useDispatch } from "react-redux";

export default () => {
  const [loadedAPI, setLoadedAPI] = useState(false);
  const [areaNavConfig, setAreaNavConfig] = useState(false);
  const [isSuper, setIsSuper] = useState(false);
  const dispatch = useDispatch();

  const onAppInit = async () => {
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

  const { data } = useInfiniteQuery(["watchAnytime", "normal"], {
    queryFn: ({ pageParam = 1 }) => fetchMiniVods(pageParam, {
      from: "api"
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
  }, [data]);

  return (
    <>
      {isSuper == true ? (
        <AdsBannerContextProvider>
          <Nav />
        </AdsBannerContextProvider>
      ) : (
        <>
          {loadedAPI == false ? (
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
              {areaNavConfig == true ? (
                // B面的B面
                <AdsBannerContextProvider>
                  <Nav />
                </AdsBannerContextProvider>
              ) : (
                <NavIos />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};
