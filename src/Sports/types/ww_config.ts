export interface wwArrowright {
    code: number
    data: wwFlag
    msg: string
}

export interface wwFlag {
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
    mlive_2d_url: string
    mlive_3d_url: string
    is_online: number
    other_id: number
    room_id: string
    competition: wwEpisodesLine
    home: ww_service_root
    away: wwScheduler
    football_match_lineup: wwDebug
}

export interface wwEpisodesLine {
    id: number
    name: string
    name_short: string
    name_en: string
    name_en_short: string
    name_br: string
    icon: string
}

export interface ww_service_root {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: wwIconbellactiveLibffmpegkit
    name_en: string
    name_br: string
    short_name_en: string
}

export interface wwScheduler {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: wwIconbellactiveLibffmpegkit
    name_en: string
    name_br: string
    short_name_en: string
}

export interface wwIconbellactiveLibffmpegkit {
    id: number
    name_zh: string
    name_zht: string
    name_en: string
    icon: string
    birthday: number
    age: number
    preferred_formation: string
    country_id: number
    nationality: string
    joined: number
    contract_until: number
}

export interface wwDebug {
    home_formation: string
    away_formation: string
    home: wwBackiconComplete[][]
    away: wwLibavfilterMode[][]
    home_value: string
    away_value: string
}

export interface wwBackiconComplete {
    captain: number
    first: number
    id: number
    logo: string
    name: string
    name_br: string
    name_en: string
    national_logo: string
    position: string
    rating: string
    shirt_number: number
    team_id: number
    x: number
    y: number
    incidents?: wwAnalyticImagemanager[]
}

export interface wwAnalyticImagemanager {
    assist1?: wwMatchactive
    away_score: number
    belong: number
    home_score: number
    player?: wwClear
    time: string
    type: number
    in_player?: wwBackwardLibfb
    out_player?: wwVietnamCrown
    reason_type?: number
}

export interface wwMatchactive {
    id: number
    name: string
}

export interface wwClear {
    id: number
    name: string
}

export interface wwBackwardLibfb {
    id: number
    name: string
}

export interface wwVietnamCrown {
    id: number
    name: string
}

export interface wwLibavfilterMode {
    captain: number
    first: number
    id: number
    incidents?: wwMbsplashContainer[]
    logo: string
    name: string
    name_br: string
    name_en: string
    national_logo: string
    position: string
    rating: string
    shirt_number: number
    team_id: number
    x: number
    y: number
}

export interface wwMbsplashContainer {
    away_score: number
    belong: number
    home_score: number
    in_player: wwBackwardLibfb
    out_player: wwVietnamCrown
    reason_type: number
    time: string
    type: number
}
