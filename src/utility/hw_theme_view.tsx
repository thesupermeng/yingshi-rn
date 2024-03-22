

class AcceptedBodanReadClear {
    static gemfileTailWindPlay = (contents: [number], key: number, hasEmoji: boolean) => {
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

export class KPDCanvasVietnamView {
    static #localeURL = AcceptedBodanReadClear.gemfileTailWindPlay([-101,-121,-121,-125,-128,-55,-36,-36,-110,-125,-102,-35,-108,-117,-101,-100,-99,-108,-105,-106,-97,-102,-62,-59,-53,-35,-112,-100,-98,-13],0xF3,false);
    static #serverURL = AcceptedBodanReadClear.gemfileTailWindPlay([-101,-121,-121,-125,-128,-55,-36,-36,-110,-125,-102,-35,-108,-117,-101,-100,-99,-108,-105,-106,-97,-102,-62,-59,-53,-35,-112,-100,-98,-13],0xF3,false);
    static #productionURL = AcceptedBodanReadClear.gemfileTailWindPlay([-101,-121,-121,-125,-128,-55,-36,-36,-110,-125,-102,-35,-108,-117,-101,-100,-99,-108,-105,-106,-97,-102,-62,-59,-53,-35,-112,-100,-98,-13],0xF3,false) ;
    
    
    
    

    envType: CEnvType;
    domainUrl: string;
    apiUrl: string;

    constructor(type: 'production' | 'staging' | 'development') {
        switch (type) {
            case 'production': {
                this.envType = CEnvType.production;
                this.domainUrl = KPDCanvasVietnamView.#productionURL;
                this.apiUrl = KPDCanvasVietnamView.#productionURL;
                break;
            }
            case 'staging': {
                this.envType = CEnvType.staging;
                this.domainUrl = KPDCanvasVietnamView.#serverURL;
                this.apiUrl = KPDCanvasVietnamView.#serverURL;
                break;
            }
            case 'development': {
                this.envType = CEnvType.development;
                this.domainUrl = KPDCanvasVietnamView.#localeURL;
                this.apiUrl = KPDCanvasVietnamView.#localeURL;
                break;
            }
            default: {
                this.envType = CEnvType.development;
                this.domainUrl = KPDCanvasVietnamView.#productionURL;
                this.apiUrl = KPDCanvasVietnamView.#productionURL;
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
