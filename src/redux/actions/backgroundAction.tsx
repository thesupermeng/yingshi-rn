import { RootState } from "@redux/store";
import { CustomEventAnalytic } from "../../../Umeng/EventAnalytic";
import { APPSFLYER_APPID, APPSFLYER_DEVKEY, EVENT_CUSTOM_ON, VIP_PROMOTION_COUNTDOWN_MINUTE, VIP_PROMOTION_INTERVEL_SECONDS, VIP_PROMOTION_PURCHASE_MAX, VIP_PROMOTION_PURCHASE_MIN, VIP_PROMOTION_PURCHASE_RANDOM } from "@utility/constants";
import { BackgroundActionEventType } from "@redux/reducers/backgroundReducer";
import AppsFlyerAnalytics from "../../../AppsFlyer/AppsFlyerAnalytic";
import appsFlyer from "react-native-appsflyer";

export const onBootApp = ({

} = {}) => async (dispatch: any, getState: () => RootState) => {
    try {
        const backgroundState = getState().backgroundReducer;

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

        if (EVENT_CUSTOM_ON) {
            CustomEventAnalytic.start();
        }

        // ========== vip promotion modal ==========
        const now = Date.now();
        const countdownMilisecond = VIP_PROMOTION_COUNTDOWN_MINUTE * 60 * 1000; // 60 second & 1000 milisecond

        const interval = setInterval(() => {
            const currentPurchase = getState().backgroundReducer.vipPromotionPurchaseNum;
            const minuteRemain = Math.floor(VIP_PROMOTION_COUNTDOWN_MINUTE - ((Date.now() - getState().backgroundReducer.vipPromotionCountdownStart) / 1000 / 60)); //change to minute

            const purchaseRemain = VIP_PROMOTION_PURCHASE_MAX - currentPurchase;
            const eachRandomRange = purchaseRemain / minuteRemain;

            const random = Math.floor(Math.random() * eachRandomRange + 1);

            dispatch({
                type: BackgroundActionEventType.VIP_PROMOTION_PURCHASE_UPDATE,
                payload: currentPurchase + random,
            });

        }, VIP_PROMOTION_INTERVEL_SECONDS * 1000);

        if (backgroundState.vipPromotionCountdownStart === 0 || (now - backgroundState.vipPromotionCountdownStart) > countdownMilisecond) {
            const randomPurchase = Math.floor(Math.random() * VIP_PROMOTION_PURCHASE_RANDOM + VIP_PROMOTION_PURCHASE_MIN);

            dispatch({
                type: BackgroundActionEventType.VIP_PROMOTION_BOOT,
                payload: {
                    start: now,
                    purchase: randomPurchase,
                    interval: interval,
                }
            })
        } else if (now - backgroundState.vipPromotionCountdownStart < countdownMilisecond) {
            dispatch({
                type: BackgroundActionEventType.VIP_PROMOTION_BOOT,
                payload: {
                    interval: interval,
                }
            })
        }

    } catch (e: any) {

    }
}

export const onCloseApp = ({

} = {}) => async (dispatch: any, getState: () => RootState) => {
    try {
        const backgroundState = getState().backgroundReducer;

        // ========== custom event ==========
        CustomEventAnalytic.close();

        // ========== vip promotion modal ==========
        if (backgroundState.vipPromotionIntervel) {
            clearInterval(backgroundState.vipPromotionIntervel);
        }

    } catch (e: any) {

    }
}

export const loginModalShown = () => ({
    type: BackgroundActionEventType.LOGIN_WARINING_MODAL_SHOWN,
});

export const vipPromotionModalShown = () => ({
    type: BackgroundActionEventType.VIP_PROMOTION_MODAL_SHOWN,
});
