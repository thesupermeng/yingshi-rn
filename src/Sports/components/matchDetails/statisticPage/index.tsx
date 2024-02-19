import {View, ScrollView} from 'react-native';
import BasketballStatisticPage from './basketballStatisticPage';
import {useSelector} from 'react-redux';
import { yysDicelogoFootballfield } from '../../../types/yys_iconnointernet_guide';
import { yysTeam } from '../../../types/yys_arrow_modules';

interface yysIconarrowrightorangeStation {
  liveRoomMatchDetails?: yysDicelogoFootballfield,
  liveRoomUpdate?: yysTeam
}



const StatisticPage = ({liveRoomUpdate, liveRoomMatchDetails} : yysIconarrowrightorangeStation) => {
  
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
