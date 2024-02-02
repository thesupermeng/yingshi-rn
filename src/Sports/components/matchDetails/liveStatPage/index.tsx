import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import AreaChart from '../../areaChart';
import CustomMatchDetailsTabBar from '../../customMatchDetailsTabBar';
import StatisticsChart from '../../statisticsChart';
import styles from './style';
import MatchStatisticTab from './matchStatisticTab';
import FootballIconComponent from '../../footballIconComponent';
import AreaChartBasketball from '../../areaChartBasketball';
import MatchStatistic from '../../matchStatistic';
import StorylineEvent from '../../storylineEvent';
import BasketballLiveDetails from '../../basketballLiveDetails';
import LiveScoreBasketball from '../../liveScoreBasketball';
import { MatchDetailWithRankingData } from '../../../types/liveMatchTypes';
import { MatchUpdatesType } from '../../../types/matchUpdatesType';
import Weather from '../../weather';
import EmptyDataPage from '../../EmptyDataPage';
import { useIsFocused } from '@react-navigation/native';
// import AdsComp from '../../../components/adsComp';
// import {useAds} from '@hooks/useAds';

interface Props {
  liveRoomMatchDetails?: MatchDetailWithRankingData
  liveRoomUpdate?: MatchUpdatesType
}

type Tab = {
  name: string
  children: React.ReactNode
}

const LiveStatPage = ({ liveRoomUpdate, liveRoomMatchDetails }: Props) => {
  const isFocus = useIsFocused();

  // const adsList = useSelector(state => state.adsList);
  // const [ads] = useAds(adsList);

  const tabBar: Tab[] = [
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
    // 比赛未开赛
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
