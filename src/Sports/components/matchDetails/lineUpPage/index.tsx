import { ScrollView, View } from 'react-native';
import LineUpFootball from '../../../components/lineUpFootball';
import SubsComponent from '../../substituteComponent';
import styles from './wawa_hiad_iconnewchat';
import FootballIconComponent from '../../../components/footballIconComponent';
import EmptyDataPage from '../../wawa_shoot_round';
import { wawaReactnativeultimatelistviewDisconnected } from '../../../types/wawa_phoneshare_reactnavigation';
import { wawaIconsharefriends } from '../../../types/wawa_disconnectedlogo';
import { useIsFocused } from '@react-navigation/native';

interface wawaAwayShow {
  liveRoomMatchDetails?: wawaReactnativeultimatelistviewDisconnected,
  liveRoomLineup?: wawaIconsharefriends
}


const LineUpPage = ({ liveRoomLineup, liveRoomMatchDetails }: wawaAwayShow) => {
  const isFocus = useIsFocused();
  // const adsList = useSelector(state => state.adsList);
  

  return (
    <View>
      {liveRoomLineup?.sports_type !== 1 && <EmptyDataPage />}
      <ScrollView style={{ backgroundColor: '#14161A', height: '100%' }}>
        {/* {ads && <AdsComp item={ads} />} */}
        {isFocus && liveRoomLineup?.sports_type === 1 && (
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

        {isFocus && liveRoomMatchDetails?.home != undefined &&
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
        {isFocus && liveRoomLineup?.sports_type === 1 && (
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
