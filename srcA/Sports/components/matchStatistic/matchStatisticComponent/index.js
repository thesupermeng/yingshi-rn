import {View, Text} from 'react-native';
import styles from './style';
import vars from '../../../utility/vars';

const MatchStatisticComponent = ({index, data, sportType}) => {
  const {away, home, type} = data;

  const homePercent = () => {
    return ((Number(home) / (Number(home) + Number(away))) * 100) ? (Number(home) / (Number(home) + Number(away))) * 100 + '%' : '0%';
  };

  const awayPercent = () => {
    return ((Number(away) / (Number(home) + Number(away))) * 100) ? (Number(away) / (Number(home) + Number(away))) * 100 + '%' : '0%';
  };

  return (
    <View key={`matchAverage-${index}`} style={{height: 43}}>
            <View style={styles.statTitleView}>
              <Text style={styles.statTitleText}>{sportType == 1 ? vars.footballMatchStats[type] : type}</Text>
            </View>
            <View style={styles.statView}>
              <View style={styles.statTextView}>
                <Text style={styles.statText}>{data.home}</Text>
              </View>
              <View style={home == 0 && away == 0 ? [styles.statBar, {backgroundColor: '#383838'}] : styles.statBar}>
                <View
                  style={{
                    height: 5,
                    borderRadius: 4,
                    backgroundColor: '#FAC33D',
                    width: homePercent(),
                  }}></View>
              </View>
              <View style={styles.statTextViewRight}>
                <Text style={styles.statText}>{data.away}</Text>
              </View>
            </View>
          </View>
    // <View style={styles.matchStatisticView}>
    //   <View style={styles.homeStatisticView}>
    //     <View style={{width: '47%'}}>
    //       <Text style={true ? styles.highStatisticText : styles.statisticText}>
    //         {home}
    //       </Text>
    //     </View>
    //     <View style={styles.progressBar}>
    //       <View
    //         style={{
    //           height: '100%',
    //           width: homePercent(),
    //           marginLeft: 'auto',
    //           backgroundColor: '#FAC33D',
    //         }}></View>
    //     </View>
    //   </View>
    //   <View style={styles.statisticTitleView}>
    //     <Text style={styles.statisticTitleText}>
    //       {sportType == 1 ? vars.footballMatchStats[type] : type}
    //     </Text>
    //   </View>
    //   <View style={styles.awayStatisticView}>
    //     <View style={styles.progressBar}>
    //       <View
    //         style={{
    //           height: '100%',
    //           width: awayPercent(),
    //           backgroundColor: '#07C160',
    //         }}></View>
    //     </View>
    //     <View style={{width: '47%', alignItems: 'flex-end'}}>
    //       <Text style={true ? styles.highStatisticText : styles.statisticText}>
    //         {away}
    //       </Text>
    //     </View>
    //   </View>
    // </View>
  );
};

export default MatchStatisticComponent;
