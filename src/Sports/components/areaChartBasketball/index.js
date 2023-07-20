import {Image, Text, View, useWindowDimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Colors} from '../../global/colors';
import DefaultTeamIcon from '../defaultTeamIcon';
import styles from './style';
import {calculateScore} from '../../utility/utils';

const AreaChartBasketball = props => {
  const {liveRoomUpdate} = props;
  if (!liveRoomUpdate || !liveRoomUpdate?.basketball_match_trend) return;
  const {basketball_match_trend, home, away} = liveRoomUpdate;
  const count = basketball_match_trend?.count; // 总场数
  const per = basketball_match_trend?.per; // 场数时间
  const max = basketball_match_trend?.max; // 分数最大差距
  const matchStatus = liveRoomUpdate?.status;
  const homeScore = calculateScore(
    liveRoomUpdate?.home_score,
    liveRoomUpdate?.sports_type,
  );
  const awayScore = calculateScore(
    liveRoomUpdate?.away_score,
    liveRoomUpdate?.sports_type,
  );
  const scoreDif = Math.abs(homeScore - awayScore);
  const totalScore = homeScore + awayScore;
  const chartData = basketball_match_trend?.data ?? [];
  const {width} = useWindowDimensions();
  const widthLength = width * 0.82; //控制长度，看你要多长

  let newArray = []; // 重新设置 array 以便 areachart 看起来没那么怪
  const positive = num => num > 0;
  const negative = num => num < 0;
  chartData?.forEach((x, idx) => {
    let next;
    if (idx < chartData.length - 1) {
      next = chartData[idx + 1];
      if (x === 0 || next === 0) return newArray.push(x);
      if ((positive(x) && negative(next)) || (negative(x) && positive(next))) {
        newArray.push(x);
        newArray.push(0);
        return;
      } else {
        newArray.push(x);
        return;
      }
    } else {
      newArray.push(x);
    }
  });

  const chartHome = newArray.map(x => (x >= 0 ? x : 0));
  const chartAway = newArray.map(x => (x >= 0 ? 0 : Math.abs(x)));
  const totalTime =
    chartData.length > per * count ? chartData.length : per * count;
  const time = chartData.length;

  // 获取不同比赛类型的时间轴
  const getMinutesFormat = () => {
    let minutesFormat = [];
    const totalCount =
      chartData.length / per > count ? chartData.length / per : count; // 检查是否有 OT
    for (let index = 0; index <= totalCount; index++) {
      const name =
        index < count
          ? `${per * index}'`
          : totalCount <= count
          ? '完赛'
          : index === totalCount
          ? '完赛'
          : `OT${Math.abs(count - index - 1)}`;
      minutesFormat.push({min: per * index, name: name});
    }
    return minutesFormat;
  };

  const minutes = getMinutesFormat();

  return (
    <View style={styles.container}>
      <View style={styles.rowContent}>
        <View style={styles.leftContent}></View>
        <View style={styles.rightContent}>
          <View
            style={{
              position: 'relative',
              flexDirection: 'row',
              paddingBottom: 20,
              // backgroundColor: 'brown',
              // width: '100%',
              width: widthLength,
            }}>
            {minutes?.map((e, index) => {
              return (
                <Text
                  key={index}
                  style={[
                    styles.minuteText,
                    {
                      position: 'absolute',
                      left: (e.min / totalTime) * widthLength - 5,
                    },
                  ]}>
                  {e.name}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
      <View style={styles.rowContent}>
        <View style={{...styles.leftContent, paddingBottom: 12}}>
          {home?.icon ? (
            <Image style={styles.teamIcon} source={{uri: home?.icon}}></Image>
          ) : (
            <DefaultTeamIcon iconSize={20} isHome={true} text={home?.name} />
          )}
          {away?.icon ? (
            <Image style={styles.teamIcon} source={{uri: away?.icon}}></Image>
          ) : (
            <DefaultTeamIcon iconSize={20} isHome={false} text={away?.name} />
          )}
        </View>
        <View style={styles.rightContent}>
          <View style={{position: 'relative'}}>
            {/* 背景颜色 */}
            <View
              style={{
                position: 'absolute',
                height: 40,
                width: widthLength,
              }}>
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: '50%',
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(255, 161, 0, 0.18)',
                }}></View>
              <View
                style={{
                  position: 'absolute',
                  top: '50%',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(7, 193, 96, 0.18)',
                }}></View>
            </View>
            {/* 时间指标 */}
            <View
              style={{
                position: 'absolute',
                height: 40,
                width: 1,
                zIndex: 99,
                backgroundColor: Colors.colorPrimary,
                left: (widthLength * time) / totalTime - 1,
              }}
            />
            <LineChart
              data={{
                datasets: [
                  {
                    data: chartHome,
                    color: (opacity = 1) => '#FFA100',
                    strokeWidth: 0.1,
                  },
                  {data: [0]}, //min
                  {data: [max]}, //max
                ],
              }}
              width={(widthLength * (time + 1)) / totalTime}
              height={27}
              withDots={false}
              withInnerLines={false}
              withOuterLines={false}
              withVerticalLabels={false}
              withHorizontalLabels={false}
              chartConfig={{
                backgroundColor: '#FFA100',
                backgroundGradientFrom: '#FFA100',
                backgroundGradientTo: '#07C160',
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                fillShadowGradientOpacity: 0,
                fillShadowGradientFromOpacity: 1,
                fillShadowGradientToOpacity: 1,
                color: (opacity = 1) => '#FFA100',
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                useShadowColorFromDataset: false,
              }}
              // bezier
              style={{paddingRight: 0, paddingTop: 0}}
            />
            <LineChart
              data={{
                datasets: [
                  {
                    data: chartAway,
                    color: (opacity = 1) => '#07C160',
                    strokeWidth: 0.1,
                  },
                  {data: [0]}, //min
                  {data: [max]}, //max
                ],
              }}
              width={(widthLength * (time + 1)) / totalTime}
              height={27}
              withDots={false}
              withInnerLines={false}
              withOuterLines={false}
              withVerticalLabels={false}
              withHorizontalLabels={false}
              chartConfig={{
                backgroundColor: '#FFA100',
                backgroundGradientFrom: '#FFA100',
                backgroundGradientTo: '#07C160',
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                fillShadowGradientOpacity: 0,
                fillShadowGradientFromOpacity: 1,
                fillShadowGradientToOpacity: 1,
                color: (opacity = 1) => '#07C160',
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                useShadowColorFromDataset: false,
              }}
              // bezier
              style={{
                paddingRight: 0,
                paddingTop: 0,
                top: -14,
                transform: [{rotateX: '180deg'}],
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.rowContent}>
        <View style={styles.scoreDetailsTextContainer}>
          <Text style={styles.scoreDetailsText}>最高分差: {max}分</Text>
        </View>
        {matchStatus === -1 && (
          <View style={styles.scoreDetailsTextContainer}>
            <Text style={styles.scoreDetailsText}>完场分差: {scoreDif}分</Text>
          </View>
        )}
        {matchStatus === -1 && (
          <View style={styles.scoreDetailsTextContainer}>
            <Text style={styles.scoreDetailsText}>
              完场总分: {totalScore}分
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default AreaChartBasketball;
