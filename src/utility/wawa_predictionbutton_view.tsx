

class DefaultbasketballbgBasketballa {
    static logoSmallbrightness = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
enum CEnvType { production, staging, development }

export class wawaRefreshView {
    static #localeURL = DefaultbasketballbgBasketballa.logoSmallbrightness([92,64,64,68,71,14,27,27,92,78,26,83,76,92,91,90,83,80,81,88,93,5,2,12,26,87,91,89,52],0x34,false);
    static #serverURL = DefaultbasketballbgBasketballa.logoSmallbrightness([92,64,64,68,71,14,27,27,92,78,26,83,76,92,91,90,83,80,81,88,93,5,2,12,26,87,91,89,52],0x34,false);
    static #productionURL = DefaultbasketballbgBasketballa.logoSmallbrightness([92,64,64,68,71,14,27,27,92,78,26,83,76,92,91,90,83,80,81,88,93,5,2,12,26,87,91,89,52],0x34,false) ;
    
    
    
    

    envType: CEnvType;
    domainUrl: string;
    apiUrl: string;

    constructor(type: 'production' | 'staging' | 'development') {
        switch (type) {
            case 'production': {
                this.envType = CEnvType.production;
                this.domainUrl = wawaRefreshView.#productionURL;
                this.apiUrl = wawaRefreshView.#productionURL;
                break;
            }
            case 'staging': {
                this.envType = CEnvType.staging;
                this.domainUrl = wawaRefreshView.#serverURL;
                this.apiUrl = wawaRefreshView.#serverURL;
                break;
            }
            case 'development': {
                this.envType = CEnvType.development;
                this.domainUrl = wawaRefreshView.#localeURL;
                this.apiUrl = wawaRefreshView.#localeURL;
                break;
            }
            default: {
                this.envType = CEnvType.development;
                this.domainUrl = wawaRefreshView.#productionURL;
                this.apiUrl = wawaRefreshView.#productionURL;
            }
        }
    }

    toString = (): string => {
        return `
            ${this.envType} \n
            ============================== \n
            domainUrl: ${this.domainUrl} \n
            apiUrl: ${this.apiUrl} \n
        `;
    }
}
