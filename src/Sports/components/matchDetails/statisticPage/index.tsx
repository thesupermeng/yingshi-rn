import {View, ScrollView} from 'react-native';
import BasketballStatisticPage from './basketballStatisticPage';
import {useSelector} from 'react-redux';
import { TLDetailWhite } from '../../../types/dj_sort';
import { QImageUnselected } from '../../../types/l_fastforward_buffer';

interface XFillButton {
  liveRoomMatchDetails?: TLDetailWhite,
  liveRoomUpdate?: QImageUnselected
}



const StatisticPage = ({liveRoomUpdate, liveRoomMatchDetails} : XFillButton) => {
  
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
