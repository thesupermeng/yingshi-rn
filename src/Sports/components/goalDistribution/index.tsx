import { View, Text, Image, ImageBackground } from 'react-native';
import { AwayIcon, HomeIcon } from '../../assets';
import styles from './tt_with_success';
import { ttShared, tt_terms } from '../../types/tt_sound';

interface ttSmall {
  homeTeam?: tt_terms
  awayTeam?: ttShared
  data?: any
}

const TtZoomVolume = ({ homeTeam, awayTeam, data } : ttSmall) => {
  let getHomeHighest = () => {
    let homeHighest = 0;
    data?.home_scored?.forEach((element : any) => {
      if (Number(element[0]) > homeHighest) {
        homeHighest = Number(element[0]);
      }
    });
    return homeHighest;
  };

  let getAwayHighest = () => {
    let awayHighest = 0;
    data?.away_scored?.forEach((element : any) => {
      if (Number(element[0]) > awayHighest) {
        awayHighest = Number(element[0]);
      }
    });
    return awayHighest;
  };

  let calHomeTotal = () => {
    let HomeTotal = 0;
    data?.home_scored?.forEach((element : any) => {
      HomeTotal += Number(element[0]);
    });
    return HomeTotal;
  };

  let calAwayTotal = () => {
    let AwayTotal = 0;
    data?.away_scored?.forEach((element : any) => {
      AwayTotal += Number(element[0]);
    });
    return AwayTotal;
  };

  return (
    <View>
      <View style={styles.goalDistributionTitleView}>
        <Text style={styles.goalDistributionTitle}>进球分布</Text>
        <Text style={styles.goalDistributionSubTitle}>
          (本赛季同赛事进球分布)
        </Text>
      </View>
      <View style={styles.goalDistributionView}>
        <View style={styles.goalDistributionTeamView}></View>
        <View style={styles.goalDistributionTimeView}>
          <Text style={styles.goalDistributionTime}>0'</Text>
          <Text style={styles.goalDistributionTime}>15'</Text>
          <Text style={styles.goalDistributionTime}>30'</Text>
          <Text style={styles.goalDistributionHalfTime}>45'</Text>
        </View>
        <View style={styles.goalDistributionTimeView1}>
          <Text style={styles.goalDistributionTimeRight}>60'</Text>
          <Text style={styles.goalDistributionTimeRight}>75'</Text>
          <Text style={styles.goalDistributionTimeRight}>90'</Text>
        </View>
      </View>
      <View style={styles.goalDistributionView}>
        <View style={styles.goalDistributionTeamView}>
          {homeTeam?.icon != undefined && homeTeam?.icon?.length > 0 ? (
            <Image
              source={{ uri: homeTeam.icon }}
              style={styles.teamIcon}></Image>
          ) : (
            <ImageBackground source={HomeIcon} style={styles.teamIcon}>
              <Text style={styles.teamLogoText}>
                {homeTeam?.name?.charAt(0)}
              </Text>
            </ImageBackground>
          )}
          <Text numberOfLines={1}
            ellipsizeMode={'tail'} style={styles.teamNameText}>{homeTeam?.name}</Text>
          <Text style={styles.homeTotalText}>{calHomeTotal()}</Text>
        </View>
        <View style={styles.goalDistributionHomeView}>
          <View
            style={
              Number(data?.home_scored[0][0]) == getHomeHighest()
                ? styles.goalDistributionHomeHighest
                : styles.goalDistributionHome
            }>
            <Text style={styles.goalDistributionText}>
              {data?.home_scored[0][0]}
            </Text>
          </View>
          <View
            style={
              Number(data?.home_scored[1][0]) == getHomeHighest()
                ? styles.goalDistributionHomeHighest
                : styles.goalDistributionHome
            }>
            <Text style={styles.goalDistributionText}>
              {data?.home_scored[1][0]}
            </Text>
          </View>
          <View
            style={
              Number(data?.home_scored[2][0]) == getHomeHighest()
                ? styles.goalDistributionHomeHighest
                : styles.goalDistributionHome
            }>
            <Text style={styles.goalDistributionText}>
              {data?.home_scored[2][0]}
            </Text>
          </View>
        </View>
        <View style={styles.goalDistributionHomeView}>
          <View
            style={
              Number(data?.home_scored[3][0]) == getHomeHighest()
                ? styles.goalDistributionHomeHighest
                : styles.goalDistributionHome
            }>
            <Text style={styles.goalDistributionText}>
              {data?.home_scored[3][0]}
            </Text>
          </View>
          <View
            style={
              Number(data?.home_scored[4][0]) == getHomeHighest()
                ? styles.goalDistributionHomeHighest
                : styles.goalDistributionHome
            }>
            <Text style={styles.goalDistributionText}>
              {data?.home_scored[4][0]}
            </Text>
          </View>
          <View
            style={
              Number(data?.home_scored[5][0]) == getHomeHighest()
                ? styles.goalDistributionHomeHighest
                : styles.goalDistributionHome
            }>
            <Text style={styles.goalDistributionText}>
              {data?.home_scored[5][0]}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.goalDistributionView}>
        <View style={styles.goalDistributionTeamView}>
          {awayTeam?.icon != undefined && awayTeam?.icon?.length > 0 ? (
            <Image
              source={{ uri: awayTeam.icon }}
              style={styles.teamIcon}></Image>
          ) : (
            <ImageBackground source={AwayIcon} style={styles.teamIcon}>
              <Text style={styles.teamLogoText}>
                {awayTeam?.name?.charAt(0)}
              </Text>
            </ImageBackground>
          )}
          <Text numberOfLines={1}
            ellipsizeMode={'tail'} style={styles.teamNameText}>{awayTeam?.name}</Text>
          <Text style={styles.awayTotalText}>{calAwayTotal()}</Text>
        </View>
        <View style={styles.goalDistributionAwayView}>
          <View
            style={
              Number(data?.away_scored[0][0]) == getAwayHighest()
                ? styles.goalDistributionAwayHighest
                : styles.goalDistributionAway
            }>
            <Text style={styles.goalDistributionText}>
              {data?.away_scored[0][0]}
            </Text>
          </View>
          <View
            style={
              Number(data?.away_scored[1][0]) == getAwayHighest()
                ? styles.goalDistributionAwayHighest
                : styles.goalDistributionAway
            }>
            <Text style={styles.goalDistributionText}>
              {data?.away_scored[1][0]}
            </Text>
          </View>
          <View
            style={
              Number(data?.away_scored[2][0]) == getAwayHighest()
                ? styles.goalDistributionAwayHighest
                : styles.goalDistributionAway
            }>
            <Text style={styles.goalDistributionText}>
              {data?.away_scored[2][0]}
            </Text>
          </View>
        </View>
        <View style={styles.goalDistributionAwayView}>
          <View
            style={
              Number(data?.away_scored[3][0]) == getAwayHighest()
                ? styles.goalDistributionAwayHighest
                : styles.goalDistributionAway
            }>
            <Text style={styles.goalDistributionText}>
              {data?.away_scored[3][0]}
            </Text>
          </View>
          <View
            style={
              Number(data?.away_scored[4][0]) == getAwayHighest()
                ? styles.goalDistributionAwayHighest
                : styles.goalDistributionAway
            }>
            <Text style={styles.goalDistributionText}>
              {data?.away_scored[4][0]}
            </Text>
          </View>
          <View
            style={
              Number(data?.away_scored[5][0]) == getAwayHighest()
                ? styles.goalDistributionAwayHighest
                : styles.goalDistributionAway
            }>
            <Text style={styles.goalDistributionText}>
              {data?.away_scored[5][0]}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TtZoomVolume;
