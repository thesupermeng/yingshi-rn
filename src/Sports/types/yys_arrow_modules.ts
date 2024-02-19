export interface yysIconmegaphoneWind {
  code: number
  data: yysTeam
  msg: string
}

export interface yysTeam {
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
  competition: yysEactIconpipexpand
  home: yys_calendar
  away: yysTyping
  football_match_trend: yysImagewatchlive
  football_match_live: yysNativemodule
  football_match_stats: yysGrey
  basketball_match: yysSubtext
  basketball_match_trend: yysCondensedPosition
  basketball_match_live: yysAction
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
export interface yysVideojsDrag {
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

export interface yys_calendar {
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

export interface yysTyping {
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

export interface yysSubtext {
  home_position: string
  away_position: string
  kind: number
  period_count: number
  coverage: yysDownloadedForeground
  round: yysMoviesThumbnail
}

export interface yysDownloadedForeground {
  intelligence: number
  mlive: number
}

export interface yysMoviesThumbnail {
  group_num: number
  round_num: number
  stage_id: number
}
export interface yysImagewatchlive {
  data: number[]
  incidents: yysControlInformation[]
}

export interface yysControlInformation {
  position: number
  time: number
  type: number
}

export interface yysNativemodule {
  stats: yysBangPressure[]
  incidents: yysAlert[]
  tlive: yysSigmob[]
}

export interface yysBangPressure {
  away: number
  home: number
  type: number
}

export interface yysAlert {
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

export interface yysSigmob {
  data: string
  main: number
  position: number
  time: number
  type: number
}

export interface yysGrey {
  stats: yysBangPressure[]
}

export interface yysCondensedPosition {
  count: number
  per: number
  max: number
  data: number[]
}


export interface yysHeader {
  away: string
  home: string
}

export interface yysCurrent {
  away: [number, string, string, string, string, string, number[]][]
  away_top_assist: [number, string, string, string, string, string, number[]]
  away_top_rebound: [number, string, string, string, string, string, number[]]
  away_top_scorer: [number, string, string, string, string, string, number[]]
  home: [number, string, string, string, string, string, number[]][]
  home_top_assist: [number, string, string, string, string, string, number[]]
  home_top_rebound: [number, string, string, string, string, string, number[]]
  home_top_scorer: [number, string, string, string, string, string, number[]]
  total: yysHeader[]
}

export interface yysAction {
  stats: yysBangPressure[]
  players: yysCurrent
}