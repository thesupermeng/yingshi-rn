import { lang as langZh } from '../utils/lang/zh';
import { lang as langEn } from '../utils/lang/en';
import { CLangKey } from '@constants';


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

    // ============================== bottom tab ==============================
    static homeTab = (props?: any) => this.get(CLangKey.homeTab, props);
    static watchanytimeTab = (props?: any) => this.get(CLangKey.watchanytimeTab, props);
    static vipCenterTab = (props?: any) => this.get(CLangKey.vipCenterTab, props);
    static playlistTab = (props?: any) => this.get(CLangKey.playlistTab, props);
    static moviesTab = (props?: any) => this.get(CLangKey.moviesTab, props);
    static tvShowsTab = (props?: any) => this.get(CLangKey.tvShowsTab, props);
    static profileTab = (props?: any) => this.get(CLangKey.profileTab, props);

    // ============================== common ==============================
    static myFavourite = (props?: any) => this.get(CLangKey.myFavourite, props);
    static playHistory = (props?: any) => this.get(CLangKey.playHistory, props);
    static myDownload = (props?: any) => this.get(CLangKey.myDownload, props);
    static feedback = (props?: any) => this.get(CLangKey.feedback, props);
    static setting = (props?: any) => this.get(CLangKey.setting, props);
}
