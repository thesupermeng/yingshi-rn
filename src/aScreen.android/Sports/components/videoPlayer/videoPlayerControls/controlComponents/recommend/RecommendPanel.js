import {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import {NoRecommend} from './NoRecommend';
import {RecommendCard} from './RecommendCard';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import LiveRoomAction, {
  clearLiveRelatedStreams,
  hideControlAction,
  setVideoSource,
  updateVideoPropPipe,
  VideoPlayerActions,
} from '../../../../../pages/matchDetails/action';
import {Colors} from '../../../../../global/colors';
import {liveRoomName} from '../../../../../utility/utils';
import {VideoLiveType} from '../../../../../global/const';

export const RecommendPanel = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const liveRoomAction = new LiveRoomAction(dispatch);
  const listLiveMatchDetails = useSelector(state => state.liveRoomMatchDetails);
  const liveRelatedStreams = useSelector(state => state.liveRelatedStreams);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    clearLiveRelatedStreams();
    getRelatedStreams();
  }, [listLiveMatchDetails.id]);

  const getRelatedStreams = async () => {
    setIsLoading(true);
    await liveRoomAction.getRelatedStreams(listLiveMatchDetails.id);
    setTimeout(() => {
      setIsLoading(false);
    });
  };

  const onMatchSelect = async match => {
    const matchId = match?.match_id;
    if (matchId) {
      const route = await liveRoomName(matchId);
      dispatch(
        updateVideoPropPipe([
          VideoPlayerActions.setVideoSource(VideoLiveType.LIVE, match.src),
          VideoPlayerActions.hideControl,
          VideoPlayerActions.hideBottomSheet,
        ]),
      );
      navigation.navigate(route, {
        matchId,
      });
    }
  };
  return (
    <View style={styles.panel}>
      <FlatList
        style={styles.scrollContainer}
        data={
          liveRelatedStreams?.length % 2 === 1
            ? [...liveRelatedStreams, {}]
            : liveRelatedStreams
        }
        keyExtractor={stream => stream.match_id}
        renderItem={({item: stream}) => {
          return (
            <TouchableHighlight
              style={styles.card}
              onPress={() => onMatchSelect(stream)}>
              <RecommendCard data={stream} />
            </TouchableHighlight>
          );
        }}
        numColumns={2}
        ListFooterComponent={
          <View style={styles.footer}>
            <Text style={styles.footerText}>无更多推荐比赛</Text>
          </View>
        }
        ListEmptyComponent={
          isLoading ? null : (
            <NoRecommend onRefresh={() => getRelatedStreams()} />
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    backgroundColor: 'transparent',
    color: 'white',
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 20,
    alignItems: 'center',
    // width: 400,
  },
  scrollContainer: {
    width: '100%',
    flex: 1,
  },
  cardContainer: {
    flex: 1,
  },
  card: {
    flex: 1,
  },
  footer: {
    flex: 0,
    margin: 10,
    alignItems: 'center',
  },
  footerText: {
    color: Colors.colorDarkGreyText,
  },
});
