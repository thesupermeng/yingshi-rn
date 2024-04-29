export interface ttShoot {
    code: number
    data: ttStatsPagination
    msg: string
}

export interface ttStatsPagination {
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
    competition: ttTypeQuest
    home: tt_terms
    away: ttShared
    football_match_lineup: ttBrightness
}

export interface ttTypeQuest {
    id: number
    name: string
    name_short: string
    name_en: string
    name_en_short: string
    name_br: string
    icon: string
}

export interface tt_terms {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: ttActionInterstitial
    name_en: string
    name_br: string
    short_name_en: string
}

export interface ttShared {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: ttActionInterstitial
    name_en: string
    name_br: string
    short_name_en: string
}

export interface ttActionInterstitial {
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

export interface ttBrightness {
    home_formation: string
    away_formation: string
    home: ttSend[][]
    away: ttSinaActions[][]
    home_value: string
    away_value: string
}

export interface ttSend {
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
    incidents?: ttUmengBackward[]
}

export interface ttUmengBackward {
    assist1?: ttChartPath
    away_score: number
    belong: number
    home_score: number
    player?: ttReactBasketball
    time: string
    type: number
    in_player?: ttHoverContainer
    out_player?: ttInterstitialEwarded
    reason_type?: number
}

export interface ttChartPath {
    id: number
    name: string
}

export interface ttReactBasketball {
    id: number
    name: string
}

export interface ttHoverContainer {
    id: number
    name: string
}

export interface ttInterstitialEwarded {
    id: number
    name: string
}

export interface ttSinaActions {
    captain: number
    first: number
    id: number
    incidents?: ttDebug[]
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

export interface ttDebug {
    away_score: number
    belong: number
    home_score: number
    in_player: ttHoverContainer
    out_player: ttInterstitialEwarded
    reason_type: number
    time: string
    type: number
}
