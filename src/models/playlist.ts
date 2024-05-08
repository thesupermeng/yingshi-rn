import { Vod } from "./vod";

export class PlayList {
    topic_id: number;
    topic_name: string;
    topic_blurb: string;
    vod_list: Vod[];

    public constructor(data: {
        topic_id: number,
        topic_name: string,
        topic_blurb: string,
        vod_list: Vod[],
    }) {
        this.topic_id = data.topic_id;
        this.topic_name = data.topic_name;
        this.topic_blurb = data.topic_blurb;
        this.vod_list = data.vod_list;
    }

    public static fromJson = (json: any): PlayList => {
        return new PlayList({
            topic_id: json.topic_id,
            topic_name: json.topic_name,
            topic_blurb: json.topic_blurb,
            vod_list: Vod.fromJsonList(json.vod_list),
        });
    }

    public static fromJsonList = (list: any[]): PlayList[] => {
        if (list === null || list === undefined) return [];

        return list.map((json) => this.fromJson(json));
    }

    public static fromApiArr = (arr: any[]): PlayList => {
        return new PlayList({
            topic_id: arr[0],
            topic_name: arr[0],
            topic_blurb: arr[0],
            vod_list: arr[0],
        });
    }

    public static fromArrList = (list: any[]): PlayList[] => {
        if (list === null || list === undefined) return [];

        return list.map((arr) => this.fromApiArr(arr));
    }
}