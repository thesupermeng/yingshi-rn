import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import AreaChart from '../../areaChart';
import CustomMatchDetailsTabBar from '../../customMatchDetailsTabBar';
import StatisticsChart from '../../statisticsChart';
import styles from './wawa_hiad_iconnewchat';
import MatchStatisticTab from './matchStatisticTab';
import FootballIconComponent from '../../footballIconComponent';
import AreaChartBasketball from '../../areaChartBasketball';
import MatchStatistic from '../../matchStatistic';
import StorylineEvent from '../../storylineEvent';
import BasketballLiveDetails from '../../basketballLiveDetails';
import LiveScoreBasketball from '../../liveScoreBasketball';
import { wawaReactnativeultimatelistviewDisconnected } from '../../../types/wawa_phoneshare_reactnavigation';
import { wawaScrollviewMiddlesound } from '../../../types/wawa_feedback_hash';
import Weather from '../../weather';
import EmptyDataPage from '../../wawa_shoot_round';
import { useIsFocused } from '@react-navigation/native';

interface wawaAwayShow {
  liveRoomMatchDetails?: wawaReactnativeultimatelistviewDisconnected
  liveRoomUpdate?: wawaScrollviewMiddlesound
}

type wawaDefaultteam = {
  name: string
  children: React.ReactNode
}

const LiveStatPage = ({ liveRoomUpdate, liveRoomMatchDetails }: wawaAwayShow) => {
  const isFocus = useIsFocused();

  // const adsList = useSelector(state => state.adsList);
  

  const tabBar: wawaDefaultteam[] = [
    {
      name: '重要事件',
      children: <StorylineEvent liveRoomUpdate={liveRoomUpdate} />,
    },
    {
      name: '技术统计',
      children: (
        <MatchStatistic
          statisticData={liveRoomUpdate?.football_match_stats?.stats?.filter(
            x => x.type != 'team_id',
          )}
          sportType={liveRoomUpdate?.sports_type}
        />
      ),
    },
  ];

  if (!isFocus) {
    return <View style={{
      backgroundColor: '#14161A',
      flex: 1,
    }} />;
  }

  if (liveRoomMatchDetails?.sports_type === 1) {
    
    if (liveRoomMatchDetails.status === 0) {
      return (
        <ScrollView style={{ backgroundColor: '#14161A' }}>
          <Weather
            weather={liveRoomMatchDetails?.football_match?.environment}
            venue={liveRoomMatchDetails?.football_match?.venue}
          />
          <StatisticsChart stats={liveRoomUpdate?.football_match_live?.stats} />
        </ScrollView>
      );
    }
    if (liveRoomMatchDetails.status !== 0) {
      return (
        <ScrollView style={{ backgroundColor: '#14161A' }}>
          {/* {ads && <AdsComp item={ads} />} */}
          {liveRoomUpdate?.football_match_live && (
            <AreaChart liveRoomUpdate={liveRoomUpdate} />
          )}

          <StatisticsChart stats={liveRoomUpdate?.football_match_live?.stats} />

          {tabBar.length && liveRoomUpdate && (
            <CustomMatchDetailsTabBar tabBar={tabBar} />
          )}

          <FootballIconComponent />
          <Weather
            weather={liveRoomMatchDetails?.football_match?.environment}
            venue={liveRoomMatchDetails?.football_match?.venue}
          />
        </ScrollView>
      );
    }
  } else if (liveRoomMatchDetails?.sports_type === 2) {
    if (liveRoomMatchDetails.status === 0) {
      return (
        <ScrollView style={{ backgroundColor: '#14161A' }}>
          {/* {ads && <AdsComp item={ads} />} */}
          <LiveScoreBasketball liveRoomUpdate={liveRoomUpdate} />
          {/* {liveRoomUpdate !== undefined && Object.keys(liveRoomUpdate).length > 0 && (
            <BasketballLiveDetails
              liveRoomUpdate={liveRoomUpdate}></BasketballLiveDetails>
          )} */}
        </ScrollView>
      );
    }
    if (liveRoomMatchDetails.status !== 0) {
      return (
        <ScrollView style={{ backgroundColor: '#14161A' }}>
          {/* {ads && <AdsComp item={ads} />} */}
          <AreaChartBasketball liveRoomUpdate={liveRoomUpdate} />
          <LiveScoreBasketball liveRoomUpdate={liveRoomUpdate} />
          {liveRoomUpdate !== undefined && Object.keys(liveRoomUpdate).length > 0 && (
            <BasketballLiveDetails
              liveRoomUpdate={liveRoomUpdate}></BasketballLiveDetails>
          )}
        </ScrollView>
      );
    }
  } else if (liveRoomMatchDetails?.sports_type !== 1) {
    return (
      <View>
        <EmptyDataPage />
      </View>
    );
  }
};

export default LiveStatPage;
