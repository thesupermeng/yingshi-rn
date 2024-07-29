enum CEnvType { production, staging, development }

export class CEnv {
    static #localeURL = 'https://api.hongdel.top';
    static #serverURL = 'https://api.hongdel.top';
    static #productionURL = 'https://api.hongdel.top';
    
    // static #localeURL = 'https://api.gxhongdeli168.com';
    // static #serverURL = 'https://api.gxhongdeli168.com';
    // static #productionURL = 'https://api.gxhongdeli168.com' ;
    
    // static #localeURL  = 'https://testapi.yingshi.tv';
    // static #serverURL  = 'https://testapi.yingshi.tv';
    // static #productionURL = 'https://testapi.yingshi.tv';

    envType: CEnvType;
    domainUrl: string;
    apiUrl: string;

    constructor(type: 'production' | 'staging' | 'development') {
        switch (type) {
            case 'production': {
                this.envType = CEnvType.production;
                this.domainUrl = CEnv.#productionURL;
                this.apiUrl = CEnv.#productionURL;
                break;
            }
            case 'staging': {
                this.envType = CEnvType.staging;
                this.domainUrl = CEnv.#serverURL;
                this.apiUrl = CEnv.#serverURL;
                break;
            }
            case 'development': {
                this.envType = CEnvType.development;
                this.domainUrl = CEnv.#localeURL;
                this.apiUrl = CEnv.#localeURL;
                break;
            }
            default: {
                this.envType = CEnvType.development;
                this.domainUrl = CEnv.#productionURL;
                this.apiUrl = CEnv.#productionURL;
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
