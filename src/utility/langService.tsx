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
                    result = result.replace(`%${subkey}`, props[subkey]);
                });
            }

            return result;
        }
        return `${this.name}.${key}`;
    }
}
