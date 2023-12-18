import React from 'react';
import {ImageBackground, View, Text} from 'react-native';

//style
import styles from './style';

//components
import BasketballMatchScoreDetails from './basketballMatchScoreDetails';
import BasketballMatchScoreDetailsMap from './basketballMatchScoreDetailsMap';
import BasketballMatchTeamDetails from './basketballMatchTeamDetails';

const BasketballLiveDetails = props => {
  const liveRoomUpdateData = props?.liveRoomUpdate;
  const homeData = liveRoomUpdateData?.home;
  const awayData = liveRoomUpdateData?.away;
  const totalData = liveRoomUpdateData?.basketball_match_live?.players?.total;
  const thisTimeData = liveRoomUpdateData?.basketball_match_live?.stats;
  //   console.log('totalData', totalData);
  return (
    <View style={styles.mainContainer}>
      <BasketballMatchTeamDetails
        homeData={homeData}
        awayData={awayData}
        totalData={totalData}
        thisTimeData={thisTimeData}></BasketballMatchTeamDetails>
      <BasketballMatchScoreDetailsMap
        totalData={totalData}></BasketballMatchScoreDetailsMap>
      <BasketballMatchScoreDetails
        totalData={totalData}></BasketballMatchScoreDetails>
    </View>
  );
};

export default BasketballLiveDetails;
