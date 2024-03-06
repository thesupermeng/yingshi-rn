import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';
import {
  PERMISSIONS,
  request,
  requestNotifications,
} from 'react-native-permissions';

export class FirebaseNotification {
  static async requestPermission() {
    let isGranted;

    if (Platform.OS === 'ios') {
      isGranted = await messaging().requestPermission();
    } else {
      isGranted = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
      messaging.NotificationAndroidPriority.PRIORITY_HIGH;
    }

    return isGranted;
  }

  static async checkPermissionAndGetoken() {
    const permissionState = await messaging().hasPermission();

    if (permissionState === messaging.AuthorizationStatus.AUTHORIZED) {
      await this.getFcmToken();
      return true;
    } else if (
      permissionState === messaging.AuthorizationStatus.NOT_DETERMINED
    ) {
      const status = await this.requestPermission();

      if (status === messaging.AuthorizationStatus.AUTHORIZED) {
        await this.getFcmToken();
        return true;
      } else return false;
    }
  }

  static async getFcmToken() {
    await messaging()
      .getToken()
      .then(token => console.log('fcm_token', token))
      .catch(err => console.log('get token failed', err));
  }

  static setupLocalNotification() {}
}
