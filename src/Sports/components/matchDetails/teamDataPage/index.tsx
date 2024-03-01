import { ScrollView, SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux';
import FootballDataPage from './footballDataPage';
import BasketballDataPage from './basketballDataPage';
import ScreenContainer from '../../../../components/container/yys_executor_expand';
import { yys_PlusFilter } from '../../../types/yys_live_libyoga';
import { useIsFocused } from '@react-navigation/native';

interface yys_ConfigureUimanager {
  liveRoomMatchDetails?: yys_PlusFilter
}

const TeamDataPage = ({ liveRoomMatchDetails }: yys_ConfigureUimanager) => {
  const isFocus = useIsFocused();
  // const adsList = useSelector(state => state.adsList);
  

  return (
    <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
      {isFocus && liveRoomMatchDetails?.sports_type == 1 && (
        <FootballDataPage
          liveRoomMatchDetails={liveRoomMatchDetails}
        
        />
      )}
      {isFocus && liveRoomMatchDetails?.sports_type == 2 && (
        <BasketballDataPage
          liveRoomMatchDetails={liveRoomMatchDetails}
        
        />
      )
      }
    </ScreenContainer >
  );
};

export default TeamDataPage;
