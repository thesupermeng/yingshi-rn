import { CommentsType } from "@type/ajaxTypes";

export class Vod {
    vod_id: number;
    vod_name: string;
    vod_pic: string;
    vod_pic_list: string[];
    vod_pic_slide: string;
    vod_remarks: string;
    vod_class: string;
    vod_actor: string;
    vod_director: string;
    vod_area: string;
    vod_year: string;
    vod_author: string;
    vod_time_add: number;
    vod_douban_id: number;
    vod_content: string;
    vod_play_url: string;
    vod_play_list: VodEpisodeGroup;
    vod_restricted: number;
    vod_sources: VodSource[];
    vod_source_name: string;
    type_id: number;
    type_name: string;
    preferred_source_id: number;
    score?: number;
    douban_reviews: CommentsType[];
    url_header?: {
        Referer?: string,
        Origin?: string,
    };

    public constructor(data: {
        vod_id: number,
        vod_name: string,
        vod_pic: string,
        vod_pic_list: string[],
        vod_pic_slide: string,
        vod_remarks: string,
        vod_class: string,
        vod_actor: string,
        vod_director: string,
        vod_area: string,
        vod_year: string,
        vod_author: string,
        vod_time_add: number,
        vod_douban_id: number,
        vod_content: string,
        vod_play_url: string,
        vod_play_list: VodEpisodeGroup,
        vod_restricted: number,
        vod_sources: VodSource[],
        vod_source_name: string,
        type_id: number,
        type_name: string,
        preferred_source_id: number,
        score?: number,
        douban_reviews: CommentsType[],
        url_header?: {
            Referer?: string,
            Origin?: string,
        },
    }) {
        this.vod_id = data.vod_id;
        this.vod_name = data.vod_name;
        this.vod_pic = data.vod_pic;
        this.vod_pic_list = data.vod_pic_list;
        this.vod_pic_slide = data.vod_pic_slide;
        this.vod_remarks = data.vod_remarks ?? '';
        this.vod_class = data.vod_class ?? '';
        this.vod_actor = data.vod_actor;
        this.vod_director = data.vod_director;
        this.vod_area = data.vod_area;
        this.vod_year = data.vod_year;
        this.vod_author = data.vod_author;
        this.vod_time_add = data.vod_time_add;
        this.vod_douban_id = data.vod_douban_id;
        this.vod_content = data.vod_content;
        this.vod_play_url = data.vod_play_url;
        this.vod_play_list = data.vod_play_list;
        this.vod_restricted = data.vod_restricted;
        this.vod_sources = data.vod_sources;
        this.vod_source_name = data.vod_source_name;
        this.type_id = data.type_id;
        this.type_name = data.type_name;
        this.preferred_source_id = data.preferred_source_id;
        this.score = data.score;
        this.douban_reviews = data.douban_reviews;
        this.url_header = data.url_header;
    }

    public static fromJson = (json: any): Vod => {
        return new Vod({
            vod_id: json.vod_id,
            vod_name: json.vod_name,
            vod_pic: json.vod_pic,
            vod_pic_list: json.vod_pic_list,
            vod_pic_slide: json.vod_pic_slide,
            vod_remarks: json.vod_remarks ?? '',
            vod_class: json.vod_genre ?? '',
            vod_actor: json.vod_actors,
            vod_director: json.vod_director,
            vod_area: json.vod_country,
            vod_year: json.vod_release,
            vod_author: json.vod_author,
            vod_time_add: json.vod_time_add,
            vod_douban_id: json.vod_douban_id,
            vod_content: json.vod_content,
            vod_play_url: json.vod_play_url,
            vod_play_list: VodEpisodeGroup.fromJson(json.vod_play_list),
            vod_restricted: json.vod_restricted,
            vod_sources: VodSource.fromJsonList(json.vod_sources),
            vod_source_name: json.vod_source_name,
            type_id: json.type_id,
            type_name: json.type_name,
            preferred_source_id: json.preferred_source_id,
            score: json.vod_imdb,
            douban_reviews: json.douban_reviews,
            url_header: json.header,
        });
    }

    public static fromJsonList = (list: any[]): Vod[] => {
        if (list === null || list === undefined) return [];

        return list.map((json) => this.fromJson(json));
    }

    public static fromApiArr = (arr: any[]): Vod => {
        return new Vod({
            vod_id: arr[0],
            vod_name: arr[0],
            vod_pic: arr[0],
            vod_pic_list: arr[0],
            vod_pic_slide: arr[0],
            vod_remarks: arr[0],
            vod_class: arr[0],
            vod_actor: arr[0],
            vod_director: arr[0],
            vod_area: arr[0],
            vod_year: arr[0],
            vod_author: arr[0],
            vod_time_add: arr[0],
            vod_douban_id: arr[0],
            vod_content: arr[0],
            vod_play_url: arr[0],
            vod_play_list: arr[0],
            vod_restricted: arr[0],
            vod_sources: arr[0],
            vod_source_name: arr[0],
            type_id: arr[0],
            type_name: arr[0],
            preferred_source_id: arr[0],
            score: arr[0],
            douban_reviews: arr[0],
            url_header: arr[0],
        });
    }

    public static fromArrList = (list: any[]): Vod[] => {
        if (list === null || list === undefined) return [];

        return list.map((arr) => this.fromApiArr(arr));
    }
}

export class VodSource {
    source_id: number;
    source_name: string;
    source_url: string;
    vod_play_list: VodEpisodeGroup;

    public constructor(data: {
        source_id: number,
        source_name: string,
        source_url: string,
        vod_play_list: VodEpisodeGroup,
    }) {
        this.source_id = data.source_id;
        this.source_name = data.source_name;
        this.source_url = data.source_url;
        this.vod_play_list = data.vod_play_list;
    }

    public static fromJson = (json: any): VodSource => {
        return new VodSource({
            source_id: json.source_id,
            source_name: json.source_name,
            source_url: json.source_url,
            vod_play_list: VodEpisodeGroup.fromJson(json.vod_play_list),
        });
    }

    public static fromJsonList = (list: any[]): VodSource[] => {
        if (list === null || list === undefined) return [];

        return list.map((json) => this.fromJson(json));
    }
}

export class VodEpisodeGroup {
    url_count: number;
    urls: VodEpisode[];

    public constructor(data: {
        url_count: number,
        urls: VodEpisode[],
    }) {
        this.url_count = data.url_count;
        this.urls = data.urls;
    }

    public static fromJson = (json: any): VodEpisodeGroup => {
        return new VodEpisodeGroup({
            url_count: json?.url_count ?? 0,
            urls: VodEpisode.fromJsonList(json?.urls),
        });
    }
}

export class VodEpisode {
    name: string;
    url: string;
    from: string;
    nid: number;

    public constructor(data: {
        name: string,
        url: string,
        from: string,
        nid: number,
    }) {
        this.name = data.name;
        this.url = data.url;
        this.from = data.from;
        this.nid = data.nid;
    }

    public static fromJson = (json: any): VodEpisode => {
        return new VodEpisode({
            name: json.name,
            url: json.url,
            from: json.from,
            nid: json.nid,
        });
    }

    public static fromJsonList = (list: any[]): VodEpisode[] => {
        if (list === null || list === undefined) return [];

        return list.map((json) => this.fromJson(json));
    }
}

export class XVodCategory {
    id: number;
    category_name: string;

    public constructor(data: {
        id: number,
        category_name: string,
    }) {
        this.id = data.id;
        this.category_name = data.category_name;
    }

    public static fromJson = (json: any): XVodCategory => {
        return new XVodCategory({
            id: json.id,
            category_name: json.category_name,
        });
    }

    public static fromJsonList = (list: any[]): XVodCategory[] => {
        if (list === null || list === undefined) return [];

        return list.map((json) => this.fromJson(json));
    }
}