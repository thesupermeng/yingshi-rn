import React, {
  Component,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import ScreenContainer from '../../../components/container/screenContainer';
import MainHeader from '../../../components/header/homeHeader';
import { useTheme } from '@react-navigation/native';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { DetailTab } from '../../../types/ajaxTypes';
import VodPlaylist from '../../../components/playlist/vodPlaylist';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import Animated from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';
// import { API } from './util';
import Api from '../../middleware/api';
import { Url } from '../../middleware/url';
import { formatMatchDate } from '../../utility/utils';
import { MatchDetailsType, Stream } from '../../types/matchTypes';
import MatchDetailsNav from '../../components/matchDetails/MatchDetailsNav';
import MatchSchedule from '../../components/matchSchedule/MatchSchedule';
import LiveStatPage from '../../components/matchDetails/liveStatPage';
import TeamDataPage from '../../components/matchDetails/teamDataPage';
import VodPlayer from '../../../components/videoPlayer/vodPlayer';
import { parseVideoURL } from '../../utility/urlEncryp';
import Video from 'react-native-video';
import LiveVideo from '../../components/liveVideo/liveVideoPlayer';
import { VideoLiveType } from '../../global/const';
import {
  MatchDetailWithRankingData,
  MatchDetailsResponseType,
} from '../../types/liveMatchTypes';
import { MatchUpdatesType } from '../../types/matchUpdatesType';
import BeforeLive from '../../components/beforeLive';
import StatisticPage from '../../components/matchDetails/statisticPage';
import { LineUpType } from '../../types/lineUpTypes';
import LineUpPage from '../../components/matchDetails/lineUpPage';
import AdsBanner from '../../../ads/adsBanner';

type FlatListType = {
  item: MatchDetailsType;
  index: number;
};

interface NavType {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

type VideoSource = {
  type: number;
  url: any;
};

export default ({ navigation, route }: BottomTabScreenProps<any>) => {
  const { textVariants, colors, spacing } = useTheme();
  const [isLiveVideoEnd, setIsLiveVideoEnd] = useState(false);
  const matchID: number = route?.params?.matchId;
  const [streamID, setStreamID] = useState<number>(route?.params?.streamId);
  const [tabList, setTabList] = useState(Array<DetailTab>);
  const [videoSource, setVideoSource] = useState<VideoSource>({
    type: 0,
    url: undefined,
  });
  const { data: match } = useQuery({
    queryKey: ['liveRoomDetails', matchID],
    queryFn: () =>
      Api.call(`${Url.liveRoomDetail}?id=${matchID}`, {}, 'GET').then(
        (res): MatchDetailsType => {
          return res?.data;
        },
      ),
    staleTime: 1000,
  });

  const { data: matchDetails, isFetching: f1 } = useQuery({
    queryKey: ['matchDetails', matchID, streamID],
    queryFn: () =>
      Api.call(`${Url.matchDetails}?id=${matchID}`, {}, 'GET').then(
        (res): MatchDetailWithRankingData => {
          return res?.data;
        },
      ),
    staleTime: 1000,
  });

  const { data: liveRoomUpdate, isFetching: f2 } = useQuery({
    queryKey: ['liveRoomUpdate', matchID, streamID],
    queryFn: () =>
      Api.call(
        `${Url.matchUpdate}?device_type=3&id=${matchID}`,
        {},
        'GET',
      ).then((res): MatchUpdatesType => {
        return res?.data;
      }),
    staleTime: 1000,
  });

  const { data: matchLineUp, isFetching: f3 } = useQuery({
    queryKey: ['matchLineUp', matchID, streamID],
    queryFn: () =>
      Api.call(
        `${Url.matchLineup}?device_type=3&id=${matchID}`,
        {},
        'GET',
      ).then((res): LineUpType => {
        return res?.data;
      }),
    staleTime: 1000,
  });

  useEffect(() => {
    setTabList([
      {
        name: 'Live',
        title: '直播',
        page: (
          <LiveStatPage
            liveRoomUpdate={liveRoomUpdate}
            liveRoomMatchDetails={matchDetails}
          />
        ),
      },
      {
        name: 'TeamData',
        title: '数据',
        page: <TeamDataPage liveRoomMatchDetails={matchDetails} />,
      },
      matchDetails?.sports_type == 1
        ? {
          name: 'Lineup',
          title: '阵容',
          page: (
            <LineUpPage
              liveRoomLineup={matchLineUp}
              liveRoomMatchDetails={matchDetails}
            />
          ),
        }
        : {
          name: 'Statistic',
          title: '统计',
          page: (
            <StatisticPage
              liveRoomMatchDetails={matchDetails}
              liveRoomUpdate={liveRoomUpdate}
            />
          ),
        },
    ]);
  }, [liveRoomUpdate, matchLineUp, matchDetails]);
  // console.log(match[0])

  const onLiveEnd = () => {
    setIsLiveVideoEnd(true);
  };

  const onLiveLoad = () => {
    setIsLiveVideoEnd(false);
  };

  useEffect(() => {
    if (match != undefined && match.streams != undefined) {
      const videoUrl = parseVideoURL(match?.streams[0].src);
      setVideoSource({ type: VideoLiveType.LIVE, url: videoUrl });
    }
  }, [match]);

  const isFullyLoaded = !f1 && !f2 && !f3;
  return (
    <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
      <AdsBanner bottomTabHeight={0}/>
      {videoSource.url &&
        ((videoSource.type === VideoLiveType.LIVE &&
          match?.streams?.some(streamer => streamer.status == 3)) ||
          videoSource.type === VideoLiveType.ANIMATION) ? (
        <LiveVideo
          liveDataState={match}
          // fullScreen={tempFullscreen}
          streamID={streamID}
          setVideoSource={setVideoSource}
          matchID={matchID}
          onLiveEnd={onLiveEnd}
          onLoad={onLiveLoad}
          videoSource={videoSource}
        />
      ) : (
        <BeforeLive
          dataLive={match?.streams}
          onOpenLive={() => {
            if (match?.streams && match?.streams?.length > 0) {
              // onOpen('videoLive');
              const { streamer_id, src } = match?.streams[0];
              setStreamID(streamer_id);
              setIsLiveVideoEnd(false);
              setVideoSource({
                type: VideoLiveType.LIVE,
                url: parseVideoURL(src),
              });
            }
          }}
          onOpenAnimation={(url: string) => {
            // onOpen('animation');
            setIsLiveVideoEnd(false);
            setVideoSource({ type: VideoLiveType.ANIMATION, url: url });
          }}
          listLiveDetails={matchDetails}
          setVideoSource={setVideoSource}
          liveDataState={match}
          listLiveMatchDetailsUpdates={liveRoomUpdate}
        />
      )}
      {isFullyLoaded && tabList.length > 0 ? (
        <MatchDetailsNav streamId={10001} tabList={tabList} />
      ) : (
        <View style={styles.fetching}>
          <FastImage
            source={require('../../../../static/images/loading-spinner.gif')}
            style={{ width: 100, height: 80, marginBottom: -20 }}
            resizeMode="contain"
          />
          {/* <Text style={{ ...textVariants.body, color: colors.muted, textAlign: 'center' }}>加载中。。。</Text> */}
        </View>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  nav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 10,
  },
  backButtonIcon: {
    height: 18,
    width: 16,
  },
  backButtonTouch: {
    height: 60,
    width: 66,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: 20,
    position: 'absolute',
    zIndex: 2,
  },
  topBannerCotainer: {
    // height: '30%',
    // width: '100%',
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'center',
    // paddingHorizontal: 15,
  },
  fetching: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingBottom: '50%',
  },
});
