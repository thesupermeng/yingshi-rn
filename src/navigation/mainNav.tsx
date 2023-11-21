import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NetworkInfo } from "react-native-network-info";
import Nav from "../../src/navigation/nav";
import NavA from "../../srcA/navigation/nav";
import axios from "axios";import {
    API_DOMAIN,
    API_DOMAIN_TEST,
    API_DOMAIN_LOCAL,
    APPSFLYER_DEVKEY,
    UMENG_CHANNEL,
    APP_VERSION,
    TOPON_ANDROID_APP_KEY,
    TOPON_ANDROID_APP_ID,
    ANDROID_HOME_PAGE_BANNER_ADS,
    TOPON_IOS_APP_ID,
    TOPON_IOS_APP_KEY,
    IOS_HOME_PAGE_BANNER_ADS,
    IOS_HOME_PAGE_POP_UP_ADS,
    TOPON_BANNER_WIDTH,
    TOPON_BANNER_HEIGHT,
    ANDROID_HOME_PAGE_POP_UP_ADS,
    ANDROID_PLAY_DETAILS_BANNER_ADS,
    ANDROID_TOPIC_DETAILS_BANNER_ADS,
    ANDROID_TOPIC_TAB_BANNER_ADS,
    IOS_PLAY_DETAILS_BANNER_ADS,
    IOS_TOPIC_DETAILS_BANNER_ADS,
    IOS_TOPIC_TAB_BANNER_ADS,
    APP_NAME_CONST,
  } from "../../src/utility/constants";
import { YSConfig } from "../../ysConfig";
import { Dimensions, Platform } from "react-native";

export default () => {

    const [loadedAPI, setLoadedAPI] = useState(false);
    const [areaNavConfig, setAreaNavConfig] = useState(false);

    const getNav = async () => {
        const resTempPromise = axios.get('https://api64.ipify.org?format=json');

        const [resTemp] = await Promise.all([
            resTempPromise
        ]);

        const ipAddress = resTemp.data.ip;

        if (ipAddress != null && ipAddress != undefined) {
            YSConfig.instance.setNetworkIp(ipAddress);
        }
        const locationBody = {
            ip_address: ipAddress,
            channel_id: UMENG_CHANNEL,
            version_number: APP_VERSION,
            mobile_os: Platform.OS,
            product: APP_NAME_CONST + '-' + Platform.OS.toUpperCase(),
            mobile_model: 'HUAWEIP20',
        };

        const locationResponse = await fetch(`${API_DOMAIN}location/v1/info`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(locationBody),
        });
        if (locationResponse.ok) {
            const locationResp = await locationResponse.json();

            if (locationResp != undefined && locationResp != null) {
                YSConfig.instance.setAreaConfig(locationResp.data.status);
                setAreaNavConfig(locationResp.data.status);
            }
        }
        setLoadedAPI(true);
    }

    useEffect(() => {
        getNav();
    }, []);

    return (
        <>
            {loadedAPI == false ? (
                <View style={{ flex: 1, backgroundColor: "#161616" }}></View>
            ) : (
                <>
                    {areaNavConfig ? (
                        // B面的B面
                        <Nav />
                    ) : (
                        // B面里的A面
                        <NavA />
                    )}
                </>
            )}
        </>
    )
}