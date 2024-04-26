import {View, ScrollView} from 'react-native';
import BasketballStatisticPage from './basketballStatisticPage';
import {useSelector} from 'react-redux';
import { wawaReactnativeultimatelistviewDisconnected } from '../../../types/wawa_phoneshare_reactnavigation';
import { wawaScrollviewMiddlesound } from '../../../types/wawa_feedback_hash';

interface wawaAwayShow {
  liveRoomMatchDetails?: wawaReactnativeultimatelistviewDisconnected,
  liveRoomUpdate?: wawaScrollviewMiddlesound
}



const StatisticPage = ({liveRoomUpdate, liveRoomMatchDetails} : wawaAwayShow) => {
  
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
