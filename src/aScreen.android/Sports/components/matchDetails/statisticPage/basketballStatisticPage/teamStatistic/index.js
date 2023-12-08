import MatchStatistic from '../../../../../components/matchStatistic';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  ShowMore,
  ShowLess,
  BasketballAwayTeam,
  BasketballIcon,
} from '../../../../../assets';
import styles from './style';
import {useState} from 'react';

const TeamStatistic = ({showTitle = true, data, sportType}) => {
  const [showHomeMore, setShowHomeMore] = useState(false);

  const TeamStatisticTitle = [
    '命中次数',
    '投篮次数',
    '投篮命中率',
    '三分投篮命中次数',
    '三分投篮次数',
    '三分球投篮命中率 (%)',
    '罚球命中次数',
    '罚球投篮次数',
    '罚球命中率 (%)',
    '进攻篮板',
    '防守篮板',
    '总的篮板',
    '助攻数',
    '抢断数',
    '盖帽数',
    '失误次数',
    '个人犯规次数',
    '得分',
  ];

  const filteredData = () => {
    if(data != undefined && data.length > 0){
        let filterData = data.filter((item, index) => index != 0 && index != data.length - 5)
        let structuredData = [];
        filterData.forEach((item, index) => {
          if(index < filterData.length - 3){
            structuredData.push({ away: item.away, home: item.home, type: TeamStatisticTitle[index] })
          }
        });
        return structuredData
    }
  }

  return (
    <View>
      {showTitle && (
        <View style={styles.teamView}>
          <Text style={styles.titleText}>球队数据</Text>
        </View>
      )}
      <View style={!showHomeMore && styles.showLess}>
        <MatchStatistic statisticData={filteredData()} sportType={sportType}/>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.showButton}
          onPress={() => setShowHomeMore(!showHomeMore)}>
          <Text style={styles.showButtonText}>
            {showHomeMore ? '收起' : '更多'}
          </Text>
          <Image
            style={styles.showButtonIcon}
            source={showHomeMore ? ShowLess : ShowMore}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeamStatistic;
