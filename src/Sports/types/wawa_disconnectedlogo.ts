export interface wawaEyeopenScheduler {
    code: number
    data: wawaIconsharefriends
    msg: string
}

export interface wawaIconsharefriends {
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
    competition: wawaWatchnowbgCatalog
    home: wawa_down
    away: wawaTextGradlew
    football_match_lineup: wawaCodegenTemperature
}

export interface wawaWatchnowbgCatalog {
    id: number
    name: string
    name_short: string
    name_en: string
    name_en_short: string
    name_br: string
    icon: string
}

export interface wawa_down {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: wawaScorepopsoundMegaphone
    name_en: string
    name_br: string
    short_name_en: string
}

export interface wawaTextGradlew {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: wawaScorepopsoundMegaphone
    name_en: string
    name_br: string
    short_name_en: string
}

export interface wawaScorepopsoundMegaphone {
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

export interface wawaCodegenTemperature {
    home_formation: string
    away_formation: string
    home: wawaLeaguedetailsbgType[][]
    away: wawaFinal[][]
    home_value: string
    away_value: string
}

export interface wawaLeaguedetailsbgType {
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
    incidents?: wawaUpdatesString[]
}

export interface wawaUpdatesString {
    assist1?: wawaAlertLatn
    away_score: number
    belong: number
    home_score: number
    player?: wawaVolumeProfileactive
    time: string
    type: number
    in_player?: wawaTramini
    out_player?: wawaMembershipNotificationfilled
    reason_type?: number
}

export interface wawaAlertLatn {
    id: number
    name: string
}

export interface wawaVolumeProfileactive {
    id: number
    name: string
}

export interface wawaTramini {
    id: number
    name: string
}

export interface wawaMembershipNotificationfilled {
    id: number
    name: string
}

export interface wawaFinal {
    captain: number
    first: number
    id: number
    incidents?: wawaWith[]
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

export interface wawaWith {
    away_score: number
    belong: number
    home_score: number
    in_player: wawaTramini
    out_player: wawaMembershipNotificationfilled
    reason_type: number
    time: string
    type: number
}
