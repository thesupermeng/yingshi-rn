export interface ttOver {
  code: number
  data: ttReminderScreen
  msg: string
}

export interface ttReminderScreen {
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
  competition: ttTypeQuest
  home: tt_terms
  away: ttShared
  football_match_trend: ttCarousel
  football_match_live: ttGreyOrange
  football_match_stats: ttGesture
  basketball_match: ttUpdate
  basketball_match_trend: ttPressure
  basketball_match_live: ttArea
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
export interface ttReactBasketball {
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

export interface tt_terms {
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

export interface ttShared {
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

export interface ttUpdate {
  home_position: string
  away_position: string
  kind: number
  period_count: number
  coverage: ttSelection
  round: ttNotification
}

export interface ttSelection {
  intelligence: number
  mlive: number
}

export interface ttNotification {
  group_num: number
  round_num: number
  stage_id: number
}
export interface ttCarousel {
  data: number[]
  incidents: ttUmengBackward[]
}

export interface ttUmengBackward {
  position: number
  time: number
  type: number
}

export interface ttGreyOrange {
  stats: ttWhatsappVideocommon[]
  incidents: ttDebug[]
  tlive: ttFull[]
}

export interface ttWhatsappVideocommon {
  away: number
  home: number
  type: number
}

export interface ttDebug {
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

export interface ttFull {
  data: string
  main: number
  position: number
  time: number
  type: number
}

export interface ttGesture {
  stats: ttWhatsappVideocommon[]
}

export interface ttPressure {
  count: number
  per: number
  max: number
  data: number[]
}


export interface ttMinivodBodan {
  away: string
  home: string
}

export interface ttVietnam {
  away: [number, string, string, string, string, string, number[]][]
  away_top_assist: [number, string, string, string, string, string, number[]]
  away_top_rebound: [number, string, string, string, string, string, number[]]
  away_top_scorer: [number, string, string, string, string, string, number[]]
  home: [number, string, string, string, string, string, number[]][]
  home_top_assist: [number, string, string, string, string, string, number[]]
  home_top_rebound: [number, string, string, string, string, string, number[]]
  home_top_scorer: [number, string, string, string, string, string, number[]]
  total: ttMinivodBodan[]
}

export interface ttArea {
  stats: ttWhatsappVideocommon[]
  players: ttVietnam
}