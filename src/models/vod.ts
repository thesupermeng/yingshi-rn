export class Vod {
    vod_id: number;
    vod_name: string;
    vod_pic: string;
    vod_pic_list: string[];
    vod_remarks: string;
    type_id: number;
    vod_class: string;

    public constructor(data: {
        vod_id: number,
        vod_name: string,
        vod_pic: string,
        vod_pic_list: string[],
        vod_remarks: string,
        type_id: number,
        vod_class: string,
    }) {
        this.vod_id = data.vod_id;
        this.vod_name = data.vod_name;
        this.vod_pic = data.vod_pic;
        this.vod_pic_list = data.vod_pic_list;
        this.vod_remarks = data.vod_remarks;
        this.type_id = data.type_id;
        this.vod_class = data.vod_class;
    }

    public static fromJson = (json: any): Vod => {
        return new Vod({
            vod_id: json.vod_id,
            vod_name: json.vod_name,
            vod_pic: json.vod_pic,
            vod_pic_list: json.vod_pic_list,
            vod_remarks: json.vod_remarks,
            type_id: json.type_id,
            vod_class: json.vod_class,
        });
    }

    public static fromJsonList = (list: any[]): Vod[] => {
        return list.map((json) => this.fromJson(json));
    }

    public static fromApiArr = (arr: any[]): Vod => {
        return new Vod({
            vod_id: arr[0],
            vod_name: arr[0],
            vod_pic: arr[0],
            vod_pic_list: arr[0],
            vod_remarks: arr[0],
            type_id: arr[0],
            vod_class: arr[0],
        });
    }

    public static fromArrList = (list: any[]): Vod[] => {
        return list.map((arr) => this.fromApiArr(arr));
    }
}