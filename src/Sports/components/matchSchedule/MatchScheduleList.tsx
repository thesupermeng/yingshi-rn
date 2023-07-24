import React, { memo, useCallback, useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground, FlatList, Dimensions, StyleSheet } from 'react-native';
import { Link, useTheme } from '@react-navigation/native';
import styles from './style';
import { IsSub, Sub, Views, IconViewerGif } from '../../assets';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import vars from '../../utility/vars';
import { HomeIcon, AwayIcon, AnimationLive, VideoLive } from '../../assets';
import {
  calculateScore,
  formatMatchDate,
  getMatchStatus,
  liveRoomName,
} from '../../utility/utils';
import store from '../../../redux/store';
// import FollowMatchAction from '../../redux/actions/followMatchAction';
import { useNavigation } from '@react-navigation/native';
import { MatchDetailsType } from '../../types/matchTypes';
// import {showToast} from '../../utility/toast';
import FixedTouchableHighlight from '../fixedTouchableHighlight';
import { Url } from '../../middleware/url';
import { useQuery } from '@tanstack/react-query';
import Api from '../../middleware/api';
import MatchSchedule from './MatchSchedule';
import ScreenContainer from '../../../components/container/screenContainer';
import EmptyList from '../../../components/common/emptyList';
import FastImage from 'react-native-fast-image';
import MatchScheduleLive from './MatchScheduleLive';

interface Props {
  matchTypeID: number,
  status?: number
  matchDetailType?: 'default' | 'live'
}

type FlatListType = {
  item: MatchDetailsType,
  index: number
}

const MatchScheduleList = ({ matchTypeID, status, matchDetailType = 'default' }: Props) => {

  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const getUrl = () => {
    let url = '';
    if (matchTypeID !== -1) {
      url += `?sports_type=${matchTypeID}`;
    }
    if (url === '') {
      url = '?';
    }
    if (status !== -1) {
      url += `&status=${status}`;
    } else {
      url += `&is_live=${true}`;
    }
    return Url.matches11 + url;
  }

  const { data: matches, isFetching, refetch, isRefetching } = useQuery({
    queryKey: ["matches", matchTypeID, `status=${status}`],
    queryFn: () => Api.call(getUrl(), {}, 'GET').then(res => {
      const data = res?.data;
      if (data != undefined) {
        const dates = Object.keys(res.data);
        const matches: { date: string, data: MatchDetailsType[] }[] = dates.map(date => ({ date: formatMatchDate(date), data: res.data[date] }))
        return matches;
      }
    }),
    cacheTime: 60,
    staleTime: 60
  }
  );
  const Content = useCallback(() => {
    return <View style={{ width: width }}>
      {
        matches?.map((match, idx) =>
          <View key={`${match.date}-${idx}`} >
            <View style={{ backgroundColor: colors.card2, padding: spacing.sideOffset, marginBottom: matchDetailType === 'default' ? 0 : 16 }}>
              <Text style={textVariants.header}>{match.date}</Text>
            </View>
            <View>
              {
                matchDetailType === 'default'
                  ? match.data.map((item, index) => <MatchSchedule key={index} matchSche={item} />)
                  : match.data.map((item, index) => <MatchScheduleLive key={index} matchSche={item} />)
              }
            </View>
          </View>
        )
      }
    </View>
  }, [matches])

  return (
    <View style={{ flex: 1 }}>
      {
        matches && matches.length > 0
          ? <FlatList
            data={matches}
            windowSize={3}
            maxToRenderPerBatch={2}
            initialNumToRender={1}
            renderItem={Content}
          />
          : <View style={{ height: height }}>
            {
              (isFetching || isRefetching)
                ? <View style={styles.buffering}>
                  <FastImage
                    source={require('../../../../static/images/loading-spinner.gif')}
                    style={{ width: 100, height: 100 }}
                    resizeMode="contain"
                  />
                </View>
                : <EmptyList description='暂无比赛' />

            }

          </View>
      }
      {
        !isFetching && !isRefetching &&
        <TouchableOpacity style={styles.refresh} onPress={() => { refetch() }}>
          <FastImage
            source={require('../../assets/images/IconRefresh.png')}
            style={{ width: 25, height: 25 }}
            resizeMode="contain"
          />
          <Text style={styles.refreshFont}>刷新</Text>
        </TouchableOpacity>
      }
    </View>
  );
};
export default memo(MatchScheduleList);
