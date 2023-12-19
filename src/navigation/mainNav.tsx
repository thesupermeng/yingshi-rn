import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider, useInfiniteQuery } from "@tanstack/react-query";
import FastImage from "../components/common/customFastImage";
import { NetworkInfo } from "react-native-network-info";
import Nav from "../../src/navigation/nav";
import NavIos from "@iosScreen/navigation/nav";
// import NavIos from "../../srcIos/navigation/nav";
import NavA from "@androidScreen/navigation/nav";
import axios from "axios";
import {
  API_DOMAIN,
  UMENG_CHANNEL,
  APP_VERSION,
  APP_NAME_CONST,
  API_DOMAIN_TEST,
  DOWNLOAD_BATCH_SIZE,
  TOTAL_VIDEO_TO_DOWNLOAD,
  DOWNLOAD_WATCH_ANYTIME,
  GOOGLE_SINGIN_CLIENT_WEB,
  GOOGLE_SINGIN_CLIENT_IOS,
} from "@utility/constants";
import { YSConfig } from "../../ysConfig";
import { Dimensions, Platform } from "react-native";
import Api from "../../src/Sports/middleware/api";
import { Url } from "../../src/Sports/middleware/url";
import Config from "../../src/Sports/global/env";
import { AppConfig } from "../../src/Sports/global/appConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNFetchBlob from "rn-fetch-blob";
import { Toast } from "@ant-design/react-native";
import chunk from "lodash/chunk";
import { AdsBannerContextProvider } from "../contexts/AdsBannerContext";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { downloadFirstNVid } from "../utils/minivodDownloader";


export default () => {
  const [loadedAPI, setLoadedAPI] = useState(false);
  const [areaNavConfig, setAreaNavConfig] = useState(false);
  const [isSuper, setIsSuper] = useState(false);

  const getNav = async () => {
    const res = await Api.call(
      Url.getConfig,
      { channel: Config.channelId },
      "GET"
    );
    if (res.success) {
      AppConfig.instance.setConfig(res.data);
    }

    const responsePromise = fetch(
      `${API_DOMAIN}nav/v1/bottomtabs?channelId=` +
        UMENG_CHANNEL +
        `&mobileOS=` +
        Platform.OS.toUpperCase()
    );

    const resPromise = axios.get("https://geolocation-db.com/json/");

    const [response, resTemp] = await Promise.all([
      responsePromise,
      resPromise,
    ]);

    if (response.ok) {
      const tabData = await response.json();
      if (tabData != undefined && tabData != null) {
        YSConfig.instance.setTabConfig(tabData.data);
      }
    }

    const ipAddress = resTemp.data.IPv4;

    if (ipAddress != null && ipAddress != undefined) {
      YSConfig.instance.setNetworkIp(ipAddress);
    }

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

    const locationBody = {
      ip_address: ipAddress,
      channel_id: UMENG_CHANNEL,
      version_number: APP_VERSION,
      mobile_os: Platform.OS,
      product: APP_NAME_CONST + "-" + Platform.OS.toUpperCase(),
      mobile_model: "HUAWEIP20",
      // ab_switch: true
    };

    const locationResponse = await fetch(`${API_DOMAIN}location/v1/info`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationBody),
    });
    if (locationResponse.ok) {
      const locationResp = await locationResponse.json();

      if (locationResp != undefined && locationResp != null) {
        if (locationResp.data == undefined || locationResp.data == null) {
          YSConfig.instance.setAreaConfig(false);
          setAreaNavConfig(false);
          setLoadedAPI(true);
        } else {
          YSConfig.instance.setAreaConfig(locationResp.data.status);
          setAreaNavConfig(locationResp.data.status);
          setLoadedAPI(true);
        }
      } else {
        YSConfig.instance.setAreaConfig(false);
        setAreaNavConfig(false);
        setLoadedAPI(true);
      }
    } else {
      YSConfig.instance.setAreaConfig(false);
      setAreaNavConfig(false);
      setLoadedAPI(true);
    }
  };

  

  useEffect(() => {
    getNav();

    GoogleSignin.configure({
      webClientId: GOOGLE_SINGIN_CLIENT_WEB,
      iosClientId: GOOGLE_SINGIN_CLIENT_IOS,
      offlineAccess: true,
    });
  }, []);

  const {data} = useInfiniteQuery(['watchAnytime', 'normal'])
  useEffect(() => {
    if (DOWNLOAD_WATCH_ANYTIME === true){
      if (!!data){
        const firstNVod = data.pages.flat(Infinity).slice(0, TOTAL_VIDEO_TO_DOWNLOAD)
        downloadFirstNVid(TOTAL_VIDEO_TO_DOWNLOAD, firstNVod)

      }

    }
  }, [data])

  return (
    <>
      {isSuper == true ? (
        <Nav />
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
                <>
                  <AdsBannerContextProvider>
                    {Platform.OS === "ios" && <NavIos />}
                    {Platform.OS === "android" && <NavA />}
                  </AdsBannerContextProvider>
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};