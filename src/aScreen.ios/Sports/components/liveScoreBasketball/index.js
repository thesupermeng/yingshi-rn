import {Dimensions, ScrollView, Text, View} from 'react-native';
import {Colors} from '../../global/colors';
import {calculateScore} from '../../utility/utils';
import styles from './style';

const LiveScoreBasketball = props => {
  const middleWidth = Dimensions.get('window').width * 0.65 - 30;
  const {liveRoomUpdate} = props;
  if (!liveRoomUpdate) return;
  const {home, away, home_score, away_score, sports_type, basketball_match} =
    liveRoomUpdate;
  const period_count = basketball_match?.period_count;
  const over_time_score = basketball_match?.over_time_score;
  const scores = [];
  // 队伍名字
  const team = {
    header: '球队',
    home: home?.name_short ? home?.name_short : home?.name,
    away: away?.name_short ? away?.name_short : away?.name,
  };
  // 检查分数是否 0
  const isZeroScore = score => {
    return !score ? '-' : score;
  };
  // 比赛分数节标题
  const scoreHeaderName = (period_count, index) => {
    if (period_count === 2) {
      if (index === 0) return '上半场';
      if (index === 1) return '下半场';
    }
    if (period_count === 4) {
      return `Q${index + 1}`;
    }
  };
  // 对应不同比赛，restructure比分格式
  for (let index = 0; index <= period_count; index++) {
    if (index === period_count) {
      if (over_time_score?.length > 0) {
        for (let idx = 0; idx <= over_time_score.length; idx++) {
          scores.push({
            header: `OT${idx + 1}`,
            home: isZeroScore(home_score[idx]),
            away: isZeroScore(away_score[idx]),
          });
        }
      } else if (home_score[index] && away_score[index]) {
        scores.push({
          header: 'OT1',
          home: isZeroScore(home_score[index]),
          away: isZeroScore(away_score[index]),
        });
      }
    } else {
      scores.push({
        header: scoreHeaderName(period_count, index),
        home: isZeroScore(home_score[index]),
        away: isZeroScore(away_score[index]),
      });
    }
  }
  // 总分
  const totalScore = {
    header: '总分',
    home: calculateScore(home_score, sports_type),
    away: calculateScore(away_score, sports_type),
  };
  // 判断分数的总长度，给予相对的长度 列子（ 4节+OT1+OT2+OT3 > MiddleWidth ? 1节长度*节数 : view的长度）
  const ScrollViewWidth = (width, length) => {
    return width * length >= middleWidth ? width * length : middleWidth;
  };
  const divider = () => {
    return (
      <View
        style={{
          borderBottomColor: Colors.colorLightGrey,
          borderBottomWidth: 0.5,
          width: 100,
        }}></View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.textTeamHeader}>{team.header}</Text>
        {divider()}
        <Text style={styles.textTeam} numberOfLines={1}>
          {team.home}
        </Text>
        {divider()}
        <Text style={styles.textTeam} numberOfLines={1}>
          {team.away}
        </Text>
      </View>
      <View style={styles.middle}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{width: ScrollViewWidth(56, scores.length)}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              
            }}>
            {scores.map((x, idx) => {
              return (
                <View
                  style={styles.scores}
                  key={`liveScoreBasketball-${liveRoomUpdate?.id}-${idx}`}>
                  <Text style={styles.textScoreHeader}>{x.header}</Text>
                  {divider()}
                  <Text style={styles.textScore}>{x.home}</Text>
                  {divider()}
                  <Text style={styles.textScore}>{x.away}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.right}>
        <Text style={styles.textScoreHeader}>{totalScore.header}</Text>
        {divider()}
        <Text style={styles.textScore}>{totalScore.home}</Text>
        {divider()}
        <Text style={styles.textScore}>{totalScore.away}</Text>
      </View>
    </View>
  );
};

export default LiveScoreBasketball;
