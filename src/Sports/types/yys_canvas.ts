export interface yys_CanvasClub {
    code: number
    data: yys_Bootsplash
    msg: string
}

export interface yys_Bootsplash {
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
    competition: yys_Klevin
    home: yys_dycreator
    away: yys_SecurityConstants
    football_match_lineup: yys_Sheet
}

export interface yys_Klevin {
    id: number
    name: string
    name_short: string
    name_en: string
    name_en_short: string
    name_br: string
    icon: string
}

export interface yys_dycreator {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: yys_VideoStreaming
    name_en: string
    name_br: string
    short_name_en: string
}

export interface yys_SecurityConstants {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: yys_VideoStreaming
    name_en: string
    name_br: string
    short_name_en: string
}

export interface yys_VideoStreaming {
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

export interface yys_Sheet {
    home_formation: string
    away_formation: string
    home: yys_Logout[][]
    away: yys_MergerReferrer[][]
    home_value: string
    away_value: string
}

export interface yys_Logout {
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
    incidents?: yys_Libjsinspector[]
}

export interface yys_Libjsinspector {
    assist1?: yys_Sigmob
    away_score: number
    belong: number
    home_score: number
    player?: yys_Minimize
    time: string
    type: number
    in_player?: yys_HoverList
    out_player?: yys_Final
    reason_type?: number
}

export interface yys_Sigmob {
    id: number
    name: string
}

export interface yys_Minimize {
    id: number
    name: string
}

export interface yys_HoverList {
    id: number
    name: string
}

export interface yys_Final {
    id: number
    name: string
}

export interface yys_MergerReferrer {
    captain: number
    first: number
    id: number
    incidents?: yys_Libreactnativeblob[]
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

export interface yys_Libreactnativeblob {
    away_score: number
    belong: number
    home_score: number
    in_player: yys_HoverList
    out_player: yys_Final
    reason_type: number
    time: string
    type: number
}
