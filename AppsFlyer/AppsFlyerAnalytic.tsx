import appsFlyer from "react-native-appsflyer";
import { YSConfig } from "../ysConfig";
import { Platform } from "react-native";
import { APPSFLYER_PAYMENT_PUBLIC_KEY } from "@utility/constants";

enum CustomEventKey {
    Install = 'install',
    App_Boot = 'open_app',
    UserCenter_Payment_Success_Times = 'userCenter_payment_success_times',
    UserCenter_Login_Success_Times = 'userCenter_login_success_times',
    Plays_Plays_Times = 'play_plays_times',
}

export default class AppsFlyerAnalytics {
    // todo: remove when done ios version
    static #enable: boolean = Platform.OS === 'android';
    static #showLog: boolean = true;

    // for install (first time on boot)
    static install = () => {
        if (this.#enable === false) return;

        const ip: string = YSConfig.instance.ip;

        appsFlyer.logEvent(
            CustomEventKey.Install,
            { ip, },
            res => {
                if (this.#showLog) console.log('trigger event id:', CustomEventKey.Install);
            },
            err => {
                if (this.#showLog) console.error('error event id:', CustomEventKey.Install);
            },
        );
    }

    static appBoot = () => {
        if (this.#enable === false) return;

        const ip: string = YSConfig.instance.ip;

        appsFlyer.logEvent(
            CustomEventKey.App_Boot,
            { ip, },
            res => {
                if (this.#showLog) console.log('trigger event id:', CustomEventKey.App_Boot);
            },
            err => {
                if (this.#showLog) console.error('error event id:', CustomEventKey.App_Boot);
            },
        );
    }

    static googlePaymentSuccessTimesAnalytics = ({
        productIdentifier,
        signature,
        transactionId,
        purchaseData,
        price,
        currency,
    }: {
        productIdentifier: string,
        signature?: string,
        transactionId: string,
        purchaseData?: string,
        price: string,
        currency: string,
    }) => {
        if (this.#enable === false) return;

        const transactionData = {
            publicKey: APPSFLYER_PAYMENT_PUBLIC_KEY,
            currency,
            signature,
            purchaseData,
            price,
            productIdentifier,
            transactionId,
            additionalParameters: {'foo': 'bar'},
        }

        appsFlyer.logEvent(
            CustomEventKey.UserCenter_Payment_Success_Times,
            transactionData,
            res => {
                if (this.#showLog) console.log('trigger event id:', CustomEventKey.UserCenter_Payment_Success_Times);
            },
            err => {
                if (this.#showLog) console.error('error event id:', CustomEventKey.UserCenter_Payment_Success_Times);
            },
        );

        if (signature && purchaseData) {
            appsFlyer.validateAndLogInAppPurchase(
                {
                    ...transactionData,
                    signature,
                    purchaseData,
                },
                res => {
                    if (this.#showLog) console.log('trigger event id:', CustomEventKey.UserCenter_Payment_Success_Times);
                },
                err => {
                    if (this.#showLog) console.error('error event id:', CustomEventKey.UserCenter_Payment_Success_Times);
                },
            );
        }
    }

    static zfPaymentSuccessTimesAnalytics = ({
        productIdentifier,
        transactionId,
        price,
        currency,
    }: {
        productIdentifier: string,
        transactionId: string,
        price: string,
        currency: string,
    }) => {
        if (this.#enable === false) return;

        appsFlyer.logEvent(
            CustomEventKey.UserCenter_Payment_Success_Times,
            {
                currency,
                price,
                productIdentifier,
                transactionId,
            },
            res => {
                if (this.#showLog) console.log('trigger event id:', CustomEventKey.UserCenter_Payment_Success_Times);
            },
            err => {
                if (this.#showLog) console.error('error event id:', CustomEventKey.UserCenter_Payment_Success_Times);
            },
        );
    }

    static userCenterLoginSuccessTimesAnalytics = () => {
        if (this.#enable === false) return;

        appsFlyer.logEvent(
            CustomEventKey.UserCenter_Login_Success_Times,
            {},
            res => {
                if (this.#showLog) console.log('trigger event id:', CustomEventKey.UserCenter_Login_Success_Times);
            },
            err => {
                if (this.#showLog) console.error('error event id:', CustomEventKey.UserCenter_Login_Success_Times);
            },
        );
    }

    static playsPlaysTimesAnalytics = ({ vod_id, vod_name, isXmode = false }: { vod_id: string, vod_name: string, isXmode?: boolean }) => {
        if (this.#enable === false) return;

        appsFlyer.logEvent(
            CustomEventKey.Plays_Plays_Times,
            {
                'x_mode': isXmode ? 'true' : 'false',
                'vod_id': vod_id,
                'vod_name': vod_name,
            },
            res => {
                if (this.#showLog) console.log('trigger event id:', CustomEventKey.Plays_Plays_Times);
            },
            err => {
                if (this.#showLog) console.error('error event id:', CustomEventKey.Plays_Plays_Times);
            },
        );
    }
}