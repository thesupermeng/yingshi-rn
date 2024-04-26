import { ScrollView, SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux';
import FootballDataPage from './footballDataPage';
import BasketballDataPage from './basketballDataPage';
import ScreenContainer from '../../../../components/container/ww_collection';
import { wwShirtBdxadsdk } from '../../../types/ww_sina_liblogger';
import { useIsFocused } from '@react-navigation/native';

interface wwIndexDice {
  liveRoomMatchDetails?: wwShirtBdxadsdk
}

const TeamDataPage = ({ liveRoomMatchDetails }: wwIndexDice) => {
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
