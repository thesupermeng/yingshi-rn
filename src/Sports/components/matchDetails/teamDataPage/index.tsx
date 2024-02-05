import { ScrollView, SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux';
import FootballDataPage from './footballDataPage';
import BasketballDataPage from './basketballDataPage';
// import { useAds } from '@hooks/useAds';
import ScreenContainer from '../../../../components/container/screenContainer';
import { MatchDetailWithRankingData } from '../../../types/liveMatchTypes';
import { useIsFocused } from '@react-navigation/native';

interface Props {
  liveRoomMatchDetails?: MatchDetailWithRankingData
}

const TeamDataPage = ({ liveRoomMatchDetails }: Props) => {
  const isFocus = useIsFocused();
  // const adsList = useSelector(state => state.adsList);
  // const [ads] = useAds(adsList);

  return (
    <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
      {isFocus && liveRoomMatchDetails?.sports_type == 1 && (
        <FootballDataPage
          liveRoomMatchDetails={liveRoomMatchDetails}
        // ads={ads}
        />
      )}
      {isFocus && liveRoomMatchDetails?.sports_type == 2 && (
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
