import { Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import { CEndpoint, CLangKey } from "@constants";
// import { User } from "@modals";
import { CApi } from "@utility/apiService";
import { AMJ_PRODUCT_ANDROID, AMJ_PRODUCT_IOS } from "@utility/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User, Country } from "@models";
import { CLang } from "@utility/langService";


export class UserApi {
    static guestLogin = async (): Promise<User> => {
        try {
            let deviceId = await DeviceInfo.getUniqueId();

            const result = await CApi.post(CEndpoint.guestLoginApi, {
                body: {
                    device_id: deviceId,
                },
            });

            if (result.success === false) {
                throw result.message;
            }

            if (result.data && result.data.access_token) {
                await AsyncStorage.setItem("bearerToken", result.data.access_token);
                CApi.regetToken();
            }

            return User.fromJson(result.data);

        } catch (e: any) {
            console.error(`[Error guestLogin}]: ${e.toString()}`);
            throw e;
        }
    }

    static signinupUser = async ({
        loginType,
        email,
        phone,
        countryId,
        referralCode,
        otp,
        isGoogleLogin = false,
        userId,
    }: {
        loginType: 'EMAIL' | 'SMS',
        email?: string,
        phone?: string,
        countryId?: string,
        referralCode?: string,
        otp?: string,
        isGoogleLogin?: boolean,
        userId: string
    }) => {
        try {
            let platform_id;
            let deviceId = await DeviceInfo.getUniqueId();
            if (typeof deviceId !== "string") {
                deviceId = JSON.stringify(deviceId);
            }

            if (Platform.OS === "android") {
                platform_id = AMJ_PRODUCT_ANDROID;
            } else {
                platform_id = AMJ_PRODUCT_IOS;
            }

            const result = await CApi.post(CEndpoint.userPostSigninup, {
                body: {
                    request_otp_by: loginType,
                    email: email,
                    phone_number: phone?.replace(/\s/g, ''),
                    country_id: countryId,
                    device_id: deviceId,
                    referral_code: referralCode,
                    product: platform_id,
                    platform_id: platform_id,
                    otp: otp,
                    is_social_login: isGoogleLogin,
                    user_id: userId,
                },
            });

            if (result.success === false) {
                throw result;
            }

            if (result.data && result.data.access_token) {
                await AsyncStorage.setItem("bearerToken", result.data.access_token);
                CApi.regetToken();
            }

            return result;

        } catch (e: any) {
            console.error(`[Error signinupUser}]: ${e.toString()}`);
            throw e;
        }
    }

    static getUserDetails = async () => {
        try {
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

            return result.data;

        } catch (e: any) {
            console.error(`[Error getUserDetails}]: ${e.toString()}`);
            // throw e;
            return undefined;
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
                throw result;
            }

            return result.data;

        } catch (e: any) {
            console.error(`[Error updateUsername}]: ${e.toString()}`);
            throw e;
        }
    };

    static getCountries = async () => {
        try {
            const result = await CApi.get(CEndpoint.userGetCountries);

            if (result.success === false) {
                throw result.message;
            }

            if (result.data === undefined || result.data === null) {
                throw CLang.get(CLangKey.apiEmptyResponse);
            }

            return Country.fromJsonList(result.data);

        } catch (e: any) {
            console.error(`[Error getCountries}]: ${e.toString()}`);
            throw e;
        }
    }
}
