export interface ttHeart {
    code: number
    data: ttVideoSuccess
    msg: string
  }
  
  export interface ttVideoSuccess {
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
    football_match: ttConst
    football_home_injuries: ttPopup[]
    football_away_injuries: ttPopup[]
    football_home_ranking: ttGradleEntry
    football_away_ranking: ttGradleEntry
    basketball_match: ttUpdate
    basketball_home_stats: ttUnselected
    basketball_away_stats: ttActive
    basketball_home_ranking: ttGradleEntry
    basketball_away_ranking: ttGradleEntry
    basketball_home_injuries: ttPopup[]
    basketball_away_injuries: ttPopup[]
    football_match_analysis: ttRecommendation
    basketball_match_analysis: ttVietnamBenefit
  }
  export interface ttZoomVolume {
    home_scored: number[][]
    away_scored: number[][]
  }
  export interface ttRecommendation {
    history: tt_skip_gmail
    goal_distribution: ttZoomVolume
  }
  export interface ttVietnamBenefit {
    history: tt_skip_gmail
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
  
  export interface tt_terms {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: ttActionInterstitial
    name_en: string
    name_br: string
    short_name_en: string
  }
  
  export interface ttSend {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: ttTypeQuest
    home: tt_terms
    away: ttShared
  }

  export interface ttActionInterstitial {
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
  
  export interface ttShared {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: ttActionInterstitial
    name_en: string
    name_br: string
    short_name_en: string
  }
  
  export interface ttConst {
    note: string
    home_position: string
    away_position: string
    coverage: ttSelection
    round: ttNotification
    environment: ttEwardedGradle
    venue: ttSports
    referee: ttStatisticsFavorite
  }
  
  export interface ttSelection {
    intelligence: number
    lineup: number
    mlive: number
  }
  
  export interface ttNotification {
    group_num: number
    round_num: number
    stage_id: number
  }
  
  export interface ttEwardedGradle {
    humidity: string
    pressure: string
    temperature: string
    weather: number
    wind: string
  }
  
  export interface ttSports {
    id: number
    sports_type: number
    name_zh: string
    name_zht: string
    name_en: string
    capacity: number
    country_id: number
    city: string
  }
  
  export interface ttStatisticsFavorite {
    id: number
    name_zh: string
    name_zht: string
    name_en: string
  }
  
  export interface ttPopup {
    type: number
    reason: string
    end_time: number
    player_id: number
    start_time: number
    competition_id: number
    missed_matches: number
    player: ttReactBasketball
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
  }
  
  export interface ttGradleEntry {
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
  
  export interface ttUnselected {
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
  
  export interface ttActive {
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
  
  export interface ttSinaActions {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: ttTypeQuest
    home: tt_terms
    away: ttShared
  }

  export interface V {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: ttTypeQuest
    home: tt_terms
    away: ttShared
  }

  export interface ttOrientationTime {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  
  export interface ttDescReminder {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  export interface ttFlyer {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  export interface tt_skip_gmail {
    home: ttSend[]
    away: ttSinaActions[]
    vs: V[]
    home_total: ttOrientationTime
    away_total: ttDescReminder
    vs_total: ttFlyer
  }