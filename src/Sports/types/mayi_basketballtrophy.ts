export interface mayi_RefreshborderlessResend {
    code: number
    data: mayi_Related
    msg: string
}

export interface mayi_Related {
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
    competition: mayi_LibavutilIconfeedback
    home: mayi_awayteamfield
    away: mayi_ProjectLibjsijniprofiler
    football_match_lineup: mayi_Playlist
}

export interface mayi_LibavutilIconfeedback {
    id: number
    name: string
    name_short: string
    name_en: string
    name_en_short: string
    name_br: string
    icon: string
}

export interface mayi_awayteamfield {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: mayi_DycreatorHistory
    name_en: string
    name_br: string
    short_name_en: string
}

export interface mayi_ProjectLibjsijniprofiler {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: mayi_DycreatorHistory
    name_en: string
    name_br: string
    short_name_en: string
}

export interface mayi_DycreatorHistory {
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

export interface mayi_Playlist {
    home_formation: string
    away_formation: string
    home: mayi_HolderGift[][]
    away: mayi_Thumbnail[][]
    home_value: string
    away_value: string
}

export interface mayi_HolderGift {
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
    incidents?: mayi_Combine[]
}

export interface mayi_Combine {
    assist1?: mayi_ClassesMbbid
    away_score: number
    belong: number
    home_score: number
    player?: mayi_Iconarrowrightwhite
    time: string
    type: number
    in_player?: mayi_Team
    out_player?: mayi_Gmail
    reason_type?: number
}

export interface mayi_ClassesMbbid {
    id: number
    name: string
}

export interface mayi_Iconarrowrightwhite {
    id: number
    name: string
}

export interface mayi_Team {
    id: number
    name: string
}

export interface mayi_Gmail {
    id: number
    name: string
}

export interface mayi_Thumbnail {
    captain: number
    first: number
    id: number
    incidents?: mayi_Searchbar[]
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

export interface mayi_Searchbar {
    away_score: number
    belong: number
    home_score: number
    in_player: mayi_Team
    out_player: mayi_Gmail
    reason_type: number
    time: string
    type: number
}
