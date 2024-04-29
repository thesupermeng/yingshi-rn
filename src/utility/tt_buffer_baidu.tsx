import { lang as langZh } from '../utils/lang/tt_current';
import { lang as langEn } from '../utils/lang/tt_updates_rules';


export enum BECSansHandler {
    BECStyleSecurity = 'chinese',
    BECZhubo = 'english',
}

export class ttUnselectedMatch {
    static #language: BECSansHandler = BECSansHandler.BECStyleSecurity;
    static #langs: { [key: string]: { [key: string]: string } } = {
        [BECSansHandler.BECStyleSecurity]: langZh,
        [BECSansHandler.BECZhubo]: langEn,
    }

    static changeLangauge = (type: BECSansHandler) => {
        this.#language = type;
    }

    static get = (key: string): string => {
        if (key in this.#langs[this.#language]) {
            return this.#langs[this.#language][key];
        }
        return '';
    }
}