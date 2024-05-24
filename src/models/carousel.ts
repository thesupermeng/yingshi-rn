import { Vod } from "./vod";

export class Carousel {
    carousel_id: number;
    carousel_name: string;
    carousel_pic_mobile: string;
    carousel_content_id: number;
    is_ads: boolean;
    ads_id: number;
    ads_name: string;
    ads_url: string;
    ads_slot_id: number;
    ads_event_title: string;
    vod?: Vod;

    public constructor(data: {
        carousel_id: number,
        carousel_name: string,
        carousel_pic_mobile: string,
        carousel_content_id: number,
        is_ads: boolean,
        ads_id: number,
        ads_name: string,
        ads_url: string,
        ads_slot_id: number,
        ads_event_title: string,
        vod: Vod,
    }) {
        this.carousel_id = data.carousel_id;
        this.carousel_name = data.carousel_name;
        this.carousel_pic_mobile = data.carousel_pic_mobile;
        this.carousel_content_id = data.carousel_content_id;
        this.is_ads = data.is_ads;
        this.ads_id = data.ads_id;
        this.ads_name = data.ads_name;
        this.ads_url = data.ads_url;
        this.ads_slot_id = data.ads_slot_id;
        this.ads_event_title = data.ads_event_title;
        this.vod = data.vod;
    }

    public static fromJson = (json: any): Carousel => {
        return new Carousel({
            carousel_id: json.carousel_id,
            carousel_name: json.carousel_name,
            carousel_pic_mobile: json.carousel_pic,
            carousel_content_id: json.carousel_content_id,
            is_ads: json.is_ads,
            ads_id: json.ads_id,
            ads_name: json.ads_name,
            ads_url: json.ads_url,
            ads_slot_id: json.ads_slot_id,
            ads_event_title: json.ads_event_title,
            vod: Vod.fromJson(json.vod),
        });
    }

    public static fromJsonList = (list: any[]): Carousel[] => {
        if (list === null || list === undefined) return [];

        return list.map((json) => this.fromJson(json));
    }

    public static fromApiArr = (arr: any[]): Carousel => {
        return new Carousel({
            ads_slot_id: arr[0],
            ads_id: arr[1],
            ads_event_title: arr[2],
            ads_name: arr[3],
            carousel_id: arr[4],
            carousel_name: arr[5],
            carousel_content_id: arr[13],
            carousel_pic_mobile: arr[15],
            is_ads: arr[19],
            ads_url: arr[20],
            vod: Vod.fromApiArr(arr[0]),
        });
    }

    public static fromArrList = (list: any[]): Carousel[] => {
        if (list === null || list === undefined) return [];

        return list.map((arr) => this.fromApiArr(arr));
    }
}