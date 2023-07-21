import { ScrollView, SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux';
import FootballDataPage from './footballDataPage';
import BasketballDataPage from './basketballDataPage';
// import { useAds } from '../../../hooks/useAds';
import ScreenContainer from '../../../../components/container/screenContainer';
import { MatchDetailWithRankingData } from '../../../types/liveMatchTypes';

interface Props {
  liveRoomMatchDetails?: MatchDetailWithRankingData
}

const TeamDataPage = ({ liveRoomMatchDetails }: Props) => {
  // const adsList = useSelector(state => state.adsList);
  // const [ads] = useAds(adsList);

  return (
    <ScreenContainer >
      {liveRoomMatchDetails?.sports_type == 1 && (
        <FootballDataPage
          liveRoomMatchDetails={liveRoomMatchDetails}
        // ads={ads}
        />
      )}
      {
        liveRoomMatchDetails?.sports_type == 2 && (
          <BasketballDataPage
            liveRoomMatchDetails={liveRoomMatchDetails}
          // ads={ads}
          />
        )
      }
    </ScreenContainer >
  );
};

export default TeamDataPage;
