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

    static changeLangauge = (type: CLanguageType) => {
        this.#language = type;
    }

    static get = (key: string): string => {
        if (key in this.#langs[this.#language]) {
            return this.#langs[this.#language][key];
        }
        return '';
    }
}