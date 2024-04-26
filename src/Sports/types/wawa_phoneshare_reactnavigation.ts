export interface wawaShootnogoal {
    code: number
    data: wawaReactnativeultimatelistviewDisconnected
    msg: string
  }
  
  export interface wawaReactnativeultimatelistviewDisconnected {
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
    football_match: wawaPredictionactiveMatchdetailbg
    football_home_injuries: wawaFilled[]
    football_away_injuries: wawaFilled[]
    football_home_ranking: wawaUntick
    football_away_ranking: wawaUntick
    basketball_match: wawaGifgoalbgHomeicon
    basketball_home_stats: wawaExecutor
    basketball_away_stats: wawaChinasame
    basketball_home_ranking: wawaUntick
    basketball_away_ranking: wawaUntick
    basketball_home_injuries: wawaFilled[]
    basketball_away_injuries: wawaFilled[]
    football_match_analysis: wawaSplashProfileinactive
    basketball_match_analysis: wawaBodanWhitebell
  }
  export interface wawaIconarrowrightorangeSuggestion {
    home_scored: number[][]
    away_scored: number[][]
  }
  export interface wawaSplashProfileinactive {
    history: wawa_favorite
    goal_distribution: wawaIconarrowrightorangeSuggestion
  }
  export interface wawaBodanWhitebell {
    history: wawa_favorite
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
  
  export interface wawa_down {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: wawaScorepopsoundMegaphone
    name_en: string
    name_br: string
    short_name_en: string
  }
  
  export interface wawaLeaguedetailsbgType {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: wawaWatchnowbgCatalog
    home: wawa_down
    away: wawaTextGradlew
  }

  export interface wawaScorepopsoundMegaphone {
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
  
  export interface wawaTextGradlew {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: wawaScorepopsoundMegaphone
    name_en: string
    name_br: string
    short_name_en: string
  }
  
  export interface wawaPredictionactiveMatchdetailbg {
    note: string
    home_position: string
    away_position: string
    coverage: wawaChatUpgrade
    round: wawaHeaderShow
    environment: wawaCombinedSuggestion
    venue: wawaIconwechat
    referee: wawaApps
  }
  
  export interface wawaChatUpgrade {
    intelligence: number
    lineup: number
    mlive: number
  }
  
  export interface wawaHeaderShow {
    group_num: number
    round_num: number
    stage_id: number
  }
  
  export interface wawaCombinedSuggestion {
    humidity: string
    pressure: string
    temperature: string
    weather: number
    wind: string
  }
  
  export interface wawaIconwechat {
    id: number
    sports_type: number
    name_zh: string
    name_zht: string
    name_en: string
    capacity: number
    country_id: number
    city: string
  }
  
  export interface wawaApps {
    id: number
    name_zh: string
    name_zht: string
    name_en: string
  }
  
  export interface wawaFilled {
    type: number
    reason: string
    end_time: number
    player_id: number
    start_time: number
    competition_id: number
    missed_matches: number
    player: wawaVolumeProfileactive
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
  }
  
  export interface wawaUntick {
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
  
  export interface wawaExecutor {
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
  
  export interface wawaChinasame {
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
  
  export interface wawaFinal {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: wawaWatchnowbgCatalog
    home: wawa_down
    away: wawaTextGradlew
  }

  export interface V {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: wawaWatchnowbgCatalog
    home: wawa_down
    away: wawaTextGradlew
  }

  export interface wawaBasketballplayerplaceholderMalaysia {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  
  export interface wawaPingReact {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  export interface wawaStaticPredictionactive {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  export interface wawa_favorite {
    home: wawaLeaguedetailsbgType[]
    away: wawaFinal[]
    vs: V[]
    home_total: wawaBasketballplayerplaceholderMalaysia
    away_total: wawaPingReact
    vs_total: wawaStaticPredictionactive
  }