import {View, ScrollView} from 'react-native';
import BasketballStatisticPage from './basketballStatisticPage';
import {useSelector} from 'react-redux';
import { MatchDetailWithRankingData } from '../../../types/liveMatchTypes';
import { MatchUpdatesType } from '../../../types/matchUpdatesType';

interface Props {
  liveRoomMatchDetails?: MatchDetailWithRankingData,
  liveRoomUpdate?: MatchUpdatesType
}



const StatisticPage = ({liveRoomUpdate, liveRoomMatchDetails} : Props) => {
  // const [ads] = useAds(adsList);
  return (
    <View>
      <BasketballStatisticPage
        liveRoomUpdate={liveRoomUpdate}
        liveRoomMatchDetails={liveRoomMatchDetails}
      />
    </View>
  );
};

export default StatisticPage;
