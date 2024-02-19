export interface yysOrangeclockOthermatchdetailbg {
    code: number
    data: yysDicelogoFootballfield
    msg: string
  }
  
  export interface yysDicelogoFootballfield {
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
    football_match: yysBasketballawayteam
    football_home_injuries: yysUpdatesBackwhite[]
    football_away_injuries: yysUpdatesBackwhite[]
    football_home_ranking: yysSmallorangeman
    football_away_ranking: yysSmallorangeman
    basketball_match: yysSubtext
    basketball_home_stats: yysShrinkInterstitial
    basketball_away_stats: yysCornershoot
    basketball_home_ranking: yysSmallorangeman
    basketball_away_ranking: yysSmallorangeman
    basketball_home_injuries: yysUpdatesBackwhite[]
    basketball_away_injuries: yysUpdatesBackwhite[]
    football_match_analysis: yysLibyoga
    basketball_match_analysis: yysGoogleTrash
  }
  export interface yysFullIconnewsshare {
    home_scored: number[][]
    away_scored: number[][]
  }
  export interface yysLibyoga {
    history: yys_yellowtored
    goal_distribution: yysFullIconnewsshare
  }
  export interface yysGoogleTrash {
    history: yys_yellowtored
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
  
  export interface yys_calendar {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: yysIconclosewhitebg
    name_en: string
    name_br: string
    short_name_en: string
  }
  
  export interface yysGestures {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: yysEactIconpipexpand
    home: yys_calendar
    away: yysTyping
  }

  export interface yysIconclosewhitebg {
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
  
  export interface yysTyping {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: yysIconclosewhitebg
    name_en: string
    name_br: string
    short_name_en: string
  }
  
  export interface yysBasketballawayteam {
    note: string
    home_position: string
    away_position: string
    coverage: yysDownloadedForeground
    round: yysMoviesThumbnail
    environment: yysRewardvideo
    venue: yysDelegateLibfolly
    referee: yysTitleConfig
  }
  
  export interface yysDownloadedForeground {
    intelligence: number
    lineup: number
    mlive: number
  }
  
  export interface yysMoviesThumbnail {
    group_num: number
    round_num: number
    stage_id: number
  }
  
  export interface yysRewardvideo {
    humidity: string
    pressure: string
    temperature: string
    weather: number
    wind: string
  }
  
  export interface yysDelegateLibfolly {
    id: number
    sports_type: number
    name_zh: string
    name_zht: string
    name_en: string
    capacity: number
    country_id: number
    city: string
  }
  
  export interface yysTitleConfig {
    id: number
    name_zh: string
    name_zht: string
    name_en: string
  }
  
  export interface yysUpdatesBackwhite {
    type: number
    reason: string
    end_time: number
    player_id: number
    start_time: number
    competition_id: number
    missed_matches: number
    player: yysVideojsDrag
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
  }
  
  export interface yysSmallorangeman {
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
  
  export interface yysShrinkInterstitial {
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
  
  export interface yysCornershoot {
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
  
  export interface yysCcdfbdabcabbbedb {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: yysEactIconpipexpand
    home: yys_calendar
    away: yysTyping
  }

  export interface V {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: yysEactIconpipexpand
    home: yys_calendar
    away: yysTyping
  }

  export interface yysNewinterstitialTemplate {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  
  export interface yysNewinterstitial {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  export interface yysClasses {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  export interface yys_yellowtored {
    home: yysGestures[]
    away: yysCcdfbdabcabbbedb[]
    vs: V[]
    home_total: yysNewinterstitialTemplate
    away_total: yysNewinterstitial
    vs_total: yysClasses
  }