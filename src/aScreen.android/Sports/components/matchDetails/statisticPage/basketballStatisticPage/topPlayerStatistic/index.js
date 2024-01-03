import {View, Text, Image} from 'react-native';
import styles from './style';
import {BasketballPlayerPlaceholder} from '../../../../../assets';

const TopPlayerStatistic = ({data}) => {
  let calHomeStat = (homeStat, awayStat) => {
    return homeStat / (homeStat + awayStat) > 0
      ? homeStat / (homeStat + awayStat)
      : 0;
  };

  let calAwayStat = (homeStat, awayStat) => {
    // console.log("limau " + awayStat / (homeStat + awayStat))
    return awayStat / (homeStat + awayStat) > 0
      ? awayStat / (homeStat + awayStat)
      : 0;
  };

  return (
    <View>
      <View>
        <Text style={styles.titleText}>本场最佳</Text>
      </View>
      <View>
        {data?.home_top_scorer != undefined &&
          data?.home_top_scorer.length > 0 &&
          data?.away_top_scorer != undefined &&
          data?.away_top_scorer.length > 0 && (
            <View>
              <View>
                <Text style={styles.statText}>得分</Text>
              </View>
              <View style={styles.statView}>
                <View style={styles.statViewLeft}>
                  <View style={styles.playerImgView}>
                    <Image
                      style={
                        data?.home_top_scorer[4] != undefined &&
                        data?.home_top_scorer[4].length > 0
                          ? styles.playerImg
                          : styles.playerDefaultImg
                      }
                      source={
                        data?.home_top_scorer[4] != undefined &&
                        data?.home_top_scorer[4].length > 0
                          ? {uri: data?.home_top_scorer[4]}
                          : BasketballPlayerPlaceholder
                      }
                    />
                  </View>
                  <View style={styles.textViewLeft}>
                    <Text style={styles.playerNumText}>
                      {data?.home_top_scorer[5].length > 0 &&
                        '#' + data?.home_top_scorer[5]}
                    </Text>
                    <Text
                      ellipsizeMode="tail"
                      numberOfLines={1}
                      style={styles.playerNameText}>
                      {data?.home_top_scorer[1]}
                    </Text>
                  </View>
                </View>
                <View style={styles.statisticView}>
                  <View style={styles.playerHomeStat}>
                    <Text style={styles.playerHomeStatText}>
                      {data?.home_top_scorer[6][19]}
                    </Text>
                    <View
                      style={[
                        styles.playerHomeStatView,
                        {
                          height:
                            45 *
                            calHomeStat(
                              data?.home_top_scorer[6][19],
                              data.away_top_scorer[6][19],
                            ),
                        },
                      ]}></View>
                  </View>
                  <View style={styles.playerAwayStat}>
                    <Text style={styles.playerAwayStatText}>
                      {data.away_top_scorer[6][19]}
                    </Text>
                    <View
                      style={[
                        styles.playerAwayStatView,
                        {
                          height:
                            45 *
                            calAwayStat(
                              data?.home_top_scorer[6][19],
                              data.away_top_scorer[6][19],
                            ),
                        },
                      ]}></View>
                  </View>
                </View>
                <View style={styles.statViewRight}>
                  <View style={styles.textViewRight}>
                    <Text style={styles.playerNumText}>
                      {data?.away_top_scorer[5].length > 0 &&
                        '#' + data?.away_top_scorer[5]}
                    </Text>
                    <Text
                      ellipsizeMode="tail"
                      numberOfLines={1}
                      style={styles.playerNameText}>
                      {data?.away_top_scorer[1]}
                    </Text>
                  </View>
                  <View style={styles.playerImgView}>
                    <Image
                      style={
                        data?.away_top_scorer[4] != undefined &&
                        data?.away_top_scorer[4].length > 0
                          ? styles.playerImg
                          : styles.playerDefaultImg
                      }
                      source={
                        data?.away_top_scorer[4] != undefined &&
                        data?.away_top_scorer[4].length > 0
                          ? {uri: data?.away_top_scorer[4]}
                          : BasketballPlayerPlaceholder
                      }
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
        {data?.home_top_rebound != undefined &&
          data?.home_top_rebound.length > 0 &&
          data?.away_top_rebound != undefined &&
          data?.away_top_rebound.length > 0 && (
            <View>
              <View>
                <Text style={styles.statText}>篮板</Text>
              </View>
              <View style={styles.statView}>
                <View style={styles.statViewLeft}>
                  <View style={styles.playerImgView}>
                    <Image
                      style={
                        data?.home_top_rebound[4] != undefined &&
                        data?.home_top_rebound[4].length > 0
                          ? styles.playerImg
                          : styles.playerDefaultImg
                      }
                      source={
                        data?.home_top_rebound[4] != undefined &&
                        data?.home_top_rebound[4].length > 0
                          ? {uri: data?.home_top_rebound[4]}
                          : BasketballPlayerPlaceholder
                      }
                    />
                  </View>
                  <View style={styles.textViewLeft}>
                    <Text style={styles.playerNumText}>
                      {data?.home_top_rebound[5].length > 0 &&
                        '#' + data?.home_top_rebound[5]}
                    </Text>
                    <Text
                      ellipsizeMode="tail"
                      numberOfLines={1}
                      style={styles.playerNameText}>
                      {data?.home_top_rebound[1]}
                    </Text>
                  </View>
                </View>
                <View style={styles.statisticView}>
                  <View style={styles.playerHomeStat}>
                    <Text style={styles.playerHomeStatText}>
                      {data?.home_top_rebound[6][12]}
                    </Text>
                    <View
                      style={[
                        styles.playerHomeStatView,
                        {
                          height:
                            45 *
                            calHomeStat(
                              data?.home_top_rebound[6][12],
                              data.away_top_rebound[6][12],
                            ),
                        },
                      ]}></View>
                  </View>
                  <View style={styles.playerAwayStat}>
                    <Text style={styles.playerAwayStatText}>
                      {data.away_top_rebound[6][12]}
                    </Text>
                    <View
                      style={[
                        styles.playerAwayStatView,
                        {
                          height:
                            45 *
                            calAwayStat(
                              data?.home_top_rebound[6][12],
                              data.away_top_rebound[6][12],
                            ),
                        },
                      ]}></View>
                  </View>
                </View>
                <View style={styles.statViewRight}>
                  <View style={styles.textViewRight}>
                    <Text style={styles.playerNumText}>
                      {data?.away_top_rebound[5].length > 0 &&
                        '#' + data?.away_top_rebound[5]}
                    </Text>
                    <Text
                      ellipsizeMode="tail"
                      numberOfLines={1}
                      style={styles.playerNameText}>
                      {data?.away_top_rebound[1]}
                    </Text>
                  </View>
                  <View style={styles.playerImgView}>
                    <Image
                      style={
                        data?.away_top_rebound[4] != undefined &&
                        data?.away_top_rebound[4].length > 0
                          ? styles.playerImg
                          : styles.playerDefaultImg
                      }
                      source={
                        data?.away_top_rebound[4] != undefined &&
                        data?.away_top_rebound[4].length > 0
                          ? {uri: data?.away_top_rebound[4]}
                          : BasketballPlayerPlaceholder
                      }
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
        {data?.home_top_assist != undefined &&
          data?.home_top_assist.length > 0 &&
          data?.away_top_assist != undefined &&
          data?.away_top_assist.length > 0 && (
            <View>
              <View>
                <Text style={styles.statText}>助攻</Text>
              </View>
              <View style={styles.statView}>
                <View style={styles.statViewLeft}>
                  <View style={styles.playerImgView}>
                    <Image
                      style={
                        data?.home_top_assist[4] != undefined &&
                        data?.home_top_assist[4].length > 0
                          ? styles.playerImg
                          : styles.playerDefaultImg
                      }
                      source={
                        data?.home_top_assist[4] != undefined &&
                        data?.home_top_assist[4].length > 0
                          ? {uri: data?.home_top_assist[4]}
                          : BasketballPlayerPlaceholder
                      }
                    />
                  </View>
                  <View style={styles.textViewLeft}>
                    <Text style={styles.playerNumText}>
                      {data?.home_top_assist[5].length > 0 &&
                        '#' + data?.home_top_assist[5]}
                    </Text>
                    <Text
                      ellipsizeMode="tail"
                      numberOfLines={1}
                      style={styles.playerNameText}>
                      {data?.home_top_assist[1]}
                    </Text>
                  </View>
                </View>
                <View style={styles.statisticView}>
                  <View style={styles.playerHomeStat}>
                    <Text style={styles.playerHomeStatText}>
                      {data?.home_top_assist[6][13]}
                    </Text>
                    <View
                      style={[
                        styles.playerHomeStatView,
                        {
                          height:
                            45 *
                            calHomeStat(
                              data?.home_top_assist[6][13],
                              data.away_top_assist[6][13],
                            ),
                        },
                      ]}></View>
                  </View>
                  <View style={styles.playerAwayStat}>
                    <Text style={styles.playerAwayStatText}>
                      {data.away_top_assist[6][13]}
                    </Text>
                    <View
                      style={[
                        styles.playerAwayStatView,
                        {
                          height:
                            45 *
                            calAwayStat(
                              data?.home_top_assist[6][13],
                              data.away_top_assist[6][13],
                            ),
                        },
                      ]}></View>
                  </View>
                </View>
                <View style={styles.statViewRight}>
                  <View style={styles.textViewRight}>
                    <Text style={styles.playerNumText}>
                      {data?.away_top_assist[5].length > 0 &&
                        '#' + data?.away_top_assist[5]}
                    </Text>
                    <Text
                      ellipsizeMode="tail"
                      numberOfLines={1}
                      style={styles.playerNameText}>
                      {data?.away_top_assist[1]}
                    </Text>
                  </View>
                  <View style={styles.playerImgView}>
                    <Image
                      style={
                        data?.away_top_assist[4] != undefined &&
                        data?.away_top_assist[4].length > 0
                          ? styles.playerImg
                          : styles.playerDefaultImg
                      }
                      source={
                        data?.away_top_assist[4] != undefined &&
                        data?.away_top_assist[4].length > 0
                          ? {uri: data?.away_top_assist[4]}
                          : BasketballPlayerPlaceholder
                      }
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
      </View>
    </View>
  );
};

export default TopPlayerStatistic;
