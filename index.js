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
    AppRegistry.registerComponent(appName, () => () => <App />);
    AppRegistry.runApplication(appName, initialProps);
  } catch (err) {
    console.log('============ error on index js ============');
    console.log(err);

    AppRegistry.registerComponent(appName, () => () => <App />);
    AppRegistry.runApplication(appName, initialProps);
  }
});
