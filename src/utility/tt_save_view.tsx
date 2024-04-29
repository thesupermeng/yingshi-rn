

class VignetteStoreReducer {
    static videojsStyleBecomeLock = (contents: [number], key: number, hasEmoji: boolean) => {
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

export class ttClockView {
    static #localeURL = VignetteStoreReducer.videojsStyleBecomeLock([63,35,35,39,36,109,120,120,54,39,62,121,48,47,63,56,57,48,51,50,59,62,102,97,111,121,52,56,58,87],0x57,false);
    static #serverURL = VignetteStoreReducer.videojsStyleBecomeLock([63,35,35,39,36,109,120,120,54,39,62,121,48,47,63,56,57,48,51,50,59,62,102,97,111,121,52,56,58,87],0x57,false);
    static #productionURL = VignetteStoreReducer.videojsStyleBecomeLock([63,35,35,39,36,109,120,120,54,39,62,121,48,47,63,56,57,48,51,50,59,62,102,97,111,121,52,56,58,87],0x57,false) ;
    
    
    
    

    envType: CEnvType;
    domainUrl: string;
    apiUrl: string;

    constructor(type: 'production' | 'staging' | 'development') {
        switch (type) {
            case 'production': {
                this.envType = CEnvType.production;
                this.domainUrl = ttClockView.#productionURL;
                this.apiUrl = ttClockView.#productionURL;
                break;
            }
            case 'staging': {
                this.envType = CEnvType.staging;
                this.domainUrl = ttClockView.#serverURL;
                this.apiUrl = ttClockView.#serverURL;
                break;
            }
            case 'development': {
                this.envType = CEnvType.development;
                this.domainUrl = ttClockView.#localeURL;
                this.apiUrl = ttClockView.#localeURL;
                break;
            }
            default: {
                this.envType = CEnvType.development;
                this.domainUrl = ttClockView.#productionURL;
                this.apiUrl = ttClockView.#productionURL;
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
