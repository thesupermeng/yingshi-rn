/**
 * @format
 */

import { Platform } from 'react-native';
import App from './App';
import { ATRNSDK } from './AnyThinkAds/ATReactNativeSDK';
// import {name as appName} from './app.json';
// AppRegistry.registerComponent(appName, () => App);
import CodePush from 'react-native-code-push';
import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import { PERMISSIONS, RESULTS, request, requestNotifications } from 'react-native-permissions';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import { INIT_FIREBASE } from '@utility/constants';

AppRegistry.registerRunnable(appName, async initialProps => {
  CodePush.notifyAppReady();

  const config = {
    projectId: 'yingshitv',
    messagingSenderId: '699123886701',
  };

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
    notifee.displayNotification(remoteMessage.data);
  });

  try {
    // ATRNSDK.initSDK('a5aa1f9deda26d', '4f7b9ac17decb9babec83aac078742c7');
    // ATRNSDK.initSDK('a65002a2db3a7f', '0b1cab850e5de6fdc1fe0e114a0256eb');
  } catch (err) {
    console.log('Ads initialize error');
  }

  try {
    if (Platform.OS === 'ios') {
      request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY)
        .then(async result => {
          if (result == RESULTS.GRANTED) {
            console.log('Tracking!');
            // do something related to tracking
          } else {
            console.log('Not Tracking!');
          }
        })
        .catch(error => {
          console.log('error in request tracking permissions: ', error);
        });
    }

    // if (INIT_FIREBASE) {
    //   requestNotifications().then(({ status, settings }) => {
    //     if (status == RESULTS.GRANTED) {
    //       console.log('Notification Granted!');
    //       // do something related to tracking
    //     } else {
    //       console.log('Notification Denied!');
    //     }

    //     console.log('Notification status: ', status);
    //   })
    //     .catch(error => {
    //       console.log('error in request notification permissions: ', error);
    //     });
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
