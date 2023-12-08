export interface VodType {
    vod_id: number,
    type_id: number,
    type_id_1: number,
    group_id: number,
    vod_name: string,
    vod_sub: string,
    vod_en: string,
    vod_status: string,
    vod_letter: string,
    vod_color: string,
    vod_tag: string,
    vod_class: string,
    vod_pic: string,
    vod_pic_thumb: string,
    vod_pic_slide: string,
    vod_pic_screenshot: string,
    vod_actor: string,
    vod_director: string,
    vod_writer: string,
    vod_behind: string,
    vod_blurb: string,
    vod_remarks: string,
    vod_pubdate: string,
    vod_total: number,
    vod_serial: string,
    vod_tv: string,
    vod_weekday: string,
    vod_area: string,
    vod_lang: string,
    vod_year: string,
    vod_version: string,
    vod_state: string,
    vod_author: string,
    vod_jumpurl: string,
    vod_tpl: string,
    vod_tpl_play: string,
    vod_tpl_down: string,
    vod_isend: number,
    vod_lock: number,
    vod_level: number,
    vod_copyright: number,
    vod_points: number,
    vod_points_play: number,
    vod_points_down: number,
    vod_hits: number,
    vod_hits_day: number,
    vod_hits_week: number,
    vod_hits_month: number,
    vod_duration: string,
    vod_up: number,
    vod_down: number,
    vod_score: number,
    vod_score_all: number,
    vod_score_num: number,
    vod_time: number,
    vod_time_add: number,
    vod_time_hits: number,
    vod_time_make: number,
    vod_douban_id: number,
    vod_douban_score: number,
    vod_reurl: string,
    vod_rel_vod: string,
    vod_rel_art: string,
    vod_pwd: string,
    vod_pwd_url: string,
    vod_pwd_play: string,
    vod_pwd_down_url: string,
    vod_pwd_down: string,
    vod_content: string,
    vod_play_from: string,
    vod_play_server: string,
    vod_play_note: string,
    vod_play_url: string,
    vod_down_from: string,
    vod_down_server: string,
    vod_down_note: string,
    vod_down_url: string,
    vod_plot: number,
    vod_plot_name: string,
    vod_plot_detail: string,
    type_name: string,
    vod_play_list: VodEpisodeListType,
    vod_restricted: number,
}

export interface SuggestResponseType {
    code: number
    data: SuggestResponseDataType
}

interface SuggestResponseDataType {
    Total: number
    TotalPageCount: number
    Page: number
    Limit: number
    List: SuggestedVodType[]
}

export interface SuggestedVodType extends VodType {
    vod_id: number
    type_id: number
    vod_name: string
    vod_en: string
    vod_letter: string
    vod_class: string
    vod_pic: string
    vod_blurb: string
    vod_remarks: string
    vod_area: string
    vod_lang: string
    vod_state: string
    vod_score: number
    vod_time: number
    vod_time_add: number
    vod_content: string
    vod_play_from: string
    vod_play_url: string
    vod_play_list: VodEpisodeListType
    type_name: string
}

export interface VodEpisodeListType {
    url_count: number
    urls: VodEpisodeType[]
}

export interface VodEpisodeType {
    name: string
    url: string
    from: string
    nid: number
}

export interface TypeExtendType {
    class: string
    area: string
    lang: string
    year: string
    star: string
    director: string
    state: string
    version: string
}
export interface TypeType {
    type_id: number
    type_name: string
    type_en: string
    type_sort: number
    type_mid: number
    type_pid: number
    type_status: number
    type_tpl: string
    type_tpl_list: string
    type_tpl_detail: string
    type_tpl_play: string
    type_tpl_down: string
    type_key: string
    type_des: string
    type_title: string
    type_union: string
    type_extend: TypeExtendType
    type_logo: string
    type_pic: string
    type_jumpurl: string
    childids: any
}
interface VodListType extends VodType {
    type: TypeType
}

export interface VodTopicType {
    topic_id: number
    topic_name: string
    topic_en: string
    topic_sub: string
    topic_status: number
    topic_sort: number
    topic_letter: string
    topic_color: string
    topic_tpl: string
    topic_type: string
    topic_pic: string
    topic_pic_thumb: string
    topic_pic_slide: string
    topic_key: string
    topic_des: string
    topic_title: string
    topic_blurb: string
    topic_remarks: string
    topic_level: number
    topic_up: number
    topic_down: number
    topic_score: string
    topic_score_all: number
    topic_score_num: number
    topic_hits: number
    topic_hits_day: number
    topic_hits_week: number
    topic_hits_month: number
    topic_time: string
    topic_time_add: string
    topic_tag: string
    topic_rel_vod: string
    topic_rel_art: string
    topic_content: string
    topic_extend: string
    vod_list: VodListType[]
}

export interface VodPlaylistResponseType {
    code: number
    data: {
        Page: number
        TotalPageCount: number
        Limit: number
        Total: number
        List: {
            [key: string]: VodTopicType
        }
    }

}

export type VodData = {
    vod_list: Array<VodType>
    type_name: string
    type_id: number
}

type CarouselData = {
    carousel_id: number
    carousel_name: string
    carousel_channel: number
    carousel_remarks: string
    carousel_content_type: number
    carousel_content_id: number
    carousel_pic_pc: string
    carousel_pic_mobile: string
    vod: VodType
}

export interface VodCarousellResponseType {
    data: {
        carousel: Array<CarouselData>,
        class_list: Array<string>,
        yunying: Array<VodData>,
        categories: Array<VodData>,
        live_station_list: Array<LiveTVStationItem>
    }
}

export interface MiniVideo {
    mini_video_id: number
    mini_video_aweme_id: number
    mini_video_title: string
    mini_video_author: string
    updated_time: string
    created_time: string
    mini_video_release_time: number
    mini_video_mix_id: number
    mini_video_collect_count: number
    mini_video_comment_count: number
    mini_video_total_share_count: number
    mini_video_total_like_count: number
    mini_video_tags: string
    mini_video_collection_id: number
    mini_video_duration: number
    mini_video_origin_video_url: string
    mini_video_video_url: string
    mini_video_origin_cover: string
    mini_video_cover: string
    mini_video_hashtags: string
    mini_video_play_count: number
    mini_video_size: number
    mini_video_keyword: string
}

export interface FilterOptionsResponseType {
    code: number
    data: FilterOptionsType[]
}

export interface NavOptionsResponseType {
    data: {
        id: number,
        name: string,
    }[]
}

export interface FilterOptionsType {
    type_id: number
    type_name: string
    type_en: string
    type_mid: number
    type_tpl: string
    type_tpl_list: string
    type_tpl_detail: string
    type_tpl_play: string
    type_tpl_down: string
    type_key: string
    type_des: string
    type_title: string
    type_extend: string
    type_extend_obj: FilterOptionsTypeExtendObj
}

export interface FilterOptionsTypeExtendObj {
    class: string
    area: string
    lang: string
    year: string
}

export interface LiveTVStationsResponseType{
    code: number
    data: LiveTVStationItem[]
}

export interface LiveTVStationItem {
    id: number
    live_station_name: string
    live_station_url: string
    live_station_img_url: string
}

export interface DetailTab {
    name: string,
    title: string,
    page: any
}

export interface BottomNavTabsResponse {
    data: BottomNavTabs[]
}

export interface BottomNavTabs {
    name: string,
    settings: any
}

export interface SubmitFeedbackRequest {
    email: string,
    feedback_category: number,
    feedback: string,
    platform_id: number,
    ip_address: string
}

export interface CollectionResponseType {
    code: number
    data: CollectionResponseDataType
}

export interface CollectionResponseDataType {
    Total: number
    TotalPageCount: number
    Page: number
    Limit: number
    List: MiniVideoCollectionItem[]
}

export interface MiniVideoCollectionItem {
    mini_video_id: number;
    mini_video_title: string;
    mini_video_duration: number;
    mini_video_origin_video_url: string;
    mini_video_origin_cover: string;
    mini_video_hashtags: string;
    mini_video_size: number;
    mini_video_keyword: string;
    mini_video_status: number;
    mini_video_release_time: number;
    current_episode: number;
    mini_video_collection_title: string;
}

export interface VodDetailsResponseType {
    code: number
    data: VodType[]
}

export interface CheckVersionResponseType {
    code: number
    data: CheckVersionResponseDataType
}

export interface CheckVersionResponseDataType {
    version: string
}

export interface CheckVersionRequest {
    ip_address: string,
    channel_id: string,
    version_number: string,
    product: string,
    mobile_os: string,
    mobile_model: string,
}

export interface AdultVodType {
    vod_id: number
    type_id: number
    type_id_1: number
    vod_name: string
    vod_en: string
    vod_letter: string
    vod_class: string
    vod_pic: string
    vod_pic_thumb: string
    vod_blurb: string
    vod_pubdate: string
    vod_total: number
    vod_year: number
    vod_isend: number
    vod_score: number
    vod_time: number
    vod_time_add: number
    vod_time_hits: number
    vod_content: string
    vod_play_from: string
    vod_play_url: string
    vod_play_list: VodEpisodeListType
    vod_restricted: number
}

export interface commentsResponseType {
    code: number,
    data: commentsResponseDataType,
}

export interface commentsResponseDataType {
    douban_reviews: commentsType[],
    total_review: number,
}

export interface commentsType {
    douban_reviews_id: number,
    user_name: string,
    user_review: string,
}