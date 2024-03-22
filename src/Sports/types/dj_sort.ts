export interface HANModuleDetails {
    code: number
    data: TLDetailWhite
    msg: string
  }
  
  export interface TLDetailWhite {
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
    football_match: CLCRight
    football_home_injuries: YZTrashGift[]
    football_away_injuries: YZTrashGift[]
    football_home_ranking: CBSwitch
    football_away_ranking: CBSwitch
    basketball_match: BVYSplashSound
    basketball_home_stats: BLLEwardedDescription
    basketball_away_stats: ELang
    basketball_home_ranking: CBSwitch
    basketball_away_ranking: CBSwitch
    basketball_home_injuries: YZTrashGift[]
    basketball_away_injuries: YZTrashGift[]
    football_match_analysis: FPYDetailMalaysia
    basketball_match_analysis: AQKPlashFavorite
  }
  export interface JAEpisodes {
    home_scored: number[][]
    away_scored: number[][]
  }
  export interface FPYDetailMalaysia {
    history: y_icon
    goal_distribution: JAEpisodes
  }
  export interface AQKPlashFavorite {
    history: y_icon
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
  
  export interface BFRecommendationList {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: RBCheckboxShow
    home: xh_gpay
    away: SGoogleTurn
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
  
  export interface CLCRight {
    note: string
    home_position: string
    away_position: string
    coverage: WNResult
    round: JFVPause
    environment: UPVWhite
    venue: PCYingShare
    referee: ZCSubs
  }
  
  export interface WNResult {
    intelligence: number
    lineup: number
    mlive: number
  }
  
  export interface JFVPause {
    group_num: number
    round_num: number
    stage_id: number
  }
  
  export interface UPVWhite {
    humidity: string
    pressure: string
    temperature: string
    weather: number
    wind: string
  }
  
  export interface PCYingShare {
    id: number
    sports_type: number
    name_zh: string
    name_zht: string
    name_en: string
    capacity: number
    country_id: number
    city: string
  }
  
  export interface ZCSubs {
    id: number
    name_zh: string
    name_zht: string
    name_en: string
  }
  
  export interface YZTrashGift {
    type: number
    reason: string
    end_time: number
    player_id: number
    start_time: number
    competition_id: number
    missed_matches: number
    player: FPYBack
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
  }
  
  export interface CBSwitch {
    conference: string
    group: number
    stage_id: number
    team_id: number
    promotion_id: number
    points: number
    position: number
    deduct_points: number
    note: string
    total: number
    won: number
    draw: number
    loss: number
    goals: number
    goals_against: number
    goal_diff: number
    home_points: number
    home_position: number
    home_total: number
    home_won: number
    home_draw: number
    home_loss: number
    home_goals: number
    home_goals_against: number
    home_goal_diff: number
    away_points: number
    away_position: number
    away_total: number
    away_won: number
    away_draw: number
    away_loss: number
    away_goals: number
    away_goals_against: number
    away_goal_diff: number
    season_id: number
    position_str: string
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
  
  export interface BLLEwardedDescription {
    matches: number
    points: number
    points_against: number
    free_throws_scored: number
    free_throws_total: number
    free_throws_accuracy: number
    two_points_scored: number
    two_points_total: number
    two_points_accuracy: number
    three_points_scored: number
    three_points_total: number
    three_points_accuracy: number
    field_goals_scored: number
    field_goals_total: number
    field_goals_accuracy: number
    total_fouls: number
    rebounds: number
    defensive_rebounds: number
    offensive_rebounds: number
    assists: number
    turnovers: number
    steals: number
    blocks: number
  }
  
  export interface ELang {
    matches: number
    points: number
    points_against: number
    free_throws_scored: number
    free_throws_total: number
    free_throws_accuracy: number
    two_points_scored: number
    two_points_total: number
    two_points_accuracy: number
    three_points_scored: number
    three_points_total: number
    three_points_accuracy: number
    field_goals_scored: number
    field_goals_total: number
    field_goals_accuracy: number
    total_fouls: number
    rebounds: number
    defensive_rebounds: number
    offensive_rebounds: number
    assists: number
    turnovers: number
    steals: number
    blocks: number
  }
  
  export interface ZEDTick {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: RBCheckboxShow
    home: xh_gpay
    away: SGoogleTurn
  }

  export interface V {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: RBCheckboxShow
    home: xh_gpay
    away: SGoogleTurn
  }

  export interface DSelectPause {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  
  export interface CRYWatch {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  export interface LDPrivacyQuest {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  export interface y_icon {
    home: BFRecommendationList[]
    away: ZEDTick[]
    vs: V[]
    home_total: DSelectPause
    away_total: CRYWatch
    vs_total: LDPrivacyQuest
  }