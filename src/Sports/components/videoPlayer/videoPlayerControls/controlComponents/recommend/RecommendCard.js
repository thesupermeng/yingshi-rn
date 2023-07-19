import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {IconViewerGif} from '../../../../../assets';
import {
  matchOnTime,
  matchRunningStatusBasketball,
} from '../../../../../utility/date';
import {calculateScore, formatViewerCount} from '../../../../../utility/utils';

const limitText = (text, l) => {
  return text.length > l ? `${text.slice(0, l - 1)}...` : text;
};
export const RecommendCard = ({data}) => {
  const {match} = data;
  if (!match) {
    return <></>;
  }
  const {home, away, home_score, away_score, competition, sports_type} =
    data.match;

  const homeScore = calculateScore(home_score, sports_type);
  const awayScore = calculateScore(away_score, sports_type);
  const matchOnTimeGoing = matchOnTime(
    match.start_time,
    match?.sports_type,
    match.status,
    match.state,
  );

  const statusText = matchRunningStatusBasketball(
    match?.sports_type,
    match.status,
    match.state,
  );

  const Team = ({name, icon}) => {
    return (
      <View style={styles.teamGroup}>
        {icon && (
          <Image
            style={styles.teamIcon}
            source={{uri: icon}}
            resizeMode="contain"
          />
        )}
        <Text style={styles.teamName}>{limitText(name, 5)}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.card}>
      <View style={styles.titleRow}>
        <Text style={baseStyles.text}>
          {competition.name_short || competition.name}
        </Text>
        <View style={{flex: 1}}></View>
        <Image
          style={styles.icon}
          source={IconViewerGif}
          resizeMode="contain"
        />
        <Text style={baseStyles.text}>{formatViewerCount(data.view_num)}</Text>
      </View>
      <View style={styles.teamsRow}>
        <Team name={home.name_short || home.name} icon={home.icon} />
        <View style={styles.centerGroup}>
          <View style={styles.scoreGroup}>
            <Text style={styles.homeScore}>{homeScore}</Text>
            <Text style={styles.homeScore}>-</Text>
            <Text style={[styles.homeScore, styles.awayScore]}>
              {awayScore}
            </Text>
          </View>
          <Text style={baseStyles.text}>
            {statusText ? `${statusText}-` : ''}
            {matchOnTimeGoing}
          </Text>
        </View>
        <Team name={away.name_short || away.name} icon={away.icon} />
      </View>
    </SafeAreaView>
  );
};

const baseStyles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 9,
    flexWrap: 'nowrap',
  },
});
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(13, 13, 13, 0.9)',
    color: 'white',
    borderRadius: 8,
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
    margin: 5,
    display: 'flex',
  },
  titleRow: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  teamsRow: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamGroup: {
    alignItems: 'center',
  },
  teamIcon: {
    width: 30,
    height: 30,
  },
  teamName: {
    ...baseStyles.text,
    // fontSize: 12,
  },
  centerGroup: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -5,
  },
  scoreGroup: {
    flex: 0,
    flexDirection: 'row',
  },
  homeScore: {
    ...baseStyles.text,
    marginHorizontal: 3,
    fontWeight: 'bold',
    fontSize: 11,
  },
  awayScore: {
    color: '#FFA100',
  },
});
