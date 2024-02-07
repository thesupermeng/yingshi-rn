import React, {
  Component,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import ScreenContainer from '../../../components/container/screenContainer';
import MainHeader from '../../../components/header/homeHeader';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { DetailTab, BannerAdType, SportTabType } from '@type/ajaxTypes';
import VodPlaylist from '../../../components/playlist/vodPlaylist';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import Animated from 'react-native-reanimated';
// import FastImage from 'react-native-fast-image';
import FastImage from '../../../components/common/customFastImage';
// import { API } from './util';
import Api from '../../middleware/api';
import { Url } from '../../middleware/url';
import { formatMatchDate } from '../../utility/utils';
import { MatchDetailsType, Stream } from '../../types/matchTypes';
import MatchDetailsNav from '../../components/matchDetails/MatchDetailsNav';
import MatchSchedule from '../../components/matchSchedule/MatchSchedule';
import LiveStatPage from '../../components/matchDetails/liveStatPage';
import TeamDataPage from '../../components/matchDetails/teamDataPage';
import VodPlayer, { VideoRef } from '../../../components/videoPlayer/vodPlayer';
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
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/hooks';
import { screenModel } from '@type/screenType';
import { incrementSportWatchTime } from '@redux/actions/screenAction';
import BecomeVipOverlay from "../../../components/modal/becomeVipOverlay";
import { NON_VIP_STREAM_TIME_SECONDS } from '@utility/constants';
import UmengAnalytics from '../../../../Umeng/UmengAnalytics';
import { RootState } from '@redux/store';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SettingsReducerState } from '@redux/reducers/settingsReducer';
import VipRegisterBar from '../../../components/adultVideo/vipRegisterBar';
import { BannerContainer } from '../../../components/container/bannerContainer';
import { YSConfig } from '../../../../ysConfig';
import { AdsApi } from '@api';
import LiveChatPage from '../../components/matchDetails/liveChatPage';
import PrivateChatPage from '../../components/matchDetails/privateChatPage';
import { UserStateType } from '@redux/reducers/userReducer';
import { User } from '@models/user';

let insetsTop = 0;
let insetsBottom = 0;

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

const MatchDetails = ({ navigation, route }: BottomTabScreenProps<any>) => {
  const dispatch = useDispatch();

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  )
  const settingsReducer: SettingsReducerState = useAppSelector(
    ({ settingsReducer }: RootState) => settingsReducer
  );
  const userState = useSelector<UserStateType>('userReducer');
  const { textVariants, colors, spacing } = useTheme();
  const [isLiveVideoEnd, setIsLiveVideoEnd] = useState(false);
  const matchID: number = route?.params?.matchId;
  const [streamID, setStreamID] = useState<number>(route?.params?.streamId);
  const [tabList, setTabList] = useState(Array<DetailTab>);
  const [videoSource, setVideoSource] = useState<VideoSource>({
    type: 0,
    url: undefined,
  });
  const [isLiveVideoFullScreen, setIsLiveVideoFullScreen] = useState(false);
  const [shouldShowComponents, setShouldShowComponents] = useState(true);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const showCountdown = !User.isVip(userState.user);

  const videoRef = useRef<VideoRef | null>(null);
  const [bannerAd, setBannerAd] = useState<BannerAdType>();
  const isVip = User.isVip(userState.user);
  const sportTabDetails: SportTabType = YSConfig.instance.findTabByKey('体育');

  // const [isKeyboardShow, setKeyboardShow] = useState(false);

  // ========== for analytics - start ==========
  useEffect(() => {
    UmengAnalytics.sportDetailsViewsAnalytics();
  }, [])
  // ========== for analytics - end ==========

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
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);

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

  const streamer = (match === undefined || match?.streams === undefined || match.streams.length === 0)
    ? null
    : match.streams[0].streamer;

  const isEnableChatRoom = sportTabDetails.settings.enabled_sports_chatroom.toLowerCase() !== 'n' && matchDetails !== undefined;
  const sportType = matchDetails?.sports_type === 1 ? 'football' : matchDetails?.sports_type === 2 ? 'basketball' : '';

  useEffect(() => {
    setTabList([
      ...(isEnableChatRoom && streamer ? [
        {
          name: 'LiveChat',
          title: '聊天室',
          page: (
            <LiveChatPage
              matchID={matchID.toString()}
              streamer={streamer}
              sportType={sportType}
              onPrivateChatPress={onGoPrivateChatPress}
              onInputFocus={onInputFocus}
            />
          ),
        },
        {
          name: 'PrivateChat',
          title: '私聊',
          page: (
            <PrivateChatPage
              matchID={matchID.toString()}
              streamer={streamer}
              sportType={sportType}
              onInputFocus={onInputFocus}
            />
          ),
        },
      ] : []),
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
  }, [streamer, liveRoomUpdate, matchLineUp, matchDetails]);

  const onLiveEnd = useCallback(() => {
    setIsLiveVideoEnd(true);
  }, []);

  const onLiveLoad = useCallback(() => {
    setIsLiveVideoEnd(false);
  }, []);

  useEffect(() => {
    if (match != undefined && match.streams != undefined) {
      const videoUrl = parseVideoURL(match?.streams[0].src);
      setVideoSource({ type: VideoLiveType.LIVE, url: videoUrl });
    }
  }, [match]);

  const handleFullscreenChange = (isFullscreen: boolean) => {
    if (isFullscreen) {
      // If exiting fullscreen, hide MatchDetailsNav after a delay
      setIsNavVisible(false);

      // After 3 seconds, set isNavVisible back to true to show the component
      setTimeout(() => {
        setIsNavVisible(true);
      }, 3000); // Adjust the delay duration (in milliseconds) as needed
    }
  };

  useEffect(() => {
    handleFullscreenChange(screenState.isPlayerFullScreen);
  }, [screenState.isPlayerFullScreen]);
  //   const hideNavInterval = setInterval(() => {
  //     // Hide the MatchDetailsNav for a few seconds
  //     setIsNavVisible(false);

  //     // After 3 seconds, set isNavVisible back to true to show the component
  //     setTimeout(() => {
  //       setIsNavVisible(true);
  //     }, 3000); // Adjust the delay duration (in milliseconds) as needed
  //   }, 3000); // Adjust the interval duration (in milliseconds) as needed

  //   return () => clearInterval(hideNavInterval);
  // }, []); // Run this effect only once on component mount

  // useEffect(() => {
  //   const unsub = setInterval(() => {
  //     dispatch(incrementSportWatchTime());
  //   }, 1000)

  //   return () => clearInterval(unsub)
  // }, [])

  useEffect(() => {
    if (!showBecomeVIPOverlay && screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS && !isVip) {
      setShowBecomeVIPOverlay(true);

      // ========== for analytics - start ==========
      UmengAnalytics.sportDetailsVipPopupTimesAnalytics();
      // ========== for analytics - end ==========
    }

  }, [screenState.sportWatchTime, showBecomeVIPOverlay])

  useFocusEffect(useCallback(() => {
    if (!showBecomeVIPOverlay && screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS && !isVip) {

      setShowBecomeVIPOverlay(true);
    } else if (!showBecomeVIPOverlay) {
      videoRef.current?.setPause(false);
    }
  }, [showBecomeVIPOverlay]))

  const isFullyLoaded = !f1 && !f2 && !f3;

  // useInterstitialAds();

  const insets = useSafeAreaInsets();

  if (Platform.OS === 'android') {
    insetsTop = insets.top;
    insetsBottom = insets.bottom;
  } else {
    insetsTop = insetsTop == 0 ? insets.top : insetsTop;
    insetsBottom = insetsBottom == 0 ? insets.bottom : insets.bottom;
  }

  const fetchBannerAd = async () => {
    const banner = await AdsApi.getBannerAd(111);

    if (banner) {
      setBannerAd(banner);
    } else {
      setBannerAd(undefined);
    }
  }

  useEffect(() => {
    fetchBannerAd();
  }, []);

  const onVipCountdownClick = useCallback(() => {
    videoRef.current?.setPause(true);
    setShowBecomeVIPOverlay(true);

    // ========== for analytics - start ==========
    UmengAnalytics.sportDetailsVipPopupTimesAnalytics();
    // ========== for analytics - end ==========
  }, []);

  const onGoPrivateChatPress = () => {
    navigation.navigate('体育详情', {
      matchId: matchID,
      streamerId: route?.params?.streamerId,
      sportType: route?.params?.sportType,
      screen: 'PrivateChat',
    });
  }

  const onInputFocus = (isFocus: boolean) => {
    if (isFocus === false) {
      Keyboard.dismiss();
    }
    // setKeyboardShow(isFocus);
  }

  return (
    <ScreenContainer
      isPlay={true}
      containerStyle={{
        flex: 1,
        paddingRight: 0,
        paddingLeft: 0,
        // paddingTop: isLiveVideoFullScreen ? 0 : insetsTop,
        // paddingBottom: isLiveVideoFullScreen ? 0 : insetsBottom,
        paddingTop: screenState.isPlayerFullScreen ? 0 : insetsTop,
        paddingBottom: screenState.isPlayerFullScreen ? 0 : insetsBottom,
      }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1, }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <BecomeVipOverlay
          setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
          showBecomeVIPOverlay={showBecomeVIPOverlay}
          isJustClose={showCountdown && NON_VIP_STREAM_TIME_SECONDS > screenState.sportWatchTime}
          selectedTab='sport'
          onClose={() => {
            videoRef.current?.setPause(false);

            if (!(showCountdown && NON_VIP_STREAM_TIME_SECONDS > screenState.sportWatchTime) && route.name === '体育详情') {
              navigation.goBack();
            }
          }}
        />
        {videoSource.url &&
          ((videoSource.type === VideoLiveType.LIVE &&
            match?.streams?.some(streamer => streamer.status == 3)) ||
            videoSource.type === VideoLiveType.ANIMATION) ? (
          <LiveVideo
            videoRef={videoRef}
            liveDataState={match}
            // fullScreen={tempFullscreen}
            streamID={streamID}
            setVideoSource={setVideoSource}
            matchID={matchID}
            onLiveEnd={onLiveEnd}
            onLoad={onLiveLoad}
            videoSource={videoSource}
            onGoBack={navigation.goBack}
            // onFullscreenChangeCallback={isFullscreen}
            showCountdown={showCountdown}
            countdownTime={NON_VIP_STREAM_TIME_SECONDS - screenState.sportWatchTime}
            onVipCountdownClick={onVipCountdownClick}
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
        <VipRegisterBar onPress={() => {
          videoRef.current?.setPause(true);
        }} />

        {/* {bannerAd && (
          <View style={{
            // paddingLeft: spacing.sideOffset,
            // paddingRight: spacing.sideOffset,
            // paddingVertical: 5
          }}>
            <BannerContainer
              bannerAd={bannerAd}
              onMount={() => {
                UmengAnalytics.videoPlayerBannerViewAnalytics({
                  playerType: 'sport',
                });
              }}
              onPress={() => {
                UmengAnalytics.videoPlayerBannerClickAnalytics({
                  playerType: 'sport',
                });
              }}
            />
          </View>
        )} */}

        {settingsReducer.appOrientation === 'PORTRAIT' && ((isNavVisible &&
          isFullyLoaded && tabList.length > 0) ? (
          <MatchDetailsNav
            streamId={10001}
            tabList={tabList}
            defaultTabName={'Live'}
          // isKeyboardShow={isKeyboardShow}
          />
        ) : (
          <View style={styles.fetching}>
            <FastImage
              source={require('@static/images/loading-spinner.gif')}
              style={{ width: 100, height: 80, marginBottom: -20 }}
              resizeMode="contain"
            />
            {/* <Text style={{ ...textVariants.body, color: colors.muted, textAlign: 'center' }}>加载中。。。</Text> */}
          </View>
        )
        )}
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default memo(MatchDetails)

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
