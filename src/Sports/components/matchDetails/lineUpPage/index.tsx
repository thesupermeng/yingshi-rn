import { ScrollView, View } from 'react-native';
import LineUpFootball from '../../../components/lineUpFootball';
import SubsComponent from '../../substituteComponent';
import styles from './style';
import FootballIconComponent from '../../../components/footballIconComponent';
import EmptyDataPage from '../../EmptyDataPage';
import { MatchDetailWithRankingData } from '../../../types/liveMatchTypes';
import { LineUpType } from '../../../types/lineUpTypes';

// import AdsComp from '../../../components/adsComp';
// import {useAds} from '../../../hooks/useAds';
interface Props {
  liveRoomMatchDetails?: MatchDetailWithRankingData,
  liveRoomLineup?: LineUpType
}


const LineUpPage = ({ liveRoomLineup, liveRoomMatchDetails }: Props) => {
  // const adsList = useSelector(state => state.adsList);
  // const [ads] = useAds(adsList);
  return (
    <View>
      {liveRoomLineup?.sports_type !== 1 && <EmptyDataPage />}
      <ScrollView>
        {/* {ads && <AdsComp item={ads} />} */}
        {liveRoomLineup?.sports_type === 1 && (
          <View>
            <LineUpFootball
              detail={liveRoomMatchDetails}
              lineUp={liveRoomLineup}></LineUpFootball>
            {liveRoomLineup?.football_match_lineup != undefined &&
              liveRoomLineup.football_match_lineup?.home != undefined &&
              liveRoomLineup.football_match_lineup?.away != undefined && (
                <SubsComponent
                  homeTeam={liveRoomLineup?.home}
                  awayTeam={liveRoomLineup?.away}
                  homePlayerList={liveRoomLineup?.football_match_lineup?.home[0]}
                  awayPlayerList={
                    liveRoomLineup?.football_match_lineup?.away[0]
                  } />
              )}
          </View>
        )}

        {liveRoomMatchDetails?.home != undefined &&
          liveRoomMatchDetails?.away != undefined &&
          ((liveRoomMatchDetails?.football_home_injuries != undefined &&
            liveRoomMatchDetails?.football_home_injuries?.length > 0) ||
            (liveRoomMatchDetails?.football_away_injuries != undefined &&
              liveRoomMatchDetails?.football_away_injuries?.length > 0)) && (
            <View style={{ backgroundColor: '#161616' }}>
              <View style={styles.firstBar}></View>
              <SubsComponent
                homeTeam={liveRoomMatchDetails?.home}
                awayTeam={liveRoomMatchDetails?.away}
                homePlayerList={liveRoomMatchDetails?.football_home_injuries}
                awayPlayerList={liveRoomMatchDetails?.football_away_injuries}
                isInjuryList={true}
                showTeamIcon={false}
              />
            </View>
          )}
        {liveRoomLineup?.sports_type === 1 && (
          <View style={{ backgroundColor: '#14161A' }}>
            <View style={styles.firstBar}></View>
            <FootballIconComponent showLessIcon={true} />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default LineUpPage;
