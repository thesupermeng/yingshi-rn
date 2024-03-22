import {View, ScrollView} from 'react-native';
import BasketballStatisticPage from './basketballStatisticPage';
import {useSelector} from 'react-redux';
import { mayi_Cast } from '../../../types/mayi_search';
import { mayi_Humidity } from '../../../types/mayi_predictionarrow_langkey';

interface mayi_GoogleViews {
  liveRoomMatchDetails?: mayi_Cast,
  liveRoomUpdate?: mayi_Humidity
}



const StatisticPage = ({liveRoomUpdate, liveRoomMatchDetails} : mayi_GoogleViews) => {
  
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
