export class LiveStation {
    id: number;
    live_station_name: string;
    live_station_url: string;
    live_station_img_url: string;

    public constructor(data: {
        id: number,
        live_station_name: string,
        live_station_url: string,
        live_station_img_url: string,
    }) {
        this.id = data.id;
        this.live_station_name = data.live_station_name;
        this.live_station_url = data.live_station_url;
        this.live_station_img_url = data.live_station_img_url;
    }

    public static fromJson = (json: any): LiveStation => {
        return new LiveStation({
            id: json.id,
            live_station_name: json.live_station_name,
            live_station_url: json.live_station_url,
            live_station_img_url: json.live_station_img_url,
        });
    }

    public static fromJsonList = (list: any[]): LiveStation[] => {
        if (list === null || list === undefined) return [];

        return list.map((json) => this.fromJson(json));
    }

    public static fromApiArr = (arr: any[]): LiveStation => {
        return new LiveStation({
            id: arr[0],
            live_station_name: arr[1],
            live_station_url: arr[2],
            live_station_img_url: arr[3],
        });
    }

    public static fromArrList = (list: any[]): LiveStation[] => {
        if (list === null || list === undefined) return [];

        return list.map((arr) => this.fromApiArr(arr));
    }
}