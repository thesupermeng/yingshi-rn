import {ScrollView, SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import TtZoomVolume from '../../../goalDistribution';
import MatchHistory from '../../../matchHistory';
import SubsComponent from '../../../substituteComponent';
import styles from './tt_with_success';
import EmptyDataPage from '../../../tt_line';
import { ttVideoSuccess } from '../../../../types/tt_sound';

interface ttSmall {
  liveRoomMatchDetails?: ttVideoSuccess,
}

const FootballDataPage = ({liveRoomMatchDetails} : ttSmall) => {
  return (
    <SafeAreaView style={{height: '100%'}}>
      {liveRoomMatchDetails?.football_match_analysis == undefined &&
        liveRoomMatchDetails?.football_away_injuries == undefined && (
          <EmptyDataPage />
        )}

      <ScrollView>
        {liveRoomMatchDetails?.status == 0 &&
          liveRoomMatchDetails?.home != undefined &&
          liveRoomMatchDetails?.away != undefined &&
          ((liveRoomMatchDetails?.football_home_injuries != undefined &&
            liveRoomMatchDetails?.football_home_injuries?.length > 0) ||
            (liveRoomMatchDetails?.football_away_injuries != undefined &&
              liveRoomMatchDetails?.football_away_injuries?.length > 0)) && (
            <View>
              <SubsComponent
                homeTeam={liveRoomMatchDetails?.home}
                awayTeam={liveRoomMatchDetails?.away}
                homePlayerList={liveRoomMatchDetails?.football_home_injuries}
                awayPlayerList={liveRoomMatchDetails?.football_away_injuries}
                isInjuryList={true}
              />
            </View>
          )}
        {liveRoomMatchDetails?.home != undefined &&
          liveRoomMatchDetails?.away != undefined &&
          liveRoomMatchDetails?.football_match_analysis?.goal_distribution !=
            undefined &&
          liveRoomMatchDetails?.football_match_analysis?.goal_distribution
            ?.home_scored?.length > 0 &&
          liveRoomMatchDetails?.football_match_analysis?.goal_distribution
            ?.away_scored?.length > 0 && (
            <View>
              <TtZoomVolume
                homeTeam={liveRoomMatchDetails?.home}
                awayTeam={liveRoomMatchDetails?.away}
                data={
                  liveRoomMatchDetails?.football_match_analysis
                    ?.goal_distribution
                }
              />
              <View style={styles.firstBar}></View>
            </View>
          )}
        {liveRoomMatchDetails?.football_match_analysis?.history?.vs !=
          undefined &&
          liveRoomMatchDetails?.football_match_analysis?.history?.vs_total !=
            undefined &&
          liveRoomMatchDetails?.home != undefined && (
            <View>
              <MatchHistory
                title="历史交锋"
                data={
                  liveRoomMatchDetails?.football_match_analysis?.history?.vs
                }
                dataTotal={
                  liveRoomMatchDetails?.football_match_analysis?.history
                    ?.vs_total
                }
                teamDetails={liveRoomMatchDetails?.home}
                sportsType={liveRoomMatchDetails?.sports_type}
              />
              <View style={styles.firstBar}></View>
            </View>
          )}

        {liveRoomMatchDetails?.football_match_analysis?.history?.home !=
          undefined &&
          liveRoomMatchDetails?.football_match_analysis?.history?.home_total !=
            undefined &&
          liveRoomMatchDetails?.home != undefined && (
            <MatchHistory
              title="近期战绩"
              data={
                liveRoomMatchDetails?.football_match_analysis?.history?.home
              }
              dataTotal={
                liveRoomMatchDetails?.football_match_analysis?.history
                  ?.home_total
              }
              teamDetails={liveRoomMatchDetails?.home}
              sportsType={liveRoomMatchDetails?.sports_type}
            />
          )}
        {liveRoomMatchDetails?.football_match_analysis?.history?.away !=
          undefined &&
          liveRoomMatchDetails?.football_match_analysis?.history?.away_total !=
            undefined &&
          liveRoomMatchDetails?.away != undefined && (
            <MatchHistory
              data={
                liveRoomMatchDetails?.football_match_analysis?.history?.away
              }
              dataTotal={
                liveRoomMatchDetails?.football_match_analysis?.history
                  ?.away_total
              }
              teamDetails={liveRoomMatchDetails?.away}
              sportsType={liveRoomMatchDetails?.sports_type}
            />
          )}

        {liveRoomMatchDetails?.status != 0 &&
          liveRoomMatchDetails?.home != undefined &&
          liveRoomMatchDetails?.away != undefined &&
          ((liveRoomMatchDetails?.football_home_injuries != undefined &&
            liveRoomMatchDetails?.football_home_injuries?.length > 0) ||
            (liveRoomMatchDetails?.football_away_injuries != undefined &&
              liveRoomMatchDetails?.football_away_injuries?.length > 0)) && (
            <View>
              <View style={styles.secondBar}></View>
              <SubsComponent
                homeTeam={liveRoomMatchDetails?.home}
                awayTeam={liveRoomMatchDetails?.away}
                homePlayerList={liveRoomMatchDetails?.football_home_injuries}
                awayPlayerList={liveRoomMatchDetails?.football_away_injuries}
                isInjuryList={true}
              />
            </View>
          )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FootballDataPage;
