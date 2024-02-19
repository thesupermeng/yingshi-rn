import {View, Text, Image, ImageBackground} from 'react-native';
import styles from './yys_nbatrophy';
import { HomeIcon, AwayIcon } from '../../../../../assets';

const TeamStat = ({data}) => {
  return (
    <View>
      <View style={styles.teamsView}>
        <View style={styles.teamView}>
          {data?.home?.icon != undefined && data?.home?.icon.length > 0 ? (
            <Image style={styles.teamImage} source={{uri: data?.home?.icon}} />
          ) : (
            <ImageBackground source={HomeIcon} style={styles.teamImage}>
              <Text style={styles.teamImageText}>
                {data?.home?.name.charAt(0)}
              </Text>
            </ImageBackground>
          )}
          <Text style={styles.teamText} numberOfLines={1} ellipsizeMode="tail">
            {data?.home?.name}
          </Text>
        </View>
        <View style={styles.teamView}>
          <Text style={styles.teamText} numberOfLines={1} ellipsizeMode="tail">
            {data?.away?.name}
          </Text>
          {data?.away?.icon != undefined && data?.away?.icon.length > 0 ? (
            <Image style={styles.teamImage} source={{uri: data?.away?.icon}} />
          ) : (
            <ImageBackground source={AwayIcon} style={styles.teamImage}>
              <Text style={styles.teamImageText}>
                {data?.away?.name.charAt(0)}
              </Text>
            </ImageBackground>
          )}
        </View>
      </View>
      <View style={styles.teamsView}>
        <View style={styles.statView}>
          <Text style={styles.teamStatText}>
            {data?.basketball_home_ranking?.position != undefined &&
            data?.basketball_home_ranking?.position != ''
              ? data?.basketball_home_ranking?.position
              : '-'}
          </Text>
        </View>
        <View style={styles.statTitleView}>
          <Text style={styles.teamStatTitleText}>排名</Text>
        </View>
        <View style={styles.statViewRight}>
          <Text style={styles.teamStatText}>
            {data?.basketball_away_ranking?.position != undefined &&
            data?.basketball_away_ranking?.position != ''
              ? data?.basketball_away_ranking?.position
              : '-'}
          </Text>
        </View>
      </View>
      <View style={styles.teamsView}>
        <View style={styles.statView}>
          <Text style={styles.teamStatText}>
            {data?.basketball_home_ranking?.won_rate != undefined &&
            data?.basketball_home_ranking?.won_rate != ''
              ? data?.basketball_home_ranking?.won_rate
              : '-'}
          </Text>
        </View>
        <View style={styles.statTitleView}>
          <Text style={styles.teamStatTitleText}>胜率</Text>
        </View>
        <View style={styles.statViewRight}>
          <Text style={styles.teamStatText}>
            {data?.basketball_away_ranking?.won_rate != undefined &&
            data?.basketball_away_ranking?.won_rate != ''
              ? data?.basketball_away_ranking?.won_rate
              : '-'}
          </Text>
        </View>
      </View>
      <View style={styles.teamsView}>
        <View style={styles.statView}>
          <Text style={styles.teamStatText}>
            {data?.basketball_home_ranking?.streaks != undefined &&
            data?.basketball_home_ranking?.streaks != ''
              ? data?.basketball_home_ranking?.streaks
              : '-'}
          </Text>
        </View>
        <View style={styles.statTitleView}>
          <Text style={styles.teamStatTitleText}>近况</Text>
        </View>
        <View style={styles.statViewRight}>
          <Text style={styles.teamStatText}>
            {data?.basketball_away_ranking?.streaks != undefined &&
            data?.basketball_away_ranking?.streaks != ''
              ? data?.basketball_away_ranking?.streaks
              : '-'}
          </Text>
        </View>
      </View>
      <View style={styles.teamsView}>
        <View style={styles.statView}>
          <Text style={styles.teamStatText}>
            {data?.basketball_home_ranking?.last10 != undefined &&
            data?.basketball_home_ranking?.last10 != ''
              ? data?.basketball_home_ranking?.last10
              : '-'}
          </Text>
        </View>
        <View style={styles.statTitleView}>
          <Text style={styles.teamStatTitleText}>近10场战绩</Text>
        </View>
        <View style={styles.statViewRight}>
          <Text style={styles.teamStatText}>
            {data?.basketball_away_ranking?.last10 != undefined &&
            data?.basketball_away_ranking?.last10 != ''
              ? data?.basketball_away_ranking?.last10
              : '-'}
          </Text>
        </View>
      </View>
      <View style={styles.teamsView}>
        <View style={styles.statView}>
          <Text style={styles.teamStatText}>
            {data?.basketball_home_ranking?.home != undefined &&
            data?.basketball_home_ranking?.home != ''
              ? data?.basketball_home_ranking?.home
              : '-'}
          </Text>
        </View>
        <View style={styles.statTitleView}>
          <Text style={styles.teamStatTitleText}>主场战绩</Text>
        </View>
        <View style={styles.statViewRight}>
          <Text style={styles.teamStatText}>
            {data?.basketball_away_ranking?.home != undefined &&
            data?.basketball_away_ranking?.home != ''
              ? data?.basketball_away_ranking?.home
              : '-'}
          </Text>
        </View>
      </View>
      <View style={styles.teamsView}>
        <View style={styles.statView}>
          <Text style={styles.teamStatText}>
            {data?.basketball_home_ranking?.away != undefined &&
            data?.basketball_home_ranking?.away != ''
              ? data?.basketball_home_ranking?.away
              : '-'}
          </Text>
        </View>
        <View style={styles.statTitleView}>
          <Text style={styles.teamStatTitleText}>客场战绩</Text>
        </View>
        <View style={styles.statViewRight}>
          <Text style={styles.teamStatText}>
            {data?.basketball_away_ranking?.away != undefined &&
            data?.basketball_away_ranking?.away != ''
              ? data?.basketball_away_ranking?.away
              : '-'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TeamStat;
