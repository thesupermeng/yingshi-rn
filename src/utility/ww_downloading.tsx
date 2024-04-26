import { lang as langZh } from '../utils/lang/ww_project_share';
import { lang as langEn } from '../utils/lang/ww_minivod_imagemanager';


export enum KKsad {
    KShrinkCanvas = 'chinese',
    KLibfabricjniNeon = 'english',
}

export class wwSource {
    static #language: KKsad = KKsad.KShrinkCanvas;
    static #langs: { [key: string]: { [key: string]: string } } = {
        [KKsad.KShrinkCanvas]: langZh,
        [KKsad.KLibfabricjniNeon]: langEn,
    }

    static changeLangauge = (type: KKsad) => {
        this.#language = type;
    }

    static get = (key: string): string => {
        if (key in this.#langs[this.#language]) {
            return this.#langs[this.#language][key];
        }
        return '';
    }
}