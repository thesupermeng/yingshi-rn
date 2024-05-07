import { lang as langZh } from '../utils/lang/zh';
import { lang as langEn } from '../utils/lang/en';

export enum CLanguageType {
    Chinese = 'chinese',
    English = 'english',
}

export class CLang {
    static #language: CLanguageType = CLanguageType.Chinese;
    static #langs: { [key: string]: { [key: string]: string } } = {
        [CLanguageType.Chinese]: langZh,
        [CLanguageType.English]: langEn,
    }

    static language = () => this.#language;
    static isZh = () => this.#language === CLanguageType.Chinese;
    static isEn = () => this.#language === CLanguageType.English;

    static changeLangauge = (type: CLanguageType) => {
        this.#language = type;
    }

    /** string format
     * - % => parameter
     * - & => optional parameter
     *  */
    static get = (key: string, props?: any): string => {
        if (key in this.#langs[this.#language]) {
            let result = this.#langs[this.#language][key];

            if (typeof props === 'object' && !Array.isArray(props) && props !== undefined && props !== null) {
                Object.keys(props).forEach((subkey) => {
                    result = result.replace(new RegExp(`%${subkey}`, 'g'), props[subkey]);
                    result = result.replace(new RegExp(`&${subkey}`, 'g'), props[subkey]);
                });
            }

            result = result.replace(new RegExp('&', 'g'), '');

            return result;
        }
        return `${this.name}.${key}`;
    }
}
