import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  ShowMore,
  ShowLess,
  BasketballAwayTeam,
  BasketballIcon,
  SubBasketballPlayer
} from '../../../../../assets';
import styles from './yys_nbatrophy';
import PlayerStats from '../../../../../components/playerStats';
import {useState} from 'react';

const PlayerStatistic = ({showTitle = true, data, teamData, status}) => {
  const [showHomeMore, setShowHomeMore] = useState(false);

  return (
    <View>
      {showTitle && (
        <View style={styles.teamView}>
          <Text style={styles.titleText}>球员数据</Text>
        </View>
      )}
      <View style={styles.teamView}>
        <Image style={styles.teamImage} source={{uri:teamData?.icon}}/>
        <Text style={styles.teamText}>{teamData?.name}</Text>
      </View>
      <View style={!showHomeMore && styles.showLess}>
        <PlayerStats playerData={data} status={status}/>
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
        <View style={styles.bottomRightView}>
          <View style={[styles.bottomView, {marginLeft: 5}]}>
            <Image source={BasketballAwayTeam} style={styles.infoImage} />
            <Text style={styles.infoText}>首发球员</Text>
          </View>
          <View style={[styles.bottomView, {marginLeft: 5}]}>
            <Image source={SubBasketballPlayer} style={styles.infoImage} />
            <Text style={styles.infoText}>候补球员</Text>
          </View>
          <View style={[styles.bottomView, {marginLeft: 5}]}>
            <Image source={BasketballIcon} style={styles.infoImage} />
            <Text style={styles.infoText}>场上球员</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayerStatistic;
