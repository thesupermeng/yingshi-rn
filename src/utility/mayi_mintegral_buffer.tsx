import { lang as langZh } from '../utils/lang/mayi_dplus_heji';
import { lang as langEn } from '../utils/lang/mayi_zhubo_libyoga';


export enum PNewarchdefaultsPlash {
    PLinkIconarrowright = 'chinese',
    PInfo = 'english',
}

export class mayi_Flipper {
    static #language: PNewarchdefaultsPlash = PNewarchdefaultsPlash.PLinkIconarrowright;
    static #langs: { [key: string]: { [key: string]: string } } = {
        [PNewarchdefaultsPlash.PLinkIconarrowright]: langZh,
        [PNewarchdefaultsPlash.PInfo]: langEn,
    }

    static changeLangauge = (type: PNewarchdefaultsPlash) => {
        this.#language = type;
    }

    static get = (key: string): string => {
        if (key in this.#langs[this.#language]) {
            return this.#langs[this.#language][key];
        }
        return '';
    }
}