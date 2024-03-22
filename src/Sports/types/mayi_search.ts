export interface mayi_TempnodatagifHistory {
    code: number
    data: mayi_Cast
    msg: string
  }
  
  export interface mayi_Cast {
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
    competition: mayi_LibavutilIconfeedback
    home: mayi_awayteamfield
    away: mayi_ProjectLibjsijniprofiler
    football_match: mayi_DelegateSmallbrightness
    football_home_injuries: mayi_LessMore[]
    football_away_injuries: mayi_LessMore[]
    football_home_ranking: mayi_Clock
    football_away_ranking: mayi_Clock
    basketball_match: mayi_Regeng
    basketball_home_stats: mayi_PrivateDesc
    basketball_away_stats: mayi_Line
    basketball_home_ranking: mayi_Clock
    basketball_away_ranking: mayi_Clock
    basketball_home_injuries: mayi_LessMore[]
    basketball_away_injuries: mayi_LessMore[]
    football_match_analysis: mayi_BasketballBackward
    basketball_match_analysis: mayi_IconfeedbackGifgoal
  }
  export interface mayi_LogouserManager {
    home_scored: number[][]
    away_scored: number[][]
  }
  export interface mayi_BasketballBackward {
    history: mayi_layout
    goal_distribution: mayi_LogouserManager
  }
  export interface mayi_IconfeedbackGifgoal {
    history: mayi_layout
  }

  export interface mayi_LibavutilIconfeedback {
    id: number
    name: string
    name_short: string
    name_en: string
    name_en_short: string
    name_br: string
    icon: string
  }
  
  export interface mayi_awayteamfield {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: mayi_DycreatorHistory
    name_en: string
    name_br: string
    short_name_en: string
  }
  
  export interface mayi_HolderGift {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: mayi_LibavutilIconfeedback
    home: mayi_awayteamfield
    away: mayi_ProjectLibjsijniprofiler
  }

  export interface mayi_DycreatorHistory {
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
  
  export interface mayi_ProjectLibjsijniprofiler {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: mayi_DycreatorHistory
    name_en: string
    name_br: string
    short_name_en: string
  }
  
  export interface mayi_DelegateSmallbrightness {
    note: string
    home_position: string
    away_position: string
    coverage: mayi_Zoom
    round: mayi_Smallbrightness
    environment: mayi_YellowFirebase
    venue: mayi_SplashPlayer
    referee: mayi_GreyarrowupSubmit
  }
  
  export interface mayi_Zoom {
    intelligence: number
    lineup: number
    mlive: number
  }
  
  export interface mayi_Smallbrightness {
    group_num: number
    round_num: number
    stage_id: number
  }
  
  export interface mayi_YellowFirebase {
    humidity: string
    pressure: string
    temperature: string
    weather: number
    wind: string
  }
  
  export interface mayi_SplashPlayer {
    id: number
    sports_type: number
    name_zh: string
    name_zht: string
    name_en: string
    capacity: number
    country_id: number
    city: string
  }
  
  export interface mayi_GreyarrowupSubmit {
    id: number
    name_zh: string
    name_zht: string
    name_en: string
  }
  
  export interface mayi_LessMore {
    type: number
    reason: string
    end_time: number
    player_id: number
    start_time: number
    competition_id: number
    missed_matches: number
    player: mayi_Iconarrowrightwhite
  }
  
  export interface mayi_Iconarrowrightwhite {
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
  
  export interface mayi_Clock {
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
  
  export interface mayi_Regeng {
    home_position: string
    away_position: string
    kind: number
    period_count: number
    coverage: mayi_Zoom
    round: mayi_Smallbrightness
  }
  
  export interface mayi_Zoom {
    intelligence: number
    mlive: number
  }
  
  export interface mayi_Smallbrightness {
    group_num: number
    round_num: number
    stage_id: number
  }
  
  export interface mayi_PrivateDesc {
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
  
  export interface mayi_Line {
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
  
  export interface mayi_Thumbnail {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: mayi_LibavutilIconfeedback
    home: mayi_awayteamfield
    away: mayi_ProjectLibjsijniprofiler
  }

  export interface V {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: mayi_LibavutilIconfeedback
    home: mayi_awayteamfield
    away: mayi_ProjectLibjsijniprofiler
  }

  export interface mayi_BackwardGoal {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  
  export interface mayi_TurndownVideo {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  export interface mayi_MountingPosition {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  export interface mayi_layout {
    home: mayi_HolderGift[]
    away: mayi_Thumbnail[]
    vs: V[]
    home_total: mayi_BackwardGoal
    away_total: mayi_TurndownVideo
    vs_total: mayi_MountingPosition
  }