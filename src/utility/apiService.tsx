import axios, { AxiosInstance, AxiosResponse } from 'axios';
import DeviceInfo from 'react-native-device-info';
import { CEnv } from './env';
import { CPopup } from './popup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { YSConfig } from '../../ysConfig';
import { APP_NAME_CONST, APP_VERSION, UMENG_CHANNEL } from './constants';
import { Platform } from 'react-native';
import { CLangKey } from '@constants';

export class CApi {
    static env = new CEnv(__DEV__ ? 'development' : 'production');
    static #apiInstance: AxiosInstance | null = null;
    static bearerToken: string;

    static init = async () => {
        if (__DEV__) {
            this.env = new CEnv('development');
        } else {
            this.env = new CEnv('production');
        }

        let deviceId = await DeviceInfo.getUniqueId();
        if (typeof deviceId !== "string") {
            deviceId = JSON.stringify(deviceId);
        }

        this.#apiInstance = axios.create({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            validateStatus: function () {
                return true;
            },
        });

        this.#apiInstance.interceptors.request.use(async (config) => {
            if (this.bearerToken === undefined) {
                const token = await this.regetToken();
                if (token) this.bearerToken = token;
            }

            // check if url is our system, pass bearer token and device id
            if (config.url?.includes(this.env.apiUrl)) {
                config.headers['Authorization'] = `Bearer ${this.bearerToken}`;
                config.headers['Device-Id'] = deviceId;
                config.headers['Platform-OS'] = Platform.OS.toUpperCase();
                config.headers['App-Channel'] = UMENG_CHANNEL;
                config.headers['App-Name'] = encodeURIComponent(APP_NAME_CONST) + '-' + Platform.OS.toUpperCase();
                config.headers['IP-Address'] = this.#getIpAddress();
                config.headers['App-Version'] = APP_VERSION;
            }

            return config;
        });
    }

    static get = (endpoint: string, {
        query,
        showErrorToast = false,
        isFullUrl = false,
    }: {
        query?: { [key: string]: any },
        showErrorToast?: boolean,
        isFullUrl?: boolean,
    } = {}): Promise<ResponseModel> => {
        return this.#sendApiRequest(endpoint, {
            method: 'get',
            query,
            showErrorToast,
            isFullUrl,
        });
    }

    static post = (endpoint: string, {
        body,
        query,
        showErrorToast = false,
        isFullUrl = false,
    }: {
        body?: { [key: string]: any },
        query?: { [key: string]: any },
        showErrorToast?: boolean,
        isFullUrl?: boolean,
    } = {}): Promise<ResponseModel> => {
        return this.#sendApiRequest(endpoint, {
            method: 'post',
            body,
            query,
            showErrorToast,
            isFullUrl,
        });
    }

    static put = (endpoint: string, {
        body,
        query,
        showErrorToast = false,
        isFullUrl = false,
    }: {
        body?: { [key: string]: any },
        query?: { [key: string]: any },
        showErrorToast?: boolean,
        isFullUrl?: boolean,
    } = {}): Promise<ResponseModel> => {
        return this.#sendApiRequest(endpoint, {
            method: 'put',
            body,
            query,
            showErrorToast,
            isFullUrl,
        });
    }

    static patch = (endpoint: string, {
        body,
        query,
        showErrorToast = false,
        isFullUrl = false,
    }: {
        body?: { [key: string]: any },
        query?: { [key: string]: any },
        showErrorToast?: boolean,
        isFullUrl?: boolean,
    } = {}): Promise<ResponseModel> => {
        return this.#sendApiRequest(endpoint, {
            method: 'patch',
            body,
            query,
            showErrorToast,
            isFullUrl,
        });
    }

    static delete = (endpoint: string, {
        query,
        showErrorToast = false,
        isFullUrl = false,
    }: {
        query?: { [key: string]: any },
        showErrorToast?: boolean,
        isFullUrl?: boolean,
    } = {}): Promise<ResponseModel> => {
        return this.#sendApiRequest(endpoint, {
            method: 'delete',
            query,
            showErrorToast,
            isFullUrl,
        });
    }

    static #sendApiRequest = async (endpoint: string, {
        method = 'post',
        body,
        query,
        showErrorToast = false,
        isFullUrl = false,
    }: {
        method?: string,
        body?: { [key: string]: any },
        query?: { [key: string]: any },
        showErrorToast?: boolean,
        isFullUrl?: boolean,
    }): Promise<ResponseModel> => {
        if (this.#apiInstance === null) {
            await this.init();
        }

        const url = isFullUrl ? endpoint : `${this.env.apiUrl}/${endpoint}`;

        const retryMax = 3;
        let retry = 0
        let response: AxiosResponse;
        let result: ResponseModel = new ResponseModel({
            statusCode: 400,
            success: false,
            errors: [],
            message: "",
        });

        while(retry < retryMax) {
            retry += 1
            try {
                switch (method.toLowerCase()) {
                    case 'get':
                        {
                            response = await this.#apiInstance!.get(url, {
                                params: query,
                            });
                            break;
                        }
                    case 'put':
                        {
                            response = await this.#apiInstance!.put(url, body, {
                                params: query,
                            });
                            break;
                        }
                    case 'patch':
                        {
                            response = await this.#apiInstance!.patch(url, body, {
                                params: query,
                            });
                            break;
                        }
                    case 'delete':
                        {
                            response = await this.#apiInstance!.delete(url, {
                                params: query,
                            });
                            break;
                        }
                    case 'post':
                    default:
                        {
                            response = await this.#apiInstance!.post(url, body, {
                                params: query,
                            });
                        }
                }
            } catch(error: any) {
                result = new ResponseModel({
                    statusCode: 500,
                    success: false,
                    errors: error,
                    message: CLangKey.http500.tr(),
                });
            }

            if (400 <= result.statusCode && result.statusCode <= 599) {
                console.debug(`==>【${result.statusCode}】${url}`);
            } else {
                break;
            }
        }

        if (result.success == false && showErrorToast == true) {
            CPopup.showToast(result.message);
        }

        if (process.env.NODE_ENV !== 'production') {
            try {
                const queryString = query ? JSON.stringify(query) : '';
                const bodyString = body ? JSON.stringify(body) : '';
                const resultData:any = {};
                const resultOrig:any = result as any;
                for (const key in result) {
                    if (typeof resultOrig[key] === 'string') {
                        resultData[key] = resultOrig[key];
                    } if (typeof resultOrig[key] === 'number') {
                        resultData[key] = resultOrig[key];
                    } else if (typeof resultOrig[key] === 'object') {
                        resultData[key] = `object`;
                    }
                }
                const resultString = JSON.stringify(resultData);
                console.debug(`==>【${method.toUpperCase()}】${endpoint} ${queryString} ${bodyString}`);
                console.debug(`==> ${resultString}`);
            } catch (error) {
                console.debug(`==>【${method.toUpperCase()}】${endpoint} ${query ?? ''} ${body ?? ''}`);
            }
        }
        return result;
    }

    static #responseHandle = async (response: AxiosResponse, { isFullUrl = false }: { isFullUrl?: boolean, }): Promise<ResponseModel> => {
        const responseBody: any = response.data;
        let result: { [key: string]: any } | undefined;
        let checker: Object | undefined;

        if (responseBody instanceof Object && !Array.isArray(responseBody)) {
            result = responseBody;
            checker = result as Object;
        }

        switch (response.status) {
            case 400:
                return new ResponseModel({
                    statusCode: response.status,
                    success: false,
                    errors: result?.errors,
                    message: result?.message ?? CLangKey.http400.tr(),
                });
            case 401:
                return new ResponseModel({
                    statusCode: response.status,
                    success: false,
                    errors: result?.errors,
                    message: result?.message ?? CLangKey.http401.tr(),
                });
            case 403:
                return new ResponseModel({
                    statusCode: response.status,
                    success: false,
                    errors: result?.errors,
                    message: result?.message ?? CLangKey.http403.tr(),
                });
            case 404:
                return new ResponseModel({
                    statusCode: response.status,
                    success: false,
                    errors: result?.errors,
                    message: result?.message ?? CLangKey.http404.tr(),
                });
            case 405:
                return new ResponseModel({
                    statusCode: response.status,
                    success: false,
                    errors: result?.errors,
                    message: result?.message ?? CLangKey.http405.tr(),
                });
            case 500:
                return new ResponseModel({
                    statusCode: response.status,
                    success: false,
                    errors: result?.errors,
                    message: result?.message ?? CLangKey.http500.tr(),
                });
            case 502:
                return new ResponseModel({
                    statusCode: response.status,
                    success: false,
                    errors: result?.errors,
                    message: result?.message ?? CLangKey.http502.tr(),
                });
            case 503:
                return new ResponseModel({
                    statusCode: response.status,
                    success: false,
                    errors: result?.errors,
                    message: result?.message ?? CLangKey.http503.tr(),
                });
            case 505:
                return new ResponseModel({
                    statusCode: response.status,
                    success: false,
                    errors: result?.errors,
                    message: result?.message ?? CLangKey.http505.tr(),
                });
            default:
                if (400 <= response.status && response.status <= 599) {
                    if (result !== undefined &&
                        checker!.hasOwnProperty('code') &&
                        result['code'] === -1
                    ) {
                        return new ResponseModel({
                            statusCode: response.status ?? 400,
                            success: false,
                            message: result?.message ?? '',
                            data: result?.data,
                            errors: result?.errors,
                        });
                    }
                }
        }

        if (result !== undefined && checker!.hasOwnProperty('data')) {
            return new ResponseModel({
                statusCode: response.status ?? 200,
                success: true,
                message: result?.message ?? '',
                data: result?.data,
            });
        }

        if (result !== undefined && isFullUrl) {
            return new ResponseModel({
                statusCode: response.status ?? 200,
                success: true,
                message: '',
                data: result,
            });
        }

        return new ResponseModel({
            statusCode: response.status ?? 200,
            success: true,
            message: result?.message ?? '',
        });
    }

    static regetToken = async (): Promise<string | null> => {
        this.bearerToken = await AsyncStorage.getItem("bearerToken") ?? '';
        return this.bearerToken;
    }

    static #getIpAddress = (): string => {
        return YSConfig.instance.ip;
    }
}

class ResponseModel {
    statusCode: number;
    data: undefined | any | any[];
    errors: undefined | any | any[];
    success: boolean;
    message: string;

    constructor({
        statusCode,
        data,
        errors,
        success = true,
        message = '',
    }: {
        statusCode: number,
        data?: { [key: string]: any } | { [key: string]: any }[],
        errors?: { [key: string]: any } | { [key: string]: any }[],
        success?: boolean,
        message?: string,
    }) {
        this.statusCode = statusCode;
        this.data = data;
        this.errors = errors;
        this.success = success;
        this.message = message;
    }
}
