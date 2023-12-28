import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import { CEndpoint, CLangKey } from "@constants";
// import { User } from "@modals";
import { CApi } from "@utility/apiService";
import { YING_SHI_PRODUCT_ANDROID, YING_SHI_PRODUCT_IOS } from "@utility/constants";
import { CountryPhoneCodeType } from "@type/ajaxTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";


export class UserApi {
    static signinupUser = async ({
        loginType,
        email,
        phone,
        countryId,
        referralCode,
        otp,
        isGoogleLogin = false,
    }: {
        loginType: 'EMAIL' | 'SMS',
        email?: string,
        phone?: string,
        countryId?: number,
        referralCode?: string,
        otp?: string,
        isGoogleLogin?: boolean,
    }) => {
        try {
            let platform_id;
            let deviceId = await DeviceInfo.getUniqueId();
            if (typeof deviceId !== "string") {
                deviceId = JSON.stringify(deviceId);
            }

            if (Platform.OS === "android") {
                platform_id = YING_SHI_PRODUCT_ANDROID;
            } else {
                platform_id = YING_SHI_PRODUCT_IOS;
            }

            const result = await CApi.post(CEndpoint.userPostSigninup, {
                body: {
                    request_otp_by: loginType,
                    email: email,
                    phone_number: phone,
                    country_id: countryId,
                    device_id: deviceId,
                    referral_code: referralCode,
                    product: platform_id,
                    platform_id: platform_id,
                    otp: otp,
                    is_social_login: isGoogleLogin,
                },
            });

            if (result.success === false) {
                throw result.message;
            }

            if (result.data && result.data.access_token) {
                await AsyncStorage.setItem("bearerToken", result.data.access_token);
            }

            return result;

        } catch (e: any) {
            console.error(`[Error ${this.name}]: ${e.toString()}`);
            throw e;
        }
    }

    static getUserDetails = async () => {
        try {
            if (CApi.bearerToken === undefined || CApi.bearerToken === null) {
                return;
            }

            const result = await CApi.get(CEndpoint.userGetDetails);

            if (result.success === false) {
                throw result.message;
            }

            if (result.data === undefined) {
                throw CLangKey.apiEmptyResponse;
            }

            if (result.data instanceof Object === false) {
                throw CLangKey.apiErrorDataType;
            }

            if (!(result.data as Object).hasOwnProperty('user')) {
                throw CLangKey.apiEmptyResponse;
            }

            return result.data.user;

        } catch (e: any) {
            console.error(`[Error ${this.name}]: ${e.toString()}`);
            throw e;
        }
    }

    static updateUsername = async ({
        username,
        referralCode,
    }: {
        username: string,
        referralCode?: string,
    }) => {
        try {
            let body: any = {
                username: username,
            }

            if (referralCode) {
                body = {
                    ...body,
                    referral_code: referralCode,
                }
            }

            const result = await CApi.post(CEndpoint.userPostUsername, {
                body,
            });

            if (result.success === false) {
                throw result.message;
            }

            return result.data;

        } catch (e: any) {
            console.error(`[Error ${this.name}]: ${e.toString()}`);
            throw e;
        }
    };

    static getCountries = async () => {
        try {
            const result = await CApi.get(CEndpoint.userGetCountries);

            if (result.success === false) {
                throw result.message;
            }

            return result.data as CountryPhoneCodeType[];

        } catch (e: any) {
            console.error(`[Error ${this.name}]: ${e.toString()}`);
            throw e;
        }
    }
}
