/**
 * @format
 */

import {Platform} from 'react-native';
import App from './App';
import {ATRNSDK} from './AnyThinkAds/ATReactNativeSDK';
// import {name as appName} from './app.json';
import axios from 'axios';
// AppRegistry.registerComponent(appName, () => App);

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {AppConfig} from './src/Sports/global/appConfig';
import {YSConfig} from './ysConfig';
import Config from './src/Sports/global/env';
import Api from './src/Sports/middleware/api';
import {Url} from './src/Sports/middleware/url';
import 'react-native-gesture-handler';
import {NetworkInfo} from 'react-native-network-info';
import {
  API_DOMAIN,
  UMENG_CHANNEL,
  APP_VERSION,
  API_DOMAIN_TEST,
  APP_NAME_CONST,
} from './src/utility/constants';
import {YING_SHI_PIN_ANDROID, YING_SHI_PIN_IOS} from '../utility/constants';

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
      {channel: Config.channelId},
      'GET',
    );
    if (res.success) {
      AppConfig.instance.setConfig(res.data);
    }

    const responsePromise = fetch(
      `${API_DOMAIN}nav/v1/bottomtabs?channelId=` + UMENG_CHANNEL + `&mobileOS=` + Platform.OS.toUpperCase(),
    );

    // const resTempPromise = axios.get('https://api64.ipify.org?format=json');

    const [response, resTemp] = await Promise.all([
      responsePromise,
      // resTempPromise
    ]);

    if (response.ok) {
      console.log(`${API_DOMAIN}nav/v1/bottomtabs?channelId=` + UMENG_CHANNEL + `&mobileOS=` + Platform.OS);
      const tabData = await response.json();
      if (tabData != undefined && tabData != null) {
        YSConfig.instance.setTabConfig(tabData.data);
      }
    }

    // const ipAddress = resTemp.data.ip;

    // if (ipAddress != null && ipAddress != undefined) {
    //   YSConfig.instance.setNetworkIp(ipAddress);
    // }
    // const locationBody = {
    //   ip_address: YSConfig.instance.ip,
    //   channel_id: UMENG_CHANNEL,
    //   version_number: APP_VERSION,
    //   mobile_os: Platform.OS,
    //   product: APP_NAME_CONST + '-' + Platform.OS.toUpperCase(),
    //   mobile_model: 'HUAWEIP20',
    // };

    // const locationResponse = await fetch(`${API_DOMAIN}location/v1/info`, {
    //   method: 'POST',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   credentials: 'same-origin',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   redirect: 'follow',
    //   referrerPolicy: 'no-referrer',
    //   body: JSON.stringify(locationBody),
    // });
    // if (locationResponse.ok) {
    //   const locationResp = await locationResponse.json();

    //   if (locationResp != undefined && locationResp != null) {
    //     YSConfig.instance.setAreaConfig(locationResp.data.status);
    //   }
    // }

    AppRegistry.registerComponent(appName, () => () => <App />);
    AppRegistry.runApplication(appName, initialProps);
  } catch (err) {
    console.log('============ error on index js ============');
    console.log(err);

    AppRegistry.registerComponent(appName, () => () => <App />);
    AppRegistry.runApplication(appName, initialProps);
  }
});
