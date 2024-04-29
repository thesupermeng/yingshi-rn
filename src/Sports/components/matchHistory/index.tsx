import { SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';
import styles from './tt_with_success';
import { HomeIcon, AwayIcon } from '../../assets';
import { calculateScore } from '../../utility/utils';
import { ttShared, V } from '../../types/tt_sound';
import { ttAway } from '../../types/tt_zhubo';

interface ttSmall {
  data?: V[]
  dataTotal?: any
  teamDetails?: ttShared
  isHome?: boolean
  title?: string
  sportsType?: number
}

const MatchHistory = ({
  data,
  dataTotal,
  teamDetails,
  isHome = true,
  title = '',
  sportsType = 3,
}: ttSmall) => {

  console.log("SPORTS TYPE", sportsType)

  let checkIsHome = (homeID : number) => {
    if (teamDetails?.id == homeID) {
      return true;
    } else {
      return false;
    }
  };

  let formatDate = (data : string) => {
    let date = new Date(data);
    return (
      date.getFullYear() +
      '/' +
      ('0' + Number(date.getMonth() + 1)).slice(-2) +
      '/' +
      ('0' + Number(date.getDate())).slice(-2)
    );
  };

  return (
    <SafeAreaView>
      {title != '' && (
        <View style={styles.titleDiv}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      )}
      <View style={styles.matchStatistic}>
        {sportsType == 2 && (
          <View style={styles.basketballDiv}>
            <View style={styles.iconBasketballDiv}>
              {teamDetails?.icon != undefined && teamDetails.icon?.length > 0 ? (
                <Image
                  style={styles.matchBasketballImage}
                  source={{ uri: teamDetails.icon }}
                />
              ) : (
                <ImageBackground
                  style={styles.matchBasketballImage}
                  source={isHome ? HomeIcon : AwayIcon}>
                  <Text style={styles.teamBasketballLogoText}>
                    {teamDetails?.name.charAt(0)}
                  </Text>
                </ImageBackground>
              )}
              <Text style={styles.titleBasketballText}>{teamDetails?.name}</Text>
            </View>
            <View style={styles.winRateView}>
              <Text style={styles.winRateTotalText1}>胜率</Text>
              <Text style={styles.winRateTotalText2}>
                {dataTotal.win_rate + '%'}
              </Text>
              <Text style={styles.winRateDataText}>
                {dataTotal.wins + '胜' + dataTotal.losses + '负'}
              </Text>
            </View>
          </View>
        )}
        {sportsType == 1 && (
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.iconDiv}>
              {teamDetails?.icon != undefined && teamDetails.icon?.length > 0 ? (
                <Image
                  style={styles.matchImage}
                  source={{ uri: teamDetails.icon }}
                />
              ) : (
                <ImageBackground
                  style={styles.matchImage}
                  source={isHome ? HomeIcon : AwayIcon}>
                  <Text style={styles.teamLogoText}>
                    {teamDetails?.name.charAt(0)}
                  </Text>
                </ImageBackground>
              )}
            </View>
            <View style={styles.statisticDiv}>
              <View style={styles.statisticInnerDiv}>
                <View style={styles.goalConcededTotal}>
                  <Text style={styles.goalConcededTotalText1}>进失</Text>
                  <Text style={styles.goalConcededTotalText2}>
                    {Number(dataTotal.goals_scored) +
                      Number(dataTotal.goals_conceded)}
                  </Text>
                </View>
                <View>
                  <Text style={styles.goalConcededDataText}>
                    {'进' +
                      dataTotal.goals_scored +
                      '失' +
                      dataTotal.goals_conceded}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.statisticDiv}>
              <View style={styles.statisticInnerDiv}>
                <View style={styles.goalConcededTotal}>
                  <Text style={styles.goalConcededTotalText1}>胜率</Text>
                  <Text style={styles.goalConcededTotalText2}>
                    {dataTotal.win_rate + '%'}
                  </Text>
                </View>
                <View>
                  <Text style={styles.goalConcededDataText}>
                    {dataTotal.wins +
                      '胜' +
                      dataTotal.draws +
                      '平' +
                      dataTotal.losses +
                      '负'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        {/* {sportsType != 1 && (
          <View style={{flexDirection: 'row'}}>
            <View style={styles.statisticDiv}>
              <View style={styles.statisticInnerDiv}></View>
            </View>
            <View style={styles.statisticDiv}>
              <View style={styles.statisticInnerDiv}></View>
            </View>
          </View>
        )} */}
        <View style={styles.matchDiv}>
          <View style={styles.matchTable}>
            <View style={styles.matchTableColumn1}>
              <Text style={styles.matchTableColumnText1}>近期</Text>
            </View>
            <View style={styles.matchTableColumn2}>
              <Text style={styles.matchTableColumnText2}>
                {data?.length + '场'}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.historyTitle}>
        <View style={styles.historyDateTimeTitle}>
          <Text style={styles.historyTitleText}>日期/赛事</Text>
        </View>
        <View style={styles.historyHomeAwayTitle}>
          <Text style={styles.historyTitleText}>主队</Text>
        </View>
        <View style={styles.historyScoreTitle}>
          <Text style={styles.historyTitleText}>比分</Text>
        </View>
        <View style={styles.historyHomeAwayTitle}>
          <Text style={styles.historyTitleText}>客队</Text>
        </View>
      </View>
      {data?.map((item, index) => {
        return (
          <View key={`match-history-item-${index}`} style={styles.historyContent}>
            <View
              style={
                index % 2 != 0
                  ? styles.historyDateTimeGrey
                  : styles.historyDateTime
              }>
              <Text style={styles.historyDateTimeText}>
                {formatDate(item?.match_time)}
              </Text>
              <Text style={styles.historyDateTimeText}>
                {item?.competition?.name_short}
              </Text>
            </View>
            <View
              style={
                index % 2 != 0
                  ? [styles.historyHomeAwayGrey, { alignItems: 'center' }]
                  : [styles.historyHomeAway, { alignItems: 'center' }]
              }>
              <Text
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={styles.historyHomeAwayText}>
                {item?.home?.name}
              </Text>
            </View>
            <View
              style={
                index % 2 != 0 ? styles.historyScoreGrey : styles.historyScore
              }>
              <Text
                style={
                  calculateScore(item?.home_scores, item?.home.sports_type) >
                    calculateScore(item?.away_scores, item?.away.sports_type)
                    ? checkIsHome(item?.home.id)
                      ? styles.historyScoreTextWin
                      : styles.historyScoreTextLost
                    : calculateScore(item?.home_scores, item?.home.sports_type) <
                      calculateScore(item?.away_scores, item?.away.sports_type)
                      ? checkIsHome(item?.home.id)
                        ? styles.historyScoreTextLost
                        : styles.historyScoreTextWin
                      : styles.historyScoreTextDraw
                }>
                {calculateScore(item?.home_scores, item?.home.sports_type) +
                  '-' +
                  calculateScore(item?.away_scores, item?.away.sports_type)}
              </Text>
              <Text style={styles.historyScoreText}>
                {sportsType == 1
                  ? '(' + item?.home_scores[1] + '-' + item?.away_scores[1] + ')'
                  : '(' +
                  Number(item?.home_scores[0] + item?.home_scores[1]) +
                  '-' +
                  Number(item?.away_scores[0] + item?.away_scores[1]) +
                  ')'}
              </Text>
            </View>
            <View
              style={
                index % 2 != 0
                  ? [styles.historyHomeAwayGrey, { alignItems: 'center' }]
                  : [styles.historyHomeAway, { alignItems: 'center' }]
              }>
              <Text
                numberOfLines={1}
                ellipsizeMode={'tail'}
                style={styles.historyHomeAwayText}>
                {item?.away?.name}
              </Text>
            </View>
          </View>
        );
      })}
    </SafeAreaView>
  );
};

export default MatchHistory;
