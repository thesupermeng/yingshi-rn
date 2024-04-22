import { Vod } from "./vod";

export class VodPlayGroup {
    type_id?: number;
    type_name: string;
    vod_list: Vod[];

    public constructor(data: {
        type_id: number,
        type_name: string,
        vod_list: Vod[],
    }) {
        this.type_id = data.type_id;
        this.type_name = data.type_name;
        this.vod_list = data.vod_list;
    }

    public static fromJson = (json: any): VodPlayGroup => {
        return new VodPlayGroup({
            type_id: json.type_id,
            type_name: json.type_name,
            vod_list: Vod.fromJsonList(json.vod_list),
        });
    }

    public static fromJsonList = (list: any[]): VodPlayGroup[] => {
        if (list === null || list === undefined) return [];

        return list.map((json) => this.fromJson(json));
    }

    public static fromApiArr = (arr: any[]): VodPlayGroup => {
        return new VodPlayGroup({
            type_name: arr[0],
            type_id: arr[1],
            vod_list: Vod.fromArrList(arr[2]),
        });
    }

    public static fromArrList = (list: any[]): VodPlayGroup[] => {
        if (list === null || list === undefined) return [];

        return list.map((arr) => this.fromApiArr(arr));
    }
}