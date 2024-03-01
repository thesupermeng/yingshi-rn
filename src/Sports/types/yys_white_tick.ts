export interface yys_Dplus {
  code: number
  data: yys_YellowHover
  msg: string
}

export interface yys_YellowHover {
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
  competition: yys_Klevin
  home: yys_dycreator
  away: yys_SecurityConstants
  football_match_trend: yys_Container
  football_match_live: yys_FriendsColors
  football_match_stats: yys_Member
  basketball_match: yys_Libsentry
  basketball_match_trend: yys_FadfdeebbbfdabbbabdadfaaddaaExecutor
  basketball_match_live: yys_Apps
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
export interface yys_Minimize {
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

export interface yys_dycreator {
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

export interface yys_SecurityConstants {
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

export interface yys_Libsentry {
  home_position: string
  away_position: string
  kind: number
  period_count: number
  coverage: yys_ProxyProduct
  round: yys_SubmitGuide
}

export interface yys_ProxyProduct {
  intelligence: number
  mlive: number
}

export interface yys_SubmitGuide {
  group_num: number
  round_num: number
  stage_id: number
}
export interface yys_Container {
  data: number[]
  incidents: yys_Libjsinspector[]
}

export interface yys_Libjsinspector {
  position: number
  time: number
  type: number
}

export interface yys_FriendsColors {
  stats: yys_RightThailand[]
  incidents: yys_Libreactnativeblob[]
  tlive: yys_Edit[]
}

export interface yys_RightThailand {
  away: number
  home: number
  type: number
}

export interface yys_Libreactnativeblob {
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

export interface yys_Edit {
  data: string
  main: number
  position: number
  time: number
  type: number
}

export interface yys_Member {
  stats: yys_RightThailand[]
}

export interface yys_FadfdeebbbfdabbbabdadfaaddaaExecutor {
  count: number
  per: number
  max: number
  data: number[]
}


export interface yys_Latn {
  away: string
  home: string
}

export interface yys_LibfollyAnalytics {
  away: [number, string, string, string, string, string, number[]][]
  away_top_assist: [number, string, string, string, string, string, number[]]
  away_top_rebound: [number, string, string, string, string, string, number[]]
  away_top_scorer: [number, string, string, string, string, string, number[]]
  home: [number, string, string, string, string, string, number[]][]
  home_top_assist: [number, string, string, string, string, string, number[]]
  home_top_rebound: [number, string, string, string, string, string, number[]]
  home_top_scorer: [number, string, string, string, string, string, number[]]
  total: yys_Latn[]
}

export interface yys_Apps {
  stats: yys_RightThailand[]
  players: yys_LibfollyAnalytics
}