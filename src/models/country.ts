export class Country {
    country_id: string;
    country_name: string;
    country_iso3: string;
    country_phonecode: string;
    country_flag: string;

    public constructor(data: {
        country_id: string,
        country_name: string,
        country_iso3: string,
        country_phonecode: string,
        country_flag: string,
    }) {
        this.country_id = data.country_id;
        this.country_name = data.country_name;
        this.country_iso3 = data.country_iso3;
        this.country_phonecode = data.country_phonecode;
        this.country_flag = data.country_flag;
    }

    public static fromJson = (json: any): Country => {
        return new Country({
            country_id: json.country_id,
            country_name: json.country_name,
            country_iso3: json.country_iso3,
            country_phonecode: json.country_phonecode,
            country_flag: json.country_flag,
        });
    }

    public static fromJsonList = (list: any[]): Country[] => {
        return list.map((json) => this.fromJson(json));
    }

    public static fromApiArr = (arr: any[]): Country => {
        return new Country({
            country_id: arr[0],
            country_name: arr[0],
            country_iso3: arr[0],
            country_phonecode: arr[0],
            country_flag: arr[0],
        });
    }

    public static fromArrList = (list: any[]): Country[] => {
        return list.map((arr) => this.fromApiArr(arr));
    }
}