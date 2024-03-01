import {View, ScrollView} from 'react-native';
import BasketballStatisticPage from './basketballStatisticPage';
import {useSelector} from 'react-redux';
import { yys_PlusFilter } from '../../../types/yys_live_libyoga';
import { yys_YellowHover } from '../../../types/yys_white_tick';

interface yys_ConfigureUimanager {
  liveRoomMatchDetails?: yys_PlusFilter,
  liveRoomUpdate?: yys_YellowHover
}



const StatisticPage = ({liveRoomUpdate, liveRoomMatchDetails} : yys_ConfigureUimanager) => {
  
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
