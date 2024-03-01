export interface yys_Videojs {
    code: number
    data: yys_PlusFilter
    msg: string
  }
  
  export interface yys_PlusFilter {
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
    football_match: yys_Flipper
    football_home_injuries: yys_Runtime[]
    football_away_injuries: yys_Runtime[]
    football_home_ranking: yys_Type
    football_away_ranking: yys_Type
    basketball_match: yys_Libsentry
    basketball_home_stats: yys_ModelsGraph
    basketball_away_stats: yys_Schedule
    basketball_home_ranking: yys_Type
    basketball_away_ranking: yys_Type
    basketball_home_injuries: yys_Runtime[]
    basketball_away_injuries: yys_Runtime[]
    football_match_analysis: yys_FormAnner
    basketball_match_analysis: yys_Less
  }
  export interface yys_RewardvideoGemfile {
    home_scored: number[][]
    away_scored: number[][]
  }
  export interface yys_FormAnner {
    history: yys_manager
    goal_distribution: yys_RewardvideoGemfile
  }
  export interface yys_Less {
    history: yys_manager
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
  
  export interface yys_dycreator {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: yys_VideoStreaming
    name_en: string
    name_br: string
    short_name_en: string
  }
  
  export interface yys_Logout {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: yys_Klevin
    home: yys_dycreator
    away: yys_SecurityConstants
  }

  export interface yys_VideoStreaming {
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
  
  export interface yys_SecurityConstants {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: yys_VideoStreaming
    name_en: string
    name_br: string
    short_name_en: string
  }
  
  export interface yys_Flipper {
    note: string
    home_position: string
    away_position: string
    coverage: yys_ProxyProduct
    round: yys_SubmitGuide
    environment: yys_Leakchecker
    venue: yys_Tumbnail
    referee: yys_GreenSort
  }
  
  export interface yys_ProxyProduct {
    intelligence: number
    lineup: number
    mlive: number
  }
  
  export interface yys_SubmitGuide {
    group_num: number
    round_num: number
    stage_id: number
  }
  
  export interface yys_Leakchecker {
    humidity: string
    pressure: string
    temperature: string
    weather: number
    wind: string
  }
  
  export interface yys_Tumbnail {
    id: number
    sports_type: number
    name_zh: string
    name_zht: string
    name_en: string
    capacity: number
    country_id: number
    city: string
  }
  
  export interface yys_GreenSort {
    id: number
    name_zh: string
    name_zht: string
    name_en: string
  }
  
  export interface yys_Runtime {
    type: number
    reason: string
    end_time: number
    player_id: number
    start_time: number
    competition_id: number
    missed_matches: number
    player: yys_Minimize
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
  }
  
  export interface yys_Type {
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
  
  export interface yys_ModelsGraph {
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
  
  export interface yys_Schedule {
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
  
  export interface yys_MergerReferrer {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: yys_Klevin
    home: yys_dycreator
    away: yys_SecurityConstants
  }

  export interface V {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: yys_Klevin
    home: yys_dycreator
    away: yys_SecurityConstants
  }

  export interface yys_GpayMode {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  
  export interface yys_VolumeProduct {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  export interface yys_Episodes {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  export interface yys_manager {
    home: yys_Logout[]
    away: yys_MergerReferrer[]
    vs: V[]
    home_total: yys_GpayMode
    away_total: yys_VolumeProduct
    vs_total: yys_Episodes
  }