import { Asset } from "react-native-image-picker"

export type PaggingResponseType<T> = {
    Page: number
    TotalPageCount: number
    Limit: number
    ttMinivodBodan: number
    List: T
}

export type PaggingResponseTypeWithNonVip<T> = {
    NonVIPList: T
} & PaggingResponseType<T>

export type ttFastPosition = {
    id: number,
    name: string,
}

export type ttSide = {
    carousel: Array<ttWhatsapp>,
    class_list: Array<string>,
    yunying: Array<ttEdit>,
    categories: Array<ttEdit>,
    live_station_list: Array<ttAcceptedCountItem>,
    topic_list:  Array<any>,
    yugaopian_list : Array<any>


}

export type ttProject = PaggingResponseType<{
    [key: string]: ttSport
}>

export type ttZoom = PaggingResponseType<ttReportInjury[]>
export type ttCenter = PaggingResponseType<ttDown[]>
export type ttSplashArea = PaggingResponseTypeWithNonVip<ttAnimationSource[]>
export type ttStatisticsSchedule = PaggingResponseType<ttHoverCommentItem[]>

export interface ttAppsOther {
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
    vod_play_list: ttWeibo,
    vod_restricted: number,
    vod_sources: ttSelected[],
    preferred_source_id: number,
    vod_source_name: string,
}

export interface ttReportInjury extends ttAppsOther {
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
    vod_play_list: ttWeibo
    type_name: string
}

export interface ttWeibo {
    url_count: number
    urls: ttWhistle[]
}

export interface ttSelected {
    source_id: number
    source_name: string
    source_url: string
    vod_play_list: ttWeibo
}

export interface ttWhistle {
    name: string
    url: string
    from: string
    nid: number
}

export interface ttFastforwardContext extends ttWhistle {
    isDownloading: boolean
    isDownloaded: boolean
    progress: ttTyping
}

export interface ttTyping {
    percentage: number
    bytes: number
}

export interface ttStylesLong {
    class: string
    area: string
    lang: string
    year: string
    star: string
    director: string
    state: string
    version: string
}
export interface ttBenefitMacau {
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
    type_extend: ttStylesLong
    type_logo: string
    type_pic: string
    type_jumpurl: string
    childids: any
}
interface ttHeartExpand extends ttAppsOther {
    type: ttBenefitMacau
}

export interface ttSport {
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
    vod_list: ttHeartExpand[]
}

export type ttEdit = {
    vod_list: Array<ttAppsOther>
    type_name: string
    type_id: number
}

export type ttUntick = {
    vod_list: Array<ttAppsOther>
    type_name: string
    type_id: number
    vod_source_name: string
}


type ttWhatsapp = {
    carousel_id: number
    carousel_name: string
    carousel_channel: number
    carousel_remarks: string
    carousel_content_type: number
    carousel_content_id: number
    carousel_pic_pc: string
    carousel_pic_mobile: string
    vod: ttAppsOther
    ads_slot_id: number,
    ads_id: number,
    ads_title: string,
    ads_event_title: string,
    ads_name: string,
}

export interface ttCloseMbnative {
    type_name: string,
    type_id: number,
    vod_list: Array<ttAppsOther>,
}

export interface ttAnimationSource {
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

export interface ttMbridge {
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
    type_extend_obj: ttLoginPopup
}

export interface ttLoginPopup {
    class: string
    area: string
    lang: string
    year: string
}

export interface ttAcceptedCountItem {
    id: number
    live_station_name: string
    live_station_url: string
    live_station_img_url: string
}

export interface ttAnythinkSend {
    name: string,
    title: string,
    page: any
}

export interface ttPhoneEntry {
    email: string,
    feedback_category: number,
    feedback: string,
    platform_id: number,
    ip_address: string
}

export interface ttHoverCommentItem {
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

export interface ttClubContext {
    code: number
    data: ttMainFlyer
}

export interface ttMainFlyer {
    version: string
}

export interface ttBorderlessAction {
    ip_address: string,
    channel_id: string,
    version_number: string,
    product: string,
    mobile_os: string,
    mobile_model: string,
}

export interface ttDown {
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
    vod_play_list: ttWeibo
    vod_restricted: number
    vod_source_name: string
}

export interface ttIncidentBaidu {
    douban_reviews: ttTempGift[],
    total_review: number,
}

export interface ttTempGift {
    douban_reviews_id: number,
    user_name: string,
    user_review: string,
}

export interface ttGradleTrash {
    country_id: number,
    country_iso3: string,
    country_name: string,
    country_phonecode: string,
    country_flag: string,
    country_status: number,
}


export type ttBenefitManager = {
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
export interface ttAnalytics {
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
export interface ttTaiwanBuffer {
    ads: ttAnalytics,
    ads_list: ttAnalytics[]
}

export type ttMiddle = {
    roomId: string,
    messages: ttResult,
}

export type ttResult = {
    userId: string,
    userName: string,
     
    role: number,
    message: string,
     
    visibility: number,
    createAt: string,
}

export type ttMbnative = {
    noticeId: number,
    botName: string,
    botMessage: string,
    sportsType: number,
    noticeSort: number,
    createdAt?: Date,
}

export type ttGrayRoom = {
    name: string,
    settings: {
        enabled_live: string,
        enabled_sports_chatroom: string,
    }
}

export type ttHandlerContext = {
    assets: Asset,
}

export type ttDownloadRead = {
    id?: number,
    title: string,
    thumbnail: string,
    createAt?: string,
    status?: string,
}

export type ttDoubanMeta = {
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
    vod_play_list: ttWeibo,
    vod_restricted: number,
    vod_sources: ttSelected[],
    preferred_source_id: number,
    vod_source_name: string,
    total_douban_review: number,
    douban_reviews: ttTempGift [],
}