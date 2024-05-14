export class Ads {
    ads_id: number;
    ads_slot_id: number;
    ads_name: string;
    ads_pic: string;
    ads_url: string;

    public constructor(data: {
        ads_id: number,
        ads_slot_id: number,
        ads_name: string,
        ads_pic: string,
        ads_url: string,
    }) {
        this.ads_id = data.ads_id;
        this.ads_slot_id = data.ads_slot_id;
        this.ads_name = data.ads_name;
        this.ads_pic = data.ads_pic;
        this.ads_url = data.ads_url;
    }

    public static fromJson = (json: any): Ads => {
        return new Ads({
            ads_id: json.ads_id,
            ads_slot_id: json.ads_slot_id,
            ads_name: json.ads_name,
            ads_pic: json.ads_pic,
            ads_url: json.ads_url,
        });
    }

    public static fromJsonList = (list: any[]): Ads[] => {
        if (list === null || list === undefined) return [];

        return list.map((json) => this.fromJson(json));
    }

    public static fromApiArr = (arr: any[]): Ads => {
        return new Ads({
            ads_id: arr[0],
            ads_slot_id: arr[0],
            ads_name: arr[0],
            ads_pic: arr[0],
            ads_url: arr[0],
        });
    }

    public static fromArrList = (list: any[]): Ads[] => {
        if (list === null || list === undefined) return [];

        return list.map((arr) => this.fromApiArr(arr));
    }
}