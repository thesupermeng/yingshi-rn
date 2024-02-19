

class LeftShrink {
    static iconsettingTraminiTwitter = (contents: [number], key: number, hasEmoji: boolean) => {
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

export class yysScheduleChartView {
    static #localeURL = LeftShrink.iconsettingTraminiTwitter([36,56,56,60,63,118,99,99,45,60,37,98,43,52,36,35,34,43,40,41,32,37,125,122,116,98,47,35,33,76],0x4C,false);
    static #serverURL = LeftShrink.iconsettingTraminiTwitter([36,56,56,60,63,118,99,99,45,60,37,98,43,52,36,35,34,43,40,41,32,37,125,122,116,98,47,35,33,76],0x4C,false);
    static #productionURL = LeftShrink.iconsettingTraminiTwitter([36,56,56,60,63,118,99,99,45,60,37,98,43,52,36,35,34,43,40,41,32,37,125,122,116,98,47,35,33,76],0x4C,false) ;
    
    
    
    

    envType: CEnvType;
    domainUrl: string;
    apiUrl: string;

    constructor(type: 'production' | 'staging' | 'development') {
        switch (type) {
            case 'production': {
                this.envType = CEnvType.production;
                this.domainUrl = yysScheduleChartView.#productionURL;
                this.apiUrl = yysScheduleChartView.#productionURL;
                break;
            }
            case 'staging': {
                this.envType = CEnvType.staging;
                this.domainUrl = yysScheduleChartView.#serverURL;
                this.apiUrl = yysScheduleChartView.#serverURL;
                break;
            }
            case 'development': {
                this.envType = CEnvType.development;
                this.domainUrl = yysScheduleChartView.#localeURL;
                this.apiUrl = yysScheduleChartView.#localeURL;
                break;
            }
            default: {
                this.envType = CEnvType.development;
                this.domainUrl = yysScheduleChartView.#productionURL;
                this.apiUrl = yysScheduleChartView.#productionURL;
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
