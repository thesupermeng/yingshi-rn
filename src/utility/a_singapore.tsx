import { lang as langZh } from '../utils/lang/s_statistics';
import { lang as langEn } from '../utils/lang/zlo_tumbnail_lock';


export enum NIDelegate {
    NIImageSetting = 'chinese',
    NIYellowAgreement = 'english',
}

export class WAnalyticsArrow {
    static #language: NIDelegate = NIDelegate.NIImageSetting;
    static #langs: { [key: string]: { [key: string]: string } } = {
        [NIDelegate.NIImageSetting]: langZh,
        [NIDelegate.NIYellowAgreement]: langEn,
    }

    static changeLangauge = (type: NIDelegate) => {
        this.#language = type;
    }

    static get = (key: string): string => {
        if (key in this.#langs[this.#language]) {
            return this.#langs[this.#language][key];
        }
        return '';
    }
}