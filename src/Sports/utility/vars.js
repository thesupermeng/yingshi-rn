const vars = {};

vars.footballMatchStatus = {
  0: '比赛异常',
  1: '未开赛',
  2: '上半场',
  3: '中场',
  4: '下半场',
  5: '加时赛',
  6: '加时赛（弃用）',
  7: '点球决战',
  8: '完场',
  9: '推迟',
  10: '中断',
  11: '腰斩',
  12: '取消',
  13: '待定',
};

vars.basketballMatchStatus = {
  0: '比赛异常',
  1: '未开赛',
  2: '第一节',
  3: '第一节完',
  4: '第二节',
  5: '第二节完',
  6: '第三节',
  7: '第三节完',
  8: '第四节',
  9: '加时',
  10: '完场',
  11: '中断',
  12: '取消',
  13: '延期',
  14: '腰斩',
  15: '待定',
};

vars.footballMatchStats = {
  team_id: '球队id',
  goals: '进球',
  penalty: '点球',
  assists: '助攻',
  red_cards: '红牌',
  yellow_cards: '黄牌',
  shots: '射门',
  shots_on_target: '射正',
  dribble: '过人',
  dribble_succ: '过人成功',
  clearances: '解围',
  blocked_shots: '有效阻挡',
  interceptions: '拦截',
  tackles: '抢断',
  passes: '传球',
  passes_accuracy: '传球成功',
  key_passes: '关键传球',
  crosses: '传中球',
  crosses_accuracy: '传中球成功',
  long_balls: '长传',
  long_balls_accuracy: '成功长传',
  duels: '1对1拼抢',
  duels_won: '1对1拼抢成功',
  fouls: '犯规',
  was_fouled: '被侵犯',
  goals_against: '失球',
  offsides: '越位',
  yellow2red_cards: '两黄变红',
  corner_kicks: '角球',
  ball_possession: '控球率',
  freekicks: '任意球',
  freekick_goals: '任意球得分',
  hit_woodwork: '射中门框',
  fastbreaks: '快攻',
  fastbreak_shots: '快攻射门',
  fastbreak_goals: '快攻进球',
  poss_losts: '丢失球权',
};

vars.footballPosition = {
  G: '守门员',
  M: '中场',
  D: '后卫',
  F: '前锋',
};

vars.basketballPosition = {
  C: '中锋',
  SF: '小前锋',
  PF: '大前锋',
  SG: '得分后卫',
  PG: '组织后卫',
  F: '前锋',
  G: '后卫',
};

vars.matchStatus = {
  0: '未开赛',
  1: '进行中',
  '-1': '完赛',
  '-2': '取消/其他',
};

vars.eventReason = {
  1: '进球判定',
  2: '进球未判定',
  3: '点球判定',
  4: '点球未判定',
  5: '红牌判定',
  6: '出牌处罚判定',
  7: '错认身份',
  0: '其他',
};

vars.eventResultType = {
  1: '进球有效',
  2: '进球无效',
  3: '点球有效',
  4: '点球取消',
  5: '红牌有效',
  6: '红牌取消',
  7: '出牌处罚核实',
  8: '出牌处罚更改',
  9: '维持原判',
  10: '判罚更改',
  0: '其他',
};

vars.eventReasonType = {
  1: '犯规',
  2: '个人犯规',
  3: '侵犯对手/受伤换人',
  4: '战术犯规/战术换人',
  5: '进攻犯规',
  6: '无球犯规',
  7: '持续犯规',
  8: '持续侵犯',
  9: '暴力行为',
  10: '危险动作',
  11: '手球犯规',
  12: '严重犯规',
  13: '故意犯规',
  14: '阻挡进球机会',
  15: '拖延时间',
  16: '视频回看裁定',
  17: '判罚取消',
  18: '争论',
  19: '对判罚表达异议',
  20: '犯规和攻击言语',
  21: '过度庆祝',
  22: '没有回退到要求的距离',
  23: '打架',
  24: '辅助判罚',
  25: '替补席',
  26: '赛后行为',
  27: '其他原因',
  28: '未被允许进入场地',
  29: '进入比赛场地',
  30: '离开比赛赛场',
  31: '非体育道德行为',
  32: '非主观意愿的恶意犯规',
  33: '冒充或顶替',
  34: '干预var复审',
  35: '进入裁判评审区',
  36: '吐口水',
  37: '病毒',
  0: '其他',
};

vars.sportType = [
  // {key: -2, value: '已关注', name: 'sportType-(-2)'},
  {key: -1, value: '直播', name: 'sportType-(-1)'},
  {key: 0, value: '全部', name: 'sportType-(0)'},
  // {key: 1, value: '足球'},
  // {key: 2, value: '篮球'},
  // {key: 6, value: '其他'},
];

vars.countryCode = [
  {name: '马来西亚', code: '+60', engName: 'Malaysia'},
  {name: '新加坡', code: '+65', engName: 'Singapore'},
  {name: '中国大陆', code: '+86', engName: 'China'},
  {name: '中国香港', code: '+852', engName: 'HongKong'},
  {name: '中国澳门', code: '+853', engName: 'Macau'},
  {name: '中国台湾', code: '+886', engName: 'Taiwan'},
  {name: '菲律宾', code: '+63', engName: 'Philippines'},
  {name: '泰国', code: '+66', engName: 'Thailand'},
  {name: '越南', code: '+84', engName: 'Vietnam'},
];

vars.feedbackSubject = {
  1: '产品建议',
  2: '数据错误',
  3: '其他',
};

vars.shareLocation = {
  newsDetail: 1,
  matchDetail: 2,
  // program: 3,
  program: 4,
  aboutMe: 5
};

export default vars;
