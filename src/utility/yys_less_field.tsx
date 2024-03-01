import { lang as langZh } from '../utils/lang/yys_indicator';
import { lang as langEn } from '../utils/lang/yys_comment_confirmation';


export enum XQKPackage {
    XQKLauncher = 'chinese',
    XQKSide = 'english',
}

export class yys_Progress {
    static #language: XQKPackage = XQKPackage.XQKLauncher;
    static #langs: { [key: string]: { [key: string]: string } } = {
        [XQKPackage.XQKLauncher]: langZh,
        [XQKPackage.XQKSide]: langEn,
    }

    static changeLangauge = (type: XQKPackage) => {
        this.#language = type;
    }

    static get = (key: string): string => {
        if (key in this.#langs[this.#language]) {
            return this.#langs[this.#language][key];
        }
        return '';
    }
}