import {Image, ImageBackground, Text, View} from 'react-native';
import {
  Assist,
  Goal,
  iconUser,
  OwnGoal,
  PenaltyGoal,
  RedCard,
  SubIn,
  SubOut,
  YellowCard,
  YellowToRedCard,
  HomePlayer,
  AwayPlayer,
} from '../../../assets';
import {Colors} from '../../../global/colors';
import {round} from '../../../utility/utils';
import styles from './style';

const Player = props => {
  const {player, team} = props;
  const rateColor = rate => {
    return rate >= 8.1
      ? {backgroundColor: '#FD9F28'}
      : rate >= 7.1
      ? {backgroundColor: '#FFBA63'}
      : rate >= 6.1
      ? {backgroundColor: '#027B3C'}
      : {backgroundColor: '#8C8C8C'};
  };
  const {incidents} = player;

  // 换人事件
  const subComponent = (incidents, playerId) => {
    return incidents.map(incident => {
      if (incident.type === 9) {
        return (
          <View key={'subsitution' + playerId} style={styles.subContainer}>
            <Image
              style={styles.imageIncident}
              source={incident.in_player.id === playerId ? SubIn : SubOut}
              resizeMode="stretch"></Image>
          </View>
        );
      }
    });
  };

  // 卡片事件
  const cardComponent = incidents => {
    let cardType;

    incidents.map(incident => {
      if (incident.type === 3 || incident.type === 4 || incident.type === 15) {
        cardType =
          incident.type === 3
            ? YellowCard
            : incident.type === 4
            ? RedCard
            : YellowToRedCard;
      }
    });
    if (cardType) {
      return (
        <View style={styles.cardContainer}>
          <Image
            style={styles.imageIncident}
            source={cardType}
            resizeMode="stretch"></Image>
        </View>
      );
    }
  };

  // 进球事件
  const goalComponent = (incidents, type, playerId) => {
    let totalOwnGoal = incidents.filter(incident => {
      if (incident.type === 17) return true;
    }).length;
    let totalPenatlyGoal = incidents.filter(incident => {
      if (incident.type === 8) return true;
    }).length;
    let totalGoal = incidents.filter(incident => {
      if (incident.type === 1 && incident.player.id === playerId) return true;
    }).length;
    // 17 - 乌龙球
    if (totalOwnGoal > 0 && type === 17) {
      return (
        <View style={styles.ownGoalContainer}>
          <Image
            style={styles.imageIncident}
            source={OwnGoal}
            resizeMode="stretch"></Image>
          {totalOwnGoal > 1 && (
            <View style={styles.assistCountContainer}>
              <Text style={styles.textNumberOfCount}>{totalOwnGoal}</Text>
            </View>
          )}
        </View>
      );
    }
    // 8 - 点球
    if (totalPenatlyGoal > 0 && type === 8) {
      return (
        <View style={styles.ballContainer}>
          <Image
            style={styles.imageIncident}
            source={PenaltyGoal}
            resizeMode="stretch"></Image>
          {totalPenatlyGoal > 1 && (
            <View style={styles.ballCountContainer}>
              <Text style={styles.textNumberOfCount}>{totalPenatlyGoal}</Text>
            </View>
          )}
        </View>
      );
    }
    // 1 - 进球
    if (totalGoal > 0 && type === 1) {
      return (
        <View style={styles.ballContainer}>
          <Image
            style={styles.imageIncident}
            source={Goal}
            resizeMode="stretch"></Image>
          {totalGoal > 1 && (
            <View style={styles.ballCountContainer}>
              <Text style={styles.textNumberOfCount}>{totalGoal}</Text>
            </View>
          )}
        </View>
      );
    }
  };

  // 助攻事件
  const assistComponent = (incidents, playerId) => {
    let totalAssist = incidents.filter(incident => {
      if (
        incident?.type === 1 &&
        (incident?.assist1?.id === playerId ||
          incident?.assist2?.id === playerId)
      )
        return true;
    }).length;
    if (totalAssist > 0) {
      return (
        <View style={styles.assistContainer}>
          <Image
            style={styles.imageIncident}
            source={Assist}
            resizeMode="stretch"></Image>
          {totalAssist > 1 && (
            <View style={styles.assistCountContainer}>
              <Text style={styles.textNumberOfCount}>{totalAssist}</Text>
            </View>
          )}
        </View>
      );
    }
  };

  const topLeft = () => {
    return (
      <View style={styles.topLeftContainer}>
        {incidents && assistComponent(incidents, player?.id)}
      </View>
    );
  };

  const topRight = () => {
    return (
      <View style={styles.topRightContainer}>
        {incidents && subComponent(incidents, player?.id)}
      </View>
    );
  };

  const bottomLeft = () => {
    return (
      <View style={styles.bottomLeftContainer}>
        <View style={styles.bottomLeftFlex}>
          {incidents && goalComponent(incidents, 17)}
          {incidents && cardComponent(incidents)}
        </View>
      </View>
    );
  };

  const bottomRight = () => {
    return (
      <View style={styles.bottomRightContainer}>
        <View style={styles.bottomRightFlex}>
          {incidents && goalComponent(incidents, 1, player.id)}
          {incidents && goalComponent(incidents, 8)}
        </View>
      </View>
    );
  };

  return (
    <View key={team + player.id} style={styles.player}>
      <View style={styles.imageContainer}>
        {player?.logo ? (
          <Image
            style={styles.imagePlayer}
            source={{
              uri: player?.logo
                ? player?.logo
                : team === 'home'
                ? HomePlayer
                : AwayPlayer,
            }}></Image>
        ) : (
          <ImageBackground
            style={[
              styles.imagePlayer,
              {justifyContent: 'center', alignContent: 'center'},
            ]}
            source={team === 'home' ? HomePlayer : AwayPlayer}
            resizeMode="center">
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'PingFang SC',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: 6,
                color: '#F4F4F4',
              }}>
              {player?.shirt_number}
            </Text>
          </ImageBackground>
        )}
        {topLeft()}
        {topRight()}
        {bottomLeft()}
        {bottomRight()}
      </View>
      <Text style={styles.textPlayerNumber}>{player?.shirt_number}</Text>
      <Text style={styles.textPlayerName} numberOfLines={1}>
        {player?.name}
      </Text>
      <View style={[styles.playerRate, rateColor(player?.rating)]}>
        <Text style={[styles.textPlayerRate]}>{round(player?.rating, 1)}</Text>
      </View>
    </View>
  );
};

export default Player;
