import {SafeAreaView, ScrollView, View} from 'react-native';
import MatchHistory from '../../../../components/matchHistory';
import TeamStat from './teamStat';
import MatchAverage from './matchAverage';
import CustomMatchDetailsTabBar from '../../../../components/customMatchDetailsTabBar';
import styles from './style';
import AdsComp from '../../../../components/adsComp';

const BasketballDataPage = ({liveRoomMatchDetails, ads}) => {
  const tabBar = [
    {
      name: '球队概况',
      children: <TeamStat data={liveRoomMatchDetails}></TeamStat>,
    },
    {
      name: '场均对比',
      children: <MatchAverage data={liveRoomMatchDetails}></MatchAverage>,
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        {ads && <AdsComp item={ads} />}
        {tabBar.length && (
          <View>
            <CustomMatchDetailsTabBar tabBar={tabBar} />
            <View style={styles.firstBar}></View>
          </View>
        )}
        {liveRoomMatchDetails?.home != undefined &&
          liveRoomMatchDetails?.away != undefined &&
          liveRoomMatchDetails?.basketball_match_analysis?.history?.vs !=
            undefined &&
          liveRoomMatchDetails?.basketball_match_analysis?.history?.vs_total !=
            undefined && (
            <MatchHistory
              title="历史交锋"
              data={
                liveRoomMatchDetails?.basketball_match_analysis?.history?.vs
              }
              dataTotal={
                liveRoomMatchDetails?.basketball_match_analysis?.history
                  ?.vs_total
              }
              teamDetails={liveRoomMatchDetails?.home}
              sportsType={liveRoomMatchDetails?.sports_type}
            />
          )}
        {liveRoomMatchDetails?.basketball_match_analysis?.history?.home !=
          undefined &&
          liveRoomMatchDetails?.basketball_match_analysis?.history
            ?.home_total != undefined &&
          liveRoomMatchDetails?.home != undefined && (
            <MatchHistory
              title="近期战绩"
              data={
                liveRoomMatchDetails?.basketball_match_analysis?.history?.home
              }
              dataTotal={
                liveRoomMatchDetails?.basketball_match_analysis?.history
                  ?.home_total
              }
              teamDetails={liveRoomMatchDetails?.home}
              sportsType={liveRoomMatchDetails?.sports_type}
            />
          )}
        {liveRoomMatchDetails?.basketball_match_analysis?.history?.away !=
          undefined &&
          liveRoomMatchDetails?.basketball_match_analysis?.history
            ?.away_total != undefined &&
          liveRoomMatchDetails?.away != undefined && (
            <MatchHistory
              data={
                liveRoomMatchDetails?.basketball_match_analysis?.history?.away
              }
              dataTotal={
                liveRoomMatchDetails?.basketball_match_analysis?.history
                  ?.away_total
              }
              teamDetails={liveRoomMatchDetails?.away}
              sportsType={liveRoomMatchDetails?.sports_type}
            />
          )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BasketballDataPage;
