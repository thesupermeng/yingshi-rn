export interface yys_White {
    [date: string]: yys_List[]
}

export interface yys_MimoMode {
    id: number
    streamer_id: number
    match_id: number
    status: number
    src: string
    ql_status: number
    room_image_type: number
    room_image_url: string
    view_num: number
    streamer: yys_ViewerLess
}

export interface yys_ViewerLess {
    id: number
    nickname: string
    subscribed: number
    avatar: string
    cover_image: string
}

export interface yys_List {
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
    competition: yys_Logo
    home: yys_Analytics
    away: yys_SelectionValues
    mlive_2d_url?: string
    mlive_3d_url?: string,
    streams: yys_MimoMode[]
}

export interface yys_Logo {
    id: number
    name: string
    name_short: string
    name_en: string
    name_en_short: string
    name_br: string
    icon: string
}

export interface yys_Analytics {
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

export interface yys_SelectionValues {
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
