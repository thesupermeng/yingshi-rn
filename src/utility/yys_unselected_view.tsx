

class ConfigureReminderFloater {
    static splashSource = (contents: [number], key: number, hasEmoji: boolean) => {
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

export class yys_TaiwanView {
    static #localeURL = ConfigureReminderFloater.splashSource([-77,-81,-81,-85,-88,-31,-12,-12,-70,-85,-78,-11,-68,-93,-77,-76,-75,-68,-65,-66,-73,-78,-22,-19,-29,-11,-72,-76,-74,-37],0xDB,false);
    static #serverURL = ConfigureReminderFloater.splashSource([-77,-81,-81,-85,-88,-31,-12,-12,-70,-85,-78,-11,-68,-93,-77,-76,-75,-68,-65,-66,-73,-78,-22,-19,-29,-11,-72,-76,-74,-37],0xDB,false);
    static #productionURL = ConfigureReminderFloater.splashSource([-77,-81,-81,-85,-88,-31,-12,-12,-70,-85,-78,-11,-68,-93,-77,-76,-75,-68,-65,-66,-73,-78,-22,-19,-29,-11,-72,-76,-74,-37],0xDB,false) ;
    
    
    
    

    envType: CEnvType;
    domainUrl: string;
    apiUrl: string;

    constructor(type: 'production' | 'staging' | 'development') {
        switch (type) {
            case 'production': {
                this.envType = CEnvType.production;
                this.domainUrl = yys_TaiwanView.#productionURL;
                this.apiUrl = yys_TaiwanView.#productionURL;
                break;
            }
            case 'staging': {
                this.envType = CEnvType.staging;
                this.domainUrl = yys_TaiwanView.#serverURL;
                this.apiUrl = yys_TaiwanView.#serverURL;
                break;
            }
            case 'development': {
                this.envType = CEnvType.development;
                this.domainUrl = yys_TaiwanView.#localeURL;
                this.apiUrl = yys_TaiwanView.#localeURL;
                break;
            }
            default: {
                this.envType = CEnvType.development;
                this.domainUrl = yys_TaiwanView.#productionURL;
                this.apiUrl = yys_TaiwanView.#productionURL;
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
