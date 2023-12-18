import {Image, Text, View} from 'react-native';
import {logoUser} from '../../../assets';
import styles from './style';

const Bottom = props => {
  const {teamIcon, formation, coach} = props;

  return (
    <View style={styles.bottom}>
      <View style={styles.teamContainer}>
        <View style={styles.imageContianer}>
          <Image
            style={styles.imageLogo}
            source={{uri: teamIcon}}
            resizeMode="contain"
          />
        </View>
        <View style={styles.formationContainer}>
          <Text style={styles.text}>阵型: {formation}</Text>
          <Text style={styles.text}>教练: {coach}</Text>
        </View>
      </View>
    </View>
  );
};

export default Bottom;
