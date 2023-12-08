export interface LineUpResponseType {
    code: number
    data: LineUpType
    msg: string
}

export interface LineUpType {
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
    competition: Competition
    home: Home
    away: Away
    football_match_lineup: FootballMatchLineup
}

export interface Competition {
    id: number
    name: string
    name_short: string
    name_en: string
    name_en_short: string
    name_br: string
    icon: string
}

export interface Home {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: Coach
    name_en: string
    name_br: string
    short_name_en: string
}

export interface Away {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: Coach
    name_en: string
    name_br: string
    short_name_en: string
}

export interface Coach {
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

export interface FootballMatchLineup {
    home_formation: string
    away_formation: string
    home: Home2[][]
    away: Away2[][]
    home_value: string
    away_value: string
}

export interface Home2 {
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
    incidents?: Incident[]
}

export interface Incident {
    assist1?: Assist
    away_score: number
    belong: number
    home_score: number
    player?: Player
    time: string
    type: number
    in_player?: InPlayer
    out_player?: OutPlayer
    reason_type?: number
}

export interface Assist {
    id: number
    name: string
}

export interface Player {
    id: number
    name: string
}

export interface InPlayer {
    id: number
    name: string
}

export interface OutPlayer {
    id: number
    name: string
}

export interface Away2 {
    captain: number
    first: number
    id: number
    incidents?: Incident2[]
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

export interface Incident2 {
    away_score: number
    belong: number
    home_score: number
    in_player: InPlayer
    out_player: OutPlayer
    reason_type: number
    time: string
    type: number
}
