export interface wwStaticSearch {
    code: number
    data: wwShirtBdxadsdk
    msg: string
  }
  
  export interface wwShirtBdxadsdk {
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
    competition: wwEpisodesLine
    home: ww_service_root
    away: wwScheduler
    football_match: wwLibavutil
    football_home_injuries: wwAnalytics[]
    football_away_injuries: wwAnalytics[]
    football_home_ranking: wwSound
    football_away_ranking: wwSound
    basketball_match: wwIconsubssuccessIconuser
    basketball_home_stats: wwLiblogger
    basketball_away_stats: wwBall
    basketball_home_ranking: wwSound
    basketball_away_ranking: wwSound
    basketball_home_injuries: wwAnalytics[]
    basketball_away_injuries: wwAnalytics[]
    football_match_analysis: wwTwitterMimo
    basketball_match_analysis: wwStarEpisode
  }
  export interface wwShielddone {
    home_scored: number[][]
    away_scored: number[][]
  }
  export interface wwTwitterMimo {
    history: ww_iconnewsshare
    goal_distribution: wwShielddone
  }
  export interface wwStarEpisode {
    history: ww_iconnewsshare
  }

  export interface wwEpisodesLine {
    id: number
    name: string
    name_short: string
    name_en: string
    name_en_short: string
    name_br: string
    icon: string
  }
  
  export interface ww_service_root {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: wwIconbellactiveLibffmpegkit
    name_en: string
    name_br: string
    short_name_en: string
  }
  
  export interface wwBackiconComplete {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: wwEpisodesLine
    home: ww_service_root
    away: wwScheduler
  }

  export interface wwIconbellactiveLibffmpegkit {
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
  
  export interface wwScheduler {
    id: number
    sports_type: number
    name: string
    icon: string
    role: number
    name_short: string
    coach: wwIconbellactiveLibffmpegkit
    name_en: string
    name_br: string
    short_name_en: string
  }
  
  export interface wwLibavutil {
    note: string
    home_position: string
    away_position: string
    coverage: wwHuawei
    round: wwDycreator
    environment: wwIncidentSubs
    venue: wwRelease
    referee: wwInactiveSell
  }
  
  export interface wwHuawei {
    intelligence: number
    lineup: number
    mlive: number
  }
  
  export interface wwDycreator {
    group_num: number
    round_num: number
    stage_id: number
  }
  
  export interface wwIncidentSubs {
    humidity: string
    pressure: string
    temperature: string
    weather: number
    wind: string
  }
  
  export interface wwRelease {
    id: number
    sports_type: number
    name_zh: string
    name_zht: string
    name_en: string
    capacity: number
    country_id: number
    city: string
  }
  
  export interface wwInactiveSell {
    id: number
    name_zh: string
    name_zht: string
    name_en: string
  }
  
  export interface wwAnalytics {
    type: number
    reason: string
    end_time: number
    player_id: number
    start_time: number
    competition_id: number
    missed_matches: number
    player: wwClear
  }
  
  export interface wwClear {
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
  
  export interface wwSound {
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
  
  export interface wwIconsubssuccessIconuser {
    home_position: string
    away_position: string
    kind: number
    period_count: number
    coverage: wwHuawei
    round: wwDycreator
  }
  
  export interface wwHuawei {
    intelligence: number
    mlive: number
  }
  
  export interface wwDycreator {
    group_num: number
    round_num: number
    stage_id: number
  }
  
  export interface wwLiblogger {
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
  
  export interface wwBall {
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
  
  export interface wwLibavfilterMode {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: wwEpisodesLine
    home: ww_service_root
    away: wwScheduler
  }

  export interface V {
    home_team_id: number
    away_team_id: number
    home_scores: number[]
    away_scores: number[]
    match_time: string
    match_time_ts: number
    competition_id: number
    competition: wwEpisodesLine
    home: ww_service_root
    away: wwScheduler
  }

  export interface wwText {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  
  export interface wwReleaseDownload {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  export interface wwPenalty {
    draws: number
    losses: number
    win_rate: number
    wins: number
  }
  export interface ww_iconnewsshare {
    home: wwBackiconComplete[]
    away: wwLibavfilterMode[]
    vs: V[]
    home_total: wwText
    away_total: wwReleaseDownload
    vs_total: wwPenalty
  }