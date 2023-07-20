import { View, Text, Image, ImageBackground } from 'react-native';
import { AwayIcon, HomeIcon } from '../../../assets';
import styles from './style';

const BasketballMatchTeamDetails = data => {
  const totalDataTemp = data?.totalData ?? [];
  const thisTimeDataTemp = data?.thisTimeData ?? [];
  const homeData = data?.homeData;
  const awayData = data?.awayData;
  const homeFoul = thisTimeDataTemp[4]?.home;
  const awayFoul = thisTimeDataTemp[4]?.away;
  const homeLeftPause = thisTimeDataTemp[3]?.home;
  const awayLeftPause = thisTimeDataTemp[3]?.away;
  let structuredData = [
    {
      title: '3分球',
      home: totalDataTemp[4]?.home ? totalDataTemp[4]?.home : 0,
      away: totalDataTemp[4]?.away ? totalDataTemp[4]?.away : 0,
    },

    {
      title: '2分球',
      home: totalDataTemp[20]?.home ? totalDataTemp[20]?.home : 0,
      away: totalDataTemp[20]?.away ? totalDataTemp[20]?.away : 0,
    },
    {
      title: '罚球',
      home: totalDataTemp[7]?.home ? totalDataTemp[7]?.home : 0,
      away: totalDataTemp[7]?.away ? totalDataTemp[7]?.away : 0,
    },
    {
      title: '罚球命中率',
      home: totalDataTemp[9]?.home ? totalDataTemp[9]?.home : 0,
      away: totalDataTemp[9]?.away ? totalDataTemp[9]?.away : 0,
    },
    // {
    //   title: '抢断',
    //   home:
    //     Number(
    //       data?.basketball_home_stats?.steals /
    //         data?.basketball_home_stats?.matches,
    //     ).toFixed(1) > 0
    //       ? Number(
    //           data?.basketball_home_stats?.steals /
    //             data?.basketball_home_stats?.matches,
    //         ).toFixed(1)
    //       : 0,
    //   away:
    //     Number(
    //       data?.basketball_away_stats?.steals /
    //         data?.basketball_away_stats?.matches,
    //     ).toFixed(1) > 0
    //       ? Number(
    //           data?.basketball_away_stats?.steals /
    //             data?.basketball_away_stats?.matches,
    //         ).toFixed(1)
    //       : 0,
    // },
  ];

  let calWidth = (data1, data2) => {
    return (Number(data1) / (Number(data1) + Number(data2))) * 100;
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.teamsView}>
        <View style={styles.teamView}>
          {homeData?.icon != undefined && homeData?.icon.length > 0 ? (
            <Image style={styles.teamImage} source={{ uri: homeData?.icon }} />
          ) : (
            <ImageBackground source={HomeIcon} style={styles.teamImage}>
              <Text style={styles.teamImageText(data.textColor)}>
                {homeData?.name.charAt(0)}
              </Text>
            </ImageBackground>
          )}
          <Text style={styles.teamText(data.textColor)} numberOfLines={1} ellipsizeMode="tail">
            {homeData?.name}
          </Text>
        </View>
        <View style={styles.teamView}>
          <Text style={styles.teamText(data.textColor)} numberOfLines={1} ellipsizeMode="tail">
            {awayData?.name}
          </Text>
          {awayData?.icon != undefined && awayData?.icon.length > 0 ? (
            <Image style={styles.teamImage} source={{ uri: awayData?.icon }} />
          ) : (
            <ImageBackground source={AwayIcon} style={styles.teamImage}>
              <Text style={styles.teamImageText(data.textColor)}>
                {awayData?.name.charAt(0)}
              </Text>
            </ImageBackground>
          )}
        </View>
      </View>
      <View style={styles.averageContainer}>
        <View style={styles.verticalMarkContainer}>
          <View style={styles.numberMatchContainer}>
            <Text style={styles.numberMatchTitle(data.textColor)}>本节犯规数</Text>
            <Text style={styles.numberMatchValue(data.textColor)}>
              {homeFoul ? homeFoul : '0'}
            </Text>
          </View>
          <View style={styles.numberMatchContainer}>
            <Text style={styles.numberMatchTitle(data.textColor)}>剩余暂停</Text>
            <Text style={styles.numberMatchValue(data.textColor)}>
              {homeLeftPause ? homeLeftPause : '0'}
            </Text>
          </View>
        </View>
        <View
          style={{
            // flex: 1,
            display: 'flex',
            width: '50%',
            // backgroundColor: 'gold',
            alignItems: 'center',
          }}>
          {structuredData.map((item, idx) => {
            let tempPercent = 0;
            tempPercent = calWidth(item.home, item.away) + '%';
            if (item.home == 0 && item.away == 0) {
              tempPercent = '50%';
            }
            return (
              <View
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // backgroundColor: 'green',
                }}
                key={`basketballMatchDetail-${idx}`}>
                <View style={styles.statTitleView}>
                  <Text style={styles.statTitleText(data.textColor)}>{item.title}</Text>
                </View>
                <View style={styles.statView}>
                  <View style={[styles.statTextView, { alignItems: 'flex-end' }]}>
                    <Text style={styles.statText(data.textColor)}>{item.home}</Text>
                  </View>
                  <View style={styles.statBar}>
                    <View
                      style={{
                        height: 5,
                        borderRadius: 4,
                        backgroundColor: '#FFA100',
                        width: tempPercent,
                      }}></View>
                  </View>
                  <View
                    style={[styles.statTextView, { alignItems: 'flex-start' }]}>
                    <Text style={styles.statText(data.textColor)}>{item.away}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.verticalMarkContainer}>
          <View style={styles.numberMatchContainer}>
            <Text style={styles.numberMatchTitle(data.textColor)}>本节犯规数</Text>
            <Text style={styles.numberMatchValue(data.textColor)}>
              {awayFoul ? awayFoul : '0'}
            </Text>
          </View>
          <View style={styles.numberMatchContainer}>
            <Text style={styles.numberMatchTitle(data.textColor)}>剩余暂停</Text>
            <Text style={styles.numberMatchValue(data.textColor)}>
              {awayLeftPause ? awayLeftPause : '0'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BasketballMatchTeamDetails;
