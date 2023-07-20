export interface MatchDetailsResponseType {
    code: number
    data: MatchDetailWithRankingData
    msg: string
  }
  
  export interface MatchDetailWithRankingData {
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
    football_match: FootballMatch
    football_home_injuries: Injury[]
    football_away_injuries: Injury[]
    football_home_ranking: FootballRanking
    football_away_ranking: FootballRanking
    basketball_match: BasketballMatch
    basketball_home_stats: BasketballHomeStats
    basketball_away_stats: BasketballAwayStats
    basketball_home_ranking: FootballRanking
    basketball_away_ranking: FootballRanking
    basketball_home_injuries: Injury[]
    basketball_away_injuries: Injury[]
    football_match_analysis: FootballMatchAnalysis
    basketball_match_analysis: BasketballMatchAnalysis
  }
  export interface GoalDistribution {
    home_scored: number[][]
    away_scored: number[][]
  }
  export interface FootballMatchAnalysis {
    history: History
    goal_distribution: GoalDistribution
  }
  export interface BasketballMatchAnalysis {
    history: History
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
    icon: string
    role: number
    name_short: string
    coach: Coach
    name_en: string
    name_br: string
    short_name_en: string
  }
  
  export interface Home2 {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: Competition
    home: Home
    away: Away
  }

  export interface Coach {
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
  
  export interface Away {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: Coach
    name_en: string
    name_br: string
    short_name_en: string
  }
  
  export interface FootballMatch {
    note: string
    home_position: string
    away_position: string
    coverage: Coverage
    round: Round
    environment: Environment
    venue: Venue
    referee: Referee
  }
  
  export interface Coverage {
    intelligence: number
    lineup: number
    mlive: number
  }
  
  export interface Round {
    group_num: number
    round_num: number
    stage_id: number
  }
  
  export interface Environment {
    humidity: string
    pressure: string
    temperature: string
    weather: number
    wind: string
  }
  
  export interface Venue {
    id: number
    sports_type: number
    name_zh: string
    name_zht: string
    name_en: string
    capacity: number
    country_id: number
    city: string
  }
  
  export interface Referee {
    id: number
    name_zh: string
    name_zht: string
    name_en: string
  }
  
  export interface Injury {
    type: number
    reason: string
    end_time: number
    player_id: number
    start_time: number
    competition_id: number
    missed_matches: number
    player: Player
  }
  
  export interface Player {
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
  
  export interface FootballRanking {
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
  
  export interface BasketballHomeStats {
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
  
  export interface BasketballAwayStats {
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
  
  export interface Away2 {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: Competition
    home: Home
    away: Away
  }

  export interface V {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: Competition
    home: Home
    away: Away
  }

  export interface HomeTotal {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  
  export interface AwayTotal {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  export interface VsTotal {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  export interface History {
    home: Home2[]
    away: Away2[]
    vs: V[]
    home_total: HomeTotal
    away_total: AwayTotal
    vs_total: VsTotal
  }