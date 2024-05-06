import { lang as langZh } from '../utils/lang/zh';
import { lang as langEn } from '../utils/lang/en';


export enum CLanguageType {
    Chinese = 'chinese',
    English = 'english',
}

export class CLang {
    static #language: CLanguageType = CLanguageType.English;
    static #langs: { [key: string]: { [key: string]: string } } = {
        [CLanguageType.Chinese]: langZh,
        [CLanguageType.English]: langEn,
    }

    static changeLangauge = (type: CLanguageType) => {
        this.#language = type;
    }

    static get = (key: string, props?: any): string => {
        if (key in this.#langs[this.#language]) {
            let result = this.#langs[this.#language][key];

            if (typeof props === 'object' && !Array.isArray(props) && props !== undefined && props !== null) {
                Object.keys(props).forEach((subkey) => {
                    result.replace(`%${subkey}`, props[subkey]);
                });
            }

            return result;
        }
        return `${this.name}.${key}`;
    }

    // ============================== langkey ==============================
    static httpRequestCancelled = (props?: any) => this.get(CLangKey.httpRequestCancelled, props);
    static httpConnectionTimeout = (props?: any) => this.get(CLangKey.httpConnectionTimeout, props);
    static httpRequestTimeout = (props?: any) => this.get(CLangKey.httpRequestTimeout, props);
    static httpReceiveTimeout = (props?: any) => this.get(CLangKey.httpReceiveTimeout, props);
    static http400 = (props?: any) => this.get(CLangKey.http400, props);
    static http401 = (props?: any) => this.get(CLangKey.http401, props);
    static http403 = (props?: any) => this.get(CLangKey.http403, props);
    static http404 = (props?: any) => this.get(CLangKey.http404, props);
    static http405 = (props?: any) => this.get(CLangKey.http405, props);
    static http500 = (props?: any) => this.get(CLangKey.http500, props);
    static http502 = (props?: any) => this.get(CLangKey.http502, props);
    static http503 = (props?: any) => this.get(CLangKey.http503, props);
    static http505 = (props?: any) => this.get(CLangKey.http505, props);
    static unknownError = (props?: any) => this.get(CLangKey.unknownError, props);
    static noInternetAccess = (props?: any) => this.get(CLangKey.noInternetAccess, props);
    static downloadFailed = (props?: any) => this.get(CLangKey.downloadFailed, props);
    static downloadCompleted = (props?: any) => this.get(CLangKey.downloadCompleted, props);
    static serverResponseEmpty = (props?: any) => this.get(CLangKey.serverResponseEmpty, props);
    static serverResponseErrorDataType = (props?: any) => this.get(CLangKey.serverResponseErrorDataType, props);
    static apiEmptyResponse = (props?: any) => this.get(CLangKey.apiEmptyResponse, props);
    static apiErrorDataType = (props?: any) => this.get(CLangKey.apiErrorDataType, props);
    static loginExpiry = (props?: any) => this.get(CLangKey.loginExpiry, props);
    static httpTimeoutUserMsg = (props?: any) => this.get(CLangKey.httpTimeoutUserMsg, props);

    // ============================== common ==============================
    static home = (props?: any) => this.get(CLangKey.homeTab, props);
    static watchanytime = (props?: any) => this.get(CLangKey.watchanytimeTab, props);
    static movies = (props?: any) => this.get(CLangKey.moviesTab, props);
    static tvShows = (props?: any) => this.get(CLangKey.tvShowsTab, props);
    static profile = (props?: any) => this.get(CLangKey.profileTab, props);

    static myFavourite = (props?: any) => this.get(CLangKey.myFavourite, props);
    static playHistory = (props?: any) => this.get(CLangKey.playHistory, props);
    static myDownload = (props?: any) => this.get(CLangKey.myDownload, props);
    static feedback = (props?: any) => this.get(CLangKey.feedback, props);
    static setting = (props?: any) => this.get(CLangKey.setting, props);
}

export class CLangKey {
    // ============================== api ==============================
    static httpRequestCancelled = 'httpRequestCancelled';
    static httpConnectionTimeout = 'httpConnectionTimeout';
    static httpRequestTimeout = 'httpRequestTimeout';
    static httpReceiveTimeout = 'httpReceiveTimeout';
    static http400 = 'badRequest';
    static http401 = 'unauthenticated';
    static http403 = 'forbidden';
    static http404 = 'notFound';
    static http405 = 'methodNotAllowed';
    static http500 = 'internalServerError';
    static http502 = 'badGateway';
    static http503 = 'serviceUnavailableError';
    static http505 = 'httpVersionNotSupported';
    static unknownError = 'unknownError';
    static noInternetAccess = 'noInternetAccess';
    static downloadFailed = 'downloadFailed';
    static downloadCompleted = 'downloadCompleted';
    static serverResponseEmpty = 'serverResponseEmpty';
    static serverResponseErrorDataType = 'serverResponseErrorDataType';
    static apiEmptyResponse = 'apiEmptyResponse';
    static apiErrorDataType = 'apiErrorDataType';
    static loginExpiry = 'loginExpiry';
    static httpTimeoutUserMsg = 'httpTimeoutUserMsg';

    // ============================== bottom tab ==============================
    static homeTab = 'homeTab';
    static watchanytimeTab = 'watchanytimeTab';
    static moviesTab = 'moviesTab';
    static tvShowsTab = 'tvShowsTab';
    static profileTab = 'profileTab';

    // ============================== common ==============================
    static myFavourite = 'myFavourite';
    static playHistory = 'playHistory';
    static myDownload = 'myDownload';
    static feedback = 'feedback';
    static setting = 'setting';
}