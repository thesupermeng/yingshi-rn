import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {MatchDetailsType} from '../../Sports/types/matchTypes';
import {
  calculateScore,
  formatMatchDate,
  getMatchStatus,
} from '../../Sports/utility/utils';
import {AwayIcon, HomeIcon} from '../../Sports/assets';

interface Props {
  match_details: MatchDetailsType;
  onPress: any;
  params?: any[];
  activeOpacity?: number;
  isEditing?: boolean;
}

export default function VodSportCard({
  match_details,
  onPress,
  activeOpacity = 0.2,
  isEditing = false,
  ...params
}: Props) {
  const {colors, spacing, textVariants} = useTheme();

  const scoreDisplay = (
    homeScore: number[],
    awayScore: number[],
    sportType: number,
    isHome?: boolean,
  ) => {
    const home = calculateScore(homeScore, sportType);
    const away = calculateScore(awayScore, sportType);
    const isHomeShow = isHome ?? true;

    if (home > away && isHomeShow) {
      return <Text style={{fontSize: 14, color: colors.primary}}>{home}</Text>;
    } else {
      return <Text style={{fontSize: 14, color: 'white'}}>{away}</Text>;
    }
  };

  return (
    <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress}>
      <View style={{...styles.card, gap: spacing.s}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{...styles.spaceBetween, color: colors.muted}}>
            {match_details?.competition?.name_short}
          </Text>
          <View style={styles.matchStatus}>
            {match_details?.streams != undefined &&
            match_details?.streams?.length > 0 &&
            match_details?.streams?.some(streamer => streamer.status == 3) ? (
              <View style={{flexDirection: 'row'}}>
                <View style={styles.liveIcon} />
                <Text style={{...styles.liveStatus}}>直播中</Text>
              </View>
            ) : (
              <Text style={textVariants.small}>
                {/* {getMatchStatus(
                  match_details?.state,
                  match_details?.status,
                  match_details?.sports_type,
                )} */}
                {new Date(match_details?.match_time_ts * 1000).toLocaleString(
                  'zh-Hans-CN',
                  {
                    month: 'short',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                  },
                )}
              </Text>
            )}
          </View>
        </View>

        <View style={styles.matchCard}>
          <View style={styles.matchTeam}>
            {match_details?.home?.icon != undefined &&
            match_details?.home?.icon.length > 0 ? (
              <FastImage
                style={styles.teamImage}
                source={{uri: match_details?.home?.icon}}
              />
            ) : (
              <ImageBackground style={styles.teamImage} source={HomeIcon}>
                <Text style={styles.teamLogoText}>
                  {match_details?.home?.name.charAt(0)}
                </Text>
              </ImageBackground>
            )}
            <Text
              style={{fontSize: 14, flexShrink: 1, color: 'white'}}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {match_details.home?.name}
            </Text>
          </View>
          <View>
            {scoreDisplay(
              match_details?.home_score,
              match_details?.away_score,
              match_details?.sports_type,
            )}
          </View>
        </View>

        <View style={styles.matchCard}>
          <View style={styles.matchTeam}>
            {match_details?.away?.icon != undefined &&
            match_details?.away?.icon.length > 0 ? (
              <FastImage
                style={styles.teamImage}
                source={{uri: match_details?.away?.icon}}
              />
            ) : (
              <ImageBackground style={styles.teamImage} source={AwayIcon}>
                <Text style={styles.teamLogoText}>
                  {match_details?.away?.name.charAt(0)}
                </Text>
              </ImageBackground>
            )}
            <Text
              style={{fontSize: 14, flexShrink: 1, color: 'white'}}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {match_details.away?.name}
            </Text>
          </View>
          <View>
            {scoreDisplay(
              match_details?.home_score,
              match_details?.away_score,
              match_details?.sports_type,
              false,
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    display: 'flex',
    flex: 1,
    width: 200,
    overflow: 'hidden',
    borderRadius: 10,
    marginRight: 7,
    backgroundColor: '#1D2023',
  },
  description: {
    flexGrow: 1,
    paddingTop: 2,
    paddingBottom: 2,
    display: 'flex',
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  image: {
    width: 154,
    height: 87,
  },
  text: {
    flexShrink: 1,
  },
  matchStatus: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  liveStatus: {
    color: '#F6423A',
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'PingFang SC',
  },
  liveIcon: {
    backgroundColor: 'red',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 5,
  },
  spaceBetween: {
    marginRight: 5,
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'PingFang SC',
  },
  teamImage: {
    height: 30,
    width: 30,
    marginLeft: 5,
    marginRight: 5,
    resizeMode: 'contain',
  },
  matchCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  matchTeam: {
    flexDirection: 'row',
    // width: '35%',
    alignItems: 'center',
  },
  teamLogoText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    marginTop: 'auto',
    color: 'white',
    fontSize: 18,
  },
});
