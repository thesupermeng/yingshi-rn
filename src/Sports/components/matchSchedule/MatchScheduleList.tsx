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

interface Props {
  // match: MatchDetailsType,
  matchTypeID: number
}

type FlatListType = {
  item: MatchDetailsType,
  index: number
}

const MatchScheduleList = ({ matchTypeID }: Props) => {

  const navigation = useNavigation();
  const [subscribe, setSubscribe] = useState(false);
  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get('window').width;
  const BTN_COLORS = ['#30AA55', '#7E9CEE', '#F1377A', '#FFCC12', '#ED7445'];
  // useEffect(() => {
  //   setSubscribe(isSub);
  // }, [isSub]);

  // let totalViews = 0;

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
        matches &&
        matches.map(match =>
          <View key={match.date}>
            <Text>{match.date}</Text>
            <FlatList data={match.data} renderItem={({ item }: FlatListType) => <MatchSchedule match={item} />} />
          </View>
        )
      }
    </View>
  }, [matches, matchTypeID])

  const matchClicked = async () => {

    navigation.navigate('体育详情');

    // const route = await liveRoomName(match?.id);
    // navigation.navigate(route, {
    //   matchId: match?.id,
    //   streamerId:
    //     match?.streams?.length > 0
    //       ? match?.streams[0]?.streamer_id
    //       : null,
    // });
    // navigation.navigate(redirectPage(), {
    //   matchId: match?.id,
    //   streamerId: getOnlineStreamer(),
    // });
  }

  return (
    <View>
      <FlatList
        data={matches}
        windowSize={3}
        maxToRenderPerBatch={15}
        initialNumToRender={20}
        renderItem={Content}
      />
    </View>
  );
};

export default memo(MatchScheduleList);
