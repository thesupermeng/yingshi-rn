export interface IACalendar {
  code: number
  data: QImageUnselected
  msg: string
}

export interface QImageUnselected {
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
  competition: RBCheckboxShow
  home: xh_gpay
  away: SGoogleTurn
  football_match_trend: DControls
  football_match_live: JNBlacklist
  football_match_stats: KRAssistIndex
  basketball_match: BVYSplashSound
  basketball_match_trend: ZActionStreaming
  basketball_match_live: DTYAgreementMinivod
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
export interface FPYBack {
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

export interface xh_gpay {
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

export interface SGoogleTurn {
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

export interface BVYSplashSound {
  home_position: string
  away_position: string
  kind: number
  period_count: number
  coverage: WNResult
  round: JFVPause
}

export interface WNResult {
  intelligence: number
  mlive: number
}

export interface JFVPause {
  group_num: number
  round_num: number
  stage_id: number
}
export interface DControls {
  data: number[]
  incidents: SDXPrivacy[]
}

export interface SDXPrivacy {
  position: number
  time: number
  type: number
}

export interface JNBlacklist {
  stats: JYMapping[]
  incidents: BLNOverStreaming[]
  tlive: NPlaylistArrow[]
}

export interface JYMapping {
  away: number
  home: number
  type: number
}

export interface BLNOverStreaming {
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

export interface NPlaylistArrow {
  data: string
  main: number
  position: number
  time: number
  type: number
}

export interface KRAssistIndex {
  stats: JYMapping[]
}

export interface ZActionStreaming {
  count: number
  per: number
  max: number
  data: number[]
}


export interface EGreen {
  away: string
  home: string
}

export interface LThumbnailService {
  away: [number, string, string, string, string, string, number[]][]
  away_top_assist: [number, string, string, string, string, string, number[]]
  away_top_rebound: [number, string, string, string, string, string, number[]]
  away_top_scorer: [number, string, string, string, string, string, number[]]
  home: [number, string, string, string, string, string, number[]][]
  home_top_assist: [number, string, string, string, string, string, number[]]
  home_top_rebound: [number, string, string, string, string, string, number[]]
  home_top_scorer: [number, string, string, string, string, string, number[]]
  total: EGreen[]
}

export interface DTYAgreementMinivod {
  stats: JYMapping[]
  players: LThumbnailService
}