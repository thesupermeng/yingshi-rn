import {Image, ImageBackground, Text, View} from 'react-native';
import {HomeTeamField, iconUser} from '../../../assets';
import Player from '../player';
import styles from './style';

const HomeTeam = props => {
  const {lineUp, netWorth} = props;

  const player = data => {
    return data.map(player => {
      return (
        <Player
          team="home"
          key={'homePlayer' + player.id}
          player={player}></Player>
      );
    });
  };

  const formation = data => {
    const shift = data.slice(1); // the first array is subsitution so need to slice
    return shift.map((row, idx) => {
      return (
        <View key={'homeRow' + idx} style={styles.playersRow}>
          {row.length > 0 && player(row)}
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      {lineUp && formation(lineUp)}
      <View style={styles.netWorthContainer}>
        <Text style={styles.textPrice}>总身价: {netWorth}</Text>
      </View>
    </View>
  );
};
export default HomeTeam;
