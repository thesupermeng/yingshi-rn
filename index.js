/**
 * @format
 */

// import {AppRegistry} from 'react-native';
import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { AppConfig } from './src/Sports/global/appConfig';
import { YSConfig } from './ysConfig';
import Config from './src/Sports/global/env';
import Api from './src/Sports/middleware/api';
import { Url } from './src/Sports/middleware/url';
import Orientation from 'react-native-orientation-locker';
import 'react-native-gesture-handler';
import { API_DOMAIN, UMENG_CHANNEL } from './src/utility/constants';

AppRegistry.registerRunnable(appName, async initialProps => {
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

        AppRegistry.registerComponent(appName, () => App);
        AppRegistry.runApplication(appName, initialProps);
    } catch (err) {
        console.log(err);
        AppRegistry.registerComponent(appName, () => App);
        AppRegistry.runApplication(appName, initialProps);
    }
});
