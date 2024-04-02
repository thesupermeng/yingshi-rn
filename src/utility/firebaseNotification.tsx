// import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';
import {
  PERMISSIONS,
  request,
  requestNotifications,
} from 'react-native-permissions';
import notifee, {
  AuthorizationStatus,
  AndroidImportance,
} from '@notifee/react-native';

export class FirebaseNotification {
  static async requestPermission() {
    let isGranted;

    // if (Platform.OS === 'ios') {
    //   isGranted = await messaging().requestPermission();
    // } else {
    //   isGranted = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
    //   messaging.NotificationAndroidPriority.PRIORITY_HIGH;
    // }

    isGranted = notifee.requestPermission({
      sound: true,
      badge: true,
    });

    return isGranted;
  }

  static async checkPermissionAndGetoken() {

    return  false;
    const {authorizationStatus} = await notifee.getNotificationSettings();

    if (authorizationStatus === AuthorizationStatus.AUTHORIZED) {
      await this.getFcmToken();

      notifee.createChannel({
        importance: AndroidImportance.HIGH,
        id: 'yingshi.tv',
        name: 'yingshi.tv',
        badge: true,
      });

      return true;
    } else if (
      authorizationStatus === AuthorizationStatus.NOT_DETERMINED ||
      authorizationStatus === 0
    ) {
      const status = await this.requestPermission();

      if (status.authorizationStatus === AuthorizationStatus.AUTHORIZED) {
        await this.getFcmToken();

        notifee.createChannel({
          importance: AndroidImportance.HIGH,
          id: 'yingshi.tv',
          name: 'yingshi.tv',
          badge: true,
        });

        return true;
      } else return false;
    }
  }

  static async getFcmToken() {
    return ;
    // await messaging()
    //   .getToken()
    //   .then(token => console.log('fcm_token', token))
    //   .catch(err => console.log('get token failed', err));
  }

  static setupLocalNotification(data: any) {
    return ;
    // console.log('onForeground', data.notification);
    // const {
    //   notification: {title, body},
    // } = data;
    // notifee.displayNotification({
    //   title: title,
    //   body: body,
    //   android: {
    //     channelId: 'yingshi.tv',
    //   },
    // });
  }

  // static subscibeToTopic(topic: string) {
  //   messaging().subscribeToTopic(topic);
  // }

  // static unSubscribeFromTopic(topic: string) {
  //   messaging().unsubscribeFromTopic(topic);
  // }
}
