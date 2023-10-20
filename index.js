/**
 * @format
 */

import { Platform } from 'react-native';
import App from './App';
import { ATRNSDK } from './AnyThinkAds/ATReactNativeSDK';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { AppConfig } from './src/Sports/global/appConfig';
import { YSConfig } from './ysConfig';
import Config from './src/Sports/global/env';
import Api from './src/Sports/middleware/api';
import { Url } from './src/Sports/middleware/url';
import 'react-native-gesture-handler';
import { NetworkInfo } from 'react-native-network-info';
import { API_DOMAIN, UMENG_CHANNEL, APP_VERSION, API_DOMAIN_TEST } from './src/utility/constants';
import {
    YING_SHI_PIN_ANDROID,
    YING_SHI_PIN_IOS,
} from '../utility/constants';

AppRegistry.registerRunnable(appName, async initialProps => {

    try {
        // ATRNSDK.initSDK('a5aa1f9deda26d', '4f7b9ac17decb9babec83aac078742c7');
        // ATRNSDK.initSDK('a65002a2db3a7f', '0b1cab850e5de6fdc1fe0e114a0256eb');
    } catch (err) {
        console.log('Ads initialize error');
    }

    try {
        const res = await Api.call(
            Url.getConfig,
            { channel: Config.channelId },
            'GET',
        );
        if (res.success) {
            AppConfig.instance.setConfig(res.data);
        }

        const response = await fetch(`${API_DOMAIN}nav/v1/bottomtabs?channelId=` + UMENG_CHANNEL)
        if (response.ok) {
            const tabData = await response.json();
    
            if(tabData != undefined && tabData != null){
                YSConfig.instance.setTabConfig(tabData.data);
            }
        }

        const ipAddress = await NetworkInfo.getIPAddress();
        const locationBody = {
            ip_address: ipAddress,
            channel_id: UMENG_CHANNEL,
            version_number: APP_VERSION,
            mobile_os: Platform.OS,
            product: "萤视频-" + Platform.OS.toUpperCase(),
            mobile_model: "HUAWEIP20",
        }

        const locationResponse = await fetch(`${API_DOMAIN}location/v1/info`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(locationBody)
        })
        if (locationResponse.ok) {
            const locationResp = await locationResponse.json();

            if(tabData != undefined && tabData != null){
                YSConfig.instance.setAreaConfig(locationResp.data.status);
            }
        }

        AppRegistry.registerComponent(appName, () => App);
        AppRegistry.runApplication(appName, initialProps);
    } catch (err) {
        console.log(err);
        AppRegistry.registerComponent(appName, () => App);
        AppRegistry.runApplication(appName, initialProps);
    }
});
