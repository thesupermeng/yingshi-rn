import {ImageBackground, Text, View} from 'react-native';
import styles from './style';
import {AwayTeamField} from '../../../assets';
import Player from '../player';

const AwayTeam = props => {
  const {lineUp, netWorth} = props;

  const player = data => {
    var test = [...data].reverse();
    return test.map(player => {
      return (
        <Player
          team="away"
          key={'awayPlayer' + player.id}
          player={player}></Player>
      );
    });
  };

  const formation = data => {
    const shift = data.slice(1); // the first array is subsitution so need to slice
    return shift.reverse().map((row, idx) => {
      return (
        <View key={'awayRow' + idx} style={styles.playersRow}>
          {row.length > 0 && player(row)}
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.netWorthContainer}>
        <Text style={styles.textPrice}>总身价: {netWorth}</Text>
      </View>
      {lineUp && formation(lineUp)}
    </View>
  );
};
export default AwayTeam;
