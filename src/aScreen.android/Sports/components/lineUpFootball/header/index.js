import {Image, Text, View} from 'react-native';
import {logoUser} from '../../../assets';
import styles from './style';

const Header = props => {
  const {teamIcon, formation, coach, referee, location} = props;

  return (
    <View style={styles.header}>
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
      <View style={styles.rightContainer}>
        <Text style={styles.text}>主裁判: {referee}</Text>
        <Text style={styles.text}>地点: {location}</Text>
      </View>
    </View>
  );
};

export default Header;
