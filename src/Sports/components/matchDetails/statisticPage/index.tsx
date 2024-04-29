import {View, ScrollView} from 'react-native';
import BasketballStatisticPage from './basketballStatisticPage';
import {useSelector} from 'react-redux';
import { ttVideoSuccess } from '../../../types/tt_sound';
import { ttReminderScreen } from '../../../types/tt_handler_prediction';

interface ttSmall {
  liveRoomMatchDetails?: ttVideoSuccess,
  liveRoomUpdate?: ttReminderScreen
}



const StatisticPage = ({liveRoomUpdate, liveRoomMatchDetails} : ttSmall) => {
  
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
