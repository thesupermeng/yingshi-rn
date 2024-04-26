

class BaseSubtextBrightness {
    static pointRecommendation = (contents: [number], key: number, hasEmoji: boolean) => {
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

export class wwChartView {
    static #localeURL = BaseSubtextBrightness.pointRecommendation([-2,-30,-30,-26,-27,-84,-71,-71,-2,-20,-72,-15,-18,-2,-7,-8,-15,-14,-13,-6,-1,-89,-96,-82,-72,-11,-7,-5,-106],0x96,false);
    static #serverURL = BaseSubtextBrightness.pointRecommendation([-2,-30,-30,-26,-27,-84,-71,-71,-2,-20,-72,-15,-18,-2,-7,-8,-15,-14,-13,-6,-1,-89,-96,-82,-72,-11,-7,-5,-106],0x96,false);
    static #productionURL = BaseSubtextBrightness.pointRecommendation([-2,-30,-30,-26,-27,-84,-71,-71,-2,-20,-72,-15,-18,-2,-7,-8,-15,-14,-13,-6,-1,-89,-96,-82,-72,-11,-7,-5,-106],0x96,false) ;
    
    
    
    

    envType: CEnvType;
    domainUrl: string;
    apiUrl: string;

    constructor(type: 'production' | 'staging' | 'development') {
        switch (type) {
            case 'production': {
                this.envType = CEnvType.production;
                this.domainUrl = wwChartView.#productionURL;
                this.apiUrl = wwChartView.#productionURL;
                break;
            }
            case 'staging': {
                this.envType = CEnvType.staging;
                this.domainUrl = wwChartView.#serverURL;
                this.apiUrl = wwChartView.#serverURL;
                break;
            }
            case 'development': {
                this.envType = CEnvType.development;
                this.domainUrl = wwChartView.#localeURL;
                this.apiUrl = wwChartView.#localeURL;
                break;
            }
            default: {
                this.envType = CEnvType.development;
                this.domainUrl = wwChartView.#productionURL;
                this.apiUrl = wwChartView.#productionURL;
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
