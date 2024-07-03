import { Asset } from "react-native-image-picker"

export type PaggingResponseType<T> = {
    Page: number
    TotalPageCount: number
    Limit: number
    yys_Latn: number
    List: T
}

export type PaggingResponseTypeWithNonVip<T> = {
    NonVIPList: T
} & PaggingResponseType<T>

export type yys_Executor = {
    id: number,
    name: string,
}

export type yys_NotificationGray = {
    carousel: Array<yys_FloatingTail>,
    class_list: Array<string>,
    yunying: Array<yys_Encrypt>,
    categories: Array<yys_Encrypt>,
    live_station_list: Array<yys_StyleItem>
    yugaopian_list: Array<yys_Encrypt>
}

export type yys_Anythink = PaggingResponseType<{
    [key: string]: yys_BrightnessCopy
}>

export type yys_SuccessPolicy = PaggingResponseType<yys_ActivityTumbnail[]>
export type yys_ConfigFound = PaggingResponseType<yys_Libavcodec[]>
export type yys_TempStats = PaggingResponseTypeWithNonVip<yys_ScrollviewPangle[]>
export type yys_Libfabricjni = PaggingResponseType<yys_ThemeItem[]>

export interface yys_Bing {
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
    vod_pic_list: string[],
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
    vod_play_list: yys_Libreact,
    vod_restricted: number,
    vod_sources: yys_Gemfile[],
    preferred_source_id: number
}

export interface yys_ActivityTumbnail extends yys_Bing {
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
    vod_play_list: yys_Libreact
    type_name: string
}

export interface yys_Libreact {
    url_count: number
    urls: yys_GdtadvRoboto[]
}

export interface yys_Gemfile {
    source_id: number
    source_name: string
    source_url: string
    vod_play_list: yys_Libreact
}

export interface yys_GdtadvRoboto {
    name: string
    url: string
    from: string
    nid: number
}

export interface yys_Step extends yys_GdtadvRoboto {
    isDownloading: boolean
    isDownloaded: boolean
    progress: yys_Stations
}

export interface yys_Stations {
    percentage: number
    bytes: number
}

export interface yys_PromotionPause {
    class: string
    area: string
    lang: string
    year: string
    star: string
    director: string
    state: string
    version: string
}
export interface yys_CircleFile {
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
    type_extend: yys_PromotionPause
    type_logo: string
    type_pic: string
    type_jumpurl: string
    childids: any
}
interface yys_Animation extends yys_Bing {
    type: yys_CircleFile
}

export interface yys_BrightnessCopy {
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
    vod_list: yys_Animation[]
}

export type yys_Encrypt = {
    vod_list: Array<yys_Bing>
    type_name: string
    type_id: number
}

type yys_FloatingTail = {
    carousel_id: number
    carousel_name: string
    carousel_channel: number
    carousel_remarks: string
    carousel_content_type: number
    carousel_content_id: number
    carousel_pic_pc: string
    carousel_pic_mobile: string
    vod: yys_Bing
    ads_slot_id: number,
    ads_id: number,
    ads_title: string,
    ads_event_title: string,
    ads_name: string,
}

export interface yys_Anner {
    type_name: string,
    type_id: number,
    vod_list: Array<yys_Bing>,
}

export interface yys_ScrollviewPangle {
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
    ads_pic: string,
    ads_url: string,
    ads_thumbnail: string,
    ads_title: string,
    ads_tag: string,
    ads_button_text: string,
    ads_desc1: string,
    ads_desc2: string,
    ads_redirect_type: number,
    is_video: boolean,
    is_ads: boolean,
}

export interface yys_Checkbox {
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
    type_extend_obj: yys_SortSettings
}

export interface yys_SortSettings {
    class: string
    area: string
    lang: string
    year: string
}

export interface yys_StyleItem {
    id: number
    live_station_name: string
    live_station_url: string
    live_station_img_url: string
}

export interface yys_ArrowApple {
    name: string,
    title: string,
    page: any
}

export interface yys_DataMoon {
    email: string,
    feedback_category: number,
    feedback: string,
    platform_id: number,
    ip_address: string
}

export interface yys_ThemeItem {
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

export interface yys_ValuesPlaceholder {
    code: number
    data: yys_QaagBorderless
}

export interface yys_QaagBorderless {
    version: string
}

export interface yys_SmallApplication {
    ip_address: string,
    channel_id: string,
    version_number: string,
    product: string,
    mobile_os: string,
    mobile_model: string,
}

export interface yys_Libavcodec {
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
    vod_play_list: yys_Libreact
    vod_restricted: number
}

export interface yys_VolumeReward {
    douban_reviews: yys_InviteAway[],
    total_review: number,
}

export interface yys_InviteAway {
    douban_reviews_id: number,
    user_name: string,
    user_review: string,
}

export interface yys_Down {
    country_id: number,
    country_iso3: string,
    country_name: string,
    country_phonecode: string,
    country_flag: string,
    country_status: number,
}


export type yys_OrientationPath = {
    id: number | null,
    title: string | null,
    eventTitle: string | null,
    name: string | null,
    url: string | null,
    slotId: number | null,
    isVideo: boolean,
    actionUrl: string | null,
    minDuration: number,
    redirectType: number,
}
export interface yys_Xadsdk {
    ads_id: number
    ads_event_title: string,
    ads_slot_id: number
    ads_name: string
    ads_code: string
    url_thumbnail: string
    ads_thumbnail: string
    ads_pic: string
    ads_url: string
    ads_layout_type: string
    ads_content_type: number
    ads_sort: number
    ban_region: string
    is_video: boolean
    ads_min_duration: number
    ads_title: string
    ads_tag: string
    ads_button_text: string
    ads_desc1: string
    ads_desc2: string
    ads_redirect_type: number
}
export interface yys_ConfigLeague {
    ads: yys_Xadsdk,
    ads_list: yys_Xadsdk[]
}

export type yys_FlipperLibzeus = {
    roomId: string,
    messages: yys_TooltipsKlevin,
}

export type yys_TooltipsKlevin = {
    userId: string,
    userName: string,

    role: number,
    message: string,

    visibility: number,
    createAt: string,
}

export type yys_Button = {
    noticeId: number,
    botName: string,
    botMessage: string,
    sportsType: number,
    noticeSort: number,
    createdAt?: Date,
}

export type yys_StatsHeji = {
    name: string,
    settings: {
        enabled_live: string,
        enabled_sports_chatroom: string,
    }
}

export type UploadVideoPreviewParams = {
    assets: Asset,
}

export type UploadVideoType = {
    id?: number,
    title: string,
    thumbnail: string,
    createAt?: string,
    status?: string,
}