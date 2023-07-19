export interface MatchUpdatesResponseType {
  code: number
  data: MatchUpdatesType
  msg: string
}

export interface MatchUpdatesType {
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
  competition: Competition
  home: Home
  away: Away
  football_match_trend: FootballMatchTrend
  football_match_live: FootballMatchLive
  football_match_stats: FootballMatchStats
  basketball_match: BasketballMatch
  basketball_match_trend: BasketballMatchTrend
  basketball_match_live: BasketballMatchLive
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
  name_en: string
  name_br: string
  short_name_en: string
  icon: string
  role: number
  name_short: string
}

export interface Away {
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

export interface BasketballMatch {
  home_position: string
  away_position: string
  kind: number
  period_count: number
  coverage: Coverage
  round: Round
}

export interface Coverage {
  intelligence: number
  mlive: number
}

export interface Round {
  group_num: number
  round_num: number
  stage_id: number
}
export interface FootballMatchTrend {
  data: number[]
  incidents: Incident[]
}

export interface Incident {
  position: number
  time: number
  type: number
}

export interface FootballMatchLive {
  stats: Stat[]
  incidents: Incident2[]
  tlive: Tlive[]
}

export interface Stat {
  away: number
  home: number
  type: number
}

export interface Incident2 {
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

export interface Tlive {
  data: string
  main: number
  position: number
  time: number
  type: number
}

export interface FootballMatchStats {
  stats: Stat[]
}

export interface BasketballMatchTrend {
  count: number
  per: number
  max: number
  data: number[]
}

export interface BasketballMatchLive {
  stats: Stat[]
}