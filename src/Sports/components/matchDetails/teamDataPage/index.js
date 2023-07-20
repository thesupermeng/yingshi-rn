import {ScrollView, SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';
import FootballDataPage from './footballDataPage';
import BasketballDataPage from './basketballDataPage';
import {useAds} from '../../../hooks/useAds';

const TeamDataPage = () => {
  const liveRoomMatchDetails = useSelector(state => state.liveRoomMatchDetails);
  const adsList = useSelector(state => state.adsList);
  const [ads] = useAds(adsList);

  return (
    <SafeAreaView>
      {/* {liveRoomMatchDetails?.football_match_analysis == undefined &&
        liveRoomMatchDetails?.football_away_injuries == undefined && (
          <EmptyDataPage />
        )} */}

      {liveRoomMatchDetails?.sports_type == 1 && (
        <FootballDataPage
          liveRoomMatchDetails={liveRoomMatchDetails}
          ads={ads}
        />
      )}
      {liveRoomMatchDetails?.sports_type == 2 && (
        <BasketballDataPage
          liveRoomMatchDetails={liveRoomMatchDetails}
          ads={ads}
        />
      )}
    </SafeAreaView>
  );
};

export default TeamDataPage;
