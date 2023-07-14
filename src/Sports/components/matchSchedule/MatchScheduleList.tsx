import React, { memo, useCallback, useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground, FlatList, Dimensions } from 'react-native';
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

interface Props {
  // match: MatchDetailsType,
  matchTypeID: number
}

type FlatListType = {
  item: MatchDetailsType,
  index: number
}

const MatchScheduleList = ({ matchTypeID }: Props) => {

  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const { data: matches } = useQuery({
    queryKey: ["matches", matchTypeID],
    queryFn: () => Api.call(Url.matches + `?sports_type=${matchTypeID}`, {}, 'GET').then(res => {
      const data = res?.data;
      if (data != undefined) {
        const dates = Object.keys(res.data);
        const matches: { date: string, data: MatchDetailsType[] }[] = dates.map(date => ({ date: formatMatchDate(date), data: res.data[date] }))
        return matches;
      }
    }
    ),
  });
  // console.log('flatlist', matchTypeID)
  const Content = useCallback(({ item, index }: { item: any, index: number }) => {
    return <View style={{ width: width }}>
      {
        matches?.map(match =>
          <View key={match.date}>
            <View style={{ backgroundColor: colors.card2, padding: spacing.sideOffset }}>
              <Text style={textVariants.header}>{match.date}</Text>
            </View>
            <View>
              <FlatList data={match.data} renderItem={({ item }: FlatListType) => <MatchSchedule match={item} />} />
            </View>
          </View>
        )
      }
    </View>
  }, [matches, matchTypeID])

  return (
    <View>
      {
        matches && matches.length > 0
          ? <FlatList
            data={matches}
            windowSize={3}
            maxToRenderPerBatch={2}
            initialNumToRender={2}
            renderItem={Content}
          />
          : <View style={{ height: height }}>
            <EmptyList description='暂无比赛' />
          </View>
      }
    </View>
  );
};

export default memo(MatchScheduleList);
