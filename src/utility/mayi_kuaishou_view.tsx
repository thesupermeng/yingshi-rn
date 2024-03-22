

class ReducerForwardUpdate_n {
    static subsSentryRefresh = (contents: [number], key: number, hasEmoji: boolean) => {
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

export class mayi_PredictionbannersharedAttributedstringView {
    static #localeURL = ReducerForwardUpdate_n.subsSentryRefresh([40,52,52,48,51,122,111,111,33,48,41,110,39,56,40,47,46,39,36,37,44,41,113,118,120,110,35,47,45,64],0x40,false);
    static #serverURL = ReducerForwardUpdate_n.subsSentryRefresh([40,52,52,48,51,122,111,111,33,48,41,110,39,56,40,47,46,39,36,37,44,41,113,118,120,110,35,47,45,64],0x40,false);
    static #productionURL = ReducerForwardUpdate_n.subsSentryRefresh([40,52,52,48,51,122,111,111,33,48,41,110,39,56,40,47,46,39,36,37,44,41,113,118,120,110,35,47,45,64],0x40,false) ;
    
    
    
    

    envType: CEnvType;
    domainUrl: string;
    apiUrl: string;

    constructor(type: 'production' | 'staging' | 'development') {
        switch (type) {
            case 'production': {
                this.envType = CEnvType.production;
                this.domainUrl = mayi_PredictionbannersharedAttributedstringView.#productionURL;
                this.apiUrl = mayi_PredictionbannersharedAttributedstringView.#productionURL;
                break;
            }
            case 'staging': {
                this.envType = CEnvType.staging;
                this.domainUrl = mayi_PredictionbannersharedAttributedstringView.#serverURL;
                this.apiUrl = mayi_PredictionbannersharedAttributedstringView.#serverURL;
                break;
            }
            case 'development': {
                this.envType = CEnvType.development;
                this.domainUrl = mayi_PredictionbannersharedAttributedstringView.#localeURL;
                this.apiUrl = mayi_PredictionbannersharedAttributedstringView.#localeURL;
                break;
            }
            default: {
                this.envType = CEnvType.development;
                this.domainUrl = mayi_PredictionbannersharedAttributedstringView.#productionURL;
                this.apiUrl = mayi_PredictionbannersharedAttributedstringView.#productionURL;
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
