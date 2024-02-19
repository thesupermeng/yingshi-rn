import { lang as langZh } from '../utils/lang/yys_download';
import { lang as langEn } from '../utils/lang/yys_tail';


export enum ZNBRight {
    ZNBImage = 'chinese',
    ZNBCenter = 'english',
}

export class yysAnimationsMalaysia {
    static #language: ZNBRight = ZNBRight.ZNBImage;
    static #langs: { [key: string]: { [key: string]: string } } = {
        [ZNBRight.ZNBImage]: langZh,
        [ZNBRight.ZNBCenter]: langEn,
    }

    static changeLangauge = (type: ZNBRight) => {
        this.#language = type;
    }

    static get = (key: string): string => {
        if (key in this.#langs[this.#language]) {
            return this.#langs[this.#language][key];
        }
        return '';
    }
}