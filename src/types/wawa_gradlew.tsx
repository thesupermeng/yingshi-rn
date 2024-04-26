import { Asset } from "react-native-image-picker"

export type PaggingResponseType<T> = {
    Page: number
    TotalPageCount: number
    Limit: number
    wawaTooltips: number
    List: T
}

export type PaggingResponseTypeWithNonVip<T> = {
    NonVIPList: T
} & PaggingResponseType<T>

export type wawaModelsSentry = {
    id: number,
    name: string,
}

export type wawaNterstitial = {
    carousel: Array<wawaTypeAnalytic>,
    class_list: Array<string>,
    yunying: Array<wawaRedirectNative>,
    categories: Array<wawaRedirectNative>,
    live_station_list: Array<wawaIconeyeMoonItem>
}

export type wawaQuestIconsubssuccess = PaggingResponseType<{
    [key: string]: wawaWithCrown
}>

export type wawaDarkGifgoal = PaggingResponseType<wawaLayoutEvent[]>
export type wawaBecome = PaggingResponseType<wawaConstThumbnail[]>
export type wawaTextlayoutmanager = PaggingResponseTypeWithNonVip<wawaBingPing[]>
export type wawaLibfbjni = PaggingResponseType<wawaBorderlessCombineItem[]>

export interface wawaSellProfileinactive {
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
    vod_play_list: wawaXvodNeon,
    vod_restricted: number,
    vod_sources: wawaOverlayDirect[],
    preferred_source_id: number,
    vod_source_name: string,
}

export interface wawaLayoutEvent extends wawaSellProfileinactive {
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
    vod_play_list: wawaXvodNeon
    type_name: string
}

export interface wawaXvodNeon {
    url_count: number
    urls: wawaMbsplash[]
}

export interface wawaOverlayDirect {
    source_id: number
    source_name: string
    source_url: string
    vod_play_list: wawaXvodNeon
}

export interface wawaMbsplash {
    name: string
    url: string
    from: string
    nid: number
}

export interface wawaWeatherModal extends wawaMbsplash {
    isDownloading: boolean
    isDownloaded: boolean
    progress: wawaIconuser
}

export interface wawaIconuser {
    percentage: number
    bytes: number
}

export interface wawaNotificationgray {
    class: string
    area: string
    lang: string
    year: string
    star: string
    director: string
    state: string
    version: string
}
export interface wawaZhengpian {
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
    type_extend: wawaNotificationgray
    type_logo: string
    type_pic: string
    type_jumpurl: string
    childids: any
}
interface wawaDependency extends wawaSellProfileinactive {
    type: wawaZhengpian
}

export interface wawaWithCrown {
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
    vod_list: wawaDependency[]
}

export type wawaRedirectNative = {
    vod_list: Array<wawaSellProfileinactive>
    type_name: string
    type_id: number
}

export type wawaClearHooks = {
    vod_list: Array<wawaSellProfileinactive>
    type_name: string
    type_id: number
    vod_source_name: string
}


type wawaTypeAnalytic = {
    carousel_id: number
    carousel_name: string
    carousel_channel: number
    carousel_remarks: string
    carousel_content_type: number
    carousel_content_id: number
    carousel_pic_pc: string
    carousel_pic_mobile: string
    vod: wawaSellProfileinactive
    ads_slot_id: number,
    ads_id: number,
    ads_title: string,
    ads_event_title: string,
    ads_name: string,
}

export interface wawaField {
    type_name: string,
    type_id: number,
    vod_list: Array<wawaSellProfileinactive>,
}

export interface wawaBingPing {
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

export interface wawaLibcrashsdkUpgrade {
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
    type_extend_obj: wawaDefaultlogo
}

export interface wawaDefaultlogo {
    class: string
    area: string
    lang: string
    year: string
}

export interface wawaIconeyeMoonItem {
    id: number
    live_station_name: string
    live_station_url: string
    live_station_img_url: string
}

export interface wawaUtilsVignette {
    name: string,
    title: string,
    page: any
}

export interface wawaHooksGoallogo {
    email: string,
    feedback_category: number,
    feedback: string,
    platform_id: number,
    ip_address: string
}

export interface wawaBorderlessCombineItem {
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

export interface wawaBufferEventsplash {
    code: number
    data: wawaBasketballhometeamLock
}

export interface wawaBasketballhometeamLock {
    version: string
}

export interface wawaTopon {
    ip_address: string,
    channel_id: string,
    version_number: string,
    product: string,
    mobile_os: string,
    mobile_model: string,
}

export interface wawaConstThumbnail {
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
    vod_play_list: wawaXvodNeon
    vod_restricted: number
    vod_source_name: string
}

export interface wawaMapbufferNewinterstitial {
    douban_reviews: wawaMintegralLibmapbufferjni[],
    total_review: number,
}

export interface wawaMintegralLibmapbufferjni {
    douban_reviews_id: number,
    user_name: string,
    user_review: string,
}

export interface wawaReactnavigation {
    country_id: number,
    country_iso3: string,
    country_name: string,
    country_phonecode: string,
    country_flag: string,
    country_status: number,
}


export type wawaLibcrashsdkGreyarrowup = {
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
export interface wawaLeaguedetailsbgMbbid {
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
export interface wawaMoonControls {
    ads: wawaLeaguedetailsbgMbbid,
    ads_list: wawaLeaguedetailsbgMbbid[]
}

export type wawaConfigure = {
    roomId: string,
    messages: wawaAdult,
}

export type wawaAdult = {
    userId: string,
    userName: string,
     
    role: number,
    message: string,
     
    visibility: number,
    createAt: string,
}

export type wawaLibreactperfloggerjniEvent = {
    noticeId: number,
    botName: string,
    botMessage: string,
    sportsType: number,
    noticeSort: number,
    createdAt?: Date,
}

export type wawaNavigation = {
    name: string,
    settings: {
        enabled_live: string,
        enabled_sports_chatroom: string,
    }
}

export type wawaGoogleEact = {
    assets: Asset,
}

export type wawaGesture = {
    id?: number,
    title: string,
    thumbnail: string,
    createAt?: string,
    status?: string,
}