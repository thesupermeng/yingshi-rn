export interface wwGiftbutton {
  code: number
  data: wwWhistleorange
  msg: string
}

export interface wwWhistleorange {
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
  competition: wwEpisodesLine
  home: ww_service_root
  away: wwScheduler
  football_match_trend: wwPhone
  football_match_live: wwValues
  football_match_stats: wwForm
  basketball_match: wwIconsubssuccessIconuser
  basketball_match_trend: wwActivity
  basketball_match_live: wwBannerHelper
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
export interface wwClear {
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

export interface ww_service_root {
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

export interface wwScheduler {
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

export interface wwIconsubssuccessIconuser {
  home_position: string
  away_position: string
  kind: number
  period_count: number
  coverage: wwHuawei
  round: wwDycreator
}

export interface wwHuawei {
  intelligence: number
  mlive: number
}

export interface wwDycreator {
  group_num: number
  round_num: number
  stage_id: number
}
export interface wwPhone {
  data: number[]
  incidents: wwAnalyticImagemanager[]
}

export interface wwAnalyticImagemanager {
  position: number
  time: number
  type: number
}

export interface wwValues {
  stats: wwBridge[]
  incidents: wwMbsplashContainer[]
  tlive: wwTitle[]
}

export interface wwBridge {
  away: number
  home: number
  type: number
}

export interface wwMbsplashContainer {
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

export interface wwTitle {
  data: string
  main: number
  position: number
  time: number
  type: number
}

export interface wwForm {
  stats: wwBridge[]
}

export interface wwActivity {
  count: number
  per: number
  max: number
  data: number[]
}


export interface wwQuestString {
  away: string
  home: string
}

export interface wwTopic {
  away: [number, string, string, string, string, string, number[]][]
  away_top_assist: [number, string, string, string, string, string, number[]]
  away_top_rebound: [number, string, string, string, string, string, number[]]
  away_top_scorer: [number, string, string, string, string, string, number[]]
  home: [number, string, string, string, string, string, number[]][]
  home_top_assist: [number, string, string, string, string, string, number[]]
  home_top_rebound: [number, string, string, string, string, string, number[]]
  home_top_scorer: [number, string, string, string, string, string, number[]]
  total: wwQuestString[]
}

export interface wwBannerHelper {
  stats: wwBridge[]
  players: wwTopic
}