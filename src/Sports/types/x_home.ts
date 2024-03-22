export interface BYCross {
    [date: string]: EALSource[]
}

export interface XCXMember {
    id: number
    streamer_id: number
    match_id: number
    status: number
    src: string
    ql_status: number
    room_image_type: number
    room_image_url: string
    view_num: number
    streamer: IXRFriends
}

export interface IXRFriends {
    id: number
    nickname: string
    subscribed: number
    avatar: string
    cover_image: string
}

export interface EALSource {
    id: number
    sports_type: number
    competition_id: number
    home_id: number
    away_id: number
    home_score: number[]
    away_score: number[]
    match_time: string
    match_time_ts: number
    state: number
    status: number
    is_hot: number
    start_time: number
    mlive: number
    is_online: number
    other_id?: number
    room_id: string
    competition: UBLeagueAlert
    home: UInvite
    away: DCarouselContext
    mlive_2d_url?: string
    mlive_3d_url?: string,
    streams: XCXMember[]
}

export interface UBLeagueAlert {
    id: number
    name: string
    name_short: string
    name_en: string
    name_en_short: string
    name_br: string
    icon: string
}

export interface UInvite {
    id: number
    sports_type: number
    name: string
    name_en: string
    name_br: string
    short_name_en: string
    icon: string
    role: number
    name_short: string
}

export interface DCarouselContext {
    id: number
    sports_type: number
    name: string
    name_en: string
    name_br: string
    short_name_en: string
    icon: string
    role: number
    name_short: string
}
