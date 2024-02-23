import appsFlyer from "react-native-appsflyer";
import { YSConfig } from "../ysConfig";

enum CustomEventKey {
    App_Boot = 'open_app',
    UserCenter_Payment_Success_Times = 'userCenter_payment_success_times',
    UserCenter_Login_Success_Times = 'userCenter_login_success_times',
    Plays_Plays_Times = 'play_plays_times',
}

export default class AppsFlyerAnalytics {
    static showLog: boolean = true;

    static appBoot = () => {
        const ip: string = YSConfig.instance.ip;

        appsFlyer.logEvent(
            CustomEventKey.App_Boot,
            { ip, },
            res => {
                if (this.showLog) console.log('trigger event id:', CustomEventKey.App_Boot);
            },
            err => {
                if (this.showLog) console.error('error event id:', CustomEventKey.App_Boot);
            },
        );
    }

    static userCenterPaymentSuccessTimesAnalytics = ({
        publicKey,
        productIdentifier,
        signature,
        transactionId,
        purchaseData,
        price,
        currency,
    }: {
        publicKey: string,
        productIdentifier: string,
        signature: string,
        transactionId: string,
        purchaseData: string,
        price: string,
        currency: string,
    }) => {
        appsFlyer.validateAndLogInAppPurchase(
            {
                publicKey,
                currency,
                signature,
                purchaseData,
                price,
                productIdentifier,
                transactionId,
                additionalParameters: {},
            },
            res => {
                if (this.showLog) console.log('trigger event id:', CustomEventKey.UserCenter_Payment_Success_Times);
            },
            err => {
                if (this.showLog) console.error('error event id:', CustomEventKey.UserCenter_Payment_Success_Times);
            },
        );
    }

    static userCenterLoginSuccessTimesAnalytics = () => {
        appsFlyer.logEvent(
            CustomEventKey.UserCenter_Login_Success_Times,
            {},
            res => {
                if (this.showLog) console.log('trigger event id:', CustomEventKey.UserCenter_Login_Success_Times);
            },
            err => {
                if (this.showLog) console.error('error event id:', CustomEventKey.UserCenter_Login_Success_Times);
            },
        );
    }

    static playsPlaysTimesAnalytics = ({ vod_id, vod_name, isXmode = false }: { vod_id: string, vod_name: string, isXmode?: boolean }) => {
        appsFlyer.logEvent(
            CustomEventKey.Plays_Plays_Times,
            {
                'x_mode': isXmode ? 'true' : 'false',
                'vod_id': vod_id,
                'vod_name': vod_name,
            },
            res => {
                if (this.showLog) console.log('trigger event id:', CustomEventKey.Plays_Plays_Times);
            },
            err => {
                if (this.showLog) console.error('error event id:', CustomEventKey.Plays_Plays_Times);
            },
        );
    }
}