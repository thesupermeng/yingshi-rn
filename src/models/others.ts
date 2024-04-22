import { Carousel } from "./carousel";
import { LiveStation } from "./liveStation";
import { PlayList } from "./playlist";
import { VodPlayGroup } from "./vodPlayGroup";

export class HomePageType {
    carousel: Carousel[];
    yunying: VodPlayGroup[];
    categories: VodPlayGroup[];
    class_list: string[];
    live_station_list: LiveStation[];
    topic_list: PlayList[];

    public constructor(data: {
        carousel: any[],
        yunying: any[],
        categories: any[],
        class_list: string[],
        live_station_list: LiveStation[],
        topic_list: PlayList[],
    }) {
        this.carousel = data.carousel;
        this.yunying = data.yunying;
        this.categories = data.categories;
        this.class_list = data.class_list;
        this.live_station_list = data.live_station_list;
        this.topic_list = data.topic_list;
    }

    public static fromJson = (json: any): HomePageType => {
        return new HomePageType({
            carousel: Carousel.fromJsonList(json.carousel),
            yunying: VodPlayGroup.fromJsonList(json.yunying),
            categories: VodPlayGroup.fromJsonList(json.categories),
            class_list: json.class_list,
            live_station_list: LiveStation.fromJsonList(json.live_station_list),
            topic_list: PlayList.fromJsonList(json.topic_list),
        });
    }

    public static fromArr = (arr: any[]): HomePageType => {
        return new HomePageType({
            carousel: Carousel.fromArrList(arr[0]),
            yunying: arr[0],
            categories: arr[0],
            class_list: arr[0],
            live_station_list: LiveStation.fromArrList(arr[0]),
            topic_list: PlayList.fromArrList(arr[0]),
        });
    }
}