export interface DInviteHongkong {
    code: number
    data: DHXPopup
    msg: string
}

export interface DHXPopup {
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
    competition: RBCheckboxShow
    home: xh_gpay
    away: SGoogleTurn
    football_match_lineup: MQELessForward
}

export interface RBCheckboxShow {
    id: number
    name: string
    name_short: string
    name_en: string
    name_en_short: string
    name_br: string
    icon: string
}

export interface xh_gpay {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: UCombineHome
    name_en: string
    name_br: string
    short_name_en: string
}

export interface SGoogleTurn {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: UCombineHome
    name_en: string
    name_br: string
    short_name_en: string
}

export interface UCombineHome {
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

export interface MQELessForward {
    home_formation: string
    away_formation: string
    home: BFRecommendationList[][]
    away: ZEDTick[][]
    home_value: string
    away_value: string
}

export interface BFRecommendationList {
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
    incidents?: SDXPrivacy[]
}

export interface SDXPrivacy {
    assist1?: WFService
    away_score: number
    belong: number
    home_score: number
    player?: FPYBack
    time: string
    type: number
    in_player?: DSubsTelegram
    out_player?: NUFastRecommendation
    reason_type?: number
}

export interface WFService {
    id: number
    name: string
}

export interface FPYBack {
    id: number
    name: string
}

export interface DSubsTelegram {
    id: number
    name: string
}

export interface NUFastRecommendation {
    id: number
    name: string
}

export interface ZEDTick {
    captain: number
    first: number
    id: number
    incidents?: BLNOverStreaming[]
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

export interface BLNOverStreaming {
    away_score: number
    belong: number
    home_score: number
    in_player: DSubsTelegram
    out_player: NUFastRecommendation
    reason_type: number
    time: string
    type: number
}
