export interface wawaInfoRewind {
  code: number
  data: wawaScrollviewMiddlesound
  msg: string
}

export interface wawaScrollviewMiddlesound {
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
  competition: wawaWatchnowbgCatalog
  home: wawa_down
  away: wawaTextGradlew
  football_match_trend: wawaImagenetworkerr
  football_match_live: wawaUnimplementedview
  football_match_stats: wawaAlbumHolder
  basketball_match: wawaGifgoalbgHomeicon
  basketball_match_trend: wawaLibavformatWhitetick
  basketball_match_live: wawaList
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
export interface wawaVolumeProfileactive {
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

export interface wawa_down {
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

export interface wawaTextGradlew {
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

export interface wawaGifgoalbgHomeicon {
  home_position: string
  away_position: string
  kind: number
  period_count: number
  coverage: wawaChatUpgrade
  round: wawaHeaderShow
}

export interface wawaChatUpgrade {
  intelligence: number
  mlive: number
}

export interface wawaHeaderShow {
  group_num: number
  round_num: number
  stage_id: number
}
export interface wawaImagenetworkerr {
  data: number[]
  incidents: wawaUpdatesString[]
}

export interface wawaUpdatesString {
  position: number
  time: number
  type: number
}

export interface wawaUnimplementedview {
  stats: wawaProxyPredictionarrow[]
  incidents: wawaWith[]
  tlive: wawaCombine[]
}

export interface wawaProxyPredictionarrow {
  away: number
  home: number
  type: number
}

export interface wawaWith {
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

export interface wawaCombine {
  data: string
  main: number
  position: number
  time: number
  type: number
}

export interface wawaAlbumHolder {
  stats: wawaProxyPredictionarrow[]
}

export interface wawaLibavformatWhitetick {
  count: number
  per: number
  max: number
  data: number[]
}


export interface wawaTooltips {
  away: string
  home: string
}

export interface wawaNetworkPrediction {
  away: [number, string, string, string, string, string, number[]][]
  away_top_assist: [number, string, string, string, string, string, number[]]
  away_top_rebound: [number, string, string, string, string, string, number[]]
  away_top_scorer: [number, string, string, string, string, string, number[]]
  home: [number, string, string, string, string, string, number[]][]
  home_top_assist: [number, string, string, string, string, string, number[]]
  home_top_rebound: [number, string, string, string, string, string, number[]]
  home_top_scorer: [number, string, string, string, string, string, number[]]
  total: wawaTooltips[]
}

export interface wawaList {
  stats: wawaProxyPredictionarrow[]
  players: wawaNetworkPrediction
}