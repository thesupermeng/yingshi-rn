import {View, ScrollView} from 'react-native';
import BasketballStatisticPage from './basketballStatisticPage';
import {useSelector} from 'react-redux';
import { wwShirtBdxadsdk } from '../../../types/ww_sina_liblogger';
import { wwWhistleorange } from '../../../types/ww_chinasame';

interface wwIndexDice {
  liveRoomMatchDetails?: wwShirtBdxadsdk,
  liveRoomUpdate?: wwWhistleorange
}



const StatisticPage = ({liveRoomUpdate, liveRoomMatchDetails} : wwIndexDice) => {
  
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
