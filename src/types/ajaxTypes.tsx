import { Vod, VodEpisode, VodEpisodeGroup } from "@models"

export type PaggingResponseType<T> = {
    Page: number
    TotalPageCount: number
    Limit: number
    Total: number
    List: T
}

export type PaggingResponseTypeWithNonVip<T> = {
    NonVIPList: T
} & PaggingResponseType<T>

export type NavOptionsType = {
    id: number,
    name: string,
}

export type MiniVideoListType = PaggingResponseTypeWithNonVip<MiniVideo[]>
export type MiniVideoVodListType = PaggingResponseType<MiniVideoCollectionItem[]>

export interface VodEpisodeStatusType extends VodEpisode {
    isDownloading: boolean
    isDownloaded: boolean
    progress: ProgressType
}

export interface ProgressType {
    percentage: number
    bytes: number
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

export type VodData = {
    vod_list: Array<Vod>
    type_name: string
    type_id: number
}

export type XVodData = {
    vod_list: Array<Vod>
    type_name: string
    type_id: number
    vod_source_name: string
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

export interface SubmitFeedbackRequest {
    email: string,
    feedback_category: number,
    feedback: string,
    platform_id: number,
    ip_address: string
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

export interface CommentsResponseDataType {
    douban_reviews: CommentsType[],
    total_review: number,
}

export interface CommentsType {
    douban_reviews_id: number,
    user_name: string,
    user_review: string,
}

export type VodPlayerAdType = {
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
export interface BannerAdType {
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
export interface BannerAdTypeRes {
    ads: BannerAdType,
    ads_list: BannerAdType[]
}

export type LiveChatRoomType = {
    roomId: string,
    messages: LiveChatMessageType,
}

export type LiveChatMessageType = {
    userId: string,
    userName: string,
    /**
     * 1 - sys
     * 2 - user
     * 3 - admin
     * 4 - virtual audience
     * 5 - chatbot assistant
     * 6 - streamer
     */
    role: number,
    message: string,
    /**
     * 1 - all
     * 2 - private (only view by user self)
     */
    visibility: number,
    createAt: string,
}

export type StreamerPinMsgType = {
    noticeId: number,
    botName: string,
    botMessage: string,
    sportsType: number,
    noticeSort: number,
    createdAt?: Date,
}

export type SportTabType = {
    name: string,
    settings: {
        enabled_live: string,
        enabled_sports_chatroom: string,
    }
}
