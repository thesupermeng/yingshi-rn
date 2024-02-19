export interface yysLightBasketball {
    code: number
    data: yysSuggestionUnimplementedview
    msg: string
}

export interface yysSuggestionUnimplementedview {
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
    competition: yysEactIconpipexpand
    home: yys_calendar
    away: yysTyping
    football_match_lineup: yysShow
}

export interface yysEactIconpipexpand {
    id: number
    name: string
    name_short: string
    name_en: string
    name_en_short: string
    name_br: string
    icon: string
}

export interface yys_calendar {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: yysIconclosewhitebg
    name_en: string
    name_br: string
    short_name_en: string
}

export interface yysTyping {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: yysIconclosewhitebg
    name_en: string
    name_br: string
    short_name_en: string
}

export interface yysIconclosewhitebg {
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

export interface yysShow {
    home_formation: string
    away_formation: string
    home: yysGestures[][]
    away: yysCcdfbdabcabbbedb[][]
    home_value: string
    away_value: string
}

export interface yysGestures {
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
    incidents?: yysControlInformation[]
}

export interface yysControlInformation {
    assist1?: yysRenderNewarchdefaults
    away_score: number
    belong: number
    home_score: number
    player?: yysVideojsDrag
    time: string
    type: number
    in_player?: yysMiddlebrightness
    out_player?: yysBuild
    reason_type?: number
}

export interface yysRenderNewarchdefaults {
    id: number
    name: string
}

export interface yysVideojsDrag {
    id: number
    name: string
}

export interface yysMiddlebrightness {
    id: number
    name: string
}

export interface yysBuild {
    id: number
    name: string
}

export interface yysCcdfbdabcabbbedb {
    captain: number
    first: number
    id: number
    incidents?: yysAlert[]
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

export interface yysAlert {
    away_score: number
    belong: number
    home_score: number
    in_player: yysMiddlebrightness
    out_player: yysBuild
    reason_type: number
    time: string
    type: number
}
