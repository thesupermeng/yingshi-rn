import { RootState } from '@redux/store';
import { CustomEventAnalytic } from '../../../Umeng/EventAnalytic';
import {
  APP_NAME_CONST,
  ADJUST_APP_KEY,
  APPSFLYER_APPID,
  APPSFLYER_DEVKEY,
  EVENT_CUSTOM_ON,
  INIT_FIREBASE,
  UMENG_CHANNEL,
  VIP_PROMOTION_COUNTDOWN_MINUTE,
  VIP_PROMOTION_INTERVEL_SECONDS,
  VIP_PROMOTION_PURCHASE_MAX,
  VIP_PROMOTION_PURCHASE_MIN,
  VIP_PROMOTION_PURCHASE_RANDOM,
} from '@utility/constants';
import { BackgroundActionEventType } from '@redux/reducers/backgroundReducer';
import AppsFlyerAnalytics from '../../../AppsFlyer/AppsFlyerAnalytic';
import appsFlyer from 'react-native-appsflyer';
import { Linking, Platform } from 'react-native';
import UmengAnalytics from '../../../Umeng/UmengAnalytics';
import messaging from "@react-native-firebase/messaging";
import { CRouter } from '../../routes/router';
import { FirebaseNotification } from '@utility/firebaseNotification';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { VodApi } from '@api';
import { playVod } from './vodActions';
import notifee, { EventType } from '@notifee/react-native';

let _firebaseNotificationForegroundListener: any = null;
let _firebaseNotificationBackgroundListener: any = null;

import { Adjust, AdjustConfig } from 'react-native-adjust';


export const onBootApp =
  ({ } = {}) =>
    async (dispatch: any, getState: () => RootState) => {
      try {
        console.log('onBootApp');
        UmengAnalytics.onBootAnalytics();

        const backgroundState = getState().backgroundReducer;

        // ========== vip promotion modal ==========
        const now = Date.now();
        const countdownMilisecond = VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000; // 60 second & 1000 milisecond

        const interval = setInterval(() => {
          console.log('COUNT INTERVAL');
          const currentPurchase =
            getState().backgroundReducer.vipPromotionPurchaseNum;
          const minuteRemain = Math.floor(
            VIP_PROMOTION_COUNTDOWN_MINUTE -
            (Date.now() -
              getState().backgroundReducer.vipPromotionCountdownStart) /
            1000 /
            60,
          ); //change to minute

          const purchaseRemain = VIP_PROMOTION_PURCHASE_MAX - currentPurchase;
          const eachRandomRange = purchaseRemain / minuteRemain;

          const random = Math.floor(Math.random() * eachRandomRange + 1);

          dispatch({
            type: BackgroundActionEventType.VIP_PROMOTION_PURCHASE_UPDATE,
            payload: currentPurchase + random,
          });
        }, VIP_PROMOTION_INTERVEL_SECONDS * 1000);

        if (
          backgroundState.vipPromotionCountdownStart === 0 ||
          now - backgroundState.vipPromotionCountdownStart > countdownMilisecond
        ) {
          const randomPurchase = Math.floor(
            Math.random() * VIP_PROMOTION_PURCHASE_RANDOM +
            VIP_PROMOTION_PURCHASE_MIN,
          );

          dispatch({
            type: BackgroundActionEventType.VIP_PROMOTION_BOOT,
            payload: {
              start: now,
              purchase: randomPurchase,
              interval: interval,
            },
          });
        } else if (
          now - backgroundState.vipPromotionCountdownStart <
          countdownMilisecond
        ) {
          dispatch({
            type: BackgroundActionEventType.VIP_PROMOTION_BOOT,
            payload: {
              interval: interval,
            },
          });
        } else {
          dispatch({
            payload: {
              interval: interval,
            },
          });
        }
        // ========== end  vip promotion modal ==========

        console.log('BackgroundActionEventType.ON_APP_BOOT');
        dispatch({
          type: BackgroundActionEventType.ON_APP_BOOT,
        });

        // ========== appsflyer event ==========
        appsFlyer.initSdk(
          {
            devKey: APPSFLYER_DEVKEY,
            isDebug: false,
            appId: APPSFLYER_APPID,
            onInstallConversionDataListener: true,
            onDeepLinkListener: true,
            timeToWaitForATTUserAuthorization: 10,
          },
          result => {
            console.log('Apps Flyer init success');
            if (Platform.OS === 'ios' && __DEV__) {
              appsFlyer.setUseReceiptValidationSandbox(true);
            }

            // because appsFlyer after init need some time
            setTimeout(() => {
              if (backgroundState.firstBoot) {
                dispatch({
                  type: BackgroundActionEventType.ON_FIRST_BOOT,
                });
                AppsFlyerAnalytics.install();
              }

              AppsFlyerAnalytics.appBoot();
            }, 2000);
          },
          error => {
            console.error(error);
          },
        );

        // ========== custom event ==========
        CustomEventAnalytic.foundLocalPush();

        // ========== adjust event ==========
        if (UMENG_CHANNEL == "HYTG001") {
          Adjust.create(new AdjustConfig(ADJUST_APP_KEY, AdjustConfig.EnvironmentProduction));
        }
        if (EVENT_CUSTOM_ON) {
          CustomEventAnalytic.start();
        }

        // ========== firebase notification ==========

        if (INIT_FIREBASE) {
          _initFirebase().then(() => {
            // use for on boot
            messaging().getInitialNotification().then((remoteMessage) => {
              // console.log('[debug]: 111', remoteMessage);
              setTimeout(() => {
                _notificationHandle(remoteMessage?.data ?? undefined, { dispatch });
              }, 500);

            });

            // use for app in foreground
            _firebaseNotificationForegroundListener = messaging().onMessage((remoteMessage) => {
              // console.log('[debug]: 222', remoteMessage);
              // custom generate notification & put data inside
              FirebaseNotification.setupLocalNotification(
                remoteMessage
              );
            });

            // use for app in background (no killed)
            _firebaseNotificationBackgroundListener = messaging().onNotificationOpenedApp((remoteMessage) => {
              // console.log('[debug]: 333', remoteMessage);
              setTimeout(() => {
                _notificationHandle(remoteMessage?.data ?? undefined, { dispatch });
              }, 500);
            });

            // notifee.getInitialNotification().then((initData) => {
            //   // console.log('[debug]: 444', initData);
            //   const data = initData?.notification?.data

            //   if (data && 'redirect_type' in data) {
            //     setTimeout(() => {
            //       _notificationHandle(data ?? undefined, { dispatch });
            //     }, 500);
            //   }
            // })

            // notifee.onForegroundEvent(({ type, detail }) => {
            //   switch (type) {
            //     case EventType.PRESS: {
            //       // console.log('[debug]: 555', detail);
            //       setTimeout(() => {
            //         _notificationHandle(detail.notification?.data ?? undefined, { dispatch });
            //       }, 500);
            //     }
            //   }
            // })

            // notifee.onBackgroundEvent(async ({ type, detail }) => {
            //   switch (type) {
            //     case EventType.PRESS: {
            //       // console.log('[debug]: 666', detail);
            //       setTimeout(() => {
            //         _notificationHandle(detail.notification?.data ?? undefined, { dispatch });
            //       }, 500);
            //     }
            //   }
            // })
          });
        }
      } catch (e) { }
    };

export const onCloseApp =
  ({ } = {}) =>
    async (dispatch: any, getState: () => RootState) => {
      try {
        const backgroundState = getState().backgroundReducer;

        // ========== custom event ==========
        CustomEventAnalytic.close();

        if (UMENG_CHANNEL == "HYTG001") {
          // ========== adjust event ==========
          Adjust.componentWillUnmount();
        }

        // ========== vip promotion modal ==========
        if (backgroundState.vipPromotionIntervel) {
          clearInterval(backgroundState.vipPromotionIntervel);
        }

        // ========== firebase notification ==========
        if (_firebaseNotificationForegroundListener) {
          _firebaseNotificationForegroundListener();
        }

        if (_firebaseNotificationBackgroundListener) {
          _firebaseNotificationBackgroundListener();
        }
      } catch (e) { }
    };

export const loginModalShown = () => ({
  type: BackgroundActionEventType.LOGIN_WARINING_MODAL_SHOWN,
});

export const vipPromotionModalShown = () => ({
  type: BackgroundActionEventType.VIP_PROMOTION_MODAL_SHOWN,
});

const _initFirebase = async () => {
  try {
    await FirebaseNotification.checkPermissionAndGetoken();

    if (__DEV__) {
      console.debug('dev')
      FirebaseNotification.subscibeToTopic("insidertestttt");
    }


    const encodedSearchTerm = encodeURIComponent(APP_NAME_CONST);

    const stagingTopic = `PRODUCTION_${encodedSearchTerm}-${Platform.OS.toUpperCase()}_${UMENG_CHANNEL}_general`;
    const stagingTopic2 = `PRODUCTION_${encodedSearchTerm}-${Platform.OS.toUpperCase()}_${UMENG_CHANNEL}_insidertest`;
    //const productionTopic = `PRODUCTION_${UMENG_CHANNEL}-${Platform.OS.toUpperCase()}_${encodedSearchTerm}_general`;

    FirebaseNotification.subscibeToTopic(stagingTopic);
    FirebaseNotification.subscibeToTopic(stagingTopic2);
    // FirebaseNotification.subscibeToTopic(productionTopic);

    console.log("订阅 firebase messaging");
    console.log(stagingTopic);
    console.log(stagingTopic2);
    //  console.log(productionTopic);
  } catch (err) {
    console.log("Firebase init failed", err);
  }
};

const _notificationHandle = (data: {
  [key: string]: string | number | object;
} | undefined, {
  dispatch
}: {
  dispatch: any,
}) => {
  console.log('333: ', data);
  if (data) {
    const type = data.redirect_type?.toString();
    const url = data.url?.toString();
    const vodId = data.vod_id?.toString();

    switch (type) {
      case '1': {
        if (url) {
          CRouter.toName("Webview", { params: { url: url } });
        }
        break;
      }
      case '2': {
        if (url) {
          InAppBrowser.open(url.toString())
            .catch((err) => console.error("Error opening URL:", err));
        }
        break;
      }
      case '3': {
        if (url) {
          Linking.openURL(url.toString())
            .catch((err) => console.error("Error opening external link:", err));
        }
        break;
      }
      case '4': {
        CRouter.toName("Home", { params: { screen: "首页" } });
        break;
      }
      case '5': {
        if (vodId) {
          VodApi.getDetail(vodId, '').then((result) => {
            dispatch(playVod(result));
            CRouter.toName("播放", { params: { vod_id: vodId } });
          });
        }
        break;
      }
    }
  }
}