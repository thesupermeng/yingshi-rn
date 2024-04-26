import { lang as langZh } from '../utils/lang/wawa_weibo';
import { lang as langEn } from '../utils/lang/wawa_invite';


export enum ZWhitebell {
    ZBellreminderMovies = 'chinese',
    ZTickedShow = 'english',
}

export class wawaStation {
    static #language: ZWhitebell = ZWhitebell.ZBellreminderMovies;
    static #langs: { [key: string]: { [key: string]: string } } = {
        [ZWhitebell.ZBellreminderMovies]: langZh,
        [ZWhitebell.ZTickedShow]: langEn,
    }

    static changeLangauge = (type: ZWhitebell) => {
        this.#language = type;
    }

    static get = (key: string): string => {
        if (key in this.#langs[this.#language]) {
            return this.#langs[this.#language][key];
        }
        return '';
    }
}