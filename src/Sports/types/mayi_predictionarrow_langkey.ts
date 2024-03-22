export interface mayi_ServiceAnythink {
  code: number
  data: mayi_Humidity
  msg: string
}

export interface mayi_Humidity {
  id: number
  sports_type: number
  competition_id: number
  home_id: number
  away_id: number
  home_score: number[]
  away_score: number[]
  match_time: string
  state: number
  status: number
  is_hot: number
  start_time: number
  mlive: number
  mlive_2d_url: string
  mlive_3d_url: string
  is_online: number
  competition: mayi_LibavutilIconfeedback
  home: mayi_awayteamfield
  away: mayi_ProjectLibjsijniprofiler
  football_match_trend: mayi_Dialog
  football_match_live: mayi_Match
  football_match_stats: mayi_Crown
  basketball_match: mayi_Regeng
  basketball_match_trend: mayi_RegisterBgvipxvod
  basketball_match_live: mayi_Tooltips
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
export interface mayi_Iconarrowrightwhite {
  id: number
  name_zh: string
  name_zht: string
  name_en: string
  short_name_zh: string
  short_name_zht: string
  short_name_en: string
  icon: string
  country_id: number
  nationality: string
  national_logo: string
  birthday: number
  age: number
  height: number
  weight: number
  market_value: number
  market_value_currency: string
  contract_until: number
  preferred_foot: number
  position: string
  positions: string
  away: number
  home: number
}

export interface mayi_awayteamfield {
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

export interface mayi_ProjectLibjsijniprofiler {
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

export interface mayi_Regeng {
  home_position: string
  away_position: string
  kind: number
  period_count: number
  coverage: mayi_Zoom
  round: mayi_Smallbrightness
}

export interface mayi_Zoom {
  intelligence: number
  mlive: number
}

export interface mayi_Smallbrightness {
  group_num: number
  round_num: number
  stage_id: number
}
export interface mayi_Dialog {
  data: number[]
  incidents: mayi_Combine[]
}

export interface mayi_Combine {
  position: number
  time: number
  type: number
}

export interface mayi_Match {
  stats: mayi_Time[]
  incidents: mayi_Searchbar[]
  tlive: mayi_Kick[]
}

export interface mayi_Time {
  away: number
  home: number
  type: number
}

export interface mayi_Searchbar {
  player_id?: number
  player_name?: string
  position: number
  reason_type?: number
  second: number
  time: number
  type: number
  in_player_id?: number
  in_player_name?: string
  out_player_id?: number
  out_player_name?: string
  var_reason?: number
  var_result?: number
}

export interface mayi_Kick {
  data: string
  main: number
  position: number
  time: number
  type: number
}

export interface mayi_Crown {
  stats: mayi_Time[]
}

export interface mayi_RegisterBgvipxvod {
  count: number
  per: number
  max: number
  data: number[]
}


export interface mayi_Selected {
  away: string
  home: string
}

export interface mayi_Vietnam {
  away: [number, string, string, string, string, string, number[]][]
  away_top_assist: [number, string, string, string, string, string, number[]]
  away_top_rebound: [number, string, string, string, string, string, number[]]
  away_top_scorer: [number, string, string, string, string, string, number[]]
  home: [number, string, string, string, string, string, number[]][]
  home_top_assist: [number, string, string, string, string, string, number[]]
  home_top_rebound: [number, string, string, string, string, string, number[]]
  home_top_scorer: [number, string, string, string, string, string, number[]]
  total: mayi_Selected[]
}

export interface mayi_Tooltips {
  stats: mayi_Time[]
  players: mayi_Vietnam
}